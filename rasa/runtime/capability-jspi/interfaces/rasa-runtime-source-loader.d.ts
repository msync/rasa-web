/** @module Interface rasa:runtime/source-loader@0.1.0 **/
export function loadRunnerSources(files: Array<string>, paths: Array<string>): SourceLoad;
export interface SourceEntry {
  sourceId: string,
  source: Uint8Array,
}
export interface SourceLoad {
  sources: Array<SourceEntry>,
  namespaces: Array<string>,
}
