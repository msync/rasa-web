import{j as s,r as c,b as Cn,J as Dt,d as Vt}from"./react.js";import{i as On,B as In,C as Ln}from"./graph.js";import{S as qt,k as Pn,E as re,a as Rt,l as Bn,d as _n,b as Ht,D as st}from"./editor.js";import{l as zn}from"./tfjs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Wt="wasm-component",Fn="browser-component-adapter-pending",ft="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.",Un="rasa-component/",Kt="rasa:runtime/host",Dn="rasa:runtime/host@0.1.0",Vn="rasa:runtime/session@0.1.0",Gt=1,Jt=2,Yt=4,Xt=8,Zt=16,qn=Gt|Jt|Yt|Xt|Zt,Hn=256;class Wn extends Error{constructor(t=ft){super(t),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=Wt,this.unavailableReason=Fn}}class Nt extends Error{constructor(t){super(t),this.name="RasaBrowserHostCallError"}}class yt{static async load(t,n={}){const r=Tt(t),a=n.readBytes||Qn,i=await a(r,"Rasa runtime component"),o=Tt(n.adapterBaseUrl||Un,r),d=await import(new URL("ras-runtime.js",o).href),u=Gn(n.host),p=new Map,h=await d.instantiate(async m=>{const g=new URL(m,o),R=p.get(g.href);if(R)return R;const q=await a(g,`Rasa component core module ${m}`),B=await WebAssembly.compile(q);return p.set(g.href,B),B},u);return new yt({url:r.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:u,session:h.session||h[Vn]})}constructor(t={}){if(!t.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=t.url??null,this.adapterBaseUrl=t.adapterBaseUrl??null,this.byteLength=t.byteLength??null,this.available=!0,this.runtimeKind=Wt,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=t.session,this.importObject=t.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new Wn(this.message)}evaluate(t,n=null){return this.session.evalSource(D(t),Ae(n))}inspect(t,n=null){const r=this.session.inspectSource(D(t),Ae(n));return Et(r,"inspection artifact")}syntaxTokens(t){const n=this.session.syntaxTokens(D(t));return Et(n,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(t){t!=null&&this.session.sessionFree(t)}loadPackage(t,n){return this.session.sessionLoadPackage(t,Pe(n))}async loadPackageAsync(t,n){return await this.loadPackage(t,n)}evaluateSession(t,n,r=null){return this.session.sessionEval(t,D(n),Ae(r))}async evaluateSessionAsync(t,n,r=null){return await this.evaluateSession(t,n,r)}evaluateReplSession(t,n,r=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(t,D(n),Ae(r))}async evaluateReplSessionAsync(t,n,r=null){return await this.evaluateReplSession(t,n,r)}}function D(e){return new TextEncoder().encode(String(e??""))}function Kn(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function Gn(e=null){const t={[Kt]:Jn(e),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new Mt},"wasi:cli/stdout":{getStdout:()=>new Ze},"wasi:cli/stderr":{getStderr:()=>new Ze},"wasi:cli/terminal-input":{TerminalInput:tr},"wasi:cli/terminal-output":{TerminalOutput:nr},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new at},"wasi:io/error":{Error:er},"wasi:io/poll":{Pollable:at,poll:()=>[]},"wasi:io/streams":{InputStream:Mt,OutputStream:Ze},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return Xn(t)}function Jn(e){return{call(t){if(!e)throw new Nt("no browser host provider is registered");if(typeof e.callBytes=="function")return Yn(e.callBytes(t));if(typeof e.call=="function"){const n=e.call(Kn(t));return Qt(n)?n.then(r=>D(r)):D(n)}throw new Nt("browser host provider does not implement call")}}}function Yn(e){return Qt(e)?e.then(t=>Pe(t)):Pe(e)}function Xn(e){return{...e,[Dn]:e[Kt],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function Ae(e){if(typeof e=="number")return e;let t=qn;return e?.phases&&e.phases!=="all"&&(t=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((r,a)=>r|Zn(a),0)),e?.traces&&(t|=Hn),t}function Zn(e){switch(String(e)){case"reader":return Gt;case"analysis":case"analyze":return Jt;case"ir":return Yt;case"facts":return Xt;case"eval":return Zt;default:return 0}}function Et(e,t){try{return JSON.parse(e)}catch(n){throw new Error(`failed to parse ${t}: ${n.message}`)}}function Pe(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):D(e)}async function Qn(e,t){const n=await fetch(e);if(!n.ok)throw new Error(`failed to load ${t}: ${n.status}`);return Pe(await n.arrayBuffer())}function Tt(e,t=null){return new URL(String(e),t||globalThis.location?.href||import.meta.url)}function Qt(e){return e&&typeof e.then=="function"}class er{}class at{block(){}}class Mt{}class Ze{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new at}}class tr{}class nr{}const rr=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),en=qt.define();qt.define();function sr(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}function ar({parent:e,doc:t="",onChange:n=null,onRun:r=null,readOnly:a=!1,liveLexicalHighlight:i=!1,extensions:o=[]}={}){if(!e)throw new Error("mountRasaCodeEditor requires a parent element");const l=r?Pn.of(sr(r)):[],d=i?ur():cr();return new re({parent:e,state:Rt.create({doc:t,extensions:[Bn(),_n(),re.lineWrapping,d,l,re.editable.of(!a),Rt.readOnly.of(a),re.updateListener.of(u=>{u.docChanged&&n?.(u.state.doc.toString(),u)}),...o]})})}function ir(e){return rr[e]??"rasa-token-unknown"}function $t(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const a=t[r];if(/\s/.test(a)){r+=1;continue}if("()[]{}".includes(a)){n.push(U(t,"delimiter",r,r+1)),r+=1;continue}if(a===";"){const l=dr(t,r);n.push(U(t,"comment",r,l)),r=l;continue}if(a==='"'){const l=lr(t,r);n.push(U(t,"string",r,l)),r=l;continue}if(a==="^"){n.push(U(t,"reader-macro",r,r+1));const l=r+1;if(l<t.length&&!/[\s()[\]{}]/.test(t[l])){const d=Qe(t,l);n.push(U(t,"metadata",l,d)),r=d}else r+=1;continue}if(a==="'"||a==="`"||a==="~"||a==="@"){n.push(U(t,"reader-macro",r,r+1)),r+=1;continue}if(a==="\\"){const l=Qe(t,r);n.push(U(t,"character",r,l)),r=l;continue}const i=Qe(t,r),o=t.slice(r,i);n.push(U(t,or(o),r,i)),r=i}return n}function or(e){return e==="nil"?"nil":e==="true"||e==="false"?"boolean":e.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(e)?"number":"symbol"}function U(e,t,n,r){return{kind:t,start:Ct(e,n),end:Ct(e,r)}}function Qe(e,t){let n=t;for(;n<e.length&&!/[\s()[\]{}]/.test(e[n]);)n+=1;return n}function lr(e,t){let n=!1;for(let r=t+1;r<e.length;r+=1){const a=e[r];if(n)n=!1;else if(a==="\\")n=!0;else if(a==='"')return r+1}return e.length}function dr(e,t){const n=e.indexOf(`
`,t);return n<0?e.length:n}function ge(e,t){const n=typeof t=="string"?t:"",r=typeof t=="number"?t:n.length,a=pr(e,n||r).map(i=>st.mark({class:ir(i.kind)}).range(i.start,i.end));return st.set(a,!0)}function cr(e=[]){return[Ht.define({create(n){return ge(e,n.doc.toString())},update(n,r){for(const a of r.effects)if(a.is(en))return ge(a.value,r.state.doc.toString());return r.docChanged?st.none:n.map(r.changes)},provide:n=>re.decorations.from(n)})]}function ur(){return[Ht.define({create(t){return ge($t(t.doc.toString()),t.doc.toString())},update(t,n){for(const r of n.effects)if(r.is(en))return ge(r.value,n.state.doc.toString());return n.docChanged?ge($t(n.state.doc.toString()),n.state.doc.toString()):t.map(n.changes)},provide:t=>re.decorations.from(t)})]}function mr(e,t,n){const r=String(e),a=ot(t),i=Math.max(a,ot(n));return{start:At(r,a),end:At(r,i)}}function At(e,t){const n=String(e),r=ot(t);let a=0,i=0;for(const o of n){const l=a+tn(o);if(l>r||(a=l,i+=o.length,a===r))return i}return n.length}function Ct(e,t){const n=String(e),r=it(t,n.length);let a=0;for(let i=0;i<r;){const o=n.codePointAt(i),l=String.fromCodePoint(o);a+=tn(l),i+=l.length}return a}function pr(e,t){const n=typeof t=="number"?t:String(t).length;return[...e].map(r=>{const a=typeof t=="number"?{start:it(r.start,n),end:it(r.end,n)}:mr(t,r.start,r.end);return{kind:String(r.kind),start:a.start,end:a.end}}).filter(r=>r.start<r.end).sort((r,a)=>r.start-a.start||r.end-a.end)}function it(e,t){const n=Number(e);return Number.isFinite(n)?Math.max(0,Math.min(t,Math.trunc(n))):0}function ot(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function tn(e){const t=e.codePointAt(0);return t<=127?1:t<=2047?2:t<=65535?3:4}const hr=`
.cm-editor .rasa-token-boolean,
.cm-editor .rasa-token-nil,
.rasa-token-boolean,
.rasa-token-nil {
  color: var(--rasa-gold);
}

.cm-editor .rasa-token-character,
.cm-editor .rasa-token-string,
.rasa-token-character,
.rasa-token-string {
  color: var(--rasa-green);
}

