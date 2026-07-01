import{b as it,j as t,r as l,J as Rn,d as Nn}from"./react.js";import{i as ot,B as lt,C as ct}from"./graph.js";import{S as Sn,V as dt,E as ze,R as ut,D as mt,a as pt,l as ft,d as ht,k as yt}from"./editor.js";import{l as gt}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const En="wasm-component",xt="browser-component-adapter-pending",Tn="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.",wt="rasa-component/",$n="rasa:runtime/host",bt="rasa:runtime/host@0.1.0",jt="rasa:runtime/session@0.1.0",Mn=1,An=2,Ln=4,Cn=8,In=16,kt=Mn|An|Ln|Cn|In,vt=256;class Rt extends Error{constructor(n=Tn){super(n),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=En,this.unavailableReason=xt}}class be extends Error{constructor(n){super(n),this.name="RasaBrowserHostCallError"}}class Qe{static async load(n,s={}){const r=un(n),a=s.readBytes||At,i=await a(r,"Rasa runtime component"),o=un(s.adapterBaseUrl||wt,r),d=await import(new URL("ras-runtime.js",o).href),p=St(s.host),m=new Map,x=await d.instantiate(async b=>{const j=new URL(b,o),S=m.get(j.href);if(S)return S;const ue=await a(j,`Rasa component core module ${b}`),C=await WebAssembly.compile(ue);return m.set(j.href,C),C},p);return new Qe({url:r.href,adapterBaseUrl:o.href,byteLength:i.byteLength,imports:p,session:x.session||x[jt]})}constructor(n={}){if(!n.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=n.url??null,this.adapterBaseUrl=n.adapterBaseUrl??null,this.byteLength=n.byteLength??null,this.available=!0,this.runtimeKind=En,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=n.session,this.importObject=n.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new Rt(this.message)}evaluate(n,s=null){return this.session.evalSource(J(n),_e(s))}inspect(n,s=null){const r=this.session.inspectSource(J(n),_e(s));return dn(r,"inspection artifact")}syntaxTokens(n){const s=this.session.syntaxTokens(J(n));return dn(s,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(n){n!=null&&this.session.sessionFree(n)}loadPackage(n,s){return this.session.sessionLoadPackage(n,en(s))}evaluateSession(n,s,r=null){return this.session.sessionEval(n,J(s),_e(r))}}function J(e){return new TextEncoder().encode(String(e??""))}function Nt(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function St(e=null){const n={[$n]:Et(e),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new mn},"wasi:cli/stdout":{getStdout:()=>new Be},"wasi:cli/stderr":{getStderr:()=>new Be},"wasi:cli/terminal-input":{TerminalInput:Ct},"wasi:cli/terminal-output":{TerminalOutput:It},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new He},"wasi:io/error":{Error:Lt},"wasi:io/poll":{Pollable:He,poll:()=>[]},"wasi:io/streams":{InputStream:mn,OutputStream:Be},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return $t(n)}function Et(e){return{call(n){if(!e)throw new be("no browser host provider is registered");if(typeof e.callBytes=="function")return Tt(e.callBytes(n),"host.callBytes");if(typeof e.call=="function"){const s=e.call(Nt(n));if(qn(s))throw new be("host.call must be synchronous in this story");return J(s)}throw new be("browser host provider does not implement call")}}}function Tt(e,n){if(qn(e))throw new be(`${n} must be synchronous in this story`);return en(e)}function $t(e){return{...e,[bt]:e[$n],"wasi:cli/environment@0.2.6":e["wasi:cli/environment"],"wasi:cli/exit@0.2.6":e["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":e["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":e["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":e["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":e["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":e["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":e["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":e["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":e["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":e["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":e["wasi:io/error"],"wasi:io/poll@0.2.6":e["wasi:io/poll"],"wasi:io/streams@0.2.6":e["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":e["wasi:random/insecure-seed"]}}function _e(e){if(typeof e=="number")return e;let n=kt;return e?.phases&&e.phases!=="all"&&(n=(Array.isArray(e.phases)?e.phases:[e.phases]).reduce((r,a)=>r|Mt(a),0)),e?.traces&&(n|=vt),n}function Mt(e){switch(String(e)){case"reader":return Mn;case"analysis":case"analyze":return An;case"ir":return Ln;case"facts":return Cn;case"eval":return In;default:return 0}}function dn(e,n){try{return JSON.parse(e)}catch(s){throw new Error(`failed to parse ${n}: ${s.message}`)}}function en(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):J(e)}async function At(e,n){const s=await fetch(e);if(!s.ok)throw new Error(`failed to load ${n}: ${s.status}`);return en(await s.arrayBuffer())}function un(e,n=null){return new URL(String(e),n||globalThis.location?.href||import.meta.url)}function qn(e){return e&&typeof e.then=="function"}class Lt{}class He{block(){}}class mn{}class Be{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new He}}class Ct{}class It{}Sn.define();Sn.define();function qt(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}const pn=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),On="rasa.theme",Ot=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});Ot.dark;function _t(e=document.documentElement){const n=localStorage.getItem(On),s=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return _n(s,e),s}function _n(e,n=document.documentElement){const s=e==="light"?"light":"dark";return n.dataset.rasaTheme=s,n.setAttribute("data-theme",s),localStorage.setItem(On,s),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:s}})),s}function Bt(e=document.documentElement){return _n(e.dataset.rasaTheme==="light"?"dark":"light",e)}function fn(e){return e==="light"?"Dark":"Light"}const F=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function Y(e){return F.find(n=>n.id===e)||F[0]}const je="tiny-cnn",xe=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Pt=`(def m (model/load-model :${je}))
(model/summary m)`;function Ft(e=je){const n=Y(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class Dt{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,s){const r=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(r,{kind:n,value:s}),r}get(n,s=null){const r=this.resources.get(n);if(!r)throw new Error(`unknown resource handle ${n}`);if(s&&r.kind!==s)throw new Error(`resource ${n} has kind ${r.kind}, expected ${s}`);return r.value}}class Ut{constructor(){this.handlers=new Map}register(n,s,r){return this.handlers.set(We(n,s),r),this}invoke(n,s,r){const a=this.handlers.get(We(n,s));if(!a)throw new Error(`unsupported capability ${n}/${s}`);return a(r)}entries(){return[...this.handlers.keys()]}}function We(e,n){return`${e}/${n}`}function nn(e){return new Ht(e).parse()}function A(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Ne(e)?`:${e.name}`:tn(e)?e.name:Bn(e)?`(${e.items.map(A).join(" ")})`:Array.isArray(e)?`[${e.map(A).join(" ")}]`:`{${Object.entries(e).map(([n,s])=>`:${n} ${A(s)}`).join(" ")}}`}function oe(e,n=0){if(e==null||typeof e!="object"||Ne(e)||tn(e))return A(e);const s=" ".repeat(n+2),r=" ".repeat(n);if(Bn(e))return e.items.length===0?"()":`(
${e.items.map(i=>`${s}${oe(i,n+2)}`).join(`
`)}
${r})`;if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${s}${oe(i,n+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${s}:${i} ${oe(o,n+2)}`).join(`
`)}
${r}}`}function Vt(e){return{type:"keyword",name:e}}function zt(e){return{type:"symbol",name:e}}function Ne(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function tn(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function Bn(e){return!!(e&&typeof e=="object"&&e.type==="list")}class Ht{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==="("?this.list():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const s=this.form(),r=this.form();n[Wt(s)]=r}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}list(){this.expect("(");const n=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:n};n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const s=this.text[this.index++];if(s==='"')return n;if(s==="\\"){const r=this.text[this.index++];n+=r==="n"?`
`:r}else n+=s}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const s=this.text.slice(n,this.index);if(!s)throw new Error(`expected form at byte ${this.index}`);return s==="nil"?null:s==="true"?!0:s==="false"?!1:/^-?\d+(\.\d+)?$/.test(s)?Number(s):s.startsWith(":")?Vt(s.slice(1)):zt(s)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function Wt(e){return Ne(e)||tn(e)?e.name:String(e)}const Pe=Object.freeze(Object.fromEntries(F.map(e=>[e.id,`./models/${e.id}/model.json`])));class Fe extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class Kt{constructor(){this.resources=new Dt("browser"),this.registry=Jt(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const s=nn(n);this.lastTrace={requestText:n,request:s,responseText:"",packageName:s.package?.name||"unknown",exportName:s.export?.name||"unknown"};const r=this.route(s),a=A(r);return this.lastTrace.responseText=a,a}route(n){try{const s=n.package?.name,r=n.export?.name,a=n.args||[],i=this.invoke(s,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:s,exportName:r,capability:We(s,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(s){const r=s instanceof Fe?{status:y("failed"),kind:y("asset-not-prepared"),model:y(s.modelId),recoverable:!0,message:s.message}:{status:y("failed"),kind:y("provider-error"),message:s.message};return s instanceof Fe&&(this.pendingAssetModel=s.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:s.message},r}}invoke(n,s,r){return this.registry.invoke(n,s,r)}loadNamedModel(n){if(!Pe[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new Fe(n);if(!this.modelIds.has(n)){const s=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,s)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!Pe[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const s=await gt(Pe[n]);return this.catalog.set(n,s),s}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,s])=>{const r=this.summary(s);return{id:n,handle:s,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(n){const s=this.model(n),r=s.layers.map(K);return{view:y("model-summary"),model:s.name,handle:n,layers:r.length,parameters:G(r.map(a=>a.params)),trainableParameters:G(r.map(a=>a.trainableParams)),bytes:G(r.map(a=>a.bytes)),inputs:X(s.inputs?.[0]?.shape),outputs:X(s.outputs?.[0]?.shape),graph:hn(s),layerTable:r}}graph(n){return{view:y("graph"),graph:hn(this.model(n))}}layerCount(n){const s=this.model(n);return{view:y("numeric-aggregate"),label:"layer count",value:s.layers.length,unit:y("layers"),model:s.name,handle:n}}layersByKind(n,s){const r=this.model(n).layers.map(K).filter(a=>a.kind===s);return{view:y("layers-by-kind"),kind:y(s),count:r.length,layers:r}}topLayers(n,s){const r=Number(s.limit||5),i=Ke(s.by||y("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(K).sort((c,d)=>d[i]-c[i]).slice(0,r);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(n,s){const r=this.layerByName(n,s);return{view:y("layer-inspection"),layer:K(r),config:Xt(r.getConfig()),weights:r.weights.map(Pn)}}layerTensorSize(n,s){const{layer:r,index:a}=this.layerByRef(n,s),i=K(r,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,s){const r=this.layerByName(n,s);return{view:y("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>Gt(r.weights[i],a))}}weightHistogram(n,s,r){const a=this.layerByName(n,s),i=Number(r.bins||24),o=a.getWeights().map((c,d)=>({name:a.weights[d]?.originalName||`weight_${d}`,bins:Yt(Array.from(c.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,s){const r=this.model(n).layers.find(a=>a.name===s);if(!r)throw new Error(`unknown layer ${s}`);return r}layerByRef(n,s){const r=this.model(n);if(typeof s=="number"){const o=Math.trunc(s)-1,c=r.layers[o];if(!c)throw new Error(`unknown layer index ${s}`);return{layer:c,index:o}}const a=String(s),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function Jt(e){return new Ut().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(Ke(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,s])=>e.layersByKind(n,Ke(s))).register("demo.tfjs/layers","top",([n,s={}])=>e.topLayers(n,s)).register("demo.tfjs/layer","inspect",([n,s])=>e.inspectLayer(n,s)).register("demo.tfjs/layer","tensor-size",([n,s])=>e.layerTensorSize(n,s)).register("demo.tfjs/weights","stats",([n,s])=>e.weightStats(n,s)).register("demo.tfjs/weights","histogram",([n,s,r={}])=>e.weightHistogram(n,s,r))}function K(e,n=null){const s=e.weights.map(Pn);return{id:e.name,index:n??Zt(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:X(e.inputShape),output:X(e.outputShape),params:G(s.map(r=>r.params)),trainableParams:G(s.filter(r=>r.trainable).map(r=>r.params)),bytes:G(s.map(r=>r.bytes))}}function hn(e){const n=e.layers.map((s,r)=>({...K(s,r),index:r}));return{nodes:n,edges:n.slice(1).map((s,r)=>({id:`${n[r].id}->${s.id}`,source:n[r].id,target:s.id}))}}function Pn(e){const n=e.shape.reduce((s,r)=>s*r,1);return{name:e.originalName,shape:X(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function Gt(e,n){const s=Array.from(n.dataSync()),r=s.length,a=Math.min(...s),i=Math.max(...s),o=s.reduce((p,m)=>p+m,0)/r,c=s.reduce((p,m)=>p+(m-o)**2,0)/r,d=s.filter(p=>p===0).length;return{name:e?.originalName||"weight",shape:X(n.shape),params:r,min:B(a),max:B(i),mean:B(o),stddev:B(Math.sqrt(c)),sparsity:B(d/r)}}function Yt(e,n){const s=Math.min(...e),r=Math.max(...e),a=r===s?1:(r-s)/n,i=Array.from({length:n},(o,c)=>({start:B(s+c*a),end:B(s+(c+1)*a),count:0}));for(const o of e){const c=Math.min(n-1,Math.max(0,Math.floor((o-s)/a)));i[c].count+=1}return i}function Xt(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(s=>e[s]!==void 0).map(s=>[s,e[s]]))}function Ke(e){return Ne(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function X(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(yn).join(" x "):e.map(yn).join(" x "):"?"}function yn(e){return e==null?"*":String(e)}function G(e){return e.reduce((n,s)=>n+s,0)}function B(e){return String(Math.round(e*1e5)/1e5)}function Zt(e){return Number(e._index??0)}const Fn=`{:packages
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
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function le(e){return e==null?"nil":Se(e)?`:${e.name}`:Ee(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(le).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,s])=>`:${n} ${le(s)}`).join(" ")}}`:String(e)}function Je(e,n=0){if(e==null||typeof e!="object"||Se(e)||Ee(e))return le(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(c=>`${i}${Je(c,n+2)}`).join(`
`)}
${o}]`}const s=Object.entries(e);if(s.length===0)return"{}";const r=" ".repeat(n+2),a=" ".repeat(n);return`{
${s.map(([i,o])=>`${r}:${i} ${Je(o,n+2)}`).join(`
`)}
${a}}`}function Qt(e,n=""){return Se(e)||Ee(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function Se(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Ee(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function es(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Se(e)&&!Ee(e)?Object.keys(e).length:0}function De(e){if(!e||!e.includes(":traces"))return null;try{return nn(e).traces||null}catch{return null}}function sn(e){const n=Array.isArray(e?.traces)?e.traces:[],s=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:Qt(e?.scope,"waiting"),traces:n.length,requests:s.length,empty:n.length===0&&s.length===0}}function ns(e){const n=[];return Ge(e,[],n),n}function gn(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:le(e)}function ts(e){return Je(e)}function ke(e){return e==null?null:Array.isArray(e)?e.map(ke):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,s])=>[`:${n}`,ke(s)])):e}function Ge(e,n,s){const r=s.length,a={id:r,path:n,label:rs(n),kind:ss(e),value:es(e)?null:le(e),children:[]};return s.push(a),Array.isArray(e)?e.forEach((i,o)=>{const c=Ge(i,[...n,o],s);a.children.push(c)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const c=Ge(o,[...n,i],s);a.children.push(c)}),r}function ss(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function rs(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),Ye=e=>({type:"symbol",name:e});function xn(e){const n=is(e),s=os(e),r=ls(e);return{source:as(e),value:n,providerTrace:s,traceSection:r,runtimeReport:`{:status :ok :traces ${Xe(r)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function as(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function is(e){const n=Dn(e),s=n.reduce((a,i)=>a+i.params,0),r=n.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:s,trainableParameters:s,bytes:r,inputs:cs(e),outputs:ds(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>us(n[i].id,a.id))},layerTable:n}}function os(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${Dn(e).length}}}`}}function ls(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[W(0,"source-form",{symbol:Ye("model/load-model"),span:{start:7,end:23}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),W(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[W(0,"source-form",{symbol:Ye("model/summary"),span:{start:31,end:44}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),W(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[wn(0,"demo.tfjs/model","load-model","model/load-model",e.id),wn(1,"demo.tfjs/model","summary","model/summary")]}}function Dn(e){switch(e.id){case"tiny-mlp":return[w("feature_input","input","* x 16",0,0),w("hidden_dense","dense","* x 32",544,2176),w("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[w("signal_input","input","* x 32",0,0),w("encoder_dense","dense","* x 12",396,1584),w("bottleneck","dense","* x 4",52,208),w("decoder_dense","dense","* x 12",60,240),w("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[w("token_input","input","* x 8",0,0),w("token_embedding","embedding","* x 8 x 16",1600,6400),w("pool_tokens","global-average-pooling1d","* x 16",0,0),w("projection_dense","dense","* x 8",136,544)];default:return[w("input_image","input","* x 28 x 28 x 1",0,0),w("stem_conv","conv2d","* x 26 x 26 x 8",80,320),w("flatten","flatten","* x 5408",0,0),w("classifier_dense","dense","* x 10",5306,21224)]}}function cs(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function ds(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function w(e,n,s,r,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:s,params:r,trainableParams:r,bytes:a}}function us(e,n){return{id:`${e}->${n}`,source:e,target:n}}function W(e,n,s){return{id:e,kind:g(n),subject:null,"source-id":"browser://repl",span:s.span||null,data:s,diagnostics:[],annotations:[],evidence:[]}}function wn(e,n,s,r,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:n,export:s,capability:g(`${n}/${s}`)},source:{symbol:Ye(r),model:a?g(a):null},admission:{"call-id":e,identity:{package:n,export:s,capability:g(`${n}/${s}`)},effects:[g("model/read")]},"trace-id":e}}function Xe(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(Xe).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,s])=>`:${n} ${Xe(s)}`).join(" ")}}`}const ms=`(ns rasa.core)

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

(def ^{:doc "Looks up a map key, vector index, or set member and returns nil or the supplied default when absent."
       :rasa.impl/backing rasa.prim/get}
  get
  rasa.prim/get)

(def ^{:doc "Returns whether a map has a key, vector has an index, or set has a member."
       :rasa.impl/backing rasa.prim/contains?}
  contains?
  rasa.prim/contains?)
`,ps=`import "@tensorflow/tfjs-backend-cpu";
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
`,fs="./ras.wasm",Ze=Object.freeze({phases:"all",traces:!0}),Un=e=>e<2;function hs(){const e=ys()==="trace",n=l.useRef(null),s=l.useRef(null),r=l.useRef(0),a=l.useRef(null),i=l.useRef(!1),[o,c]=l.useState(je),[d,p]=l.useState(()=>_t()),[m,x]=l.useState(()=>e?xn(Y(je)).source:Pt),[b,j]=l.useState("loading"),[S,ue]=l.useState(!1),[C,on]=l.useState(0),[Kn,Te]=l.useState(null),[ln,I]=l.useState(null),[$e,Q]=l.useState(""),[ee,ne]=l.useState(null),[te,se]=l.useState(null),[Me,me]=l.useState([]),[Ae,re]=l.useState([]),[Jn,Le]=l.useState(null),[Gn,Ce]=l.useState({}),[D,pe]=l.useState(null),[fe,Ie]=l.useState(null),[he,cn]=l.useState(null),[Yn,Xn]=l.useState("boundary"),[Zn,ae]=l.useState([]),f=l.useMemo(()=>e?xn(Y(o)):null,[e,o]),qe=b==="component adapter pending";l.useEffect(()=>{const u=h=>p(h.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",u),()=>window.removeEventListener("rasa-theme-change",u)},[]),l.useEffect(()=>{let u=!0;async function h(){try{if(e&&f){if(!u)return;const v=await bn().catch(()=>({}));if(!u)return;Q(f.runtimeReport),ne(f.providerTrace),se(f.traceSection),me([f.loadedModel]),re([f.loadedModel.id]),Ce(v),pe(f.value),Ie(f.loadedModel.handle),cn(null),Te({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),I({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ae([{id:"setup",kind:"setup",source:xe,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:f.source,result:Ve(f.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:f.value}]),j("ready");return}const O=$(),R=new Kt,N=$(),k=await bn(),U=T(N),V=$(),E=await Qe.load(gs(),{host:R}),_=T(V);if(E.available===!1){if(!u)return;s.current=E,Ce(k),Q(""),ne(null),se(null),me([]),re([]),pe(null),Ie(null),Te({manifestMs:U,engineMs:_,setupMs:0,totalMs:T(O)}),I({run:0,status:"pending",capability:"browser wasm component adapter",view:"component-adapter-pending",assetState:"unavailable",totalMs:0,finalEvalMs:0}),ae([{id:"setup",kind:"setup",source:xe,result:Tn,capability:"browser wasm component adapter",view:"component-adapter-pending",status:"pending"}]),j("component adapter pending");return}const M=E.createSession(),ye=$();E.loadPackage(M,Fn);const ge=E.evaluateSession(M,ms,Ze);vn(ge,"Rasa core boot");const z=E.evaluateSession(M,xe,Ze);vn(z,"model setup");const Oe=T(ye);if(!u)return;n.current=R,s.current=E,r.current=M,Q(z),ne(R.lastTrace),se(De(z)),me(R.loadedModels()),re(R.preparedModelIds()),Ce(k),Te({manifestMs:U,engineMs:_,setupMs:Oe,totalMs:T(O)}),ae([{id:"setup",kind:"setup",source:xe,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),j("ready")}catch(O){u&&j(`failed: ${O.message}`)}}return h(),()=>{u=!1,s.current&&r.current&&s.current.freeSession(r.current)}},[e,f]);const Qn=l.useCallback(async()=>{if(e&&f){const v=a.current?.state.doc.toString()||m,ie=C+1;on(ie),pe(f.value),ne(f.providerTrace),se(f.traceSection),Q(f.runtimeReport),I({run:ie,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ae(H=>[...H,{id:`run-${H.length}`,kind:"run",source:v,result:Ve(f.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:f.value}]);return}if(qe||s.current?.available===!1){I(v=>({...v||{},status:"pending",view:"component-adapter-pending"}));return}if(!s.current||!r.current||!n.current||i.current)return;i.current=!0,ue(!0),Le(null);const u=a.current?.state.doc.toString()||m,h=n.current,O=$();let R=$e,N=null,k=null,U=null,V=null,E=0,_=0,M=0,ye=!1;I({status:"running",assetState:"checking",totalMs:0});try{const v=$();R=kn(s.current,r.current,h,u),U=De(R),_=T(v);const ie=tr(h);if(ie){const H=ie;V=H,Le(H),I({status:"running",assetState:"fetching",assetModel:V,firstEvalMs:_,totalMs:T(O)});const rt=$();await h.prepareModel(H),E=T(rt),re(h.preparedModelIds()),h.pendingAssetModel=null;const at=$();R=kn(s.current,r.current,h,u),U=De(R),M=T(at)}else M=_;N=h.lastValue,k=h.lastTrace}catch(v){ye=!0,N=nr("asset-load-error",v.message),k={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,ue(!1)}const ge=T(O),z=C+1,Oe={run:z,status:k?.status||"ok",capability:L(k),view:k?.view||ve(N),assetState:ye?"failed":V?"fetched":"cached",assetModel:V,assetLoadMs:E,firstEvalMs:_,finalEvalMs:M,totalMs:ge,cacheCount:h.preparedModelIds().length};Q(R),pe(N),ne(k),se(U),me(h.loadedModels()),re(h.preparedModelIds()),Le(null),I(Oe),N?.handle&&Ie(N.handle),on(z),ae(v=>[...v,{id:`run-${v.length}`,kind:"run",source:u,result:Ve(N),capability:L(k),view:k?.view||ve(N),status:k?.status||"ok",durationMs:ge,value:N}])},[e,f,C,qe,$e,m,te]),q=l.useMemo(()=>Hs(D),[D]),et=l.useMemo(()=>fe?Me.find(u=>u.handle===fe):null,[fe,Me]),nt=l.useMemo(()=>q.nodes.map(u=>u.id).join("|")||"empty-graph",[q.nodes]),tt=l.useMemo(()=>q.nodes.map((u,h)=>({id:u.id,position:{x:h*220,y:h%2===0?0:28},data:{label:t.jsxs("div",{className:"node-label",children:[t.jsx("strong",{children:u.name}),t.jsx("span",{children:u.kind}),t.jsxs("em",{children:[u.params," params"]})]}),layer:u},type:"default",className:he===u.id?"selected-node":""})),[q.nodes,he]),st=l.useMemo(()=>q.edges.map(u=>({...u,animated:!0})),[q.edges]);return t.jsxs("main",{className:"app-shell",children:[t.jsxs("header",{className:"hero",children:[t.jsxs("div",{className:"brand-lockup",children:[t.jsx("img",{src:pn.logo,alt:"Rasa"}),t.jsxs("div",{children:[t.jsx("span",{children:"Rasa Model Explorer"}),t.jsx("h1",{children:"Model architecture explorer"}),t.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),t.jsxs("div",{className:"hero-status",children:[t.jsx("img",{src:pn.mark,alt:"","aria-hidden":"true"}),t.jsx("span",{className:b==="ready"?"ok":"warn",children:b}),t.jsx("span",{children:"tfjs assets on first run"}),t.jsx("span",{children:"static bundle"}),t.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>p(Bt()),"aria-label":`Switch to ${fn(d).toLowerCase()} theme`,children:fn(d)})]})]}),t.jsxs("section",{className:"boundary-theater",children:[t.jsx(ws,{fixture:e,providerTrace:ee,traceSection:te,runMetrics:ln}),t.jsxs("aside",{className:"theater-left",children:[t.jsxs("div",{className:"studio-head",children:[t.jsx("span",{className:"label",children:"Model & extension"}),t.jsx("strong",{children:"What Rasa is allowed to touch"})]}),t.jsx($s,{models:Me,activeHandle:fe,preparedModelIds:Ae}),t.jsx(Is,{modelManifest:Gn[o],modelId:o,compact:!0})]}),t.jsxs("section",{className:"theater-stage",children:[t.jsx(bs,{value:D,graph:q,runCount:C,selectedModelId:o,preparedModelIds:Ae,running:S,fixture:e}),t.jsxs("div",{className:"graph-wrap graph-theater",children:[qe?t.jsx(xs,{}):null,t.jsx(js,{traceSection:te,providerTrace:ee,value:D,selectedModelId:o,activeModelId:et?.id||null,running:S}),t.jsxs(ot,{nodes:tt,edges:st,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(u,h)=>cn(h.id),children:[t.jsx(lt,{color:"#29313d",gap:18}),t.jsx(ct,{showInteractive:!1})]},nt)]}),t.jsx(vs,{traceSection:te,providerTrace:ee,runMetrics:ln,bootMetrics:Kn})]}),t.jsxs("aside",{className:"theater-inspector",children:[t.jsx(ks,{value:D,trace:ee,selectedLayer:he}),t.jsx(Rs,{activeTab:Yn,setActiveTab:Xn,value:D,selectedLayer:he,trace:ee,traceSection:te,runtimeReport:$e,fixture:e})]}),t.jsxs("section",{className:"theater-console","aria-label":"Rasa command console",children:[t.jsx(Ss,{entries:Zn}),t.jsxs("div",{className:"console-command",children:[t.jsx(Ts,{selectedModelId:o,setSelectedModelId:c,setSource:x,editorRef:a,prepared:Ae.includes(o),preparing:Jn===o}),t.jsx(Ns,{source:m,editorRef:a,run:Qn,disabled:b!=="ready"||S,running:S})]})]})]})]})}function ys(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function gs(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||fs}function xs(){return t.jsxs("section",{className:"runtime-pending-notice","aria-label":"Browser execution pending",children:[t.jsx("span",{className:"label",children:"Wasm component runtime"}),t.jsx("strong",{children:"Browser execution is pending the Wasm component adapter."}),t.jsxs("p",{children:["Use ",t.jsx("code",{children:"ras"})," or ",t.jsx("code",{children:"ras-wasm"})," locally for execution. This static page still exposes manifests, extension source, model catalog data, and fixture traces."]})]})}function ws({fixture:e,providerTrace:n,traceSection:s,runMetrics:r}){const a=Array.isArray(s?.["host-requests"])?s["host-requests"]:[],i=a.length?a[a.length-1]:null,o=sn(s),c=[{label:e?"Replay form":"Rasa source",title:de(i)||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:ce(i)||L(n)||"waiting",detail:`${o.requests} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"TF.js provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:r?.view?`:${r.view}`:"Rasa value",detail:r?.totalMs!==void 0?Re(r.totalMs):"structured data",tone:"return"}];return t.jsx("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:c.map(d=>t.jsxs("article",{className:`runway-step ${d.tone}`,children:[t.jsx("span",{children:d.label}),t.jsx("strong",{children:d.title}),t.jsx("em",{children:d.detail})]},d.label))})}function bs({value:e,graph:n,runCount:s,selectedModelId:r,preparedModelIds:a,running:i,fixture:o}){const c=Y(r),d=o?"fixture layer records":"live layer records";return t.jsxs("header",{className:"stage-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Model graph"}),t.jsx("h2",{children:n.nodes.length?`${n.nodes.length} ${d}`:"No model value yet"}),t.jsxs("p",{children:[c.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),t.jsxs("div",{className:"stage-metrics",children:[t.jsx(P,{label:"Run",value:i?"running":s}),t.jsx(P,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),t.jsx(P,{label:"Assets",value:`${a.length}/${F.length}`})]})]})}function js({traceSection:e,providerTrace:n,value:s,selectedModelId:r,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],c=o.length?o[o.length-1]:null,d=Y(r),p=a?Y(a):null,m=a&&r!==a,x=i?"Rasa is evaluating the current form.":m?`Editor targets ${d.title}; run it to replace ${p.title}.`:p?`${p.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return t.jsxs("aside",{className:`boundary-spotlight ${m?"pending":""}`,"aria-label":"Current boundary spotlight",children:[t.jsxs("div",{className:"spotlight-flow",children:[t.jsxs("div",{children:[t.jsx("span",{children:"form"}),t.jsx("strong",{children:de(c)||"waiting for run"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"admitted identity"}),t.jsx("strong",{children:ce(c)||L(n)||"not admitted yet"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"returned value"}),t.jsx("strong",{children:s?.view?.name?`:${s.view.name}`:"none yet"})]})]}),t.jsx("p",{children:x})]})}function ks({value:e,trace:n,selectedLayer:s}){const[r,a]=l.useState(null),i=e?oe(e):"nil";return t.jsxs(t.Fragment,{children:[t.jsxs("article",{className:"value-lens",children:[t.jsx("span",{className:"label",children:"Selected value"}),t.jsx("strong",{children:ve(e)}),t.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),t.jsx(Z,{text:Gs(i),mode:"rasa"}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:L(n)||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"selected"}),t.jsx("dd",{children:s||"none"})]})]}),t.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&t.jsx(rn,{kind:"Rasa value",title:ve(e),description:"The real structured value returned to the browser from the Rasa session.",meta:an(i,"rasa"),onClose:()=>a(null),children:t.jsx("div",{className:"modal-code-stack result-only",children:t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"returned value"}),t.jsx(Z,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function vs({traceSection:e,providerTrace:n,runMetrics:s,bootMetrics:r}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return t.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[t.jsx(P,{label:"Host request",value:de(i)||"waiting"}),t.jsx(P,{label:"Canonical identity",value:ce(i)||L(n)||"waiting"}),t.jsx(P,{label:"Status",value:n?.status||s?.status||"waiting"}),t.jsx(P,{label:"Time",value:s?.totalMs!==void 0?Re(s.totalMs):r?Re(r.totalMs):"pending"})]})}function Rs({activeTab:e,setActiveTab:n,value:s,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:c}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return t.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[t.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(p=>t.jsx("button",{className:e===p.id?"active":"",type:"button","aria-pressed":e===p.id,onClick:()=>n(p.id),children:p.label},p.id))}),t.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&t.jsx(As,{traceSection:i,providerTrace:a,fixture:c}),e==="result"&&t.jsxs(t.Fragment,{children:[t.jsx(Ms,{value:s,trace:a,traceSection:i}),t.jsx(Ps,{value:s,selectedLayer:r})]}),e==="data"&&t.jsxs(t.Fragment,{children:[t.jsx(Vn,{title:"Returned Rasa value",value:s,defaultOpen:!0}),t.jsxs("details",{className:"runtime-report",children:[t.jsx("summary",{children:"Runtime report"}),t.jsx("pre",{children:o})]})]})]})]})}function Ns({source:e,editorRef:n,run:s,disabled:r,running:a}){const i=l.useRef(null),o=l.useRef(s);return l.useEffect(()=>{o.current=s},[s]),l.useEffect(()=>{const c=new ze({parent:i.current,state:pt.create({doc:e,extensions:[ft(),ht(),Qs,Zs,yt.of(qt(()=>o.current())),ze.lineWrapping]})});return n.current=c,()=>c.destroy()},[]),t.jsxs("div",{className:"editor-panel",children:[t.jsxs("div",{className:"editor-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa input"}),t.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),t.jsx("span",{children:"Primary+Enter runs"})]}),t.jsx("div",{className:"editor-host",ref:i}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),t.jsx("button",{className:"run-button",type:"button",onClick:s,disabled:r,children:a?"Running...":"Run"})]})]})}function Ss({entries:e}){const n=l.useRef(null),[s,r]=l.useState(null),a=s?Ks(s):"";return l.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),t.jsxs(t.Fragment,{children:[t.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:e.length?e.map(i=>t.jsx(Es,{entry:i,onOpenResult:()=>r(i)},i.id)):t.jsxs("article",{className:"transcript-entry",children:[t.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),t.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),s&&t.jsx(rn,{kind:"Rasa value",title:s.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:an(a,"rasa"),onClose:()=>r(null),children:t.jsxs("div",{className:"modal-code-stack",children:[t.jsxs("section",{className:"form-section",children:[t.jsx("span",{className:"modal-section-label",children:"form"}),t.jsx(Z,{text:s.source,mode:"rasa",numbered:!0})]}),t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"result"}),t.jsx(Z,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function Es({entry:e,onOpenResult:n}){return t.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[t.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&t.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[t.jsx("pre",{children:Js(e.result)}),t.jsx("span",{children:"Open full value"})]}),t.jsxs("div",{className:"transcript-meta",children:[t.jsx("span",{children:e.capability||"session"}),t.jsx("span",{children:e.view}),t.jsx("span",{children:e.status}),e.durationMs!==void 0&&t.jsx("span",{children:Re(e.durationMs)})]})]})}function Ts({selectedModelId:e,setSelectedModelId:n,setSource:s,editorRef:r,prepared:a,preparing:i}){const o=Ft(e).slice(0,5),c=d=>{n(d.target.value)};return t.jsxs("div",{className:"command-shelf",children:[t.jsxs("div",{className:"command-shelf-head",children:[t.jsxs("label",{className:"model-picker",children:[t.jsx("span",{children:"Model"}),t.jsx("select",{value:e,onChange:c,children:F.map(d=>t.jsx("option",{value:d.id,children:d.title},d.id))})]}),t.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),t.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(d=>t.jsxs("article",{className:"command-chip",children:[t.jsxs("div",{children:[t.jsx("strong",{children:d.label}),t.jsx("span",{children:zs(d.source)})]}),t.jsxs("div",{className:"command-actions",children:[t.jsx("button",{type:"button",title:`Insert ${d.label} at the cursor`,onClick:()=>Us(d.source,s,r),children:"Insert"}),t.jsx("button",{type:"button",title:`Append ${d.label} below the current editor text`,onClick:()=>Vs(d.source,s,r),children:"Append"})]})]},d.label))})]})}function $s({models:e,activeHandle:n,preparedModelIds:s}){const r=n?e.find(a=>a.handle===n):null;return t.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:r.name})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"id"}),t.jsx("dd",{children:r.id})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"handle"}),t.jsx("dd",{children:r.handle})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"layers"}),t.jsx("dd",{children:r.layers})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:r.parameters})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"size"}),t.jsx("dd",{children:rr(r.bytes||0)})]})]})]},r.handle||r.id):t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:"none yet"})]}),t.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),t.jsxs("div",{className:"catalog-note",children:[F.length," static catalog models are available. ",s.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Ms({value:e,trace:n,traceSection:s}){const r=sr(e),a=sn(s);return t.jsxs("section",{className:"projection-card",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Projection"}),t.jsx("strong",{children:r.renderer}),t.jsx("p",{children:r.reason})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"Rasa view"}),t.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Capability"}),t.jsx("dd",{children:n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Core traces"}),t.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Status"}),t.jsx("dd",{children:n?.status||"waiting"})]})]})]})}function As({traceSection:e,providerTrace:n,fixture:s=!1}){const r=sn(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return t.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[t.jsxs("div",{className:"boundary-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa boundary"}),t.jsx("strong",{children:r.empty?"Waiting for admitted host evidence":s?"Visual fixture replay":`Live Wasm ${r.scope} evidence`}),s&&t.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),t.jsxs("span",{children:[r.traces," traces"]})]}),t.jsxs("div",{className:"boundary-path",children:[t.jsx(Ue,{title:"Rasa form",value:de(a[0])||"source expression"}),t.jsx(Ue,{title:"Canonical identity",value:ce(a[0])||L(n)||"package/export"}),t.jsx(Ue,{title:"Browser provider",value:n?.status?n.status:"waiting"})]}),t.jsxs("details",{className:"trace-section",open:!0,children:[t.jsx("summary",{children:"Admitted host calls"}),t.jsx("div",{className:"trace-list",children:a.length?a.map(i=>t.jsx(Ls,{request:i},i["call-id"])):t.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),t.jsx(Cs,{trace:n}),t.jsx(Vn,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Ue({title:e,value:n}){return t.jsxs("article",{children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function Ls({request:e}){return t.jsxs("article",{className:"host-request-card",children:[t.jsxs("div",{children:[t.jsxs("span",{children:["call ",e["call-id"]??"?"]}),t.jsx("strong",{children:ce(e)})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"source"}),t.jsx("dd",{children:de(e)||"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:gn(e.identity?.capability)})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"effects"}),t.jsx("dd",{children:(e.admission?.effects||[]).map(gn).join(" ")||"none"})]})]})]})}function Cs({trace:e}){return t.jsxs("article",{className:"provider-bridge",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Browser bridge"}),t.jsx("strong",{children:L(e)||"waiting"})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"status"}),t.jsx("dd",{children:e?.status||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"args"}),t.jsx("dd",{children:e?.argsCount??"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"view"}),t.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),t.jsxs("details",{className:"bridge-details",children:[t.jsx("summary",{children:"Request / response data"}),t.jsx("pre",{children:e?.requestText||"no provider request yet"}),t.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function Vn({title:e,value:n,defaultOpen:s=!1}){const r=l.useMemo(()=>ns(n),[n]),a=l.useMemo(()=>ke(n),[n]),i=r.slice(0,12);return t.jsxs("details",{className:"data-projection",open:s,children:[t.jsxs("summary",{children:[t.jsx("span",{children:e}),t.jsxs("strong",{children:[r.length," node(s)"]})]}),t.jsx("div",{className:"projection-viewer",children:t.jsx(Rn,{data:a||{},shouldExpandNode:Un,clickToExpandNode:!0,compactTopLevel:!0,style:{...Nn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>t.jsxs("article",{children:[t.jsx("span",{children:o.label}),t.jsx("strong",{children:o.value||o.kind}),t.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&t.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Compact Rasa data"}),t.jsx("pre",{className:"data-block",children:ts(n)})]})]})}function Is({modelManifest:e,modelId:n,compact:s=!1}){const[r,a]=l.useState(null),i=qs(e,n);return t.jsxs("section",{className:`extension-panel ${s?"compact":""}`,children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Open the extension"}),t.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),t.jsx("div",{className:"extension-assets",children:i.map(o=>t.jsx(Os,{asset:o,onOpen:()=>a(o)},o.id))}),r&&t.jsx(_s,{asset:r,onClose:()=>a(null)})]})}function qs(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:Fn,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:ps,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Os({asset:e,onOpen:n}){return t.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[t.jsx("span",{children:e.kind}),t.jsx("strong",{children:e.title}),t.jsx("em",{children:e.description})]})}function _s({asset:e,onClose:n}){return t.jsx(rn,{kind:e.kind,title:e.title,description:e.description,meta:an(e.text,e.mode),onClose:n,children:t.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"projection-viewer large",children:t.jsx(Rn,{data:ke(e.value),shouldExpandNode:Un,clickToExpandNode:!0,compactTopLevel:!0,style:{...Nn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Raw manifest JSON"}),t.jsx(Z,{text:e.text,mode:"json",numbered:!0})]})]}):t.jsx(Z,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function rn({kind:e,title:n,description:s,meta:r=[],onClose:a,children:i}){const o=l.useId(),c=l.useId(),d=l.useRef(null),p=l.useRef(null);return l.useEffect(()=>{const m=document.activeElement;return p.current?.focus(),()=>{m?.isConnected&&typeof m.focus=="function"&&m.focus()}},[]),l.useEffect(()=>{const m=x=>{if(x.key==="Escape"){x.preventDefault(),a();return}if(x.key!=="Tab"||!d.current)return;const b=Bs(d.current);if(!b.length){x.preventDefault();return}const j=b[0],S=b[b.length-1];d.current.contains(document.activeElement)?x.shiftKey&&document.activeElement===j?(x.preventDefault(),S.focus()):!x.shiftKey&&document.activeElement===S&&(x.preventDefault(),j.focus()):(x.preventDefault(),j.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),t.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":c,children:[t.jsx("div",{className:"asset-modal-backdrop",onClick:a}),t.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:e}),t.jsx("h2",{id:o,children:n}),t.jsx("p",{id:c,children:s}),r.length>0&&t.jsx("div",{className:"modal-meta",children:r.map(m=>t.jsxs("span",{children:[t.jsx("strong",{children:m.value}),m.label]},m.label))})]}),t.jsx("button",{ref:p,type:"button",onClick:a,children:"Close"})]}),i]})]})}function Bs(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function Z({text:e,mode:n="rasa",numbered:s=!1}){const r=String(e||"").split(`
`);return t.jsx("pre",{className:`line-code ${s?"numbered":""}`,children:r.map((a,i)=>t.jsxs("span",{className:"code-line",children:[s&&t.jsx("span",{className:"line-number",children:i+1}),t.jsx("code",{children:Ys(a||" ",n)})]},i))})}function Ps({value:e,selectedLayer:n}){if(!e)return t.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return t.jsx("pre",{className:"data-block",children:A(e)});if(e.view?.name==="weight-histogram")return t.jsx(Fs,{value:e});if(e.view?.name==="weight-stats")return t.jsx(Ds,{value:e});const s=n?Ws(e,n):null;return t.jsxs("div",{className:"inspection-stack",children:[s&&t.jsx(we,{layer:s}),Array.isArray(e.layers)&&e.layers.map(r=>t.jsx(we,{layer:r},r.id)),Array.isArray(e.layerTable)&&e.layerTable.map(r=>t.jsx(we,{layer:r,compact:!0},r.id)),e.layer&&t.jsx(we,{layer:e.layer}),t.jsx(zn,{value:e})]})}function Fs({value:e}){const n=e.tensors?.[0],s=Math.max(...(n?.bins||[]).map(r=>r.count),1);return t.jsxs("div",{className:"inspection-stack",children:[t.jsx("h2",{children:e.layer}),t.jsx("div",{className:"histogram",children:(n?.bins||[]).map((r,a)=>t.jsx("div",{style:{height:`${8+r.count/s*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),t.jsx(zn,{value:e})]})}function Ds({value:e}){return t.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:n.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"shape"}),t.jsx("dd",{children:n.shape})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"mean"}),t.jsx("dd",{children:n.mean})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"stddev"}),t.jsx("dd",{children:n.stddev})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"range"}),t.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function zn({value:e}){return t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Returned Rasa data"}),t.jsx("pre",{className:"data-block",children:A(e)})]})}function we({layer:e,compact:n=!1}){return t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:e.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"kind"}),t.jsx("dd",{children:e.kind})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"output"}),t.jsx("dd",{children:e.output})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:e.params})]}),!n&&t.jsxs("div",{children:[t.jsx("dt",{children:"bytes"}),t.jsx("dd",{children:e.bytes})]})]})]})}function P({label:e,value:n}){return t.jsxs("article",{className:"metric",children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function Us(e,n,s){const r=s.current;if(!r){n(i=>Hn(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function Vs(e,n,s){const r=s.current;if(!r){n(c=>Hn(c,e));return}const a=r.state.doc.toString(),i=Wn(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(r.state.doc.toString()),r.focus()}function Hn(e,n){return`${e||""}${Wn(e||"",n)}`}function Wn(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}function zs(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}async function bn(){const e=await Promise.all(F.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(s=>s.json())]));return Object.fromEntries(e)}function Hs(e){const n=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((s,r)=>({id:`${e.layerTable[r].id}->${s.id}`,source:e.layerTable[r].id,target:s.id}))}:{nodes:[],edges:[]}}function Ws(e,n){return e?.layerTable?.find(s=>s.id===n)||e?.layers?.find(s=>s.id===n)}function ve(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function Ks(e){return e.value!==void 0?`=>
${oe(e.value)}`:String(e.result||"=> nil")}function Js(e){const n=String(e||""),s=n.split(`
`).map(r=>r.trimEnd()).filter(Boolean);return s.length<=2?n:`${s.slice(0,2).join(`
`)}
...`}function Gs(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function Ys(e,n){const s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=s.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(t.jsx("span",{className:`tok ${Xs(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function Xs(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function an(e,n="code"){const s=String(e||""),r=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:s?s.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(s).length},{label:"viewer",value:r}]}const Zs=dt.fromClass(class{constructor(e){this.decorations=jn(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=jn(e.view))}},{decorations:e=>e.decorations}),Qs=ze.theme({"&":{backgroundColor:"#0e1319",color:"#e8edf2",caretColor:"#e8edf2"},"&.cm-focused":{outline:"1px solid rgba(131, 215, 170, 0.35)",outlineOffset:"-1px"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground":{backgroundColor:"rgba(120, 167, 255, 0.26)"},".cm-content ::selection":{backgroundColor:"rgba(120, 167, 255, 0.26)",color:"#e8edf2"},".cm-gutters, .cm-gutter, .cm-activeLineGutter":{backgroundColor:"#0e1319",color:"#687487"}},{dark:!0});function jn(e){const n=new ut,s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)|(\b[\w.+*?!<>=/-]+\/[\w.+*?!<>=/-]+\b)/g;for(const{from:r,to:a}of e.visibleRanges){const i=e.state.doc.sliceString(r,a);s.lastIndex=0;let o;for(;(o=s.exec(i))!==null;){const c=r+o.index,d=c+o[0].length;n.add(c,d,mt.mark({class:er(o)}))}}return n.finish()}function er(e){return e[1]?"cm-rasa-string":e[2]?"cm-rasa-comment":e[3]?"cm-rasa-keyword":e[4]?"cm-rasa-number":e[5]?"cm-rasa-punct":e[6]?"cm-rasa-literal":e[7]?"cm-rasa-qualified":"cm-rasa-text"}function Ve(e){return e?`=> ${A(e)}`:"=> nil"}function kn(e,n,s,r){return s.lastValue=null,s.lastTrace=null,s.pendingAssetModel=null,e.evaluateSession(n,r,Ze)}function vn(e,n){let s=null;try{s=nn(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const r=s?.status?.name,a=s?.eval?.status?.name;if(r!=="ok"||s.eval&&a!=="ok"){const i=s?.eval?.message||s?.eval?.["rendered-error"]||s?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function nr(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function tr(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function L(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function ce(e){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function de(e){return e?.source?.symbol?.name||null}function sr(e){const n=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function rr(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function Re(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function $(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function T(e){return Math.max(0,$()-e)}it.createRoot(document.getElementById("root")).render(t.jsx(hs,{}));
