(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(a,e,o){},56:function(a,e,o){"use strict";o.r(e);var t=o(0),l=o(12),n=o.n(l),r=(o(34),o(17)),s=o(10),c=o(6),i=o(1),p=function(a){var e=a.setMenuIsOpen,o=a.menuIsOpen;return Object(i.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(i.jsx)("div",{className:"collapse navbar-collapse",children:Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/portfolio/all",children:"All"}),Object(i.jsx)(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/portfolio/bnw",children:"B&W"}),Object(i.jsx)(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/portfolio/color",children:"Color"}),Object(i.jsx)(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/portfolio/madrid",children:"Madrid"})]})}),Object(i.jsxs)("label",{for:"menu",onClick:function(){return e(!o)},children:[" ",Object(i.jsx)("i",{className:"fas fa-bars"})]})]})},d=o(23),h=function(a){var e=a.id,o=a.onClick;return Object(i.jsx)("div",{className:" photocard animate__animated animate__fadeIn",children:Object(i.jsx)("a",{href:"#",id:"bottle",onClick:o,children:Object(i.jsx)("img",{src:"./assets/photos/".concat(e,".jpg"),alt:e,className:"card-img"})})})},j=[{id:"abuela",hashtags:["portrait","person"],lat:42.402748,long:-3.264493,place:"Burgos",color:!1},{id:"aguila",hashtags:["portrait","animal"],lat:39.862979,long:-4.032392,place:"Toledo",color:!0},{id:"arcoiris",hashtags:["landscape","nature"],lat:51.11399,long:17.067494,place:"Polonia",color:!0},{id:"atardecer",hashtags:["landscape","person"],lat:56.934465,long:24.067333,place:"Letonia",color:!0},{id:"berlin",hashtags:["portrait","person"],lat:52.509944,long:13.37561,place:"Berlin",color:!1},{id:"billar",hashtags:["portrait","person"],lat:51.11399,long:17.067494,place:"Polonia",color:!0},{id:"buho",hashtags:["portrait","animal"],place:"La Rioja",lat:42.439967,long:-2.959075,color:!1},{id:"camino",hashtags:["landscape","person"],place:"Leon",lat:42.592109,long:-6.706444,color:!1},{id:"carro",hashtags:["landscape","person"],place:"Burgos",lat:42.402748,long:-3.264493,color:!0},{id:"escaleras",hashtags:["portrait","person"],place:"Berlin",lat:52.509944,long:13.37561,color:!0},{id:"gato",hashtags:["portrait","animal"],lat:56.934465,long:24.067333,place:"Letonia",color:!1},{id:"gatoprado",hashtags:["portrait","animal"],lat:39.448898,long:-5.865809,place:"C\xe1ceres",color:!1},{id:"hoguera",hashtags:["nature"],lat:51.11399,long:17.067494,place:"Polonia",color:!0},{id:"iglesia",hashtags:["landscape","person"],lat:39.448898,long:-5.865809,place:"C\xe1ceres",color:!1},{id:"mariposa",hashtags:["landscape","person"],lat:42.402748,long:-3.264493,place:"Burgos",color:!1},{id:"miguel",hashtags:["portrait","person"],lat:42.402748,long:-3.264493,place:"Burgos",color:!1},{id:"mon",hashtags:["portrait","person"],lat:40.663625,long:-4.084625,place:"Madrid",color:!0},{id:"navidad",hashtags:["inside"],lat:42.402748,long:-3.264493,place:"Burgos",color:!0},{id:"olowek",hashtags:["portrait","person"],lat:51.11399,long:17.067494,place:"Polonia",color:!1},{id:"oto\xf1o",hashtags:["portrait","person"],lat:48.13544,long:17.088412,place:"Bratislava",color:!0},{id:"pajaro",hashtags:["portrait","animal"],lat:40.663625,long:-4.084625,place:"Madrid",color:!0},{id:"pintacaras",hashtags:["portrait","person"],lat:40.330326,long:-3.873635,place:"Madrid",color:!0},{id:"pompas",hashtags:["portrait","person"],lat:43.354391,long:-5.107117,place:"Asturias",color:!1},{id:"prado",hashtags:["landscape","nature"],lat:39.448898,long:-5.865809,place:"C\xe1ceres",color:!0},{id:"pulpfiction",hashtags:["portrait","person"],lat:51.11399,long:17.067494,place:"Polonia",color:!0},{id:"rastas",hashtags:["portrait","person"],lat:37.458646,long:-3.931645,place:"Jaen",color:!1},{id:"rio",hashtags:["landscape","person"],lat:68.43824,long:17.429372,place:"Noruega",color:!1},{id:"sanjuan",hashtags:["nature"],lat:51.11399,long:17.067494,place:"Polonia",color:!0},{id:"sol",hashtags:["landscape","person"],lat:40.417015,long:-3.703891,place:"Madrid",color:!0},{id:"violin",hashtags:["portrait","person"],lat:47.498945,long:19.043488,place:"Budapest",color:!0}],u=o(29),g=o(58),b=o(62),m=o(59),O=o(60),x=o(61),f=o(15),v=Object(f.GoogleApiWrapper)({apiKey:"AIzaSyDAuhwTjKbhTQBXXPWNo2yVBJkQ81LOHxk"})((function(a){return Object(i.jsx)(f.Map,{google:a.google,zoom:8,style:{width:"100%",height:"100%"},initialCenter:{lat:a.photo.lat,lng:a.photo.long},children:Object(i.jsx)(f.Marker,{position:{lat:a.photo.lat,lng:a.photo.long}})})})),N=function(a){var e=a.setSelectedPhoto,o=a.photo;return Object(i.jsx)("div",{children:Object(i.jsxs)(b.a,{show:!0,onHide:function(){return e(null)},dialogClassName:"modalphoto",children:[Object(i.jsx)(b.a.Header,{closeButton:!0,children:Object(i.jsx)(b.a.Title,{id:"contained-modal-title-vcenter",children:Object(i.jsx)("h5",{className:"centerTitle",children:"Where do I took this photo?"})})}),Object(i.jsx)(b.a.Body,{className:"show-grid",children:Object(i.jsx)(g.a,{children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)(O.a,{xs:6,md:6,children:Object(i.jsx)(x.a,{className:"detail-image",src:"./assets/photos/".concat(o.id,".jpg"),width:"100%"})}),Object(i.jsx)(O.a,{xs:6,md:6,children:Object(i.jsx)(v,{className:"map-image",photo:o})})]})})}),Object(i.jsx)(b.a.Footer,{})]})})},k=(Object(f.GoogleApiWrapper)({apiKey:"AIzaSyCeUObCwkss-WxO7R8KBKsZOKkUrI52tjQ"})(N),function(a){var e=a.filterFunction,o=j.filter(e),l=Object(t.useState)(null),n=Object(r.a)(l,2),s=n[0],c=n[1];return Object(i.jsxs)(g.a,{className:"masonry",children:[Object(i.jsx)(u.a,{breakpointCols:{default:5,1100:4,700:3,500:2},columnClassName:"my-masonry-grid_column",children:o.map((function(a){return Object(i.jsx)(h,Object(d.a)(Object(d.a)({},a),{},{onClick:function(){!function(a){c(a)}(a)}}),a.id)}))}),null!==s?Object(i.jsx)(N,{setSelectedPhoto:c,photo:s}):null]})}),C=function(a){var e=a.menuIsOpen,o=a.setMenuIsOpen;Object(c.g)();return e&&Object(i.jsx)("div",{className:"modal-menu",children:Object(i.jsxs)("div",{className:"menu",children:[Object(i.jsx)(s.b,{className:"nav-item nav-link",onClick:function(a){o(!1)},to:"/portfolio/all",children:"All"}),Object(i.jsx)(s.b,{className:"nav-item nav-link",onClick:function(){return o(!1)},to:"/portfolio/bnw",children:"B&W"}),Object(i.jsx)(s.b,{className:"nav-item nav-link",onClick:function(){return o(!1)},to:"/portfolio/color",children:"Color"}),Object(i.jsx)(s.b,{className:"nav-item nav-link",onClick:function(){return o(!1)},to:"/portfolio/madrid",children:"Madrid"})]})})},B=function(a){var e=Object(t.useState)(!1),o=Object(r.a)(e,2),l=o[0],n=o[1];return Object(i.jsx)("div",{children:Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{setMenuIsOpen:n,menuIsOpen:l}),Object(i.jsx)(C,{menuIsOpen:l,setMenuIsOpen:n}),Object(i.jsxs)(c.d,{children:[Object(i.jsx)(c.b,{path:"/portfolio/all",render:function(a){return Object(i.jsx)(k,{filterFunction:function(a){return!0}})}}),Object(i.jsx)(c.b,{path:"/portfolio/color",render:function(a){return Object(i.jsx)(k,{filterFunction:function(a){return 1==a.color}})}}),Object(i.jsx)(c.b,{path:"/portfolio/bnw",render:function(a){return Object(i.jsx)(k,{filterFunction:function(a){return 0==a.color}})}}),Object(i.jsx)(c.b,{path:"/portfolio/madrid",render:function(a){return Object(i.jsx)(k,{filterFunction:function(a){return"Madrid"==a.place}})}}),Object(i.jsx)(c.b,{path:"/",render:function(a){return Object(i.jsx)(c.a,{to:"/portfolio/all"})}})]})]})})})};n.a.render(Object(i.jsx)(B,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.9074673e.chunk.js.map