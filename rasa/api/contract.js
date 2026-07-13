export const BROWSER_PRODUCT_SCHEMA = "rasa.browser-product.v1";
export const BROWSER_API_VERSION = "rasa.browser-api.v1";
export const BROWSER_RUNTIME_ABI = "rasa.runtime.browser-component.v1";
export const BROWSER_COMPONENT_WORLD = "rasa:runtime/session@0.1.0";
export const BROWSER_PACKAGE_SCHEMA = "rasa.package/v1";
export const BROWSER_PRODUCT_PRODUCER = "rasa-web/browser-product-v1";
export const INSPECTION_ARTIFACT_SCHEMA = "rasa.inspection-artifact.v0";

const PRODUCT_FIELDS = new Set([
  "schema",
  "product",
  "api",
  "runtime",
  "adapterBaseUrl",
  "optimizedCallables",
  "runtimeContract",
  "packageSchema",
  "sourceLibraries",
  "session",
  "packages",
  "providers",
  "policy",
  "build",
  "inventory",
]);

export function assertBrowserProductManifest(manifest) {
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error("browser product manifest must be an object");
  }
  const unexpected = Object.keys(manifest).filter((field) => !PRODUCT_FIELDS.has(field));
  if (unexpected.length > 0) {
    throw new Error(`browser product manifest has unsupported fields ${unexpected.join(", ")}`);
  }
  if (manifest?.schema !== BROWSER_PRODUCT_SCHEMA) {
    throw new Error(`unsupported browser product schema ${manifest?.schema || "missing"}`);
  }
  if (manifest?.api?.version !== BROWSER_API_VERSION) {
    throw new Error(`unsupported browser API version ${manifest?.api?.version || "missing"}`);
  }
  if (manifest?.runtimeContract?.abi !== BROWSER_RUNTIME_ABI) {
    throw new Error(`unsupported browser runtime ABI ${manifest?.runtimeContract?.abi || "missing"}`);
  }
  if (manifest?.runtimeContract?.componentWorld !== BROWSER_COMPONENT_WORLD) {
    throw new Error(
      `unsupported browser component world ${manifest?.runtimeContract?.componentWorld || "missing"}`,
    );
  }
  if (manifest?.packageSchema !== BROWSER_PACKAGE_SCHEMA) {
    throw new Error(`unsupported browser package schema ${manifest?.packageSchema || "missing"}`);
  }
  requireText(manifest?.product?.id, "browser product id");
  requireText(manifest?.product?.version, "browser product version");
  requireRelativeAsset(manifest?.api?.module, "browser API module");
  requireRelativeAsset(manifest?.runtime, "browser runtime component");
  requireRelativeAsset(manifest?.adapterBaseUrl, "browser component adapter base");
  for (const [field, value] of [
    ["sourceLibraries", manifest.sourceLibraries],
    ["packages", manifest.packages],
    ["providers", manifest.providers],
  ]) {
    if (!Array.isArray(value)) throw new Error(`browser product ${field} must be an array`);
  }
  if (!manifest.policy || typeof manifest.policy !== "object" || Array.isArray(manifest.policy)) {
    throw new Error("browser product policy must be an object");
  }
  if (manifest?.build?.producer !== BROWSER_PRODUCT_PRODUCER) {
    throw new Error(`unsupported browser product producer ${manifest?.build?.producer || "missing"}`);
  }
  requireText(manifest?.build?.sourceRevision, "browser product source revision");
  if (!new Set(["clean", "dirty"]).has(manifest?.build?.sourceState)) {
    throw new Error(`invalid browser product source state ${manifest?.build?.sourceState || "missing"}`);
  }
  if (!Array.isArray(manifest.inventory) || manifest.inventory.length === 0) {
    throw new Error("browser product inventory is empty");
  }
  for (const entry of manifest.inventory) {
    requireText(entry?.path, "browser product inventory path");
    requireText(entry?.kind, "browser product inventory kind");
    if (!Number.isInteger(entry?.bytes) || entry.bytes < 0) {
      throw new Error(`invalid browser product inventory byte length for ${entry?.path || "entry"}`);
    }
    if (!/^[a-f0-9]{64}$/.test(entry?.sha256 || "")) {
      throw new Error(`invalid browser product inventory digest for ${entry?.path || "entry"}`);
    }
  }
  return manifest;
}

export function assertInspectionArtifact(artifact) {
  if (artifact?.schema !== INSPECTION_ARTIFACT_SCHEMA) {
    throw new Error(`unsupported inspection artifact schema ${artifact?.schema || "missing"}`);
  }
  return artifact;
}

function requireText(value, label) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${label} must be a non-empty string`);
  }
  return value;
}

function requireRelativeAsset(value, label) {
  const text = requireText(value, label);
  if (!text.startsWith("./")) throw new Error(`${label} must be product-relative`);
  return text;
}
