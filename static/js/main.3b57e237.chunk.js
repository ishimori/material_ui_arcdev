(this.webpackJsonparcdevelopment=this.webpackJsonparcdevelopment||[]).push([[0],{70:function(e,t,a){"use strict";(function(e){var n=a(39),o=a(31),c=a(27),i=a(0),r=a.n(i),s=a(102),b=a(103),l=a(96),m=a(97),j=a(105),u=a(42),p=a(76),d=a(107),h=a(108),O=a(98),x=a(17),v=a(106),f=a(73),g=a.n(f),w=a(71),k=a(24),y=a(101),C=a(4);function N(e){var t=e.children,a=Object(l.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})}var S=Object(m.a)((function(e){var t,a;return{toolBarMargin:Object(c.a)(Object(c.a)({},e.mixins.toolbar),{},(t={marginBottom:"3em"},Object(o.a)(t,e.breakpoints.down("md"),{marginBottom:"2em"}),Object(o.a)(t,e.breakpoints.down("xs"),{marginBottom:"1.25em"}),t)),logo:(a={height:"8em"},Object(o.a)(a,e.breakpoints.down("md"),{height:"7em"}),Object(o.a)(a,e.breakpoints.down("xs"),{height:"5.5em"}),a),logoContainer:{padding:0,"&:hover":{backgroundColor:"transparent"}},tabContainer:{marginLeft:"auto"},tab:Object(c.a)(Object(c.a)({},e.typography.tab),{},{minWidth:10,marginLeft:"25px"}),button:Object(c.a)(Object(c.a)({},e.typography.estimate),{},{borderRadius:"50px",marginLeft:"50px",marginRight:"25px",height:"45px"}),menu:{backgroundColor:e.palette.common.blue,color:"white"},menuItem:Object(c.a)(Object(c.a)({},e.typography.tab),{},{opacity:.7,"&:hover":{opacity:1}}),drawerIcon:{height:"50px",width:"50px"},drawerIconContainer:{marginLeft:"auto","&:hover":{backgroundColor:"transparent"}}}}));t.a=function(t){var a=S(),o=Object(x.a)(),c=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),l=Object(O.a)(o.breakpoints.down("md")),m=Object(i.useState)(!1),f=Object(n.a)(m,2),B=f[0],F=f[1],I=Object(i.useState)(0),E=Object(n.a)(I,2),L=E[0],R=E[1],M=Object(i.useState)(null),P=Object(n.a)(M,2),T=P[0],A=P[1],H=Object(i.useState)(!1),z=Object(n.a)(H,2),D=z[0],J=z[1],W=Object(i.useState)(0),G=Object(n.a)(W,2),U=G[0],q=G[1],K=function(e,t){R(t)},Q=function(e){A(null),J(!1)};Object(i.useEffect)((function(){switch("/"===window.location.pathname&&0!==L?R(0):"/services"===window.location.pathname&&1!==L?R(1):"/revolution"===window.location.pathname&&2!==L?R(2):"/about"===window.location.pathname&&3!==L?R(3):"/contact"===window.location.pathname&&4!==L?R(4):"/estimate"===window.location.pathname&&5!==L&&R(5),window.location.pathname){case"/":0!==L&&R(0);break;case"/services":1!==L&&(R(1),q(0));break;case"/customsoftware":1!==L&&(R(1),q(1));break;case"/mobileapps":1!==L&&(R(1),q(2));break;case"/websites":1!==L&&(R(1),q(3));break;case"/revolution":2!==L&&R(2);break;case"/about":3!==L&&R(3);break;case"/contact":4!==L&&R(4);break;case"/estimate":5!==L&&R(5)}}),[L]);var V=Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsxs)(j.a,{value:L,onChange:K,className:a.tabContainer,indicatorColor:"primary",children:[Object(C.jsx)(u.a,{className:a.tab,component:k.b,to:"/",label:"Home"}),Object(C.jsx)(u.a,{"aria-owns":T?"simple-menu":void 0,"aria-haspopup":T?"true":void 0,onMouseOver:function(e){return function(e){A(e.currentTarget),J(!0)}(e)},className:a.tab,component:k.b,to:"/services",label:"Services"}),Object(C.jsx)(u.a,{className:a.tab,component:k.b,to:"/revolution",label:"The Revolution"}),Object(C.jsx)(u.a,{className:a.tab,component:k.b,to:"/about",label:"About Us"}),Object(C.jsx)(u.a,{className:a.tab,component:k.b,to:"/contact",label:"Contact"})]}),Object(C.jsx)(p.a,{variant:"contained",color:"secondary",component:k.b,to:"/estimate",onChange:K,className:a.button,children:"FreeEstimate"}),Object(C.jsx)(d.a,{id:"simple-menu",anchorEl:T,open:D,onClose:Q,classes:{paper:a.menu},MenuListProps:{onMouseLeave:Q},elevation:0,children:[{name:"Services",link:"/services"},{name:"custom Software Development",link:"/customsoftware"},{name:"mobile app development",link:"/mobileapps"},{name:"web site develpment",link:"/websites"}].map((function(e,t){return Object(C.jsx)(h.a,{component:k.b,to:e.link,classes:{root:a.menuItem},onClick:function(e){!function(e,t){A(null),J(!1),q(t)}(0,t),R(1),Q()},selected:t===U&&1===L,children:e.name},e)}))})]}),X=Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(v.a,{disableBackdropTransition:!c,disableDiscovery:c,open:B,onClose:function(){return F(!1)},onOpen:function(){return F(!0)},children:"example drawer"}),Object(C.jsx)(y.a,{className:a.drawerIconContainer,children:Object(C.jsx)(g.a,{className:a.drawerIcon,onClick:function(){return F(!B)},disableRipple:!0})})]});return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(N,{children:Object(C.jsx)(s.a,{position:"fixed",children:Object(C.jsxs)(b.a,{disableGutters:!0,children:[Object(C.jsx)(p.a,{component:k.b,to:"/",className:a.logoContainer,onClick:function(){return R(0)},disableRipple:!0,children:Object(C.jsx)("img",{alt:"company logo",src:w.a,className:a.logo})}),l?X:V]})})}),Object(C.jsx)("div",{className:a.toolBarMargin})]})}}).call(this,a(84))},71:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.c61e03c8.svg"},95:function(e,t,a){"use strict";a.r(t);a(0);var n=a(7),o=a.n(n),c=a(144),i=a(24),r=a(11),s=a(74),b="#0b72b9",l="#FFBA60",m=Object(s.a)({palette:{common:{blue:"".concat(b),orange:"".concat(l)},primary:{main:"".concat(b)},secondary:{main:"".concat(l)}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:"700",fontSize:"1em"},estimate:{fontFamily:"Pacifico",fontSize:"1rem",textTransform:"none",color:"white"}}}),j=a(70),u=a(4);var p=function(){return Object(u.jsx)(c.a,{theme:m,children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(j.a,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)("div",{children:"Home"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/services",component:function(){return Object(u.jsx)("div",{children:"services"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/customsoftware",component:function(){return Object(u.jsx)("div",{children:"custom software"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/mobileapps",component:function(){return Object(u.jsx)("div",{children:"mobileapps"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/websites",component:function(){return Object(u.jsx)("div",{children:"websites"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/revolution",component:function(){return Object(u.jsx)("div",{children:"revolution"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/about",component:function(){return Object(u.jsx)("div",{children:"about"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/contact",component:function(){return Object(u.jsx)("div",{children:"Contact"})}}),Object(u.jsx)(r.a,{exact:!0,path:"/estimate",component:function(){return Object(u.jsx)("div",{children:"Estimate"})}})]})]})})};o.a.render(Object(u.jsx)("div",{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.3b57e237.chunk.js.map