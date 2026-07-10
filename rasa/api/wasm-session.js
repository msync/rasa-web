export const BROWSER_COMPONENT_RUNTIME_KIND = "wasm-component";
export const BROWSER_COMPONENT_ADAPTER_PENDING_REASON = "browser-component-adapter-pending";
export const BROWSER_COMPONENT_ADAPTER_PENDING_MESSAGE =
  "Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.";

const DEFAULT_COMPONENT_ASSET_DIR = "rasa-component/";
const RUNTIME_HOST_IMPORT = "rasa:runtime/host";
const RUNTIME_HOST_IMPORT_VERSIONED = "rasa:runtime/host@0.1.0";
const RUNTIME_OPTIMIZER_IMPORT = "rasa:runtime/optimizer";
const RUNTIME_OPTIMIZER_IMPORT_VERSIONED = "rasa:runtime/optimizer@0.1.0";
const RUNTIME_SOURCE_LOADER_IMPORT = "rasa:runtime/source-loader";
const RUNTIME_SOURCE_LOADER_IMPORT_VERSIONED = "rasa:runtime/source-loader@0.1.0";
const RUNTIME_SESSION_EXPORT = "rasa:runtime/session@0.1.0";
const OPTIMIZER_FALLBACK_BEFORE_REGION_ENTRY = "runtime-wasm-before-region-entry";
const WASM_PAGE_SIZE = 65_536;
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

export class RasaBrowserRuntimeUnavailableError extends Error {
  constructor(message = BROWSER_COMPONENT_ADAPTER_PENDING_MESSAGE) {
    super(message);
    this.name = "RasaBrowserRuntimeUnavailableError";
    this.runtimeKind = BROWSER_COMPONENT_RUNTIME_KIND;
    this.unavailableReason = BROWSER_COMPONENT_ADAPTER_PENDING_REASON;
  }
}

export class RasaBrowserHostCallError extends Error {
  constructor(message) {
    super(message);
    this.name = "RasaBrowserHostCallError";
  }
}

export class RasaWasmEngine {
  static async load(url, options = {}) {
    const runtimeUrl = absoluteUrl(url);
    const loadBytes = options.readBytes || readBytes;
    const bytes = await loadBytes(runtimeUrl, "Rasa runtime component");
    const adapterBaseUrl = absoluteUrl(
      options.adapterBaseUrl || DEFAULT_COMPONENT_ASSET_DIR,
      runtimeUrl,
    );
    const optimizer =
      options.optimizer ?? (await optimizerFromManifestOption(options, runtimeUrl, loadBytes));
    const adapterUrl = new URL("ras-runtime.js", adapterBaseUrl);
    const adapter = await import(/* @vite-ignore */ adapterUrl.href);
    const imports = componentImports(options.host, optimizer, options.sourceLoader);
    const coreModules = new Map();
    const root = await adapter.instantiate(async (path) => {
      const moduleUrl = new URL(path, adapterBaseUrl);
      const cached = coreModules.get(moduleUrl.href);
      if (cached) return cached;
      const moduleBytes = await loadBytes(moduleUrl, `Rasa component core module ${path}`);
      const compiled = await WebAssembly.compile(moduleBytes);
      coreModules.set(moduleUrl.href, compiled);
      return compiled;
    }, imports);
    return new RasaWasmEngine({
      url: runtimeUrl.href,
      adapterBaseUrl: adapterBaseUrl.href,
      byteLength: bytes.byteLength,
      imports,
      session: root.session || root[RUNTIME_SESSION_EXPORT],
    });
  }

  constructor(options = {}) {
    if (!options.session) {
      throw new Error("Rasa Wasm component adapter did not export the session interface");
    }
    this.url = options.url ?? null;
    this.adapterBaseUrl = options.adapterBaseUrl ?? null;
    this.byteLength = options.byteLength ?? null;
    this.available = true;
    this.runtimeKind = BROWSER_COMPONENT_RUNTIME_KIND;
    this.unavailableReason = null;
    this.message = "Browser Wasm component runtime ready.";
    this.session = options.session;
    this.importObject = options.imports || {};
  }

  imports() {
    return Object.keys(this.importObject);
  }

  status() {
    return this.session.status();
  }

  renderHash() {
    return this.session.renderHash();
  }

  unavailableError() {
    return new RasaBrowserRuntimeUnavailableError(this.message);
  }

  evaluate(source, options = null) {
    return this.session.evalSource(encodeUtf8(source), reportFlags(options));
  }

