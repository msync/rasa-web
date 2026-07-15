import { productInventoryEntry } from "./contract.js";
import { importModuleBytes } from "./module.js";
import { sessionInventory } from "./source-inventory.js";

export const COMPONENT_RUNTIME_KIND = "component-projection";

const RUNTIME_SESSION_EXPORT = "rasa:runtime/session@0.1.0";
const RASA_PHASE_READER = 1;
const RASA_PHASE_ANALYSIS = 2;
const RASA_PHASE_IR = 4;
const RASA_PHASE_FACTS = 8;
const RASA_PHASE_EVAL = 16;
const RASA_PHASE_PLAN = 32;
const RASA_PHASE_ALL =
  RASA_PHASE_READER |
  RASA_PHASE_ANALYSIS |
  RASA_PHASE_IR |
  RASA_PHASE_FACTS |
  RASA_PHASE_EVAL |
  RASA_PHASE_PLAN;
const RASA_REPORT_TRACES = 1 << 8;

export class RuntimeSelectionError extends Error {
  constructor(message, refusals = []) {
    super(message);
    this.name = "RuntimeSelectionError";
    this.refusals = refusals;
  }
}

export class SessionOpenError extends Error {
  constructor(kind, message, options = {}) {
    super(message, options);
    this.name = "SessionOpenError";
    this.kind = kind;
  }
}

export async function loadRuntime(productManifest, productUrl, options = {}) {
  const Runtime = options.Runtime || ComponentRuntime;
  const requiredCapabilities = new Set(options.requiredCapabilities || []);
  const variants = [...productManifest.runtimeVariants].sort((left, right) => {
    const leftMissing = missingCapabilities(left, requiredCapabilities).length;
    const rightMissing = missingCapabilities(right, requiredCapabilities).length;
    return leftMissing - rightMissing
      || right.priority - left.priority
      || left.id.localeCompare(right.id);
  });
  const probeCache = new Map();
  const refusals = [];
  for (const variant of variants) {
    const unavailableCapabilities = missingCapabilities(variant, requiredCapabilities);
    if (unavailableCapabilities.length > 0) {
      refusals.push({
        variant: variant.id,
        kind: "capability-unavailable",
        capabilities: unavailableCapabilities,
      });
      continue;
    }
    const { unsupported, loadedBytes: probeBytes } = await unsupportedRequirements(
      variant.requirements,
      options.platform || globalThis,
      {
        manifest: productManifest,
        productUrl,
        loadBytes: options.readBytes || readBytes,
        probeCache,
      },
    );
    if (unsupported.length > 0) {
      refusals.push({ variant: variant.id, kind: "platform-unsupported", requirements: unsupported });
      continue;
    }
    try {
      const runtime = await Runtime.load(variant, productManifest, productUrl, options);
      if (Number.isInteger(runtime.loadedBytes)) runtime.loadedBytes += probeBytes;
      return {
        runtime,
        variant,
        missingCapabilities: missingCapabilities(variant, requiredCapabilities),
        refusals,
      };
    } catch (error) {
      refusals.push({
        variant: variant.id,
        kind: "variant-load-failed",
        message: error?.message || String(error),
      });
    }
  }
  throw new RuntimeSelectionError("no declared Rasa browser runtime variant can run", refusals);
}

export class ComponentRuntime {
  static async load(variant, productManifest, productUrl, options = {}) {
    const productBase = absoluteUrl(productUrl);
    const loadBytes = options.readBytes || readBytes;
    const loadModule = options.importModule;
    const projectionUrl = new URL(variant.projection.manifest, productBase);
    const projectionBytes = await verifiedProductBytes(
      projectionUrl,
      productManifest,
      productBase,
      loadBytes,
      `projection manifest for ${variant.id}`,
    );
    const projection = parseJson(projectionBytes, `projection manifest for ${variant.id}`);
    assertProjection(projection, variant);

    const projectionBaseUrl = new URL("./", projectionUrl);
    const entryUrl = new URL(projection.entry, projectionBaseUrl);
    const entryBytes = await verifiedProductBytes(
      entryUrl,
      productManifest,
      productBase,
      loadBytes,
      `projection entry for ${variant.id}`,
    );
    const bindings = await importModuleBytes(entryUrl.href, entryBytes, loadModule);
    if (typeof bindings.instantiate !== "function") {
      throw new Error(`runtime variant ${variant.id} projection has no instantiate export`);
    }
    const modules = new Map(projection.modules.map((module) => [module.path, module]));
    const compiled = new Map();
    let loadedBytes = projectionBytes.byteLength + entryBytes.byteLength;
    const root = await bindings.instantiate(async (path) => {
      const cached = compiled.get(path);
      if (cached) return cached;
      const expected = modules.get(path);
      if (!expected) {
        throw new Error(`runtime variant ${variant.id} requested undeclared core module ${path}`);
      }
      const moduleUrl = new URL(path, projectionBaseUrl);
      const moduleBytes = await verifiedProductBytes(
        moduleUrl,
        productManifest,
        productBase,
        loadBytes,
        `core module ${path}`,
      );
      const actual = await contentId(moduleBytes);
      if (actual !== expected.contentId) {
        throw new Error(`core module ${path} has identity ${actual}, expected ${expected.contentId}`);
      }
      if (!WebAssembly.validate(moduleBytes)) {
        throw new Error(`core module ${path} is unsupported by this WebAssembly implementation`);
      }
      const module = await WebAssembly.compile(moduleBytes);
      loadedBytes += moduleBytes.byteLength;
      compiled.set(path, module);
      return module;
    }, options.imports || {});

    return new ComponentRuntime({
      variant,
      projection,
      projectionBaseUrl: projectionBaseUrl.href,
      loadedBytes,
      session: root.session || root[RUNTIME_SESSION_EXPORT],
    });
  }

