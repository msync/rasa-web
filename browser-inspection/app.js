const Ya = Object.freeze({
  logo: "./assets/brand/logo.svg",
  mark: "./assets/brand/mark.svg"
}), or = "rasa.theme", Vt = Object.freeze({
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
function Xa() {
  return `
    :host {
      ${vi(Vt.dark)}
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
      ${vi(Vt.light)}
    }

    :host([data-theme="dark"]) {
      ${vi(Vt.dark)}
    }
  `;
}
function Ja(s = document.documentElement) {
  const e = localStorage.getItem(or), t = e === "light" || e === "dark" ? e : window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
  return lr(t, s), t;
}
function lr(s, e = document.documentElement) {
  const t = s === "light" ? "light" : "dark";
  return e.dataset.rasaTheme = t, e.setAttribute("data-theme", t), localStorage.setItem(or, t), window.dispatchEvent(new CustomEvent("rasa-theme-change", { detail: { theme: t } })), t;
}
function Qa(s = document.documentElement) {
  return lr(s.dataset.rasaTheme === "light" ? "dark" : "light", s);
}
function Gs(s) {
  return s === "light" ? "Dark" : "Light";
}
function vi(s) {
  return `
      color-scheme: ${s.colorScheme};
      --rasa-surface: ${s.surface};
      --rasa-surface-lift: ${s.surfaceLift};
      --rasa-panel: ${s.panel};
      --rasa-panel-soft: ${s.panelSoft};
      --rasa-panel-raised: ${s.panelRaised};
      --rasa-line: ${s.line};
      --rasa-line-strong: ${s.lineStrong};
      --rasa-text: ${s.text};
      --rasa-muted: ${s.muted};
      --rasa-dim: ${s.dim};
      --rasa-gold: ${s.gold};
      --rasa-blue: ${s.blue};
      --rasa-green: ${s.green};
      --rasa-violet: ${s.violet};
      --rasa-teal: ${s.teal};
      --rasa-red: ${s.red};
      --rasa-success: ${s.success};
      --rasa-danger: ${s.danger};
      --rasa-warning: ${s.warning};
      --rasa-code-bg: ${s.codeBg};
      --rasa-button-text: ${s.buttonText};
      --rasa-shadow: ${s.shadow};
      --rasa-backdrop: ${s.backdrop};
      --rasa-radius: ${s.radius};
  `;
}
function Za() {
  return `
    ${Xa()}

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
const K = Object.freeze({
  classes: Object.freeze({
    phaseRoute: "rasa-phase-route",
    phaseNode: "rasa-phase-node",
    projectionLegend: "rasa-projection-legend",
    projectionChip: "rasa-projection-chip",
    projectionEmpty: "rasa-projection-empty",
    phaseWidgetMap: "rasa-phase-widget-map",
    phaseWidgetLink: "rasa-phase-widget-link",
    surfaceSwitcher: "rasa-surface-switcher",
    surfaceLink: "rasa-surface-link",
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
function eo(s, e = {}) {
  const t = typeof s == "string" ? { id: s } : s || {};
  return {
    [K.attrs.visualSlot]: t.id || "",
    [K.attrs.slotStatus]: t.status || e.status || "",
    [K.attrs.slotCount]: String(t.count ?? e.count ?? 0),
    [K.attrs.slotMeta]: t.meta || e.meta || ""
  };
}
function to(s = [], e, t = {}) {
  return s.find((i) => i.id === e) || { ...t, id: e };
}
function io(s, e = []) {
  if (!s?.querySelectorAll)
    return 0;
  let t = 0;
  for (const i of s.querySelectorAll(`[${K.attrs.visualSlot}]`)) {
    const n = i.getAttribute(K.attrs.visualSlot), r = eo(to(e, n));
    for (const [a, o] of Object.entries(r))
      i.setAttribute(a, o);
    t += 1;
  }
  return t;
}
const so = `
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

.rasa-phase-widget-map {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 6px;
}

.rasa-phase-widget-link {
  min-width: 0;
  display: grid;
  gap: 4px;
  padding: 8px 9px;
  border: 1px solid var(--rasa-line);
  border-radius: 10px;
  background: color-mix(in srgb, var(--rasa-code-bg) 82%, transparent);
  opacity: 0.72;
}

.rasa-phase-widget-link[data-active="true"] {
  border-color: color-mix(in srgb, var(--rasa-slot-accent, var(--rasa-blue)) 44%, var(--rasa-line));
  opacity: 1;
}

.rasa-phase-widget-link strong,
.rasa-phase-widget-link em {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rasa-phase-widget-link strong {
  color: var(--rasa-text);
  font-size: 11px;
  font-weight: 840;
  line-height: 1.1;
}

.rasa-phase-widget-link em {
  color: var(--rasa-muted);
  font-size: 10px;
  font-style: normal;
  font-weight: 720;
  line-height: 1.2;
}

.rasa-phase-widget-link code {
  color: var(--rasa-blue);
  font: inherit;
  font-size: 10px;
  font-weight: 800;
}

.rasa-surface-switcher {
  min-width: 0;
  align-items: stretch;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, minmax(86px, 1fr));
}

.rasa-surface-link {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  min-height: 46px;
  padding: 9px 12px;
  border: 1px solid var(--rasa-line);
  border-radius: 14px;
  background: color-mix(in srgb, var(--rasa-panel-soft, transparent) 82%, transparent);
  color: var(--rasa-muted);
  text-decoration: none;
  transition: border-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
}

.rasa-surface-link:hover {
  border-color: color-mix(in srgb, var(--rasa-blue) 42%, var(--rasa-line));
  color: var(--rasa-text);
  transform: translateY(-1px);
}

.rasa-surface-link[aria-current="page"] {
  border-color: color-mix(in srgb, var(--rasa-green) 46%, var(--rasa-line));
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--rasa-green) 14%, transparent),
    color-mix(in srgb, var(--rasa-blue) 8%, transparent)
  );
  color: var(--rasa-green);
}

