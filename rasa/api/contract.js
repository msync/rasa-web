export const BROWSER_PRODUCT_SCHEMA = "rasa.browser-product.v2";
export const BROWSER_APPLICATION_SCHEMA = "rasa.browser-application.v1";
export const BROWSER_API_VERSION = "rasa.browser-api.v2";
export const BROWSER_PACKAGE_SCHEMA = "rasa.package/v1";
export const BROWSER_PRODUCT_PRODUCER = "rasa-web/browser-product-v2";
export const SOURCE_INVENTORY_SCHEMA = "rasa.source-inventory.v0";
export const COMPONENT_PROJECTION_SCHEMA = "rasa.browser-component-projection.v0";
export const INSPECTION_ARTIFACT_SCHEMA = "rasa.inspection-artifact.v0";

const PRODUCT_FIELDS = new Set([
  "schema",
  "product",
  "api",
  "source",
  "runtimeVariants",
  "packageSchema",
  "libraries",
  "session",
  "packages",
  "providers",
  "policy",
  "build",
  "inventory",
]);

const APPLICATION_FIELDS = new Set([
  "schema",
  "application",
  "product",
  "libraries",
  "session",
  "packages",
  "providers",
  "policy",
  "inventory",
]);

export function assertBrowserProductManifest(manifest) {
  assertObject(manifest, "browser product manifest");
  rejectUnexpectedFields(manifest, PRODUCT_FIELDS, "browser product manifest");
  if (manifest.schema !== BROWSER_PRODUCT_SCHEMA) {
    throw new Error(`unsupported browser product schema ${manifest.schema || "missing"}`);
  }
  requireIdentity(manifest.product, "browser product");
  if (manifest?.api?.version !== BROWSER_API_VERSION) {
    throw new Error(`unsupported browser API version ${manifest?.api?.version || "missing"}`);
  }
  requireRelativeAsset(manifest?.api?.module, "browser API module");
  requireRelativeAsset(manifest?.api?.types, "browser API types");
  assertSourceUnit(manifest.source);
  if (manifest.packageSchema !== BROWSER_PACKAGE_SCHEMA) {
    throw new Error(`unsupported browser package schema ${manifest.packageSchema || "missing"}`);
  }
  if (!Array.isArray(manifest.runtimeVariants) || manifest.runtimeVariants.length === 0) {
    throw new Error("browser product declares no runtime variants");
  }
  const variantIds = new Set();
  for (const variant of manifest.runtimeVariants) {
    assertRuntimeVariant(variant);
    if (variantIds.has(variant.id)) throw new Error(`duplicate runtime variant ${variant.id}`);
    variantIds.add(variant.id);
  }
  assertDistributionFields(manifest, "browser product");
  if (manifest?.build?.producer !== BROWSER_PRODUCT_PRODUCER) {
    throw new Error(`unsupported browser product producer ${manifest?.build?.producer || "missing"}`);
  }
  requireText(manifest?.build?.sourceRevision, "browser product source revision");
  if (!new Set(["clean", "dirty"]).has(manifest?.build?.sourceState)) {
    throw new Error(`invalid browser product source state ${manifest?.build?.sourceState || "missing"}`);
  }
  assertInventory(manifest.inventory, "browser product");
  assertDeclaredDistributionAssets(manifest, "browser product");
  return manifest;
}

export function assertBrowserApplicationManifest(manifest) {
  assertObject(manifest, "browser application manifest");
  rejectUnexpectedFields(manifest, APPLICATION_FIELDS, "browser application manifest");
  if (manifest.schema !== BROWSER_APPLICATION_SCHEMA) {
    throw new Error(`unsupported browser application schema ${manifest.schema || "missing"}`);
  }
  requireIdentity(manifest.application, "browser application");
  requireText(manifest.product, "browser application product");
  assertDistributionFields(manifest, "browser application");
  assertInventory(manifest.inventory, "browser application", { allowEmpty: true });
  assertDeclaredDistributionAssets(manifest, "browser application");
  return manifest;
}

export function productInventoryEntry(manifest, asset) {
  return manifestInventoryEntry(manifest, asset, "browser product");
}

export function manifestInventoryEntry(manifest, asset, label = "browser manifest") {
  const path = stripRelativePrefix(requireRelativeAsset(asset, `${label} asset`));
  const entry = manifest.inventory.find((candidate) => candidate.path === path);
  if (!entry) throw new Error(`${label} inventory omits ${path}`);
  return entry;
}

export function assertInspectionArtifact(artifact) {
  if (artifact?.schema !== INSPECTION_ARTIFACT_SCHEMA) {
    throw new Error(`unsupported inspection artifact schema ${artifact?.schema || "missing"}`);
  }
  return artifact;
}

