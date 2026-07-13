import {
  CapabilityError,
  CapabilityHost,
  CapabilityPolicy,
  CapabilityRegistry,
  capabilityId,
} from "./capability.js";
import { keyword, parseRasaData, payloadName } from "./data.js";

export class BrowserDistribution {
  constructor({
    manifestUrl,
    manifest,
    runtimeUrl,
    adapterBaseUrl = null,
    optimizerManifestUrl = null,
    sourceLibraries = [],
    packages = [],
    initialNamespace = "",
    registry = new CapabilityRegistry(),
    providerInstances = new Map(),
    policy = new CapabilityPolicy(),
    host = null,
  }) {
    this.manifestUrl = manifestUrl;
    this.manifest = manifest;
    this.runtimeUrl = runtimeUrl;
    this.adapterBaseUrl = adapterBaseUrl;
    this.optimizerManifestUrl = optimizerManifestUrl;
    this.sourceLibraries = sourceLibraries;
    this.packages = packages;
    this.initialNamespace = initialNamespace;
    this.registry = registry;
    this.providerInstances = providerInstances;
    this.policy = policy;
    this.host = host || new CapabilityHost({ registry, policy });
  }

  engineOptions(extra = {}) {
    return {
      ...extra,
      host: extra.host ?? this.host,
      ...(this.adapterBaseUrl ? { adapterBaseUrl: this.adapterBaseUrl } : {}),
      ...(this.optimizerManifestUrl ? { optimizerManifestUrl: this.optimizerManifestUrl } : {}),
    };
  }

  async configureSession(engine, session, options = { phases: "all" }) {
    const setAdmitted = engine.setAdmittedOperationsAsync
      ? engine.setAdmittedOperationsAsync.bind(engine)
      : engine.setAdmittedOperations.bind(engine);
    const reports = [
      await setAdmitted(session, this.admittedOperations()),
    ];
    for (const source of this.sourceLibraries) {
      reports.push(await evaluateSourceLibrary(engine, session, source, options));
    }
    if (this.initialNamespace) {
      reports.push(await evaluateSession(
        engine,
        session,
        `(ns ${this.initialNamespace})`,
        options,
      ));
    }
    return reports;
  }

