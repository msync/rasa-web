/** @module Interface rasa:runtime/session@0.1.0 **/
export function status(): number;
export function renderHash(): number;
export function evalSource(source: Uint8Array, phaseFlags: number): string;
export function evalPackageSource(source: Uint8Array, packageBytes: Uint8Array, phaseFlags: number): string;
export function sessionNew(): number;
export function sessionFree(session: number): void;
export function sessionLoadPackage(session: number, packageBytes: Uint8Array): string;
export function sessionEval(session: number, source: Uint8Array, phaseFlags: number): string;
export function inspectSource(source: Uint8Array, options: number): string;
export function syntaxTokens(source: Uint8Array): string;
