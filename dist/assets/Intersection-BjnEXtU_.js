import{Q as m,i as p,h as x,e as b,f as y,g as k,r as l,j as n}from"./index-D3djZnau.js";var M=class extends m{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:p()},t)}getOptimisticResult(e){return e.behavior=p(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var g,P;const{state:s}=e,r=super.createResult(e,t),{isFetching:a,isRefetching:i,isError:o,isRefetchError:v}=r,c=(P=(g=s.fetchMeta)==null?void 0:g.fetchMore)==null?void 0:P.direction,u=o&&c==="forward",h=a&&c==="forward",f=o&&c==="backward",d=a&&c==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:x(t,s.data),hasPreviousPage:b(t,s.data),isFetchNextPageError:u,isFetchingNextPage:h,isFetchPreviousPageError:f,isFetchingPreviousPage:d,isRefetchError:v&&!u&&!f,isRefetching:i&&!h&&!d}}};function j(e,t){return y(e,M)}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=k("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),E=e=>e?e==null?void 0:e.pages.reduce((t,s)=>{const r=new Set(t.map(i=>i.id)),a=s.data.filter(i=>!r.has(i.id));return a.forEach(i=>r.add(i.id)),[...t,...a]},[]):[],I=({hasNextPage:e,fetchNextPage:t,isFetching:s})=>{const r=l.useRef(null);return l.useEffect(()=>{const a=new IntersectionObserver(i=>{i[0].isIntersecting&&e&&!s&&t()},{root:null,rootMargin:"100px",threshold:1});return r.current&&a.observe(r.current),()=>{r.current&&a.unobserve(r.current)}},[t,e,s]),n.jsx("div",{className:"",ref:r,children:s&&n.jsx("p",{className:"flex justify-center",children:n.jsx(R,{className:"animate-spin"})})})};export{I,E as a,j as u};