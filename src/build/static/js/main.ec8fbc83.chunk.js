(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(11),o=n.n(a),i=(n(115),n(13)),s=n(19),j=n(167),l=n(168),u=n(169),b=n(72),d=n(171),O=n(172),h=n(161),f=n(170),p=n(68),m=n.n(p),x=n(69),g=n.n(x),v=n(92),k=n.n(v),S=n(27),C=n(182),y=n(163),T=n(164),P=n(165),N=n(90),D=n.n(N),w=n(89),I=n.n(w),q=n(91),A=n.n(q),F=n(166),B=n(29),E=n(3),L=Object(h.a)({list:{width:250},fullList:{width:"auto",minWidth:"40vw"}});function V(e){var t,n=e.open,r=e.setOpen,c=e.dark,a=e.setDark,o=L();return Object(E.jsx)("div",{children:Object(E.jsx)(C.a,{anchor:"left",open:n,onClose:function(){return r((function(e){return!e}))},children:Object(E.jsx)("div",{className:o.fullList,role:"presentation",children:Object(E.jsxs)(y.a,{children:[Object(E.jsxs)(T.a,{button:!0,onClick:function(){return r((function(e){return!e}))},component:B.b,to:"/about",children:[Object(E.jsx)(P.a,{children:Object(E.jsx)(I.a,{})}),Object(E.jsx)(F.a,{primary:"About"})]}),Object(E.jsxs)(T.a,{button:!0,onClick:function(){return r((function(e){return!e}))},component:B.b,to:"/createPost",children:[Object(E.jsx)(P.a,{children:Object(E.jsx)(D.a,{})}),Object(E.jsx)(F.a,{primary:"Create Post"})]}),Object(E.jsxs)(T.a,{button:!0,onClick:function(){return r((function(e){return!e}))},component:B.b,to:"/help",children:[Object(E.jsx)(P.a,{children:Object(E.jsx)(A.a,{})}),Object(E.jsx)(F.a,{primary:"Help!"})]}),Object(E.jsxs)(T.a,(t={button:!0,onClick:function(){return r((function(e){return!e}))}},Object(S.a)(t,"onClick",(function(){return a((function(e){return!e}))})),Object(S.a)(t,"children",[Object(E.jsxs)(P.a,{children:[" ",c?Object(E.jsx)(m.a,{}):Object(E.jsx)(g.a,{})]}),Object(E.jsx)(F.a,{primary:"Set ".concat(c?"Light":"Dark"," Theme")})]),t))]})})})})}var z=Object(h.a)((function(e){return{root:{flexGrow:1},toolbar:{display:"flex",justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:{textDecoration:"none",color:"inherit"}}})),H=function(e){var t=e.setDark,n=e.dark,c=z(),a=Object(r.useState)(!1),o=Object(i.a)(a,2),h=o[0],p=o[1],x=Object(s.a)(),v=Object(j.a)(x.breakpoints.down("sm"));return Object(E.jsx)("div",{className:c.root,children:Object(E.jsx)(l.a,{position:"static",children:Object(E.jsxs)(u.a,{className:c.toolbar,children:[Object(E.jsx)(b.a,{className:c.title,variant:"h6",component:B.b,to:"/",children:"We Connect"}),v&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(V,{dark:n,setDark:t,open:h,setOpen:function(){return p((function(e){return!e}))}}),Object(E.jsx)(f.a,{onClick:function(){return p((function(e){return!e}))},children:Object(E.jsx)(k.a,{})})]}),!v&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{children:[Object(E.jsx)(d.a,{color:"inherit",component:B.b,to:"createPost",children:"Create Post"}),Object(E.jsx)(d.a,{color:"inherit",component:B.b,to:"about",children:"About"}),Object(E.jsx)(d.a,{color:"inherit",component:B.b,to:"/help",children:"Help"}),Object(E.jsx)(O.a,{title:"Set Dark Theme",children:Object(E.jsx)(f.a,{onClick:function(){return t((function(e){return!e}))},children:n?Object(E.jsx)(m.a,{}):Object(E.jsx)(g.a,{})})}),Object(E.jsx)(b.a,{variant:"h6",component:"label"})]})})]})})})},W=n(14),J=n(16),R=n(173),G=n(174),M=n(179),_=function(e){var t=e.author,n=e.projectName,r=e.contactInfo,c=e.projectDescription,a=e.tagsString,o=Object(h.a)({card:{margin:"20px"}})();return Object(E.jsx)(R.a,{className:o.card,children:Object(E.jsxs)(G.a,{children:[Object(E.jsx)(b.a,{variant:"h4",component:"h1",children:n}),Object(E.jsxs)(b.a,{variant:"subheader1",component:"p",children:["By: ",t]}),Object(E.jsxs)(b.a,{variant:"subheader1",component:"p",children:["Contact info: ",r]}),Object(E.jsxs)(b.a,{variant:"subheader1",component:"p",children:["Project Description: ",c]}),Object(E.jsxs)(b.a,{variant:"subheader1",component:"p",children:["Tags: ",a]})]})})},K=function(e){var t=e.list,n=Object(s.a)(),r=Object(j.a)(n.breakpoints.down("sm")),c=Object(j.a)(n.breakpoints.up("md")),a=Object(j.a)(n.breakpoints.up("lg")),o=Object(j.a)(n.breakpoints.up("xl"));return Object(E.jsx)(M.a,{display:"grid",gridTemplateColumns:o?"20% 20% 20% 20% 20%":a?"33% 33% 34":c?"50% 50%":r?"100%":"20% 20% 20% 20% 20%",children:t&&t.map((function(e,t){return Object(E.jsx)(_,Object(J.a)({},e),t)}))})},Q=n(184),U=n(185),X=n(178),Y=n(183),Z=function(){return fetch("/projects").then((function(e){return e.json()}))},$=function(){return fetch("/popular/20").then((function(e){return e.json()}))},ee=Object(h.a)((function(e){return{tagSelect:{margin:e.spacing(2)}}})),te=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(i.a)(a,2),s=o[0],j=o[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),d=u[0],O=u[1],h=ee();return Object(r.useEffect)((function(){Z().then((function(e){return c(Object.values(e))})),$().then((function(e){return j(e.tags)}))}),[]),Object(r.useEffect)((function(){0===d.length?Z().then((function(e){return c(Object.values(e))})):function(e){return fetch("/search/"+e.join("_")).then((function(e){return e.json()}))}(d.map((function(e){return e.name}))).then((function(e){return c(Object.values(e))}))}),[d]),Object(E.jsxs)(M.a,{display:"flex",flexDirection:"column",children:[Object(E.jsx)(b.a,{variant:"h2",component:"h1",align:"center",children:"Projects"}),Object(E.jsx)(Y.a,{multiple:!0,className:h.tagSelect,value:d,options:s,getOptionLabel:function(e){return e.name},onChange:function(e,t){return O(t)},renderTags:function(e,t){return e.map((function(e,n){return Object(E.jsx)(Q.a,Object(J.a)({avatar:Object(E.jsx)(U.a,{children:e.count}),variant:"outlined",label:e.name},t({index:n})))}))},renderInput:function(e){return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},e),{},{variant:"standard",label:"Tags",placeholder:"Add a Tag"}))}}),Object(E.jsx)(K,{list:n})]})},ne=n(46),re=Object(h.a)((function(e){return{form:Object(S.a)({paddingTop:e.spacing(2),maxWidth:"50%",display:"flex",flexDirection:"column",alignSelf:"center"},e.breakpoints.down("sm"),{maxWidth:"75%"}),formItem:{marginBottom:e.spacing(2)},header:{marginBottom:e.spacing(2),textAlign:"center"}}})),ce=function(e){var t=e.submitForm,n=Object(ne.b)(),c=n.control,a=n.handleSubmit,o=n.formState,l=Object(s.a)(),u=Object(j.a)(l.breakpoints.down("sm")),O=Object(r.useState)([]),h=Object(i.a)(O,2),f=h[0],p=h[1],m=re();return Object(r.useEffect)((function(){$().then((function(e){return p(e.tags)}))}),[]),Object(E.jsxs)("form",{className:m.form,onSubmit:a(t),children:[Object(E.jsx)(b.a,{className:m.header,component:"h1",variant:u?"h3":"h2",children:"Create Project"}),Object(E.jsx)(ne.a,{name:"author",control:c,defaultValue:"",rules:{required:"Author is required"},render:function(e){var t=e.field,n=e.fieldState.error;return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},t),{},{error:n,helperText:n?n.message:null,className:m.formItem,label:"Author",variant:"outlined"}))}}),Object(E.jsx)(ne.a,{name:"projectName",control:c,defaultValue:"",rules:{required:"Project Name is Required"},render:function(e){var t=e.field,n=e.fieldState.error;return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},t),{},{className:m.formItem,error:n,helperText:n?n.message:null,label:"Project Name",variant:"outlined"}))}}),Object(E.jsx)(ne.a,{name:"projectDescription",control:c,defaultValue:"",rules:{required:"Project Description is Required"},render:function(e){var t=e.field,n=e.fieldState.error;return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},t),{},{className:m.formItem,error:n,helperText:n?n.message:null,label:"Project Description",variant:"outlined"}))}}),Object(E.jsx)(ne.a,{name:"contactInfo",control:c,defaultValue:"",rules:{required:"Contact Info is required"},render:function(e){var t=e.field,n=e.fieldState.error;return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},t),{},{error:n,className:m.formItem,helperText:void 0!==n?n.message:"Email, Discord, Phone, etc",label:"Contact Information",variant:"outlined"}))}}),Object(E.jsx)(ne.a,{name:"tags",control:c,defaultValue:"",rules:{required:"Tags is required"},render:function(e){var t=e.field,n=e.fieldState.error;return Object(E.jsx)(Y.a,Object(J.a)(Object(J.a)({},t),{},{multiple:!0,value:0===t.value.length?[]:t.value.split(" "),freeSolo:!0,options:f.map((function(e){return e.name})),onChange:function(e,n){return t.onChange(n.join(" "))},renderTags:function(e,t){return e.map((function(e,n){return Object(E.jsx)(Q.a,Object(J.a)({variant:"outlined",label:e},t({index:n})))}))},renderInput:function(e){return Object(E.jsx)(X.a,Object(J.a)(Object(J.a)({},e),{},{variant:"standard",error:n,helperText:void 0!==n?n.message:"Help people find your project! Example tags: Coding, Cooking, etc",label:"Tags",placeholder:"Add a Tag"}))}}))}}),Object(E.jsx)(d.a,{disabled:o.isSubmitting,variant:"contained",color:"primary",type:"submit",children:"Submit"})]})},ae=n(175),oe=n(181),ie=n(79),se=n.n(ie),je=Object(h.a)((function(e){return{postPage:{display:"flex",flexDirection:"column",height:"100vh"},collasp:{width:"50","& > * + *":{marginTop:e.spacing(2)}}}})),le=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),o=Object(i.a)(a,2),s=o[0],j=o[1],l=je();return Object(E.jsxs)("div",{className:l.postPage,children:[Object(E.jsx)(ae.a,{className:l.collasp,in:n,children:Object(E.jsx)(oe.a,{action:Object(E.jsx)(f.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){c(!1)},children:Object(E.jsx)(se.a,{fontSize:"inherit"})}),children:"Project creation success! Feel free to create more projects or go back to browse some projects."})}),Object(E.jsx)(ae.a,{className:l.collasp,in:s,children:Object(E.jsx)(oe.a,{severity:"error",action:Object(E.jsx)(f.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){j(!1)},children:Object(E.jsx)(se.a,{fontSize:"inherit"})}),children:"Project creation failure! Please try again later."})}),Object(E.jsx)(ce,{submitForm:function(e){(function(e){return fetch("/projects",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})})(e).then((function(e){200===e.status?c(!0):j(!0)}))}})]})},ue=function(){return Object(E.jsx)(M.a,{display:"flex",flexDirection:"column",children:Object(E.jsx)(b.a,{variant:"h2",component:"h1",align:"center",children:"About"})})},be=function(){return Object(E.jsx)(M.a,{display:"flex",flexDirection:"column",children:Object(E.jsx)(b.a,{variant:"h2",component:"h1",align:"center",children:"Help"})})},de=n(176),Oe=n(96),he=n(94),fe=n.n(he),pe=n(95),me=n.n(pe),xe=function(e){return Object(Oe.a)({palette:{type:e?"dark":"light",primary:{main:fe.a[600]},secondary:{main:me.a[500]}}})},ge=n(177);var ve=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(j.a)("(prefers-color-scheme: dark)");return Object(E.jsxs)(de.a,{theme:xe(a&&n),children:[Object(E.jsx)(ge.a,{}),Object(E.jsxs)(B.a,{children:[Object(E.jsx)(H,{setDark:c,dark:n}),Object(E.jsxs)(W.c,{children:[Object(E.jsx)(W.a,{path:"/",exact:!0,component:te}),Object(E.jsx)(W.a,{path:"/createPost",exact:!0,component:le}),Object(E.jsx)(W.a,{path:"/about",exact:!0,component:ue}),Object(E.jsx)(W.a,{path:"/help",exact:!0,component:be})]})]})]})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ve,{})}),document.getElementById("root")),ke()}},[[123,1,2]]]);
//# sourceMappingURL=main.ec8fbc83.chunk.js.map