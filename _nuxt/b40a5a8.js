(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(t,e,r){},208:function(t,e,r){},215:function(t,e,r){"use strict";var n=r(207);r.n(n).a},216:function(t,e,r){"use strict";var n=r(208);r.n(n).a},217:function(t,e,r){"use strict";r.r(e);r(155);var n=r(33),o=r(48),l=r(142),c=(r(59),{props:["name","desc","image"],computed:{githubLink:function(){return"https://github.com/dmuy/".concat(this.name)}}}),m=(r(215),r(52)),d=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"project-item",attrs:{"no-body":""}},[r("b-card-img-lazy",{attrs:{src:"/images/"+t.image,"blank-src":"/images/thumbs/"+t.image,alt:t.name,top:""}}),t._v(" "),r("b-card-body",[r("b-card-title",[r("a",{staticClass:"project-title",attrs:{href:t.githubLink,rel:"noreferrer",target:"_blank"}},[t._v(t._s(t.name))])]),t._v(" "),r("div",{staticClass:"github-stats"},[r("a",{staticClass:"github-stat",attrs:{href:"https://github.com/dmuy/"+t.name+"/stargazers",rel:"noreferrer",target:"_blank"}},[r("img",{attrs:{src:"https://img.shields.io/github/stars/dmuy/"+t.name+"?style=social",alt:"stars"}})]),t._v(" "),r("a",{staticClass:"github-stat",attrs:{href:"https://github.com/dmuy/"+t.name+"/network/members",rel:"noreferrer",target:"_blank"}},[r("img",{attrs:{src:"https://img.shields.io/github/forks/dmuy/"+t.name+"?style=social",alt:"forks"}})]),t._v(" "),r("a",{staticClass:"github-stat",attrs:{href:"https://github.com/dmuy/"+t.name+"/watchers",rel:"noreferrer",target:"_blank"}},[r("img",{attrs:{src:"https://img.shields.io/github/watchers/dmuy/"+t.name+"?style=social",alt:"watchers"}})])]),t._v(" "),r("b-card-text",[t._v(t._s(t.desc))])],1)],1)}),[],!1,null,null,null).exports;n.c.add(o.b,o.d,o.g,o.c);var v={components:{FontAwesomeIcon:l.a,ProjectItem:d},data:function(){return{projects:[{name:"duDatepicker",desc:"Material inspired date picker plugin for input elements",image:"dudatepicker.png"},{name:"MDTimePicker",desc:"Material inspired jquery time picker plugin for input elements",image:"mdtimepicker.png"},{name:"Material-Toast",desc:"A simple plugin to display a material inspired toast (alert message)",image:"mdtoast.png"},{name:"duDialog",desc:"Material inspired dialog for displaying messages and/or select (single/multiple) options",image:"dudialog.png"}]}},methods:{isIE:function(){var t=navigator.userAgent;return t.indexOf("MSIE ")>0||!!t.match(/Trident.*rv\:11\./)}},mounted:function(){var t=this;if(!this.isIE()){var img=new Image,e="/images/laptop.jpg";img.src=e,img.onload=function(){t.$refs.hero.style.setProperty("--bg","url('".concat(e,"')"))}}}},h=(r(216),Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("section",{ref:"hero",staticClass:"content d-flex parallax-bg",attrs:{id:"hero"}},[t._m(0),t._v(" "),r("div",{attrs:{id:"arrow-down"}},[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","chevron-down"],size:"2x"}})],1)]),t._v(" "),r("section",{staticClass:"content",attrs:{id:"about"}},[r("div",{staticClass:"container"},[r("span",{staticClass:"display-3"},[t._v("About Me")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg"},[r("div",{staticClass:"photo-wrapper"},[r("b-img-lazy",{attrs:{thumbnail:"",rounded:"circle",fluid:"",src:"/images/me.jpg","blank-src":"/images/thumbs/me.jpg",alt:"Dionlee Uy"}})],1)]),t._v(" "),t._m(1)])])]),t._v(" "),r("section",{staticClass:"content",attrs:{id:"projects"}},[r("div",{staticClass:"container"},[r("span",{staticClass:"display-3"},[t._v("Projects")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("I'm currently a home-based web developer - ASP.NET (C#) & Laravel. And while working on my projects I've made some vanilla js and jQuery plugins.")]),t._v(" "),r("span",{staticClass:"h4"},[t._v("jQuery")]),t._v(" "),r("p",[t._v("Previously, I've explored jQuery because I liked it, and I think it's pretty cool. I learned how to make my own plugin, mainly because I create scripts to make my coding easier and reusable.")]),t._v(" "),r("p",[t._v("Below are some of the jQuery plugins I've made (now converted to vanilla JS).")]),t._v(" "),t._m(2),t._v(" "),r("span",{staticClass:"h4"},[t._v("JavaScript")]),t._v(" "),r("p",[t._v("Recently, I'm more into vanilla JS plugins, Vue and the likes. I've converted some of my jQuery plugins into vanilla.")]),t._v(" "),r("p",[t._v("Below are some of the most significant plugins that I've made (and use).")]),t._v(" "),r("b-card-group",{attrs:{columns:""}},t._l(t.projects,(function(p){return r("project-item",t._b({key:p.name},"project-item",p,!1))})),1)],1)]),t._v(" "),r("section",{staticClass:"content",attrs:{id:"interests"}},[r("div",{staticClass:"container"},[r("span",{staticClass:"display-3"},[t._v("Interests")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg text-center"},[r("div",[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","graduation-cap"]}})],1),t._v(" "),r("span",{staticClass:"h4"},[t._v("Learning")]),t._v(" "),r("p",[t._v("It's always fun to learn new things - especially \"cool\" stuffs. Learning doesn't stop at graduation, and it doesn't always come from school.")]),t._v(" "),r("p",[t._v("Currently, most of the new things I learned are from the web applications development like CSS Frameworks, JQuery API, etc.")])]),t._v(" "),r("div",{staticClass:"col-lg text-center"},[r("div",[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","music"]}})],1),t._v(" "),r("span",{staticClass:"h4"},[t._v("Music")]),t._v(" "),r("p",[t._v("I've always liked listening to music whenever I'm doing some stuff. I listen to a variety of songs but I find it soothing whenever I listen to Yiruma's plays - I have a separate playlist for this.")]),t._v(" "),r("p",[t._v("Also, I've composed some songs when I was in college - I sing a little *hehe*.")])]),t._v(" "),r("div",{staticClass:"col-lg text-center"},[r("div",[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","gamepad"]}})],1),t._v(" "),r("span",{staticClass:"h4"},[t._v("Games")]),t._v(" "),r("p",[t._v("Like any other guys out there, I also play computer games. I usually play RPGs but mostly offline games. I don't really like MMORPGs or any online games that much, but there's an exception, Dota 2, I think that's the only online game I like to play.")]),t._v(" "),t._m(3)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container align-self-center"},[e("div",{staticClass:"display-1"},[e("span",[this._v("Hello, I'm Dionlee Uy")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg d-flex flex-column justify-content-center"},[e("p",[this._v("I'm a Developer from Philippines. A graduate of BS Information Technology specialized in Android Apps Development, currently working my way in the IT industry as a web developer - ASP.NET Web Forms / MVC (and a little ASP.NET Core) C# in particular, and just started exploring the Laravel framework (using Vue.js as frontend framework).")]),this._v(" "),e("p",[this._v("I also do other projects like creating static websites using Bootstrap (or any other CSS frameworks), JavaScript, jQuery, or Vue.js (just started on learning it) - I use Nuxt.js framework, CMS using Drupal (though not on the expert level).")]),this._v(" "),e("p",[this._v("I love learning new things and share it to others through my works.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/dmuy/duDatepicker",rel:"noreferrer",target:"_blank"}},[this._v("duDatepicker")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/dmuy/MDTimePicker",rel:"noreferrer",target:"_blank"}},[this._v("MDTimePicker")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/dmuy/Material-Toast",rel:"noreferrer",target:"_blank"}},[this._v("Material-Toast")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("**Update**")]),e("br"),this._v("Now I also play Apex Legends, Fortnite and Diablo 3.")])}],!1,null,"32a47bbc",null));e.default=h.exports}}]);