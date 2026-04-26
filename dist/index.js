"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(p,u){
var v=require('@stdlib/assert-is-nonnegative-integer-array/dist').primitives,g=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/assert-is-ndarray-like/dist'),l=require('@stdlib/ndarray-base-normalize-index/dist'),d=require('@stdlib/ndarray-base-shape/dist'),f=require('@stdlib/ndarray-base-unflatten/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,a){var i,t;if(!m(r))throw new TypeError(n('null4f',r));if(!g(e))throw new TypeError(n('null7f',e));if(!v(a))throw new TypeError(n("invalid argument. Third argument must be an array of nonnegative integers. Value: `%s`.",a));if(i=d(r,!1),t=l(e,i.length-1),t===-1)throw new RangeError(n('nullF8',i.length,e));return f(r,t,a,!1)}u.exports=h
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
