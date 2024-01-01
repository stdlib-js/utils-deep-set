// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,s,l,f,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(u(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t,n;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var Z=$;function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=N()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=K(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)};var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function J(r){return null!==r&&"object"==typeof r}function Q(r){return"string"==typeof r}W(J,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(J));var Y=String.prototype.valueOf;var rr=N();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function tr(r){return Q(r)||er(r)}function nr(r){return"boolean"==typeof r}W(tr,"isPrimitive",Q),W(tr,"isObject",er);var ir=Boolean,or=Boolean.prototype.toString;var ar=N();function cr(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function ur(r){return nr(r)||cr(r)}W(ur,"isPrimitive",nr),W(ur,"isObject",cr);var sr=/./;function lr(){return new Function("return this;")()}var fr="object"==typeof self?self:null,pr="object"==typeof window?window:null,gr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yr="object"==typeof gr?gr:null,dr="object"==typeof globalThis?globalThis:null;var br=function(r){if(arguments.length){if(!nr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return lr()}if(dr)return dr;if(fr)return fr;if(pr)return pr;if(yr)return yr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=br.document&&br.document.childNodes,vr=Int8Array;function wr(){return/^\s*function\s*([^(]*)/i}var mr=/^\s*function\s*([^(]*)/i;function jr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=mr.exec(n.toString()))return e[1]}return J(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(wr,"REGEXP",mr);var _r="function"==typeof sr||"object"==typeof vr||"function"==typeof hr?function(r){return jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e};function Er(r){return"function"===_r(r)}var Or,Sr=Object,kr=Object.getPrototypeOf;Or=Er(Object.getPrototypeOf)?kr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var xr=Or;var Tr=Object.prototype;function Vr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),xr(r))}(r),!e||!K(r,"constructor")&&K(e,"constructor")&&Er(e.constructor)&&"[object Function]"===D(e.constructor)&&K(e,"isPrototypeOf")&&Er(e.isPrototypeOf)&&(e===Tr||function(r){var e;for(e in r)if(!K(r,e))return!1;return!0}(r)))}function Ar(r,e){return Vr(e)?K(e,"create")&&(r.create=e.create,!nr(r.create))?new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","create",r.create)):K(e,"sep")&&(r.sep=e.sep,!Q(r.sep))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Pr(r,e,t,n){var i,o,a,c,u;for(o=e.length,i=!1,a=r,u=0;u<o&&(c=e[u],J(a));u++){if(!K(a,c)){if(!t)break;a[c]={}}u===o-1?(Er(n)?a[c]=n(a[c]):a[c]=n,i=!0):a=a[c]}return i}function Fr(r,e,t,n){var i,o,a;if(!J(r))return!1;if(!(i=Q(e))&&!H(e))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(o={create:!1,sep:"."},arguments.length>3&&(a=Ar(o,n)))throw a;return Pr(r,i?e.split(o.sep):e,o.create,t)}function $r(r,e){var t,n,i,o;if(!(t=Q(r))&&!H(r))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(i={create:!1,sep:"."},arguments.length>1&&(o=Ar(i,e)))throw o;return n=t?r.split(i.sep):r,a;function a(r,e){return!!J(r)&&Pr(r,n,i.create,e)}}W(Fr,"factory",$r);export{Fr as default,$r as factory};
//# sourceMappingURL=mod.js.map
