import {
  BROWSER_APPLICATION_SCHEMA,
  BROWSER_PRODUCT_SCHEMA,
  assertBrowserApplicationManifest,
  assertBrowserProductManifest,
  manifestInventoryEntry,
} from "./contract.js";
import {
  CapabilityError,
  CapabilityHost,
  CapabilityPolicy,
  CapabilityRegistry,
  capabilityId,
} from "./capability.js";
import { decodeUtf8, encodeUtf8 } from "./runtime.js";
import { importModuleBytes } from "./module.js";
import { loadSourceInventory } from "./source-inventory.js";
import { keyword, parseRasaData, payloadName } from "./data.js";

export class Distribution {
  #complete;
  #layers;
  #providers;
  #runtimeCapabilities = new Set();
  #target;

  constructor({
    manifestUrl,
    productUrl,
    productManifest,
    applicationManifest = null,
    sourceInventory,
    libraries = [],
    packages = [],
    initialNamespace = "",
    registry = new CapabilityRegistry(),
    providerInstances = new Map(),
    policy = new CapabilityPolicy(),
    host = null,
    layers = [],
    providers = [],
    target = "wasm-browser",
  }) {
    this.manifestUrl = manifestUrl;
    this.productUrl = productUrl;
    this.productManifest = productManifest;
    this.applicationManifest = applicationManifest;
    this.sourceInventory = sourceInventory;
    this.libraries = libraries;
    this.packages = packages;
    this.initialNamespace = initialNamespace;
    this.registry = registry;
    this.providerInstances = providerInstances;
    this.policy = policy;
    this.host = host || new CapabilityHost({ registry, policy });
    this.#layers = layers;
    this.#providers = providers;
    this.#target = target;
    this.#complete = sourceInventory !== null && sourceInventory !== undefined;
  }

  get manifest() {
    return this.applicationManifest || this.productManifest;
  }

  requiredRuntimeCapabilities() {
    return this.policy.entries().length > 0 ? ["provider-call"] : [];
  }

  setRuntimeCapabilities(capabilities) {
    this.#runtimeCapabilities = new Set(capabilities || []);
  }

