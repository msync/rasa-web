import {
  loadBrowserDistribution,
  parseRasaData,
} from "./capability-bridge.js";
import { RasaWasmEngine } from "./wasm-session.js";
import { loadRasaBrowserEngine } from "./runtime.js";

const DEFAULT_EVAL_OPTIONS = Object.freeze({ phases: "all" });

export class RasaBrowserProductError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "RasaBrowserProductError";
    this.phase = details.phase || "unknown";
    this.result = details.result || null;
    this.results = details.results || [];
    this.refusal = details.refusal || details.result?.refusal || null;
  }
}

export class RasaBrowserProduct {
  constructor({
    distribution,
    engine,
    session,
    evalOptions = DEFAULT_EVAL_OPTIONS,
    configuration = [],
  }) {
    this.distribution = distribution;
    this.engine = engine;
    this.session = session;
    this.evalOptions = { ...evalOptions };
    this.configuration = configuration;
    this.closed = false;
  }

  async eval(source, options = {}) {
    this.assertOpen();
    const { repl = true, label = "eval", ...runtimeOptions } = options || {};
    const evalOptions = { ...this.evalOptions, ...runtimeOptions };
    const report = repl
      ? await this.engine.evaluateReplSessionAsync(this.session, source, evalOptions)
      : await this.engine.evaluateSessionAsync(this.session, source, evalOptions);
    return this.projectReport(report, {
      phase: "eval",
      label,
    });
  }

  async load(source, options = {}) {
    return await this.eval(source, {
      ...options,
      repl: false,
      label: options.label || "load",
    });
  }

  projectReport(report, details = {}) {
    return projectBrowserProductReport(report, {
      ...details,
      trace: this.distribution?.host?.lastTrace || null,
    });
  }

  assertOpen() {
    if (this.closed) {
      throw new RasaBrowserProductError("Rasa browser product is closed", {
        phase: "lifecycle",
      });
    }
  }

  async close() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this.engine?.freeSession?.(this.session);
  }
}

export async function createRasaBrowserProduct(manifestUrl = "./browser-manifest.json", options = {}) {
  const {
    RasaWasmEngine: Engine = RasaWasmEngine,
    distribution: providedDistribution = null,
    engineOptions = {},
    evalOptions = DEFAULT_EVAL_OPTIONS,
    configureOptions = evalOptions,
    runtimeUrl = null,
    adapterBaseUrl = null,
    readBytes = null,
    readJson = null,
    readText = null,
    importModule = null,
    fetch = null,
    target = null,
  } = options || {};

  const distribution = providedDistribution || await loadBrowserDistribution(manifestUrl, compactObject({
    readJson,
    readText,
    importModule,
    fetch,
    target,
  }));
  const loadOptions = distribution.engineOptions({ ...engineOptions });
  loadOptions.runtimeUrl = runtimeUrl || distribution.runtimeUrl;
  if (adapterBaseUrl) {
    loadOptions.adapterBaseUrl = adapterBaseUrl;
  }
  if (readBytes) {
    loadOptions.readBytes = readBytes;
  }
  const engine = await loadRasaBrowserEngine(Engine, loadOptions);
  const session = engine.createSession();
  try {
    if (distribution.optimizerManifestUrl) {
      engine.setSessionOptimizerEnabled(session, true);
    }
    const configuration = [];
    for (const report of await distribution.configureSessionAsync(engine, session, configureOptions)) {
      const result = projectBrowserProductReport(report, {
        phase: "configure",
        trace: distribution.host?.lastTrace || null,
      });
      configuration.push(result);
      if (!browserProductResultOk(result)) {
        throw new RasaBrowserProductError("failed to configure Rasa browser product", {
          phase: "configure",
          result,
          results: configuration,
        });
      }
    }
    return new RasaBrowserProduct({
      distribution,
      engine,
      session,
      evalOptions,
      configuration,
    });
  } catch (error) {
    engine.freeSession?.(session);
    if (error instanceof RasaBrowserProductError) {
      throw error;
    }
    throw new RasaBrowserProductError(error.message || String(error), {
      phase: "configure",
    });
  }
}

