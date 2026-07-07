export function register(registry, context = {}) {
  registry.register("rasa.http", "request", ([request]) =>
    requestViaFetch(request, {
      fetch: context.fetch,
    }),
  );
}

export async function requestViaFetch(request, options = {}) {
  const fetchImpl = options.fetch || globalThis.fetch?.bind(globalThis);
  if (typeof fetchImpl !== "function") {
    throw new Error("browser fetch is not available for rasa.http/request");
  }
  const url = stringField(request?.url, "url");
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    throw new Error("rasa.http/request supports `http://` and `https://` URLs");
  }
  const init = {
    method: methodField(request.method),
    headers: headersField(request.headers),
    redirect: redirectField(request.redirect),
  };
  if (request.body !== null && request.body !== undefined) {
    init.body = String(request.body);
  }
  const response = await fetchImpl(url, init);
  const body = await response.text();
  return {
    status: response.status,
    headers: mapEntries([...response.headers.entries()].map(([name, value]) => [name, value])),
    body,
    url: response.url || url,
    redirected: Boolean(response.redirected),
    type: response.type || "basic",
  };
}

function stringField(value, name) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`rasa.http/request requires string :${name}`);
  }
  return value;
}

function methodField(value) {
  if (value === null || value === undefined) {
    return "GET";
  }
  return payloadName(value).toUpperCase();
}

function headersField(value) {
  if (!value) {
    return {};
  }
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new Error("rasa.http/request :headers must be a map");
  }
  return Object.fromEntries(
    Object.entries(value).map(([name, headerValue]) => [name, String(headerValue)]),
  );
}

function redirectField(value) {
  if (value === null || value === undefined) {
    return "follow";
  }
  const redirect = payloadName(value);
  return ["follow", "error", "manual"].includes(redirect) ? redirect : "follow";
}

function mapEntries(entries) {
  return { type: "map", entries };
}

function payloadName(value) {
  if (value && typeof value === "object" && (value.type === "keyword" || value.type === "symbol")) {
    return value.name;
  }
  return String(value ?? "");
}
