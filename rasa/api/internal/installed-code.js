const WASM_CODE_ABI = "rasa.wasm-code.v0";
const LINK_EXPORTS = Object.freeze(["available", "resolve", "call"]);

export class BrowserCodeInstaller {
  #active = false;
  #closed = false;
  #runtime = null;
  #table = null;

  async instantiateCore(module, imports = {}) {
    const instance = await WebAssembly.instantiate(module, imports);
    const exports = instance.exports;
    if (exports.$imports instanceof WebAssembly.Table) {
      if (this.#table) throw new Error("browser projection exposed more than one private Link table");
      if (exports.$imports.length < LINK_EXPORTS.length) {
        throw new Error("browser projection private Link table is too small");
      }
      this.#table = exports.$imports;
    }
    if (
      exports.memory instanceof WebAssembly.Memory
      && typeof exports.rasa_core_exact_call_0 === "function"
    ) {
      if (this.#runtime) throw new Error("browser projection exposed more than one guest runtime");
      this.#runtime = exports;
    }
    return instance;
  }

  ready() {
    return !this.#closed && this.#table !== null && this.#runtime !== null;
  }

  async install(emitted) {
    if (this.#closed) throw new Error("browser code installer is closed");
    if (!this.ready()) throw new Error("browser projection has not initialized its private code seam");
    if (emitted?.codeAbi !== WASM_CODE_ABI) {
      throw new Error(`unsupported Rasa Wasm code ABI ${emitted?.codeAbi}`);
    }
    const bytes = bytesFor(emitted.module);
    const verifyStarted = now();
    const artifactId = await contentId(bytes);
    if (artifactId !== emitted.artifactId) {
      throw new Error(`emitted code identity ${artifactId} does not match ${emitted.artifactId}`);
    }
    const compileStarted = now();
    const module = await WebAssembly.compile(bytes);
    const instantiateStarted = now();
    const instance = await WebAssembly.instantiate(module, importsFor(module, this.#runtime));
    const installedAt = now();
    for (const name of LINK_EXPORTS) {
      if (typeof instance.exports[name] !== "function") {
        throw new Error(`installed code module does not export ${name}`);
      }
    }
    return new InstalledCode(this, instance, Object.freeze({
      artifactId,
      codeAbi: WASM_CODE_ABI,
      functionCount: emitted.functionCount,
      moduleBytes: bytes.byteLength,
      timings: Object.freeze({
        verifyMs: compileStarted - verifyStarted,
        compileMs: instantiateStarted - compileStarted,
        instantiateMs: installedAt - instantiateStarted,
      }),
    }));
  }

  async select(instance, operation) {
    if (this.#closed) throw new Error("browser code installer is closed");
    if (this.#active) throw new Error("another installed Rasa program is already active");
    if (typeof operation !== "function") throw new TypeError("installed-code operation must be a function");
    this.#active = true;
    const previous = LINK_EXPORTS.map((_, index) => this.#table.get(index));
    try {
      LINK_EXPORTS.forEach((name, index) => this.#table.set(index, instance.exports[name]));
      return await operation();
    } finally {
      previous.forEach((entry, index) => this.#table.set(index, entry));
      this.#active = false;
    }
  }

  close() {
    if (this.#active) throw new Error("cannot close browser code installer during execution");
    this.#closed = true;
    this.#runtime = null;
    this.#table = null;
  }
}

class InstalledCode {
  #active = false;
  #closed = false;
  #installer;
  #instance;

  constructor(installer, instance, evidence) {
    this.#installer = installer;
    this.#instance = instance;
    this.evidence = evidence;
  }

  async run(operation) {
    if (this.#closed) throw new Error("installed Rasa code is closed");
    if (this.#active) throw new Error("installed Rasa code is already running");
    this.#active = true;
    try {
      return await this.#installer.select(this.#instance, operation);
    } finally {
      this.#active = false;
    }
  }

  close() {
    if (this.#active) throw new Error("cannot close installed Rasa code during execution");
    this.#closed = true;
    this.#instance = null;
  }
}

function importsFor(module, runtime) {
  const imports = {};
  for (const item of WebAssembly.Module.imports(module)) {
    if (item.module === "env" && item.name === "memory") {
      (imports.env ||= {}).memory = runtime.memory;
      continue;
    }
    if (item.module === "__main_module__" && typeof runtime[item.name] === "function") {
      (imports.__main_module__ ||= {})[item.name] = runtime[item.name];
      continue;
    }
    throw new Error(`installed code requested unsupported import ${item.module}.${item.name}`);
  }
  return imports;
}

function bytesFor(value) {
  if (value instanceof Uint8Array) return value;
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  throw new TypeError("emitted code module must be bytes");
}

async function contentId(bytes) {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return `sha256:${[...digest].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

function now() {
  return globalThis.performance?.now() ?? Date.now();
}
