"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=l(function(y,s){
var t=require('@stdlib/ndarray-base-assert-is-data-type-string/dist'),i=require('@stdlib/ndarray-base-assert-is-data-type-object/dist'),a=require('@stdlib/ndarray-base-assert-is-struct-data-type/dist');function f(r,e){if(!t(r))if(i(r))r=String(r);else if(a(r))r=r.layout;else return!1;if(!t(e))if(i(e))e=String(e);else if(a(e))e=e.layout;else return!1;return r===e}s.exports=f
});var n=u();module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
