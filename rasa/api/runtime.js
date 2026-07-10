export const RASA_BROWSER_RUNTIME_GLOBAL = "RasaBrowserRuntime";
export const RASA_BROWSER_RUNTIME_SCRIPT = "/assets/rasa-browser-runtime.js";
export const RASA_BROWSER_RUNTIME_PREAMBLE_HTML =
  `<script vite-ignore type="module" src="${RASA_BROWSER_RUNTIME_SCRIPT}"></script>`;

export function browserRuntimePreambleHtml(src = RASA_BROWSER_RUNTIME_SCRIPT) {
  return `<script vite-ignore type="module" src="${src}"></script>`;
}

export function currentBrowserRuntime(globalObject = defaultGlobalObject()) {
  return globalObject?.[RASA_BROWSER_RUNTIME_GLOBAL] || null;
}

export function installBrowserRuntime(options = {}) {
  const globalObject = options.globalObject || defaultGlobalObject();
  const existing = currentBrowserRuntime(globalObject);
  if (existing) return existing;

  const baseHref = globalObject.location?.href || "http://rasa.local/";
  const sourceUrl = new URL(
    options.sourceUrl || RASA_BROWSER_RUNTIME_SCRIPT,
    baseHref,
  ).href;
  const runtimeUrl = new URL(
    options.runtimeUrl || "ras.wasm",
    options.runtimeUrl ? baseHref : new URL(".", sourceUrl).href,
  ).href;
  const adapterBaseUrl = new URL(
    options.adapterBaseUrl || "rasa-component/",
    options.adapterBaseUrl ? baseHref : runtimeUrl,
  ).href;
  const assetBaseUrl = new URL(".", sourceUrl).href;
  const runtime = Object.freeze({
    kind: "rasa.browser-runtime.v1",
    sourceUrl,
    assetBaseUrl,
    runtimeUrl,
    adapterBaseUrl,
    assetUrl(path) {
      return new URL(path, assetBaseUrl).href;
    },
    engineOptions(extra = {}) {
      return {
        ...extra,
        adapterBaseUrl: extra.adapterBaseUrl ?? adapterBaseUrl,
      };
    },
  });
  globalObject[RASA_BROWSER_RUNTIME_GLOBAL] = runtime;
  globalObject.document?.documentElement?.setAttribute("data-rasa-browser-runtime", "ready");
  return runtime;
}

export function browserRuntimeUrls(options = {}) {
  const runtime = options.runtime || currentBrowserRuntime(options.globalObject) || installBrowserRuntime(options);
  const runtimeUrl = runtime?.runtimeUrl || options.runtimeUrl || "./assets/ras.wasm";
  return {
    sourceUrl: runtime?.sourceUrl || null,
    assetBaseUrl: runtime?.assetBaseUrl || null,
    runtimeUrl,
    adapterBaseUrl:
      runtime?.adapterBaseUrl ||
      options.adapterBaseUrl ||
      new URL("rasa-component/", new URL(runtimeUrl, locationHref(options.globalObject))).href,
  };
}

export async function loadRasaBrowserEngine(RasaWasmEngine, options = {}) {
  const urls = browserRuntimeUrls(options);
  const {
    runtime,
    runtimeUrl: _runtimeUrl,
    adapterBaseUrl: _adapterBaseUrl,
    globalObject: _globalObject,
    ...engineOptions
  } = options;
  void runtime;
  void _runtimeUrl;
  void _adapterBaseUrl;
  void _globalObject;
  return await RasaWasmEngine.load(urls.runtimeUrl, {
    ...engineOptions,
    adapterBaseUrl: engineOptions.adapterBaseUrl ?? urls.adapterBaseUrl,
  });
}

function defaultGlobalObject() {
  if (typeof window !== "undefined") return window;
  if (typeof self !== "undefined") return self;
  if (typeof globalThis !== "undefined") return globalThis;
  return {};
}

function locationHref(globalObject = defaultGlobalObject()) {
  return globalObject.location?.href || "http://rasa.local/";
}
