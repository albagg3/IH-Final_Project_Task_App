import{r,b as h,o as c,c as g,d as e,k as p,v as d,g as w,h as y,f as m,e as S,w as b,x,p as k,i as V,D as C}from"./file_index.7dcb2c25.js";import{_ as E}from"./file_Message.e17800e1.js";import{_ as I}from"./file__plugin-vue_export-helper.e718e6fb.js";const l=i=>(k("data-v-b9002928"),i=i(),V(),i),P={class:"flex"},B=l(()=>e("h1",null,"REGISTRATE",-1)),N=["onSubmit"],T={class:"p-2"},M=l(()=>e("label",{for:""},"Email",-1)),U={class:"p-2"},D=l(()=>e("label",{for:""},"Password",-1)),R={class:"p-2"},z=l(()=>e("label",{for:""},"Confirm password",-1)),A=l(()=>e("button",{class:"button is-primary",type:"submit"},"Sign in",-1)),G={__name:"Signin",setup(i){const n=r(""),o=r(""),u=r(""),s=r({message:"",type:"",isShow:!1}),_=async()=>{o.value===u.value?(console.log("formulario enviado",n.value,o.value),await C(n.value,o.value)?(s.value.message="Por favor revisa tu email y haz click en la confirmacion",s.value.type="is-success",s.value.isShow=!0):(s.value.message="Por favor revisa los datos",s.value.type="is-danger",s.value.isShow=!0)):(s.value.message="Confirma el password correctamente",s.value.type="is-danger",s.value.isShow=!0)};return(v,a)=>{const f=h("router-link");return c(),g("div",P,[B,e("form",{onSubmit:x(_,["prevent"])},[e("div",T,[M,p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>n.value=t),class:"input is-primary",type:"email",placeholder:"Email"},null,512),[[d,n.value]])]),e("div",U,[D,p(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>o.value=t),class:"input is-primary",type:"password",placeholder:"Password"},null,512),[[d,o.value]])]),e("div",R,[z,p(e("input",{"onUpdate:modelValue":a[2]||(a[2]=t=>u.value=t),class:"input is-primary",type:"password",placeholder:"Password"},null,512),[[d,u.value]])]),A,s.value.isShow?(c(),w(E,{key:0,message:s.value.message,type:s.value.type},null,8,["message","type"])):y("",!0),e("div",null,[e("p",null,[m("\xBFYa eres miembro? "),S(f,{to:{name:"login"}},{default:b(()=>[m("Log in")]),_:1})])])],40,N)])}}},j=I(G,[["__scopeId","data-v-b9002928"]]);export{j as default};
