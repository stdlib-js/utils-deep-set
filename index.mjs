// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.1.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";function m(e,t){return o(t)?a(t,"create")&&(e.create=t.create,!n(e.create))?new TypeError(i("invalid option. `%s` option must be a boolean. Option: `%s`.","create",e.create)):a(t,"sep")&&(e.sep=t.sep,!s(e.sep))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",t))}function d(e,s,r,i){var n,o,m,d,l;for(o=s.length,n=!1,m=e,l=0;l<o&&(d=s[l],t(m));l++){if(!a(m,d)){if(!r)break;m[d]={}}l===o-1?(p(i)?m[d]=i(m[d]):m[d]=i,n=!0):m=m[d]}return n}function l(e,n,o,a){var p,l,j;if(!t(e))return!1;if(!(p=s(n))&&!r(n))throw new TypeError(i("invalid argument. Key path must be a string or a key array. Value: `%s`.",n));if(l={create:!1,sep:"."},arguments.length>3&&(j=m(l,a)))throw j;return d(e,p?n.split(l.sep):n,l.create,o)}function j(e,n){var o,a,p,l;if(!(o=s(e))&&!r(e))throw new TypeError(i("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(p={create:!1,sep:"."},arguments.length>1&&(l=m(p,n)))throw l;return a=o?e.split(p.sep):e,j;function j(e,s){return!!t(e)&&d(e,a,p.create,s)}}e(l,"factory",j);export{l as default,j as factory};
//# sourceMappingURL=index.mjs.map