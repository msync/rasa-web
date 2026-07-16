/** @module Interface rasa:runtime/session@0.1.0 **/
export function status(): number;
export function renderHash(): number;
export function evalSource(source: Uint8Array, phaseFlags: number): EvaluationResult;
export function evalSourceWithId(sourceId: string, source: Uint8Array, phaseFlags: number): EvaluationResult;
export function evalAdmittedSource(source: Uint8Array, operationIds: Array<string>, phaseFlags: number): EvaluationResult;
export function evalAdmittedSourceWithId(sourceId: string, source: Uint8Array, operationIds: Array<string>, phaseFlags: number): EvaluationResult;
export function sessionNew(inventoryId: string, sources: Array<SourceEntry>): bigint;
export function sessionFree(session: bigint): void;
export function sessionSetAdmittedOperations(session: bigint, operationIds: Array<string>): string;
export function sessionEval(session: bigint, source: Uint8Array, phaseFlags: number): EvaluationResult;
export function sessionEvalWithId(session: bigint, sourceId: string, source: Uint8Array, phaseFlags: number): EvaluationResult;
export function sessionReplEval(session: bigint, source: Uint8Array, phaseFlags: number): EvaluationResult;
export function sessionReplEvalGeneric(session: bigint, source: Uint8Array, phaseFlags: number): EvaluationResult;
export function sessionCheck(session: bigint, sourceId: string, source: Uint8Array, phaseFlags: number): CheckedProgramResult;
export function inspectSource(source: Uint8Array, options: number): string;
export function syntaxTokens(source: Uint8Array): string;
export interface SourceEntry {
  path: string,
  source: Uint8Array,
}
export interface PackedResult {
  dtype: string,
  shape: Uint32Array,
  logicalBitExtent: bigint,
  bytes: Uint8Array,
}
export interface EvaluationResult {
  report: string,
  packedResult?: PackedResult,
}
export interface EmittedCode {
  module: Uint8Array,
  artifactId: string,
  functionCount: number,
  codeAbi: string,
}
export interface CheckedProgramResult {
  program: CheckedProgram,
  report: string,
  sourceIdentity: string,
}
export type SessionOpenError = SessionOpenErrorInvalidInventory | SessionOpenErrorSourceFailed;
export interface SessionOpenErrorInvalidInventory {
  tag: 'invalid-inventory',
  val: string,
}
export interface SessionOpenErrorSourceFailed {
  tag: 'source-failed',
  val: string,
}

export class CheckedProgram {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  sourceIdentity(): string;
  emit(): EmittedCode;
  run(phaseFlags: number): EvaluationResult;
}
