import{b as Te,j as t,r as l}from"./react.js";import{i as Se,B as Ee,C as Me}from"./graph.js";import{E as V,a as Re,d as _e,k as $e}from"./editor.js";import{l as Le}from"./tfjs.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const C=Object.freeze({reader:1,analysis:2,ir:4,facts:8,eval:16,all:31}),Ae=["memory","rasa_alloc","rasa_free","rasa_eval_source","rasa_inspect_source","rasa_syntax_tokens","rasa_report_ptr","rasa_report_len","rasa_report_free"],O=Object.freeze({includeEval:1,includePlan:2,summary:0,standard:256,full:512});class H{static async load(e,r={}){const s=await fetch(e);if(!s.ok)throw new Error(`failed to load Rasa engine: ${s.status}`);const a=await s.arrayBuffer();let i=null;const o=r.imports||{},d=r.hostCall||null,h={rasa_host_call(){return 1},...o.env||{}};d&&(h.rasa_host_call=(b,B,_)=>{try{const D=new Uint8Array(i.memory.buffer,b,B),A=d(ee(D)),x=N(A),w=i.rasa_alloc(x.length);if(w===0&&x.length>0)return 2;new Uint8Array(i.memory.buffer,w,x.length).set(x);const $=new DataView(i.memory.buffer);return $.setUint32(_,w,!0),$.setUint32(_+4,x.length,!0),0}catch{return 1}});const{instance:p,module:m}=await WebAssembly.instantiate(a,{...o,env:h});return i=p.exports,new H(p.exports,m)}constructor(e,r=null,s=Ae){for(const a of s)if(!e[a])throw new Error(`missing Rasa Wasm export ${a}`);if(!(e.memory instanceof WebAssembly.Memory))throw new Error("missing Rasa Wasm exported memory");this.exports=e,this.module=r}imports(){return this.module?WebAssembly.Module.imports(this.module):[]}evaluate(e,r=C.all){return this.callText("rasa_eval_source",N(e),r)}inspect(e,r={}){return JSON.parse(this.callText("rasa_inspect_source",N(e),Ie(r)))}syntaxTokens(e){return JSON.parse(this.callText("rasa_syntax_tokens",N(e)))}callText(e,r,s=void 0){return this.callInput(r,(a,i)=>s===void 0?this.exports[e](a,i):this.exports[e](a,i,s))}createSession(){return this.requireExport("rasa_session_new"),this.exports.rasa_session_new()}freeSession(e){this.requireExport("rasa_session_free"),this.exports.rasa_session_free(e)}loadPackage(e,r){return this.requireExport("rasa_session_load_package"),this.callInput(N(r),(s,a)=>this.exports.rasa_session_load_package(e,s,a))}evaluateSession(e,r,s=C.all){return this.requireExport("rasa_session_eval"),this.callInput(N(r),(a,i)=>this.exports.rasa_session_eval(e,a,i,s))}callInput(e,r){const s=this.exports.rasa_alloc(e.length);if(s===0&&e.length>0)throw new Error("Rasa engine allocation failed");e.length>0&&new Uint8Array(this.exports.memory.buffer,s,e.length).set(e);const a=r(s,e.length);if(this.exports.rasa_free(s,e.length),a===0)throw new Error("Rasa engine did not return a report handle");try{return this.readReport(a)}finally{this.exports.rasa_report_free(a)}}requireExport(e){if(!this.exports[e])throw new Error(`missing Rasa Wasm export ${e}`)}readReport(e){const r=this.exports.rasa_report_ptr(e),s=this.exports.rasa_report_len(e);if(r===0||s===0)throw new Error("Rasa engine returned an empty report");const a=new Uint8Array(this.exports.memory.buffer,r,s);return ee(a)}}function N(n){return new TextEncoder().encode(n)}function ee(n){return new TextDecoder("utf-8",{fatal:!0}).decode(n)}function Ie(n={}){const e=n.detail||"standard";let r=0;return n.includeEval!==!1&&(r|=O.includeEval),n.includePlan!==!1&&(r|=O.includePlan),r|=O[e]??O.standard,r}function Oe(n){return[{key:"Mod-Enter",run:()=>(n(),!0)}]}const ne=Object.freeze({logo:"./assets/brand/logo.svg",mark:"./assets/brand/mark.svg"}),Pe=Object.freeze({surface:"#0d0f12",panel:"#12161c",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",red:"#ff8ca3"}),E=Object.freeze([{id:"tiny-cnn",title:"Tiny CNN",description:"Convolution, pooling, flatten, and dense classifier layers.",defaultLayer:"classifier_dense",defaultLayerIndex:3,kind:"conv2d"},{id:"tiny-mlp",title:"Tiny MLP",description:"Dense classifier stack for tabular feature inspection.",defaultLayer:"hidden_dense",defaultLayerIndex:2,kind:"dense"},{id:"tiny-autoencoder",title:"Tiny Autoencoder",description:"Encoder, bottleneck, decoder, and reconstruction layers.",defaultLayer:"bottleneck",defaultLayerIndex:2,kind:"dense"},{id:"tiny-embedder",title:"Tiny Embedder",description:"Token embedding table plus dense projection head.",defaultLayer:"token_embedding",defaultLayerIndex:1,kind:"embedding"}]);function Ce(n){return E.find(e=>e.id===n)||E[0]}function Be(n){return`(def m (model/load-model :${n}))
(model/summary m)`}const G="tiny-cnn",re=`(ns demo
  (:import [demo.tfjs/model :as model]
           [demo.tfjs/layer :as layer]
           [demo.tfjs/layers :as layers]
           [demo.tfjs/weights :as weights]))`,De=`(def m (model/load-model :${G}))
