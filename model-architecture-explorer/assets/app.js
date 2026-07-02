import{j as s,r as c,b as Et,J as zn,d as Fn}from"./react.js";import{i as $t,B as Tt,C as At}from"./graph.js";import{S as Un,k as Mt,E as ee,a as vn,l as Ct,d as Lt,b as Dn,D as nn}from"./editor.js";import{l as It}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Vn="wasm-component",Ot="browser-component-adapter-pending",Hn="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.",qt="rasa-component/",Wn="rasa:runtime/host",Bt="rasa:runtime/host@0.1.0",_t="rasa:runtime/session@0.1.0",Kn=1,Gn=2,Jn=4,Yn=8,Xn=16,Pt=Kn|Gn|Jn|Yn|Xn,zt=256;class Ft extends Error{constructor(n=Hn){super(n),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=Vn,this.unavailableReason=Ot}}class kn extends Error{constructor(n){super(n),this.name="RasaBrowserHostCallError"}}class fn{static async load(n,t={}){const r=Sn(n),a=t.readBytes||Gt,i=await a(r,"Rasa runtime component"),o=Sn(t.adapterBaseUrl||qt,r),d=await import(new URL("ras-runtime.js",o).href),u=Dt(t.host),m=new Map,x=await d.instantiate(async w=>{const j=new URL(w,o),E=m.get(j.href);if(E)return E;const xe=await a(j,`Rasa component core module ${w}`),z=await WebAssembly.compile(xe);return m.set(j.href,z),z},u);return new fn({url:r.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:u,session:x.session||x[_t]})}constructor(n={}){if(!n.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=n.url??null,this.adapterBaseUrl=n.adapterBaseUrl??null,this.byteLength=n.byteLength??null,this.available=!0,this.runtimeKind=Vn,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=n.session,this.importObject=n.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new Ft(this.message)}evaluate(n,t=null){return this.session.evalSource(B(n),Ee(t))}inspect(n,t=null){const r=this.session.inspectSource(B(n),Ee(t));return Rn(r,"inspection artifact")}syntaxTokens(n){const t=this.session.syntaxTokens(B(n));return Rn(t,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(n){n!=null&&this.session.sessionFree(n)}loadPackage(n,t){return this.session.sessionLoadPackage(n,Me(t))}async loadPackageAsync(n,t){return await this.loadPackage(n,t)}evaluateSession(n,t,r=null){return this.session.sessionEval(n,B(t),Ee(r))}async evaluateSessionAsync(n,t,r=null){return await this.evaluateSession(n,t,r)}evaluateReplSession(n,t,r=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(n,B(t),Ee(r))}async evaluateReplSessionAsync(n,t,r=null){return await this.evaluateReplSession(n,t,r)}}function B(e){return new TextEncoder().encode(String(e??""))}function Ut(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function Dt(e=null){const n={[Wn]:Vt(e),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new Nn},"wasi:cli/stdout":{getStdout:()=>new Ge},"wasi:cli/stderr":{getStderr:()=>new Ge},"wasi:cli/terminal-input":{TerminalInput:Yt},"wasi:cli/terminal-output":{TerminalOutput:Xt},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new tn},"wasi:io/error":{Error:Jt},"wasi:io/poll":{Pollable:tn,poll:()=>[]},"wasi:io/streams":{InputStream:Nn,OutputStream:Ge},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return Wt(n)}function Vt(e){return{call(n){if(!e)throw new kn("no browser host provider is registered");if(typeof e.callBytes=="function")return Ht(e.callBytes(n));if(typeof e.call=="function"){const t=e.call(Ut(n));return Zn(t)?t.then(r=>B(r)):B(t)}throw new kn("browser host provider does not implement call")}}}function Ht(e){return Zn(e)?e.then(n=>Me(n)):Me(e)}function Wt(e){return{...e,[Bt]:e[Wn],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function Ee(e){if(typeof e=="number")return e;let n=Pt;return e?.phases&&e.phases!=="all"&&(n=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((r,a)=>r|Kt(a),0)),e?.traces&&(n|=zt),n}function Kt(e){switch(String(e)){case"reader":return Kn;case"analysis":case"analyze":return Gn;case"ir":return Jn;case"facts":return Yn;case"eval":return Xn;default:return 0}}function Rn(e,n){try{return JSON.parse(e)}catch(t){throw new Error(`failed to parse ${n}: ${t.message}`)}}function Me(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):B(e)}async function Gt(e,n){const t=await fetch(e);if(!t.ok)throw new Error(`failed to load ${n}: ${t.status}`);return Me(await t.arrayBuffer())}function Sn(e,n=null){return new URL(String(e),n||globalThis.location?.href||import.meta.url)}function Zn(e){return e&&typeof e.then=="function"}class Jt{}class tn{block(){}}class Nn{}class Ge{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new tn}}class Yt{}class Xt{}const Zt=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),Qn=Un.define();Un.define();function Qt(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}function es({parent:e,doc:n="",onChange:t=null,onRun:r=null,readOnly:a=!1,liveLexicalHighlight:i=!1,extensions:o=[]}={}){if(!e)throw new Error("mountRasaCodeEditor requires a parent element");const l=r?Mt.of(Qt(r)):[],d=i?is():as();return new ee({parent:e,state:vn.create({doc:n,extensions:[Ct(),Lt(),ee.lineWrapping,d,l,ee.editable.of(!a),vn.readOnly.of(a),ee.updateListener.of(u=>{u.docChanged&&t?.(u.state.doc.toString(),u)}),...o]})})}function ns(e){return Zt[e]??"rasa-token-unknown"}function En(e){const n=String(e),t=[];let r=0;for(;r<n.length;){const a=n[r];if(/\s/.test(a)){r+=1;continue}if("()[]{}".includes(a)){t.push(q(n,"delimiter",r,r+1)),r+=1;continue}if(a===";"){const l=rs(n,r);t.push(q(n,"comment",r,l)),r=l;continue}if(a==='"'){const l=ss(n,r);t.push(q(n,"string",r,l)),r=l;continue}if(a==="^"){t.push(q(n,"reader-macro",r,r+1));const l=r+1;if(l<n.length&&!/[\s()[\]{}]/.test(n[l])){const d=Je(n,l);t.push(q(n,"metadata",l,d)),r=d}else r+=1;continue}if(a==="'"||a==="`"||a==="~"||a==="@"){t.push(q(n,"reader-macro",r,r+1)),r+=1;continue}if(a==="\\"){const l=Je(n,r);t.push(q(n,"character",r,l)),r=l;continue}const i=Je(n,r),o=n.slice(r,i);t.push(q(n,ts(o),r,i)),r=i}return t}function ts(e){return e==="nil"?"nil":e==="true"||e==="false"?"boolean":e.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(e)?"number":"symbol"}function q(e,n,t,r){return{kind:n,start:Tn(e,t),end:Tn(e,r)}}function Je(e,n){let t=n;for(;t<e.length&&!/[\s()[\]{}]/.test(e[t]);)t+=1;return t}function ss(e,n){let t=!1;for(let r=n+1;r<e.length;r+=1){const a=e[r];if(t)t=!1;else if(a==="\\")t=!0;else if(a==='"')return r+1}return e.length}function rs(e,n){const t=e.indexOf(`
`,n);return t<0?e.length:t}function pe(e,n){const t=typeof n=="string"?n:"",r=typeof n=="number"?n:t.length,a=ls(e,t||r).map(i=>nn.mark({class:ns(i.kind)}).range(i.start,i.end));return nn.set(a,!0)}function as(e=[]){return[Dn.define({create(t){return pe(e,t.doc.toString())},update(t,r){for(const a of r.effects)if(a.is(Qn))return pe(a.value,r.state.doc.toString());return r.docChanged?nn.none:t.map(r.changes)},provide:t=>ee.decorations.from(t)})]}function is(){return[Dn.define({create(n){return pe(En(n.doc.toString()),n.doc.toString())},update(n,t){for(const r of t.effects)if(r.is(Qn))return pe(r.value,t.state.doc.toString());return t.docChanged?pe(En(t.state.doc.toString()),t.state.doc.toString()):n.map(t.changes)},provide:n=>ee.decorations.from(n)})]}function os(e,n,t){const r=String(e),a=rn(n),i=Math.max(a,rn(t));return{start:$n(r,a),end:$n(r,i)}}function $n(e,n){const t=String(e),r=rn(n);let a=0,i=0;for(const o of t){const l=a+et(o);if(l>r||(a=l,i+=o.length,a===r))return i}return t.length}function Tn(e,n){const t=String(e),r=sn(n,t.length);let a=0;for(let i=0;i<r;){const o=t.codePointAt(i),l=String.fromCodePoint(o);a+=et(l),i+=l.length}return a}function ls(e,n){const t=typeof n=="number"?n:String(n).length;return[...e].map(r=>{const a=typeof n=="number"?{start:sn(r.start,t),end:sn(r.end,t)}:os(n,r.start,r.end);return{kind:String(r.kind),start:a.start,end:a.end}}).filter(r=>r.start<r.end).sort((r,a)=>r.start-a.start||r.end-a.end)}function sn(e,n){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(n,Math.trunc(t))):0}function rn(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,Math.trunc(n)):0}function et(e){const n=e.codePointAt(0);return n<=127?1:n<=2047?2:n<=65535?3:4}const ds=`
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
`,An=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),nt="rasa.theme",cs=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});cs.dark;function us(e=document.documentElement){const n=localStorage.getItem(nt),t=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return tt(t,e),t}function tt(e,n=document.documentElement){const t=e==="light"?"light":"dark";return n.dataset.rasaTheme=t,n.setAttribute("data-theme",t),localStorage.setItem(nt,t),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:t}})),t}function ms(e=document.documentElement){return tt(e.dataset.rasaTheme==="light"?"dark":"light",e)}function Mn(e){return e==="light"?"Dark":"Light"}const R=Object.freeze({classes:Object.freeze({phaseRoute:"rasa-phase-route",phaseNode:"rasa-phase-node",projectionLegend:"rasa-projection-legend",projectionChip:"rasa-projection-chip",projectionEmpty:"rasa-projection-empty",boundaryRoute:"rasa-boundary-route",boundaryStep:"rasa-boundary-step",visualSlot:"rasa-visual-slot"}),attrs:Object.freeze({phaseId:"data-phase-id",tone:"data-tone",status:"data-status",projectionLayer:"data-layer",boundaryTone:"data-tone",visualSlot:"data-visual-slot",slotStatus:"data-slot-status",slotCount:"data-slot-count",slotMeta:"data-slot-meta"})});function hn(e,n={}){const t=typeof e=="string"?{id:e}:e||{};return{[R.attrs.visualSlot]:t.id||"",[R.attrs.slotStatus]:t.status||n.status||"",[R.attrs.slotCount]:String(t.count??n.count??0),[R.attrs.slotMeta]:t.meta||n.meta||""}}function ps(e=[],n,t={}){return e.find(r=>r.id===n)||{...t,id:n}}function fs(e={},{className:n=""}={}){const t=e.id||"",r=!!e.active;return{id:t,label:e.label||t||"phase",meta:e.meta||hs(e),title:e.description||e.label||t,className:[n,R.classes.phaseNode,r?"active":""].filter(Boolean).join(" "),attrs:{[R.attrs.phaseId]:t,[R.attrs.tone]:e.tone||t,[R.attrs.status]:e.status||"unknown","data-phase-node":t,"data-active":String(r)}}}function hs(e={}){const n=[];return e.groups&&n.push(`${e.groups} group${e.groups===1?"":"s"}`),e.diagnostics&&n.push(`${e.diagnostics} signal${e.diagnostics===1?"":"s"}`),n.join(" / ")||e.status||"waiting"}const ys=`
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
`,st=Object.freeze([T("reader","Read","Primary reader syntax tree","reader","source-tree"),T("expand","Expand","Expanded syntax and macro boundary","expand","source-tree"),T("analyzer","Analyze","Bindings, calls, and analyzer diagnostics","analysis","primary-lowering"),T("ir","IR","Backend-independent executable tree","ir","primary-lowering"),T("facts","Facts","Node-keyed sidecar evidence","facts","sidecar"),T("checks","Checks","Type and boundary checks","checks","sidecar"),T("plan","Plan","Lane decisions and rejected candidates","plan","plan"),T("explain","Explain","Human-oriented compiler projection","explain","projection"),T("eval","Eval","Runtime value observation","eval","runtime"),T("wasm","Wasm","Component runtime product","wasm","runtime")]);Object.freeze(st.map(e=>e.id));function gs(){return st.map(e=>({id:e.id,label:e.label,status:"waiting",groups:0,diagnostics:0,tone:e.tone,role:e.role,description:e.description}))}function T(e,n,t,r,a){return Object.freeze({id:e,label:n,description:t,tone:r,role:a})}function he(e){return e==null?"nil":Oe(e)?`:${e.name}`:qe(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(he).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,t])=>`:${n} ${he(t)}`).join(" ")}}`:String(e)}function an(e,n=0){if(e==null||typeof e!="object"||Oe(e)||qe(e))return he(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(l=>`${i}${an(l,n+2)}`).join(`
`)}
${o}]`}const t=Object.entries(e);if(t.length===0)return"{}";const r=" ".repeat(n+2),a=" ".repeat(n);return`{
${t.map(([i,o])=>`${r}:${i} ${an(o,n+2)}`).join(`
`)}
${a}}`}function xs(e,n=""){return Oe(e)||qe(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function Oe(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function qe(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function bs(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Oe(e)&&!qe(e)?Object.keys(e).length:0}const ws=Object.freeze([C("source-editor","Source editor","CodeMirror","Rasa forms and source spans",10),C("phase-route","Compiler route","PhaseRoute","Reader through runtime phase status",20),C("projection-legend","Projection legend","ProjectionLegend","Grouped phase-neutral projection layers",30),C("boundary-route","Host boundary","BoundaryRoute","Admitted capability request and returned value",40),C("graph-stage","Graph stage","Stage","Model projection frame and run context",50),C("graph-canvas","Graph canvas","ReactFlow","Structured graph records returned by Rasa",60),C("value-inspector","Value inspector","DataView","Foldable Rasa data and returned values",70),C("transcript","Session transcript","Transcript","Append-only session input and returned data",80),C("diagnostics","Diagnostics","DiagnosticCards","Structured blockers and conservative evidence",90)]);function rt({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:r={}}={}){const a=new Set(n),i=new Map(e.map(o=>[o.id,o]));return gs().map(o=>{const l=i.get(o.id)||{},d=l.status||r[o.id]||o.status;return{...o,...l,status:d,active:!!(l.active||a.has(o.id)),meta:l.meta||t[o.id]||Ns(d,l)}})}function js(e={}){return ws.map(n=>{const t=e[n.id]||{},r=Number(t.count||0),a=!!(t.present||r>0);return{...n,present:a,status:t.status||(a?"ready":"waiting"),count:r,meta:t.meta||""}})}function vs({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,summary:r={}}={}){const a=!r.empty,i=!!n?.status,o=!!(t?.view||t?.status==="ok"||e),l=a||o?at:["wasm"];return rt({activePhaseIds:l,metaById:{reader:o||a?"source":"ready",expand:o||a?"source":"ready",analyzer:o||a?"artifact":"ready",ir:o||a?"artifact":"ready",facts:o||a?"artifact":"ready",checks:o||a?"artifact":"ready",plan:a?`${r.requests||0} host`:"admission",explain:e?"fixture":a?"trace":"view",eval:o?t?.view?`:${t.view}`:"value":"session",wasm:i?"component":"loaded"},statusById:Ss(l,"ok")})}function ks({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,summary:r={},sourceTitle:a="",identityTitle:i="",capabilityTitle:o=""}={}){return[{label:e?"Replay form":"Rasa source",title:a||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:i||o||"waiting",detail:`${Number(r.requests||0)} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"browser provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:t?.view?`:${t.view}`:"Rasa value",detail:t?.totalMs!==void 0?`${Es(t.totalMs)}`:"structured data",tone:"return"}]}function Rs({graph:e={},value:n=null,summary:t={},transcript:r=[],runMetrics:a=null,runtimeState:i={}}={}){const o=Array.isArray(e.nodes)?e.nodes.length:0,l=Array.isArray(r)?r.length:0,d=Number(t.requests||0),u=!!n,m=i.available!==!1;return{slots:js({"source-editor":{present:!0,status:m?"ready":"pending",meta:m?"session input":"adapter pending"},"phase-route":{present:!0,count:at.length,meta:m?"runtime path":"pending runtime"},"boundary-route":{present:!0,status:d?"ready":m?"waiting":"pending",count:d,meta:d?`${d} host request${d===1?"":"s"}`:""},"graph-stage":{present:!0,status:u?"ready":m?"waiting":"pending",count:o,meta:u?o?"projected value":"empty projection":"waiting"},"graph-canvas":{present:!0,status:o?"ready":u?"empty":"waiting",count:o,meta:o?`${o} layer${o===1?"":"s"}`:""},"value-inspector":{present:u,status:a?.status||(u?"ready":"waiting"),meta:n?.view?.name?`:${n.view.name}`:""},transcript:{present:!0,count:l,meta:l?`${l} entr${l===1?"y":"ies"}`:"waiting"}})}}const at=Object.freeze(["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"]);function Ss(e,n){return Object.fromEntries(e.map(t=>[t,n]))}function Ns(e,n={}){return n.groups?`${n.groups} group${n.groups===1?"":"s"}`:n.diagnostics?`${n.diagnostics} diagnostic${n.diagnostics===1?"":"s"}`:e||"waiting"}function C(e,n,t,r,a){return Object.freeze({id:e,label:n,component:t,description:r,priority:a})}function Es(e){const n=Number(e||0);return n<10?`${n.toFixed(1)} ms`:`${Math.round(n)} ms`}function $e({as:e="section",slotId:n="",slots:t=[],state:r={},className:a="",children:i,...o}){const l=ps(t,n,r);return s.jsx(e,{...o,...hn(l,r),className:`${R.classes.visualSlot} ${a}`.trim(),children:i})}function $s({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:r={},className:a="",ariaLabel:i="Rasa phase route"}){const o=rt({phases:e,activePhaseIds:n,metaById:t,statusById:r}),l=R.classes;return s.jsx("div",{className:`${l.phaseRoute} ${l.visualSlot} ${a}`.trim(),"aria-label":i,...hn({id:"phase-route",status:"ready",count:o.filter(d=>d.active).length}),children:o.map(d=>{const u=fs(d);return c.createElement("span",{className:u.className,...u.attrs,key:u.id,title:u.title},s.jsx("strong",{children:u.label}),s.jsx("em",{children:u.meta}))})})}function Ts({steps:e=[],className:n="",ariaLabel:t="Rasa boundary route"}){const r=R.classes,a=R.attrs;return s.jsx("div",{className:`${r.boundaryRoute} ${r.visualSlot} ${n}`.trim(),"aria-label":t,...hn({id:"boundary-route",status:e.length?"ready":"waiting",count:e.length}),children:e.map(i=>c.createElement("article",{className:r.boundaryStep,[a.boundaryTone]:i.tone||"",key:i.label},s.jsx("span",{children:i.label}),s.jsx("strong",{children:i.title}),s.jsx("em",{children:i.detail})))})}const K=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function te(e){return K.find(n=>n.id===e)||K[0]}const Ce="tiny-cnn",Te=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,As=`(def m (model/load-model :${Ce}))
(model/summary m)`;function Ms(e=Ce){const n=te(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class Cs{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,t){const r=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(r,{kind:n,value:t}),r}get(n,t=null){const r=this.resources.get(n);if(!r)throw new Error(`unknown resource handle ${n}`);if(t&&r.kind!==t)throw new Error(`resource ${n} has kind ${r.kind}, expected ${t}`);return r.value}}class Ls extends Error{constructor(n,t,r={}){super(t),this.name="BrowserCapabilityError",this.kind=n,this.data=r}}class Is{constructor(){this.handlers=new Map}register(n,t,r){return this.handlers.set(on(n,t),r),this}invoke(n,t,r){const a=on(n,t),i=this.handlers.get(a);if(!i)throw new Ls("adapter-missing",`browser capability adapter is missing for ${a}`,{packageName:n,exportName:t});return i(r)}entries(){return[...this.handlers.keys()]}}function on(e,n){return`${e}/${n}`}function yn(e){return new Bs(e).parse()}function _(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Be(e)?`:${e.name}`:gn(e)?e.name:it(e)?`(${e.items.map(_).join(" ")})`:Array.isArray(e)?`[${e.map(_).join(" ")}]`:`{${Object.entries(e).map(([n,t])=>`:${n} ${_(t)}`).join(" ")}}`}function fe(e,n=0){if(e==null||typeof e!="object"||Be(e)||gn(e))return _(e);const t=" ".repeat(n+2),r=" ".repeat(n);if(it(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${t}${fe(i,n+2)}`).join(`
`)}
${r})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${t}${fe(i,n+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${t}:${i} ${fe(o,n+2)}`).join(`
`)}
${r}}`}function Os(e){return{type:"keyword",name:e}}function qs(e){return{type:"symbol",name:e}}function Be(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function gn(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function it(e){return!!(e&&typeof e=="object"&&e.type==="list")}class Bs{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==="("?this.list():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const t=this.form(),r=this.form();n[_s(t)]=r}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}list(){this.expect("(");const n=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:n};n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const t=this.text[this.index++];if(t==='"')return n;if(t==="\\"){const r=this.text[this.index++];n+=r==="n"?`
`:r}else n+=t}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const t=this.text.slice(n,this.index);if(!t)throw new Error(`expected form at byte ${this.index}`);return t==="nil"?null:t==="true"?!0:t==="false"?!1:/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith(":")?Os(t.slice(1)):qs(t)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function _s(e){return Be(e)||gn(e)?e.name:String(e)}const Ye=Object.freeze(Object.fromEntries(K.map(e=>[e.id,`./models/${e.id}/model.json`])));class Xe extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class Ps{constructor(){this.resources=new Cs("browser"),this.registry=zs(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const t=yn(n);this.lastTrace={requestText:n,request:t,responseText:"",packageName:t.package?.name||"unknown",exportName:t.export?.name||"unknown"};const r=this.route(t),a=_(r);return this.lastTrace.responseText=a,a}route(n){try{const t=n.package?.name,r=n.export?.name,a=n.args||[],i=this.invoke(t,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:t,exportName:r,capability:on(t,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(t){const r=t instanceof Xe?{status:y("failed"),kind:y("asset-not-prepared"),model:y(t.modelId),recoverable:!0,message:t.message}:{status:y("failed"),kind:y("provider-error"),message:t.message};return t instanceof Xe&&(this.pendingAssetModel=t.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:t.message},r}}invoke(n,t,r){return this.registry.invoke(n,t,r)}loadNamedModel(n){if(!Ye[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new Xe(n);if(!this.modelIds.has(n)){const t=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,t)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!Ye[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const t=await It(Ye[n]);return this.catalog.set(n,t),t}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,t])=>{const r=this.summary(t);return{id:n,handle:t,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(n){const t=this.model(n),r=t.layers.map(Q);return{view:y("model-summary"),model:t.name,handle:n,layers:r.length,parameters:ne(r.map(a=>a.params)),trainableParameters:ne(r.map(a=>a.trainableParams)),bytes:ne(r.map(a=>a.bytes)),inputs:se(t.inputs?.[0]?.shape),outputs:se(t.outputs?.[0]?.shape),graph:Cn(t),layerTable:r}}graph(n){return{view:y("graph"),graph:Cn(this.model(n))}}layerCount(n){const t=this.model(n);return{view:y("numeric-aggregate"),label:"layer count",value:t.layers.length,unit:y("layers"),model:t.name,handle:n}}layersByKind(n,t){const r=this.model(n).layers.map(Q).filter(a=>a.kind===t);return{view:y("layers-by-kind"),kind:y(t),count:r.length,layers:r}}topLayers(n,t){const r=Number(t.limit||5),i=ln(t.by||y("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(Q).sort((l,d)=>d[i]-l[i]).slice(0,r);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(n,t){const r=this.layerByName(n,t);return{view:y("layer-inspection"),layer:Q(r),config:Ds(r.getConfig()),weights:r.weights.map(ot)}}layerTensorSize(n,t){const{layer:r,index:a}=this.layerByRef(n,t),i=Q(r,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,t){const r=this.layerByName(n,t);return{view:y("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>Fs(r.weights[i],a))}}weightHistogram(n,t,r){const a=this.layerByName(n,t),i=Number(r.bins||24),o=a.getWeights().map((l,d)=>({name:a.weights[d]?.originalName||`weight_${d}`,bins:Us(Array.from(l.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,t){const r=this.model(n).layers.find(a=>a.name===t);if(!r)throw new Error(`unknown layer ${t}`);return r}layerByRef(n,t){const r=this.model(n);if(typeof t=="number"){const o=Math.trunc(t)-1,l=r.layers[o];if(!l)throw new Error(`unknown layer index ${t}`);return{layer:l,index:o}}const a=String(t),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function zs(e){return new Is().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(ln(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,t])=>e.layersByKind(n,ln(t))).register("demo.tfjs/layers","top",([n,t={}])=>e.topLayers(n,t)).register("demo.tfjs/layer","inspect",([n,t])=>e.inspectLayer(n,t)).register("demo.tfjs/layer","tensor-size",([n,t])=>e.layerTensorSize(n,t)).register("demo.tfjs/weights","stats",([n,t])=>e.weightStats(n,t)).register("demo.tfjs/weights","histogram",([n,t,r={}])=>e.weightHistogram(n,t,r))}function Q(e,n=null){const t=e.weights.map(ot);return{id:e.name,index:n??Vs(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:se(e.inputShape),output:se(e.outputShape),params:ne(t.map(r=>r.params)),trainableParams:ne(t.filter(r=>r.trainable).map(r=>r.params)),bytes:ne(t.map(r=>r.bytes))}}function Cn(e){const n=e.layers.map((t,r)=>({...Q(t,r),index:r}));return{nodes:n,edges:n.slice(1).map((t,r)=>({id:`${n[r].id}->${t.id}`,source:n[r].id,target:t.id}))}}function ot(e){const n=e.shape.reduce((t,r)=>t*r,1);return{name:e.originalName,shape:se(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function Fs(e,n){const t=Array.from(n.dataSync()),r=t.length,a=Math.min(...t),i=Math.max(...t),o=t.reduce((u,m)=>u+m,0)/r,l=t.reduce((u,m)=>u+(m-o)**2,0)/r,d=t.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:se(n.shape),params:r,min:H(a),max:H(i),mean:H(o),stddev:H(Math.sqrt(l)),sparsity:H(d/r)}}function Us(e,n){const t=Math.min(...e),r=Math.max(...e),a=r===t?1:(r-t)/n,i=Array.from({length:n},(o,l)=>({start:H(t+l*a),end:H(t+(l+1)*a),count:0}));for(const o of e){const l=Math.min(n-1,Math.max(0,Math.floor((o-t)/a)));i[l].count+=1}return i}function Ds(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(t=>e[t]!==void 0).map(t=>[t,e[t]]))}function ln(e){return Be(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function se(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(Ln).join(" x "):e.map(Ln).join(" x "):"?"}function Ln(e){return e==null?"*":String(e)}function ne(e){return e.reduce((n,t)=>n+t,0)}function H(e){return String(Math.round(e*1e5)/1e5)}function Vs(e){return Number(e._index??0)}const lt=`{:packages
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
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function Ze(e){if(!e||!e.includes(":traces"))return null;try{return yn(e).traces||null}catch{return null}}function _e(e){const n=Array.isArray(e?.traces)?e.traces:[],t=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:xs(e?.scope,"waiting"),traces:n.length,requests:t.length,empty:n.length===0&&t.length===0}}function Hs(e){const n=[];return dn(e,[],n),n}function In(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:he(e)}function Ws(e){return an(e)}function Le(e){return e==null?null:Array.isArray(e)?e.map(Le):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,t])=>[`:${n}`,Le(t)])):e}function dn(e,n,t){const r=t.length,a={id:r,path:n,label:Gs(n),kind:Ks(e),value:bs(e)?null:he(e),children:[]};return t.push(a),Array.isArray(e)?e.forEach((i,o)=>{const l=dn(i,[...n,o],t);a.children.push(l)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const l=dn(o,[...n,i],t);a.children.push(l)}),r}function Ks(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function Gs(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),cn=e=>({type:"symbol",name:e});function On(e){const n=Ys(e),t=Xs(e),r=Zs(e);return{source:Js(e),value:n,providerTrace:t,traceSection:r,runtimeReport:`{:status :ok :traces ${un(r)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function Js(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function Ys(e){const n=dt(e),t=n.reduce((a,i)=>a+i.params,0),r=n.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:t,trainableParameters:t,bytes:r,inputs:Qs(e),outputs:er(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>nr(n[i].id,a.id))},layerTable:n}}function Xs(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${dt(e).length}}}`}}function Zs(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[Z(0,"source-form",{symbol:cn("model/load-model"),span:{start:7,end:23}}),Z(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),Z(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[Z(0,"source-form",{symbol:cn("model/summary"),span:{start:31,end:44}}),Z(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),Z(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[qn(0,"demo.tfjs/model","load-model","model/load-model",e.id),qn(1,"demo.tfjs/model","summary","model/summary")]}}function dt(e){switch(e.id){case"tiny-mlp":return[b("feature_input","input","* x 16",0,0),b("hidden_dense","dense","* x 32",544,2176),b("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[b("signal_input","input","* x 32",0,0),b("encoder_dense","dense","* x 12",396,1584),b("bottleneck","dense","* x 4",52,208),b("decoder_dense","dense","* x 12",60,240),b("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[b("token_input","input","* x 8",0,0),b("token_embedding","embedding","* x 8 x 16",1600,6400),b("pool_tokens","global-average-pooling1d","* x 16",0,0),b("projection_dense","dense","* x 8",136,544)];default:return[b("input_image","input","* x 28 x 28 x 1",0,0),b("stem_conv","conv2d","* x 26 x 26 x 8",80,320),b("flatten","flatten","* x 5408",0,0),b("classifier_dense","dense","* x 10",5306,21224)]}}function Qs(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function er(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function b(e,n,t,r,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:t,params:r,trainableParams:r,bytes:a}}function nr(e,n){return{id:`${e}->${n}`,source:e,target:n}}function Z(e,n,t){return{id:e,kind:g(n),subject:null,"source-id":"browser://repl",span:t.span||null,data:t,diagnostics:[],annotations:[],evidence:[]}}function qn(e,n,t,r,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:n,export:t,capability:g(`${n}/${t}`)},source:{symbol:cn(r),model:a?g(a):null},admission:{"call-id":e,identity:{package:n,export:t,capability:g(`${n}/${t}`)},effects:[g("model/read")]},"trace-id":e}}function un(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(un).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,t])=>`:${n} ${un(t)}`).join(" ")}}`}const tr=`(ns rasa.core)

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
`,sr=`import "@tensorflow/tfjs-backend-cpu";
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
`,rr="./ras.wasm",mn=Object.freeze({phases:"all",traces:!0}),ct=e=>e<2;function ar(){const e=ir()==="trace",n=c.useRef(null),t=c.useRef(null),r=c.useRef(0),a=c.useRef(null),i=c.useRef(!1),[o,l]=c.useState(Ce),[d,u]=c.useState(()=>us()),[m,x]=c.useState(()=>e?On(te(Ce)).source:As),[w,j]=c.useState("loading"),[E,xe]=c.useState(!1),[z,wn]=c.useState(0),[ht,Pe]=c.useState(null),[be,F]=c.useState(null),[ze,ae]=c.useState(""),[ie,oe]=c.useState(null),[U,le]=c.useState(null),[Fe,we]=c.useState([]),[Ue,de]=c.useState([]),[yt,De]=c.useState(null),[gt,Ve]=c.useState({}),[I,je]=c.useState(null),[ve,He]=c.useState(null),[ke,jn]=c.useState(null),[xt,bt]=c.useState("boundary"),[We,ce]=c.useState([]),f=c.useMemo(()=>e?On(te(o)):null,[e,o]),ue=w==="component adapter pending";c.useEffect(()=>{const p=h=>u(h.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",p),()=>window.removeEventListener("rasa-theme-change",p)},[]),c.useEffect(()=>{let p=!0;async function h(){try{if(e&&f){if(!p)return;const k=await Bn().catch(()=>({}));if(!p)return;ae(f.runtimeReport),oe(f.providerTrace),le(f.traceSection),we([f.loadedModel]),de([f.loadedModel.id]),Ve(k),je(f.value),He(f.loadedModel.handle),jn(null),Pe({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),F({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ce([{id:"setup",kind:"setup",source:Te,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:f.source,result:en(f.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:f.value}]),j("ready");return}const D=L(),S=new Ps,N=L(),v=await Bn(),G=A(N),J=L(),$=await fn.load(or(),{host:S}),V=A(J);if($.available===!1){if(!p)return;t.current=$,Ve(v),ae(""),oe(null),le(null),we([]),de([]),je(null),He(null),Pe({manifestMs:G,engineMs:V,setupMs:0,totalMs:A(D)}),F({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),ce([{id:"setup",kind:"setup",source:Te,result:Hn,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),j("component adapter pending");return}const O=$.createSession(),Se=L();await $.loadPackageAsync(O,lt);const Ne=await $.evaluateSessionAsync(O,tr,mn);Pn(Ne,"Rasa core boot");const Y=await $.evaluateSessionAsync(O,Te,mn);Pn(Y,"model setup");const Ke=A(Se);if(!p)return;n.current=S,t.current=$,r.current=O,ae(Y),oe(S.lastTrace),le(Ze(Y)),we(S.loadedModels()),de(S.preparedModelIds()),Ve(v),Pe({manifestMs:G,engineMs:V,setupMs:Ke,totalMs:A(D)}),ce([{id:"setup",kind:"setup",source:Te,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),j("ready")}catch(D){p&&j(`failed: ${D.message}`)}}return h(),()=>{p=!1,t.current&&r.current&&t.current.freeSession(r.current)}},[e,f]);const wt=c.useCallback(async()=>{if(e&&f){const k=a.current?.state.doc.toString()||m,me=z+1;wn(me),je(f.value),oe(f.providerTrace),le(f.traceSection),ae(f.runtimeReport),F({run:me,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ce(X=>[...X,{id:`run-${X.length}`,kind:"run",source:k,result:en(f.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:f.value}]);return}if(ue||t.current?.available===!1){F(k=>({...k||{},status:"pending",view:"component-adapter-pending"}));return}if(!t.current||!r.current||!n.current||i.current)return;i.current=!0,xe(!0),De(null);const p=a.current?.state.doc.toString()||m,h=n.current,D=L();let S=ze,N=null,v=null,G=null,J=null,$=0,V=0,O=0,Se=!1;F({status:"running",assetState:"checking",totalMs:0});try{const k=L();S=await _n(t.current,r.current,h,p),G=Ze(S),V=A(k);const me=Dr(h);if(me){const X=me;J=X,De(X),F({status:"running",assetState:"fetching",assetModel:J,firstEvalMs:V,totalMs:A(D)});const St=L();await h.prepareModel(X),$=A(St),de(h.preparedModelIds()),h.pendingAssetModel=null;const Nt=L();S=await _n(t.current,r.current,h,p),G=Ze(S),O=A(Nt)}else O=V;N=h.lastValue,v=h.lastTrace}catch(k){Se=!0,N=Ur("asset-load-error",k.message),v={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,xe(!1)}const Ne=A(D),Y=z+1,Ke={run:Y,status:v?.status||"ok",capability:P(v),view:v?.view||Ie(N),assetState:Se?"failed":J?"fetched":"cached",assetModel:J,assetLoadMs:$,firstEvalMs:V,finalEvalMs:O,totalMs:Ne,cacheCount:h.preparedModelIds().length};ae(S),je(N),oe(v),le(G),we(h.loadedModels()),de(h.preparedModelIds()),De(null),F(Ke),N?.handle&&He(N.handle),wn(Y),ce(k=>[...k,{id:`run-${k.length}`,kind:"run",source:p,result:en(N),capability:P(v),view:v?.view||Ie(N),status:v?.status||"ok",durationMs:Ne,value:N}])},[e,f,z,ue,ze,m,U]),M=c.useMemo(()=>Or(I),[I]),jt=c.useMemo(()=>ve?Fe.find(p=>p.handle===ve):null,[ve,Fe]),vt=c.useMemo(()=>M.nodes.map(p=>p.id).join("|")||"empty-graph",[M.nodes]),kt=c.useMemo(()=>M.nodes.map((p,h)=>({id:p.id,position:{x:h*220,y:h%2===0?0:28},data:{label:s.jsxs("div",{className:"node-label",children:[s.jsx("strong",{children:p.name}),s.jsx("span",{children:p.kind}),s.jsxs("em",{children:[p.params," params"]})]}),layer:p},type:"default",className:ke===p.id?"selected-node":""})),[M.nodes,ke]),Rt=c.useMemo(()=>M.edges.map(p=>({...p,animated:!0})),[M.edges]),Re=c.useMemo(()=>Rs({graph:M,value:I,summary:_e(U),transcript:We,runMetrics:be,runtimeState:{available:!ue}}),[M,I,U,We,be,ue,w]);return s.jsxs("main",{className:"app-shell",children:[s.jsx("style",{children:`${ys}
${ds}`}),s.jsxs("header",{className:"hero",children:[s.jsxs("div",{className:"brand-lockup",children:[s.jsx("img",{src:An.logo,alt:"Rasa"}),s.jsxs("div",{children:[s.jsx("span",{children:"Rasa Model Explorer"}),s.jsx("h1",{children:"Model architecture explorer"}),s.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),s.jsxs("div",{className:"hero-status",children:[s.jsx("img",{src:An.mark,alt:"","aria-hidden":"true"}),s.jsx("span",{className:w==="ready"?"ok":"warn",children:w}),s.jsx("span",{children:"tfjs assets on first run"}),s.jsx("span",{children:"static bundle"}),s.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>u(ms()),"aria-label":`Switch to ${Mn(d).toLowerCase()} theme`,children:Mn(d)})]})]}),s.jsxs("section",{className:"boundary-theater",children:[s.jsx(dr,{fixture:e,providerTrace:ie,traceSection:U,runMetrics:be}),s.jsxs("aside",{className:"theater-left",children:[s.jsxs("div",{className:"studio-head",children:[s.jsx("span",{className:"label",children:"Model & extension"}),s.jsx("strong",{children:"What Rasa is allowed to touch"})]}),s.jsx(br,{models:Fe,activeHandle:ve,preparedModelIds:Ue}),s.jsx(Rr,{modelManifest:gt[o],modelId:o,compact:!0})]}),s.jsxs($e,{className:"theater-stage",slotId:"graph-stage",slots:Re.slots,children:[s.jsx(cr,{value:I,graph:M,runCount:z,selectedModelId:o,preparedModelIds:Ue,running:E,fixture:e}),s.jsxs($e,{as:"div",className:"graph-wrap graph-theater",slotId:"graph-canvas",slots:Re.slots,children:[ue?s.jsx(lr,{}):null,s.jsx(ur,{traceSection:U,providerTrace:ie,value:I,selectedModelId:o,activeModelId:jt?.id||null,running:E}),s.jsxs($t,{nodes:kt,edges:Rt,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(p,h)=>jn(h.id),children:[s.jsx(Tt,{color:"#29313d",gap:18}),s.jsx(At,{showInteractive:!1})]},vt)]}),s.jsx(pr,{traceSection:U,providerTrace:ie,runMetrics:be,bootMetrics:ht})]}),s.jsxs($e,{as:"aside",className:"theater-inspector",slotId:"value-inspector",slots:Re.slots,children:[s.jsx(mr,{value:I,trace:ie,selectedLayer:ke}),s.jsx(fr,{activeTab:xt,setActiveTab:bt,value:I,selectedLayer:ke,trace:ie,traceSection:U,runtimeReport:ze,fixture:e})]}),s.jsxs($e,{className:"theater-console","aria-label":"Rasa command console",slotId:"source-editor",slots:Re.slots,children:[s.jsx(yr,{entries:We}),s.jsxs("div",{className:"console-command",children:[s.jsx(xr,{selectedModelId:o,setSelectedModelId:l,setSource:x,editorRef:a,prepared:Ue.includes(o),preparing:yt===o}),s.jsx(hr,{source:m,editorRef:a,run:wt,disabled:w!=="ready"||E,running:E})]})]})]})]})}function ir(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function or(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||rr}function lr(){return s.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[s.jsx("span",{className:"label",children:"Wasm component runtime"}),s.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),s.jsxs("p",{children:["Use ",s.jsx("code",{children:"ras"})," or ",s.jsx("code",{children:"ras-wasm"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function dr({fixture:e,providerTrace:n,traceSection:t,runMetrics:r}){const a=Array.isArray(t?.["host-requests"])?t["host-requests"]:[],i=a.length?a[a.length-1]:null,o=_e(t),l=vs({fixture:e,providerTrace:n,runMetrics:r,summary:o}),d=ks({fixture:e,providerTrace:n,runMetrics:r,summary:o,sourceTitle:ge(i)||"",identityTitle:ye(i)||"",capabilityTitle:P(n)||""});return s.jsxs("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:[s.jsx($s,{phases:l,className:"model-phase-route",ariaLabel:"Rasa model explorer phase route"}),s.jsx(Ts,{steps:d,className:"model-boundary-route",ariaLabel:"Host boundary route"})]})}function cr({value:e,graph:n,runCount:t,selectedModelId:r,preparedModelIds:a,running:i,fixture:o}){const l=te(r),d=o?"fixture layer records":"live layer records";return s.jsxs("header",{className:"stage-header",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Model graph"}),s.jsx("h2",{children:n.nodes.length?`${n.nodes.length} ${d}`:"No model value yet"}),s.jsxs("p",{children:[l.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),s.jsxs("div",{className:"stage-metrics",children:[s.jsx(W,{label:"Run",value:i?"running":t}),s.jsx(W,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),s.jsx(W,{label:"Assets",value:`${a.length}/${K.length}`})]})]})}function ur({traceSection:e,providerTrace:n,value:t,selectedModelId:r,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],l=o.length?o[o.length-1]:null,d=te(r),u=a?te(a):null,m=a&&r!==a,x=i?"Rasa is evaluating the current form.":m?`Editor targets ${d.title}; run it to replace ${u.title}.`:u?`${u.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return s.jsxs("aside",{className:`boundary-spotlight ${m?"pending":""}`,"aria-label":"Current boundary spotlight",children:[s.jsxs("div",{className:"spotlight-flow",children:[s.jsxs("div",{children:[s.jsx("span",{children:"form"}),s.jsx("strong",{children:ge(l)||"waiting for run"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"admitted identity"}),s.jsx("strong",{children:ye(l)||P(n)||"not admitted yet"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"returned value"}),s.jsx("strong",{children:t?.view?.name?`:${t.view.name}`:"none yet"})]})]}),s.jsx("p",{children:x})]})}function mr({value:e,trace:n,selectedLayer:t}){const[r,a]=c.useState(null),i=e?fe(e):"nil";return s.jsxs(s.Fragment,{children:[s.jsxs("article",{className:"value-lens",children:[s.jsx("span",{className:"label",children:"Selected value"}),s.jsx("strong",{children:Ie(e)}),s.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),s.jsx(re,{text:Pr(i),mode:"rasa"}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"capability"}),s.jsx("dd",{children:P(n)||"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"selected"}),s.jsx("dd",{children:t||"none"})]})]}),s.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&s.jsx(xn,{kind:"Rasa value",title:Ie(e),description:"The real structured value returned to the browser from the Rasa session.",meta:bn(i,"rasa"),onClose:()=>a(null),children:s.jsx("div",{className:"modal-code-stack result-only",children:s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"returned value"}),s.jsx(re,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function pr({traceSection:e,providerTrace:n,runMetrics:t,bootMetrics:r}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return s.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[s.jsx(W,{label:"Host request",value:ge(i)||"waiting"}),s.jsx(W,{label:"Canonical identity",value:ye(i)||P(n)||"waiting"}),s.jsx(W,{label:"Status",value:n?.status||t?.status||"waiting"}),s.jsx(W,{label:"Time",value:t?.totalMs!==void 0?pn(t.totalMs):r?pn(r.totalMs):"pending"})]})}function fr({activeTab:e,setActiveTab:n,value:t,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:l}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return s.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[s.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(u=>s.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>n(u.id),children:u.label},u.id))}),s.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&s.jsx(jr,{traceSection:i,providerTrace:a,fixture:l}),e==="result"&&s.jsxs(s.Fragment,{children:[s.jsx(wr,{value:t,trace:a,traceSection:i}),s.jsx(Tr,{value:t,selectedLayer:r})]}),e==="data"&&s.jsxs(s.Fragment,{children:[s.jsx(ut,{title:"Returned Rasa value",value:t,defaultOpen:!0}),s.jsxs("details",{className:"runtime-report",children:[s.jsx("summary",{children:"Runtime report"}),s.jsx("pre",{children:o})]})]})]})]})}function hr({source:e,editorRef:n,run:t,disabled:r,running:a}){const i=c.useRef(null),o=c.useRef(t);return c.useEffect(()=>{o.current=t},[t]),c.useEffect(()=>{const l=es({parent:i.current,doc:e,onRun:()=>o.current(),liveLexicalHighlight:!0});return n.current=l,()=>l.destroy()},[]),s.jsxs("div",{className:"editor-panel",children:[s.jsxs("div",{className:"editor-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Rasa input"}),s.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),s.jsx("span",{children:"Primary+Enter runs"})]}),s.jsx("div",{className:"editor-host",ref:i}),s.jsxs("div",{className:"editor-actions",children:[s.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),s.jsx("button",{className:"run-button",type:"button",onClick:t,disabled:r,children:a?"Running...":"Run"})]})]})}function yr({entries:e}){const n=c.useRef(null),[t,r]=c.useState(null),a=t?Br(t):"";return c.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:e.length?e.map(i=>s.jsx(gr,{entry:i,onOpenResult:()=>r(i)},i.id)):s.jsxs("article",{className:"transcript-entry",children:[s.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),s.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),t&&s.jsx(xn,{kind:"Rasa value",title:t.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:bn(a,"rasa"),onClose:()=>r(null),children:s.jsxs("div",{className:"modal-code-stack",children:[s.jsxs("section",{className:"form-section",children:[s.jsx("span",{className:"modal-section-label",children:"form"}),s.jsx(re,{text:t.source,mode:"rasa",numbered:!0})]}),s.jsxs("section",{className:"result-section",children:[s.jsx("span",{className:"modal-section-label",children:"result"}),s.jsx(re,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function gr({entry:e,onOpenResult:n}){return s.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[s.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&s.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[s.jsx("pre",{children:_r(e.result)}),s.jsx("span",{children:"Open full value"})]}),s.jsxs("div",{className:"transcript-meta",children:[s.jsx("span",{children:e.capability||"session"}),s.jsx("span",{children:e.view}),s.jsx("span",{children:e.status}),e.durationMs!==void 0&&s.jsx("span",{children:pn(e.durationMs)})]})]})}function xr({selectedModelId:e,setSelectedModelId:n,setSource:t,editorRef:r,prepared:a,preparing:i}){const o=Ms(e).slice(0,5),l=d=>{n(d.target.value)};return s.jsxs("div",{className:"command-shelf",children:[s.jsxs("div",{className:"command-shelf-head",children:[s.jsxs("label",{className:"model-picker",children:[s.jsx("span",{children:"Model"}),s.jsx("select",{value:e,onChange:l,children:K.map(d=>s.jsx("option",{value:d.id,children:d.title},d.id))})]}),s.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),s.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(d=>s.jsxs("article",{className:"command-chip",children:[s.jsxs("div",{children:[s.jsx("strong",{children:d.label}),s.jsx("span",{children:Ir(d.source)})]}),s.jsxs("div",{className:"command-actions",children:[s.jsx("button",{type:"button",title:`Insert ${d.label} at the cursor`,onClick:()=>Cr(d.source,t,r),children:"Insert"}),s.jsx("button",{type:"button",title:`Append ${d.label} below the current editor text`,onClick:()=>Lr(d.source,t,r),children:"Append"})]})]},d.label))})]})}function br({models:e,activeHandle:n,preparedModelIds:t}){const r=n?e.find(a=>a.handle===n):null;return s.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:r.name})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"id"}),s.jsx("dd",{children:r.id})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"handle"}),s.jsx("dd",{children:r.handle})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"layers"}),s.jsx("dd",{children:r.layers})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:r.parameters})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"size"}),s.jsx("dd",{children:Hr(r.bytes||0)})]})]})]},r.handle||r.id):s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:"none yet"})]}),s.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),s.jsxs("div",{className:"catalog-note",children:[K.length," static catalog models are available. ",t.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function wr({value:e,trace:n,traceSection:t}){const r=Vr(e),a=_e(t);return s.jsxs("section",{className:"projection-card",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Projection"}),s.jsx("strong",{children:r.renderer}),s.jsx("p",{children:r.reason})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"Rasa view"}),s.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Capability"}),s.jsx("dd",{children:n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Core traces"}),s.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Status"}),s.jsx("dd",{children:n?.status||"waiting"})]})]})]})}function jr({traceSection:e,providerTrace:n,fixture:t=!1}){const r=_e(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return s.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[s.jsxs("div",{className:"boundary-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Rasa boundary"}),s.jsx("strong",{children:r.empty?"Waiting for admitted host evidence":t?"Visual fixture replay":`Live Wasm ${r.scope} evidence`}),t&&s.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),s.jsxs("span",{children:[r.traces," traces"]})]}),s.jsxs("div",{className:"boundary-path",children:[s.jsx(Qe,{title:"Rasa form",value:ge(a[0])||"source expression"}),s.jsx(Qe,{title:"Canonical identity",value:ye(a[0])||P(n)||"package/export"}),s.jsx(Qe,{title:"Browser provider",value:n?.status?n.status:"waiting"})]}),s.jsxs("details",{className:"trace-section",open:!0,children:[s.jsx("summary",{children:"Admitted host calls"}),s.jsx("div",{className:"trace-list",children:a.length?a.map(i=>s.jsx(vr,{request:i},i["call-id"])):s.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),s.jsx(kr,{trace:n}),s.jsx(ut,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Qe({title:e,value:n}){return s.jsxs("article",{children:[s.jsx("span",{children:e}),s.jsx("strong",{children:n})]})}function vr({request:e}){return s.jsxs("article",{className:"host-request-card",children:[s.jsxs("div",{children:[s.jsxs("span",{children:["call ",e["call-id"]??"?"]}),s.jsx("strong",{children:ye(e)})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"source"}),s.jsx("dd",{children:ge(e)||"n/a"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"capability"}),s.jsx("dd",{children:In(e.identity?.capability)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"effects"}),s.jsx("dd",{children:(e.admission?.effects||[]).map(In).join(" ")||"none"})]})]})]})}function kr({trace:e}){return s.jsxs("article",{className:"provider-bridge",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Browser bridge"}),s.jsx("strong",{children:P(e)||"waiting"})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"status"}),s.jsx("dd",{children:e?.status||"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"args"}),s.jsx("dd",{children:e?.argsCount??"n/a"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"view"}),s.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),s.jsxs("details",{className:"bridge-details",children:[s.jsx("summary",{children:"Request / response data"}),s.jsx("pre",{children:e?.requestText||"no provider request yet"}),s.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function ut({title:e,value:n,defaultOpen:t=!1}){const r=c.useMemo(()=>Hs(n),[n]),a=c.useMemo(()=>Le(n),[n]),i=r.slice(0,12);return s.jsxs("details",{className:"data-projection",open:t,children:[s.jsxs("summary",{children:[s.jsx("span",{children:e}),s.jsxs("strong",{children:[r.length," node(s)"]})]}),s.jsx("div",{className:"projection-viewer",children:s.jsx(zn,{data:a||{},shouldExpandNode:ct,clickToExpandNode:!0,compactTopLevel:!0,style:{...Fn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>s.jsxs("article",{children:[s.jsx("span",{children:o.label}),s.jsx("strong",{children:o.value||o.kind}),s.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&s.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Compact Rasa data"}),s.jsx("pre",{className:"data-block",children:Ws(n)})]})]})}function Rr({modelManifest:e,modelId:n,compact:t=!1}){const[r,a]=c.useState(null),i=Sr(e,n);return s.jsxs("section",{className:`extension-panel ${t?"compact":""}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Open the extension"}),s.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),s.jsx("div",{className:"extension-assets",children:i.map(o=>s.jsx(Nr,{asset:o,onOpen:()=>a(o)},o.id))}),r&&s.jsx(Er,{asset:r,onClose:()=>a(null)})]})}function Sr(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:lt,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:sr,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Nr({asset:e,onOpen:n}){return s.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[s.jsx("span",{children:e.kind}),s.jsx("strong",{children:e.title}),s.jsx("em",{children:e.description})]})}function Er({asset:e,onClose:n}){return s.jsx(xn,{kind:e.kind,title:e.title,description:e.description,meta:bn(e.text,e.mode),onClose:n,children:s.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"projection-viewer large",children:s.jsx(zn,{data:Le(e.value),shouldExpandNode:ct,clickToExpandNode:!0,compactTopLevel:!0,style:{...Fn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Raw manifest JSON"}),s.jsx(re,{text:e.text,mode:"json",numbered:!0})]})]}):s.jsx(re,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function xn({kind:e,title:n,description:t,meta:r=[],onClose:a,children:i}){const o=c.useId(),l=c.useId(),d=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const m=document.activeElement;return u.current?.focus(),()=>{m?.isConnected&&typeof m.focus=="function"&&m.focus()}},[]),c.useEffect(()=>{const m=x=>{if(x.key==="Escape"){x.preventDefault(),a();return}if(x.key!=="Tab"||!d.current)return;const w=$r(d.current);if(!w.length){x.preventDefault();return}const j=w[0],E=w[w.length-1];d.current.contains(document.activeElement)?x.shiftKey&&document.activeElement===j?(x.preventDefault(),E.focus()):!x.shiftKey&&document.activeElement===E&&(x.preventDefault(),j.focus()):(x.preventDefault(),j.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),s.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":l,children:[s.jsx("div",{className:"asset-modal-backdrop",onClick:a}),s.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[s.jsxs("header",{children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:e}),s.jsx("h2",{id:o,children:n}),s.jsx("p",{id:l,children:t}),r.length>0&&s.jsx("div",{className:"modal-meta",children:r.map(m=>s.jsxs("span",{children:[s.jsx("strong",{children:m.value}),m.label]},m.label))})]}),s.jsx("button",{ref:u,type:"button",onClick:a,children:"Close"})]}),i]})]})}function $r(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function re({text:e,mode:n="rasa",numbered:t=!1}){const r=String(e||"").split(`
`);return s.jsx("pre",{className:`line-code ${t?"numbered":""}`,children:r.map((a,i)=>s.jsxs("span",{className:"code-line",children:[t&&s.jsx("span",{className:"line-number",children:i+1}),s.jsx("code",{children:zr(a||" ",n)})]},i))})}function Tr({value:e,selectedLayer:n}){if(!e)return s.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return s.jsx("pre",{className:"data-block",children:_(e)});if(e.view?.name==="weight-histogram")return s.jsx(Ar,{value:e});if(e.view?.name==="weight-stats")return s.jsx(Mr,{value:e});const t=n?qr(e,n):null;return s.jsxs("div",{className:"inspection-stack",children:[t&&s.jsx(Ae,{layer:t}),Array.isArray(e.layers)&&e.layers.map(r=>s.jsx(Ae,{layer:r},r.id)),Array.isArray(e.layerTable)&&e.layerTable.map(r=>s.jsx(Ae,{layer:r,compact:!0},r.id)),e.layer&&s.jsx(Ae,{layer:e.layer}),s.jsx(mt,{value:e})]})}function Ar({value:e}){const n=e.tensors?.[0],t=Math.max(...(n?.bins||[]).map(r=>r.count),1);return s.jsxs("div",{className:"inspection-stack",children:[s.jsx("h2",{children:e.layer}),s.jsx("div",{className:"histogram",children:(n?.bins||[]).map((r,a)=>s.jsx("div",{style:{height:`${8+r.count/t*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),s.jsx(mt,{value:e})]})}function Mr({value:e}){return s.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:n.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"shape"}),s.jsx("dd",{children:n.shape})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"mean"}),s.jsx("dd",{children:n.mean})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"stddev"}),s.jsx("dd",{children:n.stddev})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"range"}),s.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function mt({value:e}){return s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Returned Rasa data"}),s.jsx("pre",{className:"data-block",children:_(e)})]})}function Ae({layer:e,compact:n=!1}){return s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:e.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"kind"}),s.jsx("dd",{children:e.kind})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"output"}),s.jsx("dd",{children:e.output})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:e.params})]}),!n&&s.jsxs("div",{children:[s.jsx("dt",{children:"bytes"}),s.jsx("dd",{children:e.bytes})]})]})]})}function W({label:e,value:n}){return s.jsxs("article",{className:"metric",children:[s.jsx("span",{children:e}),s.jsx("strong",{children:n})]})}function Cr(e,n,t){const r=t.current;if(!r){n(i=>pt(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function Lr(e,n,t){const r=t.current;if(!r){n(l=>pt(l,e));return}const a=r.state.doc.toString(),i=ft(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function pt(e,n){return`${e||""}${ft(e||"",n)}`}function ft(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}function Ir(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}async function Bn(){const e=await Promise.all(K.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(t=>t.json())]));return Object.fromEntries(e)}function Or(e){const n=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((t,r)=>({id:`${e.layerTable[r].id}->${t.id}`,source:e.layerTable[r].id,target:t.id}))}:{nodes:[],edges:[]}}function qr(e,n){return e?.layerTable?.find(t=>t.id===n)||e?.layers?.find(t=>t.id===n)}function Ie(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function Br(e){return e.value!==void 0?`=>
${fe(e.value)}`:String(e.result||"=> nil")}function _r(e){const n=String(e||""),t=n.split(`
`).map(r=>r.trimEnd()).filter(Boolean);return t.length<=2?n:`${t.slice(0,2).join(`
`)}
...`}function Pr(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function zr(e,n){const t=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=t.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(s.jsx("span",{className:`tok ${Fr(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function Fr(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function bn(e,n="code"){const t=String(e||""),r=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:t?t.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(t).length},{label:"viewer",value:r}]}function en(e){return e?`=> ${_(e)}`:"=> nil"}async function _n(e,n,t,r){return t.lastValue=null,t.lastTrace=null,t.pendingAssetModel=null,await e.evaluateSessionAsync(n,r,mn)}function Pn(e,n){let t=null;try{t=yn(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const r=t?.status?.name,a=t?.eval?.status?.name;if(r!=="ok"||t.eval&&a!=="ok"){const i=t?.eval?.message||t?.eval?.["rendered-error"]||t?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function Ur(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function Dr(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function P(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function ye(e){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function ge(e){return e?.source?.symbol?.name||null}function Vr(e){const n=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Hr(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function pn(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function L(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function A(e){return Math.max(0,L()-e)}Et.createRoot(document.getElementById("root")).render(s.jsx(ar,{}));
