(this.webpackJsonphookstest=this.webpackJsonphookstest||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(11),n(2)),s=n.n(i),l=n(5),u=n(1),m=(n(13),function(e){var t=e.title,n=e.image,a=e.ingredients;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("h1",null,t),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("img",{src:n,alt:"food"}))}),p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),p=i[0],b=i[1],f=Object(a.useState)("chicken"),h=Object(u.a)(f,2),g=h[0],d=h[1];Object(a.useEffect)((function(){v()}),[g]);var v=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("8f3d0dee","&app_key=").concat("108afd22bc6e610b8f77a32d1973551f"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(p),b("")}},r.a.createElement("input",{type:"text",className:"pa3 ba b--green bg-lightest-blue",value:p,onChange:function(e){var t=e.target.value;b(t),console.log(p)}}),r.a.createElement("button",{type:"submit",className:"pa3 ba b--green bg-lightest-blue"},"Search")),n.map((function(e){return r.a.createElement(m,{key:e.recipe.url,title:e.recipe.label,image:e.recipe.image,ingredients:e.recipe.ingredients})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.cb756143.chunk.js.map