(model/summary m)`;function Ue(n=G){const e=Ce(n);return[{label:"Load + summary",source:`(def m (model/load-model :${e.id}))
(model/summary m)`},{label:"Layers by kind",source:`(layers/by-kind m :${e.kind})`},{label:"Layer count",source:"(model/layer-count m)"},{label:`Layer ${e.defaultLayerIndex} size`,source:`(layer/tensor-size m ${e.defaultLayerIndex})`},{label:"Inspect layer",source:`(layer/inspect m "${e.defaultLayer}")`},{label:"Weight stats",source:`(weights/stats m "${e.defaultLayer}")`},{label:"Top layers",source:"(layers/top m {:by :params :limit 5})"},{label:"Histogram",source:`(weights/histogram m "${e.defaultLayer}" {:bins 32})`}]}class Ve{constructor(e){this.prefix=e,this.nextId=1,this.resources=new Map}insert(e,r){const s=`${this.prefix}/${e}/${this.nextId++}`;return this.resources.set(s,{kind:e,value:r}),s}get(e,r=null){const s=this.resources.get(e);if(!s)throw new Error(`unknown resource handle ${e}`);if(r&&s.kind!==r)throw new Error(`resource ${e} has kind ${s.kind}, expected ${r}`);return s.value}}function ze(n){return new We(n).parse()}function M(n){return n==null?"nil":typeof n=="boolean"?String(n):typeof n=="number"?Number.isInteger(n)?String(n):String(Math.round(n*1e3)/1e3):typeof n=="string"?JSON.stringify(n):J(n)?`:${n.name}`:ie(n)?n.name:Array.isArray(n)?`[${n.map(M).join(" ")}]`:`{${Object.entries(n).map(([e,r])=>`:${e} ${M(r)}`).join(" ")}}`}function qe(n){return{type:"keyword",name:n}}function Fe(n){return{type:"symbol",name:n}}function J(n){return!!(n&&typeof n=="object"&&n.type==="keyword")}function ie(n){return!!(n&&typeof n=="object"&&n.type==="symbol")}class We{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();return this.ws(),e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const r=this.form(),s=this.form();e[Ke(r)]=s}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const r=this.text[this.index++];if(r==='"')return e;if(r==="\\"){const s=this.text[this.index++];e+=s==="n"?`
`:s}else e+=r}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\]{}]/.test(this.text[this.index]);)this.index++;const r=this.text.slice(e,this.index);if(!r)throw new Error(`expected form at byte ${this.index}`);return r==="nil"?null:r==="true"?!0:r==="false"?!1:/^-?\d+(\.\d+)?$/.test(r)?Number(r):r.startsWith(":")?qe(r.slice(1)):Fe(r)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function Ke(n){return J(n)||ie(n)?n.name:String(n)}const z=Object.freeze(Object.fromEntries(E.map(n=>[n.id,`./models/${n.id}/model.json`])));class He{constructor(){this.resources=new Ve("browser"),this.modelIds=new Map,this.catalog=new Map,this.lastValue=null,this.lastTrace=null}call(e){const r=ze(e);this.lastTrace={requestText:e,request:r,responseText:"",packageName:r.package?.name||"unknown",exportName:r.export?.name||"unknown"};const s=this.route(r),a=M(s);return this.lastTrace.responseText=a,a}route(e){try{const r=e.package?.name,s=e.export?.name,a=e.args||[],i=this.invoke(r,s,a);return this.lastValue=i,this.lastTrace={...this.lastTrace||{},status:"ok",packageName:r,exportName:s,argsCount:a.length,view:i?.view?.name||"scalar"},{status:u("ok"),value:i}}catch(r){const s={status:u("failed"),kind:u("provider-error"),message:r.message};return this.lastValue=s,this.lastTrace={...this.lastTrace||{},status:"failed",error:r.message},s}}invoke(e,r,s){if(e==="demo.tfjs/model"&&r==="load-model")return this.loadNamedModel(q(s[0]));if(e==="demo.tfjs/model"&&r==="summary")return this.summary(s[0]);if(e==="demo.tfjs/model"&&r==="layer-count")return this.layerCount(s[0]);if(e==="demo.tfjs/model"&&r==="graph")return this.graph(s[0]);if(e==="demo.tfjs/layers"&&r==="by-kind")return this.layersByKind(s[0],q(s[1]));if(e==="demo.tfjs/layers"&&r==="top")return this.topLayers(s[0],s[1]||{});if(e==="demo.tfjs/layer"&&r==="inspect")return this.inspectLayer(s[0],s[1]);if(e==="demo.tfjs/layer"&&r==="tensor-size")return this.layerTensorSize(s[0],s[1]);if(e==="demo.tfjs/weights"&&r==="stats")return this.weightStats(s[0],s[1]);if(e==="demo.tfjs/weights"&&r==="histogram")return this.weightHistogram(s[0],s[1],s[2]||{});throw new Error(`unsupported capability ${e}/${r}`)}loadNamedModel(e){if(!z[e])throw new Error(`unknown model :${e}`);if(!this.catalog.has(e))throw new Error(`model :${e} assets are not prepared`);if(!this.modelIds.has(e)){const r=this.resources.insert("model",this.catalog.get(e));this.modelIds.set(e,r)}return this.modelIds.get(e)}async prepareModel(e){return this.loadModelNow(e)}isPrepared(e){return this.catalog.has(e)}preparedModelIds(){return[...this.catalog.keys()]}async loadModelNow(e){if(!z[e])throw new Error(`unknown model :${e}`);if(this.catalog.has(e))return this.catalog.get(e);const r=await Le(z[e]);return this.catalog.set(e,r),r}model(e){return this.resources.get(e,"model")}loadedModels(){return[...this.modelIds.entries()].map(([e,r])=>{const s=this.summary(r);return{id:e,handle:r,name:s.model,layers:s.layers,parameters:s.parameters,trainableParameters:s.trainableParameters,bytes:s.bytes,inputs:s.inputs,outputs:s.outputs}})}summary(e){const r=this.model(e),s=r.layers.map(T);return{view:u("model-summary"),model:r.name,handle:e,layers:s.length,parameters:S(s.map(a=>a.params)),trainableParameters:S(s.map(a=>a.trainableParams)),bytes:S(s.map(a=>a.bytes)),inputs:R(r.inputs?.[0]?.shape),outputs:R(r.outputs?.[0]?.shape),graph:te(r),layerTable:s}}graph(e){return{view:u("graph"),graph:te(this.model(e))}}layerCount(e){const r=this.model(e);return{view:u("numeric-aggregate"),label:"layer count",value:r.layers.length,unit:u("layers"),model:r.name,handle:e}}layersByKind(e,r){const s=this.model(e).layers.map(T).filter(a=>a.kind===r);return{view:u("layers-by-kind"),kind:u(r),count:s.length,layers:s}}topLayers(e,r){const s=Number(r.limit||5),i=q(r.by||u("params"))==="bytes"?"bytes":"params",o=this.model(e).layers.map(T).sort((d,h)=>h[i]-d[i]).slice(0,s);return{view:u("top-layers"),by:u(i),layers:o}}inspectLayer(e,r){const s=this.layerByName(e,r);return{view:u("layer-inspection"),layer:T(s),config:Qe(s.getConfig()),weights:s.weights.map(oe)}}layerTensorSize(e,r){const{layer:s,index:a}=this.layerByRef(e,r),i=T(s,a);return{view:u("numeric-aggregate"),label:"layer tensor size",value:i.params,unit:u("parameters"),bytes:i.bytes,layer:i.name,index:a,output:i.output}}weightStats(e,r){const s=this.layerByName(e,r);return{view:u("weight-stats"),layer:s.name,tensors:s.getWeights().map((a,i)=>Ge(s.weights[i],a))}}weightHistogram(e,r,s){const a=this.layerByName(e,r),i=Number(s.bins||24),o=a.getWeights().map((d,h)=>({name:a.weights[h]?.originalName||`weight_${h}`,bins:Je(Array.from(d.dataSync()),i)}));return{view:u("weight-histogram"),layer:a.name,bins:i,tensors:o}}layerByName(e,r){const s=this.model(e).layers.find(a=>a.name===r);if(!s)throw new Error(`unknown layer ${r}`);return s}layerByRef(e,r){const s=this.model(e);if(typeof r=="number"){const o=Math.trunc(r)-1,d=s.layers[o];if(!d)throw new Error(`unknown layer index ${r}`);return{layer:d,index:o}}const a=String(r),i=s.layers.findIndex(o=>o.name===a);if(i<0)throw new Error(`unknown layer ${a}`);return{layer:s.layers[i],index:i}}}function T(n,e=null){const r=n.weights.map(oe);return{id:n.name,index:e??Xe(n),name:n.name,kind:n.getClassName().toLowerCase(),activation:n.getConfig().activation||"linear",input:R(n.inputShape),output:R(n.outputShape),params:S(r.map(s=>s.params)),trainableParams:S(r.filter(s=>s.trainable).map(s=>s.params)),bytes:S(r.map(s=>s.bytes))}}function te(n){const e=n.layers.map((r,s)=>({...T(r,s),index:s}));return{nodes:e,edges:e.slice(1).map((r,s)=>({id:`${e[s].id}->${r.id}`,source:e[s].id,target:r.id}))}}function oe(n){const e=n.shape.reduce((r,s)=>r*s,1);return{name:n.originalName,shape:R(n.shape),params:e,bytes:e*4,trainable:!!n.trainable}}function Ge(n,e){const r=Array.from(e.dataSync()),s=r.length,a=Math.min(...r),i=Math.max(...r),o=r.reduce((p,m)=>p+m,0)/s,d=r.reduce((p,m)=>p+(m-o)**2,0)/s,h=r.filter(p=>p===0).length;return{name:n?.originalName||"weight",shape:R(e.shape),params:s,min:j(a),max:j(i),mean:j(o),stddev:j(Math.sqrt(d)),sparsity:j(h/s)}}function Je(n,e){const r=Math.min(...n),s=Math.max(...n),a=s===r?1:(s-r)/e,i=Array.from({length:e},(o,d)=>({start:j(r+d*a),end:j(r+(d+1)*a),count:0}));for(const o of n){const d=Math.min(e-1,Math.max(0,Math.floor((o-r)/a)));i[d].count+=1}return i}function Qe(n){return Object.fromEntries(["name","activation","filters","kernelSize","strides","padding","units","poolSize"].filter(r=>n[r]!==void 0).map(r=>[r,n[r]]))}function q(n){return J(n)?n.name:typeof n=="string"?n:n?.name||String(n)}function u(n){return{type:"keyword",name:n}}function R(n){return n?Array.isArray(n)&&Array.isArray(n[0])?n[0].map(se).join(" x "):n.map(se).join(" x "):"?"}function se(n){return n==null?"*":String(n)}function S(n){return n.reduce((e,r)=>e+r,0)}function j(n){return String(Math.round(n*1e5)/1e5)}function Xe(n){return Number(n._index??0)}const le=`{:packages
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
                         :targets {:ras.wasm {:availability :available}}}}}}]}`,Ze=`import "@tensorflow/tfjs-backend-cpu";
