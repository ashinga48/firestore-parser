module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r.FireStoreParser=function e(r){var t=void 0===r?"undefined":o(r);if(null===r||"number"===t||"string"===t)return r;var u=function(e){var r=["arrayValue","booleanValue","geoPointValue","integerValue","mapValue","nullValue","referenceValue","stringValue","timestampValue"];return Object.keys(e).find(function(e){return-1!==r.indexOf(e)})}(r);if(u){if("integerValue"===u)return Number(r[u]);if("arrayValue"===u)return r[u].values.map(function(r){return e(r)});if("mapValue"!==u)return"geoPointValue"===u?n({latitude:0,longitude:0},r[u]):r[u];r=r[u].fields}var a={};return Object.keys(r).forEach(function(t){a[t]=e(r[t])}),a};r.default=u}]);