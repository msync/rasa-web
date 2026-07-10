export class BrowserResourceTable {
  constructor(prefix) {
    this.prefix = prefix;
    this.nextId = 1;
    this.resources = new Map();
  }

  insert(kind, value) {
    const id = `${this.prefix}/${kind}/${this.nextId++}`;
    this.resources.set(id, { kind, value });
    return id;
  }

  get(id, kind = null) {
    const entry = this.resources.get(id);
    if (!entry) {
      throw new Error(`unknown resource handle ${id}`);
    }
    if (kind && entry.kind !== kind) {
      throw new Error(`resource ${id} has kind ${entry.kind}, expected ${kind}`);
    }
    return entry.value;
  }
}

export class BrowserCapabilityError extends Error {
  constructor(kind, message, data = {}) {
    super(message);
    this.name = "BrowserCapabilityError";
    this.kind = kind;
    this.data = data;
  }
}

export class BrowserCapabilityPolicy {
  constructor(allowed = []) {
    this.allowed = new Set(allowed.map(String));
  }

  static fromManifest(policy = {}) {
    return new BrowserCapabilityPolicy(policy.allow || []);
  }

  allows(packageName, exportName) {
    return this.allowed.has("*") || this.allowed.has(capabilityKey(packageName, exportName));
  }

  entries() {
    return [...this.allowed].sort();
  }
}

export class CapabilityRegistry {
  constructor() {
    this.handlers = new Map();
  }

  register(packageName, exportName, handler) {
    this.handlers.set(capabilityKey(packageName, exportName), handler);
    return this;
  }

  invoke(packageName, exportName, args) {
    const key = capabilityKey(packageName, exportName);
    const handler = this.handlers.get(key);
    if (!handler) {
      throw new BrowserCapabilityError(
        "adapter-missing",
        `browser capability adapter is missing for ${key}`,
        capabilityErrorData(packageName, exportName),
      );
    }
    return handler(args);
  }

  entries() {
    return [...this.handlers.keys()];
  }
}

export class BrowserCapabilityHost {
  constructor({ registry = new CapabilityRegistry(), policy = new BrowserCapabilityPolicy() } = {}) {
    this.registry = registry;
    this.policy = policy instanceof BrowserCapabilityPolicy
      ? policy
      : BrowserCapabilityPolicy.fromManifest(policy);
    this.lastTrace = null;
  }

  call(requestText) {
    const trace = { requestText, responseText: "" };
    try {
      const request = parseRasaData(requestText);
      const packageName = payloadName(request.package);
      const exportName = payloadName(request.export);
      const args = Array.isArray(request.args) ? request.args : [];
      const key = capabilityKey(packageName, exportName);
      Object.assign(trace, { packageName, exportName, capability: key, argsCount: args.length });
      if (!this.policy.allows(packageName, exportName)) {
        throw new BrowserCapabilityError(
          "policy-denied",
          `browser policy denies ${key}`,
          capabilityErrorData(packageName, exportName),
        );
      }
      const value = this.registry.invoke(packageName, exportName, args);
      if (isPromiseLike(value)) {
        this.lastTrace = { ...trace, status: "pending", suspended: true };
        return value.then(
          (resolved) => {
            const responseText = providerOk(resolved);
            this.lastTrace = {
              ...trace,
              status: "completed",
              suspended: true,
              resumed: true,
              responseText,
            };
            return responseText;
          },
          (error) => {
            const responseText = providerError(
              providerErrorKind(error),
              error.message || String(error),
              providerErrorData(trace, error),
            );
            this.lastTrace = {
              ...trace,
              status: "failed",
              suspended: true,
              resumed: true,
              kind: providerErrorKind(error),
              error: error.message,
              responseText,
            };
            return responseText;
          },
        );
      }
      const responseText = providerOk(value);
      this.lastTrace = { ...trace, status: "completed", responseText };
      return responseText;
    } catch (error) {
      const kind = error instanceof BrowserCapabilityError ? error.kind : "provider-error";
      const responseText = providerError(kind, error.message || String(error), providerErrorData(trace, error));
      this.lastTrace = { ...trace, status: "failed", kind, error: error.message, responseText };
      return responseText;
    }
  }

  async callAsync(requestText) {
    return await this.call(requestText);
  }
}

