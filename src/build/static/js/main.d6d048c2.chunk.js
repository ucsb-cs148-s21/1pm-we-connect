(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(34),a=n.n(i),s=(n(48),n(49),n(12)),j=n(24),o=n(22),l=(n(50),n(2)),u=function(e,t){return function(n){var c=n.children,r=Object(j.a)(n,["children"]);return Object(l.jsxs)(t,Object(s.a)(Object(s.a)({className:e},r),{},{children:[" ",c," "]}))}},b=function(e){var t=e.children;return Object(l.jsx)("nav",{className:"navbar",children:t})},h=function(e){var t=e.children,n=Object(j.a)(e,["children"]);return Object(l.jsx)(o.b,Object(s.a)(Object(s.a)({className:"navbar-link"},n),{},{children:t}))},d=u("nav-menu",(function(e){var t=e.children,n=Object(j.a)(e,["children"]);return Object(l.jsx)("div",Object(s.a)(Object(s.a)({},n),{},{children:t}))})),O=u("nav-button",(function(e){var t=e.children,n=Object(j.a)(e,["children"]);return Object(l.jsx)("nav",Object(s.a)(Object(s.a)({},n),{},{children:t}))})),p=u("nav-button-link",o.b),x=function(){return Object(l.jsxs)(b,{children:[Object(l.jsx)(h,{to:"/",children:"WeConnect"}),Object(l.jsxs)(d,{children:[Object(l.jsx)(h,{to:"/createPost",children:"Create Post"}),Object(l.jsx)(h,{to:"/sign-up",children:"Sign Up"}),Object(l.jsx)(O,{children:Object(l.jsx)(p,{to:"/signin",children:"Sign In"})})]})]})},f=n(4),v=n(30),m=n.n(v),g=n(36),y=n(20),C=n(70),S=n(75),P=n(72),D=n(76),N=n(73),I=function(e){var t=e.author,n=e.projectName,c=e.contactInfo,r=e.projectDescription,i=Object(C.a)({card:{margin:"20px"}})();return Object(l.jsx)(S.a,{className:i.card,children:Object(l.jsxs)(P.a,{children:[Object(l.jsx)(D.a,{variant:"h4",component:"h1",children:n}),Object(l.jsxs)(D.a,{variant:"p",component:"p",children:["By: ",t]}),Object(l.jsxs)(D.a,{variant:"p",component:"p",children:["Contact info: ",c]}),Object(l.jsxs)(D.a,{variant:"p",component:"p",children:["Project Description: ",r]})]})})},k=function(e){var t=e.list;return Object(l.jsx)(N.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",children:t.map((function(e){return Object(l.jsx)(I,Object(s.a)({},e))}))})},w=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var e=Object(g.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/projects").then((function(e){return e.json()})).then((function(e){return r(Object.values(e))})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"},children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)(k,{list:n})]})},F=function(){var e=r.a.useState(""),t=Object(y.a)(e,2),n=t[0],c=t[1],i=r.a.useState(""),a=Object(y.a)(i,2),s=a[0],j=a[1],o=r.a.useState("cs"),u=Object(y.a)(o,2),b=u[0],h=u[1];return Object(l.jsxs)("form",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Name:"}),Object(l.jsx)("input",{onChange:function(e){return c(e.target.value)},value:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Project Description:"}),Object(l.jsx)("textarea",{type:"text",value:s,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Major "}),Object(l.jsxs)("select",{value:b,onChange:function(e){return h(e.target.value)},children:[Object(l.jsx)("option",{value:"cs",children:"Computer Science"}),Object(l.jsx)("option",{value:"phys",children:"Physics"}),Object(l.jsx)("option",{value:"film",children:"Film"})]})]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("/projects/100/2",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({author:n,projectName:"tbd",contactInfo:"111-111-1111",projectDescription:s})}),alert("Form submitted")},type:"submit",children:"Submit"})]})},T=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"space-between",height:"40vh",paddingTop:"50px"},children:Object(l.jsx)(F,{})})};var B=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(f.a,{path:"/createPost",exact:!0,component:T})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),J()}},[[58,1,2]]]);
//# sourceMappingURL=main.d6d048c2.chunk.js.map