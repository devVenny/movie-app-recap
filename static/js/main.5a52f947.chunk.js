(this["webpackJsonpmovie-app-recap1"]=this["webpackJsonpmovie-app-recap1"]||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(13),i=a.n(r),c=a(4),o=a.n(c),m=a(14),l=a(15),j=a(16),d=a(19),v=a(18),u=a(17),h=a.n(u),p=a(0);var b=function(e){var t=e.title,a=e.year,s=e.rating,n=e.summary,r=e.poster,i=e.genres;return Object(p.jsxs)("section",{className:"movie-container",children:[Object(p.jsx)("img",{src:r,alt:t,name:t}),Object(p.jsxs)("div",{className:"movie-info",children:[Object(p.jsx)("h2",{className:"movie__title",children:t}),Object(p.jsx)("h4",{className:"movie__year",children:a}),Object(p.jsxs)("h4",{className:"movie__rating",children:[s," / 10"]}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genre",children:e},t)}))}),Object(p.jsx)("span",{className:"movie__summary",children:n})]})]})},g=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(p.jsx)("main",{className:"main",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("h1",{className:"loader__text",children:"Loading.."})}):Object(p.jsx)("div",{className:"movies",children:a.map((function(e){return Object(p.jsx)(b,{title:e.title,year:e.year,rating:e.rating,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(n.a.Component);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5a52f947.chunk.js.map