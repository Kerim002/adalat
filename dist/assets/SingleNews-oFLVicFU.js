import{u as n,c as a,d as i,j as e}from"./index-6kYjpJeT.js";import{n as m}from"./news.service-CYIdwK1x.js";import{P as c}from"./PageAnimationWrapper-kKpHZRJW.js";const o=t=>n({queryKey:["news",t],queryFn:()=>m.getNewsById(t)}),d=()=>{const{id:t}=a(),{language:r}=i();if(!t)return e.jsx("div",{children:"Seçilýän haber yoxdur."});const{data:s}=o(t);return s?e.jsxs("div",{children:[e.jsx("h1",{className:"md:text-3xl text-2xl font-semibold my-6",children:s[`${r}_title`]}),e.jsxs("div",{className:"",children:[e.jsx("img",{className:"md:h-96 h-64 w-[600px] object-cover m-auto md:mb-0 mb-3 rounded-lg md:float-left mr-4",src:s==null?void 0:s.image,alt:"Descriptive text"}),e.jsx("p",{className:"text-justify text-sm md:text-lg",children:s[`${r}_description`]})]})]}):e.jsx("div",{children:"Haber yoxdur."})},j=()=>e.jsx(c,{className:"px-2 gap-4  min-h-screen",children:e.jsx(d,{})});export{j as default};
