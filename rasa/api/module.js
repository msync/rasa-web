export async function importModuleBytes(url, bytes, loader = defaultModuleLoader) {
  return await loader(String(url), bytesFor(bytes));
}

async function defaultModuleLoader(_url, bytes) {
  if (typeof Blob !== "function" || typeof URL?.createObjectURL !== "function") {
    throw new Error("verified browser modules require Blob module URLs");
  }
  const objectUrl = URL.createObjectURL(new Blob([bytes], { type: "text/javascript" }));
  try {
    return await import(/* @vite-ignore */ objectUrl);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  return new Uint8Array(value);
}