export class BrowserDistribution {
  constructor({
    manifestUrl,
    manifest,
    runtimeUrl,
    adapterBaseUrl = null,
    optimizerManifestUrl = null,
    sourceLibraries = [],
    packages = [],
    packageBundleText = "",
    initialNamespace = "",
    registry = new CapabilityRegistry(),
    providerInstances = new Map(),
    policy = new BrowserCapabilityPolicy(),
    host = null,
  }) {
    this.manifestUrl = manifestUrl;
    this.manifest = manifest;
    this.runtimeUrl = runtimeUrl;
    this.adapterBaseUrl = adapterBaseUrl;
    this.optimizerManifestUrl = optimizerManifestUrl;
    this.sourceLibraries = sourceLibraries;
    this.packages = packages;
    this.packageBundleText = packageBundleText;
    this.initialNamespace = initialNamespace;
    this.registry = registry;
    this.providerInstances = providerInstances;
    this.policy = policy;
    this.host = host || new BrowserCapabilityHost({ registry, policy });
  }

  engineOptions(extra = {}) {
    return {
      ...extra,
      host: extra.host ?? this.host,
      ...(this.adapterBaseUrl ? { adapterBaseUrl: this.adapterBaseUrl } : {}),
      ...(this.optimizerManifestUrl ? { optimizerManifestUrl: this.optimizerManifestUrl } : {}),
    };
  }

  configureSession(engine, session, options = { phases: "all" }) {
    const reports = [];
    if (this.packageBundleText) {
      reports.push(engine.loadPackage(session, this.packageBundleText));
    }
    for (const source of this.sourceLibraries) {
      reports.push(evaluateSourceLibrary(engine, session, source, options));
    }
    if (this.initialNamespace) {
      reports.push(engine.evaluateSession(session, `(ns ${this.initialNamespace})`, options));
    }
    return reports;
  }

  async configureSessionAsync(engine, session, options = { phases: "all" }) {
    const reports = [];
    if (this.packageBundleText) {
      reports.push(await engine.loadPackageAsync(session, this.packageBundleText));
    }
    for (const source of this.sourceLibraries) {
      reports.push(await evaluateSourceLibraryAsync(engine, session, source, options));
    }
    if (this.initialNamespace) {
      reports.push(await engine.evaluateSessionAsync(session, `(ns ${this.initialNamespace})`, options));
    }
    return reports;
  }
}

export function capabilityKey(packageName, exportName) {
  return `${packageName}/${exportName}`;
}

export async function loadBrowserDistribution(manifestUrl, options = {}) {
  const baseUrl = absoluteUrl(manifestUrl);
  const readJson = options.readJson || defaultReadJson;
  const readText = options.readText || defaultReadText;
  const importModule = options.importModule || ((url) => import(/* @vite-ignore */ url));
  const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
  const target = options.target || "wasm-browser";
  const manifest = await readJson(baseUrl.href);
  rejectLegacyBrowserManifest(manifest);
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
      const packageData = parseRasaData(text);
      return {
        url,
        text,
        data: packageData,
        packageName: entry.package || packageNameFromPackage(packageData) || packageNameFromUrl(url),
      };
    }),
  );
  const registry = new CapabilityRegistry();
  const policy = BrowserCapabilityPolicy.fromManifest(manifest.policy || {});
  const initialNamespace = browserInitialNamespace(manifest.session);
  const distribution = new BrowserDistribution({
    manifestUrl: baseUrl.href,
    manifest,
    runtimeUrl,
    adapterBaseUrl,
    optimizerManifestUrl,
    sourceLibraries,
    packages,
    packageBundleText: packageBundleText(packages),
    initialNamespace,
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
    const providerInstance = module.register(registry, {
      manifest,
      distribution,
      provider,
      moduleUrl,
      target,
      baseUrl,
      fetch: fetchImpl,
      BrowserCapabilityError,
      refusal: browserProviderRefusal(target),
    });
    if (providerInstance !== undefined) {
      distribution.providerInstances.set(provider.package || moduleUrl, providerInstance);
    }
  }

  return distribution;
}

function rejectLegacyBrowserManifest(manifest) {
  const legacyFields = ["catalog", "catalogs", "providerManifest", "providerManifests", "manifests"]
    .filter((field) => manifest && Object.hasOwn(manifest, field));
  if (legacyFields.length > 0) {
    throw new Error(
      `browser distribution manifest uses retired fields ${legacyFields.join(", ")}; use packages with package.ras`,
    );
  }
}

