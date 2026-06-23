import{b as Ot,j as n,r as l,J as mt,d as ht}from"./react.js";import{i as Pt,B as Bt,C as qt}from"./graph.js";import{V as Ft,E as Fe,R as Dt,D as Vt,a as Ut,l as zt,d as Wt,k as Kt}from"./editor.js";import{l as Ht}from"./tfjs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const De=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),Jt=256,Gt=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],ge=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class Je{static async load(t,s={}){const r=await fetch(t);if(!r.ok)throw new Error(`failed to load Rasa engine: ${r.status}`);const a=await r.arrayBuffer();let i=null;const o=s.imports||{},c=s.hostCall||null,d={rasa_host_call(){return 1},...o.env||{}};c&&(d.rasa_host_call=(g,b,N)=>{try{const R=new Uint8Array(i.memory.buffer,g,b),le=c(nt(R)),E=z(le),B=i.rasa_alloc(E.length);if(B===0&&E.length>0)return 2;new Uint8Array(i.memory.buffer,B,E.length).set(E);const X=new DataView(i.memory.buffer);return X.setUint32(N,B,!0),X.setUint32(N+4,E.length,!0),0}catch{return 1}});const{instance:u,module:m}=await WebAssembly.instantiate(a,{...o,env:d});return i=u.exports,new Je(u.exports,m)}constructor(t,s=null,r=Gt){for(const a of r)if(!t[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(t.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=t,this.module=s}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(t,s=De.all){return this.callText("rasa_eval_source",z(t),s)}inspect(t,s={}){return JSON.parse(this.callText("rasa_inspect_source",z(t),Qt(s)))}syntaxTokens(t){return JSON.parse(this.callText("rasa_syntax_tokens",z(t)))}callText(t,s,r=void 0){return this.callInput(s,(a,i)=>r===void 0?this.exports[t](a,i):this.exports[t](a,i,r))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(t){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(t)}loadPackage(t,s){return this.requireExport("rasa_session_load_package"),this.callInput(z(s),(r,a)=>this.exports.rasa_session_load_package(t,r,a))}evaluateSession(t,s,r=De.all){return this.requireExport("rasa_session_eval"),this.callInput(z(s),(a,i)=>this.exports.rasa_session_eval(t,a,i,r))}callInput(t,s){const r=this.exports.rasa_alloc(t.length);if(r===0&&t.length>0)throw new Error("Rasa engine allocation failed");t.length>0&&new Uint8Array(this.exports.memory.buffer,r,t.length).set(t);const a=s(r,t.length);if(this.exports.rasa_free(r,t.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(t){if(!this.exports[t])throw new Error(`missing Rasa Wasm export ${t}`)}readReport(t){const s=this.exports.rasa_report_ptr(t),r=this.exports.rasa_report_len(t);if(s===0||r===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,s,r);return nt(a)}}function z(e){return new TextEncoder().encode(e)}function nt(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function Qt(e={}){const t=e.detail||"standard";let s=0;return e.includeEval!==!1&&(s|=ge.includeEval),e.includePlan!==!1&&(s|=ge.includePlan),s|=ge[t]??ge.standard,s}function Xt(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}const st=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),Zt=Object.freeze({surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",radius:"8px"}),O=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function J(e){return O.find(t=>t.id===e)||O[0]}const be="tiny-cnn",Ie=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Yt=`(def m (model/load-model :${be}))
(model/summary m)`;function en(e=be){const t=J(e);return[{label:"Load + summary",source:`(def m (model/load-model :${t.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${t.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${t.defaultLayerIndex} size`,source:`(layer/tensor-size m ${t.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${t.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${t.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${t.defaultLayer}" {:bins 32})`}]}class tn{constructor(t){this.prefix=t,this.nextId=1,this.resources=new Map}insert(t,s){const r=`${this.prefix}/${t}/${this.nextId++}`;return this.resources.set(r,{kind:t,value:s}),r}get(t,s=null){const r=this.resources.get(t);if(!r)throw new Error(`unknown resource handle ${t}`);if(s&&r.kind!==s)throw new Error(`resource ${t} has kind ${r.kind}, expected ${s}`);return r.value}}class nn{constructor(){this.handlers=new Map}register(t,s,r){return this.handlers.set(Ve(t,s),r),this}invoke(t,s,r){const a=this.handlers.get(Ve(t,s));if(!a)throw new Error(`unsupported capability ${t}/${s}`);return a(r)}entries(){return[...this.handlers.keys()]}}function Ve(e,t){return`${e}/${t}`}function pt(e){return new an(e).parse()}function P(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):Re(e)?`:${e.name}`:Ge(e)?e.name:Array.isArray(e)?`[${e.map(P).join(" ")}]`:`{${Object.entries(e).map(([t,s])=>`:${t} ${P(s)}`).join(" ")}}`}function we(e,t=0){if(e==null||typeof e!="object"||Re(e)||Ge(e))return P(e);const s=" ".repeat(t+2),r=" ".repeat(t);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${s}${we(i,t+2)}`).join(`
`)}
${r}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${s}:${i} ${we(o,t+2)}`).join(`
`)}
${r}}`}function sn(e){return{type:"keyword",name:e}}function rn(e){return{type:"symbol",name:e}}function Re(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Ge(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}class an{constructor(t){this.text=t,this.index=0}parse(){const t=this.form();return this.ws(),t}form(){this.ws();const t=this.peek();return t==="{"?this.map():t==="["?this.vector():t==='"'?this.string():this.atom()}map(){this.expect("{");const t={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,t;const s=this.form(),r=this.form();t[on(s)]=r}}vector(){this.expect("[");const t=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,t;t.push(this.form())}}string(){this.expect('"');let t="";for(;this.index<this.text.length;){const s=this.text[this.index++];if(s==='"')return t;if(s==="\\"){const r=this.text[this.index++];t+=r==="n"?`
`:r}else t+=s}throw new Error("unterminated string")}atom(){const t=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const s=this.text.slice(t,this.index);if(!s)throw new Error(`expected form at byte ${this.index}`);return s==="nil"?null:s==="true"?!0:s==="false"?!1:/^-?\d+(\.\d+)?$/.test(s)?Number(s):s.startsWith(":")?sn(s.slice(1)):rn(s)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(t){if(this.ws(),this.text[this.index]!==t)throw new Error(`expected ${t} at byte ${this.index}`);this.index++}}function on(e){return Re(e)||Ge(e)?e.name:String(e)}const Le=Object.freeze(Object.fromEntries(O.map(e=>[e.id,`./models/${e.id}/model.json`])));class Oe extends Error{constructor(t){super(`model :${t} assets are not prepared`),this.modelId=t}}class ln{constructor(){this.resources=new tn("browser"),this.registry=dn(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(t){const s=pt(t);this.lastTrace={requestText:t,request:s,responseText:"",packageName:s.package?.name||"unknown",exportName:s.export?.name||"unknown"};const r=this.route(s),a=P(r);return this.lastTrace.responseText=a,a}route(t){try{const s=t.package?.name,r=t.export?.name,a=t.args||[],i=this.invoke(s,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:s,exportName:r,capability:Ve(s,r),argsCount:a.length,view:i?.view?.name||"scalar"},{status:f("ok"),value:i}}catch(s){const r=s instanceof Oe?{status:f("failed"),kind:f("asset-not-prepared"),model:f(s.modelId),recoverable:!0,message:s.message}:{status:f("failed"),kind:f("provider-error"),message:s.message};return s instanceof Oe&&(this.pendingAssetModel=s.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:s.message},r}}invoke(t,s,r){return this.registry.invoke(t,s,r)}loadNamedModel(t){if(!Le[t])throw new Error(`unknown model :${t}`);if(!this.catalog.has(t))throw new Oe(t);if(!this.modelIds.has(t)){const s=this.resources.insert("model",this.catalog.get(t));this.modelIds.set(t,s)}return this.modelIds.get(t)}async prepareModel(t){return this.loadModelNow(t)}isPrepared(t){return this.catalog.has(t)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(t){if(!Le[t])throw new Error(`unknown model :${t}`);if(this.catalog.has(t))return this.catalog.get(t);const s=await Ht(Le[t]);return this.catalog.set(t,s),s}model(t){return this.resources.get(t,"model")}loadedModels(){return[...this.modelIds.entries()].map(([t,s])=>{const r=this.summary(s);return{id:t,handle:s,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(t){const s=this.model(t),r=s.layers.map(K);return{view:f("model-summary"),model:s.name,handle:t,layers:r.length,parameters:H(r.map(a=>a.params)),trainableParameters:H(r.map(a=>a.trainableParams)),bytes:H(r.map(a=>a.bytes)),inputs:G(s.inputs?.[0]?.shape),outputs:G(s.outputs?.[0]?.shape),graph:rt(s),layerTable:r}}graph(t){return{view:f("graph"),graph:rt(this.model(t))}}layerCount(t){const s=this.model(t);return{view:f("numeric-aggregate"),label:"layer count",value:s.layers.length,unit:f("layers"),model:s.name,handle:t}}layersByKind(t,s){const r=this.model(t).layers.map(K).filter(a=>a.kind===s);return{view:f("layers-by-kind"),kind:f(s),count:r.length,layers:r}}topLayers(t,s){const r=Number(s.limit||5),i=Ue(s.by||f("params"))==="bytes"?"bytes":"params",o=this.model(t).layers.map(K).sort((c,d)=>d[i]-c[i]).slice(0,r);return{view:f("top-layers"),by:f(i),layers:o}}inspectLayer(t,s){const r=this.layerByName(t,s);return{view:f("layer-inspection"),layer:K(r),config:mn(r.getConfig()),weights:r.weights.map(ft)}}layerTensorSize(t,s){const{layer:r,index:a}=this.layerByRef(t,s),i=K(r,a);return{view:f("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:f("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(t,s){const r=this.layerByName(t,s);return{view:f("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>cn(r.weights[i],a))}}weightHistogram(t,s,r){const a=this.layerByName(t,s),i=Number(r.bins||24),o=a.getWeights().map((c,d)=>({name:a.weights[d]?.originalName||`weight_${d}`,bins:un(Array.from(c.dataSync()),i)}));return{view:f("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(t,s){const r=this.model(t).layers.find(a=>a.name===s);if(!r)throw new Error(`unknown layer ${s}`);return r}layerByRef(t,s){const r=this.model(t);if(typeof s=="number"){const o=Math.trunc(s)-1,c=r.layers[o];if(!c)throw new Error(`unknown layer index ${s}`);return{layer:c,index:o}}const a=String(s),i=r.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function dn(e){return new nn().register("demo.tfjs/model","load-model",([t])=>e.loadNamedModel(Ue(t))).register("demo.tfjs/model","summary",([t])=>e.summary(t)).register("demo.tfjs/model","layer-count",([t])=>e.layerCount(t)).register("demo.tfjs/model","graph",([t])=>e.graph(t)).register("demo.tfjs/layers","by-kind",([t,s])=>e.layersByKind(t,Ue(s))).register("demo.tfjs/layers","top",([t,s={}])=>e.topLayers(t,s)).register("demo.tfjs/layer","inspect",([t,s])=>e.inspectLayer(t,s)).register("demo.tfjs/layer","tensor-size",([t,s])=>e.layerTensorSize(t,s)).register("demo.tfjs/weights","stats",([t,s])=>e.weightStats(t,s)).register("demo.tfjs/weights","histogram",([t,s,r={}])=>e.weightHistogram(t,s,r))}function K(e,t=null){const s=e.weights.map(ft);return{id:e.name,index:t??hn(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:G(e.inputShape),output:G(e.outputShape),params:H(s.map(r=>r.params)),trainableParams:H(s.filter(r=>r.trainable).map(r=>r.params)),bytes:H(s.map(r=>r.bytes))}}function rt(e){const t=e.layers.map((s,r)=>({...K(s,r),index:r}));return{nodes:t,edges:t.slice(1).map((s,r)=>({id:`${t[r].id}->${s.id}`,source:t[r].id,target:s.id}))}}function ft(e){const t=e.shape.reduce((s,r)=>s*r,1);return{name:e.originalName,shape:G(e.shape),params:t,bytes:t*4,trainable:!!e.trainable}}function cn(e,t){const s=Array.from(t.dataSync()),r=s.length,a=Math.min(...s),i=Math.max(...s),o=s.reduce((u,m)=>u+m,0)/r,c=s.reduce((u,m)=>u+(m-o)**2,0)/r,d=s.filter(u=>u===0).length;return{name:e?.originalName||"weight",shape:G(t.shape),params:r,min:I(a),max:I(i),mean:I(o),stddev:I(Math.sqrt(c)),sparsity:I(d/r)}}function un(e,t){const s=Math.min(...e),r=Math.max(...e),a=r===s?1:(r-s)/t,i=Array.from({length:t},(o,c)=>({start:I(s+c*a),end:I(s+(c+1)*a),count:0}));for(const o of e){const c=Math.min(t-1,Math.max(0,Math.floor((o-s)/a)));i[c].count+=1}return i}function mn(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(s=>e[s]!==void 0).map(s=>[s,e[s]]))}function Ue(e){return Re(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function f(e){return{type:"keyword",name:e}}function G(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(at).join(" x "):e.map(at).join(" x "):"?"}function at(e){return e==null?"*":String(e)}function H(e){return e.reduce((t,s)=>t+s,0)}function I(e){return String(Math.round(e*1e5)/1e5)}function hn(e){return Number(e._index??0)}const yt=`{:packages
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
                         :targets {:ras.wasm {:availability :available}}}}}}]}`;function ae(e){return e==null?"nil":$e(e)?`:${e.name}`:Se(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(ae).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([t,s])=>`:${t} ${ae(s)}`).join(" ")}}`:String(e)}function ze(e,t=0){if(e==null||typeof e!="object"||$e(e)||Se(e))return ae(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(t+2),o=" ".repeat(t);return`[
${e.map(c=>`${i}${ze(c,t+2)}`).join(`
`)}
${o}]`}const s=Object.entries(e);if(s.length===0)return"{}";const r=" ".repeat(t+2),a=" ".repeat(t);return`{
${s.map(([i,o])=>`${r}:${i} ${ze(o,t+2)}`).join(`
`)}
${a}}`}function pn(e,t=""){return $e(e)||Se(e)?e.name:typeof e=="string"?e:e==null?t:String(e)}function $e(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function Se(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function fn(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!$e(e)&&!Se(e)?Object.keys(e).length:0}function Pe(e){if(!e||!e.includes(":traces"))return null;try{return pt(e).traces||null}catch{return null}}function Qe(e){const t=Array.isArray(e?.traces)?e.traces:[],s=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:pn(e?.scope,"waiting"),traces:t.length,requests:s.length,empty:t.length===0&&s.length===0}}function yn(e){const t=[];return We(e,[],t),t}function it(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:ae(e)}function xn(e){return ze(e)}function ke(e){return e==null?null:Array.isArray(e)?e.map(ke):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([t,s])=>[`:${t}`,ke(s)])):e}function We(e,t,s){const r=s.length,a={id:r,path:t,label:jn(t),kind:gn(e),value:fn(e)?null:ae(e),children:[]};return s.push(a),Array.isArray(e)?e.forEach((i,o)=>{const c=We(i,[...t,o],s);a.children.push(c)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const c=We(o,[...t,i],s);a.children.push(c)}),r}function gn(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function jn(e){return e.length?e.map(t=>typeof t=="number"?`[${t}]`:`:${t}`).join(" "):"root"}const y=e=>({type:"keyword",name:e}),Ke=e=>({type:"symbol",name:e});function ot(e){const t=wn(e),s=kn(e),r=vn(e);return{source:bn(e),value:t,providerTrace:s,traceSection:r,runtimeReport:`{:status :ok :traces ${He(r)}}`,loadedModel:{id:e.id,handle:t.handle,name:t.model,layers:t.layers,parameters:t.parameters,trainableParameters:t.trainableParameters,bytes:t.bytes,inputs:t.inputs,outputs:t.outputs}}}function bn(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function wn(e){const t=xt(e),s=t.reduce((a,i)=>a+i.params,0),r=t.reduce((a,i)=>a+i.bytes,0);return{view:y("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:t.length,parameters:s,trainableParameters:s,bytes:r,inputs:Nn(e),outputs:Rn(e),graph:{nodes:t,edges:t.slice(1).map((a,i)=>$n(t[i].id,a.id))},layerTable:t}}function kn(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${xt(e).length}}}`}}function vn(e){return{"rasa/phase":y("traces"),scope:y("admitted-host-calls"),traces:[{id:0,subject:{kind:y("source")},events:[W(0,"source-form",{symbol:Ke("model/load-model"),span:{start:7,end:23}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:y("demo.tfjs/model/load-model")}),W(2,"admission",{"call-id":0,effects:[y("model/read")],signature:{args:[y("id")],returns:y("string")}})]},{id:1,subject:{kind:y("source")},events:[W(0,"source-form",{symbol:Ke("model/summary"),span:{start:31,end:44}}),W(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:y("demo.tfjs/model/summary")}),W(2,"admission",{"call-id":1,effects:[y("model/read")],signature:{args:[y("model")],returns:y("map")}})]}],"host-requests":[lt(0,"demo.tfjs/model","load-model","model/load-model",e.id),lt(1,"demo.tfjs/model","summary","model/summary")]}}function xt(e){switch(e.id){case"tiny-mlp":return[j("feature_input","input","* x 16",0,0),j("hidden_dense","dense","* x 32",544,2176),j("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[j("signal_input","input","* x 32",0,0),j("encoder_dense","dense","* x 12",396,1584),j("bottleneck","dense","* x 4",52,208),j("decoder_dense","dense","* x 12",60,240),j("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[j("token_input","input","* x 8",0,0),j("token_embedding","embedding","* x 8 x 16",1600,6400),j("pool_tokens","global-average-pooling1d","* x 16",0,0),j("projection_dense","dense","* x 8",136,544)];default:return[j("input_image","input","* x 28 x 28 x 1",0,0),j("stem_conv","conv2d","* x 26 x 26 x 8",80,320),j("flatten","flatten","* x 5408",0,0),j("classifier_dense","dense","* x 10",5306,21224)]}}function Nn(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function Rn(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function j(e,t,s,r,a){return{id:e,index:0,name:e,kind:t,activation:"linear",input:"?",output:s,params:r,trainableParams:r,bytes:a}}function $n(e,t){return{id:`${e}->${t}`,source:e,target:t}}function W(e,t,s){return{id:e,kind:y(t),subject:null,"source-id":"browser://repl",span:s.span||null,data:s,diagnostics:[],annotations:[],evidence:[]}}function lt(e,t,s,r,a=null){return{"rasa/phase":y("host-request"),scope:y("admitted-host-call"),"call-id":e,identity:{package:t,export:s,capability:y(`${t}/${s}`)},source:{symbol:Ke(r),model:a?y(a):null},admission:{"call-id":e,identity:{package:t,export:s,capability:y(`${t}/${s}`)},effects:[y("model/read")]},"trace-id":e}}function He(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(He).join(" ")}]`:`{${Object.entries(e).filter(([,t])=>t!==null).map(([t,s])=>`:${t} ${He(s)}`).join(" ")}}`}const Sn=`import "@tensorflow/tfjs-backend-cpu";
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
`,Mn="./engine.wasm",gt=De.all|Jt,jt=e=>e<2;function Tn(){const e=En()==="trace",t=l.useRef(null),s=l.useRef(null),r=l.useRef(0),a=l.useRef(null),i=l.useRef(!1),[o,c]=l.useState(be),[d,u]=l.useState(()=>e?ot(J(be)).source:Yt),[m,g]=l.useState("loading"),[b,N]=l.useState(!1),[R,le]=l.useState(0),[E,B]=l.useState(null),[X,Z]=l.useState(null),[Me,de]=l.useState(""),[Y,ce]=l.useState(null),[ee,ue]=l.useState(null),[Te,Ee]=l.useState([]),[Ae,me]=l.useState([]),[Nt,_e]=l.useState(null),[Rt,Ye]=l.useState({}),[q,Ce]=l.useState(null),[he,et]=l.useState(null),[pe,tt]=l.useState(null),[$t,St]=l.useState("boundary"),[Mt,fe]=l.useState([]),p=l.useMemo(()=>e?ot(J(o)):null,[e,o]);l.useEffect(()=>{let h=!0;async function x(){try{if(e&&p){if(!h)return;const se=await dt().catch(()=>({}));if(!h)return;de(p.runtimeReport),ce(p.providerTrace),ue(p.traceSection),Ee([p.loadedModel]),me([p.loadedModel.id]),Ye(se),Ce(p.value),et(p.loadedModel.handle),tt(null),B({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),Z({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe([{id:"setup",kind:"setup",source:Ie,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:p.source,result:qe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]),g("ready");return}const F=S(),w=new ln,k=S(),v=await dt(),te=$(k),D=S(),_=await Je.load(An(),{hostCall:se=>w.call(se)}),V=$(D),C=_.createSession(),ye=S();_.loadPackage(C,yt);const ne=_.evaluateSession(C,Ie,gt),xe=$(ye);if(!h)return;t.current=w,s.current=_,r.current=C,de(ne),ce(w.lastTrace),ue(Pe(ne)),Ee(w.loadedModels()),me(w.preparedModelIds()),Ye(v),B({manifestMs:te,engineMs:V,setupMs:xe,totalMs:$(F)}),fe([{id:"setup",kind:"setup",source:Ie,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),g("ready")}catch(F){h&&g(`failed: ${F.message}`)}}return x(),()=>{h=!1,s.current&&r.current&&s.current.freeSession(r.current)}},[e,p]);const Tt=l.useCallback(async()=>{if(e&&p){const M=a.current?.state.doc.toString()||d,re=R+1;le(re),Ce(p.value),ce(p.providerTrace),ue(p.traceSection),de(p.runtimeReport),Z({run:re,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),fe(U=>[...U,{id:`run-${U.length}`,kind:"run",source:M,result:qe(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]);return}if(!s.current||!r.current||!t.current||i.current)return;i.current=!0,N(!0),_e(null);const h=a.current?.state.doc.toString()||d,x=t.current,F=S();let w=Me,k=null,v=null,te=null,D=null,_=0,V=0,C=0,ye=!1;Z({status:"running",assetState:"checking",totalMs:0});try{const M=S();w=ut(s.current,r.current,x,h),te=Pe(w),V=$(M);const re=fs(x);if(re){const U=re;D=U,_e(U),Z({status:"running",assetState:"fetching",assetModel:D,firstEvalMs:V,totalMs:$(F)});const It=S();await x.prepareModel(U),_=$(It),me(x.preparedModelIds()),x.pendingAssetModel=null;const Lt=S();w=ut(s.current,r.current,x,h),te=Pe(w),C=$(Lt)}else C=V;k=x.lastValue,v=x.lastTrace}catch(M){ye=!0,k=ps("asset-load-error",M.message),v={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,N(!1)}const ne=$(F),xe=R+1,se={run:xe,status:v?.status||"ok",capability:T(v),view:v?.view||ve(k),assetState:ye?"failed":D?"fetched":"cached",assetModel:D,assetLoadMs:_,firstEvalMs:V,finalEvalMs:C,totalMs:ne,cacheCount:x.preparedModelIds().length};de(w),Ce(k),ce(v),ue(te),Ee(x.loadedModels()),me(x.preparedModelIds()),_e(null),Z(se),k?.handle&&et(k.handle),le(xe),fe(M=>[...M,{id:`run-${M.length}`,kind:"run",source:h,result:qe(k),capability:T(v),view:v?.view||ve(k),status:v?.status||"ok",durationMs:ne,value:k}])},[e,p,R,Me,d,ee]),A=l.useMemo(()=>rs(q),[q]),Et=l.useMemo(()=>he?Te.find(h=>h.handle===he):null,[he,Te]),At=l.useMemo(()=>A.nodes.map(h=>h.id).join("|")||"empty-graph",[A.nodes]),_t=l.useMemo(()=>A.nodes.map((h,x)=>({id:h.id,position:{x:x*220,y:x%2===0?0:28},data:{label:n.jsxs("div",{className:"node-label",children:[n.jsx("strong",{children:h.name}),n.jsx("span",{children:h.kind}),n.jsxs("em",{children:[h.params," params"]})]}),layer:h},type:"default",className:pe===h.id?"selected-node":""})),[A.nodes,pe]),Ct=l.useMemo(()=>A.edges.map(h=>({...h,animated:!0})),[A.edges]);return n.jsxs("main",{className:"app-shell",style:gs(),children:[n.jsxs("header",{className:"hero",children:[n.jsxs("div",{className:"brand-lockup",children:[n.jsx("img",{src:st.logo,alt:"Rasa"}),n.jsxs("div",{children:[n.jsx("span",{children:"Rasa Browser Demo"}),n.jsx("h1",{children:"Model architecture explorer"}),n.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),n.jsxs("div",{className:"hero-status",children:[n.jsx("img",{src:st.mark,alt:"","aria-hidden":"true"}),n.jsx("span",{className:m==="ready"?"ok":"warn",children:m}),n.jsx("span",{children:"tfjs assets on first run"}),n.jsx("span",{children:"static bundle"})]})]}),n.jsxs("section",{className:"boundary-theater",children:[n.jsx(_n,{fixture:e,providerTrace:Y,traceSection:ee,runMetrics:X}),n.jsxs("aside",{className:"theater-left",children:[n.jsxs("div",{className:"studio-head",children:[n.jsx("span",{className:"label",children:"Model & extension"}),n.jsx("strong",{children:"What Rasa is allowed to touch"})]}),n.jsx(Vn,{models:Te,activeHandle:he,preparedModelIds:Ae}),n.jsx(Hn,{modelManifest:Rt[o],modelId:o,compact:!0})]}),n.jsxs("section",{className:"theater-stage",children:[n.jsx(Cn,{value:q,graph:A,runCount:R,selectedModelId:o,preparedModelIds:Ae,running:b,fixture:e}),n.jsxs("div",{className:"graph-wrap graph-theater",children:[n.jsx(In,{traceSection:ee,providerTrace:Y,value:q,selectedModelId:o,activeModelId:Et?.id||null,running:b}),n.jsxs(Pt,{nodes:_t,edges:Ct,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(h,x)=>tt(x.id),children:[n.jsx(Bt,{color:"#29313d",gap:18}),n.jsx(qt,{showInteractive:!1})]},At)]}),n.jsx(On,{traceSection:ee,providerTrace:Y,runMetrics:X,bootMetrics:E})]}),n.jsxs("aside",{className:"theater-inspector",children:[n.jsx(Ln,{value:q,trace:Y,selectedLayer:pe}),n.jsx(Pn,{activeTab:$t,setActiveTab:St,value:q,selectedLayer:pe,trace:Y,traceSection:ee,runtimeReport:Me,fixture:e})]}),n.jsxs("section",{className:"theater-console","aria-label":"Rasa command console",children:[n.jsx(qn,{entries:Mt}),n.jsxs("div",{className:"console-command",children:[n.jsx(Dn,{selectedModelId:o,setSelectedModelId:c,setSource:u,editorRef:a,prepared:Ae.includes(o),preparing:Nt===o}),n.jsx(Bn,{source:d,editorRef:a,run:Tt,disabled:m!=="ready"||b,running:b})]})]})]})]})}function En(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function An(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||Mn}function _n({fixture:e,providerTrace:t,traceSection:s,runMetrics:r}){const a=Array.isArray(s?.["host-requests"])?s["host-requests"]:[],i=a.length?a[a.length-1]:null,o=Qe(s),c=[{label:e?"Replay form":"Rasa source",title:oe(i)||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:ie(i)||T(t)||"waiting",detail:`${o.requests} admitted request(s)`,tone:"admit"},{label:"Browser host",title:t?.packageName||"TF.js provider",detail:t?.status||"waiting",tone:"host"},{label:"Return",title:r?.view?`:${r.view}`:"Rasa value",detail:r?.totalMs!==void 0?Ne(r.totalMs):"structured data",tone:"return"}];return n.jsx("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:c.map(d=>n.jsxs("article",{className:`runway-step ${d.tone}`,children:[n.jsx("span",{children:d.label}),n.jsx("strong",{children:d.title}),n.jsx("em",{children:d.detail})]},d.label))})}function Cn({value:e,graph:t,runCount:s,selectedModelId:r,preparedModelIds:a,running:i,fixture:o}){const c=J(r),d=o?"fixture layer records":"live layer records";return n.jsxs("header",{className:"stage-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Model graph"}),n.jsx("h2",{children:t.nodes.length?`${t.nodes.length} ${d}`:"No model value yet"}),n.jsxs("p",{children:[c.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),n.jsxs("div",{className:"stage-metrics",children:[n.jsx(L,{label:"Run",value:i?"running":s}),n.jsx(L,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),n.jsx(L,{label:"Assets",value:`${a.length}/${O.length}`})]})]})}function In({traceSection:e,providerTrace:t,value:s,selectedModelId:r,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],c=o.length?o[o.length-1]:null,d=J(r),u=a?J(a):null,m=a&&r!==a,g=i?"Rasa is evaluating the current form.":m?`Editor targets ${d.title}; run it to replace ${u.title}.`:u?`${u.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return n.jsxs("aside",{className:`boundary-spotlight ${m?"pending":""}`,"aria-label":"Current boundary spotlight",children:[n.jsxs("div",{className:"spotlight-flow",children:[n.jsxs("div",{children:[n.jsx("span",{children:"form"}),n.jsx("strong",{children:oe(c)||"waiting for run"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"admitted identity"}),n.jsx("strong",{children:ie(c)||T(t)||"not admitted yet"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"returned value"}),n.jsx("strong",{children:s?.view?.name?`:${s.view.name}`:"none yet"})]})]}),n.jsx("p",{children:g})]})}function Ln({value:e,trace:t,selectedLayer:s}){const[r,a]=l.useState(null),i=e?we(e):"nil";return n.jsxs(n.Fragment,{children:[n.jsxs("article",{className:"value-lens",children:[n.jsx("span",{className:"label",children:"Selected value"}),n.jsx("strong",{children:ve(e)}),n.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),n.jsx(Q,{text:ls(i),mode:"rasa"}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"capability"}),n.jsx("dd",{children:T(t)||"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"selected"}),n.jsx("dd",{children:s||"none"})]})]}),n.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),r&&n.jsx(Xe,{kind:"Rasa value",title:ve(e),description:"The real structured value returned to the browser from the Rasa session.",meta:Ze(i,"rasa"),onClose:()=>a(null),children:n.jsx("div",{className:"modal-code-stack result-only",children:n.jsxs("section",{className:"result-section",children:[n.jsx("span",{className:"modal-section-label",children:"returned value"}),n.jsx(Q,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function On({traceSection:e,providerTrace:t,runMetrics:s,bootMetrics:r}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return n.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[n.jsx(L,{label:"Host request",value:oe(i)||"waiting"}),n.jsx(L,{label:"Canonical identity",value:ie(i)||T(t)||"waiting"}),n.jsx(L,{label:"Status",value:t?.status||s?.status||"waiting"}),n.jsx(L,{label:"Time",value:s?.totalMs!==void 0?Ne(s.totalMs):r?Ne(r.totalMs):"pending"})]})}function Pn({activeTab:e,setActiveTab:t,value:s,selectedLayer:r,trace:a,traceSection:i,runtimeReport:o,fixture:c}){const d=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return n.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[n.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:d.map(u=>n.jsx("button",{className:e===u.id?"active":"",type:"button","aria-pressed":e===u.id,onClick:()=>t(u.id),children:u.label},u.id))}),n.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&n.jsx(zn,{traceSection:i,providerTrace:a,fixture:c}),e==="result"&&n.jsxs(n.Fragment,{children:[n.jsx(Un,{value:s,trace:a,traceSection:i}),n.jsx(Zn,{value:s,selectedLayer:r})]}),e==="data"&&n.jsxs(n.Fragment,{children:[n.jsx(bt,{title:"Returned Rasa value",value:s,defaultOpen:!0}),n.jsxs("details",{className:"runtime-report",children:[n.jsx("summary",{children:"Runtime report"}),n.jsx("pre",{children:o})]})]})]})]})}function Bn({source:e,editorRef:t,run:s,disabled:r,running:a}){const i=l.useRef(null),o=l.useRef(s);return l.useEffect(()=>{o.current=s},[s]),l.useEffect(()=>{const c=new Fe({parent:i.current,state:Ut.create({doc:e,extensions:[zt(),Wt(),ms,us,Kt.of(Xt(()=>o.current())),Fe.lineWrapping]})});return t.current=c,()=>c.destroy()},[]),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Rasa input"}),n.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),n.jsx("span",{children:"Primary+Enter runs"})]}),n.jsx("div",{className:"editor-host",ref:i}),n.jsxs("div",{className:"editor-actions",children:[n.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),n.jsx("button",{className:"run-button",type:"button",onClick:s,disabled:r,children:a?"Running...":"Run"})]})]})}function qn({entries:e}){const t=l.useRef(null),[s,r]=l.useState(null),a=s?is(s):"";return l.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[e.length]),n.jsxs(n.Fragment,{children:[n.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:t,children:e.length?e.map(i=>n.jsx(Fn,{entry:i,onOpenResult:()=>r(i)},i.id)):n.jsxs("article",{className:"transcript-entry",children:[n.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),n.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),s&&n.jsx(Xe,{kind:"Rasa value",title:s.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:Ze(a,"rasa"),onClose:()=>r(null),children:n.jsxs("div",{className:"modal-code-stack",children:[n.jsxs("section",{className:"form-section",children:[n.jsx("span",{className:"modal-section-label",children:"form"}),n.jsx(Q,{text:s.source,mode:"rasa",numbered:!0})]}),n.jsxs("section",{className:"result-section",children:[n.jsx("span",{className:"modal-section-label",children:"result"}),n.jsx(Q,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function Fn({entry:e,onOpenResult:t}){return n.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[n.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&n.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:t,children:[n.jsx("pre",{children:os(e.result)}),n.jsx("span",{children:"Open full value"})]}),n.jsxs("div",{className:"transcript-meta",children:[n.jsx("span",{children:e.capability||"session"}),n.jsx("span",{children:e.view}),n.jsx("span",{children:e.status}),e.durationMs!==void 0&&n.jsx("span",{children:Ne(e.durationMs)})]})]})}function Dn({selectedModelId:e,setSelectedModelId:t,setSource:s,editorRef:r,prepared:a,preparing:i}){const o=en(e).slice(0,5),c=d=>{t(d.target.value)};return n.jsxs("div",{className:"command-shelf",children:[n.jsxs("div",{className:"command-shelf-head",children:[n.jsxs("label",{className:"model-picker",children:[n.jsx("span",{children:"Model"}),n.jsx("select",{value:e,onChange:c,children:O.map(d=>n.jsx("option",{value:d.id,children:d.title},d.id))})]}),n.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),n.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(d=>n.jsxs("article",{className:"command-chip",children:[n.jsxs("div",{children:[n.jsx("strong",{children:d.label}),n.jsx("span",{children:ss(d.source)})]}),n.jsxs("div",{className:"command-actions",children:[n.jsx("button",{type:"button",title:`Insert ${d.label} at the cursor`,onClick:()=>ts(d.source,s,r),children:"Insert"}),n.jsx("button",{type:"button",title:`Append ${d.label} below the current editor text`,onClick:()=>ns(d.source,s,r),children:"Append"})]})]},d.label))})]})}function Vn({models:e,activeHandle:t,preparedModelIds:s}){const r=t?e.find(a=>a.handle===t):null;return n.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?n.jsxs("article",{className:"active-model",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Active model"}),n.jsx("strong",{children:r.name})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"id"}),n.jsx("dd",{children:r.id})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"handle"}),n.jsx("dd",{children:r.handle})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"layers"}),n.jsx("dd",{children:r.layers})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"params"}),n.jsx("dd",{children:r.parameters})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"size"}),n.jsx("dd",{children:xs(r.bytes||0)})]})]})]},r.handle||r.id):n.jsxs("article",{className:"active-model",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Active model"}),n.jsx("strong",{children:"none yet"})]}),n.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),n.jsxs("div",{className:"catalog-note",children:[O.length," static catalog models are available. ",s.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Un({value:e,trace:t,traceSection:s}){const r=ys(e),a=Qe(s);return n.jsxs("section",{className:"projection-card",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Projection"}),n.jsx("strong",{children:r.renderer}),n.jsx("p",{children:r.reason})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"Rasa view"}),n.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Capability"}),n.jsx("dd",{children:t?.packageName&&t?.exportName?`${t.packageName}/${t.exportName}`:"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Core traces"}),n.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Status"}),n.jsx("dd",{children:t?.status||"waiting"})]})]})]})}function zn({traceSection:e,providerTrace:t,fixture:s=!1}){const r=Qe(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return n.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[n.jsxs("div",{className:"boundary-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Rasa boundary"}),n.jsx("strong",{children:r.empty?"Waiting for admitted host evidence":s?"Visual fixture replay":`Live Wasm ${r.scope} evidence`}),s&&n.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),n.jsxs("span",{children:[r.traces," traces"]})]}),n.jsxs("div",{className:"boundary-path",children:[n.jsx(Be,{title:"Rasa form",value:oe(a[0])||"source expression"}),n.jsx(Be,{title:"Canonical identity",value:ie(a[0])||T(t)||"package/export"}),n.jsx(Be,{title:"Browser provider",value:t?.status?t.status:"waiting"})]}),n.jsxs("details",{className:"trace-section",open:!0,children:[n.jsx("summary",{children:"Admitted host calls"}),n.jsx("div",{className:"trace-list",children:a.length?a.map(i=>n.jsx(Wn,{request:i},i["call-id"])):n.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),n.jsx(Kn,{trace:t}),n.jsx(bt,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function Be({title:e,value:t}){return n.jsxs("article",{children:[n.jsx("span",{children:e}),n.jsx("strong",{children:t})]})}function Wn({request:e}){return n.jsxs("article",{className:"host-request-card",children:[n.jsxs("div",{children:[n.jsxs("span",{children:["call ",e["call-id"]??"?"]}),n.jsx("strong",{children:ie(e)})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"source"}),n.jsx("dd",{children:oe(e)||"n/a"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"capability"}),n.jsx("dd",{children:it(e.identity?.capability)})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"effects"}),n.jsx("dd",{children:(e.admission?.effects||[]).map(it).join(" ")||"none"})]})]})]})}function Kn({trace:e}){return n.jsxs("article",{className:"provider-bridge",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Browser bridge"}),n.jsx("strong",{children:T(e)||"waiting"})]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"status"}),n.jsx("dd",{children:e?.status||"waiting"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"args"}),n.jsx("dd",{children:e?.argsCount??"n/a"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"view"}),n.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),n.jsxs("details",{className:"bridge-details",children:[n.jsx("summary",{children:"Request / response data"}),n.jsx("pre",{children:e?.requestText||"no provider request yet"}),n.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function bt({title:e,value:t,defaultOpen:s=!1}){const r=l.useMemo(()=>yn(t),[t]),a=l.useMemo(()=>ke(t),[t]),i=r.slice(0,12);return n.jsxs("details",{className:"data-projection",open:s,children:[n.jsxs("summary",{children:[n.jsx("span",{children:e}),n.jsxs("strong",{children:[r.length," node(s)"]})]}),n.jsx("div",{className:"projection-viewer",children:n.jsx(mt,{data:a||{},shouldExpandNode:jt,clickToExpandNode:!0,compactTopLevel:!0,style:{...ht,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),n.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>n.jsxs("article",{children:[n.jsx("span",{children:o.label}),n.jsx("strong",{children:o.value||o.kind}),n.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),r.length>i.length&&n.jsxs("p",{className:"projection-more",children:[r.length-i.length," more node(s) folded in compact Rasa data below."]}),n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Compact Rasa data"}),n.jsx("pre",{className:"data-block",children:xn(t)})]})]})}function Hn({modelManifest:e,modelId:t,compact:s=!1}){const[r,a]=l.useState(null),i=Jn(e,t);return n.jsxs("section",{className:`extension-panel ${s?"compact":""}`,children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:"Open the extension"}),n.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),n.jsx("div",{className:"extension-assets",children:i.map(o=>n.jsx(Gn,{asset:o,onOpen:()=>a(o)},o.id))}),r&&n.jsx(Qn,{asset:r,onClose:()=>a(null)})]})}function Jn(e,t){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:yt,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:Sn,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${t?` :${t}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function Gn({asset:e,onOpen:t}){return n.jsxs("button",{className:"extension-asset",type:"button",onClick:t,children:[n.jsx("span",{children:e.kind}),n.jsx("strong",{children:e.title}),n.jsx("em",{children:e.description})]})}function Qn({asset:e,onClose:t}){return n.jsx(Xe,{kind:e.kind,title:e.title,description:e.description,meta:Ze(e.text,e.mode),onClose:t,children:n.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"projection-viewer large",children:n.jsx(mt,{data:ke(e.value),shouldExpandNode:jt,clickToExpandNode:!0,compactTopLevel:!0,style:{...ht,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Raw manifest JSON"}),n.jsx(Q,{text:e.text,mode:"json",numbered:!0})]})]}):n.jsx(Q,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Xe({kind:e,title:t,description:s,meta:r=[],onClose:a,children:i}){const o=l.useId(),c=l.useId(),d=l.useRef(null),u=l.useRef(null);return l.useEffect(()=>{const m=document.activeElement;return u.current?.focus(),()=>{m?.isConnected&&typeof m.focus=="function"&&m.focus()}},[]),l.useEffect(()=>{const m=g=>{if(g.key==="Escape"){g.preventDefault(),a();return}if(g.key!=="Tab"||!d.current)return;const b=Xn(d.current);if(!b.length){g.preventDefault();return}const N=b[0],R=b[b.length-1];d.current.contains(document.activeElement)?g.shiftKey&&document.activeElement===N?(g.preventDefault(),R.focus()):!g.shiftKey&&document.activeElement===R&&(g.preventDefault(),N.focus()):(g.preventDefault(),N.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),n.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":c,children:[n.jsx("div",{className:"asset-modal-backdrop",onClick:a}),n.jsxs("article",{className:"asset-modal-panel",ref:d,tabIndex:-1,children:[n.jsxs("header",{children:[n.jsxs("div",{children:[n.jsx("span",{className:"label",children:e}),n.jsx("h2",{id:o,children:t}),n.jsx("p",{id:c,children:s}),r.length>0&&n.jsx("div",{className:"modal-meta",children:r.map(m=>n.jsxs("span",{children:[n.jsx("strong",{children:m.value}),m.label]},m.label))})]}),n.jsx("button",{ref:u,type:"button",onClick:a,children:"Close"})]}),i]})]})}function Xn(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t=>t.disabled||t.hidden||t.getAttribute("aria-hidden")==="true"||t.closest("[inert]")?!1:t.getClientRects().length>0)}function Q({text:e,mode:t="rasa",numbered:s=!1}){const r=String(e||"").split(`
`);return n.jsx("pre",{className:`line-code ${s?"numbered":""}`,children:r.map((a,i)=>n.jsxs("span",{className:"code-line",children:[s&&n.jsx("span",{className:"line-number",children:i+1}),n.jsx("code",{children:ds(a||" ",t)})]},i))})}function Zn({value:e,selectedLayer:t}){if(!e)return n.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return n.jsx("pre",{className:"data-block",children:P(e)});if(e.view?.name==="weight-histogram")return n.jsx(Yn,{value:e});if(e.view?.name==="weight-stats")return n.jsx(es,{value:e});const s=t?as(e,t):null;return n.jsxs("div",{className:"inspection-stack",children:[s&&n.jsx(je,{layer:s}),Array.isArray(e.layers)&&e.layers.map(r=>n.jsx(je,{layer:r},r.id)),Array.isArray(e.layerTable)&&e.layerTable.map(r=>n.jsx(je,{layer:r,compact:!0},r.id)),e.layer&&n.jsx(je,{layer:e.layer}),n.jsx(wt,{value:e})]})}function Yn({value:e}){const t=e.tensors?.[0],s=Math.max(...(t?.bins||[]).map(r=>r.count),1);return n.jsxs("div",{className:"inspection-stack",children:[n.jsx("h2",{children:e.layer}),n.jsx("div",{className:"histogram",children:(t?.bins||[]).map((r,a)=>n.jsx("div",{style:{height:`${8+r.count/s*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),n.jsx(wt,{value:e})]})}function es({value:e}){return n.jsx("div",{className:"inspection-stack",children:e.tensors.map(t=>n.jsxs("article",{className:"layer-card",children:[n.jsx("h2",{children:t.name}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"shape"}),n.jsx("dd",{children:t.shape})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"mean"}),n.jsx("dd",{children:t.mean})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"stddev"}),n.jsx("dd",{children:t.stddev})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"range"}),n.jsxs("dd",{children:[t.min,"..",t.max]})]})]})]},t.name))})}function wt({value:e}){return n.jsxs("details",{className:"data-details",children:[n.jsx("summary",{children:"Returned Rasa data"}),n.jsx("pre",{className:"data-block",children:P(e)})]})}function je({layer:e,compact:t=!1}){return n.jsxs("article",{className:"layer-card",children:[n.jsx("h2",{children:e.name}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"kind"}),n.jsx("dd",{children:e.kind})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"output"}),n.jsx("dd",{children:e.output})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"params"}),n.jsx("dd",{children:e.params})]}),!t&&n.jsxs("div",{children:[n.jsx("dt",{children:"bytes"}),n.jsx("dd",{children:e.bytes})]})]})]})}function L({label:e,value:t}){return n.jsxs("article",{className:"metric",children:[n.jsx("span",{children:e}),n.jsx("strong",{children:t})]})}function ts(e,t,s){const r=s.current;if(!r){t(i=>kt(i,e));return}const a=r.state.selection.main;r.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function ns(e,t,s){const r=s.current;if(!r){t(c=>kt(c,e));return}const a=r.state.doc.toString(),i=vt(a,e),o=r.state.doc.length;r.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),t(r.state.doc.toString()),r.focus()}function kt(e,t){return`${e||""}${vt(e||"",t)}`}function vt(e,t){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${t}`:t}function ss(e){const t=String(e||"").split(`
`).filter(Boolean);return t.length>1?`${t[0]} ...`:t[0]||"Rasa form"}async function dt(){const e=await Promise.all(O.map(async t=>[t.id,await fetch(`./models/${t.id}/model.json`).then(s=>s.json())]));return Object.fromEntries(e)}function rs(e){const t=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return t?.nodes?.length?t:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((s,r)=>({id:`${e.layerTable[r].id}->${s.id}`,source:e.layerTable[r].id,target:s.id}))}:{nodes:[],edges:[]}}function as(e,t){return e?.layerTable?.find(s=>s.id===t)||e?.layers?.find(s=>s.id===t)}function ve(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function is(e){return e.value!==void 0?`=>
${we(e.value)}`:String(e.result||"=> nil")}function os(e){const t=String(e||""),s=t.split(`
`).map(r=>r.trimEnd()).filter(Boolean);return s.length<=2?t:`${s.slice(0,2).join(`
`)}
...`}function ls(e){const t=String(e||"nil").split(`
`);return t.length<=10?t.join(`
`):`${t.slice(0,10).join(`
`)}
  ...`}function ds(e,t){const s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,r=[];let a=0,i;for(;(i=s.exec(e))!==null;){i.index>a&&r.push(e.slice(a,i.index));const o=i[0];r.push(n.jsx("span",{className:`tok ${cs(i,t)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&r.push(e.slice(a)),r.length?r:e}function cs(e,t){return e[1]?"string":e[2]?"comment":e[3]?t==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function Ze(e,t="code"){const s=String(e||""),r=t==="json"?"folded JSON":t==="rasa"?"Rasa data":"source";return[{label:"lines",value:s?s.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(s).length},{label:"viewer",value:r}]}const us=Ft.fromClass(class{constructor(e){this.decorations=ct(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=ct(e.view))}},{decorations:e=>e.decorations}),ms=Fe.theme({"&":{backgroundColor:"#0e1319",color:"#e8edf2",caretColor:"#e8edf2"},"&.cm-focused":{outline:"1px solid rgba(131, 215, 170, 0.35)",outlineOffset:"-1px"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground":{backgroundColor:"rgba(120, 167, 255, 0.26)"},".cm-content ::selection":{backgroundColor:"rgba(120, 167, 255, 0.26)",color:"#e8edf2"},".cm-gutters, .cm-gutter, .cm-activeLineGutter":{backgroundColor:"#0e1319",color:"#687487"}},{dark:!0});function ct(e){const t=new Dt,s=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)|(\b[\w.+*?!<>=/-]+\/[\w.+*?!<>=/-]+\b)/g;for(const{from:r,to:a}of e.visibleRanges){const i=e.state.doc.sliceString(r,a);s.lastIndex=0;let o;for(;(o=s.exec(i))!==null;){const c=r+o.index,d=c+o[0].length;t.add(c,d,Vt.mark({class:hs(o)}))}}return t.finish()}function hs(e){return e[1]?"cm-rasa-string":e[2]?"cm-rasa-comment":e[3]?"cm-rasa-keyword":e[4]?"cm-rasa-number":e[5]?"cm-rasa-punct":e[6]?"cm-rasa-literal":e[7]?"cm-rasa-qualified":"cm-rasa-text"}function qe(e){return e?`=> ${P(e)}`:"=> nil"}function ut(e,t,s,r){return s.lastValue=null,s.lastTrace=null,s.pendingAssetModel=null,e.evaluateSession(t,r,gt)}function ps(e,t){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:t}}function fs(e){const t=e.lastValue;return t?.status?.name==="failed"&&t?.kind?.name==="asset-not-prepared"&&t?.recoverable===!0&&t?.model?.name?t.model.name:e.pendingAssetModel}function T(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function ie(e){const t=e?.identity||e?.admission?.identity;return!t?.package||!t?.export?null:`${t.package}/${t.export}`}function oe(e){return e?.source?.symbol?.name||null}function ys(e){const t=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[t]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function xs(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function Ne(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function S(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function $(e){return Math.max(0,S()-e)}function gs(){return Object.fromEntries(Object.entries(Zt).map(([e,t])=>[`--${e}`,t]))}Ot.createRoot(document.getElementById("root")).render(n.jsx(Tn,{}));
