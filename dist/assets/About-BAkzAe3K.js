import{a as s,u as n,j as e}from"./index-D3djZnau.js";import{P as a}from"./PageAnimationWrapper-DAna2OKQ.js";class r{async getAbout(){return(await s.get("/about")).data}}const o=new r,u=()=>n({queryKey:["about"],queryFn:()=>o.getAbout()}),c=()=>{const{data:t}=u();return t?e.jsx("div",{className:"leading-8 md:text-xl p-2",dangerouslySetInnerHTML:{__html:t==null?void 0:t.content}}):e.jsx(e.Fragment,{children:"Maglumat yok"})},m=()=>e.jsxs(a,{className:"min-h-screen",children:[e.jsx("h1",{className:"pl-3 text-2xl md:text-3xl font-semibold",children:"About us"}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx(c,{})})]});export{m as default};
