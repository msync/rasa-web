import{b as Un,j as t,r as l,J as bn,d as jn}from"./react.js";import{i as Kn,B as Wn,C as Hn}from"./graph.js";import{S as wn,V as Jn,E as Fe,R as Gn,D as Qn,a as Xn,l as Yn,d as Zn,k as et}from"./editor.js";import{l as nt}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const De=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),tt=256,rt=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],ge=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class Ge{static async load(n,r={}){const s=await fetch(n);if(!s.ok)throw new Error(`failed to load Rasa engine: ${s.status}`);const a=await s.arrayBuffer();let i=null;const o=r.imports||{},d=r.hostCall||null,c={rasa_host_call(){return 1},...o.env||{}};d&&(c.rasa_host_call=(b,R,N)=>{try{const $=new Uint8Array(i.memory.buffer,b,R),ie=d(on($)),S=K(ie),B=i.rasa_alloc(S.length);if(B===0&&S.length>0)return 2;new Uint8Array(i.memory.buffer,B,S.length).set(S);const oe=new DataView(i.memory.buffer);return oe.setUint32(N,B,!0),oe.setUint32(N+4,S.length,!0),0}catch{return 1}});const{instance:m,module:h}=await WebAssembly.instantiate(a,{...o,env:c});return i=m.exports,new Ge(m.exports,h)}constructor(n,r=null,s=rt){for(const a of s)if(!n[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(n.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=n,this.module=r}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(n,r=De.all){return this.callText("rasa_eval_source",K(n),r)}inspect(n,r={}){return JSON.parse(this.callText("rasa_inspect_source",K(n),st(r)))}syntaxTokens(n){return JSON.parse(this.callText("rasa_syntax_tokens",K(n)))}callText(n,r,s=void 0){return this.callInput(r,(a,i)=>s===void 0?this.exports[n](a,i):this.exports[n](a,i,s))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(n){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(n)}loadPackage(n,r){return this.requireExport("rasa_session_load_package"),this.callInput(K(r),(s,a)=>this.exports.rasa_session_load_package(n,s,a))}evaluateSession(n,r,s=De.all){return this.requireExport("rasa_session_eval"),this.callInput(K(r),(a,i)=>this.exports.rasa_session_eval(n,a,i,s))}callInput(n,r){const s=this.exports.rasa_alloc(n.length);if(s===0&&n.length>0)throw new Error("Rasa engine allocation failed");n.length>0&&new Uint8Array(this.exports.memory.buffer,s,n.length).set(n);const a=r(s,n.length);if(this.exports.rasa_free(s,n.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(n){if(!this.exports[n])throw new Error(`missing Rasa Wasm export ${n}`)}readReport(n){const r=this.exports.rasa_report_ptr(n),s=this.exports.rasa_report_len(n);if(r===0||s===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,r,s);return on(a)}}function K(e){return new TextEncoder().encode(e)}function on(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function st(e={}){const n=e.detail||"standard";let r=0;return e.includeEval!==!1&&(r|=ge.includeEval),e.includePlan!==!1&&(r|=ge.includePlan),r|=ge[n]??ge.standard,r}wn.define();wn.define();function at(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}const ln=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),kn="rasa.theme",it=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});it.dark;function ot(e=document.documentElement){const n=localStorage.getItem(kn),r=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return vn(r,e),r}function vn(e,n=document.documentElement){const r=e==="light"?"light":"dark";return n.dataset.rasaTheme=r,n.setAttribute("data-theme",r),localStorage.setItem(kn,r),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:r}})),r}function lt(e=document.documentElement){return vn(e.dataset.rasaTheme==="light"?"dark":"light",e)}function dn(e){return e==="light"?"Dark":"Light"}const q=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function G(e){return q.find(n=>n.id===e)||q[0]}const be="tiny-cnn",Le=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,dt=`(def m (model/load-model :${be}))
(model/summary m)`;function ct(e=be){const n=G(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class ut{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,r){const s=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(s,{kind:n,value:r}),s}get(n,r=null){const s=this.resources.get(n);if(!s)throw new Error(`unknown resource handle ${n}`);if(r&&s.kind!==r)throw new Error(`resource ${n} has kind ${s.kind}, expected ${r}`);return s.value}}class mt{constructor(){this.handlers=new Map}register(n,r,s){return this.handlers.set(Ve(n,r),s),this}invoke(n,r,s){const a=this.handlers.get(Ve(n,r));if(!a)throw new Error(`unsupported capability ${n}/${r}`);return a(s)}entries(){return[...this.handlers.keys()]}}function Ve(e,n){return`${e}/${n}`}function Qe(e){return new ft(e).parse()}function O(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Re(e)?`:${e.name}`:Xe(e)?e.name:Array.isArray(e)?`[${e.map(O).join(" ")}]`:`{${Object.entries(e).map(([n,r])=>`:${n} ${O(r)}`).join(" ")}}`}function je(e,n=0){if(e==null||typeof e!="object"||Re(e)||Xe(e))return O(e);const r=" ".repeat(n+2),s=" ".repeat(n);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${je(i,n+2)}`).join(`
`)}
${s}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${r}:${i} ${je(o,n+2)}`).join(`
`)}
${s}}`}function ht(e){return{type:"keyword",name:e}}function pt(e){return{type:"symbol",name:e}}function Re(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Xe(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}class ft{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const r=this.form(),s=this.form();n[yt(r)]=s}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return n;if(r==="\\"){const s=this.text[this.index++];n+=s==="n"?`
`:s}else n+=r}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(n,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?ht(r.slice(1)):pt(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function yt(e){return Re(e)||Xe(e)?e.name:String(e)}const Ie=Object.freeze(Object.fromEntries(q.map(e=>[e.id,`./models/${e.id}/model.json`])));class qe extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class gt{constructor(){this.resources=new ut("browser"),this.registry=xt(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const r=Qe(n);this.lastTrace={requestText:n,request:r,responseText:"",packageName:r.package?.name||"unknown",exportName:r.export?.name||"unknown"};const s=this.route(r),a=O(s);return this.lastTrace.responseText=a,a}route(n){try{const r=n.package?.name,s=n.export?.name,a=n.args||[],i=this.invoke(r,s,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:r,exportName:s,capability:Ve(r,s),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(r){const s=r instanceof qe?{status:y("failed"),kind:y("asset-not-prepared"),model:y(r.modelId),recoverable:!0,message:r.message}:{status:y("failed"),kind:y("provider-error"),message:r.message};return r instanceof qe&&(this.pendingAssetModel=r.modelId),this.lastValue=s,this.lastTrace={...this.lastTrace||{},status:"failed",error:r.message},s}}invoke(n,r,s){return this.registry.invoke(n,r,s)}loadNamedModel(n){if(!Ie[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new qe(n);if(!this.modelIds.has(n)){const r=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,r)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!Ie[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const r=await nt(Ie[n]);return this.catalog.set(n,r),r}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,r])=>{const s=this.summary(r);return{id:n,handle:r,name:s.model,layers:s.layers,parameters:s.parameters,trainableParameters:s.trainableParameters,bytes:s.bytes,inputs:s.inputs,outputs:s.outputs}})}summary(n){const r=this.model(n),s=r.layers.map(H);return{view:y("model-summary"),model:r.name,handle:n,layers:s.length,parameters:J(s.map(a=>a.params)),trainableParameters:J(s.map(a=>a.trainableParams)),bytes:J(s.map(a=>a.bytes)),inputs:Q(r.inputs?.[0]?.shape),outputs:Q(r.outputs?.[0]?.shape),graph:cn(r),layerTable:s}}graph(n){return{view:y("graph"),graph:cn(this.model(n))}}layerCount(n){const r=this.model(n);return{view:y("numeric-aggregate"),label:"layer count",value:r.layers.length,unit:y("layers"),model:r.name,handle:n}}layersByKind(n,r){const s=this.model(n).layers.map(H).filter(a=>a.kind===r);return{view:y("layers-by-kind"),kind:y(r),count:s.length,layers:s}}topLayers(n,r){const s=Number(r.limit||5),i=ze(r.by||y("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(H).sort((d,c)=>c[i]-d[i]).slice(0,s);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(n,r){const s=this.layerByName(n,r);return{view:y("layer-inspection"),layer:H(s),config:wt(s.getConfig()),weights:s.weights.map(Rn)}}layerTensorSize(n,r){const{layer:s,index:a}=this.layerByRef(n,r),i=H(s,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,r){const s=this.layerByName(n,r);return{view:y("weight-stats"),layer:s.name,tensors:s.getWeights().map((a,i)=>bt(s.weights[i],a))}}weightHistogram(n,r,s){const a=this.layerByName(n,r),i=Number(s.bins||24),o=a.getWeights().map((d,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:jt(Array.from(d.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,r){const s=this.model(n).layers.find(a=>a.name===r);if(!s)throw new Error(`unknown layer ${r}`);return s}layerByRef(n,r){const s=this.model(n);if(typeof r=="number"){const o=Math.trunc(r)-1,d=s.layers[o];if(!d)throw new Error(`unknown layer index ${r}`);return{layer:d,index:o}}const a=String(r),i=s.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:s.layers[i],index:i}}}function xt(e){return new mt().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(ze(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,r])=>e.layersByKind(n,ze(r))).register("demo.tfjs/layers","top",([n,r={}])=>e.topLayers(n,r)).register("demo.tfjs/layer","inspect",([n,r])=>e.inspectLayer(n,r)).register("demo.tfjs/layer","tensor-size",([n,r])=>e.layerTensorSize(n,r)).register("demo.tfjs/weights","stats",([n,r])=>e.weightStats(n,r)).register("demo.tfjs/weights","histogram",([n,r,s={}])=>e.weightHistogram(n,r,s))}function H(e,n=null){const r=e.weights.map(Rn);return{id:e.name,index:n??kt(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:Q(e.inputShape),output:Q(e.outputShape),params:J(r.map(s=>s.params)),trainableParams:J(r.filter(s=>s.trainable).map(s=>s.params)),bytes:J(r.map(s=>s.bytes))}}function cn(e){const n=e.layers.map((r,s)=>({...H(r,s),index:s}));return{nodes:n,edges:n.slice(1).map((r,s)=>({id:`${n[s].id}->${r.id}`,source:n[s].id,target:r.id}))}}function Rn(e){const n=e.shape.reduce((r,s)=>r*s,1);return{name:e.originalName,shape:Q(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function bt(e,n){const r=Array.from(n.dataSync()),s=r.length,a=Math.min(...r),i=Math.max(...r),o=r.reduce((m,h)=>m+h,0)/s,d=r.reduce((m,h)=>m+(h-o)**2,0)/s,c=r.filter(m=>m===0).length;return{name:e?.originalName||"weight",shape:Q(n.shape),params:s,min:L(a),max:L(i),mean:L(o),stddev:L(Math.sqrt(d)),sparsity:L(c/s)}}function jt(e,n){const r=Math.min(...e),s=Math.max(...e),a=s===r?1:(s-r)/n,i=Array.from({length:n},(o,d)=>({start:L(r+d*a),end:L(r+(d+1)*a),count:0}));for(const o of e){const d=Math.min(n-1,Math.max(0,Math.floor((o-r)/a)));i[d].count+=1}return i}function wt(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(r=>e[r]!==void 0).map(r=>[r,e[r]]))}function ze(e){return Re(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function Q(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(un).join(" x "):e.map(un).join(" x "):"?"}function un(e){return e==null?"*":String(e)}function J(e){return e.reduce((n,r)=>n+r,0)}function L(e){return String(Math.round(e*1e5)/1e5)}function kt(e){return Number(e._index??0)}const Nn=`{:packages
 [{:package/id demo.tfjs/model
   :catalog {:exports
             {load-model {:signature {:args [{:name :id :type :keyword}] :returns :string}
                          :effects [:model/read]
                          :targets {:ras.wasm {:availability :available}}}
              summary {:signature {:args [{:name :model :type :string}] :returns :map}
                       :effects [:model/read]
                       :targets {:ras.wasm {:availability :available}}}
              layer-count {:signature {:args [{:name :model :type :string}] :returns :map}
                           :effects [:model/read]
                           :targets {:ras.wasm {:availability :available}}}
              graph {:signature {:args [{:name :model :type :string}] :returns :map}
                     :effects [:model/read]
                     :targets {:ras.wasm {:availability :available}}}}}}
  {:package/id demo.tfjs/layers
   :catalog {:exports
             {by-kind {:signature {:args [{:name :model :type :string}
                                          {:name :kind :type :keyword}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:ras.wasm {:availability :available}}}
              top {:signature {:args [{:name :model :type :string}
                                      {:name :options :type :map}]
                               :returns :map}
                   :effects [:model/read]
                   :targets {:ras.wasm {:availability :available}}}}}}
  {:package/id demo.tfjs/layer
   :catalog {:exports
             {inspect {:signature {:args [{:name :model :type :string}
                                          {:name :layer :type :string}]
                                   :returns :map}
                       :effects [:model/read]
                       :targets {:ras.wasm {:availability :available}}}
              tensor-size {:signature {:args [{:name :model :type :string}
                                              {:name :layer :type :any}]
                                       :returns :map}
                           :effects [:model/read]
                           :targets {:ras.wasm {:availability :available}}}}}}
  {:package/id demo.tfjs/weights
   :catalog {:exports
             {stats {:signature {:args [{:name :model :type :string}
                                        {:name :layer :type :string}]
                                 :returns :map}
                     :effects [:model/read]
                     :targets {:ras.wasm {:availability :available}}}
              histogram {:signature {:args [{:name :model :type :string}
                                            {:name :layer :type :string}
                                            {:name :options :type :map}]
                                     :returns :map}
                         :effects [:model/read]
                         :targets {:ras.wasm {:availability :available}}}}}}]}`;function re(e){return e==null?"nil":Ne(e)?`:${e.name}`:Se(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(re).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,r])=>`:${n} ${re(r)}`).join(" ")}}`:String(e)}function Ue(e,n=0){if(e==null||typeof e!="object"||Ne(e)||Se(e))return re(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(d=>`${i}${Ue(d,n+2)}`).join(`
`)}
${o}]`}const r=Object.entries(e);if(r.length===0)return"{}";const s=" ".repeat(n+2),a=" ".repeat(n);return`{
${r.map(([i,o])=>`${s}:${i} ${Ue(o,n+2)}`).join(`
`)}
${a}}`}function vt(e,n=""){return Ne(e)||Se(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function Ne(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Se(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function Rt(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Ne(e)&&!Se(e)?Object.keys(e).length:0}function Oe(e){if(!e||!e.includes(":traces"))return null;try{return Qe(e).traces||null}catch{return null}}function Ye(e){const n=Array.isArray(e?.traces)?e.traces:[],r=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:vt(e?.scope,"waiting"),traces:n.length,requests:r.length,empty:n.length===0&&r.length===0}}function Nt(e){const n=[];return Ke(e,[],n),n}function mn(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:re(e)}function St(e){return Ue(e)}function we(e){return e==null?null:Array.isArray(e)?e.map(we):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,r])=>[`:${n}`,we(r)])):e}function Ke(e,n,r){const s=r.length,a={id:s,path:n,label:Tt(n),kind:$t(e),value:Rt(e)?null:re(e),children:[]};return r.push(a),Array.isArray(e)?e.forEach((i,o)=>{const d=Ke(i,[...n,o],r);a.children.push(d)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const d=Ke(o,[...n,i],r);a.children.push(d)}),s}function $t(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function Tt(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),We=e=>({type:"symbol",name:e});function hn(e){const n=Et(e),r=At(e),s=_t(e);return{source:Mt(e),value:n,providerTrace:r,traceSection:s,runtimeReport:`{:status :ok :traces ${He(s)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function Mt(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function Et(e){const n=Sn(e),r=n.reduce((a,i)=>a+i.params,0),s=n.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:r,trainableParameters:r,bytes:s,inputs:Ct(e),outputs:Lt(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>It(n[i].id,a.id))},layerTable:n}}function At(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${Sn(e).length}}}`}}function _t(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[W(0,"source-form",{symbol:We("model/load-model"),span:{start:7,end:23}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),W(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[W(0,"source-form",{symbol:We("model/summary"),span:{start:31,end:44}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),W(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[pn(0,"demo.tfjs/model","load-model","model/load-model",e.id),pn(1,"demo.tfjs/model","summary","model/summary")]}}function Sn(e){switch(e.id){case"tiny-mlp":return[x("feature_input","input","* x 16",0,0),x("hidden_dense","dense","* x 32",544,2176),x("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[x("signal_input","input","* x 32",0,0),x("encoder_dense","dense","* x 12",396,1584),x("bottleneck","dense","* x 4",52,208),x("decoder_dense","dense","* x 12",60,240),x("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[x("token_input","input","* x 8",0,0),x("token_embedding","embedding","* x 8 x 16",1600,6400),x("pool_tokens","global-average-pooling1d","* x 16",0,0),x("projection_dense","dense","* x 8",136,544)];default:return[x("input_image","input","* x 28 x 28 x 1",0,0),x("stem_conv","conv2d","* x 26 x 26 x 8",80,320),x("flatten","flatten","* x 5408",0,0),x("classifier_dense","dense","* x 10",5306,21224)]}}function Ct(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function Lt(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function x(e,n,r,s,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:r,params:s,trainableParams:s,bytes:a}}function It(e,n){return{id:`${e}->${n}`,source:e,target:n}}function W(e,n,r){return{id:e,kind:g(n),subject:null,"source-id":"browser://repl",span:r.span||null,data:r,diagnostics:[],annotations:[],evidence:[]}}function pn(e,n,r,s,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:n,export:r,capability:g(`${n}/${r}`)},source:{symbol:We(s),model:a?g(a):null},admission:{"call-id":e,identity:{package:n,export:r,capability:g(`${n}/${r}`)},effects:[g("model/read")]},"trace-id":e}}function He(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(He).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,r])=>`:${n} ${He(r)}`).join(" ")}}`}const qt=`(ns rasa.core)

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
`,Ot=`import "@tensorflow/tfjs-backend-cpu";
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
`,Bt="./engine.wasm",Je=De.all|tt,$n=e=>e<2;function Pt(){const e=Ft()==="trace",n=l.useRef(null),r=l.useRef(null),s=l.useRef(0),a=l.useRef(null),i=l.useRef(!1),[o,d]=l.useState(be),[c,m]=l.useState(()=>ot()),[h,b]=l.useState(()=>e?hn(G(be)).source:dt),[R,N]=l.useState("loading"),[$,ie]=l.useState(!1),[S,B]=l.useState(0),[oe,nn]=l.useState(null),[tn,Y]=l.useState(null),[$e,le]=l.useState(""),[Z,de]=l.useState(null),[ee,ce]=l.useState(null),[Te,Me]=l.useState([]),[Ee,ue]=l.useState([]),[_n,Ae]=l.useState(null),[Cn,rn]=l.useState({}),[P,_e]=l.useState(null),[me,sn]=l.useState(null),[he,an]=l.useState(null),[Ln,In]=l.useState("boundary"),[qn,pe]=l.useState([]),p=l.useMemo(()=>e?hn(G(o)):null,[e,o]);l.useEffect(()=>{const u=f=>m(f.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",u),()=>window.removeEventListener("rasa-theme-change",u)},[]),l.useEffect(()=>{let u=!0;async function f(){try{if(e&&p){if(!u)return;const j=await fn().catch(()=>({}));if(!u)return;le(p.runtimeReport),de(p.providerTrace),ce(p.traceSection),Me([p.loadedModel]),ue([p.loadedModel.id]),rn(j),_e(p.value),sn(p.loadedModel.handle),an(null),nn({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),Y({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),pe([{id:"setup",kind:"setup",source:Le,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:p.source,result:Pe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]),N("ready");return}const F=M(),w=new gt,k=M(),v=await fn(),ne=T(k),D=M(),E=await Ge.load(Dt(),{hostCall:j=>w.call(j)}),V=T(D),A=E.createSession(),fe=M();E.loadPackage(A,Nn);const ye=E.evaluateSession(A,qt,Je);xn(ye,"Rasa core boot");const z=E.evaluateSession(A,Le,Je);xn(z,"model setup");const Ce=T(fe);if(!u)return;n.current=w,r.current=E,s.current=A,le(z),de(w.lastTrace),ce(Oe(z)),Me(w.loadedModels()),ue(w.preparedModelIds()),rn(v),nn({manifestMs:ne,engineMs:V,setupMs:Ce,totalMs:T(F)}),pe([{id:"setup",kind:"setup",source:Le,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),N("ready")}catch(F){u&&N(`failed: ${F.message}`)}}return f(),()=>{u=!1,r.current&&s.current&&r.current.freeSession(s.current)}},[e,p]);const On=l.useCallback(async()=>{if(e&&p){const j=a.current?.state.doc.toString()||h,te=S+1;B(te),_e(p.value),de(p.providerTrace),ce(p.traceSection),le(p.runtimeReport),Y({run:te,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),pe(U=>[...U,{id:`run-${U.length}`,kind:"run",source:j,result:Pe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]);return}if(!r.current||!s.current||!n.current||i.current)return;i.current=!0,ie(!0),Ae(null);const u=a.current?.state.doc.toString()||h,f=n.current,F=M();let w=$e,k=null,v=null,ne=null,D=null,E=0,V=0,A=0,fe=!1;Y({status:"running",assetState:"checking",totalMs:0});try{const j=M();w=gn(r.current,s.current,f,u),ne=Oe(w),V=T(j);const te=Nr(f);if(te){const U=te;D=U,Ae(U),Y({status:"running",assetState:"fetching",assetModel:D,firstEvalMs:V,totalMs:T(F)});const Vn=M();await f.prepareModel(U),E=T(Vn),ue(f.preparedModelIds()),f.pendingAssetModel=null;const zn=M();w=gn(r.current,s.current,f,u),ne=Oe(w),A=T(zn)}else A=V;k=f.lastValue,v=f.lastTrace}catch(j){fe=!0,k=Rr("asset-load-error",j.message),v={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,ie(!1)}const ye=T(F),z=S+1,Ce={run:z,status:v?.status||"ok",capability:_(v),view:v?.view||ke(k),assetState:fe?"failed":D?"fetched":"cached",assetModel:D,assetLoadMs:E,firstEvalMs:V,finalEvalMs:A,totalMs:ye,cacheCount:f.preparedModelIds().length};le(w),_e(k),de(v),ce(ne),Me(f.loadedModels()),ue(f.preparedModelIds()),Ae(null),Y(Ce),k?.handle&&sn(k.handle),B(z),pe(j=>[...j,{id:`run-${j.length}`,kind:"run",source:u,result:Pe(k),capability:_(v),view:v?.view||ke(k),status:v?.status||"ok",durationMs:ye,value:k}])},[e,p,S,$e,h,ee]),C=l.useMemo(()=>pr(P),[P]),Bn=l.useMemo(()=>me?Te.find(u=>u.handle===me):null,[me,Te]),Pn=l.useMemo(()=>C.nodes.map(u=>u.id).join("|")||"empty-graph",[C.nodes]),Fn=l.useMemo(()=>C.nodes.map((u,f)=>({id:u.id,position:{x:f*220,y:f%2===0?0:28},data:{label:t.jsxs("div",{className:"node-label",children:[t.jsx("strong",{children:u.name}),t.jsx("span",{children:u.kind}),t.jsxs("em",{children:[u.params," params"]})]}),layer:u},type:"default",className:he===u.id?"selected-node":""})),[C.nodes,he]),Dn=l.useMemo(()=>C.edges.map(u=>({...u,animated:!0})),[C.edges]);return t.jsxs("main",{className:"app-shell",children:[t.jsxs("header",{className:"hero",children:[t.jsxs("div",{className:"brand-lockup",children:[t.jsx("img",{src:ln.logo,alt:"Rasa"}),t.jsxs("div",{children:[t.jsx("span",{children:"Rasa Model Explorer"}),t.jsx("h1",{children:"Model architecture explorer"}),t.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),t.jsxs("div",{className:"hero-status",children:[t.jsx("img",{src:ln.mark,alt:"","aria-hidden":"true"}),t.jsx("span",{className:R==="ready"?"ok":"warn",children:R}),t.jsx("span",{children:"tfjs assets on first run"}),t.jsx("span",{children:"static bundle"}),t.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>m(lt()),"aria-label":`Switch to ${dn(c).toLowerCase()} theme`,children:dn(c)})]})]}),t.jsxs("section",{className:"boundary-theater",children:[t.jsx(Vt,{fixture:e,providerTrace:Z,traceSection:ee,runMetrics:tn}),t.jsxs("aside",{className:"theater-left",children:[t.jsxs("div",{className:"studio-head",children:[t.jsx("span",{className:"label",children:"Model & extension"}),t.jsx("strong",{children:"What Rasa is allowed to touch"})]}),t.jsx(Yt,{models:Te,activeHandle:me,preparedModelIds:Ee}),t.jsx(rr,{modelManifest:Cn[o],modelId:o,compact:!0})]}),t.jsxs("section",{className:"theater-stage",children:[t.jsx(zt,{value:P,graph:C,runCount:S,selectedModelId:o,preparedModelIds:Ee,running:$,fixture:e}),t.jsxs("div",{className:"graph-wrap graph-theater",children:[t.jsx(Ut,{traceSection:ee,providerTrace:Z,value:P,selectedModelId:o,activeModelId:Bn?.id||null,running:$}),t.jsxs(Kn,{nodes:Fn,edges:Dn,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(u,f)=>an(f.id),children:[t.jsx(Wn,{color:"#29313d",gap:18}),t.jsx(Hn,{showInteractive:!1})]},Pn)]}),t.jsx(Wt,{traceSection:ee,providerTrace:Z,runMetrics:tn,bootMetrics:oe})]}),t.jsxs("aside",{className:"theater-inspector",children:[t.jsx(Kt,{value:P,trace:Z,selectedLayer:he}),t.jsx(Ht,{activeTab:Ln,setActiveTab:In,value:P,selectedLayer:he,trace:Z,traceSection:ee,runtimeReport:$e,fixture:e})]}),t.jsxs("section",{className:"theater-console","aria-label":"Rasa command console",children:[t.jsx(Gt,{entries:qn}),t.jsxs("div",{className:"console-command",children:[t.jsx(Xt,{selectedModelId:o,setSelectedModelId:d,setSource:b,editorRef:a,prepared:Ee.includes(o),preparing:_n===o}),t.jsx(Jt,{source:h,editorRef:a,run:On,disabled:R!=="ready"||$,running:$})]})]})]})]})}function Ft(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function Dt(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||Bt}function Vt({fixture:e,providerTrace:n,traceSection:r,runMetrics:s}){const a=Array.isArray(r?.["host-requests"])?r["host-requests"]:[],i=a.length?a[a.length-1]:null,o=Ye(r),d=[{label:e?"Replay form":"Rasa source",title:ae(i)||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:se(i)||_(n)||"waiting",detail:`${o.requests} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"TF.js provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:s?.view?`:${s.view}`:"Rasa value",detail:s?.totalMs!==void 0?ve(s.totalMs):"structured data",tone:"return"}];return t.jsx("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:d.map(c=>t.jsxs("article",{className:`runway-step ${c.tone}`,children:[t.jsx("span",{children:c.label}),t.jsx("strong",{children:c.title}),t.jsx("em",{children:c.detail})]},c.label))})}function zt({value:e,graph:n,runCount:r,selectedModelId:s,preparedModelIds:a,running:i,fixture:o}){const d=G(s),c=o?"fixture layer records":"live layer records";return t.jsxs("header",{className:"stage-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Model graph"}),t.jsx("h2",{children:n.nodes.length?`${n.nodes.length} ${c}`:"No model value yet"}),t.jsxs("p",{children:[d.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),t.jsxs("div",{className:"stage-metrics",children:[t.jsx(I,{label:"Run",value:i?"running":r}),t.jsx(I,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),t.jsx(I,{label:"Assets",value:`${a.length}/${q.length}`})]})]})}function Ut({traceSection:e,providerTrace:n,value:r,selectedModelId:s,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],d=o.length?o[o.length-1]:null,c=G(s),m=a?G(a):null,h=a&&s!==a,b=i?"Rasa is evaluating the current form.":h?`Editor targets ${c.title}; run it to replace ${m.title}.`:m?`${m.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return t.jsxs("aside",{className:`boundary-spotlight ${h?"pending":""}`,"aria-label":"Current boundary spotlight",children:[t.jsxs("div",{className:"spotlight-flow",children:[t.jsxs("div",{children:[t.jsx("span",{children:"form"}),t.jsx("strong",{children:ae(d)||"waiting for run"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"admitted identity"}),t.jsx("strong",{children:se(d)||_(n)||"not admitted yet"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"returned value"}),t.jsx("strong",{children:r?.view?.name?`:${r.view.name}`:"none yet"})]})]}),t.jsx("p",{children:b})]})}function Kt({value:e,trace:n,selectedLayer:r}){const[s,a]=l.useState(null),i=e?je(e):"nil";return t.jsxs(t.Fragment,{children:[t.jsxs("article",{className:"value-lens",children:[t.jsx("span",{className:"label",children:"Selected value"}),t.jsx("strong",{children:ke(e)}),t.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),t.jsx(X,{text:xr(i),mode:"rasa"}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:_(n)||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"selected"}),t.jsx("dd",{children:r||"none"})]})]}),t.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),s&&t.jsx(Ze,{kind:"Rasa value",title:ke(e),description:"The real structured value returned to the browser from the Rasa session.",meta:en(i,"rasa"),onClose:()=>a(null),children:t.jsx("div",{className:"modal-code-stack result-only",children:t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"returned value"}),t.jsx(X,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function Wt({traceSection:e,providerTrace:n,runMetrics:r,bootMetrics:s}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return t.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[t.jsx(I,{label:"Host request",value:ae(i)||"waiting"}),t.jsx(I,{label:"Canonical identity",value:se(i)||_(n)||"waiting"}),t.jsx(I,{label:"Status",value:n?.status||r?.status||"waiting"}),t.jsx(I,{label:"Time",value:r?.totalMs!==void 0?ve(r.totalMs):s?ve(s.totalMs):"pending"})]})}function Ht({activeTab:e,setActiveTab:n,value:r,selectedLayer:s,trace:a,traceSection:i,runtimeReport:o,fixture:d}){const c=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return t.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[t.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:c.map(m=>t.jsx("button",{className:e===m.id?"active":"",type:"button","aria-pressed":e===m.id,onClick:()=>n(m.id),children:m.label},m.id))}),t.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&t.jsx(er,{traceSection:i,providerTrace:a,fixture:d}),e==="result"&&t.jsxs(t.Fragment,{children:[t.jsx(Zt,{value:r,trace:a,traceSection:i}),t.jsx(lr,{value:r,selectedLayer:s})]}),e==="data"&&t.jsxs(t.Fragment,{children:[t.jsx(Tn,{title:"Returned Rasa value",value:r,defaultOpen:!0}),t.jsxs("details",{className:"runtime-report",children:[t.jsx("summary",{children:"Runtime report"}),t.jsx("pre",{children:o})]})]})]})]})}function Jt({source:e,editorRef:n,run:r,disabled:s,running:a}){const i=l.useRef(null),o=l.useRef(r);return l.useEffect(()=>{o.current=r},[r]),l.useEffect(()=>{const d=new Fe({parent:i.current,state:Xn.create({doc:e,extensions:[Yn(),Zn(),kr,wr,et.of(at(()=>o.current())),Fe.lineWrapping]})});return n.current=d,()=>d.destroy()},[]),t.jsxs("div",{className:"editor-panel",children:[t.jsxs("div",{className:"editor-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa input"}),t.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),t.jsx("span",{children:"Primary+Enter runs"})]}),t.jsx("div",{className:"editor-host",ref:i}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),t.jsx("button",{className:"run-button",type:"button",onClick:r,disabled:s,children:a?"Running...":"Run"})]})]})}function Gt({entries:e}){const n=l.useRef(null),[r,s]=l.useState(null),a=r?yr(r):"";return l.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),t.jsxs(t.Fragment,{children:[t.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:e.length?e.map(i=>t.jsx(Qt,{entry:i,onOpenResult:()=>s(i)},i.id)):t.jsxs("article",{className:"transcript-entry",children:[t.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),t.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),r&&t.jsx(Ze,{kind:"Rasa value",title:r.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:en(a,"rasa"),onClose:()=>s(null),children:t.jsxs("div",{className:"modal-code-stack",children:[t.jsxs("section",{className:"form-section",children:[t.jsx("span",{className:"modal-section-label",children:"form"}),t.jsx(X,{text:r.source,mode:"rasa",numbered:!0})]}),t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"result"}),t.jsx(X,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function Qt({entry:e,onOpenResult:n}){return t.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[t.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&t.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[t.jsx("pre",{children:gr(e.result)}),t.jsx("span",{children:"Open full value"})]}),t.jsxs("div",{className:"transcript-meta",children:[t.jsx("span",{children:e.capability||"session"}),t.jsx("span",{children:e.view}),t.jsx("span",{children:e.status}),e.durationMs!==void 0&&t.jsx("span",{children:ve(e.durationMs)})]})]})}function Xt({selectedModelId:e,setSelectedModelId:n,setSource:r,editorRef:s,prepared:a,preparing:i}){const o=ct(e).slice(0,5),d=c=>{n(c.target.value)};return t.jsxs("div",{className:"command-shelf",children:[t.jsxs("div",{className:"command-shelf-head",children:[t.jsxs("label",{className:"model-picker",children:[t.jsx("span",{children:"Model"}),t.jsx("select",{value:e,onChange:d,children:q.map(c=>t.jsx("option",{value:c.id,children:c.title},c.id))})]}),t.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),t.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(c=>t.jsxs("article",{className:"command-chip",children:[t.jsxs("div",{children:[t.jsx("strong",{children:c.label}),t.jsx("span",{children:hr(c.source)})]}),t.jsxs("div",{className:"command-actions",children:[t.jsx("button",{type:"button",title:`Insert ${c.label} at the cursor`,onClick:()=>ur(c.source,r,s),children:"Insert"}),t.jsx("button",{type:"button",title:`Append ${c.label} below the current editor text`,onClick:()=>mr(c.source,r,s),children:"Append"})]})]},c.label))})]})}function Yt({models:e,activeHandle:n,preparedModelIds:r}){const s=n?e.find(a=>a.handle===n):null;return t.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[s?t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:s.name})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"id"}),t.jsx("dd",{children:s.id})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"handle"}),t.jsx("dd",{children:s.handle})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"layers"}),t.jsx("dd",{children:s.layers})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:s.parameters})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"size"}),t.jsx("dd",{children:$r(s.bytes||0)})]})]})]},s.handle||s.id):t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:"none yet"})]}),t.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),t.jsxs("div",{className:"catalog-note",children:[q.length," static catalog models are available. ",r.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Zt({value:e,trace:n,traceSection:r}){const s=Sr(e),a=Ye(r);return t.jsxs("section",{className:"projection-card",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Projection"}),t.jsx("strong",{children:s.renderer}),t.jsx("p",{children:s.reason})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"Rasa view"}),t.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Capability"}),t.jsx("dd",{children:n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Core traces"}),t.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Status"}),t.jsx("dd",{children:n?.status||"waiting"})]})]})]})}function er({traceSection:e,providerTrace:n,fixture:r=!1}){const s=Ye(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return t.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[t.jsxs("div",{className:"boundary-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa boundary"}),t.jsx("strong",{children:s.empty?"Waiting for admitted host evidence":r?"Visual fixture replay":`Live Wasm ${s.scope} evidence`}),r&&t.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),t.jsxs("span",{children:[s.traces," traces"]})]}),t.jsxs("div",{className:"boundary-path",children:[t.jsx(Be,{title:"Rasa form",value:ae(a[0])||"source expression"}),t.jsx(Be,{title:"Canonical identity",value:se(a[0])||_(n)||"package/export"}),t.jsx(Be,{title:"Browser provider",value:n?.status?n.status:"waiting"})]}),t.jsxs("details",{className:"trace-section",open:!0,children:[t.jsx("summary",{children:"Admitted host calls"}),t.jsx("div",{className:"trace-list",children:a.length?a.map(i=>t.jsx(nr,{request:i},i["call-id"])):t.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),t.jsx(tr,{trace:n}),t.jsx(Tn,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Be({title:e,value:n}){return t.jsxs("article",{children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function nr({request:e}){return t.jsxs("article",{className:"host-request-card",children:[t.jsxs("div",{children:[t.jsxs("span",{children:["call ",e["call-id"]??"?"]}),t.jsx("strong",{children:se(e)})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"source"}),t.jsx("dd",{children:ae(e)||"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:mn(e.identity?.capability)})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"effects"}),t.jsx("dd",{children:(e.admission?.effects||[]).map(mn).join(" ")||"none"})]})]})]})}function tr({trace:e}){return t.jsxs("article",{className:"provider-bridge",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Browser bridge"}),t.jsx("strong",{children:_(e)||"waiting"})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"status"}),t.jsx("dd",{children:e?.status||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"args"}),t.jsx("dd",{children:e?.argsCount??"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"view"}),t.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),t.jsxs("details",{className:"bridge-details",children:[t.jsx("summary",{children:"Request / response data"}),t.jsx("pre",{children:e?.requestText||"no provider request yet"}),t.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function Tn({title:e,value:n,defaultOpen:r=!1}){const s=l.useMemo(()=>Nt(n),[n]),a=l.useMemo(()=>we(n),[n]),i=s.slice(0,12);return t.jsxs("details",{className:"data-projection",open:r,children:[t.jsxs("summary",{children:[t.jsx("span",{children:e}),t.jsxs("strong",{children:[s.length," node(s)"]})]}),t.jsx("div",{className:"projection-viewer",children:t.jsx(bn,{data:a||{},shouldExpandNode:$n,clickToExpandNode:!0,compactTopLevel:!0,style:{...jn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>t.jsxs("article",{children:[t.jsx("span",{children:o.label}),t.jsx("strong",{children:o.value||o.kind}),t.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),s.length>i.length&&t.jsxs("p",{className:"projection-more",children:[s.length-i.length," more node(s) folded in compact Rasa data below."]}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Compact Rasa data"}),t.jsx("pre",{className:"data-block",children:St(n)})]})]})}function rr({modelManifest:e,modelId:n,compact:r=!1}){const[s,a]=l.useState(null),i=sr(e,n);return t.jsxs("section",{className:`extension-panel ${r?"compact":""}`,children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Open the extension"}),t.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),t.jsx("div",{className:"extension-assets",children:i.map(o=>t.jsx(ar,{asset:o,onOpen:()=>a(o)},o.id))}),s&&t.jsx(ir,{asset:s,onClose:()=>a(null)})]})}function sr(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:Nn,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:Ot,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function ar({asset:e,onOpen:n}){return t.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[t.jsx("span",{children:e.kind}),t.jsx("strong",{children:e.title}),t.jsx("em",{children:e.description})]})}function ir({asset:e,onClose:n}){return t.jsx(Ze,{kind:e.kind,title:e.title,description:e.description,meta:en(e.text,e.mode),onClose:n,children:t.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"projection-viewer large",children:t.jsx(bn,{data:we(e.value),shouldExpandNode:$n,clickToExpandNode:!0,compactTopLevel:!0,style:{...jn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Raw manifest JSON"}),t.jsx(X,{text:e.text,mode:"json",numbered:!0})]})]}):t.jsx(X,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Ze({kind:e,title:n,description:r,meta:s=[],onClose:a,children:i}){const o=l.useId(),d=l.useId(),c=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const h=document.activeElement;return m.current?.focus(),()=>{h?.isConnected&&typeof h.focus=="function"&&h.focus()}},[]),l.useEffect(()=>{const h=b=>{if(b.key==="Escape"){b.preventDefault(),a();return}if(b.key!=="Tab"||!c.current)return;const R=or(c.current);if(!R.length){b.preventDefault();return}const N=R[0],$=R[R.length-1];c.current.contains(document.activeElement)?b.shiftKey&&document.activeElement===N?(b.preventDefault(),$.focus()):!b.shiftKey&&document.activeElement===$&&(b.preventDefault(),N.focus()):(b.preventDefault(),N.focus())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[a]),t.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":d,children:[t.jsx("div",{className:"asset-modal-backdrop",onClick:a}),t.jsxs("article",{className:"asset-modal-panel",ref:c,tabIndex:-1,children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:e}),t.jsx("h2",{id:o,children:n}),t.jsx("p",{id:d,children:r}),s.length>0&&t.jsx("div",{className:"modal-meta",children:s.map(h=>t.jsxs("span",{children:[t.jsx("strong",{children:h.value}),h.label]},h.label))})]}),t.jsx("button",{ref:m,type:"button",onClick:a,children:"Close"})]}),i]})]})}function or(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function X({text:e,mode:n="rasa",numbered:r=!1}){const s=String(e||"").split(`
`);return t.jsx("pre",{className:`line-code ${r?"numbered":""}`,children:s.map((a,i)=>t.jsxs("span",{className:"code-line",children:[r&&t.jsx("span",{className:"line-number",children:i+1}),t.jsx("code",{children:br(a||" ",n)})]},i))})}function lr({value:e,selectedLayer:n}){if(!e)return t.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return t.jsx("pre",{className:"data-block",children:O(e)});if(e.view?.name==="weight-histogram")return t.jsx(dr,{value:e});if(e.view?.name==="weight-stats")return t.jsx(cr,{value:e});const r=n?fr(e,n):null;return t.jsxs("div",{className:"inspection-stack",children:[r&&t.jsx(xe,{layer:r}),Array.isArray(e.layers)&&e.layers.map(s=>t.jsx(xe,{layer:s},s.id)),Array.isArray(e.layerTable)&&e.layerTable.map(s=>t.jsx(xe,{layer:s,compact:!0},s.id)),e.layer&&t.jsx(xe,{layer:e.layer}),t.jsx(Mn,{value:e})]})}function dr({value:e}){const n=e.tensors?.[0],r=Math.max(...(n?.bins||[]).map(s=>s.count),1);return t.jsxs("div",{className:"inspection-stack",children:[t.jsx("h2",{children:e.layer}),t.jsx("div",{className:"histogram",children:(n?.bins||[]).map((s,a)=>t.jsx("div",{style:{height:`${8+s.count/r*150}px`},title:`${s.start}..${s.end}: ${s.count}`},a))}),t.jsx(Mn,{value:e})]})}function cr({value:e}){return t.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:n.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"shape"}),t.jsx("dd",{children:n.shape})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"mean"}),t.jsx("dd",{children:n.mean})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"stddev"}),t.jsx("dd",{children:n.stddev})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"range"}),t.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function Mn({value:e}){return t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Returned Rasa data"}),t.jsx("pre",{className:"data-block",children:O(e)})]})}function xe({layer:e,compact:n=!1}){return t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:e.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"kind"}),t.jsx("dd",{children:e.kind})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"output"}),t.jsx("dd",{children:e.output})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:e.params})]}),!n&&t.jsxs("div",{children:[t.jsx("dt",{children:"bytes"}),t.jsx("dd",{children:e.bytes})]})]})]})}function I({label:e,value:n}){return t.jsxs("article",{className:"metric",children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function ur(e,n,r){const s=r.current;if(!s){n(i=>En(i,e));return}const a=s.state.selection.main;s.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function mr(e,n,r){const s=r.current;if(!s){n(d=>En(d,e));return}const a=s.state.doc.toString(),i=An(a,e),o=s.state.doc.length;s.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function En(e,n){return`${e||""}${An(e||"",n)}`}function An(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}function hr(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}async function fn(){const e=await Promise.all(q.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(r=>r.json())]));return Object.fromEntries(e)}function pr(e){const n=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((r,s)=>({id:`${e.layerTable[s].id}->${r.id}`,source:e.layerTable[s].id,target:r.id}))}:{nodes:[],edges:[]}}function fr(e,n){return e?.layerTable?.find(r=>r.id===n)||e?.layers?.find(r=>r.id===n)}function ke(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function yr(e){return e.value!==void 0?`=>
${je(e.value)}`:String(e.result||"=> nil")}function gr(e){const n=String(e||""),r=n.split(`
`).map(s=>s.trimEnd()).filter(Boolean);return r.length<=2?n:`${r.slice(0,2).join(`
`)}
...`}function xr(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function br(e,n){const r=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,s=[];let a=0,i;for(;(i=r.exec(e))!==null;){i.index>a&&s.push(e.slice(a,i.index));const o=i[0];s.push(t.jsx("span",{className:`tok ${jr(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&s.push(e.slice(a)),s.length?s:e}function jr(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function en(e,n="code"){const r=String(e||""),s=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:r?r.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(r).length},{label:"viewer",value:s}]}const wr=Jn.fromClass(class{constructor(e){this.decorations=yn(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=yn(e.view))}},{decorations:e=>e.decorations}),kr=Fe.theme({"&":{backgroundColor:"#0e1319",color:"#e8edf2",caretColor:"#e8edf2"},"&.cm-focused":{outline:"1px solid rgba(131, 215, 170, 0.35)",outlineOffset:"-1px"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground":{backgroundColor:"rgba(120, 167, 255, 0.26)"},".cm-content ::selection":{backgroundColor:"rgba(120, 167, 255, 0.26)",color:"#e8edf2"},".cm-gutters, .cm-gutter, .cm-activeLineGutter":{backgroundColor:"#0e1319",color:"#687487"}},{dark:!0});function yn(e){const n=new Gn,r=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)|(\b[\w.+*?!<>=/-]+\/[\w.+*?!<>=/-]+\b)/g;for(const{from:s,to:a}of e.visibleRanges){const i=e.state.doc.sliceString(s,a);r.lastIndex=0;let o;for(;(o=r.exec(i))!==null;){const d=s+o.index,c=d+o[0].length;n.add(d,c,Qn.mark({class:vr(o)}))}}return n.finish()}function vr(e){return e[1]?"cm-rasa-string":e[2]?"cm-rasa-comment":e[3]?"cm-rasa-keyword":e[4]?"cm-rasa-number":e[5]?"cm-rasa-punct":e[6]?"cm-rasa-literal":e[7]?"cm-rasa-qualified":"cm-rasa-text"}function Pe(e){return e?`=> ${O(e)}`:"=> nil"}function gn(e,n,r,s){return r.lastValue=null,r.lastTrace=null,r.pendingAssetModel=null,e.evaluateSession(n,s,Je)}function xn(e,n){let r=null;try{r=Qe(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const s=r?.status?.name,a=r?.eval?.status?.name;if(s!=="ok"||r.eval&&a!=="ok"){const i=r?.eval?.message||r?.eval?.["rendered-error"]||r?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function Rr(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function Nr(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function _(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function se(e){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function ae(e){return e?.source?.symbol?.name||null}function Sr(e){const n=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function $r(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function ve(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function M(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function T(e){return Math.max(0,M()-e)}Un.createRoot(document.getElementById("root")).render(t.jsx(Pt,{}));
