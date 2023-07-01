// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).deepSet=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var d=s()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[j],r=v(t,j);try{t[j]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[j]=e:delete t[j],n}:function(t){return y.call(t)};var g=Array.isArray?Array.isArray:function(t){return"[object Array]"===d(t)};function _(t){return null!==t&&"object"==typeof t}function w(t){return"string"==typeof t}l(_,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!g(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(_));var h=String.prototype.valueOf;var m=s();function O(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function S(t){return w(t)||O(t)}function E(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function T(t){return"boolean"==typeof t}l(S,"isPrimitive",w),l(S,"isObject",O);var P=Boolean.prototype.toString;var A=s();function B(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===d(t)))}function x(t){return T(t)||B(t)}l(x,"isPrimitive",T),l(x,"isObject",B);var k=/./;function C(){return new Function("return this;")()}var F="object"==typeof self?self:null,M="object"==typeof window?window:null,V="object"==typeof global?global:null;var G=function(t){if(arguments.length){if(!T(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return C()}if(F)return F;if(M)return M;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),L=G.document&&G.document.childNodes,I=Int8Array;function R(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;function N(t){var r,e,n,o;if(("Object"===(e=d(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return _(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(R,"REGEXP",U);var X="function"==typeof k||"object"==typeof I||"function"==typeof L?function(t){return N(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?N(t).toLowerCase():r};function q(t){return"function"===X(t)}var z,D=Object.getPrototypeOf;z=q(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===d(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H=z;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!g(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),H(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&q(r.constructor)&&"[object Function]"===d(r.constructor)&&v(r,"isPrototypeOf")&&q(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?v(r,"create")&&(t.create=r.create,!T(t.create))?new TypeError(E("0j630","create",t.create)):v(r,"sep")&&(t.sep=r.sep,!w(t.sep))?new TypeError(E("0j62i","sep",t.sep)):null:new TypeError(E("0j62h",r))}function W(t,r,e,n){var o,u,i,c,f;for(u=r.length,o=!1,i=t,f=0;f<u&&(c=r[f],_(i));f++){if(!v(i,c)){if(!e)break;i[c]={}}f===u-1?(q(n)?i[c]=n(i[c]):i[c]=n,o=!0):i=i[c]}return o}function Y(t,r,e,n){var o,u,i;if(!_(t))return!1;if(!(o=w(r))&&!g(r))throw new TypeError(E("0j63M",r));if(u={create:!1,sep:"."},arguments.length>3&&(i=Q(u,n)))throw i;return W(t,o?r.split(u.sep):r,u.create,e)}return l(Y,"factory",(function(t,r){var e,n,o,u;if(!(e=w(t))&&!g(t))throw new TypeError(E("0j63M",t));if(o={create:!1,sep:"."},arguments.length>1&&(u=Q(o,r)))throw u;return n=e?t.split(o.sep):t,i;function i(t,r){return!!_(t)&&W(t,n,o.create,r)}})),Y}));
//# sourceMappingURL=index.js.map