function assertSourceUnit(source) {
  assertObject(source, "browser source unit");
  if (source.schema !== SOURCE_INVENTORY_SCHEMA) {
    throw new Error(`unsupported source inventory schema ${source.schema || "missing"}`);
  }
  if (!/^sha256:[a-f0-9]{64}$/.test(source.id || "")) {
    throw new Error("browser source unit has no content identity");
  }
  requireRelativeAsset(source.manifest, "browser source inventory manifest");
  requireRelativeDirectory(source.root, "browser source root");
}

function assertRuntimeVariant(variant) {
  assertObject(variant, "browser runtime variant");
  if (!/^[a-z][a-z0-9-]*$/.test(variant.id || "")) {
    throw new Error(`invalid browser runtime variant id ${variant.id || "missing"}`);
  }
  if (!Number.isInteger(variant.priority)) {
    throw new Error(`runtime variant ${variant.id} has invalid priority`);
  }
  if (variant?.component?.world !== "rasa:runtime/session@0.1.0") {
    throw new Error(`runtime variant ${variant.id} has an unsupported component world`);
  }
  if (!/^sha256:[a-f0-9]{64}$/.test(variant?.component?.contentId || "")) {
    throw new Error(`runtime variant ${variant.id} has no component identity`);
  }
  if (!Number.isInteger(variant?.component?.sourceBytes) || variant.component.sourceBytes <= 0) {
    throw new Error(`runtime variant ${variant.id} has invalid source component bytes`);
  }
  if (variant?.projection?.schema !== COMPONENT_PROJECTION_SCHEMA) {
    throw new Error(`runtime variant ${variant.id} has an unsupported projection schema`);
  }
  requireText(variant?.projection?.profile, `projection profile for runtime variant ${variant.id}`);
  requireRelativeAsset(
    variant?.projection?.manifest,
    `projection manifest for runtime variant ${variant.id}`,
  );
  const requirements = variant.requirements;
  assertObject(requirements, `requirements for runtime variant ${variant.id}`);
  for (const field of ["webAssembly", "webCrypto", "esm", "jspi"]) {
    if (typeof requirements[field] !== "boolean") {
      throw new Error(`runtime variant ${variant.id} requirement ${field} must be boolean`);
    }
  }
  if (!Array.isArray(requirements.imports) || requirements.imports.some((value) => typeof value !== "string")) {
    throw new Error(`runtime variant ${variant.id} imports must be strings`);
  }
  if (!Array.isArray(requirements.wasmFeatures)) {
    throw new Error(`runtime variant ${variant.id} WebAssembly features must be an array`);
  }
  const featureNames = new Set();
  for (const feature of requirements.wasmFeatures) {
    assertObject(feature, `WebAssembly feature for runtime variant ${variant.id}`);
    requireText(feature.name, `WebAssembly feature name for runtime variant ${variant.id}`);
    requireRelativeAsset(
      feature.probe,
      `WebAssembly feature probe for runtime variant ${variant.id}`,
    );
    if (featureNames.has(feature.name)) {
      throw new Error(`runtime variant ${variant.id} repeats WebAssembly feature ${feature.name}`);
    }
    featureNames.add(feature.name);
  }
  if (requirements?.memory?.addressBits !== 32 || requirements?.memory?.shared !== false) {
    throw new Error(`runtime variant ${variant.id} has an unsupported memory contract`);
  }
  if (!Array.isArray(variant?.provides?.capabilities)) {
    throw new Error(`runtime variant ${variant.id} capabilities must be an array`);
  }
}

