import{j as a,r as c,b as Hr,J as Yt,d as Zt}from"./react.js";import{i as Kr,B as Gr,C as Jr}from"./graph.js";import{S as Xt,k as Yr,E as ae,a as Ot,l as Zr,d as Xr,b as Qt,D as lt}from"./editor.js";import{l as Qr}from"./tfjs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const er="wasm-component",en="browser-component-adapter-pending",xt="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.",tn="rasa-component/",tr="rasa:runtime/host",rn="rasa:runtime/host@0.1.0",rr="rasa:runtime/optimizer",nn="rasa:runtime/optimizer@0.1.0",nr="rasa:runtime/source-loader",an="rasa:runtime/source-loader@0.1.0",sn="rasa:runtime/session@0.1.0",ar="runtime-wasm-before-region-entry",It=65536,sr=1,ir=2,or=4,lr=8,dr=16,on=sr|ir|or|lr|dr,ln=256;class dn extends Error{constructor(t=xt){super(t),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=er,this.unavailableReason=en}}class Ct extends Error{constructor(t){super(t),this.name="RasaBrowserHostCallError"}}class bt{static async load(t,r={}){const n=Pe(t),s=r.readBytes||ur,i=await s(n,"Rasa runtime component"),o=Pe(r.adapterBaseUrl||tn,n),l=r.optimizer??await xn(r,n,s),u=await import(new URL("ras-runtime.js",o).href),p=pn(r.host,l,r.sourceLoader),h=new Map,m=await u.instantiate(async g=>{const k=new URL(g,o),L=h.get(k.href);if(L)return L;const W=await s(k,`Rasa component core module ${g}`),P=await WebAssembly.compile(W);return h.set(k.href,P),P},p);return new bt({url:n.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:p,session:m.session||m[sn]})}constructor(t={}){if(!t.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=t.url??null,this.adapterBaseUrl=t.adapterBaseUrl??null,this.byteLength=t.byteLength??null,this.available=!0,this.runtimeKind=er,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=t.session,this.importObject=t.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new dn(this.message)}evaluate(t,r=null){return this.session.evalSource(V(t),Oe(r))}inspect(t,r=null){const n=this.session.inspectSource(V(t),Oe(r));return _t(n,"inspection artifact")}syntaxTokens(t){const r=this.session.syntaxTokens(V(t));return _t(r,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(t){t!=null&&this.session.sessionFree(t)}setSessionOptimizerEnabled(t,r){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(t,!!r)}loadPackage(t,r){return this.session.sessionLoadPackage(t,oe(r))}async loadPackageAsync(t,r){return await this.loadPackage(t,r)}evaluateSession(t,r,n=null){return this.session.sessionEval(t,V(r),Oe(n))}async evaluateSessionAsync(t,r,n=null){return await this.evaluateSession(t,r,n)}evaluateReplSession(t,r,n=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(t,V(r),Oe(n))}async evaluateReplSessionAsync(t,r,n=null){return await this.evaluateReplSession(t,r,n)}}function V(e){return new TextEncoder().encode(String(e??""))}function cn(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}async function un(e=[],t={}){const r=new Map;for(const n of e){const s=tt(n.symbol,n.arity);r.set(s,await yn(n,t))}return{canCall(n,s){return r.has(tt(n,s))},tryCall(n,s,i){const o=r.get(tt(n,s));return o?bn(o,i):Le("missing-callable-region")}}}async function mn(e,t={}){const r=Pe(e),n=t.readJson||$n,i=((t.manifest||await n(r.href)).callables||[]).map(o=>({symbol:o.symbol,arity:o.arity,inputIndex:o.inputIndex,result:o.result,resultProbe:o.resultProbe,keys:o.keys,url:An(On(o,"url"),r).href}));return un(i,{...t,readBytes:t.readBytes})}function pn(e=null,t=null,r=null){const n={[tr]:hn(e),[rr]:fn(t),[nr]:En(r),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new Bt},"wasi:cli/stdout":{getStdout:()=>new rt},"wasi:cli/stderr":{getStderr:()=>new rt},"wasi:cli/terminal-input":{TerminalInput:Cn},"wasi:cli/terminal-output":{TerminalOutput:_n},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new dt},"wasi:io/error":{Error:In},"wasi:io/poll":{Pollable:dt,poll:()=>[]},"wasi:io/streams":{InputStream:Bt,OutputStream:rt},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return Mn(n)}function hn(e){return{call(t){if(!e)throw new Ct("no browser host provider is registered");if(typeof e.callBytes=="function")return Nn(e.callBytes(t));if(typeof e.call=="function"){const r=e.call(cn(t));return mr(r)?r.then(n=>V(n)):V(r)}throw new Ct("browser host provider does not implement call")}}}function fn(e){return{canCall(t,r){return typeof e?.canCall=="function"?!!e.canCall(t,r):!1},tryCall(t,r,n){return typeof e?.tryCall=="function"?e.tryCall(t,r,n):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:ar}}}}}async function yn(e,t){const r=Rn(e.resultProbe??e.result??"i64"),n=Number.isInteger(e.inputIndex)?e.inputIndex:0,s=Array.isArray(e.keys)?e.keys.map(String):[];try{return{result:r,inputIndex:n,keys:s,exports:await gn(e,t),blocker:null}}catch(i){return{result:r,inputIndex:n,keys:s,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:i?.message??String(i)}}}}async function gn(e,t){if(e.exports)return e.exports;if(e.instance?.exports)return e.instance.exports;if(typeof e.instantiate=="function"){const i=await e.instantiate();if(i?.exports)return i.exports;if(i?.instance?.exports)return i.instance.exports}const r=e.imports||t.imports||{};let n=e.module??null;if(!n){const i=t.readBytes||ur,o=e.moduleBytes??(e.url?await i(e.url,"WasmGC callable artifact"):null);if(!o)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");n=await WebAssembly.compile(oe(o))}const s=await WebAssembly.instantiate(n,r);if(s?.exports)return s.exports;if(s?.instance?.exports)return s.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function xn(e,t,r){if(!e.optimizerManifestUrl&&!e.optimizerManifest)return null;const n=e.optimizerManifestUrl?Pe(e.optimizerManifestUrl,t).href:t.href;return mn(n,{manifest:e.optimizerManifest,readJson:e.readJson,readBytes:r})}function bn(e,t){if(e.blocker)return Le(e.blocker.reason);try{const r=Sn(t?.[e.inputIndex]);return r?(wn(e.exports,r),{tag:"executed",val:jn(e)}):Le("missing-runtime-string-argument")}catch{return Le("browser-wasmgc-callable-execution-error")}}function wn(e,t){const r=e?.rasa_memory,n=e?.rasa_prepare_utf8;if(!r?.buffer||typeof n!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const s=Math.ceil(t.byteLength/It),i=Math.ceil(r.buffer.byteLength/It);s>i&&r.grow(s-i),new Uint8Array(r.buffer,0,t.byteLength).set(t),n(t.byteLength)}function jn(e){switch(e.result){case"i64":return{tag:"int64",val:vt(wt(e.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:vn(e.exports)};case"i64-map":return{tag:"i64-map",val:kn(e.exports,e.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${e.result}`)}}function vn(e){const t=cr(wt(e,"rasa_main_vector_len")),r=jt(e,"rasa_main_vector_i64_at");return Array.from({length:t},(n,s)=>vt(r(s)))}function kn(e,t){const r=cr(wt(e,"rasa_main_map_len"));if(r!==t.length)throw new Error(`WasmGC map probe length ${r} did not match planned keys ${t.length}`);const n=jt(e,"rasa_main_map_i64_at");return t.map((s,i)=>({key:s,value:vt(n(i))}))}function wt(e,t){return jt(e,t)()}function jt(e,t){const r=e?.[t];if(typeof r!="function")throw new Error(`missing WasmGC callable export ${t}`);return r}function Sn(e){return e?.tag==="utf8-string"||e?.tag==="utf8String"?oe(e.val):null}function Le(e){return{tag:"refused",val:{reason:e,fallback:ar}}}function tt(e,t){return`${String(e)}/${Number(t)}`}function Rn(e){switch(String(e)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(e)}}function cr(e){const t=Number(e);if(!Number.isInteger(t)||t<0)throw new Error(`invalid WasmGC probe length ${e}`);return t}function vt(e){return typeof e=="bigint"?e:(typeof e=="number"&&Number.isSafeInteger(e),BigInt(e))}function En(e){return{loadRunnerSources(t,r){if(typeof e?.loadRunnerSources=="function")return e.loadRunnerSources(t,r);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function Nn(e){return mr(e)?e.then(t=>oe(t)):oe(e)}function Mn(e){return{...e,[rn]:e[tr],[nn]:e[rr],[an]:e[nr],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function Oe(e){if(typeof e=="number")return e;let t=on;return e?.phases&&e.phases!=="all"&&(t=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((n,s)=>n|Tn(s),0)),e?.traces&&(t|=ln),t}function Tn(e){switch(String(e)){case"reader":return sr;case"analysis":case"analyze":return ir;case"ir":return or;case"facts":return lr;case"eval":return dr;default:return 0}}function _t(e,t){try{return JSON.parse(e)}catch(r){throw new Error(`failed to parse ${t}: ${r.message}`)}}function oe(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):V(e)}async function ur(e,t){const r=await fetch(e);if(!r.ok)throw new Error(`failed to load ${t}: ${r.status}`);return oe(await r.arrayBuffer())}async function $n(e){const t=await fetch(e);if(!t.ok)throw new Error(`failed to load JSON ${e}: ${t.status}`);return t.json()}function Pe(e,t=null){return new URL(String(e),t||globalThis.location?.href||import.meta.url)}function An(e,t){return new URL(String(e),t)}function On(e,t){if(!e||e[t]===void 0||e[t]===null||e[t]==="")throw new Error(`callable WasmGC manifest entry is missing ${t}`);return e[t]}function mr(e){return e&&typeof e.then=="function"}class In{}class dt{block(){}}class Bt{}class rt{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new dt}}class Cn{}class _n{}const pr="RasaBrowserRuntime",Bn="/assets/rasa-browser-runtime.js";function hr(e=kt()){return e?.[pr]||null}function Ln(e={}){const t=e.globalObject||kt(),r=hr(t);if(r)return r;const n=t.location?.href||"http://rasa.local/",s=new URL(e.sourceUrl||Bn,n).href,i=new URL(e.runtimeUrl||"ras.wasm",e.runtimeUrl?n:new URL(".",s).href).href,o=new URL(e.adapterBaseUrl||"rasa-component/",e.adapterBaseUrl?n:i).href,l=new URL(".",s).href,d=Object.freeze({kind:"rasa.browser-runtime.v1",sourceUrl:s,assetBaseUrl:l,runtimeUrl:i,adapterBaseUrl:o,assetUrl(u){return new URL(u,l).href},engineOptions(u={}){return{...u,adapterBaseUrl:u.adapterBaseUrl??o}}});return t[pr]=d,t.document?.documentElement?.setAttribute("data-rasa-browser-runtime","ready"),d}function Pn(e={}){const t=e.runtime||hr(e.globalObject)||Ln(e),r=t?.runtimeUrl||e.runtimeUrl||"./assets/ras.wasm";return{sourceUrl:t?.sourceUrl||null,assetBaseUrl:t?.assetBaseUrl||null,runtimeUrl:r,adapterBaseUrl:t?.adapterBaseUrl||e.adapterBaseUrl||new URL("rasa-component/",new URL(r,zn(e.globalObject))).href}}async function Un(e,t={}){const r=Pn(t),{runtime:n,runtimeUrl:s,adapterBaseUrl:i,globalObject:o,...l}=t;return await e.load(r.runtimeUrl,{...l,adapterBaseUrl:l.adapterBaseUrl??r.adapterBaseUrl})}function kt(){return typeof window<"u"?window:typeof self<"u"?self:typeof globalThis<"u"?globalThis:{}}function zn(e=kt()){return e.location?.href||"http://rasa.local/"}const Fn=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),fr=Xt.define();Xt.define();function Dn(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}function Vn({parent:e,doc:t="",onChange:r=null,onRun:n=null,readOnly:s=!1,liveLexicalHighlight:i=!1,extensions:o=[]}={}){if(!e)throw new Error("mountRasaCodeEditor requires a parent element");const l=n?Yr.of(Dn(n)):[],d=i?Jn():Gn();return new ae({parent:e,state:Ot.create({doc:t,extensions:[Zr(),Xr(),ae.lineWrapping,d,l,ae.editable.of(!s),Ot.readOnly.of(s),ae.updateListener.of(u=>{u.docChanged&&r?.(u.state.doc.toString(),u)}),...o]})})}function qn(e){return Fn[e]??"rasa-token-unknown"}function Lt(e){const t=String(e),r=[];let n=0;for(;n<t.length;){const s=t[n];if(/\s/.test(s)){n+=1;continue}if("()[]{}".includes(s)){r.push(D(t,"delimiter",n,n+1)),n+=1;continue}if(s===";"){const l=Kn(t,n);r.push(D(t,"comment",n,l)),n=l;continue}if(s==='"'){const l=Hn(t,n);r.push(D(t,"string",n,l)),n=l;continue}if(s==="^"){r.push(D(t,"reader-macro",n,n+1));const l=n+1;if(l<t.length&&!/[\s()[\]{}]/.test(t[l])){const d=nt(t,l);r.push(D(t,"metadata",l,d)),n=d}else n+=1;continue}if(s==="'"||s==="`"||s==="~"||s==="@"){r.push(D(t,"reader-macro",n,n+1)),n+=1;continue}if(s==="\\"){const l=nt(t,n);r.push(D(t,"character",n,l)),n=l;continue}const i=nt(t,n),o=t.slice(n,i);r.push(D(t,Wn(o),n,i)),n=i}return r}function Wn(e){return e==="nil"?"nil":e==="true"||e==="false"?"boolean":e.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(e)?"number":"symbol"}function D(e,t,r,n){return{kind:t,start:Ut(e,r),end:Ut(e,n)}}function nt(e,t){let r=t;for(;r<e.length&&!/[\s()[\]{}]/.test(e[r]);)r+=1;return r}function Hn(e,t){let r=!1;for(let n=t+1;n<e.length;n+=1){const s=e[n];if(r)r=!1;else if(s==="\\")r=!0;else if(s==='"')return n+1}return e.length}function Kn(e,t){const r=e.indexOf(`
`,t);return r<0?e.length:r}function xe(e,t){const r=typeof t=="string"?t:"",n=typeof t=="number"?t:r.length,s=Zn(e,r||n).map(i=>lt.mark({class:qn(i.kind)}).range(i.start,i.end));return lt.set(s,!0)}function Gn(e=[]){return[Qt.define({create(r){return xe(e,r.doc.toString())},update(r,n){for(const s of n.effects)if(s.is(fr))return xe(s.value,n.state.doc.toString());return n.docChanged?lt.none:r.map(n.changes)},provide:r=>ae.decorations.from(r)})]}function Jn(){return[Qt.define({create(t){return xe(Lt(t.doc.toString()),t.doc.toString())},update(t,r){for(const n of r.effects)if(n.is(fr))return xe(n.value,r.state.doc.toString());return r.docChanged?xe(Lt(r.state.doc.toString()),r.state.doc.toString()):t.map(r.changes)},provide:t=>ae.decorations.from(t)})]}function Yn(e,t,r){const n=String(e),s=ut(t),i=Math.max(s,ut(r));return{start:Pt(n,s),end:Pt(n,i)}}function Pt(e,t){const r=String(e),n=ut(t);let s=0,i=0;for(const o of r){const l=s+yr(o);if(l>n||(s=l,i+=o.length,s===n))return i}return r.length}function Ut(e,t){const r=String(e),n=ct(t,r.length);let s=0;for(let i=0;i<n;){const o=r.codePointAt(i),l=String.fromCodePoint(o);s+=yr(l),i+=l.length}return s}function Zn(e,t){const r=typeof t=="number"?t:String(t).length;return[...e].map(n=>{const s=typeof t=="number"?{start:ct(n.start,r),end:ct(n.end,r)}:Yn(t,n.start,n.end);return{kind:String(n.kind),start:s.start,end:s.end}}).filter(n=>n.start<n.end).sort((n,s)=>n.start-s.start||n.end-s.end)}function ct(e,t){const r=Number(e);return Number.isFinite(r)?Math.max(0,Math.min(t,Math.trunc(r))):0}function ut(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function yr(e){const t=e.codePointAt(0);return t<=127?1:t<=2047?2:t<=65535?3:4}const Xn=`
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
`,zt=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),gr="rasa.theme",Qn=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});Qn.dark;function ea(e=document.documentElement){const t=localStorage.getItem(gr),r=t==="light"||t==="dark"?t:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return xr(r,e),r}function xr(e,t=document.documentElement){const r=e==="light"?"light":"dark";return t.dataset.rasaTheme=r,t.setAttribute("data-theme",r),localStorage.setItem(gr,r),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:r}})),r}function ta(e=document.documentElement){return xr(e.dataset.rasaTheme==="light"?"dark":"light",e)}function Ft(e){return e==="light"?"Dark":"Light"}const v=Object.freeze({classes:Object.freeze({phaseRoute:"rasa-phase-route",phaseNode:"rasa-phase-node",projectionLegend:"rasa-projection-legend",projectionChip:"rasa-projection-chip",projectionEmpty:"rasa-projection-empty",phaseWidgetMap:"rasa-phase-widget-map",phaseWidgetLink:"rasa-phase-widget-link",surfaceSwitcher:"rasa-surface-switcher",surfaceLink:"rasa-surface-link",boundaryRoute:"rasa-boundary-route",boundaryStep:"rasa-boundary-step",visualSlot:"rasa-visual-slot"}),attrs:Object.freeze({phaseId:"data-phase-id",tone:"data-tone",status:"data-status",projectionLayer:"data-layer",boundaryTone:"data-tone",visualSlot:"data-visual-slot",slotStatus:"data-slot-status",slotCount:"data-slot-count",slotMeta:"data-slot-meta"})});function St(e,t={}){const r=typeof e=="string"?{id:e}:e||{};return{[v.attrs.visualSlot]:r.id||"",[v.attrs.slotStatus]:r.status||t.status||"",[v.attrs.slotCount]:String(r.count??t.count??0),[v.attrs.slotMeta]:r.meta||t.meta||""}}function ra(e=[],t,r={}){return e.find(n=>n.id===t)||{...r,id:t}}function na(e={},{className:t=""}={}){const r=e.id||"",n=!!e.active;return{id:r,label:e.label||r||"phase",meta:e.meta||aa(e),title:e.description||e.label||r,className:[t,v.classes.phaseNode,n?"active":""].filter(Boolean).join(" "),attrs:{[v.attrs.phaseId]:r,[v.attrs.tone]:e.tone||r,[v.attrs.status]:e.status||"unknown","data-phase-node":r,"data-active":String(n)}}}function aa(e={}){const t=[];return e.groups&&t.push(`${e.groups} group${e.groups===1?"":"s"}`),e.diagnostics&&t.push(`${e.diagnostics} signal${e.diagnostics===1?"":"s"}`),t.join(" / ")||e.status||"waiting"}const sa=`
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
`,br=Object.freeze([A("reader","Read","Primary reader syntax tree","reader","source-tree"),A("expand","Expand","Expanded syntax and macro boundary","expand","source-tree"),A("analyzer","Analyze","Bindings, calls, and analyzer diagnostics","analysis","primary-lowering"),A("ir","IR","Backend-independent executable tree","ir","primary-lowering"),A("facts","Facts","Node-keyed sidecar evidence","facts","sidecar"),A("checks","Checks","Type and boundary checks","checks","sidecar"),A("plan","Plan","Lane decisions and rejected candidates","plan","plan"),A("explain","Explain","Human-oriented compiler projection","explain","projection"),A("eval","Eval","Runtime value observation","eval","runtime"),A("wasm","Wasm","Component runtime product","wasm","runtime")]);Object.freeze(br.map(e=>e.id));function ia(){return br.map(e=>({id:e.id,label:e.label,status:"waiting",groups:0,diagnostics:0,tone:e.tone,role:e.role,description:e.description}))}function A(e,t,r,n,s){return Object.freeze({id:e,label:t,description:r,tone:n,role:s})}function Ue(e){return e==null?"nil":qe(e)?`:${e.name}`:We(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(Ue).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([t,r])=>`:${t} ${Ue(r)}`).join(" ")}}`:String(e)}function mt(e,t=0){if(e==null||typeof e!="object"||qe(e)||We(e))return Ue(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(t+2),o=" ".repeat(t);return`[
${e.map(l=>`${i}${mt(l,t+2)}`).join(`
`)}
${o}]`}const r=Object.entries(e);if(r.length===0)return"{}";const n=" ".repeat(t+2),s=" ".repeat(t);return`{
${r.map(([i,o])=>`${n}:${i} ${mt(o,t+2)}`).join(`
`)}
${s}}`}function wr(e,t=""){return qe(e)||We(e)?e.name:typeof e=="string"?e:e==null?t:String(e)}function qe(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function We(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function oa(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!qe(e)&&!We(e)?Object.keys(e).length:0}const la=Object.freeze({"model-summary":Object.freeze({renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."}),graph:Object.freeze({renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."}),"layers-by-kind":Object.freeze({renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."}),"layer-inspection":Object.freeze({renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."}),"top-layers":Object.freeze({renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."}),"weight-stats":Object.freeze({renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."}),"weight-histogram":Object.freeze({renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."}),"numeric-aggregate":Object.freeze({renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."})});function da(e=null){const t=e?.graph;return t?.nodes?.length?t:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((r,n)=>({id:`${e.layerTable[n].id}->${r.id}`,source:e.layerTable[n].id,target:r.id}))}:{nodes:[],edges:[]}}function He(e=null){return typeof e?.view?.name=="string"?e.view.name:wr(e?.view,"")}function Rt(e=null,t=""){const r=He(e);return r?`:${r}`:t}function ze(e=null){return He(e).replaceAll("-"," ")||"waiting for Rasa"}function jr(e=null){const t=He(e);return la[t]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Ke(e=null){return Array.isArray(e?.["host-requests"])?e["host-requests"]:[]}function ca(e=null){return Ke(e)[0]||null}function Et(e=null){const t=Ke(e);return t.length?t[t.length-1]:null}function ce(e=null){const t=Array.isArray(e?.traces)?e.traces:[],r=Ke(e);return{scope:wr(e?.scope,"waiting"),traces:t.length,requests:r.length,empty:t.length===0&&r.length===0}}function B(e=null){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function we(e=null){const t=e?.identity||e?.admission?.identity;return!t?.package||!t?.export?null:`${t.package}/${t.export}`}function je(e=null){return e?.source?.symbol?.name||null}function ua({value:e=null,graph:t={},traceSection:r=null,providerTrace:n=null,runtimeState:s={},selectedModel:i={},activeModel:o=null,catalogCount:l=0,preparedModelCount:d=0,running:u=!1,fixture:p=!1}={}){const h=ce(r),m=Array.isArray(t.nodes)?t.nodes.length:0,g=Array.isArray(t.edges)?t.edges.length:0,k=jr(e),L=Et(r),W=o?.title||o?.id||"none yet",P=i?.title||i?.id||"selected model",ve=we(L)||B(n)||"not admitted yet",H=Rt(e,"none yet"),C=s.available!==!1,M=h.requests?`${P} is explored through admitted browser capabilities.`:`${P} is selected for browser capability exploration.`;return{headline:{eyebrow:"Rasa boundary theater",title:e?`Rasa returned ${H}`:u?"Rasa is crossing the browser boundary":p?"Trace fixture replay":"Run a Rasa form to cross into the browser host",subtitle:`${M} TensorFlow.js owns model objects; Rasa owns the session, forms, host requests, and returned values.`,tone:e?"ok":C?"waiting":"pending"},runtime:{label:C?"component session ready":"component session pending",detail:s.message||(C?"forms can evaluate in this browser session":"execution is unavailable in this page state"),tone:C?"ok":"pending"},metrics:[{id:"model",label:"Model handle",value:W,detail:o?.handle||"run a load form to allocate a browser handle",tone:o?"ok":"waiting"},{id:"request",label:"Admitted host calls",value:h.requests,detail:ve,tone:h.requests?"ok":"waiting"},{id:"value",label:"Returned view",value:H,detail:k.renderer,tone:e?"ok":"waiting"},{id:"graph",label:"Projected graph",value:m,detail:m?`${m} layer record${m===1?"":"s"}, ${g} edge${g===1?"":"s"}`:`${d}/${l} model assets cached`,tone:m?"ok":"waiting"}],path:[{label:"Rasa form",value:je(L)||"editor input"},{label:"Canonical identity",value:ve},{label:"Browser provider",value:n?.status||"waiting"},{label:"Rasa value",value:H}]}}function ma({traceSection:e=null,providerTrace:t=null,runMetrics:r=null,bootMetrics:n=null}={}){const s=Et(e);return[{label:"Host request",value:je(s)||"waiting"},{label:"Canonical identity",value:we(s)||B(t)||"waiting"},{label:"Status",value:t?.status||r?.status||"waiting"},{label:"Time",value:r?.totalMs!==void 0?pt(r.totalMs):n?pt(n.totalMs):"pending"}]}function pa({value:e=null,trace:t=null,traceSection:r=null}={}){const n=jr(e),s=ce(r);return{...n,rows:[{label:"Rasa view",value:Rt(e,"none yet")},{label:"Capability",value:B(t)||"waiting"},{label:"Core traces",value:s.empty?"none yet":`${s.traces} trace(s), ${s.requests} admitted request(s)`},{label:"Status",value:t?.status||"waiting"}]}}function ha({traceSection:e=null,providerTrace:t=null,fixture:r=!1}={}){const n=ce(e),s=Ke(e),i=ca(e);return{label:"Rasa boundary",title:n.empty?"Waiting for admitted host evidence":r?"Visual fixture replay":`Live Wasm ${n.scope} evidence`,note:r?"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence.":"",traceCountLabel:`${n.traces} traces`,steps:[{title:"Rasa form",value:je(i)||"source expression"},{title:"Canonical identity",value:we(i)||B(t)||"package/export"},{title:"Browser provider",value:t?.status?t.status:"waiting"}],requests:s.map(fa),emptyMessage:"Run a host-capability form to see Rasa admission evidence."}}function fa(e={}){return{id:e["call-id"]??"?",title:we(e)||"unknown request",rows:[{label:"source",value:je(e)||"n/a"},{label:"capability",value:Dt(e.identity?.capability)},{label:"effects",value:(e.admission?.effects||[]).map(Dt).join(" ")||"none"}]}}function ya(e=null){return{title:B(e)||"waiting",rows:[{label:"status",value:e?.status||"waiting"},{label:"args",value:e?.argsCount??"n/a"},{label:"view",value:e?.view?`:${e.view}`:"n/a"}],requestText:e?.requestText||"no provider request yet",responseText:e?.responseText||"no provider response yet"}}function ga({selectedModelId:e="",models:t=[],commands:r=[],prepared:n=!1,preparing:s=!1}={}){return{selectedModelId:e,assetState:{className:n?"asset-state ready":s?"asset-state loading":"asset-state",label:n?"assets cached":s?"fetching assets":"assets load on run"},models:t.map((i={})=>({id:String(i.id||""),title:i.title||i.id||"model"})),commands:r.map((i={})=>({label:i.label||"Rasa form",source:i.source||"",preview:ba(i.source),insertTitle:`Insert ${i.label||"Rasa form"} at the cursor`,appendTitle:`Append ${i.label||"Rasa form"} below the current editor text`}))}}function xa(e=[]){const t=e.map((r={},n)=>({index:n,id:r.id||`entry-${n}`,kind:r.kind||"run",source:r.source||"",resultPreview:r.result?wa(r.result):"",canOpenResult:!!r.result,meta:[r.capability||"session",r.view||"",r.status||"",r.durationMs!==void 0?pt(r.durationMs):""].filter(Boolean)}));return{empty:t.length===0,entries:t,emptyEntry:{source:";; loading Rasa session",resultPreview:"=> waiting for browser Wasm engine"}}}function ba(e){const t=String(e||"").split(`
`).filter(Boolean);return t.length>1?`${t[0]} ...`:t[0]||"Rasa form"}function wa(e){const t=String(e||""),r=t.split(`
`).map(s=>s.trimEnd()).filter(Boolean);return(r.length<=2?t:`${r.slice(0,2).join(`
`)}
...`).split(`
`).map(s=>ja(s,180)).join(`
`)}function pt(e){const t=Number(e||0);return t<10?`${t.toFixed(1)} ms`:`${Math.round(t)} ms`}function Dt(e){return typeof e?.name=="string"?e.name:typeof e=="string"?e:e==null?"":String(e)}function ja(e,t){const r=String(e||"");return r.length<=t?r:`${r.slice(0,Math.max(0,t-1)).trimEnd()}…`}const va=Object.freeze([O("source-editor","Source editor","CodeMirror","Rasa forms and source spans",10),O("phase-route","Compiler route","PhaseRoute","Reader through runtime phase status",20),O("phase-widget-map","Phase widget map","PhaseWidgetMap","Phase artifacts mapped to visual widgets",30),O("projection-legend","Projection legend","ProjectionLegend","Grouped phase-neutral projection layers",40),O("boundary-route","Host boundary","BoundaryRoute","Admitted capability request and returned value",50),O("graph-stage","Graph stage","Stage","Model projection frame and run context",60),O("graph-canvas","Graph canvas","ReactFlow","Structured graph records returned by Rasa",70),O("value-inspector","Value inspector","DataView","Foldable Rasa data and returned values",80),O("transcript","Session transcript","Transcript","Append-only session input and returned data",90),O("diagnostics","Diagnostics","DiagnosticCards","Structured blockers and conservative evidence",100)]),ka=Object.freeze([Ie("inspect","Inspect","Compiler evidence workbench","../browser-inspection/","Source spans, phases, facts, diagnostics, plans, and runtime evidence stay connected.","inspection artifact","source-editor",["reader","analyzer","facts","checks","plan","eval"],"blue"),Ie("model","Model","Host boundary model explorer","../model-architecture-explorer/","Rasa forms cross admitted browser capabilities into TensorFlow.js handles and returned data.","session + provider trace","boundary-route",["reader","analyzer","plan","eval","wasm"],"green"),Ie("conformance","Conformance","Portable Clojure proof map","../conformance-report/","Precomputed compatibility pressure links functions, rows, outcomes, and deferred scope.","report artifact","value-inspector",["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"],"gold"),Ie("roadmap","Roadmap","Release direction","../roadmap/","Preview surfaces point toward the compiler, runtime, tooling, and product stories still in motion.","release plan","projection-legend",["plan"],"neutral")]);function Sa(e=""){return ka.map(t=>({...t,active:t.id===e,href:t.id===e?"./":t.href}))}function vr({phases:e=[],activePhaseIds:t=[],metaById:r={},statusById:n={}}={}){const s=new Set(t),i=new Map(e.map(o=>[o.id,o]));return ia().map(o=>{const l=i.get(o.id)||{},d=l.status||n[o.id]||o.status;return{...o,...l,status:d,active:!!(l.active||s.has(o.id)),meta:l.meta||r[o.id]||$a(d,l)}})}function Ra(e={}){return va.map(t=>{const r=e[t.id]||{},n=Number(r.count||0),s=!!(r.present||n>0);return{...t,present:s,status:r.status||(s?"ready":"waiting"),count:n,meta:r.meta||""}})}function Ea({fixture:e=!1,providerTrace:t=null,runMetrics:r=null,traceSection:n=null,summary:s={}}={}){const i=s.empty===void 0&&n?ce(n):s,o=i.empty===!1||Number(i.traces||0)>0||Number(i.requests||0)>0,l=!!t?.status,d=!!(r?.view||r?.status==="ok"||e),u=o||d?kr:["wasm"];return vr({activePhaseIds:u,metaById:{reader:d||o?"source":"ready",expand:d||o?"source":"ready",analyzer:d||o?"artifact":"ready",ir:d||o?"artifact":"ready",facts:d||o?"artifact":"ready",checks:d||o?"artifact":"ready",plan:o?`${i.requests||0} host`:"admission",explain:e?"fixture":o?"trace":"view",eval:d?r?.view?`:${r.view}`:"value":"session",wasm:l?"component":"loaded"},statusById:Ta(u,"ok")})}function Na({fixture:e=!1,providerTrace:t=null,runMetrics:r=null,traceSection:n=null,summary:s={},sourceTitle:i="",identityTitle:o="",capabilityTitle:l=""}={}){const d=s.empty===void 0&&n?ce(n):s,u=Et(n),p=i||je(u)||"",h=o||we(u)||"",m=l||B(t)||"";return[{label:e?"Replay form":"Rasa source",title:p||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:h||m||"waiting",detail:`${Number(d.requests||0)} admitted request(s)`,tone:"admit"},{label:"Browser host",title:t?.packageName||"browser provider",detail:t?.status||"waiting",tone:"host"},{label:"Return",title:r?.view?`:${r.view}`:"Rasa value",detail:r?.totalMs!==void 0?`${Aa(r.totalMs)}`:"structured data",tone:"return"}]}function Ma({graph:e={},value:t=null,summary:r={},transcript:n=[],runMetrics:s=null,runtimeState:i={}}={}){const o=Array.isArray(e.nodes)?e.nodes.length:0,l=Array.isArray(n)?n.length:0,d=Number(r.requests||0),u=!!t,p=Rt(t),h=i.available!==!1;return{slots:Ra({"source-editor":{present:!0,status:h?"ready":"pending",meta:h?"session input":"adapter pending"},"phase-route":{present:!0,count:kr.length,meta:h?"runtime path":"pending runtime"},"boundary-route":{present:!0,status:d?"ready":h?"waiting":"pending",count:d,meta:d?`${d} host request${d===1?"":"s"}`:""},"graph-stage":{present:!0,status:u?"ready":h?"waiting":"pending",count:o,meta:u?o?"projected value":"empty projection":"waiting"},"graph-canvas":{present:!0,status:o?"ready":u?"empty":"waiting",count:o,meta:o?`${o} layer${o===1?"":"s"}`:""},"value-inspector":{present:u,status:s?.status||(u?"ready":"waiting"),meta:p},transcript:{present:!0,count:l,meta:l?`${l} entr${l===1?"y":"ies"}`:"waiting"}})}}const kr=Object.freeze(["reader","expand","analyzer","ir","facts","checks","plan","explain","eval","wasm"]);function Ta(e,t){return Object.fromEntries(e.map(r=>[r,t]))}function $a(e,t={}){return t.groups?`${t.groups} group${t.groups===1?"":"s"}`:t.diagnostics?`${t.diagnostics} diagnostic${t.diagnostics===1?"":"s"}`:e||"waiting"}function O(e,t,r,n,s){return Object.freeze({id:e,label:t,component:r,description:n,priority:s})}function Ie(e,t,r,n,s,i,o,l,d){return Object.freeze({id:e,artifact:i,description:s,href:n,label:t,phaseIds:Object.freeze([...l]),slotId:o,title:r,tone:d})}function Aa(e){const t=Number(e||0);return t<10?`${t.toFixed(1)} ms`:`${Math.round(t)} ms`}function Ce({as:e="section",slotId:t="",slots:r=[],state:n={},className:s="",children:i,...o}){const l=ra(r,t,n);return a.jsx(e,{...o,...St(l,n),className:`${v.classes.visualSlot} ${s}`.trim(),children:i})}function Oa({phases:e=[],activePhaseIds:t=[],metaById:r={},statusById:n={},className:s="",ariaLabel:i="Rasa phase route"}){const o=vr({phases:e,activePhaseIds:t,metaById:r,statusById:n}),l=v.classes;return a.jsx("div",{className:`${l.phaseRoute} ${l.visualSlot} ${s}`.trim(),"aria-label":i,...St({id:"phase-route",status:"ready",count:o.filter(d=>d.active).length}),children:o.map(d=>{const u=na(d);return c.createElement("span",{className:u.className,...u.attrs,key:u.id,title:u.title},a.jsx("strong",{children:u.label}),a.jsx("em",{children:u.meta}))})})}function Ia({activeId:e="",className:t="",compact:r=!1,items:n=null,showArtifact:s=!0,ariaLabel:i="Rasa demo surfaces"}){const o=n||Sa(e),l=v.classes;return a.jsx("nav",{className:`${l.surfaceSwitcher} ${t}`.trim(),"data-compact":String(!!r),"aria-label":i,children:o.map(d=>a.jsxs("a",{className:l.surfaceLink,href:d.href,"aria-current":d.active?"page":void 0,title:d.title,children:[a.jsx("strong",{children:d.label}),s?a.jsx("small",{children:d.artifact}):null]},d.id||d.label))})}function Ca({steps:e=[],className:t="",ariaLabel:r="Rasa boundary route"}){const n=v.classes,s=v.attrs;return a.jsx("div",{className:`${n.boundaryRoute} ${n.visualSlot} ${t}`.trim(),"aria-label":r,...St({id:"boundary-route",status:e.length?"ready":"waiting",count:e.length}),children:e.map(i=>c.createElement("article",{className:n.boundaryStep,[s.boundaryTone]:i.tone||"",key:i.label},a.jsx("span",{children:i.label}),a.jsx("strong",{children:i.title}),a.jsx("em",{children:i.detail})))})}const X=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function se(e){return X.find(t=>t.id===e)||X[0]}const Fe="tiny-cnn",_e=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,_a=`(def m (model/load-model :${Fe}))
(model/summary m)`;function Ba(e=Fe){const t=se(e);return[{label:"Load + summary",source:`(def m (model/load-model :${t.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${t.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${t.defaultLayerIndex} size`,source:`(layer/tensor-size m ${t.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${t.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${t.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${t.defaultLayer}" {:bins 32})`}]}class La{constructor(t){this.prefix=t,this.nextId=1,this.resources=new Map}insert(t,r){const n=`${this.prefix}/${t}/${this.nextId++}`;return this.resources.set(n,{kind:t,value:r}),n}get(t,r=null){const n=this.resources.get(t);if(!n)throw new Error(`unknown resource handle ${t}`);if(r&&n.kind!==r)throw new Error(`resource ${t} has kind ${n.kind}, expected ${r}`);return n.value}}class Pa extends Error{constructor(t,r,n={}){super(r),this.name="BrowserCapabilityError",this.kind=t,this.data=n}}class Ua{constructor(){this.handlers=new Map}register(t,r,n){return this.handlers.set(De(t,r),n),this}invoke(t,r,n){const s=De(t,r),i=this.handlers.get(s);if(!i)throw new Pa("adapter-missing",`browser capability adapter is missing for ${s}`,za(t,r));return i(n)}entries(){return[...this.handlers.keys()]}}function De(e,t){return`${e}/${t}`}function za(e,t,r={}){const n={"rasa.host/target":Vt("wasm-browser"),...r};return e&&t&&(n["rasa.host/capability"]=Vt(De(e,t))),n}function Vt(e){return{type:"keyword",name:String(e).replace(/^:/,"")}}function Nt(e){return new Va(e).parse()}function q(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Ge(e)?`:${e.name}`:Mt(e)?e.name:Sr(e)?`(${e.items.map(q).join(" ")})`:Array.isArray(e)?`[${e.map(q).join(" ")}]`:`{${Object.entries(e).map(([t,r])=>`:${t} ${q(r)}`).join(" ")}}`}function be(e,t=0){if(e==null||typeof e!="object"||Ge(e)||Mt(e))return q(e);const r=" ".repeat(t+2),n=" ".repeat(t);if(Sr(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${r}${be(i,t+2)}`).join(`
`)}
${n})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${be(i,t+2)}`).join(`
`)}
${n}]`;const s=Object.entries(e);return s.length===0?"{}":`{
${s.map(([i,o])=>`${r}:${i} ${be(o,t+2)}`).join(`
`)}
${n}}`}function Fa(e){return{type:"keyword",name:e}}function Da(e){return{type:"symbol",name:e}}function Ge(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Mt(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function Sr(e){return!!(e&&typeof e=="object"&&e.type==="list")}class Va{constructor(t){this.text=t,this.index=0}parse(){const t=this.form();return this.ws(),t}form(){this.ws();const t=this.peek();return t==="{"?this.map():t==="["?this.vector():t==="("?this.list():t==='"'?this.string():this.atom()}map(){this.expect("{");const t={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,t;const r=this.form(),n=this.form();t[qa(r)]=n}}vector(){this.expect("[");const t=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,t;t.push(this.form())}}list(){this.expect("(");const t=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:t};t.push(this.form())}}string(){this.expect('"');let t="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return t;if(r==="\\"){const n=this.text[this.index++];t+=n==="n"?`
`:n}else t+=r}throw new Error("unterminated string")}atom(){const t=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(t,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?Fa(r.slice(1)):Da(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(t){if(this.ws(),this.text[this.index]!==t)throw new Error(`expected ${t} at byte ${this.index}`);this.index++}}function qa(e){return Ge(e)||Mt(e)?e.name:String(e)}const at=Object.freeze(Object.fromEntries(X.map(e=>[e.id,`./models/${e.id}/model.json`])));class st extends Error{constructor(t){super(`model :${t} assets are not prepared`),this.modelId=t}}class Wa{constructor(){this.resources=new La("browser"),this.registry=Ha(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(t){const r=Nt(t);this.lastTrace={requestText:t,request:r,responseText:"",packageName:r.package?.name||"unknown",exportName:r.export?.name||"unknown"};const n=this.route(r),s=q(n);return this.lastTrace.responseText=s,s}route(t){try{const r=t.package?.name,n=t.export?.name,s=t.args||[],i=this.invoke(r,n,s);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:r,exportName:n,capability:De(r,n),argsCount:s.length,view:i?.view?.name||"scalar"},{status:b("ok"),value:i}}catch(r){const n=r instanceof st?{status:b("failed"),kind:b("asset-not-prepared"),model:b(r.modelId),recoverable:!0,message:r.message}:{status:b("failed"),kind:b("provider-error"),message:r.message};return r instanceof st&&(this.pendingAssetModel=r.modelId),this.lastValue=n,this.lastTrace={...this.lastTrace||{},status:"failed",error:r.message},n}}invoke(t,r,n){return this.registry.invoke(t,r,n)}loadNamedModel(t){if(!at[t])throw new Error(`unknown model :${t}`);if(!this.catalog.has(t))throw new st(t);if(!this.modelIds.has(t)){const r=this.resources.insert("model",this.catalog.get(t));this.modelIds.set(t,r)}return this.modelIds.get(t)}async prepareModel(t){return this.loadModelNow(t)}isPrepared(t){return this.catalog.has(t)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(t){if(!at[t])throw new Error(`unknown model :${t}`);if(this.catalog.has(t))return this.catalog.get(t);const r=await Qr(at[t]);return this.catalog.set(t,r),r}model(t){return this.resources.get(t,"model")}loadedModels(){return[...this.modelIds.entries()].map(([t,r])=>{const n=this.summary(r);return{id:t,handle:r,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}})}summary(t){const r=this.model(t),n=r.layers.map(ne);return{view:b("model-summary"),model:r.name,handle:t,layers:n.length,parameters:ie(n.map(s=>s.params)),trainableParameters:ie(n.map(s=>s.trainableParams)),bytes:ie(n.map(s=>s.bytes)),inputs:le(r.inputs?.[0]?.shape),outputs:le(r.outputs?.[0]?.shape),graph:qt(r),layerTable:n}}graph(t){return{view:b("graph"),graph:qt(this.model(t))}}layerCount(t){const r=this.model(t);return{view:b("numeric-aggregate"),label:"layer count",value:r.layers.length,unit:b("layers"),model:r.name,handle:t}}layersByKind(t,r){const n=this.model(t).layers.map(ne).filter(s=>s.kind===r);return{view:b("layers-by-kind"),kind:b(r),count:n.length,layers:n}}topLayers(t,r){const n=Number(r.limit||5),i=ht(r.by||b("params"))==="bytes"?"bytes":"params",o=this.model(t).layers.map(ne).sort((l,d)=>d[i]-l[i]).slice(0,n);return{view:b("top-layers"),by:b(i),layers:o}}inspectLayer(t,r){const n=this.layerByName(t,r);return{view:b("layer-inspection"),layer:ne(n),config:Ja(n.getConfig()),weights:n.weights.map(Rr)}}layerTensorSize(t,r){const{layer:n,index:s}=this.layerByRef(t,r),i=ne(n,s);return{view:b("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:b("parameters"),bytes:i.bytes,layer:i.name,index:s,output:i.output}}weightStats(t,r){const n=this.layerByName(t,r);return{view:b("weight-stats"),layer:n.name,tensors:n.getWeights().map((s,i)=>Ka(n.weights[i],s))}}weightHistogram(t,r,n){const s=this.layerByName(t,r),i=Number(n.bins||24),o=s.getWeights().map((l,d)=>({name:s.weights[d]?.originalName||`weight_${d}`,bins:Ga(Array.from(l.dataSync()),i)}));return{view:b("weight-histogram"),layer:s.name,bins:i,tensors:o}}layerByName(t,r){const n=this.model(t).layers.find(s=>s.name===r);if(!n)throw new Error(`unknown layer ${r}`);return n}layerByRef(t,r){const n=this.model(t);if(typeof r=="number"){const o=Math.trunc(r)-1,l=n.layers[o];if(!l)throw new Error(`unknown layer index ${r}`);return{layer:l,index:o}}const s=String(r),i=n.layers.findIndex(o=>o.name===s);if(i<0)throw new Error(`unknown layer ${s}`);return{layer:n.layers[i],index:i}}}function Ha(e){return new Ua().register("demo.tfjs/model","load-model",([t])=>e.loadNamedModel(ht(t))).register("demo.tfjs/model","summary",([t])=>e.summary(t)).register("demo.tfjs/model","layer-count",([t])=>e.layerCount(t)).register("demo.tfjs/model","graph",([t])=>e.graph(t)).register("demo.tfjs/layers","by-kind",([t,r])=>e.layersByKind(t,ht(r))).register("demo.tfjs/layers","top",([t,r={}])=>e.topLayers(t,r)).register("demo.tfjs/layer","inspect",([t,r])=>e.inspectLayer(t,r)).register("demo.tfjs/layer","tensor-size",([t,r])=>e.layerTensorSize(t,r)).register("demo.tfjs/weights","stats",([t,r])=>e.weightStats(t,r)).register("demo.tfjs/weights","histogram",([t,r,n={}])=>e.weightHistogram(t,r,n))}function ne(e,t=null){const r=e.weights.map(Rr);return{id:e.name,index:t??Ya(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:le(e.inputShape),output:le(e.outputShape),params:ie(r.map(n=>n.params)),trainableParams:ie(r.filter(n=>n.trainable).map(n=>n.params)),bytes:ie(r.map(n=>n.bytes))}}function qt(e){const t=e.layers.map((r,n)=>({...ne(r,n),index:n}));return{nodes:t,edges:t.slice(1).map((r,n)=>({id:`${t[n].id}->${r.id}`,source:t[n].id,target:r.id}))}}function Rr(e){const t=e.shape.reduce((r,n)=>r*n,1);return{name:e.originalName,shape:le(e.shape),params:t,bytes:t*4,trainable:!!e.trainable}}function Ka(e,t){const r=Array.from(t.dataSync()),n=r.length,s=Math.min(...r),i=Math.max(...r),o=r.reduce((u,p)=>u+p,0)/n,l=r.reduce((u,p)=>u+(p-o)**2,0)/n,d=r.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:le(t.shape),params:n,min:Z(s),max:Z(i),mean:Z(o),stddev:Z(Math.sqrt(l)),sparsity:Z(d/n)}}function Ga(e,t){const r=Math.min(...e),n=Math.max(...e),s=n===r?1:(n-r)/t,i=Array.from({length:t},(o,l)=>({start:Z(r+l*s),end:Z(r+(l+1)*s),count:0}));for(const o of e){const l=Math.min(t-1,Math.max(0,Math.floor((o-r)/s)));i[l].count+=1}return i}function Ja(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(r=>e[r]!==void 0).map(r=>[r,e[r]]))}function ht(e){return Ge(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function b(e){return{type:"keyword",name:e}}function le(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(Wt).join(" x "):e.map(Wt).join(" x "):"?"}function Wt(e){return e==null?"*":String(e)}function ie(e){return e.reduce((t,r)=>t+r,0)}function Z(e){return String(Math.round(e*1e5)/1e5)}function Ya(e){return Number(e._index??0)}const Er=`{:packages
 [{:package/id demo.tfjs/model
   :catalog {:exports
             {load-model {:signature {:args [{:name :id :type :keyword}] :returns :string}
                          :effects [:model/read]
                          :targets {:wasmtime {:availability :available}}}
              summary {:signature {:args [{:name :model :type :string}] :returns :map}
                       :effects [:model/read]
                       :targets {:wasmtime {:availability :available}}}
              layer-count {:signature {:args [{:name :model :type :string}] :returns :map}
                           :effects [:model/read]
                           :targets {:wasmtime {:availability :available}}}
              graph {:signature {:args [{:name :model :type :string}] :returns :map}
                     :effects [:model/read]
                     :targets {:wasmtime {:availability :available}}}}}}
  {:package/id demo.tfjs/layers
   :catalog {:exports
             {by-kind {:signature {:args [{:name :model :type :string}
                                          {:name :kind :type :keyword}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:wasmtime {:availability :available}}}
              top {:signature {:args [{:name :model :type :string}
                                      {:name :options :type :map}]
                               :returns :map}
                   :effects [:model/read]
                   :targets {:wasmtime {:availability :available}}}}}}
  {:package/id demo.tfjs/layer
   :catalog {:exports
             {inspect {:signature {:args [{:name :model :type :string}
                                          {:name :layer :type :string}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:wasmtime {:availability :available}}}
              tensor-size {:signature {:args [{:name :model :type :string}
                                              {:name :layer :type :any}]
                                       :returns :map}
                           :effects [:model/read]
                           :targets {:wasmtime {:availability :available}}}}}}
  {:package/id demo.tfjs/weights
   :catalog {:exports
             {stats {:signature {:args [{:name :model :type :string}
                                        {:name :layer :type :string}]
                                 :returns :map}
                     :effects [:model/read]
                     :targets {:wasmtime {:availability :available}}}
              histogram {:signature {:args [{:name :model :type :string}
                                            {:name :layer :type :string}
                                            {:name :options :type :map}]
                                     :returns :map}
                         :effects [:model/read]
                         :targets {:wasmtime {:availability :available}}}}}}]}`;function it(e){if(!e||!e.includes(":traces"))return null;try{return Nt(e).traces||null}catch{return null}}function Za(e){const t=[];return ft(e,[],t),t}function Xa(e){return mt(e)}function Ve(e){return e==null?null:Array.isArray(e)?e.map(Ve):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([t,r])=>[`:${t}`,Ve(r)])):e}function ft(e,t,r){const n=r.length,s={id:n,path:t,label:es(t),kind:Qa(e),value:oa(e)?null:Ue(e),children:[]};return r.push(s),Array.isArray(e)?e.forEach((i,o)=>{const l=ft(i,[...t,o],r);s.children.push(l)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const l=ft(o,[...t,i],r);s.children.push(l)}),n}function Qa(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function es(e){return e.length?e.map(t=>typeof t=="number"?`[${t}]`:`:${t}`).join(" "):"root"}const w=e=>({type:"keyword",name:e}),yt=e=>({type:"symbol",name:e});function Ht(e){const t=rs(e),r=ns(e),n=as(e);return{source:ts(e),value:t,providerTrace:r,traceSection:n,runtimeReport:`{:status :ok :traces ${gt(n)}}`,loadedModel:{id:e.id,handle:t.handle,name:t.model,layers:t.layers,parameters:t.parameters,trainableParameters:t.trainableParameters,bytes:t.bytes,inputs:t.inputs,outputs:t.outputs}}}function ts(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function rs(e){const t=Nr(e),r=t.reduce((s,i)=>s+i.params,0),n=t.reduce((s,i)=>s+i.bytes,0);return{view:w("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:t.length,parameters:r,trainableParameters:r,bytes:n,inputs:ss(e),outputs:is(e),graph:{nodes:t,edges:t.slice(1).map((s,i)=>os(t[i].id,s.id))},layerTable:t}}function ns(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${Nr(e).length}}}`}}function as(e){return{"rasa/phase":w("traces"),scope:w("admitted-host-calls"),traces:[{id:0,subject:{kind:w("source")},events:[re(0,"source-form",{symbol:yt("model/load-model"),span:{start:7,end:23}}),re(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:w("demo.tfjs/model/load-model")}),re(2,"admission",{"call-id":0,effects:[w("model/read")],signature:{args:[w("id")],returns:w("string")}})]},{id:1,subject:{kind:w("source")},events:[re(0,"source-form",{symbol:yt("model/summary"),span:{start:31,end:44}}),re(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:w("demo.tfjs/model/summary")}),re(2,"admission",{"call-id":1,effects:[w("model/read")],signature:{args:[w("model")],returns:w("map")}})]}],"host-requests":[Kt(0,"demo.tfjs/model","load-model","model/load-model",e.id),Kt(1,"demo.tfjs/model","summary","model/summary")]}}function Nr(e){switch(e.id){case"tiny-mlp":return[j("feature_input","input","* x 16",0,0),j("hidden_dense","dense","* x 32",544,2176),j("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[j("signal_input","input","* x 32",0,0),j("encoder_dense","dense","* x 12",396,1584),j("bottleneck","dense","* x 4",52,208),j("decoder_dense","dense","* x 12",60,240),j("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[j("token_input","input","* x 8",0,0),j("token_embedding","embedding","* x 8 x 16",1600,6400),j("pool_tokens","global-average-pooling1d","* x 16",0,0),j("projection_dense","dense","* x 8",136,544)];default:return[j("input_image","input","* x 28 x 28 x 1",0,0),j("stem_conv","conv2d","* x 26 x 26 x 8",80,320),j("flatten","flatten","* x 5408",0,0),j("classifier_dense","dense","* x 10",5306,21224)]}}function ss(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function is(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function j(e,t,r,n,s){return{id:e,index:0,name:e,kind:t,activation:"linear",input:"?",output:r,params:n,trainableParams:n,bytes:s}}function os(e,t){return{id:`${e}->${t}`,source:e,target:t}}function re(e,t,r){return{id:e,kind:w(t),subject:null,"source-id":"browser://repl",span:r.span||null,data:r,diagnostics:[],annotations:[],evidence:[]}}function Kt(e,t,r,n,s=null){return{"rasa/phase":w("host-request"),scope:w("admitted-host-call"),"call-id":e,identity:{package:t,export:r,capability:w(`${t}/${r}`)},source:{symbol:yt(n),model:s?w(s):null},admission:{"call-id":e,identity:{package:t,export:r,capability:w(`${t}/${r}`)},effects:[w("model/read")]},"trace-id":e}}function gt(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(gt).join(" ")}]`:`{${Object.entries(e).filter(([,t])=>t!==null).map(([t,r])=>`:${t} ${gt(r)}`).join(" ")}}`}const ls=`import "@tensorflow/tfjs-backend-cpu";
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
`,Mr=Object.freeze({phases:"all",traces:!0}),Tr=e=>e<2;function ds(){const e=cs()==="trace",t=c.useRef(null),r=c.useRef(null),n=c.useRef(0),s=c.useRef(null),i=c.useRef(!1),[o,l]=c.useState(Fe),[d,u]=c.useState(()=>ea()),[p,h]=c.useState(()=>e?Ht(se(Fe)).source:_a),[m,g]=c.useState("loading"),[k,L]=c.useState(!1),[W,P]=c.useState(0),[ve,H]=c.useState(null),[C,M]=c.useState(null),[ke,ue]=c.useState(""),[me,pe]=c.useState(null),[K,he]=c.useState(null),[Je,Se]=c.useState([]),[Ye,Q]=c.useState([]),[_r,Re]=c.useState(null),[Br,Ze]=c.useState({}),[G,Ee]=c.useState(null),[Ne,Xe]=c.useState(null),[Me,At]=c.useState(null),[Lr,Pr]=c.useState("boundary"),[Qe,fe]=c.useState([]),x=c.useMemo(()=>e?Ht(se(o)):null,[e,o]),ye=m==="component adapter pending";c.useEffect(()=>{const f=y=>u(y.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",f),()=>window.removeEventListener("rasa-theme-change",f)},[]),c.useEffect(()=>{let f=!0;async function y(){try{if(e&&x){if(!f)return;const et=await Gt().catch(()=>({}));if(!f)return;ue(x.runtimeReport),pe(x.providerTrace),he(x.traceSection),Se([x.loadedModel]),Q([x.loadedModel.id]),Ze(et),Ee(x.value),Xe(x.loadedModel.handle),At(null),H({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),M({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:_e,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:x.source,result:ot(x.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:x.value}]),g("ready");return}const U=I(),E=new Wa,N=I(),S=await Gt(),ee=R(N),z=I(),T=await Un(bt,{host:E}),J=R(z);if(T.available===!1){if(!f)return;r.current=T,Ze(S),ue(""),pe(null),he(null),Se([]),Q([]),Ee(null),Xe(null),H({manifestMs:ee,engineMs:J,setupMs:0,totalMs:R(U)}),M({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:_e,result:xt,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),g("component adapter pending");return}const Y=T.createSession(),$e=I();await T.loadPackageAsync(Y,Er);const te=await T.evaluateReplSessionAsync(Y,_e,Mr);Ds(te,"model setup");const Ae=R($e);if(!f)return;t.current=E,r.current=T,n.current=Y,ue(te),pe(E.lastTrace),he(it(te)),Se(E.loadedModels()),Q(E.preparedModelIds()),Ze(S),H({manifestMs:ee,engineMs:J,setupMs:Ae,totalMs:R(U)}),fe([{id:"setup",kind:"setup",source:_e,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),g("ready")}catch(U){f&&g(`failed: ${U.message}`)}}return y(),()=>{f=!1,r.current&&n.current&&r.current.freeSession(n.current)}},[e,x]);const Ur=c.useCallback(async()=>{if(e&&x){const $=s.current?.state.doc.toString()||p,ge=W+1;P(ge),Ee(x.value),pe(x.providerTrace),he(x.traceSection),ue(x.runtimeReport),M({run:ge,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe(F=>[...F,{id:`run-${F.length}`,kind:"run",source:$,result:ot(x.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:x.value}]);return}if(ye||r.current?.available===!1){M($=>({...$||{},status:"pending",view:"component-adapter-pending"}));return}if(!r.current||!n.current||!t.current||i.current)return;i.current=!0,L(!0),Re(null);const f=s.current?.state.doc.toString()||p,y=t.current,U=I();let E=ke,N=null,S=null,ee=null,z=null,T=0,J=0,Y=0,$e=!1;M({status:"running",assetState:"checking",totalMs:0});try{if(!y.isPrepared(o)){z=o,Re(o),M({status:"running",assetState:"fetching",assetModel:z,totalMs:R(U)});const F=I();await y.prepareModel(o),T=R(F),Q(y.preparedModelIds())}const $=I();E=await Jt(r.current,n.current,y,f),ee=it(E),J=R($);const ge=qs(y);if(ge){const F=ge;z=F,Re(F),M({status:"running",assetState:"fetching",assetModel:z,firstEvalMs:J,totalMs:R(U)});const qr=I();await y.prepareModel(F),T=R(qr),Q(y.preparedModelIds()),y.pendingAssetModel=null;const Wr=I();E=await Jt(r.current,n.current,y,f),ee=it(E),Y=R(Wr)}else Y=J;N=y.lastValue,S=y.lastTrace}catch($){$e=!0,N=Vs("asset-load-error",$.message),S={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,L(!1)}const te=R(U),Ae=W+1,et={run:Ae,status:S?.status||"ok",capability:B(S),view:S?.view||ze(N),assetState:$e?"failed":z?"fetched":"cached",assetModel:z,assetLoadMs:T,firstEvalMs:J,finalEvalMs:Y,totalMs:te,cacheCount:y.preparedModelIds().length};ue(E),Ee(N),pe(S),he(ee),Se(y.loadedModels()),Q(y.preparedModelIds()),Re(null),M(et),N?.handle&&Xe(N.handle),P(Ae),fe($=>[...$,{id:`run-${$.length}`,kind:"run",source:f,result:ot(N),capability:B(S),view:S?.view||ze(N),status:S?.status||"ok",durationMs:te,value:N}])},[e,x,W,ye,ke,o,p,K]),_=c.useMemo(()=>da(G),[G]),zr=c.useMemo(()=>Ne?Je.find(f=>f.handle===Ne):null,[Ne,Je]),Fr=c.useMemo(()=>_.nodes.map(f=>f.id).join("|")||"empty-graph",[_.nodes]),Dr=c.useMemo(()=>_.nodes.map((f,y)=>({id:f.id,position:{x:y*220,y:y%2===0?0:28},data:{label:a.jsxs("div",{className:"node-label",children:[a.jsx("strong",{children:f.name}),a.jsx("span",{children:f.kind}),a.jsxs("em",{children:[f.params," params"]})]}),layer:f},type:"default",className:Me===f.id?"selected-node":""})),[_.nodes,Me]),Vr=c.useMemo(()=>_.edges.map(f=>({...f,animated:!0})),[_.edges]),Te=c.useMemo(()=>Ma({graph:_,value:G,summary:ce(K),transcript:Qe,runMetrics:C,runtimeState:{available:!ye}}),[_,G,K,Qe,C,ye,m]);return a.jsxs("main",{className:"app-shell",children:[a.jsx("style",{children:`${sa}
${Xn}`}),a.jsxs("header",{className:"hero",children:[a.jsxs("div",{className:"brand-lockup",children:[a.jsx("img",{src:zt.logo,alt:"Rasa"}),a.jsxs("div",{children:[a.jsx("span",{children:"Rasa Model Explorer"}),a.jsx("h1",{children:"Model architecture explorer"}),a.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),a.jsx(Ia,{activeId:"model",className:"surface-switcher"}),a.jsxs("div",{className:"hero-status",children:[a.jsx("img",{src:zt.mark,alt:"","aria-hidden":"true"}),a.jsx("span",{className:m==="ready"?"ok":"warn",children:m}),a.jsx("span",{children:"tfjs assets on first run"}),a.jsx("span",{children:"static bundle"}),a.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>u(ta()),"aria-label":`Switch to ${Ft(d).toLowerCase()} theme`,children:Ft(d)})]})]}),a.jsxs("section",{className:"boundary-theater",children:[a.jsx(ms,{fixture:e,providerTrace:me,traceSection:K,runMetrics:C}),a.jsxs("aside",{className:"theater-left",children:[a.jsxs("div",{className:"studio-head",children:[a.jsx("span",{className:"label",children:"Model & extension"}),a.jsx("strong",{children:"What Rasa is allowed to touch"})]}),a.jsx(js,{models:Je,activeHandle:Ne,preparedModelIds:Ye}),a.jsx(Ns,{modelManifest:Br[o],modelId:o,compact:!0})]}),a.jsxs(Ce,{className:"theater-stage",slotId:"graph-stage",slots:Te.slots,children:[a.jsx(ps,{value:G,graph:_,traceSection:K,providerTrace:me,selectedModelId:o,activeModel:zr,preparedModelIds:Ye,status:m,running:k,fixture:e}),a.jsxs(Ce,{as:"div",className:"graph-wrap graph-theater",slotId:"graph-canvas",slots:Te.slots,children:[ye?a.jsx(us,{}):null,a.jsxs(Kr,{nodes:Dr,edges:Vr,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(f,y)=>At(y.id),children:[a.jsx(Gr,{color:"#29313d",gap:18}),a.jsx(Jr,{showInteractive:!1})]},Fr)]}),a.jsx(fs,{traceSection:K,providerTrace:me,runMetrics:C,bootMetrics:ve})]}),a.jsxs(Ce,{as:"aside",className:"theater-inspector",slotId:"value-inspector",slots:Te.slots,children:[a.jsx(hs,{value:G,trace:me,selectedLayer:Me}),a.jsx(ys,{activeTab:Lr,setActiveTab:Pr,value:G,selectedLayer:Me,trace:me,traceSection:K,runtimeReport:ke,fixture:e})]}),a.jsxs(Ce,{className:"theater-console","aria-label":"Rasa command console",slotId:"source-editor",slots:Te.slots,children:[a.jsx(xs,{entries:Qe}),a.jsxs("div",{className:"console-command",children:[a.jsx(ws,{selectedModelId:o,setSelectedModelId:l,setSource:h,editorRef:s,prepared:Ye.includes(o),preparing:_r===o}),a.jsx(gs,{source:p,editorRef:s,run:Ur,disabled:m!=="ready"||k,running:k})]})]})]})]})}function cs(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function us(){return a.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[a.jsx("span",{className:"label",children:"Wasm component runtime"}),a.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),a.jsxs("p",{children:["Use ",a.jsx("code",{children:"ras"})," or ",a.jsx("code",{children:"ras-wasmtime"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function ms({fixture:e,providerTrace:t,traceSection:r,runMetrics:n}){const s=Ea({fixture:e,providerTrace:t,runMetrics:n,traceSection:r}),i=Na({fixture:e,providerTrace:t,runMetrics:n,traceSection:r});return a.jsxs("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:[a.jsx(Oa,{phases:s,className:"model-phase-route",ariaLabel:"Rasa model explorer phase route"}),a.jsx(Ca,{steps:i,className:"model-boundary-route",ariaLabel:"Host boundary route"})]})}function ps({value:e,graph:t,traceSection:r,providerTrace:n,selectedModelId:s,activeModel:i,preparedModelIds:o,status:l,running:d,fixture:u}){const p=se(s),h=i?{...se(i.id),...i,title:se(i.id).title}:null,m=ua({value:e,graph:t,traceSection:r,providerTrace:n,selectedModel:p,activeModel:h,runtimeState:{available:u||l==="ready",message:u?"Saved trace fixture is loaded for visual validation.":l==="component adapter pending"?xt:""},catalogCount:X.length,preparedModelCount:o.length,running:d,fixture:u});return a.jsxs("header",{className:"stage-header story-header","data-tone":m.headline.tone,children:[a.jsxs("div",{className:"story-copy",children:[a.jsx("span",{className:"label",children:m.headline.eyebrow}),a.jsx("h2",{children:m.headline.title}),a.jsx("p",{children:m.headline.subtitle}),a.jsxs("span",{className:"runtime-pill","data-tone":m.runtime.tone,children:[a.jsx("strong",{children:m.runtime.label}),a.jsx("em",{children:m.runtime.detail})]})]}),a.jsx("div",{className:"stage-metrics story-metrics",children:m.metrics.map(g=>a.jsx(Or,{label:g.label,value:g.value,detail:g.detail,tone:g.tone},g.id))})]})}function hs({value:e,trace:t,selectedLayer:r}){const[n,s]=c.useState(null),i=e?be(e):"nil";return a.jsxs(a.Fragment,{children:[a.jsxs("article",{className:"value-lens",children:[a.jsx("span",{className:"label",children:"Selected value"}),a.jsx("strong",{children:ze(e)}),a.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),a.jsx(de,{text:Us(i),mode:"rasa"}),a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:"capability"}),a.jsx("dd",{children:B(t)||"waiting"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"selected"}),a.jsx("dd",{children:r||"none"})]})]}),a.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>s({value:e}),children:"Open full Rasa value"})]}),n&&a.jsx(Tt,{kind:"Rasa value",title:ze(e),description:"The real structured value returned to the browser from the Rasa session.",meta:$t(i,"rasa"),onClose:()=>s(null),children:a.jsx("div",{className:"modal-code-stack result-only",children:a.jsxs("section",{className:"result-section",children:[a.jsx("span",{className:"modal-section-label",children:"returned value"}),a.jsx(de,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function fs({traceSection:e,providerTrace:t,runMetrics:r,bootMetrics:n}){const s=ma({traceSection:e,providerTrace:t,runMetrics:r,bootMetrics:n});return a.jsx("section",{className:"host-status-strip","aria-label":"Current host request status",children:s.map(i=>a.jsx(Or,{label:i.label,value:i.value},i.label))})}function ys({activeTab:e,setActiveTab:t,value:r,selectedLayer:n,trace:s,traceSection:i,runtimeReport:o,fixture:l}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return a.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[a.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(u=>a.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>t(u.id),children:u.label},u.id))}),a.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&a.jsx(ks,{traceSection:i,providerTrace:s,fixture:l}),e==="result"&&a.jsxs(a.Fragment,{children:[a.jsx(vs,{value:r,trace:s,traceSection:i}),a.jsx(Os,{value:r,selectedLayer:n})]}),e==="data"&&a.jsxs(a.Fragment,{children:[a.jsx($r,{title:"Returned Rasa value",value:r,defaultOpen:!0}),a.jsxs("details",{className:"runtime-report",children:[a.jsx("summary",{children:"Runtime report"}),a.jsx("pre",{children:o})]})]})]})]})}function gs({source:e,editorRef:t,run:r,disabled:n,running:s}){const i=c.useRef(null),o=c.useRef(r);return c.useEffect(()=>{o.current=r},[r]),c.useEffect(()=>{const l=Vn({parent:i.current,doc:e,onRun:()=>o.current(),liveLexicalHighlight:!0});return t.current=l,()=>l.destroy()},[]),a.jsxs("div",{className:"editor-panel",children:[a.jsxs("div",{className:"editor-head",children:[a.jsxs("div",{children:[a.jsx("span",{className:"label",children:"Rasa input"}),a.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),a.jsx("span",{children:"Primary+Enter runs"})]}),a.jsx("div",{className:"editor-host",ref:i}),a.jsxs("div",{className:"editor-actions",children:[a.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),a.jsx("button",{className:"run-button",type:"button",onClick:r,disabled:n,children:s?"Running...":"Run"})]})]})}function xs({entries:e}){const t=c.useRef(null),[r,n]=c.useState(null),s=c.useMemo(()=>xa(e),[e]),i=r?Ps(r):"";return c.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[e.length]),a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:t,children:s.empty?a.jsxs("article",{className:"transcript-entry",children:[a.jsx("pre",{className:"transcript-form",children:s.emptyEntry.source}),a.jsx("pre",{className:"transcript-result-static",children:s.emptyEntry.resultPreview})]}):s.entries.map(o=>a.jsx(bs,{entry:o,onOpenResult:()=>n(e[o.index])},o.id))}),r&&a.jsx(Tt,{kind:"Rasa value",title:r.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:$t(i,"rasa"),onClose:()=>n(null),children:a.jsxs("div",{className:"modal-code-stack",children:[a.jsxs("section",{className:"form-section",children:[a.jsx("span",{className:"modal-section-label",children:"form"}),a.jsx(de,{text:r.source,mode:"rasa",numbered:!0})]}),a.jsxs("section",{className:"result-section",children:[a.jsx("span",{className:"modal-section-label",children:"result"}),a.jsx(de,{text:i,mode:"rasa",numbered:!0})]})]})})]})}function bs({entry:e,onOpenResult:t}){return a.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[a.jsx("pre",{className:"transcript-form",children:e.source}),e.canOpenResult&&a.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:t,children:[a.jsx("pre",{children:e.resultPreview}),a.jsx("span",{children:"Open full value"})]}),a.jsx("div",{className:"transcript-meta",children:e.meta.map(r=>a.jsx("span",{children:r},r))})]})}function ws({selectedModelId:e,setSelectedModelId:t,setSource:r,editorRef:n,prepared:s,preparing:i}){const o=ga({selectedModelId:e,models:X,commands:Ba(e).slice(0,5),prepared:s,preparing:i}),l=d=>{t(d.target.value)};return a.jsxs("div",{className:"command-shelf",children:[a.jsxs("div",{className:"command-shelf-head",children:[a.jsxs("label",{className:"model-picker",children:[a.jsx("span",{children:"Model"}),a.jsx("select",{value:o.selectedModelId,onChange:l,children:o.models.map(d=>a.jsx("option",{value:d.id,children:d.title},d.id))})]}),a.jsx("span",{className:o.assetState.className,children:o.assetState.label})]}),a.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.commands.map(d=>a.jsxs("article",{className:"command-chip",children:[a.jsxs("div",{children:[a.jsx("strong",{children:d.label}),a.jsx("span",{children:d.preview})]}),a.jsxs("div",{className:"command-actions",children:[a.jsx("button",{type:"button",title:d.insertTitle,onClick:()=>_s(d.source,r,n),children:"Insert"}),a.jsx("button",{type:"button",title:d.appendTitle,onClick:()=>Bs(d.source,r,n),children:"Append"})]})]},d.label))})]})}function js({models:e,activeHandle:t,preparedModelIds:r}){const n=t?e.find(s=>s.handle===t):null;return a.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[n?a.jsxs("article",{className:"active-model",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Active model"}),a.jsx("strong",{children:n.name})]}),a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:"id"}),a.jsx("dd",{children:n.id})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"handle"}),a.jsx("dd",{children:n.handle})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"layers"}),a.jsx("dd",{children:n.layers})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"params"}),a.jsx("dd",{children:n.parameters})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"size"}),a.jsx("dd",{children:Ws(n.bytes||0)})]})]})]},n.handle||n.id):a.jsxs("article",{className:"active-model",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Active model"}),a.jsx("strong",{children:"none yet"})]}),a.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),a.jsxs("div",{className:"catalog-note",children:[X.length," static catalog models are available. ",r.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function vs({value:e,trace:t,traceSection:r}){const n=pa({value:e,trace:t,traceSection:r});return a.jsxs("section",{className:"projection-card",children:[a.jsxs("div",{children:[a.jsx("span",{className:"label",children:"Projection"}),a.jsx("strong",{children:n.renderer}),a.jsx("p",{children:n.reason})]}),a.jsx("dl",{children:n.rows.map(s=>a.jsxs("div",{children:[a.jsx("dt",{children:s.label}),a.jsx("dd",{children:s.value})]},s.label))})]})}function ks({traceSection:e,providerTrace:t,fixture:r=!1}){const n=ha({traceSection:e,providerTrace:t,fixture:r});return a.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[a.jsxs("div",{className:"boundary-head",children:[a.jsxs("div",{children:[a.jsx("span",{className:"label",children:n.label}),a.jsx("strong",{children:n.title}),n.note&&a.jsx("p",{className:"trace-note",children:n.note})]}),a.jsx("span",{children:n.traceCountLabel})]}),a.jsx("div",{className:"boundary-path",children:n.steps.map(s=>a.jsx(Ss,{title:s.title,value:s.value},s.title))}),a.jsxs("details",{className:"trace-section",open:!0,children:[a.jsx("summary",{children:"Admitted host calls"}),a.jsx("div",{className:"trace-list",children:n.requests.length?n.requests.map(s=>a.jsx(Rs,{request:s},s.id)):a.jsx("p",{className:"trace-empty",children:n.emptyMessage})})]}),a.jsx(Es,{trace:t}),a.jsx($r,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Ss({title:e,value:t}){return a.jsxs("article",{children:[a.jsx("span",{children:e}),a.jsx("strong",{children:t})]})}function Rs({request:e}){return a.jsxs("article",{className:"host-request-card",children:[a.jsxs("div",{children:[a.jsxs("span",{children:["call ",e.id]}),a.jsx("strong",{children:e.title})]}),a.jsx("dl",{children:e.rows.map(t=>a.jsxs("div",{children:[a.jsx("dt",{children:t.label}),a.jsx("dd",{children:t.value})]},t.label))})]})}function Es({trace:e}){const t=ya(e);return a.jsxs("article",{className:"provider-bridge",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Browser bridge"}),a.jsx("strong",{children:t.title})]}),a.jsx("dl",{children:t.rows.map(r=>a.jsxs("div",{children:[a.jsx("dt",{children:r.label}),a.jsx("dd",{children:r.value})]},r.label))}),a.jsxs("details",{className:"bridge-details",children:[a.jsx("summary",{children:"Request / response data"}),a.jsx("pre",{children:t.requestText}),a.jsx("pre",{children:t.responseText})]})]})}function $r({title:e,value:t,defaultOpen:r=!1}){const n=c.useMemo(()=>Za(t),[t]),s=c.useMemo(()=>Ve(t),[t]),i=n.slice(0,12);return a.jsxs("details",{className:"data-projection",open:r,children:[a.jsxs("summary",{children:[a.jsx("span",{children:e}),a.jsxs("strong",{children:[n.length," node(s)"]})]}),a.jsx("div",{className:"projection-viewer",children:a.jsx(Yt,{data:s||{},shouldExpandNode:Tr,clickToExpandNode:!0,compactTopLevel:!0,style:{...Zt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),a.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>a.jsxs("article",{children:[a.jsx("span",{children:o.label}),a.jsx("strong",{children:o.value||o.kind}),a.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),n.length>i.length&&a.jsxs("p",{className:"projection-more",children:[n.length-i.length," more node(s) folded in compact Rasa data below."]}),a.jsxs("details",{className:"data-details",children:[a.jsx("summary",{children:"Compact Rasa data"}),a.jsx("pre",{className:"data-block",children:Xa(t)})]})]})}function Ns({modelManifest:e,modelId:t,compact:r=!1}){const[n,s]=c.useState(null),i=Ms(e,t);return a.jsxs("section",{className:`extension-panel ${r?"compact":""}`,children:[a.jsxs("div",{children:[a.jsx("span",{className:"label",children:"Open the extension"}),a.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),a.jsx("div",{className:"extension-assets",children:i.map(o=>a.jsx(Ts,{asset:o,onOpen:()=>s(o)},o.id))}),n&&a.jsx($s,{asset:n,onClose:()=>s(null)})]})}function Ms(e,t){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:Er,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:ls,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${t?` :${t}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Ts({asset:e,onOpen:t}){return a.jsxs("button",{className:"extension-asset",type:"button",onClick:t,children:[a.jsx("span",{children:e.kind}),a.jsx("strong",{children:e.title}),a.jsx("em",{children:e.description})]})}function $s({asset:e,onClose:t}){return a.jsx(Tt,{kind:e.kind,title:e.title,description:e.description,meta:$t(e.text,e.mode),onClose:t,children:a.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"projection-viewer large",children:a.jsx(Yt,{data:Ve(e.value),shouldExpandNode:Tr,clickToExpandNode:!0,compactTopLevel:!0,style:{...Zt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),a.jsxs("details",{className:"data-details",children:[a.jsx("summary",{children:"Raw manifest JSON"}),a.jsx(de,{text:e.text,mode:"json",numbered:!0})]})]}):a.jsx(de,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Tt({kind:e,title:t,description:r,meta:n=[],onClose:s,children:i}){const o=c.useId(),l=c.useId(),d=c.useRef(null),u=c.useRef(null);return c.useEffect(()=>{const p=document.activeElement;return u.current?.focus(),()=>{p?.isConnected&&typeof p.focus=="function"&&p.focus()}},[]),c.useEffect(()=>{const p=h=>{if(h.key==="Escape"){h.preventDefault(),s();return}if(h.key!=="Tab"||!d.current)return;const m=As(d.current);if(!m.length){h.preventDefault();return}const g=m[0],k=m[m.length-1];d.current.contains(document.activeElement)?h.shiftKey&&document.activeElement===g?(h.preventDefault(),k.focus()):!h.shiftKey&&document.activeElement===k&&(h.preventDefault(),g.focus()):(h.preventDefault(),g.focus())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[s]),a.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":l,children:[a.jsx("div",{className:"asset-modal-backdrop",onClick:s}),a.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[a.jsxs("header",{children:[a.jsxs("div",{children:[a.jsx("span",{className:"label",children:e}),a.jsx("h2",{id:o,children:t}),a.jsx("p",{id:l,children:r}),n.length>0&&a.jsx("div",{className:"modal-meta",children:n.map(p=>a.jsxs("span",{children:[a.jsx("strong",{children:p.value}),p.label]},p.label))})]}),a.jsx("button",{ref:u,type:"button",onClick:s,children:"Close"})]}),i]})]})}function As(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t=>t.disabled||t.hidden||t.getAttribute("aria-hidden")==="true"||t.closest("[inert]")?!1:t.getClientRects().length>0)}function de({text:e,mode:t="rasa",numbered:r=!1}){const n=String(e||"").split(`
`);return a.jsx("pre",{className:`line-code ${r?"numbered":""}`,children:n.map((s,i)=>a.jsxs("span",{className:"code-line",children:[r&&a.jsx("span",{className:"line-number",children:i+1}),a.jsx("code",{children:zs(s||" ",t)})]},i))})}function Os({value:e,selectedLayer:t}){if(!e)return a.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return a.jsx("pre",{className:"data-block",children:q(e)});const r=He(e);if(r==="weight-histogram")return a.jsx(Is,{value:e});if(r==="weight-stats")return a.jsx(Cs,{value:e});const n=t?Ls(e,t):null;return a.jsxs("div",{className:"inspection-stack",children:[n&&a.jsx(Be,{layer:n}),Array.isArray(e.layers)&&e.layers.map(s=>a.jsx(Be,{layer:s},s.id)),Array.isArray(e.layerTable)&&e.layerTable.map(s=>a.jsx(Be,{layer:s,compact:!0},s.id)),e.layer&&a.jsx(Be,{layer:e.layer}),a.jsx(Ar,{value:e})]})}function Is({value:e}){const t=e.tensors?.[0],r=Math.max(...(t?.bins||[]).map(n=>n.count),1);return a.jsxs("div",{className:"inspection-stack",children:[a.jsx("h2",{children:e.layer}),a.jsx("div",{className:"histogram",children:(t?.bins||[]).map((n,s)=>a.jsx("div",{style:{height:`${8+n.count/r*150}px`},title:`${n.start}..${n.end}: ${n.count}`},s))}),a.jsx(Ar,{value:e})]})}function Cs({value:e}){return a.jsx("div",{className:"inspection-stack",children:e.tensors.map(t=>a.jsxs("article",{className:"layer-card",children:[a.jsx("h2",{children:t.name}),a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:"shape"}),a.jsx("dd",{children:t.shape})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"mean"}),a.jsx("dd",{children:t.mean})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"stddev"}),a.jsx("dd",{children:t.stddev})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"range"}),a.jsxs("dd",{children:[t.min,"..",t.max]})]})]})]},t.name))})}function Ar({value:e}){return a.jsxs("details",{className:"data-details",children:[a.jsx("summary",{children:"Returned Rasa data"}),a.jsx("pre",{className:"data-block",children:q(e)})]})}function Be({layer:e,compact:t=!1}){return a.jsxs("article",{className:"layer-card",children:[a.jsx("h2",{children:e.name}),a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:"kind"}),a.jsx("dd",{children:e.kind})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"output"}),a.jsx("dd",{children:e.output})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"params"}),a.jsx("dd",{children:e.params})]}),!t&&a.jsxs("div",{children:[a.jsx("dt",{children:"bytes"}),a.jsx("dd",{children:e.bytes})]})]})]})}function Or({label:e,value:t,detail:r="",tone:n=""}){return a.jsxs("article",{className:"metric","data-tone":n,children:[a.jsx("span",{children:e}),a.jsx("strong",{children:t}),r?a.jsx("em",{children:r}):null]})}function _s(e,t,r){const n=r.current;if(!n){t(i=>Ir(i,e));return}const s=n.state.selection.main;n.dispatch({changes:{from:s.from,to:s.to,insert:e},selection:{anchor:s.from+e.length},scrollIntoView:!0}),t(n.state.doc.toString()),n.focus()}function Bs(e,t,r){const n=r.current;if(!n){t(l=>Ir(l,e));return}const s=n.state.doc.toString(),i=Cr(s,e),o=n.state.doc.length;n.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),t(n.state.doc.toString()),n.focus()}function Ir(e,t){return`${e||""}${Cr(e||"",t)}`}function Cr(e,t){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${t}`:t}async function Gt(){const e=await Promise.all(X.map(async t=>[t.id,await fetch(`./models/${t.id}/model.json`).then(r=>r.json())]));return Object.fromEntries(e)}function Ls(e,t){return e?.layerTable?.find(r=>r.id===t)||e?.layers?.find(r=>r.id===t)}function Ps(e){return e.value!==void 0?`=>
${be(e.value)}`:String(e.result||"=> nil")}function Us(e){const t=String(e||"nil").split(`
`);return t.length<=10?t.join(`
`):`${t.slice(0,10).join(`
`)}
  ...`}function zs(e,t){const r=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,n=[];let s=0,i;for(;(i=r.exec(e))!==null;){i.index>s&&n.push(e.slice(s,i.index));const o=i[0];n.push(a.jsx("span",{className:`tok ${Fs(i,t)}`,children:o},`${i.index}-${o}`)),s=i.index+o.length}return s<e.length&&n.push(e.slice(s)),n.length?n:e}function Fs(e,t){return e[1]?"string":e[2]?"comment":e[3]?t==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function $t(e,t="code"){const r=String(e||""),n=t==="json"?"folded JSON":t==="rasa"?"Rasa data":"source";return[{label:"lines",value:r?r.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(r).length},{label:"viewer",value:n}]}function ot(e){return e?`=> ${q(e)}`:"=> nil"}async function Jt(e,t,r,n){return r.lastValue=null,r.lastTrace=null,r.pendingAssetModel=null,await e.evaluateReplSessionAsync(t,n,Mr)}function Ds(e,t){let r=null;try{r=Nt(e)}catch{throw new Error(`${t} returned an unreadable runtime report`)}const n=r?.status?.name,s=r?.eval?.status?.name;if(n!=="ok"||r.eval&&s!=="ok"){const i=r?.eval?.message||r?.eval?.["rendered-error"]||r?.message||String(e||"").slice(0,240);throw new Error(`${t} failed: ${i}`)}}function Vs(e,t){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:t}}function qs(e){const t=e.lastValue;return t?.status?.name==="failed"&&t?.kind?.name==="asset-not-prepared"&&t?.recoverable===!0&&t?.model?.name?t.model.name:e.pendingAssetModel}function Ws(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function I(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function R(e){return Math.max(0,I()-e)}Hr.createRoot(document.getElementById("root")).render(a.jsx(ds,{}));
