import{d as i,N as l,_ as d}from"./index.54114795.js";import{z as u,m as b,E as h,p as m,n as p,q as _,k as f,o as t,a as n,d as k,b as y,F as c,l as q,u as B,c as E}from"./vendor.c21289e2.js";const N=u({id:"main",state:()=>({obras:[]}),actions:{async obtenerDatos(){const o=b(p(i,"obras"),m("date","desc"),h(3));this.obras=[],(await _(o)).forEach(s=>{let e=s.data();e.id=s.id,this.obras.push(e),console.log(this.obras)})}}}),w={class:"row justify-content-center"},v={setup(o){const a=N();return f(()=>{a.obtenerDatos()}),(s,e)=>(t(),n(c,null,[k(l),y("div",w,[(t(!0),n(c,null,q(B(a).obras,r=>(t(),E(d,{class:"col-4 m-2",key:r.id,obra:r},null,8,["obra"]))),128))])],64))}};export{v as default};
