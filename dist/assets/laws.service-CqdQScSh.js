import{a as s}from"./index-D3djZnau.js";class t{async getAll(a){return(await s.get("/laws",{params:a})).data}async getById(a){return(await s.get(`/laws/${a}`)).data}}const c=new t;export{c as l};