import { loadLayersModel } from "@tensorflow/tfjs-layers";
import { BrowserResourceTable } from "@rasa/capability-bridge";
import { isKeyword, renderRasaData, parseRasaData } from "./rasa-data.js";
import { MODEL_CATALOG } from "./models.js";

const MODEL_URLS = Object.freeze(
  Object.fromEntries(MODEL_CATALOG.map((model) => [model.id, \`./models/\${model.id}/model.json\`])),
);

export class TfjsModelProvider {
  constructor() {
    this.resources = new BrowserResourceTable("browser");
    this.modelIds = new Map();
    this.catalog = new Map();
    this.lastValue = null;
    this.lastTrace = null;
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
      const value = { status: kw("failed"), kind: kw("provider-error"), message: error.message };
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
      throw new Error(\`model :\${name} assets are not prepared\`);
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
`,Ye="./engine.wasm";function en(){const n=l.useRef(null),e=l.useRef(null),r=l.useRef(0),s=l.useRef(null),[a,i]=l.useState(G),[o,d]=l.useState(De),[h,p]=l.useState("loading"),[m,b]=l.useState(0),[B,_]=l.useState(""),[D,A]=l.useState(null),[x,w]=l.useState([]),[$,Q]=l.useState([]),[ce,X]=l.useState(null),[me,Z]=l.useState(""),[ue,he]=l.useState({}),[v,pe]=l.useState(null),[ye,fe]=l.useState(null),[I,ge]=l.useState(null),[xe,Y]=l.useState([]);l.useEffect(()=>{let c=!0;async function f(){try{const y=new He,k=await pn(),g=await H.load(nn(),{hostCall:Ne=>y.call(Ne)}),U=g.createSession();g.loadPackage(U,le);const ke=g.evaluateSession(U,re,C.all);if(!c)return;n.current=y,e.current=g,r.current=U,_(ke),A(y.lastTrace),w(y.loadedModels()),Q(y.preparedModelIds()),he(k),Y([{id:"setup",kind:"setup",source:re,result:null,capability:"rasa session imports",view:"session setup",status:"ok"}]),p("ready")}catch(y){c&&p(`failed: ${y.message}`)}}return f(),()=>{c=!1,e.current&&r.current&&e.current.freeSession(r.current)}},[]);const we=l.useCallback(async()=>{const c=n.current;if(!(!c||c.isPrepared(a))){X(a),Z("");try{await c.prepareModel(a),Q(c.preparedModelIds()),w(c.loadedModels())}catch(f){Z(f.message)}finally{X(null)}}},[a]),je=l.useCallback(()=>{if(!e.current||!r.current||!n.current)return;const c=s.current?.state.doc.toString()||o;n.current.lastValue=null;const f=e.current.evaluateSession(r.current,c,C.all),y=n.current.lastValue,k=n.current.lastTrace;_(f),pe(y),A(k),w(n.current.loadedModels()),y?.handle&&fe(y.handle),b(g=>g+1),Y(g=>[...g,{id:`run-${g.length}`,kind:"run",source:c,result:gn(y),capability:xn(k),view:k?.view||K(y),status:k?.status||"ok"}])},[o]),L=l.useMemo(()=>yn(v),[v]),be=l.useMemo(()=>L.nodes.map((c,f)=>({id:c.id,position:{x:f%3*190,y:Math.floor(f/3)*142},data:{label:t.jsxs("div",{className:"node-label",children:[t.jsx("strong",{children:c.name}),t.jsx("span",{children:c.kind}),t.jsxs("em",{children:[c.params," params"]})]}),layer:c},type:"default",className:I===c.id?"selected-node":""})),[L.nodes,I]),ve=l.useMemo(()=>L.edges.map(c=>({...c,animated:!0})),[L.edges]);return t.jsxs("main",{className:"app-shell",style:bn(),children:[t.jsxs("header",{className:"hero",children:[t.jsxs("div",{className:"brand-lockup",children:[t.jsx("img",{src:ne.logo,alt:"Rasa"}),t.jsxs("div",{children:[t.jsx("span",{children:"Rasa Browser Demo"}),t.jsx("h1",{children:"Model architecture explorer"}),t.jsx("p",{children:"Explore a TensorFlow.js model through Rasa forms and readonly browser capabilities."})]})]}),t.jsxs("div",{className:"hero-status",children:[t.jsx("img",{src:ne.mark,alt:"","aria-hidden":"true"}),t.jsx("span",{className:h==="ready"?"ok":"warn",children:h}),t.jsx("span",{children:"tfjs assets on demand"}),t.jsx("span",{children:"static bundle"})]})]}),t.jsxs("section",{className:"workbench",children:[t.jsxs("section",{className:"source-column",children:[t.jsx("div",{className:"panel-head",children:t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Rasa session"}),t.jsx("strong",{children:"Exploratory forms over model handles"})]})}),t.jsx(tn,{entries:xe}),t.jsx(dn,{modelManifest:ue[a],modelId:a,compact:!0}),t.jsx(an,{selectedModelId:a,setSelectedModelId:i,setSource:d,editorRef:s,prepared:$.includes(a),preparing:ce===a,prepareError:me,onPrepare:we}),t.jsx(rn,{source:o,editorRef:s,run:je,setSource:d,disabled:h!=="ready"})]}),t.jsxs("section",{className:"graph-column",children:[t.jsxs("div",{className:"panel-head",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Architecture"}),t.jsxs("strong",{children:[L.nodes.length," layers from live TF.js objects"]})]}),t.jsxs("span",{className:"run-count",children:["run ",m]})]}),t.jsx(on,{models:x,activeHandle:ye,preparedModelIds:$}),t.jsx("div",{className:"graph-wrap",children:t.jsxs(Se,{nodes:be,edges:ve,fitView:!0,fitViewOptions:{padding:.18,maxZoom:1.1},onNodeClick:(c,f)=>ge(f.id),children:[t.jsx(Ee,{color:"#29313d",gap:18}),t.jsx(Me,{showInteractive:!1})]})}),t.jsx(cn,{value:v,selectedLayer:I})]}),t.jsxs("aside",{className:"inspector-column",children:[t.jsx("div",{className:"panel-head",children:t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Inspection"}),t.jsx("strong",{children:K(v)})]})}),t.jsx(ln,{value:v,trace:D}),t.jsx(mn,{value:v,selectedLayer:I}),t.jsxs("details",{className:"runtime-report",children:[t.jsx("summary",{children:"Runtime report"}),t.jsx("pre",{children:B})]})]})]})]})}function nn(){return document.querySelector('meta[name="rasa-engine-url"]')?.getAttribute("content")||Ye}function rn({source:n,editorRef:e,run:r,setSource:s,disabled:a}){const i=l.useRef(null);return l.useEffect(()=>{const o=new V({parent:i.current,state:Re.create({doc:n,extensions:[_e(),$e.of(Oe(r)),V.lineWrapping,V.updateListener.of(d=>{d.docChanged&&s(d.state.doc.toString())})]})});return e.current=o,()=>o.destroy()},[]),t.jsxs("div",{className:"editor-panel",children:[t.jsx("div",{className:"editor-host",ref:i}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("span",{children:"Primary+Enter runs the expression"}),t.jsx("button",{type:"button",onClick:r,disabled:a,children:"Run"})]})]})}function tn({entries:n}){const e=l.useRef(null);return l.useEffect(()=>{e.current&&(e.current.scrollTop=e.current.scrollHeight)},[n.length]),t.jsx("section",{className:"transcript","aria-label":"Rasa REPL transcript",ref:e,children:n.length?n.map(r=>t.jsx(sn,{entry:r},r.id)):t.jsxs("article",{className:"transcript-entry",children:[t.jsx("pre",{className:"transcript-form",children:";; loading Rasa session"}),t.jsx("pre",{className:"transcript-result",children:"=> waiting for browser Wasm engine"})]})})}function sn({entry:n}){return t.jsxs("article",{className:`transcript-entry ${n.kind}`,children:[t.jsx("pre",{className:"transcript-form",children:n.source}),n.result&&t.jsx("pre",{className:"transcript-result",children:n.result}),t.jsxs("div",{className:"transcript-meta",children:[t.jsx("span",{children:n.capability||"session"}),t.jsx("span",{children:n.view}),t.jsx("span",{children:n.status})]})]})}function an({selectedModelId:n,setSelectedModelId:e,setSource:r,editorRef:s,prepared:a,preparing:i,prepareError:o,onPrepare:d}){const h=Ue(n),p=m=>{const b=m.target.value;e(b),ae(Be(b),r,s)};return t.jsxs("div",{className:"example-rail",children:[t.jsxs("label",{className:"model-picker",children:[t.jsx("span",{children:"Model"}),t.jsx("select",{value:n,onChange:p,children:E.map(m=>t.jsx("option",{value:m.id,children:m.title},m.id))})]}),t.jsx("button",{className:a?"prepare-button ready":"prepare-button",type:"button",onClick:d,disabled:a||i,children:i?"Preparing...":a?"Assets ready":"Prepare assets"}),o&&t.jsx("span",{className:"prepare-error",children:o}),h.map(m=>t.jsx("button",{type:"button",onClick:()=>ae(m.source,r,s),children:m.label},m.label))]})}function on({models:n,activeHandle:e,preparedModelIds:r}){const s=e?n.find(a=>a.handle===e):null;return t.jsxs("section",{className:"model-inventory","aria-label":"Loaded models",children:[s?t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:s.name})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"id"}),t.jsx("dd",{children:s.id})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"handle"}),t.jsx("dd",{children:s.handle})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"layers"}),t.jsx("dd",{children:s.layers})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:s.parameters})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"size"}),t.jsx("dd",{children:jn(s.bytes||0)})]})]})]},s.handle||s.id):t.jsxs("article",{className:"active-model",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Active model"}),t.jsx("strong",{children:"none yet"})]}),t.jsx("p",{children:"Run a Rasa load expression to bind `m` to a model handle."})]}),t.jsxs("div",{className:"catalog-note",children:[E.length," static catalog models are available. ",r.length," prepared in this browser session; handles appear only after a Rasa load expression runs."]})]})}function ln({value:n,trace:e}){const r=wn(n);return t.jsxs("section",{className:"projection-card",children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Projection"}),t.jsx("strong",{children:r.renderer}),t.jsx("p",{children:r.reason})]}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"Rasa view"}),t.jsx("dd",{children:n?.view?.name?`:${n.view.name}`:"none yet"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Capability"}),t.jsx("dd",{children:e?.packageName&&e?.exportName?`${e.packageName}/${e.exportName}`:"waiting"})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"Status"}),t.jsx("dd",{children:e?.status||"waiting"})]})]})]})}function dn({modelManifest:n,modelId:e,compact:r=!1}){return t.jsxs("section",{className:`extension-panel ${r?"compact":""}`,children:[t.jsxs("div",{children:[t.jsx("span",{className:"label",children:"Open the extension"}),t.jsx("strong",{children:"Everything crossing the host boundary is inspectable"})]}),t.jsx(F,{title:"Rasa package bundle",text:le}),t.jsx(F,{title:"Browser provider source",text:Ze}),t.jsx(F,{title:`TF.js model manifest${e?` :${e}`:""}`,text:n?JSON.stringify(n,null,2):"loading model manifest"})]})}function F({title:n,text:e}){return t.jsxs("details",{className:"code-disclosure",children:[t.jsx("summary",{children:n}),t.jsx("pre",{children:e})]})}function cn({value:n,selectedLayer:e}){const r=n?.view?.name==="model-summary"?n:null;return t.jsxs("div",{className:"result-strip",children:[t.jsx(W,{label:"Result",value:K(n)}),t.jsx(W,{label:"Parameters",value:r?.parameters??"from query"}),t.jsx(W,{label:"Selected",value:e||"none"})]})}function mn({value:n,selectedLayer:e}){if(!n)return t.jsx("div",{className:"empty",children:"Run an example to inspect model architecture."});if(n.status==="failed")return t.jsx("pre",{className:"data-block",children:M(n)});if(n.view?.name==="weight-histogram")return t.jsx(un,{value:n});if(n.view?.name==="weight-stats")return t.jsx(hn,{value:n});const r=e?fn(n,e):null;return t.jsxs("div",{className:"inspection-stack",children:[r&&t.jsx(P,{layer:r}),Array.isArray(n.layers)&&n.layers.map(s=>t.jsx(P,{layer:s},s.id)),Array.isArray(n.layerTable)&&n.layerTable.map(s=>t.jsx(P,{layer:s,compact:!0},s.id)),n.layer&&t.jsx(P,{layer:n.layer}),t.jsx(de,{value:n})]})}function un({value:n}){const e=n.tensors?.[0],r=Math.max(...(e?.bins||[]).map(s=>s.count),1);return t.jsxs("div",{className:"inspection-stack",children:[t.jsx("h2",{children:n.layer}),t.jsx("div",{className:"histogram",children:(e?.bins||[]).map((s,a)=>t.jsx("div",{style:{height:`${8+s.count/r*150}px`},title:`${s.start}..${s.end}: ${s.count}`},a))}),t.jsx(de,{value:n})]})}function hn({value:n}){return t.jsx("div",{className:"inspection-stack",children:n.tensors.map(e=>t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:e.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"shape"}),t.jsx("dd",{children:e.shape})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"mean"}),t.jsx("dd",{children:e.mean})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"stddev"}),t.jsx("dd",{children:e.stddev})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"range"}),t.jsxs("dd",{children:[e.min,"..",e.max]})]})]})]},e.name))})}function de({value:n}){return t.jsxs("details",{className:"data-details",children:[t.jsx("summary",{children:"Returned Rasa data"}),t.jsx("pre",{className:"data-block",children:M(n)})]})}function P({layer:n,compact:e=!1}){return t.jsxs("article",{className:"layer-card",children:[t.jsx("h2",{children:n.name}),t.jsxs("dl",{children:[t.jsxs("div",{children:[t.jsx("dt",{children:"kind"}),t.jsx("dd",{children:n.kind})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"output"}),t.jsx("dd",{children:n.output})]}),t.jsxs("div",{children:[t.jsx("dt",{children:"params"}),t.jsx("dd",{children:n.params})]}),!e&&t.jsxs("div",{children:[t.jsx("dt",{children:"bytes"}),t.jsx("dd",{children:n.bytes})]})]})]})}function W({label:n,value:e}){return t.jsxs("article",{className:"metric",children:[t.jsx("span",{children:n}),t.jsx("strong",{children:e})]})}function ae(n,e,r){e(n);const s=r.current;s&&(s.dispatch({changes:{from:0,to:s.state.doc.length,insert:n},selection:{anchor:n.length},scrollIntoView:!0}),s.focus())}async function pn(){const n=await Promise.all(E.map(async e=>[e.id,await fetch(`./models/${e.id}/model.json`).then(r=>r.json())]));return Object.fromEntries(n)}function yn(n){const e=n?.graph||(n?.view?.name==="model-summary"?n.graph:null);return e?.nodes?.length?e:Array.isArray(n?.layerTable)?{nodes:n.layerTable,edges:n.layerTable.slice(1).map((r,s)=>({id:`${n.layerTable[s].id}->${r.id}`,source:n.layerTable[s].id,target:r.id}))}:{nodes:[],edges:[]}}function fn(n,e){return n?.layerTable?.find(r=>r.id===e)||n?.layers?.find(r=>r.id===e)}function K(n){return n?.view?.name?.replaceAll("-"," ")||"waiting for Rasa"}function gn(n){return n?`=> ${M(n)}`:"=> nil"}function xn(n){return n?.packageName&&n?.exportName?`${n.packageName}/${n.exportName}`:null}function wn(n){const e=n?.view?.name;return{"model-summary":{renderer:"Architecture graph and model inventory",reason:"The provider returned :view :model-summary, so the UI projects layer records into graph nodes while keeping returned Rasa data inspectable."},graph:{renderer:"Architecture graph",reason:"The provider returned graph nodes and edges; no tensor data is copied into the view."},"layers-by-kind":{renderer:"Filtered layer cards",reason:"The provider returned layer records narrowed by kind, so the UI shows only the selected subset."},"layer-inspection":{renderer:"Layer inspector",reason:"The provider returned one layer plus config and weights, so the UI focuses the selected layer."},"top-layers":{renderer:"Ranked layer cards",reason:"The provider returned a ranked list; the UI keeps the ordering instead of reinterpreting model structure."},"weight-stats":{renderer:"Tensor statistics",reason:"The provider returned aggregate weight records only: min, max, mean, stddev, sparsity, and byte counts."},"weight-histogram":{renderer:"Weight histogram",reason:"The provider returned binned counts, not raw tensor values, so the UI renders a compact distribution."},"numeric-aggregate":{renderer:"Scalar result",reason:"The provider returned a small aggregate value, so the transcript shows the answer directly and the inspector keeps the structured value available."}}[e]||{renderer:n?"Returned Rasa data":"Waiting for result",reason:n?"No specialized projection matched this value, so the UI shows the structured Rasa data directly.":"Run a Rasa form to produce a value and choose the corresponding projection."}}function jn(n){return n?n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(1)} MB`:"0 B"}function bn(){return Object.fromEntries(Object.entries(Pe).map(([n,e])=>[`--${n}`,e]))}Te.createRoot(document.getElementById("root")).render(t.jsx(en,{}));