  inspect(source, options = null) {
    const text = this.session.inspectSource(encodeUtf8(source), reportFlags(options));
    return parseJsonPayload(text, "inspection artifact");
  }

  syntaxTokens(source) {
    const text = this.session.syntaxTokens(encodeUtf8(source));
    return parseJsonPayload(text, "syntax token payload");
  }

  createSession() {
    return this.session.sessionNew();
  }

  freeSession(session) {
    if (session !== null && session !== undefined) {
      this.session.sessionFree(session);
    }
  }

  setSessionOptimizerEnabled(session, enabled) {
    if (typeof this.session.sessionSetOptimizerEnabled !== "function") {
      throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");
    }
    return this.session.sessionSetOptimizerEnabled(session, Boolean(enabled));
  }

  loadPackage(session, packageBytes) {
    return this.session.sessionLoadPackage(session, bytesFor(packageBytes));
  }

  async loadPackageAsync(session, packageBytes) {
    return await this.loadPackage(session, packageBytes);
  }

  evaluateSession(session, source, options = null) {
    return this.session.sessionEval(session, encodeUtf8(source), reportFlags(options));
  }

  async evaluateSessionAsync(session, source, options = null) {
    return await this.evaluateSession(session, source, options);
  }

  evaluateSessionWithSourceId(session, sourceId, source, options = null) {
    if (typeof this.session.sessionEvalWithId !== "function") {
      throw new Error("Rasa Wasm component does not export sessionEvalWithId");
    }
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
    if (typeof this.session.sessionReplEval !== "function") {
      throw new Error("Rasa Wasm component does not export sessionReplEval");
    }
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

// Consumes already-lowered callable artifacts; it does not inspect or admit Rasa source.
export async function createCallableWasmGcOptimizer(entries = [], options = {}) {
  const prepared = new Map();
  for (const entry of entries) {
    const key = callableKey(entry.symbol, entry.arity);
    prepared.set(key, await prepareCallableEntry(entry, options));
  }

  return {
    canCall(symbol, arity) {
      return prepared.has(callableKey(symbol, arity));
    },
    tryCall(symbol, arity, args) {
      const entry = prepared.get(callableKey(symbol, arity));
      if (!entry) {
        return optimizerRefused("missing-callable-region");
      }
      return executeCallableEntry(entry, args);
    },
  };
}

export async function createCallableWasmGcOptimizerFromManifest(manifestUrl, options = {}) {
  const baseUrl = absoluteUrl(manifestUrl);
  const readJson = options.readJson || defaultReadJson;
  const manifest = options.manifest || await readJson(baseUrl.href);
  const entries = (manifest.callables || []).map((entry) => ({
    symbol: entry.symbol,
    arity: entry.arity,
    abi: entry.abi,
    inputIndex: entry.inputIndex,
    inputShape: entry.inputShape,
    result: entry.result,
    resultProbe: entry.resultProbe,
    keys: entry.keys,
    packed: entry.packed,
    url: resolveUrl(requiredField(entry, "url"), baseUrl).href,
  }));
  return createCallableWasmGcOptimizer(entries, {
    ...options,
    readBytes: options.readBytes,
  });
}

export function componentImports(host = null, optimizer = null, sourceLoader = null) {
  const imports = {
    [RUNTIME_HOST_IMPORT]: hostImport(host),
    [RUNTIME_OPTIMIZER_IMPORT]: optimizerImport(optimizer),
    [RUNTIME_SOURCE_LOADER_IMPORT]: sourceLoaderImport(sourceLoader),
    "wasi:cli/environment": { getEnvironment: () => [] },
    "wasi:cli/exit": {
      exit: () => {
        throw new Error("Rasa Wasm component requested wasi:cli/exit");
      },
    },
    "wasi:cli/stdin": { getStdin: () => new InputStream() },
    "wasi:cli/stdout": { getStdout: () => new OutputStream() },
    "wasi:cli/stderr": { getStderr: () => new OutputStream() },
    "wasi:cli/terminal-input": { TerminalInput },
    "wasi:cli/terminal-output": { TerminalOutput },
    "wasi:cli/terminal-stdin": { getTerminalStdin: () => undefined },
    "wasi:cli/terminal-stdout": { getTerminalStdout: () => undefined },
    "wasi:cli/terminal-stderr": { getTerminalStderr: () => undefined },
    "wasi:clocks/monotonic-clock": { subscribeDuration: () => new Pollable() },
    "wasi:io/error": { Error: WasiError },
    "wasi:io/poll": { Pollable, poll: () => [] },
    "wasi:io/streams": { InputStream, OutputStream },
    "wasi:random/insecure-seed": {
      getInsecureSeed: () => [1n, 2n],
    },
  };
  return withVersionedAliases(imports);
}

function hostImport(host) {
  return {
    call(request) {
      if (!host) {
        throw new RasaBrowserHostCallError("no browser host provider is registered");
      }
      if (typeof host.callBytes === "function") {
        return bytesResult(host.callBytes(request));
      }
      if (typeof host.call === "function") {
        const response = host.call(decodeUtf8(request));
        return isPromiseLike(response)
          ? response.then((resolved) => encodeUtf8(resolved))
          : encodeUtf8(response);
      }
      throw new RasaBrowserHostCallError("browser host provider does not implement call");
    },
  };
}

function optimizerImport(optimizer) {
  return {
    canCall(symbol, arity) {
      if (typeof optimizer?.canCall === "function") {
        return Boolean(optimizer.canCall(symbol, arity));
      }
      return false;
    },
    tryCall(symbol, arity, args) {
      if (typeof optimizer?.tryCall === "function") {
        return optimizer.tryCall(symbol, arity, args);
      }
      return {
        tag: "refused",
        val: {
          reason: "browser-optimizer-unavailable",
          fallback: OPTIMIZER_FALLBACK_BEFORE_REGION_ENTRY,
        },
      };
    },
  };
}

async function prepareCallableEntry(entry, options) {
  const result = normalizeResultProbe(entry.resultProbe ?? entry.result ?? "i64");
  const inputIndex = Number.isInteger(entry.inputIndex) ? entry.inputIndex : 0;
  const mapKeys = Array.isArray(entry.keys) ? entry.keys.map(String) : [];
  const abi = entry.abi || (entry.packed ? "packed-vector-v1" : "utf8-scan-v1");
  const packed = normalizePackedCallableAbi(entry.packed);
  try {
    return {
      symbol: String(entry.symbol),
      arity: Number(entry.arity),
      abi,
      result,
      inputIndex,
      inputShape: entry.inputShape || null,
      keys: mapKeys,
      packed,
      onPackedOutput: typeof options.onPackedOutput === "function" ? options.onPackedOutput : null,
      exports: await callableExports(entry, options),
      blocker: null,
    };
  } catch (error) {
    return {
      symbol: String(entry.symbol),
      arity: Number(entry.arity),
      abi,
      packed,
      result,
      inputIndex,
      keys: mapKeys,
      onPackedOutput: typeof options.onPackedOutput === "function" ? options.onPackedOutput : null,
      exports: null,
      blocker: {
        reason: "browser-wasmgc-callable-artifact-unavailable",
        message: error?.message ?? String(error),
      },
    };
  }
}

async function callableExports(entry, options) {
  if (entry.exports) return entry.exports;
  if (entry.instance?.exports) return entry.instance.exports;
  if (typeof entry.instantiate === "function") {
    const instantiated = await entry.instantiate();
    if (instantiated?.exports) return instantiated.exports;
    if (instantiated?.instance?.exports) return instantiated.instance.exports;
  }

  const imports = entry.imports || options.imports || {};
  let module = entry.module ?? null;
  if (!module) {
    const readModuleBytes = options.readBytes || readBytes;
    const moduleBytes =
      entry.moduleBytes ??
      (entry.url ? await readModuleBytes(entry.url, "WasmGC callable artifact") : null);
    if (!moduleBytes) {
      throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");
    }
    module = await WebAssembly.compile(bytesFor(moduleBytes));
  }
  const instance = await WebAssembly.instantiate(module, imports);
  if (instance?.exports) return instance.exports;
  if (instance?.instance?.exports) return instance.instance.exports;
  throw new Error("WasmGC callable artifact did not instantiate with exports");
}

async function optimizerFromManifestOption(options, runtimeUrl, loadBytes) {
  if (!options.optimizerManifestUrl && !options.optimizerManifest) {
    return null;
  }
  const manifestUrl = options.optimizerManifestUrl
    ? absoluteUrl(options.optimizerManifestUrl, runtimeUrl).href
    : runtimeUrl.href;
  return createCallableWasmGcOptimizerFromManifest(manifestUrl, {
    manifest: options.optimizerManifest,
    readJson: options.readJson,
    readBytes: loadBytes,
    onPackedOutput: options.onPackedOutput,
  });
}

function executeCallableEntry(entry, args) {
  if (entry.blocker) {
    return optimizerRefused(entry.blocker.reason);
  }
  try {
    if (entry.abi === "packed-vector-v1" || entry.packed) {
      return executePackedVectorCallable(entry, args);
    }
    const bytes = utf8OptimizerArgument(args?.[entry.inputIndex]);
    if (!bytes) {
      return optimizerRefused("missing-runtime-string-argument");
    }
    writeCallableInput(entry.exports, bytes);
    return {
      tag: "executed",
      val: materializeCallableValue(entry),
    };
  } catch (error) {
    return optimizerRefused(browserCallableErrorReason(error));
  }
}

function executePackedVectorCallable(entry, args) {
  const packed = entry.packed;
  if (!packed) {
    return optimizerRefused("missing-browser-packed-callable-abi");
  }
  const outputOnly = isOutputOnlyPackedCallable(entry, packed);
  const argument = outputOnly ? null : packedOptimizerArgument(args?.[entry.inputIndex]);
  if (!outputOnly && !argument) {
    return optimizerRefused("missing-runtime-packed-argument");
  }
  const expectedInputBits = packedLogicalBitExtent(packed.input.element, packed.input.length);
  if (!outputOnly && argument.logicalBitExtent !== expectedInputBits) {
    return optimizerRefused("browser-packed-input-bit-extent-mismatch");
  }
  const input = outputOnly ? new Uint8Array(0) : argument.bytes;
  if (input.byteLength !== packed.input.byteLength) {
    return optimizerRefused("browser-packed-input-byte-length-mismatch");
  }
  const memory = writePackedCallableInput(entry.exports, input, packed);
  exportFunction(entry.exports, "rasa_run_packed")();
  const output = new Uint8Array(memory.buffer, packed.output.offset, packed.output.byteLength);
  publishPackedOutput(entry, output);
  return {
    tag: "executed",
    val: {
      tag: "packed",
      val: {
        dtype: packed.output.element,
        shape: [BigInt(packed.output.length)],
        logicalBitExtent: packedLogicalBitExtent(packed.output.element, packed.output.length),
        bytes: new Uint8Array(output),
      },
    },
  };
}

function isOutputOnlyPackedCallable(entry, packed) {
  return (
    packed.input.length === 0 &&
    packed.input.byteLength === 0 &&
    (entry.inputShape === "none" || entry.arity === 0)
  );
}

function publishPackedOutput(entry, output) {
  if (typeof entry.onPackedOutput !== "function") {
    return;
  }
  entry.onPackedOutput({
    symbol: entry.symbol,
    arity: entry.arity,
    abi: entry.abi,
    packed: entry.packed,
    bytes: new Uint8Array(output),
  });
}

function writeCallableInput(exports, bytes) {
  const memory = exports?.rasa_memory;
  const prepare = exports?.rasa_prepare_utf8;
  if (!memory?.buffer || typeof prepare !== "function") {
    throw new Error("missing WasmGC callable UTF-8 input ABI");
  }
  const neededPages = Math.ceil(bytes.byteLength / WASM_PAGE_SIZE);
  const currentPages = Math.ceil(memory.buffer.byteLength / WASM_PAGE_SIZE);
  if (neededPages > currentPages) {
    memory.grow(neededPages - currentPages);
  }
  new Uint8Array(memory.buffer, 0, bytes.byteLength).set(bytes);
  prepare(bytes.byteLength);
}

function writePackedCallableInput(exports, bytes, packed) {
  const memory = exports?.rasa_memory;
  if (!memory?.buffer) {
    throw new Error("missing WasmGC callable packed memory export");
  }
  const minimumPages = Math.max(
    Number(packed.memory.minimumPages || 0),
    Math.ceil((packed.output.offset + packed.output.byteLength) / WASM_PAGE_SIZE),
  );
  const currentPages = Math.ceil(memory.buffer.byteLength / WASM_PAGE_SIZE);
  if (minimumPages > currentPages) {
    memory.grow(minimumPages - currentPages);
  }
  new Uint8Array(memory.buffer, 0, bytes.byteLength).set(bytes);
  return memory;
}

function materializeCallableValue(entry) {
  switch (entry.result) {
    case "i64":
      return {
        tag: "int64",
        val: toWitI64(callExport(entry.exports, "rasa_main_i64")),
      };
    case "i64-vector":
      return {
        tag: "i64-vector",
        val: probeI64Vector(entry.exports),
      };
    case "i64-map":
      return {
        tag: "i64-map",
        val: probeI64Map(entry.exports, entry.keys),
      };
    default:
      throw new Error(`unsupported WasmGC callable result probe ${entry.result}`);
  }
}

function probeI64Vector(exports) {
  const len = toProbeLength(callExport(exports, "rasa_main_vector_len"));
  const at = exportFunction(exports, "rasa_main_vector_i64_at");
  return Array.from({ length: len }, (_, index) => toWitI64(at(index)));
}

function probeI64Map(exports, keys) {
  const len = toProbeLength(callExport(exports, "rasa_main_map_len"));
  if (len !== keys.length) {
    throw new Error(`WasmGC map probe length ${len} did not match planned keys ${keys.length}`);
  }
  const at = exportFunction(exports, "rasa_main_map_i64_at");
  return keys.map((key, index) => ({
    key,
    value: toWitI64(at(index)),
  }));
}

function callExport(exports, name) {
  return exportFunction(exports, name)();
}

function exportFunction(exports, name) {
  const fn = exports?.[name];
  if (typeof fn !== "function") {
    throw new Error(`missing WasmGC callable export ${name}`);
  }
  return fn;
}

function utf8OptimizerArgument(arg) {
  if (arg?.tag === "utf8-string" || arg?.tag === "utf8String") {
    return bytesFor(arg.val);
  }
  return null;
}

function packedOptimizerArgument(arg) {
  if (arg?.tag !== "packed") return null;
  const raw = arg.val;
  const logicalBitExtent = raw?.logicalBitExtent ?? raw?.["logical-bit-extent"];
  if (typeof logicalBitExtent !== "bigint" || logicalBitExtent < 0n) return null;
  if (
    !(raw?.bytes instanceof Uint8Array) &&
    !(raw?.bytes instanceof ArrayBuffer) &&
    !ArrayBuffer.isView(raw?.bytes)
  ) {
    return null;
  }
  return {
    logicalBitExtent,
    bytes: bytesFor(raw?.bytes),
  };
}

function optimizerRefused(reason) {
  return {
    tag: "refused",
    val: {
      reason,
      fallback: OPTIMIZER_FALLBACK_BEFORE_REGION_ENTRY,
    },
  };
}

function browserCallableErrorReason(error) {
  const message = error?.message || String(error);
  if (message.startsWith("unsupported packed scalar ")) {
    return "browser-packed-scalar-unsupported";
  }
  if (message.includes(" value out of range")) {
    return "browser-packed-value-out-of-range";
  }
  return "browser-wasmgc-callable-execution-error";
}

function callableKey(symbol, arity) {
  return `${String(symbol)}/${Number(arity)}`;
}

function normalizeResultProbe(value) {
  switch (String(value)) {
    case "i64":
    case "int64":
      return "i64";
    case "i64-vector":
    case "vector-i64":
      return "i64-vector";
    case "i64-map":
    case "map-i64":
      return "i64-map";
    default:
      return String(value);
  }
}

function normalizePackedCallableAbi(packed) {
  if (!packed) return null;
  return {
    input: {
      element: String(requiredField(packed.input || {}, "element")),
      length: Number(requiredField(packed.input || {}, "length")),
      byteLength: Number(requiredField(packed.input || {}, "byteLength")),
    },
    output: {
      element: String(requiredField(packed.output || {}, "element")),
      length: Number(requiredField(packed.output || {}, "length")),
      byteLength: Number(requiredField(packed.output || {}, "byteLength")),
      offset: Number(requiredField(packed.output || {}, "offset")),
    },
    memory: {
      minimumPages: Number(packed.memory?.minimumPages || 0),
    },
  };
}

function packedLogicalBitExtent(element, length) {
  return BigInt(length) * BigInt(packedScalarByteWidth(element) * 8);
}

function packedScalarByteWidth(element) {
  const bytes = {
    u8: 1,
    i8: 1,
    u16: 2,
    i16: 2,
    u32: 4,
    i32: 4,
    u64: 8,
    i64: 8,
  }[String(element)];
  if (!bytes) throw new Error(`unsupported packed scalar ${element}`);
  return bytes;
}

function toProbeLength(value) {
  const length = Number(value);
  if (!Number.isInteger(length) || length < 0) {
    throw new Error(`invalid WasmGC probe length ${value}`);
  }
  return length;
}

function toWitI64(value) {
  if (typeof value === "bigint") return value;
  if (typeof value === "number" && Number.isSafeInteger(value)) return BigInt(value);
  return BigInt(value);
}

function sourceLoaderImport(sourceLoader) {
  return {
    loadRunnerSources(files, paths) {
      if (typeof sourceLoader?.loadRunnerSources === "function") {
        return sourceLoader.loadRunnerSources(files, paths);
      }
      throw new Error("browser source-loader is not configured for runner :files/:paths");
    },
  };
}

function bytesResult(value) {
  return isPromiseLike(value) ? value.then((resolved) => bytesFor(resolved)) : bytesFor(value);
}

function withVersionedAliases(imports) {
  return {
    ...imports,
    [RUNTIME_HOST_IMPORT_VERSIONED]: imports[RUNTIME_HOST_IMPORT],
    [RUNTIME_OPTIMIZER_IMPORT_VERSIONED]: imports[RUNTIME_OPTIMIZER_IMPORT],
    [RUNTIME_SOURCE_LOADER_IMPORT_VERSIONED]: imports[RUNTIME_SOURCE_LOADER_IMPORT],
    "wasi:cli/environment@0.2.6": imports["wasi:cli/environment"],
    "wasi:cli/exit@0.2.6": imports["wasi:cli/exit"],
    "wasi:cli/stdin@0.2.6": imports["wasi:cli/stdin"],
    "wasi:cli/stdout@0.2.6": imports["wasi:cli/stdout"],
    "wasi:cli/stderr@0.2.6": imports["wasi:cli/stderr"],
    "wasi:cli/terminal-input@0.2.6": imports["wasi:cli/terminal-input"],
    "wasi:cli/terminal-output@0.2.6": imports["wasi:cli/terminal-output"],
    "wasi:cli/terminal-stdin@0.2.6": imports["wasi:cli/terminal-stdin"],
    "wasi:cli/terminal-stdout@0.2.6": imports["wasi:cli/terminal-stdout"],
    "wasi:cli/terminal-stderr@0.2.6": imports["wasi:cli/terminal-stderr"],
    "wasi:clocks/monotonic-clock@0.2.6": imports["wasi:clocks/monotonic-clock"],
    "wasi:io/error@0.2.6": imports["wasi:io/error"],
    "wasi:io/poll@0.2.6": imports["wasi:io/poll"],
    "wasi:io/streams@0.2.6": imports["wasi:io/streams"],
    "wasi:random/insecure-seed@0.3.0-rc-2026-03-15":
      imports["wasi:random/insecure-seed"],
  };
}

function reportFlags(options) {
  if (typeof options === "number") return options;
  let flags = RASA_PHASE_ALL;
  if (options?.phases && options.phases !== "all") {
    const phases = Array.isArray(options.phases) ? options.phases : [options.phases];
    flags = phases.reduce((acc, phase) => acc | phaseFlag(phase), 0);
  }
  if (options?.traces) flags |= RASA_REPORT_TRACES;
  return flags;
}

function phaseFlag(phase) {
  switch (String(phase)) {
    case "reader":
      return RASA_PHASE_READER;
    case "analysis":
    case "analyze":
      return RASA_PHASE_ANALYSIS;
    case "ir":
      return RASA_PHASE_IR;
    case "facts":
      return RASA_PHASE_FACTS;
    case "plan":
      return RASA_PHASE_PLAN;
    case "eval":
      return RASA_PHASE_EVAL;
    default:
      return 0;
  }
}

function parseJsonPayload(text, label) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`failed to parse ${label}: ${error.message}`);
  }
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  return encodeUtf8(value);
}

async function readBytes(url, label) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to load ${label}: ${response.status}`);
  }
  return bytesFor(await response.arrayBuffer());
}

async function defaultReadJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to load JSON ${url}: ${response.status}`);
  }
  return response.json();
}

function absoluteUrl(value, base = null) {
  return new URL(String(value), base || globalThis.location?.href || import.meta.url);
}

function resolveUrl(value, baseUrl) {
  return new URL(String(value), baseUrl);
}

function requiredField(value, field) {
  if (!value || value[field] === undefined || value[field] === null || value[field] === "") {
    throw new Error(`callable WasmGC manifest entry is missing ${field}`);
  }
  return value[field];
}

function isPromiseLike(value) {
  return value && typeof value.then === "function";
}

class WasiError {}

class Pollable {
  block() {}
}

class InputStream {}

class OutputStream {
  checkWrite() {
    return 0n;
  }

  write() {}

  blockingFlush() {}

  subscribe() {
    return new Pollable();
  }
}

class TerminalInput {}

class TerminalOutput {}
