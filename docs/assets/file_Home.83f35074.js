import{u as S,a as B,r as p,b as E,o as i,c as l,d as s,e as v,w as V,f as k,g as x,h as w,l as D,p as M,i as A,t as $,j as C,k as b,v as f,m as H,n as I,q as U,s as Y,F as T,x as z,y as F,z as O,A as j}from"./file_index.1ea8e408.js";import{_ as q}from"./file_Message.5e4f5d05.js";import{_ as N}from"./file__plugin-vue_export-helper.e718e6fb.js";const G=c=>(M("data-v-dce13aac"),c=c(),A(),c),L={class:"navbar rel",role:"navigation","aria-label":"main navigation"},J=G(()=>s("div",{class:"navbar-brand"},[s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})])],-1)),P={id:"navbarBasicExample",class:"navbar-menu"},R={class:"navbar-start"},K={__name:"Navbar",setup(c){const a=S(),n=B(),e=p({message:"",type:"",isShow:!1}),t=async()=>{await D()===!1?(e.value.message="Ha habido un error intentelo de nuevo m\xE1s tarde",e.value.type="is-danger",e.value.isShow=!0):(e.value.message="\xA1Hasta pronto!",e.value.type="is-success",e.value.isShow=!0,a.logout(),setTimeout(()=>{n.push({name:"login"})},1e3))};return(o,m)=>{const _=E("router-link");return i(),l("nav",L,[J,s("div",P,[s("div",R,[v(_,{to:{name:"home"},class:"navbar-item"},{default:V(()=>[k(" Home ")]),_:1})]),s("div",{class:"navbar-end"},[s("div",{class:"navbar-item"},[s("div",{class:"buttons"},[s("button",{onClick:t,class:"button is-danger"},"Log Out")])])])]),e.value.isShow?(i(),x(q,{key:0,class:"abs",message:e.value.message,type:e.value.type},null,8,["message","type"])):w("",!0)])}}},Q=N(K,[["__scopeId","data-v-dce13aac"]]),W={},X={class:"footer"},Z=s("div",{class:"content has-text-centered"},[s("p",null,[s("strong",null,"AskyourTask"),k(" by "),s("a",{href:""},"Alba Garcia Gonzalez"),k(". ")])],-1),ss=[Z];function es(c,a){return i(),l("footer",X,ss)}const as=N(W,[["render",es]]),ts={class:"modal"},os=s("div",{class:"modal-background"},null,-1),ns={class:"modal-card"},is=s("header",{class:"modal-card-head"},[s("button",{class:"delete","aria-label":"close"})],-1),cs={class:"modal-card-body"},ls={__name:"Modalquestion",props:{message:String},emits:["Yes","No"],setup(c,{emit:a}){const n=c,e=()=>{a("Yes")},t=()=>{a("No")};return(o,m)=>(i(),l("div",ts,[os,s("div",ns,[is,s("section",cs,$(n.message),1),s("footer",{class:"modal-card-foot"},[s("button",{onClick:e,class:"button is-success"},"yes"),s("button",{onClick:t,class:"button"},"No")])])]))}},rs={key:0,class:"card"},ds={class:"card-header"},us={class:"card-header-title"},_s=s("button",{class:"card-header-icon","aria-label":"more options"},[s("span",{class:"icon"},[s("i",{class:"fas fa-angle-down","aria-hidden":"true"})])],-1),ps={class:"card-content"},ms={class:"content"},vs=s("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016",-1),hs=s("a",{href:"#",class:"card-footer-item"},"Done",-1),ks={key:1},bs={class:"card-header"},fs=s("button",{class:"card-header-icon","aria-label":"more options"},[s("span",{class:"icon"},[s("i",{class:"fas fa-angle-down","aria-hidden":"true"})])],-1),gs={class:"card-content"},ys={__name:"Task",props:{task:Object},setup(c){const a=c,n=C(),e=p(!1),t=p({message:"\xBFEst\xE1s seguro?",isShow:!1}),o=p({title:a.task.title,description:a.task.description}),m=()=>{t.value.isShow=!0,console.log(t.value.isShow)},_=async()=>{n.deleteTask(a.task.id),await H(a.task.id)},g=()=>{e.value=!0},d=async()=>{e.value=!1,o.value.title=a.task.title,o.value.description=a.task.description},u=async()=>{e.value=!1,await I(a.task.id,o.value),n.updateTask(a.task.id,o.value)};return(r,h)=>e.value?(i(),l("div",ks,[s("header",bs,[b(s("input",{"onUpdate:modelValue":h[0]||(h[0]=y=>o.value.title=y),class:"input is-primary"},null,512),[[f,o.value.title]]),fs]),s("div",gs,[b(s("input",{"onUpdate:modelValue":h[1]||(h[1]=y=>o.value.description=y),class:"input is-primary"},null,512),[[f,o.value.description]])]),s("footer",{class:"card-footer"},[s("a",{onClick:u,href:"#",class:"card-footer-item"},"Done"),s("a",{onClick:d,href:"#",class:"card-footer-item"},"Cancel")])])):(i(),l("div",rs,[s("header",ds,[s("p",us," Task # "+$(a.task.title),1),_s]),s("div",ps,[s("div",ms,[k($(a.task.description)+" ",1),vs])]),s("footer",{class:"card-footer"},[hs,s("a",{onClick:g,href:"#",class:"card-footer-item"},"Edit"),s("a",{onClick:m,href:"#",class:"card-footer-item"},"Delete")]),t.value.isShow?(i(),x(ls,{key:0,onYes:_,mesagge:t.value.message},null,8,["mesagge"])):w("",!0)]))}},$s={key:0},ws={class:"p-2"},Ts=s("label",{for:""},"Task name",-1),Ss={class:"p-2"},xs=s("label",{for:""},"Task",-1),Cs={class:"columns is-multiline is-mobile"},Ns={__name:"Addtask",setup(c){const a=S(),n=C(),e=p(!1),t=p({user_id:a.id,title:"",description:""});console.log(n.tasks);const o=()=>{e.value=!0},m=()=>{e.value=!1},_=async()=>{const d=await O();return n.setTask(d),console.log(d),d},g=async()=>{console.log("entra",t.value),await j(t.value),await _()};return U(async()=>{console.log(n.tasks),await _()}),(d,u)=>(i(),l(T,null,[s("button",{onClick:o,class:"button is-success"},"Add new task"),e.value?(i(),l("div",$s,[s("form",{onSubmit:u[2]||(u[2]=Y((...r)=>d.onSubmit&&d.onSubmit(...r),["prevent"]))},[s("div",ws,[Ts,b(s("input",{"onUpdate:modelValue":u[0]||(u[0]=r=>t.value.title=r),class:"input is-primary",type:"text",placeholder:"Task name"},null,512),[[f,t.value.title]])]),s("div",Ss,[xs,b(s("input",{"onUpdate:modelValue":u[1]||(u[1]=r=>t.value.description=r),class:"input is-primary",type:"text",placeholder:"Task"},null,512),[[f,t.value.description]])]),s("button",{onClick:g,class:"button is-primary",type:"submit"},"Done"),s("button",{onClick:m,class:"button is-danger",type:"submit"},"Cancel")],32)])):w("",!0),s("div",Cs,[(i(!0),l(T,null,z(F(n).tasks,r=>(i(),l("div",{class:"column is-3-desktop is-6-tablet is-12-mobile",key:r.id},[v(ys,{task:r},null,8,["task"])]))),128))])],64))}},Bs={class:""},Ms={__name:"Home",setup(c){return(a,n)=>(i(),l("div",Bs,[v(Q),v(Ns),v(as)]))}};export{Ms as default};