export function projectBrowserProductReport(report, details = {}) {
  const text = String(report ?? "");
  let data = null;
  try {
    data = parseRasaData(text);
  } catch {
    return {
      status: "unparseable",
      topStatus: null,
      evalStatus: null,
      renderedValue: null,
      value: null,
      report: text,
      data: null,
      diagnostics: [],
      refusal: null,
      trace: details.trace || null,
      phase: details.phase || "eval",
      label: details.label || null,
    };
  }
  const topStatus = statusName(data?.status);
  const evalData = data?.eval || null;
  const evalStatus = statusName(evalData?.status);
  const diagnostics = reportDiagnostics(data);
  const failedPhase = statusName(data?.["failed-phase"]) || failedReportPhase(data);
  const failedPhaseDiagnostics = failedPhase
    ? diagnostics.filter((diagnostic) => diagnosticPhase(diagnostic) === failedPhase)
    : [];
  const status = topStatus === "ok" && (!evalStatus || evalStatus === "ok")
    ? "ok"
    : evalStatus || topStatus || "unknown";
  return {
    status,
    topStatus,
    evalStatus,
    failedPhase,
    renderedValue: evalData?.["rendered-value"] ?? null,
    value: evalData?.value ?? null,
    report: text,
    data,
    diagnostics,
    refusal: productRefusalFromDiagnostics(
      failedPhaseDiagnostics.length > 0 ? failedPhaseDiagnostics : diagnostics,
      status,
    ),
    trace: details.trace || null,
    phase: details.phase || "eval",
    label: details.label || null,
  };
}

function failedReportPhase(data) {
  for (const section of ["reader", "analysis", "ir", "facts", "checks", "plan", "eval"]) {
    if (statusName(data?.[section]?.status) === "failed") return section;
  }
  return null;
}

export function browserProductResultOk(result) {
  return result?.status === "ok";
}

export function assertBrowserProductResultOk(result, label = "Rasa browser product") {
  if (!browserProductResultOk(result)) {
    const suffix = result?.refusal?.message ? `: ${result.refusal.message}` : "";
    throw new RasaBrowserProductError(`${label} failed${suffix}`, {
      phase: result?.phase || "eval",
      result,
    });
  }
  return result;
}

function statusName(value) {
  if (!value) {
    return null;
  }
  if (value.type === "keyword") {
    return value.name;
  }
  return String(value).replace(/^:/, "");
}

function reportDiagnostics(data) {
  const sections = ["reader", "analysis", "ir", "facts", "checks", "plan", "eval"];
  const diagnostics = [
    ...(Array.isArray(data?.diagnostics) ? data.diagnostics : []),
    ...sections.flatMap((section) => {
    const diagnostics = data?.[section]?.diagnostics;
    return Array.isArray(diagnostics) ? diagnostics : [];
    }),
  ];
  const unique = new Map();
  for (const diagnostic of diagnostics) {
    unique.set(diagnosticIdentity(diagnostic), diagnostic);
  }
  return [...unique.values()];
}

function diagnosticPhase(diagnostic) {
  return statusName(diagnostic?.phase || diagnostic?.["rasa.diagnostic/phase"]);
}

function diagnosticIdentity(diagnostic) {
  const span = diagnostic?.span || diagnostic?.["rasa.diagnostic/primary-span"] || {};
  return JSON.stringify([
    diagnosticPhase(diagnostic),
    statusName(diagnostic?.kind || diagnostic?.["rasa.diagnostic/code"]),
    diagnostic?.message || diagnostic?.["rasa.diagnostic/summary"] || "",
    span?.["source-id"] || null,
    span?.start ?? null,
    span?.end ?? null,
  ]);
}

function productRefusalFromDiagnostics(diagnostics, status) {
  const diagnostic = diagnostics.find((item) => {
    const severity = statusName(item?.severity || item?.["rasa.diagnostic/severity"]);
    return item?.recoverable === false || severity === "error" || severity === "fatal";
  }) || (status === "ok" ? null : diagnostics[0]);
  if (!diagnostic) {
    return null;
  }
  const error = diagnostic.data || diagnostic["rasa.diagnostic/data"] || {};
  return {
    phase: statusName(diagnostic.phase || diagnostic["rasa.diagnostic/phase"]),
    kind: statusName(diagnostic.kind || diagnostic["rasa.diagnostic/code"]),
    errorKind: statusName(error["rasa.error/kind"]),
    category: statusName(error["rasa.error/category"]),
    message: diagnostic["rasa.diagnostic/summary"] || diagnostic.message || error["rasa.error/message"] || "",
    data: error["rasa.error/data"] || {},
    source: error["rasa.error/span"] || diagnostic["rasa.diagnostic/primary-span"] || diagnostic.span || null,
    recoverable: diagnostic.recoverable ?? null,
  };
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== null && item !== undefined),
  );
}
