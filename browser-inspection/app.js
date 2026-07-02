const Uo = Object.freeze({
  logo: "./assets/brand/logo.svg",
  mark: "./assets/brand/mark.svg"
}), rr = "rasa.theme", Vt = Object.freeze({
  dark: Object.freeze({
    colorScheme: "dark",
    surface: "#0d0f12",
    surfaceLift: "#111720",
    panel: "#12161c",
    panelSoft: "#0f141a",
    panelRaised: "#151a22",
    line: "#29313d",
    lineStrong: "#3a4656",
    text: "#e8edf2",
    muted: "#9aa6b6",
    dim: "#6d7885",
    gold: "#e8b84a",
    blue: "#78a7ff",
    green: "#83d7aa",
    violet: "#b08cff",
    teal: "#63c5c6",
    red: "#ff8ca3",
    success: "#83d7aa",
    danger: "#ff8ca3",
    warning: "#e8b84a",
    codeBg: "#0e1319",
    buttonText: "#0d0f12",
    shadow: "rgba(0, 0, 0, 0.18)",
    backdrop: "rgba(6, 10, 14, 0.45)",
    radius: "8px"
  }),
  light: Object.freeze({
    colorScheme: "light",
    surface: "#f7f8f5",
    surfaceLift: "#ffffff",
    panel: "#ffffff",
    panelSoft: "#f1f4f0",
    panelRaised: "#fbfcfa",
    line: "#d8ddd5",
    lineStrong: "#b8c0b4",
    text: "#17201a",
    muted: "#5d6a62",
    dim: "#879188",
    gold: "#8a6418",
    blue: "#315fa8",
    green: "#24704a",
    violet: "#6d4bab",
    teal: "#237071",
    red: "#a43b50",
    success: "#24704a",
    danger: "#a43b50",
    warning: "#8a6418",
    codeBg: "#f7faf6",
    buttonText: "#ffffff",
    shadow: "rgba(28, 37, 31, 0.12)",
    backdrop: "rgba(30, 38, 32, 0.25)",
    radius: "8px"
  })
});
Vt.dark;
function _o() {
  return `
    :host {
      ${Si(Vt.dark)}
      --rasa-reader: var(--rasa-gold);
      --rasa-analysis: var(--rasa-blue);
      --rasa-ir: var(--rasa-violet);
      --rasa-facts: var(--rasa-green);
      --rasa-plan: var(--rasa-teal);
      --rasa-eval: var(--rasa-red);
      font-family:
        Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    }

    :host([data-theme="light"]) {
      ${Si(Vt.light)}
    }

    :host([data-theme="dark"]) {
      ${Si(Vt.dark)}
    }
  `;
}
function Yo(n = document.documentElement) {
  const e = localStorage.getItem(rr), t = e === "light" || e === "dark" ? e : window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
  return or(t, n), t;
}
function or(n, e = document.documentElement) {
  const t = n === "light" ? "light" : "dark";
  return e.dataset.rasaTheme = t, e.setAttribute("data-theme", t), localStorage.setItem(rr, t), window.dispatchEvent(new CustomEvent("rasa-theme-change", { detail: { theme: t } })), t;
}
function Xo(n = document.documentElement) {
  return or(n.dataset.rasaTheme === "light" ? "dark" : "light", n);
}
function Gn(n) {
  return n === "light" ? "Dark" : "Light";
}
function Si(n) {
  return `
      color-scheme: ${n.colorScheme};
      --rasa-surface: ${n.surface};
      --rasa-surface-lift: ${n.surfaceLift};
      --rasa-panel: ${n.panel};
      --rasa-panel-soft: ${n.panelSoft};
      --rasa-panel-raised: ${n.panelRaised};
      --rasa-line: ${n.line};
      --rasa-line-strong: ${n.lineStrong};
      --rasa-text: ${n.text};
      --rasa-muted: ${n.muted};
      --rasa-dim: ${n.dim};
      --rasa-gold: ${n.gold};
      --rasa-blue: ${n.blue};
      --rasa-green: ${n.green};
      --rasa-violet: ${n.violet};
      --rasa-teal: ${n.teal};
      --rasa-red: ${n.red};
      --rasa-success: ${n.success};
      --rasa-danger: ${n.danger};
      --rasa-warning: ${n.warning};
      --rasa-code-bg: ${n.codeBg};
      --rasa-button-text: ${n.buttonText};
      --rasa-shadow: ${n.shadow};
      --rasa-backdrop: ${n.backdrop};
      --rasa-radius: ${n.radius};
  `;
}
function Jo() {
  return `
    ${_o()}

    /* Modern Glassmorphic Topbar */
    .topbar {
      align-items: center;
      background: rgba(15, 23, 42, 0.4);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      display: flex;
      gap: 24px;
      justify-content: space-between;
      min-height: 80px;
      padding: 16px 24px;
      margin-bottom: 24px;
      position: sticky;
      top: 16px;
      z-index: 100;
      transition: all 0.3s ease;
    }

    :root[data-rasa-theme="light"] .topbar {
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
    }

    .brand {
      align-items: center;
      display: flex;
      gap: 16px;
      min-width: 0;
    }

    .brand-logo {
      display: block;
      flex: 0 0 auto;
      height: 38px;
      opacity: 0.95;
      width: auto;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .brand-logo:hover {
      transform: scale(1.05) rotate(-2deg);
    }

    .brand-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .eyebrow {
      color: #3b82f6; /* Modern Blue Accent */
      display: block;
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1;
      margin-bottom: 6px;
      text-transform: uppercase;
    }

    h1 {
      color: var(--rasa-text);
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.05;
      margin: 0;
    }

    .topbar-subtitle {
      color: var(--rasa-muted);
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin-top: 4px;
      opacity: 0.8;
    }

    .status {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-end;
    }

    .theme-toggle {
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 99px;
      color: var(--rasa-text);
      cursor: pointer;
      display: inline-flex;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      min-height: 36px;
      padding: 0 16px;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    :root[data-rasa-theme="light"] .theme-toggle {
      background: rgba(0, 0, 0, 0.03);
      border-color: rgba(0, 0, 0, 0.08);
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    :root[data-rasa-theme="light"] .theme-toggle:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    .brand-mark {
      height: 24px;
      opacity: 0.5;
      width: 24px;
      transition: opacity 0.3s;
    }

    .status:hover .brand-mark {
      opacity: 0.8;
    }

    /* Refined Pills */
    .pill {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
      border-radius: 99px;
      color: var(--rasa-muted);
      display: inline-flex;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      padding: 8px 12px;
      white-space: nowrap;
      transition: all 0.3s;
    }

    :root[data-rasa-theme="light"] .pill {
      border-color: rgba(0, 0, 0, 0.08);
      background: rgba(0, 0, 0, 0.02);
    }

    .pill.ok {
      border-color: rgba(16, 185, 129, 0.3); /* Emerald Green */
      background: rgba(16, 185, 129, 0.1);
      color: #34d399;
    }

    :root[data-rasa-theme="light"] .pill.ok {
      color: #059669;
    }

    .pill.warn {
      border-color: rgba(245, 158, 11, 0.3); /* Amber */
      background: rgba(245, 158, 11, 0.1);
      color: #fbbf24;
    }

    :root[data-rasa-theme="light"] .pill.warn {
      color: #d97706;
    }

    @media (max-width: 840px) {
      .topbar {
        align-items: flex-start;
        flex-direction: column;
        border-radius: 12px;
        padding: 16px;
        gap: 16px;
      }

      .status {
        justify-content: flex-start;
        width: 100%;
      }
    }
  `;
}
const Mn = Object.freeze([
  Z("reader", "Read", "Primary reader syntax tree", "reader", "source-tree"),
  Z("expand", "Expand", "Expanded syntax and macro boundary", "expand", "source-tree"),
  Z("analyzer", "Analyze", "Bindings, calls, and analyzer diagnostics", "analysis", "primary-lowering"),
  Z("ir", "IR", "Backend-independent executable tree", "ir", "primary-lowering"),
  Z("facts", "Facts", "Node-keyed sidecar evidence", "facts", "sidecar"),
  Z("checks", "Checks", "Type and boundary checks", "checks", "sidecar"),
  Z("plan", "Plan", "Lane decisions and rejected candidates", "plan", "plan"),
  Z("explain", "Explain", "Human-oriented compiler projection", "explain", "projection"),
  Z("eval", "Eval", "Runtime value observation", "eval", "runtime"),
  Z("wasm", "Wasm", "Component runtime product", "wasm", "runtime")
]), Un = Object.freeze(Mn.map((n) => n.id)), Qo = Object.freeze([
  ke("primary-tree", "Primary tree", "Reader, expanded syntax, or IR owns the program tree."),
  ke("ann-groups", "AnnGroups", "Grouped annotations keyed by stable subjects and spans."),
  ke("checks", "Type/check evidence", "Signals from shared check and fact boundaries."),
  ke("capability", "Capability admission", "Host authority requested and admitted before execution."),
  ke("plan", "Plan decisions", "Representation candidates, fallbacks, and lane evidence."),
  ke("trace", "Runtime trace", "Observed host/session events returned by the runtime product."),
  ke("diagnostics", "Diagnostics", "Structured blockers and conservative evidence.")
]);
function ar(n) {
  return Mn.find((e) => e.id === n) || Z(n, lr(n), "Phase artifact", n, "unknown");
}
function _n(n) {
  const e = Un.indexOf(n);
  return e === -1 ? Un.length : e;
}
function Zo() {
  return Mn.map((n) => ({
    id: n.id,
    label: n.label,
    status: "waiting",
    groups: 0,
    diagnostics: 0,
    tone: n.tone,
    role: n.role,
    description: n.description
  }));
}
function ea(n = {}) {
  const e = ar(n.id);
  return {
    ...e,
    ...n,
    label: n.label || e.label,
    tone: e.tone,
    role: e.role,
    description: e.description
  };
}
function ta(n = {}, e = [], t = null) {
  const i = /* @__PURE__ */ new Set([
    ...Object.keys(n.phases || {}),
    ...(e || []).flatMap((s) => s.phases || [])
  ]);
  return n.failedPhase && i.add(n.failedPhase), n.plan && i.add("plan"), n.eval && i.add("eval"), [...i].sort((s, r) => _n(s) - _n(r) || sa(s, r)).map((s) => {
    const r = n.phases?.[s] || {}, o = e.filter((a) => (a.phases || []).includes(s)).length;
    return ea({
      id: s,
      status: na(n, s, r),
      groups: o,
      diagnostics: ia(n, s, r),
      active: !!(t && (t.phases || []).includes(s))
    });
  });
}
function Rn(n = {}) {
  const e = new Set(n.phases || []), t = new Set((n.keys || []).map((i) => i.replace(/^:/, "")));
  return e.has("plan") ? "plan" : e.has("checks") || t.has("diagnostic") || t.has("type") ? "checks" : e.has("facts") || t.has("candidate") || t.has("scalar-type") ? "ann-groups" : e.has("eval") ? "trace" : e.has("reader") || e.has("expand") || e.has("analyzer") || e.has("ir") ? "primary-tree" : "ann-groups";
}
function Ge(n) {
  return Qo.find((e) => e.id === n) || ke(n, lr(n), "Projection artifact");
}
function Z(n, e, t, i, s) {
  return Object.freeze({ id: n, label: e, description: t, tone: i, role: s });
}
function ke(n, e, t) {
  return Object.freeze({ id: n, label: e, description: t });
}
function ia(n, e, t = {}) {
  const i = Array.isArray(t.diagnostics) ? t.diagnostics.length : 0, s = Array.isArray(n.diagnosticViews) ? n.diagnosticViews.filter((a) => a.phase === e).length : 0, r = e === "plan" && Array.isArray(n.plan?.diagnostics) ? n.plan.diagnostics.length : 0, o = e === "eval" && Array.isArray(n.eval?.diagnostics) ? n.eval.diagnostics.length : 0;
  return i + s + r + o;
}
function na(n, e, t = {}) {
  return n.failedPhase === e ? "failed" : t.status ? t.status : e === "plan" ? n.plan?.status || n.plan?.availability || "available" : e === "eval" ? n.eval?.status || n.eval?.availability || "available" : Object.prototype.hasOwnProperty.call(n.phases || {}, e) ? "available" : "waiting";
}
function sa(n, e) {
  return String(n || "").localeCompare(String(e || ""));
}
function lr(n) {
  return String(n || "unknown").split(/[-_]/).filter(Boolean).map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" ") || "Unknown";
}
function cr(n, e, t) {
  const i = String(n), s = zi(e), r = Math.max(s, zi(t));
  return {
    start: Fi(i, s),
    end: Fi(i, r)
  };
}
function Fi(n, e) {
  const t = String(n), i = zi(e);
  let s = 0, r = 0;
  for (const o of t) {
    const a = s + ra(o);
    if (a > i || (s = a, r += o.length, s === i))
      return r;
  }
  return t.length;
}
function zi(n) {
  const e = Number(n);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function ra(n) {
  const e = n.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const P = Object.freeze({
  classes: Object.freeze({
    phaseRoute: "rasa-phase-route",
    phaseNode: "rasa-phase-node",
    projectionLegend: "rasa-projection-legend",
    projectionChip: "rasa-projection-chip",
    projectionEmpty: "rasa-projection-empty",
    boundaryRoute: "rasa-boundary-route",
    boundaryStep: "rasa-boundary-step",
    visualSlot: "rasa-visual-slot"
  }),
  attrs: Object.freeze({
    phaseId: "data-phase-id",
    tone: "data-tone",
    status: "data-status",
    projectionLayer: "data-layer",
    boundaryTone: "data-tone",
    visualSlot: "data-visual-slot",
    slotStatus: "data-slot-status",
    slotCount: "data-slot-count",
    slotMeta: "data-slot-meta"
  })
});
function oa(n, e = {}) {
  const t = typeof n == "string" ? { id: n } : n || {};
  return {
    [P.attrs.visualSlot]: t.id || "",
    [P.attrs.slotStatus]: t.status || e.status || "",
    [P.attrs.slotCount]: String(t.count ?? e.count ?? 0),
    [P.attrs.slotMeta]: t.meta || e.meta || ""
  };
}
function aa(n = [], e, t = {}) {
  return n.find((i) => i.id === e) || { ...t, id: e };
}
function la(n, e = []) {
  if (!n?.querySelectorAll)
    return 0;
  let t = 0;
  for (const i of n.querySelectorAll(`[${P.attrs.visualSlot}]`)) {
    const s = i.getAttribute(P.attrs.visualSlot), r = oa(aa(e, s));
    for (const [o, a] of Object.entries(r))
      i.setAttribute(o, a);
    t += 1;
  }
  return t;
}
function ca(n = {}, { className: e = "" } = {}) {
  const t = n.id || "", i = !!n.active;
  return {
    id: t,
    label: n.label || t || "phase",
    meta: n.meta || da(n),
    title: n.description || n.label || t,
    className: [
      e,
      P.classes.phaseNode,
      i ? "active" : ""
    ].filter(Boolean).join(" "),
    attrs: {
      [P.attrs.phaseId]: t,
      [P.attrs.tone]: n.tone || t,
      [P.attrs.status]: n.status || "unknown",
      "data-phase-node": t,
      "data-active": String(i)
    }
  };
}
function ha(n, e = [], { interactive: t = !0 } = {}) {
  if (!n?.ownerDocument)
    return 0;
  n.textContent = "";
  for (const i of e) {
    const s = ca(i, { className: "phase-node" }), r = n.ownerDocument.createElement(t ? "button" : "span");
    t && (r.type = "button"), r.className = s.className, r.title = s.title;
    for (const [l, c] of Object.entries(s.attrs))
      r.setAttribute(l, c);
    const o = n.ownerDocument.createElement("span");
    o.className = "phase-name", o.textContent = s.label;
    const a = n.ownerDocument.createElement("span");
    a.className = "phase-meta", a.textContent = s.meta, r.append(o, a), n.append(r);
  }
  return e.length;
}
function da(n = {}) {
  const e = [];
  return n.groups && e.push(`${n.groups} group${n.groups === 1 ? "" : "s"}`), n.diagnostics && e.push(`${n.diagnostics} signal${n.diagnostics === 1 ? "" : "s"}`), e.join(" / ") || n.status || "waiting";
}
const ua = `
.rasa-visual-slot {
  min-width: 0;
  --rasa-slot-accent: var(--rasa-line);
}

.rasa-visual-slot[data-slot-status="ready"],
.rasa-visual-slot[data-slot-status="ok"] {
  --rasa-slot-accent: var(--rasa-green);
}

.rasa-visual-slot[data-slot-status="linked"] {
  --rasa-slot-accent: var(--rasa-blue);
}

.rasa-visual-slot[data-slot-status="pending"],
.rasa-visual-slot[data-slot-status="waiting"],
.rasa-visual-slot[data-slot-status="empty"] {
  --rasa-slot-accent: var(--rasa-dim);
}

.rasa-visual-slot[data-slot-status="warn"] {
  --rasa-slot-accent: var(--rasa-gold);
}

.rasa-visual-slot[data-slot-status="blocked"],
.rasa-visual-slot[data-slot-status="failed"] {
  --rasa-slot-accent: var(--rasa-red);
}

.rasa-visual-slot[data-slot-status="warn"],
.rasa-visual-slot[data-slot-status="blocked"] {
  outline: 1px solid color-mix(in srgb, var(--rasa-slot-accent) 42%, transparent);
  outline-offset: -1px;
}

.rasa-phase-route {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 0;
}

.rasa-phase-node {
  min-width: 0;
  display: grid;
  gap: 2px;
  padding: 8px 9px;
  border: 1px solid var(--rasa-line);
  border-right: 0;
  background: color-mix(in srgb, var(--rasa-code-bg) 78%, transparent);
  opacity: 0.58;
}

.rasa-phase-node:first-child {
  border-radius: 999px 0 0 999px;
}

.rasa-phase-node:last-child {
  border-radius: 0 999px 999px 0;
  border-right: 1px solid var(--rasa-line);
}

.rasa-phase-node.active {
  opacity: 1;
}

.rasa-phase-node[data-tone="reader"],
.rasa-phase-node[data-tone="expand"] {
  border-color: color-mix(in srgb, var(--rasa-gold) 42%, var(--rasa-line));
}

.rasa-phase-node[data-tone="analysis"],
.rasa-phase-node[data-tone="ir"] {
  border-color: color-mix(in srgb, var(--rasa-blue) 38%, var(--rasa-line));
}

.rasa-phase-node[data-tone="facts"],
.rasa-phase-node[data-tone="checks"] {
  border-color: color-mix(in srgb, var(--rasa-green) 38%, var(--rasa-line));
}

.rasa-phase-node[data-tone="plan"],
.rasa-phase-node[data-tone="explain"] {
  border-color: color-mix(in srgb, var(--rasa-violet) 42%, var(--rasa-line));
}

.rasa-phase-node[data-tone="eval"],
.rasa-phase-node[data-tone="wasm"] {
  border-color: color-mix(in srgb, var(--rasa-red) 34%, var(--rasa-line));
}

.rasa-phase-node strong,
.rasa-phase-node em,
.rasa-projection-chip strong,
.rasa-projection-chip em,
.rasa-boundary-step strong,
.rasa-boundary-step em {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rasa-phase-node strong {
  color: var(--rasa-text);
  font-size: 11px;
  font-weight: 850;
}

.rasa-phase-node em {
  color: var(--rasa-muted);
  font-size: 9px;
  font-style: normal;
  font-weight: 780;
  text-transform: uppercase;
}

.rasa-projection-legend {
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.rasa-projection-chip,
.rasa-projection-empty {
  min-width: 0;
  display: inline-grid;
  gap: 2px;
  padding: 7px 9px;
  border: 1px solid var(--rasa-line);
  border-radius: 999px;
  background: color-mix(in srgb, var(--rasa-panel-soft) 88%, transparent);
}

.rasa-projection-chip strong {
  color: var(--rasa-text);
  font-size: 11px;
  font-weight: 820;
}

.rasa-projection-chip em,
.rasa-projection-empty {
  color: var(--rasa-muted);
  font-size: 10px;
  font-style: normal;
  font-weight: 760;
}

.rasa-boundary-route {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
}

.rasa-boundary-step {
  min-width: 0;
  position: relative;
  display: grid;
  gap: 4px;
  padding: 12px;
  border: 1px solid var(--rasa-line);
  border-right: 0;
}

.rasa-boundary-step:first-child {
  border-radius: 8px 0 0 8px;
}

.rasa-boundary-step:last-child {
  border-radius: 0 8px 8px 0;
  border-right: 1px solid var(--rasa-line);
}

.rasa-boundary-step:not(:last-child)::after {
  position: absolute;
  right: -11px;
  top: 50%;
  z-index: 1;
  padding: 0 4px;
  background: var(--rasa-code-bg);
  color: var(--rasa-blue);
  content: "→";
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
  transform: translateY(-50%);
}

.rasa-boundary-step[data-tone="source"] {
  border-color: color-mix(in srgb, var(--rasa-gold) 56%, var(--rasa-line));
}

.rasa-boundary-step[data-tone="admit"] {
  border-color: color-mix(in srgb, var(--rasa-green) 48%, var(--rasa-line));
}

.rasa-boundary-step[data-tone="host"] {
  border-color: color-mix(in srgb, var(--rasa-blue) 50%, var(--rasa-line));
}

.rasa-boundary-step[data-tone="return"] {
  border-color: color-mix(in srgb, var(--rasa-violet) 50%, var(--rasa-line));
}

.rasa-boundary-step span {
  color: var(--rasa-gold);
  font-size: 10px;
  font-weight: 850;
  text-transform: uppercase;
}

.rasa-boundary-step strong {
  display: block;
  color: var(--rasa-text);
  font-size: 13px;
  line-height: 1.25;
}

.rasa-boundary-step em {
  color: var(--rasa-muted);
  font-size: 11px;
  font-style: normal;
  font-weight: 720;
}
`;
function Yn(n, e, t = {}) {
  const i = t.selectedGroup || null, s = ga(n), r = i && s.find((o) => o.id === i) || null;
  return {
    status: fa(n),
    result: pa(n),
    groups: s,
    activeGroup: r,
    phases: ta(n, s, r),
    plan: ba(n),
    diagnostics: xa(n, e),
    projections: Ra(s, n),
    sourceHighlights: ma(n, { selectedGroup: i })
  };
}
function fa(n = {}) {
  const e = n.failedPhase;
  return n.status === "ok" ? "ok" : e ? `failed in :${e}` : n.status;
}
function pa(n = {}) {
  const e = n.eval || {};
  return {
    status: e.status || n.status || "unknown",
    value: e.value ?? "nil",
    observedType: e.observedType || "unknown",
    provenance: e.provenance || "runtime-observed"
  };
}
function ga(n = {}) {
  const e = n.evidence?.groups || [], t = ka(e.filter(Sa), n.source).slice(0, 8).map(Ma).map(ts);
  return t.length ? t : Ta(n).map(ts);
}
function ma(n = {}, e = {}) {
  const t = new Set([e.selectedGroup].filter(Boolean));
  return t.size ? (n.evidence?.indexes?.spans || []).filter((i) => (i.groups || []).some((s) => t.has(s))).map((i) => ({
    group: (i.groups || []).find((s) => t.has(s)) || "",
    start: i.start,
    end: i.end,
    pinned: !!(e.selectedGroup && i.groups.includes(e.selectedGroup))
  })) : [];
}
function ba(n = {}) {
  const e = n.plan || {};
  return {
    status: e.status || e.availability || "unavailable",
    lanes: e.lanes || [],
    candidates: e.candidates || []
  };
}
function xa(n = {}, e = "") {
  if (Array.isArray(n.diagnosticViews) && n.diagnosticViews.length)
    return Qn(
      Jn(n.diagnosticViews.map((r) => ya(r)))
    ).slice(0, 3);
  const t = Object.entries(n.phases || {}).flatMap(
    ([r, o]) => (o.diagnostics || []).map((a) => ki(r, a, e))
  ), i = (n.plan?.diagnostics || []).map(
    (r) => ki("plan", r, e)
  ), s = (n.eval?.diagnostics || []).map(
    (r) => ki("eval", r, e)
  );
  return Qn(
    Jn([...t, ...i, ...s])
  ).slice(0, 3);
}
function ya(n) {
  const e = n.phase || "compiler", t = n.kind || "diagnostic", i = !!n.recoverable;
  return {
    phase: e,
    kind: t,
    title: hr(e, t, i),
    status: dr(e, i),
    recoverable: i,
    message: n.message || "",
    span: n.span || null,
    sourceExcerpt: n.sourceExcerpt || null,
    excerpt: va(n.sourceExcerpt) || "",
    location: fr(n.span || null),
    expected: n.expected || "",
    actual: n.actual || "",
    subject: "",
    provenance: n.code || `:${e} / :${t}`,
    impact: n.impact || ur(e, i)
  };
}
function ki(n, e, t) {
  const i = e.span || null, s = e.evidence || {}, r = e.kind || "diagnostic", o = !!e.recoverable;
  return {
    phase: n,
    kind: r,
    title: hr(n, r, o),
    status: dr(n, o),
    recoverable: o,
    message: e.message || "",
    span: i,
    sourceExcerpt: null,
    excerpt: i ? Pa(t, i) : "",
    location: fr(i),
    expected: s.expected || "",
    actual: s.actual || "",
    subject: s.subject || "",
    provenance: `:${n} / :${r}`,
    impact: ur(n, o)
  };
}
function hr(n, e, t) {
  return t ? {
    "fact-uncertainty": "Evidence, not a checked guarantee",
    "memory-profile-constraint": "Representation constraint rejected",
    "insufficient-backend-evidence": "Backend plan kept conservative"
  }[e] || `${Xn(n)} note` : n === "eval" ? "Evaluation blocker" : `${Xn(n)} blocker`;
}
function dr(n, e) {
  return e ? n === "plan" ? "conservative plan" : "recoverable" : n === "eval" ? "blocks evaluation" : "blocks phase";
}
function ur(n, e) {
  return e && n === "plan" ? "Planning continues, but later views should treat this as evidence rather than a committed optimization." : e ? "Later phases can continue, but claims should stay conservative." : n === "eval" ? "Evaluation is blocked until this diagnostic is resolved." : `:${n} is blocked until this diagnostic is resolved.`;
}
function fr(n) {
  return n ? `Source bytes ${n.start}..${n.end}.` : "Whole artifact; no single source span was reported.";
}
function va(n) {
  const e = n?.lines || [];
  return e.length ? e.map((t) => t.text || "").join(`
`) : "";
}
function Xn(n) {
  return String(n || "compiler").split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function Jn(n) {
  const e = /* @__PURE__ */ new Set();
  return n.filter((t) => {
    const i = wa(t);
    return e.has(i) ? !1 : (e.add(i), !0);
  });
}
function Qn(n) {
  return [...n].sort(
    (e, t) => Number(e.recoverable) - Number(t.recoverable)
  );
}
function wa(n) {
  const e = n.span ? `${n.span.source}:${n.span.start}:${n.span.end}` : "";
  return [
    n.phase,
    n.kind,
    n.recoverable,
    n.message,
    e,
    n.subject,
    n.expected,
    n.actual
  ].join("\0");
}
function Sa(n = {}) {
  return pr(n) || (n.phases || []).includes("plan") || (n.provenances || []).includes("hinted") || (n.keys || []).some(
    (e) => ["scalar-type", "collection-kind", "known-keys", "host-free"].includes(e)
  );
}
function pr(n = {}) {
  return (n.keys || []).includes("diagnostic");
}
function ka(n, e = {}) {
  const t = Number(e.bytes);
  return [...n].sort(
    (i, s) => Ca(i, s, t) || Zn(i) - Zn(s) || Aa(i.subject, s.subject)
  );
}
function Zn(n = {}) {
  return pr(n) ? 0 : (n.provenances || []).includes("hinted") ? 1 : (n.phases || []).includes("plan") ? 2 : (n.keys || []).some((e) => ["scalar-type", "collection-kind"].includes(e)) ? 3 : 4;
}
function Ca(n, e, t) {
  const i = es(n, t), s = es(e, t);
  return i.kind - s.kind || i.start - s.start || i.end - s.end;
}
function es(n = {}, e) {
  const t = n.span || null;
  if (!t)
    return { kind: 2, start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
  const i = Number.isFinite(Number(t.start)) ? Number(t.start) : Number.MAX_SAFE_INTEGER, s = Number.isFinite(Number(t.end)) ? Number(t.end) : Number.MAX_SAFE_INTEGER;
  return { kind: i === 0 && Number.isFinite(e) && s >= e ? 1 : 0, start: i, end: s };
}
function Aa(n, e) {
  return String(n || "").localeCompare(String(e || ""));
}
function Ma(n) {
  const e = La(n);
  return {
    ...n,
    subjectId: n.subject || "",
    displaySubject: e || n.subject || ""
  };
}
function ts(n) {
  const e = Ge(Rn(n));
  return {
    ...n,
    projectionLayer: e.id,
    projectionLabel: e.label,
    projectionDescription: e.description
  };
}
function Ra(n = [], e = {}) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const s = Ge(i.projectionLayer || Rn(i)), r = t.get(s.id) || { ...s, count: 0 };
    r.count += 1, t.set(s.id, r);
  }
  if (e.plan) {
    const i = Ge("plan"), s = t.get(i.id) || { ...i, count: 0 };
    s.count += Array.isArray(e.plan.candidates) ? e.plan.candidates.length : 1, t.set(i.id, s);
  }
  if (e.eval) {
    const i = Ge("trace"), s = t.get(i.id) || { ...i, count: 0 };
    s.count += 1, t.set(i.id, s);
  }
  return [...t.values()];
}
function Ta(n = {}) {
  return [
    ...Ea(n.plan || {}),
    ...Oa(n),
    ...Da(n)
  ].slice(0, 8);
}
function Ea(n = {}) {
  const e = [], t = Array.isArray(n.candidates) ? n.candidates : [], i = Array.isArray(n.lanes) ? n.lanes : [];
  (t.length || i.length || n.status || n.availability) && e.push({
    id: "projection:plan:summary",
    subject: "plan",
    subjectId: "",
    displaySubject: "Plan decisions",
    phases: ["plan"],
    domains: ["representation"],
    provenances: ["rasa-plan"],
    span: null,
    keys: [":candidates", ":lanes", ":status"],
    rendered: Xt({
      status: n.status || n.availability || "available",
      candidates: t.length,
      lanes: i.length
    }),
    entries: [
      fe("status", n.status || n.availability || "available", "plan"),
      fe("candidates", t.length, "plan"),
      fe("lanes", i.length, "plan")
    ]
  });
  for (const [s, r] of t.slice(0, 4).entries())
    e.push({
      id: `projection:plan:candidate:${s}`,
      subject: r.candidate || r.lane || `candidate-${s + 1}`,
      subjectId: `candidate#${s + 1}`,
      displaySubject: r.candidate || r.strategy || `Plan candidate ${s + 1}`,
      phases: ["plan"],
      domains: ["representation"],
      provenances: ["rasa-plan"],
      span: r.span || null,
      keys: Object.keys(r).slice(0, 5),
      rendered: Xt(r),
      entries: Object.entries(r).slice(0, 4).map(([o, a]) => fe(o, a, "plan"))
    });
  return e;
}
function Oa(n = {}) {
  return [
    ...Array.isArray(n.diagnosticViews) ? n.diagnosticViews : [],
    ...Object.entries(n.phases || {}).flatMap(
      ([t, i]) => (i.diagnostics || []).map((s) => ({ ...s, phase: t }))
    ),
    ...(n.plan?.diagnostics || []).map((t) => ({ ...t, phase: "plan" })),
    ...(n.eval?.diagnostics || []).map((t) => ({ ...t, phase: "eval" }))
  ].slice(0, 3).map((t, i) => ({
    id: `projection:diagnostic:${i}`,
    subject: t.kind || "diagnostic",
    subjectId: "",
    displaySubject: t.kind || "Diagnostic",
    phases: [t.phase || "checks"],
    domains: ["diagnostics"],
    provenances: [t.code || "diagnostic"],
    span: t.span || null,
    keys: [":message", ":recoverable"],
    rendered: Xt(t),
    entries: [
      fe("message", t.message || "", t.phase || "checks"),
      fe("recoverable", !!t.recoverable, t.phase || "checks")
    ]
  }));
}
function Da(n = {}) {
  if (!n.eval && !n.status) return [];
  const e = n.eval || {};
  return [
    {
      id: "projection:eval:summary",
      subject: "eval",
      subjectId: "",
      displaySubject: "Runtime observation",
      phases: ["eval"],
      domains: ["runtime"],
      provenances: [e.provenance || "runtime-observed"],
      span: null,
      keys: [":value", ":status", ":observed-type"],
      rendered: Xt({
        status: e.status || n.status || "unknown",
        value: e.value ?? "nil",
        observedType: e.observedType || "unknown"
      }),
      entries: [
        fe("status", e.status || n.status || "unknown", "eval"),
        fe("value", e.value ?? "nil", "eval"),
        fe("observed-type", e.observedType || "unknown", "eval")
      ]
    }
  ];
}
function fe(n, e, t) {
  return {
    key: n.startsWith(":") ? n : `:${n}`,
    value: Vi(e),
    phase: t,
    provenance: t
  };
}
function Vi(n) {
  return n == null ? "nil" : typeof n == "string" ? n : typeof n == "number" || typeof n == "boolean" ? String(n) : Array.isArray(n) ? `[${n.length} item${n.length === 1 ? "" : "s"}]` : typeof n == "object" ? `{${Object.keys(n).length} keys}` : String(n);
}
function Xt(n) {
  return !n || typeof n != "object" ? Vi(n) : `{
${Object.entries(n).map(([e, t]) => `  :${e} ${Vi(t)}`).join(`
`)}
}`;
}
function La(n = {}) {
  const e = n.entries || [], t = (a) => Ba(e.find((l) => l.key === a)?.value), i = t("callee-symbol");
  if (i)
    return `call ${i}`;
  const s = t("collection-kind");
  if (s)
    return `${s} literal`;
  const r = t("literal-kind"), o = t("scalar-type");
  return r && o ? `${o} ${r}` : r ? `${r} literal` : o ? `${o} hint` : t("host-free") ? "source plan" : "";
}
function Ba(n) {
  const e = String(n || "").trim();
  return e ? e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : e.startsWith(":") ? e.slice(1) : e : "";
}
function Pa(n, e, t = 28) {
  const i = String(n), { start: s, end: r } = cr(i, e.start, e.end), o = Math.max(0, s - t), a = Math.min(i.length, r + t), l = o > 0 ? "..." : "", c = a < i.length ? "..." : "";
  return `${l}${i.slice(o, a)}${c}`;
}
function Ia(n) {
  return Jt(n, 0);
}
function Jt(n, e) {
  return n == null ? "nil" : Array.isArray(n) ? $a(n, e) : typeof n == "object" ? Na(n, e) : typeof n == "string" ? JSON.stringify(n) : typeof n == "boolean" ? n ? "true" : "false" : String(n);
}
function Na(n, e) {
  const t = Object.entries(n);
  if (!t.length)
    return "{}";
  const i = Qt(e + 1), s = Qt(e);
  return `{
${t.map(
    ([o, a]) => `${i}:${ja(o)} ${Jt(a, e + 1)}`
  ).join(`
`)}
${s}}`;
}
function $a(n, e) {
  if (!n.length)
    return "[]";
  if (n.every(Ha))
    return `[${n.map((s) => Jt(s, e)).join(" ")}]`;
  const t = Qt(e + 1), i = Qt(e);
  return `[
${n.map((s) => `${t}${Jt(s, e + 1)}`).join(`
`)}
${i}]`;
}
function Ha(n) {
  return n === null || typeof n != "object";
}
function ja(n) {
  return String(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function Qt(n) {
  return "  ".repeat(n);
}
const Wa = Object.freeze([
  de("source-editor", "Source editor", "CodeMirror", "Rasa forms and source spans", 10),
  de("phase-route", "Compiler route", "PhaseRoute", "Reader through runtime phase status", 20),
  de("projection-legend", "Projection legend", "ProjectionLegend", "Grouped phase-neutral projection layers", 30),
  de("boundary-route", "Host boundary", "BoundaryRoute", "Admitted capability request and returned value", 40),
  de("graph-stage", "Graph stage", "Stage", "Model projection frame and run context", 50),
  de("graph-canvas", "Graph canvas", "ReactFlow", "Structured graph records returned by Rasa", 60),
  de("value-inspector", "Value inspector", "DataView", "Foldable Rasa data and returned values", 70),
  de("transcript", "Session transcript", "Transcript", "Append-only session input and returned data", 80),
  de("diagnostics", "Diagnostics", "DiagnosticCards", "Structured blockers and conservative evidence", 90)
]);
function Fa({
  phases: n = [],
  activePhaseIds: e = [],
  metaById: t = {},
  statusById: i = {}
} = {}) {
  const s = new Set(e), r = new Map(n.map((o) => [o.id, o]));
  return Zo().map((o) => {
    const a = r.get(o.id) || {}, l = a.status || i[o.id] || o.status;
    return {
      ...o,
      ...a,
      status: l,
      active: !!(a.active || s.has(o.id)),
      meta: a.meta || t[o.id] || rl(l, a)
    };
  });
}
function za(n = {}) {
  return Wa.map((e) => {
    const t = n[e.id] || {}, i = Number(t.count || 0), s = !!(t.present || i > 0);
    return {
      ...e,
      present: s,
      status: t.status || (s ? "ready" : "waiting"),
      count: i,
      meta: t.meta || ""
    };
  });
}
function Va(n = []) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const i = Ge(t.id || t.projectionLayer || t.layer), s = e.get(i.id) || { ...i, count: 0 };
    s.count += Number(t.count || 1), e.set(i.id, s);
  }
  return [...e.values()];
}
function qa(n = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const s = Ge(n.projectionLayer || Rn(n)), r = n.id || "";
  return {
    id: r,
    selected: !!(r && r === e),
    subject: n.displaySubject || n.subject || "evidence",
    subjectId: n.subjectId || "",
    spanLabel: gr(n.span),
    projectionLayer: s.id,
    projectionLabel: n.projectionLabel || s.label,
    projectionDescription: n.projectionDescription || s.description || "Rasa-owned evidence",
    phases: [...n.phases || []],
    domains: [...n.domains || []],
    provenances: [...n.provenances || []],
    tags: Ua(n, i),
    entries: _a(n, t)
  };
}
function Ka(n = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const r = (Array.isArray(n.groups) ? n.groups : []).map(
    (a) => qa(a, { selectedId: e, entryLimit: t, tagLimit: i })
  );
  return {
    cards: r,
    count: r.length,
    empty: r.length === 0,
    emptyMessage: "No inspection evidence for this source. Artifact data still has the raw report.",
    summary: r.length ? `${r.length} inspection group${r.length === 1 ? "" : "s"}; click a card to pin source evidence` : "0 inspection groups"
  };
}
function Ga(n = []) {
  return n.find((e) => gl(e.span))?.id || n.find((e) => e?.id)?.id || "";
}
function Ua(n = {}, e = 5) {
  return [...n.keys || [], ...n.provenances || []].slice(0, e).map(pi);
}
function _a(n = {}, e = 3) {
  return (n.entries || []).slice(0, e).map((t = {}) => {
    const i = pi(t.key), s = String(t.value ?? "");
    return {
      key: i,
      value: s,
      phase: t.phase || "",
      provenance: t.provenance || "",
      text: `${i} ${s}`.trim()
    };
  });
}
function gr(n) {
  return n ? `bytes ${n.start}..${n.end}` : "no source span";
}
function Ya({
  anchors: n = {},
  activeGroup: e = null
} = {}) {
  if (!n.evidence || !n.phase || !n.focus)
    return { segments: [], points: [] };
  const t = bl(e), i = !n.source, s = [
    Tt(
      "evidence-phase",
      n.evidence,
      n.phase,
      `Evidence to ${t}`,
      "This selected annotation group is reported under this compiler phase.",
      { requiresIntent: i }
    )
  ];
  return n.source ? s.push(
    Tt(
      "phase-source",
      n.phase,
      n.source,
      `${t} to source`,
      "This evidence includes a Rasa source span, so the editor can highlight the reported range."
    ),
    Tt(
      "source-focus",
      n.source,
      n.focus,
      "Source to focus",
      "The pinned source span expands into the focused evidence and artifact details."
    )
  ) : s.push(
    Tt(
      "phase-focus",
      n.phase,
      n.focus,
      `${t} to focus`,
      "This phase-level evidence has no source span, so the focus panel carries the detail.",
      { requiresIntent: i }
    )
  ), {
    segments: s,
    points: Object.entries(n).filter(([, r]) => !!r).map(([r, o]) => ({ kind: r, ...o }))
  };
}
function Tt(n, e, t, i, s, r = {}) {
  return {
    detail: s,
    d: ml(e, t),
    kind: n,
    mid: wl(e, t),
    requiresIntent: !!r.requiresIntent,
    title: i
  };
}
function Xa(n = {}) {
  const e = n.result || {}, t = n.plan || {}, i = Array.isArray(t.candidates) ? t.candidates : [];
  return {
    result: {
      status: e.status || "unknown",
      value: e.value ?? "nil"
    },
    metrics: [
      {
        label: "Observed",
        value: e.observedType || "unknown",
        meta: e.provenance || ""
      },
      {
        label: "Plan",
        value: t.status || "unavailable",
        meta: `${i.length} candidate${i.length === 1 ? "" : "s"}`
      }
    ]
  };
}
function Ja(n = {}, { laneLimit: e = 3, candidateLimit: t = 4 } = {}) {
  const i = Array.isArray(n.lanes) ? n.lanes : [], s = Array.isArray(n.candidates) ? n.candidates : [], r = [
    ...i.slice(0, e).map((o = {}) => ({
      label: o.lane || "lane",
      value: [o.memoryPath, o.status].filter(Boolean).join(" / ") || "unknown",
      kind: "lane"
    })),
    ...s.slice(0, t).map((o = {}) => ({
      label: o.candidate || o.lane || o.strategy || "candidate",
      value: o.reason || o.status || o.availability || "unknown",
      kind: "candidate"
    }))
  ];
  return r.length ? r : [{ label: "plan", value: "unavailable for this source", kind: "empty" }];
}
function Qa(n = null) {
  return {
    phase: (n?.phases || []).join(" "),
    domain: (n?.domains || []).join(" "),
    provenance: (n?.provenances || []).join(" "),
    title: xl(n),
    status: n ? gr(n.span) : "click evidence",
    tags: yl(n),
    rendered: n?.rendered || "Click an evidence group to inspect Rasa-owned annotations and source spans."
  };
}
function Za(n = {}) {
  const e = Array.isArray(n.diagnostics) ? n.diagnostics : [], t = [
    {
      kind: "focus",
      card: Qa(n.activeGroup)
    },
    {
      kind: "plan",
      card: el(n.plan)
    }
  ];
  return e.length && t.push({
    kind: "diagnostics",
    panel: tl(e)
  }), t.push({
    kind: "artifact",
    title: "Artifact data",
    lazy: !0
  }), {
    sections: t,
    diagnosticsCount: e.length
  };
}
function el(n = {}) {
  return {
    phase: "plan",
    title: "Plan",
    status: n?.status || "unavailable",
    rows: Ja(n)
  };
}
function tl(n = []) {
  return {
    title: "Diagnostics",
    note: "Compiler signals that change what the browser inspection can safely claim.",
    status: `${n.length} signal${n.length === 1 ? "" : "s"}`,
    cards: n.map(il)
  };
}
function il(n = {}) {
  return {
    phase: n.phase || "",
    status: vl(n.recoverable),
    title: n.title || "",
    label: n.status || "",
    message: n.message || "",
    details: [
      { label: "Impact", field: "impact", value: n.impact || "" },
      { label: "Scope", field: "location", value: n.location || "" },
      { label: "Evidence", field: "provenance", value: n.provenance || "" }
    ],
    sourceExcerpt: n.sourceExcerpt || null,
    excerpt: n.excerpt || ""
  };
}
function nl(n, e = []) {
  const t = String(n?.text || ""), i = Zt(n?.start, 0), s = Zt(n?.end, i + Sl(t)), r = e.map((c) => al(t, i, s, c)).filter(Boolean), o = /* @__PURE__ */ new Set([0, t.length]);
  for (const c of r)
    o.add(c.start), o.add(c.end);
  const a = [...o].sort((c, h) => c - h), l = [];
  for (let c = 0; c < a.length; c += 1) {
    const h = a[c];
    ol(l, h, r);
    const d = a[c + 1];
    if (d === void 0 || h >= d)
      continue;
    const u = cl(r, h, d);
    l.push({
      text: t.slice(h, d),
      marker: u ? u.publicMarker : null,
      zero: !1
    });
  }
  return l;
}
function Et(n = {}) {
  const e = Array.isArray(n.phases) ? n.phases : [];
  Array.isArray(n.groups) && n.groups;
  const t = Array.isArray(n.diagnostics) ? n.diagnostics : [], i = Array.isArray(n.projections) ? n.projections : [], s = Array.isArray(n.sourceHighlights) ? n.sourceHighlights : [], r = !!(n.result && n.result.status), o = !!n.activeGroup, a = Fa({
    phases: e,
    activePhaseIds: pl(e)
  }), l = Va(i);
  return {
    slots: za({
      "source-editor": {
        present: !0,
        status: s.length ? "linked" : "ready",
        count: s.length,
        meta: s.length ? `${s.length} span${s.length === 1 ? "" : "s"}` : "editable"
      },
      "phase-route": {
        present: !0,
        count: e.length,
        meta: e.length ? `${fl(a)} active` : "waiting"
      },
      "projection-legend": {
        count: l.reduce((c, h) => c + h.count, 0)
      },
      "value-inspector": {
        present: r || o,
        status: r ? n.result.status || "ready" : "waiting",
        meta: o ? "pinned evidence" : r ? "result" : ""
      },
      diagnostics: {
        count: t.length,
        status: t.some((c) => c.recoverable === !1) ? "blocked" : t.length ? "warn" : "ready"
      }
    }),
    phaseRoute: a,
    projectionLegend: l
  };
}
function sl({ examples: n = [] } = {}) {
  return {
    header: {
      title: "Rasa Systems Workbench",
      subtitle: "Compiler truth, projected for humans.",
      nav: [
        { label: "Inspect", href: "./", active: !0 },
        { label: "Model", href: "../model-architecture-explorer/" },
        { label: "Conformance", href: "../conformance-report/" },
        { label: "Roadmap", href: "../roadmap/" }
      ],
      statusCells: [
        { role: "runtime", label: "Runtime", value: "loading", state: "warn" },
        { role: "artifact", label: "Artifact", value: "source artifact" },
        { role: "syntax", label: "Syntax", value: "pending", state: "warn" }
      ]
    },
    phasePanel: {
      title: "Primary trees live in phase columns. Facts, checks, traces, and plans are node-keyed sidecars. This UI is a projection."
    },
    proofTiles: [
      {
        slotId: "projection-legend",
        phaseIds: ["reader", "analyzer", "facts", "plan"],
        label: "Compiler evidence",
        meta: "reader -> facts -> plan",
        text: "Every card is projected from reader, analysis, facts, diagnostics, plan, or runtime artifacts."
      },
      {
        slotId: "source-editor",
        phaseIds: ["reader", "eval"],
        label: "Portable data power",
        meta: "maps · seqs · data",
        text: "Examples use ordinary Rasa data structures, lazy sequence views, metadata, and higher-order transforms."
      },
      {
        slotId: "diagnostics",
        phaseIds: ["checks", "plan"],
        label: "Honest limits",
        meta: "checks stay visible",
        text: "Diagnostics stay visible when a form reaches a missing or conservative surface; the UI does not fake success."
      }
    ],
    scenarioPanel: {
      label: "Scenario atlas",
      subtitle: "Load or append examples that pressure different parts of Rasa.",
      count: n.length
    },
    sourceStage: {
      slotId: "source-editor",
      label: "Rasa source",
      subtitle: "Centerstage source. Run it explicitly; typing and hover do not compute.",
      chips: [
        { label: "syntax", phaseId: "reader", slotId: "source-editor" },
        { label: "facts", phaseId: "facts", slotId: "projection-legend" },
        { label: "plan", phaseId: "plan", slotId: "value-inspector" },
        { label: "eval", phaseId: "eval", slotId: "value-inspector" }
      ],
      inputLabel: "Rasa input",
      inputSubtitle: "Run the complete source",
      runHint: "Primary+Enter runs",
      footnote: "Examples load or append explicitly; typing never computes."
    },
    projectionPanel: {
      slotId: "value-inspector",
      label: "What Rasa learned",
      subtitle: "not run yet",
      rule: "projection, not semantics",
      ruleHelp: "Rendered UI is a projection over Rasa-owned artifacts, not language authority.",
      emptySummary: "run to inspect evidence"
    },
    suitePreviews: [
      {
        id: "model",
        slotId: "boundary-route",
        className: "model-preview",
        label: "Host boundary demo",
        title: "Model explorer shows provider handles",
        steps: ["form", "import", "admit", "provider", "handle", "value"]
      },
      {
        id: "conformance",
        slotId: "value-inspector",
        className: "conformance-preview",
        label: "Conformance map",
        title: "Compatibility breadth stays separately inspectable",
        coverage: [
          { label: "Collections", value: "92%" },
          { label: "Sequences", value: "89%" },
          { label: "Maps / Sets", value: "94%" },
          { label: "Numbers", value: "96%" },
          { label: "Strings", value: "91%" },
          { label: "Vars", value: "88%" }
        ]
      }
    ]
  };
}
function rl(n, e = {}) {
  return e.groups ? `${e.groups} group${e.groups === 1 ? "" : "s"}` : e.diagnostics ? `${e.diagnostics} diagnostic${e.diagnostics === 1 ? "" : "s"}` : n || "waiting";
}
function ol(n, e, t) {
  for (const i of t)
    !i.zero || i.start !== e || n.push({
      text: "",
      marker: i.publicMarker,
      zero: !0
    });
}
function al(n, e, t, i) {
  const s = Zt(i?.start, 0), r = Zt(i?.end, s), o = Math.max(s, e), a = Math.min(Math.max(r, s), t);
  if (o > a || o === a && (o < e || o > t))
    return null;
  const l = o - e, c = a - e, h = l === c ? ll(n, l) : cr(n, l, c);
  return {
    start: h.start,
    end: h.end,
    zero: h.start === h.end,
    priority: dl(i, h),
    publicMarker: {
      kind: i?.kind || "primary",
      severity: i?.severity || "warning",
      label: i?.label || ""
    }
  };
}
function ll(n, e) {
  const t = Fi(n, e);
  return { start: t, end: t };
}
function cl(n, e, t) {
  return n.filter((i) => !i.zero && i.start <= e && i.end >= t).sort(hl)[0];
}
function hl(n, e) {
  return n.priority.kind - e.priority.kind || n.priority.severity - e.priority.severity || n.priority.width - e.priority.width || n.priority.label.localeCompare(e.priority.label);
}
function dl(n, e) {
  return {
    kind: n?.kind === "primary" ? 0 : 1,
    severity: ul(n?.severity),
    width: e.end - e.start,
    label: n?.label || ""
  };
}
function ul(n) {
  return n === "error" ? 0 : n === "warning" ? 1 : 2;
}
function fl(n = []) {
  return n.filter((e) => e.active).length;
}
function pl(n = []) {
  return n.filter(
    (e = {}) => e.active || e.status === "ok" || e.status === "failed" || e.status === "warn" || Number(e.groups || 0) > 0 || Number(e.diagnostics || 0) > 0
  ).map((e) => e.id).filter(Boolean);
}
function gl(n) {
  return n && Number.isFinite(Number(n.start)) && Number.isFinite(Number(n.end));
}
function de(n, e, t, i, s) {
  return Object.freeze({ id: n, label: e, component: t, description: i, priority: s });
}
function ml(n, e) {
  const t = Math.max(48, Math.abs(e.x - n.x) * 0.42);
  return `M ${n.x} ${n.y} C ${n.x + t} ${n.y}, ${e.x - t} ${e.y}, ${e.x} ${e.y}`;
}
function bl(n) {
  const e = n?.phases?.[0] || "";
  return e ? ar(e).label : "phase";
}
function xl(n) {
  if (!n)
    return "No evidence selected";
  const e = (n.keys || []).slice(0, 3).map(pi).join(" "), t = n.displaySubject && n.subjectId ? `${n.displaySubject} · ${n.subjectId}` : n.displaySubject || n.subject || "";
  return e ? `${t} ${e}` : t;
}
function yl(n) {
  return [
    ...n?.phases || [],
    ...n?.domains || [],
    ...n?.provenances || []
  ].map(pi);
}
function vl(n) {
  return n === !0 ? "recoverable" : n === !1 ? "blocking" : "unknown";
}
function wl(n, e) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function pi(n) {
  const e = String(n || "").trim();
  return e ? e.startsWith(":") ? e : `:${e}` : "";
}
function Zt(n, e) {
  const t = Number(n);
  return Number.isFinite(t) ? t : e;
}
function Sl(n) {
  return new TextEncoder().encode(String(n)).length;
}
let qi = [], mr = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++)
    (e % 2 ? mr : qi).push(t = t + n[e]);
})();
function kl(n) {
  if (n < 768) return !1;
  for (let e = 0, t = qi.length; ; ) {
    let i = e + t >> 1;
    if (n < qi[i]) t = i;
    else if (n >= mr[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function is(n) {
  return n >= 127462 && n <= 127487;
}
const ns = 8205;
function Cl(n, e, t = !0, i = !0) {
  return (t ? br : Al)(n, e, i);
}
function br(n, e, t) {
  if (e == n.length) return e;
  e && xr(n.charCodeAt(e)) && yr(n.charCodeAt(e - 1)) && e--;
  let i = Ci(n, e);
  for (e += ss(i); e < n.length; ) {
    let s = Ci(n, e);
    if (i == ns || s == ns || t && kl(s))
      e += ss(s), i = s;
    else if (is(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && is(Ci(n, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Al(n, e, t) {
  for (; e > 0; ) {
    let i = br(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Ci(n, e) {
  let t = n.charCodeAt(e);
  if (!yr(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return xr(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function xr(n) {
  return n >= 56320 && n < 57344;
}
function yr(n) {
  return n >= 55296 && n < 56320;
}
function ss(n) {
  return n < 65536 ? 1 : 2;
}
class T {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = Je(this, e, t);
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      s,
      1
      /* Open.From */
    ), re.from(s, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = Je(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), re.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new ct(this), r = new ct(e);
    for (let o = t, a = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (a += s.value.length, s.done || a >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new ct(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new vr(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new wr(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? T.empty : e.length <= 32 ? new N(e) : re.from(N.split(e, []));
  }
}
class N extends T {
  constructor(e, t = Ml(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], a = s + o.length;
      if ((t ? i : a) >= e)
        return new Rl(s, a, i, o);
      s = a + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new N(rs(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), a = qt(r.text, o.text.slice(), 0, r.length);
      if (a.length <= 32)
        i.push(new N(a, o.length + r.length));
      else {
        let l = a.length >> 1;
        i.push(new N(a.slice(0, l)), new N(a.slice(l)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof N))
      return super.replace(e, t, i);
    [e, t] = Je(this, e, t);
    let s = qt(this.text, qt(i.text, rs(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new N(s, r) : re.from(N.split(s, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Je(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let a = this.text[o], l = r + a.length;
      r > e && o && (s += i), e < l && t > r && (s += a.slice(Math.max(0, e - r), t - r)), r = l + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], s = -1;
    for (let r of e)
      i.push(r), s += r.length + 1, i.length == 32 && (t.push(new N(i, s)), i = [], s = -1);
    return s > -1 && t.push(new N(i, s)), t;
  }
}
class re extends T {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], a = s + o.length, l = i + o.lines - 1;
      if ((t ? l : a) >= e)
        return o.lineInner(e, t, i, s);
      s = a + 1, i = l + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let a = this.children[r], l = o + a.length;
      if (e <= l && t >= o) {
        let c = s & ((o <= e ? 1 : 0) | (l >= t ? 2 : 0));
        o >= e && l <= t && !c ? i.push(a) : a.decompose(e - o, t - o, i, c);
      }
      o = l + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Je(this, e, t), i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], a = r + o.length;
        if (e >= r && t <= a) {
          let l = o.replace(e - r, t - r, i), c = this.lines - o.lines + l.lines;
          if (l.lines < c >> 4 && l.lines > c >> 6) {
            let h = this.children.slice();
            return h[s] = l, new re(h, this.length - (t - e) + i.length);
          }
          return super.replace(r, a, l);
        }
        r = a + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Je(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let a = this.children[r], l = o + a.length;
      o > e && r && (s += i), e < l && t > o && (s += a.sliceString(e - o, t - o, i)), o = l + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof re))
      return 0;
    let i = 0, [s, r, o, a] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == a)
        return i;
      let l = this.children[s], c = e.children[r];
      if (l != c)
        return i + l.scanIdentical(c, t);
      i += l.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let f of e)
      i += f.lines;
    if (i < 32) {
      let f = [];
      for (let p of e)
        p.flatten(f);
      return new N(f, t);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, a = [], l = 0, c = -1, h = [];
    function d(f) {
      let p;
      if (f.lines > r && f instanceof re)
        for (let g of f.children)
          d(g);
      else f.lines > o && (l > o || !l) ? (u(), a.push(f)) : f instanceof N && l && (p = h[h.length - 1]) instanceof N && f.lines + p.lines <= 32 ? (l += f.lines, c += f.length + 1, h[h.length - 1] = new N(p.text.concat(f.text), p.length + 1 + f.length)) : (l + f.lines > s && u(), l += f.lines, c += f.length + 1, h.push(f));
    }
    function u() {
      l != 0 && (a.push(h.length == 1 ? h[0] : re.from(h, c)), c = -1, l = h.length = 0);
    }
    for (let f of e)
      d(f);
    return u(), a.length == 1 ? a[0] : new re(a, t);
  }
}
T.empty = /* @__PURE__ */ new N([""], 0);
function Ml(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function qt(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let a = n[r], l = s + a.length;
    l >= t && (l > i && (a = a.slice(0, i - s)), s < t && (a = a.slice(t - s)), o ? (e[e.length - 1] += a, o = !1) : e.push(a)), s = l + 1;
  }
  return e;
}
function rs(n, e, t) {
  return qt(n, [""], e, t);
}
class ct {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof N ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, a = s instanceof N ? s.text.length : s.children.length;
      if (o == (t > 0 ? a : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof N) {
        let l = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, l.length > Math.max(0, e))
          return this.value = e == 0 ? l : t > 0 ? l.slice(e) : l.slice(0, l.length - e), this;
        e -= l.length;
      } else {
        let l = s.children[o + (t < 0 ? -1 : 0)];
        e > l.length ? (e -= l.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(l), this.offsets.push(t > 0 ? 1 : (l instanceof N ? l.text.length : l.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class vr {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ct(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class wr {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (T.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ct.prototype[Symbol.iterator] = vr.prototype[Symbol.iterator] = wr.prototype[Symbol.iterator] = function() {
  return this;
});
class Rl {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Je(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function ae(n, e, t = !0, i = !0) {
  return Cl(n, e, t, i);
}
function Tl(n) {
  return n >= 56320 && n < 57344;
}
function El(n) {
  return n >= 55296 && n < 56320;
}
function Ol(n, e) {
  let t = n.charCodeAt(e);
  if (!El(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return Tl(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Dl(n) {
  return n < 65536 ? 1 : 2;
}
const Ki = /\r\n?|\n/;
var J = /* @__PURE__ */ (function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
})(J || (J = {}));
class me {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, s, r), s += r) : s += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Gi(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new me(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Sr(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Ui(this, e, t);
  }
  mapPos(e, t = -1, i = J.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let a = this.sections[o++], l = this.sections[o++], c = s + a;
      if (l < 0) {
        if (c > e)
          return r + (e - s);
        r += a;
      } else {
        if (i != J.Simple && c >= e && (i == J.TrackDel && s < e && c > e || i == J.TrackBefore && s < e || i == J.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !a)
          return e == s || t < 0 ? r : r + l;
        r += l;
      }
      s = c;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], a = s + r;
      if (o >= 0 && s <= t && a >= e)
        return s < e && a > t ? "cover" : !0;
      s = a;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new me(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new me(e);
  }
}
class W extends me {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Gi(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Ui(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], a = t[s + 1];
      if (a >= 0) {
        t[s] = a, t[s + 1] = o;
        let l = s >> 1;
        for (; i.length < l; )
          i.push(T.empty);
        i.push(o ? e.slice(r, r + o) : T.empty);
      }
      r += o;
    }
    return new W(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Sr(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : Ui(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Gi(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return me.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], s = [], r = new gt(this);
    e: for (let o = 0, a = 0; ; ) {
      let l = o == e.length ? 1e9 : e[o++];
      for (; a < l || a == l && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, l - a);
        q(s, h, -1);
        let d = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        q(t, h, d), d > 0 && Me(i, t, r.text), r.forward(h), a += h;
      }
      let c = e[o++];
      for (; a < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - a);
        q(t, h, -1), q(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), a += h;
      }
    }
    return {
      changes: new W(t, i),
      filtered: me.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let s = [], r = [], o = 0, a = null;
    function l(h = !1) {
      if (!h && !s.length)
        return;
      o < t && q(s, t - o, -1);
      let d = new W(s, r);
      a = a ? a.compose(d.map(a)) : d, s = [], r = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let d of h)
          c(d);
      else if (h instanceof W) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        l(), a = a ? a.compose(h.map(a)) : h;
      } else {
        let { from: d, to: u = d, insert: f } = h;
        if (d > u || d < 0 || u > t)
          throw new RangeError(`Invalid change range ${d} to ${u} (in doc of length ${t})`);
        let p = f ? typeof f == "string" ? T.of(f.split(i || Ki)) : f : T.empty, g = p.length;
        if (d == u && g == 0)
          return;
        d < o && l(), d > o && q(s, d - o, -1), q(s, u - d, g), Me(r, s, p), o = u;
      }
    }
    return c(e), l(!a), a;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new W(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, a) => a && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(T.empty);
          i[s] = T.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new W(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new W(e, t);
  }
}
function q(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : s >= 0 && e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function Me(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(T.empty);
    n.push(t);
  }
}
function Gi(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let a = n.sections[o++], l = n.sections[o++];
    if (l < 0)
      s += a, r += a;
    else {
      let c = s, h = r, d = T.empty;
      for (; c += a, h += l, l && i && (d = d.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); )
        a = n.sections[o++], l = n.sections[o++];
      e(s, c, r, h, d), s = c, r = h;
    }
  }
}
function Ui(n, e, t, i = !1) {
  let s = [], r = i ? [] : null, o = new gt(n), a = new gt(e);
  for (let l = -1; ; ) {
    if (o.done && a.len || a.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && a.ins == -1) {
      let c = Math.min(o.len, a.len);
      q(s, c, -1), o.forward(c), a.forward(c);
    } else if (a.ins >= 0 && (o.ins < 0 || l == o.i || o.off == 0 && (a.len < o.len || a.len == o.len && !t))) {
      let c = a.len;
      for (q(s, a.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && l < o.i && o.len <= h && (q(s, 0, o.ins), r && Me(r, s, o.text), l = o.i), o.forward(h), c -= h;
      }
      a.next();
    } else if (o.ins >= 0) {
      let c = 0, h = o.len;
      for (; h; )
        if (a.ins == -1) {
          let d = Math.min(h, a.len);
          c += d, h -= d, a.forward(d);
        } else if (a.ins == 0 && a.len < h)
          h -= a.len, a.next();
        else
          break;
      q(s, c, l < o.i ? o.ins : 0), r && l < o.i && Me(r, s, o.text), l = o.i, o.forward(o.len - h);
    } else {
      if (o.done && a.done)
        return r ? W.createSet(s, r) : me.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Sr(n, e, t = !1) {
  let i = [], s = t ? [] : null, r = new gt(n), o = new gt(e);
  for (let a = !1; ; ) {
    if (r.done && o.done)
      return s ? W.createSet(i, s) : me.create(i);
    if (r.ins == 0)
      q(i, r.len, 0, a), r.next();
    else if (o.len == 0 && !o.done)
      q(i, 0, o.ins, a), s && Me(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let l = Math.min(r.len2, o.len), c = i.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          q(i, l, h, a), s && h && Me(s, i, o.text);
        } else o.ins == -1 ? (q(i, r.off ? 0 : r.len, l, a), s && Me(s, i, r.textBit(l))) : (q(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, a), s && !o.off && Me(s, i, o.text));
        a = (r.ins > l || o.ins >= 0 && o.len > l) && (a || i.length > c), r.forward2(l), o.forward(l);
      }
    }
  }
}
class gt {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? T.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? T.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Be {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Be(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return y.range(e, t, void 0, void 0, i);
    let s = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, s, void 0, void 0, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return y.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Be(e, t, i);
  }
}
class y {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : y.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new y([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return y.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, y.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new y(e.ranges.map((t) => Be.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new y([y.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i)
        return y.normalized(e.slice(), t);
      i = r.to;
    }
    return new y(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, s) {
    return Be.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, s, r) {
    let o = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return !r && e != t && (r = t < e ? 1 : -1), t < e ? Be.create(t, e, 48 | o) : Be.create(e, t, (r ? r < 0 ? 8 : 16 : 0) | o);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let a = o.from, l = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? y.range(l, a) : y.range(a, l));
      }
    }
    return new y(e, t);
  }
}
function kr(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Tn = 0;
class w {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Tn++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new w(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : En), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Kt([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Kt(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Kt(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function En(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class Kt {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Tn++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, a = this.type == 2, l = !1, c = !1, h = [];
    for (let d of this.dependencies)
      d == "doc" ? l = !0 : d == "selection" ? c = !0 : (((t = e[d.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[d.id]);
    return {
      create(d) {
        return d.values[o] = i(d), 1;
      },
      update(d, u) {
        if (l && u.docChanged || c && (u.docChanged || u.selection) || _i(d, h)) {
          let f = i(d);
          if (a ? !os(f, d.values[o], s) : !s(f, d.values[o]))
            return d.values[o] = f, 1;
        }
        return 0;
      },
      reconfigure: (d, u) => {
        let f, p = u.config.address[r];
        if (p != null) {
          let g = ti(u, p);
          if (this.dependencies.every((m) => m instanceof w ? u.facet(m) === d.facet(m) : m instanceof ye ? u.field(m, !1) == d.field(m, !1) : !0) || (a ? os(f = i(d), g, s) : s(f = i(d), g)))
            return d.values[o] = g, 0;
        } else
          f = i(d);
        return d.values[o] = f, 1;
      }
    };
  }
}
function os(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function _i(n, e) {
  let t = !1;
  for (let i of e)
    ht(n, i) & 1 && (t = !0);
  return t;
}
function Ll(n, e, t) {
  let i = t.map((l) => n[l.id]), s = t.map((l) => l.type), r = i.filter((l) => !(l & 1)), o = n[e.id] >> 1;
  function a(l) {
    let c = [];
    for (let h = 0; h < i.length; h++) {
      let d = ti(l, i[h]);
      if (s[h] == 2)
        for (let u of d)
          c.push(u);
      else
        c.push(d);
    }
    return e.combine(c);
  }
  return {
    create(l) {
      for (let c of i)
        ht(l, c);
      return l.values[o] = a(l), 1;
    },
    update(l, c) {
      if (!_i(l, r))
        return 0;
      let h = a(l);
      return e.compare(h, l.values[o]) ? 0 : (l.values[o] = h, 1);
    },
    reconfigure(l, c) {
      let h = _i(l, i), d = c.config.facets[e.id], u = c.facet(e);
      if (d && !h && En(t, d))
        return l.values[o] = u, 0;
      let f = a(l);
      return e.compare(f, u) ? (l.values[o] = u, 0) : (l.values[o] = f, 1);
    }
  };
}
const Ot = /* @__PURE__ */ w.define({ static: !0 });
class ye {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ye(Tn++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Ot).find((i) => i.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, s) => {
        let r = i.values[t], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, s) => {
        let r = i.facet(Ot), o = s.facet(Ot), a;
        return (a = r.find((l) => l.field == this)) && a != o.find((l) => l.field == this) ? (i.values[t] = a.create(i), 1) : s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Ot.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const Le = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function rt(n) {
  return (e) => new Cr(e, n);
}
const On = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ rt(Le.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ rt(Le.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ rt(Le.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ rt(Le.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ rt(Le.lowest)
};
class Cr {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class gi {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Yi(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return gi.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Yi {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class ei {
  constructor(e, t, i, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Bl(e, t, o))
      u instanceof ye ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let a = /* @__PURE__ */ Object.create(null), l = [], c = [];
    for (let u of s)
      a[u.id] = c.length << 1, c.push((f) => u.slot(f));
    let h = i?.config.facets;
    for (let u in r) {
      let f = r[u], p = f[0].facet, g = h && h[u] || [];
      if (f.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (a[p.id] = l.length << 1 | 1, En(g, f))
          l.push(i.facet(p));
        else {
          let m = p.combine(f.map((b) => b.value));
          l.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of f)
          m.type == 0 ? (a[m.id] = l.length << 1 | 1, l.push(m.value)) : (a[m.id] = c.length << 1, c.push((b) => m.dynamicSlot(b)));
        a[p.id] = c.length << 1, c.push((m) => Ll(m, p, f));
      }
    }
    let d = c.map((u) => u(a));
    return new ei(e, o, d, a, l, r);
  }
}
function Bl(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, a) {
    let l = s.get(o);
    if (l != null) {
      if (l <= a)
        return;
      let c = i[l].indexOf(o);
      c > -1 && i[l].splice(c, 1), o instanceof Yi && t.delete(o.compartment);
    }
    if (s.set(o, a), Array.isArray(o))
      for (let c of o)
        r(c, a);
    else if (o instanceof Yi) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      t.set(o.compartment, c), r(c, a);
    } else if (o instanceof Cr)
      r(o.inner, o.prec);
    else if (o instanceof ye)
      i[a].push(o), o.provides && r(o.provides, a);
    else if (o instanceof Kt)
      i[a].push(o), o.facet.extensions && r(o.facet.extensions, Le.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, a);
    }
  }
  return r(n, Le.default), i.reduce((o, a) => o.concat(a));
}
function ht(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | s;
}
function ti(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Ar = /* @__PURE__ */ w.define(), Xi = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), Mr = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), Rr = /* @__PURE__ */ w.define(), Tr = /* @__PURE__ */ w.define(), Er = /* @__PURE__ */ w.define(), Or = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : !1
});
class nt {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new Pl();
  }
}
class Pl {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new nt(this, e);
  }
}
class Il {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new H(this, e);
  }
}
class H {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new H(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new Il(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      r && i.push(r);
    }
    return i;
  }
}
H.reconfigure = /* @__PURE__ */ H.define();
H.appendConfig = /* @__PURE__ */ H.define();
class K {
  constructor(e, t, i, s, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && kr(i, t.newLength), r.some((a) => a.type == K.time) || (this.annotations = r.concat(K.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, s, r, o) {
    return new K(e, t, i, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(K.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
K.time = /* @__PURE__ */ nt.define();
K.userEvent = /* @__PURE__ */ nt.define();
K.addToHistory = /* @__PURE__ */ nt.define();
K.remote = /* @__PURE__ */ nt.define();
function Nl(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == e.length || e[s] >= n[i]))
      r = n[i++], o = n[i++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Dr(n, e, t) {
  var i;
  let s, r, o;
  return t ? (s = e.changes, r = W.empty(e.changes.length), o = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, !0), o = n.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: H.mapEffects(n.effects, s).concat(H.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function Ji(n, e, t) {
  let i = e.selection, s = Ue(e.annotations);
  return e.userEvent && (s = s.concat(K.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof W ? e.changes : W.of(e.changes || [], t, n.facet(Mr)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: Ue(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Lr(n, e, t) {
  let i = Ji(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Dr(i, Ji(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = K.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Hl(t ? $l(s) : s);
}
function $l(n) {
  let e = n.startState, t = !0;
  for (let s of e.facet(Rr)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Nl(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = n.changes.invertedDesc, s = W.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = K.create(e, s, n.selection && n.selection.map(r), H.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Tr);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof K ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof K ? n = r[0] : n = Lr(e, Ue(r), !1);
  }
  return n;
}
function Hl(n) {
  let e = n.startState, t = e.facet(Er), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = Dr(i, Ji(e, r, n.changes.newLength), !0));
  }
  return i == n ? n : K.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const jl = [];
function Ue(n) {
  return n == null ? jl : Array.isArray(n) ? n : [n];
}
var pe = /* @__PURE__ */ (function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
})(pe || (pe = {}));
const Wl = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Qi;
try {
  Qi = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Fl(n) {
  if (Qi)
    return Qi.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Wl.test(t)))
      return !0;
  }
  return !1;
}
function zl(n) {
  return (e) => {
    if (!/\S/.test(e))
      return pe.Space;
    if (Fl(e))
      return pe.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return pe.Word;
    return pe.Other;
  };
}
class O {
  constructor(e, t, i, s, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let a = 0; a < this.config.dynamicSlots.length; a++)
      ht(this, a << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ht(this, i), ti(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Lr(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let a of e.effects)
      a.is(gi.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((l, c) => s.set(c, l)), t = null), s.set(a.value.compartment, a.value.extension)) : a.is(H.reconfigure) ? (t = null, i = a.value) : a.is(H.appendConfig) && (t = null, i = Ue(i).concat(a.value));
    let r;
    t ? r = e.startState.values.slice() : (t = ei.resolve(i, s, this), r = new O(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, c) => c.reconfigure(l, this), null).values);
    let o = e.startState.facet(Xi) ? e.newSelection : e.newSelection.asSingle();
    new O(t, e.newDoc, o, r, (a, l) => l.update(a, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: y.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), r = [i.range], o = Ue(i.effects);
    for (let a = 1; a < t.ranges.length; a++) {
      let l = e(t.ranges[a]), c = this.changes(l.changes), h = c.map(s);
      for (let u = 0; u < a; u++)
        r[u] = r[u].map(h);
      let d = s.mapDesc(c, !0);
      r.push(l.range.map(d)), s = s.compose(h), o = H.mapEffects(o, h).concat(H.mapEffects(Ue(l.effects), d));
    }
    return {
      changes: s,
      selection: y.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof W ? e : W.of(e, this.doc.length, this.facet(O.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return T.of(e.split(this.facet(O.lineSeparator) || Ki));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ht(this, t), ti(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof ye && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], a = e[r];
          s.push(o.init((l) => o.spec.fromJSON(a, l)));
        }
    }
    return O.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = ei.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof T ? e.doc : T.of((e.doc || "").split(t.staticFacet(O.lineSeparator) || Ki)), s = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return kr(s, i.length), t.staticFacet(Xi) || (s = s.asSingle()), new O(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(O.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(O.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Or);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(O.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet(Ar))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return zl(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, a = e - i;
    for (; o > 0; ) {
      let l = ae(t, o, !1);
      if (r(t.slice(l, o)) != pe.Word)
        break;
      o = l;
    }
    for (; a < s; ) {
      let l = ae(t, a);
      if (r(t.slice(a, l)) != pe.Word)
        break;
      a = l;
    }
    return o == a ? null : y.range(o + i, a + i);
  }
}
O.allowMultipleSelections = Xi;
O.tabSize = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : 4
});
O.lineSeparator = Mr;
O.readOnly = Or;
O.phrases = /* @__PURE__ */ w.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  }
});
O.languageData = Ar;
O.changeFilter = Rr;
O.transactionFilter = Tr;
O.transactionExtender = Er;
gi.reconfigure = /* @__PURE__ */ H.define();
function Br(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r], a = i[r];
      if (a === void 0)
        i[r] = o;
      else if (!(a === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](a, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class Ne {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return mt.create(e, t, this);
  }
}
Ne.prototype.startSide = Ne.prototype.endSide = 0;
Ne.prototype.point = !1;
Ne.prototype.mapMode = J.TrackDel;
function Dn(n, e) {
  return n == e || n.constructor == e.constructor && n.eq(e);
}
class mt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new mt(e, t, i);
  }
}
function Zi(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Ln {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, a = r.length; ; ) {
      if (o == a)
        return o;
      let l = o + a >> 1, c = r[l] - e || (i ? this.value[l].endSide : this.value[l].startSide) - t;
      if (l == o)
        return c >= 0 ? o : a;
      c >= 0 ? a = l : o = l + 1;
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], s = [], r = [], o = -1, a = -1;
    for (let l = 0; l < this.value.length; l++) {
      let c = this.value[l], h = this.from[l] + e, d = this.to[l] + e, u, f;
      if (h == d) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (u = f = p, c.startSide != c.endSide && (f = t.mapPos(h, c.endSide), f < u)))
          continue;
      } else if (u = t.mapPos(h, c.startSide), f = t.mapPos(d, c.endSide), u > f || u == f && c.startSide > 0 && c.endSide <= 0)
        continue;
      (f - u || c.endSide - c.startSide) < 0 || (o < 0 && (o = u), c.point && (a = Math.max(a, f - u)), i.push(c), s.push(u - o), r.push(f - o));
    }
    return { mapped: i.length ? new Ln(s, r, i, a) : null, pos: o };
  }
}
class R {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, i, s) {
    return new R(e, t, i, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(Zi)), this.isEmpty)
      return t.length ? R.of(t) : this;
    let a = new Pr(this, null, -1).goto(0), l = 0, c = [], h = new ii();
    for (; a.value || l < t.length; )
      if (l < t.length && (a.from - t[l].from || a.startSide - t[l].value.startSide) >= 0) {
        let d = t[l++];
        h.addInner(d.from, d.to, d.value) || c.push(d);
      } else a.rangeIndex == 1 && a.chunkIndex < this.chunk.length && (l == t.length || this.chunkEnd(a.chunkIndex) < t[l].from) && (!o || s > this.chunkEnd(a.chunkIndex) || r < this.chunkPos[a.chunkIndex]) && h.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex]) ? a.nextChunk() : ((!o || s > a.to || r < a.from || o(a.from, a.to, a.value)) && (h.addInner(a.from, a.to, a.value) || c.push(mt.create(a.from, a.to, a.value))), a.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? R.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let a = this.chunkPos[o], l = this.chunk[o], c = e.touchesRange(a, a + l.length);
      if (c === !1)
        s = Math.max(s, l.maxPoint), t.push(l), i.push(e.mapPos(a));
      else if (c === !0) {
        let { mapped: h, pos: d } = l.map(a, e);
        h && (s = Math.max(s, h.maxPoint), t.push(h), i.push(d));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new R(i, t, r || R.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return bt.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return bt.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), a = t.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), l = as(o, a, i), c = new ot(o, l, r), h = new ot(a, l, r);
    i.iterGaps((d, u, f) => ls(c, d, h, u, f, s)), i.empty && i.length == 0 && ls(c, 0, h, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let a = as(r, o), l = new ot(r, a, 0).goto(i), c = new ot(o, a, 0).goto(i);
    for (; ; ) {
      if (l.to != c.to || !en(l.active, c.active) || l.point && (!c.point || !Dn(l.point, c.point)))
        return !1;
      if (l.to > s)
        return !0;
      l.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, s, r = -1) {
    let o = new ot(e, null, r).goto(t), a = t, l = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, i);
      if (o.point) {
        let h = o.activeForPoint(o.to), d = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, l);
        s.point(a, c, o.point, h, d, o.pointRank), l = Math.min(o.openEnd(c), h.length);
      } else c > a && (s.span(a, c, o.active, l), l = o.openEnd(c));
      if (o.to > i)
        return l + (o.point && o.to > i ? 1 : 0);
      a = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new ii();
    for (let s of e instanceof mt ? [e] : t ? Vl(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return R.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let s = e[i]; s != R.empty; s = s.nextLayer)
        t = new R(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
R.empty = /* @__PURE__ */ new R([], [], null, -1);
function Vl(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Zi(e, i) > 0)
        return n.slice().sort(Zi);
      e = i;
    }
  return n;
}
R.empty.nextLayer = R.empty;
class ii {
  finishChunk(e) {
    this.chunks.push(new Ln(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new ii())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(R.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = R.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function as(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let a = i.get(r.chunk[o]);
      a != null && (t ? t.mapPos(a) : a) == r.chunkPos[o] && !t?.touchesRange(a, a + r.chunk[o].length) && s.add(r.chunk[o]);
    }
  return s;
}
class Pr {
  constructor(e, t, i, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class bt {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new Pr(o, t, i, r));
    return s.length == 1 ? s[0] : new bt(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ai(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ai(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Ai(this.heap, 0);
    }
  }
}
function Ai(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), t.compare(s) < 0)
      break;
    n[i] = t, n[e] = s, e = i;
  }
}
class ot {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = bt.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Dt(this.active, e), Dt(this.activeTo, e), Dt(this.activeRank, e), this.minActive = cs(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    Lt(this.active, t, i), Lt(this.activeTo, t, s), Lt(this.activeRank, t, r), e && Lt(e, t, this.cursor.from), this.minActive = cs(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Dt(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function ls(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s, a = i, l = i - e, c = !!r.boundChange;
  for (let h = !1; ; ) {
    let d = n.to + l - t.to, u = d || n.endSide - t.endSide, f = u < 0 ? n.to + l : t.to, p = Math.min(f, o);
    if (n.point || t.point ? (n.point && t.point && Dn(n.point, t.point) && en(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(a, p, n.point, t.point), h = !1) : (h && r.boundChange(a), p > a && !en(n.active, t.active) && r.compareRange(a, p, n.active, t.active), c && p < o && (d || n.openEnd(f) != t.openEnd(f)) && (h = !0)), f > o)
      break;
    a = f, u <= 0 && n.next(), u >= 0 && t.next();
  }
}
function en(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !Dn(n[t], e[t]))
      return !1;
  return !0;
}
function Dt(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function Lt(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function cs(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function ql(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = ae(n, s);
  }
  return n.length;
}
const tn = "ͼ", hs = typeof Symbol > "u" ? "__" + tn : Symbol.for(tn), nn = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Qe {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, a, l, c) {
      let h = [], d = /^@(\w+)\b/.exec(o[0]), u = d && d[1] == "keyframes";
      if (d && a == null) return l.push(o[0] + ";");
      for (let f in a) {
        let p = a[f];
        if (/&/.test(f))
          r(
            f.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            l
          );
        else if (p && typeof p == "object") {
          if (!d) throw new RangeError("The value of a property (" + f + ") should be a primitive value.");
          r(s(f), p, h, u);
        } else p != null && h.push(f.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && l.push((i && !d && !c ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = ds[hs] || 1;
    return ds[hs] = e + 1, tn + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let s = e[nn], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new Kl(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let us = /* @__PURE__ */ new Map();
class Kl {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = us.get(i);
      if (r) return e[nn] = r;
      this.sheet = new s.CSSStyleSheet(), us.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[nn] = this;
  }
  mount(e, t) {
    let i = this.sheet, s = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let a = e[o], l = this.modules.indexOf(a);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, a), i) for (let c = 0; c < a.rules.length; c++)
          i.insertRule(a.rules[c], s++);
      } else {
        for (; r < l; ) s += this.modules[r++].rules.length;
        s += a.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let l = 0; l < this.modules.length; l++)
        o += this.modules[l].getRules() + `
`;
      this.styleTag.textContent = o;
      let a = t.head || t;
      this.styleTag.parentNode != a && a.insertBefore(this.styleTag, a.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Re = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, xt = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Gl = typeof navigator < "u" && /Mac/.test(navigator.platform), Ul = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var z = 0; z < 10; z++) Re[48 + z] = Re[96 + z] = String(z);
for (var z = 1; z <= 24; z++) Re[z + 111] = "F" + z;
for (var z = 65; z <= 90; z++)
  Re[z] = String.fromCharCode(z + 32), xt[z] = String.fromCharCode(z);
for (var Mi in Re) xt.hasOwnProperty(Mi) || (xt[Mi] = Re[Mi]);
function _l(n) {
  var e = Gl && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Ul && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? xt : Re)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let G = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, sn = typeof document < "u" ? document : { documentElement: { style: {} } };
const rn = /* @__PURE__ */ /Edge\/(\d+)/.exec(G.userAgent), Ir = /* @__PURE__ */ /MSIE \d/.test(G.userAgent), on = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(G.userAgent), mi = !!(Ir || on || rn), fs = !mi && /* @__PURE__ */ /gecko\/(\d+)/i.test(G.userAgent), Ri = !mi && /* @__PURE__ */ /Chrome\/(\d+)/.exec(G.userAgent), ps = "webkitFontSmoothing" in sn.documentElement.style, an = !mi && /* @__PURE__ */ /Apple Computer/.test(G.vendor), gs = an && (/* @__PURE__ */ /Mobile\/\w+/.test(G.userAgent) || G.maxTouchPoints > 2);
var x = {
  mac: gs || /* @__PURE__ */ /Mac/.test(G.platform),
  windows: /* @__PURE__ */ /Win/.test(G.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(G.platform),
  ie: mi,
  ie_version: Ir ? sn.documentMode || 6 : on ? +on[1] : rn ? +rn[1] : 0,
  gecko: fs,
  gecko_version: fs ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  chrome: !!Ri,
  chrome_version: Ri ? +Ri[1] : 0,
  ios: gs,
  android: /* @__PURE__ */ /Android\b/.test(G.userAgent),
  webkit: ps,
  webkit_version: ps ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  safari: an,
  safari_version: an ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(G.userAgent) || [0, 0])[1] : 0,
  tabSize: sn.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Bn(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const ni = /* @__PURE__ */ Object.create(null);
function Pn(n, e, t) {
  if (n == e)
    return !0;
  n || (n = ni), e || (e = ni);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - 0 != s.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r]))
      return !1;
  return !0;
}
function Yl(n, e) {
  for (let t = n.attributes.length - 1; t >= 0; t--) {
    let i = n.attributes[t].name;
    e[i] == null && n.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? n.style.cssText = i : n.getAttribute(t) != i && n.setAttribute(t, i);
  }
}
function ms(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      t && s in t || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = !0, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function Xl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class bi {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var V = /* @__PURE__ */ (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})(V || (V = {}));
class j extends Ne {
  constructor(e, t, i, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new St(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new $e(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Nr(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new $e(e, i, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new kt(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return R.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
j.none = R.empty;
class St extends j {
  constructor(e) {
    let { start: t, end: i } = Nr(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Bn(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || ni;
  }
  eq(e) {
    return this == e || e instanceof St && this.tagName == e.tagName && Pn(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
St.prototype.point = !1;
class kt extends j {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof kt && this.spec.class == e.spec.class && Pn(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
kt.prototype.mapMode = J.TrackBefore;
kt.prototype.point = !0;
class $e extends j {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? J.TrackBefore : J.TrackAfter : J.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? V.WidgetRange : this.startSide <= 0 ? V.WidgetBefore : V.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof $e && Jl(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
$e.prototype.point = !0;
function Nr(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Jl(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function _e(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class yt extends Ne {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof yt && this.tagName == e.tagName && Pn(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new yt(e.tagName, e.attributes || ni, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return R.of(e, t);
  }
}
yt.prototype.startSide = yt.prototype.endSide = -1;
function vt(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function ln(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function dt(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return ln(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Gt(n) {
  return n.nodeType == 3 ? wt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function ut(n, e, t, i) {
  return t ? bs(n, e, t, i, -1) || bs(n, e, t, i, 1) : !1;
}
function Te(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function si(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function bs(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (s < 0 ? 0 : xe(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let r = n.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Te(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      e = s < 0 ? xe(n) : 0;
    } else
      return !1;
  }
}
function xe(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ri(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Ql(n) {
  let e = n.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function $r(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Zl(n, e, t, i, s, r, o, a) {
  let l = n.ownerDocument, c = l.defaultView || window;
  for (let h = n, d = !1; h && !d; )
    if (h.nodeType == 1) {
      let u, f = h == l.body, p = 1, g = 1;
      if (f)
        u = Ql(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (d = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let v = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = $r(h, v)), u = {
          left: v.left,
          right: v.left + h.clientWidth * p,
          top: v.top,
          bottom: v.top + h.clientHeight * g
        };
      }
      let m = 0, b = 0;
      if (s == "nearest")
        e.top < u.top + o ? (b = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + o)) : e.bottom > u.bottom - o && (b = e.bottom - u.bottom + o, t < 0 && e.top - b < u.top && (b = e.top - (u.top + o)));
      else {
        let v = e.bottom - e.top, A = u.bottom - u.top;
        b = (s == "center" && v <= A ? e.top + v / 2 - A / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - A + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left + r ? (m = e.left - (u.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + r)) : e.right > u.right - r && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = e.left - (u.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == a ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || b)
        if (f)
          c.scrollBy(m, b);
        else {
          let v = 0, A = 0;
          if (b) {
            let E = h.scrollTop;
            h.scrollTop += b / g, A = (h.scrollTop - E) * g;
          }
          if (m) {
            let E = h.scrollLeft;
            h.scrollLeft += m / p, v = (h.scrollLeft - E) * p;
          }
          e = {
            left: e.left - v,
            top: e.top - A,
            right: e.right - v,
            bottom: e.bottom - A
          }, v && Math.abs(v - m) < 1 && (i = "nearest"), A && Math.abs(A - b) < 1 && (s = "nearest");
        }
      if (f)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = {
        left: Math.max(e.left, u.left),
        right: Math.min(e.right, u.right),
        top: Math.max(e.top, u.top),
        bottom: Math.min(e.bottom, u.bottom)
      }), h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function Hr(n, e = !0) {
  let t = n.ownerDocument, i = null, s = null;
  for (let r = n.parentNode; r && !(r == t.body || (!e || i) && s); )
    if (r.nodeType == 1)
      !s && r.scrollHeight > r.clientHeight && (s = r), e && !i && r.scrollWidth > r.clientWidth && (i = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: i, y: s };
}
class ec {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? xe(t) : 0), i, Math.min(e.focusOffset, i ? xe(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = s;
  }
}
let De = null;
x.safari && x.safari_version >= 26 && (De = !1);
function jr(n) {
  if (n.setActive)
    return n.setActive();
  if (De)
    return n.focus(De);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(De == null ? {
    get preventScroll() {
      return De = { preventScroll: !0 }, !0;
    }
  } : void 0), !De) {
    De = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let xs;
function wt(n, e, t = e) {
  let i = xs || (xs = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Ye(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = !0, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function tc(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function ic(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, xe(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (t = s, i = xe(t));
    } else {
      if (t == n)
        return !0;
      i = Te(t), t = t.parentNode;
    }
}
function Wr(n) {
  return n instanceof Window ? n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4) : n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function Fr(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = xe(t);
    } else if (t.parentNode && !si(t))
      i = Te(t), t = t.parentNode;
    else
      return null;
  }
}
function zr(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !si(t))
      i = Te(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class te {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new te(e.parentNode, Te(e), t);
  }
  static after(e, t) {
    return new te(e.parentNode, Te(e) + 1, t);
  }
}
var $ = /* @__PURE__ */ (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})($ || ($ = {}));
const He = $.LTR, In = $.RTL;
function Vr(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const nc = /* @__PURE__ */ Vr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), sc = /* @__PURE__ */ Vr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), cn = /* @__PURE__ */ Object.create(null), se = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  cn[e] = t, cn[t] = -e;
}
function qr(n) {
  return n <= 247 ? nc[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? sc[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const rc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class le {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? In : He;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let a = e[o];
      if (a.from <= t && a.to >= t) {
        if (a.level == i)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? a.from < t : a.to > t : e[r].level > a.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Kr(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Kr(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const D = [];
function oc(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, a = r < i.length ? i[r].from : t, l = r ? 256 : s;
    for (let c = o, h = l, d = l; c < a; c++) {
      let u = qr(n.charCodeAt(c));
      u == 512 ? u = h : u == 8 && d == 4 && (u = 16), D[c] = u == 4 ? 2 : u, u & 7 && (d = u), h = u;
    }
    for (let c = o, h = l, d = l; c < a; c++) {
      let u = D[c];
      if (u == 128)
        c < a - 1 && h == D[c + 1] && h & 24 ? u = D[c] = h : D[c] = 256;
      else if (u == 64) {
        let f = c + 1;
        for (; f < a && D[f] == 64; )
          f++;
        let p = c && h == 8 || f < t && D[f] == 8 ? d == 1 ? 1 : 8 : 256;
        for (let g = c; g < f; g++)
          D[g] = p;
        c = f - 1;
      } else u == 8 && d == 1 && (D[c] = 1);
      h = u, u & 7 && (d = u);
    }
  }
}
function ac(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, a = 0, l = 0; o <= i.length; o++) {
    let c = o ? i[o - 1].to : e, h = o < i.length ? i[o].from : t;
    for (let d = c, u, f, p; d < h; d++)
      if (f = cn[u = n.charCodeAt(d)])
        if (f < 0) {
          for (let g = a - 3; g >= 0; g -= 3)
            if (se[g + 1] == -f) {
              let m = se[g + 2], b = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
              b && (D[d] = D[se[g]] = b), a = g;
              break;
            }
        } else {
          if (se.length == 189)
            break;
          se[a++] = d, se[a++] = u, se[a++] = l;
        }
      else if ((p = D[d]) == 2 || p == 1) {
        let g = p == s;
        l = g ? 0 : 1;
        for (let m = a - 3; m >= 0; m -= 3) {
          let b = se[m + 2];
          if (b & 2)
            break;
          if (g)
            se[m + 2] |= 2;
          else {
            if (b & 4)
              break;
            se[m + 2] |= 4;
          }
        }
      }
  }
}
function lc(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n, a = s < t.length ? t[s].from : e;
    for (let l = o; l < a; ) {
      let c = D[l];
      if (c == 256) {
        let h = l + 1;
        for (; ; )
          if (h == a) {
            if (s == t.length)
              break;
            h = t[s++].to, a = s < t.length ? t[s].from : e;
          } else if (D[h] == 256)
            h++;
          else
            break;
        let d = r == 1, u = (h < e ? D[h] : i) == 1, f = d == u ? d ? 1 : 2 : i;
        for (let p = h, g = s, m = g ? t[g - 1].to : n; p > l; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : n), D[--p] = f;
        l = h;
      } else
        r = c, l++;
    }
  }
}
function hn(n, e, t, i, s, r, o) {
  let a = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let l = e, c = 0; l < t; ) {
      let h = !0, d = !1;
      if (c == r.length || l < r[c].from) {
        let g = D[l];
        g != a && (h = !1, d = g == 16);
      }
      let u = !h && a == 1 ? [] : null, f = h ? i : i + 1, p = l;
      e: for (; ; )
        if (c < r.length && p == r[c].from) {
          if (d)
            break e;
          let g = r[c];
          if (!h)
            for (let m = g.to, b = c + 1; ; ) {
              if (m == t)
                break e;
              if (b < r.length && r[b].from == m)
                m = r[b++].to;
              else {
                if (D[m] == a)
                  break e;
                break;
              }
            }
          if (c++, u)
            u.push(g);
          else {
            g.from > l && o.push(new le(l, g.from, f));
            let m = g.direction == He != !(f % 2);
            dn(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), l = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (h ? D[p] != a : D[p] == a))
            break;
          p++;
        }
      u ? hn(n, l, p, i + 1, s, u, o) : l < p && o.push(new le(l, p, f)), l = p;
    }
  else
    for (let l = t, c = r.length; l > e; ) {
      let h = !0, d = !1;
      if (!c || l > r[c - 1].to) {
        let g = D[l - 1];
        g != a && (h = !1, d = g == 16);
      }
      let u = !h && a == 1 ? [] : null, f = h ? i : i + 1, p = l;
      e: for (; ; )
        if (c && p == r[c - 1].to) {
          if (d)
            break e;
          let g = r[--c];
          if (!h)
            for (let m = g.from, b = c; ; ) {
              if (m == e)
                break e;
              if (b && r[b - 1].to == m)
                m = r[--b].from;
              else {
                if (D[m - 1] == a)
                  break e;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < l && o.push(new le(g.to, l, f));
            let m = g.direction == He != !(f % 2);
            dn(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), l = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (h ? D[p - 1] != a : D[p - 1] == a))
            break;
          p--;
        }
      u ? hn(n, p, l, i + 1, s, u, o) : p < l && o.push(new le(p, l, f)), l = p;
    }
}
function dn(n, e, t, i, s, r, o) {
  let a = e % 2 ? 2 : 1;
  oc(n, s, r, i, a), ac(n, s, r, i, a), lc(s, r, i, a), hn(n, s, r, e, t, i, o);
}
function cc(n, e, t) {
  if (!n)
    return [new le(0, 0, e == In ? 1 : 0)];
  if (e == He && !t.length && !rc.test(n))
    return Gr(n.length);
  if (t.length)
    for (; n.length > D.length; )
      D[D.length] = 256;
  let i = [], s = e == He ? 0 : 1;
  return dn(n, s, s, t, 0, n.length, i), i;
}
function Gr(n) {
  return [new le(0, n, 0)];
}
let Ur = "";
function hc(n, e, t, i, s) {
  var r;
  let o = i.head - n.from, a = le.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), l = e[a], c = l.side(s, t);
  if (o == c) {
    let u = a += s ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    l = e[a = u], o = l.side(!s, t), c = l.side(s, t);
  }
  let h = ae(n.text, o, l.forward(s, t));
  (h < l.from || h > l.to) && (h = c), Ur = n.text.slice(Math.min(o, h), Math.max(o, h));
  let d = a == (s ? e.length - 1 : 0) ? null : e[a + (s ? 1 : -1)];
  return d && h == c && d.level + (s ? 0 : 1) < l.level ? y.cursor(d.side(!s, t) + n.from, d.forward(s, t) ? 1 : -1, d.level) : y.cursor(h + n.from, l.forward(s, t) ? -1 : 1, l.level);
}
function dc(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = qr(n.charCodeAt(i));
    if (s == 1)
      return He;
    if (s == 2 || s == 4)
      return In;
  }
  return He;
}
const _r = /* @__PURE__ */ w.define(), Yr = /* @__PURE__ */ w.define(), Xr = /* @__PURE__ */ w.define(), Jr = /* @__PURE__ */ w.define(), un = /* @__PURE__ */ w.define(), Qr = /* @__PURE__ */ w.define(), Zr = /* @__PURE__ */ w.define(), Nn = /* @__PURE__ */ w.define(), $n = /* @__PURE__ */ w.define(), eo = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
}), to = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
}), io = /* @__PURE__ */ w.define();
class Xe {
  constructor(e, t, i, s, r, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Xe(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Xe(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Bt = /* @__PURE__ */ H.define({ map: (n, e) => n.map(e) }), no = /* @__PURE__ */ H.define();
function ge(n, e, t) {
  let i = n.facet(Jr);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const ue = /* @__PURE__ */ w.define({ combine: (n) => n.length ? n[0] : !0 });
let uc = 0;
const qe = /* @__PURE__ */ w.define({
  combine(n) {
    return n.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (n[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class je {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(qe.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(qe.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new je(uc++, e, i, s, (a) => {
      let l = [];
      return o && l.push(xi.of((c) => {
        let h = c.plugin(a);
        return h ? o(h) : j.none;
      })), r && l.push(r(a)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return je.define((i, s) => new e(i, s), t);
  }
}
class Ti {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (ge(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        ge(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        ge(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const so = /* @__PURE__ */ w.define(), Hn = /* @__PURE__ */ w.define(), xi = /* @__PURE__ */ w.define(), ro = /* @__PURE__ */ w.define(), jn = /* @__PURE__ */ w.define(), Ct = /* @__PURE__ */ w.define(), oo = /* @__PURE__ */ w.define();
function ys(n, e) {
  let t = n.state.facet(oo);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(n) : r), s = [];
  return R.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, a, l) {
      let c = r - e.from, h = o - e.from, d = s;
      for (let u = a.length - 1; u >= 0; u--, l--) {
        let f = a[u].spec.bidiIsolate, p;
        if (f == null && (f = dc(e.text, c, h)), l > 0 && d.length && (p = d[d.length - 1]).to == c && p.direction == f)
          p.to = h, d = p.inner;
        else {
          let g = { from: c, to: h, direction: f, inner: [] };
          d.push(g), d = g.inner;
        }
      }
    }
  }), s;
}
const ao = /* @__PURE__ */ w.define();
function lo(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(ao)) {
    let o = r(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const at = /* @__PURE__ */ w.define();
class Q {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new Q(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let s = 0, r = 0, o = 0; ; ) {
      let a = s < e.length ? e[s].fromB : 1e9, l = r < t.length ? t[r] : 1e9, c = Math.min(a, l);
      if (c == 1e9)
        break;
      let h = c + o, d = c, u = h;
      for (; ; )
        if (r < t.length && t[r] <= d) {
          let f = t[r + 1];
          r += 2, d = Math.max(d, f);
          for (let p = s; p < e.length && e[p].fromB <= d; p++)
            o = e[p].toA - e[p].toB;
          u = Math.max(u, f + o);
        } else if (s < e.length && e[s].fromB <= d) {
          let f = e[s++];
          d = Math.max(d, f.toB), u = Math.max(u, f.toA), o = f.toA - f.toB;
        } else
          break;
      i.push(new Q(h, u, c, d));
    }
    return i;
  }
}
class oi {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = W.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, a, l) => s.push(new Q(r, o, a, l))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new oi(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const fc = [];
class I {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return fc;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && Yl(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let s of this.children) {
      if (s == e)
        return i;
      i += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = Te(this.dom), s = this.length ? e > 0 : t > 0;
    return new te(this.parent.dom, i + (s ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof vi)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class yi extends I {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, i = null, s, r = e?.node == t ? e : null, o = 0;
    for (let a of this.children) {
      if (a.sync(e), o += a.length + a.breakAfter, s = i ? i.nextSibling : t.firstChild, r && s != a.dom && (r.written = !0), a.dom.parentNode == t)
        for (; s && s != a.dom; )
          s = vs(s);
      else
        t.insertBefore(a.dom, s);
      i = a.dom;
    }
    for (s = i ? i.nextSibling : t.firstChild, r && s && (r.written = !0); s; )
      s = vs(s);
    this.length = o;
  }
}
function vs(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class vi extends yi {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = I.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, s = 0, r = 0; ; )
      if (s == i.children.length) {
        if (!t.length)
          return;
        i = i.parent, i.breakAfter && r++, s = t.pop();
      } else {
        let o = i.children[s++];
        if (o instanceof be)
          t.push(s), i = o, s = 0;
        else {
          let a = r + o.length, l = e(o, r);
          if (l !== void 0)
            return l;
          r = a + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, s = -1, r, o = -1;
    if (this.blockTiles((a, l) => {
      let c = l + a.length;
      if (e >= l && e <= c) {
        if (a.isWidget() && t >= -1 && t <= 1) {
          if (a.flags & 32)
            return !0;
          a.flags & 16 && (i = void 0);
        }
        (l < e || e == c && (t < -1 ? a.length : a.covers(1))) && (!i || !a.isWidget() && i.isWidget()) && (i = a, s = e - l), (c > e || e == l && (t > 1 ? a.length : a.covers(-1))) && (!r || !a.isWidget() && r.isWidget()) && (r = a, o = e - l);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: s } : { tile: r, offset: o };
  }
}
class be extends yi {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new be(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Ze extends yi {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let s = new Ze(t || document.createElement("div"), e);
    return (!t || !i) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let s = null, r = -1, o = null, a = -1;
    function l(h, d) {
      for (let u = 0, f = 0; u < h.children.length && f <= d; u++) {
        let p = h.children[u], g = f + p.length;
        g >= d && (p.isComposite() ? l(p, d - f) : (!o || o.isHidden && (t > 0 || i && gc(o, p))) && (g > d || p.flags & 32) ? (o = p, a = d - f) : (f < d || p.flags & 16 && !p.isHidden) && (s = p, r = d - f)), f = g;
      }
    }
    l(this, e);
    let c = (t < 0 ? s : o) || s || o;
    return c ? { tile: c, offset: c == s ? r : a } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : pc(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: s, offset: r } = i;
      if (this.dom.contains(s.dom))
        return s.isText() ? new te(s.dom, Math.min(s.dom.nodeValue.length, r)) : s.domPosFor(r, s.flags & 16 ? 1 : s.flags & 32 ? -1 : t);
      let o = i.tile.parent, a = !1;
      for (let l of o.children) {
        if (a)
          return new te(l.dom, 0);
        l == i.tile && (a = !0);
      }
    }
    return new te(this.dom, 0);
  }
}
function pc(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Gt(e);
  return t[t.length - 1] || null;
}
function gc(n, e) {
  let t = n.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class _ extends yi {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new _(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Pe extends I {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    e > i && (e = i);
    let s = e, r = e, o = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? x.chrome || x.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? s-- : r < i && r++;
    let a = wt(this.dom, s, r).getClientRects();
    if (!a.length)
      return null;
    let l = a[(o ? o < 0 : t >= 0) ? 0 : a.length - 1];
    return x.safari && !o && l.width == 0 && (l = Array.prototype.find.call(a, (c) => c.width) || l), o ? ri(l, o < 0) : l || null;
  }
  static of(e, t) {
    let i = new Pe(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class We extends I {
  constructor(e, t, i, s) {
    super(e, t, s), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, i) {
    let s = this.widget.coordsAt(this.dom, e, t);
    if (s)
      return s;
    if (i)
      return ri(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let a = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let l = a ? r.length - 1 : 0; o = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || o.top < o.bottom); l += a ? -1 : 1)
        ;
      return ri(o, !a);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return T.empty;
    let { root: e } = this;
    if (!e)
      return T.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, s, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new We(r, i, e, s);
  }
}
class ai extends I {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return T.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class mc {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: s, index: r, beforeBreak: o, parents: a } = this;
    for (; e || t > 0; )
      if (s.isComposite())
        if (o) {
          if (!e)
            break;
          i && i.break(), e--, o = !1;
        } else if (r == s.children.length) {
          if (!e && !a.length)
            break;
          i && i.leave(s), o = !!s.breakAfter, { tile: s, index: r } = a.pop(), r++;
        } else {
          let l = s.children[r], c = l.breakAfter;
          (t > 0 ? l.length <= e : l.length < e) && (!i || i.skip(l, 0, l.length) !== !1 || !l.isComposite) ? (o = !!c, r++, e -= l.length) : (a.push({ tile: s, index: r }), s = l, r = 0, i && l.isComposite() && i.enter(l));
        }
      else if (r == s.length)
        o = !!s.breakAfter, { tile: s, index: r } = a.pop(), r++;
      else if (e) {
        let l = Math.min(e, s.length - r);
        i && i.skip(s, r, r + l), e -= l, r += l;
      } else
        break;
    return this.tile = s, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class bc {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = s;
  }
}
class xc {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, s) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), a = o.lastChild;
    if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
      let l = o.children[o.children.length - 1] = new Pe(a.dom, a.text + e);
      l.parent = o;
    } else
      o.append(s || Pe.of(e, (r = this.cache.find(Pe)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Ei(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let s = i;
    for (let a = t.marks.length - 1; a >= 0; a--) {
      let l = t.marks[a], c = s.lastChild;
      if (c instanceof _ && c.mark.eq(l.mark))
        c.dom != l.dom && c.setDOM(Ei(l.dom)), s = c;
      else {
        if (this.cache.reused.get(l)) {
          let d = I.get(l.dom);
          d && d.setDOM(Ei(l.dom));
        }
        let h = _.of(l.mark, l.dom);
        s.append(h), s = h;
      }
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
    }
    let r = I.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let o = new Pe(e.text, e.text.nodeValue);
    o.flags |= 8, this.pos = e.range.toB, s.append(o);
  }
  addInlineWidget(e, t, i) {
    let s = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    s || this.flushBuffer();
    let r = this.ensureMarks(t, i);
    !s && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = co);
    let s = Ze.start(e, t || ((i = this.cache.find(Ze)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let s = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r], a;
      if (t > 0 && (a = s.lastChild) && a instanceof _ && a.mark.eq(o))
        s = a, t--;
      else {
        let l = _.of(o, (i = this.cache.find(_, (c) => c.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        s.append(l), s = l, t = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !ws(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(x.ios && ws(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Oi,
        0,
        32
        /* TileFlag.After */
      ) || new We(
        Oi.toDOM(),
        0,
        Oi,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank, i = new bc(e.from, e.to, e.value, t), s = this.wrappers.length;
        for (; s > 0 && (this.wrappers[s - 1].rank - i.rank || this.wrappers[s - 1].to - i.to) < 0; )
          s--;
        this.wrappers.splice(s, 0, i);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let s = t.lastChild;
      if (i.from < this.pos && s instanceof be && s.wrapper.eq(i.wrapper))
        t = s;
      else {
        let r = be.of(i.wrapper, (e = this.cache.find(be, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(r), t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(
      ai,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new ai(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class yc {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let a = this.textOff = Math.min(e, s.length);
      return r ? null : s.slice(0, a);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const li = [We, Ze, Pe, _, ai, be, vi];
for (let n = 0; n < li.length; n++)
  li[n].bucket = n;
class vc {
  constructor(e) {
    this.view = e, this.buckets = li.map(() => []), this.index = li.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, i = 2) {
    let s = e.bucket, r = this.buckets[s], o = this.index[s];
    for (let a = r.length - 1; a >= 0; a--) {
      let l = (a + o) % r.length, c = r[l];
      if ((!t || t(c)) && !this.reused.has(c))
        return r.splice(l, 1), l < o && this.index[s]--, this.reused.set(c, i), c;
    }
    return null;
  }
  findWidget(e, t, i) {
    let s = this.buckets[0];
    if (s.length)
      for (let r = 0, o = 0; ; r++) {
        if (r == s.length) {
          if (o)
            return null;
          o = 1, r = 0;
        }
        let a = s[r];
        if (!this.reused.has(a) && (o == 0 ? a.widget.compare(e) : a.widget.constructor == e.constructor && e.updateDOM(a.dom, this.view, a.widget)))
          return s.splice(r, 1), r < this.index[0] && this.index[0]--, a.widget == e && a.length == t && (a.flags & 497) == i ? (this.reused.set(
            a,
            1
            /* Reused.Full */
          ), a) : (this.reused.set(
            a,
            2
            /* Reused.DOM */
          ), new We(a.dom, t, e, a.flags & -498 | i));
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++)
      this.buckets[e].length = this.index[e] = 0;
  }
}
class wc {
  constructor(e, t, i, s, r) {
    this.view = e, this.decorations = s, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new vc(e), this.text = new yc(e.state.doc), this.builder = new xc(this.cache, new vi(e, e.contentDOM), R.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new mc(t), this.reuseWalker = {
      skip: (o, a, l) => {
        if (this.cache.add(o), o.isComposite())
          return !1;
      },
      enter: (o) => this.cache.add(o),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let s = 0, r = 0, o = 0; ; ) {
      let a = o < e.length ? e[o++] : null, l = a ? a.fromA : this.old.root.length;
      if (l > s) {
        let c = l - s;
        this.preserve(c, !o, !a), s = l, r += c;
      }
      if (!a)
        break;
      t && a.fromA <= t.range.fromA && a.toA >= t.range.toA ? (this.forward(a.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, a.toA), this.emit(t.range.toB, a.toB)) : (this.forward(a.fromA, a.toA), this.emit(r, a.toB)), r = a.toB, s = a.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let s = Cc(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (o, a, l) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(l - a);
          else {
            let c = l > 0 || a < o.length ? We.of(o.widget, this.view, l - a, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            c.flags & 256 ? (c.flags &= -2, this.builder.addBlockWidget(c)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(c, s, r), r = s.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !a && l == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, s, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(a, l), s, r)), r = s.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof ai)
          this.cache.add(o);
        else if (o instanceof _)
          this.builder.ensureLine(null), this.builder.addMark(o, s, r), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), r = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof _ && s.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? s.length && (s.length = r = 0) : o instanceof _ && (s.shift(), r = Math.min(r, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, s = this.builder, r = 0, o = R.spans(this.decorations, e, t, {
      point: (a, l, c, h, d, u) => {
        if (c instanceof $e) {
          if (this.disallowBlockEffectsFor[u]) {
            if (c.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (l > this.view.state.doc.lineAt(a).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = h.length, d > h.length)
            s.continueWidget(l - a);
          else {
            let f = c.widget || (c.block ? et.block : et.inline), p = Sc(c), g = this.cache.findWidget(f, l - a, p) || We.of(f, this.view, l - a, p);
            c.block ? (c.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(g)) : (s.ensureLine(i), s.addInlineWidget(g, h, d));
          }
          i = null;
        } else
          i = kc(i, c);
        l > a && this.text.skip(l - a);
      },
      span: (a, l, c, h) => {
        for (let d = a; d < l; ) {
          let u = this.text.next(Math.min(512, l - d));
          u == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), d++) : (s.ensureLine(i), s.addText(u, c, d == a ? h : c.length), d += u.length), i = null;
        }
      }
    });
    s.addLineStartIfNotCovered(i), this.openWidget = o > r, this.openMarks = o;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let s = e.parentNode; ; s = s.parentNode) {
      let r = I.get(s);
      if (s == this.view.contentDOM)
        break;
      r instanceof _ ? t.push(r) : r?.isLine() ? i = r : r instanceof be || (s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new Ze(s, co) : i || t.push(_.of(new St({ tagName: s.nodeName.toLowerCase(), attributes: Xl(s) }), s)));
    }
    return { line: i, marks: t };
  }
}
function ws(n, e) {
  let t = (i) => {
    for (let s of i.children)
      if ((e ? s.isText() : s.length) || t(s))
        return !0;
    return !1;
  };
  return t(n);
}
function Sc(n) {
  let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  return n.block && (e |= 256), e;
}
const co = { class: "cm-line" };
function kc(n, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (n || (n = { class: "cm-line" }), t && Bn(t, n), i && (n.class += " " + i)), n;
}
function Cc(n) {
  let e = [];
  for (let t = n.parents.length; t > 1; t--) {
    let i = t == n.parents.length ? n.tile : n.parents[t].tile;
    i instanceof _ && e.push(i.mark);
  }
  return e;
}
function Ei(n) {
  let e = I.get(n);
  return e && e.setDOM(n.cloneNode()), n;
}
class et extends bi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
et.inline = /* @__PURE__ */ new et("span");
et.block = /* @__PURE__ */ new et("div");
const Oi = /* @__PURE__ */ new class extends bi {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class Ss {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = j.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new vi(e, e.contentDOM), this.updateInner([new Q(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: d }) => d < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !Bc(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? Mc(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: h, to: d } = this.hasComposition;
      i = new Q(h, d, e.changes.mapPos(h, -1), e.changes.mapPos(d, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (x.ie || x.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, a = this.blockWrappers;
    this.updateDeco();
    let l = Ec(o, this.decorations, e.changes);
    l.length && (i = Q.extendWithRanges(i, l));
    let c = Dc(a, this.blockWrappers, e.changes);
    return c.length && (i = Q.extendWithRanges(i, c)), r && !i.some((h) => h.fromA <= r.range.fromA && h.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, a = new wc(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && I.get(t.text) && a.cache.reused.set(
          I.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = a.run(e, t), fn(o, a.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = x.chrome || x.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof Di && s.push(r.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(no) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, r = s == i, o = !r && !(this.view.state.facet(ue) || i.tabIndex > -1) && dt(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(r || t || o))
      return;
    let a = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, c, h;
    if (l.empty ? h = c = this.inlineDOMNearPos(l.anchor, l.assoc || 1) : (h = this.inlineDOMNearPos(l.head, l.head == l.from ? 1 : -1), c = this.inlineDOMNearPos(l.anchor, l.anchor == l.from ? 1 : -1)), x.gecko && l.empty && !this.hasComposition && Ac(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = h = new te(u, 0), a = !0;
    }
    let d = this.view.observer.selectionRange;
    (a || !d.focusNode || (!ut(c.node, c.offset, d.anchorNode, d.anchorOffset) || !ut(h.node, h.offset, d.focusNode, d.focusOffset)) && !this.suppressWidgetCursorChange(d, l)) && (this.view.observer.ignore(() => {
      x.android && x.chrome && i.contains(d.focusNode) && Lc(d.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = vt(this.view.root);
      if (u) if (l.empty) {
        if (x.gecko) {
          let f = Rc(c.node, c.offset);
          if (f && f != 3) {
            let p = (f == 1 ? Fr : zr)(c.node, c.offset);
            p && (c = new te(p.node, p.offset));
          }
        }
        u.collapse(c.node, c.offset), l.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = l.bidiLevel);
      } else if (u.extend) {
        u.collapse(c.node, c.offset);
        try {
          u.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let f = document.createRange();
        l.anchor > l.head && ([c, h] = [h, c]), f.setEnd(h.node, h.offset), f.setStart(c.node, c.offset), u.removeAllRanges(), u.addRange(f);
      }
      o && this.view.root.activeElement == i && (i.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(c, h)), this.impreciseAnchor = c.precise ? null : new te(d.anchorNode, d.anchorOffset), this.impreciseHead = h.precise ? null : new te(d.focusNode, d.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && ut(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = vt(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let a = o.posAtStart;
    if (t.head == a || t.head == a + o.length)
      return;
    let l = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!l || !c || l.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let d = e.observer.selectionRange;
    e.docView.posFromDOM(d.anchorNode, d.anchorOffset) != t.from && i.collapse(s, r);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let s = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom)
        r = i.dom.childNodes[t];
      else {
        let o = xe(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let a = e.parentNode;
          if (a == i.dom)
            break;
          o == 0 && a.firstChild != a.lastChild && (e == a.firstChild ? o = -1 : o = 1), e = a;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild)
        return s;
      for (; r && !I.get(r); )
        r = r.nextSibling;
      if (!r)
        return s + i.length;
      for (let o = 0, a = s; ; o++) {
        let l = i.children[o];
        if (l.dom == r)
          return a;
        a += l.length + l.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? s + t : s + (t ? i.length : 0) : s;
  }
  domAtPos(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(s, t);
  }
  inlineDOMNearPos(e, t) {
    let i, s = -1, r = !1, o, a = -1, l = !1;
    return this.tile.blockTiles((c, h) => {
      if (c.isWidget()) {
        if (c.flags & 32 && h >= e)
          return !0;
        c.flags & 16 && (r = !0);
      } else {
        let d = h + c.length;
        if (h <= e && (i = c, s = e - h, r = d < e), d >= e && !o && (o = c, a = e - h, l = h > e), h > e && o)
          return !0;
      }
    }), !i && !o ? this.domAtPos(e, t) : (r && o ? i = null : l && i && (o = null), i && t < 0 || !o ? i.domIn(s, t) : o.domIn(a, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof Di ? null : i.coordsInWidget(s, t, !0) : i.coordsIn(s, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function s(r, o) {
      if (r.isComposite())
        for (let a of r.children) {
          if (a.length >= o) {
            let l = s(a, o);
            if (l)
              return l;
          }
          if (o -= a.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let a = ae(r.text, o);
        if (a == o)
          return null;
        let l = wt(r.dom, o, a).getClientRects();
        for (let c = 0; c < l.length; c++) {
          let h = l[c];
          if (c == l.length - 1 || h.top < h.bottom && h.left < h.right)
            return h;
        }
      }
      return null;
    }
    return s(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, a = -1, l = this.view.textDirection == $.LTR, c = 0, h = (d, u, f) => {
      for (let p = 0; p < d.children.length && !(u > s); p++) {
        let g = d.children[p], m = u + g.length, b = g.dom.getBoundingClientRect(), { height: v } = b;
        if (f && !p && (c += b.top - f.top), g instanceof be)
          m > i && h(g, u, b);
        else if (u >= i && (c > 0 && t.push(-c), t.push(v + c), c = 0, o)) {
          let A = g.dom.lastChild, E = A ? Gt(A) : [];
          if (E.length) {
            let S = E[E.length - 1], C = l ? S.right - b.left : b.right - S.left;
            C > a && (a = C, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = m);
          }
        }
        f && p == d.children.length - 1 && (c += f.bottom - b.bottom), u = m + g.breakAfter;
      }
    };
    return h(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? $.RTL : $.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let a = 0, l;
        for (let c of o.children) {
          if (!c.isText() || /[^ -~]/.test(c.text))
            return;
          let h = Gt(c.dom);
          if (h.length != 1)
            return;
          a += h[0].width, l = h[0].height;
        }
        if (a)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: a / o.length,
            textHeight: l
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, s, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Gt(t.firstChild)[0];
      i = t.getBoundingClientRect().height, s = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: s, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let a = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(j.replace({
          widget: new Di(a),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return j.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(xi).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, s = this.view.state.facet(jn).map((r, o) => {
      let a = typeof r == "function";
      return a && (i = !0), a ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, t.push(R.join(s))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(ro).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(io))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (d) {
        ge(this.view.state, d, "scroll handler");
      }
    let { range: i } = e, s = this.coordsAt(i.head, (t = i.assoc) !== null && t !== void 0 ? t : i.empty ? 0 : i.head > i.anchor ? -1 : 1), r;
    if (!s)
      return;
    !i.empty && (r = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (s = {
      left: Math.min(s.left, r.left),
      top: Math.min(s.top, r.top),
      right: Math.max(s.right, r.right),
      bottom: Math.max(s.bottom, r.bottom)
    });
    let o = lo(this.view), a = {
      left: s.left - o.left,
      top: s.top - o.top,
      right: s.right + o.right,
      bottom: s.bottom + o.bottom
    }, { offsetWidth: l, offsetHeight: c } = this.view.scrollDOM;
    if (Zl(this.view.scrollDOM, a, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, c), -c), this.view.textDirection == $.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(i.head, 1);
      h && h.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    fn(this.tile);
  }
}
function fn(n, e) {
  let t = e?.get(n);
  if (t != 1) {
    t == null && n.destroy();
    for (let i of n.children)
      fn(i, e);
  }
}
function Ac(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function ho(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Fr(t.focusNode, t.focusOffset), s = zr(t.focusNode, t.focusOffset), r = i || s;
  if (s && i && s.node != i.node) {
    let a = I.get(s.node);
    if (!a || a.isText() && a.text != s.node.nodeValue)
      r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let l = I.get(i.node);
      !l || l.isText() && l.text != i.node.nodeValue || (r = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Mc(n, e, t) {
  let i = ho(n, t);
  if (!i)
    return null;
  let { node: s, from: r, to: o } = i, a = s.nodeValue;
  if (/[\n\r]/.test(a) || n.state.doc.sliceString(i.from, i.to) != a)
    return null;
  let l = e.invertedDesc;
  return { range: new Q(l.mapPos(r), l.mapPos(o), r, o), text: s };
}
function Rc(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Tc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    _e(e, t, this.changes);
  }
  comparePoint(e, t) {
    _e(e, t, this.changes);
  }
  boundChange(e) {
    _e(e, e, this.changes);
  }
};
function Ec(n, e, t) {
  let i = new Tc();
  return R.compare(n, e, t, i), i.changes;
}
class Oc {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    _e(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    _e(e, e, this.changes);
  }
}
function Dc(n, e, t) {
  let i = new Oc();
  return R.compare(n, e, t, i), i.changes;
}
function Lc(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Bc(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = !0);
  }), t;
}
class Di extends bi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function Pc(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return y.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, a = r;
  t < 0 ? o = ae(s.text, r, !1) : a = ae(s.text, r);
  let l = i(s.text.slice(o, a));
  for (; o > 0; ) {
    let c = ae(s.text, o, !1);
    if (i(s.text.slice(c, o)) != l)
      break;
    o = c;
  }
  for (; a < s.length; ) {
    let c = ae(s.text, a);
    if (i(s.text.slice(a, c)) != l)
      break;
    a = c;
  }
  return y.range(o + s.from, a + s.from);
}
function Ic(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let a = n.viewState.heightOracle.textHeight, l = Math.floor((s - t.top - (n.defaultLineHeight - a) * 0.5) / a);
    r += l * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + ql(o, r, n.state.tabSize);
}
function pn(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let s;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!s || r.type == V.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (s = r);
      }
    }
    return s || i;
  }
  return i;
}
function Nc(n, e, t, i) {
  let s = pn(n, e.head, e.assoc || -1), r = !i || s.type != V.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), a = n.textDirectionAt(s.from), l = n.posAtCoords({
      x: t == (a == $.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (l != null)
      return y.cursor(l, t ? -1 : 1);
  }
  return y.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function ks(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let a = e, l = null; ; ) {
    let c = hc(s, r, o, a, t), h = Ur;
    if (!c) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return a;
      h = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), c = n.visualLineSide(s, !t);
    }
    if (l) {
      if (!l(h))
        return a;
    } else {
      if (!i)
        return c;
      l = i(h);
    }
    a = c;
  }
}
function $c(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let o = i(r);
    return s == pe.Space && (s = o), s == o;
  };
}
function Hc(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return y.cursor(s, e.assoc);
  let o = e.goalColumn, a, l = n.contentDOM.getBoundingClientRect(), c = n.coordsAtPos(s, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), h = n.documentTop;
  if (c)
    o == null && (o = c.left - l.left), a = r < 0 ? c.top : c.bottom;
  else {
    let p = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(l.right - l.left, n.defaultCharacterWidth * (s - p.from))), a = (r < 0 ? p.top : p.bottom) + h;
  }
  let d = l.left + o, u = n.viewState.heightOracle.textHeight >> 1, f = i ?? u;
  for (let p = 0; ; p += u) {
    let g = a + (f + p) * r, m = gn(n, { x: d, y: g }, !1, r);
    if (t ? g > l.bottom : g < l.top)
      return y.cursor(m.pos, m.assoc);
    let b = n.coordsAtPos(m.pos, m.assoc), v = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? v > a : v < a))
      return y.cursor(m.pos, m.assoc, void 0, o);
  }
}
function ft(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (r, o, a) => {
        if (e > r && e < o) {
          let l = i || t || (e - r < o - e ? -1 : 1);
          e = l < 0 ? r : o, i = l;
        }
      });
    if (!i)
      return e;
  }
}
function uo(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let s = e.ranges[i], r = null;
    if (s.empty) {
      let o = ft(n, s.from, 0);
      o != s.from && (r = y.cursor(o, -1));
    } else {
      let o = ft(n, s.from, -1), a = ft(n, s.to, 1);
      (o != s.from || a != s.to) && (r = y.range(s.from == s.anchor ? o : a, s.from == s.head ? o : a));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function Li(n, e, t) {
  let i = ft(n.state.facet(Ct).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : y.cursor(i, i < t.from ? 1 : -1);
}
class oe {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function gn(n, e, t, i) {
  let s = n.contentDOM.getBoundingClientRect(), r = s.top + n.viewState.paddingTop, { x: o, y: a } = e, l = a - r, c;
  for (; ; ) {
    if (l < 0)
      return new oe(0, 1);
    if (l > n.viewState.docHeight)
      return new oe(n.state.doc.length, -1);
    if (c = n.elementAtHeight(l), i == null)
      break;
    if (c.type == V.Text) {
      if (i < 0 ? c.to < n.viewport.from : c.from > n.viewport.to)
        break;
      let u = n.docView.coordsAt(i < 0 ? c.from : c.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= l + r : u.bottom >= l + r))
        break;
    }
    let d = n.viewState.heightOracle.textHeight / 2;
    l = i > 0 ? c.bottom + d : c.top - d;
  }
  if (n.viewport.from >= c.to || n.viewport.to <= c.from) {
    if (t)
      return null;
    if (c.type == V.Text) {
      let d = Ic(n, s, c, o, a);
      return new oe(d, d == c.from ? 1 : -1);
    }
  }
  if (c.type != V.Text)
    return l < (c.top + c.bottom) / 2 ? new oe(c.from, 1) : new oe(c.to, -1);
  let h = n.docView.lineAt(c.from, 2);
  return (!h || h.length != c.length) && (h = n.docView.lineAt(c.from, -2)), new jc(n, o, a, n.textDirectionAt(c.from)).scanTile(h, c.from);
}
class jc {
  constructor(e, t, i, s) {
    this.view = e, this.x = t, this.y = i, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[le.find(s, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[le.find(s, e - i.from, -1, t)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(e, t) {
    let { spans: i, line: s } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + s.from < t);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically and is closest horizontally. The caller is responsible
  // for dividing its content into N pieces, and pass an array with
  // N+1 positions (including the position after the last piece). For
  // a text tile, these will be character clusters, for a composite
  // tile, these will be child tiles.
  scan(e, t, i = !1) {
    let s = 0, r = e.length - 1, o = /* @__PURE__ */ new Set(), a = this.bidiIn(e[0], e[r]), l, c, h = -1, d = 1e9, u;
    e: for (; s < r; ) {
      let p = r - s, g = s + r >> 1;
      t: if (o.has(g)) {
        let b = s + Math.floor(Math.random() * p);
        for (let v = 0; v < p; v++) {
          if (!o.has(b)) {
            g = b;
            break t;
          }
          b++, b == r && (b = s);
        }
        break e;
      }
      o.add(g);
      let m = t(g);
      if (m)
        for (let b = 0; b < m.length; b++) {
          let v = m[b], A = 0;
          if (!(v.width == 0 && m.length > 1)) {
            if (v.bottom < this.y)
              (!l || l.bottom < v.bottom) && (l = v), A = 1;
            else if (v.top > this.y)
              (!c || c.top > v.top) && (c = v), A = -1;
            else {
              let E = v.left > this.x ? this.x - v.left : v.right < this.x ? this.x - v.right : 0, S = Math.abs(E);
              S < d && (h = g, d = S, u = v), E && (A = E < 0 == (this.baseDir == $.LTR) ? -1 : 1);
            }
            A == -1 && (!a || this.baseDirAt(e[g], 1)) ? r = g : A == 1 && (!a || this.baseDirAt(e[g + 1], -1)) && (s = g + 1);
          }
        }
    }
    if (!u) {
      if (!c && !l)
        return { i: e[0], after: !1 };
      let p = l && (!c || this.y - l.bottom < c.top - this.y) ? l : c;
      return this.y = (p.top + p.bottom) / 2, this.scan(e, t, !0);
    }
    if (d && !i) {
      let { top: p, bottom: g } = u;
      if (l && l.bottom > (p + p + g) / 3)
        return this.y = l.bottom - 1, this.scan(e, t, !0);
      if (c && c.top < (p + g + g) / 3)
        return this.y = c.top + 1, this.scan(e, t, !0);
    }
    let f = (a ? this.dirAt(e[h], 1) : this.baseDir) == $.LTR;
    return {
      i: h,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == f
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = ae(e.text, r))
      i.push(t + r);
    i.push(t + e.length);
    let s = this.scan(i, (r) => {
      let o = i[r] - t, a = i[r + 1] - t;
      return wt(e.dom, o, a).getClientRects();
    });
    return s.after ? new oe(i[s.i + 1], -1) : new oe(i[s.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new oe(t, 1);
    if (e.children.length == 1) {
      let a = e.children[0];
      if (a.isText())
        return this.scanText(a, t);
      if (a.isComposite())
        return this.scanTile(a, t);
    }
    let i = [t];
    for (let a = 0, l = t; a < e.children.length; a++)
      i.push(l += e.children[a].length);
    let s = this.scan(i, (a) => {
      let l = e.children[a];
      return l.flags & 48 ? null : (l.dom.nodeType == 1 ? l.dom : wt(l.dom, 0, l.length)).getClientRects();
    }), r = e.children[s.i], o = i[s.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : s.after ? new oe(i[s.i + 1], -1) : new oe(o, 1);
  }
}
const Ve = "￿";
class Wc {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(O.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Ve;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = I.get(s), a = s.nextSibling;
      if (a == t) {
        o?.breakAfter && !a && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let l = I.get(a);
      (o && l ? o.breakAfter : (o ? o.breakAfter : si(s)) || si(a) && (s.nodeName != "BR" || o?.isWidget()) && this.text.length > r) && !zc(a, t) && this.lineBreak(), s = a;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, a;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (a = s.exec(t)) && (r = a.index, o = a[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let l of this.points)
          l.node == e && l.pos > this.text.length && (l.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    let t = I.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Fc(e, i.node, i.offset) ? t : 0));
  }
}
function Fc(n, e, t) {
  for (; ; ) {
    if (!e || t < xe(e))
      return !1;
    if (e == n)
      return !0;
    t = Te(e) + 1, e = e.parentNode;
  }
}
function zc(n, e) {
  let t;
  for (; !(n == e || !n); n = n.nextSibling) {
    let i = I.get(n);
    if (!i?.isWidget())
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let s = i.overrideDOMText;
      if (s?.length)
        return !1;
    }
  return !0;
}
class Cs {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Vc {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView, a = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = fo(e.docView.tile, t, i, 0))) {
      let l = r || o ? [] : Kc(e), c = new Wc(l, e);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = Gc(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, c = r && r.node == l.focusNode && r.offset == l.focusOffset || !ln(e.contentDOM, l.focusNode) ? a.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !ln(e.contentDOM, l.anchorNode) ? a.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), d = e.viewport;
      if ((x.ios || x.chrome) && a.main.empty && c != h && (d.from > 0 || d.to < e.state.doc.length)) {
        let u = Math.min(c, h), f = Math.max(c, h), p = d.from - u, g = d.to - f;
        (p == 0 || p == 1 || u == 0) && (g == 0 || g == -1 || f == e.state.doc.length) && (c = 0, h = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && a.ranges.length > 1)
        this.newSel = a.replaceRange(y.range(h, c));
      else if (e.lineWrapping && h == c && !(a.main.empty && a.main.head == c) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(c, -1), f = 0;
        u && (f = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = y.create([y.cursor(c, f)]);
      } else
        this.newSel = y.single(h, c);
    }
  }
}
function fo(n, e, t, i) {
  if (n.isComposite()) {
    let s = -1, r = -1, o = -1, a = -1;
    for (let l = 0, c = i, h = i; l < n.children.length; l++) {
      let d = n.children[l], u = c + d.length;
      if (c < e && u > t)
        return fo(d, e, t, c);
      if (u >= e && s == -1 && (s = l, r = c), c > t && d.dom.parentNode == n.dom) {
        o = l, a = h;
        break;
      }
      h = u, c = u + d.breakAfter;
    }
    return {
      from: r,
      to: a < 0 ? i + n.length : a,
      startDOM: (s ? n.children[s - 1].dom.nextSibling : null) || n.dom.firstChild,
      endDOM: o < n.children.length && o >= 0 ? n.children[o].dom : null
    };
  } else return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null;
}
function po(n, e) {
  let t, { newSel: i } = e, { state: s } = n, r = s.selection.main, o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: a, to: l } = e.bounds, c = r.from, h = null;
    (o === 8 || x.android && e.text.length < l - a) && (c = r.to, h = "end");
    let d = s.doc.sliceString(a, l, Ve), u, f;
    !r.empty && r.from >= a && r.to <= l && (e.typeOver || d != e.text) && d.slice(0, r.from - a) == e.text.slice(0, r.from - a) && d.slice(r.to - a) == e.text.slice(u = e.text.length - (d.length - (r.to - a))) ? t = {
      from: r.from,
      to: r.to,
      insert: T.of(e.text.slice(r.from - a, u).split(Ve))
    } : (f = go(d, e.text, c - a, h)) && (x.chrome && o == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == Ve + Ve && f.toB--, t = {
      from: a + f.from,
      to: a + f.toA,
      insert: T.of(e.text.slice(f.from, f.toB).split(Ve))
    });
  } else i && (!n.hasFocus && s.facet(ue) || ci(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((x.mac || x.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: T.of([t.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(r.from).to < r.to && n.docView.lineHasWidget(r.to) && n.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: s.toText(n.inputState.insertingText)
  } : x.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: T.of([" "]) }), t)
    return Wn(n, t, i, o);
  if (i && !ci(i, r)) {
    let a = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (a = !0), l = n.inputState.lastSelectionOrigin, l == "select.pointer" && (i = uo(s.facet(Ct).map((c) => c(n)), i))), n.dispatch({ selection: i, scrollIntoView: a, userEvent: l }), !0;
  } else
    return !1;
}
function Wn(n, e, t, i = -1) {
  if (x.ios && n.inputState.flushIOSKey(e))
    return !0;
  let s = n.state.selection.main;
  if (x.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Ye(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && Ye(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && Ye(n.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, a = () => o || (o = qc(n, e, t));
  return n.state.facet(Qr).some((l) => l(n, e.from, e.to, r, a)) || n.dispatch(a()), !0;
}
function qc(n, e, t) {
  let i, s = n.state, r = s.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let l = e.from < r.from ? -1 : 1, c = l < 0 ? r.from : r.to, h = ft(s.facet(Ct).map((d) => d(n)), c, l);
    e.from == h && (o = h);
  }
  if (o > -1)
    i = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", c = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + c));
  } else {
    let l = s.changes(e), c = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && (n.inputState.composing >= 0 || n.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), d, u = t && ho(n, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        d = { from: u.from, to: u.to - p };
      } else
        d = n.state.doc.lineAt(r.head);
      let f = r.to - e.to;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: c || p.map(l) };
        let g = p.to - f, m = g - h.length;
        if (n.state.sliceDoc(m, g) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= d.from && m <= d.to)
          return { range: p };
        let b = s.changes({ from: m, to: g, insert: e.insert }), v = p.to - r.to;
        return {
          changes: b,
          range: c ? y.range(Math.max(0, c.anchor + v), Math.max(0, c.head + v)) : p.map(b)
        };
      });
    } else
      i = {
        changes: l,
        selection: c && s.selection.replaceRange(c)
      };
  }
  let a = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, a += ".compose", n.inputState.compositionFirstChange && (a += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: a, scrollIntoView: !0 });
}
function go(n, e, t, i) {
  let s = Math.min(n.length, e.length), r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && n.length == e.length)
    return null;
  let o = n.length, a = e.length;
  for (; o > 0 && a > 0 && n.charCodeAt(o - 1) == e.charCodeAt(a - 1); )
    o--, a--;
  if (i == "end") {
    let l = Math.max(0, r - Math.min(o, a));
    t -= o + l - r;
  }
  if (o < r && n.length < e.length) {
    let l = t <= r && t >= o ? r - t : 0;
    r -= l, a = r + (a - o), o = r;
  } else if (a < r) {
    let l = t <= r && t >= a ? r - t : 0;
    r -= l, o = r + (o - a), a = r;
  }
  return { from: r, toA: o, toB: a };
}
function Kc(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new Cs(t, i)), (s != t || r != i) && e.push(new Cs(s, r))), e;
}
function Gc(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null;
}
function ci(n, e) {
  return e.head == n.main.head && e.anchor == n.main.anchor;
}
class Uc {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, x.safari && e.contentDOM.addEventListener("input", () => null), x.gecko && lh(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !th(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers)
        s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = _c(e), i = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, a = i[r];
        a && o != !a.handlers.length && (s.removeEventListener(r, this.handleEvent), a = null), a || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && bo.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), x.android && x.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return x.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = mo.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Yc.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ye(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : x.safari && !x.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function As(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      ge(t.state, s);
    }
  };
}
function _c(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec, r = s && s.plugin.domEventHandlers, o = s && s.plugin.domEventObservers;
    if (r)
      for (let a in r) {
        let l = r[a];
        l && t(a).handlers.push(As(i.value, l));
      }
    if (o)
      for (let a in o) {
        let l = o[a];
        l && t(a).observers.push(As(i.value, l));
      }
  }
  for (let i in ie)
    t(i).handlers.push(ie[i]);
  for (let i in Y)
    t(i).observers.push(Y[i]);
  return e;
}
const mo = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Yc = "dthko", bo = [16, 17, 18, 20, 91, 92, 224, 225], Pt = 6;
function It(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Xc(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Jc {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Hr(e.contentDOM), this.atoms = e.state.facet(Ct).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(O.allowMultipleSelections) && Qc(e, t), this.dragging = eh(e, t) && vo(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Xc(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, s = 0, r = 0, o = this.view.win.innerWidth, a = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: a } = this.scrollParents.y.getBoundingClientRect());
    let l = lo(this.view);
    e.clientX - l.left <= s + Pt ? t = -It(s - e.clientX) : e.clientX + l.right >= o - Pt && (t = It(e.clientX - o)), e.clientY - l.top <= r + Pt ? i = -It(r - e.clientY) : e.clientY + l.bottom >= a - Pt && (i = It(e.clientY - a)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = uo(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Qc(n, e) {
  let t = n.state.facet(_r);
  return t.length ? t[0](e) : x.mac ? e.metaKey : e.ctrlKey;
}
function Zc(n, e) {
  let t = n.state.facet(Yr);
  return t.length ? t[0](e) : x.mac ? !e.altKey : !e.ctrlKey;
}
function eh(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = vt(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function th(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = I.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const ie = /* @__PURE__ */ Object.create(null), Y = /* @__PURE__ */ Object.create(null), xo = x.ie && x.ie_version < 15 || x.ios && x.webkit_version < 604;
function ih(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), yo(n, t.value);
  }, 50);
}
function wi(n, e, t) {
  for (let i of n.facet(e))
    t = i(t, n);
  return t;
}
function yo(n, e) {
  e = wi(n.state, Nn, e);
  let { state: t } = n, i, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (mn != null && t.selection.ranges.every((l) => l.empty) && mn == r.toString()) {
    let l = -1;
    i = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == l)
        return { range: c };
      l = h.from;
      let d = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: d },
        range: y.cursor(c.from + d.length)
      };
    });
  } else o ? i = t.changeByRange((l) => {
    let c = r.line(s++);
    return {
      changes: { from: l.from, to: l.to, insert: c.text },
      range: y.cursor(l.from + c.length)
    };
  }) : i = t.replaceSelection(r);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Y.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Y.wheel = Y.mousewheel = (n) => {
  n.inputState.lastWheelEvent = Date.now();
};
ie.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), !1);
Y.touchstart = (n, e) => {
  let t = n.inputState, i = e.targetTouches[0];
  t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
Y.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
ie.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of n.state.facet(Xr))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = sh(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Jc(n, e, t, i)), i && n.observer.ignore(() => {
      jr(n.contentDOM);
      let r = n.root.activeElement;
      r && !r.contains(n.contentDOM) && r.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  } else
    n.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Ms(n, e, t, i) {
  if (i == 1)
    return y.cursor(e, t);
  if (i == 2)
    return Pc(n.state, e, t);
  {
    let s = n.docView.lineAt(e, t), r = n.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, a = s ? s.posAtEnd : r.to;
    return a < n.state.doc.length && a == r.to && a++, y.range(o, a);
  }
}
const nh = x.ie && x.ie_version <= 11;
let Rs = null, Ts = 0, Es = 0;
function vo(n) {
  if (!nh)
    return n.detail;
  let e = Rs, t = Es;
  return Rs = n, Es = Date.now(), Ts = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Ts + 1) % 3 : 1;
}
function sh(n, e) {
  let t = n.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = vo(e), s = n.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, a) {
      let l = n.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), c, h = Ms(n, l.pos, l.assoc, i);
      if (t.pos != l.pos && !o) {
        let d = Ms(n, t.pos, t.assoc, i), u = Math.min(d.from, h.from), f = Math.max(d.to, h.to);
        h = u < h.from ? y.range(u, f, h.assoc) : y.range(f, u, h.assoc);
      }
      return o ? s.replaceRange(s.main.extend(h.from, h.to, h.assoc)) : a && i == 1 && s.ranges.length > 1 && (c = rh(s, l.pos)) ? c : a ? s.addRange(h) : y.create([h]);
    }
  };
}
function rh(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return y.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
ie.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let s = n.docView.tile.nearest(e.target);
    if (s && s.isWidget()) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = y.range(r, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", wi(n.state, $n, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
ie.dragend = (n) => (n.inputState.draggedContent = null, !1);
function Os(n, e, t, i) {
  if (t = wi(n.state, Nn, t), !t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = n.inputState, o = i && r && Zc(n, e) ? { from: r.from, to: r.to } : null, a = { from: s, insert: t }, l = n.state.changes(o ? [o, a] : a);
  n.focus(), n.dispatch({
    changes: l,
    selection: { anchor: l.mapPos(s, -1), head: l.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), n.inputState.draggedContent = null;
}
ie.drop = (n, e) => {
  if (!e.dataTransfer)
    return !1;
  if (n.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), s = 0, r = () => {
      ++s == t.length && Os(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let a = new FileReader();
      a.onerror = r, a.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(a.result) || (i[o] = a.result), r();
      }, a.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Os(n, e, i, !0), !0;
  }
  return !1;
};
ie.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = xo ? null : e.clipboardData;
  return t ? (yo(n, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (ih(n), !1);
};
function oh(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function ah(n) {
  let e = [], t = [], i = !1;
  for (let s of n.selection.ranges)
    s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), s = o.number;
    }
    i = !0;
  }
  return { text: wi(n, $n, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let mn = null;
ie.copy = ie.cut = (n, e) => {
  if (!dt(n.contentDOM, n.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: s } = ah(n.state);
  if (!t && !s)
    return !1;
  mn = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = xo ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (oh(n, t), !1);
};
const wo = /* @__PURE__ */ nt.define();
function So(n, e) {
  let t = [];
  for (let i of n.facet(Zr)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t.length ? n.update({ effects: t, annotations: wo.of(!0) }) : null;
}
function ko(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = So(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Y.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), ko(n);
};
Y.blur = (n) => {
  n.observer.clearSelectionRange(), ko(n);
};
Y.compositionstart = Y.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
Y.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, x.chrome && x.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
Y.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
ie.beforeinput = (n, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (n.inputState.insertingText = e.data, n.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && n.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let a = o[0], l = n.posAtDOM(a.startContainer, a.startOffset), c = n.posAtDOM(a.endContainer, a.endOffset);
      return Wn(n, { from: l, to: c, insert: n.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (x.chrome && x.android && (s = mo.find((r) => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return x.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), x.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => Y.compositionend(n, e), 20), !1;
};
const Ds = /* @__PURE__ */ new Set();
function lh(n) {
  Ds.has(n) || (Ds.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Ls = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let tt = !1;
function Bs() {
  tt = !1;
}
class ch {
  constructor(e) {
    this.lineWrapping = e, this.doc = T.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Ls.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let a = Ls.indexOf(e) > -1, l = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != a;
    if (this.lineWrapping = a, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = r, l) {
      this.heightSamples = {};
      for (let c = 0; c < o.length; c++) {
        let h = o[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return l;
  }
}
class hh {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class ee {
  /**
  @internal
  */
  constructor(e, t, i, s, r) {
    this.from = e, this.length = t, this.top = i, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? V.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof $e ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new ee(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var L = /* @__PURE__ */ (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(L || (L = {}));
const Ut = 1e-3;
class U {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Ut && (tt = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return U.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this, o = i.doc;
    for (let a = s.length - 1; a >= 0; a--) {
      let { fromA: l, toA: c, fromB: h, toB: d } = s[a], u = r.lineAt(l, L.ByPosNoHeight, i.setDoc(t), 0, 0), f = u.to >= c ? u : r.lineAt(c, L.ByPosNoHeight, i, 0, 0);
      for (d += f.to - c, c = f.to; a > 0 && u.from <= s[a - 1].toA; )
        l = s[a - 1].fromA, h = s[a - 1].fromB, a--, l < u.from && (u = r.lineAt(l, L.ByPosNoHeight, i, 0, 0));
      h += u.from - l, l = u.from;
      let p = Fn.build(i.setDoc(o), e, h, d);
      r = hi(r, r.replace(l, c, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new X(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, s = 0, r = 0;
    for (; ; )
      if (t == i)
        if (s > r * 2) {
          let a = e[t - 1];
          a.break ? e.splice(--t, 1, a.left, null, a.right) : e.splice(--t, 1, a.left, a.right), i += 1 + a.break, s -= a.size;
        } else if (r > s * 2) {
          let a = e[i];
          a.break ? e.splice(i, 1, a.left, null, a.right) : e.splice(i, 1, a.left, a.right), i += 2 + a.break, r -= a.size;
        } else
          break;
      else if (s < r) {
        let a = e[t++];
        a && (s += a.size);
      } else {
        let a = e[--i];
        a && (r += a.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new uh(U.of(e.slice(0, t)), o, U.of(e.slice(i)));
  }
}
function hi(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (tt = !0), e);
}
U.prototype.size = 1;
const dh = /* @__PURE__ */ j.replace({});
class Co extends U {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new ee(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, s) {
    return this.spaceAbove && e < i + this.spaceAbove ? new ee(s, 0, i, this.spaceAbove, dh) : this.mainBlock(i, s);
  }
  lineAt(e, t, i, s, r) {
    let o = this.mainBlock(s, r);
    return this.spaceAbove ? this.blockAt(0, i, s, r).join(o) : o;
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.lineAt(0, L.ByPos, i, s, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more && this.setMeasuredHeight(s), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class X extends Co {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new ee(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof X || s instanceof F && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof F ? s = new X(s.length, this.height, this.spaceAbove) : s.height = this.height, this.outdated || (s.outdated = !1), s) : U.of(i);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more ? this.setMeasuredHeight(s) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class F extends U {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - i + 1, o, a = 0;
    if (e.lineWrapping) {
      let l = Math.min(this.height, e.lineHeight * r);
      o = l / r, this.length > r + 1 && (a = (this.height - l) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: a };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, perLine: a, perChar: l } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let c = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), h = t.doc.lineAt(c), d = a + h.length * l, u = Math.max(i, e - d / 2);
      return new ee(h.from, h.length, u, d, 0);
    } else {
      let c = Math.max(0, Math.min(o - r, Math.floor((e - i) / a))), { from: h, length: d } = t.doc.line(r + c);
      return new ee(h, d, i + a * c, a, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == L.ByHeight)
      return this.blockAt(e, i, s, r);
    if (t == L.ByPosNoHeight) {
      let { from: f, to: p } = i.doc.lineAt(e);
      return new ee(f, p - f, 0, 0, 0);
    }
    let { firstLine: o, perLine: a, perChar: l } = this.heightMetrics(i, r), c = i.doc.lineAt(e), h = a + c.length * l, d = c.number - o, u = s + a * d + l * (c.from - r - d);
    return new ee(c.from, c.length, Math.max(s, Math.min(u, s + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: a, perLine: l, perChar: c } = this.heightMetrics(i, r);
    for (let h = e, d = s; h <= t; ) {
      let u = i.doc.lineAt(h);
      if (h == e) {
        let p = u.number - a;
        d += l * p + c * (e - r - p);
      }
      let f = l + c * u.length;
      o(new ee(u.from, u.length, d, f, 0)), d += f, h = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof F ? i[i.length - 1] = new F(r.length + s) : i.push(null, new F(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof F ? i[0] = new F(e + r.length) : i.unshift(new F(e - 1), null);
    }
    return U.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new F(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new F(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], a = Math.max(t, s.from), l = -1;
      for (s.from > t && o.push(new F(s.from - t - 1).updateHeight(e, t)); a <= r && s.more; ) {
        let h = e.doc.lineAt(a).length;
        o.length && o.push(null);
        let d = s.heights[s.index++], u = 0;
        d < 0 && (u = -d, d = s.heights[s.index++]), l == -1 ? l = d : Math.abs(d - l) >= Ut && (l = -2);
        let f = new X(h, d, u);
        f.outdated = !1, o.push(f), a += h + 1;
      }
      a <= r && o.push(null, new F(r - a).updateHeight(e, a));
      let c = U.of(o);
      return (l < 0 || Math.abs(c.height - this.height) >= Ut || Math.abs(l - this.heightMetrics(e, t).perLine) >= Ut) && (tt = !0), hi(this, c);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class uh extends U {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height, a = r + this.left.length + this.break, l = t == L.ByHeight ? e < o : e < a, c = l ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, a);
    if (this.break || (l ? c.to < a : c.from > a))
      return c;
    let h = t == L.ByPosNoHeight ? L.ByPosNoHeight : L.ByPos;
    return l ? c.join(this.right.lineAt(a, h, i, o, a)) : this.left.lineAt(a, h, i, s, r).join(c);
  }
  forEachLine(e, t, i, s, r, o) {
    let a = s + this.left.height, l = r + this.left.length + this.break;
    if (this.break)
      e < l && this.left.forEachLine(e, t, i, s, r, o), t >= l && this.right.forEachLine(e, t, i, a, l, o);
    else {
      let c = this.lineAt(l, L.ByPos, i, s, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, s, r, o), c.to >= e && c.from <= t && o(c), t > c.to && this.right.forEachLine(c.to + 1, t, i, a, l, o);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let a of i)
      r.push(a);
    if (e > 0 && Ps(r, o - 1), t < this.length) {
      let a = r.length;
      this.decomposeRight(t, r), Ps(r, a);
    }
    return U.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? U.of(this.break ? [e, null, t] : [e, t]) : (this.left = hi(this.left, e), this.right = hi(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this, a = t + r.length + this.break, l = null;
    return s && s.from <= t + r.length && s.more ? l = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= a + o.length && s.more ? l = o = o.updateHeight(e, a, i, s) : o.updateHeight(e, a, i), l ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ps(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof F && (i = n[e + 1]) instanceof F && n.splice(e - 1, 3, new F(t.length + 1 + i.length));
}
const fh = 5;
class Fn {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof X ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new X(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Co(o, s, i)) : (o || r || s >= fh) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new X(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new F(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof X)
      return e;
    let t = new X(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof X) && !this.isCovered ? this.nodes.push(new X(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof X && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, s) {
    let r = new Fn(i, e);
    return R.spans(t, i, s, r, 0), r.finish(i);
  }
}
function ph(n, e, t) {
  let i = new gh();
  return R.compare(n, e, t, i, 0), i.changes;
}
class gh {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && _e(e, t, this.changes, 5);
  }
}
function mh(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), a = Math.max(0, t.top), l = Math.min(s.innerHeight, t.bottom);
  for (let c = n.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let h = c, d = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && d.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), a = Math.max(a, u.top), l = Math.min(c == n.parentNode ? s.innerHeight : l, u.bottom);
      }
      c = d.position == "absolute" || d.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: a - (t.top + e),
    bottom: Math.max(a, l) - (t.top + e)
  };
}
function bh(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function xh(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Bi {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.size = i, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return j.replace({
      widget: new yh(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class yh extends bi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Is {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Ns, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = $.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet(Hn).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new ch(i), this.stateDeco = $s(t), this.heightMap = U.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle.setDoc(t.doc), [new Q(0, 0, 0, t.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = j.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Nt(r, o));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Ns : new zn(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(lt(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = $s(this.state);
    let s = e.changedRanges, r = Q.extendWithRanges(s, ph(i, this.stateDeco, e ? e.changes : W.empty(this.state.doc.length))), o = this.heightMap.height, a = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    Bs(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || tt) && (e.flags |= 2), a ? (this.scrollAnchorPos = e.changes.mapPos(a.from, -1), this.scrollAnchorHeight = a.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let l = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < l.from || t.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, t));
    let c = l.from != this.viewport.from || l.to != this.viewport.to;
    this.viewport = l, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(to) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? $.RTL : $.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", a = t.getBoundingClientRect(), l = o || this.mustMeasureContent || this.contentDOMHeight != a.height;
    this.contentDOMHeight = a.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (a.width && a.height) {
      let { scaleX: S, scaleY: C } = $r(t, a);
      (S > 5e-3 && Math.abs(this.scaleX - S) > 5e-3 || C > 5e-3 && Math.abs(this.scaleY - C) > 5e-3) && (this.scaleX = S, this.scaleY = C, c |= 16, o = l = !0);
    }
    let d = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d || this.paddingBottom != u) && (this.paddingTop = d, this.paddingBottom = u, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (l = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let f = Hr(this.view.contentDOM, !1).y;
    f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Wr(this.scrollParent || e.win);
    let g = (this.printing ? xh : mh)(t, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v != this.inView && (this.inView = v, v && (l = !0)), !this.inView && !this.scrollTarget && !bh(e.dom))
      return 0;
    let A = a.width;
    if ((this.contentDOMWidth != A || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = a.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), l) {
      let S = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(S) && (o = !0), o || s.lineWrapping && Math.abs(A - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: C, charWidth: B, textHeight: ne } = e.docView.measureTextSize();
        o = C > 0 && s.refresh(r, C, B, ne, Math.max(5, A / B), S), o && (e.docView.minWidth = 0, c |= 16);
      }
      m > 0 && b > 0 ? h = Math.max(m, b) : m < 0 && b < 0 && (h = Math.min(m, b)), Bs();
      for (let C of this.viewports) {
        let B = C.from == this.viewport.from ? S : e.docView.measureVisibleLineHeights(C);
        this.heightMap = (o ? U.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle, [new Q(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new hh(C.from, B));
      }
      tt && (c |= 2);
    }
    let E = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return E && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || E) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: a } = this, l = new Nt(s.lineAt(o - i * 1e3, L.ByHeight, r, 0, 0).from, s.lineAt(a + (1 - i) * 1e3, L.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < l.from || c > l.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), d = s.lineAt(c, L.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (d.top + d.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < l.from ? u = d.top : u = d.bottom - h, l = new Nt(s.lineAt(u - 1e3 / 2, L.ByHeight, r, 0, 0).from, s.lineAt(u + h + 1e3 / 2, L.ByHeight, r, 0, 0).to);
      }
    }
    return l;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new Nt(this.heightMap.lineAt(i, L.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, L.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, L.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, L.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: a } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= a + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < a + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new Bi(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != $.LTR && !i)
      return [];
    let a = [], l = (h, d, u, f) => {
      if (d - h < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let b of g)
        if (b > h && b < d) {
          l(h, b - 10, u, f), l(b + 10, d, u, f);
          return;
        }
      let m = wh(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - h) < r && Math.abs(b.to - d) < r && !g.some((v) => b.from < v && b.to > v));
      if (!m) {
        if (d < u.to && t && i && t.visibleRanges.some((A) => A.from <= d && A.to >= d)) {
          let A = t.moveToLineBoundary(y.cursor(d), !1, !0).head;
          A > h && (d = A);
        }
        let b = this.gapSize(u, h, d, f), v = i || b < 2e6 ? b : 2e6;
        m = new Bi(h, d, b, v);
      }
      a.push(m);
    }, c = (h) => {
      if (h.length < o || h.type != V.Text)
        return;
      let d = vh(h.from, h.to, this.stateDeco);
      if (d.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, p;
      if (i) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (u != null) {
          let v = Ht(d, u), A = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = v - A, b = v + A;
        } else
          m = (this.visibleTop - h.top - g) / h.height, b = (this.visibleBottom - h.top + g) / h.height;
        f = $t(d, m), p = $t(d, b);
      } else {
        let g = d.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let C of e)
            C.from >= h.from && C.from < h.to && C.size != C.displaySize && C.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = C.size - C.displaySize);
        let v = this.pixelViewport.left + b, A = this.pixelViewport.right + b, E, S;
        if (u != null) {
          let C = Ht(d, u), B = ((A - v) / 2 + m) / g;
          E = C - B, S = C + B;
        } else
          E = (v - m) / g, S = (A + m) / g;
        f = $t(d, E), p = $t(d, S);
      }
      f > h.from && l(h.from, f, h, d), p < h.to && l(p, h.to, h, d);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return a;
  }
  gapSize(e, t, i, s) {
    let r = Ht(s, i) - Ht(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Bi.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = j.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    R.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], a = i[r];
        (o.from != a.from || o.to != a.to) && (s |= 4, e && e.mapPos(o.from, -1) == a.from && e.mapPos(o.to, 1) == a.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || lt(this.heightMap.lineAt(e, L.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || lt(this.heightMap.lineAt(this.scaler.fromDOM(e), L.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return lt(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Nt {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function vh(n, e, t) {
  let i = [], s = n, r = 0;
  return R.spans(t, n, e, {
    span() {
    },
    point(o, a) {
      o > s && (i.push({ from: s, to: o }), r += o - s), s = a;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function $t({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], a = o - r;
    if (i <= a)
      return r + i;
    i -= a;
  }
}
function Ht(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function wh(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const Ns = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  }
};
function $s(n) {
  let e = n.facet(xi).filter((i) => typeof i != "function"), t = n.facet(jn).filter((i) => typeof i != "function");
  return t.length && e.push(R.join(t)), e;
}
class zn {
  constructor(e, t, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: a, to: l }) => {
      let c = t.lineAt(a, L.ByPos, e, 0, 0).top, h = t.lineAt(l, L.ByPos, e, 0, 0).bottom;
      return s += h - c, { from: a, to: l, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let a of this.viewports)
      a.domTop = o + (a.top - r) * this.scale, o = a.domBottom = a.domTop + (a.bottom - a.top), r = a.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return s + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof zn ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function lt(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new ee(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => lt(s, e)) : n._content);
}
const jt = /* @__PURE__ */ w.define({ combine: (n) => n.join(" ") }), bn = /* @__PURE__ */ w.define({ combine: (n) => n.indexOf(!0) > -1 }), xn = /* @__PURE__ */ Qe.newName(), Ao = /* @__PURE__ */ Qe.newName(), Mo = /* @__PURE__ */ Qe.newName(), Ro = { "&light": "." + Ao, "&dark": "." + Mo };
function yn(n, e, t) {
  return new Qe(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return n;
        if (!t || !t[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return t[s];
      }) : n + " " + i;
    }
  });
}
const Sh = /* @__PURE__ */ yn("." + xn, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    userSelect: "none",
    // #1708
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Ro), kh = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Pi = x.ie && x.ie_version <= 11;
class Ch {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new ec(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (x.ie && x.ie_version <= 11 || x.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && x.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(x.chrome && x.chrome_version < 126) && (this.editContext = new Mh(e), e.state.facet(ue) && (e.contentDOM.editContext = this.editContext.editContext)), Pi && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(ue) ? i.root.activeElement != this.dom : !dt(this.dom, s))
      return;
    let r = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (x.ie && x.ie_version <= 11 || x.android && x.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && ut(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = vt(e.root);
    if (!t)
      return !1;
    let i = x.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Ah(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = dt(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && ic(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, kh), Pi && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Pi && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Ye(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && dt(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new Vc(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = po(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !ci(this.view.state.selection, t.newSel.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Hs(t, e.previousSibling || e.target.previousSibling, -1), s = Hs(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(ue) != e.state.facet(ue) && (e.view.contentDOM.editContext = e.state.facet(ue) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Hs(n, e, t) {
  for (; e; ) {
    let i = I.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function js(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, r = e.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  return ut(o.node, o.offset, s, r) && ([t, i, s, r] = [s, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r };
}
function Ah(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return js(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), t ? js(n, t) : null;
}
class Mh {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: r, head: o } = s, a = this.toEditorPos(i.updateRangeStart), l = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: a, drifted: !1 });
      let c = l - a > i.text.length;
      a == this.from && r < this.from ? a = r : l == this.to && r > this.to && (l = r);
      let h = go(e.state.sliceDoc(a, l), i.text, (c ? s.from : s.to) - a, c ? "end" : null);
      if (!h) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        ci(u, s) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let d = {
        from: h.from + a,
        to: h.toA + a,
        insert: T.of(i.text.slice(h.from, h.toB).split(`
`))
      };
      if ((x.mac || x.android) && d.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (d = { from: a, to: l, insert: T.of([i.text.replace(".", " ")]) }), this.pendingContextChange = d, !e.state.readOnly) {
        let u = this.to - this.from + (d.to - d.from + d.insert.length);
        Wn(e, d, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), d.from < d.to && !d.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), a = this.toEditorPos(i.rangeEnd); o < a; o++) {
        let l = e.coordsForChar(o);
        r = l && new DOMRect(l.left, l.top, l.right - l.left, l.bottom - l.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, a = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(a)) {
          let l = this.toEditorPos(r.rangeStart), c = this.toEditorPos(r.rangeEnd);
          if (l < c) {
            let h = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(a) ? 1 : 2}px`;
            s.push(j.mark({ attributes: { style: h } }).range(l, c));
          }
        }
      }
      e.dispatch({ effects: no.of(j.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = vt(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((r, o, a, l, c) => {
      if (i)
        return;
      let h = c.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(c)) {
          s = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), c.toString()), this.to += h;
      }
      t += h;
    }), s && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class M {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || tc(e.parent) || document, this.viewState = new Is(this, e.state || O.create(e)), e.scrollTo && e.scrollTo.is(Bt) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(qe).map((s) => new Ti(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new Ch(this), this.inputState = new Uc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ss(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof K ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, s, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, a = 0, l = null;
    e.some((u) => u.annotation(wo)) ? (this.inputState.notifiedFocused = o, a = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, l = So(r, o), l || (a = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(O.phrases) != this.state.facet(O.phrases))
      return this.setState(r);
    s = oi.create(this, r, e), s.flags |= a;
    let d = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (d && (d = d.map(u.changes)), u.scrollIntoView) {
          let { main: f } = u.state.selection, { x: p, y: g } = this.state.facet(M.cursorScrollMargin);
          d = new Xe(f.empty ? f : y.cursor(f.head, f.head > f.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let f of u.effects)
          f.is(Bt) && (d = f.value.clip(this.state));
      }
      this.viewState.update(s, d), this.bidiCache = di.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(at) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(jt) != s.state.facet(jt) && (this.viewState.mustMeasureContent = !0), (t || i || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(un))
        try {
          u(s);
        } catch (f) {
          ge(this.state, f, "update listener");
        }
    (l || h) && Promise.resolve().then(() => {
      l && this.state == l.startState && this.dispatch(l), h && !po(this, h) && c.force && Ye(this.contentDOM, c.key, c.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Is(this, e), this.plugins = e.facet(qe).map((i) => new Ti(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Ss(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(qe), i = e.state.facet(qe);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new Ti(r));
        else {
          let a = this.plugins[o];
          a.mustUpdate = e, s.push(a);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          ge(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let a = 0; ; a++) {
        if (o < 0)
          if (Wr(i || this.win))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let f = this.viewState.scrollAnchorAt(s);
            r = f.from, o = f.top;
          }
        this.updateState = 1;
        let l = this.viewState.measure();
        if (!l && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (a > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        l & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let h = c.map((f) => {
          try {
            return f.read(this);
          } catch (p) {
            return ge(this.state, p), Ws;
          }
        }), d = oi.create(this, this.state, []), u = !1;
        d.flags |= l, t ? t.flags |= l : t = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), u = this.docView.update(d), u && this.docViewUpdate());
        for (let f = 0; f < c.length; f++)
          if (h[f] != Ws)
            try {
              let p = c[f];
              p.write && p.write(h[f], this);
            } catch (p) {
              ge(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !d.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o) / this.scaleY;
              if ((p > 1 || p < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                s = s + p, i ? i.scrollTop += p : this.win.scrollBy(0, p), o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let a of this.state.facet(un))
        a(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return xn + " " + (this.state.facet(bn) ? Mo : Ao) + " " + this.state.facet(jt);
  }
  updateAttrs() {
    let e = Fs(this, so, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(ue) ? "true" : "false",
      class: "cm-content",
      style: `${x.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Fs(this, Hn, t);
    let i = this.observer.ignore(() => {
      let s = ms(this.contentDOM, this.contentAttrs, t), r = ms(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(M.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(at);
    let e = this.state.facet(M.cspNonce);
    Qe.mount(this.root, this.styleModules.concat(Sh).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return Li(this, e, ks(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Li(this, e, ks(this, e, t, (i) => $c(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return y.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return Nc(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return Li(this, e, Hc(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let i = gn(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), gn(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[le.find(r, e - s.from, -1, t)];
    return ri(i, o.dir == $.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(eo) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > Rh)
      return Gr(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Kr(r.isolates, i = ys(this, e))))
        return r.order;
    i || (i = ys(this, e));
    let s = cc(e.text, t, i);
    return this.bidiCache.push(new di(e.from, e.to, t, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || x.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      jr(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    var i, s, r, o;
    return Bt.of(new Xe(typeof e == "number" ? y.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (s = t.x) !== null && s !== void 0 ? s : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (o = t.xMargin) !== null && o !== void 0 ? o : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Bt.of(new Xe(y.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return je.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return je.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = Qe.newName(), s = [jt.of(i), at.of(yn(`.${i}`, e))];
    return t && t.dark && s.push(bn.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return On.lowest(at.of(yn("." + xn, e, Ro)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && I.get(i) || I.get(e);
    return ((t = s?.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
M.styleModule = at;
M.inputHandler = Qr;
M.clipboardInputFilter = Nn;
M.clipboardOutputFilter = $n;
M.scrollHandler = io;
M.focusChangeEffect = Zr;
M.perLineTextDirection = eo;
M.exceptionSink = Jr;
M.updateListener = un;
M.editable = ue;
M.mouseSelectionStyle = Xr;
M.dragMovesSelection = Yr;
M.clickAddsSelectionRange = _r;
M.decorations = xi;
M.blockWrappers = ro;
M.outerDecorations = jn;
M.atomicRanges = Ct;
M.bidiIsolatedRanges = oo;
M.cursorScrollMargin = /* @__PURE__ */ w.define({
  combine: (n) => {
    let e = 5, t = 5;
    for (let i of n)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
M.scrollMargins = ao;
M.darkTheme = bn;
M.cspNonce = /* @__PURE__ */ w.define({ combine: (n) => n.length ? n[0] : "" });
M.contentAttributes = Hn;
M.editorAttributes = so;
M.lineWrapping = /* @__PURE__ */ M.contentAttributes.of({ class: "cm-lineWrapping" });
M.announce = /* @__PURE__ */ H.define();
const Rh = 4096, Ws = {};
class di {
  constructor(e, t, i, s, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : $.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && i.push(new di(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function Fs(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && Bn(o, t);
  }
  return t;
}
const Th = x.mac ? "mac" : x.windows ? "win" : x.linux ? "linux" : "key";
function Eh(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, r, o, a;
  for (let l = 0; l < t.length - 1; ++l) {
    const c = t[l];
    if (/^(cmd|meta|m)$/i.test(c))
      a = !0;
    else if (/^a(lt)?$/i.test(c))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      r = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? a = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), a && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Wt(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const Oh = /* @__PURE__ */ On.default(/* @__PURE__ */ M.domEventHandlers({
  keydown(n, e) {
    return Ph(Dh(e.state), n, e, "editor");
  }
})), To = /* @__PURE__ */ w.define({ enables: Oh }), zs = /* @__PURE__ */ new WeakMap();
function Dh(n) {
  let e = n.facet(To), t = zs.get(e);
  return t || zs.set(e, t = Bh(e.reduce((i, s) => i.concat(s), []))), t;
}
let Ce = null;
const Lh = 4e3;
function Bh(n, e = Th) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, a) => {
    let l = i[o];
    if (l == null)
      i[o] = a;
    else if (l != a)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, a, l, c, h) => {
    var d, u;
    let f = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = a.split(/ (?!$)/).map((b) => Eh(b, e));
    for (let b = 1; b < p.length; b++) {
      let v = p.slice(0, b).join(" ");
      s(v, !0), f[v] || (f[v] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(A) => {
          let E = Ce = { view: A, prefix: v, scope: o };
          return setTimeout(() => {
            Ce == E && (Ce = null);
          }, Lh), !0;
        }]
      });
    }
    let g = p.join(" ");
    s(g, !1);
    let m = f[g] || (f[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (d = f._any) === null || d === void 0 ? void 0 : d.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    l && m.run.push(l), c && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let o of n) {
    let a = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let c of a) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: d } = o;
        for (let u in h)
          h[u].run.push((f) => d(f, vn));
      }
    let l = o[e] || o.key;
    if (l)
      for (let c of a)
        r(c, l, o.run, o.preventDefault, o.stopPropagation), o.shift && r(c, "Shift-" + l, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let vn = null;
function Ph(n, e, t, i) {
  vn = e;
  let s = _l(e), r = Ol(s, 0), o = Dl(r) == s.length && s != " ", a = "", l = !1, c = !1, h = !1;
  Ce && Ce.view == t && Ce.scope == i && (a = Ce.prefix + " ", bo.indexOf(e.keyCode) < 0 && (c = !0, Ce = null));
  let d = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let b of m.run)
        if (!d.has(b) && (d.add(b), b(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, f = n[i], p, g;
  return f && (u(f[a + Wt(s, e, !o)]) ? l = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(x.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(x.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = Re[e.keyCode]) && p != s ? (u(f[a + Wt(p, e, !0)]) || e.shiftKey && (g = xt[e.keyCode]) != s && g != p && u(f[a + Wt(g, e, !1)])) && (l = !0) : o && e.shiftKey && u(f[a + Wt(s, e, !0)]) && (l = !0), !l && u(f._any) && (l = !0)), c && (l = !0), l && h && e.stopPropagation(), vn = null, l;
}
class Ie {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, s, r) {
    this.className = e, this.left = t, this.top = i, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let r = Eo(e);
      return [new Ie(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return Ih(e, t, i);
  }
}
function Eo(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == $.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Vs(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s)
    return i;
  let r = n.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, a = n.posAtCoords({ x: r.left + 1, y: o }), l = n.posAtCoords({ x: r.right - 1, y: o });
  return a == null || l == null ? i : { from: Math.max(i.from, Math.min(a, l)), to: Math.min(i.to, Math.max(a, l)) };
}
function Ih(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == $.LTR, o = n.contentDOM, a = o.getBoundingClientRect(), l = Eo(n), c = o.querySelector(".cm-line"), h = c && window.getComputedStyle(c), d = a.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), u = a.right - (h ? parseInt(h.paddingRight) : 0), f = pn(n, i, 1), p = pn(n, s, -1), g = f.type == V.Text ? f : null, m = p.type == V.Text ? p : null;
  if (g && (n.lineWrapping || f.widgetLineBreaks) && (g = Vs(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = Vs(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return v(A(t.from, t.to, g));
  {
    let S = g ? A(t.from, null, g) : E(f, !1), C = m ? A(null, t.to, m) : E(p, !0), B = [];
    return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && S.bottom + n.defaultLineHeight / 2 < C.top ? B.push(b(d, S.bottom, u, C.top)) : S.bottom < C.top && n.elementAtHeight((S.bottom + C.top) / 2).type == V.Text && (S.bottom = C.top = (S.bottom + C.top) / 2), v(S).concat(B).concat(v(C));
  }
  function b(S, C, B, ne) {
    return new Ie(e, S - l.left, C - l.top, Math.max(0, B - S), ne - C);
  }
  function v({ top: S, bottom: C, horizontal: B }) {
    let ne = [];
    for (let ve = 0; ve < B.length; ve += 2)
      ne.push(b(B[ve], S, B[ve + 1], C));
    return ne;
  }
  function A(S, C, B) {
    let ne = 1e9, ve = -1e9, At = [];
    function Kn(Ee, we, ze, Oe, st) {
      let ce = n.coordsAtPos(Ee, Ee == B.to ? -2 : 2), he = n.coordsAtPos(ze, ze == B.from ? 2 : -2);
      !ce || !he || (ne = Math.min(ce.top, he.top, ne), ve = Math.max(ce.bottom, he.bottom, ve), st == $.LTR ? At.push(r && we ? d : ce.left, r && Oe ? u : he.right) : At.push(!r && Oe ? d : he.left, !r && we ? u : ce.right));
    }
    let Mt = S ?? B.from, Rt = C ?? B.to;
    for (let Ee of n.visibleRanges)
      if (Ee.to > Mt && Ee.from < Rt)
        for (let we = Math.max(Ee.from, Mt), ze = Math.min(Ee.to, Rt); ; ) {
          let Oe = n.state.doc.lineAt(we);
          for (let st of n.bidiSpans(Oe)) {
            let ce = st.from + Oe.from, he = st.to + Oe.from;
            if (ce >= ze)
              break;
            he > we && Kn(Math.max(ce, we), S == null && ce <= Mt, Math.min(he, ze), C == null && he >= Rt, st.dir);
          }
          if (we = Oe.to + 1, we >= ze)
            break;
        }
    return At.length == 0 && Kn(Mt, S == null, Rt, C == null, n.textDirection), { top: ne, bottom: ve, horizontal: At };
  }
  function E(S, C) {
    let B = a.top + (C ? S.top : S.bottom);
    return { top: B, bottom: B, horizontal: [] };
  }
}
function Nh(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class $h {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(_t) != e.state.facet(_t) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(_t);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Nh(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e, x.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const _t = /* @__PURE__ */ w.define();
function Oo(n) {
  return [
    je.define((e) => new $h(e, n)),
    _t.of(n)
  ];
}
const it = /* @__PURE__ */ w.define({
  combine(n) {
    return Br(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Hh(n = {}) {
  return [
    it.of(n),
    jh,
    Wh,
    Fh,
    to.of(!0)
  ];
}
function Do(n) {
  return n.startState.facet(it) != n.state.facet(it);
}
const jh = /* @__PURE__ */ Oo({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(it), i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor && !(r && x.ios && t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", a = s.empty ? s : y.cursor(s.head, s.assoc);
        for (let l of Ie.forRange(n, o, a))
          i.push(l);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Do(n);
    return t && qs(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    qs(e.state, n);
  },
  class: "cm-cursorLayer"
});
function qs(n, e) {
  e.style.animationDuration = n.facet(it).cursorBlinkRate + "ms";
}
const Wh = /* @__PURE__ */ Oo({
  above: !1,
  markers(n) {
    let e = [], { main: t, ranges: i } = n.state.selection;
    for (let s of i)
      if (!s.empty)
        for (let r of Ie.forRange(n, "cm-selectionBackground", s))
          e.push(r);
    if (x.ios && !t.empty && n.state.facet(it).iosSelectionHandles) {
      for (let s of Ie.forRange(n, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1)))
        e.push(s);
      for (let s of Ie.forRange(n, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1)))
        e.push(s);
    }
    return e;
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Do(n);
  },
  class: "cm-selectionLayer"
}), Fh = /* @__PURE__ */ On.highest(/* @__PURE__ */ M.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
}));
class Fe extends Ne {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
Fe.prototype.elementClass = "";
Fe.prototype.toDOM = void 0;
Fe.prototype.mapMode = J.TrackBefore;
Fe.prototype.startSide = Fe.prototype.endSide = -1;
Fe.prototype.point = !0;
const Ii = /* @__PURE__ */ w.define(), zh = /* @__PURE__ */ w.define(), Yt = /* @__PURE__ */ w.define(), Ks = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
});
function Vh(n) {
  return [
    qh
  ];
}
const qh = /* @__PURE__ */ je.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Yt).map((e) => new Us(n, e)), this.fixed = !n.state.facet(Ks);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (n.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Ks) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = R.iter(this.view.state.facet(Ii), this.view.viewport.from), i = [], s = this.gutters.map((r) => new Kh(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let a of r.type)
          if (a.type == V.Text && o) {
            wn(t, i, a.from);
            for (let l of s)
              l.line(this.view, a, i);
            o = !1;
          } else if (a.widget)
            for (let l of s)
              l.widget(this.view, a);
      } else if (r.type == V.Text) {
        wn(t, i, r.from);
        for (let o of s)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(Yt), t = n.state.facet(Yt), i = n.docChanged || n.heightChanged || n.viewportChanged || !R.eq(n.startState.facet(Ii), n.state.facet(Ii), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new Us(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (n) => M.scrollMargins.of((e) => {
    let t = e.plugin(n);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, s = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == $.LTR ? { left: i, right: s } : { right: i, left: s };
  })
});
function Gs(n) {
  return Array.isArray(n) ? n : [n];
}
function wn(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class Kh {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = R.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let a = new Lo(e, o, r, i);
      s.elements.push(a), s.dom.appendChild(a.dom);
    } else
      s.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    wn(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), s = i ? [i] : null;
    for (let r of e.state.facet(zh)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Us {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let l = r.getBoundingClientRect();
          o = (l.top + l.bottom) / 2;
        } else
          o = s.clientY;
        let a = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, a, s) && s.preventDefault();
      });
    this.markers = Gs(t.markers(e)), t.initialSpacer && (this.spacer = new Lo(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Gs(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !R.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Lo {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Gh(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let a = o, l = r < t.length ? t[r++] : null, c = !1;
      if (l) {
        let h = l.elementClass;
        h && (i += " " + h);
        for (let d = o; d < this.markers.length; d++)
          if (this.markers[d].compare(l)) {
            a = d, c = !0;
            break;
          }
      } else
        a = this.markers.length;
      for (; o < a; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(s);
          let d = s.nextSibling;
          s.remove(), s = d;
        }
      }
      if (!l)
        break;
      l.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(l.toDOM(e), s)), c && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Gh(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const Uh = /* @__PURE__ */ w.define(), _h = /* @__PURE__ */ w.define(), Ke = /* @__PURE__ */ w.define({
  combine(n) {
    return Br(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let s in t) {
          let r = i[s], o = t[s];
          i[s] = r ? (a, l, c) => r(a, l, c) || o(a, l, c) : o;
        }
        return i;
      }
    });
  }
});
class Ni extends Fe {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function $i(n, e) {
  return n.state.facet(Ke).formatNumber(e, n.state);
}
const Yh = /* @__PURE__ */ Yt.compute([Ke], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Uh);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new Ni($i(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let s of e.state.facet(_h)) {
      let r = s(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ke) != e.state.facet(Ke),
  initialSpacer(e) {
    return new Ni($i(e, _s(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = $i(t.view, _s(t.view.state.doc.lines));
    return i == e.number ? e : new Ni(i);
  },
  domEventHandlers: n.facet(Ke).domEventHandlers,
  side: "before"
}));
function Xh(n = {}) {
  return [
    Ke.of(n),
    Vh(),
    Yh
  ];
}
function _s(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const Jh = Object.freeze({
  boolean: "rasa-token-boolean",
  character: "rasa-token-character",
  comment: "rasa-token-comment",
  delimiter: "rasa-token-delimiter",
  keyword: "rasa-token-keyword",
  metadata: "rasa-token-metadata",
  nil: "rasa-token-nil",
  number: "rasa-token-number",
  "reader-macro": "rasa-token-reader-macro",
  string: "rasa-token-string",
  symbol: "rasa-token-symbol"
}), Vn = H.define(), Sn = H.define();
function Qh(n) {
  return [
    {
      key: "Mod-Enter",
      run: () => (n(), !0)
    }
  ];
}
function Zh({
  parent: n,
  doc: e = "",
  onChange: t = null,
  onRun: i = null,
  readOnly: s = !1,
  liveLexicalHighlight: r = !1,
  extensions: o = []
} = {}) {
  if (!n)
    throw new Error("mountRasaCodeEditor requires a parent element");
  const a = i ? To.of(Qh(i)) : [], l = r ? rd() : sd();
  return new M({
    parent: n,
    state: O.create({
      doc: e,
      extensions: [
        Xh(),
        Hh(),
        M.lineWrapping,
        l,
        a,
        M.editable.of(!s),
        O.readOnly.of(s),
        M.updateListener.of((c) => {
          c.docChanged && t?.(c.state.doc.toString(), c);
        }),
        ...o
      ]
    })
  });
}
function Bo(n) {
  return Jh[n] ?? "rasa-token-unknown";
}
function ed(n, e) {
  const t = String(n), i = [];
  let s = 0;
  for (const r of Io(e, t))
    r.start > s && i.push({ text: t.slice(s, r.start), className: "" }), i.push({
      text: t.slice(r.start, r.end),
      className: Bo(r.kind)
    }), s = r.end;
  return s < t.length && i.push({ text: t.slice(s), className: "" }), i;
}
function Ys(n) {
  const e = String(n), t = [];
  let i = 0;
  for (; i < e.length; ) {
    const s = e[i];
    if (/\s/.test(s)) {
      i += 1;
      continue;
    }
    if ("()[]{}".includes(s)) {
      t.push(Se(e, "delimiter", i, i + 1)), i += 1;
      continue;
    }
    if (s === ";") {
      const a = nd(e, i);
      t.push(Se(e, "comment", i, a)), i = a;
      continue;
    }
    if (s === '"') {
      const a = id(e, i);
      t.push(Se(e, "string", i, a)), i = a;
      continue;
    }
    if (s === "^") {
      t.push(Se(e, "reader-macro", i, i + 1));
      const a = i + 1;
      if (a < e.length && !/[\s()[\]{}]/.test(e[a])) {
        const l = Hi(e, a);
        t.push(Se(e, "metadata", a, l)), i = l;
      } else
        i += 1;
      continue;
    }
    if (s === "'" || s === "`" || s === "~" || s === "@") {
      t.push(Se(e, "reader-macro", i, i + 1)), i += 1;
      continue;
    }
    if (s === "\\") {
      const a = Hi(e, i);
      t.push(Se(e, "character", i, a)), i = a;
      continue;
    }
    const r = Hi(e, i), o = e.slice(i, r);
    t.push(Se(e, td(o), i, r)), i = r;
  }
  return t;
}
function td(n) {
  return n === "nil" ? "nil" : n === "true" || n === "false" ? "boolean" : n.startsWith(":") ? "keyword" : /^[+-]?(?:\d+|\d+\.\d+)$/.test(n) ? "number" : "symbol";
}
function Se(n, e, t, i) {
  return {
    kind: e,
    start: Qs(n, t),
    end: Qs(n, i)
  };
}
function Hi(n, e) {
  let t = e;
  for (; t < n.length && !/[\s()[\]{}]/.test(n[t]); )
    t += 1;
  return t;
}
function id(n, e) {
  let t = !1;
  for (let i = e + 1; i < n.length; i += 1) {
    const s = n[i];
    if (t)
      t = !1;
    else if (s === "\\")
      t = !0;
    else if (s === '"')
      return i + 1;
  }
  return n.length;
}
function nd(n, e) {
  const t = n.indexOf(`
`, e);
  return t < 0 ? n.length : t;
}
function pt(n, e) {
  const t = typeof e == "string" ? e : "", i = typeof e == "number" ? e : t.length, s = Io(n, t || i).map(
    (r) => j.mark({ class: Bo(r.kind) }).range(
      r.start,
      r.end
    )
  );
  return j.set(s, !0);
}
function sd(n = []) {
  return [ye.define({
    create(t) {
      return pt(n, t.doc.toString());
    },
    update(t, i) {
      for (const s of i.effects)
        if (s.is(Vn))
          return pt(s.value, i.state.doc.toString());
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => M.decorations.from(t)
  })];
}
function rd() {
  return [ye.define({
    create(e) {
      return pt(
        Ys(e.doc.toString()),
        e.doc.toString()
      );
    },
    update(e, t) {
      for (const i of t.effects)
        if (i.is(Vn))
          return pt(i.value, t.state.doc.toString());
      return t.docChanged ? pt(
        Ys(t.state.doc.toString()),
        t.state.doc.toString()
      ) : e.map(t.changes);
    },
    provide: (e) => M.decorations.from(e)
  })];
}
function od(n = []) {
  return [ye.define({
    create(t) {
      return Xs(n, t.doc.toString());
    },
    update(t, i) {
      for (const s of i.effects)
        if (s.is(Sn))
          return Xs(
            s.value,
            i.state.doc.toString()
          );
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => M.decorations.from(t)
  })];
}
function Xs(n, e) {
  const t = ad(n, e).map((i) => {
    const s = ["rasa-evidence-span"];
    return i.pinned && s.push("rasa-evidence-pinned"), j.mark({
      class: s.join(" "),
      attributes: {
        "data-evidence-group": i.group || ""
      }
    }).range(i.start, i.end);
  });
  return j.set(t, !0);
}
function Po(n, e, t) {
  const i = String(n), s = Cn(e), r = Math.max(s, Cn(t));
  return {
    start: Js(i, s),
    end: Js(i, r)
  };
}
function Js(n, e) {
  const t = String(n), i = Cn(e);
  let s = 0, r = 0;
  for (const o of t) {
    const a = s + No(o);
    if (a > i || (s = a, r += o.length, s === i))
      return r;
  }
  return t.length;
}
function Qs(n, e) {
  const t = String(n), i = kn(e, t.length);
  let s = 0;
  for (let r = 0; r < i; ) {
    const o = t.codePointAt(r), a = String.fromCodePoint(o);
    s += No(a), r += a.length;
  }
  return s;
}
function Io(n, e) {
  const t = typeof e == "number" ? e : String(e).length;
  return [...n].map((i) => {
    const s = typeof e == "number" ? {
      start: kn(i.start, t),
      end: kn(i.end, t)
    } : Po(e, i.start, i.end);
    return {
      kind: String(i.kind),
      start: s.start,
      end: s.end
    };
  }).filter((i) => i.start < i.end).sort((i, s) => i.start - s.start || i.end - s.end);
}
function ad(n, e) {
  const t = String(e);
  return [...n].map((i) => {
    const s = Po(t, i.start, i.end);
    return {
      ...i,
      start: s.start,
      end: s.end
    };
  }).filter((i) => i.start < i.end).sort((i, s) => i.start - s.start || i.end - s.end);
}
function kn(n, e) {
  const t = Number(n);
  return Number.isFinite(t) ? Math.max(0, Math.min(e, Math.trunc(t))) : 0;
}
function Cn(n) {
  const e = Number(n);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function No(n) {
  const e = n.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const $o = "wasm-component", ld = "browser-component-adapter-pending", cd = "Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.", hd = "rasa-component/", Ho = "rasa:runtime/host", dd = "rasa:runtime/host@0.1.0", ud = "rasa:runtime/session@0.1.0", jo = 1, Wo = 2, Fo = 4, zo = 8, Vo = 16, fd = jo | Wo | Fo | zo | Vo, pd = 256;
class gd extends Error {
  constructor(e = cd) {
    super(e), this.name = "RasaBrowserRuntimeUnavailableError", this.runtimeKind = $o, this.unavailableReason = ld;
  }
}
class Zs extends Error {
  constructor(e) {
    super(e), this.name = "RasaBrowserHostCallError";
  }
}
class qn {
  static async load(e, t = {}) {
    const i = tr(e), s = t.readBytes || Sd, r = await s(i, "Rasa runtime component"), o = tr(
      t.adapterBaseUrl || hd,
      i
    ), l = await import(
      /* @vite-ignore */
      new URL("ras-runtime.js", o).href
    ), c = bd(t.host), h = /* @__PURE__ */ new Map(), d = await l.instantiate(async (u) => {
      const f = new URL(u, o), p = h.get(f.href);
      if (p) return p;
      const g = await s(f, `Rasa component core module ${u}`), m = await WebAssembly.compile(g);
      return h.set(f.href, m), m;
    }, c);
    return new qn({
      url: i.href,
      adapterBaseUrl: o.href,
      byteLength: r.byteLength,
      imports: c,
      session: d.session || d[ud]
    });
  }
  constructor(e = {}) {
    if (!e.session)
      throw new Error("Rasa Wasm component adapter did not export the session interface");
    this.url = e.url ?? null, this.adapterBaseUrl = e.adapterBaseUrl ?? null, this.byteLength = e.byteLength ?? null, this.available = !0, this.runtimeKind = $o, this.unavailableReason = null, this.message = "Browser Wasm component runtime ready.", this.session = e.session, this.importObject = e.imports || {};
  }
  imports() {
    return Object.keys(this.importObject);
  }
  status() {
    return this.session.status();
  }
  renderHash() {
    return this.session.renderHash();
  }
  unavailableError() {
    return new gd(this.message);
  }
  evaluate(e, t = null) {
    return this.session.evalSource(Ae(e), Ft(t));
  }
  inspect(e, t = null) {
    const i = this.session.inspectSource(Ae(e), Ft(t));
    return er(i, "inspection artifact");
  }
  syntaxTokens(e) {
    const t = this.session.syntaxTokens(Ae(e));
    return er(t, "syntax token payload");
  }
  createSession() {
    return this.session.sessionNew();
  }
  freeSession(e) {
    e != null && this.session.sessionFree(e);
  }
  loadPackage(e, t) {
    return this.session.sessionLoadPackage(e, ui(t));
  }
  async loadPackageAsync(e, t) {
    return await this.loadPackage(e, t);
  }
  evaluateSession(e, t, i = null) {
    return this.session.sessionEval(e, Ae(t), Ft(i));
  }
  async evaluateSessionAsync(e, t, i = null) {
    return await this.evaluateSession(e, t, i);
  }
  evaluateReplSession(e, t, i = null) {
    if (typeof this.session.sessionReplEval != "function")
      throw new Error("Rasa Wasm component does not export sessionReplEval");
    return this.session.sessionReplEval(e, Ae(t), Ft(i));
  }
  async evaluateReplSessionAsync(e, t, i = null) {
    return await this.evaluateReplSession(e, t, i);
  }
}
function Ae(n) {
  return new TextEncoder().encode(String(n ?? ""));
}
function md(n) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(n);
}
function bd(n = null) {
  const e = {
    [Ho]: xd(n),
    "wasi:cli/environment": { getEnvironment: () => [] },
    "wasi:cli/exit": {
      exit: () => {
        throw new Error("Rasa Wasm component requested wasi:cli/exit");
      }
    },
    "wasi:cli/stdin": { getStdin: () => new ir() },
    "wasi:cli/stdout": { getStdout: () => new ji() },
    "wasi:cli/stderr": { getStderr: () => new ji() },
    "wasi:cli/terminal-input": { TerminalInput: Cd },
    "wasi:cli/terminal-output": { TerminalOutput: Ad },
    "wasi:cli/terminal-stdin": { getTerminalStdin: () => {
    } },
    "wasi:cli/terminal-stdout": { getTerminalStdout: () => {
    } },
    "wasi:cli/terminal-stderr": { getTerminalStderr: () => {
    } },
    "wasi:clocks/monotonic-clock": { subscribeDuration: () => new An() },
    "wasi:io/error": { Error: kd },
    "wasi:io/poll": { Pollable: An, poll: () => [] },
    "wasi:io/streams": { InputStream: ir, OutputStream: ji },
    "wasi:random/insecure-seed": {
      getInsecureSeed: () => [1n, 2n]
    }
  };
  return vd(e);
}
function xd(n) {
  return {
    call(e) {
      if (!n)
        throw new Zs("no browser host provider is registered");
      if (typeof n.callBytes == "function")
        return yd(n.callBytes(e));
      if (typeof n.call == "function") {
        const t = n.call(md(e));
        return qo(t) ? t.then((i) => Ae(i)) : Ae(t);
      }
      throw new Zs("browser host provider does not implement call");
    }
  };
}
function yd(n) {
  return qo(n) ? n.then((e) => ui(e)) : ui(n);
}
function vd(n) {
  return {
    ...n,
    [dd]: n[Ho],
    "wasi:cli/environment@0.2.6": n["wasi:cli/environment"],
    "wasi:cli/exit@0.2.6": n["wasi:cli/exit"],
    "wasi:cli/stdin@0.2.6": n["wasi:cli/stdin"],
    "wasi:cli/stdout@0.2.6": n["wasi:cli/stdout"],
    "wasi:cli/stderr@0.2.6": n["wasi:cli/stderr"],
    "wasi:cli/terminal-input@0.2.6": n["wasi:cli/terminal-input"],
    "wasi:cli/terminal-output@0.2.6": n["wasi:cli/terminal-output"],
    "wasi:cli/terminal-stdin@0.2.6": n["wasi:cli/terminal-stdin"],
    "wasi:cli/terminal-stdout@0.2.6": n["wasi:cli/terminal-stdout"],
    "wasi:cli/terminal-stderr@0.2.6": n["wasi:cli/terminal-stderr"],
    "wasi:clocks/monotonic-clock@0.2.6": n["wasi:clocks/monotonic-clock"],
    "wasi:io/error@0.2.6": n["wasi:io/error"],
    "wasi:io/poll@0.2.6": n["wasi:io/poll"],
    "wasi:io/streams@0.2.6": n["wasi:io/streams"],
    "wasi:random/insecure-seed@0.3.0-rc-2026-03-15": n["wasi:random/insecure-seed"]
  };
}
function Ft(n) {
  if (typeof n == "number") return n;
  let e = fd;
  return n?.phases && n.phases !== "all" && (e = (Array.isArray(n.phases) ? n.phases : [n.phases]).reduce((i, s) => i | wd(s), 0)), n?.traces && (e |= pd), e;
}
function wd(n) {
  switch (String(n)) {
    case "reader":
      return jo;
    case "analysis":
    case "analyze":
      return Wo;
    case "ir":
      return Fo;
    case "facts":
      return zo;
    case "eval":
      return Vo;
    default:
      return 0;
  }
}
function er(n, e) {
  try {
    return JSON.parse(n);
  } catch (t) {
    throw new Error(`failed to parse ${e}: ${t.message}`);
  }
}
function ui(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : Ae(n);
}
async function Sd(n, e) {
  const t = await fetch(n);
  if (!t.ok)
    throw new Error(`failed to load ${e}: ${t.status}`);
  return ui(await t.arrayBuffer());
}
function tr(n, e = null) {
  return new URL(String(n), e || globalThis.location?.href || import.meta.url);
}
function qo(n) {
  return n && typeof n.then == "function";
}
class kd {
}
class An {
  block() {
  }
}
class ir {
}
class ji {
  checkWrite() {
    return 0n;
  }
  write() {
  }
  blockingFlush() {
  }
  subscribe() {
    return new An();
  }
}
class Cd {
}
class Ad {
}
const Ko = `(def orders
  [{:id ^i64 101 :kind :book :region :west :qty ^i64 2 :unit ^i64 30}
   {:id ^i64 102 :kind :tool :region :east :qty ^i64 1 :unit ^i64 70}
   {:id ^i64 103 :kind :book :region :west :qty ^i64 3 :unit ^i64 30}
   {:id ^i64 104 :kind :demo :region :north :qty ^i64 1 :unit ^i64 0}])

(def billable #{:book :tool})

(def enriched
  (map
    (fn [order]
      (let [total (* (:qty order) (:unit order))]
        (assoc
          (assoc order :total total)
          :billable (some? (billable (:kind order))))))
    orders))

{:billable-kinds (into [] (map :kind (filter :billable enriched)))
 :billable-total (reduce + ^i64 0 (map :total (filter :billable enriched)))
 :by-id (zipmap (map :id enriched) enriched)}`, Wi = [
  {
    label: "Data Pipeline",
    story: "Reader, analyzer, facts, plan, eval",
    description: "Nested maps, sets-as-functions, scalar hints, sequence filters, zipmap, and a compact business result.",
    phases: ["reader", "analyzer", "facts", "plan", "eval"],
    source: Ko
  },
  {
    label: "Shape And Metadata",
    story: "Hints are evidence, not magic",
    description: "Metadata and type hints flow into evidence while ordinary map/set operations stay Clojure-shaped.",
    phases: ["reader", "types", "facts", "checks", "plan"],
    source: `(def profile
  ^{:entity :account :source :browser-preview}
  {:id ^i64 7
   :name "Ada"
   :roles #{:admin :author}
   :daily ^i64 100
   :monthly ^i64 1000})

(def next-profile
  (assoc
    (assoc profile :daily (+ (:daily profile) ^i64 20))
    :active true))

{:id (:id next-profile)
 :name (:name next-profile)
 :active (:active next-profile)
 :role-count (count (:roles next-profile))
 :daily-limit (:daily next-profile)
 :author? (some? ((:roles next-profile) :author))}`
  },
  {
    label: "Lazy Telemetry Window",
    story: "Bounded views over unbounded source",
    description: "Map, drop-while, take-while, keep, and bounded realization create useful finite projections.",
    phases: ["ir", "facts", "plan", "eval"],
    source: `(def readings
  (map
    (fn [tick]
      {:tick tick
       :load (+ ^i64 18 (* tick ^i64 7))
       :bucket (if (< tick ^i64 4) :warmup :steady)})
    [0 1 2 3 4 5 6 7 8 9]))

(def steady
  (take-while
    (fn [reading] (< (:load reading) ^i64 92))
    (drop-while
      (fn [reading] (< (:load reading) ^i64 39))
      readings)))

(def alert-loads
  (keep
    (fn [reading]
      (if (< (:load reading) ^i64 65) nil (:load reading)))
    steady))

{:window (into [] steady)
 :alerts (into [] alert-loads)
 :tick->load (zipmap (map :tick steady) (map :load steady))}`
  },
  {
    label: "Planner Pressure",
    story: "Higher-order data without host reach",
    description: "Mapcat, keep, filter, reduce, and indexed lookup create more plan and evidence surface.",
    phases: ["expand", "facts", "plan", "eval"],
    source: `(def events
  (mapcat
    (fn [batch]
      [{:batch batch :id (+ (* batch ^i64 10) ^i64 1) :kind :edge :cost (+ batch ^i64 5)}
       {:batch batch :id (+ (* batch ^i64 10) ^i64 2) :kind :core :cost (+ batch ^i64 20)}
       {:batch batch :id (+ (* batch ^i64 10) ^i64 3) :kind :drop :cost ^i64 0}])
    [1 2 3 4]))

(def shaped
  (keep
    (fn [event]
      (if (= :drop (:kind event))
        nil
        (assoc event :weight (+ (:cost event) (:batch event)))))
    events))

(def window
  (take
    ^i64 5
    (filter
      (fn [event] (#{:edge :core} (:kind event)))
      shaped)))

(def by-id (zipmap (map :id window) window))

{:window (into [] window)
 :heavy (into [] (drop-while (fn [event] (< (:weight event) ^i64 24)) window))
 :lookup (by-id ^i64 32)
 :total-weight (reduce + ^i64 0 (map :weight window))
 :ids (into [] (map :id window))}`
  },
  {
    label: "Checks And Diagnostics",
    story: "Conservative evidence stays visible",
    description: "A deliberate missing global keeps diagnostics and planning honesty visible without faking host support.",
    phases: ["reader", "analyzer", "checks", "plan", "diagnostics"],
    source: `(def scores [^i64 12 ^i64 25 ^i64 40])

(def boosted
  (map inc scores))

{:count (count boosted)
 :total (reduce + ^i64 0 boosted)
 :average (/ (reduce + ^i64 0 boosted) (count boosted))
 :unavailable (range ^i64 1 ^i64 4)}`
  }
];
class Md {
  constructor(e = 4) {
    this.limit = e, this.artifacts = /* @__PURE__ */ new Map(), this.reports = /* @__PURE__ */ new Map();
  }
  inspect(e, t) {
    nr(e);
    const i = String(t), s = this.artifacts.get(i);
    if (s)
      return { artifact: s, cacheHit: !0 };
    const r = e.inspect(i, {
      includeEval: !0,
      includePlan: !0,
      detail: "standard"
    });
    return sr(this.artifacts, i, r, this.limit), { artifact: r, cacheHit: !1 };
  }
  runtimeReport(e, t, i) {
    nr(e);
    const s = String(t), r = this.reports.get(s);
    if (r)
      return r;
    const o = e.evaluate(s), a = {
      text: o,
      tokens: i(o)
    };
    return sr(this.reports, s, a, this.limit), a;
  }
}
function nr(n) {
  if (n?.available === !1)
    throw n.unavailableError?.() || new Error(n.message || "browser runtime unavailable");
}
function sr(n, e, t, i) {
  for (n.set(e, t); n.size > i; )
    n.delete(n.keys().next().value);
}
const Rd = `
:host {
  --rasa-bg: var(--rasa-surface, #0b0d10);
  --rasa-border: var(--rasa-line, #29323d);
  --rasa-border-strong: var(--rasa-line-strong, #3c4856);
  --rasa-error: var(--rasa-red, #ff7078);
  display: block;
  color: var(--rasa-text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

.shell {
  height: calc(100vh - 24px);
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 20px;
  overflow: hidden;
  background: var(--rasa-bg);
  padding: 12px;
}

.topbar,
.source-panel,
.evidence-panel,
.focus-panel {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  min-width: 0;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.source-panel:hover,
.evidence-panel:hover,
.focus-panel:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.topbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
}

.brand {
  min-width: 0;
}

.eyebrow,
.label {
  color: var(--rasa-reader);
  font-size: 12px;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.label {
  color: var(--rasa-muted);
}

h1,
h2 {
  margin: 0;
  letter-spacing: 0;
}

h1 {
  margin-top: 2px;
  font-size: 19px;
  line-height: 1.22;
  font-weight: 760;
}

h2 {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 760;
}

.status {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.brand-mark {
  width: 28px;
  height: 32px;
  object-fit: contain;
  opacity: 0.62;
  flex: 0 0 auto;
}

.pill,
.semantic-tag,
.example-button {
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 999px;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.pill {
  padding: 0 12px;
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 600;
}

.pill.ok {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
}

.pill.warn {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.1);
  color: #fbbf24;
}

.cockpit,
.workbench-grid {
  min-height: 0;
  display: grid;
  gap: 14px;
}

.workbench-grid {
  position: relative;
  grid-template-columns: minmax(280px, 0.78fr) minmax(520px, 1.46fr) minmax(300px, 0.82fr);
  isolation: isolate;
}

.source-panel,
.evidence-panel,
.focus-panel {
  min-height: 0;
  overflow: hidden;
  display: grid;
}

.source-panel {
  grid-template-rows: auto auto minmax(0, 1fr);
}

.centerstage {
  position: relative;
  grid-template-rows: auto auto auto minmax(0, 1fr);
  border-color: rgba(59, 130, 246, 0.2);
  background: rgba(59, 130, 246, 0.02);
  box-shadow: inset 0 0 40px rgba(59, 130, 246, 0.05), 0 8px 32px rgba(0, 0, 0, 0.2);
}

.evidence-panel {
  grid-template-rows: auto auto minmax(0, 1fr);
}

.focus-panel {
  grid-template-rows: auto minmax(0, 1fr);
}

.panel-head {
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.source-head {
  align-items: flex-start;
}

.stage-head {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stage-badge {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 11px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-analysis);
  font-size: 12px;
  font-weight: 780;
}

.stage-proof-chips {
  flex: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
}

.stage-proof-chips span {
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--rasa-blue) 34%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-blue);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  font-weight: 780;
}

.panel-subtitle,
.status-text,
.metric-meta {
  display: block;
  margin-top: 2px;
  color: var(--rasa-muted);
  font-size: 12px;
}

button {
  min-height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  padding: 0 16px;
  color: var(--rasa-text);
  background: rgba(255, 255, 255, 0.05);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.45;
  cursor: default;
}

.example-rail {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.command-shelf {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  align-items: stretch;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.example-card {
  min-width: 0;
  display: grid;
  grid-template-rows: minmax(46px, auto) auto;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.example-card strong,
.example-card span {
  display: block;
  min-width: 0;
}

.example-card > div {
  min-width: 0;
  overflow: hidden;
}

.example-card strong {
  color: var(--rasa-text);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
}

.example-card span {
  margin-top: 3px;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.example-actions {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}

.example-button {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 28px;
  justify-content: center;
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--rasa-analysis);
  background: rgba(255, 255, 255, 0.03);
  font-size: 12px;
  font-weight: 600;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.example-button-secondary {
  color: var(--rasa-facts);
}

.example-button:hover {
  color: var(--rasa-text);
  border-color: var(--rasa-analysis);
  background: rgba(255, 255, 255, 0.08);
}

.stage-body {
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  background: transparent;
}

.phase-rail {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 8px;
  padding: 12px 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: transparent;
}

.phase-node {
  min-width: 0;
  min-height: 48px;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 4px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--rasa-muted);
  transition: all 0.2s ease;
}

.phase-node:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.phase-node:first-child {
  border-radius: 8px 0 0 8px;
}

.phase-node:last-child {
  border-radius: 0 8px 8px 0;
}

.phase-node[data-status="ok"],
.phase-node[data-status="available"] {
  color: var(--rasa-text);
  background: var(--rasa-panel-raised);
}

.phase-node[data-active="true"] {
  border-color: color-mix(in srgb, var(--rasa-analysis) 70%, var(--rasa-border));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--rasa-analysis) 20%, var(--rasa-panel-raised)), var(--rasa-panel-raised));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rasa-analysis) 35%, transparent);
}

.phase-node[data-status="failed"] {
  border-color: color-mix(in srgb, var(--rasa-error) 60%, var(--rasa-border));
}

.phase-name {
  overflow: hidden;
  color: currentColor;
  font-size: 11px;
  font-weight: 820;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.phase-meta {
  overflow: hidden;
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 680;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.editor-frame {
  min-height: 0;
  min-width: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  border-top: 1px solid color-mix(in srgb, var(--rasa-facts) 35%, var(--rasa-border));
  background: var(--rasa-panel-soft);
  overflow: hidden;
}

.editor-head,
.editor-foot {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
}

.editor-head {
  border-bottom: 1px solid var(--rasa-border);
  background: linear-gradient(90deg, color-mix(in srgb, var(--rasa-facts) 8%, transparent), transparent);
}

.editor-foot {
  border-top: 1px solid var(--rasa-border);
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 680;
}

.run-hint {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--rasa-facts) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-facts);
  font-size: 11px;
  font-weight: 780;
}

.run-button {
  min-width: 86px;
  color: var(--rasa-button-text);
  background: linear-gradient(180deg, var(--rasa-green), var(--rasa-green));
  border-color: color-mix(in srgb, var(--rasa-facts) 65%, var(--rasa-border));
}

.editor {
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}

.cm-editor {
  min-width: 0;
  height: 100%;
  background: var(--rasa-code-bg);
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 14px;
}

.cm-gutters {
  border-right: 1px solid var(--rasa-border) !important;
  background: var(--rasa-code-bg) !important;
  color: var(--rasa-dim) !important;
}

.cm-lineNumbers .cm-gutterElement {
  min-width: 3.5ch;
  padding: 0 10px 0 8px;
}

.cm-scroller {
  cursor: text;
  overflow: auto;
}

.cm-content {
  min-width: 0;
  padding: 14px;
  caret-color: var(--rasa-reader);
}

.cm-focused {
  outline: none;
}

.cm-cursorLayer {
  pointer-events: none;
}

.cm-cursor {
  border-left: 2px solid var(--rasa-reader) !important;
  margin-left: -1px;
}

.cm-editor .cm-selectionBackground,
.cm-editor.cm-focused .cm-selectionBackground {
  background: color-mix(in srgb, var(--rasa-analysis) 30%, transparent) !important;
}

.rasa-evidence-span {
  background: color-mix(in srgb, var(--rasa-facts) 18%, transparent);
  box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--rasa-facts) 75%, transparent);
}

.rasa-evidence-pinned {
  background: color-mix(in srgb, var(--rasa-analysis) 22%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-analysis);
}

.rasa-token-comment { color: var(--rasa-dim); font-style: italic; }
.rasa-token-delimiter { color: var(--rasa-muted); }
.rasa-token-reader-macro,
.rasa-token-metadata { color: var(--rasa-reader); font-weight: 760; }
.rasa-token-keyword { color: var(--rasa-green); }
.rasa-token-string { color: var(--rasa-gold); }
.rasa-token-number,
.rasa-token-boolean,
.rasa-token-nil { color: var(--rasa-ir); }
.rasa-token-symbol { color: var(--rasa-text); }
.rasa-token-character { color: var(--rasa-blue); }

.result-strip {
  display: grid;
  gap: 8px;
  padding: 10px;
  border-bottom: 1px solid var(--rasa-border);
  background: var(--rasa-panel-soft);
}

.result-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--rasa-eval) 44%, var(--rasa-border));
  border-radius: 7px;
  background: var(--rasa-panel-raised);
}

.result-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px 0;
}

.result-value {
  max-height: 210px;
  min-height: 54px;
  margin: 0;
  padding: 8px 10px 10px;
  overflow: auto;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 16px;
  line-height: 1.45;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.metric-deck {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.metric-card {
  min-width: 0;
  padding: 9px 10px;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-panel-soft);
}

.metric-label {
  display: block;
  color: var(--rasa-muted);
  font-size: 11px;
  font-weight: 760;
  text-transform: uppercase;
}

.metric-value {
  display: block;
  margin-top: 4px;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 15px;
  line-height: 1.25;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.metric-card .metric-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-list {
  min-height: 0;
  overflow: auto;
  padding: 10px;
  display: grid;
  grid-auto-rows: max-content;
  align-content: start;
  align-items: start;
  gap: 9px;
  background: var(--rasa-panel-soft);
}

.evidence-card {
  min-height: 104px;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-surface-lift);
  cursor: pointer;
  overflow: hidden;
}

.evidence-card:hover,
.evidence-card:focus-visible,
.evidence-card[data-selected="true"] {
  border-color: var(--rasa-analysis);
  background: var(--rasa-panel-raised);
}

.evidence-card:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--rasa-analysis) 70%, transparent);
  outline-offset: 2px;
}

.evidence-card[data-selected="true"] {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--rasa-analysis) 30%, transparent);
}

.evidence-card[data-phase~="facts"] {
  border-left: 3px solid var(--rasa-facts);
}

.evidence-card[data-phase~="plan"] {
  border-left: 3px solid var(--rasa-plan);
}

.evidence-card-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px 4px;
}

.evidence-subject {
  min-width: 0;
  overflow: hidden;
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-label {
  overflow: hidden;
  color: var(--rasa-text);
  font-weight: 760;
  text-overflow: ellipsis;
}

.evidence-id {
  flex: none;
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 680;
}

.evidence-span {
  flex: none;
  color: var(--rasa-muted);
  font-size: 12px;
}

.evidence-tags,
.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 10px;
}

.semantic-tag {
  min-height: 22px;
  padding: 0 7px;
  color: var(--rasa-muted);
  background: var(--rasa-panel-soft);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
}

.evidence-entries {
  display: grid;
  border-top: 1px solid var(--rasa-border);
}

.evidence-entry {
  min-width: 0;
  padding: 7px 10px;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-entry + .evidence-entry {
  border-top: 1px solid var(--rasa-border);
}

.focus-body {
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: var(--rasa-panel-soft);
}

.focus-body > * {
  flex: none;
}

.focus-card,
.debug-artifact {
  min-width: 0;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-surface-lift);
  overflow: hidden;
}

.focus-card[data-phase~="facts"] {
  border-color: color-mix(in srgb, var(--rasa-facts) 55%, var(--rasa-border));
}

.focus-card[data-phase~="plan"],
.plan-card {
  border-color: color-mix(in srgb, var(--rasa-plan) 55%, var(--rasa-border));
}

.focus-card-error,
.diagnostic-card[data-status="blocking"] {
  border-color: color-mix(in srgb, var(--rasa-error) 60%, var(--rasa-border));
}

.focus-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 11px;
  border-bottom: 1px solid var(--rasa-border);
}

.diagnostics-note {
  margin: 3px 0 0;
  max-width: 34ch;
  color: var(--rasa-muted);
  font-size: 11px;
  line-height: 1.35;
}

.edn-block {
  margin: 0;
  max-height: 260px;
  overflow: auto;
  padding: 11px;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.plan-grid,
.diagnostic-list {
  display: grid;
}

.diagnostics-card {
  max-height: min(420px, 70vh);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.diagnostic-list {
  min-height: 0;
  overflow: auto;
}

.plan-row {
  display: grid;
  grid-template-columns: minmax(90px, 0.38fr) minmax(0, 1fr);
  gap: 10px;
  padding: 8px 10px;
  border-top: 1px solid var(--rasa-border);
}

.plan-row:first-child {
  border-top: 0;
}

.plan-row span {
  min-width: 0;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.plan-row strong {
  min-width: 0;
  color: var(--rasa-text);
  font-size: 12px;
  line-height: 1.4;
}

.diagnostic-card {
  padding: 10px;
  border-top: 1px solid var(--rasa-border);
}

.diagnostic-card:first-child {
  border-top: 0;
}

.diagnostic-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.diagnostic-head strong,
.diagnostic-card code,
.source-excerpt {
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
}

.diagnostic-head strong {
  min-width: 0;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: normal;
}

.diagnostic-head span {
  flex: none;
  border: 1px solid var(--rasa-border);
  border-radius: 999px;
  color: var(--rasa-muted);
  font-size: 11px;
  line-height: 1;
  padding: 4px 7px;
  text-transform: lowercase;
}

.diagnostic-card p {
  margin: 7px 0 9px;
  color: var(--rasa-text);
  font-size: 13px;
  line-height: 1.45;
}

.diagnostic-detail {
  display: grid;
  gap: 6px;
  margin: 0;
}

.diagnostic-detail div {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 9px;
  align-items: start;
}

.diagnostic-detail dt {
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.diagnostic-detail dd {
  margin: 0;
  min-width: 0;
  color: var(--rasa-text);
  font-size: 12px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.diagnostic-detail dd[data-field="provenance"] {
  color: var(--rasa-reader);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
}

.source-excerpt {
  margin-top: 8px;
  border: 1px solid var(--rasa-border);
  border-radius: 6px;
  background: rgba(6, 10, 14, 0.45);
  color: var(--rasa-reader);
  overflow: auto;
}

.source-excerpt code {
  display: block;
  color: inherit;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre;
}

.source-excerpt-frame {
  display: grid;
  padding: 7px 0;
}

.source-excerpt-line {
  display: grid;
  grid-template-columns: 4ch minmax(0, 1fr);
  gap: 9px;
  min-width: max-content;
  padding: 0 8px;
}

.source-excerpt-gutter {
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  line-height: 1.65;
  text-align: right;
  user-select: none;
}

.source-excerpt-code {
  min-width: 0;
}

.source-marker {
  border-radius: 3px;
  background: color-mix(in srgb, var(--rasa-reader) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-reader);
  color: var(--rasa-text);
}

.source-marker[data-severity="error"] {
  background: color-mix(in srgb, var(--rasa-error) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-error);
}

.source-marker[data-severity="warning"] {
  background: color-mix(in srgb, var(--rasa-plan) 16%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-plan);
}

.source-marker-zero {
  display: inline-block;
  width: 2px;
  min-height: 1.2em;
  vertical-align: -0.18em;
}

.diagnostic-card[data-status="recoverable"] .diagnostic-head span {
  border-color: color-mix(in srgb, var(--rasa-plan) 55%, var(--rasa-border));
  color: var(--rasa-plan);
}

.debug-artifact {
  color: var(--rasa-muted);
}

.debug-artifact summary {
  padding: 10px 11px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 760;
  text-transform: uppercase;
}

.runtime-summary {
  border-top: 1px solid var(--rasa-border);
}

.empty-sections {
  color: var(--rasa-muted);
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  padding: 12px;
  background: var(--rasa-surface-lift);
}

.connector-layer {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: visible;
}

.workbench-grid > *:not(.connector-layer):not(.connector-tip):not(.connector-hotspots) {
  position: relative;
  z-index: 2;
}

.connector-hotspots {
  display: contents;
}

.connector-hotspot {
  position: absolute;
  z-index: 4;
  width: 13px;
  min-height: 0;
  height: 13px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 46%, var(--rasa-border));
  border-radius: 999px;
  padding: 0;
  background:
    radial-gradient(circle, color-mix(in srgb, var(--rasa-analysis) 55%, transparent) 0 1px, transparent 2px),
    rgba(9, 13, 18, 0.84);
  box-shadow: 0 0 0 2px rgba(9, 13, 18, 0.56);
  cursor: help;
  opacity: 0.38;
  pointer-events: auto;
  transform: translate(-50%, -50%);
  transition:
    opacity 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.connector-hotspot[data-requires-intent="true"] {
  opacity: 0.18;
}

.connector-hotspot:hover,
.connector-hotspot:focus-visible,
.connector-hotspot[data-active="true"] {
  border-color: var(--rasa-analysis);
  box-shadow:
    0 0 0 4px rgba(9, 13, 18, 0.64),
    0 0 18px color-mix(in srgb, var(--rasa-analysis) 34%, transparent);
  opacity: 0.96;
  outline: none;
  transform: translate(-50%, -50%) scale(1.08);
}

.connector-hotspot-source-focus,
.connector-hotspot-phase-source {
  border-color: color-mix(in srgb, var(--rasa-facts) 46%, var(--rasa-border));
  background:
    radial-gradient(circle, color-mix(in srgb, var(--rasa-facts) 55%, transparent) 0 1px, transparent 2px),
    rgba(9, 13, 18, 0.84);
}

.connector-hotspot-source-focus:hover,
.connector-hotspot-source-focus:focus-visible,
.connector-hotspot-source-focus[data-active="true"],
.connector-hotspot-phase-source:hover,
.connector-hotspot-phase-source:focus-visible,
.connector-hotspot-phase-source[data-active="true"] {
  border-color: var(--rasa-facts);
  box-shadow:
    0 0 0 4px rgba(9, 13, 18, 0.64),
    0 0 18px color-mix(in srgb, var(--rasa-facts) 34%, transparent);
}

.connector {
  fill: none;
  stroke-width: 1.55;
  stroke-linecap: round;
  stroke-dasharray: 6 9;
  opacity: 0.26;
  filter: drop-shadow(0 0 6px rgba(120, 167, 255, 0.12));
  transition:
    opacity 150ms ease,
    stroke-width 150ms ease,
    filter 150ms ease;
  pointer-events: none;
}

.connector[data-requires-intent="true"] {
  opacity: 0;
}

.connector-hit {
  fill: none;
  stroke: transparent;
  stroke-linecap: round;
  stroke-width: 18;
  opacity: 0;
  pointer-events: stroke;
  cursor: help;
}

.connector-point {
  fill: var(--rasa-code-bg);
  stroke-width: 2;
  opacity: 0.32;
  filter: drop-shadow(0 0 5px rgba(120, 167, 255, 0.16));
  transition:
    opacity 150ms ease,
    filter 150ms ease;
  pointer-events: none;
}

.connector-layer[data-connector-active="true"] .connector {
  stroke-width: 2;
  opacity: 0.54;
  filter: drop-shadow(0 0 8px rgba(120, 167, 255, 0.2));
}

.connector-layer[data-connector-active="true"] .connector[data-requires-intent="true"] {
  opacity: 0.3;
}

.connector-layer[data-connector-active="true"] .connector[data-hovered="true"] {
  stroke-width: 2.85;
  stroke-dasharray: none;
  opacity: 0.96;
  filter: drop-shadow(0 0 14px rgba(120, 167, 255, 0.34));
}

.connector-layer[data-connector-active="true"] .connector-point {
  opacity: 0.64;
}

.connector-layer[data-connector-active="true"] .connector-point-source,
.connector-layer[data-connector-active="true"] .connector-point-focus {
  filter: drop-shadow(0 0 8px color-mix(in srgb, var(--rasa-facts) 38%, transparent));
}

.connector-evidence-phase,
.connector-phase-source,
.connector-phase-focus,
.connector-point-evidence,
.connector-point-phase {
  stroke: var(--rasa-analysis);
}

.connector-source-focus,
.connector-point-source,
.connector-point-focus {
  stroke: var(--rasa-facts);
}

.connector-tip {
  position: absolute;
  z-index: 4;
  width: min(280px, 28vw);
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  border-radius: 8px;
  color: var(--rasa-text);
  background:
    linear-gradient(180deg, rgba(17, 24, 34, 0.98), rgba(12, 18, 25, 0.98));
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
  transform: translate(-50%, calc(-100% - 12px));
  pointer-events: none;
}

.connector-tip[hidden] {
  display: none;
}

.connector-tip::after {
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 10px;
  height: 10px;
  border-right: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  border-bottom: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  background: rgba(12, 18, 25, 0.98);
  content: "";
  transform: translateX(-50%) rotate(45deg);
}

.connector-tip strong,
.connector-tip span {
  position: relative;
  z-index: 1;
  display: block;
}

.connector-tip strong {
  color: var(--rasa-analysis);
  font-size: 11px;
  font-weight: 820;
  letter-spacing: 0;
  text-transform: uppercase;
}

.connector-tip span {
  margin-top: 3px;
  color: var(--rasa-muted);
  font-size: 12px;
  line-height: 1.35;
}

/* Rasa Systems Workbench direction */
.systems-shell {
  height: calc(100vh - 24px);
  grid-template-rows: auto auto auto minmax(0, 1fr) auto;
  gap: 10px;
  padding: 10px;
  background:
    radial-gradient(circle at 18% 0%, color-mix(in srgb, var(--rasa-blue) 10%, transparent), transparent 34%),
    radial-gradient(circle at 92% 12%, color-mix(in srgb, var(--rasa-violet) 8%, transparent), transparent 28%),
    linear-gradient(180deg, #081019, var(--rasa-bg) 32%, #090d12);
}

.systems-topbar {
  min-height: 64px;
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) auto minmax(360px, 1fr);
  align-items: center;
  gap: 16px;
  padding: 10px 14px;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 82%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--rasa-panel-raised) 88%, transparent);
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.24);
}

.systems-brand,
.systems-status,
.systems-nav {
  min-width: 0;
  display: flex;
  align-items: center;
}

.systems-brand {
  gap: 12px;
}

.systems-logo {
  width: 164px;
  height: 58px;
  object-fit: contain;
  object-position: left center;
}

.systems-title {
  min-width: 0;
  padding-left: 12px;
  border-left: 1px solid var(--rasa-line);
}

.systems-title h1 {
  font-size: 18px;
  font-weight: 820;
}

.systems-title p {
  margin: 3px 0 0;
  color: var(--rasa-reader);
  font-size: 12px;
  font-weight: 700;
}

.systems-nav {
  justify-content: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--rasa-line);
  border-radius: 9px;
  background: var(--rasa-panel-soft);
}

.systems-nav a {
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 7px;
  color: var(--rasa-muted);
  font-size: 13px;
  font-weight: 760;
  text-decoration: none;
}

.systems-nav a:hover,
.systems-nav a.active {
  color: var(--rasa-text);
  background: color-mix(in srgb, var(--rasa-blue) 15%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rasa-blue) 40%, transparent);
}

.systems-status {
  justify-content: flex-end;
  gap: 0;
}

.status-cell {
  min-width: 104px;
  padding: 4px 12px;
  border-left: 1px solid var(--rasa-line);
}

.status-cell span,
.status-cell strong {
  display: block;
}

.status-cell span {
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.status-cell strong {
  margin-top: 3px;
  color: var(--rasa-text);
  font-size: 12px;
  font-weight: 760;
}

.status-cell strong[data-state="ok"] {
  color: var(--rasa-green);
}

.status-cell strong[data-state="warn"] {
  color: var(--rasa-reader);
}

.systems-theme-toggle {
  margin-left: 10px;
  min-width: 42px;
  padding: 0 10px;
  border-radius: 8px;
}

.global-phase-panel {
  min-height: 94px;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 6px;
  padding: 10px 14px 8px;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 72%, transparent);
  border-radius: 10px;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--rasa-blue) 8%, transparent), transparent 42%),
    var(--rasa-panel-soft);
}

.global-phase-panel p {
  margin: 0;
  text-align: center;
  color: var(--rasa-muted);
  font-size: 12px;
}

.rasa-proof-strip {
  min-height: 78px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.proof-tile {
  min-width: 0;
  display: grid;
  gap: 4px;
  align-content: center;
  padding: 13px 14px;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 72%, transparent);
  border-radius: 10px;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--rasa-reader) 9%, transparent), transparent 48%),
    var(--rasa-panel-soft);
}

.proof-tile span {
  color: var(--rasa-reader);
  font-size: 11px;
  font-weight: 820;
  text-transform: uppercase;
}

.proof-tile strong {
  min-width: 0;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.proof-tile p {
  margin: 4px 0 0;
  color: var(--rasa-muted);
  font-size: 12px;
  line-height: 1.35;
}

.global-phase-rail {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 10px;
  align-items: stretch;
}

.global-phase-rail .phase-node {
  position: relative;
  min-height: 54px;
  border-radius: 9px;
}

.global-phase-rail .phase-node:not(:last-child)::after {
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  width: 10px;
  height: 1px;
  background: var(--rasa-line-strong);
  content: "";
}

.global-phase-rail .phase-node[data-tone="reader"],
.global-phase-rail .phase-node[data-tone="expand"] {
  border-color: color-mix(in srgb, var(--rasa-reader) 48%, var(--rasa-border));
}

.global-phase-rail .phase-node[data-tone="analysis"],
.global-phase-rail .phase-node[data-tone="ir"] {
  border-color: color-mix(in srgb, var(--rasa-blue) 42%, var(--rasa-border));
}

.global-phase-rail .phase-node[data-tone="facts"],
.global-phase-rail .phase-node[data-tone="checks"] {
  border-color: color-mix(in srgb, var(--rasa-green) 44%, var(--rasa-border));
}

.global-phase-rail .phase-node[data-tone="plan"],
.global-phase-rail .phase-node[data-tone="explain"] {
  border-color: color-mix(in srgb, var(--rasa-violet) 48%, var(--rasa-border));
}

.global-phase-rail .phase-node[data-tone="eval"],
.global-phase-rail .phase-node[data-tone="wasm"] {
  border-color: color-mix(in srgb, var(--rasa-red) 38%, var(--rasa-border));
}

.systems-shell .workbench-grid {
  grid-template-columns: minmax(260px, 0.76fr) minmax(560px, 1.42fr) minmax(360px, 0.92fr);
  gap: 10px;
}

.scenario-panel,
.source-panel,
.projection-panel {
  min-height: 0;
  display: grid;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--rasa-slot-accent, var(--rasa-line-strong)) 30%, var(--rasa-line-strong));
  border-radius: 10px;
  background: color-mix(in srgb, var(--rasa-panel) 92%, transparent);
}

.scenario-panel {
  grid-template-rows: auto minmax(0, 1fr);
}

.projection-panel {
  grid-template-rows: auto auto minmax(170px, 0.9fr) minmax(0, 1.1fr);
}

.source-panel.centerstage {
  min-width: 0;
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-columns: minmax(0, 1fr);
  border-color: color-mix(in srgb, var(--rasa-slot-accent, var(--rasa-blue)) 34%, var(--rasa-border));
}

.scenario-count,
.projection-rule {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 9px;
  border: 1px solid var(--rasa-line);
  border-radius: 999px;
  color: var(--rasa-muted);
  font-size: 11px;
  font-weight: 760;
}

.projection-rule {
  color: var(--rasa-reader);
}

.scenario-list.command-shelf {
  min-height: 0;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  align-content: start;
  align-items: start;
  gap: 9px;
  padding: 10px;
  border-bottom: 0;
  background: var(--rasa-panel-soft);
}

.scenario-list .example-card {
  height: auto;
  min-height: 156px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr) auto;
  padding: 12px;
  border-radius: 9px;
  overflow: visible;
}

.scenario-list .example-card[data-active="true"] {
  border-color: color-mix(in srgb, var(--rasa-reader) 62%, var(--rasa-border));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--rasa-reader) 11%, transparent), transparent 48%),
    var(--rasa-panel-raised);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rasa-reader) 22%, transparent);
}

.scenario-list .example-card strong {
  font-size: 14px;
}

.scenario-list .example-story {
  margin-top: 4px;
  color: var(--rasa-reader);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  font-weight: 760;
  white-space: normal;
}

.scenario-list .example-card p {
  margin: 5px 0 8px;
  color: var(--rasa-muted);
  font-size: 12px;
  line-height: 1.35;
  white-space: normal;
}

.example-phase-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.example-phase-tags span {
  min-height: 20px;
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0 6px;
  border: 1px solid color-mix(in srgb, var(--rasa-reader) 38%, var(--rasa-border));
  border-radius: 5px;
  color: var(--rasa-reader);
  font-size: 10px;
  font-weight: 760;
  text-transform: uppercase;
}

.scenario-list .example-actions {
  grid-template-columns: 1fr 1fr;
}

.stage-body {
  min-height: 0;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;
}

.editor-frame {
  height: 100%;
  border-top: 0;
}

.systems-shell .result-strip {
  grid-template-columns: minmax(0, 1fr) minmax(170px, 0.58fr);
  align-items: stretch;
  padding: 10px;
  border-top: 1px solid var(--rasa-border);
  border-bottom: 0;
}

.systems-shell .result-card {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.systems-shell .result-value {
  max-height: 68px;
  min-height: 0;
  padding-top: 5px;
  font-size: 13px;
  line-height: 1.35;
}

.systems-shell .metric-deck {
  grid-template-columns: 1fr;
}

.systems-shell .metric-card {
  min-height: 0;
  padding: 7px 9px;
}

.projection-deck {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.projection-chip {
  min-width: 0;
  display: grid;
  gap: 3px;
  padding: 9px 10px;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-panel-soft);
}

.projection-chip strong {
  overflow: hidden;
  color: var(--rasa-text);
  font-size: 12px;
  font-weight: 820;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.projection-chip span {
  color: var(--rasa-muted);
  font-size: 11px;
  font-weight: 700;
}

.projection-summary {
  display: flex;
  align-items: center;
  min-height: 38px;
  padding: 0 12px;
  border-bottom: 1px solid var(--rasa-border);
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 700;
}

.projection-panel .evidence-list {
  border-bottom: 1px solid var(--rasa-border);
}

.projection-layer-label {
  padding: 0 10px 6px;
  color: var(--rasa-muted);
  font-size: 11px;
  line-height: 1.35;
}

.evidence-card[data-projection-layer="plan"] {
  border-left: 3px solid var(--rasa-violet);
}

.evidence-card[data-projection-layer="ann-groups"],
.evidence-card[data-projection-layer="primary-tree"] {
  border-left: 3px solid var(--rasa-green);
}

.evidence-card[data-projection-layer="checks"],
.evidence-card[data-projection-layer="diagnostics"] {
  border-left: 3px solid var(--rasa-reader);
}

.evidence-card[data-projection-layer="trace"],
.evidence-card[data-projection-layer="capability"] {
  border-left: 3px solid var(--rasa-red);
}

.suite-preview-grid {
  min-height: 112px;
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: 10px;
}

.suite-preview {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(180px, 0.42fr) minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 72%, transparent);
  border-radius: 10px;
  background: var(--rasa-panel-soft);
}

.suite-preview strong {
  display: block;
  margin-top: 3px;
  color: var(--rasa-text);
  font-size: 14px;
}

.boundary-mini-rail {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.boundary-mini-rail li {
  min-height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--rasa-violet) 34%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-muted);
  font-size: 11px;
  font-weight: 820;
  text-transform: uppercase;
}

.coverage-mini-grid {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.coverage-chip {
  min-width: 0;
  display: grid;
  justify-items: center;
  gap: 3px;
  padding: 9px 6px;
  border: 1px solid color-mix(in srgb, var(--rasa-green) 34%, var(--rasa-border));
  border-radius: 8px;
  background: color-mix(in srgb, var(--rasa-green) 6%, transparent);
}

.coverage-chip strong {
  margin: 0;
  color: var(--rasa-green);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 14px;
}

.coverage-chip span {
  max-width: 100%;
  overflow: hidden;
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 780;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.shell-article {
  height: auto;
  min-height: 560px;
}

.shell-article .topbar {
  display: none;
}

.shell-article .cockpit,
.shell-article .workbench-grid {
  grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1.1fr);
}

.shell-article .focus-panel {
  display: grid;
  grid-column: 1 / -1;
  min-height: 260px;
}

.shell-article .focus-body {
  max-height: 340px;
}

.shell-article .source-panel,
.shell-article .evidence-panel {
  min-height: 520px;
}

@media (max-width: 1240px) {
  .systems-shell {
    height: auto;
    min-height: calc(100vh - 24px);
    overflow: visible;
  }

  .systems-topbar {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .systems-nav,
  .systems-status {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .status-cell {
    min-width: 96px;
    border-left: 0;
    border-right: 1px solid var(--rasa-line);
  }

  .global-phase-rail {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .global-phase-rail .phase-node::after {
    display: none;
  }

  .systems-shell .workbench-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .source-panel {
    order: 1;
  }

  .scenario-panel {
    order: 2;
  }

  .projection-panel {
    order: 3;
  }

  .scenario-panel,
  .source-panel,
  .projection-panel {
    min-height: 420px;
  }

  .scenario-panel {
    max-height: 520px;
  }

  .source-panel.centerstage {
    min-height: 560px;
  }
}

@media (max-width: 1060px) {
  .shell {
    height: auto;
    min-height: calc(100vh - 24px);
    overflow: visible;
  }

  .cockpit,
  .workbench-grid,
  .systems-shell .workbench-grid,
  .shell-article .cockpit {
    grid-template-columns: 1fr;
  }

  .source-panel,
  .evidence-panel,
  .focus-panel,
  .shell-article .source-panel,
  .shell-article .evidence-panel {
    min-height: 420px;
  }

  .focus-panel {
    min-height: 360px;
  }
}

@media (max-width: 720px) {
  .topbar {
    grid-template-columns: 1fr;
  }

  .status {
    justify-content: flex-start;
  }

  .rasa-proof-strip {
    grid-template-columns: 1fr;
  }

  .result-strip {
    grid-template-columns: 1fr;
  }
}
`;
class Td extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.engine = null, this.editor = null, this.runCount = 0, this.currentRun = null, this.inspectionSession = new Md(), this.selectedGroup = null, this.workbenchModel = null, this.syntaxTimer = null, this.resizeObserver = null, this.themeListener = null;
  }
  connectedCallback() {
    this.syncTheme(Yo()), this.themeListener = (t) => this.syncTheme(t.detail?.theme || "dark"), window.addEventListener("rasa-theme-change", this.themeListener), this.render();
    const e = Et({});
    this.applyVisualSlots(e), this.renderPhaseRail(null, e), this.mountEditor(), this.loadEngine(), this.refreshSyntax();
  }
  disconnectedCallback() {
    this.syntaxTimer && (clearTimeout(this.syntaxTimer), this.syntaxTimer = null), this.editor?.destroy(), this.editor = null, this.resizeObserver?.disconnect(), this.resizeObserver = null, this.themeListener && (window.removeEventListener("rasa-theme-change", this.themeListener), this.themeListener = null);
  }
  get runtimeUrl() {
    return this.getAttribute("runtime-url") || "./ras.wasm";
  }
  get demoMode() {
    return this.getAttribute("mode") === "article" ? "article" : "workbench";
  }
  render() {
    const e = sl({ examples: Wi });
    this.shadowRoot.innerHTML = `
      <style>${Jo()}${ua}${Rd}</style>
      <section class="shell systems-shell shell-${this.demoMode}" aria-label="Rasa systems workbench">
        <header class="systems-topbar">
          <div class="systems-brand">
            <img class="systems-logo" src="${Uo.logo}" alt="Rasa" />
            <div class="systems-title">
              <h1>${k(e.header.title)}</h1>
              <p>${k(e.header.subtitle)}</p>
            </div>
          </div>
          <nav class="systems-nav" aria-label="Rasa demo sections">
            ${e.header.nav.map(jd).join("")}
          </nav>
          <div class="systems-status" aria-label="Runtime status">
            ${e.header.statusCells.map(Wd).join("")}
            <button class="theme-toggle systems-theme-toggle" type="button" data-role="theme-toggle" aria-label="Toggle color theme">Toggle Theme</button>
          </div>
        </header>

        <section class="global-phase-panel ${P.classes.visualSlot}" ${P.attrs.visualSlot}="phase-route" aria-label="Rasa phase spine">
          <div class="global-phase-rail ${P.classes.phaseRoute}" data-role="phase-rail">
          </div>
          <p>${k(e.phasePanel.title)}</p>
        </section>

        <section class="rasa-proof-strip" aria-label="What this workbench proves">
          ${e.proofTiles.map(Fd).join("")}
        </section>

        <section class="workbench-grid" aria-label="Rasa evidence workbench">
          <svg class="connector-layer" data-role="connectors" aria-hidden="true"></svg>
          <div class="connector-hotspots" data-role="connector-hotspots"></div>
          <div class="connector-tip" data-role="connector-tip" hidden>
            <strong data-role="connector-tip-title"></strong>
            <span data-role="connector-tip-detail"></span>
          </div>

          <section class="scenario-panel" aria-label="Programs with pressure">
            <div class="panel-head">
              <div>
                <span class="label">${k(e.scenarioPanel.label)}</span>
                <span class="panel-subtitle">${k(e.scenarioPanel.subtitle)}</span>
              </div>
              <span class="scenario-count">${e.scenarioPanel.count}</span>
            </div>
            <div class="scenario-list command-shelf" data-role="examples">
              ${Wi.map((t, i) => Vd(t, i)).join("")}
            </div>
          </section>

          <section class="source-panel centerstage ${P.classes.visualSlot}" ${P.attrs.visualSlot}="source-editor" aria-label="Rasa centerstage">
            <div class="stage-head">
              <div>
                <span class="label">${k(e.sourceStage.label)}</span>
                <span class="panel-subtitle">${k(e.sourceStage.subtitle)}</span>
              </div>
              <div class="stage-proof-chips" aria-label="Inspectable phase products">
                ${e.sourceStage.chips.map(zd).join("")}
              </div>
            </div>

            <div class="stage-body">
              <div class="editor-frame">
                <div class="editor-head">
                  <div>
                    <span class="label">${k(e.sourceStage.inputLabel)}</span>
                    <span class="panel-subtitle">${k(e.sourceStage.inputSubtitle)}</span>
                  </div>
                  <span class="run-hint">${k(e.sourceStage.runHint)}</span>
                </div>
                <div class="editor" data-role="editor"></div>
                <div class="editor-foot">
                  <span>${k(e.sourceStage.footnote)}</span>
                  <button type="button" class="run-button" data-role="run">Run</button>
                </div>
              </div>
            </div>
            <div class="result-strip" data-role="result-strip"></div>
          </section>

          <aside class="projection-panel ${P.classes.visualSlot}" ${P.attrs.visualSlot}="value-inspector" aria-label="Projection of truth">
            <div class="panel-head">
              <div>
                <span class="label">${k(e.projectionPanel.label)}</span>
                <span class="panel-subtitle" data-role="last-run">${k(e.projectionPanel.subtitle)}</span>
              </div>
              <span class="projection-rule" title="${k(e.projectionPanel.ruleHelp)}">${k(e.projectionPanel.rule)}</span>
            </div>
            <div class="projection-summary" data-role="projection-summary">
              <span data-role="evidence-count">${k(e.projectionPanel.emptySummary)}</span>
            </div>
            <div class="evidence-list ${P.classes.visualSlot}" ${P.attrs.visualSlot}="projection-legend" data-role="evidence-list" role="list"></div>
            <div class="focus-body ${P.classes.visualSlot}" ${P.attrs.visualSlot}="diagnostics" data-role="focus-body"></div>
          </aside>
        </section>

        <section class="suite-preview-grid" aria-label="How to read the Rasa demos">
          ${e.suitePreviews.map(qd).join("")}
        </section>
      </section>
    `, this.shadowRoot.querySelector('[data-role="run"]').addEventListener("click", () => this.run()), this.shadowRoot.querySelector('[data-role="theme-toggle"]')?.addEventListener("click", () => this.syncTheme(Xo())), this.shadowRoot.querySelector('[data-role="examples"]').addEventListener("click", (t) => this.applyExample(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("click", (t) => this.pinEvidence(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("keydown", (t) => this.pinEvidenceByKey(t)), this.shadowRoot.querySelector('[data-role="connectors"]').addEventListener("pointerover", (t) => this.showConnectorTip(t)), this.shadowRoot.querySelector('[data-role="connectors"]').addEventListener("pointerout", (t) => this.hideConnectorTip(t)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("pointerover", (t) => this.showConnectorTip(t)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("pointerout", (t) => this.hideConnectorTip(t)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("focusin", (t) => this.showConnectorTip(t)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("focusout", (t) => this.hideConnectorTip(t)), this.resizeObserver = new ResizeObserver(() => this.renderConnectors()), this.resizeObserver.observe(this.shadowRoot.querySelector(".workbench-grid")), this.updateThemeToggle();
  }
  syncTheme(e) {
    const t = e === "light" ? "light" : "dark";
    this.setAttribute("data-theme", t), this.updateThemeToggle();
  }
  updateThemeToggle() {
    const e = this.shadowRoot?.querySelector('[data-role="theme-toggle"]');
    if (e) {
      const t = this.getAttribute("data-theme") || "dark";
      e.textContent = Gn(t), e.setAttribute("aria-label", `Switch to ${Gn(t).toLowerCase()} theme`);
    }
  }
  mountEditor() {
    const e = this.shadowRoot.querySelector('[data-role="editor"]'), t = this.getAttribute("source") || Ko;
    this.editor = Zh({
      parent: e,
      doc: t,
      onRun: () => this.run(),
      onChange: () => {
        this.scheduleSyntaxRefresh(), this.clearEvidenceState();
      },
      extensions: [od()]
    }), this.editor.focus();
  }
  async loadEngine() {
    try {
      if (this.engine = await qn.load(this.runtimeUrl), this.engine.available === !1) {
        this.setPill("runtime", "runtime unavailable", "warn"), this.setPill("syntax", "syntax fallback", "warn"), this.showRuntimeUnavailable(), this.scheduleSyntaxRefresh(0);
        return;
      }
      this.setPill("runtime", "runtime ready", "ok"), this.scheduleSyntaxRefresh(0);
    } catch (e) {
      this.setPill("runtime", "runtime unavailable", "warn"), this.showError("Engine unavailable", e.message);
    }
  }
  scheduleSyntaxRefresh(e = 80) {
    this.syntaxTimer && clearTimeout(this.syntaxTimer), this.syntaxTimer = setTimeout(() => {
      this.syntaxTimer = null, this.refreshSyntax();
    }, e);
  }
  async refreshSyntax() {
    if (!(!this.engine || !this.editor))
      try {
        const e = this.engine.syntaxTokens(this.sourceText());
        this.editor.dispatch({
          effects: Vn.of(e.tokens || [])
        }), e.status === "unavailable" ? this.setPill("syntax", "syntax fallback", "warn") : this.setPill("syntax", "syntax ready", "ok");
      } catch {
        this.setPill("syntax", "syntax pending", "warn");
      }
  }
  async run() {
    const e = this.shadowRoot.querySelector('[data-role="run"]');
    e.disabled = !0;
    try {
      if (!this.engine)
        throw new Error("Rasa engine is not loaded yet");
      if (this.engine.available === !1) {
        this.showRuntimeUnavailable();
        return;
      }
      const t = this.sourceText(), i = this.inspectionSession.inspect(this.engine, t);
      this.runCount += 1, this.currentRun = { source: t, ...i }, this.selectedGroup = null, this.renderWorkbench();
    } catch (t) {
      this.showError("Inspection error", t.message);
    } finally {
      e.disabled = this.engine?.available === !1, this.editor?.focus();
    }
  }
  applyExample(e) {
    const t = e.target.closest("button[data-example-index][data-example-action]");
    if (!t)
      return;
    const i = Wi[Number(t.dataset.exampleIndex)];
    if (!i || !this.editor)
      return;
    const s = t.dataset.exampleAction;
    if (s === "load")
      for (const c of this.shadowRoot.querySelectorAll(".example-card"))
        c.dataset.active = String(c.dataset.exampleIndex === t.dataset.exampleIndex);
    const r = s === "append" ? Gd(i.source) : i.source, o = s === "append" ? this.editor.state.doc.length : 0, a = s === "append" ? this.editor.state.doc.length : this.editor.state.doc.length, l = o + r.length;
    this.editor.dispatch({
      changes: { from: o, to: a, insert: r },
      selection: { anchor: l },
      scrollIntoView: !0
    }), this.editor.focus(), this.scheduleSyntaxRefresh(0), this.clearEvidenceState();
  }
  pinEvidence(e) {
    const t = e.target.closest("[data-evidence-group]");
    t && (this.selectedGroup = t.dataset.evidenceGroup, this.renderWorkbench());
  }
  pinEvidenceByKey(e) {
    if (e.key !== "Enter" && e.key !== " ")
      return;
    const t = e.target.closest("[data-evidence-group]");
    t && (e.preventDefault(), this.selectedGroup = t.dataset.evidenceGroup, this.renderWorkbench());
  }
  showConnectorTip(e) {
    const t = e.target.closest?.(".connector-hotspot, .connector-hit");
    if (!t)
      return;
    const i = this.shadowRoot.querySelector('[data-role="connectors"]'), s = this.shadowRoot.querySelector('[data-role="connector-tip"]');
    i.dataset.connectorActive = "true";
    for (const r of i.querySelectorAll(".connector"))
      r.dataset.hovered = String(r.dataset.connector === t.dataset.connector);
    for (const r of this.shadowRoot.querySelectorAll(".connector-hotspot, .connector-hit"))
      r.dataset.active = String(r.dataset.connector === t.dataset.connector);
    s.querySelector('[data-role="connector-tip-title"]').textContent = t.dataset.tipTitle || "", s.querySelector('[data-role="connector-tip-detail"]').textContent = t.dataset.tipDetail || "", s.style.left = `${Number(t.dataset.tipX || 0)}px`, s.style.top = `${Number(t.dataset.tipY || 0)}px`, s.hidden = !1;
  }
  hideConnectorTip(e) {
    if (e?.relatedTarget?.closest?.(".connector-hotspot, .connector-hit"))
      return;
    const t = this.shadowRoot.querySelector('[data-role="connectors"]'), i = this.shadowRoot.querySelector('[data-role="connector-tip"]');
    delete t.dataset.connectorActive;
    for (const s of t.querySelectorAll(".connector"))
      delete s.dataset.hovered;
    for (const s of this.shadowRoot.querySelectorAll(".connector-hotspot, .connector-hit"))
      delete s.dataset.active;
    i.hidden = !0;
  }
  clearEvidenceState({ evidenceCount: e = "run to inspect evidence", lastRun: t = "not run yet" } = {}) {
    this.currentRun = null, this.selectedGroup = null, this.workbenchModel = null, this.editor?.dispatch({ effects: Sn.of([]) }), this.hideConnectorTip(), this.shadowRoot.querySelector('[data-role="result-strip"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-list"]').textContent = "", this.shadowRoot.querySelector('[data-role="focus-body"]').textContent = "", this.shadowRoot.querySelector('[data-role="connectors"]').textContent = "", this.shadowRoot.querySelector('[data-role="connector-hotspots"]').textContent = "";
    const i = Et({});
    this.applyVisualSlots(i), this.renderPhaseRail(null, i), this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = e, this.shadowRoot.querySelector('[data-role="last-run"]').textContent = t;
  }
  renderWorkbench() {
    if (!this.currentRun)
      return;
    let e = this.selectedGroup, t = Yn(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    });
    (!e || !t.groups.some((o) => o.id === e)) && (e = Ga(t.groups), this.selectedGroup = e || null, t = Yn(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    })), this.workbenchModel = t;
    const i = Et(t);
    this.applyVisualSlots(i), this.renderResult(t), this.renderPhaseRail(t, i), this.renderEvidenceList(t), this.renderFocus(t);
    const s = this.selectedGroup ? t.sourceHighlights : [];
    this.editor?.dispatch({ effects: Sn.of(s) });
    const r = this.currentRun.cacheHit ? " / cached" : "";
    this.shadowRoot.querySelector('[data-role="last-run"]').textContent = `run ${this.runCount} / ${t.status}${r}`, this.renderConnectors(t);
  }
  applyVisualSlots(e) {
    la(this.shadowRoot, e.slots || []);
  }
  renderResult(e) {
    const t = this.shadowRoot.querySelector('[data-role="result-strip"]'), i = Xa(e);
    t.textContent = "", t.append(Ed(i.result, this), Od(i.metrics));
  }
  renderPhaseRail(e, t = Et(e)) {
    const i = this.shadowRoot.querySelector('[data-role="phase-rail"]');
    ha(i, t.phaseRoute);
  }
  renderEvidenceList(e) {
    const t = this.shadowRoot.querySelector('[data-role="evidence-list"]'), i = Ka(e, { selectedId: this.selectedGroup });
    if (t.textContent = "", this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = i.summary, i.empty) {
      const s = document.createElement("div");
      s.className = "empty-sections", s.textContent = i.emptyMessage, t.append(s);
      return;
    }
    for (const s of i.cards) {
      const r = document.createElement("article");
      r.className = "evidence-card", r.dataset.evidenceGroup = s.id, r.dataset.phase = s.phases.join(" "), r.dataset.domain = s.domains.join(" "), r.dataset.provenance = s.provenances.join(" "), r.dataset.projectionLayer = s.projectionLayer, r.setAttribute(P.attrs.projectionLayer, s.projectionLayer), r.dataset.selected = String(s.selected), r.tabIndex = 0, r.setAttribute("role", "listitem"), r.setAttribute("aria-current", s.selected ? "true" : "false"), r.innerHTML = `
        <div class="evidence-card-head">
          <span class="evidence-subject">
            <span class="evidence-label"></span>
            <span class="evidence-id"></span>
          </span>
          <span class="evidence-span"></span>
        </div>
        <div class="projection-layer-label"></div>
        <div class="evidence-tags"></div>
        <div class="evidence-entries"></div>
      `, r.querySelector(".evidence-label").textContent = s.subject, r.querySelector(".evidence-id").textContent = s.subjectId, r.querySelector(".evidence-span").textContent = s.spanLabel, r.querySelector(".projection-layer-label").textContent = `${s.projectionLabel} · ${s.projectionDescription}`;
      const o = r.querySelector(".evidence-tags");
      for (const l of s.tags)
        o.append(Go(l));
      const a = r.querySelector(".evidence-entries");
      for (const l of s.entries) {
        const c = document.createElement("div");
        c.className = "evidence-entry", c.dataset.phase = l.phase, c.dataset.provenance = l.provenance, c.textContent = l.text, a.append(c);
      }
      t.append(r);
    }
  }
  renderFocus(e) {
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]'), i = Za(e);
    t.textContent = "";
    for (const s of i.sections)
      s.kind === "focus" ? t.append(Ld(s.card, this)) : s.kind === "plan" ? t.append(Bd(s.card)) : s.kind === "diagnostics" ? t.append(Pd(s.panel)) : s.kind === "artifact" && t.append($d(s, this.currentRun.artifact, this));
  }
  showError(e, t) {
    this.clearEvidenceState({ evidenceCount: "browser inspection error", lastRun: e });
    const i = this.shadowRoot.querySelector('[data-role="focus-body"]'), s = document.createElement("article");
    s.className = "focus-card focus-card-error", s.innerHTML = `
      <div class="focus-card-head">
        <h2></h2>
        <span class="status-text">client</span>
      </div>
      <pre class="edn-block"></pre>
    `, s.querySelector("h2").textContent = e, s.querySelector("pre").textContent = t, i.append(s);
  }
  showRuntimeUnavailable() {
    const e = this.shadowRoot.querySelector('[data-role="run"]');
    e && (e.disabled = !0, e.title = "Browser Wasm component runtime is unavailable."), this.clearEvidenceState({
      evidenceCount: "source display available; browser runtime unavailable",
      lastRun: "runtime unavailable"
    });
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]'), i = document.createElement("article");
    i.className = "focus-card focus-card-pending", i.innerHTML = `
      <div class="focus-card-head">
        <h2>Browser runtime unavailable</h2>
        <span class="status-text">wasm-component</span>
      </div>
      <p class="focus-lede"></p>
      <p class="focus-note"></p>
    `, i.querySelector(".focus-lede").textContent = "Browser execution requires the Rasa Wasm component runtime and generated adapter assets to load successfully.", i.querySelector(".focus-note").textContent = "Check that ras.wasm and rasa-component assets are published together. Source display, examples, and static inspection surfaces remain available when runtime loading fails.", t.append(i);
  }
  setPill(e, t, i) {
    const s = this.shadowRoot.querySelector(`[data-role="${e}"]`);
    s.textContent = t, s.dataset.state = i || "";
  }
  syntaxTokensFor(e) {
    try {
      return this.engine?.syntaxTokens(e)?.tokens || [];
    } catch {
      return [];
    }
  }
  sourceText() {
    return this.editor?.state.doc.toString() || "";
  }
  runtimeReport() {
    return !this.engine || !this.currentRun ? null : this.inspectionSession.runtimeReport(
      this.engine,
      this.currentRun.source,
      (e) => this.syntaxTokensFor(e)
    );
  }
  renderConnectors(e = null) {
    const t = this.shadowRoot.querySelector('[data-role="connectors"]'), i = this.shadowRoot.querySelector('[data-role="connector-hotspots"]');
    if (!t || !i)
      return;
    if (!this.selectedGroup) {
      t.textContent = "", i.textContent = "";
      return;
    }
    const s = e || this.workbenchModel, r = this.shadowRoot.querySelector(".workbench-grid"), o = this.shadowRoot.querySelector(
      `.evidence-card[data-evidence-group="${CSS.escape(this.selectedGroup)}"]`
    ), a = s?.activeGroup || null, l = a?.phases?.[0] || "", c = l ? this.shadowRoot.querySelector(`.phase-node[data-phase-node="${CSS.escape(l)}"]`) : null, d = s?.sourceHighlights?.[0] || null ? this.shadowRoot.querySelector(".rasa-evidence-pinned") : null, u = this.shadowRoot.querySelector(".focus-body .focus-card");
    if (!r || !o || !u || !c)
      return;
    t.textContent = "", i.textContent = "";
    const f = r.getBoundingClientRect(), p = o.getBoundingClientRect(), g = c.getBoundingClientRect(), m = u.getBoundingClientRect(), b = Math.max(1, f.width), v = Math.max(1, f.height), A = {
      evidence: zt(p.right, p.top + p.height / 2, f),
      phase: zt(g.left + g.width / 2, g.top + g.height / 2, f),
      focus: zt(m.left, m.top + 44, f)
    };
    if (d) {
      const S = d.getBoundingClientRect();
      A.source = zt(
        S.left + S.width / 2,
        S.top + S.height / 2,
        f
      );
    }
    const E = Ya({
      activeGroup: a,
      anchors: A
    });
    t.setAttribute("viewBox", `0 0 ${b} ${v}`), t.innerHTML = `
      ${E.segments.map(Ud).join("")}
      ${E.points.map((S) => Yd(S.kind, S)).join("")}
    `, i.innerHTML = E.segments.map(_d).join("");
  }
}
function Ed(n, e) {
  const t = document.createElement("article");
  t.className = "result-card", t.dataset.status = n.status || "unknown", t.innerHTML = `
    <div class="result-card-head">
      <span class="metric-label">Result</span>
      <span class="status-text"></span>
    </div>
    <pre class="result-value"></pre>
  `, t.querySelector(".status-text").textContent = n.status || "";
  const i = String(n.value ?? "nil");
  return fi(t.querySelector(".result-value"), i, e.syntaxTokensFor(i)), t;
}
function Od(n = []) {
  const e = document.createElement("div");
  e.className = "metric-deck";
  for (const t of n)
    e.append(Dd(t.label, t.value, t.meta));
  return e;
}
function Dd(n, e, t) {
  const i = document.createElement("div");
  return i.className = "metric-card", i.innerHTML = `
    <span class="metric-label"></span>
    <strong class="metric-value"></strong>
    <span class="metric-meta"></span>
  `, i.querySelector(".metric-label").textContent = n, i.querySelector(".metric-value").textContent = String(e ?? "nil"), i.querySelector(".metric-meta").textContent = t || "", i;
}
function Go(n) {
  const e = document.createElement("span");
  return e.className = "semantic-tag", e.textContent = n.startsWith(":") ? n : `:${n}`, e;
}
function Ld(n, e) {
  const t = document.createElement("article");
  t.className = "focus-card", t.dataset.phase = n.phase, t.dataset.domain = n.domain, t.dataset.provenance = n.provenance, t.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="focus-tags"></div>
    <pre class="edn-block"></pre>
  `, t.querySelector("h2").textContent = n.title, t.querySelector(".status-text").textContent = n.status;
  const i = t.querySelector(".focus-tags");
  for (const s of n.tags)
    i.append(Go(s));
  return fi(
    t.querySelector(".edn-block"),
    n.rendered,
    e.syntaxTokensFor(n.rendered)
  ), t;
}
function Bd(n) {
  const e = document.createElement("article");
  e.className = "focus-card plan-card", e.dataset.phase = n.phase, e.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="plan-grid"></div>
  `, e.querySelector("h2").textContent = n.title, e.querySelector(".status-text").textContent = n.status;
  const t = e.querySelector(".plan-grid");
  for (const i of n.rows)
    t.append(Hd(i.label, i.value, i.kind));
  return e;
}
function Pd(n) {
  const e = document.createElement("article");
  e.className = "focus-card diagnostics-card", e.innerHTML = `
    <div class="focus-card-head">
      <div>
        <h2></h2>
        <p class="diagnostics-note"></p>
      </div>
      <span class="status-text"></span>
    </div>
    <div class="diagnostic-list"></div>
  `, e.querySelector("h2").textContent = n.title, e.querySelector(".diagnostics-note").textContent = n.note, e.querySelector(".status-text").textContent = n.status;
  const t = e.querySelector(".diagnostic-list");
  for (const i of n.cards) {
    const s = document.createElement("div");
    s.className = "diagnostic-card", s.dataset.phase = i.phase, s.dataset.status = i.status, s.innerHTML = `
      <div class="diagnostic-head">
        <strong></strong>
        <span></span>
      </div>
      <p></p>
      <dl class="diagnostic-detail"></dl>
      <div class="source-excerpt" data-field="source-excerpt"></div>
    `, s.querySelector("strong").textContent = i.title, s.querySelector("span").textContent = i.label, s.querySelector("p").textContent = i.message;
    const r = s.querySelector(".diagnostic-detail");
    for (const a of i.details) {
      const l = document.createElement("div"), c = document.createElement("dt"), h = document.createElement("dd");
      h.dataset.field = a.field, c.textContent = a.label, h.textContent = a.value, l.append(c, h), r.append(l);
    }
    const o = s.querySelector('[data-field="source-excerpt"]');
    if (i.sourceExcerpt?.lines?.length)
      o.replaceChildren(Id(i.sourceExcerpt));
    else if (i.excerpt) {
      const a = document.createElement("code");
      a.textContent = i.excerpt, o.replaceChildren(a);
    } else
      o.remove();
    t.append(s);
  }
  return e;
}
function Id(n) {
  const e = document.createElement("div");
  e.className = "source-excerpt-frame";
  for (const t of n.lines || []) {
    const i = document.createElement("div");
    i.className = "source-excerpt-line";
    const s = document.createElement("span");
    s.className = "source-excerpt-gutter", s.textContent = String(t.line ?? "");
    const r = document.createElement("code");
    r.className = "source-excerpt-code", Nd(r, t, n.markers || []), i.append(s, r), e.append(i);
  }
  return e;
}
function Nd(n, e, t) {
  for (const i of nl(e, t))
    if (i.marker) {
      const s = document.createElement("span");
      s.className = "source-marker", i.zero && s.classList.add("source-marker-zero"), s.dataset.kind = i.marker.kind, s.dataset.severity = i.marker.severity, s.title = i.marker.label, s.textContent = i.text, n.append(s);
    } else i.text && n.append(document.createTextNode(i.text));
}
function $d(n, e, t) {
  const i = document.createElement("details");
  return i.className = "debug-artifact", i.innerHTML = `
    <summary></summary>
    <div class="debug-artifact-body"></div>
  `, i.querySelector("summary").textContent = n.title, i.addEventListener(
    "toggle",
    () => {
      if (!i.open || i.dataset.rendered === "true")
        return;
      const s = i.querySelector(".debug-artifact-body"), r = document.createElement("pre");
      r.className = "edn-block";
      const o = document.createElement("div");
      o.className = "runtime-summary", o.textContent = "Runtime report";
      const a = document.createElement("pre");
      a.className = "edn-block runtime-report";
      let l = null;
      const c = Ia(e);
      try {
        l = t.runtimeReport();
      } catch (h) {
        l = { text: `runtime report unavailable: ${h.message}`, tokens: [] };
      }
      fi(r, c, t.syntaxTokensFor(c)), fi(a, l?.text || "nil", l?.tokens || []), s.append(r, o, a), i.dataset.rendered = "true";
    },
    { once: !0 }
  ), i;
}
function Hd(n, e, t = "") {
  const i = document.createElement("div");
  return i.className = "plan-row", i.dataset.kind = t, i.innerHTML = `
    <span></span>
    <strong></strong>
  `, i.querySelector("span").textContent = n, i.querySelector("strong").textContent = e, i;
}
function jd(n) {
  return `<a class="${n.active ? "active" : ""}" href="${k(n.href)}">${k(n.label)}</a>`;
}
function Wd(n) {
  const e = n.state ? ` data-state="${k(n.state)}"` : "";
  return `
    <span class="status-cell">
      <span>${k(n.label)}</span>
      <strong data-role="${k(n.role)}"${e}>${k(n.value)}</strong>
    </span>
  `;
}
function Fd(n) {
  const e = (n.phaseIds || []).map(k).join(" ");
  return `
    <article class="proof-tile" data-slot-id="${k(n.slotId || "")}" data-phase-ids="${e}">
      <span>${k(n.label)}</span>
      <strong>${k(n.meta)}</strong>
      <p>${k(n.text)}</p>
    </article>
  `;
}
function zd(n) {
  return `<span data-phase-id="${k(n.phaseId)}" data-slot-id="${k(n.slotId)}">${k(n.label)}</span>`;
}
function Vd(n, e) {
  const t = k(n.source.split(`
`).find(Boolean) || n.source), i = (n.phases || []).slice(0, 5).map((s) => `<span>${k(s)}</span>`).join("");
  return `
    <article class="example-card" data-example-index="${e}" data-active="${e === 0 ? "true" : "false"}">
      <div>
        <strong>${k(n.label)}</strong>
        <span class="example-story">${k(n.story || t)}</span>
        <p>${k(n.description || t)}</p>
        <div class="example-phase-tags">${i}</div>
      </div>
      <div class="example-actions">
        <button type="button" class="example-button" data-example-index="${e}" data-example-action="load">Load</button>
        <button type="button" class="example-button example-button-secondary" data-example-index="${e}" data-example-action="append">Append</button>
      </div>
    </article>
  `;
}
function qd(n) {
  const e = n.steps ? `<ol class="boundary-mini-rail">${n.steps.map((t) => `<li>${k(t)}</li>`).join("")}</ol>` : `<div class="coverage-mini-grid">${(n.coverage || []).map(Kd).join("")}</div>`;
  return `
    <article class="suite-preview ${k(n.className || "")}" data-slot-id="${k(n.slotId || "")}">
      <div>
        <span class="label">${k(n.label)}</span>
        <strong>${k(n.title)}</strong>
      </div>
      ${e}
    </article>
  `;
}
function Kd(n) {
  return `
    <span class="coverage-chip">
      <strong>${k(n.value)}</strong>
      <span>${k(n.label)}</span>
    </span>
  `;
}
function fi(n, e, t) {
  n.textContent = "";
  for (const i of ed(e, t)) {
    if (!i.className) {
      n.append(document.createTextNode(i.text));
      continue;
    }
    const s = document.createElement("span");
    s.className = i.className, s.textContent = i.text, n.append(s);
  }
}
function Gd(n) {
  return `

${n}`;
}
function zt(n, e, t) {
  return {
    x: n - t.left,
    y: e - t.top
  };
}
function Ud(n) {
  const e = n.requiresIntent ? "true" : "false";
  return `
    <path class="connector connector-${n.kind}" data-connector="${n.kind}" data-requires-intent="${e}" d="${n.d}"></path>
    <path class="connector-hit connector-hit-${n.kind}" data-connector="${n.kind}" data-requires-intent="${e}" data-tip-title="${k(n.title)}" data-tip-detail="${k(n.detail)}" data-tip-x="${n.mid.x}" data-tip-y="${n.mid.y}" d="${n.d}"></path>
  `.trim();
}
function _d(n) {
  const e = n.requiresIntent ? "true" : "false";
  return `
    <button class="connector-hotspot connector-hotspot-${n.kind}" type="button" aria-label="${k(n.title)}" data-connector="${n.kind}" data-requires-intent="${e}" data-tip-title="${k(n.title)}" data-tip-detail="${k(n.detail)}" data-tip-x="${n.mid.x}" data-tip-y="${n.mid.y}" style="left: ${n.mid.x}px; top: ${n.mid.y}px"></button>
  `.trim();
}
function Yd(n, e) {
  return `<circle class="connector-point connector-point-${n}" cx="${e.x}" cy="${e.y}" r="3"></circle>`;
}
function k(n) {
  return String(n).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
customElements.define("rasa-browser-inspection-workbench", Td);
