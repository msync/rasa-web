/** @module Interface rasa:runtime/session@0.1.0 **/
export function status(): number;
export function renderHash(): number;
export function evalSource(source: Uint8Array, phaseFlags: number): string;
export function evalSourceWithId(sourceId: string, source: Uint8Array, phaseFlags: number): string;
export function evalAdmittedSource(source: Uint8Array, operationIds: Array<string>, phaseFlags: number): string;
export function evalAdmittedSourceWithId(sourceId: string, source: Uint8Array, operationIds: Array<string>, phaseFlags: number): string;
export function sessionNew(inventoryId: string, sources: Array<SourceEntry>): bigint;
export function sessionFree(session: bigint): void;
export function sessionSetAdmittedOperations(session: bigint, operationIds: Array<string>): string;
export function sessionEval(session: bigint, source: Uint8Array, phaseFlags: number): string;
export function sessionEvalWithId(session: bigint, sourceId: string, source: Uint8Array, phaseFlags: number): string;
export function sessionReplEval(session: bigint, source: Uint8Array, phaseFlags: number): string;
export function inspectSource(source: Uint8Array, options: number): string;
export function syntaxTokens(source: Uint8Array): string;
export interface SourceEntry {
  path: string,
  source: Uint8Array,
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