  constructor(options = {}) {
    if (!options.session) {
      throw new Error("Rasa browser component projection did not export the session interface");
    }
    this.available = true;
    this.kind = COMPONENT_RUNTIME_KIND;
    this.variant = options.variant || null;
    this.projection = options.projection || null;
    this.projectionBaseUrl = options.projectionBaseUrl || null;
    this.loadedBytes = options.loadedBytes ?? null;
    this.session = options.session;
  }

  status() {
    return this.session.status();
  }

  renderHash() {
    return this.session.renderHash();
  }

  evaluate(source, options = null) {
    return this.session.evalSource(encodeUtf8(source), reportFlags(options));
  }

  evaluateAdmitted(source, operationIds, options = null) {
    return this.session.evalAdmittedSource(
      encodeUtf8(source),
      [...operationIds].map(String),
      reportFlags(options),
    );
  }

  async evaluateAdmittedAsync(source, operationIds, options = null) {
    return await this.evaluateAdmitted(source, operationIds, options);
  }

  evaluateAdmittedWithSourceId(sourceId, source, operationIds, options = null) {
    return this.session.evalAdmittedSourceWithId(
      String(sourceId || "browser://eval"),
      encodeUtf8(source),
      [...operationIds].map(String),
      reportFlags(options),
    );
  }

  async evaluateAdmittedWithSourceIdAsync(sourceId, source, operationIds, options = null) {
    return await this.evaluateAdmittedWithSourceId(sourceId, source, operationIds, options);
  }

  inspect(source, options = null) {
    const text = this.session.inspectSource(encodeUtf8(source), inspectionFlags(options));
    return parseJsonText(text, "inspection artifact");
  }

  syntaxTokens(source) {
    const text = this.session.syntaxTokens(encodeUtf8(source));
    return parseJsonText(text, "syntax token payload");
  }

  createSession(inventory) {
    const input = sessionInventory(inventory);
    try {
      return this.session.sessionNew(input.id, input.sources);
    } catch (error) {
      const payload = error?.payload;
      if (payload && typeof payload.tag === "string") {
        throw new SessionOpenError(payload.tag, String(payload.val), { cause: error });
      }
      throw error;
    }
  }

  freeSession(session) {
    if (session !== null && session !== undefined) this.session.sessionFree(session);
  }

  setAdmittedOperations(session, operationIds) {
    return this.session.sessionSetAdmittedOperations(session, [...operationIds].map(String));
  }

  async setAdmittedOperationsAsync(session, operationIds) {
    return await this.setAdmittedOperations(session, operationIds);
  }

  evaluateSession(session, source, options = null) {
    return this.session.sessionEval(session, encodeUtf8(source), reportFlags(options));
  }

  async evaluateSessionAsync(session, source, options = null) {
    return await this.evaluateSession(session, source, options);
  }

  evaluateSessionWithSourceId(session, sourceId, source, options = null) {
    return this.session.sessionEvalWithId(
      session,
      String(sourceId || "browser://eval"),
      encodeUtf8(source),
      reportFlags(options),
    );
  }

  async evaluateSessionWithSourceIdAsync(session, sourceId, source, options = null) {
    return await this.evaluateSessionWithSourceId(session, sourceId, source, options);
  }

  evaluateReplSession(session, source, options = null) {
    return this.session.sessionReplEval(session, encodeUtf8(source), reportFlags(options));
  }

  async evaluateReplSessionAsync(session, source, options = null) {
    return await this.evaluateReplSession(session, source, options);
  }
}

export function encodeUtf8(value) {
  return new TextEncoder().encode(String(value ?? ""));
}

