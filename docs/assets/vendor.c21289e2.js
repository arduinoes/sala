var XE=Object.defineProperty,QE=Object.defineProperties;var JE=Object.getOwnPropertyDescriptors;var Sf=Object.getOwnPropertySymbols;var ZE=Object.prototype.hasOwnProperty,ew=Object.prototype.propertyIsEnumerable;var Cf=(t,e,n)=>e in t?XE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,re=(t,e)=>{for(var n in e||(e={}))ZE.call(e,n)&&Cf(t,n,e[n]);if(Sf)for(var n of Sf(e))ew.call(e,n)&&Cf(t,n,e[n]);return t},Ao=(t,e)=>QE(t,JE(e));function Eu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const tw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nw=Eu(tw);function Og(t){return!!t||t===""}function wu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?rw(s):wu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(je(t))return t;if(Fe(t))return t}}const sw=/;(?![^(]*\))/g,iw=/:(.+)/;function rw(t){const e={};return t.split(sw).forEach(n=>{if(n){const s=n.split(iw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tu(t){let e="";if(je(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=Tu(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const K1=t=>je(t)?t:t==null?"":J(t)||Fe(t)&&(t.toString===Pg||!oe(t.toString))?JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>e&&e.__v_isRef?Ng(t,e.value):si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:kg(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!J(e)&&!Lg(e)?String(e):e,Ae={},ni=[],Vt=()=>{},ow=()=>!1,aw=/^on[^a-z]/,Fa=t=>aw.test(t),bu=t=>t.startsWith("onUpdate:"),ht=Object.assign,Au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cw=Object.prototype.hasOwnProperty,pe=(t,e)=>cw.call(t,e),J=Array.isArray,si=t=>Va(t)==="[object Map]",kg=t=>Va(t)==="[object Set]",oe=t=>typeof t=="function",je=t=>typeof t=="string",Iu=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Dg=t=>Fe(t)&&oe(t.then)&&oe(t.catch),Pg=Object.prototype.toString,Va=t=>Pg.call(t),lw=t=>Va(t).slice(8,-1),Lg=t=>Va(t)==="[object Object]",Su=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jo=Eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uw=/-(\w)/g,sn=Ba(t=>t.replace(uw,(e,n)=>n?n.toUpperCase():"")),hw=/\B([A-Z])/g,ki=Ba(t=>t.replace(hw,"-$1").toLowerCase()),ja=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),xc=Ba(t=>t?`on${ja(t)}`:""),Or=(t,e)=>!Object.is(t,e),Mc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fw=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rf;const dw=()=>Rf||(Rf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let cn;class xg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&cn&&(this.parent=cn,this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return cn=this,e()}finally{cn=this.parent}}on(){cn=this}off(){cn=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Mg(t){return new xg(t)}function pw(t,e=cn){e&&e.active&&e.effects.push(t)}const Cu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$g=t=>(t.w&jn)>0,Ug=t=>(t.n&jn)>0,gw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},mw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];$g(i)&&!Ug(i)?i.delete(t):e[n++]=i,i.w&=~jn,i.n&=~jn}e.length=n}},ml=new WeakMap;let ar=0,jn=1;const _l=30;let Xt;const ps=Symbol(""),yl=Symbol("");class Ru{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pw(this,s)}run(){if(!this.active)return this.fn();let e=Xt,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,$n=!0,jn=1<<++ar,ar<=_l?gw(this):Of(this),this.fn()}finally{ar<=_l&&mw(this),jn=1<<--ar,Xt=this.parent,$n=n,this.parent=void 0}}stop(){this.active&&(Of(this),this.onStop&&this.onStop(),this.active=!1)}}function Of(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const Fg=[];function Di(){Fg.push($n),$n=!1}function Pi(){const t=Fg.pop();$n=t===void 0?!0:t}function St(t,e,n){if($n&&Xt){let s=ml.get(t);s||ml.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Cu()),Vg(i)}}function Vg(t,e){let n=!1;ar<=_l?Ug(t)||(t.n|=jn,n=!$g(t)):n=!t.has(Xt),n&&(t.add(Xt),Xt.deps.push(t))}function vn(t,e,n,s,i,r){const o=ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Su(n)&&a.push(o.get("length")):(a.push(o.get(ps)),si(t)&&a.push(o.get(yl)));break;case"delete":J(t)||(a.push(o.get(ps)),si(t)&&a.push(o.get(yl)));break;case"set":si(t)&&a.push(o.get(ps));break}if(a.length===1)a[0]&&vl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);vl(Cu(c))}}function vl(t,e){for(const n of J(t)?t:[...t])(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const _w=Eu("__proto__,__v_isRef,__isVue"),Bg=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Iu)),yw=Ou(),vw=Ou(!1,!0),Ew=Ou(!0),Nf=ww();function ww(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=_e(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Di();const s=_e(this)[e].apply(this,n);return Pi(),s}}),t}function Ou(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?$w:Wg:e?Kg:qg).get(s))return s;const o=J(s);if(!t&&o&&pe(Nf,i))return Reflect.get(Nf,i,r);const a=Reflect.get(s,i,r);return(Iu(i)?Bg.has(i):_w(i))||(t||St(s,"get",i),e)?a:Pe(a)?!o||!Su(i)?a.value:a:Fe(a)?t?zg(a):Li(a):a}}const Tw=jg(),bw=jg(!0);function jg(t=!1){return function(n,s,i,r){let o=n[s];if(Nr(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&!Nr(i)&&(Gg(i)||(i=_e(i),o=_e(o)),!J(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=J(n)&&Su(s)?Number(s)<n.length:pe(n,s),c=Reflect.set(n,s,i,r);return n===_e(r)&&(a?Or(i,o)&&vn(n,"set",s,i):vn(n,"add",s,i)),c}}function Aw(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&vn(t,"delete",e,void 0),s}function Iw(t,e){const n=Reflect.has(t,e);return(!Iu(e)||!Bg.has(e))&&St(t,"has",e),n}function Sw(t){return St(t,"iterate",J(t)?"length":ps),Reflect.ownKeys(t)}const Hg={get:yw,set:Tw,deleteProperty:Aw,has:Iw,ownKeys:Sw},Cw={get:Ew,set(t,e){return!0},deleteProperty(t,e){return!0}},Rw=ht({},Hg,{get:vw,set:bw}),Nu=t=>t,Ha=t=>Reflect.getPrototypeOf(t);function Io(t,e,n=!1,s=!1){t=t.__v_raw;const i=_e(t),r=_e(e);e!==r&&!n&&St(i,"get",e),!n&&St(i,"get",r);const{has:o}=Ha(i),a=s?Nu:n?Pu:kr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function So(t,e=!1){const n=this.__v_raw,s=_e(n),i=_e(t);return t!==i&&!e&&St(s,"has",t),!e&&St(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Co(t,e=!1){return t=t.__v_raw,!e&&St(_e(t),"iterate",ps),Reflect.get(t,"size",t)}function kf(t){t=_e(t);const e=_e(this);return Ha(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function Df(t,e){e=_e(e);const n=_e(this),{has:s,get:i}=Ha(n);let r=s.call(n,t);r||(t=_e(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Or(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function Pf(t){const e=_e(this),{has:n,get:s}=Ha(e);let i=n.call(e,t);i||(t=_e(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&vn(e,"delete",t,void 0),r}function Lf(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function Ro(t,e){return function(s,i){const r=this,o=r.__v_raw,a=_e(o),c=e?Nu:t?Pu:kr;return!t&&St(a,"iterate",ps),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Oo(t,e,n){return function(...s){const i=this.__v_raw,r=_e(i),o=si(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Nu:e?Pu:kr;return!e&&St(r,"iterate",c?yl:ps),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function Ow(){const t={get(r){return Io(this,r)},get size(){return Co(this)},has:So,add:kf,set:Df,delete:Pf,clear:Lf,forEach:Ro(!1,!1)},e={get(r){return Io(this,r,!1,!0)},get size(){return Co(this)},has:So,add:kf,set:Df,delete:Pf,clear:Lf,forEach:Ro(!1,!0)},n={get(r){return Io(this,r,!0)},get size(){return Co(this,!0)},has(r){return So.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Ro(!0,!1)},s={get(r){return Io(this,r,!0,!0)},get size(){return Co(this,!0)},has(r){return So.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oo(r,!1,!1),n[r]=Oo(r,!0,!1),e[r]=Oo(r,!1,!0),s[r]=Oo(r,!0,!0)}),[t,n,e,s]}const[Nw,kw,Dw,Pw]=Ow();function ku(t,e){const n=e?t?Pw:Dw:t?kw:Nw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(pe(n,i)&&i in s?n:s,i,r)}const Lw={get:ku(!1,!1)},xw={get:ku(!1,!0)},Mw={get:ku(!0,!1)},qg=new WeakMap,Kg=new WeakMap,Wg=new WeakMap,$w=new WeakMap;function Uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fw(t){return t.__v_skip||!Object.isExtensible(t)?0:Uw(lw(t))}function Li(t){return Nr(t)?t:Du(t,!1,Hg,Lw,qg)}function Vw(t){return Du(t,!1,Rw,xw,Kg)}function zg(t){return Du(t,!0,Cw,Mw,Wg)}function Du(t,e,n,s,i){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Fw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Un(t){return Nr(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Nr(t){return!!(t&&t.__v_isReadonly)}function Gg(t){return!!(t&&t.__v_isShallow)}function Yg(t){return Un(t)||Nr(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function ui(t){return sa(t,"__v_skip",!0),t}const kr=t=>Fe(t)?Li(t):t,Pu=t=>Fe(t)?zg(t):t;function Xg(t){$n&&Xt&&(t=_e(t),Vg(t.dep||(t.dep=Cu())))}function Qg(t,e){t=_e(t),t.dep&&vl(t.dep)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Lu(t){return Jg(t,!1)}function Bw(t){return Jg(t,!0)}function Jg(t,e){return Pe(t)?t:new jw(t,e)}class jw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:kr(e)}get value(){return Xg(this),this._value}set value(e){e=this.__v_isShallow?e:_e(e),Or(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:kr(e),Qg(this))}}function fr(t){return Pe(t)?t.value:t}const Hw={get:(t,e,n)=>fr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Zg(t){return Un(t)?t:new Proxy(t,Hw)}function qw(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=Ww(t,n);return e}class Kw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ww(t,e,n){const s=t[e];return Pe(s)?s:new Kw(t,e,n)}class zw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ru(e,()=>{this._dirty||(this._dirty=!0,Qg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=_e(this);return Xg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gw(t,e,n=!1){let s,i;const r=oe(t);return r?(s=t,i=Vt):(s=t.get,i=t.set),new zw(s,i,r||!i,n)}Promise.resolve();function Fn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){qa(r,e,n)}return i}function Bt(t,e,n,s){if(oe(t)){const r=Fn(t,e,n,s);return r&&Dg(r)&&r.catch(o=>{qa(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}function qa(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Fn(c,null,10,[t,o,a]);return}}Yw(t,n,i,s)}function Yw(t,e,n,s=!0){console.error(t)}let ia=!1,El=!1;const wt=[];let hn=0;const dr=[];let cr=null,zs=0;const pr=[];let On=null,Gs=0;const em=Promise.resolve();let xu=null,wl=null;function Mu(t){const e=xu||em;return t?e.then(this?t.bind(this):t):e}function Xw(t){let e=hn+1,n=wt.length;for(;e<n;){const s=e+n>>>1;Dr(wt[s])<t?e=s+1:n=s}return e}function tm(t){(!wt.length||!wt.includes(t,ia&&t.allowRecurse?hn+1:hn))&&t!==wl&&(t.id==null?wt.push(t):wt.splice(Xw(t.id),0,t),nm())}function nm(){!ia&&!El&&(El=!0,xu=em.then(rm))}function Qw(t){const e=wt.indexOf(t);e>hn&&wt.splice(e,1)}function sm(t,e,n,s){J(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),nm()}function Jw(t){sm(t,cr,dr,zs)}function Zw(t){sm(t,On,pr,Gs)}function $u(t,e=null){if(dr.length){for(wl=e,cr=[...new Set(dr)],dr.length=0,zs=0;zs<cr.length;zs++)cr[zs]();cr=null,zs=0,wl=null,$u(t,e)}}function im(t){if(pr.length){const e=[...new Set(pr)];if(pr.length=0,On){On.push(...e);return}for(On=e,On.sort((n,s)=>Dr(n)-Dr(s)),Gs=0;Gs<On.length;Gs++)On[Gs]();On=null,Gs=0}}const Dr=t=>t.id==null?1/0:t.id;function rm(t){El=!1,ia=!0,$u(t),wt.sort((n,s)=>Dr(n)-Dr(s));const e=Vt;try{for(hn=0;hn<wt.length;hn++){const n=wt[hn];n&&n.active!==!1&&Fn(n,null,14)}}finally{hn=0,wt.length=0,im(),ia=!1,xu=null,(wt.length||dr.length||pr.length)&&rm(t)}}function eT(t,e,...n){const s=t.vnode.props||Ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f?i=n.map(p=>p.trim()):h&&(i=n.map(fw))}let a,c=s[a=xc(e)]||s[a=xc(sn(e))];!c&&r&&(c=s[a=xc(ki(e))]),c&&Bt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(l,t,6,i)}}function om(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=om(l,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(s.set(t,null),null):(J(r)?r.forEach(c=>o[c]=null):ht(o,r),s.set(t,o),o)}function Uu(t,e){return!t||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ki(e))||pe(t,e))}let Pt=null,am=null;function ra(t){const e=Pt;return Pt=t,am=t&&t.type.__scopeId||null,e}function tT(t,e=Pt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&qf(-1);const r=ra(e),o=t(...i);return ra(r),s._d&&qf(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function $c(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:v}=t;let y,w;const O=ra(t);try{if(n.shapeFlag&4){const A=i||s;y=Yt(u.call(A,A,h,r,p,f,m)),w=c}else{const A=e;y=Yt(A.length>1?A(r,{attrs:c,slots:a,emit:l}):A(r,null)),w=e.props?c:nT(c)}}catch(A){mr.length=0,qa(A,t,1),y=mt(Ts)}let P=y;if(w&&v!==!1){const A=Object.keys(w),{shapeFlag:j}=P;A.length&&j&7&&(o&&A.some(bu)&&(w=sT(w,o)),P=Pr(P,w))}return n.dirs&&(P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),y=P,ra(O),y}const nT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},sT=(t,e)=>{const n={};for(const s in t)(!bu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function iT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Uu(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xf(s,o,l):!0:!!o;return!1}function xf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Uu(n,r))return!0}return!1}function rT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const oT=t=>t.__isSuspense;function aT(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):Zw(t)}function Ho(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=Be||Pt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s.proxy):e}}const Mf={};function gr(t,e,n){return cm(t,e,n)}function cm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ae){const a=Be;let c,l=!1,u=!1;if(Pe(t)?(c=()=>t.value,l=Gg(t)):Un(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(Un),c=()=>t.map(w=>{if(Pe(w))return w.value;if(Un(w))return hs(w);if(oe(w))return Fn(w,a,2)})):oe(t)?e?c=()=>Fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Bt(t,a,3,[f])}:c=Vt,e&&s){const w=c;c=()=>hs(w())}let h,f=w=>{h=y.onStop=()=>{Fn(w,a,4)}};if(Lr)return f=Vt,e?n&&Bt(e,a,3,[c(),u?[]:void 0,f]):c(),Vt;let p=u?[]:Mf;const m=()=>{if(!!y.active)if(e){const w=y.run();(s||l||(u?w.some((O,P)=>Or(O,p[P])):Or(w,p)))&&(h&&h(),Bt(e,a,3,[w,p===Mf?void 0:p,f]),p=w)}else y.run()};m.allowRecurse=!!e;let v;i==="sync"?v=m:i==="post"?v=()=>ft(m,a&&a.suspense):v=()=>{!a||a.isMounted?Jw(m):m()};const y=new Ru(c,v);return e?n?m():p=y.run():i==="post"?ft(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Au(a.scope.effects,y)}}function cT(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?lm(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=Be;hi(this);const a=cm(i,r.bind(s),n);return o?hi(o):ms(),a}function lm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function hs(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))hs(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)hs(t[n],e);else if(kg(t)||si(t))t.forEach(n=>{hs(n,e)});else if(Lg(t))for(const n in t)hs(t[n],e);return t}function um(t){return oe(t)?{setup:t,name:t.name}:t}const Tl=t=>!!t.type.__asyncLoader,hm=t=>t.type.__isKeepAlive;function lT(t,e){fm(t,"a",e)}function uT(t,e){fm(t,"da",e)}function fm(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ka(e,s,n),n){let i=n.parent;for(;i&&i.parent;)hm(i.parent.vnode)&&hT(s,e,n,i),i=i.parent}}function hT(t,e,n,s){const i=Ka(e,t,s,!0);Fu(()=>{Au(s[e],i)},n)}function Ka(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Di(),hi(n);const a=Bt(e,n,t,o);return ms(),Pi(),a});return s?i.unshift(r):i.push(r),r}}const An=t=>(e,n=Be)=>(!Lr||t==="sp")&&Ka(t,e,n),fT=An("bm"),dT=An("m"),pT=An("bu"),gT=An("u"),mT=An("bum"),Fu=An("um"),_T=An("sp"),yT=An("rtg"),vT=An("rtc");function ET(t,e=Be){Ka("ec",t,e)}let bl=!0;function wT(t){const e=pm(t),n=t.proxy,s=t.ctx;bl=!1,e.beforeCreate&&$f(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:O,destroyed:P,unmounted:A,render:j,renderTracked:x,renderTriggered:$,errorCaptured:ne,serverPrefetch:se,expose:ue,inheritAttrs:ye,components:De,directives:Ie,filters:Ce}=e;if(l&&TT(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const de=o[ae];oe(de)&&(s[ae]=de.bind(n))}if(i){const ae=i.call(n,n);Fe(ae)&&(t.data=Li(ae))}if(bl=!0,r)for(const ae in r){const de=r[ae],xe=oe(de)?de.bind(n,n):oe(de.get)?de.get.bind(n,n):Vt,$t=!oe(de)&&oe(de.set)?de.set.bind(n):Vt,vt=Ft({get:xe,set:$t});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>vt.value,set:et=>vt.value=et})}if(a)for(const ae in a)dm(a[ae],s,n,ae);if(c){const ae=oe(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(de=>{Ho(de,ae[de])})}u&&$f(u,t,"c");function fe(ae,de){J(de)?de.forEach(xe=>ae(xe.bind(n))):de&&ae(de.bind(n))}if(fe(fT,h),fe(dT,f),fe(pT,p),fe(gT,m),fe(lT,v),fe(uT,y),fe(ET,ne),fe(vT,x),fe(yT,$),fe(mT,O),fe(Fu,A),fe(_T,se),J(ue))if(ue.length){const ae=t.exposed||(t.exposed={});ue.forEach(de=>{Object.defineProperty(ae,de,{get:()=>n[de],set:xe=>n[de]=xe})})}else t.exposed||(t.exposed={});j&&t.render===Vt&&(t.render=j),ye!=null&&(t.inheritAttrs=ye),De&&(t.components=De),Ie&&(t.directives=Ie)}function TT(t,e,n=Vt,s=!1){J(t)&&(t=Al(t));for(const i in t){const r=t[i];let o;Fe(r)?"default"in r?o=Jt(r.from||i,r.default,!0):o=Jt(r.from||i):o=Jt(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function $f(t,e,n){Bt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function dm(t,e,n,s){const i=s.includes(".")?lm(n,s):()=>n[s];if(je(t)){const r=e[t];oe(r)&&gr(i,r)}else if(oe(t))gr(i,t.bind(n));else if(Fe(t))if(J(t))t.forEach(r=>dm(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&gr(i,r,t)}}function pm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>oa(c,l,o,!0)),oa(c,e,o)),r.set(e,c),c}function oa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&oa(t,r,n,!0),i&&i.forEach(o=>oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bT={data:Uf,props:os,emits:os,methods:os,computed:os,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:os,directives:os,watch:IT,provide:Uf,inject:AT};function Uf(t,e){return e?t?function(){return ht(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function AT(t,e){return os(Al(t),Al(e))}function Al(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?ht(ht(Object.create(null),t),e):e}function IT(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=rt(t[s],e[s]);return n}function ST(t,e,n,s=!1){const i={},r={};sa(r,Wa,1),t.propsDefaults=Object.create(null),gm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function CT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=_e(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const p=e[f];if(c)if(pe(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const m=sn(f);i[m]=Il(c,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{gm(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=ki(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Il(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!pe(e,h)&&!0)&&(delete r[h],l=!0)}l&&vn(t,"set","$attrs")}function gm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jo(c))continue;const l=e[c];let u;i&&pe(i,u=sn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Uu(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=_e(n),l=a||Ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Il(i,c,h,l[h],t,!pe(l,h))}}return o}function Il(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(hi(i),s=l[n]=c.call(null,e),ms())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ki(n))&&(s=!0))}return s}function mm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[f,p]=mm(h,e,!0);ht(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,ni),ni;if(J(r))for(let u=0;u<r.length;u++){const h=sn(r[u]);Ff(h)&&(o[h]=Ae)}else if(r)for(const u in r){const h=sn(u);if(Ff(h)){const f=r[u],p=o[h]=J(f)||oe(f)?{type:f}:f;if(p){const m=jf(Boolean,p.type),v=jf(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||pe(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Ff(t){return t[0]!=="$"}function Vf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Bf(t,e){return Vf(t)===Vf(e)}function jf(t,e){return J(e)?e.findIndex(n=>Bf(n,t)):oe(e)&&Bf(e,t)?0:-1}const _m=t=>t[0]==="_"||t==="$stable",Vu=t=>J(t)?t.map(Yt):[Yt(t)],RT=(t,e,n)=>{const s=tT((...i)=>Vu(e(...i)),n);return s._c=!1,s},ym=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_m(i))continue;const r=t[i];if(oe(r))e[i]=RT(i,r,s);else if(r!=null){const o=Vu(r);e[i]=()=>o}}},vm=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},OT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),sa(e,"_",n)):ym(e,t.slots={})}else t.slots={},e&&vm(t,e);sa(t.slots,Wa,1)},NT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ht(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ym(e,i)),o=e}else e&&(vm(t,e),o={default:1});if(r)for(const a in i)!_m(a)&&!(a in o)&&delete i[a]};function W1(t,e){const n=Pt;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ae]=e[r];oe(o)&&(o={mounted:o,updated:o}),o.deep&&hs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function es(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Di(),Bt(c,n,8,[t.el,a,t,e]),Pi())}}function Em(){return{app:null,config:{isNativeTag:ow,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kT=0;function DT(t,e){return function(s,i=null){i!=null&&!Fe(i)&&(i=null);const r=Em(),o=new Set;let a=!1;const c=r.app={_uid:kT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:nb,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=mt(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Hu(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Sl(t,e,n,s,i=!1){if(J(t)){t.forEach((f,p)=>Sl(f,e&&(J(e)?e[p]:e),n,s,i));return}if(Tl(s)&&!i)return;const r=s.shapeFlag&4?Hu(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):Pe(l)&&(l.value=null)),oe(c))Fn(c,a,12,[o,u]);else{const f=je(c),p=Pe(c);if(f||p){const m=()=>{if(t.f){const v=f?u[c]:c.value;i?J(v)&&Au(v,r):J(v)?v.includes(r)||v.push(r):f?u[c]=[r]:(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):Pe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ft(m,n)):m()}}}const ft=aT;function PT(t){return LT(t)}function LT(t,e){const n=dw();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Vt,cloneNode:m,insertStaticContent:v}=t,y=(d,g,_,b=null,T=null,N=null,M=!1,R=null,k=!!g.dynamicChildren)=>{if(d===g)return;d&&!Qi(d,g)&&(b=B(d),We(d,T,N,!0),d=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:C,ref:H,shapeFlag:V}=g;switch(C){case Bu:w(d,g,_,b);break;case Ts:O(d,g,_,b);break;case qo:d==null&&P(g,_,b,M);break;case un:Ie(d,g,_,b,T,N,M,R,k);break;default:V&1?x(d,g,_,b,T,N,M,R,k):V&6?Ce(d,g,_,b,T,N,M,R,k):(V&64||V&128)&&C.process(d,g,_,b,T,N,M,R,k,Ee)}H!=null&&T&&Sl(H,d&&d.ref,N,g||d,!g)},w=(d,g,_,b)=>{if(d==null)s(g.el=a(g.children),_,b);else{const T=g.el=d.el;g.children!==d.children&&l(T,g.children)}},O=(d,g,_,b)=>{d==null?s(g.el=c(g.children||""),_,b):g.el=d.el},P=(d,g,_,b)=>{[d.el,d.anchor]=v(d.children,g,_,b,d.el,d.anchor)},A=({el:d,anchor:g},_,b)=>{let T;for(;d&&d!==g;)T=f(d),s(d,_,b),d=T;s(g,_,b)},j=({el:d,anchor:g})=>{let _;for(;d&&d!==g;)_=f(d),i(d),d=_;i(g)},x=(d,g,_,b,T,N,M,R,k)=>{M=M||g.type==="svg",d==null?$(g,_,b,T,N,M,R,k):ue(d,g,T,N,M,R,k)},$=(d,g,_,b,T,N,M,R)=>{let k,C;const{type:H,props:V,shapeFlag:q,transition:G,patchFlag:ce,dirs:we}=d;if(d.el&&m!==void 0&&ce===-1)k=d.el=m(d.el);else{if(k=d.el=o(d.type,N,V&&V.is,V),q&8?u(k,d.children):q&16&&se(d.children,k,null,b,T,N&&H!=="foreignObject",M,R),we&&es(d,null,b,"created"),V){for(const Re in V)Re!=="value"&&!jo(Re)&&r(k,Re,null,V[Re],N,d.children,b,T,D);"value"in V&&r(k,"value",null,V.value),(C=V.onVnodeBeforeMount)&&Wt(C,b,d)}ne(k,d,d.scopeId,M,b)}we&&es(d,null,b,"beforeMount");const Te=(!T||T&&!T.pendingBranch)&&G&&!G.persisted;Te&&G.beforeEnter(k),s(k,g,_),((C=V&&V.onVnodeMounted)||Te||we)&&ft(()=>{C&&Wt(C,b,d),Te&&G.enter(k),we&&es(d,null,b,"mounted")},T)},ne=(d,g,_,b,T)=>{if(_&&p(d,_),b)for(let N=0;N<b.length;N++)p(d,b[N]);if(T){let N=T.subTree;if(g===N){const M=T.vnode;ne(d,M,M.scopeId,M.slotScopeIds,T.parent)}}},se=(d,g,_,b,T,N,M,R,k=0)=>{for(let C=k;C<d.length;C++){const H=d[C]=R?Nn(d[C]):Yt(d[C]);y(null,H,g,_,b,T,N,M,R)}},ue=(d,g,_,b,T,N,M)=>{const R=g.el=d.el;let{patchFlag:k,dynamicChildren:C,dirs:H}=g;k|=d.patchFlag&16;const V=d.props||Ae,q=g.props||Ae;let G;_&&ts(_,!1),(G=q.onVnodeBeforeUpdate)&&Wt(G,_,g,d),H&&es(g,d,_,"beforeUpdate"),_&&ts(_,!0);const ce=T&&g.type!=="foreignObject";if(C?ye(d.dynamicChildren,C,R,_,b,ce,N):M||xe(d,g,R,null,_,b,ce,N,!1),k>0){if(k&16)De(R,g,V,q,_,b,T);else if(k&2&&V.class!==q.class&&r(R,"class",null,q.class,T),k&4&&r(R,"style",V.style,q.style,T),k&8){const we=g.dynamicProps;for(let Te=0;Te<we.length;Te++){const Re=we[Te],Ut=V[Re],Vs=q[Re];(Vs!==Ut||Re==="value")&&r(R,Re,Ut,Vs,T,d.children,_,b,D)}}k&1&&d.children!==g.children&&u(R,g.children)}else!M&&C==null&&De(R,g,V,q,_,b,T);((G=q.onVnodeUpdated)||H)&&ft(()=>{G&&Wt(G,_,g,d),H&&es(g,d,_,"updated")},b)},ye=(d,g,_,b,T,N,M)=>{for(let R=0;R<g.length;R++){const k=d[R],C=g[R],H=k.el&&(k.type===un||!Qi(k,C)||k.shapeFlag&70)?h(k.el):_;y(k,C,H,null,b,T,N,M,!0)}},De=(d,g,_,b,T,N,M)=>{if(_!==b){for(const R in b){if(jo(R))continue;const k=b[R],C=_[R];k!==C&&R!=="value"&&r(d,R,C,k,M,g.children,T,N,D)}if(_!==Ae)for(const R in _)!jo(R)&&!(R in b)&&r(d,R,_[R],null,M,g.children,T,N,D);"value"in b&&r(d,"value",_.value,b.value)}},Ie=(d,g,_,b,T,N,M,R,k)=>{const C=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:V,dynamicChildren:q,slotScopeIds:G}=g;G&&(R=R?R.concat(G):G),d==null?(s(C,_,b),s(H,_,b),se(g.children,_,H,T,N,M,R,k)):V>0&&V&64&&q&&d.dynamicChildren?(ye(d.dynamicChildren,q,_,T,N,M,R),(g.key!=null||T&&g===T.subTree)&&wm(d,g,!0)):xe(d,g,_,H,T,N,M,R,k)},Ce=(d,g,_,b,T,N,M,R,k)=>{g.slotScopeIds=R,d==null?g.shapeFlag&512?T.ctx.activate(g,_,b,M,k):kt(g,_,b,T,N,M,k):fe(d,g,k)},kt=(d,g,_,b,T,N,M)=>{const R=d.component=YT(d,b,T);if(hm(d)&&(R.ctx.renderer=Ee),XT(R),R.asyncDep){if(T&&T.registerDep(R,ae),!d.el){const k=R.subTree=mt(Ts);O(null,k,g,_)}return}ae(R,d,g,_,T,N,M)},fe=(d,g,_)=>{const b=g.component=d.component;if(iT(d,g,_))if(b.asyncDep&&!b.asyncResolved){de(b,g,_);return}else b.next=g,Qw(b.update),b.update();else g.component=d.component,g.el=d.el,b.vnode=g},ae=(d,g,_,b,T,N,M)=>{const R=()=>{if(d.isMounted){let{next:H,bu:V,u:q,parent:G,vnode:ce}=d,we=H,Te;ts(d,!1),H?(H.el=ce.el,de(d,H,M)):H=ce,V&&Mc(V),(Te=H.props&&H.props.onVnodeBeforeUpdate)&&Wt(Te,G,H,ce),ts(d,!0);const Re=$c(d),Ut=d.subTree;d.subTree=Re,y(Ut,Re,h(Ut.el),B(Ut),d,T,N),H.el=Re.el,we===null&&rT(d,Re.el),q&&ft(q,T),(Te=H.props&&H.props.onVnodeUpdated)&&ft(()=>Wt(Te,G,H,ce),T)}else{let H;const{el:V,props:q}=g,{bm:G,m:ce,parent:we}=d,Te=Tl(g);if(ts(d,!1),G&&Mc(G),!Te&&(H=q&&q.onVnodeBeforeMount)&&Wt(H,we,g),ts(d,!0),V&&Z){const Re=()=>{d.subTree=$c(d),Z(V,d.subTree,d,T,null)};Te?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Re()):Re()}else{const Re=d.subTree=$c(d);y(null,Re,_,b,d,T,N),g.el=Re.el}if(ce&&ft(ce,T),!Te&&(H=q&&q.onVnodeMounted)){const Re=g;ft(()=>Wt(H,we,Re),T)}g.shapeFlag&256&&d.a&&ft(d.a,T),d.isMounted=!0,g=_=b=null}},k=d.effect=new Ru(R,()=>tm(d.update),d.scope),C=d.update=k.run.bind(k);C.id=d.uid,ts(d,!0),C()},de=(d,g,_)=>{g.component=d;const b=d.vnode.props;d.vnode=g,d.next=null,CT(d,g.props,b,_),NT(d,g.children,_),Di(),$u(void 0,d.update),Pi()},xe=(d,g,_,b,T,N,M,R,k=!1)=>{const C=d&&d.children,H=d?d.shapeFlag:0,V=g.children,{patchFlag:q,shapeFlag:G}=g;if(q>0){if(q&128){vt(C,V,_,b,T,N,M,R,k);return}else if(q&256){$t(C,V,_,b,T,N,M,R,k);return}}G&8?(H&16&&D(C,T,N),V!==C&&u(_,V)):H&16?G&16?vt(C,V,_,b,T,N,M,R,k):D(C,T,N,!0):(H&8&&u(_,""),G&16&&se(V,_,b,T,N,M,R,k))},$t=(d,g,_,b,T,N,M,R,k)=>{d=d||ni,g=g||ni;const C=d.length,H=g.length,V=Math.min(C,H);let q;for(q=0;q<V;q++){const G=g[q]=k?Nn(g[q]):Yt(g[q]);y(d[q],G,_,null,T,N,M,R,k)}C>H?D(d,T,N,!0,!1,V):se(g,_,b,T,N,M,R,k,V)},vt=(d,g,_,b,T,N,M,R,k)=>{let C=0;const H=g.length;let V=d.length-1,q=H-1;for(;C<=V&&C<=q;){const G=d[C],ce=g[C]=k?Nn(g[C]):Yt(g[C]);if(Qi(G,ce))y(G,ce,_,null,T,N,M,R,k);else break;C++}for(;C<=V&&C<=q;){const G=d[V],ce=g[q]=k?Nn(g[q]):Yt(g[q]);if(Qi(G,ce))y(G,ce,_,null,T,N,M,R,k);else break;V--,q--}if(C>V){if(C<=q){const G=q+1,ce=G<H?g[G].el:b;for(;C<=q;)y(null,g[C]=k?Nn(g[C]):Yt(g[C]),_,ce,T,N,M,R,k),C++}}else if(C>q)for(;C<=V;)We(d[C],T,N,!0),C++;else{const G=C,ce=C,we=new Map;for(C=ce;C<=q;C++){const Et=g[C]=k?Nn(g[C]):Yt(g[C]);Et.key!=null&&we.set(Et.key,C)}let Te,Re=0;const Ut=q-ce+1;let Vs=!1,bf=0;const Xi=new Array(Ut);for(C=0;C<Ut;C++)Xi[C]=0;for(C=G;C<=V;C++){const Et=d[C];if(Re>=Ut){We(Et,T,N,!0);continue}let Kt;if(Et.key!=null)Kt=we.get(Et.key);else for(Te=ce;Te<=q;Te++)if(Xi[Te-ce]===0&&Qi(Et,g[Te])){Kt=Te;break}Kt===void 0?We(Et,T,N,!0):(Xi[Kt-ce]=C+1,Kt>=bf?bf=Kt:Vs=!0,y(Et,g[Kt],_,null,T,N,M,R,k),Re++)}const Af=Vs?xT(Xi):ni;for(Te=Af.length-1,C=Ut-1;C>=0;C--){const Et=ce+C,Kt=g[Et],If=Et+1<H?g[Et+1].el:b;Xi[C]===0?y(null,Kt,_,If,T,N,M,R,k):Vs&&(Te<0||C!==Af[Te]?et(Kt,_,If,2):Te--)}}},et=(d,g,_,b,T=null)=>{const{el:N,type:M,transition:R,children:k,shapeFlag:C}=d;if(C&6){et(d.component.subTree,g,_,b);return}if(C&128){d.suspense.move(g,_,b);return}if(C&64){M.move(d,g,_,Ee);return}if(M===un){s(N,g,_);for(let V=0;V<k.length;V++)et(k[V],g,_,b);s(d.anchor,g,_);return}if(M===qo){A(d,g,_);return}if(b!==2&&C&1&&R)if(b===0)R.beforeEnter(N),s(N,g,_),ft(()=>R.enter(N),T);else{const{leave:V,delayLeave:q,afterLeave:G}=R,ce=()=>s(N,g,_),we=()=>{V(N,()=>{ce(),G&&G()})};q?q(N,ce,we):we()}else s(N,g,_)},We=(d,g,_,b=!1,T=!1)=>{const{type:N,props:M,ref:R,children:k,dynamicChildren:C,shapeFlag:H,patchFlag:V,dirs:q}=d;if(R!=null&&Sl(R,null,_,d,!0),H&256){g.ctx.deactivate(d);return}const G=H&1&&q,ce=!Tl(d);let we;if(ce&&(we=M&&M.onVnodeBeforeUnmount)&&Wt(we,g,d),H&6)F(d.component,_,b);else{if(H&128){d.suspense.unmount(_,b);return}G&&es(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,_,T,Ee,b):C&&(N!==un||V>0&&V&64)?D(C,g,_,!1,!0):(N===un&&V&384||!T&&H&16)&&D(k,g,_),b&&qt(d)}(ce&&(we=M&&M.onVnodeUnmounted)||G)&&ft(()=>{we&&Wt(we,g,d),G&&es(d,null,g,"unmounted")},_)},qt=d=>{const{type:g,el:_,anchor:b,transition:T}=d;if(g===un){E(_,b);return}if(g===qo){j(d);return}const N=()=>{i(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:R}=T,k=()=>M(_,N);R?R(d.el,N,k):k()}else N()},E=(d,g)=>{let _;for(;d!==g;)_=f(d),i(d),d=_;i(g)},F=(d,g,_)=>{const{bum:b,scope:T,update:N,subTree:M,um:R}=d;b&&Mc(b),T.stop(),N&&(N.active=!1,We(M,d,g,_)),R&&ft(R,g),ft(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(d,g,_,b=!1,T=!1,N=0)=>{for(let M=N;M<d.length;M++)We(d[M],g,_,b,T)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ge=(d,g,_)=>{d==null?g._vnode&&We(g._vnode,null,null,!0):y(g._vnode||null,d,g,null,null,null,_),im(),g._vnode=d},Ee={p:y,um:We,m:et,r:qt,mt:kt,mc:se,pc:xe,pbc:ye,n:B,o:t};let ie,Z;return e&&([ie,Z]=e(Ee)),{render:ge,hydrate:ie,createApp:DT(ge,ie)}}function ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wm(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Nn(i[r]),a.el=o.el),n||wm(o,a))}}function xT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const MT=t=>t.__isTeleport,Tm="components";function z1(t,e){return UT(Tm,t,!0,e)||t}const $T=Symbol();function UT(t,e,n=!0,s=!1){const i=Pt||Be;if(i){const r=i.type;if(t===Tm){const a=eb(r);if(a&&(a===e||a===sn(e)||a===ja(sn(e))))return r}const o=Hf(i[t]||r[t],e)||Hf(i.appContext[t],e);return!o&&s?r:o}}function Hf(t,e){return t&&(t[e]||t[sn(e)]||t[ja(sn(e))])}const un=Symbol(void 0),Bu=Symbol(void 0),Ts=Symbol(void 0),qo=Symbol(void 0),mr=[];let gs=null;function FT(t=!1){mr.push(gs=t?null:[])}function VT(){mr.pop(),gs=mr[mr.length-1]||null}let aa=1;function qf(t){aa+=t}function bm(t){return t.dynamicChildren=aa>0?gs||ni:null,VT(),aa>0&&gs&&gs.push(t),t}function G1(t,e,n,s,i,r){return bm(Im(t,e,n,s,i,r,!0))}function BT(t,e,n,s,i){return bm(mt(t,e,n,s,i,!0))}function Cl(t){return t?t.__v_isVNode===!0:!1}function Qi(t,e){return t.type===e.type&&t.key===e.key}const Wa="__vInternal",Am=({key:t})=>t!=null?t:null,Ko=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Pe(t)||oe(t)?{i:Pt,r:t,k:e,f:!!n}:t:null;function Im(t,e=null,n=null,s=0,i=null,r=t===un?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&Ko(e),scopeId:am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(ju(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),aa>0&&!o&&gs&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&gs.push(c),c}const mt=jT;function jT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===$T)&&(t=Ts),Cl(t)){const a=Pr(t,e,!0);return n&&ju(a,n),a}if(tb(t)&&(t=t.__vccOpts),e){e=HT(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=Tu(a)),Fe(c)&&(Yg(c)&&!J(c)&&(c=ht({},c)),e.style=wu(c))}const o=je(t)?1:oT(t)?128:MT(t)?64:Fe(t)?4:oe(t)?2:0;return Im(t,e,n,s,i,o,r,!0)}function HT(t){return t?Yg(t)||Wa in t?ht({},t):t:null}function Pr(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?KT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&i?J(i)?i.concat(Ko(e)):[i,Ko(e)]:Ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==un?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pr(t.ssContent),ssFallback:t.ssFallback&&Pr(t.ssFallback),el:t.el,anchor:t.anchor}}function qT(t=" ",e=0){return mt(Bu,null,t,e)}function Y1(t,e){const n=mt(qo,null,t);return n.staticCount=e,n}function X1(t="",e=!1){return e?(FT(),BT(Ts,null,t)):mt(Ts,null,t)}function Yt(t){return t==null||typeof t=="boolean"?mt(Ts):J(t)?mt(un,null,t.slice()):typeof t=="object"?Nn(t):mt(Bu,null,String(t))}function Nn(t){return t.el===null||t.memo?t:Pr(t)}function ju(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ju(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Wa in e)?e._ctx=Pt:i===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),s&64?(n=16,e=[qT(e)]):n=8);t.children=e,t.shapeFlag|=n}function KT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Tu([e.class,s.class]));else if(i==="style")e.style=wu([e.style,s.style]);else if(Fa(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Wt(t,e,n,s=null){Bt(t,e,7,[n,s])}function Q1(t,e,n,s){let i;const r=n&&n[s];if(J(t)||je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Rl=t=>t?Cm(t)?Hu(t)||t.proxy:Rl(t.parent):null,ca=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rl(t.parent),$root:t=>Rl(t.root),$emit:t=>t.emit,$options:t=>pm(t),$forceUpdate:t=>()=>tm(t.update),$nextTick:t=>Mu.bind(t.proxy),$watch:t=>cT.bind(t)}),WT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==Ae&&pe(s,e))return o[e]=1,s[e];if(i!==Ae&&pe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,r[e];if(n!==Ae&&pe(n,e))return o[e]=4,n[e];bl&&(o[e]=0)}}const u=ca[e];let h,f;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==Ae&&pe(i,e)?(i[e]=n,!0):s!==Ae&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ae&&pe(t,o)||e!==Ae&&pe(e,o)||(a=r[0])&&pe(a,o)||pe(s,o)||pe(ca,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},zT=Em();let GT=0;function YT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||zT,r={uid:GT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(s,i),emitsOptions:om(s,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=eT.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const Sm=()=>Be||Pt,hi=t=>{Be=t,t.scope.on()},ms=()=>{Be&&Be.scope.off(),Be=null};function Cm(t){return t.vnode.shapeFlag&4}let Lr=!1;function XT(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,i=Cm(t);ST(t,n,i,e),OT(t,s);const r=i?QT(t,e):void 0;return Lr=!1,r}function QT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ui(new Proxy(t.ctx,WT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ZT(t):null;hi(t),Di();const r=Fn(s,t,0,[t.props,i]);if(Pi(),ms(),Dg(r)){if(r.then(ms,ms),e)return r.then(o=>{Kf(t,o,e)}).catch(o=>{qa(o,t,0)});t.asyncDep=r}else Kf(t,r,e)}else Rm(t,e)}function Kf(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Zg(e)),Rm(t,n)}let Wf;function Rm(t,e,n){const s=t.type;if(!t.render){if(!e&&Wf&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ht(ht({isCustomElement:r,delimiters:a},o),c);s.render=Wf(i,l)}}t.render=s.render||Vt}hi(t),Di(),wT(t),Pi(),ms()}function JT(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function ZT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=JT(t))},slots:t.slots,emit:t.emit,expose:e}}function Hu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zg(ui(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ca)return ca[n](t)}}))}function eb(t){return oe(t)&&t.displayName||t.name}function tb(t){return oe(t)&&"__vccOpts"in t}const Ft=(t,e)=>Gw(t,e,Lr);function Om(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!J(e)?Cl(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Cl(n)&&(n=[n]),mt(t,e,n))}const nb="3.2.31",sb="http://www.w3.org/2000/svg",ls=typeof document!="undefined"?document:null,zf=ls&&ls.createElement("template"),ib={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ls.createElementNS(sb,t):ls.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ls.createTextNode(t),createComment:t=>ls.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ls.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{zf.innerHTML=s?`<svg>${t}</svg>`:t;const a=zf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ob(t,e,n){const s=t.style,i=je(n);if(n&&!i){for(const r in n)Ol(s,r,n[r]);if(e&&!je(e))for(const r in e)n[r]==null&&Ol(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Gf=/\s*!important$/;function Ol(t,e,n){if(J(n))n.forEach(s=>Ol(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=ab(t,e);Gf.test(n)?t.setProperty(ki(s),n.replace(Gf,""),"important"):t[s]=n}}const Yf=["Webkit","Moz","ms"],Uc={};function ab(t,e){const n=Uc[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return Uc[e]=s;s=ja(s);for(let i=0;i<Yf.length;i++){const r=Yf[i]+s;if(r in t)return Uc[e]=r}return e}const Xf="http://www.w3.org/1999/xlink";function cb(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n);else{const r=nw(e);n==null||r&&!Og(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function lb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Og(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let la=Date.now,Nm=!1;if(typeof window!="undefined"){la()>document.createEvent("Event").timeStamp&&(la=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Nm=!!(t&&Number(t[1])<=53)}let Nl=0;const ub=Promise.resolve(),hb=()=>{Nl=0},fb=()=>Nl||(ub.then(hb),Nl=la());function db(t,e,n,s){t.addEventListener(e,n,s)}function pb(t,e,n,s){t.removeEventListener(e,n,s)}function gb(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=mb(e);if(s){const l=r[e]=_b(s,i);db(t,a,l,c)}else o&&(pb(t,a,o,c),r[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function mb(t){let e;if(Qf.test(t)){e={};let n;for(;n=t.match(Qf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ki(t.slice(2)),e]}function _b(t,e){const n=s=>{const i=s.timeStamp||la();(Nm||i>=n.attached-1)&&Bt(yb(s,n.value),e,5,[s])};return n.value=t,n.attached=fb(),n}function yb(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Jf=/^on[a-z]/,vb=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?rb(t,s,i):e==="style"?ob(t,n,s):Fa(e)?bu(e)||gb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eb(t,e,s,i))?lb(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cb(t,e,s,i))};function Eb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Jf.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jf.test(e)&&je(n)?!1:e in t}const wb=["ctrl","shift","alt","meta"],Tb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wb.some(n=>t[`${n}Key`]&&!e.includes(n))},J1=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Tb[e[i]];if(r&&r(n,e))return}return t(n,...s)},Z1={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ji(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ji(t,!0),s.enter(t)):s.leave(t,()=>{Ji(t,!1)}):Ji(t,e))},beforeUnmount(t,{value:e}){Ji(t,e)}};function Ji(t,e){t.style.display=e?t._vod:"none"}const bb=ht({patchProp:vb},ib);let Zf;function Ab(){return Zf||(Zf=PT(bb))}const ex=(...t)=>{const e=Ab().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ib(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ib(t){return je(t)?document.querySelector(t):t}var Sb=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let km;const za=t=>km=t,Dm=Symbol();function kl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _r;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_r||(_r={}));function tx(){const t=Mg(!0),e=t.run(()=>Lu({}));let n=[],s=[];const i=ui({install(r){za(i),i._a=r,r.provide(Dm,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Sb?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Pm=()=>{};function ed(t,e,n,s=Pm){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Sm()&&Fu(i),i}function Bs(t,...e){t.slice().forEach(n=>{n(...e)})}function Dl(t,e){for(const n in e){const s=e[n],i=t[n];kl(i)&&kl(s)&&!Pe(s)&&!Un(s)?t[n]=Dl(i,s):t[n]=s}return t}const Cb=Symbol();function Rb(t){return!kl(t)||!t.hasOwnProperty(Cb)}const{assign:ln}=Object;function Ob(t){return!!(Pe(t)&&t.effect)}function Nb(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=qw(n.state.value[t]);return ln(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=ui(Ft(()=>{za(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Lm(t,l,e,n),c.$reset=function(){const h=i?i():{};this.$patch(f=>{ln(f,h)})},c}function Lm(t,e,n={},s,i){let r;const o=n.state,a=ln({actions:{}},n),c={deep:!0};let l,u,h=ui([]),f=ui([]),p;const m=s.state.value[t];!o&&!m&&(s.state.value[t]={}),Lu({});function v(x){let $;l=u=!1,typeof x=="function"?(x(s.state.value[t]),$={type:_r.patchFunction,storeId:t,events:p}):(Dl(s.state.value[t],x),$={type:_r.patchObject,payload:x,storeId:t,events:p}),Mu().then(()=>{l=!0}),u=!0,Bs(h,$,s.state.value[t])}const y=Pm;function w(){r.stop(),h=[],f=[],s._s.delete(t)}function O(x,$){return function(){za(s);const ne=Array.from(arguments),se=[],ue=[];function ye(Ce){se.push(Ce)}function De(Ce){ue.push(Ce)}Bs(f,{args:ne,name:x,store:A,after:ye,onError:De});let Ie;try{Ie=$.apply(this&&this.$id===t?this:A,ne)}catch(Ce){throw Bs(ue,Ce),Ce}return Ie instanceof Promise?Ie.then(Ce=>(Bs(se,Ce),Ce)).catch(Ce=>(Bs(ue,Ce),Promise.reject(Ce))):(Bs(se,Ie),Ie)}}const P={_p:s,$id:t,$onAction:ed.bind(null,f),$patch:v,$reset:y,$subscribe(x,$={}){const ne=ed(h,x,$.detached,()=>se()),se=r.run(()=>gr(()=>s.state.value[t],ue=>{($.flush==="sync"?u:l)&&x({storeId:t,type:_r.direct,events:p},ue)},ln({},c,$)));return ne},$dispose:w},A=Li(ln({},P));s._s.set(t,A);const j=s._e.run(()=>(r=Mg(),r.run(()=>e())));for(const x in j){const $=j[x];if(Pe($)&&!Ob($)||Un($))o||(m&&Rb($)&&(Pe($)?$.value=m[x]:Dl($,m[x])),s.state.value[t][x]=$);else if(typeof $=="function"){const ne=O(x,$);j[x]=ne,a.actions[x]=$}}return ln(A,j),ln(_e(A),j),Object.defineProperty(A,"$state",{get:()=>s.state.value[t],set:x=>{v($=>{ln($,x)})}}),s._p.forEach(x=>{ln(A,r.run(()=>x({store:A,app:s._a,pinia:s,options:a})))}),m&&o&&n.hydrate&&n.hydrate(A.$state,m),l=!0,u=!0,A}function nx(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const l=Sm();return a=a||l&&Jt(Dm),a&&za(a),a=km,a._s.has(s)||(r?Lm(s,e,i,a):Nb(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const xm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",xi=t=>xm?Symbol(t):"_vr_"+t,kb=xi("rvlm"),td=xi("rvd"),qu=xi("r"),Ku=xi("rl"),Pl=xi("rvl"),Ys=typeof window!="undefined";function Db(t){return t.__esModule||xm&&t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Fc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const yr=()=>{},Pb=/\/$/,Lb=t=>t.replace(Pb,"");function Vc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),r=e.slice(a+1,c>-1?c:e.length),i=t(r)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Ub(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function xb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mb(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&fi(e.matched[s],n.matched[i])&&Mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$b(t[n],e[n]))return!1;return!0}function $b(t,e){return Array.isArray(t)?sd(t,e):Array.isArray(e)?sd(e,t):t===e}function sd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ub(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var xr;(function(t){t.pop="pop",t.push="push"})(xr||(xr={}));var vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vr||(vr={}));function Fb(t){if(!t)if(Ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lb(t)}const Vb=/^[^#]+#/;function Bb(t,e){return t.replace(Vb,"#")+e}function jb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ga=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=jb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function id(t,e){return(history.state?history.state.position-e:-1)+t}const Ll=new Map;function qb(t,e){Ll.set(t,e)}function Kb(t){const e=Ll.get(t);return Ll.delete(t),e}let Wb=()=>location.protocol+"//"+location.host;function $m(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),nd(c,"")}return nd(n,t)+s+i}function zb(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=$m(t,location),m=n.value,v=e.value;let y=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}y=v?f.position-v.position:0}else s(p);i.forEach(w=>{w(n.value,m,{delta:y,type:xr.pop,direction:y?y>0?vr.forward:vr.back:vr.unknown})})};function c(){o=n.value}function l(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(be({},f.state,{scroll:Ga()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function rd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ga():null}}function Gb(t){const{history:e,location:n}=window,s={value:$m(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Wb()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=be({},e.state,rd(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=be({},i.value,e.state,{forward:c,scroll:Ga()});r(u.current,u,!0);const h=be({},rd(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function sx(t){t=Fb(t);const e=Gb(t),n=zb(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=be({location:"",base:t,go:s,createHref:Bb.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Yb(t){return typeof t=="string"||t&&typeof t=="object"}function Um(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fm=xi("nf");var od;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(od||(od={}));function di(t,e){return be(new Error,{type:t,[Fm]:!0},e)}function ns(t,e){return t instanceof Error&&Fm in t&&(e==null||!!(t.type&e))}const ad="[^/]+?",Xb={sensitive:!1,strict:!1,start:!0,end:!0},Qb=/[.+*?^${}()[\]/\\]/g;function Jb(t,e){const n=be({},Xb,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Qb,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:v,optional:y,regexp:w}=f;r.push({name:m,repeatable:v,optional:y});const O=w||ad;if(O!==ad){p+=10;try{new RegExp(`(${O})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+A.message)}}let P=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(P=y&&l.length<2?`(?:/${P})`:"/"+P),y&&(P+="?"),i+=P,p+=20,y&&(p+=-8),v&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:y}=p,w=m in l?l[m]:"";if(Array.isArray(w)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(w)?w.join("/"):w;if(!O)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u}return{re:o,score:s,keys:r,parse:a,stringify:c}}function Zb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eA(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Zb(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const tA={type:0,value:""},nA=/[a-zA-Z0-9_]/;function sA(t){if(!t)return[[]];if(t==="/")return[[tA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){!l||(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:nA.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function iA(t,e,n){const s=Jb(sA(t.path),n),i=be(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function rA(t,e){const n=[],s=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,m=aA(u);m.aliasOf=f&&f.record;const v=ld(e,u),y=[m];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of P)y.push(be({},m,{components:f?f.record.components:m.components,path:A,aliasOf:f?f.record:m}))}let w,O;for(const P of y){const{path:A}=P;if(h&&A[0]!=="/"){const j=h.record.path,x=j[j.length-1]==="/"?"":"/";P.path=h.record.path+(A&&x+A)}if(w=iA(P,h,v),f?f.alias.push(w):(O=O||w,O!==w&&O.alias.push(w),p&&u.name&&!cd(w)&&o(u.name)),"children"in m){const j=m.children;for(let x=0;x<j.length;x++)r(j[x],w,f&&f.children[x])}f=f||w,c(w)}return O?()=>{o(O)}:yr}function o(u){if(Um(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&eA(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!cd(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,v;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw di(1,{location:u});v=f.record.name,p=be(oA(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(O=>O.re.test(m)),f&&(p=f.parse(m),v=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw di(1,{location:u,currentLocation:h});v=f.record.name,p=be({},h.params,u.params),m=f.stringify(p)}const y=[];let w=f;for(;w;)y.unshift(w.record),w=w.parent;return{name:v,path:m,params:p,matched:y,meta:lA(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function oA(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function cA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lA(t){return t.reduce((e,n)=>be(e,n.meta),{})}function ld(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Vm=/#/g,uA=/&/g,hA=/\//g,fA=/=/g,dA=/\?/g,Bm=/\+/g,pA=/%5B/g,gA=/%5D/g,jm=/%5E/g,mA=/%60/g,Hm=/%7B/g,_A=/%7C/g,qm=/%7D/g,yA=/%20/g;function Wu(t){return encodeURI(""+t).replace(_A,"|").replace(pA,"[").replace(gA,"]")}function vA(t){return Wu(t).replace(Hm,"{").replace(qm,"}").replace(jm,"^")}function xl(t){return Wu(t).replace(Bm,"%2B").replace(yA,"+").replace(Vm,"%23").replace(uA,"%26").replace(mA,"`").replace(Hm,"{").replace(qm,"}").replace(jm,"^")}function EA(t){return xl(t).replace(fA,"%3D")}function wA(t){return Wu(t).replace(Vm,"%23").replace(dA,"%3F")}function TA(t){return t==null?"":wA(t).replace(hA,"%2F")}function ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Bm," "),o=r.indexOf("="),a=ua(o<0?r:r.slice(0,o)),c=o<0?null:ua(r.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ud(t){let e="";for(let n in t){const s=t[n];if(n=EA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&xl(r)):[s&&xl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function Zi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(di(4,{from:n,to:e})):h instanceof Error?a(h):Yb(h)?a(di(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Bc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(IA(a)){const l=(a.__vccOpts||a)[e];l&&i.push(kn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Db(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&kn(f,n,s,r,o)()}))}}return i}function IA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hd(t){const e=Jt(qu),n=Jt(Ku),s=Ft(()=>e.resolve(fr(t.to))),i=Ft(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(fi.bind(null,u));if(f>-1)return f;const p=fd(c[l-2]);return l>1&&fd(u)===p&&h[h.length-1].path!==p?h.findIndex(fi.bind(null,c[l-2])):f}),r=Ft(()=>i.value>-1&&OA(n.params,s.value.params)),o=Ft(()=>i.value>-1&&i.value===n.matched.length-1&&Mm(n.params,s.value.params));function a(c={}){return RA(c)?e[fr(t.replace)?"replace":"push"](fr(t.to)).catch(yr):Promise.resolve()}return{route:s,href:Ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const SA=um({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hd,setup(t,{slots:e}){const n=Li(hd(t)),{options:s}=Jt(qu),i=Ft(()=>({[dd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Om("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),CA=SA;function RA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function fd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dd=(t,e,n)=>t!=null?t:e!=null?e:n,NA=um({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Jt(Pl),i=Ft(()=>t.route||s.value),r=Jt(td,0),o=Ft(()=>i.value.matched[r]);Ho(td,r+1),Ho(kb,o),Ho(Pl,i);const a=Lu();return gr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!fi(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return pd(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Om(u,be({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return pd(n.default,{Component:v,route:c})||v}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kA=NA;function ix(t){const e=rA(t.routes,t),n=t.parseQuery||bA,s=t.stringifyQuery||ud,i=t.history,r=Zi(),o=Zi(),a=Zi(),c=Bw(Sn);let l=Sn;Ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fc.bind(null,E=>""+E),h=Fc.bind(null,TA),f=Fc.bind(null,ua);function p(E,F){let D,B;return Um(E)?(D=e.getRecordMatcher(E),B=F):B=E,e.addRoute(B,D)}function m(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function w(E,F){if(F=be({},F||c.value),typeof E=="string"){const Z=Vc(n,E,F.path),d=e.resolve({path:Z.path},F),g=i.createHref(Z.fullPath);return be(Z,d,{params:f(d.params),hash:ua(Z.hash),redirectedFrom:void 0,href:g})}let D;if("path"in E)D=be({},E,{path:Vc(n,E.path,F.path).path});else{const Z=be({},E.params);for(const d in Z)Z[d]==null&&delete Z[d];D=be({},E,{params:h(E.params)}),F.params=h(F.params)}const B=e.resolve(D,F),ge=E.hash||"";B.params=u(f(B.params));const Ee=xb(s,be({},E,{hash:vA(ge),path:B.path})),ie=i.createHref(Ee);return be({fullPath:Ee,hash:ge,query:s===ud?AA(E.query):E.query||{}},B,{redirectedFrom:void 0,href:ie})}function O(E){return typeof E=="string"?Vc(n,E,c.value.path):be({},E)}function P(E,F){if(l!==E)return di(8,{from:F,to:E})}function A(E){return $(E)}function j(E){return A(be(O(E),{replace:!0}))}function x(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let B=typeof D=="function"?D(E):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),be({query:E.query,hash:E.hash,params:E.params},B)}}function $(E,F){const D=l=w(E),B=c.value,ge=E.state,Ee=E.force,ie=E.replace===!0,Z=x(D);if(Z)return $(be(O(Z),{state:ge,force:Ee,replace:ie}),F||D);const d=D;d.redirectedFrom=F;let g;return!Ee&&Mb(s,B,D)&&(g=di(16,{to:d,from:B}),$t(B,B,!0,!1)),(g?Promise.resolve(g):se(d,B)).catch(_=>ns(_)?_:ae(_,d,B)).then(_=>{if(_){if(ns(_,2))return $(be(O(_.to),{state:ge,force:Ee,replace:ie}),F||d)}else _=ye(d,B,!0,ie,ge);return ue(d,B,_),_})}function ne(E,F){const D=P(E,F);return D?Promise.reject(D):Promise.resolve()}function se(E,F){let D;const[B,ge,Ee]=DA(E,F);D=Bc(B.reverse(),"beforeRouteLeave",E,F);for(const Z of B)Z.leaveGuards.forEach(d=>{D.push(kn(d,E,F))});const ie=ne.bind(null,E,F);return D.push(ie),js(D).then(()=>{D=[];for(const Z of r.list())D.push(kn(Z,E,F));return D.push(ie),js(D)}).then(()=>{D=Bc(ge,"beforeRouteUpdate",E,F);for(const Z of ge)Z.updateGuards.forEach(d=>{D.push(kn(d,E,F))});return D.push(ie),js(D)}).then(()=>{D=[];for(const Z of E.matched)if(Z.beforeEnter&&!F.matched.includes(Z))if(Array.isArray(Z.beforeEnter))for(const d of Z.beforeEnter)D.push(kn(d,E,F));else D.push(kn(Z.beforeEnter,E,F));return D.push(ie),js(D)}).then(()=>(E.matched.forEach(Z=>Z.enterCallbacks={}),D=Bc(Ee,"beforeRouteEnter",E,F),D.push(ie),js(D))).then(()=>{D=[];for(const Z of o.list())D.push(kn(Z,E,F));return D.push(ie),js(D)}).catch(Z=>ns(Z,8)?Z:Promise.reject(Z))}function ue(E,F,D){for(const B of a.list())B(E,F,D)}function ye(E,F,D,B,ge){const Ee=P(E,F);if(Ee)return Ee;const ie=F===Sn,Z=Ys?history.state:{};D&&(B||ie?i.replace(E.fullPath,be({scroll:ie&&Z&&Z.scroll},ge)):i.push(E.fullPath,ge)),c.value=E,$t(E,F,D,ie),xe()}let De;function Ie(){De=i.listen((E,F,D)=>{const B=w(E),ge=x(B);if(ge){$(be(ge,{replace:!0}),B).catch(yr);return}l=B;const Ee=c.value;Ys&&qb(id(Ee.fullPath,D.delta),Ga()),se(B,Ee).catch(ie=>ns(ie,12)?ie:ns(ie,2)?($(ie.to,B).then(Z=>{ns(Z,20)&&!D.delta&&D.type===xr.pop&&i.go(-1,!1)}).catch(yr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),ae(ie,B,Ee))).then(ie=>{ie=ie||ye(B,Ee,!1),ie&&(D.delta?i.go(-D.delta,!1):D.type===xr.pop&&ns(ie,20)&&i.go(-1,!1)),ue(B,Ee,ie)}).catch(yr)})}let Ce=Zi(),kt=Zi(),fe;function ae(E,F,D){xe(E);const B=kt.list();return B.length?B.forEach(ge=>ge(E,F,D)):console.error(E),Promise.reject(E)}function de(){return fe&&c.value!==Sn?Promise.resolve():new Promise((E,F)=>{Ce.add([E,F])})}function xe(E){fe||(fe=!0,Ie(),Ce.list().forEach(([F,D])=>E?D(E):F()),Ce.reset())}function $t(E,F,D,B){const{scrollBehavior:ge}=t;if(!Ys||!ge)return Promise.resolve();const Ee=!D&&Kb(id(E.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return Mu().then(()=>ge(E,F,Ee)).then(ie=>ie&&Hb(ie)).catch(ie=>ae(ie,E,F))}const vt=E=>i.go(E);let et;const We=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:y,getRoutes:v,resolve:w,options:t,push:A,replace:j,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:kt.add,isReady:de,install(E){const F=this;E.component("RouterLink",CA),E.component("RouterView",kA),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>fr(c)}),Ys&&!et&&c.value===Sn&&(et=!0,A(i.location).catch(ge=>{}));const D={};for(const ge in Sn)D[ge]=Ft(()=>c.value[ge]);E.provide(qu,F),E.provide(Ku,Li(D)),E.provide(Pl,c);const B=E.unmount;We.add(E),E.unmount=function(){We.delete(E),We.size<1&&(l=Sn,De&&De(),c.value=Sn,et=!1,fe=!1),B()}}}}function js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function DA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>fi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>fi(l,c))||i.push(c))}return[n,s,i]}function rx(){return Jt(Ku)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},MA=function(t){try{return xA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Km(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Wm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UA(){return He().indexOf("Electron/")>=0}function Gm(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FA(){return He().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="FirebaseError";class Yn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=VA,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?BA(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,s)}}function BA(t,e){return t.replace(jA,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const jA=/\{\$([^}]+)}/g;function HA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ha(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gd(r)&&gd(o)){if(!ha(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qA(t,e){const n=new KA(t,e);return n.subscribe.bind(n)}class KA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");WA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jc),i.error===void 0&&(i.error=jc),i.complete===void 0&&(i.complete=jc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $A;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YA(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GA(t){return t===as?void 0:t}function YA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const QA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},JA=me.INFO,ZA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},eI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ZA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zu{constructor(e){this.name=e,this._logLevel=JA,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",md="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new zu("@firebase/app"),sI="@firebase/app-compat",iI="@firebase/analytics-compat",rI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",cI="@firebase/auth",lI="@firebase/auth-compat",uI="@firebase/database",hI="@firebase/database-compat",fI="@firebase/functions",dI="@firebase/functions-compat",pI="@firebase/installations",gI="@firebase/installations-compat",mI="@firebase/messaging",_I="@firebase/messaging-compat",yI="@firebase/performance",vI="@firebase/performance-compat",EI="@firebase/remote-config",wI="@firebase/remote-config-compat",TI="@firebase/storage",bI="@firebase/storage-compat",AI="@firebase/firestore",II="@firebase/firestore-compat",SI="firebase",CI="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="[DEFAULT]",RI={[Ml]:"fire-core",[sI]:"fire-core-compat",[rI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[cI]:"fire-auth",[lI]:"fire-auth-compat",[uI]:"fire-rtdb",[hI]:"fire-rtdb-compat",[fI]:"fire-fn",[dI]:"fire-fn-compat",[pI]:"fire-iid",[gI]:"fire-iid-compat",[mI]:"fire-fcm",[_I]:"fire-fcm-compat",[yI]:"fire-perf",[vI]:"fire-perf-compat",[EI]:"fire-rc",[wI]:"fire-rc-compat",[TI]:"fire-gcs",[bI]:"fire-gcs-compat",[AI]:"fire-fst",[II]:"fire-fst-compat","fire-js":"fire-js",[SI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map,$l=new Map;function OI(t,e){try{t.container.addComponent(e)}catch(n){Gu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if($l.has(e))return Gu.debug(`There were multiple attempts to register component ${e}.`),!1;$l.set(e,t);for(const n of fa.values())OI(n,t);return!0}function Ya(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},da=new Xr("app","Firebase",NI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw da.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=CI;function ox(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ym,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw da.create("bad-app-name",{appName:String(s)});const i=fa.get(s);if(i){if(ha(t,i.options)&&ha(n,i.config))return i;throw da.create("duplicate-app",{appName:s})}const r=new XA(s);for(const a of $l.values())r.addComponent(a);const o=new kI(t,n,r);return fa.set(s,o),o}function Yu(t=Ym){const e=fa.get(t);if(!e)throw da.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let i=(s=RI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gu.warn(a.join(" "));return}pi(new bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){pi(new bs("platform-logger",e=>new tI(e),"PRIVATE")),Zt(Ml,md,t),Zt(Ml,md,"esm2017"),Zt("fire-js","")}DI("");var PI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,Xu=Xu||{},X=PI||self;function pa(){}function Ul(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LI(t){return Object.prototype.hasOwnProperty.call(t,Hc)&&t[Hc]||(t[Hc]=++xI)}var Hc="closure_uid_"+(1e9*Math.random()>>>0),xI=0;function MI(t,e,n){return t.call.apply(t.bind,arguments)}function $I(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=MI:Ye=$I,Ye.apply(null,arguments)}function No(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Xn(){this.s=this.s,this.o=this.o}var UI=0,FI={};Xn.prototype.s=!1;Xn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),UI!=0)){var t=LI(this);delete FI[t]}};Xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Qm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function VI(t){e:{var e=k0;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function _d(t){return Array.prototype.concat.apply([],arguments)}function Qu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ga(t){return/^[\s\xa0]*$/.test(t)}var yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ot(t,e){return t.indexOf(e)!=-1}function qc(t,e){return t<e?-1:t>e?1:0}var at;e:{var vd=X.navigator;if(vd){var Ed=vd.userAgent;if(Ed){at=Ed;break e}}at=""}function Ju(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Jm(t){const e={};for(const n in t)e[n]=t[n];return e}var wd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zm(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<wd.length;r++)n=wd[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Zu(t){return Zu[" "](t),t}Zu[" "]=pa;function BI(t){var e=qI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var jI=ot(at,"Opera"),gi=ot(at,"Trident")||ot(at,"MSIE"),e_=ot(at,"Edge"),Fl=e_||gi,t_=ot(at,"Gecko")&&!(ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge"))&&!(ot(at,"Trident")||ot(at,"MSIE"))&&!ot(at,"Edge"),HI=ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge");function n_(){var t=X.document;return t?t.documentMode:void 0}var ma;e:{var Kc="",Wc=function(){var t=at;if(t_)return/rv:([^\);]+)(\)|;)/.exec(t);if(e_)return/Edge\/([\d\.]+)/.exec(t);if(gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(HI)return/WebKit\/(\S+)/.exec(t);if(jI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wc&&(Kc=Wc?Wc[1]:""),gi){var zc=n_();if(zc!=null&&zc>parseFloat(Kc)){ma=String(zc);break e}}ma=Kc}var qI={};function KI(){return BI(function(){let t=0;const e=yd(String(ma)).split("."),n=yd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=qc(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||qc(i[2].length==0,r[2].length==0)||qc(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Vl;if(X.document&&gi){var Td=n_();Vl=Td||parseInt(ma,10)||void 0}else Vl=void 0;var WI=Vl,zI=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",pa,e),X.removeEventListener("test",pa,e)}catch{}return t}();function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};function Mr(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(t_){e:{try{Zu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mr.Z.h.call(this)}}Ze(Mr,nt);var GI={2:"touch",3:"pen",4:"mouse"};Mr.prototype.h=function(){Mr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),YI=0;function XI(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++YI,this.ca=this.fa=!1}function Xa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Qa(t){this.src=t,this.g={},this.h=0}Qa.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=jl(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new XI(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function Bl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Xm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var eh="closure_lm_"+(1e6*Math.random()|0),Gc={};function s_(t,e,n,s,i){if(s&&s.once)return r_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)s_(t,e[r],n,s,i);return null}return n=sh(n),t&&t[Zr]?t.N(e,n,Jr(s)?!!s.capture:!!s,i):i_(t,e,n,!1,s,i)}function i_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Jr(i)?!!i.capture:!!i,a=nh(t);if(a||(t[eh]=a=new Qa(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=QI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)zI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(a_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QI(){function t(n){return e.call(t.src,t.listener,n)}var e=JI;return t}function r_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)r_(t,e[r],n,s,i);return null}return n=sh(n),t&&t[Zr]?t.O(e,n,Jr(s)?!!s.capture:!!s,i):i_(t,e,n,!0,s,i)}function o_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)o_(t,e[r],n,s,i);else s=Jr(s)?!!s.capture:!!s,n=sh(n),t&&t[Zr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=jl(r,n,s,i),-1<n&&(Xa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=nh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jl(e,n,s,i)),(n=-1<t?e[t]:null)&&th(n))}function th(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Zr])Bl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(a_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nh(e))?(Bl(n,t),n.h==0&&(n.src=null,e[eh]=null)):Xa(t)}}}function a_(t){return t in Gc?Gc[t]:Gc[t]="on"+t}function JI(t,e){if(t.ca)t=!0;else{e=new Mr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&th(t),t=n.call(s,e)}return t}function nh(t){return t=t[eh],t instanceof Qa?t:null}var Yc="__closure_events_fn_"+(1e9*Math.random()>>>0);function sh(t){return typeof t=="function"?t:(t[Yc]||(t[Yc]=function(e){return t.handleEvent(e)}),t[Yc])}function qe(){Xn.call(this),this.i=new Qa(this),this.P=this,this.I=null}Ze(qe,Xn);qe.prototype[Zr]=!0;qe.prototype.removeEventListener=function(t,e,n,s){o_(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(s,t),Zm(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ko(o,s,!0,e)&&i}if(o=e.g=t,i=ko(o,s,!0,e)&&i,i=ko(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ko(o,s,!1,e)&&i}qe.prototype.M=function(){if(qe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Xa(n[s]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ko(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Bl(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ih=X.JSON.stringify;function ZI(){var t=l_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class e0{constructor(){this.h=this.g=null}add(e,n){const s=c_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var c_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new t0,t=>t.reset());class t0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function n0(t){X.setTimeout(()=>{throw t},0)}function rh(t,e){Hl||s0(),ql||(Hl(),ql=!0),l_.add(t,e)}var Hl;function s0(){var t=X.Promise.resolve(void 0);Hl=function(){t.then(i0)}}var ql=!1,l_=new e0;function i0(){for(var t;t=ZI();){try{t.h.call(t.g)}catch(n){n0(n)}var e=c_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ql=!1}function Ja(t,e){qe.call(this),this.h=t||1,this.g=e||X,this.j=Ye(this.kb,this),this.l=Date.now()}Ze(Ja,qe);U=Ja.prototype;U.da=!1;U.S=null;U.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xe(this,"tick"),this.da&&(oh(this),this.start()))}};U.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}U.M=function(){Ja.Z.M.call(this),oh(this),delete this.g};function ah(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function u_(t){t.g=ah(()=>{t.g=null,t.i&&(t.i=!1,u_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class r0 extends Xn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:u_(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(t){Xn.call(this),this.h=t,this.g={}}Ze($r,Xn);var bd=[];function h_(t,e,n,s){Array.isArray(n)||(n&&(bd[0]=n.toString()),n=bd);for(var i=0;i<n.length;i++){var r=s_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function f_(t){Ju(t.g,function(e,n){this.g.hasOwnProperty(n)&&th(e)},t),t.g={}}$r.prototype.M=function(){$r.Z.M.call(this),f_(this)};$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Za(){this.g=!0}Za.prototype.Aa=function(){this.g=!1};function o0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function a0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Js(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+l0(t,n)+(s?" "+s:"")})}function c0(t,e){t.info(function(){return"TIMEOUT: "+e})}Za.prototype.info=function(){};function l0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ih(n)}catch{return e}}var xs={},Ad=null;function ec(){return Ad=Ad||new qe}xs.Ma="serverreachability";function d_(t){nt.call(this,xs.Ma,t)}Ze(d_,nt);function Ur(t){const e=ec();Xe(e,new d_(e,t))}xs.STAT_EVENT="statevent";function p_(t,e){nt.call(this,xs.STAT_EVENT,t),this.stat=e}Ze(p_,nt);function ct(t){const e=ec();Xe(e,new p_(e,t))}xs.Na="timingevent";function g_(t,e){nt.call(this,xs.Na,t),this.size=e}Ze(g_,nt);function eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var tc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},m_={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ch(){}ch.prototype.h=null;function Id(t){return t.h||(t.h=t.i())}function __(){}var to={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function lh(){nt.call(this,"d")}Ze(lh,nt);function uh(){nt.call(this,"c")}Ze(uh,nt);var Kl;function nc(){}Ze(nc,ch);nc.prototype.g=function(){return new XMLHttpRequest};nc.prototype.i=function(){return{}};Kl=new nc;function no(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new $r(this),this.P=u0,t=Fl?125:void 0,this.W=new Ja(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new y_}function y_(){this.i=null,this.g="",this.h=!1}var u0=45e3,Wl={},_a={};U=no.prototype;U.setTimeout=function(t){this.P=t};function zl(t,e,n){t.K=1,t.v=ic(En(e)),t.s=n,t.U=!0,v_(t,null)}function v_(t,e){t.F=Date.now(),so(t),t.A=En(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),S_(n.h,"t",s),t.C=0,n=t.l.H,t.h=new y_,t.g=W_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new r0(Ye(t.Ia,t,t.g),t.O)),h_(t.V,t.g,"readystatechange",t.gb),e=t.H?Jm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ur(1),o0(t.j,t.u,t.A,t.m,t.X,t.s)}U.gb=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.Ia(t)};U.Ia=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Fl||this.g&&(this.h.h||this.g.ga()||Od(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ur(3):Ur(2)),sc(this);var n=this.g.ba();this.N=n;t:if(E_(this)){var s=Od(this.g);t="";var i=s.length,r=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){fs(this),Er(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,a0(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ga(a)){var l=a;break t}}l=null}if(n=l)Js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gl(this,n);else{this.i=!1,this.o=3,ct(12),fs(this),Er(this);break e}}this.U?(w_(this,u,o),Fl&&this.i&&u==3&&(h_(this.V,this.W,"tick",this.fb),this.W.start())):(Js(this.j,this.m,o,null),Gl(this,o)),u==4&&fs(this),this.i&&!this.I&&(u==4?j_(this.l,this):(this.i=!1,so(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),fs(this),Er(this)}}}catch{}finally{}};function E_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function w_(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=h0(t,n),i==_a){e==4&&(t.o=4,ct(14),s=!1),Js(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wl){t.o=4,ct(15),Js(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Js(t.j,t.m,i,null),Gl(t,i);E_(t)&&i!=_a&&i!=Wl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vh(e),e.L=!0,ct(11))):(Js(t.j,t.m,n,"[Invalid Chunked Response]"),fs(t),Er(t))}U.fb=function(){if(this.g){var t=fn(this.g),e=this.g.ga();this.C<e.length&&(sc(this),w_(this,t,e),this.i&&t!=4&&so(this))}};function h0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_a:(n=Number(e.substring(n,s)),isNaN(n)?Wl:(s+=1,s+n>e.length?_a:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,fs(this)};function so(t){t.Y=Date.now()+t.P,T_(t,t.P)}function T_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=eo(Ye(t.eb,t),e)}function sc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}U.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(c0(this.j,this.A),this.K!=2&&(Ur(3),ct(17)),fs(this),this.o=2,Er(this)):T_(this,this.Y-t)};function Er(t){t.l.G==0||t.I||j_(t.l,t)}function fs(t){sc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,oh(t.W),f_(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yl(n.i,t))){if(n.I=t.N,!t.J&&Yl(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)wa(n),ac(n);else break e;yh(n),ct(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=eo(Ye(n.ab,n),6e3));if(1>=O_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ds(n,11)}else if((t.J||n.g==t)&&wa(n),!ga(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;!r.g&&(ot(m,"spdy")||ot(m,"quic")||ot(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(dh(r,r.h),r.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.sa=v,Ne(s.F,s.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=K_(s,s.H?s.la:null,s.W),o.J){N_(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(sc(a),so(a)),s.g=o}else V_(s);0<n.l.length&&cc(n)}else l[0]!="stop"&&l[0]!="close"||ds(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ds(n,7):_h(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ur(4)}catch{}}function f0(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ul(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function hh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ul(t)||typeof t=="string")Qm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ul(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=f0(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function $i(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof $i)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}U=$i.prototype;U.R=function(){fh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};U.T=function(){return fh(this),this.g.concat()};function fh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];As(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],As(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}U.get=function(t,e){return As(this.h,t)?this.h[t]:e};U.set=function(t,e){As(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};U.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function As(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var b_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function d0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Is(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Is){this.g=e!==void 0?e:t.g,ya(this,t.j),this.s=t.s,va(this,t.i),Ea(this,t.m),this.l=t.l,e=t.h;var n=new Fr;n.i=e.i,e.g&&(n.g=new $i(e.g),n.h=e.h),Sd(this,n),this.o=t.o}else t&&(n=String(t).match(b_))?(this.g=!!e,ya(this,n[1]||"",!0),this.s=wr(n[2]||""),va(this,n[3]||"",!0),Ea(this,n[4]),this.l=wr(n[5]||"",!0),Sd(this,n[6]||"",!0),this.o=wr(n[7]||"")):(this.g=!!e,this.h=new Fr(null,this.g))}Is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lr(e,Cd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lr(e,Cd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(lr(n,n.charAt(0)=="/"?y0:_0,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lr(n,E0)),t.join("")};function En(t){return new Is(t)}function ya(t,e,n){t.j=n?wr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function va(t,e,n){t.i=n?wr(e,!0):e}function Ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sd(t,e,n){e instanceof Fr?(t.h=e,w0(t.h,t.g)):(n||(e=lr(e,v0)),t.h=new Fr(e,t.g))}function Ne(t,e,n){t.h.set(e,n)}function ic(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function p0(t){return t instanceof Is?En(t):new Is(t,void 0)}function g0(t,e,n,s){var i=new Is(null,void 0);return t&&ya(i,t),e&&va(i,e),n&&Ea(i,n),s&&(i.l=s),i}function wr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,m0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function m0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cd=/[#\/\?@]/g,_0=/[#\?:]/g,y0=/[#\?]/g,v0=/[#\?@]/g,E0=/#/g;function Fr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new $i,t.h=0,t.i&&d0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Fr.prototype;U.add=function(t,e){Qn(this),this.i=null,t=Ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function A_(t,e){Qn(t),e=Ui(t,e),As(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,As(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&fh(t)))}function I_(t,e){return Qn(t),e=Ui(t,e),As(t.g.h,e)}U.forEach=function(t,e){Qn(this),this.g.forEach(function(n,s){Qm(n,function(i){t.call(e,i,s,this)},this)},this)};U.T=function(){Qn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};U.R=function(t){Qn(this);var e=[];if(typeof t=="string")I_(this,t)&&(e=_d(e,this.g.get(Ui(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_d(e,t[n])}return e};U.set=function(t,e){return Qn(this),this.i=null,t=Ui(this,t),I_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function S_(t,e,n){A_(t,e),0<n.length&&(t.i=null,t.g.set(Ui(t,e),Qu(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function w0(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(A_(this,s),S_(this,i,n))},t)),t.j=e}var T0=class{constructor(t,e){this.h=t,this.g=e}};function C_(t){this.l=t||b0,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b0=10;function R_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function O_(t){return t.h?1:t.g?t.g.size:0}function Yl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dh(t,e){t.g?t.g.add(e):t.h=e}function N_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}C_.prototype.cancel=function(){if(this.i=k_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function k_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qu(t.i)}function ph(){}ph.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};ph.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function A0(){this.g=new ph}function I0(t,e,n){const s=n||"";try{hh(t,function(i,r){let o=i;Jr(i)&&(o=ih(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function S0(t,e){const n=new Za;if(X.Image){const s=new Image;s.onload=No(Do,n,s,"TestLoadImage: loaded",!0,e),s.onerror=No(Do,n,s,"TestLoadImage: error",!1,e),s.onabort=No(Do,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=No(Do,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Do(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function io(t){this.l=t.$b||null,this.j=t.ib||!1}Ze(io,ch);io.prototype.g=function(){return new rc(this.l,this.j)};io.prototype.i=function(t){return function(){return t}}({});function rc(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(rc,qe);var gh=0;U=rc.prototype;U.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=gh};U.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;D_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function D_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}U.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ro(this):Vr(this),this.readyState==3&&D_(this)}};U.Ua=function(t){this.g&&(this.response=this.responseText=t,ro(this))};U.Ta=function(t){this.g&&(this.response=t,ro(this))};U.ha=function(){this.g&&ro(this)};function ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var C0=X.JSON.parse;function Ue(t){qe.call(this),this.headers=new $i,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=P_,this.K=this.L=!1}Ze(Ue,qe);var P_="",R0=/^https?$/i,O0=["POST","PUT"];U=Ue.prototype;U.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kl.g(),this.C=this.u?Id(this.u):Id(Kl),this.g.onreadystatechange=Ye(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Rd(this,r);return}t=n||"";const i=new $i(this.headers);s&&hh(s,function(r,o){i.set(o,r)}),s=VI(i.T()),n=X.FormData&&t instanceof X.FormData,!(0<=Xm(O0,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{M_(this),0<this.B&&((this.K=N0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.pa,this)):this.A=ah(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Rd(this,r)}};function N0(t){return gi&&KI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function k0(t){return t.toLowerCase()=="content-type"}U.pa=function(){typeof Xu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,L_(t),oc(t)}function L_(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),oc(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oc(this,!0)),Ue.Z.M.call(this)};U.Fa=function(){this.s||(this.F||this.v||this.l?x_(this):this.cb())};U.cb=function(){x_(this)};function x_(t){if(t.h&&typeof Xu!="undefined"&&(!t.C[1]||fn(t)!=4||t.ba()!=2)){if(t.v&&fn(t)==4)ah(t.Fa,0,t);else if(Xe(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(b_)[1]||null;if(!i&&X.self&&X.self.location){var r=X.self.location.protocol;i=r.substr(0,r.length-1)}s=!R0.test(i?i.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",L_(t)}}finally{oc(t)}}}}function oc(t,e){if(t.g){M_(t);const n=t.g,s=t.C[0]?pa:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function M_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}U.ba=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};U.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),C0(e)}};function Od(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case P_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Da=function(){return this.m};U.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function D0(t){let e="";return Ju(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function mh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=D0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $_(t){this.za=0,this.l=[],this.h=new Za,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=er("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=er("baseRetryDelayMs",5e3,t),this.$a=er("retryDelaySeedMs",1e4,t),this.Ya=er("forwardChannelMaxRetries",2,t),this.ra=er("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new C_(t&&t.concurrentRequestLimit),this.Ca=new A0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}U=$_.prototype;U.ma=8;U.G=1;function _h(t){if(U_(t),t.G==3){var e=t.V++,n=En(t.F);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),oo(t,n),e=new no(t,t.h,e,void 0),e.K=2,e.v=ic(En(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=W_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),so(e)}q_(t)}U.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ac(t){t.g&&(vh(t),t.g.cancel(),t.g=null)}function U_(t){ac(t),t.u&&(X.clearTimeout(t.u),t.u=null),wa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Xc(t,e){t.l.push(new T0(t.Za++,e)),t.G==3&&cc(t)}function cc(t){R_(t.i)||t.m||(t.m=!0,rh(t.Ha,t),t.C=0)}function P0(t,e){return O_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=eo(Ye(t.Ha,t,e),H_(t,t.C)),t.C++,!0)}U.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new no(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Jm(r),Zm(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=F_(this,i,e),n=En(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),oo(this,n),this.o&&r&&mh(n,this.o,r),dh(this.i,i),this.Ra&&Ne(n,"TYPE","init"),this.ja?(Ne(n,"$req",e),Ne(n,"SID","null"),i.$=!0,zl(i,n,null)):zl(i,n,e),this.G=2}}else this.G==3&&(t?Nd(this,t):this.l.length==0||R_(this.i)||Nd(this))};function Nd(t,e){var n;e?n=e.m:n=t.V++;const s=En(t.F);Ne(s,"SID",t.J),Ne(s,"RID",n),Ne(s,"AID",t.U),oo(t,s),t.o&&t.s&&mh(s,t.o,t.s),n=new no(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=F_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),dh(t.i,n),zl(n,s,e)}function oo(t,e){t.j&&hh({},function(n,s){Ne(e,s,n)})}function F_(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ye(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{I0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function V_(t){t.g||t.u||(t.Y=1,rh(t.Ga,t),t.A=0)}function yh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=eo(Ye(t.Ga,t),H_(t,t.A)),t.A++,!0)}U.Ga=function(){if(this.u=null,B_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=eo(Ye(this.bb,this),t)}};U.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),ac(this),B_(this))};function vh(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function B_(t){t.g=new no(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=En(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),oo(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&mh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ic(En(e)),n.s=null,n.U=!0,v_(n,t)}U.ab=function(){this.v!=null&&(this.v=null,ac(this),yh(this),ct(19))};function wa(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function j_(t,e){var n=null;if(t.g==e){wa(t),vh(t),t.g=null;var s=2}else if(Yl(t.i,e))n=e.D,N_(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ec(),Xe(s,new g_(s,n,e,i)),cc(t)}else V_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&P0(t,e)||s==2&&yh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function H_(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ds(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ye(t.jb,t);n||(n=new Is("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||ya(n,"https"),ic(n)),S0(n.toString(),s)}else ct(2);t.G=0,t.j&&t.j.va(e),q_(t),U_(t)}U.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))};function q_(t){t.G=0,t.I=-1,t.j&&((k_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qu(t.l),t.l.length=0),t.j.ua())}function K_(t,e,n){let s=p0(n);if(s.i!="")e&&va(s,e+"."+s.i),Ea(s,s.m);else{const i=X.location;s=g0(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ju(t.aa,function(i,r){Ne(s,r,i)}),e=t.D,n=t.sa,e&&n&&Ne(s,e,n),Ne(s,"VER",t.ma),oo(t,s),s}function W_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ue(new io({ib:!0})):new Ue(t.qa),e.L=t.H,e}function z_(){}U=z_.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Oa=function(){};function Ta(){if(gi&&!(10<=Number(WI)))throw Error("Environmental error: no available transport.")}Ta.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){qe.call(this),this.g=new $_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ga(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ga(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fi(this)}Ze(Ct,qe);Ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),rh(Ye(t.hb,t,e))),ct(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=K_(t,null,t.W),cc(t)};Ct.prototype.close=function(){_h(this.g)};Ct.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Xc(this.g,e)}else this.v?(e={},e.__data__=ih(t),Xc(this.g,e)):Xc(this.g,t)};Ct.prototype.M=function(){this.g.j=null,delete this.j,_h(this.g),delete this.g,Ct.Z.M.call(this)};function G_(t){lh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(G_,lh);function Y_(){uh.call(this),this.status=1}Ze(Y_,uh);function Fi(t){this.g=t}Ze(Fi,z_);Fi.prototype.xa=function(){Xe(this.g,"a")};Fi.prototype.wa=function(t){Xe(this.g,new G_(t))};Fi.prototype.va=function(t){Xe(this.g,new Y_(t))};Fi.prototype.ua=function(){Xe(this.g,"b")};Ta.prototype.createWebChannel=Ta.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;tc.NO_ERROR=0;tc.TIMEOUT=8;tc.HTTP_ERROR=6;m_.COMPLETE="complete";__.EventType=to;to.OPEN="a";to.CLOSE="b";to.ERROR="c";to.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.La;Ue.prototype.getLastErrorCode=Ue.prototype.Da;Ue.prototype.getStatus=Ue.prototype.ba;Ue.prototype.getResponseJson=Ue.prototype.Qa;Ue.prototype.getResponseText=Ue.prototype.ga;Ue.prototype.send=Ue.prototype.ea;var L0=function(){return new Ta},x0=function(){return ec()},Qc=tc,M0=m_,$0=xs,kd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},U0=io,Po=__,F0=Ue;const Dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new zu("@firebase/firestore");function Pd(){return Ss.logLevel}function K(t,...e){if(Ss.logLevel<=me.DEBUG){const n=e.map(Eh);Ss.debug(`Firestore (${Vi}): ${t}`,...n)}}function Hn(t,...e){if(Ss.logLevel<=me.ERROR){const n=e.map(Eh);Ss.error(`Firestore (${Vi}): ${t}`,...n)}}function Ld(t,...e){if(Ss.logLevel<=me.WARN){const n=e.map(Eh);Ss.warn(`Firestore (${Vi}): ${t}`,...n)}}function Eh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function Se(t,e){t||ee()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class j0{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new V0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new dt(e)}}class H0{constructor(e,n,s){this.type="FirstParty",this.user=dt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class q0{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new H0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.p=n.token,new K0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wh.A=-1;class X_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=z0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new At(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new At(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,s){n===void 0?n=0:n>e.length&&ee(),s===void 0?s=e.length-n:s>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Br.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Br?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Br{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const G0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Br{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return G0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.fields=e,e.sort(gt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Je(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const Y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Y0.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Z_(t){const e=t.mapValue.fields.__previous_value__;return J_(e)?Z_(e):e}function Hr(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return t==null}function ba(t){return t===0&&1/t==-1/0}function Q0(t){return typeof t=="number"&&Number.isInteger(t)&&!ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ke.fromString(e))}static fromName(e){return new z(ke.fromString(e).popFirst(5))}static empty(){return new z(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ke(e.slice()))}}function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?J_(t)?4:10:ee()}function rn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hr(t).isEqual(Hr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=qn(s.timestampValue),o=qn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _i(s.bytesValue).isEqual(_i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=$e(s.doubleValue),o=$e(i.doubleValue);return r===o?ba(r)===ba(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(xd(r)!==xd(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rn(r[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function qr(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Cs(t),s=Cs(e);if(n!==s)return ve(n,s);switch(n){case 0:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=$e(i.integerValue||i.doubleValue),a=$e(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Md(t.timestampValue,e.timestampValue);case 4:return Md(Hr(t),Hr(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,r){const o=_i(i),a=_i(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ve(o[c],a[c]);if(l!==0)return l}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ve($e(i.latitude),$e(r.latitude));return o!==0?o:ve($e(i.longitude),$e(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=vi(o[c],a[c]);if(l)return l}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ve(a[u],l[u]);if(h!==0)return h;const f=vi(o[a[u]],c[l[u]]);if(f!==0)return f}return ve(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=qn(t),s=qn(e),i=ve(n.seconds,s.seconds);return i!==0?i:ve(n.nanos,s.nanos)}function ii(t){return Xl(t)}function Xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=qn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Xl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Xl(s.fields[a])}`;return r+"}"}(t.mapValue):ee();var e,n}function Ql(t){return!!t&&"integerValue"in t}function Th(t){return!!t&&"arrayValue"in t}function $d(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wo(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Tr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Wo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ms(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Tt(Tr(this.value))}}function ey(t){const e=[];return Ms(t.fields,(n,s)=>{const i=new gt([n]);if(Wo(s)){const r=ey(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new jr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,le.min(),le.min(),Tt.empty(),0)}static newFoundDocument(e,n,s){return new tt(e,1,n,le.min(),s,0)}static newNoDocument(e,n){return new tt(e,2,n,le.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,le.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Fd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new J0(t,e,n,s,i,r,o)}function bh(t){const e=te(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ii(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ii(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ii(s)).join(",")),e.P=n}return e.P}function Z0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ii(s.value)}`;var s}).join(", ")}]`),Bi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ii(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ii(n)).join(",")),`Target(${e})`}function Ah(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!aS(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!rn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function Jl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class _t extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,s):new eS(e,n,s):n==="array-contains"?new sS(e,s):n==="in"?new iS(e,s):n==="not-in"?new rS(e,s):n==="array-contains-any"?new oS(e,s):new _t(e,n,s)}static v(e,n,s){return n==="in"?new tS(e,s):new nS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(vi(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.V(vi(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eS extends _t{constructor(e,n,s){super(e,n,s),this.key=z.fromName(s.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.V(n)}}class tS extends _t{constructor(e,n){super(e,"in",n),this.keys=ty("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nS extends _t{constructor(e,n){super(e,"not-in",n),this.keys=ty("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ty(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>z.fromName(s.referenceValue))}class sS extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Th(n)&&qr(n.arrayValue,this.value)}}class iS extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qr(this.value.arrayValue,n)}}class rS extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qr(this.value.arrayValue,n)}}class oS extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qr(this.value.arrayValue,s))}}class Aa{constructor(e,n){this.position=e,this.inclusive=n}}class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function aS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),n.key):s=vi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function cS(t,e,n,s,i,r,o,a){return new ao(t,e,n,s,i,r,o,a)}function Ih(t){return new ao(t)}function zo(t){return!Bi(t.limit)&&t.limitType==="F"}function Ia(t){return!Bi(t.limit)&&t.limitType==="L"}function ny(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sy(t){for(const e of t.filters)if(e.S())return e.field;return null}function lS(t){return t.collectionGroup!==null}function Kr(t){const e=te(t);if(e.D===null){e.D=[];const n=sy(e),s=ny(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new ri(n)),e.D.push(new ri(gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ri(gt.keyField(),r))}}}return e.D}function Rs(t){const e=te(t);if(!e.C)if(e.limitType==="F")e.C=Fd(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Kr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ri(r.field,o))}const s=e.endAt?new Aa(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Aa(e.startAt.position,!e.startAt.inclusive):null;e.C=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.C}function iy(t,e,n){return new ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Ah(Rs(t),Rs(e))&&t.limitType===e.limitType}function ry(t){return`${bh(Rs(t))}|lt:${t.limitType}`}function Zl(t){return`Query(target=${Z0(Rs(t))}; limitType=${t.limitType})`}function Sh(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Vd(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Kr(n),s)||n.endAt&&!function(i,r,o){const a=Vd(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Kr(n),s))}(t,e)}function oy(t){return(e,n)=>{let s=!1;for(const i of Kr(t)){const r=uS(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function uS(t,e,n){const s=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?vi(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(e)?"-0":e}}function cy(t){return{integerValue:""+t}}function hS(t,e){return Q0(e)?cy(e):ay(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function fS(t,e,n){return t instanceof Sa?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Wr?uy(t,e):t instanceof zr?hy(t,e):function(s,i){const r=ly(s,i),o=jd(r)+jd(s.k);return Ql(r)&&Ql(s.k)?cy(o):ay(s.O,o)}(t,e)}function dS(t,e,n){return t instanceof Wr?uy(t,e):t instanceof zr?hy(t,e):n}function ly(t,e){return t instanceof Ca?Ql(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Sa extends uc{}class Wr extends uc{constructor(e){super(),this.elements=e}}function uy(t,e){const n=fy(e);for(const s of t.elements)n.some(i=>rn(i,s))||n.push(s);return{arrayValue:{values:n}}}class zr extends uc{constructor(e){super(),this.elements=e}}function hy(t,e){let n=fy(e);for(const s of t.elements)n=n.filter(i=>!rn(i,s));return{arrayValue:{values:n}}}class Ca extends uc{constructor(e,n){super(),this.O=e,this.k=n}}function jd(t){return $e(t.integerValue||t.doubleValue)}function fy(t){return Th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Wr&&s instanceof Wr||n instanceof zr&&s instanceof zr?mi(n.elements,s.elements,rn):n instanceof Ca&&s instanceof Ca?rn(n.k,s.k):n instanceof Sa&&s instanceof Sa}(t.transform,e.transform)}class gS{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function mS(t,e,n){t instanceof fc?function(s,i,r){const o=s.value.clone(),a=Kd(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(s,i,r){if(!Go(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Kd(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(dy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function eu(t,e,n){t instanceof fc?function(s,i,r){if(!Go(s.precondition,i))return;const o=s.value.clone(),a=Wd(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(qd(i),o).setHasLocalMutations()}(t,e,n):t instanceof ji?function(s,i,r){if(!Go(s.precondition,i))return;const o=Wd(s.fieldTransforms,r,i),a=i.data;a.setAll(dy(s)),a.setAll(o),i.convertToFoundDocument(qd(i),a).setHasLocalMutations()}(t,e,n):function(s,i){Go(s.precondition,i)&&i.convertToNoDocument(le.min())}(t,e)}function _S(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ly(s.transform,i||null);r!=null&&(n==null&&(n=Tt.empty()),n.set(s.field,r))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mi(n,s,(i,r)=>pS(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function qd(t){return t.isFoundDocument()?t.version:le.min()}class fc extends hc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class ji extends hc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Kd(t,e,n){const s=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,dS(o,a,n[i]))}return s}function Wd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,fS(r,o,e))}return s}class py extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class yS extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,he;function ES(t){switch(t){default:return ee();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function gy(t){if(t===void 0)return Hn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Me.OK:return S.OK;case Me.CANCELLED:return S.CANCELLED;case Me.UNKNOWN:return S.UNKNOWN;case Me.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Me.INTERNAL:return S.INTERNAL;case Me.UNAVAILABLE:return S.UNAVAILABLE;case Me.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Me.NOT_FOUND:return S.NOT_FOUND;case Me.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Me.ABORTED:return S.ABORTED;case Me.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Me.DATA_LOSS:return S.DATA_LOSS;default:return ee()}}(he=Me||(Me={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ze.RED,this.left=i!=null?i:ze.EMPTY,this.right=r!=null?r:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ze(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zd(this.data.getIterator())}getIteratorFrom(e){return new zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Ke(z.comparator);function Os(){return wS}const TS=new Ke(z.comparator);function tu(){return TS}const bS=new Ke(z.comparator),AS=new Qe(z.comparator);function Oe(...t){let e=AS;for(const n of t)e=e.add(n);return e}const IS=new Qe(ve);function my(){return IS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n)),new dc(le.min(),s,my(),Os(),Oe())}}class co{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new co(Je.EMPTY_BYTE_STRING,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,s,i){this.M=e,this.removedTargetIds=n,this.key=s,this.$=i}}class _y{constructor(e,n){this.targetId=e,this.F=n}}class yy{constructor(e,n,s=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Gd{constructor(){this.B=0,this.L=Xd(),this.U=Je.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Oe(),n=Oe(),s=Oe();return this.L.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ee()}}),new co(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Xd()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class SS{constructor(e){this.nt=e,this.st=new Map,this.it=Os(),this.rt=Yd(),this.ot=new Qe(ve)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,s=e.F.count,i=this.wt(n);if(i){const r=i.target;if(Jl(r))if(s===0){const o=new z(r.path);this.at(n,o,tt.newNoDocument(o,le.min()))}else Se(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Jl(a.target)){const c=new z(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,tt.newNoDocument(c,e))}r.j&&(n.set(o,r.H()),r.J())}});let s=Oe();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(e));const i=new dc(e,n,this.ot,this.it,s);return this.it=Os(),this.rt=Yd(),this.ot=new Qe(ve),i}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,s){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Gd,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Qe(ve),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Gd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new Ke(z.comparator)}function Xd(){return new Ke(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class OS{constructor(e,n){this.databaseId=e,this.N=n}}function Ra(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vy(t,e){return t.N?e.toBase64():e.toUint8Array()}function NS(t,e){return Ra(t,e.toTimestamp())}function _n(t){return Se(!!t),le.fromTimestamp(function(e){const n=qn(e);return new At(n.seconds,n.nanos)}(t))}function Ch(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ey(t){const e=ke.fromString(t);return Se(by(e)),e}function nu(t,e){return Ch(t.databaseId,e.path)}function Jc(t,e){const n=Ey(e);if(n.get(1)!==t.databaseId.projectId)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(wy(n))}function su(t,e){return Ch(t.databaseId,e)}function kS(t){const e=Ey(t);return e.length===4?ke.emptyPath():wy(e)}function iu(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wy(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qd(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function DS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.N?(Se(l===void 0||typeof l=="string"),Je.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),Je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:gy(c.code);return new W(l,c.message||"")}(o);n=new yy(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Jc(t,s.document.name),r=_n(s.document.updateTime),o=new Tt({mapValue:{fields:s.document.fields}}),a=tt.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Yo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Jc(t,s.document),r=s.readTime?_n(s.readTime):le.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Jc(t,s.document),r=s.removedTargetIds||[];n=new Yo([],r,i,null)}else{if(!("filter"in e))return ee();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new vS(i),o=s.targetId;n=new _y(o,r)}}return n}function PS(t,e){let n;if(e instanceof fc)n={update:Qd(t,e.key,e.value)};else if(e instanceof py)n={delete:nu(t,e.key)};else if(e instanceof ji)n={update:Qd(t,e.key,e.data),updateMask:HS(e.fieldMask)};else{if(!(e instanceof yS))return ee();n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Sa)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ca)return{fieldPath:r.field.canonicalString(),increment:o.k};throw ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function LS(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?_n(s.updateTime):_n(i);return r.isEqual(le.min())&&(r=_n(i)),new gS(r,s.transformResults||[])}(n,e))):[]}function xS(t,e){return{documents:[su(t,e.path)]}}function MS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=su(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=su(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ud(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NAN"}};if($d(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ud(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NAN"}};if($d(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(h.field),op:VS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Hs(u.field),direction:FS(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.N||Bi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $S(t){let e=kS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=Ty(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ri(Zs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Bi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Aa(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Aa(f,h)}(n.endAt)),cS(e,i,o,r,a,"F",c,l)}function US(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ty(t){return t?t.unaryFilter!==void 0?[jS(t)]:t.fieldFilter!==void 0?[BS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ty(e)).reduce((e,n)=>e.concat(n)):ee():[]}function FS(t){return CS[t]}function VS(t){return RS[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Zs(t){return gt.fromServerFormat(t.fieldPath)}function BS(t){return _t.create(Zs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function jS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Zs(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Zs(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zs(t.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zs(t.unaryFilter.field);return _t.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function HS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function by(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(i=>i?L.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&mS(r,e,s[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&eu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&eu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(le.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,s)=>Hd(n,s))&&mi(this.baseMutations,e.baseMutations,(n,s)=>Hd(n,s))}}class Rh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Se(e.mutations.length===s.length);let i=bS;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Rh(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s,i,r=le.min(),o=le.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.Ht=e}}function YS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?iy(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.xe=new QS}addToCollectionParentIndex(e,n){return this.xe.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n,s){return L.resolve(Oe())}getFieldIndex(e,n){return L.resolve(null)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class QS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Qe(ke.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Qe(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Ei(0)}static Je(){return new Ei(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==qS)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(e){Ms(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Q_(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s){this.qn=e,this.gs=n,this.indexManager=s}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.ps(e,n,s))}ps(e,n,s){return this.qn.getEntry(e,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Is(e,n){e.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Is(n,s))}As(e,n,s){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):lS(n)?this.Ps(e,n,s):this.bs(e,n,s)}Rs(e,n){return this.ys(e,new z(n)).next(s=>{let i=tu();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ps(e,n,s){const i=n.collectionGroup;let r=tu();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const c=function(l,u){return new ao(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.bs(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}bs(e,n,s){let i;return this.qn.getAll(e,n.path,s).next(r=>(i=r,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let l=i.get(c);l==null&&(l=tt.newInvalidDocument(c),i=i.insert(c,l)),eu(a,l,o.localWriteTime),l.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{Sh(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.vs=s,this.Vs=i}static Ss(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Oh(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{Ds(e){this.Cs=e}As(e,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(le.min())?this.Ns(e,n):this.Cs.Es(e,i).next(r=>{const o=this.xs(n,r);return(zo(n)||Ia(n))&&this.ks(n.limitType,o,i,s)?this.Ns(e,n):(Pd()<=me.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zl(n)),this.Cs.As(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let s=new Qe(oy(e));return n.forEach((i,r)=>{Sh(e,r)&&(s=s.add(r))}),s}ks(e,n,s,i){if(s.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ns(e,n){return Pd()<=me.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Zl(n)),this.Cs.As(e,n,le.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,s,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new Ke(ve),this.$s=new ho(r=>bh(r),Ah),this.Fs=le.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new ZS(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nC(t,e,n,s){return new tC(t,e,n,s)}async function Ay(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.gs.getAllMutationBatches(s).next(r=>(i=r,n.Ls(e),n.gs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Oe();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.Us.Es(s,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function sC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=L.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Se(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.gs.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,i))})}function Iy(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function iC(t,e){const n=te(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((l,u)=>{const h=i.get(u);if(!h)return;a.push(n.Un.removeMatchingKeys(r,l.removedDocuments,u).next(()=>n.Un.addMatchingKeys(r,l.addedDocuments,u)));let f=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),i=i.insert(u,f),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,f,l)&&a.push(n.Un.updateTargetData(r,f))});let c=Os();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(rC(r,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(le.min())){const l=n.Un.getLastRemoteSnapshotVersion(r).next(u=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,c)).next(()=>c)}).then(r=>(n.Ms=i,r))}function rC(t,e,n){let s=Oe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let r=Os();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(le.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):K("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function oC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(s,e)))}function aC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Un.getTargetData(s,e).next(r=>r?(i=r,L.resolve(i)):n.Un.allocateTargetId(s).next(o=>(i=new _s(e,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(e,s.targetId)),s})}async function ru(t,e,n){const s=te(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!lo(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(i.target)}function Jd(t,e,n){const s=te(t);let i=le.min(),r=Oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.$s.get(l);return h!==void 0?L.resolve(u.Ms.get(h)):u.Un.getTargetData(c,l)}(s,o,Rs(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Os.As(o,e,n?i:le.min(),n?r:Oe())).next(a=>({documents:a,Ks:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return L.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:_n(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(s){return{name:s.name,query:YS(s.bundledQuery),readTime:_n(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.overlays=new Ke(z.comparator),this.Hs=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach(i=>{this.Yt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const i=new Map,r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=new Map,r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=new Map,c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(u,l)),!(a.size>=i)););return L.resolve(a)}Yt(e,n,s){if(s===null)return;const i=this.overlays.get(s.key);i!==null&&this.Hs.get(i.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new zS(n,s));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.Js=new Qe(Ve.Ys),this.Xs=new Qe(Ve.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const s=new Ve(e,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ei(new Ve(e,n))}ni(e,n){e.forEach(s=>this.removeReference(s,n))}si(e){const n=new z(new ke([])),s=new Ve(n,e),i=new Ve(n,e+1),r=[];return this.Xs.forEachInRange([s,i],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new z(new ke([])),s=new Ve(n,e),i=new Ve(n,e+1);let r=Oe();return this.Xs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ve(e,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return z.comparator(e.key,n.key)||ve(e.oi,n.oi)}static Zs(e,n){return ve(e.oi,n.oi)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Qe(Ve.Ys)}checkEmpty(e){return L.resolve(this.gs.length===0)}addMutationBatch(e,n,s,i){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new WS(r,n,s,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new Ve(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.hi(s),r=i<0?0:i;return L.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return L.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([s,i],o=>{const a=this.ai(o.oi);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Qe(ve);return n.forEach(i=>{const r=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{s=s.add(a.oi)})}),L.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;z.isDocumentKey(r)||(r=r.child(""));const o=new Ve(new z(r),0);let a=new Qe(ve);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.oi)),!0)},o),L.resolve(this.li(a))}li(e){const n=[];return e.forEach(s=>{const i=this.ai(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return L.forEach(n.mutations,i=>{const r=new Ve(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,n){const s=new Ve(n,0),i=this.ui.firstAfterOrEqual(s);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,L.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.di=e,this.docs=new Ke(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=Os();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),L.resolve(s)}getAll(e,n,s){let i=Os();const r=new z(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return L.resolve(i)}_i(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fC(this)}getSize(e){return L.resolve(this.size)}}class fC extends JS{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.persistence=e,this.wi=new ho(n=>bh(n),Ah),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.mi=0,this.gi=new Nh,this.targetCount=0,this.yi=Ei.He()}forEachTarget(e,n){return this.wi.forEach((s,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),L.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Ze(n),L.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(r).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.wi.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.gi.ti(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.gi.ni(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.gi.ri(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.pi={},this.overlays={},this.Nn=new wh(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new dC(this),this.indexManager=new XS,this.qn=function(s){return new hC(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new GS(n),this.Kn=new cC(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.pi[e.toKey()];return s||(s=new uC(n,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const i=new gC(this.Nn.next());return this.referenceDelegate.Ei(),s(i).next(r=>this.referenceDelegate.Ti(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ai(e,n){return L.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,n)))}}class gC extends KS{constructor(e){super(),this.currentSequenceNumber=e}}class kh{constructor(e){this.persistence=e,this.Ri=new Nh,this.Pi=null}static bi(e){return new kh(e)}get vi(){if(this.Pi)return this.Pi;throw ee()}addReference(e,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.vi.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.vi,s=>{const i=z.fromPath(s);return this.Vi(e,i).next(r=>{r||n.removeEntry(i,le.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Zd{constructor(){this.activeTargetIds=my()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mC{constructor(){this._r=new Zd,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,s){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Zd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,s,i,r){const o=this.$r(e,n);K("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,i,r),this.Br(e,o,a,s).then(c=>(K("RestConnection","Received: ",c),c),c=>{throw Ld("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,n,s,i,r){return this.Mr(e,n,s,i,r)}Fr(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}$r(e,n){const s=yC[e];return`${this.kr}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,s,i){return new Promise((r,o)=>{const a=new F0;a.listenOnce(M0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qc.NO_ERROR:const l=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Qc.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new W(S.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const u=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new W(f,h.message))}else o(new W(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(S.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Ur(e,n,s){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=L0(),o=x0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new U0({})),this.Fr(a.initMessageHeaders,n,s),Km()||zm()||UA()||Gm()||FA()||Wm()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");K("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const f=new vC({Ar:m=>{h?K("Connection","Not sending because WebChannel is closed:",m):(u||(K("Connection","Opening WebChannel transport."),l.open(),u=!0),K("Connection","WebChannel sending:",m),l.send(m))},Rr:()=>l.close()}),p=(m,v,y)=>{m.listen(v,w=>{try{y(w)}catch(O){setTimeout(()=>{throw O},0)}})};return p(l,Po.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),p(l,Po.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),f.Cr())}),p(l,Po.EventType.ERROR,m=>{h||(h=!0,Ld("Connection","WebChannel transport errored:",m),f.Cr(new W(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,Po.EventType.MESSAGE,m=>{var v;if(!h){const y=m.data[0];Se(!!y);const w=y,O=w.error||((v=w[0])===null||v===void 0?void 0:v.error);if(O){K("Connection","WebChannel received error:",O);const P=O.status;let A=function(x){const $=Me[x];if($!==void 0)return gy($)}(P),j=O.message;A===void 0&&(A=S.INTERNAL,j="Unknown error status: "+P+" with message "+O.message),h=!0,f.Cr(new W(A,j)),l.close()}else K("Connection","WebChannel received:",y),f.Nr(y)}}),p(o,$0.STAT_EVENT,m=>{m.stat===kd.PROXY?K("Connection","Detected buffering proxy"):m.stat===kd.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}function Zc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return new OS(t,!0)}class Sy{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=s,this.Kr=i,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-s);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,s,i,r,o,a,c){this.Sn=e,this.Xr=s,this.Zr=i,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Sy(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.no===n&&this.po(s,i)},s=>{e(()=>{const i=new W(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(i)})})}po(e,n){const s=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{s(()=>this.Io(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wC extends Cy{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.O=r}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=DS(this.O,e),s=function(i){if(!("targetChange"in i))return le.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?le.min():r.readTime?_n(r.readTime):le.min()}(e);return this.listener.To(n,s)}Ao(e){const n={};n.database=iu(this.O),n.addTarget=function(i,r){let o;const a=r.target;return o=Jl(a)?{documents:xS(i,a)}:{query:MS(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=vy(i,r.resumeToken):r.snapshotVersion.compareTo(le.min())>0&&(o.readTime=Ra(i,r.snapshotVersion.toTimestamp())),o}(this.O,e);const s=US(this.O,e);s&&(n.labels=s),this.fo(n)}Ro(e){const n={};n.database=iu(this.O),n.removeTarget=e,this.fo(n)}}class TC extends Cy{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=LS(e.writeResults,e.commitTime),s=_n(e.commitTime);return this.listener.Vo(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=iu(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>PS(this.O,s))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=s,this.O=i,this.Co=!1}No(){if(this.Co)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Mr(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(S.UNKNOWN,i.toString())})}Lr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Lr(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(S.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class AC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Hn(n),this.Oo=!1):K("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{s.enqueueAndForget(async()=>{$s(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.Ko.add(4),await fo(c),c.Qo.set("Unknown"),c.Ko.delete(4),await gc(c)}(this))})}),this.Qo=new AC(s,i)}}async function gc(t){if($s(t))for(const e of t.Go)await e(!0)}async function fo(t){for(const e of t.Go)await e(!1)}function Ry(t,e){const n=te(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),Lh(n)?Ph(n):Hi(n).co()&&Dh(n,e))}function Oy(t,e){const n=te(t),s=Hi(n);n.qo.delete(e),s.co()&&Ny(n,e),n.qo.size===0&&(s.co()?s.ho():$s(n)&&n.Qo.set("Unknown"))}function Dh(t,e){t.Wo.Z(e.targetId),Hi(t).Ao(e)}function Ny(t,e){t.Wo.Z(e),Hi(t).Ro(e)}function Ph(t){t.Wo=new SS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Hi(t).start(),t.Qo.Mo()}function Lh(t){return $s(t)&&!Hi(t).oo()&&t.qo.size>0}function $s(t){return te(t).Ko.size===0}function ky(t){t.Wo=void 0}async function SC(t){t.qo.forEach((e,n)=>{Dh(t,e)})}async function CC(t,e){ky(t),Lh(t)?(t.Qo.Bo(e),Ph(t)):t.Qo.set("Unknown")}async function RC(t,e,n){if(t.Qo.set("Online"),e instanceof yy&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.qo.delete(o),s.Wo.removeTarget(o))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Oa(t,s)}else if(e instanceof Yo?t.Wo.ct(e):e instanceof _y?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(le.min()))try{const s=await Iy(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Wo.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qo.get(c);l&&i.qo.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),Ny(i,a);const l=new _s(c.target,a,1,c.sequenceNumber);Dh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await Oa(t,s)}}async function Oa(t,e,n){if(!lo(e))throw e;t.Ko.add(1),await fo(t),t.Qo.set("Offline"),n||(n=()=>Iy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await gc(t)})}function Dy(t,e){return e().catch(n=>Oa(t,n,e))}async function mc(t){const e=te(t),n=Kn(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;OC(e);)try{const i=await oC(e.localStore,s);if(i===null){e.Uo.length===0&&n.ho();break}s=i.batchId,NC(e,i)}catch(i){await Oa(e,i)}Py(e)&&Ly(e)}function OC(t){return $s(t)&&t.Uo.length<10}function NC(t,e){t.Uo.push(e);const n=Kn(t);n.co()&&n.bo&&n.vo(e.mutations)}function Py(t){return $s(t)&&!Kn(t).oo()&&t.Uo.length>0}function Ly(t){Kn(t).start()}async function kC(t){Kn(t).Do()}async function DC(t){const e=Kn(t);for(const n of t.Uo)e.vo(n.mutations)}async function PC(t,e,n){const s=t.Uo.shift(),i=Rh.from(s,e,n);await Dy(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function LC(t,e){e&&Kn(t).bo&&await async function(n,s){if(i=s.code,ES(i)&&i!==S.ABORTED){const r=n.Uo.shift();Kn(n).ao(),await Dy(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await mc(n)}var i}(t,e),Py(t)&&Ly(t)}async function tp(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=$s(n);n.Ko.add(3),await fo(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await gc(n)}async function xC(t,e){const n=te(t);e?(n.Ko.delete(2),await gc(n)):e||(n.Ko.add(2),await fo(n),n.Qo.set("Unknown"))}function Hi(t){return t.zo||(t.zo=function(e,n,s){const i=te(e);return i.No(),new wC(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(t.datastore,t.asyncQueue,{Pr:SC.bind(null,t),vr:CC.bind(null,t),To:RC.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),Lh(t)?Ph(t):t.Qo.set("Unknown")):(await t.zo.stop(),ky(t))})),t.zo}function Kn(t){return t.Ho||(t.Ho=function(e,n,s){const i=te(e);return i.No(),new TC(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(t.datastore,t.asyncQueue,{Pr:kC.bind(null,t),vr:LC.bind(null,t),So:DC.bind(null,t),Vo:PC.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await mc(t)):(await t.Ho.stop(),t.Uo.length>0&&(K("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new xh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),lo(t))return new W(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||z.comparator(n.key,s.key):(n,s)=>z.comparator(n.key,s.key),this.keyedMap=tu(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.Jo=new Ke(z.comparator)}track(e){const n=e.doc.key,s=this.Jo.get(n);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(n):e.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):ee():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,s)=>{e.push(s)}),e}}class wi{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new wi(e,n,oi.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.Xo=void 0,this.listeners=[]}}class $C{constructor(){this.queries=new ho(e=>ry(e),lc),this.onlineState="Unknown",this.Zo=new Set}}async function xy(t,e){const n=te(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new MC),i)try{r.Xo=await n.onListen(s)}catch(o){const a=Mh(o,`Initialization of query '${Zl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&$h(n)}async function My(t,e){const n=te(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function UC(t,e){const n=te(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(i)&&(s=!0);o.Xo=i}}s&&$h(n)}function FC(t,e,n){const s=te(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function $h(t){t.Zo.forEach(e=>{e.next()})}class $y{constructor(e,n,s){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new wi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.key=e}}class Fy{constructor(e){this.key=e}}class VC{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=Oe(),this.mutatedKeys=Oe(),this.mc=oy(e),this.gc=new oi(this.mc)}get yc(){return this.dc}Ic(e,n){const s=n?n.Ec:new np,i=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=zo(this.query)&&i.size===this.query.limit?i.last():null,l=Ia(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Sh(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),y=!0):this.Tc(f,p)||(s.track({type:2,doc:p}),y=!0,(c&&this.mc(p,c)>0||l&&this.mc(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),y=!0):f&&!p&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),zo(this.query)||Ia(this.query))for(;o.size>this.query.limit;){const u=zo(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{gc:o,Ec:s,ks:a,mutatedKeys:r}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const r=e.Ec.Yo();r.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(f)}(l.type,u.type)||this.mc(l.doc,u.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,r.length!==0||c?{snapshot:new wi(this.query,e.gc,i,r,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new np,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=Oe(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return e.forEach(s=>{this.wc.has(s)||n.push(new Fy(s))}),this.wc.forEach(s=>{e.has(s)||n.push(new Uy(s))}),n}vc(e){this.dc=e.Ks,this.wc=Oe();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return wi.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class BC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class jC{constructor(e){this.key=e,this.Sc=!1}}class HC{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new ho(a=>ry(a),lc),this.Nc=new Map,this.xc=new Set,this.kc=new Ke(z.comparator),this.Oc=new Map,this.Mc=new Nh,this.$c={},this.Fc=new Map,this.Bc=Ei.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function qC(t,e){const n=eR(t);let s,i;const r=n.Cc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const o=await aC(n.localStore,Rs(e));n.isPrimaryClient&&Ry(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await KC(n,e,s,a==="current")}return i}async function KC(t,e,n,s){t.Uc=(u,h,f)=>async function(p,m,v,y){let w=m.view.Ic(v);w.ks&&(w=await Jd(p.localStore,m.query,!1).then(({documents:A})=>m.view.Ic(A,w)));const O=y&&y.targetChanges.get(m.targetId),P=m.view.applyChanges(w,p.isPrimaryClient,O);return ip(p,m.targetId,P.Pc),P.snapshot}(t,u,h,f);const i=await Jd(t.localStore,e,!0),r=new VC(e,i.Ks),o=r.Ic(i.documents),a=co.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);ip(t,n,c.Pc);const l=new BC(e,n,r);return t.Cc.set(e,l),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function WC(t,e){const n=te(t),s=n.Cc.get(e),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter(r=>!lc(r,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ru(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Oy(n.remoteStore,s.targetId),ou(n,s.targetId)}).catch(uo)):(ou(n,s.targetId),await ru(n.localStore,s.targetId,!0))}async function zC(t,e,n){const s=tR(t);try{const i=await function(r,o){const a=te(r),c=At.now(),l=o.reduce((h,f)=>h.add(f.key),Oe());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Us.Es(h,l).next(f=>{u=f;const p=[];for(const m of o){const v=_S(m,u.get(m.key));v!=null&&p.push(new ji(m.key,v,ey(v.value.mapValue),Vn.exists(!0)))}return a.gs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.$c[r.currentUser.toKey()];c||(c=new Ke(ve)),c=c.insert(o,a),r.$c[r.currentUser.toKey()]=c}(s,i.batchId,n),await po(s,i.changes),await mc(s.remoteStore)}catch(i){const r=Mh(i,"Failed to persist write");n.reject(r)}}async function Vy(t,e){const n=te(t);try{const s=await iC(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Oc.get(r);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?Se(o.Sc):i.removedDocuments.size>0&&(Se(o.Sc),o.Sc=!1))}),await po(n,s,e)}catch(s){await uo(s)}}function sp(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Cc.forEach((r,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=te(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.tc(o)&&(c=!0)}),c&&$h(a)}(s.eventManager,e),i.length&&s.Dc.To(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GC(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Oc.get(e),r=i&&i.key;if(r){let o=new Ke(z.comparator);o=o.insert(r,tt.newNoDocument(r,le.min()));const a=Oe().add(r),c=new dc(le.min(),new Map,new Qe(ve),o,a);await Vy(s,c),s.kc=s.kc.remove(r),s.Oc.delete(e),Uh(s)}else await ru(s.localStore,e,!1).then(()=>ou(s,e,n)).catch(uo)}async function YC(t,e){const n=te(t),s=e.batch.batchId;try{const i=await sC(n.localStore,e);jy(n,s,null),By(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await po(n,i)}catch(i){await uo(i)}}async function XC(t,e,n){const s=te(t);try{const i=await function(r,o){const a=te(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(s.localStore,e);jy(s,e,n),By(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await po(s,i)}catch(i){await uo(i)}}function By(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function jy(t,e,n){const s=te(t);let i=s.$c[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.$c[s.currentUser.toKey()]=i}}function ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(s=>{t.Mc.containsKey(s)||Hy(t,s)})}function Hy(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(Oy(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Uh(t))}function ip(t,e,n){for(const s of n)s instanceof Uy?(t.Mc.addReference(s.key,e),QC(t,s)):s instanceof Fy?(K("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||Hy(t,s.key)):ee()}function QC(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(K("SyncEngine","New document in limbo: "+n),t.xc.add(s),Uh(t))}function Uh(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new z(ke.fromString(e)),s=t.Bc.next();t.Oc.set(s,new jC(n)),t.kc=t.kc.insert(n,s),Ry(t.remoteStore,new _s(Rs(Ih(n.path)),s,2,wh.A))}}async function po(t,e,n){const s=te(t),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Oh.Ss(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.Dc.To(i),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(c,h=>L.forEach(h.vs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Vs,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!lo(u))throw u;K("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ms.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ms=l.Ms.insert(h,m)}}}(s.localStore,r))}async function JC(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await Ay(n.localStore,e);n.currentUser=e,function(i,r){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new W(S.CANCELLED,r))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await po(n,s.qs)}}function ZC(t,e){const n=te(t),s=n.Oc.get(e);if(s&&s.Sc)return Oe().add(s.key);{let i=Oe();const r=n.Nc.get(e);if(!r)return i;for(const o of r){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function eR(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GC.bind(null,e),e.Dc.To=UC.bind(null,e.eventManager),e.Dc.qc=FC.bind(null,e.eventManager),e}function tR(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XC.bind(null,e),e}class nR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return nC(this.persistence,new eC,e.initialUser,this.O)}jc(e){return new pC(kh.bi,this.O)}Gc(e){return new mC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JC.bind(null,this.syncEngine),await xC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $C}createDatastore(e){const n=pc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new EC(i));var i;return function(r,o,a,c){return new bC(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>sp(this.syncEngine,a,0),o=ep.Vt()?new ep:new _C,new IC(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new HC(s,i,r,o,a,c);return l&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);K("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await fo(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=X_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{K("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(K("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Mh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rR(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ay(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function oR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);K("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>tp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>tp(e.remoteStore,r)),t.onlineComponents=e}async function aR(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await rR(t,new nR)),t.offlineComponents}async function Ky(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await oR(t,new sR)),t.onlineComponents}function cR(t){return Ky(t).then(e=>e.syncEngine)}async function Wy(t){const e=await Ky(t),n=e.eventManager;return n.onListen=qC.bind(null,e.syncEngine),n.onUnlisten=WC.bind(null,e.syncEngine),n}function lR(t,e,n={}){const s=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new qy({next:h=>{r.enqueueAndForget(()=>My(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new W(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new W(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $y(Ih(o.path),l,{includeMetadataChanges:!0,uc:!0});return xy(i,u)}(await Wy(t),t.asyncQueue,e,n,s)),s.promise}function uR(t,e,n={}){const s=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new qy({next:h=>{r.enqueueAndForget(()=>My(i,u)),h.fromCache&&a.source==="server"?c.reject(new W(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $y(o,l,{includeMetadataChanges:!0,uc:!0});return xy(i,u)}(await Wy(t),t.asyncQueue,e,n,s)),s.promise}const rp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t,e,n){if(!n)throw new W(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hR(t,e,n,s){if(e===!0&&s===!0)throw new W(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function op(t){if(!z.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ap(t){if(z.isDocumentKey(t))throw new W(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(t);throw new W(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fR(t,e){if(e<=0)throw new W(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1,e instanceof yi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B0;switch(n.type){case"gapi":const s=n.client;return Se(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new q0(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rp.get(e);n&&(K("ComponentProvider","Removing Datastore"),rp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class qi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qi(this.firestore,e,this._query)}}class Bn extends qi{constructor(e,n,s){super(e,n,Ih(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new z(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function ax(t,e,...n){if(t=st(t),zy("collection","path",e),t instanceof Vh){const s=ke.fromString(e,...n);return ap(s),new Bn(t,null,s)}{if(!(t instanceof It||t instanceof Bn))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return ap(s),new Bn(t.firestore,null,s)}}function dR(t,e,...n){if(t=st(t),arguments.length===1&&(e=X_.R()),zy("doc","path",e),t instanceof Vh){const s=ke.fromString(e,...n);return op(s),new It(t,null,new z(s))}{if(!(t instanceof It||t instanceof Bn))throw new W(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return op(s),new It(t.firestore,t instanceof Bn?t.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Sy(this,"async_queue_retry"),this.yu=()=>{const n=Zc();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=Zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new mn;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!lo(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Hn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=xh.createAndSchedule(this,e,n,s,r=>this.Tu(r));return this.du.push(i),i}pu(){this._u&&ee()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Ki extends Vh{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new pR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gy(this),this._firestoreClient.terminate()}}function cx(t=Yu()){return Ya(t,"firestore").getImmediate()}function Bh(t){return t._firestoreClient||Gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gy(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new X0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iR(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(Je.fromBase64String(e))}catch(n){throw new W(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ti(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^__.*__$/;class mR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new fc(e,this.data,n,this.fieldTransforms)}}class Yy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class qh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new qh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:s,Cu:!1});return i.Nu(e),i}xu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:s,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Na(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Xy(this.Vu)&&gR.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class _R{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=s||pc(e)}Fu(e,n,s,i=!1){return new qh({Vu:e,methodName:n,$u:s,path:gt.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Qy(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new _R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yR(t,e,n,s,i,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,i);Kh("Data must be an object, but it was:",o,s);const a=Jy(s,o);let c,l;if(r.merge)c=new jr(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=au(e,h,n);if(!o.contains(f))throw new W(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ev(u,f)||u.push(f)}c=new jr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mR(new Tt(a),c,l)}class yc extends jh{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function vR(t,e,n,s){const i=t.Fu(1,e,n);Kh("Data must be an object, but it was:",i,s);const r=[],o=Tt.empty();Ms(s,(c,l)=>{const u=Wh(e,c,n);l=st(l);const h=i.xu(u);if(l instanceof yc)r.push(u);else{const f=vc(l,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new jr(r);return new Yy(o,a,i.fieldTransforms)}function ER(t,e,n,s,i,r){const o=t.Fu(1,e,n),a=[au(e,s,n)],c=[i];if(r.length%2!=0)throw new W(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(au(e,r[f])),c.push(r[f+1]);const l=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!ev(l,a[f])){const p=a[f];let m=c[f];m=st(m);const v=o.xu(p);if(m instanceof yc)l.push(p);else{const y=vc(m,v);y!=null&&(l.push(p),u.set(p,y))}}const h=new jr(l);return new Yy(u,h,o.fieldTransforms)}function vc(t,e){if(Zy(t=st(t)))return Kh("Unsupported field value:",e,t),Jy(t,e);if(t instanceof jh)return function(n,s){if(!Xy(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=vc(o,s.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hS(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=At.fromDate(n);return{timestampValue:Ra(s.O,i)}}if(n instanceof At){const i=new At(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ra(s.O,i)}}if(n instanceof Hh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ti)return{bytesValue:vy(s.O,n._byteString)};if(n instanceof It){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ch(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${Fh(n)}`)}(t,e)}function Jy(t,e){const n={};return Q_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(s,i)=>{const r=vc(i,e.Du(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Zy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof At||t instanceof Hh||t instanceof Ti||t instanceof It||t instanceof jh)}function Kh(t,e,n){if(!Zy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fh(n);throw s==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function au(t,e,n){if((e=st(e))instanceof _c)return e._internalPath;if(typeof e=="string")return Wh(t,e);throw Na("Field path arguments must be of type string or ",t,!1,void 0,n)}const wR=new RegExp("[~\\*/\\[\\]]");function Wh(t,e,n){if(e.search(wR)>=0)throw Na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _c(...e.split("."))._internalPath}catch{throw Na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Na(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new W(S.INVALID_ARGUMENT,a+t+c)}function ev(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TR extends tv{data(){return super.data()}}function zh(t,e){return typeof e=="string"?Wh(t,e):e instanceof _c?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nv extends tv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(zh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Xo extends nv{data(e={}){return super.data(e)}}class bR{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ur(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Xo(this._firestore,this._userDataWriter,s.key,s,new ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Xo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Xo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:AR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){if(Ia(t)&&t.explicitOrderBy.length===0)throw new W(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sv{}function lx(t,...e){for(const n of e)t=n._apply(t);return t}class SR extends sv{constructor(e,n){super(),this.Uu=e,this.Gu=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new W(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ri(i,r);return function(a,c){if(ny(a)===null){const l=sy(a);l!==null&&RR(a,l,c.field)}}(s,o),o}(e._query,this.Uu,this.Gu);return new qi(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new ao(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ux(t,e="asc"){const n=e,s=zh("orderBy",t);return new SR(s,n)}class CR extends sv{constructor(e,n,s){super(),this.type=e,this.ju=n,this.Qu=s}_apply(e){return new qi(e.firestore,e.converter,iy(e._query,this.ju,this.Qu))}}function hx(t){return fR("limit",t),new CR("limit",t,"F")}function RR(t,e,n){if(!n.isEqual(e))throw new W(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const s={};return Ms(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Hh($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Z_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const n=qn(e);return new At(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Se(by(s));const i=new yi(s.get(1),s.get(3)),r=new z(s.popFirst(5));return i.isEqual(n)||Hn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){t=Wn(t,It);const e=Wn(t.firestore,Ki);return lR(Bh(e),t._key).then(n=>kR(e,t,n))}class iv extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function dx(t){t=Wn(t,qi);const e=Wn(t.firestore,Ki),n=Bh(e),s=new iv(e);return IR(t._query),uR(n,t._query).then(i=>new bR(e,s,t,i))}function px(t,e,n,...s){t=Wn(t,It);const i=Wn(t.firestore,Ki),r=Qy(i);let o;return o=typeof(e=st(e))=="string"||e instanceof _c?ER(r,"updateDoc",t._key,e,n,s):vR(r,"updateDoc",t._key,e),Gh(i,[o.toMutation(t._key,Vn.exists(!0))])}function gx(t){return Gh(Wn(t.firestore,Ki),[new py(t._key,Vn.none())])}function mx(t,e){const n=Wn(t.firestore,Ki),s=dR(t),i=NR(t.converter,e);return Gh(n,[yR(Qy(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Vn.exists(!1))]).then(()=>s)}function Gh(t,e){return function(n,s){const i=new mn;return n.asyncQueue.enqueueAndForget(async()=>zC(await cR(n),s,i)),i.promise}(Bh(t),e)}function kR(t,e,n){const s=n.docs.get(e._key),i=new iv(t);return new nv(t,i,e._key,s,new ur(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vi=n})(Mi),pi(new bs("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Ki(i,new j0(n.getProvider("auth-internal")),new W0(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),Zt(Dd,"3.4.5",t),Zt(Dd,"3.4.5","esm2017")})();var DR="firebase",PR="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(DR,PR,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebasestorage.googleapis.com",ov="storageBucket",LR=2*60*1e3,xR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Yn{constructor(e,n){super(el(e),`Firebase Storage: ${n} (${el(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}_codeEquals(e){return el(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function el(t){return"storage/"+t}function Yh(){const t="An unknown error occurred, please check the error payload for server response.";return new Le("unknown",t)}function MR(t){return new Le("object-not-found","Object '"+t+"' does not exist.")}function $R(t){return new Le("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le("unauthenticated",t)}function FR(){return new Le("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function VR(t){return new Le("unauthorized","User does not have permission to access '"+t+"'.")}function BR(){return new Le("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function av(){return new Le("canceled","User canceled the upload/download.")}function jR(t){return new Le("invalid-url","Invalid URL '"+t+"'.")}function HR(t){return new Le("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function qR(){return new Le("no-default-bucket","No default bucket found. Did you set the '"+ov+"' property when initializing the app?")}function cv(){return new Le("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function KR(){return new Le("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function WR(){return new Le("no-download-url","The given file does not have any download URLs.")}function cu(t){return new Le("invalid-argument",t)}function lv(){return new Le("app-deleted","The Firebase app was deleted.")}function zR(t){return new Le("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function br(t,e){return new Le("invalid-format","String does not match format '"+t+"': "+e)}function tr(t){throw new Le("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(s.path==="")return s;throw HR(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},v=n===rv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${v}/${i}/${y}`,"i"),P=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let A=0;A<P.length;A++){const j=P[A],x=j.regex.exec(e);if(x){const $=x[j.indices.bucket];let ne=x[j.indices.path];ne||(ne=""),s=new bt($,ne),j.postModify(s);break}}if(s==null)throw jR(e);return s}}class GR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(p,c())},y)}function f(){r&&clearTimeout(r)}function p(y,...w){if(l){f();return}if(y){f(),u.call(null,y,...w);return}if(c()||o){f(),u.call(null,y,...w);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let m=!1;function v(y){m||(m=!0,f(),!l&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function XR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){return t!==void 0}function JR(t){return typeof t=="function"}function ZR(t){return typeof t=="object"&&!Array.isArray(t)}function Ec(t){return typeof t=="string"||t instanceof String}function lp(t){return Xh()&&t instanceof Blob}function Xh(){return typeof Blob!="undefined"}function up(t,e,n,s){if(s<e)throw cu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw cu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function uv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,s,i,r,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new xo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ys.NO_ERROR,c=r.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=r.getErrorCode()===ys.ABORT;s(!1,new xo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new xo(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());QR(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Yh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?lv():av();o(c)}else{const c=BR();o(c)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=YR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||r}}class xo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function tO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function sO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rO(t,e,n,s,i,r){const o=uv(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return sO(c,e),tO(c,n),nO(c,r),iO(c,s),new eO(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function aO(...t){const e=oO();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Xh())return new Blob(t);throw new Le("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function cO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tl{constructor(e,n){this.data=e,this.contentType=n||null}}function uO(t,e){switch(t){case Qt.RAW:return new tl(hv(e));case Qt.BASE64:case Qt.BASE64URL:return new tl(fv(t,e));case Qt.DATA_URL:return new tl(fO(e),dO(e))}throw Yh()}function hv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function hO(t){let e;try{e=decodeURIComponent(t)}catch{throw br(Qt.DATA_URL,"Malformed data URL.")}return hv(e)}function fv(t,e){switch(t){case Qt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw br(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw br(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lO(e)}catch{throw br(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class dv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw br(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function fO(t){const e=new dv(t);return e.base64?fv(Qt.BASE64,e.rest):hO(e.rest)}function dO(t){return new dv(t).contentType}function pO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){let s=0,i="";lp(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(lp(this.data_)){const s=this.data_,i=cO(s,e,n);return i===null?null:new Dn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(s,!0)}}static getBlob(...e){if(Xh()){const n=e.map(s=>s instanceof Dn?s.data_:s);return new Dn(aO.apply(null,n))}else{const n=e.map(o=>Ec(o)?uO(Qt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Dn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){let e;try{e=JSON.parse(t)}catch{return null}return ZR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mO(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function gv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t,e){return e}class it{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||_O}}let Mo=null;function yO(t){return!Ec(t)||t.length<2?t:gv(t)}function mv(){if(Mo)return Mo;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(r,o){return yO(o)}const n=new it("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=s,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),Mo=t,Mo}function vO(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new bt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function EO(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return vO(s,t),s}function _v(t,e,n){const s=pv(e);return s===null?null:EO(t,s,n)}function wO(t,e,n,s){const i=pv(e);if(i===null||!Ec(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=go(f,n,s),m=uv({alt:"media",token:l});return p+m})[0]}function yv(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Wi{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(!t)throw Yh()}function Qh(t,e){function n(s,i){const r=_v(t,i,e);return yn(r!==null),r}return n}function TO(t,e){function n(s,i){const r=_v(t,i,e);return yn(r!==null),wO(r,i,t.host,t._protocol)}return n}function mo(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=FR():i=UR():n.getStatus()===402?i=$R(t.bucket):n.getStatus()===403?i=VR(t.path):i=s,i.serverResponse=s.serverResponse,i}return e}function vv(t){const e=mo(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=MR(t.path)),r.serverResponse=i.serverResponse,r}return n}function bO(t,e,n){const s=e.fullServerUrl(),i=go(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Wi(i,r,Qh(t,n),o);return a.errorHandler=vv(e),a}function AO(t,e,n){const s=e.fullServerUrl(),i=go(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Wi(i,r,TO(t,n),o);return a.errorHandler=vv(e),a}function IO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ev(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=IO(null,e)),s}function SO(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let A=0;A<2;A++)P=P+Math.random().toString().slice(2);return P}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ev(e,s,i),u=yv(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=Dn.getBlob(h,s,f);if(p===null)throw cv();const m={name:l.fullPath},v=go(r,t.host,t._protocol),y="POST",w=t.maxUploadRetryTime,O=new Wi(v,y,Qh(t,n),w);return O.urlParams=m,O.headers=o,O.body=p.uploadData(),O.errorHandler=mo(e),O}class ka{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function Jh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function CO(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=Ev(e,s,i),a={name:o.fullPath},c=go(r,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=yv(o,n),f=t.maxUploadRetryTime;function p(v){Jh(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(Ec(y)),y}const m=new Wi(c,l,p,f);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=mo(e),m}function RO(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const u=Jh(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const f=Number(h);return yn(!isNaN(f)),new ka(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Wi(n,o,r,a);return c.headers=i,c.errorHandler=mo(e),c}const hp=256*1024;function OO(t,e,n,s,i,r,o,a){const c=new ka(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw KR();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,f=h+u,m={"X-Goog-Upload-Command":u===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw cv();function y(A,j){const x=Jh(A,["active","final"]),$=c.current+u,ne=s.size();let se;return x==="final"?se=Qh(e,r)(A,j):se=null,new ka($,ne,x==="final",se)}const w="POST",O=e.maxUploadRetryTime,P=new Wi(n,w,y,O);return P.headers=m,P.body=v.uploadData(),P.progressCallback=a||null,P.errorHandler=mo(t),P}const pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function nl(t){switch(t){case"running":case"pausing":case"canceling":return pt.RUNNING;case"paused":return pt.PAUSED;case"success":return pt.SUCCESS;case"canceled":return pt.CANCELED;case"error":return pt.ERROR;default:return pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,s){if(JR(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class kO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw tr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw tr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw tr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw tr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw tr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DO extends kO{initXhr(){this.xhr_.responseType="text"}}function Xs(){return new DO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=mv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=CO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Xs,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=RO(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Xs,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=hp*this._chunkMultiplier,n=new ka(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=OO(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Xs,i,r);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){hp*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=bO(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Xs,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=SO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Xs,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=av(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=nl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new NO(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(nl(this._state)){case pt.SUCCESS:qs(this._resolve.bind(null,this.snapshot))();break;case pt.CANCELED:case pt.ERROR:const n=this._reject;qs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(nl(this._state)){case pt.RUNNING:case pt.PAUSED:e.next&&qs(e.next.bind(e,this.snapshot))();break;case pt.SUCCESS:e.complete&&qs(e.complete.bind(e))();break;case pt.CANCELED:case pt.ERROR:e.error&&qs(e.error.bind(e,this._error))();break;default:e.error&&qs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ns(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gv(this._location.path)}get storage(){return this._service}get parent(){const e=gO(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new Ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zR(e)}}function LO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new PO(t,new Dn(e),n)}function xO(t){t._throwIfRoot("getDownloadURL");const e=AO(t.storage,t._location,mv());return t.storage.makeRequestWithTokens(e,Xs).then(n=>{if(n===null)throw WR();return n})}function MO(t,e){const n=mO(t._location.path,e),s=new bt(t._location.bucket,n);return new Ns(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return/^[A-Za-z]+:\/\//.test(t)}function UO(t,e){return new Ns(t,e)}function wv(t,e){if(t instanceof Zh){const n=t;if(n._bucket==null)throw qR();const s=new Ns(n,n._bucket);return e!=null?wv(s,e):s}else return e!==void 0?MO(t,e):t}function FO(t,e){if(e&&$O(e)){if(t instanceof Zh)return UO(t,e);throw cu("To use ref(service, url), the first argument must be a Storage instance.")}else return wv(t,e)}function fp(t,e){const n=e==null?void 0:e[ov];return n==null?null:bt.makeFromBucketSpec(n,t)}class Zh{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=rv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LR,this._maxUploadRetryTime=xR,this._requests=new Set,i!=null?this._bucket=bt.makeFromBucketSpec(i,this._host):this._bucket=fp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=fp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){up("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){up("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ns(this,e)}_makeRequest(e,n,s,i){if(this._deleted)return new GR(lv());{const r=rO(e,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const dp="@firebase/storage",pp="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="storage";function _x(t,e,n){return t=st(t),LO(t,e,n)}function yx(t){return t=st(t),xO(t)}function vx(t,e){return t=st(t),FO(t,e)}function Ex(t=Yu(),e){return t=st(t),Ya(t,Tv).getImmediate({identifier:e})}function VO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zh(n,s,i,e,Mi)}function BO(){pi(new bs(Tv,VO,"PUBLIC").setMultipleInstances(!0)),Zt(dp,pp,""),Zt(dp,pp,"esm2017")}BO();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ef(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function bv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jO=bv,Av=new Xr("auth","Firebase",bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new zu("@firebase/auth");function Qo(t,...e){gp.logLevel<=me.ERROR&&gp.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw tf(t,...e)}function en(t,...e){return tf(t,...e)}function HO(t,e,n){const s=Object.assign(Object.assign({},jO()),{[e]:n});return new Xr("auth","Firebase",s).create(e,{appName:t.name})}function tf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Av.create(t,...e)}function Q(t,e,...n){if(!t)throw tf(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Map;function pn(t){Tn(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e){const n=Ya(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ha(r,e!=null?e:{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function KO(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WO(){return _p()==="http:"||_p()==="https:"}function _p(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WO()||Wm()||"connection"in navigator)?navigator.onLine:!0}function GO(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Km()||zm()}get(){return zO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=new _o(3e4,6e4);function QO(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wc(t,e,n,s,i={}){return Sv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Iv.fetch()(Cv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Sv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},YO),e);try{const i=new ZO(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw sl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sl(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw HO(t,u,l);wn(t,u)}}catch(i){if(i instanceof Yn)throw i;wn(t,"network-request-failed")}}async function JO(t,e,n,s,i={}){const r=await wc(t,e,n,s,i);return"mfaPendingCredential"in r&&wn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Cv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}class ZO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),XO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=en(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e){return wc(t,"POST","/v1/accounts:delete",e)}async function tN(t,e){return wc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nN(t,e=!1){const n=st(t),s=await n.getIdToken(e),i=sf(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ar(il(i.auth_time)),issuedAtTime:Ar(il(i.iat)),expirationTime:Ar(il(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function il(t){return Number(t)*1e3}function sf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=MA(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i),null}}function sN(t){const e=sf(t);return Q(e,"internal-error"),Q(typeof e.exp!="undefined","internal-error"),Q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yn&&iN(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Gr(t,tN(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?cN(r.providerUserInfo):[],a=aN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Rv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function oN(t){const e=st(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aN(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function cN(t){return t.map(e=>{var{providerId:n}=e,s=ef(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){const n=await Sv(t,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Cv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken!="undefined","internal-error"),Q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):sN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await lN(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Yr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){Q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class vs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nN(this,e)}reload(){return oN(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,eN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:A,isAnonymous:j,providerData:x,stsTokenManager:$}=n;Q(P&&$,e,"internal-error");const ne=Yr.fromJSON(this.name,$);Q(typeof P=="string",e,"internal-error"),Cn(h,e.name),Cn(f,e.name),Q(typeof A=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),Cn(p,e.name),Cn(m,e.name),Cn(v,e.name),Cn(y,e.name),Cn(w,e.name),Cn(O,e.name);const se=new vs({uid:P,auth:e,email:f,emailVerified:A,displayName:h,isAnonymous:j,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:ne,createdAt:w,lastLoginAt:O});return x&&Array.isArray(x)&&(se.providerData=x.map(ue=>Object.assign({},ue))),y&&(se._redirectEventId=y),se}static async _fromIdTokenResponse(e,n,s=!1){const i=new Yr;i.updateFromServerResponse(n);const r=new vs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Da(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const yp=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Jo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(pn(yp),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||pn(yp);const o=Jo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=vs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ai(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ai(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(xv(e))return"Webos";if(rf(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nv(t=He()){return/firefox\//i.test(t)}function rf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(t=He()){return/crios\//i.test(t)}function Dv(t=He()){return/iemobile/i.test(t)}function Pv(t=He()){return/android/i.test(t)}function Lv(t=He()){return/blackberry/i.test(t)}function xv(t=He()){return/webos/i.test(t)}function Tc(t=He()){return/iphone|ipad|ipod/i.test(t)}function uN(t=He()){var e;return Tc(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function hN(){return Gm()&&document.documentMode===10}function Mv(t=He()){return Tc(t)||Pv(t)||xv(t)||Lv(t)||/windows phone/i.test(t)||Dv(t)}function fN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e=[]){let n;switch(t){case"Browser":n=vp(He());break;case"Worker":n=`${vp(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ep(this),this.idTokenSubscription=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Av,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Uv(t){return st(t)}class Ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=qA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){return JO(t,"POST","/v1/accounts:signInWithIdp",QO(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="http://localhost";class ks extends Fv{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ef(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ks(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ci(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:pN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Vv{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends yo{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends yo{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends yo{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends yo{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vs._fromIdTokenResponse(e,s,i),o=wp(s);return new bi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wp(s);return new bi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Yn{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Pa(e,n,s,i)}}function Bv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,r,e,s):r})}async function gN(t,e,n=!1){const s=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Gr(t,Bv(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=sf(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),bi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e,n=!1){const s="signIn",i=await Bv(t,s,e),r=await bi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}const La="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){const t=He();return rf(t)||Tc(t)}const vN=1e3,EN=10;class Hv extends jv{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yN()&&fN(),this.fallbackToPolling=Mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);hN()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EN):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const wN=Hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qv.type="SESSION";const Kv=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await TN(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=of("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function AN(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){return typeof tn().WorkerGlobalScope!="undefined"&&typeof tn().importScripts=="function"}async function IN(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CN(){return Wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="firebaseLocalStorageDb",RN=1,xa="firebaseLocalStorage",Gv="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function ON(){const t=indexedDB.deleteDatabase(zv);return new vo(t).toPromise()}function uu(){const t=indexedDB.open(zv,RN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xa,{keyPath:Gv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xa)?e(s):(s.close(),await ON(),e(await uu()))})})}async function Tp(t,e,n){const s=Ac(t,!0).put({[Gv]:e,value:n});return new vo(s).toPromise()}async function NN(t,e){const n=Ac(t,!1).get(e),s=await new vo(n).toPromise();return s===void 0?null:s.value}function bp(t,e){const n=Ac(t,!0).delete(e);return new vo(n).toPromise()}const kN=800,DN=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>DN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IN(),!this.activeServiceWorker)return;this.sender=new bN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Tp(e,La,"1"),await bp(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>NN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ac(i,!1).getAll();return new vo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const PN=Yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xN(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=en("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",LN().appendChild(s)})}function MN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){return e?pn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends Fv{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UN(t){return _N(t.auth,new af(t),t.bypassAuthState)}function FN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),mN(n,new af(t),t.bypassAuthState)}async function VN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),gN(n,new af(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UN;case"linkViaPopup":case"linkViaRedirect":return VN;case"reauthViaPopup":case"reauthViaRedirect":return FN;default:wn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new _o(2e3,1e4);class ei extends Xv{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="pendingRedirect",rl=new Map;class HN extends Xv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const s=await qN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qN(t,e){const n=WN(e),s=KN(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function KN(t){return pn(t._redirectPersistence)}function WN(t){return Jo(jN,t.config.apiKey,t.name)}async function zN(t,e,n=!1){const s=Uv(t),i=$N(s,e),o=await new HN(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=10*60*1e3;class YN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ap(e))}saveEventToCache(e){this.cachedEventUids.add(Ap(e)),this.lastProcessedEventTime=Date.now()}}function Ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e={}){return wc(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZN=/^https?/;async function ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QN(t);for(const n of e)try{if(tk(n))return}catch{}wn(t,"unauthorized-domain")}function tk(t){const e=lu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZN.test(n))return!1;if(JN.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new _o(3e4,6e4);function Ip(){const t=tn().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sk(t){return new Promise((e,n)=>{var s,i,r;function o(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),n(en(t,"network-request-failed"))},timeout:nk.get()})}if((i=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=tn().gapi)===null||r===void 0?void 0:r.load)o();else{const a=MN("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},xN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function ik(t){return Zo=Zo||sk(t),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new _o(5e3,15e3),ok="__/auth/iframe",ak="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,ak):`https://${t.config.authDomain}/${ok}`,s={apiKey:e.apiKey,appName:t.name,v:Mi},i=lk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qr(s).slice(1)}`}async function hk(t){const e=await ik(t),n=tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:uk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{r(o)},rk.get());function c(){tn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dk=500,pk=600,gk="_blank",mk="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _k(t,e,n,s=dk,i=pk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fk),{width:s.toString(),height:i.toString(),top:r,left:o}),l=He().toLowerCase();n&&(a=kv(l)?gk:n),Nv(l)&&(e=e||mk,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(uN(l)&&a!=="_self")return yk(e||"",a),new Sp(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Sp(h)}function yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="__/auth/handler",Ek="emulator/auth/handler";function Cp(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Mi,eventId:i};if(e instanceof Vv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof yo){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${wk(t)}?${Qr(a).slice(1)}`}function wk({config:t}){return t.emulator?nf(t,Ek):`https://${t.authDomain}/${vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="webStorageSupport";class Tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kv,this._completeRedirectFn=zN}async _openPopup(e,n,s,i){var r;Tn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Cp(e,n,s,lu(),i);return _k(e,o,of())}async _openRedirect(e,n,s,i){return await this._originValidation(e),AN(Cp(e,n,s,lu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hk(e),s=new YN(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ol,{type:ol},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ol];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mv()||rf()||Tc()}}const bk=Tk;var Rp="@firebase/auth",Op="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sk(t){pi(new bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=s.options;return(o=>{Q(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Q(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$v(t)},c=new dN(o,a);return KO(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new bs("auth-internal",e=>{const n=Uv(e.getProvider("auth").getImmediate());return(s=>new Ak(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Rp,Op,Ik(t)),Zt(Rp,Op,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t=Yu()){const e=Ya(t,"auth");return e.isInitialized()?e.getImmediate():qO(t,{popupRedirectResolver:bk,persistence:[PN,wN,Kv]})}Sk("Browser");var lt="top",Rt="bottom",Ot="right",ut="left",Ic="auto",zi=[lt,Rt,Ot,ut],Ds="start",Ai="end",Jv="clippingParents",cf="viewport",Qs="popper",Zv="reference",hu=zi.reduce(function(t,e){return t.concat([e+"-"+Ds,e+"-"+Ai])},[]),lf=[].concat(zi,[Ic]).reduce(function(t,e){return t.concat([e,e+"-"+Ds,e+"-"+Ai])},[]),eE="beforeRead",tE="read",nE="afterRead",sE="beforeMain",iE="main",rE="afterMain",oE="beforeWrite",aE="write",cE="afterWrite",lE=[eE,tE,nE,sE,iE,rE,oE,aE,cE];function on(t){return t?(t.nodeName||"").toLowerCase():null}function jt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ii(t){var e=jt(t).Element;return t instanceof e||t instanceof Element}function Lt(t){var e=jt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function uE(t){if(typeof ShadowRoot=="undefined")return!1;var e=jt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ck(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!Lt(r)||!on(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Rk(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!Lt(i)||!on(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(c){i.removeAttribute(c)}))})}}var uf={name:"applyStyles",enabled:!0,phase:"write",fn:Ck,effect:Rk,requires:["computeStyles"]};function nn(t){return t.split("-")[0]}var Es=Math.max,Ma=Math.min,Si=Math.round;function Ci(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),s=1,i=1;if(Lt(t)&&e){var r=t.offsetHeight,o=t.offsetWidth;o>0&&(s=Si(n.width)/o||1),r>0&&(i=Si(n.height)/r||1)}return{width:n.width/s,height:n.height/i,top:n.top/i,right:n.right/s,bottom:n.bottom/i,left:n.left/s,x:n.left/s,y:n.top/i}}function hf(t){var e=Ci(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function hE(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&uE(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function bn(t){return jt(t).getComputedStyle(t)}function Ok(t){return["table","td","th"].indexOf(on(t))>=0}function Jn(t){return((Ii(t)?t.ownerDocument:t.document)||window.document).documentElement}function Sc(t){return on(t)==="html"?t:t.assignedSlot||t.parentNode||(uE(t)?t.host:null)||Jn(t)}function Np(t){return!Lt(t)||bn(t).position==="fixed"?null:t.offsetParent}function Nk(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&Lt(t)){var s=bn(t);if(s.position==="fixed")return null}for(var i=Sc(t);Lt(i)&&["html","body"].indexOf(on(i))<0;){var r=bn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function Eo(t){for(var e=jt(t),n=Np(t);n&&Ok(n)&&bn(n).position==="static";)n=Np(n);return n&&(on(n)==="html"||on(n)==="body"&&bn(n).position==="static")?e:n||Nk(t)||e}function ff(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ir(t,e,n){return Es(t,Ma(e,n))}function kk(t,e,n){var s=Ir(t,e,n);return s>n?n:s}function fE(){return{top:0,right:0,bottom:0,left:0}}function dE(t){return Object.assign({},fE(),t)}function pE(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var Dk=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,dE(typeof e!="number"?e:pE(e,zi))};function Pk(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=nn(n.placement),c=ff(a),l=[ut,Ot].indexOf(a)>=0,u=l?"height":"width";if(!(!r||!o)){var h=Dk(i.padding,n),f=hf(r),p=c==="y"?lt:ut,m=c==="y"?Rt:Ot,v=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],y=o[c]-n.rects.reference[c],w=Eo(r),O=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,P=v/2-y/2,A=h[p],j=O-f[u]-h[m],x=O/2-f[u]/2+P,$=Ir(A,x,j),ne=c;n.modifiersData[s]=(e={},e[ne]=$,e.centerOffset=$-x,e)}}function Lk(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!hE(e.elements.popper,i)||(e.elements.arrow=i))}var gE={name:"arrow",enabled:!0,phase:"main",fn:Pk,effect:Lk,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ri(t){return t.split("-")[1]}var xk={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mk(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:Si(e*i)/i||0,y:Si(n*i)/i||0}}function kp(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,v=m===void 0?0:m,y=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=y.x,v=y.y;var w=o.hasOwnProperty("x"),O=o.hasOwnProperty("y"),P=ut,A=lt,j=window;if(l){var x=Eo(n),$="clientHeight",ne="clientWidth";if(x===jt(n)&&(x=Jn(n),bn(x).position!=="static"&&a==="absolute"&&($="scrollHeight",ne="scrollWidth")),x=x,i===lt||(i===ut||i===Ot)&&r===Ai){A=Rt;var se=h&&j.visualViewport?j.visualViewport.height:x[$];v-=se-s.height,v*=c?1:-1}if(i===ut||(i===lt||i===Rt)&&r===Ai){P=Ot;var ue=h&&j.visualViewport?j.visualViewport.width:x[ne];p-=ue-s.width,p*=c?1:-1}}var ye=Object.assign({position:a},l&&xk),De=u===!0?Mk({x:p,y:v}):{x:p,y:v};if(p=De.x,v=De.y,c){var Ie;return Object.assign({},ye,(Ie={},Ie[A]=O?"0":"",Ie[P]=w?"0":"",Ie.transform=(j.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",Ie))}return Object.assign({},ye,(e={},e[A]=O?v+"px":"",e[P]=w?p+"px":"",e.transform="",e))}function $k(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:nn(e.placement),variation:Ri(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,kp(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,kp(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var df={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:$k,data:{}},$o={passive:!0};function Uk(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,c=jt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach(function(u){u.addEventListener("scroll",n.update,$o)}),a&&c.addEventListener("resize",n.update,$o),function(){r&&l.forEach(function(u){u.removeEventListener("scroll",n.update,$o)}),a&&c.removeEventListener("resize",n.update,$o)}}var pf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Uk,data:{}},Fk={left:"right",right:"left",bottom:"top",top:"bottom"};function ea(t){return t.replace(/left|right|bottom|top/g,function(e){return Fk[e]})}var Vk={start:"end",end:"start"};function Dp(t){return t.replace(/start|end/g,function(e){return Vk[e]})}function gf(t){var e=jt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function mf(t){return Ci(Jn(t)).left+gf(t).scrollLeft}function Bk(t){var e=jt(t),n=Jn(t),s=e.visualViewport,i=n.clientWidth,r=n.clientHeight,o=0,a=0;return s&&(i=s.width,r=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=s.offsetLeft,a=s.offsetTop)),{width:i,height:r,x:o+mf(t),y:a}}function jk(t){var e,n=Jn(t),s=gf(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=Es(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Es(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+mf(t),c=-s.scrollTop;return bn(i||n).direction==="rtl"&&(a+=Es(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function _f(t){var e=bn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function mE(t){return["html","body","#document"].indexOf(on(t))>=0?t.ownerDocument.body:Lt(t)&&_f(t)?t:mE(Sc(t))}function Sr(t,e){var n;e===void 0&&(e=[]);var s=mE(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=jt(s),o=i?[r].concat(r.visualViewport||[],_f(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Sr(Sc(o)))}function fu(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Hk(t){var e=Ci(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Pp(t,e){return e===cf?fu(Bk(t)):Ii(e)?Hk(e):fu(jk(Jn(t)))}function qk(t){var e=Sr(Sc(t)),n=["absolute","fixed"].indexOf(bn(t).position)>=0,s=n&&Lt(t)?Eo(t):t;return Ii(s)?e.filter(function(i){return Ii(i)&&hE(i,s)&&on(i)!=="body"}):[]}function Kk(t,e,n){var s=e==="clippingParents"?qk(t):[].concat(e),i=[].concat(s,[n]),r=i[0],o=i.reduce(function(a,c){var l=Pp(t,c);return a.top=Es(l.top,a.top),a.right=Ma(l.right,a.right),a.bottom=Ma(l.bottom,a.bottom),a.left=Es(l.left,a.left),a},Pp(t,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function _E(t){var e=t.reference,n=t.element,s=t.placement,i=s?nn(s):null,r=s?Ri(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case lt:c={x:o,y:e.y-n.height};break;case Rt:c={x:o,y:e.y+e.height};break;case Ot:c={x:e.x+e.width,y:a};break;case ut:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?ff(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(r){case Ds:c[l]=c[l]-(e[u]/2-n[u]/2);break;case Ai:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Oi(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.boundary,o=r===void 0?Jv:r,a=n.rootBoundary,c=a===void 0?cf:a,l=n.elementContext,u=l===void 0?Qs:l,h=n.altBoundary,f=h===void 0?!1:h,p=n.padding,m=p===void 0?0:p,v=dE(typeof m!="number"?m:pE(m,zi)),y=u===Qs?Zv:Qs,w=t.rects.popper,O=t.elements[f?y:u],P=Kk(Ii(O)?O:O.contextElement||Jn(t.elements.popper),o,c),A=Ci(t.elements.reference),j=_E({reference:A,element:w,strategy:"absolute",placement:i}),x=fu(Object.assign({},w,j)),$=u===Qs?x:A,ne={top:P.top-$.top+v.top,bottom:$.bottom-P.bottom+v.bottom,left:P.left-$.left+v.left,right:$.right-P.right+v.right},se=t.modifiersData.offset;if(u===Qs&&se){var ue=se[i];Object.keys(ne).forEach(function(ye){var De=[Ot,Rt].indexOf(ye)>=0?1:-1,Ie=[lt,Rt].indexOf(ye)>=0?"y":"x";ne[ye]+=ue[Ie]*De})}return ne}function Wk(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?lf:c,u=Ri(s),h=u?a?hu:hu.filter(function(m){return Ri(m)===u}):zi,f=h.filter(function(m){return l.indexOf(m)>=0});f.length===0&&(f=h);var p=f.reduce(function(m,v){return m[v]=Oi(t,{placement:v,boundary:i,rootBoundary:r,padding:o})[nn(v)],m},{});return Object.keys(p).sort(function(m,v){return p[m]-p[v]})}function zk(t){if(nn(t)===Ic)return[];var e=ea(t);return[Dp(t),e,Dp(e)]}function Gk(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,v=n.allowedAutoPlacements,y=e.options.placement,w=nn(y),O=w===y,P=c||(O||!m?[ea(y)]:zk(y)),A=[y].concat(P).reduce(function(qt,E){return qt.concat(nn(E)===Ic?Wk(e,{placement:E,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:v}):E)},[]),j=e.rects.reference,x=e.rects.popper,$=new Map,ne=!0,se=A[0],ue=0;ue<A.length;ue++){var ye=A[ue],De=nn(ye),Ie=Ri(ye)===Ds,Ce=[lt,Rt].indexOf(De)>=0,kt=Ce?"width":"height",fe=Oi(e,{placement:ye,boundary:u,rootBoundary:h,altBoundary:f,padding:l}),ae=Ce?Ie?Ot:ut:Ie?Rt:lt;j[kt]>x[kt]&&(ae=ea(ae));var de=ea(ae),xe=[];if(r&&xe.push(fe[De]<=0),a&&xe.push(fe[ae]<=0,fe[de]<=0),xe.every(function(qt){return qt})){se=ye,ne=!1;break}$.set(ye,xe)}if(ne)for(var $t=m?3:1,vt=function(E){var F=A.find(function(D){var B=$.get(D);if(B)return B.slice(0,E).every(function(ge){return ge})});if(F)return se=F,"break"},et=$t;et>0;et--){var We=vt(et);if(We==="break")break}e.placement!==se&&(e.modifiersData[s]._skip=!0,e.placement=se,e.reset=!0)}}var yE={name:"flip",enabled:!0,phase:"main",fn:Gk,requiresIfExists:["offset"],data:{_skip:!1}};function Lp(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function xp(t){return[lt,Ot,Rt,ut].some(function(e){return t[e]>=0})}function Yk(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Oi(e,{elementContext:"reference"}),a=Oi(e,{altBoundary:!0}),c=Lp(o,s),l=Lp(a,i,r),u=xp(c),h=xp(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var vE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yk};function Xk(t,e,n){var s=nn(t),i=[ut,lt].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[ut,Ot].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Qk(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=lf.reduce(function(u,h){return u[h]=Xk(h,e.rects,r),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}var EE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Qk};function Jk(t){var e=t.state,n=t.name;e.modifiersData[n]=_E({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var yf={name:"popperOffsets",enabled:!0,phase:"read",fn:Jk,data:{}};function Zk(t){return t==="x"?"y":"x"}function eD(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,f=n.tether,p=f===void 0?!0:f,m=n.tetherOffset,v=m===void 0?0:m,y=Oi(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),w=nn(e.placement),O=Ri(e.placement),P=!O,A=ff(w),j=Zk(A),x=e.modifiersData.popperOffsets,$=e.rects.reference,ne=e.rects.popper,se=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,ue=typeof se=="number"?{mainAxis:se,altAxis:se}:Object.assign({mainAxis:0,altAxis:0},se),ye=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,De={x:0,y:0};if(!!x){if(r){var Ie,Ce=A==="y"?lt:ut,kt=A==="y"?Rt:Ot,fe=A==="y"?"height":"width",ae=x[A],de=ae+y[Ce],xe=ae-y[kt],$t=p?-ne[fe]/2:0,vt=O===Ds?$[fe]:ne[fe],et=O===Ds?-ne[fe]:-$[fe],We=e.elements.arrow,qt=p&&We?hf(We):{width:0,height:0},E=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:fE(),F=E[Ce],D=E[kt],B=Ir(0,$[fe],qt[fe]),ge=P?$[fe]/2-$t-B-F-ue.mainAxis:vt-B-F-ue.mainAxis,Ee=P?-$[fe]/2+$t+B+D+ue.mainAxis:et+B+D+ue.mainAxis,ie=e.elements.arrow&&Eo(e.elements.arrow),Z=ie?A==="y"?ie.clientTop||0:ie.clientLeft||0:0,d=(Ie=ye==null?void 0:ye[A])!=null?Ie:0,g=ae+ge-d-Z,_=ae+Ee-d,b=Ir(p?Ma(de,g):de,ae,p?Es(xe,_):xe);x[A]=b,De[A]=b-ae}if(a){var T,N=A==="x"?lt:ut,M=A==="x"?Rt:Ot,R=x[j],k=j==="y"?"height":"width",C=R+y[N],H=R-y[M],V=[lt,ut].indexOf(w)!==-1,q=(T=ye==null?void 0:ye[j])!=null?T:0,G=V?C:R-$[k]-ne[k]-q+ue.altAxis,ce=V?R+$[k]+ne[k]-q-ue.altAxis:H,we=p&&V?kk(G,R,ce):Ir(p?G:C,R,p?ce:H);x[j]=we,De[j]=we-R}e.modifiersData[s]=De}}var wE={name:"preventOverflow",enabled:!0,phase:"main",fn:eD,requiresIfExists:["offset"]};function tD(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function nD(t){return t===jt(t)||!Lt(t)?gf(t):tD(t)}function sD(t){var e=t.getBoundingClientRect(),n=Si(e.width)/t.offsetWidth||1,s=Si(e.height)/t.offsetHeight||1;return n!==1||s!==1}function iD(t,e,n){n===void 0&&(n=!1);var s=Lt(e),i=Lt(e)&&sD(e),r=Jn(e),o=Ci(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!n)&&((on(e)!=="body"||_f(r))&&(a=nD(e)),Lt(e)?(c=Ci(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=mf(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function rD(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function oD(t){var e=rD(t);return lE.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function aD(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function cD(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Mp={placement:"bottom",modifiers:[],strategy:"absolute"};function $p(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Cc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Mp:i;return function(a,c,l){l===void 0&&(l=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Mp,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],f=!1,p={state:u,setOptions:function(w){var O=typeof w=="function"?w(u.options):w;v(),u.options=Object.assign({},r,u.options,O),u.scrollParents={reference:Ii(a)?Sr(a):a.contextElement?Sr(a.contextElement):[],popper:Sr(c)};var P=oD(cD([].concat(s,u.options.modifiers)));return u.orderedModifiers=P.filter(function(A){return A.enabled}),m(),p.update()},forceUpdate:function(){if(!f){var w=u.elements,O=w.reference,P=w.popper;if(!!$p(O,P)){u.rects={reference:iD(O,Eo(P),u.options.strategy==="fixed"),popper:hf(P)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(ue){return u.modifiersData[ue.name]=Object.assign({},ue.data)});for(var A=0;A<u.orderedModifiers.length;A++){if(u.reset===!0){u.reset=!1,A=-1;continue}var j=u.orderedModifiers[A],x=j.fn,$=j.options,ne=$===void 0?{}:$,se=j.name;typeof x=="function"&&(u=x({state:u,options:ne,name:se,instance:p})||u)}}}},update:aD(function(){return new Promise(function(y){p.forceUpdate(),y(u)})}),destroy:function(){v(),f=!0}};if(!$p(a,c))return p;p.setOptions(l).then(function(y){!f&&l.onFirstUpdate&&l.onFirstUpdate(y)});function m(){u.orderedModifiers.forEach(function(y){var w=y.name,O=y.options,P=O===void 0?{}:O,A=y.effect;if(typeof A=="function"){var j=A({state:u,name:w,instance:p,options:P}),x=function(){};h.push(j||x)}})}function v(){h.forEach(function(y){return y()}),h=[]}return p}}var lD=Cc(),uD=[pf,yf,df,uf],hD=Cc({defaultModifiers:uD}),fD=[pf,yf,df,uf,EE,yE,wE,gE,vE],vf=Cc({defaultModifiers:fD}),TE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",popperGenerator:Cc,detectOverflow:Oi,createPopperBase:lD,createPopper:vf,createPopperLite:hD,top:lt,bottom:Rt,right:Ot,left:ut,auto:Ic,basePlacements:zi,start:Ds,end:Ai,clippingParents:Jv,viewport:cf,popper:Qs,reference:Zv,variationPlacements:hu,placements:lf,beforeRead:eE,read:tE,afterRead:nE,beforeMain:sE,main:iE,afterMain:rE,beforeWrite:oE,write:aE,afterWrite:cE,modifierPhases:lE,applyStyles:uf,arrow:gE,computeStyles:df,eventListeners:pf,flip:yE,hide:vE,offset:EE,popperOffsets:yf,preventOverflow:wE});/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const dD=1e6,pD=1e3,du="transitionend",gD=t=>t==null?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),mD=t=>{do t+=Math.floor(Math.random()*dD);while(document.getElementById(t));return t},bE=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},Ef=t=>{const e=bE(t);return e&&document.querySelector(e)?e:null},zn=t=>{const e=bE(t);return e?document.querySelector(e):null},_D=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*pD)},AE=t=>{t.dispatchEvent(new Event(du))},Ps=t=>!t||typeof t!="object"?!1:(typeof t.jquery!="undefined"&&(t=t[0]),typeof t.nodeType!="undefined"),Gn=t=>Ps(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,an=(t,e,n)=>{Object.keys(n).forEach(s=>{const i=n[s],r=e[s],o=r&&Ps(r)?"element":gD(r);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)})},wo=t=>!Ps(t)||t.getClientRects().length===0?!1:getComputedStyle(t).getPropertyValue("visibility")==="visible",ws=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled!="undefined"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",IE=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?IE(t.parentNode):null},$a=()=>{},Gi=t=>{t.offsetHeight},SE=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},al=[],yD=t=>{document.readyState==="loading"?(al.length||document.addEventListener("DOMContentLoaded",()=>{al.forEach(e=>e())}),al.push(t)):t()},yt=()=>document.documentElement.dir==="rtl",xt=t=>{yD(()=>{const e=SE();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},us=t=>{typeof t=="function"&&t()},CE=(t,e,n=!0)=>{if(!n){us(t);return}const s=5,i=_D(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(du,o),us(t))};e.addEventListener(du,o),setTimeout(()=>{r||AE(e)},i)},RE=(t,e,n,s)=>{let i=t.indexOf(e);if(i===-1)return t[!n&&s?t.length-1:0];const r=t.length;return i+=n?1:-1,s&&(i=(i+r)%r),t[Math.max(0,Math.min(i,r-1))]},vD=/[^.]*(?=\..*)\.|.*/,ED=/\..*/,wD=/::\d+$/,cl={};let Up=1;const TD={mouseenter:"mouseover",mouseleave:"mouseout"},bD=/^(mouseenter|mouseleave)/i,OE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function NE(t,e){return e&&`${e}::${Up++}`||t.uidEvent||Up++}function kE(t){const e=NE(t);return t.uidEvent=e,cl[e]=cl[e]||{},cl[e]}function AD(t,e){return function n(s){return s.delegateTarget=t,n.oneOff&&I.off(t,s.type,e),e.apply(t,[s])}}function ID(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return i.delegateTarget=o,s.oneOff&&I.off(t,i.type,e,n),n.apply(o,[i]);return null}}function DE(t,e,n=null){const s=Object.keys(t);for(let i=0,r=s.length;i<r;i++){const o=t[s[i]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function PE(t,e,n){const s=typeof e=="string",i=s?n:e;let r=LE(t);return OE.has(r)||(r=t),[s,i,r]}function Fp(t,e,n,s,i){if(typeof e!="string"||!t)return;if(n||(n=s,s=null),bD.test(e)){const p=m=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return m.call(this,v)};s?s=p(s):n=p(n)}const[r,o,a]=PE(e,n,s),c=kE(t),l=c[a]||(c[a]={}),u=DE(l,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=NE(o,e.replace(vD,"")),f=r?ID(t,n,s):AD(t,n);f.delegationSelector=r?n:null,f.originalHandler=o,f.oneOff=i,f.uidEvent=h,l[h]=f,t.addEventListener(a,f,r)}function pu(t,e,n,s,i){const r=DE(e[n],s,i);!r||(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function SD(t,e,n,s){const i=e[n]||{};Object.keys(i).forEach(r=>{if(r.includes(s)){const o=i[r];pu(t,e,n,o.originalHandler,o.delegationSelector)}})}function LE(t){return t=t.replace(ED,""),TD[t]||t}const I={on(t,e,n,s){Fp(t,e,n,s,!1)},one(t,e,n,s){Fp(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=PE(e,n,s),a=o!==e,c=kE(t),l=e.startsWith(".");if(typeof r!="undefined"){if(!c||!c[o])return;pu(t,c,o,r,i?n:null);return}l&&Object.keys(c).forEach(h=>{SD(t,c,h,e.slice(1))});const u=c[o]||{};Object.keys(u).forEach(h=>{const f=h.replace(wD,"");if(!a||e.includes(f)){const p=u[h];pu(t,c,o,p.originalHandler,p.delegationSelector)}})},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=SE(),i=LE(e),r=e!==i,o=OE.has(i);let a,c=!0,l=!0,u=!1,h=null;return r&&s&&(a=s.Event(e,n),s(t).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),typeof n!="undefined"&&Object.keys(n).forEach(f=>{Object.defineProperty(h,f,{get(){return n[f]}})}),u&&h.preventDefault(),l&&t.dispatchEvent(h),h.defaultPrevented&&typeof a!="undefined"&&a.preventDefault(),h}},Rn=new Map,Cr={set(t,e,n){Rn.has(t)||Rn.set(t,new Map);const s=Rn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return Rn.has(t)&&Rn.get(t).get(e)||null},remove(t,e){if(!Rn.has(t))return;const n=Rn.get(t);n.delete(e),n.size===0&&Rn.delete(t)}},CD="5.1.3";class Ht{constructor(e){e=Gn(e),!!e&&(this._element=e,Cr.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Cr.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,n,s=!0){CE(e,n,s)}static getInstance(e){return Cr.get(Gn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return CD}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Rc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;I.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),ws(this))return;const r=zn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},RD="alert",OD="bs.alert",xE=`.${OD}`,ND=`close${xE}`,kD=`closed${xE}`,DD="fade",PD="show";class Oc extends Ht{static get NAME(){return RD}close(){if(I.trigger(this._element,ND).defaultPrevented)return;this._element.classList.remove(PD);const n=this._element.classList.contains(DD);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),I.trigger(this._element,kD),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Oc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Rc(Oc,"close");xt(Oc);const LD="button",xD="bs.button",MD=`.${xD}`,$D=".data-api",UD="active",Vp='[data-bs-toggle="button"]',FD=`click${MD}${$D}`;class Nc extends Ht{static get NAME(){return LD}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(UD))}static jQueryInterface(e){return this.each(function(){const n=Nc.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}I.on(document,FD,Vp,t=>{t.preventDefault();const e=t.target.closest(Vp);Nc.getOrCreateInstance(e).toggle()});xt(Nc);function Bp(t){return t==="true"?!0:t==="false"?!1:t===Number(t).toString()?Number(t):t===""||t==="null"?null:t}function ll(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Ge={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${ll(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${ll(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(n=>n.startsWith("bs")).forEach(n=>{let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=Bp(t.dataset[n])}),e},getDataAttribute(t,e){return Bp(t.getAttribute(`data-bs-${ll(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},VD=3,Y={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&s.nodeType!==VD;)s.matches(e)&&n.push(s),s=s.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(", ");return this.find(e,t).filter(n=>!ws(n)&&wo(n))}},jp="carousel",BD="bs.carousel",Nt=`.${BD}`,ME=".data-api",jD="ArrowLeft",HD="ArrowRight",qD=500,KD=40,Hp={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},WD={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ss="next",is="prev",cs="left",hr="right",zD={[jD]:hr,[HD]:cs},GD=`slide${Nt}`,qp=`slid${Nt}`,YD=`keydown${Nt}`,XD=`mouseenter${Nt}`,QD=`mouseleave${Nt}`,JD=`touchstart${Nt}`,ZD=`touchmove${Nt}`,eP=`touchend${Nt}`,tP=`pointerdown${Nt}`,nP=`pointerup${Nt}`,sP=`dragstart${Nt}`,iP=`load${Nt}${ME}`,rP=`click${Nt}${ME}`,oP="carousel",rs="active",aP="slide",cP="carousel-item-end",lP="carousel-item-start",uP="carousel-item-next",hP="carousel-item-prev",fP="pointer-event",dP=".active",Uo=".active.carousel-item",pP=".carousel-item",gP=".carousel-item img",mP=".carousel-item-next, .carousel-item-prev",_P=".carousel-indicators",yP="[data-bs-target]",vP="[data-bs-slide], [data-bs-slide-to]",EP='[data-bs-ride="carousel"]',wP="touch",TP="pen";class gn extends Ht{constructor(e,n){super(e);this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(n),this._indicatorsElement=Y.findOne(_P,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Hp}static get NAME(){return jp}next(){this._slide(ss)}nextWhenVisible(){!document.hidden&&wo(this._element)&&this.next()}prev(){this._slide(is)}pause(e){e||(this._isPaused=!0),Y.findOne(mP,this._element)&&(AE(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=Y.findOne(Uo,this._element);const n=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding){I.one(this._element,qp,()=>this.to(e));return}if(n===e){this.pause(),this.cycle();return}const s=e>n?ss:is;this._slide(s,this._items[e])}_getConfig(e){return e=re(re(re({},Hp),Ge.getDataAttributes(this._element)),typeof e=="object"?e:{}),an(jp,e,WD),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=KD)return;const n=e/this.touchDeltaX;this.touchDeltaX=0,!!n&&this._slide(n>0?hr:cs)}_addEventListeners(){this._config.keyboard&&I.on(this._element,YD,e=>this._keydown(e)),this._config.pause==="hover"&&(I.on(this._element,XD,e=>this.pause(e)),I.on(this._element,QD,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=r=>this._pointerEvent&&(r.pointerType===TP||r.pointerType===wP),n=r=>{e(r)?this.touchStartX=r.clientX:this._pointerEvent||(this.touchStartX=r.touches[0].clientX)},s=r=>{this.touchDeltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this.touchStartX},i=r=>{e(r)&&(this.touchDeltaX=r.clientX-this.touchStartX),this._handleSwipe(),this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(o=>this.cycle(o),qD+this._config.interval))};Y.find(gP,this._element).forEach(r=>{I.on(r,sP,o=>o.preventDefault())}),this._pointerEvent?(I.on(this._element,tP,r=>n(r)),I.on(this._element,nP,r=>i(r)),this._element.classList.add(fP)):(I.on(this._element,JD,r=>n(r)),I.on(this._element,ZD,r=>s(r)),I.on(this._element,eP,r=>i(r)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=zD[e.key];n&&(e.preventDefault(),this._slide(n))}_getItemIndex(e){return this._items=e&&e.parentNode?Y.find(pP,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,n){const s=e===ss;return RE(this._items,n,s,this._config.wrap)}_triggerSlideEvent(e,n){const s=this._getItemIndex(e),i=this._getItemIndex(Y.findOne(Uo,this._element));return I.trigger(this._element,GD,{relatedTarget:e,direction:n,from:i,to:s})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const n=Y.findOne(dP,this._indicatorsElement);n.classList.remove(rs),n.removeAttribute("aria-current");const s=Y.find(yP,this._indicatorsElement);for(let i=0;i<s.length;i++)if(Number.parseInt(s[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){s[i].classList.add(rs),s[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||Y.findOne(Uo,this._element);if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);n?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=n):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,n){const s=this._directionToOrder(e),i=Y.findOne(Uo,this._element),r=this._getItemIndex(i),o=n||this._getItemByOrder(s,i),a=this._getItemIndex(o),c=Boolean(this._interval),l=s===ss,u=l?lP:cP,h=l?uP:hP,f=this._orderToDirection(s);if(o&&o.classList.contains(rs)){this._isSliding=!1;return}if(this._isSliding||this._triggerSlideEvent(o,f).defaultPrevented||!i||!o)return;this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const m=()=>{I.trigger(this._element,qp,{relatedTarget:o,direction:f,from:r,to:a})};if(this._element.classList.contains(aP)){o.classList.add(h),Gi(o),i.classList.add(u),o.classList.add(u);const v=()=>{o.classList.remove(u,h),o.classList.add(rs),i.classList.remove(rs,h,u),this._isSliding=!1,setTimeout(m,0)};this._queueCallback(v,i,!0)}else i.classList.remove(rs),o.classList.add(rs),this._isSliding=!1,m();c&&this.cycle()}_directionToOrder(e){return[hr,cs].includes(e)?yt()?e===cs?is:ss:e===cs?ss:is:e}_orderToDirection(e){return[ss,is].includes(e)?yt()?e===is?cs:hr:e===is?hr:cs:e}static carouselInterface(e,n){const s=gn.getOrCreateInstance(e,n);let{_config:i}=s;typeof n=="object"&&(i=re(re({},i),n));const r=typeof n=="string"?n:i.slide;if(typeof n=="number")s.to(n);else if(typeof r=="string"){if(typeof s[r]=="undefined")throw new TypeError(`No method named "${r}"`);s[r]()}else i.interval&&i.ride&&(s.pause(),s.cycle())}static jQueryInterface(e){return this.each(function(){gn.carouselInterface(this,e)})}static dataApiClickHandler(e){const n=zn(this);if(!n||!n.classList.contains(oP))return;const s=re(re({},Ge.getDataAttributes(n)),Ge.getDataAttributes(this)),i=this.getAttribute("data-bs-slide-to");i&&(s.interval=!1),gn.carouselInterface(n,s),i&&gn.getInstance(n).to(i),e.preventDefault()}}I.on(document,rP,vP,gn.dataApiClickHandler);I.on(window,iP,()=>{const t=Y.find(EP);for(let e=0,n=t.length;e<n;e++)gn.carouselInterface(t[e],gn.getInstance(t[e]))});xt(gn);const Kp="collapse",$E="bs.collapse",To=`.${$E}`,bP=".data-api",Wp={toggle:!0,parent:null},AP={toggle:"boolean",parent:"(null|element)"},IP=`show${To}`,SP=`shown${To}`,CP=`hide${To}`,RP=`hidden${To}`,OP=`click${To}${bP}`,ul="show",ti="collapse",Fo="collapsing",zp="collapsed",Gp=`:scope .${ti} .${ti}`,NP="collapse-horizontal",kP="width",DP="height",PP=".collapse.show, .collapse.collapsing",gu='[data-bs-toggle="collapse"]';class li extends Ht{constructor(e,n){super(e);this._isTransitioning=!1,this._config=this._getConfig(n),this._triggerArray=[];const s=Y.find(gu);for(let i=0,r=s.length;i<r;i++){const o=s[i],a=Ef(o),c=Y.find(a).filter(l=>l===this._element);a!==null&&c.length&&(this._selector=a,this._triggerArray.push(o))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Wp}static get NAME(){return Kp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[],n;if(this._config.parent){const l=Y.find(Gp,this._config.parent);e=Y.find(PP,this._config.parent).filter(u=>!l.includes(u))}const s=Y.findOne(this._selector);if(e.length){const l=e.find(u=>s!==u);if(n=l?li.getInstance(l):null,n&&n._isTransitioning)return}if(I.trigger(this._element,IP).defaultPrevented)return;e.forEach(l=>{s!==l&&li.getOrCreateInstance(l,{toggle:!1}).hide(),n||Cr.set(l,$E,null)});const r=this._getDimension();this._element.classList.remove(ti),this._element.classList.add(Fo),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(Fo),this._element.classList.add(ti,ul),this._element.style[r]="",I.trigger(this._element,SP)},c=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[r]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||I.trigger(this._element,CP).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Gi(this._element),this._element.classList.add(Fo),this._element.classList.remove(ti,ul);const s=this._triggerArray.length;for(let r=0;r<s;r++){const o=this._triggerArray[r],a=zn(o);a&&!this._isShown(a)&&this._addAriaAndCollapsedClass([o],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Fo),this._element.classList.add(ti),I.trigger(this._element,RP)};this._element.style[n]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ul)}_getConfig(e){return e=re(re(re({},Wp),Ge.getDataAttributes(this._element)),e),e.toggle=Boolean(e.toggle),e.parent=Gn(e.parent),an(Kp,e,AP),e}_getDimension(){return this._element.classList.contains(NP)?kP:DP}_initializeChildren(){if(!this._config.parent)return;const e=Y.find(Gp,this._config.parent);Y.find(gu,this._config.parent).filter(n=>!e.includes(n)).forEach(n=>{const s=zn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))})}_addAriaAndCollapsedClass(e,n){!e.length||e.forEach(s=>{n?s.classList.remove(zp):s.classList.add(zp),s.setAttribute("aria-expanded",n)})}static jQueryInterface(e){return this.each(function(){const n={};typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1);const s=li.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e]()}})}}I.on(document,OP,gu,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=Ef(this);Y.find(e).forEach(s=>{li.getOrCreateInstance(s,{toggle:!1}).toggle()})});xt(li);const hl="dropdown",LP="bs.dropdown",Us=`.${LP}`,wf=".data-api",ta="Escape",Yp="Space",Xp="Tab",mu="ArrowUp",na="ArrowDown",xP=2,MP=new RegExp(`${mu}|${na}|${ta}`),$P=`hide${Us}`,UP=`hidden${Us}`,FP=`show${Us}`,VP=`shown${Us}`,UE=`click${Us}${wf}`,FE=`keydown${Us}${wf}`,BP=`keyup${Us}${wf}`,Ks="show",jP="dropup",HP="dropend",qP="dropstart",KP="navbar",Rr='[data-bs-toggle="dropdown"]',_u=".dropdown-menu",WP=".navbar-nav",zP=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",GP=yt()?"top-end":"top-start",YP=yt()?"top-start":"top-end",XP=yt()?"bottom-end":"bottom-start",QP=yt()?"bottom-start":"bottom-end",JP=yt()?"left-start":"right-start",ZP=yt()?"right-start":"left-start",eL={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},tL={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Dt extends Ht{constructor(e,n){super(e);this._popper=null,this._config=this._getConfig(n),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return eL}static get DefaultType(){return tL}static get NAME(){return hl}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ws(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(I.trigger(this._element,FP,e).defaultPrevented)return;const s=Dt.getParentFromElement(this._element);this._inNavbar?Ge.setDataAttribute(this._menu,"popper","none"):this._createPopper(s),"ontouchstart"in document.documentElement&&!s.closest(WP)&&[].concat(...document.body.children).forEach(i=>I.on(i,"mouseover",$a)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ks),this._element.classList.add(Ks),I.trigger(this._element,VP,e)}hide(){if(ws(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){I.trigger(this._element,$P,e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(s=>I.off(s,"mouseover",$a)),this._popper&&this._popper.destroy(),this._menu.classList.remove(Ks),this._element.classList.remove(Ks),this._element.setAttribute("aria-expanded","false"),Ge.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,UP,e))}_getConfig(e){if(e=re(re(re({},this.constructor.Default),Ge.getDataAttributes(this._element)),e),an(hl,e,this.constructor.DefaultType),typeof e.reference=="object"&&!Ps(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${hl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(typeof TE=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let n=this._element;this._config.reference==="parent"?n=e:Ps(this._config.reference)?n=Gn(this._config.reference):typeof this._config.reference=="object"&&(n=this._config.reference);const s=this._getPopperConfig(),i=s.modifiers.find(r=>r.name==="applyStyles"&&r.enabled===!1);this._popper=vf(n,this._menu,s),i&&Ge.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(Ks)}_getMenuElement(){return Y.next(this._element,_u)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(HP))return JP;if(e.classList.contains(qP))return ZP;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(jP)?n?YP:GP:n?QP:XP}_detectNavbar(){return this._element.closest(`.${KP}`)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),re(re({},e),typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig)}_selectMenuItem({key:e,target:n}){const s=Y.find(zP,this._menu).filter(wo);!s.length||RE(s,n,e===na,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Dt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e&&(e.button===xP||e.type==="keyup"&&e.key!==Xp))return;const n=Y.find(Rr);for(let s=0,i=n.length;s<i;s++){const r=Dt.getInstance(n[s]);if(!r||r._config.autoClose===!1||!r._isShown())continue;const o={relatedTarget:r._element};if(e){const a=e.composedPath(),c=a.includes(r._menu);if(a.includes(r._element)||r._config.autoClose==="inside"&&!c||r._config.autoClose==="outside"&&c||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Xp||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;e.type==="click"&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return zn(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Yp||e.key!==ta&&(e.key!==na&&e.key!==mu||e.target.closest(_u)):!MP.test(e.key))return;const n=this.classList.contains(Ks);if(!n&&e.key===ta||(e.preventDefault(),e.stopPropagation(),ws(this)))return;const s=this.matches(Rr)?this:Y.prev(this,Rr)[0],i=Dt.getOrCreateInstance(s);if(e.key===ta){i.hide();return}if(e.key===mu||e.key===na){n||i.show(),i._selectMenuItem(e);return}(!n||e.key===Yp)&&Dt.clearMenus()}}I.on(document,FE,Rr,Dt.dataApiKeydownHandler);I.on(document,FE,_u,Dt.dataApiKeydownHandler);I.on(document,UE,Dt.clearMenus);I.on(document,BP,Dt.clearMenus);I.on(document,UE,Rr,function(t){t.preventDefault(),Dt.getOrCreateInstance(this).toggle()});xt(Dt);const Qp=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Jp=".sticky-top";class yu{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",n=>n+e),this._setElementAttributes(Qp,"paddingRight",n=>n+e),this._setElementAttributes(Jp,"marginRight",n=>n-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o)[n];o.style[n]=`${s(Number.parseFloat(a))}px`};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Qp,"paddingRight"),this._resetElementAttributes(Jp,"marginRight")}_saveInitialAttribute(e,n){const s=e.style[n];s&&Ge.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=Ge.getDataAttribute(i,n);typeof r=="undefined"?i.style.removeProperty(n):(Ge.removeDataAttribute(i,n),i.style[n]=r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){Ps(e)?n(e):Y.find(e,this._element).forEach(n)}isOverflowing(){return this.getWidth()>0}}const nL={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},sL={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},VE="backdrop",iL="fade",Zp="show",eg=`mousedown.bs.${VE}`;class BE{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){if(!this._config.isVisible){us(e);return}this._append(),this._config.isAnimated&&Gi(this._getElement()),this._getElement().classList.add(Zp),this._emulateAnimation(()=>{us(e)})}hide(e){if(!this._config.isVisible){us(e);return}this._getElement().classList.remove(Zp),this._emulateAnimation(()=>{this.dispose(),us(e)})}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(iL),this._element=e}return this._element}_getConfig(e){return e=re(re({},nL),typeof e=="object"?e:{}),e.rootElement=Gn(e.rootElement),an(VE,e,sL),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),I.on(this._getElement(),eg,()=>{us(this._config.clickCallback)}),this._isAppended=!0)}dispose(){!this._isAppended||(I.off(this._element,eg),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){CE(e,this._getElement(),this._config.isAnimated)}}const rL={trapElement:null,autofocus:!0},oL={trapElement:"element",autofocus:"boolean"},aL="focustrap",cL="bs.focustrap",Ua=`.${cL}`,lL=`focusin${Ua}`,uL=`keydown.tab${Ua}`,hL="Tab",fL="forward",tg="backward";class jE{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:n}=this._config;this._isActive||(n&&e.focus(),I.off(document,Ua),I.on(document,lL,s=>this._handleFocusin(s)),I.on(document,uL,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,I.off(document,Ua))}_handleFocusin(e){const{target:n}=e,{trapElement:s}=this._config;if(n===document||n===s||s.contains(n))return;const i=Y.focusableChildren(s);i.length===0?s.focus():this._lastTabNavDirection===tg?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===hL&&(this._lastTabNavDirection=e.shiftKey?tg:fL)}_getConfig(e){return e=re(re({},rL),typeof e=="object"?e:{}),an(aL,e,oL),e}}const ng="modal",dL="bs.modal",Mt=`.${dL}`,pL=".data-api",sg="Escape",ig={backdrop:!0,keyboard:!0,focus:!0},gL={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},mL=`hide${Mt}`,_L=`hidePrevented${Mt}`,HE=`hidden${Mt}`,qE=`show${Mt}`,yL=`shown${Mt}`,rg=`resize${Mt}`,og=`click.dismiss${Mt}`,ag=`keydown.dismiss${Mt}`,vL=`mouseup.dismiss${Mt}`,cg=`mousedown.dismiss${Mt}`,EL=`click${Mt}${pL}`,lg="modal-open",wL="fade",ug="show",fl="modal-static",TL=".modal.show",bL=".modal-dialog",AL=".modal-body",IL='[data-bs-toggle="modal"]';class Ni extends Ht{constructor(e,n){super(e);this._config=this._getConfig(n),this._dialog=Y.findOne(bL,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new yu}static get Default(){return ig}static get NAME(){return ng}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||I.trigger(this._element,qE,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(lg),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),I.on(this._dialog,cg,()=>{I.one(this._element,vL,s=>{s.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning||I.trigger(this._element,mL).defaultPrevented)return;this._isShown=!1;const n=this._isAnimated();n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ug),I.off(this._element,og),I.off(this._dialog,cg),this._queueCallback(()=>this._hideModal(),this._element,n)}dispose(){[window,this._dialog].forEach(e=>I.off(e,Mt)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new BE({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new jE({trapElement:this._element})}_getConfig(e){return e=re(re(re({},ig),Ge.getDataAttributes(this._element)),typeof e=="object"?e:{}),an(ng,e,gL),e}_showElement(e){const n=this._isAnimated(),s=Y.findOne(AL,this._dialog);(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,s&&(s.scrollTop=0),n&&Gi(this._element),this._element.classList.add(ug);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,yL,{relatedTarget:e})};this._queueCallback(i,this._dialog,n)}_setEscapeEvent(){this._isShown?I.on(this._element,ag,e=>{this._config.keyboard&&e.key===sg?(e.preventDefault(),this.hide()):!this._config.keyboard&&e.key===sg&&this._triggerBackdropTransition()}):I.off(this._element,ag)}_setResizeEvent(){this._isShown?I.on(window,rg,()=>this._adjustDialog()):I.off(window,rg)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(lg),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,HE)})}_showBackdrop(e){I.on(this._element,og,n=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=!1;return}n.target===n.currentTarget&&(this._config.backdrop===!0?this.hide():this._config.backdrop==="static"&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(wL)}_triggerBackdropTransition(){if(I.trigger(this._element,_L).defaultPrevented)return;const{classList:n,scrollHeight:s,style:i}=this._element,r=s>document.documentElement.clientHeight;!r&&i.overflowY==="hidden"||n.contains(fl)||(r||(i.overflowY="hidden"),n.add(fl),this._queueCallback(()=>{n.remove(fl),r||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;(!s&&e&&!yt()||s&&!e&&yt())&&(this._element.style.paddingLeft=`${n}px`),(s&&!e&&!yt()||!s&&e&&yt())&&(this._element.style.paddingRight=`${n}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Ni.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}I.on(document,EL,IL,function(t){const e=zn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),I.one(e,qE,i=>{i.defaultPrevented||I.one(e,HE,()=>{wo(this)&&this.focus()})});const n=Y.findOne(TL);n&&Ni.getInstance(n).hide(),Ni.getOrCreateInstance(e).toggle(this)});Rc(Ni);xt(Ni);const hg="offcanvas",SL="bs.offcanvas",Fs=`.${SL}`,KE=".data-api",CL=`load${Fs}${KE}`,RL="Escape",fg={backdrop:!0,keyboard:!0,scroll:!1},OL={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},dg="show",NL="offcanvas-backdrop",WE=".offcanvas.show",kL=`show${Fs}`,DL=`shown${Fs}`,PL=`hide${Fs}`,zE=`hidden${Fs}`,LL=`click${Fs}${KE}`,xL=`keydown.dismiss${Fs}`,ML='[data-bs-toggle="offcanvas"]';class Ls extends Ht{constructor(e,n){super(e);this._config=this._getConfig(n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return hg}static get Default(){return fg}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||I.trigger(this._element,kL,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new yu().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(dg);const s=()=>{this._config.scroll||this._focustrap.activate(),I.trigger(this._element,DL,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||I.trigger(this._element,PL).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(dg),this._backdrop.hide();const n=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||new yu().reset(),I.trigger(this._element,zE)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e=re(re(re({},fg),Ge.getDataAttributes(this._element)),typeof e=="object"?e:{}),an(hg,e,OL),e}_initializeBackDrop(){return new BE({className:NL,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new jE({trapElement:this._element})}_addEventListeners(){I.on(this._element,xL,e=>{this._config.keyboard&&e.key===RL&&this.hide()})}static jQueryInterface(e){return this.each(function(){const n=Ls.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}I.on(document,LL,ML,function(t){const e=zn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),ws(this))return;I.one(e,zE,()=>{wo(this)&&this.focus()});const n=Y.findOne(WE);n&&n!==e&&Ls.getInstance(n).hide(),Ls.getOrCreateInstance(e).toggle(this)});I.on(window,CL,()=>Y.find(WE).forEach(t=>Ls.getOrCreateInstance(t).show()));Rc(Ls);xt(Ls);const $L=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),UL=/^aria-[\w-]*$/i,FL=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,VL=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,BL=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return $L.has(n)?Boolean(FL.test(t.nodeValue)||VL.test(t.nodeValue)):!0;const s=e.filter(i=>i instanceof RegExp);for(let i=0,r=s.length;i<r;i++)if(s[i].test(n))return!0;return!1},jL={"*":["class","dir","id","lang","role",UL],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function pg(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=r.length;o<a;o++){const c=r[o],l=c.nodeName.toLowerCase();if(!Object.keys(e).includes(l)){c.remove();continue}const u=[].concat(...c.attributes),h=[].concat(e["*"]||[],e[l]||[]);u.forEach(f=>{BL(f,h)||c.removeAttribute(f.nodeName)})}return i.body.innerHTML}const gg="tooltip",HL="bs.tooltip",zt=`.${HL}`,qL="bs-tooltip",KL=new Set(["sanitize","allowList","sanitizeFn"]),WL={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},zL={AUTO:"auto",TOP:"top",RIGHT:yt()?"left":"right",BOTTOM:"bottom",LEFT:yt()?"right":"left"},GL={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:jL,popperConfig:null},YL={HIDE:`hide${zt}`,HIDDEN:`hidden${zt}`,SHOW:`show${zt}`,SHOWN:`shown${zt}`,INSERTED:`inserted${zt}`,CLICK:`click${zt}`,FOCUSIN:`focusin${zt}`,FOCUSOUT:`focusout${zt}`,MOUSEENTER:`mouseenter${zt}`,MOUSELEAVE:`mouseleave${zt}`},Vo="fade",XL="modal",nr="show",sr="show",dl="out",mg=".tooltip-inner",_g=`.${XL}`,yg="hide.bs.modal",ir="hover",pl="focus",QL="click",JL="manual";class Yi extends Ht{constructor(e,n){if(typeof TE=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e);this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(n),this.tip=null,this._setListeners()}static get Default(){return GL}static get NAME(){return gg}static get Event(){return YL}static get DefaultType(){return WL}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(!!this._isEnabled)if(e){const n=this._initializeOnDelegatedTarget(e);n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(this.getTipElement().classList.contains(nr)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(_g),yg,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this.isWithContent()&&this._isEnabled))return;const e=I.trigger(this._element,this.constructor.Event.SHOW),n=IE(this._element),s=n===null?this._element.ownerDocument.documentElement.contains(this._element):n.contains(this._element);if(e.defaultPrevented||!s)return;this.constructor.NAME==="tooltip"&&this.tip&&this.getTitle()!==this.tip.querySelector(mg).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),r=mD(this.constructor.NAME);i.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&i.classList.add(Vo);const o=typeof this._config.placement=="function"?this._config.placement.call(this,i,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;Cr.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(i),I.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=vf(this._element,i,this._getPopperConfig(a)),i.classList.add(nr);const l=this._resolvePossibleFunction(this._config.customClass);l&&i.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(f=>{I.on(f,"mouseover",$a)});const u=()=>{const f=this._hoverState;this._hoverState=null,I.trigger(this._element,this.constructor.Event.SHOWN),f===dl&&this._leave(null,this)},h=this.tip.classList.contains(Vo);this._queueCallback(u,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),n=()=>{this._isWithActiveTrigger()||(this._hoverState!==sr&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(I.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(nr),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(r=>I.off(r,"mouseover",$a)),this._activeTrigger[QL]=!1,this._activeTrigger[pl]=!1,this._activeTrigger[ir]=!1;const i=this.tip.classList.contains(Vo);this._queueCallback(n,this.tip,i),this._hoverState=""}update(){this._popper!==null&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const n=e.children[0];return this.setContent(n),n.classList.remove(Vo,nr),this.tip=n,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),mg)}_sanitizeAndSetContent(e,n,s){const i=Y.findOne(s,e);if(!n&&i){i.remove();return}this.setElementContent(i,n)}setElementContent(e,n){if(e!==null){if(Ps(n)){n=Gn(n),this._config.html?n.parentNode!==e&&(e.innerHTML="",e.append(n)):e.textContent=n.textContent;return}this._config.html?(this._config.sanitize&&(n=pg(n,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=n):e.textContent=n}}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return e==="right"?"end":e==="left"?"start":e}_initializeOnDelegatedTarget(e,n){return n||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:s=>this._handlePopperPlacementChange(s)}],onFirstUpdate:s=>{s.options.placement!==s.placement&&this._handlePopperPlacementChange(s)}};return re(re({},n),typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig)}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return zL[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(n=>{if(n==="click")I.on(this._element,this.constructor.Event.CLICK,this._config.selector,s=>this.toggle(s));else if(n!==JL){const s=n===ir?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=n===ir?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;I.on(this._element,s,this._config.selector,r=>this._enter(r)),I.on(this._element,i,this._config.selector,r=>this._leave(r))}}),this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(_g),yg,this._hideModalHandler),this._config.selector?this._config=Ao(re({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),n=typeof this._element.getAttribute("data-bs-original-title");(e||n!=="string")&&(this._element.setAttribute("data-bs-original-title",e||""),e&&!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,n){if(n=this._initializeOnDelegatedTarget(e,n),e&&(n._activeTrigger[e.type==="focusin"?pl:ir]=!0),n.getTipElement().classList.contains(nr)||n._hoverState===sr){n._hoverState=sr;return}if(clearTimeout(n._timeout),n._hoverState=sr,!n._config.delay||!n._config.delay.show){n.show();return}n._timeout=setTimeout(()=>{n._hoverState===sr&&n.show()},n._config.delay.show)}_leave(e,n){if(n=this._initializeOnDelegatedTarget(e,n),e&&(n._activeTrigger[e.type==="focusout"?pl:ir]=n._element.contains(e.relatedTarget)),!n._isWithActiveTrigger()){if(clearTimeout(n._timeout),n._hoverState=dl,!n._config.delay||!n._config.delay.hide){n.hide();return}n._timeout=setTimeout(()=>{n._hoverState===dl&&n.hide()},n._config.delay.hide)}}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const n=Ge.getDataAttributes(this._element);return Object.keys(n).forEach(s=>{KL.has(s)&&delete n[s]}),e=re(re(re({},this.constructor.Default),n),typeof e=="object"&&e?e:{}),e.container=e.container===!1?document.body:Gn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),an(gg,e,this.constructor.DefaultType),e.sanitize&&(e.template=pg(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e}_cleanTipClass(){const e=this.getTipElement(),n=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),s=e.getAttribute("class").match(n);s!==null&&s.length>0&&s.map(i=>i.trim()).forEach(i=>e.classList.remove(i))}_getBasicClassPrefix(){return qL}_handlePopperPlacementChange(e){const{state:n}=e;!n||(this.tip=n.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(n.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const n=Yi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}xt(Yi);const ZL="popover",e1="bs.popover",Gt=`.${e1}`,t1="bs-popover",n1=Ao(re({},Yi.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),s1=Ao(re({},Yi.DefaultType),{content:"(string|element|function)"}),i1={HIDE:`hide${Gt}`,HIDDEN:`hidden${Gt}`,SHOW:`show${Gt}`,SHOWN:`shown${Gt}`,INSERTED:`inserted${Gt}`,CLICK:`click${Gt}`,FOCUSIN:`focusin${Gt}`,FOCUSOUT:`focusout${Gt}`,MOUSEENTER:`mouseenter${Gt}`,MOUSELEAVE:`mouseleave${Gt}`},r1=".popover-header",o1=".popover-body";class Tf extends Yi{static get Default(){return n1}static get NAME(){return ZL}static get Event(){return i1}static get DefaultType(){return s1}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),r1),this._sanitizeAndSetContent(e,this._getContent(),o1)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return t1}static jQueryInterface(e){return this.each(function(){const n=Tf.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}xt(Tf);const vg="scrollspy",a1="bs.scrollspy",kc=`.${a1}`,c1=".data-api",Eg={offset:10,method:"auto",target:""},l1={offset:"number",method:"string",target:"(string|element)"},u1=`activate${kc}`,h1=`scroll${kc}`,f1=`load${kc}${c1}`,GE="dropdown-item",Ws="active",d1='[data-bs-spy="scroll"]',p1=".nav, .list-group",vu=".nav-link",g1=".nav-item",YE=".list-group-item",gl=`${vu}, ${YE}, .${GE}`,m1=".dropdown",_1=".dropdown-toggle",y1="offset",wg="position";class Dc extends Ht{constructor(e,n){super(e);this._scrollElement=this._element.tagName==="BODY"?window:this._element,this._config=this._getConfig(n),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,I.on(this._scrollElement,h1,()=>this._process()),this.refresh(),this._process()}static get Default(){return Eg}static get NAME(){return vg}refresh(){const e=this._scrollElement===this._scrollElement.window?y1:wg,n=this._config.method==="auto"?e:this._config.method,s=n===wg?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Y.find(gl,this._config.target).map(r=>{const o=Ef(r),a=o?Y.findOne(o):null;if(a){const c=a.getBoundingClientRect();if(c.width||c.height)return[Ge[n](a).top+s,o]}return null}).filter(r=>r).sort((r,o)=>r[0]-o[0]).forEach(r=>{this._offsets.push(r[0]),this._targets.push(r[1])})}dispose(){I.off(this._scrollElement,kc),super.dispose()}_getConfig(e){return e=re(re(re({},Eg),Ge.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),e.target=Gn(e.target)||document.documentElement,an(vg,e,l1),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,n=this._getScrollHeight(),s=this._config.offset+n-this._getOffsetHeight();if(this._scrollHeight!==n&&this.refresh(),e>=s){const i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i);return}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(let i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(typeof this._offsets[i+1]=="undefined"||e<this._offsets[i+1])&&this._activate(this._targets[i])}_activate(e){this._activeTarget=e,this._clear();const n=gl.split(",").map(i=>`${i}[data-bs-target="${e}"],${i}[href="${e}"]`),s=Y.findOne(n.join(","),this._config.target);s.classList.add(Ws),s.classList.contains(GE)?Y.findOne(_1,s.closest(m1)).classList.add(Ws):Y.parents(s,p1).forEach(i=>{Y.prev(i,`${vu}, ${YE}`).forEach(r=>r.classList.add(Ws)),Y.prev(i,g1).forEach(r=>{Y.children(r,vu).forEach(o=>o.classList.add(Ws))})}),I.trigger(this._scrollElement,u1,{relatedTarget:e})}_clear(){Y.find(gl,this._config.target).filter(e=>e.classList.contains(Ws)).forEach(e=>e.classList.remove(Ws))}static jQueryInterface(e){return this.each(function(){const n=Dc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}I.on(window,f1,()=>{Y.find(d1).forEach(t=>new Dc(t))});xt(Dc);const v1="tab",E1="bs.tab",bo=`.${E1}`,w1=".data-api",T1=`hide${bo}`,b1=`hidden${bo}`,A1=`show${bo}`,I1=`shown${bo}`,S1=`click${bo}${w1}`,C1="dropdown-menu",rr="active",Tg="fade",bg="show",R1=".dropdown",O1=".nav, .list-group",Ag=".active",Ig=":scope > li > .active",N1='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',k1=".dropdown-toggle",D1=":scope > .dropdown-menu .active";class Pc extends Ht{static get NAME(){return v1}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(rr))return;let e;const n=zn(this._element),s=this._element.closest(O1);if(s){const a=s.nodeName==="UL"||s.nodeName==="OL"?Ig:Ag;e=Y.find(a,s),e=e[e.length-1]}const i=e?I.trigger(e,T1,{relatedTarget:this._element}):null;if(I.trigger(this._element,A1,{relatedTarget:e}).defaultPrevented||i!==null&&i.defaultPrevented)return;this._activate(this._element,s);const o=()=>{I.trigger(e,b1,{relatedTarget:this._element}),I.trigger(this._element,I1,{relatedTarget:e})};n?this._activate(n,n.parentNode,o):o()}_activate(e,n,s){const r=(n&&(n.nodeName==="UL"||n.nodeName==="OL")?Y.find(Ig,n):Y.children(n,Ag))[0],o=s&&r&&r.classList.contains(Tg),a=()=>this._transitionComplete(e,r,s);r&&o?(r.classList.remove(bg),this._queueCallback(a,e,!0)):a()}_transitionComplete(e,n,s){if(n){n.classList.remove(rr);const r=Y.findOne(D1,n.parentNode);r&&r.classList.remove(rr),n.getAttribute("role")==="tab"&&n.setAttribute("aria-selected",!1)}e.classList.add(rr),e.getAttribute("role")==="tab"&&e.setAttribute("aria-selected",!0),Gi(e),e.classList.contains(Tg)&&e.classList.add(bg);let i=e.parentNode;if(i&&i.nodeName==="LI"&&(i=i.parentNode),i&&i.classList.contains(C1)){const r=e.closest(R1);r&&Y.find(k1,r).forEach(o=>o.classList.add(rr)),e.setAttribute("aria-expanded",!0)}s&&s()}static jQueryInterface(e){return this.each(function(){const n=Pc.getOrCreateInstance(this);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}I.on(document,S1,N1,function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),ws(this))return;Pc.getOrCreateInstance(this).show()});xt(Pc);const Sg="toast",P1="bs.toast",Zn=`.${P1}`,L1=`mouseover${Zn}`,x1=`mouseout${Zn}`,M1=`focusin${Zn}`,$1=`focusout${Zn}`,U1=`hide${Zn}`,F1=`hidden${Zn}`,V1=`show${Zn}`,B1=`shown${Zn}`,j1="fade",Cg="hide",or="show",Bo="showing",H1={animation:"boolean",autohide:"boolean",delay:"number"},Rg={animation:!0,autohide:!0,delay:5e3};class Lc extends Ht{constructor(e,n){super(e);this._config=this._getConfig(n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return H1}static get Default(){return Rg}static get NAME(){return Sg}show(){if(I.trigger(this._element,V1).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(j1);const n=()=>{this._element.classList.remove(Bo),I.trigger(this._element,B1),this._maybeScheduleHide()};this._element.classList.remove(Cg),Gi(this._element),this._element.classList.add(or),this._element.classList.add(Bo),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(or)||I.trigger(this._element,U1).defaultPrevented)return;const n=()=>{this._element.classList.add(Cg),this._element.classList.remove(Bo),this._element.classList.remove(or),I.trigger(this._element,F1)};this._element.classList.add(Bo),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(or)&&this._element.classList.remove(or),super.dispose()}_getConfig(e){return e=re(re(re({},Rg),Ge.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),an(Sg,e,this.constructor.DefaultType),e}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n;break}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,L1,e=>this._onInteraction(e,!0)),I.on(this._element,x1,e=>this._onInteraction(e,!1)),I.on(this._element,M1,e=>this._onInteraction(e,!0)),I.on(this._element,$1,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Lc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Rc(Lc);xt(Lc);export{Y1 as A,X1 as B,rx as C,dR as D,hx as E,un as F,fx as G,KT as H,vx as I,_x as J,yx as K,mx as L,W1 as M,Z1 as N,J1 as O,px as Q,kA as R,gx as W,G1 as a,Im as b,BT as c,mt as d,qT as e,cx as f,Ex as g,wx as h,ox as i,Li as j,dT as k,Q1 as l,lx as m,ax as n,FT as o,ux as p,dx as q,z1 as r,ix as s,K1 as t,fr as u,sx as v,tT as w,ex as x,tx as y,nx as z};