.cm-editor .rasa-token-comment,
.rasa-token-comment {
  color: var(--rasa-dim, var(--rasa-muted));
  font-style: italic;
}

.cm-editor .rasa-token-keyword,
.rasa-token-keyword {
  color: var(--rasa-cyan, var(--rasa-blue));
}

.cm-editor .rasa-token-metadata,
.cm-editor .rasa-token-reader-macro,
.rasa-token-metadata,
.rasa-token-reader-macro {
  color: var(--rasa-purple, var(--rasa-violet, var(--rasa-blue)));
}

.cm-editor .rasa-token-number,
.rasa-token-number {
  color: var(--rasa-red);
}

.cm-editor .rasa-token-symbol,
.rasa-token-symbol {
  color: var(--rasa-text);
}

.cm-editor .rasa-token-delimiter,
.rasa-token-delimiter {
  color: var(--rasa-muted);
}
`,Ot=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),nn="rasa.theme",fr=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});fr.dark;function yr(e=document.documentElement){const t=localStorage.getItem(nn),n=t==="light"||t==="dark"?t:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return rn(n,e),n}function rn(e,t=document.documentElement){const n=e==="light"?"light":"dark";return t.dataset.rasaTheme=n,t.setAttribute("data-theme",n),localStorage.setItem(nn,n),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:n}})),n}function gr(e=document.documentElement){return rn(e.dataset.rasaTheme==="light"?"dark":"light",e)}function It(e){return e==="light"?"Dark":"Light"}const v=Object.freeze({classes:Object.freeze({phaseRoute:"rasa-phase-route",phaseNode:"rasa-phase-node",projectionLegend:"rasa-projection-legend",projectionChip:"rasa-projection-chip",projectionEmpty:"rasa-projection-empty",phaseWidgetMap:"rasa-phase-widget-map",phaseWidgetLink:"rasa-phase-widget-link",surfaceSwitcher:"rasa-surface-switcher",surfaceLink:"rasa-surface-link",boundaryRoute:"rasa-boundary-route",boundaryStep:"rasa-boundary-step",visualSlot:"rasa-visual-slot"}),attrs:Object.freeze({phaseId:"data-phase-id",tone:"data-tone",status:"data-status",projectionLayer:"data-layer",boundaryTone:"data-tone",visualSlot:"data-visual-slot",slotStatus:"data-slot-status",slotCount:"data-slot-count",slotMeta:"data-slot-meta"})});function gt(e,t={}){const n=typeof e=="string"?{id:e}:e||{};return{[v.attrs.visualSlot]:n.id||"",[v.attrs.slotStatus]:n.status||t.status||"",[v.attrs.slotCount]:String(n.count??t.count??0),[v.attrs.slotMeta]:n.meta||t.meta||""}}function xr(e=[],t,n={}){return e.find(r=>r.id===t)||{...n,id:t}}function br(e={},{className:t=""}={}){const n=e.id||"",r=!!e.active;return{id:n,label:e.label||n||"phase",meta:e.meta||wr(e),title:e.description||e.label||n,className:[t,v.classes.phaseNode,r?"active":""].filter(Boolean).join(" "),attrs:{[v.attrs.phaseId]:n,[v.attrs.tone]:e.tone||n,[v.attrs.status]:e.status||"unknown","data-phase-node":n,"data-active":String(r)}}}function wr(e={}){const t=[];return e.groups&&t.push(`${e.groups} group${e.groups===1?"":"s"}`),e.diagnostics&&t.push(`${e.diagnostics} signal${e.diagnostics===1?"":"s"}`),t.join(" / ")||e.status||"waiting"}const jr=`
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
`,sn=Object.freeze([A("reader","Read","Primary reader syntax tree","reader","source-tree"),A("expand","Expand","Expanded syntax and macro boundary","expand","source-tree"),A("analyzer","Analyze","Bindings, calls, and analyzer diagnostics","analysis","primary-lowering"),A("ir","IR","Backend-independent executable tree","ir","primary-lowering"),A("facts","Facts","Node-keyed sidecar evidence","facts","sidecar"),A("checks","Checks","Type and boundary checks","checks","sidecar"),A("plan","Plan","Lane decisions and rejected candidates","plan","plan"),A("explain","Explain","Human-oriented compiler projection","explain","projection"),A("eval","Eval","Runtime value observation","eval","runtime"),A("wasm","Wasm","Component runtime product","wasm","runtime")]);Object.freeze(sn.map(e=>e.id));function vr(){return sn.map(e=>({id:e.id,label:e.label,status:"waiting",groups:0,diagnostics:0,tone:e.tone,role:e.role,description:e.description}))}function A(e,t,n,r,a){return Object.freeze({id:e,label:t,description:n,tone:r,role:a})}function Be(e){return e==null?"nil":Ue(e)?`:${e.name}`:De(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(Be).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([t,n])=>`:${t} ${Be(n)}`).join(" ")}}`:String(e)}function lt(e,t=0){if(e==null||typeof e!="object"||Ue(e)||De(e))return Be(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(t+2),o=" ".repeat(t);return`[
${e.map(l=>`${i}${lt(l,t+2)}`).join(`
`)}
${o}]`}const n=Object.entries(e);if(n.length===0)return"{}";const r=" ".repeat(t+2),a=" ".repeat(t);return`{
${n.map(([i,o])=>`${r}:${i} ${lt(o,t+2)}`).join(`
`)}
${a}}`}function an(e,t=""){return Ue(e)||De(e)?e.name:typeof e=="string"?e:e==null?t:String(e)}function Ue(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function De(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function kr(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Ue(e)&&!De(e)?Object.keys(e).length:0}const Sr=Object.freeze({"model-summary":Object.freeze({renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."}),graph:Object.freeze({renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."}),"layers-by-kind":Object.freeze({renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."}),"layer-inspection":Object.freeze({renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."}),"top-layers":Object.freeze({renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."}),"weight-stats":Object.freeze({renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."}),"weight-histogram":Object.freeze({renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."}),"numeric-aggregate":Object.freeze({renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."})});function Rr(e=null){const t=e?.graph;return t?.nodes?.length?t:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((n,r)=>({id:`${e.layerTable[r].id}->${n.id}`,source:e.layerTable[r].id,target:n.id}))}:{nodes:[],edges:[]}}function Ve(e=null){return typeof e?.view?.name=="string"?e.view.name:an(e?.view,"")}function xt(e=null,t=""){const n=Ve(e);return n?`:${n}`:t}function _e(e=null){return Ve(e).replaceAll("-"," ")||"waiting for Rasa"}function on(e=null){const t=Ve(e);return Sr[t]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function qe(e=null){return Array.isArray(e?.["host-requests"])?e["host-requests"]:[]}function Nr(e=null){return qe(e)[0]||null}function bt(e=null){const t=qe(e);return t.length?t[t.length-1]:null}function le(e=null){const t=Array.isArray(e?.traces)?e.traces:[],n=qe(e);return{scope:an(e?.scope,"waiting"),traces:t.length,requests:n.length,empty:t.length===0&&n.length===0}}function P(e=null){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function be(e=null){const t=e?.identity||e?.admission?.identity;return!t?.package||!t?.export?null:`${t.package}/${t.export}`}function we(e=null){return e?.source?.symbol?.name||null}function Er({value:e=null,graph:t={},traceSection:n=null,providerTrace:r=null,runtimeState:a={},selectedModel:i={},activeModel:o=null,catalogCount:l=0,preparedModelCount:d=0,running:u=!1,fixture:p=!1}={}){const h=le(n),m=Array.isArray(t.nodes)?t.nodes.length:0,g=Array.isArray(t.edges)?t.edges.length:0,R=on(e),q=bt(n),B=o?.title||o?.id||"none yet",de=i?.title||i?.id||"selected model",je=be(q)||P(r)||"not admitted yet",H=xt(e,"none yet"),I=a.available!==!1,T=h.requests?`${de} is explored through admitted browser capabilities.`:`${de} is selected for browser capability exploration.`;return{headline:{eyebrow:"Rasa boundary theater",title:e?`Rasa returned ${H}`:u?"Rasa is crossing the browser boundary":p?"Trace fixture replay":"Run a Rasa form to cross into the browser host",subtitle:`${T} TensorFlow.js owns model objects; Rasa owns the session, forms, host requests, and returned values.`,tone:e?"ok":I?"waiting":"pending"},runtime:{label:I?"component session ready":"component session pending",detail:a.message||(I?"forms can evaluate in this browser session":"execution is unavailable in this page state"),tone:I?"ok":"pending"},metrics:[{id:"model",label:"Model handle",value:B,detail:o?.handle||"run a load form to allocate a browser handle",tone:o?"ok":"waiting"},{id:"request",label:"Admitted host calls",value:h.requests,detail:je,tone:h.requests?"ok":"waiting"},{id:"value",label:"Returned view",value:H,detail:R.renderer,tone:e?"ok":"waiting"},{id:"graph",label:"Projected graph",value:m,detail:m?`${m} layer record${m===1?"":"s"}, ${g} edge${g===1?"":"s"}`:`${d}/${l} model assets cached`,tone:m?"ok":"waiting"}],path:[{label:"Rasa form",value:we(q)||"editor input"},{label:"Canonical identity",value:je},{label:"Browser provider",value:r?.status||"waiting"},{label:"Rasa value",value:H}]}}function Tr({traceSection:e=null,providerTrace:t=null,runMetrics:n=null,bootMetrics:r=null}={}){const a=bt(e);return[{label:"Host request",value:we(a)||"waiting"},{label:"Canonical identity",value:be(a)||P(t)||"waiting"},{label:"Status",value:t?.status||n?.status||"waiting"},{label:"Time",value:n?.totalMs!==void 0?dt(n.totalMs):r?dt(r.totalMs):"pending"}]}function Mr({value:e=null,trace:t=null,traceSection:n=null}={}){const r=on(e),a=le(n);return{...r,rows:[{label:"Rasa view",value:xt(e,"none yet")},{label:"Capability",value:P(t)||"waiting"},{label:"Core traces",value:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`},{label:"Status",value:t?.status||"waiting"}]}}function $r({traceSection:e=null,providerTrace:t=null,fixture:n=!1}={}){const r=le(e),a=qe(e),i=Nr(e);return{label:"Rasa boundary",title:r.empty?"Waiting for admitted host evidence":n?"Visual fixture replay":`Live Wasm ${r.scope} evidence`,note:n?"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence.":"",traceCountLabel:`${r.traces} traces`,steps:[{title:"Rasa form",value:we(i)||"source expression"},{title:"Canonical identity",value:be(i)||P(t)||"package/export"},{title:"Browser provider",value:t?.status?t.status:"waiting"}],requests:a.map(Ar),emptyMessage:"Run a host-capability form to see Rasa admission evidence."}}function Ar(e={}){return{id:e["call-id"]??"?",title:be(e)||"unknown request",rows:[{label:"source",value:we(e)||"n/a"},{label:"capability",value:Lt(e.identity?.capability)},{label:"effects",value:(e.admission?.effects||[]).map(Lt).join(" ")||"none"}]}}function Cr(e=null){return{title:P(e)||"waiting",rows:[{label:"status",value:e?.status||"waiting"},{label:"args",value:e?.argsCount??"n/a"},{label:"view",value:e?.view?`:${e.view}`:"n/a"}],requestText:e?.requestText||"no provider request yet",responseText:e?.responseText||"no provider response yet"}}function Or({selectedModelId:e="",models:t=[],commands:n=[],prepared:r=!1,preparing:a=!1}={}){return{selectedModelId:e,assetState:{className:r?"asset-state ready":a?"asset-state loading":"asset-state",label:r?"assets cached":a?"fetching assets":"assets load on run"},models:t.map((i={})=>({id:String(i.id||""),title:i.title||i.id||"model"})),commands:n.map((i={})=>({label:i.label||"Rasa form",source:i.source||"",preview:Lr(i.source),insertTitle:`Insert ${i.label||"Rasa form"} at the cursor`,appendTitle:`Append ${i.label||"Rasa form"} below the current editor text`}))}}function Ir(e=[]){const t=e.map((n={},r)=>({index:r,id:n.id||`entry-${r}`,kind:n.kind||"run",source:n.source||"",resultPreview:n.result?Pr(n.result):"",canOpenResult:!!n.result,meta:[n.capability||"session",n.view||"",n.status||"",n.durationMs!==void 0?dt(n.durationMs):""].filter(Boolean)}));return{empty:t.length===0,entries:t,emptyEntry:{source:";; loading Rasa session",resultPreview:"=> waiting for browser Wasm engine"}}}function Lr(e){const t=String(e||"").split(`
`).filter(Boolean);return t.length>1?`${t[0]} ...`:t[0]||"Rasa form"}function Pr(e){const t=String(e||""),n=t.split(`
`).map(a=>a.trimEnd()).filter(Boolean);return(n.length<=2?t:`${n.slice(0,2).join(`
`)}
...`).split(`
`).map(a=>Br(a,180)).join(`
`)}function dt(e){const t=Number(e||0);return t<10?`${t.toFixed(1)} ms`:`${Math.round(t)} ms`}function Lt(e){return typeof e?.name=="string"?e.name:typeof e=="string"?e:e==null?"":String(e)}function Br(e,t){const n=String(e||"");return n.length<=t?n:`${n.slice(0,Math.max(0,t-1)).trimEnd()}…`}const _r=Object.freeze([C("source-editor","Source editor","CodeMirror","Rasa forms and source spans",10),C("phase-route","Compiler route","PhaseRoute","Reader through runtime phase status",20),C("phase-widget-map","Phase widget map","PhaseWidgetMap","Phase artifacts mapped to visual widgets",30),C("projection-legend","Projection legend","ProjectionLegend","Grouped phase-neutral projection layers",40),C("boundary-route","Host boundary","BoundaryRoute","Admitted capability request and returned value",50),C("graph-stage","Graph stage","Stage","Model projection frame and run context",60),C("graph-canvas","Graph canvas","ReactFlow","Structured graph records returned by Rasa",70),C("value-inspector","Value inspector","DataView","Foldable Rasa data and returned values",80),C("transcript","Session transcript","Transcript","Append-only session input and returned data",90),C("diagnostics","Diagnostics","DiagnosticCards","Structured blockers and conservative evidence",100)]),zr=Object.freeze([Ce("inspect","Inspect","Compiler evidence workbench","../browser-inspection/","Source spans, phases, facts, diagnostics, plans, and runtime evidence stay connected.","inspection artifact","source-editor",["reader","analyzer","facts","checks","plan","eval"],"blue"),Ce("model","Model","Host boundary model explorer","../model-architecture-explorer/","Rasa forms cross admitted browser capabilities into TensorFlow.js handles and returned data.","session + provider trace","boundary-route",["reader","analyzer","plan","eval","wasm"],"green"),Ce("conformance","Conformance","Portable Clojure proof map","../conformance-report/","Precomputed compatibility pressure links functions, rows, outcomes, and deferred scope.","report artifact","value-inspector",["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"],"gold"),Ce("roadmap","Roadmap","Release direction","../roadmap/","Preview surfaces point toward the compiler, runtime, tooling, and product stories still in motion.","release plan","projection-legend",["plan"],"neutral")]);function Fr(e=""){return zr.map(t=>({...t,active:t.id===e,href:t.id===e?"./":t.href}))}function ln({phases:e=[],activePhaseIds:t=[],metaById:n={},statusById:r={}}={}){const a=new Set(t),i=new Map(e.map(o=>[o.id,o]));return vr().map(o=>{const l=i.get(o.id)||{},d=l.status||r[o.id]||o.status;return{...o,...l,status:d,active:!!(l.active||a.has(o.id)),meta:l.meta||n[o.id]||Wr(d,l)}})}function Ur(e={}){return _r.map(t=>{const n=e[t.id]||{},r=Number(n.count||0),a=!!(n.present||r>0);return{...t,present:a,status:n.status||(a?"ready":"waiting"),count:r,meta:n.meta||""}})}function Dr({fixture:e=!1,providerTrace:t=null,runMetrics:n=null,traceSection:r=null,summary:a={}}={}){const i=a.empty===void 0&&r?le(r):a,o=i.empty===!1||Number(i.traces||0)>0||Number(i.requests||0)>0,l=!!t?.status,d=!!(n?.view||n?.status==="ok"||e),u=o||d?dn:["wasm"];return ln({activePhaseIds:u,metaById:{reader:d||o?"source":"ready",expand:d||o?"source":"ready",analyzer:d||o?"artifact":"ready",ir:d||o?"artifact":"ready",facts:d||o?"artifact":"ready",checks:d||o?"artifact":"ready",plan:o?`${i.requests||0} host`:"admission",explain:e?"fixture":o?"trace":"view",eval:d?n?.view?`:${n.view}`:"value":"session",wasm:l?"component":"loaded"},statusById:Hr(u,"ok")})}function Vr({fixture:e=!1,providerTrace:t=null,runMetrics:n=null,traceSection:r=null,summary:a={},sourceTitle:i="",identityTitle:o="",capabilityTitle:l=""}={}){const d=a.empty===void 0&&r?le(r):a,u=bt(r),p=i||we(u)||"",h=o||be(u)||"",m=l||P(t)||"";return[{label:e?"Replay form":"Rasa source",title:p||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:h||m||"waiting",detail:`${Number(d.requests||0)} admitted request(s)`,tone:"admit"},{label:"Browser host",title:t?.packageName||"browser provider",detail:t?.status||"waiting",tone:"host"},{label:"Return",title:n?.view?`:${n.view}`:"Rasa value",detail:n?.totalMs!==void 0?`${Kr(n.totalMs)}`:"structured data",tone:"return"}]}function qr({graph:e={},value:t=null,summary:n={},transcript:r=[],runMetrics:a=null,runtimeState:i={}}={}){const o=Array.isArray(e.nodes)?e.nodes.length:0,l=Array.isArray(r)?r.length:0,d=Number(n.requests||0),u=!!t,p=xt(t),h=i.available!==!1;return{slots:Ur({"source-editor":{present:!0,status:h?"ready":"pending",meta:h?"session input":"adapter pending"},"phase-route":{present:!0,count:dn.length,meta:h?"runtime path":"pending runtime"},"boundary-route":{present:!0,status:d?"ready":h?"waiting":"pending",count:d,meta:d?`${d} host request${d===1?"":"s"}`:""},"graph-stage":{present:!0,status:u?"ready":h?"waiting":"pending",count:o,meta:u?o?"projected value":"empty projection":"waiting"},"graph-canvas":{present:!0,status:o?"ready":u?"empty":"waiting",count:o,meta:o?`${o} layer${o===1?"":"s"}`:""},"value-inspector":{present:u,status:a?.status||(u?"ready":"waiting"),meta:p},transcript:{present:!0,count:l,meta:l?`${l} entr${l===1?"y":"ies"}`:"waiting"}})}}const dn=Object.freeze(["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"]);function Hr(e,t){return Object.fromEntries(e.map(n=>[n,t]))}function Wr(e,t={}){return t.groups?`${t.groups} group${t.groups===1?"":"s"}`:t.diagnostics?`${t.diagnostics} diagnostic${t.diagnostics===1?"":"s"}`:e||"waiting"}function C(e,t,n,r,a){return Object.freeze({id:e,label:t,component:n,description:r,priority:a})}function Ce(e,t,n,r,a,i,o,l,d){return Object.freeze({id:e,artifact:i,description:a,href:r,label:t,phaseIds:Object.freeze([...l]),slotId:o,title:n,tone:d})}function Kr(e){const t=Number(e||0);return t<10?`${t.toFixed(1)} ms`:`${Math.round(t)} ms`}function Oe({as:e="section",slotId:t="",slots:n=[],state:r={},className:a="",children:i,...o}){const l=xr(n,t,r);return s.jsx(e,{...o,...gt(l,r),className:`${v.classes.visualSlot} ${a}`.trim(),children:i})}function Gr({phases:e=[],activePhaseIds:t=[],metaById:n={},statusById:r={},className:a="",ariaLabel:i="Rasa phase route"}){const o=ln({phases:e,activePhaseIds:t,metaById:n,statusById:r}),l=v.classes;return s.jsx("div",{className:`${l.phaseRoute} ${l.visualSlot} ${a}`.trim(),"aria-label":i,...gt({id:"phase-route",status:"ready",count:o.filter(d=>d.active).length}),children:o.map(d=>{const u=br(d);return c.createElement("span",{className:u.className,...u.attrs,key:u.id,title:u.title},s.jsx("strong",{children:u.label}),s.jsx("em",{children:u.meta}))})})}function Jr({activeId:e="",className:t="",compact:n=!1,items:r=null,showArtifact:a=!0,ariaLabel:i="Rasa demo surfaces"}){const o=r||Fr(e),l=v.classes;return s.jsx("nav",{className:`${l.surfaceSwitcher} ${t}`.trim(),"data-compact":String(!!n),"aria-label":i,children:o.map(d=>s.jsxs("a",{className:l.surfaceLink,href:d.href,"aria-current":d.active?"page":void 0,title:d.title,children:[s.jsx("strong",{children:d.label}),a?s.jsx("small",{children:d.artifact}):null]},d.id||d.label))})}function Yr({steps:e=[],className:t="",ariaLabel:n="Rasa boundary route"}){const r=v.classes,a=v.attrs;return s.jsx("div",{className:`${r.boundaryRoute} ${r.visualSlot} ${t}`.trim(),"aria-label":n,...gt({id:"boundary-route",status:e.length?"ready":"waiting",count:e.length}),children:e.map(i=>c.createElement("article",{className:r.boundaryStep,[a.boundaryTone]:i.tone||"",key:i.label},s.jsx("span",{children:i.label}),s.jsx("strong",{children:i.title}),s.jsx("em",{children:i.detail})))})}const X=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function se(e){return X.find(t=>t.id===e)||X[0]}const ze="tiny-cnn",Ie=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Xr=`(def m (model/load-model :${ze}))
(model/summary m)`;function Zr(e=ze){const t=se(e);return[{label:"Load + summary",source:`(def m (model/load-model :${t.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${t.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${t.defaultLayerIndex} size`,source:`(layer/tensor-size m ${t.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${t.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${t.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${t.defaultLayer}" {:bins 32})`}]}class Qr{constructor(t){this.prefix=t,this.nextId=1,this.resources=new Map}insert(t,n){const r=`${this.prefix}/${t}/${this.nextId++}`;return this.resources.set(r,{kind:t,value:n}),r}get(t,n=null){const r=this.resources.get(t);if(!r)throw new Error(`unknown resource handle ${t}`);if(n&&r.kind!==n)throw new Error(`resource ${t} has kind ${r.kind}, expected ${n}`);return r.value}}class es extends Error{constructor(t,n,r={}){super(n),this.name="BrowserCapabilityError",this.kind=t,this.data=r}}class ts{constructor(){this.handlers=new Map}register(t,n,r){return this.handlers.set(ct(t,n),r),this}invoke(t,n,r){const a=ct(t,n),i=this.handlers.get(a);if(!i)throw new es("adapter-missing",`browser capability adapter is missing for ${a}`,{packageName:t,exportName:n});return i(r)}entries(){return[...this.handlers.keys()]}}function ct(e,t){return`${e}/${t}`}function wt(e){return new ss(e).parse()}function V(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):He(e)?`:${e.name}`:jt(e)?e.name:cn(e)?`(${e.items.map(V).join(" ")})`:Array.isArray(e)?`[${e.map(V).join(" ")}]`:`{${Object.entries(e).map(([t,n])=>`:${t} ${V(n)}`).join(" ")}}`}function xe(e,t=0){if(e==null||typeof e!="object"||He(e)||jt(e))return V(e);const n=" ".repeat(t+2),r=" ".repeat(t);if(cn(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${n}${xe(i,t+2)}`).join(`
`)}
${r})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${n}${xe(i,t+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${n}:${i} ${xe(o,t+2)}`).join(`
`)}
${r}}`}function ns(e){return{type:"keyword",name:e}}function rs(e){return{type:"symbol",name:e}}function He(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function jt(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function cn(e){return!!(e&&typeof e=="object"&&e.type==="list")}class ss{constructor(t){this.text=t,this.index=0}parse(){const t=this.form();return this.ws(),t}form(){this.ws();const t=this.peek();return t==="{"?this.map():t==="["?this.vector():t==="("?this.list():t==='"'?this.string():this.atom()}map(){this.expect("{");const t={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,t;const n=this.form(),r=this.form();t[as(n)]=r}}vector(){this.expect("[");const t=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,t;t.push(this.form())}}list(){this.expect("(");const t=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:t};t.push(this.form())}}string(){this.expect('"');let t="";for(;this.index<this.text.length;){const n=this.text[this.index++];if(n==='"')return t;if(n==="\\"){const r=this.text[this.index++];t+=r==="n"?`
`:r}else t+=n}throw new Error("unterminated string")}atom(){const t=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const n=this.text.slice(t,this.index);if(!n)throw new Error(`expected form at byte ${this.index}`);return n==="nil"?null:n==="true"?!0:n==="false"?!1:/^-?\d+(\.\d+)?$/.test(n)?Number(n):n.startsWith(":")?ns(n.slice(1)):rs(n)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(t){if(this.ws(),this.text[this.index]!==t)throw new Error(`expected ${t} at byte ${this.index}`);this.index++}}function as(e){return He(e)||jt(e)?e.name:String(e)}const et=Object.freeze(Object.fromEntries(X.map(e=>[e.id,`./models/${e.id}/model.json`])));class tt extends Error{constructor(t){super(`model :${t} assets are not prepared`),this.modelId=t}}class is{constructor(){this.resources=new Qr("browser"),this.registry=os(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(t){const n=wt(t);this.lastTrace={requestText:t,request:n,responseText:"",packageName:n.package?.name||"unknown",exportName:n.export?.name||"unknown"};const r=this.route(n),a=V(r);return this.lastTrace.responseText=a,a}route(t){try{const n=t.package?.name,r=t.export?.name,a=t.args||[],i=this.invoke(n,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:n,exportName:r,capability:ct(n,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:b("ok"),value:i}}catch(n){const r=n instanceof tt?{status:b("failed"),kind:b("asset-not-prepared"),model:b(n.modelId),recoverable:!0,message:n.message}:{status:b("failed"),kind:b("provider-error"),message:n.message};return n instanceof tt&&(this.pendingAssetModel=n.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:n.message},r}}invoke(t,n,r){return this.registry.invoke(t,n,r)}loadNamedModel(t){if(!et[t])throw new Error(`unknown model :${t}`);if(!this.catalog.has(t))throw new tt(t);if(!this.modelIds.has(t)){const n=this.resources.insert("model",this.catalog.get(t));this.modelIds.set(t,n)}return this.modelIds.get(t)}async prepareModel(t){return this.loadModelNow(t)}isPrepared(t){return this.catalog.has(t)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(t){if(!et[t])throw new Error(`unknown model :${t}`);if(this.catalog.has(t))return this.catalog.get(t);const n=await zn(et[t]);return this.catalog.set(t,n),n}model(t){return this.resources.get(t,"model")}loadedModels(){return[...this.modelIds.entries()].map(([t,n])=>{const r=this.summary(n);return{id:t,handle:n,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(t){const n=this.model(t),r=n.layers.map(ne);return{view:b("model-summary"),model:n.name,handle:t,layers:r.length,parameters:ae(r.map(a=>a.params)),trainableParameters:ae(r.map(a=>a.trainableParams)),bytes:ae(r.map(a=>a.bytes)),inputs:ie(n.inputs?.[0]?.shape),outputs:ie(n.outputs?.[0]?.shape),graph:Pt(n),layerTable:r}}graph(t){return{view:b("graph"),graph:Pt(this.model(t))}}layerCount(t){const n=this.model(t);return{view:b("numeric-aggregate"),label:"layer count",value:n.layers.length,unit:b("layers"),model:n.name,handle:t}}layersByKind(t,n){const r=this.model(t).layers.map(ne).filter(a=>a.kind===n);return{view:b("layers-by-kind"),kind:b(n),count:r.length,layers:r}}topLayers(t,n){const r=Number(n.limit||5),i=ut(n.by||b("params"))==="bytes"?"bytes":"params",o=this.model(t).layers.map(ne).sort((l,d)=>d[i]-l[i]).slice(0,r);return{view:b("top-layers"),by:b(i),layers:o}}inspectLayer(t,n){const r=this.layerByName(t,n);return{view:b("layer-inspection"),layer:ne(r),config:cs(r.getConfig()),weights:r.weights.map(un)}}layerTensorSize(t,n){const{layer:r,index:a}=this.layerByRef(t,n),i=ne(r,a);return{view:b("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:b("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(t,n){const r=this.layerByName(t,n);return{view:b("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>ls(r.weights[i],a))}}weightHistogram(t,n,r){const a=this.layerByName(t,n),i=Number(r.bins||24),o=a.getWeights().map((l,d)=>({name:a.weights[d]?.originalName||`weight_${d}`,bins:ds(Array.from(l.dataSync()),i)}));return{view:b("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(t,n){const r=this.model(t).layers.find(a=>a.name===n);if(!r)throw new Error(`unknown layer ${n}`);return r}layerByRef(t,n){const r=this.model(t);if(typeof n=="number"){const o=Math.trunc(n)-1,l=r.layers[o];if(!l)throw new Error(`unknown layer index ${n}`);return{layer:l,index:o}}const a=String(n),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function os(e){return new ts().register("demo.tfjs/model","load-model",([t])=>e.loadNamedModel(ut(t))).register("demo.tfjs/model","summary",([t])=>e.summary(t)).register("demo.tfjs/model","layer-count",([t])=>e.layerCount(t)).register("demo.tfjs/model","graph",([t])=>e.graph(t)).register("demo.tfjs/layers","by-kind",([t,n])=>e.layersByKind(t,ut(n))).register("demo.tfjs/layers","top",([t,n={}])=>e.topLayers(t,n)).register("demo.tfjs/layer","inspect",([t,n])=>e.inspectLayer(t,n)).register("demo.tfjs/layer","tensor-size",([t,n])=>e.layerTensorSize(t,n)).register("demo.tfjs/weights","stats",([t,n])=>e.weightStats(t,n)).register("demo.tfjs/weights","histogram",([t,n,r={}])=>e.weightHistogram(t,n,r))}function ne(e,t=null){const n=e.weights.map(un);return{id:e.name,index:t??us(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:ie(e.inputShape),output:ie(e.outputShape),params:ae(n.map(r=>r.params)),trainableParams:ae(n.filter(r=>r.trainable).map(r=>r.params)),bytes:ae(n.map(r=>r.bytes))}}function Pt(e){const t=e.layers.map((n,r)=>({...ne(n,r),index:r}));return{nodes:t,edges:t.slice(1).map((n,r)=>({id:`${t[r].id}->${n.id}`,source:t[r].id,target:n.id}))}}function un(e){const t=e.shape.reduce((n,r)=>n*r,1);return{name:e.originalName,shape:ie(e.shape),params:t,bytes:t*4,trainable:!!e.trainable}}function ls(e,t){const n=Array.from(t.dataSync()),r=n.length,a=Math.min(...n),i=Math.max(...n),o=n.reduce((u,p)=>u+p,0)/r,l=n.reduce((u,p)=>u+(p-o)**2,0)/r,d=n.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:ie(t.shape),params:r,min:Y(a),max:Y(i),mean:Y(o),stddev:Y(Math.sqrt(l)),sparsity:Y(d/r)}}function ds(e,t){const n=Math.min(...e),r=Math.max(...e),a=r===n?1:(r-n)/t,i=Array.from({length:t},(o,l)=>({start:Y(n+l*a),end:Y(n+(l+1)*a),count:0}));for(const o of e){const l=Math.min(t-1,Math.max(0,Math.floor((o-n)/a)));i[l].count+=1}return i}function cs(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(n=>e[n]!==void 0).map(n=>[n,e[n]]))}function ut(e){return He(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function b(e){return{type:"keyword",name:e}}function ie(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(Bt).join(" x "):e.map(Bt).join(" x "):"?"}function Bt(e){return e==null?"*":String(e)}function ae(e){return e.reduce((t,n)=>t+n,0)}function Y(e){return String(Math.round(e*1e5)/1e5)}function us(e){return Number(e._index??0)}const mn=`{:packages
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
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function nt(e){if(!e||!e.includes(":traces"))return null;try{return wt(e).traces||null}catch{return null}}function ms(e){const t=[];return mt(e,[],t),t}function ps(e){return lt(e)}function Fe(e){return e==null?null:Array.isArray(e)?e.map(Fe):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([t,n])=>[`:${t}`,Fe(n)])):e}function mt(e,t,n){const r=n.length,a={id:r,path:t,label:fs(t),kind:hs(e),value:kr(e)?null:Be(e),children:[]};return n.push(a),Array.isArray(e)?e.forEach((i,o)=>{const l=mt(i,[...t,o],n);a.children.push(l)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const l=mt(o,[...t,i],n);a.children.push(l)}),r}function hs(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function fs(e){return e.length?e.map(t=>typeof t=="number"?`[${t}]`:`:${t}`).join(" "):"root"}const w=e=>({type:"keyword",name:e}),pt=e=>({type:"symbol",name:e});function _t(e){const t=gs(e),n=xs(e),r=bs(e);return{source:ys(e),value:t,providerTrace:n,traceSection:r,runtimeReport:`{:status :ok :traces ${ht(r)}}`,loadedModel:{id:e.id,handle:t.handle,name:t.model,layers:t.layers,parameters:t.parameters,trainableParameters:t.trainableParameters,bytes:t.bytes,inputs:t.inputs,outputs:t.outputs}}}function ys(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function gs(e){const t=pn(e),n=t.reduce((a,i)=>a+i.params,0),r=t.reduce((a,i)=>a+i.bytes,0);return{view:w("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:t.length,parameters:n,trainableParameters:n,bytes:r,inputs:ws(e),outputs:js(e),graph:{nodes:t,edges:t.slice(1).map((a,i)=>vs(t[i].id,a.id))},layerTable:t}}function xs(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${pn(e).length}}}`}}function bs(e){return{"rasa/phase":w("traces"),scope:w("admitted-host-calls"),traces:[{id:0,subject:{kind:w("source")},events:[te(0,"source-form",{symbol:pt("model/load-model"),span:{start:7,end:23}}),te(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:w("demo.tfjs/model/load-model")}),te(2,"admission",{"call-id":0,effects:[w("model/read")],signature:{args:[w("id")],returns:w("string")}})]},{id:1,subject:{kind:w("source")},events:[te(0,"source-form",{symbol:pt("model/summary"),span:{start:31,end:44}}),te(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:w("demo.tfjs/model/summary")}),te(2,"admission",{"call-id":1,effects:[w("model/read")],signature:{args:[w("model")],returns:w("map")}})]}],"host-requests":[zt(0,"demo.tfjs/model","load-model","model/load-model",e.id),zt(1,"demo.tfjs/model","summary","model/summary")]}}function pn(e){switch(e.id){case"tiny-mlp":return[j("feature_input","input","* x 16",0,0),j("hidden_dense","dense","* x 32",544,2176),j("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[j("signal_input","input","* x 32",0,0),j("encoder_dense","dense","* x 12",396,1584),j("bottleneck","dense","* x 4",52,208),j("decoder_dense","dense","* x 12",60,240),j("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[j("token_input","input","* x 8",0,0),j("token_embedding","embedding","* x 8 x 16",1600,6400),j("pool_tokens","global-average-pooling1d","* x 16",0,0),j("projection_dense","dense","* x 8",136,544)];default:return[j("input_image","input","* x 28 x 28 x 1",0,0),j("stem_conv","conv2d","* x 26 x 26 x 8",80,320),j("flatten","flatten","* x 5408",0,0),j("classifier_dense","dense","* x 10",5306,21224)]}}function ws(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function js(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function j(e,t,n,r,a){return{id:e,index:0,name:e,kind:t,activation:"linear",input:"?",output:n,params:r,trainableParams:r,bytes:a}}function vs(e,t){return{id:`${e}->${t}`,source:e,target:t}}function te(e,t,n){return{id:e,kind:w(t),subject:null,"source-id":"browser://repl",span:n.span||null,data:n,diagnostics:[],annotations:[],evidence:[]}}function zt(e,t,n,r,a=null){return{"rasa/phase":w("host-request"),scope:w("admitted-host-call"),"call-id":e,identity:{package:t,export:n,capability:w(`${t}/${n}`)},source:{symbol:pt(r),model:a?w(a):null},admission:{"call-id":e,identity:{package:t,export:n,capability:w(`${t}/${n}`)},effects:[w("model/read")]},"trace-id":e}}function ht(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(ht).join(" ")}]`:`{${Object.entries(e).filter(([,t])=>t!==null).map(([t,n])=>`:${t} ${ht(n)}`).join(" ")}}`}const ks=`import "@tensorflow/tfjs-backend-cpu";
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
`,Ss="./ras.wasm",hn=Object.freeze({phases:"all",traces:!0}),fn=e=>e<2;function Rs(){const e=Ns()==="trace",t=c.useRef(null),n=c.useRef(null),r=c.useRef(0),a=c.useRef(null),i=c.useRef(!1),[o,l]=c.useState(ze),[d,u]=c.useState(()=>yr()),[p,h]=c.useState(()=>e?_t(se(ze)).source:Xr),[m,g]=c.useState("loading"),[R,q]=c.useState(!1),[B,de]=c.useState(0),[je,H]=c.useState(null),[I,T]=c.useState(null),[ve,ce]=c.useState(""),[ue,me]=c.useState(null),[W,pe]=c.useState(null),[We,ke]=c.useState([]),[Ke,Z]=c.useState([]),[jn,Se]=c.useState(null),[vn,Ge]=c.useState({}),[K,Re]=c.useState(null),[Ne,Je]=c.useState(null),[Ee,St]=c.useState(null),[kn,Sn]=c.useState("boundary"),[Ye,he]=c.useState([]),x=c.useMemo(()=>e?_t(se(o)):null,[e,o]),fe=m==="component adapter pending";c.useEffect(()=>{const f=y=>u(y.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",f),()=>window.removeEventListener("rasa-theme-change",f)},[]),c.useEffect(()=>{let f=!0;async function y(){try{if(e&&x){if(!f)return;const Xe=await Ft().catch(()=>({}));if(!f)return;ce(x.runtimeReport),me(x.providerTrace),pe(x.traceSection),ke([x.loadedModel]),Z([x.loadedModel.id]),Ge(Xe),Re(x.value),Je(x.loadedModel.handle),St(null),H({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),T({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),he([{id:"setup",kind:"setup",source:Ie,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:x.source,result:rt(x.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:x.value}]),g("ready");return}const _=O(),N=new is,E=O(),k=await Ft(),Q=S(E),z=O(),M=await yt.load(Es(),{host:N}),G=S(z);if(M.available===!1){if(!f)return;n.current=M,Ge(k),ce(""),me(null),pe(null),ke([]),Z([]),Re(null),Je(null),H({manifestMs:Q,engineMs:G,setupMs:0,totalMs:S(_)}),T({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),he([{id:"setup",kind:"setup",source:Ie,result:ft,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),g("component adapter pending");return}const J=M.createSession(),Me=O();await M.loadPackageAsync(J,mn);const ee=await M.evaluateReplSessionAsync(J,Ie,hn);aa(ee,"model setup");const $e=S(Me);if(!f)return;t.current=N,n.current=M,r.current=J,ce(ee),me(N.lastTrace),pe(nt(ee)),ke(N.loadedModels()),Z(N.preparedModelIds()),Ge(k),H({manifestMs:Q,engineMs:G,setupMs:$e,totalMs:S(_)}),he([{id:"setup",kind:"setup",source:Ie,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),g("ready")}catch(_){f&&g(`failed: ${_.message}`)}}return y(),()=>{f=!1,n.current&&r.current&&n.current.freeSession(r.current)}},[e,x]);const Rn=c.useCallback(async()=>{if(e&&x){const $=a.current?.state.doc.toString()||p,ye=B+1;de(ye),Re(x.value),me(x.providerTrace),pe(x.traceSection),ce(x.runtimeReport),T({run:ye,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),he(F=>[...F,{id:`run-${F.length}`,kind:"run",source:$,result:rt(x.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:x.value}]);return}if(fe||n.current?.available===!1){T($=>({...$||{},status:"pending",view:"component-adapter-pending"}));return}if(!n.current||!r.current||!t.current||i.current)return;i.current=!0,q(!0),Se(null);const f=a.current?.state.doc.toString()||p,y=t.current,_=O();let N=ve,E=null,k=null,Q=null,z=null,M=0,G=0,J=0,Me=!1;T({status:"running",assetState:"checking",totalMs:0});try{if(!y.isPrepared(o)){z=o,Se(o),T({status:"running",assetState:"fetching",assetModel:z,totalMs:S(_)});const F=O();await y.prepareModel(o),M=S(F),Z(y.preparedModelIds())}const $=O();N=await Ut(n.current,r.current,y,f),Q=nt(N),G=S($);const ye=oa(y);if(ye){const F=ye;z=F,Se(F),T({status:"running",assetState:"fetching",assetModel:z,firstEvalMs:G,totalMs:S(_)});const $n=O();await y.prepareModel(F),M=S($n),Z(y.preparedModelIds()),y.pendingAssetModel=null;const An=O();N=await Ut(n.current,r.current,y,f),Q=nt(N),J=S(An)}else J=G;E=y.lastValue,k=y.lastTrace}catch($){Me=!0,E=ia("asset-load-error",$.message),k={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,q(!1)}const ee=S(_),$e=B+1,Xe={run:$e,status:k?.status||"ok",capability:P(k),view:k?.view||_e(E),assetState:Me?"failed":z?"fetched":"cached",assetModel:z,assetLoadMs:M,firstEvalMs:G,finalEvalMs:J,totalMs:ee,cacheCount:y.preparedModelIds().length};ce(N),Re(E),me(k),pe(Q),ke(y.loadedModels()),Z(y.preparedModelIds()),Se(null),T(Xe),E?.handle&&Je(E.handle),de($e),he($=>[...$,{id:`run-${$.length}`,kind:"run",source:f,result:rt(E),capability:P(k),view:k?.view||_e(E),status:k?.status||"ok",durationMs:ee,value:E}])},[e,x,B,fe,ve,o,p,W]),L=c.useMemo(()=>Rr(K),[K]),Nn=c.useMemo(()=>Ne?We.find(f=>f.handle===Ne):null,[Ne,We]),En=c.useMemo(()=>L.nodes.map(f=>f.id).join("|")||"empty-graph",[L.nodes]),Tn=c.useMemo(()=>L.nodes.map((f,y)=>({id:f.id,position:{x:y*220,y:y%2===0?0:28},data:{label:s.jsxs("div",{className:"node-label",children:[s.jsx("strong",{children:f.name}),s.jsx("span",{children:f.kind}),s.jsxs("em",{children:[f.params," params"]})]}),layer:f},type:"default",className:Ee===f.id?"selected-node":""})),[L.nodes,Ee]),Mn=c.useMemo(()=>L.edges.map(f=>({...f,animated:!0})),[L.edges]),Te=c.useMemo(()=>qr({graph:L,value:K,summary:le(W),transcript:Ye,runMetrics:I,runtimeState:{available:!fe}}),[L,K,W,Ye,I,fe,m]);return s.jsxs("main",{className:"app-shell",children:[s.jsx("style",{children:`${jr}
${hr}`}),s.jsxs("header",{className:"hero",children:[s.jsxs("div",{className:"brand-lockup",children:[s.jsx("img",{src:Ot.logo,alt:"Rasa"}),s.jsxs("div",{children:[s.jsx("span",{children:"Rasa Model Explorer"}),s.jsx("h1",{children:"Model architecture explorer"}),s.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),s.jsx(Jr,{activeId:"model",className:"surface-switcher"}),s.jsxs("div",{className:"hero-status",children:[s.jsx("img",{src:Ot.mark,alt:"","aria-hidden":"true"}),s.jsx("span",{className:m==="ready"?"ok":"warn",children:m}),s.jsx("span",{children:"tfjs assets on first run"}),s.jsx("span",{children:"static bundle"}),s.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>u(gr()),"aria-label":`Switch to ${It(d).toLowerCase()} theme`,children:It(d)})]})]}),s.jsxs("section",{className:"boundary-theater",children:[s.jsx(Ms,{fixture:e,providerTrace:ue,traceSection:W,runMetrics:I}),s.jsxs("aside",{className:"theater-left",children:[s.jsxs("div",{className:"studio-head",children:[s.jsx("span",{className:"label",children:"Model & extension"}),s.jsx("strong",{children:"What Rasa is allowed to touch"})]}),s.jsx(_s,{models:We,activeHandle:Ne,preparedModelIds:Ke}),s.jsx(qs,{modelManifest:vn[o],modelId:o,compact:!0})]}),s.jsxs(Oe,{className:"theater-stage",slotId:"graph-stage",slots:Te.slots,children:[s.jsx($s,{value:K,graph:L,traceSection:W,providerTrace:ue,selectedModelId:o,activeModel:Nn,preparedModelIds:Ke,status:m,running:R,fixture:e}),s.jsxs(Oe,{as:"div",className:"graph-wrap graph-theater",slotId:"graph-canvas",slots:Te.slots,children:[fe?s.jsx(Ts,{}):null,s.jsxs(On,{nodes:Tn,edges:Mn,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(f,y)=>St(y.id),children:[s.jsx(In,{color:"#29313d",gap:18}),s.jsx(Ln,{showInteractive:!1})]},En)]}),s.jsx(Cs,{traceSection:W,providerTrace:ue,runMetrics:I,bootMetrics:je})]}),s.jsxs(Oe,{as:"aside",className:"theater-inspector",slotId:"value-inspector",slots:Te.slots,children:[s.jsx(As,{value:K,trace:ue,selectedLayer:Ee}),s.jsx(Os,{activeTab:kn,setActiveTab:Sn,value:K,selectedLayer:Ee,trace:ue,traceSection:W,runtimeReport:ve,fixture:e})]}),s.jsxs(Oe,{className:"theater-console","aria-label":"Rasa command console",slotId:"source-editor",slots:Te.slots,children:[s.jsx(Ls,{entries:Ye}),s.jsxs("div",{className:"console-command",children:[s.jsx(Bs,{selectedModelId:o,setSelectedModelId:l,setSource:h,editorRef:a,prepared:Ke.includes(o),preparing:jn===o}),s.jsx(Is,{source:p,editorRef:a,run:Rn,disabled:m!=="ready"||R,running:R})]})]})]})]})}function Ns(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function Es(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||Ss}function Ts(){return s.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[s.jsx("span",{className:"label",children:"Wasm component runtime"}),s.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),s.jsxs("p",{children:["Use ",s.jsx("code",{children:"ras"})," or ",s.jsx("code",{children:"ras-wasm"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function Ms({fixture:e,providerTrace:t,traceSection:n,runMetrics:r}){const a=Dr({fixture:e,providerTrace:t,runMetrics:r,traceSection:n}),i=Vr({fixture:e,providerTrace:t,runMetrics:r,traceSection:n});return s.jsxs("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:[s.jsx(Gr,{phases:a,className:"model-phase-route",ariaLabel:"Rasa model explorer phase route"}),s.jsx(Yr,{steps:i,className:"model-boundary-route",ariaLabel:"Host boundary route"})]})}function $s({value:e,graph:t,traceSection:n,providerTrace:r,selectedModelId:a,activeModel:i,preparedModelIds:o,status:l,running:d,fixture:u}){const p=se(a),h=i?{...se(i.id),...i,title:se(i.id).title}:null,m=Er({value:e,graph:t,traceSection:n,providerTrace:r,selectedModel:p,activeModel:h,runtimeState:{available:u||l==="ready",message:u?"Saved trace fixture is loaded for visual validation.":l==="component adapter pending"?ft:""},catalogCount:X.length,preparedModelCount:o.length,running:d,fixture:u});return s.jsxs("header",{className:"stage-header story-header","data-tone":m.headline.tone,children:[s.jsxs("div",{className:"story-copy",children:[s.jsx("span",{className:"label",children:m.headline.eyebrow}),s.jsx("h2",{children:m.headline.title}),s.jsx("p",{children:m.headline.subtitle}),s.jsxs("span",{className:"runtime-pill","data-tone":m.runtime.tone,children:[s.jsx("strong",{children:m.runtime.label}),s.jsx("em",{children:m.runtime.detail})]})]}),s.jsx("div",{className:"stage-metrics story-metrics",children:m.metrics.map(g=>s.jsx(xn,{label:g.label,value:g.value,detail:g.detail,tone:g.tone},g.id))})]})}function As({value:e,trace:t,selectedLayer:n}){const[r,a]=c.useState(null),i=e?xe(e):"nil";return s.jsxs(s.Fragment,{children:[s.jsxs("article",{className:"value-lens",children:[s.jsx("span",{className:"label",children:"Selected value"}),s.jsx("strong",{children:_e(e)}),s.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),s.jsx(oe,{text:na(i),mode:"rasa"}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"capability"}),s.jsx("dd",{children:P(t)||"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"selected"}),s.jsx("dd",{children:n||"none"})]})]}),s.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&s.jsx(vt,{kind:"Rasa value",title:_e(e),description:"The real structured value returned to the browser from the Rasa session.",meta:kt(i,"rasa"),onClose:()=>a(null),children:s.jsx("div",{className:"modal-code-stack result-only",children:s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"returned value"}),s.jsx(oe,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function Cs({traceSection:e,providerTrace:t,runMetrics:n,bootMetrics:r}){const a=Tr({traceSection:e,providerTrace:t,runMetrics:n,bootMetrics:r});return s.jsx("section",{className:"host-status-strip","aria-label":"Current host request status",children:a.map(i=>s.jsx(xn,{label:i.label,value:i.value},i.label))})}function Os({activeTab:e,setActiveTab:t,value:n,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:l}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return s.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[s.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(u=>s.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>t(u.id),children:u.label},u.id))}),s.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&s.jsx(Fs,{traceSection:i,providerTrace:a,fixture:l}),e==="result"&&s.jsxs(s.Fragment,{children:[s.jsx(zs,{value:n,trace:a,traceSection:i}),s.jsx(Js,{value:n,selectedLayer:r})]}),e==="data"&&s.jsxs(s.Fragment,{children:[s.jsx(yn,{title:"Returned Rasa value",value:n,defaultOpen:!0}),s.jsxs("details",{className:"runtime-report",children:[s.jsx("summary",{children:"Runtime report"}),s.jsx("pre",{children:o})]})]})]})]})}function Is({source:e,editorRef:t,run:n,disabled:r,running:a}){const i=c.useRef(null),o=c.useRef(n);return c.useEffect(()=>{o.current=n},[n]),c.useEffect(()=>{const l=ar({parent:i.current,doc:e,onRun:()=>o.current(),liveLexicalHighlight:!0});return t.current=l,()=>l.destroy()},[]),s.jsxs("div",{className:"editor-panel",children:[s.jsxs("div",{className:"editor-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Rasa input"}),s.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),s.jsx("span",{children:"Primary+Enter runs"})]}),s.jsx("div",{className:"editor-host",ref:i}),s.jsxs("div",{className:"editor-actions",children:[s.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),s.jsx("button",{className:"run-button",type:"button",onClick:n,disabled:r,children:a?"Running...":"Run"})]})]})}function Ls({entries:e}){const t=c.useRef(null),[n,r]=c.useState(null),a=c.useMemo(()=>Ir(e),[e]),i=n?ta(n):"";return c.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[e.length]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:t,children:a.empty?s.jsxs("article",{className:"transcript-entry",children:[s.jsx("pre",{className:"transcript-form",children:a.emptyEntry.source}),s.jsx("pre",{className:"transcript-result-static",children:a.emptyEntry.resultPreview})]}):a.entries.map(o=>s.jsx(Ps,{entry:o,onOpenResult:()=>r(e[o.index])},o.id))}),n&&s.jsx(vt,{kind:"Rasa value",title:n.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:kt(i,"rasa"),onClose:()=>r(null),children:s.jsxs("div",{className:"modal-code-stack",children:[s.jsxs("section",{className:"form-section",children:[s.jsx("span",{className:"modal-section-label",children:"form"}),s.jsx(oe,{text:n.source,mode:"rasa",numbered:!0})]}),s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"result"}),s.jsx(oe,{text:i,mode:"rasa",numbered:!0})]})]})})]})}function Ps({entry:e,onOpenResult:t}){return s.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[s.jsx("pre",{className:"transcript-form",children:e.source}),e.canOpenResult&&s.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:t,children:[s.jsx("pre",{children:e.resultPreview}),s.jsx("span",{children:"Open full value"})]}),s.jsx("div",{className:"transcript-meta",children:e.meta.map(n=>s.jsx("span",{children:n},n))})]})}function Bs({selectedModelId:e,setSelectedModelId:t,setSource:n,editorRef:r,prepared:a,preparing:i}){const o=Or({selectedModelId:e,models:X,commands:Zr(e).slice(0,5),prepared:a,preparing:i}),l=d=>{t(d.target.value)};return s.jsxs("div",{className:"command-shelf",children:[s.jsxs("div",{className:"command-shelf-head",children:[s.jsxs("label",{className:"model-picker",children:[s.jsx("span",{children:"Model"}),s.jsx("select",{value:o.selectedModelId,onChange:l,children:o.models.map(d=>s.jsx("option",{value:d.id,children:d.title},d.id))})]}),s.jsx("span",{className:o.assetState.className,children:o.assetState.label})]}),s.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.commands.map(d=>s.jsxs("article",{className:"command-chip",children:[s.jsxs("div",{children:[s.jsx("strong",{children:d.label}),s.jsx("span",{children:d.preview})]}),s.jsxs("div",{className:"command-actions",children:[s.jsx("button",{type:"button",title:d.insertTitle,onClick:()=>Zs(d.source,n,r),children:"Insert"}),s.jsx("button",{type:"button",title:d.appendTitle,onClick:()=>Qs(d.source,n,r),children:"Append"})]})]},d.label))})]})}function _s({models:e,activeHandle:t,preparedModelIds:n}){const r=t?e.find(a=>a.handle===t):null;return s.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:r.name})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"id"}),s.jsx("dd",{children:r.id})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"handle"}),s.jsx("dd",{children:r.handle})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"layers"}),s.jsx("dd",{children:r.layers})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:r.parameters})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"size"}),s.jsx("dd",{children:la(r.bytes||0)})]})]})]},r.handle||r.id):s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:"none yet"})]}),s.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),s.jsxs("div",{className:"catalog-note",children:[X.length," static catalog models are available. ",n.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function zs({value:e,trace:t,traceSection:n}){const r=Mr({value:e,trace:t,traceSection:n});return s.jsxs("section",{className:"projection-card",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Projection"}),s.jsx("strong",{children:r.renderer}),s.jsx("p",{children:r.reason})]}),s.jsx("dl",{children:r.rows.map(a=>s.jsxs("div",{children:[s.jsx("dt",{children:a.label}),s.jsx("dd",{children:a.value})]},a.label))})]})}function Fs({traceSection:e,providerTrace:t,fixture:n=!1}){const r=$r({traceSection:e,providerTrace:t,fixture:n});return s.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[s.jsxs("div",{className:"boundary-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:r.label}),s.jsx("strong",{children:r.title}),r.note&&s.jsx("p",{className:"trace-note",children:r.note})]}),s.jsx("span",{children:r.traceCountLabel})]}),s.jsx("div",{className:"boundary-path",children:r.steps.map(a=>s.jsx(Us,{title:a.title,value:a.value},a.title))}),s.jsxs("details",{className:"trace-section",open:!0,children:[s.jsx("summary",{children:"Admitted host calls"}),s.jsx("div",{className:"trace-list",children:r.requests.length?r.requests.map(a=>s.jsx(Ds,{request:a},a.id)):s.jsx("p",{className:"trace-empty",children:r.emptyMessage})})]}),s.jsx(Vs,{trace:t}),s.jsx(yn,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Us({title:e,value:t}){return s.jsxs("article",{children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function Ds({request:e}){return s.jsxs("article",{className:"host-request-card",children:[s.jsxs("div",{children:[s.jsxs("span",{children:["call ",e.id]}),s.jsx("strong",{children:e.title})]}),s.jsx("dl",{children:e.rows.map(t=>s.jsxs("div",{children:[s.jsx("dt",{children:t.label}),s.jsx("dd",{children:t.value})]},t.label))})]})}function Vs({trace:e}){const t=Cr(e);return s.jsxs("article",{className:"provider-bridge",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Browser bridge"}),s.jsx("strong",{children:t.title})]}),s.jsx("dl",{children:t.rows.map(n=>s.jsxs("div",{children:[s.jsx("dt",{children:n.label}),s.jsx("dd",{children:n.value})]},n.label))}),s.jsxs("details",{className:"bridge-details",children:[s.jsx("summary",{children:"Request / response data"}),s.jsx("pre",{children:t.requestText}),s.jsx("pre",{children:t.responseText})]})]})}function yn({title:e,value:t,defaultOpen:n=!1}){const r=c.useMemo(()=>ms(t),[t]),a=c.useMemo(()=>Fe(t),[t]),i=r.slice(0,12);return s.jsxs("details",{className:"data-projection",open:n,children:[s.jsxs("summary",{children:[s.jsx("span",{children:e}),s.jsxs("strong",{children:[r.length," node(s)"]})]}),s.jsx("div",{className:"projection-viewer",children:s.jsx(Dt,{data:a||{},shouldExpandNode:fn,clickToExpandNode:!0,compactTopLevel:!0,style:{...Vt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>s.jsxs("article",{children:[s.jsx("span",{children:o.label}),s.jsx("strong",{children:o.value||o.kind}),s.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&s.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Compact Rasa data"}),s.jsx("pre",{className:"data-block",children:ps(t)})]})]})}function qs({modelManifest:e,modelId:t,compact:n=!1}){const[r,a]=c.useState(null),i=Hs(e,t);return s.jsxs("section",{className:`extension-panel ${n?"compact":""}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Open the extension"}),s.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),s.jsx("div",{className:"extension-assets",children:i.map(o=>s.jsx(Ws,{asset:o,onOpen:()=>a(o)},o.id))}),r&&s.jsx(Ks,{asset:r,onClose:()=>a(null)})]})}function Hs(e,t){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:mn,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:ks,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${t?` :${t}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Ws({asset:e,onOpen:t}){return s.jsxs("button",{className:"extension-asset",type:"button",onClick:t,children:[s.jsx("span",{children:e.kind}),s.jsx("strong",{children:e.title}),s.jsx("em",{children:e.description})]})}function Ks({asset:e,onClose:t}){return s.jsx(vt,{kind:e.kind,title:e.title,description:e.description,meta:kt(e.text,e.mode),onClose:t,children:s.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"projection-viewer large",children:s.jsx(Dt,{data:Fe(e.value),shouldExpandNode:fn,clickToExpandNode:!0,compactTopLevel:!0,style:{...Vt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Raw manifest JSON"}),s.jsx(oe,{text:e.text,mode:"json",numbered:!0})]})]}):s.jsx(oe,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function vt({kind:e,title:t,description:n,meta:r=[],onClose:a,children:i}){const o=c.useId(),l=c.useId(),d=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const p=document.activeElement;return u.current?.focus(),()=>{p?.isConnected&&typeof p.focus=="function"&&p.focus()}},[]),c.useEffect(()=>{const p=h=>{if(h.key==="Escape"){h.preventDefault(),a();return}if(h.key!=="Tab"||!d.current)return;const m=Gs(d.current);if(!m.length){h.preventDefault();return}const g=m[0],R=m[m.length-1];d.current.contains(document.activeElement)?h.shiftKey&&document.activeElement===g?(h.preventDefault(),R.focus()):!h.shiftKey&&document.activeElement===R&&(h.preventDefault(),g.focus()):(h.preventDefault(),g.focus())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[a]),s.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":l,children:[s.jsx("div",{className:"asset-modal-backdrop",onClick:a}),s.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[s.jsxs("header",{children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:e}),s.jsx("h2",{id:o,children:t}),s.jsx("p",{id:l,children:n}),r.length>0&&s.jsx("div",{className:"modal-meta",children:r.map(p=>s.jsxs("span",{children:[s.jsx("strong",{children:p.value}),p.label]},p.label))})]}),s.jsx("button",{ref:u,type:"button",onClick:a,children:"Close"})]}),i]})]})}function Gs(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t=>t.disabled||t.hidden||t.getAttribute("aria-hidden")==="true"||t.closest("[inert]")?!1:t.getClientRects().length>0)}function oe({text:e,mode:t="rasa",numbered:n=!1}){const r=String(e||"").split(`
`);return s.jsx("pre",{className:`line-code ${n?"numbered":""}`,children:r.map((a,i)=>s.jsxs("span",{className:"code-line",children:[n&&s.jsx("span",{className:"line-number",children:i+1}),s.jsx("code",{children:ra(a||" ",t)})]},i))})}function Js({value:e,selectedLayer:t}){if(!e)return s.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return s.jsx("pre",{className:"data-block",children:V(e)});const n=Ve(e);if(n==="weight-histogram")return s.jsx(Ys,{value:e});if(n==="weight-stats")return s.jsx(Xs,{value:e});const r=t?ea(e,t):null;return s.jsxs("div",{className:"inspection-stack",children:[r&&s.jsx(Le,{layer:r}),Array.isArray(e.layers)&&e.layers.map(a=>s.jsx(Le,{layer:a},a.id)),Array.isArray(e.layerTable)&&e.layerTable.map(a=>s.jsx(Le,{layer:a,compact:!0},a.id)),e.layer&&s.jsx(Le,{layer:e.layer}),s.jsx(gn,{value:e})]})}function Ys({value:e}){const t=e.tensors?.[0],n=Math.max(...(t?.bins||[]).map(r=>r.count),1);return s.jsxs("div",{className:"inspection-stack",children:[s.jsx("h2",{children:e.layer}),s.jsx("div",{className:"histogram",children:(t?.bins||[]).map((r,a)=>s.jsx("div",{style:{height:`${8+r.count/n*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),s.jsx(gn,{value:e})]})}function Xs({value:e}){return s.jsx("div",{className:"inspection-stack",children:e.tensors.map(t=>s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:t.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"shape"}),s.jsx("dd",{children:t.shape})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"mean"}),s.jsx("dd",{children:t.mean})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"stddev"}),s.jsx("dd",{children:t.stddev})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"range"}),s.jsxs("dd",{children:[t.min,"..",t.max]})]})]})]},t.name))})}function gn({value:e}){return s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Returned Rasa data"}),s.jsx("pre",{className:"data-block",children:V(e)})]})}function Le({layer:e,compact:t=!1}){return s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:e.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"kind"}),s.jsx("dd",{children:e.kind})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"output"}),s.jsx("dd",{children:e.output})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:e.params})]}),!t&&s.jsxs("div",{children:[s.jsx("dt",{children:"bytes"}),s.jsx("dd",{children:e.bytes})]})]})]})}function xn({label:e,value:t,detail:n="",tone:r=""}){return s.jsxs("article",{className:"metric","data-tone":r,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t}),n?s.jsx("em",{children:n}):null]})}function Zs(e,t,n){const r=n.current;if(!r){t(i=>bn(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function Qs(e,t,n){const r=n.current;if(!r){t(l=>bn(l,e));return}const a=r.state.doc.toString(),i=wn(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function bn(e,t){return`${e||""}${wn(e||"",t)}`}function wn(e,t){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${t}`:t}async function Ft(){const e=await Promise.all(X.map(async t=>[t.id,await fetch(`./models/${t.id}/model.json`).then(n=>n.json())]));return Object.fromEntries(e)}function ea(e,t){return e?.layerTable?.find(n=>n.id===t)||e?.layers?.find(n=>n.id===t)}function ta(e){return e.value!==void 0?`=>
${xe(e.value)}`:String(e.result||"=> nil")}function na(e){const t=String(e||"nil").split(`
`);return t.length<=10?t.join(`
`):`${t.slice(0,10).join(`
`)}
  ...`}function ra(e,t){const n=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=n.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(s.jsx("span",{className:`tok ${sa(i,t)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function sa(e,t){return e[1]?"string":e[2]?"comment":e[3]?t==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function kt(e,t="code"){const n=String(e||""),r=t==="json"?"folded JSON":t==="rasa"?"Rasa data":"source";return[{label:"lines",value:n?n.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(n).length},{label:"viewer",value:r}]}function rt(e){return e?`=> ${V(e)}`:"=> nil"}async function Ut(e,t,n,r){return n.lastValue=null,n.lastTrace=null,n.pendingAssetModel=null,await e.evaluateReplSessionAsync(t,r,hn)}function aa(e,t){let n=null;try{n=wt(e)}catch{throw new Error(`${t} returned an unreadable runtime report`)}const r=n?.status?.name,a=n?.eval?.status?.name;if(r!=="ok"||n.eval&&a!=="ok"){const i=n?.eval?.message||n?.eval?.["rendered-error"]||n?.message||String(e||"").slice(0,240);throw new Error(`${t} failed: ${i}`)}}function ia(e,t){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:t}}function oa(e){const t=e.lastValue;return t?.status?.name==="failed"&&t?.kind?.name==="asset-not-prepared"&&t?.recoverable===!0&&t?.model?.name?t.model.name:e.pendingAssetModel}function la(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function O(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function S(e){return Math.max(0,O()-e)}Cn.createRoot(document.getElementById("root")).render(s.jsx(Rs,{}));