function browserInitialNamespace(session = {}) {
  const name = String(session?.initialNamespace || "");
  if (!name) {
    return "";
  }
  if (!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(name)) {
    throw new Error(`invalid browser session initialNamespace ${JSON.stringify(name)}`);
  }
  return name;
}

function browserProviderRefusal(target) {
  return (kind, message, data = {}) => new BrowserCapabilityError(kind, message, {
    "rasa.host/target": keyword(target),
    ...data,
  });
}

export function ok(value) {
  return { status: keyword("ok"), value };
}

export function failed(kind, message, data = {}) {
  return { status: keyword("error"), kind: keyword(kind), message, ...data };
}

export function providerOk(value) {
  return renderRasaData({ status: keyword("ok"), value });
}

export function providerError(kind, message, data = null) {
  const response = { status: keyword("error"), kind: keyword(kind), message };
  if (data && Object.keys(data).length > 0) {
    response.data = data;
  }
  return renderRasaData(response);
}

function providerErrorKind(error) {
  return error instanceof BrowserCapabilityError ? error.kind : "provider-error";
}

function providerErrorData(trace, error) {
  if (error instanceof BrowserCapabilityError) {
    return error.data || {};
  }
  return capabilityErrorData(trace.packageName, trace.exportName, {
    "rasa.browser/name": error?.name || "Error",
  });
}

function capabilityErrorData(packageName, exportName, extra = {}) {
  const data = {
    "rasa.host/target": keyword("wasm-browser"),
    ...extra,
  };
  if (packageName && exportName) {
    data["rasa.host/capability"] = keyword(capabilityKey(packageName, exportName));
  }
  return data;
}

export function parseRasaData(text) {
  return new Parser(String(text ?? "")).parse();
}

export function renderRasaData(value) {
  if (value === null || value === undefined) return "nil";
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return Number.isInteger(value)
    ? String(value)
    : String(Math.round(value * 1000) / 1000);
  if (typeof value === "string") return JSON.stringify(value);
  if (isKeyword(value)) return `:${value.name}`;
  if (isSymbol(value)) return value.name;
  if (isList(value)) return `(${value.items.map(renderRasaData).join(" ")})`;
  if (isSet(value)) return `#{${value.items.map(renderRasaData).join(" ")}}`;
  if (isMapEntries(value)) {
    return `{${value.entries
      .map(([key, item]) => `${renderRasaData(key)} ${renderRasaData(item)}`)
      .join(" ")}}`;
  }
  if (Array.isArray(value)) return `[${value.map(renderRasaData).join(" ")}]`;
  return `{${Object.entries(value)
    .map(([key, item]) => `:${key} ${renderRasaData(item)}`)
    .join(" ")}}`;
}

export function keyword(name) {
  return { type: "keyword", name: String(name).replace(/^:/, "") };
}

export function symbol(name) {
  return { type: "symbol", name: String(name) };
}

export function isKeyword(value) {
  return Boolean(value && typeof value === "object" && value.type === "keyword");
}

export function isSymbol(value) {
  return Boolean(value && typeof value === "object" && value.type === "symbol");
}

export function isList(value) {
  return Boolean(value && typeof value === "object" && value.type === "list");
}

export function isSet(value) {
  return Boolean(value && typeof value === "object" && value.type === "set");
}

export function mapEntries(entries) {
  return { type: "map", entries };
}

export function isMapEntries(value) {
  return Boolean(value && typeof value === "object" && value.type === "map");
}

export function payloadName(value) {
  if (isKeyword(value) || isSymbol(value)) return value.name;
  return String(value ?? "");
}

function packageBundleText(packages) {
  if (!packages.length) return "";
  return renderRasaData({
    schema: keyword("rasa.package-bundle/v1"),
    packages: packages.map(({ data }) => data),
  });
}

function evaluateSourceLibrary(engine, session, source, options) {
  if (typeof engine.evaluateSessionWithSourceId === "function") {
    return engine.evaluateSessionWithSourceId(session, source.sourceId || source.url, source.text, options);
  }
  return engine.evaluateSession(session, source.text, options);
}

