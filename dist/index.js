"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(l){throw (e=0, l)}};};var u=f(function(c,s){
var t=require('@stdlib/ndarray-base-assert-is-data-type-string/dist'),i=require('@stdlib/ndarray-base-assert-is-data-type-object/dist'),a=require('@stdlib/ndarray-base-assert-is-struct-data-type/dist');function n(r,e){if(!t(r))if(i(r))r=String(r);else if(a(r))r=r.layout;else return!1;if(!t(e))if(i(e))e=String(e);else if(a(e))e=e.layout;else return!1;return r===e}s.exports=n
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