.rasa-surface-link strong,
.rasa-surface-link small {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rasa-surface-link strong {
  font-size: 12px;
  font-weight: 830;
  line-height: 1;
}

.rasa-surface-link small {
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 720;
  line-height: 1.15;
}

.rasa-surface-switcher[data-compact="true"] {
  display: flex;
  flex-wrap: wrap;
}

.rasa-surface-switcher[data-compact="true"] .rasa-surface-link {
  align-items: center;
  border-radius: 999px;
  flex-direction: row;
  min-height: 32px;
  padding: 0 12px;
}

.rasa-surface-switcher[data-compact="true"] .rasa-surface-link small {
  display: none;
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
`, Ms = Object.freeze([
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
]), Us = Object.freeze(Ms.map((s) => s.id)), no = Object.freeze([
  ke("primary-tree", "Primary tree", "Reader, expanded syntax, or IR owns the program tree."),
  ke("ann-groups", "AnnGroups", "Grouped annotations keyed by stable subjects and spans."),
  ke("checks", "Type/check evidence", "Signals from shared check and fact boundaries."),
  ke("capability", "Capability admission", "Host authority requested and admitted before execution."),
  ke("plan", "Plan decisions", "Representation candidates, fallbacks, and lane evidence."),
  ke("trace", "Runtime trace", "Observed host/session events returned by the runtime product."),
  ke("diagnostics", "Diagnostics", "Structured blockers and conservative evidence.")
]);
function ro(s) {
  return Ms.find((e) => e.id === s) || Z(s, cr(s), "Phase artifact", s, "unknown");
}
function _s(s) {
  const e = Us.indexOf(s);
  return e === -1 ? Us.length : e;
}
function ao() {
  return Ms.map((s) => ({
    id: s.id,
    label: s.label,
    status: "waiting",
    groups: 0,
    diagnostics: 0,
    tone: s.tone,
    role: s.role,
    description: s.description
  }));
}
function oo(s = {}) {
  const e = ro(s.id);
  return {
    ...e,
    ...s,
    label: s.label || e.label,
    tone: e.tone,
    role: e.role,
    description: e.description
  };
}
function lo(s = {}, e = [], t = null) {
  const i = /* @__PURE__ */ new Set([
    ...Object.keys(s.phases || {}),
    ...(e || []).flatMap((n) => n.phases || [])
  ]);
  return s.failedPhase && i.add(s.failedPhase), s.plan && i.add("plan"), s.eval && i.add("eval"), [...i].sort((n, r) => _s(n) - _s(r) || uo(n, r)).map((n) => {
    const r = s.phases?.[n] || {}, a = e.filter((o) => (o.phases || []).includes(n)).length;
    return oo({
      id: n,
      status: ho(s, n, r),
      groups: a,
      diagnostics: co(s, n, r),
      active: !!(t && (t.phases || []).includes(n))
    });
  });
}
function Ts(s = {}) {
  const e = new Set(s.phases || []), t = new Set((s.keys || []).map((i) => i.replace(/^:/, "")));
  return e.has("plan") ? "plan" : e.has("checks") || t.has("diagnostic") || t.has("type") ? "checks" : e.has("facts") || t.has("candidate") || t.has("scalar-type") ? "ann-groups" : e.has("eval") ? "trace" : e.has("reader") || e.has("expand") || e.has("analyzer") || e.has("ir") ? "primary-tree" : "ann-groups";
}
function Ue(s) {
  return no.find((e) => e.id === s) || ke(s, cr(s), "Projection artifact");
}
function Z(s, e, t, i, n) {
  return Object.freeze({ id: s, label: e, description: t, tone: i, role: n });
}
function ke(s, e, t) {
  return Object.freeze({ id: s, label: e, description: t });
}
function co(s, e, t = {}) {
  const i = Array.isArray(t.diagnostics) ? t.diagnostics.length : 0, n = Array.isArray(s.diagnosticViews) ? s.diagnosticViews.filter((o) => o.phase === e).length : 0, r = e === "plan" && Array.isArray(s.plan?.diagnostics) ? s.plan.diagnostics.length : 0, a = e === "eval" && Array.isArray(s.eval?.diagnostics) ? s.eval.diagnostics.length : 0;
  return i + n + r + a;
}
function ho(s, e, t = {}) {
  return s.failedPhase === e ? "failed" : t.status ? t.status : e === "plan" ? s.plan?.status || s.plan?.availability || "available" : e === "eval" ? s.eval?.status || s.eval?.availability || "available" : Object.prototype.hasOwnProperty.call(s.phases || {}, e) ? "available" : "waiting";
}
function uo(s, e) {
  return String(s || "").localeCompare(String(e || ""));
}
function cr(s) {
  return String(s || "unknown").split(/[-_]/).filter(Boolean).map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" ") || "Unknown";
}
function hr(s, e, t) {
  const i = String(s), n = zi(e), r = Math.max(n, zi(t));
  return {
    start: Fi(i, n),
    end: Fi(i, r)
  };
}
function Fi(s, e) {
  const t = String(s), i = zi(e);
  let n = 0, r = 0;
  for (const a of t) {
    const o = n + fo(a);
    if (o > i || (n = o, r += a.length, n === i))
      return r;
  }
  return t.length;
}
function zi(s) {
  const e = Number(s);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function fo(s) {
  const e = s.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
function Ys(s, e, t = {}) {
  const i = t.selectedGroup || null, n = mo(s), r = i && n.find((a) => a.id === i) || null;
  return {
    status: po(s),
    result: go(s),
    groups: n,
    activeGroup: r,
    phases: lo(s, n, r),
    plan: xo(s),
    diagnostics: yo(s, e),
    projections: Ro(n, s),
    sourceHighlights: bo(s, { selectedGroup: i })
  };
}
function po(s = {}) {
  const e = s.failedPhase;
  return s.status === "ok" ? "ok" : e ? `failed in :${e}` : s.status;
}
function go(s = {}) {
  const e = s.eval || {};
  return {
    status: e.status || s.status || "unknown",
    value: e.value ?? "nil",
    observedType: e.observedType || "unknown",
    provenance: e.provenance || "runtime-observed"
  };
}
function mo(s = {}) {
  const e = s.evidence?.groups || [], t = Co(e.filter(ko), s.source).slice(0, 8).map(To).map(tn);
  return t.length ? t : Eo(s).map(tn);
}
function bo(s = {}, e = {}) {
  const t = new Set([e.selectedGroup].filter(Boolean));
  return t.size ? (s.evidence?.indexes?.spans || []).filter((i) => (i.groups || []).some((n) => t.has(n))).map((i) => ({
    group: (i.groups || []).find((n) => t.has(n)) || "",
    start: i.start,
    end: i.end,
    pinned: !!(e.selectedGroup && i.groups.includes(e.selectedGroup))
  })) : [];
}
function xo(s = {}) {
  const e = s.plan || {};
  return {
    status: e.status || e.availability || "unavailable",
    lanes: e.lanes || [],
    candidates: e.candidates || []
  };
}
function yo(s = {}, e = "") {
  if (Array.isArray(s.diagnosticViews) && s.diagnosticViews.length)
    return Qs(
      Js(s.diagnosticViews.map((r) => vo(r)))
    ).slice(0, 3);
  const t = Object.entries(s.phases || {}).flatMap(
    ([r, a]) => (a.diagnostics || []).map((o) => wi(r, o, e))
  ), i = (s.plan?.diagnostics || []).map(
    (r) => wi("plan", r, e)
  ), n = (s.eval?.diagnostics || []).map(
    (r) => wi("eval", r, e)
  );
  return Qs(
    Js([...t, ...i, ...n])
  ).slice(0, 3);
}
function vo(s) {
  const e = s.phase || "compiler", t = s.kind || "diagnostic", i = !!s.recoverable;
  return {
    phase: e,
    kind: t,
    title: dr(e, t, i),
    status: ur(e, i),
    recoverable: i,
    message: s.message || "",
    span: s.span || null,
    sourceExcerpt: s.sourceExcerpt || null,
    excerpt: wo(s.sourceExcerpt) || "",
    location: pr(s.span || null),
    expected: s.expected || "",
    actual: s.actual || "",
    subject: "",
    provenance: s.code || `:${e} / :${t}`,
    impact: s.impact || fr(e, i)
  };
}
function wi(s, e, t) {
  const i = e.span || null, n = e.evidence || {}, r = e.kind || "diagnostic", a = !!e.recoverable;
  return {
    phase: s,
    kind: r,
    title: dr(s, r, a),
    status: ur(s, a),
    recoverable: a,
    message: e.message || "",
    span: i,
    sourceExcerpt: null,
    excerpt: i ? Io(t, i) : "",
    location: pr(i),
    expected: n.expected || "",
    actual: n.actual || "",
    subject: n.subject || "",
    provenance: `:${s} / :${r}`,
    impact: fr(s, a)
  };
}
function dr(s, e, t) {
  return t ? {
    "fact-uncertainty": "Evidence, not a checked guarantee",
    "memory-profile-constraint": "Representation constraint rejected",
    "insufficient-backend-evidence": "Backend plan kept conservative"
  }[e] || `${Xs(s)} note` : s === "eval" ? "Evaluation blocker" : `${Xs(s)} blocker`;
}
function ur(s, e) {
  return e ? s === "plan" ? "conservative plan" : "recoverable" : s === "eval" ? "blocks evaluation" : "blocks phase";
}
function fr(s, e) {
  return e && s === "plan" ? "Planning continues, but later views should treat this as evidence rather than a committed optimization." : e ? "Later phases can continue, but claims should stay conservative." : s === "eval" ? "Evaluation is blocked until this diagnostic is resolved." : `:${s} is blocked until this diagnostic is resolved.`;
}
function pr(s) {
  return s ? `Source bytes ${s.start}..${s.end}.` : "Whole artifact; no single source span was reported.";
}
function wo(s) {
  const e = s?.lines || [];
  return e.length ? e.map((t) => t.text || "").join(`
`) : "";
}
function Xs(s) {
  return String(s || "compiler").split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function Js(s) {
  const e = /* @__PURE__ */ new Set();
  return s.filter((t) => {
    const i = So(t);
    return e.has(i) ? !1 : (e.add(i), !0);
  });
}
function Qs(s) {
  return [...s].sort(
    (e, t) => Number(e.recoverable) - Number(t.recoverable)
  );
}
function So(s) {
  const e = s.span ? `${s.span.source}:${s.span.start}:${s.span.end}` : "";
  return [
    s.phase,
    s.kind,
    s.recoverable,
    s.message,
    e,
    s.subject,
    s.expected,
    s.actual
  ].join("\0");
}
function ko(s = {}) {
  return gr(s) || (s.phases || []).includes("plan") || (s.provenances || []).includes("hinted") || (s.keys || []).some(
    (e) => ["scalar-type", "collection-kind", "known-keys", "host-free"].includes(e)
  );
}
function gr(s = {}) {
  return (s.keys || []).includes("diagnostic");
}
function Co(s, e = {}) {
  const t = Number(e.bytes);
  return [...s].sort(
    (i, n) => Ao(i, n, t) || Zs(i) - Zs(n) || Mo(i.subject, n.subject)
  );
}
function Zs(s = {}) {
  return gr(s) ? 0 : (s.provenances || []).includes("hinted") ? 1 : (s.phases || []).includes("plan") ? 2 : (s.keys || []).some((e) => ["scalar-type", "collection-kind"].includes(e)) ? 3 : 4;
}
function Ao(s, e, t) {
  const i = en(s, t), n = en(e, t);
  return i.kind - n.kind || i.start - n.start || i.end - n.end;
}
function en(s = {}, e) {
  const t = s.span || null;
  if (!t)
    return { kind: 2, start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
  const i = Number.isFinite(Number(t.start)) ? Number(t.start) : Number.MAX_SAFE_INTEGER, n = Number.isFinite(Number(t.end)) ? Number(t.end) : Number.MAX_SAFE_INTEGER;
  return { kind: i === 0 && Number.isFinite(e) && n >= e ? 1 : 0, start: i, end: n };
}
function Mo(s, e) {
  return String(s || "").localeCompare(String(e || ""));
}
function To(s) {
  const e = Bo(s);
  return {
    ...s,
    subjectId: s.subject || "",
    displaySubject: e || s.subject || ""
  };
}
function tn(s) {
  const e = Ue(Ts(s));
  return {
    ...s,
    projectionLayer: e.id,
    projectionLabel: e.label,
    projectionDescription: e.description
  };
}
function Ro(s = [], e = {}) {
  const t = /* @__PURE__ */ new Map();
  for (const i of s) {
    const n = Ue(i.projectionLayer || Ts(i)), r = t.get(n.id) || { ...n, count: 0 };
    r.count += 1, t.set(n.id, r);
  }
  if (e.plan) {
    const i = Ue("plan"), n = t.get(i.id) || { ...i, count: 0 };
    n.count += Array.isArray(e.plan.candidates) ? e.plan.candidates.length : 1, t.set(i.id, n);
  }
  if (e.eval) {
    const i = Ue("trace"), n = t.get(i.id) || { ...i, count: 0 };
    n.count += 1, t.set(i.id, n);
  }
  return [...t.values()];
}
function Eo(s = {}) {
  return [
    ...Oo(s.plan || {}),
    ...Do(s),
    ...Lo(s)
  ].slice(0, 8);
}
function Oo(s = {}) {
  const e = [], t = Array.isArray(s.candidates) ? s.candidates : [], i = Array.isArray(s.lanes) ? s.lanes : [];
  (t.length || i.length || s.status || s.availability) && e.push({
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
      status: s.status || s.availability || "available",
      candidates: t.length,
      lanes: i.length
    }),
    entries: [
      fe("status", s.status || s.availability || "available", "plan"),
      fe("candidates", t.length, "plan"),
      fe("lanes", i.length, "plan")
    ]
  });
  for (const [n, r] of t.slice(0, 4).entries())
    e.push({
      id: `projection:plan:candidate:${n}`,
      subject: r.candidate || r.lane || `candidate-${n + 1}`,
      subjectId: `candidate#${n + 1}`,
      displaySubject: r.candidate || r.strategy || `Plan candidate ${n + 1}`,
      phases: ["plan"],
      domains: ["representation"],
      provenances: ["rasa-plan"],
      span: r.span || null,
      keys: Object.keys(r).slice(0, 5),
      rendered: Xt(r),
      entries: Object.entries(r).slice(0, 4).map(([a, o]) => fe(a, o, "plan"))
    });
  return e;
}
function Do(s = {}) {
  return [
    ...Array.isArray(s.diagnosticViews) ? s.diagnosticViews : [],
    ...Object.entries(s.phases || {}).flatMap(
      ([t, i]) => (i.diagnostics || []).map((n) => ({ ...n, phase: t }))
    ),
    ...(s.plan?.diagnostics || []).map((t) => ({ ...t, phase: "plan" })),
    ...(s.eval?.diagnostics || []).map((t) => ({ ...t, phase: "eval" }))
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
function Lo(s = {}) {
  if (!s.eval && !s.status) return [];
  const e = s.eval || {};
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
        status: e.status || s.status || "unknown",
        value: e.value ?? "nil",
        observedType: e.observedType || "unknown"
      }),
      entries: [
        fe("status", e.status || s.status || "unknown", "eval"),
        fe("value", e.value ?? "nil", "eval"),
        fe("observed-type", e.observedType || "unknown", "eval")
      ]
    }
  ];
}
function fe(s, e, t) {
  return {
    key: s.startsWith(":") ? s : `:${s}`,
    value: $i(e),
    phase: t,
    provenance: t
  };
}
function $i(s) {
  return s == null ? "nil" : typeof s == "string" ? s : typeof s == "number" || typeof s == "boolean" ? String(s) : Array.isArray(s) ? `[${s.length} item${s.length === 1 ? "" : "s"}]` : typeof s == "object" ? `{${Object.keys(s).length} keys}` : String(s);
}
function Xt(s) {
  return !s || typeof s != "object" ? $i(s) : `{
${Object.entries(s).map(([e, t]) => `  :${e} ${$i(t)}`).join(`
`)}
}`;
}
function Bo(s = {}) {
  const e = s.entries || [], t = (o) => Po(e.find((l) => l.key === o)?.value), i = t("callee-symbol");
  if (i)
    return `call ${i}`;
  const n = t("collection-kind");
  if (n)
    return `${n} literal`;
  const r = t("literal-kind"), a = t("scalar-type");
  return r && a ? `${a} ${r}` : r ? `${r} literal` : a ? `${a} hint` : t("host-free") ? "source plan" : "";
}
function Po(s) {
  const e = String(s || "").trim();
  return e ? e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : e.startsWith(":") ? e.slice(1) : e : "";
}
function Io(s, e, t = 28) {
  const i = String(s), { start: n, end: r } = hr(i, e.start, e.end), a = Math.max(0, n - t), o = Math.min(i.length, r + t), l = a > 0 ? "..." : "", c = o < i.length ? "..." : "";
  return `${l}${i.slice(a, o)}${c}`;
}
function No(s) {
  return Jt(s, 0);
}
function mr(s) {
  const e = String(s ?? "nil");
  return !zo(e) || e.includes(`
`) ? e : $o(e);
}
function Jt(s, e) {
  return s == null ? "nil" : Array.isArray(s) ? jo(s, e) : typeof s == "object" ? Ho(s, e) : typeof s == "string" ? JSON.stringify(s) : typeof s == "boolean" ? s ? "true" : "false" : String(s);
}
function Ho(s, e) {
  const t = Object.entries(s);
  if (!t.length)
    return "{}";
  const i = Te(e + 1), n = Te(e);
  return `{
${t.map(
    ([a, o]) => `${i}:${Fo(a)} ${Jt(o, e + 1)}`
  ).join(`
`)}
${n}}`;
}
function jo(s, e) {
  if (!s.length)
    return "[]";
  if (s.every(Wo))
    return `[${s.map((n) => Jt(n, e)).join(" ")}]`;
  const t = Te(e + 1), i = Te(e);
  return `[
${s.map((n) => `${t}${Jt(n, e + 1)}`).join(`
`)}
${i}]`;
}
function Wo(s) {
  return s === null || typeof s != "object";
}
function Fo(s) {
  return String(s).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function Te(s) {
  return "  ".repeat(s);
}
function zo(s) {
  const e = s.trimStart();
  return e.startsWith("{") || e.startsWith("[") || e.startsWith("(");
}
function $o(s) {
  const e = Vo(s.trim()), t = [];
  let i = "";
  for (const n of e) {
    const r = t[t.length - 1];
    if (n.type === "open") {
      i = Ko(i, n.value, t.length), t.push({ delimiter: n.value, expectingMapKey: n.value === "{" }), i += `
` + Te(t.length);
      continue;
    }
    if (n.type === "close") {
      t.pop(), i = i.trimEnd(), i += `
` + Te(t.length) + n.value, sn(t[t.length - 1]);
      continue;
    }
    if (r?.delimiter === "{" && r.expectingMapKey) {
      i && !i.endsWith(`
`) && (i = i.trimEnd(), i += `
` + Te(t.length)), i += n.value, r.expectingMapKey = !1;
      continue;
    }
    i += i && !i.endsWith(`
`) ? " " : "", i += n.value, sn(r);
  }
  return i.replace(/\n{3,}/g, `

`);
}
function Vo(s) {
  const e = [];
  let t = 0;
  for (; t < s.length; ) {
    const i = s[t];
    if (/\s/.test(i)) {
      t += 1;
      continue;
    }
    if (i === "#" && s[t + 1] === "{") {
      e.push({ type: "open", value: "#{" }), t += 2;
      continue;
    }
    if (Vi(i)) {
      e.push({ type: "open", value: i }), t += 1;
      continue;
    }
    if (qi(i)) {
      e.push({ type: "close", value: i }), t += 1;
      continue;
    }
    if (i === '"') {
      const { value: r, nextIndex: a } = qo(s, t);
      e.push({ type: "string", value: r }), t = a;
      continue;
    }
    const n = t;
    for (; t < s.length && !/\s/.test(s[t]) && !Vi(s[t]) && !qi(s[t]); )
      t += 1;
    e.push({ type: "token", value: s.slice(n, t) });
  }
  return e;
}
function qo(s, e) {
  let t = e + 1, i = !1;
  for (; t < s.length; ) {
    const n = s[t];
    if (i)
      i = !1;
    else if (n === "\\")
      i = !0;
    else if (n === '"') {
      t += 1;
      break;
    }
    t += 1;
  }
  return { value: s.slice(e, t), nextIndex: t };
}
function Ko(s, e, t) {
  if (!s)
    return e;
  if (s.endsWith(`
`))
    return `${s}${e}`;
  const i = Go(s);
  return Vi(i) ? `${s}${e}` : qi(i) ? `${s}
${Te(t)}${e}` : `${s} ${e}`;
}
function sn(s) {
  s?.delimiter === "{" && (s.expectingMapKey = !0);
}
function Vi(s) {
  return s === "{" || s === "[" || s === "(";
}
function qi(s) {
  return s === "}" || s === "]" || s === ")";
}
function Go(s) {
  for (let e = s.length - 1; e >= 0; e -= 1)
    if (!/\s/.test(s[e]))
      return s[e];
  return "";
}
const Uo = Object.freeze([
  ne("source-editor", "Source editor", "CodeMirror", "Rasa forms and source spans", 10),
  ne("phase-route", "Compiler route", "PhaseRoute", "Reader through runtime phase status", 20),
  ne("phase-widget-map", "Phase widget map", "PhaseWidgetMap", "Phase artifacts mapped to visual widgets", 30),
  ne("projection-legend", "Projection legend", "ProjectionLegend", "Grouped phase-neutral projection layers", 40),
  ne("boundary-route", "Host boundary", "BoundaryRoute", "Admitted capability request and returned value", 50),
  ne("graph-stage", "Graph stage", "Stage", "Model projection frame and run context", 60),
  ne("graph-canvas", "Graph canvas", "ReactFlow", "Structured graph records returned by Rasa", 70),
  ne("value-inspector", "Value inspector", "DataView", "Foldable Rasa data and returned values", 80),
  ne("transcript", "Session transcript", "Transcript", "Append-only session input and returned data", 90),
  ne("diagnostics", "Diagnostics", "DiagnosticCards", "Structured blockers and conservative evidence", 100)
]), br = Object.freeze([
  Ot(
    "inspect",
    "Inspect",
    "Compiler evidence workbench",
    "../browser-inspection/",
    "Source spans, phases, facts, diagnostics, plans, and runtime evidence stay connected.",
    "inspection artifact",
    "source-editor",
    ["reader", "analyzer", "facts", "checks", "plan", "eval"],
    "blue"
  ),
  Ot(
    "model",
    "Model",
    "Host boundary model explorer",
    "../model-architecture-explorer/",
    "Rasa forms cross admitted browser capabilities into TensorFlow.js handles and returned data.",
    "session + provider trace",
    "boundary-route",
    ["reader", "analyzer", "plan", "eval", "wasm"],
    "green"
  ),
  Ot(
    "conformance",
    "Conformance",
    "Portable Clojure proof map",
    "../conformance-report/",
    "Precomputed compatibility pressure links functions, rows, outcomes, and deferred scope.",
    "report artifact",
    "value-inspector",
    ["reader", "expand", "analyzer", "ir", "facts", "checks", "plan", "explain", "eval", "wasm"],
    "gold"
  ),
  Ot(
    "roadmap",
    "Roadmap",
    "Release direction",
    "../roadmap/",
    "Preview surfaces point toward the compiler, runtime, tooling, and product stories still in motion.",
    "release plan",
    "projection-legend",
    ["plan"],
    "neutral"
  )
]);
function _o(s = "") {
  return br.map((e) => ({
    ...e,
    active: e.id === s,
    href: e.id === s ? "./" : e.href
  }));
}
function Yo({ activeId: s = "", ids: e = null, includeActive: t = !1 } = {}) {
  const i = e ? new Set(e) : null;
  return br.filter((n) => !(i && !i.has(n.id) || !t && n.id === s)).map((n) => ({
    id: n.id,
    artifact: n.artifact,
    description: n.description,
    label: n.label,
    phaseIds: [...n.phaseIds],
    slotId: n.slotId,
    tone: n.tone,
    title: n.title
  }));
}
function Xo({
  phases: s = [],
  activePhaseIds: e = [],
  metaById: t = {},
  statusById: i = {}
} = {}) {
  const n = new Set(e), r = new Map(s.map((a) => [a.id, a]));
  return ao().map((a) => {
    const o = r.get(a.id) || {}, l = o.status || i[a.id] || a.status;
    return {
      ...a,
      ...o,
      status: l,
      active: !!(o.active || n.has(a.id)),
      meta: o.meta || t[a.id] || fl(l, o)
    };
  });
}
function Jo(s = {}) {
  return Uo.map((e) => {
    const t = s[e.id] || {}, i = Number(t.count || 0), n = !!(t.present || i > 0);
    return {
      ...e,
      present: n,
      status: t.status || (n ? "ready" : "waiting"),
      count: i,
      meta: t.meta || ""
    };
  });
}
function Qo(s = []) {
  const e = /* @__PURE__ */ new Map();
  for (const t of s) {
    const i = Ue(t.id || t.projectionLayer || t.layer), n = e.get(i.id) || { ...i, count: 0 };
    n.count += Number(t.count || 1), e.set(i.id, n);
  }
  return [...e.values()];
}
function Zo(s = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const n = Ue(s.projectionLayer || Ts(s)), r = s.id || "";
  return {
    id: r,
    selected: !!(r && r === e),
    subject: s.displaySubject || s.subject || "evidence",
    subjectId: s.subjectId || "",
    spanLabel: xr(s.span),
    projectionLayer: n.id,
    projectionLabel: s.projectionLabel || n.label,
    projectionDescription: s.projectionDescription || n.description || "Rasa-owned evidence",
    phases: [...s.phases || []],
    domains: [...s.domains || []],
    provenances: [...s.provenances || []],
    tags: il(s, i),
    entries: sl(s, t)
  };
}
function el(s = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const r = (Array.isArray(s.groups) ? s.groups : []).map(
    (o) => Zo(o, { selectedId: e, entryLimit: t, tagLimit: i })
  );
  return {
    cards: r,
    count: r.length,
    empty: r.length === 0,
    emptyMessage: "No inspection evidence for this source. Artifact data still has the raw report.",
    summary: r.length ? `${r.length} inspection group${r.length === 1 ? "" : "s"}; click a card to pin source evidence` : "0 inspection groups"
  };
}
function tl(s = []) {
  return s.find((e) => kl(e.span))?.id || s.find((e) => e?.id)?.id || "";
}
function il(s = {}, e = 5) {
  return [...s.keys || [], ...s.provenances || []].slice(0, e).map(ui);
}
function sl(s = {}, e = 3) {
  return (s.entries || []).slice(0, e).map((t = {}) => {
    const i = ui(t.key), n = String(t.value ?? "");
    return {
      key: i,
      value: n,
      phase: t.phase || "",
      provenance: t.provenance || "",
      text: `${i} ${n}`.trim()
    };
  });
}
function xr(s) {
  return s ? `bytes ${s.start}..${s.end}` : "no source span";
}
function nl(s = {}) {
  const e = s.result || {}, t = s.plan || {}, i = Array.isArray(t.candidates) ? t.candidates : [];
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
function rl(s = {}, { laneLimit: e = 3, candidateLimit: t = 4 } = {}) {
  const i = Array.isArray(s.lanes) ? s.lanes : [], n = Array.isArray(s.candidates) ? s.candidates : [], r = [
    ...i.slice(0, e).map((a = {}) => ({
      label: a.lane || "lane",
      value: [a.memoryPath, a.status].filter(Boolean).join(" / ") || "unknown",
      kind: "lane"
    })),
    ...n.slice(0, t).map((a = {}) => ({
      label: a.candidate || a.lane || a.strategy || "candidate",
      value: a.reason || a.status || a.availability || "unknown",
      kind: "candidate"
    }))
  ];
  return r.length ? r : [{ label: "plan", value: "unavailable for this source", kind: "empty" }];
}
function al(s = null) {
  return {
    phase: (s?.phases || []).join(" "),
    domain: (s?.domains || []).join(" "),
    provenance: (s?.provenances || []).join(" "),
    title: Cl(s),
    status: s ? xr(s.span) : "click evidence",
    tags: Al(s),
    rendered: s?.rendered || "Click an evidence group to inspect Rasa-owned annotations and source spans."
  };
}
function ol(s = {}) {
  const e = Array.isArray(s.diagnostics) ? s.diagnostics : [], t = [
    {
      kind: "focus",
      card: al(s.activeGroup)
    },
    {
      kind: "plan",
      card: ll(s.plan)
    }
  ];
  return e.length && t.push({
    kind: "diagnostics",
    panel: cl(e)
  }), t.push({
    kind: "artifact",
    title: "Artifact data",
    lazy: !0
  }), {
    sections: t,
    diagnosticsCount: e.length
  };
}
function ll(s = {}) {
  return {
    phase: "plan",
    title: "Plan",
    status: s?.status || "unavailable",
    rows: rl(s)
  };
}
function cl(s = []) {
  return {
    title: "Diagnostics",
    note: "Compiler signals that change what the browser inspection can safely claim.",
    status: `${s.length} signal${s.length === 1 ? "" : "s"}`,
    cards: s.map(hl)
  };
}
function hl(s = {}) {
  return {
    phase: s.phase || "",
    status: Ml(s.recoverable),
    title: s.title || "",
    label: s.status || "",
    message: s.message || "",
    details: [
      { label: "Impact", field: "impact", value: s.impact || "" },
      { label: "Scope", field: "location", value: s.location || "" },
      { label: "Evidence", field: "provenance", value: s.provenance || "" }
    ],
    sourceExcerpt: s.sourceExcerpt || null,
    excerpt: s.excerpt || ""
  };
}
function dl(s, e = []) {
  const t = String(s?.text || ""), i = Qt(s?.start, 0), n = Qt(s?.end, i + Tl(t)), r = e.map((c) => gl(t, i, n, c)).filter(Boolean), a = /* @__PURE__ */ new Set([0, t.length]);
  for (const c of r)
    a.add(c.start), a.add(c.end);
  const o = [...a].sort((c, h) => c - h), l = [];
  for (let c = 0; c < o.length; c += 1) {
    const h = o[c];
    pl(l, h, r);
    const d = o[c + 1];
    if (d === void 0 || h >= d)
      continue;
    const u = bl(r, h, d);
    l.push({
      text: t.slice(h, d),
      marker: u ? u.publicMarker : null,
      zero: !1
    });
  }
  return l;
}
function Si(s = {}) {
  const e = Array.isArray(s.phases) ? s.phases : [];
  Array.isArray(s.groups) && s.groups;
  const t = Array.isArray(s.diagnostics) ? s.diagnostics : [], i = Array.isArray(s.projections) ? s.projections : [], n = Array.isArray(s.sourceHighlights) ? s.sourceHighlights : [], r = !!(s.result && s.result.status), a = !!s.activeGroup, o = Xo({
    phases: e,
    activePhaseIds: Sl(e)
  }), l = Qo(i);
  return {
    slots: Jo({
      "source-editor": {
        present: !0,
        status: n.length ? "linked" : "ready",
        count: n.length,
        meta: n.length ? `${n.length} span${n.length === 1 ? "" : "s"}` : "editable"
      },
      "phase-route": {
        present: !0,
        count: e.length,
        meta: e.length ? `${wl(o)} active` : "waiting"
      },
      "projection-legend": {
        count: l.reduce((c, h) => c + h.count, 0)
      },
      "value-inspector": {
        present: r || a,
        status: r ? s.result.status || "ready" : "waiting",
        meta: a ? "pinned evidence" : r ? "result" : ""
      },
      diagnostics: {
        count: t.length,
        status: t.some((c) => c.recoverable === !1) ? "blocked" : t.length ? "warn" : "ready"
      }
    }),
    phaseRoute: o,
    projectionLegend: l
  };
}
function ul({ examples: s = [] } = {}) {
  const e = Yo({ activeId: "inspect", ids: ["model", "conformance"] });
  return {
    header: {
      title: "Rasa Systems Workbench",
      subtitle: "Compiler truth, projected for humans.",
      nav: _o("inspect"),
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
      count: s.length
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
        ...e.find((t) => t.id === "model"),
        className: "model-preview",
        label: "Host boundary demo",
        title: "Model explorer shows provider handles",
        steps: ["form", "import", "admit", "provider", "handle", "value"]
      },
      {
        ...e.find((t) => t.id === "conformance"),
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
function fl(s, e = {}) {
  return e.groups ? `${e.groups} group${e.groups === 1 ? "" : "s"}` : e.diagnostics ? `${e.diagnostics} diagnostic${e.diagnostics === 1 ? "" : "s"}` : s || "waiting";
}
function pl(s, e, t) {
  for (const i of t)
    !i.zero || i.start !== e || s.push({
      text: "",
      marker: i.publicMarker,
      zero: !0
    });
}
function gl(s, e, t, i) {
  const n = Qt(i?.start, 0), r = Qt(i?.end, n), a = Math.max(n, e), o = Math.min(Math.max(r, n), t);
  if (a > o || a === o && (a < e || a > t))
    return null;
  const l = a - e, c = o - e, h = l === c ? ml(s, l) : hr(s, l, c);
  return {
    start: h.start,
    end: h.end,
    zero: h.start === h.end,
    priority: yl(i, h),
    publicMarker: {
      kind: i?.kind || "primary",
      severity: i?.severity || "warning",
      label: i?.label || ""
    }
  };
}
function ml(s, e) {
  const t = Fi(s, e);
  return { start: t, end: t };
}
function bl(s, e, t) {
  return s.filter((i) => !i.zero && i.start <= e && i.end >= t).sort(xl)[0];
}
function xl(s, e) {
  return s.priority.kind - e.priority.kind || s.priority.severity - e.priority.severity || s.priority.width - e.priority.width || s.priority.label.localeCompare(e.priority.label);
}
function yl(s, e) {
  return {
    kind: s?.kind === "primary" ? 0 : 1,
    severity: vl(s?.severity),
    width: e.end - e.start,
    label: s?.label || ""
  };
}
function vl(s) {
  return s === "error" ? 0 : s === "warning" ? 1 : 2;
}
function wl(s = []) {
  return s.filter((e) => e.active).length;
}
function Sl(s = []) {
  return s.filter(
    (e = {}) => e.active || e.status === "ok" || e.status === "failed" || e.status === "warn" || Number(e.groups || 0) > 0 || Number(e.diagnostics || 0) > 0
  ).map((e) => e.id).filter(Boolean);
}
function kl(s) {
  return s && Number.isFinite(Number(s.start)) && Number.isFinite(Number(s.end));
}
function ne(s, e, t, i, n) {
  return Object.freeze({ id: s, label: e, component: t, description: i, priority: n });
}
function Ot(s, e, t, i, n, r, a, o, l) {
  return Object.freeze({
    id: s,
    artifact: r,
    description: n,
    href: i,
    label: e,
    phaseIds: Object.freeze([...o]),
    slotId: a,
    title: t,
    tone: l
  });
}
function Cl(s) {
  if (!s)
    return "No evidence selected";
  const e = (s.keys || []).slice(0, 3).map(ui).join(" "), t = s.displaySubject && s.subjectId ? `${s.displaySubject} · ${s.subjectId}` : s.displaySubject || s.subject || "";
  return e ? `${t} ${e}` : t;
}
function Al(s) {
  return [
    ...s?.phases || [],
    ...s?.domains || [],
    ...s?.provenances || []
  ].map(ui);
}
function Ml(s) {
  return s === !0 ? "recoverable" : s === !1 ? "blocking" : "unknown";
}
function ui(s) {
  const e = String(s || "").trim();
  return e ? e.startsWith(":") ? e : `:${e}` : "";
}
function Qt(s, e) {
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
function Tl(s) {
  return new TextEncoder().encode(String(s)).length;
}
let Ki = [], yr = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? yr : Ki).push(t = t + s[e]);
})();
function Rl(s) {
  if (s < 768) return !1;
  for (let e = 0, t = Ki.length; ; ) {
    let i = e + t >> 1;
    if (s < Ki[i]) t = i;
    else if (s >= yr[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function nn(s) {
  return s >= 127462 && s <= 127487;
}
const rn = 8205;
function El(s, e, t = !0, i = !0) {
  return (t ? vr : Ol)(s, e, i);
}
function vr(s, e, t) {
  if (e == s.length) return e;
  e && wr(s.charCodeAt(e)) && Sr(s.charCodeAt(e - 1)) && e--;
  let i = ki(s, e);
  for (e += an(i); e < s.length; ) {
    let n = ki(s, e);
    if (i == rn || n == rn || t && Rl(n))
      e += an(n), i = n;
    else if (nn(n)) {
      let r = 0, a = e - 2;
      for (; a >= 0 && nn(ki(s, a)); )
        r++, a -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Ol(s, e, t) {
  for (; e > 0; ) {
    let i = vr(s, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function ki(s, e) {
  let t = s.charCodeAt(e);
  if (!Sr(t) || e + 1 == s.length) return t;
  let i = s.charCodeAt(e + 1);
  return wr(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function wr(s) {
  return s >= 56320 && s < 57344;
}
function Sr(s) {
  return s >= 55296 && s < 56320;
}
function an(s) {
  return s < 65536 ? 1 : 2;
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
    [e, t] = Qe(this, e, t);
    let n = [];
    return this.decompose(
      0,
      e,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      n,
      1
      /* Open.From */
    ), ae.from(n, this.length - (t - e) + i.length);
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
    [e, t] = Qe(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), ae.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new ht(this), r = new ht(e);
    for (let a = t, o = t; ; ) {
      if (n.next(a), r.next(a), a = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (o += n.value.length, n.done || o >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new ht(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new kr(this, e, t);
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
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Cr(i);
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
    return e.length == 1 && !e[0] ? T.empty : e.length <= 32 ? new I(e) : ae.from(I.split(e, []));
  }
}
class I extends T {
  constructor(e, t = Dl(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let a = this.text[r], o = n + a.length;
      if ((t ? i : o) >= e)
        return new Ll(n, o, i, a);
      n = o + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new I(on(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let a = i.pop(), o = qt(r.text, a.text.slice(), 0, r.length);
      if (o.length <= 32)
        i.push(new I(o, a.length + r.length));
      else {
        let l = o.length >> 1;
        i.push(new I(o.slice(0, l)), new I(o.slice(l)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof I))
      return super.replace(e, t, i);
    [e, t] = Qe(this, e, t);
    let n = qt(this.text, qt(i.text, on(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new I(n, r) : ae.from(I.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Qe(this, e, t);
    let n = "";
    for (let r = 0, a = 0; r <= t && a < this.text.length; a++) {
      let o = this.text[a], l = r + o.length;
      r > e && a && (n += i), e < l && t > r && (n += o.slice(Math.max(0, e - r), t - r)), r = l + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let r of e)
      i.push(r), n += r.length + 1, i.length == 32 && (t.push(new I(i, n)), i = [], n = -1);
    return n > -1 && t.push(new I(i, n)), t;
  }
}
class ae extends T {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let a = this.children[r], o = n + a.length, l = i + a.lines - 1;
      if ((t ? l : o) >= e)
        return a.lineInner(e, t, i, n);
      n = o + 1, i = l + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, a = 0; a <= t && r < this.children.length; r++) {
      let o = this.children[r], l = a + o.length;
      if (e <= l && t >= a) {
        let c = n & ((a <= e ? 1 : 0) | (l >= t ? 2 : 0));
        a >= e && l <= t && !c ? i.push(o) : o.decompose(e - a, t - a, i, c);
      }
      a = l + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Qe(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let a = this.children[n], o = r + a.length;
        if (e >= r && t <= o) {
          let l = a.replace(e - r, t - r, i), c = this.lines - a.lines + l.lines;
          if (l.lines < c >> 4 && l.lines > c >> 6) {
            let h = this.children.slice();
            return h[n] = l, new ae(h, this.length - (t - e) + i.length);
          }
          return super.replace(r, o, l);
        }
        r = o + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Qe(this, e, t);
    let n = "";
    for (let r = 0, a = 0; r < this.children.length && a <= t; r++) {
      let o = this.children[r], l = a + o.length;
      a > e && r && (n += i), e < l && t > a && (n += o.sliceString(e - a, t - a, i)), a = l + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof ae))
      return 0;
    let i = 0, [n, r, a, o] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == a || r == o)
        return i;
      let l = this.children[n], c = e.children[r];
      if (l != c)
        return i + l.scanIdentical(c, t);
      i += l.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let f of e)
      i += f.lines;
    if (i < 32) {
      let f = [];
      for (let p of e)
        p.flatten(f);
      return new I(f, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, a = n >> 1, o = [], l = 0, c = -1, h = [];
    function d(f) {
      let p;
      if (f.lines > r && f instanceof ae)
        for (let g of f.children)
          d(g);
      else f.lines > a && (l > a || !l) ? (u(), o.push(f)) : f instanceof I && l && (p = h[h.length - 1]) instanceof I && f.lines + p.lines <= 32 ? (l += f.lines, c += f.length + 1, h[h.length - 1] = new I(p.text.concat(f.text), p.length + 1 + f.length)) : (l + f.lines > n && u(), l += f.lines, c += f.length + 1, h.push(f));
    }
    function u() {
      l != 0 && (o.push(h.length == 1 ? h[0] : ae.from(h, c)), c = -1, l = h.length = 0);
    }
    for (let f of e)
      d(f);
    return u(), o.length == 1 ? o[0] : new ae(o, t);
  }
}
T.empty = /* @__PURE__ */ new I([""], 0);
function Dl(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function qt(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, a = !0; r < s.length && n <= i; r++) {
    let o = s[r], l = n + o.length;
    l >= t && (l > i && (o = o.slice(0, i - n)), n < t && (o = o.slice(t - n)), a ? (e[e.length - 1] += o, a = !1) : e.push(o)), n = l + 1;
  }
  return e;
}
function on(s, e, t) {
  return qt(s, [""], e, t);
}
class ht {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof I ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], a = r >> 1, o = n instanceof I ? n.text.length : n.children.length;
      if (a == (t > 0 ? o : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof I) {
        let l = n.text[a + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, l.length > Math.max(0, e))
          return this.value = e == 0 ? l : t > 0 ? l.slice(e) : l.slice(0, l.length - e), this;
        e -= l.length;
      } else {
        let l = n.children[a + (t < 0 ? -1 : 0)];
        e > l.length ? (e -= l.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(l), this.offsets.push(t > 0 ? 1 : (l instanceof I ? l.text.length : l.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class kr {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ht(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Cr {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (T.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ht.prototype[Symbol.iterator] = kr.prototype[Symbol.iterator] = Cr.prototype[Symbol.iterator] = function() {
  return this;
});
class Ll {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Qe(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function le(s, e, t = !0, i = !0) {
  return El(s, e, t, i);
}
function Bl(s) {
  return s >= 56320 && s < 57344;
}
function Pl(s) {
  return s >= 55296 && s < 56320;
}
function Il(s, e) {
  let t = s.charCodeAt(e);
  if (!Pl(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return Bl(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Nl(s) {
  return s < 65536 ? 1 : 2;
}
const Gi = /\r\n?|\n/;
var J = /* @__PURE__ */ (function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
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
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let r = this.sections[t++], a = this.sections[t++];
      a < 0 ? (e(i, n, r), n += r) : n += a, i += r;
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
    Ui(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new me(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Ar(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : _i(this, e, t);
  }
  mapPos(e, t = -1, i = J.Simple) {
    let n = 0, r = 0;
    for (let a = 0; a < this.sections.length; ) {
      let o = this.sections[a++], l = this.sections[a++], c = n + o;
      if (l < 0) {
        if (c > e)
          return r + (e - n);
        r += o;
      } else {
        if (i != J.Simple && c >= e && (i == J.TrackDel && n < e && c > e || i == J.TrackBefore && n < e || i == J.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !o)
          return e == n || t < 0 ? r : r + l;
        r += l;
      }
      n = c;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let r = this.sections[i++], a = this.sections[i++], o = n + r;
      if (a >= 0 && n <= t && o >= e)
        return n < e && o > t ? "cover" : !0;
      n = o;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
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
    return Ui(this, (t, i, n, r, a) => e = e.replace(n, n + (i - t), a), !1), e;
  }
  mapDesc(e, t = !1) {
    return _i(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < t.length; n += 2) {
      let a = t[n], o = t[n + 1];
      if (o >= 0) {
        t[n] = o, t[n + 1] = a;
        let l = n >> 1;
        for (; i.length < l; )
          i.push(T.empty);
        i.push(a ? e.slice(r, r + a) : T.empty);
      }
      r += a;
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
    return this.empty ? e : e.empty ? this : Ar(this, e, !0);
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
    return e.empty ? this : _i(this, e, t, !0);
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
    Ui(this, e, t);
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
    let t = [], i = [], n = [], r = new mt(this);
    e: for (let a = 0, o = 0; ; ) {
      let l = a == e.length ? 1e9 : e[a++];
      for (; o < l || o == l && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, l - o);
        V(n, h, -1);
        let d = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        V(t, h, d), d > 0 && Me(i, t, r.text), r.forward(h), o += h;
      }
      let c = e[a++];
      for (; o < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - o);
        V(t, h, -1), V(n, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), o += h;
      }
    }
    return {
      changes: new W(t, i),
      filtered: me.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let n = [], r = [], a = 0, o = null;
    function l(h = !1) {
      if (!h && !n.length)
        return;
      a < t && V(n, t - a, -1);
      let d = new W(n, r);
      o = o ? o.compose(d.map(o)) : d, n = [], r = [], a = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let d of h)
          c(d);
      else if (h instanceof W) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        l(), o = o ? o.compose(h.map(o)) : h;
      } else {
        let { from: d, to: u = d, insert: f } = h;
        if (d > u || d < 0 || u > t)
          throw new RangeError(`Invalid change range ${d} to ${u} (in doc of length ${t})`);
        let p = f ? typeof f == "string" ? T.of(f.split(i || Gi)) : f : T.empty, g = p.length;
        if (d == u && g == 0)
          return;
        d < a && l(), d > a && V(n, d - a, -1), V(n, u - d, g), Me(r, n, p), a = u;
      }
    }
    return c(e), l(!o), o;
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
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((a, o) => o && typeof a != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(T.empty);
          i[n] = T.of(r.slice(1)), t.push(r[0], i[n].length);
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
function V(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && t <= 0 && t == s[n + 1] ? s[n] += e : n >= 0 && e == 0 && s[n] == 0 ? s[n + 1] += t : i ? (s[n] += e, s[n + 1] += t) : s.push(e, t);
}
function Me(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(T.empty);
    s.push(t);
  }
}
function Ui(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, a = 0; a < s.sections.length; ) {
    let o = s.sections[a++], l = s.sections[a++];
    if (l < 0)
      n += o, r += o;
    else {
      let c = n, h = r, d = T.empty;
      for (; c += o, h += l, l && i && (d = d.append(i[a - 2 >> 1])), !(t || a == s.sections.length || s.sections[a + 1] < 0); )
        o = s.sections[a++], l = s.sections[a++];
      e(n, c, r, h, d), n = c, r = h;
    }
  }
}
function _i(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, a = new mt(s), o = new mt(e);
  for (let l = -1; ; ) {
    if (a.done && o.len || o.done && a.len)
      throw new Error("Mismatched change set lengths");
    if (a.ins == -1 && o.ins == -1) {
      let c = Math.min(a.len, o.len);
      V(n, c, -1), a.forward(c), o.forward(c);
    } else if (o.ins >= 0 && (a.ins < 0 || l == a.i || a.off == 0 && (o.len < a.len || o.len == a.len && !t))) {
      let c = o.len;
      for (V(n, o.ins, -1); c; ) {
        let h = Math.min(a.len, c);
        a.ins >= 0 && l < a.i && a.len <= h && (V(n, 0, a.ins), r && Me(r, n, a.text), l = a.i), a.forward(h), c -= h;
      }
      o.next();
    } else if (a.ins >= 0) {
      let c = 0, h = a.len;
      for (; h; )
        if (o.ins == -1) {
          let d = Math.min(h, o.len);
          c += d, h -= d, o.forward(d);
        } else if (o.ins == 0 && o.len < h)
          h -= o.len, o.next();
        else
          break;
      V(n, c, l < a.i ? a.ins : 0), r && l < a.i && Me(r, n, a.text), l = a.i, a.forward(a.len - h);
    } else {
      if (a.done && o.done)
        return r ? W.createSet(n, r) : me.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Ar(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new mt(s), a = new mt(e);
  for (let o = !1; ; ) {
    if (r.done && a.done)
      return n ? W.createSet(i, n) : me.create(i);
    if (r.ins == 0)
      V(i, r.len, 0, o), r.next();
    else if (a.len == 0 && !a.done)
      V(i, 0, a.ins, o), n && Me(n, i, a.text), a.next();
    else {
      if (r.done || a.done)
        throw new Error("Mismatched change set lengths");
      {
        let l = Math.min(r.len2, a.len), c = i.length;
        if (r.ins == -1) {
          let h = a.ins == -1 ? -1 : a.off ? 0 : a.ins;
          V(i, l, h, o), n && h && Me(n, i, a.text);
        } else a.ins == -1 ? (V(i, r.off ? 0 : r.len, l, o), n && Me(n, i, r.textBit(l))) : (V(i, r.off ? 0 : r.len, a.off ? 0 : a.ins, o), n && !a.off && Me(n, i, a.text));
        o = (r.ins > l || a.ins >= 0 && a.len > l) && (o || i.length > c), r.forward2(l), a.forward(l);
      }
    }
  }
}
class mt {
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
class Pe {
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
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new Pe(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return y.range(e, t, void 0, void 0, i);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, n, void 0, void 0, i);
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
    return new Pe(e, t, i);
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
    return new y(e.ranges.map((t) => Pe.fromJSON(t)), e.main);
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
    for (let i = 0, n = 0; n < e.length; n++) {
      let r = e[n];
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
  static cursor(e, t = 0, i, n) {
    return Pe.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, n, r) {
    let a = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return !r && e != t && (r = t < e ? 1 : -1), t < e ? Pe.create(t, e, 48 | a) : Pe.create(e, t, (r ? r < 0 ? 8 : 16 : 0) | a);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, r) => n.from - r.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let r = e[n], a = e[n - 1];
      if (r.empty ? r.from <= a.to : r.from < a.to) {
        let o = a.from, l = Math.max(r.to, a.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? y.range(l, o) : y.range(o, l));
      }
    }
    return new y(e, t);
  }
}
function Mr(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Rs = 0;
class w {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Rs++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
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
    return new w(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Es), !!e.static, e.enables);
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
function Es(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class Kt {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Rs++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, a = e[r] >> 1, o = this.type == 2, l = !1, c = !1, h = [];
    for (let d of this.dependencies)
      d == "doc" ? l = !0 : d == "selection" ? c = !0 : (((t = e[d.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[d.id]);
    return {
      create(d) {
        return d.values[a] = i(d), 1;
      },
      update(d, u) {
        if (l && u.docChanged || c && (u.docChanged || u.selection) || Yi(d, h)) {
          let f = i(d);
          if (o ? !ln(f, d.values[a], n) : !n(f, d.values[a]))
            return d.values[a] = f, 1;
        }
        return 0;
      },
      reconfigure: (d, u) => {
        let f, p = u.config.address[r];
        if (p != null) {
          let g = ei(u, p);
          if (this.dependencies.every((m) => m instanceof w ? u.facet(m) === d.facet(m) : m instanceof ye ? u.field(m, !1) == d.field(m, !1) : !0) || (o ? ln(f = i(d), g, n) : n(f = i(d), g)))
            return d.values[a] = g, 0;
        } else
          f = i(d);
        return d.values[a] = f, 1;
      }
    };
  }
}
function ln(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function Yi(s, e) {
  let t = !1;
  for (let i of e)
    dt(s, i) & 1 && (t = !0);
  return t;
}
function Hl(s, e, t) {
  let i = t.map((l) => s[l.id]), n = t.map((l) => l.type), r = i.filter((l) => !(l & 1)), a = s[e.id] >> 1;
  function o(l) {
    let c = [];
    for (let h = 0; h < i.length; h++) {
      let d = ei(l, i[h]);
      if (n[h] == 2)
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
        dt(l, c);
      return l.values[a] = o(l), 1;
    },
    update(l, c) {
      if (!Yi(l, r))
        return 0;
      let h = o(l);
      return e.compare(h, l.values[a]) ? 0 : (l.values[a] = h, 1);
    },
    reconfigure(l, c) {
      let h = Yi(l, i), d = c.config.facets[e.id], u = c.facet(e);
      if (d && !h && Es(t, d))
        return l.values[a] = u, 0;
      let f = o(l);
      return e.compare(f, u) ? (l.values[a] = u, 0) : (l.values[a] = f, 1);
    }
  };
}
const Dt = /* @__PURE__ */ w.define({ static: !0 });
class ye {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ye(Rs++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Dt).find((i) => i.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[t], a = this.updateF(r, n);
        return this.compareF(r, a) ? 0 : (i.values[t] = a, 1);
      },
      reconfigure: (i, n) => {
        let r = i.facet(Dt), a = n.facet(Dt), o;
        return (o = r.find((l) => l.field == this)) && o != a.find((l) => l.field == this) ? (i.values[t] = o.create(i), 1) : n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Dt.of({ field: this, create: e })];
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
const Be = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function at(s) {
  return (e) => new Tr(e, s);
}
const Os = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ at(Be.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ at(Be.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ at(Be.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ at(Be.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ at(Be.lowest)
};
class Tr {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class fi {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Xi(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return fi.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Xi {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Zt {
  constructor(e, t, i, n, r, a) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = a, this.statusTemplate = []; this.statusTemplate.length < i.length; )
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
    let n = [], r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ new Map();
    for (let u of jl(e, t, a))
      u instanceof ye ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let o = /* @__PURE__ */ Object.create(null), l = [], c = [];
    for (let u of n)
      o[u.id] = c.length << 1, c.push((f) => u.slot(f));
    let h = i?.config.facets;
    for (let u in r) {
      let f = r[u], p = f[0].facet, g = h && h[u] || [];
      if (f.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (o[p.id] = l.length << 1 | 1, Es(g, f))
          l.push(i.facet(p));
        else {
          let m = p.combine(f.map((b) => b.value));
          l.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of f)
          m.type == 0 ? (o[m.id] = l.length << 1 | 1, l.push(m.value)) : (o[m.id] = c.length << 1, c.push((b) => m.dynamicSlot(b)));
        o[p.id] = c.length << 1, c.push((m) => Hl(m, p, f));
      }
    }
    let d = c.map((u) => u(o));
    return new Zt(e, a, d, o, l, r);
  }
}
function jl(s, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(a, o) {
    let l = n.get(a);
    if (l != null) {
      if (l <= o)
        return;
      let c = i[l].indexOf(a);
      c > -1 && i[l].splice(c, 1), a instanceof Xi && t.delete(a.compartment);
    }
    if (n.set(a, o), Array.isArray(a))
      for (let c of a)
        r(c, o);
    else if (a instanceof Xi) {
      if (t.has(a.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(a.compartment) || a.inner;
      t.set(a.compartment, c), r(c, o);
    } else if (a instanceof Tr)
      r(a.inner, a.prec);
    else if (a instanceof ye)
      i[o].push(a), a.provides && r(a.provides, o);
    else if (a instanceof Kt)
      i[o].push(a), a.facet.extensions && r(a.facet.extensions, Be.default);
    else {
      let c = a.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${a}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, o);
    }
  }
  return r(s, Be.default), i.reduce((a, o) => a.concat(o));
}
function dt(s, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[t] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | n;
}
function ei(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const Rr = /* @__PURE__ */ w.define(), Ji = /* @__PURE__ */ w.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), Er = /* @__PURE__ */ w.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Or = /* @__PURE__ */ w.define(), Dr = /* @__PURE__ */ w.define(), Lr = /* @__PURE__ */ w.define(), Br = /* @__PURE__ */ w.define({
  combine: (s) => s.length ? s[0] : !1
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
    return new Wl();
  }
}
class Wl {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new nt(this, e);
  }
}
class Fl {
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
    return new Fl(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let r = n.map(t);
      r && i.push(r);
    }
    return i;
  }
}
H.reconfigure = /* @__PURE__ */ H.define();
H.appendConfig = /* @__PURE__ */ H.define();
class q {
  constructor(e, t, i, n, r, a) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = a, this._doc = null, this._state = null, i && Mr(i, t.newLength), r.some((o) => o.type == q.time) || (this.annotations = r.concat(q.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, n, r, a) {
    return new q(e, t, i, n, r, a);
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
    let t = this.annotation(q.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
q.time = /* @__PURE__ */ nt.define();
q.userEvent = /* @__PURE__ */ nt.define();
q.addToHistory = /* @__PURE__ */ nt.define();
q.remote = /* @__PURE__ */ nt.define();
function zl(s, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let r, a;
    if (i < s.length && (n == e.length || e[n] >= s[i]))
      r = s[i++], a = s[i++];
    else if (n < e.length)
      r = e[n++], a = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, a) : t[t.length - 1] < a && (t[t.length - 1] = a);
  }
}
function Pr(s, e, t) {
  var i;
  let n, r, a;
  return t ? (n = e.changes, r = W.empty(e.changes.length), a = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), a = s.changes.compose(n)), {
    changes: a,
    selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: H.mapEffects(s.effects, n).concat(H.mapEffects(e.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function Qi(s, e, t) {
  let i = e.selection, n = _e(e.annotations);
  return e.userEvent && (n = n.concat(q.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof W ? e.changes : W.of(e.changes || [], t, s.facet(Er)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: _e(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ir(s, e, t) {
  let i = Qi(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let a = !!e[r].sequential;
    i = Pr(i, Qi(s, e[r], a ? i.changes.newLength : s.doc.length), a);
  }
  let n = q.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Vl(t ? $l(n) : n);
}
function $l(s) {
  let e = s.startState, t = !0;
  for (let n of e.facet(Or)) {
    let r = n(s);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : zl(t, r));
  }
  if (t !== !0) {
    let n, r;
    if (t === !1)
      r = s.changes.invertedDesc, n = W.empty(e.doc.length);
    else {
      let a = s.changes.filter(t);
      n = a.changes, r = a.filtered.mapDesc(a.changes).invertedDesc;
    }
    s = q.create(e, n, s.selection && s.selection.map(r), H.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(Dr);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof q ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof q ? s = r[0] : s = Ir(e, _e(r), !1);
  }
  return s;
}
function Vl(s) {
  let e = s.startState, t = e.facet(Lr), i = s;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n](s);
    r && Object.keys(r).length && (i = Pr(i, Qi(e, r, s.changes.newLength), !0));
  }
  return i == s ? s : q.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const ql = [];
function _e(s) {
  return s == null ? ql : Array.isArray(s) ? s : [s];
}
var pe = /* @__PURE__ */ (function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
})(pe || (pe = {}));
const Kl = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Zi;
try {
  Zi = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Gl(s) {
  if (Zi)
    return Zi.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Kl.test(t)))
      return !0;
  }
  return !1;
}
function Ul(s) {
  return (e) => {
    if (!/\S/.test(e))
      return pe.Space;
    if (Gl(e))
      return pe.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return pe.Word;
    return pe.Other;
  };
}
class E {
  constructor(e, t, i, n, r, a) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, a && (a._state = this);
    for (let o = 0; o < this.config.dynamicSlots.length; o++)
      dt(this, o << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return dt(this, i), ei(this, i);
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
    return Ir(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let o of e.effects)
      o.is(fi.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((l, c) => n.set(c, l)), t = null), n.set(o.value.compartment, o.value.extension)) : o.is(H.reconfigure) ? (t = null, i = o.value) : o.is(H.appendConfig) && (t = null, i = _e(i).concat(o.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Zt.resolve(i, n, this), r = new E(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, c) => c.reconfigure(l, this), null).values);
    let a = e.startState.facet(Ji) ? e.newSelection : e.newSelection.asSingle();
    new E(t, e.newDoc, a, r, (o, l) => l.update(o, e), e);
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
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], a = _e(i.effects);
    for (let o = 1; o < t.ranges.length; o++) {
      let l = e(t.ranges[o]), c = this.changes(l.changes), h = c.map(n);
      for (let u = 0; u < o; u++)
        r[u] = r[u].map(h);
      let d = n.mapDesc(c, !0);
      r.push(l.range.map(d)), n = n.compose(h), a = H.mapEffects(a, h).concat(H.mapEffects(_e(l.effects), d));
    }
    return {
      changes: n,
      selection: y.create(r, t.mainIndex),
      effects: a
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof W ? e : W.of(e, this.doc.length, this.facet(E.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return T.of(e.split(this.facet(E.lineSeparator) || Gi));
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
    return t == null ? e.default : (dt(this, t), ei(this, t));
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
        let n = e[i];
        n instanceof ye && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
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
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let a = i[r], o = e[r];
          n.push(a.init((l) => a.spec.fromJSON(o, l)));
        }
    }
    return E.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = Zt.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof T ? e.doc : T.of((e.doc || "").split(t.staticFacet(E.lineSeparator) || Gi)), n = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return Mr(n, i.length), t.staticFacet(Ji) || (n = n.asSingle()), new E(t, i, n, t.dynamicSlots.map(() => null), (r, a) => a.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(E.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(E.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Br);
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
    for (let i of this.facet(E.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
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
    let n = [];
    for (let r of this.facet(Rr))
      for (let a of r(this, t, i))
        Object.prototype.hasOwnProperty.call(a, e) && n.push(a[e]);
    return n;
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
    return Ul(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), a = e - i, o = e - i;
    for (; a > 0; ) {
      let l = le(t, a, !1);
      if (r(t.slice(l, a)) != pe.Word)
        break;
      a = l;
    }
    for (; o < n; ) {
      let l = le(t, o);
      if (r(t.slice(o, l)) != pe.Word)
        break;
      o = l;
    }
    return a == o ? null : y.range(a + i, o + i);
  }
}
E.allowMultipleSelections = Ji;
E.tabSize = /* @__PURE__ */ w.define({
  combine: (s) => s.length ? s[0] : 4
});
E.lineSeparator = Er;
E.readOnly = Br;
E.phrases = /* @__PURE__ */ w.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((n) => s[n] == e[n]);
  }
});
E.languageData = Rr;
E.changeFilter = Or;
E.transactionFilter = Dr;
E.transactionExtender = Lr;
fi.reconfigure = /* @__PURE__ */ H.define();
function Nr(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let a = n[r], o = i[r];
      if (o === void 0)
        i[r] = a;
      else if (!(o === a || a === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](o, a);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
class He {
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
    return bt.create(e, t, this);
  }
}
He.prototype.startSide = He.prototype.endSide = 0;
He.prototype.point = !1;
He.prototype.mapMode = J.TrackDel;
function Ds(s, e) {
  return s == e || s.constructor == e.constructor && s.eq(e);
}
class bt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new bt(e, t, i);
  }
}
function es(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class Ls {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let a = n, o = r.length; ; ) {
      if (a == o)
        return a;
      let l = a + o >> 1, c = r[l] - e || (i ? this.value[l].endSide : this.value[l].startSide) - t;
      if (l == a)
        return c >= 0 ? a : o;
      c >= 0 ? o = l : a = l + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), a = this.findIndex(i, 1e9, !1, r); r < a; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], r = [], a = -1, o = -1;
    for (let l = 0; l < this.value.length; l++) {
      let c = this.value[l], h = this.from[l] + e, d = this.to[l] + e, u, f;
      if (h == d) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (u = f = p, c.startSide != c.endSide && (f = t.mapPos(h, c.endSide), f < u)))
          continue;
      } else if (u = t.mapPos(h, c.startSide), f = t.mapPos(d, c.endSide), u > f || u == f && c.startSide > 0 && c.endSide <= 0)
        continue;
      (f - u || c.endSide - c.startSide) < 0 || (a < 0 && (a = u), c.point && (o = Math.max(o, f - u)), i.push(c), n.push(u - a), r.push(f - a));
    }
    return { mapped: i.length ? new Ls(n, r, i, o) : null, pos: a };
  }
}
class M {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new M(e, t, i, n);
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
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = e, a = e.filter;
    if (t.length == 0 && !a)
      return this;
    if (i && (t = t.slice().sort(es)), this.isEmpty)
      return t.length ? M.of(t) : this;
    let o = new Hr(this, null, -1).goto(0), l = 0, c = [], h = new ti();
    for (; o.value || l < t.length; )
      if (l < t.length && (o.from - t[l].from || o.startSide - t[l].value.startSide) >= 0) {
        let d = t[l++];
        h.addInner(d.from, d.to, d.value) || c.push(d);
      } else o.rangeIndex == 1 && o.chunkIndex < this.chunk.length && (l == t.length || this.chunkEnd(o.chunkIndex) < t[l].from) && (!a || n > this.chunkEnd(o.chunkIndex) || r < this.chunkPos[o.chunkIndex]) && h.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex]) ? o.nextChunk() : ((!a || n > o.to || r < o.from || a(o.from, o.to, o.value)) && (h.addInner(o.from, o.to, o.value) || c.push(bt.create(o.from, o.to, o.value))), o.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? M.empty : this.nextLayer.update({ add: c, filter: a, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let a = 0; a < this.chunk.length; a++) {
      let o = this.chunkPos[a], l = this.chunk[a], c = e.touchesRange(o, o + l.length);
      if (c === !1)
        n = Math.max(n, l.maxPoint), t.push(l), i.push(e.mapPos(o));
      else if (c === !0) {
        let { mapped: h, pos: d } = l.map(o, e);
        h && (n = Math.max(n, h.maxPoint), t.push(h), i.push(d));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new M(i, t, r || M.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], a = this.chunk[n];
        if (t >= r && e <= r + a.length && a.between(r, e - r, t - r, i) === !1)
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
    return xt.from([this]).goto(e);
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
    return xt.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, n, r = -1) {
    let a = e.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), o = t.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), l = cn(a, o, i), c = new ot(a, l, r), h = new ot(o, l, r);
    i.iterGaps((d, u, f) => hn(c, d, h, u, f, n)), i.empty && i.length == 0 && hn(c, 0, h, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, n) {
    n == null && (n = 999999999);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), a = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != a.length)
      return !1;
    if (!r.length)
      return !0;
    let o = cn(r, a), l = new ot(r, o, 0).goto(i), c = new ot(a, o, 0).goto(i);
    for (; ; ) {
      if (l.to != c.to || !ts(l.active, c.active) || l.point && (!c.point || !Ds(l.point, c.point)))
        return !1;
      if (l.to > n)
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
  static spans(e, t, i, n, r = -1) {
    let a = new ot(e, null, r).goto(t), o = t, l = a.openStart;
    for (; ; ) {
      let c = Math.min(a.to, i);
      if (a.point) {
        let h = a.activeForPoint(a.to), d = a.pointFrom < t ? h.length + 1 : a.point.startSide < 0 ? h.length : Math.min(h.length, l);
        n.point(o, c, a.point, h, d, a.pointRank), l = Math.min(a.openEnd(c), h.length);
      } else c > o && (n.span(o, c, a.active, l), l = a.openEnd(c));
      if (a.to > i)
        return l + (a.point && a.to > i ? 1 : 0);
      o = a.to, a.next();
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
    let i = new ti();
    for (let n of e instanceof bt ? [e] : t ? _l(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return M.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != M.empty; n = n.nextLayer)
        t = new M(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
M.empty = /* @__PURE__ */ new M([], [], null, -1);
function _l(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if (es(e, i) > 0)
        return s.slice().sort(es);
      e = i;
    }
  return s;
}
M.empty.nextLayer = M.empty;
class ti {
  finishChunk(e) {
    this.chunks.push(new Ls(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new ti())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let n = e - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
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
    return this.finishInner(M.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = M.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function cn(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let a = 0; a < r.chunk.length; a++)
      r.chunk[a].maxPoint <= 0 && i.set(r.chunk[a], r.chunkPos[a]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let a = 0; a < r.chunk.length; a++) {
      let o = i.get(r.chunk[a]);
      o != null && (t ? t.mapPos(o) : o) == r.chunkPos[a] && !t?.touchesRange(o, o + r.chunk[a].length) && n.add(r.chunk[a]);
    }
  return n;
}
class Hr {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
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
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
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
class xt {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let a = e[r]; !a.isEmpty; a = a.nextLayer)
        a.maxPoint >= i && n.push(new Hr(a, t, i, r));
    return n.length == 1 ? n[0] : new xt(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ci(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ci(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Ci(this.heap, 0);
    }
  }
}
function Ci(s, e) {
  for (let t = s[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), t.compare(n) < 0)
      break;
    s[i] = t, s[e] = n, e = i;
  }
}
class ot {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = xt.from(e, t, i);
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
    Lt(this.active, e), Lt(this.activeTo, e), Lt(this.activeRank, e), this.minActive = dn(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    Bt(this.active, t, i), Bt(this.activeTo, t, n), Bt(this.activeRank, t, r), e && Bt(e, t, this.cursor.from), this.minActive = dn(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && Lt(i, n);
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
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
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
function hn(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let a = i + n, o = i, l = i - e, c = !!r.boundChange;
  for (let h = !1; ; ) {
    let d = s.to + l - t.to, u = d || s.endSide - t.endSide, f = u < 0 ? s.to + l : t.to, p = Math.min(f, a);
    if (s.point || t.point ? (s.point && t.point && Ds(s.point, t.point) && ts(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(o, p, s.point, t.point), h = !1) : (h && r.boundChange(o), p > o && !ts(s.active, t.active) && r.compareRange(o, p, s.active, t.active), c && p < a && (d || s.openEnd(f) != t.openEnd(f)) && (h = !0)), f > a)
      break;
    o = f, u <= 0 && s.next(), u >= 0 && t.next();
  }
}
function ts(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !Ds(s[t], e[t]))
      return !1;
  return !0;
}
function Lt(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function Bt(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function dn(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function Yl(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = le(s, n);
  }
  return s.length;
}
const is = "ͼ", un = typeof Symbol > "u" ? "__" + is : Symbol.for(is), ss = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ze {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(a) {
      return /^@/.test(a) ? [a] : a.split(/,\s*/);
    }
    function r(a, o, l, c) {
      let h = [], d = /^@(\w+)\b/.exec(a[0]), u = d && d[1] == "keyframes";
      if (d && o == null) return l.push(a[0] + ";");
      for (let f in o) {
        let p = o[f];
        if (/&/.test(f))
          r(
            f.split(/,\s*/).map((g) => a.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            l
          );
        else if (p && typeof p == "object") {
          if (!d) throw new RangeError("The value of a property (" + f + ") should be a primitive value.");
          r(n(f), p, h, u);
        } else p != null && h.push(f.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && l.push((i && !d && !c ? a.map(i) : a).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let a in e) r(n(a), e[a], this.rules);
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
    let e = fn[un] || 1;
    return fn[un] = e + 1, is + e.toString(36);
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
    let n = e[ss], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new Xl(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let pn = /* @__PURE__ */ new Map();
class Xl {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = pn.get(i);
      if (r) return e[ss] = r;
      this.sheet = new n.CSSStyleSheet(), pn.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[ss] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let a = 0; a < e.length; a++) {
      let o = e[a], l = this.modules.indexOf(o);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, o), i) for (let c = 0; c < o.rules.length; c++)
          i.insertRule(o.rules[c], n++);
      } else {
        for (; r < l; ) n += this.modules[r++].rules.length;
        n += o.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let a = "";
      for (let l = 0; l < this.modules.length; l++)
        a += this.modules[l].getRules() + `
`;
      this.styleTag.textContent = a;
      let o = t.head || t;
      this.styleTag.parentNode != o && o.insertBefore(this.styleTag, o.firstChild);
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
}, yt = {
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
}, Jl = typeof navigator < "u" && /Mac/.test(navigator.platform), Ql = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var z = 0; z < 10; z++) Re[48 + z] = Re[96 + z] = String(z);
for (var z = 1; z <= 24; z++) Re[z + 111] = "F" + z;
for (var z = 65; z <= 90; z++)
  Re[z] = String.fromCharCode(z + 32), yt[z] = String.fromCharCode(z);
for (var Ai in Re) yt.hasOwnProperty(Ai) || (yt[Ai] = Re[Ai]);
function Zl(s) {
  var e = Jl && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || Ql && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? yt : Re)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let G = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ns = typeof document < "u" ? document : { documentElement: { style: {} } };
const rs = /* @__PURE__ */ /Edge\/(\d+)/.exec(G.userAgent), jr = /* @__PURE__ */ /MSIE \d/.test(G.userAgent), as = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(G.userAgent), pi = !!(jr || as || rs), gn = !pi && /* @__PURE__ */ /gecko\/(\d+)/i.test(G.userAgent), Mi = !pi && /* @__PURE__ */ /Chrome\/(\d+)/.exec(G.userAgent), mn = "webkitFontSmoothing" in ns.documentElement.style, os = !pi && /* @__PURE__ */ /Apple Computer/.test(G.vendor), bn = os && (/* @__PURE__ */ /Mobile\/\w+/.test(G.userAgent) || G.maxTouchPoints > 2);
var x = {
  mac: bn || /* @__PURE__ */ /Mac/.test(G.platform),
  windows: /* @__PURE__ */ /Win/.test(G.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(G.platform),
  ie: pi,
  ie_version: jr ? ns.documentMode || 6 : as ? +as[1] : rs ? +rs[1] : 0,
  gecko: gn,
  gecko_version: gn ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  chrome: !!Mi,
  chrome_version: Mi ? +Mi[1] : 0,
  ios: bn,
  android: /* @__PURE__ */ /Android\b/.test(G.userAgent),
  webkit: mn,
  webkit_version: mn ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  safari: os,
  safari_version: os ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(G.userAgent) || [0, 0])[1] : 0,
  tabSize: ns.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Bs(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const ii = /* @__PURE__ */ Object.create(null);
function Ps(s, e, t) {
  if (s == e)
    return !0;
  s || (s = ii), e || (e = ii);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - 0 != n.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function ec(s, e) {
  for (let t = s.attributes.length - 1; t >= 0; t--) {
    let i = s.attributes[t].name;
    e[i] == null && s.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? s.style.cssText = i : s.getAttribute(t) != i && s.setAttribute(t, i);
  }
}
function xn(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function tc(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class gi {
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
var $ = /* @__PURE__ */ (function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
})($ || ($ = {}));
class j extends He {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
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
    return new Ct(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new je(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, n;
    if (e.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: a } = Wr(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, n = (a ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new je(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new At(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return M.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
j.none = M.empty;
class Ct extends j {
  constructor(e) {
    let { start: t, end: i } = Wr(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Bs(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || ii;
  }
  eq(e) {
    return this == e || e instanceof Ct && this.tagName == e.tagName && Ps(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
Ct.prototype.point = !1;
class At extends j {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof At && this.spec.class == e.spec.class && Ps(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
At.prototype.mapMode = J.TrackBefore;
At.prototype.point = !0;
class je extends j {
  constructor(e, t, i, n, r, a) {
    super(t, i, r, e), this.block = n, this.isReplace = a, this.mapMode = n ? t <= 0 ? J.TrackBefore : J.TrackAfter : J.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? $.WidgetRange : this.startSide <= 0 ? $.WidgetBefore : $.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof je && ic(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
je.prototype.point = !0;
function Wr(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function ic(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function Ye(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
class vt extends He {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof vt && this.tagName == e.tagName && Ps(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new vt(e.tagName, e.attributes || ii, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return M.of(e, t);
  }
}
vt.prototype.startSide = vt.prototype.endSide = -1;
function wt(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function ls(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function ut(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return ls(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function Gt(s) {
  return s.nodeType == 3 ? St(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function ft(s, e, t, i) {
  return t ? yn(s, e, t, i, -1) || yn(s, e, t, i, 1) : !1;
}
function Ee(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function si(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function yn(s, e, t, i, n) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : xe(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Ee(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[e + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = n < 0 ? xe(s) : 0;
    } else
      return !1;
  }
}
function xe(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function ni(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function sc(s) {
  let e = s.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function Fr(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function nc(s, e, t, i, n, r, a, o) {
  let l = s.ownerDocument, c = l.defaultView || window;
  for (let h = s, d = !1; h && !d; )
    if (h.nodeType == 1) {
      let u, f = h == l.body, p = 1, g = 1;
      if (f)
        u = sc(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (d = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let v = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Fr(h, v)), u = {
          left: v.left,
          right: v.left + h.clientWidth * p,
          top: v.top,
          bottom: v.top + h.clientHeight * g
        };
      }
      let m = 0, b = 0;
      if (n == "nearest")
        e.top < u.top + a ? (b = e.top - (u.top + a), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + a)) : e.bottom > u.bottom - a && (b = e.bottom - u.bottom + a, t < 0 && e.top - b < u.top && (b = e.top - (u.top + a)));
      else {
        let v = e.bottom - e.top, C = u.bottom - u.top;
        b = (n == "center" && v <= C ? e.top + v / 2 - C / 2 : n == "start" || n == "center" && t < 0 ? e.top - a : e.bottom - C + a) - u.top;
      }
      if (i == "nearest" ? e.left < u.left + r ? (m = e.left - (u.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + r)) : e.right > u.right - r && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = e.left - (u.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == o ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || b)
        if (f)
          c.scrollBy(m, b);
        else {
          let v = 0, C = 0;
          if (b) {
            let L = h.scrollTop;
            h.scrollTop += b / g, C = (h.scrollTop - L) * g;
          }
          if (m) {
            let L = h.scrollLeft;
            h.scrollLeft += m / p, v = (h.scrollLeft - L) * p;
          }
          e = {
            left: e.left - v,
            top: e.top - C,
            right: e.right - v,
            bottom: e.bottom - C
          }, v && Math.abs(v - m) < 1 && (i = "nearest"), C && Math.abs(C - b) < 1 && (n = "nearest");
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
function zr(s, e = !0) {
  let t = s.ownerDocument, i = null, n = null;
  for (let r = s.parentNode; r && !(r == t.body || (!e || i) && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), e && !i && r.scrollWidth > r.clientWidth && (i = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: i, y: n };
}
class rc {
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
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
}
let Le = null;
x.safari && x.safari_version >= 26 && (Le = !1);
function $r(s) {
  if (s.setActive)
    return s.setActive();
  if (Le)
    return s.focus(Le);
  let e = [];
  for (let t = s; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (s.focus(Le == null ? {
    get preventScroll() {
      return Le = { preventScroll: !0 }, !0;
    }
  } : void 0), !Le) {
    Le = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], r = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let vn;
function St(s, e, t = e) {
  let i = vn || (vn = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function Xe(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let a = new KeyboardEvent("keyup", n);
  return a.synthetic = !0, s.dispatchEvent(a), r.defaultPrevented || a.defaultPrevented;
}
function ac(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function oc(s, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, xe(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = xe(t));
    } else {
      if (t == s)
        return !0;
      i = Ee(t), t = t.parentNode;
    }
}
function Vr(s) {
  return s instanceof Window ? s.pageYOffset > Math.max(0, s.document.documentElement.scrollHeight - s.innerHeight - 4) : s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function qr(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = xe(t);
    } else if (t.parentNode && !si(t))
      i = Ee(t), t = t.parentNode;
    else
      return null;
  }
}
function Kr(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !si(t))
      i = Ee(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class te {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new te(e.parentNode, Ee(e), t);
  }
  static after(e, t) {
    return new te(e.parentNode, Ee(e) + 1, t);
  }
}
var N = /* @__PURE__ */ (function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
})(N || (N = {}));
const We = N.LTR, Is = N.RTL;
function Gr(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const lc = /* @__PURE__ */ Gr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), cc = /* @__PURE__ */ Gr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), cs = /* @__PURE__ */ Object.create(null), re = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  cs[e] = t, cs[t] = -e;
}
function Ur(s) {
  return s <= 247 ? lc[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? cc[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const hc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ce {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Is : We;
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
  static find(e, t, i, n) {
    let r = -1;
    for (let a = 0; a < e.length; a++) {
      let o = e[a];
      if (o.from <= t && o.to >= t) {
        if (o.level == i)
          return a;
        (r < 0 || (n != 0 ? n < 0 ? o.from < t : o.to > t : e[r].level > o.level)) && (r = a);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function _r(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !_r(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const O = [];
function dc(s, e, t, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let a = r ? i[r - 1].to : e, o = r < i.length ? i[r].from : t, l = r ? 256 : n;
    for (let c = a, h = l, d = l; c < o; c++) {
      let u = Ur(s.charCodeAt(c));
      u == 512 ? u = h : u == 8 && d == 4 && (u = 16), O[c] = u == 4 ? 2 : u, u & 7 && (d = u), h = u;
    }
    for (let c = a, h = l, d = l; c < o; c++) {
      let u = O[c];
      if (u == 128)
        c < o - 1 && h == O[c + 1] && h & 24 ? u = O[c] = h : O[c] = 256;
      else if (u == 64) {
        let f = c + 1;
        for (; f < o && O[f] == 64; )
          f++;
        let p = c && h == 8 || f < t && O[f] == 8 ? d == 1 ? 1 : 8 : 256;
        for (let g = c; g < f; g++)
          O[g] = p;
        c = f - 1;
      } else u == 8 && d == 1 && (O[c] = 1);
      h = u, u & 7 && (d = u);
    }
  }
}
function uc(s, e, t, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let a = 0, o = 0, l = 0; a <= i.length; a++) {
    let c = a ? i[a - 1].to : e, h = a < i.length ? i[a].from : t;
    for (let d = c, u, f, p; d < h; d++)
      if (f = cs[u = s.charCodeAt(d)])
        if (f < 0) {
          for (let g = o - 3; g >= 0; g -= 3)
            if (re[g + 1] == -f) {
              let m = re[g + 2], b = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              b && (O[d] = O[re[g]] = b), o = g;
              break;
            }
        } else {
          if (re.length == 189)
            break;
          re[o++] = d, re[o++] = u, re[o++] = l;
        }
      else if ((p = O[d]) == 2 || p == 1) {
        let g = p == n;
        l = g ? 0 : 1;
        for (let m = o - 3; m >= 0; m -= 3) {
          let b = re[m + 2];
          if (b & 2)
            break;
          if (g)
            re[m + 2] |= 2;
          else {
            if (b & 4)
              break;
            re[m + 2] |= 4;
          }
        }
      }
  }
}
function fc(s, e, t, i) {
  for (let n = 0, r = i; n <= t.length; n++) {
    let a = n ? t[n - 1].to : s, o = n < t.length ? t[n].from : e;
    for (let l = a; l < o; ) {
      let c = O[l];
      if (c == 256) {
        let h = l + 1;
        for (; ; )
          if (h == o) {
            if (n == t.length)
              break;
            h = t[n++].to, o = n < t.length ? t[n].from : e;
          } else if (O[h] == 256)
            h++;
          else
            break;
        let d = r == 1, u = (h < e ? O[h] : i) == 1, f = d == u ? d ? 1 : 2 : i;
        for (let p = h, g = n, m = g ? t[g - 1].to : s; p > l; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : s), O[--p] = f;
        l = h;
      } else
        r = c, l++;
    }
  }
}
function hs(s, e, t, i, n, r, a) {
  let o = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let l = e, c = 0; l < t; ) {
      let h = !0, d = !1;
      if (c == r.length || l < r[c].from) {
        let g = O[l];
        g != o && (h = !1, d = g == 16);
      }
      let u = !h && o == 1 ? [] : null, f = h ? i : i + 1, p = l;
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
                if (O[m] == o)
                  break e;
                break;
              }
            }
          if (c++, u)
            u.push(g);
          else {
            g.from > l && a.push(new ce(l, g.from, f));
            let m = g.direction == We != !(f % 2);
            ds(s, m ? i + 1 : i, n, g.inner, g.from, g.to, a), l = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (h ? O[p] != o : O[p] == o))
            break;
          p++;
        }
      u ? hs(s, l, p, i + 1, n, u, a) : l < p && a.push(new ce(l, p, f)), l = p;
    }
  else
    for (let l = t, c = r.length; l > e; ) {
      let h = !0, d = !1;
      if (!c || l > r[c - 1].to) {
        let g = O[l - 1];
        g != o && (h = !1, d = g == 16);
      }
      let u = !h && o == 1 ? [] : null, f = h ? i : i + 1, p = l;
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
                if (O[m - 1] == o)
                  break e;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < l && a.push(new ce(g.to, l, f));
            let m = g.direction == We != !(f % 2);
            ds(s, m ? i + 1 : i, n, g.inner, g.from, g.to, a), l = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (h ? O[p - 1] != o : O[p - 1] == o))
            break;
          p--;
        }
      u ? hs(s, p, l, i + 1, n, u, a) : p < l && a.push(new ce(p, l, f)), l = p;
    }
}
function ds(s, e, t, i, n, r, a) {
  let o = e % 2 ? 2 : 1;
  dc(s, n, r, i, o), uc(s, n, r, i, o), fc(n, r, i, o), hs(s, n, r, e, t, i, a);
}
function pc(s, e, t) {
  if (!s)
    return [new ce(0, 0, e == Is ? 1 : 0)];
  if (e == We && !t.length && !hc.test(s))
    return Yr(s.length);
  if (t.length)
    for (; s.length > O.length; )
      O[O.length] = 256;
  let i = [], n = e == We ? 0 : 1;
  return ds(s, n, n, t, 0, s.length, i), i;
}
function Yr(s) {
  return [new ce(0, s, 0)];
}
let Xr = "";
function gc(s, e, t, i, n) {
  var r;
  let a = i.head - s.from, o = ce.find(e, a, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), l = e[o], c = l.side(n, t);
  if (a == c) {
    let u = o += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    l = e[o = u], a = l.side(!n, t), c = l.side(n, t);
  }
  let h = le(s.text, a, l.forward(n, t));
  (h < l.from || h > l.to) && (h = c), Xr = s.text.slice(Math.min(a, h), Math.max(a, h));
  let d = o == (n ? e.length - 1 : 0) ? null : e[o + (n ? 1 : -1)];
  return d && h == c && d.level + (n ? 0 : 1) < l.level ? y.cursor(d.side(!n, t) + s.from, d.forward(n, t) ? 1 : -1, d.level) : y.cursor(h + s.from, l.forward(n, t) ? -1 : 1, l.level);
}
function mc(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = Ur(s.charCodeAt(i));
    if (n == 1)
      return We;
    if (n == 2 || n == 4)
      return Is;
  }
  return We;
}
const Jr = /* @__PURE__ */ w.define(), Qr = /* @__PURE__ */ w.define(), Zr = /* @__PURE__ */ w.define(), ea = /* @__PURE__ */ w.define(), us = /* @__PURE__ */ w.define(), ta = /* @__PURE__ */ w.define(), ia = /* @__PURE__ */ w.define(), Ns = /* @__PURE__ */ w.define(), Hs = /* @__PURE__ */ w.define(), sa = /* @__PURE__ */ w.define({
  combine: (s) => s.some((e) => e)
}), na = /* @__PURE__ */ w.define({
  combine: (s) => s.some((e) => e)
}), ra = /* @__PURE__ */ w.define();
class Je {
  constructor(e, t, i, n, r, a = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = a;
  }
  map(e) {
    return e.empty ? this : new Je(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Je(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Pt = /* @__PURE__ */ H.define({ map: (s, e) => s.map(e) }), aa = /* @__PURE__ */ H.define();
function ge(s, e, t) {
  let i = s.facet(ea);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const ue = /* @__PURE__ */ w.define({ combine: (s) => s.length ? s[0] : !0 });
let bc = 0;
const Ke = /* @__PURE__ */ w.define({
  combine(s) {
    return s.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (s[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Fe {
  constructor(e, t, i, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Ke.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(Ke.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: a } = t || {};
    return new Fe(bc++, e, i, n, (o) => {
      let l = [];
      return a && l.push(mi.of((c) => {
        let h = c.plugin(o);
        return h ? a(h) : j.none;
      })), r && l.push(r(o)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Fe.define((i, n) => new e(i, n), t);
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
const oa = /* @__PURE__ */ w.define(), js = /* @__PURE__ */ w.define(), mi = /* @__PURE__ */ w.define(), la = /* @__PURE__ */ w.define(), Ws = /* @__PURE__ */ w.define(), Mt = /* @__PURE__ */ w.define(), ca = /* @__PURE__ */ w.define();
function wn(s, e) {
  let t = s.state.facet(ca);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return M.spans(i, e.from, e.to, {
    point() {
    },
    span(r, a, o, l) {
      let c = r - e.from, h = a - e.from, d = n;
      for (let u = o.length - 1; u >= 0; u--, l--) {
        let f = o[u].spec.bidiIsolate, p;
        if (f == null && (f = mc(e.text, c, h)), l > 0 && d.length && (p = d[d.length - 1]).to == c && p.direction == f)
          p.to = h, d = p.inner;
        else {
          let g = { from: c, to: h, direction: f, inner: [] };
          d.push(g), d = g.inner;
        }
      }
    }
  }), n;
}
const ha = /* @__PURE__ */ w.define();
function da(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(ha)) {
    let a = r(s);
    a && (a.left != null && (e = Math.max(e, a.left)), a.right != null && (t = Math.max(t, a.right)), a.top != null && (i = Math.max(i, a.top)), a.bottom != null && (n = Math.max(n, a.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const lt = /* @__PURE__ */ w.define();
class Q {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new Q(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
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
    for (let n = 0, r = 0, a = 0; ; ) {
      let o = n < e.length ? e[n].fromB : 1e9, l = r < t.length ? t[r] : 1e9, c = Math.min(o, l);
      if (c == 1e9)
        break;
      let h = c + a, d = c, u = h;
      for (; ; )
        if (r < t.length && t[r] <= d) {
          let f = t[r + 1];
          r += 2, d = Math.max(d, f);
          for (let p = n; p < e.length && e[p].fromB <= d; p++)
            a = e[p].toA - e[p].toB;
          u = Math.max(u, f + a);
        } else if (n < e.length && e[n].fromB <= d) {
          let f = e[n++];
          d = Math.max(d, f.toB), u = Math.max(u, f.toA), a = f.toA - f.toB;
        } else
          break;
      i.push(new Q(h, u, c, d));
    }
    return i;
  }
}
class ri {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = W.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, a, o, l) => n.push(new Q(r, a, o, l))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ri(e, t, i);
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
const xc = [];
class P {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return xc;
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
      t && ec(this.dom, t);
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
    for (let n of this.children) {
      if (n == e)
        return i;
      i += n.length + n.breakAfter;
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
    let i = Ee(this.dom), n = this.length ? e > 0 : t > 0;
    return new te(this.parent.dom, i + (n ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof xi)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class bi extends P {
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
    let t = this.dom, i = null, n, r = e?.node == t ? e : null, a = 0;
    for (let o of this.children) {
      if (o.sync(e), a += o.length + o.breakAfter, n = i ? i.nextSibling : t.firstChild, r && n != o.dom && (r.written = !0), o.dom.parentNode == t)
        for (; n && n != o.dom; )
          n = Sn(n);
      else
        t.insertBefore(o.dom, n);
      i = o.dom;
    }
    for (n = i ? i.nextSibling : t.firstChild, r && n && (r.written = !0); n; )
      n = Sn(n);
    this.length = a;
  }
}
function Sn(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class xi extends bi {
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
      let t = P.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, n = 0, r = 0; ; )
      if (n == i.children.length) {
        if (!t.length)
          return;
        i = i.parent, i.breakAfter && r++, n = t.pop();
      } else {
        let a = i.children[n++];
        if (a instanceof be)
          t.push(n), i = a, n = 0;
        else {
          let o = r + a.length, l = e(a, r);
          if (l !== void 0)
            return l;
          r = o + a.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, n = -1, r, a = -1;
    if (this.blockTiles((o, l) => {
      let c = l + o.length;
      if (e >= l && e <= c) {
        if (o.isWidget() && t >= -1 && t <= 1) {
          if (o.flags & 32)
            return !0;
          o.flags & 16 && (i = void 0);
        }
        (l < e || e == c && (t < -1 ? o.length : o.covers(1))) && (!i || !o.isWidget() && i.isWidget()) && (i = o, n = e - l), (c > e || e == l && (t > 1 ? o.length : o.covers(-1))) && (!r || !o.isWidget() && r.isWidget()) && (r = o, a = e - l);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: n } : { tile: r, offset: a };
  }
}
class be extends bi {
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
class et extends bi {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let n = new et(t || document.createElement("div"), e);
    return (!t || !i) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let n = null, r = -1, a = null, o = -1;
    function l(h, d) {
      for (let u = 0, f = 0; u < h.children.length && f <= d; u++) {
        let p = h.children[u], g = f + p.length;
        g >= d && (p.isComposite() ? l(p, d - f) : (!a || a.isHidden && (t > 0 || i && vc(a, p))) && (g > d || p.flags & 32) ? (a = p, o = d - f) : (f < d || p.flags & 16 && !p.isHidden) && (n = p, r = d - f)), f = g;
      }
    }
    l(this, e);
    let c = (t < 0 ? n : a) || n || a;
    return c ? { tile: c, offset: c == n ? r : o } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : yc(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: n, offset: r } = i;
      if (this.dom.contains(n.dom))
        return n.isText() ? new te(n.dom, Math.min(n.dom.nodeValue.length, r)) : n.domPosFor(r, n.flags & 16 ? 1 : n.flags & 32 ? -1 : t);
      let a = i.tile.parent, o = !1;
      for (let l of a.children) {
        if (o)
          return new te(l.dom, 0);
        l == i.tile && (o = !0);
      }
    }
    return new te(this.dom, 0);
  }
}
function yc(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = Gt(e);
  return t[t.length - 1] || null;
}
function vc(s, e) {
  let t = s.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class _ extends bi {
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
class Ie extends P {
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
    let n = e, r = e, a = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? x.chrome || x.gecko || (e ? (n--, a = 1) : r < i && (r++, a = -1)) : t < 0 ? n-- : r < i && r++;
    let o = St(this.dom, n, r).getClientRects();
    if (!o.length)
      return null;
    let l = o[(a ? a < 0 : t >= 0) ? 0 : o.length - 1];
    return x.safari && !a && l.width == 0 && (l = Array.prototype.find.call(o, (c) => c.width) || l), a ? ni(l, a < 0) : l || null;
  }
  static of(e, t) {
    let i = new Ie(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class ze extends P {
  constructor(e, t, i, n) {
    super(e, t, n), this.widget = i;
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
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    if (i)
      return ni(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), a = null;
      if (!r.length)
        return null;
      let o = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let l = o ? r.length - 1 : 0; a = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || a.top < a.bottom); l += o ? -1 : 1)
        ;
      return ni(a, !o);
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
  static of(e, t, i, n, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new ze(r, i, e, n);
  }
}
class ai extends P {
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
class wc {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: n, index: r, beforeBreak: a, parents: o } = this;
    for (; e || t > 0; )
      if (n.isComposite())
        if (a) {
          if (!e)
            break;
          i && i.break(), e--, a = !1;
        } else if (r == n.children.length) {
          if (!e && !o.length)
            break;
          i && i.leave(n), a = !!n.breakAfter, { tile: n, index: r } = o.pop(), r++;
        } else {
          let l = n.children[r], c = l.breakAfter;
          (t > 0 ? l.length <= e : l.length < e) && (!i || i.skip(l, 0, l.length) !== !1 || !l.isComposite) ? (a = !!c, r++, e -= l.length) : (o.push({ tile: n, index: r }), n = l, r = 0, i && l.isComposite() && i.enter(l));
        }
      else if (r == n.length)
        a = !!n.breakAfter, { tile: n, index: r } = o.pop(), r++;
      else if (e) {
        let l = Math.min(e, n.length - r);
        i && i.skip(n, r, r + l), e -= l, r += l;
      } else
        break;
    return this.tile = n, this.index = r, this.beforeBreak = a, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Sc {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = n;
  }
}
class kc {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, n) {
    var r;
    this.flushBuffer();
    let a = this.ensureMarks(t, i), o = a.lastChild;
    if (o && o.isText() && !(o.flags & 8) && o.length + e.length < 512) {
      this.cache.reused.set(
        o,
        2
        /* Reused.DOM */
      );
      let l = a.children[a.children.length - 1] = new Ie(o.dom, o.text + e);
      l.parent = a;
    } else
      a.append(n || Ie.of(e, (r = this.cache.find(Ie)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Ri(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let n = i;
    for (let o = t.marks.length - 1; o >= 0; o--) {
      let l = t.marks[o], c = n.lastChild;
      if (c instanceof _ && c.mark.eq(l.mark))
        c.dom != l.dom && c.setDOM(Ri(l.dom)), n = c;
      else {
        if (this.cache.reused.get(l)) {
          let d = P.get(l.dom);
          d && d.setDOM(Ri(l.dom));
        }
        let h = _.of(l.mark, l.dom);
        n.append(h), n = h;
      }
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
    }
    let r = P.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let a = new Ie(e.text, e.text.nodeValue);
    a.flags |= 8, this.pos = e.range.toB, n.append(a);
  }
  addInlineWidget(e, t, i) {
    let n = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    n || this.flushBuffer();
    let r = this.ensureMarks(t, i);
    !n && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
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
    e || (e = ua);
    let n = et.start(e, t || ((i = this.cache.find(et)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = n);
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
    let n = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let a = e[r], o;
      if (t > 0 && (o = n.lastChild) && o instanceof _ && o.mark.eq(a))
        n = o, t--;
      else {
        let l = _.of(a, (i = this.cache.find(_, (c) => c.mark.eq(a))) === null || i === void 0 ? void 0 : i.dom);
        n.append(l), n = l, t = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !kn(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(x.ios && kn(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Ei,
        0,
        32
        /* TileFlag.After */
      ) || new ze(
        Ei.toDOM(),
        0,
        Ei,
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
        let t = e.rank * 102 + e.value.rank, i = new Sc(e.from, e.to, e.value, t), n = this.wrappers.length;
        for (; n > 0 && (this.wrappers[n - 1].rank - i.rank || this.wrappers[n - 1].to - i.to) < 0; )
          n--;
        this.wrappers.splice(n, 0, i);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let n = t.lastChild;
      if (i.from < this.pos && n instanceof be && n.wrapper.eq(i.wrapper))
        t = n;
      else {
        let r = be.of(i.wrapper, (e = this.cache.find(be, (a) => a.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
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
class Cc {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: n, lineBreak: r, done: a } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, a)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = n;
      let o = this.textOff = Math.min(e, n.length);
      return r ? null : n.slice(0, o);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const oi = [ze, et, Ie, _, ai, be, xi];
for (let s = 0; s < oi.length; s++)
  oi[s].bucket = s;
class Ac {
  constructor(e) {
    this.view = e, this.buckets = oi.map(() => []), this.index = oi.map(() => 0), this.reused = /* @__PURE__ */ new Map();
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
    let n = e.bucket, r = this.buckets[n], a = this.index[n];
    for (let o = r.length - 1; o >= 0; o--) {
      let l = (o + a) % r.length, c = r[l];
      if ((!t || t(c)) && !this.reused.has(c))
        return r.splice(l, 1), l < a && this.index[n]--, this.reused.set(c, i), c;
    }
    return null;
  }
  findWidget(e, t, i) {
    let n = this.buckets[0];
    if (n.length)
      for (let r = 0, a = 0; ; r++) {
        if (r == n.length) {
          if (a)
            return null;
          a = 1, r = 0;
        }
        let o = n[r];
        if (!this.reused.has(o) && (a == 0 ? o.widget.compare(e) : o.widget.constructor == e.constructor && e.updateDOM(o.dom, this.view, o.widget)))
          return n.splice(r, 1), r < this.index[0] && this.index[0]--, o.widget == e && o.length == t && (o.flags & 497) == i ? (this.reused.set(
            o,
            1
            /* Reused.Full */
          ), o) : (this.reused.set(
            o,
            2
            /* Reused.DOM */
          ), new ze(o.dom, t, e, o.flags & -498 | i));
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
class Mc {
  constructor(e, t, i, n, r) {
    this.view = e, this.decorations = n, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new Ac(e), this.text = new Cc(e.state.doc), this.builder = new kc(this.cache, new xi(e, e.contentDOM), M.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new wc(t), this.reuseWalker = {
      skip: (a, o, l) => {
        if (this.cache.add(a), a.isComposite())
          return !1;
      },
      enter: (a) => this.cache.add(a),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let n = 0, r = 0, a = 0; ; ) {
      let o = a < e.length ? e[a++] : null, l = o ? o.fromA : this.old.root.length;
      if (l > n) {
        let c = l - n;
        this.preserve(c, !a, !o), n = l, r += c;
      }
      if (!o)
        break;
      t && o.fromA <= t.range.fromA && o.toA >= t.range.toA ? (this.forward(o.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, o.toA), this.emit(t.range.toB, o.toB)) : (this.forward(o.fromA, o.toA), this.emit(r, o.toB)), r = o.toB, n = o.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let n = Ec(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (a, o, l) => {
        if (a.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(l - o);
          else {
            let c = l > 0 || o < a.length ? ze.of(a.widget, this.view, l - o, a.flags & 496, this.cache.maybeReuse(a)) : this.cache.reuse(a);
            c.flags & 256 ? (c.flags &= -2, this.builder.addBlockWidget(c)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(c, n, r), r = n.length);
          }
        else if (a.isText())
          this.builder.ensureLine(null), !o && l == a.length && !this.cache.reused.has(a) ? this.builder.addText(a.text, n, r, this.cache.reuse(a)) : (this.cache.add(a), this.builder.addText(a.text.slice(o, l), n, r)), r = n.length;
        else if (a.isLine())
          a.flags &= -2, this.cache.reused.set(
            a,
            1
            /* Reused.Full */
          ), this.builder.addLine(a);
        else if (a instanceof ai)
          this.cache.add(a);
        else if (a instanceof _)
          this.builder.ensureLine(null), this.builder.addMark(a, n, r), this.cache.reused.set(
            a,
            1
            /* Reused.Full */
          ), r = n.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (a) => {
        a.isLine() ? this.builder.addLineStart(a.attrs, this.cache.maybeReuse(a)) : (this.cache.add(a), a instanceof _ && n.unshift(a.mark)), this.openWidget = !1;
      },
      leave: (a) => {
        a.isLine() ? n.length && (n.length = r = 0) : a instanceof _ && (n.shift(), r = Math.min(r, n.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, n = this.builder, r = 0, a = M.spans(this.decorations, e, t, {
      point: (o, l, c, h, d, u) => {
        if (c instanceof je) {
          if (this.disallowBlockEffectsFor[u]) {
            if (c.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (l > this.view.state.doc.lineAt(o).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = h.length, d > h.length)
            n.continueWidget(l - o);
          else {
            let f = c.widget || (c.block ? tt.block : tt.inline), p = Tc(c), g = this.cache.findWidget(f, l - o, p) || ze.of(f, this.view, l - o, p);
            c.block ? (c.startSide > 0 && n.addLineStartIfNotCovered(i), n.addBlockWidget(g)) : (n.ensureLine(i), n.addInlineWidget(g, h, d));
          }
          i = null;
        } else
          i = Rc(i, c);
        l > o && this.text.skip(l - o);
      },
      span: (o, l, c, h) => {
        for (let d = o; d < l; ) {
          let u = this.text.next(Math.min(512, l - d));
          u == null ? (n.addLineStartIfNotCovered(i), n.addBreak(), d++) : (n.ensureLine(i), n.addText(u, c, d == o ? h : c.length), d += u.length), i = null;
        }
      }
    });
    n.addLineStartIfNotCovered(i), this.openWidget = a > r, this.openMarks = a;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let n = e.parentNode; ; n = n.parentNode) {
      let r = P.get(n);
      if (n == this.view.contentDOM)
        break;
      r instanceof _ ? t.push(r) : r?.isLine() ? i = r : r instanceof be || (n.nodeName == "DIV" && !i && n != this.view.contentDOM ? i = new et(n, ua) : i || t.push(_.of(new Ct({ tagName: n.nodeName.toLowerCase(), attributes: tc(n) }), n)));
    }
    return { line: i, marks: t };
  }
}
function kn(s, e) {
  let t = (i) => {
    for (let n of i.children)
      if ((e ? n.isText() : n.length) || t(n))
        return !0;
    return !1;
  };
  return t(s);
}
function Tc(s) {
  let e = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (e |= 256), e;
}
const ua = { class: "cm-line" };
function Rc(s, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (s || (s = { class: "cm-line" }), t && Bs(t, s), i && (s.class += " " + i)), s;
}
function Ec(s) {
  let e = [];
  for (let t = s.parents.length; t > 1; t--) {
    let i = t == s.parents.length ? s.tile : s.parents[t].tile;
    i instanceof _ && e.push(i.mark);
  }
  return e;
}
function Ri(s) {
  let e = P.get(s);
  return e && e.setDOM(s.cloneNode()), s;
}
class tt extends gi {
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
tt.inline = /* @__PURE__ */ new tt("span");
tt.block = /* @__PURE__ */ new tt("div");
const Ei = /* @__PURE__ */ new class extends gi {
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
class Cn {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = j.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new xi(e, e.contentDOM), this.updateInner([new Q(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: d }) => d < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !jc(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let r = n > -1 ? Dc(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: h, to: d } = this.hasComposition;
      i = new Q(h, d, e.changes.mapPos(h, -1), e.changes.mapPos(d, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (x.ie || x.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let a = this.decorations, o = this.blockWrappers;
    this.updateDeco();
    let l = Pc(a, this.decorations, e.changes);
    l.length && (i = Q.extendWithRanges(i, l));
    let c = Nc(o, this.blockWrappers, e.changes);
    return c.length && (i = Q.extendWithRanges(i, c)), r && !i.some((h) => h.fromA <= r.range.fromA && h.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let a = this.tile, o = new Mc(this.view, a, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && P.get(t.text) && o.cache.reused.set(
          P.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = o.run(e, t), fs(a, o.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = x.chrome || x.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof Oi && n.push(r.dom);
    i.updateGaps(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(aa) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, n = this.view.root.activeElement, r = n == i, a = !r && !(this.view.state.facet(ue) || i.tabIndex > -1) && ut(i, this.view.observer.selectionRange) && !(n && i.contains(n));
    if (!(r || t || a))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, c, h;
    if (l.empty ? h = c = this.inlineDOMNearPos(l.anchor, l.assoc || 1) : (h = this.inlineDOMNearPos(l.head, l.head == l.from ? 1 : -1), c = this.inlineDOMNearPos(l.anchor, l.anchor == l.from ? 1 : -1)), x.gecko && l.empty && !this.hasComposition && Oc(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = h = new te(u, 0), o = !0;
    }
    let d = this.view.observer.selectionRange;
    (o || !d.focusNode || (!ft(c.node, c.offset, d.anchorNode, d.anchorOffset) || !ft(h.node, h.offset, d.focusNode, d.focusOffset)) && !this.suppressWidgetCursorChange(d, l)) && (this.view.observer.ignore(() => {
      x.android && x.chrome && i.contains(d.focusNode) && Hc(d.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = wt(this.view.root);
      if (u) if (l.empty) {
        if (x.gecko) {
          let f = Lc(c.node, c.offset);
          if (f && f != 3) {
            let p = (f == 1 ? qr : Kr)(c.node, c.offset);
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
      a && this.view.root.activeElement == i && (i.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(c, h)), this.impreciseAnchor = c.precise ? null : new te(d.anchorNode, d.anchorOffset), this.impreciseHead = h.precise ? null : new te(d.focusNode, d.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && ft(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = wt(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let a = this.lineAt(t.head, t.assoc);
    if (!a)
      return;
    let o = a.posAtStart;
    if (t.head == o || t.head == o + a.length)
      return;
    let l = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!l || !c || l.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let d = e.observer.selectionRange;
    e.docView.posFromDOM(d.anchorNode, d.anchorOffset) != t.from && i.collapse(n, r);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let n = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom)
        r = i.dom.childNodes[t];
      else {
        let a = xe(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let o = e.parentNode;
          if (o == i.dom)
            break;
          a == 0 && o.firstChild != o.lastChild && (e == o.firstChild ? a = -1 : a = 1), e = o;
        }
        a < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild)
        return n;
      for (; r && !P.get(r); )
        r = r.nextSibling;
      if (!r)
        return n + i.length;
      for (let a = 0, o = n; ; a++) {
        let l = i.children[a];
        if (l.dom == r)
          return o;
        o += l.length + l.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? n + t : n + (t ? i.length : 0) : n;
  }
  domAtPos(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(n, t);
  }
  inlineDOMNearPos(e, t) {
    let i, n = -1, r = !1, a, o = -1, l = !1;
    return this.tile.blockTiles((c, h) => {
      if (c.isWidget()) {
        if (c.flags & 32 && h >= e)
          return !0;
        c.flags & 16 && (r = !0);
      } else {
        let d = h + c.length;
        if (h <= e && (i = c, n = e - h, r = d < e), d >= e && !a && (a = c, o = e - h, l = h > e), h > e && a)
          return !0;
      }
    }), !i && !a ? this.domAtPos(e, t) : (r && a ? i = null : l && i && (a = null), i && t < 0 || !a ? i.domIn(n, t) : a.domIn(o, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof Oi ? null : i.coordsInWidget(n, t, !0) : i.coordsIn(n, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function n(r, a) {
      if (r.isComposite())
        for (let o of r.children) {
          if (o.length >= a) {
            let l = n(o, a);
            if (l)
              return l;
          }
          if (a -= o.length, a < 0)
            break;
        }
      else if (r.isText() && a < r.length) {
        let o = le(r.text, a);
        if (o == a)
          return null;
        let l = St(r.dom, a, o).getClientRects();
        for (let c = 0; c < l.length; c++) {
          let h = l[c];
          if (c == l.length - 1 || h.top < h.bottom && h.left < h.right)
            return h;
        }
      }
      return null;
    }
    return n(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, a = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1, l = this.view.textDirection == N.LTR, c = 0, h = (d, u, f) => {
      for (let p = 0; p < d.children.length && !(u > n); p++) {
        let g = d.children[p], m = u + g.length, b = g.dom.getBoundingClientRect(), { height: v } = b;
        if (f && !p && (c += b.top - f.top), g instanceof be)
          m > i && h(g, u, b);
        else if (u >= i && (c > 0 && t.push(-c), t.push(v + c), c = 0, a)) {
          let C = g.dom.lastChild, L = C ? Gt(C) : [];
          if (L.length) {
            let A = L[L.length - 1], S = l ? A.right - b.left : b.right - A.left;
            S > o && (o = S, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = m);
          }
        }
        f && p == d.children.length - 1 && (c += f.bottom - b.bottom), u = m + g.breakAfter;
      }
    };
    return h(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? N.RTL : N.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((a) => {
      if (a.isLine() && a.children.length && a.length <= 20) {
        let o = 0, l;
        for (let c of a.children) {
          if (!c.isText() || /[^ -~]/.test(c.text))
            return;
          let h = Gt(c.dom);
          if (h.length != 1)
            return;
          o += h[0].width, l = h[0].height;
        }
        if (o)
          return {
            lineHeight: a.dom.getBoundingClientRect().height,
            charWidth: o / a.length,
            textHeight: l
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, n, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let a = Gt(t.firstChild)[0];
      i = t.getBoundingClientRect().height, n = a && a.width ? a.width / 27 : 7, r = a && a.height ? a.height : i, t.remove();
    }), { lineHeight: i, charWidth: n, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], a = r ? r.from - 1 : this.view.state.doc.length;
      if (a > i) {
        let o = (t.lineBlockAt(a).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(j.replace({
          widget: new Oi(o),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, a));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return j.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(mi).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(Ws).map((r, a) => {
      let o = typeof r == "function";
      return o && (i = !0), o ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(M.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(la).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(ra))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (d) {
        ge(this.view.state, d, "scroll handler");
      }
    let { range: i } = e, n = this.coordsAt(i.head, (t = i.assoc) !== null && t !== void 0 ? t : i.empty ? 0 : i.head > i.anchor ? -1 : 1), r;
    if (!n)
      return;
    !i.empty && (r = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let a = da(this.view), o = {
      left: n.left - a.left,
      top: n.top - a.top,
      right: n.right + a.right,
      bottom: n.bottom + a.bottom
    }, { offsetWidth: l, offsetHeight: c } = this.view.scrollDOM;
    if (nc(this.view.scrollDOM, o, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, c), -c), this.view.textDirection == N.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(i.head, 1);
      h && h.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    fs(this.tile);
  }
}
function fs(s, e) {
  let t = e?.get(s);
  if (t != 1) {
    t == null && s.destroy();
    for (let i of s.children)
      fs(i, e);
  }
}
function Oc(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function fa(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = qr(t.focusNode, t.focusOffset), n = Kr(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let o = P.get(n.node);
    if (!o || o.isText() && o.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let l = P.get(i.node);
      !l || l.isText() && l.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let a = e - r.offset;
  return { from: a, to: a + r.node.nodeValue.length, node: r.node };
}
function Dc(s, e, t) {
  let i = fa(s, t);
  if (!i)
    return null;
  let { node: n, from: r, to: a } = i, o = n.nodeValue;
  if (/[\n\r]/.test(o) || s.state.doc.sliceString(i.from, i.to) != o)
    return null;
  let l = e.invertedDesc;
  return { range: new Q(l.mapPos(r), l.mapPos(a), r, a), text: n };
}
function Lc(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Bc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Ye(e, t, this.changes);
  }
  comparePoint(e, t) {
    Ye(e, t, this.changes);
  }
  boundChange(e) {
    Ye(e, e, this.changes);
  }
};
function Pc(s, e, t) {
  let i = new Bc();
  return M.compare(s, e, t, i), i.changes;
}
class Ic {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Ye(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    Ye(e, e, this.changes);
  }
}
function Nc(s, e, t) {
  let i = new Ic();
  return M.compare(s, e, t, i), i.changes;
}
function Hc(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function jc(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
class Oi extends gi {
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
function Wc(s, e, t = 1) {
  let i = s.charCategorizer(e), n = s.doc.lineAt(e), r = e - n.from;
  if (n.length == 0)
    return y.cursor(e);
  r == 0 ? t = 1 : r == n.length && (t = -1);
  let a = r, o = r;
  t < 0 ? a = le(n.text, r, !1) : o = le(n.text, r);
  let l = i(n.text.slice(a, o));
  for (; a > 0; ) {
    let c = le(n.text, a, !1);
    if (i(n.text.slice(c, a)) != l)
      break;
    a = c;
  }
  for (; o < n.length; ) {
    let c = le(n.text, o);
    if (i(n.text.slice(o, c)) != l)
      break;
    o = c;
  }
  return y.range(a + n.from, o + n.from);
}
function Fc(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let o = s.viewState.heightOracle.textHeight, l = Math.floor((n - t.top - (s.defaultLineHeight - o) * 0.5) / o);
    r += l * s.viewState.heightOracle.lineLength;
  }
  let a = s.state.sliceDoc(t.from, t.to);
  return t.from + Yl(a, r, s.state.tabSize);
}
function ps(s, e, t) {
  let i = s.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!n || r.type == $.Text && (n.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (n = r);
      }
    }
    return n || i;
  }
  return i;
}
function zc(s, e, t, i) {
  let n = ps(s, e.head, e.assoc || -1), r = !i || n.type != $.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (r) {
    let a = s.dom.getBoundingClientRect(), o = s.textDirectionAt(n.from), l = s.posAtCoords({
      x: t == (o == N.LTR) ? a.right - 1 : a.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (l != null)
      return y.cursor(l, t ? -1 : 1);
  }
  return y.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function An(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), a = s.textDirectionAt(n.from);
  for (let o = e, l = null; ; ) {
    let c = gc(n, r, a, o, t), h = Xr;
    if (!c) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return o;
      h = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), c = s.visualLineSide(n, !t);
    }
    if (l) {
      if (!l(h))
        return o;
    } else {
      if (!i)
        return c;
      l = i(h);
    }
    o = c;
  }
}
function $c(s, e, t) {
  let i = s.state.charCategorizer(e), n = i(t);
  return (r) => {
    let a = i(r);
    return n == pe.Space && (n = a), n == a;
  };
}
function Vc(s, e, t, i) {
  let n = e.head, r = t ? 1 : -1;
  if (n == (t ? s.state.doc.length : 0))
    return y.cursor(n, e.assoc);
  let a = e.goalColumn, o, l = s.contentDOM.getBoundingClientRect(), c = s.coordsAtPos(n, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), h = s.documentTop;
  if (c)
    a == null && (a = c.left - l.left), o = r < 0 ? c.top : c.bottom;
  else {
    let p = s.viewState.lineBlockAt(n);
    a == null && (a = Math.min(l.right - l.left, s.defaultCharacterWidth * (n - p.from))), o = (r < 0 ? p.top : p.bottom) + h;
  }
  let d = l.left + a, u = s.viewState.heightOracle.textHeight >> 1, f = i ?? u;
  for (let p = 0; ; p += u) {
    let g = o + (f + p) * r, m = gs(s, { x: d, y: g }, !1, r);
    if (t ? g > l.bottom : g < l.top)
      return y.cursor(m.pos, m.assoc);
    let b = s.coordsAtPos(m.pos, m.assoc), v = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? v > o : v < o))
      return y.cursor(m.pos, m.assoc, void 0, a);
  }
}
function pt(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, a, o) => {
        if (e > r && e < a) {
          let l = i || t || (e - r < a - e ? -1 : 1);
          e = l < 0 ? r : a, i = l;
        }
      });
    if (!i)
      return e;
  }
}
function pa(s, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let n = e.ranges[i], r = null;
    if (n.empty) {
      let a = pt(s, n.from, 0);
      a != n.from && (r = y.cursor(a, -1));
    } else {
      let a = pt(s, n.from, -1), o = pt(s, n.to, 1);
      (a != n.from || o != n.to) && (r = y.range(n.from == n.anchor ? a : o, n.from == n.head ? a : o));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function Di(s, e, t) {
  let i = pt(s.state.facet(Mt).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : y.cursor(i, i < t.from ? 1 : -1);
}
class oe {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function gs(s, e, t, i) {
  let n = s.contentDOM.getBoundingClientRect(), r = n.top + s.viewState.paddingTop, { x: a, y: o } = e, l = o - r, c;
  for (; ; ) {
    if (l < 0)
      return new oe(0, 1);
    if (l > s.viewState.docHeight)
      return new oe(s.state.doc.length, -1);
    if (c = s.elementAtHeight(l), i == null)
      break;
    if (c.type == $.Text) {
      if (i < 0 ? c.to < s.viewport.from : c.from > s.viewport.to)
        break;
      let u = s.docView.coordsAt(i < 0 ? c.from : c.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= l + r : u.bottom >= l + r))
        break;
    }
    let d = s.viewState.heightOracle.textHeight / 2;
    l = i > 0 ? c.bottom + d : c.top - d;
  }
  if (s.viewport.from >= c.to || s.viewport.to <= c.from) {
    if (t)
      return null;
    if (c.type == $.Text) {
      let d = Fc(s, n, c, a, o);
      return new oe(d, d == c.from ? 1 : -1);
    }
  }
  if (c.type != $.Text)
    return l < (c.top + c.bottom) / 2 ? new oe(c.from, 1) : new oe(c.to, -1);
  let h = s.docView.lineAt(c.from, 2);
  return (!h || h.length != c.length) && (h = s.docView.lineAt(c.from, -2)), new qc(s, a, o, s.textDirectionAt(c.from)).scanTile(h, c.from);
}
class qc {
  constructor(e, t, i, n) {
    this.view = e, this.x = t, this.y = i, this.baseDir = n, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[ce.find(n, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[ce.find(n, e - i.from, -1, t)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(e, t) {
    let { spans: i, line: n } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + n.from < t);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically and is closest horizontally. The caller is responsible
  // for dividing its content into N pieces, and pass an array with
  // N+1 positions (including the position after the last piece). For
  // a text tile, these will be character clusters, for a composite
  // tile, these will be child tiles.
  scan(e, t, i = !1) {
    let n = 0, r = e.length - 1, a = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[r]), l, c, h = -1, d = 1e9, u;
    e: for (; n < r; ) {
      let p = r - n, g = n + r >> 1;
      t: if (a.has(g)) {
        let b = n + Math.floor(Math.random() * p);
        for (let v = 0; v < p; v++) {
          if (!a.has(b)) {
            g = b;
            break t;
          }
          b++, b == r && (b = n);
        }
        break e;
      }
      a.add(g);
      let m = t(g);
      if (m)
        for (let b = 0; b < m.length; b++) {
          let v = m[b], C = 0;
          if (!(v.width == 0 && m.length > 1)) {
            if (v.bottom < this.y)
              (!l || l.bottom < v.bottom) && (l = v), C = 1;
            else if (v.top > this.y)
              (!c || c.top > v.top) && (c = v), C = -1;
            else {
              let L = v.left > this.x ? this.x - v.left : v.right < this.x ? this.x - v.right : 0, A = Math.abs(L);
              A < d && (h = g, d = A, u = v), L && (C = L < 0 == (this.baseDir == N.LTR) ? -1 : 1);
            }
            C == -1 && (!o || this.baseDirAt(e[g], 1)) ? r = g : C == 1 && (!o || this.baseDirAt(e[g + 1], -1)) && (n = g + 1);
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
    let f = (o ? this.dirAt(e[h], 1) : this.baseDir) == N.LTR;
    return {
      i: h,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == f
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = le(e.text, r))
      i.push(t + r);
    i.push(t + e.length);
    let n = this.scan(i, (r) => {
      let a = i[r] - t, o = i[r + 1] - t;
      return St(e.dom, a, o).getClientRects();
    });
    return n.after ? new oe(i[n.i + 1], -1) : new oe(i[n.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new oe(t, 1);
    if (e.children.length == 1) {
      let o = e.children[0];
      if (o.isText())
        return this.scanText(o, t);
      if (o.isComposite())
        return this.scanTile(o, t);
    }
    let i = [t];
    for (let o = 0, l = t; o < e.children.length; o++)
      i.push(l += e.children[o].length);
    let n = this.scan(i, (o) => {
      let l = e.children[o];
      return l.flags & 48 ? null : (l.dom.nodeType == 1 ? l.dom : St(l.dom, 0, l.length)).getClientRects();
    }), r = e.children[n.i], a = i[n.i];
    return r.isText() ? this.scanText(r, a) : r.isComposite() ? this.scanTile(r, a) : n.after ? new oe(i[n.i + 1], -1) : new oe(a, 1);
  }
}
const qe = "￿";
class Kc {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(E.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += qe;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let a = P.get(n), o = n.nextSibling;
      if (o == t) {
        a?.breakAfter && !o && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let l = P.get(o);
      (a && l ? a.breakAfter : (a ? a.breakAfter : si(n)) || si(o) && (n.nodeName != "BR" || a?.isWidget()) && this.text.length > r) && !Uc(o, t) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, a = 1, o;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), a = this.lineSeparator.length) : (o = n.exec(t)) && (r = o.index, a = o[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), a > 1)
        for (let l of this.points)
          l.node == e && l.pos > this.text.length && (l.pos -= a - 1);
      i = r + a;
    }
  }
  readNode(e) {
    let t = P.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Gc(e, i.node, i.offset) ? t : 0));
  }
}
function Gc(s, e, t) {
  for (; ; ) {
    if (!e || t < xe(e))
      return !1;
    if (e == s)
      return !0;
    t = Ee(e) + 1, e = e.parentNode;
  }
}
function Uc(s, e) {
  let t;
  for (; !(s == e || !s); s = s.nextSibling) {
    let i = P.get(s);
    if (!i?.isWidget())
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let n = i.overrideDOMText;
      if (n?.length)
        return !1;
    }
  return !0;
}
class Mn {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class _c {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: a } = e.docView, o = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = ga(e.docView.tile, t, i, 0))) {
      let l = r || a ? [] : Xc(e), c = new Kc(l, e);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = Jc(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, c = r && r.node == l.focusNode && r.offset == l.focusOffset || !ls(e.contentDOM, l.focusNode) ? o.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = a && a.node == l.anchorNode && a.offset == l.anchorOffset || !ls(e.contentDOM, l.anchorNode) ? o.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), d = e.viewport;
      if ((x.ios || x.chrome) && o.main.empty && c != h && (d.from > 0 || d.to < e.state.doc.length)) {
        let u = Math.min(c, h), f = Math.max(c, h), p = d.from - u, g = d.to - f;
        (p == 0 || p == 1 || u == 0) && (g == 0 || g == -1 || f == e.state.doc.length) && (c = 0, h = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && o.ranges.length > 1)
        this.newSel = o.replaceRange(y.range(h, c));
      else if (e.lineWrapping && h == c && !(o.main.empty && o.main.head == c) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(c, -1), f = 0;
        u && (f = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = y.create([y.cursor(c, f)]);
      } else
        this.newSel = y.single(h, c);
    }
  }
}
function ga(s, e, t, i) {
  if (s.isComposite()) {
    let n = -1, r = -1, a = -1, o = -1;
    for (let l = 0, c = i, h = i; l < s.children.length; l++) {
      let d = s.children[l], u = c + d.length;
      if (c < e && u > t)
        return ga(d, e, t, c);
      if (u >= e && n == -1 && (n = l, r = c), c > t && d.dom.parentNode == s.dom) {
        a = l, o = h;
        break;
      }
      h = u, c = u + d.breakAfter;
    }
    return {
      from: r,
      to: o < 0 ? i + s.length : o,
      startDOM: (n ? s.children[n - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: a < s.children.length && a >= 0 ? s.children[a].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function ma(s, e) {
  let t, { newSel: i } = e, { state: n } = s, r = n.selection.main, a = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, c = r.from, h = null;
    (a === 8 || x.android && e.text.length < l - o) && (c = r.to, h = "end");
    let d = n.doc.sliceString(o, l, qe), u, f;
    !r.empty && r.from >= o && r.to <= l && (e.typeOver || d != e.text) && d.slice(0, r.from - o) == e.text.slice(0, r.from - o) && d.slice(r.to - o) == e.text.slice(u = e.text.length - (d.length - (r.to - o))) ? t = {
      from: r.from,
      to: r.to,
      insert: T.of(e.text.slice(r.from - o, u).split(qe))
    } : (f = ba(d, e.text, c - o, h)) && (x.chrome && a == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == qe + qe && f.toB--, t = {
      from: o + f.from,
      to: o + f.toA,
      insert: T.of(e.text.slice(f.from, f.toB).split(qe))
    });
  } else i && (!s.hasFocus && n.facet(ue) || li(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((x.mac || x.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: T.of([t.insert.toString().replace(".", " ")]) }) : n.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: n.toText(s.inputState.insertingText)
  } : x.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: T.of([" "]) }), t)
    return Fs(s, t, i, a);
  if (i && !li(i, r)) {
    let o = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (o = !0), l = s.inputState.lastSelectionOrigin, l == "select.pointer" && (i = pa(n.facet(Mt).map((c) => c(s)), i))), s.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Fs(s, e, t, i = -1) {
  if (x.ios && s.inputState.flushIOSKey(e))
    return !0;
  let n = s.state.selection.main;
  if (x.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && s.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Xe(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && Xe(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Xe(s.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let a, o = () => a || (a = Yc(s, e, t));
  return s.state.facet(ta).some((l) => l(s, e.from, e.to, r, o)) || s.dispatch(o()), !0;
}
function Yc(s, e, t) {
  let i, n = s.state, r = n.selection.main, a = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let l = e.from < r.from ? -1 : 1, c = l < 0 ? r.from : r.to, h = pt(n.facet(Mt).map((d) => d(s)), c, l);
    e.from == h && (a = h);
  }
  if (a > -1)
    i = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let l = r.from < e.from ? n.sliceDoc(r.from, e.from) : "", c = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(l + e.insert.sliceString(0, void 0, s.state.lineBreak) + c));
  } else {
    let l = n.changes(e), c = t && t.main.to <= l.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let h = s.state.sliceDoc(e.from, e.to), d, u = t && fa(s, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        d = { from: u.from, to: u.to - p };
      } else
        d = s.state.doc.lineAt(r.head);
      let f = r.to - e.to;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: c || p.map(l) };
        let g = p.to - f, m = g - h.length;
        if (s.state.sliceDoc(m, g) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= d.from && m <= d.to)
          return { range: p };
        let b = n.changes({ from: m, to: g, insert: e.insert }), v = p.to - r.to;
        return {
          changes: b,
          range: c ? y.range(Math.max(0, c.anchor + v), Math.max(0, c.head + v)) : p.map(b)
        };
      });
    } else
      i = {
        changes: l,
        selection: c && n.selection.replaceRange(c)
      };
  }
  let o = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, o += ".compose", s.inputState.compositionFirstChange && (o += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: o, scrollIntoView: !0 });
}
function ba(s, e, t, i) {
  let n = Math.min(s.length, e.length), r = 0;
  for (; r < n && s.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == n && s.length == e.length)
    return null;
  let a = s.length, o = e.length;
  for (; a > 0 && o > 0 && s.charCodeAt(a - 1) == e.charCodeAt(o - 1); )
    a--, o--;
  if (i == "end") {
    let l = Math.max(0, r - Math.min(a, o));
    t -= a + l - r;
  }
  if (a < r && s.length < e.length) {
    let l = t <= r && t >= a ? r - t : 0;
    r -= l, o = r + (o - a), a = r;
  } else if (o < r) {
    let l = t <= r && t >= o ? r - t : 0;
    r -= l, a = r + (a - o), o = r;
  }
  return { from: r, toA: a, toB: o };
}
function Xc(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return t && (e.push(new Mn(t, i)), (n != t || r != i) && e.push(new Mn(n, r))), e;
}
function Jc(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null;
}
function li(s, e) {
  return e.head == s.main.head && e.anchor == s.main.anchor;
}
class Qc {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, x.safari && e.contentDOM.addEventListener("input", () => null), x.gecko && fh(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !ah(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Zc(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let a = !t[r].handlers.length, o = i[r];
        o && a != !o.handlers.length && (n.removeEventListener(r, this.handleEvent), o = null), o || n.addEventListener(r, this.handleEvent, { passive: a });
      }
    for (let r in i)
      r != "scroll" && !t[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && ya.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), x.android && x.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return x.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = xa.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || eh.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Xe(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
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
function Tn(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      ge(t.state, n);
    }
  };
}
function Zc(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec, r = n && n.plugin.domEventHandlers, a = n && n.plugin.domEventObservers;
    if (r)
      for (let o in r) {
        let l = r[o];
        l && t(o).handlers.push(Tn(i.value, l));
      }
    if (a)
      for (let o in a) {
        let l = a[o];
        l && t(o).observers.push(Tn(i.value, l));
      }
  }
  for (let i in ie)
    t(i).handlers.push(ie[i]);
  for (let i in Y)
    t(i).observers.push(Y[i]);
  return e;
}
const xa = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], eh = "dthko", ya = [16, 17, 18, 20, 91, 92, 224, 225], It = 6;
function Nt(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function th(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class ih {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = zr(e.contentDOM), this.atoms = e.state.facet(Mt).map((a) => a(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(E.allowMultipleSelections) && sh(e, t), this.dragging = rh(e, t) && Sa(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && th(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, r = 0, a = this.view.win.innerWidth, o = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: a } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: o } = this.scrollParents.y.getBoundingClientRect());
    let l = da(this.view);
    e.clientX - l.left <= n + It ? t = -Nt(n - e.clientX) : e.clientX + l.right >= a - It && (t = Nt(e.clientX - a)), e.clientY - l.top <= r + It ? i = -Nt(r - e.clientY) : e.clientY + l.bottom >= o - It && (i = Nt(e.clientY - o)), this.setScrollSpeed(t, i);
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
    let { view: t } = this, i = pa(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function sh(s, e) {
  let t = s.state.facet(Jr);
  return t.length ? t[0](e) : x.mac ? e.metaKey : e.ctrlKey;
}
function nh(s, e) {
  let t = s.state.facet(Qr);
  return t.length ? t[0](e) : x.mac ? !e.altKey : !e.ctrlKey;
}
function rh(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = wt(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let a = n[r];
    if (a.left <= e.clientX && a.right >= e.clientX && a.top <= e.clientY && a.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function ah(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = P.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const ie = /* @__PURE__ */ Object.create(null), Y = /* @__PURE__ */ Object.create(null), va = x.ie && x.ie_version < 15 || x.ios && x.webkit_version < 604;
function oh(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), wa(s, t.value);
  }, 50);
}
function yi(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function wa(s, e) {
  e = yi(s.state, Ns, e);
  let { state: t } = s, i, n = 1, r = t.toText(e), a = r.lines == t.selection.ranges.length;
  if (ms != null && t.selection.ranges.every((l) => l.empty) && ms == r.toString()) {
    let l = -1;
    i = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == l)
        return { range: c };
      l = h.from;
      let d = t.toText((a ? r.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: d },
        range: y.cursor(c.from + d.length)
      };
    });
  } else a ? i = t.changeByRange((l) => {
    let c = r.line(n++);
    return {
      changes: { from: l.from, to: l.to, insert: c.text },
      range: y.cursor(l.from + c.length)
    };
  }) : i = t.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Y.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
Y.wheel = Y.mousewheel = (s) => {
  s.inputState.lastWheelEvent = Date.now();
};
ie.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
Y.touchstart = (s, e) => {
  let t = s.inputState, i = e.targetTouches[0];
  t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
Y.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
ie.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(Zr))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = ch(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new ih(s, e, t, i)), i && s.observer.ignore(() => {
      $r(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  } else
    s.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Rn(s, e, t, i) {
  if (i == 1)
    return y.cursor(e, t);
  if (i == 2)
    return Wc(s.state, e, t);
  {
    let n = s.docView.lineAt(e, t), r = s.state.doc.lineAt(n ? n.posAtEnd : e), a = n ? n.posAtStart : r.from, o = n ? n.posAtEnd : r.to;
    return o < s.state.doc.length && o == r.to && o++, y.range(a, o);
  }
}
const lh = x.ie && x.ie_version <= 11;
let En = null, On = 0, Dn = 0;
function Sa(s) {
  if (!lh)
    return s.detail;
  let e = En, t = Dn;
  return En = s, Dn = Date.now(), On = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (On + 1) % 3 : 1;
}
function ch(s, e) {
  let t = s.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = Sa(e), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), n = n.map(r.changes));
    },
    get(r, a, o) {
      let l = s.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), c, h = Rn(s, l.pos, l.assoc, i);
      if (t.pos != l.pos && !a) {
        let d = Rn(s, t.pos, t.assoc, i), u = Math.min(d.from, h.from), f = Math.max(d.to, h.to);
        h = u < h.from ? y.range(u, f, h.assoc) : y.range(f, u, h.assoc);
      }
      return a ? n.replaceRange(n.main.extend(h.from, h.to, h.assoc)) : o && i == 1 && n.ranges.length > 1 && (c = hh(n, l.pos)) ? c : o ? n.addRange(h) : y.create([h]);
    }
  };
}
function hh(s, e) {
  for (let t = 0; t < s.ranges.length; t++) {
    let { from: i, to: n } = s.ranges[t];
    if (i <= e && n >= e)
      return y.create(s.ranges.slice(0, t).concat(s.ranges.slice(t + 1)), s.mainIndex == t ? 0 : s.mainIndex - (s.mainIndex > t ? 1 : 0));
  }
  return null;
}
ie.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let n = s.docView.tile.nearest(e.target);
    if (n && n.isWidget()) {
      let r = n.posAtStart, a = r + n.length;
      (r >= t.to || a <= t.from) && (t = y.range(r, a));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", yi(s.state, Hs, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
ie.dragend = (s) => (s.inputState.draggedContent = null, !1);
function Ln(s, e, t, i) {
  if (t = yi(s.state, Ns, t), !t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, a = i && r && nh(s, e) ? { from: r.from, to: r.to } : null, o = { from: n, insert: t }, l = s.state.changes(a ? [a, o] : o);
  s.focus(), s.dispatch({
    changes: l,
    selection: { anchor: l.mapPos(n, -1), head: l.mapPos(n, 1) },
    userEvent: a ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
ie.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, r = () => {
      ++n == t.length && Ln(s, e, i.filter((a) => a != null).join(s.state.lineBreak), !1);
    };
    for (let a = 0; a < t.length; a++) {
      let o = new FileReader();
      o.onerror = r, o.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(o.result) || (i[a] = o.result), r();
      }, o.readAsText(t[a]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Ln(s, e, i, !0), !0;
  }
  return !1;
};
ie.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = va ? null : e.clipboardData;
  return t ? (wa(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (oh(s), !1);
};
function dh(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function uh(s) {
  let e = [], t = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (e.push(s.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let a = s.doc.lineAt(r);
      a.number > n && (e.push(a.text), t.push({ from: a.from, to: Math.min(s.doc.length, a.to + 1) })), n = a.number;
    }
    i = !0;
  }
  return { text: yi(s, Hs, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let ms = null;
ie.copy = ie.cut = (s, e) => {
  if (!ut(s.contentDOM, s.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: n } = uh(s.state);
  if (!t && !n)
    return !1;
  ms = n ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = va ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (dh(s, t), !1);
};
const ka = /* @__PURE__ */ nt.define();
function Ca(s, e) {
  let t = [];
  for (let i of s.facet(ia)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t.length ? s.update({ effects: t, annotations: ka.of(!0) }) : null;
}
function Aa(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = Ca(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
Y.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Aa(s);
};
Y.blur = (s) => {
  s.observer.clearSelectionRange(), Aa(s);
};
Y.compositionstart = Y.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
Y.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, x.chrome && x.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
Y.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
ie.beforeinput = (s, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (s.inputState.insertingText = e.data, s.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), a = e.getTargetRanges();
    if (r && a.length) {
      let o = a[0], l = s.posAtDOM(o.startContainer, o.startOffset), c = s.posAtDOM(o.endContainer, o.endOffset);
      return Fs(s, { from: l, to: c, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (x.chrome && x.android && (n = xa.find((r) => r.inputType == e.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var a;
      (((a = window.visualViewport) === null || a === void 0 ? void 0 : a.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return x.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), x.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => Y.compositionend(s, e), 20), !1;
};
const Bn = /* @__PURE__ */ new Set();
function fh(s) {
  Bn.has(s) || (Bn.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const Pn = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let it = !1;
function In() {
  it = !1;
}
class ph {
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
    return Pn.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, r, a) {
    let o = Pn.indexOf(e) > -1, l = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != o;
    if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, l) {
      this.heightSamples = {};
      for (let c = 0; c < a.length; c++) {
        let h = a[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return l;
  }
}
class gh {
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
  constructor(e, t, i, n, r) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? $.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof je ? this._content.widget : null;
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
var D = /* @__PURE__ */ (function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
})(D || (D = {}));
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
    this.height != e && (Math.abs(this.height - e) > Ut && (it = !0), this.height = e);
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
  applyChanges(e, t, i, n) {
    let r = this, a = i.doc;
    for (let o = n.length - 1; o >= 0; o--) {
      let { fromA: l, toA: c, fromB: h, toB: d } = n[o], u = r.lineAt(l, D.ByPosNoHeight, i.setDoc(t), 0, 0), f = u.to >= c ? u : r.lineAt(c, D.ByPosNoHeight, i, 0, 0);
      for (d += f.to - c, c = f.to; o > 0 && u.from <= n[o - 1].toA; )
        l = n[o - 1].fromA, h = n[o - 1].fromB, o--, l < u.from && (u = r.lineAt(l, D.ByPosNoHeight, i, 0, 0));
      h += u.from - l, l = u.from;
      let p = zs.build(i.setDoc(a), e, h, d);
      r = ci(r, r.replace(l, c, p));
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
    let t = 0, i = e.length, n = 0, r = 0;
    for (; ; )
      if (t == i)
        if (n > r * 2) {
          let o = e[t - 1];
          o.break ? e.splice(--t, 1, o.left, null, o.right) : e.splice(--t, 1, o.left, o.right), i += 1 + o.break, n -= o.size;
        } else if (r > n * 2) {
          let o = e[i];
          o.break ? e.splice(i, 1, o.left, null, o.right) : e.splice(i, 1, o.left, o.right), i += 2 + o.break, r -= o.size;
        } else
          break;
      else if (n < r) {
        let o = e[t++];
        o && (n += o.size);
      } else {
        let o = e[--i];
        o && (r += o.size);
      }
    let a = 0;
    return e[t - 1] == null ? (a = 1, t--) : e[t] == null && (a = 1, i++), new bh(U.of(e.slice(0, t)), a, U.of(e.slice(i)));
  }
}
function ci(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (it = !0), e);
}
U.prototype.size = 1;
const mh = /* @__PURE__ */ j.replace({});
class Ma extends U {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new ee(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, n) {
    return this.spaceAbove && e < i + this.spaceAbove ? new ee(n, 0, i, this.spaceAbove, mh) : this.mainBlock(i, n);
  }
  lineAt(e, t, i, n, r) {
    let a = this.mainBlock(n, r);
    return this.spaceAbove ? this.blockAt(0, i, n, r).join(a) : a;
  }
  forEachLine(e, t, i, n, r, a) {
    e <= r + this.length && t >= r && a(this.lineAt(0, D.ByPos, i, n, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setMeasuredHeight(n), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class X extends Ma {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new ee(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof X || n instanceof F && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof F ? n = new X(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : U.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setMeasuredHeight(n) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
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
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, r = n - i + 1, a, o = 0;
    if (e.lineWrapping) {
      let l = Math.min(this.height, e.lineHeight * r);
      a = l / r, this.length > r + 1 && (o = (this.height - l) / (this.length - r - 1));
    } else
      a = this.height / r;
    return { firstLine: i, lastLine: n, perLine: a, perChar: o };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: a, perLine: o, perChar: l } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let c = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), h = t.doc.lineAt(c), d = o + h.length * l, u = Math.max(i, e - d / 2);
      return new ee(h.from, h.length, u, d, 0);
    } else {
      let c = Math.max(0, Math.min(a - r, Math.floor((e - i) / o))), { from: h, length: d } = t.doc.line(r + c);
      return new ee(h, d, i + o * c, o, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == D.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == D.ByPosNoHeight) {
      let { from: f, to: p } = i.doc.lineAt(e);
      return new ee(f, p - f, 0, 0, 0);
    }
    let { firstLine: a, perLine: o, perChar: l } = this.heightMetrics(i, r), c = i.doc.lineAt(e), h = o + c.length * l, d = c.number - a, u = n + o * d + l * (c.from - r - d);
    return new ee(c.from, c.length, Math.max(n, Math.min(u, n + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, n, r, a) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: o, perLine: l, perChar: c } = this.heightMetrics(i, r);
    for (let h = e, d = n; h <= t; ) {
      let u = i.doc.lineAt(h);
      if (h == e) {
        let p = u.number - o;
        d += l * p + c * (e - r - p);
      }
      let f = l + c * u.length;
      a(new ee(u.from, u.length, d, f, 0)), d += f, h = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof F ? i[i.length - 1] = new F(r.length + n) : i.push(null, new F(n - 1));
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
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let a = [], o = Math.max(t, n.from), l = -1;
      for (n.from > t && a.push(new F(n.from - t - 1).updateHeight(e, t)); o <= r && n.more; ) {
        let h = e.doc.lineAt(o).length;
        a.length && a.push(null);
        let d = n.heights[n.index++], u = 0;
        d < 0 && (u = -d, d = n.heights[n.index++]), l == -1 ? l = d : Math.abs(d - l) >= Ut && (l = -2);
        let f = new X(h, d, u);
        f.outdated = !1, a.push(f), o += h + 1;
      }
      o <= r && a.push(null, new F(r - o).updateHeight(e, o));
      let c = U.of(a);
      return (l < 0 || Math.abs(c.height - this.height) >= Ut || Math.abs(l - this.heightMetrics(e, t).perLine) >= Ut) && (it = !0), ci(this, c);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class bh extends U {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, n) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, r, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, r) {
    let a = n + this.left.height, o = r + this.left.length + this.break, l = t == D.ByHeight ? e < a : e < o, c = l ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, a, o);
    if (this.break || (l ? c.to < o : c.from > o))
      return c;
    let h = t == D.ByPosNoHeight ? D.ByPosNoHeight : D.ByPos;
    return l ? c.join(this.right.lineAt(o, h, i, a, o)) : this.left.lineAt(o, h, i, n, r).join(c);
  }
  forEachLine(e, t, i, n, r, a) {
    let o = n + this.left.height, l = r + this.left.length + this.break;
    if (this.break)
      e < l && this.left.forEachLine(e, t, i, n, r, a), t >= l && this.right.forEachLine(e, t, i, o, l, a);
    else {
      let c = this.lineAt(l, D.ByPos, i, n, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, n, r, a), c.to >= e && c.from <= t && a(c), t > c.to && this.right.forEachLine(c.to + 1, t, i, o, l, a);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let a = r.length;
    for (let o of i)
      r.push(o);
    if (e > 0 && Nn(r, a - 1), t < this.length) {
      let o = r.length;
      this.decomposeRight(t, r), Nn(r, o);
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
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? U.of(this.break ? [e, null, t] : [e, t]) : (this.left = ci(this.left, e), this.right = ci(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: a } = this, o = t + r.length + this.break, l = null;
    return n && n.from <= t + r.length && n.more ? l = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= o + a.length && n.more ? l = a = a.updateHeight(e, o, i, n) : a.updateHeight(e, o, i), l ? this.balanced(r, a) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Nn(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof F && (i = s[e + 1]) instanceof F && s.splice(e - 1, 3, new F(t.length + 1 + i.length));
}
const xh = 5;
class zs {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof X ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new X(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let a = t - e;
      i.block ? this.addBlock(new Ma(a, n, i)) : (a || r || n >= xh) && this.addLineDeco(n, r, a);
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
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof X) && !this.isCovered ? this.nodes.push(new X(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof X && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let r = new zs(i, e);
    return M.spans(t, i, n, r, 0), r.finish(i);
  }
}
function yh(s, e, t) {
  let i = new vh();
  return M.compare(s, e, t, i, 0), i.changes;
}
class vh {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && Ye(e, t, this.changes, 5);
  }
}
function wh(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), a = Math.min(n.innerWidth, t.right), o = Math.max(0, t.top), l = Math.min(n.innerHeight, t.bottom);
  for (let c = s.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let h = c, d = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && d.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), a = Math.min(a, u.right), o = Math.max(o, u.top), l = Math.min(c == s.parentNode ? n.innerHeight : l, u.bottom);
      }
      c = d.position == "absolute" || d.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, a) - t.left,
    top: o - (t.top + e),
    bottom: Math.max(o, l) - (t.top + e)
  };
}
function Sh(s) {
  let e = s.getBoundingClientRect(), t = s.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function kh(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Li {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.size = i, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], r = t[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return j.replace({
      widget: new Ch(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Ch extends gi {
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
class Hn {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = jn, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = N.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet(js).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new ph(i), this.stateDeco = Wn(t), this.heightMap = U.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle.setDoc(t.doc), [new Q(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = j.set(this.lineGaps.map((n) => n.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: a }) => n >= r && n <= a)) {
        let { from: r, to: a } = this.lineBlockAt(n);
        e.push(new Ht(r, a));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? jn : new $s(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(ct(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = Wn(this.state);
    let n = e.changedRanges, r = Q.extendWithRanges(n, yh(i, this.stateDeco, e ? e.changes : W.empty(this.state.doc.length))), a = this.heightMap.height, o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    In(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != a || it) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a);
    let l = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < l.from || t.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, t));
    let c = l.from != this.viewport.from || l.to != this.viewport.to;
    this.viewport = l, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(na) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? N.RTL : N.LTR;
    let a = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", o = t.getBoundingClientRect(), l = a || this.mustMeasureContent || this.contentDOMHeight != o.height;
    this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (o.width && o.height) {
      let { scaleX: A, scaleY: S } = Fr(t, o);
      (A > 5e-3 && Math.abs(this.scaleX - A) > 5e-3 || S > 5e-3 && Math.abs(this.scaleY - S) > 5e-3) && (this.scaleX = A, this.scaleY = S, c |= 16, a = l = !0);
    }
    let d = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d || this.paddingBottom != u) && (this.paddingTop = d, this.paddingBottom = u, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (l = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let f = zr(this.view.contentDOM, !1).y;
    f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Vr(this.scrollParent || e.win);
    let g = (this.printing ? kh : wh)(t, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v != this.inView && (this.inView = v, v && (l = !0)), !this.inView && !this.scrollTarget && !Sh(e.dom))
      return 0;
    let C = o.width;
    if ((this.contentDOMWidth != C || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), l) {
      let A = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(A) && (a = !0), a || n.lineWrapping && Math.abs(C - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: S, charWidth: B, textHeight: se } = e.docView.measureTextSize();
        a = S > 0 && n.refresh(r, S, B, se, Math.max(5, C / B), A), a && (e.docView.minWidth = 0, c |= 16);
      }
      m > 0 && b > 0 ? h = Math.max(m, b) : m < 0 && b < 0 && (h = Math.min(m, b)), In();
      for (let S of this.viewports) {
        let B = S.from == this.viewport.from ? A : e.docView.measureVisibleLineHeights(S);
        this.heightMap = (a ? U.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle, [new Q(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, a, new gh(S.from, B));
      }
      it && (c |= 2);
    }
    let L = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return L && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || L) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: a, visibleBottom: o } = this, l = new Ht(n.lineAt(a - i * 1e3, D.ByHeight, r, 0, 0).from, n.lineAt(o + (1 - i) * 1e3, D.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < l.from || c > l.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), d = n.lineAt(c, D.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (d.top + d.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < l.from ? u = d.top : u = d.bottom - h, l = new Ht(n.lineAt(u - 1e3 / 2, D.ByHeight, r, 0, 0).from, n.lineAt(u + h + 1e3 / 2, D.ByHeight, r, 0, 0).to);
      }
    }
    return l;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Ht(this.heightMap.lineAt(i, D.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, D.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, D.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, D.ByPos, this.heightOracle, 0, 0), { visibleTop: a, visibleBottom: o } = this;
    return (e == 0 || n <= a - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= o + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > a - 2 * 1e3 && r < o + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new Li(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
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
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, a = n << 1;
    if (this.defaultTextDirection != N.LTR && !i)
      return [];
    let o = [], l = (h, d, u, f) => {
      if (d - h < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let b of g)
        if (b > h && b < d) {
          l(h, b - 10, u, f), l(b + 10, d, u, f);
          return;
        }
      let m = Mh(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - h) < r && Math.abs(b.to - d) < r && !g.some((v) => b.from < v && b.to > v));
      if (!m) {
        if (d < u.to && t && i && t.visibleRanges.some((C) => C.from <= d && C.to >= d)) {
          let C = t.moveToLineBoundary(y.cursor(d), !1, !0).head;
          C > h && (d = C);
        }
        let b = this.gapSize(u, h, d, f), v = i || b < 2e6 ? b : 2e6;
        m = new Li(h, d, b, v);
      }
      o.push(m);
    }, c = (h) => {
      if (h.length < a || h.type != $.Text)
        return;
      let d = Ah(h.from, h.to, this.stateDeco);
      if (d.total < a)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (u != null) {
          let v = Wt(d, u), C = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = v - C, b = v + C;
        } else
          m = (this.visibleTop - h.top - g) / h.height, b = (this.visibleBottom - h.top + g) / h.height;
        f = jt(d, m), p = jt(d, b);
      } else {
        let g = d.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let S of e)
            S.from >= h.from && S.from < h.to && S.size != S.displaySize && S.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = S.size - S.displaySize);
        let v = this.pixelViewport.left + b, C = this.pixelViewport.right + b, L, A;
        if (u != null) {
          let S = Wt(d, u), B = ((C - v) / 2 + m) / g;
          L = S - B, A = S + B;
        } else
          L = (v - m) / g, A = (C + m) / g;
        f = jt(d, L), p = jt(d, A);
      }
      f > h.from && l(h.from, f, h, d), p < h.to && l(p, h.to, h, d);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return o;
  }
  gapSize(e, t, i, n) {
    let r = Wt(n, i) - Wt(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Li.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = j.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    M.spans(t, this.viewport.from, this.viewport.to, {
      span(r, a) {
        i.push({ from: r, to: a });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let a = this.visibleRanges[r], o = i[r];
        (a.from != o.from || a.to != o.to) && (n |= 4, e && e.mapPos(a.from, -1) == o.from && e.mapPos(a.to, 1) == o.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || ct(this.heightMap.lineAt(e, D.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || ct(this.heightMap.lineAt(this.scaler.fromDOM(e), D.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return ct(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ht {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Ah(s, e, t) {
  let i = [], n = s, r = 0;
  return M.spans(t, s, e, {
    span() {
    },
    point(a, o) {
      a > n && (i.push({ from: n, to: a }), r += a - n), n = o;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function jt({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: a } = e[n], o = a - r;
    if (i <= o)
      return r + i;
    i -= o;
  }
}
function Wt(s, e) {
  let t = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / s.total;
}
function Mh(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const jn = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
function Wn(s) {
  let e = s.facet(mi).filter((i) => typeof i != "function"), t = s.facet(Ws).filter((i) => typeof i != "function");
  return t.length && e.push(M.join(t)), e;
}
class $s {
  constructor(e, t, i) {
    let n = 0, r = 0, a = 0;
    this.viewports = i.map(({ from: o, to: l }) => {
      let c = t.lineAt(o, D.ByPos, e, 0, 0).top, h = t.lineAt(l, D.ByPos, e, 0, 0).bottom;
      return n += h - c, { from: o, to: l, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let o of this.viewports)
      o.domTop = a + (o.top - r) * this.scale, a = o.domBottom = o.domTop + (o.bottom - o.top), r = o.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return n + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - n) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof $s ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function ct(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new ee(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => ct(n, e)) : s._content);
}
const Ft = /* @__PURE__ */ w.define({ combine: (s) => s.join(" ") }), bs = /* @__PURE__ */ w.define({ combine: (s) => s.indexOf(!0) > -1 }), xs = /* @__PURE__ */ Ze.newName(), Ta = /* @__PURE__ */ Ze.newName(), Ra = /* @__PURE__ */ Ze.newName(), Ea = { "&light": "." + Ta, "&dark": "." + Ra };
function ys(s, e, t) {
  return new Ze(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : s + " " + i;
    }
  });
}
const Th = /* @__PURE__ */ ys("." + xs, {
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
}, Ea), Rh = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Bi = x.ie && x.ie_version <= 11;
class Eh {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new rc(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (x.ie && x.ie_version <= 11 || x.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && x.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(x.chrome && x.chrome_version < 126) && (this.editContext = new Dh(e), e.state.facet(ue) && (e.contentDOM.editContext = this.editContext.editContext)), Bi && (this.onCharData = (t) => {
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
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(ue) ? i.root.activeElement != this.dom : !ut(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.tile.nearest(n.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (x.ie && x.ie_version <= 11 || x.android && x.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && ft(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = wt(e.root);
    if (!t)
      return !1;
    let i = x.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Oh(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = ut(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && oc(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, Rh), Bi && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Bi && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Xe(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
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
    let t = -1, i = -1, n = !1;
    for (let r of e) {
      let a = this.readMutation(r);
      a && (a.typeOver && (n = !0), t == -1 ? { from: t, to: i } = a : (t = Math.min(a.from, t), i = Math.max(a.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && ut(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new _c(this.view, e, t, i);
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
    let i = this.view.state, n = ma(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !li(this.view.state.selection, t.newSel.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Fn(t, e.previousSibling || e.target.previousSibling, -1), n = Fn(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
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
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Fn(s, e, t) {
  for (; e; ) {
    let i = P.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function zn(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, a = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return ft(a.node, a.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
function Oh(s, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(s.root)[0];
    if (n)
      return zn(s, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? zn(s, t) : null;
}
class Dh {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = e.state.selection.main, { anchor: r, head: a } = n, o = this.toEditorPos(i.updateRangeStart), l = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: o, drifted: !1 });
      let c = l - o > i.text.length;
      o == this.from && r < this.from ? o = r : l == this.to && r > this.to && (l = r);
      let h = ba(e.state.sliceDoc(o, l), i.text, (c ? n.from : n.to) - o, c ? "end" : null);
      if (!h) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        li(u, n) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let d = {
        from: h.from + o,
        to: h.toA + o,
        insert: T.of(i.text.slice(h.from, h.toB).split(`
`))
      };
      if ((x.mac || x.android) && d.from == a - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (d = { from: o, to: l, insert: T.of([i.text.replace(".", " ")]) }), this.pendingContextChange = d, !e.state.readOnly) {
        let u = this.to - this.from + (d.to - d.from + d.insert.length);
        Fs(e, d, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), d.from < d.to && !d.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let a = this.toEditorPos(i.rangeStart), o = this.toEditorPos(i.rangeEnd); a < o; a++) {
        let l = e.coordsForChar(a);
        r = l && new DOMRect(l.left, l.top, l.right - l.left, l.bottom - l.top) || r || new DOMRect(), n.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let a = r.underlineStyle, o = r.underlineThickness;
        if (!/none/i.test(a) && !/none/i.test(o)) {
          let l = this.toEditorPos(r.rangeStart), c = this.toEditorPos(r.rangeEnd);
          if (l < c) {
            let h = `text-decoration: underline ${/^[a-z]/.test(a) ? a + " " : a == "Dashed" ? "dashed " : a == "Squiggle" ? "wavy " : ""}${/thin/i.test(o) ? 1 : 2}px`;
            n.push(j.mark({ attributes: { style: h } }).range(l, c));
          }
        }
      }
      e.dispatch({ effects: aa.of(j.set(n)) });
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
      let n = wt(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((r, a, o, l, c) => {
      if (i)
        return;
      let h = c.length - (a - r);
      if (n && a >= n.to)
        if (n.from == r && n.to == a && n.insert.eq(c)) {
          n = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (r += t, a += t, a <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || a > this.to || this.to - this.from + c.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(a), c.toString()), this.to += h;
      }
      t += h;
    }), n && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
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
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
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
class k {
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || ac(e.parent) || document, this.viewState = new Hn(this, e.state || E.create(e)), e.scrollTo && e.scrollTo.is(Pt) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ke).map((n) => new Ti(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Eh(this), this.inputState = new Qc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Cn(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof q ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    let t = !1, i = !1, n, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let a = this.hasFocus, o = 0, l = null;
    e.some((u) => u.annotation(ka)) ? (this.inputState.notifiedFocused = a, o = 1) : a != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = a, l = Ca(r, a), l || (o = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(E.phrases) != this.state.facet(E.phrases))
      return this.setState(r);
    n = ri.create(this, r, e), n.flags |= o;
    let d = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (d && (d = d.map(u.changes)), u.scrollIntoView) {
          let { main: f } = u.state.selection, { x: p, y: g } = this.state.facet(k.cursorScrollMargin);
          d = new Je(f.empty ? f : y.cursor(f.head, f.head > f.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let f of u.effects)
          f.is(Pt) && (d = f.value.clip(this.state));
      }
      this.viewState.update(n, d), this.bidiCache = hi.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(lt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Ft) != n.state.facet(Ft) && (this.viewState.mustMeasureContent = !0), (t || i || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(us))
        try {
          u(n);
        } catch (f) {
          ge(this.state, f, "update listener");
        }
    (l || h) && Promise.resolve().then(() => {
      l && this.state == l.startState && this.dispatch(l), h && !ma(this, h) && c.force && Xe(this.contentDOM, c.key, c.keyCode);
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
      this.viewState = new Hn(this, e), this.plugins = e.facet(Ke).map((i) => new Ti(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Cn(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Ke), i = e.state.facet(Ke);
    if (t != i) {
      let n = [];
      for (let r of i) {
        let a = t.indexOf(r);
        if (a < 0)
          n.push(new Ti(r));
        else {
          let o = this.plugins[a];
          o.mustUpdate = e, n.push(o);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
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
    let t = null, i = this.viewState.scrollParent, n = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: a } = this.viewState;
    Math.abs(n - this.viewState.scrollOffset) > 1 && (a = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let o = 0; ; o++) {
        if (a < 0)
          if (Vr(i || this.win))
            r = -1, a = this.viewState.heightMap.height;
          else {
            let f = this.viewState.scrollAnchorAt(n);
            r = f.from, a = f.top;
          }
        this.updateState = 1;
        let l = this.viewState.measure();
        if (!l && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (o > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        l & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let h = c.map((f) => {
          try {
            return f.read(this);
          } catch (p) {
            return ge(this.state, p), $n;
          }
        }), d = ri.create(this, this.state, []), u = !1;
        d.flags |= l, t ? t.flags |= l : t = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), u = this.docView.update(d), u && this.docViewUpdate());
        for (let f = 0; f < c.length; f++)
          if (h[f] != $n)
            try {
              let p = c[f];
              p.write && p.write(h[f], this);
            } catch (p) {
              ge(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !d.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, a = -1;
              continue;
            } else {
              let p = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - a) / this.scaleY;
              if ((p > 1 || p < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                n = n + p, i ? i.scrollTop += p : this.win.scrollBy(0, p), a = -1;
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
      for (let o of this.state.facet(us))
        o(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return xs + " " + (this.state.facet(bs) ? Ra : Ta) + " " + this.state.facet(Ft);
  }
  updateAttrs() {
    let e = Vn(this, oa, {
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
    this.state.readOnly && (t["aria-readonly"] = "true"), Vn(this, js, t);
    let i = this.observer.ignore(() => {
      let n = xn(this.contentDOM, this.contentAttrs, t), r = xn(this.dom, this.editorAttrs, e);
      return n || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        if (n.is(k.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(lt);
    let e = this.state.facet(k.cspNonce);
    Ze.mount(this.root, this.styleModules.concat(Th).reverse(), e ? { nonce: e } : void 0);
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
    return Di(this, e, An(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Di(this, e, An(this, e, t, (i) => $c(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return y.cursor(r.side(t, n) + e.from, r.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return zc(this, e, t, i);
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
    return Di(this, e, Vc(this, e, t, i));
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
    let i = gs(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), gs(this, e, t);
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
    let n = this.state.doc.lineAt(e), r = this.bidiSpans(n), a = r[ce.find(r, e - n.from, -1, t)];
    return ni(i, a.dir == N.LTR == t > 0);
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
    return !this.state.facet(sa) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > Lh)
      return Yr(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || _r(r.isolates, i = wn(this, e))))
        return r.order;
    i || (i = wn(this, e));
    let n = pc(e.text, t, i);
    return this.bidiCache.push(new hi(e.from, e.to, t, i, !0, n)), n;
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
      $r(this.contentDOM), this.docView.updateSelection();
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
    var i, n, r, a;
    return Pt.of(new Je(typeof e == "number" ? y.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (n = t.x) !== null && n !== void 0 ? n : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (a = t.xMargin) !== null && a !== void 0 ? a : 5));
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
    return Pt.of(new Je(y.cursor(i.from), "start", "start", i.top - e, t, !0));
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
    return Fe.define(() => ({}), { eventHandlers: e });
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
    return Fe.define(() => ({}), { eventObservers: e });
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
    let i = Ze.newName(), n = [Ft.of(i), lt.of(ys(`.${i}`, e))];
    return t && t.dark && n.push(bs.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Os.lowest(lt.of(ys("." + xs, e, Ea)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && P.get(i) || P.get(e);
    return ((t = n?.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
k.styleModule = lt;
k.inputHandler = ta;
k.clipboardInputFilter = Ns;
k.clipboardOutputFilter = Hs;
k.scrollHandler = ra;
k.focusChangeEffect = ia;
k.perLineTextDirection = sa;
k.exceptionSink = ea;
k.updateListener = us;
k.editable = ue;
k.mouseSelectionStyle = Zr;
k.dragMovesSelection = Qr;
k.clickAddsSelectionRange = Jr;
k.decorations = mi;
k.blockWrappers = la;
k.outerDecorations = Ws;
k.atomicRanges = Mt;
k.bidiIsolatedRanges = ca;
k.cursorScrollMargin = /* @__PURE__ */ w.define({
  combine: (s) => {
    let e = 5, t = 5;
    for (let i of s)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
k.scrollMargins = ha;
k.darkTheme = bs;
k.cspNonce = /* @__PURE__ */ w.define({ combine: (s) => s.length ? s[0] : "" });
k.contentAttributes = js;
k.editorAttributes = oa;
k.lineWrapping = /* @__PURE__ */ k.contentAttributes.of({ class: "cm-lineWrapping" });
k.announce = /* @__PURE__ */ H.define();
const Lh = 4096, $n = {};
class hi {
  constructor(e, t, i, n, r, a) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = a;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : N.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let a = e[r];
      a.dir == n && !t.touchesRange(a.from, a.to) && i.push(new hi(t.mapPos(a.from, 1), t.mapPos(a.to, -1), a.dir, a.isolates, !1, a.order));
    }
    return i;
  }
}
function Vn(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], a = typeof r == "function" ? r(s) : r;
    a && Bs(a, t);
  }
  return t;
}
const Bh = x.mac ? "mac" : x.windows ? "win" : x.linux ? "linux" : "key";
function Ph(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, r, a, o;
  for (let l = 0; l < t.length - 1; ++l) {
    const c = t[l];
    if (/^(cmd|meta|m)$/i.test(c))
      o = !0;
    else if (/^a(lt)?$/i.test(c))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      r = !0;
    else if (/^s(hift)?$/i.test(c))
      a = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? o = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), o && (i = "Meta-" + i), a && (i = "Shift-" + i), i;
}
function zt(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const Ih = /* @__PURE__ */ Os.default(/* @__PURE__ */ k.domEventHandlers({
  keydown(s, e) {
    return Wh(Nh(e.state), s, e, "editor");
  }
})), Oa = /* @__PURE__ */ w.define({ enables: Ih }), qn = /* @__PURE__ */ new WeakMap();
function Nh(s) {
  let e = s.facet(Oa), t = qn.get(e);
  return t || qn.set(e, t = jh(e.reduce((i, n) => i.concat(n), []))), t;
}
let Ce = null;
const Hh = 4e3;
function jh(s, e = Bh) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (a, o) => {
    let l = i[a];
    if (l == null)
      i[a] = o;
    else if (l != o)
      throw new Error("Key binding " + a + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (a, o, l, c, h) => {
    var d, u;
    let f = t[a] || (t[a] = /* @__PURE__ */ Object.create(null)), p = o.split(/ (?!$)/).map((b) => Ph(b, e));
    for (let b = 1; b < p.length; b++) {
      let v = p.slice(0, b).join(" ");
      n(v, !0), f[v] || (f[v] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(C) => {
          let L = Ce = { view: C, prefix: v, scope: a };
          return setTimeout(() => {
            Ce == L && (Ce = null);
          }, Hh), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = f[g] || (f[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (d = f._any) === null || d === void 0 ? void 0 : d.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    l && m.run.push(l), c && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let a of s) {
    let o = a.scope ? a.scope.split(" ") : ["editor"];
    if (a.any)
      for (let c of o) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: d } = a;
        for (let u in h)
          h[u].run.push((f) => d(f, vs));
      }
    let l = a[e] || a.key;
    if (l)
      for (let c of o)
        r(c, l, a.run, a.preventDefault, a.stopPropagation), a.shift && r(c, "Shift-" + l, a.shift, a.preventDefault, a.stopPropagation);
  }
  return t;
}
let vs = null;
function Wh(s, e, t, i) {
  vs = e;
  let n = Zl(e), r = Il(n, 0), a = Nl(r) == n.length && n != " ", o = "", l = !1, c = !1, h = !1;
  Ce && Ce.view == t && Ce.scope == i && (o = Ce.prefix + " ", ya.indexOf(e.keyCode) < 0 && (c = !0, Ce = null));
  let d = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let b of m.run)
        if (!d.has(b) && (d.add(b), b(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, f = s[i], p, g;
  return f && (u(f[o + zt(n, e, !a)]) ? l = !0 : a && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(x.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(x.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = Re[e.keyCode]) && p != n ? (u(f[o + zt(p, e, !0)]) || e.shiftKey && (g = yt[e.keyCode]) != n && g != p && u(f[o + zt(g, e, !1)])) && (l = !0) : a && e.shiftKey && u(f[o + zt(n, e, !0)]) && (l = !0), !l && u(f._any) && (l = !0)), c && (l = !0), l && h && e.stopPropagation(), vs = null, l;
}
class Ne {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, n, r) {
    this.className = e, this.left = t, this.top = i, this.width = n, this.height = r;
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
      let n = e.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = Da(e);
      return [new Ne(t, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return Fh(e, t, i);
  }
}
function Da(s) {
  let e = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == N.LTR ? e.left : e.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: e.top - s.scrollDOM.scrollTop * s.scaleY };
}
function Kn(s, e, t, i) {
  let n = s.coordsAtPos(e, t * 2);
  if (!n)
    return i;
  let r = s.dom.getBoundingClientRect(), a = (n.top + n.bottom) / 2, o = s.posAtCoords({ x: r.left + 1, y: a }), l = s.posAtCoords({ x: r.right - 1, y: a });
  return o == null || l == null ? i : { from: Math.max(i.from, Math.min(o, l)), to: Math.min(i.to, Math.max(o, l)) };
}
function Fh(s, e, t) {
  if (t.to <= s.viewport.from || t.from >= s.viewport.to)
    return [];
  let i = Math.max(t.from, s.viewport.from), n = Math.min(t.to, s.viewport.to), r = s.textDirection == N.LTR, a = s.contentDOM, o = a.getBoundingClientRect(), l = Da(s), c = a.querySelector(".cm-line"), h = c && window.getComputedStyle(c), d = o.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), u = o.right - (h ? parseInt(h.paddingRight) : 0), f = ps(s, i, 1), p = ps(s, n, -1), g = f.type == $.Text ? f : null, m = p.type == $.Text ? p : null;
  if (g && (s.lineWrapping || f.widgetLineBreaks) && (g = Kn(s, i, 1, g)), m && (s.lineWrapping || p.widgetLineBreaks) && (m = Kn(s, n, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return v(C(t.from, t.to, g));
  {
    let A = g ? C(t.from, null, g) : L(f, !1), S = m ? C(null, t.to, m) : L(p, !0), B = [];
    return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && A.bottom + s.defaultLineHeight / 2 < S.top ? B.push(b(d, A.bottom, u, S.top)) : A.bottom < S.top && s.elementAtHeight((A.bottom + S.top) / 2).type == $.Text && (A.bottom = S.top = (A.bottom + S.top) / 2), v(A).concat(B).concat(v(S));
  }
  function b(A, S, B, se) {
    return new Ne(e, A - l.left, S - l.top, Math.max(0, B - A), se - S);
  }
  function v({ top: A, bottom: S, horizontal: B }) {
    let se = [];
    for (let ve = 0; ve < B.length; ve += 2)
      se.push(b(B[ve], A, B[ve + 1], S));
    return se;
  }
  function C(A, S, B) {
    let se = 1e9, ve = -1e9, Tt = [];
    function Ks(Oe, we, Ve, De, rt) {
      let he = s.coordsAtPos(Oe, Oe == B.to ? -2 : 2), de = s.coordsAtPos(Ve, Ve == B.from ? 2 : -2);
      !he || !de || (se = Math.min(he.top, de.top, se), ve = Math.max(he.bottom, de.bottom, ve), rt == N.LTR ? Tt.push(r && we ? d : he.left, r && De ? u : de.right) : Tt.push(!r && De ? d : de.left, !r && we ? u : he.right));
    }
    let Rt = A ?? B.from, Et = S ?? B.to;
    for (let Oe of s.visibleRanges)
      if (Oe.to > Rt && Oe.from < Et)
        for (let we = Math.max(Oe.from, Rt), Ve = Math.min(Oe.to, Et); ; ) {
          let De = s.state.doc.lineAt(we);
          for (let rt of s.bidiSpans(De)) {
            let he = rt.from + De.from, de = rt.to + De.from;
            if (he >= Ve)
              break;
            de > we && Ks(Math.max(he, we), A == null && he <= Rt, Math.min(de, Ve), S == null && de >= Et, rt.dir);
          }
          if (we = De.to + 1, we >= Ve)
            break;
        }
    return Tt.length == 0 && Ks(Rt, A == null, Et, S == null, s.textDirection), { top: se, bottom: ve, horizontal: Tt };
  }
  function L(A, S) {
    let B = o.top + (S ? A.top : A.bottom);
    return { top: B, bottom: B, horizontal: [] };
  }
}
function zh(s, e) {
  return s.constructor == e.constructor && s.eq(e);
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
    if (e.length != this.drawn.length || e.some((t, i) => !zh(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let n of e)
        n.update && t && n.constructor && this.drawn[i].constructor && n.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(n.draw(), t);
      for (; t; ) {
        let n = t.nextSibling;
        t.remove(), t = n;
      }
      this.drawn = e, x.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const _t = /* @__PURE__ */ w.define();
function La(s) {
  return [
    Fe.define((e) => new $h(e, s)),
    _t.of(s)
  ];
}
const st = /* @__PURE__ */ w.define({
  combine(s) {
    return Nr(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Vh(s = {}) {
  return [
    st.of(s),
    qh,
    Kh,
    Gh,
    na.of(!0)
  ];
}
function Ba(s) {
  return s.startState.facet(st) != s.state.facet(st);
}
const qh = /* @__PURE__ */ La({
  above: !0,
  markers(s) {
    let { state: e } = s, t = e.facet(st), i = [];
    for (let n of e.selection.ranges) {
      let r = n == e.selection.main;
      if (n.empty || t.drawRangeCursor && !(r && x.ios && t.iosSelectionHandles)) {
        let a = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", o = n.empty ? n : y.cursor(n.head, n.assoc);
        for (let l of Ne.forRange(s, a, o))
          i.push(l);
      }
    }
    return i;
  },
  update(s, e) {
    s.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Ba(s);
    return t && Gn(s.state, e), s.docChanged || s.selectionSet || t;
  },
  mount(s, e) {
    Gn(e.state, s);
  },
  class: "cm-cursorLayer"
});
function Gn(s, e) {
  e.style.animationDuration = s.facet(st).cursorBlinkRate + "ms";
}
const Kh = /* @__PURE__ */ La({
  above: !1,
  markers(s) {
    let e = [], { main: t, ranges: i } = s.state.selection;
    for (let n of i)
      if (!n.empty)
        for (let r of Ne.forRange(s, "cm-selectionBackground", n))
          e.push(r);
    if (x.ios && !t.empty && s.state.facet(st).iosSelectionHandles) {
      for (let n of Ne.forRange(s, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1)))
        e.push(n);
      for (let n of Ne.forRange(s, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1)))
        e.push(n);
    }
    return e;
  },
  update(s, e) {
    return s.docChanged || s.selectionSet || s.viewportChanged || Ba(s);
  },
  class: "cm-selectionLayer"
}), Gh = /* @__PURE__ */ Os.highest(/* @__PURE__ */ k.theme({
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
class $e extends He {
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
$e.prototype.elementClass = "";
$e.prototype.toDOM = void 0;
$e.prototype.mapMode = J.TrackBefore;
$e.prototype.startSide = $e.prototype.endSide = -1;
$e.prototype.point = !0;
const Pi = /* @__PURE__ */ w.define(), Uh = /* @__PURE__ */ w.define(), Yt = /* @__PURE__ */ w.define(), Un = /* @__PURE__ */ w.define({
  combine: (s) => s.some((e) => e)
});
function _h(s) {
  return [
    Yh
  ];
}
const Yh = /* @__PURE__ */ Fe.fromClass(class {
  constructor(s) {
    this.view = s, this.domAfter = null, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(Yt).map((e) => new Yn(s, e)), this.fixed = !s.state.facet(Un);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(s) {
    if (this.updateGutters(s)) {
      let e = this.prevViewport, t = s.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (s.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Un) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let e = this.dom.nextSibling;
    s && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = M.iter(this.view.state.facet(Pi), this.view.viewport.from), i = [], n = this.gutters.map((r) => new Xh(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let a = !0;
        for (let o of r.type)
          if (o.type == $.Text && a) {
            ws(t, i, o.from);
            for (let l of n)
              l.line(this.view, o, i);
            a = !1;
          } else if (o.widget)
            for (let l of n)
              l.widget(this.view, o);
      } else if (r.type == $.Text) {
        ws(t, i, r.from);
        for (let a of n)
          a.line(this.view, r, i);
      } else if (r.widget)
        for (let a of n)
          a.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(s) {
    let e = s.startState.facet(Yt), t = s.state.facet(Yt), i = s.docChanged || s.heightChanged || s.viewportChanged || !M.eq(s.startState.facet(Pi), s.state.facet(Pi), s.view.viewport.from, s.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of t) {
        let a = e.indexOf(r);
        a < 0 ? n.push(new Yn(this.view, r)) : (this.gutters[a].update(s), n.push(this.gutters[a]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (s) => k.scrollMargins.of((e) => {
    let t = e.plugin(s);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, n = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == N.LTR ? { left: i, right: n } : { right: i, left: n };
  })
});
function _n(s) {
  return Array.isArray(s) ? s : [s];
}
function ws(s, e, t) {
  for (; s.value && s.from <= t; )
    s.from == t && e.push(s.value), s.next();
}
class Xh {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = M.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: n } = this, r = (t.top - this.height) / e.scaleY, a = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let o = new Pa(e, a, r, i);
      n.elements.push(o), n.dom.appendChild(o.dom);
    } else
      n.elements[this.i].update(e, a, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let n = [];
    ws(this.cursor, n, t.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(e, t, n);
    r && n.unshift(r);
    let a = this.gutter;
    n.length == 0 && !a.config.renderEmptyElements || this.addElement(e, t, n);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), n = i ? [i] : null;
    for (let r of e.state.facet(Uh)) {
      let a = r(e, t.widget, t);
      a && (n || (n = [])).push(a);
    }
    n && this.addElement(e, t, n);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Yn {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, a;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let l = r.getBoundingClientRect();
          a = (l.top + l.bottom) / 2;
        } else
          a = n.clientY;
        let o = e.lineBlockAtHeight(a - e.documentTop);
        t.domEventHandlers[i](e, o, n) && n.preventDefault();
      });
    this.markers = _n(t.markers(e)), t.initialSpacer && (this.spacer = new Pa(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = _n(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let i = e.view.viewport;
    return !M.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Pa {
  constructor(e, t, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, n);
  }
  update(e, t, i, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Jh(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, a = 0; ; ) {
      let o = a, l = r < t.length ? t[r++] : null, c = !1;
      if (l) {
        let h = l.elementClass;
        h && (i += " " + h);
        for (let d = a; d < this.markers.length; d++)
          if (this.markers[d].compare(l)) {
            o = d, c = !0;
            break;
          }
      } else
        o = this.markers.length;
      for (; a < o; ) {
        let h = this.markers[a++];
        if (h.toDOM) {
          h.destroy(n);
          let d = n.nextSibling;
          n.remove(), n = d;
        }
      }
      if (!l)
        break;
      l.toDOM && (c ? n = n.nextSibling : this.dom.insertBefore(l.toDOM(e), n)), c && a++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Jh(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (!s[t].compare(e[t]))
      return !1;
  return !0;
}
const Qh = /* @__PURE__ */ w.define(), Zh = /* @__PURE__ */ w.define(), Ge = /* @__PURE__ */ w.define({
  combine(s) {
    return Nr(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let n in t) {
          let r = i[n], a = t[n];
          i[n] = r ? (o, l, c) => r(o, l, c) || a(o, l, c) : a;
        }
        return i;
      }
    });
  }
});
class Ii extends $e {
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
function Ni(s, e) {
  return s.state.facet(Ge).formatNumber(e, s.state);
}
const ed = /* @__PURE__ */ Yt.compute([Ge], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Qh);
  },
  lineMarker(e, t, i) {
    return i.some((n) => n.toDOM) ? null : new Ii(Ni(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let n of e.state.facet(Zh)) {
      let r = n(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ge) != e.state.facet(Ge),
  initialSpacer(e) {
    return new Ii(Ni(e, Xn(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = Ni(t.view, Xn(t.view.state.doc.lines));
    return i == e.number ? e : new Ii(i);
  },
  domEventHandlers: s.facet(Ge).domEventHandlers,
  side: "before"
}));
function td(s = {}) {
  return [
    Ge.of(s),
    _h(),
    ed
  ];
}
function Xn(s) {
  let e = 9;
  for (; e < s; )
    e = e * 10 + 9;
  return e;
}
const id = Object.freeze({
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
}), Vs = H.define(), Ss = H.define();
function sd(s) {
  return [
    {
      key: "Mod-Enter",
      run: () => (s(), !0)
    }
  ];
}
function nd({
  parent: s,
  doc: e = "",
  onChange: t = null,
  onRun: i = null,
  readOnly: n = !1,
  liveLexicalHighlight: r = !1,
  extensions: a = []
} = {}) {
  if (!s)
    throw new Error("mountRasaCodeEditor requires a parent element");
  const o = i ? Oa.of(sd(i)) : [], l = r ? hd() : cd();
  return new k({
    parent: s,
    state: E.create({
      doc: e,
      extensions: [
        td(),
        Vh(),
        k.lineWrapping,
        l,
        o,
        k.editable.of(!n),
        E.readOnly.of(n),
        k.updateListener.of((c) => {
          c.docChanged && t?.(c.state.doc.toString(), c);
        }),
        ...a
      ]
    })
  });
}
function Ia(s) {
  return id[s] ?? "rasa-token-unknown";
}
function rd(s, e) {
  const t = String(s), i = [];
  let n = 0;
  for (const r of Ha(e, t))
    r.start > n && i.push({ text: t.slice(n, r.start), className: "" }), i.push({
      text: t.slice(r.start, r.end),
      className: Ia(r.kind)
    }), n = r.end;
  return n < t.length && i.push({ text: t.slice(n), className: "" }), i;
}
function Jn(s) {
  const e = String(s), t = [];
  let i = 0;
  for (; i < e.length; ) {
    const n = e[i];
    if (/\s/.test(n)) {
      i += 1;
      continue;
    }
    if ("()[]{}".includes(n)) {
      t.push(Se(e, "delimiter", i, i + 1)), i += 1;
      continue;
    }
    if (n === ";") {
      const o = ld(e, i);
      t.push(Se(e, "comment", i, o)), i = o;
      continue;
    }
    if (n === '"') {
      const o = od(e, i);
      t.push(Se(e, "string", i, o)), i = o;
      continue;
    }
    if (n === "^") {
      t.push(Se(e, "reader-macro", i, i + 1));
      const o = i + 1;
      if (o < e.length && !/[\s()[\]{}]/.test(e[o])) {
        const l = Hi(e, o);
        t.push(Se(e, "metadata", o, l)), i = l;
      } else
        i += 1;
      continue;
    }
    if (n === "'" || n === "`" || n === "~" || n === "@") {
      t.push(Se(e, "reader-macro", i, i + 1)), i += 1;
      continue;
    }
    if (n === "\\") {
      const o = Hi(e, i);
      t.push(Se(e, "character", i, o)), i = o;
      continue;
    }
    const r = Hi(e, i), a = e.slice(i, r);
    t.push(Se(e, ad(a), i, r)), i = r;
  }
  return t;
}
function ad(s) {
  return s === "nil" ? "nil" : s === "true" || s === "false" ? "boolean" : s.startsWith(":") ? "keyword" : /^[+-]?(?:\d+|\d+\.\d+)$/.test(s) ? "number" : "symbol";
}
function Se(s, e, t, i) {
  return {
    kind: e,
    start: er(s, t),
    end: er(s, i)
  };
}
function Hi(s, e) {
  let t = e;
  for (; t < s.length && !/[\s()[\]{}]/.test(s[t]); )
    t += 1;
  return t;
}
function od(s, e) {
  let t = !1;
  for (let i = e + 1; i < s.length; i += 1) {
    const n = s[i];
    if (t)
      t = !1;
    else if (n === "\\")
      t = !0;
    else if (n === '"')
      return i + 1;
  }
  return s.length;
}
function ld(s, e) {
  const t = s.indexOf(`
`, e);
  return t < 0 ? s.length : t;
}
function gt(s, e) {
  const t = typeof e == "string" ? e : "", i = typeof e == "number" ? e : t.length, n = Ha(s, t || i).map(
    (r) => j.mark({ class: Ia(r.kind) }).range(
      r.start,
      r.end
    )
  );
  return j.set(n, !0);
}
function cd(s = []) {
  return [ye.define({
    create(t) {
      return gt(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(Vs))
          return gt(n.value, i.state.doc.toString());
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => k.decorations.from(t)
  })];
}
function hd() {
  return [ye.define({
    create(e) {
      return gt(
        Jn(e.doc.toString()),
        e.doc.toString()
      );
    },
    update(e, t) {
      for (const i of t.effects)
        if (i.is(Vs))
          return gt(i.value, t.state.doc.toString());
      return t.docChanged ? gt(
        Jn(t.state.doc.toString()),
        t.state.doc.toString()
      ) : e.map(t.changes);
    },
    provide: (e) => k.decorations.from(e)
  })];
}
function dd(s = []) {
  return [ye.define({
    create(t) {
      return Qn(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(Ss))
          return Qn(
            n.value,
            i.state.doc.toString()
          );
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => k.decorations.from(t)
  })];
}
function Qn(s, e) {
  const t = ud(s, e).map((i) => {
    const n = ["rasa-evidence-span"];
    return i.pinned && n.push("rasa-evidence-pinned"), j.mark({
      class: n.join(" "),
      attributes: {
        "data-evidence-group": i.group || ""
      }
    }).range(i.start, i.end);
  });
  return j.set(t, !0);
}
function Na(s, e, t) {
  const i = String(s), n = Cs(e), r = Math.max(n, Cs(t));
  return {
    start: Zn(i, n),
    end: Zn(i, r)
  };
}
function Zn(s, e) {
  const t = String(s), i = Cs(e);
  let n = 0, r = 0;
  for (const a of t) {
    const o = n + ja(a);
    if (o > i || (n = o, r += a.length, n === i))
      return r;
  }
  return t.length;
}
function er(s, e) {
  const t = String(s), i = ks(e, t.length);
  let n = 0;
  for (let r = 0; r < i; ) {
    const a = t.codePointAt(r), o = String.fromCodePoint(a);
    n += ja(o), r += o.length;
  }
  return n;
}
function Ha(s, e) {
  const t = typeof e == "number" ? e : String(e).length;
  return [...s].map((i) => {
    const n = typeof e == "number" ? {
      start: ks(i.start, t),
      end: ks(i.end, t)
    } : Na(e, i.start, i.end);
    return {
      kind: String(i.kind),
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function ud(s, e) {
  const t = String(e);
  return [...s].map((i) => {
    const n = Na(t, i.start, i.end);
    return {
      ...i,
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function ks(s, e) {
  const t = Number(s);
  return Number.isFinite(t) ? Math.max(0, Math.min(e, Math.trunc(t))) : 0;
}
function Cs(s) {
  const e = Number(s);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function ja(s) {
  const e = s.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const Wa = "wasm-component", fd = "browser-component-adapter-pending", pd = "Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.", gd = "rasa-component/", Fa = "rasa:runtime/host", md = "rasa:runtime/host@0.1.0", bd = "rasa:runtime/session@0.1.0", za = 1, $a = 2, Va = 4, qa = 8, Ka = 16, xd = za | $a | Va | qa | Ka, yd = 256;
class vd extends Error {
  constructor(e = pd) {
    super(e), this.name = "RasaBrowserRuntimeUnavailableError", this.runtimeKind = Wa, this.unavailableReason = fd;
  }
}
class tr extends Error {
  constructor(e) {
    super(e), this.name = "RasaBrowserHostCallError";
  }
}
class qs {
  static async load(e, t = {}) {
    const i = sr(e), n = t.readBytes || Td, r = await n(i, "Rasa runtime component"), a = sr(
      t.adapterBaseUrl || gd,
      i
    ), l = await import(
      /* @vite-ignore */
      new URL("ras-runtime.js", a).href
    ), c = Sd(t.host), h = /* @__PURE__ */ new Map(), d = await l.instantiate(async (u) => {
      const f = new URL(u, a), p = h.get(f.href);
      if (p) return p;
      const g = await n(f, `Rasa component core module ${u}`), m = await WebAssembly.compile(g);
      return h.set(f.href, m), m;
    }, c);
    return new qs({
      url: i.href,
      adapterBaseUrl: a.href,
      byteLength: r.byteLength,
      imports: c,
      session: d.session || d[bd]
    });
  }
  constructor(e = {}) {
    if (!e.session)
      throw new Error("Rasa Wasm component adapter did not export the session interface");
    this.url = e.url ?? null, this.adapterBaseUrl = e.adapterBaseUrl ?? null, this.byteLength = e.byteLength ?? null, this.available = !0, this.runtimeKind = Wa, this.unavailableReason = null, this.message = "Browser Wasm component runtime ready.", this.session = e.session, this.importObject = e.imports || {};
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
    return new vd(this.message);
  }
  evaluate(e, t = null) {
    return this.session.evalSource(Ae(e), $t(t));
  }
  inspect(e, t = null) {
    const i = this.session.inspectSource(Ae(e), $t(t));
    return ir(i, "inspection artifact");
  }
  syntaxTokens(e) {
    const t = this.session.syntaxTokens(Ae(e));
    return ir(t, "syntax token payload");
  }
  createSession() {
    return this.session.sessionNew();
  }
  freeSession(e) {
    e != null && this.session.sessionFree(e);
  }
  loadPackage(e, t) {
    return this.session.sessionLoadPackage(e, di(t));
  }
  async loadPackageAsync(e, t) {
    return await this.loadPackage(e, t);
  }
  evaluateSession(e, t, i = null) {
    return this.session.sessionEval(e, Ae(t), $t(i));
  }
  async evaluateSessionAsync(e, t, i = null) {
    return await this.evaluateSession(e, t, i);
  }
  evaluateReplSession(e, t, i = null) {
    if (typeof this.session.sessionReplEval != "function")
      throw new Error("Rasa Wasm component does not export sessionReplEval");
    return this.session.sessionReplEval(e, Ae(t), $t(i));
  }
  async evaluateReplSessionAsync(e, t, i = null) {
    return await this.evaluateReplSession(e, t, i);
  }
}
function Ae(s) {
  return new TextEncoder().encode(String(s ?? ""));
}
function wd(s) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(s);
}
function Sd(s = null) {
  const e = {
    [Fa]: kd(s),
    "wasi:cli/environment": { getEnvironment: () => [] },
    "wasi:cli/exit": {
      exit: () => {
        throw new Error("Rasa Wasm component requested wasi:cli/exit");
      }
    },
    "wasi:cli/stdin": { getStdin: () => new nr() },
    "wasi:cli/stdout": { getStdout: () => new ji() },
    "wasi:cli/stderr": { getStderr: () => new ji() },
    "wasi:cli/terminal-input": { TerminalInput: Ed },
    "wasi:cli/terminal-output": { TerminalOutput: Od },
    "wasi:cli/terminal-stdin": { getTerminalStdin: () => {
    } },
    "wasi:cli/terminal-stdout": { getTerminalStdout: () => {
    } },
    "wasi:cli/terminal-stderr": { getTerminalStderr: () => {
    } },
    "wasi:clocks/monotonic-clock": { subscribeDuration: () => new As() },
    "wasi:io/error": { Error: Rd },
    "wasi:io/poll": { Pollable: As, poll: () => [] },
    "wasi:io/streams": { InputStream: nr, OutputStream: ji },
    "wasi:random/insecure-seed": {
      getInsecureSeed: () => [1n, 2n]
    }
  };
  return Ad(e);
}
function kd(s) {
  return {
    call(e) {
      if (!s)
        throw new tr("no browser host provider is registered");
      if (typeof s.callBytes == "function")
        return Cd(s.callBytes(e));
      if (typeof s.call == "function") {
        const t = s.call(wd(e));
        return Ga(t) ? t.then((i) => Ae(i)) : Ae(t);
      }
      throw new tr("browser host provider does not implement call");
    }
  };
}
function Cd(s) {
  return Ga(s) ? s.then((e) => di(e)) : di(s);
}
function Ad(s) {
  return {
    ...s,
    [md]: s[Fa],
    "wasi:cli/environment@0.2.6": s["wasi:cli/environment"],
    "wasi:cli/exit@0.2.6": s["wasi:cli/exit"],
    "wasi:cli/stdin@0.2.6": s["wasi:cli/stdin"],
    "wasi:cli/stdout@0.2.6": s["wasi:cli/stdout"],
    "wasi:cli/stderr@0.2.6": s["wasi:cli/stderr"],
    "wasi:cli/terminal-input@0.2.6": s["wasi:cli/terminal-input"],
    "wasi:cli/terminal-output@0.2.6": s["wasi:cli/terminal-output"],
    "wasi:cli/terminal-stdin@0.2.6": s["wasi:cli/terminal-stdin"],
    "wasi:cli/terminal-stdout@0.2.6": s["wasi:cli/terminal-stdout"],
    "wasi:cli/terminal-stderr@0.2.6": s["wasi:cli/terminal-stderr"],
    "wasi:clocks/monotonic-clock@0.2.6": s["wasi:clocks/monotonic-clock"],
    "wasi:io/error@0.2.6": s["wasi:io/error"],
    "wasi:io/poll@0.2.6": s["wasi:io/poll"],
    "wasi:io/streams@0.2.6": s["wasi:io/streams"],
    "wasi:random/insecure-seed@0.3.0-rc-2026-03-15": s["wasi:random/insecure-seed"]
  };
}
function $t(s) {
  if (typeof s == "number") return s;
  let e = xd;
  return s?.phases && s.phases !== "all" && (e = (Array.isArray(s.phases) ? s.phases : [s.phases]).reduce((i, n) => i | Md(n), 0)), s?.traces && (e |= yd), e;
}
function Md(s) {
  switch (String(s)) {
    case "reader":
      return za;
    case "analysis":
    case "analyze":
      return $a;
    case "ir":
      return Va;
    case "facts":
      return qa;
    case "eval":
      return Ka;
    default:
      return 0;
  }
}
function ir(s, e) {
  try {
    return JSON.parse(s);
  } catch (t) {
    throw new Error(`failed to parse ${e}: ${t.message}`);
  }
}
function di(s) {
  return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : Ae(s);
}
async function Td(s, e) {
  const t = await fetch(s);
  if (!t.ok)
    throw new Error(`failed to load ${e}: ${t.status}`);
  return di(await t.arrayBuffer());
}
function sr(s, e = null) {
  return new URL(String(s), e || globalThis.location?.href || import.meta.url);
}
function Ga(s) {
  return s && typeof s.then == "function";
}
class Rd {
}
class As {
  block() {
  }
}
class nr {
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
    return new As();
  }
}
class Ed {
}
class Od {
}
const Ua = `(def orders
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
    source: Ua
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
class Dd {
  constructor(e = 4) {
    this.limit = e, this.artifacts = /* @__PURE__ */ new Map(), this.reports = /* @__PURE__ */ new Map();
  }
  inspect(e, t) {
    rr(e);
    const i = String(t), n = this.artifacts.get(i);
    if (n)
      return { artifact: n, cacheHit: !0 };
    const r = e.inspect(i, {
      includeEval: !0,
      includePlan: !0,
      detail: "standard"
    });
    return ar(this.artifacts, i, r, this.limit), { artifact: r, cacheHit: !1 };
  }
  runtimeReport(e, t, i) {
    rr(e);
    const n = String(t), r = this.reports.get(n);
    if (r)
      return r;
    const a = e.evaluate(n), o = {
      text: a,
      tokens: i(a)
    };
    return ar(this.reports, n, o, this.limit), o;
  }
}
function rr(s) {
  if (s?.available === !1)
    throw s.unavailableError?.() || new Error(s.message || "browser runtime unavailable");
}
function ar(s, e, t, i) {
  for (s.set(e, t); s.size > i; )
    s.delete(s.keys().next().value);
}
const Ld = `
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
  --result-accent: var(--rasa-teal);
  min-width: 0;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 72%, var(--rasa-border));
  border-radius: 7px;
  background: var(--rasa-panel-raised);
}

.result-card[data-status="ok"],
.result-card[data-status="ready"] {
  --result-accent: var(--rasa-success);
}

.result-card[data-status="failed"],
.result-card[data-status="error"] {
  --result-accent: var(--rasa-danger);
  border-color: color-mix(in srgb, var(--result-accent) 44%, var(--rasa-border));
}

.result-card[data-status="pending"],
.result-card[data-status="unavailable"],
.result-card[data-status="not-run"],
.result-card[data-status="not-requested"] {
  --result-accent: var(--rasa-gold);
}

.result-card[data-status="recovered"],
.result-card[data-status="unknown"] {
  --result-accent: var(--rasa-muted);
}

.result-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px;
  border-bottom: 1px solid var(--rasa-border);
}

.result-card-actions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.result-full-button {
  min-height: 24px;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--rasa-blue) 42%, var(--rasa-border));
  border-radius: 999px;
  background: color-mix(in srgb, var(--rasa-blue) 10%, transparent);
  color: var(--rasa-blue);
  font: inherit;
  font-size: 11px;
  font-weight: 820;
  cursor: pointer;
}

.result-full-button:hover,
.result-full-button:focus-visible {
  border-color: color-mix(in srgb, var(--rasa-blue) 70%, var(--rasa-border));
  background: color-mix(in srgb, var(--rasa-blue) 18%, transparent);
  outline: none;
}

.result-value {
  max-height: clamp(190px, 34vh, 360px);
  min-height: 130px;
  margin: 0;
  padding: 10px 12px 12px;
  overflow: auto;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  scrollbar-color: color-mix(in srgb, var(--rasa-muted) 46%, transparent) transparent;
}

.result-value.result-preview {
  max-height: none;
  min-height: 0;
  overflow: hidden;
}

.result-card .status-text {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border: 1px solid color-mix(in srgb, var(--result-accent) 42%, var(--rasa-border));
  border-radius: 999px;
  background: color-mix(in srgb, var(--result-accent) 8%, transparent);
  color: var(--result-accent);
  font-size: 11px;
  font-weight: 820;
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

.workbench-grid > * {
  position: relative;
  z-index: 1;
}

/* Rasa Systems Workbench direction */
.systems-shell {
  height: calc(100vh - 24px);
  grid-template-rows: auto minmax(0, 1fr);
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
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  padding: 10px;
  border-top: 1px solid var(--rasa-border);
  border-bottom: 0;
}

.systems-shell .result-card {
  display: grid;
  grid-template-rows: auto minmax(0, auto);
}

.systems-shell .result-value {
  max-height: none;
  min-height: 0;
  font-size: 14px;
  line-height: 1.5;
}

.systems-shell .metric-deck {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.systems-shell .metric-card {
  min-height: 0;
  padding: 7px 9px;
}

.value-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: clamp(14px, 3vw, 42px);
}

.value-overlay-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: color-mix(in srgb, #030812 78%, transparent);
  cursor: pointer;
}

.value-overlay-panel {
  position: relative;
  z-index: 1;
  width: min(1120px, 94vw);
  max-height: min(86vh, 920px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 70%, var(--rasa-border));
  border-radius: 14px;
  background: var(--rasa-panel);
  box-shadow: 0 28px 90px color-mix(in srgb, #000 46%, transparent);
  overflow: hidden;
}

.value-overlay-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--rasa-border);
  background: var(--rasa-panel-raised);
}

.value-overlay-head h2 {
  margin: 3px 0 0;
  color: var(--rasa-text);
  font-size: clamp(22px, 2.3vw, 32px);
  letter-spacing: 0;
}

.value-overlay-actions {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.value-overlay-close {
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid color-mix(in srgb, var(--rasa-line-strong) 70%, var(--rasa-border));
  border-radius: 999px;
  background: var(--rasa-panel-soft);
  color: var(--rasa-text);
  font: inherit;
  font-size: 13px;
  font-weight: 820;
  cursor: pointer;
}

.value-overlay-close:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--rasa-blue) 82%, transparent);
  outline-offset: 2px;
}

.value-overlay-code {
  margin: 0;
  padding: 20px;
  overflow: auto;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 15px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  scrollbar-color: color-mix(in srgb, var(--rasa-muted) 46%, transparent) transparent;
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
    height: min(760px, calc(100vh - 40px));
    max-height: 760px;
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

  .result-strip {
    grid-template-columns: 1fr;
  }
}
`;
class Bd extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.engine = null, this.editor = null, this.runCount = 0, this.currentRun = null, this.inspectionSession = new Dd(), this.selectedGroup = null, this.workbenchModel = null, this.syntaxTimer = null, this.themeListener = null, this.overlayKeydown = null, this.overlayReturnFocus = null;
  }
  connectedCallback() {
    this.syncTheme(Ja()), this.themeListener = (t) => this.syncTheme(t.detail?.theme || "dark"), window.addEventListener("rasa-theme-change", this.themeListener), this.render();
    const e = Si({});
    this.applyVisualSlots(e), this.mountEditor(), this.loadEngine(), this.refreshSyntax();
  }
  disconnectedCallback() {
    this.syntaxTimer && (clearTimeout(this.syntaxTimer), this.syntaxTimer = null), this.editor?.destroy(), this.editor = null, this.themeListener && (window.removeEventListener("rasa-theme-change", this.themeListener), this.themeListener = null), this.closeOverlay();
  }
  get runtimeUrl() {
    return this.getAttribute("runtime-url") || "./ras.wasm";
  }
  get demoMode() {
    return this.getAttribute("mode") === "article" ? "article" : "workbench";
  }
  render() {
    const e = ul({ examples: Wi });
    this.shadowRoot.innerHTML = `
      <style>${Za()}${so}${Ld}</style>
      <section class="shell systems-shell shell-${this.demoMode}" aria-label="Rasa systems workbench">
        <header class="systems-topbar">
          <div class="systems-brand">
            <img class="systems-logo" src="${Ya.logo}" alt="Rasa" />
            <div class="systems-title">
              <h1>${R(e.header.title)}</h1>
              <p>${R(e.header.subtitle)}</p>
            </div>
          </div>
          <nav class="systems-nav" aria-label="Rasa demo sections">
            ${e.header.nav.map(Kd).join("")}
          </nav>
          <div class="systems-status" aria-label="Runtime status">
            ${e.header.statusCells.map(Gd).join("")}
            <button class="theme-toggle systems-theme-toggle" type="button" data-role="theme-toggle" aria-label="Toggle color theme">Toggle Theme</button>
          </div>
        </header>

        <section class="workbench-grid" aria-label="Rasa evidence workbench">
          <section class="scenario-panel" aria-label="Programs with pressure">
            <div class="panel-head">
              <div>
                <span class="label">${R(e.scenarioPanel.label)}</span>
                <span class="panel-subtitle">${R(e.scenarioPanel.subtitle)}</span>
              </div>
              <span class="scenario-count">${e.scenarioPanel.count}</span>
            </div>
            <div class="scenario-list command-shelf" data-role="examples">
              ${Wi.map((t, i) => _d(t, i)).join("")}
            </div>
          </section>

          <section class="source-panel centerstage ${K.classes.visualSlot}" ${K.attrs.visualSlot}="source-editor" aria-label="Rasa centerstage">
            <div class="stage-head">
              <div>
                <span class="label">${R(e.sourceStage.label)}</span>
                <span class="panel-subtitle">${R(e.sourceStage.subtitle)}</span>
              </div>
              <div class="stage-proof-chips" aria-label="Inspectable phase products">
                ${e.sourceStage.chips.map(Ud).join("")}
              </div>
            </div>

            <div class="stage-body">
              <div class="editor-frame">
                <div class="editor-head">
                  <div>
                    <span class="label">${R(e.sourceStage.inputLabel)}</span>
                    <span class="panel-subtitle">${R(e.sourceStage.inputSubtitle)}</span>
                  </div>
                  <span class="run-hint">${R(e.sourceStage.runHint)}</span>
                </div>
                <div class="editor" data-role="editor"></div>
                <div class="editor-foot">
                  <span>${R(e.sourceStage.footnote)}</span>
                  <button type="button" class="run-button" data-role="run">Run</button>
                </div>
              </div>
            </div>
            <div class="result-strip" data-role="result-strip"></div>
          </section>

          <aside class="projection-panel ${K.classes.visualSlot}" ${K.attrs.visualSlot}="value-inspector" aria-label="Projection of truth">
            <div class="panel-head">
              <div>
                <span class="label">${R(e.projectionPanel.label)}</span>
                <span class="panel-subtitle" data-role="last-run">${R(e.projectionPanel.subtitle)}</span>
              </div>
              <span class="projection-rule" title="${R(e.projectionPanel.ruleHelp)}">${R(e.projectionPanel.rule)}</span>
            </div>
            <div class="projection-summary" data-role="projection-summary">
              <span data-role="evidence-count">${R(e.projectionPanel.emptySummary)}</span>
            </div>
            <div class="evidence-list ${K.classes.visualSlot}" ${K.attrs.visualSlot}="projection-legend" data-role="evidence-list" role="list"></div>
            <div class="focus-body ${K.classes.visualSlot}" ${K.attrs.visualSlot}="diagnostics" data-role="focus-body"></div>
          </aside>
        </section>

      </section>
    `, this.shadowRoot.querySelector('[data-role="run"]').addEventListener("click", () => this.run()), this.shadowRoot.querySelector('[data-role="theme-toggle"]')?.addEventListener("click", () => this.syncTheme(Qa())), this.shadowRoot.querySelector('[data-role="examples"]').addEventListener("click", (t) => this.applyExample(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("click", (t) => this.pinEvidence(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("keydown", (t) => this.pinEvidenceByKey(t)), this.updateThemeToggle();
  }
  syncTheme(e) {
    const t = e === "light" ? "light" : "dark";
    this.setAttribute("data-theme", t), this.updateThemeToggle();
  }
  updateThemeToggle() {
    const e = this.shadowRoot?.querySelector('[data-role="theme-toggle"]');
    if (e) {
      const t = this.getAttribute("data-theme") || "dark";
      e.textContent = Gs(t), e.setAttribute("aria-label", `Switch to ${Gs(t).toLowerCase()} theme`);
    }
  }
  mountEditor() {
    const e = this.shadowRoot.querySelector('[data-role="editor"]'), t = this.getAttribute("source") || Ua;
    this.editor = nd({
      parent: e,
      doc: t,
      onRun: () => this.run(),
      onChange: () => {
        this.scheduleSyntaxRefresh(), this.clearEvidenceState();
      },
      extensions: [dd()]
    }), this.editor.focus();
  }
  async loadEngine() {
    try {
      if (this.engine = await qs.load(this.runtimeUrl), this.engine.available === !1) {
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
          effects: Vs.of(e.tokens || [])
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
    const n = t.dataset.exampleAction;
    if (n === "load")
      for (const c of this.shadowRoot.querySelectorAll(".example-card"))
        c.dataset.active = String(c.dataset.exampleIndex === t.dataset.exampleIndex);
    const r = n === "append" ? Yd(i.source) : i.source, a = n === "append" ? this.editor.state.doc.length : 0, o = n === "append" ? this.editor.state.doc.length : this.editor.state.doc.length, l = a + r.length;
    this.editor.dispatch({
      changes: { from: a, to: o, insert: r },
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
  clearEvidenceState({ evidenceCount: e = "run to inspect evidence", lastRun: t = "not run yet" } = {}) {
    this.currentRun = null, this.selectedGroup = null, this.workbenchModel = null, this.editor?.dispatch({ effects: Ss.of([]) }), this.shadowRoot.querySelector('[data-role="result-strip"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-list"]').textContent = "", this.shadowRoot.querySelector('[data-role="focus-body"]').textContent = "";
    const i = Si({});
    this.applyVisualSlots(i), this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = e, this.shadowRoot.querySelector('[data-role="last-run"]').textContent = t;
  }
  renderWorkbench() {
    if (!this.currentRun)
      return;
    let e = this.selectedGroup, t = Ys(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    });
    (!e || !t.groups.some((a) => a.id === e)) && (e = tl(t.groups), this.selectedGroup = e || null, t = Ys(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    })), this.workbenchModel = t;
    const i = Si(t);
    this.applyVisualSlots(i), this.renderResult(t), this.renderEvidenceList(t), this.renderFocus(t);
    const n = this.selectedGroup ? t.sourceHighlights : [];
    this.editor?.dispatch({ effects: Ss.of(n) });
    const r = this.currentRun.cacheHit ? " / cached" : "";
    this.shadowRoot.querySelector('[data-role="last-run"]').textContent = `run ${this.runCount} / ${t.status}${r}`;
  }
  applyVisualSlots(e) {
    io(this.shadowRoot, e.slots || []);
  }
  renderResult(e) {
    const t = this.shadowRoot.querySelector('[data-role="result-strip"]'), i = nl(e);
    t.textContent = "", t.append(Pd(i.result, this), Nd(i.metrics));
  }
  renderEvidenceList(e) {
    const t = this.shadowRoot.querySelector('[data-role="evidence-list"]'), i = el(e, { selectedId: this.selectedGroup });
    if (t.textContent = "", this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = i.summary, i.empty) {
      const n = document.createElement("div");
      n.className = "empty-sections", n.textContent = i.emptyMessage, t.append(n);
      return;
    }
    for (const n of i.cards) {
      const r = document.createElement("article");
      r.className = "evidence-card", r.dataset.evidenceGroup = n.id, r.dataset.phase = n.phases.join(" "), r.dataset.domain = n.domains.join(" "), r.dataset.provenance = n.provenances.join(" "), r.dataset.projectionLayer = n.projectionLayer, r.setAttribute(K.attrs.projectionLayer, n.projectionLayer), r.dataset.selected = String(n.selected), r.tabIndex = 0, r.setAttribute("role", "listitem"), r.setAttribute("aria-current", n.selected ? "true" : "false"), r.innerHTML = `
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
      `, r.querySelector(".evidence-label").textContent = n.subject, r.querySelector(".evidence-id").textContent = n.subjectId, r.querySelector(".evidence-span").textContent = n.spanLabel, r.querySelector(".projection-layer-label").textContent = `${n.projectionLabel} · ${n.projectionDescription}`;
      const a = r.querySelector(".evidence-tags");
      for (const l of n.tags)
        a.append(_a(l));
      const o = r.querySelector(".evidence-entries");
      for (const l of n.entries) {
        const c = document.createElement("div");
        c.className = "evidence-entry", c.dataset.phase = l.phase, c.dataset.provenance = l.provenance, c.textContent = l.text, o.append(c);
      }
      t.append(r);
    }
  }
  renderFocus(e) {
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]'), i = ol(e);
    t.textContent = "";
    for (const n of i.sections)
      n.kind === "focus" ? t.append(jd(n.card, this)) : n.kind === "plan" ? t.append(Wd(n.card)) : n.kind === "diagnostics" ? t.append(Fd(n.panel)) : n.kind === "artifact" && t.append(Vd(n, this.currentRun.artifact, this));
  }
  showError(e, t) {
    this.clearEvidenceState({ evidenceCount: "browser inspection error", lastRun: e });
    const i = this.shadowRoot.querySelector('[data-role="focus-body"]'), n = document.createElement("article");
    n.className = "focus-card focus-card-error", n.innerHTML = `
      <div class="focus-card-head">
        <h2></h2>
        <span class="status-text">client</span>
      </div>
      <pre class="edn-block"></pre>
    `, n.querySelector("h2").textContent = e, n.querySelector("pre").textContent = t, i.append(n);
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
    const n = this.shadowRoot.querySelector(`[data-role="${e}"]`);
    n.textContent = t, n.dataset.state = i || "";
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
  openResultValue(e) {
    const t = mr(e.value ?? "nil");
    this.openOverlay({
      eyebrow: "Rasa value",
      title: e.label || "Result",
      meta: e.status || "",
      value: t,
      tokens: this.syntaxTokensFor(t)
    });
  }
  openOverlay({ eyebrow: e, title: t, meta: i, value: n, tokens: r }) {
    this.closeOverlay(), this.overlayReturnFocus = this.shadowRoot.activeElement || null;
    const a = document.createElement("div");
    a.className = "value-overlay", a.innerHTML = `
      <button type="button" class="value-overlay-backdrop" data-role="overlay-close" aria-label="Close value overlay"></button>
      <section class="value-overlay-panel" role="dialog" aria-modal="true" aria-label="Full Rasa value">
        <header class="value-overlay-head">
          <div>
            <span class="label"></span>
            <h2></h2>
          </div>
          <div class="value-overlay-actions">
            <span class="status-text"></span>
            <button type="button" class="value-overlay-close" data-role="overlay-close">Close</button>
          </div>
        </header>
        <pre class="value-overlay-code"></pre>
      </section>
    `, a.querySelector(".label").textContent = e, a.querySelector("h2").textContent = t, a.querySelector(".status-text").textContent = i, kt(a.querySelector(".value-overlay-code"), n, r || []), a.addEventListener("click", (o) => {
      o.target.closest('[data-role="overlay-close"]') && this.closeOverlay();
    }), this.overlayKeydown = (o) => {
      o.key === "Escape" && this.closeOverlay();
    }, window.addEventListener("keydown", this.overlayKeydown), this.shadowRoot.append(a), a.querySelector(".value-overlay-close")?.focus();
  }
  closeOverlay() {
    this.shadowRoot?.querySelector(".value-overlay")?.remove(), this.overlayKeydown && (window.removeEventListener("keydown", this.overlayKeydown), this.overlayKeydown = null), this.overlayReturnFocus?.isConnected && this.overlayReturnFocus.focus(), this.overlayReturnFocus = null;
  }
}
function Pd(s, e) {
  const t = document.createElement("article");
  t.className = "result-card", t.dataset.status = s.status || "unknown", t.innerHTML = `
    <div class="result-card-head">
      <span class="metric-label">Result</span>
      <div class="result-card-actions">
        <span class="status-text"></span>
        <button type="button" class="result-full-button">Open full value</button>
      </div>
    </div>
    <pre class="result-value result-preview"></pre>
  `, t.querySelector(".status-text").textContent = s.status || "";
  const i = mr(s.value ?? "nil"), n = Id(i), r = t.querySelector(".result-full-button");
  return r.hidden = !n.truncated, r.addEventListener("click", () => e.openResultValue(s)), kt(
    t.querySelector(".result-value"),
    n.text,
    e.syntaxTokensFor(n.text)
  ), t;
}
function Id(s) {
  const e = String(s).split(`
`), t = 10, i = 720;
  let n = e.slice(0, t).join(`
`), r = e.length > t;
  return n.length > i && (n = `${n.slice(0, i).trimEnd()} ...`, r = !0), r && !n.endsWith("...") && (n = `${n}
...`), { text: n, truncated: r };
}
function Nd(s = []) {
  const e = document.createElement("div");
  e.className = "metric-deck";
  for (const t of s)
    e.append(Hd(t.label, t.value, t.meta));
  return e;
}
function Hd(s, e, t) {
  const i = document.createElement("div");
  return i.className = "metric-card", i.innerHTML = `
    <span class="metric-label"></span>
    <strong class="metric-value"></strong>
    <span class="metric-meta"></span>
  `, i.querySelector(".metric-label").textContent = s, i.querySelector(".metric-value").textContent = String(e ?? "nil"), i.querySelector(".metric-meta").textContent = t || "", i;
}
function _a(s) {
  const e = document.createElement("span");
  return e.className = "semantic-tag", e.textContent = s.startsWith(":") ? s : `:${s}`, e;
}
function jd(s, e) {
  const t = document.createElement("article");
  t.className = "focus-card", t.dataset.phase = s.phase, t.dataset.domain = s.domain, t.dataset.provenance = s.provenance, t.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="focus-tags"></div>
    <pre class="edn-block"></pre>
  `, t.querySelector("h2").textContent = s.title, t.querySelector(".status-text").textContent = s.status;
  const i = t.querySelector(".focus-tags");
  for (const n of s.tags)
    i.append(_a(n));
  return kt(
    t.querySelector(".edn-block"),
    s.rendered,
    e.syntaxTokensFor(s.rendered)
  ), t;
}
function Wd(s) {
  const e = document.createElement("article");
  e.className = "focus-card plan-card", e.dataset.phase = s.phase, e.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="plan-grid"></div>
  `, e.querySelector("h2").textContent = s.title, e.querySelector(".status-text").textContent = s.status;
  const t = e.querySelector(".plan-grid");
  for (const i of s.rows)
    t.append(qd(i.label, i.value, i.kind));
  return e;
}
function Fd(s) {
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
  `, e.querySelector("h2").textContent = s.title, e.querySelector(".diagnostics-note").textContent = s.note, e.querySelector(".status-text").textContent = s.status;
  const t = e.querySelector(".diagnostic-list");
  for (const i of s.cards) {
    const n = document.createElement("div");
    n.className = "diagnostic-card", n.dataset.phase = i.phase, n.dataset.status = i.status, n.innerHTML = `
      <div class="diagnostic-head">
        <strong></strong>
        <span></span>
      </div>
      <p></p>
      <dl class="diagnostic-detail"></dl>
      <div class="source-excerpt" data-field="source-excerpt"></div>
    `, n.querySelector("strong").textContent = i.title, n.querySelector("span").textContent = i.label, n.querySelector("p").textContent = i.message;
    const r = n.querySelector(".diagnostic-detail");
    for (const o of i.details) {
      const l = document.createElement("div"), c = document.createElement("dt"), h = document.createElement("dd");
      h.dataset.field = o.field, c.textContent = o.label, h.textContent = o.value, l.append(c, h), r.append(l);
    }
    const a = n.querySelector('[data-field="source-excerpt"]');
    if (i.sourceExcerpt?.lines?.length)
      a.replaceChildren(zd(i.sourceExcerpt));
    else if (i.excerpt) {
      const o = document.createElement("code");
      o.textContent = i.excerpt, a.replaceChildren(o);
    } else
      a.remove();
    t.append(n);
  }
  return e;
}
function zd(s) {
  const e = document.createElement("div");
  e.className = "source-excerpt-frame";
  for (const t of s.lines || []) {
    const i = document.createElement("div");
    i.className = "source-excerpt-line";
    const n = document.createElement("span");
    n.className = "source-excerpt-gutter", n.textContent = String(t.line ?? "");
    const r = document.createElement("code");
    r.className = "source-excerpt-code", $d(r, t, s.markers || []), i.append(n, r), e.append(i);
  }
  return e;
}
function $d(s, e, t) {
  for (const i of dl(e, t))
    if (i.marker) {
      const n = document.createElement("span");
      n.className = "source-marker", i.zero && n.classList.add("source-marker-zero"), n.dataset.kind = i.marker.kind, n.dataset.severity = i.marker.severity, n.title = i.marker.label, n.textContent = i.text, s.append(n);
    } else i.text && s.append(document.createTextNode(i.text));
}
function Vd(s, e, t) {
  const i = document.createElement("details");
  return i.className = "debug-artifact", i.innerHTML = `
    <summary></summary>
    <div class="debug-artifact-body"></div>
  `, i.querySelector("summary").textContent = s.title, i.addEventListener(
    "toggle",
    () => {
      if (!i.open || i.dataset.rendered === "true")
        return;
      const n = i.querySelector(".debug-artifact-body"), r = document.createElement("pre");
      r.className = "edn-block";
      const a = document.createElement("div");
      a.className = "runtime-summary", a.textContent = "Runtime report";
      const o = document.createElement("pre");
      o.className = "edn-block runtime-report";
      let l = null;
      const c = No(e);
      try {
        l = t.runtimeReport();
      } catch (h) {
        l = { text: `runtime report unavailable: ${h.message}`, tokens: [] };
      }
      kt(r, c, t.syntaxTokensFor(c)), kt(o, l?.text || "nil", l?.tokens || []), n.append(r, a, o), i.dataset.rendered = "true";
    },
    { once: !0 }
  ), i;
}
function qd(s, e, t = "") {
  const i = document.createElement("div");
  return i.className = "plan-row", i.dataset.kind = t, i.innerHTML = `
    <span></span>
    <strong></strong>
  `, i.querySelector("span").textContent = s, i.querySelector("strong").textContent = e, i;
}
function Kd(s) {
  return `<a class="${s.active ? "active" : ""}" href="${R(s.href)}">${R(s.label)}</a>`;
}
function Gd(s) {
  const e = s.state ? ` data-state="${R(s.state)}"` : "";
  return `
    <span class="status-cell">
      <span>${R(s.label)}</span>
      <strong data-role="${R(s.role)}"${e}>${R(s.value)}</strong>
    </span>
  `;
}
function Ud(s) {
  return `<span data-phase-id="${R(s.phaseId)}" data-slot-id="${R(s.slotId)}">${R(s.label)}</span>`;
}
function _d(s, e) {
  const t = R(s.source.split(`
`).find(Boolean) || s.source), i = (s.phases || []).slice(0, 5).map((n) => `<span>${R(n)}</span>`).join("");
  return `
    <article class="example-card" data-example-index="${e}" data-active="${e === 0 ? "true" : "false"}">
      <div>
        <strong>${R(s.label)}</strong>
        <span class="example-story">${R(s.story || t)}</span>
        <p>${R(s.description || t)}</p>
        <div class="example-phase-tags">${i}</div>
      </div>
      <div class="example-actions">
        <button type="button" class="example-button" data-example-index="${e}" data-example-action="load">Load</button>
        <button type="button" class="example-button example-button-secondary" data-example-index="${e}" data-example-action="append">Append</button>
      </div>
    </article>
  `;
}
function kt(s, e, t) {
  s.textContent = "";
  for (const i of rd(e, t)) {
    if (!i.className) {
      s.append(document.createTextNode(i.text));
      continue;
    }
    const n = document.createElement("span");
    n.className = i.className, n.textContent = i.text, s.append(n);
  }
}
function Yd(s) {
  return `

${s}`;
}
function R(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
customElements.define("rasa-browser-inspection-workbench", Bd);
