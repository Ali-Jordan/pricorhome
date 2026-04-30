(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var xd={exports:{}},Vo={};var rv;function AS(){if(rv)return Vo;rv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var sv;function RS(){return sv||(sv=1,xd.exports=AS()),xd.exports}var D=RS(),yd={exports:{}},rt={};var ov;function CS(){if(ov)return rt;ov=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(P,Q,ye){this.props=P,this.context=Q,this.refs=y,this.updater=ye||E}S.prototype.isReactComponent={},S.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(P,Q,ye){this.props=P,this.context=Q,this.refs=y,this.updater=ye||E}var O=N.prototype=new w;O.constructor=N,C(O,S.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function B(P,Q,ye){var Re=ye.ref;return{$$typeof:r,type:P,key:Q,ref:Re!==void 0?Re:null,props:ye}}function j(P,Q){return B(P.type,Q,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return Q[ye]})}var ue=/\/+/g;function pe(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):Q.toString(36)}function X(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,Q,ye,Re,Ue){var oe=typeof P;(oe==="undefined"||oe==="boolean")&&(P=null);var Me=!1;if(P===null)Me=!0;else switch(oe){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(P.$$typeof){case r:case e:Me=!0;break;case _:return Me=P._init,L(Me(P._payload),Q,ye,Re,Ue)}}if(Me)return Ue=Ue(P),Me=Re===""?"."+pe(P,0):Re,V(Ue)?(ye="",Me!=null&&(ye=Me.replace(ue,"$&/")+"/"),L(Ue,Q,ye,"",function(et){return et})):Ue!=null&&(G(Ue)&&(Ue=j(Ue,ye+(Ue.key==null||P&&P.key===Ue.key?"":(""+Ue.key).replace(ue,"$&/")+"/")+Me)),Q.push(Ue)),1;Me=0;var Te=Re===""?".":Re+":";if(V(P))for(var Ge=0;Ge<P.length;Ge++)Re=P[Ge],oe=Te+pe(Re,Ge),Me+=L(Re,Q,ye,oe,Ue);else if(Ge=M(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(Re=P.next()).done;)Re=Re.value,oe=Te+pe(Re,Ge++),Me+=L(Re,Q,ye,oe,Ue);else if(oe==="object"){if(typeof P.then=="function")return L(X(P),Q,ye,Re,Ue);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Me}function I(P,Q,ye){if(P==null)return P;var Re=[],Ue=0;return L(P,Re,"","",function(oe){return Q.call(ye,oe,Ue++)}),Re}function se(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var ge=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Se={map:I,forEach:function(P,Q,ye){I(P,function(){Q.apply(this,arguments)},ye)},count:function(P){var Q=0;return I(P,function(){Q++}),Q},toArray:function(P){return I(P,function(Q){return Q})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=v,rt.Children=Se,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,Q,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=C({},P.props),Ue=P.key;if(Q!=null)for(oe in Q.key!==void 0&&(Ue=""+Q.key),Q)!T.call(Q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Q.ref===void 0||(Re[oe]=Q[oe]);var oe=arguments.length-2;if(oe===1)Re.children=ye;else if(1<oe){for(var Me=Array(oe),Te=0;Te<oe;Te++)Me[Te]=arguments[Te+2];Re.children=Me}return B(P.type,Ue,Re)},rt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,Q,ye){var Re,Ue={},oe=null;if(Q!=null)for(Re in Q.key!==void 0&&(oe=""+Q.key),Q)T.call(Q,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ue[Re]=Q[Re]);var Me=arguments.length-2;if(Me===1)Ue.children=ye;else if(1<Me){for(var Te=Array(Me),Ge=0;Ge<Me;Ge++)Te[Ge]=arguments[Ge+2];Ue.children=Te}if(P&&P.defaultProps)for(Re in Me=P.defaultProps,Me)Ue[Re]===void 0&&(Ue[Re]=Me[Re]);return B(P,oe,Ue)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=G,rt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:se}},rt.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},rt.startTransition=function(P){var Q=z.T,ye={};z.T=ye;try{var Re=P(),Ue=z.S;Ue!==null&&Ue(ye,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(F,ge)}catch(oe){ge(oe)}finally{Q!==null&&ye.types!==null&&(Q.types=ye.types),z.T=Q}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(P){return z.H.use(P)},rt.useActionState=function(P,Q,ye){return z.H.useActionState(P,Q,ye)},rt.useCallback=function(P,Q){return z.H.useCallback(P,Q)},rt.useContext=function(P){return z.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,Q){return z.H.useDeferredValue(P,Q)},rt.useEffect=function(P,Q){return z.H.useEffect(P,Q)},rt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(P,Q,ye){return z.H.useImperativeHandle(P,Q,ye)},rt.useInsertionEffect=function(P,Q){return z.H.useInsertionEffect(P,Q)},rt.useLayoutEffect=function(P,Q){return z.H.useLayoutEffect(P,Q)},rt.useMemo=function(P,Q){return z.H.useMemo(P,Q)},rt.useOptimistic=function(P,Q){return z.H.useOptimistic(P,Q)},rt.useReducer=function(P,Q,ye){return z.H.useReducer(P,Q,ye)},rt.useRef=function(P){return z.H.useRef(P)},rt.useState=function(P){return z.H.useState(P)},rt.useSyncExternalStore=function(P,Q,ye){return z.H.useSyncExternalStore(P,Q,ye)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var lv;function ep(){return lv||(lv=1,yd.exports=CS()),yd.exports}var ce=ep(),Sd={exports:{}},ko={},Md={exports:{}},bd={};var cv;function wS(){return cv||(cv=1,(function(r){function e(L,I){var se=L.length;L.push(I);e:for(;0<se;){var ge=se-1>>>1,Se=L[ge];if(0<l(Se,I))L[ge]=I,L[se]=Se,se=ge;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var I=L[0],se=L.pop();if(se!==I){L[0]=se;e:for(var ge=0,Se=L.length,P=Se>>>1;ge<P;){var Q=2*(ge+1)-1,ye=L[Q],Re=Q+1,Ue=L[Re];if(0>l(ye,se))Re<Se&&0>l(Ue,ye)?(L[ge]=Ue,L[Re]=se,ge=Re):(L[ge]=ye,L[Q]=se,ge=Q);else if(Re<Se&&0>l(Ue,se))L[ge]=Ue,L[Re]=se,ge=Re;else break e}}return I}function l(L,I){var se=L.sortIndex-I.sortIndex;return se!==0?se:L.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,M=!1,E=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(L){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=L)s(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(p)}}function V(L){if(C=!1,O(L),!E)if(i(m)!==null)E=!0,F||(F=!0,K());else{var I=i(p);I!==null&&X(V,I.startTime-L)}}var F=!1,z=-1,T=5,B=-1;function j(){return y?!0:!(r.unstable_now()-B<T)}function G(){if(y=!1,F){var L=r.unstable_now();B=L;var I=!0;try{e:{E=!1,C&&(C=!1,w(z),z=-1),M=!0;var se=g;try{t:{for(O(L),v=i(m);v!==null&&!(v.expirationTime>L&&j());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var Se=ge(v.expirationTime<=L);if(L=r.unstable_now(),typeof Se=="function"){v.callback=Se,O(L),I=!0;break t}v===i(m)&&s(m),O(L)}else s(m);v=i(m)}if(v!==null)I=!0;else{var P=i(p);P!==null&&X(V,P.startTime-L),I=!1}}break e}finally{v=null,g=se,M=!1}I=void 0}}finally{I?K():F=!1}}}var K;if(typeof N=="function")K=function(){N(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=G,K=function(){pe.postMessage(null)}}else K=function(){S(G,0)};function X(L,I){z=S(function(){L(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var se=g;g=I;try{return L()}finally{g=se}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var se=g;g=L;try{return I()}finally{g=se}},r.unstable_scheduleCallback=function(L,I,se){var ge=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ge+se:ge):se=ge,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=se+Se,L={id:_++,callback:I,priorityLevel:L,startTime:se,expirationTime:Se,sortIndex:-1},se>ge?(L.sortIndex=se,e(p,L),i(m)===null&&L===i(p)&&(C?(w(z),z=-1):C=!0,X(V,se-ge))):(L.sortIndex=Se,e(m,L),E||M||(E=!0,F||(F=!0,K()))),L},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(L){var I=g;return function(){var se=g;g=I;try{return L.apply(this,arguments)}finally{g=se}}}})(bd)),bd}var uv;function DS(){return uv||(uv=1,Md.exports=wS()),Md.exports}var Ed={exports:{}},On={};var fv;function US(){if(fv)return On;fv=1;var r=ep();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},On.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var dv;function NS(){if(dv)return Ed.exports;dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=US(),Ed.exports}var hv;function LS(){if(hv)return ko;hv=1;var r=DS(),e=ep(),i=NS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=d;break}if(R===o){x=!0,o=u,a=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===a){x=!0,a=d,o=u;break}if(R===o){x=!0,o=d,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case B:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var X=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function P(t){return{current:t}}function Q(t){0>Se||(t.current=ge[Se],ge[Se]=null,Se--)}function ye(t,n){Se++,ge[Se]=t.current,t.current=n}var Re=P(null),Ue=P(null),oe=P(null),Me=P(null);function Te(t,n){switch(ye(oe,n),ye(Ue,t),ye(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C0(n),t=w0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Re),ye(Re,t)}function Ge(){Q(Re),Q(Ue),Q(oe)}function et(t){t.memoizedState!==null&&ye(Me,t);var n=Re.current,a=w0(n,t.type);n!==a&&(ye(Ue,t),ye(Re,a))}function Je(t){Ue.current===t&&(Q(Re),Q(Ue)),Me.current===t&&(Q(Me),zo._currentValue=se)}var Wt,dt;function _t(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+dt}var Lt=!1;function ct(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var re=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){re=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){re=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var H=x.split(`
`),ee=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ee.length)for(o=H.length-1,u=ee.length-1;1<=o&&0<=u&&H[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ee[u]){var he=`
`+H[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function on(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return _t("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=on(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,ht=r.unstable_shouldYield,Ht=r.unstable_requestPaint,Ce=r.unstable_now,Kt=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,_e=r.unstable_LowPriority,Ee=r.unstable_IdlePriority,we=r.log,Oe=r.unstable_setDisableYieldValue,fe=null,de=null;function Pe(t){if(typeof we=="function"&&Oe(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Fe=Math.clz32?Math.clz32:it,Ne=Math.log,De=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/De|0)|0}var at=256,pt=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ae(o):(x&=R,x!==0?u=Ae(x):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~d,R!==0?u=Ae(R):x!==0?u=Ae(x):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=x&~a;0<a;){var he=31-Fe(a),xe=1<<he;R[he]=0,H[he]=-1;var re=ee[he];if(re!==null)for(ee[he]=null,he=0;he<re.length;he++){var le=re[he];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&wt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function wt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ci(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:pr(a),(a&(t.suspendedLanes|n))!==0?0:a}function pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:J0(t.type))}function Qs(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var Nn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Nn,An="__reactProps$"+Nn,Ji="__reactContainer$"+Nn,Da="__reactEvents$"+Nn,hl="__reactListeners$"+Nn,qr="__reactHandles$"+Nn,Js="__reactResources$"+Nn,Ua="__reactMarker$"+Nn;function $s(t){delete t[ln],delete t[An],delete t[Da],delete t[hl],delete t[qr]}function Na(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ji]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F0(t);t!==null;){if(a=t[ln])return a;t=F0(t)}return n}t=a,a=t.parentNode}return null}function La(t){if(t=t[ln]||t[Ji]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[Js];return n||(n=t[Js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ua]=!0}var pl=new Set,A={};function Y(t,n){ae(t,n),ae(t+"Capture",n)}function ae(t,n){for(A[t]=n,t=0;t<n.length;t++)pl.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ze={};function ke(t){return Tn.call(ze,t)?!0:Tn.call(ne,t)?!1:te.test(t)?ze[t]=!0:(ne[t]=!0,!1)}function Be(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?mt(t,x,Ke(n)):a!=null?mt(t,x,Ke(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ke(R):t.removeAttribute("name")}function Ln(t,n,a,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Tt(t)}function mt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ke(a):""}function Mi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Jt(t,d,n[d])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gr(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Zr=null;function Rp(t){var n=La(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var vu=!1;function Cp(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(Yr!==null||Zr!==null)&&(tc(),Yr&&(n=Yr,t=Zr,Zr=Yr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ea)try{var to={};Object.defineProperty(to,"passive",{get:function(){_u=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{_u=!1}var Fa=null,xu=null,ml=null;function wp(){if(ml)return ml;var t,n=xu,a=n.length,o,u="value"in Fa?Fa.value:Fa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Dp(){return!1}function Vn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Vn(vr),no=v({},vr,{view:0,detail:0}),Ex=Vn(no),yu,Su,io,xl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(yu=t.screenX-io.screenX,Su=t.screenY-io.screenY):Su=yu=0,io=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Up=Vn(xl),Tx=v({},xl,{dataTransfer:0}),Ax=Vn(Tx),Rx=v({},no,{relatedTarget:0}),Mu=Vn(Rx),Cx=v({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=Vn(Cx),Dx=v({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=Vn(Dx),Nx=v({},vr,{data:0}),Np=Vn(Nx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Px[t])?!!n[t]:!1}function bu(){return Fx}var Bx=v({},no,{key:function(t){if(t.key){var n=Lx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=Vn(Bx),Ix=v({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Vn(Ix),Hx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Gx=Vn(Hx),Vx=v({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=Vn(Vx),Wx=v({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=Vn(Wx),jx=v({},vr,{newState:0,oldState:0}),qx=Vn(jx),Yx=[9,13,27,32],Eu=ea&&"CompositionEvent"in window,ao=null;ea&&"documentMode"in document&&(ao=document.documentMode);var Zx=ea&&"TextEvent"in window&&!ao,Op=ea&&(!Eu||ao&&8<ao&&11>=ao),Pp=" ",Fp=!1;function Bp(t,n){switch(t){case"keyup":return Yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Kx(t,n){switch(t){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Fp=!0,Pp);case"textInput":return t=n.data,t===Pp&&Fp?null:t;default:return null}}function Qx(t,n){if(Kr)return t==="compositionend"||!Eu&&Bp(t,n)?(t=wp(),ml=xu=Fa=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jx[t.type]:n==="textarea"}function Hp(t,n,a,o){Yr?Zr?Zr.push(o):Zr=[o]:Yr=o,n=lc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,so=null;function $x(t){M0(t,0)}function yl(t){var n=mr(t);if(Qt(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(ea){var Tu;if(ea){var Au="oninput"in document;if(!Au){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Au=typeof kp.oninput=="function"}Tu=Au}else Tu=!1;Vp=Tu&&(!document.documentMode||9<document.documentMode)}function Wp(){ro&&(ro.detachEvent("onpropertychange",Xp),so=ro=null)}function Xp(t){if(t.propertyName==="value"&&yl(so)){var n=[];Hp(n,so,t,gu(t)),Cp($x,n)}}function ey(t,n,a){t==="focusin"?(Wp(),ro=n,so=a,ro.attachEvent("onpropertychange",Xp)):t==="focusout"&&Wp()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(so)}function ny(t,n){if(t==="click")return yl(n)}function iy(t,n){if(t==="input"||t==="change")return yl(n)}function ay(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:ay;function oo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tn.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ry=ea&&"documentMode"in document&&11>=document.documentMode,Qr=null,Cu=null,lo=null,wu=!1;function Kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Qr==null||Qr!==Xt(o)||(o=Qr,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=lc(Cu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qr)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Du={},Qp={};ea&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function xr(t){if(Du[t])return Du[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Du[t]=n[a];return t}var Jp=xr("animationend"),$p=xr("animationiteration"),em=xr("animationstart"),sy=xr("transitionrun"),oy=xr("transitionstart"),ly=xr("transitioncancel"),tm=xr("transitionend"),nm=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ei(t,n){nm.set(t,n),Y(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],$r=0,Nu=0;function Ml(){for(var t=$r,n=Nu=$r=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&im(a,u,d)}}function bl(t,n,a,o){ui[$r++]=t,ui[$r++]=n,ui[$r++]=a,ui[$r++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,a,o){return bl(t,n,a,o),El(t)}function yr(t,n){return bl(t,null,null,n),El(t)}function im(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(t){if(50<Uo)throw Uo=0,kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function cy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new cy(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function am(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Ou(t)&&(x=1);else if(typeof t=="string")x=pS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case B:return t=ei(31,a,n,u),t.elementType=B,t.lanes=d,t;case C:return Sr(a.children,u,d,n);case y:x=8,u|=24;break;case S:return t=ei(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case V:return t=ei(13,a,n,u),t.elementType=V,t.lanes=d,t;case F:return t=ei(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case w:x=9;break e;case O:x=11;break e;case z:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Sr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function rm(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},sm.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var ts=[],ns=0,Al=null,co=0,di=[],hi=0,Ba=null,Fi=1,Bi="";function na(t,n){ts[ns++]=co,ts[ns++]=Al,Al=t,co=n}function om(t,n,a){di[hi++]=Fi,di[hi++]=Bi,di[hi++]=Ba,Ba=t;var o=Fi;t=Bi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Fi=1<<32-Fe(n)+u|a<<u|o,Bi=d+t}else Fi=1<<d|a<<u|o,Bi=t}function Bu(t){t.return!==null&&(na(t,1),om(t,1,0))}function zu(t){for(;t===Al;)Al=ts[--ns],ts[ns]=null,co=ts[--ns],ts[ns]=null;for(;t===Ba;)Ba=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null,Fi=di[--hi],di[hi]=null}function lm(t,n){di[hi++]=Fi,di[hi++]=Bi,di[hi++]=Ba,Fi=n.id,Bi=n.overflow,Ba=t}var Rn=null,Yt=null,St=!1,za=null,pi=!1,Iu=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(fi(n,t)),Iu}function cm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[An]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)vt(Lo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Mi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||A0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Ia(t,!0)}function um(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function is(t){if(t!==Rn)return!1;if(!St)return um(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ia(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=P0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=P0(t)}else n===27?(n=Yt,$a(t.type)?(t=cd,cd=null,Yt=t):Yt=n):Yt=Rn?gi(t.stateNode.nextSibling):null;return!0}function Mr(){Yt=Rn=null,St=!1}function Hu(){var t=za;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),za=null),t}function uo(t){za===null?za=[t]:za.push(t)}var Gu=P(null),br=null,ia=null;function Ha(t,n,a){ye(Gu,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=Gu.current,Q(Gu)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Vu(d.return,a,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Vu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function as(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;$n(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){br=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return fm(br,t)}function Cl(t,n){return br===null&&Er(t),fm(t,n)}function fm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var uy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fy=r.unstable_scheduleCallback,dy=r.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new uy,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&fy(dy,function(){t.controller.abort()})}var ho=null,Xu=0,rs=0,ss=null;function hy(t,n){if(ho===null){var a=ho=[];Xu=0,rs=Zf(),ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(dm,dm),n}function dm(){if(--Xu===0&&ho!==null){ss!==null&&(ss.status="fulfilled");var t=ho;ho=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function py(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=L.S;L.S=function(t,n){Kg=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(t,n),hm!==null&&hm(t,n)};var Tr=P(null);function ju(){var t=Tr.current;return t!==null?t:jt.pooledCache}function wl(t,n){n===null?ye(Tr,Tr.current):ye(Tr,n.pool)}function pm(){var t=ju();return t===null?null:{parent:hn._currentValue,pool:t}}var os=Error(s(460)),qu=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t}throw Rr=n,os}}function Ar(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rr=a,os):a}}var Rr=null;function vm(){if(Rr===null)throw Error(s(459));var t=Rr;return Rr=null,t}function _m(t){if(t===os||t===Dl)throw Error(s(483))}var ls=null,po=0;function Nl(t){var n=po;return po+=1,ls===null&&(ls=[]),gm(ls,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n(Z,W){if(t){var $=Z.deletions;$===null?(Z.deletions=[W],Z.flags|=16):$.push(W)}}function a(Z,W){if(!t)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function o(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function u(Z,W){return Z=ta(Z,W),Z.index=0,Z.sibling=null,Z}function d(Z,W,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<W?(Z.flags|=67108866,W):$):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,W,$,ve){return W===null||W.tag!==6?(W=Pu($,Z.mode,ve),W.return=Z,W):(W=u(W,$),W.return=Z,W)}function H(Z,W,$,ve){var Qe=$.type;return Qe===C?he(Z,W,$.props.children,ve,$.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&Ar(Qe)===W.type)?(W=u(W,$.props),mo(W,$),W.return=Z,W):(W=Tl($.type,$.key,$.props,null,Z.mode,ve),mo(W,$),W.return=Z,W)}function ee(Z,W,$,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Fu($,Z.mode,ve),W.return=Z,W):(W=u(W,$.children||[]),W.return=Z,W)}function he(Z,W,$,ve,Qe){return W===null||W.tag!==7?(W=Sr($,Z.mode,ve,Qe),W.return=Z,W):(W=u(W,$),W.return=Z,W)}function xe(Z,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Pu(""+W,Z.mode,$),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return $=Tl(W.type,W.key,W.props,null,Z.mode,$),mo($,W),$.return=Z,$;case E:return W=Fu(W,Z.mode,$),W.return=Z,W;case T:return W=Ar(W),xe(Z,W,$)}if(X(W)||K(W))return W=Sr(W,Z.mode,$,null),W.return=Z,W;if(typeof W.then=="function")return xe(Z,Nl(W),$);if(W.$$typeof===N)return xe(Z,Cl(Z,W),$);Ll(Z,W)}return null}function re(Z,W,$,ve){var Qe=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qe!==null?null:R(Z,W,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Qe?H(Z,W,$,ve):null;case E:return $.key===Qe?ee(Z,W,$,ve):null;case T:return $=Ar($),re(Z,W,$,ve)}if(X($)||K($))return Qe!==null?null:he(Z,W,$,ve,null);if(typeof $.then=="function")return re(Z,W,Nl($),ve);if($.$$typeof===N)return re(Z,W,Cl(Z,$),ve);Ll(Z,$)}return null}function le(Z,W,$,ve,Qe){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get($)||null,R(W,Z,""+ve,Qe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return Z=Z.get(ve.key===null?$:ve.key)||null,H(W,Z,ve,Qe);case E:return Z=Z.get(ve.key===null?$:ve.key)||null,ee(W,Z,ve,Qe);case T:return ve=Ar(ve),le(Z,W,$,ve,Qe)}if(X(ve)||K(ve))return Z=Z.get($)||null,he(W,Z,ve,Qe,null);if(typeof ve.then=="function")return le(Z,W,$,Nl(ve),Qe);if(ve.$$typeof===N)return le(Z,W,$,Cl(W,ve),Qe);Ll(W,ve)}return null}function je(Z,W,$,ve){for(var Qe=null,At=null,Ye=W,ut=W=0,yt=null;Ye!==null&&ut<$.length;ut++){Ye.index>ut?(yt=Ye,Ye=null):yt=Ye.sibling;var Rt=re(Z,Ye,$[ut],ve);if(Rt===null){Ye===null&&(Ye=yt);break}t&&Ye&&Rt.alternate===null&&n(Z,Ye),W=d(Rt,W,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt,Ye=yt}if(ut===$.length)return a(Z,Ye),St&&na(Z,ut),Qe;if(Ye===null){for(;ut<$.length;ut++)Ye=xe(Z,$[ut],ve),Ye!==null&&(W=d(Ye,W,ut),At===null?Qe=Ye:At.sibling=Ye,At=Ye);return St&&na(Z,ut),Qe}for(Ye=o(Ye);ut<$.length;ut++)yt=le(Ye,Z,ut,$[ut],ve),yt!==null&&(t&&yt.alternate!==null&&Ye.delete(yt.key===null?ut:yt.key),W=d(yt,W,ut),At===null?Qe=yt:At.sibling=yt,At=yt);return t&&Ye.forEach(function(ar){return n(Z,ar)}),St&&na(Z,ut),Qe}function $e(Z,W,$,ve){if($==null)throw Error(s(151));for(var Qe=null,At=null,Ye=W,ut=W=0,yt=null,Rt=$.next();Ye!==null&&!Rt.done;ut++,Rt=$.next()){Ye.index>ut?(yt=Ye,Ye=null):yt=Ye.sibling;var ar=re(Z,Ye,Rt.value,ve);if(ar===null){Ye===null&&(Ye=yt);break}t&&Ye&&ar.alternate===null&&n(Z,Ye),W=d(ar,W,ut),At===null?Qe=ar:At.sibling=ar,At=ar,Ye=yt}if(Rt.done)return a(Z,Ye),St&&na(Z,ut),Qe;if(Ye===null){for(;!Rt.done;ut++,Rt=$.next())Rt=xe(Z,Rt.value,ve),Rt!==null&&(W=d(Rt,W,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return St&&na(Z,ut),Qe}for(Ye=o(Ye);!Rt.done;ut++,Rt=$.next())Rt=le(Ye,Z,ut,Rt.value,ve),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?ut:Rt.key),W=d(Rt,W,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return t&&Ye.forEach(function(TS){return n(Z,TS)}),St&&na(Z,ut),Qe}function kt(Z,W,$,ve){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var Qe=$.key;W!==null;){if(W.key===Qe){if(Qe=$.type,Qe===C){if(W.tag===7){a(Z,W.sibling),ve=u(W,$.props.children),ve.return=Z,Z=ve;break e}}else if(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&Ar(Qe)===W.type){a(Z,W.sibling),ve=u(W,$.props),mo(ve,$),ve.return=Z,Z=ve;break e}a(Z,W);break}else n(Z,W);W=W.sibling}$.type===C?(ve=Sr($.props.children,Z.mode,ve,$.key),ve.return=Z,Z=ve):(ve=Tl($.type,$.key,$.props,null,Z.mode,ve),mo(ve,$),ve.return=Z,Z=ve)}return x(Z);case E:e:{for(Qe=$.key;W!==null;){if(W.key===Qe)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(Z,W.sibling),ve=u(W,$.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,W);break}else n(Z,W);W=W.sibling}ve=Fu($,Z.mode,ve),ve.return=Z,Z=ve}return x(Z);case T:return $=Ar($),kt(Z,W,$,ve)}if(X($))return je(Z,W,$,ve);if(K($)){if(Qe=K($),typeof Qe!="function")throw Error(s(150));return $=Qe.call($),$e(Z,W,$,ve)}if(typeof $.then=="function")return kt(Z,W,Nl($),ve);if($.$$typeof===N)return kt(Z,W,Cl(Z,$),ve);Ll(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(a(Z,W.sibling),ve=u(W,$),ve.return=Z,Z=ve):(a(Z,W),ve=Pu($,Z.mode,ve),ve.return=Z,Z=ve),x(Z)):a(Z,W)}return function(Z,W,$,ve){try{po=0;var Qe=kt(Z,W,$,ve);return ls=null,Qe}catch(Ye){if(Ye===os||Ye===Dl)throw Ye;var At=ei(29,Ye,null,Z.mode);return At.lanes=ve,At.return=Z,At}}}var Cr=xm(!0),ym=xm(!1),Ga=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),im(t,null,a),n}return bl(t,o,n,a),El(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function vo(){if(Qu){var t=ss;if(t!==null)throw t}}function _o(t,n,a,o){Qu=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ee=H.next;H.next=null,x===null?d=ee:x.next=ee,x=H;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==x&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=H))}if(d!==null){var xe=u.baseState;x=0,he=ee=H=null,R=d;do{var re=R.lane&-536870913,le=re!==R.lane;if(le?(xt&re)===re:(o&re)===re){re!==0&&re===rs&&(Qu=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=t,$e=R;re=n;var kt=a;switch($e.tag){case 1:if(je=$e.payload,typeof je=="function"){xe=je.call(kt,xe,re);break e}xe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,re=typeof je=="function"?je.call(kt,xe,re):je,re==null)break e;xe=v({},xe,re);break e;case 2:Ga=!0}}re=R.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=le,H=xe):he=he.next=le,x|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),Ya|=x,t.lanes=x,t.memoizedState=xe}}function Sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sm(a[t],n)}var cs=P(null),Ol=P(0);function bm(t,n){t=ha,ye(Ol,t),ye(cs,n),ha=t|n.baseLanes}function Ju(){ye(Ol,ha),ye(cs,cs.current)}function $u(){ha=Ol.current,Q(cs),Q(Ol)}var ti=P(null),mi=null;function Wa(t){var n=t.alternate;ye(cn,cn.current&1),ye(ti,t),mi===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(mi=t)}function ef(t){ye(cn,cn.current),ye(ti,t),mi===null&&(mi=t)}function Em(t){t.tag===22?(ye(cn,cn.current),ye(ti,t),mi===null&&(mi=t)):Xa()}function Xa(){ye(cn,cn.current),ye(ti,ti.current)}function ni(t){Q(ti),mi===t&&(mi=null),Q(cn)}var cn=P(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,lt=null,Gt=null,pn=null,Fl=!1,us=!1,wr=!1,Bl=0,xo=0,fs=null,my=0;function an(){throw Error(s(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,d){return ra=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?og:_f,wr=!1,d=a(o,u),wr=!1,us&&(d=Am(n,a,o,u)),Tm(t),d}function Tm(t){L.H=Mo;var n=Gt!==null&&Gt.next!==null;if(ra=0,pn=Gt=lt=null,Fl=!1,xo=0,fs=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Rl(t)&&(mn=!0))}function Am(t,n,a,o){lt=t;var u=0;do{if(us&&(fs=null),xo=0,us=!1,25<=u)throw Error(s(301));if(u+=1,pn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=lg,d=n(a,o)}while(us);return d}function gy(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?yo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function af(){var t=Bl!==0;return Bl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}ra=0,pn=Gt=lt=null,us=!1,xo=Bl=0,fs=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?lt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=pn===null?lt.memoizedState:pn.next;if(n!==null)pn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},pn===null?lt.memoizedState=pn=t:pn=pn.next=t}return pn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var n=xo;return xo+=1,fs===null&&(fs=[]),t=gm(fs,t,n),n=lt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?og:_f),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===N)return Cn(t)}throw Error(s(438,String(t)))}function of(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=j;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=un();return lf(n,Gt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=x=null,H=null,ee=n,he=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(xt&xe)===xe:(ra&xe)===xe){var re=ee.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===rs&&(he=!0);else if((ra&re)===re){ee=ee.next,re===rs&&(he=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=xe,x=d):H=H.next=xe,lt.lanes|=re,Ya|=re;xe=ee.action,wr&&a(d,xe),d=ee.hasEagerState?ee.eagerState:a(d,xe)}else re={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=re,x=d):H=H.next=re,lt.lanes|=xe,Ya|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?x=d:H.next=R,!$n(d,t.memoizedState)&&(mn=!0,he&&(a=ss,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);$n(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(t,n,a){var o=lt,u=un(),d=St;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((Gt||u).memoizedState,a);if(x&&(u.memoizedState=a,mn=!0),u=u.queue,df(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));d||(ra&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=zl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wm(t,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Nm(t)}function Dm(t,n,a){return a(function(){Um(n)&&Nm(t)})}function Um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function Nm(t){var n=yr(t,2);n!==null&&qn(n,t,2)}function uf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),wr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function Lm(t,n,a,o){return t.baseState=a,lf(t,Gt,typeof o=="function"?o:sa)}function vy(t,n,a,o,u){if(kl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};L.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=L.T,x={};L.T=x;try{var R=a(u,o),H=L.S;H!==null&&H(x,R),Pm(t,n,R)}catch(ee){ff(t,n,ee)}finally{d!==null&&x.types!==null&&(d.types=x.types),L.T=d}}else try{d=a(u,o),Pm(t,n,d)}catch(ee){ff(t,n,ee)}}function Pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return ff(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zm(t,n){return n}function Im(t,n){if(St){var a=jt.formState;if(a!==null){e:{var o=lt;if(St){if(Yt){t:{for(var u=Yt,d=pi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=gi(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=ag.bind(null,lt,o),o.dispatch=a,o=uf(!1),d=vf.bind(null,lt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=vy.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hm(t){var n=un();return Gm(n,Gt,t)}function Gm(t,n,a){if(n=lf(t,n,zm)[0],t=Hl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(x){throw x===os?Dl:x}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ds(9,{destroy:void 0},_y.bind(null,u,a),null)),[o,d,t]}function _y(t,n){t.action=n}function Vm(t){var n=un(),a=Gt;if(a!==null)return Gm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ds(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=zl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function km(){return un().memoizedState}function Gl(t,n,a,o){var u=Hn();lt.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&tf(o,Gt.memoizedState.deps)?u.memoizedState=ds(n,d,a,o):(lt.flags|=t,u.memoizedState=ds(1|n,d,a,o))}function Wm(t,n){Gl(8390656,8,t,n)}function df(t,n){Vl(2048,8,t,n)}function xy(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=zl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Xm(t){var n=un().memoizedState;return xy({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return Vl(4,2,t,n)}function qm(t,n){return Vl(4,4,t,n)}function Ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Ym.bind(null,n,t),a)}function hf(){}function Km(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Qm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Jg(),lt.lanes|=t,Ya|=t,a)}function Jm(t,n,a,o){return $n(a,n)?a:cs.current!==null?(t=pf(t,a,o),$n(t,n)||(mn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(xt&261930)===0?(mn=!0,t.memoizedState=a):(t=Jg(),lt.lanes|=t,Ya|=t,n)}function $m(t,n,a,o,u){var d=I.p;I.p=d!==0&&8>d?d:8;var x=L.T,R={};L.T=R,vf(t,!1,n,a);try{var H=u(),ee=L.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=py(H,o);So(t,n,he,ri(t))}else So(t,n,o,ri(t))}catch(xe){So(t,n,{then:function(){},status:"rejected",reason:xe},ri())}finally{I.p=d,x!==null&&R.types!==null&&(x.types=R.types),L.T=x}}function yy(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=eg(t).queue;$m(t,u,n,se,a===null?yy:function(){return tg(t),a(o)})}function eg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:se},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function tg(t){var n=eg(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},ri())}function gf(){return Cn(zo)}function ng(){return un().memoizedState}function ig(){return un().memoizedState}function Sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Va(a);var o=ka(n,t,a);o!==null&&(qn(o,n,a),go(o,n,a)),n={cache:Wu()},t.payload=n;return}n=n.return}}function My(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?rg(n,a):(a=Lu(t,n,a,o),a!==null&&(qn(a,t,o),sg(a,n,o)))}function ag(t,n,a){var o=ri();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))rg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,x))return bl(t,n,u,0),jt===null&&Ml(),!1}catch{}if(a=Lu(t,n,u,o),a!==null)return qn(a,t,o),sg(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(s(479))}else n=Lu(t,a,o,2),n!==null&&qn(n,t,2)}function kl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function rg(t,n){us=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ci(t,a)}}var Mo={readContext:Cn,use:Il,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Mo.useEffectEvent=an;var og={readContext:Cn,use:Il,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Wm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,Ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(wr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=My.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=ag.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Hn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=$m.bind(null,lt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Hn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(xt&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Wm(Dm.bind(null,o,d,t),[t]),o.flags|=2048,ds(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=jt.identifierPrefix;if(St){var a=Bi,o=Fi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=my++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Im,useActionState:Im,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Hn().memoizedState=Sy.bind(null,lt)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Cn,use:Il,useCallback:Km,useContext:Cn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:qm,useMemo:Qm,useReducer:Hl,useRef:km,useState:function(){return Hl(sa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Hl(sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:gf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=un();return Lm(a,Gt,t,n)},useMemoCache:of,useCacheRefresh:ig};_f.useEffectEvent=Xm;var lg={readContext:Cn,use:Il,useCallback:Km,useContext:Cn,useEffect:df,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:qm,useMemo:Qm,useReducer:cf,useRef:km,useState:function(){return cf(sa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return Gt===null?pf(a,t,n):Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=cf(sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:gf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=un();return Gt!==null?Lm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:ig};lg.useEffectEvent=Xm;function xf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(qn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(qn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(qn(n,t,a),go(n,t,a))}};function cg(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,d):!0}function ug(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function fg(t){Sl(t)}function dg(t){console.error(t)}function hg(t){Sl(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function mg(t){return t=Va(t),t.tag=3,t}function gg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){pg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){pg(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function by(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?nc():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(t,o,u)),!1}throw Error(s(435,a.tag))}return jf(t,o,u),nc(),!1}if(St)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(t=Error(s(422),{cause:o}),uo(fi(t,a)))):(o!==Iu&&(n=Error(s(423),{cause:o}),uo(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),rn!==4&&(rn=2)),!1;var d=Error(s(520),{cause:o});if(d=fi(d,a),Do===null?Do=[d]:Do.push(d),rn!==4&&(rn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mg(u),gg(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),mn=!1;function wn(t,n,a,o){n.child=t===null?ym(n,null,a,o):Cr(n,t.child,a,o)}function vg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Er(n),o=nf(t,n,a,x,d,u),R=af(),t!==null&&!mn?(rf(t,n,u),oa(t,n,u)):(St&&R&&Bu(n),n.flags|=1,wn(t,n,o,u),n.child)}function _g(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,xg(t,n,d,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Df(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(d,o),t.ref=n.ref,t.return=n,n.child=t}function xg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(oo(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,Df(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return bf(t,n,a,o,u)}function yg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Sg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,d!==null?d.cachePool:null),d!==null?bm(n,d):Ju(),Em(n);else return o=n.lanes=536870912,Sg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wl(n,d.cachePool),bm(n,d),Xa(),n.memoizedState=null):(t!==null&&wl(n,null),Ju(),Xa());return wn(t,n,u,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sg(t,n,a,o,u){var d=ju();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&wl(n,null),Ju(),Em(n),t!==null&&as(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mg(t,n,a){return Cr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Ey(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,bo(null,t);if(ef(n),(t=Yt)?(t=O0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return Xl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=Mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||as(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=jt,o!==null&&(x=Kn(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,yr(t,x),qn(o,t,x),Mf;nc(),n=Mg(t,n,a)}else t=d.treeContext,Yt=gi(x.nextSibling),Rn=n,St=!0,za=null,pi=!1,t!==null&&lm(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return Er(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!mn?(rf(t,n,u),oa(t,n,u)):(St&&o&&Bu(n),n.flags|=1,wn(t,n,a,u),n.child)}function bg(t,n,a,o,u,d){return Er(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(t),o=af(),t!==null&&!mn?(rf(t,n,d),oa(t,n,d)):(St&&o&&Bu(n),n.flags|=1,wn(t,n,a,d),n.child)}function Eg(t,n,a,o,u){if(Er(n),n.stateNode===null){var d=es,x=a.contextType;typeof x=="object"&&x!==null&&(d=Cn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Cn(x):es,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&yf.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),vo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Dr(a,R);d.props=H;var ee=d.context,he=a.contextType;x=es,typeof he=="object"&&he!==null&&(x=Cn(he));var xe=a.getDerivedStateFromProps;he=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==x)&&ug(n,d,o,x),Ga=!1;var re=n.memoizedState;d.state=re,_o(n,o,d,u),vo(),ee=n.memoizedState,R||re!==ee||Ga?(typeof xe=="function"&&(xf(n,a,xe,o),ee=n.memoizedState),(H=Ga||cg(n,a,H,o,re,ee,x))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),x=n.memoizedProps,he=Dr(a,x),d.props=he,xe=n.pendingProps,re=d.context,ee=a.contextType,H=es,typeof ee=="object"&&ee!==null&&(H=Cn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==xe||re!==H)&&ug(n,d,o,H),Ga=!1,re=n.memoizedState,d.state=re,_o(n,o,d,u),vo();var le=n.memoizedState;x!==xe||re!==le||Ga||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof R=="function"&&(xf(n,a,R,o),le=n.memoizedState),(he=Ga||cg(n,a,he,o,re,le,H)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=H,o=he):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Cr(n,t.child,null,u),n.child=Cr(n,null,a,u)):wn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=oa(t,n,u),t}function Tg(t,n,a,o){return Mr(),n.flags|=256,wn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:pm()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Ag(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Wa(n):Xa(),(t=Yt)?(t=O0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ia(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Xa(),u=n.mode,R=ql({mode:"hidden",children:R},u),o=Sr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=Ef,bo(null,o)):(Wa(n),Rf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Wa(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),R=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),R=Sr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Cr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=Ef,n=bo(null,o));else if(Wa(n),ld(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ee=x.dgst;x=ee,o=Error(s(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(mn||as(t,n,a,!1),x=(a&t.childLanes)!==0,mn||x){if(x=jt,x!==null&&(o=Kn(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,yr(t,o),qn(x,t,o),Mf;od(R)||nc(),n=Cf(t,n,a)}else od(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=gi(R.nextSibling),Rn=n,St=!0,za=null,pi=!1,t!==null&&lm(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Xa(),R=o.fallback,u=n.mode,H=t.child,ee=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=ta(ee,R):(R=Sr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,bo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Tf(a):(u=R.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Af(t,x,a),n.memoizedState=Ef,bo(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Cr(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function wf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function Cg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=cn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ye(cn,x),wn(t,n,o,a),o=St?co:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,a,n);else if(t.tag===19)Rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,d,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Ty(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ha(n,hn,t.memoizedState.cache),Mr();break;case 27:case 5:et(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ag(t,n,a):(Wa(n),t=oa(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(as(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Cg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(cn,cn.current),o)break;return null;case 22:return n.lanes=0,yg(t,n,a,n.pendingProps);case 24:Ha(n,hn,t.memoizedState.cache)}return oa(t,n,a)}function wg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return mn=!1,Ty(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,St&&(n.flags&1048576)!==0&&om(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ar(n.elementType),n.type=t,typeof t=="function")Ou(t)?(o=Dr(t,o),n.tag=1,n=Eg(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=vg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=_g(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Dr(o,n.pendingProps),Eg(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),_o(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ha(n,hn,o),o!==d.cache&&ku(n,[hn],a,!0),vo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Tg(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),uo(u),n=Tg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=gi(t.firstChild),Rn=n,St=!0,za=null,pi=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Mr(),o===u){n=oa(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=H0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=cc(oe.current).createElement(a),o[ln]=n,o[An]=t,Dn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=H0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&St&&(o=n.stateNode=B0(n.type,n.pendingProps,oe.current),Rn=n,pi=!0,u=Yt,$a(n.type)?(cd=u,Yt=gi(o.firstChild)):Yt=u),wn(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=Yt)&&(o=tS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Yt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ia(n)),et(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,ad(u,d)?o=null:x!==null&&ad(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,gy,null,null,a),zo._currentValue=u),jl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=Yt)&&(a=nS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Yt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return Ag(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Cr(n,null,o,a):wn(t,n,o,a),n.child;case 11:return vg(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Er(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return _g(t,n,n.type,n.pendingProps,a);case 15:return xg(t,n,n.type,n.pendingProps,a);case 19:return Cg(t,n,a);case 31:return Ey(t,n,a);case 22:return yg(t,n,a,n.pendingProps);case 24:return Er(n),o=Cn(hn),t===null?(u=ju(),u===null&&(u=jt,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),Ha(n,hn,u)):((t.lanes&a)!==0&&(Zu(t,n),_o(n,null,null,a),vo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,hn,o)):(o=d.cache,Ha(n,hn,o),o!==u.cache&&ku(n,[hn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(n0())t.flags|=8192;else throw Rr=Ul,qu}else t.flags&=-16777217}function Dg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X0(n))if(n0())t.flags|=8192;else throw Rr=Ul,qu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,gs|=n)}function Eo(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ay(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(hn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(la(n),d!==null?(Zt(n),Dg(n,d)):(Zt(n),Uf(n,u,null,o,a))):d?d!==t.memoizedState?(la(n),Zt(n),Dg(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Zt(n),Uf(n,u,t,o,a)),null;case 27:if(Je(n),a=oe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Re.current,is(n)?cm(n):(t=B0(u,o,a),n.stateNode=t,la(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(d=Re.current,is(n))cm(n);else{var x=cc(oe.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[ln]=n,d[An]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Zt(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=oe.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||A0(t.nodeValue,a)),t||Ia(n,!0)}else t=cc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=is(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Zt(n),null);case 4:return Ge(),t===null&&$f(n.stateNode.containerInfo),Zt(n),null;case 10:return aa(n.type),Zt(n),null;case 19:if(Q(cn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Eo(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Pl(t),d!==null){for(n.flags|=128,Eo(o,!1),t=d.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)am(a,t),a=a.sibling;return ye(cn,cn.current&1|2),St&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>$l&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!St)return Zt(n),null}else 2*Ce()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=cn.current,ye(cn,u?a&1|2:a&1),St&&na(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ni(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(hn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ry(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(hn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(cn),null;case 4:return Ge(),null;case 10:return aa(n.type),null;case 22:case 23:return ni(n),$u(),t!==null&&Q(Tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(hn),null;case 25:return null;default:return null}}function Ug(t,n){switch(zu(n),n.tag){case 3:aa(hn),Ge();break;case 26:case 27:case 5:Je(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Q(cn);break;case 10:aa(n.type);break;case 22:case 23:ni(n),$u(),t!==null&&Q(Tr);break;case 24:aa(hn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){zt(n,n.return,R)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var H=a,ee=R;try{ee()}catch(he){zt(u,H,he)}}}o=o.next}while(o!==d)}}catch(he){zt(n,n.return,he)}}function Ng(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){zt(t,t.return,o)}}}function Lg(t,n,a){a.props=Dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function Og(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;Zy(o,t.type,a,n),o[An]=n}catch(u){zt(t,t.return,u)}}function Pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[ln]=t,n[An]=a}catch(d){zt(t,t.return,d)}}var ca=!1,gn=!1,Pf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Cy(t,n){if(t=t.containerInfo,nd=gc,t=Zp(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,R=-1,H=-1,ee=0,he=0,xe=t,re=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(R=x+u),xe!==d||o!==0&&xe.nodeType!==3||(H=x+o),xe.nodeType===3&&(x+=xe.nodeValue.length),(le=xe.firstChild)!==null;)re=xe,xe=le;for(;;){if(xe===t)break t;if(re===a&&++ee===u&&(R=x),re===d&&++he===o&&(H=x),(le=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=le}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},gc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=Dr(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function zg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&To(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){zt(a,a.return,x)}else{var u=Dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}o&64&&Ng(a),o&512&&Ao(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:fa(t,a),n===null&&o&4&&Og(a),o&512&&Ao(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&Gg(t,a);break;case 13:fa(t,a),o&4&&Vg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=By.bind(null,a),iS(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||gn,u=ca;var d=gn;ca=o,(gn=n)&&!d?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,gn=d}break;case 30:break;default:fa(t,a)}}function Ig(t){var n=t.alternate;n!==null&&(t.alternate=null,Ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$s(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Hg(t,n,a),a=a.sibling}function Hg(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var o=$t,u=kn;$a(a.type)&&($t=a.stateNode,kn=!1),ua(t,n,a),Po(a.stateNode),$t=o,kn=u;break;case 5:gn||zi(a,n);case 6:if(o=$t,u=kn,$t=null,ua(t,n,a),$t=o,kn=u,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:$t!==null&&(kn?(t=$t,N0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):N0($t,a.stateNode));break;case 4:o=$t,u=kn,$t=a.stateNode.containerInfo,kn=!0,ua(t,n,a),$t=o,kn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),gn||ja(4,a,n),ua(t,n,a);break;case 1:gn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Lg(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ua(t,n,a),gn=o;break;default:ua(t,n,a)}}function Gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){zt(n,n.return,a)}}}function Vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){zt(n,n.return,a)}}function wy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bg),n;default:throw Error(s(435,t.tag))}}function Kl(t,n){var a=wy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=zy.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){$t=R.stateNode,kn=!1;break e}break;case 5:$t=R.stateNode,kn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if($t===null)throw Error(s(160));Hg(d,x,u),$t=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)kg(n,t),n=n.sibling}var Ti=null;function kg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),Xn(t),o&4&&(ja(3,t,t.return),To(3,t),ja(5,t,t.return));break;case 1:Wn(n,t),Xn(t),o&512&&(gn||a===null||zi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Wn(n,t),Xn(t),o&512&&(gn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ua]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[ln]=t,dn(d),o=d;break e;case"link":var x=k0("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=k0("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=t,dn(d),o=d}t.stateNode=o}else W0(u,t.type,t.stateNode);else t.stateNode=V0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?W0(u,t.type,t.stateNode):V0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),Xn(t),o&512&&(gn||a===null||zi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),Xn(t),o&512&&(gn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(je){zt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(Wn(n,t),Xn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){zt(t,t.return,je)}}break;case 3:if(dc=null,u=Ti,Ti=uc(n.containerInfo),Wn(n,t),Ti=u,Xn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(je){zt(t,t.return,je)}Pf&&(Pf=!1,Wg(t));break;case 4:o=Ti,Ti=uc(t.stateNode.containerInfo),Wn(n,t),Xn(t),Ti=o;break;case 12:Wn(n,t),Xn(t);break;case 31:Wn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Wn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=ca,he=gn;if(ca=ee||u,gn=he||H,Wn(n,t),gn=he,ca=ee,Xn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ca||gn||Ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(je){zt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){zt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?L0(le,!0):L0(H.stateNode,!1)}catch(je){zt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Wn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Lf(t);Zl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(Jn(x,""),a.flags&=-33);var R=Lf(t);Zl(t,R,x);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=Lf(t);Of(t,ee,H);break;default:throw Error(s(161))}}catch(he){zt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zg(t,n.alternate,n),n=n.sibling}function Ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Ur(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lg(n,n.return,a),Ur(n);break;case 27:Po(n.stateNode);case 26:case 5:zi(n,n.return),Ur(n);break;case 22:n.memoizedState===null&&Ur(n);break;case 30:Ur(n);break;default:Ur(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:da(u,d,a),To(4,d);break;case 1:if(da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Sm(H[u],R)}catch(ee){zt(o,o.return,ee)}}a&&x&64&&Ng(d),Ao(d,d.return);break;case 27:Fg(d);case 26:case 5:da(u,d,a),a&&o===null&&x&4&&Og(d),Ao(d,d.return);break;case 12:da(u,d,a);break;case 31:da(u,d,a),a&&x&4&&Gg(u,d);break;case 13:da(u,d,a),a&&x&4&&Vg(u,d);break;case 22:d.memoizedState===null&&da(u,d,a),Ao(d,d.return);break;case 30:break;default:da(u,d,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xg(t,n,a,o),n=n.sibling}function Xg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&To(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ai(t,n,a,o):Ro(t,n):d._visibility&2?Ai(t,n,a,o):(d._visibility|=2,hs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Ai(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ai(t,n,a,o)}}function hs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=a,H=o,ee=x.flags;switch(x.tag){case 0:case 11:case 15:hs(d,x,R,H,u),To(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?hs(d,x,R,H,u):Ro(d,x):(he._visibility|=2,hs(d,x,R,H,u)),u&&ee&2048&&Ff(x.alternate,x);break;case 24:hs(d,x,R,H,u),u&&ee&2048&&Bf(x.alternate,x);break;default:hs(d,x,R,H,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Bf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function ps(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)jg(t,n,a),t=t.sibling}function jg(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&Co&&t.memoizedState!==null&&mS(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var o=Ti;Ti=uc(t.stateNode.containerInfo),ps(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,ps(t,n,a),Co=o):ps(t,n,a));break;default:ps(t,n,a)}}function qg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Zg(o,t)}qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):wo(t);break;default:wo(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Zg(o,t)}qg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function Zg(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(Ig(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var Dy={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,gt=null,xt=0,Bt=0,ii=null,qa=!1,ms=!1,zf=!1,ha=0,rn=0,Ya=0,Nr=0,If=0,ai=0,gs=0,Do=null,jn=null,Hf=!1,Jl=0,Kg=0,$l=1/0,ec=null,Za=null,xn=0,Ka=null,vs=null,pa=0,Gf=0,Vf=null,Qg=null,Uo=0,kf=null;function ri(){return(Dt&2)!==0&&xt!==0?xt&-xt:L.T!==null?Zf():Ks()}function Jg(){if(ai===0)if((xt&536870912)===0||St){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function qn(t,n,a){(t===jt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(_s(t,0),Qa(t,xt,ai,!1)),tt(t,a),((Dt&2)===0||t!==jt)&&(t===jt&&((Dt&2)===0&&(Nr|=a),rn===4&&Qa(t,xt,ai,!1)),Ii(t))}function $g(t,n,a){if((Dt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?Oy(t,n):Xf(t,n,!0),d=o;do{if(u===0){ms&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ny(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;u=Do;var H=R.current.memoizedState.isDehydrated;if(H&&(_s(R,x).flags|=256),x=Xf(R,x,!1),x!==2){if(zf&&!H){R.errorRecoveryDisabledLanes|=d,Nr|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){_s(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ai,!qa);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-Ce(),10<u)){if(Qa(o,n,ai,!qa),me(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=D0(e0.bind(null,o,a,jn,ec,Hf,n,ai,Nr,gs,qa,d,"Throttled",-0,0),u);break e}e0(o,a,jn,ec,Hf,n,ai,Nr,gs,qa,d,null,-0,0)}}break}while(!0);Ii(t)}function e0(t,n,a,o,u,d,x,R,H,ee,he,xe,re,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},jg(n,d,xe);var je=(d&62914560)===d?Jl-Ce():(d&4194048)===d?Kg-Ce():0;if(je=gS(xe,je),je!==null){pa=d,t.cancelPendingCommit=je(l0.bind(null,t,n,d,a,o,u,x,R,H,he,xe,null,re,le)),Qa(t,d,x,!ee);return}}l0(t,n,d,a,o,u,x,R,H)}function Ny(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~If,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&wt(t,a,n)}function tc(){return(Dt&6)===0?(No(0),!1):!0}function Wf(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,ia=br=null,sf(t),ls=null,po=0,t=gt;for(;t!==null;)Ug(t.alternate,t),t=t.return;gt=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Jy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,Wf(),jt=t,gt=a=ta(t.current,null),xt=n,Bt=0,ii=null,qa=!1,ms=Ie(t,n),zf=!1,gs=ai=If=Nr=Ya=rn=0,jn=Do=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return ha=n,Ml(),a}function t0(t,n){lt=null,L.H=Mo,n===os||n===Dl?(n=vm(),Bt=3):n===qu?(n=vm(),Bt=4):Bt=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,gt===null&&(rn=1,Wl(t,fi(n,t.current)))}function n0(){var t=ti.current;return t===null?!0:(xt&4194048)===xt?mi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===mi:!1}function i0(){var t=L.H;return L.H=Mo,t===null?Mo:t}function a0(){var t=L.A;return L.A=Dy,t}function nc(){rn=4,qa||(xt&4194048)!==xt&&ti.current!==null||(ms=!0),(Ya&134217727)===0&&(Nr&134217727)===0||jt===null||Qa(jt,xt,ai,!1)}function Xf(t,n,a){var o=Dt;Dt|=2;var u=i0(),d=a0();(jt!==t||xt!==n)&&(ec=null,_s(t,n)),n=!1;var x=rn;e:do try{if(Bt!==0&&gt!==null){var R=gt,H=ii;switch(Bt){case 8:Wf(),x=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ee=Bt;if(Bt=0,ii=null,xs(t,R,H,ee),a&&ms){x=0;break e}break;default:ee=Bt,Bt=0,ii=null,xs(t,R,H,ee)}}Ly(),x=rn;break}catch(he){t0(t,he)}while(!0);return n&&t.shellSuspendCounter++,ia=br=null,Dt=o,L.H=u,L.A=d,gt===null&&(jt=null,xt=0,Ml()),x}function Ly(){for(;gt!==null;)r0(gt)}function Oy(t,n){var a=Dt;Dt|=2;var o=i0(),u=a0();jt!==t||xt!==n?(ec=null,$l=Ce()+500,_s(t,n)):ms=Ie(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var d=ii;t:switch(Bt){case 1:Bt=0,ii=null,xs(t,n,d,1);break;case 2:case 9:if(mm(d)){Bt=0,ii=null,s0(n);break}n=function(){Bt!==2&&Bt!==9||jt!==t||(Bt=7),Ii(t)},d.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:mm(d)?(Bt=0,ii=null,s0(n)):(Bt=0,ii=null,xs(t,n,d,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var R=gt;if(x?X0(x):R.stateNode.complete){Bt=0,ii=null;var H=R.sibling;if(H!==null)gt=H;else{var ee=R.return;ee!==null?(gt=ee,ic(ee)):gt=null}break t}}Bt=0,ii=null,xs(t,n,d,5);break;case 6:Bt=0,ii=null,xs(t,n,d,6);break;case 8:Wf(),rn=6;break e;default:throw Error(s(462))}}Py();break}catch(he){t0(t,he)}while(!0);return ia=br=null,L.H=o,L.A=u,Dt=a,gt!==null?0:(jt=null,xt=0,Ml(),rn)}function Py(){for(;gt!==null&&!ht();)r0(gt)}function r0(t){var n=wg(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?ic(t):gt=n}function s0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:sf(n);default:Ug(a,n),n=gt=am(n,ha),n=wg(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?ic(t):gt=n}function xs(t,n,a,o){ia=br=null,sf(n),ls=null,po=0;var u=n.return;try{if(by(t,u,n,a,xt)){rn=1,Wl(t,fi(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;rn=1,Wl(t,fi(a,t.current)),gt=null;return}n.flags&32768?(St||o===1?t=!0:ms||(xt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),o0(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){o0(n,qa);return}t=n.return;var a=Ay(n.alternate,n,ha);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);rn===0&&(rn=5)}function o0(t,n){do{var a=Ry(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);rn=6,gt=null}function l0(t,n,a,o,u,d,x,R,H){t.cancelPendingCommit=null;do ac();while(xn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,tn(t,a,d,x,R,H),t===jt&&(gt=jt=null,xt=0),vs=n,Ka=t,pa=a,Gf=d,Vf=u,Qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Iy(J,function(){return h0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=I.p,I.p=2,x=Dt,Dt|=4;try{Cy(t,n,a)}finally{Dt=x,I.p=u,L.T=o}}xn=1,c0(),u0(),f0()}}function c0(){if(xn===1){xn=0;var t=Ka,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=I.p;I.p=2;var u=Dt;Dt|=4;try{kg(n,t);var d=id,x=Zp(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&Yp(R.ownerDocument.documentElement,R)){if(H!==null&&Ru(R)){var ee=H.start,he=H.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var xe=R.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var le=re.getSelection(),je=R.textContent.length,$e=Math.min(H.start,je),kt=H.end===void 0?$e:Math.min(H.end,je);!le.extend&&$e>kt&&(x=kt,kt=$e,$e=x);var Z=qp(R,$e),W=qp(R,kt);if(Z&&W&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==W.node||le.focusOffset!==W.offset)){var $=xe.createRange();$.setStart(Z.node,Z.offset),le.removeAllRanges(),$e>kt?(le.addRange($),le.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),le.addRange($))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}gc=!!nd,id=nd=null}finally{Dt=u,I.p=o,L.T=a}}t.current=n,xn=2}}function u0(){if(xn===2){xn=0;var t=Ka,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=I.p;I.p=2;var u=Dt;Dt|=4;try{zg(t,n.alternate,n)}finally{Dt=u,I.p=o,L.T=a}}xn=3}}function f0(){if(xn===4||xn===3){xn=0,Ht();var t=Ka,n=vs,a=pa,o=Qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,vs=Ka=null,d0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),Zs(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=I.p,I.p=2,L.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{L.T=n,I.p=u}}(pa&3)!==0&&ac(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?Uo++:(Uo=0,kf=t):Uo=0,No(0)}}function d0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function ac(){return c0(),u0(),f0(),h0()}function h0(){if(xn!==5)return!1;var t=Ka,n=Gf;Gf=0;var a=Zs(pa),o=L.T,u=I.p;try{I.p=32>a?32:a,L.T=null,a=Vf,Vf=null;var d=Ka,x=pa;if(xn=0,vs=Ka=null,pa=0,(Dt&6)!==0)throw Error(s(331));var R=Dt;if(Dt|=4,Yg(d.current),Xg(d,d.current,x,a),Dt=R,No(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{I.p=u,L.T=o,d0(t,n)}}function p0(t,n,a){n=fi(a,n),n=Sf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(tt(t,2),Ii(t))}function zt(t,n,a){if(t.tag===3)p0(t,t,a);else for(;n!==null;){if(n.tag===3){p0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=fi(a,t),a=mg(2),o=ka(n,a,2),o!==null&&(gg(a,o,n,t),tt(o,2),Ii(o));break}}n=n.return}}function jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Uy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=Fy.bind(null,t,n,a),n.then(t,t))}function Fy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(xt&a)===a&&(rn===4||rn===3&&(xt&62914560)===xt&&300>Ce()-Jl?(Dt&2)===0&&_s(t,0):If|=a,gs===xt&&(gs=0)),Ii(t)}function m0(t,n){n===0&&(n=be()),t=yr(t,n),t!==null&&(tt(t,n),Ii(t))}function By(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(t,a)}function zy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),m0(t,a)}function Iy(t,n){return q(t,n)}var rc=null,ys=null,qf=!1,sc=!1,Yf=!1,Ja=0;function Ii(t){t!==ys&&t.next===null&&(ys===null?rc=ys=t:ys=ys.next=t),sc=!0,qf||(qf=!0,Gy())}function No(t,n){if(!Yf&&sc){Yf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,x0(o,d))}else d=xt,d=me(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ie(o,d)||(a=!0,x0(o,d));o=o.next}while(a);Yf=!1}}function Hy(){g0()}function g0(){sc=qf=!1;var t=0;Ja!==0&&Qy()&&(t=Ja);for(var n=Ce(),a=null,o=rc;o!==null;){var u=o.next,d=v0(o,n);d===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(ys=a)):(a=o,(t!==0||(d&3)!==0)&&(sc=!0)),o=u}xn!==0&&xn!==5||No(t),Ja!==0&&(Ja=0)}function v0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Fe(d),R=1<<x,H=u[x];H===-1?((R&a)===0||(R&o)!==0)&&(u[x]=Le(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=jt,a=xt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&en(o),Zs(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=Ee;break;default:a=J}return o=_0.bind(null,t),a=q(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&en(o),t.callbackPriority=2,t.callbackNode=null,2}function _0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=xt;return o=me(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:($g(t,o,n),v0(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?_0.bind(null,t):null)}function x0(t,n){if(ac())return null;$g(t,n,!0)}function Gy(){$y(function(){(Dt&6)!==0?q(U,Hy):g0()})}function Zf(){if(Ja===0){var t=rs;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Ja=t}return Ja}function y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gr(""+t)}function S0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Vy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=y0((u[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?y0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new _l("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var H=x?S0(u,x):new FormData(u);mf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=x?S0(u,x):new FormData(u),mf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Kf=0;Kf<Uu.length;Kf++){var Qf=Uu[Kf],ky=Qf.toLowerCase(),Wy=Qf[0].toUpperCase()+Qf.slice(1);Ei(ky,"on"+Wy)}Ei(Jp,"onAnimationEnd"),Ei($p,"onAnimationIteration"),Ei(em,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(sy,"onTransitionRun"),Ei(oy,"onTransitionStart"),Ei(ly,"onTransitionCancel"),Ei(tm,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function M0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){Sl(he)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,ee=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){Sl(he)}u.currentTarget=null,d=H}}}}function vt(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(b0(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),b0(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[oc]){t[oc]=!0,pl.forEach(function(a){a!=="selectionchange"&&(Xy.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,Jf("selectionchange",!1,n))}}function b0(t,n,a,o){switch(J0(n)){case 2:var u=xS;break;case 8:u=yS;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Na(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Cp(function(){var ee=d,he=gu(a),xe=[];e:{var re=nm.get(t);if(re!==void 0){var le=_l,je=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":le=zx;break;case"focusin":je="focus",le=Mu;break;case"focusout":je="blur",le=Mu;break;case"beforeblur":case"afterblur":le=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Gx;break;case Jp:case $p:case em:le=wx;break;case tm:le=kx;break;case"scroll":case"scrollend":le=Ex;break;case"wheel":le=Xx;break;case"copy":case"cut":case"paste":le=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Lp;break;case"toggle":case"beforetoggle":le=qx}var $e=(n&4)!==0,kt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?re!==null?re+"Capture":null:re;$e=[];for(var W=ee,$;W!==null;){var ve=W;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||Z===null||(ve=eo(W,Z),ve!=null&&$e.push(Oo(W,ve,$))),kt)break;W=W.return}0<$e.length&&(re=new le(re,je,null,a,he),xe.push({event:re,listeners:$e}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==mu&&(je=a.relatedTarget||a.fromElement)&&(Na(je)||je[Ji]))break e;if((le||re)&&(re=he.window===he?he:(re=he.ownerDocument)?re.defaultView||re.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=ee,je=je?Na(je):null,je!==null&&(kt=c(je),$e=je.tag,je!==kt||$e!==5&&$e!==27&&$e!==6)&&(je=null)):(le=null,je=ee),le!==je)){if($e=Up,ve="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&($e=Lp,ve="onPointerLeave",Z="onPointerEnter",W="pointer"),kt=le==null?re:mr(le),$=je==null?re:mr(je),re=new $e(ve,W+"leave",le,a,he),re.target=kt,re.relatedTarget=$,ve=null,Na(he)===ee&&($e=new $e(Z,W+"enter",je,a,he),$e.target=$,$e.relatedTarget=kt,ve=$e),kt=ve,le&&je)t:{for($e=jy,Z=le,W=je,$=0,ve=Z;ve;ve=$e(ve))$++;ve=0;for(var Qe=W;Qe;Qe=$e(Qe))ve++;for(;0<$-ve;)Z=$e(Z),$--;for(;0<ve-$;)W=$e(W),ve--;for(;$--;){if(Z===W||W!==null&&Z===W.alternate){$e=Z;break t}Z=$e(Z),W=$e(W)}$e=null}else $e=null;le!==null&&E0(xe,re,le,$e,!1),je!==null&&kt!==null&&E0(xe,kt,je,$e,!0)}}e:{if(re=ee?mr(ee):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var At=Gp;else if(Ip(re))if(Vp)At=iy;else{At=ty;var Ye=ey}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Ut(ee.elementType)&&(At=Gp):At=ny;if(At&&(At=At(t,ee))){Hp(xe,At,a,he);break e}Ye&&Ye(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&mt(re,"number",re.value)}switch(Ye=ee?mr(ee):window,t){case"focusin":(Ip(Ye)||Ye.contentEditable==="true")&&(Qr=Ye,Cu=ee,lo=null);break;case"focusout":lo=Cu=Qr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Kp(xe,a,he);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Kp(xe,a,he)}var ut;if(Eu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Kr?Bp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Op&&a.locale!=="ko"&&(Kr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Kr&&(ut=wp()):(Fa=he,xu="value"in Fa?Fa.value:Fa.textContent,Kr=!0)),Ye=lc(ee,yt),0<Ye.length&&(yt=new Np(yt,t,null,a,he),xe.push({event:yt,listeners:Ye}),ut?yt.data=ut:(ut=zp(a),ut!==null&&(yt.data=ut)))),(ut=Zx?Kx(t,a):Qx(t,a))&&(yt=lc(ee,"onBeforeInput"),0<yt.length&&(Ye=new Np("onBeforeInput","beforeinput",null,a,he),xe.push({event:Ye,listeners:yt}),Ye.data=ut)),Vy(xe,t,ee,a,he)}M0(xe,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,d)),u=eo(t,n),u!=null&&o.push(Oo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function jy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var R=a,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,u?(ee=eo(a,d),ee!=null&&x.unshift(Oo(a,ee,H))):u||(ee=eo(a,d),ee!=null&&x.push(Oo(a,ee,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function A0(t,n){return n=T0(n),T0(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":bi(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Be(t,a,o))}}function td(t,n,a,o,u,d){switch(a){case"style":bi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,d,x,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=x=u=null,H=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":x=he;break;case"checked":H=he;break;case"defaultChecked":ee=he;break;case"value":d=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Vt(t,n,o,he,a,null)}}Ln(t,d,R,H,ee,x,u,!1);return;case"select":vt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=d,a=x,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Vt(t,n,x,R,a,null)}Mi(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,H,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)vt(Lo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ee,o,a,null)}return;default:if(Ut(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&td(t,n,he,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function Zy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,H=null,ee=null,he=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,xe)}}for(var re in o){var le=o[re];if(xe=a[re],o.hasOwnProperty(re)&&(le!=null||xe!=null))switch(re){case"type":d=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":he=le;break;case"value":x=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==xe&&Vt(t,n,re,le,o,xe)}}Ve(t,x,R,H,ee,he,d,u);return;case"select":le=x=R=re=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":re=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==H&&Vt(t,n,u,d,o,H)}n=R,a=x,o=le,re!=null?_n(t,!!a,re,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Vt(t,n,x,u,o,d)}Qn(t,re,le);return;case"option":for(var je in a)re=a[je],a.hasOwnProperty(je)&&re!=null&&!o.hasOwnProperty(je)&&(je==="selected"?t.selected=!1:Vt(t,n,je,null,o,re));for(H in o)re=o[H],le=a[H],o.hasOwnProperty(H)&&re!==le&&(re!=null||le!=null)&&(H==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Vt(t,n,H,re,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)re=a[$e],a.hasOwnProperty($e)&&re!=null&&!o.hasOwnProperty($e)&&Vt(t,n,$e,null,o,re);for(ee in o)if(re=o[ee],le=a[ee],o.hasOwnProperty(ee)&&re!==le&&(re!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Vt(t,n,ee,re,o,le)}return;default:if(Ut(n)){for(var kt in a)re=a[kt],a.hasOwnProperty(kt)&&re!==void 0&&!o.hasOwnProperty(kt)&&td(t,n,kt,void 0,o,re);for(he in o)re=o[he],le=a[he],!o.hasOwnProperty(he)||re===le||re===void 0&&le===void 0||td(t,n,he,re,o,le);return}}for(var Z in a)re=a[Z],a.hasOwnProperty(Z)&&re!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,re);for(xe in o)re=o[xe],le=a[xe],!o.hasOwnProperty(xe)||re===le||re==null&&le==null||Vt(t,n,xe,re,o,le)}function R0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ky(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&R0(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ee=H.startTime;if(ee>R)break;var he=H.transferSize,xe=H.initiatorType;he&&R0(xe)&&(H=H.responseEnd,x+=he*(H<R?1:(R-ee)/(H-ee)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function Qy(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(t){return U0.resolve(null).then(t).catch(eS)}:D0;function eS(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function N0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ua]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);Es(n)}function L0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function tS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function nS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function O0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function iS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function P0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function B0(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$s(t)}var vi=new Map,z0=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=I.d;I.d={f:aS,r:rS,D:sS,C:oS,L:lS,m:cS,X:fS,S:uS,M:dS};function aS(){var t=ma.f(),n=tc();return t||n}function rS(t){var n=La(t);n!==null&&n.tag===5&&n.type==="form"?tg(n):ma.r(t)}var Ss=typeof document>"u"?null:document;function I0(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),z0.has(u)||(z0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function sS(t){ma.D(t),I0("dns-prefetch",t,null)}function oS(t,n){ma.C(t,n),I0("preconnect",t,n)}function lS(t,n,a){ma.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var d=u;switch(n){case"style":d=Ms(t);break;case"script":d=bs(t)}vi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(d))||n==="script"&&o.querySelector(Bo(d))||(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function cS(t,n){ma.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=bs(t)}if(!vi.has(d)&&(t=v({rel:"modulepreload",href:t},n),vi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(d)))return}o=a.createElement("link"),Dn(o,"link",t),dn(o),a.head.appendChild(o)}}}function uS(t,n,a){ma.S(t,n,a);var o=Ss;if(o&&t){var u=Oa(o).hoistableStyles,d=Ms(t);n=n||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Fo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(d))&&ud(t,a);var H=x=o.createElement("link");dn(H),Dn(H,"link",t),H._p=new Promise(function(ee,he){H.onload=ee,H.onerror=he}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function fS(t,n){ma.X(t,n);var a=Ss;if(a&&t){var o=Oa(a).hoistableScripts,u=bs(t),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(t=v({src:t,async:!0},n),(n=vi.get(u))&&fd(t,n),d=a.createElement("script"),dn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dS(t,n){ma.M(t,n);var a=Ss;if(a&&t){var o=Oa(a).hoistableScripts,u=bs(t),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&fd(t,n),d=a.createElement("script"),dn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function H0(t,n,a,o){var u=(u=oe.current)?uc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var d=Oa(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Fo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),d||hS(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=bs(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ms(t){return'href="'+Pt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function G0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function hS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),dn(n),t.head.appendChild(n))}function bs(t){return'[src="'+Pt(t)+'"]'}function Bo(t){return"script[async]"+t}function V0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Dn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ms(a.href);var d=t.querySelector(Fo(u));if(d)return n.state.loading|=4,n.instance=d,dn(d),d;o=G0(a),(u=vi.get(u))&&ud(o,u),d=(t.ownerDocument||t).createElement("link"),dn(d);var x=d;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Dn(d,"link",o),n.state.loading|=4,fc(d,a.precedence,t),n.instance=d;case"script":return d=bs(a.src),(u=t.querySelector(Bo(d)))?(n.instance=u,dn(u),u):(o=a,(u=vi.get(d))&&(o=v({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function k0(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ua]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function W0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function pS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function X0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function mS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(o.href),d=n.querySelector(Fo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,dn(d);return}d=n.ownerDocument||n,o=G0(o),(u=vi.get(u))&&ud(o,u),d=d.createElement("link"),dn(d);var x=d;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function gS(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*Ky());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(vS,t),pc=null,hc.call(t))}function vS(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:N,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function _S(t,n,a,o,u,d,x,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function j0(t,n,a,o,u,d,x,R,H,ee,he,xe){return t=new _S(t,n,a,x,H,ee,he,xe,R),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=Wu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),t}function q0(t){return t?(t=es,t):es}function Y0(t,n,a,o,u,d){u=q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ka(t,o,n),a!==null&&(qn(a,t,n),go(a,t,n))}function Z0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){Z0(t,n),(t=t.alternate)&&Z0(t,n)}function K0(t){if(t.tag===13||t.tag===31){var n=yr(t,67108864);n!==null&&qn(n,t,67108864),hd(t,67108864)}}function Q0(t){if(t.tag===13||t.tag===31){var n=ri();n=pr(n);var a=yr(t,n);a!==null&&qn(a,t,n),hd(t,n)}}var gc=!0;function xS(t,n,a,o){var u=L.T;L.T=null;var d=I.p;try{I.p=2,pd(t,n,a,o)}finally{I.p=d,L.T=u}}function yS(t,n,a,o){var u=L.T;L.T=null;var d=I.p;try{I.p=8,pd(t,n,a,o)}finally{I.p=d,L.T=u}}function pd(t,n,a,o){if(gc){var u=md(o);if(u===null)ed(t,n,o,vc,a),$0(t,o);else if(MS(u,t,n,a,o))o.stopPropagation();else if($0(t,o),n&4&&-1<SS.indexOf(t)){for(;u!==null;){var d=La(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ae(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Fe(x);R.entanglements[1]|=H,x&=~H}Ii(d),(Dt&6)===0&&($l=Ce()+500,No(0))}}break;case 31:case 13:R=yr(d,2),R!==null&&qn(R,d,2),tc(),hd(d,2)}if(d=md(o),d===null&&ed(t,n,o,vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=gu(t),gd(t)}var vc=null;function gd(t){if(vc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function J0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case U:return 2;case b:return 8;case J:case _e:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var vd=!1,er=null,tr=null,nr=null,Io=new Map,Ho=new Map,ir=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(t,n){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&K0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function MS(t,n,a,o,u){switch(n){case"focusin":return er=Go(er,t,n,a,o,u),!0;case"dragenter":return tr=Go(tr,t,n,a,o,u),!0;case"mouseover":return nr=Go(nr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Io.set(d,Go(Io.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,t,n,a,o,u)),!0}return!1}function ev(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){Q0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Qs(t.priority,function(){Q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=La(a),n!==null&&K0(n),t.blockedOn=a,!1;n.shift()}return!0}function tv(t,n,a){_c(t)&&a.delete(n)}function bS(){vd=!1,er!==null&&_c(er)&&(er=null),tr!==null&&_c(tr)&&(tr=null),nr!==null&&_c(nr)&&(nr=null),Io.forEach(tv),Ho.forEach(tv)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bS)))}var yc=null;function nv(t){yc!==t&&(yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=La(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Es(t){function n(H){return xc(H,t)}er!==null&&xc(er,t),tr!==null&&xc(tr,t),nr!==null&&xc(nr,t),Io.forEach(n),Ho.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)ev(a),a.blockedOn===null&&ir.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[An]||null;if(typeof d=="function")x||nv(a);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[An]||null)R=x.formAction;else if(gd(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),nv(a)}}}function iv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}Sc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();Y0(a,o,t,n,null,null)},Sc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Y0(t.current,2,null,t,null,null),tc(),n[Ji]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,t),a===0&&ev(t)}};var av=e.version;if(av!=="19.2.3")throw Error(s(527,av,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{fe=Mc.inject(ES),de=Mc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=fg,d=dg,x=hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=j0(t,1,!1,null,null,a,o,null,u,d,x,iv),t[Ji]=n.current,$f(t),new _d(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=fg,x=dg,R=hg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=j0(t,1,!0,n,a??null,o,u,H,d,x,R,iv),n.context=q0(null),a=n.current,o=ri(),o=pr(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,tt(n,a),Ii(n),t[Ji]=n.current,$f(t),new Sc(n)},ko.version="19.2.3",ko}var pv;function OS(){if(pv)return Sd.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=LS(),Sd.exports}var PS=OS();var mv="popstate";function gv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function FS(r={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Xr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),lh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:el(c))}function s(l,c){Li(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return zS(e,i,s,r)}function nn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Li(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function vv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function lh(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Xr(e):e,state:i,key:e&&e.key||s||BS(),unstable_mask:l}}function el({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Xr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function zS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=_(),S=y==null?null:y-p;p=y,m&&m({action:h,location:C.location,delta:S})}function g(y,S){h="PUSH";let w=gv(y)?y:lh(C.location,y,S);i&&i(w,y),p=_()+1;let N=vv(w,p),O=C.createHref(w.unstable_mask||w);try{f.pushState(N,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(O)}c&&m&&m({action:h,location:C.location,delta:1})}function M(y,S){h="REPLACE";let w=gv(y)?y:lh(C.location,y,S);i&&i(w,y),p=_();let N=vv(w,p),O=C.createHref(w.unstable_mask||w);f.replaceState(N,"",O),c&&m&&m({action:h,location:C.location,delta:0})}function E(y){return IS(y)}let C={get action(){return h},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(mv,v),m=y,()=>{l.removeEventListener(mv,v),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:M,go(y){return f.go(y)}};return C}function IS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),nn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:el(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function b_(r,e,i="/"){return HS(r,e,i,!1)}function HS(r,e,i,s){let l=typeof e=="string"?Xr(e):e,c=Ta(l.pathname||"/",i);if(c==null)return null;let f=E_(r);GS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=JS(c);h=KS(f[m],p,s)}return h}function E_(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;nn(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let v=Ni([s,_.relativePath]),g=i.concat(_);f.children&&f.children.length>0&&(nn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),E_(f.children,e,g,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:YS(v,f.index),routesMeta:g})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of T_(f.path))c(f,h,!0,m)}),e}function T_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=T_(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function GS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:ZS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var VS=/^:[\w-]+$/,kS=3,WS=2,XS=1,jS=10,qS=-2,_v=r=>r==="*";function YS(r,e){let i=r.split("/"),s=i.length;return i.some(_v)&&(s+=qS),e&&(s+=WS),i.filter(l=>!_v(l)).reduce((l,c)=>l+(VS.test(c)?kS:c===""?XS:jS),s)}function ZS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function KS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",v=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),g=m.route;if(!v&&p&&i&&!s[s.length-1].route.index&&(v=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Ni([c,v.pathname]),pathnameBase:nM(Ni([c,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(c=Ni([c,v.pathnameBase]))}return f}function tu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=QS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:v},g)=>{if(_==="*"){let E=h[g]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[g];return v&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function QS(r,e=!1,i=!0){Li(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,_)=>{if(s.push({paramName:h,isOptional:m!=null}),m){let v=_.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function JS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ta(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var $S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function eM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Xr(r):r,c;return i?(i=R_(i),i.startsWith("/")?c=xv(i.substring(1),"/"):c=xv(i,e)):c=e,{pathname:c,search:iM(s),hash:aM(l)}}function xv(r,e){let i=nu(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Td(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function A_(r){let e=tM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function tp(r,e,i,s=!1){let l;typeof r=="string"?l=Xr(r):(l={...r},nn(!l.pathname||!l.pathname.includes("?"),Td("?","pathname","search",l)),nn(!l.pathname||!l.pathname.includes("#"),Td("#","pathname","hash",l)),nn(!l.search||!l.search.includes("#"),Td("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}h=v>=0?e[v]:"/"}let m=eM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var R_=r=>r.replace(/\/\/+/g,"/"),Ni=r=>R_(r.join("/")),nu=r=>r.replace(/\/+$/,""),nM=r=>nu(r).replace(/^\/*/,"/"),iM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,aM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,rM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function sM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function oM(r){let e=r.map(i=>i.route.path).filter(Boolean);return Ni(e)||"/"}var C_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function w_(r,e){let i=r;if(typeof i!="string"||!$S.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(C_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Ta(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Li(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var D_=["POST","PUT","PATCH","DELETE"];new Set(D_);var lM=["GET",...D_];new Set(lM);var js=ce.createContext(null);js.displayName="DataRouter";var cu=ce.createContext(null);cu.displayName="DataRouterState";var U_=ce.createContext(!1);function cM(){return ce.useContext(U_)}var N_=ce.createContext({isTransitioning:!1});N_.displayName="ViewTransition";var uM=ce.createContext(new Map);uM.displayName="Fetchers";var fM=ce.createContext(null);fM.displayName="Await";var Si=ce.createContext(null);Si.displayName="Navigation";var rl=ce.createContext(null);rl.displayName="Location";var Ca=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var np=ce.createContext(null);np.displayName="RouteError";var L_="REACT_ROUTER_ERROR",dM="REDIRECT",hM="ROUTE_ERROR_RESPONSE";function pM(r){if(r.startsWith(`${L_}:${dM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function mM(r){if(r.startsWith(`${L_}:${hM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new rM(e.status,e.statusText,e.data)}catch{}}function gM(r,{relative:e}={}){nn(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ce.useContext(Si),{hash:l,pathname:c,search:f}=ol(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ni([i,c])),s.createHref({pathname:h,search:f,hash:l})}function sl(){return ce.useContext(rl)!=null}function Qi(){return nn(sl(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(rl).location}var O_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P_(r){ce.useContext(Si).static||ce.useLayoutEffect(r)}function vM(){let{isDataRoute:r}=ce.useContext(Ca);return r?DM():_M()}function _M(){nn(sl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ce.useContext(js),{basename:e,navigator:i}=ce.useContext(Si),{matches:s}=ce.useContext(Ca),{pathname:l}=Qi(),c=JSON.stringify(A_(s)),f=ce.useRef(!1);return P_(()=>{f.current=!0}),ce.useCallback((m,p={})=>{if(Li(f.current,O_),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=tp(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ni([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,c,l,r])}ce.createContext(null);function ol(r,{relative:e}={}){let{matches:i}=ce.useContext(Ca),{pathname:s}=Qi(),l=JSON.stringify(A_(i));return ce.useMemo(()=>tp(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function xM(r,e){return F_(r,e)}function F_(r,e,i){nn(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=ce.useContext(Si),{matches:l}=ce.useContext(Ca),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let y=p&&p.path||"";z_(h,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let _=Qi(),v;if(e){let y=typeof e=="string"?Xr(e):e;nn(m==="/"||y.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=_;let g=v.pathname||"/",M=g;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=b_(r,{pathname:M});Li(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Li(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=EM(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Ni([m,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Ni([m,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return e&&C?ce.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},C):C}function yM(){let r=wM(),e=sM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:c},"ErrorBoundary")," or"," ",ce.createElement("code",{style:c},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),i?ce.createElement("pre",{style:l},i):null,f)}var SM=ce.createElement(yM,null),B_=class extends ce.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=mM(r.digest);i&&(r=i)}let e=r!==void 0?ce.createElement(Ca.Provider,{value:this.props.routeContext},ce.createElement(np.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ce.createElement(MM,{error:r},e):e}};B_.contextType=U_;var Ad=new WeakMap;function MM({children:r,error:e}){let{basename:i}=ce.useContext(Si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=pM(e.digest);if(s){let l=Ad.get(e);if(l)throw l;let c=w_(s.location,i);if(C_&&!Ad.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Ad.set(e,f),f}return ce.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function bM({routeContext:r,match:e,children:i}){let s=ce.useContext(js);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ce.createElement(Ca.Provider,{value:r},i)}function EM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let _=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);nn(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,h=-1;if(i&&s){f=s.renderFallback;for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=_),v.route.id){let{loaderData:g,errors:M}=s,E=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=s&&m?(_,v)=>{m(_,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:oM(s.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,g)=>{let M,E=!1,C=null,y=null;s&&(M=c&&v.route.id?c[v.route.id]:void 0,C=v.route.errorElement||SM,f&&(h<0&&g===0?(z_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):h===g&&(E=!0,y=v.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,g+1)),w=()=>{let N;return M?N=C:E?N=y:v.route.Component?N=ce.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=_,ce.createElement(bM,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:s!=null},children:N})};return s&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?ce.createElement(B_,{location:s.location,revalidation:s.revalidation,component:C,error:M,children:w(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):w()},null)}function ip(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TM(r){let e=ce.useContext(js);return nn(e,ip(r)),e}function AM(r){let e=ce.useContext(cu);return nn(e,ip(r)),e}function RM(r){let e=ce.useContext(Ca);return nn(e,ip(r)),e}function ap(r){let e=RM(r),i=e.matches[e.matches.length-1];return nn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function CM(){return ap("useRouteId")}function wM(){let r=ce.useContext(np),e=AM("useRouteError"),i=ap("useRouteError");return r!==void 0?r:e.errors?.[i]}function DM(){let{router:r}=TM("useNavigate"),e=ap("useNavigate"),i=ce.useRef(!1);return P_(()=>{i.current=!0}),ce.useCallback(async(l,c={})=>{Li(i.current,O_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var yv={};function z_(r,e,i){!e&&!yv[r]&&(yv[r]=!0,Li(!1,i))}ce.memo(UM);function UM({routes:r,future:e,state:i,isStatic:s,onError:l}){return F_(r,void 0,{state:i,isStatic:s,onError:l})}function Is(r){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){nn(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=ce.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Xr(i));let{pathname:p="/",search:_="",hash:v="",state:g=null,key:M="default",unstable_mask:E}=i,C=ce.useMemo(()=>{let y=Ta(p,h);return y==null?null:{location:{pathname:y,search:_,hash:v,state:g,key:M,unstable_mask:E},navigationType:s}},[h,p,_,v,g,M,s,E]);return Li(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:ce.createElement(Si.Provider,{value:m},ce.createElement(rl.Provider,{children:e,value:C}))}function LM({children:r,location:e}){return xM(ch(r),e)}function ch(r,e=[]){let i=[];return ce.Children.forEach(r,(s,l)=>{if(!ce.isValidElement(s))return;let c=[...e,l];if(s.type===ce.Fragment){i.push.apply(i,ch(s.props.children,c));return}nn(s.type===Is,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=ch(s.props.children,c)),i.push(f)}),i}var qc="get",Yc="application/x-www-form-urlencoded";function uu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function OM(r){return uu(r)&&r.tagName.toLowerCase()==="button"}function PM(r){return uu(r)&&r.tagName.toLowerCase()==="form"}function FM(r){return uu(r)&&r.tagName.toLowerCase()==="input"}function BM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function zM(r,e){return r.button===0&&(!e||e==="_self")&&!BM(r)}var bc=null;function IM(){if(bc===null)try{new FormData(document.createElement("form"),0),bc=!1}catch{bc=!0}return bc}var HM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(r){return r!=null&&!HM.has(r)?(Li(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):r}function GM(r,e){let i,s,l,c,f;if(PM(r)){let h=r.getAttribute("action");s=h?Ta(h,e):null,i=r.getAttribute("method")||qc,l=Rd(r.getAttribute("enctype"))||Yc,c=new FormData(r)}else if(OM(r)||FM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?Ta(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||qc,l=Rd(r.getAttribute("formenctype"))||Rd(h.getAttribute("enctype"))||Yc,c=new FormData(h,r),!IM()){let{name:p,type:_,value:v}=r;if(_==="image"){let g=p?`${p}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else p&&c.append(p,v)}}else{if(uu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=qc,s=null,l=Yc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function I_(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ta(l.pathname,e)==="/"?l.pathname=`${nu(e)}/_root.${s}`:l.pathname=`${nu(l.pathname)}.${s}`,l}async function VM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function WM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await VM(c,i);return f.links?f.links():[]}return[]}));return YM(s.flat(1).filter(kM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Sv(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function XM(r,e,{includeHydrateFallback:i}={}){return jM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function jM(r){return[...new Set(r)]}function qM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function YM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(qM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function sp(){let r=ce.useContext(js);return rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ZM(){let r=ce.useContext(cu);return rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var op=ce.createContext(void 0);op.displayName="FrameworkContext";function lp(){let r=ce.useContext(op);return rp(r,"You must render this element inside a <HydratedRouter> element"),r}function KM(r,e){let i=ce.useContext(op),[s,l]=ce.useState(!1),[c,f]=ce.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=e,g=ce.useRef(null);ce.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=S=>{S.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[r]),ce.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,g,{}]:[c,g,{onFocus:Wo(h,M),onBlur:Wo(m,E),onMouseEnter:Wo(p,M),onMouseLeave:Wo(_,E),onTouchStart:Wo(v,M)}]:[!1,g,{}]}function Wo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function QM({page:r,...e}){let i=cM(),{router:s}=sp(),l=ce.useMemo(()=>b_(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?i?ce.createElement($M,{page:r,matches:l,...e}):ce.createElement(eb,{page:r,matches:l,...e}):null}function JM(r){let{manifest:e,routeModules:i}=lp(),[s,l]=ce.useState([]);return ce.useEffect(()=>{let c=!1;return WM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function $M({page:r,matches:e,...i}){let s=Qi(),{future:l}=lp(),{basename:c}=sp(),f=ce.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let h=I_(r,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let _ of e)typeof _.route.shouldRevalidate=="function"?m=!0:p.push(_.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[c,l.unstable_trailingSlashAwareDataRequests,r,s,e]);return ce.createElement(ce.Fragment,null,f.map(h=>ce.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function eb({page:r,matches:e,...i}){let s=Qi(),{future:l,manifest:c,routeModules:f}=lp(),{basename:h}=sp(),{loaderData:m,matches:p}=ZM(),_=ce.useMemo(()=>Sv(r,e,p,c,s,"data"),[r,e,p,c,s]),v=ce.useMemo(()=>Sv(r,e,p,c,s,"assets"),[r,e,p,c,s]),g=ce.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,y=!1;if(e.forEach(w=>{let N=c.routes[w.route.id];!N||!N.hasLoader||(!_.some(O=>O.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||N.hasClientLoader?y=!0:C.add(w.route.id))}),C.size===0)return[];let S=I_(r,h,l.unstable_trailingSlashAwareDataRequests,"data");return y&&C.size>0&&S.searchParams.set("_routes",e.filter(w=>C.has(w.route.id)).map(w=>w.route.id).join(",")),[S.pathname+S.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,s,c,_,e,r,f]),M=ce.useMemo(()=>XM(v,c),[v,c]),E=JM(v);return ce.createElement(ce.Fragment,null,g.map(C=>ce.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>ce.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),E.map(({key:C,link:y})=>ce.createElement("link",{key:C,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function tb(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nb&&(window.__reactRouterVersion="7.14.2")}catch{}function ib({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=ce.useRef();l.current==null&&(l.current=FS({window:s,v5Compat:!0}));let c=l.current,[f,h]=ce.useState({action:c.action,location:c.location}),m=ce.useCallback(p=>{i===!1?h(p):ce.startTransition(()=>h(p))},[i]);return ce.useLayoutEffect(()=>c.listen(m),[c,m]),ce.createElement(NM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var H_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,En=ce.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,unstable_mask:h,state:m,target:p,to:_,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:M,...E},C){let{basename:y,navigator:S,unstable_useTransitions:w}=ce.useContext(Si),N=typeof _=="string"&&H_.test(_),O=w_(_,y);_=O.to;let V=gM(_,{relative:l}),F=Qi(),z=null;if(h){let X=tp(h,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);y!=="/"&&(X.pathname=X.pathname==="/"?y:Ni([y,X.pathname])),z=S.createHref(X)}let[T,B,j]=KM(s,E),G=ob(_,{replace:f,unstable_mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:w});function K(X){e&&e(X),X.defaultPrevented||G(X)}let ue=!(O.isExternal||c),pe=ce.createElement("a",{...E,...j,href:(ue?z:void 0)||O.absoluteURL||V,onClick:ue?K:e,ref:tb(C,B),target:p,"data-discover":!N&&i==="render"?"true":void 0});return T&&!N?ce.createElement(ce.Fragment,null,pe,ce.createElement(QM,{page:V})):pe});En.displayName="Link";var ab=ce.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},_){let v=ol(f,{relative:p.relative}),g=Qi(),M=ce.useContext(cu),{navigator:E,basename:C}=ce.useContext(Si),y=M!=null&&db(v)&&h===!0,S=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,w=g.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),N=N?N.toLowerCase():null,S=S.toLowerCase()),N&&C&&(N=Ta(N,C)||N);const O=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let V=w===S||!l&&w.startsWith(S)&&w.charAt(O)==="/",F=N!=null&&(N===S||!l&&N.startsWith(S)&&N.charAt(S.length)==="/"),z={isActive:V,isPending:F,isTransitioning:y},T=V?e:void 0,B;typeof s=="function"?B=s(z):B=[s,V?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let j=typeof c=="function"?c(z):c;return ce.createElement(En,{...p,"aria-current":T,className:B,ref:_,style:j,to:f,viewTransition:h},typeof m=="function"?m(z):m)});ab.displayName="NavLink";var rb=ce.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=qc,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...M},E)=>{let{unstable_useTransitions:C}=ce.useContext(Si),y=ub(),S=fb(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&H_.test(h),O=V=>{if(m&&m(V),V.defaultPrevented)return;V.preventDefault();let F=V.nativeEvent.submitter,z=F?.getAttribute("formmethod")||f,T=()=>y(F||V.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g});C&&i!==!1?ce.startTransition(()=>T()):T()};return ce.createElement("form",{ref:E,method:w,action:S,onSubmit:s?m:O,...M,"data-discover":!N&&r==="render"?"true":void 0})});rb.displayName="Form";function sb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G_(r){let e=ce.useContext(js);return nn(e,sb(r)),e}function ob(r,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let _=vM(),v=Qi(),g=ol(r,{relative:f});return ce.useCallback(M=>{if(zM(M,e)){M.preventDefault();let E=i!==void 0?i:el(v)===el(g),C=()=>_(r,{replace:E,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:m});p?ce.startTransition(()=>C()):C()}},[v,_,g,i,s,l,e,r,c,f,h,m,p])}var lb=0,cb=()=>`__${String(++lb)}__`;function ub(){let{router:r}=G_("useSubmit"),{basename:e}=ce.useContext(Si),i=CM(),s=r.fetch,l=r.navigate;return ce.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:_,body:v}=GM(c,e);if(f.navigate===!1){let g=f.fetcherKey||cb();await s(g,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function fb(r,{relative:e}={}){let{basename:i}=ce.useContext(Si),s=ce.useContext(Ca);nn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...ol(r||".",{relative:e})},f=Qi();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ni([i,c.pathname])),el(c)}function db(r,{relative:e}={}){let i=ce.useContext(N_);nn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=G_("useViewTransitionState"),l=ol(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ta(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ta(i.nextLocation.pathname,s)||i.nextLocation.pathname;return tu(l.pathname,f)!=null||tu(l.pathname,c)!=null}function hb(){const[r,e]=ce.useState(!1),[i,s]=ce.useState(!1),l=Qi();ce.useEffect(()=>{const f=()=>e(window.scrollY>80);return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),ce.useEffect(()=>{s(!1)},[l]);const c=[{label:"Services",href:"/services"},{label:"Our Work",href:"/#work"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];return D.jsxs("nav",{"code-path":"src\\sections\\Navigation.tsx:27:5",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,backgroundColor:r?"rgba(10, 10, 10, 0.92)":"transparent",backdropFilter:r?"blur(12px)":"none",borderBottom:r?"1px solid rgba(245, 245, 245, 0.08)":"1px solid transparent",transition:"background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease"},children:[D.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:40:7",className:"container-max",style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"72px"},children:[D.jsx(En,{"code-path":"src\\sections\\Navigation.tsx:41:9",to:"/",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"clamp(1.1rem, 2vw, 1.4rem)",color:"var(--sand)",letterSpacing:"0.06em",textDecoration:"none"},children:"PRICOR"}),D.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:46:9",style:{display:"flex",alignItems:"center",gap:"2rem"},className:"desktop-nav",children:[c.map(f=>D.jsx(En,{"code-path":"src\\sections\\Navigation.tsx:48:13",to:f.href,style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.85rem, 1vw, 1rem)",fontWeight:400,color:l.pathname===f.href?"var(--sand)":"var(--white)",textDecoration:"none",transition:"color 0.3s ease"},onMouseEnter:h=>h.currentTarget.style.color="var(--sand)",onMouseLeave:h=>h.currentTarget.style.color=l.pathname===f.href?"var(--sand)":"var(--white)",children:f.label},f.href)),D.jsx(En,{"code-path":"src\\sections\\Navigation.tsx:65:11",to:"/contact",style:{border:"1px solid var(--sand)",color:"var(--sand)",padding:"0.5rem 1.25rem",fontFamily:"var(--font-body)",fontSize:"0.85rem",fontWeight:500,textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="var(--sand)",f.currentTarget.style.color="var(--black)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent",f.currentTarget.style.color="var(--sand)"},children:"Get a Quote"})]}),D.jsxs("button",{"code-path":"src\\sections\\Navigation.tsx:91:9",className:"mobile-menu-btn",onClick:()=>s(!i),style:{display:"none",background:"none",border:"none",cursor:"pointer",padding:"0.5rem"},"aria-label":"Toggle menu",children:[D.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:97:11",style:{width:"24px",height:"2px",backgroundColor:"var(--white)",marginBottom:"6px",transition:"all 0.3s",transform:i?"rotate(45deg) translate(3px, 3px)":"none"}}),D.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:98:11",style:{width:"24px",height:"2px",backgroundColor:"var(--white)",marginBottom:"6px",opacity:i?0:1,transition:"all 0.3s"}}),D.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:99:11",style:{width:"24px",height:"2px",backgroundColor:"var(--white)",transition:"all 0.3s",transform:i?"rotate(-45deg) translate(3px, -3px)":"none"}})]})]}),i&&D.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:105:9",className:"mobile-menu",style:{display:"none",position:"absolute",top:"72px",left:0,right:0,backgroundColor:"rgba(10, 10, 10, 0.97)",backdropFilter:"blur(12px)",padding:"2rem",flexDirection:"column",gap:"1.5rem",borderBottom:"1px solid rgba(245, 245, 245, 0.08)"},children:[c.map(f=>D.jsx(En,{"code-path":"src\\sections\\Navigation.tsx:122:13",to:f.href,style:{fontFamily:"var(--font-body)",fontSize:"1.1rem",color:"var(--white)",textDecoration:"none",textAlign:"center"},children:f.label},f.href)),D.jsx(En,{"code-path":"src\\sections\\Navigation.tsx:136:11",to:"/contact",style:{border:"1px solid var(--sand)",color:"var(--sand)",padding:"0.75rem 1.5rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",textAlign:"center",marginTop:"0.5rem"},children:"Get a Quote"})]})]})}function pb(){const r=[{label:"Kitchens",href:"/services/kitchen-remodeling"},{label:"Bathrooms",href:"/services/bathroom-remodeling"},{label:"Basements",href:"/services/basement-remodeling"},{label:"Additions",href:"/services/room-additions"},{label:"Renovations",href:"/services/home-renovations"},{label:"New Construction",href:"/services/new-construction"}],e=[{label:"About Terry",href:"/about"},{label:"Our Process",href:"/#process"},{label:"Service Areas",href:"/#areas"},{label:"Contact",href:"/contact"}];return D.jsx("footer",{"code-path":"src\\sections\\Footer.tsx:21:5",style:{backgroundColor:"var(--black)",paddingTop:"var(--space-lg)",paddingBottom:"var(--space-md)",borderTop:"1px solid var(--border-dark)"},children:D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:22:7",className:"container-max",children:[D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:23:9",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--space-md)",paddingBottom:"var(--space-lg)",borderBottom:"1px solid var(--border-dark)"},className:"footer-grid",children:[D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:25:11",children:[D.jsx("div",{"code-path":"src\\sections\\Footer.tsx:26:13",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"clamp(1.1rem, 2vw, 1.4rem)",color:"var(--sand)",letterSpacing:"0.06em",marginBottom:"0.75rem"},children:"PRICOR"}),D.jsx("p",{"code-path":"src\\sections\\Footer.tsx:29:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.4)",lineHeight:1.4},children:"Design-build remodeling since 1985"})]}),D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:35:11",children:[D.jsx("div",{"code-path":"src\\sections\\Footer.tsx:36:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.4)",marginBottom:"1rem"},children:"SERVICES"}),r.map(i=>D.jsx(En,{"code-path":"src\\sections\\Footer.tsx:40:15",to:i.href,style:{display:"block",fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",textDecoration:"none",marginBottom:"0.6rem",transition:"color 0.3s ease"},onMouseEnter:s=>s.currentTarget.style.color="var(--sand)",onMouseLeave:s=>s.currentTarget.style.color="rgba(245, 245, 245, 0.6)",children:i.label},i.href))]}),D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:61:11",children:[D.jsx("div",{"code-path":"src\\sections\\Footer.tsx:62:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.4)",marginBottom:"1rem"},children:"COMPANY"}),e.map(i=>D.jsx(En,{"code-path":"src\\sections\\Footer.tsx:66:15",to:i.href,style:{display:"block",fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",textDecoration:"none",marginBottom:"0.6rem",transition:"color 0.3s ease"},onMouseEnter:s=>s.currentTarget.style.color="var(--sand)",onMouseLeave:s=>s.currentTarget.style.color="rgba(245, 245, 245, 0.6)",children:i.label},i.href))]}),D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:87:11",children:[D.jsx("div",{"code-path":"src\\sections\\Footer.tsx:88:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.4)",marginBottom:"1rem"},children:"CONTACT"}),D.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:91:13",style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",lineHeight:1.6,marginBottom:"0.5rem"},children:["1016 Airpark Drive, Unit C",D.jsx("br",{"code-path":"src\\sections\\Footer.tsx:92:41"}),"Sugar Grove, IL 60554"]}),D.jsx("p",{"code-path":"src\\sections\\Footer.tsx:95:13",style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",marginBottom:"0.25rem"},children:"630-913-1201"}),D.jsx("p",{"code-path":"src\\sections\\Footer.tsx:98:13",style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)"},children:"TFaltz@PricorHome.com"})]})]}),D.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:105:9",style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"var(--space-md)",flexWrap:"wrap",gap:"1rem"},children:[D.jsx("p",{"code-path":"src\\sections\\Footer.tsx:106:11",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.3)"},children:"© 2025 PRICOR HOME. All rights reserved."}),D.jsx("p",{"code-path":"src\\sections\\Footer.tsx:109:11",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.3)"},children:"Licensed · Bonded · Insured"})]})]})})}function ll(r=.15){ce.useEffect(()=>{const e=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&(l.target.classList.add("visible"),e.unobserve(l.target))})},{threshold:r,rootMargin:"0px 0px -60px 0px"});return document.querySelectorAll(".fade-in-up").forEach(s=>e.observe(s)),()=>e.disconnect()},[r])}const cp="184",mb=0,Mv=1,gb=2,Zc=1,vb=2,Jo=3,hr=0,Zn=1,ki=2,Ma=0,Hs=1,bv=2,Ev=3,Tv=4,_b=5,zr=100,xb=101,yb=102,Sb=103,Mb=104,bb=200,Eb=201,Tb=202,Ab=203,uh=204,fh=205,Rb=206,Cb=207,wb=208,Db=209,Ub=210,Nb=211,Lb=212,Ob=213,Pb=214,dh=0,hh=1,ph=2,Vs=3,mh=4,gh=5,vh=6,_h=7,V_=0,Fb=1,Bb=2,ji=0,k_=1,W_=2,X_=3,j_=4,q_=5,Y_=6,Z_=7,K_=300,Vr=301,ks=302,Cd=303,wd=304,fu=306,tl=1e3,Sa=1001,xh=1002,Un=1003,zb=1004,Ec=1005,Bn=1006,Dd=1007,Hr=1008,li=1009,Q_=1010,J_=1011,nl=1012,up=1013,Zi=1014,Wi=1015,Aa=1016,fp=1017,dp=1018,il=1020,$_=35902,ex=35899,tx=1021,nx=1022,Ui=1023,Ra=1026,Gr=1027,ix=1028,hp=1029,kr=1030,pp=1031,mp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,yh=35840,Sh=35841,Mh=35842,bh=35843,Eh=36196,Th=37492,Ah=37496,Rh=37488,Ch=37489,iu=37490,wh=37491,Dh=37808,Uh=37809,Nh=37810,Lh=37811,Oh=37812,Ph=37813,Fh=37814,Bh=37815,zh=37816,Ih=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Wh=36492,Xh=36494,jh=36495,qh=36283,Yh=36284,au=36285,Zh=36286,Ib=3200,Av=0,Hb=1,fr="",xi="srgb",ru="srgb-linear",su="linear",It="srgb",Ts=7680,Rv=519,Gb=512,Vb=513,kb=514,gp=515,Wb=516,Xb=517,vp=518,jb=519,Cv=35044,wv="300 es",Xi=2e3,al=2001;function qb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yb(){const r=ou("canvas");return r.style.display="block",r}const Dv={};function Uv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ax(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=ax(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Et(...r){r=ax(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Kh(...r){const e=r.join(" ");e in Dv||(Dv[e]=!0,nt(...r))}function Zb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Kb={[dh]:hh,[ph]:vh,[mh]:_h,[Vs]:gh,[hh]:dh,[vh]:ph,[_h]:mh,[gh]:Vs};class jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,Qh=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function Qb(r,e){return(r%e+e)%e}function Nd(r,e,i){return(1-i)*r+i*e}function Xo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mp=class Mp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mp.prototype.isVector2=!0;let Nt=Mp;class qs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(v!==C||m!==g||p!==M||_!==E){let y=m*g+p*M+_*E+v*C;y<0&&(g=-g,M=-M,E=-E,C=-C,y=-y);let S=1-h;if(y<.9995){const w=Math.acos(y),N=Math.sin(w);S=Math.sin(S*w)/N,h=Math.sin(h*w)/N,m=m*S+g*h,p=p*S+M*h,_=_*S+E*h,v=v*S+C*h}else{m=m*S+g*h,p=p*S+M*h,_=_*S+E*h,v=v*S+C*h;const w=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=w,p*=w,_*=w,v*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+_*v+m*M-p*g,e[i+1]=m*E+_*g+p*v-h*M,e[i+2]=p*E+_*M+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),g=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*M*E,this._y=p*M*v-g*_*E,this._z=p*_*E+g*M*v,this._w=p*_*v-g*M*E;break;case"YXZ":this._x=g*_*v+p*M*E,this._y=p*M*v-g*_*E,this._z=p*_*E-g*M*v,this._w=p*_*v+g*M*E;break;case"ZXY":this._x=g*_*v-p*M*E,this._y=p*M*v+g*_*E,this._z=p*_*E+g*M*v,this._w=p*_*v-g*M*E;break;case"ZYX":this._x=g*_*v-p*M*E,this._y=p*M*v+g*_*E,this._z=p*_*E-g*M*v,this._w=p*_*v+g*M*E;break;case"YZX":this._x=g*_*v+p*M*E,this._y=p*M*v+g*_*E,this._z=p*_*E-g*M*v,this._w=p*_*v-g*M*E;break;case"XZY":this._x=g*_*v-p*M*E,this._y=p*M*v-g*_*E,this._z=p*_*E+g*M*v,this._w=p*_*v+g*M*E;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Nv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Nv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),_=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let ie=bp;const Ld=new ie,Nv=new qs,Ep=class Ep{constructor(e,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],M=s[5],E=s[8],C=l[0],y=l[3],S=l[6],w=l[1],N=l[4],O=l[7],V=l[2],F=l[5],z=l[8];return c[0]=f*C+h*w+m*V,c[3]=f*y+h*N+m*F,c[6]=f*S+h*O+m*z,c[1]=p*C+_*w+v*V,c[4]=p*y+_*N+v*F,c[7]=p*S+_*O+v*z,c[2]=g*C+M*w+E*V,c[5]=g*y+M*N+E*F,c[8]=g*S+M*O+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,M=p*c-f*m,E=i*v+s*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(h*s-l*f)*C,e[3]=g*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Od.makeScale(e,i)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ep.prototype.isMatrix3=!0;let st=Ep;const Od=new st,Lv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const r={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===It&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ru]:{primaries:e,whitePoint:s,transfer:su,toXYZ:Lv,fromXYZ:Ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:It,toXYZ:Lv,fromXYZ:Ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Mt=Jb();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class $b{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{As===void 0&&(As=ou("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=As}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eE=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Pd(l[f].image)):c.push(Pd(l[f]))}else c=Pd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$b.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let tE=0;const Fd=new ie;class zn extends jr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Sa,l=Sa,c=Bn,f=Hr,h=Ui,m=li,p=zn.DEFAULT_ANISOTROPY,_=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=cl(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=K_;zn.DEFAULT_ANISOTROPY=1;const Tp=class Tp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],M=m[5],E=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,V=(S+1)/2,F=(_+g)/4,z=(v+C)/4,T=(E+y)/4;return N>O&&N>V?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=F/s,c=z/s):O>V?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=F/l,c=T/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=z/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-E)*(y-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(v-C)/w,this.z=(g-_)/w,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tp.prototype.isVector4=!0;let sn=Tp;class nE extends jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new zn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends nE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class rx extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iE extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,i,s,l,c,f,h,m,p,_,v,g,M,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,_,v,g,M,E,C,y)}set(e,i,s,l,c,f,h,m,p,_,v,g,M,E,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=E,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,M=f*v,E=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,E=p*_,C=p*v;i[0]=g+C*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=M*h-E,i[6]=C+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,E=p*_,C=p*v;i[0]=g-C*h,i[4]=-f*v,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*_,i[9]=C-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*v,E=h*_,C=h*v;i[0]=m*_,i[4]=E*p-M,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,E=h*m,C=h*p;i[0]=m*_,i[4]=C-g*v,i[8]=E*v+M,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*v+E,i[10]=g-C*v}else if(e.order==="XZY"){const g=f*m,M=f*p,E=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=f*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=h*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aE,e,rE)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),rr.crossVectors(s,si),rr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rr.crossVectors(s,si)),rr.normalize(),Tc.crossVectors(si,rr),l[0]=rr.x,l[4]=Tc.x,l[8]=si.x,l[1]=rr.y,l[5]=Tc.y,l[9]=si.y,l[2]=rr.z,l[6]=Tc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],M=s[13],E=s[2],C=s[6],y=s[10],S=s[14],w=s[3],N=s[7],O=s[11],V=s[15],F=l[0],z=l[4],T=l[8],B=l[12],j=l[1],G=l[5],K=l[9],ue=l[13],pe=l[2],X=l[6],L=l[10],I=l[14],se=l[3],ge=l[7],Se=l[11],P=l[15];return c[0]=f*F+h*j+m*pe+p*se,c[4]=f*z+h*G+m*X+p*ge,c[8]=f*T+h*K+m*L+p*Se,c[12]=f*B+h*ue+m*I+p*P,c[1]=_*F+v*j+g*pe+M*se,c[5]=_*z+v*G+g*X+M*ge,c[9]=_*T+v*K+g*L+M*Se,c[13]=_*B+v*ue+g*I+M*P,c[2]=E*F+C*j+y*pe+S*se,c[6]=E*z+C*G+y*X+S*ge,c[10]=E*T+C*K+y*L+S*Se,c[14]=E*B+C*ue+y*I+S*P,c[3]=w*F+N*j+O*pe+V*se,c[7]=w*z+N*G+O*X+V*ge,c[11]=w*T+N*K+O*L+V*Se,c[15]=w*B+N*ue+O*I+V*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],M=e[14],E=e[3],C=e[7],y=e[11],S=e[15],w=m*M-p*g,N=h*M-p*v,O=h*g-m*v,V=f*M-p*_,F=f*g-m*_,z=f*v-h*_;return i*(C*w-y*N+S*O)-s*(E*w-y*V+S*F)+l*(E*N-C*V+S*z)-c*(E*O-C*F+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],M=e[11],E=e[12],C=e[13],y=e[14],S=e[15],w=i*h-s*f,N=i*m-l*f,O=i*p-c*f,V=s*m-l*h,F=s*p-c*h,z=l*p-c*m,T=_*C-v*E,B=_*y-g*E,j=_*S-M*E,G=v*y-g*C,K=v*S-M*C,ue=g*S-M*y,pe=w*ue-N*K+O*G+V*j-F*B+z*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/pe;return e[0]=(h*ue-m*K+p*G)*X,e[1]=(l*K-s*ue-c*G)*X,e[2]=(C*z-y*F+S*V)*X,e[3]=(g*F-v*z-M*V)*X,e[4]=(m*j-f*ue-p*B)*X,e[5]=(i*ue-l*j+c*B)*X,e[6]=(y*O-E*z-S*N)*X,e[7]=(_*z-g*O+M*N)*X,e[8]=(f*K-h*j+p*T)*X,e[9]=(s*j-i*K-c*T)*X,e[10]=(E*F-C*O+S*w)*X,e[11]=(v*O-_*F-M*w)*X,e[12]=(h*B-f*G-m*T)*X,e[13]=(i*G-s*B+l*T)*X,e[14]=(C*N-E*V-y*w)*X,e[15]=(_*V-v*N+g*w)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,M=c*_,E=c*v,C=f*_,y=f*v,S=h*v,w=m*p,N=m*_,O=m*v,V=s.x,F=s.y,z=s.z;return l[0]=(1-(C+S))*V,l[1]=(M+O)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(M-O)*F,l[5]=(1-(g+S))*F,l[6]=(y+w)*F,l[7]=0,l[8]=(E+N)*z,l[9]=(y-w)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Rs.set(l[0],l[1],l[2]).length();const h=Rs.set(l[4],l[5],l[6]).length(),m=Rs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ri.copy(this);const p=1/f,_=1/h,v=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(h===Xi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===al)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(h===Xi)E=-2/(f-c),C=-(f+c)/(f-c);else if(h===al)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};lu.prototype.isMatrix4=!0;let fn=lu;const Rs=new ie,Ri=new fn,aE=new ie(0,0,0),rE=new ie(1,1,1),rr=new ie,Tc=new ie,si=new ie,Pv=new fn,Fv=new qs;class Wr{constructor(e=0,i=0,s=0,l=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sE=0;const Bv=new ie,Cs=new qs,ga=new fn,Ac=new ie,jo=new ie,oE=new ie,lE=new qs,zv=new ie(1,0,0),Iv=new ie(0,1,0),Hv=new ie(0,0,1),Gv={type:"added"},cE={type:"removed"},ws={type:"childadded",child:null},Bd={type:"childremoved",child:null};class In extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new ie,i=new Wr,s=new qs,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new st}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(zv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Hv,e)}translateOnAxis(e,i){return Bv.copy(e).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(zv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Ac,this.up):ga.lookAt(Ac,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(ga),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gv),ws.child=e,this.dispatchEvent(ws),ws.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cE),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gv),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,oE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,lE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new ie(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(p,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Id(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ct{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Mt.workingColorSpace){if(e=Qb(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Id(f,c,e+1/3),this.g=Id(f,c,e),this.b=Id(f,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=ox[e.toLowerCase()];return s!==void 0?this.setHex(s,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Mt.workingToColorSpace(Fn.copy(this),e),Math.round(bt(Fn.r*255,0,255))*65536+Math.round(bt(Fn.g*255,0,255))*256+Math.round(bt(Fn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=xi){Mt.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Cc);const s=Nd(sr.h,Cc.h,i),l=Nd(sr.s,Cc.s,i),c=Nd(sr.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ct;Ct.NAMES=ox;class fE extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new ie,va=new ie,Hd=new ie,_a=new ie,Ds=new ie,Us=new ie,Vv=new ie,Gd=new ie,Vd=new ie,kd=new ie,Wd=new sn,Xd=new sn,jd=new sn;class Di{constructor(e=new ie,i=new ie,s=new ie){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),va.subVectors(s,i),Hd.subVectors(e,i);const f=Ci.dot(Ci),h=Ci.dot(va),m=Ci.dot(Hd),p=va.dot(va),_=va.dot(Hd),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Wd.setScalar(0),Xd.setScalar(0),jd.setScalar(0),Wd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,s),jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Wd,c.x),f.addScaledVector(Xd,c.y),f.addScaledVector(jd,c.z),f}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),va.subVectors(e,i),Ci.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ci.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Ds.subVectors(l,s),Us.subVectors(c,s),Gd.subVectors(e,s);const m=Ds.dot(Gd),p=Us.dot(Gd);if(m<=0&&p<=0)return i.copy(s);Vd.subVectors(e,l);const _=Ds.dot(Vd),v=Us.dot(Vd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Ds,f);kd.subVectors(e,c);const M=Ds.dot(kd),E=Us.dot(kd);if(E>=0&&M<=E)return i.copy(c);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Us,h);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return Vv.subVectors(c,l),h=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector(Vv,h);const S=1/(y+C+g);return f=C*S,h=g*S,i.copy(s).addScaledVector(Ds,f).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Dc.subVectors(this.max,qo),Ns.subVectors(e.a,qo),Ls.subVectors(e.b,qo),Os.subVectors(e.c,qo),or.subVectors(Ls,Ns),lr.subVectors(Os,Ls),Lr.subVectors(Ns,Os);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Lr.z,Lr.y,or.z,0,-or.x,lr.z,0,-lr.x,Lr.z,0,-Lr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Lr.y,Lr.x,0];return!qd(i,Ns,Ls,Os,Dc)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,Ns,Ls,Os,Dc))?!1:(Uc.crossVectors(or,lr),i=[Uc.x,Uc.y,Uc.z],qd(i,Ns,Ls,Os,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],wi=new ie,wc=new ul,Ns=new ie,Ls=new ie,Os=new ie,or=new ie,lr=new ie,Lr=new ie,qo=new ie,Dc=new ie,Uc=new ie,Or=new ie;function qd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Or.fromArray(r,c);const h=l.x*Math.abs(Or.x)+l.y*Math.abs(Or.y)+l.z*Math.abs(Or.z),m=e.dot(Or),p=i.dot(Or),_=s.dot(Or);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const vn=new ie,Nc=new Nt;let dE=0;class Yi extends jr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Cv,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lx extends Yi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class cx extends Yi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ea extends Yi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const hE=new ul,Yo=new ie,Yd=new ie;class xp{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):hE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Yd)),this.expandByPoint(Yo.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pE=0;const _i=new fn,Zd=new In,Ps=new ie,oi=new ul,Zo=new ul,bn=new ie;class wa extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qb(e)?cx:lx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,s){return _i.makeTranslation(e,i,s),this.applyMatrix4(_i),this}scale(e,i,s){return _i.makeScale(e,i,s),this.applyMatrix4(_i),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ea(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,Zo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Zo.max),oi.expandByPoint(bn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)bn.fromBufferAttribute(h,p),m&&(Ps.fromBufferAttribute(e,p),bn.add(Ps)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Nt,M=new Nt,E=new Nt,C=new ie,y=new ie;function S(T,B,j){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,B),v.fromBufferAttribute(s,j),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,B),E.fromBufferAttribute(c,j),_.sub(p),v.sub(p),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(G),h[T].add(C),h[B].add(C),h[j].add(C),m[T].add(y),m[B].add(y),m[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,B=w.length;T<B;++T){const j=w[T],G=j.start,K=j.count;for(let ue=G,pe=G+K;ue<pe;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const N=new ie,O=new ie,V=new ie,F=new ie;function z(T){V.fromBufferAttribute(l,T),F.copy(V);const B=h[T];N.copy(B),N.sub(V.multiplyScalar(V.dot(B))).normalize(),O.crossVectors(F,B);const G=O.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,B=w.length;T<B;++T){const j=w[T],G=j.start,K=j.count;for(let ue=G,pe=G+K;ue<pe;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let S=0;S<_;S++)g[E++]=p[M++]}return new Yi(g,_,v)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wa,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mE=0;class du extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Hs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(s.blending=this.blending),this.side!==hr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==uh&&(s.blendSrc=this.blendSrc),this.blendDst!==fh&&(s.blendDst=this.blendDst),this.blendEquation!==zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new ie,Kd=new ie,Lc=new ie,cr=new ie,Qd=new ie,Oc=new ie,Jd=new ie;class gE{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Kd.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(Kd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Lc),h=cr.dot(this.direction),m=-cr.dot(Lc),p=cr.lengthSq(),_=Math.abs(1-f*f);let v,g,M,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,M=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kd).addScaledVector(Lc,g),M}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){Qd.subVectors(i,e),Oc.subVectors(s,e),Jd.crossVectors(Qd,Oc);let f=this.direction.dot(Jd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=h*this.direction.dot(Oc.crossVectors(cr,Oc));if(m<0)return null;const p=h*this.direction.dot(Qd.cross(cr));if(p<0||m+p>f)return null;const _=-h*cr.dot(Jd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ux extends du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kv=new fn,Pr=new gE,Pc=new xp,Wv=new ie,Fc=new ie,Bc=new ie,zc=new ie,$d=new ie,Ic=new ie,Xv=new ie,Hc=new ie;class Ki extends In{constructor(e=new wa,i=new ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&($d.fromBufferAttribute(v,e),f?Ic.addScaledVector($d,_):Ic.addScaledVector($d.sub(i),_))}i.add(Ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Pr.copy(e.ray).recast(e.near),!(Pc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Pc,Wv)===null||Pr.origin.distanceToSquared(Wv)>(e.far-e.near)**2))&&(kv.copy(c).invert(),Pr.copy(e.ray).applyMatrix4(kv),!(s.boundingBox!==null&&Pr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Pr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const y=g[E],S=f[y.materialIndex],w=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,V=N;O<V;O+=3){const F=h.getX(O),z=h.getX(O+1),T=h.getX(O+2);l=Gc(this,S,e,s,p,_,v,F,z,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=E,S=C;y<S;y+=3){const w=h.getX(y),N=h.getX(y+1),O=h.getX(y+2);l=Gc(this,f,e,s,p,_,v,w,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const y=g[E],S=f[y.materialIndex],w=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,V=N;O<V;O+=3){const F=O,z=O+1,T=O+2;l=Gc(this,S,e,s,p,_,v,F,z,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,S=C;y<S;y+=3){const w=y,N=y+1,O=y+2;l=Gc(this,f,e,s,p,_,v,w,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vE(r,e,i,s,l,c,f,h){let m;if(e.side===Zn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===hr,h),m===null)return null;Hc.copy(h),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,Bc),r.getVertexPosition(p,zc);const _=vE(r,e,i,s,Fc,Bc,zc,Xv);if(_){const v=new ie;Di.getBarycoord(Xv,Fc,Bc,zc,v),l&&(_.uv=Di.getInterpolatedAttribute(l,h,m,p,v,new Nt)),c&&(_.uv1=Di.getInterpolatedAttribute(c,h,m,p,v,new Nt)),f&&(_.normal=Di.getInterpolatedAttribute(f,h,m,p,v,new ie),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Di.getNormal(Fc,Bc,zc,g.normal),_.face=g,_.barycoord=v}return _}class _E extends zn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Un,_=Un,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new ie,xE=new ie,yE=new st;class Br{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=eh.subVectors(s,i).cross(xE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(eh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||yE.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new xp,SE=new Nt(.5,.5),Vc=new ie;class yp{constructor(e=new Br,i=new Br,s=new Br,l=new Br,c=new Br,f=new Br){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],M=c[7],E=c[8],C=c[9],y=c[10],S=c[11],w=c[12],N=c[13],O=c[14],V=c[15];if(l[0].setComponents(p-f,M-_,S-E,V-w).normalize(),l[1].setComponents(p+f,M+_,S+E,V+w).normalize(),l[2].setComponents(p+h,M+v,S+C,V+N).normalize(),l[3].setComponents(p-h,M-v,S-C,V-N).normalize(),s)l[4].setComponents(m,g,y,O).normalize(),l[5].setComponents(p-m,M-g,S-y,V-O).normalize();else if(l[4].setComponents(p-m,M-g,S-y,V-O).normalize(),i===Xi)l[5].setComponents(p+m,M+g,S+y,V+O).normalize();else if(i===al)l[5].setComponents(m,g,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=SE.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fx extends zn{constructor(e=[],i=Vr,s,l,c,f,h,m,p,_){super(e,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ME extends zn{constructor(e,i,s,l,c,f,h,m,p){super(e,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends zn{constructor(e,i,s=Zi,l,c,f,h=Un,m=Un,p,_=Ra,v=1){if(_!==Ra&&_!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bE extends Ws{constructor(e,i=Zi,s=Vr,l,c,f=Un,h=Un,m,p=Ra){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends wa{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ea(p,3)),this.setAttribute("normal",new Ea(_,3)),this.setAttribute("uv",new Ea(v,2));function E(C,y,S,w,N,O,V,F,z,T,B){const j=O/z,G=V/T,K=O/2,ue=V/2,pe=F/2,X=z+1,L=T+1;let I=0,se=0;const ge=new ie;for(let Se=0;Se<L;Se++){const P=Se*G-ue;for(let Q=0;Q<X;Q++){const ye=Q*j-K;ge[C]=ye*w,ge[y]=P*N,ge[S]=pe,p.push(ge.x,ge.y,ge.z),ge[C]=0,ge[y]=0,ge[S]=F>0?1:-1,_.push(ge.x,ge.y,ge.z),v.push(Q/z),v.push(1-Se/T),I+=1}}for(let Se=0;Se<T;Se++)for(let P=0;P<z;P++){const Q=g+P+X*Se,ye=g+P+X*(Se+1),Re=g+(P+1)+X*(Se+1),Ue=g+(P+1)+X*Se;m.push(Q,ye,Ue),m.push(ye,Re,Ue),se+=6}h.addGroup(M,se,B),M+=se,g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dl extends wa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,M=[],E=[],C=[],y=[];for(let S=0;S<_;S++){const w=S*g-f;for(let N=0;N<p;N++){const O=N*v-c;E.push(O,-w,0),C.push(0,0,1),y.push(N/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<h;w++){const N=w+p*S,O=w+p*(S+1),V=w+1+p*(S+1),F=w+1+p*S;M.push(N,O,F),M.push(O,V,F)}this.setIndex(M),this.setAttribute("position",new Ea(E,3)),this.setAttribute("normal",new Ea(C,3)),this.setAttribute("uv",new Ea(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(jv(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(jv(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=Xs(r[i]);for(const l in s)e[l]=s[l]}return e}function jv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function EE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function hx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const TE={clone:Xs,merge:Gn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=EE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class CE extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wE extends du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DE extends du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class px extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const th=new fn,qv=new ie,Yv=new ie;class UE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(qv),Yv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Yv),i.updateMatrixWorld(),th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kc=new ie,Wc=new qs,Hi=new ie;class mx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Wc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(kc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Wc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ie,Zv=new Nt,Kv=new Nt;class yi extends mx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,Zv,Kv),i.subVectors(Kv,Zv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Sp extends mx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NE extends UE{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends px{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new NE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class OE extends px{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fs=-90,Bs=1;class PE extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Fs,Bs,e,i);l.layers=this.layers,this.add(l);const c=new yi(Fs,Bs,e,i);c.layers=this.layers,this.add(c);const f=new yi(Fs,Bs,e,i);f.layers=this.layers,this.add(f);const h=new yi(Fs,Bs,e,i);h.layers=this.layers,this.add(h);const m=new yi(Fs,Bs,e,i);m.layers=this.layers,this.add(m);const p=new yi(Fs,Bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class FE extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ap=class Ap{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Ap.prototype.isMatrix2=!0;let Qv=Ap;function Jv(r,e,i,s){const l=BE(s);switch(i){case tx:return r*e;case ix:return r*e/l.components*l.byteLength;case hp:return r*e/l.components*l.byteLength;case kr:return r*e*2/l.components*l.byteLength;case pp:return r*e*2/l.components*l.byteLength;case nx:return r*e*3/l.components*l.byteLength;case Ui:return r*e*4/l.components*l.byteLength;case mp:return r*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:case bh:return Math.max(r,16)*Math.max(e,8)/4;case yh:case Mh:return Math.max(r,8)*Math.max(e,8)/2;case Eh:case Th:case Rh:case Ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ah:case iu:case wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wh:case Xh:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qh:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case au:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BE(r){switch(r){case li:case Q_:return{byteLength:1,components:1};case nl:case J_:case Aa:return{byteLength:2,components:1};case fp:case dp:return{byteLength:2,components:4};case Zi:case up:case Wi:return{byteLength:4,components:1};case $_:case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function gx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function zE(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<v.length;M++){const E=v[g],C=v[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let M=0,E=v.length;M<E;M++){const C=v[M];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var IE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$E=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ET=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:IE,alphahash_pars_fragment:HE,alphamap_fragment:GE,alphamap_pars_fragment:VE,alphatest_fragment:kE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:jE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:KE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:$E,clipping_planes_fragment:e1,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:a1,color_pars_fragment:r1,color_pars_vertex:s1,color_vertex:o1,common:l1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:f1,displacementmap_vertex:d1,emissivemap_fragment:h1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:v1,envmap_common_pars_fragment:_1,envmap_pars_fragment:x1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:U1,envmap_vertex:S1,fog_vertex:M1,fog_pars_vertex:b1,fog_fragment:E1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:R1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:w1,lights_pars_begin:D1,lights_toon_fragment:N1,lights_toon_pars_fragment:L1,lights_phong_fragment:O1,lights_phong_pars_fragment:P1,lights_physical_fragment:F1,lights_physical_pars_fragment:B1,lights_fragment_begin:z1,lights_fragment_maps:I1,lights_fragment_end:H1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:j1,map_pars_fragment:q1,map_particle_fragment:Y1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:$1,morphnormal_vertex:eT,morphtarget_pars_vertex:tT,morphtarget_vertex:nT,normal_fragment_begin:iT,normal_fragment_maps:aT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:lT,clearcoat_normal_fragment_begin:cT,clearcoat_normal_fragment_maps:uT,clearcoat_pars_fragment:fT,iridescence_pars_fragment:dT,opaque_fragment:hT,packing:pT,premultiplied_alpha_fragment:mT,project_vertex:gT,dithering_fragment:vT,dithering_pars_fragment:_T,roughnessmap_fragment:xT,roughnessmap_pars_fragment:yT,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:MT,shadowmap_vertex:bT,shadowmask_pars_fragment:ET,skinbase_vertex:TT,skinning_pars_vertex:AT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:wT,specularmap_pars_fragment:DT,tonemapping_fragment:UT,tonemapping_pars_fragment:NT,transmission_fragment:LT,transmission_pars_fragment:OT,uv_pars_fragment:PT,uv_pars_vertex:FT,uv_vertex:BT,worldpos_vertex:zT,background_vert:IT,background_frag:HT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:kT,cube_frag:WT,depth_vert:XT,depth_frag:jT,distance_vert:qT,distance_frag:YT,equirect_vert:ZT,equirect_frag:KT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:$T,meshbasic_frag:eA,meshlambert_vert:tA,meshlambert_frag:nA,meshmatcap_vert:iA,meshmatcap_frag:aA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:lA,meshphysical_vert:cA,meshphysical_frag:uA,meshtoon_vert:fA,meshtoon_frag:dA,points_vert:hA,points_frag:pA,shadow_vert:mA,shadow_frag:gA,sprite_vert:vA,sprite_frag:_A},He={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Gn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Gn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Gn([He.points,He.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Gn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Gn([He.common,He.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Gn([He.sprite,He.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Gn([He.common,He.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Gn([He.lights,He.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:Gn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Xc={r:0,b:0,g:0},xA=new fn,vx=new st;vx.set(-1,0,0,0,1,0,0,0,1);function yA(r,e,i,s,l,c){const f=new Ct(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function M(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const O=w.backgroundBlurriness>0;N=e.get(N,O)}return N}function E(w){let N=!1;const O=M(w);O===null?y(f,h):O&&O.isColor&&(y(O,1),N=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,N){const O=M(N);O&&(O.isCubeTexture||O.mapping===fu)?(p===void 0&&(p=new Ki(new fl(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Xs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(N.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(vx),p.material.toneMapped=Mt.getTransfer(O.colorSpace)!==It,(_!==O||v!==O.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,v=O.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Ki(new dl(2,2),new Oi({name:"BackgroundMaterial",uniforms:Xs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(O.colorSpace)!==It,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=O,v=O.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,N){w.getRGB(Xc,hx(r)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,N,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,N=1){f.set(w),h=N,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(f,h)},render:E,addToRenderList:C,dispose:S}}function SA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,K,ue,pe,X){let L=!1;const I=v(G,pe,ue,K);c!==I&&(c=I,p(c.object)),L=M(G,pe,ue,X),L&&E(G,pe,ue,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(L||f)&&(f=!1,O(G,K,ue,pe),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,K,ue,pe){const X=pe.wireframe===!0;let L=s[K.id];L===void 0&&(L={},s[K.id]=L);const I=G.isInstancedMesh===!0?G.id:0;let se=L[I];se===void 0&&(se={},L[I]=se);let ge=se[ue.id];ge===void 0&&(ge={},se[ue.id]=ge);let Se=ge[X];return Se===void 0&&(Se=g(m()),ge[X]=Se),Se}function g(G){const K=[],ue=[],pe=[];for(let X=0;X<i;X++)K[X]=0,ue[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:pe,object:G,attributes:{},index:null}}function M(G,K,ue,pe){const X=c.attributes,L=K.attributes;let I=0;const se=ue.getAttributes();for(const ge in se)if(se[ge].location>=0){const P=X[ge];let Q=L[ge];if(Q===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;I++}return c.attributesNum!==I||c.index!==pe}function E(G,K,ue,pe){const X={},L=K.attributes;let I=0;const se=ue.getAttributes();for(const ge in se)if(se[ge].location>=0){let P=L[ge];P===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),X[ge]=Q,I++}c.attributes=X,c.attributesNum=I,c.index=pe}function C(){const G=c.newAttributes;for(let K=0,ue=G.length;K<ue;K++)G[K]=0}function y(G){S(G,0)}function S(G,K){const ue=c.newAttributes,pe=c.enabledAttributes,X=c.attributeDivisors;ue[G]=1,pe[G]===0&&(r.enableVertexAttribArray(G),pe[G]=1),X[G]!==K&&(r.vertexAttribDivisor(G,K),X[G]=K)}function w(){const G=c.newAttributes,K=c.enabledAttributes;for(let ue=0,pe=K.length;ue<pe;ue++)K[ue]!==G[ue]&&(r.disableVertexAttribArray(ue),K[ue]=0)}function N(G,K,ue,pe,X,L,I){I===!0?r.vertexAttribIPointer(G,K,ue,X,L):r.vertexAttribPointer(G,K,ue,pe,X,L)}function O(G,K,ue,pe){C();const X=pe.attributes,L=ue.getAttributes(),I=K.defaultAttributeValues;for(const se in L){const ge=L[se];if(ge.location>=0){let Se=X[se];if(Se===void 0&&(se==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),se==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const P=Se.normalized,Q=Se.itemSize,ye=e.get(Se);if(ye===void 0)continue;const Re=ye.buffer,Ue=ye.type,oe=ye.bytesPerElement,Me=Ue===r.INT||Ue===r.UNSIGNED_INT||Se.gpuType===up;if(Se.isInterleavedBufferAttribute){const Te=Se.data,Ge=Te.stride,et=Se.offset;if(Te.isInstancedInterleavedBuffer){for(let Je=0;Je<ge.locationSize;Je++)S(ge.location+Je,Te.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Je=0;Je<ge.locationSize;Je++)y(ge.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Je=0;Je<ge.locationSize;Je++)N(ge.location+Je,Q/ge.locationSize,Ue,P,Ge*oe,(et+Q/ge.locationSize*Je)*oe,Me)}else{if(Se.isInstancedBufferAttribute){for(let Te=0;Te<ge.locationSize;Te++)S(ge.location+Te,Se.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Te=0;Te<ge.locationSize;Te++)y(ge.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Te=0;Te<ge.locationSize;Te++)N(ge.location+Te,Q/ge.locationSize,Ue,P,Q*oe,Q/ge.locationSize*Te*oe,Me)}}else if(I!==void 0){const P=I[se];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ge.location,P);break;case 3:r.vertexAttrib3fv(ge.location,P);break;case 4:r.vertexAttrib4fv(ge.location,P);break;default:r.vertexAttrib1fv(ge.location,P)}}}}w()}function V(){B();for(const G in s){const K=s[G];for(const ue in K){const pe=K[ue];for(const X in pe){const L=pe[X];for(const I in L)_(L[I].object),delete L[I];delete pe[X]}}delete s[G]}}function F(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const ue in K){const pe=K[ue];for(const X in pe){const L=pe[X];for(const I in L)_(L[I].object),delete L[I];delete pe[X]}}delete s[G.id]}function z(G){for(const K in s){const ue=s[K];for(const pe in ue){const X=ue[pe];if(X[G.id]===void 0)continue;const L=X[G.id];for(const I in L)_(L[I].object),delete L[I];delete X[G.id]}}}function T(G){for(const K in s){const ue=s[K],pe=G.isInstancedMesh===!0?G.id:0,X=ue[pe];if(X!==void 0){for(const L in X){const I=X[L];for(const se in I)_(I[se].object),delete I[se];delete X[L]}delete ue[pe],Object.keys(ue).length===0&&delete s[K]}}}function B(){j(),f=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:j,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:w}}function MA(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function bA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ui&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(nt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:O,maxSamples:V,samples:F}}function EA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Br,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const E=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!y)c?_(null):p();else{const w=c?0:s,N=w*4;let O=S.clippingState||null;m.value=O,O=_(E,g,N,M);for(let V=0;V!==N;++V)O[V]=i[V];S.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,g,M,E){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const S=M+C*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,O=M;N!==C;++N,O+=4)f.copy(v[N]).applyMatrix4(w,h),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const dr=4,$v=[.125,.215,.35,.446,.526,.582],Ir=20,TA=256,Ko=new Sp,e_=new Ct;let nh=null,ih=0,ah=0,rh=!1;const AA=new ie;class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=AA}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Aa,format:Ui,colorSpace:ru,depthBuffer:!1},l=n_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RA(c)),this._blurMaterial=wA(c,e,i),this._ggxMaterial=CA(c,e,i)}return l}_compileMaterial(e){const i=new Ki(new wa,e);this._renderer.compile(i,Ko)}_sceneToCubeUV(e,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(e_),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new fl,new ux({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(e_),S=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const V=this._cubeSize;zs(l,O*V,N>2?V:0,V,V),v.setRenderTarget(l),S&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Vr||e.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;zs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,M=v*g,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-dr?s-E+dr:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,zs(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(h,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,zs(e,y,S,3*C,2*C),l.setRenderTarget(e),l.render(h,Ko)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ir-1),C=c/E,y=isFinite(c)?1+Math.floor(_*C):Ir;y>Ir&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ir}`);const S=[];let w=0;for(let z=0;z<Ir;++z){const T=z/C,B=Math.exp(-T*T/2);S.push(B),z===0?w+=B:z<y&&(w+=2*B)}for(let z=0;z<S.length;z++)S[z]=S[z]/w;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-s;const O=this._sizeLods[l],V=3*O*(l>N-dr?l-N+dr:0),F=4*(this._cubeSize-O);zs(i,V,F,3*O,2*O),m.setRenderTarget(i),m.render(v,Ko)}}function RA(r){const e=[],i=[],s=[];let l=r;const c=r-dr+1+$v.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-dr?m=$v[f-r+dr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,C=3,y=2,S=1,w=new Float32Array(C*E*M),N=new Float32Array(y*E*M),O=new Float32Array(S*E*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,T=F>2?0:-1,B=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];w.set(B,C*E*F),N.set(g,y*E*F);const j=[F,F,F,F,F,F];O.set(j,S*E*F)}const V=new wa;V.setAttribute("position",new Yi(w,C)),V.setAttribute("uv",new Yi(N,y)),V.setAttribute("faceIndex",new Yi(O,S)),s.push(new Ki(V,null)),l>dr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function n_(r,e,i){const s=new qi(r,e,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function CA(r,e,i){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function wA(r,e,i){const s=new Float32Array(Ir),l=new ie(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function i_(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function a_(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class _x extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new fx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:Xs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new Ki(l,c),h=i.minFilter;return i.minFilter===Hr&&(i.minFilter=Bn),new PE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function DA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Cd||M===wd)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new _x(E.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Cd||M===wd,C=M===Vr||M===ks;if(E||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new t_(r)),y=E?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return E&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new t_(r)),y=E?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,M){return M===Cd?g.mapping=Vr:M===wd&&(g.mapping=ks),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function UA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Kh("WebGLRenderer: "+s+" extension not supported."),l}}}function NA(r,e,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(v){const g=[],M=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let N=0,O=w.length;N<O;N+=3){const V=w[N+0],F=w[N+1],z=w[N+2];g.push(V,F,F,z,z,V)}}else{const w=E.array;C=E.version;for(let N=0,O=w.length/3-1;N<O;N+=3){const V=N+0,F=N+1,z=N+2;g.push(V,F,F,z,z,V)}}const y=new(E.count>=65535?cx:lx)(g,1);y.version=C;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function LA(r,e,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),i.update(g,s,1)}function p(v,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,v*f,M),i.update(g,s,M))}function _(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function OA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Et("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PA(r,e,i){const s=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let j=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var M=j;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let V=h.attributes.position.count*O,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*F*4*v),T=new rx(z,V,F,v);T.type=Wi,T.needsUpdate=!0;const B=O*4;for(let G=0;G<v;G++){const K=S[G],ue=w[G],pe=N[G],X=V*F*4*G;for(let L=0;L<K.count;L++){const I=L*B;E===!0&&(l.fromBufferAttribute(K,L),z[X+I+0]=l.x,z[X+I+1]=l.y,z[X+I+2]=l.z,z[X+I+3]=0),C===!0&&(l.fromBufferAttribute(ue,L),z[X+I+4]=l.x,z[X+I+5]=l.y,z[X+I+6]=l.z,z[X+I+7]=0),y===!0&&(l.fromBufferAttribute(pe,L),z[X+I+8]=l.x,z[X+I+9]=l.y,z[X+I+10]=l.z,z[X+I+11]=pe.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Nt(V,F)},s.set(h,g),h.addEventListener("dispose",j)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function FA(r,e,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const BA={[k_]:"LINEAR_TONE_MAPPING",[W_]:"REINHARD_TONE_MAPPING",[X_]:"CINEON_TONE_MAPPING",[j_]:"ACES_FILMIC_TONE_MAPPING",[Y_]:"AGX_TONE_MAPPING",[Z_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function zA(r,e,i,s,l){const c=new qi(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Ws(e,i):void 0}),f=new qi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),h=new wa;h.setAttribute("position",new Ea([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ea([0,2,0,0,2,0],2));const m=new CE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ki(h,m),_=new Sp(-1,1,1,-1,0,1);let v=null,g=null,M=!1,E,C=null,y=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let O=0;O<y.length;O++){const V=y[O];V.setSize&&V.setSize(w,N)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const N=c.width,O=c.height;for(let V=0;V<y.length;V++){const F=y[V];F.setSize&&F.setSize(N,O)}},this.begin=function(w,N){if(M||w.toneMapping===ji&&y.length===0)return!1;if(C=N,N!==null){const O=N.width,V=N.height;(c.width!==O||c.height!==V)&&this.setSize(O,V)}return S===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=E,M=!0;let O=c,V=f;for(let F=0;F<y.length;F++){const z=y[F];if(z.enabled!==!1&&(z.render(w,V,O,N),z.needsSwap!==!1)){const T=O;O=V,V=T}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Mt.getTransfer(v)===It&&(m.defines.SRGB_TRANSFER="");const F=BA[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(C),w.render(p,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const xx=new zn,Jh=new Ws(1,1),yx=new rx,Sx=new iE,Mx=new fx,r_=[],s_=[],o_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function Ys(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=r_[l];if(c===void 0&&(c=new Float32Array(l),r_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Sn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function pu(r,e){let i=s_[e];i===void 0&&(i=new Int32Array(e),s_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function IA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function HA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Sn(i,e)}}function GA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Sn(i,e)}}function VA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Sn(i,e)}}function kA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;c_.set(s),r.uniformMatrix2fv(this.addr,!1,c_),Sn(i,s)}}function WA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;l_.set(s),r.uniformMatrix3fv(this.addr,!1,l_),Sn(i,s)}}function XA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;o_.set(s),r.uniformMatrix4fv(this.addr,!1,o_),Sn(i,s)}}function jA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function qA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Sn(i,e)}}function YA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Sn(i,e)}}function ZA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Sn(i,e)}}function KA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function QA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Sn(i,e)}}function JA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Sn(i,e)}}function $A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Sn(i,e)}}function eR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jh.compareFunction=i.isReversedDepthBuffer()?vp:gp,c=Jh):c=xx,i.setTexture2D(e||c,l)}function tR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Sx,l)}function nR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Mx,l)}function iR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||yx,l)}function aR(r){switch(r){case 5126:return IA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return kA;case 35675:return WA;case 35676:return XA;case 5124:case 35670:return jA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function rR(r,e){r.uniform1fv(this.addr,e)}function sR(r,e){const i=Ys(e,this.size,2);r.uniform2fv(this.addr,i)}function oR(r,e){const i=Ys(e,this.size,3);r.uniform3fv(this.addr,i)}function lR(r,e){const i=Ys(e,this.size,4);r.uniform4fv(this.addr,i)}function cR(r,e){const i=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function uR(r,e){const i=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function fR(r,e){const i=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function dR(r,e){r.uniform1iv(this.addr,e)}function hR(r,e){r.uniform2iv(this.addr,e)}function pR(r,e){r.uniform3iv(this.addr,e)}function mR(r,e){r.uniform4iv(this.addr,e)}function gR(r,e){r.uniform1uiv(this.addr,e)}function vR(r,e){r.uniform2uiv(this.addr,e)}function _R(r,e){r.uniform3uiv(this.addr,e)}function xR(r,e){r.uniform4uiv(this.addr,e)}function yR(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Jh:f=xx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function SR(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Sx,c[f])}function MR(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Mx,c[f])}function bR(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||yx,c[f])}function ER(r){switch(r){case 5126:return rR;case 35664:return sR;case 35665:return oR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return vR;case 36295:return _R;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return bR}}class TR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aR(i.type)}}class AR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ER(i.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function u_(r,e){r.seq.push(e),r.map[e.id]=e}function CR(r,e,i){const s=r.name,l=s.length;for(sh.lastIndex=0;;){const c=sh.exec(s),f=sh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){u_(i,p===void 0?new TR(h,r,e):new AR(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new RR(h),u_(i,v)),i=v}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);CR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function f_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const wR=37297;let DR=0;function UR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const d_=new st;function NR(r){Mt._getMatrix(d_,Mt.workingColorSpace,r);const e=`mat3( ${d_.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function h_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+UR(r.getShaderSource(e),h)}else return c}function LR(r,e){const i=NR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const OR={[k_]:"Linear",[W_]:"Reinhard",[X_]:"Cineon",[j_]:"ACESFilmic",[Y_]:"AgX",[Z_]:"Neutral",[q_]:"Custom"};function PR(r,e){const i=OR[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ie;function FR(){Mt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function zR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function IR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function $o(r){return r!==""}function p_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(r){return r.replace(HR,VR)}const GR=new Map;function VR(r,e){let i=ft[e];if(i===void 0){const s=GR.get(e);if(s!==void 0)i=ft[s],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return $h(i)}const kR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(r){return r.replace(kR,WR)}function WR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function v_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XR={[Zc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function jR(r){return XR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qR={[Vr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function YR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":qR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZR={[ks]:"ENVMAP_MODE_REFRACTION"};function KR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ZR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QR={[V_]:"ENVMAP_BLENDING_MULTIPLY",[Fb]:"ENVMAP_BLENDING_MIX",[Bb]:"ENVMAP_BLENDING_ADD"};function JR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":QR[r.combine]||"ENVMAP_BLENDING_NONE"}function $R(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function eC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=jR(i),p=YR(i),_=KR(i),v=JR(i),g=$R(i),M=BR(i),E=zR(c),C=l.createProgram();let y,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),S.length>0&&(S+=`
`)):(y=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ft.tonemapping_pars_fragment:"",i.toneMapping!==ji?PR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,LR("linearToOutputTexel",i.outputColorSpace),FR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=$h(f),f=p_(f,i),f=m_(f,i),h=$h(h),h=p_(h,i),h=m_(h,i),f=g_(f),h=g_(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+y+f,O=w+S+h,V=f_(l,l.VERTEX_SHADER,N),F=f_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,V),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ue=l.getShaderInfoLog(V)||"",pe=l.getShaderInfoLog(F)||"",X=K.trim(),L=ue.trim(),I=pe.trim();let se=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,V,F);else{const Se=h_(l,V,"vertex"),P=h_(l,F,"fragment");Et("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+Se+`
`+P)}else X!==""?nt("WebGLProgram: Program Info Log:",X):(L===""||I==="")&&(ge=!1);ge&&(G.diagnostics={runnable:se,programLog:X,vertexShader:{log:L,prefix:y},fragmentShader:{log:I,prefix:S}})}l.deleteShader(V),l.deleteShader(F),T=new eu(l,C),B=IR(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let B;this.getAttributes=function(){return B===void 0&&z(this),B};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(C,wR)),j},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=F,this}let tC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new iC(e),i.set(e,s)),s}}class iC{constructor(e){this.id=tC++,this.code=e,this.usedTimes=0}}function aC(r){return r===kr||r===iu||r===au}function rC(r,e,i,s,l,c){const f=new sx,h=new nC,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,B,j,G,K,ue){const pe=G.fog,X=K.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,se=e.get(T.envMap||L,I),ge=se&&se.mapping===fu?se.image.height:null,Se=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=P!==void 0?P.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Re,Ue,oe,Me;if(Se){const tt=Vi[Se];Re=tt.vertexShader,Ue=tt.fragmentShader}else Re=T.vertexShader,Ue=T.fragmentShader,h.update(T),oe=h.getVertexShaderID(T),Me=h.getFragmentShaderID(T);const Te=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),et=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,Wt=!!T.map,dt=!!T.matcap,_t=!!se,Lt=!!T.aoMap,ct=!!T.lightMap,on=!!T.bumpMap,qt=!!T.normalMap,Tn=!!T.displacementMap,q=!!T.emissiveMap,en=!!T.metalnessMap,ht=!!T.roughnessMap,Ht=T.anisotropy>0,Ce=T.clearcoat>0,Kt=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,_e=Ht&&!!T.anisotropyMap,Ee=Ce&&!!T.clearcoatMap,we=Ce&&!!T.clearcoatNormalMap,Oe=Ce&&!!T.clearcoatRoughnessMap,fe=U&&!!T.iridescenceMap,de=U&&!!T.iridescenceThicknessMap,Pe=b&&!!T.sheenColorMap,Fe=b&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,De=!!T.specularColorMap,it=!!T.specularIntensityMap,at=J&&!!T.transmissionMap,pt=J&&!!T.thicknessMap,k=!!T.gradientMap,Ae=!!T.alphaMap,me=T.alphaTest>0,Ie=!!T.alphaHash,Le=!!T.extensions;let be=ji;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(be=r.toneMapping);const qe={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:Ue,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:et,instancingColor:et&&K.instanceColor!==null,instancingMorph:et&&K.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:dt,envMap:_t,envMapMode:_t&&se.mapping,envMapCubeUVHeight:ge,aoMap:Lt,lightMap:ct,bumpMap:on,normalMap:qt,displacementMap:Tn,emissiveMap:q,normalMapObjectSpace:qt&&T.normalMapType===Hb,normalMapTangentSpace:qt&&T.normalMapType===Av,packedNormalMap:qt&&T.normalMapType===Av&&aC(T.normalMap.format),metalnessMap:en,roughnessMap:ht,anisotropy:Ht,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:Ee,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:Kt,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:b,sheenColorMap:Pe,sheenRoughnessMap:Fe,specularMap:Ne,specularColorMap:De,specularIntensityMap:it,transmission:J,transmissionMap:at,thicknessMap:pt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Hs&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:Ie,combine:T.combine,mapUv:Wt&&E(T.map.channel),aoMapUv:Lt&&E(T.aoMap.channel),lightMapUv:ct&&E(T.lightMap.channel),bumpMapUv:on&&E(T.bumpMap.channel),normalMapUv:qt&&E(T.normalMap.channel),displacementMapUv:Tn&&E(T.displacementMap.channel),emissiveMapUv:q&&E(T.emissiveMap.channel),metalnessMapUv:en&&E(T.metalnessMap.channel),roughnessMapUv:ht&&E(T.roughnessMap.channel),anisotropyMapUv:_e&&E(T.anisotropyMap.channel),clearcoatMapUv:Ee&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ne&&E(T.specularMap.channel),specularColorMapUv:De&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:pt&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qt||Ht),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Wt||Ae),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ye,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ki,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function y(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)B.push(j),B.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(S(B,T),w(B,T),B.push(r.outputColorSpace)),B.push(T.customProgramCacheKey),B.join()}function S(T,B){T.push(B.precision),T.push(B.outputColorSpace),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.mapUv),T.push(B.alphaMapUv),T.push(B.lightMapUv),T.push(B.aoMapUv),T.push(B.bumpMapUv),T.push(B.normalMapUv),T.push(B.displacementMapUv),T.push(B.emissiveMapUv),T.push(B.metalnessMapUv),T.push(B.roughnessMapUv),T.push(B.anisotropyMapUv),T.push(B.clearcoatMapUv),T.push(B.clearcoatNormalMapUv),T.push(B.clearcoatRoughnessMapUv),T.push(B.iridescenceMapUv),T.push(B.iridescenceThicknessMapUv),T.push(B.sheenColorMapUv),T.push(B.sheenRoughnessMapUv),T.push(B.specularMapUv),T.push(B.specularColorMapUv),T.push(B.specularIntensityMapUv),T.push(B.transmissionMapUv),T.push(B.thicknessMapUv),T.push(B.combine),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numSpotLightMaps),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.numSpotLightShadowsWithMaps),T.push(B.numLightProbes),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function w(T,B){f.disableAll(),B.instancing&&f.enable(0),B.instancingColor&&f.enable(1),B.instancingMorph&&f.enable(2),B.matcap&&f.enable(3),B.envMap&&f.enable(4),B.normalMapObjectSpace&&f.enable(5),B.normalMapTangentSpace&&f.enable(6),B.clearcoat&&f.enable(7),B.iridescence&&f.enable(8),B.alphaTest&&f.enable(9),B.vertexColors&&f.enable(10),B.vertexAlphas&&f.enable(11),B.vertexUv1s&&f.enable(12),B.vertexUv2s&&f.enable(13),B.vertexUv3s&&f.enable(14),B.vertexTangents&&f.enable(15),B.anisotropy&&f.enable(16),B.alphaHash&&f.enable(17),B.batching&&f.enable(18),B.dispersion&&f.enable(19),B.batchingColor&&f.enable(20),B.gradientMap&&f.enable(21),B.packedNormalMap&&f.enable(22),B.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),B.fog&&f.enable(0),B.useFog&&f.enable(1),B.flatShading&&f.enable(2),B.logarithmicDepthBuffer&&f.enable(3),B.reversedDepthBuffer&&f.enable(4),B.skinning&&f.enable(5),B.morphTargets&&f.enable(6),B.morphNormals&&f.enable(7),B.morphColors&&f.enable(8),B.premultipliedAlpha&&f.enable(9),B.shadowMapEnabled&&f.enable(10),B.doubleSided&&f.enable(11),B.flipSided&&f.enable(12),B.useDepthPacking&&f.enable(13),B.dithering&&f.enable(14),B.transmission&&f.enable(15),B.sheen&&f.enable(16),B.opaque&&f.enable(17),B.pointsUvs&&f.enable(18),B.decodeVideoTexture&&f.enable(19),B.decodeVideoTextureEmissive&&f.enable(20),B.alphaToCoverage&&f.enable(21),B.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function N(T){const B=M[T.type];let j;if(B){const G=Vi[B];j=TE.clone(G.uniforms)}else j=T.uniforms;return j}function O(T,B){let j=_.get(B);return j!==void 0?++j.usedTimes:(j=new eC(r,B,T,l),p.push(j),_.set(B,j)),j}function V(T){if(--T.usedTimes===0){const B=p.indexOf(T);p[B]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){h.remove(T)}function z(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:N,acquireProgram:O,releaseProgram:V,releaseShaderCache:F,programs:p,dispose:z}}function sC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function oC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function __(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function x_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,C,y,S){let w=r[e];return w===void 0?(w={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[e]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=E,w.materialVariant=f(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=y,w.group=S),e++,w}function m(g,M,E,C,y,S){const w=h(g,M,E,C,y,S);E.transmission>0?s.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(g,M,E,C,y,S){const w=h(g,M,E,C,y,S);E.transmission>0?s.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,M){i.length>1&&i.sort(g||oC),s.length>1&&s.sort(M||__),l.length>1&&l.sort(M||__)}function v(){for(let g=e,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function lC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new x_,r.set(s,[f])):l>=c.length?(f=new x_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function cC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Ct};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function uC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let fC=0;function dC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hC(r){const e=new cC,i=uC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const l=new ie,c=new fn,f=new fn;function h(p){let _=0,v=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let M=0,E=0,C=0,y=0,S=0,w=0,N=0,O=0,V=0,F=0,z=0;p.sort(dC);for(let B=0,j=p.length;B<j;B++){const G=p[B],K=G.color,ue=G.intensity,pe=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===kr?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*ue,v+=K.g*ue,g+=K.b*ue;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],ue);z++}else if(G.isDirectionalLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,se=i.get(G);se.shadowIntensity=I.intensity,se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,s.directionalShadow[M]=se,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=G.shadow.matrix,w++}s.directional[M]=L,M++}else if(G.isSpotLight){const L=e.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(K).multiplyScalar(ue),L.distance=pe,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[C]=L;const I=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,I.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[C]=I.matrix,G.castShadow){const se=i.get(G);se.shadowIntensity=I.intensity,se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,s.spotShadow[C]=se,s.spotShadowMap[C]=X,O++}C++}else if(G.isRectAreaLight){const L=e.get(G);L.color.copy(K).multiplyScalar(ue),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=L,y++}else if(G.isPointLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const I=G.shadow,se=i.get(G);se.shadowIntensity=I.intensity,se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,se.shadowCameraNear=I.camera.near,se.shadowCameraFar=I.camera.far,s.pointShadow[E]=se,s.pointShadowMap[E]=X,s.pointShadowMatrix[E]=G.shadow.matrix,N++}s.point[E]=L,E++}else if(G.isHemisphereLight){const L=e.get(G);L.skyColor.copy(G.color).multiplyScalar(ue),L.groundColor.copy(G.groundColor).multiplyScalar(ue),s.hemi[S]=L,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==O||T.numSpotMaps!==V||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+V-F,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=O,T.numSpotMaps=V,T.numLightProbes=z,s.version=fC++)}function m(p,_){let v=0,g=0,M=0,E=0,C=0;const y=_.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const N=p[S];if(N.isDirectionalLight){const O=s.directional[v];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),v++}else if(N.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const O=s.point[g];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function y_(r){const e=new hC(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function pC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new y_(r),e.set(l,[h])):c>=f.length?(h=new y_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const mC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vC=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],_C=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],S_=new fn,Qo=new ie,oh=new ie;function xC(r,e,i){let s=new yp;const l=new Nt,c=new Nt,f=new sn,h=new wE,m=new DE,p={},_=i.maxTextureSize,v={[hr]:Zn,[Zn]:hr,[ki]:ki},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new wa;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ki(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let S=this.type;this.render=function(F,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===vb&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const B=r.getRenderTarget(),j=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ma),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=S!==this.type;ue&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(X=>X.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,X=F.length;pe<X;pe++){const L=F[pe],I=L.shadow;if(I===void 0){nt("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const se=I.getFrameExtents();l.multiply(se),c.copy(I.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/se.x),l.x=c.x*se.x,I.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/se.y),l.y=c.y*se.y,I.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ge,I.map===null||ue===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Jo){if(L.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qi(l.x,l.y,{format:kr,type:Aa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new Ws(l.x,l.y,Wi),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=Ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un}else L.isPointLight?(I.map=new _x(l.x),I.map.depthTexture=new bE(l.x,Zi)):(I.map=new qi(l.x,l.y),I.map.depthTexture=new Ws(l.x,l.y,Zi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=Ra,this.type===Zc?(I.map.depthTexture.compareFunction=ge?vp:gp,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un);I.camera.updateProjectionMatrix()}const Se=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Se;P++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,P),r.clear();else{P===0&&(r.setRenderTarget(I.map),r.clear());const Q=I.getViewport(P);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(f)}if(L.isPointLight){const Q=I.camera,ye=I.matrix,Re=L.distance||Q.far;Re!==Q.far&&(Q.far=Re,Q.updateProjectionMatrix()),Qo.setFromMatrixPosition(L.matrixWorld),Q.position.copy(Qo),oh.copy(Q.position),oh.add(vC[P]),Q.up.copy(_C[P]),Q.lookAt(oh),Q.updateMatrixWorld(),ye.makeTranslation(-Qo.x,-Qo.y,-Qo.z),S_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(S_,Q.coordinateSystem,Q.reversedDepth)}else I.updateMatrices(L);s=I.getFrustum(),O(z,T,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===Jo&&w(I,T),I.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(B,j,G)};function w(F,z){const T=e.update(C);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new qi(l.x,l.y,{format:kr,type:Aa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,T,M,C,null)}function N(F,z,T,B){let j=null;const G=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)j=G;else if(j=T.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=j.uuid,ue=z.uuid;let pe=p[K];pe===void 0&&(pe={},p[K]=pe);let X=pe[ue];X===void 0&&(X=j.clone(),pe[ue]=X,z.addEventListener("dispose",V)),j=X}if(j.visible=z.visible,j.wireframe=z.wireframe,B===Jo?j.side=z.shadowSide!==null?z.shadowSide:z.side:j.side=z.shadowSide!==null?z.shadowSide:v[z.side],j.alphaMap=z.alphaMap,j.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,j.map=z.map,j.clipShadows=z.clipShadows,j.clippingPlanes=z.clippingPlanes,j.clipIntersection=z.clipIntersection,j.displacementMap=z.displacementMap,j.displacementScale=z.displacementScale,j.displacementBias=z.displacementBias,j.wireframeLinewidth=z.wireframeLinewidth,j.linewidth=z.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const K=r.properties.get(j);K.light=T}return j}function O(F,z,T,B,j){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&j===Jo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const ue=e.update(F),pe=F.material;if(Array.isArray(pe)){const X=ue.groups;for(let L=0,I=X.length;L<I;L++){const se=X[L],ge=pe[se.materialIndex];if(ge&&ge.visible){const Se=N(F,ge,B,j);F.onBeforeShadow(r,F,z,T,ue,Se,se),r.renderBufferDirect(T,null,ue,Se,F,se),F.onAfterShadow(r,F,z,T,ue,Se,se)}}}else if(pe.visible){const X=N(F,pe,B,j);F.onBeforeShadow(r,F,z,T,ue,X,null),r.renderBufferDirect(T,null,ue,X,F,null),F.onAfterShadow(r,F,z,T,ue,X,null)}}const K=F.children;for(let ue=0,pe=K.length;ue<pe;ue++)O(K[ue],z,T,B,j)}function V(F){F.target.removeEventListener("dispose",V);for(const T in p){const B=p[T],j=F.target.uuid;j in B&&(B[j].dispose(),delete B[j])}}}function yC(r,e){function i(){let k=!1;const Ae=new sn;let me=null;const Ie=new sn(0,0,0,0);return{setMask:function(Le){me!==Le&&!k&&(r.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){k=Le},setClear:function(Le,be,qe,tt,tn){tn===!0&&(Le*=tt,be*=tt,qe*=tt),Ae.set(Le,be,qe,tt),Ie.equals(Ae)===!1&&(r.clearColor(Le,be,qe,tt),Ie.copy(Ae))},reset:function(){k=!1,me=null,Ie.set(-1,0,0,0)}}}function s(){let k=!1,Ae=!1,me=null,Ie=null,Le=null;return{setReversed:function(be){if(Ae!==be){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=be;const tt=Le;Le=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(be){be?Te(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(be){me!==be&&!k&&(r.depthMask(be),me=be)},setFunc:function(be){if(Ae&&(be=Kb[be]),Ie!==be){switch(be){case dh:r.depthFunc(r.NEVER);break;case hh:r.depthFunc(r.ALWAYS);break;case ph:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case mh:r.depthFunc(r.EQUAL);break;case gh:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case _h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=be}},setLocked:function(be){k=be},setClear:function(be){Le!==be&&(Le=be,Ae&&(be=1-be),r.clearDepth(be))},reset:function(){k=!1,me=null,Ie=null,Le=null,Ae=!1}}}function l(){let k=!1,Ae=null,me=null,Ie=null,Le=null,be=null,qe=null,tt=null,tn=null;return{setTest:function(wt){k||(wt?Te(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!k&&(r.stencilMask(wt),Ae=wt)},setFunc:function(wt,ci,Kn){(me!==wt||Ie!==ci||Le!==Kn)&&(r.stencilFunc(wt,ci,Kn),me=wt,Ie=ci,Le=Kn)},setOp:function(wt,ci,Kn){(be!==wt||qe!==ci||tt!==Kn)&&(r.stencilOp(wt,ci,Kn),be=wt,qe=ci,tt=Kn)},setLocked:function(wt){k=wt},setClear:function(wt){tn!==wt&&(r.clearStencil(wt),tn=wt)},reset:function(){k=!1,Ae=null,me=null,Ie=null,Le=null,be=null,qe=null,tt=null,tn=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},M=new WeakMap,E=[],C=null,y=!1,S=null,w=null,N=null,O=null,V=null,F=null,z=null,T=new Ct(0,0,0),B=0,j=!1,G=null,K=null,ue=null,pe=null,X=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,se=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ge)[1]),I=se>=1):ge.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),I=se>=2);let Se=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Re=new sn().fromArray(Q),Ue=new sn().fromArray(ye);function oe(k,Ae,me,Ie){const Le=new Uint8Array(4),be=r.createTexture();r.bindTexture(k,be),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<me;qe++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ae+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return be}const Me={};Me[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Te(r.DEPTH_TEST),f.setFunc(Vs),on(!1),qt(Mv),Te(r.CULL_FACE),Lt(Ma);function Te(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Ge(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function et(k,Ae){return g[k]!==Ae?(r.bindFramebuffer(k,Ae),g[k]=Ae,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(k,Ae){let me=E,Ie=!1;if(k){me=M.get(Ae),me===void 0&&(me=[],M.set(Ae,me));const Le=k.textures;if(me.length!==Le.length||me[0]!==r.COLOR_ATTACHMENT0){for(let be=0,qe=Le.length;be<qe;be++)me[be]=r.COLOR_ATTACHMENT0+be;me.length=Le.length,Ie=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(me)}function Wt(k){return C!==k?(r.useProgram(k),C=k,!0):!1}const dt={[zr]:r.FUNC_ADD,[xb]:r.FUNC_SUBTRACT,[yb]:r.FUNC_REVERSE_SUBTRACT};dt[Sb]=r.MIN,dt[Mb]=r.MAX;const _t={[bb]:r.ZERO,[Eb]:r.ONE,[Tb]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[Ub]:r.SRC_ALPHA_SATURATE,[wb]:r.DST_COLOR,[Rb]:r.DST_ALPHA,[Ab]:r.ONE_MINUS_SRC_COLOR,[fh]:r.ONE_MINUS_SRC_ALPHA,[Db]:r.ONE_MINUS_DST_COLOR,[Cb]:r.ONE_MINUS_DST_ALPHA,[Nb]:r.CONSTANT_COLOR,[Lb]:r.ONE_MINUS_CONSTANT_COLOR,[Ob]:r.CONSTANT_ALPHA,[Pb]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(k,Ae,me,Ie,Le,be,qe,tt,tn,wt){if(k===Ma){y===!0&&(Ge(r.BLEND),y=!1);return}if(y===!1&&(Te(r.BLEND),y=!0),k!==_b){if(k!==S||wt!==j){if((w!==zr||V!==zr)&&(r.blendEquation(r.FUNC_ADD),w=zr,V=zr),wt)switch(k){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bv:r.blendFunc(r.ONE,r.ONE);break;case Ev:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",k);break}else switch(k){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ev:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",k);break}N=null,O=null,F=null,z=null,T.set(0,0,0),B=0,S=k,j=wt}return}Le=Le||Ae,be=be||me,qe=qe||Ie,(Ae!==w||Le!==V)&&(r.blendEquationSeparate(dt[Ae],dt[Le]),w=Ae,V=Le),(me!==N||Ie!==O||be!==F||qe!==z)&&(r.blendFuncSeparate(_t[me],_t[Ie],_t[be],_t[qe]),N=me,O=Ie,F=be,z=qe),(tt.equals(T)===!1||tn!==B)&&(r.blendColor(tt.r,tt.g,tt.b,tn),T.copy(tt),B=tn),S=k,j=!1}function ct(k,Ae){k.side===ki?Ge(r.CULL_FACE):Te(r.CULL_FACE);let me=k.side===Zn;Ae&&(me=!me),on(me),k.blending===Hs&&k.transparent===!1?Lt(Ma):Lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ie=k.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function on(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function qt(k){k!==mb?(Te(r.CULL_FACE),k!==K&&(k===Mv?r.cullFace(r.BACK):k===gb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),K=k}function Tn(k){k!==ue&&(I&&r.lineWidth(k),ue=k)}function q(k,Ae,me){k?(Te(r.POLYGON_OFFSET_FILL),(pe!==Ae||X!==me)&&(pe=Ae,X=me,f.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,me))):Ge(r.POLYGON_OFFSET_FILL)}function en(k){k?Te(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function ht(k){k===void 0&&(k=r.TEXTURE0+L-1),Se!==k&&(r.activeTexture(k),Se=k)}function Ht(k,Ae,me){me===void 0&&(Se===null?me=r.TEXTURE0+L-1:me=Se);let Ie=P[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},P[me]=Ie),(Ie.type!==k||Ie.texture!==Ae)&&(Se!==me&&(r.activeTexture(me),Se=me),r.bindTexture(k,Ae||Me[k]),Ie.type=k,Ie.texture=Ae)}function Ce(){const k=P[Se];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Kt(){try{r.compressedTexImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function J(){try{r.texSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function we(){try{r.texStorage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function Oe(){try{r.texStorage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function fe(){try{r.texImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function de(){try{r.texImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Pe(k){return v[k]!==void 0?v[k]:r.getParameter(k)}function Fe(k,Ae){v[k]!==Ae&&(r.pixelStorei(k,Ae),v[k]=Ae)}function Ne(k){Re.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Re.copy(k))}function De(k){Ue.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ue.copy(k))}function it(k,Ae){let me=p.get(Ae);me===void 0&&(me=new WeakMap,p.set(Ae,me));let Ie=me.get(k);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ae,k.name),me.set(k,Ie))}function at(k,Ae){const Ie=p.get(Ae).get(k);m.get(Ae)!==Ie&&(r.uniformBlockBinding(Ae,Ie,k.__bindingPointIndex),m.set(Ae,Ie))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Se=null,P={},g={},M=new WeakMap,E=[],C=null,y=!1,S=null,w=null,N=null,O=null,V=null,F=null,z=null,T=new Ct(0,0,0),B=0,j=!1,G=null,K=null,ue=null,pe=null,X=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Te,disable:Ge,bindFramebuffer:et,drawBuffers:Je,useProgram:Wt,setBlending:Lt,setMaterial:ct,setFlipSided:on,setCullFace:qt,setLineWidth:Tn,setPolygonOffset:q,setScissorTest:en,activeTexture:ht,bindTexture:Ht,unbindTexture:Ce,compressedTexImage2D:Kt,compressedTexImage3D:U,texImage2D:fe,texImage3D:de,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Ne,viewport:De,reset:pt}}function SC(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,b){return E?new OffscreenCanvas(U,b):ou("canvas")}function y(U,b,J){let _e=1;const Ee=Kt(U);if((Ee.width>J||Ee.height>J)&&(_e=J/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const we=Math.floor(_e*Ee.width),Oe=Math.floor(_e*Ee.height);g===void 0&&(g=C(we,Oe));const fe=b?C(we,Oe):g;return fe.width=we,fe.height=Oe,fe.getContext("2d").drawImage(U,0,0,we,Oe),nt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+we+"x"+Oe+")."),fe}else return"data"in U&&nt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),U;return U}function S(U){return U.generateMipmaps}function w(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,b,J,_e,Ee,we=!1){if(U!==null){if(r[U]!==void 0)return r[U];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Oe;_e&&(Oe=e.get("EXT_texture_norm16"),Oe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=b;if(b===r.RED&&(J===r.FLOAT&&(fe=r.R32F),J===r.HALF_FLOAT&&(fe=r.R16F),J===r.UNSIGNED_BYTE&&(fe=r.R8),J===r.UNSIGNED_SHORT&&Oe&&(fe=Oe.R16_EXT),J===r.SHORT&&Oe&&(fe=Oe.R16_SNORM_EXT)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.R8UI),J===r.UNSIGNED_SHORT&&(fe=r.R16UI),J===r.UNSIGNED_INT&&(fe=r.R32UI),J===r.BYTE&&(fe=r.R8I),J===r.SHORT&&(fe=r.R16I),J===r.INT&&(fe=r.R32I)),b===r.RG&&(J===r.FLOAT&&(fe=r.RG32F),J===r.HALF_FLOAT&&(fe=r.RG16F),J===r.UNSIGNED_BYTE&&(fe=r.RG8),J===r.UNSIGNED_SHORT&&Oe&&(fe=Oe.RG16_EXT),J===r.SHORT&&Oe&&(fe=Oe.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RG8UI),J===r.UNSIGNED_SHORT&&(fe=r.RG16UI),J===r.UNSIGNED_INT&&(fe=r.RG32UI),J===r.BYTE&&(fe=r.RG8I),J===r.SHORT&&(fe=r.RG16I),J===r.INT&&(fe=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),J===r.UNSIGNED_INT&&(fe=r.RGB32UI),J===r.BYTE&&(fe=r.RGB8I),J===r.SHORT&&(fe=r.RGB16I),J===r.INT&&(fe=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),J===r.UNSIGNED_INT&&(fe=r.RGBA32UI),J===r.BYTE&&(fe=r.RGBA8I),J===r.SHORT&&(fe=r.RGBA16I),J===r.INT&&(fe=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGB16_EXT),J===r.SHORT&&Oe&&(fe=Oe.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),b===r.RGBA){const de=we?su:Mt.getTransfer(Ee);J===r.FLOAT&&(fe=r.RGBA32F),J===r.HALF_FLOAT&&(fe=r.RGBA16F),J===r.UNSIGNED_BYTE&&(fe=de===It?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGBA16_EXT),J===r.SHORT&&Oe&&(fe=Oe.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function V(U,b){let J;return U?b===null||b===Zi||b===il?J=r.DEPTH24_STENCIL8:b===Wi?J=r.DEPTH32F_STENCIL8:b===nl&&(J=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===il?J=r.DEPTH_COMPONENT24:b===Wi?J=r.DEPTH_COMPONENT32F:b===nl&&(J=r.DEPTH_COMPONENT16),J}function F(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),B(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),G(b)}function B(U){const b=s.get(U);if(b.__webglInit===void 0)return;const J=U.source,_e=M.get(J);if(_e){const Ee=_e[b.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&j(U),Object.keys(_e).length===0&&M.delete(J)}s.remove(U)}function j(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const J=U.source,_e=M.get(J);delete _e[b.__cacheKey],f.memory.textures--}function G(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Ee=0;Ee<b.__webglFramebuffer[_e].length;Ee++)r.deleteFramebuffer(b.__webglFramebuffer[_e][Ee]);else r.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)r.deleteFramebuffer(b.__webglFramebuffer[_e]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=U.textures;for(let _e=0,Ee=J.length;_e<Ee;_e++){const we=s.get(J[_e]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),f.memory.textures--),s.remove(J[_e])}s.remove(U)}let K=0;function ue(){K=0}function pe(){return K}function X(U){K=U}function L(){const U=K;return U>=l.maxTextures&&nt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),K+=1,U}function I(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function se(U,b){const J=s.get(U);if(U.isVideoTexture&&Ht(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const _e=U.image;if(_e===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,U,b);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function ge(U,b){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ge(J,U,b);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function Se(U,b){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ge(J,U,b);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function P(U,b){const J=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){et(J,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const Q={[tl]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[xh]:r.MIRRORED_REPEAT},ye={[Un]:r.NEAREST,[zb]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Dd]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},Re={[Gb]:r.NEVER,[jb]:r.ALWAYS,[Vb]:r.LESS,[gp]:r.LEQUAL,[kb]:r.EQUAL,[vp]:r.GEQUAL,[Wb]:r.GREATER,[Xb]:r.NOTEQUAL};function Ue(U,b){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Dd||b.magFilter===Ec||b.magFilter===Hr||b.minFilter===Bn||b.minFilter===Dd||b.minFilter===Ec||b.minFilter===Hr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Q[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Ec&&b.minFilter!==Hr||b.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function oe(U,b){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const _e=b.source;let Ee=M.get(_e);Ee===void 0&&(Ee={},M.set(_e,Ee));const we=I(b);if(we!==U.__cacheKey){Ee[we]===void 0&&(Ee[we]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),Ee[we].usedTimes++;const Oe=Ee[U.__cacheKey];Oe!==void 0&&(Ee[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&j(b)),U.__cacheKey=we,U.__webglTexture=Ee[we].texture}return J}function Me(U,b,J){return Math.floor(Math.floor(U/J)/b)}function Te(U,b,J,_e){const we=U.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,_e,b.data);else{we.sort((Fe,Ne)=>Fe.start-Ne.start);let Oe=0;for(let Fe=1;Fe<we.length;Fe++){const Ne=we[Oe],De=we[Fe],it=Ne.start+Ne.count,at=Me(De.start,b.width,4),pt=Me(Ne.start,b.width,4);De.start<=it+1&&at===pt&&Me(De.start+De.count-1,b.width,4)===at?Ne.count=Math.max(Ne.count,De.start+De.count-Ne.start):(++Oe,we[Oe]=De)}we.length=Oe+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),de=i.getParameter(r.UNPACK_SKIP_PIXELS),Pe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Ne=we.length;Fe<Ne;Fe++){const De=we[Fe],it=Math.floor(De.start/4),at=Math.ceil(De.count/4),pt=it%b.width,k=Math.floor(it/b.width),Ae=at,me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,pt,k,Ae,me,J,_e,b.data)}U.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,de),i.pixelStorei(r.UNPACK_SKIP_ROWS,Pe)}}function Ge(U,b,J){let _e=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=r.TEXTURE_3D);const Ee=oe(U,b),we=b.source;i.bindTexture(_e,U.__webglTexture,r.TEXTURE0+J);const Oe=s.get(we);if(we.version!==Oe.__version||Ee===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Ie=b.colorSpace===fr?null:Mt.getPrimaries(b.colorSpace),Le=b.colorSpace===fr||me===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let de=y(b.image,!1,l.maxTextureSize);de=Ce(b,de);const Pe=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ne=O(b.internalFormat,Pe,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Ue(_e,b);let De;const it=b.mipmaps,at=b.isVideoTexture!==!0,pt=Oe.__version===void 0||Ee===!0,k=we.dataReady,Ae=F(b,de);if(b.isDepthTexture)Ne=V(b.format===Gr,b.type),pt&&(at?i.texStorage2D(r.TEXTURE_2D,1,Ne,de.width,de.height):i.texImage2D(r.TEXTURE_2D,0,Ne,de.width,de.height,0,Pe,Fe,null));else if(b.isDataTexture)if(it.length>0){at&&pt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,it[0].width,it[0].height);for(let me=0,Ie=it.length;me<Ie;me++)De=it[me],at?k&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Fe,De.data):i.texImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,Pe,Fe,De.data);b.generateMipmaps=!1}else at?(pt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,de.width,de.height),k&&Te(b,de,Pe,Fe)):i.texImage2D(r.TEXTURE_2D,0,Ne,de.width,de.height,0,Pe,Fe,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,it[0].width,it[0].height,de.depth);for(let me=0,Ie=it.length;me<Ie;me++)if(De=it[me],b.format!==Ui)if(Pe!==null)if(at){if(k)if(b.layerUpdates.size>0){const Le=Jv(De.width,De.height,b.format,b.type);for(const be of b.layerUpdates){const qe=De.data.subarray(be*Le/De.data.BYTES_PER_ELEMENT,(be+1)*Le/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,be,De.width,De.height,1,Pe,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Pe,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,De.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Pe,Fe,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,Pe,Fe,De.data)}else{at&&pt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,it[0].width,it[0].height);for(let me=0,Ie=it.length;me<Ie;me++)De=it[me],b.format!==Ui?Pe!==null?at?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Pe,De.data):i.compressedTexImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,De.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Fe,De.data):i.texImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,Pe,Fe,De.data)}else if(b.isDataArrayTexture)if(at){if(pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,de.width,de.height,de.depth),k)if(b.layerUpdates.size>0){const me=Jv(de.width,de.height,b.format,b.type);for(const Ie of b.layerUpdates){const Le=de.data.subarray(Ie*me/de.data.BYTES_PER_ELEMENT,(Ie+1)*me/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Pe,Fe,Le)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Fe,de.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Pe,Fe,de.data);else if(b.isData3DTexture)at?(pt&&i.texStorage3D(r.TEXTURE_3D,Ae,Ne,de.width,de.height,de.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Fe,de.data)):i.texImage3D(r.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Pe,Fe,de.data);else if(b.isFramebufferTexture){if(pt)if(at)i.texStorage2D(r.TEXTURE_2D,Ae,Ne,de.width,de.height);else{let me=de.width,Ie=de.height;for(let Le=0;Le<Ae;Le++)i.texImage2D(r.TEXTURE_2D,Le,Ne,me,Ie,0,Pe,Fe,null),me>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),v.add(b),me.onpaint=tt=>{const tn=tt.changedElements;for(const wt of v)tn.includes(wt.image)&&(wt.needsUpdate=!0)},me.requestPaint();return}const Ie=0,Le=r.RGBA,be=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ie,Le,be,qe,de),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const me=Kt(it[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,Ie=it.length;me<Ie;me++)De=it[me],at?k&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,Pe,Fe,De):i.texImage2D(r.TEXTURE_2D,me,Ne,Pe,Fe,De);b.generateMipmaps=!1}else if(at){if(pt){const me=Kt(de);i.texStorage2D(r.TEXTURE_2D,Ae,Ne,me.width,me.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,Fe,de)}else i.texImage2D(r.TEXTURE_2D,0,Ne,Pe,Fe,de);S(b)&&w(_e),Oe.__version=we.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,J){if(b.image.length!==6)return;const _e=oe(U,b),Ee=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+J);const we=s.get(Ee);if(Ee.version!==we.__version||_e===!0){i.activeTexture(r.TEXTURE0+J);const Oe=Mt.getPrimaries(Mt.workingColorSpace),fe=b.colorSpace===fr?null:Mt.getPrimaries(b.colorSpace),de=b.colorSpace===fr||Oe===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!Pe&&!Fe?Ne[be]=y(b.image[be],!0,l.maxCubemapSize):Ne[be]=Fe?b.image[be].image:b.image[be],Ne[be]=Ce(b,Ne[be]);const De=Ne[0],it=c.convert(b.format,b.colorSpace),at=c.convert(b.type),pt=O(b.internalFormat,it,at,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Ae=we.__version===void 0||_e===!0,me=Ee.dataReady;let Ie=F(b,De);Ue(r.TEXTURE_CUBE_MAP,b);let Le;if(Pe){k&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,De.width,De.height);for(let be=0;be<6;be++){Le=Ne[be].mipmaps;for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];b.format!==Ui?it!==null?k?me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,pt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,pt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Le=b.mipmaps,k&&Ae){Le.length>0&&Ie++;const be=Kt(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){k?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,it,at,Ne[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,Ne[be].width,Ne[be].height,0,it,at,Ne[be].data);for(let qe=0;qe<Le.length;qe++){const tn=Le[qe].image[be].image;k?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,tn.width,tn.height,it,at,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,pt,tn.width,tn.height,0,it,at,tn.data)}}else{k?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,it,at,Ne[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,it,at,Ne[be]);for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];k?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,it,at,tt.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,pt,it,at,tt.image[be])}}}S(b)&&w(r.TEXTURE_CUBE_MAP),we.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Je(U,b,J,_e,Ee,we){const Oe=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),de=O(J.internalFormat,Oe,fe,J.normalized,J.colorSpace),Pe=s.get(b),Fe=s.get(J);if(Fe.__renderTarget=b,!Pe.__hasExternalTextures){const Ne=Math.max(1,b.width>>we),De=Math.max(1,b.height>>we);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,we,de,Ne,De,b.depth,0,Oe,fe,null):i.texImage2D(Ee,we,de,Ne,De,0,Oe,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Ee,Fe.__webglTexture,0,en(b)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Ee,Fe.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(U,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const _e=b.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,we=V(b.stencilBuffer,Ee),Oe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),we,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),we,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,we,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,U)}else{const _e=b.textures;for(let Ee=0;Ee<_e.length;Ee++){const we=_e[Ee],Oe=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),de=O(we.internalFormat,Oe,fe,we.normalized,we.colorSpace);ht(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),de,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),de,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,de,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(U,b,J){const _e=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(b.depthTexture);if(Ee.__renderTarget=b,(!Ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===Ra?Ne=r.DEPTH_COMPONENT24:b.depthTexture.format===Gr&&(Ne=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ne,b.width,b.height,0,Pe,Fe,null)}}else se(b.depthTexture,0);const we=Ee.__webglTexture,Oe=en(b),fe=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,de=b.depthTexture.format===Gr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ra)ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,we,0);else if(b.depthTexture.format===Gr)ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,we,0);else throw new Error("Unknown depthTexture format")}function _t(U){const b=s.get(U),J=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),b.__depthDisposeCallback=Ee}b.__boundDepthTexture=_e}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let _e=0;_e<6;_e++)dt(b.__webglFramebuffer[_e],U,_e);else{const _e=U.texture.mipmaps;_e&&_e.length>0?dt(b.__webglFramebuffer[0],U,0):dt(b.__webglFramebuffer,U,0)}else if(J){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=r.createRenderbuffer(),Wt(b.__webglDepthbuffer[_e],U,!1);else{const Ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,we)}}else{const _e=U.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Wt(b.__webglDepthbuffer,U,!1);else{const Ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(U,b,J){const _e=s.get(U);b!==void 0&&Je(_e.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&_t(U)}function ct(U){const b=U.texture,J=s.get(U),_e=s.get(b);U.addEventListener("dispose",T);const Ee=U.textures,we=U.isWebGLCubeRenderTarget===!0,Oe=Ee.length>1;if(Oe||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=b.version,f.memory.textures++),we){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let de=0;de<b.mipmaps.length;de++)J.__webglFramebuffer[fe][de]=r.createFramebuffer()}else J.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)J.__webglFramebuffer[fe]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let fe=0,de=Ee.length;fe<de;fe++){const Pe=s.get(Ee[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&ht(U)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<Ee.length;fe++){const de=Ee[fe];J.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Pe=c.convert(de.format,de.colorSpace),Fe=c.convert(de.type),Ne=O(de.internalFormat,Pe,Fe,de.normalized,de.colorSpace,U.isXRRenderTarget===!0),De=en(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ne,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Je(J.__webglFramebuffer[fe][de],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Je(J.__webglFramebuffer[fe],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(b)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let fe=0,de=Ee.length;fe<de;fe++){const Pe=Ee[fe],Fe=s.get(Pe);let Ne=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Fe.__webglTexture),Ue(Ne,Pe),Je(J.__webglFramebuffer,U,Pe,r.COLOR_ATTACHMENT0+fe,Ne,0),S(Pe)&&w(Ne)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,_e.__webglTexture),Ue(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Je(J.__webglFramebuffer[de],U,b,r.COLOR_ATTACHMENT0,fe,de);else Je(J.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,fe,0);S(b)&&w(fe),i.unbindTexture()}U.depthBuffer&&_t(U)}function on(U){const b=U.textures;for(let J=0,_e=b.length;J<_e;J++){const Ee=b[J];if(S(Ee)){const we=N(U),Oe=s.get(Ee).__webglTexture;i.bindTexture(we,Oe),w(we),i.unbindTexture()}}}const qt=[],Tn=[];function q(U){if(U.samples>0){if(ht(U)===!1){const b=U.textures,J=U.width,_e=U.height;let Ee=r.COLOR_BUFFER_BIT;const we=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(U),fe=b.length>1;if(fe)for(let Pe=0;Pe<b.length;Pe++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const de=U.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=s.get(b[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,J,_e,0,0,J,_e,Ee,r.NEAREST),m===!0&&(qt.length=0,Tn.length=0,qt.push(r.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(qt.push(we),Tn.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Tn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<b.length;Pe++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=s.get(b[Pe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,Fe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function en(U){return Math.min(l.maxSamples,U.samples)}function ht(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(U){const b=f.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function Ce(U,b){const J=U.colorSpace,_e=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==ru&&J!==fr&&(Mt.getTransfer(J)===It?(_e!==Ui||Ee!==li)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",J)),b}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=L,this.resetTextureUnits=ue,this.getTextureUnits=pe,this.setTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=Se,this.setTextureCube=P,this.rebindTextures=Lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function MC(r,e){function i(s,l=fr){let c;const f=Mt.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ex)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Q_)return r.BYTE;if(s===J_)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===tx)return r.ALPHA;if(s===nx)return r.RGB;if(s===Ui)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Gr)return r.DEPTH_STENCIL;if(s===ix)return r.RED;if(s===hp)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===Kc||s===Qc||s===Jc||s===$c)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yh||s===Sh||s===Mh||s===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh||s===Th||s===Ah||s===Rh||s===Ch||s===iu||s===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Eh||s===Th)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ah)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rh)return c.COMPRESSED_R11_EAC;if(s===Ch)return c.COMPRESSED_SIGNED_R11_EAC;if(s===iu)return c.COMPRESSED_RG11_EAC;if(s===wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dh||s===Uh||s===Nh||s===Lh||s===Oh||s===Ph||s===Fh||s===Bh||s===zh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ph)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ih)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wh||s===Xh||s===jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Wh)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qh||s===Yh||s===au||s===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===qh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Yh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===au)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const bC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new dx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Oi({vertexShader:bC,fragmentShader:EC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends jr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new TC,S={},w=i.getContextAttributes();let N=null,O=null;const V=[],F=[],z=new Nt;let T=null;const B=new yi;B.viewport=new sn;const j=new yi;j.viewport=new sn;const G=[B,j],K=new FE;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Me=V[oe];return Me===void 0&&(Me=new zd,V[oe]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(oe){let Me=V[oe];return Me===void 0&&(Me=new zd,V[oe]=Me),Me.getGripSpace()},this.getHand=function(oe){let Me=V[oe];return Me===void 0&&(Me=new zd,V[oe]=Me),Me.getHandSpace()};function X(oe){const Me=F.indexOf(oe.inputSource);if(Me===-1)return;const Te=V[Me];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,p||f),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function L(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",I);for(let oe=0;oe<V.length;oe++){const Me=F[oe];Me!==null&&(F[oe]=null,V[oe].disconnect(Me))}ue=null,pe=null,y.reset();for(const oe in S)delete S[oe];e.setRenderTarget(N),M=null,g=null,v=null,l=null,O=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,s.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,s.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",L),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,et=null;w.depth&&(et=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=w.stencil?Gr:Ra,Ge=w.stencil?il:Zi);const Je={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new qi(g.textureWidth,g.textureHeight,{format:Ui,type:li,depthTexture:new Ws(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new qi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:li,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ue.setContext(l),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(oe){for(let Me=0;Me<oe.removed.length;Me++){const Te=oe.removed[Me],Ge=F.indexOf(Te);Ge>=0&&(F[Ge]=null,V[Ge].disconnect(Te))}for(let Me=0;Me<oe.added.length;Me++){const Te=oe.added[Me];let Ge=F.indexOf(Te);if(Ge===-1){for(let Je=0;Je<V.length;Je++)if(Je>=F.length){F.push(Te),Ge=Je;break}else if(F[Je]===null){F[Je]=Te,Ge=Je;break}if(Ge===-1)break}const et=V[Ge];et&&et.connect(Te)}}const se=new ie,ge=new ie;function Se(oe,Me,Te){se.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(Te.matrixWorld);const Ge=se.distanceTo(ge),et=Me.projectionMatrix.elements,Je=Te.projectionMatrix.elements,Wt=et[14]/(et[10]-1),dt=et[14]/(et[10]+1),_t=(et[9]+1)/et[5],Lt=(et[9]-1)/et[5],ct=(et[8]-1)/et[0],on=(Je[8]+1)/Je[0],qt=Wt*ct,Tn=Wt*on,q=Ge/(-ct+on),en=q*-ct;if(Me.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(en),oe.translateZ(q),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),et[10]===-1)oe.projectionMatrix.copy(Me.projectionMatrix),oe.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ht=Wt+q,Ht=dt+q,Ce=qt-en,Kt=Tn+(Ge-en),U=_t*dt/Ht*ht,b=Lt*dt/Ht*ht;oe.projectionMatrix.makePerspective(Ce,Kt,U,b,ht,Ht),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function P(oe,Me){Me===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Me.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let Me=oe.near,Te=oe.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),K.near=j.near=B.near=Me,K.far=j.far=B.far=Te,(ue!==K.near||pe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,pe=K.far),K.layers.mask=oe.layers.mask|6,B.layers.mask=K.layers.mask&-5,j.layers.mask=K.layers.mask&-3;const Ge=oe.parent,et=K.cameras;P(K,Ge);for(let Je=0;Je<et.length;Je++)P(et[Je],Ge);et.length===2?Se(K,B,j):K.projectionMatrix.copy(B.projectionMatrix),Q(oe,K,Ge)};function Q(oe,Me,Te){Te===null?oe.matrix.copy(Me.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Me.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Me.projectionMatrix),oe.projectionMatrixInverse.copy(Me.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Qh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(oe){return S[oe]};let ye=null;function Re(oe,Me){if(_=Me.getViewerPose(p||f),E=Me,_!==null){const Te=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ge=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let dt=0;dt<Te.length;dt++){const _t=Te[dt];let Lt=null;if(M!==null)Lt=M.getViewport(_t);else{const on=v.getViewSubImage(g,_t);Lt=on.viewport,dt===0&&(e.setRenderTargetTextures(O,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(O))}let ct=G[dt];ct===void 0&&(ct=new yi,ct.layers.enable(dt),ct.viewport=new sn,G[dt]=ct),ct.matrix.fromArray(_t.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(_t.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&(K.matrix.copy(ct.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push(ct)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const dt=v.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if(et&&et.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let dt=0;dt<Te.length;dt++){const _t=Te[dt].camera;if(_t){let Lt=S[_t];Lt||(Lt=new dx,S[_t]=Lt);const ct=v.getCameraImage(_t);Lt.sourceTexture=ct}}}}for(let Te=0;Te<V.length;Te++){const Ge=F[Te],et=V[Te];Ge!==null&&et!==void 0&&et.update(Ge,Me,p||f)}ye&&ye(oe,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ue=new gx;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(oe){ye=oe},this.dispose=function(){}}}const RC=new fn,bx=new st;bx.set(-1,0,0,0,1,0,0,0,1);function CC(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,hx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,w,N,O){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,O)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,w,N):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),N=w.envMap,O=w.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(RC.makeRotationFromEuler(O)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(bx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,w,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=N*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function wC(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const O=N.program;s.uniformBlockBinding(w,O)}function p(w,N){let O=l[w.id];O===void 0&&(E(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",y));const V=N.program;s.updateUBOMapping(w,V);const F=e.render.frame;c[w.id]!==F&&(g(w),c[w.id]=F)}function _(w){const N=v();w.__bindingPointIndex=N;const O=r.createBuffer(),V=w.__size,F=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,V,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,O),O}function v(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],O=w.uniforms,V=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let F=0,z=O.length;F<z;F++){const T=Array.isArray(O[F])?O[F]:[O[F]];for(let B=0,j=T.length;B<j;B++){const G=T[B];if(M(G,F,B,V)===!0){const K=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let X=0;X<ue.length;X++){const L=ue[X],I=C(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,K+pe,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):ArrayBuffer.isView(L)?G.__data.set(new L.constructor(L.buffer,L.byteOffset,G.__data.length)):(L.toArray(G.__data,pe),pe+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,N,O,V){const F=w.value,z=N+"_"+O;if(V[z]===void 0)return typeof F=="number"||typeof F=="boolean"?V[z]=F:ArrayBuffer.isView(F)?V[z]=F.slice():V[z]=F.clone(),!0;{const T=V[z];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return V[z]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(T.equals(F)===!1)return T.copy(F),!0}}return!1}function E(w){const N=w.uniforms;let O=0;const V=16;for(let z=0,T=N.length;z<T;z++){const B=Array.isArray(N[z])?N[z]:[N[z]];for(let j=0,G=B.length;j<G;j++){const K=B[j],ue=Array.isArray(K.value)?K.value:[K.value];for(let pe=0,X=ue.length;pe<X;pe++){const L=ue[pe],I=C(L),se=O%V,ge=se%I.boundary,Se=se+ge;O+=ge,Se!==0&&V-Se<I.storage&&(O+=V-Se),K.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=I.storage}}}const F=O%V;return F>0&&(O+=V-F),w.__size=O,w.__cache={},this}function C(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),N}function y(w){const N=w.target;N.removeEventListener("dispose",y);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function UC(){return Gi===null&&(Gi=new _E(DC,16,16,kr,Aa),Gi.name="DFG_LUT",Gi.minFilter=Bn,Gi.magFilter=Bn,Gi.wrapS=Sa,Gi.wrapT=Sa,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class NC{constructor(e={}){const{canvas:i=Yb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=li}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,y=new Set([mp,pp,hp]),S=new Set([li,Zi,nl,il,fp,dp]),w=new Uint32Array(4),N=new Int32Array(4),O=new ie;let V=null,F=null;const z=[],T=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let G=!1,K=null;this._outputColorSpace=xi;let ue=0,pe=0,X=null,L=-1,I=null;const se=new sn,ge=new sn;let Se=null;const P=new Ct(0);let Q=0,ye=i.width,Re=i.height,Ue=1,oe=null,Me=null;const Te=new sn(0,0,ye,Re),Ge=new sn(0,0,ye,Re);let et=!1;const Je=new yp;let Wt=!1,dt=!1;const _t=new fn,Lt=new ie,ct=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Tn(){return X===null?Ue:1}let q=s;function en(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",tt,!1),q===null){const Y="webgl2";if(q=en(Y,A),q===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let ht,Ht,Ce,Kt,U,b,J,_e,Ee,we,Oe,fe,de,Pe,Fe,Ne,De,it,at,pt,k,Ae,me;function Ie(){ht=new UA(q),ht.init(),k=new MC(q,ht),Ht=new bA(q,ht,e,k),Ce=new yC(q,ht),Ht.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Kt=new OA(q),U=new sC,b=new SC(q,ht,Ce,U,Ht,k,Kt),J=new DA(j),_e=new zE(q),Ae=new SA(q,_e),Ee=new NA(q,_e,Kt,Ae),we=new FA(q,Ee,_e,Ae,Kt),it=new PA(q,Ht,b),Fe=new EA(U),Oe=new rC(j,J,ht,Ht,Ae,Fe),fe=new CC(j,U),de=new lC,Pe=new pC(ht),De=new yA(j,J,Ce,we,E,m),Ne=new xC(j,we,Ht),me=new wC(q,Kt,Ht,Ce),at=new MA(q,ht,Kt),pt=new LA(q,ht,Kt),Kt.programs=Oe.programs,j.capabilities=Ht,j.extensions=ht,j.properties=U,j.renderLists=de,j.shadowMap=Ne,j.state=Ce,j.info=Kt}Ie(),C!==li&&(B=new zA(C,i.width,i.height,l,c));const Le=new AC(j,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(A){A!==void 0&&(Ue=A,this.setSize(ye,Re,!1))},this.getSize=function(A){return A.set(ye,Re)},this.setSize=function(A,Y,ae=!0){if(Le.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=A,Re=Y,i.width=Math.floor(A*Ue),i.height=Math.floor(Y*Ue),ae===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ye*Ue,Re*Ue).floor()},this.setDrawingBufferSize=function(A,Y,ae){ye=A,Re=Y,Ue=ae,i.width=Math.floor(A*ae),i.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(C===li){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,Y,ae,te){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,Y,ae,te),Ce.viewport(se.copy(Te).multiplyScalar(Ue).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,Y,ae,te){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,Y,ae,te),Ce.scissor(ge.copy(Ge).multiplyScalar(Ue).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Ce.setScissorTest(et=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){Me=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let te=0;if(A){let ne=!1;if(X!==null){const ze=X.texture.format;ne=y.has(ze)}if(ne){const ze=X.texture.type,ke=S.has(ze),Be=De.getClearColor(),Xe=De.getClearAlpha(),We=Be.r,Ke=Be.g,ot=Be.b;ke?(w[0]=We,w[1]=Ke,w[2]=ot,w[3]=Xe,q.clearBufferuiv(q.COLOR,0,w)):(N[0]=We,N[1]=Ke,N[2]=ot,N[3]=Xe,q.clearBufferiv(q.COLOR,0,N))}else te|=q.COLOR_BUFFER_BIT}Y&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),De.dispose(),de.dispose(),Pe.dispose(),U.dispose(),J.dispose(),we.dispose(),Ae.dispose(),me.dispose(),Oe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ks),Le.removeEventListener("sessionend",Qs),Nn.stop()};function be(A){A.preventDefault(),Uv("WebGLRenderer: Context Lost."),G=!0}function qe(){Uv("WebGLRenderer: Context Restored."),G=!1;const A=Kt.autoReset,Y=Ne.enabled,ae=Ne.autoUpdate,te=Ne.needsUpdate,ne=Ne.type;Ie(),Kt.autoReset=A,Ne.enabled=Y,Ne.autoUpdate=ae,Ne.needsUpdate=te,Ne.type=ne}function tt(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const Y=A.target;Y.removeEventListener("dispose",tn),wt(Y)}function wt(A){ci(A),U.remove(A)}function ci(A){const Y=U.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){Oe.releaseProgram(ae)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,te,ne,ze){Y===null&&(Y=on);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=Na(A,Y,ae,te,ne);Ce.setMaterial(te,ke);let Xe=ae.index,We=1;if(te.wireframe===!0){if(Xe=Ee.getWireframeAttribute(ae),Xe===void 0)return;We=2}const Ke=ae.drawRange,ot=ae.attributes.position;let Ze=Ke.start*We,Tt=(Ke.start+Ke.count)*We;ze!==null&&(Ze=Math.max(Ze,ze.start*We),Tt=Math.min(Tt,(ze.start+ze.count)*We)),Xe!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Xe.count)):ot!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,ot.count));const Qt=Tt-Ze;if(Qt<0||Qt===1/0)return;Ae.setup(ne,te,Be,ae,Xe);let Xt,Ot=at;if(Xe!==null&&(Xt=_e.get(Xe),Ot=pt,Ot.setIndex(Xt)),ne.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*Tn()),Ot.setMode(q.LINES)):Ot.setMode(q.TRIANGLES);else if(ne.isLine){let Pt=te.linewidth;Pt===void 0&&(Pt=1),Ce.setLineWidth(Pt*Tn()),ne.isLineSegments?Ot.setMode(q.LINES):ne.isLineLoop?Ot.setMode(q.LINE_LOOP):Ot.setMode(q.LINE_STRIP)}else ne.isPoints?Ot.setMode(q.POINTS):ne.isSprite&&Ot.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Pt=ne._multiDrawStarts,Ve=ne._multiDrawCounts,Ln=ne._multiDrawCount,mt=Xe?_e.get(Xe).bytesPerElement:1,_n=U.get(te).currentProgram.getUniforms();for(let Qn=0;Qn<Ln;Qn++)_n.setValue(q,"_gl_DrawID",Qn),Ot.render(Pt[Qn]/mt,Ve[Qn])}else if(ne.isInstancedMesh)Ot.renderInstances(Ze,Qt,ne.count);else if(ae.isInstancedBufferGeometry){const Pt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ve=Math.min(ae.instanceCount,Pt);Ot.renderInstances(Ze,Qt,Ve)}else Ot.render(Ze,Qt)};function Kn(A,Y,ae){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,qr(A,Y,ae),A.side=hr,A.needsUpdate=!0,qr(A,Y,ae),A.side=ki):qr(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),F=Pe.get(ae),F.init(Y),T.push(F),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(F.pushLight(ne),ne.castShadow&&F.pushShadow(ne))}),A!==ae&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(F.pushLight(ne),ne.castShadow&&F.pushShadow(ne))}),F.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const ze=ne.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Be=ze[ke];Kn(Be,ae,ne),te.add(Be)}else Kn(ze,ae,ne),te.add(ze)}),F=T.pop(),te},this.compileAsync=function(A,Y,ae=null){const te=this.compile(A,Y,ae);return new Promise(ne=>{function ze(){if(te.forEach(function(ke){U.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){ne(A);return}setTimeout(ze,10)}ht.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let pr=null;function Zs(A){pr&&pr(A)}function Ks(){Nn.stop()}function Qs(){Nn.start()}const Nn=new gx;Nn.setAnimationLoop(Zs),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){pr=A,Le.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Le.addEventListener("sessionstart",Ks),Le.addEventListener("sessionend",Qs),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(A,Y);const ae=Le.enabled===!0&&Le.isPresenting===!0,te=B!==null&&(X===null||ae)&&B.begin(j,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,Y,X),F=Pe.get(A,T.length),F.init(Y),F.state.textureUnits=b.getTextureUnits(),T.push(F),_t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Je.setFromProjectionMatrix(_t,Xi,Y.reversedDepth),dt=this.localClippingEnabled,Wt=Fe.init(this.clippingPlanes,dt),V=de.get(A,z.length),V.init(),z.push(V),Le.enabled===!0&&Le.isPresenting===!0){const ke=j.xr.getDepthSensingMesh();ke!==null&&ln(ke,Y,-1/0,j.sortObjects)}ln(A,Y,0,j.sortObjects),V.finish(),j.sortObjects===!0&&V.sort(oe,Me),qt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,qt&&De.addToRenderList(V,A),this.info.render.frame++,Wt===!0&&Fe.beginShadows();const ne=F.state.shadowsArray;if(Ne.render(ne,A,Y),Wt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&B.hasRenderPass())===!1){const ke=V.opaque,Be=V.transmissive;if(F.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Be.length>0)for(let We=0,Ke=Xe.length;We<Ke;We++){const ot=Xe[We];Ji(ke,Be,A,ot)}qt&&De.render(A);for(let We=0,Ke=Xe.length;We<Ke;We++){const ot=Xe[We];An(V,A,ot,ot.viewport)}}else Be.length>0&&Ji(ke,Be,A,Y),qt&&De.render(A),An(V,A,Y)}X!==null&&pe===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),te&&B.end(j),A.isScene===!0&&A.onAfterRender(j,A,Y),Ae.resetDefaultState(),L=-1,I=null,T.pop(),T.length>0?(F=T[T.length-1],b.setTextureUnits(F.state.textureUnits),Wt===!0&&Fe.setGlobalState(j.clippingPlanes,F.state.camera)):F=null,z.pop(),z.length>0?V=z[z.length-1]:V=null,K!==null&&K.renderEnd()};function ln(A,Y,ae,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)F.pushLightProbeGrid(A);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){te&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const ke=we.update(A),Be=A.material;Be.visible&&V.push(A,ke,Be,ae,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const ke=we.update(A),Be=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Be)){const Xe=ke.groups;for(let We=0,Ke=Xe.length;We<Ke;We++){const ot=Xe[We],Ze=Be[ot.materialIndex];Ze&&Ze.visible&&V.push(A,ke,Ze,ae,ct.z,ot)}}else Be.visible&&V.push(A,ke,Be,ae,ct.z,null)}}const ze=A.children;for(let ke=0,Be=ze.length;ke<Be;ke++)ln(ze[ke],Y,ae,te)}function An(A,Y,ae,te){const{opaque:ne,transmissive:ze,transparent:ke}=A;F.setupLightsView(ae),Wt===!0&&Fe.setGlobalState(j.clippingPlanes,ae),te&&Ce.viewport(se.copy(te)),ne.length>0&&Da(ne,Y,ae),ze.length>0&&Da(ze,Y,ae),ke.length>0&&Da(ke,Y,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ji(A,Y,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[te.id]===void 0){const Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[te.id]=new qi(1,1,{generateMipmaps:!0,type:Ze?Aa:li,minFilter:Hr,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const ze=F.state.transmissionRenderTarget[te.id],ke=te.viewport||se;ze.setSize(ke.z*j.transmissionResolutionScale,ke.w*j.transmissionResolutionScale);const Be=j.getRenderTarget(),Xe=j.getActiveCubeFace(),We=j.getActiveMipmapLevel();j.setRenderTarget(ze),j.getClearColor(P),Q=j.getClearAlpha(),Q<1&&j.setClearColor(16777215,.5),j.clear(),qt&&De.render(ae);const Ke=j.toneMapping;j.toneMapping=ji;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),F.setupLightsView(te),Wt===!0&&Fe.setGlobalState(j.clippingPlanes,te),Da(A,ae,te),b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Tt=0,Qt=Y.length;Tt<Qt;Tt++){const Xt=Y[Tt],{object:Ot,geometry:Pt,material:Ve,group:Ln}=Xt;if(Ve.side===ki&&Ot.layers.test(te.layers)){const mt=Ve.side;Ve.side=Zn,Ve.needsUpdate=!0,hl(Ot,ae,te,Pt,Ve,Ln),Ve.side=mt,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze))}j.setRenderTarget(Be,Xe,We),j.setClearColor(P,Q),ot!==void 0&&(te.viewport=ot),j.toneMapping=Ke}function Da(A,Y,ae){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,ze=A.length;ne<ze;ne++){const ke=A[ne],{object:Be,geometry:Xe,group:We}=ke;let Ke=ke.material;Ke.allowOverride===!0&&te!==null&&(Ke=te),Be.layers.test(ae.layers)&&hl(Be,Y,ae,Xe,Ke,We)}}function hl(A,Y,ae,te,ne,ze){A.onBeforeRender(j,Y,ae,te,ne,ze),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(j,Y,ae,te,A,ze),ne.transparent===!0&&ne.side===ki&&ne.forceSinglePass===!1?(ne.side=Zn,ne.needsUpdate=!0,j.renderBufferDirect(ae,Y,te,ne,A,ze),ne.side=hr,ne.needsUpdate=!0,j.renderBufferDirect(ae,Y,te,ne,A,ze),ne.side=ki):j.renderBufferDirect(ae,Y,te,ne,A,ze),A.onAfterRender(j,Y,ae,te,ne,ze)}function qr(A,Y,ae){Y.isScene!==!0&&(Y=on);const te=U.get(A),ne=F.state.lights,ze=F.state.shadowsArray,ke=ne.state.version,Be=Oe.getParameters(A,ne.state,ze,Y,ae,F.state.lightProbeGridArray),Xe=Oe.getProgramCacheKey(Be);let We=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=J.get(A.envMap||te.environment,Ke),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",tn),We=new Map,te.programs=We);let ot=We.get(Xe);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===ke)return Ua(A,Be),ot}else Be.uniforms=Oe.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,ae,Be),A.onBeforeCompile(Be,j),ot=Oe.acquireProgram(Be,Xe),We.set(Xe,ot),te.uniforms=Be.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),Ua(A,Be),te.needsLights=mr(A),te.lightsStateVersion=ke,te.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=F.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function Js(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=eu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ua(A,Y){const ae=U.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function $s(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,te=A.length;ae<te;ae++){const ne=A[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(O))return ne}return null}function Na(A,Y,ae,te,ne){Y.isScene!==!0&&(Y=on),b.resetTextureUnits();const ze=Y.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Be=X===null?j.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Mt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=J.get(te.envMap||ke,Xe),Ke=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Qt=!!ae.morphAttributes.color;let Xt=ji;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xt=j.toneMapping);const Ot=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=U.get(te),Ln=F.state.lights;if(Wt===!0&&(dt===!0||A!==I)){const Ut=A===I&&te.id===L;Fe.setState(te,A,Ut)}let mt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ln.state.version||Ve.outputColorSpace!==Be||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==We||te.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==ot||Ve.morphTargets!==Ze||Ve.morphNormals!==Tt||Ve.morphColors!==Qt||Ve.toneMapping!==Xt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ve.__version=te.version);let _n=Ve.currentProgram;mt===!0&&(_n=qr(te,Y,ne),K&&te.isNodeMaterial&&K.onUpdateProgram(te,_n,Ve));let Qn=!1,Mi=!1,Jn=!1;const Ft=_n.getUniforms(),Jt=Ve.uniforms;if(Ce.useProgram(_n.program)&&(Qn=!0,Mi=!0,Jn=!0),te.id!==L&&(L=te.id,Mi=!0),Ve.needsLights){const Ut=$s(F.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==Ut&&(Ve.lightProbeGrid=Ut,Mi=!0)}if(Qn||I!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(q,"projectionMatrix",A.projectionMatrix),Ft.setValue(q,"viewMatrix",A.matrixWorldInverse);const Pi=Ft.map.cameraPosition;Pi!==void 0&&Pi.setValue(q,Lt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Mi=!0,Jn=!0)}if(Ve.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ft.setValue(q,"directionalShadowMap",Ln.state.directionalShadowMap,b),Ln.state.spotShadowMap.length>0&&Ft.setValue(q,"spotShadowMap",Ln.state.spotShadowMap,b),Ln.state.pointShadowMap.length>0&&Ft.setValue(q,"pointShadowMap",Ln.state.pointShadowMap,b)),ne.isSkinnedMesh){Ft.setOptional(q,ne,"bindMatrix"),Ft.setOptional(q,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Ft.setValue(q,"boneTexture",Ut.boneTexture,b))}ne.isBatchedMesh&&(Ft.setOptional(q,ne,"batchingTexture"),Ft.setValue(q,"batchingTexture",ne._matricesTexture,b),Ft.setOptional(q,ne,"batchingIdTexture"),Ft.setValue(q,"batchingIdTexture",ne._indirectTexture,b),Ft.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(q,"batchingColorTexture",ne._colorsTexture,b));const bi=ae.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&it.update(ne,ae,_n),(Mi||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,Ft.setValue(q,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(Jt.envMapIntensity.value=Y.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=UC()),Mi){if(Ft.setValue(q,"toneMappingExposure",j.toneMappingExposure),Ve.needsLights&&La(Jt,Jn),ze&&te.fog===!0&&fe.refreshFogUniforms(Jt,ze),fe.refreshMaterialUniforms(Jt,te,Ue,Re,F.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ut=Ve.lightProbeGrid;Jt.probesSH.value=Ut.texture,Jt.probesMin.value.copy(Ut.boundingBox.min),Jt.probesMax.value.copy(Ut.boundingBox.max),Jt.probesResolution.value.copy(Ut.resolution)}eu.upload(q,Js(Ve),Jt,b)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(eu.upload(q,Js(Ve),Jt,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ft.setValue(q,"center",ne.center),Ft.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(q,"normalMatrix",ne.normalMatrix),Ft.setValue(q,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let Pi=0,Pa=Ut.length;Pi<Pa;Pi++){const gr=Ut[Pi];me.update(gr,_n),me.bind(gr,_n)}}return _n}function La(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function mr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,ae){const te=U.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),U.get(A.texture).__webglTexture=Y,U.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=U.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Oa=q.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){X=A,ue=Y,pe=ae;let te=null,ne=!1,ze=!1;if(A){const Be=U.get(A);if(Be.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(q.FRAMEBUFFER,Be.__webglFramebuffer),se.copy(A.viewport),ge.copy(A.scissor),Se=A.scissorTest,Ce.viewport(se),Ce.scissor(ge),Ce.setScissorTest(Se),L=-1;return}else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Be.__boundDepthTexture!==Ke){if(Ke!==null&&U.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const We=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?te=We[Y][ae]:te=We[Y],ne=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?te=U.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[ae]:te=We,se.copy(A.viewport),ge.copy(A.scissor),Se=A.scissorTest}else se.copy(Te).multiplyScalar(Ue).floor(),ge.copy(Ge).multiplyScalar(Ue).floor(),Se=et;if(ae!==0&&(te=Oa),Ce.bindFramebuffer(q.FRAMEBUFFER,te)&&Ce.drawBuffers(A,te),Ce.viewport(se),Ce.scissor(ge),Ce.setScissorTest(Se),ne){const Be=U.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,ae)}else if(ze){const Be=Y;for(let Xe=0;Xe<A.textures.length;Xe++){const We=U.get(A.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,We.__webglTexture,ae,Be)}}else if(A!==null&&ae!==0){const Be=U.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Be.__webglTexture,ae)}L=-1},this.readRenderTargetPixels=function(A,Y,ae,te,ne,ze,ke,Be=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){Ce.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const We=A.textures[Be],Ke=We.format,ot=We.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be),!Ht.textureFormatReadable(Ke)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&ae>=0&&ae<=A.height-ne&&q.readPixels(Y,ae,te,ne,k.convert(Ke),k.convert(ot),ze)}finally{const We=X!==null?U.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,te,ne,ze,ke,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(Y>=0&&Y<=A.width-te&&ae>=0&&ae<=A.height-ne){Ce.bindFramebuffer(q.FRAMEBUFFER,Xe);const We=A.textures[Be],Ke=We.format,ot=We.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be),!Ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,ze.byteLength,q.STREAM_READ),q.readPixels(Y,ae,te,ne,k.convert(Ke),k.convert(ot),0);const Tt=X!==null?U.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,Tt);const Qt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Zb(q,Qt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ze),q.deleteBuffer(Ze),q.deleteSync(Qt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const te=Math.pow(2,-ae),ne=Math.floor(A.image.width*te),ze=Math.floor(A.image.height*te),ke=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;b.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,ke,Be,ne,ze),Ce.unbindTexture()};const dn=q.createFramebuffer(),pl=q.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,te=null,ne=0,ze=0){let ke,Be,Xe,We,Ke,ot,Ze,Tt,Qt;const Xt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ae!==null)ke=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,We=ae.min.x,Ke=ae.min.y,ot=ae.isBox3?ae.min.z:0;else{const Jt=Math.pow(2,-ne);ke=Math.floor(Xt.width*Jt),Be=Math.floor(Xt.height*Jt),A.isDataArrayTexture?Xe=Xt.depth:A.isData3DTexture?Xe=Math.floor(Xt.depth*Jt):Xe=1,We=0,Ke=0,ot=0}te!==null?(Ze=te.x,Tt=te.y,Qt=te.z):(Ze=0,Tt=0,Qt=0);const Ot=k.convert(Y.format),Pt=k.convert(Y.type);let Ve;Y.isData3DTexture?(b.setTexture3D(Y,0),Ve=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Ve=q.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Ve=q.TEXTURE_2D),Ce.activeTexture(q.TEXTURE0),Ce.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ce.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ce.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ln=Ce.getParameter(q.UNPACK_ROW_LENGTH),mt=Ce.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(q.UNPACK_SKIP_PIXELS),Qn=Ce.getParameter(q.UNPACK_SKIP_ROWS),Mi=Ce.getParameter(q.UNPACK_SKIP_IMAGES);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Xt.width),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt.height),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,We),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,Ke),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const Jn=A.isDataArrayTexture||A.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Jt=U.get(A),bi=U.get(Y),Ut=U.get(Jt.__renderTarget),Pi=U.get(bi.__renderTarget);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Pa=0;Pa<Xe;Pa++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(A).__webglTexture,ne,ot+Pa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(Y).__webglTexture,ze,Qt+Pa)),q.blitFramebuffer(We,Ke,ke,Be,Ze,Tt,ke,Be,q.DEPTH_BUFFER_BIT,q.NEAREST);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||U.has(A)){const Jt=U.get(A),bi=U.get(Y);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,dn),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,pl);for(let Ut=0;Ut<Xe;Ut++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,ne,ot+Ut):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Jt.__webglTexture,ne),Ft?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,ze,Qt+Ut):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,ze),ne!==0?q.blitFramebuffer(We,Ke,ke,Be,Ze,Tt,ke,Be,q.COLOR_BUFFER_BIT,q.NEAREST):Ft?q.copyTexSubImage3D(Ve,ze,Ze,Tt,Qt+Ut,We,Ke,ke,Be):q.copyTexSubImage2D(Ve,ze,Ze,Tt,We,Ke,ke,Be);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ve,ze,Ze,Tt,Qt,ke,Be,Xe,Ot,Pt,Xt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,ze,Ze,Tt,Qt,ke,Be,Xe,Ot,Xt.data):q.texSubImage3D(Ve,ze,Ze,Tt,Qt,ke,Be,Xe,Ot,Pt,Xt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ze,Ze,Tt,ke,Be,Ot,Pt,Xt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ze,Ze,Tt,Xt.width,Xt.height,Ot,Xt.data):q.texSubImage2D(q.TEXTURE_2D,ze,Ze,Tt,ke,Be,Ot,Pt,Xt);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Ln),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mt),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,Qn),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,Mi),ze===0&&Y.generateMipmaps&&q.generateMipmap(Ve),Ce.unbindTexture()},this.initRenderTarget=function(A){U.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){ue=0,pe=0,X=null,Ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}function LC(){const r=ce.useRef(null),e=ce.useRef({x:0,y:0,active:!1});return ce.useEffect(()=>{const i=r.current;if(!i)return;const s=new NC({canvas:i,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(window.innerWidth,window.innerHeight);const l=new yi(45,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,0,15);const c=new fE;c.background=new Ct("#0a0a0a"),c.add(new OE("#ffffff",.6));const f=new LE("#ffffff",.8);f.position.set(-5,5,5),c.add(f);const h=document.createElement("canvas");h.width=256,h.height=256;const m=h.getContext("2d"),p=m.createImageData(256,256);for(let j=0;j<p.data.length;j+=4){const G=Math.random()*255;p.data[j]=G,p.data[j+1]=G,p.data[j+2]=G,p.data[j+3]=128}m.putImageData(p,0,0);const _=new ME(h);_.wrapS=tl,_.wrapT=tl,_.repeat.set(4,4);const v=14,g=10,M=30,E=20,C=new dl(v,g,M,E);C.rotateX(-Math.PI*.5);const y=C.attributes.position,S=y.count,w=new Float32Array(S*3);for(let j=0;j<S*3;j++)w[j]=y.array[j];const N=new Oi({side:ki,vertexColors:!1,uniforms:{u_time:{value:0},u_color:{value:new Ct("#1a1a1a")},u_darkColor:{value:new Ct("#0a0a0a")},u_foldShadow:{value:.4},u_texture:{value:_},u_textureScale:{value:4},u_textureBlend:{value:.15},u_lightPos:{value:new ie(-5,5,5)},u_lightSmoothness:{value:.8}},vertexShader:`
        uniform float u_time;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vLightDir;
        varying float vHeight;
        void main() {
          vUv = uv;
          vec3 pos = position;
          vHeight = pos.y;
          float wave = sin(pos.x * 2.0 + u_time) * cos(pos.z * 2.0 + u_time) * 0.05;
          pos.y += max(0.0, pos.y + 0.5) * wave;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vPosition = mvPosition.xyz;
          vNormal = normalize(normalMatrix * normal);
          vLightDir = normalize(u_lightPos - vPosition);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform vec3 u_darkColor;
        uniform float u_foldShadow;
        uniform sampler2D u_texture;
        uniform float u_textureScale;
        uniform float u_textureBlend;
        uniform float u_lightSmoothness;
        uniform vec3 u_lightPos;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vLightDir;
        varying float vHeight;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          vec3 lightReflect = reflect(-vLightDir, vNormal);
          float spec = pow(max(dot(viewDir, lightReflect), 0.0), u_lightSmoothness * 30.0);
          float shadowFactor = pow(1.0 - max(dot(vNormal, vec3(0, 1, 0)), 0.0), 2.0);
          vec3 col = mix(u_color, u_darkColor, shadowFactor * u_foldShadow);
          vec4 tex = texture2D(u_texture, vUv * u_textureScale);
          col = mix(col, tex.rgb, tex.a * u_textureBlend);
          col += spec * 0.8;
          float heightFactor = smoothstep(-0.5, 1.0, vHeight);
          col = mix(col, u_darkColor, heightFactor * 0.5);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),O=new Ki(C,N);c.add(O);let V;const F=()=>{const j=performance.now()/1e3;N.uniforms.u_time.value=j;const G=C.attributes.position.array;for(let K=0;K<S;K++){const ue=w[K*3],pe=w[K*3+1],X=w[K*3+2],L=ue+Math.sin(pe*.5+j*.8)*.15,I=pe+Math.sin(ue*.3+j*.5)*.1+Math.cos(X*.4+j*.3)*.08,se=X+Math.cos(ue*.4+j*.6)*.12,ge=e.current;if(ge.active){const Se=new ie(ge.x*8,ge.y*5,0),Q=new ie(L,I,se).distanceTo(Se);if(Q<3){const ye=(1-Q/3)*.5;G[K*3+1]+=ye}}G[K*3]=L,G[K*3+1]=I,G[K*3+2]=se}C.attributes.position.needsUpdate=!0,C.computeVertexNormals(),s.render(c,l),V=requestAnimationFrame(F)};F();const z=j=>{e.current.x=j.clientX/window.innerWidth*2-1,e.current.y=-(j.clientY/window.innerHeight)*2+1,e.current.active=!0},T=()=>{e.current.active=!1},B=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return i.addEventListener("mousemove",z),i.addEventListener("mouseleave",T),window.addEventListener("resize",B),()=>{cancelAnimationFrame(V),i.removeEventListener("mousemove",z),i.removeEventListener("mouseleave",T),window.removeEventListener("resize",B),C.dispose(),N.dispose(),s.dispose()}},[]),D.jsxs("section",{"code-path":"src\\pages\\Home.tsx:197:5",style:{position:"relative",width:"100%",height:"100vh",backgroundColor:"var(--black)",overflow:"hidden"},children:[D.jsx("canvas",{"code-path":"src\\pages\\Home.tsx:198:7",ref:r,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1}}),D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:199:7",style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%",paddingBottom:"15vh",pointerEvents:"none",textAlign:"center",paddingLeft:"var(--space-md)",paddingRight:"var(--space-md)"},children:[D.jsxs("h1",{"code-path":"src\\pages\\Home.tsx:200:9",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",textShadow:"0 2px 40px rgba(0,0,0,0.5)",wordBreak:"keep-all"},children:["Built by Hand.",D.jsx("br",{"code-path":"src\\pages\\Home.tsx:210:25"}),"Designed to Last."]}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:212:9",style:{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(1.1rem, 2vw, 1.4rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)"},children:"PRICOR HOME — 40 years of design-build remodeling across the Fox Valley"}),D.jsx(En,{"code-path":"src\\pages\\Home.tsx:221:9",to:"/contact",style:{pointerEvents:"auto",marginTop:"var(--space-lg)",border:"1px solid var(--sand)",color:"var(--sand)",padding:"0.75rem 2rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:i=>{i.currentTarget.style.backgroundColor="var(--sand)",i.currentTarget.style.color="var(--black)"},onMouseLeave:i=>{i.currentTarget.style.backgroundColor="transparent",i.currentTarget.style.color="var(--sand)"},children:"Start Your Project"})]})]})}function OC(){return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:246:5",style:{backgroundColor:"var(--slate)",padding:"var(--space-md) 0"},children:D.jsx("div",{"code-path":"src\\pages\\Home.tsx:247:7",className:"container-max trust-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--space-md)"},children:[{metric:"40+ YEARS",desc:"Design-build remodeling since 1985"},{metric:"1,000+ HOMES",desc:"New homes and renovations delivered"},{metric:"FULL-SERVICE",desc:"From kitchens to room additions"}].map(r=>D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:253:11",children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:254:13",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:400,color:"var(--sand)",marginBottom:"var(--space-sm)"},children:r.metric}),D.jsx("div",{"code-path":"src\\pages\\Home.tsx:257:13",style:{borderBottom:"1px solid var(--border-dark)",marginBottom:"var(--space-sm)"}}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:258:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.5)"},children:r.desc})]},r.metric))})})}function PC(){const r=[{num:"01",name:"Kitchen Remodeling",desc:"Custom kitchens designed for how you cook and live",href:"/services/kitchen-remodeling"},{num:"02",name:"Bathroom Remodeling",desc:"Spa-inspired baths that elevate your daily routine",href:"/services/bathroom-remodeling"},{num:"03",name:"Basement Remodeling",desc:"Transform unused space into your favorite room",href:"/services/basement-remodeling"},{num:"04",name:"Room Additions",desc:"Seamless expansions that look original to your home",href:"/services/room-additions"},{num:"05",name:"Home Renovations",desc:"Whole-home updates from concept to completion",href:"/services/home-renovations"},{num:"06",name:"New Construction",desc:"Custom homes built with 40 years of expertise",href:"/services/new-construction"}];return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:280:5",id:"services",style:{backgroundColor:"var(--black)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:281:7",className:"container-max",children:[D.jsx("h2",{"code-path":"src\\pages\\Home.tsx:282:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--white)",marginBottom:"var(--space-lg)",textAlign:"left"},children:"What We Do"}),D.jsx("div",{"code-path":"src\\pages\\Home.tsx:285:9",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--space-md)"},className:"services-grid",children:r.map((e,i)=>D.jsxs(En,{"code-path":"src\\pages\\Home.tsx:287:13",to:e.href,className:`fade-in-up stagger-${i+1}`,style:{display:"block",backgroundColor:"var(--slate)",padding:"var(--space-lg)",textDecoration:"none",borderBottom:"1px solid var(--border-dark)",transition:"transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.4s ease"},onMouseEnter:s=>{s.currentTarget.style.transform="translateY(-4px)",s.currentTarget.style.borderBottomColor="var(--sand)"},onMouseLeave:s=>{s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.borderBottomColor="var(--border-dark)"},children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:302:15",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:e.num}),D.jsx("h3",{"code-path":"src\\pages\\Home.tsx:305:15",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.5rem, 3.5vw, 2.5rem)",color:"var(--white)",lineHeight:1.1},children:e.name}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:308:15",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.6)",marginTop:"var(--space-xs)",lineHeight:1.65},children:e.desc}),D.jsxs("span",{"code-path":"src\\pages\\Home.tsx:311:15",style:{display:"inline-block",marginTop:"var(--space-md)",fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--sand)"},children:["Learn More ",D.jsx("span",{"code-path":"src\\pages\\Home.tsx:312:28",style:{display:"inline-block",transition:"transform 0.3s ease"},children:"→"})]})]},e.num))})]})})}function FC(){const r=[{img:"/project-kitchen-1.jpg",title:"Modern White Kitchen",location:"Sugar Grove, IL"},{img:"/project-kitchen-2.jpg",title:"Navy & Brass Kitchen",location:"Naperville, IL"},{img:"/project-bath-1.jpg",title:"Spa Master Bath",location:"Aurora, IL"},{img:"/project-addition-1.jpg",title:"Sunroom Addition",location:"Geneva, IL"},{img:"/project-basement-1.jpg",title:"Entertainment Basement",location:"St. Charles, IL"},{img:"/project-reno-1.jpg",title:"Open-Concept Renovation",location:"Batavia, IL"}];return D.jsxs("section",{"code-path":"src\\pages\\Home.tsx:334:5",id:"work",style:{backgroundColor:"var(--black)",padding:"var(--space-xl) 0"},children:[D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:335:7",className:"container-max",style:{marginBottom:"var(--space-lg)"},children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:336:9",className:"fade-in-up",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"SELECTED WORK"}),D.jsx("h2",{"code-path":"src\\pages\\Home.tsx:339:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--white)"},children:"Projects That Define Us"})]}),D.jsx("div",{"code-path":"src\\pages\\Home.tsx:343:7",className:"container-max projects-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--space-md)"},children:r.map((e,i)=>D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:345:11",className:`fade-in-up stagger-${i%3+1}`,style:{position:"relative",overflow:"hidden",cursor:"pointer"},children:[D.jsx("img",{"code-path":"src\\pages\\Home.tsx:346:13",src:e.img,alt:e.title,style:{width:"100%",aspectRatio:"4/3",objectFit:"cover",display:"block",transition:"transform 0.6s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.05)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)"}),D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:353:13",style:{position:"absolute",bottom:0,left:0,right:0,padding:"var(--space-md)",background:"linear-gradient(to top, rgba(0,0,0,0.7), transparent)"},children:[D.jsx("h3",{"code-path":"src\\pages\\Home.tsx:354:15",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.2rem, 2vw, 1.6rem)",color:"var(--white)",textShadow:"0 2px 20px rgba(0,0,0,0.6)"},children:e.title}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:357:15",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--sand)"},children:e.location})]})]},i))})]})}function BC(){const r=[{num:"01",title:"Consult",desc:"We listen to your goals, assess your space, and understand your budget before making any recommendations"},{num:"02",title:"Design",desc:"Our in-house design team creates detailed plans, material selections, and 3D renderings for your approval"},{num:"03",title:"Build",desc:"Licensed crews execute with daily site management, keeping your project on schedule and your home protected"},{num:"04",title:"Deliver",desc:"Final walkthrough, punch list completion, and a warranty that backs our work for years to come"}];return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:378:5",id:"process",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:379:7",className:"container-max",children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:380:9",className:"fade-in-up",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"HOW WE WORK"}),D.jsx("h2",{"code-path":"src\\pages\\Home.tsx:383:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-lg)"},children:"From First Sketch to Final Nail"}),D.jsx("div",{"code-path":"src\\pages\\Home.tsx:386:9",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--space-md)"},className:"process-grid",children:r.map((e,i)=>D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:388:13",className:`fade-in-up stagger-${i+1}`,style:{borderLeft:i>0?"1px solid var(--border-light)":"none",paddingLeft:i>0?"var(--space-md)":0},children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:389:15",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:e.num}),D.jsx("h3",{"code-path":"src\\pages\\Home.tsx:392:15",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.5rem, 3.5vw, 2.5rem)",color:"var(--black)",marginBottom:"var(--space-xs)"},children:e.title}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:395:15",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.7)",lineHeight:1.65},children:e.desc})]},e.num))})]})})}function zC(){return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:409:5",style:{backgroundColor:"var(--slate)",padding:"var(--space-xl) 0"},children:D.jsx("div",{"code-path":"src\\pages\\Home.tsx:410:7",className:"container-max",children:D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:411:9",style:{display:"grid",gridTemplateColumns:"60% 40%",gap:"var(--space-lg)",alignItems:"center"},className:"about-grid",children:[D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:412:11",children:[D.jsx("div",{"code-path":"src\\pages\\Home.tsx:413:13",className:"fade-in-up",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"ABOUT PRICOR"}),D.jsx("h2",{"code-path":"src\\pages\\Home.tsx:416:13",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--white)",marginBottom:"var(--space-md)"},children:"Built on 40 Years of Craft"}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:419:13",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.8)",lineHeight:1.65,marginBottom:"var(--space-md)"},children:"Terry Faltz started PRICOR HOME in 1985 with a simple principle: every home should be left better than it was found. Four decades later, that philosophy drives every kitchen, bath, and addition we build across the Fox Valley."}),D.jsx(En,{"code-path":"src\\pages\\Home.tsx:422:13",to:"/about",className:"fade-in-up stagger-2",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sand)",textDecoration:"none",borderBottom:"1px solid var(--sand)",paddingBottom:"0.25rem",transition:"opacity 0.3s ease"},onMouseEnter:r=>r.currentTarget.style.opacity="0.7",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:"Meet Terry"})]}),D.jsx("div",{"code-path":"src\\pages\\Home.tsx:437:11",className:"fade-in-up stagger-2",style:{overflow:"hidden"},children:D.jsx("img",{"code-path":"src\\pages\\Home.tsx:438:13",src:"/terry-portrait.png",alt:"Terry Faltz, President of PRICOR HOME",style:{width:"100%",aspectRatio:"3/4",objectFit:"cover",display:"block"}})})]})})})}function IC(){const r=[{text:"When we decided to remodel our bathroom, we did not have a clear vision. Terry and his team guided us through every decision. The result exceeded what we imagined.",name:"Mandy",project:"Master Bath Remodel",city:"Sugar Grove"},{text:"I was referred to PRICOR by a trusted realtor. From the first consultation to the final walkthrough, the communication was exceptional. Our kitchen is now the heart of our home.",name:"Sherry",project:"Kitchen Remodel",city:"Naperville"},{text:"Terry and his seasoned crew built our dream sunroom in less time than quoted. The craftsmanship is obvious in every detail.",name:"Raj",project:"Room Addition",city:"Aurora"}];return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:455:5",style:{backgroundColor:"var(--black)",padding:"var(--space-xl) 0"},children:D.jsx("div",{"code-path":"src\\pages\\Home.tsx:456:7",className:"container-narrow",children:r.map((e,i)=>D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:458:11",className:"fade-in-up",style:{borderBottom:"1px solid var(--border-dark)",padding:"var(--space-lg) 0"},children:[D.jsxs("p",{"code-path":"src\\pages\\Home.tsx:459:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.5rem, 3.5vw, 2.5rem)",fontWeight:300,color:"var(--white)",fontStyle:"italic",lineHeight:1.2},children:["“",e.text,"”"]}),D.jsxs("p",{"code-path":"src\\pages\\Home.tsx:462:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--sand)",marginTop:"var(--space-sm)"},children:["— ",e.name,", ",e.project,", ",e.city]})]},i))})})}function HC(){return D.jsx("section",{"code-path":"src\\pages\\Home.tsx:475:5",style:{backgroundColor:"var(--navy)",padding:"var(--space-2xl) 0",textAlign:"center"},children:D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:476:7",className:"container-narrow",children:[D.jsx("h2",{"code-path":"src\\pages\\Home.tsx:477:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",wordBreak:"keep-all"},children:"Ready to Remodel?"}),D.jsx("p",{"code-path":"src\\pages\\Home.tsx:488:9",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",lineHeight:1.65},children:"Free consultation for homeowners in Sugar Grove, Aurora, Naperville, and the Fox Valley"}),D.jsxs("div",{"code-path":"src\\pages\\Home.tsx:497:9",className:"fade-in-up stagger-2",style:{marginTop:"var(--space-lg)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-md)"},children:[D.jsx(En,{"code-path":"src\\pages\\Home.tsx:498:11",to:"/contact",style:{display:"inline-block",backgroundColor:"var(--sand)",color:"var(--black)",padding:"0.75rem 2rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",transition:"background-color 0.3s ease"},onMouseEnter:r=>r.currentTarget.style.backgroundColor="#d4b892",onMouseLeave:r=>r.currentTarget.style.backgroundColor="var(--sand)",children:"Get Your Free Quote"}),D.jsx("a",{"code-path":"src\\pages\\Home.tsx:514:11",href:"tel:630-913-1201",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sand)",textDecoration:"none"},children:"Call 630-913-1201"})]})]})})}function GC(){return ll(),ce.useEffect(()=>{window.scrollTo(0,0)},[]),D.jsxs("main",{"code-path":"src\\pages\\Home.tsx:537:5",children:[D.jsx(LC,{"code-path":"src\\pages\\Home.tsx:538:7"}),D.jsx(OC,{"code-path":"src\\pages\\Home.tsx:539:7"}),D.jsx(PC,{"code-path":"src\\pages\\Home.tsx:540:7"}),D.jsx(FC,{"code-path":"src\\pages\\Home.tsx:541:7"}),D.jsx(BC,{"code-path":"src\\pages\\Home.tsx:542:7"}),D.jsx(zC,{"code-path":"src\\pages\\Home.tsx:543:7"}),D.jsx(IC,{"code-path":"src\\pages\\Home.tsx:544:7"}),D.jsx(HC,{"code-path":"src\\pages\\Home.tsx:545:7"})]})}function VC({service:r}){const[e,i]=ce.useState(null);return ll(),ce.useEffect(()=>{window.scrollTo(0,0)},[r.slug]),D.jsxs("main",{"code-path":"src\\pages\\ServicePage.tsx:27:5",children:[D.jsxs("section",{"code-path":"src\\pages\\ServicePage.tsx:29:7",style:{position:"relative",height:"70vh",minHeight:"500px",backgroundImage:`url(${r.heroImage})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"flex-end"},children:[D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:39:9",style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.85))"}}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:44:9",className:"container-max",style:{position:"relative",zIndex:2,padding:"var(--space-lg) var(--space-md)",maxWidth:"var(--container-max)"},children:[D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:45:11",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"SERVICE"}),D.jsx("h1",{"code-path":"src\\pages\\ServicePage.tsx:48:11",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",marginBottom:"var(--space-sm)",wordBreak:"keep-all"},children:r.headline}),D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:60:11",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",maxWidth:"700px",lineHeight:1.65},children:r.subheadline})]})]}),D.jsx("section",{"code-path":"src\\pages\\ServicePage.tsx:73:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:74:9",className:"container-max",children:[D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:76:11",className:"fade-in-up",style:{maxWidth:"800px",marginBottom:"var(--space-xl)"},children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:77:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"The Heart of Your Home"}),D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:80:13",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",lineHeight:1.65},children:r.description})]}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:86:11",className:"fade-in-up",style:{marginBottom:"var(--space-xl)"},children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:87:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"What We Deliver"}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:90:13",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-md)"},className:"deliverables-grid",children:[D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:91:15",children:D.jsx("img",{"code-path":"src\\pages\\ServicePage.tsx:92:17",src:r.heroImage,alt:r.title,style:{width:"100%",aspectRatio:"4/3",objectFit:"cover",display:"block"}})}),D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:98:15",style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:D.jsx("ul",{"code-path":"src\\pages\\ServicePage.tsx:99:17",style:{listStyle:"none",padding:0},children:r.deliverables.map((s,l)=>D.jsxs("li",{"code-path":"src\\pages\\ServicePage.tsx:101:21",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",padding:"0.75rem 0",borderBottom:"1px solid var(--border-light)",paddingLeft:"1.5rem",position:"relative"},children:[D.jsx("span",{"code-path":"src\\pages\\ServicePage.tsx:110:23",style:{position:"absolute",left:0,color:"var(--sand)"},children:"•"}),s]},l))})})]})]}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:120:11",className:"fade-in-up",style:{marginBottom:"var(--space-xl)"},children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:121:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-lg)"},children:"Our Process"}),D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:124:13",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--space-md)"},className:"process-grid",children:r.processSteps.map((s,l)=>D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:126:17",style:{textAlign:"center",padding:"var(--space-md)",backgroundColor:"var(--slate)",color:"var(--white)"},children:[D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:127:19",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:["0",l+1]}),D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:130:19",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",lineHeight:1.65},children:s})]},l))})]}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:139:11",className:"fade-in-up",style:{backgroundColor:"var(--slate)",padding:"var(--space-xl)",marginBottom:"var(--space-xl)",textAlign:"center"},children:[D.jsxs("p",{"code-path":"src\\pages\\ServicePage.tsx:140:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.5rem, 3.5vw, 2.5rem)",fontWeight:300,color:"var(--white)",lineHeight:1.2,maxWidth:"800px",margin:"0 auto"},children:["“40 years means we have seen every challenge a ",r.title.toLowerCase()," can present. That experience protects your timeline and your budget.”"]}),D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:143:13",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--sand)",marginTop:"var(--space-md)"},children:"— Terry Faltz, President"})]}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:149:11",className:"fade-in-up",style:{marginBottom:"var(--space-xl)"},children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:150:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"Materials & Partners"}),D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:153:13",style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:r.materials.map((s,l)=>D.jsx("span",{"code-path":"src\\pages\\ServicePage.tsx:155:17",style:{border:"1px solid var(--border-light)",padding:"1rem 2rem",fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--black)"},children:s},l))})]}),D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:171:11",className:"fade-in-up",style:{marginBottom:"var(--space-xl)"},children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:172:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"Where We Build"}),D.jsxs("p",{"code-path":"src\\pages\\ServicePage.tsx:175:13",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.8)",lineHeight:1.65,maxWidth:"700px"},children:[r.title," in Sugar Grove, Aurora, Naperville, Geneva, Batavia, St. Charles, and surrounding Fox Valley communities."]}),D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:178:13",style:{display:"flex",gap:"var(--space-sm)",marginTop:"var(--space-md)",flexWrap:"wrap"},children:["Sugar Grove","Aurora","Naperville"].map(s=>D.jsx(En,{"code-path":"src\\pages\\ServicePage.tsx:180:17",to:`/areas/${s.toLowerCase().replace(" ","-")}`,style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"var(--sand)",textDecoration:"none",borderBottom:"1px solid var(--sand)",paddingBottom:"0.15rem",transition:"opacity 0.3s ease"},onMouseEnter:l=>l.currentTarget.style.opacity="0.7",onMouseLeave:l=>l.currentTarget.style.opacity="1",children:s},s))})]})]})}),D.jsx("section",{"code-path":"src\\pages\\ServicePage.tsx:204:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:205:9",className:"container-narrow",children:[D.jsx("h2",{"code-path":"src\\pages\\ServicePage.tsx:206:11",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-lg)"},children:"Common Questions"}),r.faqs.map((s,l)=>D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:210:13",className:"fade-in-up",style:{borderBottom:"1px solid var(--border-light)"},children:[D.jsxs("button",{"code-path":"src\\pages\\ServicePage.tsx:211:15",onClick:()=>i(e===l?null:l),style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.5rem 0",background:"none",border:"none",cursor:"pointer",textAlign:"left"},children:[D.jsx("span",{"code-path":"src\\pages\\ServicePage.tsx:225:17",style:{fontFamily:"var(--font-body)",fontSize:"clamp(1.1rem, 2vw, 1.4rem)",fontWeight:500,color:"var(--black)"},children:s.q}),D.jsx("span",{"code-path":"src\\pages\\ServicePage.tsx:228:17",style:{fontSize:"1.5rem",color:"var(--sand)",transition:"transform 0.3s ease",transform:e===l?"rotate(45deg)":"rotate(0deg)",flexShrink:0,marginLeft:"1rem"},children:"+"})]}),D.jsx("div",{"code-path":"src\\pages\\ServicePage.tsx:239:15",style:{maxHeight:e===l?"300px":"0",overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},children:D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:244:17",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.8)",lineHeight:1.65,paddingBottom:"1.5rem",maxWidth:"600px"},children:s.a})})]},l))]})}),D.jsx("section",{"code-path":"src\\pages\\ServicePage.tsx:261:7",style:{backgroundColor:"var(--navy)",padding:"var(--space-2xl) 0",textAlign:"center"},children:D.jsxs("div",{"code-path":"src\\pages\\ServicePage.tsx:262:9",className:"container-narrow",children:[D.jsxs("h2",{"code-path":"src\\pages\\ServicePage.tsx:263:11",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",wordBreak:"keep-all"},children:["Start Your ",r.title," Project"]}),D.jsx("p",{"code-path":"src\\pages\\ServicePage.tsx:274:11",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",lineHeight:1.65},children:"Free in-home consultation. No pressure, no obligation."}),D.jsx(En,{"code-path":"src\\pages\\ServicePage.tsx:283:11",to:"/contact",className:"fade-in-up stagger-2",style:{display:"inline-block",marginTop:"var(--space-lg)",backgroundColor:"var(--sand)",color:"var(--black)",padding:"0.75rem 2rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",transition:"background-color 0.3s ease"},onMouseEnter:s=>s.currentTarget.style.backgroundColor="#d4b892",onMouseLeave:s=>s.currentTarget.style.backgroundColor="var(--sand)",children:"Schedule Consultation"})]})})]})}const kC=[{year:"1985",role:"Laborer",desc:"Learned the trade from the ground up"},{year:"1990",role:"Purchasing Specialist",desc:"Mastered materials, costs, and supplier relationships"},{year:"1995",role:"Superintendent",desc:"Running job sites, managing crews, delivering on schedule"},{year:"2000",role:"VP of Construction",desc:"Overseeing multi-project operations"},{year:"2005",role:"President, PRICOR HOME",desc:"Leading a company built on craft, not sales"}];function WC(){return ll(),ce.useEffect(()=>{window.scrollTo(0,0)},[]),D.jsxs("main",{"code-path":"src\\pages\\About.tsx:21:5",children:[D.jsxs("section",{"code-path":"src\\pages\\About.tsx:23:7",style:{backgroundColor:"var(--black)",height:"60vh",minHeight:"400px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 var(--space-md)"},children:[D.jsx("div",{"code-path":"src\\pages\\About.tsx:34:9",className:"fade-in-up",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"ABOUT PRICOR HOME"}),D.jsx("h1",{"code-path":"src\\pages\\About.tsx:37:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 7vw, 5rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",maxWidth:"900px",wordBreak:"keep-all"},children:"Four Decades of Building Better Homes"}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:49:9",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",maxWidth:"600px",lineHeight:1.65},children:"From laborer to company president — Terry Faltz brings a rare depth of hands-on experience to every project."})]}),D.jsx("section",{"code-path":"src\\pages\\About.tsx:62:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsx("div",{"code-path":"src\\pages\\About.tsx:63:9",className:"container-max",children:D.jsxs("div",{"code-path":"src\\pages\\About.tsx:64:11",style:{display:"grid",gridTemplateColumns:"55% 45%",gap:"var(--space-xl)",alignItems:"start"},className:"about-grid",children:[D.jsxs("div",{"code-path":"src\\pages\\About.tsx:65:13",children:[D.jsx("div",{"code-path":"src\\pages\\About.tsx:66:15",className:"fade-in-up",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:"OUR FOUNDER"}),D.jsx("h2",{"code-path":"src\\pages\\About.tsx:69:15",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"Terry Faltz, President"}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:72:15",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",lineHeight:1.65,marginBottom:"var(--space-md)"},children:"I am a results-oriented, hands-on construction and development professional with 40 years of experience in every facet of the industry. Since 1985, I have advanced through this profession as a laborer, purchasing specialist, superintendent, vice president of construction, and president and owner of PRICOR HOME and M. Pierce Roofing."}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:75:15",className:"fade-in-up stagger-2",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",lineHeight:1.65,marginBottom:"var(--space-md)"},children:"That progression matters. It means I have personally done the work my crews do today. I know what quality framing looks like because I have framed walls. I know what a proper tile installation requires because I have laid tile. This is not a sales-driven operation — it is a craft-driven company."}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:78:15",className:"fade-in-up stagger-3",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",lineHeight:1.65,fontStyle:"italic"},children:"My goal is the same one that has followed me throughout my career: to leave every lot, every home, and every development better than I found it."})]}),D.jsx("div",{"code-path":"src\\pages\\About.tsx:82:13",className:"fade-in-up stagger-2",style:{border:"1px solid var(--border-light)",overflow:"hidden"},children:D.jsx("img",{"code-path":"src\\pages\\About.tsx:83:15",src:"/terry-portrait.png",alt:"Terry Faltz",style:{width:"100%",aspectRatio:"2/3",objectFit:"cover",display:"block"}})})]})})}),D.jsx("section",{"code-path":"src\\pages\\About.tsx:90:7",style:{backgroundColor:"var(--slate)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\About.tsx:91:9",className:"container-max",children:[D.jsx("h2",{"code-path":"src\\pages\\About.tsx:92:11",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--white)",marginBottom:"var(--space-xl)",textAlign:"center"},children:"A Career Built From the Ground Up"}),D.jsxs("div",{"code-path":"src\\pages\\About.tsx:95:11",className:"fade-in-up",style:{position:"relative",paddingTop:"2rem"},children:[D.jsx("div",{"code-path":"src\\pages\\About.tsx:97:13",style:{position:"absolute",top:"0",left:"0",right:"0",height:"1px",backgroundColor:"rgba(196, 168, 130, 0.3)"},className:"timeline-line"}),D.jsx("div",{"code-path":"src\\pages\\About.tsx:105:13",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"var(--space-md)"},className:"timeline-grid",children:kC.map((r,e)=>D.jsxs("div",{"code-path":"src\\pages\\About.tsx:107:17",style:{textAlign:"center",paddingTop:"var(--space-md)"},children:[D.jsx("div",{"code-path":"src\\pages\\About.tsx:108:19",style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--sand)",marginBottom:"var(--space-sm)"},children:r.year}),D.jsx("h3",{"code-path":"src\\pages\\About.tsx:111:19",style:{fontFamily:"var(--font-body)",fontSize:"clamp(1.1rem, 2vw, 1.4rem)",fontWeight:500,color:"var(--white)",marginBottom:"var(--space-xs)"},children:r.role}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:114:19",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(245, 245, 245, 0.5)",lineHeight:1.4},children:r.desc})]},e))})]})]})}),D.jsx("section",{"code-path":"src\\pages\\About.tsx:125:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsx("div",{"code-path":"src\\pages\\About.tsx:126:9",className:"container-max",children:D.jsx("div",{"code-path":"src\\pages\\About.tsx:127:11",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--space-md)",textAlign:"center"},className:"stats-grid",children:[{num:"40+",label:"Years in Business"},{num:"1,000+",label:"Homes Built"},{num:"6",label:"Core Services"},{num:"3",label:"Fox Valley Counties"}].map((r,e)=>D.jsxs("div",{"code-path":"src\\pages\\About.tsx:134:15",className:"fade-in-up",children:[D.jsx("div",{"code-path":"src\\pages\\About.tsx:135:17",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 6vw, 5rem)",fontWeight:300,color:"var(--sand)",lineHeight:1},children:r.num}),D.jsx("div",{"code-path":"src\\pages\\About.tsx:138:17",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.5)",marginTop:"var(--space-sm)"},children:r.label})]},e))})})}),D.jsx("section",{"code-path":"src\\pages\\About.tsx:148:7",style:{backgroundColor:"var(--navy)",padding:"var(--space-2xl) 0",textAlign:"center"},children:D.jsxs("div",{"code-path":"src\\pages\\About.tsx:149:9",className:"container-narrow",children:[D.jsx("h2",{"code-path":"src\\pages\\About.tsx:150:11",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",wordBreak:"keep-all"},children:"Ready to Remodel?"}),D.jsx("p",{"code-path":"src\\pages\\About.tsx:161:11",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",lineHeight:1.65},children:"Free consultation for homeowners in Sugar Grove, Aurora, Naperville, and the Fox Valley"}),D.jsx(En,{"code-path":"src\\pages\\About.tsx:170:11",to:"/contact",className:"fade-in-up stagger-2",style:{display:"inline-block",marginTop:"var(--space-lg)",backgroundColor:"var(--sand)",color:"var(--black)",padding:"0.75rem 2rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",transition:"background-color 0.3s ease"},onMouseEnter:r=>r.currentTarget.style.backgroundColor="#d4b892",onMouseLeave:r=>r.currentTarget.style.backgroundColor="var(--sand)",children:"Get Your Free Quote"})]})})]})}function XC(){const[r,e]=ce.useState({name:"",email:"",phone:"",address:"",service:"",message:""}),[i,s]=ce.useState(!1);ll(),ce.useEffect(()=>{window.scrollTo(0,0)},[]);const l=h=>{h.preventDefault(),s(!0)},c={width:"100%",border:"1px solid var(--border-light)",borderRadius:0,padding:"1rem",fontFamily:"var(--font-body)",fontSize:"1rem",backgroundColor:"var(--true-white)",color:"var(--black)",outline:"none"},f={fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.6)",marginBottom:"0.5rem",display:"block"};return D.jsxs("main",{"code-path":"src\\pages\\Contact.tsx:49:5",children:[D.jsxs("section",{"code-path":"src\\pages\\Contact.tsx:51:7",style:{backgroundColor:"var(--navy)",height:"40vh",minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 var(--space-md)"},children:[D.jsx("h1",{"code-path":"src\\pages\\Contact.tsx:62:9",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 7vw, 5rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",wordBreak:"keep-all"},children:"Let's Talk About Your Project"}),D.jsx("p",{"code-path":"src\\pages\\Contact.tsx:73:9",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",maxWidth:"600px",lineHeight:1.65},children:"Free consultation. No pressure. Real answers from a team that has built 1,000+ homes."})]}),D.jsx("section",{"code-path":"src\\pages\\Contact.tsx:86:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:87:9",className:"container-max",children:i?D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:89:13",className:"fade-in-up",style:{textAlign:"center",padding:"var(--space-xl) 0"},children:[D.jsx("h2",{"code-path":"src\\pages\\Contact.tsx:90:15",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-md)"},children:"Thank You"}),D.jsx("p",{"code-path":"src\\pages\\Contact.tsx:93:15",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.8)",lineHeight:1.65},children:"We have received your message and will get back to you within 24 hours. In the meantime, feel free to call us at 630-913-1201."})]}):D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:98:13",style:{display:"grid",gridTemplateColumns:"60% 40%",gap:"var(--space-xl)"},className:"contact-grid",children:[D.jsxs("form",{"code-path":"src\\pages\\Contact.tsx:100:15",onSubmit:l,className:"fade-in-up",children:[D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:101:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:102:19",style:f,children:"Full Name"}),D.jsx("input",{"code-path":"src\\pages\\Contact.tsx:103:19",type:"text",required:!0,value:r.name,onChange:h=>e({...r,name:h.target.value}),style:c,placeholder:"Your name"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:112:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:113:19",style:f,children:"Email Address"}),D.jsx("input",{"code-path":"src\\pages\\Contact.tsx:114:19",type:"email",required:!0,value:r.email,onChange:h=>e({...r,email:h.target.value}),style:c,placeholder:"you@example.com"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:123:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:124:19",style:f,children:"Phone Number"}),D.jsx("input",{"code-path":"src\\pages\\Contact.tsx:125:19",type:"tel",required:!0,value:r.phone,onChange:h=>e({...r,phone:h.target.value}),style:c,placeholder:"630-555-1234"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:134:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:135:19",style:f,children:"Project Address"}),D.jsx("input",{"code-path":"src\\pages\\Contact.tsx:136:19",type:"text",required:!0,value:r.address,onChange:h=>e({...r,address:h.target.value}),style:c,placeholder:"Street, City, Zip Code"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:145:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:146:19",style:f,children:"Service Interested In"}),D.jsxs("select",{"code-path":"src\\pages\\Contact.tsx:147:19",required:!0,value:r.service,onChange:h=>e({...r,service:h.target.value}),style:c,children:[D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:153:21",value:"",children:"Select a service"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:154:21",value:"kitchen",children:"Kitchen Remodeling"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:155:21",value:"bathroom",children:"Bathroom Remodeling"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:156:21",value:"basement",children:"Basement Remodeling"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:157:21",value:"addition",children:"Room Addition"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:158:21",value:"renovation",children:"Home Renovation"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:159:21",value:"new-construction",children:"New Construction"}),D.jsx("option",{"code-path":"src\\pages\\Contact.tsx:160:21",value:"other",children:"Other"})]})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:163:17",style:{marginBottom:"var(--space-md)"},children:[D.jsx("label",{"code-path":"src\\pages\\Contact.tsx:164:19",style:f,children:"Tell Us About Your Project"}),D.jsx("textarea",{"code-path":"src\\pages\\Contact.tsx:165:19",required:!0,value:r.message,onChange:h=>e({...r,message:h.target.value}),style:{...c,height:"150px",resize:"vertical"},placeholder:"Describe your project goals, timeline, and budget..."})]}),D.jsx("button",{"code-path":"src\\pages\\Contact.tsx:173:17",type:"submit",style:{width:"100%",backgroundColor:"var(--sand)",color:"var(--black)",padding:"1rem",fontFamily:"var(--font-body)",fontSize:"clamp(1.1rem, 2vw, 1.4rem)",fontWeight:500,border:"none",cursor:"pointer",transition:"background-color 0.3s ease"},onMouseEnter:h=>h.currentTarget.style.backgroundColor="#d4b892",onMouseLeave:h=>h.currentTarget.style.backgroundColor="var(--sand)",children:"Send Message"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:195:15",className:"fade-in-up stagger-1",children:[D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:196:17",style:{marginBottom:"var(--space-lg)"},children:[D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:197:19",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.4)",marginBottom:"0.5rem"},children:"CALL US"}),D.jsx("a",{"code-path":"src\\pages\\Contact.tsx:200:19",href:"tel:630-913-1201",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.5rem, 3.5vw, 2.5rem)",color:"var(--black)",textDecoration:"none"},children:"630-913-1201"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:204:17",style:{marginBottom:"var(--space-lg)"},children:[D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:205:19",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.4)",marginBottom:"0.5rem"},children:"EMAIL"}),D.jsx("a",{"code-path":"src\\pages\\Contact.tsx:208:19",href:"mailto:TFaltz@PricorHome.com",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--black)",textDecoration:"none"},children:"TFaltz@PricorHome.com"})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:212:17",style:{marginBottom:"var(--space-lg)"},children:[D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:213:19",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.4)",marginBottom:"0.5rem"},children:"VISIT US"}),D.jsxs("p",{"code-path":"src\\pages\\Contact.tsx:216:19",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--black)",lineHeight:1.6},children:["1016 Airpark Drive, Unit C",D.jsx("br",{"code-path":"src\\pages\\Contact.tsx:217:47"}),"Sugar Grove, IL 60554"]})]}),D.jsxs("div",{"code-path":"src\\pages\\Contact.tsx:221:17",style:{marginBottom:"var(--space-lg)"},children:[D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:222:19",style:{fontFamily:"var(--font-body)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(10, 10, 10, 0.4)",marginBottom:"0.5rem"},children:"HOURS"}),D.jsx("p",{"code-path":"src\\pages\\Contact.tsx:225:19",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--black)"},children:"Monday–Friday: 7am–5pm"})]}),D.jsx("div",{"code-path":"src\\pages\\Contact.tsx:229:17",style:{border:"1px solid var(--border-light)",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--slate)"},children:D.jsxs("p",{"code-path":"src\\pages\\Contact.tsx:230:19",style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",textAlign:"center"},children:["Map embed placeholder",D.jsx("br",{"code-path":"src\\pages\\Contact.tsx:231:42"}),D.jsx("span",{"code-path":"src\\pages\\Contact.tsx:232:21",style:{fontSize:"0.75rem"},children:"1016 Airpark Drive, Sugar Grove, IL"})]})})]})]})})})]})}function jC({area:r,services:e}){return ll(),ce.useEffect(()=>{window.scrollTo(0,0)},[r.slug]),D.jsxs("main",{"code-path":"src\\pages\\ServiceArea.tsx:26:5",children:[D.jsxs("section",{"code-path":"src\\pages\\ServiceArea.tsx:28:7",style:{position:"relative",height:"50vh",minHeight:"350px",backgroundImage:`url(${r.image})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"flex-end"},children:[D.jsx("div",{"code-path":"src\\pages\\ServiceArea.tsx:38:9",style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.85))"}}),D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:43:9",className:"container-max",style:{position:"relative",zIndex:2,padding:"var(--space-lg) var(--space-md)"},children:[D.jsxs("h1",{"code-path":"src\\pages\\ServiceArea.tsx:44:11",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",marginBottom:"var(--space-sm)",wordBreak:"keep-all"},children:[r.city," Home Remodeling"]}),D.jsxs("p",{"code-path":"src\\pages\\ServiceArea.tsx:56:11",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",maxWidth:"700px",lineHeight:1.65},children:["PRICOR HOME serves homeowners in ",r.city," and surrounding communities with full-service design-build remodeling."]})]})]}),D.jsx("section",{"code-path":"src\\pages\\ServiceArea.tsx:69:7",style:{backgroundColor:"var(--true-white)",padding:"var(--space-xl) 0"},children:D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:70:9",className:"container-max",children:[D.jsx("div",{"code-path":"src\\pages\\ServiceArea.tsx:72:11",className:"fade-in-up",style:{maxWidth:"800px",marginBottom:"var(--space-xl)"},children:D.jsx("p",{"code-path":"src\\pages\\ServiceArea.tsx:73:13",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(10, 10, 10, 0.85)",lineHeight:1.65},children:r.intro})}),D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:79:11",className:"fade-in-up",style:{marginBottom:"var(--space-xl)"},children:[D.jsxs("h2",{"code-path":"src\\pages\\ServiceArea.tsx:80:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--black)",marginBottom:"var(--space-lg)"},children:["Services in ",r.city]}),D.jsx("div",{"code-path":"src\\pages\\ServiceArea.tsx:83:13",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--space-md)"},className:"services-grid",children:e.map((i,s)=>D.jsxs(En,{"code-path":"src\\pages\\ServiceArea.tsx:85:17",to:`/services/${i.slug}`,className:`fade-in-up stagger-${s%3+1}`,style:{display:"block",backgroundColor:"var(--slate)",padding:"var(--space-lg)",textDecoration:"none",borderBottom:"1px solid var(--border-dark)",transition:"transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.4s ease"},onMouseEnter:l=>{l.currentTarget.style.transform="translateY(-4px)",l.currentTarget.style.borderBottomColor="var(--sand)"},onMouseLeave:l=>{l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.borderBottomColor="var(--border-dark)"},children:[D.jsx("h3",{"code-path":"src\\pages\\ServiceArea.tsx:100:19",style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.3rem, 2.5vw, 1.8rem)",color:"var(--white)",lineHeight:1.1,marginBottom:"var(--space-xs)"},children:i.title}),D.jsx("p",{"code-path":"src\\pages\\ServiceArea.tsx:103:19",style:{fontFamily:"var(--font-body)",fontSize:"0.85rem",color:"rgba(245, 245, 245, 0.6)",lineHeight:1.5},children:i.subheadline})]},i.slug))})]}),D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:112:11",className:"fade-in-up",style:{backgroundColor:"var(--slate)",padding:"var(--space-xl)",marginBottom:"var(--space-xl)"},children:[D.jsxs("h2",{"code-path":"src\\pages\\ServiceArea.tsx:113:13",style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3.5rem)",color:"var(--white)",marginBottom:"var(--space-md)"},children:["Why ",r.city," Homeowners Choose PRICOR"]}),D.jsx("div",{"code-path":"src\\pages\\ServiceArea.tsx:116:13",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--space-md)"},className:"why-grid",children:[{title:"Local Knowledge",desc:`We know ${r.city}'s building codes, permit processes, and architectural styles because we have worked here for 40 years.`},{title:"Design-Build Continuity",desc:"Your designer and builder are the same team. No miscommunication between separate design and construction firms."},{title:"Transparent Pricing",desc:"Detailed written estimates with no hidden costs. Change orders only happen with your written approval."}].map((i,s)=>D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:122:17",children:[D.jsx("h3",{"code-path":"src\\pages\\ServiceArea.tsx:123:19",style:{fontFamily:"var(--font-body)",fontSize:"clamp(1.1rem, 2vw, 1.4rem)",fontWeight:500,color:"var(--sand)",marginBottom:"var(--space-xs)"},children:i.title}),D.jsx("p",{"code-path":"src\\pages\\ServiceArea.tsx:126:19",style:{fontFamily:"var(--font-body)",fontSize:"0.9rem",color:"rgba(245, 245, 245, 0.7)",lineHeight:1.65},children:i.desc})]},s))})]})]})}),D.jsx("section",{"code-path":"src\\pages\\ServiceArea.tsx:137:7",style:{backgroundColor:"var(--navy)",padding:"var(--space-2xl) 0",textAlign:"center"},children:D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:138:9",className:"container-narrow",children:[D.jsxs("h2",{"code-path":"src\\pages\\ServiceArea.tsx:139:11",className:"fade-in-up",style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:300,color:"var(--white)",lineHeight:.95,letterSpacing:"-0.02em",wordBreak:"keep-all"},children:["Free Consultation in ",r.city]}),D.jsx("p",{"code-path":"src\\pages\\ServiceArea.tsx:150:11",className:"fade-in-up stagger-1",style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)",color:"rgba(245, 245, 245, 0.7)",marginTop:"var(--space-md)",lineHeight:1.65},children:"Call 630-913-1201 or send us a message to schedule your free in-home consultation."}),D.jsxs("div",{"code-path":"src\\pages\\ServiceArea.tsx:159:11",className:"fade-in-up stagger-2",style:{marginTop:"var(--space-lg)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-md)"},children:[D.jsx(En,{"code-path":"src\\pages\\ServiceArea.tsx:160:13",to:"/contact",style:{display:"inline-block",backgroundColor:"var(--sand)",color:"var(--black)",padding:"0.75rem 2rem",fontFamily:"var(--font-body)",fontSize:"1rem",fontWeight:500,textDecoration:"none",transition:"background-color 0.3s ease"},onMouseEnter:i=>i.currentTarget.style.backgroundColor="#d4b892",onMouseLeave:i=>i.currentTarget.style.backgroundColor="var(--sand)",children:"Get Your Free Quote"}),D.jsx("a",{"code-path":"src\\pages\\ServiceArea.tsx:176:13",href:"tel:630-913-1201",style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sand)",textDecoration:"none"},children:"Call 630-913-1201"})]})]})})]})}const M_=[{slug:"kitchen-remodeling",title:"Kitchen Remodeling",headline:"Kitchen Remodeling in the Fox Valley",subheadline:"Custom kitchen design and construction by PRICOR HOME — serving Sugar Grove, Aurora, and Naperville with 40 years of expertise.",heroImage:"/service-kitchen-hero.jpg",description:"A kitchen is more than cabinets and countertops. It is where mornings start, where families gather, where holidays unfold. At PRICOR HOME, we design kitchens that work as beautifully as they look.",deliverables:["Custom cabinetry","Natural stone countertops","Professional-grade appliance integration","Custom lighting design","Hardwood, tile, or LVP flooring","Plumbing relocation and upgrades"],processSteps:["In-home consultation and measurement","Design development with 3D renderings","Material selection and ordering","Construction with daily site management"],materials:["Hardwood","Quartz","Granite","Custom Cabinetry","Tile & Stone","Lighting"],faqs:[{q:"How long does a kitchen remodel take?",a:"Most kitchen remodels are completed in 6–10 weeks, depending on scope and material availability. We provide a detailed timeline before construction begins and update you weekly on progress."},{q:"Do I need to move out during the remodel?",a:"No. We design our construction schedule to keep your home livable. Temporary kitchen setups, dust containment, and daily cleanup are standard on every project."},{q:"Can you work with my own architect or designer?",a:"Absolutely. While we offer full in-house design services, we regularly collaborate with architects and interior designers our clients have already engaged."},{q:"What is the typical budget range?",a:"Kitchen remodels in the Fox Valley typically range from $45,000 for a cosmetic update to $150,000+ for a full gut renovation with luxury finishes. We work within your budget and are transparent about costs from day one."},{q:"Do you handle permits?",a:"Yes. We manage all permit applications, inspections, and code compliance. As a licensed Illinois contractor, we understand local requirements in every municipality we serve."}]},{slug:"bathroom-remodeling",title:"Bathroom Remodeling",headline:"Bathroom Remodeling in the Fox Valley",subheadline:"Spa-inspired baths designed and built by PRICOR HOME — 40 years of transforming bathrooms across Sugar Grove, Aurora, and Naperville.",heroImage:"/service-bath-hero.jpg",description:"Your bathroom is the first room you see in the morning and the last before bed. It should feel like a retreat. PRICOR HOME designs bathrooms that combine luxury with everyday practicality.",deliverables:["Custom vanities and cabinetry","Natural stone and quartz countertops","Walk-in and curbless showers","Freestanding tub installation","Heated flooring systems","Custom tile work and mosaics"],processSteps:["In-home consultation and measurement","Plumbing assessment and layout planning","Material and fixture selection","Precision construction with waterproofing"],materials:["Porcelain Tile","Marble","Quartz","Glass","Custom Vanities","Heated Floors"],faqs:[{q:"How long does a bathroom remodel take?",a:"Most bathroom remodels are completed in 4–8 weeks. Master baths with complex plumbing may take 8–10 weeks. We provide a detailed timeline before starting."},{q:"Can you add a bathroom where there is not one now?",a:"Yes. We regularly convert closets, under-stair spaces, and unused rooms into full bathrooms. We handle all plumbing rough-in and permitting."},{q:"Do you install heated floors?",a:"Absolutely. Heated floor systems are one of our most requested upgrades. We install electric radiant heat under tile and stone surfaces."},{q:"What is the typical budget range?",a:"Bathroom remodels typically range from $25,000 for a guest bath refresh to $75,000+ for a luxury master bath renovation."},{q:"Do you handle permits and inspections?",a:"Yes. We manage all plumbing permits, electrical permits, and building inspections required for your bathroom remodel."}]},{slug:"basement-remodeling",title:"Basement Remodeling",headline:"Basement Remodeling in the Fox Valley",subheadline:"Transform unused basements into living space with PRICOR HOME — serving the Fox Valley for 40 years.",heroImage:"/service-basement-hero.jpg",description:"Your basement is the largest untapped space in your home. Whether you need a playroom for the kids, a home theater, a guest suite, or a home gym — PRICOR HOME can make it happen.",deliverables:["Entertainment centers and built-ins","Home theaters and media rooms","Guest bedrooms and bathrooms","Home offices and gyms","Wet bars and kitchenettes","Egress window installation"],processSteps:["Basement assessment and moisture testing","Design for lighting and ceiling height","Framing, electrical, and HVAC routing","Finish work with daily site management"],materials:["LVP Flooring","Carpet","Drywall","LED Lighting","Built-ins","Insulation"],faqs:[{q:"How long does a basement remodel take?",a:"Basement remodels typically take 8–12 weeks depending on scope. Projects with bathrooms or wet bars take longer due to plumbing requirements."},{q:"Can you finish a basement with low ceilings?",a:"Yes. We have techniques for maximizing headroom including recessed lighting, soffit planning, and strategic ductwork relocation."},{q:"Do you handle egress windows?",a:"Yes. We are experienced in egress window installation, which is required for basement bedrooms and adds significant natural light."},{q:"What about moisture and waterproofing?",a:"We conduct thorough moisture assessment before starting. We address any water issues and install proper vapor barriers and dehumidification systems."},{q:"What is the typical budget range?",a:"Basement finishing typically ranges from $40,000 for a basic open layout to $100,000+ for a full entertainment space with a bathroom and wet bar."}]},{slug:"room-additions",title:"Room Additions",headline:"Room Additions in the Fox Valley",subheadline:"Seamless home expansions by PRICOR HOME — 40 years of building additions that look original to your home.",heroImage:"/project-addition-1.jpg",description:"When you love your home but need more space, a room addition is the answer. PRICOR HOME designs additions that match your existing architecture and feel like they have always been there.",deliverables:["Sunrooms and four-season rooms","Second-story additions","Master suite additions","Garage additions and conversions","In-law suites and ADUs","Bumped-out kitchens and great rooms"],processSteps:["Site evaluation and feasibility study","Architectural design and engineering","Permit acquisition and approvals","Construction with daily site management"],materials:["Composite Siding","Hardwood","Tile Roofing","Energy-Efficient Windows","Insulation","Structural Lumber"],faqs:[{q:"How long does a room addition take?",a:"Room additions typically take 10–16 weeks from groundbreaking to completion. Second-story additions may take longer due to structural requirements."},{q:"Will the addition match my existing home?",a:"Absolutely. Matching exterior materials, rooflines, and interior finishes is a specialty of ours. We source matching siding, trim, and roofing materials."},{q:"Do you handle permits and engineering?",a:"Yes. We manage architectural drawings, structural engineering, and all permit applications. Our 40 years of experience means we know every municipality in the Fox Valley."},{q:"Can you build over my garage?",a:"Yes. Building a second story over an existing garage is a common project. We assess the foundation and structure to ensure it can support the addition."},{q:"What is the typical budget range?",a:"Room additions typically range from $75,000 for a single-room bump-out to $250,000+ for a second-story addition or large multi-room expansion."}]},{slug:"home-renovations",title:"Home Renovations",headline:"Home Renovations in the Fox Valley",subheadline:"Whole-home transformations by PRICOR HOME — comprehensive renovations from concept to completion across the Fox Valley.",heroImage:"/project-reno-1.jpg",description:"Sometimes a single room is not enough. When your entire home needs updating, PRICOR HOME brings the project management expertise and craftsmanship to transform your space without the stress.",deliverables:["Whole-home floor plan reconfiguration","Kitchen and bath updates","Flooring replacement throughout","Electrical and plumbing upgrades","HVAC improvements","Exterior updates and siding"],processSteps:["Comprehensive home assessment","Master design plan development","Phased construction scheduling","Quality finish work and walkthrough"],materials:["Hardwood","Tile","Quartz","Custom Cabinetry","Lighting","Windows & Doors"],faqs:[{q:"How long does a whole-home renovation take?",a:"Whole-home renovations typically take 4–8 months depending on scope and home size. We develop a phased schedule to minimize disruption."},{q:"Can we live in the house during renovation?",a:"In most cases, yes. We phase the work so you can remain in your home. For extensive renovations, we can discuss temporary relocation options."},{q:"Do you renovate historic homes?",a:"Yes. We have extensive experience with historic home renovations, including preserving original features while updating systems and layouts."},{q:"What is the typical budget range?",a:"Whole-home renovations typically range from $100,000 for a cosmetic update to $400,000+ for a comprehensive gut renovation with luxury finishes."},{q:"Do you handle all trades?",a:"Yes. We manage plumbing, electrical, HVAC, roofing, and all specialty trades. You have one point of contact for everything."}]},{slug:"new-construction",title:"New Construction",headline:"New Home Construction in the Fox Valley",subheadline:"Custom homes built with 40 years of expertise — PRICOR HOME has built over 1,000 homes in the Fox Valley area.",heroImage:"/project-newhome-1.jpg",description:"Building a new home is one of the most significant investments you will ever make. With over 1,000 homes built in the Fox Valley since 1985, PRICOR HOME brings unmatched experience to your custom home project.",deliverables:["Custom home design and planning","Lot evaluation and preparation","Full architectural coordination","Quality construction management","Energy-efficient building practices","Warranty and post-build support"],processSteps:["Lot evaluation and site preparation","Architectural design and engineering","Permit acquisition and approvals","Construction with weekly progress updates"],materials:["Engineered Lumber","Fiber Cement Siding","Energy-Efficient Windows","Spray Foam Insulation","Stone & Brick","Premium Roofing"],faqs:[{q:"How long does new construction take?",a:"Custom home construction typically takes 8–14 months from groundbreaking to move-in. Timeline varies with home size, complexity, and weather conditions."},{q:"Do you build on my lot or sell lots?",a:"We build on your lot. We also work with developers and can help you find suitable lots in the Fox Valley area if needed."},{q:"Can I use my own architect?",a:"Absolutely. We collaborate with architects regularly and can work with your chosen design professional or recommend trusted local architects."},{q:"What is the typical budget range?",a:"Custom homes in the Fox Valley typically start at $400,000 and range upward depending on size, finishes, and site conditions. We provide detailed cost breakdowns."},{q:"Do you offer a warranty?",a:"Yes. We provide a comprehensive one-year workmanship warranty on all new construction, plus manufacturer warranties on materials and systems."}]}],qC=[{city:"Sugar Grove",slug:"sugar-grove",intro:"Sugar Grove homeowners choose PRICOR HOME because we understand the character of this community — from the established neighborhoods near the village center to the newer developments expanding west. Our 40 years in the Fox Valley means we have built and renovated homes on the same streets where we work today.",image:"/project-newhome-1.jpg"},{city:"Aurora",slug:"aurora",intro:"As Illinois's second-largest city, Aurora offers a diverse range of homes — historic Victorian properties near downtown, mid-century ranches on the east side, and modern subdivisions throughout. PRICOR HOME has remodeled kitchens, baths, and basements in every Aurora neighborhood over four decades.",image:"/project-kitchen-1.jpg"},{city:"Naperville",slug:"naperville",intro:"Naperville homeowners expect excellence, and that is what PRICOR HOME delivers. From the historic district near Naper Settlement to the newer construction in south Naperville, we bring design-build expertise that matches the sophistication of this community.",image:"/project-bath-1.jpg"}];function YC(){return D.jsxs(D.Fragment,{children:[D.jsx(hb,{"code-path":"src\\App.tsx:176:7"}),D.jsxs(LM,{"code-path":"src\\App.tsx:177:7",children:[D.jsx(Is,{"code-path":"src\\App.tsx:178:9",path:"/",element:D.jsx(GC,{"code-path":"src\\App.tsx:178:34"})}),M_.map(r=>D.jsx(Is,{"code-path":"src\\App.tsx:180:11",path:`/services/${r.slug}`,element:D.jsx(VC,{"code-path":"src\\App.tsx:183:22",service:r})},r.slug)),D.jsx(Is,{"code-path":"src\\App.tsx:186:9",path:"/about",element:D.jsx(WC,{"code-path":"src\\App.tsx:186:39"})}),D.jsx(Is,{"code-path":"src\\App.tsx:187:9",path:"/contact",element:D.jsx(XC,{"code-path":"src\\App.tsx:187:41"})}),qC.map(r=>D.jsx(Is,{"code-path":"src\\App.tsx:189:11",path:`/areas/${r.slug}`,element:D.jsx(jC,{"code-path":"src\\App.tsx:192:22",area:r,services:M_})},r.slug))]}),D.jsx(pb,{"code-path":"src\\App.tsx:196:7"})]})}PS.createRoot(document.getElementById("root")).render(D.jsx(ce.StrictMode,{"code-path":"src\\main.tsx:8:3",children:D.jsx(ib,{"code-path":"src\\main.tsx:9:5",children:D.jsx(YC,{"code-path":"src\\main.tsx:10:7"})})}));
