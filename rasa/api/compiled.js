import { ProductError, projectRun, runOk } from "./run.js";

export const DEFAULT_COMPILED_SOURCE_ID = "browser://compiled";

export async function compileProgram({
  session,
  runtime,
  handle,
  source,
  sourceId,
  label,
  evalOptions,
  previous,
}) {
  let checkedProgram = null;
  let installedCode = null;
  try {
    const totalStarted = now();
    const checkStarted = now();
    let checked;
    try {
      checked = await runtime.checkSessionAsync(handle, sourceId, source, evalOptions);
    } catch (error) {
      const report = checkFailureRun(error, {
        label,
        checkMs: now() - checkStarted,
      });
      if (report) {
        throw new ProductError("Rasa source check failed", {
          phase: "compile",
          run: report,
          cause: error,
        });
      }
      throw error;
    }
    const checkMs = now() - checkStarted;
    assertCheckedProgramResult(checked);
    checkedProgram = checked.program;
    const resourceIdentity = checkedProgram.sourceIdentity();
    if (resourceIdentity !== checked.sourceIdentity) {
      throw new Error(
        `checked program identity ${resourceIdentity} does not match ${checked.sourceIdentity}`,
      );
    }
    const check = projectRun(checked.report, {
      phase: "compile",
      label,
      mode: "compile",
      timing: Object.freeze({ checkMs }),
    });
    if (!runOk(check)) {
      throw new ProductError("Rasa source check failed", {
        phase: "compile",
        run: check,
      });
    }

    const emitStarted = now();
    const emitted = runtime.emitCheckedProgram(checkedProgram);
    const emitMs = now() - emitStarted;
    installedCode = await runtime.installCode(emitted);
    const evidence = Object.freeze({
      sourceId,
      sourceIdentity: checked.sourceIdentity,
      artifactId: installedCode.evidence.artifactId,
      codeAbi: installedCode.evidence.codeAbi,
      functionCount: installedCode.evidence.functionCount,
      moduleBytes: installedCode.evidence.moduleBytes,
      timings: Object.freeze({
        checkMs,
        emitMs,
        ...installedCode.evidence.timings,
        totalMs: now() - totalStarted,
      }),
    });
    await previous?.invalidate("source-replaced");
    const compiled = new CompiledProgram({
      session,
      runtime,
      checkedProgram,
      installedCode,
      source,
      evidence,
      check,
      evalOptions,
    });
    checkedProgram = null;
    installedCode = null;
    return compiled;
  } catch (error) {
    if (installedCode) runtime.closeInstalledCode(installedCode);
    if (checkedProgram) runtime.disposeCheckedProgram(checkedProgram);
    if (error instanceof ProductError) throw error;
    throw new ProductError(error.message || String(error), {
      phase: "compile",
      refusals: compileRefusals(error),
      cause: error,
    });
  }
}

export class CompiledProgram {
  #session;
  #runtime;
  #checkedProgram;
  #installedCode;
  #source;
  #state = "ready";
  #staleReason = null;
  #running = false;
  #evalOptions;

  constructor({
    session,
    runtime,
    checkedProgram,
    installedCode,
    source,
    evidence,
    check,
    evalOptions,
  }) {
    this.#session = session;
    this.#runtime = runtime;
    this.#checkedProgram = checkedProgram;
    this.#installedCode = installedCode;
    this.#source = source;
    this.#evalOptions = { ...evalOptions };
    this.evidence = evidence;
    this.check = check;
  }

  get sourceId() {
    return this.evidence.sourceId;
  }

  get sourceIdentity() {
    return this.evidence.sourceIdentity;
  }

  get state() {
    return this.#state;
  }

  get staleReason() {
    return this.#staleReason;
  }

  matchesSource(source) {
    return this.#state === "ready" && this.#source === String(source ?? "");
  }

  async run(options = {}) {
    this.#assertReady();
    if (this.#running) {
      throw new ProductError("compiled Rasa program is already running", {
        phase: "compiled-run",
      });
    }
    const { label = "compiled", ...runtimeOptions } = options || {};
    const evalOptions = { ...this.#evalOptions, ...runtimeOptions };
    this.#running = true;
    try {
      const measured = await this.#session._serialize(async () => {
        const started = now();
        const report = await this.#runtime.runInstalledCode(
          this.#installedCode,
          () => this.#runtime.runCheckedProgramAsync(this.#checkedProgram, evalOptions),
        );
        return { report, executionMs: now() - started };
      });
      return projectRun(measured.report, {
        phase: "compiled-run",
        label,
        mode: "compiled",
        timing: Object.freeze({ executionMs: measured.executionMs }),
      });
    } catch (error) {
      if (error instanceof ProductError) throw error;
      throw new ProductError(error.message || String(error), {
        phase: "compiled-run",
        cause: error,
      });
    } finally {
      this.#running = false;
    }
  }

  async invalidate(reason = "invalidated") {
    if (this.#state !== "ready") return;
    if (this.#running) {
      throw new ProductError("cannot invalidate a compiled Rasa program while it is running", {
        phase: "lifecycle",
      });
    }
    this.#state = "stale";
    this.#staleReason = String(reason);
    this.#release();
  }

  async close() {
    if (this.#state === "closed") return;
    if (this.#running) {
      throw new ProductError("cannot close a compiled Rasa program while it is running", {
        phase: "lifecycle",
      });
    }
    this.#state = "closed";
    this.#release();
  }

  #assertReady() {
    if (this.#state !== "ready") {
      const suffix = this.#state === "stale" && this.#staleReason
        ? `: ${this.#staleReason}`
        : "";
      throw new ProductError(`compiled Rasa program is ${this.#state}${suffix}`, {
        phase: "compiled-run",
      });
    }
  }

  #release() {
    if (this.#installedCode) {
      this.#runtime.closeInstalledCode(this.#installedCode);
      this.#installedCode = null;
    }
    if (this.#checkedProgram) {
      this.#runtime.disposeCheckedProgram(this.#checkedProgram);
      this.#checkedProgram = null;
    }
    this.#session._releaseCompiled(this);
  }
}

function assertCheckedProgramResult(value) {
  if (!value || typeof value !== "object"
      || !value.program || typeof value.program.sourceIdentity !== "function"
      || typeof value.program.emit !== "function" || typeof value.program.run !== "function"
      || typeof value.report !== "string" || typeof value.sourceIdentity !== "string") {
    throw new ProductError("invalid Rasa checked-program transport", {
      phase: "transport",
    });
  }
}

function compileRefusals(error) {
  if (typeof WebAssembly === "object"
      && typeof WebAssembly.CompileError === "function"
      && error instanceof WebAssembly.CompileError) {
    return [{
      kind: "compiled-module-platform-unsupported",
      message: error.message || String(error),
    }];
  }
  return [];
}

function checkFailureRun(error, { label, checkMs }) {
  if (typeof error?.payload !== "string") return null;
  try {
    return projectRun(error.payload, {
      phase: "compile",
      label,
      mode: "compile",
      timing: Object.freeze({ checkMs }),
    });
  } catch {
    return null;
  }
}

function now() {
  return globalThis.performance?.now() ?? Date.now();
}