  admittedOperations() {
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

export async function loadBrowserDistribution(manifestUrl, options = {}) {
  const baseUrl = absoluteUrl(manifestUrl);
  const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
  const readJson = options.readJson || ((url) => defaultReadJson(url, fetchImpl));
  const readText = options.readText || ((url) => defaultReadText(url, fetchImpl));
  const importModule = options.importModule || ((url) => import(/* @vite-ignore */ url));
  const target = options.target || "wasm-browser";
  const manifest = await readJson(baseUrl.href);
  options.validateManifest?.(manifest);
  rejectLegacyFields(manifest);
  const runtimeUrl = resolveUrl(requiredField(manifest, "runtime"), baseUrl).href;
  const adapterBaseUrl = manifest.adapterBaseUrl
    ? resolveUrl(manifest.adapterBaseUrl, baseUrl).href
    : null;
  const optimizerManifestUrl = manifest.optimizedCallables
    ? resolveUrl(entryUrl(manifest.optimizedCallables), baseUrl).href
    : null;
  const sourceLibraries = await Promise.all(
    (manifest.sourceLibraries || []).map(async (entry) => {
      const url = resolveUrl(entryUrl(entry), baseUrl).href;
      return {
        url,
        sourceId: sourceLibrarySourceId(entry, url),
        text: await readText(url),
      };
    }),
  );
  const packages = await Promise.all(
    (manifest.packages || []).map(async (entry) => {
      const url = resolveUrl(entryUrl(entry), baseUrl).href;
      const text = await readText(url);
      const data = parseRasaData(text);
      return {
        url,
        text,
        data,
        packageName: entry.package || packageNameFromPackage(data) || packageNameFromUrl(url),
      };
    }),
  );
  const registry = new CapabilityRegistry();
  const policy = CapabilityPolicy.fromManifest(manifest.policy || {});
  const distribution = new BrowserDistribution({
    manifestUrl: baseUrl.href,
    manifest,
    runtimeUrl,
    adapterBaseUrl,
    optimizerManifestUrl,
    sourceLibraries,
    packages,
    initialNamespace: initialNamespace(manifest.session),
    registry,
    policy,
  });

  for (const provider of manifest.providers || []) {
    if ((provider.target || target) !== target) continue;
    if (provider.kind !== "browser-module") {
      throw new Error(`unsupported browser provider kind ${provider.kind}`);
    }
    const moduleUrl = resolveUrl(requiredField(provider, "module"), baseUrl).href;
    const module = await importModule(moduleUrl);
    if (typeof module.register !== "function") {
      throw new Error(`browser provider module ${moduleUrl} does not export register`);
    }
    const instance = module.register(registry, {
      manifest,
      distribution,
      provider,
      moduleUrl,
      target,
      baseUrl,
      fetch: fetchImpl,
      CapabilityError,
      refusal: providerRefusal(target),
    });
    if (instance !== undefined) {
      distribution.providerInstances.set(provider.package || moduleUrl, instance);
    }
  }

  return distribution;
}

function admitsBrowserAdapter(exported) {
  const target = (exported?.targets || []).find(
    (entry) => payloadName(entry?.target) === "wasm-browser",
  );
  return payloadName(target?.availability) === "requires-adapter"
    && payloadName(target?.["adapter-kind"] || target?.adapter) === "javascript";
}

async function evaluateSourceLibrary(engine, session, source, options) {
  if (typeof engine.evaluateSessionWithSourceIdAsync === "function") {
    return await engine.evaluateSessionWithSourceIdAsync(
      session,
      source.sourceId || source.url,
      source.text,
      options,
    );
  }
  if (typeof engine.evaluateSessionWithSourceId === "function") {
    return await engine.evaluateSessionWithSourceId(
      session,
      source.sourceId || source.url,
      source.text,
      options,
    );
  }
  return await evaluateSession(engine, session, source.text, options);
}

async function evaluateSession(engine, session, source, options) {
  if (typeof engine.evaluateSessionAsync === "function") {
    return await engine.evaluateSessionAsync(session, source, options);
  }
  return await engine.evaluateSession(session, source, options);
}

function initialNamespace(session = {}) {
  const name = String(session?.initialNamespace || "");
  if (!name) return "";
  if (!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(name)) {
    throw new Error(`invalid browser session initialNamespace ${JSON.stringify(name)}`);
  }
  return name;
}

function rejectLegacyFields(manifest) {
  const fields = ["catalog", "catalogs", "providerManifest", "providerManifests", "manifests"]
    .filter((field) => manifest && Object.hasOwn(manifest, field));
  if (fields.length > 0) {
    throw new Error(
      `browser distribution uses retired fields ${fields.join(", ")}; use packages with package.ras`,
    );
  }
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

function entryUrl(entry) {
  return typeof entry === "string" ? entry : requiredField(entry, "url");
}

function requiredField(value, field) {
  if (!value || value[field] === undefined || value[field] === null || value[field] === "") {
    throw new Error(`browser product manifest is missing ${field}`);
  }
  return value[field];
}

function resolveUrl(value, baseUrl) {
  return new URL(value, baseUrl);
}

function absoluteUrl(value) {
  return new URL(value, globalThis.location?.href || "http://localhost/");
}

async function defaultReadJson(url, fetchImpl) {
  const response = await fetchResource(fetchImpl, url);
  if (!response.ok) throw new Error(`browser product JSON load failed: ${response.status}`);
  return response.json();
}

async function defaultReadText(url, fetchImpl) {
  const response = await fetchResource(fetchImpl, url);
  if (!response.ok) throw new Error(`browser product asset load failed: ${response.status}`);
  return response.text();
}

function fetchResource(fetchImpl, url) {
  if (typeof fetchImpl !== "function") {
    throw new Error("browser product loading requires fetch or explicit asset readers");
  }
  return fetchImpl(url);
}
