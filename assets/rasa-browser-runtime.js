const sourceUrl = import.meta.url;
const assetBaseUrl = new URL(".", sourceUrl).href;
const runtimeUrl = new URL("ras.wasm", assetBaseUrl).href;
const adapterBaseUrl = new URL("rasa-component/", assetBaseUrl).href;
const runtimeGlobal =
  typeof window !== "undefined" ? window :
  typeof self !== "undefined" ? self :
  typeof globalThis !== "undefined" ? globalThis :
  {};

runtimeGlobal.RasaBrowserRuntime = Object.freeze({
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
runtimeGlobal.document?.documentElement?.setAttribute("data-rasa-browser-runtime", "ready");

if (typeof runtimeGlobal.dispatchEvent === "function" && typeof CustomEvent !== "undefined") {
  runtimeGlobal.dispatchEvent(new CustomEvent("rasa-browser-runtime-ready", {
    detail: runtimeGlobal.RasaBrowserRuntime,
  }));
}
