"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var s=o(function(p,u){
var v=require('@stdlib/assert-is-nonnegative-integer-array/dist').primitives,g=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/assert-is-ndarray-like/dist'),l=require('@stdlib/ndarray-base-normalize-index/dist'),d=require('@stdlib/ndarray-base-shape/dist'),f=require('@stdlib/ndarray-base-unflatten/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,n){var i,t;if(!m(r))throw new TypeError(a('2oR4f',r));if(!g(e))throw new TypeError(a('2oR7f',e));if(!v(n))throw new TypeError(a('2oRKH',n));if(i=d(r,!1),t=l(e,i.length-1),t===-1)throw new RangeError(a('2oRF8',i.length,e));return f(r,t,n,!1)}u.exports=h
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
