import { parseRasaData } from "./data.js";
import { loadBrowserDistribution } from "./distribution.js";
import { assertBrowserProductManifest, assertInspectionArtifact } from "./contract.js";
import { RasaWasmEngine } from "./engine.js";

const DEFAULT_EVAL_OPTIONS = Object.freeze({ phases: "all" });

export class BrowserError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "BrowserError";
    this.phase = details.phase || "unknown";
    this.run = details.run || null;
    this.runs = details.runs || [];
    this.cause = details.cause;
  }
}

export class Browser {
  #closed = false;
  #distribution;
  #engine;
  #sessions = new Set();

  constructor({ distribution, engine }) {
    this.#distribution = distribution;
    this.#engine = engine;
  }

  get manifest() {
    return this.#distribution.manifest;
  }

  get product() {
    return this.manifest.product || null;
  }

  get build() {
    return this.manifest.build || null;
  }

  get runtimeContract() {
    return this.manifest.runtimeContract || null;
  }

  get runtime() {
    return Object.freeze({
      available: this.#engine.available !== false,
      kind: this.#engine.runtimeKind || null,
      byteLength: this.#engine.byteLength ?? null,
      url: this.#engine.url || this.#distribution.runtimeUrl,
      adapterBaseUrl: this.#engine.adapterBaseUrl || this.#distribution.adapterBaseUrl,
    });
  }

  get capabilityTrace() {
    return this.#distribution.host?.lastTrace || null;
  }

  provider(packageName) {
    this.#assertOpen();
    return this.#distribution.providerInstances.get(String(packageName)) || null;
  }

  _providerTrace() {
    return this.capabilityTrace;
  }

