import{d as g,u as w,r as c,e as y,o as r,c as S,a as e,k as p,v as _,h as b,g as x,j as d,f as k,w as V,C as E,p as I,i as L,H as N}from"./file_index.9fc17cc1.js";import{_ as B}from"./file_Message.05f93862.js";import{_ as C}from"./file__plugin-vue_export-helper.e718e6fb.js";const i=t=>(I("data-v-6f7645b1"),t=t(),L(),t),M={class:"flex"},P=i(()=>e("h1",{class:"title"},"LOG IN",-1)),T=["onSubmit"],U={class:"p-2"},j=i(()=>e("label",{for:""},"Email",-1)),A={class:"p-2"},D=i(()=>e("label",{for:""},"Password",-1)),G=i(()=>e("button",{class:"button is-success",type:"submit"},"Log in",-1)),H={__name:"Login",setup(t){const m=g(),v=w(),o=c(""),a=c(""),s=c({message:"",type:"",isShow:!1}),f=async()=>{console.log("formulario enviado",o.value,a.value);const l=await N(o.value,a.value);console.log(l),l===!1?(s.value.message="Email incorrecto",s.value.type="is-danger",s.value.isShow=!0):(v.login(o,l),m.push({name:"home"}))};return(l,n)=>{const h=y("router-link");return r(),S("div",M,[P,e("form",{onSubmit:E(f,["prevent"])},[e("div",U,[j,p(e("input",{"onUpdate:modelValue":n[0]||(n[0]=u=>o.value=u),class:"input is-success",type:"email",placeholder:"Email"},null,512),[[_,o.value]])]),e("div",A,[D,p(e("input",{"onUpdate:modelValue":n[1]||(n[1]=u=>a.value=u),class:"input is-success",type:"password",placeholder:"Password"},null,512),[[_,a.value]])]),G,s.value.isShow?(r(),b(B,{key:0,message:s.value.message,type:s.value.type},null,8,["message","type"])):x("",!0),e("div",null,[e("p",null,[d("\xBFEres nuevo? "),k(h,{to:{name:"signin"}},{default:V(()=>[d("Sign in")]),_:1})])])],40,T)])}}},q=C(H,[["__scopeId","data-v-6f7645b1"]]);export{q as default};
