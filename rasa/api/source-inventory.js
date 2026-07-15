const SOURCE_INVENTORY_SCHEMA = "rasa.source-inventory.v0";
const INVENTORY_DOMAIN = new TextEncoder().encode("rasa-source-inventory-v0");

export async function loadSourceInventory(manifestUrl, options = {}) {
  const url = absoluteUrl(manifestUrl);
  const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
  const readJson = options.readJson || ((value) => defaultReadJson(value, fetchImpl));
  const readBytes = options.readBytes || ((value) => defaultReadBytes(value, fetchImpl));
  const manifest = await readJson(url.href);
  if (manifest?.schema !== SOURCE_INVENTORY_SCHEMA) {
    throw new Error(
      `source inventory ${url.href} has schema ${JSON.stringify(manifest?.schema)}, expected ${SOURCE_INVENTORY_SCHEMA}`,
    );
  }
  if (typeof manifest.id !== "string" || !manifest.id.startsWith("sha256:")) {
    throw new Error(`source inventory ${url.href} has no content identity`);
  }
  if (!Array.isArray(manifest.sources) || manifest.sources.length === 0) {
    throw new Error(`source inventory ${url.href} has no sources`);
  }

  const sourceRoot = options.sourceRootUrl
    ? absoluteUrl(options.sourceRootUrl, url)
    : new URL("../", url);
  const namespaces = new Set();
  const paths = new Set();
  const sources = await Promise.all(manifest.sources.map(async (entry) => {
    if (!entry || typeof entry.path !== "string" || !checkedRelativePath(entry.path)) {
      throw new Error(`source inventory ${url.href} contains an invalid source path`);
    }
    if (typeof entry.namespace !== "string" || entry.namespace.length === 0) {
      throw new Error(`source inventory ${url.href} contains an invalid namespace`);
    }
    if (namespaces.has(entry.namespace) || paths.has(entry.path)) {
      throw new Error(`source inventory ${url.href} repeats a namespace or path`);
    }
    namespaces.add(entry.namespace);
    paths.add(entry.path);
    if (!/^sha256:[a-f0-9]{64}$/.test(entry.contentId || "")) {
      throw new Error(`source inventory ${url.href} has an invalid content identity`);
    }
    const source = bytesFor(await readBytes(new URL(entry.path, sourceRoot).href));
    const actualContentId = await contentId(source);
    if (actualContentId !== entry.contentId) {
      throw new Error(
        `source inventory content mismatch for ${entry.path}: expected ${entry.contentId}, actual ${actualContentId}`,
      );
    }
    return {
      namespace: entry.namespace,
      path: entry.path,
      contentId: entry.contentId,
      source,
    };
  }));
  const actualInventoryId = await inventoryId(sources);
  if (actualInventoryId !== manifest.id) {
    throw new Error(
      `source inventory identity mismatch: expected ${manifest.id}, actual ${actualInventoryId}`,
    );
  }
  return Object.freeze({
    id: manifest.id,
    schema: SOURCE_INVENTORY_SCHEMA,
    sources: Object.freeze(sources.map(({ path, source }) => Object.freeze({ path, source }))),
  });
}

export function sessionInventory(value) {
  if (!value || typeof value.id !== "string" || !Array.isArray(value.sources)) {
    throw new Error("a checked source inventory input is required to open a guest session");
  }
  return {
    id: value.id,
    sources: value.sources.map((entry) => ({
      path: String(entry.path),
      source: bytesFor(entry.source),
    })),
  };
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  return new Uint8Array(value);
}

async function inventoryId(entries) {
  const chunks = [framed(INVENTORY_DOMAIN)];
  for (const entry of [...entries].sort((left, right) => left.namespace.localeCompare(right.namespace))) {
    chunks.push(framed(new TextEncoder().encode(entry.namespace)));
    chunks.push(framed(new TextEncoder().encode(entry.path)));
    chunks.push(framed(new TextEncoder().encode(entry.contentId)));
    chunks.push(framed(entry.source));
  }
  return await contentId(concat(chunks));
}

function framed(bytes) {
  const length = new Uint8Array(8);
  new DataView(length.buffer).setBigUint64(0, BigInt(bytes.byteLength), true);
  return concat([length, bytes]);
}

function concat(chunks) {
  const result = new Uint8Array(chunks.reduce((length, chunk) => length + chunk.byteLength, 0));
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return result;
}

async function contentId(bytes) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Web Crypto is required to validate the Rasa source inventory");
  }
  const digest = new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", bytes));
  return `sha256:${[...digest].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

function checkedRelativePath(path) {
  return path.length > 0
    && !path.startsWith("/")
    && !path.includes("\\")
    && path.split("/").every((part) => part.length > 0 && part !== "." && part !== "..");
}

async function defaultReadJson(url, fetchImpl) {
  if (!fetchImpl) throw new Error(`fetch is unavailable for ${url}`);
  const response = await fetchImpl(url);
  if (!response.ok) throw new Error(`fetch ${url}: HTTP ${response.status}`);
  return await response.json();
}

async function defaultReadBytes(url, fetchImpl) {
  if (!fetchImpl) throw new Error(`fetch is unavailable for ${url}`);
  const response = await fetchImpl(url);
  if (!response.ok) throw new Error(`fetch ${url}: HTTP ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

function absoluteUrl(value, base = null) {
  return value instanceof URL ? value : new URL(value, base || import.meta.url);
}
