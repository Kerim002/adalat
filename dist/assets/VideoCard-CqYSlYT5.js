import{r as d,M as o,d as r,j as e,I as n}from"./index-D3djZnau.js";import{d as c,n as x}from"./numberShorter-BUyRqg3x.js";const i=()=>d.useContext(o),m=({item:s})=>{const{language:t}=r();return e.jsxs("div",{className:"md:w-[750px] md:h-[750px] md:px-4 md:py-12 md:rounded-2xl h-[100vh] w-full bg-mainblack py-12",children:[e.jsx("video",{className:"h-80 w-full object-cover",controls:!0,autoPlay:!0,src:s.video}),e.jsx("h2",{className:"text-white text-lg p-2",children:s[`${t}_title`]})]})},p=({item:s})=>{const{language:t}=r(),{changeModal:a}=i();return e.jsxs("div",{className:" rounded-md flex flex-col md:gap-3 gap-1",children:[e.jsxs("div",{onClick:()=>a(e.jsx(m,{item:s})),className:"relative flex items-center justify-center",children:[e.jsx("span",{className:"absolute bg-black bg-opacity-30 rounded-full md:w-16 md:h-16 w-14 h-14 flex items-center justify-center",children:e.jsx(n,{className:"text-3xl text-white"})}),e.jsx("img",{src:s.cover,className:" w-full object-cover rounded-2xl aspect-[4/3] md:border-4 border-[3px] border-bronze",alt:"",onError:l=>l.target.src="/test/test3.jpg"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"truncate-lines truncate-3-lines px-3 md:text-xl  md:h-24 h-20  mb-2",children:s[`${t}_title`]}),e.jsx("hr",{className:"border-t-2 border-bronze "}),e.jsxs("div",{className:"flex px-3 items-center mt-1.5 gap-1 font-semibold md:text-sm text-xs text-bronze",children:[e.jsx("span",{className:"",children:c(s.date)}),"|",e.jsxs("span",{children:[x(s.view)," okaldy"]})]})]})]})};export{p as V};
