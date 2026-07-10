/** @module Interface rasa:runtime/optimizer@0.1.0 **/
export function canCall(symbol: string, arity: number): boolean;
export function tryCall(symbol: string, arity: number, args: Array<CallArg>): CallResult;
export interface PackedArray {
  dtype: string,
  shape: BigUint64Array,
  logicalBitExtent: bigint,
  bytes: Uint8Array,
}
export type CallArg = CallArgInt64 | CallArgI64Vector | CallArgPacked | CallArgUtf8String;
export interface CallArgInt64 {
  tag: 'int64',
  val: bigint,
}
export interface CallArgI64Vector {
  tag: 'i64-vector',
  val: BigInt64Array,
}
export interface CallArgPacked {
  tag: 'packed',
  val: PackedArray,
}
export interface CallArgUtf8String {
  tag: 'utf8-string',
  val: Uint8Array,
}
export interface I64MapEntry {
  key: string,
  value: bigint,
}
export type CallValue = CallValueInt64 | CallValueI64Vector | CallValueI64Map | CallValuePacked;
export interface CallValueInt64 {
  tag: 'int64',
  val: bigint,
}
export interface CallValueI64Vector {
  tag: 'i64-vector',
  val: BigInt64Array,
}
export interface CallValueI64Map {
  tag: 'i64-map',
  val: Array<I64MapEntry>,
}
export interface CallValuePacked {
  tag: 'packed',
  val: PackedArray,
}
export interface CallRefusal {
  reason: string,
  fallback: string,
}
export type CallResult = CallResultExecuted | CallResultRefused;
export interface CallResultExecuted {
  tag: 'executed',
  val: CallValue,
}
export interface CallResultRefused {
  tag: 'refused',
  val: CallRefusal,
}
