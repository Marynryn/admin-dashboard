"use strict";(self.webpackChunkadmin_dashboard=self.webpackChunkadmin_dashboard||[]).push([[462],{122:(e,n,r)=>{r.d(n,{A:()=>d});var t,i=r(7528),a=(r(7565),r(4385)),o=r(7929);const s=(0,a.Ay)("button")(t||(t=(0,i.A)(["\n  background-color: ",";\n  border-radius: 60px;\n  border: none;\n  font-size: 12px;\n  display:  flex;\n  gap: 8px;\n  justify-content: center;\nalign-items: center;\n  color:",";;\n  height: 44px;\n  width: 100%;\n outline: none;\n  &:hover {\n    background-color: ",";\nborder: ",";\nscale: 1.01;\ncolor: ",";\n  }\n  &:disabled {\n    background-color: rgba(29, 30, 33, 0.1);\n    color: rgba(29, 30, 33, 0.4);\n}\n@media(min-width: 768px) {\n    font-size: 14px;\n\n}\n"])),(e=>{let{$cancel:n}=e;return n?"rgba(29, 30, 33, 0.1)":"var(--green)"}),(e=>{let{cancel:n}=e;return n?"rgba(29, 30, 33, 0.4)":"#fff"}),(e=>{let{cancel:n}=e;return n?"transparent":"rgba(63, 148, 95, 1)"}),(e=>{let{cancel:n}=e;return n?" 1px solid var(--green)":"none"}),(e=>{let{cancel:n}=e;return n?"var(--green)":"#fff"})),d=e=>{let{cancel:n,...r}=e;return(0,o.jsx)(s,{$cancel:n,...r})}},7015:(e,n,r)=>{r.d(n,{nD:()=>B,SX:()=>G,XI:()=>J,Ay:()=>X});var t,i,a=r(7528),o=r(4385),s=r(7929);const d=o.Ay.div(t||(t=(0,a.A)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0 0;\n"]))),l=o.Ay.button(i||(i=(0,a.A)(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: ",";\n  border: none;\n  margin: 0 5px;\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(e=>{let{$active:n}=e;return n?"#59b17a":"#ccc"}),(e=>{let{$active:n}=e;return n?"#59b17a":"#aaa"})),c=e=>{let{totalPages:n,currentPage:r,handlePageClick:t}=e;return n<=1?null:(0,s.jsx)(d,{className:"pagination",children:[...Array(n)].map(((e,n)=>(0,s.jsx)(l,{$active:n+1===r,onClick:()=>t(n+1)},n)))})};var p=r(237),u=r(2366),x=r(7565),h=r(6937),g=r(723),m=r(3348),b=r(4926),y=r(3730),j=r(8734);const A=e=>{let{props:n,onClose:r}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(j.A,{children:"Edit data"}),(0,s.jsx)(y.Ay,{onClose:r,product:n})]})};var f=r(8649),v=r(9316);const w=e=>{let{props:n,onClose:r}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(j.A,{children:"Edit data"}),(0,s.jsx)(v.A,{onClose:r,supplier:n})]})};var k,C,q,S,E;const D=o.Ay.div(k||(k=(0,a.A)(["\ndisplay: flex;\ngap: 8px;\n"]))),Y=o.Ay.div(C||(C=(0,a.A)(["\nwidth: 32px;\nheight: 32px;\nborder-radius: 100%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: rgba(89, 177, 122, 0.50);\nborder: 1px solid rgba(89, 177, 122, 0.50);\n&:hover{\n    scale: 1.08;}\n"]))),F=o.Ay.div(q||(q=(0,a.A)(["\nwidth: 82px;\nheight: 32px;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 500;\nborder-radius: 30px;\ndisplay: flex;\ngap: 6px;\njustify-content: center;\nalign-items: center;\ncolor: rgba(89, 177, 122, 0.50);\nborder: 1px solid rgba(89, 177, 122, 0.50);\n&:hover{\n    scale: 1.08;}\n"]))),z=o.Ay.div(S||(S=(0,a.A)(["\nwidth: 32px;\nheight: 32px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 100%;\nborder: 1px solid rgba(232, 80, 80, 0.50);\n&:hover{\n    scale: 1.08;}\n"]))),I=o.Ay.svg(E||(E=(0,a.A)(["\n\n"]))),P=e=>{let{props:n}=e;const[r,t]=(0,x.useState)(!1),[i,a]=(0,x.useState)(!1),o=(0,f.zy)(),d=(0,g.wA)(),l=()=>{t(!1)},c=()=>{a(!1)},p="/suppliers"===o.pathname;return(0,s.jsxs)(s.Fragment,{children:[" ",p?(0,s.jsxs)(F,{onClick:()=>{a(!0)},children:[(0,s.jsx)(I,{width:16,height:16,style:{stroke:"var(--green)",strokeWidth:1},children:(0,s.jsx)("use",{href:"".concat(h.A,"#icon-edit")})}),"  Edit"]}):(0,s.jsxs)(D,{children:[(0,s.jsx)(Y,{onClick:()=>{t(!0)},children:(0,s.jsx)(I,{width:16,height:16,style:{stroke:"var(--green)",strokeWidth:1},children:(0,s.jsx)("use",{href:"".concat(h.A,"#icon-edit")})})}),(0,s.jsx)(z,{onClick:()=>{d((0,m.Zt)(n._id))},children:(0,s.jsx)(I,{width:16,height:16,style:{stroke:"var(--red)",strokeWidth:1},children:(0,s.jsx)("use",{href:"".concat(h.A,"#icon-trash")})})})]}),(0,s.jsx)(b.A,{isOpen:r,onClose:l,children:(0,s.jsx)(A,{onClose:l,props:n})}),(0,s.jsx)(b.A,{isOpen:i,onClose:c,children:(0,s.jsx)(w,{onClose:c,props:n})})]})},M=(e,n)=>{switch(n){case"User Info":case"Name":return(0,s.jsxs)(B,{children:[(0,s.jsx)("img",{className:"avatar",src:e.image||e.photo,alt:"Avatar",width:36,height:36}),(0,s.jsx)(G,{children:e.name})]});case"Address":return e.address;case"Products":return e.products;case"Order date":return e.order_date;case"Register date":return e.register_date;case"Delivery date":return e.date;case"Price":return e.price;case"Company":return e.suppliers;case"Product Info":case"Suppliers Info":return e.name;case"Status":return(0,s.jsx)(u.EY,{color:(0,p.Nw)(e.status),bgcolor:(0,p.wr)(e.status),children:e.status});case"Action":return(0,s.jsx)(P,{props:e});default:return e[n.toLowerCase()]}};var O,R,L,N,$,_,W;o.Ay.div(O||(O=(0,a.A)(["\n\n"])));const H=o.Ay.h3(R||(R=(0,a.A)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  display: block;\n  border-radius: 8px 8px 0 0;\n  position: sticky;\n  top: 0;\n  padding: 14px;\n  width: 100%;\n  background: #E7F1ED;\n  @media (min-width: 768px) {\n    font-size: 18px;\n  } \n  @media (min-width: 1440px) {\n    font-size: 18px;\n  }\n"]))),J=o.Ay.table(L||(L=(0,a.A)(["\n  min-width: 280px;\n  width: 100%;\n  border-collapse: collapse;\n\n  th, td {\n    border: 1px solid #ddd;\n    padding: 14px 10px;\n    text-align: left;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 14px;\n    border-top: none; \n    border-left: none;\n    @media (min-width: 768px) {\n      padding: 20px;\n      font-size: 16px;\n    }\n    @media (min-width: 1440px) {\n    }\n  }\n\n  tr:last-child td {\n    border-bottom: none;\n  }\n  tr:last-child {\n    border-radius: 0 0 8px 8px;\n  }\n  th {\n    border-top: none;\n    color: rgba(29, 30, 33, 0.40);\n  }\n\n  th:last-child {\n    border-right: none;\n  }\n\n  td:last-child {\n    border-right: none;\n  }\n\n  td:first-child {\n    border-radius: 0 0 8px 8px;\n  }\n"]))),V=o.Ay.div(N||(N=(0,a.A)(["\n  height: 100%;\n  padding-bottom: 20px;\n  overflow-x: auto;\n  &::-webkit-scrollbar {\n    padding-bottom: 15px;\n    height: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #f1f1f1; \n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 14px;\n    background: #E6E6E6;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: #555; \n  }\n"]))),B=o.Ay.div($||($=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  gap: 8px;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"]))),G=o.Ay.h4(_||(_=(0,a.A)(["\n  margin: 0;\n"]))),Z=o.Ay.div(W||(W=(0,a.A)(["\n  width: 100%;\n  border-radius: 0 0 8px 8px;\n  border: 1px solid rgba(29, 30, 33, 0.10);\n  background: #FFF;\n  overflow-x: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),X=e=>{let{columns:n,data:r,title:t}=e;const[i,a]=(0,x.useState)(1),o=5*i,d=o-5,l=r.slice(d,o),p=Math.ceil(r.length/5);return(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:t}),(0,s.jsx)(Z,{children:(0,s.jsxs)(J,{children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:n.map(((e,n)=>(0,s.jsx)("th",{children:e},n)))})}),(0,s.jsx)("tbody",{children:l.map(((e,r)=>(0,s.jsx)("tr",{children:n.map(((n,r)=>(0,s.jsx)("td",{children:M(e,n)},r)))},r)))})]})}),(0,s.jsx)(c,{totalPages:p,handlePageClick:e=>{a(e)},currentPage:i})]})}},896:(e,n,r)=>{r.d(n,{A:()=>p});var t,i,a=r(7528),o=(r(7565),r(9442)),s=r(4385),d=r(7929);const l=s.Ay.input(t||(t=(0,a.A)(["\n\noutline: none;\n\nborder-radius: 60px;\nborder: 1px solid rgba(29, 30, 33, 0.10);\nheight: 44px;\nbackground: #FFF;\nwidth:100%;\npadding: 13px 18px;\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 400;\n@media (min-width: 768px){\n    margin-bottom: 0;\n}\n    "]))),c=s.Ay.div(i||(i=(0,a.A)(["\nposition: absolute;\n  height: 8px;\n  color: var(--red);\n  font-size: 10px;\n  margin: 2px 0 4px auto;\n  text-align: right;\n  right: 10px;\n  top: 5px;\n"]))),p=e=>{let{name:n,type:r,placeholder:t}=e;const{register:i,formState:{errors:a}}=(0,o.xW)();return a[n]&&/must be a `number` type/i.test(a[n].message)&&(a[n].message="".concat(n.charAt(0).toUpperCase()+n.slice(1)," must be a number")),(0,d.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,d.jsx)("label",{htmlFor:n}),a[n]&&(0,d.jsx)(c,{children:a[n].message}),(0,d.jsx)(l,{id:n,type:r,placeholder:t,...i(n)})]})}},4926:(e,n,r)=>{r.d(n,{A:()=>b});var t,i,a,o,s=r(7528),d=r(7565),l=r(4385),c=r(6937),p=r(6396),u=r(7929);const x=l.Ay.div(t||(t=(0,s.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color:rgba(29, 30, 33, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),h=l.Ay.div(i||(i=(0,s.A)(["\nposition: relative;\n  background-color: white;\n  padding:  20px 20px;\n  border-radius: 8px;\n \n  width: 335px;\n  width: 295px;\n    @media(min-width: 375px){\n        padding:  40px 20px; \n    }\n     @media(min-width: 768px) {\n   width: 536px;\n     padding:  40px; \n}\n"]))),g=l.Ay.button(a||(a=(0,s.A)(["\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top:0;\n  padding: 14px;\n"]))),m=l.Ay.div(o||(o=(0,s.A)(["\n  \n"]))),b=e=>{let{isOpen:n,onClose:r,children:t}=e;const i=(0,d.useCallback)((()=>{r(!1)}),[r]);return(0,d.useEffect)((()=>{const e=e=>{"Escape"===e.code&&i()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[i]),n?p.createPortal((0,u.jsx)(x,{onClick:e=>{e.currentTarget===e.target&&i()},children:(0,u.jsxs)(h,{children:[(0,u.jsxs)(g,{onClick:i,children:[" ",(0,u.jsx)("svg",{width:24,height:24,style:{stroke:"var(--main-black)",strokeWidth:1},children:(0,u.jsx)("use",{href:"".concat(c.A,"#icon-x")})})]}),(0,u.jsx)(m,{children:t})]})}),document.getElementById("modal-root")):null}},2366:(e,n,r)=>{r.d(n,{Ay:()=>h,EY:()=>p});var t,i,a,o=r(7528),s=r(7015),d=r(237),l=(r(7565),r(4385)),c=r(7929);const p=l.Ay.div(t||(t=(0,o.A)(["\n  \n     color: ",";\n     padding: 4px;\n     max-width: 80px;\n    background-color:  ",";\n    border-radius: 40px;\n    text-align: center;\n      ","\n    "])),(e=>e.color),(e=>e.bgcolor),(e=>e.$isError&&"\n            text-decoration: line-through;\n        ")),u=l.Ay.h3(i||(i=(0,o.A)(["\n font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n display: block;\n\n   border-radius: 8px 8px 0 0;\n position: sticky;\n  top: 0;\n  padding: 14px;\n  width: 100%;\n  background: #E7F1ED;"]))),x=l.Ay.div(a||(a=(0,o.A)(["\n\n border-radius: 0 0 8px 8px;\n border: 1px solid rgba(29, 30, 33, 0.10);\n  background: #FFF;\n\n"]))),h=e=>{let{columns:n,data:r,title:t}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.XI,{children:[(0,c.jsx)(u,{children:t}),(0,c.jsxs)(x,{children:[(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:n.map(((e,n)=>(0,c.jsx)("th",{style:{borderLeft:"none",borderRight:"none"},children:e},n)))})}),(0,c.jsx)("tbody",{children:r.map(((e,n)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{style:{borderLeft:"none",borderRight:"none"},children:(0,c.jsx)(p,{color:(0,d.JJ)(e.type),bgcolor:(0,d.kw)(e.type),children:e.type})}),(0,c.jsx)("td",{style:{borderLeft:"none",borderRight:"none"},children:e.name}),(0,c.jsx)("td",{style:{borderLeft:"none",borderRight:"none"},children:(0,c.jsx)(p,{color:(0,d.JJ)(e.type),$isError:"Error"===e.type,children:e.amount})})]},n)))})]})]})})}},3730:(e,n,r)=>{r.d(n,{Ay:()=>C,mc:()=>v,y6:()=>k});var t,i,a,o,s,d=r(7528),l=r(7565),c=r(723),p=r(9442),u=r(4927),x=r(4385),h=r(3348),g=r(896),m=r(9198),b=r(122),y=r(9079),j=r(7929);const A=x.Ay.form(t||(t=(0,d.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n   @media (min-width: 768px){\n     margin-top: 36px;}\n"]))),f=x.Ay.div(i||(i=(0,d.A)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 40px;\n  @media (min-width: 768px){\n    width: 274px;\n  }\n"]))),v=x.Ay.div(a||(a=(0,d.A)(["\n  display: flex;\n  flex-direction: column;\n   gap: 14px;\n\n"]))),w=x.Ay.div(o||(o=(0,d.A)(["\ndisplay: none;\n@media (min-width: 768px){\n    display: block;\n    width: 100%;}\n"]))),k=x.Ay.div(s||(s=(0,d.A)(["\n  display: flex;\n  flex-direction: column;\n gap: 14px;\n\n @media (min-width: 768px){\n    flex-direction: row;\n    gap: 8px;\n    \n }\n\n"]))),C=e=>{let{onClose:n,product:r}=e;const t=(0,c.wA)(),i=(0,p.mN)({resolver:(0,u.t)(r?y.j4:y.G0),defaultValues:r||{}}),{handleSubmit:a,reset:o,setValue:s}=i;(0,l.useEffect)((()=>{if(r)for(const[e,n]of Object.entries(r))s(e,n)}),[r,s]);return(0,j.jsx)(p.Op,{...i,children:(0,j.jsx)(A,{onSubmit:a((e=>{if(r){const{_id:n,id:r,...i}=e;t((0,h.WG)({dataWithoutId:i,_id:n}))}else t((0,h.Bj)(e));n(!1),o()})),children:(0,j.jsxs)(v,{children:[(0,j.jsxs)(k,{children:[(0,j.jsx)(g.A,{style:{width:"50%"},name:"name",type:"text",placeholder:"Product Info"}),(0,j.jsx)(m.A,{name:"category",options:[{value:"Medicine",label:"Medicine"},{value:"Head",label:"Head"},{value:"Heart",label:"Heart"},{value:"Hand",label:"Hand"},{value:"Dental Care",label:"Dental Care"},{value:"Skin Care",label:"Skin Care"},{value:"Eye Care",label:"Eye Care"},{value:"Vitamins & Supplements",label:"Vitamins & Supplements"},{value:"Orthopedic Products",label:"Orthopedic Products"},{value:"Baby Care",label:"Baby Care"},{value:"Leg",label:"Leg"}]})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(g.A,{name:"stock",type:"number",placeholder:"Stock"}),(0,j.jsx)(g.A,{name:"suppliers",type:"text",placeholder:"Suppliers"})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(g.A,{name:"price",type:"text",placeholder:"Price"}),(0,j.jsx)(w,{})]}),(0,j.jsxs)(f,{children:[(0,j.jsx)(b.A,{type:"submit",children:r?"Save":"Add"}),(0,j.jsx)(b.A,{type:"button",$cancel:"true",onClick:()=>{n()},children:"Cancel"})]})]})})})}},5462:(e,n,r)=>{r.d(n,{A:()=>l,m:()=>d});var t,i=r(7528),a=r(7015),o=(r(7565),r(4385)),s=r(7929);const d=o.Ay.div(t||(t=(0,i.A)(["\nwidth: 100%;\n\npadding-bottom: 20px;\n @media (min-width: 768px) {\n\npadding-bottom: 0;\n }\n \n\n"]))),l=e=>{let{props:n}=e;const r=n.map((e=>{let{image:n,name:r,email:t,spent:i}=e;return{image:n,name:r,email:t,spent:i}}));return(0,s.jsx)(d,{children:(0,s.jsx)(a.Ay,{columns:["Name","Email","Spent"],data:r,title:"Recent Customers"})})}},9198:(e,n,r)=>{r.d(n,{A:()=>p});var t,i=r(7528),a=(r(7565),r(9442)),o=r(8164),s=r(4385),d=r(7929);const l={control:e=>({...e,backgroundColor:"#FFF",boxShadow:"none",width:"100%",borderRadius:"60px",fontSize:"12px",border:"1px solid rgba(29, 30, 33, 0.10)",height:"44px",color:"black",outline:"none","&:hover":{borderColor:"#aaa"}}),valueContainer:e=>({...e,paddingLeft:"14px"}),placeholder:e=>({...e,color:"rgba(0, 0, 0, 0.5)"}),input:e=>({...e,paddingLeft:"6px"}),singleValue:e=>({...e,color:"var(--primary-color)",textTransform:"capitalize",fontSize:"12px"}),indicatorSeparator:e=>({...e,display:"none"}),dropdownIndicator:e=>({...e,color:"black",paddingRight:"14px"}),menu:e=>({...e,borderRadius:"15px"}),menuList:e=>({...e,borderRadius:"15px",maxHeight:"114px",backgroundColor:"var(--green)",color:"white",padding:"13px 10px 13px 18px ","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-thumb":{background:"rgba(0,0,0,0.2)",borderRadius:"10px"}}),option:(e,n)=>({...e,padding:"3px 0",color:n.isFocused?"white":"rgba(255, 255, 255, 0.50)",backgroundColor:(n.isFocused,"transparent"),fontSize:"12px"})},c=s.Ay.p(t||(t=(0,i.A)(["\nposition: absolute;\n  height: 8px;\n  color: var(--red);\n  font-size: 10px;\n  margin: 2px 0 4px auto;\n  text-align: right;\n  right: 10px;\n  top: 5px;\n  z-index: 3;\n"]))),p=e=>{let{name:n,options:r}=e;const{control:t,formState:{errors:i}}=(0,a.xW)();return(0,d.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,d.jsx)("label",{htmlFor:n}),i[n]&&(0,d.jsx)(c,{children:i[n].message}),(0,d.jsx)(a.xI,{name:n,control:t,render:e=>{let{field:n}=e;return(0,d.jsx)(o.Ay,{...n,options:r,styles:l,placeholder:"Category",onChange:e=>n.onChange(e.value),value:r.find((e=>e.value===n.value))})}})]})}},9316:(e,n,r)=>{r.d(n,{A:()=>z});var t,i,a,o=r(7528),s=r(7565),d=r(723),l=r(9442),c=r(4927),p=r(4385),u=r(3348),x=r(896),h=r(9198),g=r(122),m=r(9079),b=r(9573),y=r.n(b),j=r(819),A=r(5819),f=r(6937),v=(r(2105),r(7929));(0,b.registerLocale)("en-GB",A.A);const w=p.Ay.input(t||(t=(0,o.A)(["\n  outline: none;\n  padding: 0 10px;\n  border-radius: 60px;\n  border: none;\n  background: #FFF;\n  width: 100%;\n  padding: 13px 18px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n"]))),k=p.Ay.div(i||(i=(0,o.A)(["\n  position: relative;\n  border-radius: 60px;\n  width: 100%;\n  border: 1px solid rgba(29, 30, 33, 0.10);\n  height: 44px;\n  svg {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    width: 18px;\n    height: 18px;\n    fill: white;\n    stroke: black;\n    cursor: pointer;\n  }\n"]))),C=p.Ay.div(a||(a=(0,o.A)(["\nposition: absolute;\n  height: 8px;\n  color: var(--red);\n  font-size: 10px;\n  margin: 2px 0 4px auto;\n  text-align: right;\n  right: 10px;\n  top: 5px;\n"]))),q=e=>{let{name:n}=e;const r=(0,s.useRef)(null),{setValue:t,register:i,formState:{errors:a},watch:o}=(0,l.xW)(),d=o(n);return(0,v.jsxs)(k,{children:[(0,v.jsx)(y(),{selected:d?new Date(d):null,onChange:e=>{const r=(0,j.GP)(e,"MMMM d, yyyy");t(n,r)},customInput:(0,v.jsx)(w,{placeholder:"Delivery date",...i(n)}),locale:"en-GB",placeholderText:"Delivery date",maxDate:new Date,dateFormat:"MMMM d, yyyy",ref:r,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select"}),(0,v.jsx)("svg",{onClick:()=>{r.current&&r.current.setOpen(!0)},children:(0,v.jsx)("use",{href:"".concat(f.A,"#icon-calendar")})}),a[n]&&(0,v.jsx)(C,{children:a[n].message})]})};var S,E,D=r(3730);const Y=p.Ay.form(S||(S=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n"]))),F=p.Ay.div(E||(E=(0,o.A)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 40px;\n    @media (min-width: 768px){\n    width: 274px;\n  }\n"]))),z=e=>{let{onClose:n,supplier:r}=e;const t=(0,d.wA)(),i=(0,l.mN)({resolver:(0,c.t)(r?m.iZ:m.RX),defaultValues:r||{}}),{handleSubmit:a,reset:o,setValue:p}=i;(0,s.useEffect)((()=>{if(r)for(const[e,n]of Object.entries(r))p(e,n)}),[r,p]);return(0,v.jsx)(l.Op,{...i,children:(0,v.jsx)(Y,{onSubmit:a((e=>{if(r){const{_id:n,id:r,...i}=e;t((0,u._h)({dataWithoutId:i,_id:n}))}else t((0,u.HH)(e));n(!1),o()})),children:(0,v.jsxs)(D.mc,{children:[(0,v.jsxs)(D.y6,{children:[(0,v.jsx)(x.A,{name:"name",type:"text",placeholder:"Suppliers Info"}),(0,v.jsx)(x.A,{name:"address",type:"text",placeholder:"Address"})]}),(0,v.jsxs)(D.y6,{children:[(0,v.jsx)(x.A,{name:"suppliers",type:"text",placeholder:"Company"}),(0,v.jsx)(q,{name:"date"})]}),(0,v.jsxs)(D.y6,{children:[(0,v.jsx)(x.A,{name:"amount",type:"text",placeholder:"Amount"}),(0,v.jsx)(h.A,{name:"status",options:[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}]})]}),(0,v.jsxs)(F,{children:[(0,v.jsx)(g.A,{type:"submit",children:r?"Save":"Add"}),(0,v.jsx)(g.A,{type:"button",$cancel:"true",onClick:()=>{n()},children:"Cancel"})]})]})})})}},237:(e,n,r)=>{r.d(n,{JJ:()=>t,Nw:()=>a,kw:()=>i,wr:()=>o});const t=e=>{switch(e){case"Income":return"var(--green)";case"Expense":return"var(--red)";case"Error":return"var(--main-black)";default:return"inherit"}},i=e=>{switch(e){case"Income":return"rgba(89, 177, 122, 0.10)";case"Expense":return"rgba(232, 80, 80, 0.10)";case"Error":return"rgba(29, 30, 33, 0.10)";default:return"inherit"}},a=e=>{switch(e){case"Completed":case"Active":return"var(--green)";case"Cancelled":case"Deactive":return"var(--red)";case"Confirmed":return" #8059E4";case"Pending":return" #F79042";case"Processing":return" #70A6E8";case"Shipped":return"#ffd600";case"Delivered":return"var(--main-black)";default:return"inherit"}},o=e=>{switch(e){case"Completed":case"Active":return"rgba(89, 177, 122, 0.10)";case"Cancelled":case"Deactive":return"rgba(232, 80, 80, 0.10)";case"Confirmed":return"rgba(128, 89, 228, 0.10)";case"Pending":return"rgba(247, 144, 66, 0.10)";case"Processing":return"rgba(112, 166, 232, 0.10)";case"Shipped":return"rgba(255, 214, 0, 0.1)";case"Delivered":return"rgba(29, 30, 33, 0.10)";default:return"inherit"}}},9079:(e,n,r)=>{r.d(n,{G0:()=>a,Qr:()=>i,RX:()=>d,iZ:()=>l,j4:()=>o});var t=r(7685);const i=t.Ik({email:t.Yj().trim().email().required("Email is required").matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,"Invalid email format"),password:t.Yj().required()}),a=t.Ik().shape({name:t.Yj().required("Product Info is required"),category:t.Yj().required("Category is required"),stock:t.Yj().required("Stock is required"),suppliers:t.Yj().required("Suppliers is required"),price:t.Yj().required("Price is required")}),o=t.Ik().shape({name:t.Yj(),category:t.Yj(),stock:t.Yj(),suppliers:t.Yj(),price:t.Yj()}),s=/^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/,d=t.Ik().shape({name:t.Yj().required("Name is required"),address:t.Yj().required("Address is required"),suppliers:t.Yj().required("Company is required"),date:t.Yj().matches(s,"Date must be in the format: August 1, 2023").required("Date is required"),amount:t.Yj().required("Amount is required"),status:t.Yj().oneOf(["Active","Deactive"],"Status must be either Active or Deactive").required("Status is required")}),l=t.Ik().shape({name:t.Yj().required("Name is required"),address:t.Yj().required("Address is required"),suppliers:t.Yj().required("Company is required"),date:t.Yj().matches(s,"Date must be in the format: August 1, 2023").required("Date is required"),amount:t.Yj().required("Amount is required"),status:t.Yj().oneOf(["Active","Deactive"],"Status must be either Active or Deactive").required("Status is required")})}}]);
//# sourceMappingURL=462.4ea0a803.chunk.js.map