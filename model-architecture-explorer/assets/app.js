import{j as s,r as d,b as Ot,J as Hn,d as Wn}from"./react.js";import{i as Lt,B as It,C as qt}from"./graph.js";import{S as Kn,k as Pt,E as te,a as En,l as Bt,d as _t,b as Gn,D as sn}from"./editor.js";import{l as zt}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Jn="wasm-component",Ft="browser-component-adapter-pending",gn="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.",Ut="rasa-component/",Yn="rasa:runtime/host",Dt="rasa:runtime/host@0.1.0",Vt="rasa:runtime/session@0.1.0",Xn=1,Zn=2,Qn=4,et=8,nt=16,Ht=Xn|Zn|Qn|et|nt,Wt=256;class Kt extends Error{constructor(n=gn){super(n),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=Jn,this.unavailableReason=Ft}}class Tn extends Error{constructor(n){super(n),this.name="RasaBrowserHostCallError"}}class xn{static async load(n,t={}){const r=$n(n),a=t.readBytes||er,i=await a(r,"Rasa runtime component"),o=$n(t.adapterBaseUrl||Ut,r),c=await import(new URL("ras-runtime.js",o).href),u=Jt(t.host),p=new Map,f=await c.instantiate(async m=>{const y=new URL(m,o),S=p.get(y.href);if(S)return S;const U=await a(y,`Rasa component core module ${m}`),P=await WebAssembly.compile(U);return p.set(y.href,P),P},u);return new xn({url:r.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:u,session:f.session||f[Vt]})}constructor(n={}){if(!n.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=n.url??null,this.adapterBaseUrl=n.adapterBaseUrl??null,this.byteLength=n.byteLength??null,this.available=!0,this.runtimeKind=Jn,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=n.session,this.importObject=n.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new Kt(this.message)}evaluate(n,t=null){return this.session.evalSource(z(n),$e(t))}inspect(n,t=null){const r=this.session.inspectSource(z(n),$e(t));return Mn(r,"inspection artifact")}syntaxTokens(n){const t=this.session.syntaxTokens(z(n));return Mn(t,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(n){n!=null&&this.session.sessionFree(n)}loadPackage(n,t){return this.session.sessionLoadPackage(n,Ie(t))}async loadPackageAsync(n,t){return await this.loadPackage(n,t)}evaluateSession(n,t,r=null){return this.session.sessionEval(n,z(t),$e(r))}async evaluateSessionAsync(n,t,r=null){return await this.evaluateSession(n,t,r)}evaluateReplSession(n,t,r=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(n,z(t),$e(r))}async evaluateReplSessionAsync(n,t,r=null){return await this.evaluateReplSession(n,t,r)}}function z(e){return new TextEncoder().encode(String(e??""))}function Gt(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function Jt(e=null){const n={[Yn]:Yt(e),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new An},"wasi:cli/stdout":{getStdout:()=>new Ze},"wasi:cli/stderr":{getStderr:()=>new Ze},"wasi:cli/terminal-input":{TerminalInput:tr},"wasi:cli/terminal-output":{TerminalOutput:rr},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new an},"wasi:io/error":{Error:nr},"wasi:io/poll":{Pollable:an,poll:()=>[]},"wasi:io/streams":{InputStream:An,OutputStream:Ze},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return Zt(n)}function Yt(e){return{call(n){if(!e)throw new Tn("no browser host provider is registered");if(typeof e.callBytes=="function")return Xt(e.callBytes(n));if(typeof e.call=="function"){const t=e.call(Gt(n));return tt(t)?t.then(r=>z(r)):z(t)}throw new Tn("browser host provider does not implement call")}}}function Xt(e){return tt(e)?e.then(n=>Ie(n)):Ie(e)}function Zt(e){return{...e,[Dt]:e[Yn],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function $e(e){if(typeof e=="number")return e;let n=Ht;return e?.phases&&e.phases!=="all"&&(n=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((r,a)=>r|Qt(a),0)),e?.traces&&(n|=Wt),n}function Qt(e){switch(String(e)){case"reader":return Xn;case"analysis":case"analyze":return Zn;case"ir":return Qn;case"facts":return et;case"eval":return nt;default:return 0}}function Mn(e,n){try{return JSON.parse(e)}catch(t){throw new Error(`failed to parse ${n}: ${t.message}`)}}function Ie(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):z(e)}async function er(e,n){const t=await fetch(e);if(!t.ok)throw new Error(`failed to load ${n}: ${t.status}`);return Ie(await t.arrayBuffer())}function $n(e,n=null){return new URL(String(e),n||globalThis.location?.href||import.meta.url)}function tt(e){return e&&typeof e.then=="function"}class nr{}class an{block(){}}class An{}class Ze{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new an}}class tr{}class rr{}const sr=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),rt=Kn.define();Kn.define();function ar(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}function ir({parent:e,doc:n="",onChange:t=null,onRun:r=null,readOnly:a=!1,liveLexicalHighlight:i=!1,extensions:o=[]}={}){if(!e)throw new Error("mountRasaCodeEditor requires a parent element");const l=r?Pt.of(ar(r)):[],c=i?mr():ur();return new te({parent:e,state:En.create({doc:n,extensions:[Bt(),_t(),te.lineWrapping,c,l,te.editable.of(!a),En.readOnly.of(a),te.updateListener.of(u=>{u.docChanged&&t?.(u.state.doc.toString(),u)}),...o]})})}function or(e){return sr[e]??"rasa-token-unknown"}function Cn(e){const n=String(e),t=[];let r=0;for(;r<n.length;){const a=n[r];if(/\s/.test(a)){r+=1;continue}if("()[]{}".includes(a)){t.push(_(n,"delimiter",r,r+1)),r+=1;continue}if(a===";"){const l=dr(n,r);t.push(_(n,"comment",r,l)),r=l;continue}if(a==='"'){const l=cr(n,r);t.push(_(n,"string",r,l)),r=l;continue}if(a==="^"){t.push(_(n,"reader-macro",r,r+1));const l=r+1;if(l<n.length&&!/[\s()[\]{}]/.test(n[l])){const c=Qe(n,l);t.push(_(n,"metadata",l,c)),r=c}else r+=1;continue}if(a==="'"||a==="`"||a==="~"||a==="@"){t.push(_(n,"reader-macro",r,r+1)),r+=1;continue}if(a==="\\"){const l=Qe(n,r);t.push(_(n,"character",r,l)),r=l;continue}const i=Qe(n,r),o=n.slice(r,i);t.push(_(n,lr(o),r,i)),r=i}return t}function lr(e){return e==="nil"?"nil":e==="true"||e==="false"?"boolean":e.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(e)?"number":"symbol"}function _(e,n,t,r){return{kind:n,start:Ln(e,t),end:Ln(e,r)}}function Qe(e,n){let t=n;for(;t<e.length&&!/[\s()[\]{}]/.test(e[t]);)t+=1;return t}function cr(e,n){let t=!1;for(let r=n+1;r<e.length;r+=1){const a=e[r];if(t)t=!1;else if(a==="\\")t=!0;else if(a==='"')return r+1}return e.length}function dr(e,n){const t=e.indexOf(`
`,n);return t<0?e.length:t}function ge(e,n){const t=typeof n=="string"?n:"",r=typeof n=="number"?n:t.length,a=fr(e,t||r).map(i=>sn.mark({class:or(i.kind)}).range(i.start,i.end));return sn.set(a,!0)}function ur(e=[]){return[Gn.define({create(t){return ge(e,t.doc.toString())},update(t,r){for(const a of r.effects)if(a.is(rt))return ge(a.value,r.state.doc.toString());return r.docChanged?sn.none:t.map(r.changes)},provide:t=>te.decorations.from(t)})]}function mr(){return[Gn.define({create(n){return ge(Cn(n.doc.toString()),n.doc.toString())},update(n,t){for(const r of t.effects)if(r.is(rt))return ge(r.value,t.state.doc.toString());return t.docChanged?ge(Cn(t.state.doc.toString()),t.state.doc.toString()):n.map(t.changes)},provide:n=>te.decorations.from(n)})]}function pr(e,n,t){const r=String(e),a=ln(n),i=Math.max(a,ln(t));return{start:On(r,a),end:On(r,i)}}function On(e,n){const t=String(e),r=ln(n);let a=0,i=0;for(const o of t){const l=a+st(o);if(l>r||(a=l,i+=o.length,a===r))return i}return t.length}function Ln(e,n){const t=String(e),r=on(n,t.length);let a=0;for(let i=0;i<r;){const o=t.codePointAt(i),l=String.fromCodePoint(o);a+=st(l),i+=l.length}return a}function fr(e,n){const t=typeof n=="number"?n:String(n).length;return[...e].map(r=>{const a=typeof n=="number"?{start:on(r.start,t),end:on(r.end,t)}:pr(n,r.start,r.end);return{kind:String(r.kind),start:a.start,end:a.end}}).filter(r=>r.start<r.end).sort((r,a)=>r.start-a.start||r.end-a.end)}function on(e,n){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(n,Math.trunc(t))):0}function ln(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,Math.trunc(n)):0}function st(e){const n=e.codePointAt(0);return n<=127?1:n<=2047?2:n<=65535?3:4}const hr=`
.rasa-token-boolean,
.rasa-token-nil {
  color: var(--rasa-gold);
}

.rasa-token-character,
.rasa-token-string {
  color: var(--rasa-green);
}

.rasa-token-comment {
  color: var(--rasa-dim, var(--rasa-muted));
  font-style: italic;
}

.rasa-token-keyword {
  color: var(--rasa-cyan);
}

.rasa-token-metadata,
.rasa-token-reader-macro {
  color: var(--rasa-purple, var(--rasa-cyan));
}

.rasa-token-number {
  color: var(--rasa-red);
}

.rasa-token-symbol {
  color: var(--rasa-text);
}

.rasa-token-delimiter {
  color: var(--rasa-muted);
}
`,In=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),at="rasa.theme",yr=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});yr.dark;function gr(e=document.documentElement){const n=localStorage.getItem(at),t=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return it(t,e),t}function it(e,n=document.documentElement){const t=e==="light"?"light":"dark";return n.dataset.rasaTheme=t,n.setAttribute("data-theme",t),localStorage.setItem(at,t),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:t}})),t}function xr(e=document.documentElement){return it(e.dataset.rasaTheme==="light"?"dark":"light",e)}function qn(e){return e==="light"?"Dark":"Light"}const j=Object.freeze({classes:Object.freeze({phaseRoute:"rasa-phase-route",phaseNode:"rasa-phase-node",projectionLegend:"rasa-projection-legend",projectionChip:"rasa-projection-chip",projectionEmpty:"rasa-projection-empty",phaseWidgetMap:"rasa-phase-widget-map",phaseWidgetLink:"rasa-phase-widget-link",surfaceSwitcher:"rasa-surface-switcher",surfaceLink:"rasa-surface-link",boundaryRoute:"rasa-boundary-route",boundaryStep:"rasa-boundary-step",visualSlot:"rasa-visual-slot"}),attrs:Object.freeze({phaseId:"data-phase-id",tone:"data-tone",status:"data-status",projectionLayer:"data-layer",boundaryTone:"data-tone",visualSlot:"data-visual-slot",slotStatus:"data-slot-status",slotCount:"data-slot-count",slotMeta:"data-slot-meta"})});function bn(e,n={}){const t=typeof e=="string"?{id:e}:e||{};return{[j.attrs.visualSlot]:t.id||"",[j.attrs.slotStatus]:t.status||n.status||"",[j.attrs.slotCount]:String(t.count??n.count??0),[j.attrs.slotMeta]:t.meta||n.meta||""}}function br(e=[],n,t={}){return e.find(r=>r.id===n)||{...t,id:n}}function wr(e={},{className:n=""}={}){const t=e.id||"",r=!!e.active;return{id:t,label:e.label||t||"phase",meta:e.meta||vr(e),title:e.description||e.label||t,className:[n,j.classes.phaseNode,r?"active":""].filter(Boolean).join(" "),attrs:{[j.attrs.phaseId]:t,[j.attrs.tone]:e.tone||t,[j.attrs.status]:e.status||"unknown","data-phase-node":t,"data-active":String(r)}}}function vr(e={}){const n=[];return e.groups&&n.push(`${e.groups} group${e.groups===1?"":"s"}`),e.diagnostics&&n.push(`${e.diagnostics} signal${e.diagnostics===1?"":"s"}`),n.join(" / ")||e.status||"waiting"}const jr=`
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
`,ot=Object.freeze([M("reader","Read","Primary reader syntax tree","reader","source-tree"),M("expand","Expand","Expanded syntax and macro boundary","expand","source-tree"),M("analyzer","Analyze","Bindings, calls, and analyzer diagnostics","analysis","primary-lowering"),M("ir","IR","Backend-independent executable tree","ir","primary-lowering"),M("facts","Facts","Node-keyed sidecar evidence","facts","sidecar"),M("checks","Checks","Type and boundary checks","checks","sidecar"),M("plan","Plan","Lane decisions and rejected candidates","plan","plan"),M("explain","Explain","Human-oriented compiler projection","explain","projection"),M("eval","Eval","Runtime value observation","eval","runtime"),M("wasm","Wasm","Component runtime product","wasm","runtime")]);Object.freeze(ot.map(e=>e.id));function kr(){return ot.map(e=>({id:e.id,label:e.label,status:"waiting",groups:0,diagnostics:0,tone:e.tone,role:e.role,description:e.description}))}function M(e,n,t,r,a){return Object.freeze({id:e,label:n,description:t,tone:r,role:a})}function qe(e){return e==null?"nil":ze(e)?`:${e.name}`:Fe(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(qe).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,t])=>`:${n} ${qe(t)}`).join(" ")}}`:String(e)}function cn(e,n=0){if(e==null||typeof e!="object"||ze(e)||Fe(e))return qe(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(l=>`${i}${cn(l,n+2)}`).join(`
`)}
${o}]`}const t=Object.entries(e);if(t.length===0)return"{}";const r=" ".repeat(n+2),a=" ".repeat(n);return`{
${t.map(([i,o])=>`${r}:${i} ${cn(o,n+2)}`).join(`
`)}
${a}}`}function lt(e,n=""){return ze(e)||Fe(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function ze(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Fe(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function Rr(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!ze(e)&&!Fe(e)?Object.keys(e).length:0}const Sr=Object.freeze({"model-summary":Object.freeze({renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."}),graph:Object.freeze({renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."}),"layers-by-kind":Object.freeze({renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."}),"layer-inspection":Object.freeze({renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."}),"top-layers":Object.freeze({renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."}),"weight-stats":Object.freeze({renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."}),"weight-histogram":Object.freeze({renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."}),"numeric-aggregate":Object.freeze({renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."})});function Nr(e=null){const n=e?.graph;return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((t,r)=>({id:`${e.layerTable[r].id}->${t.id}`,source:e.layerTable[r].id,target:t.id}))}:{nodes:[],edges:[]}}function Ue(e=null){return typeof e?.view?.name=="string"?e.view.name:lt(e?.view,"")}function wn(e=null,n=""){const t=Ue(e);return t?`:${t}`:n}function Pe(e=null){return Ue(e).replaceAll("-"," ")||"waiting for Rasa"}function ct(e=null){const n=Ue(e);return Sr[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function De(e=null){return Array.isArray(e?.["host-requests"])?e["host-requests"]:[]}function Er(e=null){return De(e)[0]||null}function vn(e=null){const n=De(e);return n.length?n[n.length-1]:null}function oe(e=null){const n=Array.isArray(e?.traces)?e.traces:[],t=De(e);return{scope:lt(e?.scope,"waiting"),traces:n.length,requests:t.length,empty:n.length===0&&t.length===0}}function q(e=null){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function be(e=null){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function we(e=null){return e?.source?.symbol?.name||null}function Tr({value:e=null,graph:n={},traceSection:t=null,providerTrace:r=null,runtimeState:a={},selectedModel:i={},activeModel:o=null,catalogCount:l=0,preparedModelCount:c=0,running:u=!1,fixture:p=!1}={}){const f=oe(t),m=Array.isArray(n.nodes)?n.nodes.length:0,y=Array.isArray(n.edges)?n.edges.length:0,S=ct(e),U=vn(t),P=o?.title||o?.id||"none yet",le=i?.title||i?.id||"selected model",ve=be(U)||q(r)||"not admitted yet",D=wn(e,"none yet"),C=a.available!==!1,O=f.requests?`${le} is explored through admitted browser capabilities.`:`${le} is selected for browser capability exploration.`;return{headline:{eyebrow:"Rasa boundary theater",title:e?`Rasa returned ${D}`:u?"Rasa is crossing the browser boundary":p?"Trace fixture replay":"Run a Rasa form to cross into the browser host",subtitle:`${O} TensorFlow.js owns model objects; Rasa owns the session, forms, host requests, and returned values.`,tone:e?"ok":C?"waiting":"pending"},runtime:{label:C?"component session ready":"component session pending",detail:a.message||(C?"forms can evaluate in this browser session":"execution is unavailable in this page state"),tone:C?"ok":"pending"},metrics:[{id:"model",label:"Model handle",value:P,detail:o?.handle||"run a load form to allocate a browser handle",tone:o?"ok":"waiting"},{id:"request",label:"Admitted host calls",value:f.requests,detail:ve,tone:f.requests?"ok":"waiting"},{id:"value",label:"Returned view",value:D,detail:S.renderer,tone:e?"ok":"waiting"},{id:"graph",label:"Projected graph",value:m,detail:m?`${m} layer record${m===1?"":"s"}, ${y} edge${y===1?"":"s"}`:`${c}/${l} model assets cached`,tone:m?"ok":"waiting"}],path:[{label:"Rasa form",value:we(U)||"editor input"},{label:"Canonical identity",value:ve},{label:"Browser provider",value:r?.status||"waiting"},{label:"Rasa value",value:D}]}}function Mr({traceSection:e=null,providerTrace:n=null,runMetrics:t=null,bootMetrics:r=null}={}){const a=vn(e);return[{label:"Host request",value:we(a)||"waiting"},{label:"Canonical identity",value:be(a)||q(n)||"waiting"},{label:"Status",value:n?.status||t?.status||"waiting"},{label:"Time",value:t?.totalMs!==void 0?dn(t.totalMs):r?dn(r.totalMs):"pending"}]}function $r({value:e=null,trace:n=null,traceSection:t=null}={}){const r=ct(e),a=oe(t);return{...r,rows:[{label:"Rasa view",value:wn(e,"none yet")},{label:"Capability",value:q(n)||"waiting"},{label:"Core traces",value:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`},{label:"Status",value:n?.status||"waiting"}]}}function Ar({traceSection:e=null,providerTrace:n=null,fixture:t=!1}={}){const r=oe(e),a=De(e),i=Er(e);return{label:"Rasa boundary",title:r.empty?"Waiting for admitted host evidence":t?"Visual fixture replay":`Live Wasm ${r.scope} evidence`,note:t?"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence.":"",traceCountLabel:`${r.traces} traces`,steps:[{title:"Rasa form",value:we(i)||"source expression"},{title:"Canonical identity",value:be(i)||q(n)||"package/export"},{title:"Browser provider",value:n?.status?n.status:"waiting"}],requests:a.map(Cr),emptyMessage:"Run a host-capability form to see Rasa admission evidence."}}function Cr(e={}){return{id:e["call-id"]??"?",title:be(e)||"unknown request",rows:[{label:"source",value:we(e)||"n/a"},{label:"capability",value:Pn(e.identity?.capability)},{label:"effects",value:(e.admission?.effects||[]).map(Pn).join(" ")||"none"}]}}function Or(e=null){return{title:q(e)||"waiting",rows:[{label:"status",value:e?.status||"waiting"},{label:"args",value:e?.argsCount??"n/a"},{label:"view",value:e?.view?`:${e.view}`:"n/a"}],requestText:e?.requestText||"no provider request yet",responseText:e?.responseText||"no provider response yet"}}function Lr({selectedModelId:e="",models:n=[],commands:t=[],prepared:r=!1,preparing:a=!1}={}){return{selectedModelId:e,assetState:{className:r?"asset-state ready":a?"asset-state loading":"asset-state",label:r?"assets cached":a?"fetching assets":"assets load on run"},models:n.map((i={})=>({id:String(i.id||""),title:i.title||i.id||"model"})),commands:t.map((i={})=>({label:i.label||"Rasa form",source:i.source||"",preview:qr(i.source),insertTitle:`Insert ${i.label||"Rasa form"} at the cursor`,appendTitle:`Append ${i.label||"Rasa form"} below the current editor text`}))}}function Ir(e=[]){const n=e.map((t={},r)=>({index:r,id:t.id||`entry-${r}`,kind:t.kind||"run",source:t.source||"",resultPreview:t.result?Pr(t.result):"",canOpenResult:!!t.result,meta:[t.capability||"session",t.view||"",t.status||"",t.durationMs!==void 0?dn(t.durationMs):""].filter(Boolean)}));return{empty:n.length===0,entries:n,emptyEntry:{source:";; loading Rasa session",resultPreview:"=> waiting for browser Wasm engine"}}}function qr(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}function Pr(e){const n=String(e||""),t=n.split(`
`).map(a=>a.trimEnd()).filter(Boolean);return(t.length<=2?n:`${t.slice(0,2).join(`
`)}
...`).split(`
`).map(a=>Br(a,180)).join(`
`)}function dn(e){const n=Number(e||0);return n<10?`${n.toFixed(1)} ms`:`${Math.round(n)} ms`}function Pn(e){return typeof e?.name=="string"?e.name:typeof e=="string"?e:e==null?"":String(e)}function Br(e,n){const t=String(e||"");return t.length<=n?t:`${t.slice(0,Math.max(0,n-1)).trimEnd()}…`}const _r=Object.freeze([$("source-editor","Source editor","CodeMirror","Rasa forms and source spans",10),$("phase-route","Compiler route","PhaseRoute","Reader through runtime phase status",20),$("phase-widget-map","Phase widget map","PhaseWidgetMap","Phase artifacts mapped to visual widgets",30),$("projection-legend","Projection legend","ProjectionLegend","Grouped phase-neutral projection layers",40),$("boundary-route","Host boundary","BoundaryRoute","Admitted capability request and returned value",50),$("graph-stage","Graph stage","Stage","Model projection frame and run context",60),$("graph-canvas","Graph canvas","ReactFlow","Structured graph records returned by Rasa",70),$("value-inspector","Value inspector","DataView","Foldable Rasa data and returned values",80),$("transcript","Session transcript","Transcript","Append-only session input and returned data",90),$("diagnostics","Diagnostics","DiagnosticCards","Structured blockers and conservative evidence",100)]),zr=Object.freeze([Ae("inspect","Inspect","Compiler evidence workbench","../browser-inspection/","Source spans, phases, facts, diagnostics, plans, and runtime evidence stay connected.","inspection artifact","source-editor",["reader","analyzer","facts","checks","plan","eval"],"blue"),Ae("model","Model","Host boundary model explorer","../model-architecture-explorer/","Rasa forms cross admitted browser capabilities into TensorFlow.js handles and returned data.","session + provider trace","boundary-route",["reader","analyzer","plan","eval","wasm"],"green"),Ae("conformance","Conformance","Portable Clojure proof map","../conformance-report/","Precomputed compatibility pressure links functions, rows, outcomes, and deferred scope.","report artifact","value-inspector",["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"],"gold"),Ae("roadmap","Roadmap","Release direction","../roadmap/","Preview surfaces point toward the compiler, runtime, tooling, and product stories still in motion.","release plan","projection-legend",["plan"],"neutral")]);function Fr(e=""){return zr.map(n=>({...n,active:n.id===e,href:n.id===e?"./":n.href}))}function dt({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:r={}}={}){const a=new Set(n),i=new Map(e.map(o=>[o.id,o]));return kr().map(o=>{const l=i.get(o.id)||{},c=l.status||r[o.id]||o.status;return{...o,...l,status:c,active:!!(l.active||a.has(o.id)),meta:l.meta||t[o.id]||Kr(c,l)}})}function Ur(e={}){return _r.map(n=>{const t=e[n.id]||{},r=Number(t.count||0),a=!!(t.present||r>0);return{...n,present:a,status:t.status||(a?"ready":"waiting"),count:r,meta:t.meta||""}})}function Dr({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,traceSection:r=null,summary:a={}}={}){const i=a.empty===void 0&&r?oe(r):a,o=i.empty===!1||Number(i.traces||0)>0||Number(i.requests||0)>0,l=!!n?.status,c=!!(t?.view||t?.status==="ok"||e),u=o||c?ut:["wasm"];return dt({activePhaseIds:u,metaById:{reader:c||o?"source":"ready",expand:c||o?"source":"ready",analyzer:c||o?"artifact":"ready",ir:c||o?"artifact":"ready",facts:c||o?"artifact":"ready",checks:c||o?"artifact":"ready",plan:o?`${i.requests||0} host`:"admission",explain:e?"fixture":o?"trace":"view",eval:c?t?.view?`:${t.view}`:"value":"session",wasm:l?"component":"loaded"},statusById:Wr(u,"ok")})}function Vr({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,traceSection:r=null,summary:a={},sourceTitle:i="",identityTitle:o="",capabilityTitle:l=""}={}){const c=a.empty===void 0&&r?oe(r):a,u=vn(r),p=i||we(u)||"",f=o||be(u)||"",m=l||q(n)||"";return[{label:e?"Replay form":"Rasa source",title:p||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:f||m||"waiting",detail:`${Number(c.requests||0)} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"browser provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:t?.view?`:${t.view}`:"Rasa value",detail:t?.totalMs!==void 0?`${Gr(t.totalMs)}`:"structured data",tone:"return"}]}function Hr({graph:e={},value:n=null,summary:t={},transcript:r=[],runMetrics:a=null,runtimeState:i={}}={}){const o=Array.isArray(e.nodes)?e.nodes.length:0,l=Array.isArray(r)?r.length:0,c=Number(t.requests||0),u=!!n,p=wn(n),f=i.available!==!1;return{slots:Ur({"source-editor":{present:!0,status:f?"ready":"pending",meta:f?"session input":"adapter pending"},"phase-route":{present:!0,count:ut.length,meta:f?"runtime path":"pending runtime"},"boundary-route":{present:!0,status:c?"ready":f?"waiting":"pending",count:c,meta:c?`${c} host request${c===1?"":"s"}`:""},"graph-stage":{present:!0,status:u?"ready":f?"waiting":"pending",count:o,meta:u?o?"projected value":"empty projection":"waiting"},"graph-canvas":{present:!0,status:o?"ready":u?"empty":"waiting",count:o,meta:o?`${o} layer${o===1?"":"s"}`:""},"value-inspector":{present:u,status:a?.status||(u?"ready":"waiting"),meta:p},transcript:{present:!0,count:l,meta:l?`${l} entr${l===1?"y":"ies"}`:"waiting"}})}}const ut=Object.freeze(["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"]);function Wr(e,n){return Object.fromEntries(e.map(t=>[t,n]))}function Kr(e,n={}){return n.groups?`${n.groups} group${n.groups===1?"":"s"}`:n.diagnostics?`${n.diagnostics} diagnostic${n.diagnostics===1?"":"s"}`:e||"waiting"}function $(e,n,t,r,a){return Object.freeze({id:e,label:n,component:t,description:r,priority:a})}function Ae(e,n,t,r,a,i,o,l,c){return Object.freeze({id:e,artifact:i,description:a,href:r,label:n,phaseIds:Object.freeze([...l]),slotId:o,title:t,tone:c})}function Gr(e){const n=Number(e||0);return n<10?`${n.toFixed(1)} ms`:`${Math.round(n)} ms`}function Ce({as:e="section",slotId:n="",slots:t=[],state:r={},className:a="",children:i,...o}){const l=br(t,n,r);return s.jsx(e,{...o,...bn(l,r),className:`${j.classes.visualSlot} ${a}`.trim(),children:i})}function Jr({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:r={},className:a="",ariaLabel:i="Rasa phase route"}){const o=dt({phases:e,activePhaseIds:n,metaById:t,statusById:r}),l=j.classes;return s.jsx("div",{className:`${l.phaseRoute} ${l.visualSlot} ${a}`.trim(),"aria-label":i,...bn({id:"phase-route",status:"ready",count:o.filter(c=>c.active).length}),children:o.map(c=>{const u=wr(c);return d.createElement("span",{className:u.className,...u.attrs,key:u.id,title:u.title},s.jsx("strong",{children:u.label}),s.jsx("em",{children:u.meta}))})})}function Yr({activeId:e="",className:n="",compact:t=!1,items:r=null,showArtifact:a=!0,ariaLabel:i="Rasa demo surfaces"}){const o=r||Fr(e),l=j.classes;return s.jsx("nav",{className:`${l.surfaceSwitcher} ${n}`.trim(),"data-compact":String(!!t),"aria-label":i,children:o.map(c=>s.jsxs("a",{className:l.surfaceLink,href:c.href,"aria-current":c.active?"page":void 0,title:c.title,children:[s.jsx("strong",{children:c.label}),a?s.jsx("small",{children:c.artifact}):null]},c.id||c.label))})}function Xr({steps:e=[],className:n="",ariaLabel:t="Rasa boundary route"}){const r=j.classes,a=j.attrs;return s.jsx("div",{className:`${r.boundaryRoute} ${r.visualSlot} ${n}`.trim(),"aria-label":t,...bn({id:"boundary-route",status:e.length?"ready":"waiting",count:e.length}),children:e.map(i=>d.createElement("article",{className:r.boundaryStep,[a.boundaryTone]:i.tone||"",key:i.label},s.jsx("span",{children:i.label}),s.jsx("strong",{children:i.title}),s.jsx("em",{children:i.detail})))})}const J=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function re(e){return J.find(n=>n.id===e)||J[0]}const Be="tiny-cnn",Oe=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Zr=`(def m (model/load-model :${Be}))
(model/summary m)`;function Qr(e=Be){const n=re(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class es{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,t){const r=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(r,{kind:n,value:t}),r}get(n,t=null){const r=this.resources.get(n);if(!r)throw new Error(`unknown resource handle ${n}`);if(t&&r.kind!==t)throw new Error(`resource ${n} has kind ${r.kind}, expected ${t}`);return r.value}}class ns extends Error{constructor(n,t,r={}){super(t),this.name="BrowserCapabilityError",this.kind=n,this.data=r}}class ts{constructor(){this.handlers=new Map}register(n,t,r){return this.handlers.set(un(n,t),r),this}invoke(n,t,r){const a=un(n,t),i=this.handlers.get(a);if(!i)throw new ns("adapter-missing",`browser capability adapter is missing for ${a}`,{packageName:n,exportName:t});return i(r)}entries(){return[...this.handlers.keys()]}}function un(e,n){return`${e}/${n}`}function jn(e){return new as(e).parse()}function F(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Ve(e)?`:${e.name}`:kn(e)?e.name:mt(e)?`(${e.items.map(F).join(" ")})`:Array.isArray(e)?`[${e.map(F).join(" ")}]`:`{${Object.entries(e).map(([n,t])=>`:${n} ${F(t)}`).join(" ")}}`}function xe(e,n=0){if(e==null||typeof e!="object"||Ve(e)||kn(e))return F(e);const t=" ".repeat(n+2),r=" ".repeat(n);if(mt(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${t}${xe(i,n+2)}`).join(`
`)}
${r})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${t}${xe(i,n+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${t}:${i} ${xe(o,n+2)}`).join(`
`)}
${r}}`}function rs(e){return{type:"keyword",name:e}}function ss(e){return{type:"symbol",name:e}}function Ve(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function kn(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function mt(e){return!!(e&&typeof e=="object"&&e.type==="list")}class as{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==="("?this.list():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const t=this.form(),r=this.form();n[is(t)]=r}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}list(){this.expect("(");const n=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:n};n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const t=this.text[this.index++];if(t==='"')return n;if(t==="\\"){const r=this.text[this.index++];n+=r==="n"?`
`:r}else n+=t}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const t=this.text.slice(n,this.index);if(!t)throw new Error(`expected form at byte ${this.index}`);return t==="nil"?null:t==="true"?!0:t==="false"?!1:/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith(":")?rs(t.slice(1)):ss(t)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function is(e){return Ve(e)||kn(e)?e.name:String(e)}const en=Object.freeze(Object.fromEntries(J.map(e=>[e.id,`./models/${e.id}/model.json`])));class nn extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class os{constructor(){this.resources=new es("browser"),this.registry=ls(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const t=jn(n);this.lastTrace={requestText:n,request:t,responseText:"",packageName:t.package?.name||"unknown",exportName:t.export?.name||"unknown"};const r=this.route(t),a=F(r);return this.lastTrace.responseText=a,a}route(n){try{const t=n.package?.name,r=n.export?.name,a=n.args||[],i=this.invoke(t,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:t,exportName:r,capability:un(t,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:b("ok"),value:i}}catch(t){const r=t instanceof nn?{status:b("failed"),kind:b("asset-not-prepared"),model:b(t.modelId),recoverable:!0,message:t.message}:{status:b("failed"),kind:b("provider-error"),message:t.message};return t instanceof nn&&(this.pendingAssetModel=t.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:t.message},r}}invoke(n,t,r){return this.registry.invoke(n,t,r)}loadNamedModel(n){if(!en[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new nn(n);if(!this.modelIds.has(n)){const t=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,t)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!en[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const t=await zt(en[n]);return this.catalog.set(n,t),t}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,t])=>{const r=this.summary(t);return{id:n,handle:t,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(n){const t=this.model(n),r=t.layers.map(ne);return{view:b("model-summary"),model:t.name,handle:n,layers:r.length,parameters:se(r.map(a=>a.params)),trainableParameters:se(r.map(a=>a.trainableParams)),bytes:se(r.map(a=>a.bytes)),inputs:ae(t.inputs?.[0]?.shape),outputs:ae(t.outputs?.[0]?.shape),graph:Bn(t),layerTable:r}}graph(n){return{view:b("graph"),graph:Bn(this.model(n))}}layerCount(n){const t=this.model(n);return{view:b("numeric-aggregate"),label:"layer count",value:t.layers.length,unit:b("layers"),model:t.name,handle:n}}layersByKind(n,t){const r=this.model(n).layers.map(ne).filter(a=>a.kind===t);return{view:b("layers-by-kind"),kind:b(t),count:r.length,layers:r}}topLayers(n,t){const r=Number(t.limit||5),i=mn(t.by||b("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(ne).sort((l,c)=>c[i]-l[i]).slice(0,r);return{view:b("top-layers"),by:b(i),layers:o}}inspectLayer(n,t){const r=this.layerByName(n,t);return{view:b("layer-inspection"),layer:ne(r),config:us(r.getConfig()),weights:r.weights.map(pt)}}layerTensorSize(n,t){const{layer:r,index:a}=this.layerByRef(n,t),i=ne(r,a);return{view:b("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:b("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,t){const r=this.layerByName(n,t);return{view:b("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>cs(r.weights[i],a))}}weightHistogram(n,t,r){const a=this.layerByName(n,t),i=Number(r.bins||24),o=a.getWeights().map((l,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:ds(Array.from(l.dataSync()),i)}));return{view:b("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,t){const r=this.model(n).layers.find(a=>a.name===t);if(!r)throw new Error(`unknown layer ${t}`);return r}layerByRef(n,t){const r=this.model(n);if(typeof t=="number"){const o=Math.trunc(t)-1,l=r.layers[o];if(!l)throw new Error(`unknown layer index ${t}`);return{layer:l,index:o}}const a=String(t),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function ls(e){return new ts().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(mn(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,t])=>e.layersByKind(n,mn(t))).register("demo.tfjs/layers","top",([n,t={}])=>e.topLayers(n,t)).register("demo.tfjs/layer","inspect",([n,t])=>e.inspectLayer(n,t)).register("demo.tfjs/layer","tensor-size",([n,t])=>e.layerTensorSize(n,t)).register("demo.tfjs/weights","stats",([n,t])=>e.weightStats(n,t)).register("demo.tfjs/weights","histogram",([n,t,r={}])=>e.weightHistogram(n,t,r))}function ne(e,n=null){const t=e.weights.map(pt);return{id:e.name,index:n??ms(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:ae(e.inputShape),output:ae(e.outputShape),params:se(t.map(r=>r.params)),trainableParams:se(t.filter(r=>r.trainable).map(r=>r.params)),bytes:se(t.map(r=>r.bytes))}}function Bn(e){const n=e.layers.map((t,r)=>({...ne(t,r),index:r}));return{nodes:n,edges:n.slice(1).map((t,r)=>({id:`${n[r].id}->${t.id}`,source:n[r].id,target:t.id}))}}function pt(e){const n=e.shape.reduce((t,r)=>t*r,1);return{name:e.originalName,shape:ae(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function cs(e,n){const t=Array.from(n.dataSync()),r=t.length,a=Math.min(...t),i=Math.max(...t),o=t.reduce((u,p)=>u+p,0)/r,l=t.reduce((u,p)=>u+(p-o)**2,0)/r,c=t.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:ae(n.shape),params:r,min:G(a),max:G(i),mean:G(o),stddev:G(Math.sqrt(l)),sparsity:G(c/r)}}function ds(e,n){const t=Math.min(...e),r=Math.max(...e),a=r===t?1:(r-t)/n,i=Array.from({length:n},(o,l)=>({start:G(t+l*a),end:G(t+(l+1)*a),count:0}));for(const o of e){const l=Math.min(n-1,Math.max(0,Math.floor((o-t)/a)));i[l].count+=1}return i}function us(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(t=>e[t]!==void 0).map(t=>[t,e[t]]))}function mn(e){return Ve(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function b(e){return{type:"keyword",name:e}}function ae(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(_n).join(" x "):e.map(_n).join(" x "):"?"}function _n(e){return e==null?"*":String(e)}function se(e){return e.reduce((n,t)=>n+t,0)}function G(e){return String(Math.round(e*1e5)/1e5)}function ms(e){return Number(e._index??0)}const ft=`{:packages
 [{:package/id demo.tfjs/model
   :catalog {:exports
             {load-model {:signature {:args [{:name :id :type :keyword}] :returns :string}
                          :effects [:model/read]
                          :targets {:wasm-host {:availability :available}}}
              summary {:signature {:args [{:name :model :type :string}] :returns :map}
                       :effects [:model/read]
                       :targets {:wasm-host {:availability :available}}}
              layer-count {:signature {:args [{:name :model :type :string}] :returns :map}
                           :effects [:model/read]
                           :targets {:wasm-host {:availability :available}}}
              graph {:signature {:args [{:name :model :type :string}] :returns :map}
                     :effects [:model/read]
                     :targets {:wasm-host {:availability :available}}}}}}
  {:package/id demo.tfjs/layers
   :catalog {:exports
             {by-kind {:signature {:args [{:name :model :type :string}
                                          {:name :kind :type :keyword}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:wasm-host {:availability :available}}}
              top {:signature {:args [{:name :model :type :string}
                                      {:name :options :type :map}]
                               :returns :map}
                   :effects [:model/read]
                   :targets {:wasm-host {:availability :available}}}}}}
  {:package/id demo.tfjs/layer
   :catalog {:exports
             {inspect {:signature {:args [{:name :model :type :string}
                                          {:name :layer :type :string}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:wasm-host {:availability :available}}}
              tensor-size {:signature {:args [{:name :model :type :string}
                                              {:name :layer :type :any}]
                                       :returns :map}
                           :effects [:model/read]
                           :targets {:wasm-host {:availability :available}}}}}}
  {:package/id demo.tfjs/weights
   :catalog {:exports
             {stats {:signature {:args [{:name :model :type :string}
                                        {:name :layer :type :string}]
                                 :returns :map}
                     :effects [:model/read]
                     :targets {:wasm-host {:availability :available}}}
              histogram {:signature {:args [{:name :model :type :string}
                                            {:name :layer :type :string}
                                            {:name :options :type :map}]
                                     :returns :map}
                         :effects [:model/read]
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function tn(e){if(!e||!e.includes(":traces"))return null;try{return jn(e).traces||null}catch{return null}}function ps(e){const n=[];return pn(e,[],n),n}function fs(e){return cn(e)}function _e(e){return e==null?null:Array.isArray(e)?e.map(_e):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,t])=>[`:${n}`,_e(t)])):e}function pn(e,n,t){const r=t.length,a={id:r,path:n,label:ys(n),kind:hs(e),value:Rr(e)?null:qe(e),children:[]};return t.push(a),Array.isArray(e)?e.forEach((i,o)=>{const l=pn(i,[...n,o],t);a.children.push(l)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const l=pn(o,[...n,i],t);a.children.push(l)}),r}function hs(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function ys(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const w=e=>({type:"keyword",name:e}),fn=e=>({type:"symbol",name:e});function zn(e){const n=xs(e),t=bs(e),r=ws(e);return{source:gs(e),value:n,providerTrace:t,traceSection:r,runtimeReport:`{:status :ok :traces ${hn(r)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function gs(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function xs(e){const n=ht(e),t=n.reduce((a,i)=>a+i.params,0),r=n.reduce((a,i)=>a+i.bytes,0);return{view:w("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:t,trainableParameters:t,bytes:r,inputs:vs(e),outputs:js(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>ks(n[i].id,a.id))},layerTable:n}}function bs(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${ht(e).length}}}`}}function ws(e){return{"rasa/phase":w("traces"),scope:w("admitted-host-calls"),traces:[{id:0,subject:{kind:w("source")},events:[ee(0,"source-form",{symbol:fn("model/load-model"),span:{start:7,end:23}}),ee(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:w("demo.tfjs/model/load-model")}),ee(2,"admission",{"call-id":0,effects:[w("model/read")],signature:{args:[w("id")],returns:w("string")}})]},{id:1,subject:{kind:w("source")},events:[ee(0,"source-form",{symbol:fn("model/summary"),span:{start:31,end:44}}),ee(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:w("demo.tfjs/model/summary")}),ee(2,"admission",{"call-id":1,effects:[w("model/read")],signature:{args:[w("model")],returns:w("map")}})]}],"host-requests":[Fn(0,"demo.tfjs/model","load-model","model/load-model",e.id),Fn(1,"demo.tfjs/model","summary","model/summary")]}}function ht(e){switch(e.id){case"tiny-mlp":return[v("feature_input","input","* x 16",0,0),v("hidden_dense","dense","* x 32",544,2176),v("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[v("signal_input","input","* x 32",0,0),v("encoder_dense","dense","* x 12",396,1584),v("bottleneck","dense","* x 4",52,208),v("decoder_dense","dense","* x 12",60,240),v("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[v("token_input","input","* x 8",0,0),v("token_embedding","embedding","* x 8 x 16",1600,6400),v("pool_tokens","global-average-pooling1d","* x 16",0,0),v("projection_dense","dense","* x 8",136,544)];default:return[v("input_image","input","* x 28 x 28 x 1",0,0),v("stem_conv","conv2d","* x 26 x 26 x 8",80,320),v("flatten","flatten","* x 5408",0,0),v("classifier_dense","dense","* x 10",5306,21224)]}}function vs(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function js(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function v(e,n,t,r,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:t,params:r,trainableParams:r,bytes:a}}function ks(e,n){return{id:`${e}->${n}`,source:e,target:n}}function ee(e,n,t){return{id:e,kind:w(n),subject:null,"source-id":"browser://repl",span:t.span||null,data:t,diagnostics:[],annotations:[],evidence:[]}}function Fn(e,n,t,r,a=null){return{"rasa/phase":w("host-request"),scope:w("admitted-host-call"),"call-id":e,identity:{package:n,export:t,capability:w(`${n}/${t}`)},source:{symbol:fn(r),model:a?w(a):null},admission:{"call-id":e,identity:{package:n,export:t,capability:w(`${n}/${t}`)},effects:[w("model/read")]},"trace-id":e}}function hn(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(hn).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,t])=>`:${n} ${hn(t)}`).join(" ")}}`}const Rs=`(ns rasa.core)

(def ^{:doc "Returns the sum of nums."
       :rasa.impl/backing rasa.prim/add}
  +
  rasa.prim/add)

(def ^{:doc "Returns x negated, or the difference of nums."
       :rasa.impl/backing rasa.prim/sub}
  -
  rasa.prim/sub)

(def ^{:doc "Returns the product of nums."
       :rasa.impl/backing rasa.prim/mul}
  *
  rasa.prim/mul)

(def ^{:doc "Returns true when nums are strictly increasing."
       :rasa.impl/backing rasa.prim/lt}
  <
  rasa.prim/lt)

(def ^{:doc "Returns true when nums are non-decreasing."
       :rasa.impl/backing rasa.prim/lte}
  <=
  rasa.prim/lte)

(def ^{:doc "Returns true when nums are strictly decreasing."
       :rasa.impl/backing rasa.prim/gt}
  >
  rasa.prim/gt)

(def ^{:doc "Returns true when nums are non-increasing."
       :rasa.impl/backing rasa.prim/gte}
  >=
  rasa.prim/gte)

(def ^{:doc "Returns x plus one."
       :rasa.impl/backing rasa.prim/inc}
  inc
  rasa.prim/inc)

(def ^{:doc "Returns x minus one."
       :rasa.impl/backing rasa.prim/dec}
  dec
  rasa.prim/dec)

(def ^{:doc "Returns true when x is numeric zero."
       :rasa.impl/backing rasa.prim/zero?}
  zero?
  rasa.prim/zero?)

(def ^{:doc "Returns true when x is positive."
       :rasa.impl/backing rasa.prim/pos?}
  pos?
  rasa.prim/pos?)

(def ^{:doc "Returns true when x is negative."
       :rasa.impl/backing rasa.prim/neg?}
  neg?
  rasa.prim/neg?)

(def ^{:doc "Returns the least numeric argument."
       :rasa.impl/backing rasa.prim/min}
  min
  rasa.prim/min)

(def ^{:doc "Returns the greatest numeric argument."
       :rasa.impl/backing rasa.prim/max}
  max
  rasa.prim/max)

(def ^{:doc "Returns nil for nil or empty seqable values, otherwise returns a finite seq or admitted lazy seq."
       :rasa.impl/backing rasa.prim/seq}
  seq
  rasa.prim/seq)

(def ^{:doc "Returns the first item of a seqable value, or nil when none exists."
       :rasa.impl/backing rasa.prim/first}
  first
  rasa.prim/first)

(def ^{:doc "Returns all but the first item as a finite seq or lazy view, or an empty seq when no remaining items exist."
       :rasa.impl/backing rasa.prim/rest}
  rest
  rasa.prim/rest)

(def ^{:doc "Returns the non-empty remainder as a finite seq or lazy view, or nil when no non-empty remainder exists."
       :rasa.impl/backing rasa.prim/next}
  next
  rasa.prim/next)

(def ^{:doc "Returns a finite eager seq with x prepended to the finite seqable value."
       :rasa.impl/backing rasa.prim/cons}
  cons
  rasa.prim/cons)

(def ^{:doc "Returns the indexed item from a vector, list, finite seq, lazy seq, or string; with a default, returns that value when out of range."
       :rasa.impl/backing rasa.prim/nth}
  nth
  rasa.prim/nth)

(def ^{:doc "Returns a two-item vector of the canonical key and value when a map contains key, otherwise nil."
       :rasa.impl/backing rasa.prim/find}
  find
  rasa.prim/find)

(def ^{:doc "Returns a finite eager seq of map keys, or nil for nil and empty maps."
       :rasa.impl/backing rasa.prim/keys}
  keys
  rasa.prim/keys)

(def ^{:doc "Returns a finite eager seq of map values, or nil for nil and empty maps."
       :rasa.impl/backing rasa.prim/vals}
  vals
  rasa.prim/vals)

(def ^{:doc "Returns true when all supplied values are equal."
       :rasa.impl/backing rasa.prim/=}
  =
  rasa.prim/=)

(def ^{:doc "Returns true when supplied values are not all equal."
       :rasa.impl/backing rasa.prim/not=}
  not=
  rasa.prim/not=)

(def ^{:doc "Returns true when x is falsey."
       :rasa.impl/backing rasa.prim/not}
  not
  rasa.prim/not)

(def ^{:doc "Returns true when x is nil."
       :rasa.impl/backing rasa.prim/nil?}
  nil?
  rasa.prim/nil?)

(def ^{:doc "Returns true when x is not nil."
       :rasa.impl/backing rasa.prim/some?}
  some?
  rasa.prim/some?)

(def ^{:doc "Returns true when x is true."
       :rasa.impl/backing rasa.prim/true?}
  true?
  rasa.prim/true?)

(def ^{:doc "Returns true when x is false."
       :rasa.impl/backing rasa.prim/false?}
  false?
  rasa.prim/false?)

(def ^{:doc "Returns true when x is a boolean."
       :rasa.impl/backing rasa.prim/boolean?}
  boolean?
  rasa.prim/boolean?)

(def ^{:doc "Returns true when x is an integer."
       :rasa.impl/backing rasa.prim/integer?}
  integer?
  rasa.prim/integer?)

(def ^{:doc "Returns true when x is a string."
       :rasa.impl/backing rasa.prim/string?}
  string?
  rasa.prim/string?)

(def ^{:doc "Returns true when x is a keyword."
       :rasa.impl/backing rasa.prim/keyword?}
  keyword?
  rasa.prim/keyword?)

(def ^{:doc "Returns true when x is a symbol."
       :rasa.impl/backing rasa.prim/symbol?}
  symbol?
  rasa.prim/symbol?)

(def ^{:doc "Returns true when x is a character."
       :rasa.impl/backing rasa.prim/char?}
  char?
  rasa.prim/char?)

(def ^{:doc "Returns true when x is a concrete collection, finite seq, or admitted lazy seq."
       :rasa.impl/backing rasa.prim/coll?}
  coll?
  rasa.prim/coll?)

(def ^{:doc "Returns true when x is a list."
       :rasa.impl/backing rasa.prim/list?}
  list?
  rasa.prim/list?)

(def ^{:doc "Returns true when x is a vector."
       :rasa.impl/backing rasa.prim/vector?}
  vector?
  rasa.prim/vector?)

(def ^{:doc "Returns true when x is a map."
       :rasa.impl/backing rasa.prim/map?}
  map?
  rasa.prim/map?)

(def ^{:doc "Returns true when x is a set."
       :rasa.impl/backing rasa.prim/set?}
  set?
  rasa.prim/set?)

(def ^{:doc "Returns true when x is a function or native function value."
       :rasa.impl/backing rasa.prim/fn?}
  fn?
  rasa.prim/fn?)

(defn identity
  "Returns x unchanged."
  [x]
  x)

(defn boolean
  "Returns true when x is truthy, otherwise false."
  [x]
  (if x true false))

(defn any?
  "Returns true for any value."
  [x]
  true)

(defn int?
  "Returns true when x is an integer."
  [x]
  (integer? x))

(defn pos-int?
  "Returns true when x is a positive integer."
  [x]
  (if (integer? x) (pos? x) false))

(defn neg-int?
  "Returns true when x is a negative integer."
  [x]
  (if (integer? x) (neg? x) false))

(defn seqable?
  "Returns true when x can produce a sequence."
  [x]
  (if (nil? x) true (if (string? x) true (coll? x))))

(defn not-empty
  "Returns x when it is not empty, otherwise nil."
  [x]
  (if (empty? x) nil x))

(defn second
  "Returns the second item of a seqable value, or nil."
  [x]
  (first (next x)))

(defn ffirst
  "Returns the first item of the first item of x."
  [x]
  (first (first x)))

(defn fnext
  "Returns the first item of the next item of x."
  [x]
  (first (next x)))

(defn nfirst
  "Returns the next item of the first item of x."
  [x]
  (next (first x)))

(defn nnext
  "Returns the next item of the next item of x."
  [x]
  (next (next x)))

(defn vec
  "Returns a vector containing the items of coll."
  [coll]
  (into [] coll))

(defn set
  "Returns a set containing the items of coll."
  [coll]
  (into #{} coll))

(defn empty
  "Returns an empty collection of the same broad kind as coll, or nil."
  [coll]
  (if (nil? coll)
    nil
    (if (string? coll)
      ""
      (if (vector? coll)
        []
        (if (map? coll)
          {}
          (if (set? coll)
            #{}
            (if (list? coll)
              '()
              (if (seqable? coll) '() nil))))))))

(defn peek
  "Returns the next stack item from a vector or list, or nil for nil and empty stacks."
  [coll]
  (if (nil? coll)
    nil
    (if (vector? coll)
      (if (empty? coll) nil (nth coll (dec (count coll))))
      (if (list? coll)
        (first coll)
        (nth [] 0)))))

(defn pop
  "Returns a vector or list stack without its next item, or nil for nil."
  [coll]
  (if (nil? coll)
    nil
    (if (vector? coll)
      (if (empty? coll) (nth [] 0) (vec (butlast coll)))
      (if (list? coll)
        (if (empty? coll) (nth [] 0) (rest coll))
        (nth [] 0)))))

(defn some
  "Returns the first truthy result of pred over coll, otherwise nil."
  [pred coll]
  (loop [s (seq coll)]
    (if s
      (let [value (pred (first s))]
        (if value value (recur (next s))))
      nil)))

(defn every?
  "Returns true when pred is truthy for every item in coll."
  [pred coll]
  (loop [s (seq coll)]
    (if s
      (if (pred (first s))
        (recur (next s))
        false)
      true)))

(defn not-any?
  "Returns true when pred is falsey for every item in coll."
  [pred coll]
  (not (some pred coll)))

(defn not-every?
  "Returns true when pred is falsey for at least one item in coll."
  [pred coll]
  (not (every? pred coll)))

(defn constantly
  "Returns a function that ignores its arguments and returns x."
  [x]
  (fn [& _] x))

(defn juxt
  "Returns a function that returns a vector of applying each supplied function to its arguments."
  ([f]
   (fn [& args]
     [(apply f args)]))
  ([f g]
   (fn [& args]
     [(apply f args) (apply g args)]))
  ([f g h]
   (fn [& args]
     [(apply f args) (apply g args) (apply h args)]))
  ([f g h & fs]
   (let [fns (cons f (cons g (cons h fs)))]
     (fn [& args]
       (vec (map (fn [next-f] (apply next-f args)) fns))))))

(defn fnil
  "Returns a function that substitutes supplied defaults for nil arguments before applying f."
  ([f x]
   (fn
     ([a] (f (if (nil? a) x a)))
     ([a b] (f (if (nil? a) x a) b))
     ([a b c] (f (if (nil? a) x a) b c))
     ([a b c & ds] (apply f (if (nil? a) x a) b c ds))))
  ([f x y]
   (fn
     ([a b] (f (if (nil? a) x a) (if (nil? b) y b)))
     ([a b c] (f (if (nil? a) x a) (if (nil? b) y b) c))
     ([a b c & ds] (apply f (if (nil? a) x a) (if (nil? b) y b) c ds))))
  ([f x y z]
   (fn
     ([a b c] (f (if (nil? a) x a) (if (nil? b) y b) (if (nil? c) z c)))
     ([a b c & ds] (apply f (if (nil? a) x a) (if (nil? b) y b) (if (nil? c) z c) ds)))))

(defn comp
  "Returns a function that composes supplied functions right-to-left."
  ([] identity)
  ([f] f)
  ([f & fs]
   (let [fns (reverse (cons f fs))]
     (fn [& args]
       (loop [ret (apply (first fns) args)
              remaining (next fns)]
         (if remaining
           (recur ((first remaining) ret) (next remaining))
           ret))))))

(defn complement
  "Returns a function that returns the logical not of applying f."
  [f]
  (fn [& args]
    (not (apply f args))))

(defn partial
  "Returns a function that calls f with args prepended to later arguments."
  [f & args]
  (fn [& more]
    (apply f (concat args more))))

(defn reverse
  "Returns a list of the items in coll in reverse order."
  [coll]
  (reduce conj '() coll))

(defn last
  "Returns the last item of coll, or nil when coll is empty."
  [coll]
  (loop [s (seq coll)
         value nil]
    (if s
      (recur (next s) (first s))
      value)))

(defn butlast
  "Returns a seq of all but the last item of coll, or nil."
  [coll]
  (seq (reverse (rest (reverse coll)))))

(defn distinct
  "Returns a seq of the items in coll with duplicate values removed."
  [coll]
  (loop [s (seq coll)
         seen #{}
         ret '()]
    (if s
      (let [value (first s)]
        (if (contains? seen value)
          (recur (next s) seen ret)
          (recur (next s) (conj seen value) (conj ret value))))
      (reverse ret))))

(defn dedupe
  "Returns a seq of the items in coll with consecutive duplicate values removed."
  [coll]
  (loop [s (seq coll)
         prior nil
         started false
         ret '()]
    (if s
      (let [value (first s)]
        (if (if started (= prior value) false)
          (recur (next s) prior started ret)
          (recur (next s) value true (conj ret value))))
      (reverse ret))))

(defn nthrest
  "Returns the result of applying rest to coll n times."
  [coll n]
  (if (< n 1)
    coll
    (loop [s (seq coll)
           i n]
      (if s
        (if (< i 1)
          s
          (recur (rest s) (dec i)))
        '()))))

(defn nthnext
  "Returns the result of applying next to coll n times."
  [coll n]
  (if (nil? coll)
    nil
    (if (< n 1)
      (seq coll)
      (loop [s (seq coll)
             i n]
        (if s
          (if (< i 1)
            s
            (recur (next s) (dec i)))
          nil)))))

(defn take-last
  "Returns a seq of the last n items in coll."
  [n coll]
  (drop (- (count coll) n) coll))

(defn drop-last
  "Returns a seq of coll without the last n items, or the last item for the one-argument form."
  ([coll] (drop-last 1 coll))
  ([n coll] (take (- (count coll) n) coll)))

(defn split-at
  "Returns a vector of [(take n coll) (drop n coll)]."
  [n coll]
  [(take n coll) (drop n coll)])

(defn split-with
  "Returns a vector of [(take-while pred coll) (drop-while pred coll)]."
  [pred coll]
  [(take-while pred coll) (drop-while pred coll)])

(defn map-indexed
  "Returns a seq of (f index item) for each item in coll."
  [f coll]
  (loop [i 0
         s (seq coll)
         ret '()]
    (if s
      (recur (inc i) (next s) (conj ret (f i (first s))))
      (reverse ret))))

(defn keep-indexed
  "Returns a seq of non-nil (f index item) results for each item in coll."
  [f coll]
  (loop [i 0
         s (seq coll)
         ret '()]
    (if s
      (let [value (f i (first s))]
        (recur (inc i) (next s) (if (nil? value) ret (conj ret value))))
      (reverse ret))))

(defn mapv
  "Returns a vector of applying f to items from one or more colls."
  ([f coll] (vec (map f coll)))
  ([f c1 c2] (vec (map f c1 c2)))
  ([f c1 c2 c3] (vec (map f c1 c2 c3)))
  ([f c1 c2 c3 & colls] (vec (apply map f c1 c2 c3 colls))))

(defn filterv
  "Returns a vector of the items in coll whose predicate result is truthy."
  [pred coll]
  (vec (filter pred coll)))

(defn interpose
  "Returns a seq of the items in coll separated by sep."
  [sep coll]
  (let [s (seq coll)]
    (if s
      (loop [ret (list (first s))
             items (next s)]
        (if items
          (recur (conj (conj ret sep) (first items)) (next items))
          (reverse ret)))
      '())))

(defn frequencies
  "Returns a map from each distinct item in coll to the number of times it appears."
  [coll]
  (reduce
    (fn [ret value]
      (assoc ret value (inc (get ret value 0))))
    {}
    coll))

(defn group-by
  "Returns a map from (f item) to a vector of matching items."
  [f coll]
  (reduce
    (fn [ret value]
      (let [key (f value)]
        (assoc ret key (conj (get ret key []) value))))
    {}
    coll))

(defn min-key
  "Returns the argument with the least value according to k."
  ([k x] x)
  ([k x y] (if (< (k x) (k y)) x y))
  ([k x y & more]
   (reduce
     (fn [best item] (min-key k best item))
     (min-key k x y)
     more)))

(defn max-key
  "Returns the argument with the greatest value according to k."
  ([k x] x)
  ([k x y] (if (> (k x) (k y)) x y))
  ([k x y & more]
   (reduce
     (fn [best item] (max-key k best item))
     (max-key k x y)
     more)))

(defn select-keys
  "Returns a map containing only entries in m whose keys are in keyseq."
  [m keyseq]
  (loop [ret {}
         ks (seq keyseq)]
    (if ks
      (let [entry (find m (first ks))]
        (recur (if entry (conj ret entry) ret) (next ks)))
      ret)))

(defn get-in
  "Returns the value in a nested lookup structure, or not-found when supplied and a key is absent."
  ([m ks]
   (loop [value m
          keys (seq ks)]
     (if keys
       (recur (get value (first keys)) (next keys))
       value)))
  ([m ks not-found]
   (loop [value m
          keys (seq ks)]
     (if keys
       (let [key (first keys)]
         (if (contains? value key)
           (recur (get value key) (next keys))
           not-found))
       value))))

(defn update
  "Updates the value at key k by applying f to the old value and args."
  [m k f & args]
  (assoc m k (apply f (get m k) args)))

(defn assoc-in
  "Associates v in a nested lookup structure at key path ks."
  [m ks v]
  (let [key (first ks)
        more (next ks)]
    (if more
      (assoc m key (assoc-in (get m key) more v))
      (assoc m key v))))

(defn update-in
  "Updates a nested value at key path ks by applying f to the old value and args."
  [m ks f & args]
  (let [key (first ks)
        more (next ks)]
    (if more
      (assoc m key (update-in (get m key) more (fn [old] (apply f old args))))
      (assoc m key (apply f (get m key) args)))))

(defn merge
  "Returns a map containing the mappings from the supplied maps, with later mappings winning."
  [& maps]
  (if (some identity maps)
    (reduce
      (fn [acc m]
        (let [ret (if acc acc {})]
          (if m
            (if (map? m)
              (into ret m)
              (conj ret m))
            ret)))
      maps)
    nil))

(defn merge-with
  "Returns a map containing the mappings from supplied maps, combining duplicate values with f."
  [f & maps]
  (if (some identity maps)
    (reduce
      (fn [ret m]
        (if m
          (reduce
            (fn [next-ret entry]
              (let [key (first entry)
                    value (second entry)]
                (if (contains? next-ret key)
                  (assoc next-ret key (f (get next-ret key) value))
                  (assoc next-ret key value))))
            (if ret ret {})
            m)
          ret))
      {}
      maps)
    nil))

(def ^{:doc "Returns the item count for nil, strings, concrete collections, and safely finite lazy seqs."
       :rasa.impl/backing rasa.prim/count}
  count
  rasa.prim/count)

(def ^{:doc "Returns true when nil, a string, a concrete collection, or an admitted lazy seq has no items."
       :rasa.impl/backing rasa.prim/empty?}
  empty?
  rasa.prim/empty?)

(def ^{:doc "Looks up a map key, vector or string index, or set member and returns nil or the supplied default when absent."
       :rasa.impl/backing rasa.prim/get}
  get
  rasa.prim/get)

(def ^{:doc "Returns whether a map has a key, vector or string has an index, or set has a member."
       :rasa.impl/backing rasa.prim/contains?}
  contains?
  rasa.prim/contains?)
`,Ss=`import "@tensorflow/tfjs-backend-cpu";
import { loadLayersModel } from "@tensorflow/tfjs-layers";
import { BrowserResourceTable, CapabilityRegistry, capabilityKey } from "@rasa/capability-bridge";
import { isKeyword, renderRasaData, parseRasaData } from "./rasa-data.js";
import { MODEL_CATALOG } from "./models.js";

const MODEL_URLS = Object.freeze(
  Object.fromEntries(MODEL_CATALOG.map((model) => [model.id, \`./models/\${model.id}/model.json\`])),
);

class AssetNotPreparedError extends Error {
  constructor(modelId) {
    super(\`model :\${modelId} assets are not prepared\`);
    this.modelId = modelId;
  }
}

export class TfjsModelProvider {
  constructor() {
    this.resources = new BrowserResourceTable("browser");
    this.registry = defaultRegistry(this);
    this.modelIds = new Map();
    this.catalog = new Map();
    this.lastValue = null;
    this.lastTrace = null;
    this.pendingAssetModel = null;
  }

  call(requestText) {
    const request = parseRasaData(requestText);
    this.lastTrace = {
      requestText,
      request,
      responseText: "",
      packageName: request.package?.name || "unknown",
      exportName: request.export?.name || "unknown",
    };
    const response = this.route(request);
    const responseText = renderRasaData(response);
    this.lastTrace.responseText = responseText;
    return responseText;
  }

  route(request) {
    try {
      const packageName = request.package?.name;
      const exportName = request.export?.name;
      const args = request.args || [];
      const value = this.invoke(packageName, exportName, args);
      this.lastValue = value;
      this.lastTrace = {
        ...(this.lastTrace || {}),
        status: "ok",
        packageName,
        exportName,
        capability: capabilityKey(packageName, exportName),
        argsCount: args.length,
        view: value?.view?.name || "scalar",
      };
      return { status: kw("ok"), value };
    } catch (error) {
      const value =
        error instanceof AssetNotPreparedError
          ? {
              status: kw("failed"),
              kind: kw("asset-not-prepared"),
              model: kw(error.modelId),
              recoverable: true,
              message: error.message,
            }
          : { status: kw("failed"), kind: kw("provider-error"), message: error.message };
      if (error instanceof AssetNotPreparedError) {
        this.pendingAssetModel = error.modelId;
      }
      this.lastValue = value;
      this.lastTrace = {
        ...(this.lastTrace || {}),
        status: "failed",
        error: error.message,
      };
      return value;
    }
  }

  invoke(packageName, exportName, args) {
    return this.registry.invoke(packageName, exportName, args);
  }

  loadNamedModel(name) {
    if (!MODEL_URLS[name]) {
      throw new Error(\`unknown model :\${name}\`);
    }
    if (!this.catalog.has(name)) {
      throw new AssetNotPreparedError(name);
    }
    if (!this.modelIds.has(name)) {
      const handle = this.resources.insert("model", this.catalog.get(name));
      this.modelIds.set(name, handle);
    }
    return this.modelIds.get(name);
  }

  async prepareModel(name) {
    return this.loadModelNow(name);
  }

  isPrepared(name) {
    return this.catalog.has(name);
  }

  preparedModelIds() {
    return [...this.catalog.keys()];
  }

  async loadModelNow(name) {
    if (!MODEL_URLS[name]) {
      throw new Error(\`unknown model :\${name}\`);
    }
    if (this.catalog.has(name)) {
      return this.catalog.get(name);
    }
    const model = await loadLayersModel(MODEL_URLS[name]);
    this.catalog.set(name, model);
    return model;
  }

  model(handle) {
    return this.resources.get(handle, "model");
  }

  loadedModels() {
    return [...this.modelIds.entries()].map(([id, handle]) => {
      const summary = this.summary(handle);
      return {
        id,
        handle,
        name: summary.model,
        layers: summary.layers,
        parameters: summary.parameters,
        trainableParameters: summary.trainableParameters,
        bytes: summary.bytes,
        inputs: summary.inputs,
        outputs: summary.outputs,
      };
    });
  }

  summary(handle) {
    const model = this.model(handle);
    const layers = model.layers.map(layerView);
    return {
      view: kw("model-summary"),
      model: model.name,
      handle,
      layers: layers.length,
      parameters: sum(layers.map((layer) => layer.params)),
      trainableParameters: sum(layers.map((layer) => layer.trainableParams)),
      bytes: sum(layers.map((layer) => layer.bytes)),
      inputs: shapeText(model.inputs?.[0]?.shape),
      outputs: shapeText(model.outputs?.[0]?.shape),
      graph: graphFor(model),
      layerTable: layers,
    };
  }

  graph(handle) {
    return { view: kw("graph"), graph: graphFor(this.model(handle)) };
  }

  layerCount(handle) {
    const model = this.model(handle);
    return {
      view: kw("numeric-aggregate"),
      label: "layer count",
      value: model.layers.length,
      unit: kw("layers"),
      model: model.name,
      handle,
    };
  }

  layersByKind(handle, kind) {
    const layers = this.model(handle).layers.map(layerView).filter((layer) => layer.kind === kind);
    return { view: kw("layers-by-kind"), kind: kw(kind), count: layers.length, layers };
  }

  topLayers(handle, options) {
    const limit = Number(options.limit || 5);
    const by = keywordName(options.by || kw("params"));
    const key = by === "bytes" ? "bytes" : "params";
    const layers = this.model(handle)
      .layers.map(layerView)
      .sort((left, right) => right[key] - left[key])
      .slice(0, limit);
    return { view: kw("top-layers"), by: kw(key), layers };
  }

  inspectLayer(handle, layerName) {
    const layer = this.layerByName(handle, layerName);
    return {
      view: kw("layer-inspection"),
      layer: layerView(layer),
      config: compactConfig(layer.getConfig()),
      weights: layer.weights.map(weightView),
    };
  }

  layerTensorSize(handle, layerRef) {
    const { layer, index } = this.layerByRef(handle, layerRef);
    const view = layerView(layer, index);
    return {
      view: kw("numeric-aggregate"),
      label: "layer tensor size",
      value: view.params,
      unit: kw("parameters"),
      bytes: view.bytes,
      layer: view.name,
      index,
      output: view.output,
    };
  }

  weightStats(handle, layerName) {
    const layer = this.layerByName(handle, layerName);
    return {
      view: kw("weight-stats"),
      layer: layer.name,
      tensors: layer.getWeights().map((tensor, index) => statsForTensor(layer.weights[index], tensor)),
    };
  }

  weightHistogram(handle, layerName, options) {
    const layer = this.layerByName(handle, layerName);
    const bins = Number(options.bins || 24);
    const tensors = layer.getWeights().map((tensor, index) => ({
      name: layer.weights[index]?.originalName || \`weight_\${index}\`,
      bins: histogram(Array.from(tensor.dataSync()), bins),
    }));
    return { view: kw("weight-histogram"), layer: layer.name, bins, tensors };
  }

  layerByName(handle, layerName) {
    const layer = this.model(handle).layers.find((item) => item.name === layerName);
    if (!layer) throw new Error(\`unknown layer \${layerName}\`);
    return layer;
  }

  layerByRef(handle, layerRef) {
    const model = this.model(handle);
    if (typeof layerRef === "number") {
      const index = Math.trunc(layerRef) - 1;
      const layer = model.layers[index];
      if (!layer) throw new Error(\`unknown layer index \${layerRef}\`);
      return { layer, index };
    }
    const name = String(layerRef);
    const index = model.layers.findIndex((item) => item.name === name);
    if (index < 0) throw new Error(\`unknown layer \${name}\`);
    return { layer: model.layers[index], index };
  }
}

function defaultRegistry(provider) {
  return new CapabilityRegistry()
    .register("demo.tfjs/model", "load-model", ([id]) =>
      provider.loadNamedModel(keywordName(id)),
    )
    .register("demo.tfjs/model", "summary", ([handle]) => provider.summary(handle))
    .register("demo.tfjs/model", "layer-count", ([handle]) => provider.layerCount(handle))
    .register("demo.tfjs/model", "graph", ([handle]) => provider.graph(handle))
    .register("demo.tfjs/layers", "by-kind", ([handle, kind]) =>
      provider.layersByKind(handle, keywordName(kind)),
    )
    .register("demo.tfjs/layers", "top", ([handle, options = {}]) =>
      provider.topLayers(handle, options),
    )
    .register("demo.tfjs/layer", "inspect", ([handle, layer]) =>
      provider.inspectLayer(handle, layer),
    )
    .register("demo.tfjs/layer", "tensor-size", ([handle, layer]) =>
      provider.layerTensorSize(handle, layer),
    )
    .register("demo.tfjs/weights", "stats", ([handle, layer]) =>
      provider.weightStats(handle, layer),
    )
    .register("demo.tfjs/weights", "histogram", ([handle, layer, options = {}]) =>
      provider.weightHistogram(handle, layer, options),
    );
}

function layerView(layer, index = null) {
  const weights = layer.weights.map(weightView);
  return {
    id: layer.name,
    index: index ?? layerIndex(layer),
    name: layer.name,
    kind: layer.getClassName().toLowerCase(),
    activation: layer.getConfig().activation || "linear",
    input: shapeText(layer.inputShape),
    output: shapeText(layer.outputShape),
    params: sum(weights.map((weight) => weight.params)),
    trainableParams: sum(weights.filter((weight) => weight.trainable).map((weight) => weight.params)),
    bytes: sum(weights.map((weight) => weight.bytes)),
  };
}

function graphFor(model) {
  const layers = model.layers.map((layer, index) => ({ ...layerView(layer, index), index }));
  return {
    nodes: layers,
    edges: layers.slice(1).map((layer, index) => ({
      id: \`\${layers[index].id}->\${layer.id}\`,
      source: layers[index].id,
      target: layer.id,
    })),
  };
}

function weightView(weight) {
  const params = weight.shape.reduce((acc, value) => acc * value, 1);
  return {
    name: weight.originalName,
    shape: shapeText(weight.shape),
    params,
    bytes: params * 4,
    trainable: Boolean(weight.trainable),
  };
}

function statsForTensor(weight, tensor) {
  const values = Array.from(tensor.dataSync());
  const n = values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const mean = values.reduce((acc, value) => acc + value, 0) / n;
  const variance = values.reduce((acc, value) => acc + (value - mean) ** 2, 0) / n;
  const zeros = values.filter((value) => value === 0).length;
  return {
    name: weight?.originalName || "weight",
    shape: shapeText(tensor.shape),
    params: n,
    min: fixed(min),
    max: fixed(max),
    mean: fixed(mean),
    stddev: fixed(Math.sqrt(variance)),
    sparsity: fixed(zeros / n),
  };
}

function histogram(values, bins) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = max === min ? 1 : (max - min) / bins;
  const counts = Array.from({ length: bins }, (_, index) => ({
    start: fixed(min + index * width),
    end: fixed(min + (index + 1) * width),
    count: 0,
  }));
  for (const value of values) {
    const index = Math.min(bins - 1, Math.max(0, Math.floor((value - min) / width)));
    counts[index].count += 1;
  }
  return counts;
}

function compactConfig(config) {
  const keep = ["name", "activation", "filters", "kernelSize", "strides", "padding", "units", "poolSize"];
  return Object.fromEntries(keep.filter((key) => config[key] !== undefined).map((key) => [key, config[key]]));
}

function keywordName(value) {
  if (isKeyword(value)) return value.name;
  if (typeof value === "string") return value;
  return value?.name || String(value);
}

function kw(name) {
  return { type: "keyword", name };
}

function shapeText(shape) {
  if (!shape) return "?";
  if (Array.isArray(shape) && Array.isArray(shape[0])) return shape[0].map(dim).join(" x ");
  return shape.map(dim).join(" x ");
}

function dim(value) {
  return value == null ? "*" : String(value);
}

function sum(values) {
  return values.reduce((acc, value) => acc + value, 0);
}

function fixed(value) {
  return String(Math.round(value * 100000) / 100000);
}

function layerIndex(layer) {
  return Number(layer._index ?? 0);
}
`,Ns="./ras.wasm",yn=Object.freeze({phases:"all",traces:!0}),yt=e=>e<2;function Es(){const e=Ts()==="trace",n=d.useRef(null),t=d.useRef(null),r=d.useRef(0),a=d.useRef(null),i=d.useRef(!1),[o,l]=d.useState(Be),[c,u]=d.useState(()=>gr()),[p,f]=d.useState(()=>e?zn(re(Be)).source:Zr),[m,y]=d.useState("loading"),[S,U]=d.useState(!1),[P,le]=d.useState(0),[ve,D]=d.useState(null),[C,O]=d.useState(null),[je,ce]=d.useState(""),[de,ue]=d.useState(null),[V,me]=d.useState(null),[He,ke]=d.useState([]),[We,pe]=d.useState([]),[jt,Ke]=d.useState(null),[kt,Ge]=d.useState({}),[H,Re]=d.useState(null),[Se,Je]=d.useState(null),[Ne,Nn]=d.useState(null),[Rt,St]=d.useState("boundary"),[Ye,fe]=d.useState([]),g=d.useMemo(()=>e?zn(re(o)):null,[e,o]),he=m==="component adapter pending";d.useEffect(()=>{const h=x=>u(x.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",h),()=>window.removeEventListener("rasa-theme-change",h)},[]),d.useEffect(()=>{let h=!0;async function x(){try{if(e&&g){if(!h)return;const R=await Un().catch(()=>({}));if(!h)return;ce(g.runtimeReport),ue(g.providerTrace),me(g.traceSection),ke([g.loadedModel]),pe([g.loadedModel.id]),Ge(R),Re(g.value),Je(g.loadedModel.handle),Nn(null),D({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),O({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:Oe,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:g.source,result:rn(g.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:g.value}]),y("ready");return}const W=I(),N=new os,E=I(),k=await Un(),Y=A(E),X=I(),T=await xn.load(Ms(),{host:N}),K=A(X);if(T.available===!1){if(!h)return;t.current=T,Ge(k),ce(""),ue(null),me(null),ke([]),pe([]),Re(null),Je(null),D({manifestMs:Y,engineMs:K,setupMs:0,totalMs:A(W)}),O({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:Oe,result:gn,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),y("component adapter pending");return}const B=T.createSession(),Te=I();await T.loadPackageAsync(B,ft);const Me=await T.evaluateSessionAsync(B,Rs,yn);Vn(Me,"Rasa core boot");const Z=await T.evaluateSessionAsync(B,Oe,yn);Vn(Z,"model setup");const Xe=A(Te);if(!h)return;n.current=N,t.current=T,r.current=B,ce(Z),ue(N.lastTrace),me(tn(Z)),ke(N.loadedModels()),pe(N.preparedModelIds()),Ge(k),D({manifestMs:Y,engineMs:K,setupMs:Xe,totalMs:A(W)}),fe([{id:"setup",kind:"setup",source:Oe,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),y("ready")}catch(W){h&&y(`failed: ${W.message}`)}}return x(),()=>{h=!1,t.current&&r.current&&t.current.freeSession(r.current)}},[e,g]);const Nt=d.useCallback(async()=>{if(e&&g){const R=a.current?.state.doc.toString()||p,ye=P+1;le(ye),Re(g.value),ue(g.providerTrace),me(g.traceSection),ce(g.runtimeReport),O({run:ye,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe(Q=>[...Q,{id:`run-${Q.length}`,kind:"run",source:R,result:rn(g.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:g.value}]);return}if(he||t.current?.available===!1){O(R=>({...R||{},status:"pending",view:"component-adapter-pending"}));return}if(!t.current||!r.current||!n.current||i.current)return;i.current=!0,U(!0),Ke(null);const h=a.current?.state.doc.toString()||p,x=n.current,W=I();let N=je,E=null,k=null,Y=null,X=null,T=0,K=0,B=0,Te=!1;O({status:"running",assetState:"checking",totalMs:0});try{const R=I();N=await Dn(t.current,r.current,x,h),Y=tn(N),K=A(R);const ye=la(x);if(ye){const Q=ye;X=Q,Ke(Q),O({status:"running",assetState:"fetching",assetModel:X,firstEvalMs:K,totalMs:A(W)});const At=I();await x.prepareModel(Q),T=A(At),pe(x.preparedModelIds()),x.pendingAssetModel=null;const Ct=I();N=await Dn(t.current,r.current,x,h),Y=tn(N),B=A(Ct)}else B=K;E=x.lastValue,k=x.lastTrace}catch(R){Te=!0,E=oa("asset-load-error",R.message),k={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,U(!1)}const Me=A(W),Z=P+1,Xe={run:Z,status:k?.status||"ok",capability:q(k),view:k?.view||Pe(E),assetState:Te?"failed":X?"fetched":"cached",assetModel:X,assetLoadMs:T,firstEvalMs:K,finalEvalMs:B,totalMs:Me,cacheCount:x.preparedModelIds().length};ce(N),Re(E),ue(k),me(Y),ke(x.loadedModels()),pe(x.preparedModelIds()),Ke(null),O(Xe),E?.handle&&Je(E.handle),le(Z),fe(R=>[...R,{id:`run-${R.length}`,kind:"run",source:h,result:rn(E),capability:q(k),view:k?.view||Pe(E),status:k?.status||"ok",durationMs:Me,value:E}])},[e,g,P,he,je,p,V]),L=d.useMemo(()=>Nr(H),[H]),Et=d.useMemo(()=>Se?He.find(h=>h.handle===Se):null,[Se,He]),Tt=d.useMemo(()=>L.nodes.map(h=>h.id).join("|")||"empty-graph",[L.nodes]),Mt=d.useMemo(()=>L.nodes.map((h,x)=>({id:h.id,position:{x:x*220,y:x%2===0?0:28},data:{label:s.jsxs("div",{className:"node-label",children:[s.jsx("strong",{children:h.name}),s.jsx("span",{children:h.kind}),s.jsxs("em",{children:[h.params," params"]})]}),layer:h},type:"default",className:Ne===h.id?"selected-node":""})),[L.nodes,Ne]),$t=d.useMemo(()=>L.edges.map(h=>({...h,animated:!0})),[L.edges]),Ee=d.useMemo(()=>Hr({graph:L,value:H,summary:oe(V),transcript:Ye,runMetrics:C,runtimeState:{available:!he}}),[L,H,V,Ye,C,he,m]);return s.jsxs("main",{className:"app-shell",children:[s.jsx("style",{children:`${jr}
${hr}`}),s.jsxs("header",{className:"hero",children:[s.jsxs("div",{className:"brand-lockup",children:[s.jsx("img",{src:In.logo,alt:"Rasa"}),s.jsxs("div",{children:[s.jsx("span",{children:"Rasa Model Explorer"}),s.jsx("h1",{children:"Model architecture explorer"}),s.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),s.jsx(Yr,{activeId:"model",className:"surface-switcher"}),s.jsxs("div",{className:"hero-status",children:[s.jsx("img",{src:In.mark,alt:"","aria-hidden":"true"}),s.jsx("span",{className:m==="ready"?"ok":"warn",children:m}),s.jsx("span",{children:"tfjs assets on first run"}),s.jsx("span",{children:"static bundle"}),s.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>u(xr()),"aria-label":`Switch to ${qn(c).toLowerCase()} theme`,children:qn(c)})]})]}),s.jsxs("section",{className:"boundary-theater",children:[s.jsx(As,{fixture:e,providerTrace:de,traceSection:V,runMetrics:C}),s.jsxs("aside",{className:"theater-left",children:[s.jsxs("div",{className:"studio-head",children:[s.jsx("span",{className:"label",children:"Model & extension"}),s.jsx("strong",{children:"What Rasa is allowed to touch"})]}),s.jsx(zs,{models:He,activeHandle:Se,preparedModelIds:We}),s.jsx(Ws,{modelManifest:kt[o],modelId:o,compact:!0})]}),s.jsxs(Ce,{className:"theater-stage",slotId:"graph-stage",slots:Ee.slots,children:[s.jsx(Cs,{value:H,graph:L,traceSection:V,providerTrace:de,selectedModelId:o,activeModel:Et,preparedModelIds:We,status:m,running:S,fixture:e}),s.jsxs(Ce,{as:"div",className:"graph-wrap graph-theater",slotId:"graph-canvas",slots:Ee.slots,children:[he?s.jsx($s,{}):null,s.jsxs(Lt,{nodes:Mt,edges:$t,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(h,x)=>Nn(x.id),children:[s.jsx(It,{color:"#29313d",gap:18}),s.jsx(qt,{showInteractive:!1})]},Tt)]}),s.jsx(Ls,{traceSection:V,providerTrace:de,runMetrics:C,bootMetrics:ve})]}),s.jsxs(Ce,{as:"aside",className:"theater-inspector",slotId:"value-inspector",slots:Ee.slots,children:[s.jsx(Os,{value:H,trace:de,selectedLayer:Ne}),s.jsx(Is,{activeTab:Rt,setActiveTab:St,value:H,selectedLayer:Ne,trace:de,traceSection:V,runtimeReport:je,fixture:e})]}),s.jsxs(Ce,{className:"theater-console","aria-label":"Rasa command console",slotId:"source-editor",slots:Ee.slots,children:[s.jsx(Ps,{entries:Ye}),s.jsxs("div",{className:"console-command",children:[s.jsx(_s,{selectedModelId:o,setSelectedModelId:l,setSource:f,editorRef:a,prepared:We.includes(o),preparing:jt===o}),s.jsx(qs,{source:p,editorRef:a,run:Nt,disabled:m!=="ready"||S,running:S})]})]})]})]})}function Ts(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function Ms(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||Ns}function $s(){return s.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[s.jsx("span",{className:"label",children:"Wasm component runtime"}),s.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),s.jsxs("p",{children:["Use ",s.jsx("code",{children:"ras"})," or ",s.jsx("code",{children:"ras-wasm"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function As({fixture:e,providerTrace:n,traceSection:t,runMetrics:r}){const a=Dr({fixture:e,providerTrace:n,runMetrics:r,traceSection:t}),i=Vr({fixture:e,providerTrace:n,runMetrics:r,traceSection:t});return s.jsxs("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:[s.jsx(Jr,{phases:a,className:"model-phase-route",ariaLabel:"Rasa model explorer phase route"}),s.jsx(Xr,{steps:i,className:"model-boundary-route",ariaLabel:"Host boundary route"})]})}function Cs({value:e,graph:n,traceSection:t,providerTrace:r,selectedModelId:a,activeModel:i,preparedModelIds:o,status:l,running:c,fixture:u}){const p=re(a),f=i?{...re(i.id),...i,title:re(i.id).title}:null,m=Tr({value:e,graph:n,traceSection:t,providerTrace:r,selectedModel:p,activeModel:f,runtimeState:{available:u||l==="ready",message:u?"Saved trace fixture is loaded for visual validation.":l==="component adapter pending"?gn:""},catalogCount:J.length,preparedModelCount:o.length,running:c,fixture:u});return s.jsxs("header",{className:"stage-header story-header","data-tone":m.headline.tone,children:[s.jsxs("div",{className:"story-copy",children:[s.jsx("span",{className:"label",children:m.headline.eyebrow}),s.jsx("h2",{children:m.headline.title}),s.jsx("p",{children:m.headline.subtitle}),s.jsxs("span",{className:"runtime-pill","data-tone":m.runtime.tone,children:[s.jsx("strong",{children:m.runtime.label}),s.jsx("em",{children:m.runtime.detail})]})]}),s.jsx("div",{className:"stage-metrics story-metrics",children:m.metrics.map(y=>s.jsx(bt,{label:y.label,value:y.value,detail:y.detail,tone:y.tone},y.id))})]})}function Os({value:e,trace:n,selectedLayer:t}){const[r,a]=d.useState(null),i=e?xe(e):"nil";return s.jsxs(s.Fragment,{children:[s.jsxs("article",{className:"value-lens",children:[s.jsx("span",{className:"label",children:"Selected value"}),s.jsx("strong",{children:Pe(e)}),s.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),s.jsx(ie,{text:sa(i),mode:"rasa"}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"capability"}),s.jsx("dd",{children:q(n)||"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"selected"}),s.jsx("dd",{children:t||"none"})]})]}),s.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&s.jsx(Rn,{kind:"Rasa value",title:Pe(e),description:"The real structured value returned to the browser from the Rasa session.",meta:Sn(i,"rasa"),onClose:()=>a(null),children:s.jsx("div",{className:"modal-code-stack result-only",children:s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"returned value"}),s.jsx(ie,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function Ls({traceSection:e,providerTrace:n,runMetrics:t,bootMetrics:r}){const a=Mr({traceSection:e,providerTrace:n,runMetrics:t,bootMetrics:r});return s.jsx("section",{className:"host-status-strip","aria-label":"Current host request status",children:a.map(i=>s.jsx(bt,{label:i.label,value:i.value},i.label))})}function Is({activeTab:e,setActiveTab:n,value:t,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:l}){const c=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return s.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[s.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:c.map(u=>s.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>n(u.id),children:u.label},u.id))}),s.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&s.jsx(Us,{traceSection:i,providerTrace:a,fixture:l}),e==="result"&&s.jsxs(s.Fragment,{children:[s.jsx(Fs,{value:t,trace:a,traceSection:i}),s.jsx(Xs,{value:t,selectedLayer:r})]}),e==="data"&&s.jsxs(s.Fragment,{children:[s.jsx(gt,{title:"Returned Rasa value",value:t,defaultOpen:!0}),s.jsxs("details",{className:"runtime-report",children:[s.jsx("summary",{children:"Runtime report"}),s.jsx("pre",{children:o})]})]})]})]})}function qs({source:e,editorRef:n,run:t,disabled:r,running:a}){const i=d.useRef(null),o=d.useRef(t);return d.useEffect(()=>{o.current=t},[t]),d.useEffect(()=>{const l=ir({parent:i.current,doc:e,onRun:()=>o.current(),liveLexicalHighlight:!0});return n.current=l,()=>l.destroy()},[]),s.jsxs("div",{className:"editor-panel",children:[s.jsxs("div",{className:"editor-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Rasa input"}),s.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),s.jsx("span",{children:"Primary+Enter runs"})]}),s.jsx("div",{className:"editor-host",ref:i}),s.jsxs("div",{className:"editor-actions",children:[s.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),s.jsx("button",{className:"run-button",type:"button",onClick:t,disabled:r,children:a?"Running...":"Run"})]})]})}function Ps({entries:e}){const n=d.useRef(null),[t,r]=d.useState(null),a=d.useMemo(()=>Ir(e),[e]),i=t?ra(t):"";return d.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:a.empty?s.jsxs("article",{className:"transcript-entry",children:[s.jsx("pre",{className:"transcript-form",children:a.emptyEntry.source}),s.jsx("pre",{className:"transcript-result-static",children:a.emptyEntry.resultPreview})]}):a.entries.map(o=>s.jsx(Bs,{entry:o,onOpenResult:()=>r(e[o.index])},o.id))}),t&&s.jsx(Rn,{kind:"Rasa value",title:t.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:Sn(i,"rasa"),onClose:()=>r(null),children:s.jsxs("div",{className:"modal-code-stack",children:[s.jsxs("section",{className:"form-section",children:[s.jsx("span",{className:"modal-section-label",children:"form"}),s.jsx(ie,{text:t.source,mode:"rasa",numbered:!0})]}),s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"result"}),s.jsx(ie,{text:i,mode:"rasa",numbered:!0})]})]})})]})}function Bs({entry:e,onOpenResult:n}){return s.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[s.jsx("pre",{className:"transcript-form",children:e.source}),e.canOpenResult&&s.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[s.jsx("pre",{children:e.resultPreview}),s.jsx("span",{children:"Open full value"})]}),s.jsx("div",{className:"transcript-meta",children:e.meta.map(t=>s.jsx("span",{children:t},t))})]})}function _s({selectedModelId:e,setSelectedModelId:n,setSource:t,editorRef:r,prepared:a,preparing:i}){const o=Lr({selectedModelId:e,models:J,commands:Qr(e).slice(0,5),prepared:a,preparing:i}),l=c=>{n(c.target.value)};return s.jsxs("div",{className:"command-shelf",children:[s.jsxs("div",{className:"command-shelf-head",children:[s.jsxs("label",{className:"model-picker",children:[s.jsx("span",{children:"Model"}),s.jsx("select",{value:o.selectedModelId,onChange:l,children:o.models.map(c=>s.jsx("option",{value:c.id,children:c.title},c.id))})]}),s.jsx("span",{className:o.assetState.className,children:o.assetState.label})]}),s.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.commands.map(c=>s.jsxs("article",{className:"command-chip",children:[s.jsxs("div",{children:[s.jsx("strong",{children:c.label}),s.jsx("span",{children:c.preview})]}),s.jsxs("div",{className:"command-actions",children:[s.jsx("button",{type:"button",title:c.insertTitle,onClick:()=>ea(c.source,t,r),children:"Insert"}),s.jsx("button",{type:"button",title:c.appendTitle,onClick:()=>na(c.source,t,r),children:"Append"})]})]},c.label))})]})}function zs({models:e,activeHandle:n,preparedModelIds:t}){const r=n?e.find(a=>a.handle===n):null;return s.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:r.name})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"id"}),s.jsx("dd",{children:r.id})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"handle"}),s.jsx("dd",{children:r.handle})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"layers"}),s.jsx("dd",{children:r.layers})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:r.parameters})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"size"}),s.jsx("dd",{children:ca(r.bytes||0)})]})]})]},r.handle||r.id):s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:"none yet"})]}),s.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),s.jsxs("div",{className:"catalog-note",children:[J.length," static catalog models are available. ",t.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Fs({value:e,trace:n,traceSection:t}){const r=$r({value:e,trace:n,traceSection:t});return s.jsxs("section",{className:"projection-card",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Projection"}),s.jsx("strong",{children:r.renderer}),s.jsx("p",{children:r.reason})]}),s.jsx("dl",{children:r.rows.map(a=>s.jsxs("div",{children:[s.jsx("dt",{children:a.label}),s.jsx("dd",{children:a.value})]},a.label))})]})}function Us({traceSection:e,providerTrace:n,fixture:t=!1}){const r=Ar({traceSection:e,providerTrace:n,fixture:t});return s.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[s.jsxs("div",{className:"boundary-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:r.label}),s.jsx("strong",{children:r.title}),r.note&&s.jsx("p",{className:"trace-note",children:r.note})]}),s.jsx("span",{children:r.traceCountLabel})]}),s.jsx("div",{className:"boundary-path",children:r.steps.map(a=>s.jsx(Ds,{title:a.title,value:a.value},a.title))}),s.jsxs("details",{className:"trace-section",open:!0,children:[s.jsx("summary",{children:"Admitted host calls"}),s.jsx("div",{className:"trace-list",children:r.requests.length?r.requests.map(a=>s.jsx(Vs,{request:a},a.id)):s.jsx("p",{className:"trace-empty",children:r.emptyMessage})})]}),s.jsx(Hs,{trace:n}),s.jsx(gt,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Ds({title:e,value:n}){return s.jsxs("article",{children:[s.jsx("span",{children:e}),s.jsx("strong",{children:n})]})}function Vs({request:e}){return s.jsxs("article",{className:"host-request-card",children:[s.jsxs("div",{children:[s.jsxs("span",{children:["call ",e.id]}),s.jsx("strong",{children:e.title})]}),s.jsx("dl",{children:e.rows.map(n=>s.jsxs("div",{children:[s.jsx("dt",{children:n.label}),s.jsx("dd",{children:n.value})]},n.label))})]})}function Hs({trace:e}){const n=Or(e);return s.jsxs("article",{className:"provider-bridge",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Browser bridge"}),s.jsx("strong",{children:n.title})]}),s.jsx("dl",{children:n.rows.map(t=>s.jsxs("div",{children:[s.jsx("dt",{children:t.label}),s.jsx("dd",{children:t.value})]},t.label))}),s.jsxs("details",{className:"bridge-details",children:[s.jsx("summary",{children:"Request / response data"}),s.jsx("pre",{children:n.requestText}),s.jsx("pre",{children:n.responseText})]})]})}function gt({title:e,value:n,defaultOpen:t=!1}){const r=d.useMemo(()=>ps(n),[n]),a=d.useMemo(()=>_e(n),[n]),i=r.slice(0,12);return s.jsxs("details",{className:"data-projection",open:t,children:[s.jsxs("summary",{children:[s.jsx("span",{children:e}),s.jsxs("strong",{children:[r.length," node(s)"]})]}),s.jsx("div",{className:"projection-viewer",children:s.jsx(Hn,{data:a||{},shouldExpandNode:yt,clickToExpandNode:!0,compactTopLevel:!0,style:{...Wn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>s.jsxs("article",{children:[s.jsx("span",{children:o.label}),s.jsx("strong",{children:o.value||o.kind}),s.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&s.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Compact Rasa data"}),s.jsx("pre",{className:"data-block",children:fs(n)})]})]})}function Ws({modelManifest:e,modelId:n,compact:t=!1}){const[r,a]=d.useState(null),i=Ks(e,n);return s.jsxs("section",{className:`extension-panel ${t?"compact":""}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Open the extension"}),s.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),s.jsx("div",{className:"extension-assets",children:i.map(o=>s.jsx(Gs,{asset:o,onOpen:()=>a(o)},o.id))}),r&&s.jsx(Js,{asset:r,onClose:()=>a(null)})]})}function Ks(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:ft,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:Ss,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Gs({asset:e,onOpen:n}){return s.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[s.jsx("span",{children:e.kind}),s.jsx("strong",{children:e.title}),s.jsx("em",{children:e.description})]})}function Js({asset:e,onClose:n}){return s.jsx(Rn,{kind:e.kind,title:e.title,description:e.description,meta:Sn(e.text,e.mode),onClose:n,children:s.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"projection-viewer large",children:s.jsx(Hn,{data:_e(e.value),shouldExpandNode:yt,clickToExpandNode:!0,compactTopLevel:!0,style:{...Wn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Raw manifest JSON"}),s.jsx(ie,{text:e.text,mode:"json",numbered:!0})]})]}):s.jsx(ie,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Rn({kind:e,title:n,description:t,meta:r=[],onClose:a,children:i}){const o=d.useId(),l=d.useId(),c=d.useRef(null),u=d.useRef(null);return d.useEffect(()=>{const p=document.activeElement;return u.current?.focus(),()=>{p?.isConnected&&typeof p.focus=="function"&&p.focus()}},[]),d.useEffect(()=>{const p=f=>{if(f.key==="Escape"){f.preventDefault(),a();return}if(f.key!=="Tab"||!c.current)return;const m=Ys(c.current);if(!m.length){f.preventDefault();return}const y=m[0],S=m[m.length-1];c.current.contains(document.activeElement)?f.shiftKey&&document.activeElement===y?(f.preventDefault(),S.focus()):!f.shiftKey&&document.activeElement===S&&(f.preventDefault(),y.focus()):(f.preventDefault(),y.focus())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[a]),s.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":l,children:[s.jsx("div",{className:"asset-modal-backdrop",onClick:a}),s.jsxs("article",{className:"asset-modal-panel",ref:c,tabIndex:-1,children:[s.jsxs("header",{children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:e}),s.jsx("h2",{id:o,children:n}),s.jsx("p",{id:l,children:t}),r.length>0&&s.jsx("div",{className:"modal-meta",children:r.map(p=>s.jsxs("span",{children:[s.jsx("strong",{children:p.value}),p.label]},p.label))})]}),s.jsx("button",{ref:u,type:"button",onClick:a,children:"Close"})]}),i]})]})}function Ys(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function ie({text:e,mode:n="rasa",numbered:t=!1}){const r=String(e||"").split(`
`);return s.jsx("pre",{className:`line-code ${t?"numbered":""}`,children:r.map((a,i)=>s.jsxs("span",{className:"code-line",children:[t&&s.jsx("span",{className:"line-number",children:i+1}),s.jsx("code",{children:aa(a||" ",n)})]},i))})}function Xs({value:e,selectedLayer:n}){if(!e)return s.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return s.jsx("pre",{className:"data-block",children:F(e)});const t=Ue(e);if(t==="weight-histogram")return s.jsx(Zs,{value:e});if(t==="weight-stats")return s.jsx(Qs,{value:e});const r=n?ta(e,n):null;return s.jsxs("div",{className:"inspection-stack",children:[r&&s.jsx(Le,{layer:r}),Array.isArray(e.layers)&&e.layers.map(a=>s.jsx(Le,{layer:a},a.id)),Array.isArray(e.layerTable)&&e.layerTable.map(a=>s.jsx(Le,{layer:a,compact:!0},a.id)),e.layer&&s.jsx(Le,{layer:e.layer}),s.jsx(xt,{value:e})]})}function Zs({value:e}){const n=e.tensors?.[0],t=Math.max(...(n?.bins||[]).map(r=>r.count),1);return s.jsxs("div",{className:"inspection-stack",children:[s.jsx("h2",{children:e.layer}),s.jsx("div",{className:"histogram",children:(n?.bins||[]).map((r,a)=>s.jsx("div",{style:{height:`${8+r.count/t*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),s.jsx(xt,{value:e})]})}function Qs({value:e}){return s.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:n.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"shape"}),s.jsx("dd",{children:n.shape})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"mean"}),s.jsx("dd",{children:n.mean})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"stddev"}),s.jsx("dd",{children:n.stddev})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"range"}),s.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function xt({value:e}){return s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Returned Rasa data"}),s.jsx("pre",{className:"data-block",children:F(e)})]})}function Le({layer:e,compact:n=!1}){return s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:e.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"kind"}),s.jsx("dd",{children:e.kind})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"output"}),s.jsx("dd",{children:e.output})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:e.params})]}),!n&&s.jsxs("div",{children:[s.jsx("dt",{children:"bytes"}),s.jsx("dd",{children:e.bytes})]})]})]})}function bt({label:e,value:n,detail:t="",tone:r=""}){return s.jsxs("article",{className:"metric","data-tone":r,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:n}),t?s.jsx("em",{children:t}):null]})}function ea(e,n,t){const r=t.current;if(!r){n(i=>wt(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function na(e,n,t){const r=t.current;if(!r){n(l=>wt(l,e));return}const a=r.state.doc.toString(),i=vt(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function wt(e,n){return`${e||""}${vt(e||"",n)}`}function vt(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}async function Un(){const e=await Promise.all(J.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(t=>t.json())]));return Object.fromEntries(e)}function ta(e,n){return e?.layerTable?.find(t=>t.id===n)||e?.layers?.find(t=>t.id===n)}function ra(e){return e.value!==void 0?`=>
${xe(e.value)}`:String(e.result||"=> nil")}function sa(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function aa(e,n){const t=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=t.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(s.jsx("span",{className:`tok ${ia(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function ia(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function Sn(e,n="code"){const t=String(e||""),r=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:t?t.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(t).length},{label:"viewer",value:r}]}function rn(e){return e?`=> ${F(e)}`:"=> nil"}async function Dn(e,n,t,r){return t.lastValue=null,t.lastTrace=null,t.pendingAssetModel=null,await e.evaluateSessionAsync(n,r,yn)}function Vn(e,n){let t=null;try{t=jn(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const r=t?.status?.name,a=t?.eval?.status?.name;if(r!=="ok"||t.eval&&a!=="ok"){const i=t?.eval?.message||t?.eval?.["rendered-error"]||t?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function oa(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function la(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function ca(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function I(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function A(e){return Math.max(0,I()-e)}Ot.createRoot(document.getElementById("root")).render(s.jsx(Es,{}));
