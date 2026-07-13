export function parseRasaData(text) {
  return new Parser(String(text ?? "")).parse();
}

export function renderRasaData(value) {
  if (value === null || value === undefined) return "nil";
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") {
    return Number.isInteger(value) ? String(value) : String(Math.round(value * 1000) / 1000);
  }
  if (typeof value === "string") return JSON.stringify(value);
  if (isKeyword(value)) return `:${value.name}`;
  if (isSymbol(value)) return value.name;
  if (isList(value)) return `(${value.items.map(renderRasaData).join(" ")})`;
  if (isSet(value)) return `#{${value.items.map(renderRasaData).join(" ")}}`;
  if (isMapEntries(value)) {
    return `{${value.entries
      .map(([key, item]) => `${renderRasaData(key)} ${renderRasaData(item)}`)
      .join(" ")}}`;
  }
  if (Array.isArray(value)) return `[${value.map(renderRasaData).join(" ")}]`;
  return `{${Object.entries(value)
    .map(([key, item]) => `:${key} ${renderRasaData(item)}`)
    .join(" ")}}`;
}

export function keyword(name) {
  return { type: "keyword", name: String(name).replace(/^:/, "") };
}

export function symbol(name) {
  return { type: "symbol", name: String(name) };
}

export function isKeyword(value) {
  return Boolean(value && typeof value === "object" && value.type === "keyword");
}

export function isSymbol(value) {
  return Boolean(value && typeof value === "object" && value.type === "symbol");
}

export function isList(value) {
  return Boolean(value && typeof value === "object" && value.type === "list");
}

export function isSet(value) {
  return Boolean(value && typeof value === "object" && value.type === "set");
}

export function mapEntries(entries) {
  return { type: "map", entries };
}

export function isMapEntries(value) {
  return Boolean(value && typeof value === "object" && value.type === "map");
}

export function payloadName(value) {
  if (isKeyword(value) || isSymbol(value)) return value.name;
  return String(value ?? "");
}

class Parser {
  constructor(text) {
    this.text = text;
    this.index = 0;
  }

  parse() {
    const value = this.form();
    this.ws();
    if (this.index !== this.text.length) {
      throw new Error(`unexpected trailing form at byte ${this.index}`);
    }
    return value;
  }

  form() {
    this.ws();
    const ch = this.peek();
    if (ch === "{") return this.map();
    if (ch === "[") return this.vector();
    if (ch === "(") return this.list();
    if (ch === "#" && this.text[this.index + 1] === "{") return this.set();
    if (ch === '"') return this.string();
    return this.atom();
  }

  map() {
    this.expect("{");
    const out = {};
    while (true) {
      this.ws();
      if (this.peek() === "}") {
        this.index++;
        return out;
      }
      const key = this.form();
      out[keyName(key)] = this.form();
    }
  }

  vector() {
    this.expect("[");
    const out = [];
    while (true) {
      this.ws();
      if (this.peek() === "]") {
        this.index++;
        return out;
      }
      out.push(this.form());
    }
  }

  list() {
    this.expect("(");
    const items = [];
    while (true) {
      this.ws();
      if (this.peek() === ")") {
        this.index++;
        return { type: "list", items };
      }
      items.push(this.form());
    }
  }

  set() {
    this.expect("#");
    this.expect("{");
    const items = [];
    while (true) {
      this.ws();
      if (this.peek() === "}") {
        this.index++;
        return { type: "set", items };
      }
      items.push(this.form());
    }
  }

  string() {
    this.expect('"');
    let out = "";
    while (this.index < this.text.length) {
      const ch = this.text[this.index++];
      if (ch === '"') return out;
      if (ch === "\\") {
        const next = this.text[this.index++];
        out += next === "n" ? "\n" : next;
      } else {
        out += ch;
      }
    }
    throw new Error("unterminated string");
  }

  atom() {
    const start = this.index;
    while (this.index < this.text.length && !/\s|[\](){}]/.test(this.text[this.index])) {
      this.index++;
    }
    const token = this.text.slice(start, this.index);
    if (!token) throw new Error(`expected form at byte ${this.index}`);
    if (token === "nil") return null;
    if (token === "true") return true;
    if (token === "false") return false;
    if (/^-?\d+(\.\d+)?$/.test(token)) return Number(token);
    if (token.startsWith(":")) return keyword(token.slice(1));
    return symbol(token);
  }

  ws() {
    while (this.index < this.text.length && /\s|,/.test(this.text[this.index])) {
      this.index++;
    }
  }

  peek() {
    return this.text[this.index];
  }

  expect(ch) {
    this.ws();
    if (this.text[this.index] !== ch) {
      throw new Error(`expected ${ch} at byte ${this.index}`);
    }
    this.index++;
  }
}

function keyName(value) {
  if (isKeyword(value) || isSymbol(value)) return value.name;
  return String(value);
}
