import{b as He,j as s,r as o}from"./react.js";import{i as Ge,B as Je,C as Qe}from"./graph.js";import{E as ie,a as Xe,d as Ze,k as Ye}from"./editor.js";import{l as et}from"./tfjs.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const X=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),tt=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],H=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class me{static async load(e,n={}){const r=await fetch(e);if(!r.ok)throw new Error(`failed to load Rasa engine: ${r.status}`);const a=await r.arrayBuffer();let i=null;const l=n.imports||{},d=n.hostCall||null,c={rasa_host_call(){return 1},...l.env||{}};d&&(c.rasa_host_call=(B,z,S)=>{try{const Z=new Uint8Array(i.memory.buffer,B,z),Y=d(je(Z)),k=A(Y),D=i.rasa_alloc(k.length);if(D===0&&k.length>0)return 2;new Uint8Array(i.memory.buffer,D,k.length).set(k);const E=new DataView(i.memory.buffer);return E.setUint32(S,D,!0),E.setUint32(S+4,k.length,!0),0}catch{return 1}});const{instance:m,module:b}=await WebAssembly.instantiate(a,{...l,env:c});return i=m.exports,new me(m.exports,b)}constructor(e,n=null,r=tt){for(const a of r)if(!e[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(e.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=e,this.module=n}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(e,n=X.all){return this.callText("rasa_eval_source",A(e),n)}inspect(e,n={}){return JSON.parse(this.callText("rasa_inspect_source",A(e),nt(n)))}syntaxTokens(e){return JSON.parse(this.callText("rasa_syntax_tokens",A(e)))}callText(e,n,r=void 0){return this.callInput(n,(a,i)=>r===void 0?this.exports[e](a,i):this.exports[e](a,i,r))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(e){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(e)}loadPackage(e,n){return this.requireExport("rasa_session_load_package"),this.callInput(A(n),(r,a)=>this.exports.rasa_session_load_package(e,r,a))}evaluateSession(e,n,r=X.all){return this.requireExport("rasa_session_eval"),this.callInput(A(n),(a,i)=>this.exports.rasa_session_eval(e,a,i,r))}callInput(e,n){const r=this.exports.rasa_alloc(e.length);if(r===0&&e.length>0)throw new Error("Rasa engine allocation failed");e.length>0&&new Uint8Array(this.exports.memory.buffer,r,e.length).set(e);const a=n(r,e.length);if(this.exports.rasa_free(r,e.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(e){if(!this.exports[e])throw new Error(`missing Rasa Wasm export ${e}`)}readReport(e){const n=this.exports.rasa_report_ptr(e),r=this.exports.rasa_report_len(e);if(n===0||r===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,n,r);return je(a)}}function A(t){return new TextEncoder().encode(t)}function je(t){return new TextDecoder("utf-8",{fatal:!0}).decode(t)}function nt(t={}){const e=t.detail||"standard";let n=0;return t.includeEval!==!1&&(n|=H.includeEval),t.includePlan!==!1&&(n|=H.includePlan),n|=H[e]??H.standard,n}function st(t){return[{key:"Mod-Enter",run:()=>(t(),!0)}]}const be=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),rt=Object.freeze({surface:"#0d0f12",panel:"#12161c",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",red:"#ff8ca3"}),M=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function at(t){return M.find(e=>e.id===t)||M[0]}function it(t){return`(def m (model/load-model :${t}))
(model/summary m)`}const he="tiny-cnn",ve=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,ot=`(def m (model/load-model :${he}))
(model/summary m)`;function lt(t=he){const e=at(t);return[{label:"Load + summary",source:`(def m (model/load-model :${e.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${e.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${e.defaultLayerIndex} size`,source:`(layer/tensor-size m ${e.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${e.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${e.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${e.defaultLayer}" {:bins 32})`}]}class dt{constructor(e){this.prefix=e,this.nextId=1,this.resources=new Map}insert(e,n){const r=`${this.prefix}/${e}/${this.nextId++}`;return this.resources.set(r,{kind:e,value:n}),r}get(e,n=null){const r=this.resources.get(e);if(!r)throw new Error(`unknown resource handle ${e}`);if(n&&r.kind!==n)throw new Error(`resource ${e} has kind ${r.kind}, expected ${n}`);return r.value}}function ct(t){return new ht(t).parse()}function P(t){return t==null?"nil":typeof t=="boolean"?String(t):typeof t=="number"?Number.isInteger(t)?String(t):String(Math.round(t*1e3)/1e3):typeof t=="string"?JSON.stringify(t):pe(t)?`:${t.name}`:Te(t)?t.name:Array.isArray(t)?`[${t.map(P).join(" ")}]`:`{${Object.entries(t).map(([e,n])=>`:${e} ${P(n)}`).join(" ")}}`}function ut(t){return{type:"keyword",name:t}}function mt(t){return{type:"symbol",name:t}}function pe(t){return!!(t&&typeof t=="object"&&t.type==="keyword")}function Te(t){return!!(t&&typeof t=="object"&&t.type==="symbol")}class ht{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();return this.ws(),e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const n=this.form(),r=this.form();e[pt(n)]=r}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const n=this.text[this.index++];if(n==='"')return e;if(n==="\\"){const r=this.text[this.index++];e+=r==="n"?`
`:r}else e+=n}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const n=this.text.slice(e,this.index);if(!n)throw new Error(`expected form at byte ${this.index}`);return n==="nil"?null:n==="true"?!0:n==="false"?!1:/^-?\d+(\.\d+)?$/.test(n)?Number(n):n.startsWith(":")?ut(n.slice(1)):mt(n)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function pt(t){return pe(t)||Te(t)?t.name:String(t)}const oe=Object.freeze(Object.fromEntries(M.map(t=>[t.id,`./models/${t.id}/model.json`])));class le extends Error{constructor(e){super(`model :${e} assets are not prepared`),this.modelId=e}}class yt{constructor(){this.resources=new dt("browser"),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null,this.pendingAssetModel=null}call(e){const n=ct(e);this.lastTrace={requestText:e,request:n,responseText:"",packageName:n.package?.name||"unknown",exportName:n.export?.name||"unknown"};const r=this.route(n),a=P(r);return this.lastTrace.responseText=a,a}route(e){try{const n=e.package?.name,r=e.export?.name,a=e.args||[],i=this.invoke(n,r,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:n,exportName:r,argsCount:a.length,view:i?.view?.name||"scalar"},{status:u("ok"),value:i}}catch(n){const r=n instanceof le?{status:u("failed"),kind:u("asset-not-prepared"),model:u(n.modelId),recoverable:!0,message:n.message}:{status:u("failed"),kind:u("provider-error"),message:n.message};return n instanceof le&&(this.pendingAssetModel=n.modelId),this.lastValue=r,this.lastTrace={...this.lastTrace||{},status:"failed",error:n.message},r}}invoke(e,n,r){if(e==="demo.tfjs/model"&&n==="load-model")return this.loadNamedModel(de(r[0]));if(e==="demo.tfjs/model"&&n==="summary")return this.summary(r[0]);if(e==="demo.tfjs/model"&&n==="layer-count")return this.layerCount(r[0]);if(e==="demo.tfjs/model"&&n==="graph")return this.graph(r[0]);if(e==="demo.tfjs/layers"&&n==="by-kind")return this.layersByKind(r[0],de(r[1]));if(e==="demo.tfjs/layers"&&n==="top")return this.topLayers(r[0],r[1]||{});if(e==="demo.tfjs/layer"&&n==="inspect")return this.inspectLayer(r[0],r[1]);if(e==="demo.tfjs/layer"&&n==="tensor-size")return this.layerTensorSize(r[0],r[1]);if(e==="demo.tfjs/weights"&&n==="stats")return this.weightStats(r[0],r[1]);if(e==="demo.tfjs/weights"&&n==="histogram")return this.weightHistogram(r[0],r[1],r[2]||{});throw new Error(`unsupported capability ${e}/${n}`)}loadNamedModel(e){if(!oe[e])throw new Error(`unknown model :${e}`);if(!this.catalog.has(e))throw new le(e);if(!this.modelIds.has(e)){const n=this.resources.insert("model",this.catalog.get(e));this.modelIds.set(e,n)}return this.modelIds.get(e)}async prepareModel(e){return this.loadModelNow(e)}isPrepared(e){return this.catalog.has(e)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(e){if(!oe[e])throw new Error(`unknown model :${e}`);if(this.catalog.has(e))return this.catalog.get(e);const n=await et(oe[e]);return this.catalog.set(e,n),n}model(e){return this.resources.get(e,"model")}loadedModels(){return[...this.modelIds.entries()].map(([e,n])=>{const r=this.summary(n);return{id:e,handle:n,name:r.model,layers:r.layers,parameters:r.parameters,trainableParameters:r.trainableParameters,bytes:r.bytes,inputs:r.inputs,outputs:r.outputs}})}summary(e){const n=this.model(e),r=n.layers.map(I);return{view:u("model-summary"),model:n.name,handle:e,layers:r.length,parameters:O(r.map(a=>a.params)),trainableParameters:O(r.map(a=>a.trainableParams)),bytes:O(r.map(a=>a.bytes)),inputs:C(n.inputs?.[0]?.shape),outputs:C(n.outputs?.[0]?.shape),graph:ke(n),layerTable:r}}graph(e){return{view:u("graph"),graph:ke(this.model(e))}}layerCount(e){const n=this.model(e);return{view:u("numeric-aggregate"),label:"layer count",value:n.layers.length,unit:u("layers"),model:n.name,handle:e}}layersByKind(e,n){const r=this.model(e).layers.map(I).filter(a=>a.kind===n);return{view:u("layers-by-kind"),kind:u(n),count:r.length,layers:r}}topLayers(e,n){const r=Number(n.limit||5),i=de(n.by||u("params"))==="bytes"?"bytes":"params",l=this.model(e).layers.map(I).sort((d,c)=>c[i]-d[i]).slice(0,r);return{view:u("top-layers"),by:u(i),layers:l}}inspectLayer(e,n){const r=this.layerByName(e,n);return{view:u("layer-inspection"),layer:I(r),config:xt(r.getConfig()),weights:r.weights.map(Re)}}layerTensorSize(e,n){const{layer:r,index:a}=this.layerByRef(e,n),i=I(r,a);return{view:u("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:u("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(e,n){const r=this.layerByName(e,n);return{view:u("weight-stats"),layer:r.name,tensors:r.getWeights().map((a,i)=>ft(r.weights[i],a))}}weightHistogram(e,n,r){const a=this.layerByName(e,n),i=Number(r.bins||24),l=a.getWeights().map((d,c)=>({name:a.weights[c]?.originalName||`weight_${c}`,bins:gt(Array.from(d.dataSync()),i)}));return{view:u("weight-histogram"),layer:a.name,bins:i,tensors:l}}layerByName(e,n){const r=this.model(e).layers.find(a=>a.name===n);if(!r)throw new Error(`unknown layer ${n}`);return r}layerByRef(e,n){const r=this.model(e);if(typeof n=="number"){const l=Math.trunc(n)-1,d=r.layers[l];if(!d)throw new Error(`unknown layer index ${n}`);return{layer:d,index:l}}const a=String(n),i=r.layers.findIndex(l=>l.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:r.layers[i],index:i}}}function I(t,e=null){const n=t.weights.map(Re);return{id:t.name,index:e??wt(t),name:t.name,kind:t.getClassName().toLowerCase(),activation:t.getConfig().activation||"linear",input:C(t.inputShape),output:C(t.outputShape),params:O(n.map(r=>r.params)),trainableParams:O(n.filter(r=>r.trainable).map(r=>r.params)),bytes:O(n.map(r=>r.bytes))}}function ke(t){const e=t.layers.map((n,r)=>({...I(n,r),index:r}));return{nodes:e,edges:e.slice(1).map((n,r)=>({id:`${e[r].id}->${n.id}`,source:e[r].id,target:n.id}))}}function Re(t){const e=t.shape.reduce((n,r)=>n*r,1);return{name:t.originalName,shape:C(t.shape),params:e,bytes:e*4,trainable:!!t.trainable}}function ft(t,e){const n=Array.from(e.dataSync()),r=n.length,a=Math.min(...n),i=Math.max(...n),l=n.reduce((m,b)=>m+b,0)/r,d=n.reduce((m,b)=>m+(b-l)**2,0)/r,c=n.filter(m=>m===0).length;return{name:t?.originalName||"weight",shape:C(e.shape),params:r,min:N(a),max:N(i),mean:N(l),stddev:N(Math.sqrt(d)),sparsity:N(c/r)}}function gt(t,e){const n=Math.min(...t),r=Math.max(...t),a=r===n?1:(r-n)/e,i=Array.from({length:e},(l,d)=>({start:N(n+d*a),end:N(n+(d+1)*a),count:0}));for(const l of t){const d=Math.min(e-1,Math.max(0,Math.floor((l-n)/a)));i[d].count+=1}return i}function xt(t){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(n=>t[n]!==void 0).map(n=>[n,t[n]]))}function de(t){return pe(t)?t.name:typeof t=="string"?t:t?.name||String(t)}function u(t){return{type:"keyword",name:t}}function C(t){return t?Array.isArray(t)&&Array.isArray(t[0])?t[0].map(Ne).join(" x "):t.map(Ne).join(" x "):"?"}function Ne(t){return t==null?"*":String(t)}function O(t){return t.reduce((e,n)=>e+n,0)}function N(t){return String(Math.round(t*1e5)/1e5)}function wt(t){return Number(t._index??0)}const _e=`{:packages
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
                         :targets {:ras.wasm {:availability :available}}}}}}]}`,jt=`import "@tensorflow/tfjs-backend-cpu";
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
`,bt="./engine.wasm";function vt(){const t=o.useRef(null),e=o.useRef(null),n=o.useRef(0),r=o.useRef(null),a=o.useRef(!1),[i,l]=o.useState(he),[d,c]=o.useState(ot),[m,b]=o.useState("loading"),[B,z]=o.useState(!1),[S,Z]=o.useState(0),[Y,k]=o.useState(null),[D,E]=o.useState(null),[ee,ye]=o.useState(""),[Ae,fe]=o.useState(null),[Ie,ge]=o.useState([]),[te,ne]=o.useState([]),[Le,se]=o.useState(null),[Oe,Pe]=o.useState({}),[T,Ce]=o.useState(null),[Be,De]=o.useState(null),[F,Ve]=o.useState(null),[Ue,xe]=o.useState([]);o.useEffect(()=>{let p=!0;async function h(){try{const R=j(),g=new yt,f=j(),y=await Pt(),_=w(f),q=j(),x=await me.load(kt(),{hostCall:v=>g.call(v)}),U=w(q),$=x.createSession(),W=j();x.loadPackage($,_e);const K=x.evaluateSession($,ve,X.all),re=w(W);if(!p)return;t.current=g,e.current=x,n.current=$,ye(K),fe(g.lastTrace),ge(g.loadedModels()),ne(g.preparedModelIds()),Pe(y),k({manifestMs:_,engineMs:U,setupMs:re,totalMs:w(R)}),xe([{id:"setup",kind:"setup",source:ve,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),b("ready")}catch(R){p&&b(`failed: ${R.message}`)}}return h(),()=>{p=!1,e.current&&n.current&&e.current.freeSession(n.current)}},[]);const ze=o.useCallback(async()=>{if(!e.current||!n.current||!t.current||a.current)return;a.current=!0,z(!0),se(null);const p=r.current?.state.doc.toString()||d,h=t.current,R=j();let g=ee,f=null,y=null,_=null,q=0,x=0,U=0,$=!1;E({status:"running",assetState:"checking",totalMs:0});try{const v=j();g=Se(e.current,n.current,h,p),x=w(v);const we=Ut(h);if(we){const ae=we;_=ae,se(ae),E({status:"running",assetState:"fetching",assetModel:_,firstEvalMs:x,totalMs:w(R)});const We=j();await h.prepareModel(ae),q=w(We),ne(h.preparedModelIds()),h.pendingAssetModel=null;const Ke=j();g=Se(e.current,n.current,h,p),U=w(Ke)}else U=x;f=h.lastValue,y=h.lastTrace}catch(v){$=!0,f=Vt("asset-load-error",v.message),y={status:"failed",packageName:"browser asset loader",exportName:"prepare-model",view:"asset-load-error"}}finally{a.current=!1,z(!1)}const W=w(R),K=S+1,re={run:K,status:y?.status||"ok",capability:Ee(y),view:y?.view||Q(f),assetState:$?"failed":_?"fetched":"cached",assetModel:_,assetLoadMs:q,firstEvalMs:x,finalEvalMs:U,totalMs:W,cacheCount:h.preparedModelIds().length};ye(g),Ce(f),fe(y),ge(h.loadedModels()),ne(h.preparedModelIds()),se(null),E(re),f?.handle&&De(f.handle),Z(K),xe(v=>[...v,{id:`run-${v.length}`,kind:"run",source:p,result:Dt(f),capability:Ee(y),view:y?.view||Q(f),status:y?.status||"ok",durationMs:W}])},[S,ee,d]),V=o.useMemo(()=>Ct(T),[T]),Fe=o.useMemo(()=>V.nodes.map((p,h)=>({id:p.id,position:{x:h%3*190,y:Math.floor(h/3)*142},data:{label:s.jsxs("div",{className:"node-label",children:[s.jsx("strong",{children:p.name}),s.jsx("span",{children:p.kind}),s.jsxs("em",{children:[p.params," params"]})]}),layer:p},type:"default",className:F===p.id?"selected-node":""})),[V.nodes,F]),qe=o.useMemo(()=>V.edges.map(p=>({...p,animated:!0})),[V.edges]);return s.jsxs("main",{className:"app-shell",style:qt(),children:[s.jsxs("header",{className:"hero",children:[s.jsxs("div",{className:"brand-lockup",children:[s.jsx("img",{src:be.logo,alt:"Rasa"}),s.jsxs("div",{children:[s.jsx("span",{children:"Rasa Browser Demo"}),s.jsx("h1",{children:"Model architecture explorer"}),s.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),s.jsxs("div",{className:"hero-status",children:[s.jsx("img",{src:be.mark,alt:"","aria-hidden":"true"}),s.jsx("span",{className:m==="ready"?"ok":"warn",children:m}),s.jsx("span",{children:"tfjs assets on first run"}),s.jsx("span",{children:"static bundle"})]})]}),s.jsxs("section",{className:"workbench",children:[s.jsxs("section",{className:"source-column",children:[s.jsx("div",{className:"panel-head",children:s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Rasa session"}),s.jsx("strong",{children:"Exploratory forms over model handles"})]})}),s.jsx(Mt,{entries:Ue}),s.jsx($t,{modelManifest:Oe[i],modelId:i,compact:!0}),s.jsx(Et,{selectedModelId:i,setSelectedModelId:l,setSource:c,editorRef:r,prepared:te.includes(i),preparing:Le===i}),s.jsx(Nt,{source:d,editorRef:r,run:ze,setSource:c,disabled:m!=="ready"||B,running:B})]}),s.jsxs("section",{className:"graph-column",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Architecture"}),s.jsxs("strong",{children:[V.nodes.length," layers from live TF.js objects"]})]}),s.jsxs("span",{className:"run-count",children:["run ",S]})]}),s.jsx(Tt,{models:Ie,activeHandle:Be,preparedModelIds:te}),s.jsx(Rt,{bootMetrics:Y,runMetrics:D,preparedModelIds:te,running:B}),s.jsx("div",{className:"graph-wrap",children:s.jsxs(Ge,{nodes:Fe,edges:qe,fitView:!0,fitViewOptions:{padding:.18,maxZoom:1.1},onNodeClick:(p,h)=>Ve(h.id),children:[s.jsx(Je,{color:"#29313d",gap:18}),s.jsx(Qe,{showInteractive:!1})]})}),s.jsx(At,{value:T,selectedLayer:F})]}),s.jsxs("aside",{className:"inspector-column",children:[s.jsx("div",{className:"panel-head",children:s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Inspection"}),s.jsx("strong",{children:Q(T)})]})}),s.jsx(_t,{value:T,trace:Ae}),s.jsx(It,{value:T,selectedLayer:F}),s.jsxs("details",{className:"runtime-report",children:[s.jsx("summary",{children:"Runtime report"}),s.jsx("pre",{children:ee})]})]})]})]})}function kt(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||bt}function Nt({source:t,editorRef:e,run:n,setSource:r,disabled:a,running:i}){const l=o.useRef(null),d=o.useRef(n);return o.useEffect(()=>{d.current=n},[n]),o.useEffect(()=>{const c=new ie({parent:l.current,state:Xe.create({doc:t,extensions:[Ze(),Ye.of(st(()=>d.current())),ie.lineWrapping,ie.updateListener.of(m=>{m.docChanged&&r(m.state.doc.toString())})]})});return e.current=c,()=>c.destroy()},[]),s.jsxs("div",{className:"editor-panel",children:[s.jsx("div",{className:"editor-host",ref:l}),s.jsxs("div",{className:"editor-actions",children:[s.jsx("span",{children:"Primary+Enter runs; first model load may fetch assets"}),s.jsx("button",{type:"button",onClick:n,disabled:a,children:i?"Running...":"Run"})]})]})}function Mt({entries:t}){const e=o.useRef(null);return o.useEffect(()=>{e.current&&(e.current.scrollTop=e.current.scrollHeight)},[t.length]),s.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:e,children:t.length?t.map(n=>s.jsx(St,{entry:n},n.id)):s.jsxs("article",{className:"transcript-entry",children:[s.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),s.jsx("pre",{className:"transcript-result",children:"=> waiting for browser Wasm engine"})]})})}function St({entry:t}){return s.jsxs("article",{className:`transcript-entry ${t.kind}`,children:[s.jsx("pre",{className:"transcript-form",children:t.source}),t.result&&s.jsx("pre",{className:"transcript-result",children:t.result}),s.jsxs("div",{className:"transcript-meta",children:[s.jsx("span",{children:t.capability||"session"}),s.jsx("span",{children:t.view}),s.jsx("span",{children:t.status}),t.durationMs!==void 0&&s.jsx("span",{children:L(t.durationMs)})]})]})}function Et({selectedModelId:t,setSelectedModelId:e,setSource:n,editorRef:r,prepared:a,preparing:i}){const l=lt(t),d=c=>{const m=c.target.value;e(m),Me(it(m),n,r)};return s.jsxs("div",{className:"example-rail",children:[s.jsxs("label",{className:"model-picker",children:[s.jsx("span",{children:"Model"}),s.jsx("select",{value:t,onChange:d,children:M.map(c=>s.jsx("option",{value:c.id,children:c.title},c.id))})]}),s.jsx("span",{className:a?"asset-state ready":i?"asset-state loading":"asset-state",children:a?"assets cached":i?"fetching assets":"assets load on run"}),l.map(c=>s.jsx("button",{type:"button",onClick:()=>Me(c.source,n,r),children:c.label},c.label))]})}function Tt({models:t,activeHandle:e,preparedModelIds:n}){const r=e?t.find(a=>a.handle===e):null;return s.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[r?s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:r.name})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"id"}),s.jsx("dd",{children:r.id})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"handle"}),s.jsx("dd",{children:r.handle})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"layers"}),s.jsx("dd",{children:r.layers})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:r.parameters})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"size"}),s.jsx("dd",{children:Ft(r.bytes||0)})]})]})]},r.handle||r.id):s.jsxs("article",{className:"active-model",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Active model"}),s.jsx("strong",{children:"none yet"})]}),s.jsx("p",{children:"Run a Rasa load expression to fetch model assets and bind `m` to a model handle."})]}),s.jsxs("div",{className:"catalog-note",children:[M.length," static catalog models are available. ",n.length," asset set(s) cached in this browser session; handles appear only after a Rasa load expression runs."]})]})}function Rt({bootMetrics:t,runMetrics:e,preparedModelIds:n,running:r}){const a=r?"running":e?.status||"idle",i=r&&!e?.totalMs?"running":e?L(e.totalMs):"not yet",l=e?.assetState==="fetching"?"fetching":`${n.length}/${M.length} cached`,d=e?.assetModel?`:${e.assetModel} ${L(e.assetLoadMs)}`:"no eager weights";return s.jsxs("section",{className:"execution-panel","aria-label":"Execution telemetry",children:[s.jsx(G,{label:"Boot",value:t?L(t.totalMs):"starting",detail:t?`engine ${L(t.engineMs)}`:"loading Wasm"}),s.jsx(G,{label:"Run",value:i,detail:e?.capability||"waiting for Rasa form",state:a}),s.jsx(G,{label:"Assets",value:l,detail:d}),s.jsx(G,{label:"Eval",value:e?L(e.finalEvalMs):"not yet",detail:e?.view?`:${e.view}`:"session ready"})]})}function G({label:t,value:e,detail:n,state:r}){return s.jsxs("article",{className:`execution-metric ${r||""}`,children:[s.jsx("span",{children:t}),s.jsx("strong",{children:e}),s.jsx("em",{children:n})]})}function _t({value:t,trace:e}){const n=zt(t);return s.jsxs("section",{className:"projection-card",children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Projection"}),s.jsx("strong",{children:n.renderer}),s.jsx("p",{children:n.reason})]}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"Rasa view"}),s.jsx("dd",{children:t?.view?.name?`:${t.view.name}`:"none yet"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Capability"}),s.jsx("dd",{children:e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:"waiting"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Status"}),s.jsx("dd",{children:e?.status||"waiting"})]})]})]})}function $t({modelManifest:t,modelId:e,compact:n=!1}){return s.jsxs("section",{className:`extension-panel ${n?"compact":""}`,children:[s.jsxs("div",{children:[s.jsx("span",{className:"label",children:"Open the extension"}),s.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),s.jsx(ce,{title:"Rasa package bundle",text:_e}),s.jsx(ce,{title:"Browser provider source",text:jt}),s.jsx(ce,{title:`TF.js model manifest${e?` :${e}`:""}`,text:t?JSON.stringify(t,null,2):"loading model manifest"})]})}function ce({title:t,text:e}){return s.jsxs("details",{className:"code-disclosure",children:[s.jsx("summary",{children:t}),s.jsx("pre",{children:e})]})}function At({value:t,selectedLayer:e}){const n=t?.view?.name==="model-summary"?t:null;return s.jsxs("div",{className:"result-strip",children:[s.jsx(ue,{label:"Result",value:Q(t)}),s.jsx(ue,{label:"Parameters",value:n?.parameters??"from query"}),s.jsx(ue,{label:"Selected",value:e||"none"})]})}function It({value:t,selectedLayer:e}){if(!t)return s.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(t.status==="failed")return s.jsx("pre",{className:"data-block",children:P(t)});if(t.view?.name==="weight-histogram")return s.jsx(Lt,{value:t});if(t.view?.name==="weight-stats")return s.jsx(Ot,{value:t});const n=e?Bt(t,e):null;return s.jsxs("div",{className:"inspection-stack",children:[n&&s.jsx(J,{layer:n}),Array.isArray(t.layers)&&t.layers.map(r=>s.jsx(J,{layer:r},r.id)),Array.isArray(t.layerTable)&&t.layerTable.map(r=>s.jsx(J,{layer:r,compact:!0},r.id)),t.layer&&s.jsx(J,{layer:t.layer}),s.jsx($e,{value:t})]})}function Lt({value:t}){const e=t.tensors?.[0],n=Math.max(...(e?.bins||[]).map(r=>r.count),1);return s.jsxs("div",{className:"inspection-stack",children:[s.jsx("h2",{children:t.layer}),s.jsx("div",{className:"histogram",children:(e?.bins||[]).map((r,a)=>s.jsx("div",{style:{height:`${8+r.count/n*150}px`},title:`${r.start}..${r.end}: ${r.count}`},a))}),s.jsx($e,{value:t})]})}function Ot({value:t}){return s.jsx("div",{className:"inspection-stack",children:t.tensors.map(e=>s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:e.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"shape"}),s.jsx("dd",{children:e.shape})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"mean"}),s.jsx("dd",{children:e.mean})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"stddev"}),s.jsx("dd",{children:e.stddev})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"range"}),s.jsxs("dd",{children:[e.min,"..",e.max]})]})]})]},e.name))})}function $e({value:t}){return s.jsxs("details",{className:"data-details",children:[s.jsx("summary",{children:"Returned Rasa data"}),s.jsx("pre",{className:"data-block",children:P(t)})]})}function J({layer:t,compact:e=!1}){return s.jsxs("article",{className:"layer-card",children:[s.jsx("h2",{children:t.name}),s.jsxs("dl",{children:[s.jsxs("div",{children:[s.jsx("dt",{children:"kind"}),s.jsx("dd",{children:t.kind})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"output"}),s.jsx("dd",{children:t.output})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"params"}),s.jsx("dd",{children:t.params})]}),!e&&s.jsxs("div",{children:[s.jsx("dt",{children:"bytes"}),s.jsx("dd",{children:t.bytes})]})]})]})}function ue({label:t,value:e}){return s.jsxs("article",{className:"metric",children:[s.jsx("span",{children:t}),s.jsx("strong",{children:e})]})}function Me(t,e,n){e(t);const r=n.current;r&&(r.dispatch({changes:{from:0,to:r.state.doc.length,insert:t},selection:{anchor:t.length},scrollIntoView:!0}),r.focus())}async function Pt(){const t=await Promise.all(M.map(async e=>[e.id,await fetch(`./models/${e.id}/model.json`).then(n=>n.json())]));return Object.fromEntries(t)}function Ct(t){const e=t?.graph||(t?.view?.name==="model-summary"?t.graph:null);return e?.nodes?.length?e:Array.isArray(t?.layerTable)?{nodes:t.layerTable,edges:t.layerTable.slice(1).map((n,r)=>({id:`${t.layerTable[r].id}->${n.id}`,source:t.layerTable[r].id,target:n.id}))}:{nodes:[],edges:[]}}function Bt(t,e){return t?.layerTable?.find(n=>n.id===e)||t?.layers?.find(n=>n.id===e)}function Q(t){return t?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function Dt(t){return t?`=> ${P(t)}`:"=> nil"}function Se(t,e,n,r){return n.lastValue=null,n.lastTrace=null,n.pendingAssetModel=null,t.evaluateSession(e,r,X.all)}function Vt(t,e){return{status:{type:"keyword",name:"failed"},kind:{type:"keyword",name:t},message:e}}function Ut(t){const e=t.lastValue;return e?.status?.name==="failed"&&e?.kind?.name==="asset-not-prepared"&&e?.recoverable===!0&&e?.model?.name?e.model.name:t.pendingAssetModel}function Ee(t){return t?.packageName&&t?.exportName?`${t.packageName}/${t.exportName}`:null}function zt(t){const e=t?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[e]||{renderer:t?"Returned Rasa data":"Waiting for result",reason:t?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function Ft(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`:"0 B"}function L(t){return t==null?"pending":t<10?`${t.toFixed(1)} ms`:`${Math.round(t)} ms`}function j(){return globalThis.performance&&typeof globalThis.performance.now=="function"?globalThis.performance.now():Date.now()}function w(t){return Math.max(0,j()-t)}function qt(){return Object.fromEntries(Object.entries(rt).map(([t,e])=>[`--${t}`,e]))}He.createRoot(document.getElementById("root")).render(s.jsx(vt,{}));
