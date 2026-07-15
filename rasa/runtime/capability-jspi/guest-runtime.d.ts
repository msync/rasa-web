// world root:component/root
import type * as RasaRuntimeHost from './interfaces/rasa-runtime-host.js'; // rasa:runtime/host@0.1.0
import type * as RasaRuntimeSourceLoader from './interfaces/rasa-runtime-source-loader.js'; // rasa:runtime/source-loader@0.1.0
import type * as RasaRuntimeSession from './interfaces/rasa-runtime-session.js'; // rasa:runtime/session@0.1.0
export interface ImportObject {
  'rasa:runtime/host@0.1.0': typeof RasaRuntimeHost,
  'rasa:runtime/source-loader@0.1.0': typeof RasaRuntimeSourceLoader,
}
export interface Root {
  'rasa:runtime/session@0.1.0': typeof RasaRuntimeSession,
  session: typeof RasaRuntimeSession,
}

/**
* Instantiates this component with the provided imports and
* returns a map of all the exports of the component.
*
* This function is intended to be similar to the
* `WebAssembly.Instantiate` constructor. The second `imports`
* argument is the "import object" for wasm, except here it
* uses component-model-layer types instead of core wasm
* integers/numbers/etc.
*
* The first argument to this function, `getCoreModule`, is
* used to compile core wasm modules within the component.
* Components are composed of core wasm modules and this callback
* will be invoked per core wasm module. The caller of this
* function is responsible for reading the core wasm module
* identified by `path` and returning its compiled
* `WebAssembly.Module` object. This would use the
* `WebAssembly.Module` constructor on the web, for example.
*/
export function instantiate(
getCoreModule: (path: string) => WebAssembly.Module,
imports: ImportObject,
instantiateCore?: (module: WebAssembly.Module, imports: Record<string, any>) => WebAssembly.Instance
): Root;
export function instantiate(
getCoreModule: (path: string) => WebAssembly.Module | Promise<WebAssembly.Module>,
imports: ImportObject,
instantiateCore?: (module: WebAssembly.Module, imports: Record<string, any>) => WebAssembly.Instance | Promise<WebAssembly.Instance>
): Root | Promise<Root>;

