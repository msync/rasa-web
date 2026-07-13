import {
  keyword,
  parseRasaData,
  payloadName,
  renderRasaData,
} from "./data.js";

export class ResourceTable {
  #nextId = 1;
  #resources = new Map();

  constructor(prefix) {
    this.prefix = String(prefix);
  }

  insert(kind, value) {
    const id = `${this.prefix}/${kind}/${this.#nextId++}`;
    this.#resources.set(id, { kind, value });
    return id;
  }

  get(id, kind = null) {
    const entry = this.#resources.get(id);
    if (!entry) throw new Error(`unknown resource handle ${id}`);
    if (kind && entry.kind !== kind) {
      throw new Error(`resource ${id} has kind ${entry.kind}, expected ${kind}`);
    }
    return entry.value;
  }
}

export class CapabilityError extends Error {
  constructor(kind, message, data = {}) {
    super(message);
    this.name = "CapabilityError";
    this.kind = kind;
    this.data = data;
  }
}

export class CapabilityPolicy {
  #allowed;

  constructor(allowed = []) {
    this.#allowed = new Set(allowed.map(String));
  }

  static fromManifest(policy = {}) {
    return new CapabilityPolicy(policy.allow || []);
  }

  allows(packageName, exportName) {
    return this.#allowed.has("*") || this.#allowed.has(capabilityId(packageName, exportName));
  }

  entries() {
    return [...this.#allowed].sort();
  }
}

export class CapabilityRegistry {
  #handlers = new Map();

  register(packageName, exportName, handler) {
    this.#handlers.set(capabilityId(packageName, exportName), handler);
    return this;
  }

  invoke(packageName, exportName, args) {
    const id = capabilityId(packageName, exportName);
    const handler = this.#handlers.get(id);
    if (!handler) {
      throw new CapabilityError(
        "adapter-missing",
        `browser capability adapter is missing for ${id}`,
        capabilityErrorData(packageName, exportName),
      );
    }
    return handler(args);
  }

  entries() {
    return [...this.#handlers.keys()];
  }
}

export class CapabilityHost {
  constructor({ registry = new CapabilityRegistry(), policy = new CapabilityPolicy() } = {}) {
    this.registry = registry;
    this.policy = policy instanceof CapabilityPolicy
      ? policy
      : CapabilityPolicy.fromManifest(policy);
    this.lastTrace = null;
  }

  call(requestText) {
    const trace = { requestText, responseText: "" };
    try {
      const request = parseRasaData(requestText);
      const packageName = payloadName(request.package);
      const exportName = payloadName(request.export);
      const args = Array.isArray(request.args) ? request.args : [];
      const id = capabilityId(packageName, exportName);
      Object.assign(trace, { packageName, exportName, capability: id, argsCount: args.length });
      if (!this.policy.allows(packageName, exportName)) {
        throw new CapabilityError(
          "policy-denied",
          `browser policy denies ${id}`,
          capabilityErrorData(packageName, exportName),
        );
      }
      const value = this.registry.invoke(packageName, exportName, args);
      if (isPromiseLike(value)) {
        this.lastTrace = { ...trace, status: "pending", suspended: true };
        return value.then(
          (resolved) => this.#complete(trace, resolved, true),
          (error) => this.#fail(trace, error, true),
        );
      }
      return this.#complete(trace, value, false);
    } catch (error) {
      return this.#fail(trace, error, false);
    }
  }

  async callAsync(requestText) {
    return await this.call(requestText);
  }

  #complete(trace, value, suspended) {
    const responseText = providerOk(value);
    this.lastTrace = {
      ...trace,
      status: "completed",
      ...(suspended ? { suspended: true, resumed: true } : {}),
      responseText,
    };
    return responseText;
  }

  #fail(trace, error, suspended) {
    const kind = error instanceof CapabilityError ? error.kind : "provider-error";
    const responseText = providerError(
      kind,
      error.message || String(error),
      providerErrorData(trace, error),
    );
    this.lastTrace = {
      ...trace,
      status: "failed",
      ...(suspended ? { suspended: true, resumed: true } : {}),
      kind,
      error: error.message,
      responseText,
    };
    return responseText;
  }
}

export function capabilityId(packageName, exportName) {
  return `${packageName}/${exportName}`;
}

export function ok(value) {
  return { status: keyword("ok"), value };
}

export function failed(kind, message, data = {}) {
  return { status: keyword("error"), kind: keyword(kind), message, ...data };
}

export function providerOk(value) {
  return renderRasaData({ status: keyword("ok"), value });
}

export function providerError(kind, message, data = null) {
  const response = { status: keyword("error"), kind: keyword(kind), message };
  if (data && Object.keys(data).length > 0) response.data = data;
  return renderRasaData(response);
}

function providerErrorData(trace, error) {
  if (error instanceof CapabilityError) return error.data || {};
  return capabilityErrorData(trace.packageName, trace.exportName, {
    "rasa.browser/name": error?.name || "Error",
  });
}

function capabilityErrorData(packageName, exportName, extra = {}) {
  const data = {
    "rasa.host/target": keyword("wasm-browser"),
    ...extra,
  };
  if (packageName && exportName) {
    data["rasa.host/capability"] = keyword(capabilityId(packageName, exportName));
  }
  return data;
}

function isPromiseLike(value) {
  return Boolean(value && typeof value.then === "function");
}
