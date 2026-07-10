(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function _2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kf={exports:{}},zr={};var Uy;function H2(){if(Uy)return zr;Uy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:u,ref:l!==void 0?l:null,props:c}}return zr.Fragment=e,zr.jsx=n,zr.jsxs=n,zr}var Vy;function q2(){return Vy||(Vy=1,Kf.exports=H2()),Kf.exports}var x=q2(),Wf={exports:{}},fe={};var Gy;function U2(){if(Gy)return fe;Gy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function _(E,q,F){this.props=E,this.context=q,this.refs=C,this.updater=F||k}_.prototype.isReactComponent={},_.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function U(){}U.prototype=_.prototype;function K(E,q,F){this.props=E,this.context=q,this.refs=C,this.updater=F||k}var $=K.prototype=new U;$.constructor=K,T($,_.prototype),$.isPureReactComponent=!0;var B=Array.isArray;function W(){}var X={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function pe(E,q,F){var Z=F.ref;return{$$typeof:s,type:E,key:q,ref:Z!==void 0?Z:null,props:F}}function Xe(E,q){return pe(E.type,q,E.props)}function ct(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function je(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return q[F]})}var bt=/\/+/g;function He(E,q){return typeof E=="object"&&E!==null&&E.key!=null?je(""+E.key):q.toString(36)}function Qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(W,W):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function H(E,q,F,Z,re){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var be=!1;if(E===null)be=!0;else switch(le){case"bigint":case"string":case"number":be=!0;break;case"object":switch(E.$$typeof){case s:case e:be=!0;break;case g:return be=E._init,H(be(E._payload),q,F,Z,re)}}if(be)return re=re(E),be=Z===""?"."+He(E,0):Z,B(re)?(F="",be!=null&&(F=be.replace(bt,"$&/")+"/"),H(re,q,F,"",function(Lt){return Lt})):re!=null&&(ct(re)&&(re=Xe(re,F+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(bt,"$&/")+"/")+be)),q.push(re)),1;be=0;var Ge=Z===""?".":Z+":";if(B(E))for(var $e=0;$e<E.length;$e++)Z=E[$e],le=Ge+He(Z,$e),be+=H(Z,q,F,le,re);else if($e=S(E),typeof $e=="function")for(E=$e.call(E),$e=0;!(Z=E.next()).done;)Z=Z.value,le=Ge+He(Z,$e++),be+=H(Z,q,F,le,re);else if(le==="object"){if(typeof E.then=="function")return H(Qe(E),q,F,Z,re);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function Q(E,q,F){if(E==null)return E;var Z=[],re=0;return H(E,Z,"","",function(le){return q.call(F,le,re++)}),Z}function ie(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var I=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},ae={map:Q,forEach:function(E,q,F){Q(E,function(){q.apply(this,arguments)},F)},count:function(E){var q=0;return Q(E,function(){q++}),q},toArray:function(E){return Q(E,function(q){return q})||[]},only:function(E){if(!ct(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=b,fe.Children=ae,fe.Component=_,fe.Fragment=n,fe.Profiler=l,fe.PureComponent=K,fe.StrictMode=a,fe.Suspense=h,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,q,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=T({},E.props),re=E.key;if(q!=null)for(le in q.key!==void 0&&(re=""+q.key),q)!te.call(q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&q.ref===void 0||(Z[le]=q[le]);var le=arguments.length-2;if(le===1)Z.children=F;else if(1<le){for(var be=Array(le),Ge=0;Ge<le;Ge++)be[Ge]=arguments[Ge+2];Z.children=be}return pe(E.type,re,Z)},fe.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},fe.createElement=function(E,q,F){var Z,re={},le=null;if(q!=null)for(Z in q.key!==void 0&&(le=""+q.key),q)te.call(q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(re[Z]=q[Z]);var be=arguments.length-2;if(be===1)re.children=F;else if(1<be){for(var Ge=Array(be),$e=0;$e<be;$e++)Ge[$e]=arguments[$e+2];re.children=Ge}if(E&&E.defaultProps)for(Z in be=E.defaultProps,be)re[Z]===void 0&&(re[Z]=be[Z]);return pe(E,le,re)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:f,render:E}},fe.isValidElement=ct,fe.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:ie}},fe.memo=function(E,q){return{$$typeof:p,type:E,compare:q===void 0?null:q}},fe.startTransition=function(E){var q=X.T,F={};X.T=F;try{var Z=E(),re=X.S;re!==null&&re(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(W,I)}catch(le){I(le)}finally{q!==null&&F.types!==null&&(q.types=F.types),X.T=q}},fe.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},fe.use=function(E){return X.H.use(E)},fe.useActionState=function(E,q,F){return X.H.useActionState(E,q,F)},fe.useCallback=function(E,q){return X.H.useCallback(E,q)},fe.useContext=function(E){return X.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,q){return X.H.useDeferredValue(E,q)},fe.useEffect=function(E,q){return X.H.useEffect(E,q)},fe.useEffectEvent=function(E){return X.H.useEffectEvent(E)},fe.useId=function(){return X.H.useId()},fe.useImperativeHandle=function(E,q,F){return X.H.useImperativeHandle(E,q,F)},fe.useInsertionEffect=function(E,q){return X.H.useInsertionEffect(E,q)},fe.useLayoutEffect=function(E,q){return X.H.useLayoutEffect(E,q)},fe.useMemo=function(E,q){return X.H.useMemo(E,q)},fe.useOptimistic=function(E,q){return X.H.useOptimistic(E,q)},fe.useReducer=function(E,q,F){return X.H.useReducer(E,q,F)},fe.useRef=function(E){return X.H.useRef(E)},fe.useState=function(E){return X.H.useState(E)},fe.useSyncExternalStore=function(E,q,F){return X.H.useSyncExternalStore(E,q,F)},fe.useTransition=function(){return X.H.useTransition()},fe.version="19.2.7",fe}var $y;function ph(){return $y||($y=1,Wf.exports=U2()),Wf.exports}var N=ph();const gc=_2(N);var Xf={exports:{}},Br={},Qf={exports:{}},Ff={};var Yy;function V2(){return Yy||(Yy=1,(function(s){function e(H,Q){var ie=H.length;H.push(Q);e:for(;0<ie;){var I=ie-1>>>1,ae=H[I];if(0<l(ae,Q))H[I]=Q,H[ie]=ae,ie=I;else break e}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var Q=H[0],ie=H.pop();if(ie!==Q){H[0]=ie;e:for(var I=0,ae=H.length,E=ae>>>1;I<E;){var q=2*(I+1)-1,F=H[q],Z=q+1,re=H[Z];if(0>l(F,ie))Z<ae&&0>l(re,F)?(H[I]=re,H[Z]=ie,I=Z):(H[I]=F,H[q]=ie,I=q);else if(Z<ae&&0>l(re,ie))H[I]=re,H[Z]=ie,I=Z;else break e}}return Q}function l(H,Q){var ie=H.sortIndex-Q.sortIndex;return ie!==0?ie:H.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,b=null,v=3,S=!1,k=!1,T=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function $(H){for(var Q=n(p);Q!==null;){if(Q.callback===null)a(p);else if(Q.startTime<=H)a(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=n(p)}}function B(H){if(T=!1,$(H),!k)if(n(h)!==null)k=!0,W||(W=!0,je());else{var Q=n(p);Q!==null&&Qe(B,Q.startTime-H)}}var W=!1,X=-1,te=5,pe=-1;function Xe(){return C?!0:!(s.unstable_now()-pe<te)}function ct(){if(C=!1,W){var H=s.unstable_now();pe=H;var Q=!0;try{e:{k=!1,T&&(T=!1,U(X),X=-1),S=!0;var ie=v;try{t:{for($(H),b=n(h);b!==null&&!(b.expirationTime>H&&Xe());){var I=b.callback;if(typeof I=="function"){b.callback=null,v=b.priorityLevel;var ae=I(b.expirationTime<=H);if(H=s.unstable_now(),typeof ae=="function"){b.callback=ae,$(H),Q=!0;break t}b===n(h)&&a(h),$(H)}else a(h);b=n(h)}if(b!==null)Q=!0;else{var E=n(p);E!==null&&Qe(B,E.startTime-H),Q=!1}}break e}finally{b=null,v=ie,S=!1}Q=void 0}}finally{Q?je():W=!1}}}var je;if(typeof K=="function")je=function(){K(ct)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,He=bt.port2;bt.port1.onmessage=ct,je=function(){He.postMessage(null)}}else je=function(){_(ct,0)};function Qe(H,Q){X=_(function(){H(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var ie=v;v=Q;try{return H()}finally{v=ie}},s.unstable_requestPaint=function(){C=!0},s.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=v;v=H;try{return Q()}finally{v=ie}},s.unstable_scheduleCallback=function(H,Q,ie){var I=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?I+ie:I):ie=I,H){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=ie+ae,H={id:g++,callback:Q,priorityLevel:H,startTime:ie,expirationTime:ae,sortIndex:-1},ie>I?(H.sortIndex=ie,e(p,H),n(h)===null&&H===n(p)&&(T?(U(X),X=-1):T=!0,Qe(B,ie-I))):(H.sortIndex=ae,e(h,H),k||S||(k=!0,W||(W=!0,je()))),H},s.unstable_shouldYield=Xe,s.unstable_wrapCallback=function(H){var Q=v;return function(){var ie=v;v=Q;try{return H.apply(this,arguments)}finally{v=ie}}}})(Ff)),Ff}var Ky;function G2(){return Ky||(Ky=1,Qf.exports=V2()),Qf.exports}var Zf={exports:{}},jt={};var Wy;function $2(){if(Wy)return jt;Wy=1;var s=ph();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,p,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:h,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,jt.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(h,p,null,g)},jt.flushSync=function(h){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=g,a.d.f()}},jt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},jt.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},jt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(h,{crossOrigin:b,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},jt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},jt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},jt.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},jt.requestFormReset=function(h){a.d.r(h)},jt.unstable_batchedUpdates=function(h,p){return h(p)},jt.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},jt.useFormStatus=function(){return u.H.useHostTransitionStatus()},jt.version="19.2.7",jt}var Xy;function Y2(){if(Xy)return Zf.exports;Xy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zf.exports=$2(),Zf.exports}var Qy;function K2(){if(Qy)return Br;Qy=1;var s=G2(),e=ph(),n=Y2();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,o=i;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(o=d.return,o!==null){r=o;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return h(d),t;if(m===o)return h(d),i;m=m.sibling}throw Error(a(188))}if(r.return!==o.return)r=d,o=m;else{for(var y=!1,w=d.child;w;){if(w===r){y=!0,r=d,o=m;break}if(w===o){y=!0,o=d,r=m;break}w=w.sibling}if(!y){for(w=m.child;w;){if(w===r){y=!0,r=m,o=d;break}if(w===o){y=!0,o=m,r=d;break}w=w.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),K=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function je(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function He(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case W:return"SuspenseList";case pe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case K:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return i=t.displayName||null,i!==null?i:He(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return He(t(i))}catch{}}return null}var Qe=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},I=[],ae=-1;function E(t){return{current:t}}function q(t){0>ae||(t.current=I[ae],I[ae]=null,ae--)}function F(t,i){ae++,I[ae]=t.current,t.current=i}var Z=E(null),re=E(null),le=E(null),be=E(null);function Ge(t,i){switch(F(le,i),F(re,t),F(Z,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?cy(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=cy(i),t=uy(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Z),F(Z,t)}function $e(){q(Z),q(re),q(le)}function Lt(t){t.memoizedState!==null&&F(be,t);var i=Z.current,r=uy(i,t.type);i!==r&&(F(re,t),F(Z,r))}function Gt(t){re.current===t&&(q(Z),q(re)),be.current===t&&(q(be),Or._currentValue=ie)}var _t,js;function Mn(t){if(_t===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);_t=i&&i[1]||"",js=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+t+js}var fi=!1;function di(t,i){if(!t||fi)return"";fi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(L){var z=L}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(L){z=L}t.call(Y.prototype)}}else{try{throw Error()}catch(L){z=L}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(L){if(L&&z&&typeof L.stack=="string")return[L.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),y=m[0],w=m[1];if(y&&w){var A=y.split(`
`),j=w.split(`
`);for(d=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(o===A.length||d===j.length)for(o=A.length-1,d=j.length-1;1<=o&&0<=d&&A[o]!==j[d];)d--;for(;1<=o&&0<=d;o--,d--)if(A[o]!==j[d]){if(o!==1||d!==1)do if(o--,d--,0>d||A[o]!==j[d]){var V=`
`+A[o].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=o&&0<=d);break}}}finally{fi=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Mn(r):""}function Ce(t,i){switch(t.tag){case 26:case 27:case 5:return Mn(t.type);case 16:return Mn("Lazy");case 13:return t.child!==i&&i!==null?Mn("Suspense Fallback"):Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return di(t.type,!1);case 11:return di(t.type.render,!1);case 1:return di(t.type,!0);case 31:return Mn("Activity");default:return""}}function qa(t){try{var i="",r=null;do i+=Ce(t,r),r=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zi=Object.prototype.hasOwnProperty,Ua=s.unstable_scheduleCallback,Va=s.unstable_cancelCallback,Mc=s.unstable_shouldYield,Rc=s.unstable_requestPaint,Ht=s.unstable_now,Cc=s.unstable_getCurrentPriorityLevel,fl=s.unstable_ImmediatePriority,dl=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,Me=s.unstable_LowPriority,gt=s.unstable_IdlePriority,Ga=s.log,zs=s.unstable_setDisableYieldValue,hi=null,Ie=null;function tt(t){if(typeof Ga=="function"&&zs(t),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(hi,t)}catch{}}var vt=Math.clz32?Math.clz32:Nc,Oc=Math.log,hl=Math.LN2;function Nc(t){return t>>>=0,t===0?32:31-(Oc(t)/hl|0)|0}var Bs=256,ml=262144,pl=4194304;function Pi(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gl(t,i,r){var o=t.pendingLanes;if(o===0)return 0;var d=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~m,o!==0?d=Pi(o):(y&=w,y!==0?d=Pi(y):r||(r=w&~t,r!==0&&(d=Pi(r))))):(w=o&~m,w!==0?d=Pi(w):y!==0?d=Pi(y):r||(r=o&~t,r!==0&&(d=Pi(r)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:d}function $a(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function T1(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yh(){var t=pl;return pl<<=1,(pl&62914560)===0&&(pl=4194304),t}function Dc(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ya(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function A1(t,i,r,o,d,m){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,A=t.expirationTimes,j=t.hiddenUpdates;for(r=y&~r;0<r;){var V=31-vt(r),Y=1<<V;w[V]=0,A[V]=-1;var z=j[V];if(z!==null)for(j[V]=null,V=0;V<z.length;V++){var L=z[V];L!==null&&(L.lane&=-536870913)}r&=~Y}o!==0&&Kh(t,o,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Kh(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-vt(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Wh(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-vt(r),d=1<<o;d&i|t[o]&i&&(t[o]|=i),r&=~d}}function Xh(t,i){var r=i&-i;return r=(r&42)!==0?1:jc(r),(r&(t.suspendedLanes|i))!==0?0:r}function jc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:jy(t.type))}function Fh(t,i){var r=Q.p;try{return Q.p=t,i()}finally{Q.p=r}}var mi=Math.random().toString(36).slice(2),Tt="__reactFiber$"+mi,$t="__reactProps$"+mi,Ls="__reactContainer$"+mi,Bc="__reactEvents$"+mi,E1="__reactListeners$"+mi,M1="__reactHandles$"+mi,Zh="__reactResources$"+mi,Ka="__reactMarker$"+mi;function Lc(t){delete t[Tt],delete t[$t],delete t[Bc],delete t[E1],delete t[M1]}function _s(t){var i=t[Tt];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Ls]||r[Tt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=yy(t);t!==null;){if(r=t[Tt])return r;t=yy(t)}return i}t=r,r=t.parentNode}return null}function Hs(t){if(t=t[Tt]||t[Ls]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Wa(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function qs(t){var i=t[Zh];return i||(i=t[Zh]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xt(t){t[Ka]=!0}var Ph=new Set,Jh={};function Ji(t,i){Us(t,i),Us(t+"Capture",i)}function Us(t,i){for(Jh[t]=i,t=0;t<i.length;t++)Ph.add(i[t])}var R1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ih={},em={};function C1(t){return Zi.call(em,t)?!0:Zi.call(Ih,t)?!1:R1.test(t)?em[t]=!0:(Ih[t]=!0,!1)}function yl(t,i,r){if(C1(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function bl(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function qn(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tm(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function O1(t,i,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){r=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function _c(t){if(!t._valueTracker){var i=tm(t)?"checked":"value";t._valueTracker=O1(t,i,""+t[i])}}function nm(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=tm(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var N1=/[\n"\\]/g;function fn(t){return t.replace(N1,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Hc(t,i,r,o,d,m,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+un(i)):t.value!==""+un(i)&&(t.value=""+un(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?qc(t,y,un(i)):r!=null?qc(t,y,un(r)):o!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+un(w):t.removeAttribute("name")}function im(t,i,r,o,d,m,y,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){_c(t);return}r=r!=null?""+un(r):"",i=i!=null?""+un(i):r,w||i===t.value||(t.value=i),t.defaultValue=i}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),_c(t)}function qc(t,i,r){i==="number"&&vl(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Vs(t,i,r,o){if(t=t.options,i){i={};for(var d=0;d<r.length;d++)i["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=i.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&o&&(t[r].defaultSelected=!0)}else{for(r=""+un(r),i=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function sm(t,i,r){if(i!=null&&(i=""+un(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+un(r):""}function am(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(a(92));if(Qe(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=un(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),_c(t)}function Gs(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var D1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rm(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||D1.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function lm(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in i)o=i[d],i.hasOwnProperty(d)&&r[d]!==o&&rm(t,d,o)}else for(var m in i)i.hasOwnProperty(m)&&rm(t,m,i[m])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return z1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Un(){}var Vc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,Ys=null;function om(t){var i=Hs(t);if(i&&(t=i.stateNode)){var r=t[$t]||null;e:switch(t=i.stateNode,i.type){case"input":if(Hc(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+fn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var d=o[$t]||null;if(!d)throw Error(a(90));Hc(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&nm(o)}break e;case"textarea":sm(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Vs(t,!!r.multiple,i,!1)}}}var $c=!1;function cm(t,i,r){if($c)return t(i,r);$c=!0;try{var o=t(i);return o}finally{if($c=!1,($s!==null||Ys!==null)&&(lo(),$s&&(i=$s,t=Ys,Ys=$s=null,om(i),t)))for(i=0;i<t.length;i++)om(t[i])}}function Xa(t,i){var r=t.stateNode;if(r===null)return null;var o=r[$t]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Vn)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Yc=!1}var pi=null,Kc=null,Sl=null;function um(){if(Sl)return Sl;var t,i=Kc,r=i.length,o,d="value"in pi?pi.value:pi.textContent,m=d.length;for(t=0;t<r&&i[t]===d[t];t++);var y=r-t;for(o=1;o<=y&&i[r-o]===d[m-o];o++);return Sl=d.slice(t,1<o?1-o:void 0)}function wl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function fm(){return!1}function Yt(t){function i(r,o,d,m,y){this._reactName=r,this._targetInst=d,this.type=o,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?kl:fm,this.isPropagationStopped=fm,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),i}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Yt(Ii),Fa=b({},Ii,{view:0,detail:0}),B1=Yt(Fa),Wc,Xc,Za,Al=b({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Za&&(Za&&t.type==="mousemove"?(Wc=t.screenX-Za.screenX,Xc=t.screenY-Za.screenY):Xc=Wc=0,Za=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),dm=Yt(Al),L1=b({},Al,{dataTransfer:0}),_1=Yt(L1),H1=b({},Fa,{relatedTarget:0}),Qc=Yt(H1),q1=b({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=Yt(q1),V1=b({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G1=Yt(V1),$1=b({},Ii,{data:0}),hm=Yt($1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=W1[t])?!!i[t]:!1}function Fc(){return X1}var Q1=b({},Fa,{key:function(t){if(t.key){var i=Y1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F1=Yt(Q1),Z1=b({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Yt(Z1),P1=b({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),J1=Yt(P1),I1=b({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Yt(I1),tx=b({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Yt(tx),ix=b({},Ii,{newState:0,oldState:0}),sx=Yt(ix),ax=[9,13,27,32],Zc=Vn&&"CompositionEvent"in window,Pa=null;Vn&&"documentMode"in document&&(Pa=document.documentMode);var rx=Vn&&"TextEvent"in window&&!Pa,pm=Vn&&(!Zc||Pa&&8<Pa&&11>=Pa),gm=" ",ym=!1;function bm(t,i){switch(t){case"keyup":return ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function lx(t,i){switch(t){case"compositionend":return vm(i);case"keypress":return i.which!==32?null:(ym=!0,gm);case"textInput":return t=i.data,t===gm&&ym?null:t;default:return null}}function ox(t,i){if(Ks)return t==="compositionend"||!Zc&&bm(t,i)?(t=um(),Sl=Kc=pi=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pm&&i.locale!=="ko"?null:i.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!cx[t.type]:i==="textarea"}function Sm(t,i,r,o){$s?Ys?Ys.push(o):Ys=[o]:$s=o,i=po(i,"onChange"),0<i.length&&(r=new Tl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var Ja=null,Ia=null;function ux(t){iy(t,0)}function El(t){var i=Wa(t);if(nm(i))return t}function wm(t,i){if(t==="change")return i}var km=!1;if(Vn){var Pc;if(Vn){var Jc="oninput"in document;if(!Jc){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Jc=typeof Tm.oninput=="function"}Pc=Jc}else Pc=!1;km=Pc&&(!document.documentMode||9<document.documentMode)}function Am(){Ja&&(Ja.detachEvent("onpropertychange",Em),Ia=Ja=null)}function Em(t){if(t.propertyName==="value"&&El(Ia)){var i=[];Sm(i,Ia,t,Gc(t)),cm(ux,i)}}function fx(t,i,r){t==="focusin"?(Am(),Ja=i,Ia=r,Ja.attachEvent("onpropertychange",Em)):t==="focusout"&&Am()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Ia)}function hx(t,i){if(t==="click")return El(i)}function mx(t,i){if(t==="input"||t==="change")return El(i)}function px(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jt=typeof Object.is=="function"?Object.is:px;function er(t,i){if(Jt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var d=r[o];if(!Zi.call(i,d)||!Jt(t[d],i[d]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,i){var r=Mm(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mm(r)}}function Cm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Cm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=vl(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=vl(t.document)}return i}function Ic(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gx=Vn&&"documentMode"in document&&11>=document.documentMode,Ws=null,eu=null,tr=null,tu=!1;function Nm(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tu||Ws==null||Ws!==vl(o)||(o=Ws,"selectionStart"in o&&Ic(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),tr&&er(tr,o)||(tr=o,o=po(eu,"onSelect"),0<o.length&&(i=new Tl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=Ws)))}function es(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Xs={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},nu={},Dm={};Vn&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ts(t){if(nu[t])return nu[t];if(!Xs[t])return t;var i=Xs[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Dm)return nu[t]=i[r];return t}var jm=ts("animationend"),zm=ts("animationiteration"),Bm=ts("animationstart"),yx=ts("transitionrun"),bx=ts("transitionstart"),vx=ts("transitioncancel"),Lm=ts("transitionend"),_m=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function Sn(t,i){_m.set(t,i),Ji(i,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},dn=[],Qs=0,su=0;function Rl(){for(var t=Qs,i=su=Qs=0;i<t;){var r=dn[i];dn[i++]=null;var o=dn[i];dn[i++]=null;var d=dn[i];dn[i++]=null;var m=dn[i];if(dn[i++]=null,o!==null&&d!==null){var y=o.pending;y===null?d.next=d:(d.next=y.next,y.next=d),o.pending=d}m!==0&&Hm(r,d,m)}}function Cl(t,i,r,o){dn[Qs++]=t,dn[Qs++]=i,dn[Qs++]=r,dn[Qs++]=o,su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function au(t,i,r,o){return Cl(t,i,r,o),Ol(t)}function ns(t,i){return Cl(t,null,null,i),Ol(t)}function Hm(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var d=!1,m=t.return;m!==null;)m.childLanes|=r,o=m.alternate,o!==null&&(o.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-vt(r),t=m.hiddenUpdates,o=t[d],o===null?t[d]=[i]:o.push(i),i.lane=r|536870912),m):null}function Ol(t){if(50<kr)throw kr=0,pf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Fs={};function xx(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,i,r,o){return new xx(t,i,r,o)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gn(t,i){var r=t.alternate;return r===null?(r=It(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function qm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nl(t,i,r,o,d,m){var y=0;if(o=t,typeof t=="function")ru(t)&&(y=1);else if(typeof t=="string")y=A2(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case pe:return t=It(31,r,i,d),t.elementType=pe,t.lanes=m,t;case T:return is(r.children,d,m,i);case C:y=8,d|=24;break;case _:return t=It(12,r,i,d|2),t.elementType=_,t.lanes=m,t;case B:return t=It(13,r,i,d),t.elementType=B,t.lanes=m,t;case W:return t=It(19,r,i,d),t.elementType=W,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:y=10;break e;case U:y=9;break e;case $:y=11;break e;case X:y=14;break e;case te:y=16,o=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=It(y,r,i,d),i.elementType=t,i.type=o,i.lanes=m,i}function is(t,i,r,o){return t=It(7,t,o,i),t.lanes=r,t}function lu(t,i,r){return t=It(6,t,null,i),t.lanes=r,t}function Um(t){var i=It(18,null,null,0);return i.stateNode=t,i}function ou(t,i,r){return i=It(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function hn(t,i){if(typeof t=="object"&&t!==null){var r=Vm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:qa(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:qa(i)}}var Zs=[],Ps=0,Dl=null,nr=0,mn=[],pn=0,gi=null,Rn=1,Cn="";function $n(t,i){Zs[Ps++]=nr,Zs[Ps++]=Dl,Dl=t,nr=i}function Gm(t,i,r){mn[pn++]=Rn,mn[pn++]=Cn,mn[pn++]=gi,gi=t;var o=Rn;t=Cn;var d=32-vt(o)-1;o&=~(1<<d),r+=1;var m=32-vt(i)+d;if(30<m){var y=d-d%5;m=(o&(1<<y)-1).toString(32),o>>=y,d-=y,Rn=1<<32-vt(i)+d|r<<d|o,Cn=m+t}else Rn=1<<m|r<<d|o,Cn=t}function cu(t){t.return!==null&&($n(t,1),Gm(t,1,0))}function uu(t){for(;t===Dl;)Dl=Zs[--Ps],Zs[Ps]=null,nr=Zs[--Ps],Zs[Ps]=null;for(;t===gi;)gi=mn[--pn],mn[pn]=null,Cn=mn[--pn],mn[pn]=null,Rn=mn[--pn],mn[pn]=null}function $m(t,i){mn[pn++]=Rn,mn[pn++]=Cn,mn[pn++]=gi,Rn=i.id,Cn=i.overflow,gi=t}var At=null,Ze=null,Te=!1,yi=null,gn=!1,fu=Error(a(519));function bi(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ir(hn(i,t)),fu}function Ym(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[Tt]=t,i[$t]=o,r){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(r=0;r<Ar.length;r++)Se(Ar[r],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),im(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),am(i,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||ly(i.textContent,r)?(o.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),o.onScroll!=null&&Se("scroll",i),o.onScrollEnd!=null&&Se("scrollend",i),o.onClick!=null&&(i.onclick=Un),i=!0):i=!1,i||bi(t,!0)}function Km(t){for(At=t.return;At;)switch(At.tag){case 5:case 31:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:At=At.return}}function Js(t){if(t!==At)return!1;if(!Te)return Km(t),Te=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Of(t.type,t.memoizedProps)),r=!r),r&&Ze&&bi(t),Km(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ze=gy(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ze=gy(t)}else i===27?(i=Ze,Di(t.type)?(t=Bf,Bf=null,Ze=t):Ze=i):Ze=At?bn(t.stateNode.nextSibling):null;return!0}function ss(){Ze=At=null,Te=!1}function du(){var t=yi;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),yi=null),t}function ir(t){yi===null?yi=[t]:yi.push(t)}var hu=E(null),as=null,Yn=null;function vi(t,i,r){F(hu,i._currentValue),i._currentValue=r}function Kn(t){t._currentValue=hu.current,q(hu)}function mu(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function pu(t,i,r,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var A=0;A<i.length;A++)if(w.context===i[A]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),mu(m.return,r,t),o||(y=null);break e}m=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(a(341));y.lanes|=r,m=y.alternate,m!==null&&(m.lanes|=r),mu(y,r,t),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===t){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Is(t,i,r,o){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var w=d.type;Jt(d.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(d===be.current){if(y=d.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Or):t=[Or])}d=d.return}t!==null&&pu(i,t,r,o),i.flags|=262144}function jl(t){for(t=t.firstContext;t!==null;){if(!Jt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rs(t){as=t,Yn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Et(t){return Wm(as,t)}function zl(t,i){return as===null&&rs(t),Wm(t,i)}function Wm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Yn===null){if(t===null)throw Error(a(308));Yn=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Yn=Yn.next=i;return r}var Sx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},wx=s.unstable_scheduleCallback,kx=s.unstable_NormalPriority,ut={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new Sx,data:new Map,refCount:0}}function sr(t){t.refCount--,t.refCount===0&&wx(kx,function(){t.controller.abort()})}var ar=null,yu=0,ea=0,ta=null;function Tx(t,i){if(ar===null){var r=ar=[];yu=0,ea=Sf(),ta={status:"pending",value:void 0,then:function(o){r.push(o)}}}return yu++,i.then(Xm,Xm),i}function Xm(){if(--yu===0&&ar!==null){ta!==null&&(ta.status="fulfilled");var t=ar;ar=null,ea=0,ta=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ax(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var d=0;d<r.length;d++)(0,r[d])(i)},function(d){for(o.status="rejected",o.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),o}var Qm=H.S;H.S=function(t,i){Ng=Ht(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Tx(t,i),Qm!==null&&Qm(t,i)};var ls=E(null);function bu(){var t=ls.current;return t!==null?t:Ye.pooledCache}function Bl(t,i){i===null?F(ls,ls.current):F(ls,i.pool)}function Fm(){var t=bu();return t===null?null:{parent:ut._currentValue,pool:t}}var na=Error(a(460)),vu=Error(a(474)),Ll=Error(a(542)),_l={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Un,Un),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Im(t),t;default:if(typeof i.status=="string")i.then(Un,Un);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=o}},function(o){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Im(t),t}throw cs=i,na}}function os(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(cs=r,na):r}}var cs=null;function Jm(){if(cs===null)throw Error(a(459));var t=cs;return cs=null,t}function Im(t){if(t===na||t===Ll)throw Error(a(483))}var ia=null,rr=0;function Hl(t){var i=rr;return rr+=1,ia===null&&(ia=[]),Pm(ia,t,i)}function lr(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ql(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ep(t){function i(O,R){if(t){var D=O.deletions;D===null?(O.deletions=[R],O.flags|=16):D.push(R)}}function r(O,R){if(!t)return null;for(;R!==null;)i(O,R),R=R.sibling;return null}function o(O){for(var R=new Map;O!==null;)O.key!==null?R.set(O.key,O):R.set(O.index,O),O=O.sibling;return R}function d(O,R){return O=Gn(O,R),O.index=0,O.sibling=null,O}function m(O,R,D){return O.index=D,t?(D=O.alternate,D!==null?(D=D.index,D<R?(O.flags|=67108866,R):D):(O.flags|=67108866,R)):(O.flags|=1048576,R)}function y(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function w(O,R,D,G){return R===null||R.tag!==6?(R=lu(D,O.mode,G),R.return=O,R):(R=d(R,D),R.return=O,R)}function A(O,R,D,G){var se=D.type;return se===T?V(O,R,D.props.children,G,D.key):R!==null&&(R.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&os(se)===R.type)?(R=d(R,D.props),lr(R,D),R.return=O,R):(R=Nl(D.type,D.key,D.props,null,O.mode,G),lr(R,D),R.return=O,R)}function j(O,R,D,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==D.containerInfo||R.stateNode.implementation!==D.implementation?(R=ou(D,O.mode,G),R.return=O,R):(R=d(R,D.children||[]),R.return=O,R)}function V(O,R,D,G,se){return R===null||R.tag!==7?(R=is(D,O.mode,G,se),R.return=O,R):(R=d(R,D),R.return=O,R)}function Y(O,R,D){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=lu(""+R,O.mode,D),R.return=O,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return D=Nl(R.type,R.key,R.props,null,O.mode,D),lr(D,R),D.return=O,D;case k:return R=ou(R,O.mode,D),R.return=O,R;case te:return R=os(R),Y(O,R,D)}if(Qe(R)||je(R))return R=is(R,O.mode,D,null),R.return=O,R;if(typeof R.then=="function")return Y(O,Hl(R),D);if(R.$$typeof===K)return Y(O,zl(O,R),D);ql(O,R)}return null}function z(O,R,D,G){var se=R!==null?R.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:w(O,R,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===se?A(O,R,D,G):null;case k:return D.key===se?j(O,R,D,G):null;case te:return D=os(D),z(O,R,D,G)}if(Qe(D)||je(D))return se!==null?null:V(O,R,D,G,null);if(typeof D.then=="function")return z(O,R,Hl(D),G);if(D.$$typeof===K)return z(O,R,zl(O,D),G);ql(O,D)}return null}function L(O,R,D,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return O=O.get(D)||null,w(R,O,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return O=O.get(G.key===null?D:G.key)||null,A(R,O,G,se);case k:return O=O.get(G.key===null?D:G.key)||null,j(R,O,G,se);case te:return G=os(G),L(O,R,D,G,se)}if(Qe(G)||je(G))return O=O.get(D)||null,V(R,O,G,se,null);if(typeof G.then=="function")return L(O,R,D,Hl(G),se);if(G.$$typeof===K)return L(O,R,D,zl(R,G),se);ql(R,G)}return null}function ee(O,R,D,G){for(var se=null,Oe=null,ne=R,ge=R=0,ke=null;ne!==null&&ge<D.length;ge++){ne.index>ge?(ke=ne,ne=null):ke=ne.sibling;var Ne=z(O,ne,D[ge],G);if(Ne===null){ne===null&&(ne=ke);break}t&&ne&&Ne.alternate===null&&i(O,ne),R=m(Ne,R,ge),Oe===null?se=Ne:Oe.sibling=Ne,Oe=Ne,ne=ke}if(ge===D.length)return r(O,ne),Te&&$n(O,ge),se;if(ne===null){for(;ge<D.length;ge++)ne=Y(O,D[ge],G),ne!==null&&(R=m(ne,R,ge),Oe===null?se=ne:Oe.sibling=ne,Oe=ne);return Te&&$n(O,ge),se}for(ne=o(ne);ge<D.length;ge++)ke=L(ne,O,ge,D[ge],G),ke!==null&&(t&&ke.alternate!==null&&ne.delete(ke.key===null?ge:ke.key),R=m(ke,R,ge),Oe===null?se=ke:Oe.sibling=ke,Oe=ke);return t&&ne.forEach(function(_i){return i(O,_i)}),Te&&$n(O,ge),se}function oe(O,R,D,G){if(D==null)throw Error(a(151));for(var se=null,Oe=null,ne=R,ge=R=0,ke=null,Ne=D.next();ne!==null&&!Ne.done;ge++,Ne=D.next()){ne.index>ge?(ke=ne,ne=null):ke=ne.sibling;var _i=z(O,ne,Ne.value,G);if(_i===null){ne===null&&(ne=ke);break}t&&ne&&_i.alternate===null&&i(O,ne),R=m(_i,R,ge),Oe===null?se=_i:Oe.sibling=_i,Oe=_i,ne=ke}if(Ne.done)return r(O,ne),Te&&$n(O,ge),se;if(ne===null){for(;!Ne.done;ge++,Ne=D.next())Ne=Y(O,Ne.value,G),Ne!==null&&(R=m(Ne,R,ge),Oe===null?se=Ne:Oe.sibling=Ne,Oe=Ne);return Te&&$n(O,ge),se}for(ne=o(ne);!Ne.done;ge++,Ne=D.next())Ne=L(ne,O,ge,Ne.value,G),Ne!==null&&(t&&Ne.alternate!==null&&ne.delete(Ne.key===null?ge:Ne.key),R=m(Ne,R,ge),Oe===null?se=Ne:Oe.sibling=Ne,Oe=Ne);return t&&ne.forEach(function(L2){return i(O,L2)}),Te&&$n(O,ge),se}function Ve(O,R,D,G){if(typeof D=="object"&&D!==null&&D.type===T&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:e:{for(var se=D.key;R!==null;){if(R.key===se){if(se=D.type,se===T){if(R.tag===7){r(O,R.sibling),G=d(R,D.props.children),G.return=O,O=G;break e}}else if(R.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&os(se)===R.type){r(O,R.sibling),G=d(R,D.props),lr(G,D),G.return=O,O=G;break e}r(O,R);break}else i(O,R);R=R.sibling}D.type===T?(G=is(D.props.children,O.mode,G,D.key),G.return=O,O=G):(G=Nl(D.type,D.key,D.props,null,O.mode,G),lr(G,D),G.return=O,O=G)}return y(O);case k:e:{for(se=D.key;R!==null;){if(R.key===se)if(R.tag===4&&R.stateNode.containerInfo===D.containerInfo&&R.stateNode.implementation===D.implementation){r(O,R.sibling),G=d(R,D.children||[]),G.return=O,O=G;break e}else{r(O,R);break}else i(O,R);R=R.sibling}G=ou(D,O.mode,G),G.return=O,O=G}return y(O);case te:return D=os(D),Ve(O,R,D,G)}if(Qe(D))return ee(O,R,D,G);if(je(D)){if(se=je(D),typeof se!="function")throw Error(a(150));return D=se.call(D),oe(O,R,D,G)}if(typeof D.then=="function")return Ve(O,R,Hl(D),G);if(D.$$typeof===K)return Ve(O,R,zl(O,D),G);ql(O,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,R!==null&&R.tag===6?(r(O,R.sibling),G=d(R,D),G.return=O,O=G):(r(O,R),G=lu(D,O.mode,G),G.return=O,O=G),y(O)):r(O,R)}return function(O,R,D,G){try{rr=0;var se=Ve(O,R,D,G);return ia=null,se}catch(ne){if(ne===na||ne===Ll)throw ne;var Oe=It(29,ne,null,O.mode);return Oe.lanes=G,Oe.return=O,Oe}}}var us=ep(!0),tp=ep(!1),xi=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Si(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wi(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var d=o.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),o.pending=i,i=Ol(t),Hm(t,null,r),i}return Cl(t,o,i,r),Ol(t)}function or(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Wh(t,r)}}function wu(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,r=r.next}while(r!==null);m===null?d=m=i:m=m.next=i}else d=m=i;r={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var ku=!1;function cr(){if(ku){var t=ta;if(t!==null)throw t}}function ur(t,i,r,o){ku=!1;var d=t.updateQueue;xi=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var A=w,j=A.next;A.next=null,y===null?m=j:y.next=j,y=A;var V=t.alternate;V!==null&&(V=V.updateQueue,w=V.lastBaseUpdate,w!==y&&(w===null?V.firstBaseUpdate=j:w.next=j,V.lastBaseUpdate=A))}if(m!==null){var Y=d.baseState;y=0,V=j=A=null,w=m;do{var z=w.lane&-536870913,L=z!==w.lane;if(L?(we&z)===z:(o&z)===z){z!==0&&z===ea&&(ku=!0),V!==null&&(V=V.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ee=t,oe=w;z=i;var Ve=r;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){Y=ee.call(Ve,Y,z);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,z=typeof ee=="function"?ee.call(Ve,Y,z):ee,z==null)break e;Y=b({},Y,z);break e;case 2:xi=!0}}z=w.callback,z!==null&&(t.flags|=64,L&&(t.flags|=8192),L=d.callbacks,L===null?d.callbacks=[z]:L.push(z))}else L={lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},V===null?(j=V=L,A=Y):V=V.next=L,y|=z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);V===null&&(A=Y),d.baseState=A,d.firstBaseUpdate=j,d.lastBaseUpdate=V,m===null&&(d.shared.lanes=0),Mi|=y,t.lanes=y,t.memoizedState=Y}}function np(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ip(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)np(r[t],i)}var sa=E(null),Ul=E(0);function sp(t,i){t=ei,F(Ul,t),F(sa,i),ei=t|i.baseLanes}function Tu(){F(Ul,ei),F(sa,sa.current)}function Au(){ei=Ul.current,q(sa),q(Ul)}var en=E(null),yn=null;function ki(t){var i=t.alternate;F(at,at.current&1),F(en,t),yn===null&&(i===null||sa.current!==null||i.memoizedState!==null)&&(yn=t)}function Eu(t){F(at,at.current),F(en,t),yn===null&&(yn=t)}function ap(t){t.tag===22?(F(at,at.current),F(en,t),yn===null&&(yn=t)):Ti()}function Ti(){F(at,at.current),F(en,en.current)}function tn(t){q(en),yn===t&&(yn=null),q(at)}var at=E(0);function Vl(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||jf(r)||zf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wn=0,me=null,qe=null,ft=null,Gl=!1,aa=!1,fs=!1,$l=0,fr=0,ra=null,Ex=0;function nt(){throw Error(a(321))}function Mu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Jt(t[r],i[r]))return!1;return!0}function Ru(t,i,r,o,d,m){return Wn=m,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?Gp:$u,fs=!1,m=r(o,d),fs=!1,aa&&(m=lp(i,r,o,d)),rp(t),m}function rp(t){H.H=mr;var i=qe!==null&&qe.next!==null;if(Wn=0,ft=qe=me=null,Gl=!1,fr=0,ra=null,i)throw Error(a(300));t===null||dt||(t=t.dependencies,t!==null&&jl(t)&&(dt=!0))}function lp(t,i,r,o){me=t;var d=0;do{if(aa&&(ra=null),fr=0,aa=!1,25<=d)throw Error(a(301));if(d+=1,ft=qe=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=$p,m=i(r,o)}while(aa);return m}function Mx(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?dr(i):i,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(me.flags|=1024),i}function Cu(){var t=$l!==0;return $l=0,t}function Ou(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Nu(t){if(Gl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Gl=!1}Wn=0,ft=qe=me=null,aa=!1,fr=$l=0,ra=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?me.memoizedState=ft=t:ft=ft.next=t,ft}function rt(){if(qe===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var i=ft===null?me.memoizedState:ft.next;if(i!==null)ft=i,qe=t;else{if(t===null)throw me.alternate===null?Error(a(467)):Error(a(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ft===null?me.memoizedState=ft=t:ft=ft.next=t}return ft}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dr(t){var i=fr;return fr+=1,ra===null&&(ra=[]),t=Pm(ra,t,i),i=me,(ft===null?i.memoizedState:ft.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Gp:$u),t}function Kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dr(t);if(t.$$typeof===K)return Et(t)}throw Error(a(438,String(t)))}function Du(t){var i=null,r=me.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Yl(),me.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=Xe;return i.index++,r}function Xn(t,i){return typeof i=="function"?i(t):i}function Wl(t){var i=rt();return ju(i,qe,t)}function ju(t,i,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var d=t.baseQueue,m=o.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}i.baseQueue=d=m,o.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var w=y=null,A=null,j=i,V=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(we&Y)===Y:(Wn&Y)===Y){var z=j.revertLane;if(z===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===ea&&(V=!0);else if((Wn&z)===z){j=j.next,z===ea&&(V=!0);continue}else Y={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(w=A=Y,y=m):A=A.next=Y,me.lanes|=z,Mi|=z;Y=j.action,fs&&r(m,Y),m=j.hasEagerState?j.eagerState:r(m,Y)}else z={lane:Y,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(w=A=z,y=m):A=A.next=z,me.lanes|=Y,Mi|=Y;j=j.next}while(j!==null&&j!==i);if(A===null?y=m:A.next=w,!Jt(m,t.memoizedState)&&(dt=!0,V&&(r=ta,r!==null)))throw r;t.memoizedState=m,t.baseState=y,t.baseQueue=A,o.lastRenderedState=m}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function zu(t){var i=rt(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,d=r.pending,m=i.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do m=t(m,y.action),y=y.next;while(y!==d);Jt(m,i.memoizedState)||(dt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,o]}function op(t,i,r){var o=me,d=rt(),m=Te;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var y=!Jt((qe||d).memoizedState,r);if(y&&(d.memoizedState=r,dt=!0),d=d.queue,_u(fp.bind(null,o,d,t),[t]),d.getSnapshot!==i||y||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,la(9,{destroy:void 0},up.bind(null,o,d,r,i),null),Ye===null)throw Error(a(349));m||(Wn&127)!==0||cp(o,i,r)}return r}function cp(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=me.updateQueue,i===null?(i=Yl(),me.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function up(t,i,r,o){i.value=r,i.getSnapshot=o,dp(i)&&hp(t)}function fp(t,i,r){return r(function(){dp(i)&&hp(t)})}function dp(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Jt(t,r)}catch{return!0}}function hp(t){var i=ns(t,2);i!==null&&Ft(i,t,2)}function Bu(t){var i=qt();if(typeof t=="function"){var r=t;if(t=r(),fs){tt(!0);try{r()}finally{tt(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:t},i}function mp(t,i,r,o){return t.baseState=r,ju(t,qe,typeof o=="function"?o:Xn)}function Rx(t,i,r,o,d){if(Fl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};H.T!==null?r(!0):m.isTransition=!1,o(m),r=i.pending,r===null?(m.next=i.pending=m,pp(i,m)):(m.next=r.next,i.pending=r.next=m)}}function pp(t,i){var r=i.action,o=i.payload,d=t.state;if(i.isTransition){var m=H.T,y={};H.T=y;try{var w=r(d,o),A=H.S;A!==null&&A(y,w),gp(t,i,w)}catch(j){Lu(t,i,j)}finally{m!==null&&y.types!==null&&(m.types=y.types),H.T=m}}else try{m=r(d,o),gp(t,i,m)}catch(j){Lu(t,i,j)}}function gp(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){yp(t,i,o)},function(o){return Lu(t,i,o)}):yp(t,i,r)}function yp(t,i,r){i.status="fulfilled",i.value=r,bp(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,pp(t,r)))}function Lu(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,bp(i),i=i.next;while(i!==o)}t.action=null}function bp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function vp(t,i){return i}function xp(t,i){if(Te){var r=Ye.formState;if(r!==null){e:{var o=me;if(Te){if(Ze){t:{for(var d=Ze,m=gn;d.nodeType!==8;){if(!m){d=null;break t}if(d=bn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ze=bn(d.nextSibling),o=d.data==="F!";break e}}bi(o)}o=!1}o&&(i=r[0])}}return r=qt(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:i},r.queue=o,r=qp.bind(null,me,o),o.dispatch=r,o=Bu(!1),m=Gu.bind(null,me,!1,o.queue),o=qt(),d={state:i,dispatch:null,action:t,pending:null},o.queue=d,r=Rx.bind(null,me,d,m,r),d.dispatch=r,o.memoizedState=t,[i,r,!1]}function Sp(t){var i=rt();return wp(i,qe,t)}function wp(t,i,r){if(i=ju(t,i,vp)[0],t=Wl(Xn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=dr(i)}catch(y){throw y===na?Ll:y}else o=i;i=rt();var d=i.queue,m=d.dispatch;return r!==i.memoizedState&&(me.flags|=2048,la(9,{destroy:void 0},Cx.bind(null,d,r),null)),[o,m,t]}function Cx(t,i){t.action=i}function kp(t){var i=rt(),r=qe;if(r!==null)return wp(i,r,t);rt(),i=i.memoizedState,r=rt();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function la(t,i,r,o){return t={tag:t,create:r,deps:o,inst:i,next:null},i=me.updateQueue,i===null&&(i=Yl(),me.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function Tp(){return rt().memoizedState}function Xl(t,i,r,o){var d=qt();me.flags|=t,d.memoizedState=la(1|i,{destroy:void 0},r,o===void 0?null:o)}function Ql(t,i,r,o){var d=rt();o=o===void 0?null:o;var m=d.memoizedState.inst;qe!==null&&o!==null&&Mu(o,qe.memoizedState.deps)?d.memoizedState=la(i,m,r,o):(me.flags|=t,d.memoizedState=la(1|i,m,r,o))}function Ap(t,i){Xl(8390656,8,t,i)}function _u(t,i){Ql(2048,8,t,i)}function Ox(t){me.flags|=4;var i=me.updateQueue;if(i===null)i=Yl(),me.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function Ep(t){var i=rt().memoizedState;return Ox({ref:i,nextImpl:t}),function(){if((ze&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Mp(t,i){return Ql(4,2,t,i)}function Rp(t,i){return Ql(4,4,t,i)}function Cp(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Op(t,i,r){r=r!=null?r.concat([t]):null,Ql(4,4,Cp.bind(null,i,t),r)}function Hu(){}function Np(t,i){var r=rt();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&Mu(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function Dp(t,i){var r=rt();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&Mu(i,o[1]))return o[0];if(o=t(),fs){tt(!0);try{t()}finally{tt(!1)}}return r.memoizedState=[o,i],o}function qu(t,i,r){return r===void 0||(Wn&1073741824)!==0&&(we&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=jg(),me.lanes|=t,Mi|=t,r)}function jp(t,i,r,o){return Jt(r,i)?r:sa.current!==null?(t=qu(t,r,o),Jt(t,i)||(dt=!0),t):(Wn&42)===0||(Wn&1073741824)!==0&&(we&261930)===0?(dt=!0,t.memoizedState=r):(t=jg(),me.lanes|=t,Mi|=t,i)}function zp(t,i,r,o,d){var m=Q.p;Q.p=m!==0&&8>m?m:8;var y=H.T,w={};H.T=w,Gu(t,!1,i,r);try{var A=d(),j=H.S;if(j!==null&&j(w,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=Ax(A,o);hr(t,i,V,an(t))}else hr(t,i,o,an(t))}catch(Y){hr(t,i,{then:function(){},status:"rejected",reason:Y},an())}finally{Q.p=m,y!==null&&w.types!==null&&(y.types=w.types),H.T=y}}function Nx(){}function Uu(t,i,r,o){if(t.tag!==5)throw Error(a(476));var d=Bp(t).queue;zp(t,d,i,ie,r===null?Nx:function(){return Lp(t),r(o)})}function Bp(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:ie},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Lp(t){var i=Bp(t);i.next===null&&(i=t.alternate.memoizedState),hr(t,i.next.queue,{},an())}function Vu(){return Et(Or)}function _p(){return rt().memoizedState}function Hp(){return rt().memoizedState}function Dx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=an();t=Si(r);var o=wi(i,t,r);o!==null&&(Ft(o,i,r),or(o,i,r)),i={cache:gu()},t.payload=i;return}i=i.return}}function jx(t,i,r){var o=an();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Up(i,r):(r=au(t,i,r,o),r!==null&&(Ft(r,t,o),Vp(r,i,o)))}function qp(t,i,r){var o=an();hr(t,i,r,o)}function hr(t,i,r,o){var d={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Up(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,w=m(y,r);if(d.hasEagerState=!0,d.eagerState=w,Jt(w,y))return Cl(t,i,d,0),Ye===null&&Rl(),!1}catch{}if(r=au(t,i,d,o),r!==null)return Ft(r,t,o),Vp(r,i,o),!0}return!1}function Gu(t,i,r,o){if(o={lane:2,revertLane:Sf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(i)throw Error(a(479))}else i=au(t,r,o,2),i!==null&&Ft(i,t,2)}function Fl(t){var i=t.alternate;return t===me||i!==null&&i===me}function Up(t,i){aa=Gl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Vp(t,i,r){if((r&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Wh(t,r)}}var mr={readContext:Et,use:Kl,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};mr.useEffectEvent=nt;var Gp={readContext:Et,use:Kl,useCallback:function(t,i){return qt().memoizedState=[t,i===void 0?null:i],t},useContext:Et,useEffect:Ap,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Xl(4194308,4,Cp.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Xl(4194308,4,t,i)},useInsertionEffect:function(t,i){Xl(4,2,t,i)},useMemo:function(t,i){var r=qt();i=i===void 0?null:i;var o=t();if(fs){tt(!0);try{t()}finally{tt(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=qt();if(r!==void 0){var d=r(i);if(fs){tt(!0);try{r(i)}finally{tt(!1)}}}else d=i;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=jx.bind(null,me,t),[o.memoizedState,t]},useRef:function(t){var i=qt();return t={current:t},i.memoizedState=t},useState:function(t){t=Bu(t);var i=t.queue,r=qp.bind(null,me,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Hu,useDeferredValue:function(t,i){var r=qt();return qu(r,t,i)},useTransition:function(){var t=Bu(!1);return t=zp.bind(null,me,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=me,d=qt();if(Te){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ye===null)throw Error(a(349));(we&127)!==0||cp(o,i,r)}d.memoizedState=r;var m={value:r,getSnapshot:i};return d.queue=m,Ap(fp.bind(null,o,m,t),[t]),o.flags|=2048,la(9,{destroy:void 0},up.bind(null,o,m,r,i),null),r},useId:function(){var t=qt(),i=Ye.identifierPrefix;if(Te){var r=Cn,o=Rn;r=(o&~(1<<32-vt(o)-1)).toString(32)+r,i="_"+i+"R_"+r,r=$l++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Ex++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Vu,useFormState:xp,useActionState:xp,useOptimistic:function(t){var i=qt();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Gu.bind(null,me,!0,r),r.dispatch=i,[t,i]},useMemoCache:Du,useCacheRefresh:function(){return qt().memoizedState=Dx.bind(null,me)},useEffectEvent:function(t){var i=qt(),r={impl:t};return i.memoizedState=r,function(){if((ze&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},$u={readContext:Et,use:Kl,useCallback:Np,useContext:Et,useEffect:_u,useImperativeHandle:Op,useInsertionEffect:Mp,useLayoutEffect:Rp,useMemo:Dp,useReducer:Wl,useRef:Tp,useState:function(){return Wl(Xn)},useDebugValue:Hu,useDeferredValue:function(t,i){var r=rt();return jp(r,qe.memoizedState,t,i)},useTransition:function(){var t=Wl(Xn)[0],i=rt().memoizedState;return[typeof t=="boolean"?t:dr(t),i]},useSyncExternalStore:op,useId:_p,useHostTransitionStatus:Vu,useFormState:Sp,useActionState:Sp,useOptimistic:function(t,i){var r=rt();return mp(r,qe,t,i)},useMemoCache:Du,useCacheRefresh:Hp};$u.useEffectEvent=Ep;var $p={readContext:Et,use:Kl,useCallback:Np,useContext:Et,useEffect:_u,useImperativeHandle:Op,useInsertionEffect:Mp,useLayoutEffect:Rp,useMemo:Dp,useReducer:zu,useRef:Tp,useState:function(){return zu(Xn)},useDebugValue:Hu,useDeferredValue:function(t,i){var r=rt();return qe===null?qu(r,t,i):jp(r,qe.memoizedState,t,i)},useTransition:function(){var t=zu(Xn)[0],i=rt().memoizedState;return[typeof t=="boolean"?t:dr(t),i]},useSyncExternalStore:op,useId:_p,useHostTransitionStatus:Vu,useFormState:kp,useActionState:kp,useOptimistic:function(t,i){var r=rt();return qe!==null?mp(r,qe,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Du,useCacheRefresh:Hp};$p.useEffectEvent=Ep;function Yu(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:b({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ku={enqueueSetState:function(t,i,r){t=t._reactInternals;var o=an(),d=Si(o);d.payload=i,r!=null&&(d.callback=r),i=wi(t,d,o),i!==null&&(Ft(i,t,o),or(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=an(),d=Si(o);d.tag=1,d.payload=i,r!=null&&(d.callback=r),i=wi(t,d,o),i!==null&&(Ft(i,t,o),or(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=an(),o=Si(r);o.tag=2,i!=null&&(o.callback=i),i=wi(t,o,r),i!==null&&(Ft(i,t,r),or(i,t,r))}};function Yp(t,i,r,o,d,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,y):i.prototype&&i.prototype.isPureReactComponent?!er(r,o)||!er(d,m):!0}function Kp(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&Ku.enqueueReplaceState(i,i.state,null)}function ds(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=b({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Wp(t){Ml(t)}function Xp(t){console.error(t)}function Qp(t){Ml(t)}function Zl(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Fp(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wu(t,i,r){return r=Si(r),r.tag=3,r.payload={element:null},r.callback=function(){Zl(t,i)},r}function Zp(t){return t=Si(t),t.tag=3,t}function Pp(t,i,r,o){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;t.payload=function(){return d(m)},t.callback=function(){Fp(i,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Fp(i,r,o),typeof d!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function zx(t,i,r,o,d){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Is(i,r,d,!0),r=en.current,r!==null){switch(r.tag){case 31:case 13:return yn===null?oo():r.alternate===null&&it===0&&(it=3),r.flags&=-257,r.flags|=65536,r.lanes=d,o===_l?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),bf(t,o,d)),!1;case 22:return r.flags|=65536,o===_l?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),bf(t,o,d)),!1}throw Error(a(435,r.tag))}return bf(t,o,d),oo(),!1}if(Te)return i=en.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,o!==fu&&(t=Error(a(422),{cause:o}),ir(hn(t,r)))):(o!==fu&&(i=Error(a(423),{cause:o}),ir(hn(i,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=hn(o,r),d=Wu(t.stateNode,o,d),wu(t,d),it!==4&&(it=2)),!1;var m=Error(a(520),{cause:o});if(m=hn(m,r),wr===null?wr=[m]:wr.push(m),it!==4&&(it=2),i===null)return!0;o=hn(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=Wu(r.stateNode,o,t),wu(r,t),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ri===null||!Ri.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Zp(d),Pp(d,t,r,o),wu(r,d),!1}r=r.return}while(r!==null);return!1}var Xu=Error(a(461)),dt=!1;function Mt(t,i,r,o){i.child=t===null?tp(i,null,r,o):us(i,t.child,r,o)}function Jp(t,i,r,o,d){r=r.render;var m=i.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return rs(i),o=Ru(t,i,r,y,m,d),w=Cu(),t!==null&&!dt?(Ou(t,i,d),Qn(t,i,d)):(Te&&w&&cu(i),i.flags|=1,Mt(t,i,o,d),i.child)}function Ip(t,i,r,o,d){if(t===null){var m=r.type;return typeof m=="function"&&!ru(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,eg(t,i,m,o,d)):(t=Nl(r.type,null,o,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!tf(t,d)){var y=m.memoizedProps;if(r=r.compare,r=r!==null?r:er,r(y,o)&&t.ref===i.ref)return Qn(t,i,d)}return i.flags|=1,t=Gn(m,o),t.ref=i.ref,t.return=i,i.child=t}function eg(t,i,r,o,d){if(t!==null){var m=t.memoizedProps;if(er(m,o)&&t.ref===i.ref)if(dt=!1,i.pendingProps=o=m,tf(t,d))(t.flags&131072)!==0&&(dt=!0);else return i.lanes=t.lanes,Qn(t,i,d)}return Qu(t,i,r,o,d)}function tg(t,i,r,o){var d=o.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,t!==null){for(o=i.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~m}else o=0,i.child=null;return ng(t,i,m,r,o)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(i,m!==null?m.cachePool:null),m!==null?sp(i,m):Tu(),ap(i);else return o=i.lanes=536870912,ng(t,i,m!==null?m.baseLanes|r:r,r,o)}else m!==null?(Bl(i,m.cachePool),sp(i,m),Ti(),i.memoizedState=null):(t!==null&&Bl(i,null),Tu(),Ti());return Mt(t,i,d,r),i.child}function pr(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ng(t,i,r,o,d){var m=bu();return m=m===null?null:{parent:ut._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},t!==null&&Bl(i,null),Tu(),ap(i),t!==null&&Is(t,i,o,!0),i.childLanes=d,null}function Pl(t,i){return i=Il({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ig(t,i,r){return us(i,t.child,null,r),t=Pl(i,i.pendingProps),t.flags|=2,tn(i),i.memoizedState=null,t}function Bx(t,i,r){var o=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Te){if(o.mode==="hidden")return t=Pl(i,o),i.lanes=536870912,pr(null,t);if(Eu(i),(t=Ze)?(t=py(t,gn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:gi!==null?{id:Rn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},r=Um(t),r.return=i,i.child=r,At=i,Ze=null)):t=null,t===null)throw bi(i);return i.lanes=536870912,null}return Pl(i,o)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Eu(i),d)if(i.flags&256)i.flags&=-257,i=ig(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(dt||Is(t,i,r,!1),d=(r&t.childLanes)!==0,dt||d){if(o=Ye,o!==null&&(y=Xh(o,r),y!==0&&y!==m.retryLane))throw m.retryLane=y,ns(t,y),Ft(o,t,y),Xu;oo(),i=ig(t,i,r)}else t=m.treeContext,Ze=bn(y.nextSibling),At=i,Te=!0,yi=null,gn=!1,t!==null&&$m(i,t),i=Pl(i,o),i.flags|=4096;return i}return t=Gn(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Jl(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Qu(t,i,r,o,d){return rs(i),r=Ru(t,i,r,o,void 0,d),o=Cu(),t!==null&&!dt?(Ou(t,i,d),Qn(t,i,d)):(Te&&o&&cu(i),i.flags|=1,Mt(t,i,r,d),i.child)}function sg(t,i,r,o,d,m){return rs(i),i.updateQueue=null,r=lp(i,o,r,d),rp(t),o=Cu(),t!==null&&!dt?(Ou(t,i,m),Qn(t,i,m)):(Te&&o&&cu(i),i.flags|=1,Mt(t,i,r,m),i.child)}function ag(t,i,r,o,d){if(rs(i),i.stateNode===null){var m=Fs,y=r.contextType;typeof y=="object"&&y!==null&&(m=Et(y)),m=new r(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ku,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},xu(i),y=r.contextType,m.context=typeof y=="object"&&y!==null?Et(y):Fs,m.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Yu(i,r,y,o),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Ku.enqueueReplaceState(m,m.state,null),ur(i,o,m,d),cr(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){m=i.stateNode;var w=i.memoizedProps,A=ds(r,w);m.props=A;var j=m.context,V=r.contextType;y=Fs,typeof V=="object"&&V!==null&&(y=Et(V));var Y=r.getDerivedStateFromProps;V=typeof Y=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,V||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||j!==y)&&Kp(i,m,o,y),xi=!1;var z=i.memoizedState;m.state=z,ur(i,o,m,d),cr(),j=i.memoizedState,w||z!==j||xi?(typeof Y=="function"&&(Yu(i,r,Y,o),j=i.memoizedState),(A=xi||Yp(i,r,A,o,z,j,y))?(V||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=j),m.props=o,m.state=j,m.context=y,o=A):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Su(t,i),y=i.memoizedProps,V=ds(r,y),m.props=V,Y=i.pendingProps,z=m.context,j=r.contextType,A=Fs,typeof j=="object"&&j!==null&&(A=Et(j)),w=r.getDerivedStateFromProps,(j=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Y||z!==A)&&Kp(i,m,o,A),xi=!1,z=i.memoizedState,m.state=z,ur(i,o,m,d),cr();var L=i.memoizedState;y!==Y||z!==L||xi||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof w=="function"&&(Yu(i,r,w,o),L=i.memoizedState),(V=xi||Yp(i,r,V,o,z,L,A)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,L,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,L,A)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=L),m.props=o,m.state=L,m.context=A,o=V):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),o=!1)}return m=o,Jl(t,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&o?(i.child=us(i,t.child,null,d),i.child=us(i,null,r,d)):Mt(t,i,r,d),i.memoizedState=m.state,t=i.child):t=Qn(t,i,d),t}function rg(t,i,r,o){return ss(),i.flags|=256,Mt(t,i,r,o),i.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:Fm()}}function Pu(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=sn),t}function lg(t,i,r){var o=i.pendingProps,d=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),y&&(d=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Te){if(d?ki(i):Ti(),(t=Ze)?(t=py(t,gn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:gi!==null?{id:Rn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},r=Um(t),r.return=i,i.child=r,At=i,Ze=null)):t=null,t===null)throw bi(i);return zf(t)?i.lanes=32:i.lanes=536870912,null}var w=o.children;return o=o.fallback,d?(Ti(),d=i.mode,w=Il({mode:"hidden",children:w},d),o=is(o,d,r,null),w.return=i,o.return=i,w.sibling=o,i.child=w,o=i.child,o.memoizedState=Zu(r),o.childLanes=Pu(t,y,r),i.memoizedState=Fu,pr(null,o)):(ki(i),Ju(i,w))}var A=t.memoizedState;if(A!==null&&(w=A.dehydrated,w!==null)){if(m)i.flags&256?(ki(i),i.flags&=-257,i=Iu(t,i,r)):i.memoizedState!==null?(Ti(),i.child=t.child,i.flags|=128,i=null):(Ti(),w=o.fallback,d=i.mode,o=Il({mode:"visible",children:o.children},d),w=is(w,d,r,null),w.flags|=2,o.return=i,w.return=i,o.sibling=w,i.child=o,us(i,t.child,null,r),o=i.child,o.memoizedState=Zu(r),o.childLanes=Pu(t,y,r),i.memoizedState=Fu,i=pr(null,o));else if(ki(i),zf(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var j=y.dgst;y=j,o=Error(a(419)),o.stack="",o.digest=y,ir({value:o,source:null,stack:null}),i=Iu(t,i,r)}else if(dt||Is(t,i,r,!1),y=(r&t.childLanes)!==0,dt||y){if(y=Ye,y!==null&&(o=Xh(y,r),o!==0&&o!==A.retryLane))throw A.retryLane=o,ns(t,o),Ft(y,t,o),Xu;jf(w)||oo(),i=Iu(t,i,r)}else jf(w)?(i.flags|=192,i.child=t.child,i=null):(t=A.treeContext,Ze=bn(w.nextSibling),At=i,Te=!0,yi=null,gn=!1,t!==null&&$m(i,t),i=Ju(i,o.children),i.flags|=4096);return i}return d?(Ti(),w=o.fallback,d=i.mode,A=t.child,j=A.sibling,o=Gn(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,j!==null?w=Gn(j,w):(w=is(w,d,r,null),w.flags|=2),w.return=i,o.return=i,o.sibling=w,i.child=o,pr(null,o),o=i.child,w=t.child.memoizedState,w===null?w=Zu(r):(d=w.cachePool,d!==null?(A=ut._currentValue,d=d.parent!==A?{parent:A,pool:A}:d):d=Fm(),w={baseLanes:w.baseLanes|r,cachePool:d}),o.memoizedState=w,o.childLanes=Pu(t,y,r),i.memoizedState=Fu,pr(t.child,o)):(ki(i),r=t.child,t=r.sibling,r=Gn(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=r,i.memoizedState=null,r)}function Ju(t,i){return i=Il({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Il(t,i){return t=It(22,t,null,i),t.lanes=0,t}function Iu(t,i,r){return us(i,t.child,null,r),t=Ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function og(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),mu(t.return,i,r)}function ef(t,i,r,o,d,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:d,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=d,y.treeForkCount=m)}function cg(t,i,r){var o=i.pendingProps,d=o.revealOrder,m=o.tail;o=o.children;var y=at.current,w=(y&2)!==0;if(w?(y=y&1|2,i.flags|=128):y&=1,F(at,y),Mt(t,i,o,r),o=Te?nr:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,r,i);else if(t.tag===19)og(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=i.child,d=null;r!==null;)t=r.alternate,t!==null&&Vl(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=i.child,i.child=null):(d=r.sibling,r.sibling=null),ef(i,!1,d,r,m,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Vl(t)===null){i.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}ef(i,!0,r,null,m,o);break;case"together":ef(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Qn(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Mi|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Is(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Gn(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Gn(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function tf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function Lx(t,i,r){switch(i.tag){case 3:Ge(i,i.stateNode.containerInfo),vi(i,ut,t.memoizedState.cache),ss();break;case 27:case 5:Lt(i);break;case 4:Ge(i,i.stateNode.containerInfo);break;case 10:vi(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Eu(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ki(i),i.flags|=128,null):(r&i.child.childLanes)!==0?lg(t,i,r):(ki(i),t=Qn(t,i,r),t!==null?t.sibling:null);ki(i);break;case 19:var d=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Is(t,i,r,!1),o=(r&i.childLanes)!==0),d){if(o)return cg(t,i,r);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),F(at,at.current),o)break;return null;case 22:return i.lanes=0,tg(t,i,r,i.pendingProps);case 24:vi(i,ut,t.memoizedState.cache)}return Qn(t,i,r)}function ug(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)dt=!0;else{if(!tf(t,r)&&(i.flags&128)===0)return dt=!1,Lx(t,i,r);dt=(t.flags&131072)!==0}else dt=!1,Te&&(i.flags&1048576)!==0&&Gm(i,nr,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=os(i.elementType),i.type=t,typeof t=="function")ru(t)?(o=ds(t,o),i.tag=1,i=ag(null,i,t,o,r)):(i.tag=0,i=Qu(null,i,t,o,r));else{if(t!=null){var d=t.$$typeof;if(d===$){i.tag=11,i=Jp(null,i,t,o,r);break e}else if(d===X){i.tag=14,i=Ip(null,i,t,o,r);break e}}throw i=He(t)||t,Error(a(306,i,""))}}return i;case 0:return Qu(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,d=ds(o,i.pendingProps),ag(t,i,o,d,r);case 3:e:{if(Ge(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;d=m.element,Su(t,i),ur(i,o,null,r);var y=i.memoizedState;if(o=y.cache,vi(i,ut,o),o!==m.cache&&pu(i,[ut],r,!0),cr(),o=y.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=rg(t,i,o,r);break e}else if(o!==d){d=hn(Error(a(424)),i),ir(d),i=rg(t,i,o,r);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=bn(t.firstChild),At=i,Te=!0,yi=null,gn=!0,r=tp(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ss(),o===d){i=Qn(t,i,r);break e}Mt(t,i,o,r)}i=i.child}return i;case 26:return Jl(t,i),t===null?(r=Sy(i.type,null,i.pendingProps,null))?i.memoizedState=r:Te||(r=i.type,t=i.pendingProps,o=go(le.current).createElement(r),o[Tt]=i,o[$t]=t,Rt(o,r,t),xt(o),i.stateNode=o):i.memoizedState=Sy(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Lt(i),t===null&&Te&&(o=i.stateNode=by(i.type,i.pendingProps,le.current),At=i,gn=!0,d=Ze,Di(i.type)?(Bf=d,Ze=bn(o.firstChild)):Ze=d),Mt(t,i,i.pendingProps.children,r),Jl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Te&&((d=o=Ze)&&(o=d2(o,i.type,i.pendingProps,gn),o!==null?(i.stateNode=o,At=i,Ze=bn(o.firstChild),gn=!1,d=!0):d=!1),d||bi(i)),Lt(i),d=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,o=m.children,Of(d,m)?o=null:y!==null&&Of(d,y)&&(i.flags|=32),i.memoizedState!==null&&(d=Ru(t,i,Mx,null,null,r),Or._currentValue=d),Jl(t,i),Mt(t,i,o,r),i.child;case 6:return t===null&&Te&&((t=r=Ze)&&(r=h2(r,i.pendingProps,gn),r!==null?(i.stateNode=r,At=i,Ze=null,t=!0):t=!1),t||bi(i)),null;case 13:return lg(t,i,r);case 4:return Ge(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=us(i,null,o,r):Mt(t,i,o,r),i.child;case 11:return Jp(t,i,i.type,i.pendingProps,r);case 7:return Mt(t,i,i.pendingProps,r),i.child;case 8:return Mt(t,i,i.pendingProps.children,r),i.child;case 12:return Mt(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,vi(i,i.type,o.value),Mt(t,i,o.children,r),i.child;case 9:return d=i.type._context,o=i.pendingProps.children,rs(i),d=Et(d),o=o(d),i.flags|=1,Mt(t,i,o,r),i.child;case 14:return Ip(t,i,i.type,i.pendingProps,r);case 15:return eg(t,i,i.type,i.pendingProps,r);case 19:return cg(t,i,r);case 31:return Bx(t,i,r);case 22:return tg(t,i,r,i.pendingProps);case 24:return rs(i),o=Et(ut),t===null?(d=bu(),d===null&&(d=Ye,m=gu(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),i.memoizedState={parent:o,cache:d},xu(i),vi(i,ut,d)):((t.lanes&r)!==0&&(Su(t,i),ur(i,null,null,r),cr()),d=t.memoizedState,m=i.memoizedState,d.parent!==o?(d={parent:o,cache:o},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),vi(i,ut,o)):(o=m.cache,vi(i,ut,o),o!==d.cache&&pu(i,[ut],r,!0))),Mt(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Fn(t){t.flags|=4}function nf(t,i,r,o,d){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(_g())t.flags|=8192;else throw cs=_l,vu}else t.flags&=-16777217}function fg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ey(i))if(_g())t.flags|=8192;else throw cs=_l,vu}function eo(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Yh():536870912,t.lanes|=i,fa|=i)}function gr(t,i){if(!Te)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Pe(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function _x(t,i,r){var o=i.pendingProps;switch(uu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(i),null;case 1:return Pe(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Kn(ut),$e(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(i)?Fn(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,du())),Pe(i),null;case 26:var d=i.type,m=i.memoizedState;return t===null?(Fn(i),m!==null?(Pe(i),fg(i,m)):(Pe(i),nf(i,d,null,o,r))):m?m!==t.memoizedState?(Fn(i),Pe(i),fg(i,m)):(Pe(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&Fn(i),Pe(i),nf(i,d,t,o,r)),null;case 27:if(Gt(i),r=le.current,d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Fn(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Pe(i),null}t=Z.current,Js(i)?Ym(i):(t=by(d,o,r),i.stateNode=t,Fn(i))}return Pe(i),null;case 5:if(Gt(i),d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Fn(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Pe(i),null}if(m=Z.current,Js(i))Ym(i);else{var y=go(le.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?m.multiple=!0:o.size&&(m.size=o.size);break;default:m=typeof o.is=="string"?y.createElement(d,{is:o.is}):y.createElement(d)}}m[Tt]=i,m[$t]=o;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Rt(m,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Fn(i)}}return Pe(i),nf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Fn(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=le.current,Js(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,d=At,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[Tt]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||ly(t.nodeValue,r)),t||bi(i,!0)}else t=go(t).createTextNode(o),t[Tt]=i,i.stateNode=t}return Pe(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(o=Js(i),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Tt]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pe(i),t=!1}else r=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(tn(i),i):(tn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Pe(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Js(i),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[Tt]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pe(i),d=!1}else d=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(tn(i),i):(tn(i),null)}return tn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=i.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),m=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==d&&(o.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),eo(i,i.updateQueue),Pe(i),null);case 4:return $e(),t===null&&Af(i.stateNode.containerInfo),Pe(i),null;case 10:return Kn(i.type),Pe(i),null;case 19:if(q(at),o=i.memoizedState,o===null)return Pe(i),null;if(d=(i.flags&128)!==0,m=o.rendering,m===null)if(d)gr(o,!1);else{if(it!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Vl(t),m!==null){for(i.flags|=128,gr(o,!1),t=m.updateQueue,i.updateQueue=t,eo(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)qm(r,t),r=r.sibling;return F(at,at.current&1|2),Te&&$n(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&Ht()>ao&&(i.flags|=128,d=!0,gr(o,!1),i.lanes=4194304)}else{if(!d)if(t=Vl(m),t!==null){if(i.flags|=128,d=!0,t=t.updateQueue,i.updateQueue=t,eo(i,t),gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!m.alternate&&!Te)return Pe(i),null}else 2*Ht()-o.renderingStartTime>ao&&r!==536870912&&(i.flags|=128,d=!0,gr(o,!1),i.lanes=4194304);o.isBackwards?(m.sibling=i.child,i.child=m):(t=o.last,t!==null?t.sibling=m:i.child=m,o.last=m)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ht(),t.sibling=null,r=at.current,F(at,d?r&1|2:r&1),Te&&$n(i,o.treeForkCount),t):(Pe(i),null);case 22:case 23:return tn(i),Au(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Pe(i),i.subtreeFlags&6&&(i.flags|=8192)):Pe(i),r=i.updateQueue,r!==null&&eo(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&q(ls),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Kn(ut),Pe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Hx(t,i){switch(uu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Kn(ut),$e(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Gt(i),null;case 31:if(i.memoizedState!==null){if(tn(i),i.alternate===null)throw Error(a(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(tn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return q(at),null;case 4:return $e(),null;case 10:return Kn(i.type),null;case 22:case 23:return tn(i),Au(),t!==null&&q(ls),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Kn(ut),null;case 25:return null;default:return null}}function dg(t,i){switch(uu(i),i.tag){case 3:Kn(ut),$e();break;case 26:case 27:case 5:Gt(i);break;case 4:$e();break;case 31:i.memoizedState!==null&&tn(i);break;case 13:tn(i);break;case 19:q(at);break;case 10:Kn(i.type);break;case 22:case 23:tn(i),Au(),t!==null&&q(ls);break;case 24:Kn(ut)}}function yr(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var d=o.next;r=d;do{if((r.tag&t)===t){o=void 0;var m=r.create,y=r.inst;o=m(),y.destroy=o}r=r.next}while(r!==d)}}catch(w){_e(i,i.return,w)}}function Ai(t,i,r){try{var o=i.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var m=d.next;o=m;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=i;var A=r,j=w;try{j()}catch(V){_e(d,A,V)}}}o=o.next}while(o!==m)}}catch(V){_e(i,i.return,V)}}function hg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{ip(i,r)}catch(o){_e(t,t.return,o)}}}function mg(t,i,r){r.props=ds(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){_e(t,i,o)}}function br(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(d){_e(t,i,d)}}function On(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(d){_e(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){_e(t,i,d)}else r.current=null}function pg(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(d){_e(t,t.return,d)}}function sf(t,i,r){try{var o=t.stateNode;r2(o,t.type,r,i),o[$t]=i}catch(d){_e(t,t.return,d)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Di(t.type)||t.tag===4}function af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Di(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Un));else if(o!==4&&(o===27&&Di(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(rf(t,i,r),t=t.sibling;t!==null;)rf(t,i,r),t=t.sibling}function to(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&(o===27&&Di(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(to(t,i,r),t=t.sibling;t!==null;)to(t,i,r),t=t.sibling}function yg(t){var i=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Rt(i,o,r),i[Tt]=t,i[$t]=r}catch(m){_e(t,t.return,m)}}var Zn=!1,ht=!1,lf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,St=null;function qx(t,i){if(t=t.containerInfo,Rf=ko,t=Om(t),Ic(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var d=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var y=0,w=-1,A=-1,j=0,V=0,Y=t,z=null;t:for(;;){for(var L;Y!==r||d!==0&&Y.nodeType!==3||(w=y+d),Y!==m||o!==0&&Y.nodeType!==3||(A=y+o),Y.nodeType===3&&(y+=Y.nodeValue.length),(L=Y.firstChild)!==null;)z=Y,Y=L;for(;;){if(Y===t)break t;if(z===r&&++j===d&&(w=y),z===m&&++V===o&&(A=y),(L=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=L}r=w===-1||A===-1?null:{start:w,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cf={focusedElem:t,selectionRange:r},ko=!1,St=i;St!==null;)if(i=St,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,St=t;else for(;St!==null;){switch(i=St,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=i,d=m.memoizedProps,m=m.memoizedState,o=r.stateNode;try{var ee=ds(r.type,d);t=o.getSnapshotBeforeUpdate(ee,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(oe){_e(r,r.return,oe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Df(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,St=t;break}St=i.return}}function vg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Jn(t,r),o&4&&yr(5,r);break;case 1:if(Jn(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(y){_e(r,r.return,y)}else{var d=ds(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){_e(r,r.return,y)}}o&64&&hg(r),o&512&&br(r,r.return);break;case 3:if(Jn(t,r),o&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ip(t,i)}catch(y){_e(r,r.return,y)}}break;case 27:i===null&&o&4&&yg(r);case 26:case 5:Jn(t,r),i===null&&o&4&&pg(r),o&512&&br(r,r.return);break;case 12:Jn(t,r);break;case 31:Jn(t,r),o&4&&wg(t,r);break;case 13:Jn(t,r),o&4&&kg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Qx.bind(null,r),m2(t,r))));break;case 22:if(o=r.memoizedState!==null||Zn,!o){i=i!==null&&i.memoizedState!==null||ht,d=Zn;var m=ht;Zn=o,(ht=i)&&!m?In(t,r,(r.subtreeFlags&8772)!==0):Jn(t,r),Zn=d,ht=m}break;case 30:break;default:Jn(t,r)}}function xg(t){var i=t.alternate;i!==null&&(t.alternate=null,xg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Lc(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Kt=!1;function Pn(t,i,r){for(r=r.child;r!==null;)Sg(t,i,r),r=r.sibling}function Sg(t,i,r){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(hi,r)}catch{}switch(r.tag){case 26:ht||On(r,i),Pn(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ht||On(r,i);var o=Je,d=Kt;Di(r.type)&&(Je=r.stateNode,Kt=!1),Pn(t,i,r),Mr(r.stateNode),Je=o,Kt=d;break;case 5:ht||On(r,i);case 6:if(o=Je,d=Kt,Je=null,Pn(t,i,r),Je=o,Kt=d,Je!==null)if(Kt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(m){_e(r,i,m)}else try{Je.removeChild(r.stateNode)}catch(m){_e(r,i,m)}break;case 18:Je!==null&&(Kt?(t=Je,hy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),va(t)):hy(Je,r.stateNode));break;case 4:o=Je,d=Kt,Je=r.stateNode.containerInfo,Kt=!0,Pn(t,i,r),Je=o,Kt=d;break;case 0:case 11:case 14:case 15:Ai(2,r,i),ht||Ai(4,r,i),Pn(t,i,r);break;case 1:ht||(On(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&mg(r,i,o)),Pn(t,i,r);break;case 21:Pn(t,i,r);break;case 22:ht=(o=ht)||r.memoizedState!==null,Pn(t,i,r),ht=o;break;default:Pn(t,i,r)}}function wg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{va(t)}catch(r){_e(i,i.return,r)}}}function kg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{va(t)}catch(r){_e(i,i.return,r)}}function Ux(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new bg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new bg),i;default:throw Error(a(435,t.tag))}}function no(t,i){var r=Ux(t);i.forEach(function(o){if(!r.has(o)){r.add(o);var d=Fx.bind(null,t,o);o.then(d,d)}})}function Wt(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var d=r[o],m=t,y=i,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Di(w.type)){Je=w.stateNode,Kt=!1;break e}break;case 5:Je=w.stateNode,Kt=!1;break e;case 3:case 4:Je=w.stateNode.containerInfo,Kt=!0;break e}w=w.return}if(Je===null)throw Error(a(160));Sg(m,y,d),Je=null,Kt=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Tg(i,t),i=i.sibling}var wn=null;function Tg(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(i,t),Xt(t),o&4&&(Ai(3,t,t.return),yr(3,t),Ai(5,t,t.return));break;case 1:Wt(i,t),Xt(t),o&512&&(ht||r===null||On(r,r.return)),o&64&&Zn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var d=wn;if(Wt(i,t),Xt(t),o&512&&(ht||r===null||On(r,r.return)),o&4){var m=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Ka]||m[Tt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(o),d.head.insertBefore(m,d.querySelector("head > title"))),Rt(m,o,r),m[Tt]=t,xt(m),o=m;break e;case"link":var y=Ty("link","href",d).get(o+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(m=y[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}m=d.createElement(o),Rt(m,o,r),d.head.appendChild(m);break;case"meta":if(y=Ty("meta","content",d).get(o+(r.content||""))){for(w=0;w<y.length;w++)if(m=y[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}m=d.createElement(o),Rt(m,o,r),d.head.appendChild(m);break;default:throw Error(a(468,o))}m[Tt]=t,xt(m),o=m}t.stateNode=o}else Ay(d,t.type,t.stateNode);else t.stateNode=ky(d,o,t.memoizedProps);else m!==o?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,o===null?Ay(d,t.type,t.stateNode):ky(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&sf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Wt(i,t),Xt(t),o&512&&(ht||r===null||On(r,r.return)),r!==null&&o&4&&sf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Wt(i,t),Xt(t),o&512&&(ht||r===null||On(r,r.return)),t.flags&32){d=t.stateNode;try{Gs(d,"")}catch(ee){_e(t,t.return,ee)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,sf(t,d,r!==null?r.memoizedProps:d)),o&1024&&(lf=!0);break;case 6:if(Wt(i,t),Xt(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ee){_e(t,t.return,ee)}}break;case 3:if(vo=null,d=wn,wn=yo(i.containerInfo),Wt(i,t),wn=d,Xt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(ee){_e(t,t.return,ee)}lf&&(lf=!1,Ag(t));break;case 4:o=wn,wn=yo(t.stateNode.containerInfo),Wt(i,t),Xt(t),wn=o;break;case 12:Wt(i,t),Xt(t);break;case 31:Wt(i,t),Xt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 13:Wt(i,t),Xt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(so=Ht()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 22:d=t.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,j=Zn,V=ht;if(Zn=j||d,ht=V||A,Wt(i,t),ht=V,Zn=j,Xt(t),o&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(r===null||A||Zn||ht||hs(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){A=r=i;try{if(m=A.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=A.stateNode;var Y=A.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ee){_e(A,A.return,ee)}}}else if(i.tag===6){if(r===null){A=i;try{A.stateNode.nodeValue=d?"":A.memoizedProps}catch(ee){_e(A,A.return,ee)}}}else if(i.tag===18){if(r===null){A=i;try{var L=A.stateNode;d?my(L,!0):my(A.stateNode,!1)}catch(ee){_e(A,A.return,ee)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,no(t,r))));break;case 19:Wt(i,t),Xt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 30:break;case 21:break;default:Wt(i,t),Xt(t)}}function Xt(t){var i=t.flags;if(i&2){try{for(var r,o=t.return;o!==null;){if(gg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var d=r.stateNode,m=af(t);to(t,m,d);break;case 5:var y=r.stateNode;r.flags&32&&(Gs(y,""),r.flags&=-33);var w=af(t);to(t,w,y);break;case 3:case 4:var A=r.stateNode.containerInfo,j=af(t);rf(t,j,A);break;default:throw Error(a(161))}}catch(V){_e(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ag(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Jn(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)vg(t,i.alternate,i),i=i.sibling}function hs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ai(4,i,i.return),hs(i);break;case 1:On(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&mg(i,i.return,r),hs(i);break;case 27:Mr(i.stateNode);case 26:case 5:On(i,i.return),hs(i);break;case 22:i.memoizedState===null&&hs(i);break;case 30:hs(i);break;default:hs(i)}t=t.sibling}}function In(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,d=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:In(d,m,r),yr(4,m);break;case 1:if(In(d,m,r),o=m,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){_e(o,o.return,j)}if(o=m,d=o.updateQueue,d!==null){var w=o.stateNode;try{var A=d.shared.hiddenCallbacks;if(A!==null)for(d.shared.hiddenCallbacks=null,d=0;d<A.length;d++)np(A[d],w)}catch(j){_e(o,o.return,j)}}r&&y&64&&hg(m),br(m,m.return);break;case 27:yg(m);case 26:case 5:In(d,m,r),r&&o===null&&y&4&&pg(m),br(m,m.return);break;case 12:In(d,m,r);break;case 31:In(d,m,r),r&&y&4&&wg(d,m);break;case 13:In(d,m,r),r&&y&4&&kg(d,m);break;case 22:m.memoizedState===null&&In(d,m,r),br(m,m.return);break;case 30:break;default:In(d,m,r)}i=i.sibling}}function of(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&sr(r))}function cf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&sr(t))}function kn(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Eg(t,i,r,o),i=i.sibling}function Eg(t,i,r,o){var d=i.flags;switch(i.tag){case 0:case 11:case 15:kn(t,i,r,o),d&2048&&yr(9,i);break;case 1:kn(t,i,r,o);break;case 3:kn(t,i,r,o),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&sr(t)));break;case 12:if(d&2048){kn(t,i,r,o),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,w=m.onPostCommit;typeof w=="function"&&w(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){_e(i,i.return,A)}}else kn(t,i,r,o);break;case 31:kn(t,i,r,o);break;case 13:kn(t,i,r,o);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?kn(t,i,r,o):vr(t,i):m._visibility&2?kn(t,i,r,o):(m._visibility|=2,oa(t,i,r,o,(i.subtreeFlags&10256)!==0||!1)),d&2048&&of(y,i);break;case 24:kn(t,i,r,o),d&2048&&cf(i.alternate,i);break;default:kn(t,i,r,o)}}function oa(t,i,r,o,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,w=r,A=o,j=y.flags;switch(y.tag){case 0:case 11:case 15:oa(m,y,w,A,d),yr(8,y);break;case 23:break;case 22:var V=y.stateNode;y.memoizedState!==null?V._visibility&2?oa(m,y,w,A,d):vr(m,y):(V._visibility|=2,oa(m,y,w,A,d)),d&&j&2048&&of(y.alternate,y);break;case 24:oa(m,y,w,A,d),d&&j&2048&&cf(y.alternate,y);break;default:oa(m,y,w,A,d)}i=i.sibling}}function vr(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,d=o.flags;switch(o.tag){case 22:vr(r,o),d&2048&&of(o.alternate,o);break;case 24:vr(r,o),d&2048&&cf(o.alternate,o);break;default:vr(r,o)}i=i.sibling}}var xr=8192;function ca(t,i,r){if(t.subtreeFlags&xr)for(t=t.child;t!==null;)Mg(t,i,r),t=t.sibling}function Mg(t,i,r){switch(t.tag){case 26:ca(t,i,r),t.flags&xr&&t.memoizedState!==null&&E2(r,wn,t.memoizedState,t.memoizedProps);break;case 5:ca(t,i,r);break;case 3:case 4:var o=wn;wn=yo(t.stateNode.containerInfo),ca(t,i,r),wn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=xr,xr=16777216,ca(t,i,r),xr=o):ca(t,i,r));break;default:ca(t,i,r)}}function Rg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Sr(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];St=o,Og(o,t)}Rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 0:case 11:case 15:Sr(t),t.flags&2048&&Ai(9,t,t.return);break;case 3:Sr(t);break;case 12:Sr(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,io(t)):Sr(t);break;default:Sr(t)}}function io(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];St=o,Og(o,t)}Rg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ai(8,i,i.return),io(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,io(i));break;default:io(i)}t=t.sibling}}function Og(t,i){for(;St!==null;){var r=St;switch(r.tag){case 0:case 11:case 15:Ai(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:sr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,St=o;else e:for(r=t;St!==null;){o=St;var d=o.sibling,m=o.return;if(xg(o),o===r){St=null;break e}if(d!==null){d.return=m,St=d;break e}St=m}}}var Vx={getCacheForType:function(t){var i=Et(ut),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return Et(ut).controller.signal}},Gx=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,xe=null,we=0,Le=0,nn=null,Ei=!1,ua=!1,uf=!1,ei=0,it=0,Mi=0,ms=0,ff=0,sn=0,fa=0,wr=null,Qt=null,df=!1,so=0,Ng=0,ao=1/0,ro=null,Ri=null,yt=0,Ci=null,da=null,ti=0,hf=0,mf=null,Dg=null,kr=0,pf=null;function an(){return(ze&2)!==0&&we!==0?we&-we:H.T!==null?Sf():Qh()}function jg(){if(sn===0)if((we&536870912)===0||Te){var t=ml;ml<<=1,(ml&3932160)===0&&(ml=262144),sn=t}else sn=536870912;return t=en.current,t!==null&&(t.flags|=32),sn}function Ft(t,i,r){(t===Ye&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(ha(t,0),Oi(t,we,sn,!1)),Ya(t,r),((ze&2)===0||t!==Ye)&&(t===Ye&&((ze&2)===0&&(ms|=r),it===4&&Oi(t,we,sn,!1)),Nn(t))}function zg(t,i,r){if((ze&6)!==0)throw Error(a(327));var o=!r&&(i&127)===0&&(i&t.expiredLanes)===0||$a(t,i),d=o?Kx(t,i):yf(t,i,!0),m=o;do{if(d===0){ua&&!o&&Oi(t,i,0,!1);break}else{if(r=t.current.alternate,m&&!$x(r)){d=yf(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var w=t;d=wr;var A=w.current.memoizedState.isDehydrated;if(A&&(ha(w,y).flags|=256),y=yf(w,y,!1),y!==2){if(uf&&!A){w.errorRecoveryDisabledLanes|=m,ms|=m,d=4;break e}m=Qt,Qt=d,m!==null&&(Qt===null?Qt=m:Qt.push.apply(Qt,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){ha(t,0),Oi(t,i,0,!0);break}e:{switch(o=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oi(o,i,sn,!Ei);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=so+300-Ht(),10<d)){if(Oi(o,i,sn,!Ei),gl(o,0,!0)!==0)break e;ti=i,o.timeoutHandle=fy(Bg.bind(null,o,r,Qt,ro,df,i,sn,ms,fa,Ei,m,"Throttled",-0,0),d);break e}Bg(o,r,Qt,ro,df,i,sn,ms,fa,Ei,m,null,-0,0)}}break}while(!0);Nn(t)}function Bg(t,i,r,o,d,m,y,w,A,j,V,Y,z,L){if(t.timeoutHandle=-1,Y=i.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},Mg(i,m,Y);var ee=(m&62914560)===m?so-Ht():(m&4194048)===m?Ng-Ht():0;if(ee=M2(Y,ee),ee!==null){ti=m,t.cancelPendingCommit=ee($g.bind(null,t,i,m,r,o,d,y,w,A,V,Y,null,z,L)),Oi(t,m,y,!j);return}}$g(t,i,m,r,o,d,y,w,A)}function $x(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var d=r[o],m=d.getSnapshot;d=d.value;try{if(!Jt(m(),d))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oi(t,i,r,o){i&=~ff,i&=~ms,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var d=i;0<d;){var m=31-vt(d),y=1<<m;o[m]=-1,d&=~y}r!==0&&Kh(t,r,i)}function lo(){return(ze&6)===0?(Tr(0),!1):!0}function gf(){if(xe!==null){if(Le===0)var t=xe.return;else t=xe,Yn=as=null,Nu(t),ia=null,rr=0,t=xe;for(;t!==null;)dg(t.alternate,t),t=t.return;xe=null}}function ha(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,c2(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ti=0,gf(),Ye=t,xe=r=Gn(t.current,null),we=i,Le=0,nn=null,Ei=!1,ua=$a(t,i),uf=!1,fa=sn=ff=ms=Mi=it=0,Qt=wr=null,df=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var d=31-vt(o),m=1<<d;i|=t[d],o&=~m}return ei=i,Rl(),r}function Lg(t,i){me=null,H.H=mr,i===na||i===Ll?(i=Jm(),Le=3):i===vu?(i=Jm(),Le=4):Le=i===Xu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,nn=i,xe===null&&(it=1,Zl(t,hn(i,t.current)))}function _g(){var t=en.current;return t===null?!0:(we&4194048)===we?yn===null:(we&62914560)===we||(we&536870912)!==0?t===yn:!1}function Hg(){var t=H.H;return H.H=mr,t===null?mr:t}function qg(){var t=H.A;return H.A=Vx,t}function oo(){it=4,Ei||(we&4194048)!==we&&en.current!==null||(ua=!0),(Mi&134217727)===0&&(ms&134217727)===0||Ye===null||Oi(Ye,we,sn,!1)}function yf(t,i,r){var o=ze;ze|=2;var d=Hg(),m=qg();(Ye!==t||we!==i)&&(ro=null,ha(t,i)),i=!1;var y=it;e:do try{if(Le!==0&&xe!==null){var w=xe,A=nn;switch(Le){case 8:gf(),y=6;break e;case 3:case 2:case 9:case 6:en.current===null&&(i=!0);var j=Le;if(Le=0,nn=null,ma(t,w,A,j),r&&ua){y=0;break e}break;default:j=Le,Le=0,nn=null,ma(t,w,A,j)}}Yx(),y=it;break}catch(V){Lg(t,V)}while(!0);return i&&t.shellSuspendCounter++,Yn=as=null,ze=o,H.H=d,H.A=m,xe===null&&(Ye=null,we=0,Rl()),y}function Yx(){for(;xe!==null;)Ug(xe)}function Kx(t,i){var r=ze;ze|=2;var o=Hg(),d=qg();Ye!==t||we!==i?(ro=null,ao=Ht()+500,ha(t,i)):ua=$a(t,i);e:do try{if(Le!==0&&xe!==null){i=xe;var m=nn;t:switch(Le){case 1:Le=0,nn=null,ma(t,i,m,1);break;case 2:case 9:if(Zm(m)){Le=0,nn=null,Vg(i);break}i=function(){Le!==2&&Le!==9||Ye!==t||(Le=7),Nn(t)},m.then(i,i);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Zm(m)?(Le=0,nn=null,Vg(i)):(Le=0,nn=null,ma(t,i,m,7));break;case 5:var y=null;switch(xe.tag){case 26:y=xe.memoizedState;case 5:case 27:var w=xe;if(y?Ey(y):w.stateNode.complete){Le=0,nn=null;var A=w.sibling;if(A!==null)xe=A;else{var j=w.return;j!==null?(xe=j,co(j)):xe=null}break t}}Le=0,nn=null,ma(t,i,m,5);break;case 6:Le=0,nn=null,ma(t,i,m,6);break;case 8:gf(),it=6;break e;default:throw Error(a(462))}}Wx();break}catch(V){Lg(t,V)}while(!0);return Yn=as=null,H.H=o,H.A=d,ze=r,xe!==null?0:(Ye=null,we=0,Rl(),it)}function Wx(){for(;xe!==null&&!Mc();)Ug(xe)}function Ug(t){var i=ug(t.alternate,t,ei);t.memoizedProps=t.pendingProps,i===null?co(t):xe=i}function Vg(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=sg(r,i,i.pendingProps,i.type,void 0,we);break;case 11:i=sg(r,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:Nu(i);default:dg(r,i),i=xe=qm(i,ei),i=ug(r,i,ei)}t.memoizedProps=t.pendingProps,i===null?co(t):xe=i}function ma(t,i,r,o){Yn=as=null,Nu(i),ia=null,rr=0;var d=i.return;try{if(zx(t,d,i,r,we)){it=1,Zl(t,hn(r,t.current)),xe=null;return}}catch(m){if(d!==null)throw xe=d,m;it=1,Zl(t,hn(r,t.current)),xe=null;return}i.flags&32768?(Te||o===1?t=!0:ua||(we&536870912)!==0?t=!1:(Ei=t=!0,(o===2||o===9||o===3||o===6)&&(o=en.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gg(i,t)):co(i)}function co(t){var i=t;do{if((i.flags&32768)!==0){Gg(i,Ei);return}t=i.return;var r=_x(i.alternate,i,ei);if(r!==null){xe=r;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=t}while(i!==null);it===0&&(it=5)}function Gg(t,i){do{var r=Hx(t.alternate,t);if(r!==null){r.flags&=32767,xe=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){xe=t;return}xe=t=r}while(t!==null);it=6,xe=null}function $g(t,i,r,o,d,m,y,w,A){t.cancelPendingCommit=null;do uo();while(yt!==0);if((ze&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=su,A1(t,r,m,y,w,A),t===Ye&&(xe=Ye=null,we=0),da=i,Ci=t,ti=r,hf=m,mf=d,Dg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zx(he,function(){return Qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,d=Q.p,Q.p=2,y=ze,ze|=4;try{qx(t,i,r)}finally{ze=y,Q.p=d,H.T=o}}yt=1,Yg(),Kg(),Wg()}}function Yg(){if(yt===1){yt=0;var t=Ci,i=da,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=ze;ze|=4;try{Tg(i,t);var m=Cf,y=Om(t.containerInfo),w=m.focusedElem,A=m.selectionRange;if(y!==w&&w&&w.ownerDocument&&Cm(w.ownerDocument.documentElement,w)){if(A!==null&&Ic(w)){var j=A.start,V=A.end;if(V===void 0&&(V=j),"selectionStart"in w)w.selectionStart=j,w.selectionEnd=Math.min(V,w.value.length);else{var Y=w.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var L=z.getSelection(),ee=w.textContent.length,oe=Math.min(A.start,ee),Ve=A.end===void 0?oe:Math.min(A.end,ee);!L.extend&&oe>Ve&&(y=Ve,Ve=oe,oe=y);var O=Rm(w,oe),R=Rm(w,Ve);if(O&&R&&(L.rangeCount!==1||L.anchorNode!==O.node||L.anchorOffset!==O.offset||L.focusNode!==R.node||L.focusOffset!==R.offset)){var D=Y.createRange();D.setStart(O.node,O.offset),L.removeAllRanges(),oe>Ve?(L.addRange(D),L.extend(R.node,R.offset)):(D.setEnd(R.node,R.offset),L.addRange(D))}}}}for(Y=[],L=w;L=L.parentNode;)L.nodeType===1&&Y.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var G=Y[w];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ko=!!Rf,Cf=Rf=null}finally{ze=d,Q.p=o,H.T=r}}t.current=i,yt=2}}function Kg(){if(yt===2){yt=0;var t=Ci,i=da,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=ze;ze|=4;try{vg(t,i.alternate,i)}finally{ze=d,Q.p=o,H.T=r}}yt=3}}function Wg(){if(yt===4||yt===3){yt=0,Rc();var t=Ci,i=da,r=ti,o=Dg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yt=5:(yt=0,da=Ci=null,Xg(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ri=null),zc(r),i=i.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(hi,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,d=Q.p,Q.p=2,H.T=null;try{for(var m=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];m(w.value,{componentStack:w.stack})}}finally{H.T=i,Q.p=d}}(ti&3)!==0&&uo(),Nn(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===pf?kr++:(kr=0,pf=t):kr=0,Tr(0)}}function Xg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,sr(i)))}function uo(){return Yg(),Kg(),Wg(),Qg()}function Qg(){if(yt!==5)return!1;var t=Ci,i=hf;hf=0;var r=zc(ti),o=H.T,d=Q.p;try{Q.p=32>r?32:r,H.T=null,r=mf,mf=null;var m=Ci,y=ti;if(yt=0,da=Ci=null,ti=0,(ze&6)!==0)throw Error(a(331));var w=ze;if(ze|=4,Cg(m.current),Eg(m,m.current,y,r),ze=w,Tr(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(hi,m)}catch{}return!0}finally{Q.p=d,H.T=o,Xg(t,i)}}function Fg(t,i,r){i=hn(r,i),i=Wu(t.stateNode,i,2),t=wi(t,i,2),t!==null&&(Ya(t,2),Nn(t))}function _e(t,i,r){if(t.tag===3)Fg(t,t,r);else for(;i!==null;){if(i.tag===3){Fg(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ri===null||!Ri.has(o))){t=hn(r,t),r=Zp(2),o=wi(i,r,2),o!==null&&(Pp(r,o,i,t),Ya(o,2),Nn(o));break}}i=i.return}}function bf(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Gx;var d=new Set;o.set(i,d)}else d=o.get(i),d===void 0&&(d=new Set,o.set(i,d));d.has(r)||(uf=!0,d.add(r),t=Xx.bind(null,t,i,r),i.then(t,t))}function Xx(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Ye===t&&(we&r)===r&&(it===4||it===3&&(we&62914560)===we&&300>Ht()-so?(ze&2)===0&&ha(t,0):ff|=r,fa===we&&(fa=0)),Nn(t)}function Zg(t,i){i===0&&(i=Yh()),t=ns(t,i),t!==null&&(Ya(t,i),Nn(t))}function Qx(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Zg(t,r)}function Fx(t,i){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Zg(t,r)}function Zx(t,i){return Ua(t,i)}var fo=null,pa=null,vf=!1,ho=!1,xf=!1,Ni=0;function Nn(t){t!==pa&&t.next===null&&(pa===null?fo=pa=t:pa=pa.next=t),ho=!0,vf||(vf=!0,Jx())}function Tr(t,i){if(!xf&&ho){xf=!0;do for(var r=!1,o=fo;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var m=0;else{var y=o.suspendedLanes,w=o.pingedLanes;m=(1<<31-vt(42|t)+1)-1,m&=d&~(y&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,ey(o,m))}else m=we,m=gl(o,o===Ye?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||$a(o,m)||(r=!0,ey(o,m));o=o.next}while(r);xf=!1}}function Px(){Pg()}function Pg(){ho=vf=!1;var t=0;Ni!==0&&o2()&&(t=Ni);for(var i=Ht(),r=null,o=fo;o!==null;){var d=o.next,m=Jg(o,i);m===0?(o.next=null,r===null?fo=d:r.next=d,d===null&&(pa=r)):(r=o,(t!==0||(m&3)!==0)&&(ho=!0)),o=d}yt!==0&&yt!==5||Tr(t),Ni!==0&&(Ni=0)}function Jg(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-vt(m),w=1<<y,A=d[y];A===-1?((w&r)===0||(w&o)!==0)&&(d[y]=T1(w,i)):A<=i&&(t.expiredLanes|=w),m&=~w}if(i=Ye,r=we,r=gl(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===i&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Va(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||$a(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&Va(o),zc(r)){case 2:case 8:r=dl;break;case 32:r=he;break;case 268435456:r=gt;break;default:r=he}return o=Ig.bind(null,t),r=Ua(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&Va(o),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,i){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(uo()&&t.callbackNode!==r)return null;var o=we;return o=gl(t,t===Ye?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(zg(t,o,i),Jg(t,Ht()),t.callbackNode!=null&&t.callbackNode===r?Ig.bind(null,t):null)}function ey(t,i){if(uo())return null;zg(t,i,!0)}function Jx(){u2(function(){(ze&6)!==0?Ua(fl,Px):Pg()})}function Sf(){if(Ni===0){var t=ea;t===0&&(t=Bs,Bs<<=1,(Bs&261888)===0&&(Bs=256)),Ni=t}return Ni}function ty(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(""+t)}function ny(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Ix(t,i,r,o,d){if(i==="submit"&&r&&r.stateNode===d){var m=ty((d[$t]||null).action),y=o.submitter;y&&(i=(i=y[$t]||null)?ty(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var w=new Tl("action","action",null,o,d);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ni!==0){var A=y?ny(d,y):new FormData(d);Uu(r,{pending:!0,data:A,method:d.method,action:m},null,A)}}else typeof m=="function"&&(w.preventDefault(),A=y?ny(d,y):new FormData(d),Uu(r,{pending:!0,data:A,method:d.method,action:m},m,A))},currentTarget:d}]})}}for(var wf=0;wf<iu.length;wf++){var kf=iu[wf],e2=kf.toLowerCase(),t2=kf[0].toUpperCase()+kf.slice(1);Sn(e2,"on"+t2)}Sn(jm,"onAnimationEnd"),Sn(zm,"onAnimationIteration"),Sn(Bm,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(yx,"onTransitionRun"),Sn(bx,"onTransitionStart"),Sn(vx,"onTransitionCancel"),Sn(Lm,"onTransitionEnd"),Us("onMouseEnter",["mouseout","mouseover"]),Us("onMouseLeave",["mouseout","mouseover"]),Us("onPointerEnter",["pointerout","pointerover"]),Us("onPointerLeave",["pointerout","pointerover"]),Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ar));function iy(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],d=o.event;o=o.listeners;e:{var m=void 0;if(i)for(var y=o.length-1;0<=y;y--){var w=o[y],A=w.instance,j=w.currentTarget;if(w=w.listener,A!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(V){Ml(V)}d.currentTarget=null,m=A}else for(y=0;y<o.length;y++){if(w=o[y],A=w.instance,j=w.currentTarget,w=w.listener,A!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(V){Ml(V)}d.currentTarget=null,m=A}}}}function Se(t,i){var r=i[Bc];r===void 0&&(r=i[Bc]=new Set);var o=t+"__bubble";r.has(o)||(sy(i,t,2,!1),r.add(o))}function Tf(t,i,r){var o=0;i&&(o|=4),sy(r,t,o,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[mo]){t[mo]=!0,Ph.forEach(function(r){r!=="selectionchange"&&(n2.has(r)||Tf(r,!1,t),Tf(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[mo]||(i[mo]=!0,Tf("selectionchange",!1,i))}}function sy(t,i,r,o){switch(jy(i)){case 2:var d=O2;break;case 8:d=N2;break;default:d=Uf}r=d.bind(null,i,r,t),d=void 0,!Yc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(i,r,{capture:!0,passive:d}):t.addEventListener(i,r,!0):d!==void 0?t.addEventListener(i,r,{passive:d}):t.addEventListener(i,r,!1)}function Ef(t,i,r,o,d){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=o.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=_s(w),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){o=m=y;continue e}w=w.parentNode}}o=o.return}cm(function(){var j=m,V=Gc(r),Y=[];e:{var z=_m.get(t);if(z!==void 0){var L=Tl,ee=t;switch(t){case"keypress":if(wl(r)===0)break e;case"keydown":case"keyup":L=F1;break;case"focusin":ee="focus",L=Qc;break;case"focusout":ee="blur",L=Qc;break;case"beforeblur":case"afterblur":L=Qc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=J1;break;case jm:case zm:case Bm:L=U1;break;case Lm:L=ex;break;case"scroll":case"scrollend":L=B1;break;case"wheel":L=nx;break;case"copy":case"cut":case"paste":L=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=mm;break;case"toggle":case"beforetoggle":L=sx}var oe=(i&4)!==0,Ve=!oe&&(t==="scroll"||t==="scrollend"),O=oe?z!==null?z+"Capture":null:z;oe=[];for(var R=j,D;R!==null;){var G=R;if(D=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||D===null||O===null||(G=Xa(R,O),G!=null&&oe.push(Er(R,G,D))),Ve)break;R=R.return}0<oe.length&&(z=new L(z,ee,null,r,V),Y.push({event:z,listeners:oe}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",z&&r!==Vc&&(ee=r.relatedTarget||r.fromElement)&&(_s(ee)||ee[Ls]))break e;if((L||z)&&(z=V.window===V?V:(z=V.ownerDocument)?z.defaultView||z.parentWindow:window,L?(ee=r.relatedTarget||r.toElement,L=j,ee=ee?_s(ee):null,ee!==null&&(Ve=c(ee),oe=ee.tag,ee!==Ve||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(L=null,ee=j),L!==ee)){if(oe=dm,G="onMouseLeave",O="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(oe=mm,G="onPointerLeave",O="onPointerEnter",R="pointer"),Ve=L==null?z:Wa(L),D=ee==null?z:Wa(ee),z=new oe(G,R+"leave",L,r,V),z.target=Ve,z.relatedTarget=D,G=null,_s(V)===j&&(oe=new oe(O,R+"enter",ee,r,V),oe.target=D,oe.relatedTarget=Ve,G=oe),Ve=G,L&&ee)t:{for(oe=i2,O=L,R=ee,D=0,G=O;G;G=oe(G))D++;G=0;for(var se=R;se;se=oe(se))G++;for(;0<D-G;)O=oe(O),D--;for(;0<G-D;)R=oe(R),G--;for(;D--;){if(O===R||R!==null&&O===R.alternate){oe=O;break t}O=oe(O),R=oe(R)}oe=null}else oe=null;L!==null&&ay(Y,z,L,oe,!1),ee!==null&&Ve!==null&&ay(Y,Ve,ee,oe,!0)}}e:{if(z=j?Wa(j):window,L=z.nodeName&&z.nodeName.toLowerCase(),L==="select"||L==="input"&&z.type==="file")var Oe=wm;else if(xm(z))if(km)Oe=mx;else{Oe=dx;var ne=fx}else L=z.nodeName,!L||L.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&Uc(j.elementType)&&(Oe=wm):Oe=hx;if(Oe&&(Oe=Oe(t,j))){Sm(Y,Oe,r,V);break e}ne&&ne(t,z,j),t==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&qc(z,"number",z.value)}switch(ne=j?Wa(j):window,t){case"focusin":(xm(ne)||ne.contentEditable==="true")&&(Ws=ne,eu=j,tr=null);break;case"focusout":tr=eu=Ws=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Nm(Y,r,V);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Nm(Y,r,V)}var ge;if(Zc)e:{switch(t){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ks?bm(t,r)&&(ke="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(ke="onCompositionStart");ke&&(pm&&r.locale!=="ko"&&(Ks||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ks&&(ge=um()):(pi=V,Kc="value"in pi?pi.value:pi.textContent,Ks=!0)),ne=po(j,ke),0<ne.length&&(ke=new hm(ke,t,null,r,V),Y.push({event:ke,listeners:ne}),ge?ke.data=ge:(ge=vm(r),ge!==null&&(ke.data=ge)))),(ge=rx?lx(t,r):ox(t,r))&&(ke=po(j,"onBeforeInput"),0<ke.length&&(ne=new hm("onBeforeInput","beforeinput",null,r,V),Y.push({event:ne,listeners:ke}),ne.data=ge)),Ix(Y,t,j,r,V)}iy(Y,i)})}function Er(t,i,r){return{instance:t,listener:i,currentTarget:r}}function po(t,i){for(var r=i+"Capture",o=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Xa(t,r),d!=null&&o.unshift(Er(t,d,m)),d=Xa(t,i),d!=null&&o.push(Er(t,d,m))),t.tag===3)return o;t=t.return}return[]}function i2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ay(t,i,r,o,d){for(var m=i._reactName,y=[];r!==null&&r!==o;){var w=r,A=w.alternate,j=w.stateNode;if(w=w.tag,A!==null&&A===o)break;w!==5&&w!==26&&w!==27||j===null||(A=j,d?(j=Xa(r,m),j!=null&&y.unshift(Er(r,j,A))):d||(j=Xa(r,m),j!=null&&y.push(Er(r,j,A)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var s2=/\r\n?/g,a2=/\u0000|\uFFFD/g;function ry(t){return(typeof t=="string"?t:""+t).replace(s2,`
`).replace(a2,"")}function ly(t,i){return i=ry(i),ry(t)===i}function Ue(t,i,r,o,d,m){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Gs(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Gs(t,""+o);break;case"className":bl(t,"class",o);break;case"tabIndex":bl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,r,o);break;case"style":lm(t,o,m);break;case"data":if(i!=="object"){bl(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=xl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ue(t,i,"name",d.name,d,null),Ue(t,i,"formEncType",d.formEncType,d,null),Ue(t,i,"formMethod",d.formMethod,d,null),Ue(t,i,"formTarget",d.formTarget,d,null)):(Ue(t,i,"encType",d.encType,d,null),Ue(t,i,"method",d.method,d,null),Ue(t,i,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=xl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Un);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Se("beforetoggle",t),Se("toggle",t),yl(t,"popover",o);break;case"xlinkActuate":qn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":yl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=j1.get(r)||r,yl(t,r,o))}}function Mf(t,i,r,o,d,m){switch(r){case"style":lm(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gs(t,o):(typeof o=="number"||typeof o=="bigint")&&Gs(t,""+o);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),i=r.slice(2,d?r.length-7:void 0),m=t[$t]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof o=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,d);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):yl(t,r,o)}}}function Rt(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var o=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var y=r[m];if(y!=null)switch(m){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ue(t,i,m,y,r,null)}}d&&Ue(t,i,"srcSet",r.srcSet,r,null),o&&Ue(t,i,"src",r.src,r,null);return;case"input":Se("invalid",t);var w=m=y=d=null,A=null,j=null;for(o in r)if(r.hasOwnProperty(o)){var V=r[o];if(V!=null)switch(o){case"name":d=V;break;case"type":y=V;break;case"checked":A=V;break;case"defaultChecked":j=V;break;case"value":m=V;break;case"defaultValue":w=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,i));break;default:Ue(t,i,o,V,r,null)}}im(t,m,w,A,j,y,d,!1);return;case"select":Se("invalid",t),o=y=m=null;for(d in r)if(r.hasOwnProperty(d)&&(w=r[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:Ue(t,i,d,w,r,null)}i=m,r=y,t.multiple=!!o,i!=null?Vs(t,!!o,i,!1):r!=null&&Vs(t,!!o,r,!0);return;case"textarea":Se("invalid",t),m=d=o=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ue(t,i,y,w,r,null)}am(t,o,d,m);return;case"option":for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null)&&(A==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ue(t,i,A,o,r,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(o=0;o<Ar.length;o++)Se(Ar[o],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(o=r[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ue(t,i,j,o,r,null)}return;default:if(Uc(i)){for(V in r)r.hasOwnProperty(V)&&(o=r[V],o!==void 0&&Mf(t,i,V,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&Ue(t,i,w,o,r,null))}function r2(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,w=null,A=null,j=null,V=null;for(L in r){var Y=r[L];if(r.hasOwnProperty(L)&&Y!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":A=Y;default:o.hasOwnProperty(L)||Ue(t,i,L,null,o,Y)}}for(var z in o){var L=o[z];if(Y=r[z],o.hasOwnProperty(z)&&(L!=null||Y!=null))switch(z){case"type":m=L;break;case"name":d=L;break;case"checked":j=L;break;case"defaultChecked":V=L;break;case"value":y=L;break;case"defaultValue":w=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,i));break;default:L!==Y&&Ue(t,i,z,L,o,Y)}}Hc(t,y,w,A,j,V,m,d);return;case"select":L=y=w=z=null;for(m in r)if(A=r[m],r.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":L=A;default:o.hasOwnProperty(m)||Ue(t,i,m,null,o,A)}for(d in o)if(m=o[d],A=r[d],o.hasOwnProperty(d)&&(m!=null||A!=null))switch(d){case"value":z=m;break;case"defaultValue":w=m;break;case"multiple":y=m;default:m!==A&&Ue(t,i,d,m,o,A)}i=w,r=y,o=L,z!=null?Vs(t,!!r,z,!1):!!o!=!!r&&(i!=null?Vs(t,!!r,i,!0):Vs(t,!!r,r?[]:"",!1));return;case"textarea":L=z=null;for(w in r)if(d=r[w],r.hasOwnProperty(w)&&d!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ue(t,i,w,null,o,d)}for(y in o)if(d=o[y],m=r[y],o.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":z=d;break;case"defaultValue":L=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ue(t,i,y,d,o,m)}sm(t,z,L);return;case"option":for(var ee in r)z=r[ee],r.hasOwnProperty(ee)&&z!=null&&!o.hasOwnProperty(ee)&&(ee==="selected"?t.selected=!1:Ue(t,i,ee,null,o,z));for(A in o)z=o[A],L=r[A],o.hasOwnProperty(A)&&z!==L&&(z!=null||L!=null)&&(A==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":Ue(t,i,A,z,o,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in r)z=r[oe],r.hasOwnProperty(oe)&&z!=null&&!o.hasOwnProperty(oe)&&Ue(t,i,oe,null,o,z);for(j in o)if(z=o[j],L=r[j],o.hasOwnProperty(j)&&z!==L&&(z!=null||L!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,i));break;default:Ue(t,i,j,z,o,L)}return;default:if(Uc(i)){for(var Ve in r)z=r[Ve],r.hasOwnProperty(Ve)&&z!==void 0&&!o.hasOwnProperty(Ve)&&Mf(t,i,Ve,void 0,o,z);for(V in o)z=o[V],L=r[V],!o.hasOwnProperty(V)||z===L||z===void 0&&L===void 0||Mf(t,i,V,z,o,L);return}}for(var O in r)z=r[O],r.hasOwnProperty(O)&&z!=null&&!o.hasOwnProperty(O)&&Ue(t,i,O,null,o,z);for(Y in o)z=o[Y],L=r[Y],!o.hasOwnProperty(Y)||z===L||z==null&&L==null||Ue(t,i,Y,z,o,L)}function oy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var d=r[o],m=d.transferSize,y=d.initiatorType,w=d.duration;if(m&&w&&oy(y)){for(y=0,w=d.responseEnd,o+=1;o<r.length;o++){var A=r[o],j=A.startTime;if(j>w)break;var V=A.transferSize,Y=A.initiatorType;V&&oy(Y)&&(A=A.responseEnd,y+=V*(A<w?1:(w-j)/(A-j)))}if(--o,i+=8*(m+y)/(d.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rf=null,Cf=null;function go(t){return t.nodeType===9?t:t.ownerDocument}function cy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uy(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Of(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nf=null;function o2(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var fy=typeof setTimeout=="function"?setTimeout:void 0,c2=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,u2=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(t){return dy.resolve(null).then(t).catch(f2)}:fy;function f2(t){setTimeout(function(){throw t})}function Di(t){return t==="head"}function hy(t,i){var r=i,o=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(d),va(i);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Mr(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Mr(r);for(var m=r.firstChild;m;){var y=m.nextSibling,w=m.nodeName;m[Ka]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=y}}else r==="body"&&Mr(t.ownerDocument.body);r=d}while(r);va(i)}function my(t,i){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Df(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Df(r),Lc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function d2(t,i,r,o){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ka])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=bn(t.nextSibling),t===null)break}return null}function h2(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=bn(t.nextSibling),t===null))return null;return t}function py(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=bn(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$?"||t.data==="$~"}function zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function m2(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function bn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Bf=null;function gy(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return bn(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function yy(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function by(t,i,r){switch(i=go(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Mr(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Lc(t)}var vn=new Map,vy=new Set;function yo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ni=Q.d;Q.d={f:p2,r:g2,D:y2,C:b2,L:v2,m:x2,X:w2,S:S2,M:k2};function p2(){var t=ni.f(),i=lo();return t||i}function g2(t){var i=Hs(t);i!==null&&i.tag===5&&i.type==="form"?Lp(i):ni.r(t)}var ga=typeof document>"u"?null:document;function xy(t,i,r){var o=ga;if(o&&typeof i=="string"&&i){var d=fn(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),vy.has(d)||(vy.add(d),t={rel:t,crossOrigin:r,href:i},o.querySelector(d)===null&&(i=o.createElement("link"),Rt(i,"link",t),xt(i),o.head.appendChild(i)))}}function y2(t){ni.D(t),xy("dns-prefetch",t,null)}function b2(t,i){ni.C(t,i),xy("preconnect",t,i)}function v2(t,i,r){ni.L(t,i,r);var o=ga;if(o&&t&&i){var d='link[rel="preload"][as="'+fn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+fn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+fn(r.imageSizes)+'"]')):d+='[href="'+fn(t)+'"]';var m=d;switch(i){case"style":m=ya(t);break;case"script":m=ba(t)}vn.has(m)||(t=b({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),vn.set(m,t),o.querySelector(d)!==null||i==="style"&&o.querySelector(Rr(m))||i==="script"&&o.querySelector(Cr(m))||(i=o.createElement("link"),Rt(i,"link",t),xt(i),o.head.appendChild(i)))}}function x2(t,i){ni.m(t,i);var r=ga;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+fn(o)+'"][href="'+fn(t)+'"]',m=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ba(t)}if(!vn.has(m)&&(t=b({rel:"modulepreload",href:t},i),vn.set(m,t),r.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Cr(m)))return}o=r.createElement("link"),Rt(o,"link",t),xt(o),r.head.appendChild(o)}}}function S2(t,i,r){ni.S(t,i,r);var o=ga;if(o&&t){var d=qs(o).hoistableStyles,m=ya(t);i=i||"default";var y=d.get(m);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Rr(m)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},r),(r=vn.get(m))&&Lf(t,r);var A=y=o.createElement("link");xt(A),Rt(A,"link",t),A._p=new Promise(function(j,V){A.onload=j,A.onerror=V}),A.addEventListener("load",function(){w.loading|=1}),A.addEventListener("error",function(){w.loading|=2}),w.loading|=4,bo(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(m,y)}}}function w2(t,i){ni.X(t,i);var r=ga;if(r&&t){var o=qs(r).hoistableScripts,d=ba(t),m=o.get(d);m||(m=r.querySelector(Cr(d)),m||(t=b({src:t,async:!0},i),(i=vn.get(d))&&_f(t,i),m=r.createElement("script"),xt(m),Rt(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function k2(t,i){ni.M(t,i);var r=ga;if(r&&t){var o=qs(r).hoistableScripts,d=ba(t),m=o.get(d);m||(m=r.querySelector(Cr(d)),m||(t=b({src:t,async:!0,type:"module"},i),(i=vn.get(d))&&_f(t,i),m=r.createElement("script"),xt(m),Rt(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function Sy(t,i,r,o){var d=(d=le.current)?yo(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ya(r.href),r=qs(d).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ya(r.href);var m=qs(d).hoistableStyles,y=m.get(t);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=d.querySelector(Rr(t)))&&!m._p&&(y.instance=m,y.state.loading=5),vn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},vn.set(t,r),m||T2(d,t,r,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ba(r),r=qs(d).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ya(t){return'href="'+fn(t)+'"'}function Rr(t){return'link[rel="stylesheet"]['+t+"]"}function wy(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function T2(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Rt(i,"link",r),xt(i),t.head.appendChild(i))}function ba(t){return'[src="'+fn(t)+'"]'}function Cr(t){return"script[async]"+t}function ky(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+fn(r.href)+'"]');if(o)return i.instance=o,xt(o),o;var d=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xt(o),Rt(o,"style",d),bo(o,r.precedence,t),i.instance=o;case"stylesheet":d=ya(r.href);var m=t.querySelector(Rr(d));if(m)return i.state.loading|=4,i.instance=m,xt(m),m;o=wy(r),(d=vn.get(d))&&Lf(o,d),m=(t.ownerDocument||t).createElement("link"),xt(m);var y=m;return y._p=new Promise(function(w,A){y.onload=w,y.onerror=A}),Rt(m,"link",o),i.state.loading|=4,bo(m,r.precedence,t),i.instance=m;case"script":return m=ba(r.src),(d=t.querySelector(Cr(m)))?(i.instance=d,xt(d),d):(o=r,(d=vn.get(m))&&(o=b({},r),_f(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),xt(d),Rt(d,"link",o),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,bo(o,r.precedence,t));return i.instance}function bo(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,m=d,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===i)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Lf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function _f(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vo=null;function Ty(t,i,r){if(vo===null){var o=new Map,d=vo=new Map;d.set(r,o)}else d=vo,o=d.get(r),o||(o=new Map,d.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var m=r[d];if(!(m[Ka]||m[Tt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var w=o.get(y);w?w.push(m):o.set(y,[m])}}return o}function Ay(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function A2(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ey(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function E2(t,i,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=ya(o.href),m=i.querySelector(Rr(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=xo.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=m,xt(m);return}m=i.ownerDocument||i,o=wy(o),(d=vn.get(d))&&Lf(o,d),m=m.createElement("link"),xt(m);var y=m;y._p=new Promise(function(w,A){y.onload=w,y.onerror=A}),Rt(m,"link",o),r.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=xo.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Hf=0;function M2(t,i){return t.stylesheets&&t.count===0&&wo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&wo(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Hf===0&&(Hf=62500*l2());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&wo(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Hf?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var So=null;function wo(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,So=new Map,i.forEach(R2,t),So=null,xo.call(t))}function R2(t,i){if(!(i.state.loading&4)){var r=So.get(t);if(r)var o=r.get(null);else{r=new Map,So.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}d=i.instance,y=d.getAttribute("data-precedence"),m=r.get(y)||o,m===o&&r.set(null,d),r.set(y,d),this.count++,o=xo.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var Or={$$typeof:K,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function C2(t,i,r,o,d,m,y,w,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.hiddenUpdates=Dc(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function My(t,i,r,o,d,m,y,w,A,j,V,Y){return t=new C2(t,i,r,y,A,j,V,Y,w),i=1,m===!0&&(i|=24),m=It(3,null,null,i),t.current=m,m.stateNode=t,i=gu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:r,cache:i},xu(m),t}function Ry(t){return t?(t=Fs,t):Fs}function Cy(t,i,r,o,d,m){d=Ry(d),o.context===null?o.context=d:o.pendingContext=d,o=Si(i),o.payload={element:r},m=m===void 0?null:m,m!==null&&(o.callback=m),r=wi(t,o,i),r!==null&&(Ft(r,t,i),or(r,t,i))}function Oy(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function qf(t,i){Oy(t,i),(t=t.alternate)&&Oy(t,i)}function Ny(t){if(t.tag===13||t.tag===31){var i=ns(t,67108864);i!==null&&Ft(i,t,67108864),qf(t,67108864)}}function Dy(t){if(t.tag===13||t.tag===31){var i=an();i=jc(i);var r=ns(t,i);r!==null&&Ft(r,t,i),qf(t,i)}}var ko=!0;function O2(t,i,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=2,Uf(t,i,r,o)}finally{Q.p=m,H.T=d}}function N2(t,i,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=8,Uf(t,i,r,o)}finally{Q.p=m,H.T=d}}function Uf(t,i,r,o){if(ko){var d=Vf(o);if(d===null)Ef(t,i,o,To,r),zy(t,o);else if(j2(d,t,i,r,o))o.stopPropagation();else if(zy(t,o),i&4&&-1<D2.indexOf(t)){for(;d!==null;){var m=Hs(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Pi(m.pendingLanes);if(y!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var A=1<<31-vt(y);w.entanglements[1]|=A,y&=~A}Nn(m),(ze&6)===0&&(ao=Ht()+500,Tr(0))}}break;case 31:case 13:w=ns(m,2),w!==null&&Ft(w,m,2),lo(),qf(m,2)}if(m=Vf(o),m===null&&Ef(t,i,o,To,r),m===d)break;d=m}d!==null&&o.stopPropagation()}else Ef(t,i,o,null,r)}}function Vf(t){return t=Gc(t),Gf(t)}var To=null;function Gf(t){if(To=null,t=_s(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return To=t,null}function jy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cc()){case fl:return 2;case dl:return 8;case he:case Me:return 32;case gt:return 268435456;default:return 32}default:return 32}}var $f=!1,ji=null,zi=null,Bi=null,Nr=new Map,Dr=new Map,Li=[],D2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zy(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Nr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(i.pointerId)}}function jr(t,i,r,o,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Hs(i),i!==null&&Ny(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function j2(t,i,r,o,d){switch(i){case"focusin":return ji=jr(ji,t,i,r,o,d),!0;case"dragenter":return zi=jr(zi,t,i,r,o,d),!0;case"mouseover":return Bi=jr(Bi,t,i,r,o,d),!0;case"pointerover":var m=d.pointerId;return Nr.set(m,jr(Nr.get(m)||null,t,i,r,o,d)),!0;case"gotpointercapture":return m=d.pointerId,Dr.set(m,jr(Dr.get(m)||null,t,i,r,o,d)),!0}return!1}function By(t){var i=_s(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,Fh(t.priority,function(){Dy(r)});return}}else if(i===31){if(i=f(r),i!==null){t.blockedOn=i,Fh(t.priority,function(){Dy(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Vf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Vc=o,r.target.dispatchEvent(o),Vc=null}else return i=Hs(r),i!==null&&Ny(i),t.blockedOn=r,!1;i.shift()}return!0}function Ly(t,i,r){Ao(t)&&r.delete(i)}function z2(){$f=!1,ji!==null&&Ao(ji)&&(ji=null),zi!==null&&Ao(zi)&&(zi=null),Bi!==null&&Ao(Bi)&&(Bi=null),Nr.forEach(Ly),Dr.forEach(Ly)}function Eo(t,i){t.blockedOn===i&&(t.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,z2)))}var Mo=null;function _y(t){Mo!==t&&(Mo=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mo===t&&(Mo=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],d=t[i+2];if(typeof o!="function"){if(Gf(o||r)===null)continue;break}var m=Hs(r);m!==null&&(t.splice(i,3),i-=3,Uu(m,{pending:!0,data:d,method:r.method,action:o},o,d))}}))}function va(t){function i(A){return Eo(A,t)}ji!==null&&Eo(ji,t),zi!==null&&Eo(zi,t),Bi!==null&&Eo(Bi,t),Nr.forEach(i),Dr.forEach(i);for(var r=0;r<Li.length;r++){var o=Li[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Li.length&&(r=Li[0],r.blockedOn===null);)By(r),r.blockedOn===null&&Li.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var d=r[o],m=r[o+1],y=d[$t]||null;if(typeof m=="function")y||_y(r);else if(y){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[$t]||null)w=y.formAction;else if(Gf(d)!==null)continue}else w=y.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),_y(r)}}}function Hy(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function Yf(t){this._internalRoot=t}Ro.prototype.render=Yf.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,o=an();Cy(r,o,t,i,null,null)},Ro.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Cy(t.current,2,null,t,null,null),lo(),i[Ls]=null}};function Ro(t){this._internalRoot=t}Ro.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qh();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Li.length&&i!==0&&i<Li[r].priority;r++);Li.splice(r,0,t),r===0&&By(t)}};var qy=e.version;if(qy!=="19.2.7")throw Error(a(527,qy,"19.2.7"));Q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var B2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{hi=Co.inject(B2),Ie=Co}catch{}}return Br.createRoot=function(t,i){if(!l(t))throw Error(a(299));var r=!1,o="",d=Wp,m=Xp,y=Qp;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=My(t,1,!1,null,null,r,o,null,d,m,y,Hy),t[Ls]=i.current,Af(t),new Yf(i)},Br.hydrateRoot=function(t,i,r){if(!l(t))throw Error(a(299));var o=!1,d="",m=Wp,y=Xp,w=Qp,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(A=r.formState)),i=My(t,1,!0,i,r??null,o,d,A,m,y,w,Hy),i.context=Ry(null),r=i.current,o=an(),o=jc(o),d=Si(o),d.callback=null,wi(r,d,o),r=o,i.current.lanes=r,Ya(i,r),Nn(i),t[Ls]=i.current,Af(t),new Ro(i)},Br.version="19.2.7",Br}var Fy;function W2(){if(Fy)return Xf.exports;Fy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xf.exports=K2(),Xf.exports}var X2=W2();const yb=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();const Q2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const F2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());const Zy=s=>{const e=F2(s);return e.charAt(0).toUpperCase()+e.slice(1)};var Pf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Z2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},P2=N.createContext({}),J2=()=>N.useContext(P2),I2=N.forwardRef(({color:s,size:e,strokeWidth:n,absoluteStrokeWidth:a,className:l="",children:c,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,color:v="currentColor",className:S=""}=J2()??{},k=a??b?Number(n??g)*24/Number(e??p):n??g;return N.createElement("svg",{ref:h,...Pf,width:e??p??Pf.width,height:e??p??Pf.height,stroke:s??v,strokeWidth:k,className:yb("lucide",S,l),...!c&&!Z2(f)&&{"aria-hidden":"true"},...f},[...u.map(([T,C])=>N.createElement(T,C)),...Array.isArray(c)?c:[c]])});const Ee=(s,e)=>{const n=N.forwardRef(({className:a,...l},c)=>N.createElement(I2,{ref:c,iconNode:e,className:yb(`lucide-${Q2(Zy(s))}`,`lucide-${s}`,a),...l}));return n.displayName=Zy(s),n};const eS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],bb=Ee("activity",eS);const tS=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],nS=Ee("arrow-down-to-line",tS);const iS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],gh=Ee("arrow-right",iS);const sS=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],vb=Ee("braces",sS);const aS=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],rS=Ee("building-2",aS);const lS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oS=Ee("check",lS);const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Jr=Ee("circle-alert",cS);const uS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rd=Ee("circle-question-mark",uS);const fS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],dS=Ee("copy",fS);const hS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],mS=Ee("cpu",hS);const pS=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],gS=Ee("file-code-corner",pS);const yS=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],bS=Ee("files",yS);const vS=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],xS=Ee("fingerprint-pattern",vS);const SS=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],wS=Ee("flower-2",SS);const kS=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],TS=Ee("git-branch",kS);const AS=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],ES=Ee("grid-2x2",AS);const MS=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Py=Ee("library",MS);const RS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],CS=Ee("maximize-2",RS);const OS=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],NS=Ee("microscope",OS);const DS=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Kr=Ee("music-2",DS);const jS=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],zS=Ee("package-check",jS);const BS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],LS=Ee("panel-left-close",BS);const _S=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Jy=Ee("panel-left-open",_S);const HS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],qS=Ee("pause",HS);const US=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yc=Ee("play",US);const VS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],GS=Ee("refresh-cw",VS);const $S=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],YS=Ee("rotate-ccw",$S);const KS=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],WS=Ee("route",KS);const XS=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],Cd=Ee("scan-line",XS);const QS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],FS=Ee("search",QS);const ZS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],PS=Ee("shapes",ZS);const JS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],IS=Ee("sparkles",JS);const ew=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],tw=Ee("square",ew);const nw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yh=Ee("x",nw),xb="rasa.theme",Yo=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});Yo.dark;function iw(s=":root"){return`
    ${s} {
      ${Jf(Yo.dark)}
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
      ${Jf(Yo.light)}
    }

    ${s}[data-rasa-theme="dark"] {
      ${Jf(Yo.dark)}
    }
  `}function sw(s=document.documentElement){const e=localStorage.getItem(xb),n=e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return Sb(n,s),n}function Sb(s,e=document.documentElement){const n=s==="light"?"light":"dark";return e.dataset.rasaTheme=n,e.setAttribute("data-theme",n),localStorage.setItem(xb,n),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:n}})),n}function aw(s=document.documentElement){return Sb(s.dataset.rasaTheme==="light"?"dark":"light",s)}function Jf(s){return`
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
  `}const rw=Object.freeze([Object.freeze({id:"inspect",href:"/inspect/",label:"Inspect"}),Object.freeze({id:"studio",href:"/studio/",label:"Studio"}),Object.freeze({id:"conformance",href:"/conformance-report/",label:"Conformance"}),Object.freeze({id:"roadmap",href:"/roadmap/",label:"Roadmap",hidden:!0}),Object.freeze({id:"engineering",href:"/blog/",label:"Engineering",hidden:!0})]);function lw(){return`
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
  `}function ow({activeId:s="",runtimeLabel:e="",runtimeStatus:n="idle",runtimeTitle:a="",theme:l="dark",onThemeToggle:c,actions:u=null}){return x.jsxs("header",{className:"rasa-site-header",children:[x.jsx("a",{"aria-label":"Rasa home",className:"rasa-site-brand",href:"/",children:x.jsx("img",{alt:"Rasa",src:"/assets/brand/logo.svg"})}),x.jsx("nav",{"aria-label":"Primary navigation",className:"rasa-site-nav",children:rw.map(f=>x.jsx("a",{"aria-current":f.id===s?"page":void 0,"data-nav-hidden":f.hidden?"true":void 0,href:f.href,children:f.label},f.id))}),x.jsxs("div",{className:"rasa-site-actions",children:[e?x.jsxs("span",{className:"rasa-site-runtime","data-status":n,title:a||void 0,children:[x.jsx("i",{}),x.jsx("span",{children:e})]}):null,u,x.jsx("button",{"aria-label":`Switch to ${l==="dark"?"light":"dark"} theme`,className:"rasa-site-theme","data-role":"site-theme-toggle",onClick:c,type:"button",children:l==="dark"?"Light":"Dark"})]})]})}let Od=[],wb=[];(()=>{let s="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,n=0;e<s.length;e++)(e%2?wb:Od).push(n=n+s[e])})();function cw(s){if(s<768)return!1;for(let e=0,n=Od.length;;){let a=e+n>>1;if(s<Od[a])n=a;else if(s>=wb[a])e=a+1;else return!0;if(e==n)return!1}}function Iy(s){return s>=127462&&s<=127487}const e0=8205;function uw(s,e,n=!0,a=!0){return(n?kb:fw)(s,e,a)}function kb(s,e,n){if(e==s.length)return e;e&&Tb(s.charCodeAt(e))&&Ab(s.charCodeAt(e-1))&&e--;let a=If(s,e);for(e+=t0(a);e<s.length;){let l=If(s,e);if(a==e0||l==e0||n&&cw(l))e+=t0(l),a=l;else if(Iy(l)){let c=0,u=e-2;for(;u>=0&&Iy(If(s,u));)c++,u-=2;if(c%2==0)break;e+=2}else break}return e}function fw(s,e,n){for(;e>0;){let a=kb(s,e-2,n);if(a<e)return a;e--}return 0}function If(s,e){let n=s.charCodeAt(e);if(!Ab(n)||e+1==s.length)return n;let a=s.charCodeAt(e+1);return Tb(a)?(n-55296<<10)+(a-56320)+65536:n}function Tb(s){return s>=56320&&s<57344}function Ab(s){return s>=55296&&s<56320}function t0(s){return s<65536?1:2}class Be{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,n,a){[e,n]=Na(this,e,n);let l=[];return this.decompose(0,e,l,2),a.length&&a.decompose(0,a.length,l,3),this.decompose(n,this.length,l,1),zn.from(l,this.length-(n-e)+a.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,n=this.length){[e,n]=Na(this,e,n);let a=[];return this.decompose(e,n,a,0),zn.from(a,n-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let n=this.scanIdentical(e,1),a=this.length-this.scanIdentical(e,-1),l=new Wr(this),c=new Wr(e);for(let u=n,f=n;;){if(l.next(u),c.next(u),u=0,l.lineBreak!=c.lineBreak||l.done!=c.done||l.value!=c.value)return!1;if(f+=l.value.length,l.done||f>=a)return!0}}iter(e=1){return new Wr(this,e)}iterRange(e,n=this.length){return new Eb(this,e,n)}iterLines(e,n){let a;if(e==null)a=this.iter();else{n==null&&(n=this.lines+1);let l=this.line(e).from;a=this.iterRange(l,Math.max(l,n==this.lines+1?this.length:n<=1?0:this.line(n-1).to))}return new Mb(a)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?Be.empty:e.length<=32?new lt(e):zn.from(lt.split(e,[]))}}class lt extends Be{constructor(e,n=dw(e)){super(),this.text=e,this.length=n}get lines(){return this.text.length}get children(){return null}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.text[c],f=l+u.length;if((n?a:f)>=e)return new hw(l,f,a,u);l=f+1,a++}}decompose(e,n,a,l){let c=e<=0&&n>=this.length?this:new lt(n0(this.text,e,n),Math.min(n,this.length)-Math.max(0,e));if(l&1){let u=a.pop(),f=Ko(c.text,u.text.slice(),0,c.length);if(f.length<=32)a.push(new lt(f,u.length+c.length));else{let h=f.length>>1;a.push(new lt(f.slice(0,h)),new lt(f.slice(h)))}}else a.push(c)}replace(e,n,a){if(!(a instanceof lt))return super.replace(e,n,a);[e,n]=Na(this,e,n);let l=Ko(this.text,Ko(a.text,n0(this.text,0,e)),n),c=this.length+a.length-(n-e);return l.length<=32?new lt(l,c):zn.from(lt.split(l,[]),c)}sliceString(e,n=this.length,a=`
`){[e,n]=Na(this,e,n);let l="";for(let c=0,u=0;c<=n&&u<this.text.length;u++){let f=this.text[u],h=c+f.length;c>e&&u&&(l+=a),e<h&&n>c&&(l+=f.slice(Math.max(0,e-c),n-c)),c=h+1}return l}flatten(e){for(let n of this.text)e.push(n)}scanIdentical(){return 0}static split(e,n){let a=[],l=-1;for(let c of e)a.push(c),l+=c.length+1,a.length==32&&(n.push(new lt(a,l)),a=[],l=-1);return l>-1&&n.push(new lt(a,l)),n}}class zn extends Be{constructor(e,n){super(),this.children=e,this.length=n,this.lines=0;for(let a of e)this.lines+=a.lines}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.children[c],f=l+u.length,h=a+u.lines-1;if((n?h:f)>=e)return u.lineInner(e,n,a,l);l=f+1,a=h+1}}decompose(e,n,a,l){for(let c=0,u=0;u<=n&&c<this.children.length;c++){let f=this.children[c],h=u+f.length;if(e<=h&&n>=u){let p=l&((u<=e?1:0)|(h>=n?2:0));u>=e&&h<=n&&!p?a.push(f):f.decompose(e-u,n-u,a,p)}u=h+1}}replace(e,n,a){if([e,n]=Na(this,e,n),a.lines<this.lines)for(let l=0,c=0;l<this.children.length;l++){let u=this.children[l],f=c+u.length;if(e>=c&&n<=f){let h=u.replace(e-c,n-c,a),p=this.lines-u.lines+h.lines;if(h.lines<p>>4&&h.lines>p>>6){let g=this.children.slice();return g[l]=h,new zn(g,this.length-(n-e)+a.length)}return super.replace(c,f,h)}c=f+1}return super.replace(e,n,a)}sliceString(e,n=this.length,a=`
`){[e,n]=Na(this,e,n);let l="";for(let c=0,u=0;c<this.children.length&&u<=n;c++){let f=this.children[c],h=u+f.length;u>e&&c&&(l+=a),e<h&&n>u&&(l+=f.sliceString(e-u,n-u,a)),u=h+1}return l}flatten(e){for(let n of this.children)n.flatten(e)}scanIdentical(e,n){if(!(e instanceof zn))return 0;let a=0,[l,c,u,f]=n>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;l+=n,c+=n){if(l==u||c==f)return a;let h=this.children[l],p=e.children[c];if(h!=p)return a+h.scanIdentical(p,n);a+=h.length+1}}static from(e,n=e.reduce((a,l)=>a+l.length+1,-1)){let a=0;for(let S of e)a+=S.lines;if(a<32){let S=[];for(let k of e)k.flatten(S);return new lt(S,n)}let l=Math.max(32,a>>5),c=l<<1,u=l>>1,f=[],h=0,p=-1,g=[];function b(S){let k;if(S.lines>c&&S instanceof zn)for(let T of S.children)b(T);else S.lines>u&&(h>u||!h)?(v(),f.push(S)):S instanceof lt&&h&&(k=g[g.length-1])instanceof lt&&S.lines+k.lines<=32?(h+=S.lines,p+=S.length+1,g[g.length-1]=new lt(k.text.concat(S.text),k.length+1+S.length)):(h+S.lines>l&&v(),h+=S.lines,p+=S.length+1,g.push(S))}function v(){h!=0&&(f.push(g.length==1?g[0]:zn.from(g,p)),p=-1,h=g.length=0)}for(let S of e)b(S);return v(),f.length==1?f[0]:new zn(f,n)}}Be.empty=new lt([""],0);function dw(s){let e=-1;for(let n of s)e+=n.length+1;return e}function Ko(s,e,n=0,a=1e9){for(let l=0,c=0,u=!0;c<s.length&&l<=a;c++){let f=s[c],h=l+f.length;h>=n&&(h>a&&(f=f.slice(0,a-l)),l<n&&(f=f.slice(n-l)),u?(e[e.length-1]+=f,u=!1):e.push(f)),l=h+1}return e}function n0(s,e,n){return Ko(s,[""],e,n)}class Wr{constructor(e,n=1){this.dir=n,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[n>0?1:(e instanceof lt?e.text.length:e.children.length)<<1]}nextInner(e,n){for(this.done=this.lineBreak=!1;;){let a=this.nodes.length-1,l=this.nodes[a],c=this.offsets[a],u=c>>1,f=l instanceof lt?l.text.length:l.children.length;if(u==(n>0?f:0)){if(a==0)return this.done=!0,this.value="",this;n>0&&this.offsets[a-1]++,this.nodes.pop(),this.offsets.pop()}else if((c&1)==(n>0?0:1)){if(this.offsets[a]+=n,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(l instanceof lt){let h=l.text[u+(n<0?-1:0)];if(this.offsets[a]+=n,h.length>Math.max(0,e))return this.value=e==0?h:n>0?h.slice(e):h.slice(0,h.length-e),this;e-=h.length}else{let h=l.children[u+(n<0?-1:0)];e>h.length?(e-=h.length,this.offsets[a]+=n):(n<0&&this.offsets[a]--,this.nodes.push(h),this.offsets.push(n>0?1:(h instanceof lt?h.text.length:h.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Eb{constructor(e,n,a){this.value="",this.done=!1,this.cursor=new Wr(e,n>a?-1:1),this.pos=n>a?e.length:0,this.from=Math.min(n,a),this.to=Math.max(n,a)}nextInner(e,n){if(n<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,n<0?this.pos-this.to:this.from-this.pos);let a=n<0?this.pos-this.from:this.to-this.pos;e>a&&(e=a),a-=e;let{value:l}=this.cursor.next(e);return this.pos+=(l.length+e)*n,this.value=l.length<=a?l:n<0?l.slice(l.length-a):l.slice(0,a),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Mb{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:n,lineBreak:a,value:l}=this.inner.next(e);return n&&this.afterBreak?(this.value="",this.afterBreak=!1):n?(this.done=!0,this.value=""):a?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=l,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(Be.prototype[Symbol.iterator]=function(){return this.iter()},Wr.prototype[Symbol.iterator]=Eb.prototype[Symbol.iterator]=Mb.prototype[Symbol.iterator]=function(){return this});class hw{constructor(e,n,a,l){this.from=e,this.to=n,this.number=a,this.text=l}get length(){return this.to-this.from}}function Na(s,e,n){return e=Math.max(0,Math.min(s.length,e)),[e,Math.max(e,Math.min(s.length,n))]}function Ln(s,e,n=!0,a=!0){return uw(s,e,n,a)}function mw(s){return s>=56320&&s<57344}function pw(s){return s>=55296&&s<56320}function gw(s,e){let n=s.charCodeAt(e);if(!pw(n)||e+1==s.length)return n;let a=s.charCodeAt(e+1);return mw(a)?(n-55296<<10)+(a-56320)+65536:n}function yw(s){return s<65536?1:2}const Nd=/\r\n?|\n/;var cn=(function(s){return s[s.Simple=0]="Simple",s[s.TrackDel=1]="TrackDel",s[s.TrackBefore=2]="TrackBefore",s[s.TrackAfter=3]="TrackAfter",s})(cn||(cn={}));class oi{constructor(e){this.sections=e}get length(){let e=0;for(let n=0;n<this.sections.length;n+=2)e+=this.sections[n];return e}get newLength(){let e=0;for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n+1];e+=a<0?this.sections[n]:a}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let n=0,a=0,l=0;n<this.sections.length;){let c=this.sections[n++],u=this.sections[n++];u<0?(e(a,l,c),l+=c):l+=u,a+=c}}iterChangedRanges(e,n=!1){Dd(this,e,n)}get invertedDesc(){let e=[];for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];l<0?e.push(a,l):e.push(l,a)}return new oi(e)}composeDesc(e){return this.empty?e:e.empty?this:Rb(this,e)}mapDesc(e,n=!1){return e.empty?this:jd(this,e,n)}mapPos(e,n=-1,a=cn.Simple){let l=0,c=0;for(let u=0;u<this.sections.length;){let f=this.sections[u++],h=this.sections[u++],p=l+f;if(h<0){if(p>e)return c+(e-l);c+=f}else{if(a!=cn.Simple&&p>=e&&(a==cn.TrackDel&&l<e&&p>e||a==cn.TrackBefore&&l<e||a==cn.TrackAfter&&p>e))return null;if(p>e||p==e&&n<0&&!f)return e==l||n<0?c:c+h;c+=h}l=p}if(e>l)throw new RangeError(`Position ${e} is out of range for changeset of length ${l}`);return c}touchesRange(e,n=e){for(let a=0,l=0;a<this.sections.length&&l<=n;){let c=this.sections[a++],u=this.sections[a++],f=l+c;if(u>=0&&l<=n&&f>=e)return l<e&&f>n?"cover":!0;l=f}return!1}toString(){let e="";for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];e+=(e?" ":"")+a+(l>=0?":"+l:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(n=>typeof n!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new oi(e)}static create(e){return new oi(e)}}class kt extends oi{constructor(e,n){super(e),this.inserted=n}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Dd(this,(n,a,l,c,u)=>e=e.replace(l,l+(a-n),u),!1),e}mapDesc(e,n=!1){return jd(this,e,n,!0)}invert(e){let n=this.sections.slice(),a=[];for(let l=0,c=0;l<n.length;l+=2){let u=n[l],f=n[l+1];if(f>=0){n[l]=f,n[l+1]=u;let h=l>>1;for(;a.length<h;)a.push(Be.empty);a.push(u?e.slice(c,c+u):Be.empty)}c+=u}return new kt(n,a)}compose(e){return this.empty?e:e.empty?this:Rb(this,e,!0)}map(e,n=!1){return e.empty?this:jd(this,e,n,!0)}iterChanges(e,n=!1){Dd(this,e,n)}get desc(){return oi.create(this.sections)}filter(e){let n=[],a=[],l=[],c=new Ir(this);e:for(let u=0,f=0;;){let h=u==e.length?1e9:e[u++];for(;f<h||f==h&&c.len==0;){if(c.done)break e;let g=Math.min(c.len,h-f);zt(l,g,-1);let b=c.ins==-1?-1:c.off==0?c.ins:0;zt(n,g,b),b>0&&Vi(a,n,c.text),c.forward(g),f+=g}let p=e[u++];for(;f<p;){if(c.done)break e;let g=Math.min(c.len,p-f);zt(n,g,-1),zt(l,g,c.ins==-1?-1:c.off==0?c.ins:0),c.forward(g),f+=g}}return{changes:new kt(n,a),filtered:oi.create(l)}}toJSON(){let e=[];for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n],l=this.sections[n+1];l<0?e.push(a):l==0?e.push([a]):e.push([a].concat(this.inserted[n>>1].toJSON()))}return e}static of(e,n,a){let l=[],c=[],u=0,f=null;function h(g=!1){if(!g&&!l.length)return;u<n&&zt(l,n-u,-1);let b=new kt(l,c);f=f?f.compose(b.map(f)):b,l=[],c=[],u=0}function p(g){if(Array.isArray(g))for(let b of g)p(b);else if(g instanceof kt){if(g.length!=n)throw new RangeError(`Mismatched change set length (got ${g.length}, expected ${n})`);h(),f=f?f.compose(g.map(f)):g}else{let{from:b,to:v=b,insert:S}=g;if(b>v||b<0||v>n)throw new RangeError(`Invalid change range ${b} to ${v} (in doc of length ${n})`);let k=S?typeof S=="string"?Be.of(S.split(a||Nd)):S:Be.empty,T=k.length;if(b==v&&T==0)return;b<u&&h(),b>u&&zt(l,b-u,-1),zt(l,v-b,T),Vi(c,l,k),u=v}}return p(e),h(!f),f}static empty(e){return new kt(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let n=[],a=[];for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="number")n.push(c,-1);else{if(!Array.isArray(c)||typeof c[0]!="number"||c.some((u,f)=>f&&typeof u!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(c.length==1)n.push(c[0],0);else{for(;a.length<l;)a.push(Be.empty);a[l]=Be.of(c.slice(1)),n.push(c[0],a[l].length)}}}return new kt(n,a)}static createSet(e,n){return new kt(e,n)}}function zt(s,e,n,a=!1){if(e==0&&n<=0)return;let l=s.length-2;l>=0&&n<=0&&n==s[l+1]?s[l]+=e:l>=0&&e==0&&s[l]==0?s[l+1]+=n:a?(s[l]+=e,s[l+1]+=n):s.push(e,n)}function Vi(s,e,n){if(n.length==0)return;let a=e.length-2>>1;if(a<s.length)s[s.length-1]=s[s.length-1].append(n);else{for(;s.length<a;)s.push(Be.empty);s.push(n)}}function Dd(s,e,n){let a=s.inserted;for(let l=0,c=0,u=0;u<s.sections.length;){let f=s.sections[u++],h=s.sections[u++];if(h<0)l+=f,c+=f;else{let p=l,g=c,b=Be.empty;for(;p+=f,g+=h,h&&a&&(b=b.append(a[u-2>>1])),!(n||u==s.sections.length||s.sections[u+1]<0);)f=s.sections[u++],h=s.sections[u++];e(l,p,c,g,b),l=p,c=g}}}function jd(s,e,n,a=!1){let l=[],c=a?[]:null,u=new Ir(s),f=new Ir(e);for(let h=-1;;){if(u.done&&f.len||f.done&&u.len)throw new Error("Mismatched change set lengths");if(u.ins==-1&&f.ins==-1){let p=Math.min(u.len,f.len);zt(l,p,-1),u.forward(p),f.forward(p)}else if(f.ins>=0&&(u.ins<0||h==u.i||u.off==0&&(f.len<u.len||f.len==u.len&&!n))){let p=f.len;for(zt(l,f.ins,-1);p;){let g=Math.min(u.len,p);u.ins>=0&&h<u.i&&u.len<=g&&(zt(l,0,u.ins),c&&Vi(c,l,u.text),h=u.i),u.forward(g),p-=g}f.next()}else if(u.ins>=0){let p=0,g=u.len;for(;g;)if(f.ins==-1){let b=Math.min(g,f.len);p+=b,g-=b,f.forward(b)}else if(f.ins==0&&f.len<g)g-=f.len,f.next();else break;zt(l,p,h<u.i?u.ins:0),c&&h<u.i&&Vi(c,l,u.text),h=u.i,u.forward(u.len-g)}else{if(u.done&&f.done)return c?kt.createSet(l,c):oi.create(l);throw new Error("Mismatched change set lengths")}}}function Rb(s,e,n=!1){let a=[],l=n?[]:null,c=new Ir(s),u=new Ir(e);for(let f=!1;;){if(c.done&&u.done)return l?kt.createSet(a,l):oi.create(a);if(c.ins==0)zt(a,c.len,0,f),c.next();else if(u.len==0&&!u.done)zt(a,0,u.ins,f),l&&Vi(l,a,u.text),u.next();else{if(c.done||u.done)throw new Error("Mismatched change set lengths");{let h=Math.min(c.len2,u.len),p=a.length;if(c.ins==-1){let g=u.ins==-1?-1:u.off?0:u.ins;zt(a,h,g,f),l&&g&&Vi(l,a,u.text)}else u.ins==-1?(zt(a,c.off?0:c.len,h,f),l&&Vi(l,a,c.textBit(h))):(zt(a,c.off?0:c.len,u.off?0:u.ins,f),l&&!u.off&&Vi(l,a,u.text));f=(c.ins>h||u.ins>=0&&u.len>h)&&(f||a.length>p),c.forward2(h),u.forward(h)}}}}class Ir{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,n=this.i-2>>1;return n>=e.length?Be.empty:e[n]}textBit(e){let{inserted:n}=this.set,a=this.i-2>>1;return a>=n.length&&!e?Be.empty:n[a].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class Ss{constructor(e,n,a){this.from=e,this.to=n,this.flags=a}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,n=-1){let a,l;return this.empty?a=l=e.mapPos(this.from,n):(a=e.mapPos(this.from,1),l=e.mapPos(this.to,-1)),a==this.from&&l==this.to?this:new Ss(a,l,this.flags)}extend(e,n=e,a=0){if(e<=this.anchor&&n>=this.anchor)return J.range(e,n,void 0,void 0,a);let l=Math.abs(e-this.anchor)>Math.abs(n-this.anchor)?e:n;return J.range(this.anchor,l,void 0,void 0,a)}eq(e,n=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!n||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return J.range(e.anchor,e.head)}static create(e,n,a){return new Ss(e,n,a)}}class J{constructor(e,n){this.ranges=e,this.mainIndex=n}map(e,n=-1){return e.empty?this:J.create(this.ranges.map(a=>a.map(e,n)),this.mainIndex)}eq(e,n=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let a=0;a<this.ranges.length;a++)if(!this.ranges[a].eq(e.ranges[a],n))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new J([this.main],0)}addRange(e,n=!0){return J.create([e].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(e,n=this.mainIndex){let a=this.ranges.slice();return a[n]=e,J.create(a,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new J(e.ranges.map(n=>Ss.fromJSON(n)),e.main)}static single(e,n=e){return new J([J.range(e,n)],0)}static create(e,n=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let a=0,l=0;l<e.length;l++){let c=e[l];if(c.empty?c.from<=a:c.from<a)return J.normalized(e.slice(),n);a=c.to}return new J(e,n)}static cursor(e,n=0,a,l){return Ss.create(e,e,(n==0?0:n<0?8:16)|(a==null?7:Math.min(6,a))|(l??16777215)<<6)}static range(e,n,a,l,c){let u=(a??16777215)<<6|(l==null?7:Math.min(6,l));return!c&&e!=n&&(c=n<e?1:-1),n<e?Ss.create(n,e,48|u):Ss.create(e,n,(c?c<0?8:16:0)|u)}static normalized(e,n=0){let a=e[n];e.sort((l,c)=>l.from-c.from),n=e.indexOf(a);for(let l=1;l<e.length;l++){let c=e[l],u=e[l-1];if(c.empty?c.from<=u.to:c.from<u.to){let f=u.from,h=Math.max(c.to,u.to);l<=n&&n--,e.splice(--l,2,c.anchor>c.head?J.range(h,f):J.range(f,h))}}return new J(e,n)}}function Cb(s,e){for(let n of s.ranges)if(n.to>e)throw new RangeError("Selection points outside of document")}let bh=0;class ue{constructor(e,n,a,l,c){this.combine=e,this.compareInput=n,this.compare=a,this.isStatic=l,this.id=bh++,this.default=e([]),this.extensions=typeof c=="function"?c(this):c}get reader(){return this}static define(e={}){return new ue(e.combine||(n=>n),e.compareInput||((n,a)=>n===a),e.compare||(e.combine?(n,a)=>n===a:vh),!!e.static,e.enables)}of(e){return new Wo([],this,0,e)}compute(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,1,n)}computeN(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,2,n)}from(e,n){return n||(n=a=>a),this.compute([e],a=>n(a.field(e)))}}function vh(s,e){return s==e||s.length==e.length&&s.every((n,a)=>n===e[a])}class Wo{constructor(e,n,a,l){this.dependencies=e,this.facet=n,this.type=a,this.value=l,this.id=bh++}dynamicSlot(e){var n;let a=this.value,l=this.facet.compareInput,c=this.id,u=e[c]>>1,f=this.type==2,h=!1,p=!1,g=[];for(let b of this.dependencies)b=="doc"?h=!0:b=="selection"?p=!0:(((n=e[b.id])!==null&&n!==void 0?n:1)&1)==0&&g.push(e[b.id]);return{create(b){return b.values[u]=a(b),1},update(b,v){if(h&&v.docChanged||p&&(v.docChanged||v.selection)||zd(b,g)){let S=a(b);if(f?!i0(S,b.values[u],l):!l(S,b.values[u]))return b.values[u]=S,1}return 0},reconfigure:(b,v)=>{let S,k=v.config.address[c];if(k!=null){let T=Io(v,k);if(this.dependencies.every(C=>C instanceof ue?v.facet(C)===b.facet(C):C instanceof Qi?v.field(C,!1)==b.field(C,!1):!0)||(f?i0(S=a(b),T,l):l(S=a(b),T)))return b.values[u]=T,0}else S=a(b);return b.values[u]=S,1}}}}function i0(s,e,n){if(s.length!=e.length)return!1;for(let a=0;a<s.length;a++)if(!n(s[a],e[a]))return!1;return!0}function zd(s,e){let n=!1;for(let a of e)Xr(s,a)&1&&(n=!0);return n}function bw(s,e,n){let a=n.map(h=>s[h.id]),l=n.map(h=>h.type),c=a.filter(h=>!(h&1)),u=s[e.id]>>1;function f(h){let p=[];for(let g=0;g<a.length;g++){let b=Io(h,a[g]);if(l[g]==2)for(let v of b)p.push(v);else p.push(b)}return e.combine(p)}return{create(h){for(let p of a)Xr(h,p);return h.values[u]=f(h),1},update(h,p){if(!zd(h,c))return 0;let g=f(h);return e.compare(g,h.values[u])?0:(h.values[u]=g,1)},reconfigure(h,p){let g=zd(h,a),b=p.config.facets[e.id],v=p.facet(e);if(b&&!g&&vh(n,b))return h.values[u]=v,0;let S=f(h);return e.compare(S,v)?(h.values[u]=v,0):(h.values[u]=S,1)}}}const Oo=ue.define({static:!0});class Qi{constructor(e,n,a,l,c){this.id=e,this.createF=n,this.updateF=a,this.compareF=l,this.spec=c,this.provides=void 0}static define(e){let n=new Qi(bh++,e.create,e.update,e.compare||((a,l)=>a===l),e);return e.provide&&(n.provides=e.provide(n)),n}create(e){let n=e.facet(Oo).find(a=>a.field==this);return(n?.create||this.createF)(e)}slot(e){let n=e[this.id]>>1;return{create:a=>(a.values[n]=this.create(a),1),update:(a,l)=>{let c=a.values[n],u=this.updateF(c,l);return this.compareF(c,u)?0:(a.values[n]=u,1)},reconfigure:(a,l)=>{let c=a.facet(Oo),u=l.facet(Oo),f;return(f=c.find(h=>h.field==this))&&f!=u.find(h=>h.field==this)?(a.values[n]=f.create(a),1):l.config.address[this.id]!=null?(a.values[n]=l.field(this),0):(a.values[n]=this.create(a),1)}}}init(e){return[this,Oo.of({field:this,create:e})]}get extension(){return this}}const vs={lowest:4,low:3,default:2,high:1,highest:0};function Lr(s){return e=>new Ob(e,s)}const xh={highest:Lr(vs.highest),high:Lr(vs.high),default:Lr(vs.default),low:Lr(vs.low),lowest:Lr(vs.lowest)};class Ob{constructor(e,n){this.inner=e,this.prec=n}}class bc{of(e){return new Bd(this,e)}reconfigure(e){return bc.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class Bd{constructor(e,n){this.compartment=e,this.inner=n}}class Jo{constructor(e,n,a,l,c,u){for(this.base=e,this.compartments=n,this.dynamicSlots=a,this.address=l,this.staticValues=c,this.facets=u,this.statusTemplate=[];this.statusTemplate.length<a.length;)this.statusTemplate.push(0)}staticFacet(e){let n=this.address[e.id];return n==null?e.default:this.staticValues[n>>1]}static resolve(e,n,a){let l=[],c=Object.create(null),u=new Map;for(let v of vw(e,n,u))v instanceof Qi?l.push(v):(c[v.facet.id]||(c[v.facet.id]=[])).push(v);let f=Object.create(null),h=[],p=[];for(let v of l)f[v.id]=p.length<<1,p.push(S=>v.slot(S));let g=a?.config.facets;for(let v in c){let S=c[v],k=S[0].facet,T=g&&g[v]||[];if(S.every(C=>C.type==0))if(f[k.id]=h.length<<1|1,vh(T,S))h.push(a.facet(k));else{let C=k.combine(S.map(_=>_.value));h.push(a&&k.compare(C,a.facet(k))?a.facet(k):C)}else{for(let C of S)C.type==0?(f[C.id]=h.length<<1|1,h.push(C.value)):(f[C.id]=p.length<<1,p.push(_=>C.dynamicSlot(_)));f[k.id]=p.length<<1,p.push(C=>bw(C,k,S))}}let b=p.map(v=>v(f));return new Jo(e,u,b,f,h,c)}}function vw(s,e,n){let a=[[],[],[],[],[]],l=new Map;function c(u,f){let h=l.get(u);if(h!=null){if(h<=f)return;let p=a[h].indexOf(u);p>-1&&a[h].splice(p,1),u instanceof Bd&&n.delete(u.compartment)}if(l.set(u,f),Array.isArray(u))for(let p of u)c(p,f);else if(u instanceof Bd){if(n.has(u.compartment))throw new RangeError("Duplicate use of compartment in extensions");let p=e.get(u.compartment)||u.inner;n.set(u.compartment,p),c(p,f)}else if(u instanceof Ob)c(u.inner,u.prec);else if(u instanceof Qi)a[f].push(u),u.provides&&c(u.provides,f);else if(u instanceof Wo)a[f].push(u),u.facet.extensions&&c(u.facet.extensions,vs.default);else{let p=u.extension;if(!p)throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);c(p,f)}}return c(s,vs.default),a.reduce((u,f)=>u.concat(f))}function Xr(s,e){if(e&1)return 2;let n=e>>1,a=s.status[n];if(a==4)throw new Error("Cyclic dependency between fields and/or facets");if(a&2)return a;s.status[n]=4;let l=s.computeSlot(s,s.config.dynamicSlots[n]);return s.status[n]=2|l}function Io(s,e){return e&1?s.config.staticValues[e>>1]:s.values[e>>1]}const Nb=ue.define(),Ld=ue.define({combine:s=>s.some(e=>e),static:!0}),Db=ue.define({combine:s=>s.length?s[0]:void 0,static:!0}),jb=ue.define(),zb=ue.define(),Bb=ue.define(),Lb=ue.define({combine:s=>s.length?s[0]:!1});class Ha{constructor(e,n){this.type=e,this.value=n}static define(){return new xw}}class xw{of(e){return new Ha(this,e)}}class Sw{constructor(e){this.map=e}of(e){return new pt(this,e)}}class pt{constructor(e,n){this.type=e,this.value=n}map(e){let n=this.type.map(this.value,e);return n===void 0?void 0:n==this.value?this:new pt(this.type,n)}is(e){return this.type==e}static define(e={}){return new Sw(e.map||(n=>n))}static mapEffects(e,n){if(!e.length)return e;let a=[];for(let l of e){let c=l.map(n);c&&a.push(c)}return a}}pt.reconfigure=pt.define();pt.appendConfig=pt.define();class Bt{constructor(e,n,a,l,c,u){this.startState=e,this.changes=n,this.selection=a,this.effects=l,this.annotations=c,this.scrollIntoView=u,this._doc=null,this._state=null,a&&Cb(a,n.newLength),c.some(f=>f.type==Bt.time)||(this.annotations=c.concat(Bt.time.of(Date.now())))}static create(e,n,a,l,c,u){return new Bt(e,n,a,l,c,u)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let n of this.annotations)if(n.type==e)return n.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let n=this.annotation(Bt.userEvent);return!!(n&&(n==e||n.length>e.length&&n.slice(0,e.length)==e&&n[e.length]=="."))}}Bt.time=Ha.define();Bt.userEvent=Ha.define();Bt.addToHistory=Ha.define();Bt.remote=Ha.define();function ww(s,e){let n=[];for(let a=0,l=0;;){let c,u;if(a<s.length&&(l==e.length||e[l]>=s[a]))c=s[a++],u=s[a++];else if(l<e.length)c=e[l++],u=e[l++];else return n;!n.length||n[n.length-1]<c?n.push(c,u):n[n.length-1]<u&&(n[n.length-1]=u)}}function _b(s,e,n){var a;let l,c,u;return n?(l=e.changes,c=kt.empty(e.changes.length),u=s.changes.compose(e.changes)):(l=e.changes.map(s.changes),c=s.changes.mapDesc(e.changes,!0),u=s.changes.compose(l)),{changes:u,selection:e.selection?e.selection.map(c):(a=s.selection)===null||a===void 0?void 0:a.map(l),effects:pt.mapEffects(s.effects,l).concat(pt.mapEffects(e.effects,c)),annotations:s.annotations.length?s.annotations.concat(e.annotations):e.annotations,scrollIntoView:s.scrollIntoView||e.scrollIntoView}}function _d(s,e,n){let a=e.selection,l=Ma(e.annotations);return e.userEvent&&(l=l.concat(Bt.userEvent.of(e.userEvent))),{changes:e.changes instanceof kt?e.changes:kt.of(e.changes||[],n,s.facet(Db)),selection:a&&(a instanceof J?a:J.single(a.anchor,a.head)),effects:Ma(e.effects),annotations:l,scrollIntoView:!!e.scrollIntoView}}function Hb(s,e,n){let a=_d(s,e.length?e[0]:{},s.doc.length);e.length&&e[0].filter===!1&&(n=!1);for(let c=1;c<e.length;c++){e[c].filter===!1&&(n=!1);let u=!!e[c].sequential;a=_b(a,_d(s,e[c],u?a.changes.newLength:s.doc.length),u)}let l=Bt.create(s,a.changes,a.selection,a.effects,a.annotations,a.scrollIntoView);return Tw(n?kw(l):l)}function kw(s){let e=s.startState,n=!0;for(let l of e.facet(jb)){let c=l(s);if(c===!1){n=!1;break}Array.isArray(c)&&(n=n===!0?c:ww(n,c))}if(n!==!0){let l,c;if(n===!1)c=s.changes.invertedDesc,l=kt.empty(e.doc.length);else{let u=s.changes.filter(n);l=u.changes,c=u.filtered.mapDesc(u.changes).invertedDesc}s=Bt.create(e,l,s.selection&&s.selection.map(c),pt.mapEffects(s.effects,c),s.annotations,s.scrollIntoView)}let a=e.facet(zb);for(let l=a.length-1;l>=0;l--){let c=a[l](s);c instanceof Bt?s=c:Array.isArray(c)&&c.length==1&&c[0]instanceof Bt?s=c[0]:s=Hb(e,Ma(c),!1)}return s}function Tw(s){let e=s.startState,n=e.facet(Bb),a=s;for(let l=n.length-1;l>=0;l--){let c=n[l](s);c&&Object.keys(c).length&&(a=_b(a,_d(e,c,s.changes.newLength),!0))}return a==s?s:Bt.create(e,s.changes,s.selection,a.effects,a.annotations,a.scrollIntoView)}const Aw=[];function Ma(s){return s==null?Aw:Array.isArray(s)?s:[s]}var ri=(function(s){return s[s.Word=0]="Word",s[s.Space=1]="Space",s[s.Other=2]="Other",s})(ri||(ri={}));const Ew=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let Hd;try{Hd=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function Mw(s){if(Hd)return Hd.test(s);for(let e=0;e<s.length;e++){let n=s[e];if(/\w/.test(n)||n>""&&(n.toUpperCase()!=n.toLowerCase()||Ew.test(n)))return!0}return!1}function Rw(s){return e=>{if(!/\S/.test(e))return ri.Space;if(Mw(e))return ri.Word;for(let n=0;n<s.length;n++)if(e.indexOf(s[n])>-1)return ri.Word;return ri.Other}}class Ke{constructor(e,n,a,l,c,u){this.config=e,this.doc=n,this.selection=a,this.values=l,this.status=e.statusTemplate.slice(),this.computeSlot=c,u&&(u._state=this);for(let f=0;f<this.config.dynamicSlots.length;f++)Xr(this,f<<1);this.computeSlot=null}field(e,n=!0){let a=this.config.address[e.id];if(a==null){if(n)throw new RangeError("Field is not present in this state");return}return Xr(this,a),Io(this,a)}update(...e){return Hb(this,e,!0)}applyTransaction(e){let n=this.config,{base:a,compartments:l}=n;for(let f of e.effects)f.is(bc.reconfigure)?(n&&(l=new Map,n.compartments.forEach((h,p)=>l.set(p,h)),n=null),l.set(f.value.compartment,f.value.extension)):f.is(pt.reconfigure)?(n=null,a=f.value):f.is(pt.appendConfig)&&(n=null,a=Ma(a).concat(f.value));let c;n?c=e.startState.values.slice():(n=Jo.resolve(a,l,this),c=new Ke(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(h,p)=>p.reconfigure(h,this),null).values);let u=e.startState.facet(Ld)?e.newSelection:e.newSelection.asSingle();new Ke(n,e.newDoc,u,c,(f,h)=>h.update(f,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:e},range:J.cursor(n.from+e.length)}))}changeByRange(e){let n=this.selection,a=e(n.ranges[0]),l=this.changes(a.changes),c=[a.range],u=Ma(a.effects);for(let f=1;f<n.ranges.length;f++){let h=e(n.ranges[f]),p=this.changes(h.changes),g=p.map(l);for(let v=0;v<f;v++)c[v]=c[v].map(g);let b=l.mapDesc(p,!0);c.push(h.range.map(b)),l=l.compose(g),u=pt.mapEffects(u,g).concat(pt.mapEffects(Ma(h.effects),b))}return{changes:l,selection:J.create(c,n.mainIndex),effects:u}}changes(e=[]){return e instanceof kt?e:kt.of(e,this.doc.length,this.facet(Ke.lineSeparator))}toText(e){return Be.of(e.split(this.facet(Ke.lineSeparator)||Nd))}sliceDoc(e=0,n=this.doc.length){return this.doc.sliceString(e,n,this.lineBreak)}facet(e){let n=this.config.address[e.id];return n==null?e.default:(Xr(this,n),Io(this,n))}toJSON(e){let n={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let a in e){let l=e[a];l instanceof Qi&&this.config.address[l.id]!=null&&(n[a]=l.spec.toJSON(this.field(e[a]),this))}return n}static fromJSON(e,n={},a){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let l=[];if(a){for(let c in a)if(Object.prototype.hasOwnProperty.call(e,c)){let u=a[c],f=e[c];l.push(u.init(h=>u.spec.fromJSON(f,h)))}}return Ke.create({doc:e.doc,selection:J.fromJSON(e.selection),extensions:n.extensions?l.concat([n.extensions]):l})}static create(e={}){let n=Jo.resolve(e.extensions||[],new Map),a=e.doc instanceof Be?e.doc:Be.of((e.doc||"").split(n.staticFacet(Ke.lineSeparator)||Nd)),l=e.selection?e.selection instanceof J?e.selection:J.single(e.selection.anchor,e.selection.head):J.single(0);return Cb(l,a.length),n.staticFacet(Ld)||(l=l.asSingle()),new Ke(n,a,l,n.dynamicSlots.map(()=>null),(c,u)=>u.create(c),null)}get tabSize(){return this.facet(Ke.tabSize)}get lineBreak(){return this.facet(Ke.lineSeparator)||`
`}get readOnly(){return this.facet(Lb)}phrase(e,...n){for(let a of this.facet(Ke.phrases))if(Object.prototype.hasOwnProperty.call(a,e)){e=a[e];break}return n.length&&(e=e.replace(/\$(\$|\d*)/g,(a,l)=>{if(l=="$")return"$";let c=+(l||1);return!c||c>n.length?a:n[c-1]})),e}languageDataAt(e,n,a=-1){let l=[];for(let c of this.facet(Nb))for(let u of c(this,n,a))Object.prototype.hasOwnProperty.call(u,e)&&l.push(u[e]);return l}charCategorizer(e){let n=this.languageDataAt("wordChars",e);return Rw(n.length?n[0]:"")}wordAt(e){let{text:n,from:a,length:l}=this.doc.lineAt(e),c=this.charCategorizer(e),u=e-a,f=e-a;for(;u>0;){let h=Ln(n,u,!1);if(c(n.slice(h,u))!=ri.Word)break;u=h}for(;f<l;){let h=Ln(n,f);if(c(n.slice(f,h))!=ri.Word)break;f=h}return u==f?null:J.range(u+a,f+a)}}Ke.allowMultipleSelections=Ld;Ke.tabSize=ue.define({combine:s=>s.length?s[0]:4});Ke.lineSeparator=Db;Ke.readOnly=Lb;Ke.phrases=ue.define({compare(s,e){let n=Object.keys(s),a=Object.keys(e);return n.length==a.length&&n.every(l=>s[l]==e[l])}});Ke.languageData=Nb;Ke.changeFilter=jb;Ke.transactionFilter=zb;Ke.transactionExtender=Bb;bc.reconfigure=pt.define();function qb(s,e,n={}){let a={};for(let l of s)for(let c of Object.keys(l)){let u=l[c],f=a[c];if(f===void 0)a[c]=u;else if(!(f===u||u===void 0))if(Object.hasOwnProperty.call(n,c))a[c]=n[c](f,u);else throw new Error("Config merge conflict for field "+c)}for(let l in e)a[l]===void 0&&(a[l]=e[l]);return a}class As{eq(e){return this==e}range(e,n=e){return el.create(e,n,this)}}As.prototype.startSide=As.prototype.endSide=0;As.prototype.point=!1;As.prototype.mapMode=cn.TrackDel;function Sh(s,e){return s==e||s.constructor==e.constructor&&s.eq(e)}class el{constructor(e,n,a){this.from=e,this.to=n,this.value=a}static create(e,n,a){return new el(e,n,a)}}function qd(s,e){return s.from-e.from||s.value.startSide-e.value.startSide}class wh{constructor(e,n,a,l){this.from=e,this.to=n,this.value=a,this.maxPoint=l}get length(){return this.to[this.to.length-1]}findIndex(e,n,a,l=0){let c=a?this.to:this.from;for(let u=l,f=c.length;;){if(u==f)return u;let h=u+f>>1,p=c[h]-e||(a?this.value[h].endSide:this.value[h].startSide)-n;if(h==u)return p>=0?u:f;p>=0?f=h:u=h+1}}between(e,n,a,l){for(let c=this.findIndex(n,-1e9,!0),u=this.findIndex(a,1e9,!1,c);c<u;c++)if(l(this.from[c]+e,this.to[c]+e,this.value[c])===!1)return!1}map(e,n){let a=[],l=[],c=[],u=-1,f=-1;for(let h=0;h<this.value.length;h++){let p=this.value[h],g=this.from[h]+e,b=this.to[h]+e,v,S;if(g==b){let k=n.mapPos(g,p.startSide,p.mapMode);if(k==null||(v=S=k,p.startSide!=p.endSide&&(S=n.mapPos(g,p.endSide),S<v)))continue}else if(v=n.mapPos(g,p.startSide),S=n.mapPos(b,p.endSide),v>S||v==S&&p.startSide>0&&p.endSide<=0)continue;(S-v||p.endSide-p.startSide)<0||(u<0&&(u=v),p.point&&(f=Math.max(f,S-v)),a.push(p),l.push(v-u),c.push(S-u))}return{mapped:a.length?new wh(l,c,a,f):null,pos:u}}}class Re{constructor(e,n,a,l){this.chunkPos=e,this.chunk=n,this.nextLayer=a,this.maxPoint=l}static create(e,n,a,l){return new Re(e,n,a,l)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let n of this.chunk)e+=n.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:n=[],sort:a=!1,filterFrom:l=0,filterTo:c=this.length}=e,u=e.filter;if(n.length==0&&!u)return this;if(a&&(n=n.slice().sort(qd)),this.isEmpty)return n.length?Re.of(n):this;let f=new Ub(this,null,-1).goto(0),h=0,p=[],g=new ec;for(;f.value||h<n.length;)if(h<n.length&&(f.from-n[h].from||f.startSide-n[h].value.startSide)>=0){let b=n[h++];g.addInner(b.from,b.to,b.value)||p.push(b)}else f.rangeIndex==1&&f.chunkIndex<this.chunk.length&&(h==n.length||this.chunkEnd(f.chunkIndex)<n[h].from)&&(!u||l>this.chunkEnd(f.chunkIndex)||c<this.chunkPos[f.chunkIndex])&&g.addChunk(this.chunkPos[f.chunkIndex],this.chunk[f.chunkIndex])?f.nextChunk():((!u||l>f.to||c<f.from||u(f.from,f.to,f.value))&&(g.addInner(f.from,f.to,f.value)||p.push(el.create(f.from,f.to,f.value))),f.next());return g.finishInner(this.nextLayer.isEmpty&&!p.length?Re.empty:this.nextLayer.update({add:p,filter:u,filterFrom:l,filterTo:c}))}map(e){if(e.empty||this.isEmpty)return this;let n=[],a=[],l=-1;for(let u=0;u<this.chunk.length;u++){let f=this.chunkPos[u],h=this.chunk[u],p=e.touchesRange(f,f+h.length);if(p===!1)l=Math.max(l,h.maxPoint),n.push(h),a.push(e.mapPos(f));else if(p===!0){let{mapped:g,pos:b}=h.map(f,e);g&&(l=Math.max(l,g.maxPoint),n.push(g),a.push(b))}}let c=this.nextLayer.map(e);return n.length==0?c:new Re(a,n,c||Re.empty,l)}between(e,n,a){if(!this.isEmpty){for(let l=0;l<this.chunk.length;l++){let c=this.chunkPos[l],u=this.chunk[l];if(n>=c&&e<=c+u.length&&u.between(c,e-c,n-c,a)===!1)return}this.nextLayer.between(e,n,a)}}iter(e=0){return tl.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,n=0){return tl.from(e).goto(n)}static compare(e,n,a,l,c=-1){let u=e.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),f=n.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),h=s0(u,f,a),p=new _r(u,h,c),g=new _r(f,h,c);a.iterGaps((b,v,S)=>a0(p,b,g,v,S,l)),a.empty&&a.length==0&&a0(p,0,g,0,0,l)}static eq(e,n,a=0,l){l==null&&(l=999999999);let c=e.filter(g=>!g.isEmpty&&n.indexOf(g)<0),u=n.filter(g=>!g.isEmpty&&e.indexOf(g)<0);if(c.length!=u.length)return!1;if(!c.length)return!0;let f=s0(c,u),h=new _r(c,f,0).goto(a),p=new _r(u,f,0).goto(a);for(;;){if(h.to!=p.to||!Ud(h.active,p.active)||h.point&&(!p.point||!Sh(h.point,p.point)))return!1;if(h.to>l)return!0;h.next(),p.next()}}static spans(e,n,a,l,c=-1){let u=new _r(e,null,c).goto(n),f=n,h=u.openStart;for(;;){let p=Math.min(u.to,a);if(u.point){let g=u.activeForPoint(u.to),b=u.pointFrom<n?g.length+1:u.point.startSide<0?g.length:Math.min(g.length,h);l.point(f,p,u.point,g,b,u.pointRank),h=Math.min(u.openEnd(p),g.length)}else p>f&&(l.span(f,p,u.active,h),h=u.openEnd(p));if(u.to>a)return h+(u.point&&u.to>a?1:0);f=u.to,u.next()}}static of(e,n=!1){let a=new ec;for(let l of e instanceof el?[e]:n?Cw(e):e)a.add(l.from,l.to,l.value);return a.finish()}static join(e){if(!e.length)return Re.empty;let n=e[e.length-1];for(let a=e.length-2;a>=0;a--)for(let l=e[a];l!=Re.empty;l=l.nextLayer)n=new Re(l.chunkPos,l.chunk,n,Math.max(l.maxPoint,n.maxPoint));return n}}Re.empty=new Re([],[],null,-1);function Cw(s){if(s.length>1)for(let e=s[0],n=1;n<s.length;n++){let a=s[n];if(qd(e,a)>0)return s.slice().sort(qd);e=a}return s}Re.empty.nextLayer=Re.empty;class ec{finishChunk(e){this.chunks.push(new wh(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,n,a){this.addInner(e,n,a)||(this.nextLayer||(this.nextLayer=new ec)).add(e,n,a)}addInner(e,n,a){let l=e-this.lastTo||a.startSide-this.last.endSide;if(l<=0&&(e-this.lastFrom||a.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return l<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(n-this.chunkStart),this.last=a,this.lastFrom=e,this.lastTo=n,this.value.push(a),a.point&&(this.maxPoint=Math.max(this.maxPoint,n-e)),!0)}addChunk(e,n){if((e-this.lastTo||n.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,n.maxPoint),this.chunks.push(n),this.chunkPos.push(e);let a=n.value.length-1;return this.last=n.value[a],this.lastFrom=n.from[a]+e,this.lastTo=n.to[a]+e,!0}finish(){return this.finishInner(Re.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let n=Re.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,n}}function s0(s,e,n){let a=new Map;for(let c of s)for(let u=0;u<c.chunk.length;u++)c.chunk[u].maxPoint<=0&&a.set(c.chunk[u],c.chunkPos[u]);let l=new Set;for(let c of e)for(let u=0;u<c.chunk.length;u++){let f=a.get(c.chunk[u]);f!=null&&(n?n.mapPos(f):f)==c.chunkPos[u]&&!n?.touchesRange(f,f+c.chunk[u].length)&&l.add(c.chunk[u])}return l}class Ub{constructor(e,n,a,l=0){this.layer=e,this.skip=n,this.minPoint=a,this.rank=l}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,n=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,n,!1),this}gotoInner(e,n,a){for(;this.chunkIndex<this.layer.chunk.length;){let l=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(l)||this.layer.chunkEnd(this.chunkIndex)<e||l.maxPoint<this.minPoint))break;this.chunkIndex++,a=!1}if(this.chunkIndex<this.layer.chunk.length){let l=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],n,!0);(!a||this.rangeIndex<l)&&this.setRangeIndex(l)}this.next()}forward(e,n){(this.to-e||this.endSide-n)<0&&this.gotoInner(e,n,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],n=this.layer.chunk[this.chunkIndex],a=e+n.from[this.rangeIndex];if(this.from=a,this.to=e+n.to[this.rangeIndex],this.value=n.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class tl{constructor(e){this.heap=e}static from(e,n=null,a=-1){let l=[];for(let c=0;c<e.length;c++)for(let u=e[c];!u.isEmpty;u=u.nextLayer)u.maxPoint>=a&&l.push(new Ub(u,n,a,c));return l.length==1?l[0]:new tl(l)}get startSide(){return this.value?this.value.startSide:0}goto(e,n=-1e9){for(let a of this.heap)a.goto(e,n);for(let a=this.heap.length>>1;a>=0;a--)ed(this.heap,a);return this.next(),this}forward(e,n){for(let a of this.heap)a.forward(e,n);for(let a=this.heap.length>>1;a>=0;a--)ed(this.heap,a);(this.to-e||this.value.endSide-n)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),ed(this.heap,0)}}}function ed(s,e){for(let n=s[e];;){let a=(e<<1)+1;if(a>=s.length)break;let l=s[a];if(a+1<s.length&&l.compare(s[a+1])>=0&&(l=s[a+1],a++),n.compare(l)<0)break;s[a]=n,s[e]=l,e=a}}class _r{constructor(e,n,a){this.minPoint=a,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=tl.from(e,n,a)}goto(e,n=-1e9){return this.cursor.goto(e,n),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=n,this.openStart=-1,this.next(),this}forward(e,n){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-n)<0;)this.removeActive(this.minActive);this.cursor.forward(e,n)}removeActive(e){No(this.active,e),No(this.activeTo,e),No(this.activeRank,e),this.minActive=r0(this.active,this.activeTo)}addActive(e){let n=0,{value:a,to:l,rank:c}=this.cursor;for(;n<this.activeRank.length&&(c-this.activeRank[n]||l-this.activeTo[n])>0;)n++;Do(this.active,n,a),Do(this.activeTo,n,l),Do(this.activeRank,n,c),e&&Do(e,n,this.cursor.from),this.minActive=r0(this.active,this.activeTo)}next(){let e=this.to,n=this.point;this.point=null;let a=this.openStart<0?[]:null;for(;;){let l=this.minActive;if(l>-1&&(this.activeTo[l]-this.cursor.from||this.active[l].endSide-this.cursor.startSide)<0){if(this.activeTo[l]>e){this.to=this.activeTo[l],this.endSide=this.active[l].endSide;break}this.removeActive(l),a&&No(a,l)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let c=this.cursor.value;if(!c.point)this.addActive(a),this.cursor.next();else if(n&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=c,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=c.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(a){this.openStart=0;for(let l=a.length-1;l>=0&&a[l]<e;l--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let n=[];for(let a=this.active.length-1;a>=0&&!(this.activeRank[a]<this.pointRank);a--)(this.activeTo[a]>e||this.activeTo[a]==e&&this.active[a].endSide>=this.point.endSide)&&n.push(this.active[a]);return n.reverse()}openEnd(e){let n=0;for(let a=this.activeTo.length-1;a>=0&&this.activeTo[a]>e;a--)n++;return n}}function a0(s,e,n,a,l,c){s.goto(e),n.goto(a);let u=a+l,f=a,h=a-e,p=!!c.boundChange;for(let g=!1;;){let b=s.to+h-n.to,v=b||s.endSide-n.endSide,S=v<0?s.to+h:n.to,k=Math.min(S,u);if(s.point||n.point?(s.point&&n.point&&Sh(s.point,n.point)&&Ud(s.activeForPoint(s.to),n.activeForPoint(n.to))||c.comparePoint(f,k,s.point,n.point),g=!1):(g&&c.boundChange(f),k>f&&!Ud(s.active,n.active)&&c.compareRange(f,k,s.active,n.active),p&&k<u&&(b||s.openEnd(S)!=n.openEnd(S))&&(g=!0)),S>u)break;f=S,v<=0&&s.next(),v>=0&&n.next()}}function Ud(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++)if(s[n]!=e[n]&&!Sh(s[n],e[n]))return!1;return!0}function No(s,e){for(let n=e,a=s.length-1;n<a;n++)s[n]=s[n+1];s.pop()}function Do(s,e,n){for(let a=s.length-1;a>=e;a--)s[a+1]=s[a];s[e]=n}function r0(s,e){let n=-1,a=1e9;for(let l=0;l<e.length;l++)(e[l]-a||s[l].endSide-s[n].endSide)<0&&(n=l,a=e[l]);return n}function Ow(s,e,n,a){for(let l=0,c=0;;){if(c>=e)return l;if(l==s.length)break;c+=s.charCodeAt(l)==9?n-c%n:1,l=Ln(s,l)}return s.length}const Vd="ͼ",l0=typeof Symbol>"u"?"__"+Vd:Symbol.for(Vd),Gd=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class Da{constructor(e,n){this.rules=[];let{finish:a}=n||{};function l(u){return/^@/.test(u)?[u]:u.split(/,\s*/)}function c(u,f,h,p){let g=[],b=/^@(\w+)\b/.exec(u[0]),v=b&&b[1]=="keyframes";if(b&&f==null)return h.push(u[0]+";");for(let S in f){let k=f[S];if(/&/.test(S))c(S.split(/,\s*/).map(T=>u.map(C=>T.replace(/&/,C))).reduce((T,C)=>T.concat(C)),k,h);else if(k&&typeof k=="object"){if(!b)throw new RangeError("The value of a property ("+S+") should be a primitive value.");c(l(S),k,g,v)}else k!=null&&g.push(S.replace(/_.*/,"").replace(/[A-Z]/g,T=>"-"+T.toLowerCase())+": "+k+";")}(g.length||v)&&h.push((a&&!b&&!p?u.map(a):u).join(", ")+" {"+g.join(" ")+"}")}for(let u in e)c(l(u),e[u],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=o0[l0]||1;return o0[l0]=e+1,Vd+e.toString(36)}static mount(e,n,a){let l=e[Gd],c=a&&a.nonce;l?c&&l.setNonce(c):l=new Nw(e,c),l.mount(Array.isArray(n)?n:[n],e)}}let c0=new Map;class Nw{constructor(e,n){let a=e.ownerDocument||e,l=a.defaultView;if(!e.head&&e.adoptedStyleSheets&&l.CSSStyleSheet){let c=c0.get(a);if(c)return e[Gd]=c;this.sheet=new l.CSSStyleSheet,c0.set(a,this)}else this.styleTag=a.createElement("style"),n&&this.styleTag.setAttribute("nonce",n);this.modules=[],e[Gd]=this}mount(e,n){let a=this.sheet,l=0,c=0;for(let u=0;u<e.length;u++){let f=e[u],h=this.modules.indexOf(f);if(h<c&&h>-1&&(this.modules.splice(h,1),c--,h=-1),h==-1){if(this.modules.splice(c++,0,f),a)for(let p=0;p<f.rules.length;p++)a.insertRule(f.rules[p],l++)}else{for(;c<h;)l+=this.modules[c++].rules.length;l+=f.rules.length,c++}}if(a)n.adoptedStyleSheets.indexOf(this.sheet)<0&&(n.adoptedStyleSheets=[this.sheet,...n.adoptedStyleSheets]);else{let u="";for(let h=0;h<this.modules.length;h++)u+=this.modules[h].getRules()+`
`;this.styleTag.textContent=u;let f=n.head||n;this.styleTag.parentNode!=f&&f.insertBefore(this.styleTag,f.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Ki={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},nl={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Dw=typeof navigator<"u"&&/Mac/.test(navigator.platform),jw=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var Ot=0;Ot<10;Ot++)Ki[48+Ot]=Ki[96+Ot]=String(Ot);for(var Ot=1;Ot<=24;Ot++)Ki[Ot+111]="F"+Ot;for(var Ot=65;Ot<=90;Ot++)Ki[Ot]=String.fromCharCode(Ot+32),nl[Ot]=String.fromCharCode(Ot);for(var td in Ki)nl.hasOwnProperty(td)||(nl[td]=Ki[td]);function zw(s){var e=Dw&&s.metaKey&&s.shiftKey&&!s.ctrlKey&&!s.altKey||jw&&s.shiftKey&&s.key&&s.key.length==1||s.key=="Unidentified",n=!e&&s.key||(s.shiftKey?nl:Ki)[s.keyCode]||s.key||"Unidentified";return n=="Esc"&&(n="Escape"),n=="Del"&&(n="Delete"),n=="Left"&&(n="ArrowLeft"),n=="Up"&&(n="ArrowUp"),n=="Right"&&(n="ArrowRight"),n=="Down"&&(n="ArrowDown"),n}let Ut=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},$d=typeof document<"u"?document:{documentElement:{style:{}}};const Yd=/Edge\/(\d+)/.exec(Ut.userAgent),Vb=/MSIE \d/.test(Ut.userAgent),Kd=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ut.userAgent),vc=!!(Vb||Kd||Yd),u0=!vc&&/gecko\/(\d+)/i.test(Ut.userAgent),nd=!vc&&/Chrome\/(\d+)/.exec(Ut.userAgent),f0="webkitFontSmoothing"in $d.documentElement.style,Wd=!vc&&/Apple Computer/.test(Ut.vendor),d0=Wd&&(/Mobile\/\w+/.test(Ut.userAgent)||Ut.maxTouchPoints>2);var P={mac:d0||/Mac/.test(Ut.platform),windows:/Win/.test(Ut.platform),linux:/Linux|X11/.test(Ut.platform),ie:vc,ie_version:Vb?$d.documentMode||6:Kd?+Kd[1]:Yd?+Yd[1]:0,gecko:u0,gecko_version:u0?+(/Firefox\/(\d+)/.exec(Ut.userAgent)||[0,0])[1]:0,chrome:!!nd,chrome_version:nd?+nd[1]:0,ios:d0,android:/Android\b/.test(Ut.userAgent),webkit:f0,webkit_version:f0?+(/\bAppleWebKit\/(\d+)/.exec(Ut.userAgent)||[0,0])[1]:0,safari:Wd,safari_version:Wd?+(/\bVersion\/(\d+(\.\d+)?)/.exec(Ut.userAgent)||[0,0])[1]:0,tabSize:$d.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function kh(s,e){for(let n in s)n=="class"&&e.class?e.class+=" "+s.class:n=="style"&&e.style?e.style+=";"+s.style:e[n]=s[n];return e}const tc=Object.create(null);function Th(s,e,n){if(s==e)return!0;s||(s=tc),e||(e=tc);let a=Object.keys(s),l=Object.keys(e);if(a.length-0!=l.length-0)return!1;for(let c of a)if(c!=n&&(l.indexOf(c)==-1||s[c]!==e[c]))return!1;return!0}function Bw(s,e){for(let n=s.attributes.length-1;n>=0;n--){let a=s.attributes[n].name;e[a]==null&&s.removeAttribute(a)}for(let n in e){let a=e[n];n=="style"?s.style.cssText=a:s.getAttribute(n)!=a&&s.setAttribute(n,a)}}function h0(s,e,n){let a=!1;if(e)for(let l in e)n&&l in n||(a=!0,l=="style"?s.style.cssText="":s.removeAttribute(l));if(n)for(let l in n)e&&e[l]==n[l]||(a=!0,l=="style"?s.style.cssText=n[l]:s.setAttribute(l,n[l]));return a}function Lw(s){let e=Object.create(null);for(let n=0;n<s.attributes.length;n++){let a=s.attributes[n];e[a.name]=a.value}return e}class xc{eq(e){return!1}updateDOM(e,n,a){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,n,a){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Nt=(function(s){return s[s.Text=0]="Text",s[s.WidgetBefore=1]="WidgetBefore",s[s.WidgetAfter=2]="WidgetAfter",s[s.WidgetRange=3]="WidgetRange",s})(Nt||(Nt={}));class Dt extends As{constructor(e,n,a,l){super(),this.startSide=e,this.endSide=n,this.widget=a,this.spec=l}get heightRelevant(){return!1}static mark(e){return new ol(e)}static widget(e){let n=Math.max(-1e4,Math.min(1e4,e.side||0)),a=!!e.block;return n+=a&&!e.inlineOrder?n>0?3e8:-4e8:n>0?1e8:-1e8,new Es(e,n,n,a,e.widget||null,!1)}static replace(e){let n=!!e.block,a,l;if(e.isBlockGap)a=-5e8,l=4e8;else{let{start:c,end:u}=Gb(e,n);a=(c?n?-3e8:-1:5e8)-1,l=(u?n?2e8:1:-6e8)+1}return new Es(e,a,l,n,e.widget||null,!0)}static line(e){return new cl(e)}static set(e,n=!1){return Re.of(e,n)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Dt.none=Re.empty;class ol extends Dt{constructor(e){let{start:n,end:a}=Gb(e);super(n?-1:5e8,a?1:-6e8,null,e),this.tagName=e.tagName||"span",this.attrs=e.class&&e.attributes?kh(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||tc}eq(e){return this==e||e instanceof ol&&this.tagName==e.tagName&&Th(this.attrs,e.attrs)}range(e,n=e){if(e>=n)throw new RangeError("Mark decorations may not be empty");return super.range(e,n)}}ol.prototype.point=!1;class cl extends Dt{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof cl&&this.spec.class==e.spec.class&&Th(this.spec.attributes,e.spec.attributes)}range(e,n=e){if(n!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,n)}}cl.prototype.mapMode=cn.TrackBefore;cl.prototype.point=!0;class Es extends Dt{constructor(e,n,a,l,c,u){super(n,a,c,e),this.block=l,this.isReplace=u,this.mapMode=l?n<=0?cn.TrackBefore:cn.TrackAfter:cn.TrackDel}get type(){return this.startSide!=this.endSide?Nt.WidgetRange:this.startSide<=0?Nt.WidgetBefore:Nt.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof Es&&_w(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,n=e){if(this.isReplace&&(e>n||e==n&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&n!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,n)}}Es.prototype.point=!0;function Gb(s,e=!1){let{inclusiveStart:n,inclusiveEnd:a}=s;return n==null&&(n=s.inclusive),a==null&&(a=s.inclusive),{start:n??e,end:a??e}}function _w(s,e){return s==e||!!(s&&e&&s.compare(e))}function Ra(s,e,n,a=0){let l=n.length-1;l>=0&&n[l]+a>=s?n[l]=Math.max(n[l],e):n.push(s,e)}class il extends As{constructor(e,n,a){super(),this.tagName=e,this.attributes=n,this.rank=a}eq(e){return e==this||e instanceof il&&this.tagName==e.tagName&&Th(this.attributes,e.attributes)}static create(e){return new il(e.tagName,e.attributes||tc,e.rank==null?50:Math.max(0,Math.min(e.rank,100)))}static set(e,n=!1){return Re.of(e,n)}}il.prototype.startSide=il.prototype.endSide=-1;function sl(s){let e;return s.nodeType==11?e=s.getSelection?s:s.ownerDocument:e=s,e.getSelection()}function Xd(s,e){return e?s==e||s.contains(e.nodeType!=1?e.parentNode:e):!1}function Qr(s,e){if(!e.anchorNode)return!1;try{return Xd(s,e.anchorNode)}catch{return!1}}function Xo(s){return s.nodeType==3?al(s,0,s.nodeValue.length).getClientRects():s.nodeType==1?s.getClientRects():[]}function Fr(s,e,n,a){return n?m0(s,e,n,a,-1)||m0(s,e,n,a,1):!1}function Wi(s){for(var e=0;;e++)if(s=s.previousSibling,!s)return e}function nc(s){return s.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName)}function m0(s,e,n,a,l){for(;;){if(s==n&&e==a)return!0;if(e==(l<0?0:ui(s))){if(s.nodeName=="DIV")return!1;let c=s.parentNode;if(!c||c.nodeType!=1)return!1;e=Wi(s)+(l<0?0:1),s=c}else if(s.nodeType==1){if(s=s.childNodes[e+(l<0?-1:0)],s.nodeType==1&&s.contentEditable=="false")return!1;e=l<0?ui(s):0}else return!1}}function ui(s){return s.nodeType==3?s.nodeValue.length:s.childNodes.length}function ic(s,e){let n=e?s.left:s.right;return{left:n,right:n,top:s.top,bottom:s.bottom}}function Hw(s){let e=s.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:s.innerWidth,top:0,bottom:s.innerHeight}}function $b(s,e){let n=e.width/s.offsetWidth,a=e.height/s.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.width-s.offsetWidth)<1)&&(n=1),(a>.995&&a<1.005||!isFinite(a)||Math.abs(e.height-s.offsetHeight)<1)&&(a=1),{scaleX:n,scaleY:a}}function qw(s,e,n,a,l,c,u,f){let h=s.ownerDocument,p=h.defaultView||window;for(let g=s,b=!1;g&&!b;)if(g.nodeType==1){let v,S=g==h.body,k=1,T=1;if(S)v=Hw(p);else{if(/^(fixed|sticky)$/.test(getComputedStyle(g).position)&&(b=!0),g.scrollHeight<=g.clientHeight&&g.scrollWidth<=g.clientWidth){g=g.assignedSlot||g.parentNode;continue}let U=g.getBoundingClientRect();({scaleX:k,scaleY:T}=$b(g,U)),v={left:U.left,right:U.left+g.clientWidth*k,top:U.top,bottom:U.top+g.clientHeight*T}}let C=0,_=0;if(l=="nearest")e.top<v.top+u?(_=e.top-(v.top+u),n>0&&e.bottom>v.bottom+_&&(_=e.bottom-v.bottom+u)):e.bottom>v.bottom-u&&(_=e.bottom-v.bottom+u,n<0&&e.top-_<v.top&&(_=e.top-(v.top+u)));else{let U=e.bottom-e.top,K=v.bottom-v.top;_=(l=="center"&&U<=K?e.top+U/2-K/2:l=="start"||l=="center"&&n<0?e.top-u:e.bottom-K+u)-v.top}if(a=="nearest"?e.left<v.left+c?(C=e.left-(v.left+c),n>0&&e.right>v.right+C&&(C=e.right-v.right+c)):e.right>v.right-c&&(C=e.right-v.right+c,n<0&&e.left<v.left+C&&(C=e.left-(v.left+c))):C=(a=="center"?e.left+(e.right-e.left)/2-(v.right-v.left)/2:a=="start"==f?e.left-c:e.right-(v.right-v.left)+c)-v.left,C||_)if(S)p.scrollBy(C,_);else{let U=0,K=0;if(_){let $=g.scrollTop;g.scrollTop+=_/T,K=(g.scrollTop-$)*T}if(C){let $=g.scrollLeft;g.scrollLeft+=C/k,U=(g.scrollLeft-$)*k}e={left:e.left-U,top:e.top-K,right:e.right-U,bottom:e.bottom-K},U&&Math.abs(U-C)<1&&(a="nearest"),K&&Math.abs(K-_)<1&&(l="nearest")}if(S)break;(e.top<v.top||e.bottom>v.bottom||e.left<v.left||e.right>v.right)&&(e={left:Math.max(e.left,v.left),right:Math.min(e.right,v.right),top:Math.max(e.top,v.top),bottom:Math.min(e.bottom,v.bottom)}),g=g.assignedSlot||g.parentNode}else if(g.nodeType==11)g=g.host;else break}function Yb(s,e=!0){let n=s.ownerDocument,a=null,l=null;for(let c=s.parentNode;c&&!(c==n.body||(!e||a)&&l);)if(c.nodeType==1)!l&&c.scrollHeight>c.clientHeight&&(l=c),e&&!a&&c.scrollWidth>c.clientWidth&&(a=c),c=c.assignedSlot||c.parentNode;else if(c.nodeType==11)c=c.host;else break;return{x:a,y:l}}class Uw{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:n,focusNode:a}=e;this.set(n,Math.min(e.anchorOffset,n?ui(n):0),a,Math.min(e.focusOffset,a?ui(a):0))}set(e,n,a,l){this.anchorNode=e,this.anchorOffset=n,this.focusNode=a,this.focusOffset=l}}let bs=null;P.safari&&P.safari_version>=26&&(bs=!1);function Kb(s){if(s.setActive)return s.setActive();if(bs)return s.focus(bs);let e=[];for(let n=s;n&&(e.push(n,n.scrollTop,n.scrollLeft),n!=n.ownerDocument);n=n.parentNode);if(s.focus(bs==null?{get preventScroll(){return bs={preventScroll:!0},!0}}:void 0),!bs){bs=!1;for(let n=0;n<e.length;){let a=e[n++],l=e[n++],c=e[n++];a.scrollTop!=l&&(a.scrollTop=l),a.scrollLeft!=c&&(a.scrollLeft=c)}}}let p0;function al(s,e,n=e){let a=p0||(p0=document.createRange());return a.setEnd(s,n),a.setStart(s,e),a}function Ca(s,e,n,a){let l={key:e,code:e,keyCode:n,which:n,cancelable:!0};a&&({altKey:l.altKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,metaKey:l.metaKey}=a);let c=new KeyboardEvent("keydown",l);c.synthetic=!0,s.dispatchEvent(c);let u=new KeyboardEvent("keyup",l);return u.synthetic=!0,s.dispatchEvent(u),c.defaultPrevented||u.defaultPrevented}function Vw(s){for(;s;){if(s&&(s.nodeType==9||s.nodeType==11&&s.host))return s;s=s.assignedSlot||s.parentNode}return null}function Gw(s,e){let n=e.focusNode,a=e.focusOffset;if(!n||e.anchorNode!=n||e.anchorOffset!=a)return!1;for(a=Math.min(a,ui(n));;)if(a){if(n.nodeType!=1)return!1;let l=n.childNodes[a-1];l.contentEditable=="false"?a--:(n=l,a=ui(n))}else{if(n==s)return!0;a=Wi(n),n=n.parentNode}}function Wb(s){return s instanceof Window?s.pageYOffset>Math.max(0,s.document.documentElement.scrollHeight-s.innerHeight-4):s.scrollTop>Math.max(1,s.scrollHeight-s.clientHeight-4)}function Xb(s,e){for(let n=s,a=e;;){if(n.nodeType==3&&a>0)return{node:n,offset:a};if(n.nodeType==1&&a>0){if(n.contentEditable=="false")return null;n=n.childNodes[a-1],a=ui(n)}else if(n.parentNode&&!nc(n))a=Wi(n),n=n.parentNode;else return null}}function Qb(s,e){for(let n=s,a=e;;){if(n.nodeType==3&&a<n.nodeValue.length)return{node:n,offset:a};if(n.nodeType==1&&a<n.childNodes.length){if(n.contentEditable=="false")return null;n=n.childNodes[a],a=0}else if(n.parentNode&&!nc(n))a=Wi(n)+1,n=n.parentNode;else return null}}class An{constructor(e,n,a=!0){this.node=e,this.offset=n,this.precise=a}static before(e,n){return new An(e.parentNode,Wi(e),n)}static after(e,n){return new An(e.parentNode,Wi(e)+1,n)}}var ot=(function(s){return s[s.LTR=0]="LTR",s[s.RTL=1]="RTL",s})(ot||(ot={}));const Ms=ot.LTR,Ah=ot.RTL;function Fb(s){let e=[];for(let n=0;n<s.length;n++)e.push(1<<+s[n]);return e}const $w=Fb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),Yw=Fb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Qd=Object.create(null),Dn=[];for(let s of["()","[]","{}"]){let e=s.charCodeAt(0),n=s.charCodeAt(1);Qd[e]=n,Qd[n]=-e}function Zb(s){return s<=247?$w[s]:1424<=s&&s<=1524?2:1536<=s&&s<=1785?Yw[s-1536]:1774<=s&&s<=2220?4:8192<=s&&s<=8204?256:64336<=s&&s<=65023?4:1}const Kw=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class _n{get dir(){return this.level%2?Ah:Ms}constructor(e,n,a){this.from=e,this.to=n,this.level=a}side(e,n){return this.dir==n==e?this.to:this.from}forward(e,n){return e==(this.dir==n)}static find(e,n,a,l){let c=-1;for(let u=0;u<e.length;u++){let f=e[u];if(f.from<=n&&f.to>=n){if(f.level==a)return u;(c<0||(l!=0?l<0?f.from<n:f.to>n:e[c].level>f.level))&&(c=u)}}if(c<0)throw new RangeError("Index out of range");return c}}function Pb(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++){let a=s[n],l=e[n];if(a.from!=l.from||a.to!=l.to||a.direction!=l.direction||!Pb(a.inner,l.inner))return!1}return!0}const We=[];function Ww(s,e,n,a,l){for(let c=0;c<=a.length;c++){let u=c?a[c-1].to:e,f=c<a.length?a[c].from:n,h=c?256:l;for(let p=u,g=h,b=h;p<f;p++){let v=Zb(s.charCodeAt(p));v==512?v=g:v==8&&b==4&&(v=16),We[p]=v==4?2:v,v&7&&(b=v),g=v}for(let p=u,g=h,b=h;p<f;p++){let v=We[p];if(v==128)p<f-1&&g==We[p+1]&&g&24?v=We[p]=g:We[p]=256;else if(v==64){let S=p+1;for(;S<f&&We[S]==64;)S++;let k=p&&g==8||S<n&&We[S]==8?b==1?1:8:256;for(let T=p;T<S;T++)We[T]=k;p=S-1}else v==8&&b==1&&(We[p]=1);g=v,v&7&&(b=v)}}}function Xw(s,e,n,a,l){let c=l==1?2:1;for(let u=0,f=0,h=0;u<=a.length;u++){let p=u?a[u-1].to:e,g=u<a.length?a[u].from:n;for(let b=p,v,S,k;b<g;b++)if(S=Qd[v=s.charCodeAt(b)])if(S<0){for(let T=f-3;T>=0;T-=3)if(Dn[T+1]==-S){let C=Dn[T+2],_=C&2?l:C&4?C&1?c:l:0;_&&(We[b]=We[Dn[T]]=_),f=T;break}}else{if(Dn.length==189)break;Dn[f++]=b,Dn[f++]=v,Dn[f++]=h}else if((k=We[b])==2||k==1){let T=k==l;h=T?0:1;for(let C=f-3;C>=0;C-=3){let _=Dn[C+2];if(_&2)break;if(T)Dn[C+2]|=2;else{if(_&4)break;Dn[C+2]|=4}}}}}function Qw(s,e,n,a){for(let l=0,c=a;l<=n.length;l++){let u=l?n[l-1].to:s,f=l<n.length?n[l].from:e;for(let h=u;h<f;){let p=We[h];if(p==256){let g=h+1;for(;;)if(g==f){if(l==n.length)break;g=n[l++].to,f=l<n.length?n[l].from:e}else if(We[g]==256)g++;else break;let b=c==1,v=(g<e?We[g]:a)==1,S=b==v?b?1:2:a;for(let k=g,T=l,C=T?n[T-1].to:s;k>h;)k==C&&(k=n[--T].from,C=T?n[T-1].to:s),We[--k]=S;h=g}else c=p,h++}}}function Fd(s,e,n,a,l,c,u){let f=a%2?2:1;if(a%2==l%2)for(let h=e,p=0;h<n;){let g=!0,b=!1;if(p==c.length||h<c[p].from){let T=We[h];T!=f&&(g=!1,b=T==16)}let v=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p<c.length&&k==c[p].from){if(b)break e;let T=c[p];if(!g)for(let C=T.to,_=p+1;;){if(C==n)break e;if(_<c.length&&c[_].from==C)C=c[_++].to;else{if(We[C]==f)break e;break}}if(p++,v)v.push(T);else{T.from>h&&u.push(new _n(h,T.from,S));let C=T.direction==Ms!=!(S%2);Zd(s,C?a+1:a,l,T.inner,T.from,T.to,u),h=T.to}k=T.to}else{if(k==n||(g?We[k]!=f:We[k]==f))break;k++}v?Fd(s,h,k,a+1,l,v,u):h<k&&u.push(new _n(h,k,S)),h=k}else for(let h=n,p=c.length;h>e;){let g=!0,b=!1;if(!p||h>c[p-1].to){let T=We[h-1];T!=f&&(g=!1,b=T==16)}let v=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p&&k==c[p-1].to){if(b)break e;let T=c[--p];if(!g)for(let C=T.from,_=p;;){if(C==e)break e;if(_&&c[_-1].to==C)C=c[--_].from;else{if(We[C-1]==f)break e;break}}if(v)v.push(T);else{T.to<h&&u.push(new _n(T.to,h,S));let C=T.direction==Ms!=!(S%2);Zd(s,C?a+1:a,l,T.inner,T.from,T.to,u),h=T.from}k=T.from}else{if(k==e||(g?We[k-1]!=f:We[k-1]==f))break;k--}v?Fd(s,k,h,a+1,l,v,u):k<h&&u.push(new _n(k,h,S)),h=k}}function Zd(s,e,n,a,l,c,u){let f=e%2?2:1;Ww(s,l,c,a,f),Xw(s,l,c,a,f),Qw(l,c,a,f),Fd(s,l,c,e,n,a,u)}function Fw(s,e,n){if(!s)return[new _n(0,0,e==Ah?1:0)];if(e==Ms&&!n.length&&!Kw.test(s))return Jb(s.length);if(n.length)for(;s.length>We.length;)We[We.length]=256;let a=[],l=e==Ms?0:1;return Zd(s,l,l,n,0,s.length,a),a}function Jb(s){return[new _n(0,s,0)]}let Ib="";function Zw(s,e,n,a,l){var c;let u=a.head-s.from,f=_n.find(e,u,(c=a.bidiLevel)!==null&&c!==void 0?c:-1,a.assoc),h=e[f],p=h.side(l,n);if(u==p){let v=f+=l?1:-1;if(v<0||v>=e.length)return null;h=e[f=v],u=h.side(!l,n),p=h.side(l,n)}let g=Ln(s.text,u,h.forward(l,n));(g<h.from||g>h.to)&&(g=p),Ib=s.text.slice(Math.min(u,g),Math.max(u,g));let b=f==(l?e.length-1:0)?null:e[f+(l?1:-1)];return b&&g==p&&b.level+(l?0:1)<h.level?J.cursor(b.side(!l,n)+s.from,b.forward(l,n)?1:-1,b.level):J.cursor(g+s.from,h.forward(l,n)?-1:1,h.level)}function Pw(s,e,n){for(let a=e;a<n;a++){let l=Zb(s.charCodeAt(a));if(l==1)return Ms;if(l==2||l==4)return Ah}return Ms}const ev=ue.define(),tv=ue.define(),nv=ue.define(),iv=ue.define(),Pd=ue.define(),sv=ue.define(),av=ue.define(),Eh=ue.define(),Mh=ue.define(),rv=ue.define({combine:s=>s.some(e=>e)}),lv=ue.define({combine:s=>s.some(e=>e)}),ov=ue.define();class Oa{constructor(e,n,a,l,c,u=!1){this.range=e,this.y=n,this.x=a,this.yMargin=l,this.xMargin=c,this.isSnapshot=u}map(e){return e.empty?this:new Oa(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new Oa(J.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const jo=pt.define({map:(s,e)=>s.map(e)}),cv=pt.define();function li(s,e,n){let a=s.facet(iv);a.length?a[0](e):window.onerror&&window.onerror(String(e),n,void 0,void 0,e)||(n?console.error(n+":",e):console.error(e))}const ai=ue.define({combine:s=>s.length?s[0]:!0});let Jw=0;const Ta=ue.define({combine(s){return s.filter((e,n)=>{for(let a=0;a<n;a++)if(s[a].plugin==e.plugin)return!1;return!0})}});class Rs{constructor(e,n,a,l,c){this.id=e,this.create=n,this.domEventHandlers=a,this.domEventObservers=l,this.baseExtensions=c(this),this.extension=this.baseExtensions.concat(Ta.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Ta.of({plugin:this,arg:e}))}static define(e,n){const{eventHandlers:a,eventObservers:l,provide:c,decorations:u}=n||{};return new Rs(Jw++,e,a,l,f=>{let h=[];return u&&h.push(Sc.of(p=>{let g=p.plugin(f);return g?u(g):Dt.none})),c&&h.push(c(f)),h})}static fromClass(e,n){return Rs.define((a,l)=>new e(a,l),n)}}class id{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let n=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(n)}catch(a){if(li(n.state,a,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(n){li(e.state,n,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var n;if(!((n=this.value)===null||n===void 0)&&n.destroy)try{this.value.destroy()}catch(a){li(e.state,a,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const uv=ue.define(),Rh=ue.define(),Sc=ue.define(),fv=ue.define(),Ch=ue.define(),ul=ue.define(),dv=ue.define();function g0(s,e){let n=s.state.facet(dv);if(!n.length)return n;let a=n.map(c=>c instanceof Function?c(s):c),l=[];return Re.spans(a,e.from,e.to,{point(){},span(c,u,f,h){let p=c-e.from,g=u-e.from,b=l;for(let v=f.length-1;v>=0;v--,h--){let S=f[v].spec.bidiIsolate,k;if(S==null&&(S=Pw(e.text,p,g)),h>0&&b.length&&(k=b[b.length-1]).to==p&&k.direction==S)k.to=g,b=k.inner;else{let T={from:p,to:g,direction:S,inner:[]};b.push(T),b=T.inner}}}}),l}const hv=ue.define();function mv(s){let e=0,n=0,a=0,l=0;for(let c of s.state.facet(hv)){let u=c(s);u&&(u.left!=null&&(e=Math.max(e,u.left)),u.right!=null&&(n=Math.max(n,u.right)),u.top!=null&&(a=Math.max(a,u.top)),u.bottom!=null&&(l=Math.max(l,u.bottom)))}return{left:e,right:n,top:a,bottom:l}}const Vr=ue.define();class xn{constructor(e,n,a,l){this.fromA=e,this.toA=n,this.fromB=a,this.toB=l}join(e){return new xn(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let n=e.length,a=this;for(;n>0;n--){let l=e[n-1];if(!(l.fromA>a.toA)){if(l.toA<a.fromA)break;a=a.join(l),e.splice(n-1,1)}}return e.splice(n,0,a),e}static extendWithRanges(e,n){if(n.length==0)return e;let a=[];for(let l=0,c=0,u=0;;){let f=l<e.length?e[l].fromB:1e9,h=c<n.length?n[c]:1e9,p=Math.min(f,h);if(p==1e9)break;let g=p+u,b=p,v=g;for(;;)if(c<n.length&&n[c]<=b){let S=n[c+1];c+=2,b=Math.max(b,S);for(let k=l;k<e.length&&e[k].fromB<=b;k++)u=e[k].toA-e[k].toB;v=Math.max(v,S+u)}else if(l<e.length&&e[l].fromB<=b){let S=e[l++];b=Math.max(b,S.toB),v=Math.max(v,S.toA),u=S.toA-S.toB}else break;a.push(new xn(g,v,p,b))}return a}}class sc{constructor(e,n,a){this.view=e,this.state=n,this.transactions=a,this.flags=0,this.startState=e.state,this.changes=kt.empty(this.startState.doc.length);for(let c of a)this.changes=this.changes.compose(c.changes);let l=[];this.changes.iterChangedRanges((c,u,f,h)=>l.push(new xn(c,u,f,h))),this.changedRanges=l}static create(e,n,a){return new sc(e,n,a)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}const Iw=[];class st{constructor(e,n,a=0){this.dom=e,this.length=n,this.flags=a,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return Iw}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let n=this.domAttrs;n&&Bw(this.dom,n)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,n=this.posAtStart){let a=n;for(let l of this.children){if(l==e)return a;a+=l.length+l.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,n){return null}domPosFor(e,n){let a=Wi(this.dom),l=this.length?e>0:n>0;return new An(this.parent.dom,a+(l?1:0),e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof kc)return e;return null}static get(e){return e.cmTile}}class wc extends st{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let n=this.dom,a=null,l,c=e?.node==n?e:null,u=0;for(let f of this.children){if(f.sync(e),u+=f.length+f.breakAfter,l=a?a.nextSibling:n.firstChild,c&&l!=f.dom&&(c.written=!0),f.dom.parentNode==n)for(;l&&l!=f.dom;)l=y0(l);else n.insertBefore(f.dom,l);a=f.dom}for(l=a?a.nextSibling:n.firstChild,c&&l&&(c.written=!0);l;)l=y0(l);this.length=u}}function y0(s){let e=s.nextSibling;return s.parentNode.removeChild(s),e}class kc extends wc{constructor(e,n){super(n),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let n=st.get(e);if(n&&this.owns(n))return n;e=e.parentNode}}blockTiles(e){for(let n=[],a=this,l=0,c=0;;)if(l==a.children.length){if(!n.length)return;a=a.parent,a.breakAfter&&c++,l=n.pop()}else{let u=a.children[l++];if(u instanceof ci)n.push(l),a=u,l=0;else{let f=c+u.length,h=e(u,c);if(h!==void 0)return h;c=f+u.breakAfter}}}resolveBlock(e,n){let a,l=-1,c,u=-1;if(this.blockTiles((f,h)=>{let p=h+f.length;if(e>=h&&e<=p){if(f.isWidget()&&n>=-1&&n<=1){if(f.flags&32)return!0;f.flags&16&&(a=void 0)}(h<e||e==p&&(n<-1?f.length:f.covers(1)))&&(!a||!f.isWidget()&&a.isWidget())&&(a=f,l=e-h),(p>e||e==h&&(n>1?f.length:f.covers(-1)))&&(!c||!f.isWidget()&&c.isWidget())&&(c=f,u=e-h)}}),!a&&!c)throw new Error("No tile at position "+e);return a&&n<0||!c?{tile:a,offset:l}:{tile:c,offset:u}}}class ci extends wc{constructor(e,n){super(e),this.wrapper=n}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(e,n){let a=new ci(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class ja extends wc{constructor(e,n){super(e),this.attrs=n}isLine(){return!0}static start(e,n,a){let l=new ja(n||document.createElement("div"),e);return(!n||!a)&&(l.flags|=4),l}get domAttrs(){return this.attrs}resolveInline(e,n,a){let l=null,c=-1,u=null,f=-1;function h(g,b){for(let v=0,S=0;v<g.children.length&&S<=b;v++){let k=g.children[v],T=S+k.length;T>=b&&(k.isComposite()?h(k,b-S):(!u||u.isHidden&&(n>0||a&&tk(u,k)))&&(T>b||k.flags&32)?(u=k,f=b-S):(S<b||k.flags&16&&!k.isHidden)&&(l=k,c=b-S)),S=T}}h(this,e);let p=(n<0?l:u)||l||u;return p?{tile:p,offset:p==l?c:f}:null}coordsIn(e,n){let a=this.resolveInline(e,n,!0);return a?a.tile.coordsIn(Math.max(0,a.offset),n):ek(this)}domIn(e,n){let a=this.resolveInline(e,n);if(a){let{tile:l,offset:c}=a;if(this.dom.contains(l.dom))return l.isText()?new An(l.dom,Math.min(l.dom.nodeValue.length,c)):l.domPosFor(c,l.flags&16?1:l.flags&32?-1:n);let u=a.tile.parent,f=!1;for(let h of u.children){if(f)return new An(h.dom,0);h==a.tile&&(f=!0)}}return new An(this.dom,0)}}function ek(s){let e=s.dom.lastChild;if(!e)return s.dom.getBoundingClientRect();let n=Xo(e);return n[n.length-1]||null}function tk(s,e){let n=s.coordsIn(0,1),a=e.coordsIn(0,1);return n&&a&&a.top<n.bottom}class Zt extends wc{constructor(e,n){super(e),this.mark=n}get domAttrs(){return this.mark.attrs}static of(e,n){let a=new Zt(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class ws extends st{constructor(e,n){super(e,n.length),this.text=n}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,n){let a=this.dom.nodeValue.length;e>a&&(e=a);let l=e,c=e,u=0;e==0&&n<0||e==a&&n>=0?P.chrome||P.gecko||(e?(l--,u=1):c<a&&(c++,u=-1)):n<0?l--:c<a&&c++;let f=al(this.dom,l,c).getClientRects();if(!f.length)return null;let h=f[(u?u<0:n>=0)?0:f.length-1];return P.safari&&!u&&h.width==0&&(h=Array.prototype.find.call(f,p=>p.width)||h),u?ic(h,u<0):h||null}static of(e,n){let a=new ws(n||document.createTextNode(e),e);return n||(a.flags|=2),a}}class Cs extends st{constructor(e,n,a,l){super(e,n,l),this.widget=a}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,n){return this.coordsInWidget(e,n,!1)}coordsInWidget(e,n,a){let l=this.widget.coordsAt(this.dom,e,n);if(l)return l;if(a)return ic(this.dom.getBoundingClientRect(),this.length?e==0:n<=0);{let c=this.dom.getClientRects(),u=null;if(!c.length)return null;let f=this.flags&16?!0:this.flags&32?!1:e>0;for(let h=f?c.length-1:0;u=c[h],!(e>0?h==0:h==c.length-1||u.top<u.bottom);h+=f?-1:1);return ic(u,!f)}}get overrideDOMText(){if(!this.length)return Be.empty;let{root:e}=this;if(!e)return Be.empty;let n=this.posAtStart;return e.view.state.doc.slice(n,n+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(e,n,a,l,c){return c||(c=e.toDOM(n),e.editable||(c.contentEditable="false")),new Cs(c,a,e,l)}}class ac extends st{constructor(e){let n=document.createElement("img");n.className="cm-widgetBuffer",n.setAttribute("aria-hidden","true"),super(n,0,e)}get isHidden(){return!0}get overrideDOMText(){return Be.empty}coordsIn(e){return this.dom.getBoundingClientRect()}}class nk{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,n,a){let{tile:l,index:c,beforeBreak:u,parents:f}=this;for(;e||n>0;)if(l.isComposite())if(u){if(!e)break;a&&a.break(),e--,u=!1}else if(c==l.children.length){if(!e&&!f.length)break;a&&a.leave(l),u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++}else{let h=l.children[c],p=h.breakAfter;(n>0?h.length<=e:h.length<e)&&(!a||a.skip(h,0,h.length)!==!1||!h.isComposite)?(u=!!p,c++,e-=h.length):(f.push({tile:l,index:c}),l=h,c=0,a&&h.isComposite()&&a.enter(h))}else if(c==l.length)u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++;else if(e){let h=Math.min(e,l.length-c);a&&a.skip(l,c,c+h),e-=h,c+=h}else break;return this.tile=l,this.index=c,this.beforeBreak=u,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class ik{constructor(e,n,a,l){this.from=e,this.to=n,this.wrapper=a,this.rank=l}}class sk{constructor(e,n,a){this.cache=e,this.root=n,this.blockWrappers=a,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,n,a,l){var c;this.flushBuffer();let u=this.ensureMarks(n,a),f=u.lastChild;if(f&&f.isText()&&!(f.flags&8)&&f.length+e.length<512){this.cache.reused.set(f,2);let h=u.children[u.children.length-1]=new ws(f.dom,f.text+e);h.parent=u}else u.append(l||ws.of(e,(c=this.cache.find(ws))===null||c===void 0?void 0:c.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,n){let a=this.curLine;a.dom!=n.line.dom&&(a.setDOM(this.cache.reused.has(n.line)?sd(n.line.dom):n.line.dom),this.cache.reused.set(n.line,2));let l=a;for(let f=n.marks.length-1;f>=0;f--){let h=n.marks[f],p=l.lastChild;if(p instanceof Zt&&p.mark.eq(h.mark))p.dom!=h.dom&&p.setDOM(sd(h.dom)),l=p;else{if(this.cache.reused.get(h)){let b=st.get(h.dom);b&&b.setDOM(sd(h.dom))}let g=Zt.of(h.mark,h.dom);l.append(g),l=g}this.cache.reused.set(h,2)}let c=st.get(e.text);c&&this.cache.reused.set(c,2);let u=new ws(e.text,e.text.nodeValue);u.flags|=8,this.pos=e.range.toB,l.append(u)}addInlineWidget(e,n,a){let l=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);l||this.flushBuffer();let c=this.ensureMarks(n,a);!l&&!(e.flags&16)&&c.append(this.getBuffer(1)),c.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,n,a){this.flushBuffer(),this.ensureMarks(n,a).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let n=this.afterWidget||this.lastBlock;n.length+=e,this.pos+=e}addLineStart(e,n){var a;e||(e=pv);let l=ja.start(e,n||((a=this.cache.find(ja))===null||a===void 0?void 0:a.dom),!!n);this.getBlockPos().append(this.lastBlock=this.curLine=l)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,n){var a;let l=this.curLine;for(let c=e.length-1;c>=0;c--){let u=e[c],f;if(n>0&&(f=l.lastChild)&&f instanceof Zt&&f.mark.eq(u))l=f,n--;else{let h=Zt.of(u,(a=this.cache.find(Zt,p=>p.mark.eq(u)))===null||a===void 0?void 0:a.dom);l.append(h),l=h,n=0}}return l}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!b0(this.curLine,!1)||e.dom.nodeName!="BR"&&e.isWidget()&&!(P.ios&&b0(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(ad,0,32)||new Cs(ad.toDOM(),0,ad,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let n=e.rank*102+e.value.rank,a=new ik(e.from,e.to,e.value,n),l=this.wrappers.length;for(;l>0&&(this.wrappers[l-1].rank-a.rank||this.wrappers[l-1].to-a.to)<0;)l--;this.wrappers.splice(l,0,a)}this.wrapperPos=this.pos}getBlockPos(){var e;this.updateBlockWrappers();let n=this.root;for(let a of this.wrappers){let l=n.lastChild;if(a.from<this.pos&&l instanceof ci&&l.wrapper.eq(a.wrapper))n=l;else{let c=ci.of(a.wrapper,(e=this.cache.find(ci,u=>u.wrapper.eq(a.wrapper)))===null||e===void 0?void 0:e.dom);n.append(c),n=c}}return n}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let n=2|(e<0?16:32),a=this.cache.find(ac,void 0,1);return a&&(a.flags=n),a||new ac(n)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class ak{constructor(e){this.skipCount=0,this.text="",this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:l,lineBreak:c,done:u}=this.cursor.next(this.skipCount);if(this.skipCount=0,u)throw new Error("Ran out of text content when drawing inline views");this.text=l;let f=this.textOff=Math.min(e,l.length);return c?null:l.slice(0,f)}let n=Math.min(this.text.length,this.textOff+e),a=this.text.slice(this.textOff,n);return this.textOff=n,a}}const rc=[Cs,ja,ws,Zt,ac,ci,kc];for(let s=0;s<rc.length;s++)rc[s].bucket=s;class rk{constructor(e){this.view=e,this.buckets=rc.map(()=>[]),this.index=rc.map(()=>0),this.reused=new Map}add(e){let n=e.constructor.bucket,a=this.buckets[n];a.length<6?a.push(e):a[this.index[n]=(this.index[n]+1)%6]=e}find(e,n,a=2){let l=e.bucket,c=this.buckets[l],u=this.index[l];for(let f=c.length-1;f>=0;f--){let h=(f+u)%c.length,p=c[h];if((!n||n(p))&&!this.reused.has(p))return c.splice(h,1),h<u&&this.index[l]--,this.reused.set(p,a),p}return null}findWidget(e,n,a){let l=this.buckets[0];if(l.length)for(let c=0,u=0;;c++){if(c==l.length){if(u)return null;u=1,c=0}let f=l[c];if(!this.reused.has(f)&&(u==0?f.widget.compare(e):f.widget.constructor==e.constructor&&e.updateDOM(f.dom,this.view,f.widget)))return l.splice(c,1),c<this.index[0]&&this.index[0]--,f.widget==e&&f.length==n&&(f.flags&497)==a?(this.reused.set(f,1),f):(this.reused.set(f,2),new Cs(f.dom,n,e,f.flags&-498|a))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,n=2){if(!this.reused.has(e))return this.reused.set(e,n),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}}class lk{constructor(e,n,a,l,c){this.view=e,this.decorations=l,this.disallowBlockEffectsFor=c,this.openWidget=!1,this.openMarks=0,this.cache=new rk(e),this.text=new ak(e.state.doc),this.builder=new sk(this.cache,new kc(e,e.contentDOM),Re.iter(a)),this.cache.reused.set(n,2),this.old=new nk(n),this.reuseWalker={skip:(u,f,h)=>{if(this.cache.add(u),u.isComposite())return!1},enter:u=>this.cache.add(u),leave:()=>{},break:()=>{}}}run(e,n){let a=n&&this.getCompositionContext(n.text);for(let l=0,c=0,u=0;;){let f=u<e.length?e[u++]:null,h=f?f.fromA:this.old.root.length;if(h>l){let p=h-l;this.preserve(p,!u,!f),l=h,c+=p}if(!f)break;n&&f.fromA<=n.range.fromA&&f.toA>=n.range.toA?(this.forward(f.fromA,n.range.fromA,n.range.fromA<n.range.toA?1:-1),this.emit(c,n.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(n,a),this.text.skip(n.range.toB-n.range.fromB),this.forward(n.range.fromA,f.toA),this.emit(n.range.toB,f.toB)):(this.forward(f.fromA,f.toA),this.emit(c,f.toB)),c=f.toB,l=f.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,n,a){let l=uk(this.old),c=this.openMarks;this.old.advance(e,a?1:-1,{skip:(u,f,h)=>{if(u.isWidget())if(this.openWidget)this.builder.continueWidget(h-f);else{let p=h>0||f<u.length?Cs.of(u.widget,this.view,h-f,u.flags&496,this.cache.maybeReuse(u)):this.cache.reuse(u);p.flags&256?(p.flags&=-2,this.builder.addBlockWidget(p)):(this.builder.ensureLine(null),this.builder.addInlineWidget(p,l,c),c=l.length)}else if(u.isText())this.builder.ensureLine(null),!f&&h==u.length&&!this.cache.reused.has(u)?this.builder.addText(u.text,l,c,this.cache.reuse(u)):(this.cache.add(u),this.builder.addText(u.text.slice(f,h),l,c)),c=l.length;else if(u.isLine())u.flags&=-2,this.cache.reused.set(u,1),this.builder.addLine(u);else if(u instanceof ac)this.cache.add(u);else if(u instanceof Zt)this.builder.ensureLine(null),this.builder.addMark(u,l,c),this.cache.reused.set(u,1),c=l.length;else return!1;this.openWidget=!1},enter:u=>{u.isLine()?this.builder.addLineStart(u.attrs,this.cache.maybeReuse(u)):(this.cache.add(u),u instanceof Zt&&l.unshift(u.mark)),this.openWidget=!1},leave:u=>{u.isLine()?l.length&&(l.length=c=0):u instanceof Zt&&(l.shift(),c=Math.min(c,l.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,n){let a=null,l=this.builder,c=0,u=Re.spans(this.decorations,e,n,{point:(f,h,p,g,b,v)=>{if(p instanceof Es){if(this.disallowBlockEffectsFor[v]){if(p.block)throw new RangeError("Block decorations may not be specified via plugins");if(h>this.view.state.doc.lineAt(f).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(c=g.length,b>g.length)l.continueWidget(h-f);else{let S=p.widget||(p.block?za.block:za.inline),k=ok(p),T=this.cache.findWidget(S,h-f,k)||Cs.of(S,this.view,h-f,k);p.block?(p.startSide>0&&l.addLineStartIfNotCovered(a),l.addBlockWidget(T)):(l.ensureLine(a),l.addInlineWidget(T,g,b))}a=null}else a=ck(a,p);h>f&&this.text.skip(h-f)},span:(f,h,p,g)=>{for(let b=f;b<h;){let v=this.text.next(Math.min(512,h-b));v==null?(l.addLineStartIfNotCovered(a),l.addBreak(),b++):(l.ensureLine(a),l.addText(v,p,b==f?g:p.length),b+=v.length),a=null}}});l.addLineStartIfNotCovered(a),this.openWidget=u>c,this.openMarks=u}forward(e,n,a=1){n-e<=10?this.old.advance(n-e,a,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(n-e-10,-1),this.old.advance(5,a,this.reuseWalker))}getCompositionContext(e){let n=[],a=null;for(let l=e.parentNode;;l=l.parentNode){let c=st.get(l);if(l==this.view.contentDOM)break;c instanceof Zt?n.push(c):c?.isLine()?a=c:c instanceof ci||(l.nodeName=="DIV"&&!a&&l!=this.view.contentDOM?a=new ja(l,pv):a||n.push(Zt.of(new ol({tagName:l.nodeName.toLowerCase(),attributes:Lw(l)}),l)))}return{line:a,marks:n}}}function b0(s,e){let n=a=>{for(let l of a.children)if((e?l.isText():l.length)||n(l))return!0;return!1};return n(s)}function ok(s){let e=s.isReplace?(s.startSide<0?64:0)|(s.endSide>0?128:0):s.startSide>0?32:16;return s.block&&(e|=256),e}const pv={class:"cm-line"};function ck(s,e){let n=e.spec.attributes,a=e.spec.class;return!n&&!a||(s||(s={class:"cm-line"}),n&&kh(n,s),a&&(s.class+=" "+a)),s}function uk(s){let e=[];for(let n=s.parents.length;n>1;n--){let a=n==s.parents.length?s.tile:s.parents[n].tile;a instanceof Zt&&e.push(a.mark)}return e}function sd(s){let e=st.get(s);return e&&e.setDOM(s.cloneNode()),s}class za extends xc{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}za.inline=new za("span");za.block=new za("div");const ad=new class extends xc{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}};class v0{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=Dt.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new kc(e,e.contentDOM),this.updateInner([new xn(0,0,0,e.state.doc.length)],null)}update(e){var n;let a=e.changedRanges;this.minWidth>0&&a.length&&(a.every(({fromA:g,toA:b})=>b<this.minWidthFrom||g>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let l=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((n=this.domChanged)===null||n===void 0)&&n.newSel?l=this.domChanged.newSel.head:!vk(e.changes,this.hasComposition)&&!e.selectionSet&&(l=e.state.selection.main.head));let c=l>-1?dk(this.view,e.changes,l):null;if(this.domChanged=null,this.hasComposition){let{from:g,to:b}=this.hasComposition;a=new xn(g,b,e.changes.mapPos(g,-1),e.changes.mapPos(b,1)).addToSet(a.slice())}this.hasComposition=c?{from:c.range.fromB,to:c.range.toB}:null,(P.ie||P.chrome)&&!c&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let u=this.decorations,f=this.blockWrappers;this.updateDeco();let h=pk(u,this.decorations,e.changes);h.length&&(a=xn.extendWithRanges(a,h));let p=yk(f,this.blockWrappers,e.changes);return p.length&&(a=xn.extendWithRanges(a,p)),c&&!a.some(g=>g.fromA<=c.range.fromA&&g.toA>=c.range.toA)&&(a=c.range.addToSet(a.slice())),this.tile.flags&2&&a.length==0?!1:(this.updateInner(a,c),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,n){this.view.viewState.mustMeasureContent=!0;let{observer:a}=this.view;a.ignore(()=>{if(n||e.length){let u=this.tile,f=new lk(this.view,u,this.blockWrappers,this.decorations,this.dynamicDecorationMap);n&&st.get(n.text)&&f.cache.reused.set(st.get(n.text),2),this.tile=f.run(e,n),Jd(u,f.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let c=P.chrome||P.ios?{node:a.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(c),c&&(c.written||a.selectionRange.focusNode!=c.node||!this.tile.dom.contains(c.node))&&(this.forceSelection=!0),this.tile.dom.style.height=""});let l=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let c of this.tile.children)c.isWidget()&&c.widget instanceof rd&&l.push(c.dom);a.updateGaps(l)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let n of e.transactions)for(let a of n.effects)a.is(cv)&&(this.editContextFormatting=a.value)}updateSelection(e=!1,n=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:a}=this.tile,l=this.view.root.activeElement,c=l==a,u=!c&&!(this.view.state.facet(ai)||a.tabIndex>-1)&&Qr(a,this.view.observer.selectionRange)&&!(l&&a.contains(l));if(!(c||n||u))return;let f=this.forceSelection;this.forceSelection=!1;let h=this.view.state.selection.main,p,g;if(h.empty?g=p=this.inlineDOMNearPos(h.anchor,h.assoc||1):(g=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),p=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),P.gecko&&h.empty&&!this.hasComposition&&fk(p)){let v=document.createTextNode("");this.view.observer.ignore(()=>p.node.insertBefore(v,p.node.childNodes[p.offset]||null)),p=g=new An(v,0),f=!0}let b=this.view.observer.selectionRange;(f||!b.focusNode||(!Fr(p.node,p.offset,b.anchorNode,b.anchorOffset)||!Fr(g.node,g.offset,b.focusNode,b.focusOffset))&&!this.suppressWidgetCursorChange(b,h))&&(this.view.observer.ignore(()=>{P.android&&P.chrome&&a.contains(b.focusNode)&&bk(b.focusNode,a)&&(a.blur(),a.focus({preventScroll:!0}));let v=sl(this.view.root);if(v)if(h.empty){if(P.gecko){let S=hk(p.node,p.offset);if(S&&S!=3){let k=(S==1?Xb:Qb)(p.node,p.offset);k&&(p=new An(k.node,k.offset))}}v.collapse(p.node,p.offset),h.bidiLevel!=null&&v.caretBidiLevel!==void 0&&(v.caretBidiLevel=h.bidiLevel)}else if(v.extend){v.collapse(p.node,p.offset);try{v.extend(g.node,g.offset)}catch{}}else{let S=document.createRange();h.anchor>h.head&&([p,g]=[g,p]),S.setEnd(g.node,g.offset),S.setStart(p.node,p.offset),v.removeAllRanges(),v.addRange(S)}u&&this.view.root.activeElement==a&&(a.blur(),l&&l.focus())}),this.view.observer.setSelectionRange(p,g)),this.impreciseAnchor=p.precise?null:new An(b.anchorNode,b.anchorOffset),this.impreciseHead=g.precise?null:new An(b.focusNode,b.focusOffset)}suppressWidgetCursorChange(e,n){return this.hasComposition&&n.empty&&Fr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==n.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,n=e.state.selection.main,a=sl(e.root),{anchorNode:l,anchorOffset:c}=e.observer.selectionRange;if(!a||!n.empty||!n.assoc||!a.modify)return;let u=this.lineAt(n.head,n.assoc);if(!u)return;let f=u.posAtStart;if(n.head==f||n.head==f+u.length)return;let h=this.coordsAt(n.head,-1),p=this.coordsAt(n.head,1);if(!h||!p||h.bottom>p.top)return;let g=this.domAtPos(n.head+n.assoc,n.assoc);a.collapse(g.node,g.offset),a.modify("move",n.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let b=e.observer.selectionRange;e.docView.posFromDOM(b.anchorNode,b.anchorOffset)!=n.from&&a.collapse(l,c)}posFromDOM(e,n){let a=this.tile.nearest(e);if(!a)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let l=a.posAtStart;if(a.isComposite()){let c;if(e==a.dom)c=a.dom.childNodes[n];else{let u=ui(e)==0?0:n==0?-1:1;for(;;){let f=e.parentNode;if(f==a.dom)break;u==0&&f.firstChild!=f.lastChild&&(e==f.firstChild?u=-1:u=1),e=f}u<0?c=e:c=e.nextSibling}if(c==a.dom.firstChild)return l;for(;c&&!st.get(c);)c=c.nextSibling;if(!c)return l+a.length;for(let u=0,f=l;;u++){let h=a.children[u];if(h.dom==c)return f;f+=h.length+h.breakAfter}}else return a.isText()?e==a.dom?l+n:l+(n?a.length:0):l}domAtPos(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.domPosFor(e,n):a.domIn(l,n)}inlineDOMNearPos(e,n){let a,l=-1,c=!1,u,f=-1,h=!1;return this.tile.blockTiles((p,g)=>{if(p.isWidget()){if(p.flags&32&&g>=e)return!0;p.flags&16&&(c=!0)}else{let b=g+p.length;if(g<=e&&(a=p,l=e-g,c=b<e),b>=e&&!u&&(u=p,f=e-g,h=g>e),g>e&&u)return!0}}),!a&&!u?this.domAtPos(e,n):(c&&u?a=null:h&&a&&(u=null),a&&n<0||!u?a.domIn(l,n):u.domIn(f,n))}coordsAt(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.widget instanceof rd?null:a.coordsInWidget(l,n,!0):a.coordsIn(l,n)}lineAt(e,n){let{tile:a}=this.tile.resolveBlock(e,n);return a.isLine()?a:null}coordsForChar(e){let{tile:n,offset:a}=this.tile.resolveBlock(e,1);if(!n.isLine())return null;function l(c,u){if(c.isComposite())for(let f of c.children){if(f.length>=u){let h=l(f,u);if(h)return h}if(u-=f.length,u<0)break}else if(c.isText()&&u<c.length){let f=Ln(c.text,u);if(f==u)return null;let h=al(c.dom,u,f).getClientRects();for(let p=0;p<h.length;p++){let g=h[p];if(p==h.length-1||g.top<g.bottom&&g.left<g.right)return g}}return null}return l(n,a)}measureVisibleLineHeights(e){let n=[],{from:a,to:l}=e,c=this.view.contentDOM.clientWidth,u=c>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,f=-1,h=this.view.textDirection==ot.LTR,p=0,g=(b,v,S)=>{for(let k=0;k<b.children.length&&!(v>l);k++){let T=b.children[k],C=v+T.length,_=T.dom.getBoundingClientRect(),{height:U}=_;if(S&&!k&&(p+=_.top-S.top),T instanceof ci)C>a&&g(T,v,_);else if(v>=a&&(p>0&&n.push(-p),n.push(U+p),p=0,u)){let K=T.dom.lastChild,$=K?Xo(K):[];if($.length){let B=$[$.length-1],W=h?B.right-_.left:_.right-B.left;W>f&&(f=W,this.minWidth=c,this.minWidthFrom=v,this.minWidthTo=C)}}S&&k==b.children.length-1&&(p+=S.bottom-_.bottom),v=C+T.breakAfter}};return g(this.tile,0,null),n}textDirectionAt(e){let{tile:n}=this.tile.resolveBlock(e,1);return getComputedStyle(n.dom).direction=="rtl"?ot.RTL:ot.LTR}measureTextSize(){let e=this.tile.blockTiles(u=>{if(u.isLine()&&u.children.length&&u.length<=20){let f=0,h;for(let p of u.children){if(!p.isText()||/[^ -~]/.test(p.text))return;let g=Xo(p.dom);if(g.length!=1)return;f+=g[0].width,h=g[0].height}if(f)return{lineHeight:u.dom.getBoundingClientRect().height,charWidth:f/u.length,textHeight:h}}});if(e)return e;let n=document.createElement("div"),a,l,c;return n.className="cm-line",n.style.width="99999px",n.style.position="absolute",n.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(n);let u=Xo(n.firstChild)[0];a=n.getBoundingClientRect().height,l=u&&u.width?u.width/27:7,c=u&&u.height?u.height:a,n.remove()}),{lineHeight:a,charWidth:l,textHeight:c}}computeBlockGapDeco(){let e=[],n=this.view.viewState;for(let a=0,l=0;;l++){let c=l==n.viewports.length?null:n.viewports[l],u=c?c.from-1:this.view.state.doc.length;if(u>a){let f=(n.lineBlockAt(u).bottom-n.lineBlockAt(a).top)/this.view.scaleY;e.push(Dt.replace({widget:new rd(f),block:!0,inclusive:!0,isBlockGap:!0}).range(a,u))}if(!c)break;a=c.to+1}return Dt.set(e)}updateDeco(){let e=1,n=this.view.state.facet(Sc).map(c=>(this.dynamicDecorationMap[e++]=typeof c=="function")?c(this.view):c),a=!1,l=this.view.state.facet(Ch).map((c,u)=>{let f=typeof c=="function";return f&&(a=!0),f?c(this.view):c});for(l.length&&(this.dynamicDecorationMap[e++]=a,n.push(Re.join(l))),this.decorations=[this.editContextFormatting,...n,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(fv).map(c=>typeof c=="function"?c(this.view):c)}scrollIntoView(e){var n;if(e.isSnapshot){let g=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=g.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let g of this.view.state.facet(ov))try{if(g(this.view,e.range,e))return!0}catch(b){li(this.view.state,b,"scroll handler")}let{range:a}=e,l=this.coordsAt(a.head,(n=a.assoc)!==null&&n!==void 0?n:a.empty?0:a.head>a.anchor?-1:1),c;if(!l)return;!a.empty&&(c=this.coordsAt(a.anchor,a.anchor>a.head?-1:1))&&(l={left:Math.min(l.left,c.left),top:Math.min(l.top,c.top),right:Math.max(l.right,c.right),bottom:Math.max(l.bottom,c.bottom)});let u=mv(this.view),f={left:l.left-u.left,top:l.top-u.top,right:l.right+u.right,bottom:l.bottom+u.bottom},{offsetWidth:h,offsetHeight:p}=this.view.scrollDOM;if(qw(this.view.scrollDOM,f,a.head<a.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,h),-h),Math.max(Math.min(e.yMargin,p),-p),this.view.textDirection==ot.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(l.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||l.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let g=this.view.docView.lineAt(a.head,1);g&&g.dom.scrollIntoView({block:"nearest"})}}lineHasWidget(e){let n=a=>a.isWidget()||a.children.some(n);return n(this.tile.resolveBlock(e,1).tile)}destroy(){Jd(this.tile)}}function Jd(s,e){let n=e?.get(s);if(n!=1){n==null&&s.destroy();for(let a of s.children)Jd(a,e)}}function fk(s){return s.node.nodeType==1&&s.node.firstChild&&(s.offset==0||s.node.childNodes[s.offset-1].contentEditable=="false")&&(s.offset==s.node.childNodes.length||s.node.childNodes[s.offset].contentEditable=="false")}function gv(s,e){let n=s.observer.selectionRange;if(!n.focusNode)return null;let a=Xb(n.focusNode,n.focusOffset),l=Qb(n.focusNode,n.focusOffset),c=a||l;if(l&&a&&l.node!=a.node){let f=st.get(l.node);if(!f||f.isText()&&f.text!=l.node.nodeValue)c=l;else if(s.docView.lastCompositionAfterCursor){let h=st.get(a.node);!h||h.isText()&&h.text!=a.node.nodeValue||(c=l)}}if(s.docView.lastCompositionAfterCursor=c!=a,!c)return null;let u=e-c.offset;return{from:u,to:u+c.node.nodeValue.length,node:c.node}}function dk(s,e,n){let a=gv(s,n);if(!a)return null;let{node:l,from:c,to:u}=a,f=l.nodeValue;if(/[\n\r]/.test(f)||s.state.doc.sliceString(a.from,a.to)!=f)return null;let h=e.invertedDesc;return{range:new xn(h.mapPos(c),h.mapPos(u),c,u),text:l}}function hk(s,e){return s.nodeType!=1?0:(e&&s.childNodes[e-1].contentEditable=="false"?1:0)|(e<s.childNodes.length&&s.childNodes[e].contentEditable=="false"?2:0)}let mk=class{constructor(){this.changes=[]}compareRange(e,n){Ra(e,n,this.changes)}comparePoint(e,n){Ra(e,n,this.changes)}boundChange(e){Ra(e,e,this.changes)}};function pk(s,e,n){let a=new mk;return Re.compare(s,e,n,a),a.changes}class gk{constructor(){this.changes=[]}compareRange(e,n){Ra(e,n,this.changes)}comparePoint(){}boundChange(e){Ra(e,e,this.changes)}}function yk(s,e,n){let a=new gk;return Re.compare(s,e,n,a),a.changes}function bk(s,e){for(let n=s;n&&n!=e;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable=="false")return!0;return!1}function vk(s,e){let n=!1;return e&&s.iterChangedRanges((a,l)=>{a<e.to&&l>e.from&&(n=!0)}),n}class rd extends xc{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function xk(s,e,n=1){let a=s.charCategorizer(e),l=s.doc.lineAt(e),c=e-l.from;if(l.length==0)return J.cursor(e);c==0?n=1:c==l.length&&(n=-1);let u=c,f=c;n<0?u=Ln(l.text,c,!1):f=Ln(l.text,c);let h=a(l.text.slice(u,f));for(;u>0;){let p=Ln(l.text,u,!1);if(a(l.text.slice(p,u))!=h)break;u=p}for(;f<l.length;){let p=Ln(l.text,f);if(a(l.text.slice(f,p))!=h)break;f=p}return J.range(u+l.from,f+l.from)}function Sk(s,e,n,a,l){let c=Math.round((a-e.left)*s.defaultCharacterWidth);if(s.lineWrapping&&n.height>s.defaultLineHeight*1.5){let f=s.viewState.heightOracle.textHeight,h=Math.floor((l-n.top-(s.defaultLineHeight-f)*.5)/f);c+=h*s.viewState.heightOracle.lineLength}let u=s.state.sliceDoc(n.from,n.to);return n.from+Ow(u,c,s.state.tabSize)}function Id(s,e,n){let a=s.lineBlockAt(e);if(Array.isArray(a.type)){let l;for(let c of a.type){if(c.from>e)break;if(!(c.to<e)){if(c.from<e&&c.to>e)return c;(!l||c.type==Nt.Text&&(l.type!=c.type||(n<0?c.from<e:c.to>e)))&&(l=c)}}return l||a}return a}function wk(s,e,n,a){let l=Id(s,e.head,e.assoc||-1),c=!a||l.type!=Nt.Text||!(s.lineWrapping||l.widgetLineBreaks)?null:s.coordsAtPos(e.assoc<0&&e.head>l.from?e.head-1:e.head);if(c){let u=s.dom.getBoundingClientRect(),f=s.textDirectionAt(l.from),h=s.posAtCoords({x:n==(f==ot.LTR)?u.right-1:u.left+1,y:(c.top+c.bottom)/2});if(h!=null)return J.cursor(h,n?-1:1)}return J.cursor(n?l.to:l.from,n?-1:1)}function x0(s,e,n,a){let l=s.state.doc.lineAt(e.head),c=s.bidiSpans(l),u=s.textDirectionAt(l.from);for(let f=e,h=null;;){let p=Zw(l,c,u,f,n),g=Ib;if(!p){if(l.number==(n?s.state.doc.lines:1))return f;g=`
`,l=s.state.doc.line(l.number+(n?1:-1)),c=s.bidiSpans(l),p=s.visualLineSide(l,!n)}if(h){if(!h(g))return f}else{if(!a)return p;h=a(g)}f=p}}function kk(s,e,n){let a=s.state.charCategorizer(e),l=a(n);return c=>{let u=a(c);return l==ri.Space&&(l=u),l==u}}function Tk(s,e,n,a){let l=e.head,c=n?1:-1;if(l==(n?s.state.doc.length:0))return J.cursor(l,e.assoc);let u=e.goalColumn,f,h=s.contentDOM.getBoundingClientRect(),p=s.coordsAtPos(l,e.assoc||((e.empty?n:e.head==e.from)?1:-1)),g=s.documentTop;if(p)u==null&&(u=p.left-h.left),f=c<0?p.top:p.bottom;else{let k=s.viewState.lineBlockAt(l);u==null&&(u=Math.min(h.right-h.left,s.defaultCharacterWidth*(l-k.from))),f=(c<0?k.top:k.bottom)+g}let b=h.left+u,v=s.viewState.heightOracle.textHeight>>1,S=a??v;for(let k=0;;k+=v){let T=f+(S+k)*c,C=eh(s,{x:b,y:T},!1,c);if(n?T>h.bottom:T<h.top)return J.cursor(C.pos,C.assoc);let _=s.coordsAtPos(C.pos,C.assoc),U=_?(_.top+_.bottom)/2:0;if(!_||(n?U>f:U<f))return J.cursor(C.pos,C.assoc,void 0,u)}}function Zr(s,e,n){for(;;){let a=0;for(let l of s)l.between(e-1,e+1,(c,u,f)=>{if(e>c&&e<u){let h=a||n||(e-c<u-e?-1:1);e=h<0?c:u,a=h}});if(!a)return e}}function yv(s,e){let n=null;for(let a=0;a<e.ranges.length;a++){let l=e.ranges[a],c=null;if(l.empty){let u=Zr(s,l.from,0);u!=l.from&&(c=J.cursor(u,-1))}else{let u=Zr(s,l.from,-1),f=Zr(s,l.to,1);(u!=l.from||f!=l.to)&&(c=J.range(l.from==l.anchor?u:f,l.from==l.head?u:f))}c&&(n||(n=e.ranges.slice()),n[a]=c)}return n?J.create(n,e.mainIndex):e}function ld(s,e,n){let a=Zr(s.state.facet(ul).map(l=>l(s)),n.from,e.head>n.from?-1:1);return a==n.from?n:J.cursor(a,a<n.from?1:-1)}class Bn{constructor(e,n){this.pos=e,this.assoc=n}}function eh(s,e,n,a){let l=s.contentDOM.getBoundingClientRect(),c=l.top+s.viewState.paddingTop,{x:u,y:f}=e,h=f-c,p;for(;;){if(h<0)return new Bn(0,1);if(h>s.viewState.docHeight)return new Bn(s.state.doc.length,-1);if(p=s.elementAtHeight(h),a==null)break;if(p.type==Nt.Text){if(a<0?p.to<s.viewport.from:p.from>s.viewport.to)break;let v=s.docView.coordsAt(a<0?p.from:p.to,a>0?-1:1);if(v&&(a<0?v.top<=h+c:v.bottom>=h+c))break}let b=s.viewState.heightOracle.textHeight/2;h=a>0?p.bottom+b:p.top-b}if(s.viewport.from>=p.to||s.viewport.to<=p.from){if(n)return null;if(p.type==Nt.Text){let b=Sk(s,l,p,u,f);return new Bn(b,b==p.from?1:-1)}}if(p.type!=Nt.Text)return h<(p.top+p.bottom)/2?new Bn(p.from,1):new Bn(p.to,-1);let g=s.docView.lineAt(p.from,2);return(!g||g.length!=p.length)&&(g=s.docView.lineAt(p.from,-2)),new Ak(s,u,f,s.textDirectionAt(p.from)).scanTile(g,p.from)}class Ak{constructor(e,n,a,l){this.view=e,this.x=n,this.y=a,this.baseDir=l,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[_n.find(l,e-a.from,-1,n)].level==this.baseDir}dirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[_n.find(l,e-a.from,-1,n)].dir}bidiIn(e,n){let{spans:a,line:l}=this.bidiSpansAt(e);return a.length>1||a.length&&(a[0].level!=this.baseDir||a[0].to+l.from<n)}scan(e,n,a=!1){let l=0,c=e.length-1,u=new Set,f=this.bidiIn(e[0],e[c]),h,p,g=-1,b=1e9,v;e:for(;l<c;){let k=c-l,T=l+c>>1;t:if(u.has(T)){let _=l+Math.floor(Math.random()*k);for(let U=0;U<k;U++){if(!u.has(_)){T=_;break t}_++,_==c&&(_=l)}break e}u.add(T);let C=n(T);if(C)for(let _=0;_<C.length;_++){let U=C[_],K=0;if(!(U.width==0&&C.length>1)){if(U.bottom<this.y)(!h||h.bottom<U.bottom)&&(h=U),K=1;else if(U.top>this.y)(!p||p.top>U.top)&&(p=U),K=-1;else{let $=U.left>this.x?this.x-U.left:U.right<this.x?this.x-U.right:0,B=Math.abs($);B<b&&(g=T,b=B,v=U),$&&(K=$<0==(this.baseDir==ot.LTR)?-1:1)}K==-1&&(!f||this.baseDirAt(e[T],1))?c=T:K==1&&(!f||this.baseDirAt(e[T+1],-1))&&(l=T+1)}}}if(!v){if(!p&&!h)return{i:e[0],after:!1};let k=h&&(!p||this.y-h.bottom<p.top-this.y)?h:p;return this.y=(k.top+k.bottom)/2,this.scan(e,n,!0)}if(b&&!a){let{top:k,bottom:T}=v;if(h&&h.bottom>(k+k+T)/3)return this.y=h.bottom-1,this.scan(e,n,!0);if(p&&p.top<(k+T+T)/3)return this.y=p.top+1,this.scan(e,n,!0)}let S=(f?this.dirAt(e[g],1):this.baseDir)==ot.LTR;return{i:g,after:this.x>(v.left+v.right)/2==S}}scanText(e,n){let a=[];for(let c=0;c<e.length;c=Ln(e.text,c))a.push(n+c);a.push(n+e.length);let l=this.scan(a,c=>{let u=a[c]-n,f=a[c+1]-n;return al(e.dom,u,f).getClientRects()});return l.after?new Bn(a[l.i+1],-1):new Bn(a[l.i],1)}scanTile(e,n){if(!e.length)return new Bn(n,1);if(e.children.length==1){let f=e.children[0];if(f.isText())return this.scanText(f,n);if(f.isComposite())return this.scanTile(f,n)}let a=[n];for(let f=0,h=n;f<e.children.length;f++)a.push(h+=e.children[f].length);let l=this.scan(a,f=>{let h=e.children[f];return h.flags&48?null:(h.dom.nodeType==1?h.dom:al(h.dom,0,h.length)).getClientRects()}),c=e.children[l.i],u=a[l.i];return c.isText()?this.scanText(c,u):c.isComposite()?this.scanTile(c,u):l.after?new Bn(a[l.i+1],-1):new Bn(u,1)}}const ka="￿";class Ek{constructor(e,n){this.points=e,this.view=n,this.text="",this.lineSeparator=n.state.facet(Ke.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=ka}readRange(e,n){if(!e)return this;let a=e.parentNode;for(let l=e;;){this.findPointBefore(a,l);let c=this.text.length;this.readNode(l);let u=st.get(l),f=l.nextSibling;if(f==n){u?.breakAfter&&!f&&a!=this.view.contentDOM&&this.lineBreak();break}let h=st.get(f);(u&&h?u.breakAfter:(u?u.breakAfter:nc(l))||nc(f)&&(l.nodeName!="BR"||u?.isWidget())&&this.text.length>c)&&!Rk(f,n)&&this.lineBreak(),l=f}return this.findPointBefore(a,n),this}readTextNode(e){let n=e.nodeValue;for(let a of this.points)a.node==e&&(a.pos=this.text.length+Math.min(a.offset,n.length));for(let a=0,l=this.lineSeparator?null:/\r\n?|\n/g;;){let c=-1,u=1,f;if(this.lineSeparator?(c=n.indexOf(this.lineSeparator,a),u=this.lineSeparator.length):(f=l.exec(n))&&(c=f.index,u=f[0].length),this.append(n.slice(a,c<0?n.length:c)),c<0)break;if(this.lineBreak(),u>1)for(let h of this.points)h.node==e&&h.pos>this.text.length&&(h.pos-=u-1);a=c+u}}readNode(e){let n=st.get(e),a=n&&n.overrideDOMText;if(a!=null){this.findPointInside(e,a.length);for(let l=a.iter();!l.next().done;)l.lineBreak?this.lineBreak():this.append(l.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,n){for(let a of this.points)a.node==e&&e.childNodes[a.offset]==n&&(a.pos=this.text.length)}findPointInside(e,n){for(let a of this.points)(e.nodeType==3?a.node==e:e.contains(a.node))&&(a.pos=this.text.length+(Mk(e,a.node,a.offset)?n:0))}}function Mk(s,e,n){for(;;){if(!e||n<ui(e))return!1;if(e==s)return!0;n=Wi(e)+1,e=e.parentNode}}function Rk(s,e){let n;for(;!(s==e||!s);s=s.nextSibling){let a=st.get(s);if(!a?.isWidget())return!1;a&&(n||(n=[])).push(a)}if(n)for(let a of n){let l=a.overrideDOMText;if(l?.length)return!1}return!0}class S0{constructor(e,n){this.node=e,this.offset=n,this.pos=-1}}class Ck{constructor(e,n,a,l){this.typeOver=l,this.bounds=null,this.text="",this.domChanged=n>-1;let{impreciseHead:c,impreciseAnchor:u}=e.docView,f=e.state.selection;if(e.state.readOnly&&n>-1)this.newSel=null;else if(n>-1&&(this.bounds=bv(e.docView.tile,n,a,0))){let h=c||u?[]:Nk(e),p=new Ek(h,e);p.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=p.text,this.newSel=Dk(h,this.bounds.from)}else{let h=e.observer.selectionRange,p=c&&c.node==h.focusNode&&c.offset==h.focusOffset||!Xd(e.contentDOM,h.focusNode)?f.main.head:e.docView.posFromDOM(h.focusNode,h.focusOffset),g=u&&u.node==h.anchorNode&&u.offset==h.anchorOffset||!Xd(e.contentDOM,h.anchorNode)?f.main.anchor:e.docView.posFromDOM(h.anchorNode,h.anchorOffset),b=e.viewport;if((P.ios||P.chrome)&&f.main.empty&&p!=g&&(b.from>0||b.to<e.state.doc.length)){let v=Math.min(p,g),S=Math.max(p,g),k=b.from-v,T=b.to-S;(k==0||k==1||v==0)&&(T==0||T==-1||S==e.state.doc.length)&&(p=0,g=e.state.doc.length)}if(e.inputState.composing>-1&&f.ranges.length>1)this.newSel=f.replaceRange(J.range(g,p));else if(e.lineWrapping&&g==p&&!(f.main.empty&&f.main.head==p)&&e.inputState.lastTouchTime>Date.now()-100){let v=e.coordsAtPos(p,-1),S=0;v&&(S=e.inputState.lastTouchY<=v.bottom?-1:1),this.newSel=J.create([J.cursor(p,S)])}else this.newSel=J.single(g,p)}}}function bv(s,e,n,a){if(s.isComposite()){let l=-1,c=-1,u=-1,f=-1;for(let h=0,p=a,g=a;h<s.children.length;h++){let b=s.children[h],v=p+b.length;if(p<e&&v>n)return bv(b,e,n,p);if(v>=e&&l==-1&&(l=h,c=p),p>n&&b.dom.parentNode==s.dom){u=h,f=g;break}g=v,p=v+b.breakAfter}return{from:c,to:f<0?a+s.length:f,startDOM:(l?s.children[l-1].dom.nextSibling:null)||s.dom.firstChild,endDOM:u<s.children.length&&u>=0?s.children[u].dom:null}}else return s.isText()?{from:a,to:a+s.length,startDOM:s.dom,endDOM:s.dom.nextSibling}:null}function vv(s,e){let n,{newSel:a}=e,{state:l}=s,c=l.selection.main,u=s.inputState.lastKeyTime>Date.now()-100?s.inputState.lastKeyCode:-1;if(e.bounds){let{from:f,to:h}=e.bounds,p=c.from,g=null;(u===8||P.android&&e.text.length<h-f)&&(p=c.to,g="end");let b=l.doc.sliceString(f,h,ka),v,S;!c.empty&&c.from>=f&&c.to<=h&&(e.typeOver||b!=e.text)&&b.slice(0,c.from-f)==e.text.slice(0,c.from-f)&&b.slice(c.to-f)==e.text.slice(v=e.text.length-(b.length-(c.to-f)))?n={from:c.from,to:c.to,insert:Be.of(e.text.slice(c.from-f,v).split(ka))}:(S=xv(b,e.text,p-f,g))&&(P.chrome&&u==13&&S.toB==S.from+2&&e.text.slice(S.from,S.toB)==ka+ka&&S.toB--,n={from:f+S.from,to:f+S.toA,insert:Be.of(e.text.slice(S.from,S.toB).split(ka))})}else a&&(!s.hasFocus&&l.facet(ai)||lc(a,c))&&(a=null);if(!n&&!a)return!1;if((P.mac||P.android)&&n&&n.from==n.to&&n.from==c.head-1&&/^\. ?$/.test(n.insert.toString())&&s.contentDOM.getAttribute("autocorrect")=="off"?(a&&n.insert.length==2&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:n.from,to:n.to,insert:Be.of([n.insert.toString().replace("."," ")])}):l.doc.lineAt(c.from).to<c.to&&s.docView.lineHasWidget(c.to)&&s.inputState.insertingTextAt>Date.now()-50?n={from:c.from,to:c.to,insert:l.toText(s.inputState.insertingText)}:P.chrome&&n&&n.from==n.to&&n.from==c.head&&n.insert.toString()==`
 `&&s.lineWrapping&&(a&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:c.from,to:c.to,insert:Be.of([" "])}),n)return Oh(s,n,a,u);if(a&&!lc(a,c)){let f=!1,h="select";return s.inputState.lastSelectionTime>Date.now()-50&&(s.inputState.lastSelectionOrigin=="select"&&(f=!0),h=s.inputState.lastSelectionOrigin,h=="select.pointer"&&(a=yv(l.facet(ul).map(p=>p(s)),a))),s.dispatch({selection:a,scrollIntoView:f,userEvent:h}),!0}else return!1}function Oh(s,e,n,a=-1){if(P.ios&&s.inputState.flushIOSKey(e))return!0;let l=s.state.selection.main;if(P.android&&(e.to==l.to&&(e.from==l.from||e.from==l.from-1&&s.state.sliceDoc(e.from,l.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&Ca(s.contentDOM,"Enter",13)||(e.from==l.from-1&&e.to==l.to&&e.insert.length==0||a==8&&e.insert.length<e.to-e.from&&e.to>l.head)&&Ca(s.contentDOM,"Backspace",8)||e.from==l.from&&e.to==l.to+1&&e.insert.length==0&&Ca(s.contentDOM,"Delete",46)))return!0;let c=e.insert.toString();s.inputState.composing>=0&&s.inputState.composing++;let u,f=()=>u||(u=Ok(s,e,n));return s.state.facet(sv).some(h=>h(s,e.from,e.to,c,f))||s.dispatch(f()),!0}function Ok(s,e,n){let a,l=s.state,c=l.selection.main,u=-1;if(e.from==e.to&&e.from<c.from||e.from>c.to){let h=e.from<c.from?-1:1,p=h<0?c.from:c.to,g=Zr(l.facet(ul).map(b=>b(s)),p,h);e.from==g&&(u=g)}if(u>-1)a={changes:e,selection:J.cursor(e.from+e.insert.length,-1)};else if(e.from>=c.from&&e.to<=c.to&&e.to-e.from>=(c.to-c.from)/3&&(!n||n.main.empty&&n.main.from==e.from+e.insert.length)&&s.inputState.composing<0){let h=c.from<e.from?l.sliceDoc(c.from,e.from):"",p=c.to>e.to?l.sliceDoc(e.to,c.to):"";a=l.replaceSelection(s.state.toText(h+e.insert.sliceString(0,void 0,s.state.lineBreak)+p))}else{let h=l.changes(e),p=n&&n.main.to<=h.newLength?n.main:void 0;if(l.selection.ranges.length>1&&(s.inputState.composing>=0||s.inputState.compositionPendingChange)&&e.to<=c.to+10&&e.to>=c.to-10){let g=s.state.sliceDoc(e.from,e.to),b,v=n&&gv(s,n.main.head);if(v){let k=e.insert.length-(e.to-e.from);b={from:v.from,to:v.to-k}}else b=s.state.doc.lineAt(c.head);let S=c.to-e.to;a=l.changeByRange(k=>{if(k.from==c.from&&k.to==c.to)return{changes:h,range:p||k.map(h)};let T=k.to-S,C=T-g.length;if(s.state.sliceDoc(C,T)!=g||T>=b.from&&C<=b.to)return{range:k};let _=l.changes({from:C,to:T,insert:e.insert}),U=k.to-c.to;return{changes:_,range:p?J.range(Math.max(0,p.anchor+U),Math.max(0,p.head+U)):k.map(_)}})}else a={changes:h,selection:p&&l.selection.replaceRange(p)}}let f="input.type";return(s.composing||s.inputState.compositionPendingChange&&s.inputState.compositionEndedAt>Date.now()-50)&&(s.inputState.compositionPendingChange=!1,f+=".compose",s.inputState.compositionFirstChange&&(f+=".start",s.inputState.compositionFirstChange=!1)),l.update(a,{userEvent:f,scrollIntoView:!0})}function xv(s,e,n,a){let l=Math.min(s.length,e.length),c=0;for(;c<l&&s.charCodeAt(c)==e.charCodeAt(c);)c++;if(c==l&&s.length==e.length)return null;let u=s.length,f=e.length;for(;u>0&&f>0&&s.charCodeAt(u-1)==e.charCodeAt(f-1);)u--,f--;if(a=="end"){let h=Math.max(0,c-Math.min(u,f));n-=u+h-c}if(u<c&&s.length<e.length){let h=n<=c&&n>=u?c-n:0;c-=h,f=c+(f-u),u=c}else if(f<c){let h=n<=c&&n>=f?c-n:0;c-=h,u=c+(u-f),f=c}return{from:c,toA:u,toB:f}}function Nk(s){let e=[];if(s.root.activeElement!=s.contentDOM)return e;let{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}=s.observer.selectionRange;return n&&(e.push(new S0(n,a)),(l!=n||c!=a)&&e.push(new S0(l,c))),e}function Dk(s,e){if(s.length==0)return null;let n=s[0].pos,a=s.length==2?s[1].pos:n;return n>-1&&a>-1?J.single(n+e,a+e):null}function lc(s,e){return e.head==s.main.head&&e.anchor==s.main.anchor}class jk{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,P.safari&&e.contentDOM.addEventListener("input",()=>null),P.gecko&&Qk(e.contentDOM.ownerDocument)}handleEvent(e){!Vk(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,n){let a=this.handlers[e];if(a){for(let l of a.observers)l(this.view,n);for(let l of a.handlers){if(n.defaultPrevented)break;if(l(this.view,n)){n.preventDefault();break}}}}ensureHandlers(e){let n=zk(e),a=this.handlers,l=this.view.contentDOM;for(let c in n)if(c!="scroll"){let u=!n[c].handlers.length,f=a[c];f&&u!=!f.handlers.length&&(l.removeEventListener(c,this.handleEvent),f=null),f||l.addEventListener(c,this.handleEvent,{passive:u})}for(let c in a)c!="scroll"&&!n[c]&&l.removeEventListener(c,this.handleEvent);this.handlers=n}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&wv.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),P.android&&P.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let n;return P.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&!e.shiftKey&&((n=Sv.find(a=>a.keyCode==e.keyCode))&&!e.ctrlKey||Bk.indexOf(e.key)>-1&&e.ctrlKey)?(this.pendingIOSKey=n||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let n=this.pendingIOSKey;return!n||n.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,Ca(this.view.contentDOM,n.key,n.keyCode,n instanceof KeyboardEvent?n:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:P.safari&&!P.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function w0(s,e){return(n,a)=>{try{return e.call(s,a,n)}catch(l){li(n.state,l)}}}function zk(s){let e=Object.create(null);function n(a){return e[a]||(e[a]={observers:[],handlers:[]})}for(let a of s){let l=a.spec,c=l&&l.plugin.domEventHandlers,u=l&&l.plugin.domEventObservers;if(c)for(let f in c){let h=c[f];h&&n(f).handlers.push(w0(a.value,h))}if(u)for(let f in u){let h=u[f];h&&n(f).observers.push(w0(a.value,h))}}for(let a in En)n(a).handlers.push(En[a]);for(let a in Pt)n(a).observers.push(Pt[a]);return e}const Sv=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],Bk="dthko",wv=[16,17,18,20,91,92,224,225],zo=6;function Bo(s){return Math.max(0,s)*.7+8}function Lk(s,e){return Math.max(Math.abs(s.clientX-e.clientX),Math.abs(s.clientY-e.clientY))}class _k{constructor(e,n,a,l){this.view=e,this.startEvent=n,this.style=a,this.mustSelect=l,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=n,this.scrollParents=Yb(e.contentDOM),this.atoms=e.state.facet(ul).map(u=>u(e));let c=e.contentDOM.ownerDocument;c.addEventListener("mousemove",this.move=this.move.bind(this)),c.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=n.shiftKey,this.multiple=e.state.facet(Ke.allowMultipleSelections)&&Hk(e,n),this.dragging=Uk(e,n)&&Av(n)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Lk(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let n=0,a=0,l=0,c=0,u=this.view.win.innerWidth,f=this.view.win.innerHeight;this.scrollParents.x&&({left:l,right:u}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:c,bottom:f}=this.scrollParents.y.getBoundingClientRect());let h=mv(this.view);e.clientX-h.left<=l+zo?n=-Bo(l-e.clientX):e.clientX+h.right>=u-zo&&(n=Bo(e.clientX-u)),e.clientY-h.top<=c+zo?a=-Bo(c-e.clientY):e.clientY+h.bottom>=f-zo&&(a=Bo(e.clientY-f)),this.setScrollSpeed(n,a)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,n){this.scrollSpeed={x:e,y:n},e||n?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:n}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),n&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=n,n=0),(e||n)&&this.view.win.scrollBy(e,n),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:n}=this,a=yv(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!a.eq(n.state.selection,this.dragging===!1))&&this.view.dispatch({selection:a,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(n=>n.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function Hk(s,e){let n=s.state.facet(ev);return n.length?n[0](e):P.mac?e.metaKey:e.ctrlKey}function qk(s,e){let n=s.state.facet(tv);return n.length?n[0](e):P.mac?!e.altKey:!e.ctrlKey}function Uk(s,e){let{main:n}=s.state.selection;if(n.empty)return!1;let a=sl(s.root);if(!a||a.rangeCount==0)return!0;let l=a.getRangeAt(0).getClientRects();for(let c=0;c<l.length;c++){let u=l[c];if(u.left<=e.clientX&&u.right>=e.clientX&&u.top<=e.clientY&&u.bottom>=e.clientY)return!0}return!1}function Vk(s,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let n=e.target,a;n!=s.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(a=st.get(n))&&a.isWidget()&&!a.isHidden&&a.widget.ignoreEvent(e))return!1;return!0}const En=Object.create(null),Pt=Object.create(null),kv=P.ie&&P.ie_version<15||P.ios&&P.webkit_version<604;function Gk(s){let e=s.dom.parentNode;if(!e)return;let n=e.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.focus(),setTimeout(()=>{s.focus(),n.remove(),Tv(s,n.value)},50)}function Tc(s,e,n){for(let a of s.facet(e))n=a(n,s);return n}function Tv(s,e){e=Tc(s.state,Eh,e);let{state:n}=s,a,l=1,c=n.toText(e),u=c.lines==n.selection.ranges.length;if(th!=null&&n.selection.ranges.every(h=>h.empty)&&th==c.toString()){let h=-1;a=n.changeByRange(p=>{let g=n.doc.lineAt(p.from);if(g.from==h)return{range:p};h=g.from;let b=n.toText((u?c.line(l++).text:e)+n.lineBreak);return{changes:{from:g.from,insert:b},range:J.cursor(p.from+b.length)}})}else u?a=n.changeByRange(h=>{let p=c.line(l++);return{changes:{from:h.from,to:h.to,insert:p.text},range:J.cursor(h.from+p.length)}}):a=n.replaceSelection(c);s.dispatch(a,{userEvent:"input.paste",scrollIntoView:!0})}Pt.scroll=s=>{s.inputState.lastScrollTop=s.scrollDOM.scrollTop,s.inputState.lastScrollLeft=s.scrollDOM.scrollLeft};Pt.wheel=Pt.mousewheel=s=>{s.inputState.lastWheelEvent=Date.now()};En.keydown=(s,e)=>(s.inputState.setSelectionOrigin("select"),e.keyCode==27&&s.inputState.tabFocusMode!=0&&(s.inputState.tabFocusMode=Date.now()+2e3),!1);Pt.touchstart=(s,e)=>{let n=s.inputState,a=e.targetTouches[0];n.lastTouchTime=Date.now(),a&&(n.lastTouchX=a.clientX,n.lastTouchY=a.clientY),n.setSelectionOrigin("select.pointer")};Pt.touchmove=s=>{s.inputState.setSelectionOrigin("select.pointer")};En.mousedown=(s,e)=>{if(s.observer.flush(),s.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let a of s.state.facet(nv))if(n=a(s,e),n)break;if(!n&&e.button==0&&(n=Yk(s,e)),n){let a=!s.hasFocus;s.inputState.startMouseSelection(new _k(s,e,n,a)),a&&s.observer.ignore(()=>{Kb(s.contentDOM);let c=s.root.activeElement;c&&!c.contains(s.contentDOM)&&c.blur()});let l=s.inputState.mouseSelection;if(l)return l.start(e),l.dragging===!1}else s.inputState.setSelectionOrigin("select.pointer");return!1};function k0(s,e,n,a){if(a==1)return J.cursor(e,n);if(a==2)return xk(s.state,e,n);{let l=s.docView.lineAt(e,n),c=s.state.doc.lineAt(l?l.posAtEnd:e),u=l?l.posAtStart:c.from,f=l?l.posAtEnd:c.to;return f<s.state.doc.length&&f==c.to&&f++,J.range(u,f)}}const $k=P.ie&&P.ie_version<=11;let T0=null,A0=0,E0=0;function Av(s){if(!$k)return s.detail;let e=T0,n=E0;return T0=s,E0=Date.now(),A0=!e||n>Date.now()-400&&Math.abs(e.clientX-s.clientX)<2&&Math.abs(e.clientY-s.clientY)<2?(A0+1)%3:1}function Yk(s,e){let n=s.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),a=Av(e),l=s.state.selection;return{update(c){c.docChanged&&(n.pos=c.changes.mapPos(n.pos),l=l.map(c.changes))},get(c,u,f){let h=s.posAndSideAtCoords({x:c.clientX,y:c.clientY},!1),p,g=k0(s,h.pos,h.assoc,a);if(n.pos!=h.pos&&!u){let b=k0(s,n.pos,n.assoc,a),v=Math.min(b.from,g.from),S=Math.max(b.to,g.to);g=v<g.from?J.range(v,S,g.assoc):J.range(S,v,g.assoc)}return u?l.replaceRange(l.main.extend(g.from,g.to,g.assoc)):f&&a==1&&l.ranges.length>1&&(p=Kk(l,h.pos))?p:f?l.addRange(g):J.create([g])}}}function Kk(s,e){for(let n=0;n<s.ranges.length;n++){let{from:a,to:l}=s.ranges[n];if(a<=e&&l>=e)return J.create(s.ranges.slice(0,n).concat(s.ranges.slice(n+1)),s.mainIndex==n?0:s.mainIndex-(s.mainIndex>n?1:0))}return null}En.dragstart=(s,e)=>{let{selection:{main:n}}=s.state;if(e.target.draggable){let l=s.docView.tile.nearest(e.target);if(l&&l.isWidget()){let c=l.posAtStart,u=c+l.length;(c>=n.to||u<=n.from)&&(n=J.range(c,u))}}let{inputState:a}=s;return a.mouseSelection&&(a.mouseSelection.dragging=!0),a.draggedContent=n,e.dataTransfer&&(e.dataTransfer.setData("Text",Tc(s.state,Mh,s.state.sliceDoc(n.from,n.to))),e.dataTransfer.effectAllowed="copyMove"),!1};En.dragend=s=>(s.inputState.draggedContent=null,!1);function M0(s,e,n,a){if(n=Tc(s.state,Eh,n),!n)return;let l=s.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:c}=s.inputState,u=a&&c&&qk(s,e)?{from:c.from,to:c.to}:null,f={from:l,insert:n},h=s.state.changes(u?[u,f]:f);s.focus(),s.dispatch({changes:h,selection:{anchor:h.mapPos(l,-1),head:h.mapPos(l,1)},userEvent:u?"move.drop":"input.drop"}),s.inputState.draggedContent=null}En.drop=(s,e)=>{if(!e.dataTransfer)return!1;if(s.state.readOnly)return!0;let n=e.dataTransfer.files;if(n&&n.length){let a=Array(n.length),l=0,c=()=>{++l==n.length&&M0(s,e,a.filter(u=>u!=null).join(s.state.lineBreak),!1)};for(let u=0;u<n.length;u++){let f=new FileReader;f.onerror=c,f.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(f.result)||(a[u]=f.result),c()},f.readAsText(n[u])}return!0}else{let a=e.dataTransfer.getData("Text");if(a)return M0(s,e,a,!0),!0}return!1};En.paste=(s,e)=>{if(s.state.readOnly)return!0;s.observer.flush();let n=kv?null:e.clipboardData;return n?(Tv(s,n.getData("text/plain")||n.getData("text/uri-list")),!0):(Gk(s),!1)};function Wk(s,e){let n=s.dom.parentNode;if(!n)return;let a=n.appendChild(document.createElement("textarea"));a.style.cssText="position: fixed; left: -10000px; top: 10px",a.value=e,a.focus(),a.selectionEnd=e.length,a.selectionStart=0,setTimeout(()=>{a.remove(),s.focus()},50)}function Xk(s){let e=[],n=[],a=!1;for(let l of s.selection.ranges)l.empty||(e.push(s.sliceDoc(l.from,l.to)),n.push(l));if(!e.length){let l=-1;for(let{from:c}of s.selection.ranges){let u=s.doc.lineAt(c);u.number>l&&(e.push(u.text),n.push({from:u.from,to:Math.min(s.doc.length,u.to+1)})),l=u.number}a=!0}return{text:Tc(s,Mh,e.join(s.lineBreak)),ranges:n,linewise:a}}let th=null;En.copy=En.cut=(s,e)=>{if(!Qr(s.contentDOM,s.observer.selectionRange))return!1;let{text:n,ranges:a,linewise:l}=Xk(s.state);if(!n&&!l)return!1;th=l?n:null,e.type=="cut"&&!s.state.readOnly&&s.dispatch({changes:a,scrollIntoView:!0,userEvent:"delete.cut"});let c=kv?null:e.clipboardData;return c?(c.clearData(),c.setData("text/plain",n),!0):(Wk(s,n),!1)};const Ev=Ha.define();function Mv(s,e){let n=[];for(let a of s.facet(av)){let l=a(s,e);l&&n.push(l)}return n.length?s.update({effects:n,annotations:Ev.of(!0)}):null}function Rv(s){setTimeout(()=>{let e=s.hasFocus;if(e!=s.inputState.notifiedFocused){let n=Mv(s.state,e);n?s.dispatch(n):s.update([])}},10)}Pt.focus=s=>{s.inputState.lastFocusTime=Date.now(),!s.scrollDOM.scrollTop&&(s.inputState.lastScrollTop||s.inputState.lastScrollLeft)&&(s.scrollDOM.scrollTop=s.inputState.lastScrollTop,s.scrollDOM.scrollLeft=s.inputState.lastScrollLeft),Rv(s)};Pt.blur=s=>{s.observer.clearSelectionRange(),Rv(s)};Pt.compositionstart=Pt.compositionupdate=s=>{s.observer.editContext||(s.inputState.compositionFirstChange==null&&(s.inputState.compositionFirstChange=!0),s.inputState.composing<0&&(s.inputState.composing=0))};Pt.compositionend=s=>{s.observer.editContext||(s.inputState.composing=-1,s.inputState.compositionEndedAt=Date.now(),s.inputState.compositionPendingKey=!0,s.inputState.compositionPendingChange=s.observer.pendingRecords().length>0,s.inputState.compositionFirstChange=null,P.chrome&&P.android?s.observer.flushSoon():s.inputState.compositionPendingChange?Promise.resolve().then(()=>s.observer.flush()):setTimeout(()=>{s.inputState.composing<0&&s.docView.hasComposition&&s.update([])},50))};Pt.contextmenu=s=>{s.inputState.lastContextMenu=Date.now()};En.beforeinput=(s,e)=>{var n,a;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(s.inputState.insertingText=e.data,s.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&s.observer.editContext){let c=(n=e.dataTransfer)===null||n===void 0?void 0:n.getData("text/plain"),u=e.getTargetRanges();if(c&&u.length){let f=u[0],h=s.posAtDOM(f.startContainer,f.startOffset),p=s.posAtDOM(f.endContainer,f.endOffset);return Oh(s,{from:h,to:p,insert:s.state.toText(c)},null),!0}}let l;if(P.chrome&&P.android&&(l=Sv.find(c=>c.inputType==e.inputType))&&(s.observer.delayAndroidKey(l.key,l.keyCode),l.key=="Backspace"||l.key=="Delete")){let c=((a=window.visualViewport)===null||a===void 0?void 0:a.height)||0;setTimeout(()=>{var u;(((u=window.visualViewport)===null||u===void 0?void 0:u.height)||0)>c+10&&s.hasFocus&&(s.contentDOM.blur(),s.focus())},100)}return P.ios&&e.inputType=="deleteContentForward"&&s.observer.flushSoon(),P.safari&&e.inputType=="insertText"&&s.inputState.composing>=0&&setTimeout(()=>Pt.compositionend(s,e),20),!1};const R0=new Set;function Qk(s){R0.has(s)||(R0.add(s),s.addEventListener("copy",()=>{}),s.addEventListener("cut",()=>{}))}const C0=["pre-wrap","normal","pre-line","break-spaces"];let Ba=!1;function O0(){Ba=!1}class Fk{constructor(e){this.lineWrapping=e,this.doc=Be.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,n){let a=this.doc.lineAt(n).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(a+=Math.max(0,Math.ceil((n-e-a*this.lineLength*.5)/this.lineLength))),this.lineHeight*a}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return C0.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let n=!1;for(let a=0;a<e.length;a++){let l=e[a];l<0?a++:this.heightSamples[Math.floor(l*10)]||(n=!0,this.heightSamples[Math.floor(l*10)]=!0)}return n}refresh(e,n,a,l,c,u){let f=C0.indexOf(e)>-1,h=Math.abs(n-this.lineHeight)>.3||this.lineWrapping!=f;if(this.lineWrapping=f,this.lineHeight=n,this.charWidth=a,this.textHeight=l,this.lineLength=c,h){this.heightSamples={};for(let p=0;p<u.length;p++){let g=u[p];g<0?p++:this.heightSamples[Math.floor(g*10)]=!0}}return h}}class Zk{constructor(e,n){this.from=e,this.heights=n,this.index=0}get more(){return this.index<this.heights.length}}class Tn{constructor(e,n,a,l,c){this.from=e,this.length=n,this.top=a,this.height=l,this._content=c}get type(){return typeof this._content=="number"?Nt.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof Es?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new Tn(this.from,this.length+e.length,this.top,this.height+e.height,n)}}var Fe=(function(s){return s[s.ByPos=0]="ByPos",s[s.ByHeight=1]="ByHeight",s[s.ByPosNoHeight=2]="ByPosNoHeight",s})(Fe||(Fe={}));const Qo=.001;class Vt{constructor(e,n,a=2){this.length=e,this.height=n,this.flags=a}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Qo&&(Ba=!0),this.height=e)}replace(e,n,a){return Vt.of(a)}decomposeLeft(e,n){n.push(this)}decomposeRight(e,n){n.push(this)}applyChanges(e,n,a,l){let c=this,u=a.doc;for(let f=l.length-1;f>=0;f--){let{fromA:h,toA:p,fromB:g,toB:b}=l[f],v=c.lineAt(h,Fe.ByPosNoHeight,a.setDoc(n),0,0),S=v.to>=p?v:c.lineAt(p,Fe.ByPosNoHeight,a,0,0);for(b+=S.to-p,p=S.to;f>0&&v.from<=l[f-1].toA;)h=l[f-1].fromA,g=l[f-1].fromB,f--,h<v.from&&(v=c.lineAt(h,Fe.ByPosNoHeight,a,0,0));g+=v.from-h,h=v.from;let k=Nh.build(a.setDoc(u),e,g,b);c=oc(c,c.replace(h,p,k))}return c.updateHeight(a,0)}static empty(){return new rn(0,0,0)}static of(e){if(e.length==1)return e[0];let n=0,a=e.length,l=0,c=0;for(;;)if(n==a)if(l>c*2){let f=e[n-1];f.break?e.splice(--n,1,f.left,null,f.right):e.splice(--n,1,f.left,f.right),a+=1+f.break,l-=f.size}else if(c>l*2){let f=e[a];f.break?e.splice(a,1,f.left,null,f.right):e.splice(a,1,f.left,f.right),a+=2+f.break,c-=f.size}else break;else if(l<c){let f=e[n++];f&&(l+=f.size)}else{let f=e[--a];f&&(c+=f.size)}let u=0;return e[n-1]==null?(u=1,n--):e[n]==null&&(u=1,a++),new Jk(Vt.of(e.slice(0,n)),u,Vt.of(e.slice(a)))}}function oc(s,e){return s==e?s:(s.constructor!=e.constructor&&(Ba=!0),e)}Vt.prototype.size=1;const Pk=Dt.replace({});class Cv extends Vt{constructor(e,n,a){super(e,n),this.deco=a,this.spaceAbove=0}mainBlock(e,n){return new Tn(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,n,a,l){return this.spaceAbove&&e<a+this.spaceAbove?new Tn(l,0,a,this.spaceAbove,Pk):this.mainBlock(a,l)}lineAt(e,n,a,l,c){let u=this.mainBlock(l,c);return this.spaceAbove?this.blockAt(0,a,l,c).join(u):u}forEachLine(e,n,a,l,c,u){e<=c+this.length&&n>=c&&u(this.lineAt(0,Fe.ByPos,a,l,c))}setMeasuredHeight(e){let n=e.heights[e.index++];n<0?(this.spaceAbove=-n,n=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(n)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more&&this.setMeasuredHeight(l),this.outdated=!1,this}toString(){return`block(${this.length})`}}class rn extends Cv{constructor(e,n,a){super(e,n,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=a}mainBlock(e,n){return new Tn(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(e,n,a){let l=a[0];return a.length==1&&(l instanceof rn||l instanceof Ct&&l.flags&4)&&Math.abs(this.length-l.length)<10?(l instanceof Ct?l=new rn(l.length,this.height,this.spaceAbove):l.height=this.height,this.outdated||(l.outdated=!1),l):Vt.of(a)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more?this.setMeasuredHeight(l):(a||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Ct extends Vt{constructor(e){super(e,0)}heightMetrics(e,n){let a=e.doc.lineAt(n).number,l=e.doc.lineAt(n+this.length).number,c=l-a+1,u,f=0;if(e.lineWrapping){let h=Math.min(this.height,e.lineHeight*c);u=h/c,this.length>c+1&&(f=(this.height-h)/(this.length-c-1))}else u=this.height/c;return{firstLine:a,lastLine:l,perLine:u,perChar:f}}blockAt(e,n,a,l){let{firstLine:c,lastLine:u,perLine:f,perChar:h}=this.heightMetrics(n,l);if(n.lineWrapping){let p=l+(e<n.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-a)/this.height))*this.length)),g=n.doc.lineAt(p),b=f+g.length*h,v=Math.max(a,e-b/2);return new Tn(g.from,g.length,v,b,0)}else{let p=Math.max(0,Math.min(u-c,Math.floor((e-a)/f))),{from:g,length:b}=n.doc.line(c+p);return new Tn(g,b,a+f*p,f,0)}}lineAt(e,n,a,l,c){if(n==Fe.ByHeight)return this.blockAt(e,a,l,c);if(n==Fe.ByPosNoHeight){let{from:S,to:k}=a.doc.lineAt(e);return new Tn(S,k-S,0,0,0)}let{firstLine:u,perLine:f,perChar:h}=this.heightMetrics(a,c),p=a.doc.lineAt(e),g=f+p.length*h,b=p.number-u,v=l+f*b+h*(p.from-c-b);return new Tn(p.from,p.length,Math.max(l,Math.min(v,l+this.height-g)),g,0)}forEachLine(e,n,a,l,c,u){e=Math.max(e,c),n=Math.min(n,c+this.length);let{firstLine:f,perLine:h,perChar:p}=this.heightMetrics(a,c);for(let g=e,b=l;g<=n;){let v=a.doc.lineAt(g);if(g==e){let k=v.number-f;b+=h*k+p*(e-c-k)}let S=h+p*v.length;u(new Tn(v.from,v.length,b,S,0)),b+=S,g=v.to+1}}replace(e,n,a){let l=this.length-n;if(l>0){let c=a[a.length-1];c instanceof Ct?a[a.length-1]=new Ct(c.length+l):a.push(null,new Ct(l-1))}if(e>0){let c=a[0];c instanceof Ct?a[0]=new Ct(e+c.length):a.unshift(new Ct(e-1),null)}return Vt.of(a)}decomposeLeft(e,n){n.push(new Ct(e-1),null)}decomposeRight(e,n){n.push(null,new Ct(this.length-e-1))}updateHeight(e,n=0,a=!1,l){let c=n+this.length;if(l&&l.from<=n+this.length&&l.more){let u=[],f=Math.max(n,l.from),h=-1;for(l.from>n&&u.push(new Ct(l.from-n-1).updateHeight(e,n));f<=c&&l.more;){let g=e.doc.lineAt(f).length;u.length&&u.push(null);let b=l.heights[l.index++],v=0;b<0&&(v=-b,b=l.heights[l.index++]),h==-1?h=b:Math.abs(b-h)>=Qo&&(h=-2);let S=new rn(g,b,v);S.outdated=!1,u.push(S),f+=g+1}f<=c&&u.push(null,new Ct(c-f).updateHeight(e,f));let p=Vt.of(u);return(h<0||Math.abs(p.height-this.height)>=Qo||Math.abs(h-this.heightMetrics(e,n).perLine)>=Qo)&&(Ba=!0),oc(this,p)}else(a||this.outdated)&&(this.setHeight(e.heightForGap(n,n+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class Jk extends Vt{constructor(e,n,a){super(e.length+n+a.length,e.height+a.height,n|(e.outdated||a.outdated?2:0)),this.left=e,this.right=a,this.size=e.size+a.size}get break(){return this.flags&1}blockAt(e,n,a,l){let c=a+this.left.height;return e<c?this.left.blockAt(e,n,a,l):this.right.blockAt(e,n,c,l+this.left.length+this.break)}lineAt(e,n,a,l,c){let u=l+this.left.height,f=c+this.left.length+this.break,h=n==Fe.ByHeight?e<u:e<f,p=h?this.left.lineAt(e,n,a,l,c):this.right.lineAt(e,n,a,u,f);if(this.break||(h?p.to<f:p.from>f))return p;let g=n==Fe.ByPosNoHeight?Fe.ByPosNoHeight:Fe.ByPos;return h?p.join(this.right.lineAt(f,g,a,u,f)):this.left.lineAt(f,g,a,l,c).join(p)}forEachLine(e,n,a,l,c,u){let f=l+this.left.height,h=c+this.left.length+this.break;if(this.break)e<h&&this.left.forEachLine(e,n,a,l,c,u),n>=h&&this.right.forEachLine(e,n,a,f,h,u);else{let p=this.lineAt(h,Fe.ByPos,a,l,c);e<p.from&&this.left.forEachLine(e,p.from-1,a,l,c,u),p.to>=e&&p.from<=n&&u(p),n>p.to&&this.right.forEachLine(p.to+1,n,a,f,h,u)}}replace(e,n,a){let l=this.left.length+this.break;if(n<l)return this.balanced(this.left.replace(e,n,a),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-l,n-l,a));let c=[];e>0&&this.decomposeLeft(e,c);let u=c.length;for(let f of a)c.push(f);if(e>0&&N0(c,u-1),n<this.length){let f=c.length;this.decomposeRight(n,c),N0(c,f)}return Vt.of(c)}decomposeLeft(e,n){let a=this.left.length;if(e<=a)return this.left.decomposeLeft(e,n);n.push(this.left),this.break&&(a++,e>=a&&n.push(null)),e>a&&this.right.decomposeLeft(e-a,n)}decomposeRight(e,n){let a=this.left.length,l=a+this.break;if(e>=l)return this.right.decomposeRight(e-l,n);e<a&&this.left.decomposeRight(e,n),this.break&&e<l&&n.push(null),n.push(this.right)}balanced(e,n){return e.size>2*n.size||n.size>2*e.size?Vt.of(this.break?[e,null,n]:[e,n]):(this.left=oc(this.left,e),this.right=oc(this.right,n),this.setHeight(e.height+n.height),this.outdated=e.outdated||n.outdated,this.size=e.size+n.size,this.length=e.length+this.break+n.length,this)}updateHeight(e,n=0,a=!1,l){let{left:c,right:u}=this,f=n+c.length+this.break,h=null;return l&&l.from<=n+c.length&&l.more?h=c=c.updateHeight(e,n,a,l):c.updateHeight(e,n,a),l&&l.from<=f+u.length&&l.more?h=u=u.updateHeight(e,f,a,l):u.updateHeight(e,f,a),h?this.balanced(c,u):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function N0(s,e){let n,a;s[e]==null&&(n=s[e-1])instanceof Ct&&(a=s[e+1])instanceof Ct&&s.splice(e-1,3,new Ct(n.length+1+a.length))}const Ik=5;class Nh{constructor(e,n){this.pos=e,this.oracle=n,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,n){if(this.lineStart>-1){let a=Math.min(n,this.lineEnd),l=this.nodes[this.nodes.length-1];l instanceof rn?l.length+=a-this.pos:(a>this.pos||!this.isCovered)&&this.nodes.push(new rn(a-this.pos,-1,0)),this.writtenTo=a,n>a&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=n}point(e,n,a){if(e<n||a.heightRelevant){let l=a.widget?a.widget.estimatedHeight:0,c=a.widget?a.widget.lineBreaks:0;l<0&&(l=this.oracle.lineHeight);let u=n-e;a.block?this.addBlock(new Cv(u,l,a)):(u||c||l>=Ik)&&this.addLineDeco(l,c,u)}else n>e&&this.span(e,n);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:n}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=n,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new rn(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,n){let a=new Ct(n-e);return this.oracle.doc.lineAt(e).to==n&&(a.flags|=4),a}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof rn)return e;let n=new rn(0,-1,0);return this.nodes.push(n),n}addBlock(e){this.enterLine();let n=e.deco;n&&n.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,n&&n.endSide>0&&(this.covering=e)}addLineDeco(e,n,a){let l=this.ensureLine();l.length+=a,l.collapsed+=a,l.widgetHeight=Math.max(l.widgetHeight,e),l.breaks+=n,this.writtenTo=this.pos=this.pos+a}finish(e){let n=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(n instanceof rn)&&!this.isCovered?this.nodes.push(new rn(0,-1,0)):(this.writtenTo<this.pos||n==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let a=e;for(let l of this.nodes)l instanceof rn&&l.updateHeight(this.oracle,a),a+=l?l.length:1;return this.nodes}static build(e,n,a,l){let c=new Nh(a,e);return Re.spans(n,a,l,c,0),c.finish(a)}}function eT(s,e,n){let a=new tT;return Re.compare(s,e,n,a,0),a.changes}class tT{constructor(){this.changes=[]}compareRange(){}comparePoint(e,n,a,l){(e<n||a&&a.heightRelevant||l&&l.heightRelevant)&&Ra(e,n,this.changes,5)}}function nT(s,e){let n=s.getBoundingClientRect(),a=s.ownerDocument,l=a.defaultView||window,c=Math.max(0,n.left),u=Math.min(l.innerWidth,n.right),f=Math.max(0,n.top),h=Math.min(l.innerHeight,n.bottom);for(let p=s.parentNode;p&&p!=a.body;)if(p.nodeType==1){let g=p,b=window.getComputedStyle(g);if((g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth)&&b.overflow!="visible"){let v=g.getBoundingClientRect();c=Math.max(c,v.left),u=Math.min(u,v.right),f=Math.max(f,v.top),h=Math.min(p==s.parentNode?l.innerHeight:h,v.bottom)}p=b.position=="absolute"||b.position=="fixed"?g.offsetParent:g.parentNode}else if(p.nodeType==11)p=p.host;else break;return{left:c-n.left,right:Math.max(c,u)-n.left,top:f-(n.top+e),bottom:Math.max(f,h)-(n.top+e)}}function iT(s){let e=s.getBoundingClientRect(),n=s.ownerDocument.defaultView||window;return e.left<n.innerWidth&&e.right>0&&e.top<n.innerHeight&&e.bottom>0}function sT(s,e){let n=s.getBoundingClientRect();return{left:0,right:n.right-n.left,top:e,bottom:n.bottom-(n.top+e)}}class od{constructor(e,n,a,l){this.from=e,this.to=n,this.size=a,this.displaySize=l}static same(e,n){if(e.length!=n.length)return!1;for(let a=0;a<e.length;a++){let l=e[a],c=n[a];if(l.from!=c.from||l.to!=c.to||l.size!=c.size)return!1}return!0}draw(e,n){return Dt.replace({widget:new aT(this.displaySize*(n?e.scaleY:e.scaleX),n)}).range(this.from,this.to)}}class aT extends xc{constructor(e,n){super(),this.size=e,this.vertical=n}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class D0{constructor(e,n){this.view=e,this.state=n,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=j0,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=ot.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let a=n.facet(Rh).some(l=>typeof l!="function"&&l.class=="cm-lineWrapping");this.heightOracle=new Fk(a),this.stateDeco=z0(n),this.heightMap=Vt.empty().applyChanges(this.stateDeco,Be.empty,this.heightOracle.setDoc(n.doc),[new xn(0,0,0,n.doc.length)]);for(let l=0;l<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());l++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Dt.set(this.lineGaps.map(l=>l.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:n}=this.state.selection;for(let a=0;a<=1;a++){let l=a?n.head:n.anchor;if(!e.some(({from:c,to:u})=>l>=c&&l<=u)){let{from:c,to:u}=this.lineBlockAt(l);e.push(new Lo(c,u))}}return this.viewports=e.sort((a,l)=>a.from-l.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?j0:new Dh(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Gr(e,this.scaler))})}update(e,n=null){this.state=e.state;let a=this.stateDeco;this.stateDeco=z0(this.state);let l=e.changedRanges,c=xn.extendWithRanges(l,eT(a,this.stateDeco,e?e.changes:kt.empty(this.state.doc.length))),u=this.heightMap.height,f=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);O0(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),c),(this.heightMap.height!=u||Ba)&&(e.flags|=2),f?(this.scrollAnchorPos=e.changes.mapPos(f.from,-1),this.scrollAnchorHeight=f.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=u);let h=c.length?this.mapViewport(this.viewport,e.changes):this.viewport;(n&&(n.range.head<h.from||n.range.head>h.to)||!this.viewportIsAppropriate(h))&&(h=this.getViewport(0,n));let p=h.from!=this.viewport.from||h.to!=this.viewport.to;this.viewport=h,e.flags|=this.updateForViewport(),(p||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),n&&(this.scrollTarget=n),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(lv)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,n=e.contentDOM,a=window.getComputedStyle(n),l=this.heightOracle,c=a.whiteSpace;this.defaultTextDirection=a.direction=="rtl"?ot.RTL:ot.LTR;let u=this.heightOracle.mustRefreshForWrapping(c)||this.mustMeasureContent==="refresh",f=n.getBoundingClientRect(),h=u||this.mustMeasureContent||this.contentDOMHeight!=f.height;this.contentDOMHeight=f.height,this.mustMeasureContent=!1;let p=0,g=0;if(f.width&&f.height){let{scaleX:B,scaleY:W}=$b(n,f);(B>.005&&Math.abs(this.scaleX-B)>.005||W>.005&&Math.abs(this.scaleY-W)>.005)&&(this.scaleX=B,this.scaleY=W,p|=16,u=h=!0)}let b=(parseInt(a.paddingTop)||0)*this.scaleY,v=(parseInt(a.paddingBottom)||0)*this.scaleY;(this.paddingTop!=b||this.paddingBottom!=v)&&(this.paddingTop=b,this.paddingBottom=v,p|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(l.lineWrapping&&(h=!0),this.editorWidth=e.scrollDOM.clientWidth,p|=16);let S=Yb(this.view.contentDOM,!1).y;S!=this.scrollParent&&(this.scrollParent=S,this.scrollAnchorHeight=-1,this.scrollOffset=0);let k=this.getScrollOffset();this.scrollOffset!=k&&(this.scrollAnchorHeight=-1,this.scrollOffset=k),this.scrolledToBottom=Wb(this.scrollParent||e.win);let T=(this.printing?sT:nT)(n,this.paddingTop),C=T.top-this.pixelViewport.top,_=T.bottom-this.pixelViewport.bottom;this.pixelViewport=T;let U=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(U!=this.inView&&(this.inView=U,U&&(h=!0)),!this.inView&&!this.scrollTarget&&!iT(e.dom))return 0;let K=f.width;if((this.contentDOMWidth!=K||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=f.width,this.editorHeight=e.scrollDOM.clientHeight,p|=16),h){let B=e.docView.measureVisibleLineHeights(this.viewport);if(l.mustRefreshForHeights(B)&&(u=!0),u||l.lineWrapping&&Math.abs(K-this.contentDOMWidth)>l.charWidth){let{lineHeight:W,charWidth:X,textHeight:te}=e.docView.measureTextSize();u=W>0&&l.refresh(c,W,X,te,Math.max(5,K/X),B),u&&(e.docView.minWidth=0,p|=16)}C>0&&_>0?g=Math.max(C,_):C<0&&_<0&&(g=Math.min(C,_)),O0();for(let W of this.viewports){let X=W.from==this.viewport.from?B:e.docView.measureVisibleLineHeights(W);this.heightMap=(u?Vt.empty().applyChanges(this.stateDeco,Be.empty,this.heightOracle,[new xn(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(l,0,u,new Zk(W.from,X))}Ba&&(p|=2)}let $=!this.viewportIsAppropriate(this.viewport,g)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return $&&(p&2&&(p|=this.updateScaler()),this.viewport=this.getViewport(g,this.scrollTarget),p|=this.updateForViewport()),(p&2||$)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(u?[]:this.lineGaps,e)),p|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),p}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,n){let a=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),l=this.heightMap,c=this.heightOracle,{visibleTop:u,visibleBottom:f}=this,h=new Lo(l.lineAt(u-a*1e3,Fe.ByHeight,c,0,0).from,l.lineAt(f+(1-a)*1e3,Fe.ByHeight,c,0,0).to);if(n){let{head:p}=n.range;if(p<h.from||p>h.to){let g=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),b=l.lineAt(p,Fe.ByPos,c,0,0),v;n.y=="center"?v=(b.top+b.bottom)/2-g/2:n.y=="start"||n.y=="nearest"&&p<h.from?v=b.top:v=b.bottom-g,h=new Lo(l.lineAt(v-1e3/2,Fe.ByHeight,c,0,0).from,l.lineAt(v+g+1e3/2,Fe.ByHeight,c,0,0).to)}}return h}mapViewport(e,n){let a=n.mapPos(e.from,-1),l=n.mapPos(e.to,1);return new Lo(this.heightMap.lineAt(a,Fe.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(l,Fe.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:n},a=0){if(!this.inView)return!0;let{top:l}=this.heightMap.lineAt(e,Fe.ByPos,this.heightOracle,0,0),{bottom:c}=this.heightMap.lineAt(n,Fe.ByPos,this.heightOracle,0,0),{visibleTop:u,visibleBottom:f}=this;return(e==0||l<=u-Math.max(10,Math.min(-a,250)))&&(n==this.state.doc.length||c>=f+Math.max(10,Math.min(a,250)))&&l>u-2*1e3&&c<f+2*1e3}mapLineGaps(e,n){if(!e.length||n.empty)return e;let a=[];for(let l of e)n.touchesRange(l.from,l.to)||a.push(new od(n.mapPos(l.from),n.mapPos(l.to),l.size,l.displaySize));return a}ensureLineGaps(e,n){let a=this.heightOracle.lineWrapping,l=a?1e4:2e3,c=l>>1,u=l<<1;if(this.defaultTextDirection!=ot.LTR&&!a)return[];let f=[],h=(g,b,v,S)=>{if(b-g<c)return;let k=this.state.selection.main,T=[k.from];k.empty||T.push(k.to);for(let _ of T)if(_>g&&_<b){h(g,_-10,v,S),h(_+10,b,v,S);return}let C=lT(e,_=>_.from>=v.from&&_.to<=v.to&&Math.abs(_.from-g)<c&&Math.abs(_.to-b)<c&&!T.some(U=>_.from<U&&_.to>U));if(!C){if(b<v.to&&n&&a&&n.visibleRanges.some(K=>K.from<=b&&K.to>=b)){let K=n.moveToLineBoundary(J.cursor(b),!1,!0).head;K>g&&(b=K)}let _=this.gapSize(v,g,b,S),U=a||_<2e6?_:2e6;C=new od(g,b,_,U)}f.push(C)},p=g=>{if(g.length<u||g.type!=Nt.Text)return;let b=rT(g.from,g.to,this.stateDeco);if(b.total<u)return;let v=this.scrollTarget?this.scrollTarget.range.head:null,S,k;if(a){let T=l/this.heightOracle.lineLength*this.heightOracle.lineHeight,C,_;if(v!=null){let U=Ho(b,v),K=((this.visibleBottom-this.visibleTop)/2+T)/g.height;C=U-K,_=U+K}else C=(this.visibleTop-g.top-T)/g.height,_=(this.visibleBottom-g.top+T)/g.height;S=_o(b,C),k=_o(b,_)}else{let T=b.total*this.heightOracle.charWidth,C=l*this.heightOracle.charWidth,_=0;if(T>2e6)for(let W of e)W.from>=g.from&&W.from<g.to&&W.size!=W.displaySize&&W.from*this.heightOracle.charWidth+_<this.pixelViewport.left&&(_=W.size-W.displaySize);let U=this.pixelViewport.left+_,K=this.pixelViewport.right+_,$,B;if(v!=null){let W=Ho(b,v),X=((K-U)/2+C)/T;$=W-X,B=W+X}else $=(U-C)/T,B=(K+C)/T;S=_o(b,$),k=_o(b,B)}S>g.from&&h(g.from,S,g,b),k<g.to&&h(k,g.to,g,b)};for(let g of this.viewportLines)Array.isArray(g.type)?g.type.forEach(p):p(g);return f}gapSize(e,n,a,l){let c=Ho(l,a)-Ho(l,n);return this.heightOracle.lineWrapping?e.height*c:l.total*this.heightOracle.charWidth*c}updateLineGaps(e){od.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Dt.set(e.map(n=>n.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let n=this.stateDeco;this.lineGaps.length&&(n=n.concat(this.lineGapDeco));let a=[];Re.spans(n,this.viewport.from,this.viewport.to,{span(c,u){a.push({from:c,to:u})},point(){}},20);let l=0;if(a.length!=this.visibleRanges.length)l=12;else for(let c=0;c<a.length&&!(l&8);c++){let u=this.visibleRanges[c],f=a[c];(u.from!=f.from||u.to!=f.to)&&(l|=4,e&&e.mapPos(u.from,-1)==f.from&&e.mapPos(u.to,1)==f.to||(l|=8))}return this.visibleRanges=a,l}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(n=>n.from<=e&&n.to>=e)||Gr(this.heightMap.lineAt(e,Fe.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(n=>n.top<=e&&n.bottom>=e)||Gr(this.heightMap.lineAt(this.scaler.fromDOM(e),Fe.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let n=this.lineBlockAtHeight(e+8);return n.from>=this.viewport.from||this.viewportLines[0].top-e>200?n:this.viewportLines[0]}elementAtHeight(e){return Gr(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Lo{constructor(e,n){this.from=e,this.to=n}}function rT(s,e,n){let a=[],l=s,c=0;return Re.spans(n,s,e,{span(){},point(u,f){u>l&&(a.push({from:l,to:u}),c+=u-l),l=f}},20),l<e&&(a.push({from:l,to:e}),c+=e-l),{total:c,ranges:a}}function _o({total:s,ranges:e},n){if(n<=0)return e[0].from;if(n>=1)return e[e.length-1].to;let a=Math.floor(s*n);for(let l=0;;l++){let{from:c,to:u}=e[l],f=u-c;if(a<=f)return c+a;a-=f}}function Ho(s,e){let n=0;for(let{from:a,to:l}of s.ranges){if(e<=l){n+=e-a;break}n+=l-a}return n/s.total}function lT(s,e){for(let n of s)if(e(n))return n}const j0={toDOM(s){return s},fromDOM(s){return s},scale:1,eq(s){return s==this}};function z0(s){let e=s.facet(Sc).filter(a=>typeof a!="function"),n=s.facet(Ch).filter(a=>typeof a!="function");return n.length&&e.push(Re.join(n)),e}class Dh{constructor(e,n,a){let l=0,c=0,u=0;this.viewports=a.map(({from:f,to:h})=>{let p=n.lineAt(f,Fe.ByPos,e,0,0).top,g=n.lineAt(h,Fe.ByPos,e,0,0).bottom;return l+=g-p,{from:f,to:h,top:p,bottom:g,domTop:0,domBottom:0}}),this.scale=(7e6-l)/(n.height-l);for(let f of this.viewports)f.domTop=u+(f.top-c)*this.scale,u=f.domBottom=f.domTop+(f.bottom-f.top),c=f.bottom}toDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.top)return l+(e-a)*this.scale;if(e<=c.bottom)return c.domTop+(e-c.top);a=c.bottom,l=c.domBottom}}fromDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.domTop)return a+(e-l)/this.scale;if(e<=c.domBottom)return c.top+(e-c.domTop);a=c.bottom,l=c.domBottom}}eq(e){return e instanceof Dh?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((n,a)=>n.from==e.viewports[a].from&&n.to==e.viewports[a].to):!1}}function Gr(s,e){if(e.scale==1)return s;let n=e.toDOM(s.top),a=e.toDOM(s.bottom);return new Tn(s.from,s.length,n,a-n,Array.isArray(s._content)?s._content.map(l=>Gr(l,e)):s._content)}const qo=ue.define({combine:s=>s.join(" ")}),nh=ue.define({combine:s=>s.indexOf(!0)>-1}),ih=Da.newName(),Ov=Da.newName(),Nv=Da.newName(),Dv={"&light":"."+Ov,"&dark":"."+Nv};function sh(s,e,n){return new Da(e,{finish(a){return/&/.test(a)?a.replace(/&\w*/,l=>{if(l=="&")return s;if(!n||!n[l])throw new RangeError(`Unsupported selector: ${l}`);return n[l]}):s+" "+a}})}const oT=sh("."+ih,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Dv),cT={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},cd=P.ie&&P.ie_version<=11;class uT{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Uw,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(n=>{for(let a of n)this.queue.push(a);(P.ie&&P.ie_version<=11||P.ios&&e.composing)&&n.some(a=>a.type=="childList"&&a.removedNodes.length||a.type=="characterData"&&a.oldValue.length>a.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&P.android&&e.constructor.EDIT_CONTEXT!==!1&&!(P.chrome&&P.chrome_version<126)&&(this.editContext=new dT(e),e.state.facet(ai)&&(e.contentDOM.editContext=this.editContext.editContext)),cd&&(this.onCharData=n=>{this.queue.push({target:n.target,type:"characterData",oldValue:n.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var n;((n=this.view.docView)===null||n===void 0?void 0:n.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),n.length>0&&n[n.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(n=>{n.length>0&&n[n.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((n,a)=>n!=e[a]))){this.gapIntersection.disconnect();for(let n of e)this.gapIntersection.observe(n);this.gaps=e}}onSelectionChange(e){let n=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:a}=this,l=this.selectionRange;if(a.state.facet(ai)?a.root.activeElement!=this.dom:!Qr(this.dom,l))return;let c=l.anchorNode&&a.docView.tile.nearest(l.anchorNode);if(c&&c.isWidget()&&c.widget.ignoreEvent(e)){n||(this.selectionChanged=!1);return}(P.ie&&P.ie_version<=11||P.android&&P.chrome)&&!a.state.selection.main.empty&&l.focusNode&&Fr(l.focusNode,l.focusOffset,l.anchorNode,l.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,n=sl(e.root);if(!n)return!1;let a=P.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&fT(this.view,n)||n;if(!a||this.selectionRange.eq(a))return!1;let l=Qr(this.dom,a);return l&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Gw(this.dom,a)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(a),l&&(this.selectionChanged=!0),!0)}setSelectionRange(e,n){this.selectionRange.set(e.node,e.offset,n.node,n.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,n=null;for(let a=this.dom;a;)if(a.nodeType==1)!n&&e<this.scrollTargets.length&&this.scrollTargets[e]==a?e++:n||(n=this.scrollTargets.slice(0,e)),n&&n.push(a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;if(e<this.scrollTargets.length&&!n&&(n=this.scrollTargets.slice(0,e)),n){for(let a of this.scrollTargets)a.removeEventListener("scroll",this.onScroll);for(let a of this.scrollTargets=n)a.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,cT),cd&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),cd&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,n){var a;if(!this.delayedAndroidKey){let l=()=>{let c=this.delayedAndroidKey;c&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=c.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&c.force&&Ca(this.dom,c.key,c.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(l)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:n,force:this.lastChange<Date.now()-50||!!(!((a=this.delayedAndroidKey)===null||a===void 0)&&a.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let n=-1,a=-1,l=!1;for(let c of e){let u=this.readMutation(c);u&&(u.typeOver&&(l=!0),n==-1?{from:n,to:a}=u:(n=Math.min(u.from,n),a=Math.max(u.to,a)))}return{from:n,to:a,typeOver:l}}readChange(){let{from:e,to:n,typeOver:a}=this.processRecords(),l=this.selectionChanged&&Qr(this.dom,this.selectionRange);if(e<0&&!l)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let c=new Ck(this.view,e,n,a);return this.view.docView.domChanged={newSel:c.newSel?c.newSel.main:null},c}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let n=this.readChange();if(!n)return this.view.requestMeasure(),!1;let a=this.view.state,l=vv(this.view,n);return this.view.state==a&&(n.domChanged||n.newSel&&!lc(this.view.state.selection,n.newSel.main))&&this.view.update([]),l}readMutation(e){let n=this.view.docView.tile.nearest(e.target);if(!n||n.isWidget())return null;if(n.markDirty(e.type=="attributes"),e.type=="childList"){let a=B0(n,e.previousSibling||e.target.previousSibling,-1),l=B0(n,e.nextSibling||e.target.nextSibling,1);return{from:a?n.posAfter(a):n.posAtStart,to:l?n.posBefore(l):n.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(ai)!=e.state.facet(ai)&&(e.view.contentDOM.editContext=e.state.facet(ai)?this.editContext.editContext:null))}destroy(){var e,n,a;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(n=this.gapIntersection)===null||n===void 0||n.disconnect(),(a=this.resizeScroll)===null||a===void 0||a.disconnect();for(let l of this.scrollTargets)l.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function B0(s,e,n){for(;e;){let a=st.get(e);if(a&&a.parent==s)return a;let l=e.parentNode;e=l!=s.dom?l:n>0?e.nextSibling:e.previousSibling}return null}function L0(s,e){let n=e.startContainer,a=e.startOffset,l=e.endContainer,c=e.endOffset,u=s.docView.domAtPos(s.state.selection.main.anchor,1);return Fr(u.node,u.offset,l,c)&&([n,a,l,c]=[l,c,n,a]),{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}}function fT(s,e){if(e.getComposedRanges){let l=e.getComposedRanges(s.root)[0];if(l)return L0(s,l)}let n=null;function a(l){l.preventDefault(),l.stopImmediatePropagation(),n=l.getTargetRanges()[0]}return s.contentDOM.addEventListener("beforeinput",a,!0),s.dom.ownerDocument.execCommand("indent"),s.contentDOM.removeEventListener("beforeinput",a,!0),n?L0(s,n):null}class dT{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let n=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=a=>{let l=e.state.selection.main,{anchor:c,head:u}=l,f=this.toEditorPos(a.updateRangeStart),h=this.toEditorPos(a.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:a.updateRangeStart,editorBase:f,drifted:!1});let p=h-f>a.text.length;f==this.from&&c<this.from?f=c:h==this.to&&c>this.to&&(h=c);let g=xv(e.state.sliceDoc(f,h),a.text,(p?l.from:l.to)-f,p?"end":null);if(!g){let v=J.single(this.toEditorPos(a.selectionStart),this.toEditorPos(a.selectionEnd));lc(v,l)||e.dispatch({selection:v,userEvent:"select"});return}let b={from:g.from+f,to:g.toA+f,insert:Be.of(a.text.slice(g.from,g.toB).split(`
`))};if((P.mac||P.android)&&b.from==u-1&&/^\. ?$/.test(a.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(b={from:f,to:h,insert:Be.of([a.text.replace("."," ")])}),this.pendingContextChange=b,!e.state.readOnly){let v=this.to-this.from+(b.to-b.from+b.insert.length);Oh(e,b,J.single(this.toEditorPos(a.selectionStart,v),this.toEditorPos(a.selectionEnd,v)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),b.from<b.to&&!b.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(n.text.slice(Math.max(0,a.updateRangeStart-1),Math.min(n.text.length,a.updateRangeStart+1)))&&this.handlers.compositionend(a)},this.handlers.characterboundsupdate=a=>{let l=[],c=null;for(let u=this.toEditorPos(a.rangeStart),f=this.toEditorPos(a.rangeEnd);u<f;u++){let h=e.coordsForChar(u);c=h&&new DOMRect(h.left,h.top,h.right-h.left,h.bottom-h.top)||c||new DOMRect,l.push(c)}n.updateCharacterBounds(a.rangeStart,l)},this.handlers.textformatupdate=a=>{let l=[];for(let c of a.getTextFormats()){let u=c.underlineStyle,f=c.underlineThickness;if(!/none/i.test(u)&&!/none/i.test(f)){let h=this.toEditorPos(c.rangeStart),p=this.toEditorPos(c.rangeEnd);if(h<p){let g=`text-decoration: underline ${/^[a-z]/.test(u)?u+" ":u=="Dashed"?"dashed ":u=="Squiggle"?"wavy ":""}${/thin/i.test(f)?1:2}px`;l.push(Dt.mark({attributes:{style:g}}).range(h,p))}}}e.dispatch({effects:cv.of(Dt.set(l))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:a}=this.composing;this.composing=null,a&&this.reset(e.state)}};for(let a in this.handlers)n.addEventListener(a,this.handlers[a]);this.measureReq={read:a=>{this.editContext.updateControlBounds(a.contentDOM.getBoundingClientRect());let l=sl(a.root);l&&l.rangeCount&&this.editContext.updateSelectionBounds(l.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let n=0,a=!1,l=this.pendingContextChange;return e.changes.iterChanges((c,u,f,h,p)=>{if(a)return;let g=p.length-(u-c);if(l&&u>=l.to)if(l.from==c&&l.to==u&&l.insert.eq(p)){l=this.pendingContextChange=null,n+=g,this.to+=g;return}else l=null,this.revertPending(e.state);if(c+=n,u+=n,u<=this.from)this.from+=g,this.to+=g;else if(c<this.to){if(c<this.from||u>this.to||this.to-this.from+p.length>3e4){a=!0;return}this.editContext.updateText(this.toContextPos(c),this.toContextPos(u),p.toString()),this.to+=g}n+=g}),l&&!a&&this.revertPending(e.state),!a}update(e){let n=this.pendingContextChange,a=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(a.from,a.to)&&e.transactions.some(l=>!l.isUserEvent("input.type")&&l.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||n)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:n}=e.selection.main;this.from=Math.max(0,n-1e4),this.to=Math.min(e.doc.length,n+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let n=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(n.from),this.toContextPos(n.from+n.insert.length),e.doc.sliceString(n.from,n.to))}setSelection(e){let{main:n}=e.selection,a=this.toContextPos(Math.max(this.from,Math.min(this.to,n.anchor))),l=this.toContextPos(n.head);(this.editContext.selectionStart!=a||this.editContext.selectionEnd!=l)&&this.editContext.updateSelection(a,l)}rangeIsValid(e){let{head:n}=e.selection.main;return!(this.from>0&&n-this.from<500||this.to<e.doc.length&&this.to-n<500||this.to-this.from>1e4*3)}toEditorPos(e,n=this.to-this.from){e=Math.min(e,n);let a=this.composing;return a&&a.drifted?a.editorBase+(e-a.contextBase):e+this.from}toContextPos(e){let n=this.composing;return n&&n.drifted?n.contextBase+(e-n.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class ye{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var n;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:a}=e;this.dispatchTransactions=e.dispatchTransactions||a&&(l=>l.forEach(c=>a(c,this)))||(l=>this.update(l)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Vw(e.parent)||document,this.viewState=new D0(this,e.state||Ke.create(e)),e.scrollTo&&e.scrollTo.is(jo)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Ta).map(l=>new id(l));for(let l of this.plugins)l.update(this);this.observer=new uT(this),this.inputState=new jk(this),this.inputState.ensureHandlers(this.plugins),this.docView=new v0(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((n=document.fonts)===null||n===void 0)&&n.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...e){let n=e.length==1&&e[0]instanceof Bt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(n,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let n=!1,a=!1,l,c=this.state;for(let v of e){if(v.startState!=c)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");c=v.state}if(this.destroyed){this.viewState.state=c;return}let u=this.hasFocus,f=0,h=null;e.some(v=>v.annotation(Ev))?(this.inputState.notifiedFocused=u,f=1):u!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=u,h=Mv(c,u),h||(f=1));let p=this.observer.delayedAndroidKey,g=null;if(p?(this.observer.clearDelayedAndroidKey(),g=this.observer.readChange(),(g&&!this.state.doc.eq(c.doc)||!this.state.selection.eq(c.selection))&&(g=null)):this.observer.clear(),c.facet(Ke.phrases)!=this.state.facet(Ke.phrases))return this.setState(c);l=sc.create(this,c,e),l.flags|=f;let b=this.viewState.scrollTarget;try{this.updateState=2;for(let v of e){if(b&&(b=b.map(v.changes)),v.scrollIntoView){let{main:S}=v.state.selection,{x:k,y:T}=this.state.facet(ye.cursorScrollMargin);b=new Oa(S.empty?S:J.cursor(S.head,S.head>S.anchor?-1:1),"nearest","nearest",T,k)}for(let S of v.effects)S.is(jo)&&(b=S.value.clip(this.state))}this.viewState.update(l,b),this.bidiCache=cc.update(this.bidiCache,l.changes),l.empty||(this.updatePlugins(l),this.inputState.update(l)),n=this.docView.update(l),this.state.facet(Vr)!=this.styleModules&&this.mountStyles(),a=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(n,e.some(v=>v.isUserEvent("select.pointer")))}finally{this.updateState=0}if(l.startState.facet(qo)!=l.state.facet(qo)&&(this.viewState.mustMeasureContent=!0),(n||a||b||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!l.empty)for(let v of this.state.facet(Pd))try{v(l)}catch(S){li(this.state,S,"update listener")}(h||g)&&Promise.resolve().then(()=>{h&&this.state==h.startState&&this.dispatch(h),g&&!vv(this,g)&&p.force&&Ca(this.contentDOM,p.key,p.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let n=this.hasFocus;try{for(let a of this.plugins)a.destroy(this);this.viewState=new D0(this,e),this.plugins=e.facet(Ta).map(a=>new id(a)),this.pluginMap.clear();for(let a of this.plugins)a.update(this);this.docView.destroy(),this.docView=new v0(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}n&&this.focus(),this.requestMeasure()}updatePlugins(e){let n=e.startState.facet(Ta),a=e.state.facet(Ta);if(n!=a){let l=[];for(let c of a){let u=n.indexOf(c);if(u<0)l.push(new id(c));else{let f=this.plugins[u];f.mustUpdate=e,l.push(f)}}for(let c of this.plugins)c.mustUpdate!=e&&c.destroy(this);this.plugins=l,this.pluginMap.clear()}else for(let l of this.plugins)l.mustUpdate=e;for(let l=0;l<this.plugins.length;l++)this.plugins[l].update(this);n!=a&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let n=e.value;if(n&&n.docViewUpdate)try{n.docViewUpdate(this)}catch(a){li(this.state,a,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let n=null,a=this.viewState.scrollParent,l=this.viewState.getScrollOffset(),{scrollAnchorPos:c,scrollAnchorHeight:u}=this.viewState;Math.abs(l-this.viewState.scrollOffset)>1&&(u=-1),this.viewState.scrollAnchorHeight=-1;try{for(let f=0;;f++){if(u<0)if(Wb(a||this.win))c=-1,u=this.viewState.heightMap.height;else{let S=this.viewState.scrollAnchorAt(l);c=S.from,u=S.top}this.updateState=1;let h=this.viewState.measure();if(!h&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(f>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let p=[];h&4||([this.measureRequests,p]=[p,this.measureRequests]);let g=p.map(S=>{try{return S.read(this)}catch(k){return li(this.state,k),_0}}),b=sc.create(this,this.state,[]),v=!1;b.flags|=h,n?n.flags|=h:n=b,this.updateState=2,b.empty||(this.updatePlugins(b),this.inputState.update(b),this.updateAttrs(),v=this.docView.update(b),v&&this.docViewUpdate());for(let S=0;S<p.length;S++)if(g[S]!=_0)try{let k=p[S];k.write&&k.write(g[S],this)}catch(k){li(this.state,k)}if(v&&this.docView.updateSelection(!0),!b.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,u=-1;continue}else{let k=((c<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(c).top)-u)/this.scaleY;if((k>1||k<-1)&&(a==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){l=l+k,a?a.scrollTop+=k:this.win.scrollBy(0,k),u=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(n&&!n.empty)for(let f of this.state.facet(Pd))f(n)}get themeClasses(){return ih+" "+(this.state.facet(nh)?Nv:Ov)+" "+this.state.facet(qo)}updateAttrs(){let e=H0(this,uv,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),n={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(ai)?"true":"false",class:"cm-content",style:`${P.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(n["aria-readonly"]="true"),H0(this,Rh,n);let a=this.observer.ignore(()=>{let l=h0(this.contentDOM,this.contentAttrs,n),c=h0(this.dom,this.editorAttrs,e);return l||c});return this.editorAttrs=e,this.contentAttrs=n,a}showAnnouncements(e){let n=!0;for(let a of e)for(let l of a.effects)if(l.is(ye.announce)){n&&(this.announceDOM.textContent=""),n=!1;let c=this.announceDOM.appendChild(document.createElement("div"));c.textContent=l.value}}mountStyles(){this.styleModules=this.state.facet(Vr);let e=this.state.facet(ye.cspNonce);Da.mount(this.root,this.styleModules.concat(oT).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let n=0;n<this.measureRequests.length;n++)if(this.measureRequests[n].key===e.key){this.measureRequests[n]=e;return}}this.measureRequests.push(e)}}plugin(e){let n=this.pluginMap.get(e);return(n===void 0||n&&n.plugin!=e)&&this.pluginMap.set(e,n=this.plugins.find(a=>a.plugin==e)||null),n&&n.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,n,a){return ld(this,e,x0(this,e,n,a))}moveByGroup(e,n){return ld(this,e,x0(this,e,n,a=>kk(this,e.head,a)))}visualLineSide(e,n){let a=this.bidiSpans(e),l=this.textDirectionAt(e.from),c=a[n?a.length-1:0];return J.cursor(c.side(n,l)+e.from,c.forward(!n,l)?1:-1)}moveToLineBoundary(e,n,a=!0){return wk(this,e,n,a)}moveVertically(e,n,a){return ld(this,e,Tk(this,e,n,a))}domAtPos(e,n=1){return this.docView.domAtPos(e,n)}posAtDOM(e,n=0){return this.docView.posFromDOM(e,n)}posAtCoords(e,n=!0){this.readMeasured();let a=eh(this,e,n);return a&&a.pos}posAndSideAtCoords(e,n=!0){return this.readMeasured(),eh(this,e,n)}coordsAtPos(e,n=1){this.readMeasured();let a=this.docView.coordsAt(e,n);if(!a||a.left==a.right)return a;let l=this.state.doc.lineAt(e),c=this.bidiSpans(l),u=c[_n.find(c,e-l.from,-1,n)];return ic(a,u.dir==ot.LTR==n>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(rv)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>hT)return Jb(e.length);let n=this.textDirectionAt(e.from),a;for(let c of this.bidiCache)if(c.from==e.from&&c.dir==n&&(c.fresh||Pb(c.isolates,a=g0(this,e))))return c.order;a||(a=g0(this,e));let l=Fw(e.text,n,a);return this.bidiCache.push(new cc(e.from,e.to,n,a,!0,l)),l}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||P.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Kb(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,n={}){var a,l,c,u;return jo.of(new Oa(typeof e=="number"?J.cursor(e):e,(a=n.y)!==null&&a!==void 0?a:"nearest",(l=n.x)!==null&&l!==void 0?l:"nearest",(c=n.yMargin)!==null&&c!==void 0?c:5,(u=n.xMargin)!==null&&u!==void 0?u:5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:n}=this.scrollDOM,a=this.viewState.scrollAnchorAt(e);return jo.of(new Oa(J.cursor(a.from),"start","start",a.top-e,n,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Rs.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Rs.define(()=>({}),{eventObservers:e})}static theme(e,n){let a=Da.newName(),l=[qo.of(a),Vr.of(sh(`.${a}`,e))];return n&&n.dark&&l.push(nh.of(!0)),l}static baseTheme(e){return xh.lowest(Vr.of(sh("."+ih,e,Dv)))}static findFromDOM(e){var n;let a=e.querySelector(".cm-content"),l=a&&st.get(a)||st.get(e);return((n=l?.root)===null||n===void 0?void 0:n.view)||null}}ye.styleModule=Vr;ye.inputHandler=sv;ye.clipboardInputFilter=Eh;ye.clipboardOutputFilter=Mh;ye.scrollHandler=ov;ye.focusChangeEffect=av;ye.perLineTextDirection=rv;ye.exceptionSink=iv;ye.updateListener=Pd;ye.editable=ai;ye.mouseSelectionStyle=nv;ye.dragMovesSelection=tv;ye.clickAddsSelectionRange=ev;ye.decorations=Sc;ye.blockWrappers=fv;ye.outerDecorations=Ch;ye.atomicRanges=ul;ye.bidiIsolatedRanges=dv;ye.cursorScrollMargin=ue.define({combine:s=>{let e=5,n=5;for(let a of s)typeof a=="number"?e=n=a:{x:e,y:n}=a;return{x:e,y:n}}});ye.scrollMargins=hv;ye.darkTheme=nh;ye.cspNonce=ue.define({combine:s=>s.length?s[0]:""});ye.contentAttributes=Rh;ye.editorAttributes=uv;ye.lineWrapping=ye.contentAttributes.of({class:"cm-lineWrapping"});ye.announce=pt.define();const hT=4096,_0={};class cc{constructor(e,n,a,l,c,u){this.from=e,this.to=n,this.dir=a,this.isolates=l,this.fresh=c,this.order=u}static update(e,n){if(n.empty&&!e.some(c=>c.fresh))return e;let a=[],l=e.length?e[e.length-1].dir:ot.LTR;for(let c=Math.max(0,e.length-10);c<e.length;c++){let u=e[c];u.dir==l&&!n.touchesRange(u.from,u.to)&&a.push(new cc(n.mapPos(u.from,1),n.mapPos(u.to,-1),u.dir,u.isolates,!1,u.order))}return a}}function H0(s,e,n){for(let a=s.state.facet(e),l=a.length-1;l>=0;l--){let c=a[l],u=typeof c=="function"?c(s):c;u&&kh(u,n)}return n}const mT=P.mac?"mac":P.windows?"win":P.linux?"linux":"key";function pT(s,e){const n=s.split(/-(?!$)/);let a=n[n.length-1];a=="Space"&&(a=" ");let l,c,u,f;for(let h=0;h<n.length-1;++h){const p=n[h];if(/^(cmd|meta|m)$/i.test(p))f=!0;else if(/^a(lt)?$/i.test(p))l=!0;else if(/^(c|ctrl|control)$/i.test(p))c=!0;else if(/^s(hift)?$/i.test(p))u=!0;else if(/^mod$/i.test(p))e=="mac"?f=!0:c=!0;else throw new Error("Unrecognized modifier name: "+p)}return l&&(a="Alt-"+a),c&&(a="Ctrl-"+a),f&&(a="Meta-"+a),u&&(a="Shift-"+a),a}function Uo(s,e,n){return e.altKey&&(s="Alt-"+s),e.ctrlKey&&(s="Ctrl-"+s),e.metaKey&&(s="Meta-"+s),n!==!1&&e.shiftKey&&(s="Shift-"+s),s}const gT=xh.default(ye.domEventHandlers({keydown(s,e){return xT(yT(e.state),s,e,"editor")}})),jv=ue.define({enables:gT}),q0=new WeakMap;function yT(s){let e=s.facet(jv),n=q0.get(e);return n||q0.set(e,n=vT(e.reduce((a,l)=>a.concat(l),[]))),n}let Ui=null;const bT=4e3;function vT(s,e=mT){let n=Object.create(null),a=Object.create(null),l=(u,f)=>{let h=a[u];if(h==null)a[u]=f;else if(h!=f)throw new Error("Key binding "+u+" is used both as a regular binding and as a multi-stroke prefix")},c=(u,f,h,p,g)=>{var b,v;let S=n[u]||(n[u]=Object.create(null)),k=f.split(/ (?!$)/).map(_=>pT(_,e));for(let _=1;_<k.length;_++){let U=k.slice(0,_).join(" ");l(U,!0),S[U]||(S[U]={preventDefault:!0,stopPropagation:!1,run:[K=>{let $=Ui={view:K,prefix:U,scope:u};return setTimeout(()=>{Ui==$&&(Ui=null)},bT),!0}]})}let T=k.join(" ");l(T,!1);let C=S[T]||(S[T]={preventDefault:!1,stopPropagation:!1,run:((v=(b=S._any)===null||b===void 0?void 0:b.run)===null||v===void 0?void 0:v.slice())||[]});h&&C.run.push(h),p&&(C.preventDefault=!0),g&&(C.stopPropagation=!0)};for(let u of s){let f=u.scope?u.scope.split(" "):["editor"];if(u.any)for(let p of f){let g=n[p]||(n[p]=Object.create(null));g._any||(g._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:b}=u;for(let v in g)g[v].run.push(S=>b(S,ah))}let h=u[e]||u.key;if(h)for(let p of f)c(p,h,u.run,u.preventDefault,u.stopPropagation),u.shift&&c(p,"Shift-"+h,u.shift,u.preventDefault,u.stopPropagation)}return n}let ah=null;function xT(s,e,n,a){ah=e;let l=zw(e),c=gw(l,0),u=yw(c)==l.length&&l!=" ",f="",h=!1,p=!1,g=!1;Ui&&Ui.view==n&&Ui.scope==a&&(f=Ui.prefix+" ",wv.indexOf(e.keyCode)<0&&(p=!0,Ui=null));let b=new Set,v=C=>{if(C){for(let _ of C.run)if(!b.has(_)&&(b.add(_),_(n)))return C.stopPropagation&&(g=!0),!0;C.preventDefault&&(C.stopPropagation&&(g=!0),p=!0)}return!1},S=s[a],k,T;return S&&(v(S[f+Uo(l,e,!u)])?h=!0:u&&(e.altKey||e.metaKey||e.ctrlKey)&&!(P.windows&&e.ctrlKey&&e.altKey)&&!(P.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(k=Ki[e.keyCode])&&k!=l?(v(S[f+Uo(k,e,!0)])||e.shiftKey&&(T=nl[e.keyCode])!=l&&T!=k&&v(S[f+Uo(T,e,!1)]))&&(h=!0):u&&e.shiftKey&&v(S[f+Uo(l,e,!0)])&&(h=!0),!h&&v(S._any)&&(h=!0)),p&&(h=!0),h&&g&&e.stopPropagation(),ah=null,h}class ks{constructor(e,n,a,l,c){this.className=e,this.left=n,this.top=a,this.width=l,this.height=c}draw(){let e=document.createElement("div");return e.className=this.className,this.adjust(e),e}update(e,n){return n.className!=this.className?!1:(this.adjust(e),!0)}adjust(e){e.style.left=this.left+"px",e.style.top=this.top+"px",this.width!=null&&(e.style.width=this.width+"px"),e.style.height=this.height+"px"}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(e,n,a){if(a.empty){let l=e.coordsAtPos(a.head,a.assoc||1);if(!l)return[];let c=zv(e);return[new ks(n,l.left-c.left,l.top-c.top,null,l.bottom-l.top)]}else return ST(e,n,a)}}function zv(s){let e=s.scrollDOM.getBoundingClientRect();return{left:(s.textDirection==ot.LTR?e.left:e.right-s.scrollDOM.clientWidth*s.scaleX)-s.scrollDOM.scrollLeft*s.scaleX,top:e.top-s.scrollDOM.scrollTop*s.scaleY}}function U0(s,e,n,a){let l=s.coordsAtPos(e,n*2);if(!l)return a;let c=s.dom.getBoundingClientRect(),u=(l.top+l.bottom)/2,f=s.posAtCoords({x:c.left+1,y:u}),h=s.posAtCoords({x:c.right-1,y:u});return f==null||h==null?a:{from:Math.max(a.from,Math.min(f,h)),to:Math.min(a.to,Math.max(f,h))}}function ST(s,e,n){if(n.to<=s.viewport.from||n.from>=s.viewport.to)return[];let a=Math.max(n.from,s.viewport.from),l=Math.min(n.to,s.viewport.to),c=s.textDirection==ot.LTR,u=s.contentDOM,f=u.getBoundingClientRect(),h=zv(s),p=u.querySelector(".cm-line"),g=p&&window.getComputedStyle(p),b=f.left+(g?parseInt(g.paddingLeft)+Math.min(0,parseInt(g.textIndent)):0),v=f.right-(g?parseInt(g.paddingRight):0),S=Id(s,a,1),k=Id(s,l,-1),T=S.type==Nt.Text?S:null,C=k.type==Nt.Text?k:null;if(T&&(s.lineWrapping||S.widgetLineBreaks)&&(T=U0(s,a,1,T)),C&&(s.lineWrapping||k.widgetLineBreaks)&&(C=U0(s,l,-1,C)),T&&C&&T.from==C.from&&T.to==C.to)return U(K(n.from,n.to,T));{let B=T?K(n.from,null,T):$(S,!1),W=C?K(null,n.to,C):$(k,!0),X=[];return(T||S).to<(C||k).from-(T&&C?1:0)||S.widgetLineBreaks>1&&B.bottom+s.defaultLineHeight/2<W.top?X.push(_(b,B.bottom,v,W.top)):B.bottom<W.top&&s.elementAtHeight((B.bottom+W.top)/2).type==Nt.Text&&(B.bottom=W.top=(B.bottom+W.top)/2),U(B).concat(X).concat(U(W))}function _(B,W,X,te){return new ks(e,B-h.left,W-h.top,Math.max(0,X-B),te-W)}function U({top:B,bottom:W,horizontal:X}){let te=[];for(let pe=0;pe<X.length;pe+=2)te.push(_(X[pe],B,X[pe+1],W));return te}function K(B,W,X){let te=1e9,pe=-1e9,Xe=[];function ct(He,Qe,H,Q,ie){let I=s.coordsAtPos(He,He==X.to?-2:2),ae=s.coordsAtPos(H,H==X.from?2:-2);!I||!ae||(te=Math.min(I.top,ae.top,te),pe=Math.max(I.bottom,ae.bottom,pe),ie==ot.LTR?Xe.push(c&&Qe?b:I.left,c&&Q?v:ae.right):Xe.push(!c&&Q?b:ae.left,!c&&Qe?v:I.right))}let je=B??X.from,bt=W??X.to;for(let He of s.visibleRanges)if(He.to>je&&He.from<bt)for(let Qe=Math.max(He.from,je),H=Math.min(He.to,bt);;){let Q=s.state.doc.lineAt(Qe);for(let ie of s.bidiSpans(Q)){let I=ie.from+Q.from,ae=ie.to+Q.from;if(I>=H)break;ae>Qe&&ct(Math.max(I,Qe),B==null&&I<=je,Math.min(ae,H),W==null&&ae>=bt,ie.dir)}if(Qe=Q.to+1,Qe>=H)break}return Xe.length==0&&ct(je,B==null,bt,W==null,s.textDirection),{top:te,bottom:pe,horizontal:Xe}}function $(B,W){let X=f.top+(W?B.top:B.bottom);return{top:X,bottom:X,horizontal:[]}}}function wT(s,e){return s.constructor==e.constructor&&s.eq(e)}class kT{constructor(e,n){this.view=e,this.layer=n,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),n.above&&this.dom.classList.add("cm-layer-above"),n.class&&this.dom.classList.add(n.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(e.state),e.requestMeasure(this.measureReq),n.mount&&n.mount(this.dom,e)}update(e){e.startState.facet(Fo)!=e.state.facet(Fo)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let n=0,a=e.facet(Fo);for(;n<a.length&&a[n]!=this.layer;)n++;this.dom.style.zIndex=String((this.layer.above?150:-1)-n)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:n}=this.view;(e!=this.scaleX||n!=this.scaleY)&&(this.scaleX=e,this.scaleY=n,this.dom.style.transform=`scale(${1/e}, ${1/n})`)}draw(e){if(e.length!=this.drawn.length||e.some((n,a)=>!wT(n,this.drawn[a]))){let n=this.dom.firstChild,a=0;for(let l of e)l.update&&n&&l.constructor&&this.drawn[a].constructor&&l.update(n,this.drawn[a])?(n=n.nextSibling,a++):this.dom.insertBefore(l.draw(),n);for(;n;){let l=n.nextSibling;n.remove(),n=l}this.drawn=e,P.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Fo=ue.define();function Bv(s){return[Rs.define(e=>new kT(e,s)),Fo.of(s)]}const La=ue.define({combine(s){return qb(s,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,n)=>Math.min(e,n),drawRangeCursor:(e,n)=>e||n})}});function TT(s={}){return[La.of(s),AT,ET,MT,lv.of(!0)]}function Lv(s){return s.startState.facet(La)!=s.state.facet(La)}const AT=Bv({above:!0,markers(s){let{state:e}=s,n=e.facet(La),a=[];for(let l of e.selection.ranges){let c=l==e.selection.main;if(l.empty||n.drawRangeCursor&&!(c&&P.ios&&n.iosSelectionHandles)){let u=c?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",f=l.empty?l:J.cursor(l.head,l.assoc);for(let h of ks.forRange(s,u,f))a.push(h)}}return a},update(s,e){s.transactions.some(a=>a.selection)&&(e.style.animationName=e.style.animationName=="cm-blink"?"cm-blink2":"cm-blink");let n=Lv(s);return n&&V0(s.state,e),s.docChanged||s.selectionSet||n},mount(s,e){V0(e.state,s)},class:"cm-cursorLayer"});function V0(s,e){e.style.animationDuration=s.facet(La).cursorBlinkRate+"ms"}const ET=Bv({above:!1,markers(s){let e=[],{main:n,ranges:a}=s.state.selection;for(let l of a)if(!l.empty)for(let c of ks.forRange(s,"cm-selectionBackground",l))e.push(c);if(P.ios&&!n.empty&&s.state.facet(La).iosSelectionHandles){for(let l of ks.forRange(s,"cm-selectionHandle cm-selectionHandle-start",J.cursor(n.from,1)))e.push(l);for(let l of ks.forRange(s,"cm-selectionHandle cm-selectionHandle-end",J.cursor(n.to,1)))e.push(l)}return e},update(s,e){return s.docChanged||s.selectionSet||s.viewportChanged||Lv(s)},class:"cm-selectionLayer"}),MT=xh.highest(ye.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}}));class Os extends As{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}Os.prototype.elementClass="";Os.prototype.toDOM=void 0;Os.prototype.mapMode=cn.TrackBefore;Os.prototype.startSide=Os.prototype.endSide=-1;Os.prototype.point=!0;const ud=ue.define(),RT=ue.define(),Zo=ue.define(),G0=ue.define({combine:s=>s.some(e=>e)});function CT(s){return[OT]}const OT=Rs.fromClass(class{constructor(s){this.view=s,this.domAfter=null,this.prevViewport=s.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=s.state.facet(Zo).map(e=>new Y0(s,e)),this.fixed=!s.state.facet(G0);for(let e of this.gutters)e.config.side=="after"?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),s.scrollDOM.insertBefore(this.dom,s.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(s){if(this.updateGutters(s)){let e=this.prevViewport,n=s.view.viewport,a=Math.min(e.to,n.to)-Math.max(e.from,n.from);this.syncGutters(a<(n.to-n.from)*.8)}if(s.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+"px";this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(G0)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=s.view.viewport}syncGutters(s){let e=this.dom.nextSibling;s&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=Re.iter(this.view.state.facet(ud),this.view.viewport.from),a=[],l=this.gutters.map(c=>new NT(c,this.view.viewport,-this.view.documentPadding.top));for(let c of this.view.viewportLineBlocks)if(a.length&&(a=[]),Array.isArray(c.type)){let u=!0;for(let f of c.type)if(f.type==Nt.Text&&u){rh(n,a,f.from);for(let h of l)h.line(this.view,f,a);u=!1}else if(f.widget)for(let h of l)h.widget(this.view,f)}else if(c.type==Nt.Text){rh(n,a,c.from);for(let u of l)u.line(this.view,c,a)}else if(c.widget)for(let u of l)u.widget(this.view,c);for(let c of l)c.finish();s&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(s){let e=s.startState.facet(Zo),n=s.state.facet(Zo),a=s.docChanged||s.heightChanged||s.viewportChanged||!Re.eq(s.startState.facet(ud),s.state.facet(ud),s.view.viewport.from,s.view.viewport.to);if(e==n)for(let l of this.gutters)l.update(s)&&(a=!0);else{a=!0;let l=[];for(let c of n){let u=e.indexOf(c);u<0?l.push(new Y0(this.view,c)):(this.gutters[u].update(s),l.push(this.gutters[u]))}for(let c of this.gutters)c.dom.remove(),l.indexOf(c)<0&&c.destroy();for(let c of l)c.config.side=="after"?this.getDOMAfter().appendChild(c.dom):this.dom.appendChild(c.dom);this.gutters=l}return a}destroy(){for(let s of this.gutters)s.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:s=>ye.scrollMargins.of(e=>{let n=e.plugin(s);if(!n||n.gutters.length==0||!n.fixed)return null;let a=n.dom.offsetWidth*e.scaleX,l=n.domAfter?n.domAfter.offsetWidth*e.scaleX:0;return e.textDirection==ot.LTR?{left:a,right:l}:{right:a,left:l}})});function $0(s){return Array.isArray(s)?s:[s]}function rh(s,e,n){for(;s.value&&s.from<=n;)s.from==n&&e.push(s.value),s.next()}class NT{constructor(e,n,a){this.gutter=e,this.height=a,this.i=0,this.cursor=Re.iter(e.markers,n.from)}addElement(e,n,a){let{gutter:l}=this,c=(n.top-this.height)/e.scaleY,u=n.height/e.scaleY;if(this.i==l.elements.length){let f=new _v(e,u,c,a);l.elements.push(f),l.dom.appendChild(f.dom)}else l.elements[this.i].update(e,u,c,a);this.height=n.bottom,this.i++}line(e,n,a){let l=[];rh(this.cursor,l,n.from),a.length&&(l=l.concat(a));let c=this.gutter.config.lineMarker(e,n,l);c&&l.unshift(c);let u=this.gutter;l.length==0&&!u.config.renderEmptyElements||this.addElement(e,n,l)}widget(e,n){let a=this.gutter.config.widgetMarker(e,n.widget,n),l=a?[a]:null;for(let c of e.state.facet(RT)){let u=c(e,n.widget,n);u&&(l||(l=[])).push(u)}l&&this.addElement(e,n,l)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let n=e.elements.pop();e.dom.removeChild(n.dom),n.destroy()}}}class Y0{constructor(e,n){this.view=e,this.config=n,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let a in n.domEventHandlers)this.dom.addEventListener(a,l=>{let c=l.target,u;if(c!=this.dom&&this.dom.contains(c)){for(;c.parentNode!=this.dom;)c=c.parentNode;let h=c.getBoundingClientRect();u=(h.top+h.bottom)/2}else u=l.clientY;let f=e.lineBlockAtHeight(u-e.documentTop);n.domEventHandlers[a](e,f,l)&&l.preventDefault()});this.markers=$0(n.markers(e)),n.initialSpacer&&(this.spacer=new _v(e,0,0,[n.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let n=this.markers;if(this.markers=$0(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let l=this.config.updateSpacer(this.spacer.markers[0],e);l!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[l])}let a=e.view.viewport;return!Re.eq(this.markers,n,a.from,a.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}}class _v{constructor(e,n,a,l){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,n,a,l)}update(e,n,a,l){this.height!=n&&(this.height=n,this.dom.style.height=n+"px"),this.above!=a&&(this.dom.style.marginTop=(this.above=a)?a+"px":""),DT(this.markers,l)||this.setMarkers(e,l)}setMarkers(e,n){let a="cm-gutterElement",l=this.dom.firstChild;for(let c=0,u=0;;){let f=u,h=c<n.length?n[c++]:null,p=!1;if(h){let g=h.elementClass;g&&(a+=" "+g);for(let b=u;b<this.markers.length;b++)if(this.markers[b].compare(h)){f=b,p=!0;break}}else f=this.markers.length;for(;u<f;){let g=this.markers[u++];if(g.toDOM){g.destroy(l);let b=l.nextSibling;l.remove(),l=b}}if(!h)break;h.toDOM&&(p?l=l.nextSibling:this.dom.insertBefore(h.toDOM(e),l)),p&&u++}this.dom.className=a,this.markers=n}destroy(){this.setMarkers(null,[])}}function DT(s,e){if(s.length!=e.length)return!1;for(let n=0;n<s.length;n++)if(!s[n].compare(e[n]))return!1;return!0}const jT=ue.define(),zT=ue.define(),Aa=ue.define({combine(s){return qb(s,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,n){let a=Object.assign({},e);for(let l in n){let c=a[l],u=n[l];a[l]=c?(f,h,p)=>c(f,h,p)||u(f,h,p):u}return a}})}});class fd extends Os{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function dd(s,e){return s.state.facet(Aa).formatNumber(e,s.state)}const BT=Zo.compute([Aa],s=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers(e){return e.state.facet(jT)},lineMarker(e,n,a){return a.some(l=>l.toDOM)?null:new fd(dd(e,e.state.doc.lineAt(n.from).number))},widgetMarker:(e,n,a)=>{for(let l of e.state.facet(zT)){let c=l(e,n,a);if(c)return c}return null},lineMarkerChange:e=>e.startState.facet(Aa)!=e.state.facet(Aa),initialSpacer(e){return new fd(dd(e,K0(e.state.doc.lines)))},updateSpacer(e,n){let a=dd(n.view,K0(n.view.state.doc.lines));return a==e.number?e:new fd(a)},domEventHandlers:s.facet(Aa).domEventHandlers,side:"before"}));function LT(s={}){return[Aa.of(s),CT(),BT]}function K0(s){let e=9;for(;e<s;)e=e*10+9;return e}const _T=Object.freeze({boolean:"rasa-token-boolean",call:"rasa-token-call",character:"rasa-token-character",comment:"rasa-token-comment",definition:"rasa-token-definition",delimiter:"rasa-token-delimiter",form:"rasa-token-form",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",namespace:"rasa-token-namespace",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),jh=pt.define();pt.define();function HT(s){return[{key:"Mod-Enter",run:()=>(s(),!0)}]}function zh({parent:s,doc:e="",onChange:n=null,onRun:a=null,readOnly:l=!1,liveLexicalHighlight:c=!1,extensions:u=[]}={}){if(!s)throw new Error("mountRasaCodeEditor requires a parent element");const f=a?jv.of(HT(a)):[],h=c?WT():KT();return new ye({parent:s,state:Ke.create({doc:e,extensions:[LT(),TT(),ye.lineWrapping,h,f,ye.editable.of(!l),Ke.readOnly.of(l),ye.updateListener.of(p=>{p.docChanged&&n?.(p.state.doc.toString(),p)}),...u]})})}function Hv(s){return _T[s]??"rasa-token-unknown"}function qT(s,e){const n=String(s),a=[];let l=0;for(const c of qv(n,Uv(e,n)))c.start>l&&a.push({text:n.slice(l,c.start),className:""}),a.push({text:n.slice(c.start,c.end),className:Hv(c.kind)}),l=c.end;return l<n.length&&a.push({text:n.slice(l),className:""}),a}function W0(s){const e=String(s),n=[];let a=0;for(;a<e.length;){const l=e[a];if(/\s/.test(l)){a+=1;continue}if("()[]{}".includes(l)){n.push(Hi(e,"delimiter",a,a+1)),a+=1;continue}if(l===";"){const f=GT(e,a);n.push(Hi(e,"comment",a,f)),a=f;continue}if(l==='"'){const f=VT(e,a);n.push(Hi(e,"string",a,f)),a=f;continue}if(l==="^"){n.push(Hi(e,"reader-macro",a,a+1));const f=a+1;if(f<e.length&&!/[\s()[\]{}]/.test(e[f])){const h=hd(e,f);n.push(Hi(e,"metadata",f,h)),a=h}else a+=1;continue}if(l==="'"||l==="`"||l==="~"||l==="@"){n.push(Hi(e,"reader-macro",a,a+1)),a+=1;continue}if(l==="\\"){const f=hd(e,a);n.push(Hi(e,"character",a,f)),a=f;continue}const c=hd(e,a),u=e.slice(a,c);n.push(Hi(e,UT(u),a,c)),a=c}return n}function UT(s){return s==="nil"?"nil":s==="true"||s==="false"?"boolean":s.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(s)?"number":"symbol"}function Hi(s,e,n,a){return{kind:e,start:Q0(s,n),end:Q0(s,a)}}function hd(s,e){let n=e;for(;n<s.length&&!/[\s()[\]{}]/.test(s[n]);)n+=1;return n}function VT(s,e){let n=!1;for(let a=e+1;a<s.length;a+=1){const l=s[a];if(n)n=!1;else if(l==="\\")n=!0;else if(l==='"')return a+1}return s.length}function GT(s,e){const n=s.indexOf(`
`,e);return n<0?s.length:n}function Pr(s,e){const n=typeof e=="string"?e:"",a=typeof e=="number"?e:n.length,l=Uv(s,n||a),c=qv(n,l).map(u=>Dt.mark({class:Hv(u.kind)}).range(u.start,u.end));return Dt.set(c,!0)}const $T=new Set(["and","as->","case","catch","cond","def","defmacro","defmethod","defmulti","defn","do","doseq","finally","fn","for","if","if-let","import","let","loop","ns","or","quote","recur","require","set!","some->","some->>","throw","try","var","when","when-let","when-not","->","->>"]),YT=new Set(["def","defmacro","defmethod","defmulti","defn","ns"]);function qv(s,e){if(!s||!Array.isArray(e)||e.length===0)return e;let n=null;return e.map(a=>{const l=s.slice(a.start,a.end);let c=a.kind;if(c==="symbol"){const f=n?s.slice(n.start,n.end):"";n?.kind==="form"&&YT.has(f)?c="definition":n?.kind==="delimiter"&&f==="("?c=$T.has(l)?"form":"call":l.includes("/")&&(c="namespace")}const u=c===a.kind?a:{...a,kind:c};return a.kind!=="comment"&&(n=u),u})}function KT(s=[]){return[Qi.define({create(n){return Pr(s,n.doc.toString())},update(n,a){for(const l of a.effects)if(l.is(jh))return Pr(l.value,a.state.doc.toString());return a.docChanged?Dt.none:n.map(a.changes)},provide:n=>ye.decorations.from(n)})]}function WT(){return[Qi.define({create(e){return Pr(W0(e.doc.toString()),e.doc.toString())},update(e,n){for(const a of n.effects)if(a.is(jh))return Pr(a.value,n.state.doc.toString());return n.docChanged?Pr(W0(n.state.doc.toString()),n.state.doc.toString()):e.map(n.changes)},provide:e=>ye.decorations.from(e)})]}function XT(s,e,n){const a=String(s),l=oh(e),c=Math.max(l,oh(n));return{start:X0(a,l),end:X0(a,c)}}function X0(s,e){const n=String(s),a=oh(e);let l=0,c=0;for(const u of n){const f=l+Vv(u);if(f>a||(l=f,c+=u.length,l===a))return c}return n.length}function Q0(s,e){const n=String(s),a=lh(e,n.length);let l=0;for(let c=0;c<a;){const u=n.codePointAt(c),f=String.fromCodePoint(u);l+=Vv(f),c+=f.length}return l}function Uv(s,e){const n=typeof e=="number"?e:String(e).length;return[...s].map(a=>{const l=typeof e=="number"?{start:lh(a.start,n),end:lh(a.end,n)}:XT(e,a.start,a.end);return{kind:String(a.kind),start:l.start,end:l.end}}).filter(a=>a.start<a.end).sort((a,l)=>a.start-l.start||a.end-l.end)}function lh(s,e){const n=Number(s);return Number.isFinite(n)?Math.max(0,Math.min(e,Math.trunc(n))):0}function oh(s){const e=Number(s);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):0}function Vv(s){const e=s.codePointAt(0);return e<=127?1:e<=2047?2:e<=65535?3:4}const QT=`
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
`,FT=new TextEncoder;async function Vo(s){if(Gv(s)){const a=$v(s);return{byteLength:a.byteLength,digest:await F0(a),encoding:"bytes"}}const e=ZT(s),n=FT.encode(e);return{byteLength:n.byteLength,digest:await F0(n),encoding:"canonical-json"}}function ZT(s){return JSON.stringify(ch(s))}function uc(s,e=12){return s?String(s).slice(0,e):"not observed"}function ch(s){return s===null||typeof s=="string"||typeof s=="boolean"?s:typeof s=="number"?Number.isFinite(s)?s:{$number:String(s)}:typeof s=="bigint"?{$bigint:s.toString()}:s===void 0?{$undefined:!0}:Gv(s)?{$bytes:[...$v(s)]}:Array.isArray(s)?s.map(ch):s&&typeof s=="object"?Object.fromEntries(Object.keys(s).sort().filter(e=>typeof s[e]!="function").map(e=>[e,ch(s[e])])):String(s)}async function F0(s){const e=globalThis.crypto?.subtle;if(!e)throw new Error("SHA-256 observations require Web Crypto");const n=await e.digest("SHA-256",s);return[...new Uint8Array(n)].map(a=>a.toString(16).padStart(2,"0")).join("")}function Gv(s){return s instanceof ArrayBuffer||ArrayBuffer.isView(s)}function $v(s){if(s instanceof Uint8Array)return s;if(s instanceof ArrayBuffer)return new Uint8Array(s);if(ArrayBuffer.isView(s))return new Uint8Array(s.buffer,s.byteOffset,s.byteLength);throw new TypeError("expected an ArrayBuffer or typed array")}class PT extends Error{constructor(e="browser effect was cancelled before release"){super(e),this.name="BrowserEffectCancelledError",this.kind="browser-effect-cancelled"}}function JT({pauseBeforeEffect:s=!1}={}){let e=0,n=null,a=Z0(s);const l=new Set;function c($){a=Object.freeze({...a,...$});for(const B of l)B(a);return a}async function u({source:$,label:B="Rasa source"}){S("superseded by a new run");const W=`browser-run-${++e}`,X=await Vo(String($??""));return c({...Yv(a.pauseBeforeEffect),id:W,status:"running",source:xa({authority:"browser-observed",detail:`${X.byteLength.toLocaleString()} UTF-8 bytes`,digest:X.digest,encoding:X.encoding,kind:"source",label:B,byteLength:X.byteLength})}),W}function f($,B){return U($)?K(c({runtime:xa({authority:"runtime-report",kind:"execution",label:"Browser Wasm execution",...B})})):a}async function h($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Vo(B.payload);if(!U($))return null;const X=xa({authority:"browser-observed",kind:B.kind||"artifact",label:B.label||"Rasa artifact",detail:B.detail||md(B,W),count:B.count??null,unit:B.unit||null,...W});return K(c({artifact:X})),X}async function p($,B){if(!U($))return null;const W=await Vo(B.payload);if(!U($))return null;const X=xa({authority:B.authority||"browser-boundary",kind:B.kind||"boundary-input",label:B.label||"Browser boundary input",detail:B.detail||md(B,W),count:B.count??null,unit:B.unit||null,...W}),te={boundary:X};return B.artifact===!0&&!a.artifact&&(te.artifact=xa({...X,authority:"browser-observed",detail:B.artifactDetail||X.detail,kind:B.artifactKind||"rasa-capability-payload",label:B.artifactLabel||"Rasa capability payload"})),c({...te,status:a.pauseBeforeEffect?"paused":"effect-running"}),a.pauseBeforeEffect?(await new Promise((pe,Xe)=>{n={onRelease:B.onRelease||null,reject:Xe,resolve:pe,runId:$}}),U($)?(c({status:"effect-running"}),X):null):X}async function g($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Vo(B.payload);if(!U($))return null;if(a.effect&&a.effect.digest===W.digest&&a.effect.inputDigest===(B.inputDigest||null))return a.effect;const X=xa({authority:B.authority||"browser-effect",kind:B.kind||"effect",label:B.label||"Browser effect",detail:B.detail||md(B,W),count:B.count??null,unit:B.unit||null,inputDigest:B.inputDigest||null,...W});return K(c({effect:X})),X}function b($,B){return U($)?c({status:"error",error:{message:B?.message||String(B),name:B?.name||"Error"}}):a}function v(){if(!n)return!1;const $=n;n=null,c({status:"effect-running"});try{const B=$.onRelease?.();Promise.resolve(B).then($.resolve,$.reject)}catch(B){$.reject(B)}return!0}function S($="browser effect cancelled"){if(!n)return!1;const B=n;return n=null,c({status:"cancelled"}),B.reject(new PT($)),!0}function k(){S("witness reset"),c(Z0(a.pauseBeforeEffect))}function T($){const B=!!$;c({pauseBeforeEffect:B}),B||v()}function C($){return l.add($),()=>l.delete($)}function _(){return a}function U($){return!!($&&a.id===$)}function K($){const B=IT($);if(!!!($.runtime&&$.artifact&&$.boundary&&$.effect))return $;const X=B.length>0&&B.every(te=>te.status==="match");return c({correlations:B,status:X?"correlated":"mismatch"})}return Object.freeze({beforeEffect:p,beginRun:u,cancel:S,recordArtifact:h,recordEffect:g,recordError:b,recordRuntime:f,release:v,reset:k,setPauseBeforeEffect:T,snapshot:_,subscribe:C})}function Z0(s){return Object.freeze({...Yv(s),id:null,status:"idle"})}function Yv(s){return{artifact:null,boundary:null,correlations:[],effect:null,error:null,pauseBeforeEffect:s,runtime:null,source:null}}function xa(s){return Object.freeze({...s})}function md(s,e){return s.count!=null&&s.unit?`${Number(s.count).toLocaleString()} ${s.unit}`:e.byteLength!=null?`${Number(e.byteLength).toLocaleString()} observed bytes`:"Browser-observed payload"}function IT(s){const e=[];return s.artifact?.digest&&s.boundary?.digest&&e.push(pd("artifact-boundary","Artifact matches boundary input",s.artifact.digest===s.boundary.digest,s.artifact.digest,s.boundary.digest)),s.boundary?.digest&&s.effect?.inputDigest&&e.push(pd("boundary-effect","Effect consumed boundary input",s.boundary.digest===s.effect.inputDigest,s.boundary.digest,s.effect.inputDigest)),s.boundary?.count!=null&&s.effect?.count!=null&&e.push(pd("count",`${s.boundary.unit||"Boundary items"} preserved`,s.boundary.count===s.effect.count,s.boundary.count,s.effect.count)),e}function pd(s,e,n,a,l){return Object.freeze({actual:l,expected:a,id:s,label:e,status:n?"match":"mismatch"})}const Kv={source:gS,runtime:mS,artifact:zS,boundary:nS,effect:IS};function eA({model:s,onOpen:e,onRelease:n}){const a=Wv(s);return x.jsxs("footer",{className:"execution-witness-rail","data-status":s.status,children:[x.jsxs("button",{className:"witness-route",onClick:e,title:"See how this result moved from your Rasa code to the browser",type:"button",children:[x.jsxs("span",{className:"witness-route-label",children:[x.jsx(xS,{size:14})," Proof trail"]}),a.map((l,c)=>{const u=Kv[l.id];return x.jsxs(gc.Fragment,{children:[x.jsxs("span",{className:"witness-route-step","data-status":l.status,children:[x.jsx(u,{size:13}),x.jsxs("span",{children:[x.jsx("strong",{children:l.label}),x.jsx("small",{children:l.value})]})]}),c<a.length-1?x.jsx(gh,{"aria-hidden":"true",size:12}):null]},l.id)})]}),s.status==="paused"?x.jsxs("button",{className:"witness-release",onClick:n,type:"button",children:[x.jsx(yc,{fill:"currentColor",size:14})," Continue to browser"]}):x.jsx("span",{className:"witness-status","data-status":s.status,title:Qv(s.status),children:Xv(s.status)})]})}function tA({model:s,onPauseChange:e,onRelease:n}){const a=Wv(s);return x.jsxs("div",{className:"execution-witness-panel",children:[x.jsxs("header",{className:"witness-panel-summary",children:[x.jsxs("div",{children:[x.jsx("span",{children:"Proof trail for this browser run"}),x.jsx("h2",{children:"How this result was made"}),x.jsx("small",{title:"This identifier is created by the browser for this page. It is not a compiler-authored run ID.",children:aA(s.id)})]}),x.jsx("em",{"data-status":s.status,title:Qv(s.status),children:Xv(s.status)})]}),x.jsxs("section",{className:"witness-authority",children:[x.jsx(P0,{label:"Reported by Rasa",detail:"Execution facts that came from Rasa's own runtime report",help:"These facts describe the Rasa execution itself. The Studio displays them but does not invent them.",tone:"runtime"}),x.jsx(P0,{label:"Checked in this browser",detail:"Measurements made around the hand-off to Tone.js or Canvas",help:"The browser measures matching data on both sides of the hand-off. These checks are useful evidence, but they are not compiler authority.",tone:"browser"})]}),x.jsxs("details",{className:"witness-reading-guide",children:[x.jsxs("summary",{children:[x.jsx(Rd,{size:15})," How to read this proof"]}),x.jsxs("div",{children:[x.jsx("p",{children:"The five steps follow one result from the code you can edit to the sound or image the browser produced."}),x.jsxs("p",{children:[x.jsx("strong",{children:"Reported by Rasa"})," describes the execution. ",x.jsx("strong",{children:"Checked in this browser"})," compares the actual data used at the browser boundary."]}),x.jsx("p",{children:"Open any step's technical details to inspect data kinds, counts, timings, and SHA-256 fingerprints."})]})]}),x.jsxs("section",{className:"witness-control",children:[x.jsxs("div",{children:[x.jsx(qS,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:"Pause before showing or playing"}),x.jsx("small",{children:"Let Rasa reach the browser hand-off, inspect the result, then choose when Canvas or Tone.js may use it."})]})]}),x.jsx("button",{"aria-checked":s.pauseBeforeEffect,"aria-label":"Pause before showing or playing",className:"witness-switch",onClick:()=>e(!s.pauseBeforeEffect),role:"switch",type:"button",children:x.jsx("i",{})}),s.status==="paused"?x.jsxs("button",{className:"witness-panel-release",onClick:n,type:"button",children:[x.jsx(yc,{fill:"currentColor",size:14})," Continue"]}):null]}),x.jsx("section",{className:"witness-step-grid",children:a.map(l=>x.jsx(nA,{step:l},l.id))}),s.error?x.jsxs("section",{className:"witness-error",role:"alert",children:[x.jsx(Jr,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:s.error.name}),x.jsx("small",{children:s.error.message})]})]}):null,x.jsxs("section",{className:"witness-correlations",children:[x.jsxs("header",{children:[x.jsx("span",{children:"Do the hand-offs match?"}),x.jsx("strong",{children:s.correlations.length})]}),s.correlations.length?s.correlations.map(l=>x.jsxs("div",{"data-status":l.status,children:[l.status==="match"?x.jsx(oS,{size:15}):x.jsx(Jr,{size:15}),x.jsxs("span",{children:[x.jsx("strong",{children:uA(l)}),x.jsx("small",{children:fA(l)})]})]},l.id)):x.jsx("p",{children:"These checks appear after Canvas draws the result or Tone.js schedules the score."})]}),x.jsxs("section",{className:"witness-core-gaps",children:[x.jsxs("span",{children:["What this does not prove yet ",x.jsx(Rd,{"aria-label":"About current proof limits",size:13,title:"The Studio names missing evidence instead of replacing it with a browser claim."})]}),x.jsx("p",{children:"This browser can match what it observed. Rasa does not yet publish a compiler-authored run identity or result fingerprint, so the Studio does not claim cross-host verification."})]})]})}function nA({step:s}){const e=Kv[s.id];return x.jsxs("article",{"data-status":s.status,children:[x.jsxs("header",{children:[x.jsx(e,{size:16}),x.jsx("span",{children:s.eyebrow})]}),x.jsx("h3",{children:s.label}),x.jsx("p",{children:s.detail}),s.status==="observed"?x.jsxs("details",{className:"witness-technical",children:[x.jsx("summary",{children:"Technical details"}),x.jsxs("dl",{children:[x.jsxs("div",{children:[x.jsx("dt",{title:"Who supplied this evidence",children:"Evidence source"}),x.jsx("dd",{children:s.authority})]}),s.observationLabel?x.jsxs("div",{children:[x.jsx("dt",{children:"Observed as"}),x.jsx("dd",{children:s.observationLabel})]}):null,s.kind?x.jsxs("div",{children:[x.jsx("dt",{children:"Data kind"}),x.jsx("dd",{children:s.kind})]}):null,s.digest?x.jsxs("div",{children:[x.jsx("dt",{title:"A browser-computed fingerprint used only for comparisons inside this page",children:"SHA-256"}),x.jsx("dd",{title:s.digest,children:uc(s.digest,16)})]}):null,s.count!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Payload"}),x.jsxs("dd",{children:[Number(s.count).toLocaleString()," ",s.unit]})]}):null,s.elapsedMs!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Elapsed"}),x.jsxs("dd",{children:[Number(s.elapsedMs).toFixed(1)," ms"]})]}):null,s.optimizerExecutions!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Optimized regions"}),x.jsx("dd",{children:Number(s.optimizerExecutions).toLocaleString()})]}):null,s.executionTier?x.jsxs("div",{children:[x.jsx("dt",{children:"Execution tier"}),x.jsx("dd",{children:s.executionTier})]}):null]})]}):null]})}function P0({detail:s,help:e,label:n,tone:a}){return x.jsxs("div",{"data-tone":a,title:e,children:[x.jsx("i",{}),x.jsxs("span",{children:[x.jsxs("strong",{children:[n," ",x.jsx(Rd,{"aria-hidden":"true",size:12})]}),x.jsx("small",{children:s})]})]})}function Wv(s){const e=s.status==="paused"&&s.boundary?"Evaluation is suspended at the asynchronous capability boundary; its runtime report completes after release.":"Waiting for this run";return[Hr("source","Your Rasa code","1 · Code",s.source),Hr("runtime","Rasa ran it","2 · Execution",s.runtime,e),Hr("artifact",rA(s.artifact),"3 · Rasa output",s.artifact),Hr("boundary",lA(s.boundary),"4 · Browser hand-off",s.boundary),Hr("effect",oA(s.effect),"5 · What you see or hear",s.effect)]}function Hr(s,e,n,a,l="Waiting for this run"){return{id:s,eyebrow:n,label:e,value:iA(a),detail:cA(s,a,l),authority:a?sA(a.authority):"Not observed",observationLabel:a?.label||null,kind:a?.kind||null,digest:a?.digest||null,count:a?.count??null,unit:a?.unit||"items",elapsedMs:a?.elapsedMs??null,optimizerExecutions:a?.optimizerExecutions??null,executionTier:a?.executionTier||null,status:a?"observed":"waiting"}}function iA(s){return s?s.count!=null?`${Number(s.count).toLocaleString()} ${s.unit||"items"}`:s.elapsedMs!=null?`${Number(s.elapsedMs).toFixed(1)} ms`:s.digest?uc(s.digest):s.status||"observed":"waiting"}function sA(s){return s==="runtime-report"?"Reported by Rasa":s==="browser-boundary"?"Checked at the browser hand-off":s==="browser-effect"?"Checked where the browser used it":"Checked in this browser"}function Xv(s){return s==="correlated"?"route matches":s==="mismatch"?"mismatch found":s==="paused"?"ready to show or play":s==="effect-running"?"browser applying result":s==="running"?"Rasa running":s==="error"?"run failed":s==="cancelled"?"run cancelled":"no run yet"}function Qv(s){return s==="correlated"?"Every observed hand-off matched for this run.":s==="mismatch"?"At least one observed hand-off did not match.":s==="paused"?"Rasa has reached the browser hand-off. Canvas or Tone.js is waiting for you.":s==="effect-running"?"The browser is applying the Rasa-produced result.":s==="running"?"The Rasa browser-Wasm session is evaluating your code.":s==="error"?"The run failed before the proof trail completed.":s==="cancelled"?"This browser run was intentionally cancelled.":"Run the visible Rasa program to create a proof trail."}function aA(s){if(!s)return"Run an example to create this trail";const e=String(s).match(/(\d+)$/)?.[1];return e?`Observed in this browser as run ${e}`:"Observed in this browser"}function rA(s){return s?.kind==="wmp-2-rgba-bytes"?"Rasa produced the pixels":s?.kind==="ordinary-rasa-scene"?"Rasa returned the scene":s?.kind==="rasa-capability-payload"?"Rasa produced the score":"Rasa produced a result"}function lA(s){return s?.kind==="ordinary-value-capability-input"?"The score reached Tone.js":s?.kind==="canvas-image-data-input"?"The pixels reached Canvas":s?.kind==="canvas-primitive-input"?"The scene reached Canvas":"The result reached the browser"}function oA(s){return s?.kind==="tone-schedule"?"Tone.js scheduled the music":s?.kind==="canvas-image-data-upload"?"Canvas displayed the pixels":s?.kind==="canvas-primitive-render"?"Canvas drew the scene":"The browser used the result"}function cA(s,e,n){if(!e)return n;if(s==="source")return"This is the code currently visible in the editor.";if(s==="runtime"){const a=Number(e.optimizerExecutions||0);return a>0?`Rasa ran this code inside the browser and used ${a.toLocaleString()} optimized packed region${a===1?"":"s"}.`:"Rasa ran this code inside the browser. This result did not need the packed-data optimizer."}return e.detail||"This step was observed in the browser."}function uA(s){return s.id==="artifact-boundary"?"Rasa's output reached the hand-off unchanged":s.id==="boundary-effect"?"The browser used that same hand-off":s.id==="count"?"Nothing was dropped along the way":s.label}function fA(s){return s.id==="count"?s.status==="match"?`${Number(s.expected).toLocaleString()} sent · ${Number(s.actual).toLocaleString()} used`:`${Number(s.expected).toLocaleString()} sent, but ${Number(s.actual).toLocaleString()} used`:s.status==="match"?"The browser measured the data as identical at both steps.":`Expected ${uc(s.expected)} but observed ${uc(s.actual)}.`}function J0(s){const e=String(s||""),n=yd(e,/:eval\s+\{:status\s+:(\S+)/),a=yd(e,/:status\s+:(\S+)/),l=yd(e,/:failed-phase\s+(:[^\s}]+)/);if(a==="ok"&&n==="ok"){const c=EA(e);if(c)return{kind:"value",text:c.text,testRun:c.events};const u=Yr(e,":rendered-value")??"nil",f=AA(u);return{kind:"value",text:f?.text??u,...f?.events?{testRun:f.events}:{}}}return{kind:"error",text:$A(e,l)}}function dA(s){const e=String(s||"");return/:status\s+:failed/.test(e)||/:eval\s+\{:status\s+:failed/.test(e)}function hA(s){const e=rl(String(s||""));if(!e||e.kind!=="map")return null;const n=M(e,"execution"),a=M(e,"optimizer");if(!n&&!a)return null;const l=ve(M(a,"executed"))??0,c=ve(M(a,"admitted"))??0,u=et(M(a,"fallbacks")).filter(f=>f.kind==="map").map(Zv);return{productLane:de(M(n,"product-lane"))||null,fallbackTier:"runtime-wasm",runtimeExecutionTier:de(M(n,"tier"))||null,runtimeStatus:de(M(n,"status"))||null,fallbackPoint:de(M(n,"fallback-point"))||null,deopt:de(M(n,"deopt"))||null,osr:de(M(n,"osr"))||null,optimizedTier:"wasmgc",optimizedStatus:l>0?"executed":u.length>0?"fallback":c>0?"admitted":"not-entered",optimizedPath:l>0?"runtime-wasm-callable-region":u.length>0?"runtime-wasm-fallback":"runtime-wasm-only",optimizer:{enabled:Hn(M(a,"enabled"))===!0,probes:ve(M(a,"probes"))??0,admitted:c,executed:l,missed:ve(M(a,"missed"))??0,fallbacks:u}}}function mA(s){const e=rl(String(s||""));if(!e||e.kind!=="map")return{status:"unparseable",inspect:null,evalStatus:null,renderedValue:null,value:null,execution:null,optimizer:null,phases:[],runtime:null,plan:null,diagnostics:[]};const n=de(M(e,"rasa/inspect"))||null,a=M(e,"eval"),l=M(a,"rendered-value"),c=l?.kind==="string"?l.value:null,u=M(a,"value")||(c?rl(c):null);return{status:de(M(e,"status"))||(n?"ok":"unknown"),inspect:n,evalStatus:de(M(a,"status"))||null,renderedValue:c,value:$r(u),execution:kA(M(e,"execution"),M(e,"lane")),optimizer:TA(M(e,"optimizer")),phases:pA(e),runtime:vA(e),plan:xA(M(e,"plan")),diagnostics:SA(e)}}const Fv=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function pA(s){return Fv.map(([e,n])=>{const a=M(s,e);if(!a||a.kind==="nil")return{id:e,label:n,status:"not-requested",detail:"not captured",diagnostics:0};const l=gA(a),c=yA(e,a,l);return{id:e,label:n,status:de(M(a,"status"))||"available",detail:bA(e,c),diagnostics:l,metrics:c}})}function gA(s){return ve(M(s,"diagnostic-count"))??et(M(s,"diagnostics")).length}function yA(s,e,n){if(s==="facts"){const a=M(e,"summary");return{diagnostics:n,facts:ve(M(a,"facts"))??0,declaredFacts:ve(M(a,"declared-facts"))??0,metadataContracts:ve(M(a,"metadata-contracts"))??0,mode:de(M(e,"mode"))||"unknown"}}return s==="plan"?{diagnostics:n,lanes:et(M(e,"lanes")).length,decisions:et(M(e,"decisions")).length,candidates:et(M(e,"candidates")).length,rejected:et(M(e,"rejected")).length,fallbacks:et(M(e,"fallbacks")).length}:s==="checks"?{diagnostics:n,checks:et(M(e,"results")).length,action:de(M(e,"action"))||null}:{diagnostics:n}}function bA(s,e){return s==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:s==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:s==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:s==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function vA(s){const e=M(s,"session");return{lane:de(M(s,"lane"))||null,memoryPath:de(M(s,"memory-path"))||null,collectionImpl:de(M(s,"collection-impl"))||null,hostImports:Hn(M(s,"host-imports"))===!0,target:mt(M(s,"target"))||null,sessionMode:de(M(e,"mode"))||null,persistentDefs:Hn(M(e,"persistent-defs"))===!0}}function xA(s){return!s||s.kind!=="map"?null:{lanes:et(M(s,"lanes")).map(e=>qr(e,"lane")),decisions:et(M(s,"decisions")).map(e=>qr(e,"decision")),candidates:et(M(s,"candidates")).map(e=>qr(e,"candidate")),rejected:et(M(s,"rejected")).map(e=>qr(e,"rejected")),fallbacks:et(M(s,"fallbacks")).map(e=>qr(e,"fallback"))}}function qr(s,e){return{type:e,lane:ln(M(s,"lane")),memoryPath:ln(M(s,"memory-path")),wmp:ln(M(s,"wmp")),status:ln(M(s,"status")),decision:ln(M(s,"decision")),candidate:ln(M(s,"candidate")),family:ln(M(s,"family")),evidence:ln(M(s,"evidence")),reason:mt(M(s,"reason"))||mt(M(s,"message"))||null}}function SA(s){const e=et(M(s,"diagnostics"));return(e.length>0?e:Fv.flatMap(([a])=>et(M(M(s,a),"diagnostics")).map(l=>({item:l,id:a})))).map(a=>{const l=a.item||a;return wA(l,a.id||null)})}function wA(s,e){const n=M(s,"rasa.diagnostic/data")||M(s,"data"),a=ln(M(s,"rasa.diagnostic/severity"))||"info",l=M(s,"rasa.diagnostic/primary-span")||M(s,"span")||M(n,"rasa.error/span");return{phase:ln(M(s,"rasa.diagnostic/phase"))||ln(M(s,"phase"))||e,severity:a,code:ln(M(s,"rasa.diagnostic/code")),kind:ln(M(s,"kind")),message:mt(M(s,"rasa.diagnostic/summary"))||mt(M(s,"message"))||mt(M(n,"rasa.error/message"))||"Diagnostic record",detail:mt(M(s,"rasa.diagnostic/detail"))||null,recoverable:Hn(M(s,"recoverable"))??a!=="error",span:l?.kind==="map"?{sourceId:mt(M(l,"source-id"))||null,start:ve(M(l,"start")),end:ve(M(l,"end"))}:null}}function ln(s){return de(s)||(s?.kind==="string"?s.value:s?.kind==="symbol"?s.raw:null)}function Zv(s){return{symbol:mt(M(s,"symbol"))||null,arity:ve(M(s,"arity"))??null,reason:de(M(s,"reason"))||null,fallback:de(M(s,"fallback"))||null,arguments:et(M(s,"arguments")).filter(e=>e.kind==="map").map(e=>({index:ve(M(e,"index"))??null,family:de(M(e,"family"))||null,bytes:ve(M(e,"bytes")),movement:de(M(e,"movement"))||null}))}}function kA(s,e){return!s&&!e?null:{productLane:de(M(s,"product-lane"))||de(M(e,"product-lane"))||null,tier:de(M(s,"tier"))||de(M(e,"runtime-execution-tier"))||null,status:de(M(s,"status"))||de(M(e,"runtime-status"))||null,fallbackPoint:de(M(s,"fallback-point"))||de(M(e,"fallback-point"))||null}}function TA(s){return!s||s.kind!=="map"?null:{enabled:Hn(M(s,"enabled"))===!0,probes:ve(M(s,"probes"))??0,admitted:ve(M(s,"admitted"))??0,executed:ve(M(s,"executed"))??0,missed:ve(M(s,"missed"))??0,fallbacks:et(M(s,"fallbacks")).filter(e=>e.kind==="map").map(Zv)}}function $r(s){if(!s)return null;switch(s.kind){case"nil":return{kind:"nil",value:null};case"boolean":case"number":case"string":return{kind:s.kind,value:s.value};case"keyword":return{kind:"keyword",name:s.name};case"symbol":case"char":return{kind:s.kind,raw:s.raw};case"vector":case"list":return{kind:s.kind,items:s.items.map($r)};case"set":return{kind:"set",items:s.items.map($r).sort(I0)};case"map":return{kind:"map",entries:s.entries.map(e=>({key:$r(e.key),value:$r(e.value)})).sort((e,n)=>I0(e.key,n.key))};default:return{kind:s.kind||"unknown",raw:s.raw||""}}}function I0(s,e){return JSON.stringify(s).localeCompare(JSON.stringify(e))}function AA(s){const e=rl(String(s||""));return!e||e.kind!=="map"||de(M(e,"type"))!=="test-run"?null:{text:Pv(e),events:Jv(e)}}function EA(s){const e=rl(String(s||""));if(!e||e.kind!=="map")return null;const n=M(M(e,"eval"),"value");return!n||n.kind!=="map"||de(M(n,"type"))!=="test-run"?null:{text:Pv(n),events:Jv(n)}}function Pv(s){const e=de(M(s,"status"))||"unknown",n=mt(M(s,"message")),a=Yi(M(s,"namespaces")),l=Yi(M(s,"files")),c=Yi(M(s,"paths")),u=et(M(s,"results")).filter(g=>g.kind==="map"),f=[`Test run: ${CA(s,e)}`];n&&f.push(n),eb(f,"paths",c),eb(f,"files",l);const h=a.length>0&&(e==="ok"||u.length>0);(h||u.length>0)&&f.push("");const p=new Set;for(const g of h?a:[]){f.push(g),Gi(f);const b=f.length;u.forEach((v,S)=>{qA(v)===g&&(gd(f,v,g),p.add(S))}),f.length===b&&f.push("  no assertion records returned"),Gi(f)}return h?u.some((g,b)=>!p.has(b))&&(f.push("<unknown-namespace>"),u.forEach((g,b)=>{p.has(b)||gd(f,g,null)}),Gi(f)):(u.forEach((g,b)=>{gd(f,g,null),p.add(b)}),u.length>0&&Gi(f)),u.length===0&&!h&&e==="ok"&&(f.push("No selected assertion records returned."),f.push("")),f.push(`selected ${ve(M(s,"selected"))??0}, skipped ${ve(M(s,"skipped"))??0}, tests ${ve(M(s,"test"))??0}, pass ${ve(M(s,"pass"))??0}, fail ${ve(M(s,"fail"))??0}, error ${ve(M(s,"error"))??0}, exit-code ${ve(M(s,"exit-code"))??0}`),Hn(M(s,"exit-requested?"))===!0&&f.push("exit requested: true"),Hn(M(s,"stopped?"))===!0&&f.push(`stopped: ${de(M(s,"stop-reason"))||"unknown"}`),f.join(`
`)}function Jv(s){return{status:de(M(s,"status"))||"unknown",message:mt(M(s,"message"))||null,namespaces:Yi(M(s,"namespaces")),files:Yi(M(s,"files")),paths:Yi(M(s,"paths")),selected:ve(M(s,"selected"))??0,skipped:ve(M(s,"skipped"))??0,tests:ve(M(s,"test"))??0,pass:ve(M(s,"pass"))??0,fail:ve(M(s,"fail"))??0,error:ve(M(s,"error"))??0,exitRequested:Hn(M(s,"exit-requested?"))===!0,exitCode:ve(M(s,"exit-code"))??0,stopped:Hn(M(s,"stopped?"))===!0,stopReason:de(M(s,"stop-reason"))||null,events:et(M(s,"results")).filter(e=>e.kind==="map").map(MA)}}function MA(s){const e=Ac(M(s,"test"))||null,n=e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null,a=e?.includes("/")?e.slice(e.lastIndexOf("/")+1):e,l=RA(M(s,"span")),c=de(M(s,"error-kind"))||null,u=Iv(M(s,"error-data")),f=mt(M(s,"message"))||null,h=t1(c,f);return{status:e1(s),test:e,namespace:n,name:a,context:Yi(M(s,"context")),form:M(s,"form")?.raw||null,expected:M(s,"expected")?.raw||null,actual:M(s,"actual")?.raw||null,message:f,...c?{errorKind:c}:{},...u?{error:u}:{},...h?.explanation?{explanation:h.explanation}:{},...h?.nextStep?{nextStep:h.nextStep}:{},span:l,diff:n1(M(s,"diff"))||null}}function RA(s){if(!s||s.kind!=="map")return null;const e=mt(M(s,"source-id"))||mt(M(s,"source"));return e?{source:e,start:ve(M(s,"start")),end:ve(M(s,"end"))}:null}function eb(s,e,n){if(n.length!==0){Gi(s),s.push(`requested ${e}:`);for(const a of n)s.push(`  ${a}`)}}function CA(s,e){return e!=="ok"?e:(ve(M(s,"error"))??0)>0?"error":(ve(M(s,"fail"))??0)>0||(ve(M(s,"exit-code"))??0)!==0?"failed":"ok"}function gd(s,e,n){const a=e1(e),l=UA(Ac(M(e,"test"))||"<unknown-test>",n);s.push(`${zA(a)} ${l}`);for(const k of Yi(M(e,"context")))s.push(`  ${k}`);const c=M(e,"form");if(c&&s.push(`  ${c.raw}`),a==="pass"){s.push("");return}if(a==="no-assertions"){const k=mt(M(e,"message"));k&&s.push(`  ${k}`),s.push("");return}Gi(s);const u=mt(M(e,"message")),f=de(M(e,"error-kind")),h=Iv(M(e,"error-data"));f&&s.push(`  error-kind: ${f}`),u&&s.push(`  message: ${u}`),h&&jA(s,h,"  ");const p=t1(f,u);p?.explanation&&s.push(`  reason: ${p.explanation}`),p?.nextStep&&s.push(`  next: ${p.nextStep}`);const g=M(e,"expected");g&&s.push(`  expected: ${g.raw}`);const b=M(e,"actual");b&&s.push(`  actual:   ${b.raw}`);const v=n1(M(e,"diff"));v&&(Gi(s),s.push("  diff:"),v.split(`
`).forEach(k=>s.push(`    ${k}`)));const S=HA(M(e,"span"));S&&(Gi(s),s.push(`  source: ${S}`)),s.push("")}function Iv(s){return!s||s.kind!=="map"||Hn(M(s,"rasa/error"))!==!0?null:{category:de(M(s,"rasa.error/category"))||null,kind:de(M(s,"rasa.error/kind"))||null,message:mt(M(s,"rasa.error/message"))||null,data:OA(M(s,"rasa.error/data"))}}function OA(s){return!s||s.kind!=="map"?[]:s.entries.map(e=>({key:NA(e.key),value:e.value.raw||mt(e.value),role:DA(e.key)}))}function NA(s){return s?.kind==="keyword"?s.name:s?.kind==="symbol"||s?.kind==="string"?s.value||s.raw:s?.raw||"<unknown>"}function DA(s){return s?.kind!=="keyword"?"detail":s.name==="rasa.host/capability"||s.name==="rasa.host/target"?"stable":"detail"}function jA(s,e,n){e.category&&s.push(`${n}category: ${e.category}`),e.kind&&s.push(`${n}kind: ${e.kind}`),e.message&&s.push(`${n}error-message: ${e.message}`),tb(s,"data",e.data.filter(a=>a.role==="stable"),n),tb(s,"details",e.data.filter(a=>a.role!=="stable"),n)}function tb(s,e,n,a){if(n.length!==0){s.push(`${a}${e}:`);for(const l of n)s.push(`${a}  ${l.key} ${l.value}`)}}function e1(s){const e=de(M(s,"type"))||"unknown";return e==="test-event"?de(M(s,"status"))||"test-event":e}function zA(s){return s==="no-assertions"?"NO ASSERTIONS":s.toUpperCase()}function t1(s,e){return s?s==="missing-linked-var"?BA(e)||{explanation:"Evaluation reached a global symbol that is not linked to a runtime var.",nextStep:"Require or refer the source namespace, or define the var before calling it."}:s==="unsupported-reader-macro"?{explanation:"The reader saw syntax that Rasa does not support yet.",nextStep:"Rewrite this form using supported reader syntax."}:s==="unsupported-macro-shape"?{explanation:"The macro expander saw a macro form shape Rasa does not accept yet.",nextStep:"Rewrite the macro call to one of the currently supported shapes."}:s==="unsupported-analyzer-form"?{explanation:"The analyzer saw a source form that Rasa cannot lower yet.",nextStep:"Rewrite this source form using supported Rasa forms."}:s==="unsupported-runtime-node"?{explanation:"The evaluator received an IR node that this runtime path cannot execute yet.",nextStep:"Use diagnostics or inspect output to locate the source form, then rewrite it or defer this feature."}:null:null}function BA(s){const e=LA(s);return["deftest","is","testing","are","run-tests"].includes(e)?{explanation:"This test helper belongs to `rasa.test`, but it is not referred in the current namespace.",nextStep:"Require it with `(require '[rasa.test :refer [deftest is testing are run-tests]])` or add the same `:refer` to the namespace form."}:e==="runner/run"?{explanation:"`runner` is not a loaded alias for the user-space `rasa.test.runner` namespace.",nextStep:"Require it with `(require '[rasa.test.runner :as runner])` or add `[rasa.test.runner :as runner]` to the namespace form."}:null}function LA(s){return String(s||"").match(/^linked global `([^`]+)` is not available$/)?.[1]||null}function n1(s){if(!s||s.kind!=="map")return"";const e=de(M(s,"kind"));if(e==="map"){const n=[];for(const a of et(M(s,"changed")))a.kind==="map"&&(n.push(M(a,"key")?.raw||"changed value"),fc(n,"expected",M(a,"expected")),fc(n,"actual  ",M(a,"actual")));return Go(n,"missing",M(s,"missing")),Go(n,"extra",M(s,"extra")),n.length?n.join(`
`):s.raw}if(e==="vector")return _A("index",s);if(e==="set"){const n=[];return Go(n,"missing",M(s,"missing")),Go(n,"extra",M(s,"extra")),n.length?n.join(`
`):s.raw}if(e==="string"||e==="scalar"||e==="opaque"){const n=[];return xs(n,"expected",M(s,"expected")),xs(n,"actual  ",M(s,"actual")),xs(n,"prefix-length",M(s,"prefix-length")),xs(n,"expected-count",M(s,"expected-count")),xs(n,"actual-count",M(s,"actual-count")),n.length?n.join(`
`):s.raw}return e==="equal"?"values are equal":s.raw}function _A(s,e){const n=[];for(const a of et(M(e,"changed")))a.kind==="map"&&(n.push(`${s} ${M(a,s)?.raw||"?"}`),fc(n,"expected",M(a,"expected")),fc(n,"actual  ",M(a,"actual")));return xs(n,"expected-count",M(e,"expected-count")),xs(n,"actual-count",M(e,"actual-count")),n.length?n.join(`
`):e.raw}function xs(s,e,n){n&&s.push(`${e} ${n.raw}`)}function fc(s,e,n){n&&s.push(`  ${e} ${n.raw}`)}function Go(s,e,n){const a=et(n);a.length>0&&s.push(`${e}: ${a.map(l=>l.raw).join(", ")}`)}function HA(s){if(!s||s.kind!=="map")return"";const e=mt(M(s,"source-id"))||mt(M(s,"source"));if(!e)return"";const n=ve(M(s,"start")),a=ve(M(s,"end"));return n!==null&&a!==null?`${e}:${n}..${a}`:e}function qA(s){const e=Ac(M(s,"test"));return e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null}function UA(s,e){return!e||!s.startsWith(`${e}/`)?s:s.slice(e.length+1)}function Gi(s){s[s.length-1]!==""&&s.push("")}function M(s,e){if(!s||s.kind!=="map")return null;for(const n of s.entries)if(de(n.key)===e)return n.value;return null}function et(s){return s?.kind==="vector"?s.items:[]}function Yi(s){return et(s).map(Ac).filter(e=>e!==null)}function de(s){return s?.kind==="keyword"?s.name:null}function Ac(s){return s?s.kind==="string"?s.value:s.kind==="symbol"||s.kind==="keyword"?s.raw:s.raw??null:null}function mt(s){return s?s.kind==="string"?s.value:s.kind==="nil"?"":s.raw||"":""}function ve(s){return s?.kind==="number"?s.value:null}function Hn(s){return s?.kind==="boolean"?s.value:null}function rl(s){const e=new VA(s);try{const n=e.readValue();return e.skipWhitespace(),n}catch{return null}}class VA{constructor(e){this.text=e,this.index=0}readValue(){this.skipWhitespace();const e=this.index,n=this.text[this.index];if(!n)throw new Error("expected EDN value");if(n==='"'){const{value:l,end:c}=i1(this.text,this.index);return this.index=c,{kind:"string",value:l,raw:this.text.slice(e,this.index)}}if(n===":"){const l=this.readToken();return{kind:"keyword",name:l.slice(1),raw:l}}if(n==="[")return this.readDelimited("vector","[","]");if(n==="(")return this.readDelimited("list","(",")");if(n==="{")return this.readMap();if(n==="#"&&this.text[this.index+1]==="{")return this.readSet();if(n==="\\")return{kind:"char",raw:this.readToken()};const a=this.readToken();return a==="nil"?{kind:"nil",value:null,raw:a}:a==="true"||a==="false"?{kind:"boolean",value:a==="true",raw:a}:/^[+-]?(?:\d+\.\d+|\d+)$/.test(a)?{kind:"number",value:Number(a),raw:a}:{kind:"symbol",raw:a}}readDelimited(e,n,a){const l=this.index;this.expect(n);const c=[];for(;;){if(this.skipWhitespace(),this.text[this.index]===a)return this.index+=1,{kind:e,items:c,raw:this.text.slice(l,this.index)};c.push(this.readValue())}}readMap(){const e=this.index;this.expect("{");const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"map",entries:n,raw:this.text.slice(e,this.index)};const a=this.readValue(),l=this.readValue();n.push({key:a,value:l})}}readSet(){const e=this.index;this.index+=2;const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"set",items:n,raw:this.text.slice(e,this.index)};n.push(this.readValue())}}readToken(){const e=this.index;for(;this.index<this.text.length&&!GA(this.text[this.index]);)this.index+=1;if(this.index===e)throw new Error("expected token");return this.text.slice(e,this.index)}expect(e){if(this.text[this.index]!==e)throw new Error(`expected ${e}`);this.index+=1}skipWhitespace(){for(;this.index<this.text.length&&/[\s,]/.test(this.text[this.index]);)this.index+=1}}function GA(s){return/[\s,\[\]\(\)\{\}"]/.test(s)}function yd(s,e){const n=e.exec(s);return n?n[1].replace(/^:/,""):""}function $A(s,e){const n=Yr(s,":rendered-error");if(n)return n;const a=s.indexOf(":eval {:status :failed"),l=a>=0?Yr(s.slice(a),":message"):"";if(l)return l;const c=Yr(s,":error")||Yr(s,":message");if(c)return c;const u=e?` in ${e}`:"",f=s.match(/:diagnostics\s+\[(.*?)]/s)?.[1]?.trim();return f?`Evaluation failed${u}.
${f}`:`Evaluation failed${u}.`}function Yr(s,e){const n=s.indexOf(e);if(n<0)return null;let a=n+e.length;for(;a<s.length&&/\s/.test(s[a]);)a+=1;if(s[a]!=='"')return null;const l=i1(s,a);return l?l.value:null}function i1(s,e){let n="",a=!1;for(let l=e+1;l<s.length;l+=1){const c=s[l];if(a){n+=YA(c),a=!1;continue}if(c==="\\"){a=!0;continue}if(c==='"')return{value:n,end:l+1};n+=c}return null}function YA(s){return s==="n"?`
`:s==="r"?"\r":s==="t"?"	":s==="b"?"\b":s==="f"?"\f":s}class Ns extends Error{constructor(e,n,a={}){super(n),this.name="BrowserCapabilityError",this.kind=e,this.data=a}}class Ts{constructor(e=[]){this.allowed=new Set(e.map(String))}static fromManifest(e={}){return new Ts(e.allow||[])}allows(e,n){return this.allowed.has("*")||this.allowed.has(ll(e,n))}entries(){return[...this.allowed].sort()}}class Bh{constructor(){this.handlers=new Map}register(e,n,a){return this.handlers.set(ll(e,n),a),this}invoke(e,n,a){const l=ll(e,n),c=this.handlers.get(l);if(!c)throw new Ns("adapter-missing",`browser capability adapter is missing for ${l}`,Lh(e,n));return c(a)}entries(){return[...this.handlers.keys()]}}class KA{constructor({registry:e=new Bh,policy:n=new Ts}={}){this.registry=e,this.policy=n instanceof Ts?n:Ts.fromManifest(n),this.lastTrace=null}call(e){const n={requestText:e,responseText:""};try{const a=s1(e),l=uh(a.package),c=uh(a.export),u=Array.isArray(a.args)?a.args:[],f=ll(l,c);if(Object.assign(n,{packageName:l,exportName:c,capability:f,argsCount:u.length}),!this.policy.allows(l,c))throw new Ns("policy-denied",`browser policy denies ${f}`,Lh(l,c));const h=this.registry.invoke(l,c,u);if(uE(h))return this.lastTrace={...n,status:"pending",suspended:!0},h.then(g=>{const b=nb(g);return this.lastTrace={...n,status:"completed",suspended:!0,resumed:!0,responseText:b},b},g=>{const b=ib(sb(g),g.message||String(g),ab(n,g));return this.lastTrace={...n,status:"failed",suspended:!0,resumed:!0,kind:sb(g),error:g.message,responseText:b},b});const p=nb(h);return this.lastTrace={...n,status:"completed",responseText:p},p}catch(a){const l=a instanceof Ns?a.kind:"provider-error",c=ib(l,a.message||String(a),ab(n,a));return this.lastTrace={...n,status:"failed",kind:l,error:a.message,responseText:c},c}}async callAsync(e){return await this.call(e)}}class WA{constructor({manifestUrl:e,manifest:n,runtimeUrl:a,adapterBaseUrl:l=null,optimizerManifestUrl:c=null,sourceLibraries:u=[],packages:f=[],packageBundleText:h="",initialNamespace:p="",registry:g=new Bh,providerInstances:b=new Map,policy:v=new Ts,host:S=null}){this.manifestUrl=e,this.manifest=n,this.runtimeUrl=a,this.adapterBaseUrl=l,this.optimizerManifestUrl=c,this.sourceLibraries=u,this.packages=f,this.packageBundleText=h,this.initialNamespace=p,this.registry=g,this.providerInstances=b,this.policy=v,this.host=S||new KA({registry:g,policy:v})}engineOptions(e={}){return{...e,host:e.host??this.host,...this.adapterBaseUrl?{adapterBaseUrl:this.adapterBaseUrl}:{},...this.optimizerManifestUrl?{optimizerManifestUrl:this.optimizerManifestUrl}:{}}}configureSession(e,n,a={phases:"all"}){const l=[];this.packageBundleText&&l.push(e.loadPackage(n,this.packageBundleText));for(const c of this.sourceLibraries)l.push(nE(e,n,c,a));return this.initialNamespace&&l.push(e.evaluateSession(n,`(ns ${this.initialNamespace})`,a)),l}async configureSessionAsync(e,n,a={phases:"all"}){const l=[];this.packageBundleText&&l.push(await e.loadPackageAsync(n,this.packageBundleText));for(const c of this.sourceLibraries)l.push(await iE(e,n,c,a));return this.initialNamespace&&l.push(await e.evaluateSessionAsync(n,`(ns ${this.initialNamespace})`,a)),l}}function ll(s,e){return`${s}/${e}`}async function XA(s,e={}){const n=lE(s),a=e.readJson||oE,l=e.readText||cE,c=e.importModule||(U=>import(U)),u=e.fetch||globalThis.fetch?.bind(globalThis),f=e.target||"wasm-browser",h=await a(n.href);QA(h);const p=Sa(fh(h,"runtime"),n).href,g=h.adapterBaseUrl?Sa(h.adapterBaseUrl,n).href:null,b=h.optimizedCallables?Sa(bd(h.optimizedCallables),n).href:null,v=await Promise.all((h.sourceLibraries||[]).map(async U=>{const K=Sa(bd(U),n).href;return{url:K,sourceId:sE(U,K),text:await l(K)}})),S=await Promise.all((h.packages||[]).map(async U=>{const K=Sa(bd(U),n).href,$=await l(K),B=s1($);return{url:K,text:$,data:B,packageName:U.package||aE(B)||rE(K)}})),k=new Bh,T=Ts.fromManifest(h.policy||{}),C=FA(h.session),_=new WA({manifestUrl:n.href,manifest:h,runtimeUrl:p,adapterBaseUrl:g,optimizerManifestUrl:b,sourceLibraries:v,packages:S,packageBundleText:tE(S),initialNamespace:C,registry:k,policy:T});for(const U of h.providers||[]){if((U.target||f)!==f)continue;if(U.kind!=="browser-module")throw new Error(`unsupported browser provider kind ${U.kind}`);const K=Sa(fh(U,"module"),n).href,$=await c(K);if(typeof $.register!="function")throw new Error(`browser provider module ${K} does not export register`);const B=$.register(k,{manifest:h,distribution:_,provider:U,moduleUrl:K,target:f,baseUrl:n,fetch:u,BrowserCapabilityError:Ns,refusal:ZA(f)});B!==void 0&&_.providerInstances.set(U.package||K,B)}return _}function QA(s){const e=["catalog","catalogs","providerManifest","providerManifests","manifests"].filter(n=>s&&Object.hasOwn(s,n));if(e.length>0)throw new Error(`browser distribution manifest uses retired fields ${e.join(", ")}; use packages with package.ras`)}function FA(s={}){const e=String(s?.initialNamespace||"");if(!e)return"";if(!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(e))throw new Error(`invalid browser session initialNamespace ${JSON.stringify(e)}`);return e}function ZA(s){return(e,n,a={})=>new Ns(e,n,{"rasa.host/target":Xi(s),...a})}function nb(s){return ii({status:Xi("ok"),value:s})}function ib(s,e,n=null){const a={status:Xi("error"),kind:Xi(s),message:e};return n&&Object.keys(n).length>0&&(a.data=n),ii(a)}function sb(s){return s instanceof Ns?s.kind:"provider-error"}function ab(s,e){return e instanceof Ns?e.data||{}:Lh(s.packageName,s.exportName,{"rasa.browser/name":e?.name||"Error"})}function Lh(s,e,n={}){const a={"rasa.host/target":Xi("wasm-browser"),...n};return s&&e&&(a["rasa.host/capability"]=Xi(ll(s,e))),a}function s1(s){return new fE(String(s??"")).parse()}function ii(s){return s==null?"nil":typeof s=="boolean"?String(s):typeof s=="number"?Number.isInteger(s)?String(s):String(Math.round(s*1e3)/1e3):typeof s=="string"?JSON.stringify(s):_h(s)?`:${s.name}`:Hh(s)?s.name:JA(s)?`(${s.items.map(ii).join(" ")})`:IA(s)?`#{${s.items.map(ii).join(" ")}}`:eE(s)?`{${s.entries.map(([e,n])=>`${ii(e)} ${ii(n)}`).join(" ")}}`:Array.isArray(s)?`[${s.map(ii).join(" ")}]`:`{${Object.entries(s).map(([e,n])=>`:${e} ${ii(n)}`).join(" ")}}`}function Xi(s){return{type:"keyword",name:String(s).replace(/^:/,"")}}function PA(s){return{type:"symbol",name:String(s)}}function _h(s){return!!(s&&typeof s=="object"&&s.type==="keyword")}function Hh(s){return!!(s&&typeof s=="object"&&s.type==="symbol")}function JA(s){return!!(s&&typeof s=="object"&&s.type==="list")}function IA(s){return!!(s&&typeof s=="object"&&s.type==="set")}function eE(s){return!!(s&&typeof s=="object"&&s.type==="map")}function uh(s){return _h(s)||Hh(s)?s.name:String(s??"")}function tE(s){return s.length?ii({schema:Xi("rasa.package-bundle/v1"),packages:s.map(({data:e})=>e)}):""}function nE(s,e,n,a){return typeof s.evaluateSessionWithSourceId=="function"?s.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):s.evaluateSession(e,n.text,a)}async function iE(s,e,n,a){return typeof s.evaluateSessionWithSourceIdAsync=="function"?await s.evaluateSessionWithSourceIdAsync(e,n.sourceId||n.url,n.text,a):typeof s.evaluateSessionWithSourceId=="function"?await s.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):await s.evaluateSessionAsync(e,n.text,a)}function sE(s,e){return typeof s=="object"&&s?.sourceId?String(s.sourceId):e}function aE(s){return uh(s?.id||s?.["package/id"])}function rE(s){const e=new URL(s).pathname.split("/").filter(Boolean),n=e.lastIndexOf("package.ras");return n>0?e[n-1]:""}function bd(s){return typeof s=="string"?s:fh(s,"url")}function fh(s,e){if(!s||s[e]===void 0||s[e]===null||s[e]==="")throw new Error(`browser distribution manifest is missing ${e}`);return s[e]}function Sa(s,e){return new URL(s,e)}function lE(s){return new URL(s,globalThis.location?.href||"http://localhost/")}async function oE(s){const e=await fetch(s);if(!e.ok)throw new Error(`browser distribution JSON load failed: ${e.status}`);return e.json()}async function cE(s){const e=await fetch(s);if(!e.ok)throw new Error(`browser distribution asset load failed: ${e.status}`);return e.text()}function uE(s){return!!(s&&typeof s.then=="function")}class fE{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();if(this.ws(),this.index!==this.text.length)throw new Error(`unexpected trailing form at byte ${this.index}`);return e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==="("?this.list():e==="#"&&this.text[this.index+1]==="{"?this.set():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const n=this.form(),a=this.form();e[dE(n)]=a}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}list(){this.expect("(");const e=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:e};e.push(this.form())}}set(){this.expect("#"),this.expect("{");const e=[];for(;;){if(this.ws(),this.peek()==="}")return this.index++,{type:"set",items:e};e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const n=this.text[this.index++];if(n==='"')return e;if(n==="\\"){const a=this.text[this.index++];e+=a==="n"?`
`:a}else e+=n}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const n=this.text.slice(e,this.index);if(!n)throw new Error(`expected form at byte ${this.index}`);return n==="nil"?null:n==="true"?!0:n==="false"?!1:/^-?\d+(\.\d+)?$/.test(n)?Number(n):n.startsWith(":")?Xi(n.slice(1)):PA(n)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function dE(s){return _h(s)||Hh(s)?s.name:String(s)}const a1="RasaBrowserRuntime",hE="/assets/rasa-browser-runtime.js";function r1(s=qh()){return s?.[a1]||null}function mE(s={}){const e=s.globalObject||qh(),n=r1(e);if(n)return n;const a=e.location?.href||"http://rasa.local/",l=new URL(s.sourceUrl||hE,a).href,c=new URL(s.runtimeUrl||"ras.wasm",s.runtimeUrl?a:new URL(".",l).href).href,u=new URL(s.adapterBaseUrl||"rasa-component/",s.adapterBaseUrl?a:c).href,f=new URL(".",l).href,h=Object.freeze({kind:"rasa.browser-runtime.v1",sourceUrl:l,assetBaseUrl:f,runtimeUrl:c,adapterBaseUrl:u,assetUrl(p){return new URL(p,f).href},engineOptions(p={}){return{...p,adapterBaseUrl:p.adapterBaseUrl??u}}});return e[a1]=h,e.document?.documentElement?.setAttribute("data-rasa-browser-runtime","ready"),h}function pE(s={}){const e=s.runtime||r1(s.globalObject)||mE(s),n=e?.runtimeUrl||s.runtimeUrl||"./assets/ras.wasm";return{sourceUrl:e?.sourceUrl||null,assetBaseUrl:e?.assetBaseUrl||null,runtimeUrl:n,adapterBaseUrl:e?.adapterBaseUrl||s.adapterBaseUrl||new URL("rasa-component/",new URL(n,yE(s.globalObject))).href}}async function gE(s,e={}){const n=pE(e),{runtime:a,runtimeUrl:l,adapterBaseUrl:c,globalObject:u,...f}=e;return await s.load(n.runtimeUrl,{...f,adapterBaseUrl:f.adapterBaseUrl??n.adapterBaseUrl})}function qh(){return typeof window<"u"?window:typeof self<"u"?self:typeof globalThis<"u"?globalThis:{}}function yE(s=qh()){return s.location?.href||"http://rasa.local/"}const l1="wasm-component",bE="browser-component-adapter-pending",Po="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.",vE="rasa-component/",o1="rasa:runtime/host",xE="rasa:runtime/host@0.1.0",c1="rasa:runtime/optimizer",SE="rasa:runtime/optimizer@0.1.0",u1="rasa:runtime/source-loader",wE="rasa:runtime/source-loader@0.1.0",kE="rasa:runtime/session@0.1.0",f1="runtime-wasm-before-region-entry",dc=65536,d1=1,h1=2,m1=4,p1=8,g1=16,y1=32,TE=d1|h1|m1|p1|g1|y1,AE=256;class EE extends Error{constructor(e=Po){super(e),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=l1,this.unavailableReason=bE}}class rb extends Error{constructor(e){super(e),this.name="RasaBrowserHostCallError"}}class Uh{static async load(e,n={}){const a=hc(e),l=n.readBytes||v1,c=await l(a,"Rasa runtime component"),u=hc(n.adapterBaseUrl||vE,a),f=n.optimizer??await BE(n,a,l),p=await import(new URL("ras-runtime.js",u).href),g=OE(n.host,f,n.sourceLoader),b=new Map,v=await p.instantiate(async S=>{const k=new URL(S,u),T=b.get(k.href);if(T)return T;const C=await l(k,`Rasa component core module ${S}`),_=await WebAssembly.compile(C);return b.set(k.href,_),_},g);return new Uh({url:a.href,adapterBaseUrl:u.href,byteLength:c.byteLength,imports:g,session:v.session||v[kE]})}constructor(e={}){if(!e.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=e.url??null,this.adapterBaseUrl=e.adapterBaseUrl??null,this.byteLength=e.byteLength??null,this.available=!0,this.runtimeKind=l1,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=e.session,this.importObject=e.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new EE(this.message)}evaluate(e,n=null){return this.session.evalSource(si(e),Ur(n))}inspect(e,n=null){const a=this.session.inspectSource(si(e),Ur(n));return ob(a,"inspection artifact")}syntaxTokens(e){const n=this.session.syntaxTokens(si(e));return ob(n,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(e){e!=null&&this.session.sessionFree(e)}setSessionOptimizerEnabled(e,n){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(e,!!n)}loadPackage(e,n){return this.session.sessionLoadPackage(e,Ds(n))}async loadPackageAsync(e,n){return await this.loadPackage(e,n)}evaluateSession(e,n,a=null){return this.session.sessionEval(e,si(n),Ur(a))}async evaluateSessionAsync(e,n,a=null){return await this.evaluateSession(e,n,a)}evaluateSessionWithSourceId(e,n,a,l=null){if(typeof this.session.sessionEvalWithId!="function")throw new Error("Rasa Wasm component does not export sessionEvalWithId");return this.session.sessionEvalWithId(e,String(n||"browser://eval"),si(a),Ur(l))}async evaluateSessionWithSourceIdAsync(e,n,a,l=null){return await this.evaluateSessionWithSourceId(e,n,a,l)}evaluateReplSession(e,n,a=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(e,si(n),Ur(a))}async evaluateReplSessionAsync(e,n,a=null){return await this.evaluateReplSession(e,n,a)}}function si(s){return new TextEncoder().encode(String(s??""))}function ME(s){return new TextDecoder("utf-8",{fatal:!0}).decode(s)}async function RE(s=[],e={}){const n=new Map;for(const a of s){const l=vd(a.symbol,a.arity);n.set(l,await jE(a,e))}return{canCall(a,l){return n.has(vd(a,l))},tryCall(a,l,c){const u=n.get(vd(a,l));return u?LE(u,c):$i("missing-callable-region")}}}async function CE(s,e={}){const n=hc(s),a=e.readJson||t3,c=((e.manifest||await a(n.href)).callables||[]).map(u=>({symbol:u.symbol,arity:u.arity,abi:u.abi,inputIndex:u.inputIndex,inputShape:u.inputShape,result:u.result,resultProbe:u.resultProbe,keys:u.keys,packed:u.packed,url:n3(qi(u,"url"),n).href}));return RE(c,{...e,readBytes:e.readBytes})}function OE(s=null,e=null,n=null){const a={[o1]:NE(s),[c1]:DE(e),[u1]:PE(n),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new cb},"wasi:cli/stdout":{getStdout:()=>new xd},"wasi:cli/stderr":{getStderr:()=>new xd},"wasi:cli/terminal-input":{TerminalInput:s3},"wasi:cli/terminal-output":{TerminalOutput:a3},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new dh},"wasi:io/error":{Error:i3},"wasi:io/poll":{Pollable:dh,poll:()=>[]},"wasi:io/streams":{InputStream:cb,OutputStream:xd},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return IE(a)}function NE(s){return{call(e){if(!s)throw new rb("no browser host provider is registered");if(typeof s.callBytes=="function")return JE(s.callBytes(e));if(typeof s.call=="function"){const n=s.call(ME(e));return x1(n)?n.then(a=>si(a)):si(n)}throw new rb("browser host provider does not implement call")}}}function DE(s){return{canCall(e,n){return typeof s?.canCall=="function"?!!s.canCall(e,n):!1},tryCall(e,n,a){return typeof s?.tryCall=="function"?s.tryCall(e,n,a):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:f1}}}}}async function jE(s,e){const n=QE(s.resultProbe??s.result??"i64"),a=Number.isInteger(s.inputIndex)?s.inputIndex:0,l=Array.isArray(s.keys)?s.keys.map(String):[],c=s.abi||(s.packed?"packed-vector-v1":"utf8-scan-v1"),u=FE(s.packed);try{return{symbol:String(s.symbol),arity:Number(s.arity),abi:c,result:n,inputIndex:a,inputShape:s.inputShape||null,keys:l,packed:u,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:await zE(s,e),blocker:null}}catch(f){return{symbol:String(s.symbol),arity:Number(s.arity),abi:c,packed:u,result:n,inputIndex:a,keys:l,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:f?.message??String(f)}}}}async function zE(s,e){if(s.exports)return s.exports;if(s.instance?.exports)return s.instance.exports;if(typeof s.instantiate=="function"){const c=await s.instantiate();if(c?.exports)return c.exports;if(c?.instance?.exports)return c.instance.exports}const n=s.imports||e.imports||{};let a=s.module??null;if(!a){const c=e.readBytes||v1,u=s.moduleBytes??(s.url?await c(s.url,"WasmGC callable artifact"):null);if(!u)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");a=await WebAssembly.compile(Ds(u))}const l=await WebAssembly.instantiate(a,n);if(l?.exports)return l.exports;if(l?.instance?.exports)return l.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function BE(s,e,n){if(!s.optimizerManifestUrl&&!s.optimizerManifest)return null;const a=s.optimizerManifestUrl?hc(s.optimizerManifestUrl,e).href:e.href;return CE(a,{manifest:s.optimizerManifest,readJson:s.readJson,readBytes:n,onPackedOutput:s.onPackedOutput})}function LE(s,e){if(s.blocker)return $i(s.blocker.reason);try{if(s.abi==="packed-vector-v1"||s.packed)return _E(s,e);const n=KE(e?.[s.inputIndex]);return n?(UE(s.exports,n),{tag:"executed",val:GE(s)}):$i("missing-runtime-string-argument")}catch(n){return $i(XE(n))}}function _E(s,e){const n=s.packed;if(!n)return $i("missing-browser-packed-callable-abi");const a=HE(s,n),l=a?null:WE(e?.[s.inputIndex]);if(!a&&!l)return $i("missing-runtime-packed-argument");const c=lb(n.input.element,n.input.length);if(!a&&l.logicalBitExtent!==c)return $i("browser-packed-input-bit-extent-mismatch");const u=a?new Uint8Array(0):l.bytes;if(u.byteLength!==n.input.byteLength)return $i("browser-packed-input-byte-length-mismatch");const f=VE(s.exports,u,n);Ec(s.exports,"rasa_run_packed")();const h=new Uint8Array(f.buffer,n.output.offset,n.output.byteLength);return qE(s,h),{tag:"executed",val:{tag:"packed",val:{dtype:n.output.element,shape:[BigInt(n.output.length)],logicalBitExtent:lb(n.output.element,n.output.length),bytes:new Uint8Array(h)}}}}function HE(s,e){return e.input.length===0&&e.input.byteLength===0&&(s.inputShape==="none"||s.arity===0)}function qE(s,e){typeof s.onPackedOutput=="function"&&s.onPackedOutput({symbol:s.symbol,arity:s.arity,abi:s.abi,packed:s.packed,bytes:new Uint8Array(e)})}function UE(s,e){const n=s?.rasa_memory,a=s?.rasa_prepare_utf8;if(!n?.buffer||typeof a!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const l=Math.ceil(e.byteLength/dc),c=Math.ceil(n.buffer.byteLength/dc);l>c&&n.grow(l-c),new Uint8Array(n.buffer,0,e.byteLength).set(e),a(e.byteLength)}function VE(s,e,n){const a=s?.rasa_memory;if(!a?.buffer)throw new Error("missing WasmGC callable packed memory export");const l=Math.max(Number(n.memory.minimumPages||0),Math.ceil((n.output.offset+n.output.byteLength)/dc)),c=Math.ceil(a.buffer.byteLength/dc);return l>c&&a.grow(l-c),new Uint8Array(a.buffer,0,e.byteLength).set(e),a}function GE(s){switch(s.result){case"i64":return{tag:"int64",val:Gh(Vh(s.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:$E(s.exports)};case"i64-map":return{tag:"i64-map",val:YE(s.exports,s.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${s.result}`)}}function $E(s){const e=b1(Vh(s,"rasa_main_vector_len")),n=Ec(s,"rasa_main_vector_i64_at");return Array.from({length:e},(a,l)=>Gh(n(l)))}function YE(s,e){const n=b1(Vh(s,"rasa_main_map_len"));if(n!==e.length)throw new Error(`WasmGC map probe length ${n} did not match planned keys ${e.length}`);const a=Ec(s,"rasa_main_map_i64_at");return e.map((l,c)=>({key:l,value:Gh(a(c))}))}function Vh(s,e){return Ec(s,e)()}function Ec(s,e){const n=s?.[e];if(typeof n!="function")throw new Error(`missing WasmGC callable export ${e}`);return n}function KE(s){return s?.tag==="utf8-string"||s?.tag==="utf8String"?Ds(s.val):null}function WE(s){if(s?.tag!=="packed")return null;const e=s.val,n=e?.logicalBitExtent??e?.["logical-bit-extent"];return typeof n!="bigint"||n<0n||!(e?.bytes instanceof Uint8Array)&&!(e?.bytes instanceof ArrayBuffer)&&!ArrayBuffer.isView(e?.bytes)?null:{logicalBitExtent:n,bytes:Ds(e?.bytes)}}function $i(s){return{tag:"refused",val:{reason:s,fallback:f1}}}function XE(s){const e=s?.message||String(s);return e.startsWith("unsupported packed scalar ")?"browser-packed-scalar-unsupported":e.includes(" value out of range")?"browser-packed-value-out-of-range":"browser-wasmgc-callable-execution-error"}function vd(s,e){return`${String(s)}/${Number(e)}`}function QE(s){switch(String(s)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(s)}}function FE(s){return s?{input:{element:String(qi(s.input||{},"element")),length:Number(qi(s.input||{},"length")),byteLength:Number(qi(s.input||{},"byteLength"))},output:{element:String(qi(s.output||{},"element")),length:Number(qi(s.output||{},"length")),byteLength:Number(qi(s.output||{},"byteLength")),offset:Number(qi(s.output||{},"offset"))},memory:{minimumPages:Number(s.memory?.minimumPages||0)}}:null}function lb(s,e){return BigInt(e)*BigInt(ZE(s)*8)}function ZE(s){const e={u8:1,i8:1,u16:2,i16:2,u32:4,i32:4,u64:8,i64:8}[String(s)];if(!e)throw new Error(`unsupported packed scalar ${s}`);return e}function b1(s){const e=Number(s);if(!Number.isInteger(e)||e<0)throw new Error(`invalid WasmGC probe length ${s}`);return e}function Gh(s){return typeof s=="bigint"?s:(typeof s=="number"&&Number.isSafeInteger(s),BigInt(s))}function PE(s){return{loadRunnerSources(e,n){if(typeof s?.loadRunnerSources=="function")return s.loadRunnerSources(e,n);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function JE(s){return x1(s)?s.then(e=>Ds(e)):Ds(s)}function IE(s){return{...s,[xE]:s[o1],[SE]:s[c1],[wE]:s[u1],"wasi:cli/environment@0.2.6":s["wasi:cli/environment"],"wasi:cli/exit@0.2.6":s["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":s["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":s["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":s["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":s["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":s["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":s["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":s["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":s["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":s["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":s["wasi:io/error"],"wasi:io/poll@0.2.6":s["wasi:io/poll"],"wasi:io/streams@0.2.6":s["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":s["wasi:random/insecure-seed"]}}function Ur(s){if(typeof s=="number")return s;let e=TE;return s?.phases&&s.phases!=="all"&&(e=(Array.isArray(s.phases)?s.phases:[s.phases]).reduce((a,l)=>a|e3(l),0)),s?.traces&&(e|=AE),e}function e3(s){switch(String(s)){case"reader":return d1;case"analysis":case"analyze":return h1;case"ir":return m1;case"facts":return p1;case"plan":return y1;case"eval":return g1;default:return 0}}function ob(s,e){try{return JSON.parse(s)}catch(n){throw new Error(`failed to parse ${e}: ${n.message}`)}}function Ds(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):si(s)}async function v1(s,e){const n=await fetch(s);if(!n.ok)throw new Error(`failed to load ${e}: ${n.status}`);return Ds(await n.arrayBuffer())}async function t3(s){const e=await fetch(s);if(!e.ok)throw new Error(`failed to load JSON ${s}: ${e.status}`);return e.json()}function hc(s,e=null){return new URL(String(s),e||globalThis.location?.href||import.meta.url)}function n3(s,e){return new URL(String(s),e)}function qi(s,e){if(!s||s[e]===void 0||s[e]===null||s[e]==="")throw new Error(`callable WasmGC manifest entry is missing ${e}`);return s[e]}function x1(s){return s&&typeof s.then=="function"}class i3{}class dh{block(){}}class cb{}class xd{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new dh}}class s3{}class a3{}const ub=Object.freeze({phases:"all"}),r3=()=>{};function S1({engineUrl:s="",manifestUrl:e="",bootSource:n="",evalOptions:a=ub,configureOptions:l=ub,onRuntimeStateChange:c=r3,onRunResult:u=null,formatDisplay:f=null}={}){const h=N.useRef(null),p=N.useRef(null),g=N.useRef(0),b=N.useRef([]),v=N.useRef({available:!1,message:Po,wasmLane:null}),[S,k]=N.useState(v.current),[T,C]=N.useState("loading"),[_,U]=N.useState(""),[K,$]=N.useState("empty"),[B,W]=N.useState([]),[X,te]=N.useState(!1),[pe,Xe]=N.useState(0),ct=T==="pending",je=N.useCallback(I=>{const ae={...v.current,...I};v.current=ae,k(ae),c(ae)},[c]),bt=N.useCallback(I=>{if(!h.current||!I)return[];try{return h.current.syntaxTokens(String(I)).tokens||[]}catch{return[]}},[]),He=N.useCallback(()=>{h.current&&g.current&&h.current.freeSession(g.current),h.current=null,p.current=null,g.current=0},[]),Qe=N.useCallback(async()=>{C("loading"),U(""),$("empty"),W([]),He();try{const I=e?await XA(e):null;p.current=I;const ae=re=>{b.current.push(re)},E=await gE(Uh,{...I?.engineOptions({onPackedOutput:ae})||{onPackedOutput:ae},runtimeUrl:s||I?.runtimeUrl||"./assets/ras.wasm"});if(h.current=E,E.available===!1){C("pending"),U(E.message||Po),$("notice"),je({available:!1,runtimeKind:E.runtimeKind,unavailableReason:E.unavailableReason,message:E.message,distribution:null,capabilities:[],wasmLane:null});return}const q=E.createSession();g.current=q;const F=!!I?.optimizerManifestUrl;F&&E.setSessionOptimizerEnabled(q,!0);const Z=I?await I.configureSessionAsync(E,q,l):[];for(const re of Z)if(dA(re))throw new Error(`failed to configure browser distribution: ${l3(String(re||""),"")}`);if(n){const re=await E.evaluateSessionAsync(q,n,l),le=J0(re);if(le.kind==="error")throw new Error(`failed to load Rasa core: ${le.text}`)}C("ready"),je({available:!0,runtimeKind:E.runtimeKind||"wasm-component",distribution:I?.manifestUrl||null,capabilities:I?.policy.entries()||[],message:null,optimizedCallables:I?.optimizerManifestUrl||null,optimizerEnabled:F,wasmLane:null})}catch(I){He(),C("failed"),U(I.message),$("error"),je({available:!1,message:I.message,distribution:null,capabilities:[],wasmLane:null})}},[n,He,l,s,e,je]);N.useEffect(()=>(Qe(),He),[Qe,He]);const H=N.useCallback(async(I,ae=null)=>{const E=String(I??"");if(ct){const F=h.current?.message||Po;return U(F),$("notice"),W([]),null}if(!h.current||!g.current||X)return null;te(!0),b.current=[];const q=Sd();try{const F=ae?.evalOptions||a,Z=await h.current.evaluateReplSessionAsync(g.current,E,F),re=Sd()-q,le=J0(Z),be=hA(Z),Ge=mA(Z),$e=b.current.slice(),Gt=(ae?.formatDisplay||f)?.({display:le,parity:Ge,packedOutputs:$e,report:Z,source:E,wasmLane:be})||le,_t={report:Z,display:Gt,rawDisplay:le,parity:Ge,elapsedMs:re,packedOutputs:$e,source:E,status:Gt.kind==="error"?"error":"ok",wasmLane:be};return U(Gt.text),$(Gt.kind),W(Gt.kind==="value"?bt(Gt.text):[]),Xe(js=>js+1),C(Gt.kind==="error"?"error":"ready"),be&&je({available:!0,runtimeKind:h.current.runtimeKind||"wasm-component",wasmLane:be}),u?.(_t),_t}catch(F){const Z={error:F,display:{kind:"error",text:F.message},elapsedMs:Sd()-q,packedOutputs:b.current.slice(),source:E,status:"error",wasmLane:null};return U(F.message),$("error"),W([]),C("error"),u?.(Z),Z}finally{te(!1)}},[a,f,u,je,X,ct,bt]),Q=N.useCallback(I=>p.current?.providerInstances?.get(String(I))||null,[]),ie=N.useCallback(()=>p.current?.host?.lastTrace||null,[]);return{boot:Qe,canRun:!!(h.current&&g.current&&!X&&!ct),getHostTrace:ie,getProvider:Q,output:_,outputKind:K,outputTokens:B,run:H,runCount:pe,running:X,runtimePending:ct,runtimeState:S,status:T,syntaxTokens:bt}}function Sd(){return globalThis.performance?.now?.()??Date.now()}function l3(s,e){const n=s.match(/:failed-phase\s+(:[^\s}]+)/)?.[1]||null,a=s.match(/:message\s+"((?:\\.|[^"\\])*)"/)?.[1]||null;return a?a.replace(/\\n/g,`
`).replace(/\\"/g,'"'):n?`${n} failed`:e||"runtime report failed"}const o3=N.forwardRef(function({ariaLabel:e="Rasa source editor",className:n="",onChange:a=null,onRun:l=null,readOnly:c=!1,source:u=""},f){const h=N.useRef(null),p=N.useRef(null),g=N.useRef(a),b=N.useRef(l);return g.current=a,b.current=l,N.useEffect(()=>{if(!h.current)return;const v=zh({parent:h.current,doc:u,liveLexicalHighlight:!0,onChange:S=>g.current?.(S),onRun:()=>b.current?.(),readOnly:c});return p.current=v,()=>{v.destroy(),p.current=null}},[c]),N.useEffect(()=>{const v=p.current;!v||v.state.doc.toString()===u||v.dispatch({changes:{from:0,to:v.state.doc.length,insert:u}})},[u]),N.useImperativeHandle(f,()=>({focus:()=>p.current?.focus(),getSource:()=>p.current?.state.doc.toString()||"",setSource:v=>{const S=p.current;S&&S.dispatch({changes:{from:0,to:S.state.doc.length,insert:String(v??"")}})}}),[]),x.jsx("div",{"aria-label":e,className:`rasa-editor ${n}`,ref:h})}),w1=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function c3(s,{elapsedMs:e=0}={}){const n=s?.data||{},a=w1.map(([u,f])=>u3(u,f,n[u])),l=d3(n.plan),c=h3(n);return{id:`${s?.label||"run"}:${e}:${s?.status||"unknown"}`,result:s,run:{elapsedMs:e,reportMode:a.some(u=>u.id!=="eval"&&u.status!=="not-requested")?"all":"eval",status:s?.status||"unknown"},parity:{status:s?.status||"unknown",evalStatus:s?.evalStatus||null,renderedValue:s?.renderedValue??null,value:s?.value??null,execution:m3(n.execution,n.lane),optimizer:p3(n.optimizer),phases:a,runtime:g3(n),plan:l,diagnostics:c}}}function u3(s,e,n){if(!n||typeof n!="object")return{id:s,label:e,status:"not-requested",detail:"not captured",diagnostics:0,metrics:{}};const a=Number(n["diagnostic-count"]??n.diagnostics?.length??0),l={diagnostics:a};if(s==="facts"){const c=n.summary||{};Object.assign(l,{facts:Number(c.facts||0),declaredFacts:Number(c["declared-facts"]||0),metadataContracts:Number(c["metadata-contracts"]||0),mode:De(n.mode)||"unknown"})}return s==="checks"&&Object.assign(l,{checks:n.results?.length||0,action:De(n.action)||null}),s==="plan"&&Object.assign(l,{lanes:n.lanes?.length||0,decisions:n.decisions?.length||0,candidates:n.candidates?.length||0,rejected:n.rejected?.length||0,fallbacks:n.fallbacks?.length||0}),{id:s,label:e,status:De(n.status)||"available",detail:f3(s,l),diagnostics:a,metrics:l}}function f3(s,e){return s==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:s==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:s==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:s==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function d3(s){return!s||typeof s!="object"?null:Object.fromEntries(["lanes","decisions","candidates","rejected","fallbacks"].map(e=>[e,(s[e]||[]).map(n=>({type:e==="lanes"?"lane":e.replace(/s$/,""),lane:De(n.lane),memoryPath:De(n["memory-path"]),wmp:De(n.wmp),status:De(n.status),decision:De(n.decision),candidate:De(n.candidate),family:De(n.family),evidence:De(n.evidence),reason:n.reason||n.message||null}))]))}function h3(s){const e=Array.isArray(s.diagnostics)?s.diagnostics:[];return(e.length?e.map(a=>({record:a,phase:null})):w1.flatMap(([a])=>(s[a]?.diagnostics||[]).map(l=>({record:l,phase:a})))).map(({record:a,phase:l})=>{const c=a.data||a["rasa.diagnostic/data"]||{},u=a.span||a["rasa.diagnostic/primary-span"]||c["rasa.error/span"]||null,f=De(a["rasa.diagnostic/severity"])||"info";return{phase:De(a.phase||a["rasa.diagnostic/phase"])||l,severity:f,code:De(a["rasa.diagnostic/code"]),kind:De(a.kind),message:a["rasa.diagnostic/summary"]||a.message||c["rasa.error/message"]||"Diagnostic record",detail:a["rasa.diagnostic/detail"]||null,recoverable:a.recoverable??f!=="error",span:u&&typeof u=="object"?{sourceId:u["source-id"]||null,start:Number(u.start??0),end:Number(u.end??0)}:null}})}function m3(s={},e={}){return!s&&!e?null:{productLane:De(s?.["product-lane"]||e?.["product-lane"]),tier:De(s?.tier||e?.["runtime-execution-tier"]),status:De(s?.status||e?.["runtime-status"]),fallbackPoint:De(s?.["fallback-point"]||e?.["fallback-point"])}}function p3(s){return!s||typeof s!="object"?null:{enabled:s.enabled===!0,probes:Number(s.probes||0),admitted:Number(s.admitted||0),executed:Number(s.executed||0),missed:Number(s.missed||0),fallbacks:(s.fallbacks||[]).map(e=>({symbol:e.symbol||null,arity:e.arity??null,reason:De(e.reason),fallback:De(e.fallback),arguments:e.arguments||[]}))}}function g3(s){const e=s.session||{};return{lane:De(s.lane),memoryPath:De(s["memory-path"]),collectionImpl:De(s["collection-impl"]),hostImports:s["host-imports"]===!0,target:De(s.target),sessionMode:De(e.mode),persistentDefs:e["persistent-defs"]===!0}}function De(s){if(s==null)return null;if(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||typeof s=="boolean")return String(s).replace(/^:/,"");if(Array.isArray(s))return s.map(De).filter(Boolean).join(", ");if(typeof s=="object"){const e=s.kind||s.type,n=[s.items,s.value,s.values].find(Array.isArray);if(s.name!=null)return String(s.name).replace(/^:/,"");if(["set","vector","list"].includes(e)&&n)return n.map(De).filter(Boolean).join(", ");if(e==="map"&&Array.isArray(s.entries))return s.entries.map(({key:l,value:c})=>{const u=De(l)||"field",f=De(c)||"structured value";return`${u}: ${f}`}).join(", ");if(["string","number","boolean"].includes(e)&&s.value!=null)return String(s.value);if(["symbol","char"].includes(e)&&s.raw!=null)return String(s.raw);if(s.label!=null)return De(s.label);const a=Object.entries(s).filter(([l])=>!["kind","type","raw"].includes(l));return a.length?a.map(([l,c])=>`${l}: ${De(c)||"structured value"}`).join(", "):null}return String(s)}const y3="rasa.browser-product.v1",b3="rasa.browser-api.v1",v3=Object.freeze({phases:"all"});function x3({manifestUrl:s="/rasa/browser-product.json",evalOptions:e=v3,configureOptions:n=e}={}){const a=N.useRef(null),l=N.useRef(0),[c,u]=N.useState("loading"),[f,h]=N.useState(null),[p,g]=N.useState(null),[b,v]=N.useState(!1),[S,k]=N.useState(null),T=N.useCallback(async()=>{l.current+=1;const U=a.current;a.current=null,await U?.close?.()},[]),C=N.useCallback(async()=>{const U=l.current+1;l.current=U,u("loading"),h(null),g(null);const K=a.current;a.current=null,await K?.close?.();try{const $=new URL(s,globalThis.location.href).href,B=await fetch($,{cache:"no-store"});if(!B.ok)throw new Error(`Rasa browser product manifest failed to load (${B.status})`);const W=await B.json();if(W.schema!==y3||W.api?.version!==b3)throw new Error(`Unsupported Rasa browser product contract ${W.schema||"missing"} / ${W.api?.version||"missing"}`);const pe=await(await import(new URL(W.api.module,$).href)).createRasaBrowserProduct($,{evalOptions:e,configureOptions:n});if(U!==l.current){await pe.close();return}a.current=pe,k({apiVersion:W.api.version,build:W.build,product:W.product,runtimeContract:W.runtimeContract}),u("ready")}catch($){if(U!==l.current)return;h($),u("failed")}},[n,e,s]);N.useEffect(()=>(C(),()=>{T()}),[C,T]);const _=N.useCallback(async(U,K={})=>{const $=a.current;if(!$||b)return null;v(!0),h(null);const B=performance.now();try{const W=await $.eval(String(U??""),K),X=performance.now()-B,te={source:String(U??""),...c3(W,{elapsedMs:X})};return g(te),u(W.status==="ok"?"ready":"refused"),te}catch(W){return h(W),u("failed"),null}finally{v(!1)}},[b]);return{boot:C,canRun:c==="ready"||c==="refused",error:f,evaluate:_,productInfo:S,run:p,running:b,status:c}}const wd=Object.freeze({phases:"all"});N.forwardRef(function({initialSource:e="(+ 1 2 3)",manifestUrl:n="/rasa/browser-product.json",onRunResult:a=null,onRuntimeStateChange:l=null,subtitle:c="One persistent browser session",title:u="Rasa browser product"},f){const[h,p]=N.useState(e),g=x3({configureOptions:wd,evalOptions:wd,manifestUrl:n});N.useEffect(()=>{const S=g.status==="ready"||g.status==="refused";l?.({available:S,message:g.error?.message||null,product:g.productInfo,runtimeKind:S?"wasm-component":null,status:g.status})},[l,g.error,g.productInfo,g.status]);const b=N.useCallback(async(S=null)=>{const k=S===null?h:String(S);S!==null&&p(k);const T=await g.evaluate(k,wd);return a?.(T),T},[a,g,h]);N.useImperativeHandle(f,()=>({loadSource:S=>p(String(S??"")),reset:()=>g.boot(),runSource:(S=null)=>b(S)}),[b,g.boot]);const v=S3(g);return x.jsxs("section",{className:"rasa-repl","aria-label":u,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:u}),x.jsx("strong",{children:c})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${g.status}`,children:g.status})]}),x.jsx(o3,{className:"rasa-repl__input",onChange:p,onRun:b,source:h}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{disabled:!g.canRun||g.running,onClick:()=>b(),type:"button",children:g.running?"Running":"Run"}),x.jsx("button",{disabled:g.status==="loading",onClick:g.boot,type:"button",children:"Restart session"})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${v.kind}`,children:v.text})]})});function S3(s){if(s.error)return{kind:"error",text:s.error.message||String(s.error)};const e=s.run?.result;return e?e.status==="ok"?{kind:"value",text:e.renderedValue??"nil"}:{kind:"error",text:e.refusal?.message||`Rasa returned ${e.status}`}:{kind:"empty",text:"Run a Rasa form to produce a value."}}const w3="(+ 1 2 3)",k3="Output will appear here.",T3=()=>{};N.forwardRef(function({engineUrl:e="",manifestUrl:n="",initialSource:a=w3,bootSource:l="",title:c="Rasa WASM",subtitle:u="Shared browser session",className:f="",onRuntimeStateChange:h=T3,onRunResult:p=null,onSourceChange:g=null,formatDisplay:b=null},v){const S=N.useRef(null),k=N.useRef(null),T=N.useRef(0),C=N.useRef(null),[_,U]=N.useState(a),K=S1({bootSource:l,engineUrl:e,formatDisplay:b,manifestUrl:n,onRunResult:p,onRuntimeStateChange:h}),$=N.useCallback((te=null,pe=80)=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{if(T.current=0,!k.current)return;const Xe=te??k.current?.state.doc.toString()??"";k.current.dispatch({effects:jh.of(K.syntaxTokens(Xe))})},pe)},[K.syntaxTokens]),B=N.useCallback(te=>{const pe=String(te??""),Xe=k.current;Xe&&Xe.dispatch({changes:{from:0,to:Xe.state.doc.length,insert:pe}}),U(pe),g?.(pe),$(pe,0)},[g,$]);N.useEffect(()=>{if(!(!S.current||k.current))return k.current=zh({parent:S.current,doc:a,onChange:te=>{U(te),g?.(te),$(te)},onRun:()=>{C.current?.()}}),$(a,0),k.current.focus(),()=>{T.current&&clearTimeout(T.current),k.current?.destroy(),k.current=null}},[a,g,$]);const W=N.useCallback(async(te=null)=>{const pe=te===null?k.current?.state.doc.toString()??_:String(te);return te!==null&&B(pe),K.run(pe)},[K.run,B,_]);C.current=()=>W(),N.useImperativeHandle(v,()=>({getProvider:te=>K.getProvider(te),loadSource:te=>B(te),runSource:(te=null)=>W(te),reset:()=>K.boot()}),[W,K.boot,K.getProvider,B]);const X=N.useMemo(()=>qT(K.output||k3,K.outputTokens),[K.output,K.outputTokens]);return x.jsxs("section",{className:`rasa-repl ${f}`,"aria-label":c,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:c}),x.jsx("strong",{children:u})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${K.status}`,children:K.status})]}),x.jsx("div",{className:"rasa-repl__input",ref:S}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{type:"button",onClick:()=>W(),disabled:!K.canRun,children:K.running?"Running":"Run"}),x.jsx("button",{type:"button",onClick:K.boot,disabled:K.status==="loading"||K.runtimePending,children:"Reset engine"}),x.jsxs("span",{children:[K.runCount," runs"]})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${K.outputKind}`,children:X.map((te,pe)=>te.className?x.jsx("span",{className:te.className,children:te.text},`${pe}:${te.text}`):x.jsx("span",{children:te.text},`${pe}:${te.text}`))})]})});function A3({className:s="",onRendered:e=null,renderKey:n=null,scene:a,sourceHash:l}){const c=N.useRef(null),u=N.useRef(e);return u.current=e,N.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>G3(f,a,l),p=h();u.current?.({count:a.primitives.length,detail:`${a.primitives.length.toLocaleString()} drawing instructions rendered by Canvas`,kind:"canvas-primitive-render",label:"Canvas primitive draw",payload:p,unit:"primitives"});const g=new ResizeObserver(h);g.observe(f);const b=new MutationObserver(h);return b.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{g.disconnect(),b.disconnect()}},[n,a,l]),N.createElement("canvas",{className:`rasa-scene-canvas ${s}`.trim(),ref:c})}function E3({className:s="",image:e,onRendered:n=null,renderKey:a=null,sourceHash:l}){const c=N.useRef(null),u=N.useRef(n);return u.current=n,N.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>V3(f,e,l),p=h();u.current?.({count:e.pixels.byteLength,detail:`${e.pixels.byteLength.toLocaleString()} RGBA bytes uploaded with ImageData`,kind:"canvas-image-data-upload",label:"Canvas pixel upload",payload:p,unit:"bytes"});const g=new ResizeObserver(h);return g.observe(f),()=>g.disconnect()},[e,a,l]),N.createElement("canvas",{className:`rasa-grid-canvas ${s}`.trim(),ref:c})}function M3({empty:s=null,events:e,onSectionPlay:n=null,playbackOffsetSeconds:a=0,playbackStartedAtMs:l=null,playing:c=!1,sections:u=[]}){return e.length===0?s:N.createElement(R3,{events:e,onSectionPlay:n,playbackOffsetSeconds:a,playbackStartedAtMs:l,playing:c,sections:u})}function R3({events:s,onSectionPlay:e,playbackOffsetSeconds:n,playbackStartedAtMs:a,playing:l,sections:c}){const u=N.useRef(null),f=N.useRef(null),[h,p]=N.useState(0),g=C3(s,c);N.useEffect(()=>{const S=u.current;if(!S)return;const k=()=>O3(S,g);k();const T=new ResizeObserver(k);T.observe(S);const C=new MutationObserver(k);return C.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{T.disconnect(),C.disconnect()}},[s,c]),N.useEffect(()=>{f.current&&(f.current.scrollLeft=0),p(0)},[s]);const b=l&&a!==null?{"--timeline-duration":`${Math.max(.1,g.maxTime-n)}s`,"--timeline-delay":`${(a-B3())/1e3}s`,"--timeline-start":`${n/g.maxTime*100}%`}:null,v=j3(g,f.current,h);return N.createElement("section",{"aria-label":`${s.length.toLocaleString()} exact Rasa-scheduled events across ${g.tracks.length} tracks`,className:"sequencer score-sequencer","data-playing":!!b,style:{"--score-track-count":g.tracks.length}},N.createElement("aside",{className:"score-track-labels"},N.createElement("span",{className:"score-corner"},"Tracks"),...g.tracks.map(([S,k])=>N.createElement("span",{className:"score-track-label",key:S},N.createElement("strong",null,S),N.createElement("small",null,`${k.length.toLocaleString()} notes`)))),N.createElement("div",{className:"score-scroll",onScroll:S=>p(S.currentTarget.scrollLeft),ref:f},N.createElement("div",{className:"score-content",style:{width:`${g.timelineWidth}px`}},N.createElement("div",{className:"score-ruler"},N.createElement("span",{className:"score-time-start"},"0:00"),...g.sections.map(S=>N.createElement("span",{className:"score-section-label",key:`${S.name}:${S.time}`,style:{left:`${S.time/g.maxTime*100}%`}},S.name)),N.createElement("span",{className:"score-time-end"},D3(g.maxTime))),N.createElement("div",{className:"score-canvas-slot"},N.createElement("canvas",{className:"music-score-canvas",ref:u,role:"img",title:"Exact Rasa-generated note events arranged by section, track, time, and pitch"})),b?N.createElement("span",{"aria-hidden":"true",className:"score-playhead-rail"},N.createElement("span",{className:"timeline-playhead",key:`playhead:${a}`,style:b})):null)),g.sections.length>0?N.createElement("nav",{"aria-label":"Score sections",className:"score-section-nav"},...g.sections.map(S=>N.createElement("button",{"aria-pressed":S.name===v,key:`${S.name}:navigate`,onClick:()=>{z3(f.current,g,S),e?.(S)},style:{flexGrow:Math.max(1,S.duration)},title:e?`Play from ${S.name}`:`Show ${S.name}`,type:"button"},S.name))):null)}function C3(s,e=[]){const n=_3(s),a=Math.max(1,...s.map(c=>Number(c.time||0)+Number(c.duration||0))),l=e.map(c=>({name:String(c?.name||"section"),time:Number(c?.time||0),duration:Number(c?.durationSeconds||0)}));return{events:s,maxTime:a,sections:l,timelineWidth:Math.max(780,Math.ceil(a*8)),tracks:n}}function O3(s,e){const n=s.getBoundingClientRect();if(n.width<=0||n.height<=0)return;const a=Math.max(1,globalThis.devicePixelRatio||1);s.width=Math.round(n.width*a),s.height=Math.round(n.height*a);const l=s.getContext("2d");l.setTransform(a,0,0,a,0,0);const c=getComputedStyle(s),u=c.getPropertyValue("--rasa-panel").trim()||"#0b0e12",f=c.getPropertyValue("--rasa-line").trim()||"#27303a",h=n.width,p=n.height,g=p/e.tracks.length;l.fillStyle=u,l.fillRect(0,0,h,p),e.sections.forEach((b,v)=>{const S=b.time/e.maxTime*h,k=b.duration/e.maxTime*h;l.fillStyle=v%2===0?"rgba(246, 211, 101, 0.035)":"rgba(120, 214, 255, 0.025)",l.fillRect(S,0,k,p),l.fillStyle=f,l.fillRect(Math.round(S),0,1,p)}),e.tracks.forEach(([b,v],S)=>{const k=S*g;l.fillStyle=f,l.fillRect(0,Math.round(k),h,1);const T=v.map(U=>Number(U.pitch)).filter(Number.isFinite),C=T.length?Math.min(...T):0,_=T.length?Math.max(...T):0;for(const U of v){const K=Number(U.time||0)/e.maxTime*h,$=Math.max(1.5,Number(U.duration||.05)/e.maxTime*h),B=Number(U.pitch),W=Number.isFinite(B)&&_!==C?(B-C)/(_-C):N3(U.pitch),X=k+g-10-W*Math.max(8,g-20);l.globalAlpha=.82,l.fillStyle=U.color||"#f6d365",l.fillRect(K,X,$,Math.max(2,Math.min(5,g*.08)))}l.globalAlpha=1})}function N3(s){return{kick:.12,snare:.48,"tom-low":.32,"tom-high":.64,hihat:.84,rim:.62,shaker:.72,tick:.92}[String(s)]??.5}function D3(s){const e=Math.max(0,Math.round(s));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function j3(s,e,n){if(!s.sections.length)return null;const a=e?.scrollWidth||s.timelineWidth,l=e?.clientWidth||0,c=(n+l/2)/a*s.maxTime;let u=s.sections[0].name;for(const f of s.sections)f.time<=c&&(u=f.name);return u}function z3(s,e,n){if(!s)return;const a=n.time/e.maxTime*s.scrollWidth;s.scrollTo({behavior:"smooth",left:Math.min(a,s.scrollWidth-s.clientWidth)})}function B3(){return globalThis.performance?.now?.()??Date.now()}function L3(s,{display:e,parity:n,packedOutputs:a=[]}){if(e?.kind!=="value")return e;const l=n?.value;if(s==="music"&&wt(Ae(l,"status"))==="scheduled"){const f=mc(Ae(l,"events"));return{kind:"value",text:["{:status :scheduled",` :boundary ${wt(Ae(l,"boundary"))||"ordinary-values"}`,` :tracks ${on(Ae(l,"tracks"))}`,` :notes ${on(Ae(l,"notes"))}`,` :events [${f.length} scheduled provider events]`,` :loaded-from ${JSON.stringify(wt(Ae(l,"loadedFrom"))||"provider")}`,` :trace-count ${on(Ae(l,"traceCount"))}}`].join(`
`)}}if(s!=="visuals")return e;const c=wt(Ae(l,"kind"));if(c==="rasa.demo/vector-scene"){const f=mc(Ae(l,"primitives"));return{kind:"value",text:["{:kind :rasa.demo/vector-scene",` :title ${JSON.stringify(wt(Ae(l,"title"))||"Vector scene")}`,` :width ${on(Ae(l,"width"))}`,` :height ${on(Ae(l,"height"))}`,` :primitive-count ${f.length}`,` :boundary ${wt(Ae(l,"boundary"))||"ordinary-values"}`,` :renderer ${wt(Ae(l,"renderer"))||"canvas-vector-primitives"}}`].join(`
`)}}if(c!=="rasa.demo/packed-rgba-proof")return e;const u=on(Ae(l,"byte-length"));return{kind:"value",text:["{:kind :rasa.demo/packed-rgba-proof",` :title ${JSON.stringify(wt(Ae(l,"title"))||"Packed image")}`,` :callable ${JSON.stringify(wt(Ae(l,"callable"))||"missing")}`,` :width ${on(Ae(l,"width"))}`,` :height ${on(Ae(l,"height"))}`,` :byte-length ${u}`,` :packed-output [${u} bytes captured from optimizer memory]`,` :latest-run-packed-outputs ${a.length}`,` :session-optimizer {:executed ${n?.optimizer?.executed??0}}}`].join(`
`)}}function $h(s){if(s?.status!=="ok")return{status:"idle",message:"No successful Rasa run."};const e=s.parity?.value;if(!e)return{status:"missing-value",message:"Rasa did not return a structured value."};const n=wt(Ae(e,"kind"));if(n==="rasa.demo/vector-scene")return H3(s);if(n==="rasa.demo/packed-rgba-proof"){const a=q3(s);return a.status==="ok"?{status:"ok",type:"packed",image:a}:a}return{status:"wrong-kind",message:`Expected :rasa.demo/vector-scene or :rasa.demo/packed-rgba-proof from Rasa, got ${n||"no :kind"}.`}}function fb(s){let e=2166136261;const n=String(s||"");for(let a=0;a<n.length;a+=1)e^=n.charCodeAt(a),e=Math.imul(e,16777619);return e>>>0}function _3(s){const e=new Map;for(const n of s){const a=String(n.track||"track");e.has(a)||e.set(a,[]),e.get(a).push(n)}return[...e.entries()]}function H3(s){const e=s.parity?.value,n=on(Ae(e,"width")),a=on(Ae(e,"height")),l=mc(Ae(e,"primitives")).map(pc).filter(Boolean);return!n||!a?{status:"missing-size",message:"Rasa returned a vector scene without numeric width and height."}:l.length===0?{status:"missing-primitives",message:"Rasa returned a vector scene without drawable primitives."}:{status:"ok",type:"scene",scene:{kind:wt(Ae(e,"kind")),title:wt(Ae(e,"title")),background:wt(Ae(e,"background")),renderer:wt(Ae(e,"renderer")),boundary:wt(Ae(e,"boundary")),metrics:pc(Ae(e,"metrics"))||{},width:n,height:a,primitives:l}}}function q3(s){const e=Number(s.parity?.optimizer?.executed||0)>0||Number(s.wasmLane?.optimizer?.executed||0)>0||s.wasmLane?.optimizedStatus==="executed";if(!e)return{status:"missing-wmp",message:"The visual source returned without executing a browser WMP-2 packed optimizer region."};const n=s.parity?.value,a=on(Ae(n,"width")),l=on(Ae(n,"height")),c=on(Ae(n,"byte-length")),u=wt(Ae(n,"callable"));if(!u)return{status:"missing-callable",message:"Rasa returned the packed image marker without naming its packed callable."};const f=U3(s,u);if(f?.status==="error")return f;const h=f?.bytes||null,p=a*l*4;return!a||!l||!c||!h?.byteLength?{status:"missing-pixels",message:"Rasa returned the packed image marker but no optimizer byte output was captured."}:c!==p||h.byteLength!==p?{status:"wrong-size",message:`Packed RGBA byte length mismatch: expected ${p}, report says ${c}, optimizer returned ${h.byteLength}.`}:{status:"ok",title:wt(Ae(n,"title")),callable:u,pixelOrigin:wt(Ae(n,"pixel-origin")),width:a,height:l,byteLength:c,pixels:h,optimizerExecuted:e}}function U3(s,e){const n=Array.isArray(s?.packedOutputs)?s.packedOutputs:[],a=n.filter(l=>l?.symbol===e);return a.length!==1?{status:"error",message:`Packed output mismatch for ${e}: expected exactly one matching optimizer output, saw ${a.length} matching output(s) out of ${n.length}.`}:a[0]}function V3(s,e,n){if(!e?.pixels?.byteLength)return null;s.width=e.width,s.height=e.height;const a=s.getContext("2d"),l=new Uint8ClampedArray(e.pixels);return a.imageSmoothingEnabled=!1,a.putImageData(new ImageData(l,e.width,e.height),0,0),s.dataset.sourceHash=String(n),s.dataset.pixelOrigin=e.pixelOrigin||"wmp-2-packed-loop",s.dataset.optimizerExecuted=String(e.optimizerExecuted),l}function G3(s,e,n){const a=s.getBoundingClientRect(),l=Math.max(320,Math.floor(a.width)),c=Math.max(240,Math.floor(a.height)),u=Math.min(window.devicePixelRatio||1,2);s.width=Math.floor(l*u),s.height=Math.floor(c*u);const f=s.getContext("2d");f.setTransform(u,0,0,u,0,0),f.clearRect(0,0,l,c),f.fillStyle=e.background||"#05070a",f.fillRect(0,0,l,c);const h=Math.max(1,Number(e.width||l)),p=Math.max(1,Number(e.height||c)),g=Math.min(l/h,c/p);f.save(),f.translate((l-h*g)/2,(c-p*g)/2),f.scale(g,g);for(const b of e.primitives)$3(f,b);return f.restore(),s.dataset.sourceHash=String(n),s.dataset.sceneKind=e.kind||"rasa.demo/vector-scene",s.dataset.primitiveCount=String(e.primitives.length),s.dataset.boundary="ordinary-values",e}function $3(s,e){const n=String(e.shape||"");s.save(),s.globalAlpha=Y3(e.alpha),n==="rect"?(e.fill&&(s.fillStyle=e.fill,s.fillRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0))),e.stroke&&(s.strokeStyle=e.stroke,s.lineWidth=1,s.strokeRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0)))):n==="line"?(s.strokeStyle=e.stroke||e.fill||"#e8edf2",s.lineWidth=Number(e["line-width"]||e.lineWidth||1),s.lineCap="round",s.beginPath(),s.moveTo(Number(e.x1||0),Number(e.y1||0)),s.lineTo(Number(e.x2||0),Number(e.y2||0)),s.stroke()):n==="circle"&&(s.beginPath(),s.arc(Number(e.x||0),Number(e.y||0),Number(e.r||0),0,Math.PI*2),e.fill&&(s.fillStyle=e.fill,s.fill()),e.stroke&&(s.strokeStyle=e.stroke,s.lineWidth=1,s.stroke())),s.restore()}function Y3(s){const e=Number(s);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):1}function Ae(s,e){return!s||s.kind!=="map"?null:s.entries.find(n=>k1(n.key)===e)?.value||null}function wt(s){return s?s.kind==="string"?s.value:s.kind==="keyword"?s.name:s.kind==="symbol"?s.raw:s.kind==="number"?String(s.value):"":""}function on(s){return s?.kind==="number"?Number(s.value):null}function mc(s){return s?.kind==="vector"||s?.kind==="list"?Array.isArray(s.items)?s.items:[]:[]}function pc(s){return s?s.kind==="number"?Number(s.value):s.kind==="string"?s.value:s.kind==="keyword"?s.name:s.kind==="symbol"?s.raw:s.kind==="boolean"||s.kind==="bool"?!!s.value:s.kind==="nil"?null:s.kind==="vector"||s.kind==="list"?mc(s).map(pc):s.kind==="map"?Object.fromEntries((s.entries||[]).map(e=>[k1(e.key),pc(e.value)])):null:null}function k1(s){return s?.kind==="keyword"?s.name:s?.kind==="string"?s.value:s?.kind==="symbol"?s.raw:""}const K3=`(ns rasa.array)

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
`,W3=`(ns rasa.core)

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
`,X3=`(ns demo.music.notation)

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
`,Q3=`(ns demo.music.score)

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
`,F3=`{:schema :rasa.package/v1
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
`,Z3=`const DEFAULT_TONE_CDN = "https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm";

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
`,P3=`(ns demo.visuals.botanical-glasshouse)

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
`,J3=`(ns demo.visuals.recursive-city)

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
`,I3=`(ns demo.music.glass-clockwork
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
`,eM=`(ns demo.music.emberlight-suite
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
`,tM=`(ns demo.music.polyrhythm-workshop
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
`,nM=`(ns demo.visuals.packed-oil-current
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
`,iM=`(ns demo.visuals.packed-signal-cathedral
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
`,sM=`import { createElement as h, useEffect, useRef, useState } from "react";

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
`,ps=Fi("rasa-core","rasa/core.ras","Rasa standard library",W3,"rasa","library"),db=Fi("rasa-array","rasa/array.ras","Rasa packed-array library",K3,"rasa","library"),hb=Fi("music-notation","demo/music/notation.ras","Rasa music notation library",X3,"rasa","library"),aM=Fi("music-score","demo/music/score.ras","Rasa score engine",Q3,"rasa","library"),kd=Fi("tone-package","demo.tone-js/package.ras","Capability package",F3,"rasa","package"),Td=Fi("tone-provider","tone-provider.js","Browser capability adapter",Z3,"javascript","boundary"),gs=Fi("canvas-renderer","demo-surface/index.js","Browser result renderer",sM,"javascript","boundary"),jn=Object.freeze([ys({id:"botanical",title:"Botanical Glasshouse",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"green",category:"geometry",source:P3,files:[gs,ps]}),ys({id:"city",title:"Recursive City",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"blue",category:"geometry",source:J3,files:[gs,ps]}),ys({id:"algorithmic-orchestra",title:"Algorithmic Orchestra",family:"Generated score",mode:"music",boundary:"Rasa tick score · Tone transport",accent:"gold",category:"music",source:eM,files:[aM,kd,Td,gs,ps]}),ys({id:"polyrhythm",title:"Polyrhythm Workshop",family:"Music composition",mode:"music",boundary:"Rasa score · Tone capability",accent:"red",category:"music",source:tM,files:[hb,kd,Td,gs,ps]}),ys({id:"clockwork",title:"Glass Clockwork",family:"Music composition",mode:"music",boundary:"Tone capability",accent:"gold",category:"music",source:I3,files:[hb,kd,Td,gs,ps]}),ys({id:"oil-current",title:"Chromatic Oil Current",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"red",category:"pixels",source:nM,files:[db,gs,ps]}),ys({id:"signal-cathedral",title:"Signal Cathedral",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"violet",category:"pixels",source:iM,files:[db,gs,ps]})]),mb=Object.freeze([Object.freeze({id:"geometry",label:"Geometry",description:"Rasa scene values",count:Ad("geometry")}),Object.freeze({id:"pixels",label:"Packed pixels",description:"WMP-2 image data",count:Ad("pixels")}),Object.freeze({id:"music",label:"Music",description:"Tone.js capability",count:Ad("music")})]);function rM(s,e){return[Fi("main",`${s.id}.ras`,"Example program",e,"rasa","example",!0),...s.files]}function ys(s){return Object.freeze({...s,files:Object.freeze(s.files)})}function Fi(s,e,n,a,l,c,u=!1){return Object.freeze({id:s,name:e,label:n,content:a,language:l,role:c,editable:u,lines:lM(a)})}function lM(s){return String(s||"").split(`
`).length}function Ad(s){return jn.filter(e=>e.category===s).length}const hh=Object.freeze([Object.freeze({id:"pipeline",label:"Pipeline",description:"Phase status and produced evidence"}),Object.freeze({id:"decisions",label:"Decisions",description:"Planner and optimizer choices"}),Object.freeze({id:"diagnostics",label:"Diagnostics",description:"Source-linked warnings and refusals"}),Object.freeze({id:"movement",label:"Movement",description:"Runtime memory and boundary route"})]);function oM({context:s={},parity:e={},run:n={}}={}){const a=uM(e.phases),l=fM(e),c=Array.isArray(e.diagnostics)?e.diagnostics.map(gM):[],u=pM(e,s),f=a.filter(h=>h.status!=="not-requested").length;return{id:`${n.reportMode||"none"}:${n.elapsedMs||0}:${f}:${l.length}:${c.length}`,status:n.status||e.status||"idle",reportMode:n.reportMode||"none",elapsedMs:Number(n.elapsedMs||0),phases:a,decisions:l,diagnostics:c,movement:u,summary:{capturedPhases:f,totalPhases:a.length,decisions:l.length,diagnostics:c.length,optimizerExecutions:Number(e.optimizer?.executed||0)}}}function cM(s=hh){const e=new Map(hh.map(n=>[n.id,n]));return s.map(n=>typeof n=="string"?e.get(n):{...e.get(n.id),...n}).filter(Boolean)}function uM(s){return Array.isArray(s)?s.map(e=>({...e,id:ce(e.id,"unknown"),label:ce(e.label,ce(e.id,"Unknown phase")),status:ce(e.status,"unknown"),detail:ce(e.detail),metrics:e.metrics&&typeof e.metrics=="object"?Object.fromEntries(Object.entries(e.metrics).map(([n,a])=>[n,yM(a)])):{}})):[]}function fM(s){const e=s.plan||{},n=[...e.decisions||[],...e.candidates||[],...e.rejected||[],...e.fallbacks||[]].map((l,c)=>dM(l,c)),a=s.optimizer;if(a){n.unshift({id:"optimizer:summary",type:"optimizer",category:a.executed>0?"admitted":a.fallbacks?.length?"fallback":"observed",title:a.executed>0?`${a.executed} optimized region executions`:"Optimizer observation",status:a.enabled?"enabled":"disabled",reason:`${a.probes||0} probes · ${a.admitted||0} admitted · ${a.missed||0} missed`,lane:s.execution?.tier||null});for(const[l,c]of(a.fallbacks||[]).entries())n.push({id:`optimizer:fallback:${l}`,type:"fallback",category:"fallback",title:ce(c.symbol,"Optimizer fallback"),status:ce(c.fallback,"fallback"),reason:ce(c.reason,"No reason reported"),lane:ce(s.execution?.tier)||null})}return n}function dM(s,e){const n={...s,type:ce(s?.type,"record"),lane:ce(s?.lane)||null,memoryPath:ce(s?.memoryPath??s?.["memory-path"])||null,wmp:ce(s?.wmp)||null,status:ce(s?.status)||null,decision:ce(s?.decision)||null,candidate:ce(s?.candidate)||null,family:ce(s?.family)||null,evidence:ce(s?.evidence)||null,reason:ce(s?.reason??s?.message)||null};return{...n,id:`${n.type}:${e}`,category:hM(n),title:mM(n)}}function hM(s){const e=`${s.type||""} ${s.status||""} ${s.decision||""}`;return/reject|refus/.test(e)?"rejected":/fallback/.test(e)?"fallback":/admit|execut|selected|ok/.test(e)?"admitted":"observed"}function mM(s){return ce(s.candidate||s.decision||s.family||s.lane||s.type,"Plan record")}function pM(s,e){const n=s.runtime||{};return{steps:(Array.isArray(e.movementSteps)?e.movementSteps:[]).map((l,c)=>({...l,id:ce(l.id,`movement:${c}`),owner:ce(l.owner)||null,label:ce(l.label,`Step ${c+1}`),detail:ce(l.detail)})),runtime:[wa("Execution lane",s.execution?.productLane||n.lane),wa("Execution tier",s.execution?.tier),wa("Memory path",n.memoryPath),wa("Collection implementation",n.collectionImpl),wa("Session",n.sessionMode),wa("Host imports",n.hostImports?"enabled":"not used")].filter(l=>l.value)}}function wa(s,e){return{label:s,value:e==null?null:ce(e)}}function gM(s){return{...s,phase:ce(s?.phase)||null,severity:ce(s?.severity,"info"),code:ce(s?.code)||null,kind:ce(s?.kind)||null,message:ce(s?.message,"Diagnostic record"),detail:ce(s?.detail)||null}}function yM(s){return s==null||typeof s=="string"||typeof s=="number"||typeof s=="boolean"?s:ce(s)}function ce(s,e=""){if(s==null)return e;if(typeof s=="string")return s;if(typeof s=="number"||typeof s=="bigint"||typeof s=="boolean")return String(s);if(Array.isArray(s))return s.map(n=>ce(n)).filter(Boolean).join(", ")||e;if(typeof s=="object"){const n=s.kind||s.type,a=[s.items,s.value,s.values].find(Array.isArray);if(s.name!=null)return String(s.name);if(["set","vector","list"].includes(n)&&a)return a.map(c=>ce(c)).filter(Boolean).join(", ")||e;if(n==="map"&&Array.isArray(s.entries))return s.entries.map(({key:c,value:u})=>`${ce(c,"field")}: ${ce(u,"structured value")}`).join(", ")||e;if(s.raw!=null&&["symbol","char"].includes(n))return String(s.raw);if(s.value!=null&&["keyword","string","symbol","number","boolean"].includes(n))return ce(s.value,e);if(s.label!=null)return ce(s.label,e);const l=Object.entries(s).filter(([c])=>!["kind","type","raw"].includes(c));if(l.length)return l.map(([c,u])=>`${c}: ${ce(u,"structured value")}`).join(", ")}return e||"structured value"}const bM={pipeline:TS,decisions:vb,diagnostics:Jr,movement:WS};function vM({initialLens:s="pipeline",lenses:e=hh,model:n,onOpenSource:a=null,renderers:l={}}){const c=N.useMemo(()=>cM(e),[e]),[u,f]=N.useState(s),h=N.useRef([]),p=N.useId();N.useEffect(()=>{c.some(S=>S.id===u)||f(c[0]?.id||"pipeline")},[u,c]);const g=S=>{const k=(S+c.length)%c.length;h.current[k]?.focus(),f(c[k].id)},b=(S,k)=>{const T=S.key==="ArrowRight"||S.key==="ArrowDown"?k+1:S.key==="ArrowLeft"||S.key==="ArrowUp"?k-1:S.key==="Home"?0:S.key==="End"?c.length-1:null;T!==null&&(S.preventDefault(),g(T))},v=l[u];return x.jsxs("section",{className:"report-explorer","aria-label":"Rasa report explorer",children:[x.jsx(xM,{model:n}),x.jsx("nav",{className:"report-lenses","aria-label":"Report lenses",role:"tablist",children:c.map((S,k)=>{const T=bM[S.id]||bb;return x.jsxs("button",{"aria-controls":`${p}-panel`,"aria-selected":u===S.id,id:`${p}-${S.id}`,onKeyDown:C=>b(C,k),onClick:()=>f(S.id),ref:C=>{h.current[k]=C},role:"tab",tabIndex:u===S.id?0:-1,title:S.description,type:"button",children:[x.jsx(T,{size:15}),x.jsx("span",{children:S.label}),x.jsx("small",{children:jM(S.id,n)})]},S.id)})}),x.jsx("div",{"aria-labelledby":`${p}-${u}`,className:"report-lens-panel",id:`${p}-panel`,role:"tabpanel",children:x.jsx(SM,{children:v?v({model:n,onOpenSource:a}):u==="pipeline"?x.jsx(kM,{model:n,onNavigate:f}):u==="decisions"?x.jsx(MM,{model:n}):u==="diagnostics"?x.jsx(CM,{model:n,onOpenSource:a}):x.jsx(OM,{model:n})},`${n.id}:${u}`)})]})}function xM({model:s}){return x.jsxs("div",{className:"report-summary","aria-label":"Run summary",children:[x.jsx(Ea,{label:"Run",value:s.status}),x.jsx(Ea,{label:"Elapsed",value:s.elapsedMs?`${s.elapsedMs.toFixed(1)} ms`:"not measured"}),x.jsx(Ea,{label:"Phases",value:`${s.summary.capturedPhases}/${s.summary.totalPhases}`}),x.jsx(Ea,{label:"Decisions",value:s.summary.decisions})]})}function Ea({label:s,value:e}){return x.jsxs("div",{children:[x.jsx("span",{children:ce(s)}),x.jsx("strong",{children:ce(e,"not reported")})]})}class SM extends N.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?x.jsx(_a,{title:"This report lens could not be displayed",detail:"The other compiler report lenses remain available."}):this.props.children}}const wM={reader:"Turns source bytes into forms and source spans.",expand:"Normalizes macro and language forms before semantic analysis.",analysis:"Resolves bindings, calls, and source-level meaning.",ir:"Builds backend-neutral executable structure.",facts:"Records proven types, contracts, effects, and representation evidence.",checks:"Applies static contracts before representation planning.",plan:"Chooses execution lanes, representations, and fallback behavior.",eval:"Executes the admitted program and returns its value."};function kM({model:s,onNavigate:e}){const n=s.phases.find(u=>u.status!=="not-requested")?.id||s.phases[0]?.id,[a,l]=N.useState(n);N.useEffect(()=>l(n),[n,s.id]);const c=s.phases.find(u=>u.id===a)||s.phases[0];return c?x.jsxs("div",{className:"pipeline-lens",children:[x.jsxs("div",{className:"compiler-pipeline",children:[x.jsx("nav",{className:"phase-rail","aria-label":"Compiler phase route",children:s.phases.map((u,f)=>x.jsxs("button",{"aria-pressed":u.id===c.id,"data-status":u.status,onClick:()=>l(u.id),type:"button",children:[x.jsx("span",{className:"phase-index",children:String(f+1).padStart(2,"0")}),x.jsx("i",{}),x.jsx("span",{className:"phase-name",children:u.label}),x.jsx("small",{children:u.detail})]},u.id))}),x.jsx(TM,{model:s,onNavigate:e,phase:c})]}),s.reportMode!=="all"?x.jsx(DM,{title:"Compact report captured",detail:"Enable the detailed report and run again to inspect every compiler phase."}):null]}):x.jsx(_a,{title:"No phase records",detail:"This run did not return a phase projection."})}function TM({model:s,onNavigate:e,phase:n}){const a=AM(n),l=n.id==="plan"?"decisions":n.diagnostics?"diagnostics":n.id==="eval"?"movement":null;return x.jsxs("article",{className:"phase-detail",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Compiler phase"}),x.jsx("h3",{children:n.label})]}),x.jsx("em",{"data-status":n.status,children:n.status})]}),x.jsx("p",{className:"phase-description",children:wM[n.id]}),x.jsx("div",{className:"phase-metrics",children:a.map(c=>x.jsx(Ea,{label:c.label,value:c.value},c.label))}),x.jsxs("div",{className:"phase-report-depth",children:[x.jsx("span",{children:"Report depth"}),x.jsx("strong",{children:EM(n)})]}),l?x.jsxs("button",{className:"phase-follow",onClick:()=>e(l),type:"button",children:[x.jsx("span",{children:n.id==="plan"?`${s.summary.decisions} decision records`:n.id==="eval"?"Inspect value movement":`${s.summary.diagnostics} diagnostic records`}),x.jsx(gh,{size:14})]}):null]})}function AM(s){const e=s.metrics||{};return s.status==="not-requested"?[{label:"Capture",value:"not requested"}]:s.id==="facts"?[{label:"Facts",value:e.facts??0},{label:"Declared",value:e.declaredFacts??0},{label:"Metadata contracts",value:e.metadataContracts??0},{label:"Mode",value:e.mode||"unknown"}]:s.id==="plan"?[{label:"Lanes",value:e.lanes??0},{label:"Candidates",value:e.candidates??0},{label:"Rejected",value:e.rejected??0},{label:"Fallbacks",value:e.fallbacks??0}]:s.id==="checks"?[{label:"Checks",value:e.checks??0},{label:"Action",value:e.action||"none"},{label:"Diagnostics",value:e.diagnostics??0}]:[{label:"Status",value:s.status},{label:"Diagnostics",value:e.diagnostics??0}]}function EM(s){return s.status==="not-requested"?"This phase was not captured in the current report.":s.id==="facts"?"Fact totals and contract counts are available; individual fact records are not linked in this runtime projection.":s.id==="plan"?"Lane, decision, candidate, rejection, fallback, and optimizer records are available for exploration.":s.id==="checks"?"Check totals, action, and diagnostics are available.":s.id==="eval"?"Evaluation status, returned value, diagnostics, and runtime movement are available through related lenses.":"The current runtime report exposes phase status and diagnostic count."}function MM({model:s}){const e=["all","admitted","rejected","fallback"],[n,a]=N.useState("all"),[l,c]=N.useState("groups"),[u,f]=N.useState(""),[h,p]=N.useState(60),[g,b]=N.useState(null);N.useEffect(()=>{a("all"),c("groups"),f(""),p(60),b(null)},[s.id]);const v=N.useMemo(()=>s.decisions.filter(C=>{if(n!=="all"&&C.category!==n)return!1;const _=`${C.type} ${C.title} ${C.reason||""} ${C.lane||""}`.toLowerCase();return!u||_.includes(u.toLowerCase())}),[n,s.decisions,u]),S=N.useMemo(()=>l==="groups"?RM(v):v,[v,l]),k=l==="records"?S.slice(0,h):S,T=S.find(C=>C.id===g)||S[0];return s.decisions.length===0?x.jsx(_a,{title:"No decisions captured",detail:"A detailed report can expose planner and optimizer records when this program produces them."}):x.jsxs("div",{className:"decisions-lens",children:[x.jsxs("div",{className:"report-filters","aria-label":"Decision filters",children:[x.jsx("div",{children:e.map(C=>x.jsx("button",{"aria-pressed":n===C,onClick:()=>{a(C),b(null)},type:"button",children:C},C))}),x.jsxs("label",{className:"decision-search",children:[x.jsx(FS,{size:13}),x.jsx("input",{"aria-label":"Search decisions",onChange:C=>{f(C.target.value),b(null)},placeholder:"Search evidence",type:"search",value:u})]}),x.jsxs("div",{className:"decision-mode","aria-label":"Decision density",children:[x.jsx("button",{"aria-pressed":l==="groups",onClick:()=>{c("groups"),b(null)},type:"button",children:"Grouped"}),x.jsx("button",{"aria-pressed":l==="records",onClick:()=>{c("records"),b(null)},type:"button",children:"Records"})]})]}),x.jsxs("div",{className:"report-record-layout",children:[x.jsxs("div",{className:"report-record-list",children:[x.jsxs("div",{className:"record-list-status",children:["Showing ",k.length.toLocaleString()," of ",S.length.toLocaleString()," ",l]}),k.map(C=>x.jsxs("button",{"aria-pressed":C.id===T?.id,"data-category":C.category,onClick:()=>b(C.id),type:"button",children:[x.jsxs("span",{className:"decision-context",children:[x.jsx("i",{children:ce(C.type,"record")}),x.jsx("b",{children:ce(C.lane,"lane not reported")})]}),x.jsxs("strong",{children:[ce(C.title,"Plan record"),C.count>1?x.jsx("em",{children:C.count}):null]}),x.jsx("small",{children:ce(C.reason||C.status,"Structured plan record")})]},C.id)),l==="records"&&k.length<S.length?x.jsx("button",{className:"load-more-records",onClick:()=>p(C=>C+60),type:"button",children:"Show 60 more"}):null,S.length===0?x.jsx(_a,{title:"No matching decisions",detail:`No ${n} records matched this view.`}):null]}),T?x.jsx(NM,{eyebrow:T.type,title:T.title,status:T.status||T.category,detail:T.reason,values:zM(T)}):null]})]})}function RM(s){const e=new Map;for(const n of s){const a=[n.category,n.type,n.title,n.status,n.reason,n.lane].join("\0"),l=e.get(a);if(l){l.count+=1;continue}e.set(a,{...n,id:`group:${e.size}`,count:1})}return[...e.values()].sort((n,a)=>a.count-n.count||n.title.localeCompare(a.title))}function CM({model:s,onOpenSource:e}){return s.diagnostics.length===0?x.jsx(_a,{title:"No diagnostics",detail:"No warning, refusal, or failure record was captured for this run."}):x.jsx("div",{className:"diagnostic-list",children:s.diagnostics.map((n,a)=>x.jsxs("article",{"data-severity":n.severity,children:[x.jsxs("header",{children:[x.jsx("span",{children:n.phase||"runtime"}),x.jsx("strong",{children:n.code||n.kind||n.severity})]}),x.jsx("p",{children:n.message}),n.detail?x.jsx("small",{children:n.detail}):null,n.span&&e?x.jsxs("button",{onClick:()=>e(n.span),type:"button",children:["Open source ",n.span.start,"..",n.span.end]}):null]},`${n.code||n.kind}:${a}`))})}function OM({model:s}){return x.jsxs("div",{className:"movement-lens",children:[s.movement.steps.length?x.jsx("div",{className:"movement-route",children:s.movement.steps.map((e,n)=>x.jsxs(gc.Fragment,{children:[x.jsxs("div",{children:[x.jsx("span",{children:e.owner||`Step ${n+1}`}),x.jsx("strong",{children:e.label}),x.jsx("small",{children:e.detail})]}),n<s.movement.steps.length-1?x.jsx(gh,{"aria-hidden":"true",size:15}):null]},e.id))}):x.jsx(_a,{title:"No boundary route",detail:"This consumer did not provide a domain-specific movement projection."}),x.jsx("div",{className:"runtime-facts",children:s.movement.runtime.map(e=>x.jsx(Ea,{label:e.label,value:e.value},e.label))})]})}function NM({detail:s,eyebrow:e,status:n,title:a,values:l}){return x.jsxs("article",{className:"report-record-detail",children:[x.jsxs("header",{children:[x.jsx("span",{children:ce(e)}),x.jsx("em",{"data-status":ce(n),children:ce(n)})]}),x.jsx("h3",{children:ce(a,"Report record")}),s?x.jsx("p",{children:ce(s)}):null,x.jsx("dl",{children:Object.entries(l||{}).filter(([,c])=>c!=null).map(([c,u])=>x.jsxs(gc.Fragment,{children:[x.jsx("dt",{children:BM(c)}),x.jsx("dd",{children:ce(u)})]},c))})]})}function DM({detail:s,title:e}){return x.jsxs("div",{className:"report-notice",children:[x.jsx("strong",{children:e}),x.jsx("span",{children:s})]})}function _a({detail:s,title:e}){return x.jsxs("div",{className:"report-empty",children:[x.jsx(bb,{size:20}),x.jsx("strong",{children:e}),x.jsx("span",{children:s})]})}function jM(s,e){return s==="pipeline"?e.summary.capturedPhases:s==="decisions"?e.summary.decisions:s==="diagnostics"?e.summary.diagnostics:e.movement.steps.length}function zM(s){return{lane:s.lane,memoryPath:s.memoryPath,wmp:s.wmp,family:s.family,evidence:s.evidence,decision:s.decision,occurrences:s.count}}function BM(s){return String(s).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," ")}function LM({events:s,example:e,fullReport:n,onClose:a,onFullReportChange:l,open:c,reportMode:u,runState:f}){const h=N.useMemo(()=>{const g=e.mode==="visuals"?$h(f):null;return oM({context:{movementSteps:_M(e,g,s)},parity:f?.parity||{},run:{elapsedMs:f?.elapsedMs,reportMode:u,status:f?.status||"idle"}})},[s,e,u,f]);if(!c)return null;const p=n?u==="all"?"Full phases captured in this run":"Enabled; run again to capture every phase":"Compact evaluation only";return x.jsxs("aside",{className:"evidence-drawer","aria-label":"Rasa execution evidence",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution evidence"}),x.jsx("strong",{children:u==="all"?"Explore full report":u==="eval"?"Explore compact report":"No captured run"})]}),x.jsx("button",{"aria-label":"Close evidence",onClick:a,title:"Close evidence",type:"button",children:x.jsx(yh,{size:17})})]}),x.jsxs("section",{className:"evidence-capture",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"Detailed compiler report"}),x.jsx("span",{children:p})]}),x.jsx("button",{"aria-checked":n,"aria-label":"Capture detailed compiler report",className:"report-switch",onClick:()=>l(!n),role:"switch",type:"button",children:x.jsx("i",{})})]}),x.jsx(vM,{model:h}),f?.status==="error"&&!h.diagnostics.length?x.jsx("pre",{className:"evidence-error",children:f.display?.text||f.error?.message}):null]})}function _M(s,e,n){return s.mode==="music"?[{id:"rasa-composition",owner:"Rasa",label:"Composition value",detail:`${n.length} scheduled note maps produced`},{id:"capability-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"tone-schedule",owner:"Tone.js",label:"Playback schedule",detail:"Tone.js owns transport timing and audio output"}]:e?.type==="packed"?[{id:"packed-region",owner:"Rasa",label:"WMP-2 packed region",detail:`${e.image.byteLength.toLocaleString()} RGBA bytes computed`},{id:"optimizer-output",owner:"Boundary",label:"Optimizer memory output",detail:"Packed bytes published without EDN pixel serialization"},{id:"image-data",owner:"Canvas",label:"ImageData render",detail:"Browser canvas receives the packed RGBA bytes"}]:e?.type==="scene"?[{id:"scene-value",owner:"Rasa",label:"Scene value",detail:`${e.scene.primitives.length.toLocaleString()} ordinary shape maps produced`},{id:"scene-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"primitive-render",owner:"Canvas",label:"Primitive renderer",detail:"Browser draws the returned geometric commands"}]:[]}const HM={botanical:wS,city:rS,"algorithmic-orchestra":Kr,clockwork:Kr,polyrhythm:Kr,"oil-current":Cd,"signal-cathedral":Cd},qM={geometry:PS,pixels:ES,music:Kr},UM={geometry:"Visuals",pixels:"Visuals",music:"Music"},VM={music:"Compositions"};function GM({activeId:s,categories:e,categoryId:n,examples:a,observed:l,onCategorySelect:c,onSelect:u}){const f=N.useRef([]),h=a.filter(b=>b.category===n),p=b=>{const v=(b+e.length)%e.length;f.current[v]?.focus(),c(e[v].id)},g=(b,v)=>{const S=b.key==="ArrowRight"||b.key==="ArrowDown"?v+1:b.key==="ArrowLeft"||b.key==="ArrowUp"?v-1:b.key==="Home"?0:b.key==="End"?e.length-1:null;S!==null&&(b.preventDefault(),p(S))};return x.jsxs("nav",{className:"example-gallery","aria-label":"Rasa examples",children:[x.jsxs("div",{className:"example-categories",role:"tablist","aria-label":"Example categories",children:[x.jsxs("span",{className:"gallery-label",children:[x.jsx(Py,{size:14})," Explore"]}),e.map((b,v)=>{const S=qM[b.id]||Py,k=UM[b.id]||"Examples",T=VM[b.id]||b.label;return x.jsxs("button",{"aria-controls":`example-panel-${b.id}`,"aria-selected":b.id===n,className:"category-choice","data-family":k.toLowerCase(),id:`example-tab-${b.id}`,onKeyDown:C=>g(C,v),onClick:()=>c(b.id),ref:C=>{f.current[v]=C},role:"tab",tabIndex:b.id===n?0:-1,type:"button",children:[x.jsx(S,{"aria-hidden":"true",size:14}),x.jsxs("span",{className:"category-copy",children:[x.jsx("small",{children:k}),x.jsx("strong",{children:T})]}),x.jsx("span",{className:"category-count","aria-label":`${b.count} examples`,children:b.count})]},b.id)})]}),x.jsx("div",{"aria-labelledby":`example-tab-${n}`,className:"gallery-list",id:`example-panel-${n}`,role:"tabpanel",children:h.map(b=>{const v=HM[b.id]||Cd,S=l[b.id]||null;return x.jsxs("button",{"aria-pressed":b.id===s,className:"example-choice","data-accent":b.accent,"data-selected":b.id===s,onClick:()=>u(b.id),type:"button",children:[x.jsx(v,{"aria-hidden":"true",size:18}),x.jsxs("span",{children:[x.jsx("strong",{children:b.title}),x.jsx("small",{children:S||b.boundary})]})]},b.id)})})]})}function mh({children:s,label:e,onClose:n,title:a}){return N.useEffect(()=>{const l=c=>{c.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),x.jsx("div",{className:"studio-overlay",onMouseDown:l=>l.target===l.currentTarget&&n(),role:"presentation",children:x.jsxs("section",{"aria-label":e,"aria-modal":"true",className:"studio-overlay-panel",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:e}),x.jsx("strong",{children:a})]}),x.jsx("button",{"aria-label":`Close ${e}`,onClick:n,title:"Close",type:"button",children:x.jsx(yh,{size:18})})]}),x.jsx("div",{className:"studio-overlay-body",children:s})]})})}const $o=24e3;function $M({onClose:s,open:e,output:n,outputKind:a,runState:l}){const[c,u]=N.useState("projection");N.useEffect(()=>{e&&u("projection")},[e]);const f=l?.rawDisplay?.text||"",p=c==="raw"?f||"No raw value is available.":n||"No result yet.",g=N.useMemo(()=>p.length>$o?`${p.slice(0,$o)}

… preview stopped at ${$o.toLocaleString()} characters`:p,[p]);return e?x.jsx(mh,{label:"Rasa result",onClose:s,title:a||"value",children:x.jsxs("div",{className:"result-overlay",children:[x.jsxs("header",{className:"result-toolbar",children:[x.jsxs("div",{className:"result-tabs",role:"tablist","aria-label":"Result representation",children:[x.jsx("button",{"aria-selected":c==="projection",onClick:()=>u("projection"),role:"tab",type:"button",children:"Readable projection"}),x.jsx("button",{"aria-selected":c==="raw",onClick:()=>u("raw"),role:"tab",type:"button",children:"Raw returned value"})]}),x.jsxs("button",{className:"copy-result",onClick:()=>navigator.clipboard.writeText(p),title:"Copy complete selected value",type:"button",children:[x.jsx(dS,{size:15}),x.jsx("span",{children:"Copy all"})]})]}),x.jsxs("div",{className:"result-context",children:[x.jsxs("strong",{children:[p.length.toLocaleString()," characters"]}),x.jsx("span",{children:c==="projection"?"A deliberate readable projection. It may summarize large returned structures.":p.length>$o?"The complete value is available through Copy all; the DOM preview is bounded to keep the Studio responsive.":"The unprojected value returned by the runtime."})]}),x.jsx("pre",{children:g})]})}):null}function YM({activeId:s,files:e,onClose:n,onSelect:a}){N.useEffect(()=>{const c=u=>{u.key==="Escape"&&n()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n]);const l=KM(e);return x.jsxs("section",{"aria-label":"Files participating in this example","aria-modal":"true",className:"source-explorer",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution sources"}),x.jsxs("strong",{children:[e.length," visible files"]})]}),x.jsx("div",{className:"source-explorer-actions",children:x.jsx("button",{"aria-label":"Close source explorer",onClick:n,title:"Close source explorer",type:"button",children:x.jsx(yh,{size:16})})})]}),l.map(([c,u])=>x.jsxs("div",{className:"source-group",children:[x.jsx("div",{className:"source-role",children:WM(c)}),u.map(f=>x.jsxs("button",{"data-active":f.id===s,onClick:()=>a(f.id),type:"button",children:[x.jsxs("span",{children:[x.jsx("strong",{children:f.name}),x.jsx("small",{children:f.label})]}),x.jsxs("em",{children:[f.lines," lines"]})]},f.id))]},c))]})}function KM(s){const e=new Map;for(const n of s)e.has(n.role)||e.set(n.role,[]),e.get(n.role).push(n);return[...e.entries()]}function WM(s){return s==="example"?"Visible user program":s==="library"?"Rasa libraries":s==="package"?"Capability package":s==="boundary"?"Browser boundary code":s}function XM({file:s,onChange:e,onRun:n,resetKey:a}){const l=N.useRef(null),c=N.useRef(e),u=N.useRef(n);return c.current=e,u.current=n,N.useEffect(()=>{if(!l.current)return;const f=zh({parent:l.current,doc:s.content,liveLexicalHighlight:s.language==="rasa",onChange:s.editable?h=>c.current?.(h):null,onRun:s.editable?()=>u.current?.():null,readOnly:!s.editable});return s.editable&&f.focus(),()=>f.destroy()},[s.id,s.editable,s.language,a]),x.jsx("div",{className:"studio-editor","data-language":s.language,ref:l})}function pb({events:s,example:e,expanded:n=!1,onEvidence:a,onExpand:l,onRendered:c,onResult:u,onSectionPlay:f,playback:h,playbackOffsetSeconds:p=0,playbackStartedAtMs:g,renderKey:b,runState:v,sections:S=[],source:k}){if(!v)return x.jsxs("section",{className:"live-stage stage-empty",children:[x.jsx(yc,{size:28}),x.jsx("strong",{children:"Run the visible Rasa program"}),x.jsx("p",{children:"The stage remains empty until this session returns a real value or provider schedule."})]});if(v.status!=="ok")return x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(Jr,{size:28}),x.jsx("strong",{children:"Rasa run failed"}),x.jsx("pre",{children:v.display?.text||v.error?.message})]});if(e.mode==="music")return x.jsxs("section",{className:"live-stage music-stage",children:[x.jsx(Ed,{detail:`${s.length} provider events · ${h}`,onEvidence:a,onResult:u,title:e.title}),x.jsx(M3,{events:s,onSectionPlay:f,playbackOffsetSeconds:p,playbackStartedAtMs:g,playing:h==="playing",sections:S,empty:x.jsxs("div",{className:"stage-empty",children:[x.jsx(Kr,{size:28}),x.jsx("strong",{children:"No provider events"}),x.jsx("p",{children:"The Rasa run completed without scheduling audible notes."})]})})]});const T=$h(v);return T.status!=="ok"?x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(Jr,{size:28}),x.jsx("strong",{children:"Visual result refused"}),x.jsx("pre",{children:T.message})]}):T.type==="scene"?x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Ed,{detail:`${T.scene.primitives.length} returned primitives`,onEvidence:a,onResult:u,title:T.scene.title}),x.jsx(gb,{onExpand:n?null:l,children:x.jsx(A3,{onRendered:c,renderKey:b,scene:T.scene,sourceHash:fb(k)})})]}):x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Ed,{detail:`${T.image.byteLength} optimizer-published bytes`,onEvidence:a,onResult:u,title:T.image.title}),x.jsx(gb,{className:"packed-stage",onExpand:n?null:l,children:x.jsx(E3,{image:T.image,onRendered:c,renderKey:b,sourceHash:fb(k)})})]})}function Ed({detail:s,onEvidence:e,onResult:n,title:a}){return x.jsxs("header",{className:"stage-header",children:[x.jsxs("div",{className:"stage-heading",children:[x.jsx("h1",{children:a}),x.jsx("span",{children:s})]}),x.jsxs("div",{className:"stage-actions",children:[n?x.jsxs("button",{"aria-label":"Inspect returned value",onClick:n,title:"Inspect returned value",type:"button",children:[x.jsx(vb,{size:15}),x.jsx("span",{children:"Result"})]}):null,e?x.jsxs("button",{"aria-label":"Inspect execution evidence",onClick:e,title:"Inspect execution evidence",type:"button",children:[x.jsx(NS,{size:15}),x.jsx("span",{children:"Evidence"})]}):null]})]})}function gb({children:s,className:e="",onExpand:n}){return n?x.jsxs("button",{"aria-label":"Expand visual result",className:`stage-canvas visual-expand-trigger ${e}`.trim(),onClick:n,title:"Expand visual result",type:"button",children:[s,x.jsx("span",{"aria-hidden":"true",className:"visual-expand-hint",children:x.jsx(CS,{size:17})})]}):x.jsx("div",{className:`stage-canvas ${e}`.trim(),children:s})}const Md=Object.freeze({phases:"eval"}),QM=Object.freeze({phases:"all"});function FM(){const s=N.useMemo(()=>JT(),[]),e=N.useRef(0),[n,a]=N.useState(()=>sw()),[l,c]=N.useState(jn[0].id),[u,f]=N.useState(jn[0].category),[h,p]=N.useState(()=>Object.fromEntries(jn.map(he=>[he.id,he.source]))),[g,b]=N.useState(()=>Object.fromEntries(mb.map(he=>[he.id,jn.find(Me=>Me.category===he.id)?.id]))),v=N.useMemo(()=>jn.find(he=>he.id===l)||jn[0],[l]),[S,k]=N.useState(v.source),[T,C]=N.useState(0),[_,U]=N.useState("main"),[K,$]=N.useState(!1),[B,W]=N.useState(!0),[X,te]=N.useState(!1),[pe,Xe]=N.useState(!1),[ct,je]=N.useState(!1),[bt,He]=N.useState(!1),[Qe,H]=N.useState(!1),[Q,ie]=N.useState(()=>s.snapshot()),[I,ae]=N.useState(null),[E,q]=N.useState(null),[F,Z]=N.useState([]),[re,le]=N.useState([]),[be,Ge]=N.useState("idle"),[$e,Lt]=N.useState(null),[Gt,_t]=N.useState(0),[js,Mn]=N.useState({}),fi=N.useMemo(()=>rM(v,S),[v,S]),di=fi.find(he=>he.id===_)||fi[0],Ce=S1({configureOptions:Md,evalOptions:Md,manifestUrl:"./browser-manifest.json"});N.useEffect(()=>s.subscribe(ie),[s]);const qa=N.useCallback(async()=>{const he=++e.current;let Me=null;try{const gt=X?"all":"eval",Ga=Ce.getProvider("demo.tone-js");if(Ga?.started&&Ga.stop(),Ga?.activateFromGesture?.(),q(null),Z([]),le([]),Ge("stopped"),Lt(null),_t(0),ae(null),Me=await s.beginRun({label:`${v.title} source`,source:S}),he!==e.current)return;const zs=Ce.getProvider("demo.tone-js");zs?.setExecutionWitness?.(s,Me);const hi=await Ce.run(S,{evalOptions:gt==="all"?QM:Md,formatDisplay:tt=>L3(v.mode,tt)});if(he!==e.current)return;if(!hi){s.recordError(Me,new Error("Rasa browser session did not execute"));return}const Ie={...hi,reportMode:gt};if(s.recordRuntime(Me,PM(Ie)),Ie.status!=="ok"){s.recordError(Me,Ie.error||new Error(Ie.display?.text||"Rasa run failed")),q(Ie);return}if(v.mode==="music"){const tt=zs?.lastEvents||[];q(Ie),Z(tt),le(zs?.lastScore?.sections||[]),Ge(tt.length>0?"playing":"idle"),Lt(tt.length>0?zs?.playbackStartedAtMs??null:null),_t(0),Mn(vt=>({...vt,[v.id]:`${tt.length} scheduled events`}));return}if(v.mode==="visuals"){const tt=$h(Ie);if(tt.status!=="ok"){s.recordError(Me,new Error(tt.message||"Visual artifact refused")),q(Ie);return}const vt=JM(tt),Oc=await s.recordArtifact(Me,vt.artifact),hl=await s.beforeEffect(Me,vt.boundary);if(he!==e.current||!Oc||!hl)return;ae({boundaryDigest:hl.digest,runId:Me}),q(Ie);const Nc=tt.type==="scene"?`${tt.scene.primitives.length} returned primitives`:`${tt.image.byteLength} packed bytes`;Mn(Bs=>({...Bs,[v.id]:Nc}))}}catch(gt){if(he!==e.current||gt?.kind==="browser-effect-cancelled")return;Me&&s.recordError(Me,gt),q({display:{kind:"error",text:gt?.message||String(gt)},error:gt,status:"error"})}},[X,v,Ce.getProvider,Ce.run,S,s]),Zi=N.useCallback(async he=>{const Me=jn.find(gt=>gt.id===he);!Me||Me.id===l||(e.current+=1,s.cancel("example changed"),await Ce.getProvider("demo.tone-js")?.stop?.(),s.reset(),c(Me.id),f(Me.category),b(gt=>({...gt,[Me.category]:Me.id})),k(h[Me.id]??Me.source),C(gt=>gt+1),U("main"),$(!1),q(null),Z([]),le([]),Ge("idle"),Lt(null),_t(0),Xe(!1),je(!1),He(!1),H(!1),ae(null))},[h,l,Ce.getProvider,s]),Ua=N.useCallback(he=>{const Me=g[he]||jn.find(gt=>gt.category===he)?.id;Me&&Zi(Me)},[g,Zi]),Va=N.useCallback(async()=>{await Ce.getProvider("demo.tone-js")?.stop?.(),Ge("stopped"),Lt(null),_t(0)},[Ce.getProvider]),Mc=N.useCallback(he=>{const Me=Ce.getProvider("demo.tone-js")?.playFromSection?.(he.name);Me&&(Ge("playing"),Lt(Me.playbackStartedAtMs),_t(Me.offsetSeconds))},[Ce.getProvider]),Rc=N.useCallback(()=>{e.current+=1,s.cancel("source restored"),Ce.getProvider("demo.tone-js")?.stop?.(),s.reset(),k(v.source),p(he=>({...he,[v.id]:v.source})),C(he=>he+1),U("main"),q(null),Z([]),le([]),Ge("stopped"),Lt(null),_t(0),Xe(!1),je(!1),He(!1),ae(null)},[v,Ce.getProvider,s]),Ht=N.useCallback(()=>{a(aw())},[]),Cc=N.useCallback(he=>{e.current+=1,s.cancel("source edited"),s.reset(),Ce.getProvider("demo.tone-js")?.stop?.(),k(he),p(Me=>({...Me,[v.id]:he})),q(null),Z([]),le([]),Ge("stopped"),Lt(null),_t(0),ae(null)},[v.id,Ce.getProvider,s]),fl=N.useCallback(()=>{e.current+=1,s.cancel("session restarted"),s.reset(),Ce.getProvider("demo.tone-js")?.stop?.(),q(null),Z([]),le([]),Ge("stopped"),Lt(null),_t(0),ae(null),Ce.boot()},[Ce.boot,Ce.getProvider,s]),dl=N.useCallback(he=>{I&&s.recordEffect(I.runId,{...he,authority:"browser-effect",inputDigest:I.boundaryDigest})},[I,s]);return x.jsxs("div",{className:"studio-shell","data-editor-open":B,children:[x.jsx("style",{children:iw()}),x.jsx("style",{children:QT}),x.jsx("style",{children:lw()}),x.jsx(ow,{actions:x.jsx("button",{"aria-label":"Restart Rasa session",className:"rasa-site-action",onClick:fl,title:"Restart Rasa session",type:"button",children:x.jsx(GS,{size:15})}),activeId:"studio",onThemeToggle:Ht,runtimeLabel:Ce.runtimeState.available?"Wasm ready":Ce.status,runtimeStatus:Ce.runtimeState.available?"ready":Ce.status,runtimeTitle:Ce.runtimeState.message||(Ce.runtimeState.available?"Browser Wasm runtime ready":Ce.status),theme:n}),x.jsx(GM,{activeId:v.id,categories:mb,categoryId:u,examples:jn,observed:js,onCategorySelect:Ua,onSelect:Zi}),x.jsxs("main",{className:"studio-workspace",children:[x.jsxs("section",{className:"studio-stage-shell",children:[x.jsx(pb,{events:F,example:v,onEvidence:()=>Xe(!0),onExpand:v.mode==="visuals"?()=>He(!0):null,onRendered:dl,onResult:()=>je(!0),onSectionPlay:Mc,playback:be,playbackOffsetSeconds:Gt,playbackStartedAtMs:$e,renderKey:I?.runId||null,runState:E,sections:re,source:S}),x.jsx(eA,{model:Q,onOpen:()=>H(!0),onRelease:s.release})]}),x.jsxs("section",{className:"editor-dock",children:[x.jsxs("header",{className:"editor-header",children:[B?x.jsxs("button",{"aria-expanded":K,className:"source-trigger",onClick:()=>$(he=>!he),type:"button",children:[x.jsx(bS,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:di.name}),x.jsxs("small",{children:[fi.length," participating files"]})]})]}):null,x.jsx(ZM,{canRun:Ce.canRun&&Q.status!=="paused",editorOpen:B,isMusic:v.mode==="music",onCollapse:()=>W(he=>(he&&$(!1),!he)),onReset:Rc,onRun:qa,onStop:Va,running:Ce.running})]}),B?x.jsxs(x.Fragment,{children:[K?x.jsxs(x.Fragment,{children:[x.jsx("button",{"aria-label":"Close source explorer",className:"source-scrim",onClick:()=>$(!1),type:"button"}),x.jsx(YM,{activeId:di.id,files:fi,onClose:()=>$(!1),onSelect:he=>{U(he),$(!1)}})]}):null,x.jsx(XM,{file:di,onChange:di.editable?Cc:null,onRun:qa,resetKey:T})]}):null]}),x.jsx(LM,{events:F,example:v,fullReport:X,onClose:()=>Xe(!1),onFullReportChange:te,open:pe,reportMode:E?.reportMode||"none",runState:E}),x.jsx($M,{onClose:()=>je(!1),open:ct,output:Ce.output,outputKind:Ce.outputKind,runState:E}),Qe?x.jsx(mh,{label:"How Rasa made this result",onClose:()=>H(!1),title:"Proof trail",children:x.jsx(tA,{model:Q,onPauseChange:s.setPauseBeforeEffect,onRelease:s.release})}):null,bt&&E?.status==="ok"&&v.mode==="visuals"?x.jsx(mh,{label:"Expanded Rasa result",onClose:()=>He(!1),title:v.title,children:x.jsx(pb,{events:F,example:v,expanded:!0,playback:be,playbackStartedAtMs:$e,runState:E,source:S})}):null]})]})}function ZM({canRun:s,editorOpen:e,isMusic:n,onCollapse:a,onReset:l,onRun:c,onStop:u,running:f}){return e?x.jsxs("div",{className:"editor-actions",children:[n?x.jsx("button",{"aria-label":"Stop audio",onClick:u,title:"Stop audio",type:"button",children:x.jsx(tw,{size:17})}):null,x.jsx("button",{"aria-label":"Restore example source",onClick:l,title:"Restore example source",type:"button",children:x.jsx(YS,{size:17})}),x.jsx("button",{"aria-label":f?"Running Rasa":"Run Rasa",className:"editor-run",disabled:!s,onClick:c,title:f?"Running Rasa":"Run Rasa",type:"button",children:x.jsx(yc,{fill:"currentColor",size:20})}),x.jsx("button",{"aria-label":e?"Collapse editor":"Open editor",className:"editor-collapse",onClick:a,title:e?"Collapse editor":"Open editor",type:"button",children:e?x.jsx(LS,{size:17}):x.jsx(Jy,{size:17})})]}):x.jsx("div",{className:"editor-actions editor-actions-collapsed",children:x.jsx("button",{"aria-label":"Open editor",className:"editor-collapse",onClick:a,title:"Open editor",type:"button",children:x.jsx(Jy,{size:17})})})}function PM(s){const e=s.parity?.execution||{},n=s.parity?.optimizer||s.wasmLane?.optimizer||{},a=e.tier||s.wasmLane?.runtimeExecutionTier||"portable-runtime",l=e.productLane||s.wasmLane?.productLane||"browser-wasm",c=Number(n.executed||0);return{detail:c>0?`${l} · ${a} · ${c} optimized region execution${c===1?"":"s"}`:`${l} · ${a} · no optimized region executed`,elapsedMs:s.elapsedMs,executionTier:a,optimizerExecutions:c,reportMode:s.reportMode,status:s.status}}function JM(s){if(s.type==="scene"){const n=s.scene.primitives.length;return{artifact:{count:n,detail:`${n.toLocaleString()} drawing instructions returned as ordinary Rasa values`,kind:"ordinary-rasa-scene",label:"Rasa scene value",payload:s.scene,unit:"primitives"},boundary:{authority:"browser-boundary",count:n,detail:`${n.toLocaleString()} drawing instructions handed to Canvas`,kind:"canvas-primitive-input",label:"Canvas primitive input",payload:s.scene,unit:"primitives"}}}const e=s.image.pixels.byteLength;return{artifact:{count:e,detail:`${e.toLocaleString()} RGBA bytes published by the executed WMP-2 callable`,kind:"wmp-2-rgba-bytes",label:"WMP-2 pixel artifact",payload:s.image.pixels,unit:"bytes"},boundary:{authority:"browser-boundary",count:e,detail:`${e.toLocaleString()} optimizer bytes passed to ImageData`,kind:"canvas-image-data-input",label:"Canvas pixel input",payload:s.image.pixels,unit:"bytes"}}}X2.createRoot(document.getElementById("root")).render(x.jsx(gc.StrictMode,{children:x.jsx(FM,{})}));
