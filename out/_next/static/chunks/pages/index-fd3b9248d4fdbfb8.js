(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(246)}])},5361:function(e,t,s){"use strict";var n=s(5893);let i=e=>(0,n.jsx)("button",{className:"btn-primary m-3 ".concat(e.loading?"animate-pulse":""),onClick:e.onClick,children:e.text});t.Z=i},7543:function(e,t,s){"use strict";s.d(t,{R:function(){return r},f:function(){return l}});var n=s(6154);let i=n.Z.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});i.interceptors.response.use(e=>e.data.result,e=>{throw e.response.data.error.message||Error("Request failed with status ".concat(e.response.status))});let r=e=>i.post("/food",{ingredient:e}),l=e=>i.post("/recipe",{food:e})},246:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(5893),i=s(9008),r=s.n(i),l=s(7294),c=s(9473),a=s(2759),o=s(9705);let d=()=>{let[e,t]=(0,l.useState)(""),s=(0,c.I0)(),i=!(0,o.U)(e),r=e=>t(e.target.value.trim()),d=n=>{n.preventDefault(),s((0,a.$8)(e)),t("")};return(0,n.jsxs)("form",{className:"flex items-center justify-center",onSubmit:d,children:[(0,n.jsx)("input",{className:"w-64 placeholder:italic placeholder:text-slate-400 bg-white rounded py-2 px-3 shadow-md focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1",type:"text",placeholder:"냉장고에 있는 재료를 입력해주세요!",value:e,onChange:r}),(0,n.jsx)("button",{className:"btn-primary ml-5 ".concat(i&&"bg-gray/20"),type:"submit",disabled:i,children:"등록"})]})};var u=s(3222);let m=()=>{let e=(0,c.v9)(e=>e.ingredientList.ingredientList),t=(0,c.v9)(e=>e.ingredientList.selectList),s=(0,c.I0)(),i=(0,o.U)(e),r=(0,o.U)(t),l=e=>s((0,a.Gh)(e.currentTarget.id)),d=e=>s((0,a.IE)(e.currentTarget.id));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("ul",{className:"my-10 overflow-y-auto h-64 px-10",children:[!i&&(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"text-xl",children:"재료가 텅 비어있어요"}),(0,n.jsx)("img",{src:"".concat(u.O,"/sad.svg"),className:"w-12 h-12 inline-block"})]}),e.map(e=>(0,n.jsxs)("li",{className:"mb-3 flex items-center",children:[(0,n.jsx)("span",{id:e,onClick:l,className:"item-ingredient",children:e}),(0,n.jsx)("button",{className:"btn-option-del",id:e,onClick:d,children:"삭제"})]},e))]}),i&&!r&&(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"재료를 선택해주시면 요리를 추천해드릴게요!"}),(0,n.jsx)("img",{className:"w-10 h-10 inline-block",src:"".concat(u.O,"/search.svg")})]})]})};var x=s(1163),h=s(5361),p=s(7543),f=s(6530);let j=()=>{let[e,t]=(0,l.useState)(!1),s=(0,c.v9)(e=>e.ingredientList.selectList),i=(0,c.I0)(),r=(0,x.useRouter)(),a=(0,o.U)(s),d=async e=>{e.preventDefault(),t(!0);try{let e=await (0,p.R)(s.join(",")).then(e=>e.toString().trim());i((0,f.AU)(e.split("\n").map(e=>e.slice(3)))),t(!1),i((0,f.qv)([])),r.push("/answer")}catch(e){console.log(e)}};return(0,n.jsx)(n.Fragment,{children:a&&(0,n.jsx)(h.Z,{loading:e,onClick:d,text:"요리 검색하기"})})},g=()=>{let e=(0,c.v9)(e=>e.ingredientList.selectList),t=(0,c.I0)(),s=(0,o.U)(e),i=e=>t((0,a.yZ)(e.currentTarget.id));return(0,n.jsx)(n.Fragment,{children:s&&(0,n.jsxs)("div",{className:"w-64 shadow-xl flex flex-col items-center rounded-md bg-yellow/10",children:[(0,n.jsx)("p",{className:"font-bold text-xl m-3",children:"선택된 재료"}),(0,n.jsx)("ul",{className:"my-6 overflow-y-auto h-60",children:e.map(e=>(0,n.jsxs)("li",{className:"mb-3 flex items-center",children:[(0,n.jsx)("span",{className:"inline-block item-ingredient font-bold",children:e}),(0,n.jsx)("button",{className:"btn-option-del",id:e,onClick:i,children:"삭제"})]},e))}),(0,n.jsx)(j,{})]})})},b=()=>(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center mb-10",children:[(0,n.jsx)(d,{}),(0,n.jsx)(m,{}),(0,n.jsx)(g,{})]}),N=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Home"})}),(0,n.jsx)(b,{})]});var v=N},9705:function(e,t,s){"use strict";s.d(t,{U:function(){return n}});let n=e=>0!==e.length},1163:function(e,t,s){e.exports=s(880)}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);