  async complete(options = {}) {
    if (this.#complete) return this;
    const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
    const readJson = options.readJson || ((url) => defaultReadJson(url, fetchImpl));
    const readBytes = options.readBytes || ((url) => defaultReadBytes(url, fetchImpl));
    const productManifest = this.productManifest;
    const productUrl = new URL(this.productUrl);

    const sourceInventory = await loadSourceInventory(
      resolveUrl(productManifest.source.manifest, productUrl),
      {
        readJson,
        readBytes,
        fetch: fetchImpl,
        sourceRootUrl: resolveUrl(productManifest.source.root, productUrl),
      },
    );
    if (sourceInventory.id !== productManifest.source.id) {
      throw new Error(
        `browser product source identity is ${productManifest.source.id}, inventory loaded ${sourceInventory.id}`,
      );
    }

    this.sourceInventory = sourceInventory;
    this.libraries = await loadLibraries(this.#layers, readBytes);
    this.packages = await loadPackages(this.#layers, readBytes);
    await registerProviders(this, this.#providers, {
      fetchImpl,
      importModule: options.importModule,
      readBytes,
      target: this.#target,
    });
    this.#complete = true;
    return this;
  }

  componentImports() {
    return {
      "rasa:runtime/host": {
        call: async (request) => encodeUtf8(await this.host.callAsync(decodeUtf8(request))),
      },
      "rasa:runtime/source-loader": {
        loadRunnerSources() {
          throw new Error("browser runner :files/:paths loading is not configured");
        },
      },
    };
  }

  async configureSession(runtime, session, options = { phases: "all" }) {
    if (!this.#complete) throw new Error("browser distribution is not loaded");
    const reports = [
      await runtime.setAdmittedOperationsAsync(session, this.admittedOperations()),
    ];
    for (const source of this.libraries) {
      reports.push(await evaluateSourceLibrary(runtime, session, source, options));
    }
    if (this.initialNamespace) {
      reports.push(await runtime.evaluateSessionAsync(
        session,
        `(ns ${this.initialNamespace})`,
        options,
      ));
    }
    return reports;
  }

  admittedOperations() {
    if (!this.#runtimeCapabilities.has("provider-call")) return [];
    return this.#declaredAdmittedOperations();
  }

  #declaredAdmittedOperations() {
    const declared = new Set();
    for (const { data, packageName } of this.packages) {
      for (const exported of data?.exports || []) {
        if (!admitsBrowserAdapter(exported)) continue;
        const identity = payloadName(exported?.capability)
          || capabilityId(packageName, payloadName(exported?.name));
        if (identity) declared.add(identity);
      }
    }
    return this.registry.entries()
      .filter((identity) => declared.has(identity))
      .filter((identity) => {
        const slash = identity.lastIndexOf("/");
        return slash > 0 && this.policy.allows(
          identity.slice(0, slash),
          identity.slice(slash + 1),
        );
      })
      .sort();
  }
}

export async function loadDistribution(manifestUrl, options = {}) {
  return await (await prepareDistribution(manifestUrl, options)).complete(options);
}

export async function prepareDistribution(manifestUrl, options = {}) {
  const entryUrl = absoluteUrl(manifestUrl);
  const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
  const readJson = options.readJson || ((url) => defaultReadJson(url, fetchImpl));
  const target = options.target || "wasm-browser";
  const entryManifest = await readJson(entryUrl.href);

  let productUrl = entryUrl;
  let productManifest = entryManifest;
  let applicationManifest = null;
  let applicationUrl = null;
  if (entryManifest?.schema === BROWSER_APPLICATION_SCHEMA) {
    applicationManifest = assertBrowserApplicationManifest(entryManifest);
    applicationUrl = entryUrl;
    productUrl = resolveUrl(applicationManifest.product, applicationUrl);
    productManifest = await readJson(productUrl.href);
  } else if (entryManifest?.schema !== BROWSER_PRODUCT_SCHEMA) {
    throw new Error(`unsupported Rasa browser entry schema ${entryManifest?.schema || "missing"}`);
  }
  assertBrowserProductManifest(productManifest);

  const layers = [
    { manifest: productManifest, baseUrl: productUrl },
    ...(applicationManifest ? [{ manifest: applicationManifest, baseUrl: applicationUrl }] : []),
  ];
  const registry = new CapabilityRegistry();
  const policy = new CapabilityPolicy(
    layers.flatMap(({ manifest }) => manifest.policy?.allow || []),
  );
  return new Distribution({
    manifestUrl: entryUrl.href,
    productUrl: productUrl.href,
    productManifest,
    applicationManifest,
    sourceInventory: null,
    initialNamespace: initialNamespace(
      applicationManifest?.session || productManifest.session,
    ),
    registry,
    policy,
    layers,
    providers: providerEntries(layers).filter(({ entry }) => (entry.target || target) === target),
    target,
  });
}

async function registerProviders(distribution, providers, options) {
  for (const { entry, baseUrl, manifest } of providers) {
    if (entry.kind !== "browser-module") {
      throw new Error(`unsupported browser provider kind ${entry.kind}`);
    }
    const moduleUrl = resolveUrl(requiredField(entry, "module"), baseUrl).href;
    const bytes = await verifiedLayerBytes(
      { manifest, baseUrl },
      entry.module,
      options.readBytes,
      `browser provider ${entry.package || entry.module}`,
    );
    const module = await importModuleBytes(moduleUrl, bytes, options.importModule);
    if (typeof module.register !== "function") {
      throw new Error(`browser provider module ${moduleUrl} does not export register`);
    }
    const instance = module.register(distribution.registry, {
      manifest: distribution.applicationManifest || distribution.productManifest,
      productManifest: distribution.productManifest,
      applicationManifest: distribution.applicationManifest,
      distribution,
      provider: entry,
      moduleUrl,
      target: options.target,
      baseUrl,
      fetch: options.fetchImpl,
      CapabilityError,
      refusal: providerRefusal(options.target),
    });
    if (instance !== undefined) {
      distribution.providerInstances.set(entry.package || moduleUrl, instance);
    }
  }
}

function admitsBrowserAdapter(exported) {
  const target = (exported?.targets || []).find(
    (entry) => payloadName(entry?.target) === "wasm-browser",
  );
  return payloadName(target?.availability) === "requires-adapter"
    && payloadName(target?.["adapter-kind"] || target?.adapter) === "javascript";
}

async function loadLibraries(layers, readBytes) {
  const libraries = [];
  for (const { manifest, baseUrl } of layers) {
    for (const entry of manifest.libraries || []) {
      const asset = assetUrl(entry);
      const url = resolveUrl(asset, baseUrl).href;
      libraries.push({
        url,
        sourceId: sourceLibrarySourceId(entry, url),
        text: decodeUtf8(await verifiedLayerBytes(
          { manifest, baseUrl },
          asset,
          readBytes,
          `browser source library ${entry.sourceId || asset}`,
        )),
      });
    }
  }
  return libraries;
}

async function loadPackages(layers, readBytes) {
  const packages = [];
  for (const { manifest, baseUrl } of layers) {
    for (const entry of manifest.packages || []) {
      const asset = assetUrl(entry);
      const url = resolveUrl(asset, baseUrl).href;
      const text = decodeUtf8(await verifiedLayerBytes(
        { manifest, baseUrl },
        asset,
        readBytes,
        `browser package ${entry.package || asset}`,
      ));
      const data = parseRasaData(text);
      packages.push({
        url,
        text,
        data,
        packageName: entry.package || packageNameFromPackage(data) || packageNameFromUrl(url),
      });
    }
  }
  return packages;
}

async function verifiedLayerBytes(layer, asset, readBytes, label) {
  const entry = manifestInventoryEntry(layer.manifest, asset, manifestLabel(layer.manifest));
  const url = resolveUrl(asset, layer.baseUrl).href;
  const bytes = bytesFor(await readBytes(url, label));
  if (bytes.byteLength !== entry.bytes) {
    throw new Error(`${label} byte length is ${bytes.byteLength}, expected ${entry.bytes}`);
  }
  const actual = await sha256(bytes);
  if (actual !== entry.sha256) {
    throw new Error(`${label} digest is ${actual}, expected ${entry.sha256}`);
  }
  return bytes;
}

function manifestLabel(manifest) {
  return manifest?.schema === BROWSER_APPLICATION_SCHEMA
    ? `browser application ${manifest.application.id}`
    : `browser product ${manifest.product.id}`;
}

function providerEntries(layers) {
  return layers.flatMap(({ manifest, baseUrl }) =>
    (manifest.providers || []).map((entry) => ({ entry, baseUrl, manifest })));
}

async function evaluateSourceLibrary(runtime, session, source, options) {
  return await runtime.evaluateSessionWithSourceIdAsync(
    session,
    source.sourceId || source.url,
    source.text,
    options,
  );
}

function initialNamespace(session = {}) {
  const name = String(session?.initialNamespace || "");
  if (!name) return "";
  if (!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(name)) {
    throw new Error(`invalid browser session initialNamespace ${JSON.stringify(name)}`);
  }
  return name;
}

function providerRefusal(target) {
  return (kind, message, data = {}) => new CapabilityError(kind, message, {
    "rasa.host/target": keyword(target),
    ...data,
  });
}

function sourceLibrarySourceId(entry, url) {
  return typeof entry === "object" && entry?.sourceId ? String(entry.sourceId) : url;
}

function packageNameFromPackage(data) {
  return payloadName(data?.id || data?.["package/id"]);
}

function packageNameFromUrl(url) {
  const parts = new URL(url).pathname.split("/").filter(Boolean);
  const index = parts.lastIndexOf("package.ras");
  return index > 0 ? parts[index - 1] : "";
}

function assetUrl(entry) {
  return typeof entry === "string" ? entry : requiredField(entry, "url");
}

function requiredField(value, field) {
  if (!value || value[field] === undefined || value[field] === null || value[field] === "") {
    throw new Error(`browser manifest is missing ${field}`);
  }
  return value[field];
}

function resolveUrl(value, baseUrl) {
  return new URL(value, baseUrl);
}

function absoluteUrl(value) {
  return value instanceof URL
    ? value
    : new URL(value, globalThis.location?.href || "http://localhost/");
}

async function defaultReadJson(url, fetchImpl) {
  const response = await fetchResource(fetchImpl, url);
  if (!response.ok) throw new Error(`browser product JSON load failed: ${response.status}`);
  return response.json();
}

async function defaultReadBytes(url, fetchImpl) {
  const response = await fetchResource(fetchImpl, url);
  if (!response.ok) throw new Error(`browser product asset load failed: ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  return new Uint8Array(value);
}

async function sha256(bytes) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Web Crypto is required to verify browser application assets");
  }
  const digest = new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", bytes));
  return [...digest].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function fetchResource(fetchImpl, url) {
  if (typeof fetchImpl !== "function") {
    throw new Error("browser product loading requires fetch or explicit asset readers");
  }
  return fetchImpl(url);
}
