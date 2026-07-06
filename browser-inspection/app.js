const ao = Object.freeze({
  logo: "./assets/brand/logo.svg",
  mark: "./assets/brand/mark.svg"
}), fr = "rasa.theme", qt = Object.freeze({
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
qt.dark;
function oo() {
  return `
    :host {
      ${Si(qt.dark)}
      --phase-reader: var(--rasa-gold);
      --phase-analysis: var(--rasa-blue);
      --phase-ir: var(--rasa-violet);
      --phase-facts: var(--rasa-green);
      --phase-plan: var(--rasa-teal);
      --phase-eval: var(--rasa-red);
      font-family:
        Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    }

    :host([data-theme="light"]) {
      ${Si(qt.light)}
    }

    :host([data-theme="dark"]) {
      ${Si(qt.dark)}
    }
  `;
}
function lo(n = document.documentElement) {
  const e = localStorage.getItem(fr), t = e === "light" || e === "dark" ? e : window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
  return pr(t, n), t;
}
function pr(n, e = document.documentElement) {
  const t = n === "light" ? "light" : "dark";
  return e.dataset.rasaTheme = t, e.setAttribute("data-theme", t), localStorage.setItem(fr, t), window.dispatchEvent(new CustomEvent("rasa-theme-change", { detail: { theme: t } })), t;
}
function co(n = document.documentElement) {
  return pr(n.dataset.rasaTheme === "light" ? "dark" : "light", n);
}
function Zn(n) {
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
function ho() {
  return `
    ${oo()}

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
function uo(n, e = {}) {
  const t = typeof n == "string" ? { id: n } : n || {};
  return {
    [K.attrs.visualSlot]: t.id || "",
    [K.attrs.slotStatus]: t.status || e.status || "",
    [K.attrs.slotCount]: String(t.count ?? e.count ?? 0),
    [K.attrs.slotMeta]: t.meta || e.meta || ""
  };
}
function fo(n = [], e, t = {}) {
  return n.find((i) => i.id === e) || { ...t, id: e };
}
function po(n, e = []) {
  if (!n?.querySelectorAll)
    return 0;
  let t = 0;
  for (const i of n.querySelectorAll(`[${K.attrs.visualSlot}]`)) {
    const s = i.getAttribute(K.attrs.visualSlot), r = uo(fo(e, s));
    for (const [a, o] of Object.entries(r))
      i.setAttribute(a, o);
    t += 1;
  }
  return t;
}
const go = `
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
`, On = Object.freeze([
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
]), es = Object.freeze(On.map((n) => n.id)), mo = Object.freeze([
  ke("primary-tree", "Primary tree", "Reader, expanded syntax, or IR owns the program tree."),
  ke("ann-groups", "AnnGroups", "Grouped annotations keyed by stable subjects and spans."),
  ke("checks", "Type/check evidence", "Signals from shared check and fact boundaries."),
  ke("capability", "Capability admission", "Host authority requested and admitted before execution."),
  ke("plan", "Plan decisions", "Representation candidates, fallbacks, and lane evidence."),
  ke("trace", "Runtime trace", "Observed host/session events returned by the runtime product."),
  ke("diagnostics", "Diagnostics", "Structured blockers and conservative evidence.")
]);
function bo(n) {
  return On.find((e) => e.id === n) || Z(n, gr(n), "Phase artifact", n, "unknown");
}
function ts(n) {
  const e = es.indexOf(n);
  return e === -1 ? es.length : e;
}
function xo() {
  return On.map((n) => ({
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
function yo(n = {}) {
  const e = bo(n.id);
  return {
    ...e,
    ...n,
    label: n.label || e.label,
    tone: e.tone,
    role: e.role,
    description: e.description
  };
}
function vo(n = {}, e = [], t = null) {
  const i = /* @__PURE__ */ new Set([
    ...Object.keys(n.phases || {}),
    ...(e || []).flatMap((s) => s.phases || [])
  ]);
  return n.failedPhase && i.add(n.failedPhase), n.plan && i.add("plan"), n.eval && i.add("eval"), [...i].sort((s, r) => ts(s) - ts(r) || ko(s, r)).map((s) => {
    const r = n.phases?.[s] || {}, a = e.filter((o) => (o.phases || []).includes(s)).length;
    return yo({
      id: s,
      status: So(n, s, r),
      groups: a,
      diagnostics: wo(n, s, r),
      active: !!(t && (t.phases || []).includes(s))
    });
  });
}
function Dn(n = {}) {
  const e = new Set(n.phases || []), t = new Set((n.keys || []).map((i) => i.replace(/^:/, "")));
  return e.has("plan") ? "plan" : e.has("checks") || t.has("diagnostic") || t.has("type") ? "checks" : e.has("facts") || t.has("candidate") || t.has("scalar-type") ? "ann-groups" : e.has("eval") ? "trace" : e.has("reader") || e.has("expand") || e.has("analyzer") || e.has("ir") ? "primary-tree" : "ann-groups";
}
function Ue(n) {
  return mo.find((e) => e.id === n) || ke(n, gr(n), "Projection artifact");
}
function Z(n, e, t, i, s) {
  return Object.freeze({ id: n, label: e, description: t, tone: i, role: s });
}
function ke(n, e, t) {
  return Object.freeze({ id: n, label: e, description: t });
}
function wo(n, e, t = {}) {
  const i = Array.isArray(t.diagnostics) ? t.diagnostics.length : 0, s = Array.isArray(n.diagnosticViews) ? n.diagnosticViews.filter((o) => o.phase === e).length : 0, r = e === "plan" && Array.isArray(n.plan?.diagnostics) ? n.plan.diagnostics.length : 0, a = e === "eval" && Array.isArray(n.eval?.diagnostics) ? n.eval.diagnostics.length : 0;
  return i + s + r + a;
}
function So(n, e, t = {}) {
  return n.failedPhase === e ? "failed" : t.status ? t.status : e === "plan" ? n.plan?.status || n.plan?.availability || "available" : e === "eval" ? n.eval?.status || n.eval?.availability || "available" : Object.prototype.hasOwnProperty.call(n.phases || {}, e) ? "available" : "waiting";
}
function ko(n, e) {
  return String(n || "").localeCompare(String(e || ""));
}
function gr(n) {
  return String(n || "unknown").split(/[-_]/).filter(Boolean).map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" ") || "Unknown";
}
function mr(n, e, t) {
  const i = String(n), s = qi(e), r = Math.max(s, qi(t));
  return {
    start: Vi(i, s),
    end: Vi(i, r)
  };
}
function Vi(n, e) {
  const t = String(n), i = qi(e);
  let s = 0, r = 0;
  for (const a of t) {
    const o = s + Co(a);
    if (o > i || (s = o, r += a.length, s === i))
      return r;
  }
  return t.length;
}
function qi(n) {
  const e = Number(n);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function Co(n) {
  const e = n.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
function is(n, e, t = {}) {
  const i = t.selectedGroup || null, s = Ro(n), r = i && s.find((a) => a.id === i) || null;
  return {
    status: Ao(n),
    result: Mo(n),
    groups: s,
    activeGroup: r,
    phases: vo(n, s, r),
    plan: To(n),
    diagnostics: Oo(n, e),
    projections: Ho(s, n),
    sourceHighlights: Eo(n, { selectedGroup: i })
  };
}
function Ao(n = {}) {
  const e = n.failedPhase;
  return n.status === "ok" ? "ok" : e ? `failed in :${e}` : n.status;
}
function Mo(n = {}) {
  const e = n.eval || {};
  return {
    status: e.status || n.status || "unknown",
    value: e.value ?? "nil",
    observedType: e.observedType || "unknown",
    provenance: e.provenance || "runtime-observed"
  };
}
function Ro(n = {}) {
  const e = n.evidence?.groups || [], t = Io(e.filter(Po), n.source).slice(0, 8).map(jo).map(ls);
  return t.length ? t : Fo(n).map(ls);
}
function Eo(n = {}, e = {}) {
  const t = new Set([e.selectedGroup].filter(Boolean));
  return t.size ? (n.evidence?.indexes?.spans || []).filter((i) => (i.groups || []).some((s) => t.has(s))).map((i) => ({
    group: (i.groups || []).find((s) => t.has(s)) || "",
    start: i.start,
    end: i.end,
    pinned: !!(e.selectedGroup && i.groups.includes(e.selectedGroup))
  })) : [];
}
function To(n = {}) {
  const e = n.plan || {};
  return {
    status: e.status || e.availability || "unavailable",
    lanes: e.lanes || [],
    candidates: e.candidates || []
  };
}
function Oo(n = {}, e = "") {
  if (Array.isArray(n.diagnosticViews) && n.diagnosticViews.length)
    return rs(
      ss(n.diagnosticViews.map((r) => Do(r)))
    ).slice(0, 3);
  const t = Object.entries(n.phases || {}).flatMap(
    ([r, a]) => (a.diagnostics || []).map((o) => ki(r, o, e))
  ), i = (n.plan?.diagnostics || []).map(
    (r) => ki("plan", r, e)
  ), s = (n.eval?.diagnostics || []).map(
    (r) => ki("eval", r, e)
  );
  return rs(
    ss([...t, ...i, ...s])
  ).slice(0, 3);
}
function Do(n) {
  const e = n.phase || "compiler", t = n.kind || "diagnostic", i = !!n.recoverable;
  return {
    phase: e,
    kind: t,
    title: br(e, t, i),
    status: xr(e, i),
    recoverable: i,
    message: n.message || "",
    span: n.span || null,
    sourceExcerpt: n.sourceExcerpt || null,
    excerpt: Lo(n.sourceExcerpt) || "",
    location: vr(n.span || null),
    expected: n.expected || "",
    actual: n.actual || "",
    subject: "",
    provenance: n.code || `:${e} / :${t}`,
    impact: n.impact || yr(e, i)
  };
}
function ki(n, e, t) {
  const i = e.span || null, s = e.evidence || {}, r = e.kind || "diagnostic", a = !!e.recoverable;
  return {
    phase: n,
    kind: r,
    title: br(n, r, a),
    status: xr(n, a),
    recoverable: a,
    message: e.message || "",
    span: i,
    sourceExcerpt: null,
    excerpt: i ? Go(t, i) : "",
    location: vr(i),
    expected: s.expected || "",
    actual: s.actual || "",
    subject: s.subject || "",
    provenance: `:${n} / :${r}`,
    impact: yr(n, a)
  };
}
function br(n, e, t) {
  return t ? {
    "fact-uncertainty": "Evidence, not a checked guarantee",
    "memory-profile-constraint": "Representation constraint rejected",
    "insufficient-backend-evidence": "Backend plan kept conservative"
  }[e] || `${ns(n)} note` : n === "eval" ? "Evaluation blocker" : `${ns(n)} blocker`;
}
function xr(n, e) {
  return e ? n === "plan" ? "conservative plan" : "recoverable" : n === "eval" ? "blocks evaluation" : "blocks phase";
}
function yr(n, e) {
  return e && n === "plan" ? "Planning continues, but later views should treat this as evidence rather than a committed optimization." : e ? "Later phases can continue, but claims should stay conservative." : n === "eval" ? "Evaluation is blocked until this diagnostic is resolved." : `:${n} is blocked until this diagnostic is resolved.`;
}
function vr(n) {
  return n ? `Source bytes ${n.start}..${n.end}.` : "Whole artifact; no single source span was reported.";
}
function Lo(n) {
  const e = n?.lines || [];
  return e.length ? e.map((t) => t.text || "").join(`
`) : "";
}
function ns(n) {
  return String(n || "compiler").split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function ss(n) {
  const e = /* @__PURE__ */ new Set();
  return n.filter((t) => {
    const i = Bo(t);
    return e.has(i) ? !1 : (e.add(i), !0);
  });
}
function rs(n) {
  return [...n].sort(
    (e, t) => Number(e.recoverable) - Number(t.recoverable)
  );
}
function Bo(n) {
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
function Po(n = {}) {
  return wr(n) || (n.phases || []).includes("plan") || (n.provenances || []).includes("hinted") || (n.keys || []).some(
    (e) => ["scalar-type", "collection-kind", "known-keys", "host-free"].includes(e)
  );
}
function wr(n = {}) {
  return (n.keys || []).includes("diagnostic");
}
function Io(n, e = {}) {
  const t = Number(e.bytes);
  return [...n].sort(
    (i, s) => No(i, s, t) || as(i) - as(s) || Wo(i.subject, s.subject)
  );
}
function as(n = {}) {
  return wr(n) ? 0 : (n.provenances || []).includes("hinted") ? 1 : (n.phases || []).includes("plan") ? 2 : (n.keys || []).some((e) => ["scalar-type", "collection-kind"].includes(e)) ? 3 : 4;
}
function No(n, e, t) {
  const i = os(n, t), s = os(e, t);
  return i.kind - s.kind || i.start - s.start || i.end - s.end;
}
function os(n = {}, e) {
  const t = n.span || null;
  if (!t)
    return { kind: 2, start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
  const i = Number.isFinite(Number(t.start)) ? Number(t.start) : Number.MAX_SAFE_INTEGER, s = Number.isFinite(Number(t.end)) ? Number(t.end) : Number.MAX_SAFE_INTEGER;
  return { kind: i === 0 && Number.isFinite(e) && s >= e ? 1 : 0, start: i, end: s };
}
function Wo(n, e) {
  return String(n || "").localeCompare(String(e || ""));
}
function jo(n) {
  const e = qo(n);
  return {
    ...n,
    subjectId: n.subject || "",
    displaySubject: e || n.subject || ""
  };
}
function ls(n) {
  const e = Ue(Dn(n));
  return {
    ...n,
    projectionLayer: e.id,
    projectionLabel: e.label,
    projectionDescription: e.description
  };
}
function Ho(n = [], e = {}) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const s = Ue(i.projectionLayer || Dn(i)), r = t.get(s.id) || { ...s, count: 0 };
    r.count += 1, t.set(s.id, r);
  }
  if (e.plan) {
    const i = Ue("plan"), s = t.get(i.id) || { ...i, count: 0 };
    s.count += Array.isArray(e.plan.candidates) ? e.plan.candidates.length : 1, t.set(i.id, s);
  }
  if (e.eval) {
    const i = Ue("trace"), s = t.get(i.id) || { ...i, count: 0 };
    s.count += 1, t.set(i.id, s);
  }
  return [...t.values()];
}
function Fo(n = {}) {
  return [
    ...zo(n.plan || {}),
    ...$o(n),
    ...Vo(n)
  ].slice(0, 8);
}
function zo(n = {}) {
  const e = [], t = Array.isArray(n.candidates) ? n.candidates : [], i = Array.isArray(n.lanes) ? n.lanes : [];
  (t.length || i.length || n.status || n.availability) && e.push({
    id: "projection:plan:summary",
    subject: "plan",
    subjectId: "",
    displaySubject: "Plan decisions",
    phases: ["plan"],
    domains: ["representation"],
    provenances: ["compiler-plan"],
    span: null,
    keys: [":candidates", ":lanes", ":status"],
    rendered: Qt({
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
      provenances: ["compiler-plan"],
      span: r.span || null,
      keys: Object.keys(r).slice(0, 5),
      rendered: Qt(r),
      entries: Object.entries(r).slice(0, 4).map(([a, o]) => fe(a, o, "plan"))
    });
  return e;
}
function $o(n = {}) {
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
    rendered: Qt(t),
    entries: [
      fe("message", t.message || "", t.phase || "checks"),
      fe("recoverable", !!t.recoverable, t.phase || "checks")
    ]
  }));
}
function Vo(n = {}) {
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
      rendered: Qt({
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
    value: Ki(e),
    phase: t,
    provenance: t
  };
}
function Ki(n) {
  return n == null ? "nil" : typeof n == "string" ? n : typeof n == "number" || typeof n == "boolean" ? String(n) : Array.isArray(n) ? `[${n.length} item${n.length === 1 ? "" : "s"}]` : typeof n == "object" ? `{${Object.keys(n).length} keys}` : String(n);
}
function Qt(n) {
  return !n || typeof n != "object" ? Ki(n) : `{
${Object.entries(n).map(([e, t]) => `  :${e} ${Ki(t)}`).join(`
`)}
}`;
}
function qo(n = {}) {
  const e = n.entries || [], t = (o) => Ko(e.find((l) => l.key === o)?.value), i = t("callee-symbol");
  if (i)
    return `call ${i}`;
  const s = t("collection-kind");
  if (s)
    return `${s} literal`;
  const r = t("literal-kind"), a = t("scalar-type");
  return r && a ? `${a} ${r}` : r ? `${r} literal` : a ? `${a} hint` : t("host-free") ? "source plan" : "";
}
function Ko(n) {
  const e = String(n || "").trim();
  return e ? e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : e.startsWith(":") ? e.slice(1) : e : "";
}
function Go(n, e, t = 28) {
  const i = String(n), { start: s, end: r } = mr(i, e.start, e.end), a = Math.max(0, s - t), o = Math.min(i.length, r + t), l = a > 0 ? "..." : "", c = o < i.length ? "..." : "";
  return `${l}${i.slice(a, o)}${c}`;
}
function Uo(n) {
  return Zt(n, 0);
}
function Sr(n) {
  const e = String(n ?? "nil");
  return !Qo(e) || e.includes(`
`) ? e : Zo(e);
}
function Zt(n, e) {
  return n == null ? "nil" : Array.isArray(n) ? Yo(n, e) : typeof n == "object" ? _o(n, e) : typeof n == "string" ? JSON.stringify(n) : typeof n == "boolean" ? n ? "true" : "false" : String(n);
}
function _o(n, e) {
  const t = Object.entries(n);
  if (!t.length)
    return "{}";
  const i = Re(e + 1), s = Re(e);
  return `{
${t.map(
    ([a, o]) => `${i}:${Jo(a)} ${Zt(o, e + 1)}`
  ).join(`
`)}
${s}}`;
}
function Yo(n, e) {
  if (!n.length)
    return "[]";
  if (n.every(Xo))
    return `[${n.map((s) => Zt(s, e)).join(" ")}]`;
  const t = Re(e + 1), i = Re(e);
  return `[
${n.map((s) => `${t}${Zt(s, e + 1)}`).join(`
`)}
${i}]`;
}
function Xo(n) {
  return n === null || typeof n != "object";
}
function Jo(n) {
  return String(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function Re(n) {
  return "  ".repeat(n);
}
function Qo(n) {
  const e = n.trimStart();
  return e.startsWith("{") || e.startsWith("[") || e.startsWith("(");
}
function Zo(n) {
  const e = el(n.trim()), t = [];
  let i = "";
  for (const s of e) {
    const r = t[t.length - 1];
    if (s.type === "open") {
      i = il(i, s.value, t.length), t.push({ delimiter: s.value, expectingMapKey: s.value === "{" }), i += `
` + Re(t.length);
      continue;
    }
    if (s.type === "close") {
      t.pop(), i = i.trimEnd(), i += `
` + Re(t.length) + s.value, cs(t[t.length - 1]);
      continue;
    }
    if (r?.delimiter === "{" && r.expectingMapKey) {
      i && !i.endsWith(`
`) && (i = i.trimEnd(), i += `
` + Re(t.length)), i += s.value, r.expectingMapKey = !1;
      continue;
    }
    i += i && !i.endsWith(`
`) ? " " : "", i += s.value, cs(r);
  }
  return i.replace(/\n{3,}/g, `

`);
}
function el(n) {
  const e = [];
  let t = 0;
  for (; t < n.length; ) {
    const i = n[t];
    if (/\s/.test(i)) {
      t += 1;
      continue;
    }
    if (i === "#" && n[t + 1] === "{") {
      e.push({ type: "open", value: "#{" }), t += 2;
      continue;
    }
    if (Gi(i)) {
      e.push({ type: "open", value: i }), t += 1;
      continue;
    }
    if (Ui(i)) {
      e.push({ type: "close", value: i }), t += 1;
      continue;
    }
    if (i === '"') {
      const { value: r, nextIndex: a } = tl(n, t);
      e.push({ type: "string", value: r }), t = a;
      continue;
    }
    const s = t;
    for (; t < n.length && !/\s/.test(n[t]) && !Gi(n[t]) && !Ui(n[t]); )
      t += 1;
    e.push({ type: "token", value: n.slice(s, t) });
  }
  return e;
}
function tl(n, e) {
  let t = e + 1, i = !1;
  for (; t < n.length; ) {
    const s = n[t];
    if (i)
      i = !1;
    else if (s === "\\")
      i = !0;
    else if (s === '"') {
      t += 1;
      break;
    }
    t += 1;
  }
  return { value: n.slice(e, t), nextIndex: t };
}
function il(n, e, t) {
  if (!n)
    return e;
  if (n.endsWith(`
`))
    return `${n}${e}`;
  const i = nl(n);
  return Gi(i) ? `${n}${e}` : Ui(i) ? `${n}
${Re(t)}${e}` : `${n} ${e}`;
}
function cs(n) {
  n?.delimiter === "{" && (n.expectingMapKey = !0);
}
function Gi(n) {
  return n === "{" || n === "[" || n === "(";
}
function Ui(n) {
  return n === "}" || n === "]" || n === ")";
}
function nl(n) {
  for (let e = n.length - 1; e >= 0; e -= 1)
    if (!/\s/.test(n[e]))
      return n[e];
  return "";
}
const sl = Object.freeze([
  se("source-editor", "Source editor", "CodeMirror", "Rasa forms and source spans", 10),
  se("phase-route", "Compiler route", "PhaseRoute", "Reader through runtime phase status", 20),
  se("phase-widget-map", "Phase widget map", "PhaseWidgetMap", "Phase artifacts mapped to visual widgets", 30),
  se("projection-legend", "Projection legend", "ProjectionLegend", "Grouped phase-neutral projection layers", 40),
  se("boundary-route", "Host boundary", "BoundaryRoute", "Admitted capability request and returned value", 50),
  se("graph-stage", "Graph stage", "Stage", "Model projection frame and run context", 60),
  se("graph-canvas", "Graph canvas", "ReactFlow", "Structured graph records returned by Rasa", 70),
  se("value-inspector", "Value inspector", "DataView", "Foldable Rasa data and returned values", 80),
  se("transcript", "Session transcript", "Transcript", "Append-only session input and returned data", 90),
  se("diagnostics", "Diagnostics", "DiagnosticCards", "Structured blockers and conservative evidence", 100)
]), kr = Object.freeze([
  Dt(
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
  Dt(
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
  Dt(
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
  Dt(
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
function rl(n = "") {
  return kr.map((e) => ({
    ...e,
    active: e.id === n,
    href: e.id === n ? "./" : e.href
  }));
}
function al({ activeId: n = "", ids: e = null, includeActive: t = !1 } = {}) {
  const i = e ? new Set(e) : null;
  return kr.filter((s) => !(i && !i.has(s.id) || !t && s.id === n)).map((s) => ({
    id: s.id,
    artifact: s.artifact,
    description: s.description,
    label: s.label,
    phaseIds: [...s.phaseIds],
    slotId: s.slotId,
    tone: s.tone,
    title: s.title
  }));
}
function ol({
  phases: n = [],
  activePhaseIds: e = [],
  metaById: t = {},
  statusById: i = {}
} = {}) {
  const s = new Set(e), r = new Map(n.map((a) => [a.id, a]));
  return xo().map((a) => {
    const o = r.get(a.id) || {}, l = o.status || i[a.id] || a.status;
    return {
      ...a,
      ...o,
      status: l,
      active: !!(o.active || s.has(a.id)),
      meta: o.meta || t[a.id] || Cl(l, o)
    };
  });
}
function ll(n = {}) {
  return sl.map((e) => {
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
function cl(n = []) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const i = Ue(t.id || t.projectionLayer || t.layer), s = e.get(i.id) || { ...i, count: 0 };
    s.count += Number(t.count || 1), e.set(i.id, s);
  }
  return [...e.values()];
}
function hl(n = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const s = Ue(n.projectionLayer || Dn(n)), r = n.id || "";
  return {
    id: r,
    selected: !!(r && r === e),
    subject: n.displaySubject || n.subject || "evidence",
    subjectId: n.subjectId || "",
    spanLabel: Cr(n.span),
    projectionLayer: s.id,
    projectionLabel: n.projectionLabel || s.label,
    projectionDescription: n.projectionDescription || s.description || "Rasa-owned evidence",
    phases: [...n.phases || []],
    domains: [...n.domains || []],
    provenances: [...n.provenances || []],
    tags: fl(n, i),
    entries: pl(n, t)
  };
}
function dl(n = {}, { selectedId: e = "", entryLimit: t = 3, tagLimit: i = 5 } = {}) {
  const r = (Array.isArray(n.groups) ? n.groups : []).map(
    (o) => hl(o, { selectedId: e, entryLimit: t, tagLimit: i })
  );
  return {
    cards: r,
    count: r.length,
    empty: r.length === 0,
    emptyMessage: "No inspection evidence for this source. Artifact data still has the raw report.",
    summary: r.length ? `${r.length} inspection group${r.length === 1 ? "" : "s"}; click a card to pin source evidence` : "0 inspection groups"
  };
}
function ul(n = []) {
  return n.find((e) => Pl(e.span))?.id || n.find((e) => e?.id)?.id || "";
}
function fl(n = {}, e = 5) {
  return [...n.keys || [], ...n.provenances || []].slice(0, e).map(pi);
}
function pl(n = {}, e = 3) {
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
function Cr(n) {
  return n ? `bytes ${n.start}..${n.end}` : "no source span";
}
function gl(n = {}) {
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
function ml(n = {}, { laneLimit: e = 3, candidateLimit: t = 4 } = {}) {
  const i = Array.isArray(n.lanes) ? n.lanes : [], s = Array.isArray(n.candidates) ? n.candidates : [], r = [
    ...i.slice(0, e).map((a = {}) => ({
      label: a.lane || "lane",
      value: [a.memoryPath, a.status].filter(Boolean).join(" / ") || "unknown",
      kind: "lane"
    })),
    ...s.slice(0, t).map((a = {}) => ({
      label: a.candidate || a.lane || a.strategy || "candidate",
      value: a.reason || a.status || a.availability || "unknown",
      kind: "candidate"
    }))
  ];
  return r.length ? r : [{ label: "plan", value: "unavailable for this source", kind: "empty" }];
}
function bl(n = null) {
  return {
    phase: (n?.phases || []).join(" "),
    domain: (n?.domains || []).join(" "),
    provenance: (n?.provenances || []).join(" "),
    title: Il(n),
    status: n ? Cr(n.span) : "click evidence",
    tags: Nl(n),
    rendered: n?.rendered || "Click an evidence group to inspect Rasa-owned annotations and source spans."
  };
}
function xl(n = {}) {
  const e = Array.isArray(n.diagnostics) ? n.diagnostics : [], t = [
    {
      kind: "focus",
      card: bl(n.activeGroup)
    },
    {
      kind: "plan",
      card: yl(n.plan)
    }
  ];
  return e.length && t.push({
    kind: "diagnostics",
    panel: vl(e)
  }), t.push({
    kind: "artifact",
    title: "Artifact data",
    lazy: !0
  }), {
    sections: t,
    diagnosticsCount: e.length
  };
}
function yl(n = {}) {
  return {
    phase: "plan",
    title: "Plan",
    status: n?.status || "unavailable",
    rows: ml(n)
  };
}
function vl(n = []) {
  return {
    title: "Diagnostics",
    note: "Compiler signals that change what the browser inspection can safely claim.",
    status: `${n.length} signal${n.length === 1 ? "" : "s"}`,
    cards: n.map(wl)
  };
}
function wl(n = {}) {
  return {
    phase: n.phase || "",
    status: Wl(n.recoverable),
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
function Sl(n, e = []) {
  const t = String(n?.text || ""), i = ei(n?.start, 0), s = ei(n?.end, i + jl(t)), r = e.map((c) => Ml(t, i, s, c)).filter(Boolean), a = /* @__PURE__ */ new Set([0, t.length]);
  for (const c of r)
    a.add(c.start), a.add(c.end);
  const o = [...a].sort((c, h) => c - h), l = [];
  for (let c = 0; c < o.length; c += 1) {
    const h = o[c];
    Al(l, h, r);
    const d = o[c + 1];
    if (d === void 0 || h >= d)
      continue;
    const u = El(r, h, d);
    l.push({
      text: t.slice(h, d),
      marker: u ? u.publicMarker : null,
      zero: !1
    });
  }
  return l;
}
function Ci(n = {}) {
  const e = Array.isArray(n.phases) ? n.phases : [];
  Array.isArray(n.groups) && n.groups;
  const t = Array.isArray(n.diagnostics) ? n.diagnostics : [], i = Array.isArray(n.projections) ? n.projections : [], s = Array.isArray(n.sourceHighlights) ? n.sourceHighlights : [], r = !!(n.result && n.result.status), a = !!n.activeGroup, o = ol({
    phases: e,
    activePhaseIds: Bl(e)
  }), l = cl(i);
  return {
    slots: ll({
      "source-editor": {
        present: !0,
        status: s.length ? "linked" : "ready",
        count: s.length,
        meta: s.length ? `${s.length} span${s.length === 1 ? "" : "s"}` : "editable"
      },
      "phase-route": {
        present: !0,
        count: e.length,
        meta: e.length ? `${Ll(o)} active` : "waiting"
      },
      "projection-legend": {
        count: l.reduce((c, h) => c + h.count, 0)
      },
      "value-inspector": {
        present: r || a,
        status: r ? n.result.status || "ready" : "waiting",
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
function kl({ examples: n = [] } = {}) {
  const e = al({ activeId: "inspect", ids: ["model", "conformance"] });
  return {
    header: {
      title: "Rasa Systems Workbench",
      subtitle: "Compiler truth, projected for humans.",
      nav: rl("inspect"),
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
function Cl(n, e = {}) {
  return e.groups ? `${e.groups} group${e.groups === 1 ? "" : "s"}` : e.diagnostics ? `${e.diagnostics} diagnostic${e.diagnostics === 1 ? "" : "s"}` : n || "waiting";
}
function Al(n, e, t) {
  for (const i of t)
    !i.zero || i.start !== e || n.push({
      text: "",
      marker: i.publicMarker,
      zero: !0
    });
}
function Ml(n, e, t, i) {
  const s = ei(i?.start, 0), r = ei(i?.end, s), a = Math.max(s, e), o = Math.min(Math.max(r, s), t);
  if (a > o || a === o && (a < e || a > t))
    return null;
  const l = a - e, c = o - e, h = l === c ? Rl(n, l) : mr(n, l, c);
  return {
    start: h.start,
    end: h.end,
    zero: h.start === h.end,
    priority: Ol(i, h),
    publicMarker: {
      kind: i?.kind || "primary",
      severity: i?.severity || "warning",
      label: i?.label || ""
    }
  };
}
function Rl(n, e) {
  const t = Vi(n, e);
  return { start: t, end: t };
}
function El(n, e, t) {
  return n.filter((i) => !i.zero && i.start <= e && i.end >= t).sort(Tl)[0];
}
function Tl(n, e) {
  return n.priority.kind - e.priority.kind || n.priority.severity - e.priority.severity || n.priority.width - e.priority.width || n.priority.label.localeCompare(e.priority.label);
}
function Ol(n, e) {
  return {
    kind: n?.kind === "primary" ? 0 : 1,
    severity: Dl(n?.severity),
    width: e.end - e.start,
    label: n?.label || ""
  };
}
function Dl(n) {
  return n === "error" ? 0 : n === "warning" ? 1 : 2;
}
function Ll(n = []) {
  return n.filter((e) => e.active).length;
}
function Bl(n = []) {
  return n.filter(
    (e = {}) => e.active || e.status === "ok" || e.status === "failed" || e.status === "warn" || Number(e.groups || 0) > 0 || Number(e.diagnostics || 0) > 0
  ).map((e) => e.id).filter(Boolean);
}
function Pl(n) {
  return n && Number.isFinite(Number(n.start)) && Number.isFinite(Number(n.end));
}
function se(n, e, t, i, s) {
  return Object.freeze({ id: n, label: e, component: t, description: i, priority: s });
}
function Dt(n, e, t, i, s, r, a, o, l) {
  return Object.freeze({
    id: n,
    artifact: r,
    description: s,
    href: i,
    label: e,
    phaseIds: Object.freeze([...o]),
    slotId: a,
    title: t,
    tone: l
  });
}
function Il(n) {
  if (!n)
    return "No evidence selected";
  const e = (n.keys || []).slice(0, 3).map(pi).join(" "), t = n.displaySubject && n.subjectId ? `${n.displaySubject} · ${n.subjectId}` : n.displaySubject || n.subject || "";
  return e ? `${t} ${e}` : t;
}
function Nl(n) {
  return [
    ...n?.phases || [],
    ...n?.domains || [],
    ...n?.provenances || []
  ].map(pi);
}
function Wl(n) {
  return n === !0 ? "recoverable" : n === !1 ? "blocking" : "unknown";
}
function pi(n) {
  const e = String(n || "").trim();
  return e ? e.startsWith(":") ? e : `:${e}` : "";
}
function ei(n, e) {
  const t = Number(n);
  return Number.isFinite(t) ? t : e;
}
function jl(n) {
  return new TextEncoder().encode(String(n)).length;
}
let _i = [], Ar = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++)
    (e % 2 ? Ar : _i).push(t = t + n[e]);
})();
function Hl(n) {
  if (n < 768) return !1;
  for (let e = 0, t = _i.length; ; ) {
    let i = e + t >> 1;
    if (n < _i[i]) t = i;
    else if (n >= Ar[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function hs(n) {
  return n >= 127462 && n <= 127487;
}
const ds = 8205;
function Fl(n, e, t = !0, i = !0) {
  return (t ? Mr : zl)(n, e, i);
}
function Mr(n, e, t) {
  if (e == n.length) return e;
  e && Rr(n.charCodeAt(e)) && Er(n.charCodeAt(e - 1)) && e--;
  let i = Ai(n, e);
  for (e += us(i); e < n.length; ) {
    let s = Ai(n, e);
    if (i == ds || s == ds || t && Hl(s))
      e += us(s), i = s;
    else if (hs(s)) {
      let r = 0, a = e - 2;
      for (; a >= 0 && hs(Ai(n, a)); )
        r++, a -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function zl(n, e, t) {
  for (; e > 0; ) {
    let i = Mr(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Ai(n, e) {
  let t = n.charCodeAt(e);
  if (!Er(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Rr(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Rr(n) {
  return n >= 56320 && n < 57344;
}
function Er(n) {
  return n >= 55296 && n < 56320;
}
function us(n) {
  return n < 65536 ? 1 : 2;
}
class R {
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
    ), ae.from(s, this.length - (t - e) + i.length);
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
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new dt(this), r = new dt(e);
    for (let a = t, o = t; ; ) {
      if (s.next(a), r.next(a), a = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (o += s.value.length, s.done || o >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new dt(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Tr(this, e, t);
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
    return new Or(i);
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
    return e.length == 1 && !e[0] ? R.empty : e.length <= 32 ? new I(e) : ae.from(I.split(e, []));
  }
}
class I extends R {
  constructor(e, t = $l(e)) {
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
      let a = this.text[r], o = s + a.length;
      if ((t ? i : o) >= e)
        return new Vl(s, o, i, a);
      s = o + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new I(fs(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let a = i.pop(), o = Kt(r.text, a.text.slice(), 0, r.length);
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
    let s = Kt(this.text, Kt(i.text, fs(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new I(s, r) : ae.from(I.split(s, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Qe(this, e, t);
    let s = "";
    for (let r = 0, a = 0; r <= t && a < this.text.length; a++) {
      let o = this.text[a], l = r + o.length;
      r > e && a && (s += i), e < l && t > r && (s += o.slice(Math.max(0, e - r), t - r)), r = l + 1;
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
      i.push(r), s += r.length + 1, i.length == 32 && (t.push(new I(i, s)), i = [], s = -1);
    return s > -1 && t.push(new I(i, s)), t;
  }
}
class ae extends R {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let a = this.children[r], o = s + a.length, l = i + a.lines - 1;
      if ((t ? l : o) >= e)
        return a.lineInner(e, t, i, s);
      s = o + 1, i = l + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, a = 0; a <= t && r < this.children.length; r++) {
      let o = this.children[r], l = a + o.length;
      if (e <= l && t >= a) {
        let c = s & ((a <= e ? 1 : 0) | (l >= t ? 2 : 0));
        a >= e && l <= t && !c ? i.push(o) : o.decompose(e - a, t - a, i, c);
      }
      a = l + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Qe(this, e, t), i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let a = this.children[s], o = r + a.length;
        if (e >= r && t <= o) {
          let l = a.replace(e - r, t - r, i), c = this.lines - a.lines + l.lines;
          if (l.lines < c >> 4 && l.lines > c >> 6) {
            let h = this.children.slice();
            return h[s] = l, new ae(h, this.length - (t - e) + i.length);
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
    let s = "";
    for (let r = 0, a = 0; r < this.children.length && a <= t; r++) {
      let o = this.children[r], l = a + o.length;
      a > e && r && (s += i), e < l && t > a && (s += o.sliceString(e - a, t - a, i)), a = l + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof ae))
      return 0;
    let i = 0, [s, r, a, o] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == a || r == o)
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
      return new I(f, t);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, a = s >> 1, o = [], l = 0, c = -1, h = [];
    function d(f) {
      let p;
      if (f.lines > r && f instanceof ae)
        for (let g of f.children)
          d(g);
      else f.lines > a && (l > a || !l) ? (u(), o.push(f)) : f instanceof I && l && (p = h[h.length - 1]) instanceof I && f.lines + p.lines <= 32 ? (l += f.lines, c += f.length + 1, h[h.length - 1] = new I(p.text.concat(f.text), p.length + 1 + f.length)) : (l + f.lines > s && u(), l += f.lines, c += f.length + 1, h.push(f));
    }
    function u() {
      l != 0 && (o.push(h.length == 1 ? h[0] : ae.from(h, c)), c = -1, l = h.length = 0);
    }
    for (let f of e)
      d(f);
    return u(), o.length == 1 ? o[0] : new ae(o, t);
  }
}
R.empty = /* @__PURE__ */ new I([""], 0);
function $l(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function Kt(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, a = !0; r < n.length && s <= i; r++) {
    let o = n[r], l = s + o.length;
    l >= t && (l > i && (o = o.slice(0, i - s)), s < t && (o = o.slice(t - s)), a ? (e[e.length - 1] += o, a = !1) : e.push(o)), s = l + 1;
  }
  return e;
}
function fs(n, e, t) {
  return Kt(n, [""], e, t);
}
class dt {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof I ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], a = r >> 1, o = s instanceof I ? s.text.length : s.children.length;
      if (a == (t > 0 ? o : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof I) {
        let l = s.text[a + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, l.length > Math.max(0, e))
          return this.value = e == 0 ? l : t > 0 ? l.slice(e) : l.slice(0, l.length - e), this;
        e -= l.length;
      } else {
        let l = s.children[a + (t < 0 ? -1 : 0)];
        e > l.length ? (e -= l.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(l), this.offsets.push(t > 0 ? 1 : (l instanceof I ? l.text.length : l.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Tr {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new dt(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
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
class Or {
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
typeof Symbol < "u" && (R.prototype[Symbol.iterator] = function() {
  return this.iter();
}, dt.prototype[Symbol.iterator] = Tr.prototype[Symbol.iterator] = Or.prototype[Symbol.iterator] = function() {
  return this;
});
class Vl {
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
function Qe(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function le(n, e, t = !0, i = !0) {
  return Fl(n, e, t, i);
}
function ql(n) {
  return n >= 56320 && n < 57344;
}
function Kl(n) {
  return n >= 55296 && n < 56320;
}
function Gl(n, e) {
  let t = n.charCodeAt(e);
  if (!Kl(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return ql(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Ul(n) {
  return n < 65536 ? 1 : 2;
}
const Yi = /\r\n?|\n/;
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
      let r = this.sections[t++], a = this.sections[t++];
      a < 0 ? (e(i, s, r), s += r) : s += a, i += r;
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
    Xi(this, e, t);
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
    return this.empty ? e : e.empty ? this : Dr(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Ji(this, e, t);
  }
  mapPos(e, t = -1, i = J.Simple) {
    let s = 0, r = 0;
    for (let a = 0; a < this.sections.length; ) {
      let o = this.sections[a++], l = this.sections[a++], c = s + o;
      if (l < 0) {
        if (c > e)
          return r + (e - s);
        r += o;
      } else {
        if (i != J.Simple && c >= e && (i == J.TrackDel && s < e && c > e || i == J.TrackBefore && s < e || i == J.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !o)
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
      let r = this.sections[i++], a = this.sections[i++], o = s + r;
      if (a >= 0 && s <= t && o >= e)
        return s < e && o > t ? "cover" : !0;
      s = o;
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
class H extends me {
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
    return Xi(this, (t, i, s, r, a) => e = e.replace(s, s + (i - t), a), !1), e;
  }
  mapDesc(e, t = !1) {
    return Ji(this, e, t, !0);
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
      let a = t[s], o = t[s + 1];
      if (o >= 0) {
        t[s] = o, t[s + 1] = a;
        let l = s >> 1;
        for (; i.length < l; )
          i.push(R.empty);
        i.push(a ? e.slice(r, r + a) : R.empty);
      }
      r += a;
    }
    return new H(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Dr(this, e, !0);
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
    return e.empty ? this : Ji(this, e, t, !0);
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
    Xi(this, e, t);
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
    let t = [], i = [], s = [], r = new bt(this);
    e: for (let a = 0, o = 0; ; ) {
      let l = a == e.length ? 1e9 : e[a++];
      for (; o < l || o == l && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, l - o);
        V(s, h, -1);
        let d = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        V(t, h, d), d > 0 && Me(i, t, r.text), r.forward(h), o += h;
      }
      let c = e[a++];
      for (; o < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - o);
        V(t, h, -1), V(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), o += h;
      }
    }
    return {
      changes: new H(t, i),
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
    let s = [], r = [], a = 0, o = null;
    function l(h = !1) {
      if (!h && !s.length)
        return;
      a < t && V(s, t - a, -1);
      let d = new H(s, r);
      o = o ? o.compose(d.map(o)) : d, s = [], r = [], a = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let d of h)
          c(d);
      else if (h instanceof H) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        l(), o = o ? o.compose(h.map(o)) : h;
      } else {
        let { from: d, to: u = d, insert: f } = h;
        if (d > u || d < 0 || u > t)
          throw new RangeError(`Invalid change range ${d} to ${u} (in doc of length ${t})`);
        let p = f ? typeof f == "string" ? R.of(f.split(i || Yi)) : f : R.empty, g = p.length;
        if (d == u && g == 0)
          return;
        d < a && l(), d > a && V(s, d - a, -1), V(s, u - d, g), Me(r, s, p), a = u;
      }
    }
    return c(e), l(!o), o;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new H(e ? [e, -1] : [], []);
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
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((a, o) => o && typeof a != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(R.empty);
          i[s] = R.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new H(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new H(e, t);
  }
}
function V(n, e, t, i = !1) {
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
      n.push(R.empty);
    n.push(t);
  }
}
function Xi(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, a = 0; a < n.sections.length; ) {
    let o = n.sections[a++], l = n.sections[a++];
    if (l < 0)
      s += o, r += o;
    else {
      let c = s, h = r, d = R.empty;
      for (; c += o, h += l, l && i && (d = d.append(i[a - 2 >> 1])), !(t || a == n.sections.length || n.sections[a + 1] < 0); )
        o = n.sections[a++], l = n.sections[a++];
      e(s, c, r, h, d), s = c, r = h;
    }
  }
}
function Ji(n, e, t, i = !1) {
  let s = [], r = i ? [] : null, a = new bt(n), o = new bt(e);
  for (let l = -1; ; ) {
    if (a.done && o.len || o.done && a.len)
      throw new Error("Mismatched change set lengths");
    if (a.ins == -1 && o.ins == -1) {
      let c = Math.min(a.len, o.len);
      V(s, c, -1), a.forward(c), o.forward(c);
    } else if (o.ins >= 0 && (a.ins < 0 || l == a.i || a.off == 0 && (o.len < a.len || o.len == a.len && !t))) {
      let c = o.len;
      for (V(s, o.ins, -1); c; ) {
        let h = Math.min(a.len, c);
        a.ins >= 0 && l < a.i && a.len <= h && (V(s, 0, a.ins), r && Me(r, s, a.text), l = a.i), a.forward(h), c -= h;
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
      V(s, c, l < a.i ? a.ins : 0), r && l < a.i && Me(r, s, a.text), l = a.i, a.forward(a.len - h);
    } else {
      if (a.done && o.done)
        return r ? H.createSet(s, r) : me.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Dr(n, e, t = !1) {
  let i = [], s = t ? [] : null, r = new bt(n), a = new bt(e);
  for (let o = !1; ; ) {
    if (r.done && a.done)
      return s ? H.createSet(i, s) : me.create(i);
    if (r.ins == 0)
      V(i, r.len, 0, o), r.next();
    else if (a.len == 0 && !a.done)
      V(i, 0, a.ins, o), s && Me(s, i, a.text), a.next();
    else {
      if (r.done || a.done)
        throw new Error("Mismatched change set lengths");
      {
        let l = Math.min(r.len2, a.len), c = i.length;
        if (r.ins == -1) {
          let h = a.ins == -1 ? -1 : a.off ? 0 : a.ins;
          V(i, l, h, o), s && h && Me(s, i, a.text);
        } else a.ins == -1 ? (V(i, r.off ? 0 : r.len, l, o), s && Me(s, i, r.textBit(l))) : (V(i, r.off ? 0 : r.len, a.off ? 0 : a.ins, o), s && !a.off && Me(s, i, a.text));
        o = (r.ins > l || a.ins >= 0 && a.len > l) && (o || i.length > c), r.forward2(l), a.forward(l);
      }
    }
  }
}
class bt {
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
    return t >= e.length ? R.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? R.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
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
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Pe(i, s, this.flags);
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
    return Pe.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, s, r) {
    let a = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return !r && e != t && (r = t < e ? 1 : -1), t < e ? Pe.create(t, e, 48 | a) : Pe.create(e, t, (r ? r < 0 ? 8 : 16 : 0) | a);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], a = e[s - 1];
      if (r.empty ? r.from <= a.to : r.from < a.to) {
        let o = a.from, l = Math.max(r.to, a.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? y.range(l, o) : y.range(o, l));
      }
    }
    return new y(e, t);
  }
}
function Lr(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Ln = 0;
class w {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Ln++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
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
    return new w(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Bn), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Gt([], this, 0, e);
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
    return new Gt(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Gt(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Bn(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class Gt {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Ln++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, r = this.id, a = e[r] >> 1, o = this.type == 2, l = !1, c = !1, h = [];
    for (let d of this.dependencies)
      d == "doc" ? l = !0 : d == "selection" ? c = !0 : (((t = e[d.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[d.id]);
    return {
      create(d) {
        return d.values[a] = i(d), 1;
      },
      update(d, u) {
        if (l && u.docChanged || c && (u.docChanged || u.selection) || Qi(d, h)) {
          let f = i(d);
          if (o ? !ps(f, d.values[a], s) : !s(f, d.values[a]))
            return d.values[a] = f, 1;
        }
        return 0;
      },
      reconfigure: (d, u) => {
        let f, p = u.config.address[r];
        if (p != null) {
          let g = ii(u, p);
          if (this.dependencies.every((m) => m instanceof w ? u.facet(m) === d.facet(m) : m instanceof ye ? u.field(m, !1) == d.field(m, !1) : !0) || (o ? ps(f = i(d), g, s) : s(f = i(d), g)))
            return d.values[a] = g, 0;
        } else
          f = i(d);
        return d.values[a] = f, 1;
      }
    };
  }
}
function ps(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function Qi(n, e) {
  let t = !1;
  for (let i of e)
    ut(n, i) & 1 && (t = !0);
  return t;
}
function _l(n, e, t) {
  let i = t.map((l) => n[l.id]), s = t.map((l) => l.type), r = i.filter((l) => !(l & 1)), a = n[e.id] >> 1;
  function o(l) {
    let c = [];
    for (let h = 0; h < i.length; h++) {
      let d = ii(l, i[h]);
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
        ut(l, c);
      return l.values[a] = o(l), 1;
    },
    update(l, c) {
      if (!Qi(l, r))
        return 0;
      let h = o(l);
      return e.compare(h, l.values[a]) ? 0 : (l.values[a] = h, 1);
    },
    reconfigure(l, c) {
      let h = Qi(l, i), d = c.config.facets[e.id], u = c.facet(e);
      if (d && !h && Bn(t, d))
        return l.values[a] = u, 0;
      let f = o(l);
      return e.compare(f, u) ? (l.values[a] = u, 0) : (l.values[a] = f, 1);
    }
  };
}
const Lt = /* @__PURE__ */ w.define({ static: !0 });
class ye {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ye(Ln++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Lt).find((i) => i.field == this);
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
        let r = i.values[t], a = this.updateF(r, s);
        return this.compareF(r, a) ? 0 : (i.values[t] = a, 1);
      },
      reconfigure: (i, s) => {
        let r = i.facet(Lt), a = s.facet(Lt), o;
        return (o = r.find((l) => l.field == this)) && o != a.find((l) => l.field == this) ? (i.values[t] = o.create(i), 1) : s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Lt.of({ field: this, create: e })];
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
function ot(n) {
  return (e) => new Br(e, n);
}
const Pn = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ ot(Be.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ ot(Be.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ ot(Be.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ ot(Be.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ ot(Be.lowest)
};
class Br {
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
    return new Zi(this, e);
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
class Zi {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class ti {
  constructor(e, t, i, s, r, a) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = a, this.statusTemplate = []; this.statusTemplate.length < i.length; )
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
    let s = [], r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ new Map();
    for (let u of Yl(e, t, a))
      u instanceof ye ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let o = /* @__PURE__ */ Object.create(null), l = [], c = [];
    for (let u of s)
      o[u.id] = c.length << 1, c.push((f) => u.slot(f));
    let h = i?.config.facets;
    for (let u in r) {
      let f = r[u], p = f[0].facet, g = h && h[u] || [];
      if (f.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (o[p.id] = l.length << 1 | 1, Bn(g, f))
          l.push(i.facet(p));
        else {
          let m = p.combine(f.map((b) => b.value));
          l.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of f)
          m.type == 0 ? (o[m.id] = l.length << 1 | 1, l.push(m.value)) : (o[m.id] = c.length << 1, c.push((b) => m.dynamicSlot(b)));
        o[p.id] = c.length << 1, c.push((m) => _l(m, p, f));
      }
    }
    let d = c.map((u) => u(o));
    return new ti(e, a, d, o, l, r);
  }
}
function Yl(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(a, o) {
    let l = s.get(a);
    if (l != null) {
      if (l <= o)
        return;
      let c = i[l].indexOf(a);
      c > -1 && i[l].splice(c, 1), a instanceof Zi && t.delete(a.compartment);
    }
    if (s.set(a, o), Array.isArray(a))
      for (let c of a)
        r(c, o);
    else if (a instanceof Zi) {
      if (t.has(a.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(a.compartment) || a.inner;
      t.set(a.compartment, c), r(c, o);
    } else if (a instanceof Br)
      r(a.inner, a.prec);
    else if (a instanceof ye)
      i[o].push(a), a.provides && r(a.provides, o);
    else if (a instanceof Gt)
      i[o].push(a), a.facet.extensions && r(a.facet.extensions, Be.default);
    else {
      let c = a.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${a}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, o);
    }
  }
  return r(n, Be.default), i.reduce((a, o) => a.concat(o));
}
function ut(n, e) {
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
function ii(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Pr = /* @__PURE__ */ w.define(), en = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), Ir = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), Nr = /* @__PURE__ */ w.define(), Wr = /* @__PURE__ */ w.define(), jr = /* @__PURE__ */ w.define(), Hr = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : !1
});
class rt {
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
    return new Xl();
  }
}
class Xl {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new rt(this, e);
  }
}
class Jl {
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
    return new W(this, e);
  }
}
class W {
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
    return t === void 0 ? void 0 : t == this.value ? this : new W(this.type, t);
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
    return new Jl(e.map || ((t) => t));
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
W.reconfigure = /* @__PURE__ */ W.define();
W.appendConfig = /* @__PURE__ */ W.define();
class q {
  constructor(e, t, i, s, r, a) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = a, this._doc = null, this._state = null, i && Lr(i, t.newLength), r.some((o) => o.type == q.time) || (this.annotations = r.concat(q.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, s, r, a) {
    return new q(e, t, i, s, r, a);
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
q.time = /* @__PURE__ */ rt.define();
q.userEvent = /* @__PURE__ */ rt.define();
q.addToHistory = /* @__PURE__ */ rt.define();
q.remote = /* @__PURE__ */ rt.define();
function Ql(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, a;
    if (i < n.length && (s == e.length || e[s] >= n[i]))
      r = n[i++], a = n[i++];
    else if (s < e.length)
      r = e[s++], a = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, a) : t[t.length - 1] < a && (t[t.length - 1] = a);
  }
}
function Fr(n, e, t) {
  var i;
  let s, r, a;
  return t ? (s = e.changes, r = H.empty(e.changes.length), a = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, !0), a = n.changes.compose(s)), {
    changes: a,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: W.mapEffects(n.effects, s).concat(W.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function tn(n, e, t) {
  let i = e.selection, s = _e(e.annotations);
  return e.userEvent && (s = s.concat(q.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof H ? e.changes : H.of(e.changes || [], t, n.facet(Ir)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: _e(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function zr(n, e, t) {
  let i = tn(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let a = !!e[r].sequential;
    i = Fr(i, tn(n, e[r], a ? i.changes.newLength : n.doc.length), a);
  }
  let s = q.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return ec(t ? Zl(s) : s);
}
function Zl(n) {
  let e = n.startState, t = !0;
  for (let s of e.facet(Nr)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Ql(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = n.changes.invertedDesc, s = H.empty(e.doc.length);
    else {
      let a = n.changes.filter(t);
      s = a.changes, r = a.filtered.mapDesc(a.changes).invertedDesc;
    }
    n = q.create(e, s, n.selection && n.selection.map(r), W.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Wr);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof q ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof q ? n = r[0] : n = zr(e, _e(r), !1);
  }
  return n;
}
function ec(n) {
  let e = n.startState, t = e.facet(jr), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = Fr(i, tn(e, r, n.changes.newLength), !0));
  }
  return i == n ? n : q.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const tc = [];
function _e(n) {
  return n == null ? tc : Array.isArray(n) ? n : [n];
}
var pe = /* @__PURE__ */ (function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
})(pe || (pe = {}));
const ic = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let nn;
try {
  nn = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function nc(n) {
  if (nn)
    return nn.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || ic.test(t)))
      return !0;
  }
  return !1;
}
function sc(n) {
  return (e) => {
    if (!/\S/.test(e))
      return pe.Space;
    if (nc(e))
      return pe.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return pe.Word;
    return pe.Other;
  };
}
class T {
  constructor(e, t, i, s, r, a) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, a && (a._state = this);
    for (let o = 0; o < this.config.dynamicSlots.length; o++)
      ut(this, o << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ut(this, i), ii(this, i);
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
    return zr(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let o of e.effects)
      o.is(gi.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((l, c) => s.set(c, l)), t = null), s.set(o.value.compartment, o.value.extension)) : o.is(W.reconfigure) ? (t = null, i = o.value) : o.is(W.appendConfig) && (t = null, i = _e(i).concat(o.value));
    let r;
    t ? r = e.startState.values.slice() : (t = ti.resolve(i, s, this), r = new T(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, c) => c.reconfigure(l, this), null).values);
    let a = e.startState.facet(en) ? e.newSelection : e.newSelection.asSingle();
    new T(t, e.newDoc, a, r, (o, l) => l.update(o, e), e);
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
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), r = [i.range], a = _e(i.effects);
    for (let o = 1; o < t.ranges.length; o++) {
      let l = e(t.ranges[o]), c = this.changes(l.changes), h = c.map(s);
      for (let u = 0; u < o; u++)
        r[u] = r[u].map(h);
      let d = s.mapDesc(c, !0);
      r.push(l.range.map(d)), s = s.compose(h), a = W.mapEffects(a, h).concat(W.mapEffects(_e(l.effects), d));
    }
    return {
      changes: s,
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
    return e instanceof H ? e : H.of(e, this.doc.length, this.facet(T.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return R.of(e.split(this.facet(T.lineSeparator) || Yi));
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
    return t == null ? e.default : (ut(this, t), ii(this, t));
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
          let a = i[r], o = e[r];
          s.push(a.init((l) => a.spec.fromJSON(o, l)));
        }
    }
    return T.create({
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
    let t = ti.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof R ? e.doc : R.of((e.doc || "").split(t.staticFacet(T.lineSeparator) || Yi)), s = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return Lr(s, i.length), t.staticFacet(en) || (s = s.asSingle()), new T(t, i, s, t.dynamicSlots.map(() => null), (r, a) => a.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(T.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(T.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Hr);
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
    for (let i of this.facet(T.phrases))
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
    for (let r of this.facet(Pr))
      for (let a of r(this, t, i))
        Object.prototype.hasOwnProperty.call(a, e) && s.push(a[e]);
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
    return sc(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), a = e - i, o = e - i;
    for (; a > 0; ) {
      let l = le(t, a, !1);
      if (r(t.slice(l, a)) != pe.Word)
        break;
      a = l;
    }
    for (; o < s; ) {
      let l = le(t, o);
      if (r(t.slice(o, l)) != pe.Word)
        break;
      o = l;
    }
    return a == o ? null : y.range(a + i, o + i);
  }
}
T.allowMultipleSelections = en;
T.tabSize = /* @__PURE__ */ w.define({
  combine: (n) => n.length ? n[0] : 4
});
T.lineSeparator = Ir;
T.readOnly = Hr;
T.phrases = /* @__PURE__ */ w.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  }
});
T.languageData = Pr;
T.changeFilter = Nr;
T.transactionFilter = Wr;
T.transactionExtender = jr;
gi.reconfigure = /* @__PURE__ */ W.define();
function $r(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let a = s[r], o = i[r];
      if (o === void 0)
        i[r] = a;
      else if (!(o === a || a === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](o, a);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class We {
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
    return xt.create(e, t, this);
  }
}
We.prototype.startSide = We.prototype.endSide = 0;
We.prototype.point = !1;
We.prototype.mapMode = J.TrackDel;
function In(n, e) {
  return n == e || n.constructor == e.constructor && n.eq(e);
}
class xt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new xt(e, t, i);
  }
}
function sn(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Nn {
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
    for (let a = s, o = r.length; ; ) {
      if (a == o)
        return a;
      let l = a + o >> 1, c = r[l] - e || (i ? this.value[l].endSide : this.value[l].startSide) - t;
      if (l == a)
        return c >= 0 ? a : o;
      c >= 0 ? o = l : a = l + 1;
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), a = this.findIndex(i, 1e9, !1, r); r < a; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], s = [], r = [], a = -1, o = -1;
    for (let l = 0; l < this.value.length; l++) {
      let c = this.value[l], h = this.from[l] + e, d = this.to[l] + e, u, f;
      if (h == d) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (u = f = p, c.startSide != c.endSide && (f = t.mapPos(h, c.endSide), f < u)))
          continue;
      } else if (u = t.mapPos(h, c.startSide), f = t.mapPos(d, c.endSide), u > f || u == f && c.startSide > 0 && c.endSide <= 0)
        continue;
      (f - u || c.endSide - c.startSide) < 0 || (a < 0 && (a = u), c.point && (o = Math.max(o, f - u)), i.push(c), s.push(u - a), r.push(f - a));
    }
    return { mapped: i.length ? new Nn(s, r, i, o) : null, pos: a };
  }
}
class M {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, i, s) {
    return new M(e, t, i, s);
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
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e, a = e.filter;
    if (t.length == 0 && !a)
      return this;
    if (i && (t = t.slice().sort(sn)), this.isEmpty)
      return t.length ? M.of(t) : this;
    let o = new Vr(this, null, -1).goto(0), l = 0, c = [], h = new ni();
    for (; o.value || l < t.length; )
      if (l < t.length && (o.from - t[l].from || o.startSide - t[l].value.startSide) >= 0) {
        let d = t[l++];
        h.addInner(d.from, d.to, d.value) || c.push(d);
      } else o.rangeIndex == 1 && o.chunkIndex < this.chunk.length && (l == t.length || this.chunkEnd(o.chunkIndex) < t[l].from) && (!a || s > this.chunkEnd(o.chunkIndex) || r < this.chunkPos[o.chunkIndex]) && h.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex]) ? o.nextChunk() : ((!a || s > o.to || r < o.from || a(o.from, o.to, o.value)) && (h.addInner(o.from, o.to, o.value) || c.push(xt.create(o.from, o.to, o.value))), o.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? M.empty : this.nextLayer.update({ add: c, filter: a, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], s = -1;
    for (let a = 0; a < this.chunk.length; a++) {
      let o = this.chunkPos[a], l = this.chunk[a], c = e.touchesRange(o, o + l.length);
      if (c === !1)
        s = Math.max(s, l.maxPoint), t.push(l), i.push(e.mapPos(o));
      else if (c === !0) {
        let { mapped: h, pos: d } = l.map(o, e);
        h && (s = Math.max(s, h.maxPoint), t.push(h), i.push(d));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new M(i, t, r || M.empty, s);
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
        let r = this.chunkPos[s], a = this.chunk[s];
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
    return yt.from([this]).goto(e);
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
    return yt.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, s, r = -1) {
    let a = e.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), o = t.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), l = gs(a, o, i), c = new lt(a, l, r), h = new lt(o, l, r);
    i.iterGaps((d, u, f) => ms(c, d, h, u, f, s)), i.empty && i.length == 0 && ms(c, 0, h, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), a = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != a.length)
      return !1;
    if (!r.length)
      return !0;
    let o = gs(r, a), l = new lt(r, o, 0).goto(i), c = new lt(a, o, 0).goto(i);
    for (; ; ) {
      if (l.to != c.to || !rn(l.active, c.active) || l.point && (!c.point || !In(l.point, c.point)))
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
    let a = new lt(e, null, r).goto(t), o = t, l = a.openStart;
    for (; ; ) {
      let c = Math.min(a.to, i);
      if (a.point) {
        let h = a.activeForPoint(a.to), d = a.pointFrom < t ? h.length + 1 : a.point.startSide < 0 ? h.length : Math.min(h.length, l);
        s.point(o, c, a.point, h, d, a.pointRank), l = Math.min(a.openEnd(c), h.length);
      } else c > o && (s.span(o, c, a.active, l), l = a.openEnd(c));
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
    let i = new ni();
    for (let s of e instanceof xt ? [e] : t ? rc(e) : e)
      i.add(s.from, s.to, s.value);
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
      for (let s = e[i]; s != M.empty; s = s.nextLayer)
        t = new M(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
M.empty = /* @__PURE__ */ new M([], [], null, -1);
function rc(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (sn(e, i) > 0)
        return n.slice().sort(sn);
      e = i;
    }
  return n;
}
M.empty.nextLayer = M.empty;
class ni {
  finishChunk(e) {
    this.chunks.push(new Nn(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new ni())).add(e, t, i);
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
function gs(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n)
    for (let a = 0; a < r.chunk.length; a++)
      r.chunk[a].maxPoint <= 0 && i.set(r.chunk[a], r.chunkPos[a]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let a = 0; a < r.chunk.length; a++) {
      let o = i.get(r.chunk[a]);
      o != null && (t ? t.mapPos(o) : o) == r.chunkPos[a] && !t?.touchesRange(o, o + r.chunk[a].length) && s.add(r.chunk[a]);
    }
  return s;
}
class Vr {
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
class yt {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let a = e[r]; !a.isEmpty; a = a.nextLayer)
        a.maxPoint >= i && s.push(new Vr(a, t, i, r));
    return s.length == 1 ? s[0] : new yt(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Mi(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Mi(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Mi(this.heap, 0);
    }
  }
}
function Mi(n, e) {
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
class lt {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = yt.from(e, t, i);
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
    Bt(this.active, e), Bt(this.activeTo, e), Bt(this.activeRank, e), this.minActive = bs(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    Pt(this.active, t, i), Pt(this.activeTo, t, s), Pt(this.activeRank, t, r), e && Pt(e, t, this.cursor.from), this.minActive = bs(this.active, this.activeTo);
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
        this.removeActive(s), i && Bt(i, s);
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
function ms(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let a = i + s, o = i, l = i - e, c = !!r.boundChange;
  for (let h = !1; ; ) {
    let d = n.to + l - t.to, u = d || n.endSide - t.endSide, f = u < 0 ? n.to + l : t.to, p = Math.min(f, a);
    if (n.point || t.point ? (n.point && t.point && In(n.point, t.point) && rn(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(o, p, n.point, t.point), h = !1) : (h && r.boundChange(o), p > o && !rn(n.active, t.active) && r.compareRange(o, p, n.active, t.active), c && p < a && (d || n.openEnd(f) != t.openEnd(f)) && (h = !0)), f > a)
      break;
    o = f, u <= 0 && n.next(), u >= 0 && t.next();
  }
}
function rn(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !In(n[t], e[t]))
      return !1;
  return !0;
}
function Bt(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function Pt(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function bs(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function ac(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = le(n, s);
  }
  return n.length;
}
const an = "ͼ", xs = typeof Symbol > "u" ? "__" + an : Symbol.for(an), on = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ze {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(a) {
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
          r(s(f), p, h, u);
        } else p != null && h.push(f.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && l.push((i && !d && !c ? a.map(i) : a).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let a in e) r(s(a), e[a], this.rules);
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
    let e = ys[xs] || 1;
    return ys[xs] = e + 1, an + e.toString(36);
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
    let s = e[on], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new oc(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let vs = /* @__PURE__ */ new Map();
class oc {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = vs.get(i);
      if (r) return e[on] = r;
      this.sheet = new s.CSSStyleSheet(), vs.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[on] = this;
  }
  mount(e, t) {
    let i = this.sheet, s = 0, r = 0;
    for (let a = 0; a < e.length; a++) {
      let o = e[a], l = this.modules.indexOf(o);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, o), i) for (let c = 0; c < o.rules.length; c++)
          i.insertRule(o.rules[c], s++);
      } else {
        for (; r < l; ) s += this.modules[r++].rules.length;
        s += o.rules.length, r++;
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
var Ee = {
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
}, vt = {
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
}, lc = typeof navigator < "u" && /Mac/.test(navigator.platform), cc = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var z = 0; z < 10; z++) Ee[48 + z] = Ee[96 + z] = String(z);
for (var z = 1; z <= 24; z++) Ee[z + 111] = "F" + z;
for (var z = 65; z <= 90; z++)
  Ee[z] = String.fromCharCode(z + 32), vt[z] = String.fromCharCode(z);
for (var Ri in Ee) vt.hasOwnProperty(Ri) || (vt[Ri] = Ee[Ri]);
function hc(n) {
  var e = lc && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || cc && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? vt : Ee)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let G = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ln = typeof document < "u" ? document : { documentElement: { style: {} } };
const cn = /* @__PURE__ */ /Edge\/(\d+)/.exec(G.userAgent), qr = /* @__PURE__ */ /MSIE \d/.test(G.userAgent), hn = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(G.userAgent), mi = !!(qr || hn || cn), ws = !mi && /* @__PURE__ */ /gecko\/(\d+)/i.test(G.userAgent), Ei = !mi && /* @__PURE__ */ /Chrome\/(\d+)/.exec(G.userAgent), Ss = "webkitFontSmoothing" in ln.documentElement.style, dn = !mi && /* @__PURE__ */ /Apple Computer/.test(G.vendor), ks = dn && (/* @__PURE__ */ /Mobile\/\w+/.test(G.userAgent) || G.maxTouchPoints > 2);
var x = {
  mac: ks || /* @__PURE__ */ /Mac/.test(G.platform),
  windows: /* @__PURE__ */ /Win/.test(G.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(G.platform),
  ie: mi,
  ie_version: qr ? ln.documentMode || 6 : hn ? +hn[1] : cn ? +cn[1] : 0,
  gecko: ws,
  gecko_version: ws ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  chrome: !!Ei,
  chrome_version: Ei ? +Ei[1] : 0,
  ios: ks,
  android: /* @__PURE__ */ /Android\b/.test(G.userAgent),
  webkit: Ss,
  webkit_version: Ss ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(G.userAgent) || [0, 0])[1] : 0,
  safari: dn,
  safari_version: dn ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(G.userAgent) || [0, 0])[1] : 0,
  tabSize: ln.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Wn(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const si = /* @__PURE__ */ Object.create(null);
function jn(n, e, t) {
  if (n == e)
    return !0;
  n || (n = si), e || (e = si);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - 0 != s.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r]))
      return !1;
  return !0;
}
function dc(n, e) {
  for (let t = n.attributes.length - 1; t >= 0; t--) {
    let i = n.attributes[t].name;
    e[i] == null && n.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? n.style.cssText = i : n.getAttribute(t) != i && n.setAttribute(t, i);
  }
}
function Cs(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      t && s in t || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = !0, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function uc(n) {
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
var $ = /* @__PURE__ */ (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})($ || ($ = {}));
class j extends We {
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
    return new At(e);
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
    let t = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: a } = Kr(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (a ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new je(e, i, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Mt(e);
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
class At extends j {
  constructor(e) {
    let { start: t, end: i } = Kr(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Wn(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || si;
  }
  eq(e) {
    return this == e || e instanceof At && this.tagName == e.tagName && jn(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
At.prototype.point = !1;
class Mt extends j {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Mt && this.spec.class == e.spec.class && jn(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Mt.prototype.mapMode = J.TrackBefore;
Mt.prototype.point = !0;
class je extends j {
  constructor(e, t, i, s, r, a) {
    super(t, i, r, e), this.block = s, this.isReplace = a, this.mapMode = s ? t <= 0 ? J.TrackBefore : J.TrackAfter : J.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? $.WidgetRange : this.startSide <= 0 ? $.WidgetBefore : $.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof je && fc(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
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
function Kr(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function fc(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function Ye(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class wt extends We {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof wt && this.tagName == e.tagName && jn(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new wt(e.tagName, e.attributes || si, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return M.of(e, t);
  }
}
wt.prototype.startSide = wt.prototype.endSide = -1;
function St(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function un(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function ft(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return un(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Ut(n) {
  return n.nodeType == 3 ? kt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function pt(n, e, t, i) {
  return t ? As(n, e, t, i, -1) || As(n, e, t, i, 1) : !1;
}
function Te(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function ri(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function As(n, e, t, i, s) {
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
function ai(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function pc(n) {
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
function Gr(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function gc(n, e, t, i, s, r, a, o) {
  let l = n.ownerDocument, c = l.defaultView || window;
  for (let h = n, d = !1; h && !d; )
    if (h.nodeType == 1) {
      let u, f = h == l.body, p = 1, g = 1;
      if (f)
        u = pc(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (d = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let v = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Gr(h, v)), u = {
          left: v.left,
          right: v.left + h.clientWidth * p,
          top: v.top,
          bottom: v.top + h.clientHeight * g
        };
      }
      let m = 0, b = 0;
      if (s == "nearest")
        e.top < u.top + a ? (b = e.top - (u.top + a), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + a)) : e.bottom > u.bottom - a && (b = e.bottom - u.bottom + a, t < 0 && e.top - b < u.top && (b = e.top - (u.top + a)));
      else {
        let v = e.bottom - e.top, C = u.bottom - u.top;
        b = (s == "center" && v <= C ? e.top + v / 2 - C / 2 : s == "start" || s == "center" && t < 0 ? e.top - a : e.bottom - C + a) - u.top;
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
          }, v && Math.abs(v - m) < 1 && (i = "nearest"), C && Math.abs(C - b) < 1 && (s = "nearest");
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
function Ur(n, e = !0) {
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
class mc {
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
let Le = null;
x.safari && x.safari_version >= 26 && (Le = !1);
function _r(n) {
  if (n.setActive)
    return n.setActive();
  if (Le)
    return n.focus(Le);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(Le == null ? {
    get preventScroll() {
      return Le = { preventScroll: !0 }, !0;
    }
  } : void 0), !Le) {
    Le = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Ms;
function kt(n, e, t = e) {
  let i = Ms || (Ms = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Xe(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, n.dispatchEvent(r);
  let a = new KeyboardEvent("keyup", s);
  return a.synthetic = !0, n.dispatchEvent(a), r.defaultPrevented || a.defaultPrevented;
}
function bc(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function xc(n, e) {
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
function Yr(n) {
  return n instanceof Window ? n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4) : n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function Xr(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = xe(t);
    } else if (t.parentNode && !ri(t))
      i = Te(t), t = t.parentNode;
    else
      return null;
  }
}
function Jr(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !ri(t))
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
var N = /* @__PURE__ */ (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})(N || (N = {}));
const He = N.LTR, Hn = N.RTL;
function Qr(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const yc = /* @__PURE__ */ Qr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), vc = /* @__PURE__ */ Qr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), fn = /* @__PURE__ */ Object.create(null), re = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  fn[e] = t, fn[t] = -e;
}
function Zr(n) {
  return n <= 247 ? yc[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? vc[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const wc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ce {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Hn : He;
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
    for (let a = 0; a < e.length; a++) {
      let o = e[a];
      if (o.from <= t && o.to >= t) {
        if (o.level == i)
          return a;
        (r < 0 || (s != 0 ? s < 0 ? o.from < t : o.to > t : e[r].level > o.level)) && (r = a);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function ea(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !ea(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const O = [];
function Sc(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let a = r ? i[r - 1].to : e, o = r < i.length ? i[r].from : t, l = r ? 256 : s;
    for (let c = a, h = l, d = l; c < o; c++) {
      let u = Zr(n.charCodeAt(c));
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
function kc(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let a = 0, o = 0, l = 0; a <= i.length; a++) {
    let c = a ? i[a - 1].to : e, h = a < i.length ? i[a].from : t;
    for (let d = c, u, f, p; d < h; d++)
      if (f = fn[u = n.charCodeAt(d)])
        if (f < 0) {
          for (let g = o - 3; g >= 0; g -= 3)
            if (re[g + 1] == -f) {
              let m = re[g + 2], b = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
              b && (O[d] = O[re[g]] = b), o = g;
              break;
            }
        } else {
          if (re.length == 189)
            break;
          re[o++] = d, re[o++] = u, re[o++] = l;
        }
      else if ((p = O[d]) == 2 || p == 1) {
        let g = p == s;
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
function Cc(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let a = s ? t[s - 1].to : n, o = s < t.length ? t[s].from : e;
    for (let l = a; l < o; ) {
      let c = O[l];
      if (c == 256) {
        let h = l + 1;
        for (; ; )
          if (h == o) {
            if (s == t.length)
              break;
            h = t[s++].to, o = s < t.length ? t[s].from : e;
          } else if (O[h] == 256)
            h++;
          else
            break;
        let d = r == 1, u = (h < e ? O[h] : i) == 1, f = d == u ? d ? 1 : 2 : i;
        for (let p = h, g = s, m = g ? t[g - 1].to : n; p > l; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : n), O[--p] = f;
        l = h;
      } else
        r = c, l++;
    }
  }
}
function pn(n, e, t, i, s, r, a) {
  let o = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
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
            let m = g.direction == He != !(f % 2);
            gn(n, m ? i + 1 : i, s, g.inner, g.from, g.to, a), l = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (h ? O[p] != o : O[p] == o))
            break;
          p++;
        }
      u ? pn(n, l, p, i + 1, s, u, a) : l < p && a.push(new ce(l, p, f)), l = p;
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
            let m = g.direction == He != !(f % 2);
            gn(n, m ? i + 1 : i, s, g.inner, g.from, g.to, a), l = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (h ? O[p - 1] != o : O[p - 1] == o))
            break;
          p--;
        }
      u ? pn(n, p, l, i + 1, s, u, a) : p < l && a.push(new ce(p, l, f)), l = p;
    }
}
function gn(n, e, t, i, s, r, a) {
  let o = e % 2 ? 2 : 1;
  Sc(n, s, r, i, o), kc(n, s, r, i, o), Cc(s, r, i, o), pn(n, s, r, e, t, i, a);
}
function Ac(n, e, t) {
  if (!n)
    return [new ce(0, 0, e == Hn ? 1 : 0)];
  if (e == He && !t.length && !wc.test(n))
    return ta(n.length);
  if (t.length)
    for (; n.length > O.length; )
      O[O.length] = 256;
  let i = [], s = e == He ? 0 : 1;
  return gn(n, s, s, t, 0, n.length, i), i;
}
function ta(n) {
  return [new ce(0, n, 0)];
}
let ia = "";
function Mc(n, e, t, i, s) {
  var r;
  let a = i.head - n.from, o = ce.find(e, a, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), l = e[o], c = l.side(s, t);
  if (a == c) {
    let u = o += s ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    l = e[o = u], a = l.side(!s, t), c = l.side(s, t);
  }
  let h = le(n.text, a, l.forward(s, t));
  (h < l.from || h > l.to) && (h = c), ia = n.text.slice(Math.min(a, h), Math.max(a, h));
  let d = o == (s ? e.length - 1 : 0) ? null : e[o + (s ? 1 : -1)];
  return d && h == c && d.level + (s ? 0 : 1) < l.level ? y.cursor(d.side(!s, t) + n.from, d.forward(s, t) ? 1 : -1, d.level) : y.cursor(h + n.from, l.forward(s, t) ? -1 : 1, l.level);
}
function Rc(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = Zr(n.charCodeAt(i));
    if (s == 1)
      return He;
    if (s == 2 || s == 4)
      return Hn;
  }
  return He;
}
const na = /* @__PURE__ */ w.define(), sa = /* @__PURE__ */ w.define(), ra = /* @__PURE__ */ w.define(), aa = /* @__PURE__ */ w.define(), mn = /* @__PURE__ */ w.define(), oa = /* @__PURE__ */ w.define(), la = /* @__PURE__ */ w.define(), Fn = /* @__PURE__ */ w.define(), zn = /* @__PURE__ */ w.define(), ca = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
}), ha = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
}), da = /* @__PURE__ */ w.define();
class Je {
  constructor(e, t, i, s, r, a = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = a;
  }
  map(e) {
    return e.empty ? this : new Je(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Je(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const It = /* @__PURE__ */ W.define({ map: (n, e) => n.map(e) }), ua = /* @__PURE__ */ W.define();
function ge(n, e, t) {
  let i = n.facet(aa);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const ue = /* @__PURE__ */ w.define({ combine: (n) => n.length ? n[0] : !0 });
let Ec = 0;
const Ke = /* @__PURE__ */ w.define({
  combine(n) {
    return n.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (n[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Fe {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Ke.of({ plugin: this, arg: void 0 }));
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
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: a } = t || {};
    return new Fe(Ec++, e, i, s, (o) => {
      let l = [];
      return a && l.push(xi.of((c) => {
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
    return Fe.define((i, s) => new e(i, s), t);
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
const fa = /* @__PURE__ */ w.define(), $n = /* @__PURE__ */ w.define(), xi = /* @__PURE__ */ w.define(), pa = /* @__PURE__ */ w.define(), Vn = /* @__PURE__ */ w.define(), Rt = /* @__PURE__ */ w.define(), ga = /* @__PURE__ */ w.define();
function Rs(n, e) {
  let t = n.state.facet(ga);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(n) : r), s = [];
  return M.spans(i, e.from, e.to, {
    point() {
    },
    span(r, a, o, l) {
      let c = r - e.from, h = a - e.from, d = s;
      for (let u = o.length - 1; u >= 0; u--, l--) {
        let f = o[u].spec.bidiIsolate, p;
        if (f == null && (f = Rc(e.text, c, h)), l > 0 && d.length && (p = d[d.length - 1]).to == c && p.direction == f)
          p.to = h, d = p.inner;
        else {
          let g = { from: c, to: h, direction: f, inner: [] };
          d.push(g), d = g.inner;
        }
      }
    }
  }), s;
}
const ma = /* @__PURE__ */ w.define();
function ba(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(ma)) {
    let a = r(n);
    a && (a.left != null && (e = Math.max(e, a.left)), a.right != null && (t = Math.max(t, a.right)), a.top != null && (i = Math.max(i, a.top)), a.bottom != null && (s = Math.max(s, a.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const ct = /* @__PURE__ */ w.define();
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
    for (let s = 0, r = 0, a = 0; ; ) {
      let o = s < e.length ? e[s].fromB : 1e9, l = r < t.length ? t[r] : 1e9, c = Math.min(o, l);
      if (c == 1e9)
        break;
      let h = c + a, d = c, u = h;
      for (; ; )
        if (r < t.length && t[r] <= d) {
          let f = t[r + 1];
          r += 2, d = Math.max(d, f);
          for (let p = s; p < e.length && e[p].fromB <= d; p++)
            a = e[p].toA - e[p].toB;
          u = Math.max(u, f + a);
        } else if (s < e.length && e[s].fromB <= d) {
          let f = e[s++];
          d = Math.max(d, f.toB), u = Math.max(u, f.toA), a = f.toA - f.toB;
        } else
          break;
      i.push(new Q(h, u, c, d));
    }
    return i;
  }
}
class oi {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = H.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, a, o, l) => s.push(new Q(r, a, o, l))), this.changedRanges = s;
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
const Tc = [];
class P {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Tc;
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
      t && dc(this.dom, t);
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
class yi extends P {
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
    let t = this.dom, i = null, s, r = e?.node == t ? e : null, a = 0;
    for (let o of this.children) {
      if (o.sync(e), a += o.length + o.breakAfter, s = i ? i.nextSibling : t.firstChild, r && s != o.dom && (r.written = !0), o.dom.parentNode == t)
        for (; s && s != o.dom; )
          s = Es(s);
      else
        t.insertBefore(o.dom, s);
      i = o.dom;
    }
    for (s = i ? i.nextSibling : t.firstChild, r && s && (r.written = !0); s; )
      s = Es(s);
    this.length = a;
  }
}
function Es(n) {
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
      let t = P.get(e);
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
        let a = i.children[s++];
        if (a instanceof be)
          t.push(s), i = a, s = 0;
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
    let i, s = -1, r, a = -1;
    if (this.blockTiles((o, l) => {
      let c = l + o.length;
      if (e >= l && e <= c) {
        if (o.isWidget() && t >= -1 && t <= 1) {
          if (o.flags & 32)
            return !0;
          o.flags & 16 && (i = void 0);
        }
        (l < e || e == c && (t < -1 ? o.length : o.covers(1))) && (!i || !o.isWidget() && i.isWidget()) && (i = o, s = e - l), (c > e || e == l && (t > 1 ? o.length : o.covers(-1))) && (!r || !o.isWidget() && r.isWidget()) && (r = o, a = e - l);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: s } : { tile: r, offset: a };
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
class et extends yi {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let s = new et(t || document.createElement("div"), e);
    return (!t || !i) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let s = null, r = -1, a = null, o = -1;
    function l(h, d) {
      for (let u = 0, f = 0; u < h.children.length && f <= d; u++) {
        let p = h.children[u], g = f + p.length;
        g >= d && (p.isComposite() ? l(p, d - f) : (!a || a.isHidden && (t > 0 || i && Dc(a, p))) && (g > d || p.flags & 32) ? (a = p, o = d - f) : (f < d || p.flags & 16 && !p.isHidden) && (s = p, r = d - f)), f = g;
      }
    }
    l(this, e);
    let c = (t < 0 ? s : a) || s || a;
    return c ? { tile: c, offset: c == s ? r : o } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : Oc(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: s, offset: r } = i;
      if (this.dom.contains(s.dom))
        return s.isText() ? new te(s.dom, Math.min(s.dom.nodeValue.length, r)) : s.domPosFor(r, s.flags & 16 ? 1 : s.flags & 32 ? -1 : t);
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
function Oc(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Ut(e);
  return t[t.length - 1] || null;
}
function Dc(n, e) {
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
    let s = e, r = e, a = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? x.chrome || x.gecko || (e ? (s--, a = 1) : r < i && (r++, a = -1)) : t < 0 ? s-- : r < i && r++;
    let o = kt(this.dom, s, r).getClientRects();
    if (!o.length)
      return null;
    let l = o[(a ? a < 0 : t >= 0) ? 0 : o.length - 1];
    return x.safari && !a && l.width == 0 && (l = Array.prototype.find.call(o, (c) => c.width) || l), a ? ai(l, a < 0) : l || null;
  }
  static of(e, t) {
    let i = new Ie(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class ze extends P {
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
      return ai(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), a = null;
      if (!r.length)
        return null;
      let o = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let l = o ? r.length - 1 : 0; a = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || a.top < a.bottom); l += o ? -1 : 1)
        ;
      return ai(a, !o);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return R.empty;
    let { root: e } = this;
    if (!e)
      return R.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, s, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new ze(r, i, e, s);
  }
}
class li extends P {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return R.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Lc {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: s, index: r, beforeBreak: a, parents: o } = this;
    for (; e || t > 0; )
      if (s.isComposite())
        if (a) {
          if (!e)
            break;
          i && i.break(), e--, a = !1;
        } else if (r == s.children.length) {
          if (!e && !o.length)
            break;
          i && i.leave(s), a = !!s.breakAfter, { tile: s, index: r } = o.pop(), r++;
        } else {
          let l = s.children[r], c = l.breakAfter;
          (t > 0 ? l.length <= e : l.length < e) && (!i || i.skip(l, 0, l.length) !== !1 || !l.isComposite) ? (a = !!c, r++, e -= l.length) : (o.push({ tile: s, index: r }), s = l, r = 0, i && l.isComposite() && i.enter(l));
        }
      else if (r == s.length)
        a = !!s.breakAfter, { tile: s, index: r } = o.pop(), r++;
      else if (e) {
        let l = Math.min(e, s.length - r);
        i && i.skip(s, r, r + l), e -= l, r += l;
      } else
        break;
    return this.tile = s, this.index = r, this.beforeBreak = a, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Bc {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = s;
  }
}
class Pc {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, s) {
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
      a.append(s || Ie.of(e, (r = this.cache.find(Ie)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Oi(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let s = i;
    for (let o = t.marks.length - 1; o >= 0; o--) {
      let l = t.marks[o], c = s.lastChild;
      if (c instanceof _ && c.mark.eq(l.mark))
        c.dom != l.dom && c.setDOM(Oi(l.dom)), s = c;
      else {
        if (this.cache.reused.get(l)) {
          let d = P.get(l.dom);
          d && d.setDOM(Oi(l.dom));
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
    let r = P.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let a = new Ie(e.text, e.text.nodeValue);
    a.flags |= 8, this.pos = e.range.toB, s.append(a);
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
    e || (e = xa);
    let s = et.start(e, t || ((i = this.cache.find(et)) === null || i === void 0 ? void 0 : i.dom), !!t);
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
      let a = e[r], o;
      if (t > 0 && (o = s.lastChild) && o instanceof _ && o.mark.eq(a))
        s = o, t--;
      else {
        let l = _.of(a, (i = this.cache.find(_, (c) => c.mark.eq(a))) === null || i === void 0 ? void 0 : i.dom);
        s.append(l), s = l, t = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !Ts(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(x.ios && Ts(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Di,
        0,
        32
        /* TileFlag.After */
      ) || new ze(
        Di.toDOM(),
        0,
        Di,
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
        let t = e.rank * 102 + e.value.rank, i = new Bc(e.from, e.to, e.value, t), s = this.wrappers.length;
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
      li,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new li(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class Ic {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: r, done: a } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, a)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let o = this.textOff = Math.min(e, s.length);
      return r ? null : s.slice(0, o);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const ci = [ze, et, Ie, _, li, be, vi];
for (let n = 0; n < ci.length; n++)
  ci[n].bucket = n;
class Nc {
  constructor(e) {
    this.view = e, this.buckets = ci.map(() => []), this.index = ci.map(() => 0), this.reused = /* @__PURE__ */ new Map();
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
    let s = e.bucket, r = this.buckets[s], a = this.index[s];
    for (let o = r.length - 1; o >= 0; o--) {
      let l = (o + a) % r.length, c = r[l];
      if ((!t || t(c)) && !this.reused.has(c))
        return r.splice(l, 1), l < a && this.index[s]--, this.reused.set(c, i), c;
    }
    return null;
  }
  findWidget(e, t, i) {
    let s = this.buckets[0];
    if (s.length)
      for (let r = 0, a = 0; ; r++) {
        if (r == s.length) {
          if (a)
            return null;
          a = 1, r = 0;
        }
        let o = s[r];
        if (!this.reused.has(o) && (a == 0 ? o.widget.compare(e) : o.widget.constructor == e.constructor && e.updateDOM(o.dom, this.view, o.widget)))
          return s.splice(r, 1), r < this.index[0] && this.index[0]--, o.widget == e && o.length == t && (o.flags & 497) == i ? (this.reused.set(
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
class Wc {
  constructor(e, t, i, s, r) {
    this.view = e, this.decorations = s, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new Nc(e), this.text = new Ic(e.state.doc), this.builder = new Pc(this.cache, new vi(e, e.contentDOM), M.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new Lc(t), this.reuseWalker = {
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
    for (let s = 0, r = 0, a = 0; ; ) {
      let o = a < e.length ? e[a++] : null, l = o ? o.fromA : this.old.root.length;
      if (l > s) {
        let c = l - s;
        this.preserve(c, !a, !o), s = l, r += c;
      }
      if (!o)
        break;
      t && o.fromA <= t.range.fromA && o.toA >= t.range.toA ? (this.forward(o.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, o.toA), this.emit(t.range.toB, o.toB)) : (this.forward(o.fromA, o.toA), this.emit(r, o.toB)), r = o.toB, s = o.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let s = Fc(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (a, o, l) => {
        if (a.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(l - o);
          else {
            let c = l > 0 || o < a.length ? ze.of(a.widget, this.view, l - o, a.flags & 496, this.cache.maybeReuse(a)) : this.cache.reuse(a);
            c.flags & 256 ? (c.flags &= -2, this.builder.addBlockWidget(c)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(c, s, r), r = s.length);
          }
        else if (a.isText())
          this.builder.ensureLine(null), !o && l == a.length && !this.cache.reused.has(a) ? this.builder.addText(a.text, s, r, this.cache.reuse(a)) : (this.cache.add(a), this.builder.addText(a.text.slice(o, l), s, r)), r = s.length;
        else if (a.isLine())
          a.flags &= -2, this.cache.reused.set(
            a,
            1
            /* Reused.Full */
          ), this.builder.addLine(a);
        else if (a instanceof li)
          this.cache.add(a);
        else if (a instanceof _)
          this.builder.ensureLine(null), this.builder.addMark(a, s, r), this.cache.reused.set(
            a,
            1
            /* Reused.Full */
          ), r = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (a) => {
        a.isLine() ? this.builder.addLineStart(a.attrs, this.cache.maybeReuse(a)) : (this.cache.add(a), a instanceof _ && s.unshift(a.mark)), this.openWidget = !1;
      },
      leave: (a) => {
        a.isLine() ? s.length && (s.length = r = 0) : a instanceof _ && (s.shift(), r = Math.min(r, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, s = this.builder, r = 0, a = M.spans(this.decorations, e, t, {
      point: (o, l, c, h, d, u) => {
        if (c instanceof je) {
          if (this.disallowBlockEffectsFor[u]) {
            if (c.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (l > this.view.state.doc.lineAt(o).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = h.length, d > h.length)
            s.continueWidget(l - o);
          else {
            let f = c.widget || (c.block ? tt.block : tt.inline), p = jc(c), g = this.cache.findWidget(f, l - o, p) || ze.of(f, this.view, l - o, p);
            c.block ? (c.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(g)) : (s.ensureLine(i), s.addInlineWidget(g, h, d));
          }
          i = null;
        } else
          i = Hc(i, c);
        l > o && this.text.skip(l - o);
      },
      span: (o, l, c, h) => {
        for (let d = o; d < l; ) {
          let u = this.text.next(Math.min(512, l - d));
          u == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), d++) : (s.ensureLine(i), s.addText(u, c, d == o ? h : c.length), d += u.length), i = null;
        }
      }
    });
    s.addLineStartIfNotCovered(i), this.openWidget = a > r, this.openMarks = a;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let s = e.parentNode; ; s = s.parentNode) {
      let r = P.get(s);
      if (s == this.view.contentDOM)
        break;
      r instanceof _ ? t.push(r) : r?.isLine() ? i = r : r instanceof be || (s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new et(s, xa) : i || t.push(_.of(new At({ tagName: s.nodeName.toLowerCase(), attributes: uc(s) }), s)));
    }
    return { line: i, marks: t };
  }
}
function Ts(n, e) {
  let t = (i) => {
    for (let s of i.children)
      if ((e ? s.isText() : s.length) || t(s))
        return !0;
    return !1;
  };
  return t(n);
}
function jc(n) {
  let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  return n.block && (e |= 256), e;
}
const xa = { class: "cm-line" };
function Hc(n, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (n || (n = { class: "cm-line" }), t && Wn(t, n), i && (n.class += " " + i)), n;
}
function Fc(n) {
  let e = [];
  for (let t = n.parents.length; t > 1; t--) {
    let i = t == n.parents.length ? n.tile : n.parents[t].tile;
    i instanceof _ && e.push(i.mark);
  }
  return e;
}
function Oi(n) {
  let e = P.get(n);
  return e && e.setDOM(n.cloneNode()), n;
}
class tt extends bi {
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
const Di = /* @__PURE__ */ new class extends bi {
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
class Os {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = j.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new vi(e, e.contentDOM), this.updateInner([new Q(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: d }) => d < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !Yc(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? $c(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: h, to: d } = this.hasComposition;
      i = new Q(h, d, e.changes.mapPos(h, -1), e.changes.mapPos(d, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (x.ie || x.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let a = this.decorations, o = this.blockWrappers;
    this.updateDeco();
    let l = Kc(a, this.decorations, e.changes);
    l.length && (i = Q.extendWithRanges(i, l));
    let c = Uc(o, this.blockWrappers, e.changes);
    return c.length && (i = Q.extendWithRanges(i, c)), r && !i.some((h) => h.fromA <= r.range.fromA && h.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let a = this.tile, o = new Wc(this.view, a, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && P.get(t.text) && o.cache.reused.set(
          P.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = o.run(e, t), bn(a, o.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = x.chrome || x.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof Li && s.push(r.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(ua) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, r = s == i, a = !r && !(this.view.state.facet(ue) || i.tabIndex > -1) && ft(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(r || t || a))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, c, h;
    if (l.empty ? h = c = this.inlineDOMNearPos(l.anchor, l.assoc || 1) : (h = this.inlineDOMNearPos(l.head, l.head == l.from ? 1 : -1), c = this.inlineDOMNearPos(l.anchor, l.anchor == l.from ? 1 : -1)), x.gecko && l.empty && !this.hasComposition && zc(c)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => c.node.insertBefore(u, c.node.childNodes[c.offset] || null)), c = h = new te(u, 0), o = !0;
    }
    let d = this.view.observer.selectionRange;
    (o || !d.focusNode || (!pt(c.node, c.offset, d.anchorNode, d.anchorOffset) || !pt(h.node, h.offset, d.focusNode, d.focusOffset)) && !this.suppressWidgetCursorChange(d, l)) && (this.view.observer.ignore(() => {
      x.android && x.chrome && i.contains(d.focusNode) && _c(d.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = St(this.view.root);
      if (u) if (l.empty) {
        if (x.gecko) {
          let f = Vc(c.node, c.offset);
          if (f && f != 3) {
            let p = (f == 1 ? Xr : Jr)(c.node, c.offset);
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
      a && this.view.root.activeElement == i && (i.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(c, h)), this.impreciseAnchor = c.precise ? null : new te(d.anchorNode, d.anchorOffset), this.impreciseHead = h.precise ? null : new te(d.focusNode, d.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && pt(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = St(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
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
        return s;
      for (; r && !P.get(r); )
        r = r.nextSibling;
      if (!r)
        return s + i.length;
      for (let a = 0, o = s; ; a++) {
        let l = i.children[a];
        if (l.dom == r)
          return o;
        o += l.length + l.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? s + t : s + (t ? i.length : 0) : s;
  }
  domAtPos(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(s, t);
  }
  inlineDOMNearPos(e, t) {
    let i, s = -1, r = !1, a, o = -1, l = !1;
    return this.tile.blockTiles((c, h) => {
      if (c.isWidget()) {
        if (c.flags & 32 && h >= e)
          return !0;
        c.flags & 16 && (r = !0);
      } else {
        let d = h + c.length;
        if (h <= e && (i = c, s = e - h, r = d < e), d >= e && !a && (a = c, o = e - h, l = h > e), h > e && a)
          return !0;
      }
    }), !i && !a ? this.domAtPos(e, t) : (r && a ? i = null : l && i && (a = null), i && t < 0 || !a ? i.domIn(s, t) : a.domIn(o, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: s } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof Li ? null : i.coordsInWidget(s, t, !0) : i.coordsIn(s, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function s(r, a) {
      if (r.isComposite())
        for (let o of r.children) {
          if (o.length >= a) {
            let l = s(o, a);
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
        let l = kt(r.dom, a, o).getClientRects();
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
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, a = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1, l = this.view.textDirection == N.LTR, c = 0, h = (d, u, f) => {
      for (let p = 0; p < d.children.length && !(u > s); p++) {
        let g = d.children[p], m = u + g.length, b = g.dom.getBoundingClientRect(), { height: v } = b;
        if (f && !p && (c += b.top - f.top), g instanceof be)
          m > i && h(g, u, b);
        else if (u >= i && (c > 0 && t.push(-c), t.push(v + c), c = 0, a)) {
          let C = g.dom.lastChild, L = C ? Ut(C) : [];
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
          let h = Ut(c.dom);
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
    let t = document.createElement("div"), i, s, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let a = Ut(t.firstChild)[0];
      i = t.getBoundingClientRect().height, s = a && a.width ? a.width / 27 : 7, r = a && a.height ? a.height : i, t.remove();
    }), { lineHeight: i, charWidth: s, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], a = r ? r.from - 1 : this.view.state.doc.length;
      if (a > i) {
        let o = (t.lineBlockAt(a).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(j.replace({
          widget: new Li(o),
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
    let e = 1, t = this.view.state.facet(xi).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, s = this.view.state.facet(Vn).map((r, a) => {
      let o = typeof r == "function";
      return o && (i = !0), o ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, t.push(M.join(s))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(pa).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(da))
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
    let a = ba(this.view), o = {
      left: s.left - a.left,
      top: s.top - a.top,
      right: s.right + a.right,
      bottom: s.bottom + a.bottom
    }, { offsetWidth: l, offsetHeight: c } = this.view.scrollDOM;
    if (gc(this.view.scrollDOM, o, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, c), -c), this.view.textDirection == N.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (s.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || s.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(i.head, 1);
      h && h.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    bn(this.tile);
  }
}
function bn(n, e) {
  let t = e?.get(n);
  if (t != 1) {
    t == null && n.destroy();
    for (let i of n.children)
      bn(i, e);
  }
}
function zc(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function ya(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Xr(t.focusNode, t.focusOffset), s = Jr(t.focusNode, t.focusOffset), r = i || s;
  if (s && i && s.node != i.node) {
    let o = P.get(s.node);
    if (!o || o.isText() && o.text != s.node.nodeValue)
      r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let l = P.get(i.node);
      !l || l.isText() && l.text != i.node.nodeValue || (r = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let a = e - r.offset;
  return { from: a, to: a + r.node.nodeValue.length, node: r.node };
}
function $c(n, e, t) {
  let i = ya(n, t);
  if (!i)
    return null;
  let { node: s, from: r, to: a } = i, o = s.nodeValue;
  if (/[\n\r]/.test(o) || n.state.doc.sliceString(i.from, i.to) != o)
    return null;
  let l = e.invertedDesc;
  return { range: new Q(l.mapPos(r), l.mapPos(a), r, a), text: s };
}
function Vc(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let qc = class {
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
function Kc(n, e, t) {
  let i = new qc();
  return M.compare(n, e, t, i), i.changes;
}
class Gc {
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
function Uc(n, e, t) {
  let i = new Gc();
  return M.compare(n, e, t, i), i.changes;
}
function _c(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Yc(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = !0);
  }), t;
}
class Li extends bi {
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
function Xc(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return y.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let a = r, o = r;
  t < 0 ? a = le(s.text, r, !1) : o = le(s.text, r);
  let l = i(s.text.slice(a, o));
  for (; a > 0; ) {
    let c = le(s.text, a, !1);
    if (i(s.text.slice(c, a)) != l)
      break;
    a = c;
  }
  for (; o < s.length; ) {
    let c = le(s.text, o);
    if (i(s.text.slice(o, c)) != l)
      break;
    o = c;
  }
  return y.range(a + s.from, o + s.from);
}
function Jc(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let o = n.viewState.heightOracle.textHeight, l = Math.floor((s - t.top - (n.defaultLineHeight - o) * 0.5) / o);
    r += l * n.viewState.heightOracle.lineLength;
  }
  let a = n.state.sliceDoc(t.from, t.to);
  return t.from + ac(a, r, n.state.tabSize);
}
function xn(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let s;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!s || r.type == $.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (s = r);
      }
    }
    return s || i;
  }
  return i;
}
function Qc(n, e, t, i) {
  let s = xn(n, e.head, e.assoc || -1), r = !i || s.type != $.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let a = n.dom.getBoundingClientRect(), o = n.textDirectionAt(s.from), l = n.posAtCoords({
      x: t == (o == N.LTR) ? a.right - 1 : a.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (l != null)
      return y.cursor(l, t ? -1 : 1);
  }
  return y.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Ds(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), a = n.textDirectionAt(s.from);
  for (let o = e, l = null; ; ) {
    let c = Mc(s, r, a, o, t), h = ia;
    if (!c) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return o;
      h = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), c = n.visualLineSide(s, !t);
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
function Zc(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let a = i(r);
    return s == pe.Space && (s = a), s == a;
  };
}
function eh(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return y.cursor(s, e.assoc);
  let a = e.goalColumn, o, l = n.contentDOM.getBoundingClientRect(), c = n.coordsAtPos(s, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), h = n.documentTop;
  if (c)
    a == null && (a = c.left - l.left), o = r < 0 ? c.top : c.bottom;
  else {
    let p = n.viewState.lineBlockAt(s);
    a == null && (a = Math.min(l.right - l.left, n.defaultCharacterWidth * (s - p.from))), o = (r < 0 ? p.top : p.bottom) + h;
  }
  let d = l.left + a, u = n.viewState.heightOracle.textHeight >> 1, f = i ?? u;
  for (let p = 0; ; p += u) {
    let g = o + (f + p) * r, m = yn(n, { x: d, y: g }, !1, r);
    if (t ? g > l.bottom : g < l.top)
      return y.cursor(m.pos, m.assoc);
    let b = n.coordsAtPos(m.pos, m.assoc), v = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? v > o : v < o))
      return y.cursor(m.pos, m.assoc, void 0, a);
  }
}
function gt(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (r, a, o) => {
        if (e > r && e < a) {
          let l = i || t || (e - r < a - e ? -1 : 1);
          e = l < 0 ? r : a, i = l;
        }
      });
    if (!i)
      return e;
  }
}
function va(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let s = e.ranges[i], r = null;
    if (s.empty) {
      let a = gt(n, s.from, 0);
      a != s.from && (r = y.cursor(a, -1));
    } else {
      let a = gt(n, s.from, -1), o = gt(n, s.to, 1);
      (a != s.from || o != s.to) && (r = y.range(s.from == s.anchor ? a : o, s.from == s.head ? a : o));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function Bi(n, e, t) {
  let i = gt(n.state.facet(Rt).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : y.cursor(i, i < t.from ? 1 : -1);
}
class oe {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function yn(n, e, t, i) {
  let s = n.contentDOM.getBoundingClientRect(), r = s.top + n.viewState.paddingTop, { x: a, y: o } = e, l = o - r, c;
  for (; ; ) {
    if (l < 0)
      return new oe(0, 1);
    if (l > n.viewState.docHeight)
      return new oe(n.state.doc.length, -1);
    if (c = n.elementAtHeight(l), i == null)
      break;
    if (c.type == $.Text) {
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
    if (c.type == $.Text) {
      let d = Jc(n, s, c, a, o);
      return new oe(d, d == c.from ? 1 : -1);
    }
  }
  if (c.type != $.Text)
    return l < (c.top + c.bottom) / 2 ? new oe(c.from, 1) : new oe(c.to, -1);
  let h = n.docView.lineAt(c.from, 2);
  return (!h || h.length != c.length) && (h = n.docView.lineAt(c.from, -2)), new th(n, a, o, n.textDirectionAt(c.from)).scanTile(h, c.from);
}
class th {
  constructor(e, t, i, s) {
    this.view = e, this.x = t, this.y = i, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[ce.find(s, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: s } = this.bidiSpansAt(e);
    return s[ce.find(s, e - i.from, -1, t)].dir;
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
    let s = 0, r = e.length - 1, a = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[r]), l, c, h = -1, d = 1e9, u;
    e: for (; s < r; ) {
      let p = r - s, g = s + r >> 1;
      t: if (a.has(g)) {
        let b = s + Math.floor(Math.random() * p);
        for (let v = 0; v < p; v++) {
          if (!a.has(b)) {
            g = b;
            break t;
          }
          b++, b == r && (b = s);
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
            C == -1 && (!o || this.baseDirAt(e[g], 1)) ? r = g : C == 1 && (!o || this.baseDirAt(e[g + 1], -1)) && (s = g + 1);
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
    let s = this.scan(i, (r) => {
      let a = i[r] - t, o = i[r + 1] - t;
      return kt(e.dom, a, o).getClientRects();
    });
    return s.after ? new oe(i[s.i + 1], -1) : new oe(i[s.i], 1);
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
    let s = this.scan(i, (o) => {
      let l = e.children[o];
      return l.flags & 48 ? null : (l.dom.nodeType == 1 ? l.dom : kt(l.dom, 0, l.length)).getClientRects();
    }), r = e.children[s.i], a = i[s.i];
    return r.isText() ? this.scanText(r, a) : r.isComposite() ? this.scanTile(r, a) : s.after ? new oe(i[s.i + 1], -1) : new oe(a, 1);
  }
}
const qe = "￿";
class ih {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(T.lineSeparator);
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
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let a = P.get(s), o = s.nextSibling;
      if (o == t) {
        a?.breakAfter && !o && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let l = P.get(o);
      (a && l ? a.breakAfter : (a ? a.breakAfter : ri(s)) || ri(o) && (s.nodeName != "BR" || a?.isWidget()) && this.text.length > r) && !sh(o, t) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, a = 1, o;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), a = this.lineSeparator.length) : (o = s.exec(t)) && (r = o.index, a = o[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
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
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (nh(e, i.node, i.offset) ? t : 0));
  }
}
function nh(n, e, t) {
  for (; ; ) {
    if (!e || t < xe(e))
      return !1;
    if (e == n)
      return !0;
    t = Te(e) + 1, e = e.parentNode;
  }
}
function sh(n, e) {
  let t;
  for (; !(n == e || !n); n = n.nextSibling) {
    let i = P.get(n);
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
class Ls {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class rh {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: a } = e.docView, o = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = wa(e.docView.tile, t, i, 0))) {
      let l = r || a ? [] : oh(e), c = new ih(l, e);
      c.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = c.text, this.newSel = lh(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, c = r && r.node == l.focusNode && r.offset == l.focusOffset || !un(e.contentDOM, l.focusNode) ? o.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = a && a.node == l.anchorNode && a.offset == l.anchorOffset || !un(e.contentDOM, l.anchorNode) ? o.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), d = e.viewport;
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
function wa(n, e, t, i) {
  if (n.isComposite()) {
    let s = -1, r = -1, a = -1, o = -1;
    for (let l = 0, c = i, h = i; l < n.children.length; l++) {
      let d = n.children[l], u = c + d.length;
      if (c < e && u > t)
        return wa(d, e, t, c);
      if (u >= e && s == -1 && (s = l, r = c), c > t && d.dom.parentNode == n.dom) {
        a = l, o = h;
        break;
      }
      h = u, c = u + d.breakAfter;
    }
    return {
      from: r,
      to: o < 0 ? i + n.length : o,
      startDOM: (s ? n.children[s - 1].dom.nextSibling : null) || n.dom.firstChild,
      endDOM: a < n.children.length && a >= 0 ? n.children[a].dom : null
    };
  } else return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null;
}
function Sa(n, e) {
  let t, { newSel: i } = e, { state: s } = n, r = s.selection.main, a = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, c = r.from, h = null;
    (a === 8 || x.android && e.text.length < l - o) && (c = r.to, h = "end");
    let d = s.doc.sliceString(o, l, qe), u, f;
    !r.empty && r.from >= o && r.to <= l && (e.typeOver || d != e.text) && d.slice(0, r.from - o) == e.text.slice(0, r.from - o) && d.slice(r.to - o) == e.text.slice(u = e.text.length - (d.length - (r.to - o))) ? t = {
      from: r.from,
      to: r.to,
      insert: R.of(e.text.slice(r.from - o, u).split(qe))
    } : (f = ka(d, e.text, c - o, h)) && (x.chrome && a == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == qe + qe && f.toB--, t = {
      from: o + f.from,
      to: o + f.toA,
      insert: R.of(e.text.slice(f.from, f.toB).split(qe))
    });
  } else i && (!n.hasFocus && s.facet(ue) || hi(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((x.mac || x.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: R.of([t.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(r.from).to < r.to && n.docView.lineHasWidget(r.to) && n.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: s.toText(n.inputState.insertingText)
  } : x.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: R.of([" "]) }), t)
    return qn(n, t, i, a);
  if (i && !hi(i, r)) {
    let o = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = !0), l = n.inputState.lastSelectionOrigin, l == "select.pointer" && (i = va(s.facet(Rt).map((c) => c(n)), i))), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function qn(n, e, t, i = -1) {
  if (x.ios && n.inputState.flushIOSKey(e))
    return !0;
  let s = n.state.selection.main;
  if (x.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Xe(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && Xe(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && Xe(n.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let a, o = () => a || (a = ah(n, e, t));
  return n.state.facet(oa).some((l) => l(n, e.from, e.to, r, o)) || n.dispatch(o()), !0;
}
function ah(n, e, t) {
  let i, s = n.state, r = s.selection.main, a = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let l = e.from < r.from ? -1 : 1, c = l < 0 ? r.from : r.to, h = gt(s.facet(Rt).map((d) => d(n)), c, l);
    e.from == h && (a = h);
  }
  if (a > -1)
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
      let h = n.state.sliceDoc(e.from, e.to), d, u = t && ya(n, t.main.head);
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
  let o = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: o, scrollIntoView: !0 });
}
function ka(n, e, t, i) {
  let s = Math.min(n.length, e.length), r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && n.length == e.length)
    return null;
  let a = n.length, o = e.length;
  for (; a > 0 && o > 0 && n.charCodeAt(a - 1) == e.charCodeAt(o - 1); )
    a--, o--;
  if (i == "end") {
    let l = Math.max(0, r - Math.min(a, o));
    t -= a + l - r;
  }
  if (a < r && n.length < e.length) {
    let l = t <= r && t >= a ? r - t : 0;
    r -= l, o = r + (o - a), a = r;
  } else if (o < r) {
    let l = t <= r && t >= o ? r - t : 0;
    r -= l, a = r + (a - o), o = r;
  }
  return { from: r, toA: a, toB: o };
}
function oh(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new Ls(t, i)), (s != t || r != i) && e.push(new Ls(s, r))), e;
}
function lh(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null;
}
function hi(n, e) {
  return e.head == n.main.head && e.anchor == n.main.anchor;
}
class ch {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, x.safari && e.contentDOM.addEventListener("input", () => null), x.gecko && Ch(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !bh(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
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
    let t = hh(e), i = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let a = !t[r].handlers.length, o = i[r];
        o && a != !o.handlers.length && (s.removeEventListener(r, this.handleEvent), o = null), o || s.addEventListener(r, this.handleEvent, { passive: a });
      }
    for (let r in i)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Aa.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), x.android && x.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return x.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = Ca.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || dh.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
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
function Bs(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      ge(t.state, s);
    }
  };
}
function hh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec, r = s && s.plugin.domEventHandlers, a = s && s.plugin.domEventObservers;
    if (r)
      for (let o in r) {
        let l = r[o];
        l && t(o).handlers.push(Bs(i.value, l));
      }
    if (a)
      for (let o in a) {
        let l = a[o];
        l && t(o).observers.push(Bs(i.value, l));
      }
  }
  for (let i in ie)
    t(i).handlers.push(ie[i]);
  for (let i in Y)
    t(i).observers.push(Y[i]);
  return e;
}
const Ca = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], dh = "dthko", Aa = [16, 17, 18, 20, 91, 92, 224, 225], Nt = 6;
function Wt(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function uh(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class fh {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Ur(e.contentDOM), this.atoms = e.state.facet(Rt).map((a) => a(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(T.allowMultipleSelections) && ph(e, t), this.dragging = mh(e, t) && Ea(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && uh(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, s = 0, r = 0, a = this.view.win.innerWidth, o = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: a } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: o } = this.scrollParents.y.getBoundingClientRect());
    let l = ba(this.view);
    e.clientX - l.left <= s + Nt ? t = -Wt(s - e.clientX) : e.clientX + l.right >= a - Nt && (t = Wt(e.clientX - a)), e.clientY - l.top <= r + Nt ? i = -Wt(r - e.clientY) : e.clientY + l.bottom >= o - Nt && (i = Wt(e.clientY - o)), this.setScrollSpeed(t, i);
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
    let { view: t } = this, i = va(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function ph(n, e) {
  let t = n.state.facet(na);
  return t.length ? t[0](e) : x.mac ? e.metaKey : e.ctrlKey;
}
function gh(n, e) {
  let t = n.state.facet(sa);
  return t.length ? t[0](e) : x.mac ? !e.altKey : !e.ctrlKey;
}
function mh(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = St(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let a = s[r];
    if (a.left <= e.clientX && a.right >= e.clientX && a.top <= e.clientY && a.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function bh(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = P.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const ie = /* @__PURE__ */ Object.create(null), Y = /* @__PURE__ */ Object.create(null), Ma = x.ie && x.ie_version < 15 || x.ios && x.webkit_version < 604;
function xh(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Ra(n, t.value);
  }, 50);
}
function wi(n, e, t) {
  for (let i of n.facet(e))
    t = i(t, n);
  return t;
}
function Ra(n, e) {
  e = wi(n.state, Fn, e);
  let { state: t } = n, i, s = 1, r = t.toText(e), a = r.lines == t.selection.ranges.length;
  if (vn != null && t.selection.ranges.every((l) => l.empty) && vn == r.toString()) {
    let l = -1;
    i = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == l)
        return { range: c };
      l = h.from;
      let d = t.toText((a ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: d },
        range: y.cursor(c.from + d.length)
      };
    });
  } else a ? i = t.changeByRange((l) => {
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
  for (let i of n.state.facet(ra))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = vh(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new fh(n, e, t, i)), i && n.observer.ignore(() => {
      _r(n.contentDOM);
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
function Ps(n, e, t, i) {
  if (i == 1)
    return y.cursor(e, t);
  if (i == 2)
    return Xc(n.state, e, t);
  {
    let s = n.docView.lineAt(e, t), r = n.state.doc.lineAt(s ? s.posAtEnd : e), a = s ? s.posAtStart : r.from, o = s ? s.posAtEnd : r.to;
    return o < n.state.doc.length && o == r.to && o++, y.range(a, o);
  }
}
const yh = x.ie && x.ie_version <= 11;
let Is = null, Ns = 0, Ws = 0;
function Ea(n) {
  if (!yh)
    return n.detail;
  let e = Is, t = Ws;
  return Is = n, Ws = Date.now(), Ns = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Ns + 1) % 3 : 1;
}
function vh(n, e) {
  let t = n.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = Ea(e), s = n.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, a, o) {
      let l = n.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), c, h = Ps(n, l.pos, l.assoc, i);
      if (t.pos != l.pos && !a) {
        let d = Ps(n, t.pos, t.assoc, i), u = Math.min(d.from, h.from), f = Math.max(d.to, h.to);
        h = u < h.from ? y.range(u, f, h.assoc) : y.range(f, u, h.assoc);
      }
      return a ? s.replaceRange(s.main.extend(h.from, h.to, h.assoc)) : o && i == 1 && s.ranges.length > 1 && (c = wh(s, l.pos)) ? c : o ? s.addRange(h) : y.create([h]);
    }
  };
}
function wh(n, e) {
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
      let r = s.posAtStart, a = r + s.length;
      (r >= t.to || a <= t.from) && (t = y.range(r, a));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", wi(n.state, zn, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
ie.dragend = (n) => (n.inputState.draggedContent = null, !1);
function js(n, e, t, i) {
  if (t = wi(n.state, Fn, t), !t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = n.inputState, a = i && r && gh(n, e) ? { from: r.from, to: r.to } : null, o = { from: s, insert: t }, l = n.state.changes(a ? [a, o] : o);
  n.focus(), n.dispatch({
    changes: l,
    selection: { anchor: l.mapPos(s, -1), head: l.mapPos(s, 1) },
    userEvent: a ? "move.drop" : "input.drop"
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
      ++s == t.length && js(n, e, i.filter((a) => a != null).join(n.state.lineBreak), !1);
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
      return js(n, e, i, !0), !0;
  }
  return !1;
};
ie.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = Ma ? null : e.clipboardData;
  return t ? (Ra(n, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (xh(n), !1);
};
function Sh(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function kh(n) {
  let e = [], t = [], i = !1;
  for (let s of n.selection.ranges)
    s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let a = n.doc.lineAt(r);
      a.number > s && (e.push(a.text), t.push({ from: a.from, to: Math.min(n.doc.length, a.to + 1) })), s = a.number;
    }
    i = !0;
  }
  return { text: wi(n, zn, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let vn = null;
ie.copy = ie.cut = (n, e) => {
  if (!ft(n.contentDOM, n.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: s } = kh(n.state);
  if (!t && !s)
    return !1;
  vn = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Ma ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Sh(n, t), !1);
};
const Ta = /* @__PURE__ */ rt.define();
function Oa(n, e) {
  let t = [];
  for (let i of n.facet(la)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t.length ? n.update({ effects: t, annotations: Ta.of(!0) }) : null;
}
function Da(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Oa(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Y.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Da(n);
};
Y.blur = (n) => {
  n.observer.clearSelectionRange(), Da(n);
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
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), a = e.getTargetRanges();
    if (r && a.length) {
      let o = a[0], l = n.posAtDOM(o.startContainer, o.startOffset), c = n.posAtDOM(o.endContainer, o.endOffset);
      return qn(n, { from: l, to: c, insert: n.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (x.chrome && x.android && (s = Ca.find((r) => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var a;
      (((a = window.visualViewport) === null || a === void 0 ? void 0 : a.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return x.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), x.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => Y.compositionend(n, e), 20), !1;
};
const Hs = /* @__PURE__ */ new Set();
function Ch(n) {
  Hs.has(n) || (Hs.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Fs = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let it = !1;
function zs() {
  it = !1;
}
class Ah {
  constructor(e) {
    this.lineWrapping = e, this.doc = R.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return Fs.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, s, r, a) {
    let o = Fs.indexOf(e) > -1, l = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != o;
    if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = r, l) {
      this.heightSamples = {};
      for (let c = 0; c < a.length; c++) {
        let h = a[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return l;
  }
}
class Mh {
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
var D = /* @__PURE__ */ (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(D || (D = {}));
const _t = 1e-3;
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
    this.height != e && (Math.abs(this.height - e) > _t && (it = !0), this.height = e);
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
    let r = this, a = i.doc;
    for (let o = s.length - 1; o >= 0; o--) {
      let { fromA: l, toA: c, fromB: h, toB: d } = s[o], u = r.lineAt(l, D.ByPosNoHeight, i.setDoc(t), 0, 0), f = u.to >= c ? u : r.lineAt(c, D.ByPosNoHeight, i, 0, 0);
      for (d += f.to - c, c = f.to; o > 0 && u.from <= s[o - 1].toA; )
        l = s[o - 1].fromA, h = s[o - 1].fromB, o--, l < u.from && (u = r.lineAt(l, D.ByPosNoHeight, i, 0, 0));
      h += u.from - l, l = u.from;
      let p = Kn.build(i.setDoc(a), e, h, d);
      r = di(r, r.replace(l, c, p));
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
          let o = e[t - 1];
          o.break ? e.splice(--t, 1, o.left, null, o.right) : e.splice(--t, 1, o.left, o.right), i += 1 + o.break, s -= o.size;
        } else if (r > s * 2) {
          let o = e[i];
          o.break ? e.splice(i, 1, o.left, null, o.right) : e.splice(i, 1, o.left, o.right), i += 2 + o.break, r -= o.size;
        } else
          break;
      else if (s < r) {
        let o = e[t++];
        o && (s += o.size);
      } else {
        let o = e[--i];
        o && (r += o.size);
      }
    let a = 0;
    return e[t - 1] == null ? (a = 1, t--) : e[t] == null && (a = 1, i++), new Eh(U.of(e.slice(0, t)), a, U.of(e.slice(i)));
  }
}
function di(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (it = !0), e);
}
U.prototype.size = 1;
const Rh = /* @__PURE__ */ j.replace({});
class La extends U {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new ee(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, s) {
    return this.spaceAbove && e < i + this.spaceAbove ? new ee(s, 0, i, this.spaceAbove, Rh) : this.mainBlock(i, s);
  }
  lineAt(e, t, i, s, r) {
    let a = this.mainBlock(s, r);
    return this.spaceAbove ? this.blockAt(0, i, s, r).join(a) : a;
  }
  forEachLine(e, t, i, s, r, a) {
    e <= r + this.length && t >= r && a(this.lineAt(0, D.ByPos, i, s, r));
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
class X extends La {
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
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - i + 1, a, o = 0;
    if (e.lineWrapping) {
      let l = Math.min(this.height, e.lineHeight * r);
      a = l / r, this.length > r + 1 && (o = (this.height - l) / (this.length - r - 1));
    } else
      a = this.height / r;
    return { firstLine: i, lastLine: s, perLine: a, perChar: o };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: a, perLine: o, perChar: l } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let c = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), h = t.doc.lineAt(c), d = o + h.length * l, u = Math.max(i, e - d / 2);
      return new ee(h.from, h.length, u, d, 0);
    } else {
      let c = Math.max(0, Math.min(a - r, Math.floor((e - i) / o))), { from: h, length: d } = t.doc.line(r + c);
      return new ee(h, d, i + o * c, o, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == D.ByHeight)
      return this.blockAt(e, i, s, r);
    if (t == D.ByPosNoHeight) {
      let { from: f, to: p } = i.doc.lineAt(e);
      return new ee(f, p - f, 0, 0, 0);
    }
    let { firstLine: a, perLine: o, perChar: l } = this.heightMetrics(i, r), c = i.doc.lineAt(e), h = o + c.length * l, d = c.number - a, u = s + o * d + l * (c.from - r - d);
    return new ee(c.from, c.length, Math.max(s, Math.min(u, s + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, s, r, a) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: o, perLine: l, perChar: c } = this.heightMetrics(i, r);
    for (let h = e, d = s; h <= t; ) {
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
      let a = [], o = Math.max(t, s.from), l = -1;
      for (s.from > t && a.push(new F(s.from - t - 1).updateHeight(e, t)); o <= r && s.more; ) {
        let h = e.doc.lineAt(o).length;
        a.length && a.push(null);
        let d = s.heights[s.index++], u = 0;
        d < 0 && (u = -d, d = s.heights[s.index++]), l == -1 ? l = d : Math.abs(d - l) >= _t && (l = -2);
        let f = new X(h, d, u);
        f.outdated = !1, a.push(f), o += h + 1;
      }
      o <= r && a.push(null, new F(r - o).updateHeight(e, o));
      let c = U.of(a);
      return (l < 0 || Math.abs(c.height - this.height) >= _t || Math.abs(l - this.heightMetrics(e, t).perLine) >= _t) && (it = !0), di(this, c);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Eh extends U {
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
    let a = s + this.left.height, o = r + this.left.length + this.break, l = t == D.ByHeight ? e < a : e < o, c = l ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, a, o);
    if (this.break || (l ? c.to < o : c.from > o))
      return c;
    let h = t == D.ByPosNoHeight ? D.ByPosNoHeight : D.ByPos;
    return l ? c.join(this.right.lineAt(o, h, i, a, o)) : this.left.lineAt(o, h, i, s, r).join(c);
  }
  forEachLine(e, t, i, s, r, a) {
    let o = s + this.left.height, l = r + this.left.length + this.break;
    if (this.break)
      e < l && this.left.forEachLine(e, t, i, s, r, a), t >= l && this.right.forEachLine(e, t, i, o, l, a);
    else {
      let c = this.lineAt(l, D.ByPos, i, s, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, s, r, a), c.to >= e && c.from <= t && a(c), t > c.to && this.right.forEachLine(c.to + 1, t, i, o, l, a);
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
    let a = r.length;
    for (let o of i)
      r.push(o);
    if (e > 0 && $s(r, a - 1), t < this.length) {
      let o = r.length;
      this.decomposeRight(t, r), $s(r, o);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? U.of(this.break ? [e, null, t] : [e, t]) : (this.left = di(this.left, e), this.right = di(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: a } = this, o = t + r.length + this.break, l = null;
    return s && s.from <= t + r.length && s.more ? l = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= o + a.length && s.more ? l = a = a.updateHeight(e, o, i, s) : a.updateHeight(e, o, i), l ? this.balanced(r, a) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function $s(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof F && (i = n[e + 1]) instanceof F && n.splice(e - 1, 3, new F(t.length + 1 + i.length));
}
const Th = 5;
class Kn {
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
      let a = t - e;
      i.block ? this.addBlock(new La(a, s, i)) : (a || r || s >= Th) && this.addLineDeco(s, r, a);
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
    let r = new Kn(i, e);
    return M.spans(t, i, s, r, 0), r.finish(i);
  }
}
function Oh(n, e, t) {
  let i = new Dh();
  return M.compare(n, e, t, i, 0), i.changes;
}
class Dh {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && Ye(e, t, this.changes, 5);
  }
}
function Lh(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, t.left), a = Math.min(s.innerWidth, t.right), o = Math.max(0, t.top), l = Math.min(s.innerHeight, t.bottom);
  for (let c = n.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let h = c, d = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && d.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), a = Math.min(a, u.right), o = Math.max(o, u.top), l = Math.min(c == n.parentNode ? s.innerHeight : l, u.bottom);
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
function Bh(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Ph(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Pi {
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
      widget: new Ih(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Ih extends bi {
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
class Vs {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = qs, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = N.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet($n).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new Ah(i), this.stateDeco = Ks(t), this.heightMap = U.empty().applyChanges(this.stateDeco, R.empty, this.heightOracle.setDoc(t.doc), [new Q(0, 0, 0, t.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = j.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: a }) => s >= r && s <= a)) {
        let { from: r, to: a } = this.lineBlockAt(s);
        e.push(new jt(r, a));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? qs : new Gn(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(ht(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = Ks(this.state);
    let s = e.changedRanges, r = Q.extendWithRanges(s, Oh(i, this.stateDeco, e ? e.changes : H.empty(this.state.doc.length))), a = this.heightMap.height, o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    zs(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != a || it) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a);
    let l = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < l.from || t.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, t));
    let c = l.from != this.viewport.from || l.to != this.viewport.to;
    this.viewport = l, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(ha) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? N.RTL : N.LTR;
    let a = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", o = t.getBoundingClientRect(), l = a || this.mustMeasureContent || this.contentDOMHeight != o.height;
    this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (o.width && o.height) {
      let { scaleX: A, scaleY: S } = Gr(t, o);
      (A > 5e-3 && Math.abs(this.scaleX - A) > 5e-3 || S > 5e-3 && Math.abs(this.scaleY - S) > 5e-3) && (this.scaleX = A, this.scaleY = S, c |= 16, a = l = !0);
    }
    let d = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d || this.paddingBottom != u) && (this.paddingTop = d, this.paddingBottom = u, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (l = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let f = Ur(this.view.contentDOM, !1).y;
    f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Yr(this.scrollParent || e.win);
    let g = (this.printing ? Ph : Lh)(t, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v != this.inView && (this.inView = v, v && (l = !0)), !this.inView && !this.scrollTarget && !Bh(e.dom))
      return 0;
    let C = o.width;
    if ((this.contentDOMWidth != C || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), l) {
      let A = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(A) && (a = !0), a || s.lineWrapping && Math.abs(C - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: S, charWidth: B, textHeight: ne } = e.docView.measureTextSize();
        a = S > 0 && s.refresh(r, S, B, ne, Math.max(5, C / B), A), a && (e.docView.minWidth = 0, c |= 16);
      }
      m > 0 && b > 0 ? h = Math.max(m, b) : m < 0 && b < 0 && (h = Math.min(m, b)), zs();
      for (let S of this.viewports) {
        let B = S.from == this.viewport.from ? A : e.docView.measureVisibleLineHeights(S);
        this.heightMap = (a ? U.empty().applyChanges(this.stateDeco, R.empty, this.heightOracle, [new Q(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, a, new Mh(S.from, B));
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
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: a, visibleBottom: o } = this, l = new jt(s.lineAt(a - i * 1e3, D.ByHeight, r, 0, 0).from, s.lineAt(o + (1 - i) * 1e3, D.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < l.from || c > l.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), d = s.lineAt(c, D.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (d.top + d.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < l.from ? u = d.top : u = d.bottom - h, l = new jt(s.lineAt(u - 1e3 / 2, D.ByHeight, r, 0, 0).from, s.lineAt(u + h + 1e3 / 2, D.ByHeight, r, 0, 0).to);
      }
    }
    return l;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new jt(this.heightMap.lineAt(i, D.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, D.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, D.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, D.ByPos, this.heightOracle, 0, 0), { visibleTop: a, visibleBottom: o } = this;
    return (e == 0 || s <= a - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= o + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > a - 2 * 1e3 && r < o + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new Pi(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
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
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, a = s << 1;
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
      let m = Wh(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - h) < r && Math.abs(b.to - d) < r && !g.some((v) => b.from < v && b.to > v));
      if (!m) {
        if (d < u.to && t && i && t.visibleRanges.some((C) => C.from <= d && C.to >= d)) {
          let C = t.moveToLineBoundary(y.cursor(d), !1, !0).head;
          C > h && (d = C);
        }
        let b = this.gapSize(u, h, d, f), v = i || b < 2e6 ? b : 2e6;
        m = new Pi(h, d, b, v);
      }
      o.push(m);
    }, c = (h) => {
      if (h.length < a || h.type != $.Text)
        return;
      let d = Nh(h.from, h.to, this.stateDeco);
      if (d.total < a)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, p;
      if (i) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (u != null) {
          let v = Ft(d, u), C = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = v - C, b = v + C;
        } else
          m = (this.visibleTop - h.top - g) / h.height, b = (this.visibleBottom - h.top + g) / h.height;
        f = Ht(d, m), p = Ht(d, b);
      } else {
        let g = d.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let S of e)
            S.from >= h.from && S.from < h.to && S.size != S.displaySize && S.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = S.size - S.displaySize);
        let v = this.pixelViewport.left + b, C = this.pixelViewport.right + b, L, A;
        if (u != null) {
          let S = Ft(d, u), B = ((C - v) / 2 + m) / g;
          L = S - B, A = S + B;
        } else
          L = (v - m) / g, A = (C + m) / g;
        f = Ht(d, L), p = Ht(d, A);
      }
      f > h.from && l(h.from, f, h, d), p < h.to && l(p, h.to, h, d);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return o;
  }
  gapSize(e, t, i, s) {
    let r = Ft(s, i) - Ft(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Pi.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = j.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
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
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let a = this.visibleRanges[r], o = i[r];
        (a.from != o.from || a.to != o.to) && (s |= 4, e && e.mapPos(a.from, -1) == o.from && e.mapPos(a.to, 1) == o.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || ht(this.heightMap.lineAt(e, D.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || ht(this.heightMap.lineAt(this.scaler.fromDOM(e), D.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return ht(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class jt {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Nh(n, e, t) {
  let i = [], s = n, r = 0;
  return M.spans(t, n, e, {
    span() {
    },
    point(a, o) {
      a > s && (i.push({ from: s, to: a }), r += a - s), s = o;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function Ht({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: a } = e[s], o = a - r;
    if (i <= o)
      return r + i;
    i -= o;
  }
}
function Ft(n, e) {
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
function Wh(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const qs = {
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
function Ks(n) {
  let e = n.facet(xi).filter((i) => typeof i != "function"), t = n.facet(Vn).filter((i) => typeof i != "function");
  return t.length && e.push(M.join(t)), e;
}
class Gn {
  constructor(e, t, i) {
    let s = 0, r = 0, a = 0;
    this.viewports = i.map(({ from: o, to: l }) => {
      let c = t.lineAt(o, D.ByPos, e, 0, 0).top, h = t.lineAt(l, D.ByPos, e, 0, 0).bottom;
      return s += h - c, { from: o, to: l, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let o of this.viewports)
      o.domTop = a + (o.top - r) * this.scale, a = o.domBottom = o.domTop + (o.bottom - o.top), r = o.bottom;
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
    return e instanceof Gn ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function ht(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new ee(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => ht(s, e)) : n._content);
}
const zt = /* @__PURE__ */ w.define({ combine: (n) => n.join(" ") }), wn = /* @__PURE__ */ w.define({ combine: (n) => n.indexOf(!0) > -1 }), Sn = /* @__PURE__ */ Ze.newName(), Ba = /* @__PURE__ */ Ze.newName(), Pa = /* @__PURE__ */ Ze.newName(), Ia = { "&light": "." + Ba, "&dark": "." + Pa };
function kn(n, e, t) {
  return new Ze(e, {
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
const jh = /* @__PURE__ */ kn("." + Sn, {
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
}, Ia), Hh = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ii = x.ie && x.ie_version <= 11;
class Fh {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new mc(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (x.ie && x.ie_version <= 11 || x.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && x.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(x.chrome && x.chrome_version < 126) && (this.editContext = new $h(e), e.state.facet(ue) && (e.contentDOM.editContext = this.editContext.editContext)), Ii && (this.onCharData = (t) => {
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
    if (i.state.facet(ue) ? i.root.activeElement != this.dom : !ft(this.dom, s))
      return;
    let r = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (x.ie && x.ie_version <= 11 || x.android && x.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && pt(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = St(e.root);
    if (!t)
      return !1;
    let i = x.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && zh(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = ft(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && xc(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, Hh), Ii && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Ii && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Xe(this.dom, r.key, r.keyCode));
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
      let a = this.readMutation(r);
      a && (a.typeOver && (s = !0), t == -1 ? { from: t, to: i } = a : (t = Math.min(a.from, t), i = Math.max(a.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && ft(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new rh(this.view, e, t, i);
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
    let i = this.view.state, s = Sa(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !hi(this.view.state.selection, t.newSel.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Gs(t, e.previousSibling || e.target.previousSibling, -1), s = Gs(t, e.nextSibling || e.target.nextSibling, 1);
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
function Gs(n, e, t) {
  for (; e; ) {
    let i = P.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Us(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, r = e.endOffset, a = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  return pt(a.node, a.offset, s, r) && ([t, i, s, r] = [s, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r };
}
function zh(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return Us(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), t ? Us(n, t) : null;
}
class $h {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: r, head: a } = s, o = this.toEditorPos(i.updateRangeStart), l = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: o, drifted: !1 });
      let c = l - o > i.text.length;
      o == this.from && r < this.from ? o = r : l == this.to && r > this.to && (l = r);
      let h = ka(e.state.sliceDoc(o, l), i.text, (c ? s.from : s.to) - o, c ? "end" : null);
      if (!h) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        hi(u, s) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let d = {
        from: h.from + o,
        to: h.toA + o,
        insert: R.of(i.text.slice(h.from, h.toB).split(`
`))
      };
      if ((x.mac || x.android) && d.from == a - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (d = { from: o, to: l, insert: R.of([i.text.replace(".", " ")]) }), this.pendingContextChange = d, !e.state.readOnly) {
        let u = this.to - this.from + (d.to - d.from + d.insert.length);
        qn(e, d, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), d.from < d.to && !d.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], r = null;
      for (let a = this.toEditorPos(i.rangeStart), o = this.toEditorPos(i.rangeEnd); a < o; a++) {
        let l = e.coordsForChar(a);
        r = l && new DOMRect(l.left, l.top, l.right - l.left, l.bottom - l.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let a = r.underlineStyle, o = r.underlineThickness;
        if (!/none/i.test(a) && !/none/i.test(o)) {
          let l = this.toEditorPos(r.rangeStart), c = this.toEditorPos(r.rangeEnd);
          if (l < c) {
            let h = `text-decoration: underline ${/^[a-z]/.test(a) ? a + " " : a == "Dashed" ? "dashed " : a == "Squiggle" ? "wavy " : ""}${/thin/i.test(o) ? 1 : 2}px`;
            s.push(j.mark({ attributes: { style: h } }).range(l, c));
          }
        }
      }
      e.dispatch({ effects: ua.of(j.set(s)) });
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
      let s = St(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((r, a, o, l, c) => {
      if (i)
        return;
      let h = c.length - (a - r);
      if (s && a >= s.to)
        if (s.from == r && s.to == a && s.insert.eq(c)) {
          s = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          s = null, this.revertPending(e.state);
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || bc(e.parent) || document, this.viewState = new Vs(this, e.state || T.create(e)), e.scrollTo && e.scrollTo.is(It) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ke).map((s) => new Ti(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new Fh(this), this.inputState = new ch(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Os(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
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
    let a = this.hasFocus, o = 0, l = null;
    e.some((u) => u.annotation(Ta)) ? (this.inputState.notifiedFocused = a, o = 1) : a != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = a, l = Oa(r, a), l || (o = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(T.phrases) != this.state.facet(T.phrases))
      return this.setState(r);
    s = oi.create(this, r, e), s.flags |= o;
    let d = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (d && (d = d.map(u.changes)), u.scrollIntoView) {
          let { main: f } = u.state.selection, { x: p, y: g } = this.state.facet(k.cursorScrollMargin);
          d = new Je(f.empty ? f : y.cursor(f.head, f.head > f.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let f of u.effects)
          f.is(It) && (d = f.value.clip(this.state));
      }
      this.viewState.update(s, d), this.bidiCache = ui.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(ct) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(zt) != s.state.facet(zt) && (this.viewState.mustMeasureContent = !0), (t || i || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(mn))
        try {
          u(s);
        } catch (f) {
          ge(this.state, f, "update listener");
        }
    (l || h) && Promise.resolve().then(() => {
      l && this.state == l.startState && this.dispatch(l), h && !Sa(this, h) && c.force && Xe(this.contentDOM, c.key, c.keyCode);
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
      this.viewState = new Vs(this, e), this.plugins = e.facet(Ke).map((i) => new Ti(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Os(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Ke), i = e.state.facet(Ke);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let a = t.indexOf(r);
        if (a < 0)
          s.push(new Ti(r));
        else {
          let o = this.plugins[a];
          o.mustUpdate = e, s.push(o);
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
    let t = null, i = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: a } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (a = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let o = 0; ; o++) {
        if (a < 0)
          if (Yr(i || this.win))
            r = -1, a = this.viewState.heightMap.height;
          else {
            let f = this.viewState.scrollAnchorAt(s);
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
            return ge(this.state, p), _s;
          }
        }), d = oi.create(this, this.state, []), u = !1;
        d.flags |= l, t ? t.flags |= l : t = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), u = this.docView.update(d), u && this.docViewUpdate());
        for (let f = 0; f < c.length; f++)
          if (h[f] != _s)
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
                s = s + p, i ? i.scrollTop += p : this.win.scrollBy(0, p), a = -1;
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
      for (let o of this.state.facet(mn))
        o(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Sn + " " + (this.state.facet(wn) ? Pa : Ba) + " " + this.state.facet(zt);
  }
  updateAttrs() {
    let e = Ys(this, fa, {
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
    this.state.readOnly && (t["aria-readonly"] = "true"), Ys(this, $n, t);
    let i = this.observer.ignore(() => {
      let s = Cs(this.contentDOM, this.contentAttrs, t), r = Cs(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(k.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ct);
    let e = this.state.facet(k.cspNonce);
    Ze.mount(this.root, this.styleModules.concat(jh).reverse(), e ? { nonce: e } : void 0);
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
    return Bi(this, e, Ds(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Bi(this, e, Ds(this, e, t, (i) => Zc(this, e.head, i)));
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
    return Qc(this, e, t, i);
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
    return Bi(this, e, eh(this, e, t, i));
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
    let i = yn(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), yn(this, e, t);
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
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), a = r[ce.find(r, e - s.from, -1, t)];
    return ai(i, a.dir == N.LTR == t > 0);
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
    return !this.state.facet(ca) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > Vh)
      return ta(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || ea(r.isolates, i = Rs(this, e))))
        return r.order;
    i || (i = Rs(this, e));
    let s = Ac(e.text, t, i);
    return this.bidiCache.push(new ui(e.from, e.to, t, i, !0, s)), s;
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
      _r(this.contentDOM), this.docView.updateSelection();
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
    var i, s, r, a;
    return It.of(new Je(typeof e == "number" ? y.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (s = t.x) !== null && s !== void 0 ? s : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (a = t.xMargin) !== null && a !== void 0 ? a : 5));
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
    return It.of(new Je(y.cursor(i.from), "start", "start", i.top - e, t, !0));
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
    let i = Ze.newName(), s = [zt.of(i), ct.of(kn(`.${i}`, e))];
    return t && t.dark && s.push(wn.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Pn.lowest(ct.of(kn("." + Sn, e, Ia)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && P.get(i) || P.get(e);
    return ((t = s?.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
k.styleModule = ct;
k.inputHandler = oa;
k.clipboardInputFilter = Fn;
k.clipboardOutputFilter = zn;
k.scrollHandler = da;
k.focusChangeEffect = la;
k.perLineTextDirection = ca;
k.exceptionSink = aa;
k.updateListener = mn;
k.editable = ue;
k.mouseSelectionStyle = ra;
k.dragMovesSelection = sa;
k.clickAddsSelectionRange = na;
k.decorations = xi;
k.blockWrappers = pa;
k.outerDecorations = Vn;
k.atomicRanges = Rt;
k.bidiIsolatedRanges = ga;
k.cursorScrollMargin = /* @__PURE__ */ w.define({
  combine: (n) => {
    let e = 5, t = 5;
    for (let i of n)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
k.scrollMargins = ma;
k.darkTheme = wn;
k.cspNonce = /* @__PURE__ */ w.define({ combine: (n) => n.length ? n[0] : "" });
k.contentAttributes = $n;
k.editorAttributes = fa;
k.lineWrapping = /* @__PURE__ */ k.contentAttributes.of({ class: "cm-lineWrapping" });
k.announce = /* @__PURE__ */ W.define();
const Vh = 4096, _s = {};
class ui {
  constructor(e, t, i, s, r, a) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = a;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : N.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let a = e[r];
      a.dir == s && !t.touchesRange(a.from, a.to) && i.push(new ui(t.mapPos(a.from, 1), t.mapPos(a.to, -1), a.dir, a.isolates, !1, a.order));
    }
    return i;
  }
}
function Ys(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], a = typeof r == "function" ? r(n) : r;
    a && Wn(a, t);
  }
  return t;
}
const qh = x.mac ? "mac" : x.windows ? "win" : x.linux ? "linux" : "key";
function Kh(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, r, a, o;
  for (let l = 0; l < t.length - 1; ++l) {
    const c = t[l];
    if (/^(cmd|meta|m)$/i.test(c))
      o = !0;
    else if (/^a(lt)?$/i.test(c))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      r = !0;
    else if (/^s(hift)?$/i.test(c))
      a = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? o = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), o && (i = "Meta-" + i), a && (i = "Shift-" + i), i;
}
function $t(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const Gh = /* @__PURE__ */ Pn.default(/* @__PURE__ */ k.domEventHandlers({
  keydown(n, e) {
    return Xh(Uh(e.state), n, e, "editor");
  }
})), Na = /* @__PURE__ */ w.define({ enables: Gh }), Xs = /* @__PURE__ */ new WeakMap();
function Uh(n) {
  let e = n.facet(Na), t = Xs.get(e);
  return t || Xs.set(e, t = Yh(e.reduce((i, s) => i.concat(s), []))), t;
}
let Ce = null;
const _h = 4e3;
function Yh(n, e = qh) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (a, o) => {
    let l = i[a];
    if (l == null)
      i[a] = o;
    else if (l != o)
      throw new Error("Key binding " + a + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (a, o, l, c, h) => {
    var d, u;
    let f = t[a] || (t[a] = /* @__PURE__ */ Object.create(null)), p = o.split(/ (?!$)/).map((b) => Kh(b, e));
    for (let b = 1; b < p.length; b++) {
      let v = p.slice(0, b).join(" ");
      s(v, !0), f[v] || (f[v] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(C) => {
          let L = Ce = { view: C, prefix: v, scope: a };
          return setTimeout(() => {
            Ce == L && (Ce = null);
          }, _h), !0;
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
  for (let a of n) {
    let o = a.scope ? a.scope.split(" ") : ["editor"];
    if (a.any)
      for (let c of o) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: d } = a;
        for (let u in h)
          h[u].run.push((f) => d(f, Cn));
      }
    let l = a[e] || a.key;
    if (l)
      for (let c of o)
        r(c, l, a.run, a.preventDefault, a.stopPropagation), a.shift && r(c, "Shift-" + l, a.shift, a.preventDefault, a.stopPropagation);
  }
  return t;
}
let Cn = null;
function Xh(n, e, t, i) {
  Cn = e;
  let s = hc(e), r = Gl(s, 0), a = Ul(r) == s.length && s != " ", o = "", l = !1, c = !1, h = !1;
  Ce && Ce.view == t && Ce.scope == i && (o = Ce.prefix + " ", Aa.indexOf(e.keyCode) < 0 && (c = !0, Ce = null));
  let d = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let b of m.run)
        if (!d.has(b) && (d.add(b), b(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, f = n[i], p, g;
  return f && (u(f[o + $t(s, e, !a)]) ? l = !0 : a && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(x.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(x.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = Ee[e.keyCode]) && p != s ? (u(f[o + $t(p, e, !0)]) || e.shiftKey && (g = vt[e.keyCode]) != s && g != p && u(f[o + $t(g, e, !1)])) && (l = !0) : a && e.shiftKey && u(f[o + $t(s, e, !0)]) && (l = !0), !l && u(f._any) && (l = !0)), c && (l = !0), l && h && e.stopPropagation(), Cn = null, l;
}
class Ne {
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
      let r = Wa(e);
      return [new Ne(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return Jh(e, t, i);
  }
}
function Wa(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == N.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Js(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s)
    return i;
  let r = n.dom.getBoundingClientRect(), a = (s.top + s.bottom) / 2, o = n.posAtCoords({ x: r.left + 1, y: a }), l = n.posAtCoords({ x: r.right - 1, y: a });
  return o == null || l == null ? i : { from: Math.max(i.from, Math.min(o, l)), to: Math.min(i.to, Math.max(o, l)) };
}
function Jh(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == N.LTR, a = n.contentDOM, o = a.getBoundingClientRect(), l = Wa(n), c = a.querySelector(".cm-line"), h = c && window.getComputedStyle(c), d = o.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), u = o.right - (h ? parseInt(h.paddingRight) : 0), f = xn(n, i, 1), p = xn(n, s, -1), g = f.type == $.Text ? f : null, m = p.type == $.Text ? p : null;
  if (g && (n.lineWrapping || f.widgetLineBreaks) && (g = Js(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = Js(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return v(C(t.from, t.to, g));
  {
    let A = g ? C(t.from, null, g) : L(f, !1), S = m ? C(null, t.to, m) : L(p, !0), B = [];
    return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && A.bottom + n.defaultLineHeight / 2 < S.top ? B.push(b(d, A.bottom, u, S.top)) : A.bottom < S.top && n.elementAtHeight((A.bottom + S.top) / 2).type == $.Text && (A.bottom = S.top = (A.bottom + S.top) / 2), v(A).concat(B).concat(v(S));
  }
  function b(A, S, B, ne) {
    return new Ne(e, A - l.left, S - l.top, Math.max(0, B - A), ne - S);
  }
  function v({ top: A, bottom: S, horizontal: B }) {
    let ne = [];
    for (let ve = 0; ve < B.length; ve += 2)
      ne.push(b(B[ve], A, B[ve + 1], S));
    return ne;
  }
  function C(A, S, B) {
    let ne = 1e9, ve = -1e9, Et = [];
    function Qn(Oe, we, Ve, De, at) {
      let he = n.coordsAtPos(Oe, Oe == B.to ? -2 : 2), de = n.coordsAtPos(Ve, Ve == B.from ? 2 : -2);
      !he || !de || (ne = Math.min(he.top, de.top, ne), ve = Math.max(he.bottom, de.bottom, ve), at == N.LTR ? Et.push(r && we ? d : he.left, r && De ? u : de.right) : Et.push(!r && De ? d : de.left, !r && we ? u : he.right));
    }
    let Tt = A ?? B.from, Ot = S ?? B.to;
    for (let Oe of n.visibleRanges)
      if (Oe.to > Tt && Oe.from < Ot)
        for (let we = Math.max(Oe.from, Tt), Ve = Math.min(Oe.to, Ot); ; ) {
          let De = n.state.doc.lineAt(we);
          for (let at of n.bidiSpans(De)) {
            let he = at.from + De.from, de = at.to + De.from;
            if (he >= Ve)
              break;
            de > we && Qn(Math.max(he, we), A == null && he <= Tt, Math.min(de, Ve), S == null && de >= Ot, at.dir);
          }
          if (we = De.to + 1, we >= Ve)
            break;
        }
    return Et.length == 0 && Qn(Tt, A == null, Ot, S == null, n.textDirection), { top: ne, bottom: ve, horizontal: Et };
  }
  function L(A, S) {
    let B = o.top + (S ? A.top : A.bottom);
    return { top: B, bottom: B, horizontal: [] };
  }
}
function Qh(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class Zh {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Yt) != e.state.facet(Yt) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Yt);
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
    if (e.length != this.drawn.length || e.some((t, i) => !Qh(t, this.drawn[i]))) {
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
const Yt = /* @__PURE__ */ w.define();
function ja(n) {
  return [
    Fe.define((e) => new Zh(e, n)),
    Yt.of(n)
  ];
}
const nt = /* @__PURE__ */ w.define({
  combine(n) {
    return $r(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function ed(n = {}) {
  return [
    nt.of(n),
    td,
    id,
    nd,
    ha.of(!0)
  ];
}
function Ha(n) {
  return n.startState.facet(nt) != n.state.facet(nt);
}
const td = /* @__PURE__ */ ja({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(nt), i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor && !(r && x.ios && t.iosSelectionHandles)) {
        let a = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", o = s.empty ? s : y.cursor(s.head, s.assoc);
        for (let l of Ne.forRange(n, a, o))
          i.push(l);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Ha(n);
    return t && Qs(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    Qs(e.state, n);
  },
  class: "cm-cursorLayer"
});
function Qs(n, e) {
  e.style.animationDuration = n.facet(nt).cursorBlinkRate + "ms";
}
const id = /* @__PURE__ */ ja({
  above: !1,
  markers(n) {
    let e = [], { main: t, ranges: i } = n.state.selection;
    for (let s of i)
      if (!s.empty)
        for (let r of Ne.forRange(n, "cm-selectionBackground", s))
          e.push(r);
    if (x.ios && !t.empty && n.state.facet(nt).iosSelectionHandles) {
      for (let s of Ne.forRange(n, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1)))
        e.push(s);
      for (let s of Ne.forRange(n, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1)))
        e.push(s);
    }
    return e;
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Ha(n);
  },
  class: "cm-selectionLayer"
}), nd = /* @__PURE__ */ Pn.highest(/* @__PURE__ */ k.theme({
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
class $e extends We {
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
const Ni = /* @__PURE__ */ w.define(), sd = /* @__PURE__ */ w.define(), Xt = /* @__PURE__ */ w.define(), Zs = /* @__PURE__ */ w.define({
  combine: (n) => n.some((e) => e)
});
function rd(n) {
  return [
    ad
  ];
}
const ad = /* @__PURE__ */ Fe.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Xt).map((e) => new tr(n, e)), this.fixed = !n.state.facet(Zs);
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
    this.view.state.facet(Zs) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = M.iter(this.view.state.facet(Ni), this.view.viewport.from), i = [], s = this.gutters.map((r) => new od(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let a = !0;
        for (let o of r.type)
          if (o.type == $.Text && a) {
            An(t, i, o.from);
            for (let l of s)
              l.line(this.view, o, i);
            a = !1;
          } else if (o.widget)
            for (let l of s)
              l.widget(this.view, o);
      } else if (r.type == $.Text) {
        An(t, i, r.from);
        for (let a of s)
          a.line(this.view, r, i);
      } else if (r.widget)
        for (let a of s)
          a.widget(this.view, r);
    for (let r of s)
      r.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(Xt), t = n.state.facet(Xt), i = n.docChanged || n.heightChanged || n.viewportChanged || !M.eq(n.startState.facet(Ni), n.state.facet(Ni), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of t) {
        let a = e.indexOf(r);
        a < 0 ? s.push(new tr(this.view, r)) : (this.gutters[a].update(n), s.push(this.gutters[a]));
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
  provide: (n) => k.scrollMargins.of((e) => {
    let t = e.plugin(n);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, s = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == N.LTR ? { left: i, right: s } : { right: i, left: s };
  })
});
function er(n) {
  return Array.isArray(n) ? n : [n];
}
function An(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class od {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = M.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, a = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let o = new Fa(e, a, r, i);
      s.elements.push(o), s.dom.appendChild(o.dom);
    } else
      s.elements[this.i].update(e, a, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    An(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let a = this.gutter;
    s.length == 0 && !a.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), s = i ? [i] : null;
    for (let r of e.state.facet(sd)) {
      let a = r(e, t.widget, t);
      a && (s || (s = [])).push(a);
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
class tr {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, a;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let l = r.getBoundingClientRect();
          a = (l.top + l.bottom) / 2;
        } else
          a = s.clientY;
        let o = e.lineBlockAtHeight(a - e.documentTop);
        t.domEventHandlers[i](e, o, s) && s.preventDefault();
      });
    this.markers = er(t.markers(e)), t.initialSpacer && (this.spacer = new Fa(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = er(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !M.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Fa {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), ld(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
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
          h.destroy(s);
          let d = s.nextSibling;
          s.remove(), s = d;
        }
      }
      if (!l)
        break;
      l.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(l.toDOM(e), s)), c && a++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function ld(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const cd = /* @__PURE__ */ w.define(), hd = /* @__PURE__ */ w.define(), Ge = /* @__PURE__ */ w.define({
  combine(n) {
    return $r(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let s in t) {
          let r = i[s], a = t[s];
          i[s] = r ? (o, l, c) => r(o, l, c) || a(o, l, c) : a;
        }
        return i;
      }
    });
  }
});
class Wi extends $e {
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
function ji(n, e) {
  return n.state.facet(Ge).formatNumber(e, n.state);
}
const dd = /* @__PURE__ */ Xt.compute([Ge], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(cd);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new Wi(ji(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let s of e.state.facet(hd)) {
      let r = s(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ge) != e.state.facet(Ge),
  initialSpacer(e) {
    return new Wi(ji(e, ir(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = ji(t.view, ir(t.view.state.doc.lines));
    return i == e.number ? e : new Wi(i);
  },
  domEventHandlers: n.facet(Ge).domEventHandlers,
  side: "before"
}));
function ud(n = {}) {
  return [
    Ge.of(n),
    rd(),
    dd
  ];
}
function ir(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const fd = Object.freeze({
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
}), Un = W.define(), Mn = W.define();
function pd(n) {
  return [
    {
      key: "Mod-Enter",
      run: () => (n(), !0)
    }
  ];
}
function gd({
  parent: n,
  doc: e = "",
  onChange: t = null,
  onRun: i = null,
  readOnly: s = !1,
  liveLexicalHighlight: r = !1,
  extensions: a = []
} = {}) {
  if (!n)
    throw new Error("mountRasaCodeEditor requires a parent element");
  const o = i ? Na.of(pd(i)) : [], l = r ? wd() : vd();
  return new k({
    parent: n,
    state: T.create({
      doc: e,
      extensions: [
        ud(),
        ed(),
        k.lineWrapping,
        l,
        o,
        k.editable.of(!s),
        T.readOnly.of(s),
        k.updateListener.of((c) => {
          c.docChanged && t?.(c.state.doc.toString(), c);
        }),
        ...a
      ]
    })
  });
}
function za(n) {
  return fd[n] ?? "rasa-token-unknown";
}
function md(n, e) {
  const t = String(n), i = [];
  let s = 0;
  for (const r of Va(e, t))
    r.start > s && i.push({ text: t.slice(s, r.start), className: "" }), i.push({
      text: t.slice(r.start, r.end),
      className: za(r.kind)
    }), s = r.end;
  return s < t.length && i.push({ text: t.slice(s), className: "" }), i;
}
function nr(n) {
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
      const o = yd(e, i);
      t.push(Se(e, "comment", i, o)), i = o;
      continue;
    }
    if (s === '"') {
      const o = xd(e, i);
      t.push(Se(e, "string", i, o)), i = o;
      continue;
    }
    if (s === "^") {
      t.push(Se(e, "reader-macro", i, i + 1));
      const o = i + 1;
      if (o < e.length && !/[\s()[\]{}]/.test(e[o])) {
        const l = Hi(e, o);
        t.push(Se(e, "metadata", o, l)), i = l;
      } else
        i += 1;
      continue;
    }
    if (s === "'" || s === "`" || s === "~" || s === "@") {
      t.push(Se(e, "reader-macro", i, i + 1)), i += 1;
      continue;
    }
    if (s === "\\") {
      const o = Hi(e, i);
      t.push(Se(e, "character", i, o)), i = o;
      continue;
    }
    const r = Hi(e, i), a = e.slice(i, r);
    t.push(Se(e, bd(a), i, r)), i = r;
  }
  return t;
}
function bd(n) {
  return n === "nil" ? "nil" : n === "true" || n === "false" ? "boolean" : n.startsWith(":") ? "keyword" : /^[+-]?(?:\d+|\d+\.\d+)$/.test(n) ? "number" : "symbol";
}
function Se(n, e, t, i) {
  return {
    kind: e,
    start: ar(n, t),
    end: ar(n, i)
  };
}
function Hi(n, e) {
  let t = e;
  for (; t < n.length && !/[\s()[\]{}]/.test(n[t]); )
    t += 1;
  return t;
}
function xd(n, e) {
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
function yd(n, e) {
  const t = n.indexOf(`
`, e);
  return t < 0 ? n.length : t;
}
function mt(n, e) {
  const t = typeof e == "string" ? e : "", i = typeof e == "number" ? e : t.length, s = Va(n, t || i).map(
    (r) => j.mark({ class: za(r.kind) }).range(
      r.start,
      r.end
    )
  );
  return j.set(s, !0);
}
function vd(n = []) {
  return [ye.define({
    create(t) {
      return mt(n, t.doc.toString());
    },
    update(t, i) {
      for (const s of i.effects)
        if (s.is(Un))
          return mt(s.value, i.state.doc.toString());
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => k.decorations.from(t)
  })];
}
function wd() {
  return [ye.define({
    create(e) {
      return mt(
        nr(e.doc.toString()),
        e.doc.toString()
      );
    },
    update(e, t) {
      for (const i of t.effects)
        if (i.is(Un))
          return mt(i.value, t.state.doc.toString());
      return t.docChanged ? mt(
        nr(t.state.doc.toString()),
        t.state.doc.toString()
      ) : e.map(t.changes);
    },
    provide: (e) => k.decorations.from(e)
  })];
}
function Sd(n = []) {
  return [ye.define({
    create(t) {
      return sr(n, t.doc.toString());
    },
    update(t, i) {
      for (const s of i.effects)
        if (s.is(Mn))
          return sr(
            s.value,
            i.state.doc.toString()
          );
      return i.docChanged ? j.none : t.map(i.changes);
    },
    provide: (t) => k.decorations.from(t)
  })];
}
function sr(n, e) {
  const t = kd(n, e).map((i) => {
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
function $a(n, e, t) {
  const i = String(n), s = En(e), r = Math.max(s, En(t));
  return {
    start: rr(i, s),
    end: rr(i, r)
  };
}
function rr(n, e) {
  const t = String(n), i = En(e);
  let s = 0, r = 0;
  for (const a of t) {
    const o = s + qa(a);
    if (o > i || (s = o, r += a.length, s === i))
      return r;
  }
  return t.length;
}
function ar(n, e) {
  const t = String(n), i = Rn(e, t.length);
  let s = 0;
  for (let r = 0; r < i; ) {
    const a = t.codePointAt(r), o = String.fromCodePoint(a);
    s += qa(o), r += o.length;
  }
  return s;
}
function Va(n, e) {
  const t = typeof e == "number" ? e : String(e).length;
  return [...n].map((i) => {
    const s = typeof e == "number" ? {
      start: Rn(i.start, t),
      end: Rn(i.end, t)
    } : $a(e, i.start, i.end);
    return {
      kind: String(i.kind),
      start: s.start,
      end: s.end
    };
  }).filter((i) => i.start < i.end).sort((i, s) => i.start - s.start || i.end - s.end);
}
function kd(n, e) {
  const t = String(e);
  return [...n].map((i) => {
    const s = $a(t, i.start, i.end);
    return {
      ...i,
      start: s.start,
      end: s.end
    };
  }).filter((i) => i.start < i.end).sort((i, s) => i.start - s.start || i.end - s.end);
}
function Rn(n, e) {
  const t = Number(n);
  return Number.isFinite(t) ? Math.max(0, Math.min(e, Math.trunc(t))) : 0;
}
function En(n) {
  const e = Number(n);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function qa(n) {
  const e = n.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const Ka = "wasm-component", Cd = "browser-component-adapter-pending", Ad = "Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.", Md = "rasa-component/", Ga = "rasa:runtime/host", Rd = "rasa:runtime/host@0.1.0", Ua = "rasa:runtime/optimizer", Ed = "rasa:runtime/optimizer@0.1.0", _a = "rasa:runtime/source-loader", Td = "rasa:runtime/source-loader@0.1.0", Od = "rasa:runtime/session@0.1.0", Ya = "runtime-wasm-before-region-entry", or = 65536, Xa = 1, Ja = 2, Qa = 4, Za = 8, eo = 16, Dd = Xa | Ja | Qa | Za | eo, Ld = 256;
class Bd extends Error {
  constructor(e = Ad) {
    super(e), this.name = "RasaBrowserRuntimeUnavailableError", this.runtimeKind = Ka, this.unavailableReason = Cd;
  }
}
class lr extends Error {
  constructor(e) {
    super(e), this.name = "RasaBrowserHostCallError";
  }
}
class _n {
  static async load(e, t = {}) {
    const i = fi(e), s = t.readBytes || io, r = await s(i, "Rasa runtime component"), a = fi(
      t.adapterBaseUrl || Md,
      i
    ), o = t.optimizer ?? await $d(t, i, s), c = await import(
      /* @vite-ignore */
      new URL("ras-runtime.js", a).href
    ), h = Wd(t.host, o, t.sourceLoader), d = /* @__PURE__ */ new Map(), u = await c.instantiate(async (f) => {
      const p = new URL(f, a), g = d.get(p.href);
      if (g) return g;
      const m = await s(p, `Rasa component core module ${f}`), b = await WebAssembly.compile(m);
      return d.set(p.href, b), b;
    }, h);
    return new _n({
      url: i.href,
      adapterBaseUrl: a.href,
      byteLength: r.byteLength,
      imports: h,
      session: u.session || u[Od]
    });
  }
  constructor(e = {}) {
    if (!e.session)
      throw new Error("Rasa Wasm component adapter did not export the session interface");
    this.url = e.url ?? null, this.adapterBaseUrl = e.adapterBaseUrl ?? null, this.byteLength = e.byteLength ?? null, this.available = !0, this.runtimeKind = Ka, this.unavailableReason = null, this.message = "Browser Wasm component runtime ready.", this.session = e.session, this.importObject = e.imports || {};
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
    return new Bd(this.message);
  }
  evaluate(e, t = null) {
    return this.session.evalSource(Ae(e), Vt(t));
  }
  inspect(e, t = null) {
    const i = this.session.inspectSource(Ae(e), Vt(t));
    return cr(i, "inspection artifact");
  }
  syntaxTokens(e) {
    const t = this.session.syntaxTokens(Ae(e));
    return cr(t, "syntax token payload");
  }
  createSession() {
    return this.session.sessionNew();
  }
  freeSession(e) {
    e != null && this.session.sessionFree(e);
  }
  setSessionOptimizerEnabled(e, t) {
    if (typeof this.session.sessionSetOptimizerEnabled != "function")
      throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");
    return this.session.sessionSetOptimizerEnabled(e, !!t);
  }
  loadPackage(e, t) {
    return this.session.sessionLoadPackage(e, st(t));
  }
  async loadPackageAsync(e, t) {
    return await this.loadPackage(e, t);
  }
  evaluateSession(e, t, i = null) {
    return this.session.sessionEval(e, Ae(t), Vt(i));
  }
  async evaluateSessionAsync(e, t, i = null) {
    return await this.evaluateSession(e, t, i);
  }
  evaluateReplSession(e, t, i = null) {
    if (typeof this.session.sessionReplEval != "function")
      throw new Error("Rasa Wasm component does not export sessionReplEval");
    return this.session.sessionReplEval(e, Ae(t), Vt(i));
  }
  async evaluateReplSessionAsync(e, t, i = null) {
    return await this.evaluateReplSession(e, t, i);
  }
}
function Ae(n) {
  return new TextEncoder().encode(String(n ?? ""));
}
function Pd(n) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(n);
}
async function Id(n = [], e = {}) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const s = Fi(i.symbol, i.arity);
    t.set(s, await Fd(i, e));
  }
  return {
    canCall(i, s) {
      return t.has(Fi(i, s));
    },
    tryCall(i, s, r) {
      const a = t.get(Fi(i, s));
      return a ? Vd(a, r) : Jt("missing-callable-region");
    }
  };
}
async function Nd(n, e = {}) {
  const t = fi(n), i = e.readJson || eu, r = ((e.manifest || await i(t.href)).callables || []).map((a) => ({
    symbol: a.symbol,
    arity: a.arity,
    inputIndex: a.inputIndex,
    result: a.result,
    resultProbe: a.resultProbe,
    keys: a.keys,
    url: tu(iu(a, "url"), t).href
  }));
  return Id(r, {
    ...e,
    readBytes: e.readBytes
  });
}
function Wd(n = null, e = null, t = null) {
  const i = {
    [Ga]: jd(n),
    [Ua]: Hd(e),
    [_a]: Xd(t),
    "wasi:cli/environment": { getEnvironment: () => [] },
    "wasi:cli/exit": {
      exit: () => {
        throw new Error("Rasa Wasm component requested wasi:cli/exit");
      }
    },
    "wasi:cli/stdin": { getStdin: () => new hr() },
    "wasi:cli/stdout": { getStdout: () => new zi() },
    "wasi:cli/stderr": { getStderr: () => new zi() },
    "wasi:cli/terminal-input": { TerminalInput: su },
    "wasi:cli/terminal-output": { TerminalOutput: ru },
    "wasi:cli/terminal-stdin": { getTerminalStdin: () => {
    } },
    "wasi:cli/terminal-stdout": { getTerminalStdout: () => {
    } },
    "wasi:cli/terminal-stderr": { getTerminalStderr: () => {
    } },
    "wasi:clocks/monotonic-clock": { subscribeDuration: () => new Tn() },
    "wasi:io/error": { Error: nu },
    "wasi:io/poll": { Pollable: Tn, poll: () => [] },
    "wasi:io/streams": { InputStream: hr, OutputStream: zi },
    "wasi:random/insecure-seed": {
      getInsecureSeed: () => [1n, 2n]
    }
  };
  return Qd(i);
}
function jd(n) {
  return {
    call(e) {
      if (!n)
        throw new lr("no browser host provider is registered");
      if (typeof n.callBytes == "function")
        return Jd(n.callBytes(e));
      if (typeof n.call == "function") {
        const t = n.call(Pd(e));
        return no(t) ? t.then((i) => Ae(i)) : Ae(t);
      }
      throw new lr("browser host provider does not implement call");
    }
  };
}
function Hd(n) {
  return {
    canCall(e, t) {
      return typeof n?.canCall == "function" ? !!n.canCall(e, t) : !1;
    },
    tryCall(e, t, i) {
      return typeof n?.tryCall == "function" ? n.tryCall(e, t, i) : {
        tag: "refused",
        val: {
          reason: "browser-optimizer-unavailable",
          fallback: Ya
        }
      };
    }
  };
}
async function Fd(n, e) {
  const t = Yd(n.resultProbe ?? n.result ?? "i64"), i = Number.isInteger(n.inputIndex) ? n.inputIndex : 0, s = Array.isArray(n.keys) ? n.keys.map(String) : [];
  try {
    return {
      result: t,
      inputIndex: i,
      keys: s,
      exports: await zd(n, e),
      blocker: null
    };
  } catch (r) {
    return {
      result: t,
      inputIndex: i,
      keys: s,
      exports: null,
      blocker: {
        reason: "browser-wasmgc-callable-artifact-unavailable",
        message: r?.message ?? String(r)
      }
    };
  }
}
async function zd(n, e) {
  if (n.exports) return n.exports;
  if (n.instance?.exports) return n.instance.exports;
  if (typeof n.instantiate == "function") {
    const r = await n.instantiate();
    if (r?.exports) return r.exports;
    if (r?.instance?.exports) return r.instance.exports;
  }
  const t = n.imports || e.imports || {};
  let i = n.module ?? null;
  if (!i) {
    const r = e.readBytes || io, a = n.moduleBytes ?? (n.url ? await r(n.url, "WasmGC callable artifact") : null);
    if (!a)
      throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");
    i = await WebAssembly.compile(st(a));
  }
  const s = await WebAssembly.instantiate(i, t);
  if (s?.exports) return s.exports;
  if (s?.instance?.exports) return s.instance.exports;
  throw new Error("WasmGC callable artifact did not instantiate with exports");
}
async function $d(n, e, t) {
  if (!n.optimizerManifestUrl && !n.optimizerManifest)
    return null;
  const i = n.optimizerManifestUrl ? fi(n.optimizerManifestUrl, e).href : e.href;
  return Nd(i, {
    manifest: n.optimizerManifest,
    readJson: n.readJson,
    readBytes: t
  });
}
function Vd(n, e) {
  if (n.blocker)
    return Jt(n.blocker.reason);
  try {
    const t = _d(e?.[n.inputIndex]);
    return t ? (qd(n.exports, t), {
      tag: "executed",
      val: Kd(n)
    }) : Jt("missing-runtime-string-argument");
  } catch {
    return Jt("browser-wasmgc-callable-execution-error");
  }
}
function qd(n, e) {
  const t = n?.rasa_memory, i = n?.rasa_prepare_utf8;
  if (!t?.buffer || typeof i != "function")
    throw new Error("missing WasmGC callable UTF-8 input ABI");
  const s = Math.ceil(e.byteLength / or), r = Math.ceil(t.buffer.byteLength / or);
  s > r && t.grow(s - r), new Uint8Array(t.buffer, 0, e.byteLength).set(e), i(e.byteLength);
}
function Kd(n) {
  switch (n.result) {
    case "i64":
      return {
        tag: "int64",
        val: Jn(Yn(n.exports, "rasa_main_i64"))
      };
    case "i64-vector":
      return {
        tag: "i64-vector",
        val: Gd(n.exports)
      };
    case "i64-map":
      return {
        tag: "i64-map",
        val: Ud(n.exports, n.keys)
      };
    default:
      throw new Error(`unsupported WasmGC callable result probe ${n.result}`);
  }
}
function Gd(n) {
  const e = to(Yn(n, "rasa_main_vector_len")), t = Xn(n, "rasa_main_vector_i64_at");
  return Array.from({ length: e }, (i, s) => Jn(t(s)));
}
function Ud(n, e) {
  const t = to(Yn(n, "rasa_main_map_len"));
  if (t !== e.length)
    throw new Error(`WasmGC map probe length ${t} did not match planned keys ${e.length}`);
  const i = Xn(n, "rasa_main_map_i64_at");
  return e.map((s, r) => ({
    key: s,
    value: Jn(i(r))
  }));
}
function Yn(n, e) {
  return Xn(n, e)();
}
function Xn(n, e) {
  const t = n?.[e];
  if (typeof t != "function")
    throw new Error(`missing WasmGC callable export ${e}`);
  return t;
}
function _d(n) {
  return n?.tag === "utf8-string" || n?.tag === "utf8String" ? st(n.val) : null;
}
function Jt(n) {
  return {
    tag: "refused",
    val: {
      reason: n,
      fallback: Ya
    }
  };
}
function Fi(n, e) {
  return `${String(n)}/${Number(e)}`;
}
function Yd(n) {
  switch (String(n)) {
    case "i64":
    case "int64":
      return "i64";
    case "i64-vector":
    case "vector-i64":
      return "i64-vector";
    case "i64-map":
    case "map-i64":
      return "i64-map";
    default:
      return String(n);
  }
}
function to(n) {
  const e = Number(n);
  if (!Number.isInteger(e) || e < 0)
    throw new Error(`invalid WasmGC probe length ${n}`);
  return e;
}
function Jn(n) {
  return typeof n == "bigint" ? n : (typeof n == "number" && Number.isSafeInteger(n), BigInt(n));
}
function Xd(n) {
  return {
    loadRunnerSources(e, t) {
      if (typeof n?.loadRunnerSources == "function")
        return n.loadRunnerSources(e, t);
      throw new Error("browser source-loader is not configured for runner :files/:paths");
    }
  };
}
function Jd(n) {
  return no(n) ? n.then((e) => st(e)) : st(n);
}
function Qd(n) {
  return {
    ...n,
    [Rd]: n[Ga],
    [Ed]: n[Ua],
    [Td]: n[_a],
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
function Vt(n) {
  if (typeof n == "number") return n;
  let e = Dd;
  return n?.phases && n.phases !== "all" && (e = (Array.isArray(n.phases) ? n.phases : [n.phases]).reduce((i, s) => i | Zd(s), 0)), n?.traces && (e |= Ld), e;
}
function Zd(n) {
  switch (String(n)) {
    case "reader":
      return Xa;
    case "analysis":
    case "analyze":
      return Ja;
    case "ir":
      return Qa;
    case "facts":
      return Za;
    case "eval":
      return eo;
    default:
      return 0;
  }
}
function cr(n, e) {
  try {
    return JSON.parse(n);
  } catch (t) {
    throw new Error(`failed to parse ${e}: ${t.message}`);
  }
}
function st(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : Ae(n);
}
async function io(n, e) {
  const t = await fetch(n);
  if (!t.ok)
    throw new Error(`failed to load ${e}: ${t.status}`);
  return st(await t.arrayBuffer());
}
async function eu(n) {
  const e = await fetch(n);
  if (!e.ok)
    throw new Error(`failed to load JSON ${n}: ${e.status}`);
  return e.json();
}
function fi(n, e = null) {
  return new URL(String(n), e || globalThis.location?.href || import.meta.url);
}
function tu(n, e) {
  return new URL(String(n), e);
}
function iu(n, e) {
  if (!n || n[e] === void 0 || n[e] === null || n[e] === "")
    throw new Error(`callable WasmGC manifest entry is missing ${e}`);
  return n[e];
}
function no(n) {
  return n && typeof n.then == "function";
}
class nu {
}
class Tn {
  block() {
  }
}
class hr {
}
class zi {
  checkWrite() {
    return 0n;
  }
  write() {
  }
  blockingFlush() {
  }
  subscribe() {
    return new Tn();
  }
}
class su {
}
class ru {
}
const so = `(def orders
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
 :by-id (zipmap (map :id enriched) enriched)}`, $i = [
  {
    label: "Data Pipeline",
    story: "Reader, analyzer, facts, plan, eval",
    description: "Nested maps, sets-as-functions, scalar hints, sequence filters, zipmap, and a compact business result.",
    phases: ["reader", "analyzer", "facts", "plan", "eval"],
    source: so
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
class au {
  constructor(e = 4) {
    this.limit = e, this.artifacts = /* @__PURE__ */ new Map(), this.reports = /* @__PURE__ */ new Map();
  }
  inspect(e, t) {
    dr(e);
    const i = String(t), s = this.artifacts.get(i);
    if (s)
      return { artifact: s, cacheHit: !0 };
    const r = e.inspect(i, {
      includeEval: !0,
      includePlan: !0,
      detail: "standard"
    });
    return ur(this.artifacts, i, r, this.limit), { artifact: r, cacheHit: !1 };
  }
  runtimeReport(e, t, i) {
    dr(e);
    const s = String(t), r = this.reports.get(s);
    if (r)
      return r;
    const a = e.evaluate(s), o = {
      text: a,
      tokens: i(a)
    };
    return ur(this.reports, s, o, this.limit), o;
  }
}
function dr(n) {
  if (n?.available === !1)
    throw n.unavailableError?.() || new Error(n.message || "browser runtime unavailable");
}
function ur(n, e, t, i) {
  for (n.set(e, t); n.size > i; )
    n.delete(n.keys().next().value);
}
const ou = `
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
  color: var(--phase-reader);
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
  border: 1px solid color-mix(in srgb, var(--phase-analysis) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--phase-analysis);
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
  color: var(--phase-analysis);
  background: rgba(255, 255, 255, 0.03);
  font-size: 12px;
  font-weight: 600;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.example-button-secondary {
  color: var(--phase-facts);
}

.example-button:hover {
  color: var(--rasa-text);
  border-color: var(--phase-analysis);
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
  border-top: 1px solid color-mix(in srgb, var(--phase-facts) 35%, var(--rasa-border));
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
  background: linear-gradient(90deg, color-mix(in srgb, var(--phase-facts) 8%, transparent), transparent);
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
  border: 1px solid color-mix(in srgb, var(--phase-facts) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--phase-facts);
  font-size: 11px;
  font-weight: 780;
}

.run-button {
  min-width: 86px;
  color: var(--rasa-button-text);
  background: linear-gradient(180deg, var(--rasa-green), var(--rasa-green));
  border-color: color-mix(in srgb, var(--phase-facts) 65%, var(--rasa-border));
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
  caret-color: var(--phase-reader);
}

.cm-focused {
  outline: none;
}

.cm-cursorLayer {
  pointer-events: none;
}

.cm-cursor {
  border-left: 2px solid var(--phase-reader) !important;
  margin-left: -1px;
}

.cm-editor .cm-selectionBackground,
.cm-editor.cm-focused .cm-selectionBackground {
  background: color-mix(in srgb, var(--phase-analysis) 30%, transparent) !important;
}

.rasa-evidence-span {
  background: color-mix(in srgb, var(--phase-facts) 18%, transparent);
  box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--phase-facts) 75%, transparent);
}

.rasa-evidence-pinned {
  background: color-mix(in srgb, var(--phase-analysis) 22%, transparent);
  box-shadow: inset 0 -2px 0 var(--phase-analysis);
}

.rasa-token-comment { color: var(--rasa-dim); font-style: italic; }
.rasa-token-delimiter { color: var(--rasa-muted); }
.rasa-token-reader-macro,
.rasa-token-metadata { color: var(--phase-reader); font-weight: 760; }
.rasa-token-keyword { color: var(--rasa-green); }
.rasa-token-string { color: var(--rasa-gold); }
.rasa-token-number,
.rasa-token-boolean,
.rasa-token-nil { color: var(--phase-ir); }
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
  border-color: var(--phase-analysis);
  background: var(--rasa-panel-raised);
}

.evidence-card:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--phase-analysis) 70%, transparent);
  outline-offset: 2px;
}

.evidence-card[data-selected="true"] {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--phase-analysis) 30%, transparent);
}

.evidence-card[data-phase~="facts"] {
  border-left: 3px solid var(--phase-facts);
}

.evidence-card[data-phase~="plan"] {
  border-left: 3px solid var(--phase-plan);
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
  border-color: color-mix(in srgb, var(--phase-facts) 55%, var(--rasa-border));
}

.focus-card[data-phase~="plan"],
.plan-card {
  border-color: color-mix(in srgb, var(--phase-plan) 55%, var(--rasa-border));
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
  color: var(--phase-reader);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
}

.source-excerpt {
  margin-top: 8px;
  border: 1px solid var(--rasa-border);
  border-radius: 6px;
  background: rgba(6, 10, 14, 0.45);
  color: var(--phase-reader);
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
  background: color-mix(in srgb, var(--phase-reader) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--phase-reader);
  color: var(--rasa-text);
}

.source-marker[data-severity="error"] {
  background: color-mix(in srgb, var(--rasa-error) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-error);
}

.source-marker[data-severity="warning"] {
  background: color-mix(in srgb, var(--phase-plan) 16%, transparent);
  box-shadow: inset 0 -2px 0 var(--phase-plan);
}

.source-marker-zero {
  display: inline-block;
  width: 2px;
  min-height: 1.2em;
  vertical-align: -0.18em;
}

.diagnostic-card[data-status="recoverable"] .diagnostic-head span {
  border-color: color-mix(in srgb, var(--phase-plan) 55%, var(--rasa-border));
  color: var(--phase-plan);
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
  color: var(--phase-reader);
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
  color: var(--phase-reader);
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
  color: var(--phase-reader);
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
  border-color: color-mix(in srgb, var(--phase-reader) 62%, var(--rasa-border));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--phase-reader) 11%, transparent), transparent 48%),
    var(--rasa-panel-raised);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--phase-reader) 22%, transparent);
}

.scenario-list .example-card strong {
  font-size: 14px;
}

.scenario-list .example-story {
  margin-top: 4px;
  color: var(--phase-reader);
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
  border: 1px solid color-mix(in srgb, var(--phase-reader) 38%, var(--rasa-border));
  border-radius: 5px;
  color: var(--phase-reader);
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
  border-left: 3px solid var(--phase-reader);
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
class lu extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.engine = null, this.editor = null, this.runCount = 0, this.currentRun = null, this.inspectionSession = new au(), this.selectedGroup = null, this.workbenchModel = null, this.syntaxTimer = null, this.themeListener = null, this.overlayKeydown = null, this.overlayReturnFocus = null;
  }
  connectedCallback() {
    this.syncTheme(lo()), this.themeListener = (t) => this.syncTheme(t.detail?.theme || "dark"), window.addEventListener("rasa-theme-change", this.themeListener), this.render();
    const e = Ci({});
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
    const e = kl({ examples: $i });
    this.shadowRoot.innerHTML = `
      <style>${ho()}${go}${ou}</style>
      <section class="shell systems-shell shell-${this.demoMode}" aria-label="Rasa systems workbench">
        <header class="systems-topbar">
          <div class="systems-brand">
            <img class="systems-logo" src="${ao.logo}" alt="Rasa" />
            <div class="systems-title">
              <h1>${E(e.header.title)}</h1>
              <p>${E(e.header.subtitle)}</p>
            </div>
          </div>
          <nav class="systems-nav" aria-label="Rasa demo sections">
            ${e.header.nav.map(vu).join("")}
          </nav>
          <div class="systems-status" aria-label="Runtime status">
            ${e.header.statusCells.map(wu).join("")}
            <button class="theme-toggle systems-theme-toggle" type="button" data-role="theme-toggle" aria-label="Toggle color theme">Toggle Theme</button>
          </div>
        </header>

        <section class="workbench-grid" aria-label="Rasa evidence workbench">
          <section class="scenario-panel" aria-label="Programs with pressure">
            <div class="panel-head">
              <div>
                <span class="label">${E(e.scenarioPanel.label)}</span>
                <span class="panel-subtitle">${E(e.scenarioPanel.subtitle)}</span>
              </div>
              <span class="scenario-count">${e.scenarioPanel.count}</span>
            </div>
            <div class="scenario-list command-shelf" data-role="examples">
              ${$i.map((t, i) => ku(t, i)).join("")}
            </div>
          </section>

          <section class="source-panel centerstage ${K.classes.visualSlot}" ${K.attrs.visualSlot}="source-editor" aria-label="Rasa centerstage">
            <div class="stage-head">
              <div>
                <span class="label">${E(e.sourceStage.label)}</span>
                <span class="panel-subtitle">${E(e.sourceStage.subtitle)}</span>
              </div>
              <div class="stage-proof-chips" aria-label="Inspectable phase products">
                ${e.sourceStage.chips.map(Su).join("")}
              </div>
            </div>

            <div class="stage-body">
              <div class="editor-frame">
                <div class="editor-head">
                  <div>
                    <span class="label">${E(e.sourceStage.inputLabel)}</span>
                    <span class="panel-subtitle">${E(e.sourceStage.inputSubtitle)}</span>
                  </div>
                  <span class="run-hint">${E(e.sourceStage.runHint)}</span>
                </div>
                <div class="editor" data-role="editor"></div>
                <div class="editor-foot">
                  <span>${E(e.sourceStage.footnote)}</span>
                  <button type="button" class="run-button" data-role="run">Run</button>
                </div>
              </div>
            </div>
            <div class="result-strip" data-role="result-strip"></div>
          </section>

          <aside class="projection-panel ${K.classes.visualSlot}" ${K.attrs.visualSlot}="value-inspector" aria-label="Projection of truth">
            <div class="panel-head">
              <div>
                <span class="label">${E(e.projectionPanel.label)}</span>
                <span class="panel-subtitle" data-role="last-run">${E(e.projectionPanel.subtitle)}</span>
              </div>
              <span class="projection-rule" title="${E(e.projectionPanel.ruleHelp)}">${E(e.projectionPanel.rule)}</span>
            </div>
            <div class="projection-summary" data-role="projection-summary">
              <span data-role="evidence-count">${E(e.projectionPanel.emptySummary)}</span>
            </div>
            <div class="evidence-list ${K.classes.visualSlot}" ${K.attrs.visualSlot}="projection-legend" data-role="evidence-list" role="list"></div>
            <div class="focus-body ${K.classes.visualSlot}" ${K.attrs.visualSlot}="diagnostics" data-role="focus-body"></div>
          </aside>
        </section>

      </section>
    `, this.shadowRoot.querySelector('[data-role="run"]').addEventListener("click", () => this.run()), this.shadowRoot.querySelector('[data-role="theme-toggle"]')?.addEventListener("click", () => this.syncTheme(co())), this.shadowRoot.querySelector('[data-role="examples"]').addEventListener("click", (t) => this.applyExample(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("click", (t) => this.pinEvidence(t)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("keydown", (t) => this.pinEvidenceByKey(t)), this.updateThemeToggle();
  }
  syncTheme(e) {
    const t = e === "light" ? "light" : "dark";
    this.setAttribute("data-theme", t), this.updateThemeToggle();
  }
  updateThemeToggle() {
    const e = this.shadowRoot?.querySelector('[data-role="theme-toggle"]');
    if (e) {
      const t = this.getAttribute("data-theme") || "dark";
      e.textContent = Zn(t), e.setAttribute("aria-label", `Switch to ${Zn(t).toLowerCase()} theme`);
    }
  }
  mountEditor() {
    const e = this.shadowRoot.querySelector('[data-role="editor"]'), t = this.getAttribute("source") || so;
    this.editor = gd({
      parent: e,
      doc: t,
      onRun: () => this.run(),
      onChange: () => {
        this.scheduleSyntaxRefresh(), this.clearEvidenceState();
      },
      extensions: [Sd()]
    }), this.editor.focus();
  }
  async loadEngine() {
    try {
      if (this.engine = await _n.load(this.runtimeUrl), this.engine.available === !1) {
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
          effects: Un.of(e.tokens || [])
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
    const i = $i[Number(t.dataset.exampleIndex)];
    if (!i || !this.editor)
      return;
    const s = t.dataset.exampleAction;
    if (s === "load")
      for (const c of this.shadowRoot.querySelectorAll(".example-card"))
        c.dataset.active = String(c.dataset.exampleIndex === t.dataset.exampleIndex);
    const r = s === "append" ? Cu(i.source) : i.source, a = s === "append" ? this.editor.state.doc.length : 0, o = s === "append" ? this.editor.state.doc.length : this.editor.state.doc.length, l = a + r.length;
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
    this.currentRun = null, this.selectedGroup = null, this.workbenchModel = null, this.editor?.dispatch({ effects: Mn.of([]) }), this.shadowRoot.querySelector('[data-role="result-strip"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-list"]').textContent = "", this.shadowRoot.querySelector('[data-role="focus-body"]').textContent = "";
    const i = Ci({});
    this.applyVisualSlots(i), this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = e, this.shadowRoot.querySelector('[data-role="last-run"]').textContent = t;
  }
  renderWorkbench() {
    if (!this.currentRun)
      return;
    let e = this.selectedGroup, t = is(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    });
    (!e || !t.groups.some((a) => a.id === e)) && (e = ul(t.groups), this.selectedGroup = e || null, t = is(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: e
    })), this.workbenchModel = t;
    const i = Ci(t);
    this.applyVisualSlots(i), this.renderResult(t), this.renderEvidenceList(t), this.renderFocus(t);
    const s = this.selectedGroup ? t.sourceHighlights : [];
    this.editor?.dispatch({ effects: Mn.of(s) });
    const r = this.currentRun.cacheHit ? " / cached" : "";
    this.shadowRoot.querySelector('[data-role="last-run"]').textContent = `run ${this.runCount} / ${t.status}${r}`;
  }
  applyVisualSlots(e) {
    po(this.shadowRoot, e.slots || []);
  }
  renderResult(e) {
    const t = this.shadowRoot.querySelector('[data-role="result-strip"]'), i = gl(e);
    t.textContent = "", t.append(cu(i.result, this), du(i.metrics));
  }
  renderEvidenceList(e) {
    const t = this.shadowRoot.querySelector('[data-role="evidence-list"]'), i = dl(e, { selectedId: this.selectedGroup });
    if (t.textContent = "", this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = i.summary, i.empty) {
      const s = document.createElement("div");
      s.className = "empty-sections", s.textContent = i.emptyMessage, t.append(s);
      return;
    }
    for (const s of i.cards) {
      const r = document.createElement("article");
      r.className = "evidence-card", r.dataset.evidenceGroup = s.id, r.dataset.phase = s.phases.join(" "), r.dataset.domain = s.domains.join(" "), r.dataset.provenance = s.provenances.join(" "), r.dataset.projectionLayer = s.projectionLayer, r.setAttribute(K.attrs.projectionLayer, s.projectionLayer), r.dataset.selected = String(s.selected), r.tabIndex = 0, r.setAttribute("role", "listitem"), r.setAttribute("aria-current", s.selected ? "true" : "false"), r.innerHTML = `
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
      const a = r.querySelector(".evidence-tags");
      for (const l of s.tags)
        a.append(ro(l));
      const o = r.querySelector(".evidence-entries");
      for (const l of s.entries) {
        const c = document.createElement("div");
        c.className = "evidence-entry", c.dataset.phase = l.phase, c.dataset.provenance = l.provenance, c.textContent = l.text, o.append(c);
      }
      t.append(r);
    }
  }
  renderFocus(e) {
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]'), i = xl(e);
    t.textContent = "";
    for (const s of i.sections)
      s.kind === "focus" ? t.append(fu(s.card, this)) : s.kind === "plan" ? t.append(pu(s.card)) : s.kind === "diagnostics" ? t.append(gu(s.panel)) : s.kind === "artifact" && t.append(xu(s, this.currentRun.artifact, this));
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
  openResultValue(e) {
    const t = Sr(e.value ?? "nil");
    this.openOverlay({
      eyebrow: "Rasa value",
      title: e.label || "Result",
      meta: e.status || "",
      value: t,
      tokens: this.syntaxTokensFor(t)
    });
  }
  openOverlay({ eyebrow: e, title: t, meta: i, value: s, tokens: r }) {
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
    `, a.querySelector(".label").textContent = e, a.querySelector("h2").textContent = t, a.querySelector(".status-text").textContent = i, Ct(a.querySelector(".value-overlay-code"), s, r || []), a.addEventListener("click", (o) => {
      o.target.closest('[data-role="overlay-close"]') && this.closeOverlay();
    }), this.overlayKeydown = (o) => {
      o.key === "Escape" && this.closeOverlay();
    }, window.addEventListener("keydown", this.overlayKeydown), this.shadowRoot.append(a), a.querySelector(".value-overlay-close")?.focus();
  }
  closeOverlay() {
    this.shadowRoot?.querySelector(".value-overlay")?.remove(), this.overlayKeydown && (window.removeEventListener("keydown", this.overlayKeydown), this.overlayKeydown = null), this.overlayReturnFocus?.isConnected && this.overlayReturnFocus.focus(), this.overlayReturnFocus = null;
  }
}
function cu(n, e) {
  const t = document.createElement("article");
  t.className = "result-card", t.dataset.status = n.status || "unknown", t.innerHTML = `
    <div class="result-card-head">
      <span class="metric-label">Result</span>
      <div class="result-card-actions">
        <span class="status-text"></span>
        <button type="button" class="result-full-button">Open full value</button>
      </div>
    </div>
    <pre class="result-value result-preview"></pre>
  `, t.querySelector(".status-text").textContent = n.status || "";
  const i = Sr(n.value ?? "nil"), s = hu(i), r = t.querySelector(".result-full-button");
  return r.hidden = !s.truncated, r.addEventListener("click", () => e.openResultValue(n)), Ct(
    t.querySelector(".result-value"),
    s.text,
    e.syntaxTokensFor(s.text)
  ), t;
}
function hu(n) {
  const e = String(n).split(`
`), t = 10, i = 720;
  let s = e.slice(0, t).join(`
`), r = e.length > t;
  return s.length > i && (s = `${s.slice(0, i).trimEnd()} ...`, r = !0), r && !s.endsWith("...") && (s = `${s}
...`), { text: s, truncated: r };
}
function du(n = []) {
  const e = document.createElement("div");
  e.className = "metric-deck";
  for (const t of n)
    e.append(uu(t.label, t.value, t.meta));
  return e;
}
function uu(n, e, t) {
  const i = document.createElement("div");
  return i.className = "metric-card", i.innerHTML = `
    <span class="metric-label"></span>
    <strong class="metric-value"></strong>
    <span class="metric-meta"></span>
  `, i.querySelector(".metric-label").textContent = n, i.querySelector(".metric-value").textContent = String(e ?? "nil"), i.querySelector(".metric-meta").textContent = t || "", i;
}
function ro(n) {
  const e = document.createElement("span");
  return e.className = "semantic-tag", e.textContent = n.startsWith(":") ? n : `:${n}`, e;
}
function fu(n, e) {
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
    i.append(ro(s));
  return Ct(
    t.querySelector(".edn-block"),
    n.rendered,
    e.syntaxTokensFor(n.rendered)
  ), t;
}
function pu(n) {
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
    t.append(yu(i.label, i.value, i.kind));
  return e;
}
function gu(n) {
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
    for (const o of i.details) {
      const l = document.createElement("div"), c = document.createElement("dt"), h = document.createElement("dd");
      h.dataset.field = o.field, c.textContent = o.label, h.textContent = o.value, l.append(c, h), r.append(l);
    }
    const a = s.querySelector('[data-field="source-excerpt"]');
    if (i.sourceExcerpt?.lines?.length)
      a.replaceChildren(mu(i.sourceExcerpt));
    else if (i.excerpt) {
      const o = document.createElement("code");
      o.textContent = i.excerpt, a.replaceChildren(o);
    } else
      a.remove();
    t.append(s);
  }
  return e;
}
function mu(n) {
  const e = document.createElement("div");
  e.className = "source-excerpt-frame";
  for (const t of n.lines || []) {
    const i = document.createElement("div");
    i.className = "source-excerpt-line";
    const s = document.createElement("span");
    s.className = "source-excerpt-gutter", s.textContent = String(t.line ?? "");
    const r = document.createElement("code");
    r.className = "source-excerpt-code", bu(r, t, n.markers || []), i.append(s, r), e.append(i);
  }
  return e;
}
function bu(n, e, t) {
  for (const i of Sl(e, t))
    if (i.marker) {
      const s = document.createElement("span");
      s.className = "source-marker", i.zero && s.classList.add("source-marker-zero"), s.dataset.kind = i.marker.kind, s.dataset.severity = i.marker.severity, s.title = i.marker.label, s.textContent = i.text, n.append(s);
    } else i.text && n.append(document.createTextNode(i.text));
}
function xu(n, e, t) {
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
      const a = document.createElement("div");
      a.className = "runtime-summary", a.textContent = "Runtime report";
      const o = document.createElement("pre");
      o.className = "edn-block runtime-report";
      let l = null;
      const c = Uo(e);
      try {
        l = t.runtimeReport();
      } catch (h) {
        l = { text: `runtime report unavailable: ${h.message}`, tokens: [] };
      }
      Ct(r, c, t.syntaxTokensFor(c)), Ct(o, l?.text || "nil", l?.tokens || []), s.append(r, a, o), i.dataset.rendered = "true";
    },
    { once: !0 }
  ), i;
}
function yu(n, e, t = "") {
  const i = document.createElement("div");
  return i.className = "plan-row", i.dataset.kind = t, i.innerHTML = `
    <span></span>
    <strong></strong>
  `, i.querySelector("span").textContent = n, i.querySelector("strong").textContent = e, i;
}
function vu(n) {
  return `<a class="${n.active ? "active" : ""}" href="${E(n.href)}">${E(n.label)}</a>`;
}
function wu(n) {
  const e = n.state ? ` data-state="${E(n.state)}"` : "";
  return `
    <span class="status-cell">
      <span>${E(n.label)}</span>
      <strong data-role="${E(n.role)}"${e}>${E(n.value)}</strong>
    </span>
  `;
}
function Su(n) {
  return `<span data-phase-id="${E(n.phaseId)}" data-slot-id="${E(n.slotId)}">${E(n.label)}</span>`;
}
function ku(n, e) {
  const t = E(n.source.split(`
`).find(Boolean) || n.source), i = (n.phases || []).slice(0, 5).map((s) => `<span>${E(s)}</span>`).join("");
  return `
    <article class="example-card" data-example-index="${e}" data-active="${e === 0 ? "true" : "false"}">
      <div>
        <strong>${E(n.label)}</strong>
        <span class="example-story">${E(n.story || t)}</span>
        <p>${E(n.description || t)}</p>
        <div class="example-phase-tags">${i}</div>
      </div>
      <div class="example-actions">
        <button type="button" class="example-button" data-example-index="${e}" data-example-action="load">Load</button>
        <button type="button" class="example-button example-button-secondary" data-example-index="${e}" data-example-action="append">Append</button>
      </div>
    </article>
  `;
}
function Ct(n, e, t) {
  n.textContent = "";
  for (const i of md(e, t)) {
    if (!i.className) {
      n.append(document.createTextNode(i.text));
      continue;
    }
    const s = document.createElement("span");
    s.className = i.className, s.textContent = i.text, n.append(s);
  }
}
function Cu(n) {
  return `

${n}`;
}
function E(n) {
  return String(n).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
customElements.define("rasa-browser-inspection-workbench", lu);