function assertDistributionFields(manifest, label) {
  for (const field of ["libraries", "packages", "providers"]) {
    if (manifest[field] !== undefined && !Array.isArray(manifest[field])) {
      throw new Error(`${label} ${field} must be an array`);
    }
  }
  for (const entry of manifest.libraries || []) {
    if (typeof entry === "string") {
      requireRelativeAsset(entry, `${label} source library`);
      continue;
    }
    assertObject(entry, `${label} source library`);
    rejectUnexpectedFields(entry, new Set(["url", "sourceId"]), `${label} source library`);
    requireRelativeAsset(entry.url, `${label} source library`);
    if (entry.sourceId !== undefined) requireText(entry.sourceId, `${label} source library sourceId`);
  }
  for (const entry of manifest.packages || []) {
    if (typeof entry === "string") {
      requireRelativeAsset(entry, `${label} package`);
      continue;
    }
    assertObject(entry, `${label} package`);
    rejectUnexpectedFields(entry, new Set(["url", "package"]), `${label} package`);
    requireRelativeAsset(entry.url, `${label} package`);
    if (entry.package !== undefined) requireText(entry.package, `${label} package identity`);
  }
  for (const entry of manifest.providers || []) {
    assertObject(entry, `${label} provider`);
    rejectUnexpectedFields(
      entry,
      new Set(["package", "target", "kind", "module", "config"]),
      `${label} provider`,
    );
    requireText(entry.package, `${label} provider package`);
    requireRelativeAsset(entry.module, `${label} provider module`);
    if (entry.kind !== "browser-module") {
      throw new Error(`${label} provider kind must be browser-module`);
    }
    if (entry.target !== "wasm-browser") {
      throw new Error(`${label} provider target must be wasm-browser`);
    }
    if (entry.config !== undefined) assertObject(entry.config, `${label} provider config`);
  }
  if (manifest.policy !== undefined) {
    assertObject(manifest.policy, `${label} policy`);
    rejectUnexpectedFields(manifest.policy, new Set(["allow"]), `${label} policy`);
    if (!Array.isArray(manifest.policy.allow)
        || manifest.policy.allow.some((entry) => typeof entry !== "string" || entry.length === 0)) {
      throw new Error(`${label} policy allow must be an array of operation identities`);
    }
  }
  if (manifest.session !== undefined) {
    assertObject(manifest.session, `${label} session`);
    rejectUnexpectedFields(
      manifest.session,
      new Set(["initialNamespace"]),
      `${label} session`,
    );
    if (manifest.session.initialNamespace !== undefined) {
      requireText(manifest.session.initialNamespace, `${label} session initialNamespace`);
    }
  }
}

function assertDeclaredDistributionAssets(manifest, label) {
  for (const entry of manifest.libraries || []) {
    manifestInventoryEntry(manifest, typeof entry === "string" ? entry : entry.url, label);
  }
  for (const entry of manifest.packages || []) {
    manifestInventoryEntry(manifest, typeof entry === "string" ? entry : entry.url, label);
  }
  for (const entry of manifest.providers || []) {
    manifestInventoryEntry(manifest, entry.module, label);
  }
}

function assertInventory(inventory, label, { allowEmpty = false } = {}) {
  if (!Array.isArray(inventory) || (!allowEmpty && inventory.length === 0)) {
    throw new Error(`${label} inventory is ${Array.isArray(inventory) ? "empty" : "invalid"}`);
  }
  const paths = new Set();
  for (const entry of inventory) {
    assertObject(entry, `${label} inventory entry`);
    const path = requireText(entry.path, `${label} inventory path`);
    if (!checkedPath(path, { relativePrefix: false, directory: false })) {
      throw new Error(`invalid ${label} inventory path ${path}`);
    }
    if (paths.has(path)) throw new Error(`${label} inventory repeats ${path}`);
    paths.add(path);
    requireText(entry.kind, `${label} inventory kind`);
    if (!Number.isInteger(entry.bytes) || entry.bytes < 0) {
      throw new Error(`invalid ${label} inventory byte length for ${path}`);
    }
    if (!/^[a-f0-9]{64}$/.test(entry.sha256 || "")) {
      throw new Error(`invalid ${label} inventory digest for ${path}`);
    }
  }
}

function requireIdentity(identity, label) {
  assertObject(identity, label);
  requireText(identity.id, `${label} id`);
  requireText(identity.version, `${label} version`);
}

function rejectUnexpectedFields(value, allowed, label) {
  const unexpected = Object.keys(value).filter((field) => !allowed.has(field));
  if (unexpected.length > 0) {
    throw new Error(`${label} has unsupported fields ${unexpected.join(", ")}`);
  }
}

function assertObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be an object`);
  }
  return value;
}

function requireText(value, label) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${label} must be a non-empty string`);
  }
  return value;
}

function requireRelativeAsset(value, label) {
  const text = requireText(value, label);
  if (!checkedPath(text, { relativePrefix: true, directory: false })) {
    throw new Error(`${label} must be a product-relative file`);
  }
  return text;
}

function requireRelativeDirectory(value, label) {
  const text = requireText(value, label);
  if (!checkedPath(text, { relativePrefix: true, directory: true })) {
    throw new Error(`${label} must be a product-relative directory`);
  }
  return text;
}

function checkedPath(value, { relativePrefix, directory }) {
  const path = String(value);
  if (relativePrefix !== path.startsWith("./")) return false;
  if (!relativePrefix && path.startsWith("/")) return false;
  if (directory !== path.endsWith("/")) return false;
  if (path.includes("\\") || /[%?#]/.test(path)) return false;
  const body = relativePrefix ? path.slice(2) : path;
  const parts = body.split("/").filter((part) => part.length > 0);
  return parts.length > 0 && parts.every((part) => part !== "." && part !== "..");
}

function stripRelativePrefix(value) {
  return String(value).replace(/^\.\//, "");
}