  async openSession(options = {}) {
    this.#assertOpen();
    const evalOptions = options.evalOptions || DEFAULT_EVAL_OPTIONS;
    const configureOptions = options.configureOptions || evalOptions;
    const handle = this.#engine.createSession();
    try {
      if (this.#distribution.optimizerManifestUrl) {
        this.#engine.setSessionOptimizerEnabled(handle, true);
      }
      const configuration = [];
      const reports = await this.#distribution.configureSession(
        this.#engine,
        handle,
        configureOptions,
      );
      for (const report of reports) {
        const run = projectRun(report, {
          phase: "configure",
          trace: this.#distribution.host?.lastTrace || null,
        });
        configuration.push(run);
        if (!runOk(run)) {
          throw new BrowserError("browser session configuration failed", {
            phase: "configure",
            run,
            runs: configuration,
          });
        }
      }
      const session = new Session({
        browser: this,
        engine: this.#engine,
        handle,
        evalOptions,
        configuration,
      });
      this.#sessions.add(session);
      return session;
    } catch (error) {
      this.#engine.freeSession(handle);
      if (error instanceof BrowserError) throw error;
      throw new BrowserError(error.message || String(error), {
        phase: "configure",
        cause: error,
      });
    }
  }

  async inspect(source, options = {}) {
    this.#assertOpen();
    try {
      return assertInspectionArtifact(await this.#engine.inspect(String(source ?? ""), options));
    } catch (error) {
      throw new BrowserError(error.message || String(error), {
        phase: "inspect",
        cause: error,
      });
    }
  }

  tokens(source) {
    this.#assertOpen();
    try {
      const payload = this.#engine.syntaxTokens(String(source ?? ""));
      if (!payload || typeof payload.status !== "string" || !Array.isArray(payload.tokens)) {
        throw new Error("invalid syntax token payload");
      }
      return payload;
    } catch (error) {
      throw new BrowserError(error.message || String(error), {
        phase: "tokens",
        cause: error,
      });
    }
  }

  async close() {
    if (this.#closed) return;
    this.#closed = true;
    await Promise.all([...this.#sessions].map((session) => session.close()));
  }

  _release(session) {
    this.#sessions.delete(session);
  }

  #assertOpen() {
    if (this.#closed) {
      throw new BrowserError("Rasa browser environment is closed", { phase: "lifecycle" });
    }
  }
}

export class Session {
  #browser;
  #closed = false;
  #engine;
  #handle;

  constructor({ browser, engine, handle, evalOptions, configuration }) {
    this.#browser = browser;
    this.#engine = engine;
    this.#handle = handle;
    this.evalOptions = { ...evalOptions };
    this.configuration = configuration;
  }

  async eval(source, options = {}) {
    this.#assertOpen();
    try {
      const { repl = true, label = "eval", ...runtimeOptions } = options || {};
      const evalOptions = { ...this.evalOptions, ...runtimeOptions };
      const report = repl
        ? await this.#engine.evaluateReplSessionAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        )
        : await this.#engine.evaluateSessionAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        );
      return projectRun(report, {
        phase: "eval",
        label,
        trace: this.#browser._providerTrace(),
      });
    } catch (error) {
      if (error instanceof BrowserError) throw error;
      throw new BrowserError(error.message || String(error), {
        phase: "eval",
        cause: error,
      });
    }
  }

  async load(source, options = {}) {
    return await this.eval(source, {
      ...options,
      repl: false,
      label: options.label || "load",
    });
  }

  async close() {
    if (this.#closed) return;
    this.#closed = true;
    this.#engine.freeSession(this.#handle);
    this.#browser._release(this);
  }

  #assertOpen() {
    if (this.#closed) {
      throw new BrowserError("Rasa browser session is closed", { phase: "lifecycle" });
    }
  }
}

export async function loadBrowser(manifestUrl = "./browser-product.json", options = {}) {
  const {
    readJson = null,
    readText = null,
    importModule = null,
    fetch = null,
  } = options || {};

  try {
    const distribution = await loadBrowserDistribution(
      manifestUrl,
      compactObject({
        readJson,
        readText,
        importModule,
        fetch,
        validateManifest: assertBrowserProductManifest,
      }),
    );
    return await createBrowser(distribution);
  } catch (error) {
    if (error instanceof BrowserError) throw error;
    throw new BrowserError(error.message || String(error), {
      phase: "load",
      cause: error,
    });
  }
}

export async function createBrowser(distribution, options = {}) {
  if (!distribution || typeof distribution.engineOptions !== "function") {
    throw new BrowserError("browser distribution is required", { phase: "load" });
  }
  const {
    Engine = RasaWasmEngine,
    engineOptions = {},
    readBytes = null,
    runtimeUrl = distribution.runtimeUrl,
    adapterBaseUrl = null,
  } = options || {};
  try {
    const loadOptions = distribution.engineOptions({ ...engineOptions });
    if (adapterBaseUrl) loadOptions.adapterBaseUrl = adapterBaseUrl;
    if (readBytes) loadOptions.readBytes = readBytes;
    const engine = await Engine.load(runtimeUrl, loadOptions);
    return new Browser({ distribution, engine });
  } catch (error) {
    if (error instanceof BrowserError) throw error;
    throw new BrowserError(error.message || String(error), {
      phase: "load",
      cause: error,
    });
  }
}

export function projectRun(reportText, details = {}) {
  const text = String(reportText ?? "");
  let report;
  try {
    report = parseRasaData(text);
  } catch (error) {
    throw new BrowserError("invalid Rasa run report transport", {
      phase: "transport",
      cause: error,
    });
  }
  const topStatus = rasaName(report?.status);
  const evalReport = report?.eval || null;
  const evalStatus = rasaName(evalReport?.status);
  const status = topStatus && topStatus !== "ok"
    ? topStatus
    : evalStatus || topStatus || "unknown";
  return {
    status,
    topStatus,
    evalStatus,
    failedPhase: rasaName(report?.["failed-phase"]) || null,
    value: evalReport?.value ?? null,
    renderedValue: evalReport?.["rendered-value"] ?? null,
    diagnostics: Array.isArray(report?.diagnostics) ? report.diagnostics : [],
    report,
    reportText: text,
    trace: details.trace || null,
    phase: details.phase || "eval",
    label: details.label || null,
  };
}

export function runOk(run) {
  return run?.status === "ok";
}

export function assertRunOk(run, label = "Rasa run") {
  if (!runOk(run)) {
    throw new BrowserError(`${label} failed`, {
      phase: run?.phase || "eval",
      run,
    });
  }
  return run;
}

function rasaName(value) {
  if (!value) return null;
  if (value.type === "keyword" || value.type === "symbol") return value.name;
  return String(value).replace(/^:/, "");
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== null && item !== undefined),
  );
}
