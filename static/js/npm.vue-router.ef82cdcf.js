"use strict";(self.webpackChunkh5_dux=self.webpackChunkh5_dux||[]).push([[74],{2483:function(e,t,n){n.d(t,{p7:function(){return Re},r5:function(){return C},tv:function(){return Pe},yj:function(){return xe}}),n(560);var r,o,a=n(9199);const l="undefined"!=typeof window;function i(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const c=Object.assign;function s(e,t){var n={};for(const o in t){var r=t[o];n[o]=f(r)?r.map(e):e(r)}return n}const u=()=>{},f=Array.isArray,p=/\/$/,h=e=>e.replace(p,"");function d(e,t,n="/"){let r,o={},a="",l="";var i=t.indexOf("#");let c=t.indexOf("?");return-1<(c=i<c&&0<=i?-1:c)&&(r=t.slice(0,c),a=t.slice(c+1,-1<i?i:t.length),o=e(a)),-1<i&&(r=r||t.slice(0,i),l=t.slice(i,t.length)),{fullPath:(r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;t=t.split("/");var n=e.split("/");".."!==(e=n[n.length-1])&&"."!==e||n.push("");let r,o,a=t.length-1;for(r=0;r<n.length;r++)if("."!==(o=n[r])){if(".."!==o)break;1<a&&a--}return t.slice(0,a).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}(null!=r?r:t,n))+(a&&"?")+a+l,path:r,query:o,hash:l}}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function g(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(n=e[o],r=t[o],!(f(n)?y(n,r):f(r)?y(r,n):n===r))return!1;var n,r;return!0}function y(e,t){return f(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}(t=r=r||{}).pop="pop",t.push="push",(n=o=o||{}).back="back",n.forward="forward",n.unknown="";const b=/^[^#]+#/;function w(e,t){return e.replace(b,"#")+t}const E=()=>({left:window.pageXOffset,top:window.pageYOffset});function k(e,t){return(history.state?history.state.position-t:-1)+e}const O=new Map;let R=()=>location.protocol+"//"+location.host;function P(e,t){var{pathname:t,search:n,hash:r}=t,o=e.indexOf("#");if(-1<o){o=r.includes(e.slice(o))?e.slice(o).length:1;let t=r.slice(o);return v(t="/"!==t[0]?"/"+t:t,"")}return v(t,e)+n+r}function x(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?E():null}}function C(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){const t=function(e){const{history:t,location:n}=window,r={value:P(e,n)},o={value:t.state};function a(r,a,l){var i=-1<(i=e.indexOf("#"))?(n.host&&document.querySelector("base")?e:e.slice(i))+r:R()+e+r;try{t[l?"replaceState":"pushState"](a,"",i),o.value=a}catch(r){console.error(r),n[l?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){a((l=c({},o.value,t.state,{forward:e,scroll:E()})).current,l,!0);var l=c({},x(r.value,e,null),{position:l.position+1},n);a(e,l,!1),r.value=e},replace:function(e,n){a(e,c({},t.state,x(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){var t;return"/"!==(e=e||(l?(e=(t=document.querySelector("base"))&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,""):"/"))[0]&&"#"!==e[0]&&(e="/"+e),h(e)}(e)),n=function(e,t,n,a){let l=[],i=[],s=null;const u=({state:i})=>{var c=P(e,location);const u=n.value;var f=t.value;let p=0;if(i){if(n.value=c,t.value=i,s&&s===u)return void(s=null);p=f?i.position-f.position:0}else a(c);l.forEach((e=>{e(n.value,u,{delta:p,type:r.pop,direction:p?0<p?o.forward:o.back:o.unknown})}))};function f(){var e=window.history;e.state&&e.replaceState(c({},e.state,{scroll:E()}),"")}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){l.push(e);var t=()=>{var t=l.indexOf(e);-1<t&&l.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",f)}}}(e,t.state,t.location,t.replace);return e=c({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:w.bind(null,e)},t,n),Object.defineProperty(e,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>t.state.value}),e}(e)}function S(e){return"string"==typeof e||"symbol"==typeof e}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");function q(e,t){return c(new Error,{type:e,[$]:!0},t)}function A(e,t){return e instanceof Error&&$ in e&&(null==t||e.type&t)}const F={sensitive:!1,strict:!1,start:!0,end:!0},L=/[.+*?^${}()[\]/\\]/g;function M(e,t){let n=0;for(var r=e.score,o=t.score;n<r.length&&n<o.length;){var a=function(e,t){let n=0;for(;n<e.length&&n<t.length;){var r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(r[n],o[n]);if(a)return a;n++}if(1===Math.abs(o.length-r.length)){if(U(r))return 1;if(U(o))return-1}return o.length-r.length}function U(e){var t=e[e.length-1];return 0<e.length&&t[t.length-1]<0}const _={type:0,value:""},B=/[a-zA-Z0-9_]/;function G(e,t,n){return n=function(e,t){var n=c({},F,t),r=[];let o=n.start?"^":"";const a=[];for(const c of e){var l=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let e=0;e<c.length;e++){var i=c[e];let r=40+(n.sensitive?.25:0);if(0===i.type)e||(o+="/"),o+=i.value.replace(L,"\\$&"),r+=40;else if(1===i.type){var{value:i,repeatable:s,optional:u,regexp:p}=i;a.push({name:i,repeatable:s,optional:u});const n=p||"[^/]+?";if("[^/]+?"!==n){r+=10;try{new RegExp(`(${n})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${i}" (${n}): `+t.message)}}let l=s?`((?:${n})(?:/(?:${n}))*)`:`(${n})`;e||(l=u&&c.length<2?`(?:/${l})`:"/"+l),u&&(l+="?"),o+=l,r+=20,u&&(r+=-8),s&&(r+=-20),".*"===n&&(r+=-50)}l.push(r)}r.push(l)}n.strict&&n.end&&(r[t=r.length-1][r[t].length-1]+=.7000000000000001),n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");return{re:h,score:r,keys:a,parse:function(e){var t=e.match(h),n={};if(!t)return null;for(let e=1;e<t.length;e++){var r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const c of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of c)if(0===e.type)n+=e.value;else if(1===e.type){var{value:o,repeatable:a,optional:l}=e,i=o in t?t[o]:"";if(f(i)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);if(!(a=f(i)?i.join("/"):i)){if(!l)throw new Error(`Missing required param "${o}"`);c.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=a}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${s}": `+e)}let n=0,r=n;const o=[];let a;function l(){a&&o.push(a),a=[]}let i,c=0,s="",u="";function f(){s&&(0===n?a.push({type:0,value:s}):1===n||2===n||3===n?(1<a.length&&("*"===i||"+"===i)&&t(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:s,regexp:u,repeatable:"*"===i||"+"===i,optional:"*"===i||"?"===i})):t("Invalid state to consume buffer"),s="")}function p(){s+=i}for(;c<e.length;)if("\\"===(i=e[c++])&&2!==n)r=n,n=4;else switch(n){case 0:"/"===i?(s&&f(),l()):":"===i?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===i?n=2:B.test(i)?p():(f(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--);break;case 2:")"===i?"\\"==u[u.length-1]?u=u.slice(0,-1)+i:n=3:u+=i;break;case 3:f(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--,u="";break;default:t("Unknown state")}return 2===n&&t(`Unfinished custom RegExp for param "${s}"`),f(),l(),o}(e.path),n),n=c(n,{record:e,parent:t,children:[],alias:[]}),t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function I(e,t){const n=[],r=new Map;function o(e,l,i){var s,f,p=!i,h={path:(s=e).path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:function(e){var t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}},d=(h.aliasOf=i&&i.record,J(t,e)),v=[h];if("alias"in e)for(const t of"string"==typeof e.alias?[e.alias]:e.alias)v.push(c({},h,{components:(i?i.record:h).components,path:t,aliasOf:i?i.record:h}));let m;for(const t of v){var g,y=t.path;if(l&&"/"!==y[0]&&(g="/"===(g=l.record.path)[g.length-1]?"":"/",t.path=l.record.path+(y&&g+y)),f=G(t,l,d),i?i.alias.push(f):((m=m||f)!==f&&m.alias.push(f),p&&e.name&&!D(f)&&a(e.name)),h.children){var b=h.children;for(let e=0;e<b.length;e++)o(b[e],f,i&&i.children[e])}if(i=i||f,f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect){var w=f;let e=0;for(;e<n.length&&0<=M(w,n[e])&&(w.record.path!==n[e].record.path||!function e(t,n){return n.children.some((n=>n===t||e(t,n)))}(w,n[e]));)e++;n.splice(e,0,w),w.record.name&&!D(w)&&r.set(w.record.name,w)}}return m?()=>{a(m)}:u}function a(e){var t;S(e)?(t=r.get(e))&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a)):-1<(t=n.indexOf(e))&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}return t=J({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,l,i={};if("name"in e&&e.name){if(!(o=r.get(e.name)))throw q(1,{location:e});l=o.record.name,i=c(W(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&W(e.params,o.keys.map((e=>e.name)))),a=o.stringify(i)}else if("path"in e)a=e.path,(o=n.find((e=>e.re.test(a))))&&(i=o.parse(a),l=o.record.name);else{if(!(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path)))))throw q(1,{location:e,currentLocation:t});l=o.record.name,i=c({},t.params,e.params),a=o.stringify(i)}var s=[];let u=o;for(;u;)s.unshift(u.record),u=u.parent;return{name:l,path:a,params:i,matched:s,meta:s.reduce(((e,t)=>c(e,t.meta)),{})}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function W(e,t){var n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function D(e){for(;e;){if(e.record.aliasOf)return 1;e=e.parent}}function J(e,t){var n={};for(const r in e)n[r]=(r in t?t:e)[r];return n}const T=/#/g,V=/&/g,z=/\//g,H=/=/g,K=/\?/g,Y=/\+/g,X=/%5B/g,Z=/%5D/g,Q=/%5E/g,N=/%60/g,ee=/%7B/g,te=/%7C/g,ne=/%7D/g,re=/%20/g;function oe(e){return encodeURI(""+e).replace(te,"|").replace(X,"[").replace(Z,"]")}function ae(e){return oe(e).replace(Y,"%2B").replace(re,"+").replace(T,"%23").replace(V,"%26").replace(N,"`").replace(ee,"{").replace(ne,"}").replace(Q,"^")}function le(e){return null==e?"":oe(e).replace(T,"%23").replace(K,"%3F").replace(z,"%2F")}function ie(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ce(e){var t={};if(""!==e&&"?"!==e){var n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){var r=(a=n[e].replace(Y," ")).indexOf("="),o=ie(r<0?a:a.slice(0,r)),a=r<0?null:ie(a.slice(r+1));if(o in t){let e=t[o];(e=f(e)?e:t[o]=[e]).push(a)}else t[o]=a}}return t}function se(e){let t="";for(let r in e){var n=e[r];r=ae(r).replace(H,"%3D"),null==n?void 0!==n&&(t+=(t.length?"&":"")+r):(f(n)?n.map((e=>e&&ae(e))):[n&&ae(n)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+r,null!=e)&&(t+="="+e)}))}return t}const ue=Symbol(""),fe=Symbol(""),pe=Symbol(""),he=Symbol(""),de=Symbol("");function ve(){let e=[];return{add:function(t){return e.push(t),()=>{var n=e.indexOf(t);-1<n&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function me(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((l,i)=>{var c=e=>{var c;!1===e?i(q(4,{from:n,to:t})):e instanceof Error?i(e):"string"==typeof(c=e)||c&&"object"==typeof c?i(q(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),l())},s=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(s);(u=e.length<3?u.then(c):u).catch((e=>i(e)))}))}function ge(e,t,n,r){var o=[];for(const c of e)for(const e in c.components){var a=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(l=a)||"displayName"in l||"props"in l||"__vccOpts"in l){var l=(a.__vccOpts||a)[t];l&&o.push(me(l,n,r,c,e))}else{let l=a();o.push((()=>l.then((o=>o?(o=i(o)?o.default:o,(o=((c.components[e]=o).__vccOpts||o)[t])&&me(o,n,r,c,e)()):Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`))))))}}return o}function ye(e){const t=(0,a.f3)(pe),n=(0,a.f3)(he),r=(0,a.Fl)((()=>t.resolve((0,a.SU)(e.to)))),o=(0,a.Fl)((()=>{var e,t,o=r.value.matched,a=o.length,l=o[a-1],i=n.matched;return l&&i.length?!(-1<(e=i.findIndex(m.bind(null,l))))&&(t=we(o[a-2]),1<a)&&we(l)===t&&i[i.length-1].path!==t?i.findIndex(m.bind(null,o[a-2])):e:-1}));var l=(0,a.Fl)((()=>-1<o.value&&function(e,t){for(const r in t){var n=t[r];const o=e[r];if("string"==typeof n){if(n!==o)return!1}else if(!f(o)||o.length!==n.length||n.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,r.value.params))),i=(0,a.Fl)((()=>-1<o.value&&o.value===n.matched.length-1&&g(n.params,r.value.params)));return{route:r,href:(0,a.Fl)((()=>r.value.href)),isActive:l,isExactActive:i,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),1}}(n)?t[(0,a.SU)(e.replace)?"replace":"push"]((0,a.SU)(e.to)).catch(u):Promise.resolve()}}}const be=(0,a.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ye,setup(e,{slots:t}){const n=(0,a.qj)(ye(e)),r=(0,a.f3)(pe).options,o=(0,a.Fl)((()=>({[Ee(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ee(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{var r=t.default&&t.default(n);return e.custom?r:(0,a.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}});function we(e){return e?(e.aliasOf||e).path:""}const Ee=(e,t,n)=>null!=e?e:null!=t?t:n;function ke(e,t){return e?1===(e=e(t)).length?e[0]:e:null}const Oe=(0,a.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=(0,a.f3)(de),o=(0,a.Fl)((()=>e.route||r.value)),l=(0,a.f3)(fe,0),i=(0,a.Fl)((()=>{let e=(0,a.SU)(l);for(var t,n=o.value.matched;(t=n[e])&&!t.components;)e++;return e})),s=(0,a.Fl)((()=>o.value.matched[i.value])),u=((0,a.JJ)(fe,(0,a.Fl)((()=>i.value+1))),(0,a.JJ)(ue,s),(0,a.JJ)(de,o),(0,a.iH)());return(0,a.YP)((()=>[u.value,s.value,e.name]),(([e,t,n],[r,o])=>{t&&(t.instances[n]=e,o)&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards)),!e||!t||o&&m(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{var r=o.value;const l=e.name,i=s.value;var f,p=i&&i.components[l];return p?(f=(f=i.props[l])?!0===f?r.params:"function"==typeof f?f(r):f:null,f=(0,a.h)(p,c({},f,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[l]=null)},ref:u})),ke(n.default,{Component:f,route:r})||f):ke(n.default,{Component:p,route:r})}}});function Re(e){const t=I(e.routes,e),n=e.parseQuery||ce,o=e.stringifyQuery||se,i=e.history,p=ve(),h=ve(),v=ve(),y=(0,a.XI)(j);let b=j;l&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=s.bind(null,(e=>""+e)),R=s.bind(null,le),P=s.bind(null,ie);function x(e,r){if(r=c({},r||y.value),"string"==typeof e){var a=d(n,e,r.path);const o=t.resolve({path:a.path},r),l=i.createHref(a.fullPath);return c(a,o,{params:P(o.params),hash:ie(a.hash),redirectedFrom:void 0,href:l})}let l;if("path"in e)l=c({},e,{path:d(n,e.path,r.path).path});else{var s=c({},e.params);for(const e in s)null==s[e]&&delete s[e];l=c({},e,{params:R(s)}),r.params=R(r.params)}const u=t.resolve(l,r);var p;a=e.hash||"",u.params=w(P(u.params)),r=o,r=(p=c({},e,{hash:oe(a).replace(ee,"{").replace(ne,"}").replace(Q,"^"),path:u.path})).query?r(p.query):"",r=p.path+(r&&"?")+r+(p.hash||"");const h=i.createHref(r);return c({fullPath:r,hash:a,query:o===se?function(e){var t={};for(const r in e){var n=e[r];void 0!==n&&(t[r]=f(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}(e.query):e.query||{}},u,{redirectedFrom:void 0,href:h})}function C(e){return"string"==typeof e?d(n,e,y.value.path):c({},e)}function $(e,t){if(b!==e)return q(8,{from:t,to:e})}function F(e){return M(e)}function L(e){var t=e.matched[e.matched.length-1];if(t&&t.redirect){let n="function"==typeof(t=t.redirect)?t(e):t;return"string"==typeof n&&((n=n.includes("?")||n.includes("#")?n=C(n):{path:n}).params={}),c({query:e.query,hash:e.hash,params:"path"in n?{}:e.params},n)}}function M(e,t){var n=b=x(e);const r=y.value,a=e.state,l=e.force,i=!0===e.replace;var s,u,f;if(e=L(n))return M(c(C(e),{state:"object"==typeof e?c({},a,e.state):a,force:l,replace:i}),t||n);const p=n;let h;return p.redirectedFrom=t,!l&&(e=o,u=(s=r).matched.length-1,f=n.matched.length-1,-1<u)&&u==f&&m(s.matched[u],n.matched[f])&&g(s.params,n.params)&&e(s.query)===e(n.query)&&s.hash===n.hash&&(h=q(16,{to:p,from:r}),H(r,r,!0,!1)),(h?Promise.resolve(h):_(p,r)).catch((e=>A(e)?A(e,2)?e:z(e):V(e,p,r))).then((e=>{if(e){if(A(e,2))return M(c({replace:i},C(e.to),{state:"object"==typeof e.to?c({},a,e.to.state):a,force:l}),t||p)}else e=G(p,r,!0,i,a);return B(p,r,e),e}))}function U(e){var t=X.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(e,t){let n;const[r,o,a]=function(e,t){var n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let l=0;l<a;l++){const a=t.matched[l],i=(a&&(e.matched.find((e=>m(e,a)))?r:n).push(a),e.matched[l]);!i||t.matched.find((e=>m(e,i)))||o.push(i)}return[n,r,o]}(e,t);n=ge(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(me(r,e,t))}));const l=function(e,t){return(e=$(e,t))?Promise.reject(e):Promise.resolve()}.bind(null,e,t);return n.push(l),N(n).then((()=>{n=[];for(const r of p.list())n.push(me(r,e,t));return n.push(l),N(n)})).then((()=>{n=ge(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(me(r,e,t))}));return n.push(l),N(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(f(r.beforeEnter))for(const o of r.beforeEnter)n.push(me(o,e,t));else n.push(me(r.beforeEnter,e,t));return n.push(l),N(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),(n=ge(a,"beforeRouteEnter",e,t)).push(l),N(n)))).then((()=>{n=[];for(const r of h.list())n.push(me(r,e,t));return n.push(l),N(n)})).catch((e=>A(e,8)?e:Promise.reject(e)))}function B(e,t,n){v.list().forEach((r=>U((()=>r(e,t,n)))))}function G(e,t,n,r,o){if(a=$(e,t))return a;var a=t===j,s=l?history.state:{};n&&(r||a?i.replace(e.fullPath,c({scroll:a&&s&&s.scroll},o)):i.push(e.fullPath,o)),H(y.value=e,t,n,a),z()}let W,D,J=ve(),T=ve();function V(e,t,n){z(e);var r=T.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function z(e){return D||(D=!e,W=W||i.listen(((e,t,n)=>{if(Z.listening){const t=x(e);var o;if(e=L(t))M(c(e,{replace:!0}),t).catch(u);else{b=t;const a=y.value;l&&(e=k(a.fullPath,n.delta),o=E(),O.set(e,o)),_(t,a).catch((e=>A(e,12)?e:A(e,2)?(M(e.to,t).then((e=>{A(e,20)&&!n.delta&&n.type===r.pop&&i.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&i.go(-n.delta,!1),V(e,t,a)))).then((e=>{(e=e||G(t,a,!1))&&(n.delta&&!A(e,8)?i.go(-n.delta,!1):n.type===r.pop&&A(e,20)&&i.go(-1,!1)),B(t,a,e)})).catch(u)}}})),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function H(t,n,r,o){const i=e.scrollBehavior;if(!l||!i)return Promise.resolve();const c=!r&&(s=k(t.fullPath,0),u=O.get(s),O.delete(s),u)||(o||!r)&&history.state&&history.state.scroll||null;var s,u;(0,a.Y3)().then((()=>i(t,n,c))).then((e=>e&&function(e){let t;if("el"in e){var n=e.el,r="string"==typeof n&&n.startsWith("#");if(!(r="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n))return;n=r,r=e,o=document.documentElement.getBoundingClientRect(),n=n.getBoundingClientRect(),t={behavior:r.behavior,left:n.left-o.left-(r.left||0),top:n.top-o.top-(r.top||0)}}else t=e;var o;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>V(e,t,n)))}const K=e=>i.go(e);let Y;const X=new Set,Z={currentRoute:y,listening:!0,addRoute:function(e,n){let r,o;return o=S(e)?(r=t.getRecordMatcher(e),n):e,t.addRoute(o,r)},removeRoute:function(e){(e=t.getRecordMatcher(e))&&t.removeRoute(e)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:x,options:e,push:F,replace:function(e){return F(c(C(e),{replace:!0}))},go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:p.add,beforeResolve:h.add,afterEach:v.add,onError:T.add,isReady:function(){return D&&y.value!==j?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))},install(e){e.component("RouterLink",be),e.component("RouterView",Oe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,a.SU)(y)}),l&&!Y&&y.value===j&&(Y=!0,F(i.location).catch((e=>{})));var t={};for(const e in j)Object.defineProperty(t,e,{get:()=>y.value[e],enumerable:!0});e.provide(pe,this),e.provide(he,(0,a.Um)(t)),e.provide(de,y);const n=e.unmount;X.add(e),e.unmount=function(){X.delete(e),X.size<1&&(b=j,W&&W(),W=null,y.value=j,Y=!1,D=!1),n()}}};function N(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return Z}function Pe(){return(0,a.f3)(pe)}function xe(){return(0,a.f3)(he)}}}]);