(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),i=t(5),s=t(1),l=t(15),u=t(16),h=(t(27),t(3)),d=t(4),f=t(7),b=t(6),g=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},p=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},E=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},m=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(o.a.Component),O=(t(28),function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}}),w=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(E,{searchChange:t}),o.a.createElement(m,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(v,null,o.a.createElement(p,{robots:c}))))}}]),t}(r.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(O())}}}))(w),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29);var j=t(11),C={searchField:""},_={isPending:!1,robots:[]},k=Object(l.createLogger)(),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)(Object(j.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}}}),T=Object(s.d)(N,Object(s.a)(u.a,k));c.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");y?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.4f4b83b4.chunk.js.map