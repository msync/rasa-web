(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function L2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yf={exports:{}},Dr={};var q0;function _2(){if(q0)return Dr;q0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:u,ref:l!==void 0?l:null,props:c}}return Dr.Fragment=e,Dr.jsx=n,Dr.jsxs=n,Dr}var U0;function H2(){return U0||(U0=1,Yf.exports=_2()),Yf.exports}var x=H2(),Kf={exports:{}},ue={};var V0;function q2(){if(V0)return ue;V0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function _(E,q,F){this.props=E,this.context=q,this.refs=C,this.updater=F||k}_.prototype.isReactComponent={},_.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function U(){}U.prototype=_.prototype;function K(E,q,F){this.props=E,this.context=q,this.refs=C,this.updater=F||k}var $=K.prototype=new U;$.constructor=K,T($,_.prototype),$.isPureReactComponent=!0;var B=Array.isArray;function W(){}var X={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function me(E,q,F){var Z=F.ref;return{$$typeof:s,type:E,key:q,ref:Z!==void 0?Z:null,props:F}}function Ke(E,q){return me(E.type,q,E.props)}function ot(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function Ne(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return q[F]})}var yt=/\/+/g;function Le(E,q){return typeof E=="object"&&E!==null&&E.key!=null?Ne(""+E.key):q.toString(36)}function We(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(W,W):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function H(E,q,F,Z,re){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(le){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case s:case e:ye=!0;break;case g:return ye=E._init,H(ye(E._payload),q,F,Z,re)}}if(ye)return re=re(E),ye=Z===""?"."+Le(E,0):Z,B(re)?(F="",ye!=null&&(F=ye.replace(yt,"$&/")+"/"),H(re,q,F,"",function(Bt){return Bt})):re!=null&&(ot(re)&&(re=Ke(re,F+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(yt,"$&/")+"/")+ye)),q.push(re)),1;ye=0;var Ue=Z===""?".":Z+":";if(B(E))for(var Ve=0;Ve<E.length;Ve++)Z=E[Ve],le=Ue+Le(Z,Ve),ye+=H(Z,q,F,le,re);else if(Ve=S(E),typeof Ve=="function")for(E=Ve.call(E),Ve=0;!(Z=E.next()).done;)Z=Z.value,le=Ue+Le(Z,Ve++),ye+=H(Z,q,F,le,re);else if(le==="object"){if(typeof E.then=="function")return H(We(E),q,F,Z,re);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(E,q,F){if(E==null)return E;var Z=[],re=0;return H(E,Z,"","",function(le){return q.call(F,le,re++)}),Z}function ie(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var I=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},ae={map:Q,forEach:function(E,q,F){Q(E,function(){q.apply(this,arguments)},F)},count:function(E){var q=0;return Q(E,function(){q++}),q},toArray:function(E){return Q(E,function(q){return q})||[]},only:function(E){if(!ot(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ue.Activity=b,ue.Children=ae,ue.Component=_,ue.Fragment=n,ue.Profiler=l,ue.PureComponent=K,ue.StrictMode=a,ue.Suspense=h,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ue.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ue.cache=function(E){return function(){return E.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(E,q,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=T({},E.props),re=E.key;if(q!=null)for(le in q.key!==void 0&&(re=""+q.key),q)!te.call(q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&q.ref===void 0||(Z[le]=q[le]);var le=arguments.length-2;if(le===1)Z.children=F;else if(1<le){for(var ye=Array(le),Ue=0;Ue<le;Ue++)ye[Ue]=arguments[Ue+2];Z.children=ye}return me(E.type,re,Z)},ue.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ue.createElement=function(E,q,F){var Z,re={},le=null;if(q!=null)for(Z in q.key!==void 0&&(le=""+q.key),q)te.call(q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(re[Z]=q[Z]);var ye=arguments.length-2;if(ye===1)re.children=F;else if(1<ye){for(var Ue=Array(ye),Ve=0;Ve<ye;Ve++)Ue[Ve]=arguments[Ve+2];re.children=Ue}if(E&&E.defaultProps)for(Z in ye=E.defaultProps,ye)re[Z]===void 0&&(re[Z]=ye[Z]);return me(E,le,re)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(E){return{$$typeof:f,render:E}},ue.isValidElement=ot,ue.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:ie}},ue.memo=function(E,q){return{$$typeof:p,type:E,compare:q===void 0?null:q}},ue.startTransition=function(E){var q=X.T,F={};X.T=F;try{var Z=E(),re=X.S;re!==null&&re(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(W,I)}catch(le){I(le)}finally{q!==null&&F.types!==null&&(q.types=F.types),X.T=q}},ue.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ue.use=function(E){return X.H.use(E)},ue.useActionState=function(E,q,F){return X.H.useActionState(E,q,F)},ue.useCallback=function(E,q){return X.H.useCallback(E,q)},ue.useContext=function(E){return X.H.useContext(E)},ue.useDebugValue=function(){},ue.useDeferredValue=function(E,q){return X.H.useDeferredValue(E,q)},ue.useEffect=function(E,q){return X.H.useEffect(E,q)},ue.useEffectEvent=function(E){return X.H.useEffectEvent(E)},ue.useId=function(){return X.H.useId()},ue.useImperativeHandle=function(E,q,F){return X.H.useImperativeHandle(E,q,F)},ue.useInsertionEffect=function(E,q){return X.H.useInsertionEffect(E,q)},ue.useLayoutEffect=function(E,q){return X.H.useLayoutEffect(E,q)},ue.useMemo=function(E,q){return X.H.useMemo(E,q)},ue.useOptimistic=function(E,q){return X.H.useOptimistic(E,q)},ue.useReducer=function(E,q,F){return X.H.useReducer(E,q,F)},ue.useRef=function(E){return X.H.useRef(E)},ue.useState=function(E){return X.H.useState(E)},ue.useSyncExternalStore=function(E,q,F){return X.H.useSyncExternalStore(E,q,F)},ue.useTransition=function(){return X.H.useTransition()},ue.version="19.2.7",ue}var G0;function mh(){return G0||(G0=1,Kf.exports=q2()),Kf.exports}var N=mh();const pc=L2(N);var Wf={exports:{}},jr={},Xf={exports:{}},Qf={};var $0;function U2(){return $0||($0=1,(function(s){function e(H,Q){var ie=H.length;H.push(Q);e:for(;0<ie;){var I=ie-1>>>1,ae=H[I];if(0<l(ae,Q))H[I]=Q,H[ie]=ae,ie=I;else break e}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var Q=H[0],ie=H.pop();if(ie!==Q){H[0]=ie;e:for(var I=0,ae=H.length,E=ae>>>1;I<E;){var q=2*(I+1)-1,F=H[q],Z=q+1,re=H[Z];if(0>l(F,ie))Z<ae&&0>l(re,F)?(H[I]=re,H[Z]=ie,I=Z):(H[I]=F,H[q]=ie,I=q);else if(Z<ae&&0>l(re,ie))H[I]=re,H[Z]=ie,I=Z;else break e}}return Q}function l(H,Q){var ie=H.sortIndex-Q.sortIndex;return ie!==0?ie:H.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,b=null,v=3,S=!1,k=!1,T=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function $(H){for(var Q=n(p);Q!==null;){if(Q.callback===null)a(p);else if(Q.startTime<=H)a(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=n(p)}}function B(H){if(T=!1,$(H),!k)if(n(h)!==null)k=!0,W||(W=!0,Ne());else{var Q=n(p);Q!==null&&We(B,Q.startTime-H)}}var W=!1,X=-1,te=5,me=-1;function Ke(){return C?!0:!(s.unstable_now()-me<te)}function ot(){if(C=!1,W){var H=s.unstable_now();me=H;var Q=!0;try{e:{k=!1,T&&(T=!1,U(X),X=-1),S=!0;var ie=v;try{t:{for($(H),b=n(h);b!==null&&!(b.expirationTime>H&&Ke());){var I=b.callback;if(typeof I=="function"){b.callback=null,v=b.priorityLevel;var ae=I(b.expirationTime<=H);if(H=s.unstable_now(),typeof ae=="function"){b.callback=ae,$(H),Q=!0;break t}b===n(h)&&a(h),$(H)}else a(h);b=n(h)}if(b!==null)Q=!0;else{var E=n(p);E!==null&&We(B,E.startTime-H),Q=!1}}break e}finally{b=null,v=ie,S=!1}Q=void 0}}finally{Q?Ne():W=!1}}}var Ne;if(typeof K=="function")Ne=function(){K(ot)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Le=yt.port2;yt.port1.onmessage=ot,Ne=function(){Le.postMessage(null)}}else Ne=function(){_(ot,0)};function We(H,Q){X=_(function(){H(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var ie=v;v=Q;try{return H()}finally{v=ie}},s.unstable_requestPaint=function(){C=!0},s.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=v;v=H;try{return Q()}finally{v=ie}},s.unstable_scheduleCallback=function(H,Q,ie){var I=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?I+ie:I):ie=I,H){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=ie+ae,H={id:g++,callback:Q,priorityLevel:H,startTime:ie,expirationTime:ae,sortIndex:-1},ie>I?(H.sortIndex=ie,e(p,H),n(h)===null&&H===n(p)&&(T?(U(X),X=-1):T=!0,We(B,ie-I))):(H.sortIndex=ae,e(h,H),k||S||(k=!0,W||(W=!0,Ne()))),H},s.unstable_shouldYield=Ke,s.unstable_wrapCallback=function(H){var Q=v;return function(){var ie=v;v=Q;try{return H.apply(this,arguments)}finally{v=ie}}}})(Qf)),Qf}var Y0;function V2(){return Y0||(Y0=1,Xf.exports=U2()),Xf.exports}var Ff={exports:{}},Dt={};var K0;function G2(){if(K0)return Dt;K0=1;var s=mh();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,p,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:h,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Dt.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(h,p,null,g)},Dt.flushSync=function(h){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=g,a.d.f()}},Dt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},Dt.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Dt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(h,{crossOrigin:b,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},Dt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dt.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},Dt.requestFormReset=function(h){a.d.r(h)},Dt.unstable_batchedUpdates=function(h,p){return h(p)},Dt.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},Dt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Dt.version="19.2.7",Dt}var W0;function $2(){if(W0)return Ff.exports;W0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ff.exports=G2(),Ff.exports}var X0;function Y2(){if(X0)return jr;X0=1;var s=V2(),e=mh(),n=$2();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,o=i;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(o=d.return,o!==null){r=o;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return h(d),t;if(m===o)return h(d),i;m=m.sibling}throw Error(a(188))}if(r.return!==o.return)r=d,o=m;else{for(var y=!1,w=d.child;w;){if(w===r){y=!0,r=d,o=m;break}if(w===o){y=!0,o=d,r=m;break}w=w.sibling}if(!y){for(w=m.child;w;){if(w===r){y=!0,r=m,o=d;break}if(w===o){y=!0,o=m,r=d;break}w=w.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),K=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Ne(t){return t===null||typeof t!="object"?null:(t=ot&&t[ot]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function Le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case W:return"SuspenseList";case me:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case K:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return i=t.displayName||null,i!==null?i:Le(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return Le(t(i))}catch{}}return null}var We=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},I=[],ae=-1;function E(t){return{current:t}}function q(t){0>ae||(t.current=I[ae],I[ae]=null,ae--)}function F(t,i){ae++,I[ae]=t.current,t.current=i}var Z=E(null),re=E(null),le=E(null),ye=E(null);function Ue(t,i){switch(F(le,i),F(re,t),F(Z,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?o0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=o0(i),t=c0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Z),F(Z,t)}function Ve(){q(Z),q(re),q(le)}function Bt(t){t.memoizedState!==null&&F(ye,t);var i=Z.current,r=c0(i,t.type);i!==r&&(F(re,t),F(Z,r))}function Vt(t){re.current===t&&(q(Z),q(re)),ye.current===t&&(q(ye),Rr._currentValue=ie)}var Lt,Ds;function En(t){if(Lt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Lt=i&&i[1]||"",Ds=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+t+Ds}var ui=!1;function fi(t,i){if(!t||ui)return"";ui=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(L){var z=L}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(L){z=L}t.call(Y.prototype)}}else{try{throw Error()}catch(L){z=L}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(L){if(L&&z&&typeof L.stack=="string")return[L.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),y=m[0],w=m[1];if(y&&w){var A=y.split(`
`),j=w.split(`
`);for(d=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(o===A.length||d===j.length)for(o=A.length-1,d=j.length-1;1<=o&&0<=d&&A[o]!==j[d];)d--;for(;1<=o&&0<=d;o--,d--)if(A[o]!==j[d]){if(o!==1||d!==1)do if(o--,d--,0>d||A[o]!==j[d]){var V=`
`+A[o].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=o&&0<=d);break}}}finally{ui=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?En(r):""}function Re(t,i){switch(t.tag){case 26:case 27:case 5:return En(t.type);case 16:return En("Lazy");case 13:return t.child!==i&&i!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return fi(t.type,!1);case 11:return fi(t.type.render,!1);case 1:return fi(t.type,!0);case 31:return En("Activity");default:return""}}function _a(t){try{var i="",r=null;do i+=Re(t,r),r=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fi=Object.prototype.hasOwnProperty,Ha=s.unstable_scheduleCallback,qa=s.unstable_cancelCallback,Ec=s.unstable_shouldYield,Mc=s.unstable_requestPaint,_t=s.unstable_now,Rc=s.unstable_getCurrentPriorityLevel,ul=s.unstable_ImmediatePriority,fl=s.unstable_UserBlockingPriority,de=s.unstable_NormalPriority,Ee=s.unstable_LowPriority,pt=s.unstable_IdlePriority,Ua=s.log,js=s.unstable_setDisableYieldValue,di=null,Je=null;function et(t){if(typeof Ua=="function"&&js(t),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(di,t)}catch{}}var bt=Math.clz32?Math.clz32:Oc,Cc=Math.log,dl=Math.LN2;function Oc(t){return t>>>=0,t===0?32:31-(Cc(t)/dl|0)|0}var zs=256,hl=262144,ml=4194304;function Zi(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pl(t,i,r){var o=t.pendingLanes;if(o===0)return 0;var d=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~m,o!==0?d=Zi(o):(y&=w,y!==0?d=Zi(y):r||(r=w&~t,r!==0&&(d=Zi(r))))):(w=o&~m,w!==0?d=Zi(w):y!==0?d=Zi(y):r||(r=o&~t,r!==0&&(d=Zi(r)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:d}function Va(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function k1(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(){var t=ml;return ml<<=1,(ml&62914560)===0&&(ml=4194304),t}function Nc(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ga(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function T1(t,i,r,o,d,m){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,A=t.expirationTimes,j=t.hiddenUpdates;for(r=y&~r;0<r;){var V=31-bt(r),Y=1<<V;w[V]=0,A[V]=-1;var z=j[V];if(z!==null)for(j[V]=null,V=0;V<z.length;V++){var L=z[V];L!==null&&(L.lane&=-536870913)}r&=~Y}o!==0&&Yh(t,o,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Yh(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-bt(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Kh(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-bt(r),d=1<<o;d&i|t[o]&i&&(t[o]|=i),r&=~d}}function Wh(t,i){var r=i&-i;return r=(r&42)!==0?1:Dc(r),(r&(t.suspendedLanes|i))!==0?0:r}function Dc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:D0(t.type))}function Qh(t,i){var r=Q.p;try{return Q.p=t,i()}finally{Q.p=r}}var hi=Math.random().toString(36).slice(2),kt="__reactFiber$"+hi,Gt="__reactProps$"+hi,Bs="__reactContainer$"+hi,zc="__reactEvents$"+hi,A1="__reactListeners$"+hi,E1="__reactHandles$"+hi,Fh="__reactResources$"+hi,$a="__reactMarker$"+hi;function Bc(t){delete t[kt],delete t[Gt],delete t[zc],delete t[A1],delete t[E1]}function Ls(t){var i=t[kt];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Bs]||r[kt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=g0(t);t!==null;){if(r=t[kt])return r;t=g0(t)}return i}t=r,r=t.parentNode}return null}function _s(t){if(t=t[kt]||t[Bs]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ya(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Hs(t){var i=t[Fh];return i||(i=t[Fh]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(t){t[$a]=!0}var Zh=new Set,Ph={};function Pi(t,i){qs(t,i),qs(t+"Capture",i)}function qs(t,i){for(Ph[t]=i,t=0;t<i.length;t++)Zh.add(i[t])}var M1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jh={},Ih={};function R1(t){return Fi.call(Ih,t)?!0:Fi.call(Jh,t)?!1:M1.test(t)?Ih[t]=!0:(Jh[t]=!0,!1)}function gl(t,i,r){if(R1(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function yl(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Hn(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function C1(t,i,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){r=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Lc(t){if(!t._valueTracker){var i=em(t)?"checked":"value";t._valueTracker=C1(t,i,""+t[i])}}function tm(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=em(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var O1=/[\n"\\]/g;function un(t){return t.replace(O1,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _c(t,i,r,o,d,m,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+cn(i)):t.value!==""+cn(i)&&(t.value=""+cn(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Hc(t,y,cn(i)):r!=null?Hc(t,y,cn(r)):o!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+cn(w):t.removeAttribute("name")}function nm(t,i,r,o,d,m,y,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Lc(t);return}r=r!=null?""+cn(r):"",i=i!=null?""+cn(i):r,w||i===t.value||(t.value=i),t.defaultValue=i}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Lc(t)}function Hc(t,i,r){i==="number"&&bl(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Us(t,i,r,o){if(t=t.options,i){i={};for(var d=0;d<r.length;d++)i["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=i.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&o&&(t[r].defaultSelected=!0)}else{for(r=""+cn(r),i=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function im(t,i,r){if(i!=null&&(i=""+cn(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+cn(r):""}function sm(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(a(92));if(We(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=cn(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Lc(t)}function Vs(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var N1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||N1.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function rm(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in i)o=i[d],i.hasOwnProperty(d)&&r[d]!==o&&am(t,d,o)}else for(var m in i)i.hasOwnProperty(m)&&am(t,m,i[m])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return j1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qn(){}var Uc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,$s=null;function lm(t){var i=_s(t);if(i&&(t=i.stateNode)){var r=t[Gt]||null;e:switch(t=i.stateNode,i.type){case"input":if(_c(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+un(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var d=o[Gt]||null;if(!d)throw Error(a(90));_c(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&tm(o)}break e;case"textarea":im(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Us(t,!!r.multiple,i,!1)}}}var Gc=!1;function om(t,i,r){if(Gc)return t(i,r);Gc=!0;try{var o=t(i);return o}finally{if(Gc=!1,(Gs!==null||$s!==null)&&(ro(),Gs&&(i=Gs,t=$s,$s=Gs=null,lm(i),t)))for(i=0;i<t.length;i++)lm(t[i])}}function Ka(t,i){var r=t.stateNode;if(r===null)return null;var o=r[Gt]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Un)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{$c=!1}var mi=null,Yc=null,xl=null;function cm(){if(xl)return xl;var t,i=Yc,r=i.length,o,d="value"in mi?mi.value:mi.textContent,m=d.length;for(t=0;t<r&&i[t]===d[t];t++);var y=r-t;for(o=1;o<=y&&i[r-o]===d[m-o];o++);return xl=d.slice(t,1<o?1-o:void 0)}function Sl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function um(){return!1}function $t(t){function i(r,o,d,m,y){this._reactName=r,this._targetInst=d,this.type=o,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wl:um,this.isPropagationStopped=um,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=$t(Ji),Xa=b({},Ji,{view:0,detail:0}),z1=$t(Xa),Kc,Wc,Qa,Tl=b({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Kc=t.screenX-Qa.screenX,Wc=t.screenY-Qa.screenY):Wc=Kc=0,Qa=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),fm=$t(Tl),B1=b({},Tl,{dataTransfer:0}),L1=$t(B1),_1=b({},Xa,{relatedTarget:0}),Xc=$t(_1),H1=b({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=$t(H1),U1=b({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V1=$t(U1),G1=b({},Ji,{data:0}),dm=$t(G1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=K1[t])?!!i[t]:!1}function Qc(){return W1}var X1=b({},Xa,{key:function(t){if(t.key){var i=$1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=$t(X1),F1=b({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=$t(F1),Z1=b({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),P1=$t(Z1),J1=b({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=$t(J1),ex=b({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=$t(ex),nx=b({},Ji,{newState:0,oldState:0}),ix=$t(nx),sx=[9,13,27,32],Fc=Un&&"CompositionEvent"in window,Fa=null;Un&&"documentMode"in document&&(Fa=document.documentMode);var ax=Un&&"TextEvent"in window&&!Fa,mm=Un&&(!Fc||Fa&&8<Fa&&11>=Fa),pm=" ",gm=!1;function ym(t,i){switch(t){case"keyup":return sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function rx(t,i){switch(t){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(gm=!0,pm);case"textInput":return t=i.data,t===pm&&gm?null:t;default:return null}}function lx(t,i){if(Ys)return t==="compositionend"||!Fc&&ym(t,i)?(t=cm(),xl=Yc=mi=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mm&&i.locale!=="ko"?null:i.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ox[t.type]:i==="textarea"}function xm(t,i,r,o){Gs?$s?$s.push(o):$s=[o]:Gs=o,i=mo(i,"onChange"),0<i.length&&(r=new kl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var Za=null,Pa=null;function cx(t){n0(t,0)}function Al(t){var i=Ya(t);if(tm(i))return t}function Sm(t,i){if(t==="change")return i}var wm=!1;if(Un){var Zc;if(Un){var Pc="oninput"in document;if(!Pc){var km=document.createElement("div");km.setAttribute("oninput","return;"),Pc=typeof km.oninput=="function"}Zc=Pc}else Zc=!1;wm=Zc&&(!document.documentMode||9<document.documentMode)}function Tm(){Za&&(Za.detachEvent("onpropertychange",Am),Pa=Za=null)}function Am(t){if(t.propertyName==="value"&&Al(Pa)){var i=[];xm(i,Pa,t,Vc(t)),om(cx,i)}}function ux(t,i,r){t==="focusin"?(Tm(),Za=i,Pa=r,Za.attachEvent("onpropertychange",Am)):t==="focusout"&&Tm()}function fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(Pa)}function dx(t,i){if(t==="click")return Al(i)}function hx(t,i){if(t==="input"||t==="change")return Al(i)}function mx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Pt=typeof Object.is=="function"?Object.is:mx;function Ja(t,i){if(Pt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var d=r[o];if(!Fi.call(i,d)||!Pt(t[d],i[d]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,i){var r=Em(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Em(r)}}function Rm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=bl(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=bl(t.document)}return i}function Jc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var px=Un&&"documentMode"in document&&11>=document.documentMode,Ks=null,Ic=null,Ia=null,eu=!1;function Om(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;eu||Ks==null||Ks!==bl(o)||(o=Ks,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ia&&Ja(Ia,o)||(Ia=o,o=mo(Ic,"onSelect"),0<o.length&&(i=new kl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=Ks)))}function Ii(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Ws={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionrun:Ii("Transition","TransitionRun"),transitionstart:Ii("Transition","TransitionStart"),transitioncancel:Ii("Transition","TransitionCancel"),transitionend:Ii("Transition","TransitionEnd")},tu={},Nm={};Un&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function es(t){if(tu[t])return tu[t];if(!Ws[t])return t;var i=Ws[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Nm)return tu[t]=i[r];return t}var Dm=es("animationend"),jm=es("animationiteration"),zm=es("animationstart"),gx=es("transitionrun"),yx=es("transitionstart"),bx=es("transitioncancel"),Bm=es("transitionend"),Lm=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function xn(t,i){Lm.set(t,i),Pi(i,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fn=[],Xs=0,iu=0;function Ml(){for(var t=Xs,i=iu=Xs=0;i<t;){var r=fn[i];fn[i++]=null;var o=fn[i];fn[i++]=null;var d=fn[i];fn[i++]=null;var m=fn[i];if(fn[i++]=null,o!==null&&d!==null){var y=o.pending;y===null?d.next=d:(d.next=y.next,y.next=d),o.pending=d}m!==0&&_m(r,d,m)}}function Rl(t,i,r,o){fn[Xs++]=t,fn[Xs++]=i,fn[Xs++]=r,fn[Xs++]=o,iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function su(t,i,r,o){return Rl(t,i,r,o),Cl(t)}function ts(t,i){return Rl(t,null,null,i),Cl(t)}function _m(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var d=!1,m=t.return;m!==null;)m.childLanes|=r,o=m.alternate,o!==null&&(o.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-bt(r),t=m.hiddenUpdates,o=t[d],o===null?t[d]=[i]:o.push(i),i.lane=r|536870912),m):null}function Cl(t){if(50<Sr)throw Sr=0,mf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Qs={};function vx(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,i,r,o){return new vx(t,i,r,o)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vn(t,i){var r=t.alternate;return r===null?(r=Jt(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Hm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ol(t,i,r,o,d,m){var y=0;if(o=t,typeof t=="function")au(t)&&(y=1);else if(typeof t=="string")y=T2(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case me:return t=Jt(31,r,i,d),t.elementType=me,t.lanes=m,t;case T:return ns(r.children,d,m,i);case C:y=8,d|=24;break;case _:return t=Jt(12,r,i,d|2),t.elementType=_,t.lanes=m,t;case B:return t=Jt(13,r,i,d),t.elementType=B,t.lanes=m,t;case W:return t=Jt(19,r,i,d),t.elementType=W,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:y=10;break e;case U:y=9;break e;case $:y=11;break e;case X:y=14;break e;case te:y=16,o=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=Jt(y,r,i,d),i.elementType=t,i.type=o,i.lanes=m,i}function ns(t,i,r,o){return t=Jt(7,t,o,i),t.lanes=r,t}function ru(t,i,r){return t=Jt(6,t,null,i),t.lanes=r,t}function qm(t){var i=Jt(18,null,null,0);return i.stateNode=t,i}function lu(t,i,r){return i=Jt(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Um=new WeakMap;function dn(t,i){if(typeof t=="object"&&t!==null){var r=Um.get(t);return r!==void 0?r:(i={value:t,source:i,stack:_a(i)},Um.set(t,i),i)}return{value:t,source:i,stack:_a(i)}}var Fs=[],Zs=0,Nl=null,er=0,hn=[],mn=0,pi=null,Mn=1,Rn="";function Gn(t,i){Fs[Zs++]=er,Fs[Zs++]=Nl,Nl=t,er=i}function Vm(t,i,r){hn[mn++]=Mn,hn[mn++]=Rn,hn[mn++]=pi,pi=t;var o=Mn;t=Rn;var d=32-bt(o)-1;o&=~(1<<d),r+=1;var m=32-bt(i)+d;if(30<m){var y=d-d%5;m=(o&(1<<y)-1).toString(32),o>>=y,d-=y,Mn=1<<32-bt(i)+d|r<<d|o,Rn=m+t}else Mn=1<<m|r<<d|o,Rn=t}function ou(t){t.return!==null&&(Gn(t,1),Vm(t,1,0))}function cu(t){for(;t===Nl;)Nl=Fs[--Zs],Fs[Zs]=null,er=Fs[--Zs],Fs[Zs]=null;for(;t===pi;)pi=hn[--mn],hn[mn]=null,Rn=hn[--mn],hn[mn]=null,Mn=hn[--mn],hn[mn]=null}function Gm(t,i){hn[mn++]=Mn,hn[mn++]=Rn,hn[mn++]=pi,Mn=i.id,Rn=i.overflow,pi=t}var Tt=null,Fe=null,ke=!1,gi=null,pn=!1,uu=Error(a(519));function yi(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tr(dn(i,t)),uu}function $m(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[kt]=t,i[Gt]=o,r){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(r=0;r<kr.length;r++)xe(kr[r],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),nm(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),sm(i,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||r0(i.textContent,r)?(o.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),o.onScroll!=null&&xe("scroll",i),o.onScrollEnd!=null&&xe("scrollend",i),o.onClick!=null&&(i.onclick=qn),i=!0):i=!1,i||yi(t,!0)}function Ym(t){for(Tt=t.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:Tt=Tt.return}}function Ps(t){if(t!==Tt)return!1;if(!ke)return Ym(t),ke=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Cf(t.type,t.memoizedProps)),r=!r),r&&Fe&&yi(t),Ym(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Fe=p0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Fe=p0(t)}else i===27?(i=Fe,Ni(t.type)?(t=zf,zf=null,Fe=t):Fe=i):Fe=Tt?yn(t.stateNode.nextSibling):null;return!0}function is(){Fe=Tt=null,ke=!1}function fu(){var t=gi;return t!==null&&(Xt===null?Xt=t:Xt.push.apply(Xt,t),gi=null),t}function tr(t){gi===null?gi=[t]:gi.push(t)}var du=E(null),ss=null,$n=null;function bi(t,i,r){F(du,i._currentValue),i._currentValue=r}function Yn(t){t._currentValue=du.current,q(du)}function hu(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function mu(t,i,r,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var A=0;A<i.length;A++)if(w.context===i[A]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),hu(m.return,r,t),o||(y=null);break e}m=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(a(341));y.lanes|=r,m=y.alternate,m!==null&&(m.lanes|=r),hu(y,r,t),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===t){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Js(t,i,r,o){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var w=d.type;Pt(d.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(d===ye.current){if(y=d.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Rr):t=[Rr])}d=d.return}t!==null&&mu(i,t,r,o),i.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function as(t){ss=t,$n=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return Km(ss,t)}function jl(t,i){return ss===null&&as(t),Km(t,i)}function Km(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},$n===null){if(t===null)throw Error(a(308));$n=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else $n=$n.next=i;return r}var xx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},Sx=s.unstable_scheduleCallback,wx=s.unstable_NormalPriority,ct={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new xx,data:new Map,refCount:0}}function nr(t){t.refCount--,t.refCount===0&&Sx(wx,function(){t.controller.abort()})}var ir=null,gu=0,Is=0,ea=null;function kx(t,i){if(ir===null){var r=ir=[];gu=0,Is=xf(),ea={status:"pending",value:void 0,then:function(o){r.push(o)}}}return gu++,i.then(Wm,Wm),i}function Wm(){if(--gu===0&&ir!==null){ea!==null&&(ea.status="fulfilled");var t=ir;ir=null,Is=0,ea=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Tx(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var d=0;d<r.length;d++)(0,r[d])(i)},function(d){for(o.status="rejected",o.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),o}var Xm=H.S;H.S=function(t,i){Og=_t(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&kx(t,i),Xm!==null&&Xm(t,i)};var rs=E(null);function yu(){var t=rs.current;return t!==null?t:Ge.pooledCache}function zl(t,i){i===null?F(rs,rs.current):F(rs,i.pool)}function Qm(){var t=yu();return t===null?null:{parent:ct._currentValue,pool:t}}var ta=Error(a(460)),bu=Error(a(474)),Bl=Error(a(542)),Ll={then:function(){}};function Fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(qn,qn),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t;default:if(typeof i.status=="string")i.then(qn,qn);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=o}},function(o){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t}throw os=i,ta}}function ls(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(os=r,ta):r}}var os=null;function Pm(){if(os===null)throw Error(a(459));var t=os;return os=null,t}function Jm(t){if(t===ta||t===Bl)throw Error(a(483))}var na=null,sr=0;function _l(t){var i=sr;return sr+=1,na===null&&(na=[]),Zm(na,t,i)}function ar(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Hl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Im(t){function i(O,R){if(t){var D=O.deletions;D===null?(O.deletions=[R],O.flags|=16):D.push(R)}}function r(O,R){if(!t)return null;for(;R!==null;)i(O,R),R=R.sibling;return null}function o(O){for(var R=new Map;O!==null;)O.key!==null?R.set(O.key,O):R.set(O.index,O),O=O.sibling;return R}function d(O,R){return O=Vn(O,R),O.index=0,O.sibling=null,O}function m(O,R,D){return O.index=D,t?(D=O.alternate,D!==null?(D=D.index,D<R?(O.flags|=67108866,R):D):(O.flags|=67108866,R)):(O.flags|=1048576,R)}function y(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function w(O,R,D,G){return R===null||R.tag!==6?(R=ru(D,O.mode,G),R.return=O,R):(R=d(R,D),R.return=O,R)}function A(O,R,D,G){var se=D.type;return se===T?V(O,R,D.props.children,G,D.key):R!==null&&(R.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&ls(se)===R.type)?(R=d(R,D.props),ar(R,D),R.return=O,R):(R=Ol(D.type,D.key,D.props,null,O.mode,G),ar(R,D),R.return=O,R)}function j(O,R,D,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==D.containerInfo||R.stateNode.implementation!==D.implementation?(R=lu(D,O.mode,G),R.return=O,R):(R=d(R,D.children||[]),R.return=O,R)}function V(O,R,D,G,se){return R===null||R.tag!==7?(R=ns(D,O.mode,G,se),R.return=O,R):(R=d(R,D),R.return=O,R)}function Y(O,R,D){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ru(""+R,O.mode,D),R.return=O,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return D=Ol(R.type,R.key,R.props,null,O.mode,D),ar(D,R),D.return=O,D;case k:return R=lu(R,O.mode,D),R.return=O,R;case te:return R=ls(R),Y(O,R,D)}if(We(R)||Ne(R))return R=ns(R,O.mode,D,null),R.return=O,R;if(typeof R.then=="function")return Y(O,_l(R),D);if(R.$$typeof===K)return Y(O,jl(O,R),D);Hl(O,R)}return null}function z(O,R,D,G){var se=R!==null?R.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:w(O,R,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===se?A(O,R,D,G):null;case k:return D.key===se?j(O,R,D,G):null;case te:return D=ls(D),z(O,R,D,G)}if(We(D)||Ne(D))return se!==null?null:V(O,R,D,G,null);if(typeof D.then=="function")return z(O,R,_l(D),G);if(D.$$typeof===K)return z(O,R,jl(O,D),G);Hl(O,D)}return null}function L(O,R,D,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return O=O.get(D)||null,w(R,O,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return O=O.get(G.key===null?D:G.key)||null,A(R,O,G,se);case k:return O=O.get(G.key===null?D:G.key)||null,j(R,O,G,se);case te:return G=ls(G),L(O,R,D,G,se)}if(We(G)||Ne(G))return O=O.get(D)||null,V(R,O,G,se,null);if(typeof G.then=="function")return L(O,R,D,_l(G),se);if(G.$$typeof===K)return L(O,R,D,jl(R,G),se);Hl(R,G)}return null}function ee(O,R,D,G){for(var se=null,Ce=null,ne=R,pe=R=0,we=null;ne!==null&&pe<D.length;pe++){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var Oe=z(O,ne,D[pe],G);if(Oe===null){ne===null&&(ne=we);break}t&&ne&&Oe.alternate===null&&i(O,ne),R=m(Oe,R,pe),Ce===null?se=Oe:Ce.sibling=Oe,Ce=Oe,ne=we}if(pe===D.length)return r(O,ne),ke&&Gn(O,pe),se;if(ne===null){for(;pe<D.length;pe++)ne=Y(O,D[pe],G),ne!==null&&(R=m(ne,R,pe),Ce===null?se=ne:Ce.sibling=ne,Ce=ne);return ke&&Gn(O,pe),se}for(ne=o(ne);pe<D.length;pe++)we=L(ne,O,pe,D[pe],G),we!==null&&(t&&we.alternate!==null&&ne.delete(we.key===null?pe:we.key),R=m(we,R,pe),Ce===null?se=we:Ce.sibling=we,Ce=we);return t&&ne.forEach(function(Li){return i(O,Li)}),ke&&Gn(O,pe),se}function oe(O,R,D,G){if(D==null)throw Error(a(151));for(var se=null,Ce=null,ne=R,pe=R=0,we=null,Oe=D.next();ne!==null&&!Oe.done;pe++,Oe=D.next()){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var Li=z(O,ne,Oe.value,G);if(Li===null){ne===null&&(ne=we);break}t&&ne&&Li.alternate===null&&i(O,ne),R=m(Li,R,pe),Ce===null?se=Li:Ce.sibling=Li,Ce=Li,ne=we}if(Oe.done)return r(O,ne),ke&&Gn(O,pe),se;if(ne===null){for(;!Oe.done;pe++,Oe=D.next())Oe=Y(O,Oe.value,G),Oe!==null&&(R=m(Oe,R,pe),Ce===null?se=Oe:Ce.sibling=Oe,Ce=Oe);return ke&&Gn(O,pe),se}for(ne=o(ne);!Oe.done;pe++,Oe=D.next())Oe=L(ne,O,pe,Oe.value,G),Oe!==null&&(t&&Oe.alternate!==null&&ne.delete(Oe.key===null?pe:Oe.key),R=m(Oe,R,pe),Ce===null?se=Oe:Ce.sibling=Oe,Ce=Oe);return t&&ne.forEach(function(B2){return i(O,B2)}),ke&&Gn(O,pe),se}function qe(O,R,D,G){if(typeof D=="object"&&D!==null&&D.type===T&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:e:{for(var se=D.key;R!==null;){if(R.key===se){if(se=D.type,se===T){if(R.tag===7){r(O,R.sibling),G=d(R,D.props.children),G.return=O,O=G;break e}}else if(R.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&ls(se)===R.type){r(O,R.sibling),G=d(R,D.props),ar(G,D),G.return=O,O=G;break e}r(O,R);break}else i(O,R);R=R.sibling}D.type===T?(G=ns(D.props.children,O.mode,G,D.key),G.return=O,O=G):(G=Ol(D.type,D.key,D.props,null,O.mode,G),ar(G,D),G.return=O,O=G)}return y(O);case k:e:{for(se=D.key;R!==null;){if(R.key===se)if(R.tag===4&&R.stateNode.containerInfo===D.containerInfo&&R.stateNode.implementation===D.implementation){r(O,R.sibling),G=d(R,D.children||[]),G.return=O,O=G;break e}else{r(O,R);break}else i(O,R);R=R.sibling}G=lu(D,O.mode,G),G.return=O,O=G}return y(O);case te:return D=ls(D),qe(O,R,D,G)}if(We(D))return ee(O,R,D,G);if(Ne(D)){if(se=Ne(D),typeof se!="function")throw Error(a(150));return D=se.call(D),oe(O,R,D,G)}if(typeof D.then=="function")return qe(O,R,_l(D),G);if(D.$$typeof===K)return qe(O,R,jl(O,D),G);Hl(O,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,R!==null&&R.tag===6?(r(O,R.sibling),G=d(R,D),G.return=O,O=G):(r(O,R),G=ru(D,O.mode,G),G.return=O,O=G),y(O)):r(O,R)}return function(O,R,D,G){try{sr=0;var se=qe(O,R,D,G);return na=null,se}catch(ne){if(ne===ta||ne===Bl)throw ne;var Ce=Jt(29,ne,null,O.mode);return Ce.lanes=G,Ce.return=O,Ce}}}var cs=Im(!0),ep=Im(!1),vi=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Si(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var d=o.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),o.pending=i,i=Cl(t),_m(t,null,r),i}return Rl(t,o,i,r),Cl(t)}function rr(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Kh(t,r)}}function Su(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,r=r.next}while(r!==null);m===null?d=m=i:m=m.next=i}else d=m=i;r={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var wu=!1;function lr(){if(wu){var t=ea;if(t!==null)throw t}}function or(t,i,r,o){wu=!1;var d=t.updateQueue;vi=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var A=w,j=A.next;A.next=null,y===null?m=j:y.next=j,y=A;var V=t.alternate;V!==null&&(V=V.updateQueue,w=V.lastBaseUpdate,w!==y&&(w===null?V.firstBaseUpdate=j:w.next=j,V.lastBaseUpdate=A))}if(m!==null){var Y=d.baseState;y=0,V=j=A=null,w=m;do{var z=w.lane&-536870913,L=z!==w.lane;if(L?(Se&z)===z:(o&z)===z){z!==0&&z===Is&&(wu=!0),V!==null&&(V=V.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ee=t,oe=w;z=i;var qe=r;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){Y=ee.call(qe,Y,z);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,z=typeof ee=="function"?ee.call(qe,Y,z):ee,z==null)break e;Y=b({},Y,z);break e;case 2:vi=!0}}z=w.callback,z!==null&&(t.flags|=64,L&&(t.flags|=8192),L=d.callbacks,L===null?d.callbacks=[z]:L.push(z))}else L={lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},V===null?(j=V=L,A=Y):V=V.next=L,y|=z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);V===null&&(A=Y),d.baseState=A,d.firstBaseUpdate=j,d.lastBaseUpdate=V,m===null&&(d.shared.lanes=0),Ei|=y,t.lanes=y,t.memoizedState=Y}}function tp(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function np(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)tp(r[t],i)}var ia=E(null),ql=E(0);function ip(t,i){t=In,F(ql,t),F(ia,i),In=t|i.baseLanes}function ku(){F(ql,In),F(ia,ia.current)}function Tu(){In=ql.current,q(ia),q(ql)}var It=E(null),gn=null;function wi(t){var i=t.alternate;F(st,st.current&1),F(It,t),gn===null&&(i===null||ia.current!==null||i.memoizedState!==null)&&(gn=t)}function Au(t){F(st,st.current),F(It,t),gn===null&&(gn=t)}function sp(t){t.tag===22?(F(st,st.current),F(It,t),gn===null&&(gn=t)):ki()}function ki(){F(st,st.current),F(It,It.current)}function en(t){q(It),gn===t&&(gn=null),q(st)}var st=E(0);function Ul(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Df(r)||jf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kn=0,he=null,_e=null,ut=null,Vl=!1,sa=!1,us=!1,Gl=0,cr=0,aa=null,Ax=0;function tt(){throw Error(a(321))}function Eu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Pt(t[r],i[r]))return!1;return!0}function Mu(t,i,r,o,d,m){return Kn=m,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?Vp:Gu,us=!1,m=r(o,d),us=!1,sa&&(m=rp(i,r,o,d)),ap(t),m}function ap(t){H.H=dr;var i=_e!==null&&_e.next!==null;if(Kn=0,ut=_e=he=null,Vl=!1,cr=0,aa=null,i)throw Error(a(300));t===null||ft||(t=t.dependencies,t!==null&&Dl(t)&&(ft=!0))}function rp(t,i,r,o){he=t;var d=0;do{if(sa&&(aa=null),cr=0,sa=!1,25<=d)throw Error(a(301));if(d+=1,ut=_e=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=Gp,m=i(r,o)}while(sa);return m}function Ex(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?ur(i):i,t=t.useState()[0],(_e!==null?_e.memoizedState:null)!==t&&(he.flags|=1024),i}function Ru(){var t=Gl!==0;return Gl=0,t}function Cu(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Ou(t){if(Vl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Vl=!1}Kn=0,ut=_e=he=null,sa=!1,cr=Gl=0,aa=null}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?he.memoizedState=ut=t:ut=ut.next=t,ut}function at(){if(_e===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var i=ut===null?he.memoizedState:ut.next;if(i!==null)ut=i,_e=t;else{if(t===null)throw he.alternate===null?Error(a(467)):Error(a(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ut===null?he.memoizedState=ut=t:ut=ut.next=t}return ut}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ur(t){var i=cr;return cr+=1,aa===null&&(aa=[]),t=Zm(aa,t,i),i=he,(ut===null?i.memoizedState:ut.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Vp:Gu),t}function Yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ur(t);if(t.$$typeof===K)return At(t)}throw Error(a(438,String(t)))}function Nu(t){var i=null,r=he.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=$l(),he.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=Ke;return i.index++,r}function Wn(t,i){return typeof i=="function"?i(t):i}function Kl(t){var i=at();return Du(i,_e,t)}function Du(t,i,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var d=t.baseQueue,m=o.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}i.baseQueue=d=m,o.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var w=y=null,A=null,j=i,V=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(Se&Y)===Y:(Kn&Y)===Y){var z=j.revertLane;if(z===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===Is&&(V=!0);else if((Kn&z)===z){j=j.next,z===Is&&(V=!0);continue}else Y={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(w=A=Y,y=m):A=A.next=Y,he.lanes|=z,Ei|=z;Y=j.action,us&&r(m,Y),m=j.hasEagerState?j.eagerState:r(m,Y)}else z={lane:Y,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(w=A=z,y=m):A=A.next=z,he.lanes|=Y,Ei|=Y;j=j.next}while(j!==null&&j!==i);if(A===null?y=m:A.next=w,!Pt(m,t.memoizedState)&&(ft=!0,V&&(r=ea,r!==null)))throw r;t.memoizedState=m,t.baseState=y,t.baseQueue=A,o.lastRenderedState=m}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ju(t){var i=at(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,d=r.pending,m=i.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do m=t(m,y.action),y=y.next;while(y!==d);Pt(m,i.memoizedState)||(ft=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,o]}function lp(t,i,r){var o=he,d=at(),m=ke;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var y=!Pt((_e||d).memoizedState,r);if(y&&(d.memoizedState=r,ft=!0),d=d.queue,Lu(up.bind(null,o,d,t),[t]),d.getSnapshot!==i||y||ut!==null&&ut.memoizedState.tag&1){if(o.flags|=2048,ra(9,{destroy:void 0},cp.bind(null,o,d,r,i),null),Ge===null)throw Error(a(349));m||(Kn&127)!==0||op(o,i,r)}return r}function op(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=he.updateQueue,i===null?(i=$l(),he.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function cp(t,i,r,o){i.value=r,i.getSnapshot=o,fp(i)&&dp(t)}function up(t,i,r){return r(function(){fp(i)&&dp(t)})}function fp(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Pt(t,r)}catch{return!0}}function dp(t){var i=ts(t,2);i!==null&&Qt(i,t,2)}function zu(t){var i=Ht();if(typeof t=="function"){var r=t;if(t=r(),us){et(!0);try{r()}finally{et(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},i}function hp(t,i,r,o){return t.baseState=r,Du(t,_e,typeof o=="function"?o:Wn)}function Mx(t,i,r,o,d){if(Ql(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};H.T!==null?r(!0):m.isTransition=!1,o(m),r=i.pending,r===null?(m.next=i.pending=m,mp(i,m)):(m.next=r.next,i.pending=r.next=m)}}function mp(t,i){var r=i.action,o=i.payload,d=t.state;if(i.isTransition){var m=H.T,y={};H.T=y;try{var w=r(d,o),A=H.S;A!==null&&A(y,w),pp(t,i,w)}catch(j){Bu(t,i,j)}finally{m!==null&&y.types!==null&&(m.types=y.types),H.T=m}}else try{m=r(d,o),pp(t,i,m)}catch(j){Bu(t,i,j)}}function pp(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){gp(t,i,o)},function(o){return Bu(t,i,o)}):gp(t,i,r)}function gp(t,i,r){i.status="fulfilled",i.value=r,yp(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,mp(t,r)))}function Bu(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,yp(i),i=i.next;while(i!==o)}t.action=null}function yp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function bp(t,i){return i}function vp(t,i){if(ke){var r=Ge.formState;if(r!==null){e:{var o=he;if(ke){if(Fe){t:{for(var d=Fe,m=pn;d.nodeType!==8;){if(!m){d=null;break t}if(d=yn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Fe=yn(d.nextSibling),o=d.data==="F!";break e}}yi(o)}o=!1}o&&(i=r[0])}}return r=Ht(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:i},r.queue=o,r=Hp.bind(null,he,o),o.dispatch=r,o=zu(!1),m=Vu.bind(null,he,!1,o.queue),o=Ht(),d={state:i,dispatch:null,action:t,pending:null},o.queue=d,r=Mx.bind(null,he,d,m,r),d.dispatch=r,o.memoizedState=t,[i,r,!1]}function xp(t){var i=at();return Sp(i,_e,t)}function Sp(t,i,r){if(i=Du(t,i,bp)[0],t=Kl(Wn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=ur(i)}catch(y){throw y===ta?Bl:y}else o=i;i=at();var d=i.queue,m=d.dispatch;return r!==i.memoizedState&&(he.flags|=2048,ra(9,{destroy:void 0},Rx.bind(null,d,r),null)),[o,m,t]}function Rx(t,i){t.action=i}function wp(t){var i=at(),r=_e;if(r!==null)return Sp(i,r,t);at(),i=i.memoizedState,r=at();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function ra(t,i,r,o){return t={tag:t,create:r,deps:o,inst:i,next:null},i=he.updateQueue,i===null&&(i=$l(),he.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function kp(){return at().memoizedState}function Wl(t,i,r,o){var d=Ht();he.flags|=t,d.memoizedState=ra(1|i,{destroy:void 0},r,o===void 0?null:o)}function Xl(t,i,r,o){var d=at();o=o===void 0?null:o;var m=d.memoizedState.inst;_e!==null&&o!==null&&Eu(o,_e.memoizedState.deps)?d.memoizedState=ra(i,m,r,o):(he.flags|=t,d.memoizedState=ra(1|i,m,r,o))}function Tp(t,i){Wl(8390656,8,t,i)}function Lu(t,i){Xl(2048,8,t,i)}function Cx(t){he.flags|=4;var i=he.updateQueue;if(i===null)i=$l(),he.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function Ap(t){var i=at().memoizedState;return Cx({ref:i,nextImpl:t}),function(){if((De&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ep(t,i){return Xl(4,2,t,i)}function Mp(t,i){return Xl(4,4,t,i)}function Rp(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Cp(t,i,r){r=r!=null?r.concat([t]):null,Xl(4,4,Rp.bind(null,i,t),r)}function _u(){}function Op(t,i){var r=at();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&Eu(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function Np(t,i){var r=at();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&Eu(i,o[1]))return o[0];if(o=t(),us){et(!0);try{t()}finally{et(!1)}}return r.memoizedState=[o,i],o}function Hu(t,i,r){return r===void 0||(Kn&1073741824)!==0&&(Se&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Dg(),he.lanes|=t,Ei|=t,r)}function Dp(t,i,r,o){return Pt(r,i)?r:ia.current!==null?(t=Hu(t,r,o),Pt(t,i)||(ft=!0),t):(Kn&42)===0||(Kn&1073741824)!==0&&(Se&261930)===0?(ft=!0,t.memoizedState=r):(t=Dg(),he.lanes|=t,Ei|=t,i)}function jp(t,i,r,o,d){var m=Q.p;Q.p=m!==0&&8>m?m:8;var y=H.T,w={};H.T=w,Vu(t,!1,i,r);try{var A=d(),j=H.S;if(j!==null&&j(w,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=Tx(A,o);fr(t,i,V,sn(t))}else fr(t,i,o,sn(t))}catch(Y){fr(t,i,{then:function(){},status:"rejected",reason:Y},sn())}finally{Q.p=m,y!==null&&w.types!==null&&(y.types=w.types),H.T=y}}function Ox(){}function qu(t,i,r,o){if(t.tag!==5)throw Error(a(476));var d=zp(t).queue;jp(t,d,i,ie,r===null?Ox:function(){return Bp(t),r(o)})}function zp(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:ie},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Bp(t){var i=zp(t);i.next===null&&(i=t.alternate.memoizedState),fr(t,i.next.queue,{},sn())}function Uu(){return At(Rr)}function Lp(){return at().memoizedState}function _p(){return at().memoizedState}function Nx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=sn();t=xi(r);var o=Si(i,t,r);o!==null&&(Qt(o,i,r),rr(o,i,r)),i={cache:pu()},t.payload=i;return}i=i.return}}function Dx(t,i,r){var o=sn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ql(t)?qp(i,r):(r=su(t,i,r,o),r!==null&&(Qt(r,t,o),Up(r,i,o)))}function Hp(t,i,r){var o=sn();fr(t,i,r,o)}function fr(t,i,r,o){var d={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ql(t))qp(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,w=m(y,r);if(d.hasEagerState=!0,d.eagerState=w,Pt(w,y))return Rl(t,i,d,0),Ge===null&&Ml(),!1}catch{}if(r=su(t,i,d,o),r!==null)return Qt(r,t,o),Up(r,i,o),!0}return!1}function Vu(t,i,r,o){if(o={lane:2,revertLane:xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(t)){if(i)throw Error(a(479))}else i=su(t,r,o,2),i!==null&&Qt(i,t,2)}function Ql(t){var i=t.alternate;return t===he||i!==null&&i===he}function qp(t,i){sa=Vl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Up(t,i,r){if((r&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Kh(t,r)}}var dr={readContext:At,use:Yl,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};dr.useEffectEvent=tt;var Vp={readContext:At,use:Yl,useCallback:function(t,i){return Ht().memoizedState=[t,i===void 0?null:i],t},useContext:At,useEffect:Tp,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Wl(4194308,4,Rp.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Wl(4194308,4,t,i)},useInsertionEffect:function(t,i){Wl(4,2,t,i)},useMemo:function(t,i){var r=Ht();i=i===void 0?null:i;var o=t();if(us){et(!0);try{t()}finally{et(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=Ht();if(r!==void 0){var d=r(i);if(us){et(!0);try{r(i)}finally{et(!1)}}}else d=i;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=Dx.bind(null,he,t),[o.memoizedState,t]},useRef:function(t){var i=Ht();return t={current:t},i.memoizedState=t},useState:function(t){t=zu(t);var i=t.queue,r=Hp.bind(null,he,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:_u,useDeferredValue:function(t,i){var r=Ht();return Hu(r,t,i)},useTransition:function(){var t=zu(!1);return t=jp.bind(null,he,t.queue,!0,!1),Ht().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=he,d=Ht();if(ke){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ge===null)throw Error(a(349));(Se&127)!==0||op(o,i,r)}d.memoizedState=r;var m={value:r,getSnapshot:i};return d.queue=m,Tp(up.bind(null,o,m,t),[t]),o.flags|=2048,ra(9,{destroy:void 0},cp.bind(null,o,m,r,i),null),r},useId:function(){var t=Ht(),i=Ge.identifierPrefix;if(ke){var r=Rn,o=Mn;r=(o&~(1<<32-bt(o)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Gl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Ax++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Uu,useFormState:vp,useActionState:vp,useOptimistic:function(t){var i=Ht();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Vu.bind(null,he,!0,r),r.dispatch=i,[t,i]},useMemoCache:Nu,useCacheRefresh:function(){return Ht().memoizedState=Nx.bind(null,he)},useEffectEvent:function(t){var i=Ht(),r={impl:t};return i.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Gu={readContext:At,use:Yl,useCallback:Op,useContext:At,useEffect:Lu,useImperativeHandle:Cp,useInsertionEffect:Ep,useLayoutEffect:Mp,useMemo:Np,useReducer:Kl,useRef:kp,useState:function(){return Kl(Wn)},useDebugValue:_u,useDeferredValue:function(t,i){var r=at();return Dp(r,_e.memoizedState,t,i)},useTransition:function(){var t=Kl(Wn)[0],i=at().memoizedState;return[typeof t=="boolean"?t:ur(t),i]},useSyncExternalStore:lp,useId:Lp,useHostTransitionStatus:Uu,useFormState:xp,useActionState:xp,useOptimistic:function(t,i){var r=at();return hp(r,_e,t,i)},useMemoCache:Nu,useCacheRefresh:_p};Gu.useEffectEvent=Ap;var Gp={readContext:At,use:Yl,useCallback:Op,useContext:At,useEffect:Lu,useImperativeHandle:Cp,useInsertionEffect:Ep,useLayoutEffect:Mp,useMemo:Np,useReducer:ju,useRef:kp,useState:function(){return ju(Wn)},useDebugValue:_u,useDeferredValue:function(t,i){var r=at();return _e===null?Hu(r,t,i):Dp(r,_e.memoizedState,t,i)},useTransition:function(){var t=ju(Wn)[0],i=at().memoizedState;return[typeof t=="boolean"?t:ur(t),i]},useSyncExternalStore:lp,useId:Lp,useHostTransitionStatus:Uu,useFormState:wp,useActionState:wp,useOptimistic:function(t,i){var r=at();return _e!==null?hp(r,_e,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:_p};Gp.useEffectEvent=Ap;function $u(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:b({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Yu={enqueueSetState:function(t,i,r){t=t._reactInternals;var o=sn(),d=xi(o);d.payload=i,r!=null&&(d.callback=r),i=Si(t,d,o),i!==null&&(Qt(i,t,o),rr(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=sn(),d=xi(o);d.tag=1,d.payload=i,r!=null&&(d.callback=r),i=Si(t,d,o),i!==null&&(Qt(i,t,o),rr(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=sn(),o=xi(r);o.tag=2,i!=null&&(o.callback=i),i=Si(t,o,r),i!==null&&(Qt(i,t,r),rr(i,t,r))}};function $p(t,i,r,o,d,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,y):i.prototype&&i.prototype.isPureReactComponent?!Ja(r,o)||!Ja(d,m):!0}function Yp(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&Yu.enqueueReplaceState(i,i.state,null)}function fs(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=b({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Kp(t){El(t)}function Wp(t){console.error(t)}function Xp(t){El(t)}function Fl(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Qp(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ku(t,i,r){return r=xi(r),r.tag=3,r.payload={element:null},r.callback=function(){Fl(t,i)},r}function Fp(t){return t=xi(t),t.tag=3,t}function Zp(t,i,r,o){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;t.payload=function(){return d(m)},t.callback=function(){Qp(i,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Qp(i,r,o),typeof d!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function jx(t,i,r,o,d){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Js(i,r,d,!0),r=It.current,r!==null){switch(r.tag){case 31:case 13:return gn===null?lo():r.alternate===null&&nt===0&&(nt=3),r.flags&=-257,r.flags|=65536,r.lanes=d,o===Ll?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),yf(t,o,d)),!1;case 22:return r.flags|=65536,o===Ll?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),yf(t,o,d)),!1}throw Error(a(435,r.tag))}return yf(t,o,d),lo(),!1}if(ke)return i=It.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,o!==uu&&(t=Error(a(422),{cause:o}),tr(dn(t,r)))):(o!==uu&&(i=Error(a(423),{cause:o}),tr(dn(i,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=dn(o,r),d=Ku(t.stateNode,o,d),Su(t,d),nt!==4&&(nt=2)),!1;var m=Error(a(520),{cause:o});if(m=dn(m,r),xr===null?xr=[m]:xr.push(m),nt!==4&&(nt=2),i===null)return!0;o=dn(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=Ku(r.stateNode,o,t),Su(r,t),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mi===null||!Mi.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Fp(d),Zp(d,t,r,o),Su(r,d),!1}r=r.return}while(r!==null);return!1}var Wu=Error(a(461)),ft=!1;function Et(t,i,r,o){i.child=t===null?ep(i,null,r,o):cs(i,t.child,r,o)}function Pp(t,i,r,o,d){r=r.render;var m=i.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return as(i),o=Mu(t,i,r,y,m,d),w=Ru(),t!==null&&!ft?(Cu(t,i,d),Xn(t,i,d)):(ke&&w&&ou(i),i.flags|=1,Et(t,i,o,d),i.child)}function Jp(t,i,r,o,d){if(t===null){var m=r.type;return typeof m=="function"&&!au(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Ip(t,i,m,o,d)):(t=Ol(r.type,null,o,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!ef(t,d)){var y=m.memoizedProps;if(r=r.compare,r=r!==null?r:Ja,r(y,o)&&t.ref===i.ref)return Xn(t,i,d)}return i.flags|=1,t=Vn(m,o),t.ref=i.ref,t.return=i,i.child=t}function Ip(t,i,r,o,d){if(t!==null){var m=t.memoizedProps;if(Ja(m,o)&&t.ref===i.ref)if(ft=!1,i.pendingProps=o=m,ef(t,d))(t.flags&131072)!==0&&(ft=!0);else return i.lanes=t.lanes,Xn(t,i,d)}return Xu(t,i,r,o,d)}function eg(t,i,r,o){var d=o.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,t!==null){for(o=i.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~m}else o=0,i.child=null;return tg(t,i,m,r,o)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(i,m!==null?m.cachePool:null),m!==null?ip(i,m):ku(),sp(i);else return o=i.lanes=536870912,tg(t,i,m!==null?m.baseLanes|r:r,r,o)}else m!==null?(zl(i,m.cachePool),ip(i,m),ki(),i.memoizedState=null):(t!==null&&zl(i,null),ku(),ki());return Et(t,i,d,r),i.child}function hr(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function tg(t,i,r,o,d){var m=yu();return m=m===null?null:{parent:ct._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},t!==null&&zl(i,null),ku(),sp(i),t!==null&&Js(t,i,o,!0),i.childLanes=d,null}function Zl(t,i){return i=Jl({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ng(t,i,r){return cs(i,t.child,null,r),t=Zl(i,i.pendingProps),t.flags|=2,en(i),i.memoizedState=null,t}function zx(t,i,r){var o=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(ke){if(o.mode==="hidden")return t=Zl(i,o),i.lanes=536870912,hr(null,t);if(Au(i),(t=Fe)?(t=m0(t,pn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:pi!==null?{id:Mn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},r=qm(t),r.return=i,i.child=r,Tt=i,Fe=null)):t=null,t===null)throw yi(i);return i.lanes=536870912,null}return Zl(i,o)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Au(i),d)if(i.flags&256)i.flags&=-257,i=ng(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(ft||Js(t,i,r,!1),d=(r&t.childLanes)!==0,ft||d){if(o=Ge,o!==null&&(y=Wh(o,r),y!==0&&y!==m.retryLane))throw m.retryLane=y,ts(t,y),Qt(o,t,y),Wu;lo(),i=ng(t,i,r)}else t=m.treeContext,Fe=yn(y.nextSibling),Tt=i,ke=!0,gi=null,pn=!1,t!==null&&Gm(i,t),i=Zl(i,o),i.flags|=4096;return i}return t=Vn(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Pl(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Xu(t,i,r,o,d){return as(i),r=Mu(t,i,r,o,void 0,d),o=Ru(),t!==null&&!ft?(Cu(t,i,d),Xn(t,i,d)):(ke&&o&&ou(i),i.flags|=1,Et(t,i,r,d),i.child)}function ig(t,i,r,o,d,m){return as(i),i.updateQueue=null,r=rp(i,o,r,d),ap(t),o=Ru(),t!==null&&!ft?(Cu(t,i,m),Xn(t,i,m)):(ke&&o&&ou(i),i.flags|=1,Et(t,i,r,m),i.child)}function sg(t,i,r,o,d){if(as(i),i.stateNode===null){var m=Qs,y=r.contextType;typeof y=="object"&&y!==null&&(m=At(y)),m=new r(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Yu,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},vu(i),y=r.contextType,m.context=typeof y=="object"&&y!==null?At(y):Qs,m.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&($u(i,r,y,o),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Yu.enqueueReplaceState(m,m.state,null),or(i,o,m,d),lr(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){m=i.stateNode;var w=i.memoizedProps,A=fs(r,w);m.props=A;var j=m.context,V=r.contextType;y=Qs,typeof V=="object"&&V!==null&&(y=At(V));var Y=r.getDerivedStateFromProps;V=typeof Y=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,V||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||j!==y)&&Yp(i,m,o,y),vi=!1;var z=i.memoizedState;m.state=z,or(i,o,m,d),lr(),j=i.memoizedState,w||z!==j||vi?(typeof Y=="function"&&($u(i,r,Y,o),j=i.memoizedState),(A=vi||$p(i,r,A,o,z,j,y))?(V||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=j),m.props=o,m.state=j,m.context=y,o=A):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,xu(t,i),y=i.memoizedProps,V=fs(r,y),m.props=V,Y=i.pendingProps,z=m.context,j=r.contextType,A=Qs,typeof j=="object"&&j!==null&&(A=At(j)),w=r.getDerivedStateFromProps,(j=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Y||z!==A)&&Yp(i,m,o,A),vi=!1,z=i.memoizedState,m.state=z,or(i,o,m,d),lr();var L=i.memoizedState;y!==Y||z!==L||vi||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof w=="function"&&($u(i,r,w,o),L=i.memoizedState),(V=vi||$p(i,r,V,o,z,L,A)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,L,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,L,A)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=L),m.props=o,m.state=L,m.context=A,o=V):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),o=!1)}return m=o,Pl(t,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&o?(i.child=cs(i,t.child,null,d),i.child=cs(i,null,r,d)):Et(t,i,r,d),i.memoizedState=m.state,t=i.child):t=Xn(t,i,d),t}function ag(t,i,r,o){return is(),i.flags|=256,Et(t,i,r,o),i.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(t){return{baseLanes:t,cachePool:Qm()}}function Zu(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=nn),t}function rg(t,i,r){var o=i.pendingProps,d=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),y&&(d=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(ke){if(d?wi(i):ki(),(t=Fe)?(t=m0(t,pn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:pi!==null?{id:Mn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},r=qm(t),r.return=i,i.child=r,Tt=i,Fe=null)):t=null,t===null)throw yi(i);return jf(t)?i.lanes=32:i.lanes=536870912,null}var w=o.children;return o=o.fallback,d?(ki(),d=i.mode,w=Jl({mode:"hidden",children:w},d),o=ns(o,d,r,null),w.return=i,o.return=i,w.sibling=o,i.child=w,o=i.child,o.memoizedState=Fu(r),o.childLanes=Zu(t,y,r),i.memoizedState=Qu,hr(null,o)):(wi(i),Pu(i,w))}var A=t.memoizedState;if(A!==null&&(w=A.dehydrated,w!==null)){if(m)i.flags&256?(wi(i),i.flags&=-257,i=Ju(t,i,r)):i.memoizedState!==null?(ki(),i.child=t.child,i.flags|=128,i=null):(ki(),w=o.fallback,d=i.mode,o=Jl({mode:"visible",children:o.children},d),w=ns(w,d,r,null),w.flags|=2,o.return=i,w.return=i,o.sibling=w,i.child=o,cs(i,t.child,null,r),o=i.child,o.memoizedState=Fu(r),o.childLanes=Zu(t,y,r),i.memoizedState=Qu,i=hr(null,o));else if(wi(i),jf(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var j=y.dgst;y=j,o=Error(a(419)),o.stack="",o.digest=y,tr({value:o,source:null,stack:null}),i=Ju(t,i,r)}else if(ft||Js(t,i,r,!1),y=(r&t.childLanes)!==0,ft||y){if(y=Ge,y!==null&&(o=Wh(y,r),o!==0&&o!==A.retryLane))throw A.retryLane=o,ts(t,o),Qt(y,t,o),Wu;Df(w)||lo(),i=Ju(t,i,r)}else Df(w)?(i.flags|=192,i.child=t.child,i=null):(t=A.treeContext,Fe=yn(w.nextSibling),Tt=i,ke=!0,gi=null,pn=!1,t!==null&&Gm(i,t),i=Pu(i,o.children),i.flags|=4096);return i}return d?(ki(),w=o.fallback,d=i.mode,A=t.child,j=A.sibling,o=Vn(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,j!==null?w=Vn(j,w):(w=ns(w,d,r,null),w.flags|=2),w.return=i,o.return=i,o.sibling=w,i.child=o,hr(null,o),o=i.child,w=t.child.memoizedState,w===null?w=Fu(r):(d=w.cachePool,d!==null?(A=ct._currentValue,d=d.parent!==A?{parent:A,pool:A}:d):d=Qm(),w={baseLanes:w.baseLanes|r,cachePool:d}),o.memoizedState=w,o.childLanes=Zu(t,y,r),i.memoizedState=Qu,hr(t.child,o)):(wi(i),r=t.child,t=r.sibling,r=Vn(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=r,i.memoizedState=null,r)}function Pu(t,i){return i=Jl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Jl(t,i){return t=Jt(22,t,null,i),t.lanes=0,t}function Ju(t,i,r){return cs(i,t.child,null,r),t=Pu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function lg(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),hu(t.return,i,r)}function Iu(t,i,r,o,d,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:d,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=d,y.treeForkCount=m)}function og(t,i,r){var o=i.pendingProps,d=o.revealOrder,m=o.tail;o=o.children;var y=st.current,w=(y&2)!==0;if(w?(y=y&1|2,i.flags|=128):y&=1,F(st,y),Et(t,i,o,r),o=ke?er:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,r,i);else if(t.tag===19)lg(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=i.child,d=null;r!==null;)t=r.alternate,t!==null&&Ul(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=i.child,i.child=null):(d=r.sibling,r.sibling=null),Iu(i,!1,d,r,m,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ul(t)===null){i.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}Iu(i,!0,r,null,m,o);break;case"together":Iu(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Xn(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ei|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Js(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Vn(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Vn(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function ef(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function Bx(t,i,r){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),bi(i,ct,t.memoizedState.cache),is();break;case 27:case 5:Bt(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:bi(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Au(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(wi(i),i.flags|=128,null):(r&i.child.childLanes)!==0?rg(t,i,r):(wi(i),t=Xn(t,i,r),t!==null?t.sibling:null);wi(i);break;case 19:var d=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Js(t,i,r,!1),o=(r&i.childLanes)!==0),d){if(o)return og(t,i,r);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),F(st,st.current),o)break;return null;case 22:return i.lanes=0,eg(t,i,r,i.pendingProps);case 24:bi(i,ct,t.memoizedState.cache)}return Xn(t,i,r)}function cg(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)ft=!0;else{if(!ef(t,r)&&(i.flags&128)===0)return ft=!1,Bx(t,i,r);ft=(t.flags&131072)!==0}else ft=!1,ke&&(i.flags&1048576)!==0&&Vm(i,er,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=ls(i.elementType),i.type=t,typeof t=="function")au(t)?(o=fs(t,o),i.tag=1,i=sg(null,i,t,o,r)):(i.tag=0,i=Xu(null,i,t,o,r));else{if(t!=null){var d=t.$$typeof;if(d===$){i.tag=11,i=Pp(null,i,t,o,r);break e}else if(d===X){i.tag=14,i=Jp(null,i,t,o,r);break e}}throw i=Le(t)||t,Error(a(306,i,""))}}return i;case 0:return Xu(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,d=fs(o,i.pendingProps),sg(t,i,o,d,r);case 3:e:{if(Ue(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;d=m.element,xu(t,i),or(i,o,null,r);var y=i.memoizedState;if(o=y.cache,bi(i,ct,o),o!==m.cache&&mu(i,[ct],r,!0),lr(),o=y.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=ag(t,i,o,r);break e}else if(o!==d){d=dn(Error(a(424)),i),tr(d),i=ag(t,i,o,r);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Fe=yn(t.firstChild),Tt=i,ke=!0,gi=null,pn=!0,r=ep(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(is(),o===d){i=Xn(t,i,r);break e}Et(t,i,o,r)}i=i.child}return i;case 26:return Pl(t,i),t===null?(r=x0(i.type,null,i.pendingProps,null))?i.memoizedState=r:ke||(r=i.type,t=i.pendingProps,o=po(le.current).createElement(r),o[kt]=i,o[Gt]=t,Mt(o,r,t),vt(o),i.stateNode=o):i.memoizedState=x0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Bt(i),t===null&&ke&&(o=i.stateNode=y0(i.type,i.pendingProps,le.current),Tt=i,pn=!0,d=Fe,Ni(i.type)?(zf=d,Fe=yn(o.firstChild)):Fe=d),Et(t,i,i.pendingProps.children,r),Pl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&ke&&((d=o=Fe)&&(o=f2(o,i.type,i.pendingProps,pn),o!==null?(i.stateNode=o,Tt=i,Fe=yn(o.firstChild),pn=!1,d=!0):d=!1),d||yi(i)),Bt(i),d=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,o=m.children,Cf(d,m)?o=null:y!==null&&Cf(d,y)&&(i.flags|=32),i.memoizedState!==null&&(d=Mu(t,i,Ex,null,null,r),Rr._currentValue=d),Pl(t,i),Et(t,i,o,r),i.child;case 6:return t===null&&ke&&((t=r=Fe)&&(r=d2(r,i.pendingProps,pn),r!==null?(i.stateNode=r,Tt=i,Fe=null,t=!0):t=!1),t||yi(i)),null;case 13:return rg(t,i,r);case 4:return Ue(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=cs(i,null,o,r):Et(t,i,o,r),i.child;case 11:return Pp(t,i,i.type,i.pendingProps,r);case 7:return Et(t,i,i.pendingProps,r),i.child;case 8:return Et(t,i,i.pendingProps.children,r),i.child;case 12:return Et(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,bi(i,i.type,o.value),Et(t,i,o.children,r),i.child;case 9:return d=i.type._context,o=i.pendingProps.children,as(i),d=At(d),o=o(d),i.flags|=1,Et(t,i,o,r),i.child;case 14:return Jp(t,i,i.type,i.pendingProps,r);case 15:return Ip(t,i,i.type,i.pendingProps,r);case 19:return og(t,i,r);case 31:return zx(t,i,r);case 22:return eg(t,i,r,i.pendingProps);case 24:return as(i),o=At(ct),t===null?(d=yu(),d===null&&(d=Ge,m=pu(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),i.memoizedState={parent:o,cache:d},vu(i),bi(i,ct,d)):((t.lanes&r)!==0&&(xu(t,i),or(i,null,null,r),lr()),d=t.memoizedState,m=i.memoizedState,d.parent!==o?(d={parent:o,cache:o},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),bi(i,ct,o)):(o=m.cache,bi(i,ct,o),o!==d.cache&&mu(i,[ct],r,!0))),Et(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Qn(t){t.flags|=4}function tf(t,i,r,o,d){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(Lg())t.flags|=8192;else throw os=Ll,bu}else t.flags&=-16777217}function ug(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!A0(i))if(Lg())t.flags|=8192;else throw os=Ll,bu}function Il(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?$h():536870912,t.lanes|=i,ua|=i)}function mr(t,i){if(!ke)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ze(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function Lx(t,i,r){var o=i.pendingProps;switch(cu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Yn(ct),Ve(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ps(i)?Qn(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fu())),Ze(i),null;case 26:var d=i.type,m=i.memoizedState;return t===null?(Qn(i),m!==null?(Ze(i),ug(i,m)):(Ze(i),tf(i,d,null,o,r))):m?m!==t.memoizedState?(Qn(i),Ze(i),ug(i,m)):(Ze(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&Qn(i),Ze(i),tf(i,d,t,o,r)),null;case 27:if(Vt(i),r=le.current,d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Qn(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}t=Z.current,Ps(i)?$m(i):(t=y0(d,o,r),i.stateNode=t,Qn(i))}return Ze(i),null;case 5:if(Vt(i),d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Qn(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}if(m=Z.current,Ps(i))$m(i);else{var y=po(le.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?m.multiple=!0:o.size&&(m.size=o.size);break;default:m=typeof o.is=="string"?y.createElement(d,{is:o.is}):y.createElement(d)}}m[kt]=i,m[Gt]=o;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Mt(m,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qn(i)}}return Ze(i),tf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Qn(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=le.current,Ps(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,d=Tt,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[kt]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||r0(t.nodeValue,r)),t||yi(i,!0)}else t=po(t).createTextNode(o),t[kt]=i,i.stateNode=t}return Ze(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(o=Ps(i),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[kt]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),t=!1}else r=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(en(i),i):(en(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ze(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Ps(i),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[kt]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),d=!1}else d=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(en(i),i):(en(i),null)}return en(i),(i.flags&128)!==0?(i.lanes=r,i):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=i.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),m=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==d&&(o.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),Il(i,i.updateQueue),Ze(i),null);case 4:return Ve(),t===null&&Tf(i.stateNode.containerInfo),Ze(i),null;case 10:return Yn(i.type),Ze(i),null;case 19:if(q(st),o=i.memoizedState,o===null)return Ze(i),null;if(d=(i.flags&128)!==0,m=o.rendering,m===null)if(d)mr(o,!1);else{if(nt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Ul(t),m!==null){for(i.flags|=128,mr(o,!1),t=m.updateQueue,i.updateQueue=t,Il(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Hm(r,t),r=r.sibling;return F(st,st.current&1|2),ke&&Gn(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&_t()>so&&(i.flags|=128,d=!0,mr(o,!1),i.lanes=4194304)}else{if(!d)if(t=Ul(m),t!==null){if(i.flags|=128,d=!0,t=t.updateQueue,i.updateQueue=t,Il(i,t),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!m.alternate&&!ke)return Ze(i),null}else 2*_t()-o.renderingStartTime>so&&r!==536870912&&(i.flags|=128,d=!0,mr(o,!1),i.lanes=4194304);o.isBackwards?(m.sibling=i.child,i.child=m):(t=o.last,t!==null?t.sibling=m:i.child=m,o.last=m)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_t(),t.sibling=null,r=st.current,F(st,d?r&1|2:r&1),ke&&Gn(i,o.treeForkCount),t):(Ze(i),null);case 22:case 23:return en(i),Tu(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),r=i.updateQueue,r!==null&&Il(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&q(rs),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Yn(ct),Ze(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function _x(t,i){switch(cu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Yn(ct),Ve(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Vt(i),null;case 31:if(i.memoizedState!==null){if(en(i),i.alternate===null)throw Error(a(340));is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(en(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return q(st),null;case 4:return Ve(),null;case 10:return Yn(i.type),null;case 22:case 23:return en(i),Tu(),t!==null&&q(rs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Yn(ct),null;case 25:return null;default:return null}}function fg(t,i){switch(cu(i),i.tag){case 3:Yn(ct),Ve();break;case 26:case 27:case 5:Vt(i);break;case 4:Ve();break;case 31:i.memoizedState!==null&&en(i);break;case 13:en(i);break;case 19:q(st);break;case 10:Yn(i.type);break;case 22:case 23:en(i),Tu(),t!==null&&q(rs);break;case 24:Yn(ct)}}function pr(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var d=o.next;r=d;do{if((r.tag&t)===t){o=void 0;var m=r.create,y=r.inst;o=m(),y.destroy=o}r=r.next}while(r!==d)}}catch(w){Be(i,i.return,w)}}function Ti(t,i,r){try{var o=i.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var m=d.next;o=m;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=i;var A=r,j=w;try{j()}catch(V){Be(d,A,V)}}}o=o.next}while(o!==m)}}catch(V){Be(i,i.return,V)}}function dg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{np(i,r)}catch(o){Be(t,t.return,o)}}}function hg(t,i,r){r.props=fs(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Be(t,i,o)}}function gr(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(d){Be(t,i,d)}}function Cn(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(d){Be(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){Be(t,i,d)}else r.current=null}function mg(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(d){Be(t,t.return,d)}}function nf(t,i,r){try{var o=t.stateNode;a2(o,t.type,r,i),o[Gt]=i}catch(d){Be(t,t.return,d)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ni(t.type)||t.tag===4}function sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ni(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=qn));else if(o!==4&&(o===27&&Ni(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(af(t,i,r),t=t.sibling;t!==null;)af(t,i,r),t=t.sibling}function eo(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&(o===27&&Ni(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(eo(t,i,r),t=t.sibling;t!==null;)eo(t,i,r),t=t.sibling}function gg(t){var i=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Mt(i,o,r),i[kt]=t,i[Gt]=r}catch(m){Be(t,t.return,m)}}var Fn=!1,dt=!1,rf=!1,yg=typeof WeakSet=="function"?WeakSet:Set,xt=null;function Hx(t,i){if(t=t.containerInfo,Mf=wo,t=Cm(t),Jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var d=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var y=0,w=-1,A=-1,j=0,V=0,Y=t,z=null;t:for(;;){for(var L;Y!==r||d!==0&&Y.nodeType!==3||(w=y+d),Y!==m||o!==0&&Y.nodeType!==3||(A=y+o),Y.nodeType===3&&(y+=Y.nodeValue.length),(L=Y.firstChild)!==null;)z=Y,Y=L;for(;;){if(Y===t)break t;if(z===r&&++j===d&&(w=y),z===m&&++V===o&&(A=y),(L=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=L}r=w===-1||A===-1?null:{start:w,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rf={focusedElem:t,selectionRange:r},wo=!1,xt=i;xt!==null;)if(i=xt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,xt=t;else for(;xt!==null;){switch(i=xt,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=i,d=m.memoizedProps,m=m.memoizedState,o=r.stateNode;try{var ee=fs(r.type,d);t=o.getSnapshotBeforeUpdate(ee,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(oe){Be(r,r.return,oe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Nf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,xt=t;break}xt=i.return}}function bg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Pn(t,r),o&4&&pr(5,r);break;case 1:if(Pn(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(y){Be(r,r.return,y)}else{var d=fs(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(r,r.return,y)}}o&64&&dg(r),o&512&&gr(r,r.return);break;case 3:if(Pn(t,r),o&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{np(t,i)}catch(y){Be(r,r.return,y)}}break;case 27:i===null&&o&4&&gg(r);case 26:case 5:Pn(t,r),i===null&&o&4&&mg(r),o&512&&gr(r,r.return);break;case 12:Pn(t,r);break;case 31:Pn(t,r),o&4&&Sg(t,r);break;case 13:Pn(t,r),o&4&&wg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Xx.bind(null,r),h2(t,r))));break;case 22:if(o=r.memoizedState!==null||Fn,!o){i=i!==null&&i.memoizedState!==null||dt,d=Fn;var m=dt;Fn=o,(dt=i)&&!m?Jn(t,r,(r.subtreeFlags&8772)!==0):Pn(t,r),Fn=d,dt=m}break;case 30:break;default:Pn(t,r)}}function vg(t){var i=t.alternate;i!==null&&(t.alternate=null,vg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Bc(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pe=null,Yt=!1;function Zn(t,i,r){for(r=r.child;r!==null;)xg(t,i,r),r=r.sibling}function xg(t,i,r){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(di,r)}catch{}switch(r.tag){case 26:dt||Cn(r,i),Zn(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:dt||Cn(r,i);var o=Pe,d=Yt;Ni(r.type)&&(Pe=r.stateNode,Yt=!1),Zn(t,i,r),Ar(r.stateNode),Pe=o,Yt=d;break;case 5:dt||Cn(r,i);case 6:if(o=Pe,d=Yt,Pe=null,Zn(t,i,r),Pe=o,Yt=d,Pe!==null)if(Yt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(r.stateNode)}catch(m){Be(r,i,m)}else try{Pe.removeChild(r.stateNode)}catch(m){Be(r,i,m)}break;case 18:Pe!==null&&(Yt?(t=Pe,d0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ba(t)):d0(Pe,r.stateNode));break;case 4:o=Pe,d=Yt,Pe=r.stateNode.containerInfo,Yt=!0,Zn(t,i,r),Pe=o,Yt=d;break;case 0:case 11:case 14:case 15:Ti(2,r,i),dt||Ti(4,r,i),Zn(t,i,r);break;case 1:dt||(Cn(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&hg(r,i,o)),Zn(t,i,r);break;case 21:Zn(t,i,r);break;case 22:dt=(o=dt)||r.memoizedState!==null,Zn(t,i,r),dt=o;break;default:Zn(t,i,r)}}function Sg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ba(t)}catch(r){Be(i,i.return,r)}}}function wg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ba(t)}catch(r){Be(i,i.return,r)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new yg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new yg),i;default:throw Error(a(435,t.tag))}}function to(t,i){var r=qx(t);i.forEach(function(o){if(!r.has(o)){r.add(o);var d=Qx.bind(null,t,o);o.then(d,d)}})}function Kt(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var d=r[o],m=t,y=i,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ni(w.type)){Pe=w.stateNode,Yt=!1;break e}break;case 5:Pe=w.stateNode,Yt=!1;break e;case 3:case 4:Pe=w.stateNode.containerInfo,Yt=!0;break e}w=w.return}if(Pe===null)throw Error(a(160));xg(m,y,d),Pe=null,Yt=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)kg(i,t),i=i.sibling}var Sn=null;function kg(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(i,t),Wt(t),o&4&&(Ti(3,t,t.return),pr(3,t),Ti(5,t,t.return));break;case 1:Kt(i,t),Wt(t),o&512&&(dt||r===null||Cn(r,r.return)),o&64&&Fn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var d=Sn;if(Kt(i,t),Wt(t),o&512&&(dt||r===null||Cn(r,r.return)),o&4){var m=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":m=d.getElementsByTagName("title")[0],(!m||m[$a]||m[kt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(o),d.head.insertBefore(m,d.querySelector("head > title"))),Mt(m,o,r),m[kt]=t,vt(m),o=m;break e;case"link":var y=k0("link","href",d).get(o+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(m=y[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}m=d.createElement(o),Mt(m,o,r),d.head.appendChild(m);break;case"meta":if(y=k0("meta","content",d).get(o+(r.content||""))){for(w=0;w<y.length;w++)if(m=y[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}m=d.createElement(o),Mt(m,o,r),d.head.appendChild(m);break;default:throw Error(a(468,o))}m[kt]=t,vt(m),o=m}t.stateNode=o}else T0(d,t.type,t.stateNode);else t.stateNode=w0(d,o,t.memoizedProps);else m!==o?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,o===null?T0(d,t.type,t.stateNode):w0(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&nf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Kt(i,t),Wt(t),o&512&&(dt||r===null||Cn(r,r.return)),r!==null&&o&4&&nf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Kt(i,t),Wt(t),o&512&&(dt||r===null||Cn(r,r.return)),t.flags&32){d=t.stateNode;try{Vs(d,"")}catch(ee){Be(t,t.return,ee)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,nf(t,d,r!==null?r.memoizedProps:d)),o&1024&&(rf=!0);break;case 6:if(Kt(i,t),Wt(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ee){Be(t,t.return,ee)}}break;case 3:if(bo=null,d=Sn,Sn=go(i.containerInfo),Kt(i,t),Sn=d,Wt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(ee){Be(t,t.return,ee)}rf&&(rf=!1,Tg(t));break;case 4:o=Sn,Sn=go(t.stateNode.containerInfo),Kt(i,t),Wt(t),Sn=o;break;case 12:Kt(i,t),Wt(t);break;case 31:Kt(i,t),Wt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 13:Kt(i,t),Wt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(io=_t()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 22:d=t.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,j=Fn,V=dt;if(Fn=j||d,dt=V||A,Kt(i,t),dt=V,Fn=j,Wt(t),o&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(r===null||A||Fn||dt||ds(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){A=r=i;try{if(m=A.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=A.stateNode;var Y=A.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ee){Be(A,A.return,ee)}}}else if(i.tag===6){if(r===null){A=i;try{A.stateNode.nodeValue=d?"":A.memoizedProps}catch(ee){Be(A,A.return,ee)}}}else if(i.tag===18){if(r===null){A=i;try{var L=A.stateNode;d?h0(L,!0):h0(A.stateNode,!1)}catch(ee){Be(A,A.return,ee)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,to(t,r))));break;case 19:Kt(i,t),Wt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 30:break;case 21:break;default:Kt(i,t),Wt(t)}}function Wt(t){var i=t.flags;if(i&2){try{for(var r,o=t.return;o!==null;){if(pg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var d=r.stateNode,m=sf(t);eo(t,m,d);break;case 5:var y=r.stateNode;r.flags&32&&(Vs(y,""),r.flags&=-33);var w=sf(t);eo(t,w,y);break;case 3:case 4:var A=r.stateNode.containerInfo,j=sf(t);af(t,j,A);break;default:throw Error(a(161))}}catch(V){Be(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Tg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Pn(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bg(t,i.alternate,i),i=i.sibling}function ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ti(4,i,i.return),ds(i);break;case 1:Cn(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&hg(i,i.return,r),ds(i);break;case 27:Ar(i.stateNode);case 26:case 5:Cn(i,i.return),ds(i);break;case 22:i.memoizedState===null&&ds(i);break;case 30:ds(i);break;default:ds(i)}t=t.sibling}}function Jn(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,d=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:Jn(d,m,r),pr(4,m);break;case 1:if(Jn(d,m,r),o=m,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){Be(o,o.return,j)}if(o=m,d=o.updateQueue,d!==null){var w=o.stateNode;try{var A=d.shared.hiddenCallbacks;if(A!==null)for(d.shared.hiddenCallbacks=null,d=0;d<A.length;d++)tp(A[d],w)}catch(j){Be(o,o.return,j)}}r&&y&64&&dg(m),gr(m,m.return);break;case 27:gg(m);case 26:case 5:Jn(d,m,r),r&&o===null&&y&4&&mg(m),gr(m,m.return);break;case 12:Jn(d,m,r);break;case 31:Jn(d,m,r),r&&y&4&&Sg(d,m);break;case 13:Jn(d,m,r),r&&y&4&&wg(d,m);break;case 22:m.memoizedState===null&&Jn(d,m,r),gr(m,m.return);break;case 30:break;default:Jn(d,m,r)}i=i.sibling}}function lf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&nr(r))}function of(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nr(t))}function wn(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ag(t,i,r,o),i=i.sibling}function Ag(t,i,r,o){var d=i.flags;switch(i.tag){case 0:case 11:case 15:wn(t,i,r,o),d&2048&&pr(9,i);break;case 1:wn(t,i,r,o);break;case 3:wn(t,i,r,o),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nr(t)));break;case 12:if(d&2048){wn(t,i,r,o),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,w=m.onPostCommit;typeof w=="function"&&w(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Be(i,i.return,A)}}else wn(t,i,r,o);break;case 31:wn(t,i,r,o);break;case 13:wn(t,i,r,o);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?wn(t,i,r,o):yr(t,i):m._visibility&2?wn(t,i,r,o):(m._visibility|=2,la(t,i,r,o,(i.subtreeFlags&10256)!==0||!1)),d&2048&&lf(y,i);break;case 24:wn(t,i,r,o),d&2048&&of(i.alternate,i);break;default:wn(t,i,r,o)}}function la(t,i,r,o,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,w=r,A=o,j=y.flags;switch(y.tag){case 0:case 11:case 15:la(m,y,w,A,d),pr(8,y);break;case 23:break;case 22:var V=y.stateNode;y.memoizedState!==null?V._visibility&2?la(m,y,w,A,d):yr(m,y):(V._visibility|=2,la(m,y,w,A,d)),d&&j&2048&&lf(y.alternate,y);break;case 24:la(m,y,w,A,d),d&&j&2048&&of(y.alternate,y);break;default:la(m,y,w,A,d)}i=i.sibling}}function yr(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,d=o.flags;switch(o.tag){case 22:yr(r,o),d&2048&&lf(o.alternate,o);break;case 24:yr(r,o),d&2048&&of(o.alternate,o);break;default:yr(r,o)}i=i.sibling}}var br=8192;function oa(t,i,r){if(t.subtreeFlags&br)for(t=t.child;t!==null;)Eg(t,i,r),t=t.sibling}function Eg(t,i,r){switch(t.tag){case 26:oa(t,i,r),t.flags&br&&t.memoizedState!==null&&A2(r,Sn,t.memoizedState,t.memoizedProps);break;case 5:oa(t,i,r);break;case 3:case 4:var o=Sn;Sn=go(t.stateNode.containerInfo),oa(t,i,r),Sn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=br,br=16777216,oa(t,i,r),br=o):oa(t,i,r));break;default:oa(t,i,r)}}function Mg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function vr(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];xt=o,Cg(o,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:vr(t),t.flags&2048&&Ti(9,t,t.return);break;case 3:vr(t);break;case 12:vr(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,no(t)):vr(t);break;default:vr(t)}}function no(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];xt=o,Cg(o,t)}Mg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ti(8,i,i.return),no(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,no(i));break;default:no(i)}t=t.sibling}}function Cg(t,i){for(;xt!==null;){var r=xt;switch(r.tag){case 0:case 11:case 15:Ti(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:nr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,xt=o;else e:for(r=t;xt!==null;){o=xt;var d=o.sibling,m=o.return;if(vg(o),o===r){xt=null;break e}if(d!==null){d.return=m,xt=d;break e}xt=m}}}var Ux={getCacheForType:function(t){var i=At(ct),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return At(ct).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,De=0,Ge=null,ve=null,Se=0,ze=0,tn=null,Ai=!1,ca=!1,cf=!1,In=0,nt=0,Ei=0,hs=0,uf=0,nn=0,ua=0,xr=null,Xt=null,ff=!1,io=0,Og=0,so=1/0,ao=null,Mi=null,gt=0,Ri=null,fa=null,ei=0,df=0,hf=null,Ng=null,Sr=0,mf=null;function sn(){return(De&2)!==0&&Se!==0?Se&-Se:H.T!==null?xf():Xh()}function Dg(){if(nn===0)if((Se&536870912)===0||ke){var t=hl;hl<<=1,(hl&3932160)===0&&(hl=262144),nn=t}else nn=536870912;return t=It.current,t!==null&&(t.flags|=32),nn}function Qt(t,i,r){(t===Ge&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(da(t,0),Ci(t,Se,nn,!1)),Ga(t,r),((De&2)===0||t!==Ge)&&(t===Ge&&((De&2)===0&&(hs|=r),nt===4&&Ci(t,Se,nn,!1)),On(t))}function jg(t,i,r){if((De&6)!==0)throw Error(a(327));var o=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Va(t,i),d=o?Yx(t,i):gf(t,i,!0),m=o;do{if(d===0){ca&&!o&&Ci(t,i,0,!1);break}else{if(r=t.current.alternate,m&&!Gx(r)){d=gf(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var w=t;d=xr;var A=w.current.memoizedState.isDehydrated;if(A&&(da(w,y).flags|=256),y=gf(w,y,!1),y!==2){if(cf&&!A){w.errorRecoveryDisabledLanes|=m,hs|=m,d=4;break e}m=Xt,Xt=d,m!==null&&(Xt===null?Xt=m:Xt.push.apply(Xt,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){da(t,0),Ci(t,i,0,!0);break}e:{switch(o=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ci(o,i,nn,!Ai);break e;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=io+300-_t(),10<d)){if(Ci(o,i,nn,!Ai),pl(o,0,!0)!==0)break e;ei=i,o.timeoutHandle=u0(zg.bind(null,o,r,Xt,ao,ff,i,nn,hs,ua,Ai,m,"Throttled",-0,0),d);break e}zg(o,r,Xt,ao,ff,i,nn,hs,ua,Ai,m,null,-0,0)}}break}while(!0);On(t)}function zg(t,i,r,o,d,m,y,w,A,j,V,Y,z,L){if(t.timeoutHandle=-1,Y=i.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},Eg(i,m,Y);var ee=(m&62914560)===m?io-_t():(m&4194048)===m?Og-_t():0;if(ee=E2(Y,ee),ee!==null){ei=m,t.cancelPendingCommit=ee(Gg.bind(null,t,i,m,r,o,d,y,w,A,V,Y,null,z,L)),Ci(t,m,y,!j);return}}Gg(t,i,m,r,o,d,y,w,A)}function Gx(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var d=r[o],m=d.getSnapshot;d=d.value;try{if(!Pt(m(),d))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ci(t,i,r,o){i&=~uf,i&=~hs,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var d=i;0<d;){var m=31-bt(d),y=1<<m;o[m]=-1,d&=~y}r!==0&&Yh(t,r,i)}function ro(){return(De&6)===0?(wr(0),!1):!0}function pf(){if(ve!==null){if(ze===0)var t=ve.return;else t=ve,$n=ss=null,Ou(t),na=null,sr=0,t=ve;for(;t!==null;)fg(t.alternate,t),t=t.return;ve=null}}function da(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,o2(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ei=0,pf(),Ge=t,ve=r=Vn(t.current,null),Se=i,ze=0,tn=null,Ai=!1,ca=Va(t,i),cf=!1,ua=nn=uf=hs=Ei=nt=0,Xt=xr=null,ff=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var d=31-bt(o),m=1<<d;i|=t[d],o&=~m}return In=i,Ml(),r}function Bg(t,i){he=null,H.H=dr,i===ta||i===Bl?(i=Pm(),ze=3):i===bu?(i=Pm(),ze=4):ze=i===Wu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,tn=i,ve===null&&(nt=1,Fl(t,dn(i,t.current)))}function Lg(){var t=It.current;return t===null?!0:(Se&4194048)===Se?gn===null:(Se&62914560)===Se||(Se&536870912)!==0?t===gn:!1}function _g(){var t=H.H;return H.H=dr,t===null?dr:t}function Hg(){var t=H.A;return H.A=Ux,t}function lo(){nt=4,Ai||(Se&4194048)!==Se&&It.current!==null||(ca=!0),(Ei&134217727)===0&&(hs&134217727)===0||Ge===null||Ci(Ge,Se,nn,!1)}function gf(t,i,r){var o=De;De|=2;var d=_g(),m=Hg();(Ge!==t||Se!==i)&&(ao=null,da(t,i)),i=!1;var y=nt;e:do try{if(ze!==0&&ve!==null){var w=ve,A=tn;switch(ze){case 8:pf(),y=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(i=!0);var j=ze;if(ze=0,tn=null,ha(t,w,A,j),r&&ca){y=0;break e}break;default:j=ze,ze=0,tn=null,ha(t,w,A,j)}}$x(),y=nt;break}catch(V){Bg(t,V)}while(!0);return i&&t.shellSuspendCounter++,$n=ss=null,De=o,H.H=d,H.A=m,ve===null&&(Ge=null,Se=0,Ml()),y}function $x(){for(;ve!==null;)qg(ve)}function Yx(t,i){var r=De;De|=2;var o=_g(),d=Hg();Ge!==t||Se!==i?(ao=null,so=_t()+500,da(t,i)):ca=Va(t,i);e:do try{if(ze!==0&&ve!==null){i=ve;var m=tn;t:switch(ze){case 1:ze=0,tn=null,ha(t,i,m,1);break;case 2:case 9:if(Fm(m)){ze=0,tn=null,Ug(i);break}i=function(){ze!==2&&ze!==9||Ge!==t||(ze=7),On(t)},m.then(i,i);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Fm(m)?(ze=0,tn=null,Ug(i)):(ze=0,tn=null,ha(t,i,m,7));break;case 5:var y=null;switch(ve.tag){case 26:y=ve.memoizedState;case 5:case 27:var w=ve;if(y?A0(y):w.stateNode.complete){ze=0,tn=null;var A=w.sibling;if(A!==null)ve=A;else{var j=w.return;j!==null?(ve=j,oo(j)):ve=null}break t}}ze=0,tn=null,ha(t,i,m,5);break;case 6:ze=0,tn=null,ha(t,i,m,6);break;case 8:pf(),nt=6;break e;default:throw Error(a(462))}}Kx();break}catch(V){Bg(t,V)}while(!0);return $n=ss=null,H.H=o,H.A=d,De=r,ve!==null?0:(Ge=null,Se=0,Ml(),nt)}function Kx(){for(;ve!==null&&!Ec();)qg(ve)}function qg(t){var i=cg(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?oo(t):ve=i}function Ug(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=ig(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=ig(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Ou(i);default:fg(r,i),i=ve=Hm(i,In),i=cg(r,i,In)}t.memoizedProps=t.pendingProps,i===null?oo(t):ve=i}function ha(t,i,r,o){$n=ss=null,Ou(i),na=null,sr=0;var d=i.return;try{if(jx(t,d,i,r,Se)){nt=1,Fl(t,dn(r,t.current)),ve=null;return}}catch(m){if(d!==null)throw ve=d,m;nt=1,Fl(t,dn(r,t.current)),ve=null;return}i.flags&32768?(ke||o===1?t=!0:ca||(Se&536870912)!==0?t=!1:(Ai=t=!0,(o===2||o===9||o===3||o===6)&&(o=It.current,o!==null&&o.tag===13&&(o.flags|=16384))),Vg(i,t)):oo(i)}function oo(t){var i=t;do{if((i.flags&32768)!==0){Vg(i,Ai);return}t=i.return;var r=Lx(i.alternate,i,In);if(r!==null){ve=r;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=t}while(i!==null);nt===0&&(nt=5)}function Vg(t,i){do{var r=_x(t.alternate,t);if(r!==null){r.flags&=32767,ve=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){ve=t;return}ve=t=r}while(t!==null);nt=6,ve=null}function Gg(t,i,r,o,d,m,y,w,A){t.cancelPendingCommit=null;do co();while(gt!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=iu,T1(t,r,m,y,w,A),t===Ge&&(ve=Ge=null,Se=0),fa=i,Ri=t,ei=r,df=m,hf=d,Ng=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fx(de,function(){return Xg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,d=Q.p,Q.p=2,y=De,De|=4;try{Hx(t,i,r)}finally{De=y,Q.p=d,H.T=o}}gt=1,$g(),Yg(),Kg()}}function $g(){if(gt===1){gt=0;var t=Ri,i=fa,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=De;De|=4;try{kg(i,t);var m=Rf,y=Cm(t.containerInfo),w=m.focusedElem,A=m.selectionRange;if(y!==w&&w&&w.ownerDocument&&Rm(w.ownerDocument.documentElement,w)){if(A!==null&&Jc(w)){var j=A.start,V=A.end;if(V===void 0&&(V=j),"selectionStart"in w)w.selectionStart=j,w.selectionEnd=Math.min(V,w.value.length);else{var Y=w.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var L=z.getSelection(),ee=w.textContent.length,oe=Math.min(A.start,ee),qe=A.end===void 0?oe:Math.min(A.end,ee);!L.extend&&oe>qe&&(y=qe,qe=oe,oe=y);var O=Mm(w,oe),R=Mm(w,qe);if(O&&R&&(L.rangeCount!==1||L.anchorNode!==O.node||L.anchorOffset!==O.offset||L.focusNode!==R.node||L.focusOffset!==R.offset)){var D=Y.createRange();D.setStart(O.node,O.offset),L.removeAllRanges(),oe>qe?(L.addRange(D),L.extend(R.node,R.offset)):(D.setEnd(R.node,R.offset),L.addRange(D))}}}}for(Y=[],L=w;L=L.parentNode;)L.nodeType===1&&Y.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var G=Y[w];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}wo=!!Mf,Rf=Mf=null}finally{De=d,Q.p=o,H.T=r}}t.current=i,gt=2}}function Yg(){if(gt===2){gt=0;var t=Ri,i=fa,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=De;De|=4;try{bg(t,i.alternate,i)}finally{De=d,Q.p=o,H.T=r}}gt=3}}function Kg(){if(gt===4||gt===3){gt=0,Mc();var t=Ri,i=fa,r=ei,o=Ng;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?gt=5:(gt=0,fa=Ri=null,Wg(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Mi=null),jc(r),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(di,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,d=Q.p,Q.p=2,H.T=null;try{for(var m=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];m(w.value,{componentStack:w.stack})}}finally{H.T=i,Q.p=d}}(ei&3)!==0&&co(),On(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===mf?Sr++:(Sr=0,mf=t):Sr=0,wr(0)}}function Wg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,nr(i)))}function co(){return $g(),Yg(),Kg(),Xg()}function Xg(){if(gt!==5)return!1;var t=Ri,i=df;df=0;var r=jc(ei),o=H.T,d=Q.p;try{Q.p=32>r?32:r,H.T=null,r=hf,hf=null;var m=Ri,y=ei;if(gt=0,fa=Ri=null,ei=0,(De&6)!==0)throw Error(a(331));var w=De;if(De|=4,Rg(m.current),Ag(m,m.current,y,r),De=w,wr(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(di,m)}catch{}return!0}finally{Q.p=d,H.T=o,Wg(t,i)}}function Qg(t,i,r){i=dn(r,i),i=Ku(t.stateNode,i,2),t=Si(t,i,2),t!==null&&(Ga(t,2),On(t))}function Be(t,i,r){if(t.tag===3)Qg(t,t,r);else for(;i!==null;){if(i.tag===3){Qg(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mi===null||!Mi.has(o))){t=dn(r,t),r=Fp(2),o=Si(i,r,2),o!==null&&(Zp(r,o,i,t),Ga(o,2),On(o));break}}i=i.return}}function yf(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Vx;var d=new Set;o.set(i,d)}else d=o.get(i),d===void 0&&(d=new Set,o.set(i,d));d.has(r)||(cf=!0,d.add(r),t=Wx.bind(null,t,i,r),i.then(t,t))}function Wx(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Ge===t&&(Se&r)===r&&(nt===4||nt===3&&(Se&62914560)===Se&&300>_t()-io?(De&2)===0&&da(t,0):uf|=r,ua===Se&&(ua=0)),On(t)}function Fg(t,i){i===0&&(i=$h()),t=ts(t,i),t!==null&&(Ga(t,i),On(t))}function Xx(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Fg(t,r)}function Qx(t,i){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Fg(t,r)}function Fx(t,i){return Ha(t,i)}var uo=null,ma=null,bf=!1,fo=!1,vf=!1,Oi=0;function On(t){t!==ma&&t.next===null&&(ma===null?uo=ma=t:ma=ma.next=t),fo=!0,bf||(bf=!0,Px())}function wr(t,i){if(!vf&&fo){vf=!0;do for(var r=!1,o=uo;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var m=0;else{var y=o.suspendedLanes,w=o.pingedLanes;m=(1<<31-bt(42|t)+1)-1,m&=d&~(y&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Ig(o,m))}else m=Se,m=pl(o,o===Ge?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Va(o,m)||(r=!0,Ig(o,m));o=o.next}while(r);vf=!1}}function Zx(){Zg()}function Zg(){fo=bf=!1;var t=0;Oi!==0&&l2()&&(t=Oi);for(var i=_t(),r=null,o=uo;o!==null;){var d=o.next,m=Pg(o,i);m===0?(o.next=null,r===null?uo=d:r.next=d,d===null&&(ma=r)):(r=o,(t!==0||(m&3)!==0)&&(fo=!0)),o=d}gt!==0&&gt!==5||wr(t),Oi!==0&&(Oi=0)}function Pg(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-bt(m),w=1<<y,A=d[y];A===-1?((w&r)===0||(w&o)!==0)&&(d[y]=k1(w,i)):A<=i&&(t.expiredLanes|=w),m&=~w}if(i=Ge,r=Se,r=pl(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===i&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qa(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Va(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&qa(o),jc(r)){case 2:case 8:r=fl;break;case 32:r=de;break;case 268435456:r=pt;break;default:r=de}return o=Jg.bind(null,t),r=Ha(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&qa(o),t.callbackPriority=2,t.callbackNode=null,2}function Jg(t,i){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(co()&&t.callbackNode!==r)return null;var o=Se;return o=pl(t,t===Ge?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(jg(t,o,i),Pg(t,_t()),t.callbackNode!=null&&t.callbackNode===r?Jg.bind(null,t):null)}function Ig(t,i){if(co())return null;jg(t,i,!0)}function Px(){c2(function(){(De&6)!==0?Ha(ul,Zx):Zg()})}function xf(){if(Oi===0){var t=Is;t===0&&(t=zs,zs<<=1,(zs&261888)===0&&(zs=256)),Oi=t}return Oi}function e0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function t0(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Jx(t,i,r,o,d){if(i==="submit"&&r&&r.stateNode===d){var m=e0((d[Gt]||null).action),y=o.submitter;y&&(i=(i=y[Gt]||null)?e0(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var w=new kl("action","action",null,o,d);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Oi!==0){var A=y?t0(d,y):new FormData(d);qu(r,{pending:!0,data:A,method:d.method,action:m},null,A)}}else typeof m=="function"&&(w.preventDefault(),A=y?t0(d,y):new FormData(d),qu(r,{pending:!0,data:A,method:d.method,action:m},m,A))},currentTarget:d}]})}}for(var Sf=0;Sf<nu.length;Sf++){var wf=nu[Sf],Ix=wf.toLowerCase(),e2=wf[0].toUpperCase()+wf.slice(1);xn(Ix,"on"+e2)}xn(Dm,"onAnimationEnd"),xn(jm,"onAnimationIteration"),xn(zm,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(gx,"onTransitionRun"),xn(yx,"onTransitionStart"),xn(bx,"onTransitionCancel"),xn(Bm,"onTransitionEnd"),qs("onMouseEnter",["mouseout","mouseover"]),qs("onMouseLeave",["mouseout","mouseover"]),qs("onPointerEnter",["pointerout","pointerover"]),qs("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kr));function n0(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],d=o.event;o=o.listeners;e:{var m=void 0;if(i)for(var y=o.length-1;0<=y;y--){var w=o[y],A=w.instance,j=w.currentTarget;if(w=w.listener,A!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(V){El(V)}d.currentTarget=null,m=A}else for(y=0;y<o.length;y++){if(w=o[y],A=w.instance,j=w.currentTarget,w=w.listener,A!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(V){El(V)}d.currentTarget=null,m=A}}}}function xe(t,i){var r=i[zc];r===void 0&&(r=i[zc]=new Set);var o=t+"__bubble";r.has(o)||(i0(i,t,2,!1),r.add(o))}function kf(t,i,r){var o=0;i&&(o|=4),i0(r,t,o,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[ho]){t[ho]=!0,Zh.forEach(function(r){r!=="selectionchange"&&(t2.has(r)||kf(r,!1,t),kf(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,kf("selectionchange",!1,i))}}function i0(t,i,r,o){switch(D0(i)){case 2:var d=C2;break;case 8:d=O2;break;default:d=qf}r=d.bind(null,i,r,t),d=void 0,!$c||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(i,r,{capture:!0,passive:d}):t.addEventListener(i,r,!0):d!==void 0?t.addEventListener(i,r,{passive:d}):t.addEventListener(i,r,!1)}function Af(t,i,r,o,d){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=o.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=Ls(w),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){o=m=y;continue e}w=w.parentNode}}o=o.return}om(function(){var j=m,V=Vc(r),Y=[];e:{var z=Lm.get(t);if(z!==void 0){var L=kl,ee=t;switch(t){case"keypress":if(Sl(r)===0)break e;case"keydown":case"keyup":L=Q1;break;case"focusin":ee="focus",L=Xc;break;case"focusout":ee="blur",L=Xc;break;case"beforeblur":case"afterblur":L=Xc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=P1;break;case Dm:case jm:case zm:L=q1;break;case Bm:L=I1;break;case"scroll":case"scrollend":L=z1;break;case"wheel":L=tx;break;case"copy":case"cut":case"paste":L=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=hm;break;case"toggle":case"beforetoggle":L=ix}var oe=(i&4)!==0,qe=!oe&&(t==="scroll"||t==="scrollend"),O=oe?z!==null?z+"Capture":null:z;oe=[];for(var R=j,D;R!==null;){var G=R;if(D=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||D===null||O===null||(G=Ka(R,O),G!=null&&oe.push(Tr(R,G,D))),qe)break;R=R.return}0<oe.length&&(z=new L(z,ee,null,r,V),Y.push({event:z,listeners:oe}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",z&&r!==Uc&&(ee=r.relatedTarget||r.fromElement)&&(Ls(ee)||ee[Bs]))break e;if((L||z)&&(z=V.window===V?V:(z=V.ownerDocument)?z.defaultView||z.parentWindow:window,L?(ee=r.relatedTarget||r.toElement,L=j,ee=ee?Ls(ee):null,ee!==null&&(qe=c(ee),oe=ee.tag,ee!==qe||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(L=null,ee=j),L!==ee)){if(oe=fm,G="onMouseLeave",O="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(oe=hm,G="onPointerLeave",O="onPointerEnter",R="pointer"),qe=L==null?z:Ya(L),D=ee==null?z:Ya(ee),z=new oe(G,R+"leave",L,r,V),z.target=qe,z.relatedTarget=D,G=null,Ls(V)===j&&(oe=new oe(O,R+"enter",ee,r,V),oe.target=D,oe.relatedTarget=qe,G=oe),qe=G,L&&ee)t:{for(oe=n2,O=L,R=ee,D=0,G=O;G;G=oe(G))D++;G=0;for(var se=R;se;se=oe(se))G++;for(;0<D-G;)O=oe(O),D--;for(;0<G-D;)R=oe(R),G--;for(;D--;){if(O===R||R!==null&&O===R.alternate){oe=O;break t}O=oe(O),R=oe(R)}oe=null}else oe=null;L!==null&&s0(Y,z,L,oe,!1),ee!==null&&qe!==null&&s0(Y,qe,ee,oe,!0)}}e:{if(z=j?Ya(j):window,L=z.nodeName&&z.nodeName.toLowerCase(),L==="select"||L==="input"&&z.type==="file")var Ce=Sm;else if(vm(z))if(wm)Ce=hx;else{Ce=fx;var ne=ux}else L=z.nodeName,!L||L.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&qc(j.elementType)&&(Ce=Sm):Ce=dx;if(Ce&&(Ce=Ce(t,j))){xm(Y,Ce,r,V);break e}ne&&ne(t,z,j),t==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&Hc(z,"number",z.value)}switch(ne=j?Ya(j):window,t){case"focusin":(vm(ne)||ne.contentEditable==="true")&&(Ks=ne,Ic=j,Ia=null);break;case"focusout":Ia=Ic=Ks=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Om(Y,r,V);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Om(Y,r,V)}var pe;if(Fc)e:{switch(t){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ys?ym(t,r)&&(we="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(we="onCompositionStart");we&&(mm&&r.locale!=="ko"&&(Ys||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ys&&(pe=cm()):(mi=V,Yc="value"in mi?mi.value:mi.textContent,Ys=!0)),ne=mo(j,we),0<ne.length&&(we=new dm(we,t,null,r,V),Y.push({event:we,listeners:ne}),pe?we.data=pe:(pe=bm(r),pe!==null&&(we.data=pe)))),(pe=ax?rx(t,r):lx(t,r))&&(we=mo(j,"onBeforeInput"),0<we.length&&(ne=new dm("onBeforeInput","beforeinput",null,r,V),Y.push({event:ne,listeners:we}),ne.data=pe)),Jx(Y,t,j,r,V)}n0(Y,i)})}function Tr(t,i,r){return{instance:t,listener:i,currentTarget:r}}function mo(t,i){for(var r=i+"Capture",o=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ka(t,r),d!=null&&o.unshift(Tr(t,d,m)),d=Ka(t,i),d!=null&&o.push(Tr(t,d,m))),t.tag===3)return o;t=t.return}return[]}function n2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,i,r,o,d){for(var m=i._reactName,y=[];r!==null&&r!==o;){var w=r,A=w.alternate,j=w.stateNode;if(w=w.tag,A!==null&&A===o)break;w!==5&&w!==26&&w!==27||j===null||(A=j,d?(j=Ka(r,m),j!=null&&y.unshift(Tr(r,j,A))):d||(j=Ka(r,m),j!=null&&y.push(Tr(r,j,A)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var i2=/\r\n?/g,s2=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(i2,`
`).replace(s2,"")}function r0(t,i){return i=a0(i),a0(t)===i}function He(t,i,r,o,d,m){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vs(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vs(t,""+o);break;case"className":yl(t,"class",o);break;case"tabIndex":yl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":yl(t,r,o);break;case"style":rm(t,o,m);break;case"data":if(i!=="object"){yl(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=vl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&He(t,i,"name",d.name,d,null),He(t,i,"formEncType",d.formEncType,d,null),He(t,i,"formMethod",d.formMethod,d,null),He(t,i,"formTarget",d.formTarget,d,null)):(He(t,i,"encType",d.encType,d,null),He(t,i,"method",d.method,d,null),He(t,i,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=vl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=qn);break;case"onScroll":o!=null&&xe("scroll",t);break;case"onScrollEnd":o!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":xe("beforetoggle",t),xe("toggle",t),gl(t,"popover",o);break;case"xlinkActuate":Hn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Hn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Hn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Hn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Hn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Hn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":gl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=D1.get(r)||r,gl(t,r,o))}}function Ef(t,i,r,o,d,m){switch(r){case"style":rm(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Vs(t,o):(typeof o=="number"||typeof o=="bigint")&&Vs(t,""+o);break;case"onScroll":o!=null&&xe("scroll",t);break;case"onScrollEnd":o!=null&&xe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ph.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),i=r.slice(2,d?r.length-7:void 0),m=t[Gt]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof o=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,d);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):gl(t,r,o)}}}function Mt(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var o=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var y=r[m];if(y!=null)switch(m){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(t,i,m,y,r,null)}}d&&He(t,i,"srcSet",r.srcSet,r,null),o&&He(t,i,"src",r.src,r,null);return;case"input":xe("invalid",t);var w=m=y=d=null,A=null,j=null;for(o in r)if(r.hasOwnProperty(o)){var V=r[o];if(V!=null)switch(o){case"name":d=V;break;case"type":y=V;break;case"checked":A=V;break;case"defaultChecked":j=V;break;case"value":m=V;break;case"defaultValue":w=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,i));break;default:He(t,i,o,V,r,null)}}nm(t,m,w,A,j,y,d,!1);return;case"select":xe("invalid",t),o=y=m=null;for(d in r)if(r.hasOwnProperty(d)&&(w=r[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:He(t,i,d,w,r,null)}i=m,r=y,t.multiple=!!o,i!=null?Us(t,!!o,i,!1):r!=null&&Us(t,!!o,r,!0);return;case"textarea":xe("invalid",t),m=d=o=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:He(t,i,y,w,r,null)}sm(t,o,d,m);return;case"option":for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null)&&(A==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":He(t,i,A,o,r,null));return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(o=0;o<kr.length;o++)xe(kr[o],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(o=r[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(t,i,j,o,r,null)}return;default:if(qc(i)){for(V in r)r.hasOwnProperty(V)&&(o=r[V],o!==void 0&&Ef(t,i,V,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&He(t,i,w,o,r,null))}function a2(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,w=null,A=null,j=null,V=null;for(L in r){var Y=r[L];if(r.hasOwnProperty(L)&&Y!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":A=Y;default:o.hasOwnProperty(L)||He(t,i,L,null,o,Y)}}for(var z in o){var L=o[z];if(Y=r[z],o.hasOwnProperty(z)&&(L!=null||Y!=null))switch(z){case"type":m=L;break;case"name":d=L;break;case"checked":j=L;break;case"defaultChecked":V=L;break;case"value":y=L;break;case"defaultValue":w=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,i));break;default:L!==Y&&He(t,i,z,L,o,Y)}}_c(t,y,w,A,j,V,m,d);return;case"select":L=y=w=z=null;for(m in r)if(A=r[m],r.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":L=A;default:o.hasOwnProperty(m)||He(t,i,m,null,o,A)}for(d in o)if(m=o[d],A=r[d],o.hasOwnProperty(d)&&(m!=null||A!=null))switch(d){case"value":z=m;break;case"defaultValue":w=m;break;case"multiple":y=m;default:m!==A&&He(t,i,d,m,o,A)}i=w,r=y,o=L,z!=null?Us(t,!!r,z,!1):!!o!=!!r&&(i!=null?Us(t,!!r,i,!0):Us(t,!!r,r?[]:"",!1));return;case"textarea":L=z=null;for(w in r)if(d=r[w],r.hasOwnProperty(w)&&d!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:He(t,i,w,null,o,d)}for(y in o)if(d=o[y],m=r[y],o.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":z=d;break;case"defaultValue":L=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&He(t,i,y,d,o,m)}im(t,z,L);return;case"option":for(var ee in r)z=r[ee],r.hasOwnProperty(ee)&&z!=null&&!o.hasOwnProperty(ee)&&(ee==="selected"?t.selected=!1:He(t,i,ee,null,o,z));for(A in o)z=o[A],L=r[A],o.hasOwnProperty(A)&&z!==L&&(z!=null||L!=null)&&(A==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":He(t,i,A,z,o,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in r)z=r[oe],r.hasOwnProperty(oe)&&z!=null&&!o.hasOwnProperty(oe)&&He(t,i,oe,null,o,z);for(j in o)if(z=o[j],L=r[j],o.hasOwnProperty(j)&&z!==L&&(z!=null||L!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,i));break;default:He(t,i,j,z,o,L)}return;default:if(qc(i)){for(var qe in r)z=r[qe],r.hasOwnProperty(qe)&&z!==void 0&&!o.hasOwnProperty(qe)&&Ef(t,i,qe,void 0,o,z);for(V in o)z=o[V],L=r[V],!o.hasOwnProperty(V)||z===L||z===void 0&&L===void 0||Ef(t,i,V,z,o,L);return}}for(var O in r)z=r[O],r.hasOwnProperty(O)&&z!=null&&!o.hasOwnProperty(O)&&He(t,i,O,null,o,z);for(Y in o)z=o[Y],L=r[Y],!o.hasOwnProperty(Y)||z===L||z==null&&L==null||He(t,i,Y,z,o,L)}function l0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var d=r[o],m=d.transferSize,y=d.initiatorType,w=d.duration;if(m&&w&&l0(y)){for(y=0,w=d.responseEnd,o+=1;o<r.length;o++){var A=r[o],j=A.startTime;if(j>w)break;var V=A.transferSize,Y=A.initiatorType;V&&l0(Y)&&(A=A.responseEnd,y+=V*(A<w?1:(w-j)/(A-j)))}if(--o,i+=8*(m+y)/(d.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,Rf=null;function po(t){return t.nodeType===9?t:t.ownerDocument}function o0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Cf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Of=null;function l2(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var u0=typeof setTimeout=="function"?setTimeout:void 0,o2=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,c2=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(t){return f0.resolve(null).then(t).catch(u2)}:u0;function u2(t){setTimeout(function(){throw t})}function Ni(t){return t==="head"}function d0(t,i){var r=i,o=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(d),ba(i);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Ar(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ar(r);for(var m=r.firstChild;m;){var y=m.nextSibling,w=m.nodeName;m[$a]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=y}}else r==="body"&&Ar(t.ownerDocument.body);r=d}while(r);ba(i)}function h0(t,i){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Nf(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Nf(r),Bc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function f2(t,i,r,o){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[$a])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=yn(t.nextSibling),t===null)break}return null}function d2(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=yn(t.nextSibling),t===null))return null;return t}function m0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yn(t.nextSibling),t===null))return null;return t}function Df(t){return t.data==="$?"||t.data==="$~"}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function h2(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var zf=null;function p0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return yn(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function g0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function y0(t,i,r){switch(i=po(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ar(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Bc(t)}var bn=new Map,b0=new Set;function go(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ti=Q.d;Q.d={f:m2,r:p2,D:g2,C:y2,L:b2,m:v2,X:S2,S:x2,M:w2};function m2(){var t=ti.f(),i=ro();return t||i}function p2(t){var i=_s(t);i!==null&&i.tag===5&&i.type==="form"?Bp(i):ti.r(t)}var pa=typeof document>"u"?null:document;function v0(t,i,r){var o=pa;if(o&&typeof i=="string"&&i){var d=un(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),b0.has(d)||(b0.add(d),t={rel:t,crossOrigin:r,href:i},o.querySelector(d)===null&&(i=o.createElement("link"),Mt(i,"link",t),vt(i),o.head.appendChild(i)))}}function g2(t){ti.D(t),v0("dns-prefetch",t,null)}function y2(t,i){ti.C(t,i),v0("preconnect",t,i)}function b2(t,i,r){ti.L(t,i,r);var o=pa;if(o&&t&&i){var d='link[rel="preload"][as="'+un(i)+'"]';i==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+un(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+un(r.imageSizes)+'"]')):d+='[href="'+un(t)+'"]';var m=d;switch(i){case"style":m=ga(t);break;case"script":m=ya(t)}bn.has(m)||(t=b({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),bn.set(m,t),o.querySelector(d)!==null||i==="style"&&o.querySelector(Er(m))||i==="script"&&o.querySelector(Mr(m))||(i=o.createElement("link"),Mt(i,"link",t),vt(i),o.head.appendChild(i)))}}function v2(t,i){ti.m(t,i);var r=pa;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+un(o)+'"][href="'+un(t)+'"]',m=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ya(t)}if(!bn.has(m)&&(t=b({rel:"modulepreload",href:t},i),bn.set(m,t),r.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Mr(m)))return}o=r.createElement("link"),Mt(o,"link",t),vt(o),r.head.appendChild(o)}}}function x2(t,i,r){ti.S(t,i,r);var o=pa;if(o&&t){var d=Hs(o).hoistableStyles,m=ga(t);i=i||"default";var y=d.get(m);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Er(m)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},r),(r=bn.get(m))&&Bf(t,r);var A=y=o.createElement("link");vt(A),Mt(A,"link",t),A._p=new Promise(function(j,V){A.onload=j,A.onerror=V}),A.addEventListener("load",function(){w.loading|=1}),A.addEventListener("error",function(){w.loading|=2}),w.loading|=4,yo(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(m,y)}}}function S2(t,i){ti.X(t,i);var r=pa;if(r&&t){var o=Hs(r).hoistableScripts,d=ya(t),m=o.get(d);m||(m=r.querySelector(Mr(d)),m||(t=b({src:t,async:!0},i),(i=bn.get(d))&&Lf(t,i),m=r.createElement("script"),vt(m),Mt(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function w2(t,i){ti.M(t,i);var r=pa;if(r&&t){var o=Hs(r).hoistableScripts,d=ya(t),m=o.get(d);m||(m=r.querySelector(Mr(d)),m||(t=b({src:t,async:!0,type:"module"},i),(i=bn.get(d))&&Lf(t,i),m=r.createElement("script"),vt(m),Mt(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function x0(t,i,r,o){var d=(d=le.current)?go(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ga(r.href),r=Hs(d).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ga(r.href);var m=Hs(d).hoistableStyles,y=m.get(t);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=d.querySelector(Er(t)))&&!m._p&&(y.instance=m,y.state.loading=5),bn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},bn.set(t,r),m||k2(d,t,r,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ya(r),r=Hs(d).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ga(t){return'href="'+un(t)+'"'}function Er(t){return'link[rel="stylesheet"]['+t+"]"}function S0(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function k2(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Mt(i,"link",r),vt(i),t.head.appendChild(i))}function ya(t){return'[src="'+un(t)+'"]'}function Mr(t){return"script[async]"+t}function w0(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+un(r.href)+'"]');if(o)return i.instance=o,vt(o),o;var d=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),vt(o),Mt(o,"style",d),yo(o,r.precedence,t),i.instance=o;case"stylesheet":d=ga(r.href);var m=t.querySelector(Er(d));if(m)return i.state.loading|=4,i.instance=m,vt(m),m;o=S0(r),(d=bn.get(d))&&Bf(o,d),m=(t.ownerDocument||t).createElement("link"),vt(m);var y=m;return y._p=new Promise(function(w,A){y.onload=w,y.onerror=A}),Mt(m,"link",o),i.state.loading|=4,yo(m,r.precedence,t),i.instance=m;case"script":return m=ya(r.src),(d=t.querySelector(Mr(m)))?(i.instance=d,vt(d),d):(o=r,(d=bn.get(m))&&(o=b({},r),Lf(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),vt(d),Mt(d,"link",o),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,yo(o,r.precedence,t));return i.instance}function yo(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,m=d,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===i)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Bf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Lf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var bo=null;function k0(t,i,r){if(bo===null){var o=new Map,d=bo=new Map;d.set(r,o)}else d=bo,o=d.get(r),o||(o=new Map,d.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var m=r[d];if(!(m[$a]||m[kt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var w=o.get(y);w?w.push(m):o.set(y,[m])}}return o}function T0(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function T2(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function A0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function A2(t,i,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=ga(o.href),m=i.querySelector(Er(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=vo.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=m,vt(m);return}m=i.ownerDocument||i,o=S0(o),(d=bn.get(d))&&Bf(o,d),m=m.createElement("link"),vt(m);var y=m;y._p=new Promise(function(w,A){y.onload=w,y.onerror=A}),Mt(m,"link",o),r.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=vo.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var _f=0;function E2(t,i){return t.stylesheets&&t.count===0&&So(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&So(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&_f===0&&(_f=62500*r2());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&So(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>_f?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xo=null;function So(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xo=new Map,i.forEach(M2,t),xo=null,vo.call(t))}function M2(t,i){if(!(i.state.loading&4)){var r=xo.get(t);if(r)var o=r.get(null);else{r=new Map,xo.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}d=i.instance,y=d.getAttribute("data-precedence"),m=r.get(y)||o,m===o&&r.set(null,d),r.set(y,d),this.count++,o=vo.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var Rr={$$typeof:K,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function R2(t,i,r,o,d,m,y,w,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.hiddenUpdates=Nc(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function E0(t,i,r,o,d,m,y,w,A,j,V,Y){return t=new R2(t,i,r,y,A,j,V,Y,w),i=1,m===!0&&(i|=24),m=Jt(3,null,null,i),t.current=m,m.stateNode=t,i=pu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:r,cache:i},vu(m),t}function M0(t){return t?(t=Qs,t):Qs}function R0(t,i,r,o,d,m){d=M0(d),o.context===null?o.context=d:o.pendingContext=d,o=xi(i),o.payload={element:r},m=m===void 0?null:m,m!==null&&(o.callback=m),r=Si(t,o,i),r!==null&&(Qt(r,t,i),rr(r,t,i))}function C0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Hf(t,i){C0(t,i),(t=t.alternate)&&C0(t,i)}function O0(t){if(t.tag===13||t.tag===31){var i=ts(t,67108864);i!==null&&Qt(i,t,67108864),Hf(t,67108864)}}function N0(t){if(t.tag===13||t.tag===31){var i=sn();i=Dc(i);var r=ts(t,i);r!==null&&Qt(r,t,i),Hf(t,i)}}var wo=!0;function C2(t,i,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=2,qf(t,i,r,o)}finally{Q.p=m,H.T=d}}function O2(t,i,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=8,qf(t,i,r,o)}finally{Q.p=m,H.T=d}}function qf(t,i,r,o){if(wo){var d=Uf(o);if(d===null)Af(t,i,o,ko,r),j0(t,o);else if(D2(d,t,i,r,o))o.stopPropagation();else if(j0(t,o),i&4&&-1<N2.indexOf(t)){for(;d!==null;){var m=_s(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Zi(m.pendingLanes);if(y!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var A=1<<31-bt(y);w.entanglements[1]|=A,y&=~A}On(m),(De&6)===0&&(so=_t()+500,wr(0))}}break;case 31:case 13:w=ts(m,2),w!==null&&Qt(w,m,2),ro(),Hf(m,2)}if(m=Uf(o),m===null&&Af(t,i,o,ko,r),m===d)break;d=m}d!==null&&o.stopPropagation()}else Af(t,i,o,null,r)}}function Uf(t){return t=Vc(t),Vf(t)}var ko=null;function Vf(t){if(ko=null,t=Ls(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return ko=t,null}function D0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rc()){case ul:return 2;case fl:return 8;case de:case Ee:return 32;case pt:return 268435456;default:return 32}default:return 32}}var Gf=!1,Di=null,ji=null,zi=null,Cr=new Map,Or=new Map,Bi=[],N2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j0(t,i){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Cr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(i.pointerId)}}function Nr(t,i,r,o,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:m,targetContainers:[d]},i!==null&&(i=_s(i),i!==null&&O0(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function D2(t,i,r,o,d){switch(i){case"focusin":return Di=Nr(Di,t,i,r,o,d),!0;case"dragenter":return ji=Nr(ji,t,i,r,o,d),!0;case"mouseover":return zi=Nr(zi,t,i,r,o,d),!0;case"pointerover":var m=d.pointerId;return Cr.set(m,Nr(Cr.get(m)||null,t,i,r,o,d)),!0;case"gotpointercapture":return m=d.pointerId,Or.set(m,Nr(Or.get(m)||null,t,i,r,o,d)),!0}return!1}function z0(t){var i=Ls(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,Qh(t.priority,function(){N0(r)});return}}else if(i===31){if(i=f(r),i!==null){t.blockedOn=i,Qh(t.priority,function(){N0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Uf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Uc=o,r.target.dispatchEvent(o),Uc=null}else return i=_s(r),i!==null&&O0(i),t.blockedOn=r,!1;i.shift()}return!0}function B0(t,i,r){To(t)&&r.delete(i)}function j2(){Gf=!1,Di!==null&&To(Di)&&(Di=null),ji!==null&&To(ji)&&(ji=null),zi!==null&&To(zi)&&(zi=null),Cr.forEach(B0),Or.forEach(B0)}function Ao(t,i){t.blockedOn===i&&(t.blockedOn=null,Gf||(Gf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,j2)))}var Eo=null;function L0(t){Eo!==t&&(Eo=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eo===t&&(Eo=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],d=t[i+2];if(typeof o!="function"){if(Vf(o||r)===null)continue;break}var m=_s(r);m!==null&&(t.splice(i,3),i-=3,qu(m,{pending:!0,data:d,method:r.method,action:o},o,d))}}))}function ba(t){function i(A){return Ao(A,t)}Di!==null&&Ao(Di,t),ji!==null&&Ao(ji,t),zi!==null&&Ao(zi,t),Cr.forEach(i),Or.forEach(i);for(var r=0;r<Bi.length;r++){var o=Bi[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Bi.length&&(r=Bi[0],r.blockedOn===null);)z0(r),r.blockedOn===null&&Bi.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var d=r[o],m=r[o+1],y=d[Gt]||null;if(typeof m=="function")y||L0(r);else if(y){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[Gt]||null)w=y.formAction;else if(Vf(d)!==null)continue}else w=y.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),L0(r)}}}function _0(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function $f(t){this._internalRoot=t}Mo.prototype.render=$f.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,o=sn();R0(r,o,t,i,null,null)},Mo.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;R0(t.current,2,null,t,null,null),ro(),i[Bs]=null}};function Mo(t){this._internalRoot=t}Mo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Xh();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Bi.length&&i!==0&&i<Bi[r].priority;r++);Bi.splice(r,0,t),r===0&&z0(t)}};var H0=e.version;if(H0!=="19.2.7")throw Error(a(527,H0,"19.2.7"));Q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var z2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{di=Ro.inject(z2),Je=Ro}catch{}}return jr.createRoot=function(t,i){if(!l(t))throw Error(a(299));var r=!1,o="",d=Kp,m=Wp,y=Xp;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=E0(t,1,!1,null,null,r,o,null,d,m,y,_0),t[Bs]=i.current,Tf(t),new $f(i)},jr.hydrateRoot=function(t,i,r){if(!l(t))throw Error(a(299));var o=!1,d="",m=Kp,y=Wp,w=Xp,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(A=r.formState)),i=E0(t,1,!0,i,r??null,o,d,A,m,y,w,_0),i.context=M0(null),r=i.current,o=sn(),o=Dc(o),d=xi(o),d.callback=null,Si(r,d,o),r=o,i.current.lanes=r,Ga(i,r),On(i),t[Bs]=i.current,Tf(t),new Mo(i)},jr.version="19.2.7",jr}var Q0;function K2(){if(Q0)return Wf.exports;Q0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wf.exports=Y2(),Wf.exports}var W2=K2();const gb=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();const X2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Q2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());const F0=s=>{const e=Q2(s);return e.charAt(0).toUpperCase()+e.slice(1)};var Zf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const F2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Z2=N.createContext({}),P2=()=>N.useContext(Z2),J2=N.forwardRef(({color:s,size:e,strokeWidth:n,absoluteStrokeWidth:a,className:l="",children:c,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,color:v="currentColor",className:S=""}=P2()??{},k=a??b?Number(n??g)*24/Number(e??p):n??g;return N.createElement("svg",{ref:h,...Zf,width:e??p??Zf.width,height:e??p??Zf.height,stroke:s??v,strokeWidth:k,className:gb("lucide",S,l),...!c&&!F2(f)&&{"aria-hidden":"true"},...f},[...u.map(([T,C])=>N.createElement(T,C)),...Array.isArray(c)?c:[c]])});const Ae=(s,e)=>{const n=N.forwardRef(({className:a,...l},c)=>N.createElement(J2,{ref:c,iconNode:e,className:gb(`lucide-${X2(F0(s))}`,`lucide-${s}`,a),...l}));return n.displayName=F0(s),n};const I2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],yb=Ae("activity",I2);const eS=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],tS=Ae("arrow-down-to-line",eS);const nS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ph=Ae("arrow-right",nS);const iS=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],bb=Ae("braces",iS);const sS=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aS=Ae("building-2",sS);const rS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],lS=Ae("check",rS);const oS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zr=Ae("circle-alert",oS);const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Md=Ae("circle-question-mark",cS);const uS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],fS=Ae("copy",uS);const dS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],hS=Ae("cpu",dS);const mS=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],pS=Ae("file-code-corner",mS);const gS=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],yS=Ae("files",gS);const bS=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],vS=Ae("fingerprint-pattern",bS);const xS=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],SS=Ae("flower-2",xS);const wS=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],kS=Ae("git-branch",wS);const TS=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],AS=Ae("grid-2x2",TS);const ES=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Z0=Ae("library",ES);const MS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],RS=Ae("maximize-2",MS);const CS=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],OS=Ae("microscope",CS);const NS=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],$r=Ae("music-2",NS);const DS=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],jS=Ae("package-check",DS);const zS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],BS=Ae("panel-left-close",zS);const LS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],P0=Ae("panel-left-open",LS);const _S=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],HS=Ae("pause",_S);const qS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],gc=Ae("play",qS);const US=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],VS=Ae("refresh-cw",US);const GS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],$S=Ae("rotate-ccw",GS);const YS=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],KS=Ae("route",YS);const WS=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],Rd=Ae("scan-line",WS);const XS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],QS=Ae("search",XS);const FS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],ZS=Ae("shapes",FS);const PS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],JS=Ae("sparkles",PS);const IS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ew=Ae("square",IS);const tw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gh=Ae("x",tw),vb="rasa.theme",$o=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});$o.dark;function nw(s=":root"){return`
    ${s} {
      ${Pf($o.dark)}
      --phase-reader: var(--rasa-gold);
      --phase-analysis: var(--rasa-blue);
      --phase-ir: var(--rasa-violet);
      --phase-facts: var(--rasa-green);
      --phase-plan: var(--rasa-teal);
      --phase-eval: var(--rasa-red);
      font-family:
        "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    }

    ${s}[data-rasa-theme="light"] {
      ${Pf($o.light)}
    }

    ${s}[data-rasa-theme="dark"] {
      ${Pf($o.dark)}
    }
  `}function iw(s=document.documentElement){const e=localStorage.getItem(vb),n=e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return xb(n,s),n}function xb(s,e=document.documentElement){const n=s==="light"?"light":"dark";return e.dataset.rasaTheme=n,e.setAttribute("data-theme",n),localStorage.setItem(vb,n),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:n}})),n}function sw(s=document.documentElement){return xb(s.dataset.rasaTheme==="light"?"dark":"light",s)}function Pf(s){return`
      color-scheme: ${s.colorScheme};
      --rasa-surface: ${s.surface};
      --rasa-surface-lift: ${s.surfaceLift};
      --rasa-panel: ${s.panel};
      --rasa-panel-soft: ${s.panelSoft};
      --rasa-panel-raised: ${s.panelRaised};
      --rasa-line: ${s.line};
      --rasa-line-strong: ${s.lineStrong};
      --rasa-text: ${s.text};
      --rasa-muted: ${s.muted};
      --rasa-dim: ${s.dim};
      --rasa-gold: ${s.gold};
      --rasa-blue: ${s.blue};
      --rasa-green: ${s.green};
      --rasa-violet: ${s.violet};
      --rasa-teal: ${s.teal};
      --rasa-red: ${s.red};
      --rasa-success: ${s.success};
      --rasa-danger: ${s.danger};
      --rasa-warning: ${s.warning};
      --rasa-code-bg: ${s.codeBg};
      --rasa-button-text: ${s.buttonText};
      --rasa-shadow: ${s.shadow};
      --rasa-backdrop: ${s.backdrop};
      --rasa-radius: ${s.radius};
  `}const aw=Object.freeze([Object.freeze({id:"inspect",href:"/inspect/",label:"Inspect"}),Object.freeze({id:"studio",href:"/studio/",label:"Studio"}),Object.freeze({id:"conformance",href:"/conformance-report/",label:"Conformance"}),Object.freeze({id:"roadmap",href:"/roadmap/",label:"Roadmap",hidden:!0}),Object.freeze({id:"engineering",href:"/blog/",label:"Engineering",hidden:!0})]);function rw(){return`
    :root {
      --rasa-site-header-height: 58px;
    }

    .rasa-site-header {
      align-items: center;
      background: color-mix(in srgb, var(--rasa-surface) 90%, transparent);
      backdrop-filter: blur(16px) saturate(120%);
      border-bottom: 1px solid var(--rasa-line);
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 180px minmax(0, 1fr) 240px;
      height: var(--rasa-site-header-height);
      padding: 0 20px;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
    }

    .rasa-site-brand {
      align-items: center;
      display: inline-flex;
      justify-self: start;
      min-width: 0;
    }

    .rasa-site-brand img {
      display: block;
      height: 23px;
      max-width: 112px;
      width: auto;
    }

    .rasa-site-nav {
      align-items: stretch;
      align-self: stretch;
      display: flex;
      gap: 2px;
      justify-content: center;
      min-width: 0;
    }

    .rasa-site-nav a {
      align-items: center;
      color: var(--rasa-muted);
      display: inline-flex;
      font-family: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 0 14px;
      position: relative;
      text-decoration: none;
      white-space: nowrap;
    }

    .rasa-site-nav a[data-nav-hidden="true"] {
      display: none;
    }

    .rasa-site-nav a:hover,
    .rasa-site-nav a[aria-current="page"] {
      color: var(--rasa-text);
    }

    .rasa-site-nav a[aria-current="page"]::after {
      background: var(--rasa-gold);
      bottom: -1px;
      content: "";
      height: 2px;
      left: 14px;
      position: absolute;
      right: 14px;
    }

    .rasa-site-actions {
      align-items: center;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      min-width: 0;
    }

    .rasa-site-runtime {
      align-items: center;
      color: var(--rasa-muted);
      display: inline-flex;
      font-family: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
      font-size: 12px;
      gap: 7px;
      white-space: nowrap;
    }

    .rasa-site-runtime i {
      background: var(--rasa-dim);
      border-radius: 50%;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--rasa-dim) 15%, transparent);
      height: 7px;
      width: 7px;
    }

    .rasa-site-runtime[data-status="ready"] i,
    .rasa-site-runtime[data-status="refused"] i {
      background: var(--rasa-green);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--rasa-green) 15%, transparent);
    }

    .rasa-site-runtime[data-status="loading"] i,
    .rasa-site-runtime[data-status="booting"] i,
    .rasa-site-runtime[data-status="running"] i {
      background: var(--rasa-gold);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--rasa-gold) 15%, transparent);
    }

    .rasa-site-theme,
    .rasa-site-action {
      align-items: center;
      background: transparent;
      border: 1px solid var(--rasa-line);
      border-radius: 6px;
      color: var(--rasa-muted);
      cursor: pointer;
      display: inline-flex;
      font-family: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
      font-size: 12px;
      font-weight: 600;
      justify-content: center;
      min-height: 34px;
      padding: 0 11px;
    }

    .rasa-site-theme:hover,
    .rasa-site-action:hover {
      border-color: var(--rasa-line-strong);
      color: var(--rasa-text);
    }

    .rasa-site-theme:focus-visible,
    .rasa-site-action:focus-visible,
    .rasa-site-brand:focus-visible,
    .rasa-site-nav a:focus-visible {
      outline: 2px solid var(--rasa-gold);
      outline-offset: 2px;
    }

    @media (max-width: 760px) {
      :root {
        --rasa-site-header-height: 104px;
      }

      .rasa-site-header {
        grid-template-areas:
          "brand actions"
          "nav nav";
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-rows: 58px 46px;
        height: var(--rasa-site-header-height);
        padding: 0 14px;
      }

      .rasa-site-brand { grid-area: brand; }
      .rasa-site-nav {
        border-top: 1px solid var(--rasa-line);
        grid-area: nav;
        justify-content: flex-start;
        margin: 0 -14px;
        overflow-x: auto;
        padding: 0 7px;
        scrollbar-width: none;
      }
      .rasa-site-nav::-webkit-scrollbar { display: none; }
      .rasa-site-nav a { padding: 0 12px; }
      .rasa-site-nav a[aria-current="page"]::after { left: 12px; right: 12px; }
      .rasa-site-actions { grid-area: actions; }
      .rasa-site-runtime span { display: none; }
    }

    @media (max-width: 440px) {
      .rasa-site-runtime { font-size: 0; }
      .rasa-site-theme { padding: 0 9px; }
    }
  `}function lw({activeId:s="",runtimeLabel:e="",runtimeStatus:n="idle",runtimeTitle:a="",theme:l="dark",onThemeToggle:c,actions:u=null}){return x.jsxs("header",{className:"rasa-site-header",children:[x.jsx("a",{"aria-label":"Rasa home",className:"rasa-site-brand",href:"/",children:x.jsx("img",{alt:"Rasa",src:"/assets/brand/logo.svg"})}),x.jsx("nav",{"aria-label":"Primary navigation",className:"rasa-site-nav",children:aw.map(f=>x.jsx("a",{"aria-current":f.id===s?"page":void 0,"data-nav-hidden":f.hidden?"true":void 0,href:f.href,children:f.label},f.id))}),x.jsxs("div",{className:"rasa-site-actions",children:[e?x.jsxs("span",{className:"rasa-site-runtime","data-status":n,title:a||void 0,children:[x.jsx("i",{}),x.jsx("span",{children:e})]}):null,u,x.jsx("button",{"aria-label":`Switch to ${l==="dark"?"light":"dark"} theme`,className:"rasa-site-theme","data-role":"site-theme-toggle",onClick:c,type:"button",children:l==="dark"?"Light":"Dark"})]})]})}let Cd=[],Sb=[];(()=>{let s="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,n=0;e<s.length;e++)(e%2?Sb:Cd).push(n=n+s[e])})();function ow(s){if(s<768)return!1;for(let e=0,n=Cd.length;;){let a=e+n>>1;if(s<Cd[a])n=a;else if(s>=Sb[a])e=a+1;else return!0;if(e==n)return!1}}function J0(s){return s>=127462&&s<=127487}const I0=8205;function cw(s,e,n=!0,a=!0){return(n?wb:uw)(s,e,a)}function wb(s,e,n){if(e==s.length)return e;e&&kb(s.charCodeAt(e))&&Tb(s.charCodeAt(e-1))&&e--;let a=Jf(s,e);for(e+=ey(a);e<s.length;){let l=Jf(s,e);if(a==I0||l==I0||n&&ow(l))e+=ey(l),a=l;else if(J0(l)){let c=0,u=e-2;for(;u>=0&&J0(Jf(s,u));)c++,u-=2;if(c%2==0)break;e+=2}else break}return e}function uw(s,e,n){for(;e>0;){let a=wb(s,e-2,n);if(a<e)return a;e--}return 0}function Jf(s,e){let n=s.charCodeAt(e);if(!Tb(n)||e+1==s.length)return n;let a=s.charCodeAt(e+1);return kb(a)?(n-55296<<10)+(a-56320)+65536:n}function kb(s){return s>=56320&&s<57344}function Tb(s){return s>=55296&&s<56320}function ey(s){return s<65536?1:2}class je{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,n,a){[e,n]=Oa(this,e,n);let l=[];return this.decompose(0,e,l,2),a.length&&a.decompose(0,a.length,l,3),this.decompose(n,this.length,l,1),jn.from(l,this.length-(n-e)+a.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,n=this.length){[e,n]=Oa(this,e,n);let a=[];return this.decompose(e,n,a,0),jn.from(a,n-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let n=this.scanIdentical(e,1),a=this.length-this.scanIdentical(e,-1),l=new Yr(this),c=new Yr(e);for(let u=n,f=n;;){if(l.next(u),c.next(u),u=0,l.lineBreak!=c.lineBreak||l.done!=c.done||l.value!=c.value)return!1;if(f+=l.value.length,l.done||f>=a)return!0}}iter(e=1){return new Yr(this,e)}iterRange(e,n=this.length){return new Ab(this,e,n)}iterLines(e,n){let a;if(e==null)a=this.iter();else{n==null&&(n=this.lines+1);let l=this.line(e).from;a=this.iterRange(l,Math.max(l,n==this.lines+1?this.length:n<=1?0:this.line(n-1).to))}return new Eb(a)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?je.empty:e.length<=32?new rt(e):jn.from(rt.split(e,[]))}}class rt extends je{constructor(e,n=fw(e)){super(),this.text=e,this.length=n}get lines(){return this.text.length}get children(){return null}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.text[c],f=l+u.length;if((n?a:f)>=e)return new dw(l,f,a,u);l=f+1,a++}}decompose(e,n,a,l){let c=e<=0&&n>=this.length?this:new rt(ty(this.text,e,n),Math.min(n,this.length)-Math.max(0,e));if(l&1){let u=a.pop(),f=Yo(c.text,u.text.slice(),0,c.length);if(f.length<=32)a.push(new rt(f,u.length+c.length));else{let h=f.length>>1;a.push(new rt(f.slice(0,h)),new rt(f.slice(h)))}}else a.push(c)}replace(e,n,a){if(!(a instanceof rt))return super.replace(e,n,a);[e,n]=Oa(this,e,n);let l=Yo(this.text,Yo(a.text,ty(this.text,0,e)),n),c=this.length+a.length-(n-e);return l.length<=32?new rt(l,c):jn.from(rt.split(l,[]),c)}sliceString(e,n=this.length,a=`
`){[e,n]=Oa(this,e,n);let l="";for(let c=0,u=0;c<=n&&u<this.text.length;u++){let f=this.text[u],h=c+f.length;c>e&&u&&(l+=a),e<h&&n>c&&(l+=f.slice(Math.max(0,e-c),n-c)),c=h+1}return l}flatten(e){for(let n of this.text)e.push(n)}scanIdentical(){return 0}static split(e,n){let a=[],l=-1;for(let c of e)a.push(c),l+=c.length+1,a.length==32&&(n.push(new rt(a,l)),a=[],l=-1);return l>-1&&n.push(new rt(a,l)),n}}class jn extends je{constructor(e,n){super(),this.children=e,this.length=n,this.lines=0;for(let a of e)this.lines+=a.lines}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.children[c],f=l+u.length,h=a+u.lines-1;if((n?h:f)>=e)return u.lineInner(e,n,a,l);l=f+1,a=h+1}}decompose(e,n,a,l){for(let c=0,u=0;u<=n&&c<this.children.length;c++){let f=this.children[c],h=u+f.length;if(e<=h&&n>=u){let p=l&((u<=e?1:0)|(h>=n?2:0));u>=e&&h<=n&&!p?a.push(f):f.decompose(e-u,n-u,a,p)}u=h+1}}replace(e,n,a){if([e,n]=Oa(this,e,n),a.lines<this.lines)for(let l=0,c=0;l<this.children.length;l++){let u=this.children[l],f=c+u.length;if(e>=c&&n<=f){let h=u.replace(e-c,n-c,a),p=this.lines-u.lines+h.lines;if(h.lines<p>>4&&h.lines>p>>6){let g=this.children.slice();return g[l]=h,new jn(g,this.length-(n-e)+a.length)}return super.replace(c,f,h)}c=f+1}return super.replace(e,n,a)}sliceString(e,n=this.length,a=`
`){[e,n]=Oa(this,e,n);let l="";for(let c=0,u=0;c<this.children.length&&u<=n;c++){let f=this.children[c],h=u+f.length;u>e&&c&&(l+=a),e<h&&n>u&&(l+=f.sliceString(e-u,n-u,a)),u=h+1}return l}flatten(e){for(let n of this.children)n.flatten(e)}scanIdentical(e,n){if(!(e instanceof jn))return 0;let a=0,[l,c,u,f]=n>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;l+=n,c+=n){if(l==u||c==f)return a;let h=this.children[l],p=e.children[c];if(h!=p)return a+h.scanIdentical(p,n);a+=h.length+1}}static from(e,n=e.reduce((a,l)=>a+l.length+1,-1)){let a=0;for(let S of e)a+=S.lines;if(a<32){let S=[];for(let k of e)k.flatten(S);return new rt(S,n)}let l=Math.max(32,a>>5),c=l<<1,u=l>>1,f=[],h=0,p=-1,g=[];function b(S){let k;if(S.lines>c&&S instanceof jn)for(let T of S.children)b(T);else S.lines>u&&(h>u||!h)?(v(),f.push(S)):S instanceof rt&&h&&(k=g[g.length-1])instanceof rt&&S.lines+k.lines<=32?(h+=S.lines,p+=S.length+1,g[g.length-1]=new rt(k.text.concat(S.text),k.length+1+S.length)):(h+S.lines>l&&v(),h+=S.lines,p+=S.length+1,g.push(S))}function v(){h!=0&&(f.push(g.length==1?g[0]:jn.from(g,p)),p=-1,h=g.length=0)}for(let S of e)b(S);return v(),f.length==1?f[0]:new jn(f,n)}}je.empty=new rt([""],0);function fw(s){let e=-1;for(let n of s)e+=n.length+1;return e}function Yo(s,e,n=0,a=1e9){for(let l=0,c=0,u=!0;c<s.length&&l<=a;c++){let f=s[c],h=l+f.length;h>=n&&(h>a&&(f=f.slice(0,a-l)),l<n&&(f=f.slice(n-l)),u?(e[e.length-1]+=f,u=!1):e.push(f)),l=h+1}return e}function ty(s,e,n){return Yo(s,[""],e,n)}class Yr{constructor(e,n=1){this.dir=n,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[n>0?1:(e instanceof rt?e.text.length:e.children.length)<<1]}nextInner(e,n){for(this.done=this.lineBreak=!1;;){let a=this.nodes.length-1,l=this.nodes[a],c=this.offsets[a],u=c>>1,f=l instanceof rt?l.text.length:l.children.length;if(u==(n>0?f:0)){if(a==0)return this.done=!0,this.value="",this;n>0&&this.offsets[a-1]++,this.nodes.pop(),this.offsets.pop()}else if((c&1)==(n>0?0:1)){if(this.offsets[a]+=n,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(l instanceof rt){let h=l.text[u+(n<0?-1:0)];if(this.offsets[a]+=n,h.length>Math.max(0,e))return this.value=e==0?h:n>0?h.slice(e):h.slice(0,h.length-e),this;e-=h.length}else{let h=l.children[u+(n<0?-1:0)];e>h.length?(e-=h.length,this.offsets[a]+=n):(n<0&&this.offsets[a]--,this.nodes.push(h),this.offsets.push(n>0?1:(h instanceof rt?h.text.length:h.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Ab{constructor(e,n,a){this.value="",this.done=!1,this.cursor=new Yr(e,n>a?-1:1),this.pos=n>a?e.length:0,this.from=Math.min(n,a),this.to=Math.max(n,a)}nextInner(e,n){if(n<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,n<0?this.pos-this.to:this.from-this.pos);let a=n<0?this.pos-this.from:this.to-this.pos;e>a&&(e=a),a-=e;let{value:l}=this.cursor.next(e);return this.pos+=(l.length+e)*n,this.value=l.length<=a?l:n<0?l.slice(l.length-a):l.slice(0,a),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Eb{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:n,lineBreak:a,value:l}=this.inner.next(e);return n&&this.afterBreak?(this.value="",this.afterBreak=!1):n?(this.done=!0,this.value=""):a?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=l,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(je.prototype[Symbol.iterator]=function(){return this.iter()},Yr.prototype[Symbol.iterator]=Ab.prototype[Symbol.iterator]=Eb.prototype[Symbol.iterator]=function(){return this});class dw{constructor(e,n,a,l){this.from=e,this.to=n,this.number=a,this.text=l}get length(){return this.to-this.from}}function Oa(s,e,n){return e=Math.max(0,Math.min(s.length,e)),[e,Math.max(e,Math.min(s.length,n))]}function Bn(s,e,n=!0,a=!0){return cw(s,e,n,a)}function hw(s){return s>=56320&&s<57344}function mw(s){return s>=55296&&s<56320}function pw(s,e){let n=s.charCodeAt(e);if(!mw(n)||e+1==s.length)return n;let a=s.charCodeAt(e+1);return hw(a)?(n-55296<<10)+(a-56320)+65536:n}function gw(s){return s<65536?1:2}const Od=/\r\n?|\n/;var on=(function(s){return s[s.Simple=0]="Simple",s[s.TrackDel=1]="TrackDel",s[s.TrackBefore=2]="TrackBefore",s[s.TrackAfter=3]="TrackAfter",s})(on||(on={}));class li{constructor(e){this.sections=e}get length(){let e=0;for(let n=0;n<this.sections.length;n+=2)e+=this.sections[n];return e}get newLength(){let e=0;for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n+1];e+=a<0?this.sections[n]:a}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let n=0,a=0,l=0;n<this.sections.length;){let c=this.sections[n++],u=this.sections[n++];u<0?(e(a,l,c),l+=c):l+=u,a+=c}}iterChangedRanges(e,n=!1){Nd(this,e,n)}get invertedDesc(){let e=[];for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];l<0?e.push(a,l):e.push(l,a)}return new li(e)}composeDesc(e){return this.empty?e:e.empty?this:Mb(this,e)}mapDesc(e,n=!1){return e.empty?this:Dd(this,e,n)}mapPos(e,n=-1,a=on.Simple){let l=0,c=0;for(let u=0;u<this.sections.length;){let f=this.sections[u++],h=this.sections[u++],p=l+f;if(h<0){if(p>e)return c+(e-l);c+=f}else{if(a!=on.Simple&&p>=e&&(a==on.TrackDel&&l<e&&p>e||a==on.TrackBefore&&l<e||a==on.TrackAfter&&p>e))return null;if(p>e||p==e&&n<0&&!f)return e==l||n<0?c:c+h;c+=h}l=p}if(e>l)throw new RangeError(`Position ${e} is out of range for changeset of length ${l}`);return c}touchesRange(e,n=e){for(let a=0,l=0;a<this.sections.length&&l<=n;){let c=this.sections[a++],u=this.sections[a++],f=l+c;if(u>=0&&l<=n&&f>=e)return l<e&&f>n?"cover":!0;l=f}return!1}toString(){let e="";for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];e+=(e?" ":"")+a+(l>=0?":"+l:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(n=>typeof n!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new li(e)}static create(e){return new li(e)}}class wt extends li{constructor(e,n){super(e),this.inserted=n}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Nd(this,(n,a,l,c,u)=>e=e.replace(l,l+(a-n),u),!1),e}mapDesc(e,n=!1){return Dd(this,e,n,!0)}invert(e){let n=this.sections.slice(),a=[];for(let l=0,c=0;l<n.length;l+=2){let u=n[l],f=n[l+1];if(f>=0){n[l]=f,n[l+1]=u;let h=l>>1;for(;a.length<h;)a.push(je.empty);a.push(u?e.slice(c,c+u):je.empty)}c+=u}return new wt(n,a)}compose(e){return this.empty?e:e.empty?this:Mb(this,e,!0)}map(e,n=!1){return e.empty?this:Dd(this,e,n,!0)}iterChanges(e,n=!1){Nd(this,e,n)}get desc(){return li.create(this.sections)}filter(e){let n=[],a=[],l=[],c=new Pr(this);e:for(let u=0,f=0;;){let h=u==e.length?1e9:e[u++];for(;f<h||f==h&&c.len==0;){if(c.done)break e;let g=Math.min(c.len,h-f);jt(l,g,-1);let b=c.ins==-1?-1:c.off==0?c.ins:0;jt(n,g,b),b>0&&Ui(a,n,c.text),c.forward(g),f+=g}let p=e[u++];for(;f<p;){if(c.done)break e;let g=Math.min(c.len,p-f);jt(n,g,-1),jt(l,g,c.ins==-1?-1:c.off==0?c.ins:0),c.forward(g),f+=g}}return{changes:new wt(n,a),filtered:li.create(l)}}toJSON(){let e=[];for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n],l=this.sections[n+1];l<0?e.push(a):l==0?e.push([a]):e.push([a].concat(this.inserted[n>>1].toJSON()))}return e}static of(e,n,a){let l=[],c=[],u=0,f=null;function h(g=!1){if(!g&&!l.length)return;u<n&&jt(l,n-u,-1);let b=new wt(l,c);f=f?f.compose(b.map(f)):b,l=[],c=[],u=0}function p(g){if(Array.isArray(g))for(let b of g)p(b);else if(g instanceof wt){if(g.length!=n)throw new RangeError(`Mismatched change set length (got ${g.length}, expected ${n})`);h(),f=f?f.compose(g.map(f)):g}else{let{from:b,to:v=b,insert:S}=g;if(b>v||b<0||v>n)throw new RangeError(`Invalid change range ${b} to ${v} (in doc of length ${n})`);let k=S?typeof S=="string"?je.of(S.split(a||Od)):S:je.empty,T=k.length;if(b==v&&T==0)return;b<u&&h(),b>u&&jt(l,b-u,-1),jt(l,v-b,T),Ui(c,l,k),u=v}}return p(e),h(!f),f}static empty(e){return new wt(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let n=[],a=[];for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="number")n.push(c,-1);else{if(!Array.isArray(c)||typeof c[0]!="number"||c.some((u,f)=>f&&typeof u!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(c.length==1)n.push(c[0],0);else{for(;a.length<l;)a.push(je.empty);a[l]=je.of(c.slice(1)),n.push(c[0],a[l].length)}}}return new wt(n,a)}static createSet(e,n){return new wt(e,n)}}function jt(s,e,n,a=!1){if(e==0&&n<=0)return;let l=s.length-2;l>=0&&n<=0&&n==s[l+1]?s[l]+=e:l>=0&&e==0&&s[l]==0?s[l+1]+=n:a?(s[l]+=e,s[l+1]+=n):s.push(e,n)}function Ui(s,e,n){if(n.length==0)return;let a=e.length-2>>1;if(a<s.length)s[s.length-1]=s[s.length-1].append(n);else{for(;s.length<a;)s.push(je.empty);s.push(n)}}function Nd(s,e,n){let a=s.inserted;for(let l=0,c=0,u=0;u<s.sections.length;){let f=s.sections[u++],h=s.sections[u++];if(h<0)l+=f,c+=f;else{let p=l,g=c,b=je.empty;for(;p+=f,g+=h,h&&a&&(b=b.append(a[u-2>>1])),!(n||u==s.sections.length||s.sections[u+1]<0);)f=s.sections[u++],h=s.sections[u++];e(l,p,c,g,b),l=p,c=g}}}function Dd(s,e,n,a=!1){let l=[],c=a?[]:null,u=new Pr(s),f=new Pr(e);for(let h=-1;;){if(u.done&&f.len||f.done&&u.len)throw new Error("Mismatched change set lengths");if(u.ins==-1&&f.ins==-1){let p=Math.min(u.len,f.len);jt(l,p,-1),u.forward(p),f.forward(p)}else if(f.ins>=0&&(u.ins<0||h==u.i||u.off==0&&(f.len<u.len||f.len==u.len&&!n))){let p=f.len;for(jt(l,f.ins,-1);p;){let g=Math.min(u.len,p);u.ins>=0&&h<u.i&&u.len<=g&&(jt(l,0,u.ins),c&&Ui(c,l,u.text),h=u.i),u.forward(g),p-=g}f.next()}else if(u.ins>=0){let p=0,g=u.len;for(;g;)if(f.ins==-1){let b=Math.min(g,f.len);p+=b,g-=b,f.forward(b)}else if(f.ins==0&&f.len<g)g-=f.len,f.next();else break;jt(l,p,h<u.i?u.ins:0),c&&h<u.i&&Ui(c,l,u.text),h=u.i,u.forward(u.len-g)}else{if(u.done&&f.done)return c?wt.createSet(l,c):li.create(l);throw new Error("Mismatched change set lengths")}}}function Mb(s,e,n=!1){let a=[],l=n?[]:null,c=new Pr(s),u=new Pr(e);for(let f=!1;;){if(c.done&&u.done)return l?wt.createSet(a,l):li.create(a);if(c.ins==0)jt(a,c.len,0,f),c.next();else if(u.len==0&&!u.done)jt(a,0,u.ins,f),l&&Ui(l,a,u.text),u.next();else{if(c.done||u.done)throw new Error("Mismatched change set lengths");{let h=Math.min(c.len2,u.len),p=a.length;if(c.ins==-1){let g=u.ins==-1?-1:u.off?0:u.ins;jt(a,h,g,f),l&&g&&Ui(l,a,u.text)}else u.ins==-1?(jt(a,c.off?0:c.len,h,f),l&&Ui(l,a,c.textBit(h))):(jt(a,c.off?0:c.len,u.off?0:u.ins,f),l&&!u.off&&Ui(l,a,u.text));f=(c.ins>h||u.ins>=0&&u.len>h)&&(f||a.length>p),c.forward2(h),u.forward(h)}}}}class Pr{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,n=this.i-2>>1;return n>=e.length?je.empty:e[n]}textBit(e){let{inserted:n}=this.set,a=this.i-2>>1;return a>=n.length&&!e?je.empty:n[a].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class xs{constructor(e,n,a){this.from=e,this.to=n,this.flags=a}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,n=-1){let a,l;return this.empty?a=l=e.mapPos(this.from,n):(a=e.mapPos(this.from,1),l=e.mapPos(this.to,-1)),a==this.from&&l==this.to?this:new xs(a,l,this.flags)}extend(e,n=e,a=0){if(e<=this.anchor&&n>=this.anchor)return J.range(e,n,void 0,void 0,a);let l=Math.abs(e-this.anchor)>Math.abs(n-this.anchor)?e:n;return J.range(this.anchor,l,void 0,void 0,a)}eq(e,n=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!n||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return J.range(e.anchor,e.head)}static create(e,n,a){return new xs(e,n,a)}}class J{constructor(e,n){this.ranges=e,this.mainIndex=n}map(e,n=-1){return e.empty?this:J.create(this.ranges.map(a=>a.map(e,n)),this.mainIndex)}eq(e,n=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let a=0;a<this.ranges.length;a++)if(!this.ranges[a].eq(e.ranges[a],n))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new J([this.main],0)}addRange(e,n=!0){return J.create([e].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(e,n=this.mainIndex){let a=this.ranges.slice();return a[n]=e,J.create(a,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new J(e.ranges.map(n=>xs.fromJSON(n)),e.main)}static single(e,n=e){return new J([J.range(e,n)],0)}static create(e,n=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let a=0,l=0;l<e.length;l++){let c=e[l];if(c.empty?c.from<=a:c.from<a)return J.normalized(e.slice(),n);a=c.to}return new J(e,n)}static cursor(e,n=0,a,l){return xs.create(e,e,(n==0?0:n<0?8:16)|(a==null?7:Math.min(6,a))|(l??16777215)<<6)}static range(e,n,a,l,c){let u=(a??16777215)<<6|(l==null?7:Math.min(6,l));return!c&&e!=n&&(c=n<e?1:-1),n<e?xs.create(n,e,48|u):xs.create(e,n,(c?c<0?8:16:0)|u)}static normalized(e,n=0){let a=e[n];e.sort((l,c)=>l.from-c.from),n=e.indexOf(a);for(let l=1;l<e.length;l++){let c=e[l],u=e[l-1];if(c.empty?c.from<=u.to:c.from<u.to){let f=u.from,h=Math.max(c.to,u.to);l<=n&&n--,e.splice(--l,2,c.anchor>c.head?J.range(h,f):J.range(f,h))}}return new J(e,n)}}function Rb(s,e){for(let n of s.ranges)if(n.to>e)throw new RangeError("Selection points outside of document")}let yh=0;class ce{constructor(e,n,a,l,c){this.combine=e,this.compareInput=n,this.compare=a,this.isStatic=l,this.id=yh++,this.default=e([]),this.extensions=typeof c=="function"?c(this):c}get reader(){return this}static define(e={}){return new ce(e.combine||(n=>n),e.compareInput||((n,a)=>n===a),e.compare||(e.combine?(n,a)=>n===a:bh),!!e.static,e.enables)}of(e){return new Ko([],this,0,e)}compute(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Ko(e,this,1,n)}computeN(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Ko(e,this,2,n)}from(e,n){return n||(n=a=>a),this.compute([e],a=>n(a.field(e)))}}function bh(s,e){return s==e||s.length==e.length&&s.every((n,a)=>n===e[a])}class Ko{constructor(e,n,a,l){this.dependencies=e,this.facet=n,this.type=a,this.value=l,this.id=yh++}dynamicSlot(e){var n;let a=this.value,l=this.facet.compareInput,c=this.id,u=e[c]>>1,f=this.type==2,h=!1,p=!1,g=[];for(let b of this.dependencies)b=="doc"?h=!0:b=="selection"?p=!0:(((n=e[b.id])!==null&&n!==void 0?n:1)&1)==0&&g.push(e[b.id]);return{create(b){return b.values[u]=a(b),1},update(b,v){if(h&&v.docChanged||p&&(v.docChanged||v.selection)||jd(b,g)){let S=a(b);if(f?!ny(S,b.values[u],l):!l(S,b.values[u]))return b.values[u]=S,1}return 0},reconfigure:(b,v)=>{let S,k=v.config.address[c];if(k!=null){let T=Jo(v,k);if(this.dependencies.every(C=>C instanceof ce?v.facet(C)===b.facet(C):C instanceof Xi?v.field(C,!1)==b.field(C,!1):!0)||(f?ny(S=a(b),T,l):l(S=a(b),T)))return b.values[u]=T,0}else S=a(b);return b.values[u]=S,1}}}}function ny(s,e,n){if(s.length!=e.length)return!1;for(let a=0;a<s.length;a++)if(!n(s[a],e[a]))return!1;return!0}function jd(s,e){let n=!1;for(let a of e)Kr(s,a)&1&&(n=!0);return n}function yw(s,e,n){let a=n.map(h=>s[h.id]),l=n.map(h=>h.type),c=a.filter(h=>!(h&1)),u=s[e.id]>>1;function f(h){let p=[];for(let g=0;g<a.length;g++){let b=Jo(h,a[g]);if(l[g]==2)for(let v of b)p.push(v);else p.push(b)}return e.combine(p)}return{create(h){for(let p of a)Kr(h,p);return h.values[u]=f(h),1},update(h,p){if(!jd(h,c))return 0;let g=f(h);return e.compare(g,h.values[u])?0:(h.values[u]=g,1)},reconfigure(h,p){let g=jd(h,a),b=p.config.facets[e.id],v=p.facet(e);if(b&&!g&&bh(n,b))return h.values[u]=v,0;let S=f(h);return e.compare(S,v)?(h.values[u]=v,0):(h.values[u]=S,1)}}}const Co=ce.define({static:!0});class Xi{constructor(e,n,a,l,c){this.id=e,this.createF=n,this.updateF=a,this.compareF=l,this.spec=c,this.provides=void 0}static define(e){let n=new Xi(yh++,e.create,e.update,e.compare||((a,l)=>a===l),e);return e.provide&&(n.provides=e.provide(n)),n}create(e){let n=e.facet(Co).find(a=>a.field==this);return(n?.create||this.createF)(e)}slot(e){let n=e[this.id]>>1;return{create:a=>(a.values[n]=this.create(a),1),update:(a,l)=>{let c=a.values[n],u=this.updateF(c,l);return this.compareF(c,u)?0:(a.values[n]=u,1)},reconfigure:(a,l)=>{let c=a.facet(Co),u=l.facet(Co),f;return(f=c.find(h=>h.field==this))&&f!=u.find(h=>h.field==this)?(a.values[n]=f.create(a),1):l.config.address[this.id]!=null?(a.values[n]=l.field(this),0):(a.values[n]=this.create(a),1)}}}init(e){return[this,Co.of({field:this,create:e})]}get extension(){return this}}const bs={lowest:4,low:3,default:2,high:1,highest:0};function zr(s){return e=>new Cb(e,s)}const vh={highest:zr(bs.highest),high:zr(bs.high),default:zr(bs.default),low:zr(bs.low),lowest:zr(bs.lowest)};class Cb{constructor(e,n){this.inner=e,this.prec=n}}class yc{of(e){return new zd(this,e)}reconfigure(e){return yc.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class zd{constructor(e,n){this.compartment=e,this.inner=n}}class Po{constructor(e,n,a,l,c,u){for(this.base=e,this.compartments=n,this.dynamicSlots=a,this.address=l,this.staticValues=c,this.facets=u,this.statusTemplate=[];this.statusTemplate.length<a.length;)this.statusTemplate.push(0)}staticFacet(e){let n=this.address[e.id];return n==null?e.default:this.staticValues[n>>1]}static resolve(e,n,a){let l=[],c=Object.create(null),u=new Map;for(let v of bw(e,n,u))v instanceof Xi?l.push(v):(c[v.facet.id]||(c[v.facet.id]=[])).push(v);let f=Object.create(null),h=[],p=[];for(let v of l)f[v.id]=p.length<<1,p.push(S=>v.slot(S));let g=a?.config.facets;for(let v in c){let S=c[v],k=S[0].facet,T=g&&g[v]||[];if(S.every(C=>C.type==0))if(f[k.id]=h.length<<1|1,bh(T,S))h.push(a.facet(k));else{let C=k.combine(S.map(_=>_.value));h.push(a&&k.compare(C,a.facet(k))?a.facet(k):C)}else{for(let C of S)C.type==0?(f[C.id]=h.length<<1|1,h.push(C.value)):(f[C.id]=p.length<<1,p.push(_=>C.dynamicSlot(_)));f[k.id]=p.length<<1,p.push(C=>yw(C,k,S))}}let b=p.map(v=>v(f));return new Po(e,u,b,f,h,c)}}function bw(s,e,n){let a=[[],[],[],[],[]],l=new Map;function c(u,f){let h=l.get(u);if(h!=null){if(h<=f)return;let p=a[h].indexOf(u);p>-1&&a[h].splice(p,1),u instanceof zd&&n.delete(u.compartment)}if(l.set(u,f),Array.isArray(u))for(let p of u)c(p,f);else if(u instanceof zd){if(n.has(u.compartment))throw new RangeError("Duplicate use of compartment in extensions");let p=e.get(u.compartment)||u.inner;n.set(u.compartment,p),c(p,f)}else if(u instanceof Cb)c(u.inner,u.prec);else if(u instanceof Xi)a[f].push(u),u.provides&&c(u.provides,f);else if(u instanceof Ko)a[f].push(u),u.facet.extensions&&c(u.facet.extensions,bs.default);else{let p=u.extension;if(!p)throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);c(p,f)}}return c(s,bs.default),a.reduce((u,f)=>u.concat(f))}function Kr(s,e){if(e&1)return 2;let n=e>>1,a=s.status[n];if(a==4)throw new Error("Cyclic dependency between fields and/or facets");if(a&2)return a;s.status[n]=4;let l=s.computeSlot(s,s.config.dynamicSlots[n]);return s.status[n]=2|l}function Jo(s,e){return e&1?s.config.staticValues[e>>1]:s.values[e>>1]}const Ob=ce.define(),Bd=ce.define({combine:s=>s.some(e=>e),static:!0}),Nb=ce.define({combine:s=>s.length?s[0]:void 0,static:!0}),Db=ce.define(),jb=ce.define(),zb=ce.define(),Bb=ce.define({combine:s=>s.length?s[0]:!1});class La{constructor(e,n){this.type=e,this.value=n}static define(){return new vw}}class vw{of(e){return new La(this,e)}}class xw{constructor(e){this.map=e}of(e){return new mt(this,e)}}class mt{constructor(e,n){this.type=e,this.value=n}map(e){let n=this.type.map(this.value,e);return n===void 0?void 0:n==this.value?this:new mt(this.type,n)}is(e){return this.type==e}static define(e={}){return new xw(e.map||(n=>n))}static mapEffects(e,n){if(!e.length)return e;let a=[];for(let l of e){let c=l.map(n);c&&a.push(c)}return a}}mt.reconfigure=mt.define();mt.appendConfig=mt.define();class zt{constructor(e,n,a,l,c,u){this.startState=e,this.changes=n,this.selection=a,this.effects=l,this.annotations=c,this.scrollIntoView=u,this._doc=null,this._state=null,a&&Rb(a,n.newLength),c.some(f=>f.type==zt.time)||(this.annotations=c.concat(zt.time.of(Date.now())))}static create(e,n,a,l,c,u){return new zt(e,n,a,l,c,u)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let n of this.annotations)if(n.type==e)return n.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let n=this.annotation(zt.userEvent);return!!(n&&(n==e||n.length>e.length&&n.slice(0,e.length)==e&&n[e.length]=="."))}}zt.time=La.define();zt.userEvent=La.define();zt.addToHistory=La.define();zt.remote=La.define();function Sw(s,e){let n=[];for(let a=0,l=0;;){let c,u;if(a<s.length&&(l==e.length||e[l]>=s[a]))c=s[a++],u=s[a++];else if(l<e.length)c=e[l++],u=e[l++];else return n;!n.length||n[n.length-1]<c?n.push(c,u):n[n.length-1]<u&&(n[n.length-1]=u)}}function Lb(s,e,n){var a;let l,c,u;return n?(l=e.changes,c=wt.empty(e.changes.length),u=s.changes.compose(e.changes)):(l=e.changes.map(s.changes),c=s.changes.mapDesc(e.changes,!0),u=s.changes.compose(l)),{changes:u,selection:e.selection?e.selection.map(c):(a=s.selection)===null||a===void 0?void 0:a.map(l),effects:mt.mapEffects(s.effects,l).concat(mt.mapEffects(e.effects,c)),annotations:s.annotations.length?s.annotations.concat(e.annotations):e.annotations,scrollIntoView:s.scrollIntoView||e.scrollIntoView}}function Ld(s,e,n){let a=e.selection,l=Ea(e.annotations);return e.userEvent&&(l=l.concat(zt.userEvent.of(e.userEvent))),{changes:e.changes instanceof wt?e.changes:wt.of(e.changes||[],n,s.facet(Nb)),selection:a&&(a instanceof J?a:J.single(a.anchor,a.head)),effects:Ea(e.effects),annotations:l,scrollIntoView:!!e.scrollIntoView}}function _b(s,e,n){let a=Ld(s,e.length?e[0]:{},s.doc.length);e.length&&e[0].filter===!1&&(n=!1);for(let c=1;c<e.length;c++){e[c].filter===!1&&(n=!1);let u=!!e[c].sequential;a=Lb(a,Ld(s,e[c],u?a.changes.newLength:s.doc.length),u)}let l=zt.create(s,a.changes,a.selection,a.effects,a.annotations,a.scrollIntoView);return kw(n?ww(l):l)}function ww(s){let e=s.startState,n=!0;for(let l of e.facet(Db)){let c=l(s);if(c===!1){n=!1;break}Array.isArray(c)&&(n=n===!0?c:Sw(n,c))}if(n!==!0){let l,c;if(n===!1)c=s.changes.invertedDesc,l=wt.empty(e.doc.length);else{let u=s.changes.filter(n);l=u.changes,c=u.filtered.mapDesc(u.changes).invertedDesc}s=zt.create(e,l,s.selection&&s.selection.map(c),mt.mapEffects(s.effects,c),s.annotations,s.scrollIntoView)}let a=e.facet(jb);for(let l=a.length-1;l>=0;l--){let c=a[l](s);c instanceof zt?s=c:Array.isArray(c)&&c.length==1&&c[0]instanceof zt?s=c[0]:s=_b(e,Ea(c),!1)}return s}function kw(s){let e=s.startState,n=e.facet(zb),a=s;for(let l=n.length-1;l>=0;l--){let c=n[l](s);c&&Object.keys(c).length&&(a=Lb(a,Ld(e,c,s.changes.newLength),!0))}return a==s?s:zt.create(e,s.changes,s.selection,a.effects,a.annotations,a.scrollIntoView)}const Tw=[];function Ea(s){return s==null?Tw:Array.isArray(s)?s:[s]}var ai=(function(s){return s[s.Word=0]="Word",s[s.Space=1]="Space",s[s.Other=2]="Other",s})(ai||(ai={}));const Aw=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let _d;try{_d=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function Ew(s){if(_d)return _d.test(s);for(let e=0;e<s.length;e++){let n=s[e];if(/\w/.test(n)||n>""&&(n.toUpperCase()!=n.toLowerCase()||Aw.test(n)))return!0}return!1}function Mw(s){return e=>{if(!/\S/.test(e))return ai.Space;if(Ew(e))return ai.Word;for(let n=0;n<s.length;n++)if(e.indexOf(s[n])>-1)return ai.Word;return ai.Other}}class $e{constructor(e,n,a,l,c,u){this.config=e,this.doc=n,this.selection=a,this.values=l,this.status=e.statusTemplate.slice(),this.computeSlot=c,u&&(u._state=this);for(let f=0;f<this.config.dynamicSlots.length;f++)Kr(this,f<<1);this.computeSlot=null}field(e,n=!0){let a=this.config.address[e.id];if(a==null){if(n)throw new RangeError("Field is not present in this state");return}return Kr(this,a),Jo(this,a)}update(...e){return _b(this,e,!0)}applyTransaction(e){let n=this.config,{base:a,compartments:l}=n;for(let f of e.effects)f.is(yc.reconfigure)?(n&&(l=new Map,n.compartments.forEach((h,p)=>l.set(p,h)),n=null),l.set(f.value.compartment,f.value.extension)):f.is(mt.reconfigure)?(n=null,a=f.value):f.is(mt.appendConfig)&&(n=null,a=Ea(a).concat(f.value));let c;n?c=e.startState.values.slice():(n=Po.resolve(a,l,this),c=new $e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(h,p)=>p.reconfigure(h,this),null).values);let u=e.startState.facet(Bd)?e.newSelection:e.newSelection.asSingle();new $e(n,e.newDoc,u,c,(f,h)=>h.update(f,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:e},range:J.cursor(n.from+e.length)}))}changeByRange(e){let n=this.selection,a=e(n.ranges[0]),l=this.changes(a.changes),c=[a.range],u=Ea(a.effects);for(let f=1;f<n.ranges.length;f++){let h=e(n.ranges[f]),p=this.changes(h.changes),g=p.map(l);for(let v=0;v<f;v++)c[v]=c[v].map(g);let b=l.mapDesc(p,!0);c.push(h.range.map(b)),l=l.compose(g),u=mt.mapEffects(u,g).concat(mt.mapEffects(Ea(h.effects),b))}return{changes:l,selection:J.create(c,n.mainIndex),effects:u}}changes(e=[]){return e instanceof wt?e:wt.of(e,this.doc.length,this.facet($e.lineSeparator))}toText(e){return je.of(e.split(this.facet($e.lineSeparator)||Od))}sliceDoc(e=0,n=this.doc.length){return this.doc.sliceString(e,n,this.lineBreak)}facet(e){let n=this.config.address[e.id];return n==null?e.default:(Kr(this,n),Jo(this,n))}toJSON(e){let n={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let a in e){let l=e[a];l instanceof Xi&&this.config.address[l.id]!=null&&(n[a]=l.spec.toJSON(this.field(e[a]),this))}return n}static fromJSON(e,n={},a){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let l=[];if(a){for(let c in a)if(Object.prototype.hasOwnProperty.call(e,c)){let u=a[c],f=e[c];l.push(u.init(h=>u.spec.fromJSON(f,h)))}}return $e.create({doc:e.doc,selection:J.fromJSON(e.selection),extensions:n.extensions?l.concat([n.extensions]):l})}static create(e={}){let n=Po.resolve(e.extensions||[],new Map),a=e.doc instanceof je?e.doc:je.of((e.doc||"").split(n.staticFacet($e.lineSeparator)||Od)),l=e.selection?e.selection instanceof J?e.selection:J.single(e.selection.anchor,e.selection.head):J.single(0);return Rb(l,a.length),n.staticFacet(Bd)||(l=l.asSingle()),new $e(n,a,l,n.dynamicSlots.map(()=>null),(c,u)=>u.create(c),null)}get tabSize(){return this.facet($e.tabSize)}get lineBreak(){return this.facet($e.lineSeparator)||`
`}get readOnly(){return this.facet(Bb)}phrase(e,...n){for(let a of this.facet($e.phrases))if(Object.prototype.hasOwnProperty.call(a,e)){e=a[e];break}return n.length&&(e=e.replace(/\$(\$|\d*)/g,(a,l)=>{if(l=="$")return"$";let c=+(l||1);return!c||c>n.length?a:n[c-1]})),e}languageDataAt(e,n,a=-1){let l=[];for(let c of this.facet(Ob))for(let u of c(this,n,a))Object.prototype.hasOwnProperty.call(u,e)&&l.push(u[e]);return l}charCategorizer(e){let n=this.languageDataAt("wordChars",e);return Mw(n.length?n[0]:"")}wordAt(e){let{text:n,from:a,length:l}=this.doc.lineAt(e),c=this.charCategorizer(e),u=e-a,f=e-a;for(;u>0;){let h=Bn(n,u,!1);if(c(n.slice(h,u))!=ai.Word)break;u=h}for(;f<l;){let h=Bn(n,f);if(c(n.slice(f,h))!=ai.Word)break;f=h}return u==f?null:J.range(u+a,f+a)}}$e.allowMultipleSelections=Bd;$e.tabSize=ce.define({combine:s=>s.length?s[0]:4});$e.lineSeparator=Nb;$e.readOnly=Bb;$e.phrases=ce.define({compare(s,e){let n=Object.keys(s),a=Object.keys(e);return n.length==a.length&&n.every(l=>s[l]==e[l])}});$e.languageData=Ob;$e.changeFilter=Db;$e.transactionFilter=jb;$e.transactionExtender=zb;yc.reconfigure=mt.define();function Hb(s,e,n={}){let a={};for(let l of s)for(let c of Object.keys(l)){let u=l[c],f=a[c];if(f===void 0)a[c]=u;else if(!(f===u||u===void 0))if(Object.hasOwnProperty.call(n,c))a[c]=n[c](f,u);else throw new Error("Config merge conflict for field "+c)}for(let l in e)a[l]===void 0&&(a[l]=e[l]);return a}class Ts{eq(e){return this==e}range(e,n=e){return Jr.create(e,n,this)}}Ts.prototype.startSide=Ts.prototype.endSide=0;Ts.prototype.point=!1;Ts.prototype.mapMode=on.TrackDel;function xh(s,e){return s==e||s.constructor==e.constructor&&s.eq(e)}class Jr{constructor(e,n,a){this.from=e,this.to=n,this.value=a}static create(e,n,a){return new Jr(e,n,a)}}function Hd(s,e){return s.from-e.from||s.value.startSide-e.value.startSide}class Sh{constructor(e,n,a,l){this.from=e,this.to=n,this.value=a,this.maxPoint=l}get length(){return this.to[this.to.length-1]}findIndex(e,n,a,l=0){let c=a?this.to:this.from;for(let u=l,f=c.length;;){if(u==f)return u;let h=u+f>>1,p=c[h]-e||(a?this.value[h].endSide:this.value[h].startSide)-n;if(h==u)return p>=0?u:f;p>=0?f=h:u=h+1}}between(e,n,a,l){for(let c=this.findIndex(n,-1e9,!0),u=this.findIndex(a,1e9,!1,c);c<u;c++)if(l(this.from[c]+e,this.to[c]+e,this.value[c])===!1)return!1}map(e,n){let a=[],l=[],c=[],u=-1,f=-1;for(let h=0;h<this.value.length;h++){let p=this.value[h],g=this.from[h]+e,b=this.to[h]+e,v,S;if(g==b){let k=n.mapPos(g,p.startSide,p.mapMode);if(k==null||(v=S=k,p.startSide!=p.endSide&&(S=n.mapPos(g,p.endSide),S<v)))continue}else if(v=n.mapPos(g,p.startSide),S=n.mapPos(b,p.endSide),v>S||v==S&&p.startSide>0&&p.endSide<=0)continue;(S-v||p.endSide-p.startSide)<0||(u<0&&(u=v),p.point&&(f=Math.max(f,S-v)),a.push(p),l.push(v-u),c.push(S-u))}return{mapped:a.length?new Sh(l,c,a,f):null,pos:u}}}class Me{constructor(e,n,a,l){this.chunkPos=e,this.chunk=n,this.nextLayer=a,this.maxPoint=l}static create(e,n,a,l){return new Me(e,n,a,l)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let n of this.chunk)e+=n.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:n=[],sort:a=!1,filterFrom:l=0,filterTo:c=this.length}=e,u=e.filter;if(n.length==0&&!u)return this;if(a&&(n=n.slice().sort(Hd)),this.isEmpty)return n.length?Me.of(n):this;let f=new qb(this,null,-1).goto(0),h=0,p=[],g=new Io;for(;f.value||h<n.length;)if(h<n.length&&(f.from-n[h].from||f.startSide-n[h].value.startSide)>=0){let b=n[h++];g.addInner(b.from,b.to,b.value)||p.push(b)}else f.rangeIndex==1&&f.chunkIndex<this.chunk.length&&(h==n.length||this.chunkEnd(f.chunkIndex)<n[h].from)&&(!u||l>this.chunkEnd(f.chunkIndex)||c<this.chunkPos[f.chunkIndex])&&g.addChunk(this.chunkPos[f.chunkIndex],this.chunk[f.chunkIndex])?f.nextChunk():((!u||l>f.to||c<f.from||u(f.from,f.to,f.value))&&(g.addInner(f.from,f.to,f.value)||p.push(Jr.create(f.from,f.to,f.value))),f.next());return g.finishInner(this.nextLayer.isEmpty&&!p.length?Me.empty:this.nextLayer.update({add:p,filter:u,filterFrom:l,filterTo:c}))}map(e){if(e.empty||this.isEmpty)return this;let n=[],a=[],l=-1;for(let u=0;u<this.chunk.length;u++){let f=this.chunkPos[u],h=this.chunk[u],p=e.touchesRange(f,f+h.length);if(p===!1)l=Math.max(l,h.maxPoint),n.push(h),a.push(e.mapPos(f));else if(p===!0){let{mapped:g,pos:b}=h.map(f,e);g&&(l=Math.max(l,g.maxPoint),n.push(g),a.push(b))}}let c=this.nextLayer.map(e);return n.length==0?c:new Me(a,n,c||Me.empty,l)}between(e,n,a){if(!this.isEmpty){for(let l=0;l<this.chunk.length;l++){let c=this.chunkPos[l],u=this.chunk[l];if(n>=c&&e<=c+u.length&&u.between(c,e-c,n-c,a)===!1)return}this.nextLayer.between(e,n,a)}}iter(e=0){return Ir.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,n=0){return Ir.from(e).goto(n)}static compare(e,n,a,l,c=-1){let u=e.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),f=n.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),h=iy(u,f,a),p=new Br(u,h,c),g=new Br(f,h,c);a.iterGaps((b,v,S)=>sy(p,b,g,v,S,l)),a.empty&&a.length==0&&sy(p,0,g,0,0,l)}static eq(e,n,a=0,l){l==null&&(l=999999999);let c=e.filter(g=>!g.isEmpty&&n.indexOf(g)<0),u=n.filter(g=>!g.isEmpty&&e.indexOf(g)<0);if(c.length!=u.length)return!1;if(!c.length)return!0;let f=iy(c,u),h=new Br(c,f,0).goto(a),p=new Br(u,f,0).goto(a);for(;;){if(h.to!=p.to||!qd(h.active,p.active)||h.point&&(!p.point||!xh(h.point,p.point)))return!1;if(h.to>l)return!0;h.next(),p.next()}}static spans(e,n,a,l,c=-1){let u=new Br(e,null,c).goto(n),f=n,h=u.openStart;for(;;){let p=Math.min(u.to,a);if(u.point){let g=u.activeForPoint(u.to),b=u.pointFrom<n?g.length+1:u.point.startSide<0?g.length:Math.min(g.length,h);l.point(f,p,u.point,g,b,u.pointRank),h=Math.min(u.openEnd(p),g.length)}else p>f&&(l.span(f,p,u.active,h),h=u.openEnd(p));if(u.to>a)return h+(u.point&&u.to>a?1:0);f=u.to,u.next()}}static of(e,n=!1){let a=new Io;for(let l of e instanceof Jr?[e]:n?Rw(e):e)a.add(l.from,l.to,l.value);return a.finish()}static join(e){if(!e.length)return Me.empty;let n=e[e.length-1];for(let a=e.length-2;a>=0;a--)for(let l=e[a];l!=Me.empty;l=l.nextLayer)n=new Me(l.chunkPos,l.chunk,n,Math.max(l.maxPoint,n.maxPoint));return n}}Me.empty=new Me([],[],null,-1);function Rw(s){if(s.length>1)for(let e=s[0],n=1;n<s.length;n++){let a=s[n];if(Hd(e,a)>0)return s.slice().sort(Hd);e=a}return s}Me.empty.nextLayer=Me.empty;class Io{finishChunk(e){this.chunks.push(new Sh(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,n,a){this.addInner(e,n,a)||(this.nextLayer||(this.nextLayer=new Io)).add(e,n,a)}addInner(e,n,a){let l=e-this.lastTo||a.startSide-this.last.endSide;if(l<=0&&(e-this.lastFrom||a.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return l<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(n-this.chunkStart),this.last=a,this.lastFrom=e,this.lastTo=n,this.value.push(a),a.point&&(this.maxPoint=Math.max(this.maxPoint,n-e)),!0)}addChunk(e,n){if((e-this.lastTo||n.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,n.maxPoint),this.chunks.push(n),this.chunkPos.push(e);let a=n.value.length-1;return this.last=n.value[a],this.lastFrom=n.from[a]+e,this.lastTo=n.to[a]+e,!0}finish(){return this.finishInner(Me.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let n=Me.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,n}}function iy(s,e,n){let a=new Map;for(let c of s)for(let u=0;u<c.chunk.length;u++)c.chunk[u].maxPoint<=0&&a.set(c.chunk[u],c.chunkPos[u]);let l=new Set;for(let c of e)for(let u=0;u<c.chunk.length;u++){let f=a.get(c.chunk[u]);f!=null&&(n?n.mapPos(f):f)==c.chunkPos[u]&&!n?.touchesRange(f,f+c.chunk[u].length)&&l.add(c.chunk[u])}return l}class qb{constructor(e,n,a,l=0){this.layer=e,this.skip=n,this.minPoint=a,this.rank=l}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,n=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,n,!1),this}gotoInner(e,n,a){for(;this.chunkIndex<this.layer.chunk.length;){let l=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(l)||this.layer.chunkEnd(this.chunkIndex)<e||l.maxPoint<this.minPoint))break;this.chunkIndex++,a=!1}if(this.chunkIndex<this.layer.chunk.length){let l=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],n,!0);(!a||this.rangeIndex<l)&&this.setRangeIndex(l)}this.next()}forward(e,n){(this.to-e||this.endSide-n)<0&&this.gotoInner(e,n,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],n=this.layer.chunk[this.chunkIndex],a=e+n.from[this.rangeIndex];if(this.from=a,this.to=e+n.to[this.rangeIndex],this.value=n.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class Ir{constructor(e){this.heap=e}static from(e,n=null,a=-1){let l=[];for(let c=0;c<e.length;c++)for(let u=e[c];!u.isEmpty;u=u.nextLayer)u.maxPoint>=a&&l.push(new qb(u,n,a,c));return l.length==1?l[0]:new Ir(l)}get startSide(){return this.value?this.value.startSide:0}goto(e,n=-1e9){for(let a of this.heap)a.goto(e,n);for(let a=this.heap.length>>1;a>=0;a--)If(this.heap,a);return this.next(),this}forward(e,n){for(let a of this.heap)a.forward(e,n);for(let a=this.heap.length>>1;a>=0;a--)If(this.heap,a);(this.to-e||this.value.endSide-n)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),If(this.heap,0)}}}function If(s,e){for(let n=s[e];;){let a=(e<<1)+1;if(a>=s.length)break;let l=s[a];if(a+1<s.length&&l.compare(s[a+1])>=0&&(l=s[a+1],a++),n.compare(l)<0)break;s[a]=n,s[e]=l,e=a}}class Br{constructor(e,n,a){this.minPoint=a,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Ir.from(e,n,a)}goto(e,n=-1e9){return this.cursor.goto(e,n),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=n,this.openStart=-1,this.next(),this}forward(e,n){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-n)<0;)this.removeActive(this.minActive);this.cursor.forward(e,n)}removeActive(e){Oo(this.active,e),Oo(this.activeTo,e),Oo(this.activeRank,e),this.minActive=ay(this.active,this.activeTo)}addActive(e){let n=0,{value:a,to:l,rank:c}=this.cursor;for(;n<this.activeRank.length&&(c-this.activeRank[n]||l-this.activeTo[n])>0;)n++;No(this.active,n,a),No(this.activeTo,n,l),No(this.activeRank,n,c),e&&No(e,n,this.cursor.from),this.minActive=ay(this.active,this.activeTo)}next(){let e=this.to,n=this.point;this.point=null;let a=this.openStart<0?[]:null;for(;;){let l=this.minActive;if(l>-1&&(this.activeTo[l]-this.cursor.from||this.active[l].endSide-this.cursor.startSide)<0){if(this.activeTo[l]>e){this.to=this.activeTo[l],this.endSide=this.active[l].endSide;break}this.removeActive(l),a&&Oo(a,l)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let c=this.cursor.value;if(!c.point)this.addActive(a),this.cursor.next();else if(n&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=c,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=c.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(a){this.openStart=0;for(let l=a.length-1;l>=0&&a[l]<e;l--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let n=[];for(let a=this.active.length-1;a>=0&&!(this.activeRank[a]<this.pointRank);a--)(this.activeTo[a]>e||this.activeTo[a]==e&&this.active[a].endSide>=this.point.endSide)&&n.push(this.active[a]);return n.reverse()}openEnd(e){let n=0;for(let a=this.activeTo.length-1;a>=0&&this.activeTo[a]>e;a--)n++;return n}}function sy(s,e,n,a,l,c){s.goto(e),n.goto(a);let u=a+l,f=a,h=a-e,p=!!c.boundChange;for(let g=!1;;){let b=s.to+h-n.to,v=b||s.endSide-n.endSide,S=v<0?s.to+h:n.to,k=Math.min(S,u);if(s.point||n.point?(s.point&&n.point&&xh(s.point,n.point)&&qd(s.activeForPoint(s.to),n.activeForPoint(n.to))||c.comparePoint(f,k,s.point,n.point),g=!1):(g&&c.boundChange(f),k>f&&!qd(s.active,n.active)&&c.compareRange(f,k,s.active,n.active),p&&k<u&&(b||s.openEnd(S)!=n.openEnd(S))&&(g=!0)),S>u)break;f=S,v<=0&&s.next(),v>=0&&n.next()}}function qd(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++)if(s[n]!=e[n]&&!xh(s[n],e[n]))return!1;return!0}function Oo(s,e){for(let n=e,a=s.length-1;n<a;n++)s[n]=s[n+1];s.pop()}function No(s,e,n){for(let a=s.length-1;a>=e;a--)s[a+1]=s[a];s[e]=n}function ay(s,e){let n=-1,a=1e9;for(let l=0;l<e.length;l++)(e[l]-a||s[l].endSide-s[n].endSide)<0&&(n=l,a=e[l]);return n}function Cw(s,e,n,a){for(let l=0,c=0;;){if(c>=e)return l;if(l==s.length)break;c+=s.charCodeAt(l)==9?n-c%n:1,l=Bn(s,l)}return s.length}const Ud="ͼ",ry=typeof Symbol>"u"?"__"+Ud:Symbol.for(Ud),Vd=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class Na{constructor(e,n){this.rules=[];let{finish:a}=n||{};function l(u){return/^@/.test(u)?[u]:u.split(/,\s*/)}function c(u,f,h,p){let g=[],b=/^@(\w+)\b/.exec(u[0]),v=b&&b[1]=="keyframes";if(b&&f==null)return h.push(u[0]+";");for(let S in f){let k=f[S];if(/&/.test(S))c(S.split(/,\s*/).map(T=>u.map(C=>T.replace(/&/,C))).reduce((T,C)=>T.concat(C)),k,h);else if(k&&typeof k=="object"){if(!b)throw new RangeError("The value of a property ("+S+") should be a primitive value.");c(l(S),k,g,v)}else k!=null&&g.push(S.replace(/_.*/,"").replace(/[A-Z]/g,T=>"-"+T.toLowerCase())+": "+k+";")}(g.length||v)&&h.push((a&&!b&&!p?u.map(a):u).join(", ")+" {"+g.join(" ")+"}")}for(let u in e)c(l(u),e[u],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=ly[ry]||1;return ly[ry]=e+1,Ud+e.toString(36)}static mount(e,n,a){let l=e[Vd],c=a&&a.nonce;l?c&&l.setNonce(c):l=new Ow(e,c),l.mount(Array.isArray(n)?n:[n],e)}}let oy=new Map;class Ow{constructor(e,n){let a=e.ownerDocument||e,l=a.defaultView;if(!e.head&&e.adoptedStyleSheets&&l.CSSStyleSheet){let c=oy.get(a);if(c)return e[Vd]=c;this.sheet=new l.CSSStyleSheet,oy.set(a,this)}else this.styleTag=a.createElement("style"),n&&this.styleTag.setAttribute("nonce",n);this.modules=[],e[Vd]=this}mount(e,n){let a=this.sheet,l=0,c=0;for(let u=0;u<e.length;u++){let f=e[u],h=this.modules.indexOf(f);if(h<c&&h>-1&&(this.modules.splice(h,1),c--,h=-1),h==-1){if(this.modules.splice(c++,0,f),a)for(let p=0;p<f.rules.length;p++)a.insertRule(f.rules[p],l++)}else{for(;c<h;)l+=this.modules[c++].rules.length;l+=f.rules.length,c++}}if(a)n.adoptedStyleSheets.indexOf(this.sheet)<0&&(n.adoptedStyleSheets=[this.sheet,...n.adoptedStyleSheets]);else{let u="";for(let h=0;h<this.modules.length;h++)u+=this.modules[h].getRules()+`
`;this.styleTag.textContent=u;let f=n.head||n;this.styleTag.parentNode!=f&&f.insertBefore(this.styleTag,f.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Yi={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},el={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Nw=typeof navigator<"u"&&/Mac/.test(navigator.platform),Dw=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var Ct=0;Ct<10;Ct++)Yi[48+Ct]=Yi[96+Ct]=String(Ct);for(var Ct=1;Ct<=24;Ct++)Yi[Ct+111]="F"+Ct;for(var Ct=65;Ct<=90;Ct++)Yi[Ct]=String.fromCharCode(Ct+32),el[Ct]=String.fromCharCode(Ct);for(var ed in Yi)el.hasOwnProperty(ed)||(el[ed]=Yi[ed]);function jw(s){var e=Nw&&s.metaKey&&s.shiftKey&&!s.ctrlKey&&!s.altKey||Dw&&s.shiftKey&&s.key&&s.key.length==1||s.key=="Unidentified",n=!e&&s.key||(s.shiftKey?el:Yi)[s.keyCode]||s.key||"Unidentified";return n=="Esc"&&(n="Escape"),n=="Del"&&(n="Delete"),n=="Left"&&(n="ArrowLeft"),n=="Up"&&(n="ArrowUp"),n=="Right"&&(n="ArrowRight"),n=="Down"&&(n="ArrowDown"),n}let qt=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},Gd=typeof document<"u"?document:{documentElement:{style:{}}};const $d=/Edge\/(\d+)/.exec(qt.userAgent),Ub=/MSIE \d/.test(qt.userAgent),Yd=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(qt.userAgent),bc=!!(Ub||Yd||$d),cy=!bc&&/gecko\/(\d+)/i.test(qt.userAgent),td=!bc&&/Chrome\/(\d+)/.exec(qt.userAgent),uy="webkitFontSmoothing"in Gd.documentElement.style,Kd=!bc&&/Apple Computer/.test(qt.vendor),fy=Kd&&(/Mobile\/\w+/.test(qt.userAgent)||qt.maxTouchPoints>2);var P={mac:fy||/Mac/.test(qt.platform),windows:/Win/.test(qt.platform),linux:/Linux|X11/.test(qt.platform),ie:bc,ie_version:Ub?Gd.documentMode||6:Yd?+Yd[1]:$d?+$d[1]:0,gecko:cy,gecko_version:cy?+(/Firefox\/(\d+)/.exec(qt.userAgent)||[0,0])[1]:0,chrome:!!td,chrome_version:td?+td[1]:0,ios:fy,android:/Android\b/.test(qt.userAgent),webkit:uy,webkit_version:uy?+(/\bAppleWebKit\/(\d+)/.exec(qt.userAgent)||[0,0])[1]:0,safari:Kd,safari_version:Kd?+(/\bVersion\/(\d+(\.\d+)?)/.exec(qt.userAgent)||[0,0])[1]:0,tabSize:Gd.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function wh(s,e){for(let n in s)n=="class"&&e.class?e.class+=" "+s.class:n=="style"&&e.style?e.style+=";"+s.style:e[n]=s[n];return e}const ec=Object.create(null);function kh(s,e,n){if(s==e)return!0;s||(s=ec),e||(e=ec);let a=Object.keys(s),l=Object.keys(e);if(a.length-0!=l.length-0)return!1;for(let c of a)if(c!=n&&(l.indexOf(c)==-1||s[c]!==e[c]))return!1;return!0}function zw(s,e){for(let n=s.attributes.length-1;n>=0;n--){let a=s.attributes[n].name;e[a]==null&&s.removeAttribute(a)}for(let n in e){let a=e[n];n=="style"?s.style.cssText=a:s.getAttribute(n)!=a&&s.setAttribute(n,a)}}function dy(s,e,n){let a=!1;if(e)for(let l in e)n&&l in n||(a=!0,l=="style"?s.style.cssText="":s.removeAttribute(l));if(n)for(let l in n)e&&e[l]==n[l]||(a=!0,l=="style"?s.style.cssText=n[l]:s.setAttribute(l,n[l]));return a}function Bw(s){let e=Object.create(null);for(let n=0;n<s.attributes.length;n++){let a=s.attributes[n];e[a.name]=a.value}return e}class vc{eq(e){return!1}updateDOM(e,n,a){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,n,a){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Ot=(function(s){return s[s.Text=0]="Text",s[s.WidgetBefore=1]="WidgetBefore",s[s.WidgetAfter=2]="WidgetAfter",s[s.WidgetRange=3]="WidgetRange",s})(Ot||(Ot={}));class Nt extends Ts{constructor(e,n,a,l){super(),this.startSide=e,this.endSide=n,this.widget=a,this.spec=l}get heightRelevant(){return!1}static mark(e){return new ll(e)}static widget(e){let n=Math.max(-1e4,Math.min(1e4,e.side||0)),a=!!e.block;return n+=a&&!e.inlineOrder?n>0?3e8:-4e8:n>0?1e8:-1e8,new As(e,n,n,a,e.widget||null,!1)}static replace(e){let n=!!e.block,a,l;if(e.isBlockGap)a=-5e8,l=4e8;else{let{start:c,end:u}=Vb(e,n);a=(c?n?-3e8:-1:5e8)-1,l=(u?n?2e8:1:-6e8)+1}return new As(e,a,l,n,e.widget||null,!0)}static line(e){return new ol(e)}static set(e,n=!1){return Me.of(e,n)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Nt.none=Me.empty;class ll extends Nt{constructor(e){let{start:n,end:a}=Vb(e);super(n?-1:5e8,a?1:-6e8,null,e),this.tagName=e.tagName||"span",this.attrs=e.class&&e.attributes?wh(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||ec}eq(e){return this==e||e instanceof ll&&this.tagName==e.tagName&&kh(this.attrs,e.attrs)}range(e,n=e){if(e>=n)throw new RangeError("Mark decorations may not be empty");return super.range(e,n)}}ll.prototype.point=!1;class ol extends Nt{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof ol&&this.spec.class==e.spec.class&&kh(this.spec.attributes,e.spec.attributes)}range(e,n=e){if(n!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,n)}}ol.prototype.mapMode=on.TrackBefore;ol.prototype.point=!0;class As extends Nt{constructor(e,n,a,l,c,u){super(n,a,c,e),this.block=l,this.isReplace=u,this.mapMode=l?n<=0?on.TrackBefore:on.TrackAfter:on.TrackDel}get type(){return this.startSide!=this.endSide?Ot.WidgetRange:this.startSide<=0?Ot.WidgetBefore:Ot.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof As&&Lw(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,n=e){if(this.isReplace&&(e>n||e==n&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&n!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,n)}}As.prototype.point=!0;function Vb(s,e=!1){let{inclusiveStart:n,inclusiveEnd:a}=s;return n==null&&(n=s.inclusive),a==null&&(a=s.inclusive),{start:n??e,end:a??e}}function Lw(s,e){return s==e||!!(s&&e&&s.compare(e))}function Ma(s,e,n,a=0){let l=n.length-1;l>=0&&n[l]+a>=s?n[l]=Math.max(n[l],e):n.push(s,e)}class tl extends Ts{constructor(e,n,a){super(),this.tagName=e,this.attributes=n,this.rank=a}eq(e){return e==this||e instanceof tl&&this.tagName==e.tagName&&kh(this.attributes,e.attributes)}static create(e){return new tl(e.tagName,e.attributes||ec,e.rank==null?50:Math.max(0,Math.min(e.rank,100)))}static set(e,n=!1){return Me.of(e,n)}}tl.prototype.startSide=tl.prototype.endSide=-1;function nl(s){let e;return s.nodeType==11?e=s.getSelection?s:s.ownerDocument:e=s,e.getSelection()}function Wd(s,e){return e?s==e||s.contains(e.nodeType!=1?e.parentNode:e):!1}function Wr(s,e){if(!e.anchorNode)return!1;try{return Wd(s,e.anchorNode)}catch{return!1}}function Wo(s){return s.nodeType==3?il(s,0,s.nodeValue.length).getClientRects():s.nodeType==1?s.getClientRects():[]}function Xr(s,e,n,a){return n?hy(s,e,n,a,-1)||hy(s,e,n,a,1):!1}function Ki(s){for(var e=0;;e++)if(s=s.previousSibling,!s)return e}function tc(s){return s.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName)}function hy(s,e,n,a,l){for(;;){if(s==n&&e==a)return!0;if(e==(l<0?0:ci(s))){if(s.nodeName=="DIV")return!1;let c=s.parentNode;if(!c||c.nodeType!=1)return!1;e=Ki(s)+(l<0?0:1),s=c}else if(s.nodeType==1){if(s=s.childNodes[e+(l<0?-1:0)],s.nodeType==1&&s.contentEditable=="false")return!1;e=l<0?ci(s):0}else return!1}}function ci(s){return s.nodeType==3?s.nodeValue.length:s.childNodes.length}function nc(s,e){let n=e?s.left:s.right;return{left:n,right:n,top:s.top,bottom:s.bottom}}function _w(s){let e=s.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:s.innerWidth,top:0,bottom:s.innerHeight}}function Gb(s,e){let n=e.width/s.offsetWidth,a=e.height/s.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.width-s.offsetWidth)<1)&&(n=1),(a>.995&&a<1.005||!isFinite(a)||Math.abs(e.height-s.offsetHeight)<1)&&(a=1),{scaleX:n,scaleY:a}}function Hw(s,e,n,a,l,c,u,f){let h=s.ownerDocument,p=h.defaultView||window;for(let g=s,b=!1;g&&!b;)if(g.nodeType==1){let v,S=g==h.body,k=1,T=1;if(S)v=_w(p);else{if(/^(fixed|sticky)$/.test(getComputedStyle(g).position)&&(b=!0),g.scrollHeight<=g.clientHeight&&g.scrollWidth<=g.clientWidth){g=g.assignedSlot||g.parentNode;continue}let U=g.getBoundingClientRect();({scaleX:k,scaleY:T}=Gb(g,U)),v={left:U.left,right:U.left+g.clientWidth*k,top:U.top,bottom:U.top+g.clientHeight*T}}let C=0,_=0;if(l=="nearest")e.top<v.top+u?(_=e.top-(v.top+u),n>0&&e.bottom>v.bottom+_&&(_=e.bottom-v.bottom+u)):e.bottom>v.bottom-u&&(_=e.bottom-v.bottom+u,n<0&&e.top-_<v.top&&(_=e.top-(v.top+u)));else{let U=e.bottom-e.top,K=v.bottom-v.top;_=(l=="center"&&U<=K?e.top+U/2-K/2:l=="start"||l=="center"&&n<0?e.top-u:e.bottom-K+u)-v.top}if(a=="nearest"?e.left<v.left+c?(C=e.left-(v.left+c),n>0&&e.right>v.right+C&&(C=e.right-v.right+c)):e.right>v.right-c&&(C=e.right-v.right+c,n<0&&e.left<v.left+C&&(C=e.left-(v.left+c))):C=(a=="center"?e.left+(e.right-e.left)/2-(v.right-v.left)/2:a=="start"==f?e.left-c:e.right-(v.right-v.left)+c)-v.left,C||_)if(S)p.scrollBy(C,_);else{let U=0,K=0;if(_){let $=g.scrollTop;g.scrollTop+=_/T,K=(g.scrollTop-$)*T}if(C){let $=g.scrollLeft;g.scrollLeft+=C/k,U=(g.scrollLeft-$)*k}e={left:e.left-U,top:e.top-K,right:e.right-U,bottom:e.bottom-K},U&&Math.abs(U-C)<1&&(a="nearest"),K&&Math.abs(K-_)<1&&(l="nearest")}if(S)break;(e.top<v.top||e.bottom>v.bottom||e.left<v.left||e.right>v.right)&&(e={left:Math.max(e.left,v.left),right:Math.min(e.right,v.right),top:Math.max(e.top,v.top),bottom:Math.min(e.bottom,v.bottom)}),g=g.assignedSlot||g.parentNode}else if(g.nodeType==11)g=g.host;else break}function $b(s,e=!0){let n=s.ownerDocument,a=null,l=null;for(let c=s.parentNode;c&&!(c==n.body||(!e||a)&&l);)if(c.nodeType==1)!l&&c.scrollHeight>c.clientHeight&&(l=c),e&&!a&&c.scrollWidth>c.clientWidth&&(a=c),c=c.assignedSlot||c.parentNode;else if(c.nodeType==11)c=c.host;else break;return{x:a,y:l}}class qw{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:n,focusNode:a}=e;this.set(n,Math.min(e.anchorOffset,n?ci(n):0),a,Math.min(e.focusOffset,a?ci(a):0))}set(e,n,a,l){this.anchorNode=e,this.anchorOffset=n,this.focusNode=a,this.focusOffset=l}}let ys=null;P.safari&&P.safari_version>=26&&(ys=!1);function Yb(s){if(s.setActive)return s.setActive();if(ys)return s.focus(ys);let e=[];for(let n=s;n&&(e.push(n,n.scrollTop,n.scrollLeft),n!=n.ownerDocument);n=n.parentNode);if(s.focus(ys==null?{get preventScroll(){return ys={preventScroll:!0},!0}}:void 0),!ys){ys=!1;for(let n=0;n<e.length;){let a=e[n++],l=e[n++],c=e[n++];a.scrollTop!=l&&(a.scrollTop=l),a.scrollLeft!=c&&(a.scrollLeft=c)}}}let my;function il(s,e,n=e){let a=my||(my=document.createRange());return a.setEnd(s,n),a.setStart(s,e),a}function Ra(s,e,n,a){let l={key:e,code:e,keyCode:n,which:n,cancelable:!0};a&&({altKey:l.altKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,metaKey:l.metaKey}=a);let c=new KeyboardEvent("keydown",l);c.synthetic=!0,s.dispatchEvent(c);let u=new KeyboardEvent("keyup",l);return u.synthetic=!0,s.dispatchEvent(u),c.defaultPrevented||u.defaultPrevented}function Uw(s){for(;s;){if(s&&(s.nodeType==9||s.nodeType==11&&s.host))return s;s=s.assignedSlot||s.parentNode}return null}function Vw(s,e){let n=e.focusNode,a=e.focusOffset;if(!n||e.anchorNode!=n||e.anchorOffset!=a)return!1;for(a=Math.min(a,ci(n));;)if(a){if(n.nodeType!=1)return!1;let l=n.childNodes[a-1];l.contentEditable=="false"?a--:(n=l,a=ci(n))}else{if(n==s)return!0;a=Ki(n),n=n.parentNode}}function Kb(s){return s instanceof Window?s.pageYOffset>Math.max(0,s.document.documentElement.scrollHeight-s.innerHeight-4):s.scrollTop>Math.max(1,s.scrollHeight-s.clientHeight-4)}function Wb(s,e){for(let n=s,a=e;;){if(n.nodeType==3&&a>0)return{node:n,offset:a};if(n.nodeType==1&&a>0){if(n.contentEditable=="false")return null;n=n.childNodes[a-1],a=ci(n)}else if(n.parentNode&&!tc(n))a=Ki(n),n=n.parentNode;else return null}}function Xb(s,e){for(let n=s,a=e;;){if(n.nodeType==3&&a<n.nodeValue.length)return{node:n,offset:a};if(n.nodeType==1&&a<n.childNodes.length){if(n.contentEditable=="false")return null;n=n.childNodes[a],a=0}else if(n.parentNode&&!tc(n))a=Ki(n)+1,n=n.parentNode;else return null}}class Tn{constructor(e,n,a=!0){this.node=e,this.offset=n,this.precise=a}static before(e,n){return new Tn(e.parentNode,Ki(e),n)}static after(e,n){return new Tn(e.parentNode,Ki(e)+1,n)}}var lt=(function(s){return s[s.LTR=0]="LTR",s[s.RTL=1]="RTL",s})(lt||(lt={}));const Es=lt.LTR,Th=lt.RTL;function Qb(s){let e=[];for(let n=0;n<s.length;n++)e.push(1<<+s[n]);return e}const Gw=Qb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),$w=Qb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Xd=Object.create(null),Nn=[];for(let s of["()","[]","{}"]){let e=s.charCodeAt(0),n=s.charCodeAt(1);Xd[e]=n,Xd[n]=-e}function Fb(s){return s<=247?Gw[s]:1424<=s&&s<=1524?2:1536<=s&&s<=1785?$w[s-1536]:1774<=s&&s<=2220?4:8192<=s&&s<=8204?256:64336<=s&&s<=65023?4:1}const Yw=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class Ln{get dir(){return this.level%2?Th:Es}constructor(e,n,a){this.from=e,this.to=n,this.level=a}side(e,n){return this.dir==n==e?this.to:this.from}forward(e,n){return e==(this.dir==n)}static find(e,n,a,l){let c=-1;for(let u=0;u<e.length;u++){let f=e[u];if(f.from<=n&&f.to>=n){if(f.level==a)return u;(c<0||(l!=0?l<0?f.from<n:f.to>n:e[c].level>f.level))&&(c=u)}}if(c<0)throw new RangeError("Index out of range");return c}}function Zb(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++){let a=s[n],l=e[n];if(a.from!=l.from||a.to!=l.to||a.direction!=l.direction||!Zb(a.inner,l.inner))return!1}return!0}const Ye=[];function Kw(s,e,n,a,l){for(let c=0;c<=a.length;c++){let u=c?a[c-1].to:e,f=c<a.length?a[c].from:n,h=c?256:l;for(let p=u,g=h,b=h;p<f;p++){let v=Fb(s.charCodeAt(p));v==512?v=g:v==8&&b==4&&(v=16),Ye[p]=v==4?2:v,v&7&&(b=v),g=v}for(let p=u,g=h,b=h;p<f;p++){let v=Ye[p];if(v==128)p<f-1&&g==Ye[p+1]&&g&24?v=Ye[p]=g:Ye[p]=256;else if(v==64){let S=p+1;for(;S<f&&Ye[S]==64;)S++;let k=p&&g==8||S<n&&Ye[S]==8?b==1?1:8:256;for(let T=p;T<S;T++)Ye[T]=k;p=S-1}else v==8&&b==1&&(Ye[p]=1);g=v,v&7&&(b=v)}}}function Ww(s,e,n,a,l){let c=l==1?2:1;for(let u=0,f=0,h=0;u<=a.length;u++){let p=u?a[u-1].to:e,g=u<a.length?a[u].from:n;for(let b=p,v,S,k;b<g;b++)if(S=Xd[v=s.charCodeAt(b)])if(S<0){for(let T=f-3;T>=0;T-=3)if(Nn[T+1]==-S){let C=Nn[T+2],_=C&2?l:C&4?C&1?c:l:0;_&&(Ye[b]=Ye[Nn[T]]=_),f=T;break}}else{if(Nn.length==189)break;Nn[f++]=b,Nn[f++]=v,Nn[f++]=h}else if((k=Ye[b])==2||k==1){let T=k==l;h=T?0:1;for(let C=f-3;C>=0;C-=3){let _=Nn[C+2];if(_&2)break;if(T)Nn[C+2]|=2;else{if(_&4)break;Nn[C+2]|=4}}}}}function Xw(s,e,n,a){for(let l=0,c=a;l<=n.length;l++){let u=l?n[l-1].to:s,f=l<n.length?n[l].from:e;for(let h=u;h<f;){let p=Ye[h];if(p==256){let g=h+1;for(;;)if(g==f){if(l==n.length)break;g=n[l++].to,f=l<n.length?n[l].from:e}else if(Ye[g]==256)g++;else break;let b=c==1,v=(g<e?Ye[g]:a)==1,S=b==v?b?1:2:a;for(let k=g,T=l,C=T?n[T-1].to:s;k>h;)k==C&&(k=n[--T].from,C=T?n[T-1].to:s),Ye[--k]=S;h=g}else c=p,h++}}}function Qd(s,e,n,a,l,c,u){let f=a%2?2:1;if(a%2==l%2)for(let h=e,p=0;h<n;){let g=!0,b=!1;if(p==c.length||h<c[p].from){let T=Ye[h];T!=f&&(g=!1,b=T==16)}let v=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p<c.length&&k==c[p].from){if(b)break e;let T=c[p];if(!g)for(let C=T.to,_=p+1;;){if(C==n)break e;if(_<c.length&&c[_].from==C)C=c[_++].to;else{if(Ye[C]==f)break e;break}}if(p++,v)v.push(T);else{T.from>h&&u.push(new Ln(h,T.from,S));let C=T.direction==Es!=!(S%2);Fd(s,C?a+1:a,l,T.inner,T.from,T.to,u),h=T.to}k=T.to}else{if(k==n||(g?Ye[k]!=f:Ye[k]==f))break;k++}v?Qd(s,h,k,a+1,l,v,u):h<k&&u.push(new Ln(h,k,S)),h=k}else for(let h=n,p=c.length;h>e;){let g=!0,b=!1;if(!p||h>c[p-1].to){let T=Ye[h-1];T!=f&&(g=!1,b=T==16)}let v=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p&&k==c[p-1].to){if(b)break e;let T=c[--p];if(!g)for(let C=T.from,_=p;;){if(C==e)break e;if(_&&c[_-1].to==C)C=c[--_].from;else{if(Ye[C-1]==f)break e;break}}if(v)v.push(T);else{T.to<h&&u.push(new Ln(T.to,h,S));let C=T.direction==Es!=!(S%2);Fd(s,C?a+1:a,l,T.inner,T.from,T.to,u),h=T.from}k=T.from}else{if(k==e||(g?Ye[k-1]!=f:Ye[k-1]==f))break;k--}v?Qd(s,k,h,a+1,l,v,u):k<h&&u.push(new Ln(k,h,S)),h=k}}function Fd(s,e,n,a,l,c,u){let f=e%2?2:1;Kw(s,l,c,a,f),Ww(s,l,c,a,f),Xw(l,c,a,f),Qd(s,l,c,e,n,a,u)}function Qw(s,e,n){if(!s)return[new Ln(0,0,e==Th?1:0)];if(e==Es&&!n.length&&!Yw.test(s))return Pb(s.length);if(n.length)for(;s.length>Ye.length;)Ye[Ye.length]=256;let a=[],l=e==Es?0:1;return Fd(s,l,l,n,0,s.length,a),a}function Pb(s){return[new Ln(0,s,0)]}let Jb="";function Fw(s,e,n,a,l){var c;let u=a.head-s.from,f=Ln.find(e,u,(c=a.bidiLevel)!==null&&c!==void 0?c:-1,a.assoc),h=e[f],p=h.side(l,n);if(u==p){let v=f+=l?1:-1;if(v<0||v>=e.length)return null;h=e[f=v],u=h.side(!l,n),p=h.side(l,n)}let g=Bn(s.text,u,h.forward(l,n));(g<h.from||g>h.to)&&(g=p),Jb=s.text.slice(Math.min(u,g),Math.max(u,g));let b=f==(l?e.length-1:0)?null:e[f+(l?1:-1)];return b&&g==p&&b.level+(l?0:1)<h.level?J.cursor(b.side(!l,n)+s.from,b.forward(l,n)?1:-1,b.level):J.cursor(g+s.from,h.forward(l,n)?-1:1,h.level)}function Zw(s,e,n){for(let a=e;a<n;a++){let l=Fb(s.charCodeAt(a));if(l==1)return Es;if(l==2||l==4)return Th}return Es}const Ib=ce.define(),ev=ce.define(),tv=ce.define(),nv=ce.define(),Zd=ce.define(),iv=ce.define(),sv=ce.define(),Ah=ce.define(),Eh=ce.define(),av=ce.define({combine:s=>s.some(e=>e)}),rv=ce.define({combine:s=>s.some(e=>e)}),lv=ce.define();class Ca{constructor(e,n,a,l,c,u=!1){this.range=e,this.y=n,this.x=a,this.yMargin=l,this.xMargin=c,this.isSnapshot=u}map(e){return e.empty?this:new Ca(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new Ca(J.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Do=mt.define({map:(s,e)=>s.map(e)}),ov=mt.define();function ri(s,e,n){let a=s.facet(nv);a.length?a[0](e):window.onerror&&window.onerror(String(e),n,void 0,void 0,e)||(n?console.error(n+":",e):console.error(e))}const si=ce.define({combine:s=>s.length?s[0]:!0});let Pw=0;const ka=ce.define({combine(s){return s.filter((e,n)=>{for(let a=0;a<n;a++)if(s[a].plugin==e.plugin)return!1;return!0})}});class Ms{constructor(e,n,a,l,c){this.id=e,this.create=n,this.domEventHandlers=a,this.domEventObservers=l,this.baseExtensions=c(this),this.extension=this.baseExtensions.concat(ka.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(ka.of({plugin:this,arg:e}))}static define(e,n){const{eventHandlers:a,eventObservers:l,provide:c,decorations:u}=n||{};return new Ms(Pw++,e,a,l,f=>{let h=[];return u&&h.push(xc.of(p=>{let g=p.plugin(f);return g?u(g):Nt.none})),c&&h.push(c(f)),h})}static fromClass(e,n){return Ms.define((a,l)=>new e(a,l),n)}}class nd{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let n=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(n)}catch(a){if(ri(n.state,a,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(n){ri(e.state,n,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var n;if(!((n=this.value)===null||n===void 0)&&n.destroy)try{this.value.destroy()}catch(a){ri(e.state,a,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const cv=ce.define(),Mh=ce.define(),xc=ce.define(),uv=ce.define(),Rh=ce.define(),cl=ce.define(),fv=ce.define();function py(s,e){let n=s.state.facet(fv);if(!n.length)return n;let a=n.map(c=>c instanceof Function?c(s):c),l=[];return Me.spans(a,e.from,e.to,{point(){},span(c,u,f,h){let p=c-e.from,g=u-e.from,b=l;for(let v=f.length-1;v>=0;v--,h--){let S=f[v].spec.bidiIsolate,k;if(S==null&&(S=Zw(e.text,p,g)),h>0&&b.length&&(k=b[b.length-1]).to==p&&k.direction==S)k.to=g,b=k.inner;else{let T={from:p,to:g,direction:S,inner:[]};b.push(T),b=T.inner}}}}),l}const dv=ce.define();function hv(s){let e=0,n=0,a=0,l=0;for(let c of s.state.facet(dv)){let u=c(s);u&&(u.left!=null&&(e=Math.max(e,u.left)),u.right!=null&&(n=Math.max(n,u.right)),u.top!=null&&(a=Math.max(a,u.top)),u.bottom!=null&&(l=Math.max(l,u.bottom)))}return{left:e,right:n,top:a,bottom:l}}const qr=ce.define();class vn{constructor(e,n,a,l){this.fromA=e,this.toA=n,this.fromB=a,this.toB=l}join(e){return new vn(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let n=e.length,a=this;for(;n>0;n--){let l=e[n-1];if(!(l.fromA>a.toA)){if(l.toA<a.fromA)break;a=a.join(l),e.splice(n-1,1)}}return e.splice(n,0,a),e}static extendWithRanges(e,n){if(n.length==0)return e;let a=[];for(let l=0,c=0,u=0;;){let f=l<e.length?e[l].fromB:1e9,h=c<n.length?n[c]:1e9,p=Math.min(f,h);if(p==1e9)break;let g=p+u,b=p,v=g;for(;;)if(c<n.length&&n[c]<=b){let S=n[c+1];c+=2,b=Math.max(b,S);for(let k=l;k<e.length&&e[k].fromB<=b;k++)u=e[k].toA-e[k].toB;v=Math.max(v,S+u)}else if(l<e.length&&e[l].fromB<=b){let S=e[l++];b=Math.max(b,S.toB),v=Math.max(v,S.toA),u=S.toA-S.toB}else break;a.push(new vn(g,v,p,b))}return a}}class ic{constructor(e,n,a){this.view=e,this.state=n,this.transactions=a,this.flags=0,this.startState=e.state,this.changes=wt.empty(this.startState.doc.length);for(let c of a)this.changes=this.changes.compose(c.changes);let l=[];this.changes.iterChangedRanges((c,u,f,h)=>l.push(new vn(c,u,f,h))),this.changedRanges=l}static create(e,n,a){return new ic(e,n,a)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}const Jw=[];class it{constructor(e,n,a=0){this.dom=e,this.length=n,this.flags=a,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return Jw}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let n=this.domAttrs;n&&zw(this.dom,n)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,n=this.posAtStart){let a=n;for(let l of this.children){if(l==e)return a;a+=l.length+l.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,n){return null}domPosFor(e,n){let a=Ki(this.dom),l=this.length?e>0:n>0;return new Tn(this.parent.dom,a+(l?1:0),e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof wc)return e;return null}static get(e){return e.cmTile}}class Sc extends it{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let n=this.dom,a=null,l,c=e?.node==n?e:null,u=0;for(let f of this.children){if(f.sync(e),u+=f.length+f.breakAfter,l=a?a.nextSibling:n.firstChild,c&&l!=f.dom&&(c.written=!0),f.dom.parentNode==n)for(;l&&l!=f.dom;)l=gy(l);else n.insertBefore(f.dom,l);a=f.dom}for(l=a?a.nextSibling:n.firstChild,c&&l&&(c.written=!0);l;)l=gy(l);this.length=u}}function gy(s){let e=s.nextSibling;return s.parentNode.removeChild(s),e}class wc extends Sc{constructor(e,n){super(n),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let n=it.get(e);if(n&&this.owns(n))return n;e=e.parentNode}}blockTiles(e){for(let n=[],a=this,l=0,c=0;;)if(l==a.children.length){if(!n.length)return;a=a.parent,a.breakAfter&&c++,l=n.pop()}else{let u=a.children[l++];if(u instanceof oi)n.push(l),a=u,l=0;else{let f=c+u.length,h=e(u,c);if(h!==void 0)return h;c=f+u.breakAfter}}}resolveBlock(e,n){let a,l=-1,c,u=-1;if(this.blockTiles((f,h)=>{let p=h+f.length;if(e>=h&&e<=p){if(f.isWidget()&&n>=-1&&n<=1){if(f.flags&32)return!0;f.flags&16&&(a=void 0)}(h<e||e==p&&(n<-1?f.length:f.covers(1)))&&(!a||!f.isWidget()&&a.isWidget())&&(a=f,l=e-h),(p>e||e==h&&(n>1?f.length:f.covers(-1)))&&(!c||!f.isWidget()&&c.isWidget())&&(c=f,u=e-h)}}),!a&&!c)throw new Error("No tile at position "+e);return a&&n<0||!c?{tile:a,offset:l}:{tile:c,offset:u}}}class oi extends Sc{constructor(e,n){super(e),this.wrapper=n}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(e,n){let a=new oi(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class Da extends Sc{constructor(e,n){super(e),this.attrs=n}isLine(){return!0}static start(e,n,a){let l=new Da(n||document.createElement("div"),e);return(!n||!a)&&(l.flags|=4),l}get domAttrs(){return this.attrs}resolveInline(e,n,a){let l=null,c=-1,u=null,f=-1;function h(g,b){for(let v=0,S=0;v<g.children.length&&S<=b;v++){let k=g.children[v],T=S+k.length;T>=b&&(k.isComposite()?h(k,b-S):(!u||u.isHidden&&(n>0||a&&ek(u,k)))&&(T>b||k.flags&32)?(u=k,f=b-S):(S<b||k.flags&16&&!k.isHidden)&&(l=k,c=b-S)),S=T}}h(this,e);let p=(n<0?l:u)||l||u;return p?{tile:p,offset:p==l?c:f}:null}coordsIn(e,n){let a=this.resolveInline(e,n,!0);return a?a.tile.coordsIn(Math.max(0,a.offset),n):Iw(this)}domIn(e,n){let a=this.resolveInline(e,n);if(a){let{tile:l,offset:c}=a;if(this.dom.contains(l.dom))return l.isText()?new Tn(l.dom,Math.min(l.dom.nodeValue.length,c)):l.domPosFor(c,l.flags&16?1:l.flags&32?-1:n);let u=a.tile.parent,f=!1;for(let h of u.children){if(f)return new Tn(h.dom,0);h==a.tile&&(f=!0)}}return new Tn(this.dom,0)}}function Iw(s){let e=s.dom.lastChild;if(!e)return s.dom.getBoundingClientRect();let n=Wo(e);return n[n.length-1]||null}function ek(s,e){let n=s.coordsIn(0,1),a=e.coordsIn(0,1);return n&&a&&a.top<n.bottom}class Ft extends Sc{constructor(e,n){super(e),this.mark=n}get domAttrs(){return this.mark.attrs}static of(e,n){let a=new Ft(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class Ss extends it{constructor(e,n){super(e,n.length),this.text=n}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,n){let a=this.dom.nodeValue.length;e>a&&(e=a);let l=e,c=e,u=0;e==0&&n<0||e==a&&n>=0?P.chrome||P.gecko||(e?(l--,u=1):c<a&&(c++,u=-1)):n<0?l--:c<a&&c++;let f=il(this.dom,l,c).getClientRects();if(!f.length)return null;let h=f[(u?u<0:n>=0)?0:f.length-1];return P.safari&&!u&&h.width==0&&(h=Array.prototype.find.call(f,p=>p.width)||h),u?nc(h,u<0):h||null}static of(e,n){let a=new Ss(n||document.createTextNode(e),e);return n||(a.flags|=2),a}}class Rs extends it{constructor(e,n,a,l){super(e,n,l),this.widget=a}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,n){return this.coordsInWidget(e,n,!1)}coordsInWidget(e,n,a){let l=this.widget.coordsAt(this.dom,e,n);if(l)return l;if(a)return nc(this.dom.getBoundingClientRect(),this.length?e==0:n<=0);{let c=this.dom.getClientRects(),u=null;if(!c.length)return null;let f=this.flags&16?!0:this.flags&32?!1:e>0;for(let h=f?c.length-1:0;u=c[h],!(e>0?h==0:h==c.length-1||u.top<u.bottom);h+=f?-1:1);return nc(u,!f)}}get overrideDOMText(){if(!this.length)return je.empty;let{root:e}=this;if(!e)return je.empty;let n=this.posAtStart;return e.view.state.doc.slice(n,n+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(e,n,a,l,c){return c||(c=e.toDOM(n),e.editable||(c.contentEditable="false")),new Rs(c,a,e,l)}}class sc extends it{constructor(e){let n=document.createElement("img");n.className="cm-widgetBuffer",n.setAttribute("aria-hidden","true"),super(n,0,e)}get isHidden(){return!0}get overrideDOMText(){return je.empty}coordsIn(e){return this.dom.getBoundingClientRect()}}class tk{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,n,a){let{tile:l,index:c,beforeBreak:u,parents:f}=this;for(;e||n>0;)if(l.isComposite())if(u){if(!e)break;a&&a.break(),e--,u=!1}else if(c==l.children.length){if(!e&&!f.length)break;a&&a.leave(l),u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++}else{let h=l.children[c],p=h.breakAfter;(n>0?h.length<=e:h.length<e)&&(!a||a.skip(h,0,h.length)!==!1||!h.isComposite)?(u=!!p,c++,e-=h.length):(f.push({tile:l,index:c}),l=h,c=0,a&&h.isComposite()&&a.enter(h))}else if(c==l.length)u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++;else if(e){let h=Math.min(e,l.length-c);a&&a.skip(l,c,c+h),e-=h,c+=h}else break;return this.tile=l,this.index=c,this.beforeBreak=u,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class nk{constructor(e,n,a,l){this.from=e,this.to=n,this.wrapper=a,this.rank=l}}class ik{constructor(e,n,a){this.cache=e,this.root=n,this.blockWrappers=a,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,n,a,l){var c;this.flushBuffer();let u=this.ensureMarks(n,a),f=u.lastChild;if(f&&f.isText()&&!(f.flags&8)&&f.length+e.length<512){this.cache.reused.set(f,2);let h=u.children[u.children.length-1]=new Ss(f.dom,f.text+e);h.parent=u}else u.append(l||Ss.of(e,(c=this.cache.find(Ss))===null||c===void 0?void 0:c.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,n){let a=this.curLine;a.dom!=n.line.dom&&(a.setDOM(this.cache.reused.has(n.line)?id(n.line.dom):n.line.dom),this.cache.reused.set(n.line,2));let l=a;for(let f=n.marks.length-1;f>=0;f--){let h=n.marks[f],p=l.lastChild;if(p instanceof Ft&&p.mark.eq(h.mark))p.dom!=h.dom&&p.setDOM(id(h.dom)),l=p;else{if(this.cache.reused.get(h)){let b=it.get(h.dom);b&&b.setDOM(id(h.dom))}let g=Ft.of(h.mark,h.dom);l.append(g),l=g}this.cache.reused.set(h,2)}let c=it.get(e.text);c&&this.cache.reused.set(c,2);let u=new Ss(e.text,e.text.nodeValue);u.flags|=8,this.pos=e.range.toB,l.append(u)}addInlineWidget(e,n,a){let l=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);l||this.flushBuffer();let c=this.ensureMarks(n,a);!l&&!(e.flags&16)&&c.append(this.getBuffer(1)),c.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,n,a){this.flushBuffer(),this.ensureMarks(n,a).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let n=this.afterWidget||this.lastBlock;n.length+=e,this.pos+=e}addLineStart(e,n){var a;e||(e=mv);let l=Da.start(e,n||((a=this.cache.find(Da))===null||a===void 0?void 0:a.dom),!!n);this.getBlockPos().append(this.lastBlock=this.curLine=l)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,n){var a;let l=this.curLine;for(let c=e.length-1;c>=0;c--){let u=e[c],f;if(n>0&&(f=l.lastChild)&&f instanceof Ft&&f.mark.eq(u))l=f,n--;else{let h=Ft.of(u,(a=this.cache.find(Ft,p=>p.mark.eq(u)))===null||a===void 0?void 0:a.dom);l.append(h),l=h,n=0}}return l}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!yy(this.curLine,!1)||e.dom.nodeName!="BR"&&e.isWidget()&&!(P.ios&&yy(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(sd,0,32)||new Rs(sd.toDOM(),0,sd,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let n=e.rank*102+e.value.rank,a=new nk(e.from,e.to,e.value,n),l=this.wrappers.length;for(;l>0&&(this.wrappers[l-1].rank-a.rank||this.wrappers[l-1].to-a.to)<0;)l--;this.wrappers.splice(l,0,a)}this.wrapperPos=this.pos}getBlockPos(){var e;this.updateBlockWrappers();let n=this.root;for(let a of this.wrappers){let l=n.lastChild;if(a.from<this.pos&&l instanceof oi&&l.wrapper.eq(a.wrapper))n=l;else{let c=oi.of(a.wrapper,(e=this.cache.find(oi,u=>u.wrapper.eq(a.wrapper)))===null||e===void 0?void 0:e.dom);n.append(c),n=c}}return n}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let n=2|(e<0?16:32),a=this.cache.find(sc,void 0,1);return a&&(a.flags=n),a||new sc(n)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class sk{constructor(e){this.skipCount=0,this.text="",this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:l,lineBreak:c,done:u}=this.cursor.next(this.skipCount);if(this.skipCount=0,u)throw new Error("Ran out of text content when drawing inline views");this.text=l;let f=this.textOff=Math.min(e,l.length);return c?null:l.slice(0,f)}let n=Math.min(this.text.length,this.textOff+e),a=this.text.slice(this.textOff,n);return this.textOff=n,a}}const ac=[Rs,Da,Ss,Ft,sc,oi,wc];for(let s=0;s<ac.length;s++)ac[s].bucket=s;class ak{constructor(e){this.view=e,this.buckets=ac.map(()=>[]),this.index=ac.map(()=>0),this.reused=new Map}add(e){let n=e.constructor.bucket,a=this.buckets[n];a.length<6?a.push(e):a[this.index[n]=(this.index[n]+1)%6]=e}find(e,n,a=2){let l=e.bucket,c=this.buckets[l],u=this.index[l];for(let f=c.length-1;f>=0;f--){let h=(f+u)%c.length,p=c[h];if((!n||n(p))&&!this.reused.has(p))return c.splice(h,1),h<u&&this.index[l]--,this.reused.set(p,a),p}return null}findWidget(e,n,a){let l=this.buckets[0];if(l.length)for(let c=0,u=0;;c++){if(c==l.length){if(u)return null;u=1,c=0}let f=l[c];if(!this.reused.has(f)&&(u==0?f.widget.compare(e):f.widget.constructor==e.constructor&&e.updateDOM(f.dom,this.view,f.widget)))return l.splice(c,1),c<this.index[0]&&this.index[0]--,f.widget==e&&f.length==n&&(f.flags&497)==a?(this.reused.set(f,1),f):(this.reused.set(f,2),new Rs(f.dom,n,e,f.flags&-498|a))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,n=2){if(!this.reused.has(e))return this.reused.set(e,n),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}}class rk{constructor(e,n,a,l,c){this.view=e,this.decorations=l,this.disallowBlockEffectsFor=c,this.openWidget=!1,this.openMarks=0,this.cache=new ak(e),this.text=new sk(e.state.doc),this.builder=new ik(this.cache,new wc(e,e.contentDOM),Me.iter(a)),this.cache.reused.set(n,2),this.old=new tk(n),this.reuseWalker={skip:(u,f,h)=>{if(this.cache.add(u),u.isComposite())return!1},enter:u=>this.cache.add(u),leave:()=>{},break:()=>{}}}run(e,n){let a=n&&this.getCompositionContext(n.text);for(let l=0,c=0,u=0;;){let f=u<e.length?e[u++]:null,h=f?f.fromA:this.old.root.length;if(h>l){let p=h-l;this.preserve(p,!u,!f),l=h,c+=p}if(!f)break;n&&f.fromA<=n.range.fromA&&f.toA>=n.range.toA?(this.forward(f.fromA,n.range.fromA,n.range.fromA<n.range.toA?1:-1),this.emit(c,n.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(n,a),this.text.skip(n.range.toB-n.range.fromB),this.forward(n.range.fromA,f.toA),this.emit(n.range.toB,f.toB)):(this.forward(f.fromA,f.toA),this.emit(c,f.toB)),c=f.toB,l=f.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,n,a){let l=ck(this.old),c=this.openMarks;this.old.advance(e,a?1:-1,{skip:(u,f,h)=>{if(u.isWidget())if(this.openWidget)this.builder.continueWidget(h-f);else{let p=h>0||f<u.length?Rs.of(u.widget,this.view,h-f,u.flags&496,this.cache.maybeReuse(u)):this.cache.reuse(u);p.flags&256?(p.flags&=-2,this.builder.addBlockWidget(p)):(this.builder.ensureLine(null),this.builder.addInlineWidget(p,l,c),c=l.length)}else if(u.isText())this.builder.ensureLine(null),!f&&h==u.length&&!this.cache.reused.has(u)?this.builder.addText(u.text,l,c,this.cache.reuse(u)):(this.cache.add(u),this.builder.addText(u.text.slice(f,h),l,c)),c=l.length;else if(u.isLine())u.flags&=-2,this.cache.reused.set(u,1),this.builder.addLine(u);else if(u instanceof sc)this.cache.add(u);else if(u instanceof Ft)this.builder.ensureLine(null),this.builder.addMark(u,l,c),this.cache.reused.set(u,1),c=l.length;else return!1;this.openWidget=!1},enter:u=>{u.isLine()?this.builder.addLineStart(u.attrs,this.cache.maybeReuse(u)):(this.cache.add(u),u instanceof Ft&&l.unshift(u.mark)),this.openWidget=!1},leave:u=>{u.isLine()?l.length&&(l.length=c=0):u instanceof Ft&&(l.shift(),c=Math.min(c,l.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,n){let a=null,l=this.builder,c=0,u=Me.spans(this.decorations,e,n,{point:(f,h,p,g,b,v)=>{if(p instanceof As){if(this.disallowBlockEffectsFor[v]){if(p.block)throw new RangeError("Block decorations may not be specified via plugins");if(h>this.view.state.doc.lineAt(f).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(c=g.length,b>g.length)l.continueWidget(h-f);else{let S=p.widget||(p.block?ja.block:ja.inline),k=lk(p),T=this.cache.findWidget(S,h-f,k)||Rs.of(S,this.view,h-f,k);p.block?(p.startSide>0&&l.addLineStartIfNotCovered(a),l.addBlockWidget(T)):(l.ensureLine(a),l.addInlineWidget(T,g,b))}a=null}else a=ok(a,p);h>f&&this.text.skip(h-f)},span:(f,h,p,g)=>{for(let b=f;b<h;){let v=this.text.next(Math.min(512,h-b));v==null?(l.addLineStartIfNotCovered(a),l.addBreak(),b++):(l.ensureLine(a),l.addText(v,p,b==f?g:p.length),b+=v.length),a=null}}});l.addLineStartIfNotCovered(a),this.openWidget=u>c,this.openMarks=u}forward(e,n,a=1){n-e<=10?this.old.advance(n-e,a,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(n-e-10,-1),this.old.advance(5,a,this.reuseWalker))}getCompositionContext(e){let n=[],a=null;for(let l=e.parentNode;;l=l.parentNode){let c=it.get(l);if(l==this.view.contentDOM)break;c instanceof Ft?n.push(c):c?.isLine()?a=c:c instanceof oi||(l.nodeName=="DIV"&&!a&&l!=this.view.contentDOM?a=new Da(l,mv):a||n.push(Ft.of(new ll({tagName:l.nodeName.toLowerCase(),attributes:Bw(l)}),l)))}return{line:a,marks:n}}}function yy(s,e){let n=a=>{for(let l of a.children)if((e?l.isText():l.length)||n(l))return!0;return!1};return n(s)}function lk(s){let e=s.isReplace?(s.startSide<0?64:0)|(s.endSide>0?128:0):s.startSide>0?32:16;return s.block&&(e|=256),e}const mv={class:"cm-line"};function ok(s,e){let n=e.spec.attributes,a=e.spec.class;return!n&&!a||(s||(s={class:"cm-line"}),n&&wh(n,s),a&&(s.class+=" "+a)),s}function ck(s){let e=[];for(let n=s.parents.length;n>1;n--){let a=n==s.parents.length?s.tile:s.parents[n].tile;a instanceof Ft&&e.push(a.mark)}return e}function id(s){let e=it.get(s);return e&&e.setDOM(s.cloneNode()),s}class ja extends vc{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}ja.inline=new ja("span");ja.block=new ja("div");const sd=new class extends vc{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}};class by{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=Nt.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new wc(e,e.contentDOM),this.updateInner([new vn(0,0,0,e.state.doc.length)],null)}update(e){var n;let a=e.changedRanges;this.minWidth>0&&a.length&&(a.every(({fromA:g,toA:b})=>b<this.minWidthFrom||g>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let l=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((n=this.domChanged)===null||n===void 0)&&n.newSel?l=this.domChanged.newSel.head:!bk(e.changes,this.hasComposition)&&!e.selectionSet&&(l=e.state.selection.main.head));let c=l>-1?fk(this.view,e.changes,l):null;if(this.domChanged=null,this.hasComposition){let{from:g,to:b}=this.hasComposition;a=new vn(g,b,e.changes.mapPos(g,-1),e.changes.mapPos(b,1)).addToSet(a.slice())}this.hasComposition=c?{from:c.range.fromB,to:c.range.toB}:null,(P.ie||P.chrome)&&!c&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let u=this.decorations,f=this.blockWrappers;this.updateDeco();let h=mk(u,this.decorations,e.changes);h.length&&(a=vn.extendWithRanges(a,h));let p=gk(f,this.blockWrappers,e.changes);return p.length&&(a=vn.extendWithRanges(a,p)),c&&!a.some(g=>g.fromA<=c.range.fromA&&g.toA>=c.range.toA)&&(a=c.range.addToSet(a.slice())),this.tile.flags&2&&a.length==0?!1:(this.updateInner(a,c),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,n){this.view.viewState.mustMeasureContent=!0;let{observer:a}=this.view;a.ignore(()=>{if(n||e.length){let u=this.tile,f=new rk(this.view,u,this.blockWrappers,this.decorations,this.dynamicDecorationMap);n&&it.get(n.text)&&f.cache.reused.set(it.get(n.text),2),this.tile=f.run(e,n),Pd(u,f.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let c=P.chrome||P.ios?{node:a.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(c),c&&(c.written||a.selectionRange.focusNode!=c.node||!this.tile.dom.contains(c.node))&&(this.forceSelection=!0),this.tile.dom.style.height=""});let l=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let c of this.tile.children)c.isWidget()&&c.widget instanceof ad&&l.push(c.dom);a.updateGaps(l)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let n of e.transactions)for(let a of n.effects)a.is(ov)&&(this.editContextFormatting=a.value)}updateSelection(e=!1,n=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:a}=this.tile,l=this.view.root.activeElement,c=l==a,u=!c&&!(this.view.state.facet(si)||a.tabIndex>-1)&&Wr(a,this.view.observer.selectionRange)&&!(l&&a.contains(l));if(!(c||n||u))return;let f=this.forceSelection;this.forceSelection=!1;let h=this.view.state.selection.main,p,g;if(h.empty?g=p=this.inlineDOMNearPos(h.anchor,h.assoc||1):(g=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),p=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),P.gecko&&h.empty&&!this.hasComposition&&uk(p)){let v=document.createTextNode("");this.view.observer.ignore(()=>p.node.insertBefore(v,p.node.childNodes[p.offset]||null)),p=g=new Tn(v,0),f=!0}let b=this.view.observer.selectionRange;(f||!b.focusNode||(!Xr(p.node,p.offset,b.anchorNode,b.anchorOffset)||!Xr(g.node,g.offset,b.focusNode,b.focusOffset))&&!this.suppressWidgetCursorChange(b,h))&&(this.view.observer.ignore(()=>{P.android&&P.chrome&&a.contains(b.focusNode)&&yk(b.focusNode,a)&&(a.blur(),a.focus({preventScroll:!0}));let v=nl(this.view.root);if(v)if(h.empty){if(P.gecko){let S=dk(p.node,p.offset);if(S&&S!=3){let k=(S==1?Wb:Xb)(p.node,p.offset);k&&(p=new Tn(k.node,k.offset))}}v.collapse(p.node,p.offset),h.bidiLevel!=null&&v.caretBidiLevel!==void 0&&(v.caretBidiLevel=h.bidiLevel)}else if(v.extend){v.collapse(p.node,p.offset);try{v.extend(g.node,g.offset)}catch{}}else{let S=document.createRange();h.anchor>h.head&&([p,g]=[g,p]),S.setEnd(g.node,g.offset),S.setStart(p.node,p.offset),v.removeAllRanges(),v.addRange(S)}u&&this.view.root.activeElement==a&&(a.blur(),l&&l.focus())}),this.view.observer.setSelectionRange(p,g)),this.impreciseAnchor=p.precise?null:new Tn(b.anchorNode,b.anchorOffset),this.impreciseHead=g.precise?null:new Tn(b.focusNode,b.focusOffset)}suppressWidgetCursorChange(e,n){return this.hasComposition&&n.empty&&Xr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==n.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,n=e.state.selection.main,a=nl(e.root),{anchorNode:l,anchorOffset:c}=e.observer.selectionRange;if(!a||!n.empty||!n.assoc||!a.modify)return;let u=this.lineAt(n.head,n.assoc);if(!u)return;let f=u.posAtStart;if(n.head==f||n.head==f+u.length)return;let h=this.coordsAt(n.head,-1),p=this.coordsAt(n.head,1);if(!h||!p||h.bottom>p.top)return;let g=this.domAtPos(n.head+n.assoc,n.assoc);a.collapse(g.node,g.offset),a.modify("move",n.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let b=e.observer.selectionRange;e.docView.posFromDOM(b.anchorNode,b.anchorOffset)!=n.from&&a.collapse(l,c)}posFromDOM(e,n){let a=this.tile.nearest(e);if(!a)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let l=a.posAtStart;if(a.isComposite()){let c;if(e==a.dom)c=a.dom.childNodes[n];else{let u=ci(e)==0?0:n==0?-1:1;for(;;){let f=e.parentNode;if(f==a.dom)break;u==0&&f.firstChild!=f.lastChild&&(e==f.firstChild?u=-1:u=1),e=f}u<0?c=e:c=e.nextSibling}if(c==a.dom.firstChild)return l;for(;c&&!it.get(c);)c=c.nextSibling;if(!c)return l+a.length;for(let u=0,f=l;;u++){let h=a.children[u];if(h.dom==c)return f;f+=h.length+h.breakAfter}}else return a.isText()?e==a.dom?l+n:l+(n?a.length:0):l}domAtPos(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.domPosFor(e,n):a.domIn(l,n)}inlineDOMNearPos(e,n){let a,l=-1,c=!1,u,f=-1,h=!1;return this.tile.blockTiles((p,g)=>{if(p.isWidget()){if(p.flags&32&&g>=e)return!0;p.flags&16&&(c=!0)}else{let b=g+p.length;if(g<=e&&(a=p,l=e-g,c=b<e),b>=e&&!u&&(u=p,f=e-g,h=g>e),g>e&&u)return!0}}),!a&&!u?this.domAtPos(e,n):(c&&u?a=null:h&&a&&(u=null),a&&n<0||!u?a.domIn(l,n):u.domIn(f,n))}coordsAt(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.widget instanceof ad?null:a.coordsInWidget(l,n,!0):a.coordsIn(l,n)}lineAt(e,n){let{tile:a}=this.tile.resolveBlock(e,n);return a.isLine()?a:null}coordsForChar(e){let{tile:n,offset:a}=this.tile.resolveBlock(e,1);if(!n.isLine())return null;function l(c,u){if(c.isComposite())for(let f of c.children){if(f.length>=u){let h=l(f,u);if(h)return h}if(u-=f.length,u<0)break}else if(c.isText()&&u<c.length){let f=Bn(c.text,u);if(f==u)return null;let h=il(c.dom,u,f).getClientRects();for(let p=0;p<h.length;p++){let g=h[p];if(p==h.length-1||g.top<g.bottom&&g.left<g.right)return g}}return null}return l(n,a)}measureVisibleLineHeights(e){let n=[],{from:a,to:l}=e,c=this.view.contentDOM.clientWidth,u=c>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,f=-1,h=this.view.textDirection==lt.LTR,p=0,g=(b,v,S)=>{for(let k=0;k<b.children.length&&!(v>l);k++){let T=b.children[k],C=v+T.length,_=T.dom.getBoundingClientRect(),{height:U}=_;if(S&&!k&&(p+=_.top-S.top),T instanceof oi)C>a&&g(T,v,_);else if(v>=a&&(p>0&&n.push(-p),n.push(U+p),p=0,u)){let K=T.dom.lastChild,$=K?Wo(K):[];if($.length){let B=$[$.length-1],W=h?B.right-_.left:_.right-B.left;W>f&&(f=W,this.minWidth=c,this.minWidthFrom=v,this.minWidthTo=C)}}S&&k==b.children.length-1&&(p+=S.bottom-_.bottom),v=C+T.breakAfter}};return g(this.tile,0,null),n}textDirectionAt(e){let{tile:n}=this.tile.resolveBlock(e,1);return getComputedStyle(n.dom).direction=="rtl"?lt.RTL:lt.LTR}measureTextSize(){let e=this.tile.blockTiles(u=>{if(u.isLine()&&u.children.length&&u.length<=20){let f=0,h;for(let p of u.children){if(!p.isText()||/[^ -~]/.test(p.text))return;let g=Wo(p.dom);if(g.length!=1)return;f+=g[0].width,h=g[0].height}if(f)return{lineHeight:u.dom.getBoundingClientRect().height,charWidth:f/u.length,textHeight:h}}});if(e)return e;let n=document.createElement("div"),a,l,c;return n.className="cm-line",n.style.width="99999px",n.style.position="absolute",n.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(n);let u=Wo(n.firstChild)[0];a=n.getBoundingClientRect().height,l=u&&u.width?u.width/27:7,c=u&&u.height?u.height:a,n.remove()}),{lineHeight:a,charWidth:l,textHeight:c}}computeBlockGapDeco(){let e=[],n=this.view.viewState;for(let a=0,l=0;;l++){let c=l==n.viewports.length?null:n.viewports[l],u=c?c.from-1:this.view.state.doc.length;if(u>a){let f=(n.lineBlockAt(u).bottom-n.lineBlockAt(a).top)/this.view.scaleY;e.push(Nt.replace({widget:new ad(f),block:!0,inclusive:!0,isBlockGap:!0}).range(a,u))}if(!c)break;a=c.to+1}return Nt.set(e)}updateDeco(){let e=1,n=this.view.state.facet(xc).map(c=>(this.dynamicDecorationMap[e++]=typeof c=="function")?c(this.view):c),a=!1,l=this.view.state.facet(Rh).map((c,u)=>{let f=typeof c=="function";return f&&(a=!0),f?c(this.view):c});for(l.length&&(this.dynamicDecorationMap[e++]=a,n.push(Me.join(l))),this.decorations=[this.editContextFormatting,...n,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(uv).map(c=>typeof c=="function"?c(this.view):c)}scrollIntoView(e){var n;if(e.isSnapshot){let g=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=g.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let g of this.view.state.facet(lv))try{if(g(this.view,e.range,e))return!0}catch(b){ri(this.view.state,b,"scroll handler")}let{range:a}=e,l=this.coordsAt(a.head,(n=a.assoc)!==null&&n!==void 0?n:a.empty?0:a.head>a.anchor?-1:1),c;if(!l)return;!a.empty&&(c=this.coordsAt(a.anchor,a.anchor>a.head?-1:1))&&(l={left:Math.min(l.left,c.left),top:Math.min(l.top,c.top),right:Math.max(l.right,c.right),bottom:Math.max(l.bottom,c.bottom)});let u=hv(this.view),f={left:l.left-u.left,top:l.top-u.top,right:l.right+u.right,bottom:l.bottom+u.bottom},{offsetWidth:h,offsetHeight:p}=this.view.scrollDOM;if(Hw(this.view.scrollDOM,f,a.head<a.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,h),-h),Math.max(Math.min(e.yMargin,p),-p),this.view.textDirection==lt.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(l.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||l.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let g=this.view.docView.lineAt(a.head,1);g&&g.dom.scrollIntoView({block:"nearest"})}}lineHasWidget(e){let n=a=>a.isWidget()||a.children.some(n);return n(this.tile.resolveBlock(e,1).tile)}destroy(){Pd(this.tile)}}function Pd(s,e){let n=e?.get(s);if(n!=1){n==null&&s.destroy();for(let a of s.children)Pd(a,e)}}function uk(s){return s.node.nodeType==1&&s.node.firstChild&&(s.offset==0||s.node.childNodes[s.offset-1].contentEditable=="false")&&(s.offset==s.node.childNodes.length||s.node.childNodes[s.offset].contentEditable=="false")}function pv(s,e){let n=s.observer.selectionRange;if(!n.focusNode)return null;let a=Wb(n.focusNode,n.focusOffset),l=Xb(n.focusNode,n.focusOffset),c=a||l;if(l&&a&&l.node!=a.node){let f=it.get(l.node);if(!f||f.isText()&&f.text!=l.node.nodeValue)c=l;else if(s.docView.lastCompositionAfterCursor){let h=it.get(a.node);!h||h.isText()&&h.text!=a.node.nodeValue||(c=l)}}if(s.docView.lastCompositionAfterCursor=c!=a,!c)return null;let u=e-c.offset;return{from:u,to:u+c.node.nodeValue.length,node:c.node}}function fk(s,e,n){let a=pv(s,n);if(!a)return null;let{node:l,from:c,to:u}=a,f=l.nodeValue;if(/[\n\r]/.test(f)||s.state.doc.sliceString(a.from,a.to)!=f)return null;let h=e.invertedDesc;return{range:new vn(h.mapPos(c),h.mapPos(u),c,u),text:l}}function dk(s,e){return s.nodeType!=1?0:(e&&s.childNodes[e-1].contentEditable=="false"?1:0)|(e<s.childNodes.length&&s.childNodes[e].contentEditable=="false"?2:0)}let hk=class{constructor(){this.changes=[]}compareRange(e,n){Ma(e,n,this.changes)}comparePoint(e,n){Ma(e,n,this.changes)}boundChange(e){Ma(e,e,this.changes)}};function mk(s,e,n){let a=new hk;return Me.compare(s,e,n,a),a.changes}class pk{constructor(){this.changes=[]}compareRange(e,n){Ma(e,n,this.changes)}comparePoint(){}boundChange(e){Ma(e,e,this.changes)}}function gk(s,e,n){let a=new pk;return Me.compare(s,e,n,a),a.changes}function yk(s,e){for(let n=s;n&&n!=e;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable=="false")return!0;return!1}function bk(s,e){let n=!1;return e&&s.iterChangedRanges((a,l)=>{a<e.to&&l>e.from&&(n=!0)}),n}class ad extends vc{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function vk(s,e,n=1){let a=s.charCategorizer(e),l=s.doc.lineAt(e),c=e-l.from;if(l.length==0)return J.cursor(e);c==0?n=1:c==l.length&&(n=-1);let u=c,f=c;n<0?u=Bn(l.text,c,!1):f=Bn(l.text,c);let h=a(l.text.slice(u,f));for(;u>0;){let p=Bn(l.text,u,!1);if(a(l.text.slice(p,u))!=h)break;u=p}for(;f<l.length;){let p=Bn(l.text,f);if(a(l.text.slice(f,p))!=h)break;f=p}return J.range(u+l.from,f+l.from)}function xk(s,e,n,a,l){let c=Math.round((a-e.left)*s.defaultCharacterWidth);if(s.lineWrapping&&n.height>s.defaultLineHeight*1.5){let f=s.viewState.heightOracle.textHeight,h=Math.floor((l-n.top-(s.defaultLineHeight-f)*.5)/f);c+=h*s.viewState.heightOracle.lineLength}let u=s.state.sliceDoc(n.from,n.to);return n.from+Cw(u,c,s.state.tabSize)}function Jd(s,e,n){let a=s.lineBlockAt(e);if(Array.isArray(a.type)){let l;for(let c of a.type){if(c.from>e)break;if(!(c.to<e)){if(c.from<e&&c.to>e)return c;(!l||c.type==Ot.Text&&(l.type!=c.type||(n<0?c.from<e:c.to>e)))&&(l=c)}}return l||a}return a}function Sk(s,e,n,a){let l=Jd(s,e.head,e.assoc||-1),c=!a||l.type!=Ot.Text||!(s.lineWrapping||l.widgetLineBreaks)?null:s.coordsAtPos(e.assoc<0&&e.head>l.from?e.head-1:e.head);if(c){let u=s.dom.getBoundingClientRect(),f=s.textDirectionAt(l.from),h=s.posAtCoords({x:n==(f==lt.LTR)?u.right-1:u.left+1,y:(c.top+c.bottom)/2});if(h!=null)return J.cursor(h,n?-1:1)}return J.cursor(n?l.to:l.from,n?-1:1)}function vy(s,e,n,a){let l=s.state.doc.lineAt(e.head),c=s.bidiSpans(l),u=s.textDirectionAt(l.from);for(let f=e,h=null;;){let p=Fw(l,c,u,f,n),g=Jb;if(!p){if(l.number==(n?s.state.doc.lines:1))return f;g=`
`,l=s.state.doc.line(l.number+(n?1:-1)),c=s.bidiSpans(l),p=s.visualLineSide(l,!n)}if(h){if(!h(g))return f}else{if(!a)return p;h=a(g)}f=p}}function wk(s,e,n){let a=s.state.charCategorizer(e),l=a(n);return c=>{let u=a(c);return l==ai.Space&&(l=u),l==u}}function kk(s,e,n,a){let l=e.head,c=n?1:-1;if(l==(n?s.state.doc.length:0))return J.cursor(l,e.assoc);let u=e.goalColumn,f,h=s.contentDOM.getBoundingClientRect(),p=s.coordsAtPos(l,e.assoc||((e.empty?n:e.head==e.from)?1:-1)),g=s.documentTop;if(p)u==null&&(u=p.left-h.left),f=c<0?p.top:p.bottom;else{let k=s.viewState.lineBlockAt(l);u==null&&(u=Math.min(h.right-h.left,s.defaultCharacterWidth*(l-k.from))),f=(c<0?k.top:k.bottom)+g}let b=h.left+u,v=s.viewState.heightOracle.textHeight>>1,S=a??v;for(let k=0;;k+=v){let T=f+(S+k)*c,C=Id(s,{x:b,y:T},!1,c);if(n?T>h.bottom:T<h.top)return J.cursor(C.pos,C.assoc);let _=s.coordsAtPos(C.pos,C.assoc),U=_?(_.top+_.bottom)/2:0;if(!_||(n?U>f:U<f))return J.cursor(C.pos,C.assoc,void 0,u)}}function Qr(s,e,n){for(;;){let a=0;for(let l of s)l.between(e-1,e+1,(c,u,f)=>{if(e>c&&e<u){let h=a||n||(e-c<u-e?-1:1);e=h<0?c:u,a=h}});if(!a)return e}}function gv(s,e){let n=null;for(let a=0;a<e.ranges.length;a++){let l=e.ranges[a],c=null;if(l.empty){let u=Qr(s,l.from,0);u!=l.from&&(c=J.cursor(u,-1))}else{let u=Qr(s,l.from,-1),f=Qr(s,l.to,1);(u!=l.from||f!=l.to)&&(c=J.range(l.from==l.anchor?u:f,l.from==l.head?u:f))}c&&(n||(n=e.ranges.slice()),n[a]=c)}return n?J.create(n,e.mainIndex):e}function rd(s,e,n){let a=Qr(s.state.facet(cl).map(l=>l(s)),n.from,e.head>n.from?-1:1);return a==n.from?n:J.cursor(a,a<n.from?1:-1)}class zn{constructor(e,n){this.pos=e,this.assoc=n}}function Id(s,e,n,a){let l=s.contentDOM.getBoundingClientRect(),c=l.top+s.viewState.paddingTop,{x:u,y:f}=e,h=f-c,p;for(;;){if(h<0)return new zn(0,1);if(h>s.viewState.docHeight)return new zn(s.state.doc.length,-1);if(p=s.elementAtHeight(h),a==null)break;if(p.type==Ot.Text){if(a<0?p.to<s.viewport.from:p.from>s.viewport.to)break;let v=s.docView.coordsAt(a<0?p.from:p.to,a>0?-1:1);if(v&&(a<0?v.top<=h+c:v.bottom>=h+c))break}let b=s.viewState.heightOracle.textHeight/2;h=a>0?p.bottom+b:p.top-b}if(s.viewport.from>=p.to||s.viewport.to<=p.from){if(n)return null;if(p.type==Ot.Text){let b=xk(s,l,p,u,f);return new zn(b,b==p.from?1:-1)}}if(p.type!=Ot.Text)return h<(p.top+p.bottom)/2?new zn(p.from,1):new zn(p.to,-1);let g=s.docView.lineAt(p.from,2);return(!g||g.length!=p.length)&&(g=s.docView.lineAt(p.from,-2)),new Tk(s,u,f,s.textDirectionAt(p.from)).scanTile(g,p.from)}class Tk{constructor(e,n,a,l){this.view=e,this.x=n,this.y=a,this.baseDir=l,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[Ln.find(l,e-a.from,-1,n)].level==this.baseDir}dirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[Ln.find(l,e-a.from,-1,n)].dir}bidiIn(e,n){let{spans:a,line:l}=this.bidiSpansAt(e);return a.length>1||a.length&&(a[0].level!=this.baseDir||a[0].to+l.from<n)}scan(e,n,a=!1){let l=0,c=e.length-1,u=new Set,f=this.bidiIn(e[0],e[c]),h,p,g=-1,b=1e9,v;e:for(;l<c;){let k=c-l,T=l+c>>1;t:if(u.has(T)){let _=l+Math.floor(Math.random()*k);for(let U=0;U<k;U++){if(!u.has(_)){T=_;break t}_++,_==c&&(_=l)}break e}u.add(T);let C=n(T);if(C)for(let _=0;_<C.length;_++){let U=C[_],K=0;if(!(U.width==0&&C.length>1)){if(U.bottom<this.y)(!h||h.bottom<U.bottom)&&(h=U),K=1;else if(U.top>this.y)(!p||p.top>U.top)&&(p=U),K=-1;else{let $=U.left>this.x?this.x-U.left:U.right<this.x?this.x-U.right:0,B=Math.abs($);B<b&&(g=T,b=B,v=U),$&&(K=$<0==(this.baseDir==lt.LTR)?-1:1)}K==-1&&(!f||this.baseDirAt(e[T],1))?c=T:K==1&&(!f||this.baseDirAt(e[T+1],-1))&&(l=T+1)}}}if(!v){if(!p&&!h)return{i:e[0],after:!1};let k=h&&(!p||this.y-h.bottom<p.top-this.y)?h:p;return this.y=(k.top+k.bottom)/2,this.scan(e,n,!0)}if(b&&!a){let{top:k,bottom:T}=v;if(h&&h.bottom>(k+k+T)/3)return this.y=h.bottom-1,this.scan(e,n,!0);if(p&&p.top<(k+T+T)/3)return this.y=p.top+1,this.scan(e,n,!0)}let S=(f?this.dirAt(e[g],1):this.baseDir)==lt.LTR;return{i:g,after:this.x>(v.left+v.right)/2==S}}scanText(e,n){let a=[];for(let c=0;c<e.length;c=Bn(e.text,c))a.push(n+c);a.push(n+e.length);let l=this.scan(a,c=>{let u=a[c]-n,f=a[c+1]-n;return il(e.dom,u,f).getClientRects()});return l.after?new zn(a[l.i+1],-1):new zn(a[l.i],1)}scanTile(e,n){if(!e.length)return new zn(n,1);if(e.children.length==1){let f=e.children[0];if(f.isText())return this.scanText(f,n);if(f.isComposite())return this.scanTile(f,n)}let a=[n];for(let f=0,h=n;f<e.children.length;f++)a.push(h+=e.children[f].length);let l=this.scan(a,f=>{let h=e.children[f];return h.flags&48?null:(h.dom.nodeType==1?h.dom:il(h.dom,0,h.length)).getClientRects()}),c=e.children[l.i],u=a[l.i];return c.isText()?this.scanText(c,u):c.isComposite()?this.scanTile(c,u):l.after?new zn(a[l.i+1],-1):new zn(u,1)}}const wa="￿";class Ak{constructor(e,n){this.points=e,this.view=n,this.text="",this.lineSeparator=n.state.facet($e.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=wa}readRange(e,n){if(!e)return this;let a=e.parentNode;for(let l=e;;){this.findPointBefore(a,l);let c=this.text.length;this.readNode(l);let u=it.get(l),f=l.nextSibling;if(f==n){u?.breakAfter&&!f&&a!=this.view.contentDOM&&this.lineBreak();break}let h=it.get(f);(u&&h?u.breakAfter:(u?u.breakAfter:tc(l))||tc(f)&&(l.nodeName!="BR"||u?.isWidget())&&this.text.length>c)&&!Mk(f,n)&&this.lineBreak(),l=f}return this.findPointBefore(a,n),this}readTextNode(e){let n=e.nodeValue;for(let a of this.points)a.node==e&&(a.pos=this.text.length+Math.min(a.offset,n.length));for(let a=0,l=this.lineSeparator?null:/\r\n?|\n/g;;){let c=-1,u=1,f;if(this.lineSeparator?(c=n.indexOf(this.lineSeparator,a),u=this.lineSeparator.length):(f=l.exec(n))&&(c=f.index,u=f[0].length),this.append(n.slice(a,c<0?n.length:c)),c<0)break;if(this.lineBreak(),u>1)for(let h of this.points)h.node==e&&h.pos>this.text.length&&(h.pos-=u-1);a=c+u}}readNode(e){let n=it.get(e),a=n&&n.overrideDOMText;if(a!=null){this.findPointInside(e,a.length);for(let l=a.iter();!l.next().done;)l.lineBreak?this.lineBreak():this.append(l.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,n){for(let a of this.points)a.node==e&&e.childNodes[a.offset]==n&&(a.pos=this.text.length)}findPointInside(e,n){for(let a of this.points)(e.nodeType==3?a.node==e:e.contains(a.node))&&(a.pos=this.text.length+(Ek(e,a.node,a.offset)?n:0))}}function Ek(s,e,n){for(;;){if(!e||n<ci(e))return!1;if(e==s)return!0;n=Ki(e)+1,e=e.parentNode}}function Mk(s,e){let n;for(;!(s==e||!s);s=s.nextSibling){let a=it.get(s);if(!a?.isWidget())return!1;a&&(n||(n=[])).push(a)}if(n)for(let a of n){let l=a.overrideDOMText;if(l?.length)return!1}return!0}class xy{constructor(e,n){this.node=e,this.offset=n,this.pos=-1}}class Rk{constructor(e,n,a,l){this.typeOver=l,this.bounds=null,this.text="",this.domChanged=n>-1;let{impreciseHead:c,impreciseAnchor:u}=e.docView,f=e.state.selection;if(e.state.readOnly&&n>-1)this.newSel=null;else if(n>-1&&(this.bounds=yv(e.docView.tile,n,a,0))){let h=c||u?[]:Ok(e),p=new Ak(h,e);p.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=p.text,this.newSel=Nk(h,this.bounds.from)}else{let h=e.observer.selectionRange,p=c&&c.node==h.focusNode&&c.offset==h.focusOffset||!Wd(e.contentDOM,h.focusNode)?f.main.head:e.docView.posFromDOM(h.focusNode,h.focusOffset),g=u&&u.node==h.anchorNode&&u.offset==h.anchorOffset||!Wd(e.contentDOM,h.anchorNode)?f.main.anchor:e.docView.posFromDOM(h.anchorNode,h.anchorOffset),b=e.viewport;if((P.ios||P.chrome)&&f.main.empty&&p!=g&&(b.from>0||b.to<e.state.doc.length)){let v=Math.min(p,g),S=Math.max(p,g),k=b.from-v,T=b.to-S;(k==0||k==1||v==0)&&(T==0||T==-1||S==e.state.doc.length)&&(p=0,g=e.state.doc.length)}if(e.inputState.composing>-1&&f.ranges.length>1)this.newSel=f.replaceRange(J.range(g,p));else if(e.lineWrapping&&g==p&&!(f.main.empty&&f.main.head==p)&&e.inputState.lastTouchTime>Date.now()-100){let v=e.coordsAtPos(p,-1),S=0;v&&(S=e.inputState.lastTouchY<=v.bottom?-1:1),this.newSel=J.create([J.cursor(p,S)])}else this.newSel=J.single(g,p)}}}function yv(s,e,n,a){if(s.isComposite()){let l=-1,c=-1,u=-1,f=-1;for(let h=0,p=a,g=a;h<s.children.length;h++){let b=s.children[h],v=p+b.length;if(p<e&&v>n)return yv(b,e,n,p);if(v>=e&&l==-1&&(l=h,c=p),p>n&&b.dom.parentNode==s.dom){u=h,f=g;break}g=v,p=v+b.breakAfter}return{from:c,to:f<0?a+s.length:f,startDOM:(l?s.children[l-1].dom.nextSibling:null)||s.dom.firstChild,endDOM:u<s.children.length&&u>=0?s.children[u].dom:null}}else return s.isText()?{from:a,to:a+s.length,startDOM:s.dom,endDOM:s.dom.nextSibling}:null}function bv(s,e){let n,{newSel:a}=e,{state:l}=s,c=l.selection.main,u=s.inputState.lastKeyTime>Date.now()-100?s.inputState.lastKeyCode:-1;if(e.bounds){let{from:f,to:h}=e.bounds,p=c.from,g=null;(u===8||P.android&&e.text.length<h-f)&&(p=c.to,g="end");let b=l.doc.sliceString(f,h,wa),v,S;!c.empty&&c.from>=f&&c.to<=h&&(e.typeOver||b!=e.text)&&b.slice(0,c.from-f)==e.text.slice(0,c.from-f)&&b.slice(c.to-f)==e.text.slice(v=e.text.length-(b.length-(c.to-f)))?n={from:c.from,to:c.to,insert:je.of(e.text.slice(c.from-f,v).split(wa))}:(S=vv(b,e.text,p-f,g))&&(P.chrome&&u==13&&S.toB==S.from+2&&e.text.slice(S.from,S.toB)==wa+wa&&S.toB--,n={from:f+S.from,to:f+S.toA,insert:je.of(e.text.slice(S.from,S.toB).split(wa))})}else a&&(!s.hasFocus&&l.facet(si)||rc(a,c))&&(a=null);if(!n&&!a)return!1;if((P.mac||P.android)&&n&&n.from==n.to&&n.from==c.head-1&&/^\. ?$/.test(n.insert.toString())&&s.contentDOM.getAttribute("autocorrect")=="off"?(a&&n.insert.length==2&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:n.from,to:n.to,insert:je.of([n.insert.toString().replace("."," ")])}):l.doc.lineAt(c.from).to<c.to&&s.docView.lineHasWidget(c.to)&&s.inputState.insertingTextAt>Date.now()-50?n={from:c.from,to:c.to,insert:l.toText(s.inputState.insertingText)}:P.chrome&&n&&n.from==n.to&&n.from==c.head&&n.insert.toString()==`
 `&&s.lineWrapping&&(a&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:c.from,to:c.to,insert:je.of([" "])}),n)return Ch(s,n,a,u);if(a&&!rc(a,c)){let f=!1,h="select";return s.inputState.lastSelectionTime>Date.now()-50&&(s.inputState.lastSelectionOrigin=="select"&&(f=!0),h=s.inputState.lastSelectionOrigin,h=="select.pointer"&&(a=gv(l.facet(cl).map(p=>p(s)),a))),s.dispatch({selection:a,scrollIntoView:f,userEvent:h}),!0}else return!1}function Ch(s,e,n,a=-1){if(P.ios&&s.inputState.flushIOSKey(e))return!0;let l=s.state.selection.main;if(P.android&&(e.to==l.to&&(e.from==l.from||e.from==l.from-1&&s.state.sliceDoc(e.from,l.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&Ra(s.contentDOM,"Enter",13)||(e.from==l.from-1&&e.to==l.to&&e.insert.length==0||a==8&&e.insert.length<e.to-e.from&&e.to>l.head)&&Ra(s.contentDOM,"Backspace",8)||e.from==l.from&&e.to==l.to+1&&e.insert.length==0&&Ra(s.contentDOM,"Delete",46)))return!0;let c=e.insert.toString();s.inputState.composing>=0&&s.inputState.composing++;let u,f=()=>u||(u=Ck(s,e,n));return s.state.facet(iv).some(h=>h(s,e.from,e.to,c,f))||s.dispatch(f()),!0}function Ck(s,e,n){let a,l=s.state,c=l.selection.main,u=-1;if(e.from==e.to&&e.from<c.from||e.from>c.to){let h=e.from<c.from?-1:1,p=h<0?c.from:c.to,g=Qr(l.facet(cl).map(b=>b(s)),p,h);e.from==g&&(u=g)}if(u>-1)a={changes:e,selection:J.cursor(e.from+e.insert.length,-1)};else if(e.from>=c.from&&e.to<=c.to&&e.to-e.from>=(c.to-c.from)/3&&(!n||n.main.empty&&n.main.from==e.from+e.insert.length)&&s.inputState.composing<0){let h=c.from<e.from?l.sliceDoc(c.from,e.from):"",p=c.to>e.to?l.sliceDoc(e.to,c.to):"";a=l.replaceSelection(s.state.toText(h+e.insert.sliceString(0,void 0,s.state.lineBreak)+p))}else{let h=l.changes(e),p=n&&n.main.to<=h.newLength?n.main:void 0;if(l.selection.ranges.length>1&&(s.inputState.composing>=0||s.inputState.compositionPendingChange)&&e.to<=c.to+10&&e.to>=c.to-10){let g=s.state.sliceDoc(e.from,e.to),b,v=n&&pv(s,n.main.head);if(v){let k=e.insert.length-(e.to-e.from);b={from:v.from,to:v.to-k}}else b=s.state.doc.lineAt(c.head);let S=c.to-e.to;a=l.changeByRange(k=>{if(k.from==c.from&&k.to==c.to)return{changes:h,range:p||k.map(h)};let T=k.to-S,C=T-g.length;if(s.state.sliceDoc(C,T)!=g||T>=b.from&&C<=b.to)return{range:k};let _=l.changes({from:C,to:T,insert:e.insert}),U=k.to-c.to;return{changes:_,range:p?J.range(Math.max(0,p.anchor+U),Math.max(0,p.head+U)):k.map(_)}})}else a={changes:h,selection:p&&l.selection.replaceRange(p)}}let f="input.type";return(s.composing||s.inputState.compositionPendingChange&&s.inputState.compositionEndedAt>Date.now()-50)&&(s.inputState.compositionPendingChange=!1,f+=".compose",s.inputState.compositionFirstChange&&(f+=".start",s.inputState.compositionFirstChange=!1)),l.update(a,{userEvent:f,scrollIntoView:!0})}function vv(s,e,n,a){let l=Math.min(s.length,e.length),c=0;for(;c<l&&s.charCodeAt(c)==e.charCodeAt(c);)c++;if(c==l&&s.length==e.length)return null;let u=s.length,f=e.length;for(;u>0&&f>0&&s.charCodeAt(u-1)==e.charCodeAt(f-1);)u--,f--;if(a=="end"){let h=Math.max(0,c-Math.min(u,f));n-=u+h-c}if(u<c&&s.length<e.length){let h=n<=c&&n>=u?c-n:0;c-=h,f=c+(f-u),u=c}else if(f<c){let h=n<=c&&n>=f?c-n:0;c-=h,u=c+(u-f),f=c}return{from:c,toA:u,toB:f}}function Ok(s){let e=[];if(s.root.activeElement!=s.contentDOM)return e;let{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}=s.observer.selectionRange;return n&&(e.push(new xy(n,a)),(l!=n||c!=a)&&e.push(new xy(l,c))),e}function Nk(s,e){if(s.length==0)return null;let n=s[0].pos,a=s.length==2?s[1].pos:n;return n>-1&&a>-1?J.single(n+e,a+e):null}function rc(s,e){return e.head==s.main.head&&e.anchor==s.main.anchor}class Dk{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,P.safari&&e.contentDOM.addEventListener("input",()=>null),P.gecko&&Xk(e.contentDOM.ownerDocument)}handleEvent(e){!Uk(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,n){let a=this.handlers[e];if(a){for(let l of a.observers)l(this.view,n);for(let l of a.handlers){if(n.defaultPrevented)break;if(l(this.view,n)){n.preventDefault();break}}}}ensureHandlers(e){let n=jk(e),a=this.handlers,l=this.view.contentDOM;for(let c in n)if(c!="scroll"){let u=!n[c].handlers.length,f=a[c];f&&u!=!f.handlers.length&&(l.removeEventListener(c,this.handleEvent),f=null),f||l.addEventListener(c,this.handleEvent,{passive:u})}for(let c in a)c!="scroll"&&!n[c]&&l.removeEventListener(c,this.handleEvent);this.handlers=n}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Sv.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),P.android&&P.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let n;return P.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&!e.shiftKey&&((n=xv.find(a=>a.keyCode==e.keyCode))&&!e.ctrlKey||zk.indexOf(e.key)>-1&&e.ctrlKey)?(this.pendingIOSKey=n||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let n=this.pendingIOSKey;return!n||n.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,Ra(this.view.contentDOM,n.key,n.keyCode,n instanceof KeyboardEvent?n:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:P.safari&&!P.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function Sy(s,e){return(n,a)=>{try{return e.call(s,a,n)}catch(l){ri(n.state,l)}}}function jk(s){let e=Object.create(null);function n(a){return e[a]||(e[a]={observers:[],handlers:[]})}for(let a of s){let l=a.spec,c=l&&l.plugin.domEventHandlers,u=l&&l.plugin.domEventObservers;if(c)for(let f in c){let h=c[f];h&&n(f).handlers.push(Sy(a.value,h))}if(u)for(let f in u){let h=u[f];h&&n(f).observers.push(Sy(a.value,h))}}for(let a in An)n(a).handlers.push(An[a]);for(let a in Zt)n(a).observers.push(Zt[a]);return e}const xv=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],zk="dthko",Sv=[16,17,18,20,91,92,224,225],jo=6;function zo(s){return Math.max(0,s)*.7+8}function Bk(s,e){return Math.max(Math.abs(s.clientX-e.clientX),Math.abs(s.clientY-e.clientY))}class Lk{constructor(e,n,a,l){this.view=e,this.startEvent=n,this.style=a,this.mustSelect=l,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=n,this.scrollParents=$b(e.contentDOM),this.atoms=e.state.facet(cl).map(u=>u(e));let c=e.contentDOM.ownerDocument;c.addEventListener("mousemove",this.move=this.move.bind(this)),c.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=n.shiftKey,this.multiple=e.state.facet($e.allowMultipleSelections)&&_k(e,n),this.dragging=qk(e,n)&&Tv(n)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Bk(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let n=0,a=0,l=0,c=0,u=this.view.win.innerWidth,f=this.view.win.innerHeight;this.scrollParents.x&&({left:l,right:u}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:c,bottom:f}=this.scrollParents.y.getBoundingClientRect());let h=hv(this.view);e.clientX-h.left<=l+jo?n=-zo(l-e.clientX):e.clientX+h.right>=u-jo&&(n=zo(e.clientX-u)),e.clientY-h.top<=c+jo?a=-zo(c-e.clientY):e.clientY+h.bottom>=f-jo&&(a=zo(e.clientY-f)),this.setScrollSpeed(n,a)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,n){this.scrollSpeed={x:e,y:n},e||n?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:n}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),n&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=n,n=0),(e||n)&&this.view.win.scrollBy(e,n),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:n}=this,a=gv(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!a.eq(n.state.selection,this.dragging===!1))&&this.view.dispatch({selection:a,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(n=>n.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function _k(s,e){let n=s.state.facet(Ib);return n.length?n[0](e):P.mac?e.metaKey:e.ctrlKey}function Hk(s,e){let n=s.state.facet(ev);return n.length?n[0](e):P.mac?!e.altKey:!e.ctrlKey}function qk(s,e){let{main:n}=s.state.selection;if(n.empty)return!1;let a=nl(s.root);if(!a||a.rangeCount==0)return!0;let l=a.getRangeAt(0).getClientRects();for(let c=0;c<l.length;c++){let u=l[c];if(u.left<=e.clientX&&u.right>=e.clientX&&u.top<=e.clientY&&u.bottom>=e.clientY)return!0}return!1}function Uk(s,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let n=e.target,a;n!=s.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(a=it.get(n))&&a.isWidget()&&!a.isHidden&&a.widget.ignoreEvent(e))return!1;return!0}const An=Object.create(null),Zt=Object.create(null),wv=P.ie&&P.ie_version<15||P.ios&&P.webkit_version<604;function Vk(s){let e=s.dom.parentNode;if(!e)return;let n=e.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.focus(),setTimeout(()=>{s.focus(),n.remove(),kv(s,n.value)},50)}function kc(s,e,n){for(let a of s.facet(e))n=a(n,s);return n}function kv(s,e){e=kc(s.state,Ah,e);let{state:n}=s,a,l=1,c=n.toText(e),u=c.lines==n.selection.ranges.length;if(eh!=null&&n.selection.ranges.every(h=>h.empty)&&eh==c.toString()){let h=-1;a=n.changeByRange(p=>{let g=n.doc.lineAt(p.from);if(g.from==h)return{range:p};h=g.from;let b=n.toText((u?c.line(l++).text:e)+n.lineBreak);return{changes:{from:g.from,insert:b},range:J.cursor(p.from+b.length)}})}else u?a=n.changeByRange(h=>{let p=c.line(l++);return{changes:{from:h.from,to:h.to,insert:p.text},range:J.cursor(h.from+p.length)}}):a=n.replaceSelection(c);s.dispatch(a,{userEvent:"input.paste",scrollIntoView:!0})}Zt.scroll=s=>{s.inputState.lastScrollTop=s.scrollDOM.scrollTop,s.inputState.lastScrollLeft=s.scrollDOM.scrollLeft};Zt.wheel=Zt.mousewheel=s=>{s.inputState.lastWheelEvent=Date.now()};An.keydown=(s,e)=>(s.inputState.setSelectionOrigin("select"),e.keyCode==27&&s.inputState.tabFocusMode!=0&&(s.inputState.tabFocusMode=Date.now()+2e3),!1);Zt.touchstart=(s,e)=>{let n=s.inputState,a=e.targetTouches[0];n.lastTouchTime=Date.now(),a&&(n.lastTouchX=a.clientX,n.lastTouchY=a.clientY),n.setSelectionOrigin("select.pointer")};Zt.touchmove=s=>{s.inputState.setSelectionOrigin("select.pointer")};An.mousedown=(s,e)=>{if(s.observer.flush(),s.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let a of s.state.facet(tv))if(n=a(s,e),n)break;if(!n&&e.button==0&&(n=$k(s,e)),n){let a=!s.hasFocus;s.inputState.startMouseSelection(new Lk(s,e,n,a)),a&&s.observer.ignore(()=>{Yb(s.contentDOM);let c=s.root.activeElement;c&&!c.contains(s.contentDOM)&&c.blur()});let l=s.inputState.mouseSelection;if(l)return l.start(e),l.dragging===!1}else s.inputState.setSelectionOrigin("select.pointer");return!1};function wy(s,e,n,a){if(a==1)return J.cursor(e,n);if(a==2)return vk(s.state,e,n);{let l=s.docView.lineAt(e,n),c=s.state.doc.lineAt(l?l.posAtEnd:e),u=l?l.posAtStart:c.from,f=l?l.posAtEnd:c.to;return f<s.state.doc.length&&f==c.to&&f++,J.range(u,f)}}const Gk=P.ie&&P.ie_version<=11;let ky=null,Ty=0,Ay=0;function Tv(s){if(!Gk)return s.detail;let e=ky,n=Ay;return ky=s,Ay=Date.now(),Ty=!e||n>Date.now()-400&&Math.abs(e.clientX-s.clientX)<2&&Math.abs(e.clientY-s.clientY)<2?(Ty+1)%3:1}function $k(s,e){let n=s.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),a=Tv(e),l=s.state.selection;return{update(c){c.docChanged&&(n.pos=c.changes.mapPos(n.pos),l=l.map(c.changes))},get(c,u,f){let h=s.posAndSideAtCoords({x:c.clientX,y:c.clientY},!1),p,g=wy(s,h.pos,h.assoc,a);if(n.pos!=h.pos&&!u){let b=wy(s,n.pos,n.assoc,a),v=Math.min(b.from,g.from),S=Math.max(b.to,g.to);g=v<g.from?J.range(v,S,g.assoc):J.range(S,v,g.assoc)}return u?l.replaceRange(l.main.extend(g.from,g.to,g.assoc)):f&&a==1&&l.ranges.length>1&&(p=Yk(l,h.pos))?p:f?l.addRange(g):J.create([g])}}}function Yk(s,e){for(let n=0;n<s.ranges.length;n++){let{from:a,to:l}=s.ranges[n];if(a<=e&&l>=e)return J.create(s.ranges.slice(0,n).concat(s.ranges.slice(n+1)),s.mainIndex==n?0:s.mainIndex-(s.mainIndex>n?1:0))}return null}An.dragstart=(s,e)=>{let{selection:{main:n}}=s.state;if(e.target.draggable){let l=s.docView.tile.nearest(e.target);if(l&&l.isWidget()){let c=l.posAtStart,u=c+l.length;(c>=n.to||u<=n.from)&&(n=J.range(c,u))}}let{inputState:a}=s;return a.mouseSelection&&(a.mouseSelection.dragging=!0),a.draggedContent=n,e.dataTransfer&&(e.dataTransfer.setData("Text",kc(s.state,Eh,s.state.sliceDoc(n.from,n.to))),e.dataTransfer.effectAllowed="copyMove"),!1};An.dragend=s=>(s.inputState.draggedContent=null,!1);function Ey(s,e,n,a){if(n=kc(s.state,Ah,n),!n)return;let l=s.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:c}=s.inputState,u=a&&c&&Hk(s,e)?{from:c.from,to:c.to}:null,f={from:l,insert:n},h=s.state.changes(u?[u,f]:f);s.focus(),s.dispatch({changes:h,selection:{anchor:h.mapPos(l,-1),head:h.mapPos(l,1)},userEvent:u?"move.drop":"input.drop"}),s.inputState.draggedContent=null}An.drop=(s,e)=>{if(!e.dataTransfer)return!1;if(s.state.readOnly)return!0;let n=e.dataTransfer.files;if(n&&n.length){let a=Array(n.length),l=0,c=()=>{++l==n.length&&Ey(s,e,a.filter(u=>u!=null).join(s.state.lineBreak),!1)};for(let u=0;u<n.length;u++){let f=new FileReader;f.onerror=c,f.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(f.result)||(a[u]=f.result),c()},f.readAsText(n[u])}return!0}else{let a=e.dataTransfer.getData("Text");if(a)return Ey(s,e,a,!0),!0}return!1};An.paste=(s,e)=>{if(s.state.readOnly)return!0;s.observer.flush();let n=wv?null:e.clipboardData;return n?(kv(s,n.getData("text/plain")||n.getData("text/uri-list")),!0):(Vk(s),!1)};function Kk(s,e){let n=s.dom.parentNode;if(!n)return;let a=n.appendChild(document.createElement("textarea"));a.style.cssText="position: fixed; left: -10000px; top: 10px",a.value=e,a.focus(),a.selectionEnd=e.length,a.selectionStart=0,setTimeout(()=>{a.remove(),s.focus()},50)}function Wk(s){let e=[],n=[],a=!1;for(let l of s.selection.ranges)l.empty||(e.push(s.sliceDoc(l.from,l.to)),n.push(l));if(!e.length){let l=-1;for(let{from:c}of s.selection.ranges){let u=s.doc.lineAt(c);u.number>l&&(e.push(u.text),n.push({from:u.from,to:Math.min(s.doc.length,u.to+1)})),l=u.number}a=!0}return{text:kc(s,Eh,e.join(s.lineBreak)),ranges:n,linewise:a}}let eh=null;An.copy=An.cut=(s,e)=>{if(!Wr(s.contentDOM,s.observer.selectionRange))return!1;let{text:n,ranges:a,linewise:l}=Wk(s.state);if(!n&&!l)return!1;eh=l?n:null,e.type=="cut"&&!s.state.readOnly&&s.dispatch({changes:a,scrollIntoView:!0,userEvent:"delete.cut"});let c=wv?null:e.clipboardData;return c?(c.clearData(),c.setData("text/plain",n),!0):(Kk(s,n),!1)};const Av=La.define();function Ev(s,e){let n=[];for(let a of s.facet(sv)){let l=a(s,e);l&&n.push(l)}return n.length?s.update({effects:n,annotations:Av.of(!0)}):null}function Mv(s){setTimeout(()=>{let e=s.hasFocus;if(e!=s.inputState.notifiedFocused){let n=Ev(s.state,e);n?s.dispatch(n):s.update([])}},10)}Zt.focus=s=>{s.inputState.lastFocusTime=Date.now(),!s.scrollDOM.scrollTop&&(s.inputState.lastScrollTop||s.inputState.lastScrollLeft)&&(s.scrollDOM.scrollTop=s.inputState.lastScrollTop,s.scrollDOM.scrollLeft=s.inputState.lastScrollLeft),Mv(s)};Zt.blur=s=>{s.observer.clearSelectionRange(),Mv(s)};Zt.compositionstart=Zt.compositionupdate=s=>{s.observer.editContext||(s.inputState.compositionFirstChange==null&&(s.inputState.compositionFirstChange=!0),s.inputState.composing<0&&(s.inputState.composing=0))};Zt.compositionend=s=>{s.observer.editContext||(s.inputState.composing=-1,s.inputState.compositionEndedAt=Date.now(),s.inputState.compositionPendingKey=!0,s.inputState.compositionPendingChange=s.observer.pendingRecords().length>0,s.inputState.compositionFirstChange=null,P.chrome&&P.android?s.observer.flushSoon():s.inputState.compositionPendingChange?Promise.resolve().then(()=>s.observer.flush()):setTimeout(()=>{s.inputState.composing<0&&s.docView.hasComposition&&s.update([])},50))};Zt.contextmenu=s=>{s.inputState.lastContextMenu=Date.now()};An.beforeinput=(s,e)=>{var n,a;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(s.inputState.insertingText=e.data,s.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&s.observer.editContext){let c=(n=e.dataTransfer)===null||n===void 0?void 0:n.getData("text/plain"),u=e.getTargetRanges();if(c&&u.length){let f=u[0],h=s.posAtDOM(f.startContainer,f.startOffset),p=s.posAtDOM(f.endContainer,f.endOffset);return Ch(s,{from:h,to:p,insert:s.state.toText(c)},null),!0}}let l;if(P.chrome&&P.android&&(l=xv.find(c=>c.inputType==e.inputType))&&(s.observer.delayAndroidKey(l.key,l.keyCode),l.key=="Backspace"||l.key=="Delete")){let c=((a=window.visualViewport)===null||a===void 0?void 0:a.height)||0;setTimeout(()=>{var u;(((u=window.visualViewport)===null||u===void 0?void 0:u.height)||0)>c+10&&s.hasFocus&&(s.contentDOM.blur(),s.focus())},100)}return P.ios&&e.inputType=="deleteContentForward"&&s.observer.flushSoon(),P.safari&&e.inputType=="insertText"&&s.inputState.composing>=0&&setTimeout(()=>Zt.compositionend(s,e),20),!1};const My=new Set;function Xk(s){My.has(s)||(My.add(s),s.addEventListener("copy",()=>{}),s.addEventListener("cut",()=>{}))}const Ry=["pre-wrap","normal","pre-line","break-spaces"];let za=!1;function Cy(){za=!1}class Qk{constructor(e){this.lineWrapping=e,this.doc=je.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,n){let a=this.doc.lineAt(n).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(a+=Math.max(0,Math.ceil((n-e-a*this.lineLength*.5)/this.lineLength))),this.lineHeight*a}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return Ry.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let n=!1;for(let a=0;a<e.length;a++){let l=e[a];l<0?a++:this.heightSamples[Math.floor(l*10)]||(n=!0,this.heightSamples[Math.floor(l*10)]=!0)}return n}refresh(e,n,a,l,c,u){let f=Ry.indexOf(e)>-1,h=Math.abs(n-this.lineHeight)>.3||this.lineWrapping!=f;if(this.lineWrapping=f,this.lineHeight=n,this.charWidth=a,this.textHeight=l,this.lineLength=c,h){this.heightSamples={};for(let p=0;p<u.length;p++){let g=u[p];g<0?p++:this.heightSamples[Math.floor(g*10)]=!0}}return h}}class Fk{constructor(e,n){this.from=e,this.heights=n,this.index=0}get more(){return this.index<this.heights.length}}class kn{constructor(e,n,a,l,c){this.from=e,this.length=n,this.top=a,this.height=l,this._content=c}get type(){return typeof this._content=="number"?Ot.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof As?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new kn(this.from,this.length+e.length,this.top,this.height+e.height,n)}}var Xe=(function(s){return s[s.ByPos=0]="ByPos",s[s.ByHeight=1]="ByHeight",s[s.ByPosNoHeight=2]="ByPosNoHeight",s})(Xe||(Xe={}));const Xo=.001;class Ut{constructor(e,n,a=2){this.length=e,this.height=n,this.flags=a}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Xo&&(za=!0),this.height=e)}replace(e,n,a){return Ut.of(a)}decomposeLeft(e,n){n.push(this)}decomposeRight(e,n){n.push(this)}applyChanges(e,n,a,l){let c=this,u=a.doc;for(let f=l.length-1;f>=0;f--){let{fromA:h,toA:p,fromB:g,toB:b}=l[f],v=c.lineAt(h,Xe.ByPosNoHeight,a.setDoc(n),0,0),S=v.to>=p?v:c.lineAt(p,Xe.ByPosNoHeight,a,0,0);for(b+=S.to-p,p=S.to;f>0&&v.from<=l[f-1].toA;)h=l[f-1].fromA,g=l[f-1].fromB,f--,h<v.from&&(v=c.lineAt(h,Xe.ByPosNoHeight,a,0,0));g+=v.from-h,h=v.from;let k=Oh.build(a.setDoc(u),e,g,b);c=lc(c,c.replace(h,p,k))}return c.updateHeight(a,0)}static empty(){return new an(0,0,0)}static of(e){if(e.length==1)return e[0];let n=0,a=e.length,l=0,c=0;for(;;)if(n==a)if(l>c*2){let f=e[n-1];f.break?e.splice(--n,1,f.left,null,f.right):e.splice(--n,1,f.left,f.right),a+=1+f.break,l-=f.size}else if(c>l*2){let f=e[a];f.break?e.splice(a,1,f.left,null,f.right):e.splice(a,1,f.left,f.right),a+=2+f.break,c-=f.size}else break;else if(l<c){let f=e[n++];f&&(l+=f.size)}else{let f=e[--a];f&&(c+=f.size)}let u=0;return e[n-1]==null?(u=1,n--):e[n]==null&&(u=1,a++),new Pk(Ut.of(e.slice(0,n)),u,Ut.of(e.slice(a)))}}function lc(s,e){return s==e?s:(s.constructor!=e.constructor&&(za=!0),e)}Ut.prototype.size=1;const Zk=Nt.replace({});class Rv extends Ut{constructor(e,n,a){super(e,n),this.deco=a,this.spaceAbove=0}mainBlock(e,n){return new kn(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,n,a,l){return this.spaceAbove&&e<a+this.spaceAbove?new kn(l,0,a,this.spaceAbove,Zk):this.mainBlock(a,l)}lineAt(e,n,a,l,c){let u=this.mainBlock(l,c);return this.spaceAbove?this.blockAt(0,a,l,c).join(u):u}forEachLine(e,n,a,l,c,u){e<=c+this.length&&n>=c&&u(this.lineAt(0,Xe.ByPos,a,l,c))}setMeasuredHeight(e){let n=e.heights[e.index++];n<0?(this.spaceAbove=-n,n=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(n)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more&&this.setMeasuredHeight(l),this.outdated=!1,this}toString(){return`block(${this.length})`}}class an extends Rv{constructor(e,n,a){super(e,n,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=a}mainBlock(e,n){return new kn(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(e,n,a){let l=a[0];return a.length==1&&(l instanceof an||l instanceof Rt&&l.flags&4)&&Math.abs(this.length-l.length)<10?(l instanceof Rt?l=new an(l.length,this.height,this.spaceAbove):l.height=this.height,this.outdated||(l.outdated=!1),l):Ut.of(a)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more?this.setMeasuredHeight(l):(a||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Rt extends Ut{constructor(e){super(e,0)}heightMetrics(e,n){let a=e.doc.lineAt(n).number,l=e.doc.lineAt(n+this.length).number,c=l-a+1,u,f=0;if(e.lineWrapping){let h=Math.min(this.height,e.lineHeight*c);u=h/c,this.length>c+1&&(f=(this.height-h)/(this.length-c-1))}else u=this.height/c;return{firstLine:a,lastLine:l,perLine:u,perChar:f}}blockAt(e,n,a,l){let{firstLine:c,lastLine:u,perLine:f,perChar:h}=this.heightMetrics(n,l);if(n.lineWrapping){let p=l+(e<n.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-a)/this.height))*this.length)),g=n.doc.lineAt(p),b=f+g.length*h,v=Math.max(a,e-b/2);return new kn(g.from,g.length,v,b,0)}else{let p=Math.max(0,Math.min(u-c,Math.floor((e-a)/f))),{from:g,length:b}=n.doc.line(c+p);return new kn(g,b,a+f*p,f,0)}}lineAt(e,n,a,l,c){if(n==Xe.ByHeight)return this.blockAt(e,a,l,c);if(n==Xe.ByPosNoHeight){let{from:S,to:k}=a.doc.lineAt(e);return new kn(S,k-S,0,0,0)}let{firstLine:u,perLine:f,perChar:h}=this.heightMetrics(a,c),p=a.doc.lineAt(e),g=f+p.length*h,b=p.number-u,v=l+f*b+h*(p.from-c-b);return new kn(p.from,p.length,Math.max(l,Math.min(v,l+this.height-g)),g,0)}forEachLine(e,n,a,l,c,u){e=Math.max(e,c),n=Math.min(n,c+this.length);let{firstLine:f,perLine:h,perChar:p}=this.heightMetrics(a,c);for(let g=e,b=l;g<=n;){let v=a.doc.lineAt(g);if(g==e){let k=v.number-f;b+=h*k+p*(e-c-k)}let S=h+p*v.length;u(new kn(v.from,v.length,b,S,0)),b+=S,g=v.to+1}}replace(e,n,a){let l=this.length-n;if(l>0){let c=a[a.length-1];c instanceof Rt?a[a.length-1]=new Rt(c.length+l):a.push(null,new Rt(l-1))}if(e>0){let c=a[0];c instanceof Rt?a[0]=new Rt(e+c.length):a.unshift(new Rt(e-1),null)}return Ut.of(a)}decomposeLeft(e,n){n.push(new Rt(e-1),null)}decomposeRight(e,n){n.push(null,new Rt(this.length-e-1))}updateHeight(e,n=0,a=!1,l){let c=n+this.length;if(l&&l.from<=n+this.length&&l.more){let u=[],f=Math.max(n,l.from),h=-1;for(l.from>n&&u.push(new Rt(l.from-n-1).updateHeight(e,n));f<=c&&l.more;){let g=e.doc.lineAt(f).length;u.length&&u.push(null);let b=l.heights[l.index++],v=0;b<0&&(v=-b,b=l.heights[l.index++]),h==-1?h=b:Math.abs(b-h)>=Xo&&(h=-2);let S=new an(g,b,v);S.outdated=!1,u.push(S),f+=g+1}f<=c&&u.push(null,new Rt(c-f).updateHeight(e,f));let p=Ut.of(u);return(h<0||Math.abs(p.height-this.height)>=Xo||Math.abs(h-this.heightMetrics(e,n).perLine)>=Xo)&&(za=!0),lc(this,p)}else(a||this.outdated)&&(this.setHeight(e.heightForGap(n,n+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class Pk extends Ut{constructor(e,n,a){super(e.length+n+a.length,e.height+a.height,n|(e.outdated||a.outdated?2:0)),this.left=e,this.right=a,this.size=e.size+a.size}get break(){return this.flags&1}blockAt(e,n,a,l){let c=a+this.left.height;return e<c?this.left.blockAt(e,n,a,l):this.right.blockAt(e,n,c,l+this.left.length+this.break)}lineAt(e,n,a,l,c){let u=l+this.left.height,f=c+this.left.length+this.break,h=n==Xe.ByHeight?e<u:e<f,p=h?this.left.lineAt(e,n,a,l,c):this.right.lineAt(e,n,a,u,f);if(this.break||(h?p.to<f:p.from>f))return p;let g=n==Xe.ByPosNoHeight?Xe.ByPosNoHeight:Xe.ByPos;return h?p.join(this.right.lineAt(f,g,a,u,f)):this.left.lineAt(f,g,a,l,c).join(p)}forEachLine(e,n,a,l,c,u){let f=l+this.left.height,h=c+this.left.length+this.break;if(this.break)e<h&&this.left.forEachLine(e,n,a,l,c,u),n>=h&&this.right.forEachLine(e,n,a,f,h,u);else{let p=this.lineAt(h,Xe.ByPos,a,l,c);e<p.from&&this.left.forEachLine(e,p.from-1,a,l,c,u),p.to>=e&&p.from<=n&&u(p),n>p.to&&this.right.forEachLine(p.to+1,n,a,f,h,u)}}replace(e,n,a){let l=this.left.length+this.break;if(n<l)return this.balanced(this.left.replace(e,n,a),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-l,n-l,a));let c=[];e>0&&this.decomposeLeft(e,c);let u=c.length;for(let f of a)c.push(f);if(e>0&&Oy(c,u-1),n<this.length){let f=c.length;this.decomposeRight(n,c),Oy(c,f)}return Ut.of(c)}decomposeLeft(e,n){let a=this.left.length;if(e<=a)return this.left.decomposeLeft(e,n);n.push(this.left),this.break&&(a++,e>=a&&n.push(null)),e>a&&this.right.decomposeLeft(e-a,n)}decomposeRight(e,n){let a=this.left.length,l=a+this.break;if(e>=l)return this.right.decomposeRight(e-l,n);e<a&&this.left.decomposeRight(e,n),this.break&&e<l&&n.push(null),n.push(this.right)}balanced(e,n){return e.size>2*n.size||n.size>2*e.size?Ut.of(this.break?[e,null,n]:[e,n]):(this.left=lc(this.left,e),this.right=lc(this.right,n),this.setHeight(e.height+n.height),this.outdated=e.outdated||n.outdated,this.size=e.size+n.size,this.length=e.length+this.break+n.length,this)}updateHeight(e,n=0,a=!1,l){let{left:c,right:u}=this,f=n+c.length+this.break,h=null;return l&&l.from<=n+c.length&&l.more?h=c=c.updateHeight(e,n,a,l):c.updateHeight(e,n,a),l&&l.from<=f+u.length&&l.more?h=u=u.updateHeight(e,f,a,l):u.updateHeight(e,f,a),h?this.balanced(c,u):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function Oy(s,e){let n,a;s[e]==null&&(n=s[e-1])instanceof Rt&&(a=s[e+1])instanceof Rt&&s.splice(e-1,3,new Rt(n.length+1+a.length))}const Jk=5;class Oh{constructor(e,n){this.pos=e,this.oracle=n,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,n){if(this.lineStart>-1){let a=Math.min(n,this.lineEnd),l=this.nodes[this.nodes.length-1];l instanceof an?l.length+=a-this.pos:(a>this.pos||!this.isCovered)&&this.nodes.push(new an(a-this.pos,-1,0)),this.writtenTo=a,n>a&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=n}point(e,n,a){if(e<n||a.heightRelevant){let l=a.widget?a.widget.estimatedHeight:0,c=a.widget?a.widget.lineBreaks:0;l<0&&(l=this.oracle.lineHeight);let u=n-e;a.block?this.addBlock(new Rv(u,l,a)):(u||c||l>=Jk)&&this.addLineDeco(l,c,u)}else n>e&&this.span(e,n);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:n}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=n,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new an(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,n){let a=new Rt(n-e);return this.oracle.doc.lineAt(e).to==n&&(a.flags|=4),a}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof an)return e;let n=new an(0,-1,0);return this.nodes.push(n),n}addBlock(e){this.enterLine();let n=e.deco;n&&n.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,n&&n.endSide>0&&(this.covering=e)}addLineDeco(e,n,a){let l=this.ensureLine();l.length+=a,l.collapsed+=a,l.widgetHeight=Math.max(l.widgetHeight,e),l.breaks+=n,this.writtenTo=this.pos=this.pos+a}finish(e){let n=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(n instanceof an)&&!this.isCovered?this.nodes.push(new an(0,-1,0)):(this.writtenTo<this.pos||n==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let a=e;for(let l of this.nodes)l instanceof an&&l.updateHeight(this.oracle,a),a+=l?l.length:1;return this.nodes}static build(e,n,a,l){let c=new Oh(a,e);return Me.spans(n,a,l,c,0),c.finish(a)}}function Ik(s,e,n){let a=new eT;return Me.compare(s,e,n,a,0),a.changes}class eT{constructor(){this.changes=[]}compareRange(){}comparePoint(e,n,a,l){(e<n||a&&a.heightRelevant||l&&l.heightRelevant)&&Ma(e,n,this.changes,5)}}function tT(s,e){let n=s.getBoundingClientRect(),a=s.ownerDocument,l=a.defaultView||window,c=Math.max(0,n.left),u=Math.min(l.innerWidth,n.right),f=Math.max(0,n.top),h=Math.min(l.innerHeight,n.bottom);for(let p=s.parentNode;p&&p!=a.body;)if(p.nodeType==1){let g=p,b=window.getComputedStyle(g);if((g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth)&&b.overflow!="visible"){let v=g.getBoundingClientRect();c=Math.max(c,v.left),u=Math.min(u,v.right),f=Math.max(f,v.top),h=Math.min(p==s.parentNode?l.innerHeight:h,v.bottom)}p=b.position=="absolute"||b.position=="fixed"?g.offsetParent:g.parentNode}else if(p.nodeType==11)p=p.host;else break;return{left:c-n.left,right:Math.max(c,u)-n.left,top:f-(n.top+e),bottom:Math.max(f,h)-(n.top+e)}}function nT(s){let e=s.getBoundingClientRect(),n=s.ownerDocument.defaultView||window;return e.left<n.innerWidth&&e.right>0&&e.top<n.innerHeight&&e.bottom>0}function iT(s,e){let n=s.getBoundingClientRect();return{left:0,right:n.right-n.left,top:e,bottom:n.bottom-(n.top+e)}}class ld{constructor(e,n,a,l){this.from=e,this.to=n,this.size=a,this.displaySize=l}static same(e,n){if(e.length!=n.length)return!1;for(let a=0;a<e.length;a++){let l=e[a],c=n[a];if(l.from!=c.from||l.to!=c.to||l.size!=c.size)return!1}return!0}draw(e,n){return Nt.replace({widget:new sT(this.displaySize*(n?e.scaleY:e.scaleX),n)}).range(this.from,this.to)}}class sT extends vc{constructor(e,n){super(),this.size=e,this.vertical=n}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class Ny{constructor(e,n){this.view=e,this.state=n,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Dy,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=lt.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let a=n.facet(Mh).some(l=>typeof l!="function"&&l.class=="cm-lineWrapping");this.heightOracle=new Qk(a),this.stateDeco=jy(n),this.heightMap=Ut.empty().applyChanges(this.stateDeco,je.empty,this.heightOracle.setDoc(n.doc),[new vn(0,0,0,n.doc.length)]);for(let l=0;l<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());l++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Nt.set(this.lineGaps.map(l=>l.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:n}=this.state.selection;for(let a=0;a<=1;a++){let l=a?n.head:n.anchor;if(!e.some(({from:c,to:u})=>l>=c&&l<=u)){let{from:c,to:u}=this.lineBlockAt(l);e.push(new Bo(c,u))}}return this.viewports=e.sort((a,l)=>a.from-l.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Dy:new Nh(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Ur(e,this.scaler))})}update(e,n=null){this.state=e.state;let a=this.stateDeco;this.stateDeco=jy(this.state);let l=e.changedRanges,c=vn.extendWithRanges(l,Ik(a,this.stateDeco,e?e.changes:wt.empty(this.state.doc.length))),u=this.heightMap.height,f=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);Cy(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),c),(this.heightMap.height!=u||za)&&(e.flags|=2),f?(this.scrollAnchorPos=e.changes.mapPos(f.from,-1),this.scrollAnchorHeight=f.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=u);let h=c.length?this.mapViewport(this.viewport,e.changes):this.viewport;(n&&(n.range.head<h.from||n.range.head>h.to)||!this.viewportIsAppropriate(h))&&(h=this.getViewport(0,n));let p=h.from!=this.viewport.from||h.to!=this.viewport.to;this.viewport=h,e.flags|=this.updateForViewport(),(p||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),n&&(this.scrollTarget=n),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(rv)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,n=e.contentDOM,a=window.getComputedStyle(n),l=this.heightOracle,c=a.whiteSpace;this.defaultTextDirection=a.direction=="rtl"?lt.RTL:lt.LTR;let u=this.heightOracle.mustRefreshForWrapping(c)||this.mustMeasureContent==="refresh",f=n.getBoundingClientRect(),h=u||this.mustMeasureContent||this.contentDOMHeight!=f.height;this.contentDOMHeight=f.height,this.mustMeasureContent=!1;let p=0,g=0;if(f.width&&f.height){let{scaleX:B,scaleY:W}=Gb(n,f);(B>.005&&Math.abs(this.scaleX-B)>.005||W>.005&&Math.abs(this.scaleY-W)>.005)&&(this.scaleX=B,this.scaleY=W,p|=16,u=h=!0)}let b=(parseInt(a.paddingTop)||0)*this.scaleY,v=(parseInt(a.paddingBottom)||0)*this.scaleY;(this.paddingTop!=b||this.paddingBottom!=v)&&(this.paddingTop=b,this.paddingBottom=v,p|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(l.lineWrapping&&(h=!0),this.editorWidth=e.scrollDOM.clientWidth,p|=16);let S=$b(this.view.contentDOM,!1).y;S!=this.scrollParent&&(this.scrollParent=S,this.scrollAnchorHeight=-1,this.scrollOffset=0);let k=this.getScrollOffset();this.scrollOffset!=k&&(this.scrollAnchorHeight=-1,this.scrollOffset=k),this.scrolledToBottom=Kb(this.scrollParent||e.win);let T=(this.printing?iT:tT)(n,this.paddingTop),C=T.top-this.pixelViewport.top,_=T.bottom-this.pixelViewport.bottom;this.pixelViewport=T;let U=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(U!=this.inView&&(this.inView=U,U&&(h=!0)),!this.inView&&!this.scrollTarget&&!nT(e.dom))return 0;let K=f.width;if((this.contentDOMWidth!=K||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=f.width,this.editorHeight=e.scrollDOM.clientHeight,p|=16),h){let B=e.docView.measureVisibleLineHeights(this.viewport);if(l.mustRefreshForHeights(B)&&(u=!0),u||l.lineWrapping&&Math.abs(K-this.contentDOMWidth)>l.charWidth){let{lineHeight:W,charWidth:X,textHeight:te}=e.docView.measureTextSize();u=W>0&&l.refresh(c,W,X,te,Math.max(5,K/X),B),u&&(e.docView.minWidth=0,p|=16)}C>0&&_>0?g=Math.max(C,_):C<0&&_<0&&(g=Math.min(C,_)),Cy();for(let W of this.viewports){let X=W.from==this.viewport.from?B:e.docView.measureVisibleLineHeights(W);this.heightMap=(u?Ut.empty().applyChanges(this.stateDeco,je.empty,this.heightOracle,[new vn(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(l,0,u,new Fk(W.from,X))}za&&(p|=2)}let $=!this.viewportIsAppropriate(this.viewport,g)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return $&&(p&2&&(p|=this.updateScaler()),this.viewport=this.getViewport(g,this.scrollTarget),p|=this.updateForViewport()),(p&2||$)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(u?[]:this.lineGaps,e)),p|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),p}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,n){let a=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),l=this.heightMap,c=this.heightOracle,{visibleTop:u,visibleBottom:f}=this,h=new Bo(l.lineAt(u-a*1e3,Xe.ByHeight,c,0,0).from,l.lineAt(f+(1-a)*1e3,Xe.ByHeight,c,0,0).to);if(n){let{head:p}=n.range;if(p<h.from||p>h.to){let g=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),b=l.lineAt(p,Xe.ByPos,c,0,0),v;n.y=="center"?v=(b.top+b.bottom)/2-g/2:n.y=="start"||n.y=="nearest"&&p<h.from?v=b.top:v=b.bottom-g,h=new Bo(l.lineAt(v-1e3/2,Xe.ByHeight,c,0,0).from,l.lineAt(v+g+1e3/2,Xe.ByHeight,c,0,0).to)}}return h}mapViewport(e,n){let a=n.mapPos(e.from,-1),l=n.mapPos(e.to,1);return new Bo(this.heightMap.lineAt(a,Xe.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(l,Xe.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:n},a=0){if(!this.inView)return!0;let{top:l}=this.heightMap.lineAt(e,Xe.ByPos,this.heightOracle,0,0),{bottom:c}=this.heightMap.lineAt(n,Xe.ByPos,this.heightOracle,0,0),{visibleTop:u,visibleBottom:f}=this;return(e==0||l<=u-Math.max(10,Math.min(-a,250)))&&(n==this.state.doc.length||c>=f+Math.max(10,Math.min(a,250)))&&l>u-2*1e3&&c<f+2*1e3}mapLineGaps(e,n){if(!e.length||n.empty)return e;let a=[];for(let l of e)n.touchesRange(l.from,l.to)||a.push(new ld(n.mapPos(l.from),n.mapPos(l.to),l.size,l.displaySize));return a}ensureLineGaps(e,n){let a=this.heightOracle.lineWrapping,l=a?1e4:2e3,c=l>>1,u=l<<1;if(this.defaultTextDirection!=lt.LTR&&!a)return[];let f=[],h=(g,b,v,S)=>{if(b-g<c)return;let k=this.state.selection.main,T=[k.from];k.empty||T.push(k.to);for(let _ of T)if(_>g&&_<b){h(g,_-10,v,S),h(_+10,b,v,S);return}let C=rT(e,_=>_.from>=v.from&&_.to<=v.to&&Math.abs(_.from-g)<c&&Math.abs(_.to-b)<c&&!T.some(U=>_.from<U&&_.to>U));if(!C){if(b<v.to&&n&&a&&n.visibleRanges.some(K=>K.from<=b&&K.to>=b)){let K=n.moveToLineBoundary(J.cursor(b),!1,!0).head;K>g&&(b=K)}let _=this.gapSize(v,g,b,S),U=a||_<2e6?_:2e6;C=new ld(g,b,_,U)}f.push(C)},p=g=>{if(g.length<u||g.type!=Ot.Text)return;let b=aT(g.from,g.to,this.stateDeco);if(b.total<u)return;let v=this.scrollTarget?this.scrollTarget.range.head:null,S,k;if(a){let T=l/this.heightOracle.lineLength*this.heightOracle.lineHeight,C,_;if(v!=null){let U=_o(b,v),K=((this.visibleBottom-this.visibleTop)/2+T)/g.height;C=U-K,_=U+K}else C=(this.visibleTop-g.top-T)/g.height,_=(this.visibleBottom-g.top+T)/g.height;S=Lo(b,C),k=Lo(b,_)}else{let T=b.total*this.heightOracle.charWidth,C=l*this.heightOracle.charWidth,_=0;if(T>2e6)for(let W of e)W.from>=g.from&&W.from<g.to&&W.size!=W.displaySize&&W.from*this.heightOracle.charWidth+_<this.pixelViewport.left&&(_=W.size-W.displaySize);let U=this.pixelViewport.left+_,K=this.pixelViewport.right+_,$,B;if(v!=null){let W=_o(b,v),X=((K-U)/2+C)/T;$=W-X,B=W+X}else $=(U-C)/T,B=(K+C)/T;S=Lo(b,$),k=Lo(b,B)}S>g.from&&h(g.from,S,g,b),k<g.to&&h(k,g.to,g,b)};for(let g of this.viewportLines)Array.isArray(g.type)?g.type.forEach(p):p(g);return f}gapSize(e,n,a,l){let c=_o(l,a)-_o(l,n);return this.heightOracle.lineWrapping?e.height*c:l.total*this.heightOracle.charWidth*c}updateLineGaps(e){ld.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Nt.set(e.map(n=>n.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let n=this.stateDeco;this.lineGaps.length&&(n=n.concat(this.lineGapDeco));let a=[];Me.spans(n,this.viewport.from,this.viewport.to,{span(c,u){a.push({from:c,to:u})},point(){}},20);let l=0;if(a.length!=this.visibleRanges.length)l=12;else for(let c=0;c<a.length&&!(l&8);c++){let u=this.visibleRanges[c],f=a[c];(u.from!=f.from||u.to!=f.to)&&(l|=4,e&&e.mapPos(u.from,-1)==f.from&&e.mapPos(u.to,1)==f.to||(l|=8))}return this.visibleRanges=a,l}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(n=>n.from<=e&&n.to>=e)||Ur(this.heightMap.lineAt(e,Xe.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(n=>n.top<=e&&n.bottom>=e)||Ur(this.heightMap.lineAt(this.scaler.fromDOM(e),Xe.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let n=this.lineBlockAtHeight(e+8);return n.from>=this.viewport.from||this.viewportLines[0].top-e>200?n:this.viewportLines[0]}elementAtHeight(e){return Ur(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Bo{constructor(e,n){this.from=e,this.to=n}}function aT(s,e,n){let a=[],l=s,c=0;return Me.spans(n,s,e,{span(){},point(u,f){u>l&&(a.push({from:l,to:u}),c+=u-l),l=f}},20),l<e&&(a.push({from:l,to:e}),c+=e-l),{total:c,ranges:a}}function Lo({total:s,ranges:e},n){if(n<=0)return e[0].from;if(n>=1)return e[e.length-1].to;let a=Math.floor(s*n);for(let l=0;;l++){let{from:c,to:u}=e[l],f=u-c;if(a<=f)return c+a;a-=f}}function _o(s,e){let n=0;for(let{from:a,to:l}of s.ranges){if(e<=l){n+=e-a;break}n+=l-a}return n/s.total}function rT(s,e){for(let n of s)if(e(n))return n}const Dy={toDOM(s){return s},fromDOM(s){return s},scale:1,eq(s){return s==this}};function jy(s){let e=s.facet(xc).filter(a=>typeof a!="function"),n=s.facet(Rh).filter(a=>typeof a!="function");return n.length&&e.push(Me.join(n)),e}class Nh{constructor(e,n,a){let l=0,c=0,u=0;this.viewports=a.map(({from:f,to:h})=>{let p=n.lineAt(f,Xe.ByPos,e,0,0).top,g=n.lineAt(h,Xe.ByPos,e,0,0).bottom;return l+=g-p,{from:f,to:h,top:p,bottom:g,domTop:0,domBottom:0}}),this.scale=(7e6-l)/(n.height-l);for(let f of this.viewports)f.domTop=u+(f.top-c)*this.scale,u=f.domBottom=f.domTop+(f.bottom-f.top),c=f.bottom}toDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.top)return l+(e-a)*this.scale;if(e<=c.bottom)return c.domTop+(e-c.top);a=c.bottom,l=c.domBottom}}fromDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.domTop)return a+(e-l)/this.scale;if(e<=c.domBottom)return c.top+(e-c.domTop);a=c.bottom,l=c.domBottom}}eq(e){return e instanceof Nh?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((n,a)=>n.from==e.viewports[a].from&&n.to==e.viewports[a].to):!1}}function Ur(s,e){if(e.scale==1)return s;let n=e.toDOM(s.top),a=e.toDOM(s.bottom);return new kn(s.from,s.length,n,a-n,Array.isArray(s._content)?s._content.map(l=>Ur(l,e)):s._content)}const Ho=ce.define({combine:s=>s.join(" ")}),th=ce.define({combine:s=>s.indexOf(!0)>-1}),nh=Na.newName(),Cv=Na.newName(),Ov=Na.newName(),Nv={"&light":"."+Cv,"&dark":"."+Ov};function ih(s,e,n){return new Na(e,{finish(a){return/&/.test(a)?a.replace(/&\w*/,l=>{if(l=="&")return s;if(!n||!n[l])throw new RangeError(`Unsupported selector: ${l}`);return n[l]}):s+" "+a}})}const lT=ih("."+nh,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Nv),oT={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},od=P.ie&&P.ie_version<=11;class cT{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new qw,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(n=>{for(let a of n)this.queue.push(a);(P.ie&&P.ie_version<=11||P.ios&&e.composing)&&n.some(a=>a.type=="childList"&&a.removedNodes.length||a.type=="characterData"&&a.oldValue.length>a.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&P.android&&e.constructor.EDIT_CONTEXT!==!1&&!(P.chrome&&P.chrome_version<126)&&(this.editContext=new fT(e),e.state.facet(si)&&(e.contentDOM.editContext=this.editContext.editContext)),od&&(this.onCharData=n=>{this.queue.push({target:n.target,type:"characterData",oldValue:n.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var n;((n=this.view.docView)===null||n===void 0?void 0:n.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),n.length>0&&n[n.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(n=>{n.length>0&&n[n.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((n,a)=>n!=e[a]))){this.gapIntersection.disconnect();for(let n of e)this.gapIntersection.observe(n);this.gaps=e}}onSelectionChange(e){let n=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:a}=this,l=this.selectionRange;if(a.state.facet(si)?a.root.activeElement!=this.dom:!Wr(this.dom,l))return;let c=l.anchorNode&&a.docView.tile.nearest(l.anchorNode);if(c&&c.isWidget()&&c.widget.ignoreEvent(e)){n||(this.selectionChanged=!1);return}(P.ie&&P.ie_version<=11||P.android&&P.chrome)&&!a.state.selection.main.empty&&l.focusNode&&Xr(l.focusNode,l.focusOffset,l.anchorNode,l.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,n=nl(e.root);if(!n)return!1;let a=P.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&uT(this.view,n)||n;if(!a||this.selectionRange.eq(a))return!1;let l=Wr(this.dom,a);return l&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Vw(this.dom,a)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(a),l&&(this.selectionChanged=!0),!0)}setSelectionRange(e,n){this.selectionRange.set(e.node,e.offset,n.node,n.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,n=null;for(let a=this.dom;a;)if(a.nodeType==1)!n&&e<this.scrollTargets.length&&this.scrollTargets[e]==a?e++:n||(n=this.scrollTargets.slice(0,e)),n&&n.push(a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;if(e<this.scrollTargets.length&&!n&&(n=this.scrollTargets.slice(0,e)),n){for(let a of this.scrollTargets)a.removeEventListener("scroll",this.onScroll);for(let a of this.scrollTargets=n)a.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,oT),od&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),od&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,n){var a;if(!this.delayedAndroidKey){let l=()=>{let c=this.delayedAndroidKey;c&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=c.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&c.force&&Ra(this.dom,c.key,c.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(l)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:n,force:this.lastChange<Date.now()-50||!!(!((a=this.delayedAndroidKey)===null||a===void 0)&&a.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let n=-1,a=-1,l=!1;for(let c of e){let u=this.readMutation(c);u&&(u.typeOver&&(l=!0),n==-1?{from:n,to:a}=u:(n=Math.min(u.from,n),a=Math.max(u.to,a)))}return{from:n,to:a,typeOver:l}}readChange(){let{from:e,to:n,typeOver:a}=this.processRecords(),l=this.selectionChanged&&Wr(this.dom,this.selectionRange);if(e<0&&!l)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let c=new Rk(this.view,e,n,a);return this.view.docView.domChanged={newSel:c.newSel?c.newSel.main:null},c}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let n=this.readChange();if(!n)return this.view.requestMeasure(),!1;let a=this.view.state,l=bv(this.view,n);return this.view.state==a&&(n.domChanged||n.newSel&&!rc(this.view.state.selection,n.newSel.main))&&this.view.update([]),l}readMutation(e){let n=this.view.docView.tile.nearest(e.target);if(!n||n.isWidget())return null;if(n.markDirty(e.type=="attributes"),e.type=="childList"){let a=zy(n,e.previousSibling||e.target.previousSibling,-1),l=zy(n,e.nextSibling||e.target.nextSibling,1);return{from:a?n.posAfter(a):n.posAtStart,to:l?n.posBefore(l):n.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(si)!=e.state.facet(si)&&(e.view.contentDOM.editContext=e.state.facet(si)?this.editContext.editContext:null))}destroy(){var e,n,a;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(n=this.gapIntersection)===null||n===void 0||n.disconnect(),(a=this.resizeScroll)===null||a===void 0||a.disconnect();for(let l of this.scrollTargets)l.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function zy(s,e,n){for(;e;){let a=it.get(e);if(a&&a.parent==s)return a;let l=e.parentNode;e=l!=s.dom?l:n>0?e.nextSibling:e.previousSibling}return null}function By(s,e){let n=e.startContainer,a=e.startOffset,l=e.endContainer,c=e.endOffset,u=s.docView.domAtPos(s.state.selection.main.anchor,1);return Xr(u.node,u.offset,l,c)&&([n,a,l,c]=[l,c,n,a]),{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}}function uT(s,e){if(e.getComposedRanges){let l=e.getComposedRanges(s.root)[0];if(l)return By(s,l)}let n=null;function a(l){l.preventDefault(),l.stopImmediatePropagation(),n=l.getTargetRanges()[0]}return s.contentDOM.addEventListener("beforeinput",a,!0),s.dom.ownerDocument.execCommand("indent"),s.contentDOM.removeEventListener("beforeinput",a,!0),n?By(s,n):null}class fT{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let n=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=a=>{let l=e.state.selection.main,{anchor:c,head:u}=l,f=this.toEditorPos(a.updateRangeStart),h=this.toEditorPos(a.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:a.updateRangeStart,editorBase:f,drifted:!1});let p=h-f>a.text.length;f==this.from&&c<this.from?f=c:h==this.to&&c>this.to&&(h=c);let g=vv(e.state.sliceDoc(f,h),a.text,(p?l.from:l.to)-f,p?"end":null);if(!g){let v=J.single(this.toEditorPos(a.selectionStart),this.toEditorPos(a.selectionEnd));rc(v,l)||e.dispatch({selection:v,userEvent:"select"});return}let b={from:g.from+f,to:g.toA+f,insert:je.of(a.text.slice(g.from,g.toB).split(`
`))};if((P.mac||P.android)&&b.from==u-1&&/^\. ?$/.test(a.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(b={from:f,to:h,insert:je.of([a.text.replace("."," ")])}),this.pendingContextChange=b,!e.state.readOnly){let v=this.to-this.from+(b.to-b.from+b.insert.length);Ch(e,b,J.single(this.toEditorPos(a.selectionStart,v),this.toEditorPos(a.selectionEnd,v)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),b.from<b.to&&!b.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(n.text.slice(Math.max(0,a.updateRangeStart-1),Math.min(n.text.length,a.updateRangeStart+1)))&&this.handlers.compositionend(a)},this.handlers.characterboundsupdate=a=>{let l=[],c=null;for(let u=this.toEditorPos(a.rangeStart),f=this.toEditorPos(a.rangeEnd);u<f;u++){let h=e.coordsForChar(u);c=h&&new DOMRect(h.left,h.top,h.right-h.left,h.bottom-h.top)||c||new DOMRect,l.push(c)}n.updateCharacterBounds(a.rangeStart,l)},this.handlers.textformatupdate=a=>{let l=[];for(let c of a.getTextFormats()){let u=c.underlineStyle,f=c.underlineThickness;if(!/none/i.test(u)&&!/none/i.test(f)){let h=this.toEditorPos(c.rangeStart),p=this.toEditorPos(c.rangeEnd);if(h<p){let g=`text-decoration: underline ${/^[a-z]/.test(u)?u+" ":u=="Dashed"?"dashed ":u=="Squiggle"?"wavy ":""}${/thin/i.test(f)?1:2}px`;l.push(Nt.mark({attributes:{style:g}}).range(h,p))}}}e.dispatch({effects:ov.of(Nt.set(l))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:a}=this.composing;this.composing=null,a&&this.reset(e.state)}};for(let a in this.handlers)n.addEventListener(a,this.handlers[a]);this.measureReq={read:a=>{this.editContext.updateControlBounds(a.contentDOM.getBoundingClientRect());let l=nl(a.root);l&&l.rangeCount&&this.editContext.updateSelectionBounds(l.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let n=0,a=!1,l=this.pendingContextChange;return e.changes.iterChanges((c,u,f,h,p)=>{if(a)return;let g=p.length-(u-c);if(l&&u>=l.to)if(l.from==c&&l.to==u&&l.insert.eq(p)){l=this.pendingContextChange=null,n+=g,this.to+=g;return}else l=null,this.revertPending(e.state);if(c+=n,u+=n,u<=this.from)this.from+=g,this.to+=g;else if(c<this.to){if(c<this.from||u>this.to||this.to-this.from+p.length>3e4){a=!0;return}this.editContext.updateText(this.toContextPos(c),this.toContextPos(u),p.toString()),this.to+=g}n+=g}),l&&!a&&this.revertPending(e.state),!a}update(e){let n=this.pendingContextChange,a=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(a.from,a.to)&&e.transactions.some(l=>!l.isUserEvent("input.type")&&l.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||n)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:n}=e.selection.main;this.from=Math.max(0,n-1e4),this.to=Math.min(e.doc.length,n+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let n=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(n.from),this.toContextPos(n.from+n.insert.length),e.doc.sliceString(n.from,n.to))}setSelection(e){let{main:n}=e.selection,a=this.toContextPos(Math.max(this.from,Math.min(this.to,n.anchor))),l=this.toContextPos(n.head);(this.editContext.selectionStart!=a||this.editContext.selectionEnd!=l)&&this.editContext.updateSelection(a,l)}rangeIsValid(e){let{head:n}=e.selection.main;return!(this.from>0&&n-this.from<500||this.to<e.doc.length&&this.to-n<500||this.to-this.from>1e4*3)}toEditorPos(e,n=this.to-this.from){e=Math.min(e,n);let a=this.composing;return a&&a.drifted?a.editorBase+(e-a.contextBase):e+this.from}toContextPos(e){let n=this.composing;return n&&n.drifted?n.contextBase+(e-n.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class ge{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var n;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:a}=e;this.dispatchTransactions=e.dispatchTransactions||a&&(l=>l.forEach(c=>a(c,this)))||(l=>this.update(l)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Uw(e.parent)||document,this.viewState=new Ny(this,e.state||$e.create(e)),e.scrollTo&&e.scrollTo.is(Do)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(ka).map(l=>new nd(l));for(let l of this.plugins)l.update(this);this.observer=new cT(this),this.inputState=new Dk(this),this.inputState.ensureHandlers(this.plugins),this.docView=new by(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((n=document.fonts)===null||n===void 0)&&n.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...e){let n=e.length==1&&e[0]instanceof zt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(n,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let n=!1,a=!1,l,c=this.state;for(let v of e){if(v.startState!=c)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");c=v.state}if(this.destroyed){this.viewState.state=c;return}let u=this.hasFocus,f=0,h=null;e.some(v=>v.annotation(Av))?(this.inputState.notifiedFocused=u,f=1):u!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=u,h=Ev(c,u),h||(f=1));let p=this.observer.delayedAndroidKey,g=null;if(p?(this.observer.clearDelayedAndroidKey(),g=this.observer.readChange(),(g&&!this.state.doc.eq(c.doc)||!this.state.selection.eq(c.selection))&&(g=null)):this.observer.clear(),c.facet($e.phrases)!=this.state.facet($e.phrases))return this.setState(c);l=ic.create(this,c,e),l.flags|=f;let b=this.viewState.scrollTarget;try{this.updateState=2;for(let v of e){if(b&&(b=b.map(v.changes)),v.scrollIntoView){let{main:S}=v.state.selection,{x:k,y:T}=this.state.facet(ge.cursorScrollMargin);b=new Ca(S.empty?S:J.cursor(S.head,S.head>S.anchor?-1:1),"nearest","nearest",T,k)}for(let S of v.effects)S.is(Do)&&(b=S.value.clip(this.state))}this.viewState.update(l,b),this.bidiCache=oc.update(this.bidiCache,l.changes),l.empty||(this.updatePlugins(l),this.inputState.update(l)),n=this.docView.update(l),this.state.facet(qr)!=this.styleModules&&this.mountStyles(),a=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(n,e.some(v=>v.isUserEvent("select.pointer")))}finally{this.updateState=0}if(l.startState.facet(Ho)!=l.state.facet(Ho)&&(this.viewState.mustMeasureContent=!0),(n||a||b||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!l.empty)for(let v of this.state.facet(Zd))try{v(l)}catch(S){ri(this.state,S,"update listener")}(h||g)&&Promise.resolve().then(()=>{h&&this.state==h.startState&&this.dispatch(h),g&&!bv(this,g)&&p.force&&Ra(this.contentDOM,p.key,p.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let n=this.hasFocus;try{for(let a of this.plugins)a.destroy(this);this.viewState=new Ny(this,e),this.plugins=e.facet(ka).map(a=>new nd(a)),this.pluginMap.clear();for(let a of this.plugins)a.update(this);this.docView.destroy(),this.docView=new by(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}n&&this.focus(),this.requestMeasure()}updatePlugins(e){let n=e.startState.facet(ka),a=e.state.facet(ka);if(n!=a){let l=[];for(let c of a){let u=n.indexOf(c);if(u<0)l.push(new nd(c));else{let f=this.plugins[u];f.mustUpdate=e,l.push(f)}}for(let c of this.plugins)c.mustUpdate!=e&&c.destroy(this);this.plugins=l,this.pluginMap.clear()}else for(let l of this.plugins)l.mustUpdate=e;for(let l=0;l<this.plugins.length;l++)this.plugins[l].update(this);n!=a&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let n=e.value;if(n&&n.docViewUpdate)try{n.docViewUpdate(this)}catch(a){ri(this.state,a,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let n=null,a=this.viewState.scrollParent,l=this.viewState.getScrollOffset(),{scrollAnchorPos:c,scrollAnchorHeight:u}=this.viewState;Math.abs(l-this.viewState.scrollOffset)>1&&(u=-1),this.viewState.scrollAnchorHeight=-1;try{for(let f=0;;f++){if(u<0)if(Kb(a||this.win))c=-1,u=this.viewState.heightMap.height;else{let S=this.viewState.scrollAnchorAt(l);c=S.from,u=S.top}this.updateState=1;let h=this.viewState.measure();if(!h&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(f>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let p=[];h&4||([this.measureRequests,p]=[p,this.measureRequests]);let g=p.map(S=>{try{return S.read(this)}catch(k){return ri(this.state,k),Ly}}),b=ic.create(this,this.state,[]),v=!1;b.flags|=h,n?n.flags|=h:n=b,this.updateState=2,b.empty||(this.updatePlugins(b),this.inputState.update(b),this.updateAttrs(),v=this.docView.update(b),v&&this.docViewUpdate());for(let S=0;S<p.length;S++)if(g[S]!=Ly)try{let k=p[S];k.write&&k.write(g[S],this)}catch(k){ri(this.state,k)}if(v&&this.docView.updateSelection(!0),!b.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,u=-1;continue}else{let k=((c<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(c).top)-u)/this.scaleY;if((k>1||k<-1)&&(a==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){l=l+k,a?a.scrollTop+=k:this.win.scrollBy(0,k),u=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(n&&!n.empty)for(let f of this.state.facet(Zd))f(n)}get themeClasses(){return nh+" "+(this.state.facet(th)?Ov:Cv)+" "+this.state.facet(Ho)}updateAttrs(){let e=_y(this,cv,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),n={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(si)?"true":"false",class:"cm-content",style:`${P.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(n["aria-readonly"]="true"),_y(this,Mh,n);let a=this.observer.ignore(()=>{let l=dy(this.contentDOM,this.contentAttrs,n),c=dy(this.dom,this.editorAttrs,e);return l||c});return this.editorAttrs=e,this.contentAttrs=n,a}showAnnouncements(e){let n=!0;for(let a of e)for(let l of a.effects)if(l.is(ge.announce)){n&&(this.announceDOM.textContent=""),n=!1;let c=this.announceDOM.appendChild(document.createElement("div"));c.textContent=l.value}}mountStyles(){this.styleModules=this.state.facet(qr);let e=this.state.facet(ge.cspNonce);Na.mount(this.root,this.styleModules.concat(lT).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let n=0;n<this.measureRequests.length;n++)if(this.measureRequests[n].key===e.key){this.measureRequests[n]=e;return}}this.measureRequests.push(e)}}plugin(e){let n=this.pluginMap.get(e);return(n===void 0||n&&n.plugin!=e)&&this.pluginMap.set(e,n=this.plugins.find(a=>a.plugin==e)||null),n&&n.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,n,a){return rd(this,e,vy(this,e,n,a))}moveByGroup(e,n){return rd(this,e,vy(this,e,n,a=>wk(this,e.head,a)))}visualLineSide(e,n){let a=this.bidiSpans(e),l=this.textDirectionAt(e.from),c=a[n?a.length-1:0];return J.cursor(c.side(n,l)+e.from,c.forward(!n,l)?1:-1)}moveToLineBoundary(e,n,a=!0){return Sk(this,e,n,a)}moveVertically(e,n,a){return rd(this,e,kk(this,e,n,a))}domAtPos(e,n=1){return this.docView.domAtPos(e,n)}posAtDOM(e,n=0){return this.docView.posFromDOM(e,n)}posAtCoords(e,n=!0){this.readMeasured();let a=Id(this,e,n);return a&&a.pos}posAndSideAtCoords(e,n=!0){return this.readMeasured(),Id(this,e,n)}coordsAtPos(e,n=1){this.readMeasured();let a=this.docView.coordsAt(e,n);if(!a||a.left==a.right)return a;let l=this.state.doc.lineAt(e),c=this.bidiSpans(l),u=c[Ln.find(c,e-l.from,-1,n)];return nc(a,u.dir==lt.LTR==n>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(av)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>dT)return Pb(e.length);let n=this.textDirectionAt(e.from),a;for(let c of this.bidiCache)if(c.from==e.from&&c.dir==n&&(c.fresh||Zb(c.isolates,a=py(this,e))))return c.order;a||(a=py(this,e));let l=Qw(e.text,n,a);return this.bidiCache.push(new oc(e.from,e.to,n,a,!0,l)),l}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||P.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Yb(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,n={}){var a,l,c,u;return Do.of(new Ca(typeof e=="number"?J.cursor(e):e,(a=n.y)!==null&&a!==void 0?a:"nearest",(l=n.x)!==null&&l!==void 0?l:"nearest",(c=n.yMargin)!==null&&c!==void 0?c:5,(u=n.xMargin)!==null&&u!==void 0?u:5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:n}=this.scrollDOM,a=this.viewState.scrollAnchorAt(e);return Do.of(new Ca(J.cursor(a.from),"start","start",a.top-e,n,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Ms.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Ms.define(()=>({}),{eventObservers:e})}static theme(e,n){let a=Na.newName(),l=[Ho.of(a),qr.of(ih(`.${a}`,e))];return n&&n.dark&&l.push(th.of(!0)),l}static baseTheme(e){return vh.lowest(qr.of(ih("."+nh,e,Nv)))}static findFromDOM(e){var n;let a=e.querySelector(".cm-content"),l=a&&it.get(a)||it.get(e);return((n=l?.root)===null||n===void 0?void 0:n.view)||null}}ge.styleModule=qr;ge.inputHandler=iv;ge.clipboardInputFilter=Ah;ge.clipboardOutputFilter=Eh;ge.scrollHandler=lv;ge.focusChangeEffect=sv;ge.perLineTextDirection=av;ge.exceptionSink=nv;ge.updateListener=Zd;ge.editable=si;ge.mouseSelectionStyle=tv;ge.dragMovesSelection=ev;ge.clickAddsSelectionRange=Ib;ge.decorations=xc;ge.blockWrappers=uv;ge.outerDecorations=Rh;ge.atomicRanges=cl;ge.bidiIsolatedRanges=fv;ge.cursorScrollMargin=ce.define({combine:s=>{let e=5,n=5;for(let a of s)typeof a=="number"?e=n=a:{x:e,y:n}=a;return{x:e,y:n}}});ge.scrollMargins=dv;ge.darkTheme=th;ge.cspNonce=ce.define({combine:s=>s.length?s[0]:""});ge.contentAttributes=Mh;ge.editorAttributes=cv;ge.lineWrapping=ge.contentAttributes.of({class:"cm-lineWrapping"});ge.announce=mt.define();const dT=4096,Ly={};class oc{constructor(e,n,a,l,c,u){this.from=e,this.to=n,this.dir=a,this.isolates=l,this.fresh=c,this.order=u}static update(e,n){if(n.empty&&!e.some(c=>c.fresh))return e;let a=[],l=e.length?e[e.length-1].dir:lt.LTR;for(let c=Math.max(0,e.length-10);c<e.length;c++){let u=e[c];u.dir==l&&!n.touchesRange(u.from,u.to)&&a.push(new oc(n.mapPos(u.from,1),n.mapPos(u.to,-1),u.dir,u.isolates,!1,u.order))}return a}}function _y(s,e,n){for(let a=s.state.facet(e),l=a.length-1;l>=0;l--){let c=a[l],u=typeof c=="function"?c(s):c;u&&wh(u,n)}return n}const hT=P.mac?"mac":P.windows?"win":P.linux?"linux":"key";function mT(s,e){const n=s.split(/-(?!$)/);let a=n[n.length-1];a=="Space"&&(a=" ");let l,c,u,f;for(let h=0;h<n.length-1;++h){const p=n[h];if(/^(cmd|meta|m)$/i.test(p))f=!0;else if(/^a(lt)?$/i.test(p))l=!0;else if(/^(c|ctrl|control)$/i.test(p))c=!0;else if(/^s(hift)?$/i.test(p))u=!0;else if(/^mod$/i.test(p))e=="mac"?f=!0:c=!0;else throw new Error("Unrecognized modifier name: "+p)}return l&&(a="Alt-"+a),c&&(a="Ctrl-"+a),f&&(a="Meta-"+a),u&&(a="Shift-"+a),a}function qo(s,e,n){return e.altKey&&(s="Alt-"+s),e.ctrlKey&&(s="Ctrl-"+s),e.metaKey&&(s="Meta-"+s),n!==!1&&e.shiftKey&&(s="Shift-"+s),s}const pT=vh.default(ge.domEventHandlers({keydown(s,e){return vT(gT(e.state),s,e,"editor")}})),Dv=ce.define({enables:pT}),Hy=new WeakMap;function gT(s){let e=s.facet(Dv),n=Hy.get(e);return n||Hy.set(e,n=bT(e.reduce((a,l)=>a.concat(l),[]))),n}let qi=null;const yT=4e3;function bT(s,e=hT){let n=Object.create(null),a=Object.create(null),l=(u,f)=>{let h=a[u];if(h==null)a[u]=f;else if(h!=f)throw new Error("Key binding "+u+" is used both as a regular binding and as a multi-stroke prefix")},c=(u,f,h,p,g)=>{var b,v;let S=n[u]||(n[u]=Object.create(null)),k=f.split(/ (?!$)/).map(_=>mT(_,e));for(let _=1;_<k.length;_++){let U=k.slice(0,_).join(" ");l(U,!0),S[U]||(S[U]={preventDefault:!0,stopPropagation:!1,run:[K=>{let $=qi={view:K,prefix:U,scope:u};return setTimeout(()=>{qi==$&&(qi=null)},yT),!0}]})}let T=k.join(" ");l(T,!1);let C=S[T]||(S[T]={preventDefault:!1,stopPropagation:!1,run:((v=(b=S._any)===null||b===void 0?void 0:b.run)===null||v===void 0?void 0:v.slice())||[]});h&&C.run.push(h),p&&(C.preventDefault=!0),g&&(C.stopPropagation=!0)};for(let u of s){let f=u.scope?u.scope.split(" "):["editor"];if(u.any)for(let p of f){let g=n[p]||(n[p]=Object.create(null));g._any||(g._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:b}=u;for(let v in g)g[v].run.push(S=>b(S,sh))}let h=u[e]||u.key;if(h)for(let p of f)c(p,h,u.run,u.preventDefault,u.stopPropagation),u.shift&&c(p,"Shift-"+h,u.shift,u.preventDefault,u.stopPropagation)}return n}let sh=null;function vT(s,e,n,a){sh=e;let l=jw(e),c=pw(l,0),u=gw(c)==l.length&&l!=" ",f="",h=!1,p=!1,g=!1;qi&&qi.view==n&&qi.scope==a&&(f=qi.prefix+" ",Sv.indexOf(e.keyCode)<0&&(p=!0,qi=null));let b=new Set,v=C=>{if(C){for(let _ of C.run)if(!b.has(_)&&(b.add(_),_(n)))return C.stopPropagation&&(g=!0),!0;C.preventDefault&&(C.stopPropagation&&(g=!0),p=!0)}return!1},S=s[a],k,T;return S&&(v(S[f+qo(l,e,!u)])?h=!0:u&&(e.altKey||e.metaKey||e.ctrlKey)&&!(P.windows&&e.ctrlKey&&e.altKey)&&!(P.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(k=Yi[e.keyCode])&&k!=l?(v(S[f+qo(k,e,!0)])||e.shiftKey&&(T=el[e.keyCode])!=l&&T!=k&&v(S[f+qo(T,e,!1)]))&&(h=!0):u&&e.shiftKey&&v(S[f+qo(l,e,!0)])&&(h=!0),!h&&v(S._any)&&(h=!0)),p&&(h=!0),h&&g&&e.stopPropagation(),sh=null,h}class ws{constructor(e,n,a,l,c){this.className=e,this.left=n,this.top=a,this.width=l,this.height=c}draw(){let e=document.createElement("div");return e.className=this.className,this.adjust(e),e}update(e,n){return n.className!=this.className?!1:(this.adjust(e),!0)}adjust(e){e.style.left=this.left+"px",e.style.top=this.top+"px",this.width!=null&&(e.style.width=this.width+"px"),e.style.height=this.height+"px"}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(e,n,a){if(a.empty){let l=e.coordsAtPos(a.head,a.assoc||1);if(!l)return[];let c=jv(e);return[new ws(n,l.left-c.left,l.top-c.top,null,l.bottom-l.top)]}else return xT(e,n,a)}}function jv(s){let e=s.scrollDOM.getBoundingClientRect();return{left:(s.textDirection==lt.LTR?e.left:e.right-s.scrollDOM.clientWidth*s.scaleX)-s.scrollDOM.scrollLeft*s.scaleX,top:e.top-s.scrollDOM.scrollTop*s.scaleY}}function qy(s,e,n,a){let l=s.coordsAtPos(e,n*2);if(!l)return a;let c=s.dom.getBoundingClientRect(),u=(l.top+l.bottom)/2,f=s.posAtCoords({x:c.left+1,y:u}),h=s.posAtCoords({x:c.right-1,y:u});return f==null||h==null?a:{from:Math.max(a.from,Math.min(f,h)),to:Math.min(a.to,Math.max(f,h))}}function xT(s,e,n){if(n.to<=s.viewport.from||n.from>=s.viewport.to)return[];let a=Math.max(n.from,s.viewport.from),l=Math.min(n.to,s.viewport.to),c=s.textDirection==lt.LTR,u=s.contentDOM,f=u.getBoundingClientRect(),h=jv(s),p=u.querySelector(".cm-line"),g=p&&window.getComputedStyle(p),b=f.left+(g?parseInt(g.paddingLeft)+Math.min(0,parseInt(g.textIndent)):0),v=f.right-(g?parseInt(g.paddingRight):0),S=Jd(s,a,1),k=Jd(s,l,-1),T=S.type==Ot.Text?S:null,C=k.type==Ot.Text?k:null;if(T&&(s.lineWrapping||S.widgetLineBreaks)&&(T=qy(s,a,1,T)),C&&(s.lineWrapping||k.widgetLineBreaks)&&(C=qy(s,l,-1,C)),T&&C&&T.from==C.from&&T.to==C.to)return U(K(n.from,n.to,T));{let B=T?K(n.from,null,T):$(S,!1),W=C?K(null,n.to,C):$(k,!0),X=[];return(T||S).to<(C||k).from-(T&&C?1:0)||S.widgetLineBreaks>1&&B.bottom+s.defaultLineHeight/2<W.top?X.push(_(b,B.bottom,v,W.top)):B.bottom<W.top&&s.elementAtHeight((B.bottom+W.top)/2).type==Ot.Text&&(B.bottom=W.top=(B.bottom+W.top)/2),U(B).concat(X).concat(U(W))}function _(B,W,X,te){return new ws(e,B-h.left,W-h.top,Math.max(0,X-B),te-W)}function U({top:B,bottom:W,horizontal:X}){let te=[];for(let me=0;me<X.length;me+=2)te.push(_(X[me],B,X[me+1],W));return te}function K(B,W,X){let te=1e9,me=-1e9,Ke=[];function ot(Le,We,H,Q,ie){let I=s.coordsAtPos(Le,Le==X.to?-2:2),ae=s.coordsAtPos(H,H==X.from?2:-2);!I||!ae||(te=Math.min(I.top,ae.top,te),me=Math.max(I.bottom,ae.bottom,me),ie==lt.LTR?Ke.push(c&&We?b:I.left,c&&Q?v:ae.right):Ke.push(!c&&Q?b:ae.left,!c&&We?v:I.right))}let Ne=B??X.from,yt=W??X.to;for(let Le of s.visibleRanges)if(Le.to>Ne&&Le.from<yt)for(let We=Math.max(Le.from,Ne),H=Math.min(Le.to,yt);;){let Q=s.state.doc.lineAt(We);for(let ie of s.bidiSpans(Q)){let I=ie.from+Q.from,ae=ie.to+Q.from;if(I>=H)break;ae>We&&ot(Math.max(I,We),B==null&&I<=Ne,Math.min(ae,H),W==null&&ae>=yt,ie.dir)}if(We=Q.to+1,We>=H)break}return Ke.length==0&&ot(Ne,B==null,yt,W==null,s.textDirection),{top:te,bottom:me,horizontal:Ke}}function $(B,W){let X=f.top+(W?B.top:B.bottom);return{top:X,bottom:X,horizontal:[]}}}function ST(s,e){return s.constructor==e.constructor&&s.eq(e)}class wT{constructor(e,n){this.view=e,this.layer=n,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),n.above&&this.dom.classList.add("cm-layer-above"),n.class&&this.dom.classList.add(n.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(e.state),e.requestMeasure(this.measureReq),n.mount&&n.mount(this.dom,e)}update(e){e.startState.facet(Qo)!=e.state.facet(Qo)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let n=0,a=e.facet(Qo);for(;n<a.length&&a[n]!=this.layer;)n++;this.dom.style.zIndex=String((this.layer.above?150:-1)-n)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:n}=this.view;(e!=this.scaleX||n!=this.scaleY)&&(this.scaleX=e,this.scaleY=n,this.dom.style.transform=`scale(${1/e}, ${1/n})`)}draw(e){if(e.length!=this.drawn.length||e.some((n,a)=>!ST(n,this.drawn[a]))){let n=this.dom.firstChild,a=0;for(let l of e)l.update&&n&&l.constructor&&this.drawn[a].constructor&&l.update(n,this.drawn[a])?(n=n.nextSibling,a++):this.dom.insertBefore(l.draw(),n);for(;n;){let l=n.nextSibling;n.remove(),n=l}this.drawn=e,P.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Qo=ce.define();function zv(s){return[Ms.define(e=>new wT(e,s)),Qo.of(s)]}const Ba=ce.define({combine(s){return Hb(s,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,n)=>Math.min(e,n),drawRangeCursor:(e,n)=>e||n})}});function kT(s={}){return[Ba.of(s),TT,AT,ET,rv.of(!0)]}function Bv(s){return s.startState.facet(Ba)!=s.state.facet(Ba)}const TT=zv({above:!0,markers(s){let{state:e}=s,n=e.facet(Ba),a=[];for(let l of e.selection.ranges){let c=l==e.selection.main;if(l.empty||n.drawRangeCursor&&!(c&&P.ios&&n.iosSelectionHandles)){let u=c?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",f=l.empty?l:J.cursor(l.head,l.assoc);for(let h of ws.forRange(s,u,f))a.push(h)}}return a},update(s,e){s.transactions.some(a=>a.selection)&&(e.style.animationName=e.style.animationName=="cm-blink"?"cm-blink2":"cm-blink");let n=Bv(s);return n&&Uy(s.state,e),s.docChanged||s.selectionSet||n},mount(s,e){Uy(e.state,s)},class:"cm-cursorLayer"});function Uy(s,e){e.style.animationDuration=s.facet(Ba).cursorBlinkRate+"ms"}const AT=zv({above:!1,markers(s){let e=[],{main:n,ranges:a}=s.state.selection;for(let l of a)if(!l.empty)for(let c of ws.forRange(s,"cm-selectionBackground",l))e.push(c);if(P.ios&&!n.empty&&s.state.facet(Ba).iosSelectionHandles){for(let l of ws.forRange(s,"cm-selectionHandle cm-selectionHandle-start",J.cursor(n.from,1)))e.push(l);for(let l of ws.forRange(s,"cm-selectionHandle cm-selectionHandle-end",J.cursor(n.to,1)))e.push(l)}return e},update(s,e){return s.docChanged||s.selectionSet||s.viewportChanged||Bv(s)},class:"cm-selectionLayer"}),ET=vh.highest(ge.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}}));class Cs extends Ts{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}Cs.prototype.elementClass="";Cs.prototype.toDOM=void 0;Cs.prototype.mapMode=on.TrackBefore;Cs.prototype.startSide=Cs.prototype.endSide=-1;Cs.prototype.point=!0;const cd=ce.define(),MT=ce.define(),Fo=ce.define(),Vy=ce.define({combine:s=>s.some(e=>e)});function RT(s){return[CT]}const CT=Ms.fromClass(class{constructor(s){this.view=s,this.domAfter=null,this.prevViewport=s.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=s.state.facet(Fo).map(e=>new $y(s,e)),this.fixed=!s.state.facet(Vy);for(let e of this.gutters)e.config.side=="after"?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),s.scrollDOM.insertBefore(this.dom,s.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(s){if(this.updateGutters(s)){let e=this.prevViewport,n=s.view.viewport,a=Math.min(e.to,n.to)-Math.max(e.from,n.from);this.syncGutters(a<(n.to-n.from)*.8)}if(s.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+"px";this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(Vy)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=s.view.viewport}syncGutters(s){let e=this.dom.nextSibling;s&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=Me.iter(this.view.state.facet(cd),this.view.viewport.from),a=[],l=this.gutters.map(c=>new OT(c,this.view.viewport,-this.view.documentPadding.top));for(let c of this.view.viewportLineBlocks)if(a.length&&(a=[]),Array.isArray(c.type)){let u=!0;for(let f of c.type)if(f.type==Ot.Text&&u){ah(n,a,f.from);for(let h of l)h.line(this.view,f,a);u=!1}else if(f.widget)for(let h of l)h.widget(this.view,f)}else if(c.type==Ot.Text){ah(n,a,c.from);for(let u of l)u.line(this.view,c,a)}else if(c.widget)for(let u of l)u.widget(this.view,c);for(let c of l)c.finish();s&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(s){let e=s.startState.facet(Fo),n=s.state.facet(Fo),a=s.docChanged||s.heightChanged||s.viewportChanged||!Me.eq(s.startState.facet(cd),s.state.facet(cd),s.view.viewport.from,s.view.viewport.to);if(e==n)for(let l of this.gutters)l.update(s)&&(a=!0);else{a=!0;let l=[];for(let c of n){let u=e.indexOf(c);u<0?l.push(new $y(this.view,c)):(this.gutters[u].update(s),l.push(this.gutters[u]))}for(let c of this.gutters)c.dom.remove(),l.indexOf(c)<0&&c.destroy();for(let c of l)c.config.side=="after"?this.getDOMAfter().appendChild(c.dom):this.dom.appendChild(c.dom);this.gutters=l}return a}destroy(){for(let s of this.gutters)s.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:s=>ge.scrollMargins.of(e=>{let n=e.plugin(s);if(!n||n.gutters.length==0||!n.fixed)return null;let a=n.dom.offsetWidth*e.scaleX,l=n.domAfter?n.domAfter.offsetWidth*e.scaleX:0;return e.textDirection==lt.LTR?{left:a,right:l}:{right:a,left:l}})});function Gy(s){return Array.isArray(s)?s:[s]}function ah(s,e,n){for(;s.value&&s.from<=n;)s.from==n&&e.push(s.value),s.next()}class OT{constructor(e,n,a){this.gutter=e,this.height=a,this.i=0,this.cursor=Me.iter(e.markers,n.from)}addElement(e,n,a){let{gutter:l}=this,c=(n.top-this.height)/e.scaleY,u=n.height/e.scaleY;if(this.i==l.elements.length){let f=new Lv(e,u,c,a);l.elements.push(f),l.dom.appendChild(f.dom)}else l.elements[this.i].update(e,u,c,a);this.height=n.bottom,this.i++}line(e,n,a){let l=[];ah(this.cursor,l,n.from),a.length&&(l=l.concat(a));let c=this.gutter.config.lineMarker(e,n,l);c&&l.unshift(c);let u=this.gutter;l.length==0&&!u.config.renderEmptyElements||this.addElement(e,n,l)}widget(e,n){let a=this.gutter.config.widgetMarker(e,n.widget,n),l=a?[a]:null;for(let c of e.state.facet(MT)){let u=c(e,n.widget,n);u&&(l||(l=[])).push(u)}l&&this.addElement(e,n,l)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let n=e.elements.pop();e.dom.removeChild(n.dom),n.destroy()}}}class $y{constructor(e,n){this.view=e,this.config=n,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let a in n.domEventHandlers)this.dom.addEventListener(a,l=>{let c=l.target,u;if(c!=this.dom&&this.dom.contains(c)){for(;c.parentNode!=this.dom;)c=c.parentNode;let h=c.getBoundingClientRect();u=(h.top+h.bottom)/2}else u=l.clientY;let f=e.lineBlockAtHeight(u-e.documentTop);n.domEventHandlers[a](e,f,l)&&l.preventDefault()});this.markers=Gy(n.markers(e)),n.initialSpacer&&(this.spacer=new Lv(e,0,0,[n.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let n=this.markers;if(this.markers=Gy(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let l=this.config.updateSpacer(this.spacer.markers[0],e);l!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[l])}let a=e.view.viewport;return!Me.eq(this.markers,n,a.from,a.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}}class Lv{constructor(e,n,a,l){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,n,a,l)}update(e,n,a,l){this.height!=n&&(this.height=n,this.dom.style.height=n+"px"),this.above!=a&&(this.dom.style.marginTop=(this.above=a)?a+"px":""),NT(this.markers,l)||this.setMarkers(e,l)}setMarkers(e,n){let a="cm-gutterElement",l=this.dom.firstChild;for(let c=0,u=0;;){let f=u,h=c<n.length?n[c++]:null,p=!1;if(h){let g=h.elementClass;g&&(a+=" "+g);for(let b=u;b<this.markers.length;b++)if(this.markers[b].compare(h)){f=b,p=!0;break}}else f=this.markers.length;for(;u<f;){let g=this.markers[u++];if(g.toDOM){g.destroy(l);let b=l.nextSibling;l.remove(),l=b}}if(!h)break;h.toDOM&&(p?l=l.nextSibling:this.dom.insertBefore(h.toDOM(e),l)),p&&u++}this.dom.className=a,this.markers=n}destroy(){this.setMarkers(null,[])}}function NT(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++)if(!s[n].compare(e[n]))return!1;return!0}const DT=ce.define(),jT=ce.define(),Ta=ce.define({combine(s){return Hb(s,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,n){let a=Object.assign({},e);for(let l in n){let c=a[l],u=n[l];a[l]=c?(f,h,p)=>c(f,h,p)||u(f,h,p):u}return a}})}});class ud extends Cs{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function fd(s,e){return s.state.facet(Ta).formatNumber(e,s.state)}const zT=Fo.compute([Ta],s=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers(e){return e.state.facet(DT)},lineMarker(e,n,a){return a.some(l=>l.toDOM)?null:new ud(fd(e,e.state.doc.lineAt(n.from).number))},widgetMarker:(e,n,a)=>{for(let l of e.state.facet(jT)){let c=l(e,n,a);if(c)return c}return null},lineMarkerChange:e=>e.startState.facet(Ta)!=e.state.facet(Ta),initialSpacer(e){return new ud(fd(e,Yy(e.state.doc.lines)))},updateSpacer(e,n){let a=fd(n.view,Yy(n.view.state.doc.lines));return a==e.number?e:new ud(a)},domEventHandlers:s.facet(Ta).domEventHandlers,side:"before"}));function BT(s={}){return[Ta.of(s),RT(),zT]}function Yy(s){let e=9;for(;e<s;)e=e*10+9;return e}const LT=Object.freeze({boolean:"rasa-token-boolean",call:"rasa-token-call",character:"rasa-token-character",comment:"rasa-token-comment",definition:"rasa-token-definition",delimiter:"rasa-token-delimiter",form:"rasa-token-form",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",namespace:"rasa-token-namespace",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),Dh=mt.define();mt.define();function _T(s){return[{key:"Mod-Enter",run:()=>(s(),!0)}]}function jh({parent:s,doc:e="",onChange:n=null,onRun:a=null,readOnly:l=!1,liveLexicalHighlight:c=!1,extensions:u=[]}={}){if(!s)throw new Error("mountRasaCodeEditor requires a parent element");const f=a?Dv.of(_T(a)):[],h=c?KT():YT();return new ge({parent:s,state:$e.create({doc:e,extensions:[BT(),kT(),ge.lineWrapping,h,f,ge.editable.of(!l),$e.readOnly.of(l),ge.updateListener.of(p=>{p.docChanged&&n?.(p.state.doc.toString(),p)}),...u]})})}function _v(s){return LT[s]??"rasa-token-unknown"}function HT(s,e){const n=String(s),a=[];let l=0;for(const c of Hv(n,qv(e,n)))c.start>l&&a.push({text:n.slice(l,c.start),className:""}),a.push({text:n.slice(c.start,c.end),className:_v(c.kind)}),l=c.end;return l<n.length&&a.push({text:n.slice(l),className:""}),a}function Ky(s){const e=String(s),n=[];let a=0;for(;a<e.length;){const l=e[a];if(/\s/.test(l)){a+=1;continue}if("()[]{}".includes(l)){n.push(_i(e,"delimiter",a,a+1)),a+=1;continue}if(l===";"){const f=VT(e,a);n.push(_i(e,"comment",a,f)),a=f;continue}if(l==='"'){const f=UT(e,a);n.push(_i(e,"string",a,f)),a=f;continue}if(l==="^"){n.push(_i(e,"reader-macro",a,a+1));const f=a+1;if(f<e.length&&!/[\s()[\]{}]/.test(e[f])){const h=dd(e,f);n.push(_i(e,"metadata",f,h)),a=h}else a+=1;continue}if(l==="'"||l==="`"||l==="~"||l==="@"){n.push(_i(e,"reader-macro",a,a+1)),a+=1;continue}if(l==="\\"){const f=dd(e,a);n.push(_i(e,"character",a,f)),a=f;continue}const c=dd(e,a),u=e.slice(a,c);n.push(_i(e,qT(u),a,c)),a=c}return n}function qT(s){return s==="nil"?"nil":s==="true"||s==="false"?"boolean":s.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(s)?"number":"symbol"}function _i(s,e,n,a){return{kind:e,start:Xy(s,n),end:Xy(s,a)}}function dd(s,e){let n=e;for(;n<s.length&&!/[\s()[\]{}]/.test(s[n]);)n+=1;return n}function UT(s,e){let n=!1;for(let a=e+1;a<s.length;a+=1){const l=s[a];if(n)n=!1;else if(l==="\\")n=!0;else if(l==='"')return a+1}return s.length}function VT(s,e){const n=s.indexOf(`
`,e);return n<0?s.length:n}function Fr(s,e){const n=typeof e=="string"?e:"",a=typeof e=="number"?e:n.length,l=qv(s,n||a),c=Hv(n,l).map(u=>Nt.mark({class:_v(u.kind)}).range(u.start,u.end));return Nt.set(c,!0)}const GT=new Set(["and","as->","case","catch","cond","def","defmacro","defmethod","defmulti","defn","do","doseq","finally","fn","for","if","if-let","import","let","loop","ns","or","quote","recur","require","set!","some->","some->>","throw","try","var","when","when-let","when-not","->","->>"]),$T=new Set(["def","defmacro","defmethod","defmulti","defn","ns"]);function Hv(s,e){if(!s||!Array.isArray(e)||e.length===0)return e;let n=null;return e.map(a=>{const l=s.slice(a.start,a.end);let c=a.kind;if(c==="symbol"){const f=n?s.slice(n.start,n.end):"";n?.kind==="form"&&$T.has(f)?c="definition":n?.kind==="delimiter"&&f==="("?c=GT.has(l)?"form":"call":l.includes("/")&&(c="namespace")}const u=c===a.kind?a:{...a,kind:c};return a.kind!=="comment"&&(n=u),u})}function YT(s=[]){return[Xi.define({create(n){return Fr(s,n.doc.toString())},update(n,a){for(const l of a.effects)if(l.is(Dh))return Fr(l.value,a.state.doc.toString());return a.docChanged?Nt.none:n.map(a.changes)},provide:n=>ge.decorations.from(n)})]}function KT(){return[Xi.define({create(e){return Fr(Ky(e.doc.toString()),e.doc.toString())},update(e,n){for(const a of n.effects)if(a.is(Dh))return Fr(a.value,n.state.doc.toString());return n.docChanged?Fr(Ky(n.state.doc.toString()),n.state.doc.toString()):e.map(n.changes)},provide:e=>ge.decorations.from(e)})]}function WT(s,e,n){const a=String(s),l=lh(e),c=Math.max(l,lh(n));return{start:Wy(a,l),end:Wy(a,c)}}function Wy(s,e){const n=String(s),a=lh(e);let l=0,c=0;for(const u of n){const f=l+Uv(u);if(f>a||(l=f,c+=u.length,l===a))return c}return n.length}function Xy(s,e){const n=String(s),a=rh(e,n.length);let l=0;for(let c=0;c<a;){const u=n.codePointAt(c),f=String.fromCodePoint(u);l+=Uv(f),c+=f.length}return l}function qv(s,e){const n=typeof e=="number"?e:String(e).length;return[...s].map(a=>{const l=typeof e=="number"?{start:rh(a.start,n),end:rh(a.end,n)}:WT(e,a.start,a.end);return{kind:String(a.kind),start:l.start,end:l.end}}).filter(a=>a.start<a.end).sort((a,l)=>a.start-l.start||a.end-l.end)}function rh(s,e){const n=Number(s);return Number.isFinite(n)?Math.max(0,Math.min(e,Math.trunc(n))):0}function lh(s){const e=Number(s);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):0}function Uv(s){const e=s.codePointAt(0);return e<=127?1:e<=2047?2:e<=65535?3:4}const XT=`
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

.cm-editor .rasa-token-form,
.rasa-token-form {
  color: var(--rasa-gold);
  font-weight: 600;
}

.cm-editor .rasa-token-call,
.rasa-token-call {
  color: var(--rasa-violet, var(--rasa-blue));
}

.cm-editor .rasa-token-definition,
.rasa-token-definition {
  color: var(--rasa-blue);
  font-weight: 600;
}

.cm-editor .rasa-token-namespace,
.rasa-token-namespace {
  color: var(--rasa-teal, var(--rasa-blue));
}

.cm-editor .rasa-token-delimiter,
.rasa-token-delimiter {
  color: var(--rasa-muted);
}
`,QT=new TextEncoder;async function Uo(s){if(Vv(s)){const a=Gv(s);return{byteLength:a.byteLength,digest:await Qy(a),encoding:"bytes"}}const e=FT(s),n=QT.encode(e);return{byteLength:n.byteLength,digest:await Qy(n),encoding:"canonical-json"}}function FT(s){return JSON.stringify(oh(s))}function cc(s,e=12){return s?String(s).slice(0,e):"not observed"}function oh(s){return s===null||typeof s=="string"||typeof s=="boolean"?s:typeof s=="number"?Number.isFinite(s)?s:{$number:String(s)}:typeof s=="bigint"?{$bigint:s.toString()}:s===void 0?{$undefined:!0}:Vv(s)?{$bytes:[...Gv(s)]}:Array.isArray(s)?s.map(oh):s&&typeof s=="object"?Object.fromEntries(Object.keys(s).sort().filter(e=>typeof s[e]!="function").map(e=>[e,oh(s[e])])):String(s)}async function Qy(s){const e=globalThis.crypto?.subtle;if(!e)throw new Error("SHA-256 observations require Web Crypto");const n=await e.digest("SHA-256",s);return[...new Uint8Array(n)].map(a=>a.toString(16).padStart(2,"0")).join("")}function Vv(s){return s instanceof ArrayBuffer||ArrayBuffer.isView(s)}function Gv(s){if(s instanceof Uint8Array)return s;if(s instanceof ArrayBuffer)return new Uint8Array(s);if(ArrayBuffer.isView(s))return new Uint8Array(s.buffer,s.byteOffset,s.byteLength);throw new TypeError("expected an ArrayBuffer or typed array")}class ZT extends Error{constructor(e="browser effect was cancelled before release"){super(e),this.name="BrowserEffectCancelledError",this.kind="browser-effect-cancelled"}}function PT({pauseBeforeEffect:s=!1}={}){let e=0,n=null,a=Fy(s);const l=new Set;function c($){a=Object.freeze({...a,...$});for(const B of l)B(a);return a}async function u({source:$,label:B="Rasa source"}){S("superseded by a new run");const W=`browser-run-${++e}`,X=await Uo(String($??""));return c({...$v(a.pauseBeforeEffect),id:W,status:"running",source:va({authority:"browser-observed",detail:`${X.byteLength.toLocaleString()} UTF-8 bytes`,digest:X.digest,encoding:X.encoding,kind:"source",label:B,byteLength:X.byteLength})}),W}function f($,B){return U($)?K(c({runtime:va({authority:"runtime-report",kind:"execution",label:"Browser Wasm execution",...B})})):a}async function h($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Uo(B.payload);if(!U($))return null;const X=va({authority:"browser-observed",kind:B.kind||"artifact",label:B.label||"Rasa artifact",detail:B.detail||hd(B,W),count:B.count??null,unit:B.unit||null,...W});return K(c({artifact:X})),X}async function p($,B){if(!U($))return null;const W=await Uo(B.payload);if(!U($))return null;const X=va({authority:B.authority||"browser-boundary",kind:B.kind||"boundary-input",label:B.label||"Browser boundary input",detail:B.detail||hd(B,W),count:B.count??null,unit:B.unit||null,...W}),te={boundary:X};return B.artifact===!0&&!a.artifact&&(te.artifact=va({...X,authority:"browser-observed",detail:B.artifactDetail||X.detail,kind:B.artifactKind||"rasa-capability-payload",label:B.artifactLabel||"Rasa capability payload"})),c({...te,status:a.pauseBeforeEffect?"paused":"effect-running"}),a.pauseBeforeEffect?(await new Promise((me,Ke)=>{n={onRelease:B.onRelease||null,reject:Ke,resolve:me,runId:$}}),U($)?(c({status:"effect-running"}),X):null):X}async function g($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Uo(B.payload);if(!U($))return null;if(a.effect&&a.effect.digest===W.digest&&a.effect.inputDigest===(B.inputDigest||null))return a.effect;const X=va({authority:B.authority||"browser-effect",kind:B.kind||"effect",label:B.label||"Browser effect",detail:B.detail||hd(B,W),count:B.count??null,unit:B.unit||null,inputDigest:B.inputDigest||null,...W});return K(c({effect:X})),X}function b($,B){return U($)?c({status:"error",error:{message:B?.message||String(B),name:B?.name||"Error"}}):a}function v(){if(!n)return!1;const $=n;n=null,c({status:"effect-running"});try{const B=$.onRelease?.();Promise.resolve(B).then($.resolve,$.reject)}catch(B){$.reject(B)}return!0}function S($="browser effect cancelled"){if(!n)return!1;const B=n;return n=null,c({status:"cancelled"}),B.reject(new ZT($)),!0}function k(){S("witness reset"),c(Fy(a.pauseBeforeEffect))}function T($){const B=!!$;c({pauseBeforeEffect:B}),B||v()}function C($){return l.add($),()=>l.delete($)}function _(){return a}function U($){return!!($&&a.id===$)}function K($){const B=JT($);if(!!!($.runtime&&$.artifact&&$.boundary&&$.effect))return $;const X=B.length>0&&B.every(te=>te.status==="match");return c({correlations:B,status:X?"correlated":"mismatch"})}return Object.freeze({beforeEffect:p,beginRun:u,cancel:S,recordArtifact:h,recordEffect:g,recordError:b,recordRuntime:f,release:v,reset:k,setPauseBeforeEffect:T,snapshot:_,subscribe:C})}function Fy(s){return Object.freeze({...$v(s),id:null,status:"idle"})}function $v(s){return{artifact:null,boundary:null,correlations:[],effect:null,error:null,pauseBeforeEffect:s,runtime:null,source:null}}function va(s){return Object.freeze({...s})}function hd(s,e){return s.count!=null&&s.unit?`${Number(s.count).toLocaleString()} ${s.unit}`:e.byteLength!=null?`${Number(e.byteLength).toLocaleString()} observed bytes`:"Browser-observed payload"}function JT(s){const e=[];return s.artifact?.digest&&s.boundary?.digest&&e.push(md("artifact-boundary","Artifact matches boundary input",s.artifact.digest===s.boundary.digest,s.artifact.digest,s.boundary.digest)),s.boundary?.digest&&s.effect?.inputDigest&&e.push(md("boundary-effect","Effect consumed boundary input",s.boundary.digest===s.effect.inputDigest,s.boundary.digest,s.effect.inputDigest)),s.boundary?.count!=null&&s.effect?.count!=null&&e.push(md("count",`${s.boundary.unit||"Boundary items"} preserved`,s.boundary.count===s.effect.count,s.boundary.count,s.effect.count)),e}function md(s,e,n,a,l){return Object.freeze({actual:l,expected:a,id:s,label:e,status:n?"match":"mismatch"})}const Yv={source:pS,runtime:hS,artifact:jS,boundary:tS,effect:JS};function IT({model:s,onOpen:e,onRelease:n}){const a=Kv(s);return x.jsxs("footer",{className:"execution-witness-rail","data-status":s.status,children:[x.jsxs("button",{className:"witness-route",onClick:e,title:"See how this result moved from your Rasa code to the browser",type:"button",children:[x.jsxs("span",{className:"witness-route-label",children:[x.jsx(vS,{size:14})," Proof trail"]}),a.map((l,c)=>{const u=Yv[l.id];return x.jsxs(pc.Fragment,{children:[x.jsxs("span",{className:"witness-route-step","data-status":l.status,children:[x.jsx(u,{size:13}),x.jsxs("span",{children:[x.jsx("strong",{children:l.label}),x.jsx("small",{children:l.value})]})]}),c<a.length-1?x.jsx(ph,{"aria-hidden":"true",size:12}):null]},l.id)})]}),s.status==="paused"?x.jsxs("button",{className:"witness-release",onClick:n,type:"button",children:[x.jsx(gc,{fill:"currentColor",size:14})," Continue to browser"]}):x.jsx("span",{className:"witness-status","data-status":s.status,title:Xv(s.status),children:Wv(s.status)})]})}function eA({model:s,onPauseChange:e,onRelease:n}){const a=Kv(s);return x.jsxs("div",{className:"execution-witness-panel",children:[x.jsxs("header",{className:"witness-panel-summary",children:[x.jsxs("div",{children:[x.jsx("span",{children:"Proof trail for this browser run"}),x.jsx("h2",{children:"How this result was made"}),x.jsx("small",{title:"This identifier is created by the browser for this page. It is not a compiler-authored run ID.",children:sA(s.id)})]}),x.jsx("em",{"data-status":s.status,title:Xv(s.status),children:Wv(s.status)})]}),x.jsxs("section",{className:"witness-authority",children:[x.jsx(Zy,{label:"Reported by Rasa",detail:"Execution facts that came from Rasa's own runtime report",help:"These facts describe the Rasa execution itself. The Studio displays them but does not invent them.",tone:"runtime"}),x.jsx(Zy,{label:"Checked in this browser",detail:"Measurements made around the hand-off to Tone.js or Canvas",help:"The browser measures matching data on both sides of the hand-off. These checks are useful evidence, but they are not compiler authority.",tone:"browser"})]}),x.jsxs("details",{className:"witness-reading-guide",children:[x.jsxs("summary",{children:[x.jsx(Md,{size:15})," How to read this proof"]}),x.jsxs("div",{children:[x.jsx("p",{children:"The five steps follow one result from the code you can edit to the sound or image the browser produced."}),x.jsxs("p",{children:[x.jsx("strong",{children:"Reported by Rasa"})," describes the execution. ",x.jsx("strong",{children:"Checked in this browser"})," compares the actual data used at the browser boundary."]}),x.jsx("p",{children:"Open any step's technical details to inspect data kinds, counts, timings, and SHA-256 fingerprints."})]})]}),x.jsxs("section",{className:"witness-control",children:[x.jsxs("div",{children:[x.jsx(HS,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:"Pause before showing or playing"}),x.jsx("small",{children:"Let Rasa reach the browser hand-off, inspect the result, then choose when Canvas or Tone.js may use it."})]})]}),x.jsx("button",{"aria-checked":s.pauseBeforeEffect,"aria-label":"Pause before showing or playing",className:"witness-switch",onClick:()=>e(!s.pauseBeforeEffect),role:"switch",type:"button",children:x.jsx("i",{})}),s.status==="paused"?x.jsxs("button",{className:"witness-panel-release",onClick:n,type:"button",children:[x.jsx(gc,{fill:"currentColor",size:14})," Continue"]}):null]}),x.jsx("section",{className:"witness-step-grid",children:a.map(l=>x.jsx(tA,{step:l},l.id))}),s.error?x.jsxs("section",{className:"witness-error",role:"alert",children:[x.jsx(Zr,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:s.error.name}),x.jsx("small",{children:s.error.message})]})]}):null,x.jsxs("section",{className:"witness-correlations",children:[x.jsxs("header",{children:[x.jsx("span",{children:"Do the hand-offs match?"}),x.jsx("strong",{children:s.correlations.length})]}),s.correlations.length?s.correlations.map(l=>x.jsxs("div",{"data-status":l.status,children:[l.status==="match"?x.jsx(lS,{size:15}):x.jsx(Zr,{size:15}),x.jsxs("span",{children:[x.jsx("strong",{children:cA(l)}),x.jsx("small",{children:uA(l)})]})]},l.id)):x.jsx("p",{children:"These checks appear after Canvas draws the result or Tone.js schedules the score."})]}),x.jsxs("section",{className:"witness-core-gaps",children:[x.jsxs("span",{children:["What this does not prove yet ",x.jsx(Md,{"aria-label":"About current proof limits",size:13,title:"The Studio names missing evidence instead of replacing it with a browser claim."})]}),x.jsx("p",{children:"This browser can match what it observed. Rasa does not yet publish a compiler-authored run identity or result fingerprint, so the Studio does not claim cross-host verification."})]})]})}function tA({step:s}){const e=Yv[s.id];return x.jsxs("article",{"data-status":s.status,children:[x.jsxs("header",{children:[x.jsx(e,{size:16}),x.jsx("span",{children:s.eyebrow})]}),x.jsx("h3",{children:s.label}),x.jsx("p",{children:s.detail}),s.status==="observed"?x.jsxs("details",{className:"witness-technical",children:[x.jsx("summary",{children:"Technical details"}),x.jsxs("dl",{children:[x.jsxs("div",{children:[x.jsx("dt",{title:"Who supplied this evidence",children:"Evidence source"}),x.jsx("dd",{children:s.authority})]}),s.observationLabel?x.jsxs("div",{children:[x.jsx("dt",{children:"Observed as"}),x.jsx("dd",{children:s.observationLabel})]}):null,s.kind?x.jsxs("div",{children:[x.jsx("dt",{children:"Data kind"}),x.jsx("dd",{children:s.kind})]}):null,s.digest?x.jsxs("div",{children:[x.jsx("dt",{title:"A browser-computed fingerprint used only for comparisons inside this page",children:"SHA-256"}),x.jsx("dd",{title:s.digest,children:cc(s.digest,16)})]}):null,s.count!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Payload"}),x.jsxs("dd",{children:[Number(s.count).toLocaleString()," ",s.unit]})]}):null,s.elapsedMs!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Elapsed"}),x.jsxs("dd",{children:[Number(s.elapsedMs).toFixed(1)," ms"]})]}):null,s.optimizerExecutions!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Optimized regions"}),x.jsx("dd",{children:Number(s.optimizerExecutions).toLocaleString()})]}):null,s.executionTier?x.jsxs("div",{children:[x.jsx("dt",{children:"Execution tier"}),x.jsx("dd",{children:s.executionTier})]}):null]})]}):null]})}function Zy({detail:s,help:e,label:n,tone:a}){return x.jsxs("div",{"data-tone":a,title:e,children:[x.jsx("i",{}),x.jsxs("span",{children:[x.jsxs("strong",{children:[n," ",x.jsx(Md,{"aria-hidden":"true",size:12})]}),x.jsx("small",{children:s})]})]})}function Kv(s){const e=s.status==="paused"&&s.boundary?"Evaluation is suspended at the asynchronous capability boundary; its runtime report completes after release.":"Waiting for this run";return[Lr("source","Your Rasa code","1 · Code",s.source),Lr("runtime","Rasa ran it","2 · Execution",s.runtime,e),Lr("artifact",aA(s.artifact),"3 · Rasa output",s.artifact),Lr("boundary",rA(s.boundary),"4 · Browser hand-off",s.boundary),Lr("effect",lA(s.effect),"5 · What you see or hear",s.effect)]}function Lr(s,e,n,a,l="Waiting for this run"){return{id:s,eyebrow:n,label:e,value:nA(a),detail:oA(s,a,l),authority:a?iA(a.authority):"Not observed",observationLabel:a?.label||null,kind:a?.kind||null,digest:a?.digest||null,count:a?.count??null,unit:a?.unit||"items",elapsedMs:a?.elapsedMs??null,optimizerExecutions:a?.optimizerExecutions??null,executionTier:a?.executionTier||null,status:a?"observed":"waiting"}}function nA(s){return s?s.count!=null?`${Number(s.count).toLocaleString()} ${s.unit||"items"}`:s.elapsedMs!=null?`${Number(s.elapsedMs).toFixed(1)} ms`:s.digest?cc(s.digest):s.status||"observed":"waiting"}function iA(s){return s==="runtime-report"?"Reported by Rasa":s==="browser-boundary"?"Checked at the browser hand-off":s==="browser-effect"?"Checked where the browser used it":"Checked in this browser"}function Wv(s){return s==="correlated"?"route matches":s==="mismatch"?"mismatch found":s==="paused"?"ready to show or play":s==="effect-running"?"browser applying result":s==="running"?"Rasa running":s==="error"?"run failed":s==="cancelled"?"run cancelled":"no run yet"}function Xv(s){return s==="correlated"?"Every observed hand-off matched for this run.":s==="mismatch"?"At least one observed hand-off did not match.":s==="paused"?"Rasa has reached the browser hand-off. Canvas or Tone.js is waiting for you.":s==="effect-running"?"The browser is applying the Rasa-produced result.":s==="running"?"The Rasa browser-Wasm session is evaluating your code.":s==="error"?"The run failed before the proof trail completed.":s==="cancelled"?"This browser run was intentionally cancelled.":"Run the visible Rasa program to create a proof trail."}function sA(s){if(!s)return"Run an example to create this trail";const e=String(s).match(/(\d+)$/)?.[1];return e?`Observed in this browser as run ${e}`:"Observed in this browser"}function aA(s){return s?.kind==="wmp-2-rgba-bytes"?"Rasa produced the pixels":s?.kind==="ordinary-rasa-scene"?"Rasa returned the scene":s?.kind==="rasa-capability-payload"?"Rasa produced the score":"Rasa produced a result"}function rA(s){return s?.kind==="ordinary-value-capability-input"?"The score reached Tone.js":s?.kind==="canvas-image-data-input"?"The pixels reached Canvas":s?.kind==="canvas-primitive-input"?"The scene reached Canvas":"The result reached the browser"}function lA(s){return s?.kind==="tone-schedule"?"Tone.js scheduled the music":s?.kind==="canvas-image-data-upload"?"Canvas displayed the pixels":s?.kind==="canvas-primitive-render"?"Canvas drew the scene":"The browser used the result"}function oA(s,e,n){if(!e)return n;if(s==="source")return"This is the code currently visible in the editor.";if(s==="runtime"){const a=Number(e.optimizerExecutions||0);return a>0?`Rasa ran this code inside the browser and used ${a.toLocaleString()} optimized packed region${a===1?"":"s"}.`:"Rasa ran this code inside the browser. This result did not need the packed-data optimizer."}return e.detail||"This step was observed in the browser."}function cA(s){return s.id==="artifact-boundary"?"Rasa's output reached the hand-off unchanged":s.id==="boundary-effect"?"The browser used that same hand-off":s.id==="count"?"Nothing was dropped along the way":s.label}function uA(s){return s.id==="count"?s.status==="match"?`${Number(s.expected).toLocaleString()} sent · ${Number(s.actual).toLocaleString()} used`:`${Number(s.expected).toLocaleString()} sent, but ${Number(s.actual).toLocaleString()} used`:s.status==="match"?"The browser measured the data as identical at both steps.":`Expected ${cc(s.expected)} but observed ${cc(s.actual)}.`}function Py(s){const e=String(s||""),n=gd(e,/:eval\s+\{:status\s+:(\S+)/),a=gd(e,/:status\s+:(\S+)/),l=gd(e,/:failed-phase\s+(:[^\s}]+)/);if(a==="ok"&&n==="ok"){const c=AA(e);if(c)return{kind:"value",text:c.text,testRun:c.events};const u=Gr(e,":rendered-value")??"nil",f=TA(u);return{kind:"value",text:f?.text??u,...f?.events?{testRun:f.events}:{}}}return{kind:"error",text:GA(e,l)}}function fA(s){const e=String(s||"");return/:status\s+:failed/.test(e)||/:eval\s+\{:status\s+:failed/.test(e)}function dA(s){const e=sl(String(s||""));if(!e||e.kind!=="map")return null;const n=M(e,"execution"),a=M(e,"optimizer");if(!n&&!a)return null;const l=be(M(a,"executed"))??0,c=be(M(a,"admitted"))??0,u=Ie(M(a,"fallbacks")).filter(f=>f.kind==="map").map(Fv);return{productLane:fe(M(n,"product-lane"))||null,fallbackTier:"runtime-wasm",runtimeExecutionTier:fe(M(n,"tier"))||null,runtimeStatus:fe(M(n,"status"))||null,fallbackPoint:fe(M(n,"fallback-point"))||null,deopt:fe(M(n,"deopt"))||null,osr:fe(M(n,"osr"))||null,optimizedTier:"wasmgc",optimizedStatus:l>0?"executed":u.length>0?"fallback":c>0?"admitted":"not-entered",optimizedPath:l>0?"runtime-wasm-callable-region":u.length>0?"runtime-wasm-fallback":"runtime-wasm-only",optimizer:{enabled:_n(M(a,"enabled"))===!0,probes:be(M(a,"probes"))??0,admitted:c,executed:l,missed:be(M(a,"missed"))??0,fallbacks:u}}}function hA(s){const e=sl(String(s||""));if(!e||e.kind!=="map")return{status:"unparseable",inspect:null,evalStatus:null,renderedValue:null,value:null,execution:null,optimizer:null,phases:[],runtime:null,plan:null,diagnostics:[]};const n=fe(M(e,"rasa/inspect"))||null,a=M(e,"eval"),l=M(a,"rendered-value"),c=l?.kind==="string"?l.value:null,u=M(a,"value")||(c?sl(c):null);return{status:fe(M(e,"status"))||(n?"ok":"unknown"),inspect:n,evalStatus:fe(M(a,"status"))||null,renderedValue:c,value:Vr(u),execution:wA(M(e,"execution"),M(e,"lane")),optimizer:kA(M(e,"optimizer")),phases:mA(e),runtime:bA(e),plan:vA(M(e,"plan")),diagnostics:xA(e)}}const Qv=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function mA(s){return Qv.map(([e,n])=>{const a=M(s,e);if(!a||a.kind==="nil")return{id:e,label:n,status:"not-requested",detail:"not captured",diagnostics:0};const l=pA(a),c=gA(e,a,l);return{id:e,label:n,status:fe(M(a,"status"))||"available",detail:yA(e,c),diagnostics:l,metrics:c}})}function pA(s){return be(M(s,"diagnostic-count"))??Ie(M(s,"diagnostics")).length}function gA(s,e,n){if(s==="facts"){const a=M(e,"summary");return{diagnostics:n,facts:be(M(a,"facts"))??0,declaredFacts:be(M(a,"declared-facts"))??0,metadataContracts:be(M(a,"metadata-contracts"))??0,mode:fe(M(e,"mode"))||"unknown"}}return s==="plan"?{diagnostics:n,lanes:Ie(M(e,"lanes")).length,decisions:Ie(M(e,"decisions")).length,candidates:Ie(M(e,"candidates")).length,rejected:Ie(M(e,"rejected")).length,fallbacks:Ie(M(e,"fallbacks")).length}:s==="checks"?{diagnostics:n,checks:Ie(M(e,"results")).length,action:fe(M(e,"action"))||null}:{diagnostics:n}}function yA(s,e){return s==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:s==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:s==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:s==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function bA(s){const e=M(s,"session");return{lane:fe(M(s,"lane"))||null,memoryPath:fe(M(s,"memory-path"))||null,collectionImpl:fe(M(s,"collection-impl"))||null,hostImports:_n(M(s,"host-imports"))===!0,target:ht(M(s,"target"))||null,sessionMode:fe(M(e,"mode"))||null,persistentDefs:_n(M(e,"persistent-defs"))===!0}}function vA(s){return!s||s.kind!=="map"?null:{lanes:Ie(M(s,"lanes")).map(e=>_r(e,"lane")),decisions:Ie(M(s,"decisions")).map(e=>_r(e,"decision")),candidates:Ie(M(s,"candidates")).map(e=>_r(e,"candidate")),rejected:Ie(M(s,"rejected")).map(e=>_r(e,"rejected")),fallbacks:Ie(M(s,"fallbacks")).map(e=>_r(e,"fallback"))}}function _r(s,e){return{type:e,lane:rn(M(s,"lane")),memoryPath:rn(M(s,"memory-path")),wmp:rn(M(s,"wmp")),status:rn(M(s,"status")),decision:rn(M(s,"decision")),candidate:rn(M(s,"candidate")),family:rn(M(s,"family")),evidence:rn(M(s,"evidence")),reason:ht(M(s,"reason"))||ht(M(s,"message"))||null}}function xA(s){const e=Ie(M(s,"diagnostics"));return(e.length>0?e:Qv.flatMap(([a])=>Ie(M(M(s,a),"diagnostics")).map(l=>({item:l,id:a})))).map(a=>{const l=a.item||a;return SA(l,a.id||null)})}function SA(s,e){const n=M(s,"rasa.diagnostic/data")||M(s,"data"),a=rn(M(s,"rasa.diagnostic/severity"))||"info",l=M(s,"rasa.diagnostic/primary-span")||M(s,"span")||M(n,"rasa.error/span");return{phase:rn(M(s,"rasa.diagnostic/phase"))||rn(M(s,"phase"))||e,severity:a,code:rn(M(s,"rasa.diagnostic/code")),kind:rn(M(s,"kind")),message:ht(M(s,"rasa.diagnostic/summary"))||ht(M(s,"message"))||ht(M(n,"rasa.error/message"))||"Diagnostic record",detail:ht(M(s,"rasa.diagnostic/detail"))||null,recoverable:_n(M(s,"recoverable"))??a!=="error",span:l?.kind==="map"?{sourceId:ht(M(l,"source-id"))||null,start:be(M(l,"start")),end:be(M(l,"end"))}:null}}function rn(s){return fe(s)||(s?.kind==="string"?s.value:s?.kind==="symbol"?s.raw:null)}function Fv(s){return{symbol:ht(M(s,"symbol"))||null,arity:be(M(s,"arity"))??null,reason:fe(M(s,"reason"))||null,fallback:fe(M(s,"fallback"))||null,arguments:Ie(M(s,"arguments")).filter(e=>e.kind==="map").map(e=>({index:be(M(e,"index"))??null,family:fe(M(e,"family"))||null,bytes:be(M(e,"bytes")),movement:fe(M(e,"movement"))||null}))}}function wA(s,e){return!s&&!e?null:{productLane:fe(M(s,"product-lane"))||fe(M(e,"product-lane"))||null,tier:fe(M(s,"tier"))||fe(M(e,"runtime-execution-tier"))||null,status:fe(M(s,"status"))||fe(M(e,"runtime-status"))||null,fallbackPoint:fe(M(s,"fallback-point"))||fe(M(e,"fallback-point"))||null}}function kA(s){return!s||s.kind!=="map"?null:{enabled:_n(M(s,"enabled"))===!0,probes:be(M(s,"probes"))??0,admitted:be(M(s,"admitted"))??0,executed:be(M(s,"executed"))??0,missed:be(M(s,"missed"))??0,fallbacks:Ie(M(s,"fallbacks")).filter(e=>e.kind==="map").map(Fv)}}function Vr(s){if(!s)return null;switch(s.kind){case"nil":return{kind:"nil",value:null};case"boolean":case"number":case"string":return{kind:s.kind,value:s.value};case"keyword":return{kind:"keyword",name:s.name};case"symbol":case"char":return{kind:s.kind,raw:s.raw};case"vector":case"list":return{kind:s.kind,items:s.items.map(Vr)};case"set":return{kind:"set",items:s.items.map(Vr).sort(Jy)};case"map":return{kind:"map",entries:s.entries.map(e=>({key:Vr(e.key),value:Vr(e.value)})).sort((e,n)=>Jy(e.key,n.key))};default:return{kind:s.kind||"unknown",raw:s.raw||""}}}function Jy(s,e){return JSON.stringify(s).localeCompare(JSON.stringify(e))}function TA(s){const e=sl(String(s||""));return!e||e.kind!=="map"||fe(M(e,"type"))!=="test-run"?null:{text:Zv(e),events:Pv(e)}}function AA(s){const e=sl(String(s||""));if(!e||e.kind!=="map")return null;const n=M(M(e,"eval"),"value");return!n||n.kind!=="map"||fe(M(n,"type"))!=="test-run"?null:{text:Zv(n),events:Pv(n)}}function Zv(s){const e=fe(M(s,"status"))||"unknown",n=ht(M(s,"message")),a=$i(M(s,"namespaces")),l=$i(M(s,"files")),c=$i(M(s,"paths")),u=Ie(M(s,"results")).filter(g=>g.kind==="map"),f=[`Test run: ${RA(s,e)}`];n&&f.push(n),Iy(f,"paths",c),Iy(f,"files",l);const h=a.length>0&&(e==="ok"||u.length>0);(h||u.length>0)&&f.push("");const p=new Set;for(const g of h?a:[]){f.push(g),Vi(f);const b=f.length;u.forEach((v,S)=>{HA(v)===g&&(pd(f,v,g),p.add(S))}),f.length===b&&f.push("  no assertion records returned"),Vi(f)}return h?u.some((g,b)=>!p.has(b))&&(f.push("<unknown-namespace>"),u.forEach((g,b)=>{p.has(b)||pd(f,g,null)}),Vi(f)):(u.forEach((g,b)=>{pd(f,g,null),p.add(b)}),u.length>0&&Vi(f)),u.length===0&&!h&&e==="ok"&&(f.push("No selected assertion records returned."),f.push("")),f.push(`selected ${be(M(s,"selected"))??0}, skipped ${be(M(s,"skipped"))??0}, tests ${be(M(s,"test"))??0}, pass ${be(M(s,"pass"))??0}, fail ${be(M(s,"fail"))??0}, error ${be(M(s,"error"))??0}, exit-code ${be(M(s,"exit-code"))??0}`),_n(M(s,"exit-requested?"))===!0&&f.push("exit requested: true"),_n(M(s,"stopped?"))===!0&&f.push(`stopped: ${fe(M(s,"stop-reason"))||"unknown"}`),f.join(`
`)}function Pv(s){return{status:fe(M(s,"status"))||"unknown",message:ht(M(s,"message"))||null,namespaces:$i(M(s,"namespaces")),files:$i(M(s,"files")),paths:$i(M(s,"paths")),selected:be(M(s,"selected"))??0,skipped:be(M(s,"skipped"))??0,tests:be(M(s,"test"))??0,pass:be(M(s,"pass"))??0,fail:be(M(s,"fail"))??0,error:be(M(s,"error"))??0,exitRequested:_n(M(s,"exit-requested?"))===!0,exitCode:be(M(s,"exit-code"))??0,stopped:_n(M(s,"stopped?"))===!0,stopReason:fe(M(s,"stop-reason"))||null,events:Ie(M(s,"results")).filter(e=>e.kind==="map").map(EA)}}function EA(s){const e=Tc(M(s,"test"))||null,n=e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null,a=e?.includes("/")?e.slice(e.lastIndexOf("/")+1):e,l=MA(M(s,"span")),c=fe(M(s,"error-kind"))||null,u=Jv(M(s,"error-data")),f=ht(M(s,"message"))||null,h=e1(c,f);return{status:Iv(s),test:e,namespace:n,name:a,context:$i(M(s,"context")),form:M(s,"form")?.raw||null,expected:M(s,"expected")?.raw||null,actual:M(s,"actual")?.raw||null,message:f,...c?{errorKind:c}:{},...u?{error:u}:{},...h?.explanation?{explanation:h.explanation}:{},...h?.nextStep?{nextStep:h.nextStep}:{},span:l,diff:t1(M(s,"diff"))||null}}function MA(s){if(!s||s.kind!=="map")return null;const e=ht(M(s,"source-id"))||ht(M(s,"source"));return e?{source:e,start:be(M(s,"start")),end:be(M(s,"end"))}:null}function Iy(s,e,n){if(n.length!==0){Vi(s),s.push(`requested ${e}:`);for(const a of n)s.push(`  ${a}`)}}function RA(s,e){return e!=="ok"?e:(be(M(s,"error"))??0)>0?"error":(be(M(s,"fail"))??0)>0||(be(M(s,"exit-code"))??0)!==0?"failed":"ok"}function pd(s,e,n){const a=Iv(e),l=qA(Tc(M(e,"test"))||"<unknown-test>",n);s.push(`${jA(a)} ${l}`);for(const k of $i(M(e,"context")))s.push(`  ${k}`);const c=M(e,"form");if(c&&s.push(`  ${c.raw}`),a==="pass"){s.push("");return}if(a==="no-assertions"){const k=ht(M(e,"message"));k&&s.push(`  ${k}`),s.push("");return}Vi(s);const u=ht(M(e,"message")),f=fe(M(e,"error-kind")),h=Jv(M(e,"error-data"));f&&s.push(`  error-kind: ${f}`),u&&s.push(`  message: ${u}`),h&&DA(s,h,"  ");const p=e1(f,u);p?.explanation&&s.push(`  reason: ${p.explanation}`),p?.nextStep&&s.push(`  next: ${p.nextStep}`);const g=M(e,"expected");g&&s.push(`  expected: ${g.raw}`);const b=M(e,"actual");b&&s.push(`  actual:   ${b.raw}`);const v=t1(M(e,"diff"));v&&(Vi(s),s.push("  diff:"),v.split(`
`).forEach(k=>s.push(`    ${k}`)));const S=_A(M(e,"span"));S&&(Vi(s),s.push(`  source: ${S}`)),s.push("")}function Jv(s){return!s||s.kind!=="map"||_n(M(s,"rasa/error"))!==!0?null:{category:fe(M(s,"rasa.error/category"))||null,kind:fe(M(s,"rasa.error/kind"))||null,message:ht(M(s,"rasa.error/message"))||null,data:CA(M(s,"rasa.error/data"))}}function CA(s){return!s||s.kind!=="map"?[]:s.entries.map(e=>({key:OA(e.key),value:e.value.raw||ht(e.value),role:NA(e.key)}))}function OA(s){return s?.kind==="keyword"?s.name:s?.kind==="symbol"||s?.kind==="string"?s.value||s.raw:s?.raw||"<unknown>"}function NA(s){return s?.kind!=="keyword"?"detail":s.name==="rasa.host/capability"||s.name==="rasa.host/target"?"stable":"detail"}function DA(s,e,n){e.category&&s.push(`${n}category: ${e.category}`),e.kind&&s.push(`${n}kind: ${e.kind}`),e.message&&s.push(`${n}error-message: ${e.message}`),eb(s,"data",e.data.filter(a=>a.role==="stable"),n),eb(s,"details",e.data.filter(a=>a.role!=="stable"),n)}function eb(s,e,n,a){if(n.length!==0){s.push(`${a}${e}:`);for(const l of n)s.push(`${a}  ${l.key} ${l.value}`)}}function Iv(s){const e=fe(M(s,"type"))||"unknown";return e==="test-event"?fe(M(s,"status"))||"test-event":e}function jA(s){return s==="no-assertions"?"NO ASSERTIONS":s.toUpperCase()}function e1(s,e){return s?s==="missing-linked-var"?zA(e)||{explanation:"Evaluation reached a global symbol that is not linked to a runtime var.",nextStep:"Require or refer the source namespace, or define the var before calling it."}:s==="unsupported-reader-macro"?{explanation:"The reader saw syntax that Rasa does not support yet.",nextStep:"Rewrite this form using supported reader syntax."}:s==="unsupported-macro-shape"?{explanation:"The macro expander saw a macro form shape Rasa does not accept yet.",nextStep:"Rewrite the macro call to one of the currently supported shapes."}:s==="unsupported-analyzer-form"?{explanation:"The analyzer saw a source form that Rasa cannot lower yet.",nextStep:"Rewrite this source form using supported Rasa forms."}:s==="unsupported-runtime-node"?{explanation:"The evaluator received an IR node that this runtime path cannot execute yet.",nextStep:"Use diagnostics or inspect output to locate the source form, then rewrite it or defer this feature."}:null:null}function zA(s){const e=BA(s);return["deftest","is","testing","are","run-tests"].includes(e)?{explanation:"This test helper belongs to `rasa.test`, but it is not referred in the current namespace.",nextStep:"Require it with `(require '[rasa.test :refer [deftest is testing are run-tests]])` or add the same `:refer` to the namespace form."}:e==="runner/run"?{explanation:"`runner` is not a loaded alias for the user-space `rasa.test.runner` namespace.",nextStep:"Require it with `(require '[rasa.test.runner :as runner])` or add `[rasa.test.runner :as runner]` to the namespace form."}:null}function BA(s){return String(s||"").match(/^linked global `([^`]+)` is not available$/)?.[1]||null}function t1(s){if(!s||s.kind!=="map")return"";const e=fe(M(s,"kind"));if(e==="map"){const n=[];for(const a of Ie(M(s,"changed")))a.kind==="map"&&(n.push(M(a,"key")?.raw||"changed value"),uc(n,"expected",M(a,"expected")),uc(n,"actual  ",M(a,"actual")));return Vo(n,"missing",M(s,"missing")),Vo(n,"extra",M(s,"extra")),n.length?n.join(`
`):s.raw}if(e==="vector")return LA("index",s);if(e==="set"){const n=[];return Vo(n,"missing",M(s,"missing")),Vo(n,"extra",M(s,"extra")),n.length?n.join(`
`):s.raw}if(e==="string"||e==="scalar"||e==="opaque"){const n=[];return vs(n,"expected",M(s,"expected")),vs(n,"actual  ",M(s,"actual")),vs(n,"prefix-length",M(s,"prefix-length")),vs(n,"expected-count",M(s,"expected-count")),vs(n,"actual-count",M(s,"actual-count")),n.length?n.join(`
`):s.raw}return e==="equal"?"values are equal":s.raw}function LA(s,e){const n=[];for(const a of Ie(M(e,"changed")))a.kind==="map"&&(n.push(`${s} ${M(a,s)?.raw||"?"}`),uc(n,"expected",M(a,"expected")),uc(n,"actual  ",M(a,"actual")));return vs(n,"expected-count",M(e,"expected-count")),vs(n,"actual-count",M(e,"actual-count")),n.length?n.join(`
`):e.raw}function vs(s,e,n){n&&s.push(`${e} ${n.raw}`)}function uc(s,e,n){n&&s.push(`  ${e} ${n.raw}`)}function Vo(s,e,n){const a=Ie(n);a.length>0&&s.push(`${e}: ${a.map(l=>l.raw).join(", ")}`)}function _A(s){if(!s||s.kind!=="map")return"";const e=ht(M(s,"source-id"))||ht(M(s,"source"));if(!e)return"";const n=be(M(s,"start")),a=be(M(s,"end"));return n!==null&&a!==null?`${e}:${n}..${a}`:e}function HA(s){const e=Tc(M(s,"test"));return e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null}function qA(s,e){return!e||!s.startsWith(`${e}/`)?s:s.slice(e.length+1)}function Vi(s){s[s.length-1]!==""&&s.push("")}function M(s,e){if(!s||s.kind!=="map")return null;for(const n of s.entries)if(fe(n.key)===e)return n.value;return null}function Ie(s){return s?.kind==="vector"?s.items:[]}function $i(s){return Ie(s).map(Tc).filter(e=>e!==null)}function fe(s){return s?.kind==="keyword"?s.name:null}function Tc(s){return s?s.kind==="string"?s.value:s.kind==="symbol"||s.kind==="keyword"?s.raw:s.raw??null:null}function ht(s){return s?s.kind==="string"?s.value:s.kind==="nil"?"":s.raw||"":""}function be(s){return s?.kind==="number"?s.value:null}function _n(s){return s?.kind==="boolean"?s.value:null}function sl(s){const e=new UA(s);try{const n=e.readValue();return e.skipWhitespace(),n}catch{return null}}class UA{constructor(e){this.text=e,this.index=0}readValue(){this.skipWhitespace();const e=this.index,n=this.text[this.index];if(!n)throw new Error("expected EDN value");if(n==='"'){const{value:l,end:c}=n1(this.text,this.index);return this.index=c,{kind:"string",value:l,raw:this.text.slice(e,this.index)}}if(n===":"){const l=this.readToken();return{kind:"keyword",name:l.slice(1),raw:l}}if(n==="[")return this.readDelimited("vector","[","]");if(n==="(")return this.readDelimited("list","(",")");if(n==="{")return this.readMap();if(n==="#"&&this.text[this.index+1]==="{")return this.readSet();if(n==="\\")return{kind:"char",raw:this.readToken()};const a=this.readToken();return a==="nil"?{kind:"nil",value:null,raw:a}:a==="true"||a==="false"?{kind:"boolean",value:a==="true",raw:a}:/^[+-]?(?:\d+\.\d+|\d+)$/.test(a)?{kind:"number",value:Number(a),raw:a}:{kind:"symbol",raw:a}}readDelimited(e,n,a){const l=this.index;this.expect(n);const c=[];for(;;){if(this.skipWhitespace(),this.text[this.index]===a)return this.index+=1,{kind:e,items:c,raw:this.text.slice(l,this.index)};c.push(this.readValue())}}readMap(){const e=this.index;this.expect("{");const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"map",entries:n,raw:this.text.slice(e,this.index)};const a=this.readValue(),l=this.readValue();n.push({key:a,value:l})}}readSet(){const e=this.index;this.index+=2;const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"set",items:n,raw:this.text.slice(e,this.index)};n.push(this.readValue())}}readToken(){const e=this.index;for(;this.index<this.text.length&&!VA(this.text[this.index]);)this.index+=1;if(this.index===e)throw new Error("expected token");return this.text.slice(e,this.index)}expect(e){if(this.text[this.index]!==e)throw new Error(`expected ${e}`);this.index+=1}skipWhitespace(){for(;this.index<this.text.length&&/[\s,]/.test(this.text[this.index]);)this.index+=1}}function VA(s){return/[\s,\[\]\(\)\{\}"]/.test(s)}function gd(s,e){const n=e.exec(s);return n?n[1].replace(/^:/,""):""}function GA(s,e){const n=Gr(s,":rendered-error");if(n)return n;const a=s.indexOf(":eval {:status :failed"),l=a>=0?Gr(s.slice(a),":message"):"";if(l)return l;const c=Gr(s,":error")||Gr(s,":message");if(c)return c;const u=e?` in ${e}`:"",f=s.match(/:diagnostics\s+\[(.*?)]/s)?.[1]?.trim();return f?`Evaluation failed${u}.
${f}`:`Evaluation failed${u}.`}function Gr(s,e){const n=s.indexOf(e);if(n<0)return null;let a=n+e.length;for(;a<s.length&&/\s/.test(s[a]);)a+=1;if(s[a]!=='"')return null;const l=n1(s,a);return l?l.value:null}function n1(s,e){let n="",a=!1;for(let l=e+1;l<s.length;l+=1){const c=s[l];if(a){n+=$A(c),a=!1;continue}if(c==="\\"){a=!0;continue}if(c==='"')return{value:n,end:l+1};n+=c}return null}function $A(s){return s==="n"?`
`:s==="r"?"\r":s==="t"?"	":s==="b"?"\b":s==="f"?"\f":s}class Os extends Error{constructor(e,n,a={}){super(n),this.name="BrowserCapabilityError",this.kind=e,this.data=a}}class ks{constructor(e=[]){this.allowed=new Set(e.map(String))}static fromManifest(e={}){return new ks(e.allow||[])}allows(e,n){return this.allowed.has("*")||this.allowed.has(al(e,n))}entries(){return[...this.allowed].sort()}}class zh{constructor(){this.handlers=new Map}register(e,n,a){return this.handlers.set(al(e,n),a),this}invoke(e,n,a){const l=al(e,n),c=this.handlers.get(l);if(!c)throw new Os("adapter-missing",`browser capability adapter is missing for ${l}`,Bh(e,n));return c(a)}entries(){return[...this.handlers.keys()]}}class YA{constructor({registry:e=new zh,policy:n=new ks}={}){this.registry=e,this.policy=n instanceof ks?n:ks.fromManifest(n),this.lastTrace=null}call(e){const n={requestText:e,responseText:""};try{const a=i1(e),l=ch(a.package),c=ch(a.export),u=Array.isArray(a.args)?a.args:[],f=al(l,c);if(Object.assign(n,{packageName:l,exportName:c,capability:f,argsCount:u.length}),!this.policy.allows(l,c))throw new Os("policy-denied",`browser policy denies ${f}`,Bh(l,c));const h=this.registry.invoke(l,c,u);if(cE(h))return this.lastTrace={...n,status:"pending",suspended:!0},h.then(g=>{const b=tb(g);return this.lastTrace={...n,status:"completed",suspended:!0,resumed:!0,responseText:b},b},g=>{const b=nb(ib(g),g.message||String(g),sb(n,g));return this.lastTrace={...n,status:"failed",suspended:!0,resumed:!0,kind:ib(g),error:g.message,responseText:b},b});const p=tb(h);return this.lastTrace={...n,status:"completed",responseText:p},p}catch(a){const l=a instanceof Os?a.kind:"provider-error",c=nb(l,a.message||String(a),sb(n,a));return this.lastTrace={...n,status:"failed",kind:l,error:a.message,responseText:c},c}}async callAsync(e){return await this.call(e)}}class KA{constructor({manifestUrl:e,manifest:n,runtimeUrl:a,adapterBaseUrl:l=null,optimizerManifestUrl:c=null,sourceLibraries:u=[],packages:f=[],packageBundleText:h="",initialNamespace:p="",registry:g=new zh,providerInstances:b=new Map,policy:v=new ks,host:S=null}){this.manifestUrl=e,this.manifest=n,this.runtimeUrl=a,this.adapterBaseUrl=l,this.optimizerManifestUrl=c,this.sourceLibraries=u,this.packages=f,this.packageBundleText=h,this.initialNamespace=p,this.registry=g,this.providerInstances=b,this.policy=v,this.host=S||new YA({registry:g,policy:v})}engineOptions(e={}){return{...e,host:e.host??this.host,...this.adapterBaseUrl?{adapterBaseUrl:this.adapterBaseUrl}:{},...this.optimizerManifestUrl?{optimizerManifestUrl:this.optimizerManifestUrl}:{}}}configureSession(e,n,a={phases:"all"}){const l=[];this.packageBundleText&&l.push(e.loadPackage(n,this.packageBundleText));for(const c of this.sourceLibraries)l.push(tE(e,n,c,a));return this.initialNamespace&&l.push(e.evaluateSession(n,`(ns ${this.initialNamespace})`,a)),l}async configureSessionAsync(e,n,a={phases:"all"}){const l=[];this.packageBundleText&&l.push(await e.loadPackageAsync(n,this.packageBundleText));for(const c of this.sourceLibraries)l.push(await nE(e,n,c,a));return this.initialNamespace&&l.push(await e.evaluateSessionAsync(n,`(ns ${this.initialNamespace})`,a)),l}}function al(s,e){return`${s}/${e}`}async function WA(s,e={}){const n=rE(s),a=e.readJson||lE,l=e.readText||oE,c=e.importModule||(U=>import(U)),u=e.fetch||globalThis.fetch?.bind(globalThis),f=e.target||"wasm-browser",h=await a(n.href);XA(h);const p=xa(uh(h,"runtime"),n).href,g=h.adapterBaseUrl?xa(h.adapterBaseUrl,n).href:null,b=h.optimizedCallables?xa(yd(h.optimizedCallables),n).href:null,v=await Promise.all((h.sourceLibraries||[]).map(async U=>{const K=xa(yd(U),n).href;return{url:K,sourceId:iE(U,K),text:await l(K)}})),S=await Promise.all((h.packages||[]).map(async U=>{const K=xa(yd(U),n).href,$=await l(K),B=i1($);return{url:K,text:$,data:B,packageName:U.package||sE(B)||aE(K)}})),k=new zh,T=ks.fromManifest(h.policy||{}),C=QA(h.session),_=new KA({manifestUrl:n.href,manifest:h,runtimeUrl:p,adapterBaseUrl:g,optimizerManifestUrl:b,sourceLibraries:v,packages:S,packageBundleText:eE(S),initialNamespace:C,registry:k,policy:T});for(const U of h.providers||[]){if((U.target||f)!==f)continue;if(U.kind!=="browser-module")throw new Error(`unsupported browser provider kind ${U.kind}`);const K=xa(uh(U,"module"),n).href,$=await c(K);if(typeof $.register!="function")throw new Error(`browser provider module ${K} does not export register`);const B=$.register(k,{manifest:h,distribution:_,provider:U,moduleUrl:K,target:f,baseUrl:n,fetch:u,BrowserCapabilityError:Os,refusal:FA(f)});B!==void 0&&_.providerInstances.set(U.package||K,B)}return _}function XA(s){const e=["catalog","catalogs","providerManifest","providerManifests","manifests"].filter(n=>s&&Object.hasOwn(s,n));if(e.length>0)throw new Error(`browser distribution manifest uses retired fields ${e.join(", ")}; use packages with package.ras`)}function QA(s={}){const e=String(s?.initialNamespace||"");if(!e)return"";if(!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(e))throw new Error(`invalid browser session initialNamespace ${JSON.stringify(e)}`);return e}function FA(s){return(e,n,a={})=>new Os(e,n,{"rasa.host/target":Wi(s),...a})}function tb(s){return ni({status:Wi("ok"),value:s})}function nb(s,e,n=null){const a={status:Wi("error"),kind:Wi(s),message:e};return n&&Object.keys(n).length>0&&(a.data=n),ni(a)}function ib(s){return s instanceof Os?s.kind:"provider-error"}function sb(s,e){return e instanceof Os?e.data||{}:Bh(s.packageName,s.exportName,{"rasa.browser/name":e?.name||"Error"})}function Bh(s,e,n={}){const a={"rasa.host/target":Wi("wasm-browser"),...n};return s&&e&&(a["rasa.host/capability"]=Wi(al(s,e))),a}function i1(s){return new uE(String(s??"")).parse()}function ni(s){return s==null?"nil":typeof s=="boolean"?String(s):typeof s=="number"?Number.isInteger(s)?String(s):String(Math.round(s*1e3)/1e3):typeof s=="string"?JSON.stringify(s):Lh(s)?`:${s.name}`:_h(s)?s.name:PA(s)?`(${s.items.map(ni).join(" ")})`:JA(s)?`#{${s.items.map(ni).join(" ")}}`:IA(s)?`{${s.entries.map(([e,n])=>`${ni(e)} ${ni(n)}`).join(" ")}}`:Array.isArray(s)?`[${s.map(ni).join(" ")}]`:`{${Object.entries(s).map(([e,n])=>`:${e} ${ni(n)}`).join(" ")}}`}function Wi(s){return{type:"keyword",name:String(s).replace(/^:/,"")}}function ZA(s){return{type:"symbol",name:String(s)}}function Lh(s){return!!(s&&typeof s=="object"&&s.type==="keyword")}function _h(s){return!!(s&&typeof s=="object"&&s.type==="symbol")}function PA(s){return!!(s&&typeof s=="object"&&s.type==="list")}function JA(s){return!!(s&&typeof s=="object"&&s.type==="set")}function IA(s){return!!(s&&typeof s=="object"&&s.type==="map")}function ch(s){return Lh(s)||_h(s)?s.name:String(s??"")}function eE(s){return s.length?ni({schema:Wi("rasa.package-bundle/v1"),packages:s.map(({data:e})=>e)}):""}function tE(s,e,n,a){return typeof s.evaluateSessionWithSourceId=="function"?s.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):s.evaluateSession(e,n.text,a)}async function nE(s,e,n,a){return typeof s.evaluateSessionWithSourceIdAsync=="function"?await s.evaluateSessionWithSourceIdAsync(e,n.sourceId||n.url,n.text,a):typeof s.evaluateSessionWithSourceId=="function"?await s.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):await s.evaluateSessionAsync(e,n.text,a)}function iE(s,e){return typeof s=="object"&&s?.sourceId?String(s.sourceId):e}function sE(s){return ch(s?.id||s?.["package/id"])}function aE(s){const e=new URL(s).pathname.split("/").filter(Boolean),n=e.lastIndexOf("package.ras");return n>0?e[n-1]:""}function yd(s){return typeof s=="string"?s:uh(s,"url")}function uh(s,e){if(!s||s[e]===void 0||s[e]===null||s[e]==="")throw new Error(`browser distribution manifest is missing ${e}`);return s[e]}function xa(s,e){return new URL(s,e)}function rE(s){return new URL(s,globalThis.location?.href||"http://localhost/")}async function lE(s){const e=await fetch(s);if(!e.ok)throw new Error(`browser distribution JSON load failed: ${e.status}`);return e.json()}async function oE(s){const e=await fetch(s);if(!e.ok)throw new Error(`browser distribution asset load failed: ${e.status}`);return e.text()}function cE(s){return!!(s&&typeof s.then=="function")}class uE{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();if(this.ws(),this.index!==this.text.length)throw new Error(`unexpected trailing form at byte ${this.index}`);return e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==="("?this.list():e==="#"&&this.text[this.index+1]==="{"?this.set():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const n=this.form(),a=this.form();e[fE(n)]=a}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}list(){this.expect("(");const e=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:e};e.push(this.form())}}set(){this.expect("#"),this.expect("{");const e=[];for(;;){if(this.ws(),this.peek()==="}")return this.index++,{type:"set",items:e};e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const n=this.text[this.index++];if(n==='"')return e;if(n==="\\"){const a=this.text[this.index++];e+=a==="n"?`
`:a}else e+=n}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const n=this.text.slice(e,this.index);if(!n)throw new Error(`expected form at byte ${this.index}`);return n==="nil"?null:n==="true"?!0:n==="false"?!1:/^-?\d+(\.\d+)?$/.test(n)?Number(n):n.startsWith(":")?Wi(n.slice(1)):ZA(n)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function fE(s){return Lh(s)||_h(s)?s.name:String(s)}const s1="RasaBrowserRuntime",dE="/assets/rasa-browser-runtime.js";function a1(s=Hh()){return s?.[s1]||null}function hE(s={}){const e=s.globalObject||Hh(),n=a1(e);if(n)return n;const a=e.location?.href||"http://rasa.local/",l=new URL(s.sourceUrl||dE,a).href,c=new URL(s.runtimeUrl||"ras.wasm",s.runtimeUrl?a:new URL(".",l).href).href,u=new URL(s.adapterBaseUrl||"rasa-component/",s.adapterBaseUrl?a:c).href,f=new URL(".",l).href,h=Object.freeze({kind:"rasa.browser-runtime.v1",sourceUrl:l,assetBaseUrl:f,runtimeUrl:c,adapterBaseUrl:u,assetUrl(p){return new URL(p,f).href},engineOptions(p={}){return{...p,adapterBaseUrl:p.adapterBaseUrl??u}}});return e[s1]=h,e.document?.documentElement?.setAttribute("data-rasa-browser-runtime","ready"),h}function mE(s={}){const e=s.runtime||a1(s.globalObject)||hE(s),n=e?.runtimeUrl||s.runtimeUrl||"./assets/ras.wasm";return{sourceUrl:e?.sourceUrl||null,assetBaseUrl:e?.assetBaseUrl||null,runtimeUrl:n,adapterBaseUrl:e?.adapterBaseUrl||s.adapterBaseUrl||new URL("rasa-component/",new URL(n,gE(s.globalObject))).href}}async function pE(s,e={}){const n=mE(e),{runtime:a,runtimeUrl:l,adapterBaseUrl:c,globalObject:u,...f}=e;return await s.load(n.runtimeUrl,{...f,adapterBaseUrl:f.adapterBaseUrl??n.adapterBaseUrl})}function Hh(){return typeof window<"u"?window:typeof self<"u"?self:typeof globalThis<"u"?globalThis:{}}function gE(s=Hh()){return s.location?.href||"http://rasa.local/"}const r1="wasm-component",yE="browser-component-adapter-pending",Zo="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.",bE="rasa-component/",l1="rasa:runtime/host",vE="rasa:runtime/host@0.1.0",o1="rasa:runtime/optimizer",xE="rasa:runtime/optimizer@0.1.0",c1="rasa:runtime/source-loader",SE="rasa:runtime/source-loader@0.1.0",wE="rasa:runtime/session@0.1.0",u1="runtime-wasm-before-region-entry",fc=65536,f1=1,d1=2,h1=4,m1=8,p1=16,g1=32,kE=f1|d1|h1|m1|p1|g1,TE=256;class AE extends Error{constructor(e=Zo){super(e),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=r1,this.unavailableReason=yE}}class ab extends Error{constructor(e){super(e),this.name="RasaBrowserHostCallError"}}class qh{static async load(e,n={}){const a=dc(e),l=n.readBytes||b1,c=await l(a,"Rasa runtime component"),u=dc(n.adapterBaseUrl||bE,a),f=n.optimizer??await zE(n,a,l),p=await import(new URL("ras-runtime.js",u).href),g=CE(n.host,f,n.sourceLoader),b=new Map,v=await p.instantiate(async S=>{const k=new URL(S,u),T=b.get(k.href);if(T)return T;const C=await l(k,`Rasa component core module ${S}`),_=await WebAssembly.compile(C);return b.set(k.href,_),_},g);return new qh({url:a.href,adapterBaseUrl:u.href,byteLength:c.byteLength,imports:g,session:v.session||v[wE]})}constructor(e={}){if(!e.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=e.url??null,this.adapterBaseUrl=e.adapterBaseUrl??null,this.byteLength=e.byteLength??null,this.available=!0,this.runtimeKind=r1,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=e.session,this.importObject=e.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new AE(this.message)}evaluate(e,n=null){return this.session.evalSource(ii(e),Hr(n))}inspect(e,n=null){const a=this.session.inspectSource(ii(e),Hr(n));return lb(a,"inspection artifact")}syntaxTokens(e){const n=this.session.syntaxTokens(ii(e));return lb(n,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(e){e!=null&&this.session.sessionFree(e)}setSessionOptimizerEnabled(e,n){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(e,!!n)}loadPackage(e,n){return this.session.sessionLoadPackage(e,Ns(n))}async loadPackageAsync(e,n){return await this.loadPackage(e,n)}evaluateSession(e,n,a=null){return this.session.sessionEval(e,ii(n),Hr(a))}async evaluateSessionAsync(e,n,a=null){return await this.evaluateSession(e,n,a)}evaluateSessionWithSourceId(e,n,a,l=null){if(typeof this.session.sessionEvalWithId!="function")throw new Error("Rasa Wasm component does not export sessionEvalWithId");return this.session.sessionEvalWithId(e,String(n||"browser://eval"),ii(a),Hr(l))}async evaluateSessionWithSourceIdAsync(e,n,a,l=null){return await this.evaluateSessionWithSourceId(e,n,a,l)}evaluateReplSession(e,n,a=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(e,ii(n),Hr(a))}async evaluateReplSessionAsync(e,n,a=null){return await this.evaluateReplSession(e,n,a)}}function ii(s){return new TextEncoder().encode(String(s??""))}function EE(s){return new TextDecoder("utf-8",{fatal:!0}).decode(s)}async function ME(s=[],e={}){const n=new Map;for(const a of s){const l=bd(a.symbol,a.arity);n.set(l,await DE(a,e))}return{canCall(a,l){return n.has(bd(a,l))},tryCall(a,l,c){const u=n.get(bd(a,l));return u?BE(u,c):Gi("missing-callable-region")}}}async function RE(s,e={}){const n=dc(s),a=e.readJson||e3,c=((e.manifest||await a(n.href)).callables||[]).map(u=>({symbol:u.symbol,arity:u.arity,abi:u.abi,inputIndex:u.inputIndex,inputShape:u.inputShape,result:u.result,resultProbe:u.resultProbe,keys:u.keys,packed:u.packed,url:t3(Hi(u,"url"),n).href}));return ME(c,{...e,readBytes:e.readBytes})}function CE(s=null,e=null,n=null){const a={[l1]:OE(s),[o1]:NE(e),[c1]:ZE(n),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new ob},"wasi:cli/stdout":{getStdout:()=>new vd},"wasi:cli/stderr":{getStderr:()=>new vd},"wasi:cli/terminal-input":{TerminalInput:i3},"wasi:cli/terminal-output":{TerminalOutput:s3},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new fh},"wasi:io/error":{Error:n3},"wasi:io/poll":{Pollable:fh,poll:()=>[]},"wasi:io/streams":{InputStream:ob,OutputStream:vd},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return JE(a)}function OE(s){return{call(e){if(!s)throw new ab("no browser host provider is registered");if(typeof s.callBytes=="function")return PE(s.callBytes(e));if(typeof s.call=="function"){const n=s.call(EE(e));return v1(n)?n.then(a=>ii(a)):ii(n)}throw new ab("browser host provider does not implement call")}}}function NE(s){return{canCall(e,n){return typeof s?.canCall=="function"?!!s.canCall(e,n):!1},tryCall(e,n,a){return typeof s?.tryCall=="function"?s.tryCall(e,n,a):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:u1}}}}}async function DE(s,e){const n=XE(s.resultProbe??s.result??"i64"),a=Number.isInteger(s.inputIndex)?s.inputIndex:0,l=Array.isArray(s.keys)?s.keys.map(String):[],c=s.abi||(s.packed?"packed-vector-v1":"utf8-scan-v1"),u=QE(s.packed);try{return{symbol:String(s.symbol),arity:Number(s.arity),abi:c,result:n,inputIndex:a,inputShape:s.inputShape||null,keys:l,packed:u,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:await jE(s,e),blocker:null}}catch(f){return{symbol:String(s.symbol),arity:Number(s.arity),abi:c,packed:u,result:n,inputIndex:a,keys:l,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:f?.message??String(f)}}}}async function jE(s,e){if(s.exports)return s.exports;if(s.instance?.exports)return s.instance.exports;if(typeof s.instantiate=="function"){const c=await s.instantiate();if(c?.exports)return c.exports;if(c?.instance?.exports)return c.instance.exports}const n=s.imports||e.imports||{};let a=s.module??null;if(!a){const c=e.readBytes||b1,u=s.moduleBytes??(s.url?await c(s.url,"WasmGC callable artifact"):null);if(!u)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");a=await WebAssembly.compile(Ns(u))}const l=await WebAssembly.instantiate(a,n);if(l?.exports)return l.exports;if(l?.instance?.exports)return l.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function zE(s,e,n){if(!s.optimizerManifestUrl&&!s.optimizerManifest)return null;const a=s.optimizerManifestUrl?dc(s.optimizerManifestUrl,e).href:e.href;return RE(a,{manifest:s.optimizerManifest,readJson:s.readJson,readBytes:n,onPackedOutput:s.onPackedOutput})}function BE(s,e){if(s.blocker)return Gi(s.blocker.reason);try{if(s.abi==="packed-vector-v1"||s.packed)return LE(s,e);const n=YE(e?.[s.inputIndex]);return n?(qE(s.exports,n),{tag:"executed",val:VE(s)}):Gi("missing-runtime-string-argument")}catch(n){return Gi(WE(n))}}function LE(s,e){const n=s.packed;if(!n)return Gi("missing-browser-packed-callable-abi");const a=_E(s,n),l=a?null:KE(e?.[s.inputIndex]);if(!a&&!l)return Gi("missing-runtime-packed-argument");const c=rb(n.input.element,n.input.length);if(!a&&l.logicalBitExtent!==c)return Gi("browser-packed-input-bit-extent-mismatch");const u=a?new Uint8Array(0):l.bytes;if(u.byteLength!==n.input.byteLength)return Gi("browser-packed-input-byte-length-mismatch");const f=UE(s.exports,u,n);Ac(s.exports,"rasa_run_packed")();const h=new Uint8Array(f.buffer,n.output.offset,n.output.byteLength);return HE(s,h),{tag:"executed",val:{tag:"packed",val:{dtype:n.output.element,shape:[BigInt(n.output.length)],logicalBitExtent:rb(n.output.element,n.output.length),bytes:new Uint8Array(h)}}}}function _E(s,e){return e.input.length===0&&e.input.byteLength===0&&(s.inputShape==="none"||s.arity===0)}function HE(s,e){typeof s.onPackedOutput=="function"&&s.onPackedOutput({symbol:s.symbol,arity:s.arity,abi:s.abi,packed:s.packed,bytes:new Uint8Array(e)})}function qE(s,e){const n=s?.rasa_memory,a=s?.rasa_prepare_utf8;if(!n?.buffer||typeof a!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const l=Math.ceil(e.byteLength/fc),c=Math.ceil(n.buffer.byteLength/fc);l>c&&n.grow(l-c),new Uint8Array(n.buffer,0,e.byteLength).set(e),a(e.byteLength)}function UE(s,e,n){const a=s?.rasa_memory;if(!a?.buffer)throw new Error("missing WasmGC callable packed memory export");const l=Math.max(Number(n.memory.minimumPages||0),Math.ceil((n.output.offset+n.output.byteLength)/fc)),c=Math.ceil(a.buffer.byteLength/fc);return l>c&&a.grow(l-c),new Uint8Array(a.buffer,0,e.byteLength).set(e),a}function VE(s){switch(s.result){case"i64":return{tag:"int64",val:Vh(Uh(s.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:GE(s.exports)};case"i64-map":return{tag:"i64-map",val:$E(s.exports,s.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${s.result}`)}}function GE(s){const e=y1(Uh(s,"rasa_main_vector_len")),n=Ac(s,"rasa_main_vector_i64_at");return Array.from({length:e},(a,l)=>Vh(n(l)))}function $E(s,e){const n=y1(Uh(s,"rasa_main_map_len"));if(n!==e.length)throw new Error(`WasmGC map probe length ${n} did not match planned keys ${e.length}`);const a=Ac(s,"rasa_main_map_i64_at");return e.map((l,c)=>({key:l,value:Vh(a(c))}))}function Uh(s,e){return Ac(s,e)()}function Ac(s,e){const n=s?.[e];if(typeof n!="function")throw new Error(`missing WasmGC callable export ${e}`);return n}function YE(s){return s?.tag==="utf8-string"||s?.tag==="utf8String"?Ns(s.val):null}function KE(s){if(s?.tag!=="packed")return null;const e=s.val,n=e?.logicalBitExtent??e?.["logical-bit-extent"];return typeof n!="bigint"||n<0n||!(e?.bytes instanceof Uint8Array)&&!(e?.bytes instanceof ArrayBuffer)&&!ArrayBuffer.isView(e?.bytes)?null:{logicalBitExtent:n,bytes:Ns(e?.bytes)}}function Gi(s){return{tag:"refused",val:{reason:s,fallback:u1}}}function WE(s){const e=s?.message||String(s);return e.startsWith("unsupported packed scalar ")?"browser-packed-scalar-unsupported":e.includes(" value out of range")?"browser-packed-value-out-of-range":"browser-wasmgc-callable-execution-error"}function bd(s,e){return`${String(s)}/${Number(e)}`}function XE(s){switch(String(s)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(s)}}function QE(s){return s?{input:{element:String(Hi(s.input||{},"element")),length:Number(Hi(s.input||{},"length")),byteLength:Number(Hi(s.input||{},"byteLength"))},output:{element:String(Hi(s.output||{},"element")),length:Number(Hi(s.output||{},"length")),byteLength:Number(Hi(s.output||{},"byteLength")),offset:Number(Hi(s.output||{},"offset"))},memory:{minimumPages:Number(s.memory?.minimumPages||0)}}:null}function rb(s,e){return BigInt(e)*BigInt(FE(s)*8)}function FE(s){const e={u8:1,i8:1,u16:2,i16:2,u32:4,i32:4,u64:8,i64:8}[String(s)];if(!e)throw new Error(`unsupported packed scalar ${s}`);return e}function y1(s){const e=Number(s);if(!Number.isInteger(e)||e<0)throw new Error(`invalid WasmGC probe length ${s}`);return e}function Vh(s){return typeof s=="bigint"?s:(typeof s=="number"&&Number.isSafeInteger(s),BigInt(s))}function ZE(s){return{loadRunnerSources(e,n){if(typeof s?.loadRunnerSources=="function")return s.loadRunnerSources(e,n);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function PE(s){return v1(s)?s.then(e=>Ns(e)):Ns(s)}function JE(s){return{...s,[vE]:s[l1],[xE]:s[o1],[SE]:s[c1],"wasi:cli/environment@0.2.6":s["wasi:cli/environment"],"wasi:cli/exit@0.2.6":s["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":s["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":s["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":s["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":s["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":s["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":s["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":s["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":s["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":s["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":s["wasi:io/error"],"wasi:io/poll@0.2.6":s["wasi:io/poll"],"wasi:io/streams@0.2.6":s["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":s["wasi:random/insecure-seed"]}}function Hr(s){if(typeof s=="number")return s;let e=kE;return s?.phases&&s.phases!=="all"&&(e=(Array.isArray(s.phases)?s.phases:[s.phases]).reduce((a,l)=>a|IE(l),0)),s?.traces&&(e|=TE),e}function IE(s){switch(String(s)){case"reader":return f1;case"analysis":case"analyze":return d1;case"ir":return h1;case"facts":return m1;case"plan":return g1;case"eval":return p1;default:return 0}}function lb(s,e){try{return JSON.parse(s)}catch(n){throw new Error(`failed to parse ${e}: ${n.message}`)}}function Ns(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):ii(s)}async function b1(s,e){const n=await fetch(s);if(!n.ok)throw new Error(`failed to load ${e}: ${n.status}`);return Ns(await n.arrayBuffer())}async function e3(s){const e=await fetch(s);if(!e.ok)throw new Error(`failed to load JSON ${s}: ${e.status}`);return e.json()}function dc(s,e=null){return new URL(String(s),e||globalThis.location?.href||import.meta.url)}function t3(s,e){return new URL(String(s),e)}function Hi(s,e){if(!s||s[e]===void 0||s[e]===null||s[e]==="")throw new Error(`callable WasmGC manifest entry is missing ${e}`);return s[e]}function v1(s){return s&&typeof s.then=="function"}class n3{}class fh{block(){}}class ob{}class vd{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new fh}}class i3{}class s3{}const cb=Object.freeze({phases:"all"}),a3=()=>{};function x1({engineUrl:s="",manifestUrl:e="",bootSource:n="",evalOptions:a=cb,configureOptions:l=cb,onRuntimeStateChange:c=a3,onRunResult:u=null,formatDisplay:f=null}={}){const h=N.useRef(null),p=N.useRef(null),g=N.useRef(0),b=N.useRef([]),v=N.useRef({available:!1,message:Zo,wasmLane:null}),[S,k]=N.useState(v.current),[T,C]=N.useState("loading"),[_,U]=N.useState(""),[K,$]=N.useState("empty"),[B,W]=N.useState([]),[X,te]=N.useState(!1),[me,Ke]=N.useState(0),ot=T==="pending",Ne=N.useCallback(I=>{const ae={...v.current,...I};v.current=ae,k(ae),c(ae)},[c]),yt=N.useCallback(I=>{if(!h.current||!I)return[];try{return h.current.syntaxTokens(String(I)).tokens||[]}catch{return[]}},[]),Le=N.useCallback(()=>{h.current&&g.current&&h.current.freeSession(g.current),h.current=null,p.current=null,g.current=0},[]),We=N.useCallback(async()=>{C("loading"),U(""),$("empty"),W([]),Le();try{const I=e?await WA(e):null;p.current=I;const ae=re=>{b.current.push(re)},E=await pE(qh,{...I?.engineOptions({onPackedOutput:ae})||{onPackedOutput:ae},runtimeUrl:s||I?.runtimeUrl||"./assets/ras.wasm"});if(h.current=E,E.available===!1){C("pending"),U(E.message||Zo),$("notice"),Ne({available:!1,runtimeKind:E.runtimeKind,unavailableReason:E.unavailableReason,message:E.message,distribution:null,capabilities:[],wasmLane:null});return}const q=E.createSession();g.current=q;const F=!!I?.optimizerManifestUrl;F&&E.setSessionOptimizerEnabled(q,!0);const Z=I?await I.configureSessionAsync(E,q,l):[];for(const re of Z)if(fA(re))throw new Error(`failed to configure browser distribution: ${r3(String(re||""),"")}`);if(n){const re=await E.evaluateSessionAsync(q,n,l),le=Py(re);if(le.kind==="error")throw new Error(`failed to load Rasa core: ${le.text}`)}C("ready"),Ne({available:!0,runtimeKind:E.runtimeKind||"wasm-component",distribution:I?.manifestUrl||null,capabilities:I?.policy.entries()||[],message:null,optimizedCallables:I?.optimizerManifestUrl||null,optimizerEnabled:F,wasmLane:null})}catch(I){Le(),C("failed"),U(I.message),$("error"),Ne({available:!1,message:I.message,distribution:null,capabilities:[],wasmLane:null})}},[n,Le,l,s,e,Ne]);N.useEffect(()=>(We(),Le),[We,Le]);const H=N.useCallback(async(I,ae=null)=>{const E=String(I??"");if(ot){const F=h.current?.message||Zo;return U(F),$("notice"),W([]),null}if(!h.current||!g.current||X)return null;te(!0),b.current=[];const q=xd();try{const F=ae?.evalOptions||a,Z=await h.current.evaluateReplSessionAsync(g.current,E,F),re=xd()-q,le=Py(Z),ye=dA(Z),Ue=hA(Z),Ve=b.current.slice(),Vt=(ae?.formatDisplay||f)?.({display:le,parity:Ue,packedOutputs:Ve,report:Z,source:E,wasmLane:ye})||le,Lt={report:Z,display:Vt,rawDisplay:le,parity:Ue,elapsedMs:re,packedOutputs:Ve,source:E,status:Vt.kind==="error"?"error":"ok",wasmLane:ye};return U(Vt.text),$(Vt.kind),W(Vt.kind==="value"?yt(Vt.text):[]),Ke(Ds=>Ds+1),C(Vt.kind==="error"?"error":"ready"),ye&&Ne({available:!0,runtimeKind:h.current.runtimeKind||"wasm-component",wasmLane:ye}),u?.(Lt),Lt}catch(F){const Z={error:F,display:{kind:"error",text:F.message},elapsedMs:xd()-q,packedOutputs:b.current.slice(),source:E,status:"error",wasmLane:null};return U(F.message),$("error"),W([]),C("error"),u?.(Z),Z}finally{te(!1)}},[a,f,u,Ne,X,ot,yt]),Q=N.useCallback(I=>p.current?.providerInstances?.get(String(I))||null,[]),ie=N.useCallback(()=>p.current?.host?.lastTrace||null,[]);return{boot:We,canRun:!!(h.current&&g.current&&!X&&!ot),getHostTrace:ie,getProvider:Q,output:_,outputKind:K,outputTokens:B,run:H,runCount:me,running:X,runtimePending:ot,runtimeState:S,status:T,syntaxTokens:yt}}function xd(){return globalThis.performance?.now?.()??Date.now()}function r3(s,e){const n=s.match(/:failed-phase\s+(:[^\s}]+)/)?.[1]||null,a=s.match(/:message\s+"((?:\\.|[^"\\])*)"/)?.[1]||null;return a?a.replace(/\\n/g,`
`).replace(/\\"/g,'"'):n?`${n} failed`:e||"runtime report failed"}const l3=N.forwardRef(function({ariaLabel:e="Rasa source editor",className:n="",onChange:a=null,onRun:l=null,readOnly:c=!1,source:u=""},f){const h=N.useRef(null),p=N.useRef(null),g=N.useRef(a),b=N.useRef(l);return g.current=a,b.current=l,N.useEffect(()=>{if(!h.current)return;const v=jh({parent:h.current,doc:u,liveLexicalHighlight:!0,onChange:S=>g.current?.(S),onRun:()=>b.current?.(),readOnly:c});return p.current=v,()=>{v.destroy(),p.current=null}},[c]),N.useEffect(()=>{const v=p.current;!v||v.state.doc.toString()===u||v.dispatch({changes:{from:0,to:v.state.doc.length,insert:u}})},[u]),N.useImperativeHandle(f,()=>({focus:()=>p.current?.focus(),getSource:()=>p.current?.state.doc.toString()||"",setSource:v=>{const S=p.current;S&&S.dispatch({changes:{from:0,to:S.state.doc.length,insert:String(v??"")}})}}),[]),x.jsx("div",{"aria-label":e,className:`rasa-editor ${n}`,ref:h})}),S1=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function o3(s,{elapsedMs:e=0}={}){const n=s?.data||{},a=S1.map(([u,f])=>c3(u,f,n[u])),l=f3(n.plan),c=d3(n);return{id:`${s?.label||"run"}:${e}:${s?.status||"unknown"}`,result:s,run:{elapsedMs:e,reportMode:a.some(u=>u.id!=="eval"&&u.status!=="not-requested")?"all":"eval",status:s?.status||"unknown"},parity:{status:s?.status||"unknown",evalStatus:s?.evalStatus||null,renderedValue:s?.renderedValue??null,value:s?.value??null,execution:h3(n.execution,n.lane),optimizer:m3(n.optimizer),phases:a,runtime:p3(n),plan:l,diagnostics:c}}}function c3(s,e,n){if(!n||typeof n!="object")return{id:s,label:e,status:"not-requested",detail:"not captured",diagnostics:0,metrics:{}};const a=Number(n["diagnostic-count"]??n.diagnostics?.length??0),l={diagnostics:a};if(s==="facts"){const c=n.summary||{};Object.assign(l,{facts:Number(c.facts||0),declaredFacts:Number(c["declared-facts"]||0),metadataContracts:Number(c["metadata-contracts"]||0),mode:Qe(n.mode)||"unknown"})}return s==="checks"&&Object.assign(l,{checks:n.results?.length||0,action:Qe(n.action)||null}),s==="plan"&&Object.assign(l,{lanes:n.lanes?.length||0,decisions:n.decisions?.length||0,candidates:n.candidates?.length||0,rejected:n.rejected?.length||0,fallbacks:n.fallbacks?.length||0}),{id:s,label:e,status:Qe(n.status)||"available",detail:u3(s,l),diagnostics:a,metrics:l}}function u3(s,e){return s==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:s==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:s==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:s==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function f3(s){return!s||typeof s!="object"?null:Object.fromEntries(["lanes","decisions","candidates","rejected","fallbacks"].map(e=>[e,(s[e]||[]).map(n=>({type:e==="lanes"?"lane":e.replace(/s$/,""),lane:Qe(n.lane),memoryPath:Qe(n["memory-path"]),wmp:Qe(n.wmp),status:Qe(n.status),decision:Qe(n.decision),candidate:Qe(n.candidate),family:Qe(n.family),evidence:Qe(n.evidence),reason:n.reason||n.message||null}))]))}function d3(s){const e=Array.isArray(s.diagnostics)?s.diagnostics:[];return(e.length?e.map(a=>({record:a,phase:null})):S1.flatMap(([a])=>(s[a]?.diagnostics||[]).map(l=>({record:l,phase:a})))).map(({record:a,phase:l})=>{const c=a.data||a["rasa.diagnostic/data"]||{},u=a.span||a["rasa.diagnostic/primary-span"]||c["rasa.error/span"]||null,f=Qe(a["rasa.diagnostic/severity"])||"info";return{phase:Qe(a.phase||a["rasa.diagnostic/phase"])||l,severity:f,code:Qe(a["rasa.diagnostic/code"]),kind:Qe(a.kind),message:a["rasa.diagnostic/summary"]||a.message||c["rasa.error/message"]||"Diagnostic record",detail:a["rasa.diagnostic/detail"]||null,recoverable:a.recoverable??f!=="error",span:u&&typeof u=="object"?{sourceId:u["source-id"]||null,start:Number(u.start??0),end:Number(u.end??0)}:null}})}function h3(s={},e={}){return!s&&!e?null:{productLane:Qe(s?.["product-lane"]||e?.["product-lane"]),tier:Qe(s?.tier||e?.["runtime-execution-tier"]),status:Qe(s?.status||e?.["runtime-status"]),fallbackPoint:Qe(s?.["fallback-point"]||e?.["fallback-point"])}}function m3(s){return!s||typeof s!="object"?null:{enabled:s.enabled===!0,probes:Number(s.probes||0),admitted:Number(s.admitted||0),executed:Number(s.executed||0),missed:Number(s.missed||0),fallbacks:(s.fallbacks||[]).map(e=>({symbol:e.symbol||null,arity:e.arity??null,reason:Qe(e.reason),fallback:Qe(e.fallback),arguments:e.arguments||[]}))}}function p3(s){const e=s.session||{};return{lane:Qe(s.lane),memoryPath:Qe(s["memory-path"]),collectionImpl:Qe(s["collection-impl"]),hostImports:s["host-imports"]===!0,target:Qe(s.target),sessionMode:Qe(e.mode),persistentDefs:e["persistent-defs"]===!0}}function Qe(s){return s==null?null:typeof s=="object"&&(s.type==="keyword"||s.type==="symbol")?s.name:String(s).replace(/^:/,"")}const g3="rasa.browser-product.v1",y3="rasa.browser-api.v1",b3=Object.freeze({phases:"all"});function v3({manifestUrl:s="/rasa/browser-product.json",evalOptions:e=b3,configureOptions:n=e}={}){const a=N.useRef(null),l=N.useRef(0),[c,u]=N.useState("loading"),[f,h]=N.useState(null),[p,g]=N.useState(null),[b,v]=N.useState(!1),[S,k]=N.useState(null),T=N.useCallback(async()=>{l.current+=1;const U=a.current;a.current=null,await U?.close?.()},[]),C=N.useCallback(async()=>{const U=l.current+1;l.current=U,u("loading"),h(null),g(null);const K=a.current;a.current=null,await K?.close?.();try{const $=new URL(s,globalThis.location.href).href,B=await fetch($,{cache:"no-store"});if(!B.ok)throw new Error(`Rasa browser product manifest failed to load (${B.status})`);const W=await B.json();if(W.schema!==g3||W.api?.version!==y3)throw new Error(`Unsupported Rasa browser product contract ${W.schema||"missing"} / ${W.api?.version||"missing"}`);const me=await(await import(new URL(W.api.module,$).href)).createRasaBrowserProduct($,{evalOptions:e,configureOptions:n});if(U!==l.current){await me.close();return}a.current=me,k({apiVersion:W.api.version,build:W.build,product:W.product,runtimeContract:W.runtimeContract}),u("ready")}catch($){if(U!==l.current)return;h($),u("failed")}},[n,e,s]);N.useEffect(()=>(C(),()=>{T()}),[C,T]);const _=N.useCallback(async(U,K={})=>{const $=a.current;if(!$||b)return null;v(!0),h(null);const B=performance.now();try{const W=await $.eval(String(U??""),K),X=performance.now()-B,te={source:String(U??""),...o3(W,{elapsedMs:X})};return g(te),u(W.status==="ok"?"ready":"refused"),te}catch(W){return h(W),u("failed"),null}finally{v(!1)}},[b]);return{boot:C,canRun:c==="ready"||c==="refused",error:f,evaluate:_,productInfo:S,run:p,running:b,status:c}}const Sd=Object.freeze({phases:"all"});N.forwardRef(function({initialSource:e="(+ 1 2 3)",manifestUrl:n="/rasa/browser-product.json",onRunResult:a=null,onRuntimeStateChange:l=null,subtitle:c="One persistent browser session",title:u="Rasa browser product"},f){const[h,p]=N.useState(e),g=v3({configureOptions:Sd,evalOptions:Sd,manifestUrl:n});N.useEffect(()=>{const S=g.status==="ready"||g.status==="refused";l?.({available:S,message:g.error?.message||null,product:g.productInfo,runtimeKind:S?"wasm-component":null,status:g.status})},[l,g.error,g.productInfo,g.status]);const b=N.useCallback(async(S=null)=>{const k=S===null?h:String(S);S!==null&&p(k);const T=await g.evaluate(k,Sd);return a?.(T),T},[a,g,h]);N.useImperativeHandle(f,()=>({loadSource:S=>p(String(S??"")),reset:()=>g.boot(),runSource:(S=null)=>b(S)}),[b,g.boot]);const v=x3(g);return x.jsxs("section",{className:"rasa-repl","aria-label":u,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:u}),x.jsx("strong",{children:c})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${g.status}`,children:g.status})]}),x.jsx(l3,{className:"rasa-repl__input",onChange:p,onRun:b,source:h}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{disabled:!g.canRun||g.running,onClick:()=>b(),type:"button",children:g.running?"Running":"Run"}),x.jsx("button",{disabled:g.status==="loading",onClick:g.boot,type:"button",children:"Restart session"})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${v.kind}`,children:v.text})]})});function x3(s){if(s.error)return{kind:"error",text:s.error.message||String(s.error)};const e=s.run?.result;return e?e.status==="ok"?{kind:"value",text:e.renderedValue??"nil"}:{kind:"error",text:e.refusal?.message||`Rasa returned ${e.status}`}:{kind:"empty",text:"Run a Rasa form to produce a value."}}const S3="(+ 1 2 3)",w3="Output will appear here.",k3=()=>{};N.forwardRef(function({engineUrl:e="",manifestUrl:n="",initialSource:a=S3,bootSource:l="",title:c="Rasa WASM",subtitle:u="Shared browser session",className:f="",onRuntimeStateChange:h=k3,onRunResult:p=null,onSourceChange:g=null,formatDisplay:b=null},v){const S=N.useRef(null),k=N.useRef(null),T=N.useRef(0),C=N.useRef(null),[_,U]=N.useState(a),K=x1({bootSource:l,engineUrl:e,formatDisplay:b,manifestUrl:n,onRunResult:p,onRuntimeStateChange:h}),$=N.useCallback((te=null,me=80)=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{if(T.current=0,!k.current)return;const Ke=te??k.current?.state.doc.toString()??"";k.current.dispatch({effects:Dh.of(K.syntaxTokens(Ke))})},me)},[K.syntaxTokens]),B=N.useCallback(te=>{const me=String(te??""),Ke=k.current;Ke&&Ke.dispatch({changes:{from:0,to:Ke.state.doc.length,insert:me}}),U(me),g?.(me),$(me,0)},[g,$]);N.useEffect(()=>{if(!(!S.current||k.current))return k.current=jh({parent:S.current,doc:a,onChange:te=>{U(te),g?.(te),$(te)},onRun:()=>{C.current?.()}}),$(a,0),k.current.focus(),()=>{T.current&&clearTimeout(T.current),k.current?.destroy(),k.current=null}},[a,g,$]);const W=N.useCallback(async(te=null)=>{const me=te===null?k.current?.state.doc.toString()??_:String(te);return te!==null&&B(me),K.run(me)},[K.run,B,_]);C.current=()=>W(),N.useImperativeHandle(v,()=>({getProvider:te=>K.getProvider(te),loadSource:te=>B(te),runSource:(te=null)=>W(te),reset:()=>K.boot()}),[W,K.boot,K.getProvider,B]);const X=N.useMemo(()=>HT(K.output||w3,K.outputTokens),[K.output,K.outputTokens]);return x.jsxs("section",{className:`rasa-repl ${f}`,"aria-label":c,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:c}),x.jsx("strong",{children:u})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${K.status}`,children:K.status})]}),x.jsx("div",{className:"rasa-repl__input",ref:S}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{type:"button",onClick:()=>W(),disabled:!K.canRun,children:K.running?"Running":"Run"}),x.jsx("button",{type:"button",onClick:K.boot,disabled:K.status==="loading"||K.runtimePending,children:"Reset engine"}),x.jsxs("span",{children:[K.runCount," runs"]})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${K.outputKind}`,children:X.map((te,me)=>te.className?x.jsx("span",{className:te.className,children:te.text},`${me}:${te.text}`):x.jsx("span",{children:te.text},`${me}:${te.text}`))})]})});function T3({className:s="",onRendered:e=null,renderKey:n=null,scene:a,sourceHash:l}){const c=N.useRef(null),u=N.useRef(e);return u.current=e,N.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>V3(f,a,l),p=h();u.current?.({count:a.primitives.length,detail:`${a.primitives.length.toLocaleString()} drawing instructions rendered by Canvas`,kind:"canvas-primitive-render",label:"Canvas primitive draw",payload:p,unit:"primitives"});const g=new ResizeObserver(h);g.observe(f);const b=new MutationObserver(h);return b.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{g.disconnect(),b.disconnect()}},[n,a,l]),N.createElement("canvas",{className:`rasa-scene-canvas ${s}`.trim(),ref:c})}function A3({className:s="",image:e,onRendered:n=null,renderKey:a=null,sourceHash:l}){const c=N.useRef(null),u=N.useRef(n);return u.current=n,N.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>U3(f,e,l),p=h();u.current?.({count:e.pixels.byteLength,detail:`${e.pixels.byteLength.toLocaleString()} RGBA bytes uploaded with ImageData`,kind:"canvas-image-data-upload",label:"Canvas pixel upload",payload:p,unit:"bytes"});const g=new ResizeObserver(h);return g.observe(f),()=>g.disconnect()},[e,a,l]),N.createElement("canvas",{className:`rasa-grid-canvas ${s}`.trim(),ref:c})}function E3({empty:s=null,events:e,onSectionPlay:n=null,playbackOffsetSeconds:a=0,playbackStartedAtMs:l=null,playing:c=!1,sections:u=[]}){return e.length===0?s:N.createElement(M3,{events:e,onSectionPlay:n,playbackOffsetSeconds:a,playbackStartedAtMs:l,playing:c,sections:u})}function M3({events:s,onSectionPlay:e,playbackOffsetSeconds:n,playbackStartedAtMs:a,playing:l,sections:c}){const u=N.useRef(null),f=N.useRef(null),[h,p]=N.useState(0),g=R3(s,c);N.useEffect(()=>{const S=u.current;if(!S)return;const k=()=>C3(S,g);k();const T=new ResizeObserver(k);T.observe(S);const C=new MutationObserver(k);return C.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{T.disconnect(),C.disconnect()}},[s,c]),N.useEffect(()=>{f.current&&(f.current.scrollLeft=0),p(0)},[s]);const b=l&&a!==null?{"--timeline-duration":`${Math.max(.1,g.maxTime-n)}s`,"--timeline-delay":`${(a-z3())/1e3}s`,"--timeline-start":`${n/g.maxTime*100}%`}:null,v=D3(g,f.current,h);return N.createElement("section",{"aria-label":`${s.length.toLocaleString()} exact Rasa-scheduled events across ${g.tracks.length} tracks`,className:"sequencer score-sequencer","data-playing":!!b,style:{"--score-track-count":g.tracks.length}},N.createElement("aside",{className:"score-track-labels"},N.createElement("span",{className:"score-corner"},"Tracks"),...g.tracks.map(([S,k])=>N.createElement("span",{className:"score-track-label",key:S},N.createElement("strong",null,S),N.createElement("small",null,`${k.length.toLocaleString()} notes`)))),N.createElement("div",{className:"score-scroll",onScroll:S=>p(S.currentTarget.scrollLeft),ref:f},N.createElement("div",{className:"score-content",style:{width:`${g.timelineWidth}px`}},N.createElement("div",{className:"score-ruler"},N.createElement("span",{className:"score-time-start"},"0:00"),...g.sections.map(S=>N.createElement("span",{className:"score-section-label",key:`${S.name}:${S.time}`,style:{left:`${S.time/g.maxTime*100}%`}},S.name)),N.createElement("span",{className:"score-time-end"},N3(g.maxTime))),N.createElement("div",{className:"score-canvas-slot"},N.createElement("canvas",{className:"music-score-canvas",ref:u,role:"img",title:"Exact Rasa-generated note events arranged by section, track, time, and pitch"})),b?N.createElement("span",{"aria-hidden":"true",className:"score-playhead-rail"},N.createElement("span",{className:"timeline-playhead",key:`playhead:${a}`,style:b})):null)),g.sections.length>0?N.createElement("nav",{"aria-label":"Score sections",className:"score-section-nav"},...g.sections.map(S=>N.createElement("button",{"aria-pressed":S.name===v,key:`${S.name}:navigate`,onClick:()=>{j3(f.current,g,S),e?.(S)},style:{flexGrow:Math.max(1,S.duration)},title:e?`Play from ${S.name}`:`Show ${S.name}`,type:"button"},S.name))):null)}function R3(s,e=[]){const n=L3(s),a=Math.max(1,...s.map(c=>Number(c.time||0)+Number(c.duration||0))),l=e.map(c=>({name:String(c?.name||"section"),time:Number(c?.time||0),duration:Number(c?.durationSeconds||0)}));return{events:s,maxTime:a,sections:l,timelineWidth:Math.max(780,Math.ceil(a*8)),tracks:n}}function C3(s,e){const n=s.getBoundingClientRect();if(n.width<=0||n.height<=0)return;const a=Math.max(1,globalThis.devicePixelRatio||1);s.width=Math.round(n.width*a),s.height=Math.round(n.height*a);const l=s.getContext("2d");l.setTransform(a,0,0,a,0,0);const c=getComputedStyle(s),u=c.getPropertyValue("--rasa-panel").trim()||"#0b0e12",f=c.getPropertyValue("--rasa-line").trim()||"#27303a",h=n.width,p=n.height,g=p/e.tracks.length;l.fillStyle=u,l.fillRect(0,0,h,p),e.sections.forEach((b,v)=>{const S=b.time/e.maxTime*h,k=b.duration/e.maxTime*h;l.fillStyle=v%2===0?"rgba(246, 211, 101, 0.035)":"rgba(120, 214, 255, 0.025)",l.fillRect(S,0,k,p),l.fillStyle=f,l.fillRect(Math.round(S),0,1,p)}),e.tracks.forEach(([b,v],S)=>{const k=S*g;l.fillStyle=f,l.fillRect(0,Math.round(k),h,1);const T=v.map(U=>Number(U.pitch)).filter(Number.isFinite),C=T.length?Math.min(...T):0,_=T.length?Math.max(...T):0;for(const U of v){const K=Number(U.time||0)/e.maxTime*h,$=Math.max(1.5,Number(U.duration||.05)/e.maxTime*h),B=Number(U.pitch),W=Number.isFinite(B)&&_!==C?(B-C)/(_-C):O3(U.pitch),X=k+g-10-W*Math.max(8,g-20);l.globalAlpha=.82,l.fillStyle=U.color||"#f6d365",l.fillRect(K,X,$,Math.max(2,Math.min(5,g*.08)))}l.globalAlpha=1})}function O3(s){return{kick:.12,snare:.48,"tom-low":.32,"tom-high":.64,hihat:.84,rim:.62,shaker:.72,tick:.92}[String(s)]??.5}function N3(s){const e=Math.max(0,Math.round(s));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function D3(s,e,n){if(!s.sections.length)return null;const a=e?.scrollWidth||s.timelineWidth,l=e?.clientWidth||0,c=(n+l/2)/a*s.maxTime;let u=s.sections[0].name;for(const f of s.sections)f.time<=c&&(u=f.name);return u}function j3(s,e,n){if(!s)return;const a=n.time/e.maxTime*s.scrollWidth;s.scrollTo({behavior:"smooth",left:Math.min(a,s.scrollWidth-s.clientWidth)})}function z3(){return globalThis.performance?.now?.()??Date.now()}function B3(s,{display:e,parity:n,packedOutputs:a=[]}){if(e?.kind!=="value")return e;const l=n?.value;if(s==="music"&&St(Te(l,"status"))==="scheduled"){const f=hc(Te(l,"events"));return{kind:"value",text:["{:status :scheduled",` :boundary ${St(Te(l,"boundary"))||"ordinary-values"}`,` :tracks ${ln(Te(l,"tracks"))}`,` :notes ${ln(Te(l,"notes"))}`,` :events [${f.length} scheduled provider events]`,` :loaded-from ${JSON.stringify(St(Te(l,"loadedFrom"))||"provider")}`,` :trace-count ${ln(Te(l,"traceCount"))}}`].join(`
`)}}if(s!=="visuals")return e;const c=St(Te(l,"kind"));if(c==="rasa.demo/vector-scene"){const f=hc(Te(l,"primitives"));return{kind:"value",text:["{:kind :rasa.demo/vector-scene",` :title ${JSON.stringify(St(Te(l,"title"))||"Vector scene")}`,` :width ${ln(Te(l,"width"))}`,` :height ${ln(Te(l,"height"))}`,` :primitive-count ${f.length}`,` :boundary ${St(Te(l,"boundary"))||"ordinary-values"}`,` :renderer ${St(Te(l,"renderer"))||"canvas-vector-primitives"}}`].join(`
`)}}if(c!=="rasa.demo/packed-rgba-proof")return e;const u=ln(Te(l,"byte-length"));return{kind:"value",text:["{:kind :rasa.demo/packed-rgba-proof",` :title ${JSON.stringify(St(Te(l,"title"))||"Packed image")}`,` :callable ${JSON.stringify(St(Te(l,"callable"))||"missing")}`,` :width ${ln(Te(l,"width"))}`,` :height ${ln(Te(l,"height"))}`,` :byte-length ${u}`,` :packed-output [${u} bytes captured from optimizer memory]`,` :latest-run-packed-outputs ${a.length}`,` :session-optimizer {:executed ${n?.optimizer?.executed??0}}}`].join(`
`)}}function Gh(s){if(s?.status!=="ok")return{status:"idle",message:"No successful Rasa run."};const e=s.parity?.value;if(!e)return{status:"missing-value",message:"Rasa did not return a structured value."};const n=St(Te(e,"kind"));if(n==="rasa.demo/vector-scene")return _3(s);if(n==="rasa.demo/packed-rgba-proof"){const a=H3(s);return a.status==="ok"?{status:"ok",type:"packed",image:a}:a}return{status:"wrong-kind",message:`Expected :rasa.demo/vector-scene or :rasa.demo/packed-rgba-proof from Rasa, got ${n||"no :kind"}.`}}function ub(s){let e=2166136261;const n=String(s||"");for(let a=0;a<n.length;a+=1)e^=n.charCodeAt(a),e=Math.imul(e,16777619);return e>>>0}function L3(s){const e=new Map;for(const n of s){const a=String(n.track||"track");e.has(a)||e.set(a,[]),e.get(a).push(n)}return[...e.entries()]}function _3(s){const e=s.parity?.value,n=ln(Te(e,"width")),a=ln(Te(e,"height")),l=hc(Te(e,"primitives")).map(mc).filter(Boolean);return!n||!a?{status:"missing-size",message:"Rasa returned a vector scene without numeric width and height."}:l.length===0?{status:"missing-primitives",message:"Rasa returned a vector scene without drawable primitives."}:{status:"ok",type:"scene",scene:{kind:St(Te(e,"kind")),title:St(Te(e,"title")),background:St(Te(e,"background")),renderer:St(Te(e,"renderer")),boundary:St(Te(e,"boundary")),metrics:mc(Te(e,"metrics"))||{},width:n,height:a,primitives:l}}}function H3(s){const e=Number(s.parity?.optimizer?.executed||0)>0||Number(s.wasmLane?.optimizer?.executed||0)>0||s.wasmLane?.optimizedStatus==="executed";if(!e)return{status:"missing-wmp",message:"The visual source returned without executing a browser WMP-2 packed optimizer region."};const n=s.parity?.value,a=ln(Te(n,"width")),l=ln(Te(n,"height")),c=ln(Te(n,"byte-length")),u=St(Te(n,"callable"));if(!u)return{status:"missing-callable",message:"Rasa returned the packed image marker without naming its packed callable."};const f=q3(s,u);if(f?.status==="error")return f;const h=f?.bytes||null,p=a*l*4;return!a||!l||!c||!h?.byteLength?{status:"missing-pixels",message:"Rasa returned the packed image marker but no optimizer byte output was captured."}:c!==p||h.byteLength!==p?{status:"wrong-size",message:`Packed RGBA byte length mismatch: expected ${p}, report says ${c}, optimizer returned ${h.byteLength}.`}:{status:"ok",title:St(Te(n,"title")),callable:u,pixelOrigin:St(Te(n,"pixel-origin")),width:a,height:l,byteLength:c,pixels:h,optimizerExecuted:e}}function q3(s,e){const n=Array.isArray(s?.packedOutputs)?s.packedOutputs:[],a=n.filter(l=>l?.symbol===e);return a.length!==1?{status:"error",message:`Packed output mismatch for ${e}: expected exactly one matching optimizer output, saw ${a.length} matching output(s) out of ${n.length}.`}:a[0]}function U3(s,e,n){if(!e?.pixels?.byteLength)return null;s.width=e.width,s.height=e.height;const a=s.getContext("2d"),l=new Uint8ClampedArray(e.pixels);return a.imageSmoothingEnabled=!1,a.putImageData(new ImageData(l,e.width,e.height),0,0),s.dataset.sourceHash=String(n),s.dataset.pixelOrigin=e.pixelOrigin||"wmp-2-packed-loop",s.dataset.optimizerExecuted=String(e.optimizerExecuted),l}function V3(s,e,n){const a=s.getBoundingClientRect(),l=Math.max(320,Math.floor(a.width)),c=Math.max(240,Math.floor(a.height)),u=Math.min(window.devicePixelRatio||1,2);s.width=Math.floor(l*u),s.height=Math.floor(c*u);const f=s.getContext("2d");f.setTransform(u,0,0,u,0,0),f.clearRect(0,0,l,c),f.fillStyle=e.background||"#05070a",f.fillRect(0,0,l,c);const h=Math.max(1,Number(e.width||l)),p=Math.max(1,Number(e.height||c)),g=Math.min(l/h,c/p);f.save(),f.translate((l-h*g)/2,(c-p*g)/2),f.scale(g,g);for(const b of e.primitives)G3(f,b);return f.restore(),s.dataset.sourceHash=String(n),s.dataset.sceneKind=e.kind||"rasa.demo/vector-scene",s.dataset.primitiveCount=String(e.primitives.length),s.dataset.boundary="ordinary-values",e}function G3(s,e){const n=String(e.shape||"");s.save(),s.globalAlpha=$3(e.alpha),n==="rect"?(e.fill&&(s.fillStyle=e.fill,s.fillRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0))),e.stroke&&(s.strokeStyle=e.stroke,s.lineWidth=1,s.strokeRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0)))):n==="line"?(s.strokeStyle=e.stroke||e.fill||"#e8edf2",s.lineWidth=Number(e["line-width"]||e.lineWidth||1),s.lineCap="round",s.beginPath(),s.moveTo(Number(e.x1||0),Number(e.y1||0)),s.lineTo(Number(e.x2||0),Number(e.y2||0)),s.stroke()):n==="circle"&&(s.beginPath(),s.arc(Number(e.x||0),Number(e.y||0),Number(e.r||0),0,Math.PI*2),e.fill&&(s.fillStyle=e.fill,s.fill()),e.stroke&&(s.strokeStyle=e.stroke,s.lineWidth=1,s.stroke())),s.restore()}function $3(s){const e=Number(s);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):1}function Te(s,e){return!s||s.kind!=="map"?null:s.entries.find(n=>w1(n.key)===e)?.value||null}function St(s){return s?s.kind==="string"?s.value:s.kind==="keyword"?s.name:s.kind==="symbol"?s.raw:s.kind==="number"?String(s.value):"":""}function ln(s){return s?.kind==="number"?Number(s.value):null}function hc(s){return s?.kind==="vector"||s?.kind==="list"?Array.isArray(s.items)?s.items:[]:[]}function mc(s){return s?s.kind==="number"?Number(s.value):s.kind==="string"?s.value:s.kind==="keyword"?s.name:s.kind==="symbol"?s.raw:s.kind==="boolean"||s.kind==="bool"?!!s.value:s.kind==="nil"?null:s.kind==="vector"||s.kind==="list"?hc(s).map(mc):s.kind==="map"?Object.fromEntries((s.entries||[]).map(e=>[w1(e.key),mc(e.value)])):null:null}function w1(s){return s?.kind==="keyword"?s.name:s?.kind==="string"?s.value:s?.kind==="symbol"?s.raw:""}const Y3=`(ns rasa.array)

(def ^{:doc "Creates a checked read-only packed view for admitted primitive storage types."
       :rasa.impl/backing rasa.array.impl/view}
  view
  rasa.array.impl/view)

(def ^{:doc "Creates local mutable packed construction storage for a packed compute region."
       :rasa.impl/backing rasa.array.impl/builder}
  builder
  rasa.array.impl/builder)

(def ^{:doc "Reads one scalar element from a packed array or local builder."
       :rasa.impl/backing rasa.array.impl/get}
  get
  rasa.array.impl/get)

(def ^{:doc "Writes one scalar element to a local mutable packed builder."
       :rasa.impl/backing rasa.array.impl/set!}
  set!
  rasa.array.impl/set!)

(def ^{:doc "Consumes a local mutable packed builder and returns an immutable packed value."
       :rasa.impl/backing rasa.array.impl/freeze!}
  freeze!
  rasa.array.impl/freeze!)

(def ^{:doc "Explicitly projects a packed immutable value to an ordinary typed persistent vector."
       :rasa.impl/backing rasa.array.impl/materialize}
  materialize
  rasa.array.impl/materialize)
`,K3=`(ns rasa.core)

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

(def ^{:doc "Returns the integer quotient of x divided by y."
       :rasa.impl/backing rasa.prim/quot}
  quot
  rasa.prim/quot)

(def ^{:doc "Returns the bitwise and of integer arguments."
       :rasa.impl/backing rasa.prim/bit-and}
  bit-and
  rasa.prim/bit-and)

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

(def ^{:doc "Returns an ordinary persistent vector whose elements satisfy the checked builtin type contract."
       :rasa.impl/backing rasa.prim/vector-of}
  vector-of
  rasa.prim/vector-of)

(def ^{:doc "Returns an empty collection of the same broad kind as coll while preserving a typed vector contract."
       :rasa.impl/backing rasa.prim/empty}
  empty
  rasa.prim/empty)

(def ^{:doc "Returns a vector or list stack without its next item while preserving a typed vector contract."
       :rasa.impl/backing rasa.prim/pop}
  pop
  rasa.prim/pop)

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

(defn ex-info
  "Returns a portable Rasa error value with message, data, and optional cause."
  ([message data]
   (ex-info message data nil))
  ([message data cause]
   {:rasa/error true
    :rasa.error/kind :rasa.error/exception-info
    :rasa.error/category :error
    :rasa.error/message message
    :rasa.error/data data
    :rasa.error/span nil
    :rasa.error/cause cause}))

(defn ex-data
  "Returns the data map carried by a portable Rasa error value."
  [ex]
  (get ex :rasa.error/data))

(defn ex-category
  "Returns the broad category carried by a portable Rasa error value."
  [ex]
  (get ex :rasa.error/category))

(defn ex-kind
  "Returns the specific kind carried by a portable Rasa error value."
  [ex]
  (get ex :rasa.error/kind))

(defn ex-message
  "Returns the message carried by a portable Rasa error value."
  [ex]
  (get ex :rasa.error/message))

(defn ex-cause
  "Returns the cause carried by a portable Rasa error value."
  [ex]
  (get ex :rasa.error/cause))

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
  (if (vector? coll) coll (into [] coll)))

(defn set
  "Returns a set containing the items of coll."
  [coll]
  (into #{} coll))

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

(def ^{:doc "Looks up a map key, vector or string index, or set member and returns nil or the supplied default when absent."
       :rasa.impl/backing rasa.prim/get}
  get
  rasa.prim/get)

(def ^{:doc "Returns whether a map has a key, vector or string has an index, or set has a member."
       :rasa.impl/backing rasa.prim/contains?}
  contains?
  rasa.prim/contains?)
`,W3=`(ns demo.music.notation)

(defn note
  "Creates an ordinary note event."
  [pitch duration time]
  {:pitch pitch
   :duration duration
   :time time
   :velocity 0.82})

(defn voiced-note [pitch duration time velocity]
  {:pitch pitch
   :duration duration
   :time time
   :velocity velocity})

(defn track [instrument notes]
  {:instrument instrument
   :notes (vec notes)})

(defn arranged-track [instrument notes options]
  (assoc options
         :instrument instrument
         :notes (vec notes)))

(defn beat-seconds [bpm]
  (if (= bpm 72)
    0.833333
    (if (= bpm 96)
      0.625
      (if (= bpm 112)
        0.535714
        (if (= bpm 128)
          0.46875
          0.5)))))

(defn duration-beats [duration]
  (if (= duration "16n")
    0.25
    (if (= duration "8n")
      0.5
      (if (= duration "4n")
        1.0
        0.5))))

(defn seconds-for [config key]
  (* (demo.music.notation/beat-seconds (get config :bpm))
     (demo.music.notation/duration-beats (get config key))))

(defn grid-token? [ch]
  (not (= ch \\space)))

(defn grid-hit? [ch]
  (not (= ch \\.)))

(defn grid-line [config pitch grid-string]
  (let [step (demo.music.notation/seconds-for config :subdivision)]
    (loop [cursor 0
           step-index 0
           out []]
      (if (< cursor (count grid-string))
        (let [ch (nth grid-string cursor)]
          (if (demo.music.notation/grid-token? ch)
            (recur (inc cursor)
                   (inc step-index)
                   (if (demo.music.notation/grid-hit? ch)
                     (conj out (demo.music.notation/note pitch step (* step-index step)))
                     out))
            (recur (inc cursor) step-index out)))
        out))))

(defn drum-machine [config patterns]
  (loop [entries (seq patterns)
         out []]
    (if entries
      (let [entry (first entries)]
        (recur (next entries)
               (into out (demo.music.notation/grid-line config (first entry) (second entry)))))
      out)))

(def chord-book
  {"D3 A3 D4 F4" ["D3" "A3" "D4" "F4"]
   "E3 B3 D4 G4" ["E3" "B3" "D4" "G4"]
   "C3 E3 G3 C4" ["C3" "E3" "G3" "C4"]
   "A2 C3 E3 A3" ["A2" "C3" "E3" "A3"]
   "G3 C4 E4 G4" ["G3" "C4" "E4" "G4"]
   "E3 A3 C4 E4" ["E3" "A3" "C4" "E4"]
   "C3 G3 C4 E4" ["C3" "G3" "C4" "E4"]
   "A2 E3 C4 E4" ["A2" "E3" "C4" "E4"]
   "F3 A3 C4 E4" ["F3" "A3" "C4" "E4"]
   "G3 B3 D4 G4" ["G3" "B3" "D4" "G4"]
   "C3 G3 B3 E4" ["C3" "G3" "B3" "E4"]
   "A2 E3 G3 C4" ["A2" "E3" "G3" "C4"]
   "F2 C3 A3 E4" ["F2" "C3" "A3" "E4"]
   "G2 D3 B3 F4" ["G2" "D3" "B3" "F4"]
   "D3 A3 C4 F4" ["D3" "A3" "C4" "F4"]
   "E3 B3 G4 D5" ["E3" "B3" "G4" "D5"]
   "B2 F#3 A3 D4" ["B2" "F#3" "A3" "D4"]
   "A2 E3 B3 C5" ["A2" "E3" "B3" "C5"]})

(defn chord-pitches [line]
  (get demo.music.notation/chord-book line []))

(defn arpeggio-line [duration line-index line]
  (let [start (* line-index (* duration 4))]
    (map-indexed
      (fn [i pitch]
        (demo.music.notation/note pitch duration (+ start (* i duration))))
      (demo.music.notation/chord-pitches line))))

(defn arpeggiator [config chord-lines]
  (let [duration (demo.music.notation/seconds-for config :duration)]
    (loop [lines (seq chord-lines)
           line-index 0
           out []]
      (if lines
        (recur (next lines)
               (inc line-index)
               (into out (demo.music.notation/arpeggio-line duration line-index (first lines))))
        out))))

(defn pulse-line [config pitches]
  (let [step (demo.music.notation/seconds-for config :duration)]
    (map-indexed
      (fn [i pitch]
        (demo.music.notation/voiced-note pitch step (* i step) 0.72))
      pitches)))

(defn wrap-index [index length]
  (loop [cursor index]
    (if (< cursor length)
      cursor
      (recur (- cursor length)))))

(defn rotated-pitch [pitches index rotate]
  (nth pitches (demo.music.notation/wrap-index (+ index rotate) (count pitches))))

(defn clockwork-velocity [step accent soft]
  (if (= (bit-and step 7) 0)
    accent
    (if (= (bit-and step 3) 0)
      0.74
      soft)))

(defn clockwork-line [config motif options]
  (let [step-size (demo.music.notation/seconds-for config :duration)
        steps (get options :steps)
        rotate (get options :rotate)
        phase (get options :phase)
        duration (get options :note-duration)
        accent (get options :accent)
        soft (get options :soft)]
    (loop [step 0
           out []]
      (if (< step steps)
        (recur
          (inc step)
          (conj out
                (demo.music.notation/voiced-note
                  (demo.music.notation/rotated-pitch motif step rotate)
                  duration
                  (+ phase (* step step-size))
                  (demo.music.notation/clockwork-velocity step accent soft))))
        out))))

(defn chord-notes [duration start velocity line]
  (map-indexed
    (fn [_ pitch]
      (demo.music.notation/voiced-note pitch duration start velocity))
    (demo.music.notation/chord-pitches line)))

(defn chord-pad [config chord-lines options]
  (let [beat (demo.music.notation/beat-seconds (get config :bpm))
        hold (* beat (get options :hold-beats))
        gap (* beat (get options :start-beats))
        velocity (get options :velocity)]
    (loop [lines (seq chord-lines)
           line-index 0
           out []]
      (if lines
        (recur
          (next lines)
          (inc line-index)
          (into out
                (demo.music.notation/chord-notes
                  hold
                  (* line-index gap)
                  velocity
                  (first lines))))
        out))))

(defn rotating-line [config pitches options]
  (let [step-size (demo.music.notation/seconds-for config :duration)
        steps (get options :steps)
        rotate (get options :rotate)
        phase (get options :phase)
        duration (get options :note-duration)
        velocity (get options :velocity)]
    (loop [step 0
           out []]
      (if (< step steps)
        (recur
          (inc step)
          (conj out
                (demo.music.notation/voiced-note
                  (demo.music.notation/rotated-pitch pitches step rotate)
                  duration
                  (+ phase (* step step-size))
                  velocity)))
        out))))

(defn offset-note [note offset]
  (assoc note :time (+ (get note :time) offset)))

(defn offset-notes [notes offset]
  (map
    (fn [note] (demo.music.notation/offset-note note offset))
    notes))

(defn repeat-phrase [notes period repeats]
  (loop [index 0
         out []]
    (if (< index repeats)
      (recur
        (inc index)
        (into out (demo.music.notation/offset-notes notes (* index period))))
      out)))

(defn remainder [value divisor]
  (- value (* (quot value divisor) divisor)))

(defn euclidean-hit? [step hits steps rotate]
  (let [slot (demo.music.notation/remainder (+ step rotate) steps)]
    (< (demo.music.notation/remainder (* slot hits) steps) hits)))

(defn rhythm-velocity [step accent-every accent velocity]
  (if (= (demo.music.notation/remainder step accent-every) 0)
    accent
    velocity))

(defn euclidean
  "Evenly distributes a number of hits across a repeating number of steps."
  [config pitch options]
  (let [step-size (demo.music.notation/seconds-for config :subdivision)
        hits (get options :hits)
        steps (get options :steps)
        total-steps (get options :total-steps)
        rotate (get options :rotate)
        duration (get options :duration)
        velocity (get options :velocity)
        accent-every (get options :accent-every)
        accent (get options :accent)]
    (loop [step 0
           out []]
      (if (< step total-steps)
        (recur
          (inc step)
          (if (demo.music.notation/euclidean-hit? step hits steps rotate)
            (conj out
                  (demo.music.notation/voiced-note
                    pitch
                    duration
                    (* step step-size)
                    (demo.music.notation/rhythm-velocity
                      step accent-every accent velocity)))
            out))
        out))))

(defn note-cycle
  "Plays successive pitches at a fixed step interval while the pitch cycle repeats independently."
  [config pitches options]
  (let [step-size (demo.music.notation/seconds-for config :subdivision)
        total-steps (get options :total-steps)
        every (get options :every)
        rotate (get options :rotate)
        duration (get options :duration)
        velocity (get options :velocity)
        accent-every (get options :accent-every)
        accent (get options :accent)]
    (loop [step 0
           note-index 0
           out []]
      (if (< step total-steps)
        (if (= (demo.music.notation/remainder step every) 0)
          (recur
            (inc step)
            (inc note-index)
            (conj out
                  (demo.music.notation/voiced-note
                    (demo.music.notation/rotated-pitch pitches note-index rotate)
                    duration
                    (* step step-size)
                    (demo.music.notation/rhythm-velocity
                      note-index accent-every accent velocity))))
          (recur (inc step) note-index out))
        out))))

(defn layer
  "Combines independently generated note lines into one ordinary note vector."
  [parts]
  (reduce
    (fn [out notes] (into out notes))
    []
    parts))
`,X3=`(ns demo.music.score)

(def ticks-per-beat 96)

(def duration-table
  {:whole 384
   :half 192
   :quarter 96
   :eighth 48
   :sixteenth 24
   :thirty-second 12})

(def pitch-class
  {\\C 0
   \\D 2
   \\E 4
   \\F 5
   \\G 7
   \\A 9
   \\B 11})

(def digit-value
  {\\0 0
   \\1 1
   \\2 2
   \\3 3
   \\4 4
   \\5 5
   \\6 6
   \\7 7
   \\8 8
   \\9 9})

(defn remainder [value divisor]
  (- value (* (quot value divisor) divisor)))

(defn ticks [duration]
  (get demo.music.score/duration-table duration 96))

(defn accidental [pitch]
  (if (= (count pitch) 3)
    (if (= (nth pitch 1) \\#)
      1
      (if (= (nth pitch 1) \\b) -1 0))
    0))

(defn midi [pitch]
  (let [letter (nth pitch 0)
        octave-char (nth pitch (dec (count pitch)))
        octave (get demo.music.score/digit-value octave-char 4)]
    (+ (* (+ octave 1) 12)
       (get demo.music.score/pitch-class letter 0)
       (demo.music.score/accidental pitch))))

(defn note-step [pitch duration velocity]
  {:pitches [(demo.music.score/midi pitch)]
   :duration (demo.music.score/ticks duration)
   :velocity velocity})

(defn notes
  "Creates a run of equally spaced notes in musician-readable pitch names."
  [duration pitches]
  (mapv
    (fn [pitch]
      (demo.music.score/note-step pitch duration 0.82))
    pitches))

(defn soft-notes [duration pitches]
  (mapv
    (fn [pitch]
      (demo.music.score/note-step pitch duration 0.56))
    pitches))

(defn chord [duration pitches]
  {:pitches (mapv demo.music.score/midi pitches)
   :duration (demo.music.score/ticks duration)
   :velocity 0.58})

(defn rest [duration]
  {:pitches []
   :duration (demo.music.score/ticks duration)
   :velocity 0.0})

(defn grid-token? [ch]
  (not (= ch \\space)))

(defn drum-grid
  "Turns an x-and-dot musician grid into a transformable percussion phrase."
  [duration sound grid]
  (let [step-duration (demo.music.score/ticks duration)]
    (loop [cursor 0
           steps []]
      (if (< cursor (count grid))
        (let [ch (nth grid cursor)]
          (recur
            (inc cursor)
            (if (demo.music.score/grid-token? ch)
              (conj steps
                    {:pitches (if (= ch \\.) [] [sound])
                     :duration step-duration
                     :velocity (if (= ch \\X) 0.92 0.68)})
              steps)))
        {:kind :rasa.music/phrase
         :steps steps
         :ticks (demo.music.score/phrase-ticks steps)}))))

(defn append-token [steps token]
  (if (vector? token)
    (into steps token)
    (conj steps token)))

(defn phrase-ticks [steps]
  (reduce
    (fn [total step]
      (+ total (get step :duration)))
    0
    steps))

(defn phrase
  "Combines note runs, chords, and rests into one transformable motif."
  [tokens]
  (let [steps
        (reduce
          demo.music.score/append-token
          []
          tokens)]
    {:kind :rasa.music/phrase
     :steps steps
     :ticks (demo.music.score/phrase-ticks steps)}))

(defn map-pitches [step f]
  (assoc step :pitches (mapv f (get step :pitches))))

(defn transpose [phrase semitones]
  (assoc phrase
         :steps
         (mapv
           (fn [step]
             (demo.music.score/map-pitches
               step
               (fn [pitch] (+ pitch semitones))))
           (get phrase :steps))))

(defn invert [phrase pivot]
  (let [center (demo.music.score/midi pivot)]
    (assoc phrase
           :steps
           (mapv
             (fn [step]
               (demo.music.score/map-pitches
                 step
                 (fn [pitch] (+ center (- center pitch)))))
             (get phrase :steps)))))

(defn rotate [phrase amount]
  (let [steps (get phrase :steps)
        length (count steps)
        index (if (= length 0)
                0
                (demo.music.score/remainder amount length))
        parts (split-at index steps)
        rotated (into (vec (second parts)) (first parts))]
    (assoc phrase :steps rotated)))

(defn augment [phrase factor]
  (let [steps
        (mapv
          (fn [step]
            (assoc step :duration (* (get step :duration) factor)))
          (get phrase :steps))]
    {:kind :rasa.music/phrase
     :steps steps
     :ticks (demo.music.score/phrase-ticks steps)}))

(defn accent [phrase every strong soft]
  (assoc phrase
         :steps
         (map-indexed
           (fn [index step]
             (assoc step
                    :velocity
                    (if (= (demo.music.score/remainder index every) 0)
                      strong
                      soft)))
           (get phrase :steps))))

(defn dynamics [phrase factor]
  (assoc phrase
         :steps
         (mapv
           (fn [step]
             (assoc step :velocity (* (get step :velocity) factor)))
           (get phrase :steps))))

(defn repeat-phrase [phrase times]
  (loop [index 0
         steps []]
    (if (< index times)
      (recur (inc index) (into steps (get phrase :steps)))
      {:kind :rasa.music/phrase
       :steps steps
       :ticks (demo.music.score/phrase-ticks steps)})))

(defn event [pitch at duration velocity section]
  {:pitch pitch
   :at at
   :duration duration
   :velocity velocity
   :section section})

(defn step-events [step at section]
  (mapv
    (fn [pitch]
      (demo.music.score/event
        pitch
        at
        (get step :duration)
        (get step :velocity)
        section))
    (get step :pitches)))

(defn phrase-events [phrase start section]
  (loop [steps (seq (get phrase :steps))
         cursor start
         out []]
    (if steps
      (let [step (first steps)]
        (recur
          (next steps)
          (+ cursor (get step :duration))
          (into out (demo.music.score/step-events step cursor section))))
      out)))

(defn part [voice phrase options]
  (assoc options
         :voice voice
         :phrase phrase))

(defn canon-phrase [phrase options]
  (-> phrase
      (demo.music.score/rotate (get options :rotate 0))
      (demo.music.score/transpose (get options :transpose 0))
      (demo.music.score/augment (get options :augment 1))))

(defn canon
  "Creates several delayed, transformed entrances from one motif."
  [voice phrase entrances]
  (mapv
    (fn [options]
      (demo.music.score/part
        voice
        (demo.music.score/canon-phrase phrase options)
        options))
    entrances))

(defn append-part [parts item]
  (if (vector? item)
    (into parts item)
    (conj parts item)))

(defn section [name bars part-groups]
  {:name name
   :bars bars
   :parts (reduce demo.music.score/append-part [] part-groups)})

(defn bar-ticks [meter]
  (* (first meter) demo.music.score/ticks-per-beat))

(defn layout-sections [meter sections]
  (loop [remaining (seq sections)
         cursor 0
         out []]
    (if remaining
      (let [section (first remaining)
            duration (* (get section :bars)
                        (demo.music.score/bar-ticks meter))]
        (recur
          (next remaining)
          (+ cursor duration)
          (conj out
                (assoc section
                       :at cursor
                       :duration duration))))
      out)))

(defn repeated-part-events [part section]
  (let [phrase (get part :phrase)
        times (get part :times 1)
        after (* (get part :after-beats 0)
                 demo.music.score/ticks-per-beat)
        period (+ (get phrase :ticks)
                  (* (get part :gap-beats 0)
                     demo.music.score/ticks-per-beat))]
    (loop [index 0
           out []]
      (if (< index times)
        (recur
          (inc index)
          (into out
                (demo.music.score/phrase-events
                  phrase
                  (+ (get section :at)
                     after
                     (* index period))
                  (get section :name))))
        out))))

(defn section-events [voice section]
  (reduce
    (fn [out part]
      (if (= (get part :voice) voice)
        (into out (demo.music.score/repeated-part-events part section))
        out))
    []
    (get section :parts)))

(defn voice-events [voice sections]
  (reduce
    (fn [out section]
      (into out (demo.music.score/section-events voice section)))
    []
    sections))

(defn render-track [voice-entry sections]
  (let [voice (first voice-entry)
        config (second voice-entry)]
    (assoc config
           :voice voice
           :notes (demo.music.score/voice-events voice sections))))

(defn score
  "Compiles named musical sections into the exact integer-tick browser schedule."
  [config voices sections]
  (let [meter (get config :meter)
        laid-out (demo.music.score/layout-sections meter sections)
        tracks
        (mapv
          (fn [voice-entry]
            (demo.music.score/render-track voice-entry laid-out))
          (seq voices))]
    {:kind :rasa.music/score
     :tempo (get config :tempo)
     :meter meter
     :ticks-per-beat demo.music.score/ticks-per-beat
     :sections laid-out
     :tracks tracks}))
`,Q3=`{:schema :rasa.package/v1
 :id demo.tone-js
 :version "0.1.0"
 :exports [{:name play!
            :capability :demo.tone-js/play!
            :provider tone-js
            :signature {:args [{:name tracks :type :vector}]
                        :returns :map}
            :result {:class :value :movement :copy-value}
            :behavior [:browser/audio-output]
            :metadata {:browser/effects [:browser/audio-output]
                       :browser/boundary :ordinary-values
                       :browser/projection :dynamic-value-projection
                       :browser/demo :live-composer}
            :targets [{:target :wasmtime
                       :availability :available}
                      {:target :wasm-browser
                       :availability :requires-adapter
                       :adapter-kind :javascript}]}
           {:name perform!
            :capability :demo.tone-js/perform!
            :provider tone-js
            :signature {:args [{:name score :type :map}]
                        :returns :map}
            :result {:class :value :movement :copy-value}
            :behavior [:browser/audio-output]
            :metadata {:browser/effects [:browser/audio-output]
                       :browser/boundary :ordinary-values
                       :browser/projection :dynamic-value-projection
                       :browser/demo :algorithmic-orchestra}
            :targets [{:target :wasmtime
                       :availability :available}
                      {:target :wasm-browser
                       :availability :requires-adapter
                       :adapter-kind :javascript}]}]
 :providers []
 :metadata {:generated-by "web/demos"
            :browser/boundary :ordinary-values}}
`,F3=`const DEFAULT_TONE_CDN = "https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm";

export class DemosToneAdapter {
  constructor({ toneCdn = DEFAULT_TONE_CDN } = {}) {
    this.toneCdn = toneCdn;
    this.refusal = null;
    this.toneModule = null;
    this.toneLoadPromise = null;
    this.toneStartPromise = null;
    this.audioState = "idle";
    this.audioError = null;
    this.loadedFrom = null;
    this.trace = [];
    this.activeInstruments = [];
    this.activeParts = [];
    this.lastEvents = [];
    this.lastScore = null;
    this.playbackStartedAtMs = null;
    this.started = false;
    this.witnessController = null;
    this.witnessRunId = null;
  }

  async playTracks(tracksValue) {
    const witnessController = this.witnessController;
    const witnessRunId = this.witnessRunId;
    const composition = normalizeComposition(tracksValue);
    const tracks = composition.tracks;
    const events = flattenTrackEvents(tracks);
    const Tone = await this.loadTone();
    let toneStart = this.toneStartPromise;
    const boundary = await witnessController?.beforeEffect?.(witnessRunId, {
      artifact: true,
      artifactDetail: \`\${tracks.length} tracks and \${events.length} notes projected from Rasa's ordinary values\`,
      artifactKind: "rasa-capability-payload",
      artifactLabel: "Projected Rasa capability payload",
      authority: "browser-boundary",
      count: events.length,
      detail: \`\${tracks.length} tracks and \${events.length} notes received by the Tone.js provider\`,
      kind: "ordinary-value-capability-input",
      label: "Tone provider input",
      onRelease: () => {
        if (!toneStart) {
          toneStart = this.activateFromGesture();
        }
      },
      payload: tracksValue,
      unit: "notes",
    }) || null;
    if (!toneStart) toneStart = this.activateFromGesture();
    const audioReady = toneStart ? await toneStart : false;
    if (!audioReady) {
      throw new Error(\`Tone.js audio activation failed: \${this.audioError || "browser audio is unavailable"}\`);
    }
    this.stopTransport(Tone);
    this.disposeParts();
    this.disposeInstruments();

    const instruments = new Map();
    const leadTime = 0.12;
    const baseTime = typeof Tone.now === "function" ? Tone.now() : 0;
    try {
      for (const track of tracks) {
        const instrument = createInstrument(Tone, track);
        instruments.set(track.id, instrument);
        this.activeInstruments.push(instrument);
      }
      configureTransport(Tone, composition);
      const part = createTransportPart(Tone, events, instruments, composition);
      this.activeParts.push(part);
      part.start(0);
      startTransport(Tone, leadTime);
      this.playbackStartedAtMs = monotonicNow() + leadTime * 1000;
    } catch (error) {
      this.stopTransport(Tone);
      this.disposeParts();
      this.disposeInstruments();
      this.playbackStartedAtMs = null;
      this.started = false;
      throw error;
    }

    this.started = true;
    this.lastEvents = events.map((event) => publicEvent(
      event,
      baseTime + leadTime + event.time,
    ));
    this.lastScore = {
      meter: composition.meter,
      sections: composition.sections,
      tempo: composition.tempo,
      ticksPerBeat: composition.ticksPerBeat,
      timeline: composition.timeline,
    };
    const effect = await witnessController?.recordEffect?.(witnessRunId, {
      authority: "browser-effect",
      count: this.lastEvents.length,
      detail: \`\${this.lastEvents.length} Tone.js trigger events scheduled\`,
      inputDigest: boundary?.digest || null,
      kind: "tone-schedule",
      label: "Tone.js schedule",
      payload: this.lastEvents,
      unit: "notes",
    }) || null;
    this.trace.push({
      boundary: "ordinary-values",
      loadedFrom: this.loadedFrom,
      leadTime,
      scheduler: "tone-part-transport",
      timeline: composition.timeline,
      tempo: composition.tempo,
      ticksPerBeat: composition.ticksPerBeat,
      playbackEpochClock: "performance-now",
      transportClock: "tone-transport",
      audioState: this.audioState,
      notes: events.length,
      tracks: tracks.length,
      instruments: tracks.map((track) => track.instrument),
      witnessBoundaryDigest: boundary?.digest || null,
      witnessEffectDigest: effect?.digest || null,
    });

    return {
      view: keyword("live-composer"),
      status: keyword("scheduled"),
      boundary: keyword("ordinary-values"),
      loadedFrom: this.loadedFrom,
      leadTime,
      tempo: composition.tempo,
      meter: composition.meter,
      ticksPerBeat: composition.ticksPerBeat,
      sections: composition.sections,
      tracks: tracks.length,
      notes: events.length,
      events: this.lastEvents,
      playbackStartedAtMs: this.playbackStartedAtMs,
      traceCount: this.trace.length,
      audioState: this.audioState,
    };
  }

  setExecutionWitness(controller, runId) {
    this.witnessController = controller || null;
    this.witnessRunId = runId || null;
  }

  playFromSection(sectionName) {
    const Tone = this.toneModule;
    const section = this.lastScore?.sections?.find((item) => item.name === sectionName);
    if (!Tone || !section || this.activeParts.length === 0) return null;
    this.activateFromGesture();
    Tone.Transport?.stop?.();
    const leadTime = 0.05;
    const offset = \`\${toneTicks(Tone, section.at, this.lastScore.ticksPerBeat)}i\`;
    Tone.Transport.start(\`+\${leadTime}\`, offset);
    this.playbackStartedAtMs = monotonicNow() + leadTime * 1000;
    this.started = true;
    return {
      offsetSeconds: section.time,
      playbackStartedAtMs: this.playbackStartedAtMs,
      section: section.name,
    };
  }

  stop() {
    const Tone = this.toneModule;
    if (!Tone) {
      this.lastEvents = [];
      this.lastScore = null;
      this.playbackStartedAtMs = null;
      this.started = false;
      return;
    }
    this.stopTransport(Tone);
    this.disposeParts();
    this.disposeInstruments();
    this.lastEvents = [];
    this.lastScore = null;
    this.playbackStartedAtMs = null;
    this.started = false;
  }

  loadTone() {
    if (this.toneModule) return Promise.resolve(this.toneModule);
    if (!this.toneLoadPromise) {
      const testModule = globalThis.__RASA_TONE_MODULE__;
      this.toneLoadPromise = (testModule
        ? Promise.resolve(testModule)
        : import(/* @vite-ignore */ this.toneCdn))
        .then((Tone) => {
          this.toneModule = Tone;
          this.loadedFrom = testModule ? "test-module" : this.toneCdn;
          return Tone;
        });
    }
    return this.toneLoadPromise;
  }

  activateFromGesture() {
    if (!this.toneModule) return null;
    this.audioState = "starting";
    this.audioError = null;
    let start;
    try {
      start = this.startTone(this.toneModule);
    } catch (error) {
      this.audioState = "failed";
      this.audioError = error?.message || String(error);
      this.toneStartPromise = Promise.resolve(false);
      return this.toneStartPromise;
    }
    this.toneStartPromise = Promise.resolve(start).then(
      () => {
        this.audioState = "running";
        return true;
      },
      (error) => {
        this.audioState = "failed";
        this.audioError = error?.message || String(error);
        return false;
      },
    );
    return this.toneStartPromise;
  }

  startTone(Tone) {
    if (typeof Tone.start !== "function") {
      throw new Error("Tone.js module does not expose Tone.start()");
    }
    return Tone.start();
  }

  stopTransport(Tone) {
    Tone.Transport?.stop?.();
    Tone.Transport?.cancel?.(0);
  }

  disposeInstruments() {
    for (const instrument of this.activeInstruments) {
      instrument?.dispose?.();
    }
    this.activeInstruments = [];
  }

  disposeParts() {
    for (const part of this.activeParts) {
      part?.dispose?.();
    }
    this.activeParts = [];
  }
}

export function register(registry, context = {}) {
  const adapter = new DemosToneAdapter({
    toneCdn: context.provider?.toneCdn || DEFAULT_TONE_CDN,
  });
  adapter.refusal = context.refusal || null;
  registry.register("demo.tone-js", "play!", ([tracks]) => adapter.playTracks(tracks));
  registry.register("demo.tone-js", "perform!", ([score]) => adapter.playTracks(score));
  void adapter.loadTone().catch(() => {});
  return adapter;
}

function normalizeComposition(value) {
  const ticksPerBeat = numericField(value, "ticks-per-beat", "ticksPerBeat");
  const tempo = numericField(value, "tempo");
  const scoreTracks = collectionItems(value?.tracks);
  const isTickScore = scoreTracks.length > 0 && ticksPerBeat > 0 && tempo > 0;
  const timeline = isTickScore ? "rasa-ticks" : "seconds";
  const context = {
    meter: collectionItems(value?.meter).map(Number),
    sections: normalizeSections(value?.sections, ticksPerBeat, tempo),
    tempo: isTickScore ? tempo : null,
    ticksPerBeat: isTickScore ? ticksPerBeat : null,
    timeline,
  };
  return {
    ...context,
    tracks: normalizeTracks(isTickScore ? scoreTracks : value, context),
  };
}

function normalizeTracks(value, context) {
  return collectionItems(value).map((track, index) => ({
    id: index,
    instrument: payloadName(track?.instrument || \`track-\${index}\`),
    label: payloadName(track?.label || track?.instrument || \`track-\${index}\`),
    color: textPayload(track?.color || ""),
    effects: track?.effects || {},
    notes: collectionItems(track?.notes).map((note) => normalizeNote(note, context)),
  }));
}

function flattenTrackEvents(tracks) {
  return tracks
    .flatMap((track) => track.notes.map((note) => ({
      ...note,
      trackId: track.id,
      instrument: track.instrument,
      label: track.label,
      color: track.color,
    })))
    .sort((left, right) => left.time - right.time || left.trackId - right.trackId);
}

function createTransportPart(Tone, events, instruments, composition) {
  if (typeof Tone.Part !== "function") {
    throw new Error("Tone.js provider requires Tone.Part for scalable score scheduling");
  }
  return new Tone.Part(
    (time, event) => {
      triggerInstrument(Tone, instruments.get(event.trackId), event, time, composition);
    },
    events.map((event) => [transportTime(Tone, event, composition), event]),
  );
}

function configureTransport(Tone, composition) {
  if (composition.timeline !== "rasa-ticks") return;
  if (!Tone.Transport?.bpm) {
    throw new Error("Tone.js provider requires Transport.bpm for a Rasa tick score");
  }
  Tone.Transport.bpm.value = composition.tempo;
}

function startTransport(Tone, leadTime) {
  if (typeof Tone.Transport?.start !== "function") {
    throw new Error("Tone.js provider requires Tone.Transport.start for score playback");
  }
  Tone.Transport.start(\`+\${leadTime}\`);
}

function normalizeNote(note, context) {
  if (context.timeline === "rasa-ticks") {
    const atTicks = Number(note?.at ?? 0);
    const durationTicks = Number(note?.duration ?? 0);
    return {
      pitch: scalarPayload(note?.pitch),
      atTicks,
      durationTicks,
      duration: ticksToSeconds(durationTicks, context),
      time: ticksToSeconds(atTicks, context),
      section: payloadName(note?.section ?? ""),
      velocity: note?.velocity === undefined ? 0.82 : Number(note.velocity),
    };
  }
  return {
    pitch: scalarPayload(note?.pitch),
    duration: Number(note?.duration ?? 0),
    time: Number(note?.time ?? 0),
    velocity: note?.velocity === undefined ? 0.82 : Number(note.velocity),
  };
}

function createInstrument(Tone, track) {
  const instrument = track.instrument;
  const voice = createVoice(Tone, instrument);
  if (instrument === "drums" || instrument === "drum-kit" || instrument === "light-percussion" || instrument === "rock-drums") {
    return voice.toDestination();
  }
  return routeThroughEffects(Tone, voice, track.effects, defaultSpaceForInstrument(instrument));
}

function createVoice(Tone, instrument) {
  if (instrument === "drums" || instrument === "drum-kit" || instrument === "light-percussion" || instrument === "rock-drums") return createDrums(Tone);
  if (instrument === "bass" || instrument === "sub-bass") return createBass(Tone);
  if (instrument === "cello-bass") return createCello(Tone);
  if (instrument === "fingerpicked-guitar") {
    return createRequired(Tone.PluckSynth, "PluckSynth", [{ attackNoise: 0.62, dampening: 3100, resonance: 0.76 }]);
  }
  if (instrument === "felt-piano") {
    return createPoly(Tone, {
      oscillator: { type: "triangle" },
      envelope: { attack: 0.018, decay: 0.85, sustain: 0.18, release: 1.8 },
    });
  }
  if (instrument === "string-ensemble") {
    return createPoly(Tone, {
      oscillator: { type: "triangle8" },
      envelope: { attack: 0.8, decay: 0.6, sustain: 0.78, release: 3.8 },
    });
  }
  if (instrument === "glass-pluck" || instrument === "pluck") {
    return createRequired(Tone.PluckSynth, "PluckSynth", [{ attackNoise: 1, dampening: 4200, resonance: 0.92 }]);
  }
  if (instrument === "clock-marimba") {
    return createRequired(Tone.FMSynth, "FMSynth", [{
      harmonicity: 1.5,
      modulationIndex: 8,
      envelope: { attack: 0.003, decay: 0.45, sustain: 0.08, release: 0.6 },
    }]);
  }
  if (instrument === "warm-pad" || instrument === "pad") {
    return createPoly(Tone, {
      oscillator: { type: "sine" },
      envelope: { attack: 0.35, decay: 0.4, sustain: 0.72, release: 2.4 },
    });
  }
  throw new Error(\`Tone.js provider does not support instrument \${instrument}\`);
}

function routeThroughEffects(Tone, voice, effects, fallbackSpace) {
  let nodes = [];
  try {
    nodes = effectNodes(Tone, payloadName(effects?.space || fallbackSpace));
    if (nodes.length === 0 || typeof voice.connect !== "function") {
      voice.toDestination?.();
      return voice;
    }
    for (let index = 0; index < nodes.length - 1; index += 1) {
      nodes[index].connect?.(nodes[index + 1]);
    }
    nodes[nodes.length - 1].toDestination?.();
    voice.connect(nodes[0]);
    return {
      triggerAttackRelease(...args) {
        voice.triggerAttackRelease?.(...args);
      },
      toDestination() {
        return this;
      },
      dispose() {
        voice.dispose?.();
        for (const node of nodes) {
          node.dispose?.();
        }
      }
    };
  } catch (error) {
    voice.dispose?.();
    for (const node of nodes) node.dispose?.();
    throw error;
  }
}

function effectNodes(Tone, space) {
  if (space === "dry") return [];
  if (space === "shimmer-delay") {
    return createEffectChain(Tone, [
      ["FeedbackDelay", { delayTime: "8n", feedback: 0.28, wet: 0.24 }],
      ["Reverb", { decay: 4.2, wet: 0.34 }],
    ]);
  }
  if (space === "wide-reverb") {
    return createEffectChain(Tone, [
      ["Chorus", { frequency: 0.55, delayTime: 3.2, depth: 0.38, wet: 0.18 }],
      ["Reverb", { decay: 5.8, wet: 0.4 }],
    ]);
  }
  if (space === "bright-room") {
    return createEffectChain(Tone, [
      ["FeedbackDelay", { delayTime: "16n", feedback: 0.16, wet: 0.14 }],
      ["Reverb", { decay: 2.6, wet: 0.24 }],
    ]);
  }
  if (space === "short-room") {
    return createEffectChain(Tone, [["Reverb", { decay: 1.2, wet: 0.2 }]]);
  }
  if (space === "warm-room") {
    return createEffectChain(Tone, [["Reverb", { decay: 2.2, wet: 0.22 }]]);
  }
  if (space === "low-hall") {
    return createEffectChain(Tone, [["Reverb", { decay: 3.8, wet: 0.28 }]]);
  }
  return createEffectChain(Tone, [["Reverb", { decay: 2.8, wet: 0.25 }]]);
}

function createEffectChain(Tone, specifications) {
  const nodes = [];
  try {
    for (const [name, options] of specifications) {
      nodes.push(createRequired(Tone[name], name, [options]));
    }
    return nodes;
  } catch (error) {
    for (const node of nodes) node.dispose?.();
    throw error;
  }
}

function defaultSpaceForInstrument(instrument) {
  if (instrument === "glass-pluck") return "shimmer-delay";
  if (instrument === "clock-marimba") return "bright-room";
  if (instrument === "warm-pad") return "wide-reverb";
  if (instrument === "fingerpicked-guitar" || instrument === "felt-piano") return "warm-room";
  if (instrument === "string-ensemble") return "wide-reverb";
  if (instrument === "cello-bass") return "low-hall";
  return "dry";
}

function createDrums(Tone) {
  const voices = [];
  const requiredVoice = (Constructor, name, args = []) => {
    const voice = createRequired(Constructor, name, args);
    voices.push(voice);
    return voice;
  };
  try {
    const kick = requiredVoice(Tone.MembraneSynth, "MembraneSynth");
    const tom = requiredVoice(Tone.MembraneSynth, "MembraneSynth", [{ pitchDecay: 0.025, octaves: 2.2 }]);
    const snare = requiredVoice(Tone.NoiseSynth, "NoiseSynth");
    const hat = requiredVoice(Tone.NoiseSynth, "NoiseSynth");
    return {
      triggerAttackRelease(pitch, duration, time, velocity) {
        if (pitch === "kick") {
          kick.triggerAttackRelease?.("C2", duration, time, velocity);
        } else if (pitch === "snare") {
          snare.triggerAttackRelease?.(duration, time, velocity);
        } else if (pitch === "hihat") {
          hat.triggerAttackRelease?.(duration, time, velocity);
        } else if (pitch === "tom-low") {
          tom.triggerAttackRelease?.("G1", duration, time, velocity);
        } else if (pitch === "tom-high") {
          tom.triggerAttackRelease?.("D2", duration, time, velocity);
        } else if (pitch === "rim" || pitch === "tick" || pitch === "shaker") {
          hat.triggerAttackRelease?.(duration, time, velocity);
        } else {
          hat.triggerAttackRelease?.(pitch, duration, time, velocity);
        }
      },
      toDestination() {
        kick.toDestination?.();
        snare.toDestination?.();
        hat.toDestination?.();
        tom.toDestination?.();
        return this;
      },
      dispose() {
        for (const voice of voices) voice.dispose?.();
      },
    };
  } catch (error) {
    for (const voice of voices) voice.dispose?.();
    throw error;
  }
}

function createBass(Tone) {
  return createRequired(Tone.MonoSynth, "MonoSynth", [{
    oscillator: { type: "sawtooth" },
    envelope: { attack: 0.01, decay: 0.22, sustain: 0.42, release: 0.7 },
    filterEnvelope: { attack: 0.02, decay: 0.18, sustain: 0.22, release: 0.6, baseFrequency: 120, octaves: 2.4 },
  }]);
}

function createCello(Tone) {
  return createRequired(Tone.MonoSynth, "MonoSynth", [{
    oscillator: { type: "triangle" },
    envelope: { attack: 0.08, decay: 0.4, sustain: 0.62, release: 1.8 },
    filterEnvelope: { attack: 0.1, decay: 0.5, sustain: 0.45, release: 1.5, baseFrequency: 90, octaves: 1.4 },
  }]);
}

function createPoly(Tone, options = {}) {
  if (typeof Tone.PolySynth !== "function") {
    throw new Error("Tone.js module does not expose PolySynth");
  }
  if (typeof Tone.Synth !== "function") {
    throw new Error("Tone.js module does not expose Synth");
  }
  return new Tone.PolySynth(Tone.Synth, options);
}

function createRequired(Constructor, name, args = []) {
  if (typeof Constructor !== "function") {
    throw new Error(\`Tone.js module does not expose \${name}\`);
  }
  return new Constructor(...args);
}

function triggerInstrument(Tone, instrument, event, time, composition) {
  instrument?.triggerAttackRelease?.(
    tonePitch(Tone, event.pitch),
    transportDuration(Tone, event, composition),
    time,
    event.velocity,
  );
}

function publicEvent(event, scheduledAt = null) {
  return {
    track: event.label || event.instrument,
    instrument: event.instrument,
    label: event.label,
    pitch: event.pitch,
    at: event.atTicks ?? null,
    durationTicks: event.durationTicks ?? null,
    duration: event.duration,
    time: event.time,
    section: event.section || null,
    velocity: event.velocity,
    color: event.color,
    scheduledAt,
  };
}

function normalizeSections(value, ticksPerBeat, tempo) {
  if (!(ticksPerBeat > 0 && tempo > 0)) return [];
  const context = { ticksPerBeat, tempo };
  return collectionItems(value).map((section) => ({
    name: payloadName(section?.name ?? "section"),
    bars: Number(section?.bars ?? 0),
    at: Number(section?.at ?? 0),
    duration: Number(section?.duration ?? 0),
    time: ticksToSeconds(Number(section?.at ?? 0), context),
    durationSeconds: ticksToSeconds(Number(section?.duration ?? 0), context),
  }));
}

function transportTime(Tone, event, composition) {
  if (composition.timeline !== "rasa-ticks") return event.time;
  return \`\${toneTicks(Tone, event.atTicks, composition.ticksPerBeat)}i\`;
}

function transportDuration(Tone, event, composition) {
  if (composition.timeline !== "rasa-ticks") return event.duration;
  return \`\${toneTicks(Tone, event.durationTicks, composition.ticksPerBeat)}i\`;
}

function toneTicks(Tone, scoreTicks, ticksPerBeat) {
  const ppq = Number(Tone.Transport?.PPQ ?? 192);
  const scaled = Number(scoreTicks) * ppq;
  if (scaled % ticksPerBeat !== 0) {
    throw new Error(\`Rasa score tick \${scoreTicks} cannot be represented exactly at Tone PPQ \${ppq}\`);
  }
  return scaled / ticksPerBeat;
}

function ticksToSeconds(ticks, context) {
  return Number(ticks) * 60 / (context.ticksPerBeat * context.tempo);
}

function tonePitch(Tone, pitch) {
  if (typeof pitch !== "number") return payloadName(pitch);
  if (typeof Tone.Frequency !== "function") {
    throw new Error("Tone.js provider requires Tone.Frequency for Rasa MIDI pitches");
  }
  return Tone.Frequency(pitch, "midi").toFrequency();
}

function scalarPayload(value) {
  if (typeof value === "number") return value;
  return payloadName(value ?? "");
}

function numericField(value, ...names) {
  for (const name of names) {
    const candidate = Number(value?.[name]);
    if (Number.isFinite(candidate)) return candidate;
  }
  return 0;
}

function collectionItems(value) {
  if (Array.isArray(value)) return value;
  if (value?.type === "list" && Array.isArray(value.items)) return value.items;
  if (value && typeof value === "object") {
    return Object.keys(value)
      .filter((key) => /^\\d+$/.test(key))
      .sort((left, right) => Number(left) - Number(right))
      .map((key) => value[key]);
  }
  return [];
}

function payloadName(value) {
  if (value && typeof value === "object" && (value.type === "keyword" || value.type === "symbol")) {
    return value.name;
  }
  return String(value ?? "");
}

function textPayload(value) {
  if (value && typeof value === "object" && (value.type === "keyword" || value.type === "symbol")) {
    return value.name;
  }
  return value === undefined || value === null ? "" : String(value);
}

function keyword(name) {
  return { type: "keyword", name };
}

function monotonicNow() {
  return globalThis.performance?.now?.() ?? Date.now();
}
`,Z3=`(ns demo.visuals.botanical-glasshouse)

(def scene-width 900)
(def scene-height 760)

(defn rect [role x y w h fill stroke alpha]
  {:shape :rect
   :role role
   :x x
   :y y
   :w w
   :h h
   :fill fill
   :stroke stroke
   :alpha alpha})

(defn line [role x1 y1 x2 y2 stroke width alpha]
  {:shape :line
   :role role
   :x1 x1
   :y1 y1
   :x2 x2
   :y2 y2
   :stroke stroke
   :line-width width
   :alpha alpha})

(defn circle [role x y r fill stroke alpha]
  {:shape :circle
   :role role
   :x x
   :y y
   :r r
   :fill fill
   :stroke stroke
   :alpha alpha})

(defn glass-fill [seed]
  (let [slot (bit-and seed 3)]
    (if (= slot 0)
      "#143147"
      (if (= slot 1)
        "#1b4350"
        (if (= slot 2)
          "#1f385a"
          "#123c3b")))))

(defn leaf-color [seed]
  (let [slot (bit-and seed 7)]
    (if (= slot 0)
      "#4ce08a"
      (if (= slot 1)
        "#7cffb2"
        (if (= slot 2)
          "#2ecf78"
          (if (= slot 3)
            "#b7f5a4"
            (if (= slot 4)
              "#55d7c2"
              (if (= slot 5)
                "#96ec6f"
                "#36b86f"))))))))

(defn bloom-color [seed]
  (let [slot (bit-and seed 7)]
    (if (= slot 0)
      "#ff7eb6"
      (if (= slot 1)
        "#ffd166"
        (if (= slot 2)
          "#9aa8ff"
          (if (= slot 3)
            "#f6f1a7"
            (if (= slot 4)
              "#ff9f7a"
              (if (= slot 5)
                "#d9a7ff"
                "#7fe7ff"))))))))

(defn pane [column row]
  (let [x (+ 74 (* column 112))
        y (+ 96 (* row 96))
        seed (+ (* column 13) (* row 19))]
    [(rect :glass-pane x y 92 78 (glass-fill seed) "#6e9bb1" 0.34)
     (line :glass-glint (+ x 8) (+ y 10) (+ x 82) (+ y 58) "#e7fbff" 1 0.18)
     (line :glass-glint (+ x 80) (+ y 4) (+ x 14) (+ y 70) "#7fe7ff" 1 0.12)]))

(defn pane-row [row]
  (loop [column 0
         out []]
    (if (< column 7)
      (recur (inc column) (into out (pane column row)))
      out)))

(defn panes []
  (loop [row 0
         out []]
    (if (< row 4)
      (recur (inc row) (into out (pane-row row)))
      out)))

(defn ribs []
  (loop [column 0
         out []]
    (if (< column 8)
      (recur
        (inc column)
        (conj out
              (line :glass-rib
                    (+ 64 (* column 112))
                    82
                    (+ 36 (* column 112))
                    614
                    "#8fb8c9"
                    3
                    0.42)))
      out)))

(defn roof []
  [(line :roof-arc 48 92 450 28 "#b8d8e8" 4 0.56)
   (line :roof-arc 450 28 852 92 "#b8d8e8" 4 0.56)
   (line :roof-arc 70 142 450 58 "#6e9bb1" 2 0.36)
   (line :roof-arc 450 58 830 142 "#6e9bb1" 2 0.36)
   (circle :roof-jewel 450 48 11 "#f6d365" "#fff3bb" 0.86)
   (circle :roof-jewel 450 48 5 "#7fe7ff" "#d6fbff" 0.92)])

(defn light-rays []
  [(line :light-ray 130 70 286 642 "#f6d365" 18 0.09)
   (line :light-ray 274 48 406 640 "#7fe7ff" 14 0.08)
   (line :light-ray 450 42 486 642 "#f7f0dd" 20 0.07)
   (line :light-ray 622 48 514 642 "#b7f5a4" 13 0.08)
   (line :light-ray 762 74 624 642 "#ffb7c8" 16 0.08)])

(defn glasshouse []
  (into
    (into
      (into
        [(rect :sky 0 0 scene-width scene-height "#071019" "#071019" 1.0)
         (rect :greenhouse-haze 42 70 816 570 "#0c2430" "#294b5a" 0.72)
         (rect :floor 0 615 scene-width 145 "#07111c" "#07111c" 1.0)
         (rect :reflecting-pool 66 650 768 58 "#0d3344" "#4a7284" 0.66)
         (line :pool-glow 76 676 826 668 "#7fe7ff" 3 0.28)
         (line :pool-glow 106 696 796 686 "#f6d365" 2 0.16)]
        (panes))
      (ribs))
    (into (roof) (light-rays))))

(defn leaf-pair [x y seed]
  [(circle :leaf (- x 15) (+ y 2) (+ 8 (bit-and seed 3)) (leaf-color seed) "#d9ffe4" 0.84)
   (circle :leaf (+ x 15) (- y 2) (+ 7 (bit-and (+ seed 2) 3)) (leaf-color (+ seed 3)) "#d9ffe4" 0.8)
   (line :leaf-vein (- x 20) (+ y 4) (- x 6) (- y 4) "#e4ffdc" 1 0.38)
   (line :leaf-vein (+ x 20) (- y 2) (+ x 6) (- y 7) "#e4ffdc" 1 0.34)])

(defn blossom [x y seed]
  [(circle :blossom x y 10 (bloom-color seed) "#fff6d8" 0.92)
   (circle :blossom (- x 11) (+ y 2) 7 (bloom-color (+ seed 1)) "#fff6d8" 0.82)
   (circle :blossom (+ x 11) (+ y 1) 7 (bloom-color (+ seed 2)) "#fff6d8" 0.82)
   (circle :blossom (- x 2) (- y 11) 7 (bloom-color (+ seed 3)) "#fff6d8" 0.82)
   (circle :blossom (+ x 2) (+ y 11) 6 "#f6d365" "#fff6d8" 0.84)])

(defn seed-pod [x y seed]
  [(circle :seed-pod x y (+ 5 (bit-and seed 2)) "#f6d365" "#fff3bb" 0.86)
   (circle :seed-pod (+ x 8) (+ y 5) 3 "#ff9f7a" "#ffe2c8" 0.8)])

(defn tendril [x y seed]
  (loop [index 0
         out []]
    (if (< index 8)
      (let [x1 (+ x (* index 9))
            y1 (+ y (* (bit-and (+ seed index) 3) 5))
            x2 (+ x (* (inc index) 9))
            y2 (+ y (* (bit-and (+ seed index 1) 3) 5))]
        (recur
          (inc index)
          (conj out
                (line :tendril x1 y1 x2 y2 "#7cffb2" 2 0.48))))
      out)))

(defn vine [plant-index base-x ground steps]
  (loop [step 0
         prev-x base-x
         prev-y ground
         out []]
    (if (< step steps)
      (let [seed (+ (* plant-index 31) (* step 17))
            x (+ base-x (* (bit-and step 1) 22) (* (bit-and seed 3) 4))
            y (- ground (* step 31))]
        (recur
          (inc step)
          x
          y
          (into
            (into
              (into
                (conj out
                      (line :stem prev-x prev-y x y "#4ce08a" (+ 2 (bit-and seed 2)) 0.78))
                (leaf-pair x y seed))
              (if (= (bit-and step 3) 0)
                (blossom x (- y 10) seed)
                []))
            (if (= (bit-and step 3) 2)
              (seed-pod (+ x 10) (- y 7) seed)
              []))))
      out)))

(defn plant [plant-index]
  (let [base-x (+ 90 (* plant-index 112))
        ground (+ 646 (* (bit-and plant-index 1) 16))
        steps (+ 8 (bit-and (+ plant-index 2) 5))
        pot-width (+ 54 (* (bit-and plant-index 3) 7))]
    (into
      (into
        [(rect :planter (- base-x 28) ground pot-width 34 "#152a23" "#6e9b78" 0.94)
         (rect :soil (- base-x 22) (+ ground 5) (- pot-width 12) 8 "#2d2118" "#574332" 0.86)]
        (vine plant-index base-x ground steps))
      (tendril (+ base-x 18) (- ground (* steps 28)) plant-index))))

(defn plants []
  (loop [index 0
         out []]
    (if (< index 7)
      (recur (inc index) (into out (plant index)))
      out)))

(defn hanging-orbs []
  (loop [index 0
         out []]
    (if (< index 14)
      (let [x (+ 72 (* index 58))
            y (+ 112 (* (bit-and index 3) 34))
            seed (+ 50 (* index 11))]
        (recur
          (inc index)
          (into
            (conj out
                  (line :hanging-root x (- y 52) x y "#496f64" 1 0.42))
            (into
              (leaf-pair x y seed)
              (if (= (bit-and index 1) 0)
                (blossom x (+ y 8) seed)
                (seed-pod x (+ y 9) seed))))))
      out)))

(def primitives
  (into
    (into
      (glasshouse)
      (hanging-orbs))
    (plants)))

{:kind :rasa.demo/vector-scene
 :title "L-System Botanical Glasshouse"
 :width scene-width
 :height scene-height
 :background "#071019"
 :renderer :canvas-vector-primitives
 :boundary :ordinary-values
 :source :pure-rasa-user-space
 :metrics {:plants 7
           :hanging-orbs 14
           :glass-panes 28
           :primitive-count (count primitives)
           :renderer-owned-pixels 0}
 :primitives primitives}
`,P3=`(ns demo.visuals.recursive-city)

(def scene-width 1280)
(def scene-height 760)

(defn rect [role x y w h fill stroke alpha]
  {:shape :rect
   :role role
   :x x
   :y y
   :w w
   :h h
   :fill fill
   :stroke stroke
   :alpha alpha})

(defn line [role x1 y1 x2 y2 stroke width alpha]
  {:shape :line
   :role role
   :x1 x1
   :y1 y1
   :x2 x2
   :y2 y2
   :stroke stroke
   :line-width width
   :alpha alpha})

(defn circle [role x y r fill stroke alpha]
  {:shape :circle
   :role role
   :x x
   :y y
   :r r
   :fill fill
   :stroke stroke
   :alpha alpha})

(defn facade-color [seed]
  (let [slot (bit-and seed 7)]
    (if (= slot 0)
      "#132334"
      (if (= slot 1)
        "#18304a"
        (if (= slot 2)
          "#243347"
          (if (= slot 3)
            "#1d3f4d"
            (if (= slot 4)
              "#2b3146"
              (if (= slot 5)
                "#263a5c"
                (if (= slot 6)
                  "#273c38"
                  "#202a3c")))))))))

(defn window-color [seed]
  (let [slot (bit-and seed 7)]
    (if (= slot 0)
      "#ffe08a"
      (if (= slot 1)
        "#7fc7ff"
        (if (= slot 2)
          "#d6f6ff"
          (if (= slot 3)
            "#f49fb6"
            (if (= slot 4)
              "#b7f5a4"
              "#273448")))))))

(defn district-color [seed]
  (let [slot (bit-and seed 3)]
    (if (= slot 0)
      "#0c2132"
      (if (= slot 1)
        "#10283d"
        (if (= slot 2)
          "#15243d"
          "#112b2e")))))

(defn recursive-zone [depth x y w h seed]
  (if (< depth 1)
    [(rect :district-zone x y w h (district-color seed) "#2c4f68" 0.38)]
    (let [split-w (quot w 2)
          split-h (quot h 2)
          gap 8
          right-x (+ x split-w gap)
          low-y (+ y split-h gap)
          right-w (- w split-w gap)
          low-h (- h split-h gap)]
      (into
        (into
          (recursive-zone (dec depth) x y split-w split-h (+ seed 1))
          (recursive-zone (dec depth) right-x y right-w split-h (+ seed 2)))
        (into
          (recursive-zone (dec depth) x low-y split-w low-h (+ seed 3))
          (recursive-zone (dec depth) right-x low-y right-w low-h (+ seed 4)))))))

(defn window-row [x y columns seed]
  (loop [column 0
         out []]
    (if (< column columns)
      (recur
        (inc column)
        (conj out
              (rect :window
                    (+ x (* column 13))
                    y
                    7
                    8
                    (window-color (+ seed column))
                    "#f6eed7"
                    0.9)))
      out)))

(defn tower-windows [x y w h seed]
  (let [columns (max 1 (quot (- w 12) 13))
        rows (max 1 (quot (- h 24) 18))]
    (loop [row 0
           out []]
      (if (< row rows)
        (recur
          (inc row)
          (into out
                (window-row (+ x 7)
                            (+ y 16 (* row 18))
                            columns
                            (+ seed (* row 11)))))
        out))))

(defn tower [district-index tower-index x ground]
  (let [seed (+ (* district-index 17) (* tower-index 9))
        w (+ 34 (* (bit-and seed 3) 12))
        h (+ 92 (* (bit-and (+ seed 5) 7) 20))
        y (- ground h)
        mid (+ x (quot w 2))]
    (into
      (into
        [(rect :tower x y w h (facade-color seed) "#35536d" 0.96)
         (rect :roof (+ x 5) (- y 9) (- w 10) 9 "#101924" "#496782" 0.95)
         (line :antenna mid (- y 9) mid (- y 35) "#f4c467" 2 0.86)]
        (tower-windows x y w h seed))
      [(circle :beacon mid (- y 38) 4 "#ff8ca3" "#ffd0dc" 0.95)])))

(defn district-towers [district-index base-x ground count]
  (loop [i 0
         cursor base-x
         out []]
    (if (< i count)
      (let [seed (+ (* district-index 13) (* i 7))
            w (+ 34 (* (bit-and seed 3) 12))
            spacing (+ w 12)]
        (recur
          (inc i)
          (+ cursor spacing)
          (into out (tower district-index i cursor ground))))
      out)))

(defn plaza-grid [x y seed]
  [(rect :plaza x y 66 22 "#16212b" "#58758f" 0.9)
   (circle :plaza-light (+ x 14) (+ y 11) 4 "#ffe08a" "#f8efc6" 0.9)
   (circle :plaza-light (+ x 34) (+ y 11) 3 "#78a7ff" "#c7dcff" 0.86)
   (circle :plaza-light (+ x 52) (+ y 11) 4 (window-color seed) "#f8efc6" 0.9)])

(defn district [district-index]
  (let [base-x (+ 42 (* district-index 170))
        ground (+ 608 (* (bit-and district-index 1) 18))
        zone-y (- ground 220)
        seed (+ 30 (* district-index 19))]
    (into
      (into
        (into
          (recursive-zone 2 base-x zone-y 152 204 seed)
          (district-towers district-index (+ base-x 8) ground 4))
        [(line :street (- base-x 8) (+ ground 7) (+ base-x 160) (+ ground 7) "#6a8191" 3 0.62)
         (line :street (- base-x 8) (+ ground 23) (+ base-x 160) (+ ground 23) "#263645" 7 0.65)])
      (plaza-grid (+ base-x 46) (+ ground 31) seed))))

(defn districts []
  (loop [index 0
         out []]
    (if (< index 7)
      (recur (inc index) (into out (district index)))
      out)))

(defn transit []
  [(line :transit 18 586 1260 532 "#5bd7ff" 4 0.78)
   (line :transit 26 616 1266 590 "#e8b84a" 3 0.62)
   (line :transit 118 548 1192 510 "#b7f5a4" 2 0.48)
   (circle :station 154 576 7 "#5bd7ff" "#d6f6ff" 0.9)
   (circle :station 358 566 7 "#e8b84a" "#fff1be" 0.9)
   (circle :station 634 552 7 "#5bd7ff" "#d6f6ff" 0.9)
   (circle :station 930 538 7 "#f49fb6" "#ffd0dc" 0.9)
   (circle :station 1144 528 7 "#b7f5a4" "#e4ffdc" 0.9)])

(defn bridge-columns [x y count]
  (loop [index 0
         out []]
    (if (< index count)
      (recur
        (inc index)
        (conj out
              (line :bridge-column
                    (+ x (* index 34))
                    y
                    (+ x (* index 34))
                    (+ y 78)
                    "#3f556a"
                    3
                    0.58)))
      out)))

(defn bridge []
  (into
    [(line :bridge-deck 36 650 1246 650 "#8297a7" 5 0.72)
     (line :bridge-rail 36 636 1246 636 "#34485d" 2 0.78)
     (line :river-line 0 690 1280 676 "#15334d" 8 0.5)
     (line :river-line 0 718 1280 704 "#0e263c" 7 0.65)]
    (bridge-columns 70 650 34)))

(defn sky []
  [(rect :sky 0 0 scene-width scene-height "#071019" "#071019" 1.0)
   (rect :horizon 0 450 scene-width 170 "#0a1a27" "#0a1a27" 0.86)
   (rect :river 0 628 scene-width 132 "#07111c" "#07111c" 1.0)
   (circle :moon 1118 112 42 "#f7f0dd" "#fff8e8" 0.92)
   (circle :moon-shadow 1098 103 44 "#071019" "#071019" 0.72)
   (line :skyline-glow 0 463 scene-width 434 "#223f55" 8 0.38)])

(def primitives
  (into
    (into
      (into (sky) (districts))
      (transit))
    (bridge)))

{:kind :rasa.demo/vector-scene
 :title "Recursive City Engine"
 :width scene-width
 :height scene-height
 :background "#071019"
 :renderer :canvas-vector-primitives
 :boundary :ordinary-values
 :source :pure-rasa-user-space
 :metrics {:districts 7
           :towers 28
           :recursive-depth 2
           :primitive-count (count primitives)
           :transit-lines 3
           :bridge-columns 34}
 :primitives primitives}
`,J3=`(ns demo.music.glass-clockwork
  (:import [demo.tone-js :as tone]))

(def track demo.music.notation/arranged-track)
(def clockwork-line demo.music.notation/clockwork-line)
(def chord-pad demo.music.notation/chord-pad)
(def rotating-line demo.music.notation/rotating-line)
(def drum-machine demo.music.notation/drum-machine)
(def repeat-phrase demo.music.notation/repeat-phrase)
(def seconds-for demo.music.notation/seconds-for)

(def tempo 72)

(def glass-motif
  ["C5" "E5" "G5" "B5" "D6" "B5" "G5" "E5"])

(def answer-motif
  ["A4" "C5" "E5" "G5" "B5" "G5" "E5" "C5"])

(def marimba-motif
  ["E4" "G4" "B4" "D5" "F4" "A4" "C5" "E5"])

(def bass-cycle
  ["C2" "C2" "A1" "A1" "F1" "F1" "G1" "G1"])

(def harmony
  ["C3 G3 B3 E4"
   "A2 E3 G3 C4"
   "F2 C3 A3 E4"
   "G2 D3 B3 F4"
   "C3 E3 G3 C4"
   "D3 A3 C4 F4"
   "E3 B3 G4 D5"
   "F3 A3 C4 E4"
   "G3 B3 D4 G4"
   "B2 F#3 A3 D4"
   "A2 E3 B3 C5"
   "C3 G3 B3 E4"])

(def glass-left
  (clockwork-line
    {:bpm tempo :duration "8n"}
    glass-motif
    {:steps 144
     :rotate 0
     :phase 0.0
     :note-duration 0.26
     :accent 0.88
     :soft 0.52}))

(def glass-right
  (clockwork-line
    {:bpm tempo :duration "8n"}
    answer-motif
    {:steps 144
     :rotate 3
     :phase 0.208
     :note-duration 0.22
     :accent 0.76
     :soft 0.46}))

(def marimba
  (clockwork-line
    {:bpm tempo :duration "4n"}
    marimba-motif
    {:steps 72
     :rotate 2
     :phase 0.416
     :note-duration 0.33
     :accent 0.7
     :soft 0.44}))

(def pads
  (chord-pad
    {:bpm tempo}
    harmony
    {:hold-beats 4
     :start-beats 4
     :velocity 0.36}))

(def bass
  (rotating-line
    {:bpm tempo :duration "4n"}
    bass-cycle
    {:steps 72
     :rotate 0
     :phase 0.0
     :note-duration 0.7
     :velocity 0.68}))

(def percussion-phrase
  (drum-machine
    {:bpm tempo :subdivision "8n"}
    {:kick   "x . . . x . . . x . . . x . . ."
     :rim    ". . . x . . . . . . . x . . . ."
     :shaker "x . x . x . x . x . x . x . x ."
     :tick   ". x . . . x . . . x . . . x . ."}))

(def phrase-period
  (* (seconds-for {:bpm tempo :subdivision "8n"} :subdivision) 16))

(def percussion
  (repeat-phrase percussion-phrase phrase-period 9))

(def composition
  [(track "glass-pluck"
          (into glass-left glass-right)
          {:label "glass pluck"
           :color "#f6d365"
           :effects {:space :shimmer-delay}})
   (track "clock-marimba"
          marimba
          {:label "clock marimba"
           :color "#78d6ff"
           :effects {:space :bright-room}})
   (track "warm-pad"
          pads
          {:label "warm pad"
           :color "#b7f5a4"
           :effects {:space :wide-reverb}})
   (track "sub-bass"
          bass
          {:label "sub bass"
           :color "#9aa8ff"
           :effects {:space :dry}})
   (track "light-percussion"
          percussion
          {:label "light percussion"
           :color "#ffb7c8"
           :effects {:space :short-room}})])

(tone/play! composition)
`,I3=`(ns demo.music.emberlight-suite
  (:import [demo.tone-js :as tone]))

;; Runtime-loaded source libraries are currently addressed through their
;; public Vars. The general macro/package story will replace these aliases
;; with composer notation and a normal namespace require.
(def phrase demo.music.score/phrase)
(def notes demo.music.score/notes)
(def soft-notes demo.music.score/soft-notes)
(def chord demo.music.score/chord)
(def drum-grid demo.music.score/drum-grid)
(def section demo.music.score/section)
(def part demo.music.score/part)
(def canon demo.music.score/canon)
(def accent demo.music.score/accent)
(def dynamics demo.music.score/dynamics)
(def rotate demo.music.score/rotate)
(def transpose demo.music.score/transpose)
(def invert demo.music.score/invert)
(def augment demo.music.score/augment)
(def score demo.music.score/score)

;; Emberlight Suite is an original 64-bar slow-building rock orchestra.
;; Rasa owns every entrance, variation, drum hit, and final transport tick.

(def fingerpicked-theme
  (phrase
    [(notes :eighth
       ["D4" "A4" "C5" "E5" "F5" "E5" "C5" "A4"
        "Bb3" "F4" "A4" "C5" "D5" "C5" "A4" "F4"])]))

(def answering-theme
  (phrase
    [(soft-notes :eighth
       ["A4" "C5" "D5" "F5" "E5" "D5" "C5" "A4"
        "G4" "Bb4" "D5" "E5" "F5" "E5" "D5" "Bb4"])]))

(def piano-voice
  (phrase
    [(notes :quarter
       ["D4" "F4" "A4" "C5" "Bb4" "A4" "F4" "E4"])]))

(def cello-line
  (phrase
    [(notes :quarter
       ["D2" "D2" "C2" "C2" "Bb1" "Bb1" "C2" "A1"])]))

(def string-harmony
  (phrase
    [(chord :whole ["D3" "A3" "C4" "E4" "F4"])
     (chord :whole ["Bb2" "F3" "A3" "C4" "D4"])
     (chord :whole ["G2" "D3" "F3" "A3" "C4"])
     (chord :whole ["C3" "G3" "Bb3" "D4" "E4"])]))

;; The rhythm section enters late. Uppercase hits are accents.
(def steady-kick
  (drum-grid :sixteenth "kick"
    "X . . . . . x . X . . . . . x ."))

(def backbeat
  (drum-grid :sixteenth "snare"
    ". . . . X . . . . . . . X . . ."))

(def breathing-hat
  (drum-grid :sixteenth "hihat"
    "x . x . x . x . x . x . x . x x"))

(def tom-lift
  (drum-grid :sixteenth "tom-low"
    ". . . . . . . . . . x . x x X X"))

(def voices
  [[:guitar
   {:instrument "fingerpicked-guitar"
    :label "Fingerpicked guitar"
    :color "#e7b66d"
    :effects {:space :warm-room}}]

   [:piano
   {:instrument "felt-piano"
    :label "Felt piano"
    :color "#9fc9df"
    :effects {:space :warm-room}}]

   [:strings
   {:instrument "string-ensemble"
    :label "String ensemble"
    :color "#b7d7a8"
    :effects {:space :wide-reverb}}]

   [:cello
   {:instrument "cello-bass"
    :label "Cello and bass"
    :color "#a99bce"
    :effects {:space :low-hall}}]

   [:drums
   {:instrument "rock-drums"
    :label "Late-entry drums"
    :color "#df8f86"
    :effects {:space :short-room}}]])

(def solitary-intro
  (section :solitary-intro 12
    [(part :guitar
       (-> fingerpicked-theme
           (dynamics 0.66)
           (accent 8 0.7 0.46))
       {:times 6})
     (part :piano
       (-> piano-voice (dynamics 0.48))
       {:times 4 :after-beats 8})]))

(def first-verse
  (section :first-verse 12
    [(part :guitar
       (-> fingerpicked-theme
           (rotate 4)
           (dynamics 0.72))
       {:times 6})
     (part :piano
       (-> answering-theme
           (augment 2)
           (dynamics 0.52))
       {:times 3 :after-beats 4})
     (part :strings
       (-> string-harmony (dynamics 0.36))
       {:times 3})]))

(def widening
  (section :widening 12
    [(canon :guitar fingerpicked-theme
       [{:times 6 :after-beats 0 :transpose 0 :rotate 0}
        {:times 5 :after-beats 4 :transpose 7 :rotate 8}])
     (part :piano
       (-> piano-voice
           (invert "D5")
           (dynamics 0.56))
       {:times 6})
     (part :strings
       (-> string-harmony (dynamics 0.48))
       {:times 3})
     (part :cello
       (-> cello-line (dynamics 0.62))
       {:times 6})]))

(def heartbeat
  (section :heartbeat 16
    [(part :guitar
       (-> fingerpicked-theme
           (transpose 5)
           (accent 4 0.86 0.58))
       {:times 8})
     (part :piano
       (-> answering-theme
           (rotate 6)
           (dynamics 0.72))
       {:times 8})
     (part :strings
       (-> string-harmony
           (transpose 5)
           (dynamics 0.62))
       {:times 4})
     (part :cello cello-line {:times 8})
     (part :drums steady-kick {:times 16})
     (part :drums backbeat {:times 16})
     (part :drums breathing-hat {:times 16})
     (part :drums tom-lift {:times 4 :after-beats 12 :gap-beats 12})]))

(def homecoming
  (section :homecoming 12
    [(canon :guitar
       (-> fingerpicked-theme (dynamics 0.78))
       [{:times 6 :after-beats 0 :transpose 0 :rotate 0}
        {:times 5 :after-beats 4 :transpose 12 :rotate 8}])
     (part :piano
       (-> answering-theme
           (invert "A4")
           (augment 2)
           (dynamics 0.64))
       {:times 3})
     (part :strings string-harmony {:times 3})
     (part :cello cello-line {:times 6})
     (part :drums steady-kick {:times 12})
     (part :drums backbeat {:times 12})
     (part :drums breathing-hat {:times 12})
     (part :drums tom-lift {:times 3 :after-beats 12 :gap-beats 12})]))

(def composition
  (score
    {:tempo 72 :meter [4 4]}
    voices
    [solitary-intro first-verse widening heartbeat homecoming]))

(tone/perform! composition)
`,eM=`(ns demo.music.polyrhythm-workshop
  (:import [demo.tone-js :as tone]))

(def track demo.music.notation/arranged-track)
(def euclidean demo.music.notation/euclidean)
(def note-cycle demo.music.notation/note-cycle)
(def chord-pad demo.music.notation/chord-pad)
(def layer demo.music.notation/layer)

;; Every instrument reads this shared clock. A sixteenth-note step lasts
;; about 0.134 seconds, and 320 steps produce about 43 seconds of music.
(def tempo 112)
(def clock {:bpm tempo :subdivision "16n"})
(def total-steps 320)

;; These three rhythms repeat after different numbers of steps. They drift
;; across each other while remaining on the same clock.
(def kick
  (euclidean clock "kick"
    {:hits 5 :steps 16 :total-steps total-steps :rotate 0
     :duration 0.12 :velocity 0.72 :accent-every 4 :accent 0.98}))

(def snare
  (euclidean clock "snare"
    {:hits 3 :steps 12 :total-steps total-steps :rotate 2
     :duration 0.09 :velocity 0.42 :accent-every 3 :accent 0.78}))

(def hihat
  (euclidean clock "hihat"
    {:hits 7 :steps 16 :total-steps total-steps :rotate 1
     :duration 0.045 :velocity 0.22 :accent-every 7 :accent 0.5}))

(def drums (layer [kick snare hihat]))

;; The note lists have different lengths, so their melodies meet in new ways
;; as the shared clock advances. Edit a pitch, :every, or :rotate and rerun.
(def bass
  (note-cycle clock
    ["C2" "Eb2" "G2" "Bb1" "F2"]
    {:total-steps total-steps :every 4 :rotate 0
     :duration 0.42 :velocity 0.55 :accent-every 5 :accent 0.82}))

(def marimba
  (note-cycle clock
    ["C4" "D4" "Eb4" "G4" "A4" "Bb4"]
    {:total-steps total-steps :every 5 :rotate 1
     :duration 0.28 :velocity 0.4 :accent-every 6 :accent 0.72}))

(def glass
  (note-cycle clock
    ["C5" "G5" "D5" "A5" "Eb5" "Bb5" "F5"]
    {:total-steps total-steps :every 7 :rotate 2
     :duration 0.21 :velocity 0.36 :accent-every 7 :accent 0.68}))

(def harmony
  ["C3 G3 B3 E4"
   "A2 E3 G3 C4"
   "F2 C3 A3 E4"
   "G2 D3 B3 F4"
   "D3 A3 C4 F4"
   "E3 B3 G4 D5"
   "F3 A3 C4 E4"
   "G3 B3 D4 G4"
   "B2 F#3 A3 D4"
   "A2 E3 B3 C5"
   "C3 E3 G3 C4"
   "G3 C4 E4 G4"])

(def pads
  (chord-pad
    {:bpm tempo}
    harmony
    {:hold-beats 4 :start-beats 4 :velocity 0.25}))

;; This ordinary Rasa vector is the single source of truth for both sound and
;; the Studio score. JavaScript schedules and draws it; it does not compose it.
(def composition
  [(track "drum-kit" drums
          {:label "three shifting rhythms"
           :color "#ff7a90"
           :effects {:space :short-room}})
   (track "sub-bass" bass
          {:label "five-note bass cycle"
           :color "#8d9cff"
           :effects {:space :dry}})
   (track "clock-marimba" marimba
          {:label "six-note marimba cycle"
           :color "#66d9ef"
           :effects {:space :bright-room}})
   (track "glass-pluck" glass
          {:label "seven-note glass cycle"
           :color "#ffd166"
           :effects {:space :shimmer-delay}})
   (track "warm-pad" pads
          {:label "slow harmonic floor"
           :color "#8ee3a1"
           :effects {:space :wide-reverb}})])

(tone/play! composition)
`,tM=`(ns demo.visuals.packed-oil-current
  (:require [rasa.array :as array]))

(def width 256)
(def height 192)
(def pixel-count 49152)
(def byte-length 196608)

(defn packed-rgba []
  (let [out (array/builder u8 196608)]
    ^rasa.array/Packed
    (loop [p 0]
      (if (< p 49152)
        (do
          (array/set! out (* p 4)
            (+ 28
               (bit-and
                 (+ (* (bit-and (+ (* (quot (bit-and p 255) 8) 5)
                                   (* (quot (quot p 256) 6) 9)
                                   (* (bit-and (+ (quot (bit-and p 255) 16)
                                                  (quot (quot p 256) 12))
                                               15)
                                      11))
                                191)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 8) 31)
                                      (bit-and (quot (quot p 256) 6) 31))
                                   (* (bit-and (+ (* (quot (bit-and p 255) 8) 3)
                                                  (quot (quot p 256) 6))
                                               31)
                                      5))
                                95)
                       1)
                    (* (bit-and (+ (* (bit-and p 3) 5)
                                   (* (bit-and (quot p 256) 3) 7))
                                31)
                       1))
                 223)))
          (array/set! out (+ (* p 4) 1)
            (+ 18
               (bit-and
                 (+ (* (bit-and (+ (* (quot (bit-and p 255) 8) 9)
                                   (* (quot (quot p 256) 6) 4)
                                   (* (bit-and (+ (quot (bit-and p 255) 16)
                                                  (* (quot (quot p 256) 12) 2))
                                               31)
                                      7))
                                191)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 8) 31)
                                      (bit-and (quot (quot p 256) 6) 31))
                                   (* (bit-and (+ (* (quot (bit-and p 255) 8) 3)
                                                  (quot (quot p 256) 6))
                                               31)
                                      5))
                                95)
                       2)
                    (* (bit-and (+ (* (bit-and p 3) 5)
                                   (* (bit-and (quot p 256) 3) 7))
                                31)
                       1))
                 211)))
          (array/set! out (+ (* p 4) 2)
            (+ 46
               (bit-and
                 (+ (* (bit-and (+ (* (quot (bit-and p 255) 8) 4)
                                   (* (quot (quot p 256) 6) 13)
                                   (* (bit-and (+ (* (quot (bit-and p 255) 16) 2)
                                                  (quot (quot p 256) 12))
                                               31)
                                      5))
                                191)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 8) 31)
                                      (bit-and (quot (quot p 256) 6) 31))
                                   (* (bit-and (+ (* (quot (bit-and p 255) 8) 3)
                                                  (quot (quot p 256) 6))
                                               31)
                                      5))
                                95)
                       1)
                    (* (bit-and (+ (* (bit-and p 3) 5)
                                   (* (bit-and (quot p 256) 3) 7))
                                31)
                       2))
                 209)))
          (array/set! out (+ (* p 4) 3) 255)
          (recur (inc p)))
        (array/freeze! out)))))

(def packed (packed-rgba))

{:kind :rasa.demo/packed-rgba-proof
 :title "Chromatic Oil Current"
 :callable "demo.visuals.packed-oil-current/packed-rgba"
 :width width
 :height height
 :byte-length byte-length
 :pixel-origin :wmp-2-packed-loop
 :sample [(array/get packed 0)
          (array/get packed 1)
          (array/get packed 2)
          (array/get packed 3)
          (array/get packed 4)
          (array/get packed 5)
          (array/get packed 6)
          (array/get packed 7)
          (array/get packed 8)
          (array/get packed 9)
          (array/get packed 10)
          (array/get packed 11)]}
`,nM=`(ns demo.visuals.packed-signal-cathedral
  (:require [rasa.array :as array]))

(def width 256)
(def height 192)
(def pixel-count 49152)
(def byte-length 196608)

(defn packed-rgba []
  (let [out (array/builder u8 196608)]
    ^rasa.array/Packed
    (loop [p 0]
      (if (< p 49152)
        (do
          (array/set! out (* p 4)
            (+ 18
               (bit-and
                 (+ (* (bit-and (+ (quot (* (bit-and p 255)
                                             (bit-and (+ (bit-and p 255) 128) 255))
                                          96)
                                   (* (quot p 256) 3))
                                255)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 16) 15) 23)
                                   (* (bit-and (quot (quot p 256) 12) 15) 31))
                                255)
                       1)
                    (* (bit-and (+ (* (bit-and (+ (bit-and p 255)
                                                  (quot p 256))
                                               63)
                                      5)
                                   (* (bit-and (+ (bit-and p 255)
                                                  (bit-and (+ (quot p 256) 96) 191))
                                               63)
                                      3))
                                191)
                       1))
                 229)))
          (array/set! out (+ (* p 4) 1)
            (+ 20
               (bit-and
                 (+ (* (bit-and (+ (quot (* (bit-and p 255)
                                             (bit-and (+ (bit-and p 255) 128) 255))
                                          128)
                                   (* (quot p 256) 5))
                                255)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 16) 15) 29)
                                   (* (bit-and (quot (quot p 256) 12) 15) 17))
                                255)
                       1)
                    (* (bit-and (* (bit-and (bit-and p 255) 31) 9) 127)
                       1))
                 217)))
          (array/set! out (+ (* p 4) 2)
            (+ 34
               (bit-and
                 (+ (* (bit-and (+ (quot (* (bit-and p 255)
                                             (bit-and (+ (bit-and p 255) 128) 255))
                                          72)
                                   (* (bit-and (+ (quot p 256) 96) 191) 4))
                                255)
                       1)
                    (* (bit-and (+ (* (bit-and (quot (bit-and p 255) 8) 31) 13)
                                   (* (bit-and (quot (quot p 256) 8) 31) 19))
                                255)
                       1)
                    (* (bit-and (+ (* (bit-and (+ (bit-and p 255)
                                                  (quot p 256))
                                               63)
                                      7)
                                   (* (bit-and (+ (bit-and p 255)
                                                  (bit-and (+ (quot p 256) 96) 191))
                                               63)
                                      5))
                                191)
                       1))
                 221)))
          (array/set! out (+ (* p 4) 3) 255)
          (recur (inc p)))
        (array/freeze! out)))))

(def packed (packed-rgba))

{:kind :rasa.demo/packed-rgba-proof
 :title "Signal Cathedral"
 :callable "demo.visuals.packed-signal-cathedral/packed-rgba"
 :width width
 :height height
 :byte-length byte-length
 :pixel-origin :wmp-2-packed-loop
 :sample [(array/get packed 0)
          (array/get packed 1)
          (array/get packed 2)
          (array/get packed 3)
          (array/get packed 4)
          (array/get packed 5)
          (array/get packed 6)
          (array/get packed 7)
          (array/get packed 8)
          (array/get packed 9)
          (array/get packed 10)
          (array/get packed 11)]}
`,iM=`import { createElement as h, useEffect, useRef, useState } from "react";

export function VectorSceneCanvas({ className = "", onRendered = null, renderKey = null, scene, sourceHash }) {
  const ref = useRef(null);
  const renderedCallbackRef = useRef(onRendered);
  renderedCallbackRef.current = onRendered;
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const draw = () => drawVectorScene(canvas, scene, sourceHash);
    const renderedScene = draw();
    renderedCallbackRef.current?.({
      count: scene.primitives.length,
      detail: \`\${scene.primitives.length.toLocaleString()} drawing instructions rendered by Canvas\`,
      kind: "canvas-primitive-render",
      label: "Canvas primitive draw",
      payload: renderedScene,
      unit: "primitives",
    });
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, {
      attributeFilter: ["class", "data-rasa-theme", "data-theme", "style"],
      attributes: true,
    });
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [renderKey, scene, sourceHash]);
  return h("canvas", { className: \`rasa-scene-canvas \${className}\`.trim(), ref });
}

export function PackedImageCanvas({ className = "", image, onRendered = null, renderKey = null, sourceHash }) {
  const ref = useRef(null);
  const renderedCallbackRef = useRef(onRendered);
  renderedCallbackRef.current = onRendered;
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const draw = () => drawPackedImage(canvas, image, sourceHash);
    const uploadedPixels = draw();
    renderedCallbackRef.current?.({
      count: image.pixels.byteLength,
      detail: \`\${image.pixels.byteLength.toLocaleString()} RGBA bytes uploaded with ImageData\`,
      kind: "canvas-image-data-upload",
      label: "Canvas pixel upload",
      payload: uploadedPixels,
      unit: "bytes",
    });
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [image, renderKey, sourceHash]);
  return h("canvas", { className: \`rasa-grid-canvas \${className}\`.trim(), ref });
}

export function MusicTimeline({
  empty = null,
  events,
  onSectionPlay = null,
  playbackOffsetSeconds = 0,
  playbackStartedAtMs = null,
  playing = false,
  sections = [],
}) {
  if (events.length === 0) return empty;

  return h(MusicScoreCanvas, {
    events,
    onSectionPlay,
    playbackOffsetSeconds,
    playbackStartedAtMs,
    playing,
    sections,
  });
}

function MusicScoreCanvas({ events, onSectionPlay, playbackOffsetSeconds, playbackStartedAtMs, playing, sections }) {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const model = projectMusicTimeline(events, sections);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const draw = () => drawMusicScore(canvas, model);
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, {
      attributeFilter: ["class", "data-rasa-theme", "data-theme", "style"],
      attributes: true,
    });
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [events, sections]);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    setScrollLeft(0);
  }, [events]);

  const playheadStyle = playing && playbackStartedAtMs !== null
    ? {
        "--timeline-duration": \`\${Math.max(0.1, model.maxTime - playbackOffsetSeconds)}s\`,
        "--timeline-delay": \`\${(playbackStartedAtMs - monotonicNow()) / 1000}s\`,
        "--timeline-start": \`\${(playbackOffsetSeconds / model.maxTime) * 100}%\`,
      }
    : null;
  const activeSection = sectionAtScroll(model, scrollRef.current, scrollLeft);
  return h(
    "section",
    {
      "aria-label": \`\${events.length.toLocaleString()} exact Rasa-scheduled events across \${model.tracks.length} tracks\`,
      className: "sequencer score-sequencer",
      "data-playing": Boolean(playheadStyle),
      style: { "--score-track-count": model.tracks.length },
    },
    h(
      "aside",
      { className: "score-track-labels" },
      h("span", { className: "score-corner" }, "Tracks"),
      ...model.tracks.map(([track, trackEvents]) => h(
        "span",
        { className: "score-track-label", key: track },
        h("strong", null, track),
        h("small", null, \`\${trackEvents.length.toLocaleString()} notes\`),
      )),
    ),
    h(
      "div",
      {
        className: "score-scroll",
        onScroll: (event) => setScrollLeft(event.currentTarget.scrollLeft),
        ref: scrollRef,
      },
      h(
        "div",
        { className: "score-content", style: { width: \`\${model.timelineWidth}px\` } },
        h(
          "div",
          { className: "score-ruler" },
          h("span", { className: "score-time-start" }, "0:00"),
          ...model.sections.map((section) => h(
            "span",
            {
              className: "score-section-label",
              key: \`\${section.name}:\${section.time}\`,
              style: { left: \`\${(section.time / model.maxTime) * 100}%\` },
            },
            section.name,
          )),
          h("span", { className: "score-time-end" }, formatClock(model.maxTime)),
        ),
        h(
          "div",
          { className: "score-canvas-slot" },
          h("canvas", {
            className: "music-score-canvas",
            ref,
            role: "img",
            title: "Exact Rasa-generated note events arranged by section, track, time, and pitch",
          }),
        ),
        playheadStyle
          ? h(
              "span",
              { "aria-hidden": "true", className: "score-playhead-rail" },
              h("span", {
                className: "timeline-playhead",
                key: \`playhead:\${playbackStartedAtMs}\`,
                style: playheadStyle,
              }),
            )
          : null,
      ),
    ),
    model.sections.length > 0
      ? h(
          "nav",
          { "aria-label": "Score sections", className: "score-section-nav" },
          ...model.sections.map((section) => h(
            "button",
            {
              "aria-pressed": section.name === activeSection,
              key: \`\${section.name}:navigate\`,
              onClick: () => {
                scrollToSection(scrollRef.current, model, section);
                onSectionPlay?.(section);
              },
              style: { flexGrow: Math.max(1, section.duration) },
              title: onSectionPlay ? \`Play from \${section.name}\` : \`Show \${section.name}\`,
              type: "button",
            },
            section.name,
          )),
        )
      : null,
  );
}

export function projectMusicTimeline(events, sections = []) {
  const tracks = groupEventsByTrack(events);
  const maxTime = Math.max(
    1,
    ...events.map((event) => Number(event.time || 0) + Number(event.duration || 0)),
  );
  const normalizedSections = sections.map((section) => ({
    name: String(section?.name || "section"),
    time: Number(section?.time || 0),
    duration: Number(section?.durationSeconds || 0),
  }));
  return {
    events,
    maxTime,
    sections: normalizedSections,
    timelineWidth: Math.max(780, Math.ceil(maxTime * 8)),
    tracks,
  };
}

function drawMusicScore(canvas, model) {
  const bounds = canvas.getBoundingClientRect();
  if (bounds.width <= 0 || bounds.height <= 0) return;
  const ratio = Math.max(1, globalThis.devicePixelRatio || 1);
  canvas.width = Math.round(bounds.width * ratio);
  canvas.height = Math.round(bounds.height * ratio);
  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const styles = getComputedStyle(canvas);
  const background = styles.getPropertyValue("--rasa-panel").trim() || "#0b0e12";
  const line = styles.getPropertyValue("--rasa-line").trim() || "#27303a";
  const width = bounds.width;
  const height = bounds.height;
  const rowHeight = height / model.tracks.length;

  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  model.sections.forEach((section, index) => {
    const x = (section.time / model.maxTime) * width;
    const sectionWidth = (section.duration / model.maxTime) * width;
    context.fillStyle = index % 2 === 0 ? "rgba(246, 211, 101, 0.035)" : "rgba(120, 214, 255, 0.025)";
    context.fillRect(x, 0, sectionWidth, height);
    context.fillStyle = line;
    context.fillRect(Math.round(x), 0, 1, height);
  });

  model.tracks.forEach(([track, trackEvents], trackIndex) => {
    const top = trackIndex * rowHeight;
    context.fillStyle = line;
    context.fillRect(0, Math.round(top), width, 1);

    const numericPitches = trackEvents
      .map((event) => Number(event.pitch))
      .filter(Number.isFinite);
    const minPitch = numericPitches.length ? Math.min(...numericPitches) : 0;
    const maxPitch = numericPitches.length ? Math.max(...numericPitches) : 0;
    for (const event of trackEvents) {
      const x = (Number(event.time || 0) / model.maxTime) * width;
      const noteWidth = Math.max(1.5, (Number(event.duration || 0.05) / model.maxTime) * width);
      const pitch = Number(event.pitch);
      const pitchRatio = Number.isFinite(pitch) && maxPitch !== minPitch
        ? (pitch - minPitch) / (maxPitch - minPitch)
        : percussionLane(event.pitch);
      const y = top + rowHeight - 10 - pitchRatio * Math.max(8, rowHeight - 20);
      context.globalAlpha = 0.82;
      context.fillStyle = event.color || "#f6d365";
      context.fillRect(x, y, noteWidth, Math.max(2, Math.min(5, rowHeight * 0.08)));
    }
    context.globalAlpha = 1;
  });
}

function percussionLane(value) {
  const lanes = { kick: 0.12, snare: 0.48, "tom-low": 0.32, "tom-high": 0.64, hihat: 0.84, rim: 0.62, shaker: 0.72, tick: 0.92 };
  return lanes[String(value)] ?? 0.5;
}

function formatClock(seconds) {
  const whole = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(whole / 60);
  return \`\${minutes}:\${String(whole % 60).padStart(2, "0")}\`;
}

function sectionAtScroll(model, scroll, scrollLeft) {
  if (!model.sections.length) return null;
  const width = scroll?.scrollWidth || model.timelineWidth;
  const viewport = scroll?.clientWidth || 0;
  const centerTime = ((scrollLeft + viewport / 2) / width) * model.maxTime;
  let active = model.sections[0].name;
  for (const section of model.sections) {
    if (section.time <= centerTime) active = section.name;
  }
  return active;
}

function scrollToSection(scroll, model, section) {
  if (!scroll) return;
  const target = (section.time / model.maxTime) * scroll.scrollWidth;
  scroll.scrollTo({
    behavior: "smooth",
    left: Math.min(target, scroll.scrollWidth - scroll.clientWidth),
  });
}

function monotonicNow() {
  return globalThis.performance?.now?.() ?? Date.now();
}

export function formatDemoDisplay(modeId, { display, parity, packedOutputs = [] }) {
  if (display?.kind !== "value") return display;

  const value = parity?.value;
  if (modeId === "music" && textValue(mapGet(value, "status")) === "scheduled") {
    const events = vectorItems(mapGet(value, "events"));
    return {
      kind: "value",
      text: [
        "{:status :scheduled",
        \` :boundary \${textValue(mapGet(value, "boundary")) || "ordinary-values"}\`,
        \` :tracks \${numberValue(mapGet(value, "tracks"))}\`,
        \` :notes \${numberValue(mapGet(value, "notes"))}\`,
        \` :events [\${events.length} scheduled provider events]\`,
        \` :loaded-from \${JSON.stringify(textValue(mapGet(value, "loadedFrom")) || "provider")}\`,
        \` :trace-count \${numberValue(mapGet(value, "traceCount"))}}\`,
      ].join("\\n"),
    };
  }
  if (modeId !== "visuals") return display;

  const kind = textValue(mapGet(value, "kind"));
  if (kind === "rasa.demo/vector-scene") {
    const primitives = vectorItems(mapGet(value, "primitives"));
    return {
      kind: "value",
      text: [
        "{:kind :rasa.demo/vector-scene",
        \` :title \${JSON.stringify(textValue(mapGet(value, "title")) || "Vector scene")}\`,
        \` :width \${numberValue(mapGet(value, "width"))}\`,
        \` :height \${numberValue(mapGet(value, "height"))}\`,
        \` :primitive-count \${primitives.length}\`,
        \` :boundary \${textValue(mapGet(value, "boundary")) || "ordinary-values"}\`,
        \` :renderer \${textValue(mapGet(value, "renderer")) || "canvas-vector-primitives"}}\`,
      ].join("\\n"),
    };
  }
  if (kind !== "rasa.demo/packed-rgba-proof") return display;

  const byteLength = numberValue(mapGet(value, "byte-length"));
  return {
    kind: "value",
    text: [
      "{:kind :rasa.demo/packed-rgba-proof",
      \` :title \${JSON.stringify(textValue(mapGet(value, "title")) || "Packed image")}\`,
      \` :callable \${JSON.stringify(textValue(mapGet(value, "callable")) || "missing")}\`,
      \` :width \${numberValue(mapGet(value, "width"))}\`,
      \` :height \${numberValue(mapGet(value, "height"))}\`,
      \` :byte-length \${byteLength}\`,
      \` :packed-output [\${byteLength} bytes captured from optimizer memory]\`,
      \` :latest-run-packed-outputs \${packedOutputs.length}\`,
      \` :session-optimizer {:executed \${parity?.optimizer?.executed ?? 0}}}\`,
    ].join("\\n"),
  };
}

export function projectVisualFromRun(runState) {
  if (runState?.status !== "ok") {
    return { status: "idle", message: "No successful Rasa run." };
  }
  const value = runState.parity?.value;
  if (!value) {
    return { status: "missing-value", message: "Rasa did not return a structured value." };
  }
  const kind = textValue(mapGet(value, "kind"));
  if (kind === "rasa.demo/vector-scene") {
    return projectVectorSceneFromRun(runState);
  }
  if (kind === "rasa.demo/packed-rgba-proof") {
    const image = projectPackedImageFromRun(runState);
    return image.status === "ok" ? { status: "ok", type: "packed", image } : image;
  }
  return {
    status: "wrong-kind",
    message: \`Expected :rasa.demo/vector-scene or :rasa.demo/packed-rgba-proof from Rasa, got \${kind || "no :kind"}.\`,
  };
}

export function hashString(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function groupEventsByTrack(events) {
  const groups = new Map();
  for (const event of events) {
    const track = String(event.track || "track");
    if (!groups.has(track)) groups.set(track, []);
    groups.get(track).push(event);
  }
  return [...groups.entries()];
}

function projectVectorSceneFromRun(runState) {
  const value = runState.parity?.value;
  const width = numberValue(mapGet(value, "width"));
  const height = numberValue(mapGet(value, "height"));
  const primitives = vectorItems(mapGet(value, "primitives")).map(jsValue).filter(Boolean);
  if (!width || !height) {
    return { status: "missing-size", message: "Rasa returned a vector scene without numeric width and height." };
  }
  if (primitives.length === 0) {
    return { status: "missing-primitives", message: "Rasa returned a vector scene without drawable primitives." };
  }
  return {
    status: "ok",
    type: "scene",
    scene: {
      kind: textValue(mapGet(value, "kind")),
      title: textValue(mapGet(value, "title")),
      background: textValue(mapGet(value, "background")),
      renderer: textValue(mapGet(value, "renderer")),
      boundary: textValue(mapGet(value, "boundary")),
      metrics: jsValue(mapGet(value, "metrics")) || {},
      width,
      height,
      primitives,
    },
  };
}

function projectPackedImageFromRun(runState) {
  const optimizerExecuted = Number(runState.parity?.optimizer?.executed || 0) > 0 ||
    Number(runState.wasmLane?.optimizer?.executed || 0) > 0 ||
    runState.wasmLane?.optimizedStatus === "executed";
  if (!optimizerExecuted) {
    return { status: "missing-wmp", message: "The visual source returned without executing a browser WMP-2 packed optimizer region." };
  }
  const value = runState.parity?.value;
  const width = numberValue(mapGet(value, "width"));
  const height = numberValue(mapGet(value, "height"));
  const byteLength = numberValue(mapGet(value, "byte-length"));
  const callable = textValue(mapGet(value, "callable"));
  if (!callable) {
    return { status: "missing-callable", message: "Rasa returned the packed image marker without naming its packed callable." };
  }
  const packedOutput = matchingPackedOutput(runState, callable);
  if (packedOutput?.status === "error") return packedOutput;
  const pixels = packedOutput?.bytes || null;
  const expected = width * height * 4;
  if (!width || !height || !byteLength || !pixels?.byteLength) {
    return { status: "missing-pixels", message: "Rasa returned the packed image marker but no optimizer byte output was captured." };
  }
  if (byteLength !== expected || pixels.byteLength !== expected) {
    return {
      status: "wrong-size",
      message: \`Packed RGBA byte length mismatch: expected \${expected}, report says \${byteLength}, optimizer returned \${pixels.byteLength}.\`,
    };
  }
  return {
    status: "ok",
    title: textValue(mapGet(value, "title")),
    callable,
    pixelOrigin: textValue(mapGet(value, "pixel-origin")),
    width,
    height,
    byteLength,
    pixels,
    optimizerExecuted,
  };
}

function matchingPackedOutput(runState, callable) {
  const outputs = Array.isArray(runState?.packedOutputs) ? runState.packedOutputs : [];
  const matches = outputs.filter((output) => output?.symbol === callable);
  if (matches.length !== 1) {
    return {
      status: "error",
      message: \`Packed output mismatch for \${callable}: expected exactly one matching optimizer output, saw \${matches.length} matching output(s) out of \${outputs.length}.\`,
    };
  }
  return matches[0];
}

function drawPackedImage(canvas, image, sourceHash) {
  if (!image?.pixels?.byteLength) return null;
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d");
  const uploadedPixels = new Uint8ClampedArray(image.pixels);
  ctx.imageSmoothingEnabled = false;
  ctx.putImageData(
    new ImageData(uploadedPixels, image.width, image.height),
    0,
    0,
  );
  canvas.dataset.sourceHash = String(sourceHash);
  canvas.dataset.pixelOrigin = image.pixelOrigin || "wmp-2-packed-loop";
  canvas.dataset.optimizerExecuted = String(image.optimizerExecuted);
  return uploadedPixels;
}

function drawVectorScene(canvas, scene, sourceHash) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width));
  const height = Math.max(240, Math.floor(rect.height));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = scene.background || "#05070a";
  ctx.fillRect(0, 0, width, height);
  const sceneWidth = Math.max(1, Number(scene.width || width));
  const sceneHeight = Math.max(1, Number(scene.height || height));
  const scale = Math.min(width / sceneWidth, height / sceneHeight);
  ctx.save();
  ctx.translate((width - sceneWidth * scale) / 2, (height - sceneHeight * scale) / 2);
  ctx.scale(scale, scale);
  for (const primitive of scene.primitives) drawScenePrimitive(ctx, primitive);
  ctx.restore();
  canvas.dataset.sourceHash = String(sourceHash);
  canvas.dataset.sceneKind = scene.kind || "rasa.demo/vector-scene";
  canvas.dataset.primitiveCount = String(scene.primitives.length);
  canvas.dataset.boundary = "ordinary-values";
  return scene;
}

function drawScenePrimitive(ctx, primitive) {
  const shape = String(primitive.shape || "");
  ctx.save();
  ctx.globalAlpha = clampAlpha(primitive.alpha);
  if (shape === "rect") {
    if (primitive.fill) {
      ctx.fillStyle = primitive.fill;
      ctx.fillRect(Number(primitive.x || 0), Number(primitive.y || 0), Number(primitive.w || 0), Number(primitive.h || 0));
    }
    if (primitive.stroke) {
      ctx.strokeStyle = primitive.stroke;
      ctx.lineWidth = 1;
      ctx.strokeRect(Number(primitive.x || 0), Number(primitive.y || 0), Number(primitive.w || 0), Number(primitive.h || 0));
    }
  } else if (shape === "line") {
    ctx.strokeStyle = primitive.stroke || primitive.fill || "#e8edf2";
    ctx.lineWidth = Number(primitive["line-width"] || primitive.lineWidth || 1);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(Number(primitive.x1 || 0), Number(primitive.y1 || 0));
    ctx.lineTo(Number(primitive.x2 || 0), Number(primitive.y2 || 0));
    ctx.stroke();
  } else if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(Number(primitive.x || 0), Number(primitive.y || 0), Number(primitive.r || 0), 0, Math.PI * 2);
    if (primitive.fill) {
      ctx.fillStyle = primitive.fill;
      ctx.fill();
    }
    if (primitive.stroke) {
      ctx.strokeStyle = primitive.stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
  ctx.restore();
}

function clampAlpha(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(1, number)) : 1;
}

function mapGet(value, keyName) {
  if (!value || value.kind !== "map") return null;
  return value.entries.find((entry) => normalizedKeyName(entry.key) === keyName)?.value || null;
}

function textValue(value) {
  if (!value) return "";
  if (value.kind === "string") return value.value;
  if (value.kind === "keyword") return value.name;
  if (value.kind === "symbol") return value.raw;
  if (value.kind === "number") return String(value.value);
  return "";
}

function numberValue(value) {
  return value?.kind === "number" ? Number(value.value) : null;
}

function vectorItems(value) {
  return value?.kind === "vector" || value?.kind === "list"
    ? Array.isArray(value.items) ? value.items : []
    : [];
}

function jsValue(value) {
  if (!value) return null;
  if (value.kind === "number") return Number(value.value);
  if (value.kind === "string") return value.value;
  if (value.kind === "keyword") return value.name;
  if (value.kind === "symbol") return value.raw;
  if (value.kind === "boolean" || value.kind === "bool") return Boolean(value.value);
  if (value.kind === "nil") return null;
  if (value.kind === "vector" || value.kind === "list") return vectorItems(value).map(jsValue);
  if (value.kind === "map") {
    return Object.fromEntries((value.entries || []).map((entry) => [normalizedKeyName(entry.key), jsValue(entry.value)]));
  }
  return null;
}

function normalizedKeyName(key) {
  if (key?.kind === "keyword") return key.name;
  if (key?.kind === "string") return key.value;
  if (key?.kind === "symbol") return key.raw;
  return "";
}
`,ms=Qi("rasa-core","rasa/core.ras","Rasa standard library",K3,"rasa","library"),fb=Qi("rasa-array","rasa/array.ras","Rasa packed-array library",Y3,"rasa","library"),db=Qi("music-notation","demo/music/notation.ras","Rasa music notation library",W3,"rasa","library"),sM=Qi("music-score","demo/music/score.ras","Rasa score engine",X3,"rasa","library"),wd=Qi("tone-package","demo.tone-js/package.ras","Capability package",Q3,"rasa","package"),kd=Qi("tone-provider","tone-provider.js","Browser capability adapter",F3,"javascript","boundary"),ps=Qi("canvas-renderer","demo-surface/index.js","Browser result renderer",iM,"javascript","boundary"),Dn=Object.freeze([gs({id:"botanical",title:"Botanical Glasshouse",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"green",category:"geometry",source:Z3,files:[ps,ms]}),gs({id:"city",title:"Recursive City",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"blue",category:"geometry",source:P3,files:[ps,ms]}),gs({id:"algorithmic-orchestra",title:"Algorithmic Orchestra",family:"Generated score",mode:"music",boundary:"Rasa tick score · Tone transport",accent:"gold",category:"music",source:I3,files:[sM,wd,kd,ps,ms]}),gs({id:"polyrhythm",title:"Polyrhythm Workshop",family:"Music composition",mode:"music",boundary:"Rasa score · Tone capability",accent:"red",category:"music",source:eM,files:[db,wd,kd,ps,ms]}),gs({id:"clockwork",title:"Glass Clockwork",family:"Music composition",mode:"music",boundary:"Tone capability",accent:"gold",category:"music",source:J3,files:[db,wd,kd,ps,ms]}),gs({id:"oil-current",title:"Chromatic Oil Current",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"red",category:"pixels",source:tM,files:[fb,ps,ms]}),gs({id:"signal-cathedral",title:"Signal Cathedral",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"violet",category:"pixels",source:nM,files:[fb,ps,ms]})]),hb=Object.freeze([Object.freeze({id:"geometry",label:"Geometry",description:"Rasa scene values",count:Td("geometry")}),Object.freeze({id:"pixels",label:"Packed pixels",description:"WMP-2 image data",count:Td("pixels")}),Object.freeze({id:"music",label:"Music",description:"Tone.js capability",count:Td("music")})]);function aM(s,e){return[Qi("main",`${s.id}.ras`,"Example program",e,"rasa","example",!0),...s.files]}function gs(s){return Object.freeze({...s,files:Object.freeze(s.files)})}function Qi(s,e,n,a,l,c,u=!1){return Object.freeze({id:s,name:e,label:n,content:a,language:l,role:c,editable:u,lines:rM(a)})}function rM(s){return String(s||"").split(`
`).length}function Td(s){return Dn.filter(e=>e.category===s).length}const dh=Object.freeze([Object.freeze({id:"pipeline",label:"Pipeline",description:"Phase status and produced evidence"}),Object.freeze({id:"decisions",label:"Decisions",description:"Planner and optimizer choices"}),Object.freeze({id:"diagnostics",label:"Diagnostics",description:"Source-linked warnings and refusals"}),Object.freeze({id:"movement",label:"Movement",description:"Runtime memory and boundary route"})]);function lM({context:s={},parity:e={},run:n={}}={}){const a=cM(e.phases),l=uM(e),c=Array.isArray(e.diagnostics)?e.diagnostics:[],u=hM(e,s),f=a.filter(h=>h.status!=="not-requested").length;return{id:`${n.reportMode||"none"}:${n.elapsedMs||0}:${f}:${l.length}:${c.length}`,status:n.status||e.status||"idle",reportMode:n.reportMode||"none",elapsedMs:Number(n.elapsedMs||0),phases:a,decisions:l,diagnostics:c,movement:u,summary:{capturedPhases:f,totalPhases:a.length,decisions:l.length,diagnostics:c.length,optimizerExecutions:Number(e.optimizer?.executed||0)}}}function oM(s=dh){const e=new Map(dh.map(n=>[n.id,n]));return s.map(n=>typeof n=="string"?e.get(n):{...e.get(n.id),...n}).filter(Boolean)}function cM(s){return Array.isArray(s)?s.map(e=>({...e,metrics:e.metrics&&typeof e.metrics=="object"?e.metrics:{}})):[]}function uM(s){const e=s.plan||{},n=[...e.decisions||[],...e.candidates||[],...e.rejected||[],...e.fallbacks||[]].map((l,c)=>({...l,id:`${l.type||"record"}:${c}`,category:fM(l),title:dM(l)})),a=s.optimizer;if(a){n.unshift({id:"optimizer:summary",type:"optimizer",category:a.executed>0?"admitted":a.fallbacks?.length?"fallback":"observed",title:a.executed>0?`${a.executed} optimized region executions`:"Optimizer observation",status:a.enabled?"enabled":"disabled",reason:`${a.probes||0} probes · ${a.admitted||0} admitted · ${a.missed||0} missed`,lane:s.execution?.tier||null});for(const[l,c]of(a.fallbacks||[]).entries())n.push({id:`optimizer:fallback:${l}`,type:"fallback",category:"fallback",title:c.symbol||"Optimizer fallback",status:c.fallback||"fallback",reason:c.reason||"No reason reported",lane:s.execution?.tier||null})}return n}function fM(s){const e=`${s.type||""} ${s.status||""} ${s.decision||""}`;return/reject|refus/.test(e)?"rejected":/fallback/.test(e)?"fallback":/admit|execut|selected|ok/.test(e)?"admitted":"observed"}function dM(s){return s.candidate||s.decision||s.family||s.lane||s.type||"Plan record"}function hM(s,e){const n=s.runtime||{};return{steps:(Array.isArray(e.movementSteps)?e.movementSteps:[]).map((l,c)=>({id:l.id||`movement:${c}`,...l})),runtime:[Sa("Execution lane",s.execution?.productLane||n.lane),Sa("Execution tier",s.execution?.tier),Sa("Memory path",n.memoryPath),Sa("Collection implementation",n.collectionImpl),Sa("Session",n.sessionMode),Sa("Host imports",n.hostImports?"enabled":"not used")].filter(l=>l.value)}}function Sa(s,e){return{label:s,value:e==null?null:String(e)}}const mM={pipeline:kS,decisions:bb,diagnostics:Zr,movement:KS};function pM({initialLens:s="pipeline",lenses:e=dh,model:n,onOpenSource:a=null,renderers:l={}}){const c=N.useMemo(()=>oM(e),[e]),[u,f]=N.useState(s),h=N.useRef([]),p=N.useId();N.useEffect(()=>{c.some(S=>S.id===u)||f(c[0]?.id||"pipeline")},[u,c]);const g=S=>{const k=(S+c.length)%c.length;h.current[k]?.focus(),f(c[k].id)},b=(S,k)=>{const T=S.key==="ArrowRight"||S.key==="ArrowDown"?k+1:S.key==="ArrowLeft"||S.key==="ArrowUp"?k-1:S.key==="Home"?0:S.key==="End"?c.length-1:null;T!==null&&(S.preventDefault(),g(T))},v=l[u];return x.jsxs("section",{className:"report-explorer","aria-label":"Rasa report explorer",children:[x.jsx(gM,{model:n}),x.jsx("nav",{className:"report-lenses","aria-label":"Report lenses",role:"tablist",children:c.map((S,k)=>{const T=mM[S.id]||yb;return x.jsxs("button",{"aria-controls":`${p}-panel`,"aria-selected":u===S.id,id:`${p}-${S.id}`,onKeyDown:C=>b(C,k),onClick:()=>f(S.id),ref:C=>{h.current[k]=C},role:"tab",tabIndex:u===S.id?0:-1,title:S.description,type:"button",children:[x.jsx(T,{size:15}),x.jsx("span",{children:S.label}),x.jsx("small",{children:RM(S.id,n)})]},S.id)})}),x.jsx("div",{"aria-labelledby":`${p}-${u}`,className:"report-lens-panel",id:`${p}-panel`,role:"tabpanel",children:v?v({model:n,onOpenSource:a}):u==="pipeline"?x.jsx(bM,{model:n,onNavigate:f}):u==="decisions"?x.jsx(wM,{model:n}):u==="diagnostics"?x.jsx(TM,{model:n,onOpenSource:a}):x.jsx(AM,{model:n})})]})}function gM({model:s}){return x.jsxs("div",{className:"report-summary","aria-label":"Run summary",children:[x.jsx(Aa,{label:"Run",value:s.status}),x.jsx(Aa,{label:"Elapsed",value:s.elapsedMs?`${s.elapsedMs.toFixed(1)} ms`:"not measured"}),x.jsx(Aa,{label:"Phases",value:`${s.summary.capturedPhases}/${s.summary.totalPhases}`}),x.jsx(Aa,{label:"Decisions",value:s.summary.decisions})]})}function Aa({label:s,value:e}){return x.jsxs("div",{children:[x.jsx("span",{children:s}),x.jsx("strong",{children:e})]})}const yM={reader:"Turns source bytes into forms and source spans.",expand:"Normalizes macro and language forms before semantic analysis.",analysis:"Resolves bindings, calls, and source-level meaning.",ir:"Builds backend-neutral executable structure.",facts:"Records proven types, contracts, effects, and representation evidence.",checks:"Applies static contracts before representation planning.",plan:"Chooses execution lanes, representations, and fallback behavior.",eval:"Executes the admitted program and returns its value."};function bM({model:s,onNavigate:e}){const n=s.phases.find(u=>u.status!=="not-requested")?.id||s.phases[0]?.id,[a,l]=N.useState(n);N.useEffect(()=>l(n),[n,s.id]);const c=s.phases.find(u=>u.id===a)||s.phases[0];return c?x.jsxs("div",{className:"pipeline-lens",children:[x.jsxs("div",{className:"compiler-pipeline",children:[x.jsx("nav",{className:"phase-rail","aria-label":"Compiler phase route",children:s.phases.map((u,f)=>x.jsxs("button",{"aria-pressed":u.id===c.id,"data-status":u.status,onClick:()=>l(u.id),type:"button",children:[x.jsx("span",{className:"phase-index",children:String(f+1).padStart(2,"0")}),x.jsx("i",{}),x.jsx("span",{className:"phase-name",children:u.label}),x.jsx("small",{children:u.detail})]},u.id))}),x.jsx(vM,{model:s,onNavigate:e,phase:c})]}),s.reportMode!=="all"?x.jsx(MM,{title:"Compact report captured",detail:"Enable the detailed report and run again to inspect every compiler phase."}):null]}):x.jsx(rl,{title:"No phase records",detail:"This run did not return a phase projection."})}function vM({model:s,onNavigate:e,phase:n}){const a=xM(n),l=n.id==="plan"?"decisions":n.diagnostics?"diagnostics":n.id==="eval"?"movement":null;return x.jsxs("article",{className:"phase-detail",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Compiler phase"}),x.jsx("h3",{children:n.label})]}),x.jsx("em",{"data-status":n.status,children:n.status})]}),x.jsx("p",{className:"phase-description",children:yM[n.id]}),x.jsx("div",{className:"phase-metrics",children:a.map(c=>x.jsx(Aa,{label:c.label,value:c.value},c.label))}),x.jsxs("div",{className:"phase-report-depth",children:[x.jsx("span",{children:"Report depth"}),x.jsx("strong",{children:SM(n)})]}),l?x.jsxs("button",{className:"phase-follow",onClick:()=>e(l),type:"button",children:[x.jsx("span",{children:n.id==="plan"?`${s.summary.decisions} decision records`:n.id==="eval"?"Inspect value movement":`${s.summary.diagnostics} diagnostic records`}),x.jsx(ph,{size:14})]}):null]})}function xM(s){const e=s.metrics||{};return s.status==="not-requested"?[{label:"Capture",value:"not requested"}]:s.id==="facts"?[{label:"Facts",value:e.facts??0},{label:"Declared",value:e.declaredFacts??0},{label:"Metadata contracts",value:e.metadataContracts??0},{label:"Mode",value:e.mode||"unknown"}]:s.id==="plan"?[{label:"Lanes",value:e.lanes??0},{label:"Candidates",value:e.candidates??0},{label:"Rejected",value:e.rejected??0},{label:"Fallbacks",value:e.fallbacks??0}]:s.id==="checks"?[{label:"Checks",value:e.checks??0},{label:"Action",value:e.action||"none"},{label:"Diagnostics",value:e.diagnostics??0}]:[{label:"Status",value:s.status},{label:"Diagnostics",value:e.diagnostics??0}]}function SM(s){return s.status==="not-requested"?"This phase was not captured in the current report.":s.id==="facts"?"Fact totals and contract counts are available; individual fact records are not linked in this runtime projection.":s.id==="plan"?"Lane, decision, candidate, rejection, fallback, and optimizer records are available for exploration.":s.id==="checks"?"Check totals, action, and diagnostics are available.":s.id==="eval"?"Evaluation status, returned value, diagnostics, and runtime movement are available through related lenses.":"The current runtime report exposes phase status and diagnostic count."}function wM({model:s}){const e=["all","admitted","rejected","fallback"],[n,a]=N.useState("all"),[l,c]=N.useState("groups"),[u,f]=N.useState(""),[h,p]=N.useState(60),[g,b]=N.useState(null);N.useEffect(()=>{a("all"),c("groups"),f(""),p(60),b(null)},[s.id]);const v=N.useMemo(()=>s.decisions.filter(C=>{if(n!=="all"&&C.category!==n)return!1;const _=`${C.type} ${C.title} ${C.reason||""} ${C.lane||""}`.toLowerCase();return!u||_.includes(u.toLowerCase())}),[n,s.decisions,u]),S=N.useMemo(()=>l==="groups"?kM(v):v,[v,l]),k=l==="records"?S.slice(0,h):S,T=S.find(C=>C.id===g)||S[0];return s.decisions.length===0?x.jsx(rl,{title:"No decisions captured",detail:"A detailed report can expose planner and optimizer records when this program produces them."}):x.jsxs("div",{className:"decisions-lens",children:[x.jsxs("div",{className:"report-filters","aria-label":"Decision filters",children:[x.jsx("div",{children:e.map(C=>x.jsx("button",{"aria-pressed":n===C,onClick:()=>{a(C),b(null)},type:"button",children:C},C))}),x.jsxs("label",{className:"decision-search",children:[x.jsx(QS,{size:13}),x.jsx("input",{"aria-label":"Search decisions",onChange:C=>{f(C.target.value),b(null)},placeholder:"Search evidence",type:"search",value:u})]}),x.jsxs("div",{className:"decision-mode","aria-label":"Decision density",children:[x.jsx("button",{"aria-pressed":l==="groups",onClick:()=>{c("groups"),b(null)},type:"button",children:"Grouped"}),x.jsx("button",{"aria-pressed":l==="records",onClick:()=>{c("records"),b(null)},type:"button",children:"Records"})]})]}),x.jsxs("div",{className:"report-record-layout",children:[x.jsxs("div",{className:"report-record-list",children:[x.jsxs("div",{className:"record-list-status",children:["Showing ",k.length.toLocaleString()," of ",S.length.toLocaleString()," ",l]}),k.map(C=>x.jsxs("button",{"aria-pressed":C.id===T?.id,"data-category":C.category,onClick:()=>b(C.id),type:"button",children:[x.jsxs("span",{className:"decision-context",children:[x.jsx("i",{children:C.type}),x.jsx("b",{children:C.lane||"lane not reported"})]}),x.jsxs("strong",{children:[C.title,C.count>1?x.jsx("em",{children:C.count}):null]}),x.jsx("small",{children:C.reason||C.status||"Structured plan record"})]},C.id)),l==="records"&&k.length<S.length?x.jsx("button",{className:"load-more-records",onClick:()=>p(C=>C+60),type:"button",children:"Show 60 more"}):null,S.length===0?x.jsx(rl,{title:"No matching decisions",detail:`No ${n} records matched this view.`}):null]}),T?x.jsx(EM,{eyebrow:T.type,title:T.title,status:T.status||T.category,detail:T.reason,values:CM(T)}):null]})]})}function kM(s){const e=new Map;for(const n of s){const a=[n.category,n.type,n.title,n.status,n.reason,n.lane].join("\0"),l=e.get(a);if(l){l.count+=1;continue}e.set(a,{...n,id:`group:${e.size}`,count:1})}return[...e.values()].sort((n,a)=>a.count-n.count||n.title.localeCompare(a.title))}function TM({model:s,onOpenSource:e}){return s.diagnostics.length===0?x.jsx(rl,{title:"No diagnostics",detail:"No warning, refusal, or failure record was captured for this run."}):x.jsx("div",{className:"diagnostic-list",children:s.diagnostics.map((n,a)=>x.jsxs("article",{"data-severity":n.severity,children:[x.jsxs("header",{children:[x.jsx("span",{children:n.phase||"runtime"}),x.jsx("strong",{children:n.code||n.kind||n.severity})]}),x.jsx("p",{children:n.message}),n.detail?x.jsx("small",{children:n.detail}):null,n.span&&e?x.jsxs("button",{onClick:()=>e(n.span),type:"button",children:["Open source ",n.span.start,"..",n.span.end]}):null]},`${n.code||n.kind}:${a}`))})}function AM({model:s}){return x.jsxs("div",{className:"movement-lens",children:[s.movement.steps.length?x.jsx("div",{className:"movement-route",children:s.movement.steps.map((e,n)=>x.jsxs(pc.Fragment,{children:[x.jsxs("div",{children:[x.jsx("span",{children:e.owner||`Step ${n+1}`}),x.jsx("strong",{children:e.label}),x.jsx("small",{children:e.detail})]}),n<s.movement.steps.length-1?x.jsx(ph,{"aria-hidden":"true",size:15}):null]},e.id))}):x.jsx(rl,{title:"No boundary route",detail:"This consumer did not provide a domain-specific movement projection."}),x.jsx("div",{className:"runtime-facts",children:s.movement.runtime.map(e=>x.jsx(Aa,{label:e.label,value:e.value},e.label))})]})}function EM({detail:s,eyebrow:e,status:n,title:a,values:l}){return x.jsxs("article",{className:"report-record-detail",children:[x.jsxs("header",{children:[x.jsx("span",{children:e}),x.jsx("em",{"data-status":n,children:n})]}),x.jsx("h3",{children:a}),s?x.jsx("p",{children:s}):null,x.jsx("dl",{children:Object.entries(l||{}).filter(([,c])=>c!=null).map(([c,u])=>x.jsxs(pc.Fragment,{children:[x.jsx("dt",{children:OM(c)}),x.jsx("dd",{children:String(u)})]},c))})]})}function MM({detail:s,title:e}){return x.jsxs("div",{className:"report-notice",children:[x.jsx("strong",{children:e}),x.jsx("span",{children:s})]})}function rl({detail:s,title:e}){return x.jsxs("div",{className:"report-empty",children:[x.jsx(yb,{size:20}),x.jsx("strong",{children:e}),x.jsx("span",{children:s})]})}function RM(s,e){return s==="pipeline"?e.summary.capturedPhases:s==="decisions"?e.summary.decisions:s==="diagnostics"?e.summary.diagnostics:e.movement.steps.length}function CM(s){return{lane:s.lane,memoryPath:s.memoryPath,wmp:s.wmp,family:s.family,evidence:s.evidence,decision:s.decision,occurrences:s.count}}function OM(s){return String(s).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," ")}function NM({events:s,example:e,fullReport:n,onClose:a,onFullReportChange:l,open:c,reportMode:u,runState:f}){const h=N.useMemo(()=>{const g=e.mode==="visuals"?Gh(f):null;return lM({context:{movementSteps:DM(e,g,s)},parity:f?.parity||{},run:{elapsedMs:f?.elapsedMs,reportMode:u,status:f?.status||"idle"}})},[s,e,u,f]);if(!c)return null;const p=n?u==="all"?"Full phases captured in this run":"Enabled; run again to capture every phase":"Compact evaluation only";return x.jsxs("aside",{className:"evidence-drawer","aria-label":"Rasa execution evidence",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution evidence"}),x.jsx("strong",{children:u==="all"?"Explore full report":u==="eval"?"Explore compact report":"No captured run"})]}),x.jsx("button",{"aria-label":"Close evidence",onClick:a,title:"Close evidence",type:"button",children:x.jsx(gh,{size:17})})]}),x.jsxs("section",{className:"evidence-capture",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"Detailed compiler report"}),x.jsx("span",{children:p})]}),x.jsx("button",{"aria-checked":n,"aria-label":"Capture detailed compiler report",className:"report-switch",onClick:()=>l(!n),role:"switch",type:"button",children:x.jsx("i",{})})]}),x.jsx(pM,{model:h}),f?.status==="error"&&!h.diagnostics.length?x.jsx("pre",{className:"evidence-error",children:f.display?.text||f.error?.message}):null]})}function DM(s,e,n){return s.mode==="music"?[{id:"rasa-composition",owner:"Rasa",label:"Composition value",detail:`${n.length} scheduled note maps produced`},{id:"capability-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"tone-schedule",owner:"Tone.js",label:"Playback schedule",detail:"Tone.js owns transport timing and audio output"}]:e?.type==="packed"?[{id:"packed-region",owner:"Rasa",label:"WMP-2 packed region",detail:`${e.image.byteLength.toLocaleString()} RGBA bytes computed`},{id:"optimizer-output",owner:"Boundary",label:"Optimizer memory output",detail:"Packed bytes published without EDN pixel serialization"},{id:"image-data",owner:"Canvas",label:"ImageData render",detail:"Browser canvas receives the packed RGBA bytes"}]:e?.type==="scene"?[{id:"scene-value",owner:"Rasa",label:"Scene value",detail:`${e.scene.primitives.length.toLocaleString()} ordinary shape maps produced`},{id:"scene-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"primitive-render",owner:"Canvas",label:"Primitive renderer",detail:"Browser draws the returned geometric commands"}]:[]}const jM={botanical:SS,city:aS,"algorithmic-orchestra":$r,clockwork:$r,polyrhythm:$r,"oil-current":Rd,"signal-cathedral":Rd},zM={geometry:ZS,pixels:AS,music:$r},BM={geometry:"Visuals",pixels:"Visuals",music:"Music"},LM={music:"Compositions"};function _M({activeId:s,categories:e,categoryId:n,examples:a,observed:l,onCategorySelect:c,onSelect:u}){const f=N.useRef([]),h=a.filter(b=>b.category===n),p=b=>{const v=(b+e.length)%e.length;f.current[v]?.focus(),c(e[v].id)},g=(b,v)=>{const S=b.key==="ArrowRight"||b.key==="ArrowDown"?v+1:b.key==="ArrowLeft"||b.key==="ArrowUp"?v-1:b.key==="Home"?0:b.key==="End"?e.length-1:null;S!==null&&(b.preventDefault(),p(S))};return x.jsxs("nav",{className:"example-gallery","aria-label":"Rasa examples",children:[x.jsxs("div",{className:"example-categories",role:"tablist","aria-label":"Example categories",children:[x.jsxs("span",{className:"gallery-label",children:[x.jsx(Z0,{size:14})," Explore"]}),e.map((b,v)=>{const S=zM[b.id]||Z0,k=BM[b.id]||"Examples",T=LM[b.id]||b.label;return x.jsxs("button",{"aria-controls":`example-panel-${b.id}`,"aria-selected":b.id===n,className:"category-choice","data-family":k.toLowerCase(),id:`example-tab-${b.id}`,onKeyDown:C=>g(C,v),onClick:()=>c(b.id),ref:C=>{f.current[v]=C},role:"tab",tabIndex:b.id===n?0:-1,type:"button",children:[x.jsx(S,{"aria-hidden":"true",size:14}),x.jsxs("span",{className:"category-copy",children:[x.jsx("small",{children:k}),x.jsx("strong",{children:T})]}),x.jsx("span",{className:"category-count","aria-label":`${b.count} examples`,children:b.count})]},b.id)})]}),x.jsx("div",{"aria-labelledby":`example-tab-${n}`,className:"gallery-list",id:`example-panel-${n}`,role:"tabpanel",children:h.map(b=>{const v=jM[b.id]||Rd,S=l[b.id]||null;return x.jsxs("button",{"aria-pressed":b.id===s,className:"example-choice","data-accent":b.accent,"data-selected":b.id===s,onClick:()=>u(b.id),type:"button",children:[x.jsx(v,{"aria-hidden":"true",size:18}),x.jsxs("span",{children:[x.jsx("strong",{children:b.title}),x.jsx("small",{children:S||b.boundary})]})]},b.id)})})]})}function hh({children:s,label:e,onClose:n,title:a}){return N.useEffect(()=>{const l=c=>{c.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),x.jsx("div",{className:"studio-overlay",onMouseDown:l=>l.target===l.currentTarget&&n(),role:"presentation",children:x.jsxs("section",{"aria-label":e,"aria-modal":"true",className:"studio-overlay-panel",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:e}),x.jsx("strong",{children:a})]}),x.jsx("button",{"aria-label":`Close ${e}`,onClick:n,title:"Close",type:"button",children:x.jsx(gh,{size:18})})]}),x.jsx("div",{className:"studio-overlay-body",children:s})]})})}const Go=24e3;function HM({onClose:s,open:e,output:n,outputKind:a,runState:l}){const[c,u]=N.useState("projection");N.useEffect(()=>{e&&u("projection")},[e]);const f=l?.rawDisplay?.text||"",p=c==="raw"?f||"No raw value is available.":n||"No result yet.",g=N.useMemo(()=>p.length>Go?`${p.slice(0,Go)}

… preview stopped at ${Go.toLocaleString()} characters`:p,[p]);return e?x.jsx(hh,{label:"Rasa result",onClose:s,title:a||"value",children:x.jsxs("div",{className:"result-overlay",children:[x.jsxs("header",{className:"result-toolbar",children:[x.jsxs("div",{className:"result-tabs",role:"tablist","aria-label":"Result representation",children:[x.jsx("button",{"aria-selected":c==="projection",onClick:()=>u("projection"),role:"tab",type:"button",children:"Readable projection"}),x.jsx("button",{"aria-selected":c==="raw",onClick:()=>u("raw"),role:"tab",type:"button",children:"Raw returned value"})]}),x.jsxs("button",{className:"copy-result",onClick:()=>navigator.clipboard.writeText(p),title:"Copy complete selected value",type:"button",children:[x.jsx(fS,{size:15}),x.jsx("span",{children:"Copy all"})]})]}),x.jsxs("div",{className:"result-context",children:[x.jsxs("strong",{children:[p.length.toLocaleString()," characters"]}),x.jsx("span",{children:c==="projection"?"A deliberate readable projection. It may summarize large returned structures.":p.length>Go?"The complete value is available through Copy all; the DOM preview is bounded to keep the Studio responsive.":"The unprojected value returned by the runtime."})]}),x.jsx("pre",{children:g})]})}):null}function qM({activeId:s,files:e,onClose:n,onSelect:a}){N.useEffect(()=>{const c=u=>{u.key==="Escape"&&n()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n]);const l=UM(e);return x.jsxs("section",{"aria-label":"Files participating in this example","aria-modal":"true",className:"source-explorer",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution sources"}),x.jsxs("strong",{children:[e.length," visible files"]})]}),x.jsx("div",{className:"source-explorer-actions",children:x.jsx("button",{"aria-label":"Close source explorer",onClick:n,title:"Close source explorer",type:"button",children:x.jsx(gh,{size:16})})})]}),l.map(([c,u])=>x.jsxs("div",{className:"source-group",children:[x.jsx("div",{className:"source-role",children:VM(c)}),u.map(f=>x.jsxs("button",{"data-active":f.id===s,onClick:()=>a(f.id),type:"button",children:[x.jsxs("span",{children:[x.jsx("strong",{children:f.name}),x.jsx("small",{children:f.label})]}),x.jsxs("em",{children:[f.lines," lines"]})]},f.id))]},c))]})}function UM(s){const e=new Map;for(const n of s)e.has(n.role)||e.set(n.role,[]),e.get(n.role).push(n);return[...e.entries()]}function VM(s){return s==="example"?"Visible user program":s==="library"?"Rasa libraries":s==="package"?"Capability package":s==="boundary"?"Browser boundary code":s}function GM({file:s,onChange:e,onRun:n,resetKey:a}){const l=N.useRef(null),c=N.useRef(e),u=N.useRef(n);return c.current=e,u.current=n,N.useEffect(()=>{if(!l.current)return;const f=jh({parent:l.current,doc:s.content,liveLexicalHighlight:s.language==="rasa",onChange:s.editable?h=>c.current?.(h):null,onRun:s.editable?()=>u.current?.():null,readOnly:!s.editable});return s.editable&&f.focus(),()=>f.destroy()},[s.id,s.editable,s.language,a]),x.jsx("div",{className:"studio-editor","data-language":s.language,ref:l})}function mb({events:s,example:e,expanded:n=!1,onEvidence:a,onExpand:l,onRendered:c,onResult:u,onSectionPlay:f,playback:h,playbackOffsetSeconds:p=0,playbackStartedAtMs:g,renderKey:b,runState:v,sections:S=[],source:k}){if(!v)return x.jsxs("section",{className:"live-stage stage-empty",children:[x.jsx(gc,{size:28}),x.jsx("strong",{children:"Run the visible Rasa program"}),x.jsx("p",{children:"The stage remains empty until this session returns a real value or provider schedule."})]});if(v.status!=="ok")return x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(Zr,{size:28}),x.jsx("strong",{children:"Rasa run failed"}),x.jsx("pre",{children:v.display?.text||v.error?.message})]});if(e.mode==="music")return x.jsxs("section",{className:"live-stage music-stage",children:[x.jsx(Ad,{detail:`${s.length} provider events · ${h}`,onEvidence:a,onResult:u,title:e.title}),x.jsx(E3,{events:s,onSectionPlay:f,playbackOffsetSeconds:p,playbackStartedAtMs:g,playing:h==="playing",sections:S,empty:x.jsxs("div",{className:"stage-empty",children:[x.jsx($r,{size:28}),x.jsx("strong",{children:"No provider events"}),x.jsx("p",{children:"The Rasa run completed without scheduling audible notes."})]})})]});const T=Gh(v);return T.status!=="ok"?x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(Zr,{size:28}),x.jsx("strong",{children:"Visual result refused"}),x.jsx("pre",{children:T.message})]}):T.type==="scene"?x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Ad,{detail:`${T.scene.primitives.length} returned primitives`,onEvidence:a,onResult:u,title:T.scene.title}),x.jsx(pb,{onExpand:n?null:l,children:x.jsx(T3,{onRendered:c,renderKey:b,scene:T.scene,sourceHash:ub(k)})})]}):x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Ad,{detail:`${T.image.byteLength} optimizer-published bytes`,onEvidence:a,onResult:u,title:T.image.title}),x.jsx(pb,{className:"packed-stage",onExpand:n?null:l,children:x.jsx(A3,{image:T.image,onRendered:c,renderKey:b,sourceHash:ub(k)})})]})}function Ad({detail:s,onEvidence:e,onResult:n,title:a}){return x.jsxs("header",{className:"stage-header",children:[x.jsxs("div",{className:"stage-heading",children:[x.jsx("h1",{children:a}),x.jsx("span",{children:s})]}),x.jsxs("div",{className:"stage-actions",children:[n?x.jsxs("button",{"aria-label":"Inspect returned value",onClick:n,title:"Inspect returned value",type:"button",children:[x.jsx(bb,{size:15}),x.jsx("span",{children:"Result"})]}):null,e?x.jsxs("button",{"aria-label":"Inspect execution evidence",onClick:e,title:"Inspect execution evidence",type:"button",children:[x.jsx(OS,{size:15}),x.jsx("span",{children:"Evidence"})]}):null]})]})}function pb({children:s,className:e="",onExpand:n}){return n?x.jsxs("button",{"aria-label":"Expand visual result",className:`stage-canvas visual-expand-trigger ${e}`.trim(),onClick:n,title:"Expand visual result",type:"button",children:[s,x.jsx("span",{"aria-hidden":"true",className:"visual-expand-hint",children:x.jsx(RS,{size:17})})]}):x.jsx("div",{className:`stage-canvas ${e}`.trim(),children:s})}const Ed=Object.freeze({phases:"eval"}),$M=Object.freeze({phases:"all"});function YM(){const s=N.useMemo(()=>PT(),[]),e=N.useRef(0),[n,a]=N.useState(()=>iw()),[l,c]=N.useState(Dn[0].id),[u,f]=N.useState(Dn[0].category),[h,p]=N.useState(()=>Object.fromEntries(Dn.map(de=>[de.id,de.source]))),[g,b]=N.useState(()=>Object.fromEntries(hb.map(de=>[de.id,Dn.find(Ee=>Ee.category===de.id)?.id]))),v=N.useMemo(()=>Dn.find(de=>de.id===l)||Dn[0],[l]),[S,k]=N.useState(v.source),[T,C]=N.useState(0),[_,U]=N.useState("main"),[K,$]=N.useState(!1),[B,W]=N.useState(!0),[X,te]=N.useState(!1),[me,Ke]=N.useState(!1),[ot,Ne]=N.useState(!1),[yt,Le]=N.useState(!1),[We,H]=N.useState(!1),[Q,ie]=N.useState(()=>s.snapshot()),[I,ae]=N.useState(null),[E,q]=N.useState(null),[F,Z]=N.useState([]),[re,le]=N.useState([]),[ye,Ue]=N.useState("idle"),[Ve,Bt]=N.useState(null),[Vt,Lt]=N.useState(0),[Ds,En]=N.useState({}),ui=N.useMemo(()=>aM(v,S),[v,S]),fi=ui.find(de=>de.id===_)||ui[0],Re=x1({configureOptions:Ed,evalOptions:Ed,manifestUrl:"./browser-manifest.json"});N.useEffect(()=>s.subscribe(ie),[s]);const _a=N.useCallback(async()=>{const de=++e.current;let Ee=null;try{const pt=X?"all":"eval",Ua=Re.getProvider("demo.tone-js");if(Ua?.started&&Ua.stop(),Ua?.activateFromGesture?.(),q(null),Z([]),le([]),Ue("stopped"),Bt(null),Lt(0),ae(null),Ee=await s.beginRun({label:`${v.title} source`,source:S}),de!==e.current)return;const js=Re.getProvider("demo.tone-js");js?.setExecutionWitness?.(s,Ee);const di=await Re.run(S,{evalOptions:pt==="all"?$M:Ed,formatDisplay:et=>B3(v.mode,et)});if(de!==e.current)return;if(!di){s.recordError(Ee,new Error("Rasa browser session did not execute"));return}const Je={...di,reportMode:pt};if(s.recordRuntime(Ee,WM(Je)),Je.status!=="ok"){s.recordError(Ee,Je.error||new Error(Je.display?.text||"Rasa run failed")),q(Je);return}if(v.mode==="music"){const et=js?.lastEvents||[];q(Je),Z(et),le(js?.lastScore?.sections||[]),Ue(et.length>0?"playing":"idle"),Bt(et.length>0?js?.playbackStartedAtMs??null:null),Lt(0),En(bt=>({...bt,[v.id]:`${et.length} scheduled events`}));return}if(v.mode==="visuals"){const et=Gh(Je);if(et.status!=="ok"){s.recordError(Ee,new Error(et.message||"Visual artifact refused")),q(Je);return}const bt=XM(et),Cc=await s.recordArtifact(Ee,bt.artifact),dl=await s.beforeEffect(Ee,bt.boundary);if(de!==e.current||!Cc||!dl)return;ae({boundaryDigest:dl.digest,runId:Ee}),q(Je);const Oc=et.type==="scene"?`${et.scene.primitives.length} returned primitives`:`${et.image.byteLength} packed bytes`;En(zs=>({...zs,[v.id]:Oc}))}}catch(pt){if(de!==e.current||pt?.kind==="browser-effect-cancelled")return;Ee&&s.recordError(Ee,pt),q({display:{kind:"error",text:pt?.message||String(pt)},error:pt,status:"error"})}},[X,v,Re.getProvider,Re.run,S,s]),Fi=N.useCallback(async de=>{const Ee=Dn.find(pt=>pt.id===de);!Ee||Ee.id===l||(e.current+=1,s.cancel("example changed"),await Re.getProvider("demo.tone-js")?.stop?.(),s.reset(),c(Ee.id),f(Ee.category),b(pt=>({...pt,[Ee.category]:Ee.id})),k(h[Ee.id]??Ee.source),C(pt=>pt+1),U("main"),$(!1),q(null),Z([]),le([]),Ue("idle"),Bt(null),Lt(0),Ke(!1),Ne(!1),Le(!1),H(!1),ae(null))},[h,l,Re.getProvider,s]),Ha=N.useCallback(de=>{const Ee=g[de]||Dn.find(pt=>pt.category===de)?.id;Ee&&Fi(Ee)},[g,Fi]),qa=N.useCallback(async()=>{await Re.getProvider("demo.tone-js")?.stop?.(),Ue("stopped"),Bt(null),Lt(0)},[Re.getProvider]),Ec=N.useCallback(de=>{const Ee=Re.getProvider("demo.tone-js")?.playFromSection?.(de.name);Ee&&(Ue("playing"),Bt(Ee.playbackStartedAtMs),Lt(Ee.offsetSeconds))},[Re.getProvider]),Mc=N.useCallback(()=>{e.current+=1,s.cancel("source restored"),Re.getProvider("demo.tone-js")?.stop?.(),s.reset(),k(v.source),p(de=>({...de,[v.id]:v.source})),C(de=>de+1),U("main"),q(null),Z([]),le([]),Ue("stopped"),Bt(null),Lt(0),Ke(!1),Ne(!1),Le(!1),ae(null)},[v,Re.getProvider,s]),_t=N.useCallback(()=>{a(sw())},[]),Rc=N.useCallback(de=>{e.current+=1,s.cancel("source edited"),s.reset(),Re.getProvider("demo.tone-js")?.stop?.(),k(de),p(Ee=>({...Ee,[v.id]:de})),q(null),Z([]),le([]),Ue("stopped"),Bt(null),Lt(0),ae(null)},[v.id,Re.getProvider,s]),ul=N.useCallback(()=>{e.current+=1,s.cancel("session restarted"),s.reset(),Re.getProvider("demo.tone-js")?.stop?.(),q(null),Z([]),le([]),Ue("stopped"),Bt(null),Lt(0),ae(null),Re.boot()},[Re.boot,Re.getProvider,s]),fl=N.useCallback(de=>{I&&s.recordEffect(I.runId,{...de,authority:"browser-effect",inputDigest:I.boundaryDigest})},[I,s]);return x.jsxs("div",{className:"studio-shell","data-editor-open":B,children:[x.jsx("style",{children:nw()}),x.jsx("style",{children:XT}),x.jsx("style",{children:rw()}),x.jsx(lw,{actions:x.jsx("button",{"aria-label":"Restart Rasa session",className:"rasa-site-action",onClick:ul,title:"Restart Rasa session",type:"button",children:x.jsx(VS,{size:15})}),activeId:"studio",onThemeToggle:_t,runtimeLabel:Re.runtimeState.available?"Wasm ready":Re.status,runtimeStatus:Re.runtimeState.available?"ready":Re.status,runtimeTitle:Re.runtimeState.message||(Re.runtimeState.available?"Browser Wasm runtime ready":Re.status),theme:n}),x.jsx(_M,{activeId:v.id,categories:hb,categoryId:u,examples:Dn,observed:Ds,onCategorySelect:Ha,onSelect:Fi}),x.jsxs("main",{className:"studio-workspace",children:[x.jsxs("section",{className:"studio-stage-shell",children:[x.jsx(mb,{events:F,example:v,onEvidence:()=>Ke(!0),onExpand:v.mode==="visuals"?()=>Le(!0):null,onRendered:fl,onResult:()=>Ne(!0),onSectionPlay:Ec,playback:ye,playbackOffsetSeconds:Vt,playbackStartedAtMs:Ve,renderKey:I?.runId||null,runState:E,sections:re,source:S}),x.jsx(IT,{model:Q,onOpen:()=>H(!0),onRelease:s.release})]}),x.jsxs("section",{className:"editor-dock",children:[x.jsxs("header",{className:"editor-header",children:[B?x.jsxs("button",{"aria-expanded":K,className:"source-trigger",onClick:()=>$(de=>!de),type:"button",children:[x.jsx(yS,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:fi.name}),x.jsxs("small",{children:[ui.length," participating files"]})]})]}):null,x.jsx(KM,{canRun:Re.canRun&&Q.status!=="paused",editorOpen:B,isMusic:v.mode==="music",onCollapse:()=>W(de=>(de&&$(!1),!de)),onReset:Mc,onRun:_a,onStop:qa,running:Re.running})]}),B?x.jsxs(x.Fragment,{children:[K?x.jsxs(x.Fragment,{children:[x.jsx("button",{"aria-label":"Close source explorer",className:"source-scrim",onClick:()=>$(!1),type:"button"}),x.jsx(qM,{activeId:fi.id,files:ui,onClose:()=>$(!1),onSelect:de=>{U(de),$(!1)}})]}):null,x.jsx(GM,{file:fi,onChange:fi.editable?Rc:null,onRun:_a,resetKey:T})]}):null]}),x.jsx(NM,{events:F,example:v,fullReport:X,onClose:()=>Ke(!1),onFullReportChange:te,open:me,reportMode:E?.reportMode||"none",runState:E}),x.jsx(HM,{onClose:()=>Ne(!1),open:ot,output:Re.output,outputKind:Re.outputKind,runState:E}),We?x.jsx(hh,{label:"How Rasa made this result",onClose:()=>H(!1),title:"Proof trail",children:x.jsx(eA,{model:Q,onPauseChange:s.setPauseBeforeEffect,onRelease:s.release})}):null,yt&&E?.status==="ok"&&v.mode==="visuals"?x.jsx(hh,{label:"Expanded Rasa result",onClose:()=>Le(!1),title:v.title,children:x.jsx(mb,{events:F,example:v,expanded:!0,playback:ye,playbackStartedAtMs:Ve,runState:E,source:S})}):null]})]})}function KM({canRun:s,editorOpen:e,isMusic:n,onCollapse:a,onReset:l,onRun:c,onStop:u,running:f}){return e?x.jsxs("div",{className:"editor-actions",children:[n?x.jsx("button",{"aria-label":"Stop audio",onClick:u,title:"Stop audio",type:"button",children:x.jsx(ew,{size:17})}):null,x.jsx("button",{"aria-label":"Restore example source",onClick:l,title:"Restore example source",type:"button",children:x.jsx($S,{size:17})}),x.jsx("button",{"aria-label":f?"Running Rasa":"Run Rasa",className:"editor-run",disabled:!s,onClick:c,title:f?"Running Rasa":"Run Rasa",type:"button",children:x.jsx(gc,{fill:"currentColor",size:20})}),x.jsx("button",{"aria-label":e?"Collapse editor":"Open editor",className:"editor-collapse",onClick:a,title:e?"Collapse editor":"Open editor",type:"button",children:e?x.jsx(BS,{size:17}):x.jsx(P0,{size:17})})]}):x.jsx("div",{className:"editor-actions editor-actions-collapsed",children:x.jsx("button",{"aria-label":"Open editor",className:"editor-collapse",onClick:a,title:"Open editor",type:"button",children:x.jsx(P0,{size:17})})})}function WM(s){const e=s.parity?.execution||{},n=s.parity?.optimizer||s.wasmLane?.optimizer||{},a=e.tier||s.wasmLane?.runtimeExecutionTier||"portable-runtime",l=e.productLane||s.wasmLane?.productLane||"browser-wasm",c=Number(n.executed||0);return{detail:c>0?`${l} · ${a} · ${c} optimized region execution${c===1?"":"s"}`:`${l} · ${a} · no optimized region executed`,elapsedMs:s.elapsedMs,executionTier:a,optimizerExecutions:c,reportMode:s.reportMode,status:s.status}}function XM(s){if(s.type==="scene"){const n=s.scene.primitives.length;return{artifact:{count:n,detail:`${n.toLocaleString()} drawing instructions returned as ordinary Rasa values`,kind:"ordinary-rasa-scene",label:"Rasa scene value",payload:s.scene,unit:"primitives"},boundary:{authority:"browser-boundary",count:n,detail:`${n.toLocaleString()} drawing instructions handed to Canvas`,kind:"canvas-primitive-input",label:"Canvas primitive input",payload:s.scene,unit:"primitives"}}}const e=s.image.pixels.byteLength;return{artifact:{count:e,detail:`${e.toLocaleString()} RGBA bytes published by the executed WMP-2 callable`,kind:"wmp-2-rgba-bytes",label:"WMP-2 pixel artifact",payload:s.image.pixels,unit:"bytes"},boundary:{authority:"browser-boundary",count:e,detail:`${e.toLocaleString()} optimizer bytes passed to ImageData`,kind:"canvas-image-data-input",label:"Canvas pixel input",payload:s.image.pixels,unit:"bytes"}}}W2.createRoot(document.getElementById("root")).render(x.jsx(pc.StrictMode,{children:x.jsx(YM,{})}));
