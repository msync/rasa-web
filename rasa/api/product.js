import { parseRasaData } from "./data.js";
import { prepareDistribution } from "./distribution.js";
import { assertInspectionArtifact } from "./contract.js";
import { ComponentRuntime, loadRuntime } from "./runtime.js";

const DEFAULT_EVAL_OPTIONS = Object.freeze({ phases: "all" });

export class ProductError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "ProductError";
    this.phase = details.phase || "unknown";
    this.run = details.run || null;
    this.runs = details.runs || [];
    this.refusals = details.refusals || [];
    this.cause = details.cause;
  }
}

export class Product {
  #closed = false;
  #distribution;
  #runtime;
  #selection;
  #sessions = new Set();

  constructor({ distribution, runtime, selection }) {
    this.#distribution = distribution;
    this.#runtime = runtime;
    this.#selection = selection;
  }

  get manifest() {
    return this.#distribution.productManifest;
  }

  get applicationManifest() {
    return this.#distribution.applicationManifest;
  }

  get identity() {
    return this.manifest.product;
  }

  get application() {
    return this.applicationManifest?.application || null;
  }

  get build() {
    return this.manifest.build;
  }

  get runtime() {
    return Object.freeze({
      available: this.#runtime.available !== false,
      kind: this.#runtime.kind,
      variant: this.#selection.variant.id,
      componentId: this.#selection.variant.component.contentId,
      projectionProfile: this.#selection.variant.projection.profile,
      loadedBytes: this.#runtime.loadedBytes,
      capabilities: Object.freeze([
        ...(this.#selection.variant.provides.capabilities || []),
      ]),
      missingCapabilities: Object.freeze([...this.#selection.missingCapabilities]),
      refusals: Object.freeze([...this.#selection.refusals]),
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
    const handle = this.#runtime.createSession(this.#distribution.sourceInventory);
    try {
      const configuration = [];
      const reports = await this.#distribution.configureSession(
        this.#runtime,
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
          throw new ProductError("browser session configuration failed", {
            phase: "configure",
            run,
            runs: configuration,
          });
        }
      }
      const session = new Session({
        product: this,
        runtime: this.#runtime,
        handle,
        evalOptions,
        configuration,
      });
      this.#sessions.add(session);
      return session;
    } catch (error) {
      this.#runtime.freeSession(handle);
      if (error instanceof ProductError) throw error;
      throw new ProductError(error.message || String(error), {
        phase: "configure",
        cause: error,
      });
    }
  }

  async inspect(source, options = {}) {
    this.#assertOpen();
    try {
      return assertInspectionArtifact(await this.#runtime.inspect(String(source ?? ""), options));
    } catch (error) {
      throw new ProductError(error.message || String(error), {
        phase: "inspect",
        cause: error,
      });
    }
  }

  tokens(source) {
    this.#assertOpen();
    try {
      const payload = this.#runtime.syntaxTokens(String(source ?? ""));
      if (!payload || typeof payload.status !== "string" || !Array.isArray(payload.tokens)) {
        throw new Error("invalid syntax token payload");
      }
      return payload;
    } catch (error) {
      throw new ProductError(error.message || String(error), {
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
      throw new ProductError("Rasa browser product is closed", { phase: "lifecycle" });
    }
  }
}

export class Session {
  #product;
  #closed = false;
  #runtime;
  #handle;

  constructor({ product, runtime, handle, evalOptions, configuration }) {
    this.#product = product;
    this.#runtime = runtime;
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
        ? await this.#runtime.evaluateReplSessionAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        )
        : await this.#runtime.evaluateSessionAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        );
      return projectRun(report, {
        phase: "eval",
        label,
        trace: this.#product._providerTrace(),
      });
    } catch (error) {
      if (error instanceof ProductError) throw error;
      throw new ProductError(error.message || String(error), {
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
    this.#runtime.freeSession(this.#handle);
    this.#product._release(this);
  }

  #assertOpen() {
    if (this.#closed) {
      throw new ProductError("Rasa browser session is closed", { phase: "lifecycle" });
    }
  }
}

export async function loadProduct(manifestUrl = "./browser-product.json", options = {}) {
  try {
    const distribution = await prepareDistribution(manifestUrl, options);
    return await createProduct(distribution, options);
  } catch (error) {
    if (error instanceof ProductError) throw error;
    throw new ProductError(error.message || String(error), {
      phase: "load",
      refusals: error?.refusals || [],
      cause: error,
    });
  }
}

export async function createProduct(distribution, options = {}) {
  if (!distribution || !distribution.productManifest) {
    throw new ProductError("browser distribution is required", { phase: "load" });
  }
  const Runtime = options.Runtime || ComponentRuntime;
  try {
    const selection = Runtime === ComponentRuntime
      ? await loadRuntime(distribution.productManifest, distribution.productUrl, {
        ...options,
        imports: distribution.componentImports(),
        requiredCapabilities: distribution.requiredRuntimeCapabilities(),
      })
      : await Runtime.load(distribution, options);
    if (typeof distribution.complete === "function") {
      await distribution.complete(options);
    }
    if (!distribution.sourceInventory) {
      throw new Error("browser distribution has no verified source inventory");
    }
    distribution.setRuntimeCapabilities(selection.variant.provides.capabilities);
    return new Product({
      distribution,
      runtime: selection.runtime,
      selection,
    });
  } catch (error) {
    if (error instanceof ProductError) throw error;
    throw new ProductError(error.message || String(error), {
      phase: "load",
      refusals: error?.refusals || [],
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
    throw new ProductError("invalid Rasa run report transport", {
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
    throw new ProductError(`${label} failed`, {
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
