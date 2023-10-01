// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";function m(e,t){return o(t)?p(t,"create")&&(e.create=t.create,!n(e.create))?new TypeError(i("1SV2o,GE","create",e.create)):p(t,"sep")&&(e.sep=t.sep,!r(e.sep))?new TypeError(i("1SV2W,Gh","sep",e.sep)):null:new TypeError(i("1SV2V,FD",t))}function l(e,r,s,i){var n,o,m,l,a;for(o=r.length,n=!1,m=e,a=0;a<o&&(l=r[a],t(m));a++){if(!p(m,l)){if(!s)break;m[l]={}}a===o-1?(d(i)?m[l]=i(m[l]):m[l]=i,n=!0):m=m[l]}return n}function a(e,n,o,p){var d,a,j;if(!t(e))return!1;if(!(d=r(n))&&!s(n))throw new TypeError(i("1SV3A,It",n));if(a={create:!1,sep:"."},arguments.length>3&&(j=m(a,p)))throw j;return l(e,d?n.split(a.sep):n,a.create,o)}function j(e,n){var o,p,d,a;if(!(o=r(e))&&!s(e))throw new TypeError(i("1SV3A,It",e));if(d={create:!1,sep:"."},arguments.length>1&&(a=m(d,n)))throw a;return p=o?e.split(d.sep):e,j;function j(e,r){return!!t(e)&&l(e,p,d.create,r)}}e(a,"factory",j);export{a as default,j as factory};
//# sourceMappingURL=index.mjs.map
