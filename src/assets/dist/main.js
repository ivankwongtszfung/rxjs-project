!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=0)}([function(r,t,n){r.exports=n(1)},function(r,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])})(r,t)};function o(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(r){return"function"==typeof r}var u=!1,s={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;u=r},get useDeprecatedSynchronousErrorHandling(){return u}};function c(r){setTimeout(function(){throw r},0)}var a={closed:!0,next:function(r){},error:function(r){if(s.useDeprecatedSynchronousErrorHandling)throw r;c(r)},complete:function(){}},f=Array.isArray||function(r){return r&&"number"==typeof r.length};function h(r){return null!==r&&"object"==typeof r}function p(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map(function(r,t){return t+1+") "+r.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}p.prototype=Object.create(Error.prototype);var l=p,d=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._unsubscribe=r)}var t;return r.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this._parentOrParents,e=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof r)n.remove(this);else if(null!==n)for(var u=0;u<n.length;++u){n[u].remove(this)}if(i(e))try{e.call(this)}catch(r){t=r instanceof l?b(r.errors):[r]}if(f(o)){u=-1;for(var s=o.length;++u<s;){var c=o[u];if(h(c))try{c.unsubscribe()}catch(r){t=t||[],r instanceof l?t=t.concat(b(r.errors)):t.push(r)}}}if(t)throw new l(t)}},r.prototype.add=function(t){var n=t;if(!t)return r.EMPTY;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof r){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.EMPTY=((t=new r).closed=!0,t),r}();function b(r){return r.reduce(function(r,t){return r.concat(t instanceof l?t.errors:t)},[])}var y="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),v=function(r){function t(n,e,o){var i=r.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=a;break;case 1:if(!n){i.destination=a;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new _(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new _(i,n,e,o)}return i}return o(t,r),t.prototype[y]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(d),_=function(r){function t(t,n,e,o){var u,s=r.call(this)||this;s._parentSubscriber=t;var c=s;return i(n)?u=n:n&&(u=n.next,e=n.error,o=n.complete,n!==a&&(i((c=Object.create(n)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=u,s._error=e,s._complete=o,s}return o(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;s.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=s.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):c(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;c(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};s.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),s.useDeprecatedSynchronousErrorHandling)throw r;c(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!s.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return s.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):(c(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(v);var w="function"==typeof Symbol&&Symbol.observable||"@@observable";function m(){}function E(r){return r?1===r.length?r[0]:function(t){return r.reduce(function(r,t){return t(r)},t)}:m}var S=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,o=function(r,t,n){if(r){if(r instanceof v)return r;if(r[y])return r[y]()}return r||t||n?new v(r,t,n):new v(a)}(r,t,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||s.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),s.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){s.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),!function(r){for(;r;){var t=r,n=t.closed,e=t.destination,o=t.isStopped;if(n||o)return!1;r=e&&e instanceof v?e:null}return!0}(r)?console.warn(t):r.error(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=x(t))(function(t,e){var o;o=n.subscribe(function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}},e,t)})},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[w]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:E(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=x(r))(function(r,n){var e;t.subscribe(function(r){return e=r},function(r){return n(r)},function(){return r(e)})})},r.create=function(t){return new r(t)},r}();function x(r){if(r||(r=s.Promise||Promise),!r)throw new Error("no Promise impl found");return r}function g(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var O=g(),T=function(r){return r&&"number"==typeof r.length&&"function"!=typeof r};function P(r){return!!r&&"function"!=typeof r.subscribe&&"function"==typeof r.then}var j=function(r){if(r&&"function"==typeof r[w])return o=r,function(r){var t=o[w]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(r)};if(T(r))return e=r,function(r){for(var t=0,n=e.length;t<n&&!r.closed;t++)r.next(e[t]);r.complete()};if(P(r))return n=r,function(r){return n.then(function(t){r.closed||(r.next(t),r.complete())},function(t){return r.error(t)}).then(null,c),r};if(r&&"function"==typeof r[O])return t=r,function(r){for(var n=t[O]();;){var e=n.next();if(e.done){r.complete();break}if(r.next(e.value),r.closed)break}return"function"==typeof n.return&&r.add(function(){n.return&&n.return()}),r};var t,n,e,o,i=h(r)?"an invalid object":"'"+r+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function H(r,t){if(null!=r){if(function(r){return r&&"function"==typeof r[w]}(r))return function(r,t){return new S(function(n){var e=new d;return e.add(t.schedule(function(){var o=r[w]();e.add(o.subscribe({next:function(r){e.add(t.schedule(function(){return n.next(r)}))},error:function(r){e.add(t.schedule(function(){return n.error(r)}))},complete:function(){e.add(t.schedule(function(){return n.complete()}))}}))})),e})}(r,t);if(P(r))return function(r,t){return new S(function(n){var e=new d;return e.add(t.schedule(function(){return r.then(function(r){e.add(t.schedule(function(){n.next(r),e.add(t.schedule(function(){return n.complete()}))}))},function(r){e.add(t.schedule(function(){return n.error(r)}))})})),e})}(r,t);if(T(r))return function(r,t){return new S(function(n){var e=new d,o=0;return e.add(t.schedule(function(){o!==r.length?(n.next(r[o++]),n.closed||e.add(this.schedule())):n.complete()})),e})}(r,t);if(function(r){return r&&"function"==typeof r[O]}(r)||"string"==typeof r)return function(r,t){if(!r)throw new Error("Iterable cannot be null");return new S(function(n){var e,o=new d;return o.add(function(){e&&"function"==typeof e.return&&e.return()}),o.add(t.schedule(function(){e=r[O](),o.add(t.schedule(function(){if(!n.closed){var r,t;try{var o=e.next();r=o.value,t=o.done}catch(r){return void n.error(r)}t?n.complete():(n.next(r),this.schedule())}}))})),o})}(r,t)}throw new TypeError((null!==r&&typeof r||r)+" is not observable")}function D(r,t){return function(n){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new A(r,t))}}var A=function(){function r(r,t){this.project=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new L(r,this.project,this.thisArg))},r}(),L=function(r){function t(t,n,e){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return o(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(v);Object.prototype.toString;function M(r,t,n,e){return i(n)&&(e=n,n=void 0),e?M(r,t,n).pipe(D(function(r){return f(r)?e.apply(void 0,r):e(r)})):new S(function(e){!function r(t,n,e,o,i){var u;if(function(r){return r&&"function"==typeof r.addEventListener&&"function"==typeof r.removeEventListener}(t)){var s=t;t.addEventListener(n,e,i),u=function(){return s.removeEventListener(n,e,i)}}else if(function(r){return r&&"function"==typeof r.on&&"function"==typeof r.off}(t)){var c=t;t.on(n,e),u=function(){return c.off(n,e)}}else if(function(r){return r&&"function"==typeof r.addListener&&"function"==typeof r.removeListener}(t)){var a=t;t.addListener(n,e),u=function(){return a.removeListener(n,e)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var f=0,h=t.length;f<h;f++)r(t[f],n,e,o,i)}o.add(u)}(r,t,function(r){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(r)},e,n)})}var k=function(){function r(r,t,n){void 0===n&&(n=!1),this.accumulator=r,this.seed=t,this.hasSeed=n}return r.prototype.call=function(r,t){return t.subscribe(new U(r,this.accumulator,this.seed,this.hasSeed))},r}(),U=function(r){function t(t,n,e,o){var i=r.call(this,t)||this;return i.accumulator=n,i._seed=e,i.hasSeed=o,i.index=0,i}return o(t,r),Object.defineProperty(t.prototype,"seed",{get:function(){return this._seed},set:function(r){this.hasSeed=!0,this._seed=r},enumerable:!0,configurable:!0}),t.prototype._next=function(r){if(this.hasSeed)return this._tryNext(r);this.seed=r,this.destination.next(r)},t.prototype._tryNext=function(r){var t,n=this.index++;try{t=this.accumulator(this.seed,r,n)}catch(r){this.destination.error(r)}this.seed=t,this.destination.next(t)},t}(v);window.addEventListener("DOMContentLoaded",function(r){var t,n,e=127828,o=e,i=0;function u(r){var t=document.createElement("H1");t.innerHTML="&#".concat(o,";:").concat(r),document.body.appendChild(t),o=e+ ++i%50}S.create(function(r){r.next("A"),r.next("B"),r.next("C"),r.complete()}).subscribe(u),(t=[1,2,3,4,5,6,7,8,9],n?H(t,n):t instanceof S?t:new S(j(t))).pipe(D(function(r){return r*r}),function(r,t){var n=!1;return arguments.length>=2&&(n=!0),function(e){return e.lift(new k(r,t,n))}}(function(r,t){return r+t})).subscribe(u),M(window,"scroll").pipe().subscribe(u)})}]);