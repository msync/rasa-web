/** @module Interface rasa:runtime/session@0.1.0 **/
export function status(): number;
export function renderHash(): number;
export function evalSource(source: Uint8Array, phaseFlags: number): string;
export function evalSourceWithId(sourceId: string, source: Uint8Array, phaseFlags: number): string;
export function evalAdmittedSource(source: Uint8Array, operationIds: Array<string>, phaseFlags: number): string;
export function evalAdmittedSourceWithId(sourceId: string, source: Uint8Array, operationIds: Array<string>, phaseFlags: number): string;
export function sessionNew(): number;
export function sessionFree(session: number): void;
export function sessionSetOptimizerEnabled(session: number, enabled: boolean): void;
export function sessionSetAdmittedOperations(session: number, operationIds: Array<string>): string;
export function sessionEval(session: number, source: Uint8Array, phaseFlags: number): string;
export function sessionEvalWithId(session: number, sourceId: string, source: Uint8Array, phaseFlags: number): string;
export function sessionReplEval(session: number, source: Uint8Array, phaseFlags: number): string;
export function inspectSource(source: Uint8Array, options: number): string;
export function syntaxTokens(source: Uint8Array): string;
