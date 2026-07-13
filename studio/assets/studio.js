(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function wC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ld={exports:{}},jl={};var mv;function kC(){if(mv)return jl;mv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:n,type:i,key:c,ref:r!==void 0?r:null,props:l}}return jl.Fragment=e,jl.jsx=t,jl.jsxs=t,jl}var gv;function SC(){return gv||(gv=1,Ld.exports=kC()),Ld.exports}var x=SC(),_d={exports:{}},we={};var yv;function AC(){if(yv)return we;yv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function O(M,U,X){this.props=M,this.context=U,this.refs=C,this.updater=X||k}O.prototype.isReactComponent={},O.prototype.setState=function(M,U){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,U,"setState")},O.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function G(){}G.prototype=O.prototype;function _(M,U,X){this.props=M,this.context=U,this.refs=C,this.updater=X||k}var B=_.prototype=new G;B.constructor=_,A(B,O.prototype),B.isPureReactComponent=!0;var R=Array.isArray;function W(){}var q={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function ie(M,U,X){var J=X.ref;return{$$typeof:n,type:M,key:U,ref:J!==void 0?J:null,props:X}}function he(M,U){return ie(M.type,U,M.props)}function fe(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function te(M){var U={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(X){return U[X]})}var ve=/\/+/g;function ye(M,U){return typeof M=="object"&&M!==null&&M.key!=null?te(""+M.key):U.toString(36)}function xe(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(W,W):(M.status="pending",M.then(function(U){M.status==="pending"&&(M.status="fulfilled",M.value=U)},function(U){M.status==="pending"&&(M.status="rejected",M.reason=U)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function V(M,U,X,J,me){var de=typeof M;(de==="undefined"||de==="boolean")&&(M=null);var ke=!1;if(M===null)ke=!0;else switch(de){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(M.$$typeof){case n:case e:ke=!0;break;case g:return ke=M._init,V(ke(M._payload),U,X,J,me)}}if(ke)return me=me(M),ke=J===""?"."+ye(M,0):J,R(me)?(X="",ke!=null&&(X=ke.replace(ve,"$&/")+"/"),V(me,U,X,"",function(dt){return dt})):me!=null&&(fe(me)&&(me=he(me,X+(me.key==null||M&&M.key===me.key?"":(""+me.key).replace(ve,"$&/")+"/")+ke)),U.push(me)),1;ke=0;var Je=J===""?".":J+":";if(R(M))for(var at=0;at<M.length;at++)J=M[at],de=Je+ye(J,at),ke+=V(J,U,X,de,me);else if(at=w(M),typeof at=="function")for(M=at.call(M),at=0;!(J=M.next()).done;)J=J.value,de=Je+ye(J,at++),ke+=V(J,U,X,de,me);else if(de==="object"){if(typeof M.then=="function")return V(xe(M),U,X,J,me);throw U=String(M),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Q(M,U,X){if(M==null)return M;var J=[],me=0;return V(M,J,"","",function(de){return U.call(X,de,me++)}),J}function Z(M){if(M._status===-1){var U=M._result;U=U(),U.then(function(X){(M._status===0||M._status===-1)&&(M._status=1,M._result=X)},function(X){(M._status===0||M._status===-1)&&(M._status=2,M._result=X)}),M._status===-1&&(M._status=0,M._result=U)}if(M._status===1)return M._result.default;throw M._result}var ae=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},ce={map:Q,forEach:function(M,U,X){Q(M,function(){U.apply(this,arguments)},X)},count:function(M){var U=0;return Q(M,function(){U++}),U},toArray:function(M){return Q(M,function(U){return U})||[]},only:function(M){if(!fe(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return we.Activity=y,we.Children=ce,we.Component=O,we.Fragment=t,we.Profiler=r,we.PureComponent=_,we.StrictMode=i,we.Suspense=h,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,we.__COMPILER_RUNTIME={__proto__:null,c:function(M){return q.H.useMemoCache(M)}},we.cache=function(M){return function(){return M.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(M,U,X){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var J=A({},M.props),me=M.key;if(U!=null)for(de in U.key!==void 0&&(me=""+U.key),U)!F.call(U,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&U.ref===void 0||(J[de]=U[de]);var de=arguments.length-2;if(de===1)J.children=X;else if(1<de){for(var ke=Array(de),Je=0;Je<de;Je++)ke[Je]=arguments[Je+2];J.children=ke}return ie(M.type,me,J)},we.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:l,_context:M},M},we.createElement=function(M,U,X){var J,me={},de=null;if(U!=null)for(J in U.key!==void 0&&(de=""+U.key),U)F.call(U,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(me[J]=U[J]);var ke=arguments.length-2;if(ke===1)me.children=X;else if(1<ke){for(var Je=Array(ke),at=0;at<ke;at++)Je[at]=arguments[at+2];me.children=Je}if(M&&M.defaultProps)for(J in ke=M.defaultProps,ke)me[J]===void 0&&(me[J]=ke[J]);return ie(M,de,me)},we.createRef=function(){return{current:null}},we.forwardRef=function(M){return{$$typeof:f,render:M}},we.isValidElement=fe,we.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:Z}},we.memo=function(M,U){return{$$typeof:p,type:M,compare:U===void 0?null:U}},we.startTransition=function(M){var U=q.T,X={};q.T=X;try{var J=M(),me=q.S;me!==null&&me(X,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(W,ae)}catch(de){ae(de)}finally{U!==null&&X.types!==null&&(U.types=X.types),q.T=U}},we.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},we.use=function(M){return q.H.use(M)},we.useActionState=function(M,U,X){return q.H.useActionState(M,U,X)},we.useCallback=function(M,U){return q.H.useCallback(M,U)},we.useContext=function(M){return q.H.useContext(M)},we.useDebugValue=function(){},we.useDeferredValue=function(M,U){return q.H.useDeferredValue(M,U)},we.useEffect=function(M,U){return q.H.useEffect(M,U)},we.useEffectEvent=function(M){return q.H.useEffectEvent(M)},we.useId=function(){return q.H.useId()},we.useImperativeHandle=function(M,U,X){return q.H.useImperativeHandle(M,U,X)},we.useInsertionEffect=function(M,U){return q.H.useInsertionEffect(M,U)},we.useLayoutEffect=function(M,U){return q.H.useLayoutEffect(M,U)},we.useMemo=function(M,U){return q.H.useMemo(M,U)},we.useOptimistic=function(M,U){return q.H.useOptimistic(M,U)},we.useReducer=function(M,U,X){return q.H.useReducer(M,U,X)},we.useRef=function(M){return q.H.useRef(M)},we.useState=function(M){return q.H.useState(M)},we.useSyncExternalStore=function(M,U,X){return q.H.useSyncExternalStore(M,U,X)},we.useTransition=function(){return q.H.useTransition()},we.version="19.2.7",we}var bv;function Mm(){return bv||(bv=1,_d.exports=AC()),_d.exports}var j=Mm();const Zu=wC(j);var Hd={exports:{}},Bl={},qd={exports:{}},Vd={};var vv;function CC(){return vv||(vv=1,(function(n){function e(V,Q){var Z=V.length;V.push(Q);e:for(;0<Z;){var ae=Z-1>>>1,ce=V[ae];if(0<r(ce,Q))V[ae]=Q,V[Z]=ce,Z=ae;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var Q=V[0],Z=V.pop();if(Z!==Q){V[0]=Z;e:for(var ae=0,ce=V.length,M=ce>>>1;ae<M;){var U=2*(ae+1)-1,X=V[U],J=U+1,me=V[J];if(0>r(X,Z))J<ce&&0>r(me,X)?(V[ae]=me,V[J]=Z,ae=J):(V[ae]=X,V[U]=Z,ae=U);else if(J<ce&&0>r(me,Z))V[ae]=me,V[J]=Z,ae=J;else break e}}return Q}function r(V,Q){var Z=V.sortIndex-Q.sortIndex;return Z!==0?Z:V.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,y=null,v=3,w=!1,k=!1,A=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function B(V){for(var Q=t(p);Q!==null;){if(Q.callback===null)i(p);else if(Q.startTime<=V)i(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=t(p)}}function R(V){if(A=!1,B(V),!k)if(t(h)!==null)k=!0,W||(W=!0,te());else{var Q=t(p);Q!==null&&xe(R,Q.startTime-V)}}var W=!1,q=-1,F=5,ie=-1;function he(){return C?!0:!(n.unstable_now()-ie<F)}function fe(){if(C=!1,W){var V=n.unstable_now();ie=V;var Q=!0;try{e:{k=!1,A&&(A=!1,G(q),q=-1),w=!0;var Z=v;try{t:{for(B(V),y=t(h);y!==null&&!(y.expirationTime>V&&he());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,v=y.priorityLevel;var ce=ae(y.expirationTime<=V);if(V=n.unstable_now(),typeof ce=="function"){y.callback=ce,B(V),Q=!0;break t}y===t(h)&&i(h),B(V)}else i(h);y=t(h)}if(y!==null)Q=!0;else{var M=t(p);M!==null&&xe(R,M.startTime-V),Q=!1}}break e}finally{y=null,v=Z,w=!1}Q=void 0}}finally{Q?te():W=!1}}}var te;if(typeof _=="function")te=function(){_(fe)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=fe,te=function(){ye.postMessage(null)}}else te=function(){O(fe,0)};function xe(V,Q){q=O(function(){V(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var Z=v;v=Q;try{return V()}finally{v=Z}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=v;v=V;try{return Q()}finally{v=Z}},n.unstable_scheduleCallback=function(V,Q,Z){var ae=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,V){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Z+ce,V={id:g++,callback:Q,priorityLevel:V,startTime:Z,expirationTime:ce,sortIndex:-1},Z>ae?(V.sortIndex=Z,e(p,V),t(h)===null&&V===t(p)&&(A?(G(q),q=-1):A=!0,xe(R,Z-ae))):(V.sortIndex=ce,e(h,V),k||w||(k=!0,W||(W=!0,te()))),V},n.unstable_shouldYield=he,n.unstable_wrapCallback=function(V){var Q=v;return function(){var Z=v;v=Q;try{return V.apply(this,arguments)}finally{v=Z}}}})(Vd)),Vd}var xv;function TC(){return xv||(xv=1,qd.exports=CC()),qd.exports}var Ud={exports:{}},Ut={};var wv;function MC(){if(wv)return Ut;wv=1;var n=Mm();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ut.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(h,p,null,g)},Ut.flushSync=function(h){var p=c.T,g=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=p,i.p=g,i.d.f()}},Ut.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},Ut.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},Ut.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:w}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ut.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},Ut.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ut.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},Ut.requestFormReset=function(h){i.d.r(h)},Ut.unstable_batchedUpdates=function(h,p){return h(p)},Ut.useFormState=function(h,p,g){return c.H.useFormState(h,p,g)},Ut.useFormStatus=function(){return c.H.useHostTransitionStatus()},Ut.version="19.2.7",Ut}var kv;function EC(){if(kv)return Ud.exports;kv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ud.exports=MC(),Ud.exports}var Sv;function RC(){if(Sv)return Bl;Sv=1;var n=TC(),e=Mm(),t=EC();function i(s){var a="https://react.dev/errors/"+s;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function l(s){var a=s,o=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(o=a.return),s=a.return;while(s)}return a.tag===3?o:null}function c(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function f(s){if(s.tag===31){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function h(s){if(l(s)!==s)throw Error(i(188))}function p(s){var a=s.alternate;if(!a){if(a=l(s),a===null)throw Error(i(188));return a!==s?null:s}for(var o=s,u=a;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return h(d),s;if(m===u)return h(d),a;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=m;else{for(var b=!1,S=d.child;S;){if(S===o){b=!0,o=d,u=m;break}if(S===u){b=!0,u=d,o=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===o){b=!0,o=m,u=d;break}if(S===u){b=!0,u=m,o=d;break}S=S.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?s:a}function g(s){var a=s.tag;if(a===5||a===26||a===27||a===6)return s;for(s=s.child;s!==null;){if(a=g(s),a!==null)return a;s=s.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),_=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function te(s){return s===null||typeof s!="object"?null:(s=fe&&s[fe]||s["@@iterator"],typeof s=="function"?s:null)}var ve=Symbol.for("react.client.reference");function ye(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===ve?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case A:return"Fragment";case O:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case W:return"SuspenseList";case ie:return"Activity"}if(typeof s=="object")switch(s.$$typeof){case k:return"Portal";case _:return s.displayName||"Context";case G:return(s._context.displayName||"Context")+".Consumer";case B:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case q:return a=s.displayName||null,a!==null?a:ye(s.type)||"Memo";case F:a=s._payload,s=s._init;try{return ye(s(a))}catch{}}return null}var xe=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ae=[],ce=-1;function M(s){return{current:s}}function U(s){0>ce||(s.current=ae[ce],ae[ce]=null,ce--)}function X(s,a){ce++,ae[ce]=s.current,s.current=a}var J=M(null),me=M(null),de=M(null),ke=M(null);function Je(s,a){switch(X(de,a),X(me,s),X(J,null),a.nodeType){case 9:case 11:s=(s=a.documentElement)&&(s=s.namespaceURI)?Hb(s):0;break;default:if(s=a.tagName,a=a.namespaceURI)a=Hb(a),s=qb(a,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}U(J),X(J,s)}function at(){U(J),U(me),U(de)}function dt(s){s.memoizedState!==null&&X(ke,s);var a=J.current,o=qb(a,s.type);a!==o&&(X(me,s),X(J,o))}function gi(s){me.current===s&&(U(J),U(me)),ke.current===s&&(U(ke),Rl._currentValue=Z)}var Gi,Hs;function Sn(s){if(Gi===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Gi=a&&a[1]||"",Hs=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gi+s+Hs}var De=!1;function br(s,a){if(!s||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch($){var H=$}Reflect.construct(s,[],I)}else{try{I.call()}catch($){H=$}s.call(I.prototype)}}else{try{throw Error()}catch($){H=$}(I=s())&&typeof I.catch=="function"&&I.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var T=b.split(`
`),L=S.split(`
`);for(d=u=0;u<T.length&&!T[u].includes("DetermineComponentFrameRoot");)u++;for(;d<L.length&&!L[d].includes("DetermineComponentFrameRoot");)d++;if(u===T.length||d===L.length)for(u=T.length-1,d=L.length-1;1<=u&&0<=d&&T[u]!==L[d];)d--;for(;1<=u&&0<=d;u--,d--)if(T[u]!==L[d]){if(u!==1||d!==1)do if(u--,d--,0>d||T[u]!==L[d]){var P=`
`+T[u].replace(" at new "," at ");return s.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",s.displayName)),P}while(1<=u&&0<=d);break}}}finally{De=!1,Error.prepareStackTrace=o}return(o=s?s.displayName||s.name:"")?Sn(o):""}function _a(s,a){switch(s.tag){case 26:case 27:case 5:return Sn(s.type);case 16:return Sn("Lazy");case 13:return s.child!==a&&a!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return br(s.type,!1);case 11:return br(s.type.render,!1);case 1:return br(s.type,!0);case 31:return Sn("Activity");default:return""}}function So(s){try{var a="",o=null;do a+=_a(s,o),o=s,s=s.return;while(s);return a}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ha=Object.prototype.hasOwnProperty,qa=n.unstable_scheduleCallback,Va=n.unstable_cancelCallback,wf=n.unstable_shouldYield,kf=n.unstable_requestPaint,Pt=n.unstable_now,Te=n.unstable_getCurrentPriorityLevel,He=n.unstable_ImmediatePriority,St=n.unstable_UserBlockingPriority,Wi=n.unstable_NormalPriority,vr=n.unstable_LowPriority,Ua=n.unstable_IdlePriority,Vn=n.log,Yt=n.unstable_setDisableYieldValue,Zn=null,Kt=null;function Un(s){if(typeof Vn=="function"&&Yt(s),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Zn,s)}catch{}}var It=Math.clz32?Math.clz32:l2,Sf=Math.log,a2=Math.LN2;function l2(s){return s>>>=0,s===0?32:31-(Sf(s)/a2|0)|0}var Ao=256,Co=262144,To=4194304;function qs(s){var a=s&42;if(a!==0)return a;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return s&261888;case 262144:case 524288:case 1048576:case 2097152:return s&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function Mo(s,a,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,m=s.suspendedLanes,b=s.pingedLanes;s=s.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?d=qs(u):(b&=S,b!==0?d=qs(b):o||(o=S&~s,o!==0&&(d=qs(o))))):(S=u&~m,S!==0?d=qs(S):b!==0?d=qs(b):o||(o=u&~s,o!==0&&(d=qs(o)))),d===0?0:a!==0&&a!==d&&(a&m)===0&&(m=d&-d,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:d}function $a(s,a){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&a)===0}function o2(s,a){switch(s){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vg(){var s=To;return To<<=1,(To&62914560)===0&&(To=4194304),s}function Af(s){for(var a=[],o=0;31>o;o++)a.push(s);return a}function Ga(s,a){s.pendingLanes|=a,a!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function c2(s,a,o,u,d,m){var b=s.pendingLanes;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=o,s.entangledLanes&=o,s.errorRecoveryDisabledLanes&=o,s.shellSuspendCounter=0;var S=s.entanglements,T=s.expirationTimes,L=s.hiddenUpdates;for(o=b&~o;0<o;){var P=31-It(o),I=1<<P;S[P]=0,T[P]=-1;var H=L[P];if(H!==null)for(L[P]=null,P=0;P<H.length;P++){var $=H[P];$!==null&&($.lane&=-536870913)}o&=~I}u!==0&&xg(s,u,0),m!==0&&d===0&&s.tag!==0&&(s.suspendedLanes|=m&~(b&~a))}function xg(s,a,o){s.pendingLanes|=a,s.suspendedLanes&=~a;var u=31-It(a);s.entangledLanes|=a,s.entanglements[u]=s.entanglements[u]|1073741824|o&261930}function wg(s,a){var o=s.entangledLanes|=a;for(s=s.entanglements;o;){var u=31-It(o),d=1<<u;d&a|s[u]&a&&(s[u]|=a),o&=~d}}function kg(s,a){var o=a&-a;return o=(o&42)!==0?1:Cf(o),(o&(s.suspendedLanes|a))!==0?0:o}function Cf(s){switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=128;break;case 268435456:s=134217728;break;default:s=0}return s}function Tf(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function Sg(){var s=Q.p;return s!==0?s:(s=window.event,s===void 0?32:ov(s.type))}function Ag(s,a){var o=Q.p;try{return Q.p=s,a()}finally{Q.p=o}}var Pi=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Pi,en="__reactProps$"+Pi,xr="__reactContainer$"+Pi,Mf="__reactEvents$"+Pi,u2="__reactListeners$"+Pi,f2="__reactHandles$"+Pi,Cg="__reactResources$"+Pi,Wa="__reactMarker$"+Pi;function Ef(s){delete s[Nt],delete s[en],delete s[Mf],delete s[u2],delete s[f2]}function wr(s){var a=s[Nt];if(a)return a;for(var o=s.parentNode;o;){if(a=o[xr]||o[Nt]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(s=Yb(s);s!==null;){if(o=s[Nt])return o;s=Yb(s)}return a}s=o,o=s.parentNode}return null}function kr(s){if(s=s[Nt]||s[xr]){var a=s.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return s}return null}function Pa(s){var a=s.tag;if(a===5||a===26||a===27||a===6)return s.stateNode;throw Error(i(33))}function Sr(s){var a=s[Cg];return a||(a=s[Cg]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Mt(s){s[Wa]=!0}var Tg=new Set,Mg={};function Vs(s,a){Ar(s,a),Ar(s+"Capture",a)}function Ar(s,a){for(Mg[s]=a,s=0;s<a.length;s++)Tg.add(a[s])}var h2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Eg={},Rg={};function d2(s){return Ha.call(Rg,s)?!0:Ha.call(Eg,s)?!1:h2.test(s)?Rg[s]=!0:(Eg[s]=!0,!1)}function Eo(s,a,o){if(d2(a))if(o===null)s.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":s.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){s.removeAttribute(a);return}}s.setAttribute(a,""+o)}}function Ro(s,a,o){if(o===null)s.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(a);return}s.setAttribute(a,""+o)}}function yi(s,a,o,u){if(u===null)s.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(o);return}s.setAttributeNS(a,o,""+u)}}function An(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Og(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function p2(s,a,o){var u=Object.getOwnPropertyDescriptor(s.constructor.prototype,a);if(!s.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return d.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(s,a,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function Rf(s){if(!s._valueTracker){var a=Og(s)?"checked":"value";s._valueTracker=p2(s,a,""+s[a])}}function Dg(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return s&&(u=Og(s)?s.checked?"true":"false":s.value),s=u,s!==o?(a.setValue(s),!0):!1}function Oo(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var m2=/[\n"\\]/g;function Cn(s){return s.replace(m2,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Of(s,a,o,u,d,m,b,S){s.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?s.type=b:s.removeAttribute("type"),a!=null?b==="number"?(a===0&&s.value===""||s.value!=a)&&(s.value=""+An(a)):s.value!==""+An(a)&&(s.value=""+An(a)):b!=="submit"&&b!=="reset"||s.removeAttribute("value"),a!=null?Df(s,b,An(a)):o!=null?Df(s,b,An(o)):u!=null&&s.removeAttribute("value"),d==null&&m!=null&&(s.defaultChecked=!!m),d!=null&&(s.checked=d&&typeof d!="function"&&typeof d!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?s.name=""+An(S):s.removeAttribute("name")}function Ng(s,a,o,u,d,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(s.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){Rf(s);return}o=o!=null?""+An(o):"",a=a!=null?""+An(a):o,S||a===s.value||(s.value=a),s.defaultValue=a}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,s.checked=S?s.checked:!!u,s.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(s.name=b),Rf(s)}function Df(s,a,o){a==="number"&&Oo(s.ownerDocument)===s||s.defaultValue===""+o||(s.defaultValue=""+o)}function Cr(s,a,o,u){if(s=s.options,a){a={};for(var d=0;d<o.length;d++)a["$"+o[d]]=!0;for(o=0;o<s.length;o++)d=a.hasOwnProperty("$"+s[o].value),s[o].selected!==d&&(s[o].selected=d),d&&u&&(s[o].defaultSelected=!0)}else{for(o=""+An(o),a=null,d=0;d<s.length;d++){if(s[d].value===o){s[d].selected=!0,u&&(s[d].defaultSelected=!0);return}a!==null||s[d].disabled||(a=s[d])}a!==null&&(a.selected=!0)}}function jg(s,a,o){if(a!=null&&(a=""+An(a),a!==s.value&&(s.value=a),o==null)){s.defaultValue!==a&&(s.defaultValue=a);return}s.defaultValue=o!=null?""+An(o):""}function Bg(s,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(xe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=An(a),s.defaultValue=o,u=s.textContent,u===o&&u!==""&&u!==null&&(s.value=u),Rf(s)}function Tr(s,a){if(a){var o=s.firstChild;if(o&&o===s.lastChild&&o.nodeType===3){o.nodeValue=a;return}}s.textContent=a}var g2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zg(s,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?s.setProperty(a,""):a==="float"?s.cssFloat="":s[a]="":u?s.setProperty(a,o):typeof o!="number"||o===0||g2.has(a)?a==="float"?s.cssFloat=o:s[a]=(""+o).trim():s[a]=o+"px"}function Lg(s,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(s=s.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?s.setProperty(u,""):u==="float"?s.cssFloat="":s[u]="");for(var d in a)u=a[d],a.hasOwnProperty(d)&&o[d]!==u&&zg(s,d,u)}else for(var m in a)a.hasOwnProperty(m)&&zg(s,m,a[m])}function Nf(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Do(s){return b2.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}function bi(){}var jf=null;function Bf(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Mr=null,Er=null;function _g(s){var a=kr(s);if(a&&(s=a.stateNode)){var o=s[en]||null;e:switch(s=a.stateNode,a.type){case"input":if(Of(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=s;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Cn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==s&&u.form===s.form){var d=u[en]||null;if(!d)throw Error(i(90));Of(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===s.form&&Dg(u)}break e;case"textarea":jg(s,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Cr(s,!!o.multiple,a,!1)}}}var zf=!1;function Hg(s,a,o){if(zf)return s(a,o);zf=!0;try{var u=s(a);return u}finally{if(zf=!1,(Mr!==null||Er!==null)&&(bc(),Mr&&(a=Mr,s=Er,Er=Mr=null,_g(a),s)))for(a=0;a<s.length;a++)_g(s[a])}}function Ya(s,a){var o=s.stateNode;if(o===null)return null;var u=o[en]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(s=s.type,u=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!u;break e;default:s=!1}if(s)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=!1;if(vi)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Lf=!1}var Yi=null,_f=null,No=null;function qg(){if(No)return No;var s,a=_f,o=a.length,u,d="value"in Yi?Yi.value:Yi.textContent,m=d.length;for(s=0;s<o&&a[s]===d[s];s++);var b=o-s;for(u=1;u<=b&&a[o-u]===d[m-u];u++);return No=d.slice(s,1<u?1-u:void 0)}function jo(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function Bo(){return!0}function Vg(){return!1}function tn(s){function a(o,u,d,m,b){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in s)s.hasOwnProperty(S)&&(o=s[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bo:Vg,this.isPropagationStopped=Vg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),a}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=tn(Us),Ia=y({},Us,{view:0,detail:0}),v2=tn(Ia),Hf,qf,Fa,Lo=y({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Fa&&(Fa&&s.type==="mousemove"?(Hf=s.screenX-Fa.screenX,qf=s.screenY-Fa.screenY):qf=Hf=0,Fa=s),Hf)},movementY:function(s){return"movementY"in s?s.movementY:qf}}),Ug=tn(Lo),x2=y({},Lo,{dataTransfer:0}),w2=tn(x2),k2=y({},Ia,{relatedTarget:0}),Vf=tn(k2),S2=y({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),A2=tn(S2),C2=y({},Us,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),T2=tn(C2),M2=y({},Us,{data:0}),$g=tn(M2),E2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D2(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=O2[s])?!!a[s]:!1}function Uf(){return D2}var N2=y({},Ia,{key:function(s){if(s.key){var a=E2[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=jo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?R2[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(s){return s.type==="keypress"?jo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?jo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),j2=tn(N2),B2=y({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=tn(B2),z2=y({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),L2=tn(z2),_2=y({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),H2=tn(_2),q2=y({},Lo,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),V2=tn(q2),U2=y({},Us,{newState:0,oldState:0}),$2=tn(U2),G2=[9,13,27,32],$f=vi&&"CompositionEvent"in window,Xa=null;vi&&"documentMode"in document&&(Xa=document.documentMode);var W2=vi&&"TextEvent"in window&&!Xa,Wg=vi&&(!$f||Xa&&8<Xa&&11>=Xa),Pg=" ",Yg=!1;function Kg(s,a){switch(s){case"keyup":return G2.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Rr=!1;function P2(s,a){switch(s){case"compositionend":return Ig(a);case"keypress":return a.which!==32?null:(Yg=!0,Pg);case"textInput":return s=a.data,s===Pg&&Yg?null:s;default:return null}}function Y2(s,a){if(Rr)return s==="compositionend"||!$f&&Kg(s,a)?(s=qg(),No=_f=Yi=null,Rr=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Wg&&a.locale!=="ko"?null:a.data;default:return null}}var K2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!K2[s.type]:a==="textarea"}function Xg(s,a,o,u){Mr?Er?Er.push(u):Er=[u]:Mr=u,a=Cc(a,"onChange"),0<a.length&&(o=new zo("onChange","change",null,o,u),s.push({event:o,listeners:a}))}var Qa=null,Za=null;function I2(s){Nb(s,0)}function _o(s){var a=Pa(s);if(Dg(a))return s}function Qg(s,a){if(s==="change")return a}var Zg=!1;if(vi){var Gf;if(vi){var Wf="oninput"in document;if(!Wf){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),Wf=typeof Jg.oninput=="function"}Gf=Wf}else Gf=!1;Zg=Gf&&(!document.documentMode||9<document.documentMode)}function ey(){Qa&&(Qa.detachEvent("onpropertychange",ty),Za=Qa=null)}function ty(s){if(s.propertyName==="value"&&_o(Za)){var a=[];Xg(a,Za,s,Bf(s)),Hg(I2,a)}}function F2(s,a,o){s==="focusin"?(ey(),Qa=a,Za=o,Qa.attachEvent("onpropertychange",ty)):s==="focusout"&&ey()}function X2(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return _o(Za)}function Q2(s,a){if(s==="click")return _o(a)}function Z2(s,a){if(s==="input"||s==="change")return _o(a)}function J2(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var fn=typeof Object.is=="function"?Object.is:J2;function Ja(s,a){if(fn(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var o=Object.keys(s),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Ha.call(a,d)||!fn(s[d],a[d]))return!1}return!0}function ny(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function iy(s,a){var o=ny(s);s=0;for(var u;o;){if(o.nodeType===3){if(u=s+o.textContent.length,s<=a&&u>=a)return{node:o,offset:a-s};s=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ny(o)}}function sy(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?sy(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function ry(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var a=Oo(s.document);a instanceof s.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)s=a.contentWindow;else break;a=Oo(s.document)}return a}function Pf(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}var eA=vi&&"documentMode"in document&&11>=document.documentMode,Or=null,Yf=null,el=null,Kf=!1;function ay(s,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kf||Or==null||Or!==Oo(u)||(u=Or,"selectionStart"in u&&Pf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),el&&Ja(el,u)||(el=u,u=Cc(Yf,"onSelect"),0<u.length&&(a=new zo("onSelect","select",null,a,o),s.push({event:a,listeners:u}),a.target=Or)))}function $s(s,a){var o={};return o[s.toLowerCase()]=a.toLowerCase(),o["Webkit"+s]="webkit"+a,o["Moz"+s]="moz"+a,o}var Dr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},If={},ly={};vi&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Gs(s){if(If[s])return If[s];if(!Dr[s])return s;var a=Dr[s],o;for(o in a)if(a.hasOwnProperty(o)&&o in ly)return If[s]=a[o];return s}var oy=Gs("animationend"),cy=Gs("animationiteration"),uy=Gs("animationstart"),tA=Gs("transitionrun"),nA=Gs("transitionstart"),iA=Gs("transitioncancel"),fy=Gs("transitionend"),hy=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function $n(s,a){hy.set(s,a),Vs(a,[s])}var Ho=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},Tn=[],Nr=0,Xf=0;function qo(){for(var s=Nr,a=Xf=Nr=0;a<s;){var o=Tn[a];Tn[a++]=null;var u=Tn[a];Tn[a++]=null;var d=Tn[a];Tn[a++]=null;var m=Tn[a];if(Tn[a++]=null,u!==null&&d!==null){var b=u.pending;b===null?d.next=d:(d.next=b.next,b.next=d),u.pending=d}m!==0&&dy(o,d,m)}}function Vo(s,a,o,u){Tn[Nr++]=s,Tn[Nr++]=a,Tn[Nr++]=o,Tn[Nr++]=u,Xf|=u,s.lanes|=u,s=s.alternate,s!==null&&(s.lanes|=u)}function Qf(s,a,o,u){return Vo(s,a,o,u),Uo(s)}function Ws(s,a){return Vo(s,null,null,a),Uo(s)}function dy(s,a,o){s.lanes|=o;var u=s.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=s.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(s=m.stateNode,s===null||s._visibility&1||(d=!0)),s=m,m=m.return;return s.tag===3?(m=s.stateNode,d&&a!==null&&(d=31-It(o),s=m.hiddenUpdates,u=s[d],u===null?s[d]=[a]:u.push(a),a.lane=o|536870912),m):null}function Uo(s){if(50<kl)throw kl=0,ad=null,Error(i(185));for(var a=s.return;a!==null;)s=a,a=s.return;return s.tag===3?s.stateNode:null}var jr={};function sA(s,a,o,u){this.tag=s,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(s,a,o,u){return new sA(s,a,o,u)}function Zf(s){return s=s.prototype,!(!s||!s.isReactComponent)}function xi(s,a){var o=s.alternate;return o===null?(o=hn(s.tag,a,s.key,s.mode),o.elementType=s.elementType,o.type=s.type,o.stateNode=s.stateNode,o.alternate=s,s.alternate=o):(o.pendingProps=a,o.type=s.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=s.flags&65011712,o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,a=s.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=s.sibling,o.index=s.index,o.ref=s.ref,o.refCleanup=s.refCleanup,o}function py(s,a){s.flags&=65011714;var o=s.alternate;return o===null?(s.childLanes=0,s.lanes=a,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,a=o.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),s}function $o(s,a,o,u,d,m){var b=0;if(u=s,typeof s=="function")Zf(s)&&(b=1);else if(typeof s=="string")b=cC(s,o,J.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case ie:return s=hn(31,o,a,d),s.elementType=ie,s.lanes=m,s;case A:return Ps(o.children,d,m,a);case C:b=8,d|=24;break;case O:return s=hn(12,o,a,d|2),s.elementType=O,s.lanes=m,s;case R:return s=hn(13,o,a,d),s.elementType=R,s.lanes=m,s;case W:return s=hn(19,o,a,d),s.elementType=W,s.lanes=m,s;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case _:b=10;break e;case G:b=9;break e;case B:b=11;break e;case q:b=14;break e;case F:b=16,u=null;break e}b=29,o=Error(i(130,s===null?"null":typeof s,"")),u=null}return a=hn(b,o,a,d),a.elementType=s,a.type=u,a.lanes=m,a}function Ps(s,a,o,u){return s=hn(7,s,u,a),s.lanes=o,s}function Jf(s,a,o){return s=hn(6,s,null,a),s.lanes=o,s}function my(s){var a=hn(18,null,null,0);return a.stateNode=s,a}function eh(s,a,o){return a=hn(4,s.children!==null?s.children:[],s.key,a),a.lanes=o,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}var gy=new WeakMap;function Mn(s,a){if(typeof s=="object"&&s!==null){var o=gy.get(s);return o!==void 0?o:(a={value:s,source:a,stack:So(a)},gy.set(s,a),a)}return{value:s,source:a,stack:So(a)}}var Br=[],zr=0,Go=null,tl=0,En=[],Rn=0,Ki=null,Jn=1,ei="";function wi(s,a){Br[zr++]=tl,Br[zr++]=Go,Go=s,tl=a}function yy(s,a,o){En[Rn++]=Jn,En[Rn++]=ei,En[Rn++]=Ki,Ki=s;var u=Jn;s=ei;var d=32-It(u)-1;u&=~(1<<d),o+=1;var m=32-It(a)+d;if(30<m){var b=d-d%5;m=(u&(1<<b)-1).toString(32),u>>=b,d-=b,Jn=1<<32-It(a)+d|o<<d|u,ei=m+s}else Jn=1<<m|o<<d|u,ei=s}function th(s){s.return!==null&&(wi(s,1),yy(s,1,0))}function nh(s){for(;s===Go;)Go=Br[--zr],Br[zr]=null,tl=Br[--zr],Br[zr]=null;for(;s===Ki;)Ki=En[--Rn],En[Rn]=null,ei=En[--Rn],En[Rn]=null,Jn=En[--Rn],En[Rn]=null}function by(s,a){En[Rn++]=Jn,En[Rn++]=ei,En[Rn++]=Ki,Jn=a.id,ei=a.overflow,Ki=s}var jt=null,st=null,Be=!1,Ii=null,On=!1,ih=Error(i(519));function Fi(s){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(Mn(a,s)),ih}function vy(s){var a=s.stateNode,o=s.type,u=s.memoizedProps;switch(a[Nt]=s,a[en]=u,o){case"dialog":Oe("cancel",a),Oe("close",a);break;case"iframe":case"object":case"embed":Oe("load",a);break;case"video":case"audio":for(o=0;o<Al.length;o++)Oe(Al[o],a);break;case"source":Oe("error",a);break;case"img":case"image":case"link":Oe("error",a),Oe("load",a);break;case"details":Oe("toggle",a);break;case"input":Oe("invalid",a),Ng(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Oe("invalid",a);break;case"textarea":Oe("invalid",a),Bg(a,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||Lb(a.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",a),Oe("toggle",a)),u.onScroll!=null&&Oe("scroll",a),u.onScrollEnd!=null&&Oe("scrollend",a),u.onClick!=null&&(a.onclick=bi),a=!0):a=!1,a||Fi(s,!0)}function xy(s){for(jt=s.return;jt;)switch(jt.tag){case 5:case 31:case 13:On=!1;return;case 27:case 3:On=!0;return;default:jt=jt.return}}function Lr(s){if(s!==jt)return!1;if(!Be)return xy(s),Be=!0,!1;var a=s.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=s.type,o=!(o!=="form"&&o!=="button")||wd(s.type,s.memoizedProps)),o=!o),o&&st&&Fi(s),xy(s),a===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));st=Pb(s)}else if(a===31){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));st=Pb(s)}else a===27?(a=st,cs(s.type)?(s=Td,Td=null,st=s):st=a):st=jt?Nn(s.stateNode.nextSibling):null;return!0}function Ys(){st=jt=null,Be=!1}function sh(){var s=Ii;return s!==null&&(an===null?an=s:an.push.apply(an,s),Ii=null),s}function nl(s){Ii===null?Ii=[s]:Ii.push(s)}var rh=M(null),Ks=null,ki=null;function Xi(s,a,o){X(rh,a._currentValue),a._currentValue=o}function Si(s){s._currentValue=rh.current,U(rh)}function ah(s,a,o){for(;s!==null;){var u=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),s===o)break;s=s.return}}function lh(s,a,o,u){var d=s.child;for(d!==null&&(d.return=s);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=d;for(var T=0;T<a.length;T++)if(S.context===a[T]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),ah(m.return,o,s),u||(b=null);break e}m=S.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),ah(b,o,s),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===s){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function _r(s,a,o,u){s=null;for(var d=a,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var S=d.type;fn(d.pendingProps.value,b.value)||(s!==null?s.push(S):s=[S])}}else if(d===ke.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(s!==null?s.push(Rl):s=[Rl])}d=d.return}s!==null&&lh(a,s,o,u),a.flags|=262144}function Wo(s){for(s=s.firstContext;s!==null;){if(!fn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function Is(s){Ks=s,ki=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function Bt(s){return wy(Ks,s)}function Po(s,a){return Ks===null&&Is(s),wy(s,a)}function wy(s,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},ki===null){if(s===null)throw Error(i(308));ki=a,s.dependencies={lanes:0,firstContext:a},s.flags|=524288}else ki=ki.next=a;return o}var rA=typeof AbortController<"u"?AbortController:function(){var s=[],a=this.signal={aborted:!1,addEventListener:function(o,u){s.push(u)}};this.abort=function(){a.aborted=!0,s.forEach(function(o){return o()})}},aA=n.unstable_scheduleCallback,lA=n.unstable_NormalPriority,bt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oh(){return{controller:new rA,data:new Map,refCount:0}}function il(s){s.refCount--,s.refCount===0&&aA(lA,function(){s.controller.abort()})}var sl=null,ch=0,Hr=0,qr=null;function oA(s,a){if(sl===null){var o=sl=[];ch=0,Hr=hd(),qr={status:"pending",value:void 0,then:function(u){o.push(u)}}}return ch++,a.then(ky,ky),a}function ky(){if(--ch===0&&sl!==null){qr!==null&&(qr.status="fulfilled");var s=sl;sl=null,Hr=0,qr=null;for(var a=0;a<s.length;a++)(0,s[a])()}}function cA(s,a){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return s.then(function(){u.status="fulfilled",u.value=a;for(var d=0;d<o.length;d++)(0,o[d])(a)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var Sy=V.S;V.S=function(s,a){ab=Pt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&oA(s,a),Sy!==null&&Sy(s,a)};var Fs=M(null);function uh(){var s=Fs.current;return s!==null?s:et.pooledCache}function Yo(s,a){a===null?X(Fs,Fs.current):X(Fs,a.pool)}function Ay(){var s=uh();return s===null?null:{parent:bt._currentValue,pool:s}}var Vr=Error(i(460)),fh=Error(i(474)),Ko=Error(i(542)),Io={then:function(){}};function Cy(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Ty(s,a,o){switch(o=s[o],o===void 0?s.push(a):o!==a&&(a.then(bi,bi),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw s=a.reason,Ey(s),s;default:if(typeof a.status=="string")a.then(bi,bi);else{if(s=et,s!==null&&100<s.shellSuspendCounter)throw Error(i(482));s=a,s.status="pending",s.then(function(u){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=u}},function(u){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw s=a.reason,Ey(s),s}throw Qs=a,Vr}}function Xs(s){try{var a=s._init;return a(s._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Qs=o,Vr):o}}var Qs=null;function My(){if(Qs===null)throw Error(i(459));var s=Qs;return Qs=null,s}function Ey(s){if(s===Vr||s===Ko)throw Error(i(483))}var Ur=null,rl=0;function Fo(s){var a=rl;return rl+=1,Ur===null&&(Ur=[]),Ty(Ur,s,a)}function al(s,a){a=a.props.ref,s.ref=a!==void 0?a:null}function Xo(s,a){throw a.$$typeof===v?Error(i(525)):(s=Object.prototype.toString.call(a),Error(i(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s)))}function Ry(s){function a(N,E){if(s){var z=N.deletions;z===null?(N.deletions=[E],N.flags|=16):z.push(E)}}function o(N,E){if(!s)return null;for(;E!==null;)a(N,E),E=E.sibling;return null}function u(N){for(var E=new Map;N!==null;)N.key!==null?E.set(N.key,N):E.set(N.index,N),N=N.sibling;return E}function d(N,E){return N=xi(N,E),N.index=0,N.sibling=null,N}function m(N,E,z){return N.index=z,s?(z=N.alternate,z!==null?(z=z.index,z<E?(N.flags|=67108866,E):z):(N.flags|=67108866,E)):(N.flags|=1048576,E)}function b(N){return s&&N.alternate===null&&(N.flags|=67108866),N}function S(N,E,z,K){return E===null||E.tag!==6?(E=Jf(z,N.mode,K),E.return=N,E):(E=d(E,z),E.return=N,E)}function T(N,E,z,K){var pe=z.type;return pe===A?P(N,E,z.props.children,K,z.key):E!==null&&(E.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===F&&Xs(pe)===E.type)?(E=d(E,z.props),al(E,z),E.return=N,E):(E=$o(z.type,z.key,z.props,null,N.mode,K),al(E,z),E.return=N,E)}function L(N,E,z,K){return E===null||E.tag!==4||E.stateNode.containerInfo!==z.containerInfo||E.stateNode.implementation!==z.implementation?(E=eh(z,N.mode,K),E.return=N,E):(E=d(E,z.children||[]),E.return=N,E)}function P(N,E,z,K,pe){return E===null||E.tag!==7?(E=Ps(z,N.mode,K,pe),E.return=N,E):(E=d(E,z),E.return=N,E)}function I(N,E,z){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Jf(""+E,N.mode,z),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return z=$o(E.type,E.key,E.props,null,N.mode,z),al(z,E),z.return=N,z;case k:return E=eh(E,N.mode,z),E.return=N,E;case F:return E=Xs(E),I(N,E,z)}if(xe(E)||te(E))return E=Ps(E,N.mode,z,null),E.return=N,E;if(typeof E.then=="function")return I(N,Fo(E),z);if(E.$$typeof===_)return I(N,Po(N,E),z);Xo(N,E)}return null}function H(N,E,z,K){var pe=E!==null?E.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return pe!==null?null:S(N,E,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===pe?T(N,E,z,K):null;case k:return z.key===pe?L(N,E,z,K):null;case F:return z=Xs(z),H(N,E,z,K)}if(xe(z)||te(z))return pe!==null?null:P(N,E,z,K,null);if(typeof z.then=="function")return H(N,E,Fo(z),K);if(z.$$typeof===_)return H(N,E,Po(N,z),K);Xo(N,z)}return null}function $(N,E,z,K,pe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return N=N.get(z)||null,S(E,N,""+K,pe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return N=N.get(K.key===null?z:K.key)||null,T(E,N,K,pe);case k:return N=N.get(K.key===null?z:K.key)||null,L(E,N,K,pe);case F:return K=Xs(K),$(N,E,z,K,pe)}if(xe(K)||te(K))return N=N.get(z)||null,P(E,N,K,pe,null);if(typeof K.then=="function")return $(N,E,z,Fo(K),pe);if(K.$$typeof===_)return $(N,E,z,Po(E,K),pe);Xo(E,K)}return null}function le(N,E,z,K){for(var pe=null,Ge=null,oe=E,Ae=E=0,je=null;oe!==null&&Ae<z.length;Ae++){oe.index>Ae?(je=oe,oe=null):je=oe.sibling;var We=H(N,oe,z[Ae],K);if(We===null){oe===null&&(oe=je);break}s&&oe&&We.alternate===null&&a(N,oe),E=m(We,E,Ae),Ge===null?pe=We:Ge.sibling=We,Ge=We,oe=je}if(Ae===z.length)return o(N,oe),Be&&wi(N,Ae),pe;if(oe===null){for(;Ae<z.length;Ae++)oe=I(N,z[Ae],K),oe!==null&&(E=m(oe,E,Ae),Ge===null?pe=oe:Ge.sibling=oe,Ge=oe);return Be&&wi(N,Ae),pe}for(oe=u(oe);Ae<z.length;Ae++)je=$(oe,N,Ae,z[Ae],K),je!==null&&(s&&je.alternate!==null&&oe.delete(je.key===null?Ae:je.key),E=m(je,E,Ae),Ge===null?pe=je:Ge.sibling=je,Ge=je);return s&&oe.forEach(function(ps){return a(N,ps)}),Be&&wi(N,Ae),pe}function ge(N,E,z,K){if(z==null)throw Error(i(151));for(var pe=null,Ge=null,oe=E,Ae=E=0,je=null,We=z.next();oe!==null&&!We.done;Ae++,We=z.next()){oe.index>Ae?(je=oe,oe=null):je=oe.sibling;var ps=H(N,oe,We.value,K);if(ps===null){oe===null&&(oe=je);break}s&&oe&&ps.alternate===null&&a(N,oe),E=m(ps,E,Ae),Ge===null?pe=ps:Ge.sibling=ps,Ge=ps,oe=je}if(We.done)return o(N,oe),Be&&wi(N,Ae),pe;if(oe===null){for(;!We.done;Ae++,We=z.next())We=I(N,We.value,K),We!==null&&(E=m(We,E,Ae),Ge===null?pe=We:Ge.sibling=We,Ge=We);return Be&&wi(N,Ae),pe}for(oe=u(oe);!We.done;Ae++,We=z.next())We=$(oe,N,Ae,We.value,K),We!==null&&(s&&We.alternate!==null&&oe.delete(We.key===null?Ae:We.key),E=m(We,E,Ae),Ge===null?pe=We:Ge.sibling=We,Ge=We);return s&&oe.forEach(function(xC){return a(N,xC)}),Be&&wi(N,Ae),pe}function Qe(N,E,z,K){if(typeof z=="object"&&z!==null&&z.type===A&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var pe=z.key;E!==null;){if(E.key===pe){if(pe=z.type,pe===A){if(E.tag===7){o(N,E.sibling),K=d(E,z.props.children),K.return=N,N=K;break e}}else if(E.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===F&&Xs(pe)===E.type){o(N,E.sibling),K=d(E,z.props),al(K,z),K.return=N,N=K;break e}o(N,E);break}else a(N,E);E=E.sibling}z.type===A?(K=Ps(z.props.children,N.mode,K,z.key),K.return=N,N=K):(K=$o(z.type,z.key,z.props,null,N.mode,K),al(K,z),K.return=N,N=K)}return b(N);case k:e:{for(pe=z.key;E!==null;){if(E.key===pe)if(E.tag===4&&E.stateNode.containerInfo===z.containerInfo&&E.stateNode.implementation===z.implementation){o(N,E.sibling),K=d(E,z.children||[]),K.return=N,N=K;break e}else{o(N,E);break}else a(N,E);E=E.sibling}K=eh(z,N.mode,K),K.return=N,N=K}return b(N);case F:return z=Xs(z),Qe(N,E,z,K)}if(xe(z))return le(N,E,z,K);if(te(z)){if(pe=te(z),typeof pe!="function")throw Error(i(150));return z=pe.call(z),ge(N,E,z,K)}if(typeof z.then=="function")return Qe(N,E,Fo(z),K);if(z.$$typeof===_)return Qe(N,E,Po(N,z),K);Xo(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,E!==null&&E.tag===6?(o(N,E.sibling),K=d(E,z),K.return=N,N=K):(o(N,E),K=Jf(z,N.mode,K),K.return=N,N=K),b(N)):o(N,E)}return function(N,E,z,K){try{rl=0;var pe=Qe(N,E,z,K);return Ur=null,pe}catch(oe){if(oe===Vr||oe===Ko)throw oe;var Ge=hn(29,oe,null,N.mode);return Ge.lanes=K,Ge.return=N,Ge}}}var Zs=Ry(!0),Oy=Ry(!1),Qi=!1;function hh(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dh(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function Zi(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Ji(s,a,o){var u=s.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var d=u.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a,a=Uo(s),dy(s,null,o),a}return Vo(s,u,a,o),Uo(s)}function ll(s,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=s.pendingLanes,o|=u,a.lanes=o,wg(s,o)}}function ph(s,a){var o=s.updateQueue,u=s.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=a:m=m.next=a}else d=m=a;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},s.updateQueue=o;return}s=o.lastBaseUpdate,s===null?o.firstBaseUpdate=a:s.next=a,o.lastBaseUpdate=a}var mh=!1;function ol(){if(mh){var s=qr;if(s!==null)throw s}}function cl(s,a,o,u){mh=!1;var d=s.updateQueue;Qi=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var T=S,L=T.next;T.next=null,b===null?m=L:b.next=L,b=T;var P=s.alternate;P!==null&&(P=P.updateQueue,S=P.lastBaseUpdate,S!==b&&(S===null?P.firstBaseUpdate=L:S.next=L,P.lastBaseUpdate=T))}if(m!==null){var I=d.baseState;b=0,P=L=T=null,S=m;do{var H=S.lane&-536870913,$=H!==S.lane;if($?(Ne&H)===H:(u&H)===H){H!==0&&H===Hr&&(mh=!0),P!==null&&(P=P.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var le=s,ge=S;H=a;var Qe=o;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){I=le.call(Qe,I,H);break e}I=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,H=typeof le=="function"?le.call(Qe,I,H):le,H==null)break e;I=y({},I,H);break e;case 2:Qi=!0}}H=S.callback,H!==null&&(s.flags|=64,$&&(s.flags|=8192),$=d.callbacks,$===null?d.callbacks=[H]:$.push(H))}else $={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},P===null?(L=P=$,T=I):P=P.next=$,b|=H;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;$=S,S=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);P===null&&(T=I),d.baseState=T,d.firstBaseUpdate=L,d.lastBaseUpdate=P,m===null&&(d.shared.lanes=0),ss|=b,s.lanes=b,s.memoizedState=I}}function Dy(s,a){if(typeof s!="function")throw Error(i(191,s));s.call(a)}function Ny(s,a){var o=s.callbacks;if(o!==null)for(s.callbacks=null,s=0;s<o.length;s++)Dy(o[s],a)}var $r=M(null),Qo=M(0);function jy(s,a){s=Ni,X(Qo,s),X($r,a),Ni=s|a.baseLanes}function gh(){X(Qo,Ni),X($r,$r.current)}function yh(){Ni=Qo.current,U($r),U(Qo)}var dn=M(null),Dn=null;function es(s){var a=s.alternate;X(pt,pt.current&1),X(dn,s),Dn===null&&(a===null||$r.current!==null||a.memoizedState!==null)&&(Dn=s)}function bh(s){X(pt,pt.current),X(dn,s),Dn===null&&(Dn=s)}function By(s){s.tag===22?(X(pt,pt.current),X(dn,s),Dn===null&&(Dn=s)):ts()}function ts(){X(pt,pt.current),X(dn,dn.current)}function pn(s){U(dn),Dn===s&&(Dn=null),U(pt)}var pt=M(0);function Zo(s){for(var a=s;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ad(o)||Cd(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ai=0,Se=null,Fe=null,vt=null,Jo=!1,Gr=!1,Js=!1,ec=0,ul=0,Wr=null,uA=0;function ct(){throw Error(i(321))}function vh(s,a){if(a===null)return!1;for(var o=0;o<a.length&&o<s.length;o++)if(!fn(s[o],a[o]))return!1;return!0}function xh(s,a,o,u,d,m){return Ai=m,Se=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=s===null||s.memoizedState===null?y0:zh,Js=!1,m=o(u,d),Js=!1,Gr&&(m=Ly(a,o,u,d)),zy(s),m}function zy(s){V.H=dl;var a=Fe!==null&&Fe.next!==null;if(Ai=0,vt=Fe=Se=null,Jo=!1,ul=0,Wr=null,a)throw Error(i(300));s===null||xt||(s=s.dependencies,s!==null&&Wo(s)&&(xt=!0))}function Ly(s,a,o,u){Se=s;var d=0;do{if(Gr&&(Wr=null),ul=0,Gr=!1,25<=d)throw Error(i(301));if(d+=1,vt=Fe=null,s.updateQueue!=null){var m=s.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}V.H=b0,m=a(o,u)}while(Gr);return m}function fA(){var s=V.H,a=s.useState()[0];return a=typeof a.then=="function"?fl(a):a,s=s.useState()[0],(Fe!==null?Fe.memoizedState:null)!==s&&(Se.flags|=1024),a}function wh(){var s=ec!==0;return ec=0,s}function kh(s,a,o){a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~o}function Sh(s){if(Jo){for(s=s.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Jo=!1}Ai=0,vt=Fe=Se=null,Gr=!1,ul=ec=0,Wr=null}function Ft(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Se.memoizedState=vt=s:vt=vt.next=s,vt}function mt(){if(Fe===null){var s=Se.alternate;s=s!==null?s.memoizedState:null}else s=Fe.next;var a=vt===null?Se.memoizedState:vt.next;if(a!==null)vt=a,Fe=s;else{if(s===null)throw Se.alternate===null?Error(i(467)):Error(i(310));Fe=s,s={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},vt===null?Se.memoizedState=vt=s:vt=vt.next=s}return vt}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(s){var a=ul;return ul+=1,Wr===null&&(Wr=[]),s=Ty(Wr,s,a),a=Se,(vt===null?a.memoizedState:vt.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?y0:zh),s}function nc(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return fl(s);if(s.$$typeof===_)return Bt(s)}throw Error(i(438,String(s)))}function Ah(s){var a=null,o=Se.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=Se.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=tc(),Se.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(s),u=0;u<s;u++)o[u]=he;return a.index++,o}function Ci(s,a){return typeof a=="function"?a(s):a}function ic(s){var a=mt();return Ch(a,Fe,s)}function Ch(s,a,o){var u=s.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=s.baseQueue,m=u.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}a.baseQueue=d=m,u.pending=null}if(m=s.baseState,d===null)s.memoizedState=m;else{a=d.next;var S=b=null,T=null,L=a,P=!1;do{var I=L.lane&-536870913;if(I!==L.lane?(Ne&I)===I:(Ai&I)===I){var H=L.revertLane;if(H===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),I===Hr&&(P=!0);else if((Ai&H)===H){L=L.next,H===Hr&&(P=!0);continue}else I={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(S=T=I,b=m):T=T.next=I,Se.lanes|=H,ss|=H;I=L.action,Js&&o(m,I),m=L.hasEagerState?L.eagerState:o(m,I)}else H={lane:I,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(S=T=H,b=m):T=T.next=H,Se.lanes|=I,ss|=I;L=L.next}while(L!==null&&L!==a);if(T===null?b=m:T.next=S,!fn(m,s.memoizedState)&&(xt=!0,P&&(o=qr,o!==null)))throw o;s.memoizedState=m,s.baseState=b,s.baseQueue=T,u.lastRenderedState=m}return d===null&&(u.lanes=0),[s.memoizedState,u.dispatch]}function Th(s){var a=mt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=s;var u=o.dispatch,d=o.pending,m=a.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=s(m,b.action),b=b.next;while(b!==d);fn(m,a.memoizedState)||(xt=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,u]}function _y(s,a,o){var u=Se,d=mt(),m=Be;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var b=!fn((Fe||d).memoizedState,o);if(b&&(d.memoizedState=o,xt=!0),d=d.queue,Rh(Vy.bind(null,u,d,s),[s]),d.getSnapshot!==a||b||vt!==null&&vt.memoizedState.tag&1){if(u.flags|=2048,Pr(9,{destroy:void 0},qy.bind(null,u,d,o,a),null),et===null)throw Error(i(349));m||(Ai&127)!==0||Hy(u,a,o)}return o}function Hy(s,a,o){s.flags|=16384,s={getSnapshot:a,value:o},a=Se.updateQueue,a===null?(a=tc(),Se.updateQueue=a,a.stores=[s]):(o=a.stores,o===null?a.stores=[s]:o.push(s))}function qy(s,a,o,u){a.value=o,a.getSnapshot=u,Uy(a)&&$y(s)}function Vy(s,a,o){return o(function(){Uy(a)&&$y(s)})}function Uy(s){var a=s.getSnapshot;s=s.value;try{var o=a();return!fn(s,o)}catch{return!0}}function $y(s){var a=Ws(s,2);a!==null&&ln(a,s,2)}function Mh(s){var a=Ft();if(typeof s=="function"){var o=s;if(s=o(),Js){Un(!0);try{o()}finally{Un(!1)}}}return a.memoizedState=a.baseState=s,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:s},a}function Gy(s,a,o,u){return s.baseState=o,Ch(s,Fe,typeof u=="function"?u:Ci)}function hA(s,a,o,u,d){if(ac(s))throw Error(i(485));if(s=a.action,s!==null){var m={payload:d,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};V.T!==null?o(!0):m.isTransition=!1,u(m),o=a.pending,o===null?(m.next=a.pending=m,Wy(a,m)):(m.next=o.next,a.pending=o.next=m)}}function Wy(s,a){var o=a.action,u=a.payload,d=s.state;if(a.isTransition){var m=V.T,b={};V.T=b;try{var S=o(d,u),T=V.S;T!==null&&T(b,S),Py(s,a,S)}catch(L){Eh(s,a,L)}finally{m!==null&&b.types!==null&&(m.types=b.types),V.T=m}}else try{m=o(d,u),Py(s,a,m)}catch(L){Eh(s,a,L)}}function Py(s,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Yy(s,a,u)},function(u){return Eh(s,a,u)}):Yy(s,a,o)}function Yy(s,a,o){a.status="fulfilled",a.value=o,Ky(a),s.state=o,a=s.pending,a!==null&&(o=a.next,o===a?s.pending=null:(o=o.next,a.next=o,Wy(s,o)))}function Eh(s,a,o){var u=s.pending;if(s.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,Ky(a),a=a.next;while(a!==u)}s.action=null}function Ky(s){s=s.listeners;for(var a=0;a<s.length;a++)(0,s[a])()}function Iy(s,a){return a}function Fy(s,a){if(Be){var o=et.formState;if(o!==null){e:{var u=Se;if(Be){if(st){t:{for(var d=st,m=On;d.nodeType!==8;){if(!m){d=null;break t}if(d=Nn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){st=Nn(d.nextSibling),u=d.data==="F!";break e}}Fi(u)}u=!1}u&&(a=o[0])}}return o=Ft(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iy,lastRenderedState:a},o.queue=u,o=p0.bind(null,Se,u),u.dispatch=o,u=Mh(!1),m=Bh.bind(null,Se,!1,u.queue),u=Ft(),d={state:a,dispatch:null,action:s,pending:null},u.queue=d,o=hA.bind(null,Se,d,m,o),d.dispatch=o,u.memoizedState=s,[a,o,!1]}function Xy(s){var a=mt();return Qy(a,Fe,s)}function Qy(s,a,o){if(a=Ch(s,a,Iy)[0],s=ic(Ci)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=fl(a)}catch(b){throw b===Vr?Ko:b}else u=a;a=mt();var d=a.queue,m=d.dispatch;return o!==a.memoizedState&&(Se.flags|=2048,Pr(9,{destroy:void 0},dA.bind(null,d,o),null)),[u,m,s]}function dA(s,a){s.action=a}function Zy(s){var a=mt(),o=Fe;if(o!==null)return Qy(a,o,s);mt(),a=a.memoizedState,o=mt();var u=o.queue.dispatch;return o.memoizedState=s,[a,u,!1]}function Pr(s,a,o,u){return s={tag:s,create:o,deps:u,inst:a,next:null},a=Se.updateQueue,a===null&&(a=tc(),Se.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=s.next=s:(u=o.next,o.next=s,s.next=u,a.lastEffect=s),s}function Jy(){return mt().memoizedState}function sc(s,a,o,u){var d=Ft();Se.flags|=s,d.memoizedState=Pr(1|a,{destroy:void 0},o,u===void 0?null:u)}function rc(s,a,o,u){var d=mt();u=u===void 0?null:u;var m=d.memoizedState.inst;Fe!==null&&u!==null&&vh(u,Fe.memoizedState.deps)?d.memoizedState=Pr(a,m,o,u):(Se.flags|=s,d.memoizedState=Pr(1|a,m,o,u))}function e0(s,a){sc(8390656,8,s,a)}function Rh(s,a){rc(2048,8,s,a)}function pA(s){Se.flags|=4;var a=Se.updateQueue;if(a===null)a=tc(),Se.updateQueue=a,a.events=[s];else{var o=a.events;o===null?a.events=[s]:o.push(s)}}function t0(s){var a=mt().memoizedState;return pA({ref:a,nextImpl:s}),function(){if((Ye&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function n0(s,a){return rc(4,2,s,a)}function i0(s,a){return rc(4,4,s,a)}function s0(s,a){if(typeof a=="function"){s=s();var o=a(s);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function r0(s,a,o){o=o!=null?o.concat([s]):null,rc(4,4,s0.bind(null,a,s),o)}function Oh(){}function a0(s,a){var o=mt();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&vh(a,u[1])?u[0]:(o.memoizedState=[s,a],s)}function l0(s,a){var o=mt();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&vh(a,u[1]))return u[0];if(u=s(),Js){Un(!0);try{s()}finally{Un(!1)}}return o.memoizedState=[u,a],u}function Dh(s,a,o){return o===void 0||(Ai&1073741824)!==0&&(Ne&261930)===0?s.memoizedState=a:(s.memoizedState=o,s=ob(),Se.lanes|=s,ss|=s,o)}function o0(s,a,o,u){return fn(o,a)?o:$r.current!==null?(s=Dh(s,o,u),fn(s,a)||(xt=!0),s):(Ai&42)===0||(Ai&1073741824)!==0&&(Ne&261930)===0?(xt=!0,s.memoizedState=o):(s=ob(),Se.lanes|=s,ss|=s,a)}function c0(s,a,o,u,d){var m=Q.p;Q.p=m!==0&&8>m?m:8;var b=V.T,S={};V.T=S,Bh(s,!1,a,o);try{var T=d(),L=V.S;if(L!==null&&L(S,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var P=cA(T,u);hl(s,a,P,yn(s))}else hl(s,a,u,yn(s))}catch(I){hl(s,a,{then:function(){},status:"rejected",reason:I},yn())}finally{Q.p=m,b!==null&&S.types!==null&&(b.types=S.types),V.T=b}}function mA(){}function Nh(s,a,o,u){if(s.tag!==5)throw Error(i(476));var d=u0(s).queue;c0(s,d,a,Z,o===null?mA:function(){return f0(s),o(u)})}function u0(s){var a=s.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:Z},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:o},next:null},s.memoizedState=a,s=s.alternate,s!==null&&(s.memoizedState=a),a}function f0(s){var a=u0(s);a.next===null&&(a=s.alternate.memoizedState),hl(s,a.next.queue,{},yn())}function jh(){return Bt(Rl)}function h0(){return mt().memoizedState}function d0(){return mt().memoizedState}function gA(s){for(var a=s.return;a!==null;){switch(a.tag){case 24:case 3:var o=yn();s=Zi(o);var u=Ji(a,s,o);u!==null&&(ln(u,a,o),ll(u,a,o)),a={cache:oh()},s.payload=a;return}a=a.return}}function yA(s,a,o){var u=yn();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ac(s)?m0(a,o):(o=Qf(s,a,o,u),o!==null&&(ln(o,s,u),g0(o,a,u)))}function p0(s,a,o){var u=yn();hl(s,a,o,u)}function hl(s,a,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ac(s))m0(a,d);else{var m=s.alternate;if(s.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var b=a.lastRenderedState,S=m(b,o);if(d.hasEagerState=!0,d.eagerState=S,fn(S,b))return Vo(s,a,d,0),et===null&&qo(),!1}catch{}if(o=Qf(s,a,d,u),o!==null)return ln(o,s,u),g0(o,a,u),!0}return!1}function Bh(s,a,o,u){if(u={lane:2,revertLane:hd(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},ac(s)){if(a)throw Error(i(479))}else a=Qf(s,o,u,2),a!==null&&ln(a,s,2)}function ac(s){var a=s.alternate;return s===Se||a!==null&&a===Se}function m0(s,a){Gr=Jo=!0;var o=s.pending;o===null?a.next=a:(a.next=o.next,o.next=a),s.pending=a}function g0(s,a,o){if((o&4194048)!==0){var u=a.lanes;u&=s.pendingLanes,o|=u,a.lanes=o,wg(s,o)}}var dl={readContext:Bt,use:nc,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};dl.useEffectEvent=ct;var y0={readContext:Bt,use:nc,useCallback:function(s,a){return Ft().memoizedState=[s,a===void 0?null:a],s},useContext:Bt,useEffect:e0,useImperativeHandle:function(s,a,o){o=o!=null?o.concat([s]):null,sc(4194308,4,s0.bind(null,a,s),o)},useLayoutEffect:function(s,a){return sc(4194308,4,s,a)},useInsertionEffect:function(s,a){sc(4,2,s,a)},useMemo:function(s,a){var o=Ft();a=a===void 0?null:a;var u=s();if(Js){Un(!0);try{s()}finally{Un(!1)}}return o.memoizedState=[u,a],u},useReducer:function(s,a,o){var u=Ft();if(o!==void 0){var d=o(a);if(Js){Un(!0);try{o(a)}finally{Un(!1)}}}else d=a;return u.memoizedState=u.baseState=d,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:d},u.queue=s,s=s.dispatch=yA.bind(null,Se,s),[u.memoizedState,s]},useRef:function(s){var a=Ft();return s={current:s},a.memoizedState=s},useState:function(s){s=Mh(s);var a=s.queue,o=p0.bind(null,Se,a);return a.dispatch=o,[s.memoizedState,o]},useDebugValue:Oh,useDeferredValue:function(s,a){var o=Ft();return Dh(o,s,a)},useTransition:function(){var s=Mh(!1);return s=c0.bind(null,Se,s.queue,!0,!1),Ft().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,a,o){var u=Se,d=Ft();if(Be){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),et===null)throw Error(i(349));(Ne&127)!==0||Hy(u,a,o)}d.memoizedState=o;var m={value:o,getSnapshot:a};return d.queue=m,e0(Vy.bind(null,u,m,s),[s]),u.flags|=2048,Pr(9,{destroy:void 0},qy.bind(null,u,m,o,a),null),o},useId:function(){var s=Ft(),a=et.identifierPrefix;if(Be){var o=ei,u=Jn;o=(u&~(1<<32-It(u)-1)).toString(32)+o,a="_"+a+"R_"+o,o=ec++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=uA++,a="_"+a+"r_"+o.toString(32)+"_";return s.memoizedState=a},useHostTransitionStatus:jh,useFormState:Fy,useActionState:Fy,useOptimistic:function(s){var a=Ft();a.memoizedState=a.baseState=s;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Bh.bind(null,Se,!0,o),o.dispatch=a,[s,a]},useMemoCache:Ah,useCacheRefresh:function(){return Ft().memoizedState=gA.bind(null,Se)},useEffectEvent:function(s){var a=Ft(),o={impl:s};return a.memoizedState=o,function(){if((Ye&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},zh={readContext:Bt,use:nc,useCallback:a0,useContext:Bt,useEffect:Rh,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:l0,useReducer:ic,useRef:Jy,useState:function(){return ic(Ci)},useDebugValue:Oh,useDeferredValue:function(s,a){var o=mt();return o0(o,Fe.memoizedState,s,a)},useTransition:function(){var s=ic(Ci)[0],a=mt().memoizedState;return[typeof s=="boolean"?s:fl(s),a]},useSyncExternalStore:_y,useId:h0,useHostTransitionStatus:jh,useFormState:Xy,useActionState:Xy,useOptimistic:function(s,a){var o=mt();return Gy(o,Fe,s,a)},useMemoCache:Ah,useCacheRefresh:d0};zh.useEffectEvent=t0;var b0={readContext:Bt,use:nc,useCallback:a0,useContext:Bt,useEffect:Rh,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:l0,useReducer:Th,useRef:Jy,useState:function(){return Th(Ci)},useDebugValue:Oh,useDeferredValue:function(s,a){var o=mt();return Fe===null?Dh(o,s,a):o0(o,Fe.memoizedState,s,a)},useTransition:function(){var s=Th(Ci)[0],a=mt().memoizedState;return[typeof s=="boolean"?s:fl(s),a]},useSyncExternalStore:_y,useId:h0,useHostTransitionStatus:jh,useFormState:Zy,useActionState:Zy,useOptimistic:function(s,a){var o=mt();return Fe!==null?Gy(o,Fe,s,a):(o.baseState=s,[s,o.queue.dispatch])},useMemoCache:Ah,useCacheRefresh:d0};b0.useEffectEvent=t0;function Lh(s,a,o,u){a=s.memoizedState,o=o(u,a),o=o==null?a:y({},a,o),s.memoizedState=o,s.lanes===0&&(s.updateQueue.baseState=o)}var _h={enqueueSetState:function(s,a,o){s=s._reactInternals;var u=yn(),d=Zi(u);d.payload=a,o!=null&&(d.callback=o),a=Ji(s,d,u),a!==null&&(ln(a,s,u),ll(a,s,u))},enqueueReplaceState:function(s,a,o){s=s._reactInternals;var u=yn(),d=Zi(u);d.tag=1,d.payload=a,o!=null&&(d.callback=o),a=Ji(s,d,u),a!==null&&(ln(a,s,u),ll(a,s,u))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var o=yn(),u=Zi(o);u.tag=2,a!=null&&(u.callback=a),a=Ji(s,u,o),a!==null&&(ln(a,s,o),ll(a,s,o))}};function v0(s,a,o,u,d,m,b){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(u,m,b):a.prototype&&a.prototype.isPureReactComponent?!Ja(o,u)||!Ja(d,m):!0}function x0(s,a,o,u){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==s&&_h.enqueueReplaceState(a,a.state,null)}function er(s,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(s=s.defaultProps){o===a&&(o=y({},o));for(var d in s)o[d]===void 0&&(o[d]=s[d])}return o}function w0(s){Ho(s)}function k0(s){console.error(s)}function S0(s){Ho(s)}function lc(s,a){try{var o=s.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function A0(s,a,o){try{var u=s.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Hh(s,a,o){return o=Zi(o),o.tag=3,o.payload={element:null},o.callback=function(){lc(s,a)},o}function C0(s){return s=Zi(s),s.tag=3,s}function T0(s,a,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;s.payload=function(){return d(m)},s.callback=function(){A0(a,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(s.callback=function(){A0(a,o,u),typeof d!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function bA(s,a,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&_r(a,o,d,!0),o=dn.current,o!==null){switch(o.tag){case 31:case 13:return Dn===null?vc():o.alternate===null&&ut===0&&(ut=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Io?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),cd(s,u,d)),!1;case 22:return o.flags|=65536,u===Io?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),cd(s,u,d)),!1}throw Error(i(435,o.tag))}return cd(s,u,d),vc(),!1}if(Be)return a=dn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,u!==ih&&(s=Error(i(422),{cause:u}),nl(Mn(s,o)))):(u!==ih&&(a=Error(i(423),{cause:u}),nl(Mn(a,o))),s=s.current.alternate,s.flags|=65536,d&=-d,s.lanes|=d,u=Mn(u,o),d=Hh(s.stateNode,u,d),ph(s,d),ut!==4&&(ut=2)),!1;var m=Error(i(520),{cause:u});if(m=Mn(m,o),wl===null?wl=[m]:wl.push(m),ut!==4&&(ut=2),a===null)return!0;u=Mn(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,s=d&-d,o.lanes|=s,s=Hh(o.stateNode,u,s),ph(o,s),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rs===null||!rs.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=C0(d),T0(d,s,o,u),ph(o,d),!1}o=o.return}while(o!==null);return!1}var qh=Error(i(461)),xt=!1;function zt(s,a,o,u){a.child=s===null?Oy(a,null,o,u):Zs(a,s.child,o,u)}function M0(s,a,o,u,d){o=o.render;var m=a.ref;if("ref"in u){var b={};for(var S in u)S!=="ref"&&(b[S]=u[S])}else b=u;return Is(a),u=xh(s,a,o,b,m,d),S=wh(),s!==null&&!xt?(kh(s,a,d),Ti(s,a,d)):(Be&&S&&th(a),a.flags|=1,zt(s,a,u,d),a.child)}function E0(s,a,o,u,d){if(s===null){var m=o.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,R0(s,a,m,u,d)):(s=$o(o.type,null,u,a,a.mode,d),s.ref=a.ref,s.return=a,a.child=s)}if(m=s.child,!Kh(s,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ja,o(b,u)&&s.ref===a.ref)return Ti(s,a,d)}return a.flags|=1,s=xi(m,u),s.ref=a.ref,s.return=a,a.child=s}function R0(s,a,o,u,d){if(s!==null){var m=s.memoizedProps;if(Ja(m,u)&&s.ref===a.ref)if(xt=!1,a.pendingProps=u=m,Kh(s,d))(s.flags&131072)!==0&&(xt=!0);else return a.lanes=s.lanes,Ti(s,a,d)}return Vh(s,a,o,u,d)}function O0(s,a,o,u){var d=u.children,m=s!==null?s.memoizedState:null;if(s===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,s!==null){for(u=a.child=s.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,a.child=null;return D0(s,a,m,o,u)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},s!==null&&Yo(a,m!==null?m.cachePool:null),m!==null?jy(a,m):gh(),By(a);else return u=a.lanes=536870912,D0(s,a,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Yo(a,m.cachePool),jy(a,m),ts(),a.memoizedState=null):(s!==null&&Yo(a,null),gh(),ts());return zt(s,a,d,o),a.child}function pl(s,a){return s!==null&&s.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function D0(s,a,o,u,d){var m=uh();return m=m===null?null:{parent:bt._currentValue,pool:m},a.memoizedState={baseLanes:o,cachePool:m},s!==null&&Yo(a,null),gh(),By(a),s!==null&&_r(s,a,u,!0),a.childLanes=d,null}function oc(s,a){return a=uc({mode:a.mode,children:a.children},s.mode),a.ref=s.ref,s.child=a,a.return=s,a}function N0(s,a,o){return Zs(a,s.child,null,o),s=oc(a,a.pendingProps),s.flags|=2,pn(a),a.memoizedState=null,s}function vA(s,a,o){var u=a.pendingProps,d=(a.flags&128)!==0;if(a.flags&=-129,s===null){if(Be){if(u.mode==="hidden")return s=oc(a,u),a.lanes=536870912,pl(null,s);if(bh(a),(s=st)?(s=Wb(s,On),s=s!==null&&s.data==="&"?s:null,s!==null&&(a.memoizedState={dehydrated:s,treeContext:Ki!==null?{id:Jn,overflow:ei}:null,retryLane:536870912,hydrationErrors:null},o=my(s),o.return=a,a.child=o,jt=a,st=null)):s=null,s===null)throw Fi(a);return a.lanes=536870912,null}return oc(a,u)}var m=s.memoizedState;if(m!==null){var b=m.dehydrated;if(bh(a),d)if(a.flags&256)a.flags&=-257,a=N0(s,a,o);else if(a.memoizedState!==null)a.child=s.child,a.flags|=128,a=null;else throw Error(i(558));else if(xt||_r(s,a,o,!1),d=(o&s.childLanes)!==0,xt||d){if(u=et,u!==null&&(b=kg(u,o),b!==0&&b!==m.retryLane))throw m.retryLane=b,Ws(s,b),ln(u,s,b),qh;vc(),a=N0(s,a,o)}else s=m.treeContext,st=Nn(b.nextSibling),jt=a,Be=!0,Ii=null,On=!1,s!==null&&by(a,s),a=oc(a,u),a.flags|=4096;return a}return s=xi(s.child,{mode:u.mode,children:u.children}),s.ref=a.ref,a.child=s,s.return=a,s}function cc(s,a){var o=a.ref;if(o===null)s!==null&&s.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(s===null||s.ref!==o)&&(a.flags|=4194816)}}function Vh(s,a,o,u,d){return Is(a),o=xh(s,a,o,u,void 0,d),u=wh(),s!==null&&!xt?(kh(s,a,d),Ti(s,a,d)):(Be&&u&&th(a),a.flags|=1,zt(s,a,o,d),a.child)}function j0(s,a,o,u,d,m){return Is(a),a.updateQueue=null,o=Ly(a,u,o,d),zy(s),u=wh(),s!==null&&!xt?(kh(s,a,m),Ti(s,a,m)):(Be&&u&&th(a),a.flags|=1,zt(s,a,o,m),a.child)}function B0(s,a,o,u,d){if(Is(a),a.stateNode===null){var m=jr,b=o.contextType;typeof b=="object"&&b!==null&&(m=Bt(b)),m=new o(u,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_h,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=u,m.state=a.memoizedState,m.refs={},hh(a),b=o.contextType,m.context=typeof b=="object"&&b!==null?Bt(b):jr,m.state=a.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Lh(a,o,b,u),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&_h.enqueueReplaceState(m,m.state,null),cl(a,u,m,d),ol(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(s===null){m=a.stateNode;var S=a.memoizedProps,T=er(o,S);m.props=T;var L=m.context,P=o.contextType;b=jr,typeof P=="object"&&P!==null&&(b=Bt(P));var I=o.getDerivedStateFromProps;P=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=a.pendingProps!==S,P||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||L!==b)&&x0(a,m,u,b),Qi=!1;var H=a.memoizedState;m.state=H,cl(a,u,m,d),ol(),L=a.memoizedState,S||H!==L||Qi?(typeof I=="function"&&(Lh(a,o,I,u),L=a.memoizedState),(T=Qi||v0(a,o,T,u,H,L,b))?(P||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=L),m.props=u,m.state=L,m.context=b,u=T):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{m=a.stateNode,dh(s,a),b=a.memoizedProps,P=er(o,b),m.props=P,I=a.pendingProps,H=m.context,L=o.contextType,T=jr,typeof L=="object"&&L!==null&&(T=Bt(L)),S=o.getDerivedStateFromProps,(L=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==I||H!==T)&&x0(a,m,u,T),Qi=!1,H=a.memoizedState,m.state=H,cl(a,u,m,d),ol();var $=a.memoizedState;b!==I||H!==$||Qi||s!==null&&s.dependencies!==null&&Wo(s.dependencies)?(typeof S=="function"&&(Lh(a,o,S,u),$=a.memoizedState),(P=Qi||v0(a,o,P,u,H,$,T)||s!==null&&s.dependencies!==null&&Wo(s.dependencies))?(L||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,$,T),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,$,T)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===s.memoizedProps&&H===s.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===s.memoizedProps&&H===s.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=$),m.props=u,m.state=$,m.context=T,u=P):(typeof m.componentDidUpdate!="function"||b===s.memoizedProps&&H===s.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===s.memoizedProps&&H===s.memoizedState||(a.flags|=1024),u=!1)}return m=u,cc(s,a),u=(a.flags&128)!==0,m||u?(m=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,s!==null&&u?(a.child=Zs(a,s.child,null,d),a.child=Zs(a,null,o,d)):zt(s,a,o,d),a.memoizedState=m.state,s=a.child):s=Ti(s,a,d),s}function z0(s,a,o,u){return Ys(),a.flags|=256,zt(s,a,o,u),a.child}var Uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $h(s){return{baseLanes:s,cachePool:Ay()}}function Gh(s,a,o){return s=s!==null?s.childLanes&~o:0,a&&(s|=gn),s}function L0(s,a,o){var u=a.pendingProps,d=!1,m=(a.flags&128)!==0,b;if((b=m)||(b=s!==null&&s.memoizedState===null?!1:(pt.current&2)!==0),b&&(d=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,s===null){if(Be){if(d?es(a):ts(),(s=st)?(s=Wb(s,On),s=s!==null&&s.data!=="&"?s:null,s!==null&&(a.memoizedState={dehydrated:s,treeContext:Ki!==null?{id:Jn,overflow:ei}:null,retryLane:536870912,hydrationErrors:null},o=my(s),o.return=a,a.child=o,jt=a,st=null)):s=null,s===null)throw Fi(a);return Cd(s)?a.lanes=32:a.lanes=536870912,null}var S=u.children;return u=u.fallback,d?(ts(),d=a.mode,S=uc({mode:"hidden",children:S},d),u=Ps(u,d,o,null),S.return=a,u.return=a,S.sibling=u,a.child=S,u=a.child,u.memoizedState=$h(o),u.childLanes=Gh(s,b,o),a.memoizedState=Uh,pl(null,u)):(es(a),Wh(a,S))}var T=s.memoizedState;if(T!==null&&(S=T.dehydrated,S!==null)){if(m)a.flags&256?(es(a),a.flags&=-257,a=Ph(s,a,o)):a.memoizedState!==null?(ts(),a.child=s.child,a.flags|=128,a=null):(ts(),S=u.fallback,d=a.mode,u=uc({mode:"visible",children:u.children},d),S=Ps(S,d,o,null),S.flags|=2,u.return=a,S.return=a,u.sibling=S,a.child=u,Zs(a,s.child,null,o),u=a.child,u.memoizedState=$h(o),u.childLanes=Gh(s,b,o),a.memoizedState=Uh,a=pl(null,u));else if(es(a),Cd(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var L=b.dgst;b=L,u=Error(i(419)),u.stack="",u.digest=b,nl({value:u,source:null,stack:null}),a=Ph(s,a,o)}else if(xt||_r(s,a,o,!1),b=(o&s.childLanes)!==0,xt||b){if(b=et,b!==null&&(u=kg(b,o),u!==0&&u!==T.retryLane))throw T.retryLane=u,Ws(s,u),ln(b,s,u),qh;Ad(S)||vc(),a=Ph(s,a,o)}else Ad(S)?(a.flags|=192,a.child=s.child,a=null):(s=T.treeContext,st=Nn(S.nextSibling),jt=a,Be=!0,Ii=null,On=!1,s!==null&&by(a,s),a=Wh(a,u.children),a.flags|=4096);return a}return d?(ts(),S=u.fallback,d=a.mode,T=s.child,L=T.sibling,u=xi(T,{mode:"hidden",children:u.children}),u.subtreeFlags=T.subtreeFlags&65011712,L!==null?S=xi(L,S):(S=Ps(S,d,o,null),S.flags|=2),S.return=a,u.return=a,u.sibling=S,a.child=u,pl(null,u),u=a.child,S=s.child.memoizedState,S===null?S=$h(o):(d=S.cachePool,d!==null?(T=bt._currentValue,d=d.parent!==T?{parent:T,pool:T}:d):d=Ay(),S={baseLanes:S.baseLanes|o,cachePool:d}),u.memoizedState=S,u.childLanes=Gh(s,b,o),a.memoizedState=Uh,pl(s.child,u)):(es(a),o=s.child,s=o.sibling,o=xi(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,s!==null&&(b=a.deletions,b===null?(a.deletions=[s],a.flags|=16):b.push(s)),a.child=o,a.memoizedState=null,o)}function Wh(s,a){return a=uc({mode:"visible",children:a},s.mode),a.return=s,s.child=a}function uc(s,a){return s=hn(22,s,null,a),s.lanes=0,s}function Ph(s,a,o){return Zs(a,s.child,null,o),s=Wh(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function _0(s,a,o){s.lanes|=a;var u=s.alternate;u!==null&&(u.lanes|=a),ah(s.return,a,o)}function Yh(s,a,o,u,d,m){var b=s.memoizedState;b===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:m}:(b.isBackwards=a,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=o,b.tailMode=d,b.treeForkCount=m)}function H0(s,a,o){var u=a.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var b=pt.current,S=(b&2)!==0;if(S?(b=b&1|2,a.flags|=128):b&=1,X(pt,b),zt(s,a,u,o),u=Be?tl:0,!S&&s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&_0(s,o,a);else if(s.tag===19)_0(s,o,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}switch(d){case"forwards":for(o=a.child,d=null;o!==null;)s=o.alternate,s!==null&&Zo(s)===null&&(d=o),o=o.sibling;o=d,o===null?(d=a.child,a.child=null):(d=o.sibling,o.sibling=null),Yh(a,!1,d,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=a.child,a.child=null;d!==null;){if(s=d.alternate,s!==null&&Zo(s)===null){a.child=d;break}s=d.sibling,d.sibling=o,o=d,d=s}Yh(a,!0,o,null,m,u);break;case"together":Yh(a,!1,null,null,void 0,u);break;default:a.memoizedState=null}return a.child}function Ti(s,a,o){if(s!==null&&(a.dependencies=s.dependencies),ss|=a.lanes,(o&a.childLanes)===0)if(s!==null){if(_r(s,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(s!==null&&a.child!==s.child)throw Error(i(153));if(a.child!==null){for(s=a.child,o=xi(s,s.pendingProps),a.child=o,o.return=a;s.sibling!==null;)s=s.sibling,o=o.sibling=xi(s,s.pendingProps),o.return=a;o.sibling=null}return a.child}function Kh(s,a){return(s.lanes&a)!==0?!0:(s=s.dependencies,!!(s!==null&&Wo(s)))}function xA(s,a,o){switch(a.tag){case 3:Je(a,a.stateNode.containerInfo),Xi(a,bt,s.memoizedState.cache),Ys();break;case 27:case 5:dt(a);break;case 4:Je(a,a.stateNode.containerInfo);break;case 10:Xi(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,bh(a),null;break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(es(a),a.flags|=128,null):(o&a.child.childLanes)!==0?L0(s,a,o):(es(a),s=Ti(s,a,o),s!==null?s.sibling:null);es(a);break;case 19:var d=(s.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(_r(s,a,o,!1),u=(o&a.childLanes)!==0),d){if(u)return H0(s,a,o);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),X(pt,pt.current),u)break;return null;case 22:return a.lanes=0,O0(s,a,o,a.pendingProps);case 24:Xi(a,bt,s.memoizedState.cache)}return Ti(s,a,o)}function q0(s,a,o){if(s!==null)if(s.memoizedProps!==a.pendingProps)xt=!0;else{if(!Kh(s,o)&&(a.flags&128)===0)return xt=!1,xA(s,a,o);xt=(s.flags&131072)!==0}else xt=!1,Be&&(a.flags&1048576)!==0&&yy(a,tl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var u=a.pendingProps;if(s=Xs(a.elementType),a.type=s,typeof s=="function")Zf(s)?(u=er(s,u),a.tag=1,a=B0(null,a,s,u,o)):(a.tag=0,a=Vh(null,a,s,u,o));else{if(s!=null){var d=s.$$typeof;if(d===B){a.tag=11,a=M0(null,a,s,u,o);break e}else if(d===q){a.tag=14,a=E0(null,a,s,u,o);break e}}throw a=ye(s)||s,Error(i(306,a,""))}}return a;case 0:return Vh(s,a,a.type,a.pendingProps,o);case 1:return u=a.type,d=er(u,a.pendingProps),B0(s,a,u,d,o);case 3:e:{if(Je(a,a.stateNode.containerInfo),s===null)throw Error(i(387));u=a.pendingProps;var m=a.memoizedState;d=m.element,dh(s,a),cl(a,u,null,o);var b=a.memoizedState;if(u=b.cache,Xi(a,bt,u),u!==m.cache&&lh(a,[bt],o,!0),ol(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=z0(s,a,u,o);break e}else if(u!==d){d=Mn(Error(i(424)),a),nl(d),a=z0(s,a,u,o);break e}else for(s=a.stateNode.containerInfo,s.nodeType===9?s=s.body:s=s.nodeName==="HTML"?s.ownerDocument.body:s,st=Nn(s.firstChild),jt=a,Be=!0,Ii=null,On=!0,o=Oy(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ys(),u===d){a=Ti(s,a,o);break e}zt(s,a,u,o)}a=a.child}return a;case 26:return cc(s,a),s===null?(o=Xb(a.type,null,a.pendingProps,null))?a.memoizedState=o:Be||(o=a.type,s=a.pendingProps,u=Tc(de.current).createElement(o),u[Nt]=a,u[en]=s,Lt(u,o,s),Mt(u),a.stateNode=u):a.memoizedState=Xb(a.type,s.memoizedProps,a.pendingProps,s.memoizedState),null;case 27:return dt(a),s===null&&Be&&(u=a.stateNode=Kb(a.type,a.pendingProps,de.current),jt=a,On=!0,d=st,cs(a.type)?(Td=d,st=Nn(u.firstChild)):st=d),zt(s,a,a.pendingProps.children,o),cc(s,a),s===null&&(a.flags|=4194304),a.child;case 5:return s===null&&Be&&((d=u=st)&&(u=XA(u,a.type,a.pendingProps,On),u!==null?(a.stateNode=u,jt=a,st=Nn(u.firstChild),On=!1,d=!0):d=!1),d||Fi(a)),dt(a),d=a.type,m=a.pendingProps,b=s!==null?s.memoizedProps:null,u=m.children,wd(d,m)?u=null:b!==null&&wd(d,b)&&(a.flags|=32),a.memoizedState!==null&&(d=xh(s,a,fA,null,null,o),Rl._currentValue=d),cc(s,a),zt(s,a,u,o),a.child;case 6:return s===null&&Be&&((s=o=st)&&(o=QA(o,a.pendingProps,On),o!==null?(a.stateNode=o,jt=a,st=null,s=!0):s=!1),s||Fi(a)),null;case 13:return L0(s,a,o);case 4:return Je(a,a.stateNode.containerInfo),u=a.pendingProps,s===null?a.child=Zs(a,null,u,o):zt(s,a,u,o),a.child;case 11:return M0(s,a,a.type,a.pendingProps,o);case 7:return zt(s,a,a.pendingProps,o),a.child;case 8:return zt(s,a,a.pendingProps.children,o),a.child;case 12:return zt(s,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,Xi(a,a.type,u.value),zt(s,a,u.children,o),a.child;case 9:return d=a.type._context,u=a.pendingProps.children,Is(a),d=Bt(d),u=u(d),a.flags|=1,zt(s,a,u,o),a.child;case 14:return E0(s,a,a.type,a.pendingProps,o);case 15:return R0(s,a,a.type,a.pendingProps,o);case 19:return H0(s,a,o);case 31:return vA(s,a,o);case 22:return O0(s,a,o,a.pendingProps);case 24:return Is(a),u=Bt(bt),s===null?(d=uh(),d===null&&(d=et,m=oh(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),a.memoizedState={parent:u,cache:d},hh(a),Xi(a,bt,d)):((s.lanes&o)!==0&&(dh(s,a),cl(a,null,null,o),ol()),d=s.memoizedState,m=a.memoizedState,d.parent!==u?(d={parent:u,cache:u},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),Xi(a,bt,u)):(u=m.cache,Xi(a,bt,u),u!==d.cache&&lh(a,[bt],o,!0))),zt(s,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Mi(s){s.flags|=4}function Ih(s,a,o,u,d){if((a=(s.mode&32)!==0)&&(a=!1),a){if(s.flags|=16777216,(d&335544128)===d)if(s.stateNode.complete)s.flags|=8192;else if(hb())s.flags|=8192;else throw Qs=Io,fh}else s.flags&=-16777217}function V0(s,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!tv(a))if(hb())s.flags|=8192;else throw Qs=Io,fh}function fc(s,a){a!==null&&(s.flags|=4),s.flags&16384&&(a=s.tag!==22?vg():536870912,s.lanes|=a,Fr|=a)}function ml(s,a){if(!Be)switch(s.tailMode){case"hidden":a=s.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?s.tail=null:o.sibling=null;break;case"collapsed":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:u.sibling=null}}function rt(s){var a=s.alternate!==null&&s.alternate.child===s.child,o=0,u=0;if(a)for(var d=s.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=s,d=d.sibling;else for(d=s.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=s,d=d.sibling;return s.subtreeFlags|=u,s.childLanes=o,a}function wA(s,a,o){var u=a.pendingProps;switch(nh(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return o=a.stateNode,u=null,s!==null&&(u=s.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Si(bt),at(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(s===null||s.child===null)&&(Lr(a)?Mi(a):s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,sh())),rt(a),null;case 26:var d=a.type,m=a.memoizedState;return s===null?(Mi(a),m!==null?(rt(a),V0(a,m)):(rt(a),Ih(a,d,null,u,o))):m?m!==s.memoizedState?(Mi(a),rt(a),V0(a,m)):(rt(a),a.flags&=-16777217):(s=s.memoizedProps,s!==u&&Mi(a),rt(a),Ih(a,d,s,u,o)),null;case 27:if(gi(a),o=de.current,d=a.type,s!==null&&a.stateNode!=null)s.memoizedProps!==u&&Mi(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return rt(a),null}s=J.current,Lr(a)?vy(a):(s=Kb(d,u,o),a.stateNode=s,Mi(a))}return rt(a),null;case 5:if(gi(a),d=a.type,s!==null&&a.stateNode!=null)s.memoizedProps!==u&&Mi(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return rt(a),null}if(m=J.current,Lr(a))vy(a);else{var b=Tc(de.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?b.createElement(d,{is:u.is}):b.createElement(d)}}m[Nt]=a,m[en]=u;e:for(b=a.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===a)break e;for(;b.sibling===null;){if(b.return===null||b.return===a)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}a.stateNode=m;e:switch(Lt(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Mi(a)}}return rt(a),Ih(a,a.type,s===null?null:s.memoizedProps,a.pendingProps,o),null;case 6:if(s&&a.stateNode!=null)s.memoizedProps!==u&&Mi(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(s=de.current,Lr(a)){if(s=a.stateNode,o=a.memoizedProps,u=null,d=jt,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}s[Nt]=a,s=!!(s.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Lb(s.nodeValue,o)),s||Fi(a,!0)}else s=Tc(s).createTextNode(u),s[Nt]=a,a.stateNode=s}return rt(a),null;case 31:if(o=a.memoizedState,s===null||s.memoizedState!==null){if(u=Lr(a),o!==null){if(s===null){if(!u)throw Error(i(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(557));s[Nt]=a}else Ys(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),s=!1}else o=sh(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=o),s=!0;if(!s)return a.flags&256?(pn(a),a):(pn(a),null);if((a.flags&128)!==0)throw Error(i(558))}return rt(a),null;case 13:if(u=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(d=Lr(a),u!==null&&u.dehydrated!==null){if(s===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Nt]=a}else Ys(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),d=!1}else d=sh(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(pn(a),a):(pn(a),null)}return pn(a),(a.flags&128)!==0?(a.lanes=o,a):(o=u!==null,s=s!==null&&s.memoizedState!==null,o&&(u=a.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),o!==s&&o&&(a.child.flags|=8192),fc(a,a.updateQueue),rt(a),null);case 4:return at(),s===null&&gd(a.stateNode.containerInfo),rt(a),null;case 10:return Si(a.type),rt(a),null;case 19:if(U(pt),u=a.memoizedState,u===null)return rt(a),null;if(d=(a.flags&128)!==0,m=u.rendering,m===null)if(d)ml(u,!1);else{if(ut!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(m=Zo(s),m!==null){for(a.flags|=128,ml(u,!1),s=m.updateQueue,a.updateQueue=s,fc(a,s),a.subtreeFlags=0,s=o,o=a.child;o!==null;)py(o,s),o=o.sibling;return X(pt,pt.current&1|2),Be&&wi(a,u.treeForkCount),a.child}s=s.sibling}u.tail!==null&&Pt()>gc&&(a.flags|=128,d=!0,ml(u,!1),a.lanes=4194304)}else{if(!d)if(s=Zo(m),s!==null){if(a.flags|=128,d=!0,s=s.updateQueue,a.updateQueue=s,fc(a,s),ml(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Be)return rt(a),null}else 2*Pt()-u.renderingStartTime>gc&&o!==536870912&&(a.flags|=128,d=!0,ml(u,!1),a.lanes=4194304);u.isBackwards?(m.sibling=a.child,a.child=m):(s=u.last,s!==null?s.sibling=m:a.child=m,u.last=m)}return u.tail!==null?(s=u.tail,u.rendering=s,u.tail=s.sibling,u.renderingStartTime=Pt(),s.sibling=null,o=pt.current,X(pt,d?o&1|2:o&1),Be&&wi(a,u.treeForkCount),s):(rt(a),null);case 22:case 23:return pn(a),yh(),u=a.memoizedState!==null,s!==null?s.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),o=a.updateQueue,o!==null&&fc(a,o.retryQueue),o=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),s!==null&&U(Fs),null;case 24:return o=null,s!==null&&(o=s.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Si(bt),rt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function kA(s,a){switch(nh(a),a.tag){case 1:return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return Si(bt),at(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 26:case 27:case 5:return gi(a),null;case 31:if(a.memoizedState!==null){if(pn(a),a.alternate===null)throw Error(i(340));Ys()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 13:if(pn(a),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Ys()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return U(pt),null;case 4:return at(),null;case 10:return Si(a.type),null;case 22:case 23:return pn(a),yh(),s!==null&&U(Fs),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 24:return Si(bt),null;case 25:return null;default:return null}}function U0(s,a){switch(nh(a),a.tag){case 3:Si(bt),at();break;case 26:case 27:case 5:gi(a);break;case 4:at();break;case 31:a.memoizedState!==null&&pn(a);break;case 13:pn(a);break;case 19:U(pt);break;case 10:Si(a.type);break;case 22:case 23:pn(a),yh(),s!==null&&U(Fs);break;case 24:Si(bt)}}function gl(s,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&s)===s){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==d)}}catch(S){Ie(a,a.return,S)}}function ns(s,a,o){try{var u=a.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&s)===s){var b=u.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,d=a;var T=o,L=S;try{L()}catch(P){Ie(d,T,P)}}}u=u.next}while(u!==m)}}catch(P){Ie(a,a.return,P)}}function $0(s){var a=s.updateQueue;if(a!==null){var o=s.stateNode;try{Ny(a,o)}catch(u){Ie(s,s.return,u)}}}function G0(s,a,o){o.props=er(s.type,s.memoizedProps),o.state=s.memoizedState;try{o.componentWillUnmount()}catch(u){Ie(s,a,u)}}function yl(s,a){try{var o=s.ref;if(o!==null){switch(s.tag){case 26:case 27:case 5:var u=s.stateNode;break;case 30:u=s.stateNode;break;default:u=s.stateNode}typeof o=="function"?s.refCleanup=o(u):o.current=u}}catch(d){Ie(s,a,d)}}function ti(s,a){var o=s.ref,u=s.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Ie(s,a,d)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Ie(s,a,d)}else o.current=null}function W0(s){var a=s.type,o=s.memoizedProps,u=s.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Ie(s,s.return,d)}}function Fh(s,a,o){try{var u=s.stateNode;WA(u,s.type,o,a),u[en]=a}catch(d){Ie(s,s.return,d)}}function P0(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27&&cs(s.type)||s.tag===4}function Xh(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||P0(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.tag===27&&cs(s.type)||s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Qh(s,a,o){var u=s.tag;if(u===5||u===6)s=s.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(s,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(s),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=bi));else if(u!==4&&(u===27&&cs(s.type)&&(o=s.stateNode,a=null),s=s.child,s!==null))for(Qh(s,a,o),s=s.sibling;s!==null;)Qh(s,a,o),s=s.sibling}function hc(s,a,o){var u=s.tag;if(u===5||u===6)s=s.stateNode,a?o.insertBefore(s,a):o.appendChild(s);else if(u!==4&&(u===27&&cs(s.type)&&(o=s.stateNode),s=s.child,s!==null))for(hc(s,a,o),s=s.sibling;s!==null;)hc(s,a,o),s=s.sibling}function Y0(s){var a=s.stateNode,o=s.memoizedProps;try{for(var u=s.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);Lt(a,u,o),a[Nt]=s,a[en]=o}catch(m){Ie(s,s.return,m)}}var Ei=!1,wt=!1,Zh=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Et=null;function SA(s,a){if(s=s.containerInfo,vd=jc,s=ry(s),Pf(s)){if("selectionStart"in s)var o={start:s.selectionStart,end:s.selectionEnd};else e:{o=(o=s.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,S=-1,T=-1,L=0,P=0,I=s,H=null;t:for(;;){for(var $;I!==o||d!==0&&I.nodeType!==3||(S=b+d),I!==m||u!==0&&I.nodeType!==3||(T=b+u),I.nodeType===3&&(b+=I.nodeValue.length),($=I.firstChild)!==null;)H=I,I=$;for(;;){if(I===s)break t;if(H===o&&++L===d&&(S=b),H===m&&++P===u&&(T=b),($=I.nextSibling)!==null)break;I=H,H=I.parentNode}I=$}o=S===-1||T===-1?null:{start:S,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(xd={focusedElem:s,selectionRange:o},jc=!1,Et=a;Et!==null;)if(a=Et,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,Et=s;else for(;Et!==null;){switch(a=Et,m=a.alternate,s=a.flags,a.tag){case 0:if((s&4)!==0&&(s=a.updateQueue,s=s!==null?s.events:null,s!==null))for(o=0;o<s.length;o++)d=s[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((s&1024)!==0&&m!==null){s=void 0,o=a,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var le=er(o.type,d);s=u.getSnapshotBeforeUpdate(le,m),u.__reactInternalSnapshotBeforeUpdate=s}catch(ge){Ie(o,o.return,ge)}}break;case 3:if((s&1024)!==0){if(s=a.stateNode.containerInfo,o=s.nodeType,o===9)Sd(s);else if(o===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Sd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(i(163))}if(s=a.sibling,s!==null){s.return=a.return,Et=s;break}Et=a.return}}function I0(s,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Oi(s,o),u&4&&gl(5,o);break;case 1:if(Oi(s,o),u&4)if(s=o.stateNode,a===null)try{s.componentDidMount()}catch(b){Ie(o,o.return,b)}else{var d=er(o.type,a.memoizedProps);a=a.memoizedState;try{s.componentDidUpdate(d,a,s.__reactInternalSnapshotBeforeUpdate)}catch(b){Ie(o,o.return,b)}}u&64&&$0(o),u&512&&yl(o,o.return);break;case 3:if(Oi(s,o),u&64&&(s=o.updateQueue,s!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Ny(s,a)}catch(b){Ie(o,o.return,b)}}break;case 27:a===null&&u&4&&Y0(o);case 26:case 5:Oi(s,o),a===null&&u&4&&W0(o),u&512&&yl(o,o.return);break;case 12:Oi(s,o);break;case 31:Oi(s,o),u&4&&Q0(s,o);break;case 13:Oi(s,o),u&4&&Z0(s,o),u&64&&(s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null&&(o=NA.bind(null,o),ZA(s,o))));break;case 22:if(u=o.memoizedState!==null||Ei,!u){a=a!==null&&a.memoizedState!==null||wt,d=Ei;var m=wt;Ei=u,(wt=a)&&!m?Di(s,o,(o.subtreeFlags&8772)!==0):Oi(s,o),Ei=d,wt=m}break;case 30:break;default:Oi(s,o)}}function F0(s){var a=s.alternate;a!==null&&(s.alternate=null,F0(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&Ef(a)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var lt=null,nn=!1;function Ri(s,a,o){for(o=o.child;o!==null;)X0(s,a,o),o=o.sibling}function X0(s,a,o){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Zn,o)}catch{}switch(o.tag){case 26:wt||ti(o,a),Ri(s,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:wt||ti(o,a);var u=lt,d=nn;cs(o.type)&&(lt=o.stateNode,nn=!1),Ri(s,a,o),Tl(o.stateNode),lt=u,nn=d;break;case 5:wt||ti(o,a);case 6:if(u=lt,d=nn,lt=null,Ri(s,a,o),lt=u,nn=d,lt!==null)if(nn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(o.stateNode)}catch(m){Ie(o,a,m)}else try{lt.removeChild(o.stateNode)}catch(m){Ie(o,a,m)}break;case 18:lt!==null&&(nn?(s=lt,$b(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,o.stateNode),ia(s)):$b(lt,o.stateNode));break;case 4:u=lt,d=nn,lt=o.stateNode.containerInfo,nn=!0,Ri(s,a,o),lt=u,nn=d;break;case 0:case 11:case 14:case 15:ns(2,o,a),wt||ns(4,o,a),Ri(s,a,o);break;case 1:wt||(ti(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&G0(o,a,u)),Ri(s,a,o);break;case 21:Ri(s,a,o);break;case 22:wt=(u=wt)||o.memoizedState!==null,Ri(s,a,o),wt=u;break;default:Ri(s,a,o)}}function Q0(s,a){if(a.memoizedState===null&&(s=a.alternate,s!==null&&(s=s.memoizedState,s!==null))){s=s.dehydrated;try{ia(s)}catch(o){Ie(a,a.return,o)}}}function Z0(s,a){if(a.memoizedState===null&&(s=a.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{ia(s)}catch(o){Ie(a,a.return,o)}}function AA(s){switch(s.tag){case 31:case 13:case 19:var a=s.stateNode;return a===null&&(a=s.stateNode=new K0),a;case 22:return s=s.stateNode,a=s._retryCache,a===null&&(a=s._retryCache=new K0),a;default:throw Error(i(435,s.tag))}}function dc(s,a){var o=AA(s);a.forEach(function(u){if(!o.has(u)){o.add(u);var d=jA.bind(null,s,u);u.then(d,d)}})}function sn(s,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=s,b=a,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(cs(S.type)){lt=S.stateNode,nn=!1;break e}break;case 5:lt=S.stateNode,nn=!1;break e;case 3:case 4:lt=S.stateNode.containerInfo,nn=!0;break e}S=S.return}if(lt===null)throw Error(i(160));X0(m,b,d),lt=null,nn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)J0(a,s),a=a.sibling}var Gn=null;function J0(s,a){var o=s.alternate,u=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:sn(a,s),rn(s),u&4&&(ns(3,s,s.return),gl(3,s),ns(5,s,s.return));break;case 1:sn(a,s),rn(s),u&512&&(wt||o===null||ti(o,o.return)),u&64&&Ei&&(s=s.updateQueue,s!==null&&(u=s.callbacks,u!==null&&(o=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Gn;if(sn(a,s),rn(s),u&512&&(wt||o===null||ti(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=s.memoizedState,o===null)if(u===null)if(s.stateNode===null){e:{u=s.type,o=s.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Wa]||m[Nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),Lt(m,u,o),m[Nt]=s,Mt(m),u=m;break e;case"link":var b=Jb("link","href",d).get(u+(o.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(S,1);break t}}m=d.createElement(u),Lt(m,u,o),d.head.appendChild(m);break;case"meta":if(b=Jb("meta","content",d).get(u+(o.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(S,1);break t}}m=d.createElement(u),Lt(m,u,o),d.head.appendChild(m);break;default:throw Error(i(468,u))}m[Nt]=s,Mt(m),u=m}s.stateNode=u}else ev(d,s.type,s.stateNode);else s.stateNode=Zb(d,u,s.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?ev(d,s.type,s.stateNode):Zb(d,u,s.memoizedProps)):u===null&&s.stateNode!==null&&Fh(s,s.memoizedProps,o.memoizedProps)}break;case 27:sn(a,s),rn(s),u&512&&(wt||o===null||ti(o,o.return)),o!==null&&u&4&&Fh(s,s.memoizedProps,o.memoizedProps);break;case 5:if(sn(a,s),rn(s),u&512&&(wt||o===null||ti(o,o.return)),s.flags&32){d=s.stateNode;try{Tr(d,"")}catch(le){Ie(s,s.return,le)}}u&4&&s.stateNode!=null&&(d=s.memoizedProps,Fh(s,d,o!==null?o.memoizedProps:d)),u&1024&&(Zh=!0);break;case 6:if(sn(a,s),rn(s),u&4){if(s.stateNode===null)throw Error(i(162));u=s.memoizedProps,o=s.stateNode;try{o.nodeValue=u}catch(le){Ie(s,s.return,le)}}break;case 3:if(Rc=null,d=Gn,Gn=Mc(a.containerInfo),sn(a,s),Gn=d,rn(s),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ia(a.containerInfo)}catch(le){Ie(s,s.return,le)}Zh&&(Zh=!1,eb(s));break;case 4:u=Gn,Gn=Mc(s.stateNode.containerInfo),sn(a,s),rn(s),Gn=u;break;case 12:sn(a,s),rn(s);break;case 31:sn(a,s),rn(s),u&4&&(u=s.updateQueue,u!==null&&(s.updateQueue=null,dc(s,u)));break;case 13:sn(a,s),rn(s),s.child.flags&8192&&s.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(mc=Pt()),u&4&&(u=s.updateQueue,u!==null&&(s.updateQueue=null,dc(s,u)));break;case 22:d=s.memoizedState!==null;var T=o!==null&&o.memoizedState!==null,L=Ei,P=wt;if(Ei=L||d,wt=P||T,sn(a,s),wt=P,Ei=L,rn(s),u&8192)e:for(a=s.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(o===null||T||Ei||wt||tr(s)),o=null,a=s;;){if(a.tag===5||a.tag===26){if(o===null){T=o=a;try{if(m=T.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=T.stateNode;var I=T.memoizedProps.style,H=I!=null&&I.hasOwnProperty("display")?I.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(le){Ie(T,T.return,le)}}}else if(a.tag===6){if(o===null){T=a;try{T.stateNode.nodeValue=d?"":T.memoizedProps}catch(le){Ie(T,T.return,le)}}}else if(a.tag===18){if(o===null){T=a;try{var $=T.stateNode;d?Gb($,!0):Gb(T.stateNode,!1)}catch(le){Ie(T,T.return,le)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===s)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break e;for(;a.sibling===null;){if(a.return===null||a.return===s)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=s.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,dc(s,o))));break;case 19:sn(a,s),rn(s),u&4&&(u=s.updateQueue,u!==null&&(s.updateQueue=null,dc(s,u)));break;case 30:break;case 21:break;default:sn(a,s),rn(s)}}function rn(s){var a=s.flags;if(a&2){try{for(var o,u=s.return;u!==null;){if(P0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=Xh(s);hc(s,m,d);break;case 5:var b=o.stateNode;o.flags&32&&(Tr(b,""),o.flags&=-33);var S=Xh(s);hc(s,S,b);break;case 3:case 4:var T=o.stateNode.containerInfo,L=Xh(s);Qh(s,L,T);break;default:throw Error(i(161))}}catch(P){Ie(s,s.return,P)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function eb(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var a=s;eb(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),s=s.sibling}}function Oi(s,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)I0(s,a.alternate,a),a=a.sibling}function tr(s){for(s=s.child;s!==null;){var a=s;switch(a.tag){case 0:case 11:case 14:case 15:ns(4,a,a.return),tr(a);break;case 1:ti(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&G0(a,a.return,o),tr(a);break;case 27:Tl(a.stateNode);case 26:case 5:ti(a,a.return),tr(a);break;case 22:a.memoizedState===null&&tr(a);break;case 30:tr(a);break;default:tr(a)}s=s.sibling}}function Di(s,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,d=s,m=a,b=m.flags;switch(m.tag){case 0:case 11:case 15:Di(d,m,o),gl(4,m);break;case 1:if(Di(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(L){Ie(u,u.return,L)}if(u=m,d=u.updateQueue,d!==null){var S=u.stateNode;try{var T=d.shared.hiddenCallbacks;if(T!==null)for(d.shared.hiddenCallbacks=null,d=0;d<T.length;d++)Dy(T[d],S)}catch(L){Ie(u,u.return,L)}}o&&b&64&&$0(m),yl(m,m.return);break;case 27:Y0(m);case 26:case 5:Di(d,m,o),o&&u===null&&b&4&&W0(m),yl(m,m.return);break;case 12:Di(d,m,o);break;case 31:Di(d,m,o),o&&b&4&&Q0(d,m);break;case 13:Di(d,m,o),o&&b&4&&Z0(d,m);break;case 22:m.memoizedState===null&&Di(d,m,o),yl(m,m.return);break;case 30:break;default:Di(d,m,o)}a=a.sibling}}function Jh(s,a){var o=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(s!=null&&s.refCount++,o!=null&&il(o))}function ed(s,a){s=null,a.alternate!==null&&(s=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==s&&(a.refCount++,s!=null&&il(s))}function Wn(s,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)tb(s,a,o,u),a=a.sibling}function tb(s,a,o,u){var d=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(s,a,o,u),d&2048&&gl(9,a);break;case 1:Wn(s,a,o,u);break;case 3:Wn(s,a,o,u),d&2048&&(s=null,a.alternate!==null&&(s=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==s&&(a.refCount++,s!=null&&il(s)));break;case 12:if(d&2048){Wn(s,a,o,u),s=a.stateNode;try{var m=a.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,a.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(T){Ie(a,a.return,T)}}else Wn(s,a,o,u);break;case 31:Wn(s,a,o,u);break;case 13:Wn(s,a,o,u);break;case 23:break;case 22:m=a.stateNode,b=a.alternate,a.memoizedState!==null?m._visibility&2?Wn(s,a,o,u):bl(s,a):m._visibility&2?Wn(s,a,o,u):(m._visibility|=2,Yr(s,a,o,u,(a.subtreeFlags&10256)!==0||!1)),d&2048&&Jh(b,a);break;case 24:Wn(s,a,o,u),d&2048&&ed(a.alternate,a);break;default:Wn(s,a,o,u)}}function Yr(s,a,o,u,d){for(d=d&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=s,b=a,S=o,T=u,L=b.flags;switch(b.tag){case 0:case 11:case 15:Yr(m,b,S,T,d),gl(8,b);break;case 23:break;case 22:var P=b.stateNode;b.memoizedState!==null?P._visibility&2?Yr(m,b,S,T,d):bl(m,b):(P._visibility|=2,Yr(m,b,S,T,d)),d&&L&2048&&Jh(b.alternate,b);break;case 24:Yr(m,b,S,T,d),d&&L&2048&&ed(b.alternate,b);break;default:Yr(m,b,S,T,d)}a=a.sibling}}function bl(s,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=s,u=a,d=u.flags;switch(u.tag){case 22:bl(o,u),d&2048&&Jh(u.alternate,u);break;case 24:bl(o,u),d&2048&&ed(u.alternate,u);break;default:bl(o,u)}a=a.sibling}}var vl=8192;function Kr(s,a,o){if(s.subtreeFlags&vl)for(s=s.child;s!==null;)nb(s,a,o),s=s.sibling}function nb(s,a,o){switch(s.tag){case 26:Kr(s,a,o),s.flags&vl&&s.memoizedState!==null&&uC(o,Gn,s.memoizedState,s.memoizedProps);break;case 5:Kr(s,a,o);break;case 3:case 4:var u=Gn;Gn=Mc(s.stateNode.containerInfo),Kr(s,a,o),Gn=u;break;case 22:s.memoizedState===null&&(u=s.alternate,u!==null&&u.memoizedState!==null?(u=vl,vl=16777216,Kr(s,a,o),vl=u):Kr(s,a,o));break;default:Kr(s,a,o)}}function ib(s){var a=s.alternate;if(a!==null&&(s=a.child,s!==null)){a.child=null;do a=s.sibling,s.sibling=null,s=a;while(s!==null)}}function xl(s){var a=s.deletions;if((s.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Et=u,rb(u,s)}ib(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)sb(s),s=s.sibling}function sb(s){switch(s.tag){case 0:case 11:case 15:xl(s),s.flags&2048&&ns(9,s,s.return);break;case 3:xl(s);break;case 12:xl(s);break;case 22:var a=s.stateNode;s.memoizedState!==null&&a._visibility&2&&(s.return===null||s.return.tag!==13)?(a._visibility&=-3,pc(s)):xl(s);break;default:xl(s)}}function pc(s){var a=s.deletions;if((s.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Et=u,rb(u,s)}ib(s)}for(s=s.child;s!==null;){switch(a=s,a.tag){case 0:case 11:case 15:ns(8,a,a.return),pc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,pc(a));break;default:pc(a)}s=s.sibling}}function rb(s,a){for(;Et!==null;){var o=Et;switch(o.tag){case 0:case 11:case 15:ns(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:il(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Et=u;else e:for(o=s;Et!==null;){u=Et;var d=u.sibling,m=u.return;if(F0(u),u===o){Et=null;break e}if(d!==null){d.return=m,Et=d;break e}Et=m}}}var CA={getCacheForType:function(s){var a=Bt(bt),o=a.data.get(s);return o===void 0&&(o=s(),a.data.set(s,o)),o},cacheSignal:function(){return Bt(bt).controller.signal}},TA=typeof WeakMap=="function"?WeakMap:Map,Ye=0,et=null,Re=null,Ne=0,Ke=0,mn=null,is=!1,Ir=!1,td=!1,Ni=0,ut=0,ss=0,nr=0,nd=0,gn=0,Fr=0,wl=null,an=null,id=!1,mc=0,ab=0,gc=1/0,yc=null,rs=null,At=0,as=null,Xr=null,ji=0,sd=0,rd=null,lb=null,kl=0,ad=null;function yn(){return(Ye&2)!==0&&Ne!==0?Ne&-Ne:V.T!==null?hd():Sg()}function ob(){if(gn===0)if((Ne&536870912)===0||Be){var s=Co;Co<<=1,(Co&3932160)===0&&(Co=262144),gn=s}else gn=536870912;return s=dn.current,s!==null&&(s.flags|=32),gn}function ln(s,a,o){(s===et&&(Ke===2||Ke===9)||s.cancelPendingCommit!==null)&&(Qr(s,0),ls(s,Ne,gn,!1)),Ga(s,o),((Ye&2)===0||s!==et)&&(s===et&&((Ye&2)===0&&(nr|=o),ut===4&&ls(s,Ne,gn,!1)),ni(s))}function cb(s,a,o){if((Ye&6)!==0)throw Error(i(327));var u=!o&&(a&127)===0&&(a&s.expiredLanes)===0||$a(s,a),d=u?RA(s,a):od(s,a,!0),m=u;do{if(d===0){Ir&&!u&&ls(s,a,0,!1);break}else{if(o=s.current.alternate,m&&!MA(o)){d=od(s,a,!1),m=!1;continue}if(d===2){if(m=a,s.errorRecoveryDisabledLanes&m)var b=0;else b=s.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var S=s;d=wl;var T=S.current.memoizedState.isDehydrated;if(T&&(Qr(S,b).flags|=256),b=od(S,b,!1),b!==2){if(td&&!T){S.errorRecoveryDisabledLanes|=m,nr|=m,d=4;break e}m=an,an=d,m!==null&&(an===null?an=m:an.push.apply(an,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){Qr(s,0),ls(s,a,0,!0);break}e:{switch(u=s,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:ls(u,a,gn,!is);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=mc+300-Pt(),10<d)){if(ls(u,a,gn,!is),Mo(u,0,!0)!==0)break e;ji=a,u.timeoutHandle=Vb(ub.bind(null,u,o,an,yc,id,a,gn,nr,Fr,is,m,"Throttled",-0,0),d);break e}ub(u,o,an,yc,id,a,gn,nr,Fr,is,m,null,-0,0)}}break}while(!0);ni(s)}function ub(s,a,o,u,d,m,b,S,T,L,P,I,H,$){if(s.timeoutHandle=-1,I=a.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bi},nb(a,m,I);var le=(m&62914560)===m?mc-Pt():(m&4194048)===m?ab-Pt():0;if(le=fC(I,le),le!==null){ji=m,s.cancelPendingCommit=le(bb.bind(null,s,a,m,o,u,d,b,S,T,P,I,null,H,$)),ls(s,m,b,!L);return}}bb(s,a,m,o,u,d,b,S,T)}function MA(s){for(var a=s;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!fn(m(),d))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ls(s,a,o,u){a&=~nd,a&=~nr,s.suspendedLanes|=a,s.pingedLanes&=~a,u&&(s.warmLanes|=a),u=s.expirationTimes;for(var d=a;0<d;){var m=31-It(d),b=1<<m;u[m]=-1,d&=~b}o!==0&&xg(s,o,a)}function bc(){return(Ye&6)===0?(Sl(0),!1):!0}function ld(){if(Re!==null){if(Ke===0)var s=Re.return;else s=Re,ki=Ks=null,Sh(s),Ur=null,rl=0,s=Re;for(;s!==null;)U0(s.alternate,s),s=s.return;Re=null}}function Qr(s,a){var o=s.timeoutHandle;o!==-1&&(s.timeoutHandle=-1,KA(o)),o=s.cancelPendingCommit,o!==null&&(s.cancelPendingCommit=null,o()),ji=0,ld(),et=s,Re=o=xi(s.current,null),Ne=a,Ke=0,mn=null,is=!1,Ir=$a(s,a),td=!1,Fr=gn=nd=nr=ss=ut=0,an=wl=null,id=!1,(a&8)!==0&&(a|=a&32);var u=s.entangledLanes;if(u!==0)for(s=s.entanglements,u&=a;0<u;){var d=31-It(u),m=1<<d;a|=s[d],u&=~m}return Ni=a,qo(),o}function fb(s,a){Se=null,V.H=dl,a===Vr||a===Ko?(a=My(),Ke=3):a===fh?(a=My(),Ke=4):Ke=a===qh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,mn=a,Re===null&&(ut=1,lc(s,Mn(a,s.current)))}function hb(){var s=dn.current;return s===null?!0:(Ne&4194048)===Ne?Dn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?s===Dn:!1}function db(){var s=V.H;return V.H=dl,s===null?dl:s}function pb(){var s=V.A;return V.A=CA,s}function vc(){ut=4,is||(Ne&4194048)!==Ne&&dn.current!==null||(Ir=!0),(ss&134217727)===0&&(nr&134217727)===0||et===null||ls(et,Ne,gn,!1)}function od(s,a,o){var u=Ye;Ye|=2;var d=db(),m=pb();(et!==s||Ne!==a)&&(yc=null,Qr(s,a)),a=!1;var b=ut;e:do try{if(Ke!==0&&Re!==null){var S=Re,T=mn;switch(Ke){case 8:ld(),b=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(a=!0);var L=Ke;if(Ke=0,mn=null,Zr(s,S,T,L),o&&Ir){b=0;break e}break;default:L=Ke,Ke=0,mn=null,Zr(s,S,T,L)}}EA(),b=ut;break}catch(P){fb(s,P)}while(!0);return a&&s.shellSuspendCounter++,ki=Ks=null,Ye=u,V.H=d,V.A=m,Re===null&&(et=null,Ne=0,qo()),b}function EA(){for(;Re!==null;)mb(Re)}function RA(s,a){var o=Ye;Ye|=2;var u=db(),d=pb();et!==s||Ne!==a?(yc=null,gc=Pt()+500,Qr(s,a)):Ir=$a(s,a);e:do try{if(Ke!==0&&Re!==null){a=Re;var m=mn;t:switch(Ke){case 1:Ke=0,mn=null,Zr(s,a,m,1);break;case 2:case 9:if(Cy(m)){Ke=0,mn=null,gb(a);break}a=function(){Ke!==2&&Ke!==9||et!==s||(Ke=7),ni(s)},m.then(a,a);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:Cy(m)?(Ke=0,mn=null,gb(a)):(Ke=0,mn=null,Zr(s,a,m,7));break;case 5:var b=null;switch(Re.tag){case 26:b=Re.memoizedState;case 5:case 27:var S=Re;if(b?tv(b):S.stateNode.complete){Ke=0,mn=null;var T=S.sibling;if(T!==null)Re=T;else{var L=S.return;L!==null?(Re=L,xc(L)):Re=null}break t}}Ke=0,mn=null,Zr(s,a,m,5);break;case 6:Ke=0,mn=null,Zr(s,a,m,6);break;case 8:ld(),ut=6;break e;default:throw Error(i(462))}}OA();break}catch(P){fb(s,P)}while(!0);return ki=Ks=null,V.H=u,V.A=d,Ye=o,Re!==null?0:(et=null,Ne=0,qo(),ut)}function OA(){for(;Re!==null&&!wf();)mb(Re)}function mb(s){var a=q0(s.alternate,s,Ni);s.memoizedProps=s.pendingProps,a===null?xc(s):Re=a}function gb(s){var a=s,o=a.alternate;switch(a.tag){case 15:case 0:a=j0(o,a,a.pendingProps,a.type,void 0,Ne);break;case 11:a=j0(o,a,a.pendingProps,a.type.render,a.ref,Ne);break;case 5:Sh(a);default:U0(o,a),a=Re=py(a,Ni),a=q0(o,a,Ni)}s.memoizedProps=s.pendingProps,a===null?xc(s):Re=a}function Zr(s,a,o,u){ki=Ks=null,Sh(a),Ur=null,rl=0;var d=a.return;try{if(bA(s,d,a,o,Ne)){ut=1,lc(s,Mn(o,s.current)),Re=null;return}}catch(m){if(d!==null)throw Re=d,m;ut=1,lc(s,Mn(o,s.current)),Re=null;return}a.flags&32768?(Be||u===1?s=!0:Ir||(Ne&536870912)!==0?s=!1:(is=s=!0,(u===2||u===9||u===3||u===6)&&(u=dn.current,u!==null&&u.tag===13&&(u.flags|=16384))),yb(a,s)):xc(a)}function xc(s){var a=s;do{if((a.flags&32768)!==0){yb(a,is);return}s=a.return;var o=wA(a.alternate,a,Ni);if(o!==null){Re=o;return}if(a=a.sibling,a!==null){Re=a;return}Re=a=s}while(a!==null);ut===0&&(ut=5)}function yb(s,a){do{var o=kA(s.alternate,s);if(o!==null){o.flags&=32767,Re=o;return}if(o=s.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(s=s.sibling,s!==null)){Re=s;return}Re=s=o}while(s!==null);ut=6,Re=null}function bb(s,a,o,u,d,m,b,S,T){s.cancelPendingCommit=null;do wc();while(At!==0);if((Ye&6)!==0)throw Error(i(327));if(a!==null){if(a===s.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Xf,c2(s,o,m,b,S,T),s===et&&(Re=et=null,Ne=0),Xr=a,as=s,ji=o,sd=m,rd=d,lb=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(s.callbackNode=null,s.callbackPriority=0,BA(Wi,function(){return Sb(),null})):(s.callbackNode=null,s.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=V.T,V.T=null,d=Q.p,Q.p=2,b=Ye,Ye|=4;try{SA(s,a,o)}finally{Ye=b,Q.p=d,V.T=u}}At=1,vb(),xb(),wb()}}function vb(){if(At===1){At=0;var s=as,a=Xr,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=V.T,V.T=null;var u=Q.p;Q.p=2;var d=Ye;Ye|=4;try{J0(a,s);var m=xd,b=ry(s.containerInfo),S=m.focusedElem,T=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&sy(S.ownerDocument.documentElement,S)){if(T!==null&&Pf(S)){var L=T.start,P=T.end;if(P===void 0&&(P=L),"selectionStart"in S)S.selectionStart=L,S.selectionEnd=Math.min(P,S.value.length);else{var I=S.ownerDocument||document,H=I&&I.defaultView||window;if(H.getSelection){var $=H.getSelection(),le=S.textContent.length,ge=Math.min(T.start,le),Qe=T.end===void 0?ge:Math.min(T.end,le);!$.extend&&ge>Qe&&(b=Qe,Qe=ge,ge=b);var N=iy(S,ge),E=iy(S,Qe);if(N&&E&&($.rangeCount!==1||$.anchorNode!==N.node||$.anchorOffset!==N.offset||$.focusNode!==E.node||$.focusOffset!==E.offset)){var z=I.createRange();z.setStart(N.node,N.offset),$.removeAllRanges(),ge>Qe?($.addRange(z),$.extend(E.node,E.offset)):(z.setEnd(E.node,E.offset),$.addRange(z))}}}}for(I=[],$=S;$=$.parentNode;)$.nodeType===1&&I.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<I.length;S++){var K=I[S];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}jc=!!vd,xd=vd=null}finally{Ye=d,Q.p=u,V.T=o}}s.current=a,At=2}}function xb(){if(At===2){At=0;var s=as,a=Xr,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=V.T,V.T=null;var u=Q.p;Q.p=2;var d=Ye;Ye|=4;try{I0(s,a.alternate,a)}finally{Ye=d,Q.p=u,V.T=o}}At=3}}function wb(){if(At===4||At===3){At=0,kf();var s=as,a=Xr,o=ji,u=lb;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?At=5:(At=0,Xr=as=null,kb(s,s.pendingLanes));var d=s.pendingLanes;if(d===0&&(rs=null),Tf(o),a=a.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Zn,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=V.T,d=Q.p,Q.p=2,V.T=null;try{for(var m=s.onRecoverableError,b=0;b<u.length;b++){var S=u[b];m(S.value,{componentStack:S.stack})}}finally{V.T=a,Q.p=d}}(ji&3)!==0&&wc(),ni(s),d=s.pendingLanes,(o&261930)!==0&&(d&42)!==0?s===ad?kl++:(kl=0,ad=s):kl=0,Sl(0)}}function kb(s,a){(s.pooledCacheLanes&=a)===0&&(a=s.pooledCache,a!=null&&(s.pooledCache=null,il(a)))}function wc(){return vb(),xb(),wb(),Sb()}function Sb(){if(At!==5)return!1;var s=as,a=sd;sd=0;var o=Tf(ji),u=V.T,d=Q.p;try{Q.p=32>o?32:o,V.T=null,o=rd,rd=null;var m=as,b=ji;if(At=0,Xr=as=null,ji=0,(Ye&6)!==0)throw Error(i(331));var S=Ye;if(Ye|=4,sb(m.current),tb(m,m.current,b,o),Ye=S,Sl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Zn,m)}catch{}return!0}finally{Q.p=d,V.T=u,kb(s,a)}}function Ab(s,a,o){a=Mn(o,a),a=Hh(s.stateNode,a,2),s=Ji(s,a,2),s!==null&&(Ga(s,2),ni(s))}function Ie(s,a,o){if(s.tag===3)Ab(s,s,o);else for(;a!==null;){if(a.tag===3){Ab(a,s,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(rs===null||!rs.has(u))){s=Mn(o,s),o=C0(2),u=Ji(a,o,2),u!==null&&(T0(o,u,a,s),Ga(u,2),ni(u));break}}a=a.return}}function cd(s,a,o){var u=s.pingCache;if(u===null){u=s.pingCache=new TA;var d=new Set;u.set(a,d)}else d=u.get(a),d===void 0&&(d=new Set,u.set(a,d));d.has(o)||(td=!0,d.add(o),s=DA.bind(null,s,a,o),a.then(s,s))}function DA(s,a,o){var u=s.pingCache;u!==null&&u.delete(a),s.pingedLanes|=s.suspendedLanes&o,s.warmLanes&=~o,et===s&&(Ne&o)===o&&(ut===4||ut===3&&(Ne&62914560)===Ne&&300>Pt()-mc?(Ye&2)===0&&Qr(s,0):nd|=o,Fr===Ne&&(Fr=0)),ni(s)}function Cb(s,a){a===0&&(a=vg()),s=Ws(s,a),s!==null&&(Ga(s,a),ni(s))}function NA(s){var a=s.memoizedState,o=0;a!==null&&(o=a.retryLane),Cb(s,o)}function jA(s,a){var o=0;switch(s.tag){case 31:case 13:var u=s.stateNode,d=s.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=s.stateNode;break;case 22:u=s.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),Cb(s,o)}function BA(s,a){return qa(s,a)}var kc=null,Jr=null,ud=!1,Sc=!1,fd=!1,os=0;function ni(s){s!==Jr&&s.next===null&&(Jr===null?kc=Jr=s:Jr=Jr.next=s),Sc=!0,ud||(ud=!0,LA())}function Sl(s,a){if(!fd&&Sc){fd=!0;do for(var o=!1,u=kc;u!==null;){if(s!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var b=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-It(42|s)+1)-1,m&=d&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Rb(u,m))}else m=Ne,m=Mo(u,u===et?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||$a(u,m)||(o=!0,Rb(u,m));u=u.next}while(o);fd=!1}}function zA(){Tb()}function Tb(){Sc=ud=!1;var s=0;os!==0&&YA()&&(s=os);for(var a=Pt(),o=null,u=kc;u!==null;){var d=u.next,m=Mb(u,a);m===0?(u.next=null,o===null?kc=d:o.next=d,d===null&&(Jr=o)):(o=u,(s!==0||(m&3)!==0)&&(Sc=!0)),u=d}At!==0&&At!==5||Sl(s),os!==0&&(os=0)}function Mb(s,a){for(var o=s.suspendedLanes,u=s.pingedLanes,d=s.expirationTimes,m=s.pendingLanes&-62914561;0<m;){var b=31-It(m),S=1<<b,T=d[b];T===-1?((S&o)===0||(S&u)!==0)&&(d[b]=o2(S,a)):T<=a&&(s.expiredLanes|=S),m&=~S}if(a=et,o=Ne,o=Mo(s,s===a?o:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),u=s.callbackNode,o===0||s===a&&(Ke===2||Ke===9)||s.cancelPendingCommit!==null)return u!==null&&u!==null&&Va(u),s.callbackNode=null,s.callbackPriority=0;if((o&3)===0||$a(s,o)){if(a=o&-o,a===s.callbackPriority)return a;switch(u!==null&&Va(u),Tf(o)){case 2:case 8:o=St;break;case 32:o=Wi;break;case 268435456:o=Ua;break;default:o=Wi}return u=Eb.bind(null,s),o=qa(o,u),s.callbackPriority=a,s.callbackNode=o,a}return u!==null&&u!==null&&Va(u),s.callbackPriority=2,s.callbackNode=null,2}function Eb(s,a){if(At!==0&&At!==5)return s.callbackNode=null,s.callbackPriority=0,null;var o=s.callbackNode;if(wc()&&s.callbackNode!==o)return null;var u=Ne;return u=Mo(s,s===et?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),u===0?null:(cb(s,u,a),Mb(s,Pt()),s.callbackNode!=null&&s.callbackNode===o?Eb.bind(null,s):null)}function Rb(s,a){if(wc())return null;cb(s,a,!0)}function LA(){IA(function(){(Ye&6)!==0?qa(He,zA):Tb()})}function hd(){if(os===0){var s=Hr;s===0&&(s=Ao,Ao<<=1,(Ao&261888)===0&&(Ao=256)),os=s}return os}function Ob(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:Do(""+s)}function Db(s,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,s.id&&o.setAttribute("form",s.id),a.parentNode.insertBefore(o,a),s=new FormData(s),o.parentNode.removeChild(o),s}function _A(s,a,o,u,d){if(a==="submit"&&o&&o.stateNode===d){var m=Ob((d[en]||null).action),b=u.submitter;b&&(a=(a=b[en]||null)?Ob(a.formAction):b.getAttribute("formAction"),a!==null&&(m=a,b=null));var S=new zo("action","action",null,u,d);s.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(os!==0){var T=b?Db(d,b):new FormData(d);Nh(o,{pending:!0,data:T,method:d.method,action:m},null,T)}}else typeof m=="function"&&(S.preventDefault(),T=b?Db(d,b):new FormData(d),Nh(o,{pending:!0,data:T,method:d.method,action:m},m,T))},currentTarget:d}]})}}for(var dd=0;dd<Ff.length;dd++){var pd=Ff[dd],HA=pd.toLowerCase(),qA=pd[0].toUpperCase()+pd.slice(1);$n(HA,"on"+qA)}$n(oy,"onAnimationEnd"),$n(cy,"onAnimationIteration"),$n(uy,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(tA,"onTransitionRun"),$n(nA,"onTransitionStart"),$n(iA,"onTransitionCancel"),$n(fy,"onTransitionEnd"),Ar("onMouseEnter",["mouseout","mouseover"]),Ar("onMouseLeave",["mouseout","mouseover"]),Ar("onPointerEnter",["pointerout","pointerover"]),Ar("onPointerLeave",["pointerout","pointerover"]),Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Nb(s,a){a=(a&4)!==0;for(var o=0;o<s.length;o++){var u=s[o],d=u.event;u=u.listeners;e:{var m=void 0;if(a)for(var b=u.length-1;0<=b;b--){var S=u[b],T=S.instance,L=S.currentTarget;if(S=S.listener,T!==m&&d.isPropagationStopped())break e;m=S,d.currentTarget=L;try{m(d)}catch(P){Ho(P)}d.currentTarget=null,m=T}else for(b=0;b<u.length;b++){if(S=u[b],T=S.instance,L=S.currentTarget,S=S.listener,T!==m&&d.isPropagationStopped())break e;m=S,d.currentTarget=L;try{m(d)}catch(P){Ho(P)}d.currentTarget=null,m=T}}}}function Oe(s,a){var o=a[Mf];o===void 0&&(o=a[Mf]=new Set);var u=s+"__bubble";o.has(u)||(jb(a,s,2,!1),o.add(u))}function md(s,a,o){var u=0;a&&(u|=4),jb(o,s,u,a)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function gd(s){if(!s[Ac]){s[Ac]=!0,Tg.forEach(function(o){o!=="selectionchange"&&(VA.has(o)||md(o,!1,s),md(o,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[Ac]||(a[Ac]=!0,md("selectionchange",!1,a))}}function jb(s,a,o,u){switch(ov(a)){case 2:var d=pC;break;case 8:d=mC;break;default:d=Dd}o=d.bind(null,a,o,s),d=void 0,!Lf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),u?d!==void 0?s.addEventListener(a,o,{capture:!0,passive:d}):s.addEventListener(a,o,!0):d!==void 0?s.addEventListener(a,o,{passive:d}):s.addEventListener(a,o,!1)}function yd(s,a,o,u,d){var m=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===d)break;if(b===4)for(b=u.return;b!==null;){var T=b.tag;if((T===3||T===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;S!==null;){if(b=wr(S),b===null)return;if(T=b.tag,T===5||T===6||T===26||T===27){u=m=b;continue e}S=S.parentNode}}u=u.return}Hg(function(){var L=m,P=Bf(o),I=[];e:{var H=hy.get(s);if(H!==void 0){var $=zo,le=s;switch(s){case"keypress":if(jo(o)===0)break e;case"keydown":case"keyup":$=j2;break;case"focusin":le="focus",$=Vf;break;case"focusout":le="blur",$=Vf;break;case"beforeblur":case"afterblur":$=Vf;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=w2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=L2;break;case oy:case cy:case uy:$=A2;break;case fy:$=H2;break;case"scroll":case"scrollend":$=v2;break;case"wheel":$=V2;break;case"copy":case"cut":case"paste":$=T2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Gg;break;case"toggle":case"beforetoggle":$=$2}var ge=(a&4)!==0,Qe=!ge&&(s==="scroll"||s==="scrollend"),N=ge?H!==null?H+"Capture":null:H;ge=[];for(var E=L,z;E!==null;){var K=E;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||N===null||(K=Ya(E,N),K!=null&&ge.push(Cl(E,K,z))),Qe)break;E=E.return}0<ge.length&&(H=new $(H,le,null,o,P),I.push({event:H,listeners:ge}))}}if((a&7)===0){e:{if(H=s==="mouseover"||s==="pointerover",$=s==="mouseout"||s==="pointerout",H&&o!==jf&&(le=o.relatedTarget||o.fromElement)&&(wr(le)||le[xr]))break e;if(($||H)&&(H=P.window===P?P:(H=P.ownerDocument)?H.defaultView||H.parentWindow:window,$?(le=o.relatedTarget||o.toElement,$=L,le=le?wr(le):null,le!==null&&(Qe=l(le),ge=le.tag,le!==Qe||ge!==5&&ge!==27&&ge!==6)&&(le=null)):($=null,le=L),$!==le)){if(ge=Ug,K="onMouseLeave",N="onMouseEnter",E="mouse",(s==="pointerout"||s==="pointerover")&&(ge=Gg,K="onPointerLeave",N="onPointerEnter",E="pointer"),Qe=$==null?H:Pa($),z=le==null?H:Pa(le),H=new ge(K,E+"leave",$,o,P),H.target=Qe,H.relatedTarget=z,K=null,wr(P)===L&&(ge=new ge(N,E+"enter",le,o,P),ge.target=z,ge.relatedTarget=Qe,K=ge),Qe=K,$&&le)t:{for(ge=UA,N=$,E=le,z=0,K=N;K;K=ge(K))z++;K=0;for(var pe=E;pe;pe=ge(pe))K++;for(;0<z-K;)N=ge(N),z--;for(;0<K-z;)E=ge(E),K--;for(;z--;){if(N===E||E!==null&&N===E.alternate){ge=N;break t}N=ge(N),E=ge(E)}ge=null}else ge=null;$!==null&&Bb(I,H,$,ge,!1),le!==null&&Qe!==null&&Bb(I,Qe,le,ge,!0)}}e:{if(H=L?Pa(L):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var Ge=Qg;else if(Fg(H))if(Zg)Ge=Z2;else{Ge=X2;var oe=F2}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?L&&Nf(L.elementType)&&(Ge=Qg):Ge=Q2;if(Ge&&(Ge=Ge(s,L))){Xg(I,Ge,o,P);break e}oe&&oe(s,H,L),s==="focusout"&&L&&H.type==="number"&&L.memoizedProps.value!=null&&Df(H,"number",H.value)}switch(oe=L?Pa(L):window,s){case"focusin":(Fg(oe)||oe.contentEditable==="true")&&(Or=oe,Yf=L,el=null);break;case"focusout":el=Yf=Or=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,ay(I,o,P);break;case"selectionchange":if(eA)break;case"keydown":case"keyup":ay(I,o,P)}var Ae;if($f)e:{switch(s){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Rr?Kg(s,o)&&(je="onCompositionEnd"):s==="keydown"&&o.keyCode===229&&(je="onCompositionStart");je&&(Wg&&o.locale!=="ko"&&(Rr||je!=="onCompositionStart"?je==="onCompositionEnd"&&Rr&&(Ae=qg()):(Yi=P,_f="value"in Yi?Yi.value:Yi.textContent,Rr=!0)),oe=Cc(L,je),0<oe.length&&(je=new $g(je,s,null,o,P),I.push({event:je,listeners:oe}),Ae?je.data=Ae:(Ae=Ig(o),Ae!==null&&(je.data=Ae)))),(Ae=W2?P2(s,o):Y2(s,o))&&(je=Cc(L,"onBeforeInput"),0<je.length&&(oe=new $g("onBeforeInput","beforeinput",null,o,P),I.push({event:oe,listeners:je}),oe.data=Ae)),_A(I,s,L,o,P)}Nb(I,a)})}function Cl(s,a,o){return{instance:s,listener:a,currentTarget:o}}function Cc(s,a){for(var o=a+"Capture",u=[];s!==null;){var d=s,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ya(s,o),d!=null&&u.unshift(Cl(s,d,m)),d=Ya(s,a),d!=null&&u.push(Cl(s,d,m))),s.tag===3)return u;s=s.return}return[]}function UA(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function Bb(s,a,o,u,d){for(var m=a._reactName,b=[];o!==null&&o!==u;){var S=o,T=S.alternate,L=S.stateNode;if(S=S.tag,T!==null&&T===u)break;S!==5&&S!==26&&S!==27||L===null||(T=L,d?(L=Ya(o,m),L!=null&&b.unshift(Cl(o,L,T))):d||(L=Ya(o,m),L!=null&&b.push(Cl(o,L,T)))),o=o.return}b.length!==0&&s.push({event:a,listeners:b})}var $A=/\r\n?/g,GA=/\u0000|\uFFFD/g;function zb(s){return(typeof s=="string"?s:""+s).replace($A,`
`).replace(GA,"")}function Lb(s,a){return a=zb(a),zb(s)===a}function Xe(s,a,o,u,d,m){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||Tr(s,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&Tr(s,""+u);break;case"className":Ro(s,"class",u);break;case"tabIndex":Ro(s,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ro(s,o,u);break;case"style":Lg(s,u,m);break;case"data":if(a!=="object"){Ro(s,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){s.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){s.removeAttribute(o);break}u=Do(""+u),s.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){s.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&Xe(s,a,"name",d.name,d,null),Xe(s,a,"formEncType",d.formEncType,d,null),Xe(s,a,"formMethod",d.formMethod,d,null),Xe(s,a,"formTarget",d.formTarget,d,null)):(Xe(s,a,"encType",d.encType,d,null),Xe(s,a,"method",d.method,d,null),Xe(s,a,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){s.removeAttribute(o);break}u=Do(""+u),s.setAttribute(o,u);break;case"onClick":u!=null&&(s.onclick=bi);break;case"onScroll":u!=null&&Oe("scroll",s);break;case"onScrollEnd":u!=null&&Oe("scrollend",s);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"multiple":s.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":s.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){s.removeAttribute("xlink:href");break}o=Do(""+u),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,""+u):s.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,""):s.removeAttribute(o);break;case"capture":case"download":u===!0?s.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,u):s.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?s.setAttribute(o,u):s.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?s.removeAttribute(o):s.setAttribute(o,u);break;case"popover":Oe("beforetoggle",s),Oe("toggle",s),Eo(s,"popover",u);break;case"xlinkActuate":yi(s,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":yi(s,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":yi(s,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":yi(s,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":yi(s,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":yi(s,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":yi(s,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":yi(s,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":yi(s,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Eo(s,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=y2.get(o)||o,Eo(s,o,u))}}function bd(s,a,o,u,d,m){switch(o){case"style":Lg(s,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"children":typeof u=="string"?Tr(s,u):(typeof u=="number"||typeof u=="bigint")&&Tr(s,""+u);break;case"onScroll":u!=null&&Oe("scroll",s);break;case"onScrollEnd":u!=null&&Oe("scrollend",s);break;case"onClick":u!=null&&(s.onclick=bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),a=o.slice(2,d?o.length-7:void 0),m=s[en]||null,m=m!=null?m[o]:null,typeof m=="function"&&s.removeEventListener(a,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in s?s[o]=null:s.hasAttribute(o)&&s.removeAttribute(o)),s.addEventListener(a,u,d);break e}o in s?s[o]=u:u===!0?s.setAttribute(o,""):Eo(s,o,u)}}}function Lt(s,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",s),Oe("load",s);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(s,a,m,b,o,null)}}d&&Xe(s,a,"srcSet",o.srcSet,o,null),u&&Xe(s,a,"src",o.src,o,null);return;case"input":Oe("invalid",s);var S=m=b=d=null,T=null,L=null;for(u in o)if(o.hasOwnProperty(u)){var P=o[u];if(P!=null)switch(u){case"name":d=P;break;case"type":b=P;break;case"checked":T=P;break;case"defaultChecked":L=P;break;case"value":m=P;break;case"defaultValue":S=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,a));break;default:Xe(s,a,u,P,o,null)}}Ng(s,m,S,T,L,b,d,!1);return;case"select":Oe("invalid",s),u=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(S=o[d],S!=null))switch(d){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":u=S;default:Xe(s,a,d,S,o,null)}a=m,o=b,s.multiple=!!u,a!=null?Cr(s,!!u,a,!1):o!=null&&Cr(s,!!u,o,!0);return;case"textarea":Oe("invalid",s),m=d=u=null;for(b in o)if(o.hasOwnProperty(b)&&(S=o[b],S!=null))switch(b){case"value":u=S;break;case"defaultValue":d=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:Xe(s,a,b,S,o,null)}Bg(s,u,d,m);return;case"option":for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null)&&(T==="selected"?s.selected=u&&typeof u!="function"&&typeof u!="symbol":Xe(s,a,T,u,o,null));return;case"dialog":Oe("beforetoggle",s),Oe("toggle",s),Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":Oe("load",s);break;case"video":case"audio":for(u=0;u<Al.length;u++)Oe(Al[u],s);break;case"image":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"embed":case"source":case"link":Oe("error",s),Oe("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(s,a,L,u,o,null)}return;default:if(Nf(a)){for(P in o)o.hasOwnProperty(P)&&(u=o[P],u!==void 0&&bd(s,a,P,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&Xe(s,a,S,u,o,null))}function WA(s,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,S=null,T=null,L=null,P=null;for($ in o){var I=o[$];if(o.hasOwnProperty($)&&I!=null)switch($){case"checked":break;case"value":break;case"defaultValue":T=I;default:u.hasOwnProperty($)||Xe(s,a,$,null,u,I)}}for(var H in u){var $=u[H];if(I=o[H],u.hasOwnProperty(H)&&($!=null||I!=null))switch(H){case"type":m=$;break;case"name":d=$;break;case"checked":L=$;break;case"defaultChecked":P=$;break;case"value":b=$;break;case"defaultValue":S=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,a));break;default:$!==I&&Xe(s,a,H,$,u,I)}}Of(s,b,S,T,L,P,m,d);return;case"select":$=b=S=H=null;for(m in o)if(T=o[m],o.hasOwnProperty(m)&&T!=null)switch(m){case"value":break;case"multiple":$=T;default:u.hasOwnProperty(m)||Xe(s,a,m,null,u,T)}for(d in u)if(m=u[d],T=o[d],u.hasOwnProperty(d)&&(m!=null||T!=null))switch(d){case"value":H=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==T&&Xe(s,a,d,m,u,T)}a=S,o=b,u=$,H!=null?Cr(s,!!o,H,!1):!!u!=!!o&&(a!=null?Cr(s,!!o,a,!0):Cr(s,!!o,o?[]:"",!1));return;case"textarea":$=H=null;for(S in o)if(d=o[S],o.hasOwnProperty(S)&&d!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Xe(s,a,S,null,u,d)}for(b in u)if(d=u[b],m=o[b],u.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":H=d;break;case"defaultValue":$=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&Xe(s,a,b,d,u,m)}jg(s,H,$);return;case"option":for(var le in o)H=o[le],o.hasOwnProperty(le)&&H!=null&&!u.hasOwnProperty(le)&&(le==="selected"?s.selected=!1:Xe(s,a,le,null,u,H));for(T in u)H=u[T],$=o[T],u.hasOwnProperty(T)&&H!==$&&(H!=null||$!=null)&&(T==="selected"?s.selected=H&&typeof H!="function"&&typeof H!="symbol":Xe(s,a,T,H,u,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)H=o[ge],o.hasOwnProperty(ge)&&H!=null&&!u.hasOwnProperty(ge)&&Xe(s,a,ge,null,u,H);for(L in u)if(H=u[L],$=o[L],u.hasOwnProperty(L)&&H!==$&&(H!=null||$!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,a));break;default:Xe(s,a,L,H,u,$)}return;default:if(Nf(a)){for(var Qe in o)H=o[Qe],o.hasOwnProperty(Qe)&&H!==void 0&&!u.hasOwnProperty(Qe)&&bd(s,a,Qe,void 0,u,H);for(P in u)H=u[P],$=o[P],!u.hasOwnProperty(P)||H===$||H===void 0&&$===void 0||bd(s,a,P,H,u,$);return}}for(var N in o)H=o[N],o.hasOwnProperty(N)&&H!=null&&!u.hasOwnProperty(N)&&Xe(s,a,N,null,u,H);for(I in u)H=u[I],$=o[I],!u.hasOwnProperty(I)||H===$||H==null&&$==null||Xe(s,a,I,H,u,$)}function _b(s){switch(s){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PA(){if(typeof performance.getEntriesByType=="function"){for(var s=0,a=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],m=d.transferSize,b=d.initiatorType,S=d.duration;if(m&&S&&_b(b)){for(b=0,S=d.responseEnd,u+=1;u<o.length;u++){var T=o[u],L=T.startTime;if(L>S)break;var P=T.transferSize,I=T.initiatorType;P&&_b(I)&&(T=T.responseEnd,b+=P*(T<S?1:(S-L)/(T-L)))}if(--u,a+=8*(m+b)/(d.duration/1e3),s++,10<s)break}}if(0<s)return a/s/1e6}return navigator.connection&&(s=navigator.connection.downlink,typeof s=="number")?s:5}var vd=null,xd=null;function Tc(s){return s.nodeType===9?s:s.ownerDocument}function Hb(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qb(s,a){if(s===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&a==="foreignObject"?0:s}function wd(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var kd=null;function YA(){var s=window.event;return s&&s.type==="popstate"?s===kd?!1:(kd=s,!0):(kd=null,!1)}var Vb=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,Ub=typeof Promise=="function"?Promise:void 0,IA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ub<"u"?function(s){return Ub.resolve(null).then(s).catch(FA)}:Vb;function FA(s){setTimeout(function(){throw s})}function cs(s){return s==="head"}function $b(s,a){var o=a,u=0;do{var d=o.nextSibling;if(s.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){s.removeChild(d),ia(a);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Tl(s.ownerDocument.documentElement);else if(o==="head"){o=s.ownerDocument.head,Tl(o);for(var m=o.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[Wa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}}else o==="body"&&Tl(s.ownerDocument.body);o=d}while(o);ia(a)}function Gb(s,a){var o=s;s=0;do{var u=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(s===0)break;s--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||s++;o=u}while(o)}function Sd(s){var a=s.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sd(o),Ef(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}s.removeChild(o)}}function XA(s,a,o,u){for(;s.nodeType===1;){var d=o;if(s.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(u){if(!s[Wa])switch(a){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(m=s.getAttribute("rel"),m==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(m!==d.rel||s.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||s.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||s.getAttribute("title")!==(d.title==null?null:d.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(m=s.getAttribute("src"),(m!==(d.src==null?null:d.src)||s.getAttribute("type")!==(d.type==null?null:d.type)||s.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(a==="input"&&s.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&s.getAttribute("name")===m)return s}else return s;if(s=Nn(s.nextSibling),s===null)break}return null}function QA(s,a,o){if(a==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!o||(s=Nn(s.nextSibling),s===null))return null;return s}function Wb(s,a){for(;s.nodeType!==8;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!a||(s=Nn(s.nextSibling),s===null))return null;return s}function Ad(s){return s.data==="$?"||s.data==="$~"}function Cd(s){return s.data==="$!"||s.data==="$?"&&s.ownerDocument.readyState!=="loading"}function ZA(s,a){var o=s.ownerDocument;if(s.data==="$~")s._reactRetry=a;else if(s.data!=="$?"||o.readyState!=="loading")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),s._reactRetry=u}}function Nn(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return s}var Td=null;function Pb(s){s=s.nextSibling;for(var a=0;s;){if(s.nodeType===8){var o=s.data;if(o==="/$"||o==="/&"){if(a===0)return Nn(s.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}s=s.nextSibling}return null}function Yb(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var o=s.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return s;a--}else o!=="/$"&&o!=="/&"||a++}s=s.previousSibling}return null}function Kb(s,a,o){switch(a=Tc(o),s){case"html":if(s=a.documentElement,!s)throw Error(i(452));return s;case"head":if(s=a.head,!s)throw Error(i(453));return s;case"body":if(s=a.body,!s)throw Error(i(454));return s;default:throw Error(i(451))}}function Tl(s){for(var a=s.attributes;a.length;)s.removeAttributeNode(a[0]);Ef(s)}var jn=new Map,Ib=new Set;function Mc(s){return typeof s.getRootNode=="function"?s.getRootNode():s.nodeType===9?s:s.ownerDocument}var Bi=Q.d;Q.d={f:JA,r:eC,D:tC,C:nC,L:iC,m:sC,X:aC,S:rC,M:lC};function JA(){var s=Bi.f(),a=bc();return s||a}function eC(s){var a=kr(s);a!==null&&a.tag===5&&a.type==="form"?f0(a):Bi.r(s)}var ea=typeof document>"u"?null:document;function Fb(s,a,o){var u=ea;if(u&&typeof a=="string"&&a){var d=Cn(a);d='link[rel="'+s+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Ib.has(d)||(Ib.add(d),s={rel:s,crossOrigin:o,href:a},u.querySelector(d)===null&&(a=u.createElement("link"),Lt(a,"link",s),Mt(a),u.head.appendChild(a)))}}function tC(s){Bi.D(s),Fb("dns-prefetch",s,null)}function nC(s,a){Bi.C(s,a),Fb("preconnect",s,a)}function iC(s,a,o){Bi.L(s,a,o);var u=ea;if(u&&s&&a){var d='link[rel="preload"][as="'+Cn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Cn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Cn(o.imageSizes)+'"]')):d+='[href="'+Cn(s)+'"]';var m=d;switch(a){case"style":m=ta(s);break;case"script":m=na(s)}jn.has(m)||(s=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:s,as:a},o),jn.set(m,s),u.querySelector(d)!==null||a==="style"&&u.querySelector(Ml(m))||a==="script"&&u.querySelector(El(m))||(a=u.createElement("link"),Lt(a,"link",s),Mt(a),u.head.appendChild(a)))}}function sC(s,a){Bi.m(s,a);var o=ea;if(o&&s){var u=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+Cn(u)+'"][href="'+Cn(s)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=na(s)}if(!jn.has(m)&&(s=y({rel:"modulepreload",href:s},a),jn.set(m,s),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(El(m)))return}u=o.createElement("link"),Lt(u,"link",s),Mt(u),o.head.appendChild(u)}}}function rC(s,a,o){Bi.S(s,a,o);var u=ea;if(u&&s){var d=Sr(u).hoistableStyles,m=ta(s);a=a||"default";var b=d.get(m);if(!b){var S={loading:0,preload:null};if(b=u.querySelector(Ml(m)))S.loading=5;else{s=y({rel:"stylesheet",href:s,"data-precedence":a},o),(o=jn.get(m))&&Md(s,o);var T=b=u.createElement("link");Mt(T),Lt(T,"link",s),T._p=new Promise(function(L,P){T.onload=L,T.onerror=P}),T.addEventListener("load",function(){S.loading|=1}),T.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Ec(b,a,u)}b={type:"stylesheet",instance:b,count:1,state:S},d.set(m,b)}}}function aC(s,a){Bi.X(s,a);var o=ea;if(o&&s){var u=Sr(o).hoistableScripts,d=na(s),m=u.get(d);m||(m=o.querySelector(El(d)),m||(s=y({src:s,async:!0},a),(a=jn.get(d))&&Ed(s,a),m=o.createElement("script"),Mt(m),Lt(m,"link",s),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function lC(s,a){Bi.M(s,a);var o=ea;if(o&&s){var u=Sr(o).hoistableScripts,d=na(s),m=u.get(d);m||(m=o.querySelector(El(d)),m||(s=y({src:s,async:!0,type:"module"},a),(a=jn.get(d))&&Ed(s,a),m=o.createElement("script"),Mt(m),Lt(m,"link",s),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function Xb(s,a,o,u){var d=(d=de.current)?Mc(d):null;if(!d)throw Error(i(446));switch(s){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=ta(o.href),o=Sr(d).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){s=ta(o.href);var m=Sr(d).hoistableStyles,b=m.get(s);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(s,b),(m=d.querySelector(Ml(s)))&&!m._p&&(b.instance=m,b.state.loading=5),jn.has(s)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},jn.set(s,o),m||oC(d,s,o,b.state))),a&&u===null)throw Error(i(528,""));return b}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=na(o),o=Sr(d).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,s))}}function ta(s){return'href="'+Cn(s)+'"'}function Ml(s){return'link[rel="stylesheet"]['+s+"]"}function Qb(s){return y({},s,{"data-precedence":s.precedence,precedence:null})}function oC(s,a,o,u){s.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=s.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Lt(a,"link",o),Mt(a),s.head.appendChild(a))}function na(s){return'[src="'+Cn(s)+'"]'}function El(s){return"script[async]"+s}function Zb(s,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=s.querySelector('style[data-href~="'+Cn(o.href)+'"]');if(u)return a.instance=u,Mt(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(s.ownerDocument||s).createElement("style"),Mt(u),Lt(u,"style",d),Ec(u,o.precedence,s),a.instance=u;case"stylesheet":d=ta(o.href);var m=s.querySelector(Ml(d));if(m)return a.state.loading|=4,a.instance=m,Mt(m),m;u=Qb(o),(d=jn.get(d))&&Md(u,d),m=(s.ownerDocument||s).createElement("link"),Mt(m);var b=m;return b._p=new Promise(function(S,T){b.onload=S,b.onerror=T}),Lt(m,"link",u),a.state.loading|=4,Ec(m,o.precedence,s),a.instance=m;case"script":return m=na(o.src),(d=s.querySelector(El(m)))?(a.instance=d,Mt(d),d):(u=o,(d=jn.get(m))&&(u=y({},o),Ed(u,d)),s=s.ownerDocument||s,d=s.createElement("script"),Mt(d),Lt(d,"link",u),s.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,Ec(u,o.precedence,s));return a.instance}function Ec(s,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,b=0;b<u.length;b++){var S=u[b];if(S.dataset.precedence===a)m=S;else if(m!==d)break}m?m.parentNode.insertBefore(s,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(s,a.firstChild))}function Md(s,a){s.crossOrigin==null&&(s.crossOrigin=a.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=a.referrerPolicy),s.title==null&&(s.title=a.title)}function Ed(s,a){s.crossOrigin==null&&(s.crossOrigin=a.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=a.referrerPolicy),s.integrity==null&&(s.integrity=a.integrity)}var Rc=null;function Jb(s,a,o){if(Rc===null){var u=new Map,d=Rc=new Map;d.set(o,u)}else d=Rc,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(s))return u;for(u.set(s,null),o=o.getElementsByTagName(s),d=0;d<o.length;d++){var m=o[d];if(!(m[Wa]||m[Nt]||s==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(a)||"";b=s+b;var S=u.get(b);S?S.push(m):u.set(b,[m])}}return u}function ev(s,a,o){s=s.ownerDocument||s,s.head.insertBefore(o,a==="title"?s.querySelector("head > title"):null)}function cC(s,a,o){if(o===1||a.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(s=a.disabled,typeof a.precedence=="string"&&s==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function tv(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}function uC(s,a,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=ta(u.href),m=a.querySelector(Ml(d));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(s.count++,s=Oc.bind(s),a.then(s,s)),o.state.loading|=4,o.instance=m,Mt(m);return}m=a.ownerDocument||a,u=Qb(u),(d=jn.get(d))&&Md(u,d),m=m.createElement("link"),Mt(m);var b=m;b._p=new Promise(function(S,T){b.onload=S,b.onerror=T}),Lt(m,"link",u),o.instance=m}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(s.count++,o=Oc.bind(s),a.addEventListener("load",o),a.addEventListener("error",o))}}var Rd=0;function fC(s,a){return s.stylesheets&&s.count===0&&Nc(s,s.stylesheets),0<s.count||0<s.imgCount?function(o){var u=setTimeout(function(){if(s.stylesheets&&Nc(s,s.stylesheets),s.unsuspend){var m=s.unsuspend;s.unsuspend=null,m()}},6e4+a);0<s.imgBytes&&Rd===0&&(Rd=62500*PA());var d=setTimeout(function(){if(s.waitingForImages=!1,s.count===0&&(s.stylesheets&&Nc(s,s.stylesheets),s.unsuspend)){var m=s.unsuspend;s.unsuspend=null,m()}},(s.imgBytes>Rd?50:800)+a);return s.unsuspend=o,function(){s.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function Oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var Dc=null;function Nc(s,a){s.stylesheets=null,s.unsuspend!==null&&(s.count++,Dc=new Map,a.forEach(hC,s),Dc=null,Oc.call(s))}function hC(s,a){if(!(a.state.loading&4)){var o=Dc.get(s);if(o)var u=o.get(null);else{o=new Map,Dc.set(s,o);for(var d=s.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}d=a.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,d),o.set(b,d),this.count++,u=Oc.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(d,s.firstChild)),a.state.loading|=4}}var Rl={$$typeof:_,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function dC(s,a,o,u,d,m,b,S,T){this.tag=1,this.containerInfo=s,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Af(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.hiddenUpdates=Af(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function nv(s,a,o,u,d,m,b,S,T,L,P,I){return s=new dC(s,a,o,b,T,L,P,I,S),a=1,m===!0&&(a|=24),m=hn(3,null,null,a),s.current=m,m.stateNode=s,a=oh(),a.refCount++,s.pooledCache=a,a.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:a},hh(m),s}function iv(s){return s?(s=jr,s):jr}function sv(s,a,o,u,d,m){d=iv(d),u.context===null?u.context=d:u.pendingContext=d,u=Zi(a),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Ji(s,u,a),o!==null&&(ln(o,s,a),ll(o,s,a))}function rv(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var o=s.retryLane;s.retryLane=o!==0&&o<a?o:a}}function Od(s,a){rv(s,a),(s=s.alternate)&&rv(s,a)}function av(s){if(s.tag===13||s.tag===31){var a=Ws(s,67108864);a!==null&&ln(a,s,67108864),Od(s,67108864)}}function lv(s){if(s.tag===13||s.tag===31){var a=yn();a=Cf(a);var o=Ws(s,a);o!==null&&ln(o,s,a),Od(s,a)}}var jc=!0;function pC(s,a,o,u){var d=V.T;V.T=null;var m=Q.p;try{Q.p=2,Dd(s,a,o,u)}finally{Q.p=m,V.T=d}}function mC(s,a,o,u){var d=V.T;V.T=null;var m=Q.p;try{Q.p=8,Dd(s,a,o,u)}finally{Q.p=m,V.T=d}}function Dd(s,a,o,u){if(jc){var d=Nd(u);if(d===null)yd(s,a,u,Bc,o),cv(s,u);else if(yC(d,s,a,o,u))u.stopPropagation();else if(cv(s,u),a&4&&-1<gC.indexOf(s)){for(;d!==null;){var m=kr(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=qs(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var T=1<<31-It(b);S.entanglements[1]|=T,b&=~T}ni(m),(Ye&6)===0&&(gc=Pt()+500,Sl(0))}}break;case 31:case 13:S=Ws(m,2),S!==null&&ln(S,m,2),bc(),Od(m,2)}if(m=Nd(u),m===null&&yd(s,a,u,Bc,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else yd(s,a,u,null,o)}}function Nd(s){return s=Bf(s),jd(s)}var Bc=null;function jd(s){if(Bc=null,s=wr(s),s!==null){var a=l(s);if(a===null)s=null;else{var o=a.tag;if(o===13){if(s=c(a),s!==null)return s;s=null}else if(o===31){if(s=f(a),s!==null)return s;s=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null)}}return Bc=s,null}function ov(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case He:return 2;case St:return 8;case Wi:case vr:return 32;case Ua:return 268435456;default:return 32}default:return 32}}var Bd=!1,us=null,fs=null,hs=null,Ol=new Map,Dl=new Map,ds=[],gC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(s,a){switch(s){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":Ol.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(a.pointerId)}}function Nl(s,a,o,u,d,m){return s===null||s.nativeEvent!==m?(s={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},a!==null&&(a=kr(a),a!==null&&av(a)),s):(s.eventSystemFlags|=u,a=s.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),s)}function yC(s,a,o,u,d){switch(a){case"focusin":return us=Nl(us,s,a,o,u,d),!0;case"dragenter":return fs=Nl(fs,s,a,o,u,d),!0;case"mouseover":return hs=Nl(hs,s,a,o,u,d),!0;case"pointerover":var m=d.pointerId;return Ol.set(m,Nl(Ol.get(m)||null,s,a,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Dl.set(m,Nl(Dl.get(m)||null,s,a,o,u,d)),!0}return!1}function uv(s){var a=wr(s.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){s.blockedOn=a,Ag(s.priority,function(){lv(o)});return}}else if(a===31){if(a=f(o),a!==null){s.blockedOn=a,Ag(s.priority,function(){lv(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){s.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}s.blockedOn=null}function zc(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var o=Nd(s.nativeEvent);if(o===null){o=s.nativeEvent;var u=new o.constructor(o.type,o);jf=u,o.target.dispatchEvent(u),jf=null}else return a=kr(o),a!==null&&av(a),s.blockedOn=o,!1;a.shift()}return!0}function fv(s,a,o){zc(s)&&o.delete(a)}function bC(){Bd=!1,us!==null&&zc(us)&&(us=null),fs!==null&&zc(fs)&&(fs=null),hs!==null&&zc(hs)&&(hs=null),Ol.forEach(fv),Dl.forEach(fv)}function Lc(s,a){s.blockedOn===a&&(s.blockedOn=null,Bd||(Bd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,bC)))}var _c=null;function hv(s){_c!==s&&(_c=s,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){_c===s&&(_c=null);for(var a=0;a<s.length;a+=3){var o=s[a],u=s[a+1],d=s[a+2];if(typeof u!="function"){if(jd(u||o)===null)continue;break}var m=kr(o);m!==null&&(s.splice(a,3),a-=3,Nh(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function ia(s){function a(T){return Lc(T,s)}us!==null&&Lc(us,s),fs!==null&&Lc(fs,s),hs!==null&&Lc(hs,s),Ol.forEach(a),Dl.forEach(a);for(var o=0;o<ds.length;o++){var u=ds[o];u.blockedOn===s&&(u.blockedOn=null)}for(;0<ds.length&&(o=ds[0],o.blockedOn===null);)uv(o),o.blockedOn===null&&ds.shift();if(o=(s.ownerDocument||s).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],b=d[en]||null;if(typeof m=="function")b||hv(o);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[en]||null)S=b.formAction;else if(jd(d)!==null)continue}else S=b.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),hv(o)}}}function dv(){function s(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function a(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",s),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",s),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),d!==null&&(d(),d=null)}}}function zd(s){this._internalRoot=s}Hc.prototype.render=zd.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=yn();sv(o,u,s,a,null,null)},Hc.prototype.unmount=zd.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;sv(s.current,2,null,s,null,null),bc(),a[xr]=null}};function Hc(s){this._internalRoot=s}Hc.prototype.unstable_scheduleHydration=function(s){if(s){var a=Sg();s={blockedOn:null,target:s,priority:a};for(var o=0;o<ds.length&&a!==0&&a<ds[o].priority;o++);ds.splice(o,0,s),o===0&&uv(s)}};var pv=e.version;if(pv!=="19.2.7")throw Error(i(527,pv,"19.2.7"));Q.findDOMNode=function(s){var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(i(188)):(s=Object.keys(s).join(","),Error(i(268,s)));return s=p(a),s=s!==null?g(s):null,s=s===null?null:s.stateNode,s};var vC={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Zn=qc.inject(vC),Kt=qc}catch{}}return Bl.createRoot=function(s,a){if(!r(s))throw Error(i(299));var o=!1,u="",d=w0,m=k0,b=S0;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),a=nv(s,1,!1,null,null,o,u,null,d,m,b,dv),s[xr]=a.current,gd(s),new zd(a)},Bl.hydrateRoot=function(s,a,o){if(!r(s))throw Error(i(299));var u=!1,d="",m=w0,b=k0,S=S0,T=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.formState!==void 0&&(T=o.formState)),a=nv(s,1,!0,a,o??null,u,d,T,m,b,S,dv),a.context=iv(null),o=a.current,u=yn(),u=Cf(u),d=Zi(u),d.callback=null,Ji(o,d,u),o=u,a.current.lanes=o,Ga(a,o),ni(a),s[xr]=a.current,gd(s),new Hc(a)},Bl.version="19.2.7",Bl}var Av;function OC(){if(Av)return Hd.exports;Av=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hd.exports=RC(),Hd.exports}var DC=OC();const Cx=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();const NC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const jC=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());const Cv=n=>{const e=jC(n);return e.charAt(0).toUpperCase()+e.slice(1)};var $d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const BC=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zC=j.createContext({}),LC=()=>j.useContext(zC),_C=j.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:i,className:r="",children:l,iconNode:c,...f},h)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:y=!1,color:v="currentColor",className:w=""}=LC()??{},k=i??y?Number(t??g)*24/Number(e??p):t??g;return j.createElement("svg",{ref:h,...$d,width:e??p??$d.width,height:e??p??$d.height,stroke:n??v,strokeWidth:k,className:Cx("lucide",w,r),...!l&&!BC(f)&&{"aria-hidden":"true"},...f},[...c.map(([A,C])=>j.createElement(A,C)),...Array.isArray(l)?l:[l]])});const _e=(n,e)=>{const t=j.forwardRef(({className:i,...r},l)=>j.createElement(_C,{ref:l,iconNode:e,className:Cx(`lucide-${NC(Cv(n))}`,`lucide-${n}`,i),...r}));return t.displayName=Cv(n),t};const HC=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Tx=_e("activity",HC);const qC=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],VC=_e("arrow-down-to-line",qC);const UC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Em=_e("arrow-right",UC);const $C=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Mx=_e("braces",$C);const GC=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],WC=_e("building-2",GC);const PC=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],YC=_e("check",PC);const KC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],to=_e("circle-alert",KC);const IC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ep=_e("circle-question-mark",IC);const FC=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],XC=_e("copy",FC);const QC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ZC=_e("cpu",QC);const JC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],eT=_e("database",JC);const tT=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],nT=_e("file-code-corner",tT);const iT=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],sT=_e("files",iT);const rT=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],aT=_e("fingerprint-pattern",rT);const lT=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],oT=_e("flower-2",lT);const cT=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],uT=_e("git-branch",cT);const fT=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],hT=_e("grid-2x2",fT);const dT=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Tv=_e("library",dT);const pT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],mT=_e("maximize-2",pT);const gT=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],yT=_e("microscope",gT);const bT=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],wu=_e("music-2",bT);const vT=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],xT=_e("package-check",vT);const wT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],kT=_e("panel-left-close",wT);const ST=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Mv=_e("panel-left-open",ST);const AT=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],CT=_e("pause",AT);const TT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ju=_e("play",TT);const MT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ET=_e("refresh-cw",MT);const RT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],OT=_e("rotate-ccw",RT);const DT=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],NT=_e("route",DT);const jT=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],Rp=_e("scan-line",jT);const BT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ex=_e("search",BT);const zT=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],LT=_e("shapes",zT);const _T=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],HT=_e("sparkles",_T);const qT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],VT=_e("square",qT);const UT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rm=_e("x",UT),Rx="rasa.theme",hu=Object.freeze({dark:Object.freeze({colorScheme:"dark",surface:"#0d0f12",surfaceLift:"#111720",panel:"#12161c",panelSoft:"#0f141a",panelRaised:"#151a22",line:"#29313d",lineStrong:"#3a4656",text:"#e8edf2",muted:"#9aa6b6",dim:"#6d7885",gold:"#e8b84a",blue:"#78a7ff",green:"#83d7aa",violet:"#b08cff",teal:"#63c5c6",red:"#ff8ca3",success:"#83d7aa",danger:"#ff8ca3",warning:"#e8b84a",codeBg:"#0e1319",buttonText:"#0d0f12",shadow:"rgba(0, 0, 0, 0.18)",backdrop:"rgba(6, 10, 14, 0.45)",radius:"8px"}),light:Object.freeze({colorScheme:"light",surface:"#f7f8f5",surfaceLift:"#ffffff",panel:"#ffffff",panelSoft:"#f1f4f0",panelRaised:"#fbfcfa",line:"#d8ddd5",lineStrong:"#b8c0b4",text:"#17201a",muted:"#5d6a62",dim:"#879188",gold:"#8a6418",blue:"#315fa8",green:"#24704a",violet:"#6d4bab",teal:"#237071",red:"#a43b50",success:"#24704a",danger:"#a43b50",warning:"#8a6418",codeBg:"#f7faf6",buttonText:"#ffffff",shadow:"rgba(28, 37, 31, 0.12)",backdrop:"rgba(30, 38, 32, 0.25)",radius:"8px"})});hu.dark;function $T(n=":root"){return`
    ${n} {
      ${Gd(hu.dark)}
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

    ${n}[data-rasa-theme="light"] {
      ${Gd(hu.light)}
    }

    ${n}[data-rasa-theme="dark"] {
      ${Gd(hu.dark)}
    }
  `}function GT(n=document.documentElement){const e=n.dataset.rasaTheme;if(e==="light"||e==="dark")return e;const t=localStorage.getItem(Rx);return t==="light"||t==="dark"?t:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark"}function WT(n,e=document.documentElement){const t=n==="light"?"light":"dark";return e.dataset.rasaTheme=t,e.setAttribute("data-theme",t),localStorage.setItem(Rx,t),window.dispatchEvent(new CustomEvent("rasa-theme-change",{detail:{theme:t}})),t}function Gd(n){return`
      color-scheme: ${n.colorScheme};
      --rasa-surface: ${n.surface};
      --rasa-surface-lift: ${n.surfaceLift};
      --rasa-panel: ${n.panel};
      --rasa-panel-soft: ${n.panelSoft};
      --rasa-panel-raised: ${n.panelRaised};
      --rasa-line: ${n.line};
      --rasa-line-strong: ${n.lineStrong};
      --rasa-text: ${n.text};
      --rasa-muted: ${n.muted};
      --rasa-dim: ${n.dim};
      --rasa-gold: ${n.gold};
      --rasa-blue: ${n.blue};
      --rasa-green: ${n.green};
      --rasa-violet: ${n.violet};
      --rasa-teal: ${n.teal};
      --rasa-red: ${n.red};
      --rasa-success: ${n.success};
      --rasa-danger: ${n.danger};
      --rasa-warning: ${n.warning};
      --rasa-code-bg: ${n.codeBg};
      --rasa-button-text: ${n.buttonText};
      --rasa-shadow: ${n.shadow};
      --rasa-backdrop: ${n.backdrop};
      --rasa-radius: ${n.radius};
  `}const PT=Object.freeze([Object.freeze({id:"inspect",href:"/inspect/",label:"Inspect"}),Object.freeze({id:"studio",href:"/studio/",label:"Studio"}),Object.freeze({id:"conformance",href:"/conformance-report/",label:"Conformance"}),Object.freeze({id:"roadmap",href:"/roadmap/",label:"Roadmap",hidden:!0}),Object.freeze({id:"engineering",href:"/blog/",label:"Engineering",hidden:!0})]);function YT(){return`
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
  `}function KT({activeId:n="",actions:e=null,children:t,className:i="",runtimeLabel:r="",runtimeStatus:l="idle",runtimeTitle:c="",...f}){const[h,p]=j.useState(()=>GT());return j.useLayoutEffect(()=>{WT(h)},[h]),x.jsxs("div",{className:i,...f,children:[x.jsx("style",{children:$T()}),x.jsx("style",{children:YT()}),x.jsx(IT,{actions:e,activeId:n,onThemeToggle:()=>p(g=>g==="dark"?"light":"dark"),runtimeLabel:r,runtimeStatus:l,runtimeTitle:c,theme:h}),t]})}function IT({activeId:n="",runtimeLabel:e="",runtimeStatus:t="idle",runtimeTitle:i="",theme:r="dark",onThemeToggle:l,actions:c=null}){return x.jsxs("header",{className:"rasa-site-header",children:[x.jsx("a",{"aria-label":"Rasa home",className:"rasa-site-brand",href:"/",children:x.jsx("img",{alt:"Rasa",src:"/assets/brand/logo.svg"})}),x.jsx("nav",{"aria-label":"Primary navigation",className:"rasa-site-nav",children:PT.map(f=>x.jsx("a",{"aria-current":f.id===n?"page":void 0,"data-nav-hidden":f.hidden?"true":void 0,href:f.href,children:f.label},f.id))}),x.jsxs("div",{className:"rasa-site-actions",children:[e?x.jsxs("span",{className:"rasa-site-runtime","data-status":t,title:i||void 0,children:[x.jsx("i",{}),x.jsx("span",{children:e})]}):null,c,x.jsx("button",{"aria-label":`Switch to ${r==="dark"?"light":"dark"} theme`,className:"rasa-site-theme","data-role":"site-theme-toggle",onClick:l,type:"button",children:r==="dark"?"Light":"Dark"})]})]})}let Op=[],Ox=[];(()=>{let n="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,t=0;e<n.length;e++)(e%2?Ox:Op).push(t=t+n[e])})();function FT(n){if(n<768)return!1;for(let e=0,t=Op.length;;){let i=e+t>>1;if(n<Op[i])t=i;else if(n>=Ox[i])e=i+1;else return!0;if(e==t)return!1}}function Ev(n){return n>=127462&&n<=127487}const Rv=8205;function XT(n,e,t=!0,i=!0){return(t?Dx:QT)(n,e,i)}function Dx(n,e,t){if(e==n.length)return e;e&&Nx(n.charCodeAt(e))&&jx(n.charCodeAt(e-1))&&e--;let i=Wd(n,e);for(e+=Ov(i);e<n.length;){let r=Wd(n,e);if(i==Rv||r==Rv||t&&FT(r))e+=Ov(r),i=r;else if(Ev(r)){let l=0,c=e-2;for(;c>=0&&Ev(Wd(n,c));)l++,c-=2;if(l%2==0)break;e+=2}else break}return e}function QT(n,e,t){for(;e>0;){let i=Dx(n,e-2,t);if(i<e)return i;e--}return 0}function Wd(n,e){let t=n.charCodeAt(e);if(!jx(t)||e+1==n.length)return t;let i=n.charCodeAt(e+1);return Nx(i)?(t-55296<<10)+(i-56320)+65536:t}function Nx(n){return n>=56320&&n<57344}function jx(n){return n>=55296&&n<56320}function Ov(n){return n<65536?1:2}class Ue{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,i){[e,t]=ka(this,e,t);let r=[];return this.decompose(0,e,r,2),i.length&&i.decompose(0,i.length,r,3),this.decompose(t,this.length,r,1),ci.from(r,this.length-(t-e)+i.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=ka(this,e,t);let i=[];return this.decompose(e,t,i,0),ci.from(i,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),i=this.length-this.scanIdentical(e,-1),r=new Il(this),l=new Il(e);for(let c=t,f=t;;){if(r.next(c),l.next(c),c=0,r.lineBreak!=l.lineBreak||r.done!=l.done||r.value!=l.value)return!1;if(f+=r.value.length,r.done||f>=i)return!0}}iter(e=1){return new Il(this,e)}iterRange(e,t=this.length){return new Bx(this,e,t)}iterLines(e,t){let i;if(e==null)i=this.iter();else{t==null&&(t=this.lines+1);let r=this.line(e).from;i=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new zx(i)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?Ue.empty:e.length<=32?new gt(e):ci.from(gt.split(e,[]))}}class gt extends Ue{constructor(e,t=ZT(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,i,r){for(let l=0;;l++){let c=this.text[l],f=r+c.length;if((t?i:f)>=e)return new JT(r,f,i,c);r=f+1,i++}}decompose(e,t,i,r){let l=e<=0&&t>=this.length?this:new gt(Dv(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(r&1){let c=i.pop(),f=du(l.text,c.text.slice(),0,l.length);if(f.length<=32)i.push(new gt(f,c.length+l.length));else{let h=f.length>>1;i.push(new gt(f.slice(0,h)),new gt(f.slice(h)))}}else i.push(l)}replace(e,t,i){if(!(i instanceof gt))return super.replace(e,t,i);[e,t]=ka(this,e,t);let r=du(this.text,du(i.text,Dv(this.text,0,e)),t),l=this.length+i.length-(t-e);return r.length<=32?new gt(r,l):ci.from(gt.split(r,[]),l)}sliceString(e,t=this.length,i=`
`){[e,t]=ka(this,e,t);let r="";for(let l=0,c=0;l<=t&&c<this.text.length;c++){let f=this.text[c],h=l+f.length;l>e&&c&&(r+=i),e<h&&t>l&&(r+=f.slice(Math.max(0,e-l),t-l)),l=h+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let i=[],r=-1;for(let l of e)i.push(l),r+=l.length+1,i.length==32&&(t.push(new gt(i,r)),i=[],r=-1);return r>-1&&t.push(new gt(i,r)),t}}class ci extends Ue{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let i of e)this.lines+=i.lines}lineInner(e,t,i,r){for(let l=0;;l++){let c=this.children[l],f=r+c.length,h=i+c.lines-1;if((t?h:f)>=e)return c.lineInner(e,t,i,r);r=f+1,i=h+1}}decompose(e,t,i,r){for(let l=0,c=0;c<=t&&l<this.children.length;l++){let f=this.children[l],h=c+f.length;if(e<=h&&t>=c){let p=r&((c<=e?1:0)|(h>=t?2:0));c>=e&&h<=t&&!p?i.push(f):f.decompose(e-c,t-c,i,p)}c=h+1}}replace(e,t,i){if([e,t]=ka(this,e,t),i.lines<this.lines)for(let r=0,l=0;r<this.children.length;r++){let c=this.children[r],f=l+c.length;if(e>=l&&t<=f){let h=c.replace(e-l,t-l,i),p=this.lines-c.lines+h.lines;if(h.lines<p>>4&&h.lines>p>>6){let g=this.children.slice();return g[r]=h,new ci(g,this.length-(t-e)+i.length)}return super.replace(l,f,h)}l=f+1}return super.replace(e,t,i)}sliceString(e,t=this.length,i=`
`){[e,t]=ka(this,e,t);let r="";for(let l=0,c=0;l<this.children.length&&c<=t;l++){let f=this.children[l],h=c+f.length;c>e&&l&&(r+=i),e<h&&t>c&&(r+=f.sliceString(e-c,t-c,i)),c=h+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof ci))return 0;let i=0,[r,l,c,f]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;r+=t,l+=t){if(r==c||l==f)return i;let h=this.children[r],p=e.children[l];if(h!=p)return i+h.scanIdentical(p,t);i+=h.length+1}}static from(e,t=e.reduce((i,r)=>i+r.length+1,-1)){let i=0;for(let w of e)i+=w.lines;if(i<32){let w=[];for(let k of e)k.flatten(w);return new gt(w,t)}let r=Math.max(32,i>>5),l=r<<1,c=r>>1,f=[],h=0,p=-1,g=[];function y(w){let k;if(w.lines>l&&w instanceof ci)for(let A of w.children)y(A);else w.lines>c&&(h>c||!h)?(v(),f.push(w)):w instanceof gt&&h&&(k=g[g.length-1])instanceof gt&&w.lines+k.lines<=32?(h+=w.lines,p+=w.length+1,g[g.length-1]=new gt(k.text.concat(w.text),k.length+1+w.length)):(h+w.lines>r&&v(),h+=w.lines,p+=w.length+1,g.push(w))}function v(){h!=0&&(f.push(g.length==1?g[0]:ci.from(g,p)),p=-1,h=g.length=0)}for(let w of e)y(w);return v(),f.length==1?f[0]:new ci(f,t)}}Ue.empty=new gt([""],0);function ZT(n){let e=-1;for(let t of n)e+=t.length+1;return e}function du(n,e,t=0,i=1e9){for(let r=0,l=0,c=!0;l<n.length&&r<=i;l++){let f=n[l],h=r+f.length;h>=t&&(h>i&&(f=f.slice(0,i-r)),r<t&&(f=f.slice(t-r)),c?(e[e.length-1]+=f,c=!1):e.push(f)),r=h+1}return e}function Dv(n,e,t){return du(n,[""],e,t)}class Il{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof gt?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,r=this.nodes[i],l=this.offsets[i],c=l>>1,f=r instanceof gt?r.text.length:r.children.length;if(c==(t>0?f:0)){if(i==0)return this.done=!0,this.value="",this;t>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((l&1)==(t>0?0:1)){if(this.offsets[i]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof gt){let h=r.text[c+(t<0?-1:0)];if(this.offsets[i]+=t,h.length>Math.max(0,e))return this.value=e==0?h:t>0?h.slice(e):h.slice(0,h.length-e),this;e-=h.length}else{let h=r.children[c+(t<0?-1:0)];e>h.length?(e-=h.length,this.offsets[i]+=t):(t<0&&this.offsets[i]--,this.nodes.push(h),this.offsets.push(t>0?1:(h instanceof gt?h.text.length:h.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Bx{constructor(e,t,i){this.value="",this.done=!1,this.cursor=new Il(e,t>i?-1:1),this.pos=t>i?e.length:0,this.from=Math.min(t,i),this.to=Math.max(t,i)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let i=t<0?this.pos-this.from:this.to-this.pos;e>i&&(e=i),i-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=i?r:t<0?r.slice(r.length-i):r.slice(0,i),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class zx{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:i,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):i?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(Ue.prototype[Symbol.iterator]=function(){return this.iter()},Il.prototype[Symbol.iterator]=Bx.prototype[Symbol.iterator]=zx.prototype[Symbol.iterator]=function(){return this});class JT{constructor(e,t,i,r){this.from=e,this.to=t,this.number=i,this.text=r}get length(){return this.to-this.from}}function ka(n,e,t){return e=Math.max(0,Math.min(n.length,e)),[e,Math.max(e,Math.min(n.length,t))]}function Ot(n,e,t=!0,i=!0){return XT(n,e,t,i)}function eM(n){return n>=56320&&n<57344}function tM(n){return n>=55296&&n<56320}function yr(n,e){let t=n.charCodeAt(e);if(!tM(t)||e+1==n.length)return t;let i=n.charCodeAt(e+1);return eM(i)?(t-55296<<10)+(i-56320)+65536:t}function Lx(n){return n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode((n>>10)+55296,(n&1023)+56320))}function mo(n){return n<65536?1:2}const Dp=/\r\n?|\n/;var Zt=(function(n){return n[n.Simple=0]="Simple",n[n.TrackDel=1]="TrackDel",n[n.TrackBefore=2]="TrackBefore",n[n.TrackAfter=3]="TrackAfter",n})(Zt||(Zt={}));class pi{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t+1];e+=i<0?this.sections[t]:i}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,i=0,r=0;t<this.sections.length;){let l=this.sections[t++],c=this.sections[t++];c<0?(e(i,r,l),r+=l):r+=c,i+=l}}iterChangedRanges(e,t=!1){Np(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let i=this.sections[t++],r=this.sections[t++];r<0?e.push(i,r):e.push(r,i)}return new pi(e)}composeDesc(e){return this.empty?e:e.empty?this:_x(this,e)}mapDesc(e,t=!1){return e.empty?this:jp(this,e,t)}mapPos(e,t=-1,i=Zt.Simple){let r=0,l=0;for(let c=0;c<this.sections.length;){let f=this.sections[c++],h=this.sections[c++],p=r+f;if(h<0){if(p>e)return l+(e-r);l+=f}else{if(i!=Zt.Simple&&p>=e&&(i==Zt.TrackDel&&r<e&&p>e||i==Zt.TrackBefore&&r<e||i==Zt.TrackAfter&&p>e))return null;if(p>e||p==e&&t<0&&!f)return e==r||t<0?l:l+h;l+=h}r=p}if(e>r)throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);return l}touchesRange(e,t=e){for(let i=0,r=0;i<this.sections.length&&r<=t;){let l=this.sections[i++],c=this.sections[i++],f=r+l;if(c>=0&&r<=t&&f>=e)return r<e&&f>t?"cover":!0;r=f}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let i=this.sections[t++],r=this.sections[t++];e+=(e?" ":"")+i+(r>=0?":"+r:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new pi(e)}static create(e){return new pi(e)}}class Ct extends pi{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Np(this,(t,i,r,l,c)=>e=e.replace(r,r+(i-t),c),!1),e}mapDesc(e,t=!1){return jp(this,e,t,!0)}invert(e){let t=this.sections.slice(),i=[];for(let r=0,l=0;r<t.length;r+=2){let c=t[r],f=t[r+1];if(f>=0){t[r]=f,t[r+1]=c;let h=r>>1;for(;i.length<h;)i.push(Ue.empty);i.push(c?e.slice(l,l+c):Ue.empty)}l+=c}return new Ct(t,i)}compose(e){return this.empty?e:e.empty?this:_x(this,e,!0)}map(e,t=!1){return e.empty?this:jp(this,e,t,!0)}iterChanges(e,t=!1){Np(this,e,t)}get desc(){return pi.create(this.sections)}filter(e){let t=[],i=[],r=[],l=new no(this);e:for(let c=0,f=0;;){let h=c==e.length?1e9:e[c++];for(;f<h||f==h&&l.len==0;){if(l.done)break e;let g=Math.min(l.len,h-f);$t(r,g,-1);let y=l.ins==-1?-1:l.off==0?l.ins:0;$t(t,g,y),y>0&&xs(i,t,l.text),l.forward(g),f+=g}let p=e[c++];for(;f<p;){if(l.done)break e;let g=Math.min(l.len,p-f);$t(t,g,-1),$t(r,g,l.ins==-1?-1:l.off==0?l.ins:0),l.forward(g),f+=g}}return{changes:new Ct(t,i),filtered:pi.create(r)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t],r=this.sections[t+1];r<0?e.push(i):r==0?e.push([i]):e.push([i].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,i){let r=[],l=[],c=0,f=null;function h(g=!1){if(!g&&!r.length)return;c<t&&$t(r,t-c,-1);let y=new Ct(r,l);f=f?f.compose(y.map(f)):y,r=[],l=[],c=0}function p(g){if(Array.isArray(g))for(let y of g)p(y);else if(g instanceof Ct){if(g.length!=t)throw new RangeError(`Mismatched change set length (got ${g.length}, expected ${t})`);h(),f=f?f.compose(g.map(f)):g}else{let{from:y,to:v=y,insert:w}=g;if(y>v||y<0||v>t)throw new RangeError(`Invalid change range ${y} to ${v} (in doc of length ${t})`);let k=w?typeof w=="string"?Ue.of(w.split(i||Dp)):w:Ue.empty,A=k.length;if(y==v&&A==0)return;y<c&&h(),y>c&&$t(r,y-c,-1),$t(r,v-y,A),xs(l,r,k),c=v}}return p(e),h(!f),f}static empty(e){return new Ct(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],i=[];for(let r=0;r<e.length;r++){let l=e[r];if(typeof l=="number")t.push(l,-1);else{if(!Array.isArray(l)||typeof l[0]!="number"||l.some((c,f)=>f&&typeof c!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(l.length==1)t.push(l[0],0);else{for(;i.length<r;)i.push(Ue.empty);i[r]=Ue.of(l.slice(1)),t.push(l[0],i[r].length)}}}return new Ct(t,i)}static createSet(e,t){return new Ct(e,t)}}function $t(n,e,t,i=!1){if(e==0&&t<=0)return;let r=n.length-2;r>=0&&t<=0&&t==n[r+1]?n[r]+=e:r>=0&&e==0&&n[r]==0?n[r+1]+=t:i?(n[r]+=e,n[r+1]+=t):n.push(e,t)}function xs(n,e,t){if(t.length==0)return;let i=e.length-2>>1;if(i<n.length)n[n.length-1]=n[n.length-1].append(t);else{for(;n.length<i;)n.push(Ue.empty);n.push(t)}}function Np(n,e,t){let i=n.inserted;for(let r=0,l=0,c=0;c<n.sections.length;){let f=n.sections[c++],h=n.sections[c++];if(h<0)r+=f,l+=f;else{let p=r,g=l,y=Ue.empty;for(;p+=f,g+=h,h&&i&&(y=y.append(i[c-2>>1])),!(t||c==n.sections.length||n.sections[c+1]<0);)f=n.sections[c++],h=n.sections[c++];e(r,p,l,g,y),r=p,l=g}}}function jp(n,e,t,i=!1){let r=[],l=i?[]:null,c=new no(n),f=new no(e);for(let h=-1;;){if(c.done&&f.len||f.done&&c.len)throw new Error("Mismatched change set lengths");if(c.ins==-1&&f.ins==-1){let p=Math.min(c.len,f.len);$t(r,p,-1),c.forward(p),f.forward(p)}else if(f.ins>=0&&(c.ins<0||h==c.i||c.off==0&&(f.len<c.len||f.len==c.len&&!t))){let p=f.len;for($t(r,f.ins,-1);p;){let g=Math.min(c.len,p);c.ins>=0&&h<c.i&&c.len<=g&&($t(r,0,c.ins),l&&xs(l,r,c.text),h=c.i),c.forward(g),p-=g}f.next()}else if(c.ins>=0){let p=0,g=c.len;for(;g;)if(f.ins==-1){let y=Math.min(g,f.len);p+=y,g-=y,f.forward(y)}else if(f.ins==0&&f.len<g)g-=f.len,f.next();else break;$t(r,p,h<c.i?c.ins:0),l&&h<c.i&&xs(l,r,c.text),h=c.i,c.forward(c.len-g)}else{if(c.done&&f.done)return l?Ct.createSet(r,l):pi.create(r);throw new Error("Mismatched change set lengths")}}}function _x(n,e,t=!1){let i=[],r=t?[]:null,l=new no(n),c=new no(e);for(let f=!1;;){if(l.done&&c.done)return r?Ct.createSet(i,r):pi.create(i);if(l.ins==0)$t(i,l.len,0,f),l.next();else if(c.len==0&&!c.done)$t(i,0,c.ins,f),r&&xs(r,i,c.text),c.next();else{if(l.done||c.done)throw new Error("Mismatched change set lengths");{let h=Math.min(l.len2,c.len),p=i.length;if(l.ins==-1){let g=c.ins==-1?-1:c.off?0:c.ins;$t(i,h,g,f),r&&g&&xs(r,i,c.text)}else c.ins==-1?($t(i,l.off?0:l.len,h,f),r&&xs(r,i,l.textBit(h))):($t(i,l.off?0:l.len,c.off?0:c.ins,f),r&&!c.off&&xs(r,i,c.text));f=(l.ins>h||c.ins>=0&&c.len>h)&&(f||i.length>p),l.forward2(h),c.forward(h)}}}}class no{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?Ue.empty:e[t]}textBit(e){let{inserted:t}=this.set,i=this.i-2>>1;return i>=t.length&&!e?Ue.empty:t[i].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class bs{constructor(e,t,i,r){this.from=e,this.to=t,this.flags=i,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(e,t=-1){let i,r;return this.empty?i=r=e.mapPos(this.from,t):(i=e.mapPos(this.from,1),r=e.mapPos(this.to,-1)),i==this.from&&r==this.to?this:new bs(i,r,this.flags,this.goalColumn)}extend(e,t=e,i=0){if(e<=this.anchor&&t>=this.anchor)return Y.range(e,t,void 0,void 0,i);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return Y.range(this.anchor,r,void 0,void 0,i)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return Y.range(e.anchor,e.head)}static create(e,t,i,r){return new bs(e,t,i,r)}}class Y{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:Y.create(this.ranges.map(i=>i.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let i=0;i<this.ranges.length;i++)if(!this.ranges[i].eq(e.ranges[i],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new Y([this.main],0)}addRange(e,t=!0){return Y.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let i=this.ranges.slice();return i[t]=e,Y.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new Y(e.ranges.map(t=>bs.fromJSON(t)),e.main)}static single(e,t=e){return new Y([Y.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let i=0,r=0;r<e.length;r++){let l=e[r];if(l.empty?l.from<=i:l.from<i)return Y.normalized(e.slice(),t);i=l.to}return new Y(e,t)}static cursor(e,t=0,i,r){return bs.create(e,e,(t==0?0:t<0?8:16)|(i==null?7:Math.min(6,i)),r)}static range(e,t,i,r,l){let c=r==null?7:Math.min(6,r);return!l&&e!=t&&(l=t<e?1:-1),l&&(c|=l<0?8:16),t<e?bs.create(t,e,c|32,i):bs.create(e,t,c,i)}static undirectionalRange(e,t){return bs.create(e,t,64,void 0)}static normalized(e,t=0){let i=e[t];e.sort((r,l)=>r.from-l.from),t=e.indexOf(i);for(let r=1;r<e.length;r++){let l=e[r],c=e[r-1];if(l.empty?l.from<=c.to:l.from<c.to){let f=c.from,h=Math.max(l.to,c.to);r<=t&&t--,e.splice(--r,2,l.anchor>l.head?Y.range(h,f):Y.range(f,h))}}return new Y(e,t)}}function Hx(n,e){for(let t of n.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let Om=0;class re{constructor(e,t,i,r,l){this.combine=e,this.compareInput=t,this.compare=i,this.isStatic=r,this.id=Om++,this.default=e([]),this.extensions=typeof l=="function"?l(this):l}get reader(){return this}static define(e={}){return new re(e.combine||(t=>t),e.compareInput||((t,i)=>t===i),e.compare||(e.combine?(t,i)=>t===i:Dm),!!e.static,e.enables)}of(e){return new pu([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new pu(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new pu(e,this,2,t)}from(e,t){return t||(t=i=>i),this.compute([e],i=>t(i.field(e)))}}function Dm(n,e){return n==e||n.length==e.length&&n.every((t,i)=>t===e[i])}class pu{constructor(e,t,i,r){this.dependencies=e,this.facet=t,this.type=i,this.value=r,this.id=Om++}dynamicSlot(e){var t;let i=this.value,r=this.facet.compareInput,l=this.id,c=e[l]>>1,f=this.type==2,h=!1,p=!1,g=[];for(let y of this.dependencies)y=="doc"?h=!0:y=="selection"?p=!0:(((t=e[y.id])!==null&&t!==void 0?t:1)&1)==0&&g.push(e[y.id]);return{create(y){return y.values[c]=i(y),1},update(y,v){if(h&&v.docChanged||p&&(v.docChanged||v.selection)||Bp(y,g)){let w=i(y);if(f?!Nv(w,y.values[c],r):!r(w,y.values[c]))return y.values[c]=w,1}return 0},reconfigure:(y,v)=>{let w,k=v.config.address[l];if(k!=null){let A=Su(v,k);if(this.dependencies.every(C=>C instanceof re?v.facet(C)===y.facet(C):C instanceof Dt?v.field(C,!1)==y.field(C,!1):!0)||(f?Nv(w=i(y),A,r):r(w=i(y),A)))return y.values[c]=A,0}else w=i(y);return y.values[c]=w,1}}}get extension(){return this}}function Nv(n,e,t){if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(!t(n[i],e[i]))return!1;return!0}function Bp(n,e){let t=!1;for(let i of e)Fl(n,i)&1&&(t=!0);return t}function nM(n,e,t){let i=t.map(h=>n[h.id]),r=t.map(h=>h.type),l=i.filter(h=>!(h&1)),c=n[e.id]>>1;function f(h){let p=[];for(let g=0;g<i.length;g++){let y=Su(h,i[g]);if(r[g]==2)for(let v of y)p.push(v);else p.push(y)}return e.combine(p)}return{create(h){for(let p of i)Fl(h,p);return h.values[c]=f(h),1},update(h,p){if(!Bp(h,l))return 0;let g=f(h);return e.compare(g,h.values[c])?0:(h.values[c]=g,1)},reconfigure(h,p){let g=Bp(h,i),y=p.config.facets[e.id],v=p.facet(e);if(y&&!g&&Dm(t,y))return h.values[c]=v,0;let w=f(h);return e.compare(w,v)?(h.values[c]=v,0):(h.values[c]=w,1)}}}const Vc=re.define({static:!0});class Dt{constructor(e,t,i,r,l){this.id=e,this.createF=t,this.updateF=i,this.compareF=r,this.spec=l,this.provides=void 0}static define(e){let t=new Dt(Om++,e.create,e.update,e.compare||((i,r)=>i===r),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(Vc).find(i=>i.field==this);return(t?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:i=>(i.values[t]=this.create(i),1),update:(i,r)=>{let l=i.values[t],c=this.updateF(l,r);return this.compareF(l,c)?0:(i.values[t]=c,1)},reconfigure:(i,r)=>{let l=i.facet(Vc),c=r.facet(Vc),f;return(f=l.find(h=>h.field==this))&&f!=c.find(h=>h.field==this)?(i.values[t]=f.create(i),1):r.config.address[this.id]!=null?(i.values[t]=r.field(this),0):(i.values[t]=this.create(i),1)}}}init(e){return[this,Vc.of({field:this,create:e})]}get extension(){return this}}const rr={lowest:4,low:3,default:2,high:1,highest:0};function zl(n){return e=>new qx(e,n)}const ef={highest:zl(rr.highest),high:zl(rr.high),default:zl(rr.default),low:zl(rr.low),lowest:zl(rr.lowest)};class qx{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}}class tf{of(e){return new zp(this,e)}reconfigure(e){return tf.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class zp{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}}class ku{constructor(e,t,i,r,l,c){for(this.base=e,this.compartments=t,this.dynamicSlots=i,this.address=r,this.staticValues=l,this.facets=c,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,i){let r=[],l=Object.create(null),c=new Map;for(let v of iM(e,t,c))v instanceof Dt?r.push(v):(l[v.facet.id]||(l[v.facet.id]=[])).push(v);let f=Object.create(null),h=[],p=[];for(let v of r)f[v.id]=p.length<<1,p.push(w=>v.slot(w));let g=i?.config.facets;for(let v in l){let w=l[v],k=w[0].facet,A=g&&g[v]||[];if(w.every(C=>C.type==0))if(f[k.id]=h.length<<1|1,Dm(A,w))h.push(i.facet(k));else{let C=k.combine(w.map(O=>O.value));h.push(i&&k.compare(C,i.facet(k))?i.facet(k):C)}else{for(let C of w)C.type==0?(f[C.id]=h.length<<1|1,h.push(C.value)):(f[C.id]=p.length<<1,p.push(O=>C.dynamicSlot(O)));f[k.id]=p.length<<1,p.push(C=>nM(C,k,w))}}let y=p.map(v=>v(f));return new ku(e,c,y,f,h,l)}}function iM(n,e,t){let i=[[],[],[],[],[]],r=new Map;function l(c,f){let h=r.get(c);if(h!=null){if(h<=f)return;let p=i[h].indexOf(c);p>-1&&i[h].splice(p,1),c instanceof zp&&t.delete(c.compartment)}if(r.set(c,f),Array.isArray(c))for(let p of c)l(p,f);else if(c instanceof zp){if(t.has(c.compartment))throw new RangeError("Duplicate use of compartment in extensions");let p=e.get(c.compartment)||c.inner;t.set(c.compartment,p),l(p,f)}else if(c instanceof qx)l(c.inner,c.prec);else if(c instanceof Dt)i[f].push(c),c.provides&&l(c.provides,f);else if(c instanceof pu)i[f].push(c),c.facet.extensions&&l(c.facet.extensions,rr.default);else{let p=c.extension;if(!p)throw new Error(`Unrecognized extension value in extension set (${c}).`);if(p==c)throw new Error(`Unrecognized extension value in extension set (${c}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);l(p,f)}}return l(n,rr.default),i.reduce((c,f)=>c.concat(f))}function Fl(n,e){if(e&1)return 2;let t=e>>1,i=n.status[t];if(i==4)throw new Error("Cyclic dependency between fields and/or facets");if(i&2)return i;n.status[t]=4;let r=n.computeSlot(n,n.config.dynamicSlots[t]);return n.status[t]=2|r}function Su(n,e){return e&1?n.config.staticValues[e>>1]:n.values[e>>1]}const Vx=re.define(),Lp=re.define({combine:n=>n.some(e=>e),static:!0}),Ux=re.define({combine:n=>n.length?n[0]:void 0,static:!0}),$x=re.define(),Gx=re.define(),Wx=re.define(),Px=re.define({combine:n=>n.length?n[0]:!1});class Bs{constructor(e,t){this.type=e,this.value=t}static define(){return new sM}}class sM{of(e){return new Bs(this,e)}}class rM{constructor(e){this.map=e}of(e){return new Ee(this,e)}}class Ee{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new Ee(this.type,t)}is(e){return this.type==e}static define(e={}){return new rM(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let i=[];for(let r of e){let l=r.map(t);l&&i.push(l)}return i}}Ee.reconfigure=Ee.define();Ee.appendConfig=Ee.define();class Tt{constructor(e,t,i,r,l,c){this.startState=e,this.changes=t,this.selection=i,this.effects=r,this.annotations=l,this.scrollIntoView=c,this._doc=null,this._state=null,i&&Hx(i,t.newLength),l.some(f=>f.type==Tt.time)||(this.annotations=l.concat(Tt.time.of(Date.now())))}static create(e,t,i,r,l,c){return new Tt(e,t,i,r,l,c)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(Tt.userEvent);return!!(t&&(t==e||t.length>e.length&&t.slice(0,e.length)==e&&t[e.length]=="."))}}Tt.time=Bs.define();Tt.userEvent=Bs.define();Tt.addToHistory=Bs.define();Tt.remote=Bs.define();function aM(n,e){let t=[];for(let i=0,r=0;;){let l,c;if(i<n.length&&(r==e.length||e[r]>=n[i]))l=n[i++],c=n[i++];else if(r<e.length)l=e[r++],c=e[r++];else return t;!t.length||t[t.length-1]<l?t.push(l,c):t[t.length-1]<c&&(t[t.length-1]=c)}}function Yx(n,e,t){var i;let r,l,c;return t?(r=e.changes,l=Ct.empty(e.changes.length),c=n.changes.compose(e.changes)):(r=e.changes.map(n.changes),l=n.changes.mapDesc(e.changes,!0),c=n.changes.compose(r)),{changes:c,selection:e.selection?e.selection.map(l):(i=n.selection)===null||i===void 0?void 0:i.map(r),effects:Ee.mapEffects(n.effects,r).concat(Ee.mapEffects(e.effects,l)),annotations:n.annotations.length?n.annotations.concat(e.annotations):e.annotations,scrollIntoView:n.scrollIntoView||e.scrollIntoView}}function _p(n,e,t){let i=e.selection,r=ya(e.annotations);return e.userEvent&&(r=r.concat(Tt.userEvent.of(e.userEvent))),{changes:e.changes instanceof Ct?e.changes:Ct.of(e.changes||[],t,n.facet(Ux)),selection:i&&(i instanceof Y?i:Y.single(i.anchor,i.head)),effects:ya(e.effects),annotations:r,scrollIntoView:!!e.scrollIntoView}}function Kx(n,e,t){let i=_p(n,e.length?e[0]:{},n.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let l=1;l<e.length;l++){e[l].filter===!1&&(t=!1);let c=!!e[l].sequential;i=Yx(i,_p(n,e[l],c?i.changes.newLength:n.doc.length),c)}let r=Tt.create(n,i.changes,i.selection,i.effects,i.annotations,i.scrollIntoView);return oM(t?lM(r):r)}function lM(n){let e=n.startState,t=!0;for(let r of e.facet($x)){let l=r(n);if(l===!1){t=!1;break}Array.isArray(l)&&(t=t===!0?l:aM(t,l))}if(t!==!0){let r,l;if(t===!1)l=n.changes.invertedDesc,r=Ct.empty(e.doc.length);else{let c=n.changes.filter(t);r=c.changes,l=c.filtered.mapDesc(c.changes).invertedDesc}n=Tt.create(e,r,n.selection&&n.selection.map(l),Ee.mapEffects(n.effects,l),n.annotations,n.scrollIntoView)}let i=e.facet(Gx);for(let r=i.length-1;r>=0;r--){let l=i[r](n);l instanceof Tt?n=l:Array.isArray(l)&&l.length==1&&l[0]instanceof Tt?n=l[0]:n=Kx(e,ya(l),!1)}return n}function oM(n){let e=n.startState,t=e.facet(Wx),i=n;for(let r=t.length-1;r>=0;r--){let l=t[r](n);l&&Object.keys(l).length&&(i=Yx(i,_p(e,l,n.changes.newLength),!0))}return i==n?n:Tt.create(e,n.changes,n.selection,i.effects,i.annotations,i.scrollIntoView)}const cM=[];function ya(n){return n==null?cM:Array.isArray(n)?n:[n]}var ot=(function(n){return n[n.Word=0]="Word",n[n.Space=1]="Space",n[n.Other=2]="Other",n})(ot||(ot={}));const uM=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let Hp;try{Hp=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function fM(n){if(Hp)return Hp.test(n);for(let e=0;e<n.length;e++){let t=n[e];if(/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||uM.test(t)))return!0}return!1}function hM(n){return e=>{if(!/\S/.test(e))return ot.Space;if(fM(e))return ot.Word;for(let t=0;t<n.length;t++)if(e.indexOf(n[t])>-1)return ot.Word;return ot.Other}}class Pe{constructor(e,t,i,r,l,c){this.config=e,this.doc=t,this.selection=i,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=l,c&&(c._state=this);for(let f=0;f<this.config.dynamicSlots.length;f++)Fl(this,f<<1);this.computeSlot=null}field(e,t=!0){let i=this.config.address[e.id];if(i==null){if(t)throw new RangeError("Field is not present in this state");return}return Fl(this,i),Su(this,i)}update(...e){return Kx(this,e,!0)}applyTransaction(e){let t=this.config,{base:i,compartments:r}=t;for(let f of e.effects)f.is(tf.reconfigure)?(t&&(r=new Map,t.compartments.forEach((h,p)=>r.set(p,h)),t=null),r.set(f.value.compartment,f.value.extension)):f.is(Ee.reconfigure)?(t=null,i=f.value):f.is(Ee.appendConfig)&&(t=null,i=ya(i).concat(f.value));let l;t?l=e.startState.values.slice():(t=ku.resolve(i,r,this),l=new Pe(t,this.doc,this.selection,t.dynamicSlots.map(()=>null),(h,p)=>p.reconfigure(h,this),null).values);let c=e.startState.facet(Lp)?e.newSelection:e.newSelection.asSingle();new Pe(t,e.newDoc,c,l,(f,h)=>h.update(f,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:Y.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,i=e(t.ranges[0]),r=this.changes(i.changes),l=[i.range],c=ya(i.effects);for(let f=1;f<t.ranges.length;f++){let h=e(t.ranges[f]),p=this.changes(h.changes),g=p.map(r);for(let v=0;v<f;v++)l[v]=l[v].map(g);let y=r.mapDesc(p,!0);l.push(h.range.map(y)),r=r.compose(g),c=Ee.mapEffects(c,g).concat(Ee.mapEffects(ya(h.effects),y))}return{changes:r,selection:Y.create(l,t.mainIndex),effects:c}}changes(e=[]){return e instanceof Ct?e:Ct.of(e,this.doc.length,this.facet(Pe.lineSeparator))}toText(e){return Ue.of(e.split(this.facet(Pe.lineSeparator)||Dp))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(Fl(this,t),Su(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let i in e){let r=e[i];r instanceof Dt&&this.config.address[r.id]!=null&&(t[i]=r.spec.toJSON(this.field(e[i]),this))}return t}static fromJSON(e,t={},i){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let r=[];if(i){for(let l in i)if(Object.prototype.hasOwnProperty.call(e,l)){let c=i[l],f=e[l];r.push(c.init(h=>c.spec.fromJSON(f,h)))}}return Pe.create({doc:e.doc,selection:Y.fromJSON(e.selection),extensions:t.extensions?r.concat([t.extensions]):r})}static create(e={}){let t=ku.resolve(e.extensions||[],new Map),i=e.doc instanceof Ue?e.doc:Ue.of((e.doc||"").split(t.staticFacet(Pe.lineSeparator)||Dp)),r=e.selection?e.selection instanceof Y?e.selection:Y.single(e.selection.anchor,e.selection.head):Y.single(0);return Hx(r,i.length),t.staticFacet(Lp)||(r=r.asSingle()),new Pe(t,i,r,t.dynamicSlots.map(()=>null),(l,c)=>c.create(l),null)}get tabSize(){return this.facet(Pe.tabSize)}get lineBreak(){return this.facet(Pe.lineSeparator)||`
`}get readOnly(){return this.facet(Px)}phrase(e,...t){for(let i of this.facet(Pe.phrases))if(Object.prototype.hasOwnProperty.call(i,e)){e=i[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(i,r)=>{if(r=="$")return"$";let l=+(r||1);return!l||l>t.length?i:t[l-1]})),e}languageDataAt(e,t,i=-1){let r=[];for(let l of this.facet(Vx))for(let c of l(this,t,i))Object.prototype.hasOwnProperty.call(c,e)&&r.push(c[e]);return r}charCategorizer(e){let t=this.languageDataAt("wordChars",e);return hM(t.length?t[0]:"")}wordAt(e){let{text:t,from:i,length:r}=this.doc.lineAt(e),l=this.charCategorizer(e),c=e-i,f=e-i;for(;c>0;){let h=Ot(t,c,!1);if(l(t.slice(h,c))!=ot.Word)break;c=h}for(;f<r;){let h=Ot(t,f);if(l(t.slice(f,h))!=ot.Word)break;f=h}return c==f?null:Y.range(c+i,f+i)}}Pe.allowMultipleSelections=Lp;Pe.tabSize=re.define({combine:n=>n.length?n[0]:4});Pe.lineSeparator=Ux;Pe.readOnly=Px;Pe.phrases=re.define({compare(n,e){let t=Object.keys(n),i=Object.keys(e);return t.length==i.length&&t.every(r=>n[r]==e[r])}});Pe.languageData=Vx;Pe.changeFilter=$x;Pe.transactionFilter=Gx;Pe.transactionExtender=Wx;tf.reconfigure=Ee.define();function zs(n,e,t={}){let i={};for(let r of n)for(let l of Object.keys(r)){let c=r[l],f=i[l];if(f===void 0)i[l]=c;else if(!(f===c||c===void 0))if(Object.hasOwnProperty.call(t,l))i[l]=t[l](f,c);else throw new Error("Config merge conflict for field "+l)}for(let r in e)i[r]===void 0&&(i[r]=e[r]);return i}class Es{eq(e){return this==e}range(e,t=e){return qp.create(e,t,this)}}Es.prototype.startSide=Es.prototype.endSide=0;Es.prototype.point=!1;Es.prototype.mapMode=Zt.TrackDel;function Nm(n,e){return n==e||n.constructor==e.constructor&&n.eq(e)}let qp=class Ix{constructor(e,t,i){this.from=e,this.to=t,this.value=i}static create(e,t,i){return new Ix(e,t,i)}};function Vp(n,e){return n.from-e.from||n.value.startSide-e.value.startSide}class jm{constructor(e,t,i,r){this.from=e,this.to=t,this.value=i,this.maxPoint=r}get length(){return this.to[this.to.length-1]}findIndex(e,t,i,r=0){let l=i?this.to:this.from;for(let c=r,f=l.length;;){if(c==f)return c;let h=c+f>>1,p=l[h]-e||(i?this.value[h].endSide:this.value[h].startSide)-t;if(h==c)return p>=0?c:f;p>=0?f=h:c=h+1}}between(e,t,i,r){for(let l=this.findIndex(t,-1e9,!0),c=this.findIndex(i,1e9,!1,l);l<c;l++)if(r(this.from[l]+e,this.to[l]+e,this.value[l])===!1)return!1}map(e,t){let i=[],r=[],l=[],c=-1,f=-1;for(let h=0;h<this.value.length;h++){let p=this.value[h],g=this.from[h]+e,y=this.to[h]+e,v,w;if(g==y){let k=t.mapPos(g,p.startSide,p.mapMode);if(k==null||(v=w=k,p.startSide!=p.endSide&&(w=t.mapPos(g,p.endSide),w<v)))continue}else if(v=t.mapPos(g,p.startSide),w=t.mapPos(y,p.endSide),v>w||v==w&&p.startSide>0&&p.endSide<=0)continue;(w-v||p.endSide-p.startSide)<0||(c<0&&(c=v),p.point&&(f=Math.max(f,w-v)),i.push(p),r.push(v-c),l.push(w-c))}return{mapped:i.length?new jm(r,l,i,f):null,pos:c}}}class Me{constructor(e,t,i,r){this.chunkPos=e,this.chunk=t,this.nextLayer=i,this.maxPoint=r}static create(e,t,i,r){return new Me(e,t,i,r)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:i=!1,filterFrom:r=0,filterTo:l=this.length}=e,c=e.filter;if(t.length==0&&!c)return this;if(i&&(t=t.slice().sort(Vp)),this.isEmpty)return t.length?Me.of(t):this;let f=new Fx(this,null,-1).goto(0),h=0,p=[],g=new Sa;for(;f.value||h<t.length;)if(h<t.length&&(f.from-t[h].from||f.startSide-t[h].value.startSide)>=0){let y=t[h++];g.addInner(y.from,y.to,y.value)||p.push(y)}else f.rangeIndex==1&&f.chunkIndex<this.chunk.length&&(h==t.length||this.chunkEnd(f.chunkIndex)<t[h].from)&&(!c||r>this.chunkEnd(f.chunkIndex)||l<this.chunkPos[f.chunkIndex])&&g.addChunk(this.chunkPos[f.chunkIndex],this.chunk[f.chunkIndex])?f.nextChunk():((!c||r>f.to||l<f.from||c(f.from,f.to,f.value))&&(g.addInner(f.from,f.to,f.value)||p.push(qp.create(f.from,f.to,f.value))),f.next());return g.finishInner(this.nextLayer.isEmpty&&!p.length?Me.empty:this.nextLayer.update({add:p,filter:c,filterFrom:r,filterTo:l}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],i=[],r=-1;for(let c=0;c<this.chunk.length;c++){let f=this.chunkPos[c],h=this.chunk[c],p=e.touchesRange(f,f+h.length);if(p===!1)r=Math.max(r,h.maxPoint),t.push(h),i.push(e.mapPos(f));else if(p===!0){let{mapped:g,pos:y}=h.map(f,e);g&&(r=Math.max(r,g.maxPoint),t.push(g),i.push(y))}}let l=this.nextLayer.map(e);return t.length==0?l:new Me(i,t,l||Me.empty,r)}between(e,t,i){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let l=this.chunkPos[r],c=this.chunk[r];if(t>=l&&e<=l+c.length&&c.between(l,e-l,t-l,i)===!1)return}this.nextLayer.between(e,t,i)}}iter(e=0){return io.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return io.from(e).goto(t)}static compare(e,t,i,r,l=-1){let c=e.filter(y=>y.maxPoint>0||!y.isEmpty&&y.maxPoint>=l),f=t.filter(y=>y.maxPoint>0||!y.isEmpty&&y.maxPoint>=l),h=jv(c,f,i),p=new Ll(c,h,l),g=new Ll(f,h,l);i.iterGaps((y,v,w)=>Bv(p,y,g,v,w,r)),i.empty&&i.length==0&&Bv(p,0,g,0,0,r)}static eq(e,t,i=0,r){r==null&&(r=999999999);let l=e.filter(g=>!g.isEmpty&&t.indexOf(g)<0),c=t.filter(g=>!g.isEmpty&&e.indexOf(g)<0);if(l.length!=c.length)return!1;if(!l.length)return!0;let f=jv(l,c),h=new Ll(l,f,0).goto(i),p=new Ll(c,f,0).goto(i);for(;;){if(h.to!=p.to||!Up(h.active,p.active)||h.point&&(!p.point||!Nm(h.point,p.point)))return!1;if(h.to>r)return!0;h.next(),p.next()}}static spans(e,t,i,r,l=-1){let c=new Ll(e,null,l).goto(t),f=t,h=c.openStart;for(;;){let p=Math.min(c.to,i);if(c.point){let g=c.activeForPoint(c.to),y=c.pointFrom<t?g.length+1:c.point.startSide<0?g.length:Math.min(g.length,h);r.point(f,p,c.point,g,y,c.pointRank),h=Math.min(c.openEnd(p),g.length)}else p>f&&(r.span(f,p,c.active,h),h=c.openEnd(p));if(c.to>i)return h+(c.point&&c.to>i?1:0);f=c.to,c.next()}}static of(e,t=!1){let i=new Sa;for(let r of e instanceof qp?[e]:t?dM(e):e)i.add(r.from,r.to,r.value);return i.finish()}static join(e){if(!e.length)return Me.empty;let t=e[e.length-1];for(let i=e.length-2;i>=0;i--)for(let r=e[i];r!=Me.empty;r=r.nextLayer)t=new Me(r.chunkPos,r.chunk,t,Math.max(r.maxPoint,t.maxPoint));return t}}Me.empty=new Me([],[],null,-1);function dM(n){if(n.length>1)for(let e=n[0],t=1;t<n.length;t++){let i=n[t];if(Vp(e,i)>0)return n.slice().sort(Vp);e=i}return n}Me.empty.nextLayer=Me.empty;class Sa{finishChunk(e){this.chunks.push(new jm(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,i){this.addInner(e,t,i)||(this.nextLayer||(this.nextLayer=new Sa)).add(e,t,i)}addInner(e,t,i){let r=e-this.lastTo||i.startSide-this.last.endSide;if(r<=0&&(e-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return r<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=i,this.lastFrom=e,this.lastTo=t,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let i=t.value.length-1;return this.last=t.value[i],this.lastFrom=t.from[i]+e,this.lastTo=t.to[i]+e,!0}finish(){return this.finishInner(Me.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=Me.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function jv(n,e,t){let i=new Map;for(let l of n)for(let c=0;c<l.chunk.length;c++)l.chunk[c].maxPoint<=0&&i.set(l.chunk[c],l.chunkPos[c]);let r=new Set;for(let l of e)for(let c=0;c<l.chunk.length;c++){let f=i.get(l.chunk[c]);f!=null&&(t?t.mapPos(f):f)==l.chunkPos[c]&&!t?.touchesRange(f,f+l.chunk[c].length)&&r.add(l.chunk[c])}return r}class Fx{constructor(e,t,i,r=0){this.layer=e,this.skip=t,this.minPoint=i,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,i){for(;this.chunkIndex<this.layer.chunk.length;){let r=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(r)||this.layer.chunkEnd(this.chunkIndex)<e||r.maxPoint<this.minPoint))break;this.chunkIndex++,i=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!i||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],i=e+t.from[this.rangeIndex];if(this.from=i,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class io{constructor(e){this.heap=e}static from(e,t=null,i=-1){let r=[];for(let l=0;l<e.length;l++)for(let c=e[l];!c.isEmpty;c=c.nextLayer)c.maxPoint>=i&&r.push(new Fx(c,t,i,l));return r.length==1?r[0]:new io(r)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let i of this.heap)i.goto(e,t);for(let i=this.heap.length>>1;i>=0;i--)Pd(this.heap,i);return this.next(),this}forward(e,t){for(let i of this.heap)i.forward(e,t);for(let i=this.heap.length>>1;i>=0;i--)Pd(this.heap,i);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Pd(this.heap,0)}}}function Pd(n,e){for(let t=n[e];;){let i=(e<<1)+1;if(i>=n.length)break;let r=n[i];if(i+1<n.length&&r.compare(n[i+1])>=0&&(r=n[i+1],i++),t.compare(r)<0)break;n[i]=t,n[e]=r,e=i}}class Ll{constructor(e,t,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=io.from(e,t,i)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Uc(this.active,e),Uc(this.activeTo,e),Uc(this.activeRank,e),this.minActive=zv(this.active,this.activeTo)}addActive(e){let t=0,{value:i,to:r,rank:l}=this.cursor;for(;t<this.activeRank.length&&(l-this.activeRank[t]||r-this.activeTo[t])>0;)t++;$c(this.active,t,i),$c(this.activeTo,t,r),$c(this.activeRank,t,l),e&&$c(e,t,this.cursor.from),this.minActive=zv(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let i=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),i&&Uc(i,r)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let l=this.cursor.value;if(!l.point)this.addActive(i),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=l,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=l.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(i){this.openStart=0;for(let r=i.length-1;r>=0&&i[r]<e;r--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>e||this.activeTo[i]==e&&this.active[i].endSide>=this.point.endSide)&&t.push(this.active[i]);return t.reverse()}openEnd(e){let t=0;for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>e;i--)t++;return t}}function Bv(n,e,t,i,r,l){n.goto(e),t.goto(i);let c=i+r,f=i,h=i-e,p=!!l.boundChange;for(let g=!1;;){let y=n.to+h-t.to,v=y||n.endSide-t.endSide,w=v<0?n.to+h:t.to,k=Math.min(w,c);if(n.point||t.point?(n.point&&t.point&&Nm(n.point,t.point)&&Up(n.activeForPoint(n.to),t.activeForPoint(t.to))||l.comparePoint(f,k,n.point,t.point),g=!1):(g&&l.boundChange(f),k>f&&!Up(n.active,t.active)&&l.compareRange(f,k,n.active,t.active),p&&k<c&&(y||n.openEnd(w)!=t.openEnd(w))&&(g=!0)),w>c)break;f=w,v<=0&&n.next(),v>=0&&t.next()}}function Up(n,e){if(n.length!=e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!=e[t]&&!Nm(n[t],e[t]))return!1;return!0}function Uc(n,e){for(let t=e,i=n.length-1;t<i;t++)n[t]=n[t+1];n.pop()}function $c(n,e,t){for(let i=n.length-1;i>=e;i--)n[i+1]=n[i];n[e]=t}function zv(n,e){let t=-1,i=1e9;for(let r=0;r<e.length;r++)(e[r]-i||n[r].endSide-n[t].endSide)<0&&(t=r,i=e[r]);return t}function go(n,e,t=n.length){let i=0;for(let r=0;r<t&&r<n.length;)n.charCodeAt(r)==9?(i+=e-i%e,r++):(i++,r=Ot(n,r));return i}function $p(n,e,t,i){for(let r=0,l=0;;){if(l>=e)return r;if(r==n.length)break;l+=n.charCodeAt(r)==9?t-l%t:1,r=Ot(n,r)}return i===!0?-1:n.length}const Gp="ͼ",Lv=typeof Symbol>"u"?"__"+Gp:Symbol.for(Gp),Wp=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),_v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class Aa{constructor(e,t){this.rules=[];let{finish:i}=t||{};function r(c){return/^@/.test(c)?[c]:c.split(/,\s*/)}function l(c,f,h,p){let g=[],y=/^@(\w+)\b/.exec(c[0]),v=y&&y[1]=="keyframes";if(y&&f==null)return h.push(c[0]+";");for(let w in f){let k=f[w];if(/&/.test(w))l(w.split(/,\s*/).map(A=>c.map(C=>A.replace(/&/,C))).reduce((A,C)=>A.concat(C)),k,h);else if(k&&typeof k=="object"){if(!y)throw new RangeError("The value of a property ("+w+") should be a primitive value.");l(r(w),k,g,v)}else k!=null&&g.push(w.replace(/_.*/,"").replace(/[A-Z]/g,A=>"-"+A.toLowerCase())+": "+k+";")}(g.length||v)&&h.push((i&&!y&&!p?c.map(i):c).join(", ")+" {"+g.join(" ")+"}")}for(let c in e)l(r(c),e[c],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=_v[Lv]||1;return _v[Lv]=e+1,Gp+e.toString(36)}static mount(e,t,i){let r=e[Wp],l=i&&i.nonce;r?l&&r.setNonce(l):r=new pM(e,l),r.mount(Array.isArray(t)?t:[t],e)}}let Hv=new Map;class pM{constructor(e,t){let i=e.ownerDocument||e,r=i.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let l=Hv.get(i);if(l)return e[Wp]=l;this.sheet=new r.CSSStyleSheet,Hv.set(i,this)}else this.styleTag=i.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[Wp]=this}mount(e,t){let i=this.sheet,r=0,l=0;for(let c=0;c<e.length;c++){let f=e[c],h=this.modules.indexOf(f);if(h<l&&h>-1&&(this.modules.splice(h,1),l--,h=-1),h==-1){if(this.modules.splice(l++,0,f),i)for(let p=0;p<f.rules.length;p++)i.insertRule(f.rules[p],r++)}else{for(;l<h;)r+=this.modules[l++].rules.length;r+=f.rules.length,l++}}if(i)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let c="";for(let h=0;h<this.modules.length;h++)c+=this.modules[h].getRules()+`
`;this.styleTag.textContent=c;let f=t.head||t;this.styleTag.parentNode!=f&&f.insertBefore(this.styleTag,f.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Rs={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},so={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},mM=typeof navigator<"u"&&/Mac/.test(navigator.platform),gM=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var Ht=0;Ht<10;Ht++)Rs[48+Ht]=Rs[96+Ht]=String(Ht);for(var Ht=1;Ht<=24;Ht++)Rs[Ht+111]="F"+Ht;for(var Ht=65;Ht<=90;Ht++)Rs[Ht]=String.fromCharCode(Ht+32),so[Ht]=String.fromCharCode(Ht);for(var Yd in Rs)so.hasOwnProperty(Yd)||(so[Yd]=Rs[Yd]);function yM(n){var e=mM&&n.metaKey&&n.shiftKey&&!n.ctrlKey&&!n.altKey||gM&&n.shiftKey&&n.key&&n.key.length==1||n.key=="Unidentified",t=!e&&n.key||(n.shiftKey?so:Rs)[n.keyCode]||n.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}function Ze(){var n=arguments[0];typeof n=="string"&&(n=document.createElement(n));var e=1,t=arguments[1];if(t&&typeof t=="object"&&t.nodeType==null&&!Array.isArray(t)){for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=t[i];typeof r=="string"?n.setAttribute(i,r):r!=null&&(n[i]=r)}e++}for(;e<arguments.length;e++)Xx(n,arguments[e]);return n}function Xx(n,e){if(typeof e=="string")n.appendChild(document.createTextNode(e));else if(e!=null)if(e.nodeType!=null)n.appendChild(e);else if(Array.isArray(e))for(var t=0;t<e.length;t++)Xx(n,e[t]);else throw new RangeError("Unsupported child node: "+e)}let Xt=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},Pp=typeof document<"u"?document:{documentElement:{style:{}}};const Yp=/Edge\/(\d+)/.exec(Xt.userAgent),Qx=/MSIE \d/.test(Xt.userAgent),Kp=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Xt.userAgent),nf=!!(Qx||Kp||Yp),qv=!nf&&/gecko\/(\d+)/i.test(Xt.userAgent),Kd=!nf&&/Chrome\/(\d+)/.exec(Xt.userAgent),Vv="webkitFontSmoothing"in Pp.documentElement.style,Ip=!nf&&/Apple Computer/.test(Xt.vendor),Uv=Ip&&(/Mobile\/\w+/.test(Xt.userAgent)||Xt.maxTouchPoints>2);var ne={mac:Uv||/Mac/.test(Xt.platform),windows:/Win/.test(Xt.platform),linux:/Linux|X11/.test(Xt.platform),ie:nf,ie_version:Qx?Pp.documentMode||6:Kp?+Kp[1]:Yp?+Yp[1]:0,gecko:qv,gecko_version:qv?+(/Firefox\/(\d+)/.exec(Xt.userAgent)||[0,0])[1]:0,chrome:!!Kd,chrome_version:Kd?+Kd[1]:0,ios:Uv,android:/Android\b/.test(Xt.userAgent),webkit:Vv,webkit_version:Vv?+(/\bAppleWebKit\/(\d+)/.exec(Xt.userAgent)||[0,0])[1]:0,safari:Ip,safari_version:Ip?+(/\bVersion\/(\d+(\.\d+)?)/.exec(Xt.userAgent)||[0,0])[1]:0,tabSize:Pp.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function Bm(n,e){for(let t in n)t=="class"&&e.class?e.class+=" "+n.class:t=="style"&&e.style?e.style+=";"+n.style:e[t]=n[t];return e}const Au=Object.create(null);function zm(n,e,t){if(n==e)return!0;n||(n=Au),e||(e=Au);let i=Object.keys(n),r=Object.keys(e);if(i.length-0!=r.length-0)return!1;for(let l of i)if(l!=t&&(r.indexOf(l)==-1||n[l]!==e[l]))return!1;return!0}function bM(n,e){for(let t=n.attributes.length-1;t>=0;t--){let i=n.attributes[t].name;e[i]==null&&n.removeAttribute(i)}for(let t in e){let i=e[t];t=="style"?n.style.cssText=i:n.getAttribute(t)!=i&&n.setAttribute(t,i)}}function $v(n,e,t){let i=!1;if(e)for(let r in e)t&&r in t||(i=!0,r=="style"?n.style.cssText="":n.removeAttribute(r));if(t)for(let r in t)e&&e[r]==t[r]||(i=!0,r=="style"?n.style.cssText=t[r]:n.setAttribute(r,t[r]));return i}function vM(n){let e=Object.create(null);for(let t=0;t<n.attributes.length;t++){let i=n.attributes[t];e[i.name]=i.value}return e}class yo{eq(e){return!1}updateDOM(e,t,i){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,i){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Vt=(function(n){return n[n.Text=0]="Text",n[n.WidgetBefore=1]="WidgetBefore",n[n.WidgetAfter=2]="WidgetAfter",n[n.WidgetRange=3]="WidgetRange",n})(Vt||(Vt={}));class be extends Es{constructor(e,t,i,r){super(),this.startSide=e,this.endSide=t,this.widget=i,this.spec=r}get heightRelevant(){return!1}static mark(e){return new bo(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),i=!!e.block;return t+=i&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new dr(e,t,t,i,e.widget||null,!1)}static replace(e){let t=!!e.block,i,r;if(e.isBlockGap)i=-5e8,r=4e8;else{let{start:l,end:c}=Zx(e,t);i=(l?t?-3e8:-1:5e8)-1,r=(c?t?2e8:1:-6e8)+1}return new dr(e,i,r,t,e.widget||null,!0)}static line(e){return new vo(e)}static set(e,t=!1){return Me.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}be.none=Me.empty;class bo extends be{constructor(e){let{start:t,end:i}=Zx(e);super(t?-1:5e8,i?1:-6e8,null,e),this.tagName=e.tagName||"span",this.attrs=e.class&&e.attributes?Bm(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||Au}eq(e){return this==e||e instanceof bo&&this.tagName==e.tagName&&zm(this.attrs,e.attrs)}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}bo.prototype.point=!1;class vo extends be{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof vo&&this.spec.class==e.spec.class&&zm(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}vo.prototype.mapMode=Zt.TrackBefore;vo.prototype.point=!0;class dr extends be{constructor(e,t,i,r,l,c){super(t,i,l,e),this.block=r,this.isReplace=c,this.mapMode=r?t<=0?Zt.TrackBefore:Zt.TrackAfter:Zt.TrackDel}get type(){return this.startSide!=this.endSide?Vt.WidgetRange:this.startSide<=0?Vt.WidgetBefore:Vt.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof dr&&xM(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}dr.prototype.point=!0;function Zx(n,e=!1){let{inclusiveStart:t,inclusiveEnd:i}=n;return t==null&&(t=n.inclusive),i==null&&(i=n.inclusive),{start:t??e,end:i??e}}function xM(n,e){return n==e||!!(n&&e&&n.compare(e))}function ba(n,e,t,i=0){let r=t.length-1;r>=0&&t[r]+i>=n?t[r]=Math.max(t[r],e):t.push(n,e)}class ro extends Es{constructor(e,t,i){super(),this.tagName=e,this.attributes=t,this.rank=i}eq(e){return e==this||e instanceof ro&&this.tagName==e.tagName&&zm(this.attributes,e.attributes)}static create(e){return new ro(e.tagName,e.attributes||Au,e.rank==null?50:Math.max(0,Math.min(e.rank,100)))}static set(e,t=!1){return Me.of(e,t)}}ro.prototype.startSide=ro.prototype.endSide=-1;function ao(n){let e;return n.nodeType==11?e=n.getSelection?n:n.ownerDocument:e=n,e.getSelection()}function Fp(n,e){return e?n==e||n.contains(e.nodeType!=1?e.parentNode:e):!1}function Xl(n,e){if(!e.anchorNode)return!1;try{return Fp(n,e.anchorNode)}catch{return!1}}function mu(n){return n.nodeType==3?lo(n,0,n.nodeValue.length).getClientRects():n.nodeType==1?n.getClientRects():[]}function Ql(n,e,t,i){return t?Gv(n,e,t,i,-1)||Gv(n,e,t,i,1):!1}function Os(n){for(var e=0;;e++)if(n=n.previousSibling,!n)return e}function Cu(n){return n.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)}function Gv(n,e,t,i,r){for(;;){if(n==t&&e==i)return!0;if(e==(r<0?0:Vi(n))){if(n.nodeName=="DIV")return!1;let l=n.parentNode;if(!l||l.nodeType!=1)return!1;e=Os(n)+(r<0?0:1),n=l}else if(n.nodeType==1){if(n=n.childNodes[e+(r<0?-1:0)],n.nodeType==1&&n.contentEditable=="false")return!1;e=r<0?Vi(n):0}else return!1}}function Vi(n){return n.nodeType==3?n.nodeValue.length:n.childNodes.length}function Tu(n,e){let t=e?n.left:n.right;return{left:t,right:t,top:n.top,bottom:n.bottom}}function wM(n){let e=n.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:n.innerWidth,top:0,bottom:n.innerHeight}}function Jx(n,e){let t=e.width/n.offsetWidth,i=e.height/n.offsetHeight;return(t>.995&&t<1.005||!isFinite(t)||Math.abs(e.width-n.offsetWidth)<1)&&(t=1),(i>.995&&i<1.005||!isFinite(i)||Math.abs(e.height-n.offsetHeight)<1)&&(i=1),{scaleX:t,scaleY:i}}function kM(n,e,t,i,r,l,c,f){let h=n.ownerDocument,p=h.defaultView||window;for(let g=n,y=!1;g&&!y;)if(g.nodeType==1){let v,w=g==h.body,k=1,A=1;if(w)v=wM(p);else{if(/^(fixed|sticky)$/.test(getComputedStyle(g).position)&&(y=!0),g.scrollHeight<=g.clientHeight&&g.scrollWidth<=g.clientWidth){g=g.assignedSlot||g.parentNode;continue}let G=g.getBoundingClientRect();({scaleX:k,scaleY:A}=Jx(g,G)),v={left:G.left,right:G.left+g.clientWidth*k,top:G.top,bottom:G.top+g.clientHeight*A}}let C=0,O=0;if(r=="nearest")e.top<v.top+c?(O=e.top-(v.top+c),t>0&&e.bottom>v.bottom+O&&(O=e.bottom-v.bottom+c)):e.bottom>v.bottom-c&&(O=e.bottom-v.bottom+c,t<0&&e.top-O<v.top&&(O=e.top-(v.top+c)));else{let G=e.bottom-e.top,_=v.bottom-v.top;O=(r=="center"&&G<=_?e.top+G/2-_/2:r=="start"||r=="center"&&t<0?e.top-c:e.bottom-_+c)-v.top}if(i=="nearest"?e.left<v.left+l?(C=e.left-(v.left+l),t>0&&e.right>v.right+C&&(C=e.right-v.right+l)):e.right>v.right-l&&(C=e.right-v.right+l,t<0&&e.left<v.left+C&&(C=e.left-(v.left+l))):C=(i=="center"?e.left+(e.right-e.left)/2-(v.right-v.left)/2:i=="start"==f?e.left-l:e.right-(v.right-v.left)+l)-v.left,C||O)if(w)p.scrollBy(C,O);else{let G=0,_=0;if(O){let B=g.scrollTop;g.scrollTop+=O/A,_=(g.scrollTop-B)*A}if(C){let B=g.scrollLeft;g.scrollLeft+=C/k,G=(g.scrollLeft-B)*k}e={left:e.left-G,top:e.top-_,right:e.right-G,bottom:e.bottom-_},G&&Math.abs(G-C)<1&&(i="nearest"),_&&Math.abs(_-O)<1&&(r="nearest")}if(w)break;(e.top<v.top||e.bottom>v.bottom||e.left<v.left||e.right>v.right)&&(e={left:Math.max(e.left,v.left),right:Math.min(e.right,v.right),top:Math.max(e.top,v.top),bottom:Math.min(e.bottom,v.bottom)}),g=g.assignedSlot||g.parentNode}else if(g.nodeType==11)g=g.host;else break}function ew(n,e=!0){let t=n.ownerDocument,i=null,r=null;for(let l=n.parentNode;l&&!(l==t.body||(!e||i)&&r);)if(l.nodeType==1)!r&&l.scrollHeight>l.clientHeight&&(r=l),e&&!i&&l.scrollWidth>l.clientWidth&&(i=l),l=l.assignedSlot||l.parentNode;else if(l.nodeType==11)l=l.host;else break;return{x:i,y:r}}class SM{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:i}=e;this.set(t,Math.min(e.anchorOffset,t?Vi(t):0),i,Math.min(e.focusOffset,i?Vi(i):0))}set(e,t,i,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=i,this.focusOffset=r}}let sr=null;ne.safari&&ne.safari_version>=26&&(sr=!1);function tw(n){if(n.setActive)return n.setActive();if(sr)return n.focus(sr);let e=[];for(let t=n;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(n.focus(sr==null?{get preventScroll(){return sr={preventScroll:!0},!0}}:void 0),!sr){sr=!1;for(let t=0;t<e.length;){let i=e[t++],r=e[t++],l=e[t++];i.scrollTop!=r&&(i.scrollTop=r),i.scrollLeft!=l&&(i.scrollLeft=l)}}}let Wv;function lo(n,e,t=e){let i=Wv||(Wv=document.createRange());return i.setEnd(n,t),i.setStart(n,e),i}function va(n,e,t,i){let r={key:e,code:e,keyCode:t,which:t,cancelable:!0};i&&({altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey,metaKey:r.metaKey}=i);let l=new KeyboardEvent("keydown",r);l.synthetic=!0,n.dispatchEvent(l);let c=new KeyboardEvent("keyup",r);return c.synthetic=!0,n.dispatchEvent(c),l.defaultPrevented||c.defaultPrevented}function AM(n){for(;n;){if(n&&(n.nodeType==9||n.nodeType==11&&n.host))return n;n=n.assignedSlot||n.parentNode}return null}function CM(n,e){let t=e.focusNode,i=e.focusOffset;if(!t||e.anchorNode!=t||e.anchorOffset!=i)return!1;for(i=Math.min(i,Vi(t));;)if(i){if(t.nodeType!=1)return!1;let r=t.childNodes[i-1];r.contentEditable=="false"?i--:(t=r,i=Vi(t))}else{if(t==n)return!0;i=Os(t),t=t.parentNode}}function nw(n){return n instanceof Window?n.pageYOffset>Math.max(0,n.document.documentElement.scrollHeight-n.innerHeight-4):n.scrollTop>Math.max(1,n.scrollHeight-n.clientHeight-4)}function iw(n,e){for(let t=n,i=e;;){if(t.nodeType==3&&i>0)return{node:t,offset:i};if(t.nodeType==1&&i>0){if(t.contentEditable=="false")return null;t=t.childNodes[i-1],i=Vi(t)}else if(t.parentNode&&!Cu(t))i=Os(t),t=t.parentNode;else return null}}function sw(n,e){for(let t=n,i=e;;){if(t.nodeType==3&&i<t.nodeValue.length)return{node:t,offset:i};if(t.nodeType==1&&i<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[i],i=0}else if(t.parentNode&&!Cu(t))i=Os(t)+1,t=t.parentNode;else return null}}class Kn{constructor(e,t,i=!0){this.node=e,this.offset=t,this.precise=i}static before(e,t){return new Kn(e.parentNode,Os(e),t)}static after(e,t){return new Kn(e.parentNode,Os(e)+1,t)}}var it=(function(n){return n[n.LTR=0]="LTR",n[n.RTL=1]="RTL",n})(it||(it={}));const pr=it.LTR,Lm=it.RTL;function rw(n){let e=[];for(let t=0;t<n.length;t++)e.push(1<<+n[t]);return e}const TM=rw("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),MM=rw("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Xp=Object.create(null),ii=[];for(let n of["()","[]","{}"]){let e=n.charCodeAt(0),t=n.charCodeAt(1);Xp[e]=t,Xp[t]=-e}function aw(n){return n<=247?TM[n]:1424<=n&&n<=1524?2:1536<=n&&n<=1785?MM[n-1536]:1774<=n&&n<=2220?4:8192<=n&&n<=8204?256:64336<=n&&n<=65023?4:1}const EM=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class fi{get dir(){return this.level%2?Lm:pr}constructor(e,t,i){this.from=e,this.to=t,this.level=i}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,i,r){let l=-1;for(let c=0;c<e.length;c++){let f=e[c];if(f.from<=t&&f.to>=t){if(f.level==i)return c;(l<0||(r!=0?r<0?f.from<t:f.to>t:e[l].level>f.level))&&(l=c)}}if(l<0)throw new RangeError("Index out of range");return l}}function lw(n,e){if(n.length!=e.length)return!1;for(let t=0;t<n.length;t++){let i=n[t],r=e[t];if(i.from!=r.from||i.to!=r.to||i.direction!=r.direction||!lw(i.inner,r.inner))return!1}return!0}const tt=[];function RM(n,e,t,i,r){for(let l=0;l<=i.length;l++){let c=l?i[l-1].to:e,f=l<i.length?i[l].from:t,h=l?256:r;for(let p=c,g=h,y=h;p<f;p++){let v=aw(n.charCodeAt(p));v==512?v=g:v==8&&y==4&&(v=16),tt[p]=v==4?2:v,v&7&&(y=v),g=v}for(let p=c,g=h,y=h;p<f;p++){let v=tt[p];if(v==128)p<f-1&&g==tt[p+1]&&g&24?v=tt[p]=g:tt[p]=256;else if(v==64){let w=p+1;for(;w<f&&tt[w]==64;)w++;let k=p&&g==8||w<t&&tt[w]==8?y==1?1:8:256;for(let A=p;A<w;A++)tt[A]=k;p=w-1}else v==8&&y==1&&(tt[p]=1);g=v,v&7&&(y=v)}}}function OM(n,e,t,i,r){let l=r==1?2:1;for(let c=0,f=0,h=0;c<=i.length;c++){let p=c?i[c-1].to:e,g=c<i.length?i[c].from:t;for(let y=p,v,w,k;y<g;y++)if(w=Xp[v=n.charCodeAt(y)])if(w<0){for(let A=f-3;A>=0;A-=3)if(ii[A+1]==-w){let C=ii[A+2],O=C&2?r:C&4?C&1?l:r:0;O&&(tt[y]=tt[ii[A]]=O),f=A;break}}else{if(ii.length==189)break;ii[f++]=y,ii[f++]=v,ii[f++]=h}else if((k=tt[y])==2||k==1){let A=k==r;h=A?0:1;for(let C=f-3;C>=0;C-=3){let O=ii[C+2];if(O&2)break;if(A)ii[C+2]|=2;else{if(O&4)break;ii[C+2]|=4}}}}}function DM(n,e,t,i){for(let r=0,l=i;r<=t.length;r++){let c=r?t[r-1].to:n,f=r<t.length?t[r].from:e;for(let h=c;h<f;){let p=tt[h];if(p==256){let g=h+1;for(;;)if(g==f){if(r==t.length)break;g=t[r++].to,f=r<t.length?t[r].from:e}else if(tt[g]==256)g++;else break;let y=l==1,v=(g<e?tt[g]:i)==1,w=y==v?y?1:2:i;for(let k=g,A=r,C=A?t[A-1].to:n;k>h;)k==C&&(k=t[--A].from,C=A?t[A-1].to:n),tt[--k]=w;h=g}else l=p,h++}}}function Qp(n,e,t,i,r,l,c){let f=i%2?2:1;if(i%2==r%2)for(let h=e,p=0;h<t;){let g=!0,y=!1;if(p==l.length||h<l[p].from){let A=tt[h];A!=f&&(g=!1,y=A==16)}let v=!g&&f==1?[]:null,w=g?i:i+1,k=h;e:for(;;)if(p<l.length&&k==l[p].from){if(y)break e;let A=l[p];if(!g)for(let C=A.to,O=p+1;;){if(C==t)break e;if(O<l.length&&l[O].from==C)C=l[O++].to;else{if(tt[C]==f)break e;break}}if(p++,v)v.push(A);else{A.from>h&&c.push(new fi(h,A.from,w));let C=A.direction==pr!=!(w%2);Zp(n,C?i+1:i,r,A.inner,A.from,A.to,c),h=A.to}k=A.to}else{if(k==t||(g?tt[k]!=f:tt[k]==f))break;k++}v?Qp(n,h,k,i+1,r,v,c):h<k&&c.push(new fi(h,k,w)),h=k}else for(let h=t,p=l.length;h>e;){let g=!0,y=!1;if(!p||h>l[p-1].to){let A=tt[h-1];A!=f&&(g=!1,y=A==16)}let v=!g&&f==1?[]:null,w=g?i:i+1,k=h;e:for(;;)if(p&&k==l[p-1].to){if(y)break e;let A=l[--p];if(!g)for(let C=A.from,O=p;;){if(C==e)break e;if(O&&l[O-1].to==C)C=l[--O].from;else{if(tt[C-1]==f)break e;break}}if(v)v.push(A);else{A.to<h&&c.push(new fi(A.to,h,w));let C=A.direction==pr!=!(w%2);Zp(n,C?i+1:i,r,A.inner,A.from,A.to,c),h=A.from}k=A.from}else{if(k==e||(g?tt[k-1]!=f:tt[k-1]==f))break;k--}v?Qp(n,k,h,i+1,r,v,c):k<h&&c.push(new fi(k,h,w)),h=k}}function Zp(n,e,t,i,r,l,c){let f=e%2?2:1;RM(n,r,l,i,f),OM(n,r,l,i,f),DM(r,l,i,f),Qp(n,r,l,e,t,i,c)}function NM(n,e,t){if(!n)return[new fi(0,0,e==Lm?1:0)];if(e==pr&&!t.length&&!EM.test(n))return ow(n.length);if(t.length)for(;n.length>tt.length;)tt[tt.length]=256;let i=[],r=e==pr?0:1;return Zp(n,r,r,t,0,n.length,i),i}function ow(n){return[new fi(0,n,0)]}let cw="";function jM(n,e,t,i,r){var l;let c=i.head-n.from,f=fi.find(e,c,(l=i.bidiLevel)!==null&&l!==void 0?l:-1,i.assoc),h=e[f],p=h.side(r,t);if(c==p){let v=f+=r?1:-1;if(v<0||v>=e.length)return null;h=e[f=v],c=h.side(!r,t),p=h.side(r,t)}let g=Ot(n.text,c,h.forward(r,t));(g<h.from||g>h.to)&&(g=p),cw=n.text.slice(Math.min(c,g),Math.max(c,g));let y=f==(r?e.length-1:0)?null:e[f+(r?1:-1)];return y&&g==p&&y.level+(r?0:1)<h.level?Y.cursor(y.side(!r,t)+n.from,y.forward(r,t)?1:-1,y.level):Y.cursor(g+n.from,h.forward(r,t)?-1:1,h.level)}function BM(n,e,t){for(let i=e;i<t;i++){let r=aw(n.charCodeAt(i));if(r==1)return pr;if(r==2||r==4)return Lm}return pr}const uw=re.define(),fw=re.define(),hw=re.define(),dw=re.define(),Jp=re.define(),pw=re.define(),mw=re.define(),_m=re.define(),Hm=re.define(),gw=re.define({combine:n=>n.some(e=>e)}),yw=re.define({combine:n=>n.some(e=>e)}),bw=re.define();class xa{constructor(e,t,i,r,l,c=!1){this.range=e,this.y=t,this.x=i,this.yMargin=r,this.xMargin=l,this.isSnapshot=c}map(e){return e.empty?this:new xa(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new xa(Y.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Gc=Ee.define({map:(n,e)=>n.map(e)}),vw=Ee.define();function In(n,e,t){let i=n.facet(dw);i.length?i[0](e):window.onerror&&window.onerror(String(e),t,void 0,void 0,e)||(t?console.error(t+":",e):console.error(e))}const Li=re.define({combine:n=>n.length?n[0]:!0});let zM=0;const pa=re.define({combine(n){return n.filter((e,t)=>{for(let i=0;i<t;i++)if(n[i].plugin==e.plugin)return!1;return!0})}});class Gt{constructor(e,t,i,r,l){this.id=e,this.create=t,this.domEventHandlers=i,this.domEventObservers=r,this.baseExtensions=l(this),this.extension=this.baseExtensions.concat(pa.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(pa.of({plugin:this,arg:e}))}static define(e,t){const{eventHandlers:i,eventObservers:r,provide:l,decorations:c}=t||{};return new Gt(zM++,e,i,r,f=>{let h=[];return c&&h.push(sf.of(p=>{let g=p.plugin(f);return g?c(g):be.none})),l&&h.push(l(f)),h})}static fromClass(e,t){return Gt.define((i,r)=>new e(i,r),t)}}class Id{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(i){if(In(t.state,i,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){In(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(i){In(e.state,i,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const xw=re.define(),qm=re.define(),sf=re.define(),ww=re.define(),Vm=re.define(),xo=re.define(),kw=re.define();function Pv(n,e){let t=n.state.facet(kw);if(!t.length)return t;let i=t.map(l=>l instanceof Function?l(n):l),r=[];return Me.spans(i,e.from,e.to,{point(){},span(l,c,f,h){let p=l-e.from,g=c-e.from,y=r;for(let v=f.length-1;v>=0;v--,h--){let w=f[v].spec.bidiIsolate,k;if(w==null&&(w=BM(e.text,p,g)),h>0&&y.length&&(k=y[y.length-1]).to==p&&k.direction==w)k.to=g,y=k.inner;else{let A={from:p,to:g,direction:w,inner:[]};y.push(A),y=A.inner}}}}),r}const Sw=re.define();function Um(n){let e=0,t=0,i=0,r=0;for(let l of n.state.facet(Sw)){let c=l(n);c&&(c.left!=null&&(e=Math.max(e,c.left)),c.right!=null&&(t=Math.max(t,c.right)),c.top!=null&&(i=Math.max(i,c.top)),c.bottom!=null&&(r=Math.max(r,c.bottom)))}return{left:e,right:t,top:i,bottom:r}}const Gl=re.define();class zn{constructor(e,t,i,r){this.fromA=e,this.toA=t,this.fromB=i,this.toB=r}join(e){return new zn(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,i=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>i.toA)){if(r.toA<i.fromA)break;i=i.join(r),e.splice(t-1,1)}}return e.splice(t,0,i),e}static extendWithRanges(e,t){if(t.length==0)return e;let i=[];for(let r=0,l=0,c=0;;){let f=r<e.length?e[r].fromB:1e9,h=l<t.length?t[l]:1e9,p=Math.min(f,h);if(p==1e9)break;let g=p+c,y=p,v=g;for(;;)if(l<t.length&&t[l]<=y){let w=t[l+1];l+=2,y=Math.max(y,w);for(let k=r;k<e.length&&e[k].fromB<=y;k++)c=e[k].toA-e[k].toB;v=Math.max(v,w+c)}else if(r<e.length&&e[r].fromB<=y){let w=e[r++];y=Math.max(y,w.toB),v=Math.max(v,w.toA),c=w.toA-w.toB}else break;i.push(new zn(g,v,p,y))}return i}}class Mu{constructor(e,t,i){this.view=e,this.state=t,this.transactions=i,this.flags=0,this.startState=e.state,this.changes=Ct.empty(this.startState.doc.length);for(let l of i)this.changes=this.changes.compose(l.changes);let r=[];this.changes.iterChangedRanges((l,c,f,h)=>r.push(new zn(l,c,f,h))),this.changedRanges=r}static create(e,t,i){return new Mu(e,t,i)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}const LM=[];class ht{constructor(e,t,i=0){this.dom=e,this.length=t,this.flags=i,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return LM}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let t=this.domAttrs;t&&bM(this.dom,t)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let i=t;for(let r of this.children){if(r==e)return i;i+=r.length+r.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t){return null}domPosFor(e,t){let i=Os(this.dom),r=this.length?e>0:t>0;return new Kn(this.parent.dom,i+(r?1:0),e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof af)return e;return null}static get(e){return e.cmTile}}class rf extends ht{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,i=null,r,l=e?.node==t?e:null,c=0;for(let f of this.children){if(f.sync(e),c+=f.length+f.breakAfter,r=i?i.nextSibling:t.firstChild,l&&r!=f.dom&&(l.written=!0),f.dom.parentNode==t)for(;r&&r!=f.dom;)r=Yv(r);else t.insertBefore(f.dom,r);i=f.dom}for(r=i?i.nextSibling:t.firstChild,l&&r&&(l.written=!0);r;)r=Yv(r);this.length=c}}function Yv(n){let e=n.nextSibling;return n.parentNode.removeChild(n),e}class af extends rf{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=ht.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],i=this,r=0,l=0;;)if(r==i.children.length){if(!t.length)return;i=i.parent,i.breakAfter&&l++,r=t.pop()}else{let c=i.children[r++];if(c instanceof Hi)t.push(r),i=c,r=0;else{let f=l+c.length,h=e(c,l);if(h!==void 0)return h;l=f+c.breakAfter}}}resolveBlock(e,t){let i,r=-1,l,c=-1;if(this.blockTiles((f,h)=>{let p=h+f.length;if(e>=h&&e<=p){if(f.isWidget()&&t>=-1&&t<=1){if(f.flags&32)return!0;f.flags&16&&(i=void 0)}(h<e||e==p&&(t<-1?f.length:f.covers(1)))&&(!i||!f.isWidget()&&i.isWidget())&&(i=f,r=e-h),(p>e||e==h&&(t>1?f.length:f.covers(-1)))&&(!l||!f.isWidget()&&l.isWidget())&&(l=f,c=e-h)}}),!i&&!l)throw new Error("No tile at position "+e);return i&&t<0||!l?{tile:i,offset:r}:{tile:l,offset:c}}}class Hi extends rf{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(e,t){let i=new Hi(t||document.createElement(e.tagName),e);return t||(i.flags|=4),i}}class Ca extends rf{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(e,t,i){let r=new Ca(t||document.createElement("div"),e);return(!t||!i)&&(r.flags|=4),r}get domAttrs(){return this.attrs}resolveInline(e,t,i){let r=null,l=-1,c=null,f=-1;function h(g,y){for(let v=0,w=0;v<g.children.length&&w<=y;v++){let k=g.children[v],A=w+k.length;A>=y&&(k.isComposite()?h(k,y-w):(!c||c.isHidden&&(t>0||i&&HM(c,k)))&&(A>y||k.flags&32)?(c=k,f=y-w):(w<y||k.flags&16&&!k.isHidden)&&(r=k,l=y-w)),w=A}}h(this,e);let p=(t<0?r:c)||r||c;return p?{tile:p,offset:p==r?l:f}:null}coordsIn(e,t){let i=this.resolveInline(e,t,!0);return i?i.tile.coordsIn(Math.max(0,i.offset),t):_M(this)}domIn(e,t){let i=this.resolveInline(e,t);if(i){let{tile:r,offset:l}=i;if(this.dom.contains(r.dom))return r.isText()?new Kn(r.dom,Math.min(r.dom.nodeValue.length,l)):r.domPosFor(l,r.flags&16?1:r.flags&32?-1:t);let c=i.tile.parent,f=!1;for(let h of c.children){if(f)return new Kn(h.dom,0);h==i.tile&&(f=!0)}}return new Kn(this.dom,0)}}function _M(n){let e=n.dom.lastChild;if(!e)return n.dom.getBoundingClientRect();let t=mu(e);return t[t.length-1]||null}function HM(n,e){let t=n.coordsIn(0,1),i=e.coordsIn(0,1);return t&&i&&i.top<t.bottom}class on extends rf{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(e,t){let i=new on(t||document.createElement(e.tagName),e);return t||(i.flags|=4),i}}class or extends ht{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t){let i=this.dom.nodeValue.length;e>i&&(e=i);let r=e,l=e,c=0;e==0&&t<0||e==i&&t>=0?ne.chrome||ne.gecko||(e?(r--,c=1):l<i&&(l++,c=-1)):t<0?r--:l<i&&l++;let f=lo(this.dom,r,l).getClientRects();if(!f.length)return null;let h=f[(c?c<0:t>=0)?0:f.length-1];return ne.safari&&!c&&h.width==0&&(h=Array.prototype.find.call(f,p=>p.width)||h),c?Tu(h,c<0):h||null}static of(e,t){let i=new or(t||document.createTextNode(e),e);return t||(i.flags|=2),i}}class mr extends ht{constructor(e,t,i,r){super(e,t,r),this.widget=i}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,i){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(i)return Tu(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let l=this.dom.getClientRects(),c=null;if(!l.length)return null;let f=this.flags&16?!0:this.flags&32?!1:e>0;for(let h=f?l.length-1:0;c=l[h],!(e>0?h==0:h==l.length-1||c.top<c.bottom);h+=f?-1:1);return Tu(c,!f)}}get overrideDOMText(){if(!this.length)return Ue.empty;let{root:e}=this;if(!e)return Ue.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(e,t,i,r,l){return l||(l=e.toDOM(t),e.editable||(l.contentEditable="false")),new mr(l,i,e,r)}}class Eu extends ht{constructor(e){let t=document.createElement("img");t.className="cm-widgetBuffer",t.setAttribute("aria-hidden","true"),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return Ue.empty}coordsIn(e){return this.dom.getBoundingClientRect()}}class qM{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,i){let{tile:r,index:l,beforeBreak:c,parents:f}=this;for(;e||t>0;)if(r.isComposite())if(c){if(!e)break;i&&i.break(),e--,c=!1}else if(l==r.children.length){if(!e&&!f.length)break;i&&i.leave(r),c=!!r.breakAfter,{tile:r,index:l}=f.pop(),l++}else{let h=r.children[l],p=h.breakAfter;(t>0?h.length<=e:h.length<e)&&(!i||i.skip(h,0,h.length)!==!1||!h.isComposite)?(c=!!p,l++,e-=h.length):(f.push({tile:r,index:l}),r=h,l=0,i&&h.isComposite()&&i.enter(h))}else if(l==r.length)c=!!r.breakAfter,{tile:r,index:l}=f.pop(),l++;else if(e){let h=Math.min(e,r.length-l);i&&i.skip(r,l,l+h),e-=h,l+=h}else break;return this.tile=r,this.index=l,this.beforeBreak=c,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class VM{constructor(e,t,i,r){this.from=e,this.to=t,this.wrapper=i,this.rank=r}}class UM{constructor(e,t,i){this.cache=e,this.root=t,this.blockWrappers=i,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,i,r){var l;this.flushBuffer();let c=this.ensureMarks(t,i),f=c.lastChild;if(f&&f.isText()&&!(f.flags&8)&&f.length+e.length<512){this.cache.reused.set(f,2);let h=c.children[c.children.length-1]=new or(f.dom,f.text+e);h.parent=c}else c.append(r||or.of(e,(l=this.cache.find(or))===null||l===void 0?void 0:l.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let i=this.curLine;i.dom!=t.line.dom&&(i.setDOM(this.cache.reused.has(t.line)?Fd(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=i;for(let f=t.marks.length-1;f>=0;f--){let h=t.marks[f],p=r.lastChild;if(p instanceof on&&p.mark.eq(h.mark))p.dom!=h.dom&&p.setDOM(Fd(h.dom)),r=p;else{if(this.cache.reused.get(h)){let y=ht.get(h.dom);y&&y.setDOM(Fd(h.dom))}let g=on.of(h.mark,h.dom);r.append(g),r=g}this.cache.reused.set(h,2)}let l=ht.get(e.text);l&&this.cache.reused.set(l,2);let c=new or(e.text,e.text.nodeValue);c.flags|=8,this.pos=e.range.toB,r.append(c)}addInlineWidget(e,t,i){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let l=this.ensureMarks(t,i);!r&&!(e.flags&16)&&l.append(this.getBuffer(1)),l.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,i){this.flushBuffer(),this.ensureMarks(t,i).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){var i;e||(e=Aw);let r=Ca.start(e,t||((i=this.cache.find(Ca))===null||i===void 0?void 0:i.dom),!!t);this.getBlockPos().append(this.lastBlock=this.curLine=r)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){var i;let r=this.curLine;for(let l=e.length-1;l>=0;l--){let c=e[l],f;if(t>0&&(f=r.lastChild)&&f instanceof on&&f.mark.eq(c))r=f,t--;else{let h=on.of(c,(i=this.cache.find(on,p=>p.mark.eq(c)))===null||i===void 0?void 0:i.dom);r.append(h),r=h,t=0}}return r}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!Kv(this.curLine,!1)||e.dom.nodeName!="BR"&&e.isWidget()&&!(ne.ios&&Kv(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(Xd,0,32)||new mr(Xd.toDOM(),0,Xd,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,i=new VM(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-i.rank||this.wrappers[r-1].to-i.to)<0;)r--;this.wrappers.splice(r,0,i)}this.wrapperPos=this.pos}getBlockPos(){var e;this.updateBlockWrappers();let t=this.root;for(let i of this.wrappers){let r=t.lastChild;if(i.from<this.pos&&r instanceof Hi&&r.wrapper.eq(i.wrapper))t=r;else{let l=Hi.of(i.wrapper,(e=this.cache.find(Hi,c=>c.wrapper.eq(i.wrapper)))===null||e===void 0?void 0:e.dom);t.append(l),t=l}}return t}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),i=this.cache.find(Eu,void 0,1);return i&&(i.flags=t),i||new Eu(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class $M{constructor(e){this.skipCount=0,this.text="",this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:r,lineBreak:l,done:c}=this.cursor.next(this.skipCount);if(this.skipCount=0,c)throw new Error("Ran out of text content when drawing inline views");this.text=r;let f=this.textOff=Math.min(e,r.length);return l?null:r.slice(0,f)}let t=Math.min(this.text.length,this.textOff+e),i=this.text.slice(this.textOff,t);return this.textOff=t,i}}const Ru=[mr,Ca,or,on,Eu,Hi,af];for(let n=0;n<Ru.length;n++)Ru[n].bucket=n;class GM{constructor(e){this.view=e,this.buckets=Ru.map(()=>[]),this.index=Ru.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,i=this.buckets[t];i.length<6?i.push(e):i[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,i=2){let r=e.bucket,l=this.buckets[r],c=this.index[r];for(let f=l.length-1;f>=0;f--){let h=(f+c)%l.length,p=l[h];if((!t||t(p))&&!this.reused.has(p))return l.splice(h,1),h<c&&this.index[r]--,this.reused.set(p,i),p}return null}findWidget(e,t,i){let r=this.buckets[0];if(r.length)for(let l=0,c=0;;l++){if(l==r.length){if(c)return null;c=1,l=0}let f=r[l];if(!this.reused.has(f)&&(c==0?f.widget.compare(e):f.widget.constructor==e.constructor&&e.updateDOM(f.dom,this.view,f.widget)))return r.splice(l,1),l<this.index[0]&&this.index[0]--,f.widget==e&&f.length==t&&(f.flags&497)==i?(this.reused.set(f,1),f):(this.reused.set(f,2),new mr(f.dom,t,e,f.flags&-498|i))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}}class WM{constructor(e,t,i,r,l){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=l,this.openWidget=!1,this.openMarks=0,this.cache=new GM(e),this.text=new $M(e.state.doc),this.builder=new UM(this.cache,new af(e,e.contentDOM),Me.iter(i)),this.cache.reused.set(t,2),this.old=new qM(t),this.reuseWalker={skip:(c,f,h)=>{if(this.cache.add(c),c.isComposite())return!1},enter:c=>this.cache.add(c),leave:()=>{},break:()=>{}}}run(e,t){let i=t&&this.getCompositionContext(t.text);for(let r=0,l=0,c=0;;){let f=c<e.length?e[c++]:null,h=f?f.fromA:this.old.root.length;if(h>r){let p=h-r;this.preserve(p,!c,!f),r=h,l+=p}if(!f)break;t&&f.fromA<=t.range.fromA&&f.toA>=t.range.toA?(this.forward(f.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(l,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,i),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,f.toA),this.emit(t.range.toB,f.toB)):(this.forward(f.fromA,f.toA),this.emit(l,f.toB)),l=f.toB,r=f.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,i){let r=KM(this.old),l=this.openMarks;this.old.advance(e,i?1:-1,{skip:(c,f,h)=>{if(c.isWidget())if(this.openWidget)this.builder.continueWidget(h-f);else{let p=h>0||f<c.length?mr.of(c.widget,this.view,h-f,c.flags&496,this.cache.maybeReuse(c)):this.cache.reuse(c);p.flags&256?(p.flags&=-2,this.builder.addBlockWidget(p)):(this.builder.ensureLine(null),this.builder.addInlineWidget(p,r,l),l=r.length)}else if(c.isText())this.builder.ensureLine(null),!f&&h==c.length&&!this.cache.reused.has(c)?this.builder.addText(c.text,r,l,this.cache.reuse(c)):(this.cache.add(c),this.builder.addText(c.text.slice(f,h),r,l)),l=r.length;else if(c.isLine())c.flags&=-2,this.cache.reused.set(c,1),this.builder.addLine(c);else if(c instanceof Eu)this.cache.add(c);else if(c instanceof on)this.builder.ensureLine(null),this.builder.addMark(c,r,l),this.cache.reused.set(c,1),l=r.length;else return!1;this.openWidget=!1},enter:c=>{c.isLine()?this.builder.addLineStart(c.attrs,this.cache.maybeReuse(c)):(this.cache.add(c),c instanceof on&&r.unshift(c.mark)),this.openWidget=!1},leave:c=>{c.isLine()?r.length&&(r.length=l=0):c instanceof on&&(r.shift(),l=Math.min(l,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let i=null,r=this.builder,l=0,c=Me.spans(this.decorations,e,t,{point:(f,h,p,g,y,v)=>{if(p instanceof dr){if(this.disallowBlockEffectsFor[v]){if(p.block)throw new RangeError("Block decorations may not be specified via plugins");if(h>this.view.state.doc.lineAt(f).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(l=g.length,y>g.length)r.continueWidget(h-f);else{let w=p.widget||(p.block?Ta.block:Ta.inline),k=PM(p),A=this.cache.findWidget(w,h-f,k)||mr.of(w,this.view,h-f,k);p.block?(p.startSide>0&&r.addLineStartIfNotCovered(i),r.addBlockWidget(A)):(r.ensureLine(i),r.addInlineWidget(A,g,y))}i=null}else i=YM(i,p);h>f&&this.text.skip(h-f)},span:(f,h,p,g)=>{for(let y=f;y<h;){let v=this.text.next(Math.min(512,h-y));v==null?(r.addLineStartIfNotCovered(i),r.addBreak(),y++):(r.ensureLine(i),r.addText(v,p,y==f?g:p.length),y+=v.length),i=null}}});r.addLineStartIfNotCovered(i),this.openWidget=c>l,this.openMarks=c}forward(e,t,i=1){t-e<=10?this.old.advance(t-e,i,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,i,this.reuseWalker))}getCompositionContext(e){let t=[],i=null;for(let r=e.parentNode;;r=r.parentNode){let l=ht.get(r);if(r==this.view.contentDOM)break;l instanceof on?t.push(l):l?.isLine()?i=l:l instanceof Hi||(r.nodeName=="DIV"&&!i&&r!=this.view.contentDOM?i=new Ca(r,Aw):i||t.push(on.of(new bo({tagName:r.nodeName.toLowerCase(),attributes:vM(r)}),r)))}return{line:i,marks:t}}}function Kv(n,e){let t=i=>{for(let r of i.children)if((e?r.isText():r.length)||t(r))return!0;return!1};return t(n)}function PM(n){let e=n.isReplace?(n.startSide<0?64:0)|(n.endSide>0?128:0):n.startSide>0?32:16;return n.block&&(e|=256),e}const Aw={class:"cm-line"};function YM(n,e){let t=e.spec.attributes,i=e.spec.class;return!t&&!i||(n||(n={class:"cm-line"}),t&&Bm(t,n),i&&(n.class+=" "+i)),n}function KM(n){let e=[];for(let t=n.parents.length;t>1;t--){let i=t==n.parents.length?n.tile:n.parents[t].tile;i instanceof on&&e.push(i.mark)}return e}function Fd(n){let e=ht.get(n);return e&&e.setDOM(n.cloneNode()),n}class Ta extends yo{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}Ta.inline=new Ta("span");Ta.block=new Ta("div");const Xd=new class extends yo{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}};class Iv{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=be.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new af(e,e.contentDOM),this.updateInner([new zn(0,0,0,e.state.doc.length)],null)}update(e){var t;let i=e.changedRanges;this.minWidth>0&&i.length&&(i.every(({fromA:g,toA:y})=>y<this.minWidthFrom||g>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let r=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((t=this.domChanged)===null||t===void 0)&&t.newSel?r=this.domChanged.newSel.head:!nE(e.changes,this.hasComposition)&&!e.selectionSet&&(r=e.state.selection.main.head));let l=r>-1?FM(this.view,e.changes,r):null;if(this.domChanged=null,this.hasComposition){let{from:g,to:y}=this.hasComposition;i=new zn(g,y,e.changes.mapPos(g,-1),e.changes.mapPos(y,1)).addToSet(i.slice())}this.hasComposition=l?{from:l.range.fromB,to:l.range.toB}:null,(ne.ie||ne.chrome)&&!l&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let c=this.decorations,f=this.blockWrappers;this.updateDeco();let h=ZM(c,this.decorations,e.changes);h.length&&(i=zn.extendWithRanges(i,h));let p=eE(f,this.blockWrappers,e.changes);return p.length&&(i=zn.extendWithRanges(i,p)),l&&!i.some(g=>g.fromA<=l.range.fromA&&g.toA>=l.range.toA)&&(i=l.range.addToSet(i.slice())),this.tile.flags&2&&i.length==0?!1:(this.updateInner(i,l),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:i}=this.view;i.ignore(()=>{if(t||e.length){let c=this.tile,f=new WM(this.view,c,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&ht.get(t.text)&&f.cache.reused.set(ht.get(t.text),2),this.tile=f.run(e,t),em(c,f.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let l=ne.chrome||ne.ios?{node:i.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(l),l&&(l.written||i.selectionRange.focusNode!=l.node||!this.tile.dom.contains(l.node))&&(this.forceSelection=!0),this.tile.dom.style.height=""});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let l of this.tile.children)l.isWidget()&&l.widget instanceof Qd&&r.push(l.dom);i.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let i of t.effects)i.is(vw)&&(this.editContextFormatting=i.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:i}=this.tile,r=this.view.root.activeElement,l=r==i,c=!l&&!(this.view.state.facet(Li)||i.tabIndex>-1)&&Xl(i,this.view.observer.selectionRange)&&!(r&&i.contains(r));if(!(l||t||c))return;let f=this.forceSelection;this.forceSelection=!1;let h=this.view.state.selection.main,p,g;if(h.empty?g=p=this.inlineDOMNearPos(h.anchor,h.assoc||1):(g=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),p=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),ne.gecko&&h.empty&&!this.hasComposition&&IM(p)){let v=document.createTextNode("");this.view.observer.ignore(()=>p.node.insertBefore(v,p.node.childNodes[p.offset]||null)),p=g=new Kn(v,0),f=!0}let y=this.view.observer.selectionRange;(f||!y.focusNode||(!Ql(p.node,p.offset,y.anchorNode,y.anchorOffset)||!Ql(g.node,g.offset,y.focusNode,y.focusOffset))&&!this.suppressWidgetCursorChange(y,h))&&(this.view.observer.ignore(()=>{ne.android&&ne.chrome&&i.contains(y.focusNode)&&tE(y.focusNode,i)&&(i.blur(),i.focus({preventScroll:!0}));let v=ao(this.view.root);if(v)if(h.empty){if(ne.gecko){let w=XM(p.node,p.offset);if(w&&w!=3){let k=(w==1?iw:sw)(p.node,p.offset);k&&(p=new Kn(k.node,k.offset))}}v.collapse(p.node,p.offset),h.bidiLevel!=null&&v.caretBidiLevel!==void 0&&(v.caretBidiLevel=h.bidiLevel)}else if(v.extend){v.collapse(p.node,p.offset);try{v.extend(g.node,g.offset)}catch{}}else{let w=document.createRange();h.anchor>h.head&&([p,g]=[g,p]),w.setEnd(g.node,g.offset),w.setStart(p.node,p.offset),v.removeAllRanges(),v.addRange(w)}c&&this.view.root.activeElement==i&&(i.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(p,g)),this.impreciseAnchor=p.precise?null:new Kn(y.anchorNode,y.anchorOffset),this.impreciseHead=g.precise?null:new Kn(y.focusNode,y.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Ql(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,i=ao(e.root),{anchorNode:r,anchorOffset:l}=e.observer.selectionRange;if(!i||!t.empty||!t.assoc||!i.modify)return;let c=this.lineAt(t.head,t.assoc);if(!c)return;let f=c.posAtStart;if(t.head==f||t.head==f+c.length)return;let h=this.coordsAt(t.head,-1),p=this.coordsAt(t.head,1);if(!h||!p||h.bottom>p.top)return;let g=this.domAtPos(t.head+t.assoc,t.assoc);i.collapse(g.node,g.offset),i.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let y=e.observer.selectionRange;e.docView.posFromDOM(y.anchorNode,y.anchorOffset)!=t.from&&i.collapse(r,l)}posFromDOM(e,t){let i=this.tile.nearest(e);if(!i)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=i.posAtStart;if(i.isComposite()){let l;if(e==i.dom)l=i.dom.childNodes[t];else{let c=Vi(e)==0?0:t==0?-1:1;for(;;){let f=e.parentNode;if(f==i.dom)break;c==0&&f.firstChild!=f.lastChild&&(e==f.firstChild?c=-1:c=1),e=f}c<0?l=e:l=e.nextSibling}if(l==i.dom.firstChild)return r;for(;l&&!ht.get(l);)l=l.nextSibling;if(!l)return r+i.length;for(let c=0,f=r;;c++){let h=i.children[c];if(h.dom==l)return f;f+=h.length+h.breakAfter}}else return i.isText()?e==i.dom?r+t:r+(t?i.length:0):r}domAtPos(e,t){let{tile:i,offset:r}=this.tile.resolveBlock(e,t);return i.isWidget()?i.domPosFor(e,t):i.domIn(r,t)}inlineDOMNearPos(e,t){let i,r=-1,l=!1,c,f=-1,h=!1;return this.tile.blockTiles((p,g)=>{if(p.isWidget()){if(p.flags&32&&g>=e)return!0;p.flags&16&&(l=!0)}else{let y=g+p.length;if(g<=e&&(i=p,r=e-g,l=y<e),y>=e&&!c&&(c=p,f=e-g,h=g>e),g>e&&c)return!0}}),!i&&!c?this.domAtPos(e,t):(l&&c?i=null:h&&i&&(c=null),i&&t<0||!c?i.domIn(r,t):c.domIn(f,t))}coordsAt(e,t){let{tile:i,offset:r}=this.tile.resolveBlock(e,t);return i.isWidget()?i.widget instanceof Qd?null:i.coordsInWidget(r,t,!0):i.coordsIn(r,t)}lineAt(e,t){let{tile:i}=this.tile.resolveBlock(e,t);return i.isLine()?i:null}coordsForChar(e){let{tile:t,offset:i}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(l,c){if(l.isComposite())for(let f of l.children){if(f.length>=c){let h=r(f,c);if(h)return h}if(c-=f.length,c<0)break}else if(l.isText()&&c<l.length){let f=Ot(l.text,c);if(f==c)return null;let h=lo(l.dom,c,f).getClientRects();for(let p=0;p<h.length;p++){let g=h[p];if(p==h.length-1||g.top<g.bottom&&g.left<g.right)return g}}return null}return r(t,i)}measureVisibleLineHeights(e){let t=[],{from:i,to:r}=e,l=this.view.contentDOM.clientWidth,c=l>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,f=-1,h=this.view.textDirection==it.LTR,p=0,g=(y,v,w)=>{for(let k=0;k<y.children.length&&!(v>r);k++){let A=y.children[k],C=v+A.length,O=A.dom.getBoundingClientRect(),{height:G}=O;if(w&&!k&&(p+=O.top-w.top),A instanceof Hi)C>i&&g(A,v,O);else if(v>=i&&(p>0&&t.push(-p),t.push(G+p),p=0,c)){let _=A.dom.lastChild,B=_?mu(_):[];if(B.length){let R=B[B.length-1],W=h?R.right-O.left:O.right-R.left;W>f&&(f=W,this.minWidth=l,this.minWidthFrom=v,this.minWidthTo=C)}}w&&k==y.children.length-1&&(p+=w.bottom-O.bottom),v=C+A.breakAfter}};return g(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction=="rtl"?it.RTL:it.LTR}measureTextSize(){let e=this.tile.blockTiles(c=>{if(c.isLine()&&c.children.length&&c.length<=20){let f=0,h;for(let p of c.children){if(!p.isText()||/[^ -~]/.test(p.text))return;let g=mu(p.dom);if(g.length!=1)return;f+=g[0].width,h=g[0].height}if(f)return{lineHeight:c.dom.getBoundingClientRect().height,charWidth:f/c.length,textHeight:h}}});if(e)return e;let t=document.createElement("div"),i,r,l;return t.className="cm-line",t.style.width="99999px",t.style.position="absolute",t.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let c=mu(t.firstChild)[0];i=t.getBoundingClientRect().height,r=c&&c.width?c.width/27:7,l=c&&c.height?c.height:i,t.remove()}),{lineHeight:i,charWidth:r,textHeight:l}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let i=0,r=0;;r++){let l=r==t.viewports.length?null:t.viewports[r],c=l?l.from-1:this.view.state.doc.length;if(c>i){let f=(t.lineBlockAt(c).bottom-t.lineBlockAt(i).top)/this.view.scaleY;e.push(be.replace({widget:new Qd(f),block:!0,inclusive:!0,isBlockGap:!0}).range(i,c))}if(!l)break;i=l.to+1}return be.set(e)}updateDeco(){let e=1,t=this.view.state.facet(sf).map(l=>(this.dynamicDecorationMap[e++]=typeof l=="function")?l(this.view):l),i=!1,r=this.view.state.facet(Vm).map((l,c)=>{let f=typeof l=="function";return f&&(i=!0),f?l(this.view):l});for(r.length&&(this.dynamicDecorationMap[e++]=i,t.push(Me.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(ww).map(l=>typeof l=="function"?l(this.view):l)}scrollIntoView(e){var t;if(e.isSnapshot){let g=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=g.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let g of this.view.state.facet(bw))try{if(g(this.view,e.range,e))return!0}catch(y){In(this.view.state,y,"scroll handler")}let{range:i}=e,r=this.coordsAt(i.head,(t=i.assoc)!==null&&t!==void 0?t:i.empty?0:i.head>i.anchor?-1:1),l;if(!r)return;!i.empty&&(l=this.coordsAt(i.anchor,i.anchor>i.head?-1:1))&&(r={left:Math.min(r.left,l.left),top:Math.min(r.top,l.top),right:Math.max(r.right,l.right),bottom:Math.max(r.bottom,l.bottom)});let c=Um(this.view),f={left:r.left-c.left,top:r.top-c.top,right:r.right+c.right,bottom:r.bottom+c.bottom},{offsetWidth:h,offsetHeight:p}=this.view.scrollDOM;if(kM(this.view.scrollDOM,f,i.head<i.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,h),-h),Math.max(Math.min(e.yMargin,p),-p),this.view.textDirection==it.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(r.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||r.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let g=this.view.docView.lineAt(i.head,1);g&&g.dom.scrollIntoView({block:"nearest"})}}lineHasWidget(e){let t=i=>i.isWidget()||i.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){em(this.tile)}}function em(n,e){let t=e?.get(n);if(t!=1){t==null&&n.destroy();for(let i of n.children)em(i,e)}}function IM(n){return n.node.nodeType==1&&n.node.firstChild&&(n.offset==0||n.node.childNodes[n.offset-1].contentEditable=="false")&&(n.offset==n.node.childNodes.length||n.node.childNodes[n.offset].contentEditable=="false")}function Cw(n,e){let t=n.observer.selectionRange;if(!t.focusNode)return null;let i=iw(t.focusNode,t.focusOffset),r=sw(t.focusNode,t.focusOffset),l=i||r;if(r&&i&&r.node!=i.node){let f=ht.get(r.node);if(!f||f.isText()&&f.text!=r.node.nodeValue)l=r;else if(n.docView.lastCompositionAfterCursor){let h=ht.get(i.node);!h||h.isText()&&h.text!=i.node.nodeValue||(l=r)}}if(n.docView.lastCompositionAfterCursor=l!=i,!l)return null;let c=e-l.offset;return{from:c,to:c+l.node.nodeValue.length,node:l.node}}function FM(n,e,t){let i=Cw(n,t);if(!i)return null;let{node:r,from:l,to:c}=i,f=r.nodeValue;if(/[\n\r]/.test(f)||n.state.doc.sliceString(i.from,i.to)!=f)return null;let h=e.invertedDesc;return{range:new zn(h.mapPos(l),h.mapPos(c),l,c),text:r}}function XM(n,e){return n.nodeType!=1?0:(e&&n.childNodes[e-1].contentEditable=="false"?1:0)|(e<n.childNodes.length&&n.childNodes[e].contentEditable=="false"?2:0)}let QM=class{constructor(){this.changes=[]}compareRange(e,t){ba(e,t,this.changes)}comparePoint(e,t){ba(e,t,this.changes)}boundChange(e){ba(e,e,this.changes)}};function ZM(n,e,t){let i=new QM;return Me.compare(n,e,t,i),i.changes}class JM{constructor(){this.changes=[]}compareRange(e,t){ba(e,t,this.changes)}comparePoint(){}boundChange(e){ba(e,e,this.changes)}}function eE(n,e,t){let i=new JM;return Me.compare(n,e,t,i),i.changes}function tE(n,e){for(let t=n;t&&t!=e;t=t.assignedSlot||t.parentNode)if(t.nodeType==1&&t.contentEditable=="false")return!0;return!1}function nE(n,e){let t=!1;return e&&n.iterChangedRanges((i,r)=>{i<e.to&&r>e.from&&(t=!0)}),t}class Qd extends yo{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function iE(n,e,t=1){let i=n.charCategorizer(e),r=n.doc.lineAt(e),l=e-r.from;if(r.length==0)return Y.cursor(e);l==0?t=1:l==r.length&&(t=-1);let c=l,f=l;t<0?c=Ot(r.text,l,!1):f=Ot(r.text,l);let h=i(r.text.slice(c,f));for(;c>0;){let p=Ot(r.text,c,!1);if(i(r.text.slice(p,c))!=h)break;c=p}for(;f<r.length;){let p=Ot(r.text,f);if(i(r.text.slice(f,p))!=h)break;f=p}return Y.range(c+r.from,f+r.from)}function sE(n,e,t,i,r){let l=Math.round((i-e.left)*n.defaultCharacterWidth);if(n.lineWrapping&&t.height>n.defaultLineHeight*1.5){let f=n.viewState.heightOracle.textHeight,h=Math.floor((r-t.top-(n.defaultLineHeight-f)*.5)/f);l+=h*n.viewState.heightOracle.lineLength}let c=n.state.sliceDoc(t.from,t.to);return t.from+$p(c,l,n.state.tabSize)}function tm(n,e,t){let i=n.lineBlockAt(e);if(Array.isArray(i.type)){let r;for(let l of i.type){if(l.from>e)break;if(!(l.to<e)){if(l.from<e&&l.to>e)return l;(!r||l.type==Vt.Text&&(r.type!=l.type||(t<0?l.from<e:l.to>e)))&&(r=l)}}return r||i}return i}function rE(n,e,t,i){let r=tm(n,e.head,e.assoc||-1),l=!i||r.type!=Vt.Text||!(n.lineWrapping||r.widgetLineBreaks)?null:n.coordsAtPos(e.assoc<0&&e.head>r.from?e.head-1:e.head);if(l){let c=n.dom.getBoundingClientRect(),f=n.textDirectionAt(r.from),h=n.posAtCoords({x:t==(f==it.LTR)?c.right-1:c.left+1,y:(l.top+l.bottom)/2});if(h!=null)return Y.cursor(h,t?-1:1)}return Y.cursor(t?r.to:r.from,t?-1:1)}function Fv(n,e,t,i){let r=n.state.doc.lineAt(e.head),l=n.bidiSpans(r),c=n.textDirectionAt(r.from);for(let f=e,h=null;;){let p=jM(r,l,c,f,t),g=cw;if(!p){if(r.number==(t?n.state.doc.lines:1))return f;g=`
`,r=n.state.doc.line(r.number+(t?1:-1)),l=n.bidiSpans(r),p=n.visualLineSide(r,!t)}if(h){if(!h(g))return f}else{if(!i)return p;h=i(g)}f=p}}function aE(n,e,t){let i=n.state.charCategorizer(e),r=i(t);return l=>{let c=i(l);return r==ot.Space&&(r=c),r==c}}function lE(n,e,t,i){let r=e.head,l=t?1:-1;if(r==(t?n.state.doc.length:0))return Y.cursor(r,e.assoc);let c=e.goalColumn,f,h=n.contentDOM.getBoundingClientRect(),p=n.coordsAtPos(r,e.assoc||((e.empty?t:e.head==e.from)?1:-1)),g=n.documentTop;if(p)c==null&&(c=p.left-h.left),f=l<0?p.top:p.bottom;else{let k=n.viewState.lineBlockAt(r);c==null&&(c=Math.min(h.right-h.left,n.defaultCharacterWidth*(r-k.from))),f=(l<0?k.top:k.bottom)+g}let y=h.left+c,v=n.viewState.heightOracle.textHeight>>1,w=i??v;for(let k=0;;k+=v){let A=f+(w+k)*l,C=nm(n,{x:y,y:A},!1,l);if(t?A>h.bottom:A<h.top)return Y.cursor(C.pos,C.assoc);let O=n.coordsAtPos(C.pos,C.assoc),G=O?(O.top+O.bottom)/2:0;if(!O||(t?G>f:G<f))return Y.cursor(C.pos,C.assoc,void 0,c)}}function Zl(n,e,t){for(;;){let i=0;for(let r of n)r.between(e-1,e+1,(l,c,f)=>{if(e>l&&e<c){let h=i||t||(e-l<c-e?-1:1);e=h<0?l:c,i=h}});if(!i)return e}}function Tw(n,e){let t=null;for(let i=0;i<e.ranges.length;i++){let r=e.ranges[i],l=null;if(r.empty){let c=Zl(n,r.from,0);c!=r.from&&(l=Y.cursor(c,-1))}else{let c=Zl(n,r.from,-1),f=Zl(n,r.to,1);(c!=r.from||f!=r.to)&&(l=Y.range(r.from==r.anchor?c:f,r.from==r.head?c:f))}l&&(t||(t=e.ranges.slice()),t[i]=l)}return t?Y.create(t,e.mainIndex):e}function Zd(n,e,t){let i=Zl(n.state.facet(xo).map(r=>r(n)),t.from,e.head>t.from?-1:1);return i==t.from?t:Y.cursor(i,i<t.from?1:-1)}class ui{constructor(e,t){this.pos=e,this.assoc=t}}function nm(n,e,t,i){let r=n.contentDOM.getBoundingClientRect(),l=r.top+n.viewState.paddingTop,{x:c,y:f}=e,h=f-l,p;for(;;){if(h<0)return new ui(0,1);if(h>n.viewState.docHeight)return new ui(n.state.doc.length,-1);if(p=n.elementAtHeight(h),i==null)break;if(p.type==Vt.Text){if(i<0?p.to<n.viewport.from:p.from>n.viewport.to)break;let v=n.docView.coordsAt(i<0?p.from:p.to,i>0?-1:1);if(v&&(i<0?v.top<=h+l:v.bottom>=h+l))break}let y=n.viewState.heightOracle.textHeight/2;h=i>0?p.bottom+y:p.top-y}if(n.viewport.from>=p.to||n.viewport.to<=p.from){if(t)return null;if(p.type==Vt.Text){let y=sE(n,r,p,c,f);return new ui(y,y==p.from?1:-1)}}if(p.type!=Vt.Text)return h<(p.top+p.bottom)/2?new ui(p.from,1):new ui(p.to,-1);let g=n.docView.lineAt(p.from,2);return(!g||g.length!=p.length)&&(g=n.docView.lineAt(p.from,-2)),new oE(n,c,f,n.textDirectionAt(p.from)).scanTile(g,p.from)}class oE{constructor(e,t,i,r){this.view=e,this.x=t,this.y=i,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:i,spans:r}=this.bidiSpansAt(e);return r[fi.find(r,e-i.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:i,spans:r}=this.bidiSpansAt(e);return r[fi.find(r,e-i.from,-1,t)].dir}bidiIn(e,t){let{spans:i,line:r}=this.bidiSpansAt(e);return i.length>1||i.length&&(i[0].level!=this.baseDir||i[0].to+r.from<t)}scan(e,t,i=!1){let r=0,l=e.length-1,c=new Set,f=this.bidiIn(e[0],e[l]),h,p,g=-1,y=1e9,v;e:for(;r<l;){let k=l-r,A=r+l>>1;t:if(c.has(A)){let O=r+Math.floor(Math.random()*k);for(let G=0;G<k;G++){if(!c.has(O)){A=O;break t}O++,O==l&&(O=r)}break e}c.add(A);let C=t(A);if(C)for(let O=0;O<C.length;O++){let G=C[O],_=0;if(!(G.width==0&&C.length>1)){if(G.bottom<this.y)(!h||h.bottom<G.bottom)&&(h=G),_=1;else if(G.top>this.y)(!p||p.top>G.top)&&(p=G),_=-1;else{let B=G.left>this.x?this.x-G.left:G.right<this.x?this.x-G.right:0,R=Math.abs(B);R<y&&(g=A,y=R,v=G),B&&(_=B<0==(this.baseDir==it.LTR)?-1:1)}_==-1&&(!f||this.baseDirAt(e[A],1))?l=A:_==1&&(!f||this.baseDirAt(e[A+1],-1))&&(r=A+1)}}}if(!v){if(!p&&!h)return{i:e[0],after:!1};let k=h&&(!p||this.y-h.bottom<p.top-this.y)?h:p;return this.y=(k.top+k.bottom)/2,this.scan(e,t,!0)}if(y&&!i){let{top:k,bottom:A}=v;if(h&&h.bottom>(k+k+A)/3)return this.y=h.bottom-1,this.scan(e,t,!0);if(p&&p.top<(k+A+A)/3)return this.y=p.top+1,this.scan(e,t,!0)}let w=(f?this.dirAt(e[g],1):this.baseDir)==it.LTR;return{i:g,after:this.x>(v.left+v.right)/2==w}}scanText(e,t){let i=[];for(let l=0;l<e.length;l=Ot(e.text,l))i.push(t+l);i.push(t+e.length);let r=this.scan(i,l=>{let c=i[l]-t,f=i[l+1]-t;return lo(e.dom,c,f).getClientRects()});return r.after?new ui(i[r.i+1],-1):new ui(i[r.i],1)}scanTile(e,t){if(!e.length)return new ui(t,1);if(e.children.length==1){let f=e.children[0];if(f.isText())return this.scanText(f,t);if(f.isComposite())return this.scanTile(f,t)}let i=[t];for(let f=0,h=t;f<e.children.length;f++)i.push(h+=e.children[f].length);let r=this.scan(i,f=>{let h=e.children[f];return h.flags&48?null:(h.dom.nodeType==1?h.dom:lo(h.dom,0,h.length)).getClientRects()}),l=e.children[r.i],c=i[r.i];return l.isText()?this.scanText(l,c):l.isComposite()?this.scanTile(l,c):r.after?new ui(i[r.i+1],-1):new ui(c,1)}}const ua="￿";class cE{constructor(e,t){this.points=e,this.view=t,this.text="",this.lineSeparator=t.state.facet(Pe.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=ua}readRange(e,t){if(!e)return this;let i=e.parentNode;for(let r=e;;){this.findPointBefore(i,r);let l=this.text.length;this.readNode(r);let c=ht.get(r),f=r.nextSibling;if(f==t){c?.breakAfter&&!f&&i!=this.view.contentDOM&&this.lineBreak();break}let h=ht.get(f);(c&&h?c.breakAfter:(c?c.breakAfter:Cu(r))||Cu(f)&&(r.nodeName!="BR"||c?.isWidget())&&this.text.length>l)&&!fE(f,t)&&this.lineBreak(),r=f}return this.findPointBefore(i,t),this}readTextNode(e){let t=e.nodeValue;for(let i of this.points)i.node==e&&(i.pos=this.text.length+Math.min(i.offset,t.length));for(let i=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let l=-1,c=1,f;if(this.lineSeparator?(l=t.indexOf(this.lineSeparator,i),c=this.lineSeparator.length):(f=r.exec(t))&&(l=f.index,c=f[0].length),this.append(t.slice(i,l<0?t.length:l)),l<0)break;if(this.lineBreak(),c>1)for(let h of this.points)h.node==e&&h.pos>this.text.length&&(h.pos-=c-1);i=l+c}}readNode(e){let t=ht.get(e),i=t&&t.overrideDOMText;if(i!=null){this.findPointInside(e,i.length);for(let r=i.iter();!r.next().done;)r.lineBreak?this.lineBreak():this.append(r.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let i of this.points)i.node==e&&e.childNodes[i.offset]==t&&(i.pos=this.text.length)}findPointInside(e,t){for(let i of this.points)(e.nodeType==3?i.node==e:e.contains(i.node))&&(i.pos=this.text.length+(uE(e,i.node,i.offset)?t:0))}}function uE(n,e,t){for(;;){if(!e||t<Vi(e))return!1;if(e==n)return!0;t=Os(e)+1,e=e.parentNode}}function fE(n,e){let t;for(;!(n==e||!n);n=n.nextSibling){let i=ht.get(n);if(!i?.isWidget())return!1;i&&(t||(t=[])).push(i)}if(t)for(let i of t){let r=i.overrideDOMText;if(r?.length)return!1}return!0}class Xv{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class hE{constructor(e,t,i,r){this.typeOver=r,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:l,impreciseAnchor:c}=e.docView,f=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=Mw(e.docView.tile,t,i,0))){let h=l||c?[]:pE(e),p=new cE(h,e);p.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=p.text,this.newSel=mE(h,this.bounds.from)}else{let h=e.observer.selectionRange,p=l&&l.node==h.focusNode&&l.offset==h.focusOffset||!Fp(e.contentDOM,h.focusNode)?f.main.head:e.docView.posFromDOM(h.focusNode,h.focusOffset),g=c&&c.node==h.anchorNode&&c.offset==h.anchorOffset||!Fp(e.contentDOM,h.anchorNode)?f.main.anchor:e.docView.posFromDOM(h.anchorNode,h.anchorOffset),y=e.viewport;if((ne.ios||ne.chrome)&&f.main.empty&&p!=g&&(y.from>0||y.to<e.state.doc.length)){let v=Math.min(p,g),w=Math.max(p,g),k=y.from-v,A=y.to-w;(k==0||k==1||v==0)&&(A==0||A==-1||w==e.state.doc.length)&&(p=0,g=e.state.doc.length)}if(e.inputState.composing>-1&&f.ranges.length>1)this.newSel=f.replaceRange(Y.range(g,p));else if(e.lineWrapping&&g==p&&!(f.main.empty&&f.main.head==p)&&e.inputState.lastTouchTime>Date.now()-100){let v=e.coordsAtPos(p,-1),w=0;v&&(w=e.inputState.lastTouchY<=v.bottom?-1:1),this.newSel=Y.create([Y.cursor(p,w)])}else this.newSel=Y.single(g,p)}}}function Mw(n,e,t,i){if(n.isComposite()){let r=-1,l=-1,c=-1,f=-1;for(let h=0,p=i,g=i;h<n.children.length;h++){let y=n.children[h],v=p+y.length;if(p<e&&v>t)return Mw(y,e,t,p);if(v>=e&&r==-1&&(r=h,l=p),p>t&&y.dom.parentNode==n.dom){c=h,f=g;break}g=v,p=v+y.breakAfter}return{from:l,to:f<0?i+n.length:f,startDOM:(r?n.children[r-1].dom.nextSibling:null)||n.dom.firstChild,endDOM:c<n.children.length&&c>=0?n.children[c].dom:null}}else return n.isText()?{from:i,to:i+n.length,startDOM:n.dom,endDOM:n.dom.nextSibling}:null}function Ew(n,e){let t,{newSel:i}=e,{state:r}=n,l=r.selection.main,c=n.inputState.lastKeyTime>Date.now()-100?n.inputState.lastKeyCode:-1;if(e.bounds){let{from:f,to:h}=e.bounds,p=l.from,g=null;(c===8||ne.android&&e.text.length<h-f)&&(p=l.to,g="end");let y=r.doc.sliceString(f,h,ua),v,w;!l.empty&&l.from>=f&&l.to<=h&&(e.typeOver||y!=e.text)&&y.slice(0,l.from-f)==e.text.slice(0,l.from-f)&&y.slice(l.to-f)==e.text.slice(v=e.text.length-(y.length-(l.to-f)))?t={from:l.from,to:l.to,insert:Ue.of(e.text.slice(l.from-f,v).split(ua))}:(w=Rw(y,e.text,p-f,g))&&(ne.chrome&&c==13&&w.toB==w.from+2&&e.text.slice(w.from,w.toB)==ua+ua&&w.toB--,t={from:f+w.from,to:f+w.toA,insert:Ue.of(e.text.slice(w.from,w.toB).split(ua))})}else i&&(!n.hasFocus&&r.facet(Li)||Ou(i,l))&&(i=null);if(!t&&!i)return!1;if((ne.mac||ne.android)&&t&&t.from==t.to&&t.from==l.head-1&&/^\. ?$/.test(t.insert.toString())&&n.contentDOM.getAttribute("autocorrect")=="off"?(i&&t.insert.length==2&&(i=Y.single(i.main.anchor-1,i.main.head-1)),t={from:t.from,to:t.to,insert:Ue.of([t.insert.toString().replace("."," ")])}):r.doc.lineAt(l.from).to<l.to&&n.docView.lineHasWidget(l.to)&&n.inputState.insertingTextAt>Date.now()-50?t={from:l.from,to:l.to,insert:r.toText(n.inputState.insertingText)}:ne.chrome&&t&&t.from==t.to&&t.from==l.head&&t.insert.toString()==`
 `&&n.lineWrapping&&(i&&(i=Y.single(i.main.anchor-1,i.main.head-1)),t={from:l.from,to:l.to,insert:Ue.of([" "])}),t)return $m(n,t,i,c);if(i&&!Ou(i,l)){let f=!1,h="select";return n.inputState.lastSelectionTime>Date.now()-50&&(n.inputState.lastSelectionOrigin=="select"&&(f=!0),h=n.inputState.lastSelectionOrigin,h=="select.pointer"&&(i=Tw(r.facet(xo).map(p=>p(n)),i))),n.dispatch({selection:i,scrollIntoView:f,userEvent:h}),!0}else return!1}function $m(n,e,t,i=-1){if(ne.ios&&n.inputState.flushIOSKey(e))return!0;let r=n.state.selection.main;if(ne.android&&(e.to==r.to&&(e.from==r.from||e.from==r.from-1&&n.state.sliceDoc(e.from,r.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&va(n.contentDOM,"Enter",13)||(e.from==r.from-1&&e.to==r.to&&e.insert.length==0||i==8&&e.insert.length<e.to-e.from&&e.to>r.head)&&va(n.contentDOM,"Backspace",8)||e.from==r.from&&e.to==r.to+1&&e.insert.length==0&&va(n.contentDOM,"Delete",46)))return!0;let l=e.insert.toString();n.inputState.composing>=0&&n.inputState.composing++;let c,f=()=>c||(c=dE(n,e,t));return n.state.facet(pw).some(h=>h(n,e.from,e.to,l,f))||n.dispatch(f()),!0}function dE(n,e,t){let i,r=n.state,l=r.selection.main,c=-1;if(e.from==e.to&&e.from<l.from||e.from>l.to){let h=e.from<l.from?-1:1,p=h<0?l.from:l.to,g=Zl(r.facet(xo).map(y=>y(n)),p,h);e.from==g&&(c=g)}if(c>-1)i={changes:e,selection:Y.cursor(e.from+e.insert.length,-1)};else if(e.from>=l.from&&e.to<=l.to&&e.to-e.from>=(l.to-l.from)/3&&(!t||t.main.empty&&t.main.from==e.from+e.insert.length)&&n.inputState.composing<0){let h=l.from<e.from?r.sliceDoc(l.from,e.from):"",p=l.to>e.to?r.sliceDoc(e.to,l.to):"";i=r.replaceSelection(n.state.toText(h+e.insert.sliceString(0,void 0,n.state.lineBreak)+p))}else{let h=r.changes(e),p=t&&t.main.to<=h.newLength?t.main:void 0;if(r.selection.ranges.length>1&&(n.inputState.composing>=0||n.inputState.compositionPendingChange)&&e.to<=l.to+10&&e.to>=l.to-10){let g=n.state.sliceDoc(e.from,e.to),y,v=t&&Cw(n,t.main.head);if(v){let k=e.insert.length-(e.to-e.from);y={from:v.from,to:v.to-k}}else y=n.state.doc.lineAt(l.head);let w=l.to-e.to;i=r.changeByRange(k=>{if(k.from==l.from&&k.to==l.to)return{changes:h,range:p||k.map(h)};let A=k.to-w,C=A-g.length;if(n.state.sliceDoc(C,A)!=g||A>=y.from&&C<=y.to)return{range:k};let O=r.changes({from:C,to:A,insert:e.insert}),G=k.to-l.to;return{changes:O,range:p?Y.range(Math.max(0,p.anchor+G),Math.max(0,p.head+G)):k.map(O)}})}else i={changes:h,selection:p&&r.selection.replaceRange(p)}}let f="input.type";return(n.composing||n.inputState.compositionPendingChange&&n.inputState.compositionEndedAt>Date.now()-50)&&(n.inputState.compositionPendingChange=!1,f+=".compose",n.inputState.compositionFirstChange&&(f+=".start",n.inputState.compositionFirstChange=!1)),r.update(i,{userEvent:f,scrollIntoView:!0})}function Rw(n,e,t,i){let r=Math.min(n.length,e.length),l=0;for(;l<r&&n.charCodeAt(l)==e.charCodeAt(l);)l++;if(l==r&&n.length==e.length)return null;let c=n.length,f=e.length;for(;c>0&&f>0&&n.charCodeAt(c-1)==e.charCodeAt(f-1);)c--,f--;if(i=="end"){let h=Math.max(0,l-Math.min(c,f));t-=c+h-l}if(c<l&&n.length<e.length){let h=t<=l&&t>=c?l-t:0;l-=h,f=l+(f-c),c=l}else if(f<l){let h=t<=l&&t>=f?l-t:0;l-=h,c=l+(c-f),f=l}return{from:l,toA:c,toB:f}}function pE(n){let e=[];if(n.root.activeElement!=n.contentDOM)return e;let{anchorNode:t,anchorOffset:i,focusNode:r,focusOffset:l}=n.observer.selectionRange;return t&&(e.push(new Xv(t,i)),(r!=t||l!=i)&&e.push(new Xv(r,l))),e}function mE(n,e){if(n.length==0)return null;let t=n[0].pos,i=n.length==2?n[1].pos:t;return t>-1&&i>-1?Y.single(t+e,i+e):null}function Ou(n,e){return e.head==n.main.head&&e.anchor==n.main.anchor}class gE{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,ne.safari&&e.contentDOM.addEventListener("input",()=>null),ne.gecko&&DE(e.contentDOM.ownerDocument)}handleEvent(e){!AE(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,t){let i=this.handlers[e];if(i){for(let r of i.observers)r(this.view,t);for(let r of i.handlers){if(t.defaultPrevented)break;if(r(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=yE(e),i=this.handlers,r=this.view.contentDOM;for(let l in t)if(l!="scroll"){let c=!t[l].handlers.length,f=i[l];f&&c!=!f.handlers.length&&(r.removeEventListener(l,this.handleEvent),f=null),f||r.addEventListener(l,this.handleEvent,{passive:c})}for(let l in i)l!="scroll"&&!t[l]&&r.removeEventListener(l,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Dw.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),ne.android&&ne.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let t;return ne.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&!e.shiftKey&&((t=Ow.find(i=>i.keyCode==e.keyCode))&&!e.ctrlKey||bE.indexOf(e.key)>-1&&e.ctrlKey)?(this.pendingIOSKey=t||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,va(this.view.contentDOM,t.key,t.keyCode,t instanceof KeyboardEvent?t:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:ne.safari&&!ne.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function Qv(n,e){return(t,i)=>{try{return e.call(n,i,t)}catch(r){In(t.state,r)}}}function yE(n){let e=Object.create(null);function t(i){return e[i]||(e[i]={observers:[],handlers:[]})}for(let i of n){let r=i.spec,l=r&&r.plugin.domEventHandlers,c=r&&r.plugin.domEventObservers;if(l)for(let f in l){let h=l[f];h&&t(f).handlers.push(Qv(i.value,h))}if(c)for(let f in c){let h=c[f];h&&t(f).observers.push(Qv(i.value,h))}}for(let i in Fn)t(i).handlers.push(Fn[i]);for(let i in un)t(i).observers.push(un[i]);return e}const Ow=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],bE="dthko",Dw=[16,17,18,20,91,92,224,225],Wc=6;function Pc(n){return Math.max(0,n)*.7+8}function vE(n,e){return Math.max(Math.abs(n.clientX-e.clientX),Math.abs(n.clientY-e.clientY))}class xE{constructor(e,t,i,r){this.view=e,this.startEvent=t,this.style=i,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=ew(e.contentDOM),this.atoms=e.state.facet(xo).map(c=>c(e));let l=e.contentDOM.ownerDocument;l.addEventListener("mousemove",this.move=this.move.bind(this)),l.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(Pe.allowMultipleSelections)&&wE(e,t),this.dragging=SE(e,t)&&Bw(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&vE(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,i=0,r=0,l=0,c=this.view.win.innerWidth,f=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:c}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:l,bottom:f}=this.scrollParents.y.getBoundingClientRect());let h=Um(this.view);e.clientX-h.left<=r+Wc?t=-Pc(r-e.clientX):e.clientX+h.right>=c-Wc&&(t=Pc(e.clientX-c)),e.clientY-h.top<=l+Wc?i=-Pc(l-e.clientY):e.clientY+h.bottom>=f-Wc&&(i=Pc(e.clientY-f)),this.setScrollSpeed(t,i)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,i=Tw(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!i.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:i,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function wE(n,e){let t=n.state.facet(uw);return t.length?t[0](e):ne.mac?e.metaKey:e.ctrlKey}function kE(n,e){let t=n.state.facet(fw);return t.length?t[0](e):ne.mac?!e.altKey:!e.ctrlKey}function SE(n,e){let{main:t}=n.state.selection;if(t.empty)return!1;let i=ao(n.root);if(!i||i.rangeCount==0)return!0;let r=i.getRangeAt(0).getClientRects();for(let l=0;l<r.length;l++){let c=r[l];if(c.left<=e.clientX&&c.right>=e.clientX&&c.top<=e.clientY&&c.bottom>=e.clientY)return!0}return!1}function AE(n,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,i;t!=n.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(i=ht.get(t))&&i.isWidget()&&!i.isHidden&&i.widget.ignoreEvent(e))return!1;return!0}const Fn=Object.create(null),un=Object.create(null),Nw=ne.ie&&ne.ie_version<15||ne.ios&&ne.webkit_version<604;function CE(n){let e=n.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{n.focus(),t.remove(),jw(n,t.value)},50)}function lf(n,e,t){for(let i of n.facet(e))t=i(t,n);return t}function jw(n,e){e=lf(n.state,_m,e);let{state:t}=n,i,r=1,l=t.toText(e),c=l.lines==t.selection.ranges.length;if(im!=null&&t.selection.ranges.every(h=>h.empty)&&im==l.toString()){let h=-1;i=t.changeByRange(p=>{let g=t.doc.lineAt(p.from);if(g.from==h)return{range:p};h=g.from;let y=t.toText((c?l.line(r++).text:e)+t.lineBreak);return{changes:{from:g.from,insert:y},range:Y.cursor(p.from+y.length)}})}else c?i=t.changeByRange(h=>{let p=l.line(r++);return{changes:{from:h.from,to:h.to,insert:p.text},range:Y.cursor(h.from+p.length)}}):i=t.replaceSelection(l);n.dispatch(i,{userEvent:"input.paste",scrollIntoView:!0})}un.scroll=n=>{n.inputState.lastScrollTop=n.scrollDOM.scrollTop,n.inputState.lastScrollLeft=n.scrollDOM.scrollLeft};un.wheel=un.mousewheel=n=>{n.inputState.lastWheelEvent=Date.now()};Fn.keydown=(n,e)=>(n.inputState.setSelectionOrigin("select"),e.keyCode==27&&n.inputState.tabFocusMode!=0&&(n.inputState.tabFocusMode=Date.now()+2e3),!1);un.touchstart=(n,e)=>{let t=n.inputState,i=e.targetTouches[0];t.lastTouchTime=Date.now(),i&&(t.lastTouchX=i.clientX,t.lastTouchY=i.clientY),t.setSelectionOrigin("select.pointer")};un.touchmove=n=>{n.inputState.setSelectionOrigin("select.pointer")};Fn.mousedown=(n,e)=>{if(n.observer.flush(),n.inputState.lastTouchTime>Date.now()-2e3)return!1;let t=null;for(let i of n.state.facet(hw))if(t=i(n,e),t)break;if(!t&&e.button==0&&(t=ME(n,e)),t){let i=!n.hasFocus;n.inputState.startMouseSelection(new xE(n,e,t,i)),i&&n.observer.ignore(()=>{tw(n.contentDOM);let l=n.root.activeElement;l&&!l.contains(n.contentDOM)&&l.blur()});let r=n.inputState.mouseSelection;if(r)return r.start(e),r.dragging===!1}else n.inputState.setSelectionOrigin("select.pointer");return!1};function Zv(n,e,t,i){if(i==1)return Y.cursor(e,t);if(i==2)return iE(n.state,e,t);{let r=n.docView.lineAt(e,t),l=n.state.doc.lineAt(r?r.posAtEnd:e),c=r?r.posAtStart:l.from,f=r?r.posAtEnd:l.to;return f<n.state.doc.length&&f==l.to&&f++,Y.range(c,f)}}const TE=ne.ie&&ne.ie_version<=11;let Jv=null,e1=0,t1=0;function Bw(n){if(!TE)return n.detail;let e=Jv,t=t1;return Jv=n,t1=Date.now(),e1=!e||t>Date.now()-400&&Math.abs(e.clientX-n.clientX)<2&&Math.abs(e.clientY-n.clientY)<2?(e1+1)%3:1}function ME(n,e){let t=n.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),i=Bw(e),r=n.state.selection;return{update(l){l.docChanged&&(t.pos=l.changes.mapPos(t.pos),r=r.map(l.changes))},get(l,c,f){let h=n.posAndSideAtCoords({x:l.clientX,y:l.clientY},!1),p,g=Zv(n,h.pos,h.assoc,i);if(t.pos!=h.pos&&!c){let y=Zv(n,t.pos,t.assoc,i),v=Math.min(y.from,g.from),w=Math.max(y.to,g.to);g=v<g.from?Y.range(v,w,g.assoc):Y.range(w,v,g.assoc)}return c?r.replaceRange(r.main.extend(g.from,g.to,g.assoc)):f&&i==1&&r.ranges.length>1&&(p=EE(r,h.pos))?p:f?r.addRange(g):Y.create([g])}}}function EE(n,e){for(let t=0;t<n.ranges.length;t++){let{from:i,to:r}=n.ranges[t];if(i<=e&&r>=e)return Y.create(n.ranges.slice(0,t).concat(n.ranges.slice(t+1)),n.mainIndex==t?0:n.mainIndex-(n.mainIndex>t?1:0))}return null}Fn.dragstart=(n,e)=>{let{selection:{main:t}}=n.state;if(e.target.draggable){let r=n.docView.tile.nearest(e.target);if(r&&r.isWidget()){let l=r.posAtStart,c=l+r.length;(l>=t.to||c<=t.from)&&(t=Y.range(l,c))}}let{inputState:i}=n;return i.mouseSelection&&(i.mouseSelection.dragging=!0),i.draggedContent=t,e.dataTransfer&&(e.dataTransfer.setData("Text",lf(n.state,Hm,n.state.sliceDoc(t.from,t.to))),e.dataTransfer.effectAllowed="copyMove"),!1};Fn.dragend=n=>(n.inputState.draggedContent=null,!1);function n1(n,e,t,i){if(t=lf(n.state,_m,t),!t)return;let r=n.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:l}=n.inputState,c=i&&l&&kE(n,e)?{from:l.from,to:l.to}:null,f={from:r,insert:t},h=n.state.changes(c?[c,f]:f);n.focus(),n.dispatch({changes:h,selection:{anchor:h.mapPos(r,-1),head:h.mapPos(r,1)},userEvent:c?"move.drop":"input.drop"}),n.inputState.draggedContent=null}Fn.drop=(n,e)=>{if(!e.dataTransfer)return!1;if(n.state.readOnly)return!0;let t=e.dataTransfer.files;if(t&&t.length){let i=Array(t.length),r=0,l=()=>{++r==t.length&&n1(n,e,i.filter(c=>c!=null).join(n.state.lineBreak),!1)};for(let c=0;c<t.length;c++){let f=new FileReader;f.onerror=l,f.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(f.result)||(i[c]=f.result),l()},f.readAsText(t[c])}return!0}else{let i=e.dataTransfer.getData("Text");if(i)return n1(n,e,i,!0),!0}return!1};Fn.paste=(n,e)=>{if(n.state.readOnly)return!0;n.observer.flush();let t=Nw?null:e.clipboardData;return t?(jw(n,t.getData("text/plain")||t.getData("text/uri-list")),!0):(CE(n),!1)};function RE(n,e){let t=n.dom.parentNode;if(!t)return;let i=t.appendChild(document.createElement("textarea"));i.style.cssText="position: fixed; left: -10000px; top: 10px",i.value=e,i.focus(),i.selectionEnd=e.length,i.selectionStart=0,setTimeout(()=>{i.remove(),n.focus()},50)}function OE(n){let e=[],t=[],i=!1;for(let r of n.selection.ranges)r.empty||(e.push(n.sliceDoc(r.from,r.to)),t.push(r));if(!e.length){let r=-1;for(let{from:l}of n.selection.ranges){let c=n.doc.lineAt(l);c.number>r&&(e.push(c.text),t.push({from:c.from,to:Math.min(n.doc.length,c.to+1)})),r=c.number}i=!0}return{text:lf(n,Hm,e.join(n.lineBreak)),ranges:t,linewise:i}}let im=null;Fn.copy=Fn.cut=(n,e)=>{if(!Xl(n.contentDOM,n.observer.selectionRange))return!1;let{text:t,ranges:i,linewise:r}=OE(n.state);if(!t&&!r)return!1;im=r?t:null,e.type=="cut"&&!n.state.readOnly&&n.dispatch({changes:i,scrollIntoView:!0,userEvent:"delete.cut"});let l=Nw?null:e.clipboardData;return l?(l.clearData(),l.setData("text/plain",t),!0):(RE(n,t),!1)};const zw=Bs.define();function Lw(n,e){let t=[];for(let i of n.facet(mw)){let r=i(n,e);r&&t.push(r)}return t.length?n.update({effects:t,annotations:zw.of(!0)}):null}function _w(n){setTimeout(()=>{let e=n.hasFocus;if(e!=n.inputState.notifiedFocused){let t=Lw(n.state,e);t?n.dispatch(t):n.update([])}},10)}un.focus=n=>{n.inputState.lastFocusTime=Date.now(),!n.scrollDOM.scrollTop&&(n.inputState.lastScrollTop||n.inputState.lastScrollLeft)&&(n.scrollDOM.scrollTop=n.inputState.lastScrollTop,n.scrollDOM.scrollLeft=n.inputState.lastScrollLeft),_w(n)};un.blur=n=>{n.observer.clearSelectionRange(),_w(n)};un.compositionstart=un.compositionupdate=n=>{n.observer.editContext||(n.inputState.compositionFirstChange==null&&(n.inputState.compositionFirstChange=!0),n.inputState.composing<0&&(n.inputState.composing=0))};un.compositionend=n=>{n.observer.editContext||(n.inputState.composing=-1,n.inputState.compositionEndedAt=Date.now(),n.inputState.compositionPendingKey=!0,n.inputState.compositionPendingChange=n.observer.pendingRecords().length>0,n.inputState.compositionFirstChange=null,ne.chrome&&ne.android?n.observer.flushSoon():n.inputState.compositionPendingChange?Promise.resolve().then(()=>n.observer.flush()):setTimeout(()=>{n.inputState.composing<0&&n.docView.hasComposition&&n.update([])},50))};un.contextmenu=n=>{n.inputState.lastContextMenu=Date.now()};Fn.beforeinput=(n,e)=>{var t,i;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(n.inputState.insertingText=e.data,n.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&n.observer.editContext){let l=(t=e.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain"),c=e.getTargetRanges();if(l&&c.length){let f=c[0],h=n.posAtDOM(f.startContainer,f.startOffset),p=n.posAtDOM(f.endContainer,f.endOffset);return $m(n,{from:h,to:p,insert:n.state.toText(l)},null),!0}}let r;if(ne.chrome&&ne.android&&(r=Ow.find(l=>l.inputType==e.inputType))&&(n.observer.delayAndroidKey(r.key,r.keyCode),r.key=="Backspace"||r.key=="Delete")){let l=((i=window.visualViewport)===null||i===void 0?void 0:i.height)||0;setTimeout(()=>{var c;(((c=window.visualViewport)===null||c===void 0?void 0:c.height)||0)>l+10&&n.hasFocus&&(n.contentDOM.blur(),n.focus())},100)}return ne.ios&&e.inputType=="deleteContentForward"&&n.observer.flushSoon(),ne.safari&&e.inputType=="insertText"&&n.inputState.composing>=0&&setTimeout(()=>un.compositionend(n,e),20),!1};const i1=new Set;function DE(n){i1.has(n)||(i1.add(n),n.addEventListener("copy",()=>{}),n.addEventListener("cut",()=>{}))}const s1=["pre-wrap","normal","pre-line","break-spaces"];let Ma=!1;function r1(){Ma=!1}class NE{constructor(e){this.lineWrapping=e,this.doc=Ue.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let i=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(i+=Math.max(0,Math.ceil((t-e-i*this.lineLength*.5)/this.lineLength))),this.lineHeight*i}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return s1.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let i=0;i<e.length;i++){let r=e[i];r<0?i++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,i,r,l,c){let f=s1.indexOf(e)>-1,h=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=f;if(this.lineWrapping=f,this.lineHeight=t,this.charWidth=i,this.textHeight=r,this.lineLength=l,h){this.heightSamples={};for(let p=0;p<c.length;p++){let g=c[p];g<0?p++:this.heightSamples[Math.floor(g*10)]=!0}}return h}}class jE{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class Yn{constructor(e,t,i,r,l){this.from=e,this.length=t,this.top=i,this.height=r,this._content=l}get type(){return typeof this._content=="number"?Vt.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof dr?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new Yn(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var nt=(function(n){return n[n.ByPos=0]="ByPos",n[n.ByHeight=1]="ByHeight",n[n.ByPosNoHeight=2]="ByPosNoHeight",n})(nt||(nt={}));const gu=.001;class Jt{constructor(e,t,i=2){this.length=e,this.height=t,this.flags=i}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>gu&&(Ma=!0),this.height=e)}replace(e,t,i){return Jt.of(i)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,i,r){let l=this,c=i.doc;for(let f=r.length-1;f>=0;f--){let{fromA:h,toA:p,fromB:g,toB:y}=r[f],v=l.lineAt(h,nt.ByPosNoHeight,i.setDoc(t),0,0),w=v.to>=p?v:l.lineAt(p,nt.ByPosNoHeight,i,0,0);for(y+=w.to-p,p=w.to;f>0&&v.from<=r[f-1].toA;)h=r[f-1].fromA,g=r[f-1].fromB,f--,h<v.from&&(v=l.lineAt(h,nt.ByPosNoHeight,i,0,0));g+=v.from-h,h=v.from;let k=Gm.build(i.setDoc(c),e,g,y);l=Du(l,l.replace(h,p,k))}return l.updateHeight(i,0)}static empty(){return new vn(0,0,0)}static of(e){if(e.length==1)return e[0];let t=0,i=e.length,r=0,l=0;for(;;)if(t==i)if(r>l*2){let f=e[t-1];f.break?e.splice(--t,1,f.left,null,f.right):e.splice(--t,1,f.left,f.right),i+=1+f.break,r-=f.size}else if(l>r*2){let f=e[i];f.break?e.splice(i,1,f.left,null,f.right):e.splice(i,1,f.left,f.right),i+=2+f.break,l-=f.size}else break;else if(r<l){let f=e[t++];f&&(r+=f.size)}else{let f=e[--i];f&&(l+=f.size)}let c=0;return e[t-1]==null?(c=1,t--):e[t]==null&&(c=1,i++),new zE(Jt.of(e.slice(0,t)),c,Jt.of(e.slice(i)))}}function Du(n,e){return n==e?n:(n.constructor!=e.constructor&&(Ma=!0),e)}Jt.prototype.size=1;const BE=be.replace({});class Hw extends Jt{constructor(e,t,i){super(e,t),this.deco=i,this.spaceAbove=0}mainBlock(e,t){return new Yn(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,i,r){return this.spaceAbove&&e<i+this.spaceAbove?new Yn(r,0,i,this.spaceAbove,BE):this.mainBlock(i,r)}lineAt(e,t,i,r,l){let c=this.mainBlock(r,l);return this.spaceAbove?this.blockAt(0,i,r,l).join(c):c}forEachLine(e,t,i,r,l,c){e<=l+this.length&&t>=l&&c(this.lineAt(0,nt.ByPos,i,r,l))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,i=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}}class vn extends Hw{constructor(e,t,i){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=i}mainBlock(e,t){return new Yn(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(e,t,i){let r=i[0];return i.length==1&&(r instanceof vn||r instanceof _t&&r.flags&4)&&Math.abs(this.length-r.length)<10?(r instanceof _t?r=new vn(r.length,this.height,this.spaceAbove):r.height=this.height,this.outdated||(r.outdated=!1),r):Jt.of(i)}updateHeight(e,t=0,i=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(i||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class _t extends Jt{constructor(e){super(e,0)}heightMetrics(e,t){let i=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,l=r-i+1,c,f=0;if(e.lineWrapping){let h=Math.min(this.height,e.lineHeight*l);c=h/l,this.length>l+1&&(f=(this.height-h)/(this.length-l-1))}else c=this.height/l;return{firstLine:i,lastLine:r,perLine:c,perChar:f}}blockAt(e,t,i,r){let{firstLine:l,lastLine:c,perLine:f,perChar:h}=this.heightMetrics(t,r);if(t.lineWrapping){let p=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-i)/this.height))*this.length)),g=t.doc.lineAt(p),y=f+g.length*h,v=Math.max(i,e-y/2);return new Yn(g.from,g.length,v,y,0)}else{let p=Math.max(0,Math.min(c-l,Math.floor((e-i)/f))),{from:g,length:y}=t.doc.line(l+p);return new Yn(g,y,i+f*p,f,0)}}lineAt(e,t,i,r,l){if(t==nt.ByHeight)return this.blockAt(e,i,r,l);if(t==nt.ByPosNoHeight){let{from:w,to:k}=i.doc.lineAt(e);return new Yn(w,k-w,0,0,0)}let{firstLine:c,perLine:f,perChar:h}=this.heightMetrics(i,l),p=i.doc.lineAt(e),g=f+p.length*h,y=p.number-c,v=r+f*y+h*(p.from-l-y);return new Yn(p.from,p.length,Math.max(r,Math.min(v,r+this.height-g)),g,0)}forEachLine(e,t,i,r,l,c){e=Math.max(e,l),t=Math.min(t,l+this.length);let{firstLine:f,perLine:h,perChar:p}=this.heightMetrics(i,l);for(let g=e,y=r;g<=t;){let v=i.doc.lineAt(g);if(g==e){let k=v.number-f;y+=h*k+p*(e-l-k)}let w=h+p*v.length;c(new Yn(v.from,v.length,y,w,0)),y+=w,g=v.to+1}}replace(e,t,i){let r=this.length-t;if(r>0){let l=i[i.length-1];l instanceof _t?i[i.length-1]=new _t(l.length+r):i.push(null,new _t(r-1))}if(e>0){let l=i[0];l instanceof _t?i[0]=new _t(e+l.length):i.unshift(new _t(e-1),null)}return Jt.of(i)}decomposeLeft(e,t){t.push(new _t(e-1),null)}decomposeRight(e,t){t.push(null,new _t(this.length-e-1))}updateHeight(e,t=0,i=!1,r){let l=t+this.length;if(r&&r.from<=t+this.length&&r.more){let c=[],f=Math.max(t,r.from),h=-1;for(r.from>t&&c.push(new _t(r.from-t-1).updateHeight(e,t));f<=l&&r.more;){let g=e.doc.lineAt(f).length;c.length&&c.push(null);let y=r.heights[r.index++],v=0;y<0&&(v=-y,y=r.heights[r.index++]),h==-1?h=y:Math.abs(y-h)>=gu&&(h=-2);let w=new vn(g,y,v);w.outdated=!1,c.push(w),f+=g+1}f<=l&&c.push(null,new _t(l-f).updateHeight(e,f));let p=Jt.of(c);return(h<0||Math.abs(p.height-this.height)>=gu||Math.abs(h-this.heightMetrics(e,t).perLine)>=gu)&&(Ma=!0),Du(this,p)}else(i||this.outdated)&&(this.setHeight(e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class zE extends Jt{constructor(e,t,i){super(e.length+t+i.length,e.height+i.height,t|(e.outdated||i.outdated?2:0)),this.left=e,this.right=i,this.size=e.size+i.size}get break(){return this.flags&1}blockAt(e,t,i,r){let l=i+this.left.height;return e<l?this.left.blockAt(e,t,i,r):this.right.blockAt(e,t,l,r+this.left.length+this.break)}lineAt(e,t,i,r,l){let c=r+this.left.height,f=l+this.left.length+this.break,h=t==nt.ByHeight?e<c:e<f,p=h?this.left.lineAt(e,t,i,r,l):this.right.lineAt(e,t,i,c,f);if(this.break||(h?p.to<f:p.from>f))return p;let g=t==nt.ByPosNoHeight?nt.ByPosNoHeight:nt.ByPos;return h?p.join(this.right.lineAt(f,g,i,c,f)):this.left.lineAt(f,g,i,r,l).join(p)}forEachLine(e,t,i,r,l,c){let f=r+this.left.height,h=l+this.left.length+this.break;if(this.break)e<h&&this.left.forEachLine(e,t,i,r,l,c),t>=h&&this.right.forEachLine(e,t,i,f,h,c);else{let p=this.lineAt(h,nt.ByPos,i,r,l);e<p.from&&this.left.forEachLine(e,p.from-1,i,r,l,c),p.to>=e&&p.from<=t&&c(p),t>p.to&&this.right.forEachLine(p.to+1,t,i,f,h,c)}}replace(e,t,i){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,i),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,i));let l=[];e>0&&this.decomposeLeft(e,l);let c=l.length;for(let f of i)l.push(f);if(e>0&&a1(l,c-1),t<this.length){let f=l.length;this.decomposeRight(t,l),a1(l,f)}return Jt.of(l)}decomposeLeft(e,t){let i=this.left.length;if(e<=i)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(i++,e>=i&&t.push(null)),e>i&&this.right.decomposeLeft(e-i,t)}decomposeRight(e,t){let i=this.left.length,r=i+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<i&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?Jt.of(this.break?[e,null,t]:[e,t]):(this.left=Du(this.left,e),this.right=Du(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,i=!1,r){let{left:l,right:c}=this,f=t+l.length+this.break,h=null;return r&&r.from<=t+l.length&&r.more?h=l=l.updateHeight(e,t,i,r):l.updateHeight(e,t,i),r&&r.from<=f+c.length&&r.more?h=c=c.updateHeight(e,f,i,r):c.updateHeight(e,f,i),h?this.balanced(l,c):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function a1(n,e){let t,i;n[e]==null&&(t=n[e-1])instanceof _t&&(i=n[e+1])instanceof _t&&n.splice(e-1,3,new _t(t.length+1+i.length))}const LE=5;class Gm{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let i=Math.min(t,this.lineEnd),r=this.nodes[this.nodes.length-1];r instanceof vn?r.length+=i-this.pos:(i>this.pos||!this.isCovered)&&this.nodes.push(new vn(i-this.pos,-1,0)),this.writtenTo=i,t>i&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,i){if(e<t||i.heightRelevant){let r=i.widget?i.widget.estimatedHeight:0,l=i.widget?i.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let c=t-e;i.block?this.addBlock(new Hw(c,r,i)):(c||l||r>=LE)&&this.addLineDeco(r,l,c)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new vn(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let i=new _t(t-e);return this.oracle.doc.lineAt(e).to==t&&(i.flags|=4),i}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof vn)return e;let t=new vn(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,i){let r=this.ensureLine();r.length+=i,r.collapsed+=i,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos=this.pos+i}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof vn)&&!this.isCovered?this.nodes.push(new vn(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let i=e;for(let r of this.nodes)r instanceof vn&&r.updateHeight(this.oracle,i),i+=r?r.length:1;return this.nodes}static build(e,t,i,r){let l=new Gm(i,e);return Me.spans(t,i,r,l,0),l.finish(i)}}function _E(n,e,t){let i=new HE;return Me.compare(n,e,t,i,0),i.changes}class HE{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,i,r){(e<t||i&&i.heightRelevant||r&&r.heightRelevant)&&ba(e,t,this.changes,5)}}function qE(n,e){let t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.defaultView||window,l=Math.max(0,t.left),c=Math.min(r.innerWidth,t.right),f=Math.max(0,t.top),h=Math.min(r.innerHeight,t.bottom);for(let p=n.parentNode;p&&p!=i.body;)if(p.nodeType==1){let g=p,y=window.getComputedStyle(g);if((g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth)&&y.overflow!="visible"){let v=g.getBoundingClientRect();l=Math.max(l,v.left),c=Math.min(c,v.right),f=Math.max(f,v.top),h=Math.min(p==n.parentNode?r.innerHeight:h,v.bottom)}p=y.position=="absolute"||y.position=="fixed"?g.offsetParent:g.parentNode}else if(p.nodeType==11)p=p.host;else break;return{left:l-t.left,right:Math.max(l,c)-t.left,top:f-(t.top+e),bottom:Math.max(f,h)-(t.top+e)}}function VE(n){let e=n.getBoundingClientRect(),t=n.ownerDocument.defaultView||window;return e.left<t.innerWidth&&e.right>0&&e.top<t.innerHeight&&e.bottom>0}function UE(n,e){let t=n.getBoundingClientRect();return{left:0,right:t.right-t.left,top:e,bottom:t.bottom-(t.top+e)}}class Jd{constructor(e,t,i,r){this.from=e,this.to=t,this.size=i,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++){let r=e[i],l=t[i];if(r.from!=l.from||r.to!=l.to||r.size!=l.size)return!1}return!0}draw(e,t){return be.replace({widget:new $E(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class $E extends yo{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class l1{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=o1,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=it.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let i=t.facet(qm).some(r=>typeof r!="function"&&r.class=="cm-lineWrapping");this.heightOracle=new NE(i),this.stateDeco=c1(t),this.heightMap=Jt.empty().applyChanges(this.stateDeco,Ue.empty,this.heightOracle.setDoc(t.doc),[new zn(0,0,0,t.doc.length)]);for(let r=0;r<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());r++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=be.set(this.lineGaps.map(r=>r.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let i=0;i<=1;i++){let r=i?t.head:t.anchor;if(!e.some(({from:l,to:c})=>r>=l&&r<=c)){let{from:l,to:c}=this.lineBlockAt(r);e.push(new Yc(l,c))}}return this.viewports=e.sort((i,r)=>i.from-r.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?o1:new Wm(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Wl(e,this.scaler))})}update(e,t=null){this.state=e.state;let i=this.stateDeco;this.stateDeco=c1(this.state);let r=e.changedRanges,l=zn.extendWithRanges(r,_E(i,this.stateDeco,e?e.changes:Ct.empty(this.state.doc.length))),c=this.heightMap.height,f=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);r1(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),l),(this.heightMap.height!=c||Ma)&&(e.flags|=2),f?(this.scrollAnchorPos=e.changes.mapPos(f.from,-1),this.scrollAnchorHeight=f.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=c);let h=l.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<h.from||t.range.head>h.to)||!this.viewportIsAppropriate(h))&&(h=this.getViewport(0,t));let p=h.from!=this.viewport.from||h.to!=this.viewport.to;this.viewport=h,e.flags|=this.updateForViewport(),(p||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(yw)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,i=window.getComputedStyle(t),r=this.heightOracle,l=i.whiteSpace;this.defaultTextDirection=i.direction=="rtl"?it.RTL:it.LTR;let c=this.heightOracle.mustRefreshForWrapping(l)||this.mustMeasureContent==="refresh",f=t.getBoundingClientRect(),h=c||this.mustMeasureContent||this.contentDOMHeight!=f.height;this.contentDOMHeight=f.height,this.mustMeasureContent=!1;let p=0,g=0;if(f.width&&f.height){let{scaleX:R,scaleY:W}=Jx(t,f);(R>.005&&Math.abs(this.scaleX-R)>.005||W>.005&&Math.abs(this.scaleY-W)>.005)&&(this.scaleX=R,this.scaleY=W,p|=16,c=h=!0)}let y=(parseInt(i.paddingTop)||0)*this.scaleY,v=(parseInt(i.paddingBottom)||0)*this.scaleY;(this.paddingTop!=y||this.paddingBottom!=v)&&(this.paddingTop=y,this.paddingBottom=v,p|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(h=!0),this.editorWidth=e.scrollDOM.clientWidth,p|=16);let w=ew(this.view.contentDOM,!1).y;w!=this.scrollParent&&(this.scrollParent=w,this.scrollAnchorHeight=-1,this.scrollOffset=0);let k=this.getScrollOffset();this.scrollOffset!=k&&(this.scrollAnchorHeight=-1,this.scrollOffset=k),this.scrolledToBottom=nw(this.scrollParent||e.win);let A=(this.printing?UE:qE)(t,this.paddingTop),C=A.top-this.pixelViewport.top,O=A.bottom-this.pixelViewport.bottom;this.pixelViewport=A;let G=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(G!=this.inView&&(this.inView=G,G&&(h=!0)),!this.inView&&!this.scrollTarget&&!VE(e.dom))return 0;let _=f.width;if((this.contentDOMWidth!=_||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=f.width,this.editorHeight=e.scrollDOM.clientHeight,p|=16),h){let R=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(R)&&(c=!0),c||r.lineWrapping&&Math.abs(_-this.contentDOMWidth)>r.charWidth){let{lineHeight:W,charWidth:q,textHeight:F}=e.docView.measureTextSize();c=W>0&&r.refresh(l,W,q,F,Math.max(5,_/q),R),c&&(e.docView.minWidth=0,p|=16)}C>0&&O>0?g=Math.max(C,O):C<0&&O<0&&(g=Math.min(C,O)),r1();for(let W of this.viewports){let q=W.from==this.viewport.from?R:e.docView.measureVisibleLineHeights(W);this.heightMap=(c?Jt.empty().applyChanges(this.stateDeco,Ue.empty,this.heightOracle,[new zn(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,c,new jE(W.from,q))}Ma&&(p|=2)}let B=!this.viewportIsAppropriate(this.viewport,g)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return B&&(p&2&&(p|=this.updateScaler()),this.viewport=this.getViewport(g,this.scrollTarget),p|=this.updateForViewport()),(p&2||B)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(c?[]:this.lineGaps,e)),p|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),p}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let i=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,l=this.heightOracle,{visibleTop:c,visibleBottom:f}=this,h=new Yc(r.lineAt(c-i*1e3,nt.ByHeight,l,0,0).from,r.lineAt(f+(1-i)*1e3,nt.ByHeight,l,0,0).to);if(t){let{head:p}=t.range;if(p<h.from||p>h.to){let g=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),y=r.lineAt(p,nt.ByPos,l,0,0),v;t.y=="center"?v=(y.top+y.bottom)/2-g/2:t.y=="start"||t.y=="nearest"&&p<h.from?v=y.top:v=y.bottom-g,h=new Yc(r.lineAt(v-1e3/2,nt.ByHeight,l,0,0).from,r.lineAt(v+g+1e3/2,nt.ByHeight,l,0,0).to)}}return h}mapViewport(e,t){let i=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new Yc(this.heightMap.lineAt(i,nt.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,nt.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},i=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,nt.ByPos,this.heightOracle,0,0),{bottom:l}=this.heightMap.lineAt(t,nt.ByPos,this.heightOracle,0,0),{visibleTop:c,visibleBottom:f}=this;return(e==0||r<=c-Math.max(10,Math.min(-i,250)))&&(t==this.state.doc.length||l>=f+Math.max(10,Math.min(i,250)))&&r>c-2*1e3&&l<f+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let i=[];for(let r of e)t.touchesRange(r.from,r.to)||i.push(new Jd(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return i}ensureLineGaps(e,t){let i=this.heightOracle.lineWrapping,r=i?1e4:2e3,l=r>>1,c=r<<1;if(this.defaultTextDirection!=it.LTR&&!i)return[];let f=[],h=(g,y,v,w)=>{if(y-g<l)return;let k=this.state.selection.main,A=[k.from];k.empty||A.push(k.to);for(let O of A)if(O>g&&O<y){h(g,O-10,v,w),h(O+10,y,v,w);return}let C=WE(e,O=>O.from>=v.from&&O.to<=v.to&&Math.abs(O.from-g)<l&&Math.abs(O.to-y)<l&&!A.some(G=>O.from<G&&O.to>G));if(!C){if(y<v.to&&t&&i&&t.visibleRanges.some(_=>_.from<=y&&_.to>=y)){let _=t.moveToLineBoundary(Y.cursor(y),!1,!0).head;_>g&&(y=_)}let O=this.gapSize(v,g,y,w),G=i||O<2e6?O:2e6;C=new Jd(g,y,O,G)}f.push(C)},p=g=>{if(g.length<c||g.type!=Vt.Text)return;let y=GE(g.from,g.to,this.stateDeco);if(y.total<c)return;let v=this.scrollTarget?this.scrollTarget.range.head:null,w,k;if(i){let A=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,C,O;if(v!=null){let G=Ic(y,v),_=((this.visibleBottom-this.visibleTop)/2+A)/g.height;C=G-_,O=G+_}else C=(this.visibleTop-g.top-A)/g.height,O=(this.visibleBottom-g.top+A)/g.height;w=Kc(y,C),k=Kc(y,O)}else{let A=y.total*this.heightOracle.charWidth,C=r*this.heightOracle.charWidth,O=0;if(A>2e6)for(let W of e)W.from>=g.from&&W.from<g.to&&W.size!=W.displaySize&&W.from*this.heightOracle.charWidth+O<this.pixelViewport.left&&(O=W.size-W.displaySize);let G=this.pixelViewport.left+O,_=this.pixelViewport.right+O,B,R;if(v!=null){let W=Ic(y,v),q=((_-G)/2+C)/A;B=W-q,R=W+q}else B=(G-C)/A,R=(_+C)/A;w=Kc(y,B),k=Kc(y,R)}w>g.from&&h(g.from,w,g,y),k<g.to&&h(k,g.to,g,y)};for(let g of this.viewportLines)Array.isArray(g.type)?g.type.forEach(p):p(g);return f}gapSize(e,t,i,r){let l=Ic(r,i)-Ic(r,t);return this.heightOracle.lineWrapping?e.height*l:r.total*this.heightOracle.charWidth*l}updateLineGaps(e){Jd.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=be.set(e.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let i=[];Me.spans(t,this.viewport.from,this.viewport.to,{span(l,c){i.push({from:l,to:c})},point(){}},20);let r=0;if(i.length!=this.visibleRanges.length)r=12;else for(let l=0;l<i.length&&!(r&8);l++){let c=this.visibleRanges[l],f=i[l];(c.from!=f.from||c.to!=f.to)&&(r|=4,e&&e.mapPos(c.from,-1)==f.from&&e.mapPos(c.to,1)==f.to||(r|=8))}return this.visibleRanges=i,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Wl(this.heightMap.lineAt(e,nt.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Wl(this.heightMap.lineAt(this.scaler.fromDOM(e),nt.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Wl(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Yc{constructor(e,t){this.from=e,this.to=t}}function GE(n,e,t){let i=[],r=n,l=0;return Me.spans(t,n,e,{span(){},point(c,f){c>r&&(i.push({from:r,to:c}),l+=c-r),r=f}},20),r<e&&(i.push({from:r,to:e}),l+=e-r),{total:l,ranges:i}}function Kc({total:n,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let i=Math.floor(n*t);for(let r=0;;r++){let{from:l,to:c}=e[r],f=c-l;if(i<=f)return l+i;i-=f}}function Ic(n,e){let t=0;for(let{from:i,to:r}of n.ranges){if(e<=r){t+=e-i;break}t+=r-i}return t/n.total}function WE(n,e){for(let t of n)if(e(t))return t}const o1={toDOM(n){return n},fromDOM(n){return n},scale:1,eq(n){return n==this}};function c1(n){let e=n.facet(sf).filter(i=>typeof i!="function"),t=n.facet(Vm).filter(i=>typeof i!="function");return t.length&&e.push(Me.join(t)),e}class Wm{constructor(e,t,i){let r=0,l=0,c=0;this.viewports=i.map(({from:f,to:h})=>{let p=t.lineAt(f,nt.ByPos,e,0,0).top,g=t.lineAt(h,nt.ByPos,e,0,0).bottom;return r+=g-p,{from:f,to:h,top:p,bottom:g,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let f of this.viewports)f.domTop=c+(f.top-l)*this.scale,c=f.domBottom=f.domTop+(f.bottom-f.top),l=f.bottom}toDOM(e){for(let t=0,i=0,r=0;;t++){let l=t<this.viewports.length?this.viewports[t]:null;if(!l||e<l.top)return r+(e-i)*this.scale;if(e<=l.bottom)return l.domTop+(e-l.top);i=l.bottom,r=l.domBottom}}fromDOM(e){for(let t=0,i=0,r=0;;t++){let l=t<this.viewports.length?this.viewports[t]:null;if(!l||e<l.domTop)return i+(e-r)/this.scale;if(e<=l.domBottom)return l.top+(e-l.domTop);i=l.bottom,r=l.domBottom}}eq(e){return e instanceof Wm?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,i)=>t.from==e.viewports[i].from&&t.to==e.viewports[i].to):!1}}function Wl(n,e){if(e.scale==1)return n;let t=e.toDOM(n.top),i=e.toDOM(n.bottom);return new Yn(n.from,n.length,t,i-t,Array.isArray(n._content)?n._content.map(r=>Wl(r,e)):n._content)}const Fc=re.define({combine:n=>n.join(" ")}),sm=re.define({combine:n=>n.indexOf(!0)>-1}),rm=Aa.newName(),qw=Aa.newName(),Vw=Aa.newName(),Uw={"&light":"."+qw,"&dark":"."+Vw};function am(n,e,t){return new Aa(e,{finish(i){return/&/.test(i)?i.replace(/&\w*/,r=>{if(r=="&")return n;if(!t||!t[r])throw new RangeError(`Unsupported selector: ${r}`);return t[r]}):n+" "+i}})}const PE=am("."+rm,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Uw),YE={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ep=ne.ie&&ne.ie_version<=11;class KE{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new SM,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let i of t)this.queue.push(i);(ne.ie&&ne.ie_version<=11||ne.ios&&e.composing)&&t.some(i=>i.type=="childList"&&i.removedNodes.length||i.type=="characterData"&&i.oldValue.length>i.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&ne.android&&e.constructor.EDIT_CONTEXT!==!1&&!(ne.chrome&&ne.chrome_version<126)&&(this.editContext=new FE(e),e.state.facet(Li)&&(e.contentDOM.editContext=this.editContext.editContext)),ep&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var t;((t=this.view.docView)===null||t===void 0?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,i)=>t!=e[i]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:i}=this,r=this.selectionRange;if(i.state.facet(Li)?i.root.activeElement!=this.dom:!Xl(this.dom,r))return;let l=r.anchorNode&&i.docView.tile.nearest(r.anchorNode);if(l&&l.isWidget()&&l.widget.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(ne.ie&&ne.ie_version<=11||ne.android&&ne.chrome)&&!i.state.selection.main.empty&&r.focusNode&&Ql(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=ao(e.root);if(!t)return!1;let i=ne.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&IE(this.view,t)||t;if(!i||this.selectionRange.eq(i))return!1;let r=Xl(this.dom,i);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&CM(this.dom,i)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(i),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let i=this.dom;i;)if(i.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==i?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(i),i=i.assignedSlot||i.parentNode;else if(i.nodeType==11)i=i.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let i of this.scrollTargets)i.removeEventListener("scroll",this.onScroll);for(let i of this.scrollTargets=t)i.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,YE),ep&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ep&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var i;if(!this.delayedAndroidKey){let r=()=>{let l=this.delayedAndroidKey;l&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=l.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&l.force&&va(this.dom,l.key,l.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(r)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(!((i=this.delayedAndroidKey)===null||i===void 0)&&i.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,i=-1,r=!1;for(let l of e){let c=this.readMutation(l);c&&(c.typeOver&&(r=!0),t==-1?{from:t,to:i}=c:(t=Math.min(c.from,t),i=Math.max(c.to,i)))}return{from:t,to:i,typeOver:r}}readChange(){let{from:e,to:t,typeOver:i}=this.processRecords(),r=this.selectionChanged&&Xl(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let l=new hE(this.view,e,t,i);return this.view.docView.domChanged={newSel:l.newSel?l.newSel.main:null},l}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let i=this.view.state,r=Ew(this.view,t);return this.view.state==i&&(t.domChanged||t.newSel&&!Ou(this.view.state.selection,t.newSel.main))&&this.view.update([]),r}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type=="attributes"),e.type=="childList"){let i=u1(t,e.previousSibling||e.target.previousSibling,-1),r=u1(t,e.nextSibling||e.target.nextSibling,1);return{from:i?t.posAfter(i):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Li)!=e.state.facet(Li)&&(e.view.contentDOM.editContext=e.state.facet(Li)?this.editContext.editContext:null))}destroy(){var e,t,i;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(t=this.gapIntersection)===null||t===void 0||t.disconnect(),(i=this.resizeScroll)===null||i===void 0||i.disconnect();for(let r of this.scrollTargets)r.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function u1(n,e,t){for(;e;){let i=ht.get(e);if(i&&i.parent==n)return i;let r=e.parentNode;e=r!=n.dom?r:t>0?e.nextSibling:e.previousSibling}return null}function f1(n,e){let t=e.startContainer,i=e.startOffset,r=e.endContainer,l=e.endOffset,c=n.docView.domAtPos(n.state.selection.main.anchor,1);return Ql(c.node,c.offset,r,l)&&([t,i,r,l]=[r,l,t,i]),{anchorNode:t,anchorOffset:i,focusNode:r,focusOffset:l}}function IE(n,e){if(e.getComposedRanges){let r=e.getComposedRanges(n.root)[0];if(r)return f1(n,r)}let t=null;function i(r){r.preventDefault(),r.stopImmediatePropagation(),t=r.getTargetRanges()[0]}return n.contentDOM.addEventListener("beforeinput",i,!0),n.dom.ownerDocument.execCommand("indent"),n.contentDOM.removeEventListener("beforeinput",i,!0),t?f1(n,t):null}class FE{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=i=>{let r=e.state.selection.main,{anchor:l,head:c}=r,f=this.toEditorPos(i.updateRangeStart),h=this.toEditorPos(i.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:i.updateRangeStart,editorBase:f,drifted:!1});let p=h-f>i.text.length;f==this.from&&l<this.from?f=l:h==this.to&&l>this.to&&(h=l);let g=Rw(e.state.sliceDoc(f,h),i.text,(p?r.from:r.to)-f,p?"end":null);if(!g){let v=Y.single(this.toEditorPos(i.selectionStart),this.toEditorPos(i.selectionEnd));Ou(v,r)||e.dispatch({selection:v,userEvent:"select"});return}let y={from:g.from+f,to:g.toA+f,insert:Ue.of(i.text.slice(g.from,g.toB).split(`
`))};if((ne.mac||ne.android)&&y.from==c-1&&/^\. ?$/.test(i.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(y={from:f,to:h,insert:Ue.of([i.text.replace("."," ")])}),this.pendingContextChange=y,!e.state.readOnly){let v=this.to-this.from+(y.to-y.from+y.insert.length);$m(e,y,Y.single(this.toEditorPos(i.selectionStart,v),this.toEditorPos(i.selectionEnd,v)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),y.from<y.to&&!y.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,i.updateRangeStart-1),Math.min(t.text.length,i.updateRangeStart+1)))&&this.handlers.compositionend(i)},this.handlers.characterboundsupdate=i=>{let r=[],l=null;for(let c=this.toEditorPos(i.rangeStart),f=this.toEditorPos(i.rangeEnd);c<f;c++){let h=e.coordsForChar(c);l=h&&new DOMRect(h.left,h.top,h.right-h.left,h.bottom-h.top)||l||new DOMRect,r.push(l)}t.updateCharacterBounds(i.rangeStart,r)},this.handlers.textformatupdate=i=>{let r=[];for(let l of i.getTextFormats()){let c=l.underlineStyle,f=l.underlineThickness;if(!/none/i.test(c)&&!/none/i.test(f)){let h=this.toEditorPos(l.rangeStart),p=this.toEditorPos(l.rangeEnd);if(h<p){let g=`text-decoration: underline ${/^[a-z]/.test(c)?c+" ":c=="Dashed"?"dashed ":c=="Squiggle"?"wavy ":""}${/thin/i.test(f)?1:2}px`;r.push(be.mark({attributes:{style:g}}).range(h,p))}}}e.dispatch({effects:vw.of(be.set(r))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:i}=this.composing;this.composing=null,i&&this.reset(e.state)}};for(let i in this.handlers)t.addEventListener(i,this.handlers[i]);this.measureReq={read:i=>{this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());let r=ao(i.root);r&&r.rangeCount&&this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,i=!1,r=this.pendingContextChange;return e.changes.iterChanges((l,c,f,h,p)=>{if(i)return;let g=p.length-(c-l);if(r&&c>=r.to)if(r.from==l&&r.to==c&&r.insert.eq(p)){r=this.pendingContextChange=null,t+=g,this.to+=g;return}else r=null,this.revertPending(e.state);if(l+=t,c+=t,c<=this.from)this.from+=g,this.to+=g;else if(l<this.to){if(l<this.from||c>this.to||this.to-this.from+p.length>3e4){i=!0;return}this.editContext.updateText(this.toContextPos(l),this.toContextPos(c),p.toString()),this.to+=g}t+=g}),r&&!i&&this.revertPending(e.state),!i}update(e){let t=this.pendingContextChange,i=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(i.from,i.to)&&e.transactions.some(r=>!r.isUserEvent("input.type")&&r.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,i=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=i||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(i,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let i=this.composing;return i&&i.drifted?i.editorBase+(e-i.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class se{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var t;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:i}=e;this.dispatchTransactions=e.dispatchTransactions||i&&(r=>r.forEach(l=>i(l,this)))||(r=>this.update(r)),this.dispatch=this.dispatch.bind(this),this._root=e.root||AM(e.parent)||document,this.viewState=new l1(this,e.state||Pe.create(e)),e.scrollTo&&e.scrollTo.is(Gc)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(pa).map(r=>new Id(r));for(let r of this.plugins)r.update(this);this.observer=new KE(this),this.inputState=new gE(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Iv(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((t=document.fonts)===null||t===void 0)&&t.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof Tt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,i=!1,r,l=this.state;for(let v of e){if(v.startState!=l)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");l=v.state}if(this.destroyed){this.viewState.state=l;return}let c=this.hasFocus,f=0,h=null;e.some(v=>v.annotation(zw))?(this.inputState.notifiedFocused=c,f=1):c!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=c,h=Lw(l,c),h||(f=1));let p=this.observer.delayedAndroidKey,g=null;if(p?(this.observer.clearDelayedAndroidKey(),g=this.observer.readChange(),(g&&!this.state.doc.eq(l.doc)||!this.state.selection.eq(l.selection))&&(g=null)):this.observer.clear(),l.facet(Pe.phrases)!=this.state.facet(Pe.phrases))return this.setState(l);r=Mu.create(this,l,e),r.flags|=f;let y=this.viewState.scrollTarget;try{this.updateState=2;for(let v of e){if(y&&(y=y.map(v.changes)),v.scrollIntoView){let{main:w}=v.state.selection,{x:k,y:A}=this.state.facet(se.cursorScrollMargin);y=new xa(w.empty?w:Y.cursor(w.head,w.head>w.anchor?-1:1),"nearest","nearest",A,k)}for(let w of v.effects)w.is(Gc)&&(y=w.value.clip(this.state))}this.viewState.update(r,y),this.bidiCache=Nu.update(this.bidiCache,r.changes),r.empty||(this.updatePlugins(r),this.inputState.update(r)),t=this.docView.update(r),this.state.facet(Gl)!=this.styleModules&&this.mountStyles(),i=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(t,e.some(v=>v.isUserEvent("select.pointer")))}finally{this.updateState=0}if(r.startState.facet(Fc)!=r.state.facet(Fc)&&(this.viewState.mustMeasureContent=!0),(t||i||y||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),t&&this.docViewUpdate(),!r.empty)for(let v of this.state.facet(Jp))try{v(r)}catch(w){In(this.state,w,"update listener")}(h||g)&&Promise.resolve().then(()=>{h&&this.state==h.startState&&this.dispatch(h),g&&!Ew(this,g)&&p.force&&va(this.contentDOM,p.key,p.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let i of this.plugins)i.destroy(this);this.viewState=new l1(this,e),this.plugins=e.facet(pa).map(i=>new Id(i)),this.pluginMap.clear();for(let i of this.plugins)i.update(this);this.docView.destroy(),this.docView=new Iv(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(pa),i=e.state.facet(pa);if(t!=i){let r=[];for(let l of i){let c=t.indexOf(l);if(c<0)r.push(new Id(l));else{let f=this.plugins[c];f.mustUpdate=e,r.push(f)}}for(let l of this.plugins)l.mustUpdate!=e&&l.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let r of this.plugins)r.mustUpdate=e;for(let r=0;r<this.plugins.length;r++)this.plugins[r].update(this);t!=i&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(i){In(this.state,i,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,i=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:l,scrollAnchorHeight:c}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(c=-1),this.viewState.scrollAnchorHeight=-1;try{for(let f=0;;f++){if(c<0)if(nw(i||this.win))l=-1,c=this.viewState.heightMap.height;else{let w=this.viewState.scrollAnchorAt(r);l=w.from,c=w.top}this.updateState=1;let h=this.viewState.measure();if(!h&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(f>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let p=[];h&4||([this.measureRequests,p]=[p,this.measureRequests]);let g=p.map(w=>{try{return w.read(this)}catch(k){return In(this.state,k),h1}}),y=Mu.create(this,this.state,[]),v=!1;y.flags|=h,t?t.flags|=h:t=y,this.updateState=2,y.empty||(this.updatePlugins(y),this.inputState.update(y),this.updateAttrs(),v=this.docView.update(y),v&&this.docViewUpdate());for(let w=0;w<p.length;w++)if(g[w]!=h1)try{let k=p[w];k.write&&k.write(g[w],this)}catch(k){In(this.state,k)}if(v&&this.docView.updateSelection(!0),!y.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,c=-1;continue}else{let k=((l<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(l).top)-c)/this.scaleY;if((k>1||k<-1)&&(i==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r=r+k,i?i.scrollTop+=k:this.win.scrollBy(0,k),c=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let f of this.state.facet(Jp))f(t)}get themeClasses(){return rm+" "+(this.state.facet(sm)?Vw:qw)+" "+this.state.facet(Fc)}updateAttrs(){let e=d1(this,xw,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Li)?"true":"false",class:"cm-content",style:`${ne.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),d1(this,qm,t);let i=this.observer.ignore(()=>{let r=$v(this.contentDOM,this.contentAttrs,t),l=$v(this.dom,this.editorAttrs,e);return r||l});return this.editorAttrs=e,this.contentAttrs=t,i}showAnnouncements(e){let t=!0;for(let i of e)for(let r of i.effects)if(r.is(se.announce)){t&&(this.announceDOM.textContent=""),t=!1;let l=this.announceDOM.appendChild(document.createElement("div"));l.textContent=r.value}}mountStyles(){this.styleModules=this.state.facet(Gl);let e=this.state.facet(se.cspNonce);Aa.mount(this.root,this.styleModules.concat(PE).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(i=>i.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,i){return Zd(this,e,Fv(this,e,t,i))}moveByGroup(e,t){return Zd(this,e,Fv(this,e,t,i=>aE(this,e.head,i)))}visualLineSide(e,t){let i=this.bidiSpans(e),r=this.textDirectionAt(e.from),l=i[t?i.length-1:0];return Y.cursor(l.side(t,r)+e.from,l.forward(!t,r)?1:-1)}moveToLineBoundary(e,t,i=!0){return rE(this,e,t,i)}moveVertically(e,t,i){return Zd(this,e,lE(this,e,t,i))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let i=nm(this,e,t);return i&&i.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),nm(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let i=this.docView.coordsAt(e,t);if(!i||i.left==i.right)return i;let r=this.state.doc.lineAt(e),l=this.bidiSpans(r),c=l[fi.find(l,e-r.from,-1,t)];return Tu(i,c.dir==it.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(gw)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>XE)return ow(e.length);let t=this.textDirectionAt(e.from),i;for(let l of this.bidiCache)if(l.from==e.from&&l.dir==t&&(l.fresh||lw(l.isolates,i=Pv(this,e))))return l.order;i||(i=Pv(this,e));let r=NM(e.text,t,i);return this.bidiCache.push(new Nu(e.from,e.to,t,i,!0,r)),r}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||ne.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{tw(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){var i,r,l,c;return Gc.of(new xa(typeof e=="number"?Y.cursor(e):e,(i=t.y)!==null&&i!==void 0?i:"nearest",(r=t.x)!==null&&r!==void 0?r:"nearest",(l=t.yMargin)!==null&&l!==void 0?l:5,(c=t.xMargin)!==null&&c!==void 0?c:5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,i=this.viewState.scrollAnchorAt(e);return Gc.of(new xa(Y.cursor(i.from),"start","start",i.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Gt.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Gt.define(()=>({}),{eventObservers:e})}static theme(e,t){let i=Aa.newName(),r=[Fc.of(i),Gl.of(am(`.${i}`,e))];return t&&t.dark&&r.push(sm.of(!0)),r}static baseTheme(e){return ef.lowest(Gl.of(am("."+rm,e,Uw)))}static findFromDOM(e){var t;let i=e.querySelector(".cm-content"),r=i&&ht.get(i)||ht.get(e);return((t=r?.root)===null||t===void 0?void 0:t.view)||null}}se.styleModule=Gl;se.inputHandler=pw;se.clipboardInputFilter=_m;se.clipboardOutputFilter=Hm;se.scrollHandler=bw;se.focusChangeEffect=mw;se.perLineTextDirection=gw;se.exceptionSink=dw;se.updateListener=Jp;se.editable=Li;se.mouseSelectionStyle=hw;se.dragMovesSelection=fw;se.clickAddsSelectionRange=uw;se.decorations=sf;se.blockWrappers=ww;se.outerDecorations=Vm;se.atomicRanges=xo;se.bidiIsolatedRanges=kw;se.cursorScrollMargin=re.define({combine:n=>{let e=5,t=5;for(let i of n)typeof i=="number"?e=t=i:{x:e,y:t}=i;return{x:e,y:t}}});se.scrollMargins=Sw;se.darkTheme=sm;se.cspNonce=re.define({combine:n=>n.length?n[0]:""});se.contentAttributes=qm;se.editorAttributes=xw;se.lineWrapping=se.contentAttributes.of({class:"cm-lineWrapping"});se.announce=Ee.define();const XE=4096,h1={};class Nu{constructor(e,t,i,r,l,c){this.from=e,this.to=t,this.dir=i,this.isolates=r,this.fresh=l,this.order=c}static update(e,t){if(t.empty&&!e.some(l=>l.fresh))return e;let i=[],r=e.length?e[e.length-1].dir:it.LTR;for(let l=Math.max(0,e.length-10);l<e.length;l++){let c=e[l];c.dir==r&&!t.touchesRange(c.from,c.to)&&i.push(new Nu(t.mapPos(c.from,1),t.mapPos(c.to,-1),c.dir,c.isolates,!1,c.order))}return i}}function d1(n,e,t){for(let i=n.state.facet(e),r=i.length-1;r>=0;r--){let l=i[r],c=typeof l=="function"?l(n):l;c&&Bm(c,t)}return t}const QE=ne.mac?"mac":ne.windows?"win":ne.linux?"linux":"key";function ZE(n,e){const t=n.split(/-(?!$)/);let i=t[t.length-1];i=="Space"&&(i=" ");let r,l,c,f;for(let h=0;h<t.length-1;++h){const p=t[h];if(/^(cmd|meta|m)$/i.test(p))f=!0;else if(/^a(lt)?$/i.test(p))r=!0;else if(/^(c|ctrl|control)$/i.test(p))l=!0;else if(/^s(hift)?$/i.test(p))c=!0;else if(/^mod$/i.test(p))e=="mac"?f=!0:l=!0;else throw new Error("Unrecognized modifier name: "+p)}return r&&(i="Alt-"+i),l&&(i="Ctrl-"+i),f&&(i="Meta-"+i),c&&(i="Shift-"+i),i}function Xc(n,e,t){return e.altKey&&(n="Alt-"+n),e.ctrlKey&&(n="Ctrl-"+n),e.metaKey&&(n="Meta-"+n),t!==!1&&e.shiftKey&&(n="Shift-"+n),n}const JE=ef.default(se.domEventHandlers({keydown(n,e){return Ww(Gw(e.state),n,e,"editor")}})),$w=re.define({enables:JE}),p1=new WeakMap;function Gw(n){let e=n.facet($w),t=p1.get(e);return t||p1.set(e,t=nR(e.reduce((i,r)=>i.concat(r),[]))),t}function eR(n,e,t){return Ww(Gw(n.state),e,n,t)}let vs=null;const tR=4e3;function nR(n,e=QE){let t=Object.create(null),i=Object.create(null),r=(c,f)=>{let h=i[c];if(h==null)i[c]=f;else if(h!=f)throw new Error("Key binding "+c+" is used both as a regular binding and as a multi-stroke prefix")},l=(c,f,h,p,g)=>{var y,v;let w=t[c]||(t[c]=Object.create(null)),k=f.split(/ (?!$)/).map(O=>ZE(O,e));for(let O=1;O<k.length;O++){let G=k.slice(0,O).join(" ");r(G,!0),w[G]||(w[G]={preventDefault:!0,stopPropagation:!1,run:[_=>{let B=vs={view:_,prefix:G,scope:c};return setTimeout(()=>{vs==B&&(vs=null)},tR),!0}]})}let A=k.join(" ");r(A,!1);let C=w[A]||(w[A]={preventDefault:!1,stopPropagation:!1,run:((v=(y=w._any)===null||y===void 0?void 0:y.run)===null||v===void 0?void 0:v.slice())||[]});h&&C.run.push(h),p&&(C.preventDefault=!0),g&&(C.stopPropagation=!0)};for(let c of n){let f=c.scope?c.scope.split(" "):["editor"];if(c.any)for(let p of f){let g=t[p]||(t[p]=Object.create(null));g._any||(g._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:y}=c;for(let v in g)g[v].run.push(w=>y(w,lm))}let h=c[e]||c.key;if(h)for(let p of f)l(p,h,c.run,c.preventDefault,c.stopPropagation),c.shift&&l(p,"Shift-"+h,c.shift,c.preventDefault,c.stopPropagation)}return t}let lm=null;function Ww(n,e,t,i){lm=e;let r=yM(e),l=yr(r,0),c=mo(l)==r.length&&r!=" ",f="",h=!1,p=!1,g=!1;vs&&vs.view==t&&vs.scope==i&&(f=vs.prefix+" ",Dw.indexOf(e.keyCode)<0&&(p=!0,vs=null));let y=new Set,v=C=>{if(C){for(let O of C.run)if(!y.has(O)&&(y.add(O),O(t)))return C.stopPropagation&&(g=!0),!0;C.preventDefault&&(C.stopPropagation&&(g=!0),p=!0)}return!1},w=n[i],k,A;return w&&(v(w[f+Xc(r,e,!c)])?h=!0:c&&(e.altKey||e.metaKey||e.ctrlKey)&&!(ne.windows&&e.ctrlKey&&e.altKey)&&!(ne.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(k=Rs[e.keyCode])&&k!=r?(v(w[f+Xc(k,e,!0)])||e.shiftKey&&(A=so[e.keyCode])!=r&&A!=k&&v(w[f+Xc(A,e,!1)]))&&(h=!0):c&&e.shiftKey&&v(w[f+Xc(r,e,!0)])&&(h=!0),!h&&v(w._any)&&(h=!0)),p&&(h=!0),h&&g&&e.stopPropagation(),lm=null,h}class ur{constructor(e,t,i,r,l){this.className=e,this.left=t,this.top=i,this.width=r,this.height=l}draw(){let e=document.createElement("div");return e.className=this.className,this.adjust(e),e}update(e,t){return t.className!=this.className?!1:(this.adjust(e),!0)}adjust(e){e.style.left=this.left+"px",e.style.top=this.top+"px",this.width!=null&&(e.style.width=this.width+"px"),e.style.height=this.height+"px"}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(e,t,i){if(i.empty){let r=e.coordsAtPos(i.head,i.assoc||1);if(!r)return[];let l=Pw(e);return[new ur(t,r.left-l.left,r.top-l.top,null,r.bottom-r.top)]}else return iR(e,t,i)}}function Pw(n){let e=n.scrollDOM.getBoundingClientRect();return{left:(n.textDirection==it.LTR?e.left:e.right-n.scrollDOM.clientWidth*n.scaleX)-n.scrollDOM.scrollLeft*n.scaleX,top:e.top-n.scrollDOM.scrollTop*n.scaleY}}function m1(n,e,t,i){let r=n.coordsAtPos(e,t*2);if(!r)return i;let l=n.dom.getBoundingClientRect(),c=(r.top+r.bottom)/2,f=n.posAtCoords({x:l.left+1,y:c}),h=n.posAtCoords({x:l.right-1,y:c});return f==null||h==null?i:{from:Math.max(i.from,Math.min(f,h)),to:Math.min(i.to,Math.max(f,h))}}function iR(n,e,t){if(t.to<=n.viewport.from||t.from>=n.viewport.to)return[];let i=Math.max(t.from,n.viewport.from),r=Math.min(t.to,n.viewport.to),l=n.textDirection==it.LTR,c=n.contentDOM,f=c.getBoundingClientRect(),h=Pw(n),p=c.querySelector(".cm-line"),g=p&&window.getComputedStyle(p),y=f.left+(g?parseInt(g.paddingLeft)+Math.min(0,parseInt(g.textIndent)):0),v=f.right-(g?parseInt(g.paddingRight):0),w=tm(n,i,1),k=tm(n,r,-1),A=w.type==Vt.Text?w:null,C=k.type==Vt.Text?k:null;if(A&&(n.lineWrapping||w.widgetLineBreaks)&&(A=m1(n,i,1,A)),C&&(n.lineWrapping||k.widgetLineBreaks)&&(C=m1(n,r,-1,C)),A&&C&&A.from==C.from&&A.to==C.to)return G(_(t.from,t.to,A));{let R=A?_(t.from,null,A):B(w,!1),W=C?_(null,t.to,C):B(k,!0),q=[];return(A||w).to<(C||k).from-(A&&C?1:0)||w.widgetLineBreaks>1&&R.bottom+n.defaultLineHeight/2<W.top?q.push(O(y,R.bottom,v,W.top)):R.bottom<W.top&&n.elementAtHeight((R.bottom+W.top)/2).type==Vt.Text&&(R.bottom=W.top=(R.bottom+W.top)/2),G(R).concat(q).concat(G(W))}function O(R,W,q,F){return new ur(e,R-h.left,W-h.top,Math.max(0,q-R),F-W)}function G({top:R,bottom:W,horizontal:q}){let F=[];for(let ie=0;ie<q.length;ie+=2)F.push(O(q[ie],R,q[ie+1],W));return F}function _(R,W,q){let F=1e9,ie=-1e9,he=[];function fe(ye,xe,V,Q,Z){let ae=n.coordsAtPos(ye,ye==q.to?-2:2),ce=n.coordsAtPos(V,V==q.from?2:-2);!ae||!ce||(F=Math.min(ae.top,ce.top,F),ie=Math.max(ae.bottom,ce.bottom,ie),Z==it.LTR?he.push(l&&xe?y:ae.left,l&&Q?v:ce.right):he.push(!l&&Q?y:ce.left,!l&&xe?v:ae.right))}let te=R??q.from,ve=W??q.to;for(let ye of n.visibleRanges)if(ye.to>te&&ye.from<ve)for(let xe=Math.max(ye.from,te),V=Math.min(ye.to,ve);;){let Q=n.state.doc.lineAt(xe);for(let Z of n.bidiSpans(Q)){let ae=Z.from+Q.from,ce=Z.to+Q.from;if(ae>=V)break;ce>xe&&fe(Math.max(ae,xe),R==null&&ae<=te,Math.min(ce,V),W==null&&ce>=ve,Z.dir)}if(xe=Q.to+1,xe>=V)break}return he.length==0&&fe(te,R==null,ve,W==null,n.textDirection),{top:F,bottom:ie,horizontal:he}}function B(R,W){let q=f.top+(W?R.top:R.bottom);return{top:q,bottom:q,horizontal:[]}}}function sR(n,e){return n.constructor==e.constructor&&n.eq(e)}class rR{constructor(e,t){this.view=e,this.layer=t,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),t.above&&this.dom.classList.add("cm-layer-above"),t.class&&this.dom.classList.add(t.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(e.state),e.requestMeasure(this.measureReq),t.mount&&t.mount(this.dom,e)}update(e){e.startState.facet(yu)!=e.state.facet(yu)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let t=0,i=e.facet(yu);for(;t<i.length&&i[t]!=this.layer;)t++;this.dom.style.zIndex=String((this.layer.above?150:-1)-t)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:t}=this.view;(e!=this.scaleX||t!=this.scaleY)&&(this.scaleX=e,this.scaleY=t,this.dom.style.transform=`scale(${1/e}, ${1/t})`)}draw(e){if(e.length!=this.drawn.length||e.some((t,i)=>!sR(t,this.drawn[i]))){let t=this.dom.firstChild,i=0;for(let r of e)r.update&&t&&r.constructor&&this.drawn[i].constructor&&r.update(t,this.drawn[i])?(t=t.nextSibling,i++):this.dom.insertBefore(r.draw(),t);for(;t;){let r=t.nextSibling;t.remove(),t=r}this.drawn=e,ne.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const yu=re.define();function Yw(n){return[Gt.define(e=>new rR(e,n)),yu.of(n)]}const Ea=re.define({combine(n){return zs(n,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function aR(n={}){return[Ea.of(n),lR,oR,cR,yw.of(!0)]}function Kw(n){return n.startState.facet(Ea)!=n.state.facet(Ea)}const lR=Yw({above:!0,markers(n){let{state:e}=n,t=e.facet(Ea),i=[];for(let r of e.selection.ranges){let l=r==e.selection.main;if(r.empty||t.drawRangeCursor&&!(l&&ne.ios&&t.iosSelectionHandles)){let c=l?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",f=r.empty?r:Y.cursor(r.head,r.assoc);for(let h of ur.forRange(n,c,f))i.push(h)}}return i},update(n,e){n.transactions.some(i=>i.selection)&&(e.style.animationName=e.style.animationName=="cm-blink"?"cm-blink2":"cm-blink");let t=Kw(n);return t&&g1(n.state,e),n.docChanged||n.selectionSet||t},mount(n,e){g1(e.state,n)},class:"cm-cursorLayer"});function g1(n,e){e.style.animationDuration=n.facet(Ea).cursorBlinkRate+"ms"}const oR=Yw({above:!1,markers(n){let e=[],{main:t,ranges:i}=n.state.selection;for(let r of i)if(!r.empty)for(let l of ur.forRange(n,"cm-selectionBackground",r))e.push(l);if(ne.ios&&!t.empty&&n.state.facet(Ea).iosSelectionHandles){for(let r of ur.forRange(n,"cm-selectionHandle cm-selectionHandle-start",Y.cursor(t.from,1)))e.push(r);for(let r of ur.forRange(n,"cm-selectionHandle cm-selectionHandle-end",Y.cursor(t.to,1)))e.push(r)}return e},update(n,e){return n.docChanged||n.selectionSet||n.viewportChanged||Kw(n)},class:"cm-selectionLayer"}),cR=ef.highest(se.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}})),Iw=Ee.define({map(n,e){return n==null?null:e.mapPos(n)}}),Pl=Dt.define({create(){return null},update(n,e){return n!=null&&(n=e.changes.mapPos(n)),e.effects.reduce((t,i)=>i.is(Iw)?i.value:t,n)}}),uR=Gt.fromClass(class{constructor(n){this.view=n,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(n){var e;let t=n.state.field(Pl);t==null?this.cursor!=null&&((e=this.cursor)===null||e===void 0||e.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement("div")),this.cursor.className="cm-dropCursor"),(n.startState.field(Pl)!=t||n.docChanged||n.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:n}=this,e=n.state.field(Pl),t=e!=null&&n.coordsAtPos(e);if(!t)return null;let i=n.scrollDOM.getBoundingClientRect();return{left:t.left-i.left+n.scrollDOM.scrollLeft*n.scaleX,top:t.top-i.top+n.scrollDOM.scrollTop*n.scaleY,height:t.bottom-t.top}}drawCursor(n){if(this.cursor){let{scaleX:e,scaleY:t}=this.view;n?(this.cursor.style.left=n.left/e+"px",this.cursor.style.top=n.top/t+"px",this.cursor.style.height=n.height/t+"px"):this.cursor.style.left="-100000px"}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(n){this.view.state.field(Pl)!=n&&this.view.dispatch({effects:Iw.of(n)})}},{eventObservers:{dragover(n){this.setDropPos(this.view.posAtCoords({x:n.clientX,y:n.clientY}))},dragleave(n){(n.target==this.view.contentDOM||!this.view.contentDOM.contains(n.relatedTarget))&&this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}});function fR(){return[Pl,uR]}function hR(){return pR}const dR=be.line({class:"cm-activeLine"}),pR=Gt.fromClass(class{constructor(n){this.decorations=this.getDeco(n)}update(n){(n.docChanged||n.selectionSet)&&(this.decorations=this.getDeco(n.view))}getDeco(n){let e=-1,t=[];for(let i of n.state.selection.ranges){let r=n.lineBlockAt(i.head);r.from>e&&(t.push(dR.range(r.from)),e=r.from)}return be.set(t)}},{decorations:n=>n.decorations}),om=2e3;function mR(n,e,t){let i=Math.min(e.line,t.line),r=Math.max(e.line,t.line),l=[];if(e.off>om||t.off>om||e.col<0||t.col<0){let c=Math.min(e.off,t.off),f=Math.max(e.off,t.off);for(let h=i;h<=r;h++){let p=n.doc.line(h);p.length<=f&&l.push(Y.range(p.from+c,p.to+f))}}else{let c=Math.min(e.col,t.col),f=Math.max(e.col,t.col);for(let h=i;h<=r;h++){let p=n.doc.line(h),g=$p(p.text,c,n.tabSize,!0);if(g<0)l.push(Y.cursor(p.to));else{let y=$p(p.text,f,n.tabSize);l.push(Y.range(p.from+g,p.from+y))}}}return l}function gR(n,e){let t=n.coordsAtPos(n.viewport.from);return t?Math.round(Math.abs((t.left-e)/n.defaultCharacterWidth)):-1}function y1(n,e){let t=n.posAtCoords({x:e.clientX,y:e.clientY},!1),i=n.state.doc.lineAt(t),r=t-i.from,l=r>om?-1:r==i.length?gR(n,e.clientX):go(i.text,n.state.tabSize,t-i.from);return{line:i.number,col:l,off:r}}function yR(n,e){let t=y1(n,e),i=n.state.selection;return t?{update(r){if(r.docChanged){let l=r.changes.mapPos(r.startState.doc.line(t.line).from),c=r.state.doc.lineAt(l);t={line:c.number,col:t.col,off:Math.min(t.off,c.length)},i=i.map(r.changes)}},get(r,l,c){let f=y1(n,r);if(!f)return i;let h=mR(n.state,t,f);return h.length?c?Y.create(h.concat(i.ranges)):Y.create(h):i}}:null}function bR(n){let e=(t=>t.altKey&&t.button==0);return se.mouseSelectionStyle.of((t,i)=>e(i)?yR(t,i):null)}const Qc="-10000px";class Fw{constructor(e,t,i,r){this.facet=t,this.createTooltipView=i,this.removeTooltipView=r,this.input=e.state.facet(t),this.tooltips=this.input.filter(c=>c);let l=null;this.tooltipViews=this.tooltips.map(c=>l=i(c,l))}update(e,t){var i;let r=e.state.facet(this.facet),l=r.filter(h=>h);if(r===this.input){for(let h of this.tooltipViews)h.update&&h.update(e);return!1}let c=[],f=t?[]:null;for(let h=0;h<l.length;h++){let p=l[h],g=-1;if(p){for(let y=0;y<this.tooltips.length;y++){let v=this.tooltips[y];v&&v.create==p.create&&(g=y)}if(g<0)c[h]=this.createTooltipView(p,h?c[h-1]:null),f&&(f[h]=!!p.above);else{let y=c[h]=this.tooltipViews[g];f&&(f[h]=t[g]),y.update&&y.update(e)}}}for(let h of this.tooltipViews)c.indexOf(h)<0&&(this.removeTooltipView(h),(i=h.destroy)===null||i===void 0||i.call(h));return t&&(f.forEach((h,p)=>t[p]=h),t.length=f.length),this.input=r,this.tooltips=l,this.tooltipViews=c,!0}}function vR(n){let e=n.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:e.clientHeight,right:e.clientWidth}}const tp=re.define({combine:n=>{var e,t,i;return{position:ne.ios?"absolute":((e=n.find(r=>r.position))===null||e===void 0?void 0:e.position)||"fixed",parent:((t=n.find(r=>r.parent))===null||t===void 0?void 0:t.parent)||null,tooltipSpace:((i=n.find(r=>r.tooltipSpace))===null||i===void 0?void 0:i.tooltipSpace)||vR}}}),b1=new WeakMap,Xw=Gt.fromClass(class{constructor(n){this.view=n,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let e=n.state.facet(tp);this.position=e.position,this.parent=e.parent,this.classes=n.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver=="function"?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new Fw(n,Pm,(t,i)=>this.createTooltip(t,i),t=>{this.resizeObserver&&this.resizeObserver.unobserve(t.dom),t.dom.remove()}),this.above=this.manager.tooltips.map(t=>!!t.above),this.intersectionObserver=typeof IntersectionObserver=="function"?new IntersectionObserver(t=>{Date.now()>this.lastTransaction-50&&t.length>0&&t[t.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),n.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let n of this.manager.tooltipViews)this.intersectionObserver.observe(n.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(n){n.transactions.length&&(this.lastTransaction=Date.now());let e=this.manager.update(n,this.above);e&&this.observeIntersection();let t=e||n.geometryChanged,i=n.state.facet(tp);if(i.position!=this.position&&!this.madeAbsolute){this.position=i.position;for(let r of this.manager.tooltipViews)r.dom.style.position=this.position;t=!0}if(i.parent!=this.parent){this.parent&&this.container.remove(),this.parent=i.parent,this.createContainer();for(let r of this.manager.tooltipViews)this.container.appendChild(r.dom);t=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);t&&this.maybeMeasure()}createTooltip(n,e){let t=n.create(this.view),i=e?e.dom:null;if(t.dom.classList.add("cm-tooltip"),n.arrow&&!t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let r=document.createElement("div");r.className="cm-tooltip-arrow",t.dom.appendChild(r)}return t.dom.style.position=this.position,t.dom.style.top=Qc,t.dom.style.left="0px",this.container.insertBefore(t.dom,i),t.mount&&t.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(t.dom),t}destroy(){var n,e,t;this.view.win.removeEventListener("resize",this.measureSoon);for(let i of this.manager.tooltipViews)i.dom.remove(),(n=i.destroy)===null||n===void 0||n.call(i);this.parent&&this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.intersectionObserver)===null||t===void 0||t.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let n=1,e=1,t=!1;if(this.position=="fixed"&&this.manager.tooltipViews.length){let{dom:l}=this.manager.tooltipViews[0];if(ne.safari){let c=l.getBoundingClientRect();t=Math.abs(c.top+1e4)>1||Math.abs(c.left)>1}else t=!!l.offsetParent&&l.offsetParent!=this.container.ownerDocument.body}if(t||this.position=="absolute")if(this.parent){let l=this.parent.getBoundingClientRect();l.width&&l.height&&(n=l.width/this.parent.offsetWidth,e=l.height/this.parent.offsetHeight)}else({scaleX:n,scaleY:e}=this.view.viewState);let i=this.view.scrollDOM.getBoundingClientRect(),r=Um(this.view);return{visible:{left:i.left+r.left,top:i.top+r.top,right:i.right-r.right,bottom:i.bottom-r.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((l,c)=>{let f=this.manager.tooltipViews[c];return f.getCoords?f.getCoords(l.pos):this.view.coordsAtPos(l.pos)}),size:this.manager.tooltipViews.map(({dom:l})=>l.getBoundingClientRect()),space:this.view.state.facet(tp).tooltipSpace(this.view),scaleX:n,scaleY:e,makeAbsolute:t}}writeMeasure(n){var e;if(n.makeAbsolute){this.madeAbsolute=!0,this.position="absolute";for(let f of this.manager.tooltipViews)f.dom.style.position="absolute"}let{visible:t,space:i,scaleX:r,scaleY:l}=n,c=[];for(let f=0;f<this.manager.tooltips.length;f++){let h=this.manager.tooltips[f],p=this.manager.tooltipViews[f],{dom:g}=p,y=n.pos[f],v=n.size[f];if(!y||h.clip!==!1&&(y.bottom<=Math.max(t.top,i.top)||y.top>=Math.min(t.bottom,i.bottom)||y.right<Math.max(t.left,i.left)-.1||y.left>Math.min(t.right,i.right)+.1)){g.style.top=Qc;continue}let w=h.arrow?p.dom.querySelector(".cm-tooltip-arrow"):null,k=w?7:0,A=v.right-v.left,C=(e=b1.get(p))!==null&&e!==void 0?e:v.bottom-v.top,O=p.offset||wR,G=this.view.textDirection==it.LTR,_=v.width>i.right-i.left?G?i.left:i.right-v.width:G?Math.max(i.left,Math.min(y.left-(w?14:0)+O.x,i.right-A)):Math.min(Math.max(i.left,y.left-A+(w?14:0)-O.x),i.right-A),B=this.above[f];!h.strictSide&&(B?y.top-C-k-O.y<i.top:y.bottom+C+k+O.y>i.bottom)&&B==i.bottom-y.bottom>y.top-i.top&&(B=this.above[f]=!B);let R=(B?y.top-i.top:i.bottom-y.bottom)-k;if(R<C&&p.resize!==!1){if(R<this.view.defaultLineHeight){g.style.top=Qc;continue}b1.set(p,C),g.style.height=(C=R)/l+"px"}else g.style.height&&(g.style.height="");let W=B?y.top-C-k-O.y:y.bottom+k+O.y,q=_+A;if(p.overlap!==!0)for(let F of c)F.left<q&&F.right>_&&F.top<W+C&&F.bottom>W&&(W=B?F.top-C-2-k:F.bottom+k+2);if(this.position=="absolute"?(g.style.top=(W-n.parent.top)/l+"px",v1(g,(_-n.parent.left)/r)):(g.style.top=W/l+"px",v1(g,_/r)),w){let F=y.left+(G?O.x:-O.x)-(_+14-7);w.style.left=F/r+"px"}p.overlap!==!0&&c.push({left:_,top:W,right:q,bottom:W+C}),g.classList.toggle("cm-tooltip-above",B),g.classList.toggle("cm-tooltip-below",!B),p.positioned&&p.positioned(n.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let n of this.manager.tooltipViews)n.dom.style.top=Qc}},{eventObservers:{scroll(){this.maybeMeasure()}}});function v1(n,e){let t=parseInt(n.style.left,10);(isNaN(t)||Math.abs(e-t)>1)&&(n.style.left=e+"px")}const xR=se.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}}),wR={x:0,y:0},Pm=re.define({enables:[Xw,xR]}),ju=re.define({combine:n=>n.reduce((e,t)=>e.concat(t),[])});class of{static create(e){return new of(e)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement("div"),this.dom.classList.add("cm-tooltip-hover"),this.manager=new Fw(e,ju,(t,i)=>this.createHostedView(t,i),t=>t.dom.remove())}createHostedView(e,t){let i=e.create(this.view);return i.dom.classList.add("cm-tooltip-section"),this.dom.insertBefore(i.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&i.mount&&i.mount(this.view),i}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)(e=t.destroy)===null||e===void 0||e.call(t)}passProp(e){let t;for(let i of this.manager.tooltipViews){let r=i[e];if(r!==void 0){if(t===void 0)t=r;else if(t!==r)return}}return t}get offset(){return this.passProp("offset")}get getCoords(){return this.passProp("getCoords")}get overlap(){return this.passProp("overlap")}get resize(){return this.passProp("resize")}}const kR=Pm.compute([ju],n=>{let e=n.facet(ju);return e.length===0?null:{pos:Math.min(...e.map(t=>t.pos)),end:Math.max(...e.map(t=>{var i;return(i=t.end)!==null&&i!==void 0?i:t.pos})),create:of.create,above:e[0].above,arrow:e.some(t=>t.arrow)}}),Qw=re.define();class SR{constructor(e,t,i,r,l,c){this.view=e,this.source=t,this.field=i,this.locked=r,this.setHover=l,this.hoverTime=c,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,i=e.docView.tile.nearest(t.target);if(!i)return;let r,l=1;if(i.isWidget())r=i.posAtStart;else{if(r=e.posAtCoords(t),r==null)return;let c=e.coordsAtPos(r);if(!c||t.y<c.top||t.y>c.bottom||t.x<c.left-e.defaultCharacterWidth||t.x>c.right+e.defaultCharacterWidth)return;let f=e.bidiSpans(e.state.doc.lineAt(r)).find(p=>p.from<=r&&p.to>=r),h=f&&f.dir==it.RTL?-1:1;l=t.x<c.left?-h:h}this.activateHover(e,r,l)}activateHover(e,t,i,r){let l=this.source(e,t,i),c=f=>{if(f&&!(Array.isArray(f)&&!f.length)){let h=Array.isArray(f)?f:[f];r&&this.locked.set(h,r),e.dispatch({effects:this.setHover.of(h)})}};if(l&&"then"in l){let f=this.pending={pos:t};l.then(h=>{this.pending==f&&(this.pending=null,c(h))},h=>In(e.state,h,"hover tooltip"))}else c(l)}get tooltip(){let e=this.view.plugin(Xw),t=e?e.manager.tooltips.findIndex(i=>i.create==of.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){var t,i;this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:r,tooltip:l}=this;if(r.length&&!this.locked.has(r)&&l&&!AR(l.dom,e)||this.pending){let{pos:c}=r[0]||this.pending,f=(i=(t=r[0])===null||t===void 0?void 0:t.end)!==null&&i!==void 0?i:c;(c==f?this.view.posAtCoords(this.lastMove)!=c:!CR(this.view,c,f,e.clientX,e.clientY))&&(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:i}=this;i&&i.dom.contains(e.relatedTarget)?this.watchTooltipLeave(i.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=i=>{e.removeEventListener("mouseleave",t);let{active:r}=this;r.length&&!this.locked.has(r)&&!this.view.dom.contains(i.relatedTarget)&&this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener("mouseleave",t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}const Zc=4;function AR(n,e){let{left:t,right:i,top:r,bottom:l}=n.getBoundingClientRect(),c;if(c=n.querySelector(".cm-tooltip-arrow")){let f=c.getBoundingClientRect();r=Math.min(f.top,r),l=Math.max(f.bottom,l)}return e.clientX>=t-Zc&&e.clientX<=i+Zc&&e.clientY>=r-Zc&&e.clientY<=l+Zc}function CR(n,e,t,i,r,l){let c=n.scrollDOM.getBoundingClientRect(),f=n.documentTop+n.documentPadding.top+n.contentHeight;if(c.left>i||c.right<i||c.top>r||Math.min(c.bottom,f)<r)return!1;let h=n.posAtCoords({x:i,y:r},!1);return h>=e&&h<=t}function TR(n,e={}){let t=Ee.define(),i=new WeakMap,r=Dt.define({create(){return[]},update(c,f){let h=i.get(c);if(c.length&&(e.hideOnChange&&(f.docChanged||f.selection)?c=[]:h&&h(f)?c=[]:e.hideOn&&(c=c.filter(p=>!e.hideOn(f,p)))),f.docChanged&&c.length){let p=[];for(let g of c){let y=f.changes.mapPos(g.pos,-1,Zt.TrackDel);if(y!=null){let v=Object.assign(Object.create(null),g);v.pos=y,v.end!=null&&(v.end=f.changes.mapPos(v.end)),p.push(v)}}c=p}for(let p of f.effects)p.is(t)&&(c=p.value,h=void 0),(p.is(ER)&&!p.value||p.value==r)&&(c=[]);return c.length&&h&&i.set(c,h),c},provide:c=>ju.from(c)});const l=Gt.define(c=>new SR(c,n,r,i,t,e.hoverTime||300));return{active:r,extension:[r,l,Qw.of(l),kR]}}function MR(n,e,t,i={}){var r;let l=n.state.facet(Qw).map(c=>n.plugin(c)).filter(c=>!!c);if(i.tooltip&&i.tooltip.active){let c=l.find(f=>f.field==i.tooltip.active);c&&(l=[c])}for(let c of l)c.activateHover(n,e,t,(r=i.until)!==null&&r!==void 0?r:(()=>!1))}const ER=Ee.define(),x1=re.define({combine(n){let e,t;for(let i of n)e=e||i.topContainer,t=t||i.bottomContainer;return{topContainer:e,bottomContainer:t}}});function Ym(n,e){let t=n.plugin(Zw),i=t?t.specs.indexOf(e):-1;return i>-1?t.panels[i]:null}const Zw=Gt.fromClass(class{constructor(n){this.input=n.state.facet(oo),this.specs=this.input.filter(t=>t),this.panels=this.specs.map(t=>t(n));let e=n.state.facet(x1);this.top=new Jc(n,!0,e.topContainer),this.bottom=new Jc(n,!1,e.bottomContainer),this.top.sync(this.panels.filter(t=>t.top)),this.bottom.sync(this.panels.filter(t=>!t.top));for(let t of this.panels)t.dom.classList.add("cm-panel"),t.mount&&t.mount()}update(n){let e=n.state.facet(x1);this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new Jc(n.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new Jc(n.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let t=n.state.facet(oo);if(t!=this.input){let i=t.filter(h=>h),r=[],l=[],c=[],f=[];for(let h of i){let p=this.specs.indexOf(h),g;p<0?(g=h(n.view),f.push(g)):(g=this.panels[p],g.update&&g.update(n)),r.push(g),(g.top?l:c).push(g)}this.specs=i,this.panels=r,this.top.sync(l),this.bottom.sync(c);for(let h of f)h.dom.classList.add("cm-panel"),h.mount&&h.mount()}else for(let i of this.panels)i.update&&i.update(n)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:n=>se.scrollMargins.of(e=>{let t=e.plugin(n);return t&&{top:t.top.scrollMargin(),bottom:t.bottom.scrollMargin()}})});class Jc{constructor(e,t,i){this.view=e,this.top=t,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&(this.dom.remove(),this.dom=void 0);return}if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0";let t=this.container||this.view.dom;t.insertBefore(this.dom,this.top?t.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=w1(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=w1(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(!(!this.container||this.classes==this.view.themeClasses)){for(let e of this.classes.split(" "))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(" "))e&&this.container.classList.add(e)}}}function w1(n){let e=n.nextSibling;return n.remove(),e}const oo=re.define({enables:Zw});function RR(n,e){let t,i=new Promise(c=>t=c),r=c=>OR(c,e,t);n.state.field(np,!1)?n.dispatch({effects:Jw.of(r)}):n.dispatch({effects:Ee.appendConfig.of(np.init(()=>[r]))});let l=ek.of(r);return{close:l,result:i.then(c=>((n.win.queueMicrotask||(h=>n.win.setTimeout(h,10)))(()=>{n.state.field(np).indexOf(r)>-1&&n.dispatch({effects:l})}),c))}}const np=Dt.define({create(){return[]},update(n,e){for(let t of e.effects)t.is(Jw)?n=[t.value].concat(n):t.is(ek)&&(n=n.filter(i=>i!=t.value));return n},provide:n=>oo.computeN([n],e=>e.field(n))}),Jw=Ee.define(),ek=Ee.define();function OR(n,e,t){let i=e.content?e.content(n,()=>c(null)):null;if(!i){if(i=Ze("form"),e.input){let f=Ze("input",e.input);/^(text|password|number|email|tel|url)$/.test(f.type)&&f.classList.add("cm-textfield"),f.name||(f.name="input"),i.appendChild(Ze("label",(e.label||"")+": ",f))}else i.appendChild(document.createTextNode(e.label||""));i.appendChild(document.createTextNode(" ")),i.appendChild(Ze("button",{class:"cm-button",type:"submit"},e.submitLabel||"OK"))}let r=i.nodeName=="FORM"?[i]:i.querySelectorAll("form");for(let f=0;f<r.length;f++){let h=r[f];h.addEventListener("keydown",p=>{p.keyCode==27?(p.preventDefault(),c(null)):p.keyCode==13&&(p.preventDefault(),c(h))}),h.addEventListener("submit",p=>{p.preventDefault(),c(h)})}let l=Ze("div",i,Ze("button",{onclick:()=>c(null),"aria-label":n.state.phrase("close"),class:"cm-dialog-close",type:"button"},["×"]));e.class&&(l.className=e.class),l.classList.add("cm-dialog");function c(f){l.contains(l.ownerDocument.activeElement)&&n.focus(),t(f)}return{dom:l,top:e.top,mount:()=>{if(e.focus){let f;typeof e.focus=="string"?f=i.querySelector(e.focus):f=i.querySelector("input")||i.querySelector("button"),f&&"select"in f?f.select():f&&"focus"in f&&f.focus()}}}}class Ui extends Es{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}Ui.prototype.elementClass="";Ui.prototype.toDOM=void 0;Ui.prototype.mapMode=Zt.TrackBefore;Ui.prototype.startSide=Ui.prototype.endSide=-1;Ui.prototype.point=!0;const bu=re.define(),DR=re.define(),NR={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>Me.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:"before"},Jl=re.define();function jR(n){return[tk(),Jl.of({...NR,...n})]}const k1=re.define({combine:n=>n.some(e=>e)});function tk(n){return[BR]}const BR=Gt.fromClass(class{constructor(n){this.view=n,this.domAfter=null,this.prevViewport=n.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=n.state.facet(Jl).map(e=>new A1(n,e)),this.fixed=!n.state.facet(k1);for(let e of this.gutters)e.config.side=="after"?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),n.scrollDOM.insertBefore(this.dom,n.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(n){if(this.updateGutters(n)){let e=this.prevViewport,t=n.view.viewport,i=Math.min(e.to,t.to)-Math.max(e.from,t.from);this.syncGutters(i<(t.to-t.from)*.8)}if(n.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+"px";this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(k1)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=n.view.viewport}syncGutters(n){let e=this.dom.nextSibling;n&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let t=Me.iter(this.view.state.facet(bu),this.view.viewport.from),i=[],r=this.gutters.map(l=>new zR(l,this.view.viewport,-this.view.documentPadding.top));for(let l of this.view.viewportLineBlocks)if(i.length&&(i=[]),Array.isArray(l.type)){let c=!0;for(let f of l.type)if(f.type==Vt.Text&&c){cm(t,i,f.from);for(let h of r)h.line(this.view,f,i);c=!1}else if(f.widget)for(let h of r)h.widget(this.view,f)}else if(l.type==Vt.Text){cm(t,i,l.from);for(let c of r)c.line(this.view,l,i)}else if(l.widget)for(let c of r)c.widget(this.view,l);for(let l of r)l.finish();n&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(n){let e=n.startState.facet(Jl),t=n.state.facet(Jl),i=n.docChanged||n.heightChanged||n.viewportChanged||!Me.eq(n.startState.facet(bu),n.state.facet(bu),n.view.viewport.from,n.view.viewport.to);if(e==t)for(let r of this.gutters)r.update(n)&&(i=!0);else{i=!0;let r=[];for(let l of t){let c=e.indexOf(l);c<0?r.push(new A1(this.view,l)):(this.gutters[c].update(n),r.push(this.gutters[c]))}for(let l of this.gutters)l.dom.remove(),r.indexOf(l)<0&&l.destroy();for(let l of r)l.config.side=="after"?this.getDOMAfter().appendChild(l.dom):this.dom.appendChild(l.dom);this.gutters=r}return i}destroy(){for(let n of this.gutters)n.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:n=>se.scrollMargins.of(e=>{let t=e.plugin(n);if(!t||t.gutters.length==0||!t.fixed)return null;let i=t.dom.offsetWidth*e.scaleX,r=t.domAfter?t.domAfter.offsetWidth*e.scaleX:0;return e.textDirection==it.LTR?{left:i,right:r}:{right:i,left:r}})});function S1(n){return Array.isArray(n)?n:[n]}function cm(n,e,t){for(;n.value&&n.from<=t;)n.from==t&&e.push(n.value),n.next()}class zR{constructor(e,t,i){this.gutter=e,this.height=i,this.i=0,this.cursor=Me.iter(e.markers,t.from)}addElement(e,t,i){let{gutter:r}=this,l=(t.top-this.height)/e.scaleY,c=t.height/e.scaleY;if(this.i==r.elements.length){let f=new nk(e,c,l,i);r.elements.push(f),r.dom.appendChild(f.dom)}else r.elements[this.i].update(e,c,l,i);this.height=t.bottom,this.i++}line(e,t,i){let r=[];cm(this.cursor,r,t.from),i.length&&(r=r.concat(i));let l=this.gutter.config.lineMarker(e,t,r);l&&r.unshift(l);let c=this.gutter;r.length==0&&!c.config.renderEmptyElements||this.addElement(e,t,r)}widget(e,t){let i=this.gutter.config.widgetMarker(e,t.widget,t),r=i?[i]:null;for(let l of e.state.facet(DR)){let c=l(e,t.widget,t);c&&(r||(r=[])).push(c)}r&&this.addElement(e,t,r)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}}class A1{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let i in t.domEventHandlers)this.dom.addEventListener(i,r=>{let l=r.target,c;if(l!=this.dom&&this.dom.contains(l)){for(;l.parentNode!=this.dom;)l=l.parentNode;let h=l.getBoundingClientRect();c=(h.top+h.bottom)/2}else c=r.clientY;let f=e.lineBlockAtHeight(c-e.documentTop);t.domEventHandlers[i](e,f,r)&&r.preventDefault()});this.markers=S1(t.markers(e)),t.initialSpacer&&(this.spacer=new nk(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let t=this.markers;if(this.markers=S1(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let r=this.config.updateSpacer(this.spacer.markers[0],e);r!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[r])}let i=e.view.viewport;return!Me.eq(this.markers,t,i.from,i.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}}class nk{constructor(e,t,i,r){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,t,i,r)}update(e,t,i,r){this.height!=t&&(this.height=t,this.dom.style.height=t+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),LR(this.markers,r)||this.setMarkers(e,r)}setMarkers(e,t){let i="cm-gutterElement",r=this.dom.firstChild;for(let l=0,c=0;;){let f=c,h=l<t.length?t[l++]:null,p=!1;if(h){let g=h.elementClass;g&&(i+=" "+g);for(let y=c;y<this.markers.length;y++)if(this.markers[y].compare(h)){f=y,p=!0;break}}else f=this.markers.length;for(;c<f;){let g=this.markers[c++];if(g.toDOM){g.destroy(r);let y=r.nextSibling;r.remove(),r=y}}if(!h)break;h.toDOM&&(p?r=r.nextSibling:this.dom.insertBefore(h.toDOM(e),r)),p&&c++}this.dom.className=i,this.markers=t}destroy(){this.setMarkers(null,[])}}function LR(n,e){if(n.length!=e.length)return!1;for(let t=0;t<n.length;t++)if(!n[t].compare(e[t]))return!1;return!0}const _R=re.define(),HR=re.define(),ma=re.define({combine(n){return zs(n,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let i=Object.assign({},e);for(let r in t){let l=i[r],c=t[r];i[r]=l?(f,h,p)=>l(f,h,p)||c(f,h,p):c}return i}})}});class ip extends Ui{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function sp(n,e){return n.state.facet(ma).formatNumber(e,n.state)}const qR=Jl.compute([ma],n=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers(e){return e.state.facet(_R)},lineMarker(e,t,i){return i.some(r=>r.toDOM)?null:new ip(sp(e,e.state.doc.lineAt(t.from).number))},widgetMarker:(e,t,i)=>{for(let r of e.state.facet(HR)){let l=r(e,t,i);if(l)return l}return null},lineMarkerChange:e=>e.startState.facet(ma)!=e.state.facet(ma),initialSpacer(e){return new ip(sp(e,C1(e.state.doc.lines)))},updateSpacer(e,t){let i=sp(t.view,C1(t.view.state.doc.lines));return i==e.number?e:new ip(i)},domEventHandlers:n.facet(ma).domEventHandlers,side:"before"}));function VR(n={}){return[ma.of(n),tk(),qR]}function C1(n){let e=9;for(;e<n;)e=e*10+9;return e}const UR=new class extends Ui{constructor(){super(...arguments),this.elementClass="cm-activeLineGutter"}},$R=bu.compute(["selection"],n=>{let e=[],t=-1;for(let i of n.selection.ranges){let r=n.doc.lineAt(i.head).from;r>t&&(t=r,e.push(UR.range(r)))}return Me.of(e)});function GR(){return $R}class T1{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class ar{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t,i){let r=i.facet(co).markerFilter;r&&(e=r(e,i));let l=e.slice().sort((w,k)=>w.from-k.from||w.to-k.to),c=new Sa,f=[],h=0,p=i.doc.iter(),g=0,y=i.doc.length;for(let w=0;;){let k=w==l.length?null:l[w];if(!k&&!f.length)break;let A,C;if(f.length)A=h,C=f.reduce((_,B)=>Math.min(_,B.to),k&&k.from>A?k.from:1e8);else{if(A=k.from,A>y)break;C=k.to,f.push(k),w++}for(;w<l.length;){let _=l[w];if(_.from==A&&(_.to>_.from||_.to==A))f.push(_),w++,C=Math.min(_.to,C);else{C=Math.min(_.from,C);break}}C=Math.min(C,y);let O=!1;if(f.some(_=>_.from==A&&(_.to==C||C==y))&&(O=A==C,!O&&C-A<10)){let _=A-(g+p.value.length);_>0&&(p.next(_),g=A);for(let B=A;;){if(B>=C){O=!0;break}if(!p.lineBreak&&g+p.value.length>B)break;B=g+p.value.length,g+=p.value.length,p.next()}}let G=ck(f);if(O)c.add(A,A,be.widget({widget:new XR(G),diagnostics:f.slice()}));else{let _=f.reduce((B,R)=>R.markClass?B+" "+R.markClass:B,"");c.add(A,C,be.mark({class:"cm-lintRange cm-lintRange-"+G+_,diagnostics:f.slice(),inclusiveEnd:f.some(B=>B.to>C)}))}if(h=C,h==y)break;for(let _=0;_<f.length;_++)f[_].to<=h&&f.splice(_--,1)}let v=c.finish();return new ar(v,t,Ds(v))}}function Ds(n,e=null,t=0){let i=null;return n.between(t,1e9,(r,l,{spec:c})=>{if(!(e&&c.diagnostics.indexOf(e)<0))if(!i)i=new T1(r,l,e||c.diagnostics[0]);else{if(c.diagnostics.indexOf(i.diagnostic)<0)return!1;i=new T1(i.from,l,i.diagnostic)}}),i}function ik(n,e){let t=e.pos,i=e.end||t,r=n.state.facet(co).hideOn(n,t,i);if(r!=null)return r;let l=n.startState.doc.lineAt(e.pos);return!!(n.effects.some(c=>c.is(cf))||n.changes.touchesRange(l.from,Math.max(l.to,i)))}function sk(n,e){return n.field(kn,!1)?e:e.concat(Ee.appendConfig.of(s3))}function WR(n,e){return{effects:sk(n,[cf.of(e)])}}const cf=Ee.define(),Km=Ee.define(),rk=Ee.define(),kn=Dt.define({create(){return new ar(be.none,null,null)},update(n,e){if(e.docChanged&&n.diagnostics.size){let t=n.diagnostics.map(e.changes),i=null,r=n.panel;if(n.selected){let l=e.changes.mapPos(n.selected.from,1);i=Ds(t,n.selected.diagnostic,l)||Ds(t,null,l)}!t.size&&r&&e.state.facet(co).autoPanel&&(r=null),n=new ar(t,r,i)}for(let t of e.effects)if(t.is(cf)){let i=e.state.facet(co).autoPanel?t.value.length?uo.open:null:n.panel;n=ar.init(t.value,i,e.state)}else t.is(Km)?n=new ar(n.diagnostics,t.value?uo.open:null,n.selected):t.is(rk)&&(n=new ar(n.diagnostics,n.panel,t.value));return n},provide:n=>[oo.from(n,e=>e.panel),se.decorations.from(n,e=>e.diagnostics)]}),PR=be.mark({class:"cm-lintRange cm-lintRange-active"});function YR(n,e,t){let{diagnostics:i}=n.state.field(kn),r,l=-1,c=-1;i.between(e-(t<0?1:0),e+(t>0?1:0),(h,p,{spec:g})=>{if(e>=h&&e<=p&&(h==p||(e>h||t>0)&&(e<p||t<0)))return r=g.diagnostics,l=h,c=p,!1});let f=n.state.facet(co).tooltipFilter;return r&&f&&(r=f(r,n.state)),r?{pos:l,end:c,above:!0,create(){return{dom:ak(n,r)}}}:null}function ak(n,e){return Ze("ul",{class:"cm-tooltip-lint"},e.map(t=>ok(n,t,!1)))}const KR=n=>{let e=n.state.field(kn,!1);(!e||!e.panel)&&n.dispatch({effects:sk(n.state,[Km.of(!0)])});let t=Ym(n,uo.open);return t&&t.dom.querySelector(".cm-panel-lint ul").focus(),!0},M1=n=>{let e=n.state.field(kn,!1);return!e||!e.panel?!1:(n.dispatch({effects:Km.of(!1)}),!0)},IR=n=>{let e=n.state.field(kn,!1);if(!e)return!1;let t=n.state.selection.main,i=Ds(e.diagnostics,null,t.to+1);return!i&&(i=Ds(e.diagnostics,null,0),!i||i.from==t.from&&i.to==t.to)?!1:(n.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0}),MR(n,i.from,1,{tooltip:hk,until:r=>r.docChanged||r.newSelection.main.head<i.from||r.newSelection.main.head>i.to}),!0)},FR=[{key:"Mod-Shift-m",run:KR,preventDefault:!0},{key:"F8",run:IR}],co=re.define({combine(n){return{sources:n.map(e=>e.source).filter(e=>e!=null),...zs(n.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:E1,tooltipFilter:E1,needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t,hideOn:(e,t)=>e?t?(i,r,l)=>e(i,r,l)||t(i,r,l):e:t,autoPanel:(e,t)=>e||t})}}});function E1(n,e){return n?e?(t,i)=>e(n(t,i),i):n:e}function lk(n){let e=[];if(n)e:for(let{name:t}of n){for(let i=0;i<t.length;i++){let r=t[i];if(/[a-zA-Z]/.test(r)&&!e.some(l=>l.toLowerCase()==r.toLowerCase())){e.push(r);continue e}}e.push("")}return e}function ok(n,e,t){var i;let r=t?lk(e.actions):[];return Ze("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},Ze("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage(n):e.message),(i=e.actions)===null||i===void 0?void 0:i.map((l,c)=>{let f=!1,h=w=>{if(w.preventDefault(),f)return;f=!0;let k=Ds(n.state.field(kn).diagnostics,e);k&&l.apply(n,k.from,k.to)},{name:p}=l,g=r[c]?p.indexOf(r[c]):-1,y=g<0?p:[p.slice(0,g),Ze("u",p.slice(g,g+1)),p.slice(g+1)],v=l.markClass?" "+l.markClass:"";return Ze("button",{type:"button",class:"cm-diagnosticAction"+v,onclick:h,onmousedown:h,"aria-label":` Action: ${p}${g<0?"":` (access key "${r[c]})"`}.`},y)}),e.source&&Ze("div",{class:"cm-diagnosticSource"},e.source))}class XR extends yo{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return Ze("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class R1{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=ok(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class uo{constructor(e){this.view=e,this.items=[];let t=r=>{if(!(r.ctrlKey||r.altKey||r.metaKey)){if(r.keyCode==27)M1(this.view),this.view.focus();else if(r.keyCode==38||r.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(r.keyCode==40||r.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(r.keyCode==36)this.moveSelection(0);else if(r.keyCode==35)this.moveSelection(this.items.length-1);else if(r.keyCode==13)this.view.focus();else if(r.keyCode>=65&&r.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:l}=this.items[this.selectedIndex],c=lk(l.actions);for(let f=0;f<c.length;f++)if(c[f].toUpperCase().charCodeAt(0)==r.keyCode){let h=Ds(this.view.state.field(kn).diagnostics,l);h&&l.actions[f].apply(e,h.from,h.to)}}else return;r.preventDefault()}},i=r=>{for(let l=0;l<this.items.length;l++)this.items[l].dom.contains(r.target)&&this.moveSelection(l)};this.list=Ze("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t,onclick:i}),this.dom=Ze("div",{class:"cm-panel-lint"},this.list,Ze("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>M1(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(kn).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(kn),i=0,r=!1,l=null,c=new Set;for(e.between(0,this.view.state.doc.length,(f,h,{spec:p})=>{for(let g of p.diagnostics){if(c.has(g))continue;c.add(g);let y=-1,v;for(let w=i;w<this.items.length;w++)if(this.items[w].diagnostic==g){y=w;break}y<0?(v=new R1(this.view,g),this.items.splice(i,0,v),r=!0):(v=this.items[y],y>i&&(this.items.splice(i,y-i),r=!0)),t&&v.diagnostic==t.diagnostic?v.dom.hasAttribute("aria-selected")||(v.dom.setAttribute("aria-selected","true"),l=v):v.dom.hasAttribute("aria-selected")&&v.dom.removeAttribute("aria-selected"),i++}});i<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new R1(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),r=!0),l?(this.list.setAttribute("aria-activedescendant",l.id),this.view.requestMeasure({key:this,read:()=>({sel:l.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:f,panel:h})=>{let p=h.height/this.list.offsetHeight;f.top<h.top?this.list.scrollTop-=(h.top-f.top)/p:f.bottom>h.bottom&&(this.list.scrollTop+=(f.bottom-h.bottom)/p)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let i=e;e=i.nextSibling,i.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=this.view.state.field(kn),i=Ds(t.diagnostics,this.items[e].diagnostic);i&&this.view.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0,effects:rk.of(i)})}static open(e){return new uo(e)}}function vu(n,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`}function eu(n){return vu(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const QR=se.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:eu("#f11")},".cm-lintRange-warning":{backgroundImage:eu("orange")},".cm-lintRange-info":{backgroundImage:eu("#999")},".cm-lintRange-hint":{backgroundImage:eu("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:"#86714a80"},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:"#2e343e"}}});function ZR(n){return n=="error"?4:n=="warning"?3:n=="info"?2:1}function ck(n){let e="hint",t=1;for(let i of n){let r=ZR(i.severity);r>t&&(t=r,e=i.severity)}return e}class uk extends Ui{constructor(e){super(),this.diagnostics=e,this.severity=ck(e)}toDOM(e){let t=document.createElement("div");t.className="cm-lint-marker cm-lint-marker-"+this.severity;let i=this.diagnostics,r=e.state.facet(uf).tooltipFilter;return r&&(i=r(i,e.state)),i.length&&(t.onmouseover=()=>e3(e,t,i)),t}}function JR(n,e){let t=i=>{let r=e.getBoundingClientRect();if(!(i.clientX>r.left-10&&i.clientX<r.right+10&&i.clientY>r.top-10&&i.clientY<r.bottom+10)){for(let l=i.target;l;l=l.parentNode)if(l.nodeType==1&&l.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",t),n.state.field(fk)&&n.dispatch({effects:Im.of(null)})}};window.addEventListener("mousemove",t)}function e3(n,e,t){function i(){let c=n.elementAtHeight(e.getBoundingClientRect().top+5-n.documentTop);n.coordsAtPos(c.from)&&n.dispatch({effects:Im.of({pos:c.from,above:!1,clip:!1,create(){return{dom:ak(n,t),getCoords:()=>e.getBoundingClientRect()}}})}),e.onmouseout=e.onmousemove=null,JR(n,e)}let{hoverTime:r}=n.state.facet(uf),l=setTimeout(i,r);e.onmouseout=()=>{clearTimeout(l),e.onmouseout=e.onmousemove=null},e.onmousemove=()=>{clearTimeout(l),l=setTimeout(i,r)}}function t3(n,e){let t=Object.create(null);for(let r of e){let l=n.lineAt(r.from);(t[l.from]||(t[l.from]=[])).push(r)}let i=[];for(let r in t)i.push(new uk(t[r]).range(+r));return Me.of(i,!0)}const n3=jR({class:"cm-gutter-lint",markers:n=>n.state.field(um),widgetMarker:(n,e,t)=>{let i=[];return n.state.field(um).between(t.from,t.to,(r,l,c)=>{r>t.from&&r<t.to&&i.push(...c.diagnostics)}),i.length?new uk(i):null}}),um=Dt.define({create(){return Me.empty},update(n,e){n=n.map(e.changes);let t=e.state.facet(uf).markerFilter;for(let i of e.effects)if(i.is(cf)){let r=i.value;t&&(r=t(r||[],e.state)),n=t3(e.state.doc,r.slice(0))}return n}}),Im=Ee.define(),fk=Dt.define({create(){return null},update(n,e){return n&&e.docChanged&&(n=ik(e,n)?null:{...n,pos:e.changes.mapPos(n.pos)}),e.effects.reduce((t,i)=>i.is(Im)?i.value:t,n)},provide:n=>Pm.from(n)}),i3=se.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:vu('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:vu('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:vu('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),hk=TR(YR,{hideOn:ik}),s3=[kn,se.decorations.compute([kn],n=>{let{selected:e,panel:t}=n.field(kn);return!e||!t||e.from==e.to?be.none:be.set([PR.range(e.from,e.to)])}),hk,QR],uf=re.define({combine(n){return zs(n,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function r3(n={}){return[uf.of(n),um,n3,i3,fk]}function ff(n,e,t){const i=String(n??""),r=fm(e),l=Math.max(r,fm(t));return{start:O1(i,r),end:O1(i,l)}}function O1(n,e){const t=String(n??""),i=fm(e);let r=0,l=0;for(const c of t){const f=r+o3(c);if(f>i||(r=f,l+=c.length,r===i))return l}return t.length}function a3(n,e=[]){const t=String(n??"");return[...e].map(i=>{const r=ff(t,i?.start,i?.end);return{...i,start:r.start,end:r.end}}).filter(i=>i.start<i.end).sort((i,r)=>i.start-r.start||i.end-r.end)}function l3(n,e){if(!n||!e)return!1;const t=n.state.doc.toString(),i=ff(t,e.start,e.end);return i.end<=i.start?!1:(n.dispatch({selection:{anchor:i.start,head:i.end},effects:se.scrollIntoView(i.start,{y:"center"})}),n.focus(),!0)}function fm(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):0}function o3(n){const e=n.codePointAt(0);return e<=127?1:e<=2047?2:e<=65535?3:4}const c3=Object.freeze({boolean:"rasa-token-boolean",character:"rasa-token-character",comment:"rasa-token-comment",delimiter:"rasa-token-delimiter",keyword:"rasa-token-keyword",metadata:"rasa-token-metadata",nil:"rasa-token-nil",number:"rasa-token-number","reader-macro":"rasa-token-reader-macro",string:"rasa-token-string",symbol:"rasa-token-symbol"}),dk=Ee.define(),pk=Ee.define();function mk(n){return c3[n]||"rasa-token-unknown"}function gk(n,e=[]){const t=String(n??"");return[...e].map(i=>{const r=ff(t,i?.start,i?.end);return{kind:String(i?.kind||"unknown"),start:r.start,end:r.end}}).filter(i=>i.start<i.end).sort((i,r)=>i.start-r.start||i.end-r.end)}function u3(n,e=[]){const t=String(n??""),i=[];let r=0;for(const l of gk(t,e))l.start>r&&i.push({text:t.slice(r,l.start),className:""}),i.push({text:t.slice(l.start,l.end),className:mk(l.kind)}),r=Math.max(r,l.end);return r<t.length&&i.push({text:t.slice(r),className:""}),i}function D1(n,e=[]){return be.set(gk(n,e).map(t=>be.mark({class:mk(t.kind)}).range(t.start,t.end)),!0)}function f3(n=[]){return Dt.define({create(t){return D1(t.doc.toString(),n)},update(t,i){for(const r of i.effects)if(r.is(dk))return D1(i.state.doc.toString(),r.value||[]);return i.docChanged?be.none:t.map(i.changes)},provide:t=>se.decorations.from(t)})}function N1(n,e=[]){return be.set(a3(n,e).map(t=>{const i=["rasa-evidence-span"];return t.pinned&&i.push("rasa-evidence-pinned"),be.mark({class:i.join(" "),attributes:{"data-evidence-group":String(t.group||"")}}).range(t.start,t.end)}),!0)}function h3(n=[]){return Dt.define({create(t){return N1(t.doc.toString(),n)},update(t,i){for(const r of i.effects)if(r.is(pk))return N1(i.state.doc.toString(),r.value||[]);return i.docChanged?be.none:t.map(i.changes)},provide:t=>se.decorations.from(t)})}function Fm(n){return new y3(String(n??"")).parse()}function ms(n){return n==null?"nil":typeof n=="boolean"?String(n):typeof n=="number"?Number.isInteger(n)?String(n):String(Math.round(n*1e3)/1e3):typeof n=="string"?JSON.stringify(n):Xm(n)?`:${n.name}`:Qm(n)?n.name:p3(n)?`(${n.items.map(ms).join(" ")})`:m3(n)?`#{${n.items.map(ms).join(" ")}}`:g3(n)?`{${n.entries.map(([e,t])=>`${ms(e)} ${ms(t)}`).join(" ")}}`:Array.isArray(n)?`[${n.map(ms).join(" ")}]`:`{${Object.entries(n).map(([e,t])=>`:${e} ${ms(t)}`).join(" ")}}`}function gr(n){return{type:"keyword",name:String(n).replace(/^:/,"")}}function d3(n){return{type:"symbol",name:String(n)}}function Xm(n){return!!(n&&typeof n=="object"&&n.type==="keyword")}function Qm(n){return!!(n&&typeof n=="object"&&n.type==="symbol")}function p3(n){return!!(n&&typeof n=="object"&&n.type==="list")}function m3(n){return!!(n&&typeof n=="object"&&n.type==="set")}function g3(n){return!!(n&&typeof n=="object"&&n.type==="map")}function Cs(n){return Xm(n)||Qm(n)?n.name:String(n??"")}let y3=class{constructor(e){this.text=e,this.index=0}parse(){const e=this.form();if(this.ws(),this.index!==this.text.length)throw new Error(`unexpected trailing form at byte ${this.index}`);return e}form(){this.ws();const e=this.peek();return e==="{"?this.map():e==="["?this.vector():e==="("?this.list():e==="#"&&this.text[this.index+1]==="{"?this.set():e==='"'?this.string():this.atom()}map(){this.expect("{");const e={};for(;;){if(this.ws(),this.peek()==="}")return this.index++,e;const t=this.form();e[b3(t)]=this.form()}}vector(){this.expect("[");const e=[];for(;;){if(this.ws(),this.peek()==="]")return this.index++,e;e.push(this.form())}}list(){this.expect("(");const e=[];for(;;){if(this.ws(),this.peek()===")")return this.index++,{type:"list",items:e};e.push(this.form())}}set(){this.expect("#"),this.expect("{");const e=[];for(;;){if(this.ws(),this.peek()==="}")return this.index++,{type:"set",items:e};e.push(this.form())}}string(){this.expect('"');let e="";for(;this.index<this.text.length;){const t=this.text[this.index++];if(t==='"')return e;if(t==="\\"){const i=this.text[this.index++];e+=i==="n"?`
`:i}else e+=t}throw new Error("unterminated string")}atom(){const e=this.index;for(;this.index<this.text.length&&!/\s|[\](){}]/.test(this.text[this.index]);)this.index++;const t=this.text.slice(e,this.index);if(!t)throw new Error(`expected form at byte ${this.index}`);return t==="nil"?null:t==="true"?!0:t==="false"?!1:/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith(":")?gr(t.slice(1)):d3(t)}ws(){for(;this.index<this.text.length&&/\s|,/.test(this.text[this.index]);)this.index++}peek(){return this.text[this.index]}expect(e){if(this.ws(),this.text[this.index]!==e)throw new Error(`expected ${e} at byte ${this.index}`);this.index++}};function b3(n){return Xm(n)||Qm(n)?n.name:String(n)}class Ra extends Error{constructor(e,t,i={}){super(t),this.name="CapabilityError",this.kind=e,this.data=i}}class fr{#e;constructor(e=[]){this.#e=new Set(e.map(String))}static fromManifest(e={}){return new fr(e.allow||[])}allows(e,t){return this.#e.has("*")||this.#e.has(Oa(e,t))}entries(){return[...this.#e].sort()}}class Zm{#e=new Map;register(e,t,i){return this.#e.set(Oa(e,t),i),this}invoke(e,t,i){const r=Oa(e,t),l=this.#e.get(r);if(!l)throw new Ra("adapter-missing",`browser capability adapter is missing for ${r}`,Jm(e,t));return l(i)}entries(){return[...this.#e.keys()]}}class v3{constructor({registry:e=new Zm,policy:t=new fr}={}){this.registry=e,this.policy=t instanceof fr?t:fr.fromManifest(t),this.lastTrace=null}call(e){const t={requestText:e,responseText:""};try{const i=Fm(e),r=Cs(i.package),l=Cs(i.export),c=Array.isArray(i.args)?i.args:[],f=Oa(r,l);if(Object.assign(t,{packageName:r,exportName:l,capability:f,argsCount:c.length}),!this.policy.allows(r,l))throw new Ra("policy-denied",`browser policy denies ${f}`,Jm(r,l));const h=this.registry.invoke(r,l,c);return S3(h)?(this.lastTrace={...t,status:"pending",suspended:!0},h.then(p=>this.#e(t,p,!0),p=>this.#t(t,p,!0))):this.#e(t,h,!1)}catch(i){return this.#t(t,i,!1)}}async callAsync(e){return await this.call(e)}#e(e,t,i){const r=x3(t);return this.lastTrace={...e,status:"completed",...i?{suspended:!0,resumed:!0}:{},responseText:r},r}#t(e,t,i){const r=t instanceof Ra?t.kind:"provider-error",l=w3(r,t.message||String(t),k3(e,t));return this.lastTrace={...e,status:"failed",...i?{suspended:!0,resumed:!0}:{},kind:r,error:t.message,responseText:l},l}}function Oa(n,e){return`${n}/${e}`}function x3(n){return ms({status:gr("ok"),value:n})}function w3(n,e,t=null){const i={status:gr("error"),kind:gr(n),message:e};return t&&Object.keys(t).length>0&&(i.data=t),ms(i)}function k3(n,e){return e instanceof Ra?e.data||{}:Jm(n.packageName,n.exportName,{"rasa.browser/name":e?.name||"Error"})}function Jm(n,e,t={}){const i={"rasa.host/target":gr("wasm-browser"),...t};return n&&e&&(i["rasa.host/capability"]=gr(Oa(n,e))),i}function S3(n){return!!(n&&typeof n.then=="function")}class yk{constructor({manifestUrl:e,manifest:t,runtimeUrl:i,adapterBaseUrl:r=null,optimizerManifestUrl:l=null,sourceLibraries:c=[],packages:f=[],initialNamespace:h="",registry:p=new Zm,providerInstances:g=new Map,policy:y=new fr,host:v=null}){this.manifestUrl=e,this.manifest=t,this.runtimeUrl=i,this.adapterBaseUrl=r,this.optimizerManifestUrl=l,this.sourceLibraries=c,this.packages=f,this.initialNamespace=h,this.registry=p,this.providerInstances=g,this.policy=y,this.host=v||new v3({registry:p,policy:y})}engineOptions(e={}){return{...e,host:e.host??this.host,...this.adapterBaseUrl?{adapterBaseUrl:this.adapterBaseUrl}:{},...this.optimizerManifestUrl?{optimizerManifestUrl:this.optimizerManifestUrl}:{}}}async configureSession(e,t,i={phases:"all"}){const l=[await(e.setAdmittedOperationsAsync?e.setAdmittedOperationsAsync.bind(e):e.setAdmittedOperations.bind(e))(t,this.admittedOperations())];for(const c of this.sourceLibraries)l.push(await C3(e,t,c,i));return this.initialNamespace&&l.push(await vk(e,t,`(ns ${this.initialNamespace})`,i)),l}admittedOperations(){const e=new Set;for(const{data:t,packageName:i}of this.packages)for(const r of t?.exports||[]){if(!A3(r))continue;const l=Cs(r?.capability)||Oa(i,Cs(r?.name));l&&e.add(l)}return this.registry.entries().filter(t=>e.has(t)).filter(t=>{const i=t.lastIndexOf("/");return i>0&&this.policy.allows(t.slice(0,i),t.slice(i+1))}).sort()}}async function bk(n,e={}){const t=N3(n),i=e.fetch||globalThis.fetch?.bind(globalThis),r=e.readJson||(O=>j3(O,i)),l=e.readText||(O=>B3(O,i)),c=e.importModule||(O=>import(O)),f=e.target||"wasm-browser",h=await r(t.href);e.validateManifest?.(h),M3(h);const p=sa(hm(h,"runtime"),t).href,g=h.adapterBaseUrl?sa(h.adapterBaseUrl,t).href:null,y=h.optimizedCallables?sa(rp(h.optimizedCallables),t).href:null,v=await Promise.all((h.sourceLibraries||[]).map(async O=>{const G=sa(rp(O),t).href;return{url:G,sourceId:R3(O,G),text:await l(G)}})),w=await Promise.all((h.packages||[]).map(async O=>{const G=sa(rp(O),t).href,_=await l(G),B=Fm(_);return{url:G,text:_,data:B,packageName:O.package||O3(B)||D3(G)}})),k=new Zm,A=fr.fromManifest(h.policy||{}),C=new yk({manifestUrl:t.href,manifest:h,runtimeUrl:p,adapterBaseUrl:g,optimizerManifestUrl:y,sourceLibraries:v,packages:w,initialNamespace:T3(h.session),registry:k,policy:A});for(const O of h.providers||[]){if((O.target||f)!==f)continue;if(O.kind!=="browser-module")throw new Error(`unsupported browser provider kind ${O.kind}`);const G=sa(hm(O,"module"),t).href,_=await c(G);if(typeof _.register!="function")throw new Error(`browser provider module ${G} does not export register`);const B=_.register(k,{manifest:h,distribution:C,provider:O,moduleUrl:G,target:f,baseUrl:t,fetch:i,CapabilityError:Ra,refusal:E3(f)});B!==void 0&&C.providerInstances.set(O.package||G,B)}return C}function A3(n){const e=(n?.targets||[]).find(t=>Cs(t?.target)==="wasm-browser");return Cs(e?.availability)==="requires-adapter"&&Cs(e?.["adapter-kind"]||e?.adapter)==="javascript"}async function C3(n,e,t,i){return typeof n.evaluateSessionWithSourceIdAsync=="function"?await n.evaluateSessionWithSourceIdAsync(e,t.sourceId||t.url,t.text,i):typeof n.evaluateSessionWithSourceId=="function"?await n.evaluateSessionWithSourceId(e,t.sourceId||t.url,t.text,i):await vk(n,e,t.text,i)}async function vk(n,e,t,i){return typeof n.evaluateSessionAsync=="function"?await n.evaluateSessionAsync(e,t,i):await n.evaluateSession(e,t,i)}function T3(n={}){const e=String(n?.initialNamespace||"");if(!e)return"";if(!/^[A-Za-z_*!?$%&=<>.+-][A-Za-z0-9_*!?$%&=<>.+-]*$/.test(e))throw new Error(`invalid browser session initialNamespace ${JSON.stringify(e)}`);return e}function M3(n){const e=["catalog","catalogs","providerManifest","providerManifests","manifests"].filter(t=>n&&Object.hasOwn(n,t));if(e.length>0)throw new Error(`browser distribution uses retired fields ${e.join(", ")}; use packages with package.ras`)}function E3(n){return(e,t,i={})=>new Ra(e,t,{"rasa.host/target":gr(n),...i})}function R3(n,e){return typeof n=="object"&&n?.sourceId?String(n.sourceId):e}function O3(n){return Cs(n?.id||n?.["package/id"])}function D3(n){const e=new URL(n).pathname.split("/").filter(Boolean),t=e.lastIndexOf("package.ras");return t>0?e[t-1]:""}function rp(n){return typeof n=="string"?n:hm(n,"url")}function hm(n,e){if(!n||n[e]===void 0||n[e]===null||n[e]==="")throw new Error(`browser product manifest is missing ${e}`);return n[e]}function sa(n,e){return new URL(n,e)}function N3(n){return new URL(n,globalThis.location?.href||"http://localhost/")}async function j3(n,e){const t=await xk(e,n);if(!t.ok)throw new Error(`browser product JSON load failed: ${t.status}`);return t.json()}async function B3(n,e){const t=await xk(e,n);if(!t.ok)throw new Error(`browser product asset load failed: ${t.status}`);return t.text()}function xk(n,e){if(typeof n!="function")throw new Error("browser product loading requires fetch or explicit asset readers");return n(e)}const z3="rasa.browser-product.v1",L3="rasa.browser-api.v1",_3="rasa.runtime.browser-component.v1",H3="rasa:runtime/session@0.1.0",q3="rasa.package/v1",V3="rasa-web/browser-product-v1",U3="rasa.inspection-artifact.v0",$3=new Set(["schema","product","api","runtime","adapterBaseUrl","optimizedCallables","runtimeContract","packageSchema","sourceLibraries","session","packages","providers","policy","build","inventory"]);function G3(n){if(!n||typeof n!="object"||Array.isArray(n))throw new Error("browser product manifest must be an object");const e=Object.keys(n).filter(t=>!$3.has(t));if(e.length>0)throw new Error(`browser product manifest has unsupported fields ${e.join(", ")}`);if(n?.schema!==z3)throw new Error(`unsupported browser product schema ${n?.schema||"missing"}`);if(n?.api?.version!==L3)throw new Error(`unsupported browser API version ${n?.api?.version||"missing"}`);if(n?.runtimeContract?.abi!==_3)throw new Error(`unsupported browser runtime ABI ${n?.runtimeContract?.abi||"missing"}`);if(n?.runtimeContract?.componentWorld!==H3)throw new Error(`unsupported browser component world ${n?.runtimeContract?.componentWorld||"missing"}`);if(n?.packageSchema!==q3)throw new Error(`unsupported browser package schema ${n?.packageSchema||"missing"}`);fa(n?.product?.id,"browser product id"),fa(n?.product?.version,"browser product version"),ap(n?.api?.module,"browser API module"),ap(n?.runtime,"browser runtime component"),ap(n?.adapterBaseUrl,"browser component adapter base");for(const[t,i]of[["sourceLibraries",n.sourceLibraries],["packages",n.packages],["providers",n.providers]])if(!Array.isArray(i))throw new Error(`browser product ${t} must be an array`);if(!n.policy||typeof n.policy!="object"||Array.isArray(n.policy))throw new Error("browser product policy must be an object");if(n?.build?.producer!==V3)throw new Error(`unsupported browser product producer ${n?.build?.producer||"missing"}`);if(fa(n?.build?.sourceRevision,"browser product source revision"),!new Set(["clean","dirty"]).has(n?.build?.sourceState))throw new Error(`invalid browser product source state ${n?.build?.sourceState||"missing"}`);if(!Array.isArray(n.inventory)||n.inventory.length===0)throw new Error("browser product inventory is empty");for(const t of n.inventory){if(fa(t?.path,"browser product inventory path"),fa(t?.kind,"browser product inventory kind"),!Number.isInteger(t?.bytes)||t.bytes<0)throw new Error(`invalid browser product inventory byte length for ${t?.path||"entry"}`);if(!/^[a-f0-9]{64}$/.test(t?.sha256||""))throw new Error(`invalid browser product inventory digest for ${t?.path||"entry"}`)}return n}function hf(n){if(n?.schema!==U3)throw new Error(`unsupported inspection artifact schema ${n?.schema||"missing"}`);return n}function fa(n,e){if(typeof n!="string"||n.length===0)throw new Error(`${e} must be a non-empty string`);return n}function ap(n,e){const t=fa(n,e);if(!t.startsWith("./"))throw new Error(`${e} must be product-relative`);return t}const W3="wasm-component",P3="rasa-component/",wk="rasa:runtime/host",Y3="rasa:runtime/host@0.1.0",kk="rasa:runtime/optimizer",K3="rasa:runtime/optimizer@0.1.0",Sk="rasa:runtime/source-loader",I3="rasa:runtime/source-loader@0.1.0",F3="rasa:runtime/session@0.1.0",Ak="runtime-wasm-before-region-entry",Bu=65536,Ck=1,Tk=2,Mk=4,Ek=8,Rk=16,Ok=32,X3=Ck|Tk|Mk|Ek|Rk|Ok,Q3=256;class j1 extends Error{constructor(e){super(e),this.name="RasaBrowserHostCallError"}}class eg{static async load(e,t={}){const i=zu(e),r=t.readBytes||Nk,l=await r(i,"Rasa runtime component"),c=zu(t.adapterBaseUrl||P3,i),f=t.optimizer??await lO(t,i,r),p=await import(new URL("ras-runtime.js",c).href),g=nO(t.host,f,t.sourceLoader),y=new Map,v=await p.instantiate(async w=>{const k=new URL(w,c),A=y.get(k.href);if(A)return A;const C=await r(k,`Rasa component core module ${w}`),O=await WebAssembly.compile(C);return y.set(k.href,O),O},g);return new eg({url:i.href,adapterBaseUrl:c.href,byteLength:l.byteLength,imports:g,session:v.session||v[F3]})}constructor(e={}){if(!e.session)throw new Error("Rasa Wasm component adapter did not export the session interface");this.url=e.url??null,this.adapterBaseUrl=e.adapterBaseUrl??null,this.byteLength=e.byteLength??null,this.available=!0,this.runtimeKind=W3,this.message="Browser Wasm component runtime ready.",this.session=e.session,this.importObject=e.imports||{}}imports(){return Object.keys(this.importObject)}status(){return this.session.status()}renderHash(){return this.session.renderHash()}evaluate(e,t=null){return this.session.evalSource(Pn(e),ra(t))}evaluateAdmitted(e,t,i=null){return this.session.evalAdmittedSource(Pn(e),[...t].map(String),ra(i))}async evaluateAdmittedAsync(e,t,i=null){return await this.evaluateAdmitted(e,t,i)}evaluateAdmittedWithSourceId(e,t,i,r=null){return this.session.evalAdmittedSourceWithId(String(e||"browser://eval"),Pn(t),[...i].map(String),ra(r))}async evaluateAdmittedWithSourceIdAsync(e,t,i,r=null){return await this.evaluateAdmittedWithSourceId(e,t,i,r)}inspect(e,t=null){const i=this.session.inspectSource(Pn(e),Z3(t));return L1(i,"inspection artifact")}syntaxTokens(e){const t=this.session.syntaxTokens(Pn(e));return L1(t,"syntax token payload")}createSession(){return this.session.sessionNew()}freeSession(e){e!=null&&this.session.sessionFree(e)}setSessionOptimizerEnabled(e,t){if(typeof this.session.sessionSetOptimizerEnabled!="function")throw new Error("Rasa Wasm component does not export sessionSetOptimizerEnabled");return this.session.sessionSetOptimizerEnabled(e,!!t)}setAdmittedOperations(e,t){return this.session.sessionSetAdmittedOperations(e,[...t].map(String))}async setAdmittedOperationsAsync(e,t){return await this.setAdmittedOperations(e,t)}evaluateSession(e,t,i=null){return this.session.sessionEval(e,Pn(t),ra(i))}async evaluateSessionAsync(e,t,i=null){return await this.evaluateSession(e,t,i)}evaluateSessionWithSourceId(e,t,i,r=null){if(typeof this.session.sessionEvalWithId!="function")throw new Error("Rasa Wasm component does not export sessionEvalWithId");return this.session.sessionEvalWithId(e,String(t||"browser://eval"),Pn(i),ra(r))}async evaluateSessionWithSourceIdAsync(e,t,i,r=null){return await this.evaluateSessionWithSourceId(e,t,i,r)}evaluateReplSession(e,t,i=null){if(typeof this.session.sessionReplEval!="function")throw new Error("Rasa Wasm component does not export sessionReplEval");return this.session.sessionReplEval(e,Pn(t),ra(i))}async evaluateReplSessionAsync(e,t,i=null){return await this.evaluateReplSession(e,t,i)}}function Z3(n){if(typeof n=="number")return n;const e=n?.includeEval!==!1,t=n?.includePlan!==!1,i=n?.detail||"standard",r=i==="summary"?0:i==="full"?2:1;return(e?1:0)|(t?2:0)|r<<8}function Pn(n){return new TextEncoder().encode(String(n??""))}function J3(n){return new TextDecoder("utf-8",{fatal:!0}).decode(n)}async function eO(n=[],e={}){const t=new Map,i=new Map;let r=1n;for(const l of n){const c=await rO(l,e);if(c.currency==null||c.version==null)continue;const f=r;r+=1n,t.set(B1(c.currency,c.version),f),i.set(f.toString(),c)}return{installVersion(l,c){return t.get(B1(l,c))},tryCall(l,c){const f=i.get(BigInt(l).toString());return f?oO(f,c):ws("missing-version-token")}}}async function tO(n,e={}){const t=zu(n),i=e.readJson||MO,l=((e.manifest||await i(t.href)).callables||[]).map(c=>({currency:oi(c,"currency"),version:oi(c,"version"),symbol:c.symbol,arity:c.arity,abi:c.abi,inputIndex:c.inputIndex,inputShape:c.inputShape,result:c.result,resultProbe:c.resultProbe,keys:c.keys,packed:c.packed,url:EO(oi(c,"url"),t).href}));return eO(l,{...e,readBytes:e.readBytes})}function nO(n=null,e=null,t=null){const i={[wk]:iO(n),[kk]:sO(e),[Sk]:SO(t),"wasi:cli/environment":{getEnvironment:()=>[]},"wasi:cli/exit":{exit:()=>{throw new Error("Rasa Wasm component requested wasi:cli/exit")}},"wasi:cli/stdin":{getStdin:()=>new _1},"wasi:cli/stdout":{getStdout:()=>new lp},"wasi:cli/stderr":{getStderr:()=>new lp},"wasi:cli/terminal-input":{TerminalInput:OO},"wasi:cli/terminal-output":{TerminalOutput:DO},"wasi:cli/terminal-stdin":{getTerminalStdin:()=>{}},"wasi:cli/terminal-stdout":{getTerminalStdout:()=>{}},"wasi:cli/terminal-stderr":{getTerminalStderr:()=>{}},"wasi:clocks/monotonic-clock":{subscribeDuration:()=>new dm},"wasi:io/error":{Error:RO},"wasi:io/poll":{Pollable:dm,poll:()=>[]},"wasi:io/streams":{InputStream:_1,OutputStream:lp},"wasi:random/insecure-seed":{getInsecureSeed:()=>[1n,2n]}};return CO(i)}function iO(n){return{call(e){if(!n)throw new j1("no browser host provider is registered");if(typeof n.callBytes=="function")return AO(n.callBytes(e));if(typeof n.call=="function"){const t=n.call(J3(e));return jk(t)?t.then(i=>Pn(i)):Pn(t)}throw new j1("browser host provider does not implement call")}}}function sO(n){return{installVersion(e,t){if(typeof n?.installVersion=="function")return n.installVersion(e,t)},tryCall(e,t){return typeof n?.tryCall=="function"?n.tryCall(e,t):{tag:"refused",val:{reason:"browser-optimizer-unavailable",fallback:Ak}}}}}async function rO(n,e){const t=xO(n.resultProbe??n.result??"i64"),i=Number.isInteger(n.inputIndex)?n.inputIndex:0,r=Array.isArray(n.keys)?n.keys.map(String):[],l=n.abi||(n.packed?"packed-vector-v1":"utf8-scan-v1"),c=wO(n.packed);try{return{currency:n.currency==null?null:String(n.currency),version:n.version==null?null:BigInt(n.version),symbol:String(n.symbol),arity:Number(n.arity),abi:l,result:t,inputIndex:i,inputShape:n.inputShape||null,keys:r,packed:c,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:await aO(n,e),blocker:null}}catch(f){return{currency:n.currency==null?null:String(n.currency),version:n.version==null?null:BigInt(n.version),symbol:String(n.symbol),arity:Number(n.arity),abi:l,packed:c,result:t,inputIndex:i,keys:r,onPackedOutput:typeof e.onPackedOutput=="function"?e.onPackedOutput:null,exports:null,blocker:{reason:"browser-wasmgc-callable-artifact-unavailable",message:f?.message??String(f)}}}}async function aO(n,e){if(n.exports)return n.exports;if(n.instance?.exports)return n.instance.exports;if(typeof n.instantiate=="function"){const l=await n.instantiate();if(l?.exports)return l.exports;if(l?.instance?.exports)return l.instance.exports}const t=n.imports||e.imports||{};let i=n.module??null;if(!i){const l=e.readBytes||Nk,c=n.moduleBytes??(n.url?await l(n.url,"WasmGC callable artifact"):null);if(!c)throw new Error("WasmGC callable entry does not include module bytes, module, instance, or exports");i=await WebAssembly.compile(Da(c))}const r=await WebAssembly.instantiate(i,t);if(r?.exports)return r.exports;if(r?.instance?.exports)return r.instance.exports;throw new Error("WasmGC callable artifact did not instantiate with exports")}async function lO(n,e,t){if(!n.optimizerManifestUrl&&!n.optimizerManifest)return null;const i=n.optimizerManifestUrl?zu(n.optimizerManifestUrl,e).href:e.href;return tO(i,{manifest:n.optimizerManifest,readJson:n.readJson,readBytes:t,onPackedOutput:n.onPackedOutput})}function oO(n,e){if(n.blocker)return ws(n.blocker.reason);try{if(n.abi==="packed-vector-v1"||n.packed)return cO(n,e);const t=yO(e?.[n.inputIndex]);return t?(hO(n.exports,t),{tag:"executed",val:pO(n)}):ws("missing-runtime-string-argument")}catch(t){return ws(vO(t))}}function cO(n,e){const t=n.packed;if(!t)return ws("missing-browser-packed-callable-abi");const i=uO(n,t),r=i?null:bO(e?.[n.inputIndex]);if(!i&&!r)return ws("missing-runtime-packed-argument");const l=z1(t.input.element,t.input.length);if(!i&&r.logicalBitExtent!==l)return ws("browser-packed-input-bit-extent-mismatch");const c=i?new Uint8Array(0):r.bytes;if(c.byteLength!==t.input.byteLength)return ws("browser-packed-input-byte-length-mismatch");const f=dO(n.exports,c,t);df(n.exports,"rasa_run_packed")();const h=new Uint8Array(f.buffer,t.output.offset,t.output.byteLength);return fO(n,h),{tag:"executed",val:{tag:"packed",val:{dtype:t.output.element,shape:[BigInt(t.output.length)],logicalBitExtent:z1(t.output.element,t.output.length),bytes:new Uint8Array(h)}}}}function uO(n,e){return e.input.length===0&&e.input.byteLength===0&&(n.inputShape==="none"||n.arity===0)}function fO(n,e){typeof n.onPackedOutput=="function"&&n.onPackedOutput({symbol:n.symbol,arity:n.arity,abi:n.abi,packed:n.packed,bytes:new Uint8Array(e)})}function hO(n,e){const t=n?.rasa_memory,i=n?.rasa_prepare_utf8;if(!t?.buffer||typeof i!="function")throw new Error("missing WasmGC callable UTF-8 input ABI");const r=Math.ceil(e.byteLength/Bu),l=Math.ceil(t.buffer.byteLength/Bu);r>l&&t.grow(r-l),new Uint8Array(t.buffer,0,e.byteLength).set(e),i(e.byteLength)}function dO(n,e,t){const i=n?.rasa_memory;if(!i?.buffer)throw new Error("missing WasmGC callable packed memory export");const r=Math.max(Number(t.memory.minimumPages||0),Math.ceil((t.output.offset+t.output.byteLength)/Bu)),l=Math.ceil(i.buffer.byteLength/Bu);return r>l&&i.grow(r-l),new Uint8Array(i.buffer,0,e.byteLength).set(e),i}function pO(n){switch(n.result){case"i64":return{tag:"int64",val:ng(tg(n.exports,"rasa_main_i64"))};case"i64-vector":return{tag:"i64-vector",val:mO(n.exports)};case"i64-map":return{tag:"i64-map",val:gO(n.exports,n.keys)};default:throw new Error(`unsupported WasmGC callable result probe ${n.result}`)}}function mO(n){const e=Dk(tg(n,"rasa_main_vector_len")),t=df(n,"rasa_main_vector_i64_at");return Array.from({length:e},(i,r)=>ng(t(r)))}function gO(n,e){const t=Dk(tg(n,"rasa_main_map_len"));if(t!==e.length)throw new Error(`WasmGC map probe length ${t} did not match planned keys ${e.length}`);const i=df(n,"rasa_main_map_i64_at");return e.map((r,l)=>({key:r,value:ng(i(l))}))}function tg(n,e){return df(n,e)()}function df(n,e){const t=n?.[e];if(typeof t!="function")throw new Error(`missing WasmGC callable export ${e}`);return t}function yO(n){return n?.tag==="utf8-string"||n?.tag==="utf8String"?Da(n.val):null}function bO(n){if(n?.tag!=="packed")return null;const e=n.val,t=e?.logicalBitExtent??e?.["logical-bit-extent"];return typeof t!="bigint"||t<0n||!(e?.bytes instanceof Uint8Array)&&!(e?.bytes instanceof ArrayBuffer)&&!ArrayBuffer.isView(e?.bytes)?null:{logicalBitExtent:t,bytes:Da(e?.bytes)}}function ws(n){return{tag:"refused",val:{reason:n,fallback:Ak}}}function vO(n){const e=n?.message||String(n);return e.startsWith("unsupported packed scalar ")?"browser-packed-scalar-unsupported":e.includes(" value out of range")?"browser-packed-value-out-of-range":"browser-wasmgc-callable-execution-error"}function B1(n,e){return`${String(n)}\0${BigInt(e).toString()}`}function xO(n){switch(String(n)){case"i64":case"int64":return"i64";case"i64-vector":case"vector-i64":return"i64-vector";case"i64-map":case"map-i64":return"i64-map";default:return String(n)}}function wO(n){return n?{input:{element:String(oi(n.input||{},"element")),length:Number(oi(n.input||{},"length")),byteLength:Number(oi(n.input||{},"byteLength"))},output:{element:String(oi(n.output||{},"element")),length:Number(oi(n.output||{},"length")),byteLength:Number(oi(n.output||{},"byteLength")),offset:Number(oi(n.output||{},"offset"))},memory:{minimumPages:Number(n.memory?.minimumPages||0)}}:null}function z1(n,e){return BigInt(e)*BigInt(kO(n)*8)}function kO(n){const e={u8:1,i8:1,u16:2,i16:2,u32:4,i32:4,u64:8,i64:8}[String(n)];if(!e)throw new Error(`unsupported packed scalar ${n}`);return e}function Dk(n){const e=Number(n);if(!Number.isInteger(e)||e<0)throw new Error(`invalid WasmGC probe length ${n}`);return e}function ng(n){return typeof n=="bigint"?n:(typeof n=="number"&&Number.isSafeInteger(n),BigInt(n))}function SO(n){return{loadRunnerSources(e,t){if(typeof n?.loadRunnerSources=="function")return n.loadRunnerSources(e,t);throw new Error("browser source-loader is not configured for runner :files/:paths")}}}function AO(n){return jk(n)?n.then(e=>Da(e)):Da(n)}function CO(n){return{...n,[Y3]:n[wk],[K3]:n[kk],[I3]:n[Sk],"wasi:cli/environment@0.2.6":n["wasi:cli/environment"],"wasi:cli/exit@0.2.6":n["wasi:cli/exit"],"wasi:cli/stdin@0.2.6":n["wasi:cli/stdin"],"wasi:cli/stdout@0.2.6":n["wasi:cli/stdout"],"wasi:cli/stderr@0.2.6":n["wasi:cli/stderr"],"wasi:cli/terminal-input@0.2.6":n["wasi:cli/terminal-input"],"wasi:cli/terminal-output@0.2.6":n["wasi:cli/terminal-output"],"wasi:cli/terminal-stdin@0.2.6":n["wasi:cli/terminal-stdin"],"wasi:cli/terminal-stdout@0.2.6":n["wasi:cli/terminal-stdout"],"wasi:cli/terminal-stderr@0.2.6":n["wasi:cli/terminal-stderr"],"wasi:clocks/monotonic-clock@0.2.6":n["wasi:clocks/monotonic-clock"],"wasi:io/error@0.2.6":n["wasi:io/error"],"wasi:io/poll@0.2.6":n["wasi:io/poll"],"wasi:io/streams@0.2.6":n["wasi:io/streams"],"wasi:random/insecure-seed@0.3.0-rc-2026-03-15":n["wasi:random/insecure-seed"]}}function ra(n){if(typeof n=="number")return n;let e=X3;return n?.phases&&n.phases!=="all"&&(e=(Array.isArray(n.phases)?n.phases:[n.phases]).reduce((i,r)=>i|TO(r),0)),n?.traces&&(e|=Q3),e}function TO(n){switch(String(n)){case"reader":return Ck;case"analysis":case"analyze":return Tk;case"ir":return Mk;case"facts":return Ek;case"plan":return Ok;case"eval":return Rk;default:return 0}}function L1(n,e){try{return JSON.parse(n)}catch(t){throw new Error(`failed to parse ${e}: ${t.message}`)}}function Da(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):Pn(n)}async function Nk(n,e){const t=await fetch(n);if(!t.ok)throw new Error(`failed to load ${e}: ${t.status}`);return Da(await t.arrayBuffer())}async function MO(n){const e=await fetch(n);if(!e.ok)throw new Error(`failed to load JSON ${n}: ${e.status}`);return e.json()}function zu(n,e=null){return new URL(String(n),e||globalThis.location?.href||import.meta.url)}function EO(n,e){return new URL(String(n),e)}function oi(n,e){if(!n||n[e]===void 0||n[e]===null||n[e]==="")throw new Error(`callable WasmGC manifest entry is missing ${e}`);return n[e]}function jk(n){return n&&typeof n.then=="function"}class RO{}class dm{block(){}}class _1{}class lp{checkWrite(){return 0n}write(){}blockingFlush(){}subscribe(){return new dm}}class OO{}class DO{}const NO=Object.freeze({phases:"all"});class Qt extends Error{constructor(e,t={}){super(e),this.name="BrowserError",this.phase=t.phase||"unknown",this.run=t.run||null,this.runs=t.runs||[],this.cause=t.cause}}class jO{#e=!1;#t;#n;#r=new Set;constructor({distribution:e,engine:t}){this.#t=e,this.#n=t}get manifest(){return this.#t.manifest}get product(){return this.manifest.product||null}get build(){return this.manifest.build||null}get runtimeContract(){return this.manifest.runtimeContract||null}get runtime(){return Object.freeze({available:this.#n.available!==!1,kind:this.#n.runtimeKind||null,byteLength:this.#n.byteLength??null,url:this.#n.url||this.#t.runtimeUrl,adapterBaseUrl:this.#n.adapterBaseUrl||this.#t.adapterBaseUrl})}get capabilityTrace(){return this.#t.host?.lastTrace||null}provider(e){return this.#i(),this.#t.providerInstances.get(String(e))||null}_providerTrace(){return this.capabilityTrace}async openSession(e={}){this.#i();const t=e.evalOptions||NO,i=e.configureOptions||t,r=this.#n.createSession();try{this.#t.optimizerManifestUrl&&this.#n.setSessionOptimizerEnabled(r,!0);const l=[],c=await this.#t.configureSession(this.#n,r,i);for(const h of c){const p=zk(h,{phase:"configure",trace:this.#t.host?.lastTrace||null});if(l.push(p),!Lk(p))throw new Qt("browser session configuration failed",{phase:"configure",run:p,runs:l})}const f=new BO({browser:this,engine:this.#n,handle:r,evalOptions:t,configuration:l});return this.#r.add(f),f}catch(l){throw this.#n.freeSession(r),l instanceof Qt?l:new Qt(l.message||String(l),{phase:"configure",cause:l})}}async inspect(e,t={}){this.#i();try{return hf(await this.#n.inspect(String(e??""),t))}catch(i){throw new Qt(i.message||String(i),{phase:"inspect",cause:i})}}tokens(e){this.#i();try{const t=this.#n.syntaxTokens(String(e??""));if(!t||typeof t.status!="string"||!Array.isArray(t.tokens))throw new Error("invalid syntax token payload");return t}catch(t){throw new Qt(t.message||String(t),{phase:"tokens",cause:t})}}async close(){this.#e||(this.#e=!0,await Promise.all([...this.#r].map(e=>e.close())))}_release(e){this.#r.delete(e)}#i(){if(this.#e)throw new Qt("Rasa browser environment is closed",{phase:"lifecycle"})}}class BO{#e;#t=!1;#n;#r;constructor({browser:e,engine:t,handle:i,evalOptions:r,configuration:l}){this.#e=e,this.#n=t,this.#r=i,this.evalOptions={...r},this.configuration=l}async eval(e,t={}){this.#i();try{const{repl:i=!0,label:r="eval",...l}=t||{},c={...this.evalOptions,...l},f=i?await this.#n.evaluateReplSessionAsync(this.#r,String(e??""),c):await this.#n.evaluateSessionAsync(this.#r,String(e??""),c);return zk(f,{phase:"eval",label:r,trace:this.#e._providerTrace()})}catch(i){throw i instanceof Qt?i:new Qt(i.message||String(i),{phase:"eval",cause:i})}}async load(e,t={}){return await this.eval(e,{...t,repl:!1,label:t.label||"load"})}async close(){this.#t||(this.#t=!0,this.#n.freeSession(this.#r),this.#e._release(this))}#i(){if(this.#t)throw new Qt("Rasa browser session is closed",{phase:"lifecycle"})}}async function zO(n="./browser-product.json",e={}){const{readJson:t=null,readText:i=null,importModule:r=null,fetch:l=null}=e||{};try{const c=await bk(n,LO({readJson:t,readText:i,importModule:r,fetch:l,validateManifest:G3}));return await Bk(c)}catch(c){throw c instanceof Qt?c:new Qt(c.message||String(c),{phase:"load",cause:c})}}async function Bk(n,e={}){if(!n||typeof n.engineOptions!="function")throw new Qt("browser distribution is required",{phase:"load"});const{Engine:t=eg,engineOptions:i={},readBytes:r=null,runtimeUrl:l=n.runtimeUrl,adapterBaseUrl:c=null}=e||{};try{const f=n.engineOptions({...i});c&&(f.adapterBaseUrl=c),r&&(f.readBytes=r);const h=await t.load(l,f);return new jO({distribution:n,engine:h})}catch(f){throw f instanceof Qt?f:new Qt(f.message||String(f),{phase:"load",cause:f})}}function zk(n,e={}){const t=String(n??"");let i;try{i=Fm(t)}catch(h){throw new Qt("invalid Rasa run report transport",{phase:"transport",cause:h})}const r=op(i?.status),l=i?.eval||null,c=op(l?.status);return{status:r&&r!=="ok"?r:c||r||"unknown",topStatus:r,evalStatus:c,failedPhase:op(i?.["failed-phase"])||null,value:l?.value??null,renderedValue:l?.["rendered-value"]??null,diagnostics:Array.isArray(i?.diagnostics)?i.diagnostics:[],report:i,reportText:t,trace:e.trace||null,phase:e.phase||"eval",label:e.label||null}}function Lk(n){return n?.status==="ok"}function op(n){return n?n.type==="keyword"||n.type==="symbol"?n.name:String(n).replace(/^:/,""):null}function LO(n){return Object.fromEntries(Object.entries(n).filter(([,e])=>e!=null))}const qi=Object.freeze({current:"current",open:"open",stale:"stale",unavailable:"unavailable"});function _l(n=null){return Object.freeze({status:qi.unavailable,artifact:null,revision:null,error:n})}function _O(n){return Object.freeze({status:qi.open,artifact:null,revision:n,error:null})}function HO(n,e,t){const i=hf(n);return Object.freeze({status:e===t?qi.current:qi.stale,artifact:e===t?i:null,revision:e,error:null})}function qO(n,e){return n?.status===qi.unavailable?n:Object.freeze({status:qi.stale,artifact:null,revision:e,error:null})}function VO(n,e){return _k(n?.diagnostics||[],e,"error")}function UO(n,e){return n?_k(hf(n).diagnosticViews||[],e,"error"):[]}function _k(n,e,t="error"){const i=String(e??"");return[...n||[]].flatMap(r=>{const l=r?.span;if(!l)return[];const c=ff(i,l.start,l.end),f=Math.min(c.start,i.length),h=Math.max(f,Math.min(c.end,i.length));return[{from:f,to:h,severity:GO(r.severity,t),message:String(r.message||r.kind||"Rasa diagnostic"),source:String(r.code||r.kind||r.phase||"Rasa"),rasa:r}]})}function Hk(n){return n?[...hf(n).evidence?.indexes?.spans||[]].flatMap(t=>(t.groups?.length?t.groups:[""]).map(r=>({source:t.source,start:t.start,end:t.end,group:r,annotations:t.annotations||[],pinned:!1}))):[]}function $O(n,e){return Hk(n).filter(t=>t.group===e).map(t=>({...t,pinned:!0}))}function GO(n,e){const t=String(n?.name||n||e).toLowerCase();return t==="warning"||t==="info"||t==="hint"?t:"error"}const WO=1024;let PO=0;class cp{constructor(e,t){this.from=e,this.to=t}}class $e{constructor(e={}){this.id=PO++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=e.combine||null}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=Hn.match(e)),t=>{let i=e(t);return i===void 0?null:[this,i]}}}$e.closedBy=new $e({deserialize:n=>n.split(" ")});$e.openedBy=new $e({deserialize:n=>n.split(" ")});$e.group=new $e({deserialize:n=>n.split(" ")});$e.isolate=new $e({deserialize:n=>{if(n&&n!="rtl"&&n!="ltr"&&n!="auto")throw new RangeError("Invalid value for isolate: "+n);return n||"auto"}});$e.contextHash=new $e({perNode:!0});$e.lookAhead=new $e({perNode:!0});$e.mounted=new $e({perNode:!0});class eo{constructor(e,t,i,r=!1){this.tree=e,this.overlay=t,this.parser=i,this.bracketed=r}static get(e){return e&&e.props&&e.props[$e.mounted.id]}}const YO=Object.create(null);class Hn{constructor(e,t,i,r=0){this.name=e,this.props=t,this.id=i,this.flags=r}static define(e){let t=e.props&&e.props.length?Object.create(null):YO,i=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),r=new Hn(e.name||"",t,e.id,i);if(e.props){for(let l of e.props)if(Array.isArray(l)||(l=l(r)),l){if(l[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[l[0].id]=l[1]}}return r}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop($e.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let i in e)for(let r of i.split(" "))t[r]=e[i];return i=>{for(let r=i.prop($e.group),l=-1;l<(r?r.length:0);l++){let c=t[l<0?i.name:r[l]];if(c)return c}}}}Hn.none=new Hn("",Object.create(null),0,8);const tu=new WeakMap,H1=new WeakMap;var yt;(function(n){n[n.ExcludeBuffers=1]="ExcludeBuffers",n[n.IncludeAnonymous=2]="IncludeAnonymous",n[n.IgnoreMounts=4]="IgnoreMounts",n[n.IgnoreOverlays=8]="IgnoreOverlays",n[n.EnterBracketed=16]="EnterBracketed"})(yt||(yt={}));class qt{constructor(e,t,i,r,l){if(this.type=e,this.children=t,this.positions=i,this.length=r,this.props=null,l&&l.length){this.props=Object.create(null);for(let[c,f]of l)this.props[typeof c=="number"?c:c.id]=f}}toString(){let e=eo.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let i of this.children){let r=i.toString();r&&(t&&(t+=","),t+=r)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new mm(this.topNode,e)}cursorAt(e,t=0,i=0){let r=tu.get(this)||this.topNode,l=new mm(r);return l.moveTo(e,t),tu.set(this,l._tree),l}get topNode(){return new _n(this,0,0,null)}resolve(e,t=0){let i=fo(tu.get(this)||this.topNode,e,t,!1);return tu.set(this,i),i}resolveInner(e,t=0){let i=fo(H1.get(this)||this.topNode,e,t,!0);return H1.set(this,i),i}resolveStack(e,t=0){return FO(this,e,t)}iterate(e){let{enter:t,leave:i,from:r=0,to:l=this.length}=e,c=e.mode||0,f=(c&yt.IncludeAnonymous)>0;for(let h=this.cursor(c|yt.IncludeAnonymous);;){let p=!1;if(h.from<=l&&h.to>=r&&(!f&&h.type.isAnonymous||t(h)!==!1)){if(h.firstChild())continue;p=!0}for(;p&&i&&(f||!h.type.isAnonymous)&&i(h),!h.nextSibling();){if(!h.parent())return;p=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:rg(Hn.none,this.children,this.positions,0,this.children.length,0,this.length,(t,i,r)=>new qt(this.type,t,i,r,this.propValues),e.makeTree||((t,i,r)=>new qt(Hn.none,t,i,r)))}static build(e){return XO(e)}}qt.empty=new qt(Hn.none,[],[],0);class ig{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new ig(this.buffer,this.index)}}class Ns{constructor(e,t,i){this.buffer=e,this.length=t,this.set=i}get type(){return Hn.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],i=this.buffer[e+3],r=this.set.types[t],l=r.name;if(/\W/.test(l)&&!r.isError&&(l=JSON.stringify(l)),e+=4,i==e)return l;let c=[];for(;e<i;)c.push(this.childString(e)),e=this.buffer[e+3];return l+"("+c.join(",")+")"}findChild(e,t,i,r,l){let{buffer:c}=this,f=-1;for(let h=e;h!=t&&!(qk(l,r,c[h+1],c[h+2])&&(f=h,i>0));h=c[h+3]);return f}slice(e,t,i){let r=this.buffer,l=new Uint16Array(t-e),c=0;for(let f=e,h=0;f<t;){l[h++]=r[f++],l[h++]=r[f++]-i;let p=l[h++]=r[f++]-i;l[h++]=r[f++]-e,c=Math.max(c,p)}return new Ns(l,c,this.set)}}function qk(n,e,t,i){switch(n){case-2:return t<e;case-1:return i>=e&&t<e;case 0:return t<e&&i>e;case 1:return t<=e&&i>e;case 2:return i>e;case 4:return!0}}function fo(n,e,t,i){for(var r;n.from==n.to||(t<1?n.from>=e:n.from>e)||(t>-1?n.to<=e:n.to<e);){let c=!i&&n instanceof _n&&n.index<0?null:n.parent;if(!c)return n;n=c}let l=i?0:yt.IgnoreOverlays;if(i)for(let c=n,f=c.parent;f;c=f,f=c.parent)c instanceof _n&&c.index<0&&((r=f.enter(e,t,l))===null||r===void 0?void 0:r.from)!=c.from&&(n=f);for(;;){let c=n.enter(e,t,l);if(!c)return n;n=c}}class Vk{cursor(e=0){return new mm(this,e)}getChild(e,t=null,i=null){let r=q1(this,e,t,i);return r.length?r[0]:null}getChildren(e,t=null,i=null){return q1(this,e,t,i)}resolve(e,t=0){return fo(this,e,t,!1)}resolveInner(e,t=0){return fo(this,e,t,!0)}matchContext(e){return pm(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),i=this;for(;t;){let r=t.lastChild;if(!r||r.to!=t.to)break;r.type.isError&&r.from==r.to?(i=t,t=r.prevSibling):t=r}return i}get node(){return this}get next(){return this.parent}}class _n extends Vk{constructor(e,t,i,r){super(),this._tree=e,this.from=t,this.index=i,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,i,r,l=0){for(let c=this;;){for(let{children:f,positions:h}=c._tree,p=t>0?f.length:-1;e!=p;e+=t){let g=f[e],y=h[e]+c.from,v;if(!(!(l&yt.EnterBracketed&&g instanceof qt&&(v=eo.get(g))&&!v.overlay&&v.bracketed&&i>=y&&i<=y+g.length)&&!qk(r,i,y,y+g.length))){if(g instanceof Ns){if(l&yt.ExcludeBuffers)continue;let w=g.findChild(0,g.buffer.length,t,i-y,r);if(w>-1)return new ks(new KO(c,g,e,y),null,w)}else if(l&yt.IncludeAnonymous||!g.type.isAnonymous||sg(g)){let w;if(!(l&yt.IgnoreMounts)&&(w=eo.get(g))&&!w.overlay)return new _n(w.tree,y,e,c);let k=new _n(g,y,e,c);return l&yt.IncludeAnonymous||!k.type.isAnonymous?k:k.nextChild(t<0?g.children.length-1:0,t,i,r,l)}}}if(l&yt.IncludeAnonymous||!c.type.isAnonymous||(c.index>=0?e=c.index+t:e=t<0?-1:c._parent._tree.children.length,c=c._parent,!c))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(e,t,i=0){let r;if(!(i&yt.IgnoreOverlays)&&(r=eo.get(this._tree))&&r.overlay){let l=e-this.from,c=i&yt.EnterBracketed&&r.bracketed;for(let{from:f,to:h}of r.overlay)if((t>0||c?f<=l:f<l)&&(t<0||c?h>=l:h>l))return new _n(r.tree,r.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,i)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function q1(n,e,t,i){let r=n.cursor(),l=[];if(!r.firstChild())return l;if(t!=null){for(let c=!1;!c;)if(c=r.type.is(t),!r.nextSibling())return l}for(;;){if(i!=null&&r.type.is(i))return l;if(r.type.is(e)&&l.push(r.node),!r.nextSibling())return i==null?l:[]}}function pm(n,e,t=e.length-1){for(let i=n;t>=0;i=i.parent){if(!i)return!1;if(!i.type.isAnonymous){if(e[t]&&e[t]!=i.name)return!1;t--}}return!0}class KO{constructor(e,t,i,r){this.parent=e,this.buffer=t,this.index=i,this.start=r}}class ks extends Vk{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,i){super(),this.context=e,this._parent=t,this.index=i,this.type=e.buffer.set.types[e.buffer.buffer[i]]}child(e,t,i){let{buffer:r}=this.context,l=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.context.start,i);return l<0?null:new ks(this.context,this,l)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(e,t,i=0){if(i&yt.ExcludeBuffers)return null;let{buffer:r}=this.context,l=r.findChild(this.index+4,r.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return l<0?null:new ks(this.context,this,l)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new ks(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new ks(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:i}=this.context,r=this.index+4,l=i.buffer[this.index+3];if(l>r){let c=i.buffer[this.index+1];e.push(i.slice(r,l,c)),t.push(0)}return new qt(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Uk(n){if(!n.length)return null;let e=0,t=n[0];for(let l=1;l<n.length;l++){let c=n[l];(c.from>t.from||c.to<t.to)&&(t=c,e=l)}let i=t instanceof _n&&t.index<0?null:t.parent,r=n.slice();return i?r[e]=i:r.splice(e,1),new IO(r,t)}class IO{constructor(e,t){this.heads=e,this.node=t}get next(){return Uk(this.heads)}}function FO(n,e,t){let i=n.resolveInner(e,t),r=null;for(let l=i instanceof _n?i:i.context.parent;l;l=l.parent)if(l.index<0){let c=l.parent;(r||(r=[i])).push(c.resolve(e,t)),l=c}else{let c=eo.get(l.tree);if(c&&c.overlay&&c.overlay[0].from<=e&&c.overlay[c.overlay.length-1].to>=e){let f=new _n(c.tree,c.overlay[0].from+l.from,-1,l);(r||(r=[i])).push(fo(f,e,t,!1))}}return r?Uk(r):i}class mm{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~yt.EnterBracketed,e instanceof _n)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let i=e._parent;i;i=i._parent)this.stack.unshift(i.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:i,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=i+r.buffer[e+1],this.to=i+r.buffer[e+2],!0}yield(e){return e?e instanceof _n?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,i){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,i,this.mode));let{buffer:r}=this.buffer,l=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,i);return l<0?!1:(this.stack.push(this.index),this.yieldBuf(l))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,i=this.mode){return this.buffer?i&yt.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,i))}parent(){if(!this.buffer)return this.yieldNode(this.mode&yt.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&yt.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,i=this.stack.length-1;if(e<0){let r=i<0?0:this.stack[i]+4;if(this.index!=r)return this.yieldBuf(t.findChild(r,this.index,-1,0,4))}else{let r=t.buffer[this.index+3];if(r<(i<0?t.buffer.length:t.buffer[this.stack[i]+3]))return this.yieldBuf(r)}return i<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,i,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let l=0;l<this.index;l++)if(r.buffer.buffer[l+3]<this.index)return!1;({index:t,parent:i}=r)}else({index:t,_parent:i}=this._tree);for(;i;{index:t,_parent:i}=i)if(t>-1)for(let l=t+e,c=e<0?-1:i._tree.children.length;l!=c;l+=e){let f=i._tree.children[l];if(this.mode&yt.IncludeAnonymous||f instanceof Ns||!f.type.isAnonymous||sg(f))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,i=0;if(e&&e.context==this.buffer)e:for(let r=this.index,l=this.stack.length;l>=0;){for(let c=e;c;c=c._parent)if(c.index==r){if(r==this.index)return c;t=c,i=l+1;break e}r=this.stack[--l]}for(let r=i;r<this.stack.length;r++)t=new ks(this.buffer,t,this.stack[r]);return this.bufferNode=new ks(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let i=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){i++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!i)return;if(this.nextSibling())break;this.parent(),i--,r=!0}}}matchContext(e){if(!this.buffer)return pm(this.node.parent,e);let{buffer:t}=this.buffer,{types:i}=t.set;for(let r=e.length-1,l=this.stack.length-1;r>=0;l--){if(l<0)return pm(this._tree,e,r);let c=i[t.buffer[this.stack[l]]];if(!c.isAnonymous){if(e[r]&&e[r]!=c.name)return!1;r--}}return!0}}function sg(n){return n.children.some(e=>e instanceof Ns||!e.type.isAnonymous||sg(e))}function XO(n){var e;let{buffer:t,nodeSet:i,maxBufferLength:r=WO,reused:l=[],minRepeatType:c=i.types.length}=n,f=Array.isArray(t)?new ig(t,t.length):t,h=i.types,p=0,g=0;function y(R,W,q,F,ie,he){let{id:fe,start:te,end:ve,size:ye}=f,xe=g,V=p;if(ye<0)if(f.next(),ye==-1){let M=l[fe];q.push(M),F.push(te-R);return}else if(ye==-3){p=fe;return}else if(ye==-4){g=fe;return}else throw new RangeError(`Unrecognized record size: ${ye}`);let Q=h[fe],Z,ae,ce=te-R;if(ve-te<=r&&(ae=C(f.pos-W,ie))){let M=new Uint16Array(ae.size-ae.skip),U=f.pos-ae.size,X=M.length;for(;f.pos>U;)X=O(ae.start,M,X);Z=new Ns(M,ve-ae.start,i),ce=ae.start-R}else{let M=f.pos-ye;f.next();let U=[],X=[],J=fe>=c?fe:-1,me=0,de=ve;for(;f.pos>M;)J>=0&&f.id==J&&f.size>=0?(f.end<=de-r&&(k(U,X,te,me,f.end,de,J,xe,V),me=U.length,de=f.end),f.next()):he>2500?v(te,M,U,X):y(te,M,U,X,J,he+1);if(J>=0&&me>0&&me<U.length&&k(U,X,te,me,te,de,J,xe,V),U.reverse(),X.reverse(),J>-1&&me>0){let ke=w(Q,V);Z=rg(Q,U,X,0,U.length,0,ve-te,ke,ke)}else Z=A(Q,U,X,ve-te,xe-ve,V)}q.push(Z),F.push(ce)}function v(R,W,q,F){let ie=[],he=0,fe=-1;for(;f.pos>W;){let{id:te,start:ve,end:ye,size:xe}=f;if(xe>4)f.next();else{if(fe>-1&&ve<fe)break;fe<0&&(fe=ye-r),ie.push(te,ve,ye),he++,f.next()}}if(he){let te=new Uint16Array(he*4),ve=ie[ie.length-2];for(let ye=ie.length-3,xe=0;ye>=0;ye-=3)te[xe++]=ie[ye],te[xe++]=ie[ye+1]-ve,te[xe++]=ie[ye+2]-ve,te[xe++]=xe;q.push(new Ns(te,ie[2]-ve,i)),F.push(ve-R)}}function w(R,W){return(q,F,ie)=>{let he=0,fe=q.length-1,te,ve;if(fe>=0&&(te=q[fe])instanceof qt){if(!fe&&te.type==R&&te.length==ie)return te;(ve=te.prop($e.lookAhead))&&(he=F[fe]+te.length+ve)}return A(R,q,F,ie,he,W)}}function k(R,W,q,F,ie,he,fe,te,ve){let ye=[],xe=[];for(;R.length>F;)ye.push(R.pop()),xe.push(W.pop()+q-ie);R.push(A(i.types[fe],ye,xe,he-ie,te-he,ve)),W.push(ie-q)}function A(R,W,q,F,ie,he,fe){if(he){let te=[$e.contextHash,he];fe=fe?[te].concat(fe):[te]}if(ie>25){let te=[$e.lookAhead,ie];fe=fe?[te].concat(fe):[te]}return new qt(R,W,q,F,fe)}function C(R,W){let q=f.fork(),F=0,ie=0,he=0,fe=q.end-r,te={size:0,start:0,skip:0};e:for(let ve=q.pos-R;q.pos>ve;){let ye=q.size;if(q.id==W&&ye>=0){te.size=F,te.start=ie,te.skip=he,he+=4,F+=4,q.next();continue}let xe=q.pos-ye;if(ye<0||xe<ve||q.start<fe)break;let V=q.id>=c?4:0,Q=q.start;for(q.next();q.pos>xe;){if(q.size<0)if(q.size==-3||q.size==-4)V+=4;else break e;else q.id>=c&&(V+=4);q.next()}ie=Q,F+=ye,he+=V}return(W<0||F==R)&&(te.size=F,te.start=ie,te.skip=he),te.size>4?te:void 0}function O(R,W,q){let{id:F,start:ie,end:he,size:fe}=f;if(f.next(),fe>=0&&F<c){let te=q;if(fe>4){let ve=f.pos-(fe-4);for(;f.pos>ve;)q=O(R,W,q)}W[--q]=te,W[--q]=he-R,W[--q]=ie-R,W[--q]=F}else fe==-3?p=F:fe==-4&&(g=F);return q}let G=[],_=[];for(;f.pos>0;)y(n.start||0,n.bufferStart||0,G,_,-1,0);let B=(e=n.length)!==null&&e!==void 0?e:G.length?_[0]+G[0].length:0;return new qt(h[n.topID],G.reverse(),_.reverse(),B)}const V1=new WeakMap;function xu(n,e){if(!n.isAnonymous||e instanceof Ns||e.type!=n)return 1;let t=V1.get(e);if(t==null){t=1;for(let i of e.children){if(i.type!=n||!(i instanceof qt)){t=1;break}t+=xu(n,i)}V1.set(e,t)}return t}function rg(n,e,t,i,r,l,c,f,h){let p=0;for(let k=i;k<r;k++)p+=xu(n,e[k]);let g=Math.ceil(p*1.5/8),y=[],v=[];function w(k,A,C,O,G){for(let _=C;_<O;){let B=_,R=A[_],W=xu(n,k[_]);for(_++;_<O;_++){let q=xu(n,k[_]);if(W+q>=g)break;W+=q}if(_==B+1){if(W>g){let q=k[B];w(q.children,q.positions,0,q.children.length,A[B]+G);continue}y.push(k[B])}else{let q=A[_-1]+k[_-1].length-R;y.push(rg(n,k,A,B,_,R,q,null,h))}v.push(R+G-l)}}return w(e,t,i,r,0),(f||h)(y,v,c)}class hr{constructor(e,t,i,r,l=!1,c=!1){this.from=e,this.to=t,this.tree=i,this.offset=r,this.open=(l?1:0)|(c?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],i=!1){let r=[new hr(0,e.length,e,0,!1,i)];for(let l of t)l.to>e.length&&r.push(l);return r}static applyChanges(e,t,i=128){if(!t.length)return e;let r=[],l=1,c=e.length?e[0]:null;for(let f=0,h=0,p=0;;f++){let g=f<t.length?t[f]:null,y=g?g.fromA:1e9;if(y-h>=i)for(;c&&c.from<y;){let v=c;if(h>=v.from||y<=v.to||p){let w=Math.max(v.from,h)-p,k=Math.min(v.to,y)-p;v=w>=k?null:new hr(w,k,v.tree,v.offset+p,f>0,!!g)}if(v&&r.push(v),c.to>y)break;c=l<e.length?e[l++]:null}if(!g)break;h=g.toA,p=g.toA-g.toB}return r}}class QO{startParse(e,t,i){return typeof e=="string"&&(e=new ZO(e)),i=i?i.length?i.map(r=>new cp(r.from,r.to)):[new cp(0,0)]:[new cp(0,e.length)],this.createParse(e,t||[],i)}parse(e,t,i){let r=this.startParse(e,t,i);for(;;){let l=r.advance();if(l)return l}}}class ZO{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}new $e({perNode:!0});let JO=0;class Bn{constructor(e,t,i,r){this.name=e,this.set=t,this.base=i,this.modified=r,this.id=JO++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(e,t){let i=typeof e=="string"?e:"?";if(e instanceof Bn&&(t=e),t?.base)throw new Error("Can not derive from a modified tag");let r=new Bn(i,[],null,[]);if(r.set.push(r),t)for(let l of t.set)r.set.push(l);return r}static defineModifier(e){let t=new Lu(e);return i=>i.modified.indexOf(t)>-1?i:Lu.get(i.base||i,i.modified.concat(t).sort((r,l)=>r.id-l.id))}}let e4=0;class Lu{constructor(e){this.name=e,this.instances=[],this.id=e4++}static get(e,t){if(!t.length)return e;let i=t[0].instances.find(f=>f.base==e&&t4(t,f.modified));if(i)return i;let r=[],l=new Bn(e.name,r,e,t);for(let f of t)f.instances.push(l);let c=n4(t);for(let f of e.set)if(!f.modified.length)for(let h of c)r.push(Lu.get(f,h));return l}}function t4(n,e){return n.length==e.length&&n.every((t,i)=>t==e[i])}function n4(n){let e=[[]];for(let t=0;t<n.length;t++)for(let i=0,r=e.length;i<r;i++)e.push(e[i].concat(n[t]));return e.sort((t,i)=>i.length-t.length)}function i4(n){let e=Object.create(null);for(let t in n){let i=n[t];Array.isArray(i)||(i=[i]);for(let r of t.split(" "))if(r){let l=[],c=2,f=r;for(let y=0;;){if(f=="..."&&y>0&&y+3==r.length){c=1;break}let v=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(f);if(!v)throw new RangeError("Invalid path: "+r);if(l.push(v[0]=="*"?"":v[0][0]=='"'?JSON.parse(v[0]):v[0]),y+=v[0].length,y==r.length)break;let w=r[y++];if(y==r.length&&w=="!"){c=0;break}if(w!="/")throw new RangeError("Invalid path: "+r);f=r.slice(y)}let h=l.length-1,p=l[h];if(!p)throw new RangeError("Invalid path: "+r);let g=new _u(i,c,h>0?l.slice(0,h):null);e[p]=g.sort(e[p])}}return s4.add(e)}const s4=new $e({combine(n,e){let t,i,r;for(;n||e;){if(!n||e&&n.depth>=e.depth?(r=e,e=e.next):(r=n,n=n.next),t&&t.mode==r.mode&&!r.context&&!t.context)continue;let l=new _u(r.tags,r.mode,r.context);t?t.next=l:i=l,t=l}return i}});class _u{constructor(e,t,i,r){this.tags=e,this.mode=t,this.context=i,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}_u.empty=new _u([],2,null);function r4(n,e){let t=Object.create(null);for(let l of n)if(!Array.isArray(l.tag))t[l.tag.id]=l.class;else for(let c of l.tag)t[c.id]=l.class;let{scope:i,all:r=null}={};return{style:l=>{let c=r;for(let f of l)for(let h of f.set){let p=t[h.id];if(p){c=c?c+" "+p:p;break}}return c},scope:i}}const ee=Bn.define,nu=ee(),gs=ee(),U1=ee(gs),$1=ee(gs),ys=ee(),iu=ee(ys),up=ee(ys),ai=ee(),ir=ee(ai),si=ee(),ri=ee(),gm=ee(),Hl=ee(gm),su=ee(),Ce={comment:nu,lineComment:ee(nu),blockComment:ee(nu),docComment:ee(nu),name:gs,variableName:ee(gs),typeName:U1,tagName:ee(U1),propertyName:$1,attributeName:ee($1),className:ee(gs),labelName:ee(gs),namespace:ee(gs),macroName:ee(gs),literal:ys,string:iu,docString:ee(iu),character:ee(iu),attributeValue:ee(iu),number:up,integer:ee(up),float:ee(up),bool:ee(ys),regexp:ee(ys),escape:ee(ys),color:ee(ys),url:ee(ys),keyword:si,self:ee(si),null:ee(si),atom:ee(si),unit:ee(si),modifier:ee(si),operatorKeyword:ee(si),controlKeyword:ee(si),definitionKeyword:ee(si),moduleKeyword:ee(si),operator:ri,derefOperator:ee(ri),arithmeticOperator:ee(ri),logicOperator:ee(ri),bitwiseOperator:ee(ri),compareOperator:ee(ri),updateOperator:ee(ri),definitionOperator:ee(ri),typeOperator:ee(ri),controlOperator:ee(ri),punctuation:gm,separator:ee(gm),bracket:Hl,angleBracket:ee(Hl),squareBracket:ee(Hl),paren:ee(Hl),brace:ee(Hl),content:ai,heading:ir,heading1:ee(ir),heading2:ee(ir),heading3:ee(ir),heading4:ee(ir),heading5:ee(ir),heading6:ee(ir),contentSeparator:ee(ai),list:ee(ai),quote:ee(ai),emphasis:ee(ai),strong:ee(ai),link:ee(ai),monospace:ee(ai),strikethrough:ee(ai),inserted:ee(),deleted:ee(),changed:ee(),invalid:ee(),meta:su,documentMeta:ee(su),annotation:ee(su),processingInstruction:ee(su),definition:Bn.defineModifier("definition"),constant:Bn.defineModifier("constant"),function:Bn.defineModifier("function"),standard:Bn.defineModifier("standard"),local:Bn.defineModifier("local"),special:Bn.defineModifier("special")};for(let n in Ce){let e=Ce[n];e instanceof Bn&&(e.name=n)}r4([{tag:Ce.link,class:"tok-link"},{tag:Ce.heading,class:"tok-heading"},{tag:Ce.emphasis,class:"tok-emphasis"},{tag:Ce.strong,class:"tok-strong"},{tag:Ce.keyword,class:"tok-keyword"},{tag:Ce.atom,class:"tok-atom"},{tag:Ce.bool,class:"tok-bool"},{tag:Ce.url,class:"tok-url"},{tag:Ce.labelName,class:"tok-labelName"},{tag:Ce.inserted,class:"tok-inserted"},{tag:Ce.deleted,class:"tok-deleted"},{tag:Ce.literal,class:"tok-literal"},{tag:Ce.string,class:"tok-string"},{tag:Ce.number,class:"tok-number"},{tag:[Ce.regexp,Ce.escape,Ce.special(Ce.string)],class:"tok-string2"},{tag:Ce.variableName,class:"tok-variableName"},{tag:Ce.local(Ce.variableName),class:"tok-variableName tok-local"},{tag:Ce.definition(Ce.variableName),class:"tok-variableName tok-definition"},{tag:Ce.special(Ce.variableName),class:"tok-variableName2"},{tag:Ce.definition(Ce.propertyName),class:"tok-propertyName tok-definition"},{tag:Ce.typeName,class:"tok-typeName"},{tag:Ce.namespace,class:"tok-namespace"},{tag:Ce.className,class:"tok-className"},{tag:Ce.macroName,class:"tok-macroName"},{tag:Ce.propertyName,class:"tok-propertyName"},{tag:Ce.operator,class:"tok-operator"},{tag:Ce.comment,class:"tok-comment"},{tag:Ce.meta,class:"tok-meta"},{tag:Ce.invalid,class:"tok-invalid"},{tag:Ce.punctuation,class:"tok-punctuation"}]);var fp;const ru=new $e,a4=new $e;class _i{constructor(e,t,i=[],r=""){this.data=e,this.name=r,Pe.prototype.hasOwnProperty("tree")||Object.defineProperty(Pe.prototype,"tree",{get(){return mi(this)}}),this.parser=t,this.extension=[ja.of(this),Pe.languageData.of((l,c,f)=>{let h=G1(l,c,f),p=h.type.prop(ru);if(!p)return[];let g=l.facet(p),y=h.type.prop(a4);if(y){let v=h.resolve(c-h.from,f);for(let w of y)if(w.test(v,l)){let k=l.facet(w.facet);return w.type=="replace"?k:k.concat(g)}}return g})].concat(i)}isActiveAt(e,t,i=-1){return G1(e,t,i).type.prop(ru)==this.data}findRegions(e){let t=e.facet(ja);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let i=[],r=(l,c)=>{if(l.prop(ru)==this.data){i.push({from:c,to:c+l.length});return}let f=l.prop($e.mounted);if(f){if(f.tree.prop(ru)==this.data){if(f.overlay)for(let h of f.overlay)i.push({from:h.from+c,to:h.to+c});else i.push({from:c,to:c+l.length});return}else if(f.overlay){let h=i.length;if(r(f.tree,f.overlay[0].from+c),i.length>h)return}}for(let h=0;h<l.children.length;h++){let p=l.children[h];p instanceof qt&&r(p,l.positions[h]+c)}};return r(mi(e),0),i}get allowsNesting(){return!0}}_i.setState=Ee.define();function G1(n,e,t){let i=n.facet(ja),r=mi(n).topNode;if(!i||i.allowsNesting)for(let l=r;l;l=l.enter(e,t,yt.ExcludeBuffers|yt.EnterBracketed))l.type.isTop&&(r=l);return r}function mi(n){let e=n.field(_i.state,!1);return e?e.tree:qt.empty}class l4{constructor(e){this.doc=e,this.cursorPos=0,this.string="",this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let i=this.cursorPos-this.string.length;return e<i||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-i,t-i)}}let ql=null;class Hu{constructor(e,t,i=[],r,l,c,f,h){this.parser=e,this.state=t,this.fragments=i,this.tree=r,this.treeLen=l,this.viewport=c,this.skipped=f,this.scheduleOn=h,this.parse=null,this.tempSkipped=[]}static create(e,t,i){return new Hu(e,t,[],qt.empty,0,i,[],null)}startParse(){return this.parser.startParse(new l4(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=qt.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var i;if(typeof e=="number"){let r=Date.now()+e;e=()=>Date.now()>r}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let r=this.parse.advance();if(r)if(this.fragments=this.withoutTempSkipped(hr.addTree(r,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=(i=this.parse.stoppedAt)!==null&&i!==void 0?i:this.state.doc.length,this.tree=r,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0;if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(hr.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=ql;ql=this;try{return e()}finally{ql=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=W1(e,t.from,t.to);return e}changes(e,t){let{fragments:i,tree:r,treeLen:l,viewport:c,skipped:f}=this;if(this.takeTree(),!e.empty){let h=[];if(e.iterChangedRanges((p,g,y,v)=>h.push({fromA:p,toA:g,fromB:y,toB:v})),i=hr.applyChanges(i,h),r=qt.empty,l=0,c={from:e.mapPos(c.from,-1),to:e.mapPos(c.to,1)},this.skipped.length){f=[];for(let p of this.skipped){let g=e.mapPos(p.from,1),y=e.mapPos(p.to,-1);g<y&&f.push({from:g,to:y})}}}return new Hu(this.parser,t,i,r,l,c,f,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let i=0;i<this.skipped.length;i++){let{from:r,to:l}=this.skipped[i];r<e.to&&l>e.from&&(this.fragments=W1(this.fragments,r,l),this.skipped.splice(i--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends QO{createParse(t,i,r){let l=r[0].from,c=r[r.length-1].to;return{parsedPos:l,advance(){let h=ql;if(h){for(let p of r)h.tempSkipped.push(p);e&&(h.scheduleOn=h.scheduleOn?Promise.all([h.scheduleOn,e]):e)}return this.parsedPos=c,new qt(Hn.none,[],[],c-l)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return ql}}function W1(n,e,t){return hr.applyChanges(n,[{fromA:e,toA:t,fromB:e,toB:t}])}class Na{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged&&this.tree==this.context.tree)return this;let t=this.context.changes(e.changes,e.state),i=this.context.treeLen==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.treeLen),t.viewport.to);return t.work(20,i)||t.takeTree(),new Na(t)}static init(e){let t=Math.min(3e3,e.doc.length),i=Hu.create(e.facet(ja).parser,e,{from:0,to:t});return i.work(20,t)||i.takeTree(),new Na(i)}}_i.state=Dt.define({create:Na.init,update(n,e){for(let t of e.effects)if(t.is(_i.setState))return t.value;return e.startState.facet(ja)!=e.state.facet(ja)?Na.init(e.state):n.apply(e)}});let $k=n=>{let e=setTimeout(()=>n(),500);return()=>clearTimeout(e)};typeof requestIdleCallback<"u"&&($k=n=>{let e=-1,t=setTimeout(()=>{e=requestIdleCallback(n,{timeout:400})},100);return()=>e<0?clearTimeout(t):cancelIdleCallback(e)});const hp=typeof navigator<"u"&&(!((fp=navigator.scheduling)===null||fp===void 0)&&fp.isInputPending)?()=>navigator.scheduling.isInputPending():null,o4=Gt.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(_i.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(_i.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=$k(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:i,viewport:{to:r}}=this.view,l=i.field(_i.state);if(l.tree==l.context.tree&&l.context.isDone(r+1e5))return;let c=Date.now()+Math.min(this.chunkBudget,100,e&&!hp?Math.max(25,e.timeRemaining()-5):1e9),f=l.context.treeLen<r&&i.doc.length>r+1e3,h=l.context.work(()=>hp&&hp()||Date.now()>c,r+(f?0:1e5));this.chunkBudget-=Date.now()-t,(h||this.chunkBudget<=0)&&(l.context.takeTree(),this.view.dispatch({effects:_i.setState.of(new Na(l.context))})),this.chunkBudget>0&&!(h&&!f)&&this.scheduleWork(),this.checkAsyncSchedule(l.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(t=>In(this.view.state,t)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),ja=re.define({combine(n){return n.length?n[0]:null},enables:n=>[_i.state,o4,se.contentAttributes.compute([n],e=>{let t=e.facet(n);return t&&t.name?{"data-language":t.name}:{}})]}),c4=re.define(),ag=re.define({combine:n=>{if(!n.length)return"  ";let e=n[0];if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(n[0]));return e}});function qu(n){let e=n.facet(ag);return e.charCodeAt(0)==9?n.tabSize*e.length:e.length}function Vu(n,e){let t="",i=n.tabSize,r=n.facet(ag)[0];if(r=="	"){for(;e>=i;)t+="	",e-=i;r=" "}for(let l=0;l<e;l++)t+=r;return t}function Gk(n,e){n instanceof Pe&&(n=new pf(n));for(let i of n.state.facet(c4)){let r=i(n,e);if(r!==void 0)return r}let t=mi(n.state);return t.length>=e?f4(n,t,e):null}class pf{constructor(e,t={}){this.state=e,this.options=t,this.unit=qu(e)}lineAt(e,t=1){let i=this.state.doc.lineAt(e),{simulateBreak:r,simulateDoubleBreak:l}=this.options;return r!=null&&r>=i.from&&r<=i.to?l&&r==e?{text:"",from:e}:(t<0?r<e:r<=e)?{text:i.text.slice(r-i.from),from:r}:{text:i.text.slice(0,r-i.from),from:i.from}:i}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return"";let{text:i,from:r}=this.lineAt(e,t);return i.slice(e-r,Math.min(i.length,e+100-r))}column(e,t=1){let{text:i,from:r}=this.lineAt(e,t),l=this.countColumn(i,e-r),c=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return c>-1&&(l+=c-this.countColumn(i,i.search(/\S|$/))),l}countColumn(e,t=e.length){return go(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:i,from:r}=this.lineAt(e,t),l=this.options.overrideIndentation;if(l){let c=l(r);if(c>-1)return c}return this.countColumn(i,i.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const u4=new $e;function f4(n,e,t){let i=e.resolveStack(t),r=e.resolveInner(t,-1).resolve(t,0).enterUnfinishedNodesBefore(t);if(r!=i.node){let l=[];for(let c=r;c&&!(c.from<i.node.from||c.to>i.node.to||c.from==i.node.from&&c.type==i.node.type);c=c.parent)l.push(c);for(let c=l.length-1;c>=0;c--)i={node:l[c],next:i}}return Wk(i,n,t)}function Wk(n,e,t){for(let i=n;i;i=i.next){let r=d4(i.node);if(r)return r(lg.create(e,t,i))}return 0}function h4(n){return n.pos==n.options.simulateBreak&&n.options.simulateDoubleBreak}function d4(n){let e=n.type.prop(u4);if(e)return e;let t=n.firstChild,i;if(t&&(i=t.type.prop($e.closedBy))){let r=n.lastChild,l=r&&i.indexOf(r.name)>-1;return c=>y4(c,!0,1,void 0,l&&!h4(c)?r.from:void 0)}return n.parent==null?p4:null}function p4(){return 0}class lg extends pf{constructor(e,t,i){super(e.state,e.options),this.base=e,this.pos=t,this.context=i}get node(){return this.context.node}static create(e,t,i){return new lg(e,t,i)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let i=e.resolve(t.from);for(;i.parent&&i.parent.from==i.from;)i=i.parent;if(m4(i,e))break;t=this.state.doc.lineAt(i.from)}return this.lineIndent(t.from)}continue(){return Wk(this.context.next,this.base,this.pos)}}function m4(n,e){for(let t=e;t;t=t.parent)if(n==t)return!0;return!1}function g4(n){let e=n.node,t=e.childAfter(e.from),i=e.lastChild;if(!t)return null;let r=n.options.simulateBreak,l=n.state.doc.lineAt(t.from),c=r==null||r<=l.from?l.to:Math.min(l.to,r);for(let f=t.to;;){let h=e.childAfter(f);if(!h||h==i)return null;if(!h.type.isSkipped){if(h.from>=c)return null;let p=/^ */.exec(l.text.slice(t.to-l.from))[0].length;return{from:t.from,to:t.to+p}}f=h.to}}function y4(n,e,t,i,r){let l=n.textAfter,c=l.match(/^\s*/)[0].length,f=i&&l.slice(c,c+i.length)==i||r==n.pos+c,h=g4(n);return h?f?n.column(h.from):n.column(h.to):n.baseIndent+(f?0:n.unit*t)}const b4=se.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),Pk=1e4,Yk="()[]{}",Kk=re.define({combine(n){return zs(n,{afterCursor:!0,brackets:Yk,maxScanDistance:Pk,renderMatch:w4})}}),v4=be.mark({class:"cm-matchingBracket"}),x4=be.mark({class:"cm-nonmatchingBracket"});function w4(n){let e=[],t=n.matched?v4:x4;return e.push(t.range(n.start.from,n.start.to)),n.end&&e.push(t.range(n.end.from,n.end.to)),e}function P1(n){let e=[],t=n.facet(Kk);for(let i of n.selection.ranges){if(!i.empty)continue;let r=hi(n,i.head,-1,t)||i.head>0&&hi(n,i.head-1,1,t)||t.afterCursor&&(hi(n,i.head,1,t)||i.head<n.doc.length&&hi(n,i.head+1,-1,t));r&&(e=e.concat(t.renderMatch(r,n)))}return be.set(e,!0)}const k4=Gt.fromClass(class{constructor(n){this.paused=!1,this.decorations=P1(n.state)}update(n){(n.docChanged||n.selectionSet||this.paused)&&(n.view.composing?(this.decorations=this.decorations.map(n.changes),this.paused=!0):(this.decorations=P1(n.state),this.paused=!1))}},{decorations:n=>n.decorations}),S4=[k4,b4];function A4(n={}){return[Kk.of(n),S4]}const C4=new $e;function ym(n,e,t){let i=n.prop(e<0?$e.openedBy:$e.closedBy);if(i)return i;if(n.name.length==1){let r=t.indexOf(n.name);if(r>-1&&r%2==(e<0?1:0))return[t[r+e]]}return null}function bm(n){let e=n.type.prop(C4);return e?e(n.node):n}function hi(n,e,t,i={}){let r=i.maxScanDistance||Pk,l=i.brackets||Yk,c=mi(n),f=c.resolveInner(e,t);for(let h=f;h;h=h.parent){let p=ym(h.type,t,l);if(p&&h.from<h.to){let g=bm(h);if(g&&(t>0?e>=g.from&&e<g.to:e>g.from&&e<=g.to))return T4(n,e,t,h,g,p,l)}}return M4(n,e,t,c,f.type,r,l)}function T4(n,e,t,i,r,l,c){let f=i.parent,h={from:r.from,to:r.to},p=0,g=f?.cursor();if(g&&(t<0?g.childBefore(i.from):g.childAfter(i.to)))do if(t<0?g.to<=i.from:g.from>=i.to){if(p==0&&l.indexOf(g.type.name)>-1&&g.from<g.to){let y=bm(g);return{start:h,end:y?{from:y.from,to:y.to}:void 0,matched:!0}}else if(ym(g.type,t,c))p++;else if(ym(g.type,-t,c)){if(p==0){let y=bm(g);return{start:h,end:y&&y.from<y.to?{from:y.from,to:y.to}:void 0,matched:!1}}p--}}while(t<0?g.prevSibling():g.nextSibling());return{start:h,matched:!1}}function M4(n,e,t,i,r,l,c){if(t<0?!e:e==n.doc.length)return null;let f=t<0?n.sliceDoc(e-1,e):n.sliceDoc(e,e+1),h=c.indexOf(f);if(h<0||h%2==0!=t>0)return null;let p={from:t<0?e-1:e,to:t>0?e+1:e},g=n.doc.iterRange(e,t>0?n.doc.length:0),y=0;for(let v=0;!g.next().done&&v<=l;){let w=g.value;t<0&&(v+=w.length);let k=e+v*t;for(let A=t>0?0:w.length-1,C=t>0?w.length:-1;A!=C;A+=t){let O=c.indexOf(w[A]);if(!(O<0||i.resolveInner(k+A,1).type!=r))if(O%2==0==t>0)y++;else{if(y==1)return{start:p,end:{from:k+A,to:k+A+1},matched:O>>1==h>>1};y--}}t>0&&(v+=w.length)}return g.done?{start:p,matched:!1}:null}const E4=Object.create(null),Y1=[Hn.none],K1=[],I1=Object.create(null),R4=Object.create(null);for(let[n,e]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])R4[n]=O4(E4,e);function dp(n,e){K1.indexOf(n)>-1||(K1.push(n),console.warn(e))}function O4(n,e){let t=[];for(let f of e.split(" ")){let h=[];for(let p of f.split(".")){let g=n[p]||Ce[p];g?typeof g=="function"?h.length?h=h.map(g):dp(p,`Modifier ${p} used at start of tag`):h.length?dp(p,`Tag ${p} used as modifier`):h=Array.isArray(g)?g:[g]:dp(p,`Unknown highlighting tag ${p}`)}for(let p of h)t.push(p)}if(!t.length)return 0;let i=e.replace(/ /g,"_"),r=i+" "+t.map(f=>f.id),l=I1[r];if(l)return l.id;let c=I1[r]=Hn.define({id:Y1.length,name:i,props:[i4({[i]:t})]});return Y1.push(c),c.id}it.RTL,it.LTR;const ho={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},cr=Ee.define({map(n,e){let t=e.mapPos(n,-1,Zt.TrackAfter);return t??void 0}}),og=new class extends Es{};og.startSide=1;og.endSide=-1;const Ik=Dt.define({create(){return Me.empty},update(n,e){if(n=n.map(e.changes),e.selection){let t=e.state.doc.lineAt(e.selection.main.head);n=n.update({filter:i=>i>=t.from&&i<=t.to})}for(let t of e.effects)t.is(cr)&&(n=n.update({add:[og.range(t.value,t.value+1)]}));return n}});function D4(){return[j4,Ik]}const pp="()[]{}<>«»»«［］｛｝";function Fk(n){for(let e=0;e<pp.length;e+=2)if(pp.charCodeAt(e)==n)return pp.charAt(e+1);return Lx(n<128?n:n+1)}function Xk(n,e){return n.languageDataAt("closeBrackets",e)[0]||ho}const N4=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),j4=se.inputHandler.of((n,e,t,i)=>{if((N4?n.composing:n.compositionStarted)||n.state.readOnly)return!1;let r=n.state.selection.main;if(i.length>2||i.length==2&&mo(yr(i,0))==1||e!=r.from||t!=r.to)return!1;let l=L4(n.state,i);return l?(n.dispatch(l),!0):!1}),B4=({state:n,dispatch:e})=>{if(n.readOnly)return!1;let i=Xk(n,n.selection.main.head).brackets||ho.brackets,r=null,l=n.changeByRange(c=>{if(c.empty){let f=_4(n.doc,c.head);for(let h of i)if(h==f&&mf(n.doc,c.head)==Fk(yr(h,0)))return{changes:{from:c.head-h.length,to:c.head+h.length},range:Y.cursor(c.head-h.length)}}return{range:r=c}});return r||e(n.update(l,{scrollIntoView:!0,userEvent:"delete.backward"})),!r},z4=[{key:"Backspace",run:B4}];function L4(n,e){let t=Xk(n,n.selection.main.head),i=t.brackets||ho.brackets;for(let r of i){let l=Fk(yr(r,0));if(e==r)return l==r?V4(n,r,i.indexOf(r+r+r)>-1,t):H4(n,r,l,t.before||ho.before);if(e==l&&Qk(n,n.selection.main.from))return q4(n,r,l)}return null}function Qk(n,e){let t=!1;return n.field(Ik).between(0,n.doc.length,i=>{i==e&&(t=!0)}),t}function mf(n,e){let t=n.sliceString(e,e+2);return t.slice(0,mo(yr(t,0)))}function _4(n,e){let t=n.sliceString(e-2,e);return mo(yr(t,0))==t.length?t:t.slice(1)}function H4(n,e,t,i){let r=null,l=n.changeByRange(c=>{if(!c.empty)return{changes:[{insert:e,from:c.from},{insert:t,from:c.to}],effects:cr.of(c.to+e.length),range:Y.range(c.anchor+e.length,c.head+e.length)};let f=mf(n.doc,c.head);return!f||/\s/.test(f)||i.indexOf(f)>-1?{changes:{insert:e+t,from:c.head},effects:cr.of(c.head+e.length),range:Y.cursor(c.head+e.length)}:{range:r=c}});return r?null:n.update(l,{scrollIntoView:!0,userEvent:"input.type"})}function q4(n,e,t){let i=null,r=n.changeByRange(l=>l.empty&&mf(n.doc,l.head)==t?{changes:{from:l.head,to:l.head+t.length,insert:t},range:Y.cursor(l.head+t.length)}:i={range:l});return i?null:n.update(r,{scrollIntoView:!0,userEvent:"input.type"})}function V4(n,e,t,i){let r=i.stringPrefixes||ho.stringPrefixes,l=null,c=n.changeByRange(f=>{if(!f.empty)return{changes:[{insert:e,from:f.from},{insert:e,from:f.to}],effects:cr.of(f.to+e.length),range:Y.range(f.anchor+e.length,f.head+e.length)};let h=f.head,p=mf(n.doc,h),g;if(p==e){if(F1(n,h))return{changes:{insert:e+e,from:h},effects:cr.of(h+e.length),range:Y.cursor(h+e.length)};if(Qk(n,h)){let v=t&&n.sliceDoc(h,h+e.length*3)==e+e+e?e+e+e:e;return{changes:{from:h,to:h+v.length,insert:v},range:Y.cursor(h+v.length)}}}else{if(t&&n.sliceDoc(h-2*e.length,h)==e+e&&(g=X1(n,h-2*e.length,r))>-1&&F1(n,g))return{changes:{insert:e+e+e+e,from:h},effects:cr.of(h+e.length),range:Y.cursor(h+e.length)};if(n.charCategorizer(h)(p)!=ot.Word&&X1(n,h,r)>-1&&!U4(n,h,e,r))return{changes:{insert:e+e,from:h},effects:cr.of(h+e.length),range:Y.cursor(h+e.length)}}return{range:l=f}});return l?null:n.update(c,{scrollIntoView:!0,userEvent:"input.type"})}function F1(n,e){let t=mi(n).resolveInner(e+1);return t.parent&&t.from==e}function U4(n,e,t,i){let r=mi(n).resolveInner(e,-1),l=i.reduce((c,f)=>Math.max(c,f.length),0);for(let c=0;c<5;c++){let f=n.sliceDoc(r.from,Math.min(r.to,r.from+t.length+l)),h=f.indexOf(t);if(!h||h>-1&&i.indexOf(f.slice(0,h))>-1){let g=r.firstChild;for(;g&&g.from==r.from&&g.to-g.from>t.length+h;){if(n.sliceDoc(g.to-t.length,g.to)==t)return!1;g=g.firstChild}return!0}let p=r.to==e&&r.parent;if(!p)break;r=p}return!1}function X1(n,e,t){let i=n.charCategorizer(e);if(i(n.sliceDoc(e-1,e))!=ot.Word)return e;for(let r of t){let l=e-r.length;if(n.sliceDoc(l,e)==r&&i(n.sliceDoc(l-1,l))!=ot.Word)return l}return-1}const $4=n=>{let{state:e}=n,t=e.doc.lineAt(e.selection.main.from),i=ug(n.state,t.from);return i.line?G4(n):i.block?P4(n):!1};function cg(n,e){return({state:t,dispatch:i})=>{if(t.readOnly)return!1;let r=n(e,t);return r?(i(t.update(r)),!0):!1}}const G4=cg(I4,0),W4=cg(Zk,0),P4=cg((n,e)=>Zk(n,e,K4(e)),0);function ug(n,e){let t=n.languageDataAt("commentTokens",e,1);return t.length?t[0]:{}}const Vl=50;function Y4(n,{open:e,close:t},i,r){let l=n.sliceDoc(i-Vl,i),c=n.sliceDoc(r,r+Vl),f=/\s*$/.exec(l)[0].length,h=/^\s*/.exec(c)[0].length,p=l.length-f;if(l.slice(p-e.length,p)==e&&c.slice(h,h+t.length)==t)return{open:{pos:i-f,margin:f&&1},close:{pos:r+h,margin:h&&1}};let g,y;r-i<=2*Vl?g=y=n.sliceDoc(i,r):(g=n.sliceDoc(i,i+Vl),y=n.sliceDoc(r-Vl,r));let v=/^\s*/.exec(g)[0].length,w=/\s*$/.exec(y)[0].length,k=y.length-w-t.length;return g.slice(v,v+e.length)==e&&y.slice(k,k+t.length)==t?{open:{pos:i+v+e.length,margin:/\s/.test(g.charAt(v+e.length))?1:0},close:{pos:r-w-t.length,margin:/\s/.test(y.charAt(k-1))?1:0}}:null}function K4(n){let e=[];for(let t of n.selection.ranges){let i=n.doc.lineAt(t.from),r=t.to<=i.to?i:n.doc.lineAt(t.to);r.from>i.from&&r.from==t.to&&(r=t.to==i.to+1?i:n.doc.lineAt(t.to-1));let l=e.length-1;l>=0&&e[l].to>i.from?e[l].to=r.to:e.push({from:i.from+/^\s*/.exec(i.text)[0].length,to:r.to})}return e}function Zk(n,e,t=e.selection.ranges){let i=t.map(l=>ug(e,l.from).block);if(!i.every(l=>l))return null;let r=t.map((l,c)=>Y4(e,i[c],l.from,l.to));if(n!=2&&!r.every(l=>l))return{changes:e.changes(t.map((l,c)=>r[c]?[]:[{from:l.from,insert:i[c].open+" "},{from:l.to,insert:" "+i[c].close}]))};if(n!=1&&r.some(l=>l)){let l=[];for(let c=0,f;c<r.length;c++)if(f=r[c]){let h=i[c],{open:p,close:g}=f;l.push({from:p.pos-h.open.length,to:p.pos+p.margin},{from:g.pos-g.margin,to:g.pos+h.close.length})}return{changes:l}}return null}function I4(n,e,t=e.selection.ranges){let i=[],r=-1;e:for(let{from:l,to:c}of t){let f=i.length,h=1e9,p;for(let g=l;g<=c;){let y=e.doc.lineAt(g);if(p==null&&(p=ug(e,y.from).line,!p))continue e;if(y.from>r&&(l==c||c>y.from)){r=y.from;let v=/^\s*/.exec(y.text)[0].length,w=v==y.length,k=y.text.slice(v,v+p.length)==p?v:-1;v<y.text.length&&v<h&&(h=v),i.push({line:y,comment:k,token:p,indent:v,empty:w,single:!1})}g=y.to+1}if(h<1e9)for(let g=f;g<i.length;g++)i[g].indent<i[g].line.text.length&&(i[g].indent=h);i.length==f+1&&(i[f].single=!0)}if(n!=2&&i.some(l=>l.comment<0&&(!l.empty||l.single))){let l=[];for(let{line:f,token:h,indent:p,empty:g,single:y}of i)(y||!g)&&l.push({from:f.from+p,insert:h+" "});let c=e.changes(l);return{changes:c,selection:e.selection.map(c,1)}}else if(n!=1&&i.some(l=>l.comment>=0)){let l=[];for(let{line:c,comment:f,token:h}of i)if(f>=0){let p=c.from+f,g=p+h.length;c.text[g-c.from]==" "&&g++,l.push({from:p,to:g})}return{changes:l}}return null}const vm=Bs.define(),F4=Bs.define(),X4=re.define(),Jk=re.define({combine(n){return zs(n,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(i,r)=>e(i,r)||t(i,r)})}}),eS=Dt.define({create(){return di.empty},update(n,e){let t=e.state.facet(Jk),i=e.annotation(vm);if(i){let h=cn.fromTransaction(e,i.selection),p=i.side,g=p==0?n.undone:n.done;return h?g=Uu(g,g.length,t.minDepth,h):g=iS(g,e.startState.selection),new di(p==0?i.rest:g,p==0?g:i.rest)}let r=e.annotation(F4);if((r=="full"||r=="before")&&(n=n.isolate()),e.annotation(Tt.addToHistory)===!1)return e.changes.empty?n:n.addMapping(e.changes.desc);let l=cn.fromTransaction(e),c=e.annotation(Tt.time),f=e.annotation(Tt.userEvent);return l?n=n.addChanges(l,c,f,t,e):e.selection&&(n=n.addSelection(e.startState.selection,c,f,t.newGroupDelay)),(r=="full"||r=="after")&&(n=n.isolate()),n},toJSON(n){return{done:n.done.map(e=>e.toJSON()),undone:n.undone.map(e=>e.toJSON())}},fromJSON(n){return new di(n.done.map(cn.fromJSON),n.undone.map(cn.fromJSON))}});function Q4(n={}){return[eS,Jk.of(n),se.domEventHandlers({beforeinput(e,t){let i=e.inputType=="historyUndo"?tS:e.inputType=="historyRedo"?xm:null;return i?(e.preventDefault(),i(t)):!1}})]}function gf(n,e){return function({state:t,dispatch:i}){if(!e&&t.readOnly)return!1;let r=t.field(eS,!1);if(!r)return!1;let l=r.pop(n,t,e);return l?(i(l),!0):!1}}const tS=gf(0,!1),xm=gf(1,!1),Z4=gf(0,!0),J4=gf(1,!0);class cn{constructor(e,t,i,r,l){this.changes=e,this.effects=t,this.mapped=i,this.startSelection=r,this.selectionsAfter=l}setSelAfter(e){return new cn(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,i;return{changes:(e=this.changes)===null||e===void 0?void 0:e.toJSON(),mapped:(t=this.mapped)===null||t===void 0?void 0:t.toJSON(),startSelection:(i=this.startSelection)===null||i===void 0?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(r=>r.toJSON())}}static fromJSON(e){return new cn(e.changes&&Ct.fromJSON(e.changes),[],e.mapped&&pi.fromJSON(e.mapped),e.startSelection&&Y.fromJSON(e.startSelection),e.selectionsAfter.map(Y.fromJSON))}static fromTransaction(e,t){let i=Ln;for(let r of e.startState.facet(X4)){let l=r(e);l.length&&(i=i.concat(l))}return!i.length&&e.changes.empty?null:new cn(e.changes.invert(e.startState.doc),i,void 0,t||e.startState.selection,Ln)}static selection(e){return new cn(void 0,Ln,void 0,void 0,e)}}function Uu(n,e,t,i){let r=e+1>t+20?e-t-1:0,l=n.slice(r,e);return l.push(i),l}function e8(n,e){let t=[],i=!1;return n.iterChangedRanges((r,l)=>t.push(r,l)),e.iterChangedRanges((r,l,c,f)=>{for(let h=0;h<t.length;){let p=t[h++],g=t[h++];f>=p&&c<=g&&(i=!0)}}),i}function t8(n,e){return n.ranges.length==e.ranges.length&&n.ranges.filter((t,i)=>t.empty!=e.ranges[i].empty).length===0}function nS(n,e){return n.length?e.length?n.concat(e):n:e}const Ln=[],n8=200;function iS(n,e){if(n.length){let t=n[n.length-1],i=t.selectionsAfter.slice(Math.max(0,t.selectionsAfter.length-n8));return i.length&&i[i.length-1].eq(e)?n:(i.push(e),Uu(n,n.length-1,1e9,t.setSelAfter(i)))}else return[cn.selection([e])]}function i8(n){let e=n[n.length-1],t=n.slice();return t[n.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),t}function mp(n,e){if(!n.length)return n;let t=n.length,i=Ln;for(;t;){let r=s8(n[t-1],e,i);if(r.changes&&!r.changes.empty||r.effects.length){let l=n.slice(0,t);return l[t-1]=r,l}else e=r.mapped,t--,i=r.selectionsAfter}return i.length?[cn.selection(i)]:Ln}function s8(n,e,t){let i=nS(n.selectionsAfter.length?n.selectionsAfter.map(f=>f.map(e)):Ln,t);if(!n.changes)return cn.selection(i);let r=n.changes.map(e),l=e.mapDesc(n.changes,!0),c=n.mapped?n.mapped.composeDesc(l):l;return new cn(r,Ee.mapEffects(n.effects,e),c,n.startSelection.map(l),i)}const r8=/^(input\.type|delete)($|\.)/;class di{constructor(e,t,i=0,r=void 0){this.done=e,this.undone=t,this.prevTime=i,this.prevUserEvent=r}isolate(){return this.prevTime?new di(this.done,this.undone):this}addChanges(e,t,i,r,l){let c=this.done,f=c[c.length-1];return f&&f.changes&&!f.changes.empty&&e.changes&&(!i||r8.test(i))&&(!f.selectionsAfter.length&&t-this.prevTime<r.newGroupDelay&&r.joinToEvent(l,e8(f.changes,e.changes))||i=="input.type.compose")?c=Uu(c,c.length-1,r.minDepth,new cn(e.changes.compose(f.changes),nS(Ee.mapEffects(e.effects,f.changes),f.effects),f.mapped,f.startSelection,Ln)):c=Uu(c,c.length,r.minDepth,e),new di(c,Ln,t,i)}addSelection(e,t,i,r){let l=this.done.length?this.done[this.done.length-1].selectionsAfter:Ln;return l.length>0&&t-this.prevTime<r&&i==this.prevUserEvent&&i&&/^select($|\.)/.test(i)&&t8(l[l.length-1],e)?this:new di(iS(this.done,e),this.undone,t,i)}addMapping(e){return new di(mp(this.done,e),mp(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,i){let r=e==0?this.done:this.undone;if(r.length==0)return null;let l=r[r.length-1],c=l.selectionsAfter[0]||(l.startSelection?l.startSelection.map(l.changes.invertedDesc,1):t.selection);if(i&&l.selectionsAfter.length)return t.update({selection:l.selectionsAfter[l.selectionsAfter.length-1],annotations:vm.of({side:e,rest:i8(r),selection:c}),userEvent:e==0?"select.undo":"select.redo",scrollIntoView:!0});if(l.changes){let f=r.length==1?Ln:r.slice(0,r.length-1);return l.mapped&&(f=mp(f,l.mapped)),t.update({changes:l.changes,selection:l.startSelection,effects:l.effects,annotations:vm.of({side:e,rest:f,selection:c}),filter:!1,userEvent:e==0?"undo":"redo",scrollIntoView:!0})}else return null}}di.empty=new di(Ln,Ln);const a8=[{key:"Mod-z",run:tS,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:xm,preventDefault:!0},{linux:"Ctrl-Shift-z",run:xm,preventDefault:!0},{key:"Mod-u",run:Z4,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:J4,preventDefault:!0}];function za(n,e){return Y.create(n.ranges.map(e),n.mainIndex)}function Xn(n,e){return n.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function Qn({state:n,dispatch:e},t){let i=za(n.selection,t);return i.eq(n.selection,!0)?!1:(e(Xn(n,i)),!0)}function yf(n,e){return Y.cursor(e?n.to:n.from)}function sS(n,e){return Qn(n,t=>t.empty?n.moveByChar(t,e):yf(t,e))}function Wt(n){return n.textDirectionAt(n.state.selection.main.head)==it.LTR}const rS=n=>sS(n,!Wt(n)),aS=n=>sS(n,Wt(n));function lS(n,e){return Qn(n,t=>t.empty?n.moveByGroup(t,e):yf(t,e))}const l8=n=>lS(n,!Wt(n)),o8=n=>lS(n,Wt(n));function c8(n,e,t){if(e.type.prop(t))return!0;let i=e.to-e.from;return i&&(i>2||/[^\s,.;:]/.test(n.sliceDoc(e.from,e.to)))||e.firstChild}function bf(n,e,t){let i=mi(n).resolveInner(e.head),r=t?$e.closedBy:$e.openedBy;for(let h=e.head;;){let p=t?i.childAfter(h):i.childBefore(h);if(!p)break;c8(n,p,r)?i=p:h=t?p.to:p.from}let l=i.type.prop(r),c,f;return l&&(c=t?hi(n,i.from,1):hi(n,i.to,-1))&&c.matched?f=t?c.end.to:c.end.from:f=t?i.to:i.from,Y.cursor(f,t?-1:1)}const u8=n=>Qn(n,e=>bf(n.state,e,!Wt(n))),f8=n=>Qn(n,e=>bf(n.state,e,Wt(n)));function oS(n,e){return Qn(n,t=>{if(!t.empty)return yf(t,e);let i=n.moveVertically(t,e);return i.head!=t.head?i:n.moveToLineBoundary(t,e)})}const cS=n=>oS(n,!1),uS=n=>oS(n,!0);function fS(n){let e=n.scrollDOM.clientHeight<n.scrollDOM.scrollHeight-2,t=0,i=0,r;if(e){for(let l of n.state.facet(se.scrollMargins)){let c=l(n);c?.top&&(t=Math.max(c?.top,t)),c?.bottom&&(i=Math.max(c?.bottom,i))}r=n.scrollDOM.clientHeight-t-i}else r=(n.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:t,marginBottom:i,selfScroll:e,height:Math.max(n.defaultLineHeight,r-5)}}function hS(n,e){let t=fS(n),{state:i}=n,r=za(i.selection,c=>c.empty?n.moveVertically(c,e,t.height):yf(c,e));if(r.eq(i.selection))return!1;let l;if(t.selfScroll){let c=n.coordsAtPos(i.selection.main.head),f=n.scrollDOM.getBoundingClientRect(),h=f.top+t.marginTop,p=f.bottom-t.marginBottom;c&&c.top>h&&c.bottom<p&&(l=se.scrollIntoView(r.main.head,{y:"start",yMargin:c.top-h}))}return n.dispatch(Xn(i,r),{effects:l}),!0}const Q1=n=>hS(n,!1),wm=n=>hS(n,!0);function Ls(n,e,t){let i=n.lineBlockAt(e.head),r=n.moveToLineBoundary(e,t);if(r.head==e.head&&r.head!=(t?i.to:i.from)&&(r=n.moveToLineBoundary(e,t,!1)),!t&&r.head==i.from&&i.length){let l=/^\s*/.exec(n.state.sliceDoc(i.from,Math.min(i.from+100,i.to)))[0].length;l&&e.head!=i.from+l&&(r=Y.cursor(i.from+l))}return r}const h8=n=>Qn(n,e=>Ls(n,e,!0)),d8=n=>Qn(n,e=>Ls(n,e,!1)),p8=n=>Qn(n,e=>Ls(n,e,!Wt(n))),m8=n=>Qn(n,e=>Ls(n,e,Wt(n))),g8=n=>Qn(n,e=>Y.cursor(n.lineBlockAt(e.head).from,1)),y8=n=>Qn(n,e=>Y.cursor(n.lineBlockAt(e.head).to,-1));function b8(n,e,t){let i=!1,r=za(n.selection,l=>{let c=hi(n,l.head,-1)||hi(n,l.head,1)||l.head>0&&hi(n,l.head-1,1)||l.head<n.doc.length&&hi(n,l.head+1,-1);if(!c||!c.end)return l;i=!0;let f=c.start.from==l.head?c.end.to:c.end.from;return Y.cursor(f)});return i?(e(Xn(n,r)),!0):!1}const v8=({state:n,dispatch:e})=>b8(n,e);function qn(n,e,t){let i=za(n.state.selection,r=>{r.undirectional&&r.head>=r.anchor!=e&&(r=Y.range(r.head,r.anchor));let l=t(r);return Y.range(r.anchor,l.head,l.goalColumn,l.bidiLevel||void 0,l.assoc)});return i.eq(n.state.selection)?!1:(n.dispatch(Xn(n.state,i)),!0)}function dS(n,e){return qn(n,e,t=>n.moveByChar(t,e))}const pS=n=>dS(n,!Wt(n)),mS=n=>dS(n,Wt(n));function gS(n,e){return qn(n,e,t=>n.moveByGroup(t,e))}const x8=n=>gS(n,!Wt(n)),w8=n=>gS(n,Wt(n)),k8=n=>{let e=!Wt(n);return qn(n,e,t=>bf(n.state,t,e))},S8=n=>{let e=Wt(n);return qn(n,e,t=>bf(n.state,t,e))};function yS(n,e){return qn(n,e,t=>n.moveVertically(t,e))}const bS=n=>yS(n,!1),vS=n=>yS(n,!0);function xS(n,e){return qn(n,e,t=>n.moveVertically(t,e,fS(n).height))}const Z1=n=>xS(n,!1),J1=n=>xS(n,!0),A8=n=>qn(n,!0,e=>Ls(n,e,!0)),C8=n=>qn(n,!1,e=>Ls(n,e,!1)),T8=n=>{let e=!Wt(n);return qn(n,e,t=>Ls(n,t,e))},M8=n=>{let e=Wt(n);return qn(n,e,t=>Ls(n,t,e))},E8=n=>qn(n,!1,e=>Y.cursor(n.lineBlockAt(e.head).from)),R8=n=>qn(n,!0,e=>Y.cursor(n.lineBlockAt(e.head).to)),ex=({state:n,dispatch:e})=>(e(Xn(n,{anchor:0})),!0),tx=({state:n,dispatch:e})=>(e(Xn(n,{anchor:n.doc.length})),!0),nx=({state:n,dispatch:e})=>(e(Xn(n,{anchor:n.selection.main.anchor,head:0})),!0),ix=({state:n,dispatch:e})=>(e(Xn(n,{anchor:n.selection.main.anchor,head:n.doc.length})),!0),O8=({state:n,dispatch:e})=>(e(n.update({selection:{anchor:0,head:n.doc.length},userEvent:"select"})),!0),D8=({state:n,dispatch:e})=>{let t=vf(n).map(({from:i,to:r})=>Y.range(i,Math.min(r+1,n.doc.length)));return e(n.update({selection:Y.create(t),userEvent:"select"})),!0},N8=({state:n,dispatch:e})=>{let t=za(n.selection,i=>{let r=mi(n),l=r.resolveStack(i.from,1);if(i.empty){let c=r.resolveStack(i.from,-1);c.node.from>=l.node.from&&c.node.to<=l.node.to&&(l=c)}for(let c=l;c;c=c.next){let{node:f}=c;if((f.from<i.from&&f.to>=i.to||f.to>i.to&&f.from<=i.from)&&c.next)return Y.range(f.to,f.from)}return i});return t.eq(n.selection)?!1:(e(Xn(n,t)),!0)};function wS(n,e){let{state:t}=n,i=t.selection,r=t.selection.ranges.slice();for(let l of t.selection.ranges){let c=t.doc.lineAt(l.head);if(e?c.to<n.state.doc.length:c.from>0)for(let f=l;;){let h=n.moveVertically(f,e);if(h.head<c.from||h.head>c.to){r.some(p=>p.head==h.head)||r.push(h);break}else{if(h.head==f.head)break;f=h}}}return r.length==i.ranges.length?!1:(n.dispatch(Xn(t,Y.create(r,r.length-1))),!0)}const j8=n=>wS(n,!1),B8=n=>wS(n,!0),z8=({state:n,dispatch:e})=>{let t=n.selection,i=null;return t.ranges.length>1?i=Y.create([t.main]):t.main.empty||(i=Y.create([Y.cursor(t.main.head)])),i?(e(Xn(n,i)),!0):!1};function wo(n,e){if(n.state.readOnly)return!1;let t="delete.selection",{state:i}=n,r=i.changeByRange(l=>{let{from:c,to:f}=l;if(c==f){let h=e(l);h<c?(t="delete.backward",h=au(n,h,!1)):h>c&&(t="delete.forward",h=au(n,h,!0)),c=Math.min(c,h),f=Math.max(f,h)}else c=au(n,c,!1),f=au(n,f,!0);return c==f?{range:l}:{changes:{from:c,to:f},range:Y.cursor(c,c<l.head?-1:1)}});return r.changes.empty?!1:(n.dispatch(i.update(r,{scrollIntoView:!0,userEvent:t,effects:t=="delete.selection"?se.announce.of(i.phrase("Selection deleted")):void 0})),!0)}function au(n,e,t){if(n instanceof se)for(let i of n.state.facet(se.atomicRanges).map(r=>r(n)))i.between(e,e,(r,l)=>{r<e&&l>e&&(e=t?l:r)});return e}const kS=(n,e,t)=>wo(n,i=>{let r=i.from,{state:l}=n,c=l.doc.lineAt(r),f,h;if(t&&!e&&r>c.from&&r<c.from+200&&!/[^ \t]/.test(f=c.text.slice(0,r-c.from))){if(f[f.length-1]=="	")return r-1;let p=go(f,l.tabSize),g=p%qu(l)||qu(l);for(let y=0;y<g&&f[f.length-1-y]==" ";y++)r--;h=r}else h=Ot(c.text,r-c.from,e,e)+c.from,h==r&&c.number!=(e?l.doc.lines:1)?h+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(c.text.slice(h-c.from,r-c.from))&&(h=Ot(c.text,h-c.from,!1,!1)+c.from);return h}),km=n=>kS(n,!1,!0),SS=n=>kS(n,!0,!1),AS=(n,e)=>wo(n,t=>{let i=t.head,{state:r}=n,l=r.doc.lineAt(i),c=r.charCategorizer(i);for(let f=null;;){if(i==(e?l.to:l.from)){i==t.head&&l.number!=(e?r.doc.lines:1)&&(i+=e?1:-1);break}let h=Ot(l.text,i-l.from,e)+l.from,p=l.text.slice(Math.min(i,h)-l.from,Math.max(i,h)-l.from),g=c(p);if(f!=null&&g!=f)break;(p!=" "||i!=t.head)&&(f=g),i=h}return i}),CS=n=>AS(n,!1),L8=n=>AS(n,!0),_8=n=>wo(n,e=>{let t=n.lineBlockAt(e.head).to;return e.head<t?t:Math.min(n.state.doc.length,e.head+1)}),H8=n=>wo(n,e=>{let t=n.moveToLineBoundary(e,!1).head;return e.head>t?t:Math.max(0,e.head-1)}),q8=n=>wo(n,e=>{let t=n.moveToLineBoundary(e,!0).head;return e.head<t?t:Math.min(n.state.doc.length,e.head+1)}),V8=({state:n,dispatch:e})=>{if(n.readOnly)return!1;let t=n.changeByRange(i=>({changes:{from:i.from,to:i.to,insert:Ue.of(["",""])},range:Y.cursor(i.from)}));return e(n.update(t,{scrollIntoView:!0,userEvent:"input"})),!0},U8=({state:n,dispatch:e})=>{if(n.readOnly)return!1;let t=n.changeByRange(i=>{if(!i.empty||i.from==0||i.from==n.doc.length)return{range:i};let r=i.from,l=n.doc.lineAt(r),c=r==l.from?r-1:Ot(l.text,r-l.from,!1)+l.from,f=r==l.to?r+1:Ot(l.text,r-l.from,!0)+l.from;return{changes:{from:c,to:f,insert:n.doc.slice(r,f).append(n.doc.slice(c,r))},range:Y.cursor(f)}});return t.changes.empty?!1:(e(n.update(t,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function vf(n){let e=[],t=-1;for(let i of n.selection.ranges){let r=n.doc.lineAt(i.from),l=n.doc.lineAt(i.to);if(!i.empty&&i.to==l.from&&(l=n.doc.lineAt(i.to-1)),t>=r.number){let c=e[e.length-1];c.to=l.to,c.ranges.push(i)}else e.push({from:r.from,to:l.to,ranges:[i]});t=l.number+1}return e}function TS(n,e,t){if(n.readOnly)return!1;let i=[],r=[];for(let l of vf(n)){if(t?l.to==n.doc.length:l.from==0)continue;let c=n.doc.lineAt(t?l.to+1:l.from-1),f=c.length+1;if(t){i.push({from:l.to,to:c.to},{from:l.from,insert:c.text+n.lineBreak});for(let h of l.ranges)r.push(Y.range(Math.min(n.doc.length,h.anchor+f),Math.min(n.doc.length,h.head+f)))}else{i.push({from:c.from,to:l.from},{from:l.to,insert:n.lineBreak+c.text});for(let h of l.ranges)r.push(Y.range(h.anchor-f,h.head-f))}}return i.length?(e(n.update({changes:i,scrollIntoView:!0,selection:Y.create(r,n.selection.mainIndex),userEvent:"move.line"})),!0):!1}const $8=({state:n,dispatch:e})=>TS(n,e,!1),G8=({state:n,dispatch:e})=>TS(n,e,!0);function MS(n,e,t){if(n.readOnly)return!1;let i=[];for(let l of vf(n))t?i.push({from:l.from,insert:n.doc.slice(l.from,l.to)+n.lineBreak}):i.push({from:l.to,insert:n.lineBreak+n.doc.slice(l.from,l.to)});let r=n.changes(i);return e(n.update({changes:r,selection:n.selection.map(r,t?1:-1),scrollIntoView:!0,userEvent:"input.copyline"})),!0}const W8=({state:n,dispatch:e})=>MS(n,e,!1),P8=({state:n,dispatch:e})=>MS(n,e,!0),Y8=n=>{if(n.state.readOnly)return!1;let{state:e}=n,t=e.changes(vf(e).map(({from:r,to:l})=>(r>0?r--:l<e.doc.length&&l++,{from:r,to:l}))),i=za(e.selection,r=>{let l;if(n.lineWrapping){let c=n.lineBlockAt(r.head),f=n.coordsAtPos(r.head,r.assoc||1);f&&(l=c.bottom+n.documentTop-f.bottom+n.defaultLineHeight/2)}return n.moveVertically(r,!0,l)}).map(t);return n.dispatch({changes:t,selection:i,scrollIntoView:!0,userEvent:"delete.line"}),!0};function K8(n,e){if(/\(\)|\[\]|\{\}/.test(n.sliceDoc(e-1,e+1)))return{from:e,to:e};let t=mi(n).resolveInner(e),i=t.childBefore(e),r=t.childAfter(e),l;return i&&r&&i.to<=e&&r.from>=e&&(l=i.type.prop($e.closedBy))&&l.indexOf(r.name)>-1&&n.doc.lineAt(i.to).from==n.doc.lineAt(r.from).from&&!/\S/.test(n.sliceDoc(i.to,r.from))?{from:i.to,to:r.from}:null}const sx=ES(!1),I8=ES(!0);function ES(n){return({state:e,dispatch:t})=>{if(e.readOnly)return!1;let i=e.changeByRange(r=>{let{from:l,to:c}=r,f=e.doc.lineAt(l),h=!n&&l==c&&K8(e,l);n&&(l=c=(c<=f.to?f:e.doc.lineAt(c)).to);let p=new pf(e,{simulateBreak:l,simulateDoubleBreak:!!h}),g=Gk(p,l);for(g==null&&(g=go(/^\s*/.exec(e.doc.lineAt(l).text)[0],e.tabSize));c<f.to&&/\s/.test(f.text[c-f.from]);)c++;h?{from:l,to:c}=h:l>f.from&&l<f.from+100&&!/\S/.test(f.text.slice(0,l))&&(l=f.from);let y=["",Vu(e,g)];return h&&y.push(Vu(e,p.lineIndent(f.from,-1))),{changes:{from:l,to:c,insert:Ue.of(y)},range:Y.cursor(l+1+y[1].length)}});return t(e.update(i,{scrollIntoView:!0,userEvent:"input"})),!0}}function fg(n,e){let t=-1;return n.changeByRange(i=>{let r=[];for(let c=i.from;c<=i.to;){let f=n.doc.lineAt(c);f.number>t&&(i.empty||i.to>f.from)&&(e(f,r,i),t=f.number),c=f.to+1}let l=n.changes(r);return{changes:r,range:Y.range(l.mapPos(i.anchor,1),l.mapPos(i.head,1))}})}const F8=({state:n,dispatch:e})=>{if(n.readOnly)return!1;let t=Object.create(null),i=new pf(n,{overrideIndentation:l=>{let c=t[l];return c??-1}}),r=fg(n,(l,c,f)=>{let h=Gk(i,l.from);if(h==null)return;/\S/.test(l.text)||(h=0);let p=/^\s*/.exec(l.text)[0],g=Vu(n,h);(p!=g||f.from<l.from+p.length)&&(t[l.from]=h,c.push({from:l.from,to:l.from+p.length,insert:g}))});return r.changes.empty||e(n.update(r,{userEvent:"indent"})),!0},RS=({state:n,dispatch:e})=>n.readOnly?!1:(e(n.update(fg(n,(t,i)=>{i.push({from:t.from,insert:n.facet(ag)})}),{userEvent:"input.indent"})),!0),OS=({state:n,dispatch:e})=>n.readOnly?!1:(e(n.update(fg(n,(t,i)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let l=go(r,n.tabSize),c=0,f=Vu(n,Math.max(0,l-qu(n)));for(;c<r.length&&c<f.length&&r.charCodeAt(c)==f.charCodeAt(c);)c++;i.push({from:t.from+c,to:t.from+r.length,insert:f.slice(c)})}),{userEvent:"delete.dedent"})),!0),X8=n=>(n.setTabFocusMode(),!0),Q8=[{key:"Ctrl-b",run:rS,shift:pS,preventDefault:!0},{key:"Ctrl-f",run:aS,shift:mS},{key:"Ctrl-p",run:cS,shift:bS},{key:"Ctrl-n",run:uS,shift:vS},{key:"Ctrl-a",run:g8,shift:E8},{key:"Ctrl-e",run:y8,shift:R8},{key:"Ctrl-d",run:SS},{key:"Ctrl-h",run:km},{key:"Ctrl-k",run:_8},{key:"Ctrl-Alt-h",run:CS},{key:"Ctrl-o",run:V8},{key:"Ctrl-t",run:U8},{key:"Ctrl-v",run:wm}],Z8=[{key:"ArrowLeft",run:rS,shift:pS,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:l8,shift:x8,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:p8,shift:T8,preventDefault:!0},{key:"ArrowRight",run:aS,shift:mS,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:o8,shift:w8,preventDefault:!0},{mac:"Cmd-ArrowRight",run:m8,shift:M8,preventDefault:!0},{key:"ArrowUp",run:cS,shift:bS,preventDefault:!0},{mac:"Cmd-ArrowUp",run:ex,shift:nx},{mac:"Ctrl-ArrowUp",run:Q1,shift:Z1},{key:"ArrowDown",run:uS,shift:vS,preventDefault:!0},{mac:"Cmd-ArrowDown",run:tx,shift:ix},{mac:"Ctrl-ArrowDown",run:wm,shift:J1},{key:"PageUp",run:Q1,shift:Z1},{key:"PageDown",run:wm,shift:J1},{key:"Home",run:d8,shift:C8,preventDefault:!0},{key:"Mod-Home",run:ex,shift:nx},{key:"End",run:h8,shift:A8,preventDefault:!0},{key:"Mod-End",run:tx,shift:ix},{key:"Enter",run:sx,shift:sx},{key:"Mod-a",run:O8},{key:"Backspace",run:km,shift:km,preventDefault:!0},{key:"Delete",run:SS,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:CS,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:L8,preventDefault:!0},{mac:"Mod-Backspace",run:H8,preventDefault:!0},{mac:"Mod-Delete",run:q8,preventDefault:!0}].concat(Q8.map(n=>({mac:n.key,run:n.run,shift:n.shift}))),J8=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:u8,shift:k8},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:f8,shift:S8},{key:"Alt-ArrowUp",run:$8},{key:"Shift-Alt-ArrowUp",run:W8},{key:"Alt-ArrowDown",run:G8},{key:"Shift-Alt-ArrowDown",run:P8},{key:"Mod-Alt-ArrowUp",run:j8},{key:"Mod-Alt-ArrowDown",run:B8},{key:"Escape",run:z8},{key:"Mod-Enter",run:I8},{key:"Alt-l",mac:"Ctrl-l",run:D8},{key:"Mod-i",run:N8,preventDefault:!0},{key:"Mod-[",run:OS},{key:"Mod-]",run:RS},{key:"Mod-Alt-\\",run:F8},{key:"Shift-Mod-k",run:Y8},{key:"Shift-Mod-\\",run:v8},{key:"Mod-/",run:$4},{key:"Alt-A",run:W4},{key:"Ctrl-m",mac:"Shift-Alt-m",run:X8}].concat(Z8),e5={key:"Tab",run:RS,shift:OS},rx=typeof String.prototype.normalize=="function"?n=>n.normalize("NFKD"):n=>n;class Ba{constructor(e,t,i=0,r=e.length,l,c){this.test=c,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(i,r),this.bufferStart=i,this.normalize=l?f=>l(rx(f)):rx,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return yr(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=Lx(e),i=this.bufferStart+this.bufferPos;this.bufferPos+=mo(e);let r=this.normalize(t);if(r.length)for(let l=0,c=i,f=!0;;l++){let h=r.charCodeAt(l),p=this.match(h,c,f,this.bufferPos+this.bufferStart,l==r.length-1);if(p)return this.value=p,this;if(l==r.length-1)break;f&&l<t.length&&t.charCodeAt(l)==h?c++:f=!1}}}match(e,t,i,r,l){let c=null;for(let f=0;f<this.matches.length;){let h=this.matches[f],p=!1;this.query.charCodeAt(h.index)==e&&(h.index==this.query.length-1?c={from:h.from,to:r,precise:l&&h.precise}:(h.index++,p=!0)),p?f++:this.matches.splice(f,1)}return this.query.charCodeAt(0)==e&&(this.query.length==1?c={from:t,to:r,precise:i&&l}:this.matches.push({from:t,index:1,precise:i})),c&&this.test&&!this.test(c.from,c.to,this.buffer,this.bufferStart)&&(c=null),c}}typeof Symbol<"u"&&(Ba.prototype[Symbol.iterator]=function(){return this});const DS={from:-1,to:-1,match:/.*/.exec(""),precise:!0},hg="gm"+(/x/.unicode==null?"":"u");class NS{constructor(e,t,i,r=0,l=e.length){if(this.text=e,this.to=l,this.curLine="",this.done=!1,this.value=DS,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new jS(e,t,i,r,l);this.re=new RegExp(t,hg+(i?.ignoreCase?"i":"")),this.test=i?.test,this.iter=e.iter();let c=e.lineAt(r);this.curLineStart=c.from,this.matchPos=$u(e,r),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let i=this.curLineStart+t.index,r=i+t[0].length;if(this.matchPos=$u(this.text,r+(i==r?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<r||i>this.value.to)&&(!this.test||this.test(i,r,t)))return this.value={from:i,to:r,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}}const gp=new WeakMap;class wa{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(e,t,i){let r=gp.get(e);if(!r||r.from>=i||r.to<=t){let f=new wa(t,e.sliceString(t,i));return gp.set(e,f),f}if(r.from==t&&r.to==i)return r;let{text:l,from:c}=r;return c>t&&(l=e.sliceString(t,c)+l,c=t),r.to<i&&(l+=e.sliceString(r.to,i)),gp.set(e,new wa(c,l)),new wa(t,l.slice(t-c,i-c))}}class jS{constructor(e,t,i,r,l){this.text=e,this.to=l,this.done=!1,this.value=DS,this.matchPos=$u(e,r),this.re=new RegExp(t,hg+(i?.ignoreCase?"i":"")),this.test=i?.test,this.flat=wa.get(e,r,this.chunkEnd(r+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let i=this.flat.from+t.index,r=i+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(i,r,t)))return this.value={from:i,to:r,precise:!0,match:t},this.matchPos=$u(this.text,r+(i==r?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=wa.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}typeof Symbol<"u"&&(NS.prototype[Symbol.iterator]=jS.prototype[Symbol.iterator]=function(){return this});function t5(n){try{return new RegExp(n,hg),!0}catch{return!1}}function $u(n,e){if(e>=n.length)return e;let t=n.lineAt(e),i;for(;e<t.to&&(i=t.text.charCodeAt(e-t.from))>=56320&&i<57344;)e++;return e}const n5=n=>{let{state:e}=n,t=String(e.doc.lineAt(n.state.selection.main.head).number),{close:i,result:r}=RR(n,{label:e.phrase("Go to line"),input:{type:"text",name:"line",value:t},focus:!0,submitLabel:e.phrase("go")});return r.then(l=>{let c=l&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(l.elements.line.value);if(!c){n.dispatch({effects:i});return}let f=e.doc.lineAt(e.selection.main.head),[,h,p,g,y]=c,v=g?+g.slice(1):0,w=p?+p:f.number;if(p&&y){let C=w/100;h&&(C=C*(h=="-"?-1:1)+f.number/e.doc.lines),w=Math.round(e.doc.lines*C)}else p&&h&&(w=w*(h=="-"?-1:1)+f.number);let k=e.doc.line(Math.max(1,Math.min(e.doc.lines,w))),A=Y.cursor(k.from+Math.max(0,Math.min(v,k.length)));n.dispatch({effects:[i,se.scrollIntoView(A.from,{y:"center"})],selection:A})}),!0},i5={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},s5=re.define({combine(n){return zs(n,i5,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function r5(n){return[u5,c5]}const a5=be.mark({class:"cm-selectionMatch"}),l5=be.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function ax(n,e,t,i){return(t==0||n(e.sliceDoc(t-1,t))!=ot.Word)&&(i==e.doc.length||n(e.sliceDoc(i,i+1))!=ot.Word)}function o5(n,e,t,i){return n(e.sliceDoc(t,t+1))==ot.Word&&n(e.sliceDoc(i-1,i))==ot.Word}const c5=Gt.fromClass(class{constructor(n){this.decorations=this.getDeco(n)}update(n){(n.selectionSet||n.docChanged||n.viewportChanged)&&(this.decorations=this.getDeco(n.view))}getDeco(n){let e=n.state.facet(s5),{state:t}=n,i=t.selection;if(i.ranges.length>1)return be.none;let r=i.main,l,c=null;if(r.empty){if(!e.highlightWordAroundCursor)return be.none;let h=t.wordAt(r.head);if(!h)return be.none;c=t.charCategorizer(r.head),l=t.sliceDoc(h.from,h.to)}else{let h=r.to-r.from;if(h<e.minSelectionLength||h>200)return be.none;if(e.wholeWords){if(l=t.sliceDoc(r.from,r.to),c=t.charCategorizer(r.head),!(ax(c,t,r.from,r.to)&&o5(c,t,r.from,r.to)))return be.none}else if(l=t.sliceDoc(r.from,r.to),!l)return be.none}let f=[];for(let h of n.visibleRanges){let p=new Ba(t.doc,l,h.from,h.to);for(;!p.next().done;){let{from:g,to:y}=p.value;if((!c||ax(c,t,g,y))&&(r.empty&&g<=r.from&&y>=r.to?f.push(l5.range(g,y)):(g>=r.to||y<=r.from)&&f.push(a5.range(g,y)),f.length>e.maxMatches))return be.none}}return be.set(f)}},{decorations:n=>n.decorations}),u5=se.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),f5=({state:n,dispatch:e})=>{let{selection:t}=n,i=Y.create(t.ranges.map(r=>n.wordAt(r.head)||Y.cursor(r.head)),t.mainIndex);return i.eq(t)?!1:(e(n.update({selection:i})),!0)};function h5(n,e){let{main:t,ranges:i}=n.selection,r=n.wordAt(t.head),l=r&&r.from==t.from&&r.to==t.to;for(let c=!1,f=new Ba(n.doc,e,i[i.length-1].to);;)if(f.next(),f.done){if(c)return null;f=new Ba(n.doc,e,0,Math.max(0,i[i.length-1].from-1)),c=!0}else{if(c&&i.some(h=>h.from==f.value.from))continue;if(l){let h=n.wordAt(f.value.from);if(!h||h.from!=f.value.from||h.to!=f.value.to)continue}return f.value}}const d5=({state:n,dispatch:e})=>{let{ranges:t}=n.selection;if(t.some(l=>l.from===l.to))return f5({state:n,dispatch:e});let i=n.sliceDoc(t[0].from,t[0].to);if(n.selection.ranges.some(l=>n.sliceDoc(l.from,l.to)!=i))return!1;let r=h5(n,i);return r?(e(n.update({selection:n.selection.addRange(Y.range(r.from,r.to),!1),effects:se.scrollIntoView(r.to)})),!0):!1},La=re.define({combine(n){return zs(n,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new M5(e),scrollToMatch:e=>se.scrollIntoView(e)})}});class BS{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||t5(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(t,i)=>i=="n"?`
`:i=="r"?"\r":i=="t"?"	":"\\")}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new v5(this):new g5(this)}getCursor(e,t=0,i){let r=e.doc?e:Pe.create({doc:e});return i==null&&(i=r.doc.length),this.regexp?da(this,r,t,i):ha(this,r,t,i)}}class zS{constructor(e){this.spec=e}}function p5(n,e,t){return(i,r,l,c)=>{if(t&&!t(i,r,l,c))return!1;let f=i>=c&&r<=c+l.length?l.slice(i-c,r-c):e.doc.sliceString(i,r);return n(f,e,i,r)}}function ha(n,e,t,i){let r;return n.wholeWord&&(r=m5(e.doc,e.charCategorizer(e.selection.main.head))),n.test&&(r=p5(n.test,e,r)),new Ba(e.doc,n.unquoted,t,i,n.caseSensitive?void 0:l=>l.toLowerCase(),r)}function m5(n,e){return(t,i,r,l)=>((l>t||l+r.length<i)&&(l=Math.max(0,t-2),r=n.sliceString(l,Math.min(n.length,i+2))),(e(Gu(r,t-l))!=ot.Word||e(Wu(r,t-l))!=ot.Word)&&(e(Wu(r,i-l))!=ot.Word||e(Gu(r,i-l))!=ot.Word))}class g5 extends zS{constructor(e){super(e)}nextMatch(e,t,i){let r=ha(this.spec,e,i,e.doc.length).nextOverlapping();if(r.done){let l=Math.min(e.doc.length,t+this.spec.unquoted.length);r=ha(this.spec,e,0,l).nextOverlapping()}return r.done||r.value.from==t&&r.value.to==i?null:r.value}prevMatchInRange(e,t,i){for(let r=i;;){let l=Math.max(t,r-1e4-this.spec.unquoted.length),c=ha(this.spec,e,l,r),f=null;for(;!c.nextOverlapping().done;)f=c.value;if(f)return f;if(l==t)return null;r-=1e4}}prevMatch(e,t,i){let r=this.prevMatchInRange(e,0,t);return r||(r=this.prevMatchInRange(e,Math.max(0,i-this.spec.unquoted.length),e.doc.length)),r&&(r.from!=t||r.to!=i)?r:null}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let i=ha(this.spec,e,0,e.doc.length),r=[];for(;!i.next().done;){if(r.length>=t)return null;r.push(i.value)}return r}highlight(e,t,i,r){let l=ha(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,e.doc.length));for(;!l.next().done;)r(l.value.from,l.value.to)}}function y5(n,e,t){return(i,r,l)=>(!t||t(i,r,l))&&n(l[0],e,i,r)}function da(n,e,t,i){let r;return n.wholeWord&&(r=b5(e.charCategorizer(e.selection.main.head))),n.test&&(r=y5(n.test,e,r)),new NS(e.doc,n.search,{ignoreCase:!n.caseSensitive,test:r},t,i)}function Gu(n,e){return n.slice(Ot(n,e,!1),e)}function Wu(n,e){return n.slice(e,Ot(n,e))}function b5(n){return(e,t,i)=>!i[0].length||(n(Gu(i.input,i.index))!=ot.Word||n(Wu(i.input,i.index))!=ot.Word)&&(n(Wu(i.input,i.index+i[0].length))!=ot.Word||n(Gu(i.input,i.index+i[0].length))!=ot.Word)}class v5 extends zS{nextMatch(e,t,i){let r=da(this.spec,e,i,e.doc.length).next();return r.done&&(r=da(this.spec,e,0,t).next()),r.done?null:r.value}prevMatchInRange(e,t,i){for(let r=1;;r++){let l=Math.max(t,i-r*1e4),c=da(this.spec,e,l,i),f=null;for(;!c.next().done;)f=c.value;if(f&&(l==t||f.from>l+10))return f;if(l==t)return null}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,i)=>{if(i=="&")return e.match[0];if(i=="$")return"$";for(let r=i.length;r>0;r--){let l=+i.slice(0,r);if(l>0&&l<e.match.length)return e.match[l]+i.slice(r)}return t})}matchAll(e,t){let i=da(this.spec,e,0,e.doc.length),r=[];for(;!i.next().done;){if(r.length>=t)return null;r.push(i.value)}return r}highlight(e,t,i,r){let l=da(this.spec,e,Math.max(0,t-250),Math.min(i+250,e.doc.length));for(;!l.next().done;)r(l.value.from,l.value.to)}}const po=Ee.define(),dg=Ee.define(),Ts=Dt.define({create(n){return new yp(Sm(n).create(),null)},update(n,e){for(let t of e.effects)t.is(po)?n=new yp(t.value.create(),n.panel):t.is(dg)&&(n=new yp(n.query,t.value?pg:null));return n},provide:n=>oo.from(n,e=>e.panel)});class yp{constructor(e,t){this.query=e,this.panel=t}}const x5=be.mark({class:"cm-searchMatch"}),w5=be.mark({class:"cm-searchMatch cm-searchMatch-selected"}),k5=Gt.fromClass(class{constructor(n){this.view=n,this.decorations=this.highlight(n.state.field(Ts))}update(n){let e=n.state.field(Ts);(e!=n.startState.field(Ts)||n.docChanged||n.selectionSet||n.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:n,panel:e}){if(!e||!n.spec.valid)return be.none;let{view:t}=this,i=new Sa;for(let r=0,l=t.visibleRanges,c=l.length;r<c;r++){let{from:f,to:h}=l[r];for(;r<c-1&&h>l[r+1].from-500;)h=l[++r].to;n.highlight(t.state,f,h,(p,g)=>{let y=t.state.selection.ranges.some(v=>v.from==p&&v.to==g);i.add(p,g,y?w5:x5)})}return i.finish()}},{decorations:n=>n.decorations});function ko(n){return e=>{let t=e.state.field(Ts,!1);return t&&t.query.spec.valid?n(e,t):HS(e)}}const Pu=ko((n,{query:e})=>{let{to:t}=n.state.selection.main,i=e.nextMatch(n.state,t,t);if(!i)return!1;let r=Y.single(i.from,i.to),l=n.state.facet(La);return n.dispatch({selection:r,effects:[mg(n,i),l.scrollToMatch(r.main,n)],userEvent:"select.search"}),_S(n),!0}),Yu=ko((n,{query:e})=>{let{state:t}=n,{from:i}=t.selection.main,r=e.prevMatch(t,i,i);if(!r)return!1;let l=Y.single(r.from,r.to),c=n.state.facet(La);return n.dispatch({selection:l,effects:[mg(n,r),c.scrollToMatch(l.main,n)],userEvent:"select.search"}),_S(n),!0}),S5=ko((n,{query:e})=>{let t=e.matchAll(n.state,1e3);return!t||!t.length?!1:(n.dispatch({selection:Y.create(t.map(i=>Y.range(i.from,i.to))),userEvent:"select.search.matches"}),!0)}),A5=({state:n,dispatch:e})=>{let t=n.selection;if(t.ranges.length>1||t.main.empty)return!1;let{from:i,to:r}=t.main,l=[],c=0;for(let f=new Ba(n.doc,n.sliceDoc(i,r));!f.next().done;){if(l.length>1e3)return!1;f.value.from==i&&(c=l.length),l.push(Y.range(f.value.from,f.value.to))}return e(n.update({selection:Y.create(l,c),userEvent:"select.search.matches"})),!0},lx=ko((n,{query:e})=>{let{state:t}=n,{from:i,to:r}=t.selection.main;if(t.readOnly)return!1;let l=e.nextMatch(t,i,i);if(!l)return!1;let c=l,f=[],h,p,g=[];c.precise?c.from==i&&c.to==r&&(p=t.toText(e.getReplacement(c)),f.push({from:c.from,to:c.to,insert:p}),c=e.nextMatch(t,c.from,c.to),g.push(se.announce.of(t.phrase("replaced match on line $",t.doc.lineAt(i).number)+"."))):c=e.nextMatch(t,c.from,c.to);let y=n.state.changes(f);return c&&(h=Y.single(c.from,c.to).map(y),g.push(mg(n,c)),g.push(t.facet(La).scrollToMatch(h.main,n))),n.dispatch({changes:y,selection:h,effects:g,userEvent:"input.replace"}),!0}),C5=ko((n,{query:e})=>{if(n.state.readOnly)return!1;let t=[];for(let r of e.matchAll(n.state,1e9)){let{from:l,to:c,precise:f}=r;f&&t.push({from:l,to:c,insert:e.getReplacement(r)})}if(!t.length)return!1;let i=n.state.phrase("replaced $ matches",t.length)+".";return n.dispatch({changes:t,effects:se.announce.of(i),userEvent:"input.replace.all"}),!0});function pg(n){return n.state.facet(La).createPanel(n)}function Sm(n,e){var t,i,r,l,c;let f=n.selection.main,h=f.empty||f.to>f.from+100?"":n.sliceDoc(f.from,f.to);if(e&&!h)return e;let p=n.facet(La);return new BS({search:((t=e?.literal)!==null&&t!==void 0?t:p.literal)?h:h.replace(/\n/g,"\\n"),caseSensitive:(i=e?.caseSensitive)!==null&&i!==void 0?i:p.caseSensitive,literal:(r=e?.literal)!==null&&r!==void 0?r:p.literal,regexp:(l=e?.regexp)!==null&&l!==void 0?l:p.regexp,wholeWord:(c=e?.wholeWord)!==null&&c!==void 0?c:p.wholeWord})}function LS(n){let e=Ym(n,pg);return e&&e.dom.querySelector("[main-field]")}function _S(n){let e=LS(n);e&&e==n.root.activeElement&&e.select()}const HS=n=>{let e=n.state.field(Ts,!1);if(e&&e.panel){let t=LS(n);if(t&&t!=n.root.activeElement){let i=Sm(n.state,e.query.spec);i.valid&&n.dispatch({effects:po.of(i)}),t.focus(),t.select()}}else n.dispatch({effects:[dg.of(!0),e?po.of(Sm(n.state,e.query.spec)):Ee.appendConfig.of(R5)]});return!0},qS=n=>{let e=n.state.field(Ts,!1);if(!e||!e.panel)return!1;let t=Ym(n,pg);return t&&t.dom.contains(n.root.activeElement)&&n.focus(),n.dispatch({effects:dg.of(!1)}),!0},T5=[{key:"Mod-f",run:HS,scope:"editor search-panel"},{key:"F3",run:Pu,shift:Yu,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:Pu,shift:Yu,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:qS,scope:"editor search-panel"},{key:"Mod-Shift-l",run:A5},{key:"Mod-Alt-g",run:n5},{key:"Mod-d",run:d5,preventDefault:!0}];class M5{constructor(e){this.view=e;let t=this.query=e.state.field(Ts).query.spec;this.commit=this.commit.bind(this),this.searchField=Ze("input",{value:t.search,placeholder:bn(e,"Find"),"aria-label":bn(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=Ze("input",{value:t.replace,placeholder:bn(e,"Replace"),"aria-label":bn(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=Ze("input",{type:"checkbox",name:"case",form:"",checked:t.caseSensitive,onchange:this.commit}),this.reField=Ze("input",{type:"checkbox",name:"re",form:"",checked:t.regexp,onchange:this.commit}),this.wordField=Ze("input",{type:"checkbox",name:"word",form:"",checked:t.wholeWord,onchange:this.commit});function i(r,l,c){return Ze("button",{class:"cm-button",name:r,onclick:l,type:"button"},c)}this.dom=Ze("div",{onkeydown:r=>this.keydown(r),class:"cm-search"},[this.searchField,i("next",()=>Pu(e),[bn(e,"next")]),i("prev",()=>Yu(e),[bn(e,"previous")]),i("select",()=>S5(e),[bn(e,"all")]),Ze("label",null,[this.caseField,bn(e,"match case")]),Ze("label",null,[this.reField,bn(e,"regexp")]),Ze("label",null,[this.wordField,bn(e,"by word")]),...e.state.readOnly?[]:[Ze("br"),this.replaceField,i("replace",()=>lx(e),[bn(e,"replace")]),i("replaceAll",()=>C5(e),[bn(e,"replace all")])],Ze("button",{name:"close",onclick:()=>qS(e),"aria-label":bn(e,"close"),type:"button"},["×"])])}commit(){let e=new BS({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:po.of(e)}))}keydown(e){eR(this.view,e,"search-panel")?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?Yu:Pu)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),lx(this.view))}update(e){for(let t of e.transactions)for(let i of t.effects)i.is(po)&&!i.value.eq(this.query)&&this.setQuery(i.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(La).top}}function bn(n,e){return n.state.phrase(e)}const lu=30,ou=/[\s\.,:;?!]/;function mg(n,{from:e,to:t}){let i=n.state.doc.lineAt(e),r=n.state.doc.lineAt(t).to,l=Math.max(i.from,e-lu),c=Math.min(r,t+lu),f=n.state.sliceDoc(l,c);if(l!=i.from){for(let h=0;h<lu;h++)if(!ou.test(f[h+1])&&ou.test(f[h])){f=f.slice(h);break}}if(c!=r){for(let h=f.length-1;h>f.length-lu;h--)if(!ou.test(f[h-1])&&ou.test(f[h])){f=f.slice(0,h);break}}return se.announce.of(`${n.state.phrase("current match")}. ${f} ${n.state.phrase("on line")} ${i.number}.`)}const E5=se.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),R5=[Ts,ef.low(k5),E5],Ss=Object.freeze({analyzer:"analyzer",embed:"embed",interactive:"interactive"}),O5=se.theme({"&":{backgroundColor:"var(--rasa-code-bg, #0e1319)",color:"var(--rasa-text, #e8edf2)"},"&.cm-focused":{outline:"none"},".cm-content":{caretColor:"var(--rasa-text, #e8edf2)"},".cm-cursor, .cm-dropCursor":{borderLeftColor:"var(--rasa-text, #e8edf2)"},".cm-gutters":{backgroundColor:"var(--rasa-code-bg, #0e1319)",borderRight:"1px solid var(--rasa-line, #29313d)",color:"var(--rasa-dim, #6d7885)"},".cm-activeLine":{backgroundColor:"color-mix(in srgb, var(--rasa-blue, #78a7ff) 9%, transparent)"},".cm-activeLineGutter":{backgroundColor:"color-mix(in srgb, var(--rasa-blue, #78a7ff) 12%, transparent)",color:"var(--rasa-muted, #9aa6b6)"},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection":{backgroundColor:"color-mix(in srgb, var(--rasa-blue, #78a7ff) 28%, transparent)"},".cm-panels":{backgroundColor:"var(--rasa-panel-soft, #0f141a)",color:"var(--rasa-text, #e8edf2)"},".cm-panel":{borderColor:"var(--rasa-line, #29313d)"},".cm-panel input, .cm-panel button":{border:"1px solid var(--rasa-line-strong, #3a4656)",backgroundColor:"var(--rasa-panel-raised, #151a22)",color:"var(--rasa-text, #e8edf2)"},"&.cm-editor .cm-tooltip":{maxWidth:"min(42rem, calc(100vw - 24px))",overflow:"hidden",border:"1px solid var(--rasa-line-strong, #3a4656)",borderRadius:"var(--rasa-radius, 8px)",backgroundColor:"var(--rasa-panel-raised, #151a22)",boxShadow:"0 12px 32px var(--rasa-shadow, rgba(0, 0, 0, 0.18))",color:"var(--rasa-text, #e8edf2)"},"&.cm-editor .cm-tooltip-lint":{minWidth:"min(22rem, calc(100vw - 24px))",maxWidth:"42rem",fontFamily:"inherit",fontSize:"0.875rem",lineHeight:"1.45"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic":{padding:"11px 14px 11px 16px",borderBottom:"1px solid var(--rasa-line, #29313d)",backgroundColor:"var(--rasa-panel-raised, #151a22)",color:"var(--rasa-text, #e8edf2)"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic:last-child":{borderBottom:"none"},"&.cm-editor .cm-tooltip-lint .cm-diagnosticText":{color:"var(--rasa-text, #e8edf2)",fontWeight:"520",overflowWrap:"anywhere"},"&.cm-editor .cm-tooltip-lint .cm-diagnosticSource":{display:"block",marginTop:"5px",color:"var(--rasa-muted, #9aa6b6)",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:"0.72rem",opacity:"1"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic-error":{backgroundColor:"color-mix(in srgb, var(--rasa-red, #ff8ca3) 8%, var(--rasa-panel-raised, #151a22))",borderLeftColor:"var(--rasa-red, #ff8ca3)"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic-warning":{backgroundColor:"color-mix(in srgb, var(--rasa-warning, #e8b84a) 8%, var(--rasa-panel-raised, #151a22))",borderLeftColor:"var(--rasa-warning, #e8b84a)"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic-info":{backgroundColor:"color-mix(in srgb, var(--rasa-blue, #78a7ff) 8%, var(--rasa-panel-raised, #151a22))",borderLeftColor:"var(--rasa-blue, #78a7ff)"},"&.cm-editor .cm-tooltip-lint .cm-diagnostic-hint":{backgroundColor:"color-mix(in srgb, var(--rasa-green, #83d7aa) 8%, var(--rasa-panel-raised, #151a22))",borderLeftColor:"var(--rasa-green, #83d7aa)"},"&.cm-editor .cm-lintRange-active":{backgroundColor:"color-mix(in srgb, var(--rasa-warning, #e8b84a) 12%, transparent)"}});function D5(n=Ss.interactive){if(!Object.values(Ss).includes(n))throw new Error(`unknown Rasa CodeMirror profile: ${n}`);return Object.freeze({name:n,analyzer:n===Ss.analyzer,interactive:n!==Ss.embed})}function N5(n=Ss.interactive,{onRun:e=null}={}){const t=D5(n),i=[O5,aR(),se.lineWrapping];if(!t.interactive)return i;const r=[...z4,...J8,...a8,...T5,...t.analyzer?FR:[],e5];return e&&r.unshift({key:"Mod-Enter",run:()=>(e(),!0)}),i.push(VR(),GR(),hR(),fR(),bR(),Q4(),D4(),A4(),r5(),$w.of(r)),t.analyzer&&i.push(r3()),i}function j5(n){return[se.editable.of(!n),Pe.readOnly.of(!!n)]}const bp=Object.freeze({status:"unavailable",tokens:[],diagnostics:[]});class gg{#e=_l();#t=[];#n;#r;#i=0;#o=bp;#f=[];#a=null;#c=null;#s;constructor({parent:e,source:t="",tooling:i=null,profile:r=Ss.interactive,readOnly:l=!1,onChange:c=null,onRun:f=null,onInspectionChange:h=null,onSyntaxChange:p=null,extensions:g=[],syntaxDelay:y=80}={}){if(!e)throw new Error("Editor requires a parent element");this.#c=ox(i),this.#n=h,this.#r=p,this.syntaxDelay=Math.max(0,Number(y)||0),this.#s=new se({parent:e,state:Pe.create({doc:String(t??""),extensions:[f3(),h3(),...N5(r,{onRun:f}),...j5(l),se.updateListener.of(v=>{v.docChanged&&(this.#i+=1,this.#d(),this.#h(),this.applyEvidence([]),this.#u(),c?.(v.state.doc.toString(),v),this.scheduleSyntax())}),...g]})}),this.refreshSyntax()}get inspection(){return this.#e}get revision(){return this.#i}get source(){return this.#s.state.doc.toString()}get state(){return this.#s.state}get syntax(){return this.#o}applyEvidence(e){this.#s.dispatch({effects:pk.of(e||[])})}applyInspection(e,{revision:t=this.#i}={}){const i=HO(e,t,this.#i);return this.#l(i),i.status!==qi.current||(this.#t=UO(i.artifact,this.source),this.applyEvidence(Hk(i.artifact)),this.#u()),i}applySyntax(e){const t=B5(e);return this.#o=Object.freeze(t),this.#r?.(this.#o),this.#f=VO(t,this.source),this.#s.dispatch({effects:dk.of(t.tokens)}),this.#u(),this.#o}clearInspection(){this.#t=[],this.applyEvidence([]),this.#l(_l()),this.#u()}destroy(){this.#a&&clearTimeout(this.#a),this.#a=null,this.#s.destroy()}dispatch(e){this.#s.dispatch(e)}focus(){this.#s.focus()}async inspect(e={}){if(!this.#c?.inspect){const r=_l(new Error("inspection tooling is unavailable"));return this.#l(r),null}const t=this.#i,i=this.source;this.#l(_O(t));try{const r=await this.#c.inspect(i,e);return this.applyInspection(r,{revision:t}),this.#e.status===qi.current?r:null}catch(r){throw this.#l(_l(r)),r}}refreshSyntax(){if(!this.#c?.tokens)return this.applySyntax(bp);try{return this.applySyntax(this.#c.tokens(this.source))}catch(e){return this.applySyntax({...bp,error:e})}}reveal(e){return l3(this.#s,e)}scheduleSyntax(e=this.syntaxDelay){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(()=>{this.#a=null,this.refreshSyntax()},Math.max(0,Number(e)||0))}selectEvidence(e,{reveal:t=!0}={}){const i=this.#e.artifact;if(!i||!e)return[];const r=$O(i,String(e));return this.applyEvidence(r),t&&r[0]&&this.reveal(r[0]),r}setSource(e){const t=String(e??"");t!==this.source&&this.#s.dispatch({changes:{from:0,to:this.#s.state.doc.length,insert:t}})}setTooling(e){this.#c=ox(e),this.#t=[],this.applyEvidence([]),this.#l(_l()),this.refreshSyntax()}#h(){this.#e.status!==qi.unavailable&&(this.#t=[],this.#l(qO(this.#e,this.#i)))}#d(){this.#o=Object.freeze({status:"stale",tokens:[],diagnostics:[]}),this.#f=[],this.#r?.(this.#o)}#u(){this.#s.dispatch(WR(this.#s.state,[...this.#f,...this.#t]))}#l(e){this.#e=e,this.#n?.(e)}}function ox(n){if(!n)return null;if(typeof n.tokens!="function")throw new Error("Rasa editor tooling must provide tokens(source)");if(n.inspect!=null&&typeof n.inspect!="function")throw new Error("Rasa editor tooling inspect must be a function when provided");return n}function B5(n){if(!n||typeof n.status!="string"||!Array.isArray(n.tokens))throw new Error("invalid Rasa syntax token payload");return{status:n.status,tokens:n.tokens,diagnostics:Array.isArray(n.diagnostics)?n.diagnostics:[],...n.error?{error:n.error}:{}}}const z5=`
.cm-editor .rasa-token-boolean,
.cm-editor .rasa-token-nil,
.rasa-token-boolean,
.rasa-token-nil { color: var(--rasa-gold); }
.cm-editor .rasa-token-character,
.cm-editor .rasa-token-string,
.rasa-token-character,
.rasa-token-string { color: var(--rasa-green); }
.cm-editor .rasa-token-comment,
.rasa-token-comment { color: var(--rasa-dim, var(--rasa-muted)); font-style: italic; }
.cm-editor .rasa-token-keyword,
.rasa-token-keyword { color: var(--rasa-cyan, var(--rasa-blue)); }
.cm-editor .rasa-token-metadata,
.cm-editor .rasa-token-reader-macro,
.rasa-token-metadata,
.rasa-token-reader-macro { color: var(--rasa-purple, var(--rasa-violet, var(--rasa-blue))); }
.cm-editor .rasa-token-number,
.rasa-token-number { color: var(--rasa-red); }
.cm-editor .rasa-token-symbol,
.rasa-token-symbol { color: var(--rasa-text); }
.cm-editor .rasa-token-delimiter,
.rasa-token-delimiter { color: var(--rasa-muted); }
.cm-editor .rasa-evidence-span {
  background: color-mix(in srgb, var(--rasa-blue) 12%, transparent);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--rasa-blue) 55%, transparent);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}
.cm-editor .rasa-evidence-pinned {
  background: color-mix(in srgb, var(--rasa-gold) 18%, transparent);
  text-decoration-color: var(--rasa-gold);
  text-decoration-thickness: 2px;
}
`,L5=new TextEncoder;async function cu(n){if(VS(n)){const i=US(n);return{byteLength:i.byteLength,digest:await cx(i),encoding:"bytes"}}const e=_5(n),t=L5.encode(e);return{byteLength:t.byteLength,digest:await cx(t),encoding:"canonical-json"}}function _5(n){return JSON.stringify(Am(n))}function Ku(n,e=12){return n?String(n).slice(0,e):"not observed"}function Am(n){return n===null||typeof n=="string"||typeof n=="boolean"?n:typeof n=="number"?Number.isFinite(n)?n:{$number:String(n)}:typeof n=="bigint"?{$bigint:n.toString()}:n===void 0?{$undefined:!0}:VS(n)?{$bytes:[...US(n)]}:Array.isArray(n)?n.map(Am):n&&typeof n=="object"?Object.fromEntries(Object.keys(n).sort().filter(e=>typeof n[e]!="function").map(e=>[e,Am(n[e])])):String(n)}async function cx(n){const e=globalThis.crypto?.subtle;if(!e)throw new Error("SHA-256 observations require Web Crypto");const t=await e.digest("SHA-256",n);return[...new Uint8Array(t)].map(i=>i.toString(16).padStart(2,"0")).join("")}function VS(n){return n instanceof ArrayBuffer||ArrayBuffer.isView(n)}function US(n){if(n instanceof Uint8Array)return n;if(n instanceof ArrayBuffer)return new Uint8Array(n);if(ArrayBuffer.isView(n))return new Uint8Array(n.buffer,n.byteOffset,n.byteLength);throw new TypeError("expected an ArrayBuffer or typed array")}class H5 extends Error{constructor(e="browser effect was cancelled before release"){super(e),this.name="BrowserEffectCancelledError",this.kind="browser-effect-cancelled"}}function q5({pauseBeforeEffect:n=!1}={}){let e=0,t=null,i=ux(n);const r=new Set;function l(B){i=Object.freeze({...i,...B});for(const R of r)R(i);return i}async function c({source:B,label:R="Rasa source"}){w("superseded by a new run");const W=`browser-run-${++e}`,q=await cu(String(B??""));return l({...$S(i.pauseBeforeEffect),id:W,status:"running",source:aa({authority:"browser-observed",detail:`${q.byteLength.toLocaleString()} UTF-8 bytes`,digest:q.digest,encoding:q.encoding,kind:"source",label:R,byteLength:q.byteLength})}),W}function f(B,R){return G(B)?_(l({runtime:aa({authority:"runtime-report",kind:"execution",label:"Browser Wasm execution",...R})})):i}async function h(B,R){if(!G(B))return null;const W=R.digest?{digest:R.digest,byteLength:R.byteLength??null,encoding:R.encoding||"provided"}:await cu(R.payload);if(!G(B))return null;const q=aa({authority:"browser-observed",kind:R.kind||"artifact",label:R.label||"Rasa artifact",detail:R.detail||vp(R,W),count:R.count??null,unit:R.unit||null,...W});return _(l({artifact:q})),q}async function p(B,R){if(!G(B))return null;const W=await cu(R.payload);if(!G(B))return null;const q=aa({authority:R.authority||"browser-boundary",kind:R.kind||"boundary-input",label:R.label||"Browser boundary input",detail:R.detail||vp(R,W),count:R.count??null,unit:R.unit||null,...W}),F={boundary:q};return R.artifact===!0&&!i.artifact&&(F.artifact=aa({...q,authority:"browser-observed",detail:R.artifactDetail||q.detail,kind:R.artifactKind||"rasa-capability-payload",label:R.artifactLabel||"Rasa capability payload"})),l({...F,status:i.pauseBeforeEffect?"paused":"effect-running"}),i.pauseBeforeEffect?(await new Promise((ie,he)=>{t={onRelease:R.onRelease||null,reject:he,resolve:ie,runId:B}}),G(B)?(l({status:"effect-running"}),q):null):q}async function g(B,R){if(!G(B))return null;const W=R.digest?{digest:R.digest,byteLength:R.byteLength??null,encoding:R.encoding||"provided"}:await cu(R.payload);if(!G(B))return null;if(i.effect&&i.effect.digest===W.digest&&i.effect.inputDigest===(R.inputDigest||null))return i.effect;const q=aa({authority:R.authority||"browser-effect",kind:R.kind||"effect",label:R.label||"Browser effect",detail:R.detail||vp(R,W),count:R.count??null,unit:R.unit||null,inputDigest:R.inputDigest||null,...W});return _(l({effect:q})),q}function y(B,R){return G(B)?l({status:"error",error:{message:R?.message||String(R),name:R?.name||"Error"}}):i}function v(){if(!t)return!1;const B=t;t=null,l({status:"effect-running"});try{const R=B.onRelease?.();Promise.resolve(R).then(B.resolve,B.reject)}catch(R){B.reject(R)}return!0}function w(B="browser effect cancelled"){if(!t)return!1;const R=t;return t=null,l({status:"cancelled"}),R.reject(new H5(B)),!0}function k(){w("witness reset"),l(ux(i.pauseBeforeEffect))}function A(B){const R=!!B;l({pauseBeforeEffect:R}),R||v()}function C(B){return r.add(B),()=>r.delete(B)}function O(){return i}function G(B){return!!(B&&i.id===B)}function _(B){const R=V5(B);if(!!!(B.runtime&&B.artifact&&B.boundary&&B.effect))return B;const q=R.length>0&&R.every(F=>F.status==="match");return l({correlations:R,status:q?"correlated":"mismatch"})}return Object.freeze({beforeEffect:p,beginRun:c,cancel:w,recordArtifact:h,recordEffect:g,recordError:y,recordRuntime:f,release:v,reset:k,setPauseBeforeEffect:A,snapshot:O,subscribe:C})}function ux(n){return Object.freeze({...$S(n),id:null,status:"idle"})}function $S(n){return{artifact:null,boundary:null,correlations:[],effect:null,error:null,pauseBeforeEffect:n,runtime:null,source:null}}function aa(n){return Object.freeze({...n})}function vp(n,e){return n.count!=null&&n.unit?`${Number(n.count).toLocaleString()} ${n.unit}`:e.byteLength!=null?`${Number(e.byteLength).toLocaleString()} observed bytes`:"Browser-observed payload"}function V5(n){const e=[];return n.artifact?.digest&&n.boundary?.digest&&e.push(xp("artifact-boundary","Artifact matches boundary input",n.artifact.digest===n.boundary.digest,n.artifact.digest,n.boundary.digest)),n.boundary?.digest&&n.effect?.inputDigest&&e.push(xp("boundary-effect","Effect consumed boundary input",n.boundary.digest===n.effect.inputDigest,n.boundary.digest,n.effect.inputDigest)),n.boundary?.count!=null&&n.effect?.count!=null&&e.push(xp("count",`${n.boundary.unit||"Boundary items"} preserved`,n.boundary.count===n.effect.count,n.boundary.count,n.effect.count)),e}function xp(n,e,t,i,r){return Object.freeze({actual:r,expected:i,id:n,label:e,status:t?"match":"mismatch"})}const GS={source:nT,runtime:ZC,artifact:xT,boundary:VC,effect:HT};function U5({model:n,onOpen:e,onRelease:t}){const i=WS(n);return x.jsxs("footer",{className:"execution-witness-rail","data-status":n.status,children:[x.jsxs("button",{className:"witness-route",onClick:e,title:"See how this result moved from your Rasa code to the browser",type:"button",children:[x.jsxs("span",{className:"witness-route-label",children:[x.jsx(aT,{size:14})," Proof trail"]}),i.map((r,l)=>{const c=GS[r.id];return x.jsxs(Zu.Fragment,{children:[x.jsxs("span",{className:"witness-route-step","data-status":r.status,children:[x.jsx(c,{size:13}),x.jsxs("span",{children:[x.jsx("strong",{children:r.label}),x.jsx("small",{children:r.value})]})]}),l<i.length-1?x.jsx(Em,{"aria-hidden":"true",size:12}):null]},r.id)})]}),n.status==="paused"?x.jsxs("button",{className:"witness-release",onClick:t,type:"button",children:[x.jsx(Ju,{fill:"currentColor",size:14})," Continue to browser"]}):x.jsx("span",{className:"witness-status","data-status":n.status,title:YS(n.status),children:PS(n.status)})]})}function $5({model:n,onPauseChange:e,onRelease:t}){const i=WS(n);return x.jsxs("div",{className:"execution-witness-panel",children:[x.jsxs("header",{className:"witness-panel-summary",children:[x.jsxs("div",{children:[x.jsx("span",{children:"Proof trail for this browser run"}),x.jsx("h2",{children:"How this result was made"}),x.jsx("small",{title:"This identifier is created by the browser for this page. It is not a compiler-authored run ID.",children:Y5(n.id)})]}),x.jsx("em",{"data-status":n.status,title:YS(n.status),children:PS(n.status)})]}),x.jsxs("section",{className:"witness-authority",children:[x.jsx(fx,{label:"Reported by Rasa",detail:"Execution facts that came from Rasa's own runtime report",help:"These facts describe the Rasa execution itself. The Studio displays them but does not invent them.",tone:"runtime"}),x.jsx(fx,{label:"Checked in this browser",detail:"Measurements made around the hand-off to Tone.js or Canvas",help:"The browser measures matching data on both sides of the hand-off. These checks are useful evidence, but they are not compiler authority.",tone:"browser"})]}),x.jsxs("details",{className:"witness-reading-guide",children:[x.jsxs("summary",{children:[x.jsx(Ep,{size:15})," How to read this proof"]}),x.jsxs("div",{children:[x.jsx("p",{children:"The five steps follow one result from the code you can edit to the sound or image the browser produced."}),x.jsxs("p",{children:[x.jsx("strong",{children:"Reported by Rasa"})," describes the execution. ",x.jsx("strong",{children:"Checked in this browser"})," compares the actual data used at the browser boundary."]}),x.jsx("p",{children:"Open any step's technical details to inspect data kinds, counts, timings, and SHA-256 fingerprints."})]})]}),x.jsxs("section",{className:"witness-control",children:[x.jsxs("div",{children:[x.jsx(CT,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:"Pause before showing or playing"}),x.jsx("small",{children:"Let Rasa reach the browser hand-off, inspect the result, then choose when Canvas or Tone.js may use it."})]})]}),x.jsx("button",{"aria-checked":n.pauseBeforeEffect,"aria-label":"Pause before showing or playing",className:"witness-switch",onClick:()=>e(!n.pauseBeforeEffect),role:"switch",type:"button",children:x.jsx("i",{})}),n.status==="paused"?x.jsxs("button",{className:"witness-panel-release",onClick:t,type:"button",children:[x.jsx(Ju,{fill:"currentColor",size:14})," Continue"]}):null]}),x.jsx("section",{className:"witness-step-grid",children:i.map(r=>x.jsx(G5,{step:r},r.id))}),n.error?x.jsxs("section",{className:"witness-error",role:"alert",children:[x.jsx(to,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:n.error.name}),x.jsx("small",{children:n.error.message})]})]}):null,x.jsxs("section",{className:"witness-correlations",children:[x.jsxs("header",{children:[x.jsx("span",{children:"Do the hand-offs match?"}),x.jsx("strong",{children:n.correlations.length})]}),n.correlations.length?n.correlations.map(r=>x.jsxs("div",{"data-status":r.status,children:[r.status==="match"?x.jsx(YC,{size:15}):x.jsx(to,{size:15}),x.jsxs("span",{children:[x.jsx("strong",{children:Q5(r)}),x.jsx("small",{children:Z5(r)})]})]},r.id)):x.jsx("p",{children:"These checks appear after Canvas draws the result or Tone.js schedules the score."})]}),x.jsxs("section",{className:"witness-core-gaps",children:[x.jsxs("span",{children:["What this does not prove yet ",x.jsx(Ep,{"aria-label":"About current proof limits",size:13,title:"The Studio names missing evidence instead of replacing it with a browser claim."})]}),x.jsx("p",{children:"This browser can match what it observed. Rasa does not yet publish a compiler-authored run identity or result fingerprint, so the Studio does not claim cross-host verification."})]})]})}function G5({step:n}){const e=GS[n.id];return x.jsxs("article",{"data-status":n.status,children:[x.jsxs("header",{children:[x.jsx(e,{size:16}),x.jsx("span",{children:n.eyebrow})]}),x.jsx("h3",{children:n.label}),x.jsx("p",{children:n.detail}),n.status==="observed"?x.jsxs("details",{className:"witness-technical",children:[x.jsx("summary",{children:"Technical details"}),x.jsxs("dl",{children:[x.jsxs("div",{children:[x.jsx("dt",{title:"Who supplied this evidence",children:"Evidence source"}),x.jsx("dd",{children:n.authority})]}),n.observationLabel?x.jsxs("div",{children:[x.jsx("dt",{children:"Observed as"}),x.jsx("dd",{children:n.observationLabel})]}):null,n.kind?x.jsxs("div",{children:[x.jsx("dt",{children:"Data kind"}),x.jsx("dd",{children:n.kind})]}):null,n.digest?x.jsxs("div",{children:[x.jsx("dt",{title:"A browser-computed fingerprint used only for comparisons inside this page",children:"SHA-256"}),x.jsx("dd",{title:n.digest,children:Ku(n.digest,16)})]}):null,n.count!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Payload"}),x.jsxs("dd",{children:[Number(n.count).toLocaleString()," ",n.unit]})]}):null,n.elapsedMs!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Elapsed"}),x.jsxs("dd",{children:[Number(n.elapsedMs).toFixed(1)," ms"]})]}):null,n.optimizerExecutions!=null?x.jsxs("div",{children:[x.jsx("dt",{children:"Optimized regions"}),x.jsx("dd",{children:Number(n.optimizerExecutions).toLocaleString()})]}):null,n.executionTier?x.jsxs("div",{children:[x.jsx("dt",{children:"Execution tier"}),x.jsx("dd",{children:n.executionTier})]}):null]})]}):null]})}function fx({detail:n,help:e,label:t,tone:i}){return x.jsxs("div",{"data-tone":i,title:e,children:[x.jsx("i",{}),x.jsxs("span",{children:[x.jsxs("strong",{children:[t," ",x.jsx(Ep,{"aria-hidden":"true",size:12})]}),x.jsx("small",{children:n})]})]})}function WS(n){const e=n.status==="paused"&&n.boundary?"Evaluation is suspended at the asynchronous capability boundary; its runtime report completes after release.":"Waiting for this run";return[Ul("source","Your Rasa code","1 · Code",n.source),Ul("runtime","Rasa ran it","2 · Execution",n.runtime,e),Ul("artifact",K5(n.artifact),"3 · Rasa output",n.artifact),Ul("boundary",I5(n.boundary),"4 · Browser hand-off",n.boundary),Ul("effect",F5(n.effect),"5 · What you see or hear",n.effect)]}function Ul(n,e,t,i,r="Waiting for this run"){return{id:n,eyebrow:t,label:e,value:W5(i),detail:X5(n,i,r),authority:i?P5(i.authority):"Not observed",observationLabel:i?.label||null,kind:i?.kind||null,digest:i?.digest||null,count:i?.count??null,unit:i?.unit||"items",elapsedMs:i?.elapsedMs??null,optimizerExecutions:i?.optimizerExecutions??null,executionTier:i?.executionTier||null,status:i?"observed":"waiting"}}function W5(n){return n?n.count!=null?`${Number(n.count).toLocaleString()} ${n.unit||"items"}`:n.elapsedMs!=null?`${Number(n.elapsedMs).toFixed(1)} ms`:n.digest?Ku(n.digest):n.status||"observed":"waiting"}function P5(n){return n==="runtime-report"?"Reported by Rasa":n==="browser-boundary"?"Checked at the browser hand-off":n==="browser-effect"?"Checked where the browser used it":"Checked in this browser"}function PS(n){return n==="correlated"?"route matches":n==="mismatch"?"mismatch found":n==="paused"?"ready to show or play":n==="effect-running"?"browser applying result":n==="running"?"Rasa running":n==="error"?"run failed":n==="cancelled"?"run cancelled":"no run yet"}function YS(n){return n==="correlated"?"Every observed hand-off matched for this run.":n==="mismatch"?"At least one observed hand-off did not match.":n==="paused"?"Rasa has reached the browser hand-off. Canvas or Tone.js is waiting for you.":n==="effect-running"?"The browser is applying the Rasa-produced result.":n==="running"?"The Rasa browser-Wasm session is evaluating your code.":n==="error"?"The run failed before the proof trail completed.":n==="cancelled"?"This browser run was intentionally cancelled.":"Run the visible Rasa program to create a proof trail."}function Y5(n){if(!n)return"Run an example to create this trail";const e=String(n).match(/(\d+)$/)?.[1];return e?`Observed in this browser as run ${e}`:"Observed in this browser"}function K5(n){return n?.kind==="wmp-2-rgba-bytes"?"Rasa produced the pixels":n?.kind==="ordinary-rasa-scene"?"Rasa returned the scene":n?.kind==="rasa-capability-payload"?"Rasa produced the score":"Rasa produced a result"}function I5(n){return n?.kind==="ordinary-value-capability-input"?"The score reached Tone.js":n?.kind==="canvas-image-data-input"?"The pixels reached Canvas":n?.kind==="canvas-primitive-input"?"The scene reached Canvas":"The result reached the browser"}function F5(n){return n?.kind==="tone-schedule"?"Tone.js scheduled the music":n?.kind==="canvas-image-data-upload"?"Canvas displayed the pixels":n?.kind==="canvas-primitive-render"?"Canvas drew the scene":"The browser used the result"}function X5(n,e,t){if(!e)return t;if(n==="source")return"This is the code currently visible in the editor.";if(n==="runtime"){const i=Number(e.optimizerExecutions||0);return i>0?`Rasa ran this code inside the browser and used ${i.toLocaleString()} optimized packed region${i===1?"":"s"}.`:"Rasa ran this code inside the browser. This result did not need the packed-data optimizer."}return e.detail||"This step was observed in the browser."}function Q5(n){return n.id==="artifact-boundary"?"Rasa's output reached the hand-off unchanged":n.id==="boundary-effect"?"The browser used that same hand-off":n.id==="count"?"Nothing was dropped along the way":n.label}function Z5(n){return n.id==="count"?n.status==="match"?`${Number(n.expected).toLocaleString()} sent · ${Number(n.actual).toLocaleString()} used`:`${Number(n.expected).toLocaleString()} sent, but ${Number(n.actual).toLocaleString()} used`:n.status==="match"?"The browser measured the data as identical at both steps.":`Expected ${Ku(n.expected)} but observed ${Ku(n.actual)}.`}function J5(n){const e=String(n||""),t=kp(e,/:eval\s+\{:status\s+:(\S+)/),i=kp(e,/:status\s+:(\S+)/),r=kp(e,/:failed-phase\s+(:[^\s}]+)/);if(i==="ok"&&t==="ok"){const l=dD(e);if(l)return{kind:"value",text:l.text,testRun:l.events};const c=Kl(e,":rendered-value")??"nil",f=hD(c);return{kind:"value",text:f?.text??c,...f?.events?{testRun:f.events}:{}}}return{kind:"error",text:OD(e,r)}}function eD(n,{host:e=null}={}){const t=Fu(String(n||""));if(!t||t.kind!=="map")return{status:"unparseable",inspect:null,evalStatus:null,renderedValue:null,value:null,execution:null,optimizer:null,phases:[],runtime:null,plan:null,diagnostics:[]};const i=Le(D(t,"rasa/inspect"))||null,r=D(t,"eval"),l=D(r,"rendered-value"),c=l?.kind==="string"?l.value:null,f=D(r,"value")||(c?Fu(c):null);return{status:Le(D(t,"status"))||(i?"ok":"unknown"),inspect:i,evalStatus:Le(D(r,"status"))||null,renderedValue:c,value:Yl(f),execution:uD(D(t,"execution"),e),optimizer:fD(D(t,"optimizer")),phases:tD(t),runtime:rD(t),plan:aD(D(t,"plan")),diagnostics:lD(t)}}const KS=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function tD(n){return KS.map(([e,t])=>{const i=D(n,e);if(!i||i.kind==="nil")return{id:e,label:t,status:"not-requested",detail:"not captured",diagnostics:0};const r=nD(i),l=iD(e,i,r);return{id:e,label:t,status:Le(D(i,"status"))||"available",detail:sD(e,l),diagnostics:r,metrics:l}})}function nD(n){return Ve(D(n,"diagnostic-count"))??ft(D(n,"diagnostics")).length}function iD(n,e,t){if(n==="facts"){const i=D(e,"summary");return{diagnostics:t,facts:Ve(D(i,"facts"))??0,declaredFacts:Ve(D(i,"declared-facts"))??0,metadataContracts:Ve(D(i,"metadata-contracts"))??0,mode:Le(D(e,"mode"))||"unknown"}}return n==="plan"?{diagnostics:t,lanes:ft(D(e,"lanes")).length,decisions:ft(D(e,"decisions")).length,candidates:ft(D(e,"candidates")).length,rejected:ft(D(e,"rejected")).length,fallbacks:ft(D(e,"fallbacks")).length}:n==="checks"?{diagnostics:t,checks:ft(D(e,"results")).length,action:Le(D(e,"action"))||null}:{diagnostics:t}}function sD(n,e){return n==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:n==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:n==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:n==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function rD(n){const e=D(n,"session");return{implementation:Le(D(n,"runtime-implementation"))||null,memoryPath:Le(D(n,"memory-path"))||null,collectionImpl:Le(D(n,"collection-impl"))||null,hostImports:$i(D(n,"host-imports"))===!0,target:kt(D(n,"target"))||null,sessionMode:Le(D(e,"mode"))||null,persistentDefs:$i(D(e,"persistent-defs"))===!0}}function aD(n){return!n||n.kind!=="map"?null:{lanes:ft(D(n,"lanes")).map(e=>$l(e,"lane")),decisions:ft(D(n,"decisions")).map(e=>$l(e,"decision")),candidates:ft(D(n,"candidates")).map(e=>$l(e,"candidate")),rejected:ft(D(n,"rejected")).map(e=>$l(e,"rejected")),fallbacks:ft(D(n,"fallbacks")).map(e=>$l(e,"fallback"))}}function $l(n,e){return{type:e,lane:xn(D(n,"lane")),memoryPath:xn(D(n,"memory-path")),wmp:xn(D(n,"wmp")),status:xn(D(n,"status")),decision:xn(D(n,"decision")),candidate:xn(D(n,"candidate")),family:xn(D(n,"family")),evidence:xn(D(n,"evidence")),reason:kt(D(n,"reason"))||kt(D(n,"message"))||null}}function lD(n){const e=ft(D(n,"diagnostics"));return(e.length>0?e:KS.flatMap(([i])=>ft(D(D(n,i),"diagnostics")).map(r=>({item:r,id:i})))).map(i=>{const r=i.item||i;return oD(r,i.id||null)})}function oD(n,e){const t=D(n,"rasa.diagnostic/data")||D(n,"data"),i=xn(D(n,"rasa.diagnostic/severity"))||"info",r=D(n,"rasa.diagnostic/primary-span")||D(n,"span")||D(t,"rasa.error/span");return{phase:xn(D(n,"rasa.diagnostic/phase"))||xn(D(n,"phase"))||e,severity:i,code:xn(D(n,"rasa.diagnostic/code")),kind:xn(D(n,"kind")),message:kt(D(n,"rasa.diagnostic/summary"))||kt(D(n,"message"))||kt(D(t,"rasa.error/message"))||"Diagnostic record",detail:kt(D(n,"rasa.diagnostic/detail"))||null,recoverable:$i(D(n,"recoverable"))??i!=="error",span:r?.kind==="map"?{sourceId:kt(D(r,"source-id"))||null,start:Ve(D(r,"start")),end:Ve(D(r,"end"))}:null}}function xn(n){return Le(n)||(n?.kind==="string"?n.value:n?.kind==="symbol"?n.raw:null)}function cD(n){return{symbol:kt(D(n,"symbol"))||null,arity:Ve(D(n,"arity"))??null,reason:Le(D(n,"reason"))||null,fallback:Le(D(n,"fallback"))||null,arguments:ft(D(n,"arguments")).filter(e=>e.kind==="map").map(e=>({index:Ve(D(e,"index"))??null,family:Le(D(e,"family"))||null,bytes:Ve(D(e,"bytes")),movement:Le(D(e,"movement"))||null}))}}function uD(n,e){if(!n)return null;const t=Le(D(n,"host"))||null;if(e&&t&&t!=="unbound"&&t!==e)throw new Error(`execution host is ${t}, cannot bind it as ${e}`);return{semanticLane:Le(D(n,"semantic-lane"))||null,optimizedLane:Le(D(n,"optimized-lane"))||null,host:e||t,artifact:Le(D(n,"artifact"))||null,status:Le(D(n,"status"))||null,fallbackPoint:Le(D(n,"fallback-point"))||null}}function fD(n){return!n||n.kind!=="map"?null:{enabled:$i(D(n,"enabled"))===!0,probes:Ve(D(n,"probes"))??0,admitted:Ve(D(n,"admitted"))??0,executed:Ve(D(n,"executed"))??0,missed:Ve(D(n,"missed"))??0,fallbacks:ft(D(n,"fallbacks")).filter(e=>e.kind==="map").map(cD)}}function Yl(n){if(!n)return null;switch(n.kind){case"nil":return{kind:"nil",value:null};case"boolean":case"number":case"string":return{kind:n.kind,value:n.value};case"keyword":return{kind:"keyword",name:n.name};case"symbol":case"char":return{kind:n.kind,raw:n.raw};case"vector":case"list":return{kind:n.kind,items:n.items.map(Yl)};case"set":return{kind:"set",items:n.items.map(Yl).sort(hx)};case"map":return{kind:"map",entries:n.entries.map(e=>({key:Yl(e.key),value:Yl(e.value)})).sort((e,t)=>hx(e.key,t.key))};default:return{kind:n.kind||"unknown",raw:n.raw||""}}}function hx(n,e){return JSON.stringify(n).localeCompare(JSON.stringify(e))}function hD(n){const e=Fu(String(n||""));return!e||e.kind!=="map"||Le(D(e,"type"))!=="test-run"?null:{text:IS(e),events:FS(e)}}function dD(n){const e=Fu(String(n||""));if(!e||e.kind!=="map")return null;const t=D(D(e,"eval"),"value");return!t||t.kind!=="map"||Le(D(t,"type"))!=="test-run"?null:{text:IS(t),events:FS(t)}}function IS(n){const e=Le(D(n,"status"))||"unknown",t=kt(D(n,"message")),i=Ms(D(n,"namespaces")),r=Ms(D(n,"files")),l=Ms(D(n,"paths")),c=ft(D(n,"results")).filter(g=>g.kind==="map"),f=[`Test run: ${gD(n,e)}`];t&&f.push(t),dx(f,"paths",l),dx(f,"files",r);const h=i.length>0&&(e==="ok"||c.length>0);(h||c.length>0)&&f.push("");const p=new Set;for(const g of h?i:[]){f.push(g),As(f);const y=f.length;c.forEach((v,w)=>{TD(v)===g&&(wp(f,v,g),p.add(w))}),f.length===y&&f.push("  no assertion records returned"),As(f)}return h?c.some((g,y)=>!p.has(y))&&(f.push("<unknown-namespace>"),c.forEach((g,y)=>{p.has(y)||wp(f,g,null)}),As(f)):(c.forEach((g,y)=>{wp(f,g,null),p.add(y)}),c.length>0&&As(f)),c.length===0&&!h&&e==="ok"&&(f.push("No selected assertion records returned."),f.push("")),f.push(`selected ${Ve(D(n,"selected"))??0}, skipped ${Ve(D(n,"skipped"))??0}, tests ${Ve(D(n,"test"))??0}, pass ${Ve(D(n,"pass"))??0}, fail ${Ve(D(n,"fail"))??0}, error ${Ve(D(n,"error"))??0}, exit-code ${Ve(D(n,"exit-code"))??0}`),$i(D(n,"exit-requested?"))===!0&&f.push("exit requested: true"),$i(D(n,"stopped?"))===!0&&f.push(`stopped: ${Le(D(n,"stop-reason"))||"unknown"}`),f.join(`
`)}function FS(n){return{status:Le(D(n,"status"))||"unknown",message:kt(D(n,"message"))||null,namespaces:Ms(D(n,"namespaces")),files:Ms(D(n,"files")),paths:Ms(D(n,"paths")),selected:Ve(D(n,"selected"))??0,skipped:Ve(D(n,"skipped"))??0,tests:Ve(D(n,"test"))??0,pass:Ve(D(n,"pass"))??0,fail:Ve(D(n,"fail"))??0,error:Ve(D(n,"error"))??0,exitRequested:$i(D(n,"exit-requested?"))===!0,exitCode:Ve(D(n,"exit-code"))??0,stopped:$i(D(n,"stopped?"))===!0,stopReason:Le(D(n,"stop-reason"))||null,events:ft(D(n,"results")).filter(e=>e.kind==="map").map(pD)}}function pD(n){const e=xf(D(n,"test"))||null,t=e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null,i=e?.includes("/")?e.slice(e.lastIndexOf("/")+1):e,r=mD(D(n,"span")),l=Le(D(n,"error-kind"))||null,c=XS(D(n,"error-data")),f=kt(D(n,"message"))||null,h=ZS(l,f);return{status:QS(n),test:e,namespace:t,name:i,context:Ms(D(n,"context")),form:D(n,"form")?.raw||null,expected:D(n,"expected")?.raw||null,actual:D(n,"actual")?.raw||null,message:f,...l?{errorKind:l}:{},...c?{error:c}:{},...h?.explanation?{explanation:h.explanation}:{},...h?.nextStep?{nextStep:h.nextStep}:{},span:r,diff:JS(D(n,"diff"))||null}}function mD(n){if(!n||n.kind!=="map")return null;const e=kt(D(n,"source-id"))||kt(D(n,"source"));return e?{source:e,start:Ve(D(n,"start")),end:Ve(D(n,"end"))}:null}function dx(n,e,t){if(t.length!==0){As(n),n.push(`requested ${e}:`);for(const i of t)n.push(`  ${i}`)}}function gD(n,e){return e!=="ok"?e:(Ve(D(n,"error"))??0)>0?"error":(Ve(D(n,"fail"))??0)>0||(Ve(D(n,"exit-code"))??0)!==0?"failed":"ok"}function wp(n,e,t){const i=QS(e),r=MD(xf(D(e,"test"))||"<unknown-test>",t);n.push(`${wD(i)} ${r}`);for(const k of Ms(D(e,"context")))n.push(`  ${k}`);const l=D(e,"form");if(l&&n.push(`  ${l.raw}`),i==="pass"){n.push("");return}if(i==="no-assertions"){const k=kt(D(e,"message"));k&&n.push(`  ${k}`),n.push("");return}As(n);const c=kt(D(e,"message")),f=Le(D(e,"error-kind")),h=XS(D(e,"error-data"));f&&n.push(`  error-kind: ${f}`),c&&n.push(`  message: ${c}`),h&&xD(n,h,"  ");const p=ZS(f,c);p?.explanation&&n.push(`  reason: ${p.explanation}`),p?.nextStep&&n.push(`  next: ${p.nextStep}`);const g=D(e,"expected");g&&n.push(`  expected: ${g.raw}`);const y=D(e,"actual");y&&n.push(`  actual:   ${y.raw}`);const v=JS(D(e,"diff"));v&&(As(n),n.push("  diff:"),v.split(`
`).forEach(k=>n.push(`    ${k}`)));const w=CD(D(e,"span"));w&&(As(n),n.push(`  source: ${w}`)),n.push("")}function XS(n){return!n||n.kind!=="map"||$i(D(n,"rasa/error"))!==!0?null:{category:Le(D(n,"rasa.error/category"))||null,kind:Le(D(n,"rasa.error/kind"))||null,message:kt(D(n,"rasa.error/message"))||null,data:yD(D(n,"rasa.error/data"))}}function yD(n){return!n||n.kind!=="map"?[]:n.entries.map(e=>({key:bD(e.key),value:e.value.raw||kt(e.value),role:vD(e.key)}))}function bD(n){return n?.kind==="keyword"?n.name:n?.kind==="symbol"||n?.kind==="string"?n.value||n.raw:n?.raw||"<unknown>"}function vD(n){return n?.kind!=="keyword"?"detail":n.name==="rasa.host/capability"||n.name==="rasa.host/target"?"stable":"detail"}function xD(n,e,t){e.category&&n.push(`${t}category: ${e.category}`),e.kind&&n.push(`${t}kind: ${e.kind}`),e.message&&n.push(`${t}error-message: ${e.message}`),px(n,"data",e.data.filter(i=>i.role==="stable"),t),px(n,"details",e.data.filter(i=>i.role!=="stable"),t)}function px(n,e,t,i){if(t.length!==0){n.push(`${i}${e}:`);for(const r of t)n.push(`${i}  ${r.key} ${r.value}`)}}function QS(n){const e=Le(D(n,"type"))||"unknown";return e==="test-event"?Le(D(n,"status"))||"test-event":e}function wD(n){return n==="no-assertions"?"NO ASSERTIONS":n.toUpperCase()}function ZS(n,e){return n?n==="missing-linked-var"?kD(e)||{explanation:"Evaluation reached a global symbol that is not linked to a runtime var.",nextStep:"Require or refer the source namespace, or define the var before calling it."}:n==="unsupported-reader-macro"?{explanation:"The reader saw syntax that Rasa does not support yet.",nextStep:"Rewrite this form using supported reader syntax."}:n==="unsupported-macro-shape"?{explanation:"The macro expander saw a macro form shape Rasa does not accept yet.",nextStep:"Rewrite the macro call to one of the currently supported shapes."}:n==="unsupported-analyzer-form"?{explanation:"The analyzer saw a source form that Rasa cannot lower yet.",nextStep:"Rewrite this source form using supported Rasa forms."}:n==="unsupported-runtime-node"?{explanation:"The evaluator received an IR node that this runtime path cannot execute yet.",nextStep:"Use diagnostics or inspect output to locate the source form, then rewrite it or defer this feature."}:null:null}function kD(n){const e=SD(n);return["deftest","is","testing","are","run-tests"].includes(e)?{explanation:"This test helper belongs to `rasa.test`, but it is not referred in the current namespace.",nextStep:"Require it with `(require '[rasa.test :refer [deftest is testing are run-tests]])` or add the same `:refer` to the namespace form."}:e==="runner/run"?{explanation:"`runner` is not a loaded alias for the user-space `rasa.test.runner` namespace.",nextStep:"Require it with `(require '[rasa.test.runner :as runner])` or add `[rasa.test.runner :as runner]` to the namespace form."}:null}function SD(n){return String(n||"").match(/^linked global `([^`]+)` is not available$/)?.[1]||null}function JS(n){if(!n||n.kind!=="map")return"";const e=Le(D(n,"kind"));if(e==="map"){const t=[];for(const i of ft(D(n,"changed")))i.kind==="map"&&(t.push(D(i,"key")?.raw||"changed value"),Iu(t,"expected",D(i,"expected")),Iu(t,"actual  ",D(i,"actual")));return uu(t,"missing",D(n,"missing")),uu(t,"extra",D(n,"extra")),t.length?t.join(`
`):n.raw}if(e==="vector")return AD("index",n);if(e==="set"){const t=[];return uu(t,"missing",D(n,"missing")),uu(t,"extra",D(n,"extra")),t.length?t.join(`
`):n.raw}if(e==="string"||e==="scalar"||e==="opaque"){const t=[];return lr(t,"expected",D(n,"expected")),lr(t,"actual  ",D(n,"actual")),lr(t,"prefix-length",D(n,"prefix-length")),lr(t,"expected-count",D(n,"expected-count")),lr(t,"actual-count",D(n,"actual-count")),t.length?t.join(`
`):n.raw}return e==="equal"?"values are equal":n.raw}function AD(n,e){const t=[];for(const i of ft(D(e,"changed")))i.kind==="map"&&(t.push(`${n} ${D(i,n)?.raw||"?"}`),Iu(t,"expected",D(i,"expected")),Iu(t,"actual  ",D(i,"actual")));return lr(t,"expected-count",D(e,"expected-count")),lr(t,"actual-count",D(e,"actual-count")),t.length?t.join(`
`):e.raw}function lr(n,e,t){t&&n.push(`${e} ${t.raw}`)}function Iu(n,e,t){t&&n.push(`  ${e} ${t.raw}`)}function uu(n,e,t){const i=ft(t);i.length>0&&n.push(`${e}: ${i.map(r=>r.raw).join(", ")}`)}function CD(n){if(!n||n.kind!=="map")return"";const e=kt(D(n,"source-id"))||kt(D(n,"source"));if(!e)return"";const t=Ve(D(n,"start")),i=Ve(D(n,"end"));return t!==null&&i!==null?`${e}:${t}..${i}`:e}function TD(n){const e=xf(D(n,"test"));return e?.includes("/")?e.slice(0,e.lastIndexOf("/")):null}function MD(n,e){return!e||!n.startsWith(`${e}/`)?n:n.slice(e.length+1)}function As(n){n[n.length-1]!==""&&n.push("")}function D(n,e){if(!n||n.kind!=="map")return null;for(const t of n.entries)if(Le(t.key)===e)return t.value;return null}function ft(n){return n?.kind==="vector"?n.items:[]}function Ms(n){return ft(n).map(xf).filter(e=>e!==null)}function Le(n){return n?.kind==="keyword"?n.name:null}function xf(n){return n?n.kind==="string"?n.value:n.kind==="symbol"||n.kind==="keyword"?n.raw:n.raw??null:null}function kt(n){return n?n.kind==="string"?n.value:n.kind==="nil"?"":n.raw||"":""}function Ve(n){return n?.kind==="number"?n.value:null}function $i(n){return n?.kind==="boolean"?n.value:null}function Fu(n){const e=new ED(n);try{const t=e.readValue();return e.skipWhitespace(),t}catch{return null}}class ED{constructor(e){this.text=e,this.index=0}readValue(){this.skipWhitespace();const e=this.index,t=this.text[this.index];if(!t)throw new Error("expected EDN value");if(t==='"'){const{value:r,end:l}=e2(this.text,this.index);return this.index=l,{kind:"string",value:r,raw:this.text.slice(e,this.index)}}if(t===":"){const r=this.readToken();return{kind:"keyword",name:r.slice(1),raw:r}}if(t==="[")return this.readDelimited("vector","[","]");if(t==="(")return this.readDelimited("list","(",")");if(t==="{")return this.readMap();if(t==="#"&&this.text[this.index+1]==="{")return this.readSet();if(t==="\\")return{kind:"char",raw:this.readToken()};const i=this.readToken();return i==="nil"?{kind:"nil",value:null,raw:i}:i==="true"||i==="false"?{kind:"boolean",value:i==="true",raw:i}:/^[+-]?(?:\d+\.\d+|\d+)$/.test(i)?{kind:"number",value:Number(i),raw:i}:{kind:"symbol",raw:i}}readDelimited(e,t,i){const r=this.index;this.expect(t);const l=[];for(;;){if(this.skipWhitespace(),this.text[this.index]===i)return this.index+=1,{kind:e,items:l,raw:this.text.slice(r,this.index)};l.push(this.readValue())}}readMap(){const e=this.index;this.expect("{");const t=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"map",entries:t,raw:this.text.slice(e,this.index)};const i=this.readValue(),r=this.readValue();t.push({key:i,value:r})}}readSet(){const e=this.index;this.index+=2;const t=[];for(;;){if(this.skipWhitespace(),this.text[this.index]==="}")return this.index+=1,{kind:"set",items:t,raw:this.text.slice(e,this.index)};t.push(this.readValue())}}readToken(){const e=this.index;for(;this.index<this.text.length&&!RD(this.text[this.index]);)this.index+=1;if(this.index===e)throw new Error("expected token");return this.text.slice(e,this.index)}expect(e){if(this.text[this.index]!==e)throw new Error(`expected ${e}`);this.index+=1}skipWhitespace(){for(;this.index<this.text.length&&/[\s,]/.test(this.text[this.index]);)this.index+=1}}function RD(n){return/[\s,\[\]\(\)\{\}"]/.test(n)}function kp(n,e){const t=e.exec(n);return t?t[1].replace(/^:/,""):""}function OD(n,e){const t=Kl(n,":rendered-error");if(t)return t;const i=n.indexOf(":eval {:status :failed"),r=i>=0?Kl(n.slice(i),":message"):"";if(r)return r;const l=Kl(n,":error")||Kl(n,":message");if(l)return l;const c=e?` in ${e}`:"",f=n.match(/:diagnostics\s+\[(.*?)]/s)?.[1]?.trim();return f?`Evaluation failed${c}.
${f}`:`Evaluation failed${c}.`}function Kl(n,e){const t=n.indexOf(e);if(t<0)return null;let i=t+e.length;for(;i<n.length&&/\s/.test(n[i]);)i+=1;if(n[i]!=='"')return null;const r=e2(n,i);return r?r.value:null}function e2(n,e){let t="",i=!1;for(let r=e+1;r<n.length;r+=1){const l=n[r];if(i){t+=DD(l),i=!1;continue}if(l==="\\"){i=!0;continue}if(l==='"')return{value:t,end:r+1};t+=l}return null}function DD(n){return n==="n"?`
`:n==="r"?"\r":n==="t"?"	":n==="b"?"\b":n==="f"?"\f":n}const mx=Object.freeze({phases:"all"}),ND=()=>{},gx="Rasa browser runtime is loading.";function t2({engineUrl:n="",manifestUrl:e="",bootSource:t="",evalOptions:i=mx,configureOptions:r=mx,onRuntimeStateChange:l=ND,onRunResult:c=null,formatDisplay:f=null}={}){const h=j.useRef(null),p=j.useRef(null),g=j.useRef([]),y=j.useRef({available:!1,message:gx,execution:null,optimizer:null}),[v,w]=j.useState(y.current),[k,A]=j.useState("loading"),[C,O]=j.useState(""),[G,_]=j.useState("empty"),[B,R]=j.useState([]),[W,q]=j.useState(!1),[F,ie]=j.useState(0),he=k==="pending",fe=j.useCallback(Z=>{const ae={...y.current,...Z};y.current=ae,w(ae),l(ae)},[l]),te=j.useCallback(Z=>{if(!h.current||!Z)return{status:"unavailable",tokens:[],diagnostics:[]};try{return h.current.tokens(String(Z))}catch(ae){return{status:"unavailable",tokens:[],diagnostics:[],error:ae}}},[]),ve=j.useCallback(async()=>{const Z=p.current,ae=h.current;p.current=null,h.current=null,await Z?.close?.(),await ae?.close?.()},[]),ye=j.useCallback(async()=>{A("loading"),O(""),_("empty"),R([]),await ve();try{const Z=e?await bk(e):BD(n||"./assets/ras.wasm"),ce=await Bk(Z,{engineOptions:{onPackedOutput:X=>{g.current.push(X)}}});h.current=ce;const M=await ce.openSession({configureOptions:r,evalOptions:i});p.current=M;const U=!!Z?.optimizerManifestUrl;if(t){const X=await M.load(t,r);if(!Lk(X))throw new Error(`failed to load Rasa core: ${jD(X.reportText,"Rasa load failed")}`)}A("ready"),fe({available:!0,runtimeKind:ce.runtime.kind||"wasm-component",distribution:Z?.manifestUrl||null,capabilities:Z?.policy.entries()||[],message:null,optimizedCallables:Z?.optimizerManifestUrl||null,optimizerEnabled:U,execution:null,optimizer:null})}catch(Z){await ve(),A("failed"),O(Z.message),_("error"),fe({available:!1,message:Z.message,distribution:null,capabilities:[],execution:null,optimizer:null})}},[t,ve,r,n,e,fe]);j.useEffect(()=>(ye(),()=>{ve()}),[ye,ve]);const xe=j.useCallback(async(Z,ae=null)=>{const ce=String(Z??"");if(he)return O(gx),_("notice"),R([]),null;if(!h.current||!p.current||W)return null;q(!0),g.current=[];const M=Sp();try{const U=ae?.evalOptions||i,X=await p.current.eval(ce,U),J=X.reportText,me=Sp()-M,de=J5(J),ke=eD(J,{host:"browser"}),Je=g.current.slice(),dt=(ae?.formatDisplay||f)?.({display:de,parity:ke,packedOutputs:Je,report:J,source:ce})||de,gi={report:J,display:dt,rawDisplay:de,parity:ke,elapsedMs:me,packedOutputs:Je,source:ce,status:X.status};return O(dt.text),_(dt.kind),R(dt.kind==="value"?te(dt.text).tokens:[]),ie(Gi=>Gi+1),A(dt.kind==="error"?"error":"ready"),(ke.execution||ke.optimizer)&&fe({available:!0,runtimeKind:h.current.runtime.kind||"wasm-component",execution:ke.execution,optimizer:ke.optimizer}),c?.(gi),gi}catch(U){const X={error:U,display:{kind:"error",text:U.message},elapsedMs:Sp()-M,packedOutputs:g.current.slice(),source:ce,status:"error"};return O(U.message),_("error"),R([]),A("error"),c?.(X),X}finally{q(!1)}},[i,f,c,fe,W,he,te]),V=j.useCallback(Z=>h.current?.provider(String(Z))||null,[]),Q=j.useCallback(()=>h.current?.capabilityTrace||null,[]);return{boot:ye,canRun:!!(h.current&&p.current&&!W&&!he),getHostTrace:Q,getProvider:V,output:C,outputKind:G,outputTokens:B,run:xe,runCount:F,running:W,runtimePending:he,runtimeState:v,status:k,syntaxTokens:te}}function Sp(){return globalThis.performance?.now?.()??Date.now()}function jD(n,e){const t=n.match(/:failed-phase\s+(:[^\s}]+)/)?.[1]||null,i=n.match(/:message\s+"((?:\\.|[^"\\])*)"/)?.[1]||null;return i?i.replace(/\\n/g,`
`).replace(/\\"/g,'"'):t?`${t} failed`:e||"runtime report failed"}function BD(n){const e=new URL(n,globalThis.location?.href||"http://localhost/").href;return new yk({manifestUrl:null,manifest:{runtime:n},runtimeUrl:e})}const zD=j.forwardRef(function({ariaLabel:e="Rasa source editor",className:t="",onChange:i=null,onEvidenceSelect:r=null,onInspectionChange:l=null,onRun:c=null,profile:f=void 0,readOnly:h=!1,source:p="",syntaxKey:g=null,syntaxTokens:y=null},v){const w=j.useRef(null),k=j.useRef(null),A=j.useRef(i),C=j.useRef(r),O=j.useRef(l),G=j.useRef(c);A.current=i,C.current=r,O.current=l,G.current=c,j.useEffect(()=>{if(!w.current)return;const B=new gg({parent:w.current,source:p,tooling:y?{tokens:y}:null,onChange:R=>A.current?.(R),onInspectionChange:R=>O.current?.(R),onRun:()=>G.current?.(),...f?{profile:f}:{},readOnly:h});return k.current=B,()=>{B.destroy(),k.current=null}},[f,h]),j.useEffect(()=>{k.current?.setTooling(y?{tokens:y}:null)},[g,y]),j.useEffect(()=>{const B=k.current;!B||B.state.doc.toString()===p||B.dispatch({changes:{from:0,to:B.state.doc.length,insert:p}})},[p]),j.useImperativeHandle(v,()=>({applyInspection:(B,R)=>k.current?.applyInspection(B,R),clearInspection:()=>k.current?.clearInspection(),focus:()=>k.current?.focus(),getSource:()=>k.current?.state.doc.toString()||"",inspection:()=>k.current?.inspection||null,revealSpan:B=>k.current?.reveal(B)||!1,selectEvidence:(B,R)=>k.current?.selectEvidence(B,R)||[],setSource:B=>{const R=k.current;R&&R.dispatch({changes:{from:0,to:R.state.doc.length,insert:String(B??"")}})}}),[]);const _=B=>{const W=B.target.closest?.("[data-evidence-group]")?.dataset?.evidenceGroup;W&&C.current?.(W)};return x.jsx("div",{"aria-label":e,className:`rasa-editor ${t}`,onClick:_,ref:w})}),n2=Object.freeze([["reader","Read"],["expand","Expand"],["analysis","Analyze"],["ir","IR"],["facts","Facts"],["checks","Checks"],["plan","Plan"],["eval","Evaluate"]]);function LD(n,{elapsedMs:e=0}={}){const t=n?.report||{},i=n2.map(([c,f])=>_D(c,f,t[c])),r=qD(t.plan),l=VD(t);return{id:`${n?.label||"run"}:${e}:${n?.status||"unknown"}`,result:n,run:{elapsedMs:e,reportMode:i.some(c=>c.id!=="eval"&&c.status!=="not-requested")?"all":"eval",status:n?.status||"unknown"},parity:{status:n?.status||"unknown",evalStatus:n?.evalStatus||null,renderedValue:n?.renderedValue??null,value:n?.value??null,execution:UD(t.execution),optimizer:$D(t.optimizer),phases:i,runtime:GD(t),plan:r,diagnostics:l,rawReport:t}}}function _D(n,e,t){if(!t||typeof t!="object")return{id:n,label:e,status:"not-requested",detail:"not captured",diagnostics:0,metrics:{}};const i=Number(t["diagnostic-count"]??t.diagnostics?.length??0),r={diagnostics:i};if(n==="facts"){const l=t.summary||{};Object.assign(r,{facts:Number(l.facts||0),declaredFacts:Number(l["declared-facts"]||0),metadataContracts:Number(l["metadata-contracts"]||0),mode:qe(t.mode)||"unknown"})}return n==="checks"&&Object.assign(r,{checks:t.results?.length||0,action:qe(t.action)||null}),n==="plan"&&Object.assign(r,{lanes:t.lanes?.length||0,decisions:t.decisions?.length||0,candidates:t.candidates?.length||0,rejected:t.rejected?.length||0,fallbacks:t.fallbacks?.length||0}),{id:n,label:e,status:qe(t.status)||"available",detail:HD(n,r),diagnostics:i,metrics:r}}function HD(n,e){return n==="facts"?`${e.facts} facts · ${e.declaredFacts} declared · ${e.mode}`:n==="checks"?`${e.checks} checks${e.action?` · ${e.action}`:""}`:n==="plan"?`${e.lanes} lanes · ${e.candidates} candidates · ${e.rejected} rejected`:n==="eval"?e.diagnostics?`${e.diagnostics} diagnostics`:"value returned":e.diagnostics?`${e.diagnostics} diagnostics`:"clean"}function qD(n){return!n||typeof n!="object"?null:Object.fromEntries(["lanes","decisions","candidates","rejected","fallbacks"].map(e=>[e,(n[e]||[]).map(t=>({type:e==="lanes"?"lane":e.replace(/s$/,""),lane:qe(t.lane),memoryPath:qe(t["memory-path"]),wmp:qe(t.wmp),status:qe(t.status),decision:qe(t.decision),candidate:qe(t.candidate),family:qe(t.family),evidence:qe(t.evidence),reason:t.reason||t.message||null}))]))}function VD(n){const e=Array.isArray(n.diagnostics)?n.diagnostics:[];return(e.length?e.map(i=>({record:i,phase:null})):n2.flatMap(([i])=>(n[i]?.diagnostics||[]).map(r=>({record:r,phase:i})))).map(({record:i,phase:r})=>{const l=i.data||i["rasa.diagnostic/data"]||{},c=i.span||i["rasa.diagnostic/primary-span"]||l["rasa.error/span"]||null,f=qe(i["rasa.diagnostic/severity"])||"info";return{phase:qe(i.phase||i["rasa.diagnostic/phase"])||r,severity:f,code:qe(i["rasa.diagnostic/code"]),kind:qe(i.kind),message:i["rasa.diagnostic/summary"]||i.message||l["rasa.error/message"]||"Diagnostic record",detail:i["rasa.diagnostic/detail"]||null,recoverable:i.recoverable??f!=="error",span:c&&typeof c=="object"?{sourceId:c["source-id"]||null,start:Number(c.start??0),end:Number(c.end??0)}:null}})}function UD(n){return n?{semanticLane:qe(n["semantic-lane"]),optimizedLane:qe(n["optimized-lane"]),host:qe(n.host),artifact:qe(n.artifact),status:qe(n.status),fallbackPoint:qe(n["fallback-point"])}:null}function $D(n){return!n||typeof n!="object"?null:{enabled:n.enabled===!0,probes:Number(n.probes||0),admitted:Number(n.admitted||0),executed:Number(n.executed||0),missed:Number(n.missed||0),fallbacks:(n.fallbacks||[]).map(e=>({symbol:e.symbol||null,arity:e.arity??null,reason:qe(e.reason),fallback:qe(e.fallback),arguments:e.arguments||[]}))}}function GD(n){const e=n.session||{};return{implementation:qe(n["runtime-implementation"]),memoryPath:qe(n["memory-path"]),collectionImpl:qe(n["collection-impl"]),hostImports:n["host-imports"]===!0,target:qe(n.target),sessionMode:qe(e.mode),persistentDefs:e["persistent-defs"]===!0}}function qe(n){if(n==null)return null;if(typeof n=="string"||typeof n=="number"||typeof n=="bigint"||typeof n=="boolean")return String(n).replace(/^:/,"");if(Array.isArray(n))return n.map(qe).filter(Boolean).join(", ");if(typeof n=="object"){const e=n.kind||n.type,t=[n.items,n.value,n.values].find(Array.isArray);if(n.name!=null)return String(n.name).replace(/^:/,"");if(["set","vector","list"].includes(e)&&t)return t.map(qe).filter(Boolean).join(", ");if(e==="map"&&Array.isArray(n.entries))return n.entries.map(({key:r,value:l})=>{const c=qe(r)||"field",f=qe(l)||"structured value";return`${c}: ${f}`}).join(", ");if(["string","number","boolean"].includes(e)&&n.value!=null)return String(n.value);if(["symbol","char"].includes(e)&&n.raw!=null)return String(n.raw);if(n.label!=null)return qe(n.label);const i=Object.entries(n).filter(([r])=>!["kind","type","raw"].includes(r));return i.length?i.map(([r,l])=>`${r}: ${qe(l)||"structured value"}`).join(", "):null}return String(n)}const WD=Object.freeze({phases:"all"});function PD({manifestUrl:n="/rasa/browser-product.json",evalOptions:e=WD,configureOptions:t=e}={}){const i=j.useRef(null),r=j.useRef(0),[l,c]=j.useState("loading"),[f,h]=j.useState(null),[p,g]=j.useState(null),[y,v]=j.useState(!1),[w,k]=j.useState(null),A=j.useCallback(async()=>{r.current+=1;const B=i.current;i.current=null,await B?.session?.close?.(),await B?.browser?.close?.()},[]),C=j.useCallback(async()=>{const B=r.current+1;r.current=B,c("loading"),h(null),g(null);const R=i.current;i.current=null,await R?.session?.close?.(),await R?.browser?.close?.();try{const W=new URL(n,globalThis.location.href).href,q=await zO(W),F=await q.openSession({evalOptions:e,configureOptions:t});if(B!==r.current){await F.close(),await q.close();return}i.current={browser:q,session:F},k({apiVersion:q.manifest.api.version,build:q.build,product:q.product,runtimeContract:q.runtimeContract}),c("ready")}catch(W){if(B!==r.current)return;h(W),c("failed")}},[t,e,n]);j.useEffect(()=>(C(),()=>{A()}),[C,A]);const O=j.useCallback(async(B,R={})=>{const W=i.current;if(!W||y)return null;v(!0),h(null);const q=performance.now();try{const F=await W.session.eval(String(B??""),R),ie=performance.now()-q,he={source:String(B??""),...LD(F,{elapsedMs:ie})};return g(he),c(F.status==="ok"?"ready":"refused"),he}catch(F){return h(F),c("failed"),null}finally{v(!1)}},[y]),G=j.useCallback(async(B,R={})=>{const W=i.current?.browser;return W?W.inspect(String(B??""),R):null},[]),_=j.useCallback(B=>{try{return i.current?.browser?.tokens(String(B??""))||{status:"unavailable",tokens:[],diagnostics:[]}}catch(R){return{status:"unavailable",tokens:[],diagnostics:[],error:R}}},[]);return{boot:C,canRun:l==="ready"||l==="refused",error:f,evaluate:O,inspect:G,productInfo:w,run:p,running:y,status:l,syntaxTokens:_}}const Ap=Object.freeze({phases:"all"});j.forwardRef(function({initialSource:e="(+ 1 2 3)",manifestUrl:t="/rasa/browser-product.json",onRunResult:i=null,onRuntimeStateChange:r=null,subtitle:l="One persistent browser session",title:c="Rasa browser product"},f){const[h,p]=j.useState(e),g=PD({configureOptions:Ap,evalOptions:Ap,manifestUrl:t});j.useEffect(()=>{const w=g.status==="ready"||g.status==="refused";r?.({available:w,message:g.error?.message||null,product:g.productInfo,runtimeKind:w?"wasm-component":null,status:g.status})},[r,g.error,g.productInfo,g.status]);const y=j.useCallback(async(w=null)=>{const k=w===null?h:String(w);w!==null&&p(k);const A=await g.evaluate(k,Ap);return i?.(A),A},[i,g,h]);j.useImperativeHandle(f,()=>({loadSource:w=>p(String(w??"")),reset:()=>g.boot(),runSource:(w=null)=>y(w),syntaxTokens:w=>g.syntaxTokens(w)}),[y,g.boot]);const v=YD(g);return x.jsxs("section",{className:"rasa-repl","aria-label":c,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:c}),x.jsx("strong",{children:l})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${g.status}`,children:g.status})]}),x.jsx(zD,{className:"rasa-repl__input",onChange:p,onRun:y,source:h,syntaxKey:g.status,syntaxTokens:g.syntaxTokens}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{disabled:!g.canRun||g.running,onClick:()=>y(),type:"button",children:g.running?"Running":"Run"}),x.jsx("button",{disabled:g.status==="loading",onClick:g.boot,type:"button",children:"Restart session"})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${v.kind}`,children:v.text})]})});function YD(n){if(n.error)return{kind:"error",text:n.error.message||String(n.error)};const e=n.run?.result;return e?e.status==="ok"?{kind:"value",text:e.renderedValue??"nil"}:{kind:"error",text:e.refusal?.message||`Rasa returned ${e.status}`}:{kind:"empty",text:"Run a Rasa form to produce a value."}}const KD="(+ 1 2 3)",ID="Output will appear here.",FD=()=>{};j.forwardRef(function({engineUrl:e="",manifestUrl:t="",initialSource:i=KD,bootSource:r="",title:l="Rasa WASM",subtitle:c="Shared browser session",className:f="",onRuntimeStateChange:h=FD,onRunResult:p=null,onSourceChange:g=null,formatDisplay:y=null},v){const w=j.useRef(null),k=j.useRef(null),A=j.useRef(0),C=j.useRef(null),[O,G]=j.useState(i),_=t2({bootSource:r,engineUrl:e,formatDisplay:y,manifestUrl:t,onRunResult:p,onRuntimeStateChange:h}),B=j.useCallback((F=null,ie=80)=>{A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{if(A.current=0,!k.current)return;const he=F??k.current?.state.doc.toString()??"";k.current.applySyntax(_.syntaxTokens(he))},ie)},[_.syntaxTokens]),R=j.useCallback(F=>{const ie=String(F??""),he=k.current;he&&he.dispatch({changes:{from:0,to:he.state.doc.length,insert:ie}}),G(ie),g?.(ie),B(ie,0)},[g,B]);j.useEffect(()=>{if(!(!w.current||k.current))return k.current=new gg({parent:w.current,source:i,onChange:F=>{G(F),g?.(F),B(F)},onRun:()=>{C.current?.()}}),B(i,0),k.current.focus(),()=>{A.current&&clearTimeout(A.current),k.current?.destroy(),k.current=null}},[i,g,B]),j.useEffect(()=>{B(null,0)},[B,_.status]);const W=j.useCallback(async(F=null)=>{const ie=F===null?k.current?.state.doc.toString()??O:String(F);return F!==null&&R(ie),_.run(ie)},[_.run,R,O]);C.current=()=>W(),j.useImperativeHandle(v,()=>({getProvider:F=>_.getProvider(F),loadSource:F=>R(F),runSource:(F=null)=>W(F),reset:()=>_.boot()}),[W,_.boot,_.getProvider,R]);const q=j.useMemo(()=>u3(_.output||ID,_.outputTokens),[_.output,_.outputTokens]);return x.jsxs("section",{className:`rasa-repl ${f}`,"aria-label":l,children:[x.jsxs("header",{className:"rasa-repl__head",children:[x.jsxs("div",{children:[x.jsx("span",{className:"rasa-repl__eyebrow",children:l}),x.jsx("strong",{children:c})]}),x.jsx("span",{className:`rasa-repl__status rasa-repl__status--${_.status}`,children:_.status})]}),x.jsx("div",{className:"rasa-repl__input",ref:w}),x.jsxs("div",{className:"rasa-repl__actions",children:[x.jsx("button",{type:"button",onClick:()=>W(),disabled:!_.canRun,children:_.running?"Running":"Run"}),x.jsx("button",{type:"button",onClick:_.boot,disabled:_.status==="loading"||_.runtimePending,children:"Reset engine"}),x.jsxs("span",{children:[_.runCount," runs"]})]}),x.jsx("pre",{className:`rasa-repl__output rasa-repl__output--${_.outputKind}`,children:q.map((F,ie)=>F.className?x.jsx("span",{className:F.className,children:F.text},`${ie}:${F.text}`):x.jsx("span",{children:F.text},`${ie}:${F.text}`))})]})});function XD({className:n="",onRendered:e=null,renderKey:t=null,scene:i,sourceHash:r}){const l=j.useRef(null),c=j.useRef(e);return c.current=e,j.useEffect(()=>{const f=l.current;if(!f)return;const h=()=>d6(f,i,r),p=h();c.current?.({count:i.primitives.length,detail:`${i.primitives.length.toLocaleString()} drawing instructions rendered by Canvas`,kind:"canvas-primitive-render",label:"Canvas primitive draw",payload:p,unit:"primitives"});const g=new ResizeObserver(h);g.observe(f);const y=new MutationObserver(h);return y.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{g.disconnect(),y.disconnect()}},[t,i,r]),j.createElement("canvas",{className:`rasa-scene-canvas ${n}`.trim(),ref:l})}function QD({className:n="",image:e,onRendered:t=null,renderKey:i=null,sourceHash:r}){const l=j.useRef(null),c=j.useRef(t);return c.current=t,j.useEffect(()=>{const f=l.current;if(!f)return;const h=()=>h6(f,e,r),p=h();c.current?.({count:e.pixels.byteLength,detail:`${e.pixels.byteLength.toLocaleString()} RGBA bytes uploaded with ImageData`,kind:"canvas-image-data-upload",label:"Canvas pixel upload",payload:p,unit:"bytes"});const g=new ResizeObserver(h);return g.observe(f),()=>g.disconnect()},[e,i,r]),j.createElement("canvas",{className:`rasa-grid-canvas ${n}`.trim(),ref:l})}function ZD({empty:n=null,events:e,onSectionPlay:t=null,playbackOffsetSeconds:i=0,playbackStartedAtMs:r=null,playing:l=!1,sections:c=[]}){return e.length===0?n:j.createElement(JD,{events:e,onSectionPlay:t,playbackOffsetSeconds:i,playbackStartedAtMs:r,playing:l,sections:c})}function JD({events:n,onSectionPlay:e,playbackOffsetSeconds:t,playbackStartedAtMs:i,playing:r,sections:l}){const c=j.useRef(null),f=j.useRef(null),[h,p]=j.useState(0),g=e6(n,l);j.useEffect(()=>{const w=c.current;if(!w)return;const k=()=>t6(w,g);k();const A=new ResizeObserver(k);A.observe(w);const C=new MutationObserver(k);return C.observe(document.documentElement,{attributeFilter:["class","data-rasa-theme","data-theme","style"],attributes:!0}),()=>{A.disconnect(),C.disconnect()}},[n,l]),j.useEffect(()=>{f.current&&(f.current.scrollLeft=0),p(0)},[n]);const y=r&&i!==null?{"--timeline-duration":`${Math.max(.1,g.maxTime-t)}s`,"--timeline-delay":`${(i-a6())/1e3}s`,"--timeline-start":`${t/g.maxTime*100}%`}:null,v=s6(g,f.current,h);return j.createElement("section",{"aria-label":`${n.length.toLocaleString()} exact Rasa-scheduled events across ${g.tracks.length} tracks`,className:"sequencer score-sequencer","data-playing":!!y,style:{"--score-track-count":g.tracks.length}},j.createElement("aside",{className:"score-track-labels"},j.createElement("span",{className:"score-corner"},"Tracks"),...g.tracks.map(([w,k])=>j.createElement("span",{className:"score-track-label",key:w},j.createElement("strong",null,w),j.createElement("small",null,`${k.length.toLocaleString()} notes`)))),j.createElement("div",{className:"score-scroll",onScroll:w=>p(w.currentTarget.scrollLeft),ref:f},j.createElement("div",{className:"score-content",style:{width:`${g.timelineWidth}px`}},j.createElement("div",{className:"score-ruler"},j.createElement("span",{className:"score-time-start"},"0:00"),...g.sections.map(w=>j.createElement("span",{className:"score-section-label",key:`${w.name}:${w.time}`,style:{left:`${w.time/g.maxTime*100}%`}},w.name)),j.createElement("span",{className:"score-time-end"},i6(g.maxTime))),j.createElement("div",{className:"score-canvas-slot"},j.createElement("canvas",{className:"music-score-canvas",ref:c,role:"img",title:"Exact Rasa-generated note events arranged by section, track, time, and pitch"})),y?j.createElement("span",{"aria-hidden":"true",className:"score-playhead-rail"},j.createElement("span",{className:"timeline-playhead",key:`playhead:${i}`,style:y})):null)),g.sections.length>0?j.createElement("nav",{"aria-label":"Score sections",className:"score-section-nav"},...g.sections.map(w=>j.createElement("button",{"aria-pressed":w.name===v,key:`${w.name}:navigate`,onClick:()=>{r6(f.current,g,w),e?.(w)},style:{flexGrow:Math.max(1,w.duration)},title:e?`Play from ${w.name}`:`Show ${w.name}`,type:"button"},w.name))):null)}function e6(n,e=[]){const t=o6(n),i=Math.max(1,...n.map(l=>Number(l.time||0)+Number(l.duration||0))),r=e.map(l=>({name:String(l?.name||"section"),time:Number(l?.time||0),duration:Number(l?.durationSeconds||0)}));return{events:n,maxTime:i,sections:r,timelineWidth:Math.max(780,Math.ceil(i*8)),tracks:t}}function t6(n,e){const t=n.getBoundingClientRect();if(t.width<=0||t.height<=0)return;const i=Math.max(1,globalThis.devicePixelRatio||1);n.width=Math.round(t.width*i),n.height=Math.round(t.height*i);const r=n.getContext("2d");r.setTransform(i,0,0,i,0,0);const l=getComputedStyle(n),c=l.getPropertyValue("--rasa-panel").trim()||"#0b0e12",f=l.getPropertyValue("--rasa-line").trim()||"#27303a",h=t.width,p=t.height,g=p/e.tracks.length;r.fillStyle=c,r.fillRect(0,0,h,p),e.sections.forEach((y,v)=>{const w=y.time/e.maxTime*h,k=y.duration/e.maxTime*h;r.fillStyle=v%2===0?"rgba(246, 211, 101, 0.035)":"rgba(120, 214, 255, 0.025)",r.fillRect(w,0,k,p),r.fillStyle=f,r.fillRect(Math.round(w),0,1,p)}),e.tracks.forEach(([y,v],w)=>{const k=w*g;r.fillStyle=f,r.fillRect(0,Math.round(k),h,1);const A=v.map(G=>Number(G.pitch)).filter(Number.isFinite),C=A.length?Math.min(...A):0,O=A.length?Math.max(...A):0;for(const G of v){const _=Number(G.time||0)/e.maxTime*h,B=Math.max(1.5,Number(G.duration||.05)/e.maxTime*h),R=Number(G.pitch),W=Number.isFinite(R)&&O!==C?(R-C)/(O-C):n6(G.pitch),q=k+g-10-W*Math.max(8,g-20);r.globalAlpha=.82,r.fillStyle=G.color||"#f6d365",r.fillRect(_,q,B,Math.max(2,Math.min(5,g*.08)))}r.globalAlpha=1})}function n6(n){return{kick:.12,snare:.48,"tom-low":.32,"tom-high":.64,hihat:.84,rim:.62,shaker:.72,tick:.92}[String(n)]??.5}function i6(n){const e=Math.max(0,Math.round(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function s6(n,e,t){if(!n.sections.length)return null;const i=e?.scrollWidth||n.timelineWidth,r=e?.clientWidth||0,l=(t+r/2)/i*n.maxTime;let c=n.sections[0].name;for(const f of n.sections)f.time<=l&&(c=f.name);return c}function r6(n,e,t){if(!n)return;const i=t.time/e.maxTime*n.scrollWidth;n.scrollTo({behavior:"smooth",left:Math.min(i,n.scrollWidth-n.clientWidth)})}function a6(){return globalThis.performance?.now?.()??Date.now()}function l6(n,{display:e,parity:t,packedOutputs:i=[]}){if(e?.kind!=="value")return e;const r=t?.value;if(n==="music"&&Rt(ze(r,"status"))==="scheduled"){const f=Xu(ze(r,"events"));return{kind:"value",text:["{:status :scheduled",` :boundary ${Rt(ze(r,"boundary"))||"ordinary-values"}`,` :tracks ${wn(ze(r,"tracks"))}`,` :notes ${wn(ze(r,"notes"))}`,` :events [${f.length} scheduled provider events]`,` :loaded-from ${JSON.stringify(Rt(ze(r,"loadedFrom"))||"provider")}`,` :trace-count ${wn(ze(r,"traceCount"))}}`].join(`
`)}}if(n!=="visuals")return e;const l=Rt(ze(r,"kind"));if(l==="rasa.demo/vector-scene"){const f=Xu(ze(r,"primitives"));return{kind:"value",text:["{:kind :rasa.demo/vector-scene",` :title ${JSON.stringify(Rt(ze(r,"title"))||"Vector scene")}`,` :width ${wn(ze(r,"width"))}`,` :height ${wn(ze(r,"height"))}`,` :primitive-count ${f.length}`,` :boundary ${Rt(ze(r,"boundary"))||"ordinary-values"}`,` :renderer ${Rt(ze(r,"renderer"))||"canvas-vector-primitives"}}`].join(`
`)}}if(l!=="rasa.demo/packed-rgba-proof")return e;const c=wn(ze(r,"byte-length"));return{kind:"value",text:["{:kind :rasa.demo/packed-rgba-proof",` :title ${JSON.stringify(Rt(ze(r,"title"))||"Packed image")}`,` :callable ${JSON.stringify(Rt(ze(r,"callable"))||"missing")}`,` :width ${wn(ze(r,"width"))}`,` :height ${wn(ze(r,"height"))}`,` :byte-length ${c}`,` :packed-output [${c} bytes captured from optimizer memory]`,` :latest-run-packed-outputs ${i.length}`,` :session-optimizer {:executed ${t?.optimizer?.executed??0}}}`].join(`
`)}}function yg(n){if(n?.status!=="ok")return{status:"idle",message:"No successful Rasa run."};const e=n.parity?.value;if(!e)return{status:"missing-value",message:"Rasa did not return a structured value."};const t=Rt(ze(e,"kind"));if(t==="rasa.demo/vector-scene")return c6(n);if(t==="rasa.demo/packed-rgba-proof"){const i=u6(n);return i.status==="ok"?{status:"ok",type:"packed",image:i}:i}return{status:"wrong-kind",message:`Expected :rasa.demo/vector-scene or :rasa.demo/packed-rgba-proof from Rasa, got ${t||"no :kind"}.`}}function yx(n){let e=2166136261;const t=String(n||"");for(let i=0;i<t.length;i+=1)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e>>>0}function o6(n){const e=new Map;for(const t of n){const i=String(t.track||"track");e.has(i)||e.set(i,[]),e.get(i).push(t)}return[...e.entries()]}function c6(n){const e=n.parity?.value,t=wn(ze(e,"width")),i=wn(ze(e,"height")),r=Xu(ze(e,"primitives")).map(Qu).filter(Boolean);return!t||!i?{status:"missing-size",message:"Rasa returned a vector scene without numeric width and height."}:r.length===0?{status:"missing-primitives",message:"Rasa returned a vector scene without drawable primitives."}:{status:"ok",type:"scene",scene:{kind:Rt(ze(e,"kind")),title:Rt(ze(e,"title")),background:Rt(ze(e,"background")),renderer:Rt(ze(e,"renderer")),boundary:Rt(ze(e,"boundary")),metrics:Qu(ze(e,"metrics"))||{},width:t,height:i,primitives:r}}}function u6(n){const e=Number(n.parity?.optimizer?.executed||0)>0||["wasmgc-whole-entry","wasmgc-callable-region"].includes(n.parity?.execution?.artifact);if(!e)return{status:"missing-wmp",message:"The visual source returned without executing a browser WMP-2 packed optimizer region."};const t=n.parity?.value,i=wn(ze(t,"width")),r=wn(ze(t,"height")),l=wn(ze(t,"byte-length")),c=Rt(ze(t,"callable"));if(!c)return{status:"missing-callable",message:"Rasa returned the packed image marker without naming its packed callable."};const f=f6(n,c);if(f?.status==="error")return f;const h=f?.bytes||null,p=i*r*4;return!i||!r||!l||!h?.byteLength?{status:"missing-pixels",message:"Rasa returned the packed image marker but no optimizer byte output was captured."}:l!==p||h.byteLength!==p?{status:"wrong-size",message:`Packed RGBA byte length mismatch: expected ${p}, report says ${l}, optimizer returned ${h.byteLength}.`}:{status:"ok",title:Rt(ze(t,"title")),callable:c,pixelOrigin:Rt(ze(t,"pixel-origin")),width:i,height:r,byteLength:l,pixels:h,optimizerExecuted:e}}function f6(n,e){const t=Array.isArray(n?.packedOutputs)?n.packedOutputs:[],i=t.filter(r=>r?.symbol===e);return i.length!==1?{status:"error",message:`Packed output mismatch for ${e}: expected exactly one matching optimizer output, saw ${i.length} matching output(s) out of ${t.length}.`}:i[0]}function h6(n,e,t){if(!e?.pixels?.byteLength)return null;n.width=e.width,n.height=e.height;const i=n.getContext("2d"),r=new Uint8ClampedArray(e.pixels);return i.imageSmoothingEnabled=!1,i.putImageData(new ImageData(r,e.width,e.height),0,0),n.dataset.sourceHash=String(t),n.dataset.pixelOrigin=e.pixelOrigin||"wmp-2-packed-loop",n.dataset.optimizerExecuted=String(e.optimizerExecuted),r}function d6(n,e,t){const i=n.getBoundingClientRect(),r=Math.max(320,Math.floor(i.width)),l=Math.max(240,Math.floor(i.height)),c=Math.min(window.devicePixelRatio||1,2);n.width=Math.floor(r*c),n.height=Math.floor(l*c);const f=n.getContext("2d");f.setTransform(c,0,0,c,0,0),f.clearRect(0,0,r,l),f.fillStyle=e.background||"#05070a",f.fillRect(0,0,r,l);const h=Math.max(1,Number(e.width||r)),p=Math.max(1,Number(e.height||l)),g=Math.min(r/h,l/p);f.save(),f.translate((r-h*g)/2,(l-p*g)/2),f.scale(g,g);for(const y of e.primitives)p6(f,y);return f.restore(),n.dataset.sourceHash=String(t),n.dataset.sceneKind=e.kind||"rasa.demo/vector-scene",n.dataset.primitiveCount=String(e.primitives.length),n.dataset.boundary="ordinary-values",e}function p6(n,e){const t=String(e.shape||"");n.save(),n.globalAlpha=m6(e.alpha),t==="rect"?(e.fill&&(n.fillStyle=e.fill,n.fillRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0))),e.stroke&&(n.strokeStyle=e.stroke,n.lineWidth=1,n.strokeRect(Number(e.x||0),Number(e.y||0),Number(e.w||0),Number(e.h||0)))):t==="line"?(n.strokeStyle=e.stroke||e.fill||"#e8edf2",n.lineWidth=Number(e["line-width"]||e.lineWidth||1),n.lineCap="round",n.beginPath(),n.moveTo(Number(e.x1||0),Number(e.y1||0)),n.lineTo(Number(e.x2||0),Number(e.y2||0)),n.stroke()):t==="circle"&&(n.beginPath(),n.arc(Number(e.x||0),Number(e.y||0),Number(e.r||0),0,Math.PI*2),e.fill&&(n.fillStyle=e.fill,n.fill()),e.stroke&&(n.strokeStyle=e.stroke,n.lineWidth=1,n.stroke())),n.restore()}function m6(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):1}function ze(n,e){return!n||n.kind!=="map"?null:n.entries.find(t=>i2(t.key)===e)?.value||null}function Rt(n){return n?n.kind==="string"?n.value:n.kind==="keyword"?n.name:n.kind==="symbol"?n.raw:n.kind==="number"?String(n.value):"":""}function wn(n){return n?.kind==="number"?Number(n.value):null}function Xu(n){return n?.kind==="vector"||n?.kind==="list"?Array.isArray(n.items)?n.items:[]:[]}function Qu(n){return n?n.kind==="number"?Number(n.value):n.kind==="string"?n.value:n.kind==="keyword"?n.name:n.kind==="symbol"?n.raw:n.kind==="boolean"||n.kind==="bool"?!!n.value:n.kind==="nil"?null:n.kind==="vector"||n.kind==="list"?Xu(n).map(Qu):n.kind==="map"?Object.fromEntries((n.entries||[]).map(e=>[i2(e.key),Qu(e.value)])):null:null}function i2(n){return n?.kind==="keyword"?n.name:n?.kind==="string"?n.value:n?.kind==="symbol"?n.raw:""}const g6=`(ns rasa.array)

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
`,y6=`(ns rasa.core)

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

(defn ensure-reduced
  "Returns x unchanged when it is already reduced, otherwise wraps it for reduction termination."
  [x]
  (if (reduced? x) x (reduced x)))

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
`,b6=`(ns demo.music.notation)

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
`,v6=`(ns demo.music.score)

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
`,x6=`{:schema :rasa.package/v1
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
                       :browser/projection :dynamic-value-projection}
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
                       :browser/projection :dynamic-value-projection}
            :targets [{:target :wasmtime
                       :availability :available}
                      {:target :wasm-browser
                       :availability :requires-adapter
                       :adapter-kind :javascript}]}]
 :providers []
 :metadata {:browser/boundary :ordinary-values}}
`,w6=`const DEFAULT_TONE_CDN = "https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm";

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
`,k6=`(ns demo.visuals.botanical-glasshouse)

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
`,S6=`(ns demo.visuals.recursive-city)

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
`,A6=`(ns demo.music.emberlight-suite
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
`,C6=`(ns demo.music.polyrhythm-workshop
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
`,T6=`(ns demo.visuals.packed-oil-current
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
`,M6=`(ns demo.visuals.packed-signal-cathedral
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
`,E6=`import { createElement as h, useEffect, useRef, useState } from "react";

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
`,la=_s("rasa-core","rasa/core.ras","Rasa standard library",y6,"rasa","library"),bx=_s("rasa-array","rasa/array.ras","Rasa packed-array library",g6,"rasa","library"),R6=_s("music-notation","demo/music/notation.ras","Rasa music notation library",b6,"rasa","library"),O6=_s("music-score","demo/music/score.ras","Rasa score engine",v6,"rasa","library"),vx=_s("tone-package","demo.tone-js/package.ras","Capability package",x6,"rasa","package"),xx=_s("tone-provider","tone-provider.js","Browser capability adapter",w6,"javascript","boundary"),oa=_s("canvas-renderer","demo-surface/index.js","Browser result renderer",E6,"javascript","boundary"),li=Object.freeze([ca({id:"botanical",title:"Botanical Glasshouse",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"green",category:"geometry",source:k6,files:[oa,la]}),ca({id:"city",title:"Recursive City",family:"Visual scene",mode:"visuals",boundary:"ordinary values",accent:"blue",category:"geometry",source:S6,files:[oa,la]}),ca({id:"algorithmic-orchestra",title:"Algorithmic Orchestra",family:"Generated score",mode:"music",boundary:"Rasa tick score · Tone transport",accent:"gold",category:"music",source:A6,files:[O6,vx,xx,oa,la]}),ca({id:"polyrhythm",title:"Polyrhythm Workshop",family:"Music composition",mode:"music",boundary:"Rasa score · Tone capability",accent:"red",category:"music",source:C6,files:[R6,vx,xx,oa,la]}),ca({id:"oil-current",title:"Chromatic Oil Current",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"red",category:"pixels",source:T6,files:[bx,oa,la]}),ca({id:"signal-cathedral",title:"Signal Cathedral",family:"Packed image",mode:"visuals",boundary:"WMP-2 RGBA",accent:"violet",category:"pixels",source:M6,files:[bx,oa,la]})]),wx=Object.freeze([Object.freeze({id:"geometry",label:"Geometry",description:"Rasa scene values",count:Cp("geometry")}),Object.freeze({id:"pixels",label:"Packed pixels",description:"WMP-2 image data",count:Cp("pixels")}),Object.freeze({id:"music",label:"Music",description:"Tone.js capability",count:Cp("music")})]);function D6(n,e){return[_s("main",`${n.id}.ras`,"Example program",e,"rasa","example",!0),...n.files]}function ca(n){return Object.freeze({...n,files:Object.freeze(n.files)})}function _s(n,e,t,i,r,l,c=!1){return Object.freeze({id:n,name:e,label:t,content:i,language:r,role:l,editable:c,lines:N6(i)})}function N6(n){return String(n||"").split(`
`).length}function Cp(n){return li.filter(e=>e.category===n).length}const j6=Object.freeze({id:"raw",label:"Records",description:"Canonical structured report records"}),bg=Object.freeze([Object.freeze({id:"pipeline",label:"Pipeline",description:"Phase status and produced evidence"}),Object.freeze({id:"decisions",label:"Decisions",description:"Planner and optimizer choices"}),Object.freeze({id:"diagnostics",label:"Diagnostics",description:"Source-linked warnings and refusals"}),Object.freeze({id:"movement",label:"Movement",description:"Runtime memory and boundary route"})]),B6=Object.freeze([...bg,j6]);function z6({context:n={},parity:e={},run:t={}}={}){const i=G6(e.phases),r=W6(e),l=Array.isArray(e.diagnostics)?e.diagnostics.map(F6):[],c=I6(e,n),f=_6(e.rawReport),h=i.filter(p=>p.status!=="not-requested").length;return{id:`${t.reportMode||"none"}:${t.elapsedMs||0}:${h}:${r.length}:${l.length}:${f.length}`,status:t.status||e.status||"idle",reportMode:t.reportMode||"none",elapsedMs:Number(t.elapsedMs||0),phases:i,decisions:r,diagnostics:l,movement:c,rawRecords:f,summary:{capturedPhases:h,totalPhases:i.length,decisions:r.length,diagnostics:l.length,optimizerExecutions:Number(e.optimizer?.executed||0),rawRecords:f.length}}}function L6(n=bg){const e=new Map(B6.map(t=>[t.id,t]));return n.map(t=>typeof t=="string"?e.get(t):{...e.get(t.id),...t}).filter(Boolean)}function _6(n){return!n||typeof n!="object"||Array.isArray(n)?[]:Object.entries(n).map(([e,t],i)=>({id:`raw:${e}:${i}`,path:e,label:H6(e),kind:q6(t),count:V6(t),countLabel:U6(t),searchText:`${e} ${Cm(t)}`.toLowerCase(),span:s2(t),value:t}))}function H6(n){return String(n).replace(/^rasa\./,"").replace(/[./_-]+/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function q6(n){return n===null?"nil":Array.isArray(n)?"vector":typeof n!="object"?typeof n:ue(n.type||n.kind,"record")}function V6(n){return Array.isArray(n)?n.length:!n||typeof n!="object"?null:Array.isArray(n.items)?n.items.length:Array.isArray(n.entries)?n.entries.length:!n.type&&!n.kind?Object.keys(n).length:null}function U6(n){if(Array.isArray(n))return"items";if(!n||typeof n!="object")return null;const e=ue(n.type||n.kind);return["vector","list","set"].includes(e)?"items":e==="map"||!n.type&&!n.kind?"fields":null}function Cm(n,e=6e3,t=new Set){return e<=0||n==null?"":typeof n!="object"?String(n).slice(0,e):t.has(n)?"":(t.add(n),Array.isArray(n)?n.map(i=>Cm(i,Math.floor(e/Math.max(n.length,1)),t)).join(" ").slice(0,e):Object.entries(n).map(([i,r])=>`${i} ${Cm(r,Math.floor(e/Math.max(Object.keys(n).length,1)),t)}`).join(" ").slice(0,e))}function s2(n,e=new Set){if(!n||typeof n!="object"||e.has(n))return null;if(e.add(n),!Array.isArray(n)){const i=kx(n.start),r=kx(n.end),l=$6(n.sourceId??n["source-id"]??n.source);if(Number.isFinite(i)&&Number.isFinite(r)&&r>i)return{sourceId:l||null,start:i,end:r}}const t=Array.isArray(n)?n:Object.values(n);for(const i of t){const r=s2(i,e);if(r)return r}return null}function kx(n){const e=n&&typeof n=="object"?n.value:n,t=Number(e);return Number.isFinite(t)?t:NaN}function $6(n){return n==null?"":typeof n=="object"?ue(n):String(n)}function G6(n){return Array.isArray(n)?n.map(e=>({...e,id:ue(e.id,"unknown"),label:ue(e.label,ue(e.id,"Unknown phase")),status:ue(e.status,"unknown"),detail:ue(e.detail),metrics:e.metrics&&typeof e.metrics=="object"?Object.fromEntries(Object.entries(e.metrics).map(([t,i])=>[t,X6(i)])):{}})):[]}function W6(n){const e=n.plan||{},t=[...e.decisions||[],...e.candidates||[],...e.rejected||[],...e.fallbacks||[]].map((r,l)=>P6(r,l)),i=n.optimizer;if(i){t.unshift({id:"optimizer:summary",type:"optimizer",category:i.executed>0?"admitted":i.fallbacks?.length?"fallback":"observed",title:i.executed>0?`${i.executed} optimized region executions`:"Optimizer observation",status:i.enabled?"enabled":"disabled",reason:`${i.probes||0} probes · ${i.admitted||0} admitted · ${i.missed||0} missed`,lane:n.execution?.tier||null});for(const[r,l]of(i.fallbacks||[]).entries())t.push({id:`optimizer:fallback:${r}`,type:"fallback",category:"fallback",title:ue(l.symbol,"Optimizer fallback"),status:ue(l.fallback,"fallback"),reason:ue(l.reason,"No reason reported"),lane:ue(n.execution?.tier)||null})}return t}function P6(n,e){const t={...n,type:ue(n?.type,"record"),lane:ue(n?.lane)||null,memoryPath:ue(n?.memoryPath??n?.["memory-path"])||null,wmp:ue(n?.wmp)||null,status:ue(n?.status)||null,decision:ue(n?.decision)||null,candidate:ue(n?.candidate)||null,family:ue(n?.family)||null,evidence:ue(n?.evidence)||null,reason:ue(n?.reason??n?.message)||null};return{...t,id:`${t.type}:${e}`,category:Y6(t),title:K6(t)}}function Y6(n){const e=`${n.type||""} ${n.status||""} ${n.decision||""}`;return/reject|refus/.test(e)?"rejected":/fallback/.test(e)?"fallback":/admit|execut|selected|ok/.test(e)?"admitted":"observed"}function K6(n){return ue(n.candidate||n.decision||n.family||n.lane||n.type,"Plan record")}function I6(n,e){const t=n.runtime||{};return{steps:(Array.isArray(e.movementSteps)?e.movementSteps:[]).map((r,l)=>({...r,id:ue(r.id,`movement:${l}`),owner:ue(r.owner)||null,label:ue(r.label,`Step ${l+1}`),detail:ue(r.detail)})),runtime:[zi("Semantic lane",n.execution?.semanticLane),zi("Runtime implementation",t.implementation),zi("Optimized lane",n.execution?.optimizedLane),zi("Host",n.execution?.host),zi("Artifact",n.execution?.artifact),zi("Memory path",t.memoryPath),zi("Collection implementation",t.collectionImpl),zi("Session",t.sessionMode),zi("Host imports",t.hostImports?"enabled":"not used")].filter(r=>r.value)}}function zi(n,e){return{label:n,value:e==null?null:ue(e)}}function F6(n){return{...n,phase:ue(n?.phase)||null,severity:ue(n?.severity,"info"),code:ue(n?.code)||null,kind:ue(n?.kind)||null,message:ue(n?.message,"Diagnostic record"),detail:ue(n?.detail)||null}}function X6(n){return n==null||typeof n=="string"||typeof n=="number"||typeof n=="boolean"?n:ue(n)}function ue(n,e=""){if(n==null)return e;if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="bigint"||typeof n=="boolean")return String(n);if(Array.isArray(n))return n.map(t=>ue(t)).filter(Boolean).join(", ")||e;if(typeof n=="object"){const t=n.kind||n.type,i=[n.items,n.value,n.values].find(Array.isArray);if(n.name!=null)return String(n.name);if(["set","vector","list"].includes(t)&&i)return i.map(l=>ue(l)).filter(Boolean).join(", ")||e;if(t==="map"&&Array.isArray(n.entries))return n.entries.map(({key:l,value:c})=>`${ue(l,"field")}: ${ue(c,"structured value")}`).join(", ")||e;if(n.raw!=null&&["symbol","char"].includes(t))return String(n.raw);if(n.value!=null&&["keyword","string","symbol","number","boolean"].includes(t))return ue(n.value,e);if(n.label!=null)return ue(n.label,e);const r=Object.entries(n).filter(([l])=>!["kind","type","raw"].includes(l));if(r.length)return r.map(([l,c])=>`${l}: ${ue(c,"structured value")}`).join(", ")}return e||"structured value"}const Q6={pipeline:uT,decisions:Mx,diagnostics:to,movement:NT,raw:eT},Z6=()=>!0;function J6({canOpenSource:n=Z6,initialLens:e="pipeline",lenses:t=bg,model:i,onOpenSource:r=null,renderers:l={}}){const c=j.useMemo(()=>L6(t),[t]),[f,h]=j.useState(e),p=j.useRef([]),g=j.useId();j.useEffect(()=>{c.some(k=>k.id===f)||h(c[0]?.id||"pipeline")},[f,c]);const y=k=>{const A=(k+c.length)%c.length;p.current[A]?.focus(),h(c[A].id)},v=(k,A)=>{const C=k.key==="ArrowRight"||k.key==="ArrowDown"?A+1:k.key==="ArrowLeft"||k.key==="ArrowUp"?A-1:k.key==="Home"?0:k.key==="End"?c.length-1:null;C!==null&&(k.preventDefault(),y(C))},w=l[f];return x.jsxs("section",{className:"report-explorer","aria-label":"Rasa report explorer",children:[x.jsx(eN,{model:i}),x.jsx("nav",{className:"report-lenses","aria-label":"Report lenses",role:"tablist",children:c.map((k,A)=>{const C=Q6[k.id]||Tx;return x.jsxs("button",{"aria-controls":`${g}-panel`,"aria-selected":f===k.id,id:`${g}-${k.id}`,onKeyDown:O=>v(O,A),onClick:()=>h(k.id),ref:O=>{p.current[A]=O},role:"tab",tabIndex:f===k.id?0:-1,title:k.description,type:"button",children:[x.jsx(C,{size:15}),x.jsx("span",{children:k.label}),x.jsx("small",{children:yN(k.id,i)})]},k.id)})}),x.jsx("div",{"aria-labelledby":`${g}-${f}`,className:"report-lens-panel",id:`${g}-panel`,role:"tabpanel",children:x.jsx(tN,{children:w?w({canOpenSource:n,model:i,onOpenSource:r}):f==="pipeline"?x.jsx(iN,{model:i,onNavigate:h}):f==="decisions"?x.jsx(lN,{model:i}):f==="diagnostics"?x.jsx(cN,{canOpenSource:n,model:i,onOpenSource:r}):f==="movement"?x.jsx(uN,{model:i}):x.jsx(fN,{canOpenSource:n,model:i,onOpenSource:r})},`${i.id}:${f}`)})]})}function eN({model:n}){return x.jsxs("div",{className:"report-summary","aria-label":"Run summary",children:[x.jsx(ga,{label:"Run",value:n.status}),x.jsx(ga,{label:"Elapsed",value:n.elapsedMs?`${n.elapsedMs.toFixed(1)} ms`:"not measured"}),x.jsx(ga,{label:"Phases",value:`${n.summary.capturedPhases}/${n.summary.totalPhases}`}),x.jsx(ga,{label:"Decisions",value:n.summary.decisions})]})}function ga({label:n,value:e}){return x.jsxs("div",{children:[x.jsx("span",{children:ue(n)}),x.jsx("strong",{children:ue(e,"not reported")})]})}class tN extends j.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?x.jsx(js,{title:"This report lens could not be displayed",detail:"The other compiler report lenses remain available."}):this.props.children}}const nN={reader:"Turns source bytes into forms and source spans.",expand:"Normalizes macro and language forms before semantic analysis.",analysis:"Resolves bindings, calls, and source-level meaning.",ir:"Builds backend-neutral executable structure.",facts:"Records proven types, contracts, effects, and representation evidence.",checks:"Applies static contracts before representation planning.",plan:"Chooses execution lanes, representations, and fallback behavior.",eval:"Executes the admitted program and returns its value."};function iN({model:n,onNavigate:e}){const t=n.phases.find(c=>c.status!=="not-requested")?.id||n.phases[0]?.id,[i,r]=j.useState(t);j.useEffect(()=>r(t),[t,n.id]);const l=n.phases.find(c=>c.id===i)||n.phases[0];return l?x.jsxs("div",{className:"pipeline-lens",children:[x.jsxs("div",{className:"compiler-pipeline",children:[x.jsx("nav",{className:"phase-rail","aria-label":"Compiler phase route",children:n.phases.map((c,f)=>x.jsxs("button",{"aria-pressed":c.id===l.id,"data-status":c.status,onClick:()=>r(c.id),type:"button",children:[x.jsx("span",{className:"phase-index",children:String(f+1).padStart(2,"0")}),x.jsx("i",{}),x.jsx("span",{className:"phase-name",children:c.label}),x.jsx("small",{children:c.detail})]},c.id))}),x.jsx(sN,{model:n,onNavigate:e,phase:l})]}),n.reportMode!=="all"?x.jsx(gN,{title:"Compact report captured",detail:"Enable the detailed report and run again to inspect every compiler phase."}):null]}):x.jsx(js,{title:"No phase records",detail:"This run did not return a phase projection."})}function sN({model:n,onNavigate:e,phase:t}){const i=rN(t),r=t.id==="plan"?"decisions":t.diagnostics?"diagnostics":t.id==="eval"?"movement":null;return x.jsxs("article",{className:"phase-detail",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Compiler phase"}),x.jsx("h3",{children:t.label})]}),x.jsx("em",{"data-status":t.status,children:t.status})]}),x.jsx("p",{className:"phase-description",children:nN[t.id]}),x.jsx("div",{className:"phase-metrics",children:i.map(l=>x.jsx(ga,{label:l.label,value:l.value},l.label))}),x.jsxs("div",{className:"phase-report-depth",children:[x.jsx("span",{children:"Report depth"}),x.jsx("strong",{children:aN(t)})]}),r?x.jsxs("button",{className:"phase-follow",onClick:()=>e(r),type:"button",children:[x.jsx("span",{children:t.id==="plan"?`${n.summary.decisions} decision records`:t.id==="eval"?"Inspect value movement":`${n.summary.diagnostics} diagnostic records`}),x.jsx(Em,{size:14})]}):null]})}function rN(n){const e=n.metrics||{};return n.status==="not-requested"?[{label:"Capture",value:"not requested"}]:n.id==="facts"?[{label:"Facts",value:e.facts??0},{label:"Declared",value:e.declaredFacts??0},{label:"Metadata contracts",value:e.metadataContracts??0},{label:"Mode",value:e.mode||"unknown"}]:n.id==="plan"?[{label:"Lanes",value:e.lanes??0},{label:"Candidates",value:e.candidates??0},{label:"Rejected",value:e.rejected??0},{label:"Fallbacks",value:e.fallbacks??0}]:n.id==="checks"?[{label:"Checks",value:e.checks??0},{label:"Action",value:e.action||"none"},{label:"Diagnostics",value:e.diagnostics??0}]:[{label:"Status",value:n.status},{label:"Diagnostics",value:e.diagnostics??0}]}function aN(n){return n.status==="not-requested"?"This phase was not captured in the current report.":n.id==="facts"?"Fact totals and contract counts are available; individual fact records are not linked in this runtime projection.":n.id==="plan"?"Lane, decision, candidate, rejection, fallback, and optimizer records are available for exploration.":n.id==="checks"?"Check totals, action, and diagnostics are available.":n.id==="eval"?"Evaluation status, returned value, diagnostics, and runtime movement are available through related lenses.":"The current runtime report exposes phase status and diagnostic count."}function lN({model:n}){const e=["all","admitted","rejected","fallback"],[t,i]=j.useState("all"),[r,l]=j.useState("groups"),[c,f]=j.useState(""),[h,p]=j.useState(60),[g,y]=j.useState(null);j.useEffect(()=>{i("all"),l("groups"),f(""),p(60),y(null)},[n.id]);const v=j.useMemo(()=>n.decisions.filter(C=>{if(t!=="all"&&C.category!==t)return!1;const O=`${C.type} ${C.title} ${C.reason||""} ${C.lane||""}`.toLowerCase();return!c||O.includes(c.toLowerCase())}),[t,n.decisions,c]),w=j.useMemo(()=>r==="groups"?oN(v):v,[v,r]),k=r==="records"?w.slice(0,h):w,A=w.find(C=>C.id===g)||w[0];return n.decisions.length===0?x.jsx(js,{title:"No decisions captured",detail:"A detailed report can expose planner and optimizer records when this program produces them."}):x.jsxs("div",{className:"decisions-lens",children:[x.jsxs("div",{className:"report-filters","aria-label":"Decision filters",children:[x.jsx("div",{children:e.map(C=>x.jsx("button",{"aria-pressed":t===C,onClick:()=>{i(C),y(null)},type:"button",children:C},C))}),x.jsxs("label",{className:"decision-search",children:[x.jsx(Ex,{size:13}),x.jsx("input",{"aria-label":"Search decisions",onChange:C=>{f(C.target.value),y(null)},placeholder:"Search evidence",type:"search",value:c})]}),x.jsxs("div",{className:"decision-mode","aria-label":"Decision density",children:[x.jsx("button",{"aria-pressed":r==="groups",onClick:()=>{l("groups"),y(null)},type:"button",children:"Grouped"}),x.jsx("button",{"aria-pressed":r==="records",onClick:()=>{l("records"),y(null)},type:"button",children:"Records"})]})]}),x.jsxs("div",{className:"report-record-layout",children:[x.jsxs("div",{className:"report-record-list",children:[x.jsxs("div",{className:"record-list-status",children:["Showing ",k.length.toLocaleString()," of ",w.length.toLocaleString()," ",r]}),k.map(C=>x.jsxs("button",{"aria-pressed":C.id===A?.id,"data-category":C.category,onClick:()=>y(C.id),type:"button",children:[x.jsxs("span",{className:"decision-context",children:[x.jsx("i",{children:ue(C.type,"record")}),x.jsx("b",{children:ue(C.lane,"lane not reported")})]}),x.jsxs("strong",{children:[ue(C.title,"Plan record"),C.count>1?x.jsx("em",{children:C.count}):null]}),x.jsx("small",{children:ue(C.reason||C.status,"Structured plan record")})]},C.id)),r==="records"&&k.length<w.length?x.jsx("button",{className:"load-more-records",onClick:()=>p(C=>C+60),type:"button",children:"Show 60 more"}):null,w.length===0?x.jsx(js,{title:"No matching decisions",detail:`No ${t} records matched this view.`}):null]}),A?x.jsx(mN,{eyebrow:A.type,title:A.title,status:A.status||A.category,detail:A.reason,values:bN(A)}):null]})]})}function oN(n){const e=new Map;for(const t of n){const i=[t.category,t.type,t.title,t.status,t.reason,t.lane].join("\0"),r=e.get(i);if(r){r.count+=1;continue}e.set(i,{...t,id:`group:${e.size}`,count:1})}return[...e.values()].sort((t,i)=>i.count-t.count||t.title.localeCompare(i.title))}function cN({canOpenSource:n,model:e,onOpenSource:t}){return e.diagnostics.length===0?x.jsx(js,{title:"No diagnostics",detail:"No warning, refusal, or failure record was captured for this run."}):x.jsx("div",{className:"diagnostic-list",children:e.diagnostics.map((i,r)=>x.jsxs("article",{"data-severity":i.severity,children:[x.jsxs("header",{children:[x.jsx("span",{children:i.phase||"runtime"}),x.jsx("strong",{children:i.code||i.kind||i.severity})]}),x.jsx("p",{children:i.message}),i.detail?x.jsx("small",{children:i.detail}):null,i.span&&t&&n(i.span)?x.jsxs("button",{onClick:()=>t(i.span),type:"button",children:["Open source ",i.span.start,"..",i.span.end]}):null]},`${i.code||i.kind}:${r}`))})}function uN({model:n}){return x.jsxs("div",{className:"movement-lens",children:[n.movement.steps.length?x.jsx("div",{className:"movement-route",children:n.movement.steps.map((e,t)=>x.jsxs(Zu.Fragment,{children:[x.jsxs("div",{children:[x.jsx("span",{children:e.owner||`Step ${t+1}`}),x.jsx("strong",{children:e.label}),x.jsx("small",{children:e.detail})]}),t<n.movement.steps.length-1?x.jsx(Em,{"aria-hidden":"true",size:15}):null]},e.id))}):x.jsx(js,{title:"No boundary route",detail:"This consumer did not provide a domain-specific movement projection."}),x.jsx("div",{className:"runtime-facts",children:n.movement.runtime.map(e=>x.jsx(ga,{label:e.label,value:e.value},e.label))})]})}function fN({canOpenSource:n,model:e,onOpenSource:t}){const[i,r]=j.useState(""),[l,c]=j.useState(null);j.useEffect(()=>{r(""),c(null)},[e.id]);const f=j.useMemo(()=>{const p=i.trim().toLowerCase();return p?e.rawRecords.filter(g=>g.searchText.includes(p)):e.rawRecords},[e.rawRecords,i]),h=f.find(p=>p.id===l)||f[0];return e.rawRecords.length===0?x.jsx(js,{title:"No structured records",detail:"This run did not retain a canonical structured report."}):x.jsxs("div",{className:"raw-records-lens",children:[x.jsxs("label",{className:"decision-search raw-record-search",children:[x.jsx(Ex,{size:13}),x.jsx("input",{"aria-label":"Search structured records",onChange:p=>{r(p.target.value),c(null)},placeholder:"Search fields and values",type:"search",value:i})]}),x.jsxs("div",{className:"raw-record-layout",children:[x.jsxs("div",{className:"raw-record-list",children:[x.jsxs("div",{className:"record-list-status",children:["Showing ",f.length," of ",e.rawRecords.length," sections"]}),f.map(p=>x.jsxs("button",{"aria-pressed":p.id===h?.id,onClick:()=>c(p.id),type:"button",children:[x.jsx("span",{children:p.path}),x.jsx("strong",{children:p.label}),x.jsxs("small",{children:[p.kind,p.count==null?"":` · ${p.count} ${p.countLabel||"items"}`]})]},p.id)),f.length===0?x.jsx(js,{title:"No matching records",detail:"Try a phase, diagnostic code, field, or value."}):null]}),h?x.jsxs("article",{className:"raw-record-detail",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Canonical report section"}),x.jsx("h3",{children:h.path})]}),h.span&&t&&n(h.span)?x.jsxs("button",{onClick:()=>t(h.span),type:"button",children:["Open source ",h.span.start,"..",h.span.end]}):null]}),x.jsx(r2,{depth:0,label:h.path,value:h.value})]}):null]})]})}function r2({depth:n,label:e,value:t}){const i=hN(t),[r,l]=j.useState(n===0);if(!i)return x.jsxs("div",{className:"raw-scalar",children:[x.jsx("span",{children:e}),x.jsx("code",{children:pN(t)})]});const c=dN(t);return x.jsxs("details",{className:"raw-value-node",onToggle:f=>l(f.currentTarget.open),open:r,children:[x.jsxs("summary",{children:[x.jsx("strong",{children:e}),x.jsxs("span",{children:[c," · ",i.length]})]}),r?x.jsx("div",{children:i.map(([f,h],p)=>x.jsx(r2,{depth:n+1,label:f,value:h},`${f}:${p}`))}):null]})}function hN(n){if(Array.isArray(n))return n.map((t,i)=>[String(i),t]);if(!n||typeof n!="object")return null;const e=n.type||n.kind;return["keyword","symbol","string","number","boolean","char","nil"].includes(e)?null:["vector","list","set"].includes(e)&&Array.isArray(n.items)?n.items.map((t,i)=>[String(i),t]):e==="map"&&Array.isArray(n.entries)?n.entries.map((t,i)=>Array.isArray(t)?[ue(t[0],String(i)),t[1]]:[ue(t.key,String(i)),t.value]):Object.entries(n).filter(([t])=>t!=="raw")}function dN(n){return Array.isArray(n)?"vector":!n||typeof n!="object"?typeof n:ue(n.type||n.kind,"record")}function pN(n){if(n===null)return"nil";if(n&&typeof n=="object"){if(n.type==="keyword"||n.kind==="keyword")return`:${n.name??n.value??""}`;if(["symbol","char"].includes(n.type||n.kind))return String(n.name??n.raw??n.value??"");if(n.value!=null)return typeof n.value=="string"?JSON.stringify(n.value):String(n.value)}return typeof n=="string"?JSON.stringify(n):String(n)}function mN({detail:n,eyebrow:e,status:t,title:i,values:r}){return x.jsxs("article",{className:"report-record-detail",children:[x.jsxs("header",{children:[x.jsx("span",{children:ue(e)}),x.jsx("em",{"data-status":ue(t),children:ue(t)})]}),x.jsx("h3",{children:ue(i,"Report record")}),n?x.jsx("p",{children:ue(n)}):null,x.jsx("dl",{children:Object.entries(r||{}).filter(([,l])=>l!=null).map(([l,c])=>x.jsxs(Zu.Fragment,{children:[x.jsx("dt",{children:vN(l)}),x.jsx("dd",{children:ue(c)})]},l))})]})}function gN({detail:n,title:e}){return x.jsxs("div",{className:"report-notice",children:[x.jsx("strong",{children:e}),x.jsx("span",{children:n})]})}function js({detail:n,title:e}){return x.jsxs("div",{className:"report-empty",children:[x.jsx(Tx,{size:20}),x.jsx("strong",{children:e}),x.jsx("span",{children:n})]})}function yN(n,e){return n==="pipeline"?e.summary.capturedPhases:n==="decisions"?e.summary.decisions:n==="diagnostics"?e.summary.diagnostics:n==="raw"?e.summary.rawRecords:e.movement.steps.length}function bN(n){return{lane:n.lane,memoryPath:n.memoryPath,wmp:n.wmp,family:n.family,evidence:n.evidence,decision:n.decision,occurrences:n.count}}function vN(n){return String(n).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/-/g," ")}function xN({events:n,example:e,fullReport:t,onClose:i,onFullReportChange:r,open:l,reportMode:c,runState:f}){const h=j.useMemo(()=>{const g=e.mode==="visuals"?yg(f):null;return z6({context:{movementSteps:wN(e,g,n)},parity:f?.parity||{},run:{elapsedMs:f?.elapsedMs,reportMode:c,status:f?.status||"idle"}})},[n,e,c,f]);if(!l)return null;const p=t?c==="all"?"Full phases captured in this run":"Enabled; run again to capture every phase":"Compact evaluation only";return x.jsxs("aside",{className:"evidence-drawer","aria-label":"Rasa execution evidence",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution evidence"}),x.jsx("strong",{children:c==="all"?"Explore full report":c==="eval"?"Explore compact report":"No captured run"})]}),x.jsx("button",{"aria-label":"Close evidence",onClick:i,title:"Close evidence",type:"button",children:x.jsx(Rm,{size:17})})]}),x.jsxs("section",{className:"evidence-capture",children:[x.jsxs("div",{children:[x.jsx("strong",{children:"Detailed compiler report"}),x.jsx("span",{children:p})]}),x.jsx("button",{"aria-checked":t,"aria-label":"Capture detailed compiler report",className:"report-switch",onClick:()=>r(!t),role:"switch",type:"button",children:x.jsx("i",{})})]}),x.jsx(J6,{model:h}),f?.status==="error"&&!h.diagnostics.length?x.jsx("pre",{className:"evidence-error",children:f.display?.text||f.error?.message}):null]})}function wN(n,e,t){return n.mode==="music"?[{id:"rasa-composition",owner:"Rasa",label:"Composition value",detail:`${t.length} scheduled note maps produced`},{id:"capability-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"tone-schedule",owner:"Tone.js",label:"Playback schedule",detail:"Tone.js owns transport timing and audio output"}]:e?.type==="packed"?[{id:"packed-region",owner:"Rasa",label:"WMP-2 packed region",detail:`${e.image.byteLength.toLocaleString()} RGBA bytes computed`},{id:"optimizer-output",owner:"Boundary",label:"Optimizer memory output",detail:"Packed bytes published without EDN pixel serialization"},{id:"image-data",owner:"Canvas",label:"ImageData render",detail:"Browser canvas receives the packed RGBA bytes"}]:e?.type==="scene"?[{id:"scene-value",owner:"Rasa",label:"Scene value",detail:`${e.scene.primitives.length.toLocaleString()} ordinary shape maps produced`},{id:"scene-projection",owner:"Boundary",label:"Ordinary-value projection",detail:"Rasa vectors and maps become browser arrays and objects"},{id:"primitive-render",owner:"Canvas",label:"Primitive renderer",detail:"Browser draws the returned geometric commands"}]:[]}const kN={botanical:oT,city:WC,"algorithmic-orchestra":wu,polyrhythm:wu,"oil-current":Rp,"signal-cathedral":Rp},SN={geometry:LT,pixels:hT,music:wu},AN={geometry:"Visuals",pixels:"Visuals",music:"Music"},CN={music:"Compositions"};function TN({activeId:n,categories:e,categoryId:t,examples:i,observed:r,onCategorySelect:l,onSelect:c}){const f=j.useRef([]),h=i.filter(y=>y.category===t),p=y=>{const v=(y+e.length)%e.length;f.current[v]?.focus(),l(e[v].id)},g=(y,v)=>{const w=y.key==="ArrowRight"||y.key==="ArrowDown"?v+1:y.key==="ArrowLeft"||y.key==="ArrowUp"?v-1:y.key==="Home"?0:y.key==="End"?e.length-1:null;w!==null&&(y.preventDefault(),p(w))};return x.jsxs("nav",{className:"example-gallery","aria-label":"Rasa examples",children:[x.jsxs("div",{className:"example-categories",role:"tablist","aria-label":"Example categories",children:[x.jsxs("span",{className:"gallery-label",children:[x.jsx(Tv,{size:14})," Explore"]}),e.map((y,v)=>{const w=SN[y.id]||Tv,k=AN[y.id]||"Examples",A=CN[y.id]||y.label;return x.jsxs("button",{"aria-controls":`example-panel-${y.id}`,"aria-selected":y.id===t,className:"category-choice","data-family":k.toLowerCase(),id:`example-tab-${y.id}`,onKeyDown:C=>g(C,v),onClick:()=>l(y.id),ref:C=>{f.current[v]=C},role:"tab",tabIndex:y.id===t?0:-1,type:"button",children:[x.jsx(w,{"aria-hidden":"true",size:14}),x.jsxs("span",{className:"category-copy",children:[x.jsx("small",{children:k}),x.jsx("strong",{children:A})]}),x.jsx("span",{className:"category-count","aria-label":`${y.count} examples`,children:y.count})]},y.id)})]}),x.jsx("div",{"aria-labelledby":`example-tab-${t}`,className:"gallery-list",id:`example-panel-${t}`,role:"tabpanel",children:h.map(y=>{const v=kN[y.id]||Rp,w=r[y.id]||null;return x.jsxs("button",{"aria-pressed":y.id===n,className:"example-choice","data-accent":y.accent,"data-selected":y.id===n,onClick:()=>c(y.id),type:"button",children:[x.jsx(v,{"aria-hidden":"true",size:18}),x.jsxs("span",{children:[x.jsx("strong",{children:y.title}),x.jsx("small",{children:w||y.boundary})]})]},y.id)})})]})}function Tm({children:n,label:e,onClose:t,title:i}){return j.useEffect(()=>{const r=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t]),x.jsx("div",{className:"studio-overlay",onMouseDown:r=>r.target===r.currentTarget&&t(),role:"presentation",children:x.jsxs("section",{"aria-label":e,"aria-modal":"true",className:"studio-overlay-panel",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:e}),x.jsx("strong",{children:i})]}),x.jsx("button",{"aria-label":`Close ${e}`,onClick:t,title:"Close",type:"button",children:x.jsx(Rm,{size:18})})]}),x.jsx("div",{className:"studio-overlay-body",children:n})]})})}const fu=24e3;function MN({onClose:n,open:e,output:t,outputKind:i,runState:r}){const[l,c]=j.useState("projection");j.useEffect(()=>{e&&c("projection")},[e]);const f=r?.rawDisplay?.text||"",p=l==="raw"?f||"No raw value is available.":t||"No result yet.",g=j.useMemo(()=>p.length>fu?`${p.slice(0,fu)}

… preview stopped at ${fu.toLocaleString()} characters`:p,[p]);return e?x.jsx(Tm,{label:"Rasa result",onClose:n,title:i||"value",children:x.jsxs("div",{className:"result-overlay",children:[x.jsxs("header",{className:"result-toolbar",children:[x.jsxs("div",{className:"result-tabs",role:"tablist","aria-label":"Result representation",children:[x.jsx("button",{"aria-selected":l==="projection",onClick:()=>c("projection"),role:"tab",type:"button",children:"Readable projection"}),x.jsx("button",{"aria-selected":l==="raw",onClick:()=>c("raw"),role:"tab",type:"button",children:"Raw returned value"})]}),x.jsxs("button",{className:"copy-result",onClick:()=>navigator.clipboard.writeText(p),title:"Copy complete selected value",type:"button",children:[x.jsx(XC,{size:15}),x.jsx("span",{children:"Copy all"})]})]}),x.jsxs("div",{className:"result-context",children:[x.jsxs("strong",{children:[p.length.toLocaleString()," characters"]}),x.jsx("span",{children:l==="projection"?"A deliberate readable projection. It may summarize large returned structures.":p.length>fu?"The complete value is available through Copy all; the DOM preview is bounded to keep the Studio responsive.":"The unprojected value returned by the runtime."})]}),x.jsx("pre",{children:g})]})}):null}function EN({activeId:n,files:e,onClose:t,onSelect:i}){j.useEffect(()=>{const l=c=>{c.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t]);const r=RN(e);return x.jsxs("section",{"aria-label":"Files participating in this example","aria-modal":"true",className:"source-explorer",role:"dialog",children:[x.jsxs("header",{children:[x.jsxs("div",{children:[x.jsx("span",{children:"Execution sources"}),x.jsxs("strong",{children:[e.length," visible files"]})]}),x.jsx("div",{className:"source-explorer-actions",children:x.jsx("button",{"aria-label":"Close source explorer",onClick:t,title:"Close source explorer",type:"button",children:x.jsx(Rm,{size:16})})})]}),r.map(([l,c])=>x.jsxs("div",{className:"source-group",children:[x.jsx("div",{className:"source-role",children:ON(l)}),c.map(f=>x.jsxs("button",{"data-active":f.id===n,onClick:()=>i(f.id),type:"button",children:[x.jsxs("span",{children:[x.jsx("strong",{children:f.name}),x.jsx("small",{children:f.label})]}),x.jsxs("em",{children:[f.lines," lines"]})]},f.id))]},l))]})}function RN(n){const e=new Map;for(const t of n)e.has(t.role)||e.set(t.role,[]),e.get(t.role).push(t);return[...e.entries()]}function ON(n){return n==="example"?"Visible user program":n==="library"?"Rasa libraries":n==="package"?"Capability package":n==="boundary"?"Browser boundary code":n}function DN({file:n,onChange:e,onRun:t,resetKey:i,syntaxKey:r,syntaxTokens:l}){const c=j.useRef(null),f=j.useRef(null),h=j.useRef(e),p=j.useRef(t);return h.current=e,p.current=t,j.useEffect(()=>{if(!c.current)return;const g=new gg({parent:c.current,source:n.content,profile:n.editable?Ss.interactive:Ss.embed,tooling:n.language==="rasa"&&l?{tokens:l}:null,onChange:n.editable?y=>h.current?.(y):null,onRun:n.editable?()=>p.current?.():null,readOnly:!n.editable});return f.current=g,n.editable&&g.focus(),()=>{g.destroy(),f.current=null}},[n.id,n.editable,n.language,i]),j.useEffect(()=>{n.language==="rasa"&&f.current?.setTooling(l?{tokens:l}:null)},[n.language,r,l]),x.jsx("div",{className:"studio-editor","data-language":n.language,ref:c})}function Sx({events:n,example:e,expanded:t=!1,onEvidence:i,onExpand:r,onRendered:l,onResult:c,onSectionPlay:f,playback:h,playbackOffsetSeconds:p=0,playbackStartedAtMs:g,renderKey:y,runState:v,sections:w=[],source:k}){if(!v)return x.jsxs("section",{className:"live-stage stage-empty",children:[x.jsx(Ju,{size:28}),x.jsx("strong",{children:"Run the visible Rasa program"}),x.jsx("p",{children:"The stage remains empty until this session returns a real value or provider schedule."})]});if(v.status!=="ok")return x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(to,{size:28}),x.jsx("strong",{children:"Rasa run failed"}),x.jsx("pre",{children:v.display?.text||v.error?.message})]});if(e.mode==="music")return x.jsxs("section",{className:"live-stage music-stage",children:[x.jsx(Tp,{detail:`${n.length} provider events · ${h}`,onEvidence:i,onResult:c,title:e.title}),x.jsx(ZD,{events:n,onSectionPlay:f,playbackOffsetSeconds:p,playbackStartedAtMs:g,playing:h==="playing",sections:w,empty:x.jsxs("div",{className:"stage-empty",children:[x.jsx(wu,{size:28}),x.jsx("strong",{children:"No provider events"}),x.jsx("p",{children:"The Rasa run completed without scheduling audible notes."})]})})]});const A=yg(v);return A.status!=="ok"?x.jsxs("section",{className:"live-stage stage-empty stage-error",children:[x.jsx(to,{size:28}),x.jsx("strong",{children:"Visual result refused"}),x.jsx("pre",{children:A.message})]}):A.type==="scene"?x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Tp,{detail:`${A.scene.primitives.length} returned primitives`,onEvidence:i,onResult:c,title:A.scene.title}),x.jsx(Ax,{onExpand:t?null:r,children:x.jsx(XD,{onRendered:l,renderKey:y,scene:A.scene,sourceHash:yx(k)})})]}):x.jsxs("section",{className:"live-stage visual-stage",children:[x.jsx(Tp,{detail:`${A.image.byteLength} optimizer-published bytes`,onEvidence:i,onResult:c,title:A.image.title}),x.jsx(Ax,{className:"packed-stage",onExpand:t?null:r,children:x.jsx(QD,{image:A.image,onRendered:l,renderKey:y,sourceHash:yx(k)})})]})}function Tp({detail:n,onEvidence:e,onResult:t,title:i}){return x.jsxs("header",{className:"stage-header",children:[x.jsxs("div",{className:"stage-heading",children:[x.jsx("h1",{children:i}),x.jsx("span",{children:n})]}),x.jsxs("div",{className:"stage-actions",children:[t?x.jsxs("button",{"aria-label":"Inspect returned value",onClick:t,title:"Inspect returned value",type:"button",children:[x.jsx(Mx,{size:15}),x.jsx("span",{children:"Result"})]}):null,e?x.jsxs("button",{"aria-label":"Inspect execution evidence",onClick:e,title:"Inspect execution evidence",type:"button",children:[x.jsx(yT,{size:15}),x.jsx("span",{children:"Evidence"})]}):null]})]})}function Ax({children:n,className:e="",onExpand:t}){return t?x.jsxs("button",{"aria-label":"Expand visual result",className:`stage-canvas visual-expand-trigger ${e}`.trim(),onClick:t,title:"Expand visual result",type:"button",children:[n,x.jsx("span",{"aria-hidden":"true",className:"visual-expand-hint",children:x.jsx(mT,{size:17})})]}):x.jsx("div",{className:`stage-canvas ${e}`.trim(),children:n})}const Mp=Object.freeze({phases:"eval"}),NN=Object.freeze({phases:"all"});function jN(){const n=j.useMemo(()=>q5(),[]),e=j.useRef(0),[t,i]=j.useState(li[0].id),[r,l]=j.useState(li[0].category),[c,f]=j.useState(()=>Object.fromEntries(li.map(Te=>[Te.id,Te.source]))),[h,p]=j.useState(()=>Object.fromEntries(wx.map(Te=>[Te.id,li.find(He=>He.category===Te.id)?.id]))),g=j.useMemo(()=>li.find(Te=>Te.id===t)||li[0],[t]),[y,v]=j.useState(g.source),[w,k]=j.useState(0),[A,C]=j.useState("main"),[O,G]=j.useState(!1),[_,B]=j.useState(!0),[R,W]=j.useState(!1),[q,F]=j.useState(!1),[ie,he]=j.useState(!1),[fe,te]=j.useState(!1),[ve,ye]=j.useState(!1),[xe,V]=j.useState(()=>n.snapshot()),[Q,Z]=j.useState(null),[ae,ce]=j.useState(null),[M,U]=j.useState([]),[X,J]=j.useState([]),[me,de]=j.useState("idle"),[ke,Je]=j.useState(null),[at,dt]=j.useState(0),[gi,Gi]=j.useState({}),Hs=j.useMemo(()=>D6(g,y),[g,y]),Sn=Hs.find(Te=>Te.id===A)||Hs[0],De=t2({configureOptions:Mp,evalOptions:Mp,manifestUrl:"./browser-manifest.json"});j.useEffect(()=>n.subscribe(V),[n]);const br=j.useCallback(async()=>{const Te=++e.current;let He=null;try{const St=R?"all":"eval",Wi=De.getProvider("demo.tone-js");if(Wi?.started&&Wi.stop(),Wi?.activateFromGesture?.(),ce(null),U([]),J([]),de("stopped"),Je(null),dt(0),Z(null),He=await n.beginRun({label:`${g.title} source`,source:y}),Te!==e.current)return;const vr=De.getProvider("demo.tone-js");vr?.setExecutionWitness?.(n,He);const Ua=await De.run(y,{evalOptions:St==="all"?NN:Mp,formatDisplay:Yt=>l6(g.mode,Yt)});if(Te!==e.current)return;if(!Ua){n.recordError(He,new Error("Rasa browser session did not execute"));return}const Vn={...Ua,reportMode:St};if(n.recordRuntime(He,zN(Vn)),Vn.status!=="ok"){n.recordError(He,Vn.error||new Error(Vn.display?.text||"Rasa run failed")),ce(Vn);return}if(g.mode==="music"){const Yt=vr?.lastEvents||[];ce(Vn),U(Yt),J(vr?.lastScore?.sections||[]),de(Yt.length>0?"playing":"idle"),Je(Yt.length>0?vr?.playbackStartedAtMs??null:null),dt(0),Gi(Zn=>({...Zn,[g.id]:`${Yt.length} scheduled events`}));return}if(g.mode==="visuals"){const Yt=yg(Vn);if(Yt.status!=="ok"){n.recordError(He,new Error(Yt.message||"Visual artifact refused")),ce(Vn);return}const Zn=LN(Yt),Kt=await n.recordArtifact(He,Zn.artifact),Un=await n.beforeEffect(He,Zn.boundary);if(Te!==e.current||!Kt||!Un)return;Z({boundaryDigest:Un.digest,runId:He}),ce(Vn);const It=Yt.type==="scene"?`${Yt.scene.primitives.length} returned primitives`:`${Yt.image.byteLength} packed bytes`;Gi(Sf=>({...Sf,[g.id]:It}))}}catch(St){if(Te!==e.current||St?.kind==="browser-effect-cancelled")return;He&&n.recordError(He,St),ce({display:{kind:"error",text:St?.message||String(St)},error:St,status:"error"})}},[R,g,De.getProvider,De.run,y,n]),_a=j.useCallback(async Te=>{const He=li.find(St=>St.id===Te);!He||He.id===t||(e.current+=1,n.cancel("example changed"),await De.getProvider("demo.tone-js")?.stop?.(),n.reset(),i(He.id),l(He.category),p(St=>({...St,[He.category]:He.id})),v(c[He.id]??He.source),k(St=>St+1),C("main"),G(!1),ce(null),U([]),J([]),de("idle"),Je(null),dt(0),F(!1),he(!1),te(!1),ye(!1),Z(null))},[c,t,De.getProvider,n]),So=j.useCallback(Te=>{const He=h[Te]||li.find(St=>St.category===Te)?.id;He&&_a(He)},[h,_a]),Ha=j.useCallback(async()=>{await De.getProvider("demo.tone-js")?.stop?.(),de("stopped"),Je(null),dt(0)},[De.getProvider]),qa=j.useCallback(Te=>{const He=De.getProvider("demo.tone-js")?.playFromSection?.(Te.name);He&&(de("playing"),Je(He.playbackStartedAtMs),dt(He.offsetSeconds))},[De.getProvider]),Va=j.useCallback(()=>{e.current+=1,n.cancel("source restored"),De.getProvider("demo.tone-js")?.stop?.(),n.reset(),v(g.source),f(Te=>({...Te,[g.id]:g.source})),k(Te=>Te+1),C("main"),ce(null),U([]),J([]),de("stopped"),Je(null),dt(0),F(!1),he(!1),te(!1),Z(null)},[g,De.getProvider,n]),wf=j.useCallback(Te=>{e.current+=1,n.cancel("source edited"),n.reset(),De.getProvider("demo.tone-js")?.stop?.(),v(Te),f(He=>({...He,[g.id]:Te})),ce(null),U([]),J([]),de("stopped"),Je(null),dt(0),Z(null)},[g.id,De.getProvider,n]),kf=j.useCallback(()=>{e.current+=1,n.cancel("session restarted"),n.reset(),De.getProvider("demo.tone-js")?.stop?.(),ce(null),U([]),J([]),de("stopped"),Je(null),dt(0),Z(null),De.boot()},[De.boot,De.getProvider,n]),Pt=j.useCallback(Te=>{Q&&n.recordEffect(Q.runId,{...Te,authority:"browser-effect",inputDigest:Q.boundaryDigest})},[Q,n]);return x.jsxs(KT,{actions:x.jsx("button",{"aria-label":"Restart Rasa session",className:"rasa-site-action",onClick:kf,title:"Restart Rasa session",type:"button",children:x.jsx(ET,{size:15})}),activeId:"studio",className:"studio-shell","data-editor-open":_,runtimeLabel:De.runtimeState.available?"Wasm ready":De.status,runtimeStatus:De.runtimeState.available?"ready":De.status,runtimeTitle:De.runtimeState.message||(De.runtimeState.available?"Browser Wasm runtime ready":De.status),children:[x.jsx("style",{children:z5}),x.jsx(TN,{activeId:g.id,categories:wx,categoryId:r,examples:li,observed:gi,onCategorySelect:So,onSelect:_a}),x.jsxs("main",{className:"studio-workspace",children:[x.jsxs("section",{className:"studio-stage-shell",children:[x.jsx(Sx,{events:M,example:g,onEvidence:()=>F(!0),onExpand:g.mode==="visuals"?()=>te(!0):null,onRendered:Pt,onResult:()=>he(!0),onSectionPlay:qa,playback:me,playbackOffsetSeconds:at,playbackStartedAtMs:ke,renderKey:Q?.runId||null,runState:ae,sections:X,source:y}),x.jsx(U5,{model:xe,onOpen:()=>ye(!0),onRelease:n.release})]}),x.jsxs("section",{className:"editor-dock",children:[x.jsxs("header",{className:"editor-header",children:[_?x.jsxs("button",{"aria-expanded":O,className:"source-trigger",onClick:()=>G(Te=>!Te),type:"button",children:[x.jsx(sT,{size:16}),x.jsxs("span",{children:[x.jsx("strong",{children:Sn.name}),x.jsxs("small",{children:[Hs.length," participating files"]})]})]}):null,x.jsx(BN,{canRun:De.canRun&&xe.status!=="paused",editorOpen:_,isMusic:g.mode==="music",onCollapse:()=>B(Te=>(Te&&G(!1),!Te)),onReset:Va,onRun:br,onStop:Ha,running:De.running})]}),_?x.jsxs(x.Fragment,{children:[O?x.jsxs(x.Fragment,{children:[x.jsx("button",{"aria-label":"Close source explorer",className:"source-scrim",onClick:()=>G(!1),type:"button"}),x.jsx(EN,{activeId:Sn.id,files:Hs,onClose:()=>G(!1),onSelect:Te=>{C(Te),G(!1)}})]}):null,x.jsx(DN,{file:Sn,onChange:Sn.editable?wf:null,onRun:br,resetKey:w,syntaxKey:De.status,syntaxTokens:De.syntaxTokens})]}):null]}),x.jsx(xN,{events:M,example:g,fullReport:R,onClose:()=>F(!1),onFullReportChange:W,open:q,reportMode:ae?.reportMode||"none",runState:ae}),x.jsx(MN,{onClose:()=>he(!1),open:ie,output:De.output,outputKind:De.outputKind,runState:ae}),ve?x.jsx(Tm,{label:"How Rasa made this result",onClose:()=>ye(!1),title:"Proof trail",children:x.jsx($5,{model:xe,onPauseChange:n.setPauseBeforeEffect,onRelease:n.release})}):null,fe&&ae?.status==="ok"&&g.mode==="visuals"?x.jsx(Tm,{label:"Expanded Rasa result",onClose:()=>te(!1),title:g.title,children:x.jsx(Sx,{events:M,example:g,expanded:!0,playback:me,playbackStartedAtMs:ke,runState:ae,source:y})}):null]})]})}function BN({canRun:n,editorOpen:e,isMusic:t,onCollapse:i,onReset:r,onRun:l,onStop:c,running:f}){return e?x.jsxs("div",{className:"editor-actions",children:[t?x.jsx("button",{"aria-label":"Stop audio",onClick:c,title:"Stop audio",type:"button",children:x.jsx(VT,{size:17})}):null,x.jsx("button",{"aria-label":"Restore example source",onClick:r,title:"Restore example source",type:"button",children:x.jsx(OT,{size:17})}),x.jsx("button",{"aria-label":f?"Running Rasa":"Run Rasa",className:"editor-run",disabled:!n,onClick:l,title:f?"Running Rasa":"Run Rasa",type:"button",children:x.jsx(Ju,{fill:"currentColor",size:20})}),x.jsx("button",{"aria-label":e?"Collapse editor":"Open editor",className:"editor-collapse",onClick:i,title:e?"Collapse editor":"Open editor",type:"button",children:e?x.jsx(kT,{size:17}):x.jsx(Mv,{size:17})})]}):x.jsx("div",{className:"editor-actions editor-actions-collapsed",children:x.jsx("button",{"aria-label":"Open editor",className:"editor-collapse",onClick:i,title:"Open editor",type:"button",children:x.jsx(Mv,{size:17})})})}function zN(n){const e=n.parity?.execution||{},t=n.parity?.optimizer||{},i=e.semanticLane||"runtime-wasm",r=e.optimizedLane||"none",l=e.artifact||"ras.wasm",c=Number(t.executed||0);return{detail:c>0?`${i} · ${r} · ${l} · ${c} optimized region execution${c===1?"":"s"}`:`${i} · ${r} · ${l} · no optimized region executed`,elapsedMs:n.elapsedMs,semanticLane:i,optimizedLane:r,artifact:l,optimizerExecutions:c,reportMode:n.reportMode,status:n.status}}function LN(n){if(n.type==="scene"){const t=n.scene.primitives.length;return{artifact:{count:t,detail:`${t.toLocaleString()} drawing instructions returned as ordinary Rasa values`,kind:"ordinary-rasa-scene",label:"Rasa scene value",payload:n.scene,unit:"primitives"},boundary:{authority:"browser-boundary",count:t,detail:`${t.toLocaleString()} drawing instructions handed to Canvas`,kind:"canvas-primitive-input",label:"Canvas primitive input",payload:n.scene,unit:"primitives"}}}const e=n.image.pixels.byteLength;return{artifact:{count:e,detail:`${e.toLocaleString()} RGBA bytes published by the executed WMP-2 callable`,kind:"wmp-2-rgba-bytes",label:"WMP-2 pixel artifact",payload:n.image.pixels,unit:"bytes"},boundary:{authority:"browser-boundary",count:e,detail:`${e.toLocaleString()} optimizer bytes passed to ImageData`,kind:"canvas-image-data-input",label:"Canvas pixel input",payload:n.image.pixels,unit:"bytes"}}}DC.createRoot(document.getElementById("root")).render(x.jsx(Zu.StrictMode,{children:x.jsx(jN,{})}));
