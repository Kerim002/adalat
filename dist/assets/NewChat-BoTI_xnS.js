import{r,j as e,G as x}from"./index-6kYjpJeT.js";import{P as m}from"./PageAnimationWrapper-kKpHZRJW.js";const h=t=>{const[n,l]=r.useState([]),[s,c]=r.useState(null);return r.useEffect(()=>{const a=new WebSocket(t);return c(a),a.onmessage=o=>{const u=JSON.parse(o.data);console.log(u),l(d=>[...d,u])},()=>{a.close()}},[]),{messages:n,sendMessage:a=>{console.log(a),s&&s.readyState===WebSocket.OPEN&&s.send(JSON.stringify({content:a,rule:"User",created_at:new Date,user_id:localStorage.getItem("userid")}))}}},f=({content:t})=>e.jsx("div",{className:"flex items-start",children:e.jsx("div",{className:"p-3 bg-darkbordo sm:text-base text-sm rounded-t-2xl rounded-e-2xl sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs",children:t})});function g(t){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 3 3 9-3 9 19-9Z"},child:[]},{tag:"path",attr:{d:"M6 12h16"},child:[]}]})(t)}const p=({sendMessage:t})=>{const[n,l]=r.useState(""),s=r.useRef(null);r.useEffect(()=>{s.current&&(s.current.style.height="auto",s.current.style.height=`${Math.min(s.current.scrollHeight,150)}px`)},[n]);const c=o=>{l(o.target.value)},i=()=>{t(n),console.log(n),l("")},a=o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),i())};return e.jsxs("div",{className:"w-full flex xl:w-[800px] bg-bgprimary gap-2 items-end h-full py-2 px-4",children:[e.jsx("textarea",{ref:s,value:n,onChange:c,onKeyDown:a,className:"w-full px-3 pt-3 pb-4 border overflow-auto  focus:outline-none bg-zinc-800 rounded-3xl resize-none ",rows:1,style:{height:"25px",maxHeight:"150px"},placeholder:"Type your message..."}),e.jsx("button",{onClick:i,className:"aspect-square h-12 border flex items-center justify-center border-slate-200 rounded-2xl bg-zinc-800",children:e.jsx(g,{className:"text-2xl"})})]})},w=({content:t})=>e.jsx("div",{className:"flex items-end justify-end",children:e.jsx("div",{className:"p-3 bg-marble bg-bgprimary text-black sm:text-base text-sm rounded-t-2xl rounded-s-2xl sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs",children:t})}),y=()=>{const{messages:t,sendMessage:n}=h(`ws://216.250.10.181:9000/api/chat/ws/?user_id=${localStorage.getItem("userid")}`),l=r.useRef(null);return console.log(t),r.useEffect(()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})},[t]),e.jsxs(m,{className:"h-[calc(100vh-116px)]  flex flex-col",children:[e.jsx("div",{className:"flex-1 flex flex-col overflow-auto h-full pt-3 gap-3",children:t.map(s=>s.rule==="User"?e.jsx(w,{content:s.content}):e.jsx(f,{content:s.content}))}),e.jsx("div",{className:"min-h-16 flex items-center justify-center  w-full",children:e.jsx(p,{sendMessage:n})})]})};export{y as default};
