import{a as s}from"./index-6kYjpJeT.js";class t{async getAll(a){return(await s.get("/laws",{params:a})).data}async getById(a){return(await s.get(`/laws/${a}`)).data}}const c=new t;export{c as l};
