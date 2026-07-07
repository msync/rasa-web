(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();class A extends Error{constructor(t,r,n={}){super(r),this.name="BrowserCapabilityError",this.kind=t,this.data=n}}class g{constructor(t=[]){this.allowed=new Set(t.map(String))}static fromManifest(t={}){return new g(t.allow||[])}allows(t,r){return this.allowed.has("*")||this.allowed.has(B(t,r))}entries(){return[...this.allowed].sort()}}class H{constructor(){this.handlers=new Map}register(t,r,n){return this.handlers.set(B(t,r),n),this}invoke(t,r,n){const s=B(t,r),a=this.handlers.get(s);if(!a)throw new A("adapter-missing",`browser capability adapter is missing for ${s}`,F(t,r));return a(n)}entries(){return[...this.handlers.keys()]}}class ke{constructor({registry:t=new H,policy:r=new g}={}){this.registry=t,this.policy=r instanceof g?r:g.fromManifest(r),this.lastTrace=null}call(t){const r={requestText:t,responseText:""};try{const n=T(t),s=W(n.package),a=W(n.export),i=Array.isArray(n.args)?n.args:[],o=B(s,a);if(Object.assign(r,{packageName:s,exportName:a,capability:o,argsCount:i.length}),!this.policy.allows(s,a))throw new A("policy-denied",`browser policy denies ${o}`,F(s,a));const c=this.registry.invoke(s,a,i);if(Ce(c))return this.lastTrace={...r,status:"pending",suspended:!0},c.then(l=>{const d=ee(l);return this.lastTrace={...r,status:"completed",suspended:!0,resumed:!0,responseText:d},d},l=>{const d=te(re(l),l.message||String(l),ne(r,l));return this.lastTrace={...r,status:"failed",suspended:!0,resumed:!0,kind:re(l),error:l.message,responseText:d},d});const u=ee(c);return this.lastTrace={...r,status:"completed",responseText:u},u}catch(n){const s=n instanceof A?n.kind:"provider-error",a=te(s,n.message||String(n),ne(r,n));return this.lastTrace={...r,status:"failed",kind:s,error:n.message,responseText:a},a}}async callAsync(t){return await this.call(t)}}class Ae{constructor({manifestUrl:t,manifest:r,runtimeUrl:n,adapterBaseUrl:s=null,optimizerManifestUrl:a=null,sourceLibraries:i=[],capabilityCatalogs:o=[],packageBundleText:c="",initialNamespace:u="",registry:l=new H,policy:d=new g,host:b=null}){this.manifestUrl=t,this.manifest=r,this.runtimeUrl=n,this.adapterBaseUrl=s,this.optimizerManifestUrl=a,this.sourceLibraries=i,this.capabilityCatalogs=o,this.packageBundleText=c,this.initialNamespace=u,this.registry=l,this.policy=d,this.host=b||new ke({registry:l,policy:d})}engineOptions(t={}){return{...t,host:t.host??this.host,...this.adapterBaseUrl?{adapterBaseUrl:this.adapterBaseUrl}:{},...this.optimizerManifestUrl?{optimizerManifestUrl:this.optimizerManifestUrl}:{}}}configureSession(t,r,n={phases:"all"}){const s=[];this.packageBundleText&&s.push(t.loadPackage(r,this.packageBundleText));for(const a of this.sourceLibraries)s.push(t.evaluateSession(r,a.text,n));return this.initialNamespace&&s.push(t.evaluateSession(r,`(ns ${this.initialNamespace})`,n)),s}async configureSessionAsync(t,r,n={phases:"all"}){const s=[];this.packageBundleText&&s.push(await t.loadPackageAsync(r,this.packageBundleText));for(const a of this.sourceLibraries)s.push(await t.evaluateSessionAsync(r,a.text,n));return this.initialNamespace&&s.push(await t.evaluateSessionAsync(r,`(ns ${this.initialNamespace})`,n)),s}}function B(e,t){return`${e}/${t}`}async function Be(e,t={}){const r=Le(e),n=t.readJson||Me,s=t.readText||Pe,a=t.importModule||(f=>import(f)),i=t.fetch||globalThis.fetch?.bind(globalThis),o=t.target||"wasm-browser",c=await n(r.href),u=x(j(c,"runtime"),r).href,l=c.adapterBaseUrl?x(c.adapterBaseUrl,r).href:null,d=c.optimizedCallables?x(M(c.optimizedCallables),r).href:null,b=await Promise.all((c.sourceLibraries||[]).map(async f=>{const p=x(M(f),r).href;return{url:p,text:await s(p)}})),R=await Promise.all((c.capabilityCatalogs||[]).map(async f=>{const p=x(M(f),r).href,k=await s(p),Q=T(k);return{url:p,text:k,catalog:Q,packageName:f.package||Ie(Q)||Ne(p)}})),y=new H,_=g.fromManifest(c.policy||{}),L=_e(c.session),U=new Ae({manifestUrl:r.href,manifest:c,runtimeUrl:u,adapterBaseUrl:l,optimizerManifestUrl:d,sourceLibraries:b,capabilityCatalogs:R,packageBundleText:Te(R),initialNamespace:L,registry:y,policy:_});for(const f of c.providers||[]){if((f.target||o)!==o)continue;if(f.kind!=="browser-module")throw new Error(`unsupported browser provider kind ${f.kind}`);const p=x(j(f,"module"),r).href,k=await a(p);if(typeof k.register!="function")throw new Error(`browser provider module ${p} does not export register`);k.register(y,{manifest:c,distribution:U,provider:f,moduleUrl:p,target:o,baseUrl:r,fetch:i})}return U}function _e(e={}){const t=String(e?.initialNamespace||"");if(!t)return"";if(!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(t))throw new Error(`invalid browser session initialNamespace ${JSON.stringify(t)}`);return t}function ee(e){return h({status:E("ok"),value:e})}function te(e,t,r=null){const n={status:E("error"),kind:E(e),message:t};return r&&Object.keys(r).length>0&&(n.data=r),h(n)}function re(e){return e instanceof A?e.kind:"provider-error"}function ne(e,t){return t instanceof A?t.data||{}:F(e.packageName,e.exportName,{"rasa.browser/name":t?.name||"Error"})}function F(e,t,r={}){const n={"rasa.host/target":E("wasm-browser"),...r};return e&&t&&(n["rasa.host/capability"]=E(B(e,t))),n}function T(e){return new ve(String(e??"")).parse()}function h(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):J(e)?`:${e.name}`:K(e)?e.name:Oe(e)?`(${e.items.map(h).join(" ")})`:$e(e)?`{${e.entries.map(([t,r])=>`${h(t)} ${h(r)}`).join(" ")}}`:Array.isArray(e)?`[${e.map(h).join(" ")}]`:`{${Object.entries(e).map(([t,r])=>`:${t} ${h(r)}`).join(" ")}}`}function E(e){return{type:"keyword",name:String(e).replace(/^:/,"")}}function le(e){return{type:"symbol",name:String(e)}}function J(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function K(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function Oe(e){return!!(e&&typeof e=="object"&&e.type==="list")}function $e(e){return!!(e&&typeof e=="object"&&e.type==="map")}function W(e){return J(e)||K(e)?e.name:String(e??"")}function Te(e){return e.length?h({packages:e.map(({packageName:t,catalog:r})=>({"package/id":le(t),catalog:r}))}):""}function Ie(e){const r=(Array.isArray(e?.capabilities)?e.capabilities:[]).map(s=>s?.id).find(Boolean),n=W(r);return n.includes("/")?n.slice(0,n.lastIndexOf("/")):""}function Ne(e){const t=new URL(e).pathname.split("/").filter(Boolean),r=t.lastIndexOf("catalog.ras");return r>0?t[r-1]:""}function M(e){return typeof e=="string"?e:j(e,"url")}function j(e,t){if(!e||e[t]===void 0||e[t]===null||e[t]==="")throw new Error(`browser distribution manifest is missing ${t}`);return e[t]}function x(e,t){return new URL(e,t)}function Le(e){return new URL(e,globalThis.location?.href||"http://localhost/")}async function Me(e){const t=await fetch(e);if(!t.ok)throw new Error(`browser distribution JSON load failed: ${t.status}`);return t.json()}async function Pe(e){const t=await fetch(e);if(!t.ok)throw new Error(`browser distribution asset load failed: ${t.status}`);return t.text()}function Ce(e){return!!(e&&typeof e.then=="function")}class ve{constructor(t){this.text=t,this.index=0}parse(){const t=this.form();return this.ws(),t}form(){this.ws();const t=this.peek();return t==="{"?this.map():t==="["?this.vector():t==="("?this.list():t==='"'?this.string():this.atom()}map(){this.expect("{");const t={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,t;const r=this.form(),n=this.form();t[ze(r)]=n}}vector(){this.expect("[");const t=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,t;t.push(this.form())}}list(){this.expect("(");const t=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:t};t.push(this.form())}}string(){this.expect('"');let t="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return t;if(r==="\\"){const n=this.text[this.index++];t+=n==="n"?`
`:n}else t+=r}throw new Error("unterminated string")}atom(){const t=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(t,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?E(r.slice(1)):le(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(t){if(this.ws(),this.text[this.index]!==t)throw new Error(`expected ${t} at byte ${this.index}`);this.index++}}function ze(e){return J(e)||K(e)?e.name:String(e)}const ue="RasaBrowserRuntime",We="/assets/rasa-browser-runtime.js";function de(e=q()){return e?.[ue]||null}function je(e={}){const t=e.globalObject||q(),r=de(t);if(r)return r;const n=t.location?.href||"http://rasa.local/",s=new URL(e.sourceUrl||We,n).href,a=new URL(e.runtimeUrl||"ras.wasm",e.runtimeUrl?n:new URL(".",s).href).href,i=new URL(e.adapterBaseUrl||"rasa-component/",e.adapterBaseUrl?n:a).href,o=new URL(".",s).href,c=Object.freeze({kind:"rasa.browser-runtime.v1",sourceUrl:s,assetBaseUrl:o,runtimeUrl:a,adapterBaseUrl:i,assetUrl(u){return new URL(u,o).href},engineOptions(u={}){return{...u,adapterBaseUrl:u.adapterBaseUrl??i}}});return t[ue]=c,t.document?.documentElement?.setAttribute("data-rasa-browser-runtime","ready"),c}function De(e={}){const t=e.runtime||de(e.globalObject)||je(e),r=t?.runtimeUrl||e.runtimeUrl||"./assets/ras.wasm";return{sourceUrl:t?.sourceUrl||null,assetBaseUrl:t?.assetBaseUrl||null,runtimeUrl:r,adapterBaseUrl:t?.adapterBaseUrl||e.adapterBaseUrl||new URL("rasa-component/",new URL(r,He(e.globalObject))).href}}async function Ge(e,t={}){const r=De(t),{runtime:n,runtimeUrl:s,adapterBaseUrl:a,globalObject:i,...o}=t;return await e.load(r.runtimeUrl,{...o,adapterBaseUrl:o.adapterBaseUrl??r.adapterBaseUrl})}function q(){return typeof window<"u"?window:typeof self<"u"?self:typeof globalThis<"u"?globalThis:{}}function He(e=q()){return e.location?.href||"http://rasa.local/"}const fe="wasm-component",Fe="browser-component-adapter-pending",Je="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.",Ke="rasa-component/",pe="rasa:runtime/host",qe="rasa:runtime/host@0.1.0",me="rasa:runtime/optimizer",Ve="rasa:runtime/optimizer@0.1.0",he="rasa:runtime/source-loader",Ze="rasa:runtime/source-loader@0.1.0",Ye="rasa:runtime/session@0.1.0",we="runtime-wasm-before-region-entry",se=65536,ge=1,be=2,ye=4,xe=8,Ee=16,Xe=ge|be|ye|xe|Ee,Qe=256;class et extends Error{constructor(t=Je){super(t),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=fe,this.unavailableReason=Fe}}class ae extends Error{constructor(t){super(t),this.name="RasaBrowserHostCallError"}}class V{static async load(t,r={}){const n=I(t),s=r.readBytes||Re,a=await s(n,"Rasa runtime component"),i=I(r.adapterBaseUrl||Ke,n),o=r.optimizer??await lt(r,n,s),u=await import(new URL("ras-runtime.js",i).href),l=st(r.host,o,r.sourceLoader),d=new Map,b=await u.instantiate(async R=>{const y=new URL(R,i),_=d.get(y.href);if(_)return _;const L=await s(y,`Rasa component core module ${R}`),U=await WebAssembly.compile(L);return d.set(y.href,U),U},l);return new V({url:n.href,adapterBaseUrl:i.href,byteLength:a.byteLength,imports:l,session:b.session||b[Ye]})}constructor(t={}){if(!t.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=t.url??null,this.adapterBaseUrl=t.adapterBaseUrl??null,this.byteLength=t.byteLength??null,this.available=!0,this.runtimeKind=fe,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=t.session,this.importObject=t.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new et(this.message)}evaluate(t,r=null){return this.session.evalSource(w(t),O(r))}inspect(t,r=null){const n=this.session.inspectSource(w(t),O(r));return ie(n,"inspection artifact")}syntaxTokens(t){const r=this.session.syntaxTokens(w(t));return ie(r,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(t){t!=null&&this.session.sessionFree(t)}setSessionOptimizerEnabled(t,r){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(t,!!r)}loadPackage(t,r){return this.session.sessionLoadPackage(t,S(r))}async loadPackageAsync(t,r){return await this.loadPackage(t,r)}evaluateSession(t,r,n=null){return this.session.sessionEval(t,w(r),O(n))}async evaluateSessionAsync(t,r,n=null){return await this.evaluateSession(t,r,n)}evaluateReplSession(t,r,n=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(t,w(r),O(n))}async evaluateReplSessionAsync(t,r,n=null){return await this.evaluateReplSession(t,r,n)}}function w(e){return new TextEncoder().encode(String(e??""))}function tt(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}async function rt(e=[],t={}){const r=new Map;for(const n of e){const s=P(n.symbol,n.arity);r.set(s,await ot(n,t))}return{canCall(n,s){return r.has(P(n,s))},tryCall(n,s,a){const i=r.get(P(n,s));return i?ut(i,a):$("missing-callable-region")}}}async function nt(e,t={}){const r=I(e),n=t.readJson||Et,a=((t.manifest||await n(r.href)).callables||[]).map(i=>({symbol:i.symbol,arity:i.arity,inputIndex:i.inputIndex,result:i.result,resultProbe:i.resultProbe,keys:i.keys,url:St(Rt(i,"url"),r).href}));return rt(a,{...t,readBytes:t.readBytes})}function st(e=null,t=null,r=null){const n={[pe]:at(e),[me]:it(t),[he]:gt(r),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new oe},"wasi:cli/stdout":{getStdout:()=>new C},"wasi:cli/stderr":{getStderr:()=>new C},"wasi:cli/terminal-input":{TerminalInput:kt},"wasi:cli/terminal-output":{TerminalOutput:At},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new D},"wasi:io/error":{Error:Ut},"wasi:io/poll":{Pollable:D,poll:()=>[]},"wasi:io/streams":{InputStream:oe,OutputStream:C},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return yt(n)}function at(e){return{call(t){if(!e)throw new ae("no browser host provider is registered");if(typeof e.callBytes=="function")return bt(e.callBytes(t));if(typeof e.call=="function"){const r=e.call(tt(t));return Ue(r)?r.then(n=>w(n)):w(r)}throw new ae("browser host provider does not implement call")}}}function it(e){return{canCall(t,r){return typeof e?.canCall=="function"?!!e.canCall(t,r):!1},tryCall(t,r,n){return typeof e?.tryCall=="function"?e.tryCall(t,r,n):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:we}}}}}async function ot(e,t){const r=wt(e.resultProbe??e.result??"i64"),n=Number.isInteger(e.inputIndex)?e.inputIndex:0,s=Array.isArray(e.keys)?e.keys.map(String):[];try{return{result:r,inputIndex:n,keys:s,exports:await ct(e,t),blocker:null}}catch(a){return{result:r,inputIndex:n,keys:s,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:a?.message??String(a)}}}}async function ct(e,t){if(e.exports)return e.exports;if(e.instance?.exports)return e.instance.exports;if(typeof e.instantiate=="function"){const a=await e.instantiate();if(a?.exports)return a.exports;if(a?.instance?.exports)return a.instance.exports}const r=e.imports||t.imports||{};let n=e.module??null;if(!n){const a=t.readBytes||Re,i=e.moduleBytes??(e.url?await a(e.url,"WasmGC callable artifact"):null);if(!i)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");n=await WebAssembly.compile(S(i))}const s=await WebAssembly.instantiate(n,r);if(s?.exports)return s.exports;if(s?.instance?.exports)return s.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function lt(e,t,r){if(!e.optimizerManifestUrl&&!e.optimizerManifest)return null;const n=e.optimizerManifestUrl?I(e.optimizerManifestUrl,t).href:t.href;return nt(n,{manifest:e.optimizerManifest,readJson:e.readJson,readBytes:r})}function ut(e,t){if(e.blocker)return $(e.blocker.reason);try{const r=ht(t?.[e.inputIndex]);return r?(dt(e.exports,r),{tag:"executed",val:ft(e)}):$("missing-runtime-string-argument")}catch{return $("browser-wasmgc-callable-execution-error")}}function dt(e,t){const r=e?.rasa_memory,n=e?.rasa_prepare_utf8;if(!r?.buffer||typeof n!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const s=Math.ceil(t.byteLength/se),a=Math.ceil(r.buffer.byteLength/se);s>a&&r.grow(s-a),new Uint8Array(r.buffer,0,t.byteLength).set(t),n(t.byteLength)}function ft(e){switch(e.result){case"i64":return{tag:"int64",val:X(Z(e.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:pt(e.exports)};case"i64-map":return{tag:"i64-map",val:mt(e.exports,e.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${e.result}`)}}function pt(e){const t=Se(Z(e,"rasa_main_vector_len")),r=Y(e,"rasa_main_vector_i64_at");return Array.from({length:t},(n,s)=>X(r(s)))}function mt(e,t){const r=Se(Z(e,"rasa_main_map_len"));if(r!==t.length)throw new Error(`WasmGC map probe length ${r} did not match planned keys ${t.length}`);const n=Y(e,"rasa_main_map_i64_at");return t.map((s,a)=>({key:s,value:X(n(a))}))}function Z(e,t){return Y(e,t)()}function Y(e,t){const r=e?.[t];if(typeof r!="function")throw new Error(`missing WasmGC callable export ${t}`);return r}function ht(e){return e?.tag==="utf8-string"||e?.tag==="utf8String"?S(e.val):null}function $(e){return{tag:"refused",val:{reason:e,fallback:we}}}function P(e,t){return`${String(e)}/${Number(t)}`}function wt(e){switch(String(e)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(e)}}function Se(e){const t=Number(e);if(!Number.isInteger(t)||t<0)throw new Error(`invalid WasmGC probe length ${e}`);return t}function X(e){return typeof e=="bigint"?e:(typeof e=="number"&&Number.isSafeInteger(e),BigInt(e))}function gt(e){return{loadRunnerSources(t,r){if(typeof e?.loadRunnerSources=="function")return e.loadRunnerSources(t,r);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function bt(e){return Ue(e)?e.then(t=>S(t)):S(e)}function yt(e){return{...e,[qe]:e[pe],[Ve]:e[me],[Ze]:e[he],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function O(e){if(typeof e=="number")return e;let t=Xe;return e?.phases&&e.phases!=="all"&&(t=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((n,s)=>n|xt(s),0)),e?.traces&&(t|=Qe),t}function xt(e){switch(String(e)){case"reader":return ge;case"analysis":case"analyze":return be;case"ir":return ye;case"facts":return xe;case"eval":return Ee;default:return 0}}function ie(e,t){try{return JSON.parse(e)}catch(r){throw new Error(`failed to parse ${t}: ${r.message}`)}}function S(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):w(e)}async function Re(e,t){const r=await fetch(e);if(!r.ok)throw new Error(`failed to load ${t}: ${r.status}`);return S(await r.arrayBuffer())}async function Et(e){const t=await fetch(e);if(!t.ok)throw new Error(`failed to load JSON ${e}: ${t.status}`);return t.json()}function I(e,t=null){return new URL(String(e),t||globalThis.location?.href||import.meta.url)}function St(e,t){return new URL(String(e),t)}function Rt(e,t){if(!e||e[t]===void 0||e[t]===null||e[t]==="")throw new Error(`callable WasmGC manifest entry is missing ${t}`);return e[t]}function Ue(e){return e&&typeof e.then=="function"}class Ut{}class D{block(){}}class oe{}class C{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new D}}class kt{}class At{}const Bt=document.querySelector("#app");$t();_t();async function _t(){try{const t=(await It("./proofs.json")).proofs?.[0];if(!t)throw new Error("No proof modules were generated.");G(`Loading ${t.title} proof...`);const r=await Ot(t);Tt(t,r)}catch(e){G(e.message||String(e),"error")}}async function Ot(e){const t=await z(e.input),r=T(t),n=await Be("./browser-manifest.json",{fetch:async i=>{if(i!==e.browser?.["input-url"])throw new Error(`Unexpected proof fetch URL ${i}`);return{status:200,url:i,redirected:!1,type:"basic",headers:{entries(){return[["content-type","application/edn"]][Symbol.iterator]()}},async text(){return t}}}}),s=await Ge(V,{...n.engineOptions(),runtimeUrl:n.runtimeUrl}),a=s.createSession();try{for(const o of await n.configureSessionAsync(s,a,{phases:"all"}))v(o,"configure browser distribution");for(const o of e.sources)v(await s.evaluateSessionAsync(a,await z(o),{phases:"all"}),`load proof source ${o}`);const i=await s.evaluateSessionAsync(a,await z(e.browserEntry),{phases:"all",traces:!0});return v(i,"run browser proof"),{input:r,report:i,value:T(i)?.eval?.value,trace:n.host.lastTrace}}finally{s.freeSession(a)}}function $t(){Bt.innerHTML=`
    <style>
      :root {
        color-scheme: dark;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #111418;
        color: #f4f6f8;
      }
      body { margin: 0; }
      .shell {
        max-width: 1120px;
        margin: 0 auto;
        padding: 32px 24px 48px;
      }
      header {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: flex-end;
        border-bottom: 1px solid #2a313a;
        padding-bottom: 20px;
      }
      h1 { font-size: 28px; line-height: 1.1; margin: 0; letter-spacing: 0; }
      p {
        color: #b7c0ca;
        line-height: 1.5;
        margin: 8px 0 0;
        max-width: 760px;
      }
      .status {
        margin: 20px 0;
        color: #d7e5f5;
      }
      .status.error { color: #ffb4a8; }
      .grid {
        display: grid;
        grid-template-columns: minmax(520px, 1fr) minmax(300px, 360px);
        gap: 24px;
        align-items: start;
      }
      .image-pair {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }
      .image-panel h2 {
        font-size: 18px;
        line-height: 1.2;
        margin: 0 0 12px;
      }
      canvas {
        width: 100%;
        aspect-ratio: 1;
        image-rendering: pixelated;
        background: #05070a;
        border: 1px solid #2a313a;
      }
      .panel {
        border: 1px solid #2a313a;
        background: #171b21;
        border-radius: 8px;
        padding: 18px;
      }
      .facts {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 12px;
      }
      .fact {
        border: 1px solid #303944;
        border-radius: 6px;
        padding: 12px;
      }
      .fact span {
        display: block;
        color: #95a3b3;
        font-size: 12px;
        margin-bottom: 6px;
      }
      .fact strong {
        display: block;
        font-size: 18px;
        font-weight: 650;
        line-height: 1.2;
        overflow-wrap: anywhere;
      }
      pre {
        overflow: auto;
        white-space: pre-wrap;
        background: #0d1014;
        border: 1px solid #2a313a;
        border-radius: 6px;
        padding: 14px;
        max-height: 320px;
      }
      @media (max-width: 820px) {
        .grid { grid-template-columns: 1fr; }
        .image-pair { grid-template-columns: 1fr; }
        header { display: block; }
      }
    </style>
    <section class="shell">
      <header>
        <div>
          <h1>Rasa Browser Proofs</h1>
          <p>Generated browser modules from proof manifests. The compiler and runtime stay domain-oblivious.</p>
        </div>
      </header>
      <div id="status" class="status">Loading...</div>
      <div id="content"></div>
    </section>
  `}function Tt(e,t){const r=t.value,n=t.input,s=r?.image,a=r?.checksum,i=r?.cost,o=r?.memory,c=document.querySelector("#content"),u=N(e.title),l=s?.size?.width??0,d=s?.size?.height??0;c.innerHTML=`
    <div class="grid">
      <div class="image-pair">
        <div class="panel image-panel">
          <h2>Before</h2>
          <canvas id="proof-input-canvas" width="${l}" height="${d}" aria-label="${u} input"></canvas>
        </div>
        <div class="panel image-panel">
          <h2>After</h2>
          <canvas id="proof-output-canvas" width="${l}" height="${d}" aria-label="${u} output"></canvas>
        </div>
      </div>
      <div class="panel">
        <h2>${u}</h2>
        <div class="facts">
          ${m("Size",`${l} x ${d}`)}
          ${m("Checksum",a?.["sum-i64"])}
          ${m("Weighted",a?.["weighted-sum-i64"])}
          ${m("Current path",o?.current?.path)}
          ${m("Target",o?.target?.profile)}
          ${m("Target status",o?.target?.status)}
          ${m("Input bytes",o?.bytes?.["input-gray"])}
          ${m("Display bytes",o?.bytes?.["browser-rgba"])}
          ${m("Hot-loop reads",i?.["hot-loop"]?.reads)}
          ${m("Hot-loop writes",i?.["hot-loop"]?.writes)}
        </div>
        <pre>${N(t.report)}</pre>
      </div>
    </div>
  `,ce(document.querySelector("#proof-input-canvas"),n?.pixels||[]),ce(document.querySelector("#proof-output-canvas"),s?.pixels||[]),G(`Ran ${e.title} through browser runtime-Wasm.`)}function ce(e,t){const r=e.getContext("2d"),n=r.createImageData(e.width,e.height);t.forEach((s,a)=>{const i=a*4;n.data[i]=s,n.data[i+1]=s,n.data[i+2]=s,n.data[i+3]=255}),r.putImageData(n,0,0)}function m(e,t){return`<div class="fact"><span>${N(e)}</span><strong>${N(Nt(t))}</strong></div>`}function G(e,t=""){const r=document.querySelector("#status");r.textContent=e,r.className=`status ${t}`.trim()}function v(e,t){if(!/:status :ok/.test(e)||/:eval \{:status :failed/.test(e))throw new Error(`${t} failed:
${e}`)}async function It(e){const t=await fetch(e);if(!t.ok)throw new Error(`load failed: ${e}`);return await t.json()}async function z(e){const t=await fetch(e);if(!t.ok)throw new Error(`load failed: ${e}`);return await t.text()}function Nt(e){return e?.type==="keyword"?`:${e.name}`:e==null?"n/a":String(e)}function N(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}
