import{b as Dn,j as t,r as l,J as fn,d as yn}from"./react.js";import{i as Vn,B as zn,C as Un}from"./graph.js";import{S as gn,V as Kn,E as Oe,R as Hn,D as Wn,a as Jn,l as Gn,d as Yn,k as Zn}from"./editor.js";import{l as Qn}from"./tfjs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Xn=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),et=256,z="Rasa browser execution now expects the Wasm component runtime; the JavaScript component adapter is not implemented yet.";class Ue{static async load(n){const r=await fetch(n);if(!r.ok)throw new Error(`failed to load Rasa engine: ${r.status}`);return await r.arrayBuffer(),new Ue(n)}constructor(n=null){this.url=n}imports(){return[]}evaluate(){throw new Error(z)}inspect(){throw new Error(z)}syntaxTokens(){throw new Error(z)}createSession(){throw new Error(z)}freeSession(){}loadPackage(){throw new Error(z)}evaluateSession(){throw new Error(z)}}gn.define();gn.define();function nt(e){return[{key:"Mod-Enter",run:()=>(e(),!0)}]}const rn=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),xn="rasa.theme",tt=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});tt.dark;function rt(e=document.documentElement){const n=localStorage.getItem(xn),r=n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return bn(r,e),r}function bn(e,n=document.documentElement){const r=e==="light"?"light":"dark";return n.dataset.rasaTheme=r,n.setAttribute("data-theme",r),localStorage.setItem(xn,r),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:r}})),r}function st(e=document.documentElement){return bn(e.dataset.rasaTheme==="light"?"dark":"light",e)}function sn(e){return e==="light"?"Dark":"Light"}const I=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function W(e){return I.find(n=>n.id===e)||I[0]}const fe="tiny-cnn",Ee=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,at=`(def m (model/load-model :${fe}))
(model/summary m)`;function it(e=fe){const n=W(e);return[{label:"Load + summary",source:`(def m (model/load-model :${n.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${n.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${n.defaultLayerIndex} size`,source:`(layer/tensor-size m ${n.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${n.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${n.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${n.defaultLayer}" {:bins 32})`}]}class ot{constructor(n){this.prefix=n,this.nextId=1,this.resources=new Map}insert(n,r){const s=`${this.prefix}/${n}/${this.nextId++}`;return this.resources.set(s,{kind:n,value:r}),s}get(n,r=null){const s=this.resources.get(n);if(!s)throw new Error(`unknown resource handle ${n}`);if(r&&s.kind!==r)throw new Error(`resource ${n} has kind ${s.kind}, expected ${r}`);return s.value}}class lt{constructor(){this.handlers=new Map}register(n,r,s){return this.handlers.set(Be(n,r),s),this}invoke(n,r,s){const a=this.handlers.get(Be(n,r));if(!a)throw new Error(`unsupported capability ${n}/${r}`);return a(s)}entries(){return[...this.handlers.keys()]}}function Be(e,n){return`${e}/${n}`}function Ke(e){return new ut(e).parse()}function O(e){return e==null?"nil":typeof e=="boolean"?String(e):typeof e=="number"?Number.isInteger(e)?String(e):String(Math.round(e*1e3)/1e3):typeof e=="string"?JSON.stringify(e):je(e)?`:${e.name}`:He(e)?e.name:Array.isArray(e)?`[${e.map(O).join(" ")}]`:`{${Object.entries(e).map(([n,r])=>`:${n} ${O(r)}`).join(" ")}}`}function ye(e,n=0){if(e==null||typeof e!="object"||je(e)||He(e))return O(e);const r=" ".repeat(n+2),s=" ".repeat(n);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${ye(i,n+2)}`).join(`
`)}
${s}]`;const a=Object.entries(e);return a.length===0?"{}":`{
${a.map(([i,o])=>`${r}:${i} ${ye(o,n+2)}`).join(`
`)}
${s}}`}function dt(e){return{type:"keyword",name:e}}function ct(e){return{type:"symbol",name:e}}function je(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function He(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}class ut{constructor(n){this.text=n,this.index=0}parse(){const n=this.form();return this.ws(),n}form(){this.ws();const n=this.peek();return n==="{"?this.map():n==="["?this.vector():n==='"'?this.string():this.atom()}map(){this.expect("{");const n={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,n;const r=this.form(),s=this.form();n[mt(r)]=s}}vector(){this.expect("[");const n=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,n;n.push(this.form())}}string(){this.expect('"');let n="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return n;if(r==="\\"){const s=this.text[this.index++];n+=s==="n"?`
`:s}else n+=r}throw new Error("unterminated string")}atom(){const n=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(n,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?dt(r.slice(1)):ct(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(n){if(this.ws(),this.text[this.index]!==n)throw new Error(`expected ${n} at byte ${this.index}`);this.index++}}function mt(e){return je(e)||He(e)?e.name:String(e)}const Ae=Object.freeze(Object.fromEntries(I.map(e=>[e.id,`./models/${e.id}/model.json`])));class Ce extends Error{constructor(n){super(`model :${n} assets are not prepared`),this.modelId=n}}class ht{constructor(){this.resources=new ot("browser"),this.registry=pt(this),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(n){const r=Ke(n);this.lastTrace={requestText:n,request:r,responseText:"",packageName:r.package?.name||"unknown",exportName:r.export?.name||"unknown"};const s=this.route(r),a=O(s);return this.lastTrace.responseText=a,a}route(n){try{const r=n.package?.name,s=n.export?.name,a=n.args||[],i=this.invoke(r,s,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:r,exportName:s,capability:Be(r,s),argsCount:a.length,view:i?.view?.name||"scalar"},{status:y("ok"),value:i}}catch(r){const s=r instanceof Ce?{status:y("failed"),kind:y("asset-not-prepared"),model:y(r.modelId),recoverable:!0,message:r.message}:{status:y("failed"),kind:y("provider-error"),message:r.message};return r instanceof Ce&&(this.pendingAssetModel=r.modelId),this.lastValue=s,this.lastTrace={...this.lastTrace||{},status:"failed",error:r.message},s}}invoke(n,r,s){return this.registry.invoke(n,r,s)}loadNamedModel(n){if(!Ae[n])throw new Error(`unknown model :${n}`);if(!this.catalog.has(n))throw new Ce(n);if(!this.modelIds.has(n)){const r=this.resources.insert("model",this.catalog.get(n));this.modelIds.set(n,r)}return this.modelIds.get(n)}async prepareModel(n){return this.loadModelNow(n)}isPrepared(n){return this.catalog.has(n)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(n){if(!Ae[n])throw new Error(`unknown model :${n}`);if(this.catalog.has(n))return this.catalog.get(n);const r=await Qn(Ae[n]);return this.catalog.set(n,r),r}model(n){return this.resources.get(n,"model")}loadedModels(){return[...this.modelIds.entries()].map(([n,r])=>{const s=this.summary(r);return{id:n,handle:r,name:s.model,layers:s.layers,parameters:s.parameters,trainableParameters:s.trainableParameters,bytes:s.bytes,inputs:s.inputs,outputs:s.outputs}})}summary(n){const r=this.model(n),s=r.layers.map(K);return{view:y("model-summary"),model:r.name,handle:n,layers:s.length,parameters:H(s.map(a=>a.params)),trainableParameters:H(s.map(a=>a.trainableParams)),bytes:H(s.map(a=>a.bytes)),inputs:J(r.inputs?.[0]?.shape),outputs:J(r.outputs?.[0]?.shape),graph:an(r),layerTable:s}}graph(n){return{view:y("graph"),graph:an(this.model(n))}}layerCount(n){const r=this.model(n);return{view:y("numeric-aggregate"),label:"layer count",value:r.layers.length,unit:y("layers"),model:r.name,handle:n}}layersByKind(n,r){const s=this.model(n).layers.map(K).filter(a=>a.kind===r);return{view:y("layers-by-kind"),kind:y(r),count:s.length,layers:s}}topLayers(n,r){const s=Number(r.limit||5),i=_e(r.by||y("params"))==="bytes"?"bytes":"params",o=this.model(n).layers.map(K).sort((d,c)=>c[i]-d[i]).slice(0,s);return{view:y("top-layers"),by:y(i),layers:o}}inspectLayer(n,r){const s=this.layerByName(n,r);return{view:y("layer-inspection"),layer:K(s),config:gt(s.getConfig()),weights:s.weights.map(jn)}}layerTensorSize(n,r){const{layer:s,index:a}=this.layerByRef(n,r),i=K(s,a);return{view:y("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:y("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(n,r){const s=this.layerByName(n,r);return{view:y("weight-stats"),layer:s.name,tensors:s.getWeights().map((a,i)=>ft(s.weights[i],a))}}weightHistogram(n,r,s){const a=this.layerByName(n,r),i=Number(s.bins||24),o=a.getWeights().map((d,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:yt(Array.from(d.dataSync()),i)}));return{view:y("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(n,r){const s=this.model(n).layers.find(a=>a.name===r);if(!s)throw new Error(`unknown layer ${r}`);return s}layerByRef(n,r){const s=this.model(n);if(typeof r=="number"){const o=Math.trunc(r)-1,d=s.layers[o];if(!d)throw new Error(`unknown layer index ${r}`);return{layer:d,index:o}}const a=String(r),i=s.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:s.layers[i],index:i}}}function pt(e){return new lt().register("demo.tfjs/model","load-model",([n])=>e.loadNamedModel(_e(n))).register("demo.tfjs/model","summary",([n])=>e.summary(n)).register("demo.tfjs/model","layer-count",([n])=>e.layerCount(n)).register("demo.tfjs/model","graph",([n])=>e.graph(n)).register("demo.tfjs/layers","by-kind",([n,r])=>e.layersByKind(n,_e(r))).register("demo.tfjs/layers","top",([n,r={}])=>e.topLayers(n,r)).register("demo.tfjs/layer","inspect",([n,r])=>e.inspectLayer(n,r)).register("demo.tfjs/layer","tensor-size",([n,r])=>e.layerTensorSize(n,r)).register("demo.tfjs/weights","stats",([n,r])=>e.weightStats(n,r)).register("demo.tfjs/weights","histogram",([n,r,s={}])=>e.weightHistogram(n,r,s))}function K(e,n=null){const r=e.weights.map(jn);return{id:e.name,index:n??xt(e),name:e.name,kind:e.getClassName().toLowerCase(),activation:e.getConfig().activation||"linear",input:J(e.inputShape),output:J(e.outputShape),params:H(r.map(s=>s.params)),trainableParams:H(r.filter(s=>s.trainable).map(s=>s.params)),bytes:H(r.map(s=>s.bytes))}}function an(e){const n=e.layers.map((r,s)=>({...K(r,s),index:s}));return{nodes:n,edges:n.slice(1).map((r,s)=>({id:`${n[s].id}->${r.id}`,source:n[s].id,target:r.id}))}}function jn(e){const n=e.shape.reduce((r,s)=>r*s,1);return{name:e.originalName,shape:J(e.shape),params:n,bytes:n*4,trainable:!!e.trainable}}function ft(e,n){const r=Array.from(n.dataSync()),s=r.length,a=Math.min(...r),i=Math.max(...r),o=r.reduce((h,m)=>h+m,0)/s,d=r.reduce((h,m)=>h+(m-o)**2,0)/s,c=r.filter(h=>h===0).length;return{name:e?.originalName||"weight",shape:J(n.shape),params:s,min:L(a),max:L(i),mean:L(o),stddev:L(Math.sqrt(d)),sparsity:L(c/s)}}function yt(e,n){const r=Math.min(...e),s=Math.max(...e),a=s===r?1:(s-r)/n,i=Array.from({length:n},(o,d)=>({start:L(r+d*a),end:L(r+(d+1)*a),count:0}));for(const o of e){const d=Math.min(n-1,Math.max(0,Math.floor((o-r)/a)));i[d].count+=1}return i}function gt(e){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(r=>e[r]!==void 0).map(r=>[r,e[r]]))}function _e(e){return je(e)?e.name:typeof e=="string"?e:e?.name||String(e)}function y(e){return{type:"keyword",name:e}}function J(e){return e?Array.isArray(e)&&Array.isArray(e[0])?e[0].map(on).join(" x "):e.map(on).join(" x "):"?"}function on(e){return e==null?"*":String(e)}function H(e){return e.reduce((n,r)=>n+r,0)}function L(e){return String(Math.round(e*1e5)/1e5)}function xt(e){return Number(e._index??0)}const wn=`{:packages
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
                         :targets {:wasm-host {:availability :available}}}}}}]}`;function ne(e){return e==null?"nil":we(e)?`:${e.name}`:ke(e)?e.name:typeof e=="string"?JSON.stringify(e):Array.isArray(e)?`[${e.map(ne).join(" ")}]`:typeof e=="object"?`{${Object.entries(e).map(([n,r])=>`:${n} ${ne(r)}`).join(" ")}}`:String(e)}function Pe(e,n=0){if(e==null||typeof e!="object"||we(e)||ke(e))return ne(e);if(Array.isArray(e)){if(e.length===0)return"[]";const i=" ".repeat(n+2),o=" ".repeat(n);return`[
${e.map(d=>`${i}${Pe(d,n+2)}`).join(`
`)}
${o}]`}const r=Object.entries(e);if(r.length===0)return"{}";const s=" ".repeat(n+2),a=" ".repeat(n);return`{
${r.map(([i,o])=>`${s}:${i} ${Pe(o,n+2)}`).join(`
`)}
${a}}`}function bt(e,n=""){return we(e)||ke(e)?e.name:typeof e=="string"?e:e==null?n:String(e)}function we(e){return!!(e&&typeof e=="object"&&e.type==="keyword")}function ke(e){return!!(e&&typeof e=="object"&&e.type==="symbol")}function jt(e){return Array.isArray(e)?e.length:e&&typeof e=="object"&&!we(e)&&!ke(e)?Object.keys(e).length:0}function Le(e){if(!e||!e.includes(":traces"))return null;try{return Ke(e).traces||null}catch{return null}}function We(e){const n=Array.isArray(e?.traces)?e.traces:[],r=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return{scope:bt(e?.scope,"waiting"),traces:n.length,requests:r.length,empty:n.length===0&&r.length===0}}function wt(e){const n=[];return Fe(e,[],n),n}function ln(e){return e==null?"nil":Array.isArray(e)?`vector/${e.length}`:typeof e=="object"&&e.type==="keyword"?`:${e.name}`:typeof e=="object"&&e.type==="symbol"?e.name:typeof e=="object"?`map/${Object.keys(e).length}`:ne(e)}function kt(e){return Pe(e)}function ge(e){return e==null?null:Array.isArray(e)?e.map(ge):e&&typeof e=="object"?e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Object.fromEntries(Object.entries(e).map(([n,r])=>[`:${n}`,ge(r)])):e}function Fe(e,n,r){const s=r.length,a={id:s,path:n,label:Rt(n),kind:vt(e),value:jt(e)?null:ne(e),children:[]};return r.push(a),Array.isArray(e)?e.forEach((i,o)=>{const d=Fe(i,[...n,o],r);a.children.push(d)}):e&&typeof e=="object"&&!e.type&&Object.entries(e).forEach(([i,o])=>{const d=Fe(o,[...n,i],r);a.children.push(d)}),s}function vt(e){return e==null?"nil":Array.isArray(e)?"vector":typeof e=="object"&&e.type==="keyword"?"keyword":typeof e=="object"&&e.type==="symbol"?"symbol":typeof e=="object"?"map":typeof e}function Rt(e){return e.length?e.map(n=>typeof n=="number"?`[${n}]`:`:${n}`).join(" "):"root"}const g=e=>({type:"keyword",name:e}),De=e=>({type:"symbol",name:e});function dn(e){const n=St(e),r=$t(e),s=Mt(e);return{source:Nt(e),value:n,providerTrace:r,traceSection:s,runtimeReport:`{:status :ok :traces ${Ve(s)}}`,loadedModel:{id:e.id,handle:n.handle,name:n.model,layers:n.layers,parameters:n.parameters,trainableParameters:n.trainableParameters,bytes:n.bytes,inputs:n.inputs,outputs:n.outputs}}}function Nt(e){return`(def m (model/load-model :${e.id}))
(model/summary m)`}function St(e){const n=kn(e),r=n.reduce((a,i)=>a+i.params,0),s=n.reduce((a,i)=>a+i.bytes,0);return{view:g("model-summary"),model:`${e.id.replaceAll("-","_")}_fixture`,handle:"browser/model/1",layers:n.length,parameters:r,trainableParameters:r,bytes:s,inputs:Tt(e),outputs:Et(e),graph:{nodes:n,edges:n.slice(1).map((a,i)=>At(n[i].id,a.id))},layerTable:n}}function $t(e){return{status:"ok",packageName:"demo.tfjs/model",exportName:"summary",capability:"demo.tfjs/model/summary",argsCount:1,view:"model-summary",requestText:'{:package demo.tfjs/model :export summary :args ["browser/model/1"]}',responseText:`{:status :ok :value {:view :model-summary :model "${`${e.id.replaceAll("-","_")}_fixture`}" :handle "browser/model/1" :layers ${kn(e).length}}}`}}function Mt(e){return{"rasa/phase":g("traces"),scope:g("admitted-host-calls"),traces:[{id:0,subject:{kind:g("source")},events:[U(0,"source-form",{symbol:De("model/load-model"),span:{start:7,end:23}}),U(1,"resolved-identity",{package:"demo.tfjs/model",export:"load-model",capability:g("demo.tfjs/model/load-model")}),U(2,"admission",{"call-id":0,effects:[g("model/read")],signature:{args:[g("id")],returns:g("string")}})]},{id:1,subject:{kind:g("source")},events:[U(0,"source-form",{symbol:De("model/summary"),span:{start:31,end:44}}),U(1,"resolved-identity",{package:"demo.tfjs/model",export:"summary",capability:g("demo.tfjs/model/summary")}),U(2,"admission",{"call-id":1,effects:[g("model/read")],signature:{args:[g("model")],returns:g("map")}})]}],"host-requests":[cn(0,"demo.tfjs/model","load-model","model/load-model",e.id),cn(1,"demo.tfjs/model","summary","model/summary")]}}function kn(e){switch(e.id){case"tiny-mlp":return[x("feature_input","input","* x 16",0,0),x("hidden_dense","dense","* x 32",544,2176),x("classifier_dense","dense","* x 4",132,528)];case"tiny-autoencoder":return[x("signal_input","input","* x 32",0,0),x("encoder_dense","dense","* x 12",396,1584),x("bottleneck","dense","* x 4",52,208),x("decoder_dense","dense","* x 12",60,240),x("reconstruction","dense","* x 32",416,1664)];case"tiny-embedder":return[x("token_input","input","* x 8",0,0),x("token_embedding","embedding","* x 8 x 16",1600,6400),x("pool_tokens","global-average-pooling1d","* x 16",0,0),x("projection_dense","dense","* x 8",136,544)];default:return[x("input_image","input","* x 28 x 28 x 1",0,0),x("stem_conv","conv2d","* x 26 x 26 x 8",80,320),x("flatten","flatten","* x 5408",0,0),x("classifier_dense","dense","* x 10",5306,21224)]}}function Tt(e){return e.id==="tiny-mlp"?"* x 16":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 28 x 28 x 1"}function Et(e){return e.id==="tiny-mlp"?"* x 4":e.id==="tiny-autoencoder"?"* x 32":e.id==="tiny-embedder"?"* x 8":"* x 10"}function x(e,n,r,s,a){return{id:e,index:0,name:e,kind:n,activation:"linear",input:"?",output:r,params:s,trainableParams:s,bytes:a}}function At(e,n){return{id:`${e}->${n}`,source:e,target:n}}function U(e,n,r){return{id:e,kind:g(n),subject:null,"source-id":"browser://repl",span:r.span||null,data:r,diagnostics:[],annotations:[],evidence:[]}}function cn(e,n,r,s,a=null){return{"rasa/phase":g("host-request"),scope:g("admitted-host-call"),"call-id":e,identity:{package:n,export:r,capability:g(`${n}/${r}`)},source:{symbol:De(s),model:a?g(a):null},admission:{"call-id":e,identity:{package:n,export:r,capability:g(`${n}/${r}`)},effects:[g("model/read")]},"trace-id":e}}function Ve(e){return e==null?"nil":typeof e=="boolean"||typeof e=="number"?String(e):typeof e=="string"?JSON.stringify(e):e.type==="keyword"?`:${e.name}`:e.type==="symbol"?e.name:Array.isArray(e)?`[${e.map(Ve).join(" ")}]`:`{${Object.entries(e).filter(([,n])=>n!==null).map(([n,r])=>`:${n} ${Ve(r)}`).join(" ")}}`}const Ct=`(ns rasa.core)

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

(defn select-keys
  "Returns a map containing only entries in m whose keys are in keyseq."
  [m keyseq]
  (loop [ret {}
         ks (seq keyseq)]
    (if ks
      (let [entry (find m (first ks))]
        (recur (if entry (conj ret entry) ret) (next ks)))
      ret)))

(def ^{:doc "Returns the value in a nested lookup structure, or not-found when supplied and a key is absent."}
  get-in
  (fn
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
         value)))))

(defn update
  "Updates the value at key k by applying f to the old value and args."
  [m k f & args]
  (assoc m k (apply f (get m k) args)))

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
`,Lt=`import "@tensorflow/tfjs-backend-cpu";
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
`,qt="./ras.wasm",ze=Xn.all|et,vn=e=>e<2;function It(){const e=Ot()==="trace",n=l.useRef(null),r=l.useRef(null),s=l.useRef(0),a=l.useRef(null),i=l.useRef(!1),[o,d]=l.useState(fe),[c,h]=l.useState(()=>rt()),[m,b]=l.useState(()=>e?dn(W(fe)).source:at),[S,E]=l.useState("loading"),[A,Ye]=l.useState(!1),[se,Ze]=l.useState(0),[Mn,Qe]=l.useState(null),[Xe,Y]=l.useState(null),[ve,ae]=l.useState(""),[Z,ie]=l.useState(null),[Q,oe]=l.useState(null),[Re,Ne]=l.useState([]),[Se,le]=l.useState([]),[Tn,$e]=l.useState(null),[En,en]=l.useState({}),[B,Me]=l.useState(null),[de,nn]=l.useState(null),[ce,tn]=l.useState(null),[An,Cn]=l.useState("boundary"),[Ln,ue]=l.useState([]),p=l.useMemo(()=>e?dn(W(o)):null,[e,o]);l.useEffect(()=>{const u=f=>h(f.detail?.theme||"dark");return window.addEventListener("rasa-theme-change",u),()=>window.removeEventListener("rasa-theme-change",u)},[]),l.useEffect(()=>{let u=!0;async function f(){try{if(e&&p){if(!u)return;const j=await un().catch(()=>({}));if(!u)return;ae(p.runtimeReport),ie(p.providerTrace),oe(p.traceSection),Ne([p.loadedModel]),le([p.loadedModel.id]),en(j),Me(p.value),nn(p.loadedModel.handle),tn(null),Qe({manifestMs:0,engineMs:0,setupMs:0,totalMs:0}),Y({run:0,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ue([{id:"setup",kind:"setup",source:Ee,result:null,capability:"rasa session imports",view:"session setup",status:"ok"},{id:"fixture-run",kind:"run",source:p.source,result:Ie(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]),E("ready");return}const _=N(),w=new ht,k=N(),v=await un(),X=R(k),P=N(),$=await Ue.load(Bt(),{hostCall:j=>w.call(j)}),F=R(P),M=$.createSession(),me=N();$.loadPackage(M,wn);const he=$.evaluateSession(M,Ct,ze);pn(he,"Rasa core boot");const D=$.evaluateSession(M,Ee,ze);pn(D,"model setup");const Te=R(me);if(!u)return;n.current=w,r.current=$,s.current=M,ae(D),ie(w.lastTrace),oe(Le(D)),Ne(w.loadedModels()),le(w.preparedModelIds()),en(v),Qe({manifestMs:X,engineMs:F,setupMs:Te,totalMs:R(_)}),ue([{id:"setup",kind:"setup",source:Ee,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),E("ready")}catch(_){u&&E(`failed: ${_.message}`)}}return f(),()=>{u=!1,r.current&&s.current&&r.current.freeSession(s.current)}},[e,p]);const qn=l.useCallback(async()=>{if(e&&p){const j=a.current?.state.doc.toString()||m,ee=se+1;Ze(ee),Me(p.value),ie(p.providerTrace),oe(p.traceSection),ae(p.runtimeReport),Y({run:ee,status:"fixture",capability:"demo.tfjs/model/summary",view:"model-summary",assetState:"cached",totalMs:0,finalEvalMs:0}),ue(V=>[...V,{id:`run-${V.length}`,kind:"run",source:j,result:Ie(p.value),capability:"demo.tfjs/model/summary",view:"model-summary",status:"fixture",durationMs:0,value:p.value}]);return}if(!r.current||!s.current||!n.current||i.current)return;i.current=!0,Ye(!0),$e(null);const u=a.current?.state.doc.toString()||m,f=n.current,_=N();let w=ve,k=null,v=null,X=null,P=null,$=0,F=0,M=0,me=!1;Y({status:"running",assetState:"checking",totalMs:0});try{const j=N();w=hn(r.current,s.current,f,u),X=Le(w),F=R(j);const ee=wr(f);if(ee){const V=ee;P=V,$e(V),Y({status:"running",assetState:"fetching",assetModel:P,firstEvalMs:F,totalMs:R(_)});const Pn=N();await f.prepareModel(V),$=R(Pn),le(f.preparedModelIds()),f.pendingAssetModel=null;const Fn=N();w=hn(r.current,s.current,f,u),X=Le(w),M=R(Fn)}else M=F;k=f.lastValue,v=f.lastTrace}catch(j){me=!0,k=jr("asset-load-error",j.message),v={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{i.current=!1,Ye(!1)}const he=R(_),D=se+1,Te={run:D,status:v?.status||"ok",capability:T(v),view:v?.view||xe(k),assetState:me?"failed":P?"fetched":"cached",assetModel:P,assetLoadMs:$,firstEvalMs:F,finalEvalMs:M,totalMs:he,cacheCount:f.preparedModelIds().length};ae(w),Me(k),ie(v),oe(X),Ne(f.loadedModels()),le(f.preparedModelIds()),$e(null),Y(Te),k?.handle&&nn(k.handle),Ze(D),ue(j=>[...j,{id:`run-${j.length}`,kind:"run",source:u,result:Ie(k),capability:T(v),view:v?.view||xe(k),status:v?.status||"ok",durationMs:he,value:k}])},[e,p,se,ve,m,Q]),C=l.useMemo(()=>cr(B),[B]),In=l.useMemo(()=>de?Re.find(u=>u.handle===de):null,[de,Re]),On=l.useMemo(()=>C.nodes.map(u=>u.id).join("|")||"empty-graph",[C.nodes]),Bn=l.useMemo(()=>C.nodes.map((u,f)=>({id:u.id,position:{x:f*220,y:f%2===0?0:28},data:{label:t.jsxs("div",{className:"node-label",children:[t.jsx("strong",{children:u.name}),t.jsx("span",{children:u.kind}),t.jsxs("em",{children:[u.params," params"]})]}),layer:u},type:"default",className:ce===u.id?"selected-node":""})),[C.nodes,ce]),_n=l.useMemo(()=>C.edges.map(u=>({...u,animated:!0})),[C.edges]);return t.jsxs("main",{className:"app-shell",children:[t.jsxs("header",{className:"hero",children:[t.jsxs("div",{className:"brand-lockup",children:[t.jsx("img",{src:rn.logo,alt:"Rasa"}),t.jsxs("div",{children:[t.jsx("span",{children:"Rasa Model Explorer"}),t.jsx("h1",{children:"Model architecture explorer"}),t.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),t.jsxs("div",{className:"hero-status",children:[t.jsx("img",{src:rn.mark,alt:"","aria-hidden":"true"}),t.jsx("span",{className:S==="ready"?"ok":"warn",children:S}),t.jsx("span",{children:"tfjs assets on first run"}),t.jsx("span",{children:"static bundle"}),t.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>h(st()),"aria-label":`Switch to ${sn(c).toLowerCase()} theme`,children:sn(c)})]})]}),t.jsxs("section",{className:"boundary-theater",children:[t.jsx(_t,{fixture:e,providerTrace:Z,traceSection:Q,runMetrics:Xe}),t.jsxs("aside",{className:"theater-left",children:[t.jsxs("div",{className:"studio-head",children:[t.jsx("span",{className:"label",children:"Model & extension"}),t.jsx("strong",{children:"What Rasa is allowed to touch"})]}),t.jsx(Jt,{models:Re,activeHandle:de,preparedModelIds:Se}),t.jsx(Xt,{modelManifest:En[o],modelId:o,compact:!0})]}),t.jsxs("section",{className:"theater-stage",children:[t.jsx(Pt,{value:B,graph:C,runCount:se,selectedModelId:o,preparedModelIds:Se,running:A,fixture:e}),t.jsxs("div",{className:"graph-wrap graph-theater",children:[t.jsx(Ft,{traceSection:Q,providerTrace:Z,value:B,selectedModelId:o,activeModelId:In?.id||null,running:A}),t.jsxs(Vn,{nodes:Bn,edges:_n,fitView:!0,fitViewOptions:{padding:.32,maxZoom:1.18},onNodeClick:(u,f)=>tn(f.id),children:[t.jsx(zn,{color:"#29313d",gap:18}),t.jsx(Un,{showInteractive:!1})]},On)]}),t.jsx(Vt,{traceSection:Q,providerTrace:Z,runMetrics:Xe,bootMetrics:Mn})]}),t.jsxs("aside",{className:"theater-inspector",children:[t.jsx(Dt,{value:B,trace:Z,selectedLayer:ce}),t.jsx(zt,{activeTab:An,setActiveTab:Cn,value:B,selectedLayer:ce,trace:Z,traceSection:Q,runtimeReport:ve,fixture:e})]}),t.jsxs("section",{className:"theater-console","aria-label":"Rasa command console",children:[t.jsx(Kt,{entries:Ln}),t.jsxs("div",{className:"console-command",children:[t.jsx(Wt,{selectedModelId:o,setSelectedModelId:d,setSource:b,editorRef:a,prepared:Se.includes(o),preparing:Tn===o}),t.jsx(Ut,{source:m,editorRef:a,run:qn,disabled:S!=="ready"||A,running:A})]})]})]})]})}function Ot(){return new URLSearchParams(globalThis.location?.search||"").get("fixture")}function Bt(){return document.querySelector('meta[name="rasa-runtime-url"]')?.getAttribute("content")||qt}function _t({fixture:e,providerTrace:n,traceSection:r,runMetrics:s}){const a=Array.isArray(r?.["host-requests"])?r["host-requests"]:[],i=a.length?a[a.length-1]:null,o=We(r),d=[{label:e?"Replay form":"Rasa source",title:re(i)||"form in session",detail:e?"visual fixture":"session evaluation",tone:"source"},{label:"Admission",title:te(i)||T(n)||"waiting",detail:`${o.requests} admitted request(s)`,tone:"admit"},{label:"Browser host",title:n?.packageName||"TF.js provider",detail:n?.status||"waiting",tone:"host"},{label:"Return",title:s?.view?`:${s.view}`:"Rasa value",detail:s?.totalMs!==void 0?be(s.totalMs):"structured data",tone:"return"}];return t.jsx("section",{className:"boundary-runway","aria-label":"Rasa host boundary path",children:d.map(c=>t.jsxs("article",{className:`runway-step ${c.tone}`,children:[t.jsx("span",{children:c.label}),t.jsx("strong",{children:c.title}),t.jsx("em",{children:c.detail})]},c.label))})}function Pt({value:e,graph:n,runCount:r,selectedModelId:s,preparedModelIds:a,running:i,fixture:o}){const d=W(s),c=o?"fixture layer records":"live layer records";return t.jsxs("header",{className:"stage-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Model graph"}),t.jsx("h2",{children:n.nodes.length?`${n.nodes.length} ${c}`:"No model value yet"}),t.jsxs("p",{children:[d.title," is selected. ",o?"Fixture mode replays saved trace data for visual validation.":"Rasa returns the data; this canvas only projects the returned graph and layer records."]})]}),t.jsxs("div",{className:"stage-metrics",children:[t.jsx(q,{label:"Run",value:i?"running":r}),t.jsx(q,{label:"View",value:e?.view?.name?`:${e.view.name}`:"none"}),t.jsx(q,{label:"Assets",value:`${a.length}/${I.length}`})]})]})}function Ft({traceSection:e,providerTrace:n,value:r,selectedModelId:s,activeModelId:a,running:i}){const o=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],d=o.length?o[o.length-1]:null,c=W(s),h=a?W(a):null,m=a&&s!==a,b=i?"Rasa is evaluating the current form.":m?`Editor targets ${c.title}; run it to replace ${h.title}.`:h?`${h.title} is the current model handle in this Rasa session.`:"Run a load form to create the first browser model handle.";return t.jsxs("aside",{className:`boundary-spotlight ${m?"pending":""}`,"aria-label":"Current boundary spotlight",children:[t.jsxs("div",{className:"spotlight-flow",children:[t.jsxs("div",{children:[t.jsx("span",{children:"form"}),t.jsx("strong",{children:re(d)||"waiting for run"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"admitted identity"}),t.jsx("strong",{children:te(d)||T(n)||"not admitted yet"})]}),t.jsxs("div",{children:[t.jsx("span",{children:"returned value"}),t.jsx("strong",{children:r?.view?.name?`:${r.view.name}`:"none yet"})]})]}),t.jsx("p",{children:b})]})}function Dt({value:e,trace:n,selectedLayer:r}){const[s,a]=l.useState(null),i=e?ye(e):"nil";return t.jsxs(t.Fragment,{children:[t.jsxs("article",{className:"value-lens",children:[t.jsx("span",{className:"label",children:"Selected value"}),t.jsx("strong",{children:xe(e)}),t.jsx("span",{className:"value-lens-status",children:e?"returned to Rasa":"waiting"}),t.jsx(G,{text:pr(i),mode:"rasa"}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:T(n)||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"selected"}),t.jsx("dd",{children:r||"none"})]})]}),t.jsx("button",{className:"value-lens-open",type:"button",onClick:()=>a({value:e}),children:"Open full Rasa value"})]}),s&&t.jsx(Je,{kind:"Rasa value",title:xe(e),description:"The real structured value returned to the browser from the Rasa session.",meta:Ge(i,"rasa"),onClose:()=>a(null),children:t.jsx("div",{className:"modal-code-stack result-only",children:t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"returned value"}),t.jsx(G,{text:`=>
${i}`,mode:"rasa",numbered:!0})]})})})]})}function Vt({traceSection:e,providerTrace:n,runMetrics:r,bootMetrics:s}){const a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[],i=a.length?a[a.length-1]:null;return t.jsxs("section",{className:"host-status-strip","aria-label":"Current host request status",children:[t.jsx(q,{label:"Host request",value:re(i)||"waiting"}),t.jsx(q,{label:"Canonical identity",value:te(i)||T(n)||"waiting"}),t.jsx(q,{label:"Status",value:n?.status||r?.status||"waiting"}),t.jsx(q,{label:"Time",value:r?.totalMs!==void 0?be(r.totalMs):s?be(s.totalMs):"pending"})]})}function zt({activeTab:e,setActiveTab:n,value:r,selectedLayer:s,trace:a,traceSection:i,runtimeReport:o,fixture:d}){const c=[{id:"boundary",label:"Boundary"},{id:"result",label:"Result"},{id:"data",label:"Data"}];return t.jsxs("section",{className:"studio-inspector","aria-label":"Rasa inspection panes",children:[t.jsx("div",{className:"inspector-tabs","aria-label":"Inspector views",children:c.map(h=>t.jsx("button",{className:e===h.id?"active":"",type:"button","aria-pressed":e===h.id,onClick:()=>n(h.id),children:h.label},h.id))}),t.jsxs("div",{className:"inspector-body",children:[e==="boundary"&&t.jsx(Yt,{traceSection:i,providerTrace:a,fixture:d}),e==="result"&&t.jsxs(t.Fragment,{children:[t.jsx(Gt,{value:r,trace:a,traceSection:i}),t.jsx(sr,{value:r,selectedLayer:s})]}),e==="data"&&t.jsxs(t.Fragment,{children:[t.jsx(Rn,{title:"Returned Rasa value",value:r,defaultOpen:!0}),t.jsxs("details",{className:"runtime-report",children:[t.jsx("summary",{children:"Runtime report"}),t.jsx("pre",{children:o})]})]})]})]})}function Ut({source:e,editorRef:n,run:r,disabled:s,running:a}){const i=l.useRef(null),o=l.useRef(r);return l.useEffect(()=>{o.current=r},[r]),l.useEffect(()=>{const d=new Oe({parent:i.current,state:Jn.create({doc:e,extensions:[Gn(),Yn(),xr,gr,Zn.of(nt(()=>o.current())),Oe.lineWrapping]})});return n.current=d,()=>d.destroy()},[]),t.jsxs("div",{className:"editor-panel",children:[t.jsxs("div",{className:"editor-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa input"}),t.jsx("strong",{children:"Evaluate forms against live browser handles"})]}),t.jsx("span",{children:"Primary+Enter runs"})]}),t.jsx("div",{className:"editor-host",ref:i}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("span",{children:"First model load may fetch TF.js assets; later runs use the session."}),t.jsx("button",{className:"run-button",type:"button",onClick:r,disabled:s,children:a?"Running...":"Run"})]})]})}function Kt({entries:e}){const n=l.useRef(null),[r,s]=l.useState(null),a=r?mr(r):"";return l.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e.length]),t.jsxs(t.Fragment,{children:[t.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:n,children:e.length?e.map(i=>t.jsx(Ht,{entry:i,onOpenResult:()=>s(i)},i.id)):t.jsxs("article",{className:"transcript-entry",children:[t.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),t.jsx("pre",{className:"transcript-result-static",children:"=> waiting for browser Wasm engine"})]})}),r&&t.jsx(Je,{kind:"Rasa value",title:r.view||"Returned Rasa data",description:"The real value returned to the browser from the Rasa session.",meta:Ge(a,"rasa"),onClose:()=>s(null),children:t.jsxs("div",{className:"modal-code-stack",children:[t.jsxs("section",{className:"form-section",children:[t.jsx("span",{className:"modal-section-label",children:"form"}),t.jsx(G,{text:r.source,mode:"rasa",numbered:!0})]}),t.jsxs("section",{className:"result-section",children:[t.jsx("span",{className:"modal-section-label",children:"result"}),t.jsx(G,{text:a,mode:"rasa",numbered:!0})]})]})})]})}function Ht({entry:e,onOpenResult:n}){return t.jsxs("article",{className:`transcript-entry ${e.kind}`,children:[t.jsx("pre",{className:"transcript-form",children:e.source}),e.result&&t.jsxs("button",{className:"transcript-result-preview",type:"button",onClick:n,children:[t.jsx("pre",{children:hr(e.result)}),t.jsx("span",{children:"Open full value"})]}),t.jsxs("div",{className:"transcript-meta",children:[t.jsx("span",{children:e.capability||"session"}),t.jsx("span",{children:e.view}),t.jsx("span",{children:e.status}),e.durationMs!==void 0&&t.jsx("span",{children:be(e.durationMs)})]})]})}function Wt({selectedModelId:e,setSelectedModelId:n,setSource:r,editorRef:s,prepared:a,preparing:i}){const o=it(e).slice(0,5),d=c=>{n(c.target.value)};return t.jsxs("div",{className:"command-shelf",children:[t.jsxs("div",{className:"command-shelf-head",children:[t.jsxs("label",{className:"model-picker",children:[t.jsx("span",{children:"Model"}),t.jsx("select",{value:e,onChange:d,children:I.map(c=>t.jsx("option",{value:c.id,children:c.title},c.id))})]}),t.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"})]}),t.jsx("div",{className:"command-chip-list","aria-label":"Rasa command shelf",children:o.map(c=>t.jsxs("article",{className:"command-chip",children:[t.jsxs("div",{children:[t.jsx("strong",{children:c.label}),t.jsx("span",{children:dr(c.source)})]}),t.jsxs("div",{className:"command-actions",children:[t.jsx("button",{type:"button",title:`Insert ${c.label} at the cursor`,onClick:()=>or(c.source,r,s),children:"Insert"}),t.jsx("button",{type:"button",title:`Append ${c.label} below the current editor text`,onClick:()=>lr(c.source,r,s),children:"Append"})]})]},c.label))})]})}function Jt({models:e,activeHandle:n,preparedModelIds:r}){const s=n?e.find(a=>a.handle===n):null;return t.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[s?t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:s.name})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"id"}),t.jsx("dd",{children:s.id})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"handle"}),t.jsx("dd",{children:s.handle})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"layers"}),t.jsx("dd",{children:s.layers})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:s.parameters})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"size"}),t.jsx("dd",{children:vr(s.bytes||0)})]})]})]},s.handle||s.id):t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:"none yet"})]}),t.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),t.jsxs("div",{className:"catalog-note",children:[I.length," static catalog models are available. ",r.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Gt({value:e,trace:n,traceSection:r}){const s=kr(e),a=We(r);return t.jsxs("section",{className:"projection-card",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Projection"}),t.jsx("strong",{children:s.renderer}),t.jsx("p",{children:s.reason})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"Rasa view"}),t.jsx("dd",{children:e?.view?.name?`:${e.view.name}`:"none yet"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Capability"}),t.jsx("dd",{children:n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Core traces"}),t.jsx("dd",{children:a.empty?"none yet":`${a.traces} trace(s), ${a.requests} admitted request(s)`})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Status"}),t.jsx("dd",{children:n?.status||"waiting"})]})]})]})}function Yt({traceSection:e,providerTrace:n,fixture:r=!1}){const s=We(e),a=Array.isArray(e?.["host-requests"])?e["host-requests"]:[];return t.jsxs("section",{className:"boundary-trace","aria-label":"Rasa host boundary trace",children:[t.jsxs("div",{className:"boundary-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa boundary"}),t.jsx("strong",{children:s.empty?"Waiting for admitted host evidence":r?"Visual fixture replay":`Live Wasm ${s.scope} evidence`}),r&&t.jsx("p",{className:"trace-note",children:"Fixture mode replays the UI shape for visual validation. Run without `?fixture=trace` for live Wasm trace evidence."})]}),t.jsxs("span",{children:[s.traces," traces"]})]}),t.jsxs("div",{className:"boundary-path",children:[t.jsx(qe,{title:"Rasa form",value:re(a[0])||"source expression"}),t.jsx(qe,{title:"Canonical identity",value:te(a[0])||T(n)||"package/export"}),t.jsx(qe,{title:"Browser provider",value:n?.status?n.status:"waiting"})]}),t.jsxs("details",{className:"trace-section",open:!0,children:[t.jsx("summary",{children:"Admitted host calls"}),t.jsx("div",{className:"trace-list",children:a.length?a.map(i=>t.jsx(Zt,{request:i},i["call-id"])):t.jsx("p",{className:"trace-empty",children:"Run a host-capability form to see Rasa admission evidence."})})]}),t.jsx(Qt,{trace:n}),t.jsx(Rn,{title:"Foldable trace data",value:e,defaultOpen:!1})]})}function qe({title:e,value:n}){return t.jsxs("article",{children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function Zt({request:e}){return t.jsxs("article",{className:"host-request-card",children:[t.jsxs("div",{children:[t.jsxs("span",{children:["call ",e["call-id"]??"?"]}),t.jsx("strong",{children:te(e)})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"source"}),t.jsx("dd",{children:re(e)||"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"capability"}),t.jsx("dd",{children:ln(e.identity?.capability)})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"effects"}),t.jsx("dd",{children:(e.admission?.effects||[]).map(ln).join(" ")||"none"})]})]})]})}function Qt({trace:e}){return t.jsxs("article",{className:"provider-bridge",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Browser bridge"}),t.jsx("strong",{children:T(e)||"waiting"})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"status"}),t.jsx("dd",{children:e?.status||"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"args"}),t.jsx("dd",{children:e?.argsCount??"n/a"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"view"}),t.jsx("dd",{children:e?.view?`:${e.view}`:"n/a"})]})]}),t.jsxs("details",{className:"bridge-details",children:[t.jsx("summary",{children:"Request / response data"}),t.jsx("pre",{children:e?.requestText||"no provider request yet"}),t.jsx("pre",{children:e?.responseText||"no provider response yet"})]})]})}function Rn({title:e,value:n,defaultOpen:r=!1}){const s=l.useMemo(()=>wt(n),[n]),a=l.useMemo(()=>ge(n),[n]),i=s.slice(0,12);return t.jsxs("details",{className:"data-projection",open:r,children:[t.jsxs("summary",{children:[t.jsx("span",{children:e}),t.jsxs("strong",{children:[s.length," node(s)"]})]}),t.jsx("div",{className:"projection-viewer",children:t.jsx(fn,{data:a||{},shouldExpandNode:vn,clickToExpandNode:!0,compactTopLevel:!0,style:{...yn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsx("div",{className:"projection-node-list","aria-label":"Compact foldable data nodes",children:i.map(o=>t.jsxs("article",{children:[t.jsx("span",{children:o.label}),t.jsx("strong",{children:o.value||o.kind}),t.jsx("em",{children:o.children.length?`${o.children.length} child node(s)`:"leaf"})]},o.id))}),s.length>i.length&&t.jsxs("p",{className:"projection-more",children:[s.length-i.length," more node(s) folded in compact Rasa data below."]}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Compact Rasa data"}),t.jsx("pre",{className:"data-block",children:kt(n)})]})]})}function Xt({modelManifest:e,modelId:n,compact:r=!1}){const[s,a]=l.useState(null),i=er(e,n);return t.jsxs("section",{className:`extension-panel ${r?"compact":""}`,children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Open the extension"}),t.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),t.jsx("div",{className:"extension-assets",children:i.map(o=>t.jsx(nr,{asset:o,onOpen:()=>a(o)},o.id))}),s&&t.jsx(tr,{asset:s,onClose:()=>a(null)})]})}function er(e,n){return[{id:"rasa-package",title:"Rasa package bundle",kind:"Rasa source",description:"The package loaded into the browser Wasm session before user forms run.",text:wn,mode:"code"},{id:"browser-provider",title:"Browser provider source",kind:"JavaScript bridge",description:"The readonly provider that maps admitted host calls to TF.js model handles.",text:Lt,mode:"code"},{id:"tfjs-manifest",title:`TF.js model manifest${n?` :${n}`:""}`,kind:"JSON manifest",description:"The model graph and weight shard manifest loaded by TensorFlow.js.",text:e?JSON.stringify(e,null,2):"loading model manifest",value:e||null,mode:"json"}]}function nr({asset:e,onOpen:n}){return t.jsxs("button",{className:"extension-asset",type:"button",onClick:n,children:[t.jsx("span",{children:e.kind}),t.jsx("strong",{children:e.title}),t.jsx("em",{children:e.description})]})}function tr({asset:e,onClose:n}){return t.jsx(Je,{kind:e.kind,title:e.title,description:e.description,meta:Ge(e.text,e.mode),onClose:n,children:t.jsx("div",{className:"asset-viewer",children:e.mode==="json"&&e.value?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"projection-viewer large",children:t.jsx(fn,{data:ge(e.value),shouldExpandNode:vn,clickToExpandNode:!0,compactTopLevel:!0,style:{...yn,container:"rasa-json-tree",childFieldsContainer:"rasa-json-children",basicChildStyle:"rasa-json-row",collapseIcon:"rasa-json-collapse",expandIcon:"rasa-json-expand",collapsedContent:"rasa-json-collapsed"}})}),t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Raw manifest JSON"}),t.jsx(G,{text:e.text,mode:"json",numbered:!0})]})]}):t.jsx(G,{text:e.text,mode:e.mode==="code"?"code":"rasa",numbered:!0})})})}function Je({kind:e,title:n,description:r,meta:s=[],onClose:a,children:i}){const o=l.useId(),d=l.useId(),c=l.useRef(null),h=l.useRef(null);return l.useEffect(()=>{const m=document.activeElement;return h.current?.focus(),()=>{m?.isConnected&&typeof m.focus=="function"&&m.focus()}},[]),l.useEffect(()=>{const m=b=>{if(b.key==="Escape"){b.preventDefault(),a();return}if(b.key!=="Tab"||!c.current)return;const S=rr(c.current);if(!S.length){b.preventDefault();return}const E=S[0],A=S[S.length-1];c.current.contains(document.activeElement)?b.shiftKey&&document.activeElement===E?(b.preventDefault(),A.focus()):!b.shiftKey&&document.activeElement===A&&(b.preventDefault(),E.focus()):(b.preventDefault(),E.focus())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a]),t.jsxs("div",{className:"asset-modal",role:"dialog","aria-modal":"true","aria-labelledby":o,"aria-describedby":d,children:[t.jsx("div",{className:"asset-modal-backdrop",onClick:a}),t.jsxs("article",{className:"asset-modal-panel",ref:c,tabIndex:-1,children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:e}),t.jsx("h2",{id:o,children:n}),t.jsx("p",{id:d,children:r}),s.length>0&&t.jsx("div",{className:"modal-meta",children:s.map(m=>t.jsxs("span",{children:[t.jsx("strong",{children:m.value}),m.label]},m.label))})]}),t.jsx("button",{ref:h,type:"button",onClick:a,children:"Close"})]}),i]})]})}function rr(e){return Array.from(e.querySelectorAll('button, summary, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>n.disabled||n.hidden||n.getAttribute("aria-hidden")==="true"||n.closest("[inert]")?!1:n.getClientRects().length>0)}function G({text:e,mode:n="rasa",numbered:r=!1}){const s=String(e||"").split(`
`);return t.jsx("pre",{className:`line-code ${r?"numbered":""}`,children:s.map((a,i)=>t.jsxs("span",{className:"code-line",children:[r&&t.jsx("span",{className:"line-number",children:i+1}),t.jsx("code",{children:fr(a||" ",n)})]},i))})}function sr({value:e,selectedLayer:n}){if(!e)return t.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(e.status==="failed")return t.jsx("pre",{className:"data-block",children:O(e)});if(e.view?.name==="weight-histogram")return t.jsx(ar,{value:e});if(e.view?.name==="weight-stats")return t.jsx(ir,{value:e});const r=n?ur(e,n):null;return t.jsxs("div",{className:"inspection-stack",children:[r&&t.jsx(pe,{layer:r}),Array.isArray(e.layers)&&e.layers.map(s=>t.jsx(pe,{layer:s},s.id)),Array.isArray(e.layerTable)&&e.layerTable.map(s=>t.jsx(pe,{layer:s,compact:!0},s.id)),e.layer&&t.jsx(pe,{layer:e.layer}),t.jsx(Nn,{value:e})]})}function ar({value:e}){const n=e.tensors?.[0],r=Math.max(...(n?.bins||[]).map(s=>s.count),1);return t.jsxs("div",{className:"inspection-stack",children:[t.jsx("h2",{children:e.layer}),t.jsx("div",{className:"histogram",children:(n?.bins||[]).map((s,a)=>t.jsx("div",{style:{height:`${8+s.count/r*150}px`},title:`${s.start}..${s.end}: ${s.count}`},a))}),t.jsx(Nn,{value:e})]})}function ir({value:e}){return t.jsx("div",{className:"inspection-stack",children:e.tensors.map(n=>t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:n.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"shape"}),t.jsx("dd",{children:n.shape})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"mean"}),t.jsx("dd",{children:n.mean})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"stddev"}),t.jsx("dd",{children:n.stddev})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"range"}),t.jsxs("dd",{children:[n.min,"..",n.max]})]})]})]},n.name))})}function Nn({value:e}){return t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Returned Rasa data"}),t.jsx("pre",{className:"data-block",children:O(e)})]})}function pe({layer:e,compact:n=!1}){return t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:e.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"kind"}),t.jsx("dd",{children:e.kind})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"output"}),t.jsx("dd",{children:e.output})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:e.params})]}),!n&&t.jsxs("div",{children:[t.jsx("dt",{children:"bytes"}),t.jsx("dd",{children:e.bytes})]})]})]})}function q({label:e,value:n}){return t.jsxs("article",{className:"metric",children:[t.jsx("span",{children:e}),t.jsx("strong",{children:n})]})}function or(e,n,r){const s=r.current;if(!s){n(i=>Sn(i,e));return}const a=s.state.selection.main;s.dispatch({changes:{from:a.from,to:a.to,insert:e},selection:{anchor:a.from+e.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function lr(e,n,r){const s=r.current;if(!s){n(d=>Sn(d,e));return}const a=s.state.doc.toString(),i=$n(a,e),o=s.state.doc.length;s.dispatch({changes:{from:o,insert:i},selection:{anchor:o+i.length},scrollIntoView:!0}),n(s.state.doc.toString()),s.focus()}function Sn(e,n){return`${e||""}${$n(e||"",n)}`}function $n(e,n){return e.trim()?`${e.endsWith(`
`)?`
`:`

`}${n}`:n}function dr(e){const n=String(e||"").split(`
`).filter(Boolean);return n.length>1?`${n[0]} ...`:n[0]||"Rasa form"}async function un(){const e=await Promise.all(I.map(async n=>[n.id,await fetch(`./models/${n.id}/model.json`).then(r=>r.json())]));return Object.fromEntries(e)}function cr(e){const n=e?.graph||(e?.view?.name==="model-summary"?e.graph:null);return n?.nodes?.length?n:Array.isArray(e?.layerTable)?{nodes:e.layerTable,edges:e.layerTable.slice(1).map((r,s)=>({id:`${e.layerTable[s].id}->${r.id}`,source:e.layerTable[s].id,target:r.id}))}:{nodes:[],edges:[]}}function ur(e,n){return e?.layerTable?.find(r=>r.id===n)||e?.layers?.find(r=>r.id===n)}function xe(e){return e?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function mr(e){return e.value!==void 0?`=>
${ye(e.value)}`:String(e.result||"=> nil")}function hr(e){const n=String(e||""),r=n.split(`
`).map(s=>s.trimEnd()).filter(Boolean);return r.length<=2?n:`${r.slice(0,2).join(`
`)}
...`}function pr(e){const n=String(e||"nil").split(`
`);return n.length<=10?n.join(`
`):`${n.slice(0,10).join(`
`)}
  ...`}function fr(e,n){const r=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|(\b(?:async|await|catch|class|const|else|export|function|if|import|let|new|return|throw|try)\b)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)/g,s=[];let a=0,i;for(;(i=r.exec(e))!==null;){i.index>a&&s.push(e.slice(a,i.index));const o=i[0];s.push(t.jsx("span",{className:`tok ${yr(i,n)}`,children:o},`${i.index}-${o}`)),a=i.index+o.length}return a<e.length&&s.push(e.slice(a)),s.length?s:e}function yr(e,n){return e[1]?"string":e[2]?"comment":e[3]?n==="json"?"key":"keyword":e[4]?"number":e[5]?"js":e[6]?"punct":e[7]?"literal":"plain"}function Ge(e,n="code"){const r=String(e||""),s=n==="json"?"folded JSON":n==="rasa"?"Rasa data":"source";return[{label:"lines",value:r?r.split(`
`).length:0},{label:"bytes",value:new TextEncoder().encode(r).length},{label:"viewer",value:s}]}const gr=Kn.fromClass(class{constructor(e){this.decorations=mn(e)}update(e){(e.docChanged||e.viewportChanged)&&(this.decorations=mn(e.view))}},{decorations:e=>e.decorations}),xr=Oe.theme({"&":{backgroundColor:"#0e1319",color:"#e8edf2",caretColor:"#e8edf2"},"&.cm-focused":{outline:"1px solid rgba(131, 215, 170, 0.35)",outlineOffset:"-1px"},".cm-selectionBackground, &.cm-focused .cm-selectionBackground":{backgroundColor:"rgba(120, 167, 255, 0.26)"},".cm-content ::selection":{backgroundColor:"rgba(120, 167, 255, 0.26)",color:"#e8edf2"},".cm-gutters, .cm-gutter, .cm-activeLineGutter":{backgroundColor:"#0e1319",color:"#687487"}},{dark:!0});function mn(e){const n=new Hn,r=/("(?:\\.|[^"\\])*")|(;.*$)|(:[^\s\[\]\{\}\(\)"]+)|(-?\d+(?:\.\d+)?)|([\[\]\{\}\(\)])|(\b(?:true|false|null|nil)\b)|(\b[\w.+*?!<>=/-]+\/[\w.+*?!<>=/-]+\b)/g;for(const{from:s,to:a}of e.visibleRanges){const i=e.state.doc.sliceString(s,a);r.lastIndex=0;let o;for(;(o=r.exec(i))!==null;){const d=s+o.index,c=d+o[0].length;n.add(d,c,Wn.mark({class:br(o)}))}}return n.finish()}function br(e){return e[1]?"cm-rasa-string":e[2]?"cm-rasa-comment":e[3]?"cm-rasa-keyword":e[4]?"cm-rasa-number":e[5]?"cm-rasa-punct":e[6]?"cm-rasa-literal":e[7]?"cm-rasa-qualified":"cm-rasa-text"}function Ie(e){return e?`=> ${O(e)}`:"=> nil"}function hn(e,n,r,s){return r.lastValue=null,r.lastTrace=null,r.pendingAssetModel=null,e.evaluateSession(n,s,ze)}function pn(e,n){let r=null;try{r=Ke(e)}catch{throw new Error(`${n} returned an unreadable runtime report`)}const s=r?.status?.name,a=r?.eval?.status?.name;if(s!=="ok"||r.eval&&a!=="ok"){const i=r?.eval?.message||r?.eval?.["rendered-error"]||r?.message||String(e||"").slice(0,240);throw new Error(`${n} failed: ${i}`)}}function jr(e,n){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:e},message:n}}function wr(e){const n=e.lastValue;return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:e.pendingAssetModel}function T(e){return e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:null}function te(e){const n=e?.identity||e?.admission?.identity;return!n?.package||!n?.export?null:`${n.package}/${n.export}`}function re(e){return e?.source?.symbol?.name||null}function kr(e){const n=e?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[n]||{renderer:e?"Returned Rasa data":"Waiting for result",reason:e?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function vr(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"0 B"}function be(e){return e==null?"pending":e<10?`${e.toFixed(1)} ms`:`${Math.round(e)} ms`}function N(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function R(e){return Math.max(0,N()-e)}Dn.createRoot(document.getElementById("root")).render(t.jsx(It,{}));
