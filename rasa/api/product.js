import { prepareDistribution } from "./distribution.js";
import { assertInspectionArtifact } from "./contract.js";
import {
  DEFAULT_COMPILED_SOURCE_ID,
  compileProgram,
} from "./compiled.js";
import { ProductError, projectRun, runOk } from "./run.js";
import { ComponentRuntime, loadRuntime } from "./runtime.js";

const DEFAULT_EVAL_OPTIONS = Object.freeze({ phases: "all" });

export class Product {
  #closed = false;
  #closePromise = null;
  #distribution;
  #runtime;
  #selection;
  #sessions = new Set();
  #operationTail = Promise.resolve();

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

  async _serialize(operation) {
    const previous = this.#operationTail;
    let release;
    this.#operationTail = new Promise((resolve) => {
      release = resolve;
    });
    await previous;
    try {
      return await operation();
    } finally {
      release();
    }
  }

  async openSession(options = {}) {
    this.#assertOpen();
    const evalOptions = options.evalOptions || DEFAULT_EVAL_OPTIONS;
    const configureOptions = options.configureOptions || evalOptions;
    const handle = this.#runtime.createSession(this.#distribution.sourceInventory);
    try {
      const configuration = [];
      const reports = await this._serialize(() => this.#distribution.configureSession(
        this.#runtime,
        handle,
        configureOptions,
      ));
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
    if (this.#closePromise) return await this.#closePromise;
    this.#closed = true;
    this.#closePromise = (async () => {
      await Promise.all([...this.#sessions].map((session) => session.close()));
      this.#runtime.close?.();
    })();
    return await this.#closePromise;
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
  #closePromise = null;
  #compiled = new Set();
  #compiledBySourceId = new Map();
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
      const { label = "eval", ...runtimeOptions } = options || {};
      const evalOptions = { ...this.evalOptions, ...runtimeOptions };
      const measured = await this.#product._serialize(async () => {
        const started = now();
        const report = await this.#runtime.evaluateReplSessionGenericAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        );
        return { report, executionMs: now() - started };
      });
      return projectRun(measured.report, {
        phase: "eval",
        label,
        trace: this.#product._providerTrace(),
        mode: "eval",
        timing: Object.freeze({ executionMs: measured.executionMs }),
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
    this.#assertOpen();
    try {
      const { label = "load", ...runtimeOptions } = options || {};
      const evalOptions = { ...this.evalOptions, ...runtimeOptions };
      const measured = await this.#product._serialize(async () => {
        const started = now();
        const report = await this.#runtime.evaluateSessionAsync(
          this.#handle,
          String(source ?? ""),
          evalOptions,
        );
        return { report, executionMs: now() - started };
      });
      return projectRun(measured.report, {
        phase: "load",
        label,
        trace: this.#product._providerTrace(),
        mode: "load",
        timing: Object.freeze({ executionMs: measured.executionMs }),
      });
    } catch (error) {
      if (error instanceof ProductError) throw error;
      throw new ProductError(error.message || String(error), {
        phase: "load",
        cause: error,
      });
    }
  }

  async compile(source, options = {}) {
    this.#assertOpen();
    const text = String(source ?? "");
    const {
      sourceId = DEFAULT_COMPILED_SOURCE_ID,
      label = "compile",
      ...runtimeOptions
    } = options || {};
    const id = String(sourceId || DEFAULT_COMPILED_SOURCE_ID);
    const evalOptions = { ...this.evalOptions, ...runtimeOptions };
    return await this.#product._serialize(async () => {
      const compiled = await compileProgram({
        session: this,
        runtime: this.#runtime,
        handle: this.#handle,
        source: text,
        sourceId: id,
        label,
        evalOptions,
        previous: this.#compiledBySourceId.get(id),
      });
      this.#compiled.add(compiled);
      this.#compiledBySourceId.set(id, compiled);
      return compiled;
    });
  }

  async close() {
    if (this.#closePromise) return await this.#closePromise;
    this.#closed = true;
    this.#closePromise = this.#product._serialize(async () => {
      await Promise.all([...this.#compiled].map((compiled) => compiled.close()));
      this.#runtime.freeSession(this.#handle);
      this.#product._release(this);
    });
    return await this.#closePromise;
  }

  _serialize(operation) {
    return this.#product._serialize(operation);
  }

  _releaseCompiled(compiled) {
    this.#compiled.delete(compiled);
    if (this.#compiledBySourceId.get(compiled.sourceId) === compiled) {
      this.#compiledBySourceId.delete(compiled.sourceId);
    }
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

function now() {
  return globalThis.performance?.now() ?? Date.now();
}
