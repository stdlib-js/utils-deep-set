// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,s,l,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(u(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function F(e){var r,t;if(!P(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var Z=$;function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=N()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=K(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},H=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function J(e){return null!==e&&"object"==typeof e}function Q(e){return"string"==typeof e}W(J,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!H(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(J));var Y=String.prototype.valueOf,ee=N();function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function te(e){return Q(e)||re(e)}function ne(e){return"boolean"==typeof e}W(te,"isPrimitive",Q),W(te,"isObject",re);var ie=Boolean,oe=Boolean.prototype.toString,ae=N();function ce(e){return"object"==typeof e&&(e instanceof ie||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function ue(e){return ne(e)||ce(e)}W(ue,"isPrimitive",ne),W(ue,"isObject",ce);var se=/./;function le(){return new Function("return this;")()}var fe="object"==typeof self?self:null,pe="object"==typeof window?window:null,ge="object"==typeof globalThis?globalThis:null,de=function(e){if(arguments.length){if(!ne(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return le()}if(ge)return ge;if(fe)return fe;if(pe)return pe;throw new Error("unexpected error. Unable to resolve global object.")}(),ye=de.document&&de.document.childNodes,be=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var ve=/^\s*function\s*([^(]*)/i;function we(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ve.exec(n.toString()))return r[1]}return J(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(he,"REGEXP",ve);var me="function"==typeof se||"object"==typeof be||"function"==typeof ye?function(e){return we(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?we(e).toLowerCase():r};function je(e){return"function"===me(e)}var _e,Ee=Object,Oe=Object.getPrototypeOf;_e=je(Object.getPrototypeOf)?Oe:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===D(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Se=_e,ke=Object.prototype;function xe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!H(e)}(e)&&(r=function(e){return null==e?null:(e=Ee(e),Se(e))}(e),!r||!K(e,"constructor")&&K(r,"constructor")&&je(r.constructor)&&"[object Function]"===D(r.constructor)&&K(r,"isPrototypeOf")&&je(r.isPrototypeOf)&&(r===ke||function(e){var r;for(r in e)if(!K(e,r))return!1;return!0}(e)))}function Te(e,r){return xe(r)?K(r,"create")&&(e.create=r.create,!ne(e.create))?new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","create",e.create)):K(r,"sep")&&(e.sep=r.sep,!Q(e.sep))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Ve(e,r,t,n){var i,o,a,c,u;for(o=r.length,i=!1,a=e,u=0;u<o&&(c=r[u],J(a));u++){if(!K(a,c)){if(!t)break;a[c]={}}u===o-1?(je(n)?a[c]=n(a[c]):a[c]=n,i=!0):a=a[c]}return i}function Ae(e,r,t,n){var i,o,a;if(!J(e))return!1;if(!(i=Q(r))&&!H(r))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(o={create:!1,sep:"."},arguments.length>3&&(a=Te(o,n)))throw a;return Ve(e,i?r.split(o.sep):r,o.create,t)}return W(Ae,"factory",(function(e,r){var t,n,i,o;if(!(t=Q(e))&&!H(e))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(i={create:!1,sep:"."},arguments.length>1&&(o=Te(i,r)))throw o;return n=t?e.split(i.sep):e,a;function a(e,r){return!!J(e)&&Ve(e,n,i.create,r)}})),Ae},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).deepSet=r();
//# sourceMappingURL=browser.js.map
