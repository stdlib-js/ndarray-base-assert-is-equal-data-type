// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type-string@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-struct-data-type@v0.1.0-esm/index.mjs";function r(r,i){if(t(r));else if(s(r))r=String(r);else{if(!e(r))return!1;r=r.layout}if(t(i));else if(s(i))i=String(i);else{if(!e(i))return!1;i=i.layout}return r===i}export{r as default};
//# sourceMappingURL=index.mjs.map
