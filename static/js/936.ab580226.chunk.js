"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{76:function(t,e,n){n.d(e,{Hg:function(){return u},TP:function(){return l},V0:function(){return i},tx:function(){return f},zv:function(){return p}});var r=n(861),a=n(757),c=n.n(a),o=n(44),s=o.ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"ed7e21d2b78dbd5c81e3f302822c687c"}}),u=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("trending/movie/day");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("search/movie",{params:{query:e}});case 3:return 0===(n=t.sent).data.results.length&&alert("\u041d\u0435\u043c\u0430\u0454 \u0444\u0456\u043b\u044c\u043c\u0430 \u0437 \u043d\u0430\u0437\u0432\u043e\u044e ".concat(e,"!")),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("movie/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("movie/".concat(e,"/credits"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("movie/".concat(e,"/reviews"));case 3:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name," : ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},361:function(t,e,n){n.d(e,{v:function(){return g}});var r,a,c,o,s,u=n(731),i=n(689),l=n(168),p=n(444),f=p.ZP.ul(r||(r=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  grid-template-rows: auto;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* border: 2px solid #f99e8e; */\n  gap: 30px;\n"]))),d=p.ZP.img(a||(a=(0,l.Z)(["\n  width: 270px;\n  height: 350px;\n"]))),h=p.ZP.li(c||(c=(0,l.Z)(["\n  width: 270px;\n  margin: 10px;\n\n  text-decoration: none;\n  border: 2px solid #f99e8e;\n  border-radius: 2%;\n"]))),m=p.ZP.h2(o||(o=(0,l.Z)(["\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-style: italic;\n"]))),v=p.ZP.p(s||(s=(0,l.Z)(["\n  margin: 3px;\n  font-style: italic;\n\n  /* text-align: center; */\n  padding-left: 10px;\n  margin-bottom: 10px;\n\n  color: black;\n"]))),x=n(184),g=function(t){var e=t.films,n=(0,i.TH)();return(0,x.jsx)(f,{children:e.map((function(t){return(0,x.jsx)(h,{children:(0,x.jsxs)(u.rU,{to:"/movies/".concat(t.id),state:{from:n},style:{textDecoration:"none"},children:[t.poster_path?(0,x.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):(0,x.jsx)(d,{src:"https://i.gifer.com/C7Gr.gif",alt:"error"}),(0,x.jsx)(m,{children:t.title}),(0,x.jsxs)(v,{children:[" Rating: ",t.vote_average]}),(0,x.jsxs)(v,{children:["Popular: ",t.popularity,"%"]}),(0,x.jsxs)(v,{children:[" Relase year: ",t.release_date]})]})},t.id)}))})}},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r=n(885),a=n(791),c=n(76),o=n(361),s="Home_title__L087v",u=n(184),i=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1];return(0,a.useEffect)((function(){(0,c.Hg)().then((function(t){return i(t.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:s,children:"Trending today"}),(0,u.jsx)(o.v,{films:n})]})}}}]);
//# sourceMappingURL=936.ab580226.chunk.js.map