export function decodeUtf8(bytes) {
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

function missingCapabilities(variant, required) {
  const provided = new Set(variant.provides.capabilities || []);
  return [...required].filter((capability) => !provided.has(capability)).sort();
}

async function unsupportedRequirements(requirements, platform, context) {
  const unsupported = [];
  let loadedBytes = 0;
  if (requirements.webAssembly && typeof platform.WebAssembly !== "object") {
    unsupported.push("web-assembly");
  }
  if (requirements.webCrypto && !platform.crypto?.subtle) unsupported.push("web-crypto");
  if (requirements.jspi && (
    typeof platform.WebAssembly?.Suspending !== "function"
    || typeof platform.WebAssembly?.promising !== "function"
  )) {
    unsupported.push("jspi");
  }
  if (unsupported.length === 0) {
    for (const feature of requirements.wasmFeatures || []) {
      const url = new URL(feature.probe, absoluteUrl(context.productUrl));
      let bytes = context.probeCache.get(url.href);
      if (!bytes) {
        bytes = verifiedProductBytes(
          url,
          context.manifest,
          absoluteUrl(context.productUrl),
          context.loadBytes,
          `WebAssembly feature probe ${feature.name}`,
        );
        context.probeCache.set(url.href, bytes);
      }
      bytes = await bytes;
      loadedBytes += bytes.byteLength;
      if (typeof platform.WebAssembly?.validate !== "function"
          || !platform.WebAssembly.validate(bytes)) {
        unsupported.push(`wasm-feature:${feature.name}`);
      }
    }
  }
  return { unsupported, loadedBytes };
}

function assertProjection(projection, variant) {
  if (projection?.schema !== variant.projection.schema) {
    throw new Error(`runtime variant ${variant.id} projection has schema ${projection?.schema}`);
  }
  if (projection.componentId !== variant.component.contentId) {
    throw new Error(
      `runtime variant ${variant.id} projection identifies ${projection.componentId}, expected ${variant.component.contentId}`,
    );
  }
  if (projection.profile !== variant.projection.profile) {
    throw new Error(
      `runtime variant ${variant.id} projection profile is ${projection.profile}, expected ${variant.projection.profile}`,
    );
  }
  if (projection.requirements?.jspi !== variant.requirements.jspi) {
    throw new Error(`runtime variant ${variant.id} projection JSPI requirement changed`);
  }
  if (projection.entry !== "guest-runtime.js") {
    throw new Error(`runtime variant ${variant.id} has unexpected entry ${projection.entry}`);
  }
  if (!Array.isArray(projection.modules) || projection.modules.length === 0) {
    throw new Error(`runtime variant ${variant.id} projection declares no core modules`);
  }
}

function inspectionFlags(options) {
  if (typeof options === "number") return options;
  const includeEval = options?.includeEval !== false;
  const includePlan = options?.includePlan !== false;
  const detail = options?.detail || "standard";
  const detailBits = detail === "summary" ? 0 : detail === "full" ? 2 : 1;
  return (includeEval ? 1 : 0) | (includePlan ? 2 : 0) | (detailBits << 8);
}

function reportFlags(options) {
  if (typeof options === "number") return options;
  const selected = selectedReportPhases(options?.phases ?? "all");
  return selected | (options?.traces ? RASA_REPORT_TRACES : 0);
}

function selectedReportPhases(phases) {
  if (phases === "all") return RASA_PHASE_ALL;
  const selected = typeof phases === "string" ? [phases] : phases;
  if (!selected || typeof selected[Symbol.iterator] !== "function") {
    throw new TypeError(
      'Rasa report phases must be "all", one phase name, or an iterable of phase names',
    );
  }
  return [...selected].reduce((flags, phase) => flags | phaseFlag(phase), 0);
}

function phaseFlag(phase) {
  switch (phase) {
    case "reader": return RASA_PHASE_READER;
    case "analysis": return RASA_PHASE_ANALYSIS;
    case "ir": return RASA_PHASE_IR;
    case "facts": return RASA_PHASE_FACTS;
    case "eval": return RASA_PHASE_EVAL;
    case "plan": return RASA_PHASE_PLAN;
    default: throw new Error(`unknown Rasa phase ${phase}`);
  }
}

async function verifiedProductBytes(url, manifest, productBase, loadBytes, label) {
  const path = productRelativePath(url, productBase);
  const entry = productInventoryEntry(manifest, `./${path}`);
  const bytes = bytesFor(await loadBytes(url.href, label));
  if (bytes.byteLength !== entry.bytes) {
    throw new Error(`${label} byte length is ${bytes.byteLength}, expected ${entry.bytes}`);
  }
  const actual = (await contentId(bytes)).slice("sha256:".length);
  if (actual !== entry.sha256) {
    throw new Error(`${label} digest is ${actual}, expected ${entry.sha256}`);
  }
  return bytes;
}

function productRelativePath(url, productBase) {
  const root = new URL("./", productBase);
  if (url.protocol !== root.protocol || url.host !== root.host || !url.pathname.startsWith(root.pathname)) {
    throw new Error(`runtime asset ${url.href} is outside browser product ${root.href}`);
  }
  return decodeURIComponent(url.pathname.slice(root.pathname.length));
}

function parseJson(bytes, label) {
  try {
    return JSON.parse(decodeUtf8(bytes));
  } catch (error) {
    throw new Error(`invalid ${label}: ${error.message}`);
  }
}

function parseJsonText(text, label) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`invalid ${label}: ${error.message}`);
  }
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  return new Uint8Array(value);
}

async function contentId(bytes) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Web Crypto is required to verify browser product identity");
  }
  const digest = new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", bytes));
  return `sha256:${[...digest].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

async function readBytes(url, label) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${label} fetch failed with ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

function absoluteUrl(value, base = null) {
  return value instanceof URL ? value : new URL(value, base || import.meta.url);
}
