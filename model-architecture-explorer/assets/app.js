import{b as Ee,j as t,r as o}from"./react.js";import{i as Re,B as Se,C as _e}from"./graph.js";import{E as q,a as $e,d as Ae,k as Ie}from"./editor.js";import{l as Le}from"./tfjs.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const D=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),Oe=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],B=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class X{static async load(e,r={}){const s=await fetch(e);if(!s.ok)throw new Error(`failed to load Rasa engine: ${s.status}`);const a=await s.arrayBuffer();let i=null;const l=r.imports||{},d=r.hostCall||null,c={rasa_host_call(){return 1},...l.env||{}};d&&(c.rasa_host_call=(I,L,O)=>{try{const U=new Uint8Array(i.memory.buffer,I,L),S=d(te(U)),j=k(S),_=i.rasa_alloc(j.length);if(_===0&&j.length>0)return 2;new Uint8Array(i.memory.buffer,_,j.length).set(j);const $=new DataView(i.memory.buffer);return $.setUint32(O,_,!0),$.setUint32(O+4,j.length,!0),0}catch{return 1}});const{instance:p,module:w}=await WebAssembly.instantiate(a,{...l,env:c});return i=p.exports,new X(p.exports,w)}constructor(e,r=null,s=Oe){for(const a of s)if(!e[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(e.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=e,this.module=r}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(e,r=D.all){return this.callText("rasa_eval_source",k(e),r)}inspect(e,r={}){return JSON.parse(this.callText("rasa_inspect_source",k(e),Pe(r)))}syntaxTokens(e){return JSON.parse(this.callText("rasa_syntax_tokens",k(e)))}callText(e,r,s=void 0){return this.callInput(r,(a,i)=>s===void 0?this.exports[e](a,i):this.exports[e](a,i,s))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(e){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(e)}loadPackage(e,r){return this.requireExport("rasa_session_load_package"),this.callInput(k(r),(s,a)=>this.exports.rasa_session_load_package(e,s,a))}evaluateSession(e,r,s=D.all){return this.requireExport("rasa_session_eval"),this.callInput(k(r),(a,i)=>this.exports.rasa_session_eval(e,a,i,s))}callInput(e,r){const s=this.exports.rasa_alloc(e.length);if(s===0&&e.length>0)throw new Error("Rasa engine allocation failed");e.length>0&&new Uint8Array(this.exports.memory.buffer,s,e.length).set(e);const a=r(s,e.length);if(this.exports.rasa_free(s,e.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(e){if(!this.exports[e])throw new Error(`missing Rasa Wasm export ${e}`)}readReport(e){const r=this.exports.rasa_report_ptr(e),s=this.exports.rasa_report_len(e);if(r===0||s===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,r,s);return te(a)}}function k(n){return new TextEncoder().encode(n)}function te(n){return new TextDecoder("utf-8",{fatal:!0}).decode(n)}function Pe(n={}){const e=n.detail||"standard";let r=0;return n.includeEval!==!1&&(r|=B.includeEval),n.includePlan!==!1&&(r|=B.includePlan),r|=B[e]??B.standard,r}function Ce(n){return[{key:"Mod-Enter",run:()=>(n(),!0)}]}const se=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),Be=Object.freeze({surface:"#0d0f12",panel:"#12161c",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",red:"#ff8ca3"}),M=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function Ve(n){return M.find(e=>e.id===n)||M[0]}function De(n){return`(def m (model/load-model :${n}))
(model/summary m)`}const Z="tiny-cnn",ae=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,Ue=`(def m (model/load-model :${Z}))
(model/summary m)`;function ze(n=Z){const e=Ve(n);return[{label:"Load + summary",source:`(def m (model/load-model :${e.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${e.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${e.defaultLayerIndex} size`,source:`(layer/tensor-size m ${e.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${e.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${e.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${e.defaultLayer}" {:bins 32})`}]}class Fe{constructor(e){this.prefix=e,this.nextId=1,this.resources=new Map}insert(e,r){const s=`${this.prefix}/${e}/${this.nextId++}`;return this.resources.set(s,{kind:e,value:r}),s}get(e,r=null){const s=this.resources.get(e);if(!s)throw new Error(`unknown resource handle ${e}`);if(r&&s.kind!==r)throw new Error(`resource ${e} has kind ${s.kind}, expected ${r}`);return s.value}}function qe(n){return new He(n).parse()}function E(n){return n==null?"nil":typeof n=="boolean"?String(n):typeof n=="number"?Number.isInteger(n)?String(n):String(Math.round(n*1e3)/1e3):typeof n=="string"?JSON.stringify(n):Y(n)?`:${n.name}`:ce(n)?n.name:Array.isArray(n)?`[${n.map(E).join(" ")}]`:`{${Object.entries(n).map(([e,r])=>`:${e} ${E(r)}`).join(" ")}}`}function We(n){return{type:"keyword",name:n}}function Ke(n){return{type:"symbol",name:n}}function Y(n){return!!(n&&typeof n=="object"&&n.type==="keyword")}function ce(n){return!!(n&&typeof n=="object"&&n.type==="symbol")}class He{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();return this.ws(),e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const r=this.form(),s=this.form();e[Ge(r)]=s}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return e;if(r==="\\"){const s=this.text[this.index++];e+=s==="n"?`
`:s}else e+=r}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(e,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?We(r.slice(1)):Ke(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function Ge(n){return Y(n)||ce(n)?n.name:String(n)}const W=Object.freeze(Object.fromEntries(M.map(n=>[n.id,`./models/${n.id}/model.json`])));class K extends Error{constructor(e){super(`model :${e} assets are not prepared`),this.modelId=e}}class Je{constructor(){this.resources=new Fe("browser"),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(e){const r=qe(e);this.lastTrace={requestText:e,request:r,responseText:"",packageName:r.package?.name||"unknown",exportName:r.export?.name||"unknown"};const s=this.route(r),a=E(s);return this.lastTrace.responseText=a,a}route(e){try{const r=e.package?.name,s=e.export?.name,a=e.args||[],i=this.invoke(r,s,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:r,exportName:s,argsCount:a.length,view:i?.view?.name||"scalar"},{status:m("ok"),value:i}}catch(r){const s=r instanceof K?{status:m("failed"),kind:m("asset-not-prepared"),model:m(r.modelId),recoverable:!0,message:r.message}:{status:m("failed"),kind:m("provider-error"),message:r.message};return r instanceof K&&(this.pendingAssetModel=r.modelId),this.lastValue=s,this.lastTrace={...this.lastTrace||{},status:"failed",error:r.message},s}}invoke(e,r,s){if(e==="demo.tfjs/model"&&r==="load-model")return this.loadNamedModel(H(s[0]));if(e==="demo.tfjs/model"&&r==="summary")return this.summary(s[0]);if(e==="demo.tfjs/model"&&r==="layer-count")return this.layerCount(s[0]);if(e==="demo.tfjs/model"&&r==="graph")return this.graph(s[0]);if(e==="demo.tfjs/layers"&&r==="by-kind")return this.layersByKind(s[0],H(s[1]));if(e==="demo.tfjs/layers"&&r==="top")return this.topLayers(s[0],s[1]||{});if(e==="demo.tfjs/layer"&&r==="inspect")return this.inspectLayer(s[0],s[1]);if(e==="demo.tfjs/layer"&&r==="tensor-size")return this.layerTensorSize(s[0],s[1]);if(e==="demo.tfjs/weights"&&r==="stats")return this.weightStats(s[0],s[1]);if(e==="demo.tfjs/weights"&&r==="histogram")return this.weightHistogram(s[0],s[1],s[2]||{});throw new Error(`unsupported capability ${e}/${r}`)}loadNamedModel(e){if(!W[e])throw new Error(`unknown model :${e}`);if(!this.catalog.has(e))throw new K(e);if(!this.modelIds.has(e)){const r=this.resources.insert("model",this.catalog.get(e));this.modelIds.set(e,r)}return this.modelIds.get(e)}async prepareModel(e){return this.loadModelNow(e)}isPrepared(e){return this.catalog.has(e)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(e){if(!W[e])throw new Error(`unknown model :${e}`);if(this.catalog.has(e))return this.catalog.get(e);const r=await Le(W[e]);return this.catalog.set(e,r),r}model(e){return this.resources.get(e,"model")}loadedModels(){return[...this.modelIds.entries()].map(([e,r])=>{const s=this.summary(r);return{id:e,handle:r,name:s.model,layers:s.layers,parameters:s.parameters,trainableParameters:s.trainableParameters,bytes:s.bytes,inputs:s.inputs,outputs:s.outputs}})}summary(e){const r=this.model(e),s=r.layers.map(N);return{view:m("model-summary"),model:r.name,handle:e,layers:s.length,parameters:T(s.map(a=>a.params)),trainableParameters:T(s.map(a=>a.trainableParams)),bytes:T(s.map(a=>a.bytes)),inputs:R(r.inputs?.[0]?.shape),outputs:R(r.outputs?.[0]?.shape),graph:ie(r),layerTable:s}}graph(e){return{view:m("graph"),graph:ie(this.model(e))}}layerCount(e){const r=this.model(e);return{view:m("numeric-aggregate"),label:"layer count",value:r.layers.length,unit:m("layers"),model:r.name,handle:e}}layersByKind(e,r){const s=this.model(e).layers.map(N).filter(a=>a.kind===r);return{view:m("layers-by-kind"),kind:m(r),count:s.length,layers:s}}topLayers(e,r){const s=Number(r.limit||5),i=H(r.by||m("params"))==="bytes"?"bytes":"params",l=this.model(e).layers.map(N).sort((d,c)=>c[i]-d[i]).slice(0,s);return{view:m("top-layers"),by:m(i),layers:l}}inspectLayer(e,r){const s=this.layerByName(e,r);return{view:m("layer-inspection"),layer:N(s),config:Ze(s.getConfig()),weights:s.weights.map(me)}}layerTensorSize(e,r){const{layer:s,index:a}=this.layerByRef(e,r),i=N(s,a);return{view:m("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:m("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(e,r){const s=this.layerByName(e,r);return{view:m("weight-stats"),layer:s.name,tensors:s.getWeights().map((a,i)=>Qe(s.weights[i],a))}}weightHistogram(e,r,s){const a=this.layerByName(e,r),i=Number(s.bins||24),l=a.getWeights().map((d,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:Xe(Array.from(d.dataSync()),i)}));return{view:m("weight-histogram"),layer:a.name,bins:i,tensors:l}}layerByName(e,r){const s=this.model(e).layers.find(a=>a.name===r);if(!s)throw new Error(`unknown layer ${r}`);return s}layerByRef(e,r){const s=this.model(e);if(typeof r=="number"){const l=Math.trunc(r)-1,d=s.layers[l];if(!d)throw new Error(`unknown layer index ${r}`);return{layer:d,index:l}}const a=String(r),i=s.layers.findIndex(l=>l.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:s.layers[i],index:i}}}function N(n,e=null){const r=n.weights.map(me);return{id:n.name,index:e??Ye(n),name:n.name,kind:n.getClassName().toLowerCase(),activation:n.getConfig().activation||"linear",input:R(n.inputShape),output:R(n.outputShape),params:T(r.map(s=>s.params)),trainableParams:T(r.filter(s=>s.trainable).map(s=>s.params)),bytes:T(r.map(s=>s.bytes))}}function ie(n){const e=n.layers.map((r,s)=>({...N(r,s),index:s}));return{nodes:e,edges:e.slice(1).map((r,s)=>({id:`${e[s].id}->${r.id}`,source:e[s].id,target:r.id}))}}function me(n){const e=n.shape.reduce((r,s)=>r*s,1);return{name:n.originalName,shape:R(n.shape),params:e,bytes:e*4,trainable:!!n.trainable}}function Qe(n,e){const r=Array.from(e.dataSync()),s=r.length,a=Math.min(...r),i=Math.max(...r),l=r.reduce((p,w)=>p+w,0)/s,d=r.reduce((p,w)=>p+(w-l)**2,0)/s,c=r.filter(p=>p===0).length;return{name:n?.originalName||"weight",shape:R(e.shape),params:s,min:b(a),max:b(i),mean:b(l),stddev:b(Math.sqrt(d)),sparsity:b(c/s)}}function Xe(n,e){const r=Math.min(...n),s=Math.max(...n),a=s===r?1:(s-r)/e,i=Array.from({length:e},(l,d)=>({start:b(r+d*a),end:b(r+(d+1)*a),count:0}));for(const l of n){const d=Math.min(e-1,Math.max(0,Math.floor((l-r)/a)));i[d].count+=1}return i}function Ze(n){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(r=>n[r]!==void 0).map(r=>[r,n[r]]))}function H(n){return Y(n)?n.name:typeof n=="string"?n:n?.name||String(n)}function m(n){return{type:"keyword",name:n}}function R(n){return n?Array.isArray(n)&&Array.isArray(n[0])?n[0].map(oe).join(" x "):n.map(oe).join(" x "):"?"}function oe(n){return n==null?"*":String(n)}function T(n){return n.reduce((e,r)=>e+r,0)}function b(n){return String(Math.round(n*1e5)/1e5)}function Ye(n){return Number(n._index??0)}const ue=`{:packages
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
                         :targets {:ras.wasm {:availability :available}}}}}}]}`,en=`import "@tensorflow/tfjs-backend-cpu";
import { loadLayersModel } from "@tensorflow/tfjs-layers";
import { BrowserResourceTable } from "@rasa/capability-bridge";
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
    if (packageName === "demo.tfjs/model" && exportName === "load-model") {
      return this.loadNamedModel(keywordName(args[0]));
    }
    if (packageName === "demo.tfjs/model" && exportName === "summary") {
      return this.summary(args[0]);
    }
    if (packageName === "demo.tfjs/model" && exportName === "layer-count") {
      return this.layerCount(args[0]);
    }
    if (packageName === "demo.tfjs/model" && exportName === "graph") {
      return this.graph(args[0]);
    }
    if (packageName === "demo.tfjs/layers" && exportName === "by-kind") {
      return this.layersByKind(args[0], keywordName(args[1]));
    }
    if (packageName === "demo.tfjs/layers" && exportName === "top") {
      return this.topLayers(args[0], args[1] || {});
    }
    if (packageName === "demo.tfjs/layer" && exportName === "inspect") {
      return this.inspectLayer(args[0], args[1]);
    }
    if (packageName === "demo.tfjs/layer" && exportName === "tensor-size") {
      return this.layerTensorSize(args[0], args[1]);
    }
    if (packageName === "demo.tfjs/weights" && exportName === "stats") {
      return this.weightStats(args[0], args[1]);
    }
    if (packageName === "demo.tfjs/weights" && exportName === "histogram") {
      return this.weightHistogram(args[0], args[1], args[2] || {});
    }
    throw new Error(\`unsupported capability \${packageName}/\${exportName}\`);
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
`,nn="./engine.wasm";function rn(){const n=o.useRef(null),e=o.useRef(null),r=o.useRef(0),s=o.useRef(null),a=o.useRef(!1),[i,l]=o.useState(Z),[d,c]=o.useState(Ue),[p,w]=o.useState("loading"),[I,L]=o.useState(!1),[O,U]=o.useState(0),[S,j]=o.useState(""),[_,$]=o.useState(null),[pe,ee]=o.useState([]),[ne,z]=o.useState([]),[ye,F]=o.useState(null),[fe,ge]=o.useState({}),[v,xe]=o.useState(null),[we,je]=o.useState(null),[P,be]=o.useState(null),[ve,re]=o.useState([]);o.useEffect(()=>{let u=!0;async function h(){try{const f=new Je,x=await fn(),g=await X.load(tn(),{hostCall:Me=>f.call(Me)}),y=g.createSession();g.loadPackage(y,ue);const C=g.evaluateSession(y,ae,D.all);if(!u)return;n.current=f,e.current=g,r.current=y,j(C),$(f.lastTrace),ee(f.loadedModels()),z(f.preparedModelIds()),ge(x),re([{id:"setup",kind:"setup",source:ae,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),w("ready")}catch(f){u&&w(`failed: ${f.message}`)}}return h(),()=>{u=!1,e.current&&r.current&&e.current.freeSession(r.current)}},[]);const ke=o.useCallback(async()=>{if(!e.current||!r.current||!n.current||a.current)return;a.current=!0,L(!0),F(null);const u=s.current?.state.doc.toString()||d,h=n.current;let f=S,x=null,g=null;try{f=de(e.current,r.current,h,u);const y=bn(h.lastValue);if(y){const C=y;F(C),await h.prepareModel(C),z(h.preparedModelIds()),h.pendingAssetModel=null,f=de(e.current,r.current,h,u)}x=h.lastValue,g=h.lastTrace}catch(y){x=jn("asset-load-error",y.message),g={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}j(f),xe(x),$(g),ee(h.loadedModels()),z(h.preparedModelIds()),F(null),x?.handle&&je(x.handle),U(y=>y+1),re(y=>[...y,{id:`run-${y.length}`,kind:"run",source:u,result:wn(x),capability:vn(g),view:g?.view||Q(x),status:g?.status||"ok"}]),L(!1),a.current=!1},[S,d]),A=o.useMemo(()=>gn(v),[v]),Ne=o.useMemo(()=>A.nodes.map((u,h)=>({id:u.id,position:{x:h%3*190,y:Math.floor(h/3)*142},data:{label:t.jsxs("div",{className:"node-label",children:[t.jsx("strong",{children:u.name}),t.jsx("span",{children:u.kind}),t.jsxs("em",{children:[u.params," params"]})]}),layer:u},type:"default",className:P===u.id?"selected-node":""})),[A.nodes,P]),Te=o.useMemo(()=>A.edges.map(u=>({...u,animated:!0})),[A.edges]);return t.jsxs("main",{className:"app-shell",style:Tn(),children:[t.jsxs("header",{className:"hero",children:[t.jsxs("div",{className:"brand-lockup",children:[t.jsx("img",{src:se.logo,alt:"Rasa"}),t.jsxs("div",{children:[t.jsx("span",{children:"Rasa Browser Demo"}),t.jsx("h1",{children:"Model architecture explorer"}),t.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),t.jsxs("div",{className:"hero-status",children:[t.jsx("img",{src:se.mark,alt:"","aria-hidden":"true"}),t.jsx("span",{className:p==="ready"?"ok":"warn",children:p}),t.jsx("span",{children:"tfjs assets on first run"}),t.jsx("span",{children:"static bundle"})]})]}),t.jsxs("section",{className:"workbench",children:[t.jsxs("section",{className:"source-column",children:[t.jsx("div",{className:"panel-head",children:t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa session"}),t.jsx("strong",{children:"Exploratory forms over model handles"})]})}),t.jsx(an,{entries:ve}),t.jsx(mn,{modelManifest:fe[i],modelId:i,compact:!0}),t.jsx(ln,{selectedModelId:i,setSelectedModelId:l,setSource:c,editorRef:s,prepared:ne.includes(i),preparing:ye===i}),t.jsx(sn,{source:d,editorRef:s,run:ke,setSource:c,disabled:p!=="ready"||I,running:I})]}),t.jsxs("section",{className:"graph-column",children:[t.jsxs("div",{className:"panel-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Architecture"}),t.jsxs("strong",{children:[A.nodes.length," layers from live TF.js objects"]})]}),t.jsxs("span",{className:"run-count",children:["run ",O]})]}),t.jsx(dn,{models:pe,activeHandle:we,preparedModelIds:ne}),t.jsx("div",{className:"graph-wrap",children:t.jsxs(Re,{nodes:Ne,edges:Te,fitView:!0,fitViewOptions:{padding:.18,maxZoom:1.1},onNodeClick:(u,h)=>be(h.id),children:[t.jsx(Se,{color:"#29313d",gap:18}),t.jsx(_e,{showInteractive:!1})]})}),t.jsx(un,{value:v,selectedLayer:P})]}),t.jsxs("aside",{className:"inspector-column",children:[t.jsx("div",{className:"panel-head",children:t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Inspection"}),t.jsx("strong",{children:Q(v)})]})}),t.jsx(cn,{value:v,trace:_}),t.jsx(hn,{value:v,selectedLayer:P}),t.jsxs("details",{className:"runtime-report",children:[t.jsx("summary",{children:"Runtime report"}),t.jsx("pre",{children:S})]})]})]})]})}function tn(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||nn}function sn({source:n,editorRef:e,run:r,setSource:s,disabled:a,running:i}){const l=o.useRef(null);return o.useEffect(()=>{const d=new q({parent:l.current,state:$e.create({doc:n,extensions:[Ae(),Ie.of(Ce(r)),q.lineWrapping,q.updateListener.of(c=>{c.docChanged&&s(c.state.doc.toString())})]})});return e.current=d,()=>d.destroy()},[]),t.jsxs("div",{className:"editor-panel",children:[t.jsx("div",{className:"editor-host",ref:l}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("span",{children:"Primary+Enter runs; first model load may fetch assets"}),t.jsx("button",{type:"button",onClick:r,disabled:a,children:i?"Running...":"Run"})]})]})}function an({entries:n}){const e=o.useRef(null);return o.useEffect(()=>{e.current&&(e.current.scrollTop=e.current.scrollHeight)},[n.length]),t.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:e,children:n.length?n.map(r=>t.jsx(on,{entry:r},r.id)):t.jsxs("article",{className:"transcript-entry",children:[t.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),t.jsx("pre",{className:"transcript-result",children:"=> waiting for browser Wasm engine"})]})})}function on({entry:n}){return t.jsxs("article",{className:`transcript-entry ${n.kind}`,children:[t.jsx("pre",{className:"transcript-form",children:n.source}),n.result&&t.jsx("pre",{className:"transcript-result",children:n.result}),t.jsxs("div",{className:"transcript-meta",children:[t.jsx("span",{children:n.capability||"session"}),t.jsx("span",{children:n.view}),t.jsx("span",{children:n.status})]})]})}function ln({selectedModelId:n,setSelectedModelId:e,setSource:r,editorRef:s,prepared:a,preparing:i}){const l=ze(n),d=c=>{const p=c.target.value;e(p),le(De(p),r,s)};return t.jsxs("div",{className:"example-rail",children:[t.jsxs("label",{className:"model-picker",children:[t.jsx("span",{children:"Model"}),t.jsx("select",{value:n,onChange:d,children:M.map(c=>t.jsx("option",{value:c.id,children:c.title},c.id))})]}),t.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"}),l.map(c=>t.jsx("button",{type:"button",onClick:()=>le(c.source,r,s),children:c.label},c.label))]})}function dn({models:n,activeHandle:e,preparedModelIds:r}){const s=e?n.find(a=>a.handle===e):null;return t.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[s?t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:s.name})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"id"}),t.jsx("dd",{children:s.id})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"handle"}),t.jsx("dd",{children:s.handle})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"layers"}),t.jsx("dd",{children:s.layers})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:s.parameters})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"size"}),t.jsx("dd",{children:Nn(s.bytes||0)})]})]})]},s.handle||s.id):t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:"none yet"})]}),t.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),t.jsxs("div",{className:"catalog-note",children:[M.length," static catalog models are available. ",r.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function cn({value:n,trace:e}){const r=kn(n);return t.jsxs("section",{className:"projection-card",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Projection"}),t.jsx("strong",{children:r.renderer}),t.jsx("p",{children:r.reason})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"Rasa view"}),t.jsx("dd",{children:n?.view?.name?`:${n.view.name}`:"none yet"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Capability"}),t.jsx("dd",{children:e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Status"}),t.jsx("dd",{children:e?.status||"waiting"})]})]})]})}function mn({modelManifest:n,modelId:e,compact:r=!1}){return t.jsxs("section",{className:`extension-panel ${r?"compact":""}`,children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Open the extension"}),t.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),t.jsx(G,{title:"Rasa package bundle",text:ue}),t.jsx(G,{title:"Browser provider source",text:en}),t.jsx(G,{title:`TF.js model manifest${e?` :${e}`:""}`,text:n?JSON.stringify(n,null,2):"loading model manifest"})]})}function G({title:n,text:e}){return t.jsxs("details",{className:"code-disclosure",children:[t.jsx("summary",{children:n}),t.jsx("pre",{children:e})]})}function un({value:n,selectedLayer:e}){const r=n?.view?.name==="model-summary"?n:null;return t.jsxs("div",{className:"result-strip",children:[t.jsx(J,{label:"Result",value:Q(n)}),t.jsx(J,{label:"Parameters",value:r?.parameters??"from query"}),t.jsx(J,{label:"Selected",value:e||"none"})]})}function hn({value:n,selectedLayer:e}){if(!n)return t.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(n.status==="failed")return t.jsx("pre",{className:"data-block",children:E(n)});if(n.view?.name==="weight-histogram")return t.jsx(pn,{value:n});if(n.view?.name==="weight-stats")return t.jsx(yn,{value:n});const r=e?xn(n,e):null;return t.jsxs("div",{className:"inspection-stack",children:[r&&t.jsx(V,{layer:r}),Array.isArray(n.layers)&&n.layers.map(s=>t.jsx(V,{layer:s},s.id)),Array.isArray(n.layerTable)&&n.layerTable.map(s=>t.jsx(V,{layer:s,compact:!0},s.id)),n.layer&&t.jsx(V,{layer:n.layer}),t.jsx(he,{value:n})]})}function pn({value:n}){const e=n.tensors?.[0],r=Math.max(...(e?.bins||[]).map(s=>s.count),1);return t.jsxs("div",{className:"inspection-stack",children:[t.jsx("h2",{children:n.layer}),t.jsx("div",{className:"histogram",children:(e?.bins||[]).map((s,a)=>t.jsx("div",{style:{height:`${8+s.count/r*150}px`},title:`${s.start}..${s.end}: ${s.count}`},a))}),t.jsx(he,{value:n})]})}function yn({value:n}){return t.jsx("div",{className:"inspection-stack",children:n.tensors.map(e=>t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:e.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"shape"}),t.jsx("dd",{children:e.shape})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"mean"}),t.jsx("dd",{children:e.mean})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"stddev"}),t.jsx("dd",{children:e.stddev})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"range"}),t.jsxs("dd",{children:[e.min,"..",e.max]})]})]})]},e.name))})}function he({value:n}){return t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Returned Rasa data"}),t.jsx("pre",{className:"data-block",children:E(n)})]})}function V({layer:n,compact:e=!1}){return t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:n.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"kind"}),t.jsx("dd",{children:n.kind})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"output"}),t.jsx("dd",{children:n.output})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:n.params})]}),!e&&t.jsxs("div",{children:[t.jsx("dt",{children:"bytes"}),t.jsx("dd",{children:n.bytes})]})]})]})}function J({label:n,value:e}){return t.jsxs("article",{className:"metric",children:[t.jsx("span",{children:n}),t.jsx("strong",{children:e})]})}function le(n,e,r){e(n);const s=r.current;s&&(s.dispatch({changes:{from:0,to:s.state.doc.length,insert:n},selection:{anchor:n.length},scrollIntoView:!0}),s.focus())}async function fn(){const n=await Promise.all(M.map(async e=>[e.id,await fetch(`./models/${e.id}/model.json`).then(r=>r.json())]));return Object.fromEntries(n)}function gn(n){const e=n?.graph||(n?.view?.name==="model-summary"?n.graph:null);return e?.nodes?.length?e:Array.isArray(n?.layerTable)?{nodes:n.layerTable,edges:n.layerTable.slice(1).map((r,s)=>({id:`${n.layerTable[s].id}->${r.id}`,source:n.layerTable[s].id,target:r.id}))}:{nodes:[],edges:[]}}function xn(n,e){return n?.layerTable?.find(r=>r.id===e)||n?.layers?.find(r=>r.id===e)}function Q(n){return n?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function wn(n){return n?`=> ${E(n)}`:"=> nil"}function de(n,e,r,s){return r.lastValue=null,r.lastTrace=null,r.pendingAssetModel=null,n.evaluateSession(e,s,D.all)}function jn(n,e){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:n},message:e}}function bn(n){return n?.status?.name==="failed"&&n?.kind?.name==="asset-not-prepared"&&n?.recoverable===!0&&n?.model?.name?n.model.name:null}function vn(n){return n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:null}function kn(n){const e=n?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[e]||{renderer:n?"Returned Rasa data":"Waiting for result",reason:n?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Nn(n){return n?n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(1)} MB`:"0 B"}function Tn(){return Object.fromEntries(Object.entries(Be).map(([n,e])=>[`--${n}`,e]))}Ee.createRoot(document.getElementById("root")).render(t.jsx(rn,{}));
