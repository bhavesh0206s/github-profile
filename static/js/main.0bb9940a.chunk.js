(this["webpackJsonpgithub-profile"]=this["webpackJsonpgithub-profile"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(9),s=a(1),i=a(2),u=a(4),m=a(3),d=a(5),h=(a(15),function(e){var t=e.search,a=e.submit;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,r.a.createElement("input",{id:"search-field",type:"text",placeholder:"Enter GitHub Username",onChange:t})),r.a.createElement("input",{id:"submit-btn",type:"submit",value:"Submit"})))}),p=(a(16),function(e){var t=e.repo_name,a=e.user,n=e.fork_count,o=e.star_count,l=e.description,c=e.darkOrwhite;return 0===t.length?null:r.a.createElement("div",{id:"repo"},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("div",{className:c||"white-repo-details"},r.a.createElement("h2",null,r.a.createElement("a",{id:"anchor-tag",href:"https://github.com/".concat(a,"/").concat(e)},e)),r.a.createElement("div",{className:"fork-star"},r.a.createElement("p",null,"Forks: ",n[t]),r.a.createElement("p",{id:"star"},"Stars: ",o[t])),r.a.createElement("p",{id:"description"},r.a.createElement("em",null,l[t]))))})))}),f=a(6),E=(a(17),function(e){var t=e.username,a=e.followers,o=e.repo_count,l=e.user_dp,c=e.following,s=e.darkOrwhite,i=Object(n.useState)(""),u=Object(f.a)(i,2),m=(u[0],u[1],Object(n.useState)(!1)),d=Object(f.a)(m,2);d[0],d[1];return r.a.createElement("div",null,t&&r.a.createElement("div",{className:s||"white-repo-details"},r.a.createElement("div",{className:"user-photo"},r.a.createElement("img",{src:l,alt:t}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"other-details"},r.a.createElement("ul",null,a?r.a.createElement("li",null,"Followers: ",r.a.createElement("span",{className:"data"},a)):null,c?r.a.createElement("li",null,"Following: ",r.a.createElement("span",{className:"data"},c)):null,o?r.a.createElement("li",null,"Repositories: ",r.a.createElement("span",{className:"data"},o)):null))))}),g=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component)),b={body:{color:"#EAF0F1",backgroundImage:"none",backgroundColor:"#1b262c",textShadow:"none"}},k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getUserDetails=function(t){var a="https://api.github.com/users/".concat(t);t&&fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({username:t.name,followers:t.followers,repo_count:t.public_repos,user_dp:t.avatar_url,following:t.following})})).catch((function(e){return alert("Not Found")}))},e.handleChange=function(t){e.setState({name:t.target.value})},e.handleSubmit=function(t){e.getUserDetails(e.state.name),e.getRepoDetails(e.state.name),t.preventDefault()},e.darkMode=function(){if(e.state.dark_style){for(var t in e.setState({dark_style:!1}),b.body)document.body.style[t]=b.body[t];e.setState({repo_style:"dark-repo-details"})}else{e.setState({dark_style:!0}),document.body.style.backgroundColor="#DAE0E2",document.body.style.color="black";e.setState({repo_style:"white-repo-details"})}},e.state={id:"",name:"",username:"",followers:"",following:"",repo_count:"",user_dp:"",repo_name:"",fork_count:"",star_count:"",repo_detail:"",dark_style:!0,repo_style:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getRepoDetails",value:function(e){var t=this,a="https://api.github.com/users/".concat(e,"/repos");e&&fetch(a).then((function(e){return e.json()})).then((function(e){var a=Object(c.a)(e).sort((function(e,t){return t.forks+t.stargazers_count-(e.forks+e.stargazers_count)})).slice(0,4),n=[],r=[],o=[],l=[];a.forEach((function(e){n.push(e.name),r.push(e.forks_count),o.push(e.stargazers_count),null!==e.description?l.push(e.description):l.push("No description")})),t.setState({repo_name:n,fork_count:r,star_count:o,description:l})})).catch((function(e){return alert("Not Found")}))}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.followers,n=e.repo_count,o=e.user_dp,l=e.description,c=e.repo_name,s=e.fork_count,i=e.star_count,u=e.following,m=e.repo_style,d=e.dark_style;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading-main"},r.a.createElement("h1",{id:"heading"},"Github Profile Finder"),r.a.createElement("div",{onClick:this.darkMode,id:"dark"},d?r.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/planet-on-the-dark-side.png",alt:"WhiteMode"}):r.a.createElement("img",{src:"https://img.icons8.com/cotton/64/000000/planet-on-the-dark-side.png",alt:"DarkMode"}))),r.a.createElement(g,null,r.a.createElement(h,{search:this.handleChange,submit:this.handleSubmit})),r.a.createElement(g,null,r.a.createElement("div",{className:"user-repo"},r.a.createElement(E,{username:t,followers:a,repo_count:n,user_dp:o,following:u,darkOrwhite:m}),r.a.createElement(p,{user:this.state.name,description:l,repo_name:c,fork_count:s,star_count:i,darkOrwhite:m}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0bb9940a.chunk.js.map