async function evaluateSourceLibraryAsync(engine, session, source, options) {
  if (typeof engine.evaluateSessionWithSourceIdAsync === "function") {
    return await engine.evaluateSessionWithSourceIdAsync(session, source.sourceId || source.url, source.text, options);
  }
  if (typeof engine.evaluateSessionWithSourceId === "function") {
    return await engine.evaluateSessionWithSourceId(session, source.sourceId || source.url, source.text, options);
  }
  return await engine.evaluateSessionAsync(session, source.text, options);
}

function sourceLibrarySourceId(entry, url) {
  if (typeof entry === "object" && entry?.sourceId) {
    return String(entry.sourceId);
  }
  return url;
}

function packageNameFromPackage(packageData) {
  return payloadName(packageData?.id || packageData?.["package/id"]);
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
    throw new Error(`browser distribution manifest is missing ${field}`);
  }
  return value[field];
}

function resolveUrl(value, baseUrl) {
  return new URL(value, baseUrl);
}

function absoluteUrl(value) {
  return new URL(value, globalThis.location?.href || "http://localhost/");
}

async function defaultReadJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`browser distribution JSON load failed: ${response.status}`);
  return response.json();
}

async function defaultReadText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`browser distribution asset load failed: ${response.status}`);
  return response.text();
}

function isPromiseLike(value) {
  return Boolean(value && typeof value.then === "function");
}

class Parser {
  constructor(text) {
    this.text = text;
    this.index = 0;
  }

  parse() {
    const value = this.form();
    this.ws();
    if (this.index !== this.text.length) {
      throw new Error(`unexpected trailing form at byte ${this.index}`);
    }
    return value;
  }

  form() {
    this.ws();
    const ch = this.peek();
    if (ch === "{") return this.map();
    if (ch === "[") return this.vector();
    if (ch === "(") return this.list();
    if (ch === "#" && this.text[this.index + 1] === "{") return this.set();
    if (ch === '"') return this.string();
    return this.atom();
  }

  map() {
    this.expect("{");
    const out = {};
    while (true) {
      this.ws();
      if (this.peek() === "}") {
        this.index++;
        return out;
      }
      const key = this.form();
      const value = this.form();
      out[keyName(key)] = value;
    }
  }

  vector() {
    this.expect("[");
    const out = [];
    while (true) {
      this.ws();
      if (this.peek() === "]") {
        this.index++;
        return out;
      }
      out.push(this.form());
    }
  }

  list() {
    this.expect("(");
    const items = [];
    while (true) {
      this.ws();
      if (this.peek() === ")") {
        this.index++;
        return { type: "list", items };
      }
      items.push(this.form());
    }
  }

  set() {
    this.expect("#");
    this.expect("{");
    const items = [];
    while (true) {
      this.ws();
      if (this.peek() === "}") {
        this.index++;
        return { type: "set", items };
      }
      items.push(this.form());
    }
  }

  string() {
    this.expect('"');
    let out = "";
    while (this.index < this.text.length) {
      const ch = this.text[this.index++];
      if (ch === '"') return out;
      if (ch === "\\") {
        const next = this.text[this.index++];
        out += next === "n" ? "\n" : next;
      } else {
        out += ch;
      }
    }
    throw new Error("unterminated string");
  }

  atom() {
    const start = this.index;
    while (this.index < this.text.length && !/\s|[\](){}]/.test(this.text[this.index])) {
      this.index++;
    }
    const token = this.text.slice(start, this.index);
    if (!token) throw new Error(`expected form at byte ${this.index}`);
    if (token === "nil") return null;
    if (token === "true") return true;
    if (token === "false") return false;
    if (/^-?\d+(\.\d+)?$/.test(token)) return Number(token);
    if (token.startsWith(":")) return keyword(token.slice(1));
    return symbol(token);
  }

  ws() {
    while (this.index < this.text.length && /\s|,/.test(this.text[this.index])) {
      this.index++;
    }
  }

  peek() {
    return this.text[this.index];
  }

  expect(ch) {
    this.ws();
    if (this.text[this.index] !== ch) {
      throw new Error(`expected ${ch} at byte ${this.index}`);
    }
    this.index++;
  }
}

function keyName(value) {
  if (isKeyword(value) || isSymbol(value)) return value.name;
  return String(value);
}
