"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{76:function(e,t,n){n.d(t,{Hg:function(){return u},TP:function(){return l},V0:function(){return i},tx:function(){return f},zv:function(){return p}});var r=n(861),a=n(757),c=n.n(a),o=n(44),s=o.ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"ed7e21d2b78dbd5c81e3f302822c687c"}}),u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name," : ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("search/movie",{params:{query:t}});case 3:return 0===(n=e.sent).data.results.length&&alert("\u041d\u0435\u043c\u0430\u0454 \u0444\u0456\u043b\u044c\u043c\u0430 \u0437 \u043d\u0430\u0437\u0432\u043e\u044e ".concat(t,"!")),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name," : ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("movie/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name," : ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("movie/".concat(t,"/credits"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name," : ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("movie/".concat(t,"/reviews"));case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name," : ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},361:function(e,t,n){n.d(t,{v:function(){return g}});var r,a,c,o,s,u=n(731),i=n(689),l=n(168),p=n(444),f=p.ZP.ul(r||(r=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  grid-template-rows: auto;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* border: 2px solid #f99e8e; */\n  gap: 30px;\n"]))),d=p.ZP.img(a||(a=(0,l.Z)(["\n  width: 270px;\n  height: 350px;\n"]))),m=p.ZP.li(c||(c=(0,l.Z)(["\n  width: 270px;\n  margin: 10px;\n\n  text-decoration: none;\n  border: 2px solid #f99e8e;\n  border-radius: 2%;\n"]))),v=p.ZP.h2(o||(o=(0,l.Z)(["\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-style: italic;\n"]))),h=p.ZP.p(s||(s=(0,l.Z)(["\n  margin: 3px;\n  font-style: italic;\n\n  /* text-align: center; */\n  padding-left: 10px;\n  margin-bottom: 10px;\n\n  color: black;\n"]))),x=n(184),g=function(e){var t=e.films,n=(0,i.TH)();return(0,x.jsx)(f,{children:t.map((function(e){return(0,x.jsx)(m,{children:(0,x.jsxs)(u.rU,{to:"/movies/".concat(e.id),state:{from:n},style:{textDecoration:"none"},children:[e.poster_path?(0,x.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}):(0,x.jsx)(d,{src:"https://i.gifer.com/C7Gr.gif",alt:"error"}),(0,x.jsx)(v,{children:e.title}),(0,x.jsxs)(h,{children:[" Rating: ",e.vote_average]}),(0,x.jsxs)(h,{children:["Popular: ",e.popularity,"%"]}),(0,x.jsxs)(h,{children:[" Relase year: ",e.release_date]})]})},e.id)}))})}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(885),a=n(791),c=n(731),o=n(76),s=n(361),u="Movies_form__4ow+Z",i="Movies_input__KrUqs",l="Movies_button__GcIka",p=n(184),f=function(){var e,t=(0,a.useState)([]),n=(0,r.Z)(t,2),f=n[0],d=n[1],m=(0,a.useState)(""),v=(0,r.Z)(m,2),h=v[0],x=v[1],g=(0,c.lr)(),w=(0,r.Z)(g,2),b=w[0],Z=w[1],y=null!==(e=b.get("query"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){y&&(0,o.V0)(y).then((function(e){return d(e.results)}))}),[y]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),h?(Z({query:h}),(0,o.V0)(h).then((function(e){return d(e.results)})),x("")):alert("Please enter movie")},children:[(0,p.jsx)("input",{className:i,type:"text",onChange:function(e){x(e.target.value)},name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movie...",value:h}),(0,p.jsx)("button",{className:l,children:"Find"})]}),f.length>0?(0,p.jsx)(s.v,{films:f}):null]})}}}]);
//# sourceMappingURL=881.9c00fd0f.chunk.js.map