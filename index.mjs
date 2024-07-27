// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";function m(e,r){return o(r)?p(r,"create")&&(e.create=r.create,!n(e.create))?new TypeError(i("1SV2o","create",e.create)):p(r,"sep")&&(e.sep=r.sep,!t(e.sep))?new TypeError(i("1SV2W","sep",e.sep)):null:new TypeError(i("1SV2V",r))}function l(e,t,s,i){var n,o,m,l,a;for(o=t.length,n=!1,m=e,a=0;a<o&&(l=t[a],r(m));a++){if(!p(m,l)){if(!s)break;m[l]={}}a===o-1?(d(i)?m[l]=i(m[l]):m[l]=i,n=!0):m=m[l]}return n}function a(e,n,o,p){var d,a,j;if(!r(e))return!1;if(!(d=t(n))&&!s(n))throw new TypeError(i("1SV3A",n));if(a={create:!1,sep:"."},arguments.length>3&&(j=m(a,p)))throw j;return l(e,d?n.split(a.sep):n,a.create,o)}function j(e,n){var o,p,d,a;if(!(o=t(e))&&!s(e))throw new TypeError(i("1SV3A",e));if(d={create:!1,sep:"."},arguments.length>1&&(a=m(d,n)))throw a;return p=o?e.split(d.sep):e,function(e,t){if(r(e))return l(e,p,d.create,t);return!1}}e(a,"factory",j);export{a as default,j as factory};
//# sourceMappingURL=index.mjs.map
