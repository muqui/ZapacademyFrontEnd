(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(31),r=a.n(l),c=(a(39),a(4)),i=a(5),s=a(7),u=a(6),h=a(8),m=a(10),d=a(13),b=a(16),g=a(12),p=a(21),v=function(e){function t(e){var a;Object(c.a)(this,t);return(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",loggedIn:!1},a.onChange=a.onChange.bind(Object(g.a)(a)),a.handleOnAddUser=a.handleOnAddUser.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleOnAddUser",value:function(e){var t=this,a=this.state,n=a.email,o=a.password;e.preventDefault(),p.post("https://zapacademy.herokuapp.com/login",{headers:{"Access-Control-Allow-Origin":"*"},password:o,email:n}).then((function(e){var a=e.data.token;if("undefined"!==typeof a){var n=e.data.user.id;localStorage.setItem("token",a),localStorage.setItem("id",n),console.log("ID = "+n),t.setState({loggedIn:!0})}}))}},{key:"render",value:function(){return this.state.loggedIn?o.a.createElement(d.a,{to:"/admin"}):o.a.createElement("form",{onSubmit:this.handleOnAddUser},o.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.onChange}),o.a.createElement("input",{type:"text",placeholder:"password",name:"password",value:this.state.password,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Entrar"}))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",null,o.a.createElement(m.b,{to:"/event",className:"nav-link"},"Crear evento")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/logout",className:"nav-link"},"Salir"))))}}]),t}(n.Component),O=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={loggedIn:n},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("token"+localStorage.getItem("token")),!1===this.state.loggedIn?o.a.createElement(d.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("h2",null,"This is a Admin Page. Only Auth people   can see this."),o.a.createElement(m.b,{to:"/logout"},"Logout"))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),localStorage.removeItem("token"),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"You have been logged out "))}}]),t}(n.Component),j=a(21),k=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),j.defaults.headers.common={Authorization:"bearer ".concat(localStorage.getItem("token"))};var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={disabled:!1,nombre:"",fecha_inicio:"",fecha_fin:"",loggedIn:n},a.onChange=a.onChange.bind(Object(g.a)(a)),a.handleOnAddUser=a.handleOnAddUser.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleOnAddUser",value:function(e){e.preventDefault(),this.refs.btn.setAttribute("disabled","disabled");var t=this;this.value=!0;var a=this.state,n=a.nombre,o=a.fecha_inicio,l=a.fecha_fin,r=localStorage.getItem("id");console.log("ID  "+r),console.log("token"+localStorage.getItem("token")),j.post("https://zapacademy.herokuapp.com/evento",{headers:{"Access-Control-Allow-Origin":"*",Authorization:"bearer ".concat(localStorage.getItem("token"))},nombre:n,fecha_inicio:o,fecha_fin:l,id:r}).then((function(e){t.setState({disabled:!1}),console.log(e),t.refs.btn.removeAttribute("disabled")}))}},{key:"render",value:function(){return console.log("token en event ==="+localStorage.getItem("token")),!1===this.state.loggedIn?o.a.createElement(d.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement("h1",null,"Crear evento"),o.a.createElement("form",{onSubmit:this.handleOnAddUser},o.a.createElement("input",{type:"text",placeholder:"Nombre",name:"nombre",value:this.state.nombre,onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"date",placeholder:"Fecha inicio",name:"fecha_inicio",value:this.state.fecha_inicio,onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"date",placeholder:"Fecha Fin",name:"fecha_fin",value:this.state.fecha_fin,onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",ref:"btn",value:"Crear Evento"})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",component:v}),o.a.createElement(d.b,{path:"/event",component:k}),o.a.createElement(d.b,{path:"/admin",component:O}),o.a.createElement(d.b,{path:"/logout",component:E})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6240a9a0.chunk.js.map