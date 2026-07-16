export type RasaPhase = "reader" | "analysis" | "ir" | "facts" | "eval" | "plan";

export interface EvalOptions {
  phases?: "all" | RasaPhase | readonly RasaPhase[];
  traces?: boolean;
  label?: string;
}

export interface CompileOptions extends EvalOptions {
  sourceId?: string;
}

export interface RunTiming {
  readonly executionMs?: number;
  readonly checkMs?: number;
}

export interface ProductRefusal {
  variant?: string;
  kind: "platform-unsupported" | "capability-unavailable" | "variant-load-failed" | string;
  requirements?: string[];
  capabilities?: string[];
  message?: string;
}

export interface Run {
  readonly status: string;
  readonly topStatus: string | null;
  readonly evalStatus: string | null;
  readonly failedPhase: string | null;
  readonly value: unknown;
  readonly renderedValue: string | null;
  readonly diagnostics: readonly unknown[];
  readonly report: unknown;
  readonly reportText: string;
  readonly packedResult: PackedResult | null;
  readonly trace: unknown;
  readonly phase: string;
  readonly label: string | null;
  readonly mode: "eval" | "compile" | "compiled" | string | null;
  readonly timing: RunTiming | null;
}

export interface PackedResult {
  readonly dtype: string;
  readonly shape: readonly number[];
  readonly logicalBitExtent: bigint;
  readonly bytes: Uint8Array;
}

export interface EvaluationResult {
  readonly report: string;
  readonly packedResult?: {
    readonly dtype: string;
    readonly shape: Uint32Array;
    readonly logicalBitExtent: bigint;
    readonly bytes: Uint8Array;
  };
}

export interface RuntimeIdentity {
  available: boolean;
  kind: string;
  variant: string;
  componentId: string;
  projectionProfile: string;
  loadedBytes: number | null;
  capabilities: readonly string[];
  missingCapabilities: readonly string[];
  refusals: readonly ProductRefusal[];
}

export interface CompileTimings {
  readonly checkMs: number;
  readonly emitMs: number;
  readonly verifyMs: number;
  readonly compileMs: number;
  readonly instantiateMs: number;
  readonly totalMs: number;
}

export interface CompileEvidence {
  readonly sourceId: string;
  readonly sourceIdentity: string;
  readonly artifactId: `sha256:${string}`;
  readonly codeAbi: string;
  readonly functionCount: number;
  readonly moduleBytes: number;
  readonly timings: CompileTimings;
}

export type CompiledProgramState = "ready" | "stale" | "closed";

export class CompiledProgram {
  readonly evidence: CompileEvidence;
  readonly check: Run;
  readonly sourceId: string;
  readonly sourceIdentity: string;
  readonly state: CompiledProgramState;
  readonly staleReason: string | null;
  matchesSource(source: string): boolean;
  run(options?: EvalOptions): Promise<Run>;
  invalidate(reason?: string): Promise<void>;
  close(): Promise<void>;
}

export interface ProductIdentity {
  id: string;
  version: string;
}

export interface InventoryEntry {
  path: string;
  kind: string;
  bytes: number;
  sha256: string;
}

export interface SourceUnit {
  schema: "rasa.source-inventory.v0";
  id: `sha256:${string}`;
  manifest: string;
  root: string;
}

export interface BrowserRuntimeVariant {
  id: string;
  priority: number;
  component: {
    world: "rasa:runtime/session@0.1.0";
    contentId: `sha256:${string}`;
    sourceBytes: number;
  };
  projection: {
    schema: "rasa.browser-component-projection.v0";
    profile: string;
    manifest: string;
  };
  requirements: {
    webAssembly: boolean;
    webCrypto: boolean;
    esm: boolean;
    jspi: boolean;
    imports: string[];
    wasmFeatures: Array<{ name: string; probe: string }>;
    memory: { addressBits: 32; shared: false };
  };
  provides: { capabilities: string[] };
}

export type BrowserLibrary = string | { url: string; sourceId?: string };
export type BrowserPackage = string | { url: string; package?: string };

export interface BrowserProvider {
  package: string;
  target: "wasm-browser";
  kind: "browser-module";
  module: string;
  config?: Record<string, unknown>;
}

export interface BrowserDistributionFields {
  libraries?: BrowserLibrary[];
  session?: { initialNamespace?: string };
  packages?: BrowserPackage[];
  providers?: BrowserProvider[];
  policy?: { allow: string[] };
}

export interface LoadProductOptions {
  fetch?: typeof fetch;
  platform?: typeof globalThis;
  readJson?: (url: string) => Promise<unknown>;
  readText?: (url: string) => Promise<string>;
  readBytes?: (url: string, label?: string) => Promise<Uint8Array | ArrayBuffer>;
  importModule?: (url: string, verifiedBytes: Uint8Array) => Promise<unknown>;
}

export class ProductError extends Error {
  phase: string;
  run: Run | null;
  runs: Run[];
  refusals: ProductRefusal[];
  cause?: unknown;
}

export class Session {
  readonly configuration: Run[];
  readonly evalOptions: EvalOptions;
  eval(source: string, options?: EvalOptions): Promise<Run>;
  load(source: string, options?: EvalOptions): Promise<Run>;
  compile(source: string, options?: CompileOptions): Promise<CompiledProgram>;
  close(): Promise<void>;
}

export class Product {
  readonly manifest: BrowserProductManifest;
  readonly applicationManifest: BrowserApplicationManifest | null;
  readonly identity: { id: string; version: string };
  readonly application: { id: string; version: string } | null;
  readonly build: { producer: string; sourceRevision: string; sourceState: "clean" | "dirty" };
  readonly runtime: RuntimeIdentity;
  readonly capabilityTrace: unknown;
  provider(packageName: string): unknown;
  openSession(options?: { evalOptions?: EvalOptions; configureOptions?: EvalOptions }): Promise<Session>;
  inspect(source: string, options?: Record<string, unknown>): Promise<unknown>;
  tokens(source: string): { status: string; tokens: unknown[] };
  close(): Promise<void>;
}

export interface BrowserProductManifest extends BrowserDistributionFields {
  schema: "rasa.browser-product.v2";
  product: ProductIdentity;
  api: { version: "rasa.browser-api.v2"; module: string; types: string };
  source: SourceUnit;
  runtimeVariants: BrowserRuntimeVariant[];
  packageSchema: "rasa.package/v1";
  build: { producer: string; sourceRevision: string; sourceState: "clean" | "dirty" };
  inventory: InventoryEntry[];
}

export interface BrowserApplicationManifest extends BrowserDistributionFields {
  schema: "rasa.browser-application.v1";
  application: ProductIdentity;
  product: string;
  inventory: InventoryEntry[];
}

export function loadProduct(
  manifestUrl?: string | URL,
  options?: LoadProductOptions,
): Promise<Product>;
export function projectRun(
  evaluationResult: string | EvaluationResult,
  details?: Record<string, unknown>,
): Run;
export function runOk(run: Run): boolean;
export function assertRunOk(run: Run, label?: string): Run;

export const BROWSER_PRODUCT_SCHEMA: "rasa.browser-product.v2";
export const BROWSER_APPLICATION_SCHEMA: "rasa.browser-application.v1";
export const BROWSER_API_VERSION: "rasa.browser-api.v2";
