(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{32:function(t,e,r){"use strict";r.d(e,"e",(function(){return a})),r.d(e,"d",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return h}));var n=r(37),o=r.n(n),c="f8b94e020f7b56d4f675ed0dd6bb581c";o.a.defaults.baseURL="https://api.themoviedb.org";var a=function(){return o.a.get("/3/trending/all/day?api_key=".concat(c)).then((function(t){return t.data.results}))},i=function(t){return o.a.get("/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.data.results}))},s=function(t){return o.a.get("/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(t){return t.data}))},u=function(t){return o.a.get("/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},h=function(t){return o.a.get("/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(t){return t.data.results}))}},33:function(t,e,r){t.exports=r(36)},34:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,s,"next",t)}function s(t){n(a,o,c,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(G){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,c=Object.create(o.prototype),a=new S(n||[]);return c._invoke=function(t,e,r){var n=f;return function(o,c){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw c;return N()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=_(a,r);if(i){if(i===v)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?d:l,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",v={};function j(){}function b(){}function m(){}var g={};g[c]=function(){return this};var y=Object.getPrototypeOf,O=y&&y(y(F([])));O&&O!==r&&n.call(O,c)&&(g=O);var x=m.prototype=j.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,c,a,i){var s=h(t[o],t,c);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,i)}))}i(s.arg)}var o;this._invoke=function(t,n){function c(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(c,c):c()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var c=o.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function F(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return b.prototype=x.constructor=m,m.constructor=b,b.displayName=s(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new L(u(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,i,"Generator"),x[c]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},69:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r.n(n),c=r(34),a=r(35),i=r(8),s=r(0),u=r(2),h=r(10),f=r(32),l=r(1);function p(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),r=e[0],n=e[1],i=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.a)(i);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[i]),Object(l.jsx)(l.Fragment,{children:r.length&&Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsxs)("li",{children:[t.profile_path&&Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),width:"200",alt:t.name}),Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})||Object(l.jsx)("p",{children:"Not found."})})}function d(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),r=e[0],n=e[1],i=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.c)(i);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[i]),Object(l.jsx)(l.Fragment,{children:r.length&&Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("h3",{children:["Author: ",t.author]}),Object(l.jsx)("p",{children:t.content})]},t.id)}))})||Object(l.jsx)("p",{children:"No reviews for this movie."})})}e.default=function(t){var e=Object(s.useState)({}),r=Object(a.a)(e,2),n=r[0],v=r[1],j=Object(s.useState)(""),b=Object(a.a)(j,2),m=b[0],g=b[1],y=Object(s.useState)(""),O=Object(a.a)(y,2),x=O[0],w=O[1],L=Object(s.useState)(""),_=Object(a.a)(L,2),E=_[0],k=_[1],S=Object(u.f)(),F=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(F);case 3:e=t.sent,v(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&k(t.t0.response.data.status_message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[F]),Object(s.useEffect)((function(){g(S.state&&S.state.from?S.state.from:"/"),w(S.state&&S.state.search?S.state.search:"")}),[S.state]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return t.history.push({pathname:m,search:x})},children:"Back"}),n.id&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[n.poster_path&&Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),width:"300",alt:n.title||n.name}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n.title||n.name}),Object(l.jsxs)("p",{children:["User score: ",10*n.vote_average,"%"]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:n.overview||"This movie has no overview yet."}),Object(l.jsx)("h3",{children:"Genres"}),Object(l.jsx)("ul",{children:n.genres.map((function(t){return Object(l.jsx)("li",{children:t.name},t.id)}))})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Additional information:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:{pathname:"".concat(i.a.movies,"/").concat(n.id,"/cast"),state:{search:x,from:m}},children:Object(l.jsx)("span",{children:"Cast"})})})," ",Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:{pathname:"".concat(i.a.movies,"/").concat(n.id,"/reviews"),state:{search:x,from:m}},children:Object(l.jsx)("span",{children:"Reviews"})})})]})]}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"".concat(i.a.movieDetails,"/cast"),component:p}),Object(l.jsx)(u.a,{path:"".concat(i.a.movieDetails,"/reviews"),component:d})]})]})||E&&Object(l.jsx)("p",{children:E})]})}}}]);
//# sourceMappingURL=movie-details-page.a19f2b1f.chunk.js.map