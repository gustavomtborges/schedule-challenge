(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{71:function(e,a,t){e.exports=t(89)},89:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(13),o=t.n(l),i=t(66),m=t(19),c=t(15),s=t(25),u=t(26),d=t(29),p=t(27),h=t(30),E=t(99),b=t(100),g=function(){return n.a.createElement(E.a,{background:"brand",width:"50%",align:"center"},n.a.createElement(b.a,{margin:{top:"330px"}},"Agendamento"))},f=function(e){return n.a.createElement(E.a,{direction:"column",justify:"center",align:"center",background:"white",width:"50%"},e.children)},w=t(96),S=t(97),v=t(101),A=function(e){return n.a.createElement(w.a,{onSubmit:e.handleSubmit,messages:{required:"Campo obrigat\xf3rio."}},n.a.createElement(S.a,{name:"email",label:"E-mail",placeholder:"seu@email.com",id:"email",htmlFor:"email",required:!0,validate:{regexp:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,message:"E-mail inv\xe1lido"}}),n.a.createElement(S.a,{type:"password",name:"password",id:"password",htmlFor:"password",label:"Senha",required:!0}),n.a.createElement(E.a,{direction:"row",margin:{top:"48px"}},n.a.createElement(E.a,{width:"180px"},n.a.createElement(c.b,{to:"/signup"},n.a.createElement(v.a,{label:"Criar conta"}))),n.a.createElement(E.a,{width:"180px",margin:{left:"auto"},alignSelf:"end"},n.a.createElement(v.a,{type:"submit",label:"Entrar",primary:!0}))))},y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){if(localStorage.getItem("users")){var a=JSON.parse(localStorage.getItem("users")).filter(function(a){return a.email===e.value.email&&a.password===e.value.password})[0];a&&(localStorage.setItem("loggedIn","true"),t.props.history.push(t.isDoctor(a)?"/home/doctor":"/home/user"))}},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"isDoctor",value:function(e){return e.hasOwnProperty("crm")}},{key:"render",value:function(){return n.a.createElement(E.a,{direction:"row",height:"100vh"},n.a.createElement(g,null),n.a.createElement(f,null,n.a.createElement(E.a,{width:"498px"},n.a.createElement(A,{handleSubmit:this.handleSubmit}))))}}]),a}(r.Component),z=t(103),C=t(104),Z=function(e){return n.a.createElement(w.a,{onSubmit:e.handleSubmit,messages:{required:"Campo obrigat\xf3rio."}},n.a.createElement(S.a,{name:"name",label:"Nome",id:"nome",htmlFor:"nome",required:!0}),n.a.createElement(S.a,{name:"email",label:"E-mail",id:"email",placeholder:"seu@email.com",htmlFor:"email",required:!0,validate:{regexp:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,message:"E-mail inv\xe1lido"}}),n.a.createElement(S.a,{type:"password",name:"password",id:"password",htmlFor:"password",label:"Senha",required:!0}),n.a.createElement(S.a,{type:"password",name:"passwordConfirm",id:"passwordConfirm",htmlFor:"passwordConfirm",label:"Confirmar senha",required:!0,validate:function(e,a){return e!==a.password&&"Senha diferente"}}),n.a.createElement(E.a,{direction:"row",margin:{top:"48px"}},n.a.createElement(E.a,{width:"180px"},n.a.createElement(c.b,{to:"/"},n.a.createElement(v.a,{label:"Cancelar"}))),n.a.createElement(E.a,{width:"180px",margin:{left:"auto"},alignSelf:"end"},n.a.createElement(v.a,{type:"submit",label:"Salvar",primary:!0}))))},x=function(e){return n.a.createElement(w.a,{onSubmit:e.handleSubmit,messages:{required:"Campo obrigat\xf3rio."}},n.a.createElement(S.a,{name:"name",label:"Nome",id:"nome",htmlFor:"nome",required:!0}),n.a.createElement(S.a,{name:"crm",label:"CRM",placeholder:"1234/SP",id:"crm",htmlFor:"crm",required:!0,validate:{regexp:/[0-9]{4,10}\/AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO{2}/,message:"CRM Inv\xe1lido"}}),n.a.createElement(S.a,{name:"email",label:"E-mail",placeholder:"seu@email.com",id:"email",htmlFor:"email",required:!0,validate:{regexp:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,message:"E-mail inv\xe1lido"}}),n.a.createElement(S.a,{type:"password",name:"password",id:"password",htmlFor:"password",label:"Senha",required:!0}),n.a.createElement(S.a,{type:"password",name:"passwordConfirm",id:"passwordConfirm",htmlFor:"passwordConfirm",label:"Confirmar senha",required:!0,validate:function(e,a){return e!==a.password&&"Senha diferente"}}),n.a.createElement(E.a,{direction:"row",margin:{top:"48px"}},n.a.createElement(E.a,{width:"180px"},n.a.createElement(c.b,{to:"/"},n.a.createElement(v.a,{label:"Cancelar"}))),n.a.createElement(E.a,{width:"180px",margin:{left:"auto"},alignSelf:"end"},n.a.createElement(v.a,{type:"submit",label:"Salvar",primary:!0}))))},O=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){var a=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[];a.push(e.value),localStorage.setItem("users",JSON.stringify(a)),e.value={},t.props.history.push("/")},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,{direction:"row",height:"100vh"},n.a.createElement(g,null),n.a.createElement(f,null,n.a.createElement(z.a,{width:"498px"},n.a.createElement(C.a,{title:"Sou paciente"},n.a.createElement(Z,{handleSubmit:this.handleSubmit})),n.a.createElement(C.a,{title:"Sou m\xe9dico"},n.a.createElement(x,{handleSubmit:this.handleSubmit})))))}}]),a}(r.Component),q=function(){return n.a.createElement("div",null,"Home Doctor")},j=function(){return n.a.createElement("div",null,"Home User")};var F=function(e){var a=e.component,t=Object(i.a)(e,["component"]);return n.a.createElement(m.b,Object.assign({},t,{render:function(e){return localStorage.getItem("loggedIn")?n.a.createElement(a,e):n.a.createElement(m.a,{to:{pathname:"/",state:{from:e.location}}})}}))},I=function(){return n.a.createElement(c.a,null,n.a.createElement(m.b,{path:"/",exact:!0,component:y}),n.a.createElement(m.b,{path:"/signup",component:O}),n.a.createElement(F,{path:"/home/doctor",component:q}),n.a.createElement(F,{path:"/home/user",component:j}))},P=t(98),R={global:{colors:{brand:"#494ca2"},font:{family:"Helvetica, sans-serif",size:"16px",heigh:"20px"}}};var k=function(){return n.a.createElement(P.a,{theme:R},n.a.createElement(I,null))};o.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.71ae49a1.chunk.js.map