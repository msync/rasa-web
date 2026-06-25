import{b as Vt,j as n,r as l,J as ft,d as yt}from"./react.js";import{i as Ut,B as zt,C as Kt}from"./graph.js";import{S as gt,V as Wt,E as Fe,R as Ht,D as Jt,a as Gt,l as Qt,d as Xt,k as Yt}from"./editor.js";import{l as Zt}from"./tfjs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const De=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),en=256,tn=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],xe=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class Je{static async load(t,s={}){const r=await fetch(t);if(!r.ok)throw new Error(`failed to load Rasa engine: ${r.status}`);const a=await r.arrayBuffer();let i=null;const o=s.imports||{},d=s.hostCall||null,c={rasa_host_call(){return 1},...o.env||{}};d&&(c.rasa_host_call=(j,v,N)=>{try{const S=new Uint8Array(i.memory.buffer,j,v),oe=d(rt(S)),R=z(oe),P=i.rasa_alloc(R.length);if(P===0&&R.length>0)return 2;new Uint8Array(i.memory.buffer,P,R.length).set(R);const le=new DataView(i.memory.buffer);return le.setUint32(N,P,!0),le.setUint32(N+4,R.length,!0),0}catch{return 1}});const{instance:m,module:h}=await WebAssembly.instantiate(a,{...o,env:c});return i=m.exports,new Je(m.exports,h)}constructor(t,s=null,r=tn){for(const a of r)if(!t[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(t.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=t,this.module=s}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(t,s=De.all){return this.callText("rasa_eval_source",z(t),s)}inspect(t,s={}){return JSON.parse(this.callText("rasa_inspect_source",z(t),nn(s)))}syntaxTokens(t){return JSON.parse(this.callText("rasa_syntax_tokens",z(t)))}callText(t,s,r=void 0){return this.callInput(s,(a,i)=>r===void 0?this.exports[t](a,i):this.exports[t](a,i,r))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(t){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(t)}loadPackage(t,s){return this.requireExport("rasa_session_load_package"),this.callInput(z(s),(r,a)=>this.exports.rasa_session_load_package(t,r,a))}evaluateSession(t,s,r=De.all){return this.requireExport("rasa_session_eval"),this.callInput(z(s),(a,i)=>this.exports.rasa_session_eval(t,a,i,r))}callInput(t,s){const r=this.exports.rasa_alloc(t.length);if(r===0&&t.length>0)throw new Error("Rasa engine allocation failed");t.length>0&&new Uint8Array(this.exports.memory.buffer,r,t.length).set(t);const a=s(r,t.length);if(this.exports.rasa_free(r,t.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(t){if(!this.exports[t])throw new Error(`missing Rasa Wasm export ${t}`)}readReport(t){const s=this.exports.rasa_report_ptr(t),r=this.exports.rasa_report_len(t);if(s===0||r===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,s,r);return rt(a)}}function z(e){return new TextEncoder().encode(e)}function rt(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function nn(e={}){const t=e.detail||"standard";let s=0;return e.includeEval!==!1&&(s|=xe.includeEval),e.includePlan!==!1&&(s|=xe.includePlan),s|=xe[t]??xe.standard,s}gt.define();gt.define();function sn(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}const at=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),xt="rasa.theme",rn=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});rn.dark;function an(e=document.documentElement){const t=localStorage.getItem(xt),s=t==="light"||t==="dark"?t:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return jt(s,e),s}function jt(e,t=document.documentElement){const s=e==="light"?"light":"dark";return t.dataset.rasaTheme=s,t.setAttribute("data-theme",s),localStorage.setItem(xt,s),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:s}})),s}function on(e=document.documentElement){return jt(e.dataset.rasaTheme==="light"?"dark":"light",e)}function it(e){return e==="light"?"Dark":"Light"}const O=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function J(e){return O.find(t=>t.id===e)||O[0]}const be="tiny-cnn",Le=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,ln=`(def m (model/load-model :${be}))
(model/summary m)`;function dn(e=be){const t=J(e);return[{label:"Load + summary",source:`(def m (model/load-model :${t.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${t.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${t.defaultLayerIndex} size`,source:`(layer/tensor-size m ${t.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${t.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${t.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${t.defaultLayer}" {:bins 32})`}]}class cn{constructor(t){this.prefix=t,this.nextId=1,this.resources=new Map}insert(t,s){const r=`${this.prefix}/${t}/${this.nextId++}`;return this.resources.set(r,{kind:t,value:s}),r}get(t,s=null){const r=this.resources.get(t);if(!r)throw new Error(`unknown resource handle ${t}`);if(s&&r.kind!==s)throw new Error(`resource ${t} has kind ${r.kind}, expected ${s}`);return r.value}}class un{constructor(){this.handlers=new Map}register(t,s,r){return this.handlers.set(Ve(t,s),r),this}invoke(t,s,r){const a=this.handlers.get(Ve(t,s));if(!a)throw new Error(`unsupported capability ${t}/${s}`);return a(r)}entries(){return[...this.handlers.keys()]}}function Ve(e,t){return`${e}/${t}`}function bt(e){return new pn(e).parse()}function B(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Re(e)?`:${e.name}`:Ge(e)?e.name:Array.isArray(e)?`[${e.map(B).join(" ")}]`:`{${Object.entries(e).map(([t,s])=>`:${t} ${B(s)}`).join(" ")}}`}function we(e,t=0){if(e==null||typeof e!="object"||Re(e)||Ge(e))return B(e);const s=" ".repeat(t+2),r=" ".repeat(t);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${s}${we(i,t+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${s}:${i} ${we(o,t+2)}`).join(`
`)}
${r}}`}function mn(e){return{type:"keyword",name:e}}function hn(e){return{type:"symbol",name:e}}function Re(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Ge(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}class pn{constructor(t){this.text=t,this.index=0}parse(){const t=this.form();return this.ws(),t}form(){this.ws();const t=this.peek();return t==="{"?this.map():t==="["?this.vector():t==='"'?this.string():this.atom()}map(){this.expect("{");const t={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,t;const s=this.form(),r=this.form();t[fn(s)]=r}}vector(){this.expect("[");const t=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,t;t.push(this.form())}}string(){this.expect('"');let t="";for(;this.index<this.text.length;){const s=this.text[this.index++];if(s==='"')return t;if(s==="\\"){const r=this.text[this.index++];t+=r==="n"?`
`:r}else t+=s}throw new Error("unterminated string")}atom(){const t=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const s=this.text.slice(t,this.index);if(!s)throw new Error(`expected form at byte ${this.index}`);return s==="nil"?null:s==="true"?!0:s==="false"?!1:/^-?\d+(\.\d+)?$/.test(s)?Number(s):s.startsWith(":")?mn(s.slice(1)):hn(s)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(t){if(this.ws(),this.text[this.index]!==t)throw new Error(`expected ${t} at byte ${this.index}`);this.index++}}function fn(e){return Re(e)||Ge(e)?e.name:String(e)}const Ie=Object.freeze(Object.fromEntries(O.map(e=>[e.id,`./models/${e.id}/model.json`])));class Oe extends Error{constructor(t){super(`model :${t} assets are not prepared`),this.modelId=t}}class yn{constructor(){this.resources=new cn("browser"),this.registry=gn(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(t){const s=bt(t);this.lastTrace={requestText:t,request:s,responseText:"",packageName:s.package?.name||"unknown",exportName:s.export?.name||"unknown"};const r=this.route(s),a=B(r);return this.lastTrace.responseText=a,a}route(t){try{const s=t.package?.name,r=t.export?.name,a=t.args||[],i=this.invoke(s,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:s,exportName:r,capability:Ve(s,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(s){const r=s instanceof Oe?{status:y("failed"),kind:y("asset-not-prepared"),model:y(s.modelId),recoverable:!0,message:s.message}:{status:y("failed"),kind:y("provider-error"),message:s.message};return s instanceof Oe&&(this.pendingAssetModel=s.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:s.message},r}}invoke(t,s,r){return this.registry.invoke(t,s,r)}loadNamedModel(t){if(!Ie[t])throw new Error(`unknown model :${t}`);if(!this.catalog.has(t))throw new Oe(t);if(!this.modelIds.has(t)){const s=this.resources.insert("model",this.catalog.get(t));this.modelIds.set(t,s)}return this.modelIds.get(t)}async prepareModel(t){return this.loadModelNow(t)}isPrepared(t){return this.catalog.has(t)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(t){if(!Ie[t])throw new Error(`unknown model :${t}`);if(this.catalog.has(t))return this.catalog.get(t);const s=await Zt(Ie[t]);return this.catalog.set(t,s),s}model(t){return this.resources.get(t,"model")}loadedModels(){return[...this.modelIds.entries()].map(([t,s])=>{const r=this.summary(s);return{id:t,handle:s,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(t){const s=this.model(t),r=s.layers.map(W);return{view:y("model-summary"),model:s.name,handle:t,layers:r.length,parameters:H(r.map(a=>a.params)),trainableParameters:H(r.map(a=>a.trainableParams)),bytes:H(r.map(a=>a.bytes)),inputs:G(s.inputs?.[0]?.shape),outputs:G(s.outputs?.[0]?.shape),graph:ot(s),layerTable:r}}graph(t){return{view:y("graph"),graph:ot(this.model(t))}}layerCount(t){const s=this.model(t);return{view:y("numeric-aggregate"),label:"layer count",value:s.layers.length,unit:y("layers"),model:s.name,handle:t}}layersByKind(t,s){const r=this.model(t).layers.map(W).filter(a=>a.kind===s);return{view:y("layers-by-kind"),kind:y(s),count:r.length,layers:r}}topLayers(t,s){const r=Number(s.limit||5),i=Ue(s.by||y("params"))==="bytes"?"bytes":"params",o=this.model(t).layers.map(W).sort((d,c)=>c[i]-d[i]).slice(0,r);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(t,s){const r=this.layerByName(t,s);return{view:y("layer-inspection"),layer:W(r),config:bn(r.getConfig()),weights:r.weights.map(wt)}}layerTensorSize(t,s){const{layer:r,index:a}=this.layerByRef(t,s),i=W(r,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(t,s){const r=this.layerByName(t,s);return{view:y("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>xn(r.weights[i],a))}}weightHistogram(t,s,r){const a=this.layerByName(t,s),i=Number(r.bins||24),o=a.getWeights().map((d,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:jn(Array.from(d.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(t,s){const r=this.model(t).layers.find(a=>a.name===s);if(!r)throw new Error(`unknown layer ${s}`);return r}layerByRef(t,s){const r=this.model(t);if(typeof s=="number"){const o=Math.trunc(s)-1,d=r.layers[o];if(!d)throw new Error(`unknown layer index ${s}`);return{layer:d,index:o}}const a=String(s),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function gn(e){return new un().register("demo.tfjs/model","load-model",([t])=>e.loadNamedModel(Ue(t))).register("demo.tfjs/model","summary",([t])=>e.summary(t)).register("demo.tfjs/model","layer-count",([t])=>e.layerCount(t)).register("demo.tfjs/model","graph",([t])=>e.graph(t)).register("demo.tfjs/layers","by-kind",([t,s])=>e.layersByKind(t,Ue(s))).register("demo.tfjs/layers","top",([t,s={}])=>e.topLayers(t,s)).register("demo.tfjs/layer","inspect",([t,s])=>e.inspectLayer(t,s)).register("demo.tfjs/layer","tensor-size",([t,s])=>e.layerTensorSize(t,s)).register("demo.tfjs/weights","stats",([t,s])=>e.weightStats(t,s)).register("demo.tfjs/weights","histogram",([t,s,r={}])=>e.weightHistogram(t,s,r))}function W(e,t=null){const s=e.weights.map(wt);return{id:e.name,index:t??wn(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:G(e.inputShape),output:G(e.outputShape),params:H(s.map(r=>r.params)),trainableParams:H(s.filter(r=>r.trainable).map(r=>r.params)),bytes:H(s.map(r=>r.bytes))}}function ot(e){const t=e.layers.map((s,r)=>({...W(s,r),index:r}));return{nodes:t,edges:t.slice(1).map((s,r)=>({id:`${t[r].id}->${s.id}`,source:t[r].id,target:s.id}))}}function wt(e){const t=e.shape.reduce((s,r)=>s*r,1);return{name:e.originalName,shape:G(e.shape),params:t,bytes:t*4,trainable:!!e.trainable}}function xn(e,t){const s=Array.from(t.dataSync()),r=s.length,a=Math.min(...s),i=Math.max(...s),o=s.reduce((m,h)=>m+h,0)/r,d=s.reduce((m,h)=>m+(h-o)**2,0)/r,c=s.filter(m=>m===0).length;return{name:e?.originalName||"weight",shape:G(t.shape),params:r,min:L(a),max:L(i),mean:L(o),stddev:L(Math.sqrt(d)),sparsity:L(c/r)}}function jn(e,t){const s=Math.min(...e),r=Math.max(...e),a=r===s?1:(r-s)/t,i=Array.from({length:t},(o,d)=>({start:L(s+d*a),end:L(s+(d+1)*a),count:0}));for(const o of e){const d=Math.min(t-1,Math.max(0,Math.floor((o-s)/a)));i[d].count+=1}return i}function bn(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(s=>e[s]!==void 0).map(s=>[s,e[s]]))}function Ue(e){return Re(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function G(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(lt).join(" x "):e.map(lt).join(" x "):"?"}function lt(e){return e==null?"*":String(e)}function H(e){return e.reduce((t,s)=>t+s,0)}function L(e){return String(Math.round(e*1e5)/1e5)}function wn(e){return Number(e._index??0)}const kt=`{:packages
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
                         :targets {:ras.wasm {:availability :available}}}}}}]}`;function re(e){return e==null?"nil":Se(e)?`:${e.name}`:$e(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(re).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([t,s])=>`:${t} ${re(s)}`).join(" ")}}`:String(e)}function ze(e,t=0){if(e==null||typeof e!="object"||Se(e)||$e(e))return re(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(t+2),o=" ".repeat(t);return`[
${e.map(d=>`${i}${ze(d,t+2)}`).join(`
`)}
${o}]`}const s=Object.entries(e);if(s.length===0)return"{}";const r=" ".repeat(t+2),a=" ".repeat(t);return`{
${s.map(([i,o])=>`${r}:${i} ${ze(o,t+2)}`).join(`
`)}
${a}}`}function kn(e,t=""){return Se(e)||$e(e)?e.name:typeof e=="string"?e:e==null?t:String(e)}function Se(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function $e(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function vn(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!Se(e)&&!$e(e)?Object.keys(e).length:0}function Be(e){if(!e||!e.includes(":traces"))return null;try{return bt(e).traces||null}catch{return null}}function Qe(e){const t=Array.isArray(e?.traces)?e.traces:[],s=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:kn(e?.scope,"waiting"),traces:t.length,requests:s.length,empty:t.length===0&&s.length===0}}function Nn(e){const t=[];return Ke(e,[],t),t}function dt(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:re(e)}function Rn(e){return ze(e)}function ke(e){return e==null?null:Array.isArray(e)?e.map(ke):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([t,s])=>[`:${t}`,ke(s)])):e}function Ke(e,t,s){const r=s.length,a={id:r,path:t,label:$n(t),kind:Sn(e),value:vn(e)?null:re(e),children:[]};return s.push(a),Array.isArray(e)?e.forEach((i,o)=>{const d=Ke(i,[...t,o],s);a.children.push(d)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const d=Ke(o,[...t,i],s);a.children.push(d)}),r}function Sn(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function $n(e){return e.length?e.map(t=>typeof t=="number"?`[${t}]`:`:${t}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),We=e=>({type:"symbol",name:e});function ct(e){const t=Mn(e),s=En(e),r=An(e);return{source:Tn(e),value:t,providerTrace:s,traceSection:r,runtimeReport:`{:status :ok :traces ${He(r)}}`,loadedModel:{id:e.id,handle:t.handle,name:t.model,layers:t.layers,parameters:t.parameters,trainableParameters:t.trainableParameters,bytes:t.bytes,inputs:t.inputs,outputs:t.outputs}}}function Tn(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function Mn(e){const t=vt(e),s=t.reduce((a,i)=>a+i.params,0),r=t.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:t.length,parameters:s,trainableParameters:s,bytes:r,inputs:_n(e),outputs:Cn(e),graph:{nodes:t,edges:t.slice(1).map((a,i)=>Ln(t[i].id,a.id))},layerTable:t}}function En(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${vt(e).length}}}`}}function An(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[K(0,"source-form",{symbol:We("model/load-model"),span:{start:7,end:23}}),K(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),K(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[K(0,"source-form",{symbol:We("model/summary"),span:{start:31,end:44}}),K(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),K(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[ut(0,"demo.tfjs/model","load-model","model/load-model",e.id),ut(1,"demo.tfjs/model","summary","model/summary")]}}function vt(e){switch(e.id){case"tiny-mlp":return[x("feature_input","input","* x 16",0,0),x("hidden_dense","dense","* x 32",544,2176),x("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[x("signal_input","input","* x 32",0,0),x("encoder_dense","dense","* x 12",396,1584),x("bottleneck","dense","* x 4",52,208),x("decoder_dense","dense","* x 12",60,240),x("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[x("token_input","input","* x 8",0,0),x("token_embedding","embedding","* x 8 x 16",1600,6400),x("pool_tokens","global-average-pooling1d","* x 16",0,0),x("projection_dense","dense","* x 8",136,544)];default:return[x("input_image","input","* x 28 x 28 x 1",0,0),x("stem_conv","conv2d","* x 26 x 26 x 8",80,320),x("flatten","flatten","* x 5408",0,0),x("classifier_dense","dense","* x 10",5306,21224)]}}function _n(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function Cn(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function x(e,t,s,r,a){return{id:e,index:0,name:e,kind:t,activation:"linear",input:"?",output:s,params:r,trainableParams:r,bytes:a}}function Ln(e,t){return{id:`${e}->${t}`,source:e,target:t}}function K(e,t,s){return{id:e,kind:g(t),subject:null,"source-id":"browser://repl",span:s.span||null,data:s,diagnostics:[],annotations:[],evidence:[]}}function ut(e,t,s,r,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:t,export:s,capability:g(`${t}/${s}`)},source:{symbol:We(r),model:a?g(a):null},admission:{"call-id":e,identity:{package:t,export:s,capability:g(`${t}/${s}`)},effects:[g("model/read")]},"trace-id":e}}function He(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(He).join(" ")}]`:`{${Object.entries(e).filter(([,t])=>t!==null).map(([t,s])=>`:${t} ${He(s)}`).join(" ")}}`}const In=`import "@tensorflow/tfjs-backend-cpu";
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
`,On="./engine.wasm",Nt=De.all|en,Rt=e=>e<2;function Bn(){const e=Pn()==="trace",t=l.useRef(null),s=l.useRef(null),r=l.useRef(0),a=l.useRef(null),i=l.useRef(!1),[o,d]=l.useState(be),[c,m]=l.useState(()=>an()),[h,j]=l.useState(()=>e?ct(J(be)).source:ln),[v,N]=l.useState("loading"),[S,oe]=l.useState(!1),[R,P]=l.useState(0),[le,Ze]=l.useState(null),[et,X]=l.useState(null),[Te,de]=l.useState(""),[Y,ce]=l.useState(null),[Z,ue]=l.useState(null),[Me,Ee]=l.useState([]),[Ae,me]=l.useState([]),[Et,_e]=l.useState(null),[At,tt]=l.useState({}),[q,Ce]=l.useState(null),[he,nt]=l.useState(null),[pe,st]=l.useState(null),[_t,Ct]=l.useState("boundary"),[Lt,fe]=l.useState([]),p=l.useMemo(()=>e?ct(J(o)):null,[e,o]);l.useEffect(()=>{const u=f=>m(f.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",u),()=>window.removeEventListener("rasa-theme-change",u)},[]),l.useEffect(()=>{let u=!0;async function f(){try{if(e&&p){if(!u)return;const ne=await mt().catch(()=>({}));if(!u)return;de(p.runtimeReport),ce(p.providerTrace),ue(p.traceSection),Ee([p.loadedModel]),me([p.loadedModel.id]),tt(ne),Ce(p.value),nt(p.loadedModel.handle),st(null),Ze({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),X({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:Le,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:p.source,result:qe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]),N("ready");return}const F=T(),b=new yn,w=T(),k=await mt(),ee=$(w),D=T(),_=await Je.load(qn(),{hostCall:ne=>b.call(ne)}),V=$(D),C=_.createSession(),ye=T();_.loadPackage(C,kt);const te=_.evaluateSession(C,Le,Nt),ge=$(ye);if(!u)return;t.current=b,s.current=_,r.current=C,de(te),ce(b.lastTrace),ue(Be(te)),Ee(b.loadedModels()),me(b.preparedModelIds()),tt(k),Ze({manifestMs:ee,engineMs:V,setupMs:ge,totalMs:$(F)}),fe([{id:"setup",kind:"setup",source:Le,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),N("ready")}catch(F){u&&N(`failed: ${F.message}`)}}return f(),()=>{u=!1,s.current&&r.current&&s.current.freeSession(r.current)}},[e,p]);const It=l.useCallback(async()=>{if(e&&p){const M=a.current?.state.doc.toString()||h,se=R+1;P(se),Ce(p.value),ce(p.providerTrace),ue(p.traceSection),de(p.runtimeReport),X({run:se,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe(U=>[...U,{id:`run-${U.length}`,kind:"run",source:M,result:qe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]);return}if(!s.current||!r.current||!t.current||i.current)return;i.current=!0,oe(!0),_e(null);const u=a.current?.state.doc.toString()||h,f=t.current,F=T();let b=Te,w=null,k=null,ee=null,D=null,_=0,V=0,C=0,ye=!1;X({status:"running",assetState:"checking",totalMs:0});try{const M=T();b=pt(s.current,r.current,f,u),ee=Be(b),V=$(M);const se=vs(f);if(se){const U=se;D=U,_e(U),X({status:"running",assetState:"fetching",assetModel:D,firstEvalMs:V,totalMs:$(F)});const Ft=T();await f.prepareModel(U),_=$(Ft),me(f.preparedModelIds()),f.pendingAssetModel=null;const Dt=T();b=pt(s.current,r.current,f,u),ee=Be(b),C=$(Dt)}else C=V;w=f.lastValue,k=f.lastTrace}catch(M){ye=!0,w=ks("asset-load-error",M.message),k={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,oe(!1)}const te=$(F),ge=R+1,ne={run:ge,status:k?.status||"ok",capability:E(k),view:k?.view||ve(w),assetState:ye?"failed":D?"fetched":"cached",assetModel:D,assetLoadMs:_,firstEvalMs:V,finalEvalMs:C,totalMs:te,cacheCount:f.preparedModelIds().length};de(b),Ce(w),ce(k),ue(ee),Ee(f.loadedModels()),me(f.preparedModelIds()),_e(null),X(ne),w?.handle&&nt(w.handle),P(ge),fe(M=>[...M,{id:`run-${M.length}`,kind:"run",source:u,result:qe(w),capability:E(k),view:k?.view||ve(w),status:k?.status||"ok",durationMs:te,value:w}])},[e,p,R,Te,h,Z]),A=l.useMemo(()=>ms(q),[q]),Ot=l.useMemo(()=>he?Me.find(u=>u.handle===he):null,[he,Me]),Bt=l.useMemo(()=>A.nodes.map(u=>u.id).join("|")||"empty-graph",[A.nodes]),Pt=l.useMemo(()=>A.nodes.map((u,f)=>({id:u.id,position:{x:f*220,y:f%2===0?0:28},data:{label:n.jsxs("div",{className:"node-label",children:[n.jsx("strong",{children:u.name}),n.jsx("span",{children:u.kind}),n.jsxs("em",{children:[u.params," params"]})]}),layer:u},type:"default",className:pe===u.id?"selected-node":""})),[A.nodes,pe]),qt=l.useMemo(()=>A.edges.map(u=>({...u,animated:!0})),[A.edges]);return n.jsxs("main",{className:"app-shell",children:[n.jsxs("header",{className:"hero",children:[n.jsxs("div",{className:"brand-lockup",children:[n.jsx("img",{src:at.logo,alt:"Rasa"}),n.jsxs("div",{children:[n.jsx("span",{children:"Rasa Model Explorer"}),n.jsx("h1",{children:"Model architecture explorer"}),n.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),n.jsxs("div",{className:"hero-status",children:[n.jsx("img",{src:at.mark,alt:"","aria-hidden":"true"}),n.jsx("span",{className:v==="ready"?"ok":"warn",children:v}),n.jsx("span",{children:"tfjs assets on first run"}),n.jsx("span",{children:"static bundle"}),n.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>m(on()),"aria-label":`Switch to ${it(c).toLowerCase()} theme`,children:it(c)})]})]}),n.jsxs("section",{className:"boundary-theater",children:[n.jsx(Fn,{fixture:e,providerTrace:Y,traceSection:Z,runMetrics:et}),n.jsxs("aside",{className:"theater-left",children:[n.jsxs("div",{className:"studio-head",children:[n.jsx("span",{className:"label",children:"Model & extension"}),n.jsx("strong",{children:"What Rasa is allowed to touch"})]}),n.jsx(Qn,{models:Me,activeHandle:he,preparedModelIds:Ae}),n.jsx(ts,{modelManifest:At[o],modelId:o,compact:!0})]}),n.jsxs("section",{className:"theater-stage",children:[n.jsx(Dn,{value:q,graph:A,runCount:R,selectedModelId:o,preparedModelIds:Ae,running:S,fixture:e}),n.jsxs("div",{className:"graph-wrap graph-theater",children:[n.jsx(Vn,{traceSection:Z,providerTrace:Y,value:q,selectedModelId:o,activeModelId:Ot?.id||null,running:S}),n.jsxs(Ut,{nodes:Pt,edges:qt,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(u,f)=>st(f.id),children:[n.jsx(zt,{color:"#29313d",gap:18}),n.jsx(Kt,{showInteractive:!1})]},Bt)]}),n.jsx(zn,{traceSection:Z,providerTrace:Y,runMetrics:et,bootMetrics:le})]}),n.jsxs("aside",{className:"theater-inspector",children:[n.jsx(Un,{value:q,trace:Y,selectedLayer:pe}),n.jsx(Kn,{activeTab:_t,setActiveTab:Ct,value:q,selectedLayer:pe,trace:Y,traceSection:Z,runtimeReport:Te,fixture:e})]}),n.jsxs("section",{className:"theater-console","aria-label":"Rasa command console",children:[n.jsx(Hn,{entries:Lt}),n.jsxs("div",{className:"console-command",children:[n.jsx(Gn,{selectedModelId:o,setSelectedModelId:d,setSource:j,editorRef:a,prepared:Ae.includes(o),preparing:Et===o}),n.jsx(Wn,{source:h,editorRef:a,run:It,disabled:v!=="ready"||S,running:S})]})]})]})]})}function Pn(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function qn(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||On}function Fn({fixture:e,providerTrace:t,traceSection:s,runMetrics:r}){const a=Array.isArray(s?.["host-requests"])?s["host-requests"]:[],i=a.length?a[a.length-1]:null,o=Qe(s),d=[{label:e?"Replay form":"Rasa source",title:ie(i)||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:ae(i)||E(t)||"waiting",detail:`${o.requests} admitted request(s)`,tone:"admit"},{label:"Browser host",title:t?.packageName||"TF.js provider",detail:t?.status||"waiting",tone:"host"},{label:"Return",title:r?.view?`:${r.view}`:"Rasa value",detail:r?.totalMs!==void 0?Ne(r.totalMs):"structured data",tone:"return"}];return n.jsx("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:d.map(c=>n.jsxs("article",{className:`runway-step ${c.tone}`,children:[n.jsx("span",{children:c.label}),n.jsx("strong",{children:c.title}),n.jsx("em",{children:c.detail})]},c.label))})}function Dn({value:e,graph:t,runCount:s,selectedModelId:r,preparedModelIds:a,running:i,fixture:o}){const d=J(r),c=o?"fixture layer records":"live layer records";return n.jsxs("header",{className:"stage-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Model graph"}),n.jsx("h2",{children:t.nodes.length?`${t.nodes.length} ${c}`:"No model value yet"}),n.jsxs("p",{children:[d.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),n.jsxs("div",{className:"stage-metrics",children:[n.jsx(I,{label:"Run",value:i?"running":s}),n.jsx(I,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),n.jsx(I,{label:"Assets",value:`${a.length}/${O.length}`})]})]})}function Vn({traceSection:e,providerTrace:t,value:s,selectedModelId:r,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],d=o.length?o[o.length-1]:null,c=J(r),m=a?J(a):null,h=a&&r!==a,j=i?"Rasa is evaluating the current form.":h?`Editor targets ${c.title}; run it to replace ${m.title}.`:m?`${m.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return n.jsxs("aside",{className:`boundary-spotlight ${h?"pending":""}`,"aria-label":"Current boundary spotlight",children:[n.jsxs("div",{className:"spotlight-flow",children:[n.jsxs("div",{children:[n.jsx("span",{children:"form"}),n.jsx("strong",{children:ie(d)||"waiting for run"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"admitted identity"}),n.jsx("strong",{children:ae(d)||E(t)||"not admitted yet"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"returned value"}),n.jsx("strong",{children:s?.view?.name?`:${s.view.name}`:"none yet"})]})]}),n.jsx("p",{children:j})]})}function Un({value:e,trace:t,selectedLayer:s}){const[r,a]=l.useState(null),i=e?we(e):"nil";return n.jsxs(n.Fragment,{children:[n.jsxs("article",{className:"value-lens",children:[n.jsx("span",{className:"label",children:"Selected value"}),n.jsx("strong",{children:ve(e)}),n.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),n.jsx(Q,{text:ys(i),mode:"rasa"}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"capability"}),n.jsx("dd",{children:E(t)||"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"selected"}),n.jsx("dd",{children:s||"none"})]})]}),n.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&n.jsx(Xe,{kind:"Rasa value",title:ve(e),description:"The real structured value returned to the browser from the Rasa session.",meta:Ye(i,"rasa"),onClose:()=>a(null),children:n.jsx("div",{className:"modal-code-stack result-only",children:n.jsxs("section",{className:"result-section",children:[n.jsx("span",{className:"modal-section-label",children:"returned value"}),n.jsx(Q,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function zn({traceSection:e,providerTrace:t,runMetrics:s,bootMetrics:r}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return n.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[n.jsx(I,{label:"Host request",value:ie(i)||"waiting"}),n.jsx(I,{label:"Canonical identity",value:ae(i)||E(t)||"waiting"}),n.jsx(I,{label:"Status",value:t?.status||s?.status||"waiting"}),n.jsx(I,{label:"Time",value:s?.totalMs!==void 0?Ne(s.totalMs):r?Ne(r.totalMs):"pending"})]})}function Kn({activeTab:e,setActiveTab:t,value:s,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:d}){const c=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return n.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[n.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:c.map(m=>n.jsx("button",{className:e===m.id?"active":"",type:"button","aria-pressed":e===m.id,onClick:()=>t(m.id),children:m.label},m.id))}),n.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&n.jsx(Yn,{traceSection:i,providerTrace:a,fixture:d}),e==="result"&&n.jsxs(n.Fragment,{children:[n.jsx(Xn,{value:s,trace:a,traceSection:i}),n.jsx(is,{value:s,selectedLayer:r})]}),e==="data"&&n.jsxs(n.Fragment,{children:[n.jsx(St,{title:"Returned Rasa value",value:s,defaultOpen:!0}),n.jsxs("details",{className:"runtime-report",children:[n.jsx("summary",{children:"Runtime report"}),n.jsx("pre",{children:o})]})]})]})]})}function Wn({source:e,editorRef:t,run:s,disabled:r,running:a}){const i=l.useRef(null),o=l.useRef(s);return l.useEffect(()=>{o.current=s},[s]),l.useEffect(()=>{const d=new Fe({parent:i.current,state:Gt.create({doc:e,extensions:[Qt(),Xt(),bs,js,Yt.of(sn(()=>o.current())),Fe.lineWrapping]})});return t.current=d,()=>d.destroy()},[]),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Rasa input"}),n.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),n.jsx("span",{children:"Primary+Enter runs"})]}),n.jsx("div",{className:"editor-host",ref:i}),n.jsxs("div",{className:"editor-actions",children:[n.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),n.jsx("button",{className:"run-button",type:"button",onClick:s,disabled:r,children:a?"Running...":"Run"})]})]})}function Hn({entries:e}){const t=l.useRef(null),[s,r]=l.useState(null),a=s?ps(s):"";return l.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[e.length]),n.jsxs(n.Fragment,{children:[n.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:t,children:e.length?e.map(i=>n.jsx(Jn,{entry:i,onOpenResult:()=>r(i)},i.id)):n.jsxs("article",{className:"transcript-entry",children:[n.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),n.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),s&&n.jsx(Xe,{kind:"Rasa value",title:s.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:Ye(a,"rasa"),onClose:()=>r(null),children:n.jsxs("div",{className:"modal-code-stack",children:[n.jsxs("section",{className:"form-section",children:[n.jsx("span",{className:"modal-section-label",children:"form"}),n.jsx(Q,{text:s.source,mode:"rasa",numbered:!0})]}),n.jsxs("section",{className:"result-section",children:[n.jsx("span",{className:"modal-section-label",children:"result"}),n.jsx(Q,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function Jn({entry:e,onOpenResult:t}){return n.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[n.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&n.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:t,children:[n.jsx("pre",{children:fs(e.result)}),n.jsx("span",{children:"Open full value"})]}),n.jsxs("div",{className:"transcript-meta",children:[n.jsx("span",{children:e.capability||"session"}),n.jsx("span",{children:e.view}),n.jsx("span",{children:e.status}),e.durationMs!==void 0&&n.jsx("span",{children:Ne(e.durationMs)})]})]})}function Gn({selectedModelId:e,setSelectedModelId:t,setSource:s,editorRef:r,prepared:a,preparing:i}){const o=dn(e).slice(0,5),d=c=>{t(c.target.value)};return n.jsxs("div",{className:"command-shelf",children:[n.jsxs("div",{className:"command-shelf-head",children:[n.jsxs("label",{className:"model-picker",children:[n.jsx("span",{children:"Model"}),n.jsx("select",{value:e,onChange:d,children:O.map(c=>n.jsx("option",{value:c.id,children:c.title},c.id))})]}),n.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),n.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(c=>n.jsxs("article",{className:"command-chip",children:[n.jsxs("div",{children:[n.jsx("strong",{children:c.label}),n.jsx("span",{children:us(c.source)})]}),n.jsxs("div",{className:"command-actions",children:[n.jsx("button",{type:"button",title:`Insert ${c.label} at the cursor`,onClick:()=>ds(c.source,s,r),children:"Insert"}),n.jsx("button",{type:"button",title:`Append ${c.label} below the current editor text`,onClick:()=>cs(c.source,s,r),children:"Append"})]})]},c.label))})]})}function Qn({models:e,activeHandle:t,preparedModelIds:s}){const r=t?e.find(a=>a.handle===t):null;return n.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?n.jsxs("article",{className:"active-model",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Active model"}),n.jsx("strong",{children:r.name})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"id"}),n.jsx("dd",{children:r.id})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"handle"}),n.jsx("dd",{children:r.handle})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"layers"}),n.jsx("dd",{children:r.layers})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"params"}),n.jsx("dd",{children:r.parameters})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"size"}),n.jsx("dd",{children:Rs(r.bytes||0)})]})]})]},r.handle||r.id):n.jsxs("article",{className:"active-model",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Active model"}),n.jsx("strong",{children:"none yet"})]}),n.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),n.jsxs("div",{className:"catalog-note",children:[O.length," static catalog models are available. ",s.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Xn({value:e,trace:t,traceSection:s}){const r=Ns(e),a=Qe(s);return n.jsxs("section",{className:"projection-card",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Projection"}),n.jsx("strong",{children:r.renderer}),n.jsx("p",{children:r.reason})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"Rasa view"}),n.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Capability"}),n.jsx("dd",{children:t?.packageName&&t?.exportName?`${t.packageName}/${t.exportName}`:"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Core traces"}),n.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Status"}),n.jsx("dd",{children:t?.status||"waiting"})]})]})]})}function Yn({traceSection:e,providerTrace:t,fixture:s=!1}){const r=Qe(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return n.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[n.jsxs("div",{className:"boundary-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Rasa boundary"}),n.jsx("strong",{children:r.empty?"Waiting for admitted host evidence":s?"Visual fixture replay":`Live Wasm ${r.scope} evidence`}),s&&n.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),n.jsxs("span",{children:[r.traces," traces"]})]}),n.jsxs("div",{className:"boundary-path",children:[n.jsx(Pe,{title:"Rasa form",value:ie(a[0])||"source expression"}),n.jsx(Pe,{title:"Canonical identity",value:ae(a[0])||E(t)||"package/export"}),n.jsx(Pe,{title:"Browser provider",value:t?.status?t.status:"waiting"})]}),n.jsxs("details",{className:"trace-section",open:!0,children:[n.jsx("summary",{children:"Admitted host calls"}),n.jsx("div",{className:"trace-list",children:a.length?a.map(i=>n.jsx(Zn,{request:i},i["call-id"])):n.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),n.jsx(es,{trace:t}),n.jsx(St,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Pe({title:e,value:t}){return n.jsxs("article",{children:[n.jsx("span",{children:e}),n.jsx("strong",{children:t})]})}function Zn({request:e}){return n.jsxs("article",{className:"host-request-card",children:[n.jsxs("div",{children:[n.jsxs("span",{children:["call ",e["call-id"]??"?"]}),n.jsx("strong",{children:ae(e)})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"source"}),n.jsx("dd",{children:ie(e)||"n/a"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"capability"}),n.jsx("dd",{children:dt(e.identity?.capability)})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"effects"}),n.jsx("dd",{children:(e.admission?.effects||[]).map(dt).join(" ")||"none"})]})]})]})}function es({trace:e}){return n.jsxs("article",{className:"provider-bridge",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Browser bridge"}),n.jsx("strong",{children:E(e)||"waiting"})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"status"}),n.jsx("dd",{children:e?.status||"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"args"}),n.jsx("dd",{children:e?.argsCount??"n/a"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"view"}),n.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),n.jsxs("details",{className:"bridge-details",children:[n.jsx("summary",{children:"Request / response data"}),n.jsx("pre",{children:e?.requestText||"no provider request yet"}),n.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function St({title:e,value:t,defaultOpen:s=!1}){const r=l.useMemo(()=>Nn(t),[t]),a=l.useMemo(()=>ke(t),[t]),i=r.slice(0,12);return n.jsxs("details",{className:"data-projection",open:s,children:[n.jsxs("summary",{children:[n.jsx("span",{children:e}),n.jsxs("strong",{children:[r.length," node(s)"]})]}),n.jsx("div",{className:"projection-viewer",children:n.jsx(ft,{data:a||{},shouldExpandNode:Rt,clickToExpandNode:!0,compactTopLevel:!0,style:{...yt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),n.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>n.jsxs("article",{children:[n.jsx("span",{children:o.label}),n.jsx("strong",{children:o.value||o.kind}),n.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&n.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Compact Rasa data"}),n.jsx("pre",{className:"data-block",children:Rn(t)})]})]})}function ts({modelManifest:e,modelId:t,compact:s=!1}){const[r,a]=l.useState(null),i=ns(e,t);return n.jsxs("section",{className:`extension-panel ${s?"compact":""}`,children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Open the extension"}),n.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),n.jsx("div",{className:"extension-assets",children:i.map(o=>n.jsx(ss,{asset:o,onOpen:()=>a(o)},o.id))}),r&&n.jsx(rs,{asset:r,onClose:()=>a(null)})]})}function ns(e,t){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:kt,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:In,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${t?` :${t}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function ss({asset:e,onOpen:t}){return n.jsxs("button",{className:"extension-asset",type:"button",onClick:t,children:[n.jsx("span",{children:e.kind}),n.jsx("strong",{children:e.title}),n.jsx("em",{children:e.description})]})}function rs({asset:e,onClose:t}){return n.jsx(Xe,{kind:e.kind,title:e.title,description:e.description,meta:Ye(e.text,e.mode),onClose:t,children:n.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"projection-viewer large",children:n.jsx(ft,{data:ke(e.value),shouldExpandNode:Rt,clickToExpandNode:!0,compactTopLevel:!0,style:{...yt,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Raw manifest JSON"}),n.jsx(Q,{text:e.text,mode:"json",numbered:!0})]})]}):n.jsx(Q,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Xe({kind:e,title:t,description:s,meta:r=[],onClose:a,children:i}){const o=l.useId(),d=l.useId(),c=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const h=document.activeElement;return m.current?.focus(),()=>{h?.isConnected&&typeof h.focus=="function"&&h.focus()}},[]),l.useEffect(()=>{const h=j=>{if(j.key==="Escape"){j.preventDefault(),a();return}if(j.key!=="Tab"||!c.current)return;const v=as(c.current);if(!v.length){j.preventDefault();return}const N=v[0],S=v[v.length-1];c.current.contains(document.activeElement)?j.shiftKey&&document.activeElement===N?(j.preventDefault(),S.focus()):!j.shiftKey&&document.activeElement===S&&(j.preventDefault(),N.focus()):(j.preventDefault(),N.focus())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[a]),n.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":d,children:[n.jsx("div",{className:"asset-modal-backdrop",onClick:a}),n.jsxs("article",{className:"asset-modal-panel",ref:c,tabIndex:-1,children:[n.jsxs("header",{children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:e}),n.jsx("h2",{id:o,children:t}),n.jsx("p",{id:d,children:s}),r.length>0&&n.jsx("div",{className:"modal-meta",children:r.map(h=>n.jsxs("span",{children:[n.jsx("strong",{children:h.value}),h.label]},h.label))})]}),n.jsx("button",{ref:m,type:"button",onClick:a,children:"Close"})]}),i]})]})}function as(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t=>t.disabled||t.hidden||t.getAttribute("aria-hidden")==="true"||t.closest("[inert]")?!1:t.getClientRects().length>0)}function Q({text:e,mode:t="rasa",numbered:s=!1}){const r=String(e||"").split(`
`);return n.jsx("pre",{className:`line-code ${s?"numbered":""}`,children:r.map((a,i)=>n.jsxs("span",{className:"code-line",children:[s&&n.jsx("span",{className:"line-number",children:i+1}),n.jsx("code",{children:gs(a||" ",t)})]},i))})}function is({value:e,selectedLayer:t}){if(!e)return n.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return n.jsx("pre",{className:"data-block",children:B(e)});if(e.view?.name==="weight-histogram")return n.jsx(os,{value:e});if(e.view?.name==="weight-stats")return n.jsx(ls,{value:e});const s=t?hs(e,t):null;return n.jsxs("div",{className:"inspection-stack",children:[s&&n.jsx(je,{layer:s}),Array.isArray(e.layers)&&e.layers.map(r=>n.jsx(je,{layer:r},r.id)),Array.isArray(e.layerTable)&&e.layerTable.map(r=>n.jsx(je,{layer:r,compact:!0},r.id)),e.layer&&n.jsx(je,{layer:e.layer}),n.jsx($t,{value:e})]})}function os({value:e}){const t=e.tensors?.[0],s=Math.max(...(t?.bins||[]).map(r=>r.count),1);return n.jsxs("div",{className:"inspection-stack",children:[n.jsx("h2",{children:e.layer}),n.jsx("div",{className:"histogram",children:(t?.bins||[]).map((r,a)=>n.jsx("div",{style:{height:`${8+r.count/s*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),n.jsx($t,{value:e})]})}function ls({value:e}){return n.jsx("div",{className:"inspection-stack",children:e.tensors.map(t=>n.jsxs("article",{className:"layer-card",children:[n.jsx("h2",{children:t.name}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"shape"}),n.jsx("dd",{children:t.shape})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"mean"}),n.jsx("dd",{children:t.mean})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"stddev"}),n.jsx("dd",{children:t.stddev})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"range"}),n.jsxs("dd",{children:[t.min,"..",t.max]})]})]})]},t.name))})}function $t({value:e}){return n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Returned Rasa data"}),n.jsx("pre",{className:"data-block",children:B(e)})]})}function je({layer:e,compact:t=!1}){return n.jsxs("article",{className:"layer-card",children:[n.jsx("h2",{children:e.name}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"kind"}),n.jsx("dd",{children:e.kind})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"output"}),n.jsx("dd",{children:e.output})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"params"}),n.jsx("dd",{children:e.params})]}),!t&&n.jsxs("div",{children:[n.jsx("dt",{children:"bytes"}),n.jsx("dd",{children:e.bytes})]})]})]})}function I({label:e,value:t}){return n.jsxs("article",{className:"metric",children:[n.jsx("span",{children:e}),n.jsx("strong",{children:t})]})}function ds(e,t,s){const r=s.current;if(!r){t(i=>Tt(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function cs(e,t,s){const r=s.current;if(!r){t(d=>Tt(d,e));return}const a=r.state.doc.toString(),i=Mt(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function Tt(e,t){return`${e||""}${Mt(e||"",t)}`}function Mt(e,t){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${t}`:t}function us(e){const t=String(e||"").split(`
`).filter(Boolean);return t.length>1?`${t[0]} ...`:t[0]||"Rasa form"}async function mt(){const e=await Promise.all(O.map(async t=>[t.id,await fetch(`./models/${t.id}/model.json`).then(s=>s.json())]));return Object.fromEntries(e)}function ms(e){const t=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return t?.nodes?.length?t:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((s,r)=>({id:`${e.layerTable[r].id}->${s.id}`,source:e.layerTable[r].id,target:s.id}))}:{nodes:[],edges:[]}}function hs(e,t){return e?.layerTable?.find(s=>s.id===t)||e?.layers?.find(s=>s.id===t)}function ve(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function ps(e){return e.value!==void 0?`=>
${we(e.value)}`:String(e.result||"=> nil")}function fs(e){const t=String(e||""),s=t.split(`
`).map(r=>r.trimEnd()).filter(Boolean);return s.length<=2?t:`${s.slice(0,2).join(`
`)}
...`}function ys(e){const t=String(e||"nil").split(`
`);return t.length<=10?t.join(`
`):`${t.slice(0,10).join(`
`)}
  ...`}function gs(e,t){const s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=s.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(n.jsx("span",{className:`tok ${xs(i,t)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function xs(e,t){return e[1]?"string":e[2]?"comment":e[3]?t==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function Ye(e,t="code"){const s=String(e||""),r=t==="json"?"folded JSON":t==="rasa"?"Rasa data":"source";return[{label:"lines",value:s?s.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(s).length},{label:"viewer",value:r}]}const js=Wt.fromClass(class{constructor(e){this.decorations=ht(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=ht(e.view))}},{decorations:e=>e.decorations}),bs=Fe.theme({"&":{backgroundColor:"#0e1319",color:"#e8edf2",caretColor:"#e8edf2"},"&.cm-focused":{outline:"1px solid rgba(131, 215, 170, 0.35)",outlineOffset:"-1px"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground":{backgroundColor:"rgba(120, 167, 255, 0.26)"},".cm-content ::selection":{backgroundColor:"rgba(120, 167, 255, 0.26)",color:"#e8edf2"},".cm-gutters, .cm-gutter, .cm-activeLineGutter":{backgroundColor:"#0e1319",color:"#687487"}},{dark:!0});function ht(e){const t=new Ht,s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)|(\b[\w.+*?!<>=/-]+\/[\w.+*?!<>=/-]+\b)/g;for(const{from:r,to:a}of e.visibleRanges){const i=e.state.doc.sliceString(r,a);s.lastIndex=0;let o;for(;(o=s.exec(i))!==null;){const d=r+o.index,c=d+o[0].length;t.add(d,c,Jt.mark({class:ws(o)}))}}return t.finish()}function ws(e){return e[1]?"cm-rasa-string":e[2]?"cm-rasa-comment":e[3]?"cm-rasa-keyword":e[4]?"cm-rasa-number":e[5]?"cm-rasa-punct":e[6]?"cm-rasa-literal":e[7]?"cm-rasa-qualified":"cm-rasa-text"}function qe(e){return e?`=> ${B(e)}`:"=> nil"}function pt(e,t,s,r){return s.lastValue=null,s.lastTrace=null,s.pendingAssetModel=null,e.evaluateSession(t,r,Nt)}function ks(e,t){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:t}}function vs(e){const t=e.lastValue;return t?.status?.name==="failed"&&t?.kind?.name==="asset-not-prepared"&&t?.recoverable===!0&&t?.model?.name?t.model.name:e.pendingAssetModel}function E(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function ae(e){const t=e?.identity||e?.admission?.identity;return!t?.package||!t?.export?null:`${t.package}/${t.export}`}function ie(e){return e?.source?.symbol?.name||null}function Ns(e){const t=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[t]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Rs(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function Ne(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function T(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function $(e){return Math.max(0,T()-e)}Vt.createRoot(document.getElementById("root")).render(n.jsx(Bn,{}));
