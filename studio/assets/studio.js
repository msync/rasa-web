(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function G2(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Wf={exports:{}},Lr={};var Uy;function $2(){if(Uy)return Lr;Uy=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:i,type:a,key:u,ref:l!==void 0?l:null,props:c}}return Lr.Fragment=e,Lr.jsx=n,Lr.jsxs=n,Lr}var Vy;function Y2(){return Vy||(Vy=1,Wf.exports=$2()),Wf.exports}var v=Y2(),Xf={exports:{}},fe={};var Gy;function K2(){if(Gy)return fe;Gy=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function _(E,q,F){this.props=E,this.context=q,this.refs=M,this.updater=F||k}_.prototype.isReactComponent={},_.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function U(){}U.prototype=_.prototype;function K(E,q,F){this.props=E,this.context=q,this.refs=M,this.updater=F||k}var $=K.prototype=new U;$.constructor=K,A($,_.prototype),$.isPureReactComponent=!0;var B=Array.isArray;function W(){}var X={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function me(E,q,F){var Z=F.ref;return{$$typeof:i,type:E,key:q,ref:Z!==void 0?Z:null,props:F}}function We(E,q){return me(E.type,q,E.props)}function ut(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function De(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return q[F]})}var vt=/\/+/g;function He(E,q){return typeof E=="object"&&E!==null&&E.key!=null?De(""+E.key):q.toString(36)}function Xe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(W,W):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function H(E,q,F,Z,le){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(oe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case i:case e:ye=!0;break;case g:return ye=E._init,H(ye(E._payload),q,F,Z,le)}}if(ye)return le=le(E),ye=Z===""?"."+He(E,0):Z,B(le)?(F="",ye!=null&&(F=ye.replace(vt,"$&/")+"/"),H(le,q,F,"",function(et){return et})):le!=null&&(ut(le)&&(le=We(le,F+(le.key==null||E&&E.key===le.key?"":(""+le.key).replace(vt,"$&/")+"/")+ye)),q.push(le)),1;ye=0;var Ge=Z===""?".":Z+":";if(B(E))for(var Fe=0;Fe<E.length;Fe++)Z=E[Fe],oe=Ge+He(Z,Fe),ye+=H(Z,q,F,oe,le);else if(Fe=S(E),typeof Fe=="function")for(E=Fe.call(E),Fe=0;!(Z=E.next()).done;)Z=Z.value,oe=Ge+He(Z,Fe++),ye+=H(Z,q,F,oe,le);else if(oe==="object"){if(typeof E.then=="function")return H(Xe(E),q,F,Z,le);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(E,q,F){if(E==null)return E;var Z=[],le=0;return H(E,Z,"","",function(oe){return q.call(F,oe,le++)}),Z}function ie(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var I=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},re={map:Q,forEach:function(E,q,F){Q(E,function(){q.apply(this,arguments)},F)},count:function(E){var q=0;return Q(E,function(){q++}),q},toArray:function(E){return Q(E,function(q){return q})||[]},only:function(E){if(!ut(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=b,fe.Children=re,fe.Component=_,fe.Fragment=n,fe.Profiler=l,fe.PureComponent=K,fe.StrictMode=a,fe.Suspense=h,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,q,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=A({},E.props),le=E.key;if(q!=null)for(oe in q.key!==void 0&&(le=""+q.key),q)!te.call(q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&q.ref===void 0||(Z[oe]=q[oe]);var oe=arguments.length-2;if(oe===1)Z.children=F;else if(1<oe){for(var ye=Array(oe),Ge=0;Ge<oe;Ge++)ye[Ge]=arguments[Ge+2];Z.children=ye}return me(E.type,le,Z)},fe.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},fe.createElement=function(E,q,F){var Z,le={},oe=null;if(q!=null)for(Z in q.key!==void 0&&(oe=""+q.key),q)te.call(q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(le[Z]=q[Z]);var ye=arguments.length-2;if(ye===1)le.children=F;else if(1<ye){for(var Ge=Array(ye),Fe=0;Fe<ye;Fe++)Ge[Fe]=arguments[Fe+2];le.children=Ge}if(E&&E.defaultProps)for(Z in ye=E.defaultProps,ye)le[Z]===void 0&&(le[Z]=ye[Z]);return me(E,oe,le)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:f,render:E}},fe.isValidElement=ut,fe.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:ie}},fe.memo=function(E,q){return{$$typeof:p,type:E,compare:q===void 0?null:q}},fe.startTransition=function(E){var q=X.T,F={};X.T=F;try{var Z=E(),le=X.S;le!==null&&le(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(W,I)}catch(oe){I(oe)}finally{q!==null&&F.types!==null&&(q.types=F.types),X.T=q}},fe.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},fe.use=function(E){return X.H.use(E)},fe.useActionState=function(E,q,F){return X.H.useActionState(E,q,F)},fe.useCallback=function(E,q){return X.H.useCallback(E,q)},fe.useContext=function(E){return X.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,q){return X.H.useDeferredValue(E,q)},fe.useEffect=function(E,q){return X.H.useEffect(E,q)},fe.useEffectEvent=function(E){return X.H.useEffectEvent(E)},fe.useId=function(){return X.H.useId()},fe.useImperativeHandle=function(E,q,F){return X.H.useImperativeHandle(E,q,F)},fe.useInsertionEffect=function(E,q){return X.H.useInsertionEffect(E,q)},fe.useLayoutEffect=function(E,q){return X.H.useLayoutEffect(E,q)},fe.useMemo=function(E,q){return X.H.useMemo(E,q)},fe.useOptimistic=function(E,q){return X.H.useOptimistic(E,q)},fe.useReducer=function(E,q,F){return X.H.useReducer(E,q,F)},fe.useRef=function(E){return X.H.useRef(E)},fe.useState=function(E){return X.H.useState(E)},fe.useSyncExternalStore=function(E,q,F){return X.H.useSyncExternalStore(E,q,F)},fe.useTransition=function(){return X.H.useTransition()},fe.version="19.2.7",fe}var $y;function mh(){return $y||($y=1,Xf.exports=K2()),Xf.exports}var j=mh();const yc=G2(j);var Qf={exports:{}},_r={},Ff={exports:{}},Zf={};var Yy;function W2(){return Yy||(Yy=1,(function(i){function e(H,Q){var ie=H.length;H.push(Q);e:for(;0<ie;){var I=ie-1>>>1,re=H[I];if(0<l(re,Q))H[I]=Q,H[ie]=re,ie=I;else break e}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var Q=H[0],ie=H.pop();if(ie!==Q){H[0]=ie;e:for(var I=0,re=H.length,E=re>>>1;I<E;){var q=2*(I+1)-1,F=H[q],Z=q+1,le=H[Z];if(0>l(F,ie))Z<re&&0>l(le,F)?(H[I]=le,H[Z]=ie,I=Z):(H[I]=F,H[q]=ie,I=q);else if(Z<re&&0>l(le,ie))H[I]=le,H[Z]=ie,I=Z;else break e}}return Q}function l(H,Q){var ie=H.sortIndex-Q.sortIndex;return ie!==0?ie:H.id-Q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,b=null,x=3,S=!1,k=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function $(H){for(var Q=n(p);Q!==null;){if(Q.callback===null)a(p);else if(Q.startTime<=H)a(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=n(p)}}function B(H){if(A=!1,$(H),!k)if(n(h)!==null)k=!0,W||(W=!0,De());else{var Q=n(p);Q!==null&&Xe(B,Q.startTime-H)}}var W=!1,X=-1,te=5,me=-1;function We(){return M?!0:!(i.unstable_now()-me<te)}function ut(){if(M=!1,W){var H=i.unstable_now();me=H;var Q=!0;try{e:{k=!1,A&&(A=!1,U(X),X=-1),S=!0;var ie=x;try{t:{for($(H),b=n(h);b!==null&&!(b.expirationTime>H&&We());){var I=b.callback;if(typeof I=="function"){b.callback=null,x=b.priorityLevel;var re=I(b.expirationTime<=H);if(H=i.unstable_now(),typeof re=="function"){b.callback=re,$(H),Q=!0;break t}b===n(h)&&a(h),$(H)}else a(h);b=n(h)}if(b!==null)Q=!0;else{var E=n(p);E!==null&&Xe(B,E.startTime-H),Q=!1}}break e}finally{b=null,x=ie,S=!1}Q=void 0}}finally{Q?De():W=!1}}}var De;if(typeof K=="function")De=function(){K(ut)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,He=vt.port2;vt.port1.onmessage=ut,De=function(){He.postMessage(null)}}else De=function(){_(ut,0)};function Xe(H,Q){X=_(function(){H(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_next=function(H){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var ie=x;x=Q;try{return H()}finally{x=ie}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=x;x=H;try{return Q()}finally{x=ie}},i.unstable_scheduleCallback=function(H,Q,ie){var I=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?I+ie:I):ie=I,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ie+re,H={id:g++,callback:Q,priorityLevel:H,startTime:ie,expirationTime:re,sortIndex:-1},ie>I?(H.sortIndex=ie,e(p,H),n(h)===null&&H===n(p)&&(A?(U(X),X=-1):A=!0,Xe(B,ie-I))):(H.sortIndex=re,e(h,H),k||S||(k=!0,W||(W=!0,De()))),H},i.unstable_shouldYield=We,i.unstable_wrapCallback=function(H){var Q=x;return function(){var ie=x;x=Q;try{return H.apply(this,arguments)}finally{x=ie}}}})(Zf)),Zf}var Ky;function X2(){return Ky||(Ky=1,Ff.exports=W2()),Ff.exports}var Pf={exports:{}},zt={};var Wy;function Q2(){if(Wy)return zt;Wy=1;var i=mh();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,p,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:h,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zt.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(h,p,null,g)},zt.flushSync=function(h){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=g,a.d.f()}},zt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},zt.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},zt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:S}):g==="script"&&a.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},zt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,b=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zt.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},zt.requestFormReset=function(h){a.d.r(h)},zt.unstable_batchedUpdates=function(h,p){return h(p)},zt.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},zt.useFormStatus=function(){return u.H.useHostTransitionStatus()},zt.version="19.2.7",zt}var Xy;function F2(){if(Xy)return Pf.exports;Xy=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Pf.exports=Q2(),Pf.exports}var Qy;function Z2(){if(Qy)return _r;Qy=1;var i=X2(),e=mh(),n=F2();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)s+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var s=t,r=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(r=s.return),t=s.return;while(t)}return s.tag===3?r:null}function u(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function f(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var s=t.alternate;if(!s){if(s=c(t),s===null)throw Error(a(188));return s!==t?null:t}for(var r=t,o=s;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(o=d.return,o!==null){r=o;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return h(d),t;if(m===o)return h(d),s;m=m.sibling}throw Error(a(188))}if(r.return!==o.return)r=d,o=m;else{for(var y=!1,w=d.child;w;){if(w===r){y=!0,r=d,o=m;break}if(w===o){y=!0,o=d,r=m;break}w=w.sibling}if(!y){for(w=m.child;w;){if(w===r){y=!0,r=m,o=d;break}if(w===o){y=!0,o=m,r=d;break}w=w.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),K=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),We=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function De(t){return t===null||typeof t!="object"?null:(t=ut&&t[ut]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Symbol.for("react.client.reference");function He(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===vt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case W:return"SuspenseList";case me:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case K:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case $:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return s=t.displayName||null,s!==null?s:He(t.type)||"Memo";case te:s=t._payload,t=t._init;try{return He(t(s))}catch{}}return null}var Xe=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},I=[],re=-1;function E(t){return{current:t}}function q(t){0>re||(t.current=I[re],I[re]=null,re--)}function F(t,s){re++,I[re]=t.current,t.current=s}var Z=E(null),le=E(null),oe=E(null),ye=E(null);function Ge(t,s){switch(F(oe,s),F(le,t),F(Z,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?cy(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=cy(s),t=uy(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Z),F(Z,t)}function Fe(){q(Z),q(le),q(oe)}function et(t){t.memoizedState!==null&&F(ye,t);var s=Z.current,r=uy(s,t.type);s!==r&&(F(le,t),F(Z,r))}function qn(t){le.current===t&&(q(Z),q(le)),ye.current===t&&(q(ye),Nr._currentValue=ie)}var Vt,ul;function Rn(t){if(Vt===void 0)try{throw Error()}catch(r){var s=r.stack.trim().match(/\n( *(at )?)/);Vt=s&&s[1]||"",ul=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+t+ul}var di=!1;function hi(t,s){if(!t||di)return"";di=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(s){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(L){var z=L}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(L){z=L}t.call(Y.prototype)}}else{try{throw Error()}catch(L){z=L}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(L){if(L&&z&&typeof L.stack=="string")return[L.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),y=m[0],w=m[1];if(y&&w){var T=y.split(`
`),D=w.split(`
`);for(d=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;d<D.length&&!D[d].includes("DetermineComponentFrameRoot");)d++;if(o===T.length||d===D.length)for(o=T.length-1,d=D.length-1;1<=o&&0<=d&&T[o]!==D[d];)d--;for(;1<=o&&0<=d;o--,d--)if(T[o]!==D[d]){if(o!==1||d!==1)do if(o--,d--,0>d||T[o]!==D[d]){var V=`
`+T[o].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=o&&0<=d);break}}}finally{di=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Rn(r):""}function Oe(t,s){switch(t.tag){case 26:case 27:case 5:return Rn(t.type);case 16:return Rn("Lazy");case 13:return t.child!==s&&s!==null?Rn("Suspense Fallback"):Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 15:return hi(t.type,!1);case 11:return hi(t.type.render,!1);case 1:return hi(t.type,!0);case 31:return Rn("Activity");default:return""}}function Va(t){try{var s="",r=null;do s+=Oe(t,r),r=t,t=t.return;while(t);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ji=Object.prototype.hasOwnProperty,Ga=i.unstable_scheduleCallback,$a=i.unstable_cancelCallback,Mc=i.unstable_shouldYield,Cc=i.unstable_requestPaint,_t=i.unstable_now,Oc=i.unstable_getCurrentPriorityLevel,fl=i.unstable_ImmediatePriority,dl=i.unstable_UserBlockingPriority,de=i.unstable_NormalPriority,Me=i.unstable_LowPriority,yt=i.unstable_IdlePriority,Ya=i.log,Ls=i.unstable_setDisableYieldValue,mi=null,Ie=null;function tt(t){if(typeof Ya=="function"&&Ls(t),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(mi,t)}catch{}}var xt=Math.clz32?Math.clz32:Nc,jc=Math.log,hl=Math.LN2;function Nc(t){return t>>>=0,t===0?32:31-(jc(t)/hl|0)|0}var _s=256,ml=262144,pl=4194304;function Ii(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gl(t,s,r){var o=t.pendingLanes;if(o===0)return 0;var d=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~m,o!==0?d=Ii(o):(y&=w,y!==0?d=Ii(y):r||(r=w&~t,r!==0&&(d=Ii(r))))):(w=o&~m,w!==0?d=Ii(w):y!==0?d=Ii(y):r||(r=o&~t,r!==0&&(d=Ii(r)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,r=s&-s,m>=r||m===32&&(r&4194048)!==0)?s:d}function Ka(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function C1(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yh(){var t=pl;return pl<<=1,(pl&62914560)===0&&(pl=4194304),t}function Dc(t){for(var s=[],r=0;31>r;r++)s.push(t);return s}function Wa(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function O1(t,s,r,o,d,m){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,T=t.expirationTimes,D=t.hiddenUpdates;for(r=y&~r;0<r;){var V=31-xt(r),Y=1<<V;w[V]=0,T[V]=-1;var z=D[V];if(z!==null)for(D[V]=null,V=0;V<z.length;V++){var L=z[V];L!==null&&(L.lane&=-536870913)}r&=~Y}o!==0&&Kh(t,o,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~s))}function Kh(t,s,r){t.pendingLanes|=s,t.suspendedLanes&=~s;var o=31-xt(s);t.entangledLanes|=s,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Wh(t,s){var r=t.entangledLanes|=s;for(t=t.entanglements;r;){var o=31-xt(r),d=1<<o;d&s|t[o]&s&&(t[o]|=s),r&=~d}}function Xh(t,s){var r=s&-s;return r=(r&42)!==0?1:zc(r),(r&(t.suspendedLanes|s))!==0?0:r}function zc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Dy(t.type))}function Fh(t,s){var r=Q.p;try{return Q.p=t,s()}finally{Q.p=r}}var pi=Math.random().toString(36).slice(2),Tt="__reactFiber$"+pi,Gt="__reactProps$"+pi,Hs="__reactContainer$"+pi,Lc="__reactEvents$"+pi,j1="__reactListeners$"+pi,N1="__reactHandles$"+pi,Zh="__reactResources$"+pi,Xa="__reactMarker$"+pi;function _c(t){delete t[Tt],delete t[Gt],delete t[Lc],delete t[j1],delete t[N1]}function qs(t){var s=t[Tt];if(s)return s;for(var r=t.parentNode;r;){if(s=r[Hs]||r[Tt]){if(r=s.alternate,s.child!==null||r!==null&&r.child!==null)for(t=yy(t);t!==null;){if(r=t[Tt])return r;t=yy(t)}return s}t=r,r=t.parentNode}return null}function Us(t){if(t=t[Tt]||t[Hs]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function Qa(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function Vs(t){var s=t[Zh];return s||(s=t[Zh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function wt(t){t[Xa]=!0}var Ph=new Set,Jh={};function es(t,s){Gs(t,s),Gs(t+"Capture",s)}function Gs(t,s){for(Jh[t]=s,t=0;t<s.length;t++)Ph.add(s[t])}var D1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ih={},em={};function z1(t){return Ji.call(em,t)?!0:Ji.call(Ih,t)?!1:D1.test(t)?em[t]=!0:(Ih[t]=!0,!1)}function yl(t,s,r){if(z1(s))if(r===null)t.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var o=s.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+r)}}function bl(t,s,r){if(r===null)t.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+r)}}function Un(t,s,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(s,r,""+o)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tm(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function B1(t,s,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return d.call(this)},set:function(y){r=""+y,m.call(this,y)}}),Object.defineProperty(t,s,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Hc(t){if(!t._valueTracker){var s=tm(t)?"checked":"value";t._valueTracker=B1(t,s,""+t[s])}}function nm(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var r=s.getValue(),o="";return t&&(o=tm(t)?t.checked?"true":"false":t.value),t=o,t!==r?(s.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var L1=/[\n"\\]/g;function un(t){return t.replace(L1,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function qc(t,s,r,o,d,m,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),s!=null?y==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+cn(s)):t.value!==""+cn(s)&&(t.value=""+cn(s)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),s!=null?Uc(t,y,cn(s)):r!=null?Uc(t,y,cn(r)):o!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+cn(w):t.removeAttribute("name")}function im(t,s,r,o,d,m,y,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Hc(t);return}r=r!=null?""+cn(r):"",s=s!=null?""+cn(s):r,w||s===t.value||(t.value=s),t.defaultValue=s}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Hc(t)}function Uc(t,s,r){s==="number"&&vl(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function $s(t,s,r,o){if(t=t.options,s){s={};for(var d=0;d<r.length;d++)s["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=s.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&o&&(t[r].defaultSelected=!0)}else{for(r=""+cn(r),s=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}s!==null||t[d].disabled||(s=t[d])}s!==null&&(s.selected=!0)}}function sm(t,s,r){if(s!=null&&(s=""+cn(s),s!==t.value&&(t.value=s),r==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=r!=null?""+cn(r):""}function am(t,s,r,o){if(s==null){if(o!=null){if(r!=null)throw Error(a(92));if(Xe(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),s=r}r=cn(s),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Hc(t)}function Ys(t,s){if(s){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=s;return}}t.textContent=s}var _1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rm(t,s,r){var o=s.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":o?t.setProperty(s,r):typeof r!="number"||r===0||_1.has(s)?s==="float"?t.cssFloat=r:t[s]=(""+r).trim():t[s]=r+"px"}function lm(t,s,r){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||s!=null&&s.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in s)o=s[d],s.hasOwnProperty(d)&&r[d]!==o&&rm(t,d,o)}else for(var m in s)s.hasOwnProperty(m)&&rm(t,m,s[m])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return q1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vn(){}var Gc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Ws=null;function om(t){var s=Us(t);if(s&&(t=s.stateNode)){var r=t[Gt]||null;e:switch(t=s.stateNode,s.type){case"input":if(qc(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),s=r.name,r.type==="radio"&&s!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+un(""+s)+'"][type="radio"]'),s=0;s<r.length;s++){var o=r[s];if(o!==t&&o.form===t.form){var d=o[Gt]||null;if(!d)throw Error(a(90));qc(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<r.length;s++)o=r[s],o.form===t.form&&nm(o)}break e;case"textarea":sm(t,r.value,r.defaultValue);break e;case"select":s=r.value,s!=null&&$s(t,!!r.multiple,s,!1)}}}var Yc=!1;function cm(t,s,r){if(Yc)return t(s,r);Yc=!0;try{var o=t(s);return o}finally{if(Yc=!1,(Ks!==null||Ws!==null)&&(lo(),Ks&&(s=Ks,t=Ws,Ws=Ks=null,om(s),t)))for(s=0;s<t.length;s++)om(t[s])}}function Fa(t,s){var r=t.stateNode;if(r===null)return null;var o=r[Gt]||null;if(o===null)return null;r=o[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,s,typeof r));return r}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Gn)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Kc=!1}var gi=null,Wc=null,wl=null;function um(){if(wl)return wl;var t,s=Wc,r=s.length,o,d="value"in gi?gi.value:gi.textContent,m=d.length;for(t=0;t<r&&s[t]===d[t];t++);var y=r-t;for(o=1;o<=y&&s[r-o]===d[m-o];o++);return wl=d.slice(t,1<o?1-o:void 0)}function Sl(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function fm(){return!1}function $t(t){function s(r,o,d,m,y){this._reactName=r,this._targetInst=d,this.type=o,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?kl:fm,this.isPropagationStopped=fm,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),s}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=$t(ts),Pa=b({},ts,{view:0,detail:0}),U1=$t(Pa),Xc,Qc,Ja,Tl=b({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ja&&(Ja&&t.type==="mousemove"?(Xc=t.screenX-Ja.screenX,Qc=t.screenY-Ja.screenY):Qc=Xc=0,Ja=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),dm=$t(Tl),V1=b({},Tl,{dataTransfer:0}),G1=$t(V1),$1=b({},Pa,{relatedTarget:0}),Fc=$t($1),Y1=b({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=$t(Y1),W1=b({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X1=$t(W1),Q1=b({},ts,{data:0}),hm=$t(Q1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J1(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=P1[t])?!!s[t]:!1}function Zc(){return J1}var I1=b({},Pa,{key:function(t){if(t.key){var s=F1[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=$t(I1),tx=b({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=$t(tx),nx=b({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),ix=$t(nx),sx=b({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=$t(sx),rx=b({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=$t(rx),ox=b({},ts,{newState:0,oldState:0}),cx=$t(ox),ux=[9,13,27,32],Pc=Gn&&"CompositionEvent"in window,Ia=null;Gn&&"documentMode"in document&&(Ia=document.documentMode);var fx=Gn&&"TextEvent"in window&&!Ia,pm=Gn&&(!Pc||Ia&&8<Ia&&11>=Ia),gm=" ",ym=!1;function bm(t,s){switch(t){case"keyup":return ux.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function dx(t,s){switch(t){case"compositionend":return vm(s);case"keypress":return s.which!==32?null:(ym=!0,gm);case"textInput":return t=s.data,t===gm&&ym?null:t;default:return null}}function hx(t,s){if(Xs)return t==="compositionend"||!Pc&&bm(t,s)?(t=um(),wl=Wc=gi=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return pm&&s.locale!=="ko"?null:s.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!mx[t.type]:s==="textarea"}function wm(t,s,r,o){Ks?Ws?Ws.push(o):Ws=[o]:Ks=o,s=po(s,"onChange"),0<s.length&&(r=new Al("onChange","change",null,r,o),t.push({event:r,listeners:s}))}var er=null,tr=null;function px(t){iy(t,0)}function El(t){var s=Qa(t);if(nm(s))return t}function Sm(t,s){if(t==="change")return s}var km=!1;if(Gn){var Jc;if(Gn){var Ic="oninput"in document;if(!Ic){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),Ic=typeof Am.oninput=="function"}Jc=Ic}else Jc=!1;km=Jc&&(!document.documentMode||9<document.documentMode)}function Tm(){er&&(er.detachEvent("onpropertychange",Em),tr=er=null)}function Em(t){if(t.propertyName==="value"&&El(tr)){var s=[];wm(s,tr,t,$c(t)),cm(px,s)}}function gx(t,s,r){t==="focusin"?(Tm(),er=s,tr=r,er.attachEvent("onpropertychange",Em)):t==="focusout"&&Tm()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(tr)}function bx(t,s){if(t==="click")return El(s)}function vx(t,s){if(t==="input"||t==="change")return El(s)}function xx(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Pt=typeof Object.is=="function"?Object.is:xx;function nr(t,s){if(Pt(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var r=Object.keys(t),o=Object.keys(s);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var d=r[o];if(!Ji.call(s,d)||!Pt(t[d],s[d]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,s){var r=Rm(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=s&&o>=s)return{node:r,offset:s-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rm(r)}}function Cm(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?Cm(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=vl(t.document);s instanceof t.HTMLIFrameElement;){try{var r=typeof s.contentWindow.location.href=="string"}catch{r=!1}if(r)t=s.contentWindow;else break;s=vl(t.document)}return s}function eu(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var wx=Gn&&"documentMode"in document&&11>=document.documentMode,Qs=null,tu=null,ir=null,nu=!1;function jm(t,s,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nu||Qs==null||Qs!==vl(o)||(o=Qs,"selectionStart"in o&&eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ir&&nr(ir,o)||(ir=o,o=po(tu,"onSelect"),0<o.length&&(s=new Al("onSelect","select",null,s,r),t.push({event:s,listeners:o}),s.target=Qs)))}function ns(t,s){var r={};return r[t.toLowerCase()]=s.toLowerCase(),r["Webkit"+t]="webkit"+s,r["Moz"+t]="moz"+s,r}var Fs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},iu={},Nm={};Gn&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function is(t){if(iu[t])return iu[t];if(!Fs[t])return t;var s=Fs[t],r;for(r in s)if(s.hasOwnProperty(r)&&r in Nm)return iu[t]=s[r];return t}var Dm=is("animationend"),zm=is("animationiteration"),Bm=is("animationstart"),Sx=is("transitionrun"),kx=is("transitionstart"),Ax=is("transitioncancel"),Lm=is("transitionend"),_m=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function xn(t,s){_m.set(t,s),es(s,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fn=[],Zs=0,au=0;function Ml(){for(var t=Zs,s=au=Zs=0;s<t;){var r=fn[s];fn[s++]=null;var o=fn[s];fn[s++]=null;var d=fn[s];fn[s++]=null;var m=fn[s];if(fn[s++]=null,o!==null&&d!==null){var y=o.pending;y===null?d.next=d:(d.next=y.next,y.next=d),o.pending=d}m!==0&&Hm(r,d,m)}}function Cl(t,s,r,o){fn[Zs++]=t,fn[Zs++]=s,fn[Zs++]=r,fn[Zs++]=o,au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ru(t,s,r,o){return Cl(t,s,r,o),Ol(t)}function ss(t,s){return Cl(t,null,null,s),Ol(t)}function Hm(t,s,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var d=!1,m=t.return;m!==null;)m.childLanes|=r,o=m.alternate,o!==null&&(o.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&s!==null&&(d=31-xt(r),t=m.hiddenUpdates,o=t[d],o===null?t[d]=[s]:o.push(s),s.lane=r|536870912),m):null}function Ol(t){if(50<Tr)throw Tr=0,gf=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var Ps={};function Tx(t,s,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,s,r,o){return new Tx(t,s,r,o)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $n(t,s){var r=t.alternate;return r===null?(r=Jt(t.tag,s,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=s,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,s=t.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function qm(t,s){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,s=r.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function jl(t,s,r,o,d,m){var y=0;if(o=t,typeof t=="function")lu(t)&&(y=1);else if(typeof t=="string")y=O2(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case me:return t=Jt(31,r,s,d),t.elementType=me,t.lanes=m,t;case A:return as(r.children,d,m,s);case M:y=8,d|=24;break;case _:return t=Jt(12,r,s,d|2),t.elementType=_,t.lanes=m,t;case B:return t=Jt(13,r,s,d),t.elementType=B,t.lanes=m,t;case W:return t=Jt(19,r,s,d),t.elementType=W,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:y=10;break e;case U:y=9;break e;case $:y=11;break e;case X:y=14;break e;case te:y=16,o=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return s=Jt(y,r,s,d),s.elementType=t,s.type=o,s.lanes=m,s}function as(t,s,r,o){return t=Jt(7,t,o,s),t.lanes=r,t}function ou(t,s,r){return t=Jt(6,t,null,s),t.lanes=r,t}function Um(t){var s=Jt(18,null,null,0);return s.stateNode=t,s}function cu(t,s,r){return s=Jt(4,t.children!==null?t.children:[],t.key,s),s.lanes=r,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var Vm=new WeakMap;function dn(t,s){if(typeof t=="object"&&t!==null){var r=Vm.get(t);return r!==void 0?r:(s={value:t,source:s,stack:Va(s)},Vm.set(t,s),s)}return{value:t,source:s,stack:Va(s)}}var Js=[],Is=0,Nl=null,sr=0,hn=[],mn=0,yi=null,Mn=1,Cn="";function Yn(t,s){Js[Is++]=sr,Js[Is++]=Nl,Nl=t,sr=s}function Gm(t,s,r){hn[mn++]=Mn,hn[mn++]=Cn,hn[mn++]=yi,yi=t;var o=Mn;t=Cn;var d=32-xt(o)-1;o&=~(1<<d),r+=1;var m=32-xt(s)+d;if(30<m){var y=d-d%5;m=(o&(1<<y)-1).toString(32),o>>=y,d-=y,Mn=1<<32-xt(s)+d|r<<d|o,Cn=m+t}else Mn=1<<m|r<<d|o,Cn=t}function uu(t){t.return!==null&&(Yn(t,1),Gm(t,1,0))}function fu(t){for(;t===Nl;)Nl=Js[--Is],Js[Is]=null,sr=Js[--Is],Js[Is]=null;for(;t===yi;)yi=hn[--mn],hn[mn]=null,Cn=hn[--mn],hn[mn]=null,Mn=hn[--mn],hn[mn]=null}function $m(t,s){hn[mn++]=Mn,hn[mn++]=Cn,hn[mn++]=yi,Mn=s.id,Cn=s.overflow,yi=t}var Et=null,Ze=null,Se=!1,bi=null,pn=!1,du=Error(a(519));function vi(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ar(dn(s,t)),du}function Ym(t){var s=t.stateNode,r=t.type,o=t.memoizedProps;switch(s[Tt]=t,s[Gt]=o,r){case"dialog":ve("cancel",s),ve("close",s);break;case"iframe":case"object":case"embed":ve("load",s);break;case"video":case"audio":for(r=0;r<Rr.length;r++)ve(Rr[r],s);break;case"source":ve("error",s);break;case"img":case"image":case"link":ve("error",s),ve("load",s);break;case"details":ve("toggle",s);break;case"input":ve("invalid",s),im(s,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",s);break;case"textarea":ve("invalid",s),am(s,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||s.textContent===""+r||o.suppressHydrationWarning===!0||ly(s.textContent,r)?(o.popover!=null&&(ve("beforetoggle",s),ve("toggle",s)),o.onScroll!=null&&ve("scroll",s),o.onScrollEnd!=null&&ve("scrollend",s),o.onClick!=null&&(s.onclick=Vn),s=!0):s=!1,s||vi(t,!0)}function Km(t){for(Et=t.return;Et;)switch(Et.tag){case 5:case 31:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:Et=Et.return}}function ea(t){if(t!==Et)return!1;if(!Se)return Km(t),Se=!0,!1;var s=t.tag,r;if((r=s!==3&&s!==27)&&((r=s===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||jf(t.type,t.memoizedProps)),r=!r),r&&Ze&&vi(t),Km(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ze=gy(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ze=gy(t)}else s===27?(s=Ze,Di(t.type)?(t=Lf,Lf=null,Ze=t):Ze=s):Ze=Et?yn(t.stateNode.nextSibling):null;return!0}function rs(){Ze=Et=null,Se=!1}function hu(){var t=bi;return t!==null&&(Xt===null?Xt=t:Xt.push.apply(Xt,t),bi=null),t}function ar(t){bi===null?bi=[t]:bi.push(t)}var mu=E(null),ls=null,Kn=null;function xi(t,s,r){F(mu,s._currentValue),s._currentValue=r}function Wn(t){t._currentValue=mu.current,q(mu)}function pu(t,s,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,o!==null&&(o.childLanes|=s)):o!==null&&(o.childLanes&s)!==s&&(o.childLanes|=s),t===r)break;t=t.return}}function gu(t,s,r,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var T=0;T<s.length;T++)if(w.context===s[T]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),pu(m.return,r,t),o||(y=null);break e}m=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(a(341));y.lanes|=r,m=y.alternate,m!==null&&(m.lanes|=r),pu(y,r,t),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===t){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function ta(t,s,r,o){t=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var w=d.type;Pt(d.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(d===ye.current){if(y=d.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Nr):t=[Nr])}d=d.return}t!==null&&gu(s,t,r,o),s.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function os(t){ls=t,Kn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rt(t){return Wm(ls,t)}function zl(t,s){return ls===null&&os(t),Wm(t,s)}function Wm(t,s){var r=s._currentValue;if(s={context:s,memoizedValue:r,next:null},Kn===null){if(t===null)throw Error(a(308));Kn=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Kn=Kn.next=s;return r}var Ex=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){s.aborted=!0,t.forEach(function(r){return r()})}},Rx=i.unstable_scheduleCallback,Mx=i.unstable_NormalPriority,ft={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new Ex,data:new Map,refCount:0}}function rr(t){t.refCount--,t.refCount===0&&Rx(Mx,function(){t.controller.abort()})}var lr=null,bu=0,na=0,ia=null;function Cx(t,s){if(lr===null){var r=lr=[];bu=0,na=Sf(),ia={status:"pending",value:void 0,then:function(o){r.push(o)}}}return bu++,s.then(Xm,Xm),s}function Xm(){if(--bu===0&&lr!==null){ia!==null&&(ia.status="fulfilled");var t=lr;lr=null,na=0,ia=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function Ox(t,s){var r=[],o={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){o.status="fulfilled",o.value=s;for(var d=0;d<r.length;d++)(0,r[d])(s)},function(d){for(o.status="rejected",o.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),o}var Qm=H.S;H.S=function(t,s){jg=_t(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&Cx(t,s),Qm!==null&&Qm(t,s)};var cs=E(null);function vu(){var t=cs.current;return t!==null?t:$e.pooledCache}function Bl(t,s){s===null?F(cs,cs.current):F(cs,s.pool)}function Fm(){var t=vu();return t===null?null:{parent:ft._currentValue,pool:t}}var sa=Error(a(460)),xu=Error(a(474)),Ll=Error(a(542)),_l={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,s,r){switch(r=t[r],r===void 0?t.push(s):r!==s&&(s.then(Vn,Vn),s=r),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,Im(t),t;default:if(typeof s.status=="string")s.then(Vn,Vn);else{if(t=$e,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(o){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=o}},function(o){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=o}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,Im(t),t}throw fs=s,sa}}function us(t){try{var s=t._init;return s(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(fs=r,sa):r}}var fs=null;function Jm(){if(fs===null)throw Error(a(459));var t=fs;return fs=null,t}function Im(t){if(t===sa||t===Ll)throw Error(a(483))}var aa=null,or=0;function Hl(t){var s=or;return or+=1,aa===null&&(aa=[]),Pm(aa,t,s)}function cr(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function ql(t,s){throw s.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function ep(t){function s(O,R){if(t){var N=O.deletions;N===null?(O.deletions=[R],O.flags|=16):N.push(R)}}function r(O,R){if(!t)return null;for(;R!==null;)s(O,R),R=R.sibling;return null}function o(O){for(var R=new Map;O!==null;)O.key!==null?R.set(O.key,O):R.set(O.index,O),O=O.sibling;return R}function d(O,R){return O=$n(O,R),O.index=0,O.sibling=null,O}function m(O,R,N){return O.index=N,t?(N=O.alternate,N!==null?(N=N.index,N<R?(O.flags|=67108866,R):N):(O.flags|=67108866,R)):(O.flags|=1048576,R)}function y(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function w(O,R,N,G){return R===null||R.tag!==6?(R=ou(N,O.mode,G),R.return=O,R):(R=d(R,N),R.return=O,R)}function T(O,R,N,G){var ae=N.type;return ae===A?V(O,R,N.props.children,G,N.key):R!==null&&(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===te&&us(ae)===R.type)?(R=d(R,N.props),cr(R,N),R.return=O,R):(R=jl(N.type,N.key,N.props,null,O.mode,G),cr(R,N),R.return=O,R)}function D(O,R,N,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==N.containerInfo||R.stateNode.implementation!==N.implementation?(R=cu(N,O.mode,G),R.return=O,R):(R=d(R,N.children||[]),R.return=O,R)}function V(O,R,N,G,ae){return R===null||R.tag!==7?(R=as(N,O.mode,G,ae),R.return=O,R):(R=d(R,N),R.return=O,R)}function Y(O,R,N){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ou(""+R,O.mode,N),R.return=O,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return N=jl(R.type,R.key,R.props,null,O.mode,N),cr(N,R),N.return=O,N;case k:return R=cu(R,O.mode,N),R.return=O,R;case te:return R=us(R),Y(O,R,N)}if(Xe(R)||De(R))return R=as(R,O.mode,N,null),R.return=O,R;if(typeof R.then=="function")return Y(O,Hl(R),N);if(R.$$typeof===K)return Y(O,zl(O,R),N);ql(O,R)}return null}function z(O,R,N,G){var ae=R!==null?R.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ae!==null?null:w(O,R,""+N,G);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case S:return N.key===ae?T(O,R,N,G):null;case k:return N.key===ae?D(O,R,N,G):null;case te:return N=us(N),z(O,R,N,G)}if(Xe(N)||De(N))return ae!==null?null:V(O,R,N,G,null);if(typeof N.then=="function")return z(O,R,Hl(N),G);if(N.$$typeof===K)return z(O,R,zl(O,N),G);ql(O,N)}return null}function L(O,R,N,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return O=O.get(N)||null,w(R,O,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return O=O.get(G.key===null?N:G.key)||null,T(R,O,G,ae);case k:return O=O.get(G.key===null?N:G.key)||null,D(R,O,G,ae);case te:return G=us(G),L(O,R,N,G,ae)}if(Xe(G)||De(G))return O=O.get(N)||null,V(R,O,G,ae,null);if(typeof G.then=="function")return L(O,R,N,Hl(G),ae);if(G.$$typeof===K)return L(O,R,N,zl(R,G),ae);ql(R,G)}return null}function ee(O,R,N,G){for(var ae=null,je=null,ne=R,pe=R=0,we=null;ne!==null&&pe<N.length;pe++){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var Ne=z(O,ne,N[pe],G);if(Ne===null){ne===null&&(ne=we);break}t&&ne&&Ne.alternate===null&&s(O,ne),R=m(Ne,R,pe),je===null?ae=Ne:je.sibling=Ne,je=Ne,ne=we}if(pe===N.length)return r(O,ne),Se&&Yn(O,pe),ae;if(ne===null){for(;pe<N.length;pe++)ne=Y(O,N[pe],G),ne!==null&&(R=m(ne,R,pe),je===null?ae=ne:je.sibling=ne,je=ne);return Se&&Yn(O,pe),ae}for(ne=o(ne);pe<N.length;pe++)we=L(ne,O,pe,N[pe],G),we!==null&&(t&&we.alternate!==null&&ne.delete(we.key===null?pe:we.key),R=m(we,R,pe),je===null?ae=we:je.sibling=we,je=we);return t&&ne.forEach(function(Hi){return s(O,Hi)}),Se&&Yn(O,pe),ae}function ce(O,R,N,G){if(N==null)throw Error(a(151));for(var ae=null,je=null,ne=R,pe=R=0,we=null,Ne=N.next();ne!==null&&!Ne.done;pe++,Ne=N.next()){ne.index>pe?(we=ne,ne=null):we=ne.sibling;var Hi=z(O,ne,Ne.value,G);if(Hi===null){ne===null&&(ne=we);break}t&&ne&&Hi.alternate===null&&s(O,ne),R=m(Hi,R,pe),je===null?ae=Hi:je.sibling=Hi,je=Hi,ne=we}if(Ne.done)return r(O,ne),Se&&Yn(O,pe),ae;if(ne===null){for(;!Ne.done;pe++,Ne=N.next())Ne=Y(O,Ne.value,G),Ne!==null&&(R=m(Ne,R,pe),je===null?ae=Ne:je.sibling=Ne,je=Ne);return Se&&Yn(O,pe),ae}for(ne=o(ne);!Ne.done;pe++,Ne=N.next())Ne=L(ne,O,pe,Ne.value,G),Ne!==null&&(t&&Ne.alternate!==null&&ne.delete(Ne.key===null?pe:Ne.key),R=m(Ne,R,pe),je===null?ae=Ne:je.sibling=Ne,je=Ne);return t&&ne.forEach(function(V2){return s(O,V2)}),Se&&Yn(O,pe),ae}function Ve(O,R,N,G){if(typeof N=="object"&&N!==null&&N.type===A&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case S:e:{for(var ae=N.key;R!==null;){if(R.key===ae){if(ae=N.type,ae===A){if(R.tag===7){r(O,R.sibling),G=d(R,N.props.children),G.return=O,O=G;break e}}else if(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===te&&us(ae)===R.type){r(O,R.sibling),G=d(R,N.props),cr(G,N),G.return=O,O=G;break e}r(O,R);break}else s(O,R);R=R.sibling}N.type===A?(G=as(N.props.children,O.mode,G,N.key),G.return=O,O=G):(G=jl(N.type,N.key,N.props,null,O.mode,G),cr(G,N),G.return=O,O=G)}return y(O);case k:e:{for(ae=N.key;R!==null;){if(R.key===ae)if(R.tag===4&&R.stateNode.containerInfo===N.containerInfo&&R.stateNode.implementation===N.implementation){r(O,R.sibling),G=d(R,N.children||[]),G.return=O,O=G;break e}else{r(O,R);break}else s(O,R);R=R.sibling}G=cu(N,O.mode,G),G.return=O,O=G}return y(O);case te:return N=us(N),Ve(O,R,N,G)}if(Xe(N))return ee(O,R,N,G);if(De(N)){if(ae=De(N),typeof ae!="function")throw Error(a(150));return N=ae.call(N),ce(O,R,N,G)}if(typeof N.then=="function")return Ve(O,R,Hl(N),G);if(N.$$typeof===K)return Ve(O,R,zl(O,N),G);ql(O,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,R!==null&&R.tag===6?(r(O,R.sibling),G=d(R,N),G.return=O,O=G):(r(O,R),G=ou(N,O.mode,G),G.return=O,O=G),y(O)):r(O,R)}return function(O,R,N,G){try{or=0;var ae=Ve(O,R,N,G);return aa=null,ae}catch(ne){if(ne===sa||ne===Ll)throw ne;var je=Jt(29,ne,null,O.mode);return je.lanes=G,je.return=O,je}}}var ds=ep(!0),tp=ep(!1),wi=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Si(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ki(t,s,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var d=o.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),o.pending=s,s=Ol(t),Hm(t,null,r),s}return Cl(t,o,s,r),Ol(t)}function ur(t,s,r){if(s=s.updateQueue,s!==null&&(s=s.shared,(r&4194048)!==0)){var o=s.lanes;o&=t.pendingLanes,r|=o,s.lanes=r,Wh(t,r)}}function ku(t,s){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,r=r.next}while(r!==null);m===null?d=m=s:m=m.next=s}else d=m=s;r={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=s:t.next=s,r.lastBaseUpdate=s}var Au=!1;function fr(){if(Au){var t=ia;if(t!==null)throw t}}function dr(t,s,r,o){Au=!1;var d=t.updateQueue;wi=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var T=w,D=T.next;T.next=null,y===null?m=D:y.next=D,y=T;var V=t.alternate;V!==null&&(V=V.updateQueue,w=V.lastBaseUpdate,w!==y&&(w===null?V.firstBaseUpdate=D:w.next=D,V.lastBaseUpdate=T))}if(m!==null){var Y=d.baseState;y=0,V=D=T=null,w=m;do{var z=w.lane&-536870913,L=z!==w.lane;if(L?(xe&z)===z:(o&z)===z){z!==0&&z===na&&(Au=!0),V!==null&&(V=V.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ee=t,ce=w;z=s;var Ve=r;switch(ce.tag){case 1:if(ee=ce.payload,typeof ee=="function"){Y=ee.call(Ve,Y,z);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ce.payload,z=typeof ee=="function"?ee.call(Ve,Y,z):ee,z==null)break e;Y=b({},Y,z);break e;case 2:wi=!0}}z=w.callback,z!==null&&(t.flags|=64,L&&(t.flags|=8192),L=d.callbacks,L===null?d.callbacks=[z]:L.push(z))}else L={lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},V===null?(D=V=L,T=Y):V=V.next=L,y|=z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);V===null&&(T=Y),d.baseState=T,d.firstBaseUpdate=D,d.lastBaseUpdate=V,m===null&&(d.shared.lanes=0),Mi|=y,t.lanes=y,t.memoizedState=Y}}function np(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function ip(t,s){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)np(r[t],s)}var ra=E(null),Ul=E(0);function sp(t,s){t=ti,F(Ul,t),F(ra,s),ti=t|s.baseLanes}function Tu(){F(Ul,ti),F(ra,ra.current)}function Eu(){ti=Ul.current,q(ra),q(Ul)}var It=E(null),gn=null;function Ai(t){var s=t.alternate;F(rt,rt.current&1),F(It,t),gn===null&&(s===null||ra.current!==null||s.memoizedState!==null)&&(gn=t)}function Ru(t){F(rt,rt.current),F(It,t),gn===null&&(gn=t)}function ap(t){t.tag===22?(F(rt,rt.current),F(It,t),gn===null&&(gn=t)):Ti()}function Ti(){F(rt,rt.current),F(It,It.current)}function en(t){q(It),gn===t&&(gn=null),q(rt)}var rt=E(0);function Vl(t){for(var s=t;s!==null;){if(s.tag===13){var r=s.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||zf(r)||Bf(r)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Xn=0,he=null,qe=null,dt=null,Gl=!1,la=!1,hs=!1,$l=0,hr=0,oa=null,jx=0;function nt(){throw Error(a(321))}function Mu(t,s){if(s===null)return!1;for(var r=0;r<s.length&&r<t.length;r++)if(!Pt(t[r],s[r]))return!1;return!0}function Cu(t,s,r,o,d,m){return Xn=m,he=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,H.H=t===null||t.memoizedState===null?Gp:Yu,hs=!1,m=r(o,d),hs=!1,la&&(m=lp(s,r,o,d)),rp(t),m}function rp(t){H.H=gr;var s=qe!==null&&qe.next!==null;if(Xn=0,dt=qe=he=null,Gl=!1,hr=0,oa=null,s)throw Error(a(300));t===null||ht||(t=t.dependencies,t!==null&&Dl(t)&&(ht=!0))}function lp(t,s,r,o){he=t;var d=0;do{if(la&&(oa=null),hr=0,la=!1,25<=d)throw Error(a(301));if(d+=1,dt=qe=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=$p,m=s(r,o)}while(la);return m}function Nx(){var t=H.H,s=t.useState()[0];return s=typeof s.then=="function"?mr(s):s,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(he.flags|=1024),s}function Ou(){var t=$l!==0;return $l=0,t}function ju(t,s,r){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~r}function Nu(t){if(Gl){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}Gl=!1}Xn=0,dt=qe=he=null,la=!1,hr=$l=0,oa=null}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?he.memoizedState=dt=t:dt=dt.next=t,dt}function lt(){if(qe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var s=dt===null?he.memoizedState:dt.next;if(s!==null)dt=s,qe=t;else{if(t===null)throw he.alternate===null?Error(a(467)):Error(a(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},dt===null?he.memoizedState=dt=t:dt=dt.next=t}return dt}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mr(t){var s=hr;return hr+=1,oa===null&&(oa=[]),t=Pm(oa,t,s),s=he,(dt===null?s.memoizedState:dt.next)===null&&(s=s.alternate,H.H=s===null||s.memoizedState===null?Gp:Yu),t}function Kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mr(t);if(t.$$typeof===K)return Rt(t)}throw Error(a(438,String(t)))}function Du(t){var s=null,r=he.updateQueue;if(r!==null&&(s=r.memoCache),s==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(s={data:o.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),r===null&&(r=Yl(),he.updateQueue=r),r.memoCache=s,r=s.data[s.index],r===void 0)for(r=s.data[s.index]=Array(t),o=0;o<t;o++)r[o]=We;return s.index++,r}function Qn(t,s){return typeof s=="function"?s(t):s}function Wl(t){var s=lt();return zu(s,qe,t)}function zu(t,s,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var d=t.baseQueue,m=o.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}s.baseQueue=d=m,o.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{s=d.next;var w=y=null,T=null,D=s,V=!1;do{var Y=D.lane&-536870913;if(Y!==D.lane?(xe&Y)===Y:(Xn&Y)===Y){var z=D.revertLane;if(z===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Y===na&&(V=!0);else if((Xn&z)===z){D=D.next,z===na&&(V=!0);continue}else Y={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(w=T=Y,y=m):T=T.next=Y,he.lanes|=z,Mi|=z;Y=D.action,hs&&r(m,Y),m=D.hasEagerState?D.eagerState:r(m,Y)}else z={lane:Y,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(w=T=z,y=m):T=T.next=z,he.lanes|=Y,Mi|=Y;D=D.next}while(D!==null&&D!==s);if(T===null?y=m:T.next=w,!Pt(m,t.memoizedState)&&(ht=!0,V&&(r=ia,r!==null)))throw r;t.memoizedState=m,t.baseState=y,t.baseQueue=T,o.lastRenderedState=m}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Bu(t){var s=lt(),r=s.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,d=r.pending,m=s.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do m=t(m,y.action),y=y.next;while(y!==d);Pt(m,s.memoizedState)||(ht=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),r.lastRenderedState=m}return[m,o]}function op(t,s,r){var o=he,d=lt(),m=Se;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=s();var y=!Pt((qe||d).memoizedState,r);if(y&&(d.memoizedState=r,ht=!0),d=d.queue,Hu(fp.bind(null,o,d,t),[t]),d.getSnapshot!==s||y||dt!==null&&dt.memoizedState.tag&1){if(o.flags|=2048,ca(9,{destroy:void 0},up.bind(null,o,d,r,s),null),$e===null)throw Error(a(349));m||(Xn&127)!==0||cp(o,s,r)}return r}function cp(t,s,r){t.flags|=16384,t={getSnapshot:s,value:r},s=he.updateQueue,s===null?(s=Yl(),he.updateQueue=s,s.stores=[t]):(r=s.stores,r===null?s.stores=[t]:r.push(t))}function up(t,s,r,o){s.value=r,s.getSnapshot=o,dp(s)&&hp(t)}function fp(t,s,r){return r(function(){dp(s)&&hp(t)})}function dp(t){var s=t.getSnapshot;t=t.value;try{var r=s();return!Pt(t,r)}catch{return!0}}function hp(t){var s=ss(t,2);s!==null&&Qt(s,t,2)}function Lu(t){var s=Ht();if(typeof t=="function"){var r=t;if(t=r(),hs){tt(!0);try{r()}finally{tt(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:t},s}function mp(t,s,r,o){return t.baseState=r,zu(t,qe,typeof o=="function"?o:Qn)}function Dx(t,s,r,o,d){if(Fl(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};H.T!==null?r(!0):m.isTransition=!1,o(m),r=s.pending,r===null?(m.next=s.pending=m,pp(s,m)):(m.next=r.next,s.pending=r.next=m)}}function pp(t,s){var r=s.action,o=s.payload,d=t.state;if(s.isTransition){var m=H.T,y={};H.T=y;try{var w=r(d,o),T=H.S;T!==null&&T(y,w),gp(t,s,w)}catch(D){_u(t,s,D)}finally{m!==null&&y.types!==null&&(m.types=y.types),H.T=m}}else try{m=r(d,o),gp(t,s,m)}catch(D){_u(t,s,D)}}function gp(t,s,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){yp(t,s,o)},function(o){return _u(t,s,o)}):yp(t,s,r)}function yp(t,s,r){s.status="fulfilled",s.value=r,bp(s),t.state=r,s=t.pending,s!==null&&(r=s.next,r===s?t.pending=null:(r=r.next,s.next=r,pp(t,r)))}function _u(t,s,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do s.status="rejected",s.reason=r,bp(s),s=s.next;while(s!==o)}t.action=null}function bp(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function vp(t,s){return s}function xp(t,s){if(Se){var r=$e.formState;if(r!==null){e:{var o=he;if(Se){if(Ze){t:{for(var d=Ze,m=pn;d.nodeType!==8;){if(!m){d=null;break t}if(d=yn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ze=yn(d.nextSibling),o=d.data==="F!";break e}}vi(o)}o=!1}o&&(s=r[0])}}return r=Ht(),r.memoizedState=r.baseState=s,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:s},r.queue=o,r=qp.bind(null,he,o),o.dispatch=r,o=Lu(!1),m=$u.bind(null,he,!1,o.queue),o=Ht(),d={state:s,dispatch:null,action:t,pending:null},o.queue=d,r=Dx.bind(null,he,d,m,r),d.dispatch=r,o.memoizedState=t,[s,r,!1]}function wp(t){var s=lt();return Sp(s,qe,t)}function Sp(t,s,r){if(s=zu(t,s,vp)[0],t=Wl(Qn)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var o=mr(s)}catch(y){throw y===sa?Ll:y}else o=s;s=lt();var d=s.queue,m=d.dispatch;return r!==s.memoizedState&&(he.flags|=2048,ca(9,{destroy:void 0},zx.bind(null,d,r),null)),[o,m,t]}function zx(t,s){t.action=s}function kp(t){var s=lt(),r=qe;if(r!==null)return Sp(s,r,t);lt(),s=s.memoizedState,r=lt();var o=r.queue.dispatch;return r.memoizedState=t,[s,o,!1]}function ca(t,s,r,o){return t={tag:t,create:r,deps:o,inst:s,next:null},s=he.updateQueue,s===null&&(s=Yl(),he.updateQueue=s),r=s.lastEffect,r===null?s.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,s.lastEffect=t),t}function Ap(){return lt().memoizedState}function Xl(t,s,r,o){var d=Ht();he.flags|=t,d.memoizedState=ca(1|s,{destroy:void 0},r,o===void 0?null:o)}function Ql(t,s,r,o){var d=lt();o=o===void 0?null:o;var m=d.memoizedState.inst;qe!==null&&o!==null&&Mu(o,qe.memoizedState.deps)?d.memoizedState=ca(s,m,r,o):(he.flags|=t,d.memoizedState=ca(1|s,m,r,o))}function Tp(t,s){Xl(8390656,8,t,s)}function Hu(t,s){Ql(2048,8,t,s)}function Bx(t){he.flags|=4;var s=he.updateQueue;if(s===null)s=Yl(),he.updateQueue=s,s.events=[t];else{var r=s.events;r===null?s.events=[t]:r.push(t)}}function Ep(t){var s=lt().memoizedState;return Bx({ref:s,nextImpl:t}),function(){if((ze&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function Rp(t,s){return Ql(4,2,t,s)}function Mp(t,s){return Ql(4,4,t,s)}function Cp(t,s){if(typeof s=="function"){t=t();var r=s(t);return function(){typeof r=="function"?r():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Op(t,s,r){r=r!=null?r.concat([t]):null,Ql(4,4,Cp.bind(null,s,t),r)}function qu(){}function jp(t,s){var r=lt();s=s===void 0?null:s;var o=r.memoizedState;return s!==null&&Mu(s,o[1])?o[0]:(r.memoizedState=[t,s],t)}function Np(t,s){var r=lt();s=s===void 0?null:s;var o=r.memoizedState;if(s!==null&&Mu(s,o[1]))return o[0];if(o=t(),hs){tt(!0);try{t()}finally{tt(!1)}}return r.memoizedState=[o,s],o}function Uu(t,s,r){return r===void 0||(Xn&1073741824)!==0&&(xe&261930)===0?t.memoizedState=s:(t.memoizedState=r,t=Dg(),he.lanes|=t,Mi|=t,r)}function Dp(t,s,r,o){return Pt(r,s)?r:ra.current!==null?(t=Uu(t,r,o),Pt(t,s)||(ht=!0),t):(Xn&42)===0||(Xn&1073741824)!==0&&(xe&261930)===0?(ht=!0,t.memoizedState=r):(t=Dg(),he.lanes|=t,Mi|=t,s)}function zp(t,s,r,o,d){var m=Q.p;Q.p=m!==0&&8>m?m:8;var y=H.T,w={};H.T=w,$u(t,!1,s,r);try{var T=d(),D=H.S;if(D!==null&&D(w,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=Ox(T,o);pr(t,s,V,sn(t))}else pr(t,s,o,sn(t))}catch(Y){pr(t,s,{then:function(){},status:"rejected",reason:Y},sn())}finally{Q.p=m,y!==null&&w.types!==null&&(y.types=w.types),H.T=y}}function Lx(){}function Vu(t,s,r,o){if(t.tag!==5)throw Error(a(476));var d=Bp(t).queue;zp(t,d,s,ie,r===null?Lx:function(){return Lp(t),r(o)})}function Bp(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:ie},next:null};var r={};return s.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:r},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function Lp(t){var s=Bp(t);s.next===null&&(s=t.alternate.memoizedState),pr(t,s.next.queue,{},sn())}function Gu(){return Rt(Nr)}function _p(){return lt().memoizedState}function Hp(){return lt().memoizedState}function _x(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var r=sn();t=Si(r);var o=ki(s,t,r);o!==null&&(Qt(o,s,r),ur(o,s,r)),s={cache:yu()},t.payload=s;return}s=s.return}}function Hx(t,s,r){var o=sn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Up(s,r):(r=ru(t,s,r,o),r!==null&&(Qt(r,t,o),Vp(r,s,o)))}function qp(t,s,r){var o=sn();pr(t,s,r,o)}function pr(t,s,r,o){var d={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Up(s,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var y=s.lastRenderedState,w=m(y,r);if(d.hasEagerState=!0,d.eagerState=w,Pt(w,y))return Cl(t,s,d,0),$e===null&&Ml(),!1}catch{}if(r=ru(t,s,d,o),r!==null)return Qt(r,t,o),Vp(r,s,o),!0}return!1}function $u(t,s,r,o){if(o={lane:2,revertLane:Sf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(s)throw Error(a(479))}else s=ru(t,r,o,2),s!==null&&Qt(s,t,2)}function Fl(t){var s=t.alternate;return t===he||s!==null&&s===he}function Up(t,s){la=Gl=!0;var r=t.pending;r===null?s.next=s:(s.next=r.next,r.next=s),t.pending=s}function Vp(t,s,r){if((r&4194048)!==0){var o=s.lanes;o&=t.pendingLanes,r|=o,s.lanes=r,Wh(t,r)}}var gr={readContext:Rt,use:Kl,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};gr.useEffectEvent=nt;var Gp={readContext:Rt,use:Kl,useCallback:function(t,s){return Ht().memoizedState=[t,s===void 0?null:s],t},useContext:Rt,useEffect:Tp,useImperativeHandle:function(t,s,r){r=r!=null?r.concat([t]):null,Xl(4194308,4,Cp.bind(null,s,t),r)},useLayoutEffect:function(t,s){return Xl(4194308,4,t,s)},useInsertionEffect:function(t,s){Xl(4,2,t,s)},useMemo:function(t,s){var r=Ht();s=s===void 0?null:s;var o=t();if(hs){tt(!0);try{t()}finally{tt(!1)}}return r.memoizedState=[o,s],o},useReducer:function(t,s,r){var o=Ht();if(r!==void 0){var d=r(s);if(hs){tt(!0);try{r(s)}finally{tt(!1)}}}else d=s;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=Hx.bind(null,he,t),[o.memoizedState,t]},useRef:function(t){var s=Ht();return t={current:t},s.memoizedState=t},useState:function(t){t=Lu(t);var s=t.queue,r=qp.bind(null,he,s);return s.dispatch=r,[t.memoizedState,r]},useDebugValue:qu,useDeferredValue:function(t,s){var r=Ht();return Uu(r,t,s)},useTransition:function(){var t=Lu(!1);return t=zp.bind(null,he,t.queue,!0,!1),Ht().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,r){var o=he,d=Ht();if(Se){if(r===void 0)throw Error(a(407));r=r()}else{if(r=s(),$e===null)throw Error(a(349));(xe&127)!==0||cp(o,s,r)}d.memoizedState=r;var m={value:r,getSnapshot:s};return d.queue=m,Tp(fp.bind(null,o,m,t),[t]),o.flags|=2048,ca(9,{destroy:void 0},up.bind(null,o,m,r,s),null),r},useId:function(){var t=Ht(),s=$e.identifierPrefix;if(Se){var r=Cn,o=Mn;r=(o&~(1<<32-xt(o)-1)).toString(32)+r,s="_"+s+"R_"+r,r=$l++,0<r&&(s+="H"+r.toString(32)),s+="_"}else r=jx++,s="_"+s+"r_"+r.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Gu,useFormState:xp,useActionState:xp,useOptimistic:function(t){var s=Ht();s.memoizedState=s.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=r,s=$u.bind(null,he,!0,r),r.dispatch=s,[t,s]},useMemoCache:Du,useCacheRefresh:function(){return Ht().memoizedState=_x.bind(null,he)},useEffectEvent:function(t){var s=Ht(),r={impl:t};return s.memoizedState=r,function(){if((ze&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Yu={readContext:Rt,use:Kl,useCallback:jp,useContext:Rt,useEffect:Hu,useImperativeHandle:Op,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Np,useReducer:Wl,useRef:Ap,useState:function(){return Wl(Qn)},useDebugValue:qu,useDeferredValue:function(t,s){var r=lt();return Dp(r,qe.memoizedState,t,s)},useTransition:function(){var t=Wl(Qn)[0],s=lt().memoizedState;return[typeof t=="boolean"?t:mr(t),s]},useSyncExternalStore:op,useId:_p,useHostTransitionStatus:Gu,useFormState:wp,useActionState:wp,useOptimistic:function(t,s){var r=lt();return mp(r,qe,t,s)},useMemoCache:Du,useCacheRefresh:Hp};Yu.useEffectEvent=Ep;var $p={readContext:Rt,use:Kl,useCallback:jp,useContext:Rt,useEffect:Hu,useImperativeHandle:Op,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Np,useReducer:Bu,useRef:Ap,useState:function(){return Bu(Qn)},useDebugValue:qu,useDeferredValue:function(t,s){var r=lt();return qe===null?Uu(r,t,s):Dp(r,qe.memoizedState,t,s)},useTransition:function(){var t=Bu(Qn)[0],s=lt().memoizedState;return[typeof t=="boolean"?t:mr(t),s]},useSyncExternalStore:op,useId:_p,useHostTransitionStatus:Gu,useFormState:kp,useActionState:kp,useOptimistic:function(t,s){var r=lt();return qe!==null?mp(r,qe,t,s):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Du,useCacheRefresh:Hp};$p.useEffectEvent=Ep;function Ku(t,s,r,o){s=t.memoizedState,r=r(o,s),r=r==null?s:b({},s,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Wu={enqueueSetState:function(t,s,r){t=t._reactInternals;var o=sn(),d=Si(o);d.payload=s,r!=null&&(d.callback=r),s=ki(t,d,o),s!==null&&(Qt(s,t,o),ur(s,t,o))},enqueueReplaceState:function(t,s,r){t=t._reactInternals;var o=sn(),d=Si(o);d.tag=1,d.payload=s,r!=null&&(d.callback=r),s=ki(t,d,o),s!==null&&(Qt(s,t,o),ur(s,t,o))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var r=sn(),o=Si(r);o.tag=2,s!=null&&(o.callback=s),s=ki(t,o,r),s!==null&&(Qt(s,t,r),ur(s,t,r))}};function Yp(t,s,r,o,d,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,y):s.prototype&&s.prototype.isPureReactComponent?!nr(r,o)||!nr(d,m):!0}function Kp(t,s,r,o){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(r,o),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(r,o),s.state!==t&&Wu.enqueueReplaceState(s,s.state,null)}function ms(t,s){var r=s;if("ref"in s){r={};for(var o in s)o!=="ref"&&(r[o]=s[o])}if(t=t.defaultProps){r===s&&(r=b({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Wp(t){Rl(t)}function Xp(t){console.error(t)}function Qp(t){Rl(t)}function Zl(t,s){try{var r=t.onUncaughtError;r(s.value,{componentStack:s.stack})}catch(o){setTimeout(function(){throw o})}}function Fp(t,s,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Xu(t,s,r){return r=Si(r),r.tag=3,r.payload={element:null},r.callback=function(){Zl(t,s)},r}function Zp(t){return t=Si(t),t.tag=3,t}function Pp(t,s,r,o){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;t.payload=function(){return d(m)},t.callback=function(){Fp(s,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Fp(s,r,o),typeof d!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function qx(t,s,r,o,d){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(s=r.alternate,s!==null&&ta(s,r,d,!0),r=It.current,r!==null){switch(r.tag){case 31:case 13:return gn===null?oo():r.alternate===null&&it===0&&(it=3),r.flags&=-257,r.flags|=65536,r.lanes=d,o===_l?r.flags|=16384:(s=r.updateQueue,s===null?r.updateQueue=new Set([o]):s.add(o),vf(t,o,d)),!1;case 22:return r.flags|=65536,o===_l?r.flags|=16384:(s=r.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=s):(r=s.retryQueue,r===null?s.retryQueue=new Set([o]):r.add(o)),vf(t,o,d)),!1}throw Error(a(435,r.tag))}return vf(t,o,d),oo(),!1}if(Se)return s=It.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,o!==du&&(t=Error(a(422),{cause:o}),ar(dn(t,r)))):(o!==du&&(s=Error(a(423),{cause:o}),ar(dn(s,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=dn(o,r),d=Xu(t.stateNode,o,d),ku(t,d),it!==4&&(it=2)),!1;var m=Error(a(520),{cause:o});if(m=dn(m,r),Ar===null?Ar=[m]:Ar.push(m),it!==4&&(it=2),s===null)return!0;o=dn(o,r),r=s;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=Xu(r.stateNode,o,t),ku(r,t),!1;case 1:if(s=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ci===null||!Ci.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Zp(d),Pp(d,t,r,o),ku(r,d),!1}r=r.return}while(r!==null);return!1}var Qu=Error(a(461)),ht=!1;function Mt(t,s,r,o){s.child=t===null?tp(s,null,r,o):ds(s,t.child,r,o)}function Jp(t,s,r,o,d){r=r.render;var m=s.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return os(s),o=Cu(t,s,r,y,m,d),w=Ou(),t!==null&&!ht?(ju(t,s,d),Fn(t,s,d)):(Se&&w&&uu(s),s.flags|=1,Mt(t,s,o,d),s.child)}function Ip(t,s,r,o,d){if(t===null){var m=r.type;return typeof m=="function"&&!lu(m)&&m.defaultProps===void 0&&r.compare===null?(s.tag=15,s.type=m,eg(t,s,m,o,d)):(t=jl(r.type,null,o,s,s.mode,d),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!nf(t,d)){var y=m.memoizedProps;if(r=r.compare,r=r!==null?r:nr,r(y,o)&&t.ref===s.ref)return Fn(t,s,d)}return s.flags|=1,t=$n(m,o),t.ref=s.ref,t.return=s,s.child=t}function eg(t,s,r,o,d){if(t!==null){var m=t.memoizedProps;if(nr(m,o)&&t.ref===s.ref)if(ht=!1,s.pendingProps=o=m,nf(t,d))(t.flags&131072)!==0&&(ht=!0);else return s.lanes=t.lanes,Fn(t,s,d)}return Fu(t,s,r,o,d)}function tg(t,s,r,o){var d=o.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,t!==null){for(o=s.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~m}else o=0,s.child=null;return ng(t,s,m,r,o)}if((r&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(s,m!==null?m.cachePool:null),m!==null?sp(s,m):Tu(),ap(s);else return o=s.lanes=536870912,ng(t,s,m!==null?m.baseLanes|r:r,r,o)}else m!==null?(Bl(s,m.cachePool),sp(s,m),Ti(),s.memoizedState=null):(t!==null&&Bl(s,null),Tu(),Ti());return Mt(t,s,d,r),s.child}function yr(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function ng(t,s,r,o,d){var m=vu();return m=m===null?null:{parent:ft._currentValue,pool:m},s.memoizedState={baseLanes:r,cachePool:m},t!==null&&Bl(s,null),Tu(),ap(s),t!==null&&ta(t,s,o,!0),s.childLanes=d,null}function Pl(t,s){return s=Il({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function ig(t,s,r){return ds(s,t.child,null,r),t=Pl(s,s.pendingProps),t.flags|=2,en(s),s.memoizedState=null,t}function Ux(t,s,r){var o=s.pendingProps,d=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Se){if(o.mode==="hidden")return t=Pl(s,o),s.lanes=536870912,yr(null,t);if(Ru(s),(t=Ze)?(t=py(t,pn),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:yi!==null?{id:Mn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},r=Um(t),r.return=s,s.child=r,Et=s,Ze=null)):t=null,t===null)throw vi(s);return s.lanes=536870912,null}return Pl(s,o)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Ru(s),d)if(s.flags&256)s.flags&=-257,s=ig(t,s,r);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(ht||ta(t,s,r,!1),d=(r&t.childLanes)!==0,ht||d){if(o=$e,o!==null&&(y=Xh(o,r),y!==0&&y!==m.retryLane))throw m.retryLane=y,ss(t,y),Qt(o,t,y),Qu;oo(),s=ig(t,s,r)}else t=m.treeContext,Ze=yn(y.nextSibling),Et=s,Se=!0,bi=null,pn=!1,t!==null&&$m(s,t),s=Pl(s,o),s.flags|=4096;return s}return t=$n(t.child,{mode:o.mode,children:o.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Jl(t,s){var r=s.ref;if(r===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(s.flags|=4194816)}}function Fu(t,s,r,o,d){return os(s),r=Cu(t,s,r,o,void 0,d),o=Ou(),t!==null&&!ht?(ju(t,s,d),Fn(t,s,d)):(Se&&o&&uu(s),s.flags|=1,Mt(t,s,r,d),s.child)}function sg(t,s,r,o,d,m){return os(s),s.updateQueue=null,r=lp(s,o,r,d),rp(t),o=Ou(),t!==null&&!ht?(ju(t,s,m),Fn(t,s,m)):(Se&&o&&uu(s),s.flags|=1,Mt(t,s,r,m),s.child)}function ag(t,s,r,o,d){if(os(s),s.stateNode===null){var m=Ps,y=r.contextType;typeof y=="object"&&y!==null&&(m=Rt(y)),m=new r(o,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wu,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=o,m.state=s.memoizedState,m.refs={},wu(s),y=r.contextType,m.context=typeof y=="object"&&y!==null?Rt(y):Ps,m.state=s.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Ku(s,r,y,o),m.state=s.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Wu.enqueueReplaceState(m,m.state,null),dr(s,o,m,d),fr(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),o=!0}else if(t===null){m=s.stateNode;var w=s.memoizedProps,T=ms(r,w);m.props=T;var D=m.context,V=r.contextType;y=Ps,typeof V=="object"&&V!==null&&(y=Rt(V));var Y=r.getDerivedStateFromProps;V=typeof Y=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,V||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||D!==y)&&Kp(s,m,o,y),wi=!1;var z=s.memoizedState;m.state=z,dr(s,o,m,d),fr(),D=s.memoizedState,w||z!==D||wi?(typeof Y=="function"&&(Ku(s,r,Y,o),D=s.memoizedState),(T=wi||Yp(s,r,T,o,z,D,y))?(V||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=o,s.memoizedState=D),m.props=o,m.state=D,m.context=y,o=T):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),o=!1)}else{m=s.stateNode,Su(t,s),y=s.memoizedProps,V=ms(r,y),m.props=V,Y=s.pendingProps,z=m.context,D=r.contextType,T=Ps,typeof D=="object"&&D!==null&&(T=Rt(D)),w=r.getDerivedStateFromProps,(D=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Y||z!==T)&&Kp(s,m,o,T),wi=!1,z=s.memoizedState,m.state=z,dr(s,o,m,d),fr();var L=s.memoizedState;y!==Y||z!==L||wi||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof w=="function"&&(Ku(s,r,w,o),L=s.memoizedState),(V=wi||Yp(s,r,V,o,z,L,T)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(D||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,L,T),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,L,T)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(s.flags|=1024),s.memoizedProps=o,s.memoizedState=L),m.props=o,m.state=L,m.context=T,o=V):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(s.flags|=1024),o=!1)}return m=o,Jl(t,s),o=(s.flags&128)!==0,m||o?(m=s.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&o?(s.child=ds(s,t.child,null,d),s.child=ds(s,null,r,d)):Mt(t,s,r,d),s.memoizedState=m.state,t=s.child):t=Fn(t,s,d),t}function rg(t,s,r,o){return rs(),s.flags|=256,Mt(t,s,r,o),s.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pu(t){return{baseLanes:t,cachePool:Fm()}}function Ju(t,s,r){return t=t!==null?t.childLanes&~r:0,s&&(t|=nn),t}function lg(t,s,r){var o=s.pendingProps,d=!1,m=(s.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(rt.current&2)!==0),y&&(d=!0,s.flags&=-129),y=(s.flags&32)!==0,s.flags&=-33,t===null){if(Se){if(d?Ai(s):Ti(),(t=Ze)?(t=py(t,pn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:yi!==null?{id:Mn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},r=Um(t),r.return=s,s.child=r,Et=s,Ze=null)):t=null,t===null)throw vi(s);return Bf(t)?s.lanes=32:s.lanes=536870912,null}var w=o.children;return o=o.fallback,d?(Ti(),d=s.mode,w=Il({mode:"hidden",children:w},d),o=as(o,d,r,null),w.return=s,o.return=s,w.sibling=o,s.child=w,o=s.child,o.memoizedState=Pu(r),o.childLanes=Ju(t,y,r),s.memoizedState=Zu,yr(null,o)):(Ai(s),Iu(s,w))}var T=t.memoizedState;if(T!==null&&(w=T.dehydrated,w!==null)){if(m)s.flags&256?(Ai(s),s.flags&=-257,s=ef(t,s,r)):s.memoizedState!==null?(Ti(),s.child=t.child,s.flags|=128,s=null):(Ti(),w=o.fallback,d=s.mode,o=Il({mode:"visible",children:o.children},d),w=as(w,d,r,null),w.flags|=2,o.return=s,w.return=s,o.sibling=w,s.child=o,ds(s,t.child,null,r),o=s.child,o.memoizedState=Pu(r),o.childLanes=Ju(t,y,r),s.memoizedState=Zu,s=yr(null,o));else if(Ai(s),Bf(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var D=y.dgst;y=D,o=Error(a(419)),o.stack="",o.digest=y,ar({value:o,source:null,stack:null}),s=ef(t,s,r)}else if(ht||ta(t,s,r,!1),y=(r&t.childLanes)!==0,ht||y){if(y=$e,y!==null&&(o=Xh(y,r),o!==0&&o!==T.retryLane))throw T.retryLane=o,ss(t,o),Qt(y,t,o),Qu;zf(w)||oo(),s=ef(t,s,r)}else zf(w)?(s.flags|=192,s.child=t.child,s=null):(t=T.treeContext,Ze=yn(w.nextSibling),Et=s,Se=!0,bi=null,pn=!1,t!==null&&$m(s,t),s=Iu(s,o.children),s.flags|=4096);return s}return d?(Ti(),w=o.fallback,d=s.mode,T=t.child,D=T.sibling,o=$n(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,D!==null?w=$n(D,w):(w=as(w,d,r,null),w.flags|=2),w.return=s,o.return=s,o.sibling=w,s.child=o,yr(null,o),o=s.child,w=t.child.memoizedState,w===null?w=Pu(r):(d=w.cachePool,d!==null?(T=ft._currentValue,d=d.parent!==T?{parent:T,pool:T}:d):d=Fm(),w={baseLanes:w.baseLanes|r,cachePool:d}),o.memoizedState=w,o.childLanes=Ju(t,y,r),s.memoizedState=Zu,yr(t.child,o)):(Ai(s),r=t.child,t=r.sibling,r=$n(r,{mode:"visible",children:o.children}),r.return=s,r.sibling=null,t!==null&&(y=s.deletions,y===null?(s.deletions=[t],s.flags|=16):y.push(t)),s.child=r,s.memoizedState=null,r)}function Iu(t,s){return s=Il({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Il(t,s){return t=Jt(22,t,null,s),t.lanes=0,t}function ef(t,s,r){return ds(s,t.child,null,r),t=Iu(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function og(t,s,r){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s),pu(t.return,s,r)}function tf(t,s,r,o,d,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:d,treeForkCount:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=d,y.treeForkCount=m)}function cg(t,s,r){var o=s.pendingProps,d=o.revealOrder,m=o.tail;o=o.children;var y=rt.current,w=(y&2)!==0;if(w?(y=y&1|2,s.flags|=128):y&=1,F(rt,y),Mt(t,s,o,r),o=Se?sr:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,r,s);else if(t.tag===19)og(t,r,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=s.child,d=null;r!==null;)t=r.alternate,t!==null&&Vl(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=s.child,s.child=null):(d=r.sibling,r.sibling=null),tf(s,!1,d,r,m,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=s.child,s.child=null;d!==null;){if(t=d.alternate,t!==null&&Vl(t)===null){s.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}tf(s,!0,r,null,m,o);break;case"together":tf(s,!1,null,null,void 0,o);break;default:s.memoizedState=null}return s.child}function Fn(t,s,r){if(t!==null&&(s.dependencies=t.dependencies),Mi|=s.lanes,(r&s.childLanes)===0)if(t!==null){if(ta(t,s,r,!1),(r&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,r=$n(t,t.pendingProps),s.child=r,r.return=s;t.sibling!==null;)t=t.sibling,r=r.sibling=$n(t,t.pendingProps),r.return=s;r.sibling=null}return s.child}function nf(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function Vx(t,s,r){switch(s.tag){case 3:Ge(s,s.stateNode.containerInfo),xi(s,ft,t.memoizedState.cache),rs();break;case 27:case 5:et(s);break;case 4:Ge(s,s.stateNode.containerInfo);break;case 10:xi(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Ru(s),null;break;case 13:var o=s.memoizedState;if(o!==null)return o.dehydrated!==null?(Ai(s),s.flags|=128,null):(r&s.child.childLanes)!==0?lg(t,s,r):(Ai(s),t=Fn(t,s,r),t!==null?t.sibling:null);Ai(s);break;case 19:var d=(t.flags&128)!==0;if(o=(r&s.childLanes)!==0,o||(ta(t,s,r,!1),o=(r&s.childLanes)!==0),d){if(o)return cg(t,s,r);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),F(rt,rt.current),o)break;return null;case 22:return s.lanes=0,tg(t,s,r,s.pendingProps);case 24:xi(s,ft,t.memoizedState.cache)}return Fn(t,s,r)}function ug(t,s,r){if(t!==null)if(t.memoizedProps!==s.pendingProps)ht=!0;else{if(!nf(t,r)&&(s.flags&128)===0)return ht=!1,Vx(t,s,r);ht=(t.flags&131072)!==0}else ht=!1,Se&&(s.flags&1048576)!==0&&Gm(s,sr,s.index);switch(s.lanes=0,s.tag){case 16:e:{var o=s.pendingProps;if(t=us(s.elementType),s.type=t,typeof t=="function")lu(t)?(o=ms(t,o),s.tag=1,s=ag(null,s,t,o,r)):(s.tag=0,s=Fu(null,s,t,o,r));else{if(t!=null){var d=t.$$typeof;if(d===$){s.tag=11,s=Jp(null,s,t,o,r);break e}else if(d===X){s.tag=14,s=Ip(null,s,t,o,r);break e}}throw s=He(t)||t,Error(a(306,s,""))}}return s;case 0:return Fu(t,s,s.type,s.pendingProps,r);case 1:return o=s.type,d=ms(o,s.pendingProps),ag(t,s,o,d,r);case 3:e:{if(Ge(s,s.stateNode.containerInfo),t===null)throw Error(a(387));o=s.pendingProps;var m=s.memoizedState;d=m.element,Su(t,s),dr(s,o,null,r);var y=s.memoizedState;if(o=y.cache,xi(s,ft,o),o!==m.cache&&gu(s,[ft],r,!0),fr(),o=y.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:y.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=rg(t,s,o,r);break e}else if(o!==d){d=dn(Error(a(424)),s),ar(d),s=rg(t,s,o,r);break e}else for(t=s.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=yn(t.firstChild),Et=s,Se=!0,bi=null,pn=!0,r=tp(s,null,o,r),s.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(rs(),o===d){s=Fn(t,s,r);break e}Mt(t,s,o,r)}s=s.child}return s;case 26:return Jl(t,s),t===null?(r=wy(s.type,null,s.pendingProps,null))?s.memoizedState=r:Se||(r=s.type,t=s.pendingProps,o=go(oe.current).createElement(r),o[Tt]=s,o[Gt]=t,Ct(o,r,t),wt(o),s.stateNode=o):s.memoizedState=wy(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return et(s),t===null&&Se&&(o=s.stateNode=by(s.type,s.pendingProps,oe.current),Et=s,pn=!0,d=Ze,Di(s.type)?(Lf=d,Ze=yn(o.firstChild)):Ze=d),Mt(t,s,s.pendingProps.children,r),Jl(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Se&&((d=o=Ze)&&(o=y2(o,s.type,s.pendingProps,pn),o!==null?(s.stateNode=o,Et=s,Ze=yn(o.firstChild),pn=!1,d=!0):d=!1),d||vi(s)),et(s),d=s.type,m=s.pendingProps,y=t!==null?t.memoizedProps:null,o=m.children,jf(d,m)?o=null:y!==null&&jf(d,y)&&(s.flags|=32),s.memoizedState!==null&&(d=Cu(t,s,Nx,null,null,r),Nr._currentValue=d),Jl(t,s),Mt(t,s,o,r),s.child;case 6:return t===null&&Se&&((t=r=Ze)&&(r=b2(r,s.pendingProps,pn),r!==null?(s.stateNode=r,Et=s,Ze=null,t=!0):t=!1),t||vi(s)),null;case 13:return lg(t,s,r);case 4:return Ge(s,s.stateNode.containerInfo),o=s.pendingProps,t===null?s.child=ds(s,null,o,r):Mt(t,s,o,r),s.child;case 11:return Jp(t,s,s.type,s.pendingProps,r);case 7:return Mt(t,s,s.pendingProps,r),s.child;case 8:return Mt(t,s,s.pendingProps.children,r),s.child;case 12:return Mt(t,s,s.pendingProps.children,r),s.child;case 10:return o=s.pendingProps,xi(s,s.type,o.value),Mt(t,s,o.children,r),s.child;case 9:return d=s.type._context,o=s.pendingProps.children,os(s),d=Rt(d),o=o(d),s.flags|=1,Mt(t,s,o,r),s.child;case 14:return Ip(t,s,s.type,s.pendingProps,r);case 15:return eg(t,s,s.type,s.pendingProps,r);case 19:return cg(t,s,r);case 31:return Ux(t,s,r);case 22:return tg(t,s,r,s.pendingProps);case 24:return os(s),o=Rt(ft),t===null?(d=vu(),d===null&&(d=$e,m=yu(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),s.memoizedState={parent:o,cache:d},wu(s),xi(s,ft,d)):((t.lanes&r)!==0&&(Su(t,s),dr(s,null,null,r),fr()),d=t.memoizedState,m=s.memoizedState,d.parent!==o?(d={parent:o,cache:o},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),xi(s,ft,o)):(o=m.cache,xi(s,ft,o),o!==d.cache&&gu(s,[ft],r,!0))),Mt(t,s,s.pendingProps.children,r),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Zn(t){t.flags|=4}function sf(t,s,r,o,d){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(_g())t.flags|=8192;else throw fs=_l,xu}else t.flags&=-16777217}function fg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ey(s))if(_g())t.flags|=8192;else throw fs=_l,xu}function eo(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?Yh():536870912,t.lanes|=s,ha|=s)}function br(t,s){if(!Se)switch(t.tailMode){case"hidden":s=t.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Pe(t){var s=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(s)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=r,s}function Gx(t,s,r){var o=s.pendingProps;switch(fu(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(s),null;case 1:return Pe(s),null;case 3:return r=s.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Wn(ft),Fe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ea(s)?Zn(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hu())),Pe(s),null;case 26:var d=s.type,m=s.memoizedState;return t===null?(Zn(s),m!==null?(Pe(s),fg(s,m)):(Pe(s),sf(s,d,null,o,r))):m?m!==t.memoizedState?(Zn(s),Pe(s),fg(s,m)):(Pe(s),s.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zn(s),Pe(s),sf(s,d,t,o,r)),null;case 27:if(qn(s),r=oe.current,d=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==o&&Zn(s);else{if(!o){if(s.stateNode===null)throw Error(a(166));return Pe(s),null}t=Z.current,ea(s)?Ym(s):(t=by(d,o,r),s.stateNode=t,Zn(s))}return Pe(s),null;case 5:if(qn(s),d=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==o&&Zn(s);else{if(!o){if(s.stateNode===null)throw Error(a(166));return Pe(s),null}if(m=Z.current,ea(s))Ym(s);else{var y=go(oe.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?m.multiple=!0:o.size&&(m.size=o.size);break;default:m=typeof o.is=="string"?y.createElement(d,{is:o.is}):y.createElement(d)}}m[Tt]=s,m[Gt]=o;e:for(y=s.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break e;for(;y.sibling===null;){if(y.return===null||y.return===s)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}s.stateNode=m;e:switch(Ct(m,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zn(s)}}return Pe(s),sf(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,r),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==o&&Zn(s);else{if(typeof o!="string"&&s.stateNode===null)throw Error(a(166));if(t=oe.current,ea(s)){if(t=s.stateNode,r=s.memoizedProps,o=null,d=Et,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[Tt]=s,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||ly(t.nodeValue,r)),t||vi(s,!0)}else t=go(t).createTextNode(o),t[Tt]=s,s.stateNode=t}return Pe(s),null;case 31:if(r=s.memoizedState,t===null||t.memoizedState!==null){if(o=ea(s),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Tt]=s}else rs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pe(s),t=!1}else r=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return s.flags&256?(en(s),s):(en(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Pe(s),null;case 13:if(o=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=ea(s),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[Tt]=s}else rs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pe(s),d=!1}else d=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(en(s),s):(en(s),null)}return en(s),(s.flags&128)!==0?(s.lanes=r,s):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=s.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),m=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==d&&(o.flags|=2048)),r!==t&&r&&(s.child.flags|=8192),eo(s,s.updateQueue),Pe(s),null);case 4:return Fe(),t===null&&Ef(s.stateNode.containerInfo),Pe(s),null;case 10:return Wn(s.type),Pe(s),null;case 19:if(q(rt),o=s.memoizedState,o===null)return Pe(s),null;if(d=(s.flags&128)!==0,m=o.rendering,m===null)if(d)br(o,!1);else{if(it!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=Vl(t),m!==null){for(s.flags|=128,br(o,!1),t=m.updateQueue,s.updateQueue=t,eo(s,t),s.subtreeFlags=0,t=r,r=s.child;r!==null;)qm(r,t),r=r.sibling;return F(rt,rt.current&1|2),Se&&Yn(s,o.treeForkCount),s.child}t=t.sibling}o.tail!==null&&_t()>ao&&(s.flags|=128,d=!0,br(o,!1),s.lanes=4194304)}else{if(!d)if(t=Vl(m),t!==null){if(s.flags|=128,d=!0,t=t.updateQueue,s.updateQueue=t,eo(s,t),br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!m.alternate&&!Se)return Pe(s),null}else 2*_t()-o.renderingStartTime>ao&&r!==536870912&&(s.flags|=128,d=!0,br(o,!1),s.lanes=4194304);o.isBackwards?(m.sibling=s.child,s.child=m):(t=o.last,t!==null?t.sibling=m:s.child=m,o.last=m)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_t(),t.sibling=null,r=rt.current,F(rt,d?r&1|2:r&1),Se&&Yn(s,o.treeForkCount),t):(Pe(s),null);case 22:case 23:return en(s),Eu(),o=s.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(s.flags|=8192):o&&(s.flags|=8192),o?(r&536870912)!==0&&(s.flags&128)===0&&(Pe(s),s.subtreeFlags&6&&(s.flags|=8192)):Pe(s),r=s.updateQueue,r!==null&&eo(s,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),o!==r&&(s.flags|=2048),t!==null&&q(cs),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Wn(ft),Pe(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function $x(t,s){switch(fu(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Wn(ft),Fe(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return qn(s),null;case 31:if(s.memoizedState!==null){if(en(s),s.alternate===null)throw Error(a(340));rs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(en(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));rs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return q(rt),null;case 4:return Fe(),null;case 10:return Wn(s.type),null;case 22:case 23:return en(s),Eu(),t!==null&&q(cs),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Wn(ft),null;case 25:return null;default:return null}}function dg(t,s){switch(fu(s),s.tag){case 3:Wn(ft),Fe();break;case 26:case 27:case 5:qn(s);break;case 4:Fe();break;case 31:s.memoizedState!==null&&en(s);break;case 13:en(s);break;case 19:q(rt);break;case 10:Wn(s.type);break;case 22:case 23:en(s),Eu(),t!==null&&q(cs);break;case 24:Wn(ft)}}function vr(t,s){try{var r=s.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var d=o.next;r=d;do{if((r.tag&t)===t){o=void 0;var m=r.create,y=r.inst;o=m(),y.destroy=o}r=r.next}while(r!==d)}}catch(w){_e(s,s.return,w)}}function Ei(t,s,r){try{var o=s.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var m=d.next;o=m;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=s;var T=r,D=w;try{D()}catch(V){_e(d,T,V)}}}o=o.next}while(o!==m)}}catch(V){_e(s,s.return,V)}}function hg(t){var s=t.updateQueue;if(s!==null){var r=t.stateNode;try{ip(s,r)}catch(o){_e(t,t.return,o)}}}function mg(t,s,r){r.props=ms(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){_e(t,s,o)}}function xr(t,s){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(d){_e(t,s,d)}}function On(t,s){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(d){_e(t,s,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){_e(t,s,d)}else r.current=null}function pg(t){var s=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(d){_e(t,t.return,d)}}function af(t,s,r){try{var o=t.stateNode;f2(o,t.type,r,s),o[Gt]=s}catch(d){_e(t,t.return,d)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Di(t.type)||t.tag===4}function rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Di(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,s,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,s?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,s):(s=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,s.appendChild(t),r=r._reactRootContainer,r!=null||s.onclick!==null||(s.onclick=Vn));else if(o!==4&&(o===27&&Di(t.type)&&(r=t.stateNode,s=null),t=t.child,t!==null))for(lf(t,s,r),t=t.sibling;t!==null;)lf(t,s,r),t=t.sibling}function to(t,s,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,s?r.insertBefore(t,s):r.appendChild(t);else if(o!==4&&(o===27&&Di(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(to(t,s,r),t=t.sibling;t!==null;)to(t,s,r),t=t.sibling}function yg(t){var s=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Ct(s,o,r),s[Tt]=t,s[Gt]=r}catch(m){_e(t,t.return,m)}}var Pn=!1,mt=!1,of=!1,bg=typeof WeakSet=="function"?WeakSet:Set,St=null;function Yx(t,s){if(t=t.containerInfo,Cf=ko,t=Om(t),eu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var d=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var y=0,w=-1,T=-1,D=0,V=0,Y=t,z=null;t:for(;;){for(var L;Y!==r||d!==0&&Y.nodeType!==3||(w=y+d),Y!==m||o!==0&&Y.nodeType!==3||(T=y+o),Y.nodeType===3&&(y+=Y.nodeValue.length),(L=Y.firstChild)!==null;)z=Y,Y=L;for(;;){if(Y===t)break t;if(z===r&&++D===d&&(w=y),z===m&&++V===o&&(T=y),(L=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=L}r=w===-1||T===-1?null:{start:w,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Of={focusedElem:t,selectionRange:r},ko=!1,St=s;St!==null;)if(s=St,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,St=t;else for(;St!==null;){switch(s=St,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=s,d=m.memoizedProps,m=m.memoizedState,o=r.stateNode;try{var ee=ms(r.type,d);t=o.getSnapshotBeforeUpdate(ee,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(ce){_e(r,r.return,ce)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,r=t.nodeType,r===9)Df(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,St=t;break}St=s.return}}function vg(t,s,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:In(t,r),o&4&&vr(5,r);break;case 1:if(In(t,r),o&4)if(t=r.stateNode,s===null)try{t.componentDidMount()}catch(y){_e(r,r.return,y)}else{var d=ms(r.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(d,s,t.__reactInternalSnapshotBeforeUpdate)}catch(y){_e(r,r.return,y)}}o&64&&hg(r),o&512&&xr(r,r.return);break;case 3:if(In(t,r),o&64&&(t=r.updateQueue,t!==null)){if(s=null,r.child!==null)switch(r.child.tag){case 27:case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}try{ip(t,s)}catch(y){_e(r,r.return,y)}}break;case 27:s===null&&o&4&&yg(r);case 26:case 5:In(t,r),s===null&&o&4&&pg(r),o&512&&xr(r,r.return);break;case 12:In(t,r);break;case 31:In(t,r),o&4&&Sg(t,r);break;case 13:In(t,r),o&4&&kg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Ix.bind(null,r),v2(t,r))));break;case 22:if(o=r.memoizedState!==null||Pn,!o){s=s!==null&&s.memoizedState!==null||mt,d=Pn;var m=mt;Pn=o,(mt=s)&&!m?ei(t,r,(r.subtreeFlags&8772)!==0):In(t,r),Pn=d,mt=m}break;case 30:break;default:In(t,r)}}function xg(t){var s=t.alternate;s!==null&&(t.alternate=null,xg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&_c(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Yt=!1;function Jn(t,s,r){for(r=r.child;r!==null;)wg(t,s,r),r=r.sibling}function wg(t,s,r){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(mi,r)}catch{}switch(r.tag){case 26:mt||On(r,s),Jn(t,s,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mt||On(r,s);var o=Je,d=Yt;Di(r.type)&&(Je=r.stateNode,Yt=!1),Jn(t,s,r),Cr(r.stateNode),Je=o,Yt=d;break;case 5:mt||On(r,s);case 6:if(o=Je,d=Yt,Je=null,Jn(t,s,r),Je=o,Yt=d,Je!==null)if(Yt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(m){_e(r,s,m)}else try{Je.removeChild(r.stateNode)}catch(m){_e(r,s,m)}break;case 18:Je!==null&&(Yt?(t=Je,hy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),wa(t)):hy(Je,r.stateNode));break;case 4:o=Je,d=Yt,Je=r.stateNode.containerInfo,Yt=!0,Jn(t,s,r),Je=o,Yt=d;break;case 0:case 11:case 14:case 15:Ei(2,r,s),mt||Ei(4,r,s),Jn(t,s,r);break;case 1:mt||(On(r,s),o=r.stateNode,typeof o.componentWillUnmount=="function"&&mg(r,s,o)),Jn(t,s,r);break;case 21:Jn(t,s,r);break;case 22:mt=(o=mt)||r.memoizedState!==null,Jn(t,s,r),mt=o;break;default:Jn(t,s,r)}}function Sg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{wa(t)}catch(r){_e(s,s.return,r)}}}function kg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wa(t)}catch(r){_e(s,s.return,r)}}function Kx(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new bg),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new bg),s;default:throw Error(a(435,t.tag))}}function no(t,s){var r=Kx(t);s.forEach(function(o){if(!r.has(o)){r.add(o);var d=e2.bind(null,t,o);o.then(d,d)}})}function Kt(t,s){var r=s.deletions;if(r!==null)for(var o=0;o<r.length;o++){var d=r[o],m=t,y=s,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Di(w.type)){Je=w.stateNode,Yt=!1;break e}break;case 5:Je=w.stateNode,Yt=!1;break e;case 3:case 4:Je=w.stateNode.containerInfo,Yt=!0;break e}w=w.return}if(Je===null)throw Error(a(160));wg(m,y,d),Je=null,Yt=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ag(s,t),s=s.sibling}var wn=null;function Ag(t,s){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(s,t),Wt(t),o&4&&(Ei(3,t,t.return),vr(3,t),Ei(5,t,t.return));break;case 1:Kt(s,t),Wt(t),o&512&&(mt||r===null||On(r,r.return)),o&64&&Pn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var d=wn;if(Kt(s,t),Wt(t),o&512&&(mt||r===null||On(r,r.return)),o&4){var m=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Xa]||m[Tt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(o),d.head.insertBefore(m,d.querySelector("head > title"))),Ct(m,o,r),m[Tt]=t,wt(m),o=m;break e;case"link":var y=Ay("link","href",d).get(o+(r.href||""));if(y){for(var w=0;w<y.length;w++)if(m=y[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(w,1);break t}}m=d.createElement(o),Ct(m,o,r),d.head.appendChild(m);break;case"meta":if(y=Ay("meta","content",d).get(o+(r.content||""))){for(w=0;w<y.length;w++)if(m=y[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(w,1);break t}}m=d.createElement(o),Ct(m,o,r),d.head.appendChild(m);break;default:throw Error(a(468,o))}m[Tt]=t,wt(m),o=m}t.stateNode=o}else Ty(d,t.type,t.stateNode);else t.stateNode=ky(d,o,t.memoizedProps);else m!==o?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,o===null?Ty(d,t.type,t.stateNode):ky(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&af(t,t.memoizedProps,r.memoizedProps)}break;case 27:Kt(s,t),Wt(t),o&512&&(mt||r===null||On(r,r.return)),r!==null&&o&4&&af(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Kt(s,t),Wt(t),o&512&&(mt||r===null||On(r,r.return)),t.flags&32){d=t.stateNode;try{Ys(d,"")}catch(ee){_e(t,t.return,ee)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,af(t,d,r!==null?r.memoizedProps:d)),o&1024&&(of=!0);break;case 6:if(Kt(s,t),Wt(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ee){_e(t,t.return,ee)}}break;case 3:if(vo=null,d=wn,wn=yo(s.containerInfo),Kt(s,t),wn=d,Wt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{wa(s.containerInfo)}catch(ee){_e(t,t.return,ee)}of&&(of=!1,Tg(t));break;case 4:o=wn,wn=yo(t.stateNode.containerInfo),Kt(s,t),Wt(t),wn=o;break;case 12:Kt(s,t),Wt(t);break;case 31:Kt(s,t),Wt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 13:Kt(s,t),Wt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(so=_t()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 22:d=t.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,D=Pn,V=mt;if(Pn=D||d,mt=V||T,Kt(s,t),mt=V,Pn=D,Wt(t),o&8192)e:for(s=t.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(r===null||T||Pn||mt||ps(t)),r=null,s=t;;){if(s.tag===5||s.tag===26){if(r===null){T=r=s;try{if(m=T.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=T.stateNode;var Y=T.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ee){_e(T,T.return,ee)}}}else if(s.tag===6){if(r===null){T=s;try{T.stateNode.nodeValue=d?"":T.memoizedProps}catch(ee){_e(T,T.return,ee)}}}else if(s.tag===18){if(r===null){T=s;try{var L=T.stateNode;d?my(L,!0):my(T.stateNode,!1)}catch(ee){_e(T,T.return,ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;r===s&&(r=null),s=s.return}r===s&&(r=null),s.sibling.return=s.return,s=s.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,no(t,r))));break;case 19:Kt(s,t),Wt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,no(t,o)));break;case 30:break;case 21:break;default:Kt(s,t),Wt(t)}}function Wt(t){var s=t.flags;if(s&2){try{for(var r,o=t.return;o!==null;){if(gg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var d=r.stateNode,m=rf(t);to(t,m,d);break;case 5:var y=r.stateNode;r.flags&32&&(Ys(y,""),r.flags&=-33);var w=rf(t);to(t,w,y);break;case 3:case 4:var T=r.stateNode.containerInfo,D=rf(t);lf(t,D,T);break;default:throw Error(a(161))}}catch(V){_e(t,t.return,V)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;Tg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function In(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)vg(t,s.alternate,s),s=s.sibling}function ps(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Ei(4,s,s.return),ps(s);break;case 1:On(s,s.return);var r=s.stateNode;typeof r.componentWillUnmount=="function"&&mg(s,s.return,r),ps(s);break;case 27:Cr(s.stateNode);case 26:case 5:On(s,s.return),ps(s);break;case 22:s.memoizedState===null&&ps(s);break;case 30:ps(s);break;default:ps(s)}t=t.sibling}}function ei(t,s,r){for(r=r&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var o=s.alternate,d=t,m=s,y=m.flags;switch(m.tag){case 0:case 11:case 15:ei(d,m,r),vr(4,m);break;case 1:if(ei(d,m,r),o=m,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(D){_e(o,o.return,D)}if(o=m,d=o.updateQueue,d!==null){var w=o.stateNode;try{var T=d.shared.hiddenCallbacks;if(T!==null)for(d.shared.hiddenCallbacks=null,d=0;d<T.length;d++)np(T[d],w)}catch(D){_e(o,o.return,D)}}r&&y&64&&hg(m),xr(m,m.return);break;case 27:yg(m);case 26:case 5:ei(d,m,r),r&&o===null&&y&4&&pg(m),xr(m,m.return);break;case 12:ei(d,m,r);break;case 31:ei(d,m,r),r&&y&4&&Sg(d,m);break;case 13:ei(d,m,r),r&&y&4&&kg(d,m);break;case 22:m.memoizedState===null&&ei(d,m,r),xr(m,m.return);break;case 30:break;default:ei(d,m,r)}s=s.sibling}}function cf(t,s){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&rr(r))}function uf(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&rr(t))}function Sn(t,s,r,o){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Eg(t,s,r,o),s=s.sibling}function Eg(t,s,r,o){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Sn(t,s,r,o),d&2048&&vr(9,s);break;case 1:Sn(t,s,r,o);break;case 3:Sn(t,s,r,o),d&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&rr(t)));break;case 12:if(d&2048){Sn(t,s,r,o),t=s.stateNode;try{var m=s.memoizedProps,y=m.id,w=m.onPostCommit;typeof w=="function"&&w(y,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){_e(s,s.return,T)}}else Sn(t,s,r,o);break;case 31:Sn(t,s,r,o);break;case 13:Sn(t,s,r,o);break;case 23:break;case 22:m=s.stateNode,y=s.alternate,s.memoizedState!==null?m._visibility&2?Sn(t,s,r,o):wr(t,s):m._visibility&2?Sn(t,s,r,o):(m._visibility|=2,ua(t,s,r,o,(s.subtreeFlags&10256)!==0||!1)),d&2048&&cf(y,s);break;case 24:Sn(t,s,r,o),d&2048&&uf(s.alternate,s);break;default:Sn(t,s,r,o)}}function ua(t,s,r,o,d){for(d=d&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,y=s,w=r,T=o,D=y.flags;switch(y.tag){case 0:case 11:case 15:ua(m,y,w,T,d),vr(8,y);break;case 23:break;case 22:var V=y.stateNode;y.memoizedState!==null?V._visibility&2?ua(m,y,w,T,d):wr(m,y):(V._visibility|=2,ua(m,y,w,T,d)),d&&D&2048&&cf(y.alternate,y);break;case 24:ua(m,y,w,T,d),d&&D&2048&&uf(y.alternate,y);break;default:ua(m,y,w,T,d)}s=s.sibling}}function wr(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var r=t,o=s,d=o.flags;switch(o.tag){case 22:wr(r,o),d&2048&&cf(o.alternate,o);break;case 24:wr(r,o),d&2048&&uf(o.alternate,o);break;default:wr(r,o)}s=s.sibling}}var Sr=8192;function fa(t,s,r){if(t.subtreeFlags&Sr)for(t=t.child;t!==null;)Rg(t,s,r),t=t.sibling}function Rg(t,s,r){switch(t.tag){case 26:fa(t,s,r),t.flags&Sr&&t.memoizedState!==null&&j2(r,wn,t.memoizedState,t.memoizedProps);break;case 5:fa(t,s,r);break;case 3:case 4:var o=wn;wn=yo(t.stateNode.containerInfo),fa(t,s,r),wn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Sr,Sr=16777216,fa(t,s,r),Sr=o):fa(t,s,r));break;default:fa(t,s,r)}}function Mg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function kr(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var r=0;r<s.length;r++){var o=s[r];St=o,Og(o,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 0:case 11:case 15:kr(t),t.flags&2048&&Ei(9,t,t.return);break;case 3:kr(t);break;case 12:kr(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,io(t)):kr(t);break;default:kr(t)}}function io(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var r=0;r<s.length;r++){var o=s[r];St=o,Og(o,t)}Mg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Ei(8,s,s.return),io(s);break;case 22:r=s.stateNode,r._visibility&2&&(r._visibility&=-3,io(s));break;default:io(s)}t=t.sibling}}function Og(t,s){for(;St!==null;){var r=St;switch(r.tag){case 0:case 11:case 15:Ei(8,r,s);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:rr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,St=o;else e:for(r=t;St!==null;){o=St;var d=o.sibling,m=o.return;if(xg(o),o===r){St=null;break e}if(d!==null){d.return=m,St=d;break e}St=m}}}var Wx={getCacheForType:function(t){var s=Rt(ft),r=s.data.get(t);return r===void 0&&(r=t(),s.data.set(t,r)),r},cacheSignal:function(){return Rt(ft).controller.signal}},Xx=typeof WeakMap=="function"?WeakMap:Map,ze=0,$e=null,be=null,xe=0,Le=0,tn=null,Ri=!1,da=!1,ff=!1,ti=0,it=0,Mi=0,gs=0,df=0,nn=0,ha=0,Ar=null,Xt=null,hf=!1,so=0,jg=0,ao=1/0,ro=null,Ci=null,bt=0,Oi=null,ma=null,ni=0,mf=0,pf=null,Ng=null,Tr=0,gf=null;function sn(){return(ze&2)!==0&&xe!==0?xe&-xe:H.T!==null?Sf():Qh()}function Dg(){if(nn===0)if((xe&536870912)===0||Se){var t=ml;ml<<=1,(ml&3932160)===0&&(ml=262144),nn=t}else nn=536870912;return t=It.current,t!==null&&(t.flags|=32),nn}function Qt(t,s,r){(t===$e&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(pa(t,0),ji(t,xe,nn,!1)),Wa(t,r),((ze&2)===0||t!==$e)&&(t===$e&&((ze&2)===0&&(gs|=r),it===4&&ji(t,xe,nn,!1)),jn(t))}function zg(t,s,r){if((ze&6)!==0)throw Error(a(327));var o=!r&&(s&127)===0&&(s&t.expiredLanes)===0||Ka(t,s),d=o?Zx(t,s):bf(t,s,!0),m=o;do{if(d===0){da&&!o&&ji(t,s,0,!1);break}else{if(r=t.current.alternate,m&&!Qx(r)){d=bf(t,s,!1),m=!1;continue}if(d===2){if(m=s,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){s=y;e:{var w=t;d=Ar;var T=w.current.memoizedState.isDehydrated;if(T&&(pa(w,y).flags|=256),y=bf(w,y,!1),y!==2){if(ff&&!T){w.errorRecoveryDisabledLanes|=m,gs|=m,d=4;break e}m=Xt,Xt=d,m!==null&&(Xt===null?Xt=m:Xt.push.apply(Xt,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){pa(t,0),ji(t,s,0,!0);break}e:{switch(o=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:ji(o,s,nn,!Ri);break e;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(d=so+300-_t(),10<d)){if(ji(o,s,nn,!Ri),gl(o,0,!0)!==0)break e;ni=s,o.timeoutHandle=fy(Bg.bind(null,o,r,Xt,ro,hf,s,nn,gs,ha,Ri,m,"Throttled",-0,0),d);break e}Bg(o,r,Xt,ro,hf,s,nn,gs,ha,Ri,m,null,-0,0)}}break}while(!0);jn(t)}function Bg(t,s,r,o,d,m,y,w,T,D,V,Y,z,L){if(t.timeoutHandle=-1,Y=s.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vn},Rg(s,m,Y);var ee=(m&62914560)===m?so-_t():(m&4194048)===m?jg-_t():0;if(ee=N2(Y,ee),ee!==null){ni=m,t.cancelPendingCommit=ee($g.bind(null,t,s,m,r,o,d,y,w,T,V,Y,null,z,L)),ji(t,m,y,!D);return}}$g(t,s,m,r,o,d,y,w,T)}function Qx(t){for(var s=t;;){var r=s.tag;if((r===0||r===11||r===15)&&s.flags&16384&&(r=s.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var d=r[o],m=d.getSnapshot;d=d.value;try{if(!Pt(m(),d))return!1}catch{return!1}}if(r=s.child,s.subtreeFlags&16384&&r!==null)r.return=s,s=r;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ji(t,s,r,o){s&=~df,s&=~gs,t.suspendedLanes|=s,t.pingedLanes&=~s,o&&(t.warmLanes|=s),o=t.expirationTimes;for(var d=s;0<d;){var m=31-xt(d),y=1<<m;o[m]=-1,d&=~y}r!==0&&Kh(t,r,s)}function lo(){return(ze&6)===0?(Er(0),!1):!0}function yf(){if(be!==null){if(Le===0)var t=be.return;else t=be,Kn=ls=null,Nu(t),aa=null,or=0,t=be;for(;t!==null;)dg(t.alternate,t),t=t.return;be=null}}function pa(t,s){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,m2(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ni=0,yf(),$e=t,be=r=$n(t.current,null),xe=s,Le=0,tn=null,Ri=!1,da=Ka(t,s),ff=!1,ha=nn=df=gs=Mi=it=0,Xt=Ar=null,hf=!1,(s&8)!==0&&(s|=s&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=s;0<o;){var d=31-xt(o),m=1<<d;s|=t[d],o&=~m}return ti=s,Ml(),r}function Lg(t,s){he=null,H.H=gr,s===sa||s===Ll?(s=Jm(),Le=3):s===xu?(s=Jm(),Le=4):Le=s===Qu?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,tn=s,be===null&&(it=1,Zl(t,dn(s,t.current)))}function _g(){var t=It.current;return t===null?!0:(xe&4194048)===xe?gn===null:(xe&62914560)===xe||(xe&536870912)!==0?t===gn:!1}function Hg(){var t=H.H;return H.H=gr,t===null?gr:t}function qg(){var t=H.A;return H.A=Wx,t}function oo(){it=4,Ri||(xe&4194048)!==xe&&It.current!==null||(da=!0),(Mi&134217727)===0&&(gs&134217727)===0||$e===null||ji($e,xe,nn,!1)}function bf(t,s,r){var o=ze;ze|=2;var d=Hg(),m=qg();($e!==t||xe!==s)&&(ro=null,pa(t,s)),s=!1;var y=it;e:do try{if(Le!==0&&be!==null){var w=be,T=tn;switch(Le){case 8:yf(),y=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(s=!0);var D=Le;if(Le=0,tn=null,ga(t,w,T,D),r&&da){y=0;break e}break;default:D=Le,Le=0,tn=null,ga(t,w,T,D)}}Fx(),y=it;break}catch(V){Lg(t,V)}while(!0);return s&&t.shellSuspendCounter++,Kn=ls=null,ze=o,H.H=d,H.A=m,be===null&&($e=null,xe=0,Ml()),y}function Fx(){for(;be!==null;)Ug(be)}function Zx(t,s){var r=ze;ze|=2;var o=Hg(),d=qg();$e!==t||xe!==s?(ro=null,ao=_t()+500,pa(t,s)):da=Ka(t,s);e:do try{if(Le!==0&&be!==null){s=be;var m=tn;t:switch(Le){case 1:Le=0,tn=null,ga(t,s,m,1);break;case 2:case 9:if(Zm(m)){Le=0,tn=null,Vg(s);break}s=function(){Le!==2&&Le!==9||$e!==t||(Le=7),jn(t)},m.then(s,s);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Zm(m)?(Le=0,tn=null,Vg(s)):(Le=0,tn=null,ga(t,s,m,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var w=be;if(y?Ey(y):w.stateNode.complete){Le=0,tn=null;var T=w.sibling;if(T!==null)be=T;else{var D=w.return;D!==null?(be=D,co(D)):be=null}break t}}Le=0,tn=null,ga(t,s,m,5);break;case 6:Le=0,tn=null,ga(t,s,m,6);break;case 8:yf(),it=6;break e;default:throw Error(a(462))}}Px();break}catch(V){Lg(t,V)}while(!0);return Kn=ls=null,H.H=o,H.A=d,ze=r,be!==null?0:($e=null,xe=0,Ml(),it)}function Px(){for(;be!==null&&!Mc();)Ug(be)}function Ug(t){var s=ug(t.alternate,t,ti);t.memoizedProps=t.pendingProps,s===null?co(t):be=s}function Vg(t){var s=t,r=s.alternate;switch(s.tag){case 15:case 0:s=sg(r,s,s.pendingProps,s.type,void 0,xe);break;case 11:s=sg(r,s,s.pendingProps,s.type.render,s.ref,xe);break;case 5:Nu(s);default:dg(r,s),s=be=qm(s,ti),s=ug(r,s,ti)}t.memoizedProps=t.pendingProps,s===null?co(t):be=s}function ga(t,s,r,o){Kn=ls=null,Nu(s),aa=null,or=0;var d=s.return;try{if(qx(t,d,s,r,xe)){it=1,Zl(t,dn(r,t.current)),be=null;return}}catch(m){if(d!==null)throw be=d,m;it=1,Zl(t,dn(r,t.current)),be=null;return}s.flags&32768?(Se||o===1?t=!0:da||(xe&536870912)!==0?t=!1:(Ri=t=!0,(o===2||o===9||o===3||o===6)&&(o=It.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gg(s,t)):co(s)}function co(t){var s=t;do{if((s.flags&32768)!==0){Gg(s,Ri);return}t=s.return;var r=Gx(s.alternate,s,ti);if(r!==null){be=r;return}if(s=s.sibling,s!==null){be=s;return}be=s=t}while(s!==null);it===0&&(it=5)}function Gg(t,s){do{var r=$x(t.alternate,t);if(r!==null){r.flags&=32767,be=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!s&&(t=t.sibling,t!==null)){be=t;return}be=t=r}while(t!==null);it=6,be=null}function $g(t,s,r,o,d,m,y,w,T){t.cancelPendingCommit=null;do uo();while(bt!==0);if((ze&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=au,O1(t,r,m,y,w,T),t===$e&&(be=$e=null,xe=0),ma=s,Oi=t,ni=r,mf=m,pf=d,Ng=o,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,t2(de,function(){return Qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,d=Q.p,Q.p=2,y=ze,ze|=4;try{Yx(t,s,r)}finally{ze=y,Q.p=d,H.T=o}}bt=1,Yg(),Kg(),Wg()}}function Yg(){if(bt===1){bt=0;var t=Oi,s=ma,r=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=ze;ze|=4;try{Ag(s,t);var m=Of,y=Om(t.containerInfo),w=m.focusedElem,T=m.selectionRange;if(y!==w&&w&&w.ownerDocument&&Cm(w.ownerDocument.documentElement,w)){if(T!==null&&eu(w)){var D=T.start,V=T.end;if(V===void 0&&(V=D),"selectionStart"in w)w.selectionStart=D,w.selectionEnd=Math.min(V,w.value.length);else{var Y=w.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var L=z.getSelection(),ee=w.textContent.length,ce=Math.min(T.start,ee),Ve=T.end===void 0?ce:Math.min(T.end,ee);!L.extend&&ce>Ve&&(y=Ve,Ve=ce,ce=y);var O=Mm(w,ce),R=Mm(w,Ve);if(O&&R&&(L.rangeCount!==1||L.anchorNode!==O.node||L.anchorOffset!==O.offset||L.focusNode!==R.node||L.focusOffset!==R.offset)){var N=Y.createRange();N.setStart(O.node,O.offset),L.removeAllRanges(),ce>Ve?(L.addRange(N),L.extend(R.node,R.offset)):(N.setEnd(R.node,R.offset),L.addRange(N))}}}}for(Y=[],L=w;L=L.parentNode;)L.nodeType===1&&Y.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var G=Y[w];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ko=!!Cf,Of=Cf=null}finally{ze=d,Q.p=o,H.T=r}}t.current=s,bt=2}}function Kg(){if(bt===2){bt=0;var t=Oi,s=ma,r=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=Q.p;Q.p=2;var d=ze;ze|=4;try{vg(t,s.alternate,s)}finally{ze=d,Q.p=o,H.T=r}}bt=3}}function Wg(){if(bt===4||bt===3){bt=0,Cc();var t=Oi,s=ma,r=ni,o=Ng;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?bt=5:(bt=0,ma=Oi=null,Xg(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ci=null),Bc(r),s=s.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(mi,s,void 0,(s.current.flags&128)===128)}catch{}if(o!==null){s=H.T,d=Q.p,Q.p=2,H.T=null;try{for(var m=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];m(w.value,{componentStack:w.stack})}}finally{H.T=s,Q.p=d}}(ni&3)!==0&&uo(),jn(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===gf?Tr++:(Tr=0,gf=t):Tr=0,Er(0)}}function Xg(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,rr(s)))}function uo(){return Yg(),Kg(),Wg(),Qg()}function Qg(){if(bt!==5)return!1;var t=Oi,s=mf;mf=0;var r=Bc(ni),o=H.T,d=Q.p;try{Q.p=32>r?32:r,H.T=null,r=pf,pf=null;var m=Oi,y=ni;if(bt=0,ma=Oi=null,ni=0,(ze&6)!==0)throw Error(a(331));var w=ze;if(ze|=4,Cg(m.current),Eg(m,m.current,y,r),ze=w,Er(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(mi,m)}catch{}return!0}finally{Q.p=d,H.T=o,Xg(t,s)}}function Fg(t,s,r){s=dn(r,s),s=Xu(t.stateNode,s,2),t=ki(t,s,2),t!==null&&(Wa(t,2),jn(t))}function _e(t,s,r){if(t.tag===3)Fg(t,t,r);else for(;s!==null;){if(s.tag===3){Fg(s,t,r);break}else if(s.tag===1){var o=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ci===null||!Ci.has(o))){t=dn(r,t),r=Zp(2),o=ki(s,r,2),o!==null&&(Pp(r,o,s,t),Wa(o,2),jn(o));break}}s=s.return}}function vf(t,s,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Xx;var d=new Set;o.set(s,d)}else d=o.get(s),d===void 0&&(d=new Set,o.set(s,d));d.has(r)||(ff=!0,d.add(r),t=Jx.bind(null,t,s,r),s.then(t,t))}function Jx(t,s,r){var o=t.pingCache;o!==null&&o.delete(s),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,$e===t&&(xe&r)===r&&(it===4||it===3&&(xe&62914560)===xe&&300>_t()-so?(ze&2)===0&&pa(t,0):df|=r,ha===xe&&(ha=0)),jn(t)}function Zg(t,s){s===0&&(s=Yh()),t=ss(t,s),t!==null&&(Wa(t,s),jn(t))}function Ix(t){var s=t.memoizedState,r=0;s!==null&&(r=s.retryLane),Zg(t,r)}function e2(t,s){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(s),Zg(t,r)}function t2(t,s){return Ga(t,s)}var fo=null,ya=null,xf=!1,ho=!1,wf=!1,Ni=0;function jn(t){t!==ya&&t.next===null&&(ya===null?fo=ya=t:ya=ya.next=t),ho=!0,xf||(xf=!0,i2())}function Er(t,s){if(!wf&&ho){wf=!0;do for(var r=!1,o=fo;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var m=0;else{var y=o.suspendedLanes,w=o.pingedLanes;m=(1<<31-xt(42|t)+1)-1,m&=d&~(y&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,ey(o,m))}else m=xe,m=gl(o,o===$e?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Ka(o,m)||(r=!0,ey(o,m));o=o.next}while(r);wf=!1}}function n2(){Pg()}function Pg(){ho=xf=!1;var t=0;Ni!==0&&h2()&&(t=Ni);for(var s=_t(),r=null,o=fo;o!==null;){var d=o.next,m=Jg(o,s);m===0?(o.next=null,r===null?fo=d:r.next=d,d===null&&(ya=r)):(r=o,(t!==0||(m&3)!==0)&&(ho=!0)),o=d}bt!==0&&bt!==5||Er(t),Ni!==0&&(Ni=0)}function Jg(t,s){for(var r=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-xt(m),w=1<<y,T=d[y];T===-1?((w&r)===0||(w&o)!==0)&&(d[y]=C1(w,s)):T<=s&&(t.expiredLanes|=w),m&=~w}if(s=$e,r=xe,r=gl(t,t===s?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===s&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$a(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ka(t,r)){if(s=r&-r,s===t.callbackPriority)return s;switch(o!==null&&$a(o),Bc(r)){case 2:case 8:r=dl;break;case 32:r=de;break;case 268435456:r=yt;break;default:r=de}return o=Ig.bind(null,t),r=Ga(r,o),t.callbackPriority=s,t.callbackNode=r,s}return o!==null&&o!==null&&$a(o),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,s){if(bt!==0&&bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(uo()&&t.callbackNode!==r)return null;var o=xe;return o=gl(t,t===$e?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(zg(t,o,s),Jg(t,_t()),t.callbackNode!=null&&t.callbackNode===r?Ig.bind(null,t):null)}function ey(t,s){if(uo())return null;zg(t,s,!0)}function i2(){p2(function(){(ze&6)!==0?Ga(fl,n2):Pg()})}function Sf(){if(Ni===0){var t=na;t===0&&(t=_s,_s<<=1,(_s&261888)===0&&(_s=256)),Ni=t}return Ni}function ty(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(""+t)}function ny(t,s){var r=s.ownerDocument.createElement("input");return r.name=s.name,r.value=s.value,t.id&&r.setAttribute("form",t.id),s.parentNode.insertBefore(r,s),t=new FormData(t),r.parentNode.removeChild(r),t}function s2(t,s,r,o,d){if(s==="submit"&&r&&r.stateNode===d){var m=ty((d[Gt]||null).action),y=o.submitter;y&&(s=(s=y[Gt]||null)?ty(s.formAction):y.getAttribute("formAction"),s!==null&&(m=s,y=null));var w=new Al("action","action",null,o,d);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ni!==0){var T=y?ny(d,y):new FormData(d);Vu(r,{pending:!0,data:T,method:d.method,action:m},null,T)}}else typeof m=="function"&&(w.preventDefault(),T=y?ny(d,y):new FormData(d),Vu(r,{pending:!0,data:T,method:d.method,action:m},m,T))},currentTarget:d}]})}}for(var kf=0;kf<su.length;kf++){var Af=su[kf],a2=Af.toLowerCase(),r2=Af[0].toUpperCase()+Af.slice(1);xn(a2,"on"+r2)}xn(Dm,"onAnimationEnd"),xn(zm,"onAnimationIteration"),xn(Bm,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Sx,"onTransitionRun"),xn(kx,"onTransitionStart"),xn(Ax,"onTransitionCancel"),xn(Lm,"onTransitionEnd"),Gs("onMouseEnter",["mouseout","mouseover"]),Gs("onMouseLeave",["mouseout","mouseover"]),Gs("onPointerEnter",["pointerout","pointerover"]),Gs("onPointerLeave",["pointerout","pointerover"]),es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),es("onBeforeInput",["compositionend","keypress","textInput","paste"]),es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rr));function iy(t,s){s=(s&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],d=o.event;o=o.listeners;e:{var m=void 0;if(s)for(var y=o.length-1;0<=y;y--){var w=o[y],T=w.instance,D=w.currentTarget;if(w=w.listener,T!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=D;try{m(d)}catch(V){Rl(V)}d.currentTarget=null,m=T}else for(y=0;y<o.length;y++){if(w=o[y],T=w.instance,D=w.currentTarget,w=w.listener,T!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=D;try{m(d)}catch(V){Rl(V)}d.currentTarget=null,m=T}}}}function ve(t,s){var r=s[Lc];r===void 0&&(r=s[Lc]=new Set);var o=t+"__bubble";r.has(o)||(sy(s,t,2,!1),r.add(o))}function Tf(t,s,r){var o=0;s&&(o|=4),sy(r,t,o,s)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[mo]){t[mo]=!0,Ph.forEach(function(r){r!=="selectionchange"&&(l2.has(r)||Tf(r,!1,t),Tf(r,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[mo]||(s[mo]=!0,Tf("selectionchange",!1,s))}}function sy(t,s,r,o){switch(Dy(s)){case 2:var d=B2;break;case 8:d=L2;break;default:d=Vf}r=d.bind(null,s,r,t),d=void 0,!Kc||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(s,r,{capture:!0,passive:d}):t.addEventListener(s,r,!0):d!==void 0?t.addEventListener(s,r,{passive:d}):t.addEventListener(s,r,!1)}function Rf(t,s,r,o,d){var m=o;if((s&1)===0&&(s&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=o.return;y!==null;){var T=y.tag;if((T===3||T===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=qs(w),y===null)return;if(T=y.tag,T===5||T===6||T===26||T===27){o=m=y;continue e}w=w.parentNode}}o=o.return}cm(function(){var D=m,V=$c(r),Y=[];e:{var z=_m.get(t);if(z!==void 0){var L=Al,ee=t;switch(t){case"keypress":if(Sl(r)===0)break e;case"keydown":case"keyup":L=ex;break;case"focusin":ee="focus",L=Fc;break;case"focusout":ee="blur",L=Fc;break;case"beforeblur":case"afterblur":L=Fc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=ix;break;case Dm:case zm:case Bm:L=K1;break;case Lm:L=ax;break;case"scroll":case"scrollend":L=U1;break;case"wheel":L=lx;break;case"copy":case"cut":case"paste":L=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=mm;break;case"toggle":case"beforetoggle":L=cx}var ce=(s&4)!==0,Ve=!ce&&(t==="scroll"||t==="scrollend"),O=ce?z!==null?z+"Capture":null:z;ce=[];for(var R=D,N;R!==null;){var G=R;if(N=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||N===null||O===null||(G=Fa(R,O),G!=null&&ce.push(Mr(R,G,N))),Ve)break;R=R.return}0<ce.length&&(z=new L(z,ee,null,r,V),Y.push({event:z,listeners:ce}))}}if((s&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",z&&r!==Gc&&(ee=r.relatedTarget||r.fromElement)&&(qs(ee)||ee[Hs]))break e;if((L||z)&&(z=V.window===V?V:(z=V.ownerDocument)?z.defaultView||z.parentWindow:window,L?(ee=r.relatedTarget||r.toElement,L=D,ee=ee?qs(ee):null,ee!==null&&(Ve=c(ee),ce=ee.tag,ee!==Ve||ce!==5&&ce!==27&&ce!==6)&&(ee=null)):(L=null,ee=D),L!==ee)){if(ce=dm,G="onMouseLeave",O="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(ce=mm,G="onPointerLeave",O="onPointerEnter",R="pointer"),Ve=L==null?z:Qa(L),N=ee==null?z:Qa(ee),z=new ce(G,R+"leave",L,r,V),z.target=Ve,z.relatedTarget=N,G=null,qs(V)===D&&(ce=new ce(O,R+"enter",ee,r,V),ce.target=N,ce.relatedTarget=Ve,G=ce),Ve=G,L&&ee)t:{for(ce=o2,O=L,R=ee,N=0,G=O;G;G=ce(G))N++;G=0;for(var ae=R;ae;ae=ce(ae))G++;for(;0<N-G;)O=ce(O),N--;for(;0<G-N;)R=ce(R),G--;for(;N--;){if(O===R||R!==null&&O===R.alternate){ce=O;break t}O=ce(O),R=ce(R)}ce=null}else ce=null;L!==null&&ay(Y,z,L,ce,!1),ee!==null&&Ve!==null&&ay(Y,Ve,ee,ce,!0)}}e:{if(z=D?Qa(D):window,L=z.nodeName&&z.nodeName.toLowerCase(),L==="select"||L==="input"&&z.type==="file")var je=Sm;else if(xm(z))if(km)je=vx;else{je=yx;var ne=gx}else L=z.nodeName,!L||L.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?D&&Vc(D.elementType)&&(je=Sm):je=bx;if(je&&(je=je(t,D))){wm(Y,je,r,V);break e}ne&&ne(t,z,D),t==="focusout"&&D&&z.type==="number"&&D.memoizedProps.value!=null&&Uc(z,"number",z.value)}switch(ne=D?Qa(D):window,t){case"focusin":(xm(ne)||ne.contentEditable==="true")&&(Qs=ne,tu=D,ir=null);break;case"focusout":ir=tu=Qs=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,jm(Y,r,V);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":jm(Y,r,V)}var pe;if(Pc)e:{switch(t){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Xs?bm(t,r)&&(we="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(we="onCompositionStart");we&&(pm&&r.locale!=="ko"&&(Xs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Xs&&(pe=um()):(gi=V,Wc="value"in gi?gi.value:gi.textContent,Xs=!0)),ne=po(D,we),0<ne.length&&(we=new hm(we,t,null,r,V),Y.push({event:we,listeners:ne}),pe?we.data=pe:(pe=vm(r),pe!==null&&(we.data=pe)))),(pe=fx?dx(t,r):hx(t,r))&&(we=po(D,"onBeforeInput"),0<we.length&&(ne=new hm("onBeforeInput","beforeinput",null,r,V),Y.push({event:ne,listeners:we}),ne.data=pe)),s2(Y,t,D,r,V)}iy(Y,s)})}function Mr(t,s,r){return{instance:t,listener:s,currentTarget:r}}function po(t,s){for(var r=s+"Capture",o=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Fa(t,r),d!=null&&o.unshift(Mr(t,d,m)),d=Fa(t,s),d!=null&&o.push(Mr(t,d,m))),t.tag===3)return o;t=t.return}return[]}function o2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ay(t,s,r,o,d){for(var m=s._reactName,y=[];r!==null&&r!==o;){var w=r,T=w.alternate,D=w.stateNode;if(w=w.tag,T!==null&&T===o)break;w!==5&&w!==26&&w!==27||D===null||(T=D,d?(D=Fa(r,m),D!=null&&y.unshift(Mr(r,D,T))):d||(D=Fa(r,m),D!=null&&y.push(Mr(r,D,T)))),r=r.return}y.length!==0&&t.push({event:s,listeners:y})}var c2=/\r\n?/g,u2=/\u0000|\uFFFD/g;function ry(t){return(typeof t=="string"?t:""+t).replace(c2,`
`).replace(u2,"")}function ly(t,s){return s=ry(s),ry(t)===s}function Ue(t,s,r,o,d,m){switch(r){case"children":typeof o=="string"?s==="body"||s==="textarea"&&o===""||Ys(t,o):(typeof o=="number"||typeof o=="bigint")&&s!=="body"&&Ys(t,""+o);break;case"className":bl(t,"class",o);break;case"tabIndex":bl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,r,o);break;case"style":lm(t,o,m);break;case"data":if(s!=="object"){bl(t,"data",o);break}case"src":case"href":if(o===""&&(s!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=xl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(s!=="input"&&Ue(t,s,"name",d.name,d,null),Ue(t,s,"formEncType",d.formEncType,d,null),Ue(t,s,"formMethod",d.formMethod,d,null),Ue(t,s,"formTarget",d.formTarget,d,null)):(Ue(t,s,"encType",d.encType,d,null),Ue(t,s,"method",d.method,d,null),Ue(t,s,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=xl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Vn);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":ve("beforetoggle",t),ve("toggle",t),yl(t,"popover",o);break;case"xlinkActuate":Un(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Un(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Un(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Un(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Un(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Un(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Un(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Un(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Un(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":yl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=H1.get(r)||r,yl(t,r,o))}}function Mf(t,s,r,o,d,m){switch(r){case"style":lm(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Ys(t,o):(typeof o=="number"||typeof o=="bigint")&&Ys(t,""+o);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),s=r.slice(2,d?r.length-7:void 0),m=t[Gt]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(s,m,d),typeof o=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(s,o,d);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):yl(t,r,o)}}}function Ct(t,s,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var o=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var y=r[m];if(y!=null)switch(m){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Ue(t,s,m,y,r,null)}}d&&Ue(t,s,"srcSet",r.srcSet,r,null),o&&Ue(t,s,"src",r.src,r,null);return;case"input":ve("invalid",t);var w=m=y=d=null,T=null,D=null;for(o in r)if(r.hasOwnProperty(o)){var V=r[o];if(V!=null)switch(o){case"name":d=V;break;case"type":y=V;break;case"checked":T=V;break;case"defaultChecked":D=V;break;case"value":m=V;break;case"defaultValue":w=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,s));break;default:Ue(t,s,o,V,r,null)}}im(t,m,w,T,D,y,d,!1);return;case"select":ve("invalid",t),o=y=m=null;for(d in r)if(r.hasOwnProperty(d)&&(w=r[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:Ue(t,s,d,w,r,null)}s=m,r=y,t.multiple=!!o,s!=null?$s(t,!!o,s,!1):r!=null&&$s(t,!!o,r,!0);return;case"textarea":ve("invalid",t),m=d=o=null;for(y in r)if(r.hasOwnProperty(y)&&(w=r[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ue(t,s,y,w,r,null)}am(t,o,d,m);return;case"option":for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null)&&(T==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ue(t,s,T,o,r,null));return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(o=0;o<Rr.length;o++)ve(Rr[o],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in r)if(r.hasOwnProperty(D)&&(o=r[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Ue(t,s,D,o,r,null)}return;default:if(Vc(s)){for(V in r)r.hasOwnProperty(V)&&(o=r[V],o!==void 0&&Mf(t,s,V,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&Ue(t,s,w,o,r,null))}function f2(t,s,r,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,w=null,T=null,D=null,V=null;for(L in r){var Y=r[L];if(r.hasOwnProperty(L)&&Y!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":T=Y;default:o.hasOwnProperty(L)||Ue(t,s,L,null,o,Y)}}for(var z in o){var L=o[z];if(Y=r[z],o.hasOwnProperty(z)&&(L!=null||Y!=null))switch(z){case"type":m=L;break;case"name":d=L;break;case"checked":D=L;break;case"defaultChecked":V=L;break;case"value":y=L;break;case"defaultValue":w=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,s));break;default:L!==Y&&Ue(t,s,z,L,o,Y)}}qc(t,y,w,T,D,V,m,d);return;case"select":L=y=w=z=null;for(m in r)if(T=r[m],r.hasOwnProperty(m)&&T!=null)switch(m){case"value":break;case"multiple":L=T;default:o.hasOwnProperty(m)||Ue(t,s,m,null,o,T)}for(d in o)if(m=o[d],T=r[d],o.hasOwnProperty(d)&&(m!=null||T!=null))switch(d){case"value":z=m;break;case"defaultValue":w=m;break;case"multiple":y=m;default:m!==T&&Ue(t,s,d,m,o,T)}s=w,r=y,o=L,z!=null?$s(t,!!r,z,!1):!!o!=!!r&&(s!=null?$s(t,!!r,s,!0):$s(t,!!r,r?[]:"",!1));return;case"textarea":L=z=null;for(w in r)if(d=r[w],r.hasOwnProperty(w)&&d!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ue(t,s,w,null,o,d)}for(y in o)if(d=o[y],m=r[y],o.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":z=d;break;case"defaultValue":L=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ue(t,s,y,d,o,m)}sm(t,z,L);return;case"option":for(var ee in r)z=r[ee],r.hasOwnProperty(ee)&&z!=null&&!o.hasOwnProperty(ee)&&(ee==="selected"?t.selected=!1:Ue(t,s,ee,null,o,z));for(T in o)z=o[T],L=r[T],o.hasOwnProperty(T)&&z!==L&&(z!=null||L!=null)&&(T==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":Ue(t,s,T,z,o,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in r)z=r[ce],r.hasOwnProperty(ce)&&z!=null&&!o.hasOwnProperty(ce)&&Ue(t,s,ce,null,o,z);for(D in o)if(z=o[D],L=r[D],o.hasOwnProperty(D)&&z!==L&&(z!=null||L!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,s));break;default:Ue(t,s,D,z,o,L)}return;default:if(Vc(s)){for(var Ve in r)z=r[Ve],r.hasOwnProperty(Ve)&&z!==void 0&&!o.hasOwnProperty(Ve)&&Mf(t,s,Ve,void 0,o,z);for(V in o)z=o[V],L=r[V],!o.hasOwnProperty(V)||z===L||z===void 0&&L===void 0||Mf(t,s,V,z,o,L);return}}for(var O in r)z=r[O],r.hasOwnProperty(O)&&z!=null&&!o.hasOwnProperty(O)&&Ue(t,s,O,null,o,z);for(Y in o)z=o[Y],L=r[Y],!o.hasOwnProperty(Y)||z===L||z==null&&L==null||Ue(t,s,Y,z,o,L)}function oy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function d2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var d=r[o],m=d.transferSize,y=d.initiatorType,w=d.duration;if(m&&w&&oy(y)){for(y=0,w=d.responseEnd,o+=1;o<r.length;o++){var T=r[o],D=T.startTime;if(D>w)break;var V=T.transferSize,Y=T.initiatorType;V&&oy(Y)&&(T=T.responseEnd,y+=V*(T<w?1:(w-D)/(T-D)))}if(--o,s+=8*(m+y)/(d.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,Of=null;function go(t){return t.nodeType===9?t:t.ownerDocument}function cy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uy(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function jf(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nf=null;function h2(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var fy=typeof setTimeout=="function"?setTimeout:void 0,m2=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,p2=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(t){return dy.resolve(null).then(t).catch(g2)}:fy;function g2(t){setTimeout(function(){throw t})}function Di(t){return t==="head"}function hy(t,s){var r=s,o=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(d),wa(s);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Cr(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Cr(r);for(var m=r.firstChild;m;){var y=m.nextSibling,w=m.nodeName;m[Xa]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=y}}else r==="body"&&Cr(t.ownerDocument.body);r=d}while(r);wa(s)}function my(t,s){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?s?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(s?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Df(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var r=s;switch(s=s.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Df(r),_c(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function y2(t,s,r,o){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Xa])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=yn(t.nextSibling),t===null)break}return null}function b2(t,s,r){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=yn(t.nextSibling),t===null))return null;return t}function py(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yn(t.nextSibling),t===null))return null;return t}function zf(t){return t.data==="$?"||t.data==="$~"}function Bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function v2(t,s){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||r.readyState!=="loading")s();else{var o=function(){s(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yn(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Lf=null;function gy(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(s===0)return yn(t.nextSibling);s--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||s++}t=t.nextSibling}return null}function yy(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(s===0)return t;s--}else r!=="/$"&&r!=="/&"||s++}t=t.previousSibling}return null}function by(t,s,r){switch(s=go(r),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Cr(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);_c(t)}var bn=new Map,vy=new Set;function yo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ii=Q.d;Q.d={f:x2,r:w2,D:S2,C:k2,L:A2,m:T2,X:R2,S:E2,M:M2};function x2(){var t=ii.f(),s=lo();return t||s}function w2(t){var s=Us(t);s!==null&&s.tag===5&&s.type==="form"?Lp(s):ii.r(t)}var ba=typeof document>"u"?null:document;function xy(t,s,r){var o=ba;if(o&&typeof s=="string"&&s){var d=un(s);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),vy.has(d)||(vy.add(d),t={rel:t,crossOrigin:r,href:s},o.querySelector(d)===null&&(s=o.createElement("link"),Ct(s,"link",t),wt(s),o.head.appendChild(s)))}}function S2(t){ii.D(t),xy("dns-prefetch",t,null)}function k2(t,s){ii.C(t,s),xy("preconnect",t,s)}function A2(t,s,r){ii.L(t,s,r);var o=ba;if(o&&t&&s){var d='link[rel="preload"][as="'+un(s)+'"]';s==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+un(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+un(r.imageSizes)+'"]')):d+='[href="'+un(t)+'"]';var m=d;switch(s){case"style":m=va(t);break;case"script":m=xa(t)}bn.has(m)||(t=b({rel:"preload",href:s==="image"&&r&&r.imageSrcSet?void 0:t,as:s},r),bn.set(m,t),o.querySelector(d)!==null||s==="style"&&o.querySelector(Or(m))||s==="script"&&o.querySelector(jr(m))||(s=o.createElement("link"),Ct(s,"link",t),wt(s),o.head.appendChild(s)))}}function T2(t,s){ii.m(t,s);var r=ba;if(r&&t){var o=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+un(o)+'"][href="'+un(t)+'"]',m=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xa(t)}if(!bn.has(m)&&(t=b({rel:"modulepreload",href:t},s),bn.set(m,t),r.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(jr(m)))return}o=r.createElement("link"),Ct(o,"link",t),wt(o),r.head.appendChild(o)}}}function E2(t,s,r){ii.S(t,s,r);var o=ba;if(o&&t){var d=Vs(o).hoistableStyles,m=va(t);s=s||"default";var y=d.get(m);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Or(m)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":s},r),(r=bn.get(m))&&_f(t,r);var T=y=o.createElement("link");wt(T),Ct(T,"link",t),T._p=new Promise(function(D,V){T.onload=D,T.onerror=V}),T.addEventListener("load",function(){w.loading|=1}),T.addEventListener("error",function(){w.loading|=2}),w.loading|=4,bo(y,s,o)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(m,y)}}}function R2(t,s){ii.X(t,s);var r=ba;if(r&&t){var o=Vs(r).hoistableScripts,d=xa(t),m=o.get(d);m||(m=r.querySelector(jr(d)),m||(t=b({src:t,async:!0},s),(s=bn.get(d))&&Hf(t,s),m=r.createElement("script"),wt(m),Ct(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function M2(t,s){ii.M(t,s);var r=ba;if(r&&t){var o=Vs(r).hoistableScripts,d=xa(t),m=o.get(d);m||(m=r.querySelector(jr(d)),m||(t=b({src:t,async:!0,type:"module"},s),(s=bn.get(d))&&Hf(t,s),m=r.createElement("script"),wt(m),Ct(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(d,m))}}function wy(t,s,r,o){var d=(d=oe.current)?yo(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(s=va(r.href),r=Vs(d).hoistableStyles,o=r.get(s),o||(o={type:"style",instance:null,count:0,state:null},r.set(s,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=va(r.href);var m=Vs(d).hoistableStyles,y=m.get(t);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=d.querySelector(Or(t)))&&!m._p&&(y.instance=m,y.state.loading=5),bn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},bn.set(t,r),m||C2(d,t,r,y.state))),s&&o===null)throw Error(a(528,""));return y}if(s&&o!==null)throw Error(a(529,""));return null;case"script":return s=r.async,r=r.src,typeof r=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xa(r),r=Vs(d).hoistableScripts,o=r.get(s),o||(o={type:"script",instance:null,count:0,state:null},r.set(s,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function va(t){return'href="'+un(t)+'"'}function Or(t){return'link[rel="stylesheet"]['+t+"]"}function Sy(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function C2(t,s,r,o){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?o.loading=1:(s=t.createElement("link"),o.preload=s,s.addEventListener("load",function(){return o.loading|=1}),s.addEventListener("error",function(){return o.loading|=2}),Ct(s,"link",r),wt(s),t.head.appendChild(s))}function xa(t){return'[src="'+un(t)+'"]'}function jr(t){return"script[async]"+t}function ky(t,s,r){if(s.count++,s.instance===null)switch(s.type){case"style":var o=t.querySelector('style[data-href~="'+un(r.href)+'"]');if(o)return s.instance=o,wt(o),o;var d=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),wt(o),Ct(o,"style",d),bo(o,r.precedence,t),s.instance=o;case"stylesheet":d=va(r.href);var m=t.querySelector(Or(d));if(m)return s.state.loading|=4,s.instance=m,wt(m),m;o=Sy(r),(d=bn.get(d))&&_f(o,d),m=(t.ownerDocument||t).createElement("link"),wt(m);var y=m;return y._p=new Promise(function(w,T){y.onload=w,y.onerror=T}),Ct(m,"link",o),s.state.loading|=4,bo(m,r.precedence,t),s.instance=m;case"script":return m=xa(r.src),(d=t.querySelector(jr(m)))?(s.instance=d,wt(d),d):(o=r,(d=bn.get(m))&&(o=b({},r),Hf(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),wt(d),Ct(d,"link",o),t.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(o=s.instance,s.state.loading|=4,bo(o,r.precedence,t));return s.instance}function bo(t,s,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,m=d,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=r.nodeType===9?r.head:r,s.insertBefore(t,s.firstChild))}function _f(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Hf(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var vo=null;function Ay(t,s,r){if(vo===null){var o=new Map,d=vo=new Map;d.set(r,o)}else d=vo,o=d.get(r),o||(o=new Map,d.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var m=r[d];if(!(m[Xa]||m[Tt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(s)||"";y=t+y;var w=o.get(y);w?w.push(m):o.set(y,[m])}}return o}function Ty(t,s,r){t=t.ownerDocument||t,t.head.insertBefore(r,s==="title"?t.querySelector("head > title"):null)}function O2(t,s,r){if(r===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;return s.rel==="stylesheet"?(t=s.disabled,typeof s.precedence=="string"&&t==null):!0;case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Ey(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function j2(t,s,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=va(o.href),m=s.querySelector(Or(d));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=xo.bind(t),s.then(t,t)),r.state.loading|=4,r.instance=m,wt(m);return}m=s.ownerDocument||s,o=Sy(o),(d=bn.get(d))&&_f(o,d),m=m.createElement("link"),wt(m);var y=m;y._p=new Promise(function(w,T){y.onload=w,y.onerror=T}),Ct(m,"link",o),r.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,s),(s=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=xo.bind(t),s.addEventListener("load",r),s.addEventListener("error",r))}}var qf=0;function N2(t,s){return t.stylesheets&&t.count===0&&So(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&So(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&qf===0&&(qf=62500*d2());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&So(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>qf?50:800)+s);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wo=null;function So(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wo=new Map,s.forEach(D2,t),wo=null,xo.call(t))}function D2(t,s){if(!(s.state.loading&4)){var r=wo.get(t);if(r)var o=r.get(null);else{r=new Map,wo.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}d=s.instance,y=d.getAttribute("data-precedence"),m=r.get(y)||o,m===o&&r.set(null,d),r.set(y,d),this.count++,o=xo.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),s.state.loading|=4}}var Nr={$$typeof:K,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function z2(t,s,r,o,d,m,y,w,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.hiddenUpdates=Dc(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ry(t,s,r,o,d,m,y,w,T,D,V,Y){return t=new z2(t,s,r,y,T,D,V,Y,w),s=1,m===!0&&(s|=24),m=Jt(3,null,null,s),t.current=m,m.stateNode=t,s=yu(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:o,isDehydrated:r,cache:s},wu(m),t}function My(t){return t?(t=Ps,t):Ps}function Cy(t,s,r,o,d,m){d=My(d),o.context===null?o.context=d:o.pendingContext=d,o=Si(s),o.payload={element:r},m=m===void 0?null:m,m!==null&&(o.callback=m),r=ki(t,o,s),r!==null&&(Qt(r,t,s),ur(r,t,s))}function Oy(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<s?r:s}}function Uf(t,s){Oy(t,s),(t=t.alternate)&&Oy(t,s)}function jy(t){if(t.tag===13||t.tag===31){var s=ss(t,67108864);s!==null&&Qt(s,t,67108864),Uf(t,67108864)}}function Ny(t){if(t.tag===13||t.tag===31){var s=sn();s=zc(s);var r=ss(t,s);r!==null&&Qt(r,t,s),Uf(t,s)}}var ko=!0;function B2(t,s,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=2,Vf(t,s,r,o)}finally{Q.p=m,H.T=d}}function L2(t,s,r,o){var d=H.T;H.T=null;var m=Q.p;try{Q.p=8,Vf(t,s,r,o)}finally{Q.p=m,H.T=d}}function Vf(t,s,r,o){if(ko){var d=Gf(o);if(d===null)Rf(t,s,o,Ao,r),zy(t,o);else if(H2(d,t,s,r,o))o.stopPropagation();else if(zy(t,o),s&4&&-1<_2.indexOf(t)){for(;d!==null;){var m=Us(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Ii(m.pendingLanes);if(y!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var T=1<<31-xt(y);w.entanglements[1]|=T,y&=~T}jn(m),(ze&6)===0&&(ao=_t()+500,Er(0))}}break;case 31:case 13:w=ss(m,2),w!==null&&Qt(w,m,2),lo(),Uf(m,2)}if(m=Gf(o),m===null&&Rf(t,s,o,Ao,r),m===d)break;d=m}d!==null&&o.stopPropagation()}else Rf(t,s,o,null,r)}}function Gf(t){return t=$c(t),$f(t)}var Ao=null;function $f(t){if(Ao=null,t=qs(t),t!==null){var s=c(t);if(s===null)t=null;else{var r=s.tag;if(r===13){if(t=u(s),t!==null)return t;t=null}else if(r===31){if(t=f(s),t!==null)return t;t=null}else if(r===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Ao=t,null}function Dy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oc()){case fl:return 2;case dl:return 8;case de:case Me:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Yf=!1,zi=null,Bi=null,Li=null,Dr=new Map,zr=new Map,_i=[],_2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zy(t,s){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Dr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(s.pointerId)}}function Br(t,s,r,o,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:r,eventSystemFlags:o,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Us(s),s!==null&&jy(s)),t):(t.eventSystemFlags|=o,s=t.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),t)}function H2(t,s,r,o,d){switch(s){case"focusin":return zi=Br(zi,t,s,r,o,d),!0;case"dragenter":return Bi=Br(Bi,t,s,r,o,d),!0;case"mouseover":return Li=Br(Li,t,s,r,o,d),!0;case"pointerover":var m=d.pointerId;return Dr.set(m,Br(Dr.get(m)||null,t,s,r,o,d)),!0;case"gotpointercapture":return m=d.pointerId,zr.set(m,Br(zr.get(m)||null,t,s,r,o,d)),!0}return!1}function By(t){var s=qs(t.target);if(s!==null){var r=c(s);if(r!==null){if(s=r.tag,s===13){if(s=u(r),s!==null){t.blockedOn=s,Fh(t.priority,function(){Ny(r)});return}}else if(s===31){if(s=f(r),s!==null){t.blockedOn=s,Fh(t.priority,function(){Ny(r)});return}}else if(s===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var r=Gf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Gc=o,r.target.dispatchEvent(o),Gc=null}else return s=Us(r),s!==null&&jy(s),t.blockedOn=r,!1;s.shift()}return!0}function Ly(t,s,r){To(t)&&r.delete(s)}function q2(){Yf=!1,zi!==null&&To(zi)&&(zi=null),Bi!==null&&To(Bi)&&(Bi=null),Li!==null&&To(Li)&&(Li=null),Dr.forEach(Ly),zr.forEach(Ly)}function Eo(t,s){t.blockedOn===s&&(t.blockedOn=null,Yf||(Yf=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,q2)))}var Ro=null;function _y(t){Ro!==t&&(Ro=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ro===t&&(Ro=null);for(var s=0;s<t.length;s+=3){var r=t[s],o=t[s+1],d=t[s+2];if(typeof o!="function"){if($f(o||r)===null)continue;break}var m=Us(r);m!==null&&(t.splice(s,3),s-=3,Vu(m,{pending:!0,data:d,method:r.method,action:o},o,d))}}))}function wa(t){function s(T){return Eo(T,t)}zi!==null&&Eo(zi,t),Bi!==null&&Eo(Bi,t),Li!==null&&Eo(Li,t),Dr.forEach(s),zr.forEach(s);for(var r=0;r<_i.length;r++){var o=_i[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_i.length&&(r=_i[0],r.blockedOn===null);)By(r),r.blockedOn===null&&_i.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var d=r[o],m=r[o+1],y=d[Gt]||null;if(typeof m=="function")y||_y(r);else if(y){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[Gt]||null)w=y.formAction;else if($f(d)!==null)continue}else w=y.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),_y(r)}}}function Hy(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function s(){d!==null&&(d(),d=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),d!==null&&(d(),d=null)}}}function Kf(t){this._internalRoot=t}Mo.prototype.render=Kf.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var r=s.current,o=sn();Cy(r,o,t,s,null,null)},Mo.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Cy(t.current,2,null,t,null,null),lo(),s[Hs]=null}};function Mo(t){this._internalRoot=t}Mo.prototype.unstable_scheduleHydration=function(t){if(t){var s=Qh();t={blockedOn:null,target:t,priority:s};for(var r=0;r<_i.length&&s!==0&&s<_i[r].priority;r++);_i.splice(r,0,t),r===0&&By(t)}};var qy=e.version;if(qy!=="19.2.7")throw Error(a(527,qy,"19.2.7"));Q.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var U2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{mi=Co.inject(U2),Ie=Co}catch{}}return _r.createRoot=function(t,s){if(!l(t))throw Error(a(299));var r=!1,o="",d=Wp,m=Xp,y=Qp;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=Ry(t,1,!1,null,null,r,o,null,d,m,y,Hy),t[Hs]=s.current,Ef(t),new Kf(s)},_r.hydrateRoot=function(t,s,r){if(!l(t))throw Error(a(299));var o=!1,d="",m=Wp,y=Xp,w=Qp,T=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(T=r.formState)),s=Ry(t,1,!0,s,r??null,o,d,T,m,y,w,Hy),s.context=My(null),r=s.current,o=sn(),o=zc(o),d=Si(o),d.callback=null,ki(r,d,o),r=o,s.current.lanes=r,Wa(s,r),jn(s),t[Hs]=s.current,Ef(t),new Mo(s)},_r.version="19.2.7",_r}var Fy;function P2(){if(Fy)return Qf.exports;Fy=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qf.exports=Z2(),Qf.exports}var J2=P2();const vb=(...i)=>i.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();const I2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const ew=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());const Zy=i=>{const e=ew(i);return e.charAt(0).toUpperCase()+e.slice(1)};var Jf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tw=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},nw=j.createContext({}),iw=()=>j.useContext(nw),sw=j.forwardRef(({color:i,size:e,strokeWidth:n,absoluteStrokeWidth:a,className:l="",children:c,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,color:x="currentColor",className:S=""}=iw()??{},k=a??b?Number(n??g)*24/Number(e??p):n??g;return j.createElement("svg",{ref:h,...Jf,width:e??p??Jf.width,height:e??p??Jf.height,stroke:i??x,strokeWidth:k,className:vb("lucide",S,l),...!c&&!tw(f)&&{"aria-hidden":"true"},...f},[...u.map(([A,M])=>j.createElement(A,M)),...Array.isArray(c)?c:[c]])});const Te=(i,e)=>{const n=j.forwardRef(({className:a,...l},c)=>j.createElement(sw,{ref:c,iconNode:e,className:vb(`lucide-${I2(Zy(i))}`,`lucide-${i}`,a),...l}));return n.displayName=Zy(i),n};const aw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],xb=Te("activity",aw);const rw=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],lw=Te("arrow-down-to-line",rw);const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ph=Te("arrow-right",ow);const cw=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],wb=Te("braces",cw);const uw=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],fw=Te("building-2",uw);const dw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hw=Te("check",dw);const mw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ir=Te("circle-alert",mw);const pw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Md=Te("circle-question-mark",pw);const gw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],yw=Te("copy",gw);const bw=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],vw=Te("cpu",bw);const xw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ww=Te("database",xw);const Sw=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],kw=Te("file-code-corner",Sw);const Aw=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],Tw=Te("files",Aw);const Ew=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],Rw=Te("fingerprint-pattern",Ew);const Mw=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],Cw=Te("flower-2",Mw);const Ow=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],jw=Te("git-branch",Ow);const Nw=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Dw=Te("grid-2x2",Nw);const zw=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Py=Te("library",zw);const Bw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Lw=Te("maximize-2",Bw);const _w=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Hw=Te("microscope",_w);const qw=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],Wr=Te("music-2",qw);const Uw=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],Vw=Te("package-check",Uw);const Gw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],$w=Te("panel-left-close",Gw);const Yw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Jy=Te("panel-left-open",Yw);const Kw=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ww=Te("pause",Kw);const Xw=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bc=Te("play",Xw);const Qw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Fw=Te("refresh-cw",Qw);const Zw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Pw=Te("rotate-ccw",Zw);const Jw=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],Iw=Te("route",Jw);const eS=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],Cd=Te("scan-line",eS);const tS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Sb=Te("search",tS);const nS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],iS=Te("shapes",nS);const sS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aS=Te("sparkles",sS);const rS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lS=Te("square",rS);const oS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gh=Te("x",oS),kb="rasa.theme",Yo=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});Yo.dark;function cS(i=":root"){return`
    ${i} {
      ${If(Yo.dark)}
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

    ${i}[data-rasa-theme="light"] {
      ${If(Yo.light)}
    }

    ${i}[data-rasa-theme="dark"] {
      ${If(Yo.dark)}
    }
  `}function uS(i=document.documentElement){const e=localStorage.getItem(kb),n=e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark";return Ab(n,i),n}function Ab(i,e=document.documentElement){const n=i==="light"?"light":"dark";return e.dataset.rasaTheme=n,e.setAttribute("data-theme",n),localStorage.setItem(kb,n),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:n}})),n}function fS(i=document.documentElement){return Ab(i.dataset.rasaTheme==="light"?"dark":"light",i)}function If(i){return`
      color-scheme: ${i.colorScheme};
      --rasa-surface: ${i.surface};
      --rasa-surface-lift: ${i.surfaceLift};
      --rasa-panel: ${i.panel};
      --rasa-panel-soft: ${i.panelSoft};
      --rasa-panel-raised: ${i.panelRaised};
      --rasa-line: ${i.line};
      --rasa-line-strong: ${i.lineStrong};
      --rasa-text: ${i.text};
      --rasa-muted: ${i.muted};
      --rasa-dim: ${i.dim};
      --rasa-gold: ${i.gold};
      --rasa-blue: ${i.blue};
      --rasa-green: ${i.green};
      --rasa-violet: ${i.violet};
      --rasa-teal: ${i.teal};
      --rasa-red: ${i.red};
      --rasa-success: ${i.success};
      --rasa-danger: ${i.danger};
      --rasa-warning: ${i.warning};
      --rasa-code-bg: ${i.codeBg};
      --rasa-button-text: ${i.buttonText};
      --rasa-shadow: ${i.shadow};
      --rasa-backdrop: ${i.backdrop};
      --rasa-radius: ${i.radius};
  `}const dS=Object.freeze([Object.freeze({id:"inspect",href:"/inspect/",label:"Inspect"}),Object.freeze({id:"studio",href:"/studio/",label:"Studio"}),Object.freeze({id:"conformance",href:"/conformance-report/",label:"Conformance"}),Object.freeze({id:"roadmap",href:"/roadmap/",label:"Roadmap",hidden:!0}),Object.freeze({id:"engineering",href:"/blog/",label:"Engineering",hidden:!0})]);function hS(){return`
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
  `}function mS({activeId:i="",runtimeLabel:e="",runtimeStatus:n="idle",runtimeTitle:a="",theme:l="dark",onThemeToggle:c,actions:u=null}){return v.jsxs("header",{className:"rasa-site-header",children:[v.jsx("a",{"aria-label":"Rasa home",className:"rasa-site-brand",href:"/",children:v.jsx("img",{alt:"Rasa",src:"/assets/brand/logo.svg"})}),v.jsx("nav",{"aria-label":"Primary navigation",className:"rasa-site-nav",children:dS.map(f=>v.jsx("a",{"aria-current":f.id===i?"page":void 0,"data-nav-hidden":f.hidden?"true":void 0,href:f.href,children:f.label},f.id))}),v.jsxs("div",{className:"rasa-site-actions",children:[e?v.jsxs("span",{className:"rasa-site-runtime","data-status":n,title:a||void 0,children:[v.jsx("i",{}),v.jsx("span",{children:e})]}):null,u,v.jsx("button",{"aria-label":`Switch to ${l==="dark"?"light":"dark"} theme`,className:"rasa-site-theme","data-role":"site-theme-toggle",onClick:c,type:"button",children:l==="dark"?"Light":"Dark"})]})]})}let Od=[],Tb=[];(()=>{let i="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,n=0;e<i.length;e++)(e%2?Tb:Od).push(n=n+i[e])})();function pS(i){if(i<768)return!1;for(let e=0,n=Od.length;;){let a=e+n>>1;if(i<Od[a])n=a;else if(i>=Tb[a])e=a+1;else return!0;if(e==n)return!1}}function Iy(i){return i>=127462&&i<=127487}const e0=8205;function gS(i,e,n=!0,a=!0){return(n?Eb:yS)(i,e,a)}function Eb(i,e,n){if(e==i.length)return e;e&&Rb(i.charCodeAt(e))&&Mb(i.charCodeAt(e-1))&&e--;let a=ed(i,e);for(e+=t0(a);e<i.length;){let l=ed(i,e);if(a==e0||l==e0||n&&pS(l))e+=t0(l),a=l;else if(Iy(l)){let c=0,u=e-2;for(;u>=0&&Iy(ed(i,u));)c++,u-=2;if(c%2==0)break;e+=2}else break}return e}function yS(i,e,n){for(;e>0;){let a=Eb(i,e-2,n);if(a<e)return a;e--}return 0}function ed(i,e){let n=i.charCodeAt(e);if(!Mb(n)||e+1==i.length)return n;let a=i.charCodeAt(e+1);return Rb(a)?(n-55296<<10)+(a-56320)+65536:n}function Rb(i){return i>=56320&&i<57344}function Mb(i){return i>=55296&&i<56320}function t0(i){return i<65536?1:2}class Be{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,n,a){[e,n]=Na(this,e,n);let l=[];return this.decompose(0,e,l,2),a.length&&a.decompose(0,a.length,l,3),this.decompose(n,this.length,l,1),Bn.from(l,this.length-(n-e)+a.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,n=this.length){[e,n]=Na(this,e,n);let a=[];return this.decompose(e,n,a,0),Bn.from(a,n-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let n=this.scanIdentical(e,1),a=this.length-this.scanIdentical(e,-1),l=new Xr(this),c=new Xr(e);for(let u=n,f=n;;){if(l.next(u),c.next(u),u=0,l.lineBreak!=c.lineBreak||l.done!=c.done||l.value!=c.value)return!1;if(f+=l.value.length,l.done||f>=a)return!0}}iter(e=1){return new Xr(this,e)}iterRange(e,n=this.length){return new Cb(this,e,n)}iterLines(e,n){let a;if(e==null)a=this.iter();else{n==null&&(n=this.lines+1);let l=this.line(e).from;a=this.iterRange(l,Math.max(l,n==this.lines+1?this.length:n<=1?0:this.line(n-1).to))}return new Ob(a)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?Be.empty:e.length<=32?new ot(e):Bn.from(ot.split(e,[]))}}class ot extends Be{constructor(e,n=bS(e)){super(),this.text=e,this.length=n}get lines(){return this.text.length}get children(){return null}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.text[c],f=l+u.length;if((n?a:f)>=e)return new vS(l,f,a,u);l=f+1,a++}}decompose(e,n,a,l){let c=e<=0&&n>=this.length?this:new ot(n0(this.text,e,n),Math.min(n,this.length)-Math.max(0,e));if(l&1){let u=a.pop(),f=Ko(c.text,u.text.slice(),0,c.length);if(f.length<=32)a.push(new ot(f,u.length+c.length));else{let h=f.length>>1;a.push(new ot(f.slice(0,h)),new ot(f.slice(h)))}}else a.push(c)}replace(e,n,a){if(!(a instanceof ot))return super.replace(e,n,a);[e,n]=Na(this,e,n);let l=Ko(this.text,Ko(a.text,n0(this.text,0,e)),n),c=this.length+a.length-(n-e);return l.length<=32?new ot(l,c):Bn.from(ot.split(l,[]),c)}sliceString(e,n=this.length,a=`
`){[e,n]=Na(this,e,n);let l="";for(let c=0,u=0;c<=n&&u<this.text.length;u++){let f=this.text[u],h=c+f.length;c>e&&u&&(l+=a),e<h&&n>c&&(l+=f.slice(Math.max(0,e-c),n-c)),c=h+1}return l}flatten(e){for(let n of this.text)e.push(n)}scanIdentical(){return 0}static split(e,n){let a=[],l=-1;for(let c of e)a.push(c),l+=c.length+1,a.length==32&&(n.push(new ot(a,l)),a=[],l=-1);return l>-1&&n.push(new ot(a,l)),n}}class Bn extends Be{constructor(e,n){super(),this.children=e,this.length=n,this.lines=0;for(let a of e)this.lines+=a.lines}lineInner(e,n,a,l){for(let c=0;;c++){let u=this.children[c],f=l+u.length,h=a+u.lines-1;if((n?h:f)>=e)return u.lineInner(e,n,a,l);l=f+1,a=h+1}}decompose(e,n,a,l){for(let c=0,u=0;u<=n&&c<this.children.length;c++){let f=this.children[c],h=u+f.length;if(e<=h&&n>=u){let p=l&((u<=e?1:0)|(h>=n?2:0));u>=e&&h<=n&&!p?a.push(f):f.decompose(e-u,n-u,a,p)}u=h+1}}replace(e,n,a){if([e,n]=Na(this,e,n),a.lines<this.lines)for(let l=0,c=0;l<this.children.length;l++){let u=this.children[l],f=c+u.length;if(e>=c&&n<=f){let h=u.replace(e-c,n-c,a),p=this.lines-u.lines+h.lines;if(h.lines<p>>4&&h.lines>p>>6){let g=this.children.slice();return g[l]=h,new Bn(g,this.length-(n-e)+a.length)}return super.replace(c,f,h)}c=f+1}return super.replace(e,n,a)}sliceString(e,n=this.length,a=`
`){[e,n]=Na(this,e,n);let l="";for(let c=0,u=0;c<this.children.length&&u<=n;c++){let f=this.children[c],h=u+f.length;u>e&&c&&(l+=a),e<h&&n>u&&(l+=f.sliceString(e-u,n-u,a)),u=h+1}return l}flatten(e){for(let n of this.children)n.flatten(e)}scanIdentical(e,n){if(!(e instanceof Bn))return 0;let a=0,[l,c,u,f]=n>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;l+=n,c+=n){if(l==u||c==f)return a;let h=this.children[l],p=e.children[c];if(h!=p)return a+h.scanIdentical(p,n);a+=h.length+1}}static from(e,n=e.reduce((a,l)=>a+l.length+1,-1)){let a=0;for(let S of e)a+=S.lines;if(a<32){let S=[];for(let k of e)k.flatten(S);return new ot(S,n)}let l=Math.max(32,a>>5),c=l<<1,u=l>>1,f=[],h=0,p=-1,g=[];function b(S){let k;if(S.lines>c&&S instanceof Bn)for(let A of S.children)b(A);else S.lines>u&&(h>u||!h)?(x(),f.push(S)):S instanceof ot&&h&&(k=g[g.length-1])instanceof ot&&S.lines+k.lines<=32?(h+=S.lines,p+=S.length+1,g[g.length-1]=new ot(k.text.concat(S.text),k.length+1+S.length)):(h+S.lines>l&&x(),h+=S.lines,p+=S.length+1,g.push(S))}function x(){h!=0&&(f.push(g.length==1?g[0]:Bn.from(g,p)),p=-1,h=g.length=0)}for(let S of e)b(S);return x(),f.length==1?f[0]:new Bn(f,n)}}Be.empty=new ot([""],0);function bS(i){let e=-1;for(let n of i)e+=n.length+1;return e}function Ko(i,e,n=0,a=1e9){for(let l=0,c=0,u=!0;c<i.length&&l<=a;c++){let f=i[c],h=l+f.length;h>=n&&(h>a&&(f=f.slice(0,a-l)),l<n&&(f=f.slice(n-l)),u?(e[e.length-1]+=f,u=!1):e.push(f)),l=h+1}return e}function n0(i,e,n){return Ko(i,[""],e,n)}class Xr{constructor(e,n=1){this.dir=n,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[n>0?1:(e instanceof ot?e.text.length:e.children.length)<<1]}nextInner(e,n){for(this.done=this.lineBreak=!1;;){let a=this.nodes.length-1,l=this.nodes[a],c=this.offsets[a],u=c>>1,f=l instanceof ot?l.text.length:l.children.length;if(u==(n>0?f:0)){if(a==0)return this.done=!0,this.value="",this;n>0&&this.offsets[a-1]++,this.nodes.pop(),this.offsets.pop()}else if((c&1)==(n>0?0:1)){if(this.offsets[a]+=n,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(l instanceof ot){let h=l.text[u+(n<0?-1:0)];if(this.offsets[a]+=n,h.length>Math.max(0,e))return this.value=e==0?h:n>0?h.slice(e):h.slice(0,h.length-e),this;e-=h.length}else{let h=l.children[u+(n<0?-1:0)];e>h.length?(e-=h.length,this.offsets[a]+=n):(n<0&&this.offsets[a]--,this.nodes.push(h),this.offsets.push(n>0?1:(h instanceof ot?h.text.length:h.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Cb{constructor(e,n,a){this.value="",this.done=!1,this.cursor=new Xr(e,n>a?-1:1),this.pos=n>a?e.length:0,this.from=Math.min(n,a),this.to=Math.max(n,a)}nextInner(e,n){if(n<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,n<0?this.pos-this.to:this.from-this.pos);let a=n<0?this.pos-this.from:this.to-this.pos;e>a&&(e=a),a-=e;let{value:l}=this.cursor.next(e);return this.pos+=(l.length+e)*n,this.value=l.length<=a?l:n<0?l.slice(l.length-a):l.slice(0,a),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Ob{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:n,lineBreak:a,value:l}=this.inner.next(e);return n&&this.afterBreak?(this.value="",this.afterBreak=!1):n?(this.done=!0,this.value=""):a?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=l,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(Be.prototype[Symbol.iterator]=function(){return this.iter()},Xr.prototype[Symbol.iterator]=Cb.prototype[Symbol.iterator]=Ob.prototype[Symbol.iterator]=function(){return this});class vS{constructor(e,n,a,l){this.from=e,this.to=n,this.number=a,this.text=l}get length(){return this.to-this.from}}function Na(i,e,n){return e=Math.max(0,Math.min(i.length,e)),[e,Math.max(e,Math.min(i.length,n))]}function _n(i,e,n=!0,a=!0){return gS(i,e,n,a)}function xS(i){return i>=56320&&i<57344}function wS(i){return i>=55296&&i<56320}function SS(i,e){let n=i.charCodeAt(e);if(!wS(n)||e+1==i.length)return n;let a=i.charCodeAt(e+1);return xS(a)?(n-55296<<10)+(a-56320)+65536:n}function kS(i){return i<65536?1:2}const jd=/\r\n?|\n/;var on=(function(i){return i[i.Simple=0]="Simple",i[i.TrackDel=1]="TrackDel",i[i.TrackBefore=2]="TrackBefore",i[i.TrackAfter=3]="TrackAfter",i})(on||(on={}));class oi{constructor(e){this.sections=e}get length(){let e=0;for(let n=0;n<this.sections.length;n+=2)e+=this.sections[n];return e}get newLength(){let e=0;for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n+1];e+=a<0?this.sections[n]:a}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let n=0,a=0,l=0;n<this.sections.length;){let c=this.sections[n++],u=this.sections[n++];u<0?(e(a,l,c),l+=c):l+=u,a+=c}}iterChangedRanges(e,n=!1){Nd(this,e,n)}get invertedDesc(){let e=[];for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];l<0?e.push(a,l):e.push(l,a)}return new oi(e)}composeDesc(e){return this.empty?e:e.empty?this:jb(this,e)}mapDesc(e,n=!1){return e.empty?this:Dd(this,e,n)}mapPos(e,n=-1,a=on.Simple){let l=0,c=0;for(let u=0;u<this.sections.length;){let f=this.sections[u++],h=this.sections[u++],p=l+f;if(h<0){if(p>e)return c+(e-l);c+=f}else{if(a!=on.Simple&&p>=e&&(a==on.TrackDel&&l<e&&p>e||a==on.TrackBefore&&l<e||a==on.TrackAfter&&p>e))return null;if(p>e||p==e&&n<0&&!f)return e==l||n<0?c:c+h;c+=h}l=p}if(e>l)throw new RangeError(`Position ${e} is out of range for changeset of length ${l}`);return c}touchesRange(e,n=e){for(let a=0,l=0;a<this.sections.length&&l<=n;){let c=this.sections[a++],u=this.sections[a++],f=l+c;if(u>=0&&l<=n&&f>=e)return l<e&&f>n?"cover":!0;l=f}return!1}toString(){let e="";for(let n=0;n<this.sections.length;){let a=this.sections[n++],l=this.sections[n++];e+=(e?" ":"")+a+(l>=0?":"+l:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(n=>typeof n!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new oi(e)}static create(e){return new oi(e)}}class At extends oi{constructor(e,n){super(e),this.inserted=n}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Nd(this,(n,a,l,c,u)=>e=e.replace(l,l+(a-n),u),!1),e}mapDesc(e,n=!1){return Dd(this,e,n,!0)}invert(e){let n=this.sections.slice(),a=[];for(let l=0,c=0;l<n.length;l+=2){let u=n[l],f=n[l+1];if(f>=0){n[l]=f,n[l+1]=u;let h=l>>1;for(;a.length<h;)a.push(Be.empty);a.push(u?e.slice(c,c+u):Be.empty)}c+=u}return new At(n,a)}compose(e){return this.empty?e:e.empty?this:jb(this,e,!0)}map(e,n=!1){return e.empty?this:Dd(this,e,n,!0)}iterChanges(e,n=!1){Nd(this,e,n)}get desc(){return oi.create(this.sections)}filter(e){let n=[],a=[],l=[],c=new el(this);e:for(let u=0,f=0;;){let h=u==e.length?1e9:e[u++];for(;f<h||f==h&&c.len==0;){if(c.done)break e;let g=Math.min(c.len,h-f);Bt(l,g,-1);let b=c.ins==-1?-1:c.off==0?c.ins:0;Bt(n,g,b),b>0&&Gi(a,n,c.text),c.forward(g),f+=g}let p=e[u++];for(;f<p;){if(c.done)break e;let g=Math.min(c.len,p-f);Bt(n,g,-1),Bt(l,g,c.ins==-1?-1:c.off==0?c.ins:0),c.forward(g),f+=g}}return{changes:new At(n,a),filtered:oi.create(l)}}toJSON(){let e=[];for(let n=0;n<this.sections.length;n+=2){let a=this.sections[n],l=this.sections[n+1];l<0?e.push(a):l==0?e.push([a]):e.push([a].concat(this.inserted[n>>1].toJSON()))}return e}static of(e,n,a){let l=[],c=[],u=0,f=null;function h(g=!1){if(!g&&!l.length)return;u<n&&Bt(l,n-u,-1);let b=new At(l,c);f=f?f.compose(b.map(f)):b,l=[],c=[],u=0}function p(g){if(Array.isArray(g))for(let b of g)p(b);else if(g instanceof At){if(g.length!=n)throw new RangeError(`Mismatched change set length (got ${g.length}, expected ${n})`);h(),f=f?f.compose(g.map(f)):g}else{let{from:b,to:x=b,insert:S}=g;if(b>x||b<0||x>n)throw new RangeError(`Invalid change range ${b} to ${x} (in doc of length ${n})`);let k=S?typeof S=="string"?Be.of(S.split(a||jd)):S:Be.empty,A=k.length;if(b==x&&A==0)return;b<u&&h(),b>u&&Bt(l,b-u,-1),Bt(l,x-b,A),Gi(c,l,k),u=x}}return p(e),h(!f),f}static empty(e){return new At(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let n=[],a=[];for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="number")n.push(c,-1);else{if(!Array.isArray(c)||typeof c[0]!="number"||c.some((u,f)=>f&&typeof u!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(c.length==1)n.push(c[0],0);else{for(;a.length<l;)a.push(Be.empty);a[l]=Be.of(c.slice(1)),n.push(c[0],a[l].length)}}}return new At(n,a)}static createSet(e,n){return new At(e,n)}}function Bt(i,e,n,a=!1){if(e==0&&n<=0)return;let l=i.length-2;l>=0&&n<=0&&n==i[l+1]?i[l]+=e:l>=0&&e==0&&i[l]==0?i[l+1]+=n:a?(i[l]+=e,i[l+1]+=n):i.push(e,n)}function Gi(i,e,n){if(n.length==0)return;let a=e.length-2>>1;if(a<i.length)i[i.length-1]=i[i.length-1].append(n);else{for(;i.length<a;)i.push(Be.empty);i.push(n)}}function Nd(i,e,n){let a=i.inserted;for(let l=0,c=0,u=0;u<i.sections.length;){let f=i.sections[u++],h=i.sections[u++];if(h<0)l+=f,c+=f;else{let p=l,g=c,b=Be.empty;for(;p+=f,g+=h,h&&a&&(b=b.append(a[u-2>>1])),!(n||u==i.sections.length||i.sections[u+1]<0);)f=i.sections[u++],h=i.sections[u++];e(l,p,c,g,b),l=p,c=g}}}function Dd(i,e,n,a=!1){let l=[],c=a?[]:null,u=new el(i),f=new el(e);for(let h=-1;;){if(u.done&&f.len||f.done&&u.len)throw new Error("Mismatched change set lengths");if(u.ins==-1&&f.ins==-1){let p=Math.min(u.len,f.len);Bt(l,p,-1),u.forward(p),f.forward(p)}else if(f.ins>=0&&(u.ins<0||h==u.i||u.off==0&&(f.len<u.len||f.len==u.len&&!n))){let p=f.len;for(Bt(l,f.ins,-1);p;){let g=Math.min(u.len,p);u.ins>=0&&h<u.i&&u.len<=g&&(Bt(l,0,u.ins),c&&Gi(c,l,u.text),h=u.i),u.forward(g),p-=g}f.next()}else if(u.ins>=0){let p=0,g=u.len;for(;g;)if(f.ins==-1){let b=Math.min(g,f.len);p+=b,g-=b,f.forward(b)}else if(f.ins==0&&f.len<g)g-=f.len,f.next();else break;Bt(l,p,h<u.i?u.ins:0),c&&h<u.i&&Gi(c,l,u.text),h=u.i,u.forward(u.len-g)}else{if(u.done&&f.done)return c?At.createSet(l,c):oi.create(l);throw new Error("Mismatched change set lengths")}}}function jb(i,e,n=!1){let a=[],l=n?[]:null,c=new el(i),u=new el(e);for(let f=!1;;){if(c.done&&u.done)return l?At.createSet(a,l):oi.create(a);if(c.ins==0)Bt(a,c.len,0,f),c.next();else if(u.len==0&&!u.done)Bt(a,0,u.ins,f),l&&Gi(l,a,u.text),u.next();else{if(c.done||u.done)throw new Error("Mismatched change set lengths");{let h=Math.min(c.len2,u.len),p=a.length;if(c.ins==-1){let g=u.ins==-1?-1:u.off?0:u.ins;Bt(a,h,g,f),l&&g&&Gi(l,a,u.text)}else u.ins==-1?(Bt(a,c.off?0:c.len,h,f),l&&Gi(l,a,c.textBit(h))):(Bt(a,c.off?0:c.len,u.off?0:u.ins,f),l&&!u.off&&Gi(l,a,u.text));f=(c.ins>h||u.ins>=0&&u.len>h)&&(f||a.length>p),c.forward2(h),u.forward(h)}}}}class el{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,n=this.i-2>>1;return n>=e.length?Be.empty:e[n]}textBit(e){let{inserted:n}=this.set,a=this.i-2>>1;return a>=n.length&&!e?Be.empty:n[a].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class As{constructor(e,n,a){this.from=e,this.to=n,this.flags=a}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,n=-1){let a,l;return this.empty?a=l=e.mapPos(this.from,n):(a=e.mapPos(this.from,1),l=e.mapPos(this.to,-1)),a==this.from&&l==this.to?this:new As(a,l,this.flags)}extend(e,n=e,a=0){if(e<=this.anchor&&n>=this.anchor)return J.range(e,n,void 0,void 0,a);let l=Math.abs(e-this.anchor)>Math.abs(n-this.anchor)?e:n;return J.range(this.anchor,l,void 0,void 0,a)}eq(e,n=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!n||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return J.range(e.anchor,e.head)}static create(e,n,a){return new As(e,n,a)}}class J{constructor(e,n){this.ranges=e,this.mainIndex=n}map(e,n=-1){return e.empty?this:J.create(this.ranges.map(a=>a.map(e,n)),this.mainIndex)}eq(e,n=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let a=0;a<this.ranges.length;a++)if(!this.ranges[a].eq(e.ranges[a],n))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new J([this.main],0)}addRange(e,n=!0){return J.create([e].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(e,n=this.mainIndex){let a=this.ranges.slice();return a[n]=e,J.create(a,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new J(e.ranges.map(n=>As.fromJSON(n)),e.main)}static single(e,n=e){return new J([J.range(e,n)],0)}static create(e,n=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let a=0,l=0;l<e.length;l++){let c=e[l];if(c.empty?c.from<=a:c.from<a)return J.normalized(e.slice(),n);a=c.to}return new J(e,n)}static cursor(e,n=0,a,l){return As.create(e,e,(n==0?0:n<0?8:16)|(a==null?7:Math.min(6,a))|(l??16777215)<<6)}static range(e,n,a,l,c){let u=(a??16777215)<<6|(l==null?7:Math.min(6,l));return!c&&e!=n&&(c=n<e?1:-1),n<e?As.create(n,e,48|u):As.create(e,n,(c?c<0?8:16:0)|u)}static normalized(e,n=0){let a=e[n];e.sort((l,c)=>l.from-c.from),n=e.indexOf(a);for(let l=1;l<e.length;l++){let c=e[l],u=e[l-1];if(c.empty?c.from<=u.to:c.from<u.to){let f=u.from,h=Math.max(c.to,u.to);l<=n&&n--,e.splice(--l,2,c.anchor>c.head?J.range(h,f):J.range(f,h))}}return new J(e,n)}}function Nb(i,e){for(let n of i.ranges)if(n.to>e)throw new RangeError("Selection points outside of document")}let yh=0;class ue{constructor(e,n,a,l,c){this.combine=e,this.compareInput=n,this.compare=a,this.isStatic=l,this.id=yh++,this.default=e([]),this.extensions=typeof c=="function"?c(this):c}get reader(){return this}static define(e={}){return new ue(e.combine||(n=>n),e.compareInput||((n,a)=>n===a),e.compare||(e.combine?(n,a)=>n===a:bh),!!e.static,e.enables)}of(e){return new Wo([],this,0,e)}compute(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,1,n)}computeN(e,n){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,2,n)}from(e,n){return n||(n=a=>a),this.compute([e],a=>n(a.field(e)))}}function bh(i,e){return i==e||i.length==e.length&&i.every((n,a)=>n===e[a])}class Wo{constructor(e,n,a,l){this.dependencies=e,this.facet=n,this.type=a,this.value=l,this.id=yh++}dynamicSlot(e){var n;let a=this.value,l=this.facet.compareInput,c=this.id,u=e[c]>>1,f=this.type==2,h=!1,p=!1,g=[];for(let b of this.dependencies)b=="doc"?h=!0:b=="selection"?p=!0:(((n=e[b.id])!==null&&n!==void 0?n:1)&1)==0&&g.push(e[b.id]);return{create(b){return b.values[u]=a(b),1},update(b,x){if(h&&x.docChanged||p&&(x.docChanged||x.selection)||zd(b,g)){let S=a(b);if(f?!i0(S,b.values[u],l):!l(S,b.values[u]))return b.values[u]=S,1}return 0},reconfigure:(b,x)=>{let S,k=x.config.address[c];if(k!=null){let A=Io(x,k);if(this.dependencies.every(M=>M instanceof ue?x.facet(M)===b.facet(M):M instanceof Zi?x.field(M,!1)==b.field(M,!1):!0)||(f?i0(S=a(b),A,l):l(S=a(b),A)))return b.values[u]=A,0}else S=a(b);return b.values[u]=S,1}}}}function i0(i,e,n){if(i.length!=e.length)return!1;for(let a=0;a<i.length;a++)if(!n(i[a],e[a]))return!1;return!0}function zd(i,e){let n=!1;for(let a of e)Qr(i,a)&1&&(n=!0);return n}function AS(i,e,n){let a=n.map(h=>i[h.id]),l=n.map(h=>h.type),c=a.filter(h=>!(h&1)),u=i[e.id]>>1;function f(h){let p=[];for(let g=0;g<a.length;g++){let b=Io(h,a[g]);if(l[g]==2)for(let x of b)p.push(x);else p.push(b)}return e.combine(p)}return{create(h){for(let p of a)Qr(h,p);return h.values[u]=f(h),1},update(h,p){if(!zd(h,c))return 0;let g=f(h);return e.compare(g,h.values[u])?0:(h.values[u]=g,1)},reconfigure(h,p){let g=zd(h,a),b=p.config.facets[e.id],x=p.facet(e);if(b&&!g&&bh(n,b))return h.values[u]=x,0;let S=f(h);return e.compare(S,x)?(h.values[u]=x,0):(h.values[u]=S,1)}}}const Oo=ue.define({static:!0});class Zi{constructor(e,n,a,l,c){this.id=e,this.createF=n,this.updateF=a,this.compareF=l,this.spec=c,this.provides=void 0}static define(e){let n=new Zi(yh++,e.create,e.update,e.compare||((a,l)=>a===l),e);return e.provide&&(n.provides=e.provide(n)),n}create(e){let n=e.facet(Oo).find(a=>a.field==this);return(n?.create||this.createF)(e)}slot(e){let n=e[this.id]>>1;return{create:a=>(a.values[n]=this.create(a),1),update:(a,l)=>{let c=a.values[n],u=this.updateF(c,l);return this.compareF(c,u)?0:(a.values[n]=u,1)},reconfigure:(a,l)=>{let c=a.facet(Oo),u=l.facet(Oo),f;return(f=c.find(h=>h.field==this))&&f!=u.find(h=>h.field==this)?(a.values[n]=f.create(a),1):l.config.address[this.id]!=null?(a.values[n]=l.field(this),0):(a.values[n]=this.create(a),1)}}}init(e){return[this,Oo.of({field:this,create:e})]}get extension(){return this}}const Ss={lowest:4,low:3,default:2,high:1,highest:0};function Hr(i){return e=>new Db(e,i)}const vh={highest:Hr(Ss.highest),high:Hr(Ss.high),default:Hr(Ss.default),low:Hr(Ss.low),lowest:Hr(Ss.lowest)};class Db{constructor(e,n){this.inner=e,this.prec=n}}class vc{of(e){return new Bd(this,e)}reconfigure(e){return vc.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class Bd{constructor(e,n){this.compartment=e,this.inner=n}}class Jo{constructor(e,n,a,l,c,u){for(this.base=e,this.compartments=n,this.dynamicSlots=a,this.address=l,this.staticValues=c,this.facets=u,this.statusTemplate=[];this.statusTemplate.length<a.length;)this.statusTemplate.push(0)}staticFacet(e){let n=this.address[e.id];return n==null?e.default:this.staticValues[n>>1]}static resolve(e,n,a){let l=[],c=Object.create(null),u=new Map;for(let x of TS(e,n,u))x instanceof Zi?l.push(x):(c[x.facet.id]||(c[x.facet.id]=[])).push(x);let f=Object.create(null),h=[],p=[];for(let x of l)f[x.id]=p.length<<1,p.push(S=>x.slot(S));let g=a?.config.facets;for(let x in c){let S=c[x],k=S[0].facet,A=g&&g[x]||[];if(S.every(M=>M.type==0))if(f[k.id]=h.length<<1|1,bh(A,S))h.push(a.facet(k));else{let M=k.combine(S.map(_=>_.value));h.push(a&&k.compare(M,a.facet(k))?a.facet(k):M)}else{for(let M of S)M.type==0?(f[M.id]=h.length<<1|1,h.push(M.value)):(f[M.id]=p.length<<1,p.push(_=>M.dynamicSlot(_)));f[k.id]=p.length<<1,p.push(M=>AS(M,k,S))}}let b=p.map(x=>x(f));return new Jo(e,u,b,f,h,c)}}function TS(i,e,n){let a=[[],[],[],[],[]],l=new Map;function c(u,f){let h=l.get(u);if(h!=null){if(h<=f)return;let p=a[h].indexOf(u);p>-1&&a[h].splice(p,1),u instanceof Bd&&n.delete(u.compartment)}if(l.set(u,f),Array.isArray(u))for(let p of u)c(p,f);else if(u instanceof Bd){if(n.has(u.compartment))throw new RangeError("Duplicate use of compartment in extensions");let p=e.get(u.compartment)||u.inner;n.set(u.compartment,p),c(p,f)}else if(u instanceof Db)c(u.inner,u.prec);else if(u instanceof Zi)a[f].push(u),u.provides&&c(u.provides,f);else if(u instanceof Wo)a[f].push(u),u.facet.extensions&&c(u.facet.extensions,Ss.default);else{let p=u.extension;if(!p)throw new Error(`Unrecognized extension value in extension set (${u}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);c(p,f)}}return c(i,Ss.default),a.reduce((u,f)=>u.concat(f))}function Qr(i,e){if(e&1)return 2;let n=e>>1,a=i.status[n];if(a==4)throw new Error("Cyclic dependency between fields and/or facets");if(a&2)return a;i.status[n]=4;let l=i.computeSlot(i,i.config.dynamicSlots[n]);return i.status[n]=2|l}function Io(i,e){return e&1?i.config.staticValues[e>>1]:i.values[e>>1]}const zb=ue.define(),Ld=ue.define({combine:i=>i.some(e=>e),static:!0}),Bb=ue.define({combine:i=>i.length?i[0]:void 0,static:!0}),Lb=ue.define(),_b=ue.define(),Hb=ue.define(),qb=ue.define({combine:i=>i.length?i[0]:!1});class Ua{constructor(e,n){this.type=e,this.value=n}static define(){return new ES}}class ES{of(e){return new Ua(this,e)}}class RS{constructor(e){this.map=e}of(e){return new gt(this,e)}}class gt{constructor(e,n){this.type=e,this.value=n}map(e){let n=this.type.map(this.value,e);return n===void 0?void 0:n==this.value?this:new gt(this.type,n)}is(e){return this.type==e}static define(e={}){return new RS(e.map||(n=>n))}static mapEffects(e,n){if(!e.length)return e;let a=[];for(let l of e){let c=l.map(n);c&&a.push(c)}return a}}gt.reconfigure=gt.define();gt.appendConfig=gt.define();class Lt{constructor(e,n,a,l,c,u){this.startState=e,this.changes=n,this.selection=a,this.effects=l,this.annotations=c,this.scrollIntoView=u,this._doc=null,this._state=null,a&&Nb(a,n.newLength),c.some(f=>f.type==Lt.time)||(this.annotations=c.concat(Lt.time.of(Date.now())))}static create(e,n,a,l,c,u){return new Lt(e,n,a,l,c,u)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let n of this.annotations)if(n.type==e)return n.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let n=this.annotation(Lt.userEvent);return!!(n&&(n==e||n.length>e.length&&n.slice(0,e.length)==e&&n[e.length]=="."))}}Lt.time=Ua.define();Lt.userEvent=Ua.define();Lt.addToHistory=Ua.define();Lt.remote=Ua.define();function MS(i,e){let n=[];for(let a=0,l=0;;){let c,u;if(a<i.length&&(l==e.length||e[l]>=i[a]))c=i[a++],u=i[a++];else if(l<e.length)c=e[l++],u=e[l++];else return n;!n.length||n[n.length-1]<c?n.push(c,u):n[n.length-1]<u&&(n[n.length-1]=u)}}function Ub(i,e,n){var a;let l,c,u;return n?(l=e.changes,c=At.empty(e.changes.length),u=i.changes.compose(e.changes)):(l=e.changes.map(i.changes),c=i.changes.mapDesc(e.changes,!0),u=i.changes.compose(l)),{changes:u,selection:e.selection?e.selection.map(c):(a=i.selection)===null||a===void 0?void 0:a.map(l),effects:gt.mapEffects(i.effects,l).concat(gt.mapEffects(e.effects,c)),annotations:i.annotations.length?i.annotations.concat(e.annotations):e.annotations,scrollIntoView:i.scrollIntoView||e.scrollIntoView}}function _d(i,e,n){let a=e.selection,l=Ma(e.annotations);return e.userEvent&&(l=l.concat(Lt.userEvent.of(e.userEvent))),{changes:e.changes instanceof At?e.changes:At.of(e.changes||[],n,i.facet(Bb)),selection:a&&(a instanceof J?a:J.single(a.anchor,a.head)),effects:Ma(e.effects),annotations:l,scrollIntoView:!!e.scrollIntoView}}function Vb(i,e,n){let a=_d(i,e.length?e[0]:{},i.doc.length);e.length&&e[0].filter===!1&&(n=!1);for(let c=1;c<e.length;c++){e[c].filter===!1&&(n=!1);let u=!!e[c].sequential;a=Ub(a,_d(i,e[c],u?a.changes.newLength:i.doc.length),u)}let l=Lt.create(i,a.changes,a.selection,a.effects,a.annotations,a.scrollIntoView);return OS(n?CS(l):l)}function CS(i){let e=i.startState,n=!0;for(let l of e.facet(Lb)){let c=l(i);if(c===!1){n=!1;break}Array.isArray(c)&&(n=n===!0?c:MS(n,c))}if(n!==!0){let l,c;if(n===!1)c=i.changes.invertedDesc,l=At.empty(e.doc.length);else{let u=i.changes.filter(n);l=u.changes,c=u.filtered.mapDesc(u.changes).invertedDesc}i=Lt.create(e,l,i.selection&&i.selection.map(c),gt.mapEffects(i.effects,c),i.annotations,i.scrollIntoView)}let a=e.facet(_b);for(let l=a.length-1;l>=0;l--){let c=a[l](i);c instanceof Lt?i=c:Array.isArray(c)&&c.length==1&&c[0]instanceof Lt?i=c[0]:i=Vb(e,Ma(c),!1)}return i}function OS(i){let e=i.startState,n=e.facet(Hb),a=i;for(let l=n.length-1;l>=0;l--){let c=n[l](i);c&&Object.keys(c).length&&(a=Ub(a,_d(e,c,i.changes.newLength),!0))}return a==i?i:Lt.create(e,i.changes,i.selection,a.effects,a.annotations,a.scrollIntoView)}const jS=[];function Ma(i){return i==null?jS:Array.isArray(i)?i:[i]}var ri=(function(i){return i[i.Word=0]="Word",i[i.Space=1]="Space",i[i.Other=2]="Other",i})(ri||(ri={}));const NS=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let Hd;try{Hd=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function DS(i){if(Hd)return Hd.test(i);for(let e=0;e<i.length;e++){let n=i[e];if(/\w/.test(n)||n>""&&(n.toUpperCase()!=n.toLowerCase()||NS.test(n)))return!0}return!1}function zS(i){return e=>{if(!/\S/.test(e))return ri.Space;if(DS(e))return ri.Word;for(let n=0;n<i.length;n++)if(e.indexOf(i[n])>-1)return ri.Word;return ri.Other}}class Ye{constructor(e,n,a,l,c,u){this.config=e,this.doc=n,this.selection=a,this.values=l,this.status=e.statusTemplate.slice(),this.computeSlot=c,u&&(u._state=this);for(let f=0;f<this.config.dynamicSlots.length;f++)Qr(this,f<<1);this.computeSlot=null}field(e,n=!0){let a=this.config.address[e.id];if(a==null){if(n)throw new RangeError("Field is not present in this state");return}return Qr(this,a),Io(this,a)}update(...e){return Vb(this,e,!0)}applyTransaction(e){let n=this.config,{base:a,compartments:l}=n;for(let f of e.effects)f.is(vc.reconfigure)?(n&&(l=new Map,n.compartments.forEach((h,p)=>l.set(p,h)),n=null),l.set(f.value.compartment,f.value.extension)):f.is(gt.reconfigure)?(n=null,a=f.value):f.is(gt.appendConfig)&&(n=null,a=Ma(a).concat(f.value));let c;n?c=e.startState.values.slice():(n=Jo.resolve(a,l,this),c=new Ye(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(h,p)=>p.reconfigure(h,this),null).values);let u=e.startState.facet(Ld)?e.newSelection:e.newSelection.asSingle();new Ye(n,e.newDoc,u,c,(f,h)=>h.update(f,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:e},range:J.cursor(n.from+e.length)}))}changeByRange(e){let n=this.selection,a=e(n.ranges[0]),l=this.changes(a.changes),c=[a.range],u=Ma(a.effects);for(let f=1;f<n.ranges.length;f++){let h=e(n.ranges[f]),p=this.changes(h.changes),g=p.map(l);for(let x=0;x<f;x++)c[x]=c[x].map(g);let b=l.mapDesc(p,!0);c.push(h.range.map(b)),l=l.compose(g),u=gt.mapEffects(u,g).concat(gt.mapEffects(Ma(h.effects),b))}return{changes:l,selection:J.create(c,n.mainIndex),effects:u}}changes(e=[]){return e instanceof At?e:At.of(e,this.doc.length,this.facet(Ye.lineSeparator))}toText(e){return Be.of(e.split(this.facet(Ye.lineSeparator)||jd))}sliceDoc(e=0,n=this.doc.length){return this.doc.sliceString(e,n,this.lineBreak)}facet(e){let n=this.config.address[e.id];return n==null?e.default:(Qr(this,n),Io(this,n))}toJSON(e){let n={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let a in e){let l=e[a];l instanceof Zi&&this.config.address[l.id]!=null&&(n[a]=l.spec.toJSON(this.field(e[a]),this))}return n}static fromJSON(e,n={},a){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let l=[];if(a){for(let c in a)if(Object.prototype.hasOwnProperty.call(e,c)){let u=a[c],f=e[c];l.push(u.init(h=>u.spec.fromJSON(f,h)))}}return Ye.create({doc:e.doc,selection:J.fromJSON(e.selection),extensions:n.extensions?l.concat([n.extensions]):l})}static create(e={}){let n=Jo.resolve(e.extensions||[],new Map),a=e.doc instanceof Be?e.doc:Be.of((e.doc||"").split(n.staticFacet(Ye.lineSeparator)||jd)),l=e.selection?e.selection instanceof J?e.selection:J.single(e.selection.anchor,e.selection.head):J.single(0);return Nb(l,a.length),n.staticFacet(Ld)||(l=l.asSingle()),new Ye(n,a,l,n.dynamicSlots.map(()=>null),(c,u)=>u.create(c),null)}get tabSize(){return this.facet(Ye.tabSize)}get lineBreak(){return this.facet(Ye.lineSeparator)||`
`}get readOnly(){return this.facet(qb)}phrase(e,...n){for(let a of this.facet(Ye.phrases))if(Object.prototype.hasOwnProperty.call(a,e)){e=a[e];break}return n.length&&(e=e.replace(/\$(\$|\d*)/g,(a,l)=>{if(l=="$")return"$";let c=+(l||1);return!c||c>n.length?a:n[c-1]})),e}languageDataAt(e,n,a=-1){let l=[];for(let c of this.facet(zb))for(let u of c(this,n,a))Object.prototype.hasOwnProperty.call(u,e)&&l.push(u[e]);return l}charCategorizer(e){let n=this.languageDataAt("wordChars",e);return zS(n.length?n[0]:"")}wordAt(e){let{text:n,from:a,length:l}=this.doc.lineAt(e),c=this.charCategorizer(e),u=e-a,f=e-a;for(;u>0;){let h=_n(n,u,!1);if(c(n.slice(h,u))!=ri.Word)break;u=h}for(;f<l;){let h=_n(n,f);if(c(n.slice(f,h))!=ri.Word)break;f=h}return u==f?null:J.range(u+a,f+a)}}Ye.allowMultipleSelections=Ld;Ye.tabSize=ue.define({combine:i=>i.length?i[0]:4});Ye.lineSeparator=Bb;Ye.readOnly=qb;Ye.phrases=ue.define({compare(i,e){let n=Object.keys(i),a=Object.keys(e);return n.length==a.length&&n.every(l=>i[l]==e[l])}});Ye.languageData=zb;Ye.changeFilter=Lb;Ye.transactionFilter=_b;Ye.transactionExtender=Hb;vc.reconfigure=gt.define();function Gb(i,e,n={}){let a={};for(let l of i)for(let c of Object.keys(l)){let u=l[c],f=a[c];if(f===void 0)a[c]=u;else if(!(f===u||u===void 0))if(Object.hasOwnProperty.call(n,c))a[c]=n[c](f,u);else throw new Error("Config merge conflict for field "+c)}for(let l in e)a[l]===void 0&&(a[l]=e[l]);return a}class Ms{eq(e){return this==e}range(e,n=e){return tl.create(e,n,this)}}Ms.prototype.startSide=Ms.prototype.endSide=0;Ms.prototype.point=!1;Ms.prototype.mapMode=on.TrackDel;function xh(i,e){return i==e||i.constructor==e.constructor&&i.eq(e)}class tl{constructor(e,n,a){this.from=e,this.to=n,this.value=a}static create(e,n,a){return new tl(e,n,a)}}function qd(i,e){return i.from-e.from||i.value.startSide-e.value.startSide}class wh{constructor(e,n,a,l){this.from=e,this.to=n,this.value=a,this.maxPoint=l}get length(){return this.to[this.to.length-1]}findIndex(e,n,a,l=0){let c=a?this.to:this.from;for(let u=l,f=c.length;;){if(u==f)return u;let h=u+f>>1,p=c[h]-e||(a?this.value[h].endSide:this.value[h].startSide)-n;if(h==u)return p>=0?u:f;p>=0?f=h:u=h+1}}between(e,n,a,l){for(let c=this.findIndex(n,-1e9,!0),u=this.findIndex(a,1e9,!1,c);c<u;c++)if(l(this.from[c]+e,this.to[c]+e,this.value[c])===!1)return!1}map(e,n){let a=[],l=[],c=[],u=-1,f=-1;for(let h=0;h<this.value.length;h++){let p=this.value[h],g=this.from[h]+e,b=this.to[h]+e,x,S;if(g==b){let k=n.mapPos(g,p.startSide,p.mapMode);if(k==null||(x=S=k,p.startSide!=p.endSide&&(S=n.mapPos(g,p.endSide),S<x)))continue}else if(x=n.mapPos(g,p.startSide),S=n.mapPos(b,p.endSide),x>S||x==S&&p.startSide>0&&p.endSide<=0)continue;(S-x||p.endSide-p.startSide)<0||(u<0&&(u=x),p.point&&(f=Math.max(f,S-x)),a.push(p),l.push(x-u),c.push(S-u))}return{mapped:a.length?new wh(l,c,a,f):null,pos:u}}}class Ce{constructor(e,n,a,l){this.chunkPos=e,this.chunk=n,this.nextLayer=a,this.maxPoint=l}static create(e,n,a,l){return new Ce(e,n,a,l)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let n of this.chunk)e+=n.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:n=[],sort:a=!1,filterFrom:l=0,filterTo:c=this.length}=e,u=e.filter;if(n.length==0&&!u)return this;if(a&&(n=n.slice().sort(qd)),this.isEmpty)return n.length?Ce.of(n):this;let f=new $b(this,null,-1).goto(0),h=0,p=[],g=new ec;for(;f.value||h<n.length;)if(h<n.length&&(f.from-n[h].from||f.startSide-n[h].value.startSide)>=0){let b=n[h++];g.addInner(b.from,b.to,b.value)||p.push(b)}else f.rangeIndex==1&&f.chunkIndex<this.chunk.length&&(h==n.length||this.chunkEnd(f.chunkIndex)<n[h].from)&&(!u||l>this.chunkEnd(f.chunkIndex)||c<this.chunkPos[f.chunkIndex])&&g.addChunk(this.chunkPos[f.chunkIndex],this.chunk[f.chunkIndex])?f.nextChunk():((!u||l>f.to||c<f.from||u(f.from,f.to,f.value))&&(g.addInner(f.from,f.to,f.value)||p.push(tl.create(f.from,f.to,f.value))),f.next());return g.finishInner(this.nextLayer.isEmpty&&!p.length?Ce.empty:this.nextLayer.update({add:p,filter:u,filterFrom:l,filterTo:c}))}map(e){if(e.empty||this.isEmpty)return this;let n=[],a=[],l=-1;for(let u=0;u<this.chunk.length;u++){let f=this.chunkPos[u],h=this.chunk[u],p=e.touchesRange(f,f+h.length);if(p===!1)l=Math.max(l,h.maxPoint),n.push(h),a.push(e.mapPos(f));else if(p===!0){let{mapped:g,pos:b}=h.map(f,e);g&&(l=Math.max(l,g.maxPoint),n.push(g),a.push(b))}}let c=this.nextLayer.map(e);return n.length==0?c:new Ce(a,n,c||Ce.empty,l)}between(e,n,a){if(!this.isEmpty){for(let l=0;l<this.chunk.length;l++){let c=this.chunkPos[l],u=this.chunk[l];if(n>=c&&e<=c+u.length&&u.between(c,e-c,n-c,a)===!1)return}this.nextLayer.between(e,n,a)}}iter(e=0){return nl.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,n=0){return nl.from(e).goto(n)}static compare(e,n,a,l,c=-1){let u=e.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),f=n.filter(b=>b.maxPoint>0||!b.isEmpty&&b.maxPoint>=c),h=s0(u,f,a),p=new qr(u,h,c),g=new qr(f,h,c);a.iterGaps((b,x,S)=>a0(p,b,g,x,S,l)),a.empty&&a.length==0&&a0(p,0,g,0,0,l)}static eq(e,n,a=0,l){l==null&&(l=999999999);let c=e.filter(g=>!g.isEmpty&&n.indexOf(g)<0),u=n.filter(g=>!g.isEmpty&&e.indexOf(g)<0);if(c.length!=u.length)return!1;if(!c.length)return!0;let f=s0(c,u),h=new qr(c,f,0).goto(a),p=new qr(u,f,0).goto(a);for(;;){if(h.to!=p.to||!Ud(h.active,p.active)||h.point&&(!p.point||!xh(h.point,p.point)))return!1;if(h.to>l)return!0;h.next(),p.next()}}static spans(e,n,a,l,c=-1){let u=new qr(e,null,c).goto(n),f=n,h=u.openStart;for(;;){let p=Math.min(u.to,a);if(u.point){let g=u.activeForPoint(u.to),b=u.pointFrom<n?g.length+1:u.point.startSide<0?g.length:Math.min(g.length,h);l.point(f,p,u.point,g,b,u.pointRank),h=Math.min(u.openEnd(p),g.length)}else p>f&&(l.span(f,p,u.active,h),h=u.openEnd(p));if(u.to>a)return h+(u.point&&u.to>a?1:0);f=u.to,u.next()}}static of(e,n=!1){let a=new ec;for(let l of e instanceof tl?[e]:n?BS(e):e)a.add(l.from,l.to,l.value);return a.finish()}static join(e){if(!e.length)return Ce.empty;let n=e[e.length-1];for(let a=e.length-2;a>=0;a--)for(let l=e[a];l!=Ce.empty;l=l.nextLayer)n=new Ce(l.chunkPos,l.chunk,n,Math.max(l.maxPoint,n.maxPoint));return n}}Ce.empty=new Ce([],[],null,-1);function BS(i){if(i.length>1)for(let e=i[0],n=1;n<i.length;n++){let a=i[n];if(qd(e,a)>0)return i.slice().sort(qd);e=a}return i}Ce.empty.nextLayer=Ce.empty;class ec{finishChunk(e){this.chunks.push(new wh(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,n,a){this.addInner(e,n,a)||(this.nextLayer||(this.nextLayer=new ec)).add(e,n,a)}addInner(e,n,a){let l=e-this.lastTo||a.startSide-this.last.endSide;if(l<=0&&(e-this.lastFrom||a.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return l<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(n-this.chunkStart),this.last=a,this.lastFrom=e,this.lastTo=n,this.value.push(a),a.point&&(this.maxPoint=Math.max(this.maxPoint,n-e)),!0)}addChunk(e,n){if((e-this.lastTo||n.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,n.maxPoint),this.chunks.push(n),this.chunkPos.push(e);let a=n.value.length-1;return this.last=n.value[a],this.lastFrom=n.from[a]+e,this.lastTo=n.to[a]+e,!0}finish(){return this.finishInner(Ce.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let n=Ce.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,n}}function s0(i,e,n){let a=new Map;for(let c of i)for(let u=0;u<c.chunk.length;u++)c.chunk[u].maxPoint<=0&&a.set(c.chunk[u],c.chunkPos[u]);let l=new Set;for(let c of e)for(let u=0;u<c.chunk.length;u++){let f=a.get(c.chunk[u]);f!=null&&(n?n.mapPos(f):f)==c.chunkPos[u]&&!n?.touchesRange(f,f+c.chunk[u].length)&&l.add(c.chunk[u])}return l}class $b{constructor(e,n,a,l=0){this.layer=e,this.skip=n,this.minPoint=a,this.rank=l}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,n=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,n,!1),this}gotoInner(e,n,a){for(;this.chunkIndex<this.layer.chunk.length;){let l=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(l)||this.layer.chunkEnd(this.chunkIndex)<e||l.maxPoint<this.minPoint))break;this.chunkIndex++,a=!1}if(this.chunkIndex<this.layer.chunk.length){let l=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],n,!0);(!a||this.rangeIndex<l)&&this.setRangeIndex(l)}this.next()}forward(e,n){(this.to-e||this.endSide-n)<0&&this.gotoInner(e,n,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],n=this.layer.chunk[this.chunkIndex],a=e+n.from[this.rangeIndex];if(this.from=a,this.to=e+n.to[this.rangeIndex],this.value=n.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class nl{constructor(e){this.heap=e}static from(e,n=null,a=-1){let l=[];for(let c=0;c<e.length;c++)for(let u=e[c];!u.isEmpty;u=u.nextLayer)u.maxPoint>=a&&l.push(new $b(u,n,a,c));return l.length==1?l[0]:new nl(l)}get startSide(){return this.value?this.value.startSide:0}goto(e,n=-1e9){for(let a of this.heap)a.goto(e,n);for(let a=this.heap.length>>1;a>=0;a--)td(this.heap,a);return this.next(),this}forward(e,n){for(let a of this.heap)a.forward(e,n);for(let a=this.heap.length>>1;a>=0;a--)td(this.heap,a);(this.to-e||this.value.endSide-n)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),td(this.heap,0)}}}function td(i,e){for(let n=i[e];;){let a=(e<<1)+1;if(a>=i.length)break;let l=i[a];if(a+1<i.length&&l.compare(i[a+1])>=0&&(l=i[a+1],a++),n.compare(l)<0)break;i[a]=n,i[e]=l,e=a}}class qr{constructor(e,n,a){this.minPoint=a,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=nl.from(e,n,a)}goto(e,n=-1e9){return this.cursor.goto(e,n),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=n,this.openStart=-1,this.next(),this}forward(e,n){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-n)<0;)this.removeActive(this.minActive);this.cursor.forward(e,n)}removeActive(e){jo(this.active,e),jo(this.activeTo,e),jo(this.activeRank,e),this.minActive=r0(this.active,this.activeTo)}addActive(e){let n=0,{value:a,to:l,rank:c}=this.cursor;for(;n<this.activeRank.length&&(c-this.activeRank[n]||l-this.activeTo[n])>0;)n++;No(this.active,n,a),No(this.activeTo,n,l),No(this.activeRank,n,c),e&&No(e,n,this.cursor.from),this.minActive=r0(this.active,this.activeTo)}next(){let e=this.to,n=this.point;this.point=null;let a=this.openStart<0?[]:null;for(;;){let l=this.minActive;if(l>-1&&(this.activeTo[l]-this.cursor.from||this.active[l].endSide-this.cursor.startSide)<0){if(this.activeTo[l]>e){this.to=this.activeTo[l],this.endSide=this.active[l].endSide;break}this.removeActive(l),a&&jo(a,l)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let c=this.cursor.value;if(!c.point)this.addActive(a),this.cursor.next();else if(n&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=c,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=c.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(a){this.openStart=0;for(let l=a.length-1;l>=0&&a[l]<e;l--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let n=[];for(let a=this.active.length-1;a>=0&&!(this.activeRank[a]<this.pointRank);a--)(this.activeTo[a]>e||this.activeTo[a]==e&&this.active[a].endSide>=this.point.endSide)&&n.push(this.active[a]);return n.reverse()}openEnd(e){let n=0;for(let a=this.activeTo.length-1;a>=0&&this.activeTo[a]>e;a--)n++;return n}}function a0(i,e,n,a,l,c){i.goto(e),n.goto(a);let u=a+l,f=a,h=a-e,p=!!c.boundChange;for(let g=!1;;){let b=i.to+h-n.to,x=b||i.endSide-n.endSide,S=x<0?i.to+h:n.to,k=Math.min(S,u);if(i.point||n.point?(i.point&&n.point&&xh(i.point,n.point)&&Ud(i.activeForPoint(i.to),n.activeForPoint(n.to))||c.comparePoint(f,k,i.point,n.point),g=!1):(g&&c.boundChange(f),k>f&&!Ud(i.active,n.active)&&c.compareRange(f,k,i.active,n.active),p&&k<u&&(b||i.openEnd(S)!=n.openEnd(S))&&(g=!0)),S>u)break;f=S,x<=0&&i.next(),x>=0&&n.next()}}function Ud(i,e){if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++)if(i[n]!=e[n]&&!xh(i[n],e[n]))return!1;return!0}function jo(i,e){for(let n=e,a=i.length-1;n<a;n++)i[n]=i[n+1];i.pop()}function No(i,e,n){for(let a=i.length-1;a>=e;a--)i[a+1]=i[a];i[e]=n}function r0(i,e){let n=-1,a=1e9;for(let l=0;l<e.length;l++)(e[l]-a||i[l].endSide-i[n].endSide)<0&&(n=l,a=e[l]);return n}function LS(i,e,n,a){for(let l=0,c=0;;){if(c>=e)return l;if(l==i.length)break;c+=i.charCodeAt(l)==9?n-c%n:1,l=_n(i,l)}return i.length}const Vd="ͼ",l0=typeof Symbol>"u"?"__"+Vd:Symbol.for(Vd),Gd=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class Da{constructor(e,n){this.rules=[];let{finish:a}=n||{};function l(u){return/^@/.test(u)?[u]:u.split(/,\s*/)}function c(u,f,h,p){let g=[],b=/^@(\w+)\b/.exec(u[0]),x=b&&b[1]=="keyframes";if(b&&f==null)return h.push(u[0]+";");for(let S in f){let k=f[S];if(/&/.test(S))c(S.split(/,\s*/).map(A=>u.map(M=>A.replace(/&/,M))).reduce((A,M)=>A.concat(M)),k,h);else if(k&&typeof k=="object"){if(!b)throw new RangeError("The value of a property ("+S+") should be a primitive value.");c(l(S),k,g,x)}else k!=null&&g.push(S.replace(/_.*/,"").replace(/[A-Z]/g,A=>"-"+A.toLowerCase())+": "+k+";")}(g.length||x)&&h.push((a&&!b&&!p?u.map(a):u).join(", ")+" {"+g.join(" ")+"}")}for(let u in e)c(l(u),e[u],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=o0[l0]||1;return o0[l0]=e+1,Vd+e.toString(36)}static mount(e,n,a){let l=e[Gd],c=a&&a.nonce;l?c&&l.setNonce(c):l=new _S(e,c),l.mount(Array.isArray(n)?n:[n],e)}}let c0=new Map;class _S{constructor(e,n){let a=e.ownerDocument||e,l=a.defaultView;if(!e.head&&e.adoptedStyleSheets&&l.CSSStyleSheet){let c=c0.get(a);if(c)return e[Gd]=c;this.sheet=new l.CSSStyleSheet,c0.set(a,this)}else this.styleTag=a.createElement("style"),n&&this.styleTag.setAttribute("nonce",n);this.modules=[],e[Gd]=this}mount(e,n){let a=this.sheet,l=0,c=0;for(let u=0;u<e.length;u++){let f=e[u],h=this.modules.indexOf(f);if(h<c&&h>-1&&(this.modules.splice(h,1),c--,h=-1),h==-1){if(this.modules.splice(c++,0,f),a)for(let p=0;p<f.rules.length;p++)a.insertRule(f.rules[p],l++)}else{for(;c<h;)l+=this.modules[c++].rules.length;l+=f.rules.length,c++}}if(a)n.adoptedStyleSheets.indexOf(this.sheet)<0&&(n.adoptedStyleSheets=[this.sheet,...n.adoptedStyleSheets]);else{let u="";for(let h=0;h<this.modules.length;h++)u+=this.modules[h].getRules()+`
`;this.styleTag.textContent=u;let f=n.head||n;this.styleTag.parentNode!=f&&f.insertBefore(this.styleTag,f.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Xi={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},il={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},HS=typeof navigator<"u"&&/Mac/.test(navigator.platform),qS=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var jt=0;jt<10;jt++)Xi[48+jt]=Xi[96+jt]=String(jt);for(var jt=1;jt<=24;jt++)Xi[jt+111]="F"+jt;for(var jt=65;jt<=90;jt++)Xi[jt]=String.fromCharCode(jt+32),il[jt]=String.fromCharCode(jt);for(var nd in Xi)il.hasOwnProperty(nd)||(il[nd]=Xi[nd]);function US(i){var e=HS&&i.metaKey&&i.shiftKey&&!i.ctrlKey&&!i.altKey||qS&&i.shiftKey&&i.key&&i.key.length==1||i.key=="Unidentified",n=!e&&i.key||(i.shiftKey?il:Xi)[i.keyCode]||i.key||"Unidentified";return n=="Esc"&&(n="Escape"),n=="Del"&&(n="Delete"),n=="Left"&&(n="ArrowLeft"),n=="Up"&&(n="ArrowUp"),n=="Right"&&(n="ArrowRight"),n=="Down"&&(n="ArrowDown"),n}let qt=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},$d=typeof document<"u"?document:{documentElement:{style:{}}};const Yd=/Edge\/(\d+)/.exec(qt.userAgent),Yb=/MSIE \d/.test(qt.userAgent),Kd=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(qt.userAgent),xc=!!(Yb||Kd||Yd),u0=!xc&&/gecko\/(\d+)/i.test(qt.userAgent),id=!xc&&/Chrome\/(\d+)/.exec(qt.userAgent),f0="webkitFontSmoothing"in $d.documentElement.style,Wd=!xc&&/Apple Computer/.test(qt.vendor),d0=Wd&&(/Mobile\/\w+/.test(qt.userAgent)||qt.maxTouchPoints>2);var P={mac:d0||/Mac/.test(qt.platform),windows:/Win/.test(qt.platform),linux:/Linux|X11/.test(qt.platform),ie:xc,ie_version:Yb?$d.documentMode||6:Kd?+Kd[1]:Yd?+Yd[1]:0,gecko:u0,gecko_version:u0?+(/Firefox\/(\d+)/.exec(qt.userAgent)||[0,0])[1]:0,chrome:!!id,chrome_version:id?+id[1]:0,ios:d0,android:/Android\b/.test(qt.userAgent),webkit:f0,webkit_version:f0?+(/\bAppleWebKit\/(\d+)/.exec(qt.userAgent)||[0,0])[1]:0,safari:Wd,safari_version:Wd?+(/\bVersion\/(\d+(\.\d+)?)/.exec(qt.userAgent)||[0,0])[1]:0,tabSize:$d.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function Sh(i,e){for(let n in i)n=="class"&&e.class?e.class+=" "+i.class:n=="style"&&e.style?e.style+=";"+i.style:e[n]=i[n];return e}const tc=Object.create(null);function kh(i,e,n){if(i==e)return!0;i||(i=tc),e||(e=tc);let a=Object.keys(i),l=Object.keys(e);if(a.length-0!=l.length-0)return!1;for(let c of a)if(c!=n&&(l.indexOf(c)==-1||i[c]!==e[c]))return!1;return!0}function VS(i,e){for(let n=i.attributes.length-1;n>=0;n--){let a=i.attributes[n].name;e[a]==null&&i.removeAttribute(a)}for(let n in e){let a=e[n];n=="style"?i.style.cssText=a:i.getAttribute(n)!=a&&i.setAttribute(n,a)}}function h0(i,e,n){let a=!1;if(e)for(let l in e)n&&l in n||(a=!0,l=="style"?i.style.cssText="":i.removeAttribute(l));if(n)for(let l in n)e&&e[l]==n[l]||(a=!0,l=="style"?i.style.cssText=n[l]:i.setAttribute(l,n[l]));return a}function GS(i){let e=Object.create(null);for(let n=0;n<i.attributes.length;n++){let a=i.attributes[n];e[a.name]=a.value}return e}class wc{eq(e){return!1}updateDOM(e,n,a){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,n,a){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Nt=(function(i){return i[i.Text=0]="Text",i[i.WidgetBefore=1]="WidgetBefore",i[i.WidgetAfter=2]="WidgetAfter",i[i.WidgetRange=3]="WidgetRange",i})(Nt||(Nt={}));class Dt extends Ms{constructor(e,n,a,l){super(),this.startSide=e,this.endSide=n,this.widget=a,this.spec=l}get heightRelevant(){return!1}static mark(e){return new ll(e)}static widget(e){let n=Math.max(-1e4,Math.min(1e4,e.side||0)),a=!!e.block;return n+=a&&!e.inlineOrder?n>0?3e8:-4e8:n>0?1e8:-1e8,new Cs(e,n,n,a,e.widget||null,!1)}static replace(e){let n=!!e.block,a,l;if(e.isBlockGap)a=-5e8,l=4e8;else{let{start:c,end:u}=Kb(e,n);a=(c?n?-3e8:-1:5e8)-1,l=(u?n?2e8:1:-6e8)+1}return new Cs(e,a,l,n,e.widget||null,!0)}static line(e){return new ol(e)}static set(e,n=!1){return Ce.of(e,n)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Dt.none=Ce.empty;class ll extends Dt{constructor(e){let{start:n,end:a}=Kb(e);super(n?-1:5e8,a?1:-6e8,null,e),this.tagName=e.tagName||"span",this.attrs=e.class&&e.attributes?Sh(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||tc}eq(e){return this==e||e instanceof ll&&this.tagName==e.tagName&&kh(this.attrs,e.attrs)}range(e,n=e){if(e>=n)throw new RangeError("Mark decorations may not be empty");return super.range(e,n)}}ll.prototype.point=!1;class ol extends Dt{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof ol&&this.spec.class==e.spec.class&&kh(this.spec.attributes,e.spec.attributes)}range(e,n=e){if(n!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,n)}}ol.prototype.mapMode=on.TrackBefore;ol.prototype.point=!0;class Cs extends Dt{constructor(e,n,a,l,c,u){super(n,a,c,e),this.block=l,this.isReplace=u,this.mapMode=l?n<=0?on.TrackBefore:on.TrackAfter:on.TrackDel}get type(){return this.startSide!=this.endSide?Nt.WidgetRange:this.startSide<=0?Nt.WidgetBefore:Nt.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof Cs&&$S(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,n=e){if(this.isReplace&&(e>n||e==n&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&n!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,n)}}Cs.prototype.point=!0;function Kb(i,e=!1){let{inclusiveStart:n,inclusiveEnd:a}=i;return n==null&&(n=i.inclusive),a==null&&(a=i.inclusive),{start:n??e,end:a??e}}function $S(i,e){return i==e||!!(i&&e&&i.compare(e))}function Ca(i,e,n,a=0){let l=n.length-1;l>=0&&n[l]+a>=i?n[l]=Math.max(n[l],e):n.push(i,e)}class sl extends Ms{constructor(e,n,a){super(),this.tagName=e,this.attributes=n,this.rank=a}eq(e){return e==this||e instanceof sl&&this.tagName==e.tagName&&kh(this.attributes,e.attributes)}static create(e){return new sl(e.tagName,e.attributes||tc,e.rank==null?50:Math.max(0,Math.min(e.rank,100)))}static set(e,n=!1){return Ce.of(e,n)}}sl.prototype.startSide=sl.prototype.endSide=-1;function al(i){let e;return i.nodeType==11?e=i.getSelection?i:i.ownerDocument:e=i,e.getSelection()}function Xd(i,e){return e?i==e||i.contains(e.nodeType!=1?e.parentNode:e):!1}function Fr(i,e){if(!e.anchorNode)return!1;try{return Xd(i,e.anchorNode)}catch{return!1}}function Xo(i){return i.nodeType==3?rl(i,0,i.nodeValue.length).getClientRects():i.nodeType==1?i.getClientRects():[]}function Zr(i,e,n,a){return n?m0(i,e,n,a,-1)||m0(i,e,n,a,1):!1}function Qi(i){for(var e=0;;e++)if(i=i.previousSibling,!i)return e}function nc(i){return i.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName)}function m0(i,e,n,a,l){for(;;){if(i==n&&e==a)return!0;if(e==(l<0?0:ui(i))){if(i.nodeName=="DIV")return!1;let c=i.parentNode;if(!c||c.nodeType!=1)return!1;e=Qi(i)+(l<0?0:1),i=c}else if(i.nodeType==1){if(i=i.childNodes[e+(l<0?-1:0)],i.nodeType==1&&i.contentEditable=="false")return!1;e=l<0?ui(i):0}else return!1}}function ui(i){return i.nodeType==3?i.nodeValue.length:i.childNodes.length}function ic(i,e){let n=e?i.left:i.right;return{left:n,right:n,top:i.top,bottom:i.bottom}}function YS(i){let e=i.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:i.innerWidth,top:0,bottom:i.innerHeight}}function Wb(i,e){let n=e.width/i.offsetWidth,a=e.height/i.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.width-i.offsetWidth)<1)&&(n=1),(a>.995&&a<1.005||!isFinite(a)||Math.abs(e.height-i.offsetHeight)<1)&&(a=1),{scaleX:n,scaleY:a}}function KS(i,e,n,a,l,c,u,f){let h=i.ownerDocument,p=h.defaultView||window;for(let g=i,b=!1;g&&!b;)if(g.nodeType==1){let x,S=g==h.body,k=1,A=1;if(S)x=YS(p);else{if(/^(fixed|sticky)$/.test(getComputedStyle(g).position)&&(b=!0),g.scrollHeight<=g.clientHeight&&g.scrollWidth<=g.clientWidth){g=g.assignedSlot||g.parentNode;continue}let U=g.getBoundingClientRect();({scaleX:k,scaleY:A}=Wb(g,U)),x={left:U.left,right:U.left+g.clientWidth*k,top:U.top,bottom:U.top+g.clientHeight*A}}let M=0,_=0;if(l=="nearest")e.top<x.top+u?(_=e.top-(x.top+u),n>0&&e.bottom>x.bottom+_&&(_=e.bottom-x.bottom+u)):e.bottom>x.bottom-u&&(_=e.bottom-x.bottom+u,n<0&&e.top-_<x.top&&(_=e.top-(x.top+u)));else{let U=e.bottom-e.top,K=x.bottom-x.top;_=(l=="center"&&U<=K?e.top+U/2-K/2:l=="start"||l=="center"&&n<0?e.top-u:e.bottom-K+u)-x.top}if(a=="nearest"?e.left<x.left+c?(M=e.left-(x.left+c),n>0&&e.right>x.right+M&&(M=e.right-x.right+c)):e.right>x.right-c&&(M=e.right-x.right+c,n<0&&e.left<x.left+M&&(M=e.left-(x.left+c))):M=(a=="center"?e.left+(e.right-e.left)/2-(x.right-x.left)/2:a=="start"==f?e.left-c:e.right-(x.right-x.left)+c)-x.left,M||_)if(S)p.scrollBy(M,_);else{let U=0,K=0;if(_){let $=g.scrollTop;g.scrollTop+=_/A,K=(g.scrollTop-$)*A}if(M){let $=g.scrollLeft;g.scrollLeft+=M/k,U=(g.scrollLeft-$)*k}e={left:e.left-U,top:e.top-K,right:e.right-U,bottom:e.bottom-K},U&&Math.abs(U-M)<1&&(a="nearest"),K&&Math.abs(K-_)<1&&(l="nearest")}if(S)break;(e.top<x.top||e.bottom>x.bottom||e.left<x.left||e.right>x.right)&&(e={left:Math.max(e.left,x.left),right:Math.min(e.right,x.right),top:Math.max(e.top,x.top),bottom:Math.min(e.bottom,x.bottom)}),g=g.assignedSlot||g.parentNode}else if(g.nodeType==11)g=g.host;else break}function Xb(i,e=!0){let n=i.ownerDocument,a=null,l=null;for(let c=i.parentNode;c&&!(c==n.body||(!e||a)&&l);)if(c.nodeType==1)!l&&c.scrollHeight>c.clientHeight&&(l=c),e&&!a&&c.scrollWidth>c.clientWidth&&(a=c),c=c.assignedSlot||c.parentNode;else if(c.nodeType==11)c=c.host;else break;return{x:a,y:l}}class WS{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:n,focusNode:a}=e;this.set(n,Math.min(e.anchorOffset,n?ui(n):0),a,Math.min(e.focusOffset,a?ui(a):0))}set(e,n,a,l){this.anchorNode=e,this.anchorOffset=n,this.focusNode=a,this.focusOffset=l}}let ws=null;P.safari&&P.safari_version>=26&&(ws=!1);function Qb(i){if(i.setActive)return i.setActive();if(ws)return i.focus(ws);let e=[];for(let n=i;n&&(e.push(n,n.scrollTop,n.scrollLeft),n!=n.ownerDocument);n=n.parentNode);if(i.focus(ws==null?{get preventScroll(){return ws={preventScroll:!0},!0}}:void 0),!ws){ws=!1;for(let n=0;n<e.length;){let a=e[n++],l=e[n++],c=e[n++];a.scrollTop!=l&&(a.scrollTop=l),a.scrollLeft!=c&&(a.scrollLeft=c)}}}let p0;function rl(i,e,n=e){let a=p0||(p0=document.createRange());return a.setEnd(i,n),a.setStart(i,e),a}function Oa(i,e,n,a){let l={key:e,code:e,keyCode:n,which:n,cancelable:!0};a&&({altKey:l.altKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,metaKey:l.metaKey}=a);let c=new KeyboardEvent("keydown",l);c.synthetic=!0,i.dispatchEvent(c);let u=new KeyboardEvent("keyup",l);return u.synthetic=!0,i.dispatchEvent(u),c.defaultPrevented||u.defaultPrevented}function XS(i){for(;i;){if(i&&(i.nodeType==9||i.nodeType==11&&i.host))return i;i=i.assignedSlot||i.parentNode}return null}function QS(i,e){let n=e.focusNode,a=e.focusOffset;if(!n||e.anchorNode!=n||e.anchorOffset!=a)return!1;for(a=Math.min(a,ui(n));;)if(a){if(n.nodeType!=1)return!1;let l=n.childNodes[a-1];l.contentEditable=="false"?a--:(n=l,a=ui(n))}else{if(n==i)return!0;a=Qi(n),n=n.parentNode}}function Fb(i){return i instanceof Window?i.pageYOffset>Math.max(0,i.document.documentElement.scrollHeight-i.innerHeight-4):i.scrollTop>Math.max(1,i.scrollHeight-i.clientHeight-4)}function Zb(i,e){for(let n=i,a=e;;){if(n.nodeType==3&&a>0)return{node:n,offset:a};if(n.nodeType==1&&a>0){if(n.contentEditable=="false")return null;n=n.childNodes[a-1],a=ui(n)}else if(n.parentNode&&!nc(n))a=Qi(n),n=n.parentNode;else return null}}function Pb(i,e){for(let n=i,a=e;;){if(n.nodeType==3&&a<n.nodeValue.length)return{node:n,offset:a};if(n.nodeType==1&&a<n.childNodes.length){if(n.contentEditable=="false")return null;n=n.childNodes[a],a=0}else if(n.parentNode&&!nc(n))a=Qi(n)+1,n=n.parentNode;else return null}}class Tn{constructor(e,n,a=!0){this.node=e,this.offset=n,this.precise=a}static before(e,n){return new Tn(e.parentNode,Qi(e),n)}static after(e,n){return new Tn(e.parentNode,Qi(e)+1,n)}}var ct=(function(i){return i[i.LTR=0]="LTR",i[i.RTL=1]="RTL",i})(ct||(ct={}));const Os=ct.LTR,Ah=ct.RTL;function Jb(i){let e=[];for(let n=0;n<i.length;n++)e.push(1<<+i[n]);return e}const FS=Jb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),ZS=Jb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Qd=Object.create(null),Nn=[];for(let i of["()","[]","{}"]){let e=i.charCodeAt(0),n=i.charCodeAt(1);Qd[e]=n,Qd[n]=-e}function Ib(i){return i<=247?FS[i]:1424<=i&&i<=1524?2:1536<=i&&i<=1785?ZS[i-1536]:1774<=i&&i<=2220?4:8192<=i&&i<=8204?256:64336<=i&&i<=65023?4:1}const PS=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class Hn{get dir(){return this.level%2?Ah:Os}constructor(e,n,a){this.from=e,this.to=n,this.level=a}side(e,n){return this.dir==n==e?this.to:this.from}forward(e,n){return e==(this.dir==n)}static find(e,n,a,l){let c=-1;for(let u=0;u<e.length;u++){let f=e[u];if(f.from<=n&&f.to>=n){if(f.level==a)return u;(c<0||(l!=0?l<0?f.from<n:f.to>n:e[c].level>f.level))&&(c=u)}}if(c<0)throw new RangeError("Index out of range");return c}}function ev(i,e){if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++){let a=i[n],l=e[n];if(a.from!=l.from||a.to!=l.to||a.direction!=l.direction||!ev(a.inner,l.inner))return!1}return!0}const Ke=[];function JS(i,e,n,a,l){for(let c=0;c<=a.length;c++){let u=c?a[c-1].to:e,f=c<a.length?a[c].from:n,h=c?256:l;for(let p=u,g=h,b=h;p<f;p++){let x=Ib(i.charCodeAt(p));x==512?x=g:x==8&&b==4&&(x=16),Ke[p]=x==4?2:x,x&7&&(b=x),g=x}for(let p=u,g=h,b=h;p<f;p++){let x=Ke[p];if(x==128)p<f-1&&g==Ke[p+1]&&g&24?x=Ke[p]=g:Ke[p]=256;else if(x==64){let S=p+1;for(;S<f&&Ke[S]==64;)S++;let k=p&&g==8||S<n&&Ke[S]==8?b==1?1:8:256;for(let A=p;A<S;A++)Ke[A]=k;p=S-1}else x==8&&b==1&&(Ke[p]=1);g=x,x&7&&(b=x)}}}function IS(i,e,n,a,l){let c=l==1?2:1;for(let u=0,f=0,h=0;u<=a.length;u++){let p=u?a[u-1].to:e,g=u<a.length?a[u].from:n;for(let b=p,x,S,k;b<g;b++)if(S=Qd[x=i.charCodeAt(b)])if(S<0){for(let A=f-3;A>=0;A-=3)if(Nn[A+1]==-S){let M=Nn[A+2],_=M&2?l:M&4?M&1?c:l:0;_&&(Ke[b]=Ke[Nn[A]]=_),f=A;break}}else{if(Nn.length==189)break;Nn[f++]=b,Nn[f++]=x,Nn[f++]=h}else if((k=Ke[b])==2||k==1){let A=k==l;h=A?0:1;for(let M=f-3;M>=0;M-=3){let _=Nn[M+2];if(_&2)break;if(A)Nn[M+2]|=2;else{if(_&4)break;Nn[M+2]|=4}}}}}function ek(i,e,n,a){for(let l=0,c=a;l<=n.length;l++){let u=l?n[l-1].to:i,f=l<n.length?n[l].from:e;for(let h=u;h<f;){let p=Ke[h];if(p==256){let g=h+1;for(;;)if(g==f){if(l==n.length)break;g=n[l++].to,f=l<n.length?n[l].from:e}else if(Ke[g]==256)g++;else break;let b=c==1,x=(g<e?Ke[g]:a)==1,S=b==x?b?1:2:a;for(let k=g,A=l,M=A?n[A-1].to:i;k>h;)k==M&&(k=n[--A].from,M=A?n[A-1].to:i),Ke[--k]=S;h=g}else c=p,h++}}}function Fd(i,e,n,a,l,c,u){let f=a%2?2:1;if(a%2==l%2)for(let h=e,p=0;h<n;){let g=!0,b=!1;if(p==c.length||h<c[p].from){let A=Ke[h];A!=f&&(g=!1,b=A==16)}let x=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p<c.length&&k==c[p].from){if(b)break e;let A=c[p];if(!g)for(let M=A.to,_=p+1;;){if(M==n)break e;if(_<c.length&&c[_].from==M)M=c[_++].to;else{if(Ke[M]==f)break e;break}}if(p++,x)x.push(A);else{A.from>h&&u.push(new Hn(h,A.from,S));let M=A.direction==Os!=!(S%2);Zd(i,M?a+1:a,l,A.inner,A.from,A.to,u),h=A.to}k=A.to}else{if(k==n||(g?Ke[k]!=f:Ke[k]==f))break;k++}x?Fd(i,h,k,a+1,l,x,u):h<k&&u.push(new Hn(h,k,S)),h=k}else for(let h=n,p=c.length;h>e;){let g=!0,b=!1;if(!p||h>c[p-1].to){let A=Ke[h-1];A!=f&&(g=!1,b=A==16)}let x=!g&&f==1?[]:null,S=g?a:a+1,k=h;e:for(;;)if(p&&k==c[p-1].to){if(b)break e;let A=c[--p];if(!g)for(let M=A.from,_=p;;){if(M==e)break e;if(_&&c[_-1].to==M)M=c[--_].from;else{if(Ke[M-1]==f)break e;break}}if(x)x.push(A);else{A.to<h&&u.push(new Hn(A.to,h,S));let M=A.direction==Os!=!(S%2);Zd(i,M?a+1:a,l,A.inner,A.from,A.to,u),h=A.from}k=A.from}else{if(k==e||(g?Ke[k-1]!=f:Ke[k-1]==f))break;k--}x?Fd(i,k,h,a+1,l,x,u):k<h&&u.push(new Hn(k,h,S)),h=k}}function Zd(i,e,n,a,l,c,u){let f=e%2?2:1;JS(i,l,c,a,f),IS(i,l,c,a,f),ek(l,c,a,f),Fd(i,l,c,e,n,a,u)}function tk(i,e,n){if(!i)return[new Hn(0,0,e==Ah?1:0)];if(e==Os&&!n.length&&!PS.test(i))return tv(i.length);if(n.length)for(;i.length>Ke.length;)Ke[Ke.length]=256;let a=[],l=e==Os?0:1;return Zd(i,l,l,n,0,i.length,a),a}function tv(i){return[new Hn(0,i,0)]}let nv="";function nk(i,e,n,a,l){var c;let u=a.head-i.from,f=Hn.find(e,u,(c=a.bidiLevel)!==null&&c!==void 0?c:-1,a.assoc),h=e[f],p=h.side(l,n);if(u==p){let x=f+=l?1:-1;if(x<0||x>=e.length)return null;h=e[f=x],u=h.side(!l,n),p=h.side(l,n)}let g=_n(i.text,u,h.forward(l,n));(g<h.from||g>h.to)&&(g=p),nv=i.text.slice(Math.min(u,g),Math.max(u,g));let b=f==(l?e.length-1:0)?null:e[f+(l?1:-1)];return b&&g==p&&b.level+(l?0:1)<h.level?J.cursor(b.side(!l,n)+i.from,b.forward(l,n)?1:-1,b.level):J.cursor(g+i.from,h.forward(l,n)?-1:1,h.level)}function ik(i,e,n){for(let a=e;a<n;a++){let l=Ib(i.charCodeAt(a));if(l==1)return Os;if(l==2||l==4)return Ah}return Os}const iv=ue.define(),sv=ue.define(),av=ue.define(),rv=ue.define(),Pd=ue.define(),lv=ue.define(),ov=ue.define(),Th=ue.define(),Eh=ue.define(),cv=ue.define({combine:i=>i.some(e=>e)}),uv=ue.define({combine:i=>i.some(e=>e)}),fv=ue.define();class ja{constructor(e,n,a,l,c,u=!1){this.range=e,this.y=n,this.x=a,this.yMargin=l,this.xMargin=c,this.isSnapshot=u}map(e){return e.empty?this:new ja(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new ja(J.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Do=gt.define({map:(i,e)=>i.map(e)}),dv=gt.define();function li(i,e,n){let a=i.facet(rv);a.length?a[0](e):window.onerror&&window.onerror(String(e),n,void 0,void 0,e)||(n?console.error(n+":",e):console.error(e))}const ai=ue.define({combine:i=>i.length?i[0]:!0});let sk=0;const Ta=ue.define({combine(i){return i.filter((e,n)=>{for(let a=0;a<n;a++)if(i[a].plugin==e.plugin)return!1;return!0})}});class js{constructor(e,n,a,l,c){this.id=e,this.create=n,this.domEventHandlers=a,this.domEventObservers=l,this.baseExtensions=c(this),this.extension=this.baseExtensions.concat(Ta.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Ta.of({plugin:this,arg:e}))}static define(e,n){const{eventHandlers:a,eventObservers:l,provide:c,decorations:u}=n||{};return new js(sk++,e,a,l,f=>{let h=[];return u&&h.push(Sc.of(p=>{let g=p.plugin(f);return g?u(g):Dt.none})),c&&h.push(c(f)),h})}static fromClass(e,n){return js.define((a,l)=>new e(a,l),n)}}class sd{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let n=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(n)}catch(a){if(li(n.state,a,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(n){li(e.state,n,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var n;if(!((n=this.value)===null||n===void 0)&&n.destroy)try{this.value.destroy()}catch(a){li(e.state,a,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const hv=ue.define(),Rh=ue.define(),Sc=ue.define(),mv=ue.define(),Mh=ue.define(),cl=ue.define(),pv=ue.define();function g0(i,e){let n=i.state.facet(pv);if(!n.length)return n;let a=n.map(c=>c instanceof Function?c(i):c),l=[];return Ce.spans(a,e.from,e.to,{point(){},span(c,u,f,h){let p=c-e.from,g=u-e.from,b=l;for(let x=f.length-1;x>=0;x--,h--){let S=f[x].spec.bidiIsolate,k;if(S==null&&(S=ik(e.text,p,g)),h>0&&b.length&&(k=b[b.length-1]).to==p&&k.direction==S)k.to=g,b=k.inner;else{let A={from:p,to:g,direction:S,inner:[]};b.push(A),b=A.inner}}}}),l}const gv=ue.define();function yv(i){let e=0,n=0,a=0,l=0;for(let c of i.state.facet(gv)){let u=c(i);u&&(u.left!=null&&(e=Math.max(e,u.left)),u.right!=null&&(n=Math.max(n,u.right)),u.top!=null&&(a=Math.max(a,u.top)),u.bottom!=null&&(l=Math.max(l,u.bottom)))}return{left:e,right:n,top:a,bottom:l}}const Gr=ue.define();class vn{constructor(e,n,a,l){this.fromA=e,this.toA=n,this.fromB=a,this.toB=l}join(e){return new vn(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let n=e.length,a=this;for(;n>0;n--){let l=e[n-1];if(!(l.fromA>a.toA)){if(l.toA<a.fromA)break;a=a.join(l),e.splice(n-1,1)}}return e.splice(n,0,a),e}static extendWithRanges(e,n){if(n.length==0)return e;let a=[];for(let l=0,c=0,u=0;;){let f=l<e.length?e[l].fromB:1e9,h=c<n.length?n[c]:1e9,p=Math.min(f,h);if(p==1e9)break;let g=p+u,b=p,x=g;for(;;)if(c<n.length&&n[c]<=b){let S=n[c+1];c+=2,b=Math.max(b,S);for(let k=l;k<e.length&&e[k].fromB<=b;k++)u=e[k].toA-e[k].toB;x=Math.max(x,S+u)}else if(l<e.length&&e[l].fromB<=b){let S=e[l++];b=Math.max(b,S.toB),x=Math.max(x,S.toA),u=S.toA-S.toB}else break;a.push(new vn(g,x,p,b))}return a}}class sc{constructor(e,n,a){this.view=e,this.state=n,this.transactions=a,this.flags=0,this.startState=e.state,this.changes=At.empty(this.startState.doc.length);for(let c of a)this.changes=this.changes.compose(c.changes);let l=[];this.changes.iterChangedRanges((c,u,f,h)=>l.push(new vn(c,u,f,h))),this.changedRanges=l}static create(e,n,a){return new sc(e,n,a)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}const ak=[];class at{constructor(e,n,a=0){this.dom=e,this.length=n,this.flags=a,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return ak}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let n=this.domAttrs;n&&VS(this.dom,n)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,n=this.posAtStart){let a=n;for(let l of this.children){if(l==e)return a;a+=l.length+l.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,n){return null}domPosFor(e,n){let a=Qi(this.dom),l=this.length?e>0:n>0;return new Tn(this.parent.dom,a+(l?1:0),e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof Ac)return e;return null}static get(e){return e.cmTile}}class kc extends at{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let n=this.dom,a=null,l,c=e?.node==n?e:null,u=0;for(let f of this.children){if(f.sync(e),u+=f.length+f.breakAfter,l=a?a.nextSibling:n.firstChild,c&&l!=f.dom&&(c.written=!0),f.dom.parentNode==n)for(;l&&l!=f.dom;)l=y0(l);else n.insertBefore(f.dom,l);a=f.dom}for(l=a?a.nextSibling:n.firstChild,c&&l&&(c.written=!0);l;)l=y0(l);this.length=u}}function y0(i){let e=i.nextSibling;return i.parentNode.removeChild(i),e}class Ac extends kc{constructor(e,n){super(n),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let n=at.get(e);if(n&&this.owns(n))return n;e=e.parentNode}}blockTiles(e){for(let n=[],a=this,l=0,c=0;;)if(l==a.children.length){if(!n.length)return;a=a.parent,a.breakAfter&&c++,l=n.pop()}else{let u=a.children[l++];if(u instanceof ci)n.push(l),a=u,l=0;else{let f=c+u.length,h=e(u,c);if(h!==void 0)return h;c=f+u.breakAfter}}}resolveBlock(e,n){let a,l=-1,c,u=-1;if(this.blockTiles((f,h)=>{let p=h+f.length;if(e>=h&&e<=p){if(f.isWidget()&&n>=-1&&n<=1){if(f.flags&32)return!0;f.flags&16&&(a=void 0)}(h<e||e==p&&(n<-1?f.length:f.covers(1)))&&(!a||!f.isWidget()&&a.isWidget())&&(a=f,l=e-h),(p>e||e==h&&(n>1?f.length:f.covers(-1)))&&(!c||!f.isWidget()&&c.isWidget())&&(c=f,u=e-h)}}),!a&&!c)throw new Error("No tile at position "+e);return a&&n<0||!c?{tile:a,offset:l}:{tile:c,offset:u}}}class ci extends kc{constructor(e,n){super(e),this.wrapper=n}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(e,n){let a=new ci(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class za extends kc{constructor(e,n){super(e),this.attrs=n}isLine(){return!0}static start(e,n,a){let l=new za(n||document.createElement("div"),e);return(!n||!a)&&(l.flags|=4),l}get domAttrs(){return this.attrs}resolveInline(e,n,a){let l=null,c=-1,u=null,f=-1;function h(g,b){for(let x=0,S=0;x<g.children.length&&S<=b;x++){let k=g.children[x],A=S+k.length;A>=b&&(k.isComposite()?h(k,b-S):(!u||u.isHidden&&(n>0||a&&lk(u,k)))&&(A>b||k.flags&32)?(u=k,f=b-S):(S<b||k.flags&16&&!k.isHidden)&&(l=k,c=b-S)),S=A}}h(this,e);let p=(n<0?l:u)||l||u;return p?{tile:p,offset:p==l?c:f}:null}coordsIn(e,n){let a=this.resolveInline(e,n,!0);return a?a.tile.coordsIn(Math.max(0,a.offset),n):rk(this)}domIn(e,n){let a=this.resolveInline(e,n);if(a){let{tile:l,offset:c}=a;if(this.dom.contains(l.dom))return l.isText()?new Tn(l.dom,Math.min(l.dom.nodeValue.length,c)):l.domPosFor(c,l.flags&16?1:l.flags&32?-1:n);let u=a.tile.parent,f=!1;for(let h of u.children){if(f)return new Tn(h.dom,0);h==a.tile&&(f=!0)}}return new Tn(this.dom,0)}}function rk(i){let e=i.dom.lastChild;if(!e)return i.dom.getBoundingClientRect();let n=Xo(e);return n[n.length-1]||null}function lk(i,e){let n=i.coordsIn(0,1),a=e.coordsIn(0,1);return n&&a&&a.top<n.bottom}class Ft extends kc{constructor(e,n){super(e),this.mark=n}get domAttrs(){return this.mark.attrs}static of(e,n){let a=new Ft(n||document.createElement(e.tagName),e);return n||(a.flags|=4),a}}class Ts extends at{constructor(e,n){super(e,n.length),this.text=n}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,n){let a=this.dom.nodeValue.length;e>a&&(e=a);let l=e,c=e,u=0;e==0&&n<0||e==a&&n>=0?P.chrome||P.gecko||(e?(l--,u=1):c<a&&(c++,u=-1)):n<0?l--:c<a&&c++;let f=rl(this.dom,l,c).getClientRects();if(!f.length)return null;let h=f[(u?u<0:n>=0)?0:f.length-1];return P.safari&&!u&&h.width==0&&(h=Array.prototype.find.call(f,p=>p.width)||h),u?ic(h,u<0):h||null}static of(e,n){let a=new Ts(n||document.createTextNode(e),e);return n||(a.flags|=2),a}}class Ns extends at{constructor(e,n,a,l){super(e,n,l),this.widget=a}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,n){return this.coordsInWidget(e,n,!1)}coordsInWidget(e,n,a){let l=this.widget.coordsAt(this.dom,e,n);if(l)return l;if(a)return ic(this.dom.getBoundingClientRect(),this.length?e==0:n<=0);{let c=this.dom.getClientRects(),u=null;if(!c.length)return null;let f=this.flags&16?!0:this.flags&32?!1:e>0;for(let h=f?c.length-1:0;u=c[h],!(e>0?h==0:h==c.length-1||u.top<u.bottom);h+=f?-1:1);return ic(u,!f)}}get overrideDOMText(){if(!this.length)return Be.empty;let{root:e}=this;if(!e)return Be.empty;let n=this.posAtStart;return e.view.state.doc.slice(n,n+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(e,n,a,l,c){return c||(c=e.toDOM(n),e.editable||(c.contentEditable="false")),new Ns(c,a,e,l)}}class ac extends at{constructor(e){let n=document.createElement("img");n.className="cm-widgetBuffer",n.setAttribute("aria-hidden","true"),super(n,0,e)}get isHidden(){return!0}get overrideDOMText(){return Be.empty}coordsIn(e){return this.dom.getBoundingClientRect()}}class ok{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,n,a){let{tile:l,index:c,beforeBreak:u,parents:f}=this;for(;e||n>0;)if(l.isComposite())if(u){if(!e)break;a&&a.break(),e--,u=!1}else if(c==l.children.length){if(!e&&!f.length)break;a&&a.leave(l),u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++}else{let h=l.children[c],p=h.breakAfter;(n>0?h.length<=e:h.length<e)&&(!a||a.skip(h,0,h.length)!==!1||!h.isComposite)?(u=!!p,c++,e-=h.length):(f.push({tile:l,index:c}),l=h,c=0,a&&h.isComposite()&&a.enter(h))}else if(c==l.length)u=!!l.breakAfter,{tile:l,index:c}=f.pop(),c++;else if(e){let h=Math.min(e,l.length-c);a&&a.skip(l,c,c+h),e-=h,c+=h}else break;return this.tile=l,this.index=c,this.beforeBreak=u,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class ck{constructor(e,n,a,l){this.from=e,this.to=n,this.wrapper=a,this.rank=l}}class uk{constructor(e,n,a){this.cache=e,this.root=n,this.blockWrappers=a,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,n,a,l){var c;this.flushBuffer();let u=this.ensureMarks(n,a),f=u.lastChild;if(f&&f.isText()&&!(f.flags&8)&&f.length+e.length<512){this.cache.reused.set(f,2);let h=u.children[u.children.length-1]=new Ts(f.dom,f.text+e);h.parent=u}else u.append(l||Ts.of(e,(c=this.cache.find(Ts))===null||c===void 0?void 0:c.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,n){let a=this.curLine;a.dom!=n.line.dom&&(a.setDOM(this.cache.reused.has(n.line)?ad(n.line.dom):n.line.dom),this.cache.reused.set(n.line,2));let l=a;for(let f=n.marks.length-1;f>=0;f--){let h=n.marks[f],p=l.lastChild;if(p instanceof Ft&&p.mark.eq(h.mark))p.dom!=h.dom&&p.setDOM(ad(h.dom)),l=p;else{if(this.cache.reused.get(h)){let b=at.get(h.dom);b&&b.setDOM(ad(h.dom))}let g=Ft.of(h.mark,h.dom);l.append(g),l=g}this.cache.reused.set(h,2)}let c=at.get(e.text);c&&this.cache.reused.set(c,2);let u=new Ts(e.text,e.text.nodeValue);u.flags|=8,this.pos=e.range.toB,l.append(u)}addInlineWidget(e,n,a){let l=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);l||this.flushBuffer();let c=this.ensureMarks(n,a);!l&&!(e.flags&16)&&c.append(this.getBuffer(1)),c.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,n,a){this.flushBuffer(),this.ensureMarks(n,a).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let n=this.afterWidget||this.lastBlock;n.length+=e,this.pos+=e}addLineStart(e,n){var a;e||(e=bv);let l=za.start(e,n||((a=this.cache.find(za))===null||a===void 0?void 0:a.dom),!!n);this.getBlockPos().append(this.lastBlock=this.curLine=l)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,n){var a;let l=this.curLine;for(let c=e.length-1;c>=0;c--){let u=e[c],f;if(n>0&&(f=l.lastChild)&&f instanceof Ft&&f.mark.eq(u))l=f,n--;else{let h=Ft.of(u,(a=this.cache.find(Ft,p=>p.mark.eq(u)))===null||a===void 0?void 0:a.dom);l.append(h),l=h,n=0}}return l}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!b0(this.curLine,!1)||e.dom.nodeName!="BR"&&e.isWidget()&&!(P.ios&&b0(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(rd,0,32)||new Ns(rd.toDOM(),0,rd,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let n=e.rank*102+e.value.rank,a=new ck(e.from,e.to,e.value,n),l=this.wrappers.length;for(;l>0&&(this.wrappers[l-1].rank-a.rank||this.wrappers[l-1].to-a.to)<0;)l--;this.wrappers.splice(l,0,a)}this.wrapperPos=this.pos}getBlockPos(){var e;this.updateBlockWrappers();let n=this.root;for(let a of this.wrappers){let l=n.lastChild;if(a.from<this.pos&&l instanceof ci&&l.wrapper.eq(a.wrapper))n=l;else{let c=ci.of(a.wrapper,(e=this.cache.find(ci,u=>u.wrapper.eq(a.wrapper)))===null||e===void 0?void 0:e.dom);n.append(c),n=c}}return n}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let n=2|(e<0?16:32),a=this.cache.find(ac,void 0,1);return a&&(a.flags=n),a||new ac(n)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class fk{constructor(e){this.skipCount=0,this.text="",this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:l,lineBreak:c,done:u}=this.cursor.next(this.skipCount);if(this.skipCount=0,u)throw new Error("Ran out of text content when drawing inline views");this.text=l;let f=this.textOff=Math.min(e,l.length);return c?null:l.slice(0,f)}let n=Math.min(this.text.length,this.textOff+e),a=this.text.slice(this.textOff,n);return this.textOff=n,a}}const rc=[Ns,za,Ts,Ft,ac,ci,Ac];for(let i=0;i<rc.length;i++)rc[i].bucket=i;class dk{constructor(e){this.view=e,this.buckets=rc.map(()=>[]),this.index=rc.map(()=>0),this.reused=new Map}add(e){let n=e.constructor.bucket,a=this.buckets[n];a.length<6?a.push(e):a[this.index[n]=(this.index[n]+1)%6]=e}find(e,n,a=2){let l=e.bucket,c=this.buckets[l],u=this.index[l];for(let f=c.length-1;f>=0;f--){let h=(f+u)%c.length,p=c[h];if((!n||n(p))&&!this.reused.has(p))return c.splice(h,1),h<u&&this.index[l]--,this.reused.set(p,a),p}return null}findWidget(e,n,a){let l=this.buckets[0];if(l.length)for(let c=0,u=0;;c++){if(c==l.length){if(u)return null;u=1,c=0}let f=l[c];if(!this.reused.has(f)&&(u==0?f.widget.compare(e):f.widget.constructor==e.constructor&&e.updateDOM(f.dom,this.view,f.widget)))return l.splice(c,1),c<this.index[0]&&this.index[0]--,f.widget==e&&f.length==n&&(f.flags&497)==a?(this.reused.set(f,1),f):(this.reused.set(f,2),new Ns(f.dom,n,e,f.flags&-498|a))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,n=2){if(!this.reused.has(e))return this.reused.set(e,n),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}}class hk{constructor(e,n,a,l,c){this.view=e,this.decorations=l,this.disallowBlockEffectsFor=c,this.openWidget=!1,this.openMarks=0,this.cache=new dk(e),this.text=new fk(e.state.doc),this.builder=new uk(this.cache,new Ac(e,e.contentDOM),Ce.iter(a)),this.cache.reused.set(n,2),this.old=new ok(n),this.reuseWalker={skip:(u,f,h)=>{if(this.cache.add(u),u.isComposite())return!1},enter:u=>this.cache.add(u),leave:()=>{},break:()=>{}}}run(e,n){let a=n&&this.getCompositionContext(n.text);for(let l=0,c=0,u=0;;){let f=u<e.length?e[u++]:null,h=f?f.fromA:this.old.root.length;if(h>l){let p=h-l;this.preserve(p,!u,!f),l=h,c+=p}if(!f)break;n&&f.fromA<=n.range.fromA&&f.toA>=n.range.toA?(this.forward(f.fromA,n.range.fromA,n.range.fromA<n.range.toA?1:-1),this.emit(c,n.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(n,a),this.text.skip(n.range.toB-n.range.fromB),this.forward(n.range.fromA,f.toA),this.emit(n.range.toB,f.toB)):(this.forward(f.fromA,f.toA),this.emit(c,f.toB)),c=f.toB,l=f.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,n,a){let l=gk(this.old),c=this.openMarks;this.old.advance(e,a?1:-1,{skip:(u,f,h)=>{if(u.isWidget())if(this.openWidget)this.builder.continueWidget(h-f);else{let p=h>0||f<u.length?Ns.of(u.widget,this.view,h-f,u.flags&496,this.cache.maybeReuse(u)):this.cache.reuse(u);p.flags&256?(p.flags&=-2,this.builder.addBlockWidget(p)):(this.builder.ensureLine(null),this.builder.addInlineWidget(p,l,c),c=l.length)}else if(u.isText())this.builder.ensureLine(null),!f&&h==u.length&&!this.cache.reused.has(u)?this.builder.addText(u.text,l,c,this.cache.reuse(u)):(this.cache.add(u),this.builder.addText(u.text.slice(f,h),l,c)),c=l.length;else if(u.isLine())u.flags&=-2,this.cache.reused.set(u,1),this.builder.addLine(u);else if(u instanceof ac)this.cache.add(u);else if(u instanceof Ft)this.builder.ensureLine(null),this.builder.addMark(u,l,c),this.cache.reused.set(u,1),c=l.length;else return!1;this.openWidget=!1},enter:u=>{u.isLine()?this.builder.addLineStart(u.attrs,this.cache.maybeReuse(u)):(this.cache.add(u),u instanceof Ft&&l.unshift(u.mark)),this.openWidget=!1},leave:u=>{u.isLine()?l.length&&(l.length=c=0):u instanceof Ft&&(l.shift(),c=Math.min(c,l.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,n){let a=null,l=this.builder,c=0,u=Ce.spans(this.decorations,e,n,{point:(f,h,p,g,b,x)=>{if(p instanceof Cs){if(this.disallowBlockEffectsFor[x]){if(p.block)throw new RangeError("Block decorations may not be specified via plugins");if(h>this.view.state.doc.lineAt(f).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(c=g.length,b>g.length)l.continueWidget(h-f);else{let S=p.widget||(p.block?Ba.block:Ba.inline),k=mk(p),A=this.cache.findWidget(S,h-f,k)||Ns.of(S,this.view,h-f,k);p.block?(p.startSide>0&&l.addLineStartIfNotCovered(a),l.addBlockWidget(A)):(l.ensureLine(a),l.addInlineWidget(A,g,b))}a=null}else a=pk(a,p);h>f&&this.text.skip(h-f)},span:(f,h,p,g)=>{for(let b=f;b<h;){let x=this.text.next(Math.min(512,h-b));x==null?(l.addLineStartIfNotCovered(a),l.addBreak(),b++):(l.ensureLine(a),l.addText(x,p,b==f?g:p.length),b+=x.length),a=null}}});l.addLineStartIfNotCovered(a),this.openWidget=u>c,this.openMarks=u}forward(e,n,a=1){n-e<=10?this.old.advance(n-e,a,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(n-e-10,-1),this.old.advance(5,a,this.reuseWalker))}getCompositionContext(e){let n=[],a=null;for(let l=e.parentNode;;l=l.parentNode){let c=at.get(l);if(l==this.view.contentDOM)break;c instanceof Ft?n.push(c):c?.isLine()?a=c:c instanceof ci||(l.nodeName=="DIV"&&!a&&l!=this.view.contentDOM?a=new za(l,bv):a||n.push(Ft.of(new ll({tagName:l.nodeName.toLowerCase(),attributes:GS(l)}),l)))}return{line:a,marks:n}}}function b0(i,e){let n=a=>{for(let l of a.children)if((e?l.isText():l.length)||n(l))return!0;return!1};return n(i)}function mk(i){let e=i.isReplace?(i.startSide<0?64:0)|(i.endSide>0?128:0):i.startSide>0?32:16;return i.block&&(e|=256),e}const bv={class:"cm-line"};function pk(i,e){let n=e.spec.attributes,a=e.spec.class;return!n&&!a||(i||(i={class:"cm-line"}),n&&Sh(n,i),a&&(i.class+=" "+a)),i}function gk(i){let e=[];for(let n=i.parents.length;n>1;n--){let a=n==i.parents.length?i.tile:i.parents[n].tile;a instanceof Ft&&e.push(a.mark)}return e}function ad(i){let e=at.get(i);return e&&e.setDOM(i.cloneNode()),i}class Ba extends wc{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}Ba.inline=new Ba("span");Ba.block=new Ba("div");const rd=new class extends wc{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}};class v0{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=Dt.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new Ac(e,e.contentDOM),this.updateInner([new vn(0,0,0,e.state.doc.length)],null)}update(e){var n;let a=e.changedRanges;this.minWidth>0&&a.length&&(a.every(({fromA:g,toA:b})=>b<this.minWidthFrom||g>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let l=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((n=this.domChanged)===null||n===void 0)&&n.newSel?l=this.domChanged.newSel.head:!Tk(e.changes,this.hasComposition)&&!e.selectionSet&&(l=e.state.selection.main.head));let c=l>-1?bk(this.view,e.changes,l):null;if(this.domChanged=null,this.hasComposition){let{from:g,to:b}=this.hasComposition;a=new vn(g,b,e.changes.mapPos(g,-1),e.changes.mapPos(b,1)).addToSet(a.slice())}this.hasComposition=c?{from:c.range.fromB,to:c.range.toB}:null,(P.ie||P.chrome)&&!c&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let u=this.decorations,f=this.blockWrappers;this.updateDeco();let h=wk(u,this.decorations,e.changes);h.length&&(a=vn.extendWithRanges(a,h));let p=kk(f,this.blockWrappers,e.changes);return p.length&&(a=vn.extendWithRanges(a,p)),c&&!a.some(g=>g.fromA<=c.range.fromA&&g.toA>=c.range.toA)&&(a=c.range.addToSet(a.slice())),this.tile.flags&2&&a.length==0?!1:(this.updateInner(a,c),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,n){this.view.viewState.mustMeasureContent=!0;let{observer:a}=this.view;a.ignore(()=>{if(n||e.length){let u=this.tile,f=new hk(this.view,u,this.blockWrappers,this.decorations,this.dynamicDecorationMap);n&&at.get(n.text)&&f.cache.reused.set(at.get(n.text),2),this.tile=f.run(e,n),Jd(u,f.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let c=P.chrome||P.ios?{node:a.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(c),c&&(c.written||a.selectionRange.focusNode!=c.node||!this.tile.dom.contains(c.node))&&(this.forceSelection=!0),this.tile.dom.style.height=""});let l=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let c of this.tile.children)c.isWidget()&&c.widget instanceof ld&&l.push(c.dom);a.updateGaps(l)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let n of e.transactions)for(let a of n.effects)a.is(dv)&&(this.editContextFormatting=a.value)}updateSelection(e=!1,n=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:a}=this.tile,l=this.view.root.activeElement,c=l==a,u=!c&&!(this.view.state.facet(ai)||a.tabIndex>-1)&&Fr(a,this.view.observer.selectionRange)&&!(l&&a.contains(l));if(!(c||n||u))return;let f=this.forceSelection;this.forceSelection=!1;let h=this.view.state.selection.main,p,g;if(h.empty?g=p=this.inlineDOMNearPos(h.anchor,h.assoc||1):(g=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),p=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),P.gecko&&h.empty&&!this.hasComposition&&yk(p)){let x=document.createTextNode("");this.view.observer.ignore(()=>p.node.insertBefore(x,p.node.childNodes[p.offset]||null)),p=g=new Tn(x,0),f=!0}let b=this.view.observer.selectionRange;(f||!b.focusNode||(!Zr(p.node,p.offset,b.anchorNode,b.anchorOffset)||!Zr(g.node,g.offset,b.focusNode,b.focusOffset))&&!this.suppressWidgetCursorChange(b,h))&&(this.view.observer.ignore(()=>{P.android&&P.chrome&&a.contains(b.focusNode)&&Ak(b.focusNode,a)&&(a.blur(),a.focus({preventScroll:!0}));let x=al(this.view.root);if(x)if(h.empty){if(P.gecko){let S=vk(p.node,p.offset);if(S&&S!=3){let k=(S==1?Zb:Pb)(p.node,p.offset);k&&(p=new Tn(k.node,k.offset))}}x.collapse(p.node,p.offset),h.bidiLevel!=null&&x.caretBidiLevel!==void 0&&(x.caretBidiLevel=h.bidiLevel)}else if(x.extend){x.collapse(p.node,p.offset);try{x.extend(g.node,g.offset)}catch{}}else{let S=document.createRange();h.anchor>h.head&&([p,g]=[g,p]),S.setEnd(g.node,g.offset),S.setStart(p.node,p.offset),x.removeAllRanges(),x.addRange(S)}u&&this.view.root.activeElement==a&&(a.blur(),l&&l.focus())}),this.view.observer.setSelectionRange(p,g)),this.impreciseAnchor=p.precise?null:new Tn(b.anchorNode,b.anchorOffset),this.impreciseHead=g.precise?null:new Tn(b.focusNode,b.focusOffset)}suppressWidgetCursorChange(e,n){return this.hasComposition&&n.empty&&Zr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==n.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,n=e.state.selection.main,a=al(e.root),{anchorNode:l,anchorOffset:c}=e.observer.selectionRange;if(!a||!n.empty||!n.assoc||!a.modify)return;let u=this.lineAt(n.head,n.assoc);if(!u)return;let f=u.posAtStart;if(n.head==f||n.head==f+u.length)return;let h=this.coordsAt(n.head,-1),p=this.coordsAt(n.head,1);if(!h||!p||h.bottom>p.top)return;let g=this.domAtPos(n.head+n.assoc,n.assoc);a.collapse(g.node,g.offset),a.modify("move",n.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let b=e.observer.selectionRange;e.docView.posFromDOM(b.anchorNode,b.anchorOffset)!=n.from&&a.collapse(l,c)}posFromDOM(e,n){let a=this.tile.nearest(e);if(!a)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let l=a.posAtStart;if(a.isComposite()){let c;if(e==a.dom)c=a.dom.childNodes[n];else{let u=ui(e)==0?0:n==0?-1:1;for(;;){let f=e.parentNode;if(f==a.dom)break;u==0&&f.firstChild!=f.lastChild&&(e==f.firstChild?u=-1:u=1),e=f}u<0?c=e:c=e.nextSibling}if(c==a.dom.firstChild)return l;for(;c&&!at.get(c);)c=c.nextSibling;if(!c)return l+a.length;for(let u=0,f=l;;u++){let h=a.children[u];if(h.dom==c)return f;f+=h.length+h.breakAfter}}else return a.isText()?e==a.dom?l+n:l+(n?a.length:0):l}domAtPos(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.domPosFor(e,n):a.domIn(l,n)}inlineDOMNearPos(e,n){let a,l=-1,c=!1,u,f=-1,h=!1;return this.tile.blockTiles((p,g)=>{if(p.isWidget()){if(p.flags&32&&g>=e)return!0;p.flags&16&&(c=!0)}else{let b=g+p.length;if(g<=e&&(a=p,l=e-g,c=b<e),b>=e&&!u&&(u=p,f=e-g,h=g>e),g>e&&u)return!0}}),!a&&!u?this.domAtPos(e,n):(c&&u?a=null:h&&a&&(u=null),a&&n<0||!u?a.domIn(l,n):u.domIn(f,n))}coordsAt(e,n){let{tile:a,offset:l}=this.tile.resolveBlock(e,n);return a.isWidget()?a.widget instanceof ld?null:a.coordsInWidget(l,n,!0):a.coordsIn(l,n)}lineAt(e,n){let{tile:a}=this.tile.resolveBlock(e,n);return a.isLine()?a:null}coordsForChar(e){let{tile:n,offset:a}=this.tile.resolveBlock(e,1);if(!n.isLine())return null;function l(c,u){if(c.isComposite())for(let f of c.children){if(f.length>=u){let h=l(f,u);if(h)return h}if(u-=f.length,u<0)break}else if(c.isText()&&u<c.length){let f=_n(c.text,u);if(f==u)return null;let h=rl(c.dom,u,f).getClientRects();for(let p=0;p<h.length;p++){let g=h[p];if(p==h.length-1||g.top<g.bottom&&g.left<g.right)return g}}return null}return l(n,a)}measureVisibleLineHeights(e){let n=[],{from:a,to:l}=e,c=this.view.contentDOM.clientWidth,u=c>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,f=-1,h=this.view.textDirection==ct.LTR,p=0,g=(b,x,S)=>{for(let k=0;k<b.children.length&&!(x>l);k++){let A=b.children[k],M=x+A.length,_=A.dom.getBoundingClientRect(),{height:U}=_;if(S&&!k&&(p+=_.top-S.top),A instanceof ci)M>a&&g(A,x,_);else if(x>=a&&(p>0&&n.push(-p),n.push(U+p),p=0,u)){let K=A.dom.lastChild,$=K?Xo(K):[];if($.length){let B=$[$.length-1],W=h?B.right-_.left:_.right-B.left;W>f&&(f=W,this.minWidth=c,this.minWidthFrom=x,this.minWidthTo=M)}}S&&k==b.children.length-1&&(p+=S.bottom-_.bottom),x=M+A.breakAfter}};return g(this.tile,0,null),n}textDirectionAt(e){let{tile:n}=this.tile.resolveBlock(e,1);return getComputedStyle(n.dom).direction=="rtl"?ct.RTL:ct.LTR}measureTextSize(){let e=this.tile.blockTiles(u=>{if(u.isLine()&&u.children.length&&u.length<=20){let f=0,h;for(let p of u.children){if(!p.isText()||/[^ -~]/.test(p.text))return;let g=Xo(p.dom);if(g.length!=1)return;f+=g[0].width,h=g[0].height}if(f)return{lineHeight:u.dom.getBoundingClientRect().height,charWidth:f/u.length,textHeight:h}}});if(e)return e;let n=document.createElement("div"),a,l,c;return n.className="cm-line",n.style.width="99999px",n.style.position="absolute",n.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(n);let u=Xo(n.firstChild)[0];a=n.getBoundingClientRect().height,l=u&&u.width?u.width/27:7,c=u&&u.height?u.height:a,n.remove()}),{lineHeight:a,charWidth:l,textHeight:c}}computeBlockGapDeco(){let e=[],n=this.view.viewState;for(let a=0,l=0;;l++){let c=l==n.viewports.length?null:n.viewports[l],u=c?c.from-1:this.view.state.doc.length;if(u>a){let f=(n.lineBlockAt(u).bottom-n.lineBlockAt(a).top)/this.view.scaleY;e.push(Dt.replace({widget:new ld(f),block:!0,inclusive:!0,isBlockGap:!0}).range(a,u))}if(!c)break;a=c.to+1}return Dt.set(e)}updateDeco(){let e=1,n=this.view.state.facet(Sc).map(c=>(this.dynamicDecorationMap[e++]=typeof c=="function")?c(this.view):c),a=!1,l=this.view.state.facet(Mh).map((c,u)=>{let f=typeof c=="function";return f&&(a=!0),f?c(this.view):c});for(l.length&&(this.dynamicDecorationMap[e++]=a,n.push(Ce.join(l))),this.decorations=[this.editContextFormatting,...n,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(mv).map(c=>typeof c=="function"?c(this.view):c)}scrollIntoView(e){var n;if(e.isSnapshot){let g=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=g.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let g of this.view.state.facet(fv))try{if(g(this.view,e.range,e))return!0}catch(b){li(this.view.state,b,"scroll handler")}let{range:a}=e,l=this.coordsAt(a.head,(n=a.assoc)!==null&&n!==void 0?n:a.empty?0:a.head>a.anchor?-1:1),c;if(!l)return;!a.empty&&(c=this.coordsAt(a.anchor,a.anchor>a.head?-1:1))&&(l={left:Math.min(l.left,c.left),top:Math.min(l.top,c.top),right:Math.max(l.right,c.right),bottom:Math.max(l.bottom,c.bottom)});let u=yv(this.view),f={left:l.left-u.left,top:l.top-u.top,right:l.right+u.right,bottom:l.bottom+u.bottom},{offsetWidth:h,offsetHeight:p}=this.view.scrollDOM;if(KS(this.view.scrollDOM,f,a.head<a.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,h),-h),Math.max(Math.min(e.yMargin,p),-p),this.view.textDirection==ct.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(l.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||l.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let g=this.view.docView.lineAt(a.head,1);g&&g.dom.scrollIntoView({block:"nearest"})}}lineHasWidget(e){let n=a=>a.isWidget()||a.children.some(n);return n(this.tile.resolveBlock(e,1).tile)}destroy(){Jd(this.tile)}}function Jd(i,e){let n=e?.get(i);if(n!=1){n==null&&i.destroy();for(let a of i.children)Jd(a,e)}}function yk(i){return i.node.nodeType==1&&i.node.firstChild&&(i.offset==0||i.node.childNodes[i.offset-1].contentEditable=="false")&&(i.offset==i.node.childNodes.length||i.node.childNodes[i.offset].contentEditable=="false")}function vv(i,e){let n=i.observer.selectionRange;if(!n.focusNode)return null;let a=Zb(n.focusNode,n.focusOffset),l=Pb(n.focusNode,n.focusOffset),c=a||l;if(l&&a&&l.node!=a.node){let f=at.get(l.node);if(!f||f.isText()&&f.text!=l.node.nodeValue)c=l;else if(i.docView.lastCompositionAfterCursor){let h=at.get(a.node);!h||h.isText()&&h.text!=a.node.nodeValue||(c=l)}}if(i.docView.lastCompositionAfterCursor=c!=a,!c)return null;let u=e-c.offset;return{from:u,to:u+c.node.nodeValue.length,node:c.node}}function bk(i,e,n){let a=vv(i,n);if(!a)return null;let{node:l,from:c,to:u}=a,f=l.nodeValue;if(/[\n\r]/.test(f)||i.state.doc.sliceString(a.from,a.to)!=f)return null;let h=e.invertedDesc;return{range:new vn(h.mapPos(c),h.mapPos(u),c,u),text:l}}function vk(i,e){return i.nodeType!=1?0:(e&&i.childNodes[e-1].contentEditable=="false"?1:0)|(e<i.childNodes.length&&i.childNodes[e].contentEditable=="false"?2:0)}let xk=class{constructor(){this.changes=[]}compareRange(e,n){Ca(e,n,this.changes)}comparePoint(e,n){Ca(e,n,this.changes)}boundChange(e){Ca(e,e,this.changes)}};function wk(i,e,n){let a=new xk;return Ce.compare(i,e,n,a),a.changes}class Sk{constructor(){this.changes=[]}compareRange(e,n){Ca(e,n,this.changes)}comparePoint(){}boundChange(e){Ca(e,e,this.changes)}}function kk(i,e,n){let a=new Sk;return Ce.compare(i,e,n,a),a.changes}function Ak(i,e){for(let n=i;n&&n!=e;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable=="false")return!0;return!1}function Tk(i,e){let n=!1;return e&&i.iterChangedRanges((a,l)=>{a<e.to&&l>e.from&&(n=!0)}),n}class ld extends wc{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function Ek(i,e,n=1){let a=i.charCategorizer(e),l=i.doc.lineAt(e),c=e-l.from;if(l.length==0)return J.cursor(e);c==0?n=1:c==l.length&&(n=-1);let u=c,f=c;n<0?u=_n(l.text,c,!1):f=_n(l.text,c);let h=a(l.text.slice(u,f));for(;u>0;){let p=_n(l.text,u,!1);if(a(l.text.slice(p,u))!=h)break;u=p}for(;f<l.length;){let p=_n(l.text,f);if(a(l.text.slice(f,p))!=h)break;f=p}return J.range(u+l.from,f+l.from)}function Rk(i,e,n,a,l){let c=Math.round((a-e.left)*i.defaultCharacterWidth);if(i.lineWrapping&&n.height>i.defaultLineHeight*1.5){let f=i.viewState.heightOracle.textHeight,h=Math.floor((l-n.top-(i.defaultLineHeight-f)*.5)/f);c+=h*i.viewState.heightOracle.lineLength}let u=i.state.sliceDoc(n.from,n.to);return n.from+LS(u,c,i.state.tabSize)}function Id(i,e,n){let a=i.lineBlockAt(e);if(Array.isArray(a.type)){let l;for(let c of a.type){if(c.from>e)break;if(!(c.to<e)){if(c.from<e&&c.to>e)return c;(!l||c.type==Nt.Text&&(l.type!=c.type||(n<0?c.from<e:c.to>e)))&&(l=c)}}return l||a}return a}function Mk(i,e,n,a){let l=Id(i,e.head,e.assoc||-1),c=!a||l.type!=Nt.Text||!(i.lineWrapping||l.widgetLineBreaks)?null:i.coordsAtPos(e.assoc<0&&e.head>l.from?e.head-1:e.head);if(c){let u=i.dom.getBoundingClientRect(),f=i.textDirectionAt(l.from),h=i.posAtCoords({x:n==(f==ct.LTR)?u.right-1:u.left+1,y:(c.top+c.bottom)/2});if(h!=null)return J.cursor(h,n?-1:1)}return J.cursor(n?l.to:l.from,n?-1:1)}function x0(i,e,n,a){let l=i.state.doc.lineAt(e.head),c=i.bidiSpans(l),u=i.textDirectionAt(l.from);for(let f=e,h=null;;){let p=nk(l,c,u,f,n),g=nv;if(!p){if(l.number==(n?i.state.doc.lines:1))return f;g=`
`,l=i.state.doc.line(l.number+(n?1:-1)),c=i.bidiSpans(l),p=i.visualLineSide(l,!n)}if(h){if(!h(g))return f}else{if(!a)return p;h=a(g)}f=p}}function Ck(i,e,n){let a=i.state.charCategorizer(e),l=a(n);return c=>{let u=a(c);return l==ri.Space&&(l=u),l==u}}function Ok(i,e,n,a){let l=e.head,c=n?1:-1;if(l==(n?i.state.doc.length:0))return J.cursor(l,e.assoc);let u=e.goalColumn,f,h=i.contentDOM.getBoundingClientRect(),p=i.coordsAtPos(l,e.assoc||((e.empty?n:e.head==e.from)?1:-1)),g=i.documentTop;if(p)u==null&&(u=p.left-h.left),f=c<0?p.top:p.bottom;else{let k=i.viewState.lineBlockAt(l);u==null&&(u=Math.min(h.right-h.left,i.defaultCharacterWidth*(l-k.from))),f=(c<0?k.top:k.bottom)+g}let b=h.left+u,x=i.viewState.heightOracle.textHeight>>1,S=a??x;for(let k=0;;k+=x){let A=f+(S+k)*c,M=eh(i,{x:b,y:A},!1,c);if(n?A>h.bottom:A<h.top)return J.cursor(M.pos,M.assoc);let _=i.coordsAtPos(M.pos,M.assoc),U=_?(_.top+_.bottom)/2:0;if(!_||(n?U>f:U<f))return J.cursor(M.pos,M.assoc,void 0,u)}}function Pr(i,e,n){for(;;){let a=0;for(let l of i)l.between(e-1,e+1,(c,u,f)=>{if(e>c&&e<u){let h=a||n||(e-c<u-e?-1:1);e=h<0?c:u,a=h}});if(!a)return e}}function xv(i,e){let n=null;for(let a=0;a<e.ranges.length;a++){let l=e.ranges[a],c=null;if(l.empty){let u=Pr(i,l.from,0);u!=l.from&&(c=J.cursor(u,-1))}else{let u=Pr(i,l.from,-1),f=Pr(i,l.to,1);(u!=l.from||f!=l.to)&&(c=J.range(l.from==l.anchor?u:f,l.from==l.head?u:f))}c&&(n||(n=e.ranges.slice()),n[a]=c)}return n?J.create(n,e.mainIndex):e}function od(i,e,n){let a=Pr(i.state.facet(cl).map(l=>l(i)),n.from,e.head>n.from?-1:1);return a==n.from?n:J.cursor(a,a<n.from?1:-1)}class Ln{constructor(e,n){this.pos=e,this.assoc=n}}function eh(i,e,n,a){let l=i.contentDOM.getBoundingClientRect(),c=l.top+i.viewState.paddingTop,{x:u,y:f}=e,h=f-c,p;for(;;){if(h<0)return new Ln(0,1);if(h>i.viewState.docHeight)return new Ln(i.state.doc.length,-1);if(p=i.elementAtHeight(h),a==null)break;if(p.type==Nt.Text){if(a<0?p.to<i.viewport.from:p.from>i.viewport.to)break;let x=i.docView.coordsAt(a<0?p.from:p.to,a>0?-1:1);if(x&&(a<0?x.top<=h+c:x.bottom>=h+c))break}let b=i.viewState.heightOracle.textHeight/2;h=a>0?p.bottom+b:p.top-b}if(i.viewport.from>=p.to||i.viewport.to<=p.from){if(n)return null;if(p.type==Nt.Text){let b=Rk(i,l,p,u,f);return new Ln(b,b==p.from?1:-1)}}if(p.type!=Nt.Text)return h<(p.top+p.bottom)/2?new Ln(p.from,1):new Ln(p.to,-1);let g=i.docView.lineAt(p.from,2);return(!g||g.length!=p.length)&&(g=i.docView.lineAt(p.from,-2)),new jk(i,u,f,i.textDirectionAt(p.from)).scanTile(g,p.from)}class jk{constructor(e,n,a,l){this.view=e,this.x=n,this.y=a,this.baseDir=l,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[Hn.find(l,e-a.from,-1,n)].level==this.baseDir}dirAt(e,n){let{line:a,spans:l}=this.bidiSpansAt(e);return l[Hn.find(l,e-a.from,-1,n)].dir}bidiIn(e,n){let{spans:a,line:l}=this.bidiSpansAt(e);return a.length>1||a.length&&(a[0].level!=this.baseDir||a[0].to+l.from<n)}scan(e,n,a=!1){let l=0,c=e.length-1,u=new Set,f=this.bidiIn(e[0],e[c]),h,p,g=-1,b=1e9,x;e:for(;l<c;){let k=c-l,A=l+c>>1;t:if(u.has(A)){let _=l+Math.floor(Math.random()*k);for(let U=0;U<k;U++){if(!u.has(_)){A=_;break t}_++,_==c&&(_=l)}break e}u.add(A);let M=n(A);if(M)for(let _=0;_<M.length;_++){let U=M[_],K=0;if(!(U.width==0&&M.length>1)){if(U.bottom<this.y)(!h||h.bottom<U.bottom)&&(h=U),K=1;else if(U.top>this.y)(!p||p.top>U.top)&&(p=U),K=-1;else{let $=U.left>this.x?this.x-U.left:U.right<this.x?this.x-U.right:0,B=Math.abs($);B<b&&(g=A,b=B,x=U),$&&(K=$<0==(this.baseDir==ct.LTR)?-1:1)}K==-1&&(!f||this.baseDirAt(e[A],1))?c=A:K==1&&(!f||this.baseDirAt(e[A+1],-1))&&(l=A+1)}}}if(!x){if(!p&&!h)return{i:e[0],after:!1};let k=h&&(!p||this.y-h.bottom<p.top-this.y)?h:p;return this.y=(k.top+k.bottom)/2,this.scan(e,n,!0)}if(b&&!a){let{top:k,bottom:A}=x;if(h&&h.bottom>(k+k+A)/3)return this.y=h.bottom-1,this.scan(e,n,!0);if(p&&p.top<(k+A+A)/3)return this.y=p.top+1,this.scan(e,n,!0)}let S=(f?this.dirAt(e[g],1):this.baseDir)==ct.LTR;return{i:g,after:this.x>(x.left+x.right)/2==S}}scanText(e,n){let a=[];for(let c=0;c<e.length;c=_n(e.text,c))a.push(n+c);a.push(n+e.length);let l=this.scan(a,c=>{let u=a[c]-n,f=a[c+1]-n;return rl(e.dom,u,f).getClientRects()});return l.after?new Ln(a[l.i+1],-1):new Ln(a[l.i],1)}scanTile(e,n){if(!e.length)return new Ln(n,1);if(e.children.length==1){let f=e.children[0];if(f.isText())return this.scanText(f,n);if(f.isComposite())return this.scanTile(f,n)}let a=[n];for(let f=0,h=n;f<e.children.length;f++)a.push(h+=e.children[f].length);let l=this.scan(a,f=>{let h=e.children[f];return h.flags&48?null:(h.dom.nodeType==1?h.dom:rl(h.dom,0,h.length)).getClientRects()}),c=e.children[l.i],u=a[l.i];return c.isText()?this.scanText(c,u):c.isComposite()?this.scanTile(c,u):l.after?new Ln(a[l.i+1],-1):new Ln(u,1)}}const Aa="￿";class Nk{constructor(e,n){this.points=e,this.view=n,this.text="",this.lineSeparator=n.state.facet(Ye.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=Aa}readRange(e,n){if(!e)return this;let a=e.parentNode;for(let l=e;;){this.findPointBefore(a,l);let c=this.text.length;this.readNode(l);let u=at.get(l),f=l.nextSibling;if(f==n){u?.breakAfter&&!f&&a!=this.view.contentDOM&&this.lineBreak();break}let h=at.get(f);(u&&h?u.breakAfter:(u?u.breakAfter:nc(l))||nc(f)&&(l.nodeName!="BR"||u?.isWidget())&&this.text.length>c)&&!zk(f,n)&&this.lineBreak(),l=f}return this.findPointBefore(a,n),this}readTextNode(e){let n=e.nodeValue;for(let a of this.points)a.node==e&&(a.pos=this.text.length+Math.min(a.offset,n.length));for(let a=0,l=this.lineSeparator?null:/\r\n?|\n/g;;){let c=-1,u=1,f;if(this.lineSeparator?(c=n.indexOf(this.lineSeparator,a),u=this.lineSeparator.length):(f=l.exec(n))&&(c=f.index,u=f[0].length),this.append(n.slice(a,c<0?n.length:c)),c<0)break;if(this.lineBreak(),u>1)for(let h of this.points)h.node==e&&h.pos>this.text.length&&(h.pos-=u-1);a=c+u}}readNode(e){let n=at.get(e),a=n&&n.overrideDOMText;if(a!=null){this.findPointInside(e,a.length);for(let l=a.iter();!l.next().done;)l.lineBreak?this.lineBreak():this.append(l.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,n){for(let a of this.points)a.node==e&&e.childNodes[a.offset]==n&&(a.pos=this.text.length)}findPointInside(e,n){for(let a of this.points)(e.nodeType==3?a.node==e:e.contains(a.node))&&(a.pos=this.text.length+(Dk(e,a.node,a.offset)?n:0))}}function Dk(i,e,n){for(;;){if(!e||n<ui(e))return!1;if(e==i)return!0;n=Qi(e)+1,e=e.parentNode}}function zk(i,e){let n;for(;!(i==e||!i);i=i.nextSibling){let a=at.get(i);if(!a?.isWidget())return!1;a&&(n||(n=[])).push(a)}if(n)for(let a of n){let l=a.overrideDOMText;if(l?.length)return!1}return!0}class w0{constructor(e,n){this.node=e,this.offset=n,this.pos=-1}}class Bk{constructor(e,n,a,l){this.typeOver=l,this.bounds=null,this.text="",this.domChanged=n>-1;let{impreciseHead:c,impreciseAnchor:u}=e.docView,f=e.state.selection;if(e.state.readOnly&&n>-1)this.newSel=null;else if(n>-1&&(this.bounds=wv(e.docView.tile,n,a,0))){let h=c||u?[]:_k(e),p=new Nk(h,e);p.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=p.text,this.newSel=Hk(h,this.bounds.from)}else{let h=e.observer.selectionRange,p=c&&c.node==h.focusNode&&c.offset==h.focusOffset||!Xd(e.contentDOM,h.focusNode)?f.main.head:e.docView.posFromDOM(h.focusNode,h.focusOffset),g=u&&u.node==h.anchorNode&&u.offset==h.anchorOffset||!Xd(e.contentDOM,h.anchorNode)?f.main.anchor:e.docView.posFromDOM(h.anchorNode,h.anchorOffset),b=e.viewport;if((P.ios||P.chrome)&&f.main.empty&&p!=g&&(b.from>0||b.to<e.state.doc.length)){let x=Math.min(p,g),S=Math.max(p,g),k=b.from-x,A=b.to-S;(k==0||k==1||x==0)&&(A==0||A==-1||S==e.state.doc.length)&&(p=0,g=e.state.doc.length)}if(e.inputState.composing>-1&&f.ranges.length>1)this.newSel=f.replaceRange(J.range(g,p));else if(e.lineWrapping&&g==p&&!(f.main.empty&&f.main.head==p)&&e.inputState.lastTouchTime>Date.now()-100){let x=e.coordsAtPos(p,-1),S=0;x&&(S=e.inputState.lastTouchY<=x.bottom?-1:1),this.newSel=J.create([J.cursor(p,S)])}else this.newSel=J.single(g,p)}}}function wv(i,e,n,a){if(i.isComposite()){let l=-1,c=-1,u=-1,f=-1;for(let h=0,p=a,g=a;h<i.children.length;h++){let b=i.children[h],x=p+b.length;if(p<e&&x>n)return wv(b,e,n,p);if(x>=e&&l==-1&&(l=h,c=p),p>n&&b.dom.parentNode==i.dom){u=h,f=g;break}g=x,p=x+b.breakAfter}return{from:c,to:f<0?a+i.length:f,startDOM:(l?i.children[l-1].dom.nextSibling:null)||i.dom.firstChild,endDOM:u<i.children.length&&u>=0?i.children[u].dom:null}}else return i.isText()?{from:a,to:a+i.length,startDOM:i.dom,endDOM:i.dom.nextSibling}:null}function Sv(i,e){let n,{newSel:a}=e,{state:l}=i,c=l.selection.main,u=i.inputState.lastKeyTime>Date.now()-100?i.inputState.lastKeyCode:-1;if(e.bounds){let{from:f,to:h}=e.bounds,p=c.from,g=null;(u===8||P.android&&e.text.length<h-f)&&(p=c.to,g="end");let b=l.doc.sliceString(f,h,Aa),x,S;!c.empty&&c.from>=f&&c.to<=h&&(e.typeOver||b!=e.text)&&b.slice(0,c.from-f)==e.text.slice(0,c.from-f)&&b.slice(c.to-f)==e.text.slice(x=e.text.length-(b.length-(c.to-f)))?n={from:c.from,to:c.to,insert:Be.of(e.text.slice(c.from-f,x).split(Aa))}:(S=kv(b,e.text,p-f,g))&&(P.chrome&&u==13&&S.toB==S.from+2&&e.text.slice(S.from,S.toB)==Aa+Aa&&S.toB--,n={from:f+S.from,to:f+S.toA,insert:Be.of(e.text.slice(S.from,S.toB).split(Aa))})}else a&&(!i.hasFocus&&l.facet(ai)||lc(a,c))&&(a=null);if(!n&&!a)return!1;if((P.mac||P.android)&&n&&n.from==n.to&&n.from==c.head-1&&/^\. ?$/.test(n.insert.toString())&&i.contentDOM.getAttribute("autocorrect")=="off"?(a&&n.insert.length==2&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:n.from,to:n.to,insert:Be.of([n.insert.toString().replace("."," ")])}):l.doc.lineAt(c.from).to<c.to&&i.docView.lineHasWidget(c.to)&&i.inputState.insertingTextAt>Date.now()-50?n={from:c.from,to:c.to,insert:l.toText(i.inputState.insertingText)}:P.chrome&&n&&n.from==n.to&&n.from==c.head&&n.insert.toString()==`
 `&&i.lineWrapping&&(a&&(a=J.single(a.main.anchor-1,a.main.head-1)),n={from:c.from,to:c.to,insert:Be.of([" "])}),n)return Ch(i,n,a,u);if(a&&!lc(a,c)){let f=!1,h="select";return i.inputState.lastSelectionTime>Date.now()-50&&(i.inputState.lastSelectionOrigin=="select"&&(f=!0),h=i.inputState.lastSelectionOrigin,h=="select.pointer"&&(a=xv(l.facet(cl).map(p=>p(i)),a))),i.dispatch({selection:a,scrollIntoView:f,userEvent:h}),!0}else return!1}function Ch(i,e,n,a=-1){if(P.ios&&i.inputState.flushIOSKey(e))return!0;let l=i.state.selection.main;if(P.android&&(e.to==l.to&&(e.from==l.from||e.from==l.from-1&&i.state.sliceDoc(e.from,l.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&Oa(i.contentDOM,"Enter",13)||(e.from==l.from-1&&e.to==l.to&&e.insert.length==0||a==8&&e.insert.length<e.to-e.from&&e.to>l.head)&&Oa(i.contentDOM,"Backspace",8)||e.from==l.from&&e.to==l.to+1&&e.insert.length==0&&Oa(i.contentDOM,"Delete",46)))return!0;let c=e.insert.toString();i.inputState.composing>=0&&i.inputState.composing++;let u,f=()=>u||(u=Lk(i,e,n));return i.state.facet(lv).some(h=>h(i,e.from,e.to,c,f))||i.dispatch(f()),!0}function Lk(i,e,n){let a,l=i.state,c=l.selection.main,u=-1;if(e.from==e.to&&e.from<c.from||e.from>c.to){let h=e.from<c.from?-1:1,p=h<0?c.from:c.to,g=Pr(l.facet(cl).map(b=>b(i)),p,h);e.from==g&&(u=g)}if(u>-1)a={changes:e,selection:J.cursor(e.from+e.insert.length,-1)};else if(e.from>=c.from&&e.to<=c.to&&e.to-e.from>=(c.to-c.from)/3&&(!n||n.main.empty&&n.main.from==e.from+e.insert.length)&&i.inputState.composing<0){let h=c.from<e.from?l.sliceDoc(c.from,e.from):"",p=c.to>e.to?l.sliceDoc(e.to,c.to):"";a=l.replaceSelection(i.state.toText(h+e.insert.sliceString(0,void 0,i.state.lineBreak)+p))}else{let h=l.changes(e),p=n&&n.main.to<=h.newLength?n.main:void 0;if(l.selection.ranges.length>1&&(i.inputState.composing>=0||i.inputState.compositionPendingChange)&&e.to<=c.to+10&&e.to>=c.to-10){let g=i.state.sliceDoc(e.from,e.to),b,x=n&&vv(i,n.main.head);if(x){let k=e.insert.length-(e.to-e.from);b={from:x.from,to:x.to-k}}else b=i.state.doc.lineAt(c.head);let S=c.to-e.to;a=l.changeByRange(k=>{if(k.from==c.from&&k.to==c.to)return{changes:h,range:p||k.map(h)};let A=k.to-S,M=A-g.length;if(i.state.sliceDoc(M,A)!=g||A>=b.from&&M<=b.to)return{range:k};let _=l.changes({from:M,to:A,insert:e.insert}),U=k.to-c.to;return{changes:_,range:p?J.range(Math.max(0,p.anchor+U),Math.max(0,p.head+U)):k.map(_)}})}else a={changes:h,selection:p&&l.selection.replaceRange(p)}}let f="input.type";return(i.composing||i.inputState.compositionPendingChange&&i.inputState.compositionEndedAt>Date.now()-50)&&(i.inputState.compositionPendingChange=!1,f+=".compose",i.inputState.compositionFirstChange&&(f+=".start",i.inputState.compositionFirstChange=!1)),l.update(a,{userEvent:f,scrollIntoView:!0})}function kv(i,e,n,a){let l=Math.min(i.length,e.length),c=0;for(;c<l&&i.charCodeAt(c)==e.charCodeAt(c);)c++;if(c==l&&i.length==e.length)return null;let u=i.length,f=e.length;for(;u>0&&f>0&&i.charCodeAt(u-1)==e.charCodeAt(f-1);)u--,f--;if(a=="end"){let h=Math.max(0,c-Math.min(u,f));n-=u+h-c}if(u<c&&i.length<e.length){let h=n<=c&&n>=u?c-n:0;c-=h,f=c+(f-u),u=c}else if(f<c){let h=n<=c&&n>=f?c-n:0;c-=h,u=c+(u-f),f=c}return{from:c,toA:u,toB:f}}function _k(i){let e=[];if(i.root.activeElement!=i.contentDOM)return e;let{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}=i.observer.selectionRange;return n&&(e.push(new w0(n,a)),(l!=n||c!=a)&&e.push(new w0(l,c))),e}function Hk(i,e){if(i.length==0)return null;let n=i[0].pos,a=i.length==2?i[1].pos:n;return n>-1&&a>-1?J.single(n+e,a+e):null}function lc(i,e){return e.head==i.main.head&&e.anchor==i.main.anchor}class qk{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,P.safari&&e.contentDOM.addEventListener("input",()=>null),P.gecko&&eA(e.contentDOM.ownerDocument)}handleEvent(e){!Xk(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,n){let a=this.handlers[e];if(a){for(let l of a.observers)l(this.view,n);for(let l of a.handlers){if(n.defaultPrevented)break;if(l(this.view,n)){n.preventDefault();break}}}}ensureHandlers(e){let n=Uk(e),a=this.handlers,l=this.view.contentDOM;for(let c in n)if(c!="scroll"){let u=!n[c].handlers.length,f=a[c];f&&u!=!f.handlers.length&&(l.removeEventListener(c,this.handleEvent),f=null),f||l.addEventListener(c,this.handleEvent,{passive:u})}for(let c in a)c!="scroll"&&!n[c]&&l.removeEventListener(c,this.handleEvent);this.handlers=n}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Tv.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),P.android&&P.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let n;return P.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&!e.shiftKey&&((n=Av.find(a=>a.keyCode==e.keyCode))&&!e.ctrlKey||Vk.indexOf(e.key)>-1&&e.ctrlKey)?(this.pendingIOSKey=n||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let n=this.pendingIOSKey;return!n||n.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,Oa(this.view.contentDOM,n.key,n.keyCode,n instanceof KeyboardEvent?n:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:P.safari&&!P.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function S0(i,e){return(n,a)=>{try{return e.call(i,a,n)}catch(l){li(n.state,l)}}}function Uk(i){let e=Object.create(null);function n(a){return e[a]||(e[a]={observers:[],handlers:[]})}for(let a of i){let l=a.spec,c=l&&l.plugin.domEventHandlers,u=l&&l.plugin.domEventObservers;if(c)for(let f in c){let h=c[f];h&&n(f).handlers.push(S0(a.value,h))}if(u)for(let f in u){let h=u[f];h&&n(f).observers.push(S0(a.value,h))}}for(let a in En)n(a).handlers.push(En[a]);for(let a in Zt)n(a).observers.push(Zt[a]);return e}const Av=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],Vk="dthko",Tv=[16,17,18,20,91,92,224,225],zo=6;function Bo(i){return Math.max(0,i)*.7+8}function Gk(i,e){return Math.max(Math.abs(i.clientX-e.clientX),Math.abs(i.clientY-e.clientY))}class $k{constructor(e,n,a,l){this.view=e,this.startEvent=n,this.style=a,this.mustSelect=l,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=n,this.scrollParents=Xb(e.contentDOM),this.atoms=e.state.facet(cl).map(u=>u(e));let c=e.contentDOM.ownerDocument;c.addEventListener("mousemove",this.move=this.move.bind(this)),c.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=n.shiftKey,this.multiple=e.state.facet(Ye.allowMultipleSelections)&&Yk(e,n),this.dragging=Wk(e,n)&&Mv(n)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Gk(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let n=0,a=0,l=0,c=0,u=this.view.win.innerWidth,f=this.view.win.innerHeight;this.scrollParents.x&&({left:l,right:u}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:c,bottom:f}=this.scrollParents.y.getBoundingClientRect());let h=yv(this.view);e.clientX-h.left<=l+zo?n=-Bo(l-e.clientX):e.clientX+h.right>=u-zo&&(n=Bo(e.clientX-u)),e.clientY-h.top<=c+zo?a=-Bo(c-e.clientY):e.clientY+h.bottom>=f-zo&&(a=Bo(e.clientY-f)),this.setScrollSpeed(n,a)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,n){this.scrollSpeed={x:e,y:n},e||n?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:n}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),n&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=n,n=0),(e||n)&&this.view.win.scrollBy(e,n),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:n}=this,a=xv(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!a.eq(n.state.selection,this.dragging===!1))&&this.view.dispatch({selection:a,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(n=>n.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function Yk(i,e){let n=i.state.facet(iv);return n.length?n[0](e):P.mac?e.metaKey:e.ctrlKey}function Kk(i,e){let n=i.state.facet(sv);return n.length?n[0](e):P.mac?!e.altKey:!e.ctrlKey}function Wk(i,e){let{main:n}=i.state.selection;if(n.empty)return!1;let a=al(i.root);if(!a||a.rangeCount==0)return!0;let l=a.getRangeAt(0).getClientRects();for(let c=0;c<l.length;c++){let u=l[c];if(u.left<=e.clientX&&u.right>=e.clientX&&u.top<=e.clientY&&u.bottom>=e.clientY)return!0}return!1}function Xk(i,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let n=e.target,a;n!=i.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(a=at.get(n))&&a.isWidget()&&!a.isHidden&&a.widget.ignoreEvent(e))return!1;return!0}const En=Object.create(null),Zt=Object.create(null),Ev=P.ie&&P.ie_version<15||P.ios&&P.webkit_version<604;function Qk(i){let e=i.dom.parentNode;if(!e)return;let n=e.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.focus(),setTimeout(()=>{i.focus(),n.remove(),Rv(i,n.value)},50)}function Tc(i,e,n){for(let a of i.facet(e))n=a(n,i);return n}function Rv(i,e){e=Tc(i.state,Th,e);let{state:n}=i,a,l=1,c=n.toText(e),u=c.lines==n.selection.ranges.length;if(th!=null&&n.selection.ranges.every(h=>h.empty)&&th==c.toString()){let h=-1;a=n.changeByRange(p=>{let g=n.doc.lineAt(p.from);if(g.from==h)return{range:p};h=g.from;let b=n.toText((u?c.line(l++).text:e)+n.lineBreak);return{changes:{from:g.from,insert:b},range:J.cursor(p.from+b.length)}})}else u?a=n.changeByRange(h=>{let p=c.line(l++);return{changes:{from:h.from,to:h.to,insert:p.text},range:J.cursor(h.from+p.length)}}):a=n.replaceSelection(c);i.dispatch(a,{userEvent:"input.paste",scrollIntoView:!0})}Zt.scroll=i=>{i.inputState.lastScrollTop=i.scrollDOM.scrollTop,i.inputState.lastScrollLeft=i.scrollDOM.scrollLeft};Zt.wheel=Zt.mousewheel=i=>{i.inputState.lastWheelEvent=Date.now()};En.keydown=(i,e)=>(i.inputState.setSelectionOrigin("select"),e.keyCode==27&&i.inputState.tabFocusMode!=0&&(i.inputState.tabFocusMode=Date.now()+2e3),!1);Zt.touchstart=(i,e)=>{let n=i.inputState,a=e.targetTouches[0];n.lastTouchTime=Date.now(),a&&(n.lastTouchX=a.clientX,n.lastTouchY=a.clientY),n.setSelectionOrigin("select.pointer")};Zt.touchmove=i=>{i.inputState.setSelectionOrigin("select.pointer")};En.mousedown=(i,e)=>{if(i.observer.flush(),i.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let a of i.state.facet(av))if(n=a(i,e),n)break;if(!n&&e.button==0&&(n=Zk(i,e)),n){let a=!i.hasFocus;i.inputState.startMouseSelection(new $k(i,e,n,a)),a&&i.observer.ignore(()=>{Qb(i.contentDOM);let c=i.root.activeElement;c&&!c.contains(i.contentDOM)&&c.blur()});let l=i.inputState.mouseSelection;if(l)return l.start(e),l.dragging===!1}else i.inputState.setSelectionOrigin("select.pointer");return!1};function k0(i,e,n,a){if(a==1)return J.cursor(e,n);if(a==2)return Ek(i.state,e,n);{let l=i.docView.lineAt(e,n),c=i.state.doc.lineAt(l?l.posAtEnd:e),u=l?l.posAtStart:c.from,f=l?l.posAtEnd:c.to;return f<i.state.doc.length&&f==c.to&&f++,J.range(u,f)}}const Fk=P.ie&&P.ie_version<=11;let A0=null,T0=0,E0=0;function Mv(i){if(!Fk)return i.detail;let e=A0,n=E0;return A0=i,E0=Date.now(),T0=!e||n>Date.now()-400&&Math.abs(e.clientX-i.clientX)<2&&Math.abs(e.clientY-i.clientY)<2?(T0+1)%3:1}function Zk(i,e){let n=i.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),a=Mv(e),l=i.state.selection;return{update(c){c.docChanged&&(n.pos=c.changes.mapPos(n.pos),l=l.map(c.changes))},get(c,u,f){let h=i.posAndSideAtCoords({x:c.clientX,y:c.clientY},!1),p,g=k0(i,h.pos,h.assoc,a);if(n.pos!=h.pos&&!u){let b=k0(i,n.pos,n.assoc,a),x=Math.min(b.from,g.from),S=Math.max(b.to,g.to);g=x<g.from?J.range(x,S,g.assoc):J.range(S,x,g.assoc)}return u?l.replaceRange(l.main.extend(g.from,g.to,g.assoc)):f&&a==1&&l.ranges.length>1&&(p=Pk(l,h.pos))?p:f?l.addRange(g):J.create([g])}}}function Pk(i,e){for(let n=0;n<i.ranges.length;n++){let{from:a,to:l}=i.ranges[n];if(a<=e&&l>=e)return J.create(i.ranges.slice(0,n).concat(i.ranges.slice(n+1)),i.mainIndex==n?0:i.mainIndex-(i.mainIndex>n?1:0))}return null}En.dragstart=(i,e)=>{let{selection:{main:n}}=i.state;if(e.target.draggable){let l=i.docView.tile.nearest(e.target);if(l&&l.isWidget()){let c=l.posAtStart,u=c+l.length;(c>=n.to||u<=n.from)&&(n=J.range(c,u))}}let{inputState:a}=i;return a.mouseSelection&&(a.mouseSelection.dragging=!0),a.draggedContent=n,e.dataTransfer&&(e.dataTransfer.setData("Text",Tc(i.state,Eh,i.state.sliceDoc(n.from,n.to))),e.dataTransfer.effectAllowed="copyMove"),!1};En.dragend=i=>(i.inputState.draggedContent=null,!1);function R0(i,e,n,a){if(n=Tc(i.state,Th,n),!n)return;let l=i.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:c}=i.inputState,u=a&&c&&Kk(i,e)?{from:c.from,to:c.to}:null,f={from:l,insert:n},h=i.state.changes(u?[u,f]:f);i.focus(),i.dispatch({changes:h,selection:{anchor:h.mapPos(l,-1),head:h.mapPos(l,1)},userEvent:u?"move.drop":"input.drop"}),i.inputState.draggedContent=null}En.drop=(i,e)=>{if(!e.dataTransfer)return!1;if(i.state.readOnly)return!0;let n=e.dataTransfer.files;if(n&&n.length){let a=Array(n.length),l=0,c=()=>{++l==n.length&&R0(i,e,a.filter(u=>u!=null).join(i.state.lineBreak),!1)};for(let u=0;u<n.length;u++){let f=new FileReader;f.onerror=c,f.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(f.result)||(a[u]=f.result),c()},f.readAsText(n[u])}return!0}else{let a=e.dataTransfer.getData("Text");if(a)return R0(i,e,a,!0),!0}return!1};En.paste=(i,e)=>{if(i.state.readOnly)return!0;i.observer.flush();let n=Ev?null:e.clipboardData;return n?(Rv(i,n.getData("text/plain")||n.getData("text/uri-list")),!0):(Qk(i),!1)};function Jk(i,e){let n=i.dom.parentNode;if(!n)return;let a=n.appendChild(document.createElement("textarea"));a.style.cssText="position: fixed; left: -10000px; top: 10px",a.value=e,a.focus(),a.selectionEnd=e.length,a.selectionStart=0,setTimeout(()=>{a.remove(),i.focus()},50)}function Ik(i){let e=[],n=[],a=!1;for(let l of i.selection.ranges)l.empty||(e.push(i.sliceDoc(l.from,l.to)),n.push(l));if(!e.length){let l=-1;for(let{from:c}of i.selection.ranges){let u=i.doc.lineAt(c);u.number>l&&(e.push(u.text),n.push({from:u.from,to:Math.min(i.doc.length,u.to+1)})),l=u.number}a=!0}return{text:Tc(i,Eh,e.join(i.lineBreak)),ranges:n,linewise:a}}let th=null;En.copy=En.cut=(i,e)=>{if(!Fr(i.contentDOM,i.observer.selectionRange))return!1;let{text:n,ranges:a,linewise:l}=Ik(i.state);if(!n&&!l)return!1;th=l?n:null,e.type=="cut"&&!i.state.readOnly&&i.dispatch({changes:a,scrollIntoView:!0,userEvent:"delete.cut"});let c=Ev?null:e.clipboardData;return c?(c.clearData(),c.setData("text/plain",n),!0):(Jk(i,n),!1)};const Cv=Ua.define();function Ov(i,e){let n=[];for(let a of i.facet(ov)){let l=a(i,e);l&&n.push(l)}return n.length?i.update({effects:n,annotations:Cv.of(!0)}):null}function jv(i){setTimeout(()=>{let e=i.hasFocus;if(e!=i.inputState.notifiedFocused){let n=Ov(i.state,e);n?i.dispatch(n):i.update([])}},10)}Zt.focus=i=>{i.inputState.lastFocusTime=Date.now(),!i.scrollDOM.scrollTop&&(i.inputState.lastScrollTop||i.inputState.lastScrollLeft)&&(i.scrollDOM.scrollTop=i.inputState.lastScrollTop,i.scrollDOM.scrollLeft=i.inputState.lastScrollLeft),jv(i)};Zt.blur=i=>{i.observer.clearSelectionRange(),jv(i)};Zt.compositionstart=Zt.compositionupdate=i=>{i.observer.editContext||(i.inputState.compositionFirstChange==null&&(i.inputState.compositionFirstChange=!0),i.inputState.composing<0&&(i.inputState.composing=0))};Zt.compositionend=i=>{i.observer.editContext||(i.inputState.composing=-1,i.inputState.compositionEndedAt=Date.now(),i.inputState.compositionPendingKey=!0,i.inputState.compositionPendingChange=i.observer.pendingRecords().length>0,i.inputState.compositionFirstChange=null,P.chrome&&P.android?i.observer.flushSoon():i.inputState.compositionPendingChange?Promise.resolve().then(()=>i.observer.flush()):setTimeout(()=>{i.inputState.composing<0&&i.docView.hasComposition&&i.update([])},50))};Zt.contextmenu=i=>{i.inputState.lastContextMenu=Date.now()};En.beforeinput=(i,e)=>{var n,a;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(i.inputState.insertingText=e.data,i.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&i.observer.editContext){let c=(n=e.dataTransfer)===null||n===void 0?void 0:n.getData("text/plain"),u=e.getTargetRanges();if(c&&u.length){let f=u[0],h=i.posAtDOM(f.startContainer,f.startOffset),p=i.posAtDOM(f.endContainer,f.endOffset);return Ch(i,{from:h,to:p,insert:i.state.toText(c)},null),!0}}let l;if(P.chrome&&P.android&&(l=Av.find(c=>c.inputType==e.inputType))&&(i.observer.delayAndroidKey(l.key,l.keyCode),l.key=="Backspace"||l.key=="Delete")){let c=((a=window.visualViewport)===null||a===void 0?void 0:a.height)||0;setTimeout(()=>{var u;(((u=window.visualViewport)===null||u===void 0?void 0:u.height)||0)>c+10&&i.hasFocus&&(i.contentDOM.blur(),i.focus())},100)}return P.ios&&e.inputType=="deleteContentForward"&&i.observer.flushSoon(),P.safari&&e.inputType=="insertText"&&i.inputState.composing>=0&&setTimeout(()=>Zt.compositionend(i,e),20),!1};const M0=new Set;function eA(i){M0.has(i)||(M0.add(i),i.addEventListener("copy",()=>{}),i.addEventListener("cut",()=>{}))}const C0=["pre-wrap","normal","pre-line","break-spaces"];let La=!1;function O0(){La=!1}class tA{constructor(e){this.lineWrapping=e,this.doc=Be.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,n){let a=this.doc.lineAt(n).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(a+=Math.max(0,Math.ceil((n-e-a*this.lineLength*.5)/this.lineLength))),this.lineHeight*a}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return C0.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let n=!1;for(let a=0;a<e.length;a++){let l=e[a];l<0?a++:this.heightSamples[Math.floor(l*10)]||(n=!0,this.heightSamples[Math.floor(l*10)]=!0)}return n}refresh(e,n,a,l,c,u){let f=C0.indexOf(e)>-1,h=Math.abs(n-this.lineHeight)>.3||this.lineWrapping!=f;if(this.lineWrapping=f,this.lineHeight=n,this.charWidth=a,this.textHeight=l,this.lineLength=c,h){this.heightSamples={};for(let p=0;p<u.length;p++){let g=u[p];g<0?p++:this.heightSamples[Math.floor(g*10)]=!0}}return h}}class nA{constructor(e,n){this.from=e,this.heights=n,this.index=0}get more(){return this.index<this.heights.length}}class An{constructor(e,n,a,l,c){this.from=e,this.length=n,this.top=a,this.height=l,this._content=c}get type(){return typeof this._content=="number"?Nt.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof Cs?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new An(this.from,this.length+e.length,this.top,this.height+e.height,n)}}var Qe=(function(i){return i[i.ByPos=0]="ByPos",i[i.ByHeight=1]="ByHeight",i[i.ByPosNoHeight=2]="ByPosNoHeight",i})(Qe||(Qe={}));const Qo=.001;class Ut{constructor(e,n,a=2){this.length=e,this.height=n,this.flags=a}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Qo&&(La=!0),this.height=e)}replace(e,n,a){return Ut.of(a)}decomposeLeft(e,n){n.push(this)}decomposeRight(e,n){n.push(this)}applyChanges(e,n,a,l){let c=this,u=a.doc;for(let f=l.length-1;f>=0;f--){let{fromA:h,toA:p,fromB:g,toB:b}=l[f],x=c.lineAt(h,Qe.ByPosNoHeight,a.setDoc(n),0,0),S=x.to>=p?x:c.lineAt(p,Qe.ByPosNoHeight,a,0,0);for(b+=S.to-p,p=S.to;f>0&&x.from<=l[f-1].toA;)h=l[f-1].fromA,g=l[f-1].fromB,f--,h<x.from&&(x=c.lineAt(h,Qe.ByPosNoHeight,a,0,0));g+=x.from-h,h=x.from;let k=Oh.build(a.setDoc(u),e,g,b);c=oc(c,c.replace(h,p,k))}return c.updateHeight(a,0)}static empty(){return new an(0,0,0)}static of(e){if(e.length==1)return e[0];let n=0,a=e.length,l=0,c=0;for(;;)if(n==a)if(l>c*2){let f=e[n-1];f.break?e.splice(--n,1,f.left,null,f.right):e.splice(--n,1,f.left,f.right),a+=1+f.break,l-=f.size}else if(c>l*2){let f=e[a];f.break?e.splice(a,1,f.left,null,f.right):e.splice(a,1,f.left,f.right),a+=2+f.break,c-=f.size}else break;else if(l<c){let f=e[n++];f&&(l+=f.size)}else{let f=e[--a];f&&(c+=f.size)}let u=0;return e[n-1]==null?(u=1,n--):e[n]==null&&(u=1,a++),new sA(Ut.of(e.slice(0,n)),u,Ut.of(e.slice(a)))}}function oc(i,e){return i==e?i:(i.constructor!=e.constructor&&(La=!0),e)}Ut.prototype.size=1;const iA=Dt.replace({});class Nv extends Ut{constructor(e,n,a){super(e,n),this.deco=a,this.spaceAbove=0}mainBlock(e,n){return new An(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,n,a,l){return this.spaceAbove&&e<a+this.spaceAbove?new An(l,0,a,this.spaceAbove,iA):this.mainBlock(a,l)}lineAt(e,n,a,l,c){let u=this.mainBlock(l,c);return this.spaceAbove?this.blockAt(0,a,l,c).join(u):u}forEachLine(e,n,a,l,c,u){e<=c+this.length&&n>=c&&u(this.lineAt(0,Qe.ByPos,a,l,c))}setMeasuredHeight(e){let n=e.heights[e.index++];n<0?(this.spaceAbove=-n,n=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(n)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more&&this.setMeasuredHeight(l),this.outdated=!1,this}toString(){return`block(${this.length})`}}class an extends Nv{constructor(e,n,a){super(e,n,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=a}mainBlock(e,n){return new An(n,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(e,n,a){let l=a[0];return a.length==1&&(l instanceof an||l instanceof Ot&&l.flags&4)&&Math.abs(this.length-l.length)<10?(l instanceof Ot?l=new an(l.length,this.height,this.spaceAbove):l.height=this.height,this.outdated||(l.outdated=!1),l):Ut.of(a)}updateHeight(e,n=0,a=!1,l){return l&&l.from<=n&&l.more?this.setMeasuredHeight(l):(a||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Ot extends Ut{constructor(e){super(e,0)}heightMetrics(e,n){let a=e.doc.lineAt(n).number,l=e.doc.lineAt(n+this.length).number,c=l-a+1,u,f=0;if(e.lineWrapping){let h=Math.min(this.height,e.lineHeight*c);u=h/c,this.length>c+1&&(f=(this.height-h)/(this.length-c-1))}else u=this.height/c;return{firstLine:a,lastLine:l,perLine:u,perChar:f}}blockAt(e,n,a,l){let{firstLine:c,lastLine:u,perLine:f,perChar:h}=this.heightMetrics(n,l);if(n.lineWrapping){let p=l+(e<n.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-a)/this.height))*this.length)),g=n.doc.lineAt(p),b=f+g.length*h,x=Math.max(a,e-b/2);return new An(g.from,g.length,x,b,0)}else{let p=Math.max(0,Math.min(u-c,Math.floor((e-a)/f))),{from:g,length:b}=n.doc.line(c+p);return new An(g,b,a+f*p,f,0)}}lineAt(e,n,a,l,c){if(n==Qe.ByHeight)return this.blockAt(e,a,l,c);if(n==Qe.ByPosNoHeight){let{from:S,to:k}=a.doc.lineAt(e);return new An(S,k-S,0,0,0)}let{firstLine:u,perLine:f,perChar:h}=this.heightMetrics(a,c),p=a.doc.lineAt(e),g=f+p.length*h,b=p.number-u,x=l+f*b+h*(p.from-c-b);return new An(p.from,p.length,Math.max(l,Math.min(x,l+this.height-g)),g,0)}forEachLine(e,n,a,l,c,u){e=Math.max(e,c),n=Math.min(n,c+this.length);let{firstLine:f,perLine:h,perChar:p}=this.heightMetrics(a,c);for(let g=e,b=l;g<=n;){let x=a.doc.lineAt(g);if(g==e){let k=x.number-f;b+=h*k+p*(e-c-k)}let S=h+p*x.length;u(new An(x.from,x.length,b,S,0)),b+=S,g=x.to+1}}replace(e,n,a){let l=this.length-n;if(l>0){let c=a[a.length-1];c instanceof Ot?a[a.length-1]=new Ot(c.length+l):a.push(null,new Ot(l-1))}if(e>0){let c=a[0];c instanceof Ot?a[0]=new Ot(e+c.length):a.unshift(new Ot(e-1),null)}return Ut.of(a)}decomposeLeft(e,n){n.push(new Ot(e-1),null)}decomposeRight(e,n){n.push(null,new Ot(this.length-e-1))}updateHeight(e,n=0,a=!1,l){let c=n+this.length;if(l&&l.from<=n+this.length&&l.more){let u=[],f=Math.max(n,l.from),h=-1;for(l.from>n&&u.push(new Ot(l.from-n-1).updateHeight(e,n));f<=c&&l.more;){let g=e.doc.lineAt(f).length;u.length&&u.push(null);let b=l.heights[l.index++],x=0;b<0&&(x=-b,b=l.heights[l.index++]),h==-1?h=b:Math.abs(b-h)>=Qo&&(h=-2);let S=new an(g,b,x);S.outdated=!1,u.push(S),f+=g+1}f<=c&&u.push(null,new Ot(c-f).updateHeight(e,f));let p=Ut.of(u);return(h<0||Math.abs(p.height-this.height)>=Qo||Math.abs(h-this.heightMetrics(e,n).perLine)>=Qo)&&(La=!0),oc(this,p)}else(a||this.outdated)&&(this.setHeight(e.heightForGap(n,n+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class sA extends Ut{constructor(e,n,a){super(e.length+n+a.length,e.height+a.height,n|(e.outdated||a.outdated?2:0)),this.left=e,this.right=a,this.size=e.size+a.size}get break(){return this.flags&1}blockAt(e,n,a,l){let c=a+this.left.height;return e<c?this.left.blockAt(e,n,a,l):this.right.blockAt(e,n,c,l+this.left.length+this.break)}lineAt(e,n,a,l,c){let u=l+this.left.height,f=c+this.left.length+this.break,h=n==Qe.ByHeight?e<u:e<f,p=h?this.left.lineAt(e,n,a,l,c):this.right.lineAt(e,n,a,u,f);if(this.break||(h?p.to<f:p.from>f))return p;let g=n==Qe.ByPosNoHeight?Qe.ByPosNoHeight:Qe.ByPos;return h?p.join(this.right.lineAt(f,g,a,u,f)):this.left.lineAt(f,g,a,l,c).join(p)}forEachLine(e,n,a,l,c,u){let f=l+this.left.height,h=c+this.left.length+this.break;if(this.break)e<h&&this.left.forEachLine(e,n,a,l,c,u),n>=h&&this.right.forEachLine(e,n,a,f,h,u);else{let p=this.lineAt(h,Qe.ByPos,a,l,c);e<p.from&&this.left.forEachLine(e,p.from-1,a,l,c,u),p.to>=e&&p.from<=n&&u(p),n>p.to&&this.right.forEachLine(p.to+1,n,a,f,h,u)}}replace(e,n,a){let l=this.left.length+this.break;if(n<l)return this.balanced(this.left.replace(e,n,a),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-l,n-l,a));let c=[];e>0&&this.decomposeLeft(e,c);let u=c.length;for(let f of a)c.push(f);if(e>0&&j0(c,u-1),n<this.length){let f=c.length;this.decomposeRight(n,c),j0(c,f)}return Ut.of(c)}decomposeLeft(e,n){let a=this.left.length;if(e<=a)return this.left.decomposeLeft(e,n);n.push(this.left),this.break&&(a++,e>=a&&n.push(null)),e>a&&this.right.decomposeLeft(e-a,n)}decomposeRight(e,n){let a=this.left.length,l=a+this.break;if(e>=l)return this.right.decomposeRight(e-l,n);e<a&&this.left.decomposeRight(e,n),this.break&&e<l&&n.push(null),n.push(this.right)}balanced(e,n){return e.size>2*n.size||n.size>2*e.size?Ut.of(this.break?[e,null,n]:[e,n]):(this.left=oc(this.left,e),this.right=oc(this.right,n),this.setHeight(e.height+n.height),this.outdated=e.outdated||n.outdated,this.size=e.size+n.size,this.length=e.length+this.break+n.length,this)}updateHeight(e,n=0,a=!1,l){let{left:c,right:u}=this,f=n+c.length+this.break,h=null;return l&&l.from<=n+c.length&&l.more?h=c=c.updateHeight(e,n,a,l):c.updateHeight(e,n,a),l&&l.from<=f+u.length&&l.more?h=u=u.updateHeight(e,f,a,l):u.updateHeight(e,f,a),h?this.balanced(c,u):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function j0(i,e){let n,a;i[e]==null&&(n=i[e-1])instanceof Ot&&(a=i[e+1])instanceof Ot&&i.splice(e-1,3,new Ot(n.length+1+a.length))}const aA=5;class Oh{constructor(e,n){this.pos=e,this.oracle=n,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,n){if(this.lineStart>-1){let a=Math.min(n,this.lineEnd),l=this.nodes[this.nodes.length-1];l instanceof an?l.length+=a-this.pos:(a>this.pos||!this.isCovered)&&this.nodes.push(new an(a-this.pos,-1,0)),this.writtenTo=a,n>a&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=n}point(e,n,a){if(e<n||a.heightRelevant){let l=a.widget?a.widget.estimatedHeight:0,c=a.widget?a.widget.lineBreaks:0;l<0&&(l=this.oracle.lineHeight);let u=n-e;a.block?this.addBlock(new Nv(u,l,a)):(u||c||l>=aA)&&this.addLineDeco(l,c,u)}else n>e&&this.span(e,n);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:n}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=n,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new an(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,n){let a=new Ot(n-e);return this.oracle.doc.lineAt(e).to==n&&(a.flags|=4),a}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof an)return e;let n=new an(0,-1,0);return this.nodes.push(n),n}addBlock(e){this.enterLine();let n=e.deco;n&&n.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,n&&n.endSide>0&&(this.covering=e)}addLineDeco(e,n,a){let l=this.ensureLine();l.length+=a,l.collapsed+=a,l.widgetHeight=Math.max(l.widgetHeight,e),l.breaks+=n,this.writtenTo=this.pos=this.pos+a}finish(e){let n=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(n instanceof an)&&!this.isCovered?this.nodes.push(new an(0,-1,0)):(this.writtenTo<this.pos||n==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let a=e;for(let l of this.nodes)l instanceof an&&l.updateHeight(this.oracle,a),a+=l?l.length:1;return this.nodes}static build(e,n,a,l){let c=new Oh(a,e);return Ce.spans(n,a,l,c,0),c.finish(a)}}function rA(i,e,n){let a=new lA;return Ce.compare(i,e,n,a,0),a.changes}class lA{constructor(){this.changes=[]}compareRange(){}comparePoint(e,n,a,l){(e<n||a&&a.heightRelevant||l&&l.heightRelevant)&&Ca(e,n,this.changes,5)}}function oA(i,e){let n=i.getBoundingClientRect(),a=i.ownerDocument,l=a.defaultView||window,c=Math.max(0,n.left),u=Math.min(l.innerWidth,n.right),f=Math.max(0,n.top),h=Math.min(l.innerHeight,n.bottom);for(let p=i.parentNode;p&&p!=a.body;)if(p.nodeType==1){let g=p,b=window.getComputedStyle(g);if((g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth)&&b.overflow!="visible"){let x=g.getBoundingClientRect();c=Math.max(c,x.left),u=Math.min(u,x.right),f=Math.max(f,x.top),h=Math.min(p==i.parentNode?l.innerHeight:h,x.bottom)}p=b.position=="absolute"||b.position=="fixed"?g.offsetParent:g.parentNode}else if(p.nodeType==11)p=p.host;else break;return{left:c-n.left,right:Math.max(c,u)-n.left,top:f-(n.top+e),bottom:Math.max(f,h)-(n.top+e)}}function cA(i){let e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView||window;return e.left<n.innerWidth&&e.right>0&&e.top<n.innerHeight&&e.bottom>0}function uA(i,e){let n=i.getBoundingClientRect();return{left:0,right:n.right-n.left,top:e,bottom:n.bottom-(n.top+e)}}class cd{constructor(e,n,a,l){this.from=e,this.to=n,this.size=a,this.displaySize=l}static same(e,n){if(e.length!=n.length)return!1;for(let a=0;a<e.length;a++){let l=e[a],c=n[a];if(l.from!=c.from||l.to!=c.to||l.size!=c.size)return!1}return!0}draw(e,n){return Dt.replace({widget:new fA(this.displaySize*(n?e.scaleY:e.scaleX),n)}).range(this.from,this.to)}}class fA extends wc{constructor(e,n){super(),this.size=e,this.vertical=n}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class N0{constructor(e,n){this.view=e,this.state=n,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=D0,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=ct.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let a=n.facet(Rh).some(l=>typeof l!="function"&&l.class=="cm-lineWrapping");this.heightOracle=new tA(a),this.stateDeco=z0(n),this.heightMap=Ut.empty().applyChanges(this.stateDeco,Be.empty,this.heightOracle.setDoc(n.doc),[new vn(0,0,0,n.doc.length)]);for(let l=0;l<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());l++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Dt.set(this.lineGaps.map(l=>l.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:n}=this.state.selection;for(let a=0;a<=1;a++){let l=a?n.head:n.anchor;if(!e.some(({from:c,to:u})=>l>=c&&l<=u)){let{from:c,to:u}=this.lineBlockAt(l);e.push(new Lo(c,u))}}return this.viewports=e.sort((a,l)=>a.from-l.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?D0:new jh(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push($r(e,this.scaler))})}update(e,n=null){this.state=e.state;let a=this.stateDeco;this.stateDeco=z0(this.state);let l=e.changedRanges,c=vn.extendWithRanges(l,rA(a,this.stateDeco,e?e.changes:At.empty(this.state.doc.length))),u=this.heightMap.height,f=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);O0(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),c),(this.heightMap.height!=u||La)&&(e.flags|=2),f?(this.scrollAnchorPos=e.changes.mapPos(f.from,-1),this.scrollAnchorHeight=f.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=u);let h=c.length?this.mapViewport(this.viewport,e.changes):this.viewport;(n&&(n.range.head<h.from||n.range.head>h.to)||!this.viewportIsAppropriate(h))&&(h=this.getViewport(0,n));let p=h.from!=this.viewport.from||h.to!=this.viewport.to;this.viewport=h,e.flags|=this.updateForViewport(),(p||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),n&&(this.scrollTarget=n),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(uv)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,n=e.contentDOM,a=window.getComputedStyle(n),l=this.heightOracle,c=a.whiteSpace;this.defaultTextDirection=a.direction=="rtl"?ct.RTL:ct.LTR;let u=this.heightOracle.mustRefreshForWrapping(c)||this.mustMeasureContent==="refresh",f=n.getBoundingClientRect(),h=u||this.mustMeasureContent||this.contentDOMHeight!=f.height;this.contentDOMHeight=f.height,this.mustMeasureContent=!1;let p=0,g=0;if(f.width&&f.height){let{scaleX:B,scaleY:W}=Wb(n,f);(B>.005&&Math.abs(this.scaleX-B)>.005||W>.005&&Math.abs(this.scaleY-W)>.005)&&(this.scaleX=B,this.scaleY=W,p|=16,u=h=!0)}let b=(parseInt(a.paddingTop)||0)*this.scaleY,x=(parseInt(a.paddingBottom)||0)*this.scaleY;(this.paddingTop!=b||this.paddingBottom!=x)&&(this.paddingTop=b,this.paddingBottom=x,p|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(l.lineWrapping&&(h=!0),this.editorWidth=e.scrollDOM.clientWidth,p|=16);let S=Xb(this.view.contentDOM,!1).y;S!=this.scrollParent&&(this.scrollParent=S,this.scrollAnchorHeight=-1,this.scrollOffset=0);let k=this.getScrollOffset();this.scrollOffset!=k&&(this.scrollAnchorHeight=-1,this.scrollOffset=k),this.scrolledToBottom=Fb(this.scrollParent||e.win);let A=(this.printing?uA:oA)(n,this.paddingTop),M=A.top-this.pixelViewport.top,_=A.bottom-this.pixelViewport.bottom;this.pixelViewport=A;let U=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(U!=this.inView&&(this.inView=U,U&&(h=!0)),!this.inView&&!this.scrollTarget&&!cA(e.dom))return 0;let K=f.width;if((this.contentDOMWidth!=K||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=f.width,this.editorHeight=e.scrollDOM.clientHeight,p|=16),h){let B=e.docView.measureVisibleLineHeights(this.viewport);if(l.mustRefreshForHeights(B)&&(u=!0),u||l.lineWrapping&&Math.abs(K-this.contentDOMWidth)>l.charWidth){let{lineHeight:W,charWidth:X,textHeight:te}=e.docView.measureTextSize();u=W>0&&l.refresh(c,W,X,te,Math.max(5,K/X),B),u&&(e.docView.minWidth=0,p|=16)}M>0&&_>0?g=Math.max(M,_):M<0&&_<0&&(g=Math.min(M,_)),O0();for(let W of this.viewports){let X=W.from==this.viewport.from?B:e.docView.measureVisibleLineHeights(W);this.heightMap=(u?Ut.empty().applyChanges(this.stateDeco,Be.empty,this.heightOracle,[new vn(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(l,0,u,new nA(W.from,X))}La&&(p|=2)}let $=!this.viewportIsAppropriate(this.viewport,g)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return $&&(p&2&&(p|=this.updateScaler()),this.viewport=this.getViewport(g,this.scrollTarget),p|=this.updateForViewport()),(p&2||$)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(u?[]:this.lineGaps,e)),p|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),p}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,n){let a=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),l=this.heightMap,c=this.heightOracle,{visibleTop:u,visibleBottom:f}=this,h=new Lo(l.lineAt(u-a*1e3,Qe.ByHeight,c,0,0).from,l.lineAt(f+(1-a)*1e3,Qe.ByHeight,c,0,0).to);if(n){let{head:p}=n.range;if(p<h.from||p>h.to){let g=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),b=l.lineAt(p,Qe.ByPos,c,0,0),x;n.y=="center"?x=(b.top+b.bottom)/2-g/2:n.y=="start"||n.y=="nearest"&&p<h.from?x=b.top:x=b.bottom-g,h=new Lo(l.lineAt(x-1e3/2,Qe.ByHeight,c,0,0).from,l.lineAt(x+g+1e3/2,Qe.ByHeight,c,0,0).to)}}return h}mapViewport(e,n){let a=n.mapPos(e.from,-1),l=n.mapPos(e.to,1);return new Lo(this.heightMap.lineAt(a,Qe.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(l,Qe.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:n},a=0){if(!this.inView)return!0;let{top:l}=this.heightMap.lineAt(e,Qe.ByPos,this.heightOracle,0,0),{bottom:c}=this.heightMap.lineAt(n,Qe.ByPos,this.heightOracle,0,0),{visibleTop:u,visibleBottom:f}=this;return(e==0||l<=u-Math.max(10,Math.min(-a,250)))&&(n==this.state.doc.length||c>=f+Math.max(10,Math.min(a,250)))&&l>u-2*1e3&&c<f+2*1e3}mapLineGaps(e,n){if(!e.length||n.empty)return e;let a=[];for(let l of e)n.touchesRange(l.from,l.to)||a.push(new cd(n.mapPos(l.from),n.mapPos(l.to),l.size,l.displaySize));return a}ensureLineGaps(e,n){let a=this.heightOracle.lineWrapping,l=a?1e4:2e3,c=l>>1,u=l<<1;if(this.defaultTextDirection!=ct.LTR&&!a)return[];let f=[],h=(g,b,x,S)=>{if(b-g<c)return;let k=this.state.selection.main,A=[k.from];k.empty||A.push(k.to);for(let _ of A)if(_>g&&_<b){h(g,_-10,x,S),h(_+10,b,x,S);return}let M=hA(e,_=>_.from>=x.from&&_.to<=x.to&&Math.abs(_.from-g)<c&&Math.abs(_.to-b)<c&&!A.some(U=>_.from<U&&_.to>U));if(!M){if(b<x.to&&n&&a&&n.visibleRanges.some(K=>K.from<=b&&K.to>=b)){let K=n.moveToLineBoundary(J.cursor(b),!1,!0).head;K>g&&(b=K)}let _=this.gapSize(x,g,b,S),U=a||_<2e6?_:2e6;M=new cd(g,b,_,U)}f.push(M)},p=g=>{if(g.length<u||g.type!=Nt.Text)return;let b=dA(g.from,g.to,this.stateDeco);if(b.total<u)return;let x=this.scrollTarget?this.scrollTarget.range.head:null,S,k;if(a){let A=l/this.heightOracle.lineLength*this.heightOracle.lineHeight,M,_;if(x!=null){let U=Ho(b,x),K=((this.visibleBottom-this.visibleTop)/2+A)/g.height;M=U-K,_=U+K}else M=(this.visibleTop-g.top-A)/g.height,_=(this.visibleBottom-g.top+A)/g.height;S=_o(b,M),k=_o(b,_)}else{let A=b.total*this.heightOracle.charWidth,M=l*this.heightOracle.charWidth,_=0;if(A>2e6)for(let W of e)W.from>=g.from&&W.from<g.to&&W.size!=W.displaySize&&W.from*this.heightOracle.charWidth+_<this.pixelViewport.left&&(_=W.size-W.displaySize);let U=this.pixelViewport.left+_,K=this.pixelViewport.right+_,$,B;if(x!=null){let W=Ho(b,x),X=((K-U)/2+M)/A;$=W-X,B=W+X}else $=(U-M)/A,B=(K+M)/A;S=_o(b,$),k=_o(b,B)}S>g.from&&h(g.from,S,g,b),k<g.to&&h(k,g.to,g,b)};for(let g of this.viewportLines)Array.isArray(g.type)?g.type.forEach(p):p(g);return f}gapSize(e,n,a,l){let c=Ho(l,a)-Ho(l,n);return this.heightOracle.lineWrapping?e.height*c:l.total*this.heightOracle.charWidth*c}updateLineGaps(e){cd.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Dt.set(e.map(n=>n.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let n=this.stateDeco;this.lineGaps.length&&(n=n.concat(this.lineGapDeco));let a=[];Ce.spans(n,this.viewport.from,this.viewport.to,{span(c,u){a.push({from:c,to:u})},point(){}},20);let l=0;if(a.length!=this.visibleRanges.length)l=12;else for(let c=0;c<a.length&&!(l&8);c++){let u=this.visibleRanges[c],f=a[c];(u.from!=f.from||u.to!=f.to)&&(l|=4,e&&e.mapPos(u.from,-1)==f.from&&e.mapPos(u.to,1)==f.to||(l|=8))}return this.visibleRanges=a,l}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(n=>n.from<=e&&n.to>=e)||$r(this.heightMap.lineAt(e,Qe.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(n=>n.top<=e&&n.bottom>=e)||$r(this.heightMap.lineAt(this.scaler.fromDOM(e),Qe.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let n=this.lineBlockAtHeight(e+8);return n.from>=this.viewport.from||this.viewportLines[0].top-e>200?n:this.viewportLines[0]}elementAtHeight(e){return $r(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Lo{constructor(e,n){this.from=e,this.to=n}}function dA(i,e,n){let a=[],l=i,c=0;return Ce.spans(n,i,e,{span(){},point(u,f){u>l&&(a.push({from:l,to:u}),c+=u-l),l=f}},20),l<e&&(a.push({from:l,to:e}),c+=e-l),{total:c,ranges:a}}function _o({total:i,ranges:e},n){if(n<=0)return e[0].from;if(n>=1)return e[e.length-1].to;let a=Math.floor(i*n);for(let l=0;;l++){let{from:c,to:u}=e[l],f=u-c;if(a<=f)return c+a;a-=f}}function Ho(i,e){let n=0;for(let{from:a,to:l}of i.ranges){if(e<=l){n+=e-a;break}n+=l-a}return n/i.total}function hA(i,e){for(let n of i)if(e(n))return n}const D0={toDOM(i){return i},fromDOM(i){return i},scale:1,eq(i){return i==this}};function z0(i){let e=i.facet(Sc).filter(a=>typeof a!="function"),n=i.facet(Mh).filter(a=>typeof a!="function");return n.length&&e.push(Ce.join(n)),e}class jh{constructor(e,n,a){let l=0,c=0,u=0;this.viewports=a.map(({from:f,to:h})=>{let p=n.lineAt(f,Qe.ByPos,e,0,0).top,g=n.lineAt(h,Qe.ByPos,e,0,0).bottom;return l+=g-p,{from:f,to:h,top:p,bottom:g,domTop:0,domBottom:0}}),this.scale=(7e6-l)/(n.height-l);for(let f of this.viewports)f.domTop=u+(f.top-c)*this.scale,u=f.domBottom=f.domTop+(f.bottom-f.top),c=f.bottom}toDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.top)return l+(e-a)*this.scale;if(e<=c.bottom)return c.domTop+(e-c.top);a=c.bottom,l=c.domBottom}}fromDOM(e){for(let n=0,a=0,l=0;;n++){let c=n<this.viewports.length?this.viewports[n]:null;if(!c||e<c.domTop)return a+(e-l)/this.scale;if(e<=c.domBottom)return c.top+(e-c.domTop);a=c.bottom,l=c.domBottom}}eq(e){return e instanceof jh?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((n,a)=>n.from==e.viewports[a].from&&n.to==e.viewports[a].to):!1}}function $r(i,e){if(e.scale==1)return i;let n=e.toDOM(i.top),a=e.toDOM(i.bottom);return new An(i.from,i.length,n,a-n,Array.isArray(i._content)?i._content.map(l=>$r(l,e)):i._content)}const qo=ue.define({combine:i=>i.join(" ")}),nh=ue.define({combine:i=>i.indexOf(!0)>-1}),ih=Da.newName(),Dv=Da.newName(),zv=Da.newName(),Bv={"&light":"."+Dv,"&dark":"."+zv};function sh(i,e,n){return new Da(e,{finish(a){return/&/.test(a)?a.replace(/&\w*/,l=>{if(l=="&")return i;if(!n||!n[l])throw new RangeError(`Unsupported selector: ${l}`);return n[l]}):i+" "+a}})}const mA=sh("."+ih,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Bv),pA={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ud=P.ie&&P.ie_version<=11;class gA{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new WS,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(n=>{for(let a of n)this.queue.push(a);(P.ie&&P.ie_version<=11||P.ios&&e.composing)&&n.some(a=>a.type=="childList"&&a.removedNodes.length||a.type=="characterData"&&a.oldValue.length>a.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&P.android&&e.constructor.EDIT_CONTEXT!==!1&&!(P.chrome&&P.chrome_version<126)&&(this.editContext=new bA(e),e.state.facet(ai)&&(e.contentDOM.editContext=this.editContext.editContext)),ud&&(this.onCharData=n=>{this.queue.push({target:n.target,type:"characterData",oldValue:n.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var n;((n=this.view.docView)===null||n===void 0?void 0:n.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),n.length>0&&n[n.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(n=>{n.length>0&&n[n.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((n,a)=>n!=e[a]))){this.gapIntersection.disconnect();for(let n of e)this.gapIntersection.observe(n);this.gaps=e}}onSelectionChange(e){let n=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:a}=this,l=this.selectionRange;if(a.state.facet(ai)?a.root.activeElement!=this.dom:!Fr(this.dom,l))return;let c=l.anchorNode&&a.docView.tile.nearest(l.anchorNode);if(c&&c.isWidget()&&c.widget.ignoreEvent(e)){n||(this.selectionChanged=!1);return}(P.ie&&P.ie_version<=11||P.android&&P.chrome)&&!a.state.selection.main.empty&&l.focusNode&&Zr(l.focusNode,l.focusOffset,l.anchorNode,l.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,n=al(e.root);if(!n)return!1;let a=P.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&yA(this.view,n)||n;if(!a||this.selectionRange.eq(a))return!1;let l=Fr(this.dom,a);return l&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&QS(this.dom,a)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(a),l&&(this.selectionChanged=!0),!0)}setSelectionRange(e,n){this.selectionRange.set(e.node,e.offset,n.node,n.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,n=null;for(let a=this.dom;a;)if(a.nodeType==1)!n&&e<this.scrollTargets.length&&this.scrollTargets[e]==a?e++:n||(n=this.scrollTargets.slice(0,e)),n&&n.push(a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;if(e<this.scrollTargets.length&&!n&&(n=this.scrollTargets.slice(0,e)),n){for(let a of this.scrollTargets)a.removeEventListener("scroll",this.onScroll);for(let a of this.scrollTargets=n)a.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,pA),ud&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ud&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,n){var a;if(!this.delayedAndroidKey){let l=()=>{let c=this.delayedAndroidKey;c&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=c.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&c.force&&Oa(this.dom,c.key,c.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(l)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:n,force:this.lastChange<Date.now()-50||!!(!((a=this.delayedAndroidKey)===null||a===void 0)&&a.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let n=-1,a=-1,l=!1;for(let c of e){let u=this.readMutation(c);u&&(u.typeOver&&(l=!0),n==-1?{from:n,to:a}=u:(n=Math.min(u.from,n),a=Math.max(u.to,a)))}return{from:n,to:a,typeOver:l}}readChange(){let{from:e,to:n,typeOver:a}=this.processRecords(),l=this.selectionChanged&&Fr(this.dom,this.selectionRange);if(e<0&&!l)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let c=new Bk(this.view,e,n,a);return this.view.docView.domChanged={newSel:c.newSel?c.newSel.main:null},c}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let n=this.readChange();if(!n)return this.view.requestMeasure(),!1;let a=this.view.state,l=Sv(this.view,n);return this.view.state==a&&(n.domChanged||n.newSel&&!lc(this.view.state.selection,n.newSel.main))&&this.view.update([]),l}readMutation(e){let n=this.view.docView.tile.nearest(e.target);if(!n||n.isWidget())return null;if(n.markDirty(e.type=="attributes"),e.type=="childList"){let a=B0(n,e.previousSibling||e.target.previousSibling,-1),l=B0(n,e.nextSibling||e.target.nextSibling,1);return{from:a?n.posAfter(a):n.posAtStart,to:l?n.posBefore(l):n.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(ai)!=e.state.facet(ai)&&(e.view.contentDOM.editContext=e.state.facet(ai)?this.editContext.editContext:null))}destroy(){var e,n,a;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(n=this.gapIntersection)===null||n===void 0||n.disconnect(),(a=this.resizeScroll)===null||a===void 0||a.disconnect();for(let l of this.scrollTargets)l.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function B0(i,e,n){for(;e;){let a=at.get(e);if(a&&a.parent==i)return a;let l=e.parentNode;e=l!=i.dom?l:n>0?e.nextSibling:e.previousSibling}return null}function L0(i,e){let n=e.startContainer,a=e.startOffset,l=e.endContainer,c=e.endOffset,u=i.docView.domAtPos(i.state.selection.main.anchor,1);return Zr(u.node,u.offset,l,c)&&([n,a,l,c]=[l,c,n,a]),{anchorNode:n,anchorOffset:a,focusNode:l,focusOffset:c}}function yA(i,e){if(e.getComposedRanges){let l=e.getComposedRanges(i.root)[0];if(l)return L0(i,l)}let n=null;function a(l){l.preventDefault(),l.stopImmediatePropagation(),n=l.getTargetRanges()[0]}return i.contentDOM.addEventListener("beforeinput",a,!0),i.dom.ownerDocument.execCommand("indent"),i.contentDOM.removeEventListener("beforeinput",a,!0),n?L0(i,n):null}class bA{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let n=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=a=>{let l=e.state.selection.main,{anchor:c,head:u}=l,f=this.toEditorPos(a.updateRangeStart),h=this.toEditorPos(a.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:a.updateRangeStart,editorBase:f,drifted:!1});let p=h-f>a.text.length;f==this.from&&c<this.from?f=c:h==this.to&&c>this.to&&(h=c);let g=kv(e.state.sliceDoc(f,h),a.text,(p?l.from:l.to)-f,p?"end":null);if(!g){let x=J.single(this.toEditorPos(a.selectionStart),this.toEditorPos(a.selectionEnd));lc(x,l)||e.dispatch({selection:x,userEvent:"select"});return}let b={from:g.from+f,to:g.toA+f,insert:Be.of(a.text.slice(g.from,g.toB).split(`
`))};if((P.mac||P.android)&&b.from==u-1&&/^\. ?$/.test(a.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(b={from:f,to:h,insert:Be.of([a.text.replace("."," ")])}),this.pendingContextChange=b,!e.state.readOnly){let x=this.to-this.from+(b.to-b.from+b.insert.length);Ch(e,b,J.single(this.toEditorPos(a.selectionStart,x),this.toEditorPos(a.selectionEnd,x)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),b.from<b.to&&!b.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(n.text.slice(Math.max(0,a.updateRangeStart-1),Math.min(n.text.length,a.updateRangeStart+1)))&&this.handlers.compositionend(a)},this.handlers.characterboundsupdate=a=>{let l=[],c=null;for(let u=this.toEditorPos(a.rangeStart),f=this.toEditorPos(a.rangeEnd);u<f;u++){let h=e.coordsForChar(u);c=h&&new DOMRect(h.left,h.top,h.right-h.left,h.bottom-h.top)||c||new DOMRect,l.push(c)}n.updateCharacterBounds(a.rangeStart,l)},this.handlers.textformatupdate=a=>{let l=[];for(let c of a.getTextFormats()){let u=c.underlineStyle,f=c.underlineThickness;if(!/none/i.test(u)&&!/none/i.test(f)){let h=this.toEditorPos(c.rangeStart),p=this.toEditorPos(c.rangeEnd);if(h<p){let g=`text-decoration: underline ${/^[a-z]/.test(u)?u+" ":u=="Dashed"?"dashed ":u=="Squiggle"?"wavy ":""}${/thin/i.test(f)?1:2}px`;l.push(Dt.mark({attributes:{style:g}}).range(h,p))}}}e.dispatch({effects:dv.of(Dt.set(l))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:a}=this.composing;this.composing=null,a&&this.reset(e.state)}};for(let a in this.handlers)n.addEventListener(a,this.handlers[a]);this.measureReq={read:a=>{this.editContext.updateControlBounds(a.contentDOM.getBoundingClientRect());let l=al(a.root);l&&l.rangeCount&&this.editContext.updateSelectionBounds(l.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let n=0,a=!1,l=this.pendingContextChange;return e.changes.iterChanges((c,u,f,h,p)=>{if(a)return;let g=p.length-(u-c);if(l&&u>=l.to)if(l.from==c&&l.to==u&&l.insert.eq(p)){l=this.pendingContextChange=null,n+=g,this.to+=g;return}else l=null,this.revertPending(e.state);if(c+=n,u+=n,u<=this.from)this.from+=g,this.to+=g;else if(c<this.to){if(c<this.from||u>this.to||this.to-this.from+p.length>3e4){a=!0;return}this.editContext.updateText(this.toContextPos(c),this.toContextPos(u),p.toString()),this.to+=g}n+=g}),l&&!a&&this.revertPending(e.state),!a}update(e){let n=this.pendingContextChange,a=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(a.from,a.to)&&e.transactions.some(l=>!l.isUserEvent("input.type")&&l.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||n)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:n}=e.selection.main;this.from=Math.max(0,n-1e4),this.to=Math.min(e.doc.length,n+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let n=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(n.from),this.toContextPos(n.from+n.insert.length),e.doc.sliceString(n.from,n.to))}setSelection(e){let{main:n}=e.selection,a=this.toContextPos(Math.max(this.from,Math.min(this.to,n.anchor))),l=this.toContextPos(n.head);(this.editContext.selectionStart!=a||this.editContext.selectionEnd!=l)&&this.editContext.updateSelection(a,l)}rangeIsValid(e){let{head:n}=e.selection.main;return!(this.from>0&&n-this.from<500||this.to<e.doc.length&&this.to-n<500||this.to-this.from>1e4*3)}toEditorPos(e,n=this.to-this.from){e=Math.min(e,n);let a=this.composing;return a&&a.drifted?a.editorBase+(e-a.contextBase):e+this.from}toContextPos(e){let n=this.composing;return n&&n.drifted?n.contextBase+(e-n.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class ge{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var n;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:a}=e;this.dispatchTransactions=e.dispatchTransactions||a&&(l=>l.forEach(c=>a(c,this)))||(l=>this.update(l)),this.dispatch=this.dispatch.bind(this),this._root=e.root||XS(e.parent)||document,this.viewState=new N0(this,e.state||Ye.create(e)),e.scrollTo&&e.scrollTo.is(Do)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Ta).map(l=>new sd(l));for(let l of this.plugins)l.update(this);this.observer=new gA(this),this.inputState=new qk(this),this.inputState.ensureHandlers(this.plugins),this.docView=new v0(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((n=document.fonts)===null||n===void 0)&&n.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...e){let n=e.length==1&&e[0]instanceof Lt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(n,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let n=!1,a=!1,l,c=this.state;for(let x of e){if(x.startState!=c)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");c=x.state}if(this.destroyed){this.viewState.state=c;return}let u=this.hasFocus,f=0,h=null;e.some(x=>x.annotation(Cv))?(this.inputState.notifiedFocused=u,f=1):u!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=u,h=Ov(c,u),h||(f=1));let p=this.observer.delayedAndroidKey,g=null;if(p?(this.observer.clearDelayedAndroidKey(),g=this.observer.readChange(),(g&&!this.state.doc.eq(c.doc)||!this.state.selection.eq(c.selection))&&(g=null)):this.observer.clear(),c.facet(Ye.phrases)!=this.state.facet(Ye.phrases))return this.setState(c);l=sc.create(this,c,e),l.flags|=f;let b=this.viewState.scrollTarget;try{this.updateState=2;for(let x of e){if(b&&(b=b.map(x.changes)),x.scrollIntoView){let{main:S}=x.state.selection,{x:k,y:A}=this.state.facet(ge.cursorScrollMargin);b=new ja(S.empty?S:J.cursor(S.head,S.head>S.anchor?-1:1),"nearest","nearest",A,k)}for(let S of x.effects)S.is(Do)&&(b=S.value.clip(this.state))}this.viewState.update(l,b),this.bidiCache=cc.update(this.bidiCache,l.changes),l.empty||(this.updatePlugins(l),this.inputState.update(l)),n=this.docView.update(l),this.state.facet(Gr)!=this.styleModules&&this.mountStyles(),a=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(n,e.some(x=>x.isUserEvent("select.pointer")))}finally{this.updateState=0}if(l.startState.facet(qo)!=l.state.facet(qo)&&(this.viewState.mustMeasureContent=!0),(n||a||b||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!l.empty)for(let x of this.state.facet(Pd))try{x(l)}catch(S){li(this.state,S,"update listener")}(h||g)&&Promise.resolve().then(()=>{h&&this.state==h.startState&&this.dispatch(h),g&&!Sv(this,g)&&p.force&&Oa(this.contentDOM,p.key,p.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let n=this.hasFocus;try{for(let a of this.plugins)a.destroy(this);this.viewState=new N0(this,e),this.plugins=e.facet(Ta).map(a=>new sd(a)),this.pluginMap.clear();for(let a of this.plugins)a.update(this);this.docView.destroy(),this.docView=new v0(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}n&&this.focus(),this.requestMeasure()}updatePlugins(e){let n=e.startState.facet(Ta),a=e.state.facet(Ta);if(n!=a){let l=[];for(let c of a){let u=n.indexOf(c);if(u<0)l.push(new sd(c));else{let f=this.plugins[u];f.mustUpdate=e,l.push(f)}}for(let c of this.plugins)c.mustUpdate!=e&&c.destroy(this);this.plugins=l,this.pluginMap.clear()}else for(let l of this.plugins)l.mustUpdate=e;for(let l=0;l<this.plugins.length;l++)this.plugins[l].update(this);n!=a&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let n=e.value;if(n&&n.docViewUpdate)try{n.docViewUpdate(this)}catch(a){li(this.state,a,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let n=null,a=this.viewState.scrollParent,l=this.viewState.getScrollOffset(),{scrollAnchorPos:c,scrollAnchorHeight:u}=this.viewState;Math.abs(l-this.viewState.scrollOffset)>1&&(u=-1),this.viewState.scrollAnchorHeight=-1;try{for(let f=0;;f++){if(u<0)if(Fb(a||this.win))c=-1,u=this.viewState.heightMap.height;else{let S=this.viewState.scrollAnchorAt(l);c=S.from,u=S.top}this.updateState=1;let h=this.viewState.measure();if(!h&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(f>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let p=[];h&4||([this.measureRequests,p]=[p,this.measureRequests]);let g=p.map(S=>{try{return S.read(this)}catch(k){return li(this.state,k),_0}}),b=sc.create(this,this.state,[]),x=!1;b.flags|=h,n?n.flags|=h:n=b,this.updateState=2,b.empty||(this.updatePlugins(b),this.inputState.update(b),this.updateAttrs(),x=this.docView.update(b),x&&this.docViewUpdate());for(let S=0;S<p.length;S++)if(g[S]!=_0)try{let k=p[S];k.write&&k.write(g[S],this)}catch(k){li(this.state,k)}if(x&&this.docView.updateSelection(!0),!b.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,u=-1;continue}else{let k=((c<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(c).top)-u)/this.scaleY;if((k>1||k<-1)&&(a==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){l=l+k,a?a.scrollTop+=k:this.win.scrollBy(0,k),u=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(n&&!n.empty)for(let f of this.state.facet(Pd))f(n)}get themeClasses(){return ih+" "+(this.state.facet(nh)?zv:Dv)+" "+this.state.facet(qo)}updateAttrs(){let e=H0(this,hv,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),n={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(ai)?"true":"false",class:"cm-content",style:`${P.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(n["aria-readonly"]="true"),H0(this,Rh,n);let a=this.observer.ignore(()=>{let l=h0(this.contentDOM,this.contentAttrs,n),c=h0(this.dom,this.editorAttrs,e);return l||c});return this.editorAttrs=e,this.contentAttrs=n,a}showAnnouncements(e){let n=!0;for(let a of e)for(let l of a.effects)if(l.is(ge.announce)){n&&(this.announceDOM.textContent=""),n=!1;let c=this.announceDOM.appendChild(document.createElement("div"));c.textContent=l.value}}mountStyles(){this.styleModules=this.state.facet(Gr);let e=this.state.facet(ge.cspNonce);Da.mount(this.root,this.styleModules.concat(mA).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let n=0;n<this.measureRequests.length;n++)if(this.measureRequests[n].key===e.key){this.measureRequests[n]=e;return}}this.measureRequests.push(e)}}plugin(e){let n=this.pluginMap.get(e);return(n===void 0||n&&n.plugin!=e)&&this.pluginMap.set(e,n=this.plugins.find(a=>a.plugin==e)||null),n&&n.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,n,a){return od(this,e,x0(this,e,n,a))}moveByGroup(e,n){return od(this,e,x0(this,e,n,a=>Ck(this,e.head,a)))}visualLineSide(e,n){let a=this.bidiSpans(e),l=this.textDirectionAt(e.from),c=a[n?a.length-1:0];return J.cursor(c.side(n,l)+e.from,c.forward(!n,l)?1:-1)}moveToLineBoundary(e,n,a=!0){return Mk(this,e,n,a)}moveVertically(e,n,a){return od(this,e,Ok(this,e,n,a))}domAtPos(e,n=1){return this.docView.domAtPos(e,n)}posAtDOM(e,n=0){return this.docView.posFromDOM(e,n)}posAtCoords(e,n=!0){this.readMeasured();let a=eh(this,e,n);return a&&a.pos}posAndSideAtCoords(e,n=!0){return this.readMeasured(),eh(this,e,n)}coordsAtPos(e,n=1){this.readMeasured();let a=this.docView.coordsAt(e,n);if(!a||a.left==a.right)return a;let l=this.state.doc.lineAt(e),c=this.bidiSpans(l),u=c[Hn.find(c,e-l.from,-1,n)];return ic(a,u.dir==ct.LTR==n>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(cv)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>vA)return tv(e.length);let n=this.textDirectionAt(e.from),a;for(let c of this.bidiCache)if(c.from==e.from&&c.dir==n&&(c.fresh||ev(c.isolates,a=g0(this,e))))return c.order;a||(a=g0(this,e));let l=tk(e.text,n,a);return this.bidiCache.push(new cc(e.from,e.to,n,a,!0,l)),l}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||P.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Qb(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,n={}){var a,l,c,u;return Do.of(new ja(typeof e=="number"?J.cursor(e):e,(a=n.y)!==null&&a!==void 0?a:"nearest",(l=n.x)!==null&&l!==void 0?l:"nearest",(c=n.yMargin)!==null&&c!==void 0?c:5,(u=n.xMargin)!==null&&u!==void 0?u:5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:n}=this.scrollDOM,a=this.viewState.scrollAnchorAt(e);return Do.of(new ja(J.cursor(a.from),"start","start",a.top-e,n,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return js.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return js.define(()=>({}),{eventObservers:e})}static theme(e,n){let a=Da.newName(),l=[qo.of(a),Gr.of(sh(`.${a}`,e))];return n&&n.dark&&l.push(nh.of(!0)),l}static baseTheme(e){return vh.lowest(Gr.of(sh("."+ih,e,Bv)))}static findFromDOM(e){var n;let a=e.querySelector(".cm-content"),l=a&&at.get(a)||at.get(e);return((n=l?.root)===null||n===void 0?void 0:n.view)||null}}ge.styleModule=Gr;ge.inputHandler=lv;ge.clipboardInputFilter=Th;ge.clipboardOutputFilter=Eh;ge.scrollHandler=fv;ge.focusChangeEffect=ov;ge.perLineTextDirection=cv;ge.exceptionSink=rv;ge.updateListener=Pd;ge.editable=ai;ge.mouseSelectionStyle=av;ge.dragMovesSelection=sv;ge.clickAddsSelectionRange=iv;ge.decorations=Sc;ge.blockWrappers=mv;ge.outerDecorations=Mh;ge.atomicRanges=cl;ge.bidiIsolatedRanges=pv;ge.cursorScrollMargin=ue.define({combine:i=>{let e=5,n=5;for(let a of i)typeof a=="number"?e=n=a:{x:e,y:n}=a;return{x:e,y:n}}});ge.scrollMargins=gv;ge.darkTheme=nh;ge.cspNonce=ue.define({combine:i=>i.length?i[0]:""});ge.contentAttributes=Rh;ge.editorAttributes=hv;ge.lineWrapping=ge.contentAttributes.of({class:"cm-lineWrapping"});ge.announce=gt.define();const vA=4096,_0={};class cc{constructor(e,n,a,l,c,u){this.from=e,this.to=n,this.dir=a,this.isolates=l,this.fresh=c,this.order=u}static update(e,n){if(n.empty&&!e.some(c=>c.fresh))return e;let a=[],l=e.length?e[e.length-1].dir:ct.LTR;for(let c=Math.max(0,e.length-10);c<e.length;c++){let u=e[c];u.dir==l&&!n.touchesRange(u.from,u.to)&&a.push(new cc(n.mapPos(u.from,1),n.mapPos(u.to,-1),u.dir,u.isolates,!1,u.order))}return a}}function H0(i,e,n){for(let a=i.state.facet(e),l=a.length-1;l>=0;l--){let c=a[l],u=typeof c=="function"?c(i):c;u&&Sh(u,n)}return n}const xA=P.mac?"mac":P.windows?"win":P.linux?"linux":"key";function wA(i,e){const n=i.split(/-(?!$)/);let a=n[n.length-1];a=="Space"&&(a=" ");let l,c,u,f;for(let h=0;h<n.length-1;++h){const p=n[h];if(/^(cmd|meta|m)$/i.test(p))f=!0;else if(/^a(lt)?$/i.test(p))l=!0;else if(/^(c|ctrl|control)$/i.test(p))c=!0;else if(/^s(hift)?$/i.test(p))u=!0;else if(/^mod$/i.test(p))e=="mac"?f=!0:c=!0;else throw new Error("Unrecognized modifier name: "+p)}return l&&(a="Alt-"+a),c&&(a="Ctrl-"+a),f&&(a="Meta-"+a),u&&(a="Shift-"+a),a}function Uo(i,e,n){return e.altKey&&(i="Alt-"+i),e.ctrlKey&&(i="Ctrl-"+i),e.metaKey&&(i="Meta-"+i),n!==!1&&e.shiftKey&&(i="Shift-"+i),i}const SA=vh.default(ge.domEventHandlers({keydown(i,e){return EA(kA(e.state),i,e,"editor")}})),Lv=ue.define({enables:SA}),q0=new WeakMap;function kA(i){let e=i.facet(Lv),n=q0.get(e);return n||q0.set(e,n=TA(e.reduce((a,l)=>a.concat(l),[]))),n}let Vi=null;const AA=4e3;function TA(i,e=xA){let n=Object.create(null),a=Object.create(null),l=(u,f)=>{let h=a[u];if(h==null)a[u]=f;else if(h!=f)throw new Error("Key binding "+u+" is used both as a regular binding and as a multi-stroke prefix")},c=(u,f,h,p,g)=>{var b,x;let S=n[u]||(n[u]=Object.create(null)),k=f.split(/ (?!$)/).map(_=>wA(_,e));for(let _=1;_<k.length;_++){let U=k.slice(0,_).join(" ");l(U,!0),S[U]||(S[U]={preventDefault:!0,stopPropagation:!1,run:[K=>{let $=Vi={view:K,prefix:U,scope:u};return setTimeout(()=>{Vi==$&&(Vi=null)},AA),!0}]})}let A=k.join(" ");l(A,!1);let M=S[A]||(S[A]={preventDefault:!1,stopPropagation:!1,run:((x=(b=S._any)===null||b===void 0?void 0:b.run)===null||x===void 0?void 0:x.slice())||[]});h&&M.run.push(h),p&&(M.preventDefault=!0),g&&(M.stopPropagation=!0)};for(let u of i){let f=u.scope?u.scope.split(" "):["editor"];if(u.any)for(let p of f){let g=n[p]||(n[p]=Object.create(null));g._any||(g._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:b}=u;for(let x in g)g[x].run.push(S=>b(S,ah))}let h=u[e]||u.key;if(h)for(let p of f)c(p,h,u.run,u.preventDefault,u.stopPropagation),u.shift&&c(p,"Shift-"+h,u.shift,u.preventDefault,u.stopPropagation)}return n}let ah=null;function EA(i,e,n,a){ah=e;let l=US(e),c=SS(l,0),u=kS(c)==l.length&&l!=" ",f="",h=!1,p=!1,g=!1;Vi&&Vi.view==n&&Vi.scope==a&&(f=Vi.prefix+" ",Tv.indexOf(e.keyCode)<0&&(p=!0,Vi=null));let b=new Set,x=M=>{if(M){for(let _ of M.run)if(!b.has(_)&&(b.add(_),_(n)))return M.stopPropagation&&(g=!0),!0;M.preventDefault&&(M.stopPropagation&&(g=!0),p=!0)}return!1},S=i[a],k,A;return S&&(x(S[f+Uo(l,e,!u)])?h=!0:u&&(e.altKey||e.metaKey||e.ctrlKey)&&!(P.windows&&e.ctrlKey&&e.altKey)&&!(P.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(k=Xi[e.keyCode])&&k!=l?(x(S[f+Uo(k,e,!0)])||e.shiftKey&&(A=il[e.keyCode])!=l&&A!=k&&x(S[f+Uo(A,e,!1)]))&&(h=!0):u&&e.shiftKey&&x(S[f+Uo(l,e,!0)])&&(h=!0),!h&&x(S._any)&&(h=!0)),p&&(h=!0),h&&g&&e.stopPropagation(),ah=null,h}class Es{constructor(e,n,a,l,c){this.className=e,this.left=n,this.top=a,this.width=l,this.height=c}draw(){let e=document.createElement("div");return e.className=this.className,this.adjust(e),e}update(e,n){return n.className!=this.className?!1:(this.adjust(e),!0)}adjust(e){e.style.left=this.left+"px",e.style.top=this.top+"px",this.width!=null&&(e.style.width=this.width+"px"),e.style.height=this.height+"px"}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(e,n,a){if(a.empty){let l=e.coordsAtPos(a.head,a.assoc||1);if(!l)return[];let c=_v(e);return[new Es(n,l.left-c.left,l.top-c.top,null,l.bottom-l.top)]}else return RA(e,n,a)}}function _v(i){let e=i.scrollDOM.getBoundingClientRect();return{left:(i.textDirection==ct.LTR?e.left:e.right-i.scrollDOM.clientWidth*i.scaleX)-i.scrollDOM.scrollLeft*i.scaleX,top:e.top-i.scrollDOM.scrollTop*i.scaleY}}function U0(i,e,n,a){let l=i.coordsAtPos(e,n*2);if(!l)return a;let c=i.dom.getBoundingClientRect(),u=(l.top+l.bottom)/2,f=i.posAtCoords({x:c.left+1,y:u}),h=i.posAtCoords({x:c.right-1,y:u});return f==null||h==null?a:{from:Math.max(a.from,Math.min(f,h)),to:Math.min(a.to,Math.max(f,h))}}function RA(i,e,n){if(n.to<=i.viewport.from||n.from>=i.viewport.to)return[];let a=Math.max(n.from,i.viewport.from),l=Math.min(n.to,i.viewport.to),c=i.textDirection==ct.LTR,u=i.contentDOM,f=u.getBoundingClientRect(),h=_v(i),p=u.querySelector(".cm-line"),g=p&&window.getComputedStyle(p),b=f.left+(g?parseInt(g.paddingLeft)+Math.min(0,parseInt(g.textIndent)):0),x=f.right-(g?parseInt(g.paddingRight):0),S=Id(i,a,1),k=Id(i,l,-1),A=S.type==Nt.Text?S:null,M=k.type==Nt.Text?k:null;if(A&&(i.lineWrapping||S.widgetLineBreaks)&&(A=U0(i,a,1,A)),M&&(i.lineWrapping||k.widgetLineBreaks)&&(M=U0(i,l,-1,M)),A&&M&&A.from==M.from&&A.to==M.to)return U(K(n.from,n.to,A));{let B=A?K(n.from,null,A):$(S,!1),W=M?K(null,n.to,M):$(k,!0),X=[];return(A||S).to<(M||k).from-(A&&M?1:0)||S.widgetLineBreaks>1&&B.bottom+i.defaultLineHeight/2<W.top?X.push(_(b,B.bottom,x,W.top)):B.bottom<W.top&&i.elementAtHeight((B.bottom+W.top)/2).type==Nt.Text&&(B.bottom=W.top=(B.bottom+W.top)/2),U(B).concat(X).concat(U(W))}function _(B,W,X,te){return new Es(e,B-h.left,W-h.top,Math.max(0,X-B),te-W)}function U({top:B,bottom:W,horizontal:X}){let te=[];for(let me=0;me<X.length;me+=2)te.push(_(X[me],B,X[me+1],W));return te}function K(B,W,X){let te=1e9,me=-1e9,We=[];function ut(He,Xe,H,Q,ie){let I=i.coordsAtPos(He,He==X.to?-2:2),re=i.coordsAtPos(H,H==X.from?2:-2);!I||!re||(te=Math.min(I.top,re.top,te),me=Math.max(I.bottom,re.bottom,me),ie==ct.LTR?We.push(c&&Xe?b:I.left,c&&Q?x:re.right):We.push(!c&&Q?b:re.left,!c&&Xe?x:I.right))}let De=B??X.from,vt=W??X.to;for(let He of i.visibleRanges)if(He.to>De&&He.from<vt)for(let Xe=Math.max(He.from,De),H=Math.min(He.to,vt);;){let Q=i.state.doc.lineAt(Xe);for(let ie of i.bidiSpans(Q)){let I=ie.from+Q.from,re=ie.to+Q.from;if(I>=H)break;re>Xe&&ut(Math.max(I,Xe),B==null&&I<=De,Math.min(re,H),W==null&&re>=vt,ie.dir)}if(Xe=Q.to+1,Xe>=H)break}return We.length==0&&ut(De,B==null,vt,W==null,i.textDirection),{top:te,bottom:me,horizontal:We}}function $(B,W){let X=f.top+(W?B.top:B.bottom);return{top:X,bottom:X,horizontal:[]}}}function MA(i,e){return i.constructor==e.constructor&&i.eq(e)}class CA{constructor(e,n){this.view=e,this.layer=n,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),n.above&&this.dom.classList.add("cm-layer-above"),n.class&&this.dom.classList.add(n.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(e.state),e.requestMeasure(this.measureReq),n.mount&&n.mount(this.dom,e)}update(e){e.startState.facet(Fo)!=e.state.facet(Fo)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let n=0,a=e.facet(Fo);for(;n<a.length&&a[n]!=this.layer;)n++;this.dom.style.zIndex=String((this.layer.above?150:-1)-n)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:n}=this.view;(e!=this.scaleX||n!=this.scaleY)&&(this.scaleX=e,this.scaleY=n,this.dom.style.transform=`scale(${1/e}, ${1/n})`)}draw(e){if(e.length!=this.drawn.length||e.some((n,a)=>!MA(n,this.drawn[a]))){let n=this.dom.firstChild,a=0;for(let l of e)l.update&&n&&l.constructor&&this.drawn[a].constructor&&l.update(n,this.drawn[a])?(n=n.nextSibling,a++):this.dom.insertBefore(l.draw(),n);for(;n;){let l=n.nextSibling;n.remove(),n=l}this.drawn=e,P.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Fo=ue.define();function Hv(i){return[js.define(e=>new CA(e,i)),Fo.of(i)]}const _a=ue.define({combine(i){return Gb(i,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,n)=>Math.min(e,n),drawRangeCursor:(e,n)=>e||n})}});function OA(i={}){return[_a.of(i),jA,NA,DA,uv.of(!0)]}function qv(i){return i.startState.facet(_a)!=i.state.facet(_a)}const jA=Hv({above:!0,markers(i){let{state:e}=i,n=e.facet(_a),a=[];for(let l of e.selection.ranges){let c=l==e.selection.main;if(l.empty||n.drawRangeCursor&&!(c&&P.ios&&n.iosSelectionHandles)){let u=c?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",f=l.empty?l:J.cursor(l.head,l.assoc);for(let h of Es.forRange(i,u,f))a.push(h)}}return a},update(i,e){i.transactions.some(a=>a.selection)&&(e.style.animationName=e.style.animationName=="cm-blink"?"cm-blink2":"cm-blink");let n=qv(i);return n&&V0(i.state,e),i.docChanged||i.selectionSet||n},mount(i,e){V0(e.state,i)},class:"cm-cursorLayer"});function V0(i,e){e.style.animationDuration=i.facet(_a).cursorBlinkRate+"ms"}const NA=Hv({above:!1,markers(i){let e=[],{main:n,ranges:a}=i.state.selection;for(let l of a)if(!l.empty)for(let c of Es.forRange(i,"cm-selectionBackground",l))e.push(c);if(P.ios&&!n.empty&&i.state.facet(_a).iosSelectionHandles){for(let l of Es.forRange(i,"cm-selectionHandle cm-selectionHandle-start",J.cursor(n.from,1)))e.push(l);for(let l of Es.forRange(i,"cm-selectionHandle cm-selectionHandle-end",J.cursor(n.to,1)))e.push(l)}return e},update(i,e){return i.docChanged||i.selectionSet||i.viewportChanged||qv(i)},class:"cm-selectionLayer"}),DA=vh.highest(ge.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}}));class Ds extends Ms{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}Ds.prototype.elementClass="";Ds.prototype.toDOM=void 0;Ds.prototype.mapMode=on.TrackBefore;Ds.prototype.startSide=Ds.prototype.endSide=-1;Ds.prototype.point=!0;const fd=ue.define(),zA=ue.define(),Zo=ue.define(),G0=ue.define({combine:i=>i.some(e=>e)});function BA(i){return[LA]}const LA=js.fromClass(class{constructor(i){this.view=i,this.domAfter=null,this.prevViewport=i.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=i.state.facet(Zo).map(e=>new Y0(i,e)),this.fixed=!i.state.facet(G0);for(let e of this.gutters)e.config.side=="after"?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),i.scrollDOM.insertBefore(this.dom,i.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(i){if(this.updateGutters(i)){let e=this.prevViewport,n=i.view.viewport,a=Math.min(e.to,n.to)-Math.max(e.from,n.from);this.syncGutters(a<(n.to-n.from)*.8)}if(i.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+"px";this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(G0)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=i.view.viewport}syncGutters(i){let e=this.dom.nextSibling;i&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=Ce.iter(this.view.state.facet(fd),this.view.viewport.from),a=[],l=this.gutters.map(c=>new _A(c,this.view.viewport,-this.view.documentPadding.top));for(let c of this.view.viewportLineBlocks)if(a.length&&(a=[]),Array.isArray(c.type)){let u=!0;for(let f of c.type)if(f.type==Nt.Text&&u){rh(n,a,f.from);for(let h of l)h.line(this.view,f,a);u=!1}else if(f.widget)for(let h of l)h.widget(this.view,f)}else if(c.type==Nt.Text){rh(n,a,c.from);for(let u of l)u.line(this.view,c,a)}else if(c.widget)for(let u of l)u.widget(this.view,c);for(let c of l)c.finish();i&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(i){let e=i.startState.facet(Zo),n=i.state.facet(Zo),a=i.docChanged||i.heightChanged||i.viewportChanged||!Ce.eq(i.startState.facet(fd),i.state.facet(fd),i.view.viewport.from,i.view.viewport.to);if(e==n)for(let l of this.gutters)l.update(i)&&(a=!0);else{a=!0;let l=[];for(let c of n){let u=e.indexOf(c);u<0?l.push(new Y0(this.view,c)):(this.gutters[u].update(i),l.push(this.gutters[u]))}for(let c of this.gutters)c.dom.remove(),l.indexOf(c)<0&&c.destroy();for(let c of l)c.config.side=="after"?this.getDOMAfter().appendChild(c.dom):this.dom.appendChild(c.dom);this.gutters=l}return a}destroy(){for(let i of this.gutters)i.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:i=>ge.scrollMargins.of(e=>{let n=e.plugin(i);if(!n||n.gutters.length==0||!n.fixed)return null;let a=n.dom.offsetWidth*e.scaleX,l=n.domAfter?n.domAfter.offsetWidth*e.scaleX:0;return e.textDirection==ct.LTR?{left:a,right:l}:{right:a,left:l}})});function $0(i){return Array.isArray(i)?i:[i]}function rh(i,e,n){for(;i.value&&i.from<=n;)i.from==n&&e.push(i.value),i.next()}class _A{constructor(e,n,a){this.gutter=e,this.height=a,this.i=0,this.cursor=Ce.iter(e.markers,n.from)}addElement(e,n,a){let{gutter:l}=this,c=(n.top-this.height)/e.scaleY,u=n.height/e.scaleY;if(this.i==l.elements.length){let f=new Uv(e,u,c,a);l.elements.push(f),l.dom.appendChild(f.dom)}else l.elements[this.i].update(e,u,c,a);this.height=n.bottom,this.i++}line(e,n,a){let l=[];rh(this.cursor,l,n.from),a.length&&(l=l.concat(a));let c=this.gutter.config.lineMarker(e,n,l);c&&l.unshift(c);let u=this.gutter;l.length==0&&!u.config.renderEmptyElements||this.addElement(e,n,l)}widget(e,n){let a=this.gutter.config.widgetMarker(e,n.widget,n),l=a?[a]:null;for(let c of e.state.facet(zA)){let u=c(e,n.widget,n);u&&(l||(l=[])).push(u)}l&&this.addElement(e,n,l)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let n=e.elements.pop();e.dom.removeChild(n.dom),n.destroy()}}}class Y0{constructor(e,n){this.view=e,this.config=n,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let a in n.domEventHandlers)this.dom.addEventListener(a,l=>{let c=l.target,u;if(c!=this.dom&&this.dom.contains(c)){for(;c.parentNode!=this.dom;)c=c.parentNode;let h=c.getBoundingClientRect();u=(h.top+h.bottom)/2}else u=l.clientY;let f=e.lineBlockAtHeight(u-e.documentTop);n.domEventHandlers[a](e,f,l)&&l.preventDefault()});this.markers=$0(n.markers(e)),n.initialSpacer&&(this.spacer=new Uv(e,0,0,[n.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let n=this.markers;if(this.markers=$0(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let l=this.config.updateSpacer(this.spacer.markers[0],e);l!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[l])}let a=e.view.viewport;return!Ce.eq(this.markers,n,a.from,a.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}}class Uv{constructor(e,n,a,l){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,n,a,l)}update(e,n,a,l){this.height!=n&&(this.height=n,this.dom.style.height=n+"px"),this.above!=a&&(this.dom.style.marginTop=(this.above=a)?a+"px":""),HA(this.markers,l)||this.setMarkers(e,l)}setMarkers(e,n){let a="cm-gutterElement",l=this.dom.firstChild;for(let c=0,u=0;;){let f=u,h=c<n.length?n[c++]:null,p=!1;if(h){let g=h.elementClass;g&&(a+=" "+g);for(let b=u;b<this.markers.length;b++)if(this.markers[b].compare(h)){f=b,p=!0;break}}else f=this.markers.length;for(;u<f;){let g=this.markers[u++];if(g.toDOM){g.destroy(l);let b=l.nextSibling;l.remove(),l=b}}if(!h)break;h.toDOM&&(p?l=l.nextSibling:this.dom.insertBefore(h.toDOM(e),l)),p&&u++}this.dom.className=a,this.markers=n}destroy(){this.setMarkers(null,[])}}function HA(i,e){if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++)if(!i[n].compare(e[n]))return!1;return!0}const qA=ue.define(),UA=ue.define(),Ea=ue.define({combine(i){return Gb(i,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,n){let a=Object.assign({},e);for(let l in n){let c=a[l],u=n[l];a[l]=c?(f,h,p)=>c(f,h,p)||u(f,h,p):u}return a}})}});class dd extends Ds{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function hd(i,e){return i.state.facet(Ea).formatNumber(e,i.state)}const VA=Zo.compute([Ea],i=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers(e){return e.state.facet(qA)},lineMarker(e,n,a){return a.some(l=>l.toDOM)?null:new dd(hd(e,e.state.doc.lineAt(n.from).number))},widgetMarker:(e,n,a)=>{for(let l of e.state.facet(UA)){let c=l(e,n,a);if(c)return c}return null},lineMarkerChange:e=>e.startState.facet(Ea)!=e.state.facet(Ea),initialSpacer(e){return new dd(hd(e,K0(e.state.doc.lines)))},updateSpacer(e,n){let a=hd(n.view,K0(n.view.state.doc.lines));return a==e.number?e:new dd(a)},domEventHandlers:i.facet(Ea).domEventHandlers,side:"before"}));function GA(i={}){return[Ea.of(i),BA(),VA]}function K0(i){let e=9;for(;e<i;)e=e*10+9;return e}const $A=Object.freeze({boolean:"rasa-token-boolean",call:"rasa-token-call",character:"rasa-token-character",comment:"rasa-token-comment",definition:"rasa-token-definition",delimiter:"rasa-token-delimiter",form:"rasa-token-form",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",namespace:"rasa-token-namespace",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),Nh=gt.define();gt.define();function YA(i){return[{key:"Mod-Enter",run:()=>(i(),!0)}]}function Dh({parent:i,doc:e="",onChange:n=null,onRun:a=null,readOnly:l=!1,liveLexicalHighlight:c=!1,extensions:u=[]}={}){if(!i)throw new Error("mountRasaCodeEditor requires a parent element");const f=a?Lv.of(YA(a)):[],h=c?JA():PA();return new ge({parent:i,state:Ye.create({doc:e,extensions:[GA(),OA(),ge.lineWrapping,h,f,ge.editable.of(!l),Ye.readOnly.of(l),ge.updateListener.of(p=>{p.docChanged&&n?.(p.state.doc.toString(),p)}),...u]})})}function Vv(i){return $A[i]??"rasa-token-unknown"}function KA(i,e){const n=String(i),a=[];let l=0;for(const c of Gv(n,Yv(e,n)))c.start>l&&a.push({text:n.slice(l,c.start),className:""}),a.push({text:n.slice(c.start,c.end),className:Vv(c.kind)}),l=c.end;return l<n.length&&a.push({text:n.slice(l),className:""}),a}function W0(i){const e=String(i),n=[];let a=0;for(;a<e.length;){const l=e[a];if(/\s/.test(l)){a+=1;continue}if("()[]{}".includes(l)){n.push(qi(e,"delimiter",a,a+1)),a+=1;continue}if(l===";"){const f=QA(e,a);n.push(qi(e,"comment",a,f)),a=f;continue}if(l==='"'){const f=XA(e,a);n.push(qi(e,"string",a,f)),a=f;continue}if(l==="^"){n.push(qi(e,"reader-macro",a,a+1));const f=a+1;if(f<e.length&&!/[\s()[\]{}]/.test(e[f])){const h=md(e,f);n.push(qi(e,"metadata",f,h)),a=h}else a+=1;continue}if(l==="'"||l==="`"||l==="~"||l==="@"){n.push(qi(e,"reader-macro",a,a+1)),a+=1;continue}if(l==="\\"){const f=md(e,a);n.push(qi(e,"character",a,f)),a=f;continue}const c=md(e,a),u=e.slice(a,c);n.push(qi(e,WA(u),a,c)),a=c}return n}function WA(i){return i==="nil"?"nil":i==="true"||i==="false"?"boolean":i.startsWith(":")?"keyword":/^[+-]?(?:\d+|\d+\.\d+)$/.test(i)?"number":"symbol"}function qi(i,e,n,a){return{kind:e,start:Q0(i,n),end:Q0(i,a)}}function md(i,e){let n=e;for(;n<i.length&&!/[\s()[\]{}]/.test(i[n]);)n+=1;return n}function XA(i,e){let n=!1;for(let a=e+1;a<i.length;a+=1){const l=i[a];if(n)n=!1;else if(l==="\\")n=!0;else if(l==='"')return a+1}return i.length}function QA(i,e){const n=i.indexOf(`
`,e);return n<0?i.length:n}function Jr(i,e){const n=typeof e=="string"?e:"",a=typeof e=="number"?e:n.length,l=Yv(i,n||a),c=Gv(n,l).map(u=>Dt.mark({class:Vv(u.kind)}).range(u.start,u.end));return Dt.set(c,!0)}const FA=new Set(["and","as->","case","catch","cond","def","defmacro","defmethod","defmulti","defn","do","doseq","finally","fn","for","if","if-let","import","let","loop","ns","or","quote","recur","require","set!","some->","some->>","throw","try","var","when","when-let","when-not","->","->>"]),ZA=new Set(["def","defmacro","defmethod","defmulti","defn","ns"]);function Gv(i,e){if(!i||!Array.isArray(e)||e.length===0)return e;let n=null;return e.map(a=>{const l=i.slice(a.start,a.end);let c=a.kind;if(c==="symbol"){const f=n?i.slice(n.start,n.end):"";n?.kind==="form"&&ZA.has(f)?c="definition":n?.kind==="delimiter"&&f==="("?c=FA.has(l)?"form":"call":l.includes("/")&&(c="namespace")}const u=c===a.kind?a:{...a,kind:c};return a.kind!=="comment"&&(n=u),u})}function PA(i=[]){return[Zi.define({create(n){return Jr(i,n.doc.toString())},update(n,a){for(const l of a.effects)if(l.is(Nh))return Jr(l.value,a.state.doc.toString());return a.docChanged?Dt.none:n.map(a.changes)},provide:n=>ge.decorations.from(n)})]}function JA(){return[Zi.define({create(e){return Jr(W0(e.doc.toString()),e.doc.toString())},update(e,n){for(const a of n.effects)if(a.is(Nh))return Jr(a.value,n.state.doc.toString());return n.docChanged?Jr(W0(n.state.doc.toString()),n.state.doc.toString()):e.map(n.changes)},provide:e=>ge.decorations.from(e)})]}function $v(i,e,n){const a=String(i),l=oh(e),c=Math.max(l,oh(n));return{start:X0(a,l),end:X0(a,c)}}function IA(i,e){if(!i||!e)return!1;const n=i.state.doc.toString(),a=$v(n,e.start,e.end);return a.end<=a.start?!1:(i.dispatch({selection:{anchor:a.start,head:a.end},effects:ge.scrollIntoView(a.start,{y:"center"})}),i.focus(),!0)}function X0(i,e){const n=String(i),a=oh(e);let l=0,c=0;for(const u of n){const f=l+Kv(u);if(f>a||(l=f,c+=u.length,l===a))return c}return n.length}function Q0(i,e){const n=String(i),a=lh(e,n.length);let l=0;for(let c=0;c<a;){const u=n.codePointAt(c),f=String.fromCodePoint(u);l+=Kv(f),c+=f.length}return l}function Yv(i,e){const n=typeof e=="number"?e:String(e).length;return[...i].map(a=>{const l=typeof e=="number"?{start:lh(a.start,n),end:lh(a.end,n)}:$v(e,a.start,a.end);return{kind:String(a.kind),start:l.start,end:l.end}}).filter(a=>a.start<a.end).sort((a,l)=>a.start-l.start||a.end-l.end)}function lh(i,e){const n=Number(i);return Number.isFinite(n)?Math.max(0,Math.min(e,Math.trunc(n))):0}function oh(i){const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):0}function Kv(i){const e=i.codePointAt(0);return e<=127?1:e<=2047?2:e<=65535?3:4}const eT=`
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
`,tT=new TextEncoder;async function Vo(i){if(Wv(i)){const a=Xv(i);return{byteLength:a.byteLength,digest:await F0(a),encoding:"bytes"}}const e=nT(i),n=tT.encode(e);return{byteLength:n.byteLength,digest:await F0(n),encoding:"canonical-json"}}function nT(i){return JSON.stringify(ch(i))}function uc(i,e=12){return i?String(i).slice(0,e):"not observed"}function ch(i){return i===null||typeof i=="string"||typeof i=="boolean"?i:typeof i=="number"?Number.isFinite(i)?i:{$number:String(i)}:typeof i=="bigint"?{$bigint:i.toString()}:i===void 0?{$undefined:!0}:Wv(i)?{$bytes:[...Xv(i)]}:Array.isArray(i)?i.map(ch):i&&typeof i=="object"?Object.fromEntries(Object.keys(i).sort().filter(e=>typeof i[e]!="function").map(e=>[e,ch(i[e])])):String(i)}async function F0(i){const e=globalThis.crypto?.subtle;if(!e)throw new Error("SHA-256 observations require Web Crypto");const n=await e.digest("SHA-256",i);return[...new Uint8Array(n)].map(a=>a.toString(16).padStart(2,"0")).join("")}function Wv(i){return i instanceof ArrayBuffer||ArrayBuffer.isView(i)}function Xv(i){if(i instanceof Uint8Array)return i;if(i instanceof ArrayBuffer)return new Uint8Array(i);if(ArrayBuffer.isView(i))return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);throw new TypeError("expected an ArrayBuffer or typed array")}class iT extends Error{constructor(e="browser effect was cancelled before release"){super(e),this.name="BrowserEffectCancelledError",this.kind="browser-effect-cancelled"}}function sT({pauseBeforeEffect:i=!1}={}){let e=0,n=null,a=Z0(i);const l=new Set;function c($){a=Object.freeze({...a,...$});for(const B of l)B(a);return a}async function u({source:$,label:B="Rasa source"}){S("superseded by a new run");const W=`browser-run-${++e}`,X=await Vo(String($??""));return c({...Qv(a.pauseBeforeEffect),id:W,status:"running",source:Sa({authority:"browser-observed",detail:`${X.byteLength.toLocaleString()} UTF-8 bytes`,digest:X.digest,encoding:X.encoding,kind:"source",label:B,byteLength:X.byteLength})}),W}function f($,B){return U($)?K(c({runtime:Sa({authority:"runtime-report",kind:"execution",label:"Browser Wasm execution",...B})})):a}async function h($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Vo(B.payload);if(!U($))return null;const X=Sa({authority:"browser-observed",kind:B.kind||"artifact",label:B.label||"Rasa artifact",detail:B.detail||pd(B,W),count:B.count??null,unit:B.unit||null,...W});return K(c({artifact:X})),X}async function p($,B){if(!U($))return null;const W=await Vo(B.payload);if(!U($))return null;const X=Sa({authority:B.authority||"browser-boundary",kind:B.kind||"boundary-input",label:B.label||"Browser boundary input",detail:B.detail||pd(B,W),count:B.count??null,unit:B.unit||null,...W}),te={boundary:X};return B.artifact===!0&&!a.artifact&&(te.artifact=Sa({...X,authority:"browser-observed",detail:B.artifactDetail||X.detail,kind:B.artifactKind||"rasa-capability-payload",label:B.artifactLabel||"Rasa capability payload"})),c({...te,status:a.pauseBeforeEffect?"paused":"effect-running"}),a.pauseBeforeEffect?(await new Promise((me,We)=>{n={onRelease:B.onRelease||null,reject:We,resolve:me,runId:$}}),U($)?(c({status:"effect-running"}),X):null):X}async function g($,B){if(!U($))return null;const W=B.digest?{digest:B.digest,byteLength:B.byteLength??null,encoding:B.encoding||"provided"}:await Vo(B.payload);if(!U($))return null;if(a.effect&&a.effect.digest===W.digest&&a.effect.inputDigest===(B.inputDigest||null))return a.effect;const X=Sa({authority:B.authority||"browser-effect",kind:B.kind||"effect",label:B.label||"Browser effect",detail:B.detail||pd(B,W),count:B.count??null,unit:B.unit||null,inputDigest:B.inputDigest||null,...W});return K(c({effect:X})),X}function b($,B){return U($)?c({status:"error",error:{message:B?.message||String(B),name:B?.name||"Error"}}):a}function x(){if(!n)return!1;const $=n;n=null,c({status:"effect-running"});try{const B=$.onRelease?.();Promise.resolve(B).then($.resolve,$.reject)}catch(B){$.reject(B)}return!0}function S($="browser effect cancelled"){if(!n)return!1;const B=n;return n=null,c({status:"cancelled"}),B.reject(new iT($)),!0}function k(){S("witness reset"),c(Z0(a.pauseBeforeEffect))}function A($){const B=!!$;c({pauseBeforeEffect:B}),B||x()}function M($){return l.add($),()=>l.delete($)}function _(){return a}function U($){return!!($&&a.id===$)}function K($){const B=aT($);if(!!!($.runtime&&$.artifact&&$.boundary&&$.effect))return $;const X=B.length>0&&B.every(te=>te.status==="match");return c({correlations:B,status:X?"correlated":"mismatch"})}return Object.freeze({beforeEffect:p,beginRun:u,cancel:S,recordArtifact:h,recordEffect:g,recordError:b,recordRuntime:f,release:x,reset:k,setPauseBeforeEffect:A,snapshot:_,subscribe:M})}function Z0(i){return Object.freeze({...Qv(i),id:null,status:"idle"})}function Qv(i){return{artifact:null,boundary:null,correlations:[],effect:null,error:null,pauseBeforeEffect:i,runtime:null,source:null}}function Sa(i){return Object.freeze({...i})}function pd(i,e){return i.count!=null&&i.unit?`${Number(i.count).toLocaleString()} ${i.unit}`:e.byteLength!=null?`${Number(e.byteLength).toLocaleString()} observed bytes`:"Browser-observed payload"}function aT(i){const e=[];return i.artifact?.digest&&i.boundary?.digest&&e.push(gd("artifact-boundary","Artifact matches boundary input",i.artifact.digest===i.boundary.digest,i.artifact.digest,i.boundary.digest)),i.boundary?.digest&&i.effect?.inputDigest&&e.push(gd("boundary-effect","Effect consumed boundary input",i.boundary.digest===i.effect.inputDigest,i.boundary.digest,i.effect.inputDigest)),i.boundary?.count!=null&&i.effect?.count!=null&&e.push(gd("count",`${i.boundary.unit||"Boundary items"} preserved`,i.boundary.count===i.effect.count,i.boundary.count,i.effect.count)),e}function gd(i,e,n,a,l){return Object.freeze({actual:l,expected:a,id:i,label:e,status:n?"match":"mismatch"})}const Fv={source:kw,runtime:vw,artifact:Vw,boundary:lw,effect:aS};function rT({model:i,onOpen:e,onRelease:n}){const a=Zv(i);return v.jsxs("footer",{className:"execution-witness-rail","data-status":i.status,children:[v.jsxs("button",{className:"witness-route",onClick:e,title:"See how this result moved from your Rasa code to the browser",type:"button",children:[v.jsxs("span",{className:"witness-route-label",children:[v.jsx(Rw,{size:14})," Proof trail"]}),a.map((l,c)=>{const u=Fv[l.id];return v.jsxs(yc.Fragment,{children:[v.jsxs("span",{className:"witness-route-step","data-status":l.status,children:[v.jsx(u,{size:13}),v.jsxs("span",{children:[v.jsx("strong",{children:l.label}),v.jsx("small",{children:l.value})]})]}),c<a.length-1?v.jsx(ph,{"aria-hidden":"true",size:12}):null]},l.id)})]}),i.status==="paused"?v.jsxs("button",{className:"witness-release",onClick:n,type:"button",children:[v.jsx(bc,{fill:"currentColor",size:14})," Continue to browser"]}):v.jsx("span",{className:"witness-status","data-status":i.status,title:Jv(i.status),children:Pv(i.status)})]})}function lT({model:i,onPauseChange:e,onRelease:n}){const a=Zv(i);return v.jsxs("div",{className:"execution-witness-panel",children:[v.jsxs("header",{className:"witness-panel-summary",children:[v.jsxs("div",{children:[v.jsx("span",{children:"Proof trail for this browser run"}),v.jsx("h2",{children:"How this result was made"}),v.jsx("small",{title:"This identifier is created by the browser for this page. It is not a compiler-authored run ID.",children:fT(i.id)})]}),v.jsx("em",{"data-status":i.status,title:Jv(i.status),children:Pv(i.status)})]}),v.jsxs("section",{className:"witness-authority",children:[v.jsx(P0,{label:"Reported by Rasa",detail:"Execution facts that came from Rasa's own runtime report",help:"These facts describe the Rasa execution itself. The Studio displays them but does not invent them.",tone:"runtime"}),v.jsx(P0,{label:"Checked in this browser",detail:"Measurements made around the hand-off to Tone.js or Canvas",help:"The browser measures matching data on both sides of the hand-off. These checks are useful evidence, but they are not compiler authority.",tone:"browser"})]}),v.jsxs("details",{className:"witness-reading-guide",children:[v.jsxs("summary",{children:[v.jsx(Md,{size:15})," How to read this proof"]}),v.jsxs("div",{children:[v.jsx("p",{children:"The five steps follow one result from the code you can edit to the sound or image the browser produced."}),v.jsxs("p",{children:[v.jsx("strong",{children:"Reported by Rasa"})," describes the execution. ",v.jsx("strong",{children:"Checked in this browser"})," compares the actual data used at the browser boundary."]}),v.jsx("p",{children:"Open any step's technical details to inspect data kinds, counts, timings, and SHA-256 fingerprints."})]})]}),v.jsxs("section",{className:"witness-control",children:[v.jsxs("div",{children:[v.jsx(Ww,{size:16}),v.jsxs("span",{children:[v.jsx("strong",{children:"Pause before showing or playing"}),v.jsx("small",{children:"Let Rasa reach the browser hand-off, inspect the result, then choose when Canvas or Tone.js may use it."})]})]}),v.jsx("button",{"aria-checked":i.pauseBeforeEffect,"aria-label":"Pause before showing or playing",className:"witness-switch",onClick:()=>e(!i.pauseBeforeEffect),role:"switch",type:"button",children:v.jsx("i",{})}),i.status==="paused"?v.jsxs("button",{className:"witness-panel-release",onClick:n,type:"button",children:[v.jsx(bc,{fill:"currentColor",size:14})," Continue"]}):null]}),v.jsx("section",{className:"witness-step-grid",children:a.map(l=>v.jsx(oT,{step:l},l.id))}),i.error?v.jsxs("section",{className:"witness-error",role:"alert",children:[v.jsx(Ir,{size:16}),v.jsxs("span",{children:[v.jsx("strong",{children:i.error.name}),v.jsx("small",{children:i.error.message})]})]}):null,v.jsxs("section",{className:"witness-correlations",children:[v.jsxs("header",{children:[v.jsx("span",{children:"Do the hand-offs match?"}),v.jsx("strong",{children:i.correlations.length})]}),i.correlations.length?i.correlations.map(l=>v.jsxs("div",{"data-status":l.status,children:[l.status==="match"?v.jsx(hw,{size:15}):v.jsx(Ir,{size:15}),v.jsxs("span",{children:[v.jsx("strong",{children:gT(l)}),v.jsx("small",{children:yT(l)})]})]},l.id)):v.jsx("p",{children:"These checks appear after Canvas draws the result or Tone.js schedules the score."})]}),v.jsxs("section",{className:"witness-core-gaps",children:[v.jsxs("span",{children:["What this does not prove yet ",v.jsx(Md,{"aria-label":"About current proof limits",size:13,title:"The Studio names missing evidence instead of replacing it with a browser claim."})]}),v.jsx("p",{children:"This browser can match what it observed. Rasa does not yet publish a compiler-authored run identity or result fingerprint, so the Studio does not claim cross-host verification."})]})]})}function oT({step:i}){const e=Fv[i.id];return v.jsxs("article",{"data-status":i.status,children:[v.jsxs("header",{children:[v.jsx(e,{size:16}),v.jsx("span",{children:i.eyebrow})]}),v.jsx("h3",{children:i.label}),v.jsx("p",{children:i.detail}),i.status==="observed"?v.jsxs("details",{className:"witness-technical",children:[v.jsx("summary",{children:"Technical details"}),v.jsxs("dl",{children:[v.jsxs("div",{children:[v.jsx("dt",{title:"Who supplied this evidence",children:"Evidence source"}),v.jsx("dd",{children:i.authority})]}),i.observationLabel?v.jsxs("div",{children:[v.jsx("dt",{children:"Observed as"}),v.jsx("dd",{children:i.observationLabel})]}):null,i.kind?v.jsxs("div",{children:[v.jsx("dt",{children:"Data kind"}),v.jsx("dd",{children:i.kind})]}):null,i.digest?v.jsxs("div",{children:[v.jsx("dt",{title:"A browser-computed fingerprint used only for comparisons inside this page",children:"SHA-256"}),v.jsx("dd",{title:i.digest,children:uc(i.digest,16)})]}):null,i.count!=null?v.jsxs("div",{children:[v.jsx("dt",{children:"Payload"}),v.jsxs("dd",{children:[Number(i.count).toLocaleString()," ",i.unit]})]}):null,i.elapsedMs!=null?v.jsxs("div",{children:[v.jsx("dt",{children:"Elapsed"}),v.jsxs("dd",{children:[Number(i.elapsedMs).toFixed(1)," ms"]})]}):null,i.optimizerExecutions!=null?v.jsxs("div",{children:[v.jsx("dt",{children:"Optimized regions"}),v.jsx("dd",{children:Number(i.optimizerExecutions).toLocaleString()})]}):null,i.executionTier?v.jsxs("div",{children:[v.jsx("dt",{children:"Execution tier"}),v.jsx("dd",{children:i.executionTier})]}):null]})]}):null]})}function P0({detail:i,help:e,label:n,tone:a}){return v.jsxs("div",{"data-tone":a,title:e,children:[v.jsx("i",{}),v.jsxs("span",{children:[v.jsxs("strong",{children:[n," ",v.jsx(Md,{"aria-hidden":"true",size:12})]}),v.jsx("small",{children:i})]})]})}function Zv(i){const e=i.status==="paused"&&i.boundary?"Evaluation is suspended at the asynchronous capability boundary; its runtime report completes after release.":"Waiting for this run";return[Ur("source","Your Rasa code","1 · Code",i.source),Ur("runtime","Rasa ran it","2 · Execution",i.runtime,e),Ur("artifact",dT(i.artifact),"3 · Rasa output",i.artifact),Ur("boundary",hT(i.boundary),"4 · Browser hand-off",i.boundary),Ur("effect",mT(i.effect),"5 · What you see or hear",i.effect)]}function Ur(i,e,n,a,l="Waiting for this run"){return{id:i,eyebrow:n,label:e,value:cT(a),detail:pT(i,a,l),authority:a?uT(a.authority):"Not observed",observationLabel:a?.label||null,kind:a?.kind||null,digest:a?.digest||null,count:a?.count??null,unit:a?.unit||"items",elapsedMs:a?.elapsedMs??null,optimizerExecutions:a?.optimizerExecutions??null,executionTier:a?.executionTier||null,status:a?"observed":"waiting"}}function cT(i){return i?i.count!=null?`${Number(i.count).toLocaleString()} ${i.unit||"items"}`:i.elapsedMs!=null?`${Number(i.elapsedMs).toFixed(1)} ms`:i.digest?uc(i.digest):i.status||"observed":"waiting"}function uT(i){return i==="runtime-report"?"Reported by Rasa":i==="browser-boundary"?"Checked at the browser hand-off":i==="browser-effect"?"Checked where the browser used it":"Checked in this browser"}function Pv(i){return i==="correlated"?"route matches":i==="mismatch"?"mismatch found":i==="paused"?"ready to show or play":i==="effect-running"?"browser applying result":i==="running"?"Rasa running":i==="error"?"run failed":i==="cancelled"?"run cancelled":"no run yet"}function Jv(i){return i==="correlated"?"Every observed hand-off matched for this run.":i==="mismatch"?"At least one observed hand-off did not match.":i==="paused"?"Rasa has reached the browser hand-off. Canvas or Tone.js is waiting for you.":i==="effect-running"?"The browser is applying the Rasa-produced result.":i==="running"?"The Rasa browser-Wasm session is evaluating your code.":i==="error"?"The run failed before the proof trail completed.":i==="cancelled"?"This browser run was intentionally cancelled.":"Run the visible Rasa program to create a proof trail."}function fT(i){if(!i)return"Run an example to create this trail";const e=String(i).match(/(\d+)$/)?.[1];return e?`Observed in this browser as run ${e}`:"Observed in this browser"}function dT(i){return i?.kind==="wmp-2-rgba-bytes"?"Rasa produced the pixels":i?.kind==="ordinary-rasa-scene"?"Rasa returned the scene":i?.kind==="rasa-capability-payload"?"Rasa produced the score":"Rasa produced a result"}function hT(i){return i?.kind==="ordinary-value-capability-input"?"The score reached Tone.js":i?.kind==="canvas-image-data-input"?"The pixels reached Canvas":i?.kind==="canvas-primitive-input"?"The scene reached Canvas":"The result reached the browser"}function mT(i){return i?.kind==="tone-schedule"?"Tone.js scheduled the music":i?.kind==="canvas-image-data-upload"?"Canvas displayed the pixels":i?.kind==="canvas-primitive-render"?"Canvas drew the scene":"The browser used the result"}function pT(i,e,n){if(!e)return n;if(i==="source")return"This is the code currently visible in the editor.";if(i==="runtime"){const a=Number(e.optimizerExecutions||0);return a>0?`Rasa ran this code inside the browser and used ${a.toLocaleString()} optimized packed region${a===1?"":"s"}.`:"Rasa ran this code inside the browser. This result did not need the packed-data optimizer."}return e.detail||"This step was observed in the browser."}function gT(i){return i.id==="artifact-boundary"?"Rasa's output reached the hand-off unchanged":i.id==="boundary-effect"?"The browser used that same hand-off":i.id==="count"?"Nothing was dropped along the way":i.label}function yT(i){return i.id==="count"?i.status==="match"?`${Number(i.expected).toLocaleString()} sent · ${Number(i.actual).toLocaleString()} used`:`${Number(i.expected).toLocaleString()} sent, but ${Number(i.actual).toLocaleString()} used`:i.status==="match"?"The browser measured the data as identical at both steps.":`Expected ${uc(i.expected)} but observed ${uc(i.actual)}.`}function J0(i){const e=String(i||""),n=bd(e,/:eval\s+\{:status\s+:(\S+)/),a=bd(e,/:status\s+:(\S+)/),l=bd(e,/:failed-phase\s+(:[^\s}]+)/);if(a==="ok"&&n==="ok"){const c=NT(e);if(c)return{kind:"value",text:c.text,testRun:c.events};const u=Kr(e,":rendered-value")??"nil",f=jT(u);return{kind:"value",text:f?.text??u,...f?.events?{testRun:f.events}:{}}}return{kind:"error",text:FT(e,l)}}function bT(i){const e=String(i||"");return/:status\s+:failed/.test(e)||/:eval\s+\{:status\s+:failed/.test(e)}function vT(i,{host:e=null}={}){const n=dc(String(i||""));if(!n||n.kind!=="map")return{status:"unparseable",inspect:null,evalStatus:null,renderedValue:null,value:null,execution:null,optimizer:null,phases:[],runtime:null,plan:null,diagnostics:[]};const a=Ae(C(n,"rasa/inspect"))||null,l=C(n,"eval"),c=C(l,"rendered-value"),u=c?.kind==="string"?c.value:null,f=C(l,"value")||(u?dc(u):null);return{status:Ae(C(n,"status"))||(a?"ok":"unknown"),inspect:a,evalStatus:Ae(C(l,"status"))||null,renderedValue:u,value:Yr(f),execution:CT(C(n,"execution"),e),optimizer:OT(C(n,"optimizer")),phases:xT(n),runtime:AT(n),plan:TT(C(n,"plan")),diagnostics:ET(n)}}const Iv=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function xT(i){return Iv.map(([e,n])=>{const a=C(i,e);if(!a||a.kind==="nil")return{id:e,label:n,status:"not-requested",detail:"not captured",diagnostics:0};const l=wT(a),c=ST(e,a,l);return{id:e,label:n,status:Ae(C(a,"status"))||"available",detail:kT(e,c),diagnostics:l,metrics:c}})}function wT(i){return Re(C(i,"diagnostic-count"))??st(C(i,"diagnostics")).length}function ST(i,e,n){if(i==="facts"){const a=C(e,"summary");return{diagnostics:n,facts:Re(C(a,"facts"))??0,declaredFacts:Re(C(a,"declared-facts"))??0,metadataContracts:Re(C(a,"metadata-contracts"))??0,mode:Ae(C(e,"mode"))||"unknown"}}return i==="plan"?{diagnostics:n,lanes:st(C(e,"lanes")).length,decisions:st(C(e,"decisions")).length,candidates:st(C(e,"candidates")).length,rejected:st(C(e,"rejected")).length,fallbacks:st(C(e,"fallbacks")).length}:i==="checks"?{diagnostics:n,checks:st(C(e,"results")).length,action:Ae(C(e,"action"))||null}:{diagnostics:n}}function kT(i,e){return i==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:i==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:i==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:i==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function AT(i){const e=C(i,"session");return{implementation:Ae(C(i,"runtime-implementation"))||null,memoryPath:Ae(C(i,"memory-path"))||null,collectionImpl:Ae(C(i,"collection-impl"))||null,hostImports:fi(C(i,"host-imports"))===!0,target:pt(C(i,"target"))||null,sessionMode:Ae(C(e,"mode"))||null,persistentDefs:fi(C(e,"persistent-defs"))===!0}}function TT(i){return!i||i.kind!=="map"?null:{lanes:st(C(i,"lanes")).map(e=>Vr(e,"lane")),decisions:st(C(i,"decisions")).map(e=>Vr(e,"decision")),candidates:st(C(i,"candidates")).map(e=>Vr(e,"candidate")),rejected:st(C(i,"rejected")).map(e=>Vr(e,"rejected")),fallbacks:st(C(i,"fallbacks")).map(e=>Vr(e,"fallback"))}}function Vr(i,e){return{type:e,lane:rn(C(i,"lane")),memoryPath:rn(C(i,"memory-path")),wmp:rn(C(i,"wmp")),status:rn(C(i,"status")),decision:rn(C(i,"decision")),candidate:rn(C(i,"candidate")),family:rn(C(i,"family")),evidence:rn(C(i,"evidence")),reason:pt(C(i,"reason"))||pt(C(i,"message"))||null}}function ET(i){const e=st(C(i,"diagnostics"));return(e.length>0?e:Iv.flatMap(([a])=>st(C(C(i,a),"diagnostics")).map(l=>({item:l,id:a})))).map(a=>{const l=a.item||a;return RT(l,a.id||null)})}function RT(i,e){const n=C(i,"rasa.diagnostic/data")||C(i,"data"),a=rn(C(i,"rasa.diagnostic/severity"))||"info",l=C(i,"rasa.diagnostic/primary-span")||C(i,"span")||C(n,"rasa.error/span");return{phase:rn(C(i,"rasa.diagnostic/phase"))||rn(C(i,"phase"))||e,severity:a,code:rn(C(i,"rasa.diagnostic/code")),kind:rn(C(i,"kind")),message:pt(C(i,"rasa.diagnostic/summary"))||pt(C(i,"message"))||pt(C(n,"rasa.error/message"))||"Diagnostic record",detail:pt(C(i,"rasa.diagnostic/detail"))||null,recoverable:fi(C(i,"recoverable"))??a!=="error",span:l?.kind==="map"?{sourceId:pt(C(l,"source-id"))||null,start:Re(C(l,"start")),end:Re(C(l,"end"))}:null}}function rn(i){return Ae(i)||(i?.kind==="string"?i.value:i?.kind==="symbol"?i.raw:null)}function MT(i){return{symbol:pt(C(i,"symbol"))||null,arity:Re(C(i,"arity"))??null,reason:Ae(C(i,"reason"))||null,fallback:Ae(C(i,"fallback"))||null,arguments:st(C(i,"arguments")).filter(e=>e.kind==="map").map(e=>({index:Re(C(e,"index"))??null,family:Ae(C(e,"family"))||null,bytes:Re(C(e,"bytes")),movement:Ae(C(e,"movement"))||null}))}}function CT(i,e){if(!i)return null;const n=Ae(C(i,"host"))||null;if(e&&n&&n!=="unbound"&&n!==e)throw new Error(`execution host is ${n}, cannot bind it as ${e}`);return{semanticLane:Ae(C(i,"semantic-lane"))||null,optimizedLane:Ae(C(i,"optimized-lane"))||null,host:e||n,artifact:Ae(C(i,"artifact"))||null,status:Ae(C(i,"status"))||null,fallbackPoint:Ae(C(i,"fallback-point"))||null}}function OT(i){return!i||i.kind!=="map"?null:{enabled:fi(C(i,"enabled"))===!0,probes:Re(C(i,"probes"))??0,admitted:Re(C(i,"admitted"))??0,executed:Re(C(i,"executed"))??0,missed:Re(C(i,"missed"))??0,fallbacks:st(C(i,"fallbacks")).filter(e=>e.kind==="map").map(MT)}}function Yr(i){if(!i)return null;switch(i.kind){case"nil":return{kind:"nil",value:null};case"boolean":case"number":case"string":return{kind:i.kind,value:i.value};case"keyword":return{kind:"keyword",name:i.name};case"symbol":case"char":return{kind:i.kind,raw:i.raw};case"vector":case"list":return{kind:i.kind,items:i.items.map(Yr)};case"set":return{kind:"set",items:i.items.map(Yr).sort(I0)};case"map":return{kind:"map",entries:i.entries.map(e=>({key:Yr(e.key),value:Yr(e.value)})).sort((e,n)=>I0(e.key,n.key))};default:return{kind:i.kind||"unknown",raw:i.raw||""}}}function I0(i,e){return JSON.stringify(i).localeCompare(JSON.stringify(e))}function jT(i){const e=dc(String(i||""));return!e||e.kind!=="map"||Ae(C(e,"type"))!=="test-run"?null:{text:e1(e),events:t1(e)}}function NT(i){const e=dc(String(i||""));if(!e||e.kind!=="map")return null;const n=C(C(e,"eval"),"value");return!n||n.kind!=="map"||Ae(C(n,"type"))!=="test-run"?null:{text:e1(n),events:t1(n)}}function e1(i){const e=Ae(C(i,"status"))||"unknown",n=pt(C(i,"message")),a=Ki(C(i,"namespaces")),l=Ki(C(i,"files")),c=Ki(C(i,"paths")),u=st(C(i,"results")).filter(g=>g.kind==="map"),f=[`Test run: ${BT(i,e)}`];n&&f.push(n),eb(f,"paths",c),eb(f,"files",l);const h=a.length>0&&(e==="ok"||u.length>0);(h||u.length>0)&&f.push("");const p=new Set;for(const g of h?a:[]){f.push(g),$i(f);const b=f.length;u.forEach((x,S)=>{KT(x)===g&&(yd(f,x,g),p.add(S))}),f.length===b&&f.push("  no assertion records returned"),$i(f)}return h?u.some((g,b)=>!p.has(b))&&(f.push("<unknown-namespace>"),u.forEach((g,b)=>{p.has(b)||yd(f,g,null)}),$i(f)):(u.forEach((g,b)=>{yd(f,g,null),p.add(b)}),u.length>0&&$i(f)),u.length===0&&!h&&e==="ok"&&(f.push("No selected assertion records returned."),f.push("")),f.push(`selected ${Re(C(i,"selected"))??0}, skipped ${Re(C(i,"skipped"))??0}, tests ${Re(C(i,"test"))??0}, pass ${Re(C(i,"pass"))??0}, fail ${Re(C(i,"fail"))??0}, error ${Re(C(i,"error"))??0}, exit-code ${Re(C(i,"exit-code"))??0}`),fi(C(i,"exit-requested?"))===!0&&f.push("exit requested: true"),fi(C(i,"stopped?"))===!0&&f.push(`stopped: ${Ae(C(i,"stop-reason"))||"unknown"}`),f.join(`
`)}function t1(i){return{status:Ae(C(i,"status"))||"unknown",message:pt(C(i,"message"))||null,namespaces:Ki(C(i,"namespaces")),files:Ki(C(i,"files")),paths:Ki(C(i,"paths")),selected:Re(C(i,"selected"))??0,skipped:Re(C(i,"skipped"))??0,tests:Re(C(i,"test"))??0,pass:Re(C(i,"pass"))??0,fail:Re(C(i,"fail"))??0,error:Re(C(i,"error"))??0,exitRequested:fi(C(i,"exit-requested?"))===!0,exitCode:Re(C(i,"exit-code"))??0,stopped:fi(C(i,"stopped?"))===!0,stopReason:Ae(C(i,"stop-reason"))||null,events:st(C(i,"results")).filter(e=>e.kind==="map").map(DT)}}function DT(i){const e=Ec(C(i,"test"))||null,n=e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null,a=e?.includes("/")?e.slice(e.lastIndexOf("/")+1):e,l=zT(C(i,"span")),c=Ae(C(i,"error-kind"))||null,u=n1(C(i,"error-data")),f=pt(C(i,"message"))||null,h=s1(c,f);return{status:i1(i),test:e,namespace:n,name:a,context:Ki(C(i,"context")),form:C(i,"form")?.raw||null,expected:C(i,"expected")?.raw||null,actual:C(i,"actual")?.raw||null,message:f,...c?{errorKind:c}:{},...u?{error:u}:{},...h?.explanation?{explanation:h.explanation}:{},...h?.nextStep?{nextStep:h.nextStep}:{},span:l,diff:a1(C(i,"diff"))||null}}function zT(i){if(!i||i.kind!=="map")return null;const e=pt(C(i,"source-id"))||pt(C(i,"source"));return e?{source:e,start:Re(C(i,"start")),end:Re(C(i,"end"))}:null}function eb(i,e,n){if(n.length!==0){$i(i),i.push(`requested ${e}:`);for(const a of n)i.push(`  ${a}`)}}function BT(i,e){return e!=="ok"?e:(Re(C(i,"error"))??0)>0?"error":(Re(C(i,"fail"))??0)>0||(Re(C(i,"exit-code"))??0)!==0?"failed":"ok"}function yd(i,e,n){const a=i1(e),l=WT(Ec(C(e,"test"))||"<unknown-test>",n);i.push(`${UT(a)} ${l}`);for(const k of Ki(C(e,"context")))i.push(`  ${k}`);const c=C(e,"form");if(c&&i.push(`  ${c.raw}`),a==="pass"){i.push("");return}if(a==="no-assertions"){const k=pt(C(e,"message"));k&&i.push(`  ${k}`),i.push("");return}$i(i);const u=pt(C(e,"message")),f=Ae(C(e,"error-kind")),h=n1(C(e,"error-data"));f&&i.push(`  error-kind: ${f}`),u&&i.push(`  message: ${u}`),h&&qT(i,h,"  ");const p=s1(f,u);p?.explanation&&i.push(`  reason: ${p.explanation}`),p?.nextStep&&i.push(`  next: ${p.nextStep}`);const g=C(e,"expected");g&&i.push(`  expected: ${g.raw}`);const b=C(e,"actual");b&&i.push(`  actual:   ${b.raw}`);const x=a1(C(e,"diff"));x&&($i(i),i.push("  diff:"),x.split(`
`).forEach(k=>i.push(`    ${k}`)));const S=YT(C(e,"span"));S&&($i(i),i.push(`  source: ${S}`)),i.push("")}function n1(i){return!i||i.kind!=="map"||fi(C(i,"rasa/error"))!==!0?null:{category:Ae(C(i,"rasa.error/category"))||null,kind:Ae(C(i,"rasa.error/kind"))||null,message:pt(C(i,"rasa.error/message"))||null,data:LT(C(i,"rasa.error/data"))}}function LT(i){return!i||i.kind!=="map"?[]:i.entries.map(e=>({key:_T(e.key),value:e.value.raw||pt(e.value),role:HT(e.key)}))}function _T(i){return i?.kind==="keyword"?i.name:i?.kind==="symbol"||i?.kind==="string"?i.value||i.raw:i?.raw||"<unknown>"}function HT(i){return i?.kind!=="keyword"?"detail":i.name==="rasa.host/capability"||i.name==="rasa.host/target"?"stable":"detail"}function qT(i,e,n){e.category&&i.push(`${n}category: ${e.category}`),e.kind&&i.push(`${n}kind: ${e.kind}`),e.message&&i.push(`${n}error-message: ${e.message}`),tb(i,"data",e.data.filter(a=>a.role==="stable"),n),tb(i,"details",e.data.filter(a=>a.role!=="stable"),n)}function tb(i,e,n,a){if(n.length!==0){i.push(`${a}${e}:`);for(const l of n)i.push(`${a}  ${l.key} ${l.value}`)}}function i1(i){const e=Ae(C(i,"type"))||"unknown";return e==="test-event"?Ae(C(i,"status"))||"test-event":e}function UT(i){return i==="no-assertions"?"NO ASSERTIONS":i.toUpperCase()}function s1(i,e){return i?i==="missing-linked-var"?VT(e)||{explanation:"Evaluation reached a global symbol that is not linked to a runtime var.",nextStep:"Require or refer the source namespace, or define the var before calling it."}:i==="unsupported-reader-macro"?{explanation:"The reader saw syntax that Rasa does not support yet.",nextStep:"Rewrite this form using supported reader syntax."}:i==="unsupported-macro-shape"?{explanation:"The macro expander saw a macro form shape Rasa does not accept yet.",nextStep:"Rewrite the macro call to one of the currently supported shapes."}:i==="unsupported-analyzer-form"?{explanation:"The analyzer saw a source form that Rasa cannot lower yet.",nextStep:"Rewrite this source form using supported Rasa forms."}:i==="unsupported-runtime-node"?{explanation:"The evaluator received an IR node that this runtime path cannot execute yet.",nextStep:"Use diagnostics or inspect output to locate the source form, then rewrite it or defer this feature."}:null:null}function VT(i){const e=GT(i);return["deftest","is","testing","are","run-tests"].includes(e)?{explanation:"This test helper belongs to `rasa.test`, but it is not referred in the current namespace.",nextStep:"Require it with `(require '[rasa.test :refer [deftest is testing are run-tests]])` or add the same `:refer` to the namespace form."}:e==="runner/run"?{explanation:"`runner` is not a loaded alias for the user-space `rasa.test.runner` namespace.",nextStep:"Require it with `(require '[rasa.test.runner :as runner])` or add `[rasa.test.runner :as runner]` to the namespace form."}:null}function GT(i){return String(i||"").match(/^linked global `([^`]+)` is not available$/)?.[1]||null}function a1(i){if(!i||i.kind!=="map")return"";const e=Ae(C(i,"kind"));if(e==="map"){const n=[];for(const a of st(C(i,"changed")))a.kind==="map"&&(n.push(C(a,"key")?.raw||"changed value"),fc(n,"expected",C(a,"expected")),fc(n,"actual  ",C(a,"actual")));return Go(n,"missing",C(i,"missing")),Go(n,"extra",C(i,"extra")),n.length?n.join(`
`):i.raw}if(e==="vector")return $T("index",i);if(e==="set"){const n=[];return Go(n,"missing",C(i,"missing")),Go(n,"extra",C(i,"extra")),n.length?n.join(`
`):i.raw}if(e==="string"||e==="scalar"||e==="opaque"){const n=[];return ks(n,"expected",C(i,"expected")),ks(n,"actual  ",C(i,"actual")),ks(n,"prefix-length",C(i,"prefix-length")),ks(n,"expected-count",C(i,"expected-count")),ks(n,"actual-count",C(i,"actual-count")),n.length?n.join(`
`):i.raw}return e==="equal"?"values are equal":i.raw}function $T(i,e){const n=[];for(const a of st(C(e,"changed")))a.kind==="map"&&(n.push(`${i} ${C(a,i)?.raw||"?"}`),fc(n,"expected",C(a,"expected")),fc(n,"actual  ",C(a,"actual")));return ks(n,"expected-count",C(e,"expected-count")),ks(n,"actual-count",C(e,"actual-count")),n.length?n.join(`
`):e.raw}function ks(i,e,n){n&&i.push(`${e} ${n.raw}`)}function fc(i,e,n){n&&i.push(`  ${e} ${n.raw}`)}function Go(i,e,n){const a=st(n);a.length>0&&i.push(`${e}: ${a.map(l=>l.raw).join(", ")}`)}function YT(i){if(!i||i.kind!=="map")return"";const e=pt(C(i,"source-id"))||pt(C(i,"source"));if(!e)return"";const n=Re(C(i,"start")),a=Re(C(i,"end"));return n!==null&&a!==null?`${e}:${n}..${a}`:e}function KT(i){const e=Ec(C(i,"test"));return e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null}function WT(i,e){return!e||!i.startsWith(`${e}/`)?i:i.slice(e.length+1)}function $i(i){i[i.length-1]!==""&&i.push("")}function C(i,e){if(!i||i.kind!=="map")return null;for(const n of i.entries)if(Ae(n.key)===e)return n.value;return null}function st(i){return i?.kind==="vector"?i.items:[]}function Ki(i){return st(i).map(Ec).filter(e=>e!==null)}function Ae(i){return i?.kind==="keyword"?i.name:null}function Ec(i){return i?i.kind==="string"?i.value:i.kind==="symbol"||i.kind==="keyword"?i.raw:i.raw??null:null}function pt(i){return i?i.kind==="string"?i.value:i.kind==="nil"?"":i.raw||"":""}function Re(i){return i?.kind==="number"?i.value:null}function fi(i){return i?.kind==="boolean"?i.value:null}function dc(i){const e=new XT(i);try{const n=e.readValue();return e.skipWhitespace(),n}catch{return null}}class XT{constructor(e){this.text=e,this.index=0}readValue(){this.skipWhitespace();const e=this.index,n=this.text[this.index];if(!n)throw new Error("expected EDN value");if(n==='"'){const{value:l,end:c}=r1(this.text,this.index);return this.index=c,{kind:"string",value:l,raw:this.text.slice(e,this.index)}}if(n===":"){const l=this.readToken();return{kind:"keyword",name:l.slice(1),raw:l}}if(n==="[")return this.readDelimited("vector","[","]");if(n==="(")return this.readDelimited("list","(",")");if(n==="{")return this.readMap();if(n==="#"&&this.text[this.index+1]==="{")return this.readSet();if(n==="\\")return{kind:"char",raw:this.readToken()};const a=this.readToken();return a==="nil"?{kind:"nil",value:null,raw:a}:a==="true"||a==="false"?{kind:"boolean",value:a==="true",raw:a}:/^[+-]?(?:\d+\.\d+|\d+)$/.test(a)?{kind:"number",value:Number(a),raw:a}:{kind:"symbol",raw:a}}readDelimited(e,n,a){const l=this.index;this.expect(n);const c=[];for(;;){if(this.skipWhitespace(),this.text[this.index]===a)return this.index+=1,{kind:e,items:c,raw:this.text.slice(l,this.index)};c.push(this.readValue())}}readMap(){const e=this.index;this.expect("{");const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"map",entries:n,raw:this.text.slice(e,this.index)};const a=this.readValue(),l=this.readValue();n.push({key:a,value:l})}}readSet(){const e=this.index;this.index+=2;const n=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"set",items:n,raw:this.text.slice(e,this.index)};n.push(this.readValue())}}readToken(){const e=this.index;for(;this.index<this.text.length&&!QT(this.text[this.index]);)this.index+=1;if(this.index===e)throw new Error("expected token");return this.text.slice(e,this.index)}expect(e){if(this.text[this.index]!==e)throw new Error(`expected ${e}`);this.index+=1}skipWhitespace(){for(;this.index<this.text.length&&/[\s,]/.test(this.text[this.index]);)this.index+=1}}function QT(i){return/[\s,\[\]\(\)\{\}"]/.test(i)}function bd(i,e){const n=e.exec(i);return n?n[1].replace(/^:/,""):""}function FT(i,e){const n=Kr(i,":rendered-error");if(n)return n;const a=i.indexOf(":eval {:status :failed"),l=a>=0?Kr(i.slice(a),":message"):"";if(l)return l;const c=Kr(i,":error")||Kr(i,":message");if(c)return c;const u=e?` in ${e}`:"",f=i.match(/:diagnostics\s+\[(.*?)]/s)?.[1]?.trim();return f?`Evaluation failed${u}.
${f}`:`Evaluation failed${u}.`}function Kr(i,e){const n=i.indexOf(e);if(n<0)return null;let a=n+e.length;for(;a<i.length&&/\s/.test(i[a]);)a+=1;if(i[a]!=='"')return null;const l=r1(i,a);return l?l.value:null}function r1(i,e){let n="",a=!1;for(let l=e+1;l<i.length;l+=1){const c=i[l];if(a){n+=ZT(c),a=!1;continue}if(c==="\\"){a=!0;continue}if(c==='"')return{value:n,end:l+1};n+=c}return null}function ZT(i){return i==="n"?`
`:i==="r"?"\r":i==="t"?"	":i==="b"?"\b":i==="f"?"\f":i}class zs extends Error{constructor(e,n,a={}){super(n),this.name="BrowserCapabilityError",this.kind=e,this.data=a}}class Rs{constructor(e=[]){this.allowed=new Set(e.map(String))}static fromManifest(e={}){return new Rs(e.allow||[])}allows(e,n){return this.allowed.has("*")||this.allowed.has(Ha(e,n))}entries(){return[...this.allowed].sort()}}class zh{constructor(){this.handlers=new Map}register(e,n,a){return this.handlers.set(Ha(e,n),a),this}invoke(e,n,a){const l=Ha(e,n),c=this.handlers.get(l);if(!c)throw new zs("adapter-missing",`browser capability adapter is missing for ${l}`,Bh(e,n));return c(a)}entries(){return[...this.handlers.keys()]}}class PT{constructor({registry:e=new zh,policy:n=new Rs}={}){this.registry=e,this.policy=n instanceof Rs?n:Rs.fromManifest(n),this.lastTrace=null}call(e){const n={requestText:e,responseText:""};try{const a=l1(e),l=Wi(a.package),c=Wi(a.export),u=Array.isArray(a.args)?a.args:[],f=Ha(l,c);if(Object.assign(n,{packageName:l,exportName:c,capability:f,argsCount:u.length}),!this.policy.allows(l,c))throw new zs("policy-denied",`browser policy denies ${f}`,Bh(l,c));const h=this.registry.invoke(l,c,u);if(gE(h))return this.lastTrace={...n,status:"pending",suspended:!0},h.then(g=>{const b=nb(g);return this.lastTrace={...n,status:"completed",suspended:!0,resumed:!0,responseText:b},b},g=>{const b=ib(sb(g),g.message||String(g),ab(n,g));return this.lastTrace={...n,status:"failed",suspended:!0,resumed:!0,kind:sb(g),error:g.message,responseText:b},b});const p=nb(h);return this.lastTrace={...n,status:"completed",responseText:p},p}catch(a){const l=a instanceof zs?a.kind:"provider-error",c=ib(l,a.message||String(a),ab(n,a));return this.lastTrace={...n,status:"failed",kind:l,error:a.message,responseText:c},c}}async callAsync(e){return await this.call(e)}}class JT{constructor({manifestUrl:e,manifest:n,runtimeUrl:a,adapterBaseUrl:l=null,optimizerManifestUrl:c=null,sourceLibraries:u=[],packages:f=[],initialNamespace:h="",registry:p=new zh,providerInstances:g=new Map,policy:b=new Rs,host:x=null}){this.manifestUrl=e,this.manifest=n,this.runtimeUrl=a,this.adapterBaseUrl=l,this.optimizerManifestUrl=c,this.sourceLibraries=u,this.packages=f,this.initialNamespace=h,this.registry=p,this.providerInstances=g,this.policy=b,this.host=x||new PT({registry:p,policy:b})}engineOptions(e={}){return{...e,host:e.host??this.host,...this.adapterBaseUrl?{adapterBaseUrl:this.adapterBaseUrl}:{},...this.optimizerManifestUrl?{optimizerManifestUrl:this.optimizerManifestUrl}:{}}}configureSession(e,n,a={phases:"all"}){const l=[];l.push(e.setAdmittedOperations(n,this.admittedOperations()));for(const c of this.sourceLibraries)l.push(oE(e,n,c,a));return this.initialNamespace&&l.push(e.evaluateSession(n,`(ns ${this.initialNamespace})`,a)),l}async configureSessionAsync(e,n,a={phases:"all"}){const l=[];l.push(await e.setAdmittedOperationsAsync(n,this.admittedOperations()));for(const c of this.sourceLibraries)l.push(await cE(e,n,c,a));return this.initialNamespace&&l.push(await e.evaluateSessionAsync(n,`(ns ${this.initialNamespace})`,a)),l}admittedOperations(){const e=new Set;for(const{data:n,packageName:a}of this.packages)for(const l of n?.exports||[]){if(!IT(l))continue;const c=Wi(l?.capability)||Ha(a,Wi(l?.name));c&&e.add(c)}return this.registry.entries().filter(n=>e.has(n)).filter(n=>{const a=n.lastIndexOf("/");return a>0&&this.policy.allows(n.slice(0,a),n.slice(a+1))}).sort()}}function IT(i){const e=(i?.targets||[]).find(n=>Wi(n?.target)==="wasm-browser");return Wi(e?.availability)==="requires-adapter"&&Wi(e?.["adapter-kind"]||e?.adapter)==="javascript"}function Ha(i,e){return`${i}/${e}`}async function eE(i,e={}){const n=hE(i),a=e.readJson||mE,l=e.readText||pE,c=e.importModule||(U=>import(U)),u=e.fetch||globalThis.fetch?.bind(globalThis),f=e.target||"wasm-browser",h=await a(n.href);tE(h);const p=ka(uh(h,"runtime"),n).href,g=h.adapterBaseUrl?ka(h.adapterBaseUrl,n).href:null,b=h.optimizedCallables?ka(vd(h.optimizedCallables),n).href:null,x=await Promise.all((h.sourceLibraries||[]).map(async U=>{const K=ka(vd(U),n).href;return{url:K,sourceId:uE(U,K),text:await l(K)}})),S=await Promise.all((h.packages||[]).map(async U=>{const K=ka(vd(U),n).href,$=await l(K),B=l1($);return{url:K,text:$,data:B,packageName:U.package||fE(B)||dE(K)}})),k=new zh,A=Rs.fromManifest(h.policy||{}),M=nE(h.session),_=new JT({manifestUrl:n.href,manifest:h,runtimeUrl:p,adapterBaseUrl:g,optimizerManifestUrl:b,sourceLibraries:x,packages:S,initialNamespace:M,registry:k,policy:A});for(const U of h.providers||[]){if((U.target||f)!==f)continue;if(U.kind!=="browser-module")throw new Error(`unsupported browser provider kind ${U.kind}`);const K=ka(uh(U,"module"),n).href,$=await c(K);if(typeof $.register!="function")throw new Error(`browser provider module ${K} does not export register`);const B=$.register(k,{manifest:h,distribution:_,provider:U,moduleUrl:K,target:f,baseUrl:n,fetch:u,BrowserCapabilityError:zs,refusal:iE(f)});B!==void 0&&_.providerInstances.set(U.package||K,B)}return _}function tE(i){const e=["catalog","catalogs","providerManifest","providerManifests","manifests"].filter(n=>i&&Object.hasOwn(i,n));if(e.length>0)throw new Error(`browser distribution manifest uses retired fields ${e.join(", ")}; use packages with package.ras`)}function nE(i={}){const e=String(i?.initialNamespace||"");if(!e)return"";if(!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(e))throw new Error(`invalid browser session initialNamespace ${JSON.stringify(e)}`);return e}function iE(i){return(e,n,a={})=>new zs(e,n,{"rasa.host/target":Bs(i),...a})}function nb(i){return Ui({status:Bs("ok"),value:i})}function ib(i,e,n=null){const a={status:Bs("error"),kind:Bs(i),message:e};return n&&Object.keys(n).length>0&&(a.data=n),Ui(a)}function sb(i){return i instanceof zs?i.kind:"provider-error"}function ab(i,e){return e instanceof zs?e.data||{}:Bh(i.packageName,i.exportName,{"rasa.browser/name":e?.name||"Error"})}function Bh(i,e,n={}){const a={"rasa.host/target":Bs("wasm-browser"),...n};return i&&e&&(a["rasa.host/capability"]=Bs(Ha(i,e))),a}function l1(i){return new yE(String(i??"")).parse()}function Ui(i){return i==null?"nil":typeof i=="boolean"?String(i):typeof i=="number"?Number.isInteger(i)?String(i):String(Math.round(i*1e3)/1e3):typeof i=="string"?JSON.stringify(i):Lh(i)?`:${i.name}`:_h(i)?i.name:aE(i)?`(${i.items.map(Ui).join(" ")})`:rE(i)?`#{${i.items.map(Ui).join(" ")}}`:lE(i)?`{${i.entries.map(([e,n])=>`${Ui(e)} ${Ui(n)}`).join(" ")}}`:Array.isArray(i)?`[${i.map(Ui).join(" ")}]`:`{${Object.entries(i).map(([e,n])=>`:${e} ${Ui(n)}`).join(" ")}}`}function Bs(i){return{type:"keyword",name:String(i).replace(/^:/,"")}}function sE(i){return{type:"symbol",name:String(i)}}function Lh(i){return!!(i&&typeof i=="object"&&i.type==="keyword")}function _h(i){return!!(i&&typeof i=="object"&&i.type==="symbol")}function aE(i){return!!(i&&typeof i=="object"&&i.type==="list")}function rE(i){return!!(i&&typeof i=="object"&&i.type==="set")}function lE(i){return!!(i&&typeof i=="object"&&i.type==="map")}function Wi(i){return Lh(i)||_h(i)?i.name:String(i??"")}function oE(i,e,n,a){return typeof i.evaluateSessionWithSourceId=="function"?i.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):i.evaluateSession(e,n.text,a)}async function cE(i,e,n,a){return typeof i.evaluateSessionWithSourceIdAsync=="function"?await i.evaluateSessionWithSourceIdAsync(e,n.sourceId||n.url,n.text,a):typeof i.evaluateSessionWithSourceId=="function"?await i.evaluateSessionWithSourceId(e,n.sourceId||n.url,n.text,a):await i.evaluateSessionAsync(e,n.text,a)}function uE(i,e){return typeof i=="object"&&i?.sourceId?String(i.sourceId):e}function fE(i){return Wi(i?.id||i?.["package/id"])}function dE(i){const e=new URL(i).pathname.split("/").filter(Boolean),n=e.lastIndexOf("package.ras");return n>0?e[n-1]:""}function vd(i){return typeof i=="string"?i:uh(i,"url")}function uh(i,e){if(!i||i[e]===void 0||i[e]===null||i[e]==="")throw new Error(`browser distribution manifest is missing ${e}`);return i[e]}function ka(i,e){return new URL(i,e)}function hE(i){return new URL(i,globalThis.location?.href||"http://localhost/")}async function mE(i){const e=await fetch(i);if(!e.ok)throw new Error(`browser distribution JSON load failed: ${e.status}`);return e.json()}async function pE(i){const e=await fetch(i);if(!e.ok)throw new Error(`browser distribution asset load failed: ${e.status}`);return e.text()}function gE(i){return!!(i&&typeof i.then=="function")}class yE{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();if(this.ws(),this.index!==this.text.length)throw new Error(`unexpected trailing form at byte ${this.index}`);return e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==="("?this.list():e==="#"&&this.text[this.index+1]==="{"?this.set():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const n=this.form(),a=this.form();e[bE(n)]=a}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}list(){this.expect("(");const e=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:e};e.push(this.form())}}set(){this.expect("#"),this.expect("{");const e=[];for(;;){if(this.ws(),this.peek()==="}")return this.index++,{type:"set",items:e};e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const n=this.text[this.index++];if(n==='"')return e;if(n==="\\"){const a=this.text[this.index++];e+=a==="n"?`
`:a}else e+=n}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const n=this.text.slice(e,this.index);if(!n)throw new Error(`expected form at byte ${this.index}`);return n==="nil"?null:n==="true"?!0:n==="false"?!1:/^-?\d+(\.\d+)?$/.test(n)?Number(n):n.startsWith(":")?Bs(n.slice(1)):sE(n)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}}function bE(i){return Lh(i)||_h(i)?i.name:String(i)}const o1="RasaBrowserRuntime",vE="/assets/rasa-browser-runtime.js";function c1(i=Hh()){return i?.[o1]||null}function xE(i={}){const e=i.globalObject||Hh(),n=c1(e);if(n)return n;const a=e.location?.href||"http://rasa.local/",l=new URL(i.sourceUrl||vE,a).href,c=new URL(i.runtimeUrl||"ras.wasm",i.runtimeUrl?a:new URL(".",l).href).href,u=new URL(i.adapterBaseUrl||"rasa-component/",i.adapterBaseUrl?a:c).href,f=new URL(".",l).href,h=Object.freeze({kind:"rasa.browser-runtime.v1",sourceUrl:l,assetBaseUrl:f,runtimeUrl:c,adapterBaseUrl:u,assetUrl(p){return new URL(p,f).href},engineOptions(p={}){return{...p,adapterBaseUrl:p.adapterBaseUrl??u}}});return e[o1]=h,e.document?.documentElement?.setAttribute("data-rasa-browser-runtime","ready"),h}function wE(i={}){const e=i.runtime||c1(i.globalObject)||xE(i),n=e?.runtimeUrl||i.runtimeUrl||"./assets/ras.wasm";return{sourceUrl:e?.sourceUrl||null,assetBaseUrl:e?.assetBaseUrl||null,runtimeUrl:n,adapterBaseUrl:e?.adapterBaseUrl||i.adapterBaseUrl||new URL("rasa-component/",new URL(n,kE(i.globalObject))).href}}async function SE(i,e={}){const n=wE(e),{runtime:a,runtimeUrl:l,adapterBaseUrl:c,globalObject:u,...f}=e;return await i.load(n.runtimeUrl,{...f,adapterBaseUrl:f.adapterBaseUrl??n.adapterBaseUrl})}function Hh(){return typeof window<"u"?window:typeof self<"u"?self:typeof globalThis<"u"?globalThis:{}}function kE(i=Hh()){return i.location?.href||"http://rasa.local/"}const u1="wasm-component",AE="browser-component-adapter-pending",Po="Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasmtime` locally for execution.",TE="rasa-component/",f1="rasa:runtime/host",EE="rasa:runtime/host@0.1.0",d1="rasa:runtime/optimizer",RE="rasa:runtime/optimizer@0.1.0",h1="rasa:runtime/source-loader",ME="rasa:runtime/source-loader@0.1.0",CE="rasa:runtime/session@0.1.0",m1="runtime-wasm-before-region-entry",hc=65536,p1=1,g1=2,y1=4,b1=8,v1=16,x1=32,OE=p1|g1|y1|b1|v1|x1,jE=256;class NE extends Error{constructor(e=Po){super(e),this.name="RasaBrowserRuntimeUnavailableError",this.runtimeKind=u1,this.unavailableReason=AE}}class rb extends Error{constructor(e){super(e),this.name="RasaBrowserHostCallError"}}class qh{static async load(e,n={}){const a=mc(e),l=n.readBytes||S1,c=await l(a,"Rasa runtime component"),u=mc(n.adapterBaseUrl||TE,a),f=n.optimizer??await VE(n,a,l),p=await import(new URL("ras-runtime.js",u).href),g=LE(n.host,f,n.sourceLoader),b=new Map,x=await p.instantiate(async S=>{const k=new URL(S,u),A=b.get(k.href);if(A)return A;const M=await l(k,`Rasa component core module ${S}`),_=await WebAssembly.compile(M);return b.set(k.href,_),_},g);return new qh({url:a.href,adapterBaseUrl:u.href,byteLength:c.byteLength,imports:g,session:x.session||x[CE]})}constructor(e={}){if(!e.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=e.url??null,this.adapterBaseUrl=e.adapterBaseUrl??null,this.byteLength=e.byteLength??null,this.available=!0,this.runtimeKind=u1,this.unavailableReason=null,this.message="Browser Wasm component runtime ready.",this.session=e.session,this.importObject=e.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}unavailableError(){return new NE(this.message)}evaluate(e,n=null){return this.session.evalSource(kn(e),ys(n))}evaluateAdmitted(e,n,a=null){return this.session.evalAdmittedSource(kn(e),[...n].map(String),ys(a))}async evaluateAdmittedAsync(e,n,a=null){return await this.evaluateAdmitted(e,n,a)}evaluateAdmittedWithSourceId(e,n,a,l=null){return this.session.evalAdmittedSourceWithId(String(e||"browser://eval"),kn(n),[...a].map(String),ys(l))}async evaluateAdmittedWithSourceIdAsync(e,n,a,l=null){return await this.evaluateAdmittedWithSourceId(e,n,a,l)}inspect(e,n=null){const a=this.session.inspectSource(kn(e),ys(n));return cb(a,"inspection artifact")}syntaxTokens(e){const n=this.session.syntaxTokens(kn(e));return cb(n,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(e){e!=null&&this.session.sessionFree(e)}setSessionOptimizerEnabled(e,n){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(e,!!n)}setAdmittedOperations(e,n){return this.session.sessionSetAdmittedOperations(e,[...n].map(String))}async setAdmittedOperationsAsync(e,n){return await this.setAdmittedOperations(e,n)}evaluateSession(e,n,a=null){return this.session.sessionEval(e,kn(n),ys(a))}async evaluateSessionAsync(e,n,a=null){return await this.evaluateSession(e,n,a)}evaluateSessionWithSourceId(e,n,a,l=null){if(typeof this.session.sessionEvalWithId!="function")throw new Error("Rasa Wasm component does not export sessionEvalWithId");return this.session.sessionEvalWithId(e,String(n||"browser://eval"),kn(a),ys(l))}async evaluateSessionWithSourceIdAsync(e,n,a,l=null){return await this.evaluateSessionWithSourceId(e,n,a,l)}evaluateReplSession(e,n,a=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(e,kn(n),ys(a))}async evaluateReplSessionAsync(e,n,a=null){return await this.evaluateReplSession(e,n,a)}}function kn(i){return new TextEncoder().encode(String(i??""))}function DE(i){return new TextDecoder("utf-8",{fatal:!0}).decode(i)}async function zE(i=[],e={}){const n=new Map,a=new Map;let l=1n;for(const c of i){const u=await qE(c,e);if(u.currency==null||u.version==null)continue;const f=l;l+=1n,n.set(lb(u.currency,u.version),f),a.set(f.toString(),u)}return{installVersion(c,u){return n.get(lb(c,u))},tryCall(c,u){const f=a.get(BigInt(c).toString());return f?GE(f,u):Yi("missing-version-token")}}}async function BE(i,e={}){const n=mc(i),a=e.readJson||l3,c=((e.manifest||await a(n.href)).callables||[]).map(u=>({currency:zn(u,"currency"),version:zn(u,"version"),symbol:u.symbol,arity:u.arity,abi:u.abi,inputIndex:u.inputIndex,inputShape:u.inputShape,result:u.result,resultProbe:u.resultProbe,keys:u.keys,packed:u.packed,url:o3(zn(u,"url"),n).href}));return zE(c,{...e,readBytes:e.readBytes})}function LE(i=null,e=null,n=null){const a={[f1]:_E(i),[d1]:HE(e),[h1]:i3(n),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new ub},"wasi:cli/stdout":{getStdout:()=>new xd},"wasi:cli/stderr":{getStderr:()=>new xd},"wasi:cli/terminal-input":{TerminalInput:u3},"wasi:cli/terminal-output":{TerminalOutput:f3},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new fh},"wasi:io/error":{Error:c3},"wasi:io/poll":{Pollable:fh,poll:()=>[]},"wasi:io/streams":{InputStream:ub,OutputStream:xd},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return a3(a)}function _E(i){return{call(e){if(!i)throw new rb("no browser host provider is registered");if(typeof i.callBytes=="function")return s3(i.callBytes(e));if(typeof i.call=="function"){const n=i.call(DE(e));return k1(n)?n.then(a=>kn(a)):kn(n)}throw new rb("browser host provider does not implement call")}}}function HE(i){return{installVersion(e,n){if(typeof i?.installVersion=="function")return i.installVersion(e,n)},tryCall(e,n){return typeof i?.tryCall=="function"?i.tryCall(e,n):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:m1}}}}}async function qE(i,e){const n=e3(i.resultProbe??i.result??"i64"),a=Number.isInteger(i.inputIndex)?i.inputIndex:0,l=Array.isArray(i.keys)?i.keys.map(String):[],c=i.abi||(i.packed?"packed-vector-v1":"utf8-scan-v1"),u=t3(i.packed);try{return{currency:i.currency==null?null:String(i.currency),version:i.version==null?null:BigInt(i.version),symbol:String(i.symbol),arity:Number(i.arity),abi:c,result:n,inputIndex:a,inputShape:i.inputShape||null,keys:l,packed:u,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:await UE(i,e),blocker:null}}catch(f){return{currency:i.currency==null?null:String(i.currency),version:i.version==null?null:BigInt(i.version),symbol:String(i.symbol),arity:Number(i.arity),abi:c,packed:u,result:n,inputIndex:a,keys:l,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:f?.message??String(f)}}}}async function UE(i,e){if(i.exports)return i.exports;if(i.instance?.exports)return i.instance.exports;if(typeof i.instantiate=="function"){const c=await i.instantiate();if(c?.exports)return c.exports;if(c?.instance?.exports)return c.instance.exports}const n=i.imports||e.imports||{};let a=i.module??null;if(!a){const c=e.readBytes||S1,u=i.moduleBytes??(i.url?await c(i.url,"WasmGC callable artifact"):null);if(!u)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");a=await WebAssembly.compile(qa(u))}const l=await WebAssembly.instantiate(a,n);if(l?.exports)return l.exports;if(l?.instance?.exports)return l.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function VE(i,e,n){if(!i.optimizerManifestUrl&&!i.optimizerManifest)return null;const a=i.optimizerManifestUrl?mc(i.optimizerManifestUrl,e).href:e.href;return BE(a,{manifest:i.optimizerManifest,readJson:i.readJson,readBytes:n,onPackedOutput:i.onPackedOutput})}function GE(i,e){if(i.blocker)return Yi(i.blocker.reason);try{if(i.abi==="packed-vector-v1"||i.packed)return $E(i,e);const n=PE(e?.[i.inputIndex]);return n?(WE(i.exports,n),{tag:"executed",val:QE(i)}):Yi("missing-runtime-string-argument")}catch(n){return Yi(IE(n))}}function $E(i,e){const n=i.packed;if(!n)return Yi("missing-browser-packed-callable-abi");const a=YE(i,n),l=a?null:JE(e?.[i.inputIndex]);if(!a&&!l)return Yi("missing-runtime-packed-argument");const c=ob(n.input.element,n.input.length);if(!a&&l.logicalBitExtent!==c)return Yi("browser-packed-input-bit-extent-mismatch");const u=a?new Uint8Array(0):l.bytes;if(u.byteLength!==n.input.byteLength)return Yi("browser-packed-input-byte-length-mismatch");const f=XE(i.exports,u,n);Rc(i.exports,"rasa_run_packed")();const h=new Uint8Array(f.buffer,n.output.offset,n.output.byteLength);return KE(i,h),{tag:"executed",val:{tag:"packed",val:{dtype:n.output.element,shape:[BigInt(n.output.length)],logicalBitExtent:ob(n.output.element,n.output.length),bytes:new Uint8Array(h)}}}}function YE(i,e){return e.input.length===0&&e.input.byteLength===0&&(i.inputShape==="none"||i.arity===0)}function KE(i,e){typeof i.onPackedOutput=="function"&&i.onPackedOutput({symbol:i.symbol,arity:i.arity,abi:i.abi,packed:i.packed,bytes:new Uint8Array(e)})}function WE(i,e){const n=i?.rasa_memory,a=i?.rasa_prepare_utf8;if(!n?.buffer||typeof a!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const l=Math.ceil(e.byteLength/hc),c=Math.ceil(n.buffer.byteLength/hc);l>c&&n.grow(l-c),new Uint8Array(n.buffer,0,e.byteLength).set(e),a(e.byteLength)}function XE(i,e,n){const a=i?.rasa_memory;if(!a?.buffer)throw new Error("missing WasmGC callable packed memory export");const l=Math.max(Number(n.memory.minimumPages||0),Math.ceil((n.output.offset+n.output.byteLength)/hc)),c=Math.ceil(a.buffer.byteLength/hc);return l>c&&a.grow(l-c),new Uint8Array(a.buffer,0,e.byteLength).set(e),a}function QE(i){switch(i.result){case"i64":return{tag:"int64",val:Vh(Uh(i.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:FE(i.exports)};case"i64-map":return{tag:"i64-map",val:ZE(i.exports,i.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${i.result}`)}}function FE(i){const e=w1(Uh(i,"rasa_main_vector_len")),n=Rc(i,"rasa_main_vector_i64_at");return Array.from({length:e},(a,l)=>Vh(n(l)))}function ZE(i,e){const n=w1(Uh(i,"rasa_main_map_len"));if(n!==e.length)throw new Error(`WasmGC map probe length ${n} did not match planned keys ${e.length}`);const a=Rc(i,"rasa_main_map_i64_at");return e.map((l,c)=>({key:l,value:Vh(a(c))}))}function Uh(i,e){return Rc(i,e)()}function Rc(i,e){const n=i?.[e];if(typeof n!="function")throw new Error(`missing WasmGC callable export ${e}`);return n}function PE(i){return i?.tag==="utf8-string"||i?.tag==="utf8String"?qa(i.val):null}function JE(i){if(i?.tag!=="packed")return null;const e=i.val,n=e?.logicalBitExtent??e?.["logical-bit-extent"];return typeof n!="bigint"||n<0n||!(e?.bytes instanceof Uint8Array)&&!(e?.bytes instanceof ArrayBuffer)&&!ArrayBuffer.isView(e?.bytes)?null:{logicalBitExtent:n,bytes:qa(e?.bytes)}}function Yi(i){return{tag:"refused",val:{reason:i,fallback:m1}}}function IE(i){const e=i?.message||String(i);return e.startsWith("unsupported packed scalar ")?"browser-packed-scalar-unsupported":e.includes(" value out of range")?"browser-packed-value-out-of-range":"browser-wasmgc-callable-execution-error"}function lb(i,e){return`${String(i)}\0${BigInt(e).toString()}`}function e3(i){switch(String(i)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(i)}}function t3(i){return i?{input:{element:String(zn(i.input||{},"element")),length:Number(zn(i.input||{},"length")),byteLength:Number(zn(i.input||{},"byteLength"))},output:{element:String(zn(i.output||{},"element")),length:Number(zn(i.output||{},"length")),byteLength:Number(zn(i.output||{},"byteLength")),offset:Number(zn(i.output||{},"offset"))},memory:{minimumPages:Number(i.memory?.minimumPages||0)}}:null}function ob(i,e){return BigInt(e)*BigInt(n3(i)*8)}function n3(i){const e={u8:1,i8:1,u16:2,i16:2,u32:4,i32:4,u64:8,i64:8}[String(i)];if(!e)throw new Error(`unsupported packed scalar ${i}`);return e}function w1(i){const e=Number(i);if(!Number.isInteger(e)||e<0)throw new Error(`invalid WasmGC probe length ${i}`);return e}function Vh(i){return typeof i=="bigint"?i:(typeof i=="number"&&Number.isSafeInteger(i),BigInt(i))}function i3(i){return{loadRunnerSources(e,n){if(typeof i?.loadRunnerSources=="function")return i.loadRunnerSources(e,n);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function s3(i){return k1(i)?i.then(e=>qa(e)):qa(i)}function a3(i){return{...i,[EE]:i[f1],[RE]:i[d1],[ME]:i[h1],"wasi:cli/environment@0.2.6":i["wasi:cli/environment"],"wasi:cli/exit@0.2.6":i["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":i["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":i["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":i["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":i["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":i["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":i["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":i["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":i["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":i["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":i["wasi:io/error"],"wasi:io/poll@0.2.6":i["wasi:io/poll"],"wasi:io/streams@0.2.6":i["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":i["wasi:random/insecure-seed"]}}function ys(i){if(typeof i=="number")return i;let e=OE;return i?.phases&&i.phases!=="all"&&(e=(Array.isArray(i.phases)?i.phases:[i.phases]).reduce((a,l)=>a|r3(l),0)),i?.traces&&(e|=jE),e}function r3(i){switch(String(i)){case"reader":return p1;case"analysis":case"analyze":return g1;case"ir":return y1;case"facts":return b1;case"plan":return x1;case"eval":return v1;default:return 0}}function cb(i,e){try{return JSON.parse(i)}catch(n){throw new Error(`failed to parse ${e}: ${n.message}`)}}function qa(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):kn(i)}async function S1(i,e){const n=await fetch(i);if(!n.ok)throw new Error(`failed to load ${e}: ${n.status}`);return qa(await n.arrayBuffer())}async function l3(i){const e=await fetch(i);if(!e.ok)throw new Error(`failed to load JSON ${i}: ${e.status}`);return e.json()}function mc(i,e=null){return new URL(String(i),e||globalThis.location?.href||import.meta.url)}function o3(i,e){return new URL(String(i),e)}function zn(i,e){if(!i||i[e]===void 0||i[e]===null||i[e]==="")throw new Error(`callable WasmGC manifest entry is missing ${e}`);return i[e]}function k1(i){return i&&typeof i.then=="function"}class c3{}class fh{block(){}}class ub{}class xd{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new fh}}class u3{}class f3{}const fb=Object.freeze({phases:"all"}),d3=()=>{};function A1({engineUrl:i="",manifestUrl:e="",bootSource:n="",evalOptions:a=fb,configureOptions:l=fb,onRuntimeStateChange:c=d3,onRunResult:u=null,formatDisplay:f=null}={}){const h=j.useRef(null),p=j.useRef(null),g=j.useRef(0),b=j.useRef([]),x=j.useRef({available:!1,message:Po,execution:null,optimizer:null}),[S,k]=j.useState(x.current),[A,M]=j.useState("loading"),[_,U]=j.useState(""),[K,$]=j.useState("empty"),[B,W]=j.useState([]),[X,te]=j.useState(!1),[me,We]=j.useState(0),ut=A==="pending",De=j.useCallback(I=>{const re={...x.current,...I};x.current=re,k(re),c(re)},[c]),vt=j.useCallback(I=>{if(!h.current||!I)return[];try{return h.current.syntaxTokens(String(I)).tokens||[]}catch{return[]}},[]),He=j.useCallback(()=>{h.current&&g.current&&h.current.freeSession(g.current),h.current=null,p.current=null,g.current=0},[]),Xe=j.useCallback(async()=>{M("loading"),U(""),$("empty"),W([]),He();try{const I=e?await eE(e):null;p.current=I;const re=le=>{b.current.push(le)},E=await SE(qh,{...I?.engineOptions({onPackedOutput:re})||{onPackedOutput:re},runtimeUrl:i||I?.runtimeUrl||"./assets/ras.wasm"});if(h.current=E,E.available===!1){M("pending"),U(E.message||Po),$("notice"),De({available:!1,runtimeKind:E.runtimeKind,unavailableReason:E.unavailableReason,message:E.message,distribution:null,capabilities:[],execution:null,optimizer:null});return}const q=E.createSession();g.current=q;const F=!!I?.optimizerManifestUrl;F&&E.setSessionOptimizerEnabled(q,!0);const Z=I?await I.configureSessionAsync(E,q,l):[];for(const le of Z)if(bT(le))throw new Error(`failed to configure browser distribution: ${h3(String(le||""),"")}`);if(n){const le=await E.evaluateSessionAsync(q,n,l),oe=J0(le);if(oe.kind==="error")throw new Error(`failed to load Rasa core: ${oe.text}`)}M("ready"),De({available:!0,runtimeKind:E.runtimeKind||"wasm-component",distribution:I?.manifestUrl||null,capabilities:I?.policy.entries()||[],message:null,optimizedCallables:I?.optimizerManifestUrl||null,optimizerEnabled:F,execution:null,optimizer:null})}catch(I){He(),M("failed"),U(I.message),$("error"),De({available:!1,message:I.message,distribution:null,capabilities:[],execution:null,optimizer:null})}},[n,He,l,i,e,De]);j.useEffect(()=>(Xe(),He),[Xe,He]);const H=j.useCallback(async(I,re=null)=>{const E=String(I??"");if(ut){const F=h.current?.message||Po;return U(F),$("notice"),W([]),null}if(!h.current||!g.current||X)return null;te(!0),b.current=[];const q=wd();try{const F=re?.evalOptions||a,Z=await h.current.evaluateReplSessionAsync(g.current,E,F),le=wd()-q,oe=J0(Z),ye=vT(Z,{host:"browser"}),Ge=b.current.slice(),et=(re?.formatDisplay||f)?.({display:oe,parity:ye,packedOutputs:Ge,report:Z,source:E})||oe,qn={report:Z,display:et,rawDisplay:oe,parity:ye,elapsedMs:le,packedOutputs:Ge,source:E,status:et.kind==="error"?"error":"ok"};return U(et.text),$(et.kind),W(et.kind==="value"?vt(et.text):[]),We(Vt=>Vt+1),M(et.kind==="error"?"error":"ready"),(ye.execution||ye.optimizer)&&De({available:!0,runtimeKind:h.current.runtimeKind||"wasm-component",execution:ye.execution,optimizer:ye.optimizer}),u?.(qn),qn}catch(F){const Z={error:F,display:{kind:"error",text:F.message},elapsedMs:wd()-q,packedOutputs:b.current.slice(),source:E,status:"error"};return U(F.message),$("error"),W([]),M("error"),u?.(Z),Z}finally{te(!1)}},[a,f,u,De,X,ut,vt]),Q=j.useCallback(I=>p.current?.providerInstances?.get(String(I))||null,[]),ie=j.useCallback(()=>p.current?.host?.lastTrace||null,[]);return{boot:Xe,canRun:!!(h.current&&g.current&&!X&&!ut),getHostTrace:ie,getProvider:Q,output:_,outputKind:K,outputTokens:B,run:H,runCount:me,running:X,runtimePending:ut,runtimeState:S,status:A,syntaxTokens:vt}}function wd(){return globalThis.performance?.now?.()??Date.now()}function h3(i,e){const n=i.match(/:failed-phase\s+(:[^\s}]+)/)?.[1]||null,a=i.match(/:message\s+"((?:\\.|[^"\\])*)"/)?.[1]||null;return a?a.replace(/\\n/g,`
`).replace(/\\"/g,'"'):n?`${n} failed`:e||"runtime report failed"}const m3=j.forwardRef(function({ariaLabel:e="Rasa source editor",className:n="",onChange:a=null,onRun:l=null,readOnly:c=!1,source:u=""},f){const h=j.useRef(null),p=j.useRef(null),g=j.useRef(a),b=j.useRef(l);return g.current=a,b.current=l,j.useEffect(()=>{if(!h.current)return;const x=Dh({parent:h.current,doc:u,liveLexicalHighlight:!0,onChange:S=>g.current?.(S),onRun:()=>b.current?.(),readOnly:c});return p.current=x,()=>{x.destroy(),p.current=null}},[c]),j.useEffect(()=>{const x=p.current;!x||x.state.doc.toString()===u||x.dispatch({changes:{from:0,to:x.state.doc.length,insert:u}})},[u]),j.useImperativeHandle(f,()=>({focus:()=>p.current?.focus(),getSource:()=>p.current?.state.doc.toString()||"",revealSpan:x=>IA(p.current,x),setSource:x=>{const S=p.current;S&&S.dispatch({changes:{from:0,to:S.state.doc.length,insert:String(x??"")}})}}),[]),v.jsx("div",{"aria-label":e,className:`rasa-editor ${n}`,ref:h})}),T1=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function p3(i,{elapsedMs:e=0}={}){const n=i?.data||{},a=T1.map(([u,f])=>g3(u,f,n[u])),l=b3(n.plan),c=v3(n);return{id:`${i?.label||"run"}:${e}:${i?.status||"unknown"}`,result:i,run:{elapsedMs:e,reportMode:a.some(u=>u.id!=="eval"&&u.status!=="not-requested")?"all":"eval",status:i?.status||"unknown"},parity:{status:i?.status||"unknown",evalStatus:i?.evalStatus||null,renderedValue:i?.renderedValue??null,value:i?.value??null,execution:x3(n.execution),optimizer:w3(n.optimizer),phases:a,runtime:S3(n),plan:l,diagnostics:c,rawReport:n}}}function g3(i,e,n){if(!n||typeof n!="object")return{id:i,label:e,status:"not-requested",detail:"not captured",diagnostics:0,metrics:{}};const a=Number(n["diagnostic-count"]??n.diagnostics?.length??0),l={diagnostics:a};if(i==="facts"){const c=n.summary||{};Object.assign(l,{facts:Number(c.facts||0),declaredFacts:Number(c["declared-facts"]||0),metadataContracts:Number(c["metadata-contracts"]||0),mode:Ee(n.mode)||"unknown"})}return i==="checks"&&Object.assign(l,{checks:n.results?.length||0,action:Ee(n.action)||null}),i==="plan"&&Object.assign(l,{lanes:n.lanes?.length||0,decisions:n.decisions?.length||0,candidates:n.candidates?.length||0,rejected:n.rejected?.length||0,fallbacks:n.fallbacks?.length||0}),{id:i,label:e,status:Ee(n.status)||"available",detail:y3(i,l),diagnostics:a,metrics:l}}function y3(i,e){return i==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:i==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:i==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:i==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function b3(i){return!i||typeof i!="object"?null:Object.fromEntries(["lanes","decisions","candidates","rejected","fallbacks"].map(e=>[e,(i[e]||[]).map(n=>({type:e==="lanes"?"lane":e.replace(/s$/,""),lane:Ee(n.lane),memoryPath:Ee(n["memory-path"]),wmp:Ee(n.wmp),status:Ee(n.status),decision:Ee(n.decision),candidate:Ee(n.candidate),family:Ee(n.family),evidence:Ee(n.evidence),reason:n.reason||n.message||null}))]))}function v3(i){const e=Array.isArray(i.diagnostics)?i.diagnostics:[];return(e.length?e.map(a=>({record:a,phase:null})):T1.flatMap(([a])=>(i[a]?.diagnostics||[]).map(l=>({record:l,phase:a})))).map(({record:a,phase:l})=>{const c=a.data||a["rasa.diagnostic/data"]||{},u=a.span||a["rasa.diagnostic/primary-span"]||c["rasa.error/span"]||null,f=Ee(a["rasa.diagnostic/severity"])||"info";return{phase:Ee(a.phase||a["rasa.diagnostic/phase"])||l,severity:f,code:Ee(a["rasa.diagnostic/code"]),kind:Ee(a.kind),message:a["rasa.diagnostic/summary"]||a.message||c["rasa.error/message"]||"Diagnostic record",detail:a["rasa.diagnostic/detail"]||null,recoverable:a.recoverable??f!=="error",span:u&&typeof u=="object"?{sourceId:u["source-id"]||null,start:Number(u.start??0),end:Number(u.end??0)}:null}})}function x3(i){return i?{semanticLane:Ee(i["semantic-lane"]),optimizedLane:Ee(i["optimized-lane"]),host:Ee(i.host),artifact:Ee(i.artifact),status:Ee(i.status),fallbackPoint:Ee(i["fallback-point"])}:null}function w3(i){return!i||typeof i!="object"?null:{enabled:i.enabled===!0,probes:Number(i.probes||0),admitted:Number(i.admitted||0),executed:Number(i.executed||0),missed:Number(i.missed||0),fallbacks:(i.fallbacks||[]).map(e=>({symbol:e.symbol||null,arity:e.arity??null,reason:Ee(e.reason),fallback:Ee(e.fallback),arguments:e.arguments||[]}))}}function S3(i){const e=i.session||{};return{implementation:Ee(i["runtime-implementation"]),memoryPath:Ee(i["memory-path"]),collectionImpl:Ee(i["collection-impl"]),hostImports:i["host-imports"]===!0,target:Ee(i.target),sessionMode:Ee(e.mode),persistentDefs:e["persistent-defs"]===!0}}function Ee(i){if(i==null)return null;if(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||typeof i=="boolean")return String(i).replace(/^:/,"");if(Array.isArray(i))return i.map(Ee).filter(Boolean).join(", ");if(typeof i=="object"){const e=i.kind||i.type,n=[i.items,i.value,i.values].find(Array.isArray);if(i.name!=null)return String(i.name).replace(/^:/,"");if(["set","vector","list"].includes(e)&&n)return n.map(Ee).filter(Boolean).join(", ");if(e==="map"&&Array.isArray(i.entries))return i.entries.map(({key:l,value:c})=>{const u=Ee(l)||"field",f=Ee(c)||"structured value";return`${u}: ${f}`}).join(", ");if(["string","number","boolean"].includes(e)&&i.value!=null)return String(i.value);if(["symbol","char"].includes(e)&&i.raw!=null)return String(i.raw);if(i.label!=null)return Ee(i.label);const a=Object.entries(i).filter(([l])=>!["kind","type","raw"].includes(l));return a.length?a.map(([l,c])=>`${l}: ${Ee(c)||"structured value"}`).join(", "):null}return String(i)}const k3="rasa.browser-product.v1",A3="rasa.browser-api.v1",T3=Object.freeze({phases:"all"});function E3({manifestUrl:i="/rasa/browser-product.json",evalOptions:e=T3,configureOptions:n=e}={}){const a=j.useRef(null),l=j.useRef(0),[c,u]=j.useState("loading"),[f,h]=j.useState(null),[p,g]=j.useState(null),[b,x]=j.useState(!1),[S,k]=j.useState(null),A=j.useCallback(async()=>{l.current+=1;const U=a.current;a.current=null,await U?.close?.()},[]),M=j.useCallback(async()=>{const U=l.current+1;l.current=U,u("loading"),h(null),g(null);const K=a.current;a.current=null,await K?.close?.();try{const $=new URL(i,globalThis.location.href).href,B=await fetch($,{cache:"no-store"});if(!B.ok)throw new Error(`Rasa browser product manifest failed to load (${B.status})`);const W=await B.json();if(W.schema!==k3||W.api?.version!==A3)throw new Error(`Unsupported Rasa browser product contract ${W.schema||"missing"} / ${W.api?.version||"missing"}`);const me=await(await import(new URL(W.api.module,$).href)).createRasaBrowserProduct($,{evalOptions:e,configureOptions:n});if(U!==l.current){await me.close();return}a.current=me,k({apiVersion:W.api.version,build:W.build,product:W.product,runtimeContract:W.runtimeContract}),u("ready")}catch($){if(U!==l.current)return;h($),u("failed")}},[n,e,i]);j.useEffect(()=>(M(),()=>{A()}),[M,A]);const _=j.useCallback(async(U,K={})=>{const $=a.current;if(!$||b)return null;x(!0),h(null);const B=performance.now();try{const W=await $.eval(String(U??""),K),X=performance.now()-B,te={source:String(U??""),...p3(W,{elapsedMs:X})};return g(te),u(W.status==="ok"?"ready":"refused"),te}catch(W){return h(W),u("failed"),null}finally{x(!1)}},[b]);return{boot:M,canRun:c==="ready"||c==="refused",error:f,evaluate:_,productInfo:S,run:p,running:b,status:c}}const Sd=Object.freeze({phases:"all"});j.forwardRef(function({initialSource:e="(+ 1 2 3)",manifestUrl:n="/rasa/browser-product.json",onRunResult:a=null,onRuntimeStateChange:l=null,subtitle:c="One persistent browser session",title:u="Rasa browser product"},f){const[h,p]=j.useState(e),g=E3({configureOptions:Sd,evalOptions:Sd,manifestUrl:n});j.useEffect(()=>{const S=g.status==="ready"||g.status==="refused";l?.({available:S,message:g.error?.message||null,product:g.productInfo,runtimeKind:S?"wasm-component":null,status:g.status})},[l,g.error,g.productInfo,g.status]);const b=j.useCallback(async(S=null)=>{const k=S===null?h:String(S);S!==null&&p(k);const A=await g.evaluate(k,Sd);return a?.(A),A},[a,g,h]);j.useImperativeHandle(f,()=>({loadSource:S=>p(String(S??"")),reset:()=>g.boot(),runSource:(S=null)=>b(S)}),[b,g.boot]);const x=R3(g);return v.jsxs("section",{className:"rasa-repl","aria-label":u,children:[v.jsxs("header",{className:"rasa-repl__head",children:[v.jsxs("div",{children:[v.jsx("span",{className:"rasa-repl__eyebrow",children:u}),v.jsx("strong",{children:c})]}),v.jsx("span",{className:`rasa-repl__status rasa-repl__status--${g.status}`,children:g.status})]}),v.jsx(m3,{className:"rasa-repl__input",onChange:p,onRun:b,source:h}),v.jsxs("div",{className:"rasa-repl__actions",children:[v.jsx("button",{disabled:!g.canRun||g.running,onClick:()=>b(),type:"button",children:g.running?"Running":"Run"}),v.jsx("button",{disabled:g.status==="loading",onClick:g.boot,type:"button",children:"Restart session"})]}),v.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${x.kind}`,children:x.text})]})});function R3(i){if(i.error)return{kind:"error",text:i.error.message||String(i.error)};const e=i.run?.result;return e?e.status==="ok"?{kind:"value",text:e.renderedValue??"nil"}:{kind:"error",text:e.refusal?.message||`Rasa returned ${e.status}`}:{kind:"empty",text:"Run a Rasa form to produce a value."}}const M3="(+ 1 2 3)",C3="Output will appear here.",O3=()=>{};j.forwardRef(function({engineUrl:e="",manifestUrl:n="",initialSource:a=M3,bootSource:l="",title:c="Rasa WASM",subtitle:u="Shared browser session",className:f="",onRuntimeStateChange:h=O3,onRunResult:p=null,onSourceChange:g=null,formatDisplay:b=null},x){const S=j.useRef(null),k=j.useRef(null),A=j.useRef(0),M=j.useRef(null),[_,U]=j.useState(a),K=A1({bootSource:l,engineUrl:e,formatDisplay:b,manifestUrl:n,onRunResult:p,onRuntimeStateChange:h}),$=j.useCallback((te=null,me=80)=>{A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{if(A.current=0,!k.current)return;const We=te??k.current?.state.doc.toString()??"";k.current.dispatch({effects:Nh.of(K.syntaxTokens(We))})},me)},[K.syntaxTokens]),B=j.useCallback(te=>{const me=String(te??""),We=k.current;We&&We.dispatch({changes:{from:0,to:We.state.doc.length,insert:me}}),U(me),g?.(me),$(me,0)},[g,$]);j.useEffect(()=>{if(!(!S.current||k.current))return k.current=Dh({parent:S.current,doc:a,onChange:te=>{U(te),g?.(te),$(te)},onRun:()=>{M.current?.()}}),$(a,0),k.current.focus(),()=>{A.current&&clearTimeout(A.current),k.current?.destroy(),k.current=null}},[a,g,$]);const W=j.useCallback(async(te=null)=>{const me=te===null?k.current?.state.doc.toString()??_:String(te);return te!==null&&B(me),K.run(me)},[K.run,B,_]);M.current=()=>W(),j.useImperativeHandle(x,()=>({getProvider:te=>K.getProvider(te),loadSource:te=>B(te),runSource:(te=null)=>W(te),reset:()=>K.boot()}),[W,K.boot,K.getProvider,B]);const X=j.useMemo(()=>KA(K.output||C3,K.outputTokens),[K.output,K.outputTokens]);return v.jsxs("section",{className:`rasa-repl ${f}`,"aria-label":c,children:[v.jsxs("header",{className:"rasa-repl__head",children:[v.jsxs("div",{children:[v.jsx("span",{className:"rasa-repl__eyebrow",children:c}),v.jsx("strong",{children:u})]}),v.jsx("span",{className:`rasa-repl__status rasa-repl__status--${K.status}`,children:K.status})]}),v.jsx("div",{className:"rasa-repl__input",ref:S}),v.jsxs("div",{className:"rasa-repl__actions",children:[v.jsx("button",{type:"button",onClick:()=>W(),disabled:!K.canRun,children:K.running?"Running":"Run"}),v.jsx("button",{type:"button",onClick:K.boot,disabled:K.status==="loading"||K.runtimePending,children:"Reset engine"}),v.jsxs("span",{children:[K.runCount," runs"]})]}),v.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${K.outputKind}`,children:X.map((te,me)=>te.className?v.jsx("span",{className:te.className,children:te.text},`${me}:${te.text}`):v.jsx("span",{children:te.text},`${me}:${te.text}`))})]})});function j3({className:i="",onRendered:e=null,renderKey:n=null,scene:a,sourceHash:l}){const c=j.useRef(null),u=j.useRef(e);return u.current=e,j.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>Q3(f,a,l),p=h();u.current?.({count:a.primitives.length,detail:`${a.primitives.length.toLocaleString()} drawing instructions rendered by Canvas`,kind:"canvas-primitive-render",label:"Canvas primitive draw",payload:p,unit:"primitives"});const g=new ResizeObserver(h);g.observe(f);const b=new MutationObserver(h);return b.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{g.disconnect(),b.disconnect()}},[n,a,l]),j.createElement("canvas",{className:`rasa-scene-canvas ${i}`.trim(),ref:c})}function N3({className:i="",image:e,onRendered:n=null,renderKey:a=null,sourceHash:l}){const c=j.useRef(null),u=j.useRef(n);return u.current=n,j.useEffect(()=>{const f=c.current;if(!f)return;const h=()=>X3(f,e,l),p=h();u.current?.({count:e.pixels.byteLength,detail:`${e.pixels.byteLength.toLocaleString()} RGBA bytes uploaded with ImageData`,kind:"canvas-image-data-upload",label:"Canvas pixel upload",payload:p,unit:"bytes"});const g=new ResizeObserver(h);return g.observe(f),()=>g.disconnect()},[e,a,l]),j.createElement("canvas",{className:`rasa-grid-canvas ${i}`.trim(),ref:c})}function D3({empty:i=null,events:e,onSectionPlay:n=null,playbackOffsetSeconds:a=0,playbackStartedAtMs:l=null,playing:c=!1,sections:u=[]}){return e.length===0?i:j.createElement(z3,{events:e,onSectionPlay:n,playbackOffsetSeconds:a,playbackStartedAtMs:l,playing:c,sections:u})}function z3({events:i,onSectionPlay:e,playbackOffsetSeconds:n,playbackStartedAtMs:a,playing:l,sections:c}){const u=j.useRef(null),f=j.useRef(null),[h,p]=j.useState(0),g=B3(i,c);j.useEffect(()=>{const S=u.current;if(!S)return;const k=()=>L3(S,g);k();const A=new ResizeObserver(k);A.observe(S);const M=new MutationObserver(k);return M.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{A.disconnect(),M.disconnect()}},[i,c]),j.useEffect(()=>{f.current&&(f.current.scrollLeft=0),p(0)},[i]);const b=l&&a!==null?{"--timeline-duration":`${Math.max(.1,g.maxTime-n)}s`,"--timeline-delay":`${(a-V3())/1e3}s`,"--timeline-start":`${n/g.maxTime*100}%`}:null,x=q3(g,f.current,h);return j.createElement("section",{"aria-label":`${i.length.toLocaleString()} exact Rasa-scheduled events across ${g.tracks.length} tracks`,className:"sequencer score-sequencer","data-playing":!!b,style:{"--score-track-count":g.tracks.length}},j.createElement("aside",{className:"score-track-labels"},j.createElement("span",{className:"score-corner"},"Tracks"),...g.tracks.map(([S,k])=>j.createElement("span",{className:"score-track-label",key:S},j.createElement("strong",null,S),j.createElement("small",null,`${k.length.toLocaleString()} notes`)))),j.createElement("div",{className:"score-scroll",onScroll:S=>p(S.currentTarget.scrollLeft),ref:f},j.createElement("div",{className:"score-content",style:{width:`${g.timelineWidth}px`}},j.createElement("div",{className:"score-ruler"},j.createElement("span",{className:"score-time-start"},"0:00"),...g.sections.map(S=>j.createElement("span",{className:"score-section-label",key:`${S.name}:${S.time}`,style:{left:`${S.time/g.maxTime*100}%`}},S.name)),j.createElement("span",{className:"score-time-end"},H3(g.maxTime))),j.createElement("div",{className:"score-canvas-slot"},j.createElement("canvas",{className:"music-score-canvas",ref:u,role:"img",title:"Exact Rasa-generated note events arranged by section, track, time, and pitch"})),b?j.createElement("span",{"aria-hidden":"true",className:"score-playhead-rail"},j.createElement("span",{className:"timeline-playhead",key:`playhead:${a}`,style:b})):null)),g.sections.length>0?j.createElement("nav",{"aria-label":"Score sections",className:"score-section-nav"},...g.sections.map(S=>j.createElement("button",{"aria-pressed":S.name===x,key:`${S.name}:navigate`,onClick:()=>{U3(f.current,g,S),e?.(S)},style:{flexGrow:Math.max(1,S.duration)},title:e?`Play from ${S.name}`:`Show ${S.name}`,type:"button"},S.name))):null)}function B3(i,e=[]){const n=$3(i),a=Math.max(1,...i.map(c=>Number(c.time||0)+Number(c.duration||0))),l=e.map(c=>({name:String(c?.name||"section"),time:Number(c?.time||0),duration:Number(c?.durationSeconds||0)}));return{events:i,maxTime:a,sections:l,timelineWidth:Math.max(780,Math.ceil(a*8)),tracks:n}}function L3(i,e){const n=i.getBoundingClientRect();if(n.width<=0||n.height<=0)return;const a=Math.max(1,globalThis.devicePixelRatio||1);i.width=Math.round(n.width*a),i.height=Math.round(n.height*a);const l=i.getContext("2d");l.setTransform(a,0,0,a,0,0);const c=getComputedStyle(i),u=c.getPropertyValue("--rasa-panel").trim()||"#0b0e12",f=c.getPropertyValue("--rasa-line").trim()||"#27303a",h=n.width,p=n.height,g=p/e.tracks.length;l.fillStyle=u,l.fillRect(0,0,h,p),e.sections.forEach((b,x)=>{const S=b.time/e.maxTime*h,k=b.duration/e.maxTime*h;l.fillStyle=x%2===0?"rgba(246, 211, 101, 0.035)":"rgba(120, 214, 255, 0.025)",l.fillRect(S,0,k,p),l.fillStyle=f,l.fillRect(Math.round(S),0,1,p)}),e.tracks.forEach(([b,x],S)=>{const k=S*g;l.fillStyle=f,l.fillRect(0,Math.round(k),h,1);const A=x.map(U=>Number(U.pitch)).filter(Number.isFinite),M=A.length?Math.min(...A):0,_=A.length?Math.max(...A):0;for(const U of x){const K=Number(U.time||0)/e.maxTime*h,$=Math.max(1.5,Number(U.duration||.05)/e.maxTime*h),B=Number(U.pitch),W=Number.isFinite(B)&&_!==M?(B-M)/(_-M):_3(U.pitch),X=k+g-10-W*Math.max(8,g-20);l.globalAlpha=.82,l.fillStyle=U.color||"#f6d365",l.fillRect(K,X,$,Math.max(2,Math.min(5,g*.08)))}l.globalAlpha=1})}function _3(i){return{kick:.12,snare:.48,"tom-low":.32,"tom-high":.64,hihat:.84,rim:.62,shaker:.72,tick:.92}[String(i)]??.5}function H3(i){const e=Math.max(0,Math.round(i));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function q3(i,e,n){if(!i.sections.length)return null;const a=e?.scrollWidth||i.timelineWidth,l=e?.clientWidth||0,c=(n+l/2)/a*i.maxTime;let u=i.sections[0].name;for(const f of i.sections)f.time<=c&&(u=f.name);return u}function U3(i,e,n){if(!i)return;const a=n.time/e.maxTime*i.scrollWidth;i.scrollTo({behavior:"smooth",left:Math.min(a,i.scrollWidth-i.clientWidth)})}function V3(){return globalThis.performance?.now?.()??Date.now()}function G3(i,{display:e,parity:n,packedOutputs:a=[]}){if(e?.kind!=="value")return e;const l=n?.value;if(i==="music"&&kt(ke(l,"status"))==="scheduled"){const f=pc(ke(l,"events"));return{kind:"value",text:["{:status :scheduled",` :boundary ${kt(ke(l,"boundary"))||"ordinary-values"}`,` :tracks ${ln(ke(l,"tracks"))}`,` :notes ${ln(ke(l,"notes"))}`,` :events [${f.length} scheduled provider events]`,` :loaded-from ${JSON.stringify(kt(ke(l,"loadedFrom"))||"provider")}`,` :trace-count ${ln(ke(l,"traceCount"))}}`].join(`
`)}}if(i!=="visuals")return e;const c=kt(ke(l,"kind"));if(c==="rasa.demo/vector-scene"){const f=pc(ke(l,"primitives"));return{kind:"value",text:["{:kind :rasa.demo/vector-scene",` :title ${JSON.stringify(kt(ke(l,"title"))||"Vector scene")}`,` :width ${ln(ke(l,"width"))}`,` :height ${ln(ke(l,"height"))}`,` :primitive-count ${f.length}`,` :boundary ${kt(ke(l,"boundary"))||"ordinary-values"}`,` :renderer ${kt(ke(l,"renderer"))||"canvas-vector-primitives"}}`].join(`
`)}}if(c!=="rasa.demo/packed-rgba-proof")return e;const u=ln(ke(l,"byte-length"));return{kind:"value",text:["{:kind :rasa.demo/packed-rgba-proof",` :title ${JSON.stringify(kt(ke(l,"title"))||"Packed image")}`,` :callable ${JSON.stringify(kt(ke(l,"callable"))||"missing")}`,` :width ${ln(ke(l,"width"))}`,` :height ${ln(ke(l,"height"))}`,` :byte-length ${u}`,` :packed-output [${u} bytes captured from optimizer memory]`,` :latest-run-packed-outputs ${a.length}`,` :session-optimizer {:executed ${n?.optimizer?.executed??0}}}`].join(`
`)}}function Gh(i){if(i?.status!=="ok")return{status:"idle",message:"No successful Rasa run."};const e=i.parity?.value;if(!e)return{status:"missing-value",message:"Rasa did not return a structured value."};const n=kt(ke(e,"kind"));if(n==="rasa.demo/vector-scene")return Y3(i);if(n==="rasa.demo/packed-rgba-proof"){const a=K3(i);return a.status==="ok"?{status:"ok",type:"packed",image:a}:a}return{status:"wrong-kind",message:`Expected :rasa.demo/vector-scene or :rasa.demo/packed-rgba-proof from Rasa, got ${n||"no :kind"}.`}}function db(i){let e=2166136261;const n=String(i||"");for(let a=0;a<n.length;a+=1)e^=n.charCodeAt(a),e=Math.imul(e,16777619);return e>>>0}function $3(i){const e=new Map;for(const n of i){const a=String(n.track||"track");e.has(a)||e.set(a,[]),e.get(a).push(n)}return[...e.entries()]}function Y3(i){const e=i.parity?.value,n=ln(ke(e,"width")),a=ln(ke(e,"height")),l=pc(ke(e,"primitives")).map(gc).filter(Boolean);return!n||!a?{status:"missing-size",message:"Rasa returned a vector scene without numeric width and height."}:l.length===0?{status:"missing-primitives",message:"Rasa returned a vector scene without drawable primitives."}:{status:"ok",type:"scene",scene:{kind:kt(ke(e,"kind")),title:kt(ke(e,"title")),background:kt(ke(e,"background")),renderer:kt(ke(e,"renderer")),boundary:kt(ke(e,"boundary")),metrics:gc(ke(e,"metrics"))||{},width:n,height:a,primitives:l}}}function K3(i){const e=Number(i.parity?.optimizer?.executed||0)>0||["wasmgc-whole-entry","wasmgc-callable-region"].includes(i.parity?.execution?.artifact);if(!e)return{status:"missing-wmp",message:"The visual source returned without executing a browser WMP-2 packed optimizer region."};const n=i.parity?.value,a=ln(ke(n,"width")),l=ln(ke(n,"height")),c=ln(ke(n,"byte-length")),u=kt(ke(n,"callable"));if(!u)return{status:"missing-callable",message:"Rasa returned the packed image marker without naming its packed callable."};const f=W3(i,u);if(f?.status==="error")return f;const h=f?.bytes||null,p=a*l*4;return!a||!l||!c||!h?.byteLength?{status:"missing-pixels",message:"Rasa returned the packed image marker but no optimizer byte output was captured."}:c!==p||h.byteLength!==p?{status:"wrong-size",message:`Packed RGBA byte length mismatch: expected ${p}, report says ${c}, optimizer returned ${h.byteLength}.`}:{status:"ok",title:kt(ke(n,"title")),callable:u,pixelOrigin:kt(ke(n,"pixel-origin")),width:a,height:l,byteLength:c,pixels:h,optimizerExecuted:e}}function W3(i,e){const n=Array.isArray(i?.packedOutputs)?i.packedOutputs:[],a=n.filter(l=>l?.symbol===e);return a.length!==1?{status:"error",message:`Packed output mismatch for ${e}: expected exactly one matching optimizer output, saw ${a.length} matching output(s) out of ${n.length}.`}:a[0]}function X3(i,e,n){if(!e?.pixels?.byteLength)return null;i.width=e.width,i.height=e.height;const a=i.getContext("2d"),l=new Uint8ClampedArray(e.pixels);return a.imageSmoothingEnabled=!1,a.putImageData(new ImageData(l,e.width,e.height),0,0),i.dataset.sourceHash=String(n),i.dataset.pixelOrigin=e.pixelOrigin||"wmp-2-packed-loop",i.dataset.optimizerExecuted=String(e.optimizerExecuted),l}function Q3(i,e,n){const a=i.getBoundingClientRect(),l=Math.max(320,Math.floor(a.width)),c=Math.max(240,Math.floor(a.height)),u=Math.min(window.devicePixelRatio||1,2);i.width=Math.floor(l*u),i.height=Math.floor(c*u);const f=i.getContext("2d");f.setTransform(u,0,0,u,0,0),f.clearRect(0,0,l,c),f.fillStyle=e.background||"#05070a",f.fillRect(0,0,l,c);const h=Math.max(1,Number(e.width||l)),p=Math.max(1,Number(e.height||c)),g=Math.min(l/h,c/p);f.save(),f.translate((l-h*g)/2,(c-p*g)/2),f.scale(g,g);for(const b of e.primitives)F3(f,b);return f.restore(),i.dataset.sourceHash=String(n),i.dataset.sceneKind=e.kind||"rasa.demo/vector-scene",i.dataset.primitiveCount=String(e.primitives.length),i.dataset.boundary="ordinary-values",e}function F3(i,e){const n=String(e.shape||"");i.save(),i.globalAlpha=Z3(e.alpha),n==="rect"?(e.fill&&(i.fillStyle=e.fill,i.fillRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0))),e.stroke&&(i.strokeStyle=e.stroke,i.lineWidth=1,i.strokeRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0)))):n==="line"?(i.strokeStyle=e.stroke||e.fill||"#e8edf2",i.lineWidth=Number(e["line-width"]||e.lineWidth||1),i.lineCap="round",i.beginPath(),i.moveTo(Number(e.x1||0),Number(e.y1||0)),i.lineTo(Number(e.x2||0),Number(e.y2||0)),i.stroke()):n==="circle"&&(i.beginPath(),i.arc(Number(e.x||0),Number(e.y||0),Number(e.r||0),0,Math.PI*2),e.fill&&(i.fillStyle=e.fill,i.fill()),e.stroke&&(i.strokeStyle=e.stroke,i.lineWidth=1,i.stroke())),i.restore()}function Z3(i){const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):1}function ke(i,e){return!i||i.kind!=="map"?null:i.entries.find(n=>E1(n.key)===e)?.value||null}function kt(i){return i?i.kind==="string"?i.value:i.kind==="keyword"?i.name:i.kind==="symbol"?i.raw:i.kind==="number"?String(i.value):"":""}function ln(i){return i?.kind==="number"?Number(i.value):null}function pc(i){return i?.kind==="vector"||i?.kind==="list"?Array.isArray(i.items)?i.items:[]:[]}function gc(i){return i?i.kind==="number"?Number(i.value):i.kind==="string"?i.value:i.kind==="keyword"?i.name:i.kind==="symbol"?i.raw:i.kind==="boolean"||i.kind==="bool"?!!i.value:i.kind==="nil"?null:i.kind==="vector"||i.kind==="list"?pc(i).map(gc):i.kind==="map"?Object.fromEntries((i.entries||[]).map(e=>[E1(e.key),gc(e.value)])):null:null}function E1(i){return i?.kind==="keyword"?i.name:i?.kind==="string"?i.value:i?.kind==="symbol"?i.raw:""}const P3=`(ns rasa.array)

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
`,J3=`(ns rasa.core)

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

(defn nat-int?
  "Returns true when x is a non-negative integer."
  [x]
  (if (integer? x) (not (neg? x)) false))

(defn seqable?
  "Returns true when x can produce a sequence."
  [x]
  (if (nil? x) true (if (string? x) true (coll? x))))

(defn associative?
  "Returns true when x supports key association."
  [x]
  (if (map? x) true (vector? x)))

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

(defn every-pred
  "Returns a function that is true when every predicate is truthy for every supplied argument."
  [pred & preds]
  (let [all-preds (cons pred preds)]
    (fn [& args]
      (every? (fn [next-pred] (every? next-pred args)) all-preds))))

(defn some-fn
  "Returns a function yielding the first truthy result from applying each predicate to the supplied arguments."
  [pred & preds]
  (let [all-preds (cons pred preds)]
    (fn [& args]
      (some (fn [next-pred] (some next-pred args)) all-preds))))

(defn run!
  "Invokes proc on every item in coll for its effects and returns nil."
  [proc coll]
  (reduce (fn [_ item] (proc item)) nil coll)
  nil)

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

(defn trampoline
  "Calls f and repeatedly calls returned functions with no arguments until a non-function value is produced."
  ([f]
   (loop [ret (f)]
     (if (fn? ret)
       (recur (ret))
       ret)))
  ([f & args]
   (trampoline (fn [] (apply f args)))))

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

(defn distinct?
  "Returns true when no two supplied values are equal."
  ([x] true)
  ([x y] (not= x y))
  ([x y & more]
   (if (not= x y)
     (loop [seen #{x y}
            items (seq more)]
       (if items
         (let [value (first items)]
           (if (contains? seen value)
             false
             (recur (conj seen value) (next items))))
         true))
     false)))

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

(defn update-keys
  "Returns an associative value whose keys are the results of applying f to the keys of m."
  [m f]
  (if (vector? m)
    (loop [i 0
           ret {}]
      (if (< i (count m))
        (recur (inc i) (assoc ret (f i) (nth m i)))
        ret))
    (reduce
      (fn [ret entry]
        (assoc ret (f (first entry)) (second entry)))
      {}
      m)))

(defn update-vals
  "Returns an associative value whose values are the results of applying f to the values of m."
  [m f]
  (if (vector? m)
    (loop [i 0
           ret (empty m)]
      (if (< i (count m))
        (recur (inc i) (assoc ret i (f (nth m i))))
        ret))
    (reduce
      (fn [ret entry]
        (assoc ret (first entry) (f (second entry))))
      {}
      m)))

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
`,I3=`(ns demo.music.notation)

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
`,eR=`(ns demo.music.score)

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
`,tR=`{:schema :rasa.package/v1
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
`,nR=`const DEFAULT_TONE_CDN = "https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm";

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
`,iR=`(ns demo.visuals.botanical-glasshouse)

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
`,sR=`(ns demo.visuals.recursive-city)

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
`,aR=`(ns demo.music.glass-clockwork
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
`,rR=`(ns demo.music.emberlight-suite
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
`,lR=`(ns demo.music.polyrhythm-workshop
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
`,oR=`(ns demo.visuals.packed-oil-current
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
`,cR=`(ns demo.visuals.packed-signal-cathedral
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
`,uR=`import { createElement as h, useEffect, useRef, useState } from "react";

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
    ["wasmgc-whole-entry", "wasmgc-callable-region"].includes(runState.parity?.execution?.artifact);
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
`,bs=Pi("rasa-core","rasa/core.ras","Rasa standard library",J3,"rasa","library"),hb=Pi("rasa-array","rasa/array.ras","Rasa packed-array library",P3,"rasa","library"),mb=Pi("music-notation","demo/music/notation.ras","Rasa music notation library",I3,"rasa","library"),fR=Pi("music-score","demo/music/score.ras","Rasa score engine",eR,"rasa","library"),kd=Pi("tone-package","demo.tone-js/package.ras","Capability package",tR,"rasa","package"),Ad=Pi("tone-provider","tone-provider.js","Browser capability adapter",nR,"javascript","boundary"),vs=Pi("canvas-renderer","demo-surface/index.js","Browser result renderer",uR,"javascript","boundary"),Dn=Object.freeze([xs({id:"botanical",title:"Botanical Glasshouse",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"green",category:"geometry",source:iR,files:[vs,bs]}),xs({id:"city",title:"Recursive City",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"blue",category:"geometry",source:sR,files:[vs,bs]}),xs({id:"algorithmic-orchestra",title:"Algorithmic Orchestra",family:"Generated score",mode:"music",boundary:"Rasa tick score · Tone transport",accent:"gold",category:"music",source:rR,files:[fR,kd,Ad,vs,bs]}),xs({id:"polyrhythm",title:"Polyrhythm Workshop",family:"Music composition",mode:"music",boundary:"Rasa score · Tone capability",accent:"red",category:"music",source:lR,files:[mb,kd,Ad,vs,bs]}),xs({id:"clockwork",title:"Glass Clockwork",family:"Music composition",mode:"music",boundary:"Tone capability",accent:"gold",category:"music",source:aR,files:[mb,kd,Ad,vs,bs]}),xs({id:"oil-current",title:"Chromatic Oil Current",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"red",category:"pixels",source:oR,files:[hb,vs,bs]}),xs({id:"signal-cathedral",title:"Signal Cathedral",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"violet",category:"pixels",source:cR,files:[hb,vs,bs]})]),pb=Object.freeze([Object.freeze({id:"geometry",label:"Geometry",description:"Rasa scene values",count:Td("geometry")}),Object.freeze({id:"pixels",label:"Packed pixels",description:"WMP-2 image data",count:Td("pixels")}),Object.freeze({id:"music",label:"Music",description:"Tone.js capability",count:Td("music")})]);function dR(i,e){return[Pi("main",`${i.id}.ras`,"Example program",e,"rasa","example",!0),...i.files]}function xs(i){return Object.freeze({...i,files:Object.freeze(i.files)})}function Pi(i,e,n,a,l,c,u=!1){return Object.freeze({id:i,name:e,label:n,content:a,language:l,role:c,editable:u,lines:hR(a)})}function hR(i){return String(i||"").split(`
`).length}function Td(i){return Dn.filter(e=>e.category===i).length}const mR=Object.freeze({id:"raw",label:"Records",description:"Canonical structured report records"}),$h=Object.freeze([Object.freeze({id:"pipeline",label:"Pipeline",description:"Phase status and produced evidence"}),Object.freeze({id:"decisions",label:"Decisions",description:"Planner and optimizer choices"}),Object.freeze({id:"diagnostics",label:"Diagnostics",description:"Source-linked warnings and refusals"}),Object.freeze({id:"movement",label:"Movement",description:"Runtime memory and boundary route"})]),pR=Object.freeze([...$h,mR]);function gR({context:i={},parity:e={},run:n={}}={}){const a=AR(e.phases),l=TR(e),c=Array.isArray(e.diagnostics)?e.diagnostics.map(OR):[],u=CR(e,i),f=bR(e.rawReport),h=a.filter(p=>p.status!=="not-requested").length;return{id:`${n.reportMode||"none"}:${n.elapsedMs||0}:${h}:${l.length}:${c.length}:${f.length}`,status:n.status||e.status||"idle",reportMode:n.reportMode||"none",elapsedMs:Number(n.elapsedMs||0),phases:a,decisions:l,diagnostics:c,movement:u,rawRecords:f,summary:{capturedPhases:h,totalPhases:a.length,decisions:l.length,diagnostics:c.length,optimizerExecutions:Number(e.optimizer?.executed||0),rawRecords:f.length}}}function yR(i=$h){const e=new Map(pR.map(n=>[n.id,n]));return i.map(n=>typeof n=="string"?e.get(n):{...e.get(n.id),...n}).filter(Boolean)}function bR(i){return!i||typeof i!="object"||Array.isArray(i)?[]:Object.entries(i).map(([e,n],a)=>({id:`raw:${e}:${a}`,path:e,label:vR(e),kind:xR(n),count:wR(n),countLabel:SR(n),searchText:`${e} ${dh(n)}`.toLowerCase(),span:R1(n),value:n}))}function vR(i){return String(i).replace(/^rasa\./,"").replace(/[./_-]+/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function xR(i){return i===null?"nil":Array.isArray(i)?"vector":typeof i!="object"?typeof i:se(i.type||i.kind,"record")}function wR(i){return Array.isArray(i)?i.length:!i||typeof i!="object"?null:Array.isArray(i.items)?i.items.length:Array.isArray(i.entries)?i.entries.length:!i.type&&!i.kind?Object.keys(i).length:null}function SR(i){if(Array.isArray(i))return"items";if(!i||typeof i!="object")return null;const e=se(i.type||i.kind);return["vector","list","set"].includes(e)?"items":e==="map"||!i.type&&!i.kind?"fields":null}function dh(i,e=6e3,n=new Set){return e<=0||i==null?"":typeof i!="object"?String(i).slice(0,e):n.has(i)?"":(n.add(i),Array.isArray(i)?i.map(a=>dh(a,Math.floor(e/Math.max(i.length,1)),n)).join(" ").slice(0,e):Object.entries(i).map(([a,l])=>`${a} ${dh(l,Math.floor(e/Math.max(Object.keys(i).length,1)),n)}`).join(" ").slice(0,e))}function R1(i,e=new Set){if(!i||typeof i!="object"||e.has(i))return null;if(e.add(i),!Array.isArray(i)){const a=gb(i.start),l=gb(i.end),c=kR(i.sourceId??i["source-id"]??i.source);if(Number.isFinite(a)&&Number.isFinite(l)&&l>a)return{sourceId:c||null,start:a,end:l}}const n=Array.isArray(i)?i:Object.values(i);for(const a of n){const l=R1(a,e);if(l)return l}return null}function gb(i){const e=i&&typeof i=="object"?i.value:i,n=Number(e);return Number.isFinite(n)?n:NaN}function kR(i){return i==null?"":typeof i=="object"?se(i):String(i)}function AR(i){return Array.isArray(i)?i.map(e=>({...e,id:se(e.id,"unknown"),label:se(e.label,se(e.id,"Unknown phase")),status:se(e.status,"unknown"),detail:se(e.detail),metrics:e.metrics&&typeof e.metrics=="object"?Object.fromEntries(Object.entries(e.metrics).map(([n,a])=>[n,jR(a)])):{}})):[]}function TR(i){const e=i.plan||{},n=[...e.decisions||[],...e.candidates||[],...e.rejected||[],...e.fallbacks||[]].map((l,c)=>ER(l,c)),a=i.optimizer;if(a){n.unshift({id:"optimizer:summary",type:"optimizer",category:a.executed>0?"admitted":a.fallbacks?.length?"fallback":"observed",title:a.executed>0?`${a.executed} optimized region executions`:"Optimizer observation",status:a.enabled?"enabled":"disabled",reason:`${a.probes||0} probes · ${a.admitted||0} admitted · ${a.missed||0} missed`,lane:i.execution?.tier||null});for(const[l,c]of(a.fallbacks||[]).entries())n.push({id:`optimizer:fallback:${l}`,type:"fallback",category:"fallback",title:se(c.symbol,"Optimizer fallback"),status:se(c.fallback,"fallback"),reason:se(c.reason,"No reason reported"),lane:se(i.execution?.tier)||null})}return n}function ER(i,e){const n={...i,type:se(i?.type,"record"),lane:se(i?.lane)||null,memoryPath:se(i?.memoryPath??i?.["memory-path"])||null,wmp:se(i?.wmp)||null,status:se(i?.status)||null,decision:se(i?.decision)||null,candidate:se(i?.candidate)||null,family:se(i?.family)||null,evidence:se(i?.evidence)||null,reason:se(i?.reason??i?.message)||null};return{...n,id:`${n.type}:${e}`,category:RR(n),title:MR(n)}}function RR(i){const e=`${i.type||""} ${i.status||""} ${i.decision||""}`;return/reject|refus/.test(e)?"rejected":/fallback/.test(e)?"fallback":/admit|execut|selected|ok/.test(e)?"admitted":"observed"}function MR(i){return se(i.candidate||i.decision||i.family||i.lane||i.type,"Plan record")}function CR(i,e){const n=i.runtime||{};return{steps:(Array.isArray(e.movementSteps)?e.movementSteps:[]).map((l,c)=>({...l,id:se(l.id,`movement:${c}`),owner:se(l.owner)||null,label:se(l.label,`Step ${c+1}`),detail:se(l.detail)})),runtime:[si("Semantic lane",i.execution?.semanticLane),si("Runtime implementation",n.implementation),si("Optimized lane",i.execution?.optimizedLane),si("Host",i.execution?.host),si("Artifact",i.execution?.artifact),si("Memory path",n.memoryPath),si("Collection implementation",n.collectionImpl),si("Session",n.sessionMode),si("Host imports",n.hostImports?"enabled":"not used")].filter(l=>l.value)}}function si(i,e){return{label:i,value:e==null?null:se(e)}}function OR(i){return{...i,phase:se(i?.phase)||null,severity:se(i?.severity,"info"),code:se(i?.code)||null,kind:se(i?.kind)||null,message:se(i?.message,"Diagnostic record"),detail:se(i?.detail)||null}}function jR(i){return i==null||typeof i=="string"||typeof i=="number"||typeof i=="boolean"?i:se(i)}function se(i,e=""){if(i==null)return e;if(typeof i=="string")return i;if(typeof i=="number"||typeof i=="bigint"||typeof i=="boolean")return String(i);if(Array.isArray(i))return i.map(n=>se(n)).filter(Boolean).join(", ")||e;if(typeof i=="object"){const n=i.kind||i.type,a=[i.items,i.value,i.values].find(Array.isArray);if(i.name!=null)return String(i.name);if(["set","vector","list"].includes(n)&&a)return a.map(c=>se(c)).filter(Boolean).join(", ")||e;if(n==="map"&&Array.isArray(i.entries))return i.entries.map(({key:c,value:u})=>`${se(c,"field")}: ${se(u,"structured value")}`).join(", ")||e;if(i.raw!=null&&["symbol","char"].includes(n))return String(i.raw);if(i.value!=null&&["keyword","string","symbol","number","boolean"].includes(n))return se(i.value,e);if(i.label!=null)return se(i.label,e);const l=Object.entries(i).filter(([c])=>!["kind","type","raw"].includes(c));if(l.length)return l.map(([c,u])=>`${c}: ${se(u,"structured value")}`).join(", ")}return e||"structured value"}const NR={pipeline:jw,decisions:wb,diagnostics:Ir,movement:Iw,raw:ww},DR=()=>!0;function zR({canOpenSource:i=DR,initialLens:e="pipeline",lenses:n=$h,model:a,onOpenSource:l=null,renderers:c={}}){const u=j.useMemo(()=>yR(n),[n]),[f,h]=j.useState(e),p=j.useRef([]),g=j.useId();j.useEffect(()=>{u.some(k=>k.id===f)||h(u[0]?.id||"pipeline")},[f,u]);const b=k=>{const A=(k+u.length)%u.length;p.current[A]?.focus(),h(u[A].id)},x=(k,A)=>{const M=k.key==="ArrowRight"||k.key==="ArrowDown"?A+1:k.key==="ArrowLeft"||k.key==="ArrowUp"?A-1:k.key==="Home"?0:k.key==="End"?u.length-1:null;M!==null&&(k.preventDefault(),b(M))},S=c[f];return v.jsxs("section",{className:"report-explorer","aria-label":"Rasa report explorer",children:[v.jsx(BR,{model:a}),v.jsx("nav",{className:"report-lenses","aria-label":"Report lenses",role:"tablist",children:u.map((k,A)=>{const M=NR[k.id]||xb;return v.jsxs("button",{"aria-controls":`${g}-panel`,"aria-selected":f===k.id,id:`${g}-${k.id}`,onKeyDown:_=>x(_,A),onClick:()=>h(k.id),ref:_=>{p.current[A]=_},role:"tab",tabIndex:f===k.id?0:-1,title:k.description,type:"button",children:[v.jsx(M,{size:15}),v.jsx("span",{children:k.label}),v.jsx("small",{children:JR(k.id,a)})]},k.id)})}),v.jsx("div",{"aria-labelledby":`${g}-${f}`,className:"report-lens-panel",id:`${g}-panel`,role:"tabpanel",children:v.jsx(LR,{children:S?S({canOpenSource:i,model:a,onOpenSource:l}):f==="pipeline"?v.jsx(HR,{model:a,onNavigate:h}):f==="decisions"?v.jsx(GR,{model:a}):f==="diagnostics"?v.jsx(YR,{canOpenSource:i,model:a,onOpenSource:l}):f==="movement"?v.jsx(KR,{model:a}):v.jsx(WR,{canOpenSource:i,model:a,onOpenSource:l})},`${a.id}:${f}`)})]})}function BR({model:i}){return v.jsxs("div",{className:"report-summary","aria-label":"Run summary",children:[v.jsx(Ra,{label:"Run",value:i.status}),v.jsx(Ra,{label:"Elapsed",value:i.elapsedMs?`${i.elapsedMs.toFixed(1)} ms`:"not measured"}),v.jsx(Ra,{label:"Phases",value:`${i.summary.capturedPhases}/${i.summary.totalPhases}`}),v.jsx(Ra,{label:"Decisions",value:i.summary.decisions})]})}function Ra({label:i,value:e}){return v.jsxs("div",{children:[v.jsx("span",{children:se(i)}),v.jsx("strong",{children:se(e,"not reported")})]})}class LR extends j.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?v.jsx(Fi,{title:"This report lens could not be displayed",detail:"The other compiler report lenses remain available."}):this.props.children}}const _R={reader:"Turns source bytes into forms and source spans.",expand:"Normalizes macro and language forms before semantic analysis.",analysis:"Resolves bindings, calls, and source-level meaning.",ir:"Builds backend-neutral executable structure.",facts:"Records proven types, contracts, effects, and representation evidence.",checks:"Applies static contracts before representation planning.",plan:"Chooses execution lanes, representations, and fallback behavior.",eval:"Executes the admitted program and returns its value."};function HR({model:i,onNavigate:e}){const n=i.phases.find(u=>u.status!=="not-requested")?.id||i.phases[0]?.id,[a,l]=j.useState(n);j.useEffect(()=>l(n),[n,i.id]);const c=i.phases.find(u=>u.id===a)||i.phases[0];return c?v.jsxs("div",{className:"pipeline-lens",children:[v.jsxs("div",{className:"compiler-pipeline",children:[v.jsx("nav",{className:"phase-rail","aria-label":"Compiler phase route",children:i.phases.map((u,f)=>v.jsxs("button",{"aria-pressed":u.id===c.id,"data-status":u.status,onClick:()=>l(u.id),type:"button",children:[v.jsx("span",{className:"phase-index",children:String(f+1).padStart(2,"0")}),v.jsx("i",{}),v.jsx("span",{className:"phase-name",children:u.label}),v.jsx("small",{children:u.detail})]},u.id))}),v.jsx(qR,{model:i,onNavigate:e,phase:c})]}),i.reportMode!=="all"?v.jsx(PR,{title:"Compact report captured",detail:"Enable the detailed report and run again to inspect every compiler phase."}):null]}):v.jsx(Fi,{title:"No phase records",detail:"This run did not return a phase projection."})}function qR({model:i,onNavigate:e,phase:n}){const a=UR(n),l=n.id==="plan"?"decisions":n.diagnostics?"diagnostics":n.id==="eval"?"movement":null;return v.jsxs("article",{className:"phase-detail",children:[v.jsxs("header",{children:[v.jsxs("div",{children:[v.jsx("span",{children:"Compiler phase"}),v.jsx("h3",{children:n.label})]}),v.jsx("em",{"data-status":n.status,children:n.status})]}),v.jsx("p",{className:"phase-description",children:_R[n.id]}),v.jsx("div",{className:"phase-metrics",children:a.map(c=>v.jsx(Ra,{label:c.label,value:c.value},c.label))}),v.jsxs("div",{className:"phase-report-depth",children:[v.jsx("span",{children:"Report depth"}),v.jsx("strong",{children:VR(n)})]}),l?v.jsxs("button",{className:"phase-follow",onClick:()=>e(l),type:"button",children:[v.jsx("span",{children:n.id==="plan"?`${i.summary.decisions} decision records`:n.id==="eval"?"Inspect value movement":`${i.summary.diagnostics} diagnostic records`}),v.jsx(ph,{size:14})]}):null]})}function UR(i){const e=i.metrics||{};return i.status==="not-requested"?[{label:"Capture",value:"not requested"}]:i.id==="facts"?[{label:"Facts",value:e.facts??0},{label:"Declared",value:e.declaredFacts??0},{label:"Metadata contracts",value:e.metadataContracts??0},{label:"Mode",value:e.mode||"unknown"}]:i.id==="plan"?[{label:"Lanes",value:e.lanes??0},{label:"Candidates",value:e.candidates??0},{label:"Rejected",value:e.rejected??0},{label:"Fallbacks",value:e.fallbacks??0}]:i.id==="checks"?[{label:"Checks",value:e.checks??0},{label:"Action",value:e.action||"none"},{label:"Diagnostics",value:e.diagnostics??0}]:[{label:"Status",value:i.status},{label:"Diagnostics",value:e.diagnostics??0}]}function VR(i){return i.status==="not-requested"?"This phase was not captured in the current report.":i.id==="facts"?"Fact totals and contract counts are available; individual fact records are not linked in this runtime projection.":i.id==="plan"?"Lane, decision, candidate, rejection, fallback, and optimizer records are available for exploration.":i.id==="checks"?"Check totals, action, and diagnostics are available.":i.id==="eval"?"Evaluation status, returned value, diagnostics, and runtime movement are available through related lenses.":"The current runtime report exposes phase status and diagnostic count."}function GR({model:i}){const e=["all","admitted","rejected","fallback"],[n,a]=j.useState("all"),[l,c]=j.useState("groups"),[u,f]=j.useState(""),[h,p]=j.useState(60),[g,b]=j.useState(null);j.useEffect(()=>{a("all"),c("groups"),f(""),p(60),b(null)},[i.id]);const x=j.useMemo(()=>i.decisions.filter(M=>{if(n!=="all"&&M.category!==n)return!1;const _=`${M.type} ${M.title} ${M.reason||""} ${M.lane||""}`.toLowerCase();return!u||_.includes(u.toLowerCase())}),[n,i.decisions,u]),S=j.useMemo(()=>l==="groups"?$R(x):x,[x,l]),k=l==="records"?S.slice(0,h):S,A=S.find(M=>M.id===g)||S[0];return i.decisions.length===0?v.jsx(Fi,{title:"No decisions captured",detail:"A detailed report can expose planner and optimizer records when this program produces them."}):v.jsxs("div",{className:"decisions-lens",children:[v.jsxs("div",{className:"report-filters","aria-label":"Decision filters",children:[v.jsx("div",{children:e.map(M=>v.jsx("button",{"aria-pressed":n===M,onClick:()=>{a(M),b(null)},type:"button",children:M},M))}),v.jsxs("label",{className:"decision-search",children:[v.jsx(Sb,{size:13}),v.jsx("input",{"aria-label":"Search decisions",onChange:M=>{f(M.target.value),b(null)},placeholder:"Search evidence",type:"search",value:u})]}),v.jsxs("div",{className:"decision-mode","aria-label":"Decision density",children:[v.jsx("button",{"aria-pressed":l==="groups",onClick:()=>{c("groups"),b(null)},type:"button",children:"Grouped"}),v.jsx("button",{"aria-pressed":l==="records",onClick:()=>{c("records"),b(null)},type:"button",children:"Records"})]})]}),v.jsxs("div",{className:"report-record-layout",children:[v.jsxs("div",{className:"report-record-list",children:[v.jsxs("div",{className:"record-list-status",children:["Showing ",k.length.toLocaleString()," of ",S.length.toLocaleString()," ",l]}),k.map(M=>v.jsxs("button",{"aria-pressed":M.id===A?.id,"data-category":M.category,onClick:()=>b(M.id),type:"button",children:[v.jsxs("span",{className:"decision-context",children:[v.jsx("i",{children:se(M.type,"record")}),v.jsx("b",{children:se(M.lane,"lane not reported")})]}),v.jsxs("strong",{children:[se(M.title,"Plan record"),M.count>1?v.jsx("em",{children:M.count}):null]}),v.jsx("small",{children:se(M.reason||M.status,"Structured plan record")})]},M.id)),l==="records"&&k.length<S.length?v.jsx("button",{className:"load-more-records",onClick:()=>p(M=>M+60),type:"button",children:"Show 60 more"}):null,S.length===0?v.jsx(Fi,{title:"No matching decisions",detail:`No ${n} records matched this view.`}):null]}),A?v.jsx(ZR,{eyebrow:A.type,title:A.title,status:A.status||A.category,detail:A.reason,values:IR(A)}):null]})]})}function $R(i){const e=new Map;for(const n of i){const a=[n.category,n.type,n.title,n.status,n.reason,n.lane].join("\0"),l=e.get(a);if(l){l.count+=1;continue}e.set(a,{...n,id:`group:${e.size}`,count:1})}return[...e.values()].sort((n,a)=>a.count-n.count||n.title.localeCompare(a.title))}function YR({canOpenSource:i,model:e,onOpenSource:n}){return e.diagnostics.length===0?v.jsx(Fi,{title:"No diagnostics",detail:"No warning, refusal, or failure record was captured for this run."}):v.jsx("div",{className:"diagnostic-list",children:e.diagnostics.map((a,l)=>v.jsxs("article",{"data-severity":a.severity,children:[v.jsxs("header",{children:[v.jsx("span",{children:a.phase||"runtime"}),v.jsx("strong",{children:a.code||a.kind||a.severity})]}),v.jsx("p",{children:a.message}),a.detail?v.jsx("small",{children:a.detail}):null,a.span&&n&&i(a.span)?v.jsxs("button",{onClick:()=>n(a.span),type:"button",children:["Open source ",a.span.start,"..",a.span.end]}):null]},`${a.code||a.kind}:${l}`))})}function KR({model:i}){return v.jsxs("div",{className:"movement-lens",children:[i.movement.steps.length?v.jsx("div",{className:"movement-route",children:i.movement.steps.map((e,n)=>v.jsxs(yc.Fragment,{children:[v.jsxs("div",{children:[v.jsx("span",{children:e.owner||`Step ${n+1}`}),v.jsx("strong",{children:e.label}),v.jsx("small",{children:e.detail})]}),n<i.movement.steps.length-1?v.jsx(ph,{"aria-hidden":"true",size:15}):null]},e.id))}):v.jsx(Fi,{title:"No boundary route",detail:"This consumer did not provide a domain-specific movement projection."}),v.jsx("div",{className:"runtime-facts",children:i.movement.runtime.map(e=>v.jsx(Ra,{label:e.label,value:e.value},e.label))})]})}function WR({canOpenSource:i,model:e,onOpenSource:n}){const[a,l]=j.useState(""),[c,u]=j.useState(null);j.useEffect(()=>{l(""),u(null)},[e.id]);const f=j.useMemo(()=>{const p=a.trim().toLowerCase();return p?e.rawRecords.filter(g=>g.searchText.includes(p)):e.rawRecords},[e.rawRecords,a]),h=f.find(p=>p.id===c)||f[0];return e.rawRecords.length===0?v.jsx(Fi,{title:"No structured records",detail:"This run did not retain a canonical structured report."}):v.jsxs("div",{className:"raw-records-lens",children:[v.jsxs("label",{className:"decision-search raw-record-search",children:[v.jsx(Sb,{size:13}),v.jsx("input",{"aria-label":"Search structured records",onChange:p=>{l(p.target.value),u(null)},placeholder:"Search fields and values",type:"search",value:a})]}),v.jsxs("div",{className:"raw-record-layout",children:[v.jsxs("div",{className:"raw-record-list",children:[v.jsxs("div",{className:"record-list-status",children:["Showing ",f.length," of ",e.rawRecords.length," sections"]}),f.map(p=>v.jsxs("button",{"aria-pressed":p.id===h?.id,onClick:()=>u(p.id),type:"button",children:[v.jsx("span",{children:p.path}),v.jsx("strong",{children:p.label}),v.jsxs("small",{children:[p.kind,p.count==null?"":` · ${p.count} ${p.countLabel||"items"}`]})]},p.id)),f.length===0?v.jsx(Fi,{title:"No matching records",detail:"Try a phase, diagnostic code, field, or value."}):null]}),h?v.jsxs("article",{className:"raw-record-detail",children:[v.jsxs("header",{children:[v.jsxs("div",{children:[v.jsx("span",{children:"Canonical report section"}),v.jsx("h3",{children:h.path})]}),h.span&&n&&i(h.span)?v.jsxs("button",{onClick:()=>n(h.span),type:"button",children:["Open source ",h.span.start,"..",h.span.end]}):null]}),v.jsx(M1,{depth:0,label:h.path,value:h.value})]}):null]})]})}function M1({depth:i,label:e,value:n}){const a=XR(n),[l,c]=j.useState(i===0);if(!a)return v.jsxs("div",{className:"raw-scalar",children:[v.jsx("span",{children:e}),v.jsx("code",{children:FR(n)})]});const u=QR(n);return v.jsxs("details",{className:"raw-value-node",onToggle:f=>c(f.currentTarget.open),open:l,children:[v.jsxs("summary",{children:[v.jsx("strong",{children:e}),v.jsxs("span",{children:[u," · ",a.length]})]}),l?v.jsx("div",{children:a.map(([f,h],p)=>v.jsx(M1,{depth:i+1,label:f,value:h},`${f}:${p}`))}):null]})}function XR(i){if(Array.isArray(i))return i.map((n,a)=>[String(a),n]);if(!i||typeof i!="object")return null;const e=i.type||i.kind;return["keyword","symbol","string","number","boolean","char","nil"].includes(e)?null:["vector","list","set"].includes(e)&&Array.isArray(i.items)?i.items.map((n,a)=>[String(a),n]):e==="map"&&Array.isArray(i.entries)?i.entries.map((n,a)=>Array.isArray(n)?[se(n[0],String(a)),n[1]]:[se(n.key,String(a)),n.value]):Object.entries(i).filter(([n])=>n!=="raw")}function QR(i){return Array.isArray(i)?"vector":!i||typeof i!="object"?typeof i:se(i.type||i.kind,"record")}function FR(i){if(i===null)return"nil";if(i&&typeof i=="object"){if(i.type==="keyword"||i.kind==="keyword")return`:${i.name??i.value??""}`;if(["symbol","char"].includes(i.type||i.kind))return String(i.name??i.raw??i.value??"");if(i.value!=null)return typeof i.value=="string"?JSON.stringify(i.value):String(i.value)}return typeof i=="string"?JSON.stringify(i):String(i)}function ZR({detail:i,eyebrow:e,status:n,title:a,values:l}){return v.jsxs("article",{className:"report-record-detail",children:[v.jsxs("header",{children:[v.jsx("span",{children:se(e)}),v.jsx("em",{"data-status":se(n),children:se(n)})]}),v.jsx("h3",{children:se(a,"Report record")}),i?v.jsx("p",{children:se(i)}):null,v.jsx("dl",{children:Object.entries(l||{}).filter(([,c])=>c!=null).map(([c,u])=>v.jsxs(yc.Fragment,{children:[v.jsx("dt",{children:eM(c)}),v.jsx("dd",{children:se(u)})]},c))})]})}function PR({detail:i,title:e}){return v.jsxs("div",{className:"report-notice",children:[v.jsx("strong",{children:e}),v.jsx("span",{children:i})]})}function Fi({detail:i,title:e}){return v.jsxs("div",{className:"report-empty",children:[v.jsx(xb,{size:20}),v.jsx("strong",{children:e}),v.jsx("span",{children:i})]})}function JR(i,e){return i==="pipeline"?e.summary.capturedPhases:i==="decisions"?e.summary.decisions:i==="diagnostics"?e.summary.diagnostics:i==="raw"?e.summary.rawRecords:e.movement.steps.length}function IR(i){return{lane:i.lane,memoryPath:i.memoryPath,wmp:i.wmp,family:i.family,evidence:i.evidence,decision:i.decision,occurrences:i.count}}function eM(i){return String(i).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," ")}function tM({events:i,example:e,fullReport:n,onClose:a,onFullReportChange:l,open:c,reportMode:u,runState:f}){const h=j.useMemo(()=>{const g=e.mode==="visuals"?Gh(f):null;return gR({context:{movementSteps:nM(e,g,i)},parity:f?.parity||{},run:{elapsedMs:f?.elapsedMs,reportMode:u,status:f?.status||"idle"}})},[i,e,u,f]);if(!c)return null;const p=n?u==="all"?"Full phases captured in this run":"Enabled; run again to capture every phase":"Compact evaluation only";return v.jsxs("aside",{className:"evidence-drawer","aria-label":"Rasa execution evidence",children:[v.jsxs("header",{children:[v.jsxs("div",{children:[v.jsx("span",{children:"Execution evidence"}),v.jsx("strong",{children:u==="all"?"Explore full report":u==="eval"?"Explore compact report":"No captured run"})]}),v.jsx("button",{"aria-label":"Close evidence",onClick:a,title:"Close evidence",type:"button",children:v.jsx(gh,{size:17})})]}),v.jsxs("section",{className:"evidence-capture",children:[v.jsxs("div",{children:[v.jsx("strong",{children:"Detailed compiler report"}),v.jsx("span",{children:p})]}),v.jsx("button",{"aria-checked":n,"aria-label":"Capture detailed compiler report",className:"report-switch",onClick:()=>l(!n),role:"switch",type:"button",children:v.jsx("i",{})})]}),v.jsx(zR,{model:h}),f?.status==="error"&&!h.diagnostics.length?v.jsx("pre",{className:"evidence-error",children:f.display?.text||f.error?.message}):null]})}function nM(i,e,n){return i.mode==="music"?[{id:"rasa-composition",owner:"Rasa",label:"Composition value",detail:`${n.length} scheduled note maps produced`},{id:"capability-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"tone-schedule",owner:"Tone.js",label:"Playback schedule",detail:"Tone.js owns transport timing and audio output"}]:e?.type==="packed"?[{id:"packed-region",owner:"Rasa",label:"WMP-2 packed region",detail:`${e.image.byteLength.toLocaleString()} RGBA bytes computed`},{id:"optimizer-output",owner:"Boundary",label:"Optimizer memory output",detail:"Packed bytes published without EDN pixel serialization"},{id:"image-data",owner:"Canvas",label:"ImageData render",detail:"Browser canvas receives the packed RGBA bytes"}]:e?.type==="scene"?[{id:"scene-value",owner:"Rasa",label:"Scene value",detail:`${e.scene.primitives.length.toLocaleString()} ordinary shape maps produced`},{id:"scene-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"primitive-render",owner:"Canvas",label:"Primitive renderer",detail:"Browser draws the returned geometric commands"}]:[]}const iM={botanical:Cw,city:fw,"algorithmic-orchestra":Wr,clockwork:Wr,polyrhythm:Wr,"oil-current":Cd,"signal-cathedral":Cd},sM={geometry:iS,pixels:Dw,music:Wr},aM={geometry:"Visuals",pixels:"Visuals",music:"Music"},rM={music:"Compositions"};function lM({activeId:i,categories:e,categoryId:n,examples:a,observed:l,onCategorySelect:c,onSelect:u}){const f=j.useRef([]),h=a.filter(b=>b.category===n),p=b=>{const x=(b+e.length)%e.length;f.current[x]?.focus(),c(e[x].id)},g=(b,x)=>{const S=b.key==="ArrowRight"||b.key==="ArrowDown"?x+1:b.key==="ArrowLeft"||b.key==="ArrowUp"?x-1:b.key==="Home"?0:b.key==="End"?e.length-1:null;S!==null&&(b.preventDefault(),p(S))};return v.jsxs("nav",{className:"example-gallery","aria-label":"Rasa examples",children:[v.jsxs("div",{className:"example-categories",role:"tablist","aria-label":"Example categories",children:[v.jsxs("span",{className:"gallery-label",children:[v.jsx(Py,{size:14})," Explore"]}),e.map((b,x)=>{const S=sM[b.id]||Py,k=aM[b.id]||"Examples",A=rM[b.id]||b.label;return v.jsxs("button",{"aria-controls":`example-panel-${b.id}`,"aria-selected":b.id===n,className:"category-choice","data-family":k.toLowerCase(),id:`example-tab-${b.id}`,onKeyDown:M=>g(M,x),onClick:()=>c(b.id),ref:M=>{f.current[x]=M},role:"tab",tabIndex:b.id===n?0:-1,type:"button",children:[v.jsx(S,{"aria-hidden":"true",size:14}),v.jsxs("span",{className:"category-copy",children:[v.jsx("small",{children:k}),v.jsx("strong",{children:A})]}),v.jsx("span",{className:"category-count","aria-label":`${b.count} examples`,children:b.count})]},b.id)})]}),v.jsx("div",{"aria-labelledby":`example-tab-${n}`,className:"gallery-list",id:`example-panel-${n}`,role:"tabpanel",children:h.map(b=>{const x=iM[b.id]||Cd,S=l[b.id]||null;return v.jsxs("button",{"aria-pressed":b.id===i,className:"example-choice","data-accent":b.accent,"data-selected":b.id===i,onClick:()=>u(b.id),type:"button",children:[v.jsx(x,{"aria-hidden":"true",size:18}),v.jsxs("span",{children:[v.jsx("strong",{children:b.title}),v.jsx("small",{children:S||b.boundary})]})]},b.id)})})]})}function hh({children:i,label:e,onClose:n,title:a}){return j.useEffect(()=>{const l=c=>{c.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),v.jsx("div",{className:"studio-overlay",onMouseDown:l=>l.target===l.currentTarget&&n(),role:"presentation",children:v.jsxs("section",{"aria-label":e,"aria-modal":"true",className:"studio-overlay-panel",role:"dialog",children:[v.jsxs("header",{children:[v.jsxs("div",{children:[v.jsx("span",{children:e}),v.jsx("strong",{children:a})]}),v.jsx("button",{"aria-label":`Close ${e}`,onClick:n,title:"Close",type:"button",children:v.jsx(gh,{size:18})})]}),v.jsx("div",{className:"studio-overlay-body",children:i})]})})}const $o=24e3;function oM({onClose:i,open:e,output:n,outputKind:a,runState:l}){const[c,u]=j.useState("projection");j.useEffect(()=>{e&&u("projection")},[e]);const f=l?.rawDisplay?.text||"",p=c==="raw"?f||"No raw value is available.":n||"No result yet.",g=j.useMemo(()=>p.length>$o?`${p.slice(0,$o)}

… preview stopped at ${$o.toLocaleString()} characters`:p,[p]);return e?v.jsx(hh,{label:"Rasa result",onClose:i,title:a||"value",children:v.jsxs("div",{className:"result-overlay",children:[v.jsxs("header",{className:"result-toolbar",children:[v.jsxs("div",{className:"result-tabs",role:"tablist","aria-label":"Result representation",children:[v.jsx("button",{"aria-selected":c==="projection",onClick:()=>u("projection"),role:"tab",type:"button",children:"Readable projection"}),v.jsx("button",{"aria-selected":c==="raw",onClick:()=>u("raw"),role:"tab",type:"button",children:"Raw returned value"})]}),v.jsxs("button",{className:"copy-result",onClick:()=>navigator.clipboard.writeText(p),title:"Copy complete selected value",type:"button",children:[v.jsx(yw,{size:15}),v.jsx("span",{children:"Copy all"})]})]}),v.jsxs("div",{className:"result-context",children:[v.jsxs("strong",{children:[p.length.toLocaleString()," characters"]}),v.jsx("span",{children:c==="projection"?"A deliberate readable projection. It may summarize large returned structures.":p.length>$o?"The complete value is available through Copy all; the DOM preview is bounded to keep the Studio responsive.":"The unprojected value returned by the runtime."})]}),v.jsx("pre",{children:g})]})}):null}function cM({activeId:i,files:e,onClose:n,onSelect:a}){j.useEffect(()=>{const c=u=>{u.key==="Escape"&&n()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n]);const l=uM(e);return v.jsxs("section",{"aria-label":"Files participating in this example","aria-modal":"true",className:"source-explorer",role:"dialog",children:[v.jsxs("header",{children:[v.jsxs("div",{children:[v.jsx("span",{children:"Execution sources"}),v.jsxs("strong",{children:[e.length," visible files"]})]}),v.jsx("div",{className:"source-explorer-actions",children:v.jsx("button",{"aria-label":"Close source explorer",onClick:n,title:"Close source explorer",type:"button",children:v.jsx(gh,{size:16})})})]}),l.map(([c,u])=>v.jsxs("div",{className:"source-group",children:[v.jsx("div",{className:"source-role",children:fM(c)}),u.map(f=>v.jsxs("button",{"data-active":f.id===i,onClick:()=>a(f.id),type:"button",children:[v.jsxs("span",{children:[v.jsx("strong",{children:f.name}),v.jsx("small",{children:f.label})]}),v.jsxs("em",{children:[f.lines," lines"]})]},f.id))]},c))]})}function uM(i){const e=new Map;for(const n of i)e.has(n.role)||e.set(n.role,[]),e.get(n.role).push(n);return[...e.entries()]}function fM(i){return i==="example"?"Visible user program":i==="library"?"Rasa libraries":i==="package"?"Capability package":i==="boundary"?"Browser boundary code":i}function dM({file:i,onChange:e,onRun:n,resetKey:a}){const l=j.useRef(null),c=j.useRef(e),u=j.useRef(n);return c.current=e,u.current=n,j.useEffect(()=>{if(!l.current)return;const f=Dh({parent:l.current,doc:i.content,liveLexicalHighlight:i.language==="rasa",onChange:i.editable?h=>c.current?.(h):null,onRun:i.editable?()=>u.current?.():null,readOnly:!i.editable});return i.editable&&f.focus(),()=>f.destroy()},[i.id,i.editable,i.language,a]),v.jsx("div",{className:"studio-editor","data-language":i.language,ref:l})}function yb({events:i,example:e,expanded:n=!1,onEvidence:a,onExpand:l,onRendered:c,onResult:u,onSectionPlay:f,playback:h,playbackOffsetSeconds:p=0,playbackStartedAtMs:g,renderKey:b,runState:x,sections:S=[],source:k}){if(!x)return v.jsxs("section",{className:"live-stage stage-empty",children:[v.jsx(bc,{size:28}),v.jsx("strong",{children:"Run the visible Rasa program"}),v.jsx("p",{children:"The stage remains empty until this session returns a real value or provider schedule."})]});if(x.status!=="ok")return v.jsxs("section",{className:"live-stage stage-empty stage-error",children:[v.jsx(Ir,{size:28}),v.jsx("strong",{children:"Rasa run failed"}),v.jsx("pre",{children:x.display?.text||x.error?.message})]});if(e.mode==="music")return v.jsxs("section",{className:"live-stage music-stage",children:[v.jsx(Ed,{detail:`${i.length} provider events · ${h}`,onEvidence:a,onResult:u,title:e.title}),v.jsx(D3,{events:i,onSectionPlay:f,playbackOffsetSeconds:p,playbackStartedAtMs:g,playing:h==="playing",sections:S,empty:v.jsxs("div",{className:"stage-empty",children:[v.jsx(Wr,{size:28}),v.jsx("strong",{children:"No provider events"}),v.jsx("p",{children:"The Rasa run completed without scheduling audible notes."})]})})]});const A=Gh(x);return A.status!=="ok"?v.jsxs("section",{className:"live-stage stage-empty stage-error",children:[v.jsx(Ir,{size:28}),v.jsx("strong",{children:"Visual result refused"}),v.jsx("pre",{children:A.message})]}):A.type==="scene"?v.jsxs("section",{className:"live-stage visual-stage",children:[v.jsx(Ed,{detail:`${A.scene.primitives.length} returned primitives`,onEvidence:a,onResult:u,title:A.scene.title}),v.jsx(bb,{onExpand:n?null:l,children:v.jsx(j3,{onRendered:c,renderKey:b,scene:A.scene,sourceHash:db(k)})})]}):v.jsxs("section",{className:"live-stage visual-stage",children:[v.jsx(Ed,{detail:`${A.image.byteLength} optimizer-published bytes`,onEvidence:a,onResult:u,title:A.image.title}),v.jsx(bb,{className:"packed-stage",onExpand:n?null:l,children:v.jsx(N3,{image:A.image,onRendered:c,renderKey:b,sourceHash:db(k)})})]})}function Ed({detail:i,onEvidence:e,onResult:n,title:a}){return v.jsxs("header",{className:"stage-header",children:[v.jsxs("div",{className:"stage-heading",children:[v.jsx("h1",{children:a}),v.jsx("span",{children:i})]}),v.jsxs("div",{className:"stage-actions",children:[n?v.jsxs("button",{"aria-label":"Inspect returned value",onClick:n,title:"Inspect returned value",type:"button",children:[v.jsx(wb,{size:15}),v.jsx("span",{children:"Result"})]}):null,e?v.jsxs("button",{"aria-label":"Inspect execution evidence",onClick:e,title:"Inspect execution evidence",type:"button",children:[v.jsx(Hw,{size:15}),v.jsx("span",{children:"Evidence"})]}):null]})]})}function bb({children:i,className:e="",onExpand:n}){return n?v.jsxs("button",{"aria-label":"Expand visual result",className:`stage-canvas visual-expand-trigger ${e}`.trim(),onClick:n,title:"Expand visual result",type:"button",children:[i,v.jsx("span",{"aria-hidden":"true",className:"visual-expand-hint",children:v.jsx(Lw,{size:17})})]}):v.jsx("div",{className:`stage-canvas ${e}`.trim(),children:i})}const Rd=Object.freeze({phases:"eval"}),hM=Object.freeze({phases:"all"});function mM(){const i=j.useMemo(()=>sT(),[]),e=j.useRef(0),[n,a]=j.useState(()=>uS()),[l,c]=j.useState(Dn[0].id),[u,f]=j.useState(Dn[0].category),[h,p]=j.useState(()=>Object.fromEntries(Dn.map(de=>[de.id,de.source]))),[g,b]=j.useState(()=>Object.fromEntries(pb.map(de=>[de.id,Dn.find(Me=>Me.category===de.id)?.id]))),x=j.useMemo(()=>Dn.find(de=>de.id===l)||Dn[0],[l]),[S,k]=j.useState(x.source),[A,M]=j.useState(0),[_,U]=j.useState("main"),[K,$]=j.useState(!1),[B,W]=j.useState(!0),[X,te]=j.useState(!1),[me,We]=j.useState(!1),[ut,De]=j.useState(!1),[vt,He]=j.useState(!1),[Xe,H]=j.useState(!1),[Q,ie]=j.useState(()=>i.snapshot()),[I,re]=j.useState(null),[E,q]=j.useState(null),[F,Z]=j.useState([]),[le,oe]=j.useState([]),[ye,Ge]=j.useState("idle"),[Fe,et]=j.useState(null),[qn,Vt]=j.useState(0),[ul,Rn]=j.useState({}),di=j.useMemo(()=>dR(x,S),[x,S]),hi=di.find(de=>de.id===_)||di[0],Oe=A1({configureOptions:Rd,evalOptions:Rd,manifestUrl:"./browser-manifest.json"});j.useEffect(()=>i.subscribe(ie),[i]);const Va=j.useCallback(async()=>{const de=++e.current;let Me=null;try{const yt=X?"all":"eval",Ya=Oe.getProvider("demo.tone-js");if(Ya?.started&&Ya.stop(),Ya?.activateFromGesture?.(),q(null),Z([]),oe([]),Ge("stopped"),et(null),Vt(0),re(null),Me=await i.beginRun({label:`${x.title} source`,source:S}),de!==e.current)return;const Ls=Oe.getProvider("demo.tone-js");Ls?.setExecutionWitness?.(i,Me);const mi=await Oe.run(S,{evalOptions:yt==="all"?hM:Rd,formatDisplay:tt=>G3(x.mode,tt)});if(de!==e.current)return;if(!mi){i.recordError(Me,new Error("Rasa browser session did not execute"));return}const Ie={...mi,reportMode:yt};if(i.recordRuntime(Me,gM(Ie)),Ie.status!=="ok"){i.recordError(Me,Ie.error||new Error(Ie.display?.text||"Rasa run failed")),q(Ie);return}if(x.mode==="music"){const tt=Ls?.lastEvents||[];q(Ie),Z(tt),oe(Ls?.lastScore?.sections||[]),Ge(tt.length>0?"playing":"idle"),et(tt.length>0?Ls?.playbackStartedAtMs??null:null),Vt(0),Rn(xt=>({...xt,[x.id]:`${tt.length} scheduled events`}));return}if(x.mode==="visuals"){const tt=Gh(Ie);if(tt.status!=="ok"){i.recordError(Me,new Error(tt.message||"Visual artifact refused")),q(Ie);return}const xt=yM(tt),jc=await i.recordArtifact(Me,xt.artifact),hl=await i.beforeEffect(Me,xt.boundary);if(de!==e.current||!jc||!hl)return;re({boundaryDigest:hl.digest,runId:Me}),q(Ie);const Nc=tt.type==="scene"?`${tt.scene.primitives.length} returned primitives`:`${tt.image.byteLength} packed bytes`;Rn(_s=>({..._s,[x.id]:Nc}))}}catch(yt){if(de!==e.current||yt?.kind==="browser-effect-cancelled")return;Me&&i.recordError(Me,yt),q({display:{kind:"error",text:yt?.message||String(yt)},error:yt,status:"error"})}},[X,x,Oe.getProvider,Oe.run,S,i]),Ji=j.useCallback(async de=>{const Me=Dn.find(yt=>yt.id===de);!Me||Me.id===l||(e.current+=1,i.cancel("example changed"),await Oe.getProvider("demo.tone-js")?.stop?.(),i.reset(),c(Me.id),f(Me.category),b(yt=>({...yt,[Me.category]:Me.id})),k(h[Me.id]??Me.source),M(yt=>yt+1),U("main"),$(!1),q(null),Z([]),oe([]),Ge("idle"),et(null),Vt(0),We(!1),De(!1),He(!1),H(!1),re(null))},[h,l,Oe.getProvider,i]),Ga=j.useCallback(de=>{const Me=g[de]||Dn.find(yt=>yt.category===de)?.id;Me&&Ji(Me)},[g,Ji]),$a=j.useCallback(async()=>{await Oe.getProvider("demo.tone-js")?.stop?.(),Ge("stopped"),et(null),Vt(0)},[Oe.getProvider]),Mc=j.useCallback(de=>{const Me=Oe.getProvider("demo.tone-js")?.playFromSection?.(de.name);Me&&(Ge("playing"),et(Me.playbackStartedAtMs),Vt(Me.offsetSeconds))},[Oe.getProvider]),Cc=j.useCallback(()=>{e.current+=1,i.cancel("source restored"),Oe.getProvider("demo.tone-js")?.stop?.(),i.reset(),k(x.source),p(de=>({...de,[x.id]:x.source})),M(de=>de+1),U("main"),q(null),Z([]),oe([]),Ge("stopped"),et(null),Vt(0),We(!1),De(!1),He(!1),re(null)},[x,Oe.getProvider,i]),_t=j.useCallback(()=>{a(fS())},[]),Oc=j.useCallback(de=>{e.current+=1,i.cancel("source edited"),i.reset(),Oe.getProvider("demo.tone-js")?.stop?.(),k(de),p(Me=>({...Me,[x.id]:de})),q(null),Z([]),oe([]),Ge("stopped"),et(null),Vt(0),re(null)},[x.id,Oe.getProvider,i]),fl=j.useCallback(()=>{e.current+=1,i.cancel("session restarted"),i.reset(),Oe.getProvider("demo.tone-js")?.stop?.(),q(null),Z([]),oe([]),Ge("stopped"),et(null),Vt(0),re(null),Oe.boot()},[Oe.boot,Oe.getProvider,i]),dl=j.useCallback(de=>{I&&i.recordEffect(I.runId,{...de,authority:"browser-effect",inputDigest:I.boundaryDigest})},[I,i]);return v.jsxs("div",{className:"studio-shell","data-editor-open":B,children:[v.jsx("style",{children:cS()}),v.jsx("style",{children:eT}),v.jsx("style",{children:hS()}),v.jsx(mS,{actions:v.jsx("button",{"aria-label":"Restart Rasa session",className:"rasa-site-action",onClick:fl,title:"Restart Rasa session",type:"button",children:v.jsx(Fw,{size:15})}),activeId:"studio",onThemeToggle:_t,runtimeLabel:Oe.runtimeState.available?"Wasm ready":Oe.status,runtimeStatus:Oe.runtimeState.available?"ready":Oe.status,runtimeTitle:Oe.runtimeState.message||(Oe.runtimeState.available?"Browser Wasm runtime ready":Oe.status),theme:n}),v.jsx(lM,{activeId:x.id,categories:pb,categoryId:u,examples:Dn,observed:ul,onCategorySelect:Ga,onSelect:Ji}),v.jsxs("main",{className:"studio-workspace",children:[v.jsxs("section",{className:"studio-stage-shell",children:[v.jsx(yb,{events:F,example:x,onEvidence:()=>We(!0),onExpand:x.mode==="visuals"?()=>He(!0):null,onRendered:dl,onResult:()=>De(!0),onSectionPlay:Mc,playback:ye,playbackOffsetSeconds:qn,playbackStartedAtMs:Fe,renderKey:I?.runId||null,runState:E,sections:le,source:S}),v.jsx(rT,{model:Q,onOpen:()=>H(!0),onRelease:i.release})]}),v.jsxs("section",{className:"editor-dock",children:[v.jsxs("header",{className:"editor-header",children:[B?v.jsxs("button",{"aria-expanded":K,className:"source-trigger",onClick:()=>$(de=>!de),type:"button",children:[v.jsx(Tw,{size:16}),v.jsxs("span",{children:[v.jsx("strong",{children:hi.name}),v.jsxs("small",{children:[di.length," participating files"]})]})]}):null,v.jsx(pM,{canRun:Oe.canRun&&Q.status!=="paused",editorOpen:B,isMusic:x.mode==="music",onCollapse:()=>W(de=>(de&&$(!1),!de)),onReset:Cc,onRun:Va,onStop:$a,running:Oe.running})]}),B?v.jsxs(v.Fragment,{children:[K?v.jsxs(v.Fragment,{children:[v.jsx("button",{"aria-label":"Close source explorer",className:"source-scrim",onClick:()=>$(!1),type:"button"}),v.jsx(cM,{activeId:hi.id,files:di,onClose:()=>$(!1),onSelect:de=>{U(de),$(!1)}})]}):null,v.jsx(dM,{file:hi,onChange:hi.editable?Oc:null,onRun:Va,resetKey:A})]}):null]}),v.jsx(tM,{events:F,example:x,fullReport:X,onClose:()=>We(!1),onFullReportChange:te,open:me,reportMode:E?.reportMode||"none",runState:E}),v.jsx(oM,{onClose:()=>De(!1),open:ut,output:Oe.output,outputKind:Oe.outputKind,runState:E}),Xe?v.jsx(hh,{label:"How Rasa made this result",onClose:()=>H(!1),title:"Proof trail",children:v.jsx(lT,{model:Q,onPauseChange:i.setPauseBeforeEffect,onRelease:i.release})}):null,vt&&E?.status==="ok"&&x.mode==="visuals"?v.jsx(hh,{label:"Expanded Rasa result",onClose:()=>He(!1),title:x.title,children:v.jsx(yb,{events:F,example:x,expanded:!0,playback:ye,playbackStartedAtMs:Fe,runState:E,source:S})}):null]})]})}function pM({canRun:i,editorOpen:e,isMusic:n,onCollapse:a,onReset:l,onRun:c,onStop:u,running:f}){return e?v.jsxs("div",{className:"editor-actions",children:[n?v.jsx("button",{"aria-label":"Stop audio",onClick:u,title:"Stop audio",type:"button",children:v.jsx(lS,{size:17})}):null,v.jsx("button",{"aria-label":"Restore example source",onClick:l,title:"Restore example source",type:"button",children:v.jsx(Pw,{size:17})}),v.jsx("button",{"aria-label":f?"Running Rasa":"Run Rasa",className:"editor-run",disabled:!i,onClick:c,title:f?"Running Rasa":"Run Rasa",type:"button",children:v.jsx(bc,{fill:"currentColor",size:20})}),v.jsx("button",{"aria-label":e?"Collapse editor":"Open editor",className:"editor-collapse",onClick:a,title:e?"Collapse editor":"Open editor",type:"button",children:e?v.jsx($w,{size:17}):v.jsx(Jy,{size:17})})]}):v.jsx("div",{className:"editor-actions editor-actions-collapsed",children:v.jsx("button",{"aria-label":"Open editor",className:"editor-collapse",onClick:a,title:"Open editor",type:"button",children:v.jsx(Jy,{size:17})})})}function gM(i){const e=i.parity?.execution||{},n=i.parity?.optimizer||{},a=e.semanticLane||"runtime-wasm",l=e.optimizedLane||"none",c=e.artifact||"ras.wasm",u=Number(n.executed||0);return{detail:u>0?`${a} · ${l} · ${c} · ${u} optimized region execution${u===1?"":"s"}`:`${a} · ${l} · ${c} · no optimized region executed`,elapsedMs:i.elapsedMs,semanticLane:a,optimizedLane:l,artifact:c,optimizerExecutions:u,reportMode:i.reportMode,status:i.status}}function yM(i){if(i.type==="scene"){const n=i.scene.primitives.length;return{artifact:{count:n,detail:`${n.toLocaleString()} drawing instructions returned as ordinary Rasa values`,kind:"ordinary-rasa-scene",label:"Rasa scene value",payload:i.scene,unit:"primitives"},boundary:{authority:"browser-boundary",count:n,detail:`${n.toLocaleString()} drawing instructions handed to Canvas`,kind:"canvas-primitive-input",label:"Canvas primitive input",payload:i.scene,unit:"primitives"}}}const e=i.image.pixels.byteLength;return{artifact:{count:e,detail:`${e.toLocaleString()} RGBA bytes published by the executed WMP-2 callable`,kind:"wmp-2-rgba-bytes",label:"WMP-2 pixel artifact",payload:i.image.pixels,unit:"bytes"},boundary:{authority:"browser-boundary",count:e,detail:`${e.toLocaleString()} optimizer bytes passed to ImageData`,kind:"canvas-image-data-input",label:"Canvas pixel input",payload:i.image.pixels,unit:"bytes"}}}J2.createRoot(document.getElementById("root")).render(v.jsx(yc.StrictMode,{children:v.jsx(mM,{})}));
