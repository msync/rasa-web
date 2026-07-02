import{j as r,r as c,b as Et,J as zn,d as Fn}from"./react.js";import{i as $t,B as Tt,C as At}from"./graph.js";import{S as Un,k as Mt,E as ee,a as vn,l as Ct,d as Lt,b as Dn,D as en}from"./editor.js";import{l as Ot}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Vn="wasm-component",It="browser-component-adapter-pending",Hn="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.",qt="rasa-component/",Wn="rasa:runtime/host",Bt="rasa:runtime/host@0.1.0",_t="rasa:runtime/session@0.1.0",Kn=1,Gn=2,Jn=4,Yn=8,Xn=16,Pt=Kn|Gn|Jn|Yn|Xn,zt=256;class Ft extends Error{constructor(n=Hn){super(n),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=Vn,this.unavailableReason=It}}class kn extends Error{constructor(n){super(n),this.name="RasaBrowserHostCallError"}}class pn{static async load(n,t={}){const s=Sn(n),a=t.readBytes||Gt,i=await a(s,"Rasa runtime component"),o=Sn(t.adapterBaseUrl||qt,s),d=await import(new URL("ras-runtime.js",o).href),u=Dt(t.host),m=new Map,x=await d.instantiate(async w=>{const j=new URL(w,o),N=m.get(j.href);if(N)return N;const xe=await a(j,`Rasa component core module ${w}`),z=await WebAssembly.compile(xe);return m.set(j.href,z),z},u);return new pn({url:s.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:u,session:x.session||x[_t]})}constructor(n={}){if(!n.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=n.url??null,this.adapterBaseUrl=n.adapterBaseUrl??null,this.byteLength=n.byteLength??null,this.available=!0,this.runtimeKind=Vn,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=n.session,this.importObject=n.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new Ft(this.message)}evaluate(n,t=null){return this.session.evalSource(q(n),Ee(t))}inspect(n,t=null){const s=this.session.inspectSource(q(n),Ee(t));return Rn(s,"inspection artifact")}syntaxTokens(n){const t=this.session.syntaxTokens(q(n));return Rn(t,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(n){n!=null&&this.session.sessionFree(n)}loadPackage(n,t){return this.session.sessionLoadPackage(n,Ae(t))}async loadPackageAsync(n,t){return await this.loadPackage(n,t)}evaluateSession(n,t,s=null){return this.session.sessionEval(n,q(t),Ee(s))}async evaluateSessionAsync(n,t,s=null){return await this.evaluateSession(n,t,s)}evaluateReplSession(n,t,s=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(n,q(t),Ee(s))}async evaluateReplSessionAsync(n,t,s=null){return await this.evaluateReplSession(n,t,s)}}function q(e){return new TextEncoder().encode(String(e??""))}function Ut(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function Dt(e=null){const n={[Wn]:Vt(e),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new Nn},"wasi:cli/stdout":{getStdout:()=>new Ke},"wasi:cli/stderr":{getStderr:()=>new Ke},"wasi:cli/terminal-input":{TerminalInput:Yt},"wasi:cli/terminal-output":{TerminalOutput:Xt},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new nn},"wasi:io/error":{Error:Jt},"wasi:io/poll":{Pollable:nn,poll:()=>[]},"wasi:io/streams":{InputStream:Nn,OutputStream:Ke},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return Wt(n)}function Vt(e){return{call(n){if(!e)throw new kn("no browser host provider is registered");if(typeof e.callBytes=="function")return Ht(e.callBytes(n));if(typeof e.call=="function"){const t=e.call(Ut(n));return Zn(t)?t.then(s=>q(s)):q(t)}throw new kn("browser host provider does not implement call")}}}function Ht(e){return Zn(e)?e.then(n=>Ae(n)):Ae(e)}function Wt(e){return{...e,[Bt]:e[Wn],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function Ee(e){if(typeof e=="number")return e;let n=Pt;return e?.phases&&e.phases!=="all"&&(n=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((s,a)=>s|Kt(a),0)),e?.traces&&(n|=zt),n}function Kt(e){switch(String(e)){case"reader":return Kn;case"analysis":case"analyze":return Gn;case"ir":return Jn;case"facts":return Yn;case"eval":return Xn;default:return 0}}function Rn(e,n){try{return JSON.parse(e)}catch(t){throw new Error(`failed to parse ${n}: ${t.message}`)}}function Ae(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):q(e)}async function Gt(e,n){const t=await fetch(e);if(!t.ok)throw new Error(`failed to load ${n}: ${t.status}`);return Ae(await t.arrayBuffer())}function Sn(e,n=null){return new URL(String(e),n||globalThis.location?.href||import.meta.url)}function Zn(e){return e&&typeof e.then=="function"}class Jt{}class nn{block(){}}class Nn{}class Ke{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new nn}}class Yt{}class Xt{}const Zt=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),Qn=Un.define();Un.define();function Qt(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}function er({parent:e,doc:n="",onChange:t=null,onRun:s=null,readOnly:a=!1,liveLexicalHighlight:i=!1,extensions:o=[]}={}){if(!e)throw new Error("mountRasaCodeEditor requires a parent element");const l=s?Mt.of(Qt(s)):[],d=i?ir():ar();return new ee({parent:e,state:vn.create({doc:n,extensions:[Ct(),Lt(),ee.lineWrapping,d,l,ee.editable.of(!a),vn.readOnly.of(a),ee.updateListener.of(u=>{u.docChanged&&t?.(u.state.doc.toString(),u)}),...o]})})}function nr(e){return Zt[e]??"rasa-token-unknown"}function En(e){const n=String(e),t=[];let s=0;for(;s<n.length;){const a=n[s];if(/\s/.test(a)){s+=1;continue}if("()[]{}".includes(a)){t.push(O(n,"delimiter",s,s+1)),s+=1;continue}if(a===";"){const l=sr(n,s);t.push(O(n,"comment",s,l)),s=l;continue}if(a==='"'){const l=rr(n,s);t.push(O(n,"string",s,l)),s=l;continue}if(a==="^"){t.push(O(n,"reader-macro",s,s+1));const l=s+1;if(l<n.length&&!/[\s()[\]{}]/.test(n[l])){const d=Ge(n,l);t.push(O(n,"metadata",l,d)),s=d}else s+=1;continue}if(a==="'"||a==="`"||a==="~"||a==="@"){t.push(O(n,"reader-macro",s,s+1)),s+=1;continue}if(a==="\\"){const l=Ge(n,s);t.push(O(n,"character",s,l)),s=l;continue}const i=Ge(n,s),o=n.slice(s,i);t.push(O(n,tr(o),s,i)),s=i}return t}function tr(e){return e==="nil"?"nil":e==="true"||e==="false"?"boolean":e.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(e)?"number":"symbol"}function O(e,n,t,s){return{kind:n,start:Tn(e,t),end:Tn(e,s)}}function Ge(e,n){let t=n;for(;t<e.length&&!/[\s()[\]{}]/.test(e[t]);)t+=1;return t}function rr(e,n){let t=!1;for(let s=n+1;s<e.length;s+=1){const a=e[s];if(t)t=!1;else if(a==="\\")t=!0;else if(a==='"')return s+1}return e.length}function sr(e,n){const t=e.indexOf(`
`,n);return t<0?e.length:t}function pe(e,n){const t=typeof n=="string"?n:"",s=typeof n=="number"?n:t.length,a=lr(e,t||s).map(i=>en.mark({class:nr(i.kind)}).range(i.start,i.end));return en.set(a,!0)}function ar(e=[]){return[Dn.define({create(t){return pe(e,t.doc.toString())},update(t,s){for(const a of s.effects)if(a.is(Qn))return pe(a.value,s.state.doc.toString());return s.docChanged?en.none:t.map(s.changes)},provide:t=>ee.decorations.from(t)})]}function ir(){return[Dn.define({create(n){return pe(En(n.doc.toString()),n.doc.toString())},update(n,t){for(const s of t.effects)if(s.is(Qn))return pe(s.value,t.state.doc.toString());return t.docChanged?pe(En(t.state.doc.toString()),t.state.doc.toString()):n.map(t.changes)},provide:n=>ee.decorations.from(n)})]}function or(e,n,t){const s=String(e),a=rn(n),i=Math.max(a,rn(t));return{start:$n(s,a),end:$n(s,i)}}function $n(e,n){const t=String(e),s=rn(n);let a=0,i=0;for(const o of t){const l=a+et(o);if(l>s||(a=l,i+=o.length,a===s))return i}return t.length}function Tn(e,n){const t=String(e),s=tn(n,t.length);let a=0;for(let i=0;i<s;){const o=t.codePointAt(i),l=String.fromCodePoint(o);a+=et(l),i+=l.length}return a}function lr(e,n){const t=typeof n=="number"?n:String(n).length;return[...e].map(s=>{const a=typeof n=="number"?{start:tn(s.start,t),end:tn(s.end,t)}:or(n,s.start,s.end);return{kind:String(s.kind),start:a.start,end:a.end}}).filter(s=>s.start<s.end).sort((s,a)=>s.start-a.start||s.end-a.end)}function tn(e,n){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(n,Math.trunc(t))):0}function rn(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,Math.trunc(n)):0}function et(e){const n=e.codePointAt(0);return n<=127?1:n<=2047?2:n<=65535?3:4}const dr=`
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
`,An=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),nt="rasa.theme",cr=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});cr.dark;function ur(e=document.documentElement){const n=localStorage.getItem(nt),t=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return tt(t,e),t}function tt(e,n=document.documentElement){const t=e==="light"?"light":"dark";return n.dataset.rasaTheme=t,n.setAttribute("data-theme",t),localStorage.setItem(nt,t),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:t}})),t}function mr(e=document.documentElement){return tt(e.dataset.rasaTheme==="light"?"dark":"light",e)}function Mn(e){return e==="light"?"Dark":"Light"}const B=Object.freeze({classes:Object.freeze({phaseRoute:"rasa-phase-route",phaseNode:"rasa-phase-node",projectionLegend:"rasa-projection-legend",projectionChip:"rasa-projection-chip",projectionEmpty:"rasa-projection-empty",boundaryRoute:"rasa-boundary-route",boundaryStep:"rasa-boundary-step",visualSlot:"rasa-visual-slot"}),attrs:Object.freeze({phaseId:"data-phase-id",tone:"data-tone",status:"data-status",projectionLayer:"data-layer",boundaryTone:"data-tone",visualSlot:"data-visual-slot",slotStatus:"data-slot-status",slotCount:"data-slot-count",slotMeta:"data-slot-meta"})});function fn(e,n={}){const t=typeof e=="string"?{id:e}:e||{};return{[B.attrs.visualSlot]:t.id||"",[B.attrs.slotStatus]:t.status||n.status||"",[B.attrs.slotCount]:String(t.count??n.count??0),[B.attrs.slotMeta]:t.meta||n.meta||""}}const pr=`
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
`,rt=Object.freeze([$("reader","Read","Primary reader syntax tree","reader","source-tree"),$("expand","Expand","Expanded syntax and macro boundary","expand","source-tree"),$("analyzer","Analyze","Bindings, calls, and analyzer diagnostics","analysis","primary-lowering"),$("ir","IR","Backend-independent executable tree","ir","primary-lowering"),$("facts","Facts","Node-keyed sidecar evidence","facts","sidecar"),$("checks","Checks","Type and boundary checks","checks","sidecar"),$("plan","Plan","Lane decisions and rejected candidates","plan","plan"),$("explain","Explain","Human-oriented compiler projection","explain","projection"),$("eval","Eval","Runtime value observation","eval","runtime"),$("wasm","Wasm","Component runtime product","wasm","runtime")]);Object.freeze(rt.map(e=>e.id));function fr(){return rt.map(e=>({id:e.id,label:e.label,status:"waiting",groups:0,diagnostics:0,tone:e.tone,role:e.role,description:e.description}))}function $(e,n,t,s,a){return Object.freeze({id:e,label:n,description:t,tone:s,role:a})}function he(e){return e==null?"nil":Oe(e)?`:${e.name}`:Ie(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(he).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,t])=>`:${n} ${he(t)}`).join(" ")}}`:String(e)}function sn(e,n=0){if(e==null||typeof e!="object"||Oe(e)||Ie(e))return he(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(l=>`${i}${sn(l,n+2)}`).join(`
`)}
${o}]`}const t=Object.entries(e);if(t.length===0)return"{}";const s=" ".repeat(n+2),a=" ".repeat(n);return`{
${t.map(([i,o])=>`${s}:${i} ${sn(o,n+2)}`).join(`
`)}
${a}}`}function hr(e,n=""){return Oe(e)||Ie(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function Oe(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Ie(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function yr(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Oe(e)&&!Ie(e)?Object.keys(e).length:0}const gr=Object.freeze([I("source-editor","Source editor","CodeMirror","Rasa forms and source spans",10),I("phase-route","Compiler route","PhaseRoute","Reader through runtime phase status",20),I("projection-legend","Projection legend","ProjectionLegend","Grouped phase-neutral projection layers",30),I("boundary-route","Host boundary","BoundaryRoute","Admitted capability request and returned value",40),I("graph-canvas","Graph canvas","ReactFlow","Structured graph records returned by Rasa",50),I("value-inspector","Value inspector","DataView","Foldable Rasa data and returned values",60),I("transcript","Session transcript","Transcript","Append-only session input and returned data",70),I("diagnostics","Diagnostics","DiagnosticCards","Structured blockers and conservative evidence",80)]);function st({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:s={}}={}){const a=new Set(n),i=new Map(e.map(o=>[o.id,o]));return fr().map(o=>{const l=i.get(o.id)||{},d=l.status||s[o.id]||o.status;return{...o,...l,status:d,active:!!(l.active||a.has(o.id)),meta:l.meta||t[o.id]||kr(d,l)}})}function xr(e={}){return gr.map(n=>{const t=e[n.id]||{},s=Number(t.count||0),a=!!(t.present||s>0);return{...n,present:a,status:t.status||(a?"ready":"waiting"),count:s,meta:t.meta||""}})}function br({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,summary:s={}}={}){const a=!s.empty,i=!!n?.status,o=!!(t?.view||t?.status==="ok"||e),l=a||o?at:["wasm"];return st({activePhaseIds:l,metaById:{reader:o||a?"source":"ready",expand:o||a?"source":"ready",analyzer:o||a?"artifact":"ready",ir:o||a?"artifact":"ready",facts:o||a?"artifact":"ready",checks:o||a?"artifact":"ready",plan:a?`${s.requests||0} host`:"admission",explain:e?"fixture":a?"trace":"view",eval:o?t?.view?`:${t.view}`:"value":"session",wasm:i?"component":"loaded"},statusById:vr(l,"ok")})}function wr({fixture:e=!1,providerTrace:n=null,runMetrics:t=null,summary:s={},sourceTitle:a="",identityTitle:i="",capabilityTitle:o=""}={}){return[{label:e?"Replay form":"Rasa source",title:a||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:i||o||"waiting",detail:`${Number(s.requests||0)} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"browser provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:t?.view?`:${t.view}`:"Rasa value",detail:t?.totalMs!==void 0?`${Rr(t.totalMs)}`:"structured data",tone:"return"}]}function jr({graph:e={},value:n=null,summary:t={},transcript:s=[],runMetrics:a=null,runtimeState:i={}}={}){const o=Array.isArray(e.nodes)?e.nodes.length:0,l=Array.isArray(s)?s.length:0,d=Number(t.requests||0),u=!!n,m=i.available!==!1;return{slots:xr({"source-editor":{present:!0,status:m?"ready":"pending",meta:m?"session input":"adapter pending"},"phase-route":{present:!0,count:at.length,meta:m?"runtime path":"pending runtime"},"boundary-route":{present:!0,status:d?"ready":m?"waiting":"pending",count:d,meta:d?`${d} host request${d===1?"":"s"}`:""},"graph-canvas":{present:!0,status:o?"ready":u?"empty":"waiting",count:o,meta:o?`${o} layer${o===1?"":"s"}`:""},"value-inspector":{present:u,status:a?.status||(u?"ready":"waiting"),meta:n?.view?.name?`:${n.view.name}`:""},transcript:{present:!0,count:l,meta:l?`${l} entr${l===1?"y":"ies"}`:"waiting"}})}}const at=Object.freeze(["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"]);function vr(e,n){return Object.fromEntries(e.map(t=>[t,n]))}function kr(e,n={}){return n.groups?`${n.groups} group${n.groups===1?"":"s"}`:n.diagnostics?`${n.diagnostics} diagnostic${n.diagnostics===1?"":"s"}`:e||"waiting"}function I(e,n,t,s,a){return Object.freeze({id:e,label:n,component:t,description:s,priority:a})}function Rr(e){const n=Number(e||0);return n<10?`${n.toFixed(1)} ms`:`${Math.round(n)} ms`}function Sr({phases:e=[],activePhaseIds:n=[],metaById:t={},statusById:s={},className:a="",ariaLabel:i="Rasa phase route"}){const o=st({phases:e,activePhaseIds:n,metaById:t,statusById:s}),l=B.classes,d=B.attrs;return r.jsx("div",{className:`${l.phaseRoute} ${l.visualSlot} ${a}`.trim(),"aria-label":i,...fn({id:"phase-route",status:"ready",count:o.filter(u=>u.active).length}),children:o.map(u=>c.createElement("span",{className:`${l.phaseNode} ${u.active?"active":""}`,[d.phaseId]:u.id,[d.tone]:u.tone,[d.status]:u.status,key:u.id,title:u.description},r.jsx("strong",{children:u.label}),r.jsx("em",{children:u.meta})))})}function Nr({steps:e=[],className:n="",ariaLabel:t="Rasa boundary route"}){const s=B.classes,a=B.attrs;return r.jsx("div",{className:`${s.boundaryRoute} ${s.visualSlot} ${n}`.trim(),"aria-label":t,...fn({id:"boundary-route",status:e.length?"ready":"waiting",count:e.length}),children:e.map(i=>c.createElement("article",{className:s.boundaryStep,[a.boundaryTone]:i.tone||"",key:i.label},r.jsx("span",{children:i.label}),r.jsx("strong",{children:i.title}),r.jsx("em",{children:i.detail})))})}const K=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function te(e){return K.find(n=>n.id===e)||K[0]}const Me="tiny-cnn",$e=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Er=`(def m (model/load-model :${Me}))
(model/summary m)`;function $r(e=Me){const n=te(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class Tr{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,t){const s=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(s,{kind:n,value:t}),s}get(n,t=null){const s=this.resources.get(n);if(!s)throw new Error(`unknown resource handle ${n}`);if(t&&s.kind!==t)throw new Error(`resource ${n} has kind ${s.kind}, expected ${t}`);return s.value}}class Ar extends Error{constructor(n,t,s={}){super(t),this.name="BrowserCapabilityError",this.kind=n,this.data=s}}class Mr{constructor(){this.handlers=new Map}register(n,t,s){return this.handlers.set(an(n,t),s),this}invoke(n,t,s){const a=an(n,t),i=this.handlers.get(a);if(!i)throw new Ar("adapter-missing",`browser capability adapter is missing for ${a}`,{packageName:n,exportName:t});return i(s)}entries(){return[...this.handlers.keys()]}}function an(e,n){return`${e}/${n}`}function hn(e){return new Or(e).parse()}function _(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):qe(e)?`:${e.name}`:yn(e)?e.name:it(e)?`(${e.items.map(_).join(" ")})`:Array.isArray(e)?`[${e.map(_).join(" ")}]`:`{${Object.entries(e).map(([n,t])=>`:${n} ${_(t)}`).join(" ")}}`}function fe(e,n=0){if(e==null||typeof e!="object"||qe(e)||yn(e))return _(e);const t=" ".repeat(n+2),s=" ".repeat(n);if(it(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${t}${fe(i,n+2)}`).join(`
`)}
${s})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${t}${fe(i,n+2)}`).join(`
`)}
${s}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${t}:${i} ${fe(o,n+2)}`).join(`
`)}
${s}}`}function Cr(e){return{type:"keyword",name:e}}function Lr(e){return{type:"symbol",name:e}}function qe(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function yn(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function it(e){return!!(e&&typeof e=="object"&&e.type==="list")}class Or{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==="("?this.list():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const t=this.form(),s=this.form();n[Ir(t)]=s}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}list(){this.expect("(");const n=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:n};n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const t=this.text[this.index++];if(t==='"')return n;if(t==="\\"){const s=this.text[this.index++];n+=s==="n"?`
`:s}else n+=t}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const t=this.text.slice(n,this.index);if(!t)throw new Error(`expected form at byte ${this.index}`);return t==="nil"?null:t==="true"?!0:t==="false"?!1:/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith(":")?Cr(t.slice(1)):Lr(t)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function Ir(e){return qe(e)||yn(e)?e.name:String(e)}const Je=Object.freeze(Object.fromEntries(K.map(e=>[e.id,`./models/${e.id}/model.json`])));class Ye extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class qr{constructor(){this.resources=new Tr("browser"),this.registry=Br(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const t=hn(n);this.lastTrace={requestText:n,request:t,responseText:"",packageName:t.package?.name||"unknown",exportName:t.export?.name||"unknown"};const s=this.route(t),a=_(s);return this.lastTrace.responseText=a,a}route(n){try{const t=n.package?.name,s=n.export?.name,a=n.args||[],i=this.invoke(t,s,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:t,exportName:s,capability:an(t,s),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(t){const s=t instanceof Ye?{status:y("failed"),kind:y("asset-not-prepared"),model:y(t.modelId),recoverable:!0,message:t.message}:{status:y("failed"),kind:y("provider-error"),message:t.message};return t instanceof Ye&&(this.pendingAssetModel=t.modelId),this.lastValue=s,this.lastTrace={...this.lastTrace||{},status:"failed",error:t.message},s}}invoke(n,t,s){return this.registry.invoke(n,t,s)}loadNamedModel(n){if(!Je[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new Ye(n);if(!this.modelIds.has(n)){const t=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,t)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!Je[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const t=await Ot(Je[n]);return this.catalog.set(n,t),t}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,t])=>{const s=this.summary(t);return{id:n,handle:t,name:s.model,layers:s.layers,parameters:s.parameters,trainableParameters:s.trainableParameters,bytes:s.bytes,inputs:s.inputs,outputs:s.outputs}})}summary(n){const t=this.model(n),s=t.layers.map(Q);return{view:y("model-summary"),model:t.name,handle:n,layers:s.length,parameters:ne(s.map(a=>a.params)),trainableParameters:ne(s.map(a=>a.trainableParams)),bytes:ne(s.map(a=>a.bytes)),inputs:re(t.inputs?.[0]?.shape),outputs:re(t.outputs?.[0]?.shape),graph:Cn(t),layerTable:s}}graph(n){return{view:y("graph"),graph:Cn(this.model(n))}}layerCount(n){const t=this.model(n);return{view:y("numeric-aggregate"),label:"layer count",value:t.layers.length,unit:y("layers"),model:t.name,handle:n}}layersByKind(n,t){const s=this.model(n).layers.map(Q).filter(a=>a.kind===t);return{view:y("layers-by-kind"),kind:y(t),count:s.length,layers:s}}topLayers(n,t){const s=Number(t.limit||5),i=on(t.by||y("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(Q).sort((l,d)=>d[i]-l[i]).slice(0,s);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(n,t){const s=this.layerByName(n,t);return{view:y("layer-inspection"),layer:Q(s),config:zr(s.getConfig()),weights:s.weights.map(ot)}}layerTensorSize(n,t){const{layer:s,index:a}=this.layerByRef(n,t),i=Q(s,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,t){const s=this.layerByName(n,t);return{view:y("weight-stats"),layer:s.name,tensors:s.getWeights().map((a,i)=>_r(s.weights[i],a))}}weightHistogram(n,t,s){const a=this.layerByName(n,t),i=Number(s.bins||24),o=a.getWeights().map((l,d)=>({name:a.weights[d]?.originalName||`weight_${d}`,bins:Pr(Array.from(l.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,t){const s=this.model(n).layers.find(a=>a.name===t);if(!s)throw new Error(`unknown layer ${t}`);return s}layerByRef(n,t){const s=this.model(n);if(typeof t=="number"){const o=Math.trunc(t)-1,l=s.layers[o];if(!l)throw new Error(`unknown layer index ${t}`);return{layer:l,index:o}}const a=String(t),i=s.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:s.layers[i],index:i}}}function Br(e){return new Mr().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(on(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,t])=>e.layersByKind(n,on(t))).register("demo.tfjs/layers","top",([n,t={}])=>e.topLayers(n,t)).register("demo.tfjs/layer","inspect",([n,t])=>e.inspectLayer(n,t)).register("demo.tfjs/layer","tensor-size",([n,t])=>e.layerTensorSize(n,t)).register("demo.tfjs/weights","stats",([n,t])=>e.weightStats(n,t)).register("demo.tfjs/weights","histogram",([n,t,s={}])=>e.weightHistogram(n,t,s))}function Q(e,n=null){const t=e.weights.map(ot);return{id:e.name,index:n??Fr(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:re(e.inputShape),output:re(e.outputShape),params:ne(t.map(s=>s.params)),trainableParams:ne(t.filter(s=>s.trainable).map(s=>s.params)),bytes:ne(t.map(s=>s.bytes))}}function Cn(e){const n=e.layers.map((t,s)=>({...Q(t,s),index:s}));return{nodes:n,edges:n.slice(1).map((t,s)=>({id:`${n[s].id}->${t.id}`,source:n[s].id,target:t.id}))}}function ot(e){const n=e.shape.reduce((t,s)=>t*s,1);return{name:e.originalName,shape:re(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function _r(e,n){const t=Array.from(n.dataSync()),s=t.length,a=Math.min(...t),i=Math.max(...t),o=t.reduce((u,m)=>u+m,0)/s,l=t.reduce((u,m)=>u+(m-o)**2,0)/s,d=t.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:re(n.shape),params:s,min:H(a),max:H(i),mean:H(o),stddev:H(Math.sqrt(l)),sparsity:H(d/s)}}function Pr(e,n){const t=Math.min(...e),s=Math.max(...e),a=s===t?1:(s-t)/n,i=Array.from({length:n},(o,l)=>({start:H(t+l*a),end:H(t+(l+1)*a),count:0}));for(const o of e){const l=Math.min(n-1,Math.max(0,Math.floor((o-t)/a)));i[l].count+=1}return i}function zr(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(t=>e[t]!==void 0).map(t=>[t,e[t]]))}function on(e){return qe(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function re(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(Ln).join(" x "):e.map(Ln).join(" x "):"?"}function Ln(e){return e==null?"*":String(e)}function ne(e){return e.reduce((n,t)=>n+t,0)}function H(e){return String(Math.round(e*1e5)/1e5)}function Fr(e){return Number(e._index??0)}const lt=`{:packages
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
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function Xe(e){if(!e||!e.includes(":traces"))return null;try{return hn(e).traces||null}catch{return null}}function Be(e){const n=Array.isArray(e?.traces)?e.traces:[],t=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:hr(e?.scope,"waiting"),traces:n.length,requests:t.length,empty:n.length===0&&t.length===0}}function Ur(e){const n=[];return ln(e,[],n),n}function On(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:he(e)}function Dr(e){return sn(e)}function Ce(e){return e==null?null:Array.isArray(e)?e.map(Ce):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,t])=>[`:${n}`,Ce(t)])):e}function ln(e,n,t){const s=t.length,a={id:s,path:n,label:Hr(n),kind:Vr(e),value:yr(e)?null:he(e),children:[]};return t.push(a),Array.isArray(e)?e.forEach((i,o)=>{const l=ln(i,[...n,o],t);a.children.push(l)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const l=ln(o,[...n,i],t);a.children.push(l)}),s}function Vr(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function Hr(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),dn=e=>({type:"symbol",name:e});function In(e){const n=Kr(e),t=Gr(e),s=Jr(e);return{source:Wr(e),value:n,providerTrace:t,traceSection:s,runtimeReport:`{:status :ok :traces ${cn(s)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function Wr(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function Kr(e){const n=dt(e),t=n.reduce((a,i)=>a+i.params,0),s=n.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:t,trainableParameters:t,bytes:s,inputs:Yr(e),outputs:Xr(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>Zr(n[i].id,a.id))},layerTable:n}}function Gr(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${dt(e).length}}}`}}function Jr(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[Z(0,"source-form",{symbol:dn("model/load-model"),span:{start:7,end:23}}),Z(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),Z(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[Z(0,"source-form",{symbol:dn("model/summary"),span:{start:31,end:44}}),Z(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),Z(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[qn(0,"demo.tfjs/model","load-model","model/load-model",e.id),qn(1,"demo.tfjs/model","summary","model/summary")]}}function dt(e){switch(e.id){case"tiny-mlp":return[b("feature_input","input","* x 16",0,0),b("hidden_dense","dense","* x 32",544,2176),b("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[b("signal_input","input","* x 32",0,0),b("encoder_dense","dense","* x 12",396,1584),b("bottleneck","dense","* x 4",52,208),b("decoder_dense","dense","* x 12",60,240),b("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[b("token_input","input","* x 8",0,0),b("token_embedding","embedding","* x 8 x 16",1600,6400),b("pool_tokens","global-average-pooling1d","* x 16",0,0),b("projection_dense","dense","* x 8",136,544)];default:return[b("input_image","input","* x 28 x 28 x 1",0,0),b("stem_conv","conv2d","* x 26 x 26 x 8",80,320),b("flatten","flatten","* x 5408",0,0),b("classifier_dense","dense","* x 10",5306,21224)]}}function Yr(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function Xr(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function b(e,n,t,s,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:t,params:s,trainableParams:s,bytes:a}}function Zr(e,n){return{id:`${e}->${n}`,source:e,target:n}}function Z(e,n,t){return{id:e,kind:g(n),subject:null,"source-id":"browser://repl",span:t.span||null,data:t,diagnostics:[],annotations:[],evidence:[]}}function qn(e,n,t,s,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:n,export:t,capability:g(`${n}/${t}`)},source:{symbol:dn(s),model:a?g(a):null},admission:{"call-id":e,identity:{package:n,export:t,capability:g(`${n}/${t}`)},effects:[g("model/read")]},"trace-id":e}}function cn(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(cn).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,t])=>`:${n} ${cn(t)}`).join(" ")}}`}const Qr=`(ns rasa.core)

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
`,es=`import "@tensorflow/tfjs-backend-cpu";
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
`,ns="./ras.wasm",un=Object.freeze({phases:"all",traces:!0}),ct=e=>e<2;function ts(){const e=rs()==="trace",n=c.useRef(null),t=c.useRef(null),s=c.useRef(0),a=c.useRef(null),i=c.useRef(!1),[o,l]=c.useState(Me),[d,u]=c.useState(()=>ur()),[m,x]=c.useState(()=>e?In(te(Me)).source:Er),[w,j]=c.useState("loading"),[N,xe]=c.useState(!1),[z,bn]=c.useState(0),[ht,_e]=c.useState(null),[be,F]=c.useState(null),[Pe,ae]=c.useState(""),[ie,oe]=c.useState(null),[U,le]=c.useState(null),[ze,we]=c.useState([]),[Fe,de]=c.useState([]),[yt,Ue]=c.useState(null),[gt,De]=c.useState({}),[C,je]=c.useState(null),[ve,Ve]=c.useState(null),[ke,wn]=c.useState(null),[xt,bt]=c.useState("boundary"),[He,ce]=c.useState([]),h=c.useMemo(()=>e?In(te(o)):null,[e,o]),ue=w==="component adapter pending";c.useEffect(()=>{const p=f=>u(f.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",p),()=>window.removeEventListener("rasa-theme-change",p)},[]),c.useEffect(()=>{let p=!0;async function f(){try{if(e&&h){if(!p)return;const k=await Bn().catch(()=>({}));if(!p)return;ae(h.runtimeReport),oe(h.providerTrace),le(h.traceSection),we([h.loadedModel]),de([h.loadedModel.id]),De(k),je(h.value),Ve(h.loadedModel.handle),wn(null),_e({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),F({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ce([{id:"setup",kind:"setup",source:$e,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:h.source,result:Qe(h.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:h.value}]),j("ready");return}const D=M(),R=new qr,S=M(),v=await Bn(),G=T(S),J=M(),E=await pn.load(ss(),{host:R}),V=T(J);if(E.available===!1){if(!p)return;t.current=E,De(v),ae(""),oe(null),le(null),we([]),de([]),je(null),Ve(null),_e({manifestMs:G,engineMs:V,setupMs:0,totalMs:T(D)}),F({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),ce([{id:"setup",kind:"setup",source:$e,result:Hn,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),j("component adapter pending");return}const L=E.createSession(),Se=M();await E.loadPackageAsync(L,lt);const Ne=await E.evaluateSessionAsync(L,Qr,un);Pn(Ne,"Rasa core boot");const Y=await E.evaluateSessionAsync(L,$e,un);Pn(Y,"model setup");const We=T(Se);if(!p)return;n.current=R,t.current=E,s.current=L,ae(Y),oe(R.lastTrace),le(Xe(Y)),we(R.loadedModels()),de(R.preparedModelIds()),De(v),_e({manifestMs:G,engineMs:V,setupMs:We,totalMs:T(D)}),ce([{id:"setup",kind:"setup",source:$e,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),j("ready")}catch(D){p&&j(`failed: ${D.message}`)}}return f(),()=>{p=!1,t.current&&s.current&&t.current.freeSession(s.current)}},[e,h]);const wt=c.useCallback(async()=>{if(e&&h){const k=a.current?.state.doc.toString()||m,me=z+1;bn(me),je(h.value),oe(h.providerTrace),le(h.traceSection),ae(h.runtimeReport),F({run:me,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ce(X=>[...X,{id:`run-${X.length}`,kind:"run",source:k,result:Qe(h.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:h.value}]);return}if(ue||t.current?.available===!1){F(k=>({...k||{},status:"pending",view:"component-adapter-pending"}));return}if(!t.current||!s.current||!n.current||i.current)return;i.current=!0,xe(!0),Ue(null);const p=a.current?.state.doc.toString()||m,f=n.current,D=M();let R=Pe,S=null,v=null,G=null,J=null,E=0,V=0,L=0,Se=!1;F({status:"running",assetState:"checking",totalMs:0});try{const k=M();R=await _n(t.current,s.current,f,p),G=Xe(R),V=T(k);const me=zs(f);if(me){const X=me;J=X,Ue(X),F({status:"running",assetState:"fetching",assetModel:J,firstEvalMs:V,totalMs:T(D)});const St=M();await f.prepareModel(X),E=T(St),de(f.preparedModelIds()),f.pendingAssetModel=null;const Nt=M();R=await _n(t.current,s.current,f,p),G=Xe(R),L=T(Nt)}else L=V;S=f.lastValue,v=f.lastTrace}catch(k){Se=!0,S=Ps("asset-load-error",k.message),v={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,xe(!1)}const Ne=T(D),Y=z+1,We={run:Y,status:v?.status||"ok",capability:P(v),view:v?.view||Le(S),assetState:Se?"failed":J?"fetched":"cached",assetModel:J,assetLoadMs:E,firstEvalMs:V,finalEvalMs:L,totalMs:Ne,cacheCount:f.preparedModelIds().length};ae(R),je(S),oe(v),le(G),we(f.loadedModels()),de(f.preparedModelIds()),Ue(null),F(We),S?.handle&&Ve(S.handle),bn(Y),ce(k=>[...k,{id:`run-${k.length}`,kind:"run",source:p,result:Qe(S),capability:P(v),view:v?.view||Le(S),status:v?.status||"ok",durationMs:Ne,value:S}])},[e,h,z,ue,Pe,m,U]),A=c.useMemo(()=>Cs(C),[C]),jt=c.useMemo(()=>ve?ze.find(p=>p.handle===ve):null,[ve,ze]),vt=c.useMemo(()=>A.nodes.map(p=>p.id).join("|")||"empty-graph",[A.nodes]),kt=c.useMemo(()=>A.nodes.map((p,f)=>({id:p.id,position:{x:f*220,y:f%2===0?0:28},data:{label:r.jsxs("div",{className:"node-label",children:[r.jsx("strong",{children:p.name}),r.jsx("span",{children:p.kind}),r.jsxs("em",{children:[p.params," params"]})]}),layer:p},type:"default",className:ke===p.id?"selected-node":""})),[A.nodes,ke]),Rt=c.useMemo(()=>A.edges.map(p=>({...p,animated:!0})),[A.edges]),jn=c.useMemo(()=>jr({graph:A,value:C,summary:Be(U),transcript:He,runMetrics:be,runtimeState:{available:!ue}}),[A,C,U,He,be,ue,w]),Re=c.useCallback(p=>fn(jn.slots.find(f=>f.id===p)||p),[jn]);return r.jsxs("main",{className:"app-shell",children:[r.jsx("style",{children:`${pr}
${dr}`}),r.jsxs("header",{className:"hero",children:[r.jsxs("div",{className:"brand-lockup",children:[r.jsx("img",{src:An.logo,alt:"Rasa"}),r.jsxs("div",{children:[r.jsx("span",{children:"Rasa Model Explorer"}),r.jsx("h1",{children:"Model architecture explorer"}),r.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),r.jsxs("div",{className:"hero-status",children:[r.jsx("img",{src:An.mark,alt:"","aria-hidden":"true"}),r.jsx("span",{className:w==="ready"?"ok":"warn",children:w}),r.jsx("span",{children:"tfjs assets on first run"}),r.jsx("span",{children:"static bundle"}),r.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>u(mr()),"aria-label":`Switch to ${Mn(d).toLowerCase()} theme`,children:Mn(d)})]})]}),r.jsxs("section",{className:"boundary-theater",children:[r.jsx(is,{fixture:e,providerTrace:ie,traceSection:U,runMetrics:be}),r.jsxs("aside",{className:"theater-left",children:[r.jsxs("div",{className:"studio-head",children:[r.jsx("span",{className:"label",children:"Model & extension"}),r.jsx("strong",{children:"What Rasa is allowed to touch"})]}),r.jsx(ys,{models:ze,activeHandle:ve,preparedModelIds:Fe}),r.jsx(js,{modelManifest:gt[o],modelId:o,compact:!0})]}),r.jsxs("section",{className:"theater-stage rasa-visual-slot",...Re("graph-canvas"),children:[r.jsx(os,{value:C,graph:A,runCount:z,selectedModelId:o,preparedModelIds:Fe,running:N,fixture:e}),r.jsxs("div",{className:"graph-wrap graph-theater rasa-visual-slot",...Re("graph-canvas"),children:[ue?r.jsx(as,{}):null,r.jsx(ls,{traceSection:U,providerTrace:ie,value:C,selectedModelId:o,activeModelId:jt?.id||null,running:N}),r.jsxs($t,{nodes:kt,edges:Rt,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(p,f)=>wn(f.id),children:[r.jsx(Tt,{color:"#29313d",gap:18}),r.jsx(At,{showInteractive:!1})]},vt)]}),r.jsx(cs,{traceSection:U,providerTrace:ie,runMetrics:be,bootMetrics:ht})]}),r.jsxs("aside",{className:"theater-inspector rasa-visual-slot",...Re("value-inspector"),children:[r.jsx(ds,{value:C,trace:ie,selectedLayer:ke}),r.jsx(us,{activeTab:xt,setActiveTab:bt,value:C,selectedLayer:ke,trace:ie,traceSection:U,runtimeReport:Pe,fixture:e})]}),r.jsxs("section",{className:"theater-console rasa-visual-slot","aria-label":"Rasa command console",...Re("source-editor"),children:[r.jsx(ps,{entries:He}),r.jsxs("div",{className:"console-command",children:[r.jsx(hs,{selectedModelId:o,setSelectedModelId:l,setSource:x,editorRef:a,prepared:Fe.includes(o),preparing:yt===o}),r.jsx(ms,{source:m,editorRef:a,run:wt,disabled:w!=="ready"||N,running:N})]})]})]})]})}function rs(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function ss(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||ns}function as(){return r.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[r.jsx("span",{className:"label",children:"Wasm component runtime"}),r.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),r.jsxs("p",{children:["Use ",r.jsx("code",{children:"ras"})," or ",r.jsx("code",{children:"ras-wasm"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function is({fixture:e,providerTrace:n,traceSection:t,runMetrics:s}){const a=Array.isArray(t?.["host-requests"])?t["host-requests"]:[],i=a.length?a[a.length-1]:null,o=Be(t),l=br({fixture:e,providerTrace:n,runMetrics:s,summary:o}),d=wr({fixture:e,providerTrace:n,runMetrics:s,summary:o,sourceTitle:ge(i)||"",identityTitle:ye(i)||"",capabilityTitle:P(n)||""});return r.jsxs("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:[r.jsx(Sr,{phases:l,className:"model-phase-route",ariaLabel:"Rasa model explorer phase route"}),r.jsx(Nr,{steps:d,className:"model-boundary-route",ariaLabel:"Host boundary route"})]})}function os({value:e,graph:n,runCount:t,selectedModelId:s,preparedModelIds:a,running:i,fixture:o}){const l=te(s),d=o?"fixture layer records":"live layer records";return r.jsxs("header",{className:"stage-header",children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"Model graph"}),r.jsx("h2",{children:n.nodes.length?`${n.nodes.length} ${d}`:"No model value yet"}),r.jsxs("p",{children:[l.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),r.jsxs("div",{className:"stage-metrics",children:[r.jsx(W,{label:"Run",value:i?"running":t}),r.jsx(W,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),r.jsx(W,{label:"Assets",value:`${a.length}/${K.length}`})]})]})}function ls({traceSection:e,providerTrace:n,value:t,selectedModelId:s,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],l=o.length?o[o.length-1]:null,d=te(s),u=a?te(a):null,m=a&&s!==a,x=i?"Rasa is evaluating the current form.":m?`Editor targets ${d.title}; run it to replace ${u.title}.`:u?`${u.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return r.jsxs("aside",{className:`boundary-spotlight ${m?"pending":""}`,"aria-label":"Current boundary spotlight",children:[r.jsxs("div",{className:"spotlight-flow",children:[r.jsxs("div",{children:[r.jsx("span",{children:"form"}),r.jsx("strong",{children:ge(l)||"waiting for run"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"admitted identity"}),r.jsx("strong",{children:ye(l)||P(n)||"not admitted yet"})]}),r.jsxs("div",{children:[r.jsx("span",{children:"returned value"}),r.jsx("strong",{children:t?.view?.name?`:${t.view.name}`:"none yet"})]})]}),r.jsx("p",{children:x})]})}function ds({value:e,trace:n,selectedLayer:t}){const[s,a]=c.useState(null),i=e?fe(e):"nil";return r.jsxs(r.Fragment,{children:[r.jsxs("article",{className:"value-lens",children:[r.jsx("span",{className:"label",children:"Selected value"}),r.jsx("strong",{children:Le(e)}),r.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),r.jsx(se,{text:qs(i),mode:"rasa"}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"capability"}),r.jsx("dd",{children:P(n)||"waiting"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"selected"}),r.jsx("dd",{children:t||"none"})]})]}),r.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),s&&r.jsx(gn,{kind:"Rasa value",title:Le(e),description:"The real structured value returned to the browser from the Rasa session.",meta:xn(i,"rasa"),onClose:()=>a(null),children:r.jsx("div",{className:"modal-code-stack result-only",children:r.jsxs("section",{className:"result-section",children:[r.jsx("span",{className:"modal-section-label",children:"returned value"}),r.jsx(se,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function cs({traceSection:e,providerTrace:n,runMetrics:t,bootMetrics:s}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return r.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[r.jsx(W,{label:"Host request",value:ge(i)||"waiting"}),r.jsx(W,{label:"Canonical identity",value:ye(i)||P(n)||"waiting"}),r.jsx(W,{label:"Status",value:n?.status||t?.status||"waiting"}),r.jsx(W,{label:"Time",value:t?.totalMs!==void 0?mn(t.totalMs):s?mn(s.totalMs):"pending"})]})}function us({activeTab:e,setActiveTab:n,value:t,selectedLayer:s,trace:a,traceSection:i,runtimeReport:o,fixture:l}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return r.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[r.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(u=>r.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>n(u.id),children:u.label},u.id))}),r.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&r.jsx(xs,{traceSection:i,providerTrace:a,fixture:l}),e==="result"&&r.jsxs(r.Fragment,{children:[r.jsx(gs,{value:t,trace:a,traceSection:i}),r.jsx(Ns,{value:t,selectedLayer:s})]}),e==="data"&&r.jsxs(r.Fragment,{children:[r.jsx(ut,{title:"Returned Rasa value",value:t,defaultOpen:!0}),r.jsxs("details",{className:"runtime-report",children:[r.jsx("summary",{children:"Runtime report"}),r.jsx("pre",{children:o})]})]})]})]})}function ms({source:e,editorRef:n,run:t,disabled:s,running:a}){const i=c.useRef(null),o=c.useRef(t);return c.useEffect(()=>{o.current=t},[t]),c.useEffect(()=>{const l=er({parent:i.current,doc:e,onRun:()=>o.current(),liveLexicalHighlight:!0});return n.current=l,()=>l.destroy()},[]),r.jsxs("div",{className:"editor-panel",children:[r.jsxs("div",{className:"editor-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"Rasa input"}),r.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),r.jsx("span",{children:"Primary+Enter runs"})]}),r.jsx("div",{className:"editor-host",ref:i}),r.jsxs("div",{className:"editor-actions",children:[r.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),r.jsx("button",{className:"run-button",type:"button",onClick:t,disabled:s,children:a?"Running...":"Run"})]})]})}function ps({entries:e}){const n=c.useRef(null),[t,s]=c.useState(null),a=t?Os(t):"";return c.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),r.jsxs(r.Fragment,{children:[r.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:e.length?e.map(i=>r.jsx(fs,{entry:i,onOpenResult:()=>s(i)},i.id)):r.jsxs("article",{className:"transcript-entry",children:[r.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),r.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),t&&r.jsx(gn,{kind:"Rasa value",title:t.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:xn(a,"rasa"),onClose:()=>s(null),children:r.jsxs("div",{className:"modal-code-stack",children:[r.jsxs("section",{className:"form-section",children:[r.jsx("span",{className:"modal-section-label",children:"form"}),r.jsx(se,{text:t.source,mode:"rasa",numbered:!0})]}),r.jsxs("section",{className:"result-section",children:[r.jsx("span",{className:"modal-section-label",children:"result"}),r.jsx(se,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function fs({entry:e,onOpenResult:n}){return r.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[r.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&r.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[r.jsx("pre",{children:Is(e.result)}),r.jsx("span",{children:"Open full value"})]}),r.jsxs("div",{className:"transcript-meta",children:[r.jsx("span",{children:e.capability||"session"}),r.jsx("span",{children:e.view}),r.jsx("span",{children:e.status}),e.durationMs!==void 0&&r.jsx("span",{children:mn(e.durationMs)})]})]})}function hs({selectedModelId:e,setSelectedModelId:n,setSource:t,editorRef:s,prepared:a,preparing:i}){const o=$r(e).slice(0,5),l=d=>{n(d.target.value)};return r.jsxs("div",{className:"command-shelf",children:[r.jsxs("div",{className:"command-shelf-head",children:[r.jsxs("label",{className:"model-picker",children:[r.jsx("span",{children:"Model"}),r.jsx("select",{value:e,onChange:l,children:K.map(d=>r.jsx("option",{value:d.id,children:d.title},d.id))})]}),r.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),r.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(d=>r.jsxs("article",{className:"command-chip",children:[r.jsxs("div",{children:[r.jsx("strong",{children:d.label}),r.jsx("span",{children:Ms(d.source)})]}),r.jsxs("div",{className:"command-actions",children:[r.jsx("button",{type:"button",title:`Insert ${d.label} at the cursor`,onClick:()=>Ts(d.source,t,s),children:"Insert"}),r.jsx("button",{type:"button",title:`Append ${d.label} below the current editor text`,onClick:()=>As(d.source,t,s),children:"Append"})]})]},d.label))})]})}function ys({models:e,activeHandle:n,preparedModelIds:t}){const s=n?e.find(a=>a.handle===n):null;return r.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[s?r.jsxs("article",{className:"active-model",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Active model"}),r.jsx("strong",{children:s.name})]}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"id"}),r.jsx("dd",{children:s.id})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"handle"}),r.jsx("dd",{children:s.handle})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"layers"}),r.jsx("dd",{children:s.layers})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"params"}),r.jsx("dd",{children:s.parameters})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"size"}),r.jsx("dd",{children:Us(s.bytes||0)})]})]})]},s.handle||s.id):r.jsxs("article",{className:"active-model",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Active model"}),r.jsx("strong",{children:"none yet"})]}),r.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),r.jsxs("div",{className:"catalog-note",children:[K.length," static catalog models are available. ",t.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function gs({value:e,trace:n,traceSection:t}){const s=Fs(e),a=Be(t);return r.jsxs("section",{className:"projection-card",children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"Projection"}),r.jsx("strong",{children:s.renderer}),r.jsx("p",{children:s.reason})]}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"Rasa view"}),r.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Capability"}),r.jsx("dd",{children:n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:"waiting"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Core traces"}),r.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Status"}),r.jsx("dd",{children:n?.status||"waiting"})]})]})]})}function xs({traceSection:e,providerTrace:n,fixture:t=!1}){const s=Be(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return r.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[r.jsxs("div",{className:"boundary-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"Rasa boundary"}),r.jsx("strong",{children:s.empty?"Waiting for admitted host evidence":t?"Visual fixture replay":`Live Wasm ${s.scope} evidence`}),t&&r.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),r.jsxs("span",{children:[s.traces," traces"]})]}),r.jsxs("div",{className:"boundary-path",children:[r.jsx(Ze,{title:"Rasa form",value:ge(a[0])||"source expression"}),r.jsx(Ze,{title:"Canonical identity",value:ye(a[0])||P(n)||"package/export"}),r.jsx(Ze,{title:"Browser provider",value:n?.status?n.status:"waiting"})]}),r.jsxs("details",{className:"trace-section",open:!0,children:[r.jsx("summary",{children:"Admitted host calls"}),r.jsx("div",{className:"trace-list",children:a.length?a.map(i=>r.jsx(bs,{request:i},i["call-id"])):r.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),r.jsx(ws,{trace:n}),r.jsx(ut,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Ze({title:e,value:n}){return r.jsxs("article",{children:[r.jsx("span",{children:e}),r.jsx("strong",{children:n})]})}function bs({request:e}){return r.jsxs("article",{className:"host-request-card",children:[r.jsxs("div",{children:[r.jsxs("span",{children:["call ",e["call-id"]??"?"]}),r.jsx("strong",{children:ye(e)})]}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"source"}),r.jsx("dd",{children:ge(e)||"n/a"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"capability"}),r.jsx("dd",{children:On(e.identity?.capability)})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"effects"}),r.jsx("dd",{children:(e.admission?.effects||[]).map(On).join(" ")||"none"})]})]})]})}function ws({trace:e}){return r.jsxs("article",{className:"provider-bridge",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Browser bridge"}),r.jsx("strong",{children:P(e)||"waiting"})]}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"status"}),r.jsx("dd",{children:e?.status||"waiting"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"args"}),r.jsx("dd",{children:e?.argsCount??"n/a"})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"view"}),r.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),r.jsxs("details",{className:"bridge-details",children:[r.jsx("summary",{children:"Request / response data"}),r.jsx("pre",{children:e?.requestText||"no provider request yet"}),r.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function ut({title:e,value:n,defaultOpen:t=!1}){const s=c.useMemo(()=>Ur(n),[n]),a=c.useMemo(()=>Ce(n),[n]),i=s.slice(0,12);return r.jsxs("details",{className:"data-projection",open:t,children:[r.jsxs("summary",{children:[r.jsx("span",{children:e}),r.jsxs("strong",{children:[s.length," node(s)"]})]}),r.jsx("div",{className:"projection-viewer",children:r.jsx(zn,{data:a||{},shouldExpandNode:ct,clickToExpandNode:!0,compactTopLevel:!0,style:{...Fn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),r.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>r.jsxs("article",{children:[r.jsx("span",{children:o.label}),r.jsx("strong",{children:o.value||o.kind}),r.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),s.length>i.length&&r.jsxs("p",{className:"projection-more",children:[s.length-i.length," more node(s) folded in compact Rasa data below."]}),r.jsxs("details",{className:"data-details",children:[r.jsx("summary",{children:"Compact Rasa data"}),r.jsx("pre",{className:"data-block",children:Dr(n)})]})]})}function js({modelManifest:e,modelId:n,compact:t=!1}){const[s,a]=c.useState(null),i=vs(e,n);return r.jsxs("section",{className:`extension-panel ${t?"compact":""}`,children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"Open the extension"}),r.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),r.jsx("div",{className:"extension-assets",children:i.map(o=>r.jsx(ks,{asset:o,onOpen:()=>a(o)},o.id))}),s&&r.jsx(Rs,{asset:s,onClose:()=>a(null)})]})}function vs(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:lt,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:es,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function ks({asset:e,onOpen:n}){return r.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[r.jsx("span",{children:e.kind}),r.jsx("strong",{children:e.title}),r.jsx("em",{children:e.description})]})}function Rs({asset:e,onClose:n}){return r.jsx(gn,{kind:e.kind,title:e.title,description:e.description,meta:xn(e.text,e.mode),onClose:n,children:r.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"projection-viewer large",children:r.jsx(zn,{data:Ce(e.value),shouldExpandNode:ct,clickToExpandNode:!0,compactTopLevel:!0,style:{...Fn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),r.jsxs("details",{className:"data-details",children:[r.jsx("summary",{children:"Raw manifest JSON"}),r.jsx(se,{text:e.text,mode:"json",numbered:!0})]})]}):r.jsx(se,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function gn({kind:e,title:n,description:t,meta:s=[],onClose:a,children:i}){const o=c.useId(),l=c.useId(),d=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const m=document.activeElement;return u.current?.focus(),()=>{m?.isConnected&&typeof m.focus=="function"&&m.focus()}},[]),c.useEffect(()=>{const m=x=>{if(x.key==="Escape"){x.preventDefault(),a();return}if(x.key!=="Tab"||!d.current)return;const w=Ss(d.current);if(!w.length){x.preventDefault();return}const j=w[0],N=w[w.length-1];d.current.contains(document.activeElement)?x.shiftKey&&document.activeElement===j?(x.preventDefault(),N.focus()):!x.shiftKey&&document.activeElement===N&&(x.preventDefault(),j.focus()):(x.preventDefault(),j.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),r.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":l,children:[r.jsx("div",{className:"asset-modal-backdrop",onClick:a}),r.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[r.jsxs("header",{children:[r.jsxs("div",{children:[r.jsx("span",{className:"label",children:e}),r.jsx("h2",{id:o,children:n}),r.jsx("p",{id:l,children:t}),s.length>0&&r.jsx("div",{className:"modal-meta",children:s.map(m=>r.jsxs("span",{children:[r.jsx("strong",{children:m.value}),m.label]},m.label))})]}),r.jsx("button",{ref:u,type:"button",onClick:a,children:"Close"})]}),i]})]})}function Ss(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function se({text:e,mode:n="rasa",numbered:t=!1}){const s=String(e||"").split(`
`);return r.jsx("pre",{className:`line-code ${t?"numbered":""}`,children:s.map((a,i)=>r.jsxs("span",{className:"code-line",children:[t&&r.jsx("span",{className:"line-number",children:i+1}),r.jsx("code",{children:Bs(a||" ",n)})]},i))})}function Ns({value:e,selectedLayer:n}){if(!e)return r.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return r.jsx("pre",{className:"data-block",children:_(e)});if(e.view?.name==="weight-histogram")return r.jsx(Es,{value:e});if(e.view?.name==="weight-stats")return r.jsx($s,{value:e});const t=n?Ls(e,n):null;return r.jsxs("div",{className:"inspection-stack",children:[t&&r.jsx(Te,{layer:t}),Array.isArray(e.layers)&&e.layers.map(s=>r.jsx(Te,{layer:s},s.id)),Array.isArray(e.layerTable)&&e.layerTable.map(s=>r.jsx(Te,{layer:s,compact:!0},s.id)),e.layer&&r.jsx(Te,{layer:e.layer}),r.jsx(mt,{value:e})]})}function Es({value:e}){const n=e.tensors?.[0],t=Math.max(...(n?.bins||[]).map(s=>s.count),1);return r.jsxs("div",{className:"inspection-stack",children:[r.jsx("h2",{children:e.layer}),r.jsx("div",{className:"histogram",children:(n?.bins||[]).map((s,a)=>r.jsx("div",{style:{height:`${8+s.count/t*150}px`},title:`${s.start}..${s.end}: ${s.count}`},a))}),r.jsx(mt,{value:e})]})}function $s({value:e}){return r.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>r.jsxs("article",{className:"layer-card",children:[r.jsx("h2",{children:n.name}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"shape"}),r.jsx("dd",{children:n.shape})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"mean"}),r.jsx("dd",{children:n.mean})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"stddev"}),r.jsx("dd",{children:n.stddev})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"range"}),r.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function mt({value:e}){return r.jsxs("details",{className:"data-details",children:[r.jsx("summary",{children:"Returned Rasa data"}),r.jsx("pre",{className:"data-block",children:_(e)})]})}function Te({layer:e,compact:n=!1}){return r.jsxs("article",{className:"layer-card",children:[r.jsx("h2",{children:e.name}),r.jsxs("dl",{children:[r.jsxs("div",{children:[r.jsx("dt",{children:"kind"}),r.jsx("dd",{children:e.kind})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"output"}),r.jsx("dd",{children:e.output})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"params"}),r.jsx("dd",{children:e.params})]}),!n&&r.jsxs("div",{children:[r.jsx("dt",{children:"bytes"}),r.jsx("dd",{children:e.bytes})]})]})]})}function W({label:e,value:n}){return r.jsxs("article",{className:"metric",children:[r.jsx("span",{children:e}),r.jsx("strong",{children:n})]})}function Ts(e,n,t){const s=t.current;if(!s){n(i=>pt(i,e));return}const a=s.state.selection.main;s.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function As(e,n,t){const s=t.current;if(!s){n(l=>pt(l,e));return}const a=s.state.doc.toString(),i=ft(a,e),o=s.state.doc.length;s.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function pt(e,n){return`${e||""}${ft(e||"",n)}`}function ft(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}function Ms(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}async function Bn(){const e=await Promise.all(K.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(t=>t.json())]));return Object.fromEntries(e)}function Cs(e){const n=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((t,s)=>({id:`${e.layerTable[s].id}->${t.id}`,source:e.layerTable[s].id,target:t.id}))}:{nodes:[],edges:[]}}function Ls(e,n){return e?.layerTable?.find(t=>t.id===n)||e?.layers?.find(t=>t.id===n)}function Le(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function Os(e){return e.value!==void 0?`=>
${fe(e.value)}`:String(e.result||"=> nil")}function Is(e){const n=String(e||""),t=n.split(`
`).map(s=>s.trimEnd()).filter(Boolean);return t.length<=2?n:`${t.slice(0,2).join(`
`)}
...`}function qs(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function Bs(e,n){const t=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,s=[];let a=0,i;for(;(i=t.exec(e))!==null;){i.index>a&&s.push(e.slice(a,i.index));const o=i[0];s.push(r.jsx("span",{className:`tok ${_s(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&s.push(e.slice(a)),s.length?s:e}function _s(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function xn(e,n="code"){const t=String(e||""),s=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:t?t.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(t).length},{label:"viewer",value:s}]}function Qe(e){return e?`=> ${_(e)}`:"=> nil"}async function _n(e,n,t,s){return t.lastValue=null,t.lastTrace=null,t.pendingAssetModel=null,await e.evaluateSessionAsync(n,s,un)}function Pn(e,n){let t=null;try{t=hn(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const s=t?.status?.name,a=t?.eval?.status?.name;if(s!=="ok"||t.eval&&a!=="ok"){const i=t?.eval?.message||t?.eval?.["rendered-error"]||t?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function Ps(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function zs(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function P(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function ye(e){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function ge(e){return e?.source?.symbol?.name||null}function Fs(e){const n=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Us(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function mn(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function M(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function T(e){return Math.max(0,M()-e)}Et.createRoot(document.getElementById("root")).render(r.jsx(ts,{}));
