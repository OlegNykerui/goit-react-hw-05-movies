"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return l},V0:function(){return p},tx:function(){return m},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(44),o="https://api.themoviedb.org/3/",u={params:{api_key:"ed7e21d2b78dbd5c81e3f302822c687c"}},i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(o,"trending/movie/day"),u);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(o,"search/movie"),{params:{query:e,api_key:u.params.api_key}});case 3:return 0===(n=t.sent).data.results.length&&alert("\u041d\u0435\u043c\u0430\u0454 \u0444\u0456\u043b\u044c\u043c\u0430 \u0437 \u043d\u0430\u0437\u0432\u043e\u044e ".concat(e,"!")),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(o,"movie/").concat(e),u);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(o,"movie/").concat(e,"/credits"),u);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("".concat(o,"movie/").concat(e,"/reviews"),u);case 3:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},328:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(885),a=n(791),c=n(689),s=n(76),o="Cast_img__-isbW",u="Cast_list__GlWio",i="Cast_item__a0CDL",p=n(184),l=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)(null),n=(0,r.Z)(e,2),l=n[0],f=n[1];return(0,a.useEffect)((function(){(0,s.zv)(t).then((function(t){f(t.cast)}))}),[t]),(0,p.jsx)("ul",{className:u,children:l?l.map((function(t){return(0,p.jsxs)("li",{className:i,children:[t.profile_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,className:o}):(0,p.jsx)("img",{src:"https://i.gifer.com/C7Gr.gif",alt:t.name}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:t.name}),(0,p.jsxs)("p",{children:["Character: ",t.character]}),(0,p.jsxs)("p",{children:["Popular: ",t.popularity,"%"]})]})]},t.name)})):null})}}}]);
//# sourceMappingURL=76.8347b4cf.chunk.js.map