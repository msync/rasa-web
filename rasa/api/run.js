import { parseRasaData } from "./data.js";

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

export function projectRun(evaluationResult, details = {}) {
  const { reportText: text, packedResult } = evaluationTransport(evaluationResult);
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
  return Object.freeze({
    status,
    topStatus,
    evalStatus,
    failedPhase: rasaName(report?.["failed-phase"]) || null,
    value: evalReport?.value ?? null,
    renderedValue: evalReport?.["rendered-value"] ?? null,
    diagnostics: Array.isArray(report?.diagnostics) ? report.diagnostics : [],
    report,
    reportText: text,
    packedResult,
    trace: details.trace || null,
    phase: details.phase || "eval",
    label: details.label || null,
    mode: details.mode || null,
    timing: details.timing || null,
  });
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

function evaluationTransport(value) {
  if (typeof value === "string") {
    return { reportText: value, packedResult: null };
  }
  if (!value || typeof value !== "object" || typeof value.report !== "string") {
    throw new ProductError("invalid Rasa evaluation result transport", {
      phase: "transport",
    });
  }
  return {
    reportText: value.report,
    packedResult: value.packedResult == null ? null : projectPackedResult(value.packedResult),
  };
}

function projectPackedResult(value) {
  if (!value || typeof value !== "object"
      || typeof value.dtype !== "string" || value.dtype.length === 0
      || !(value.shape instanceof Uint32Array)
      || typeof value.logicalBitExtent !== "bigint"
      || !(value.bytes instanceof Uint8Array)) {
    throw new ProductError("invalid Rasa packed result transport", {
      phase: "transport",
    });
  }
  return Object.freeze({
    dtype: value.dtype,
    shape: Object.freeze(Array.from(value.shape)),
    logicalBitExtent: value.logicalBitExtent,
    bytes: value.bytes,
  });
}
