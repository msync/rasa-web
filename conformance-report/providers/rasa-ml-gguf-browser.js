const PACKAGE = "rasa.ml.gguf/package";
const RESOURCE_KIND = "model-byte-resource";
const FIXTURE_URI = "fixture:minimal.gguf";
const FIXTURE_FILE_LEN = 152;

export function register(registry) {
  const models = new BrowserModelTable();
  registry.register(PACKAGE, "summary-byte-view", ([request]) =>
    summaryByteView(request),
  );
  registry.register(PACKAGE, "summary-read-at", ([request]) =>
    summaryReadAt(request),
  );
  registry.register(PACKAGE, "open-model", ([request]) =>
    openModel(request, models),
  );
  registry.register(PACKAGE, "model-summary", ([model]) =>
    modelSummary(model, models),
  );
  registry.register(PACKAGE, "close-model", ([model]) =>
    closeModel(model, models),
  );
}

function summaryByteView(request) {
  const source = sourceMap(request, "summary-byte-view");
  const authority = keywordField(source, "authority");
  if (!["boundary-materialized", "host-admitted"].includes(authority)) {
    throw new Error(
      "GGUF :authority must be :boundary-materialized or :host-admitted",
    );
  }
  requireKeyword(source, "provider-read", "boundary-materialized");
  requireKeyword(source, "access", "boundary-materialized-bytes");
  if (authority === "boundary-materialized") {
    requireKeyword(source, "encoding", "hex");
    hexField(source.bytes, "bytes");
  } else {
    fixtureUri(source.uri);
  }
  return summaryPayload("summary-byte-view", {
    authority,
    providerRead: "boundary-materialized",
    access: "boundary-materialized-bytes",
    uri: source.uri,
  });
}

function summaryReadAt(request) {
  const source = sourceMap(request, "summary-read-at");
  requireKeyword(source, "authority", "host-admitted");
  requireKeyword(source, "provider-read", "host-read-at");
  requireKeyword(source, "access", "read-at");
  const uri = fixtureUri(source.uri);
  const byteLen = integerField(source["byte-len"], "byte-len");
  if (byteLen !== FIXTURE_FILE_LEN) {
    throw new Error(`GGUF host-read-at :byte-len must be ${FIXTURE_FILE_LEN}`);
  }
  return summaryPayload("summary-read-at", {
    authority: "host-admitted",
    providerRead: "host-read-at",
    access: "read-at",
    uri,
    byteLen,
  });
}

function openModel(request, models) {
  if (!request || typeof request !== "object" || Array.isArray(request)) {
    throw new Error("GGUF open-model expects one map argument");
  }
  const uri = fixtureUri(request.uri);
  return models.open(uri);
}

function modelSummary(model, models) {
  const entry = models.get(model);
  if (entry.closed) {
    throw new Error(`use-after-close on model resource ${entry.id}`);
  }
  return summaryPayload("model-summary", null);
}

function closeModel(model, models) {
  const entry = models.get(model);
  const alreadyClosed = entry.closed;
  entry.closed = true;
  return {
    status: keyword("closed"),
    "already-closed": alreadyClosed,
  };
}

function sourceMap(request, exportName) {
  if (!request || typeof request !== "object" || Array.isArray(request)) {
    throw new Error(`GGUF ${exportName} expects one map argument`);
  }
  const source = request.source;
  if (!source || typeof source !== "object" || Array.isArray(source)) {
    throw new Error(`GGUF ${exportName} requires :source byte-view evidence`);
  }
  return source;
}

function summaryPayload(exportName, modelBytes) {
  const payload = {
    format: "GGUF",
    version: 3,
    "schema-version": 0,
    "metadata-count": 1,
    "tensor-count": 1,
    alignment: 32,
    "tensor-data-start": 128,
    "file-len": FIXTURE_FILE_LEN,
    "metadata-types": mapEntries([["uint32", 1]]),
    "tensor-types": mapEntries([["F32", 1]]),
    "external-encodings": mapEntries([]),
    ranks: mapEntries([["2", 1]]),
    "largest-tensor": {
      name: "tok_embeddings.weight",
      type: "F32",
      dims: [2, 3],
      elements: 6,
    },
    "fixed-payload-bytes": 24,
    "fixed-payload-tensors": 1,
    "external-payload-tensors": 0,
    gaps: [],
    provider: {
      package: keyword(PACKAGE),
      export: keyword(exportName),
      backend: keyword("browser-gguf-provider"),
    },
  };
  if (modelBytes) {
    payload["model-bytes"] = {
      authority: keyword(modelBytes.authority),
      "provider-read": keyword(modelBytes.providerRead),
      access: keyword(modelBytes.access),
      ...(modelBytes.uri ? { uri: modelBytes.uri } : {}),
      ...(modelBytes.byteLen === undefined
        ? {}
        : { "byte-len": modelBytes.byteLen }),
    };
  }
  return payload;
}

class BrowserModelTable {
  constructor() {
    this.nextId = 1;
    this.models = new Map();
  }

  open(uri) {
    const id = `browser/model/${this.nextId++}`;
    const entry = { id, uri, closed: false };
    this.models.set(id, entry);
    return {
      "resource/id": id,
      "resource/kind": keyword(RESOURCE_KIND),
      "resource/owner": keyword(PACKAGE),
      uri,
    };
  }

  get(model) {
    if (!model || typeof model !== "object" || Array.isArray(model)) {
      throw new Error("GGUF model resource must be a map handle");
    }
    const id = stringField(model["resource/id"], "resource/id");
    requireKeyword(model, "resource/kind", RESOURCE_KIND);
    requireKeyword(model, "resource/owner", PACKAGE);
    const entry = this.models.get(id);
    if (!entry) {
      throw new Error(`model resource ${id} is not open in this provider`);
    }
    return entry;
  }
}

function fixtureUri(value) {
  const uri = stringField(value, "uri");
  if (uri !== FIXTURE_URI) {
    throw new Error(`GGUF fixture URI \`${uri}\` is not available`);
  }
  return uri;
}

function requireKeyword(map, field, expected) {
  const actual = keywordField(map, field);
  if (actual !== expected) {
    throw new Error(`GGUF :${field} must be :${expected}, got :${actual}`);
  }
}

function keywordField(map, field) {
  const value = map?.[field];
  if (!value || typeof value !== "object" || value.type !== "keyword") {
    throw new Error(`GGUF :${field} must be a keyword`);
  }
  return value.name;
}

function stringField(value, field) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`GGUF :${field} must be a non-empty string`);
  }
  return value;
}

function hexField(value, field) {
  const text = stringField(value, field);
  if (!/^(?:[0-9a-fA-F]{2})+$/.test(text)) {
    throw new Error(`GGUF :${field} must be even-length hex`);
  }
  return text;
}

function integerField(value, field) {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`GGUF :${field} must be a non-negative integer`);
  }
  return value;
}

function keyword(name) {
  return { type: "keyword", name };
}

function mapEntries(entries) {
  return { type: "map", entries };
}
