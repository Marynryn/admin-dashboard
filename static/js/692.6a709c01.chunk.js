"use strict";(self.webpackChunkadmin_dashboard=self.webpackChunkadmin_dashboard||[]).push([[692],{6937:(n,e,i)=>{i.d(e,{A:()=>t});i(7565);const t=i.p+"static/media/symbol-defs.c6bd3d7f8bace90760154bbd1100368c.svg"},9692:(n,e,i)=>{i.r(e),i.d(e,{default:()=>hn});var t,r=i(7528),o=i(1030),s=i(1918),d=i(7565),a=i(553),p=i(4385),c=i(7929);const A=(0,p.Ay)("div")(t||(t=(0,r.A)(["\n    margin: 0 8px;\n     height: 12px;\n      width: 1px;\nbackground-color: rgba(29, 30, 33, 0.40);\n "]))),l=()=>(0,c.jsx)(A,{});var x,h,g,m,u,b=i(2058),j=i(7520),y=i(8734),v=i(723),f=i(7468),w=i(6937),C=i(6396);const R=(0,p.i7)(x||(x=(0,r.A)(["\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n"]))),B=p.Ay.div(h||(h=(0,r.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(29, 30, 33, 0.3);\n  display: flex;\n  justify-content: flex-start; \n  align-items: flex-start;\n"]))),T=p.Ay.div(g||(g=(0,r.A)(["\n  background-color: rgba(247, 248, 250, 1);\n  padding: 92px 20px 20px;\n \n  width: 78px;\n  height: 100%;\nposition: relative;\n  min-height: 100vh; \n  animation: "," 0.3s ease-out;\n  @media(min-width: 768px) {\n    width: 84px;\n  }\n"])),R),W=p.Ay.button(m||(m=(0,r.A)(["\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n    position: absolute;\n  right: 0;\n  top:0;\n  padding: 20px 14px;\n"]))),z=p.Ay.div(u||(u=(0,r.A)(["\n  height: 100%;\n  display: grid;\n  grid-template-rows:auto 1fr auto;\n"]))),k=n=>{let{isOpen:e,onClose:i,children:t}=n;const r=(0,d.useCallback)((()=>{i(!1)}),[i]);return(0,d.useEffect)((()=>{const n=n=>{"Escape"===n.code&&r()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}}),[r]),e?C.createPortal((0,c.jsx)(B,{onClick:n=>{n.currentTarget===n.target&&r()},children:(0,c.jsxs)(T,{children:[(0,c.jsx)(W,{onClick:r,children:(0,c.jsx)("svg",{width:32,height:32,style:{stroke:"var(--main-black)"},children:(0,c.jsx)("use",{href:"".concat(w.A,"#icon-x")})})}),(0,c.jsx)(z,{children:t})]})}),document.getElementById("modal-root")):null};var E,J,S=i(3348);const L=(0,p.Ay)("button")(E||(E=(0,r.A)(["\nwidth: 38px;\nheight: 38px;\nborder-radius: 100%;\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\nbackground-color: var(--green);\nborder: none;\n&:hover{\n    background-color: rgba(63, 148, 95, 1);\n}\n    @media(min-width: 768px) {\n  width: 44px;\n  height: 44px;}\n"]))),O=(0,p.Ay)("svg")(J||(J=(0,r.A)(["\n    width: 14px;\n    height: 14px;\n    fill: currentColor;\n    @media(min-width: 768px) {\n        width: 16px;\n        height: 16px;\n    }\n"]))),Q=()=>{const n=(0,v.wA)();return(0,c.jsx)("div",{children:(0,c.jsx)(L,{onClick:()=>{n((0,S.je)())},children:(0,c.jsx)(O,{width:14,height:14,children:(0,c.jsx)("use",{href:"".concat(w.A,"#icon-logout")})})})})};var Y,F,U,H,I=i(477);const N=p.Ay.button(Y||(Y=(0,r.A)(["\n  display: flex;\n  outline: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  border: none;\n  width: 38px;\n  height: 38px;\n  background-color: var(--white);\n  filter: drop-shadow(0px -1px 7px rgba(71, 71, 71, 0.05));\n  &:hover{\n    scale: 1.1;\n  }\n  @media(min-width: 768px) {\n    width: 44px;\n    height: 44px;\n  }\n"]))),q=p.Ay.ul(F||(F=(0,r.A)(["\n  margin: 0;\n"]))),D=p.Ay.li(U||(U=(0,r.A)(["\n  margin-bottom: 16px;\n"]))),G=p.Ay.svg(H||(H=(0,r.A)(["\n  width: 14px;\n  height: 14px;\n  fill: rgba(220, 221, 223, 1);\n  &.active {\n    fill: rgba(63, 148, 95, 1);\n  }\n  @media(min-width: 768px) {\n    width: 16px;\n    height: 16px;\n  }\n"]))),K=n=>{let{isOpen:e,onClose:i}=n;const t=(0,o.zy)(),r=()=>{i(!1)};return(0,c.jsx)("nav",{children:(0,c.jsx)(q,{children:[{to:"/dashboard",icon:"icon-dashboard"},{to:"/orders",icon:"icon-shopping-cart"},{to:"/products",icon:"icon-Group"},{to:"/customers",icon:"icon-pharmacy"},{to:"/suppliers",icon:"icon-users"}].map((n=>(0,c.jsx)(D,{children:(0,c.jsx)(I.k2,{to:n.to,className:n=>{let{isActive:e}=n;return e?"active":""},onClick:r,children:(0,c.jsx)(N,{children:(0,c.jsx)(G,{className:t.pathname===n.to?"active":"",children:(0,c.jsx)("use",{href:"".concat(w.A,"#").concat(n.icon)})})})})},n.to)))})})};var M,Z,V,P,X,_;const $=(0,p.Ay)("div")(M||(M=(0,r.A)(["\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n        @media(min-width: 375px) {\n  gap: 20px;\n}\n        @media(min-width: 768px) {\n  gap: 32px;\n}\n        @media(min-width: 1440px) {\n  gap: 62px;\n}\n    \n  "]))),nn=(0,p.Ay)("div")(Z||(Z=(0,r.A)(["\nposition: relative;\n    display: flex;\n    padding-bottom: 15px;\n    justify-content: flex-start;\ngap: 10px;\n        @media(min-width: 375px) {\n  gap: 20px;\n}\n    &::after {\n        content: '';\n        position: absolute;\n        bottom: 0; \n        left: -20px;\n        right: -20px;\n        height: 1px; \n        background-color: rgba(29, 30, 33, 0.10); \n    }\n\n   @media(min-width: 768px) {\n  gap: 16px;\n}\n   @media(min-width: 1440px) {\n    justify-content: space-between;\n}\n "]))),en=(0,p.Ay)("div")(V||(V=(0,r.A)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n "]))),tn=(0,p.Ay)("div")(P||(P=(0,r.A)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n      @media(min-width: 1440px) {\n  display: none;}\n "]))),rn=(0,p.Ay)("div")(X||(X=(0,r.A)([" \n   display: none;\n      @media(min-width: 1440px) { \n        display: flex;\n    justify-content: center;\n    align-items: center;\n }\n "]))),on=(0,p.Ay)("button")(_||(_=(0,r.A)(["\n   border: none;\n    background-color: transparent; \n    outline: none;\n    &:hover{\n        scale: 1.03;\n    }\n "]))),sn=()=>{const[n,e]=(0,d.useState)(!1),i=(0,o.zy)(),t=(0,v.d4)(f.mB),r=(n=>{switch(n){case"/dashboard":return"Dashboard";case"/orders":return" All orders";case"/customers":return" All customers";case"/suppliers":return" All suppliers";case"/products":return" All products";default:return"Not found"}})(i.pathname);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(nn,{children:[(0,c.jsx)(tn,{children:(0,c.jsx)(on,{type:"button",onClick:()=>{e(!n)},children:(0,c.jsx)("svg",{width:32,height:32,style:{stroke:"var(--main-black)",strokeWidth:1},children:(0,c.jsx)("use",{href:"".concat(w.A,"#icon-burger")})})})}),(0,c.jsxs)($,{children:[(0,c.jsx)(b.A,{}),(0,c.jsxs)("div",{children:[(0,c.jsx)(y.A,{children:"Medicine store"}),(0,c.jsxs)(en,{children:[(0,c.jsx)(j.A,{children:r}),(0,c.jsx)(l,{}),(0,c.jsxs)(j.A,{children:[" ",t.email]})]})]})]}),(0,c.jsx)(rn,{children:(0,c.jsx)(Q,{})})]}),(0,c.jsxs)(k,{isOpen:n,onClose:e,children:[(0,c.jsx)(K,{isOpen:n,onClose:e}),(0,c.jsx)("div",{style:{marginBottom:0,marginTop:"auto"},children:(0,c.jsx)(Q,{})})]})]})};var dn,an;const pn=p.Ay.div(dn||(dn=(0,r.A)(["\ndisplay: none;\n   \n      @media(min-width: 1440px) {\n    display: flex;\n     position: relative;\n    padding-top: 40px ;\n    padding-right: 18px;\n    height: 100%;\n    width: 62px;\n}\n     \n"]))),cn=p.Ay.div(an||(an=(0,r.A)(["\n      content: '';\n       position: absolute;\n       top:0;\n        bottom: -20px; \n       width: 1px;\n        right:0;\n        height: calc(100vh - 85px); \n        background-color: rgba(29, 30, 33, 0.10); \n"]))),An=()=>(0,c.jsxs)(pn,{children:[(0,c.jsx)(K,{}),(0,c.jsx)(cn,{})]});var ln;const xn=(0,p.Ay)("div")(ln||(ln=(0,r.A)(["\n   padding: 17px 15px 20px 15px;\n\n        @media(min-width: 375px) {\nwidth: 375px;\nmargin: 0 auto;\n   padding: 17px 20px 20px;\n \n\n   box-sizing: border-box;}\n    @media(min-width: 768px) {\n padding: 15px 32px 40px 32px;\nwidth: 768px;\n\n\n    }\n\n        @media(min-width: 1440px) {\n padding: 15px 40px 40px 18px;\nwidth: 1440px;\n\n\n    }\n"]))),hn=()=>(0,c.jsxs)(xn,{children:[(0,c.jsx)(sn,{}),(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)(An,{}),(0,c.jsx)(d.Suspense,{fallback:(0,c.jsx)(a.A,{}),children:(0,c.jsx)(o.sv,{})})]}),(0,c.jsx)(s.l$,{position:"top-right",reverseOrder:!1})]})},2058:(n,e,i)=>{i.d(e,{A:()=>l});var t=i(7528),r=(i(7565),i(4385));var o,s,d=i(1030),a=i(477),p=i(7929);const c=(0,r.Ay)("img")(o||(o=(0,t.A)(["\n       width: ",";\n  height: ",";\n  @media(min-width: 768px) {\n      width: ",";\n  height: ",";\n}\n"])),(n=>{let{isLoginPage:e}=n;return e?"44px":"32px"}),(n=>{let{isLoginPage:e}=n;return e?"44px":"32px"}),(n=>{let{isLoginPage:e}=n;return e?"44px":"40px"}),(n=>{let{isLoginPage:e}=n;return e?"44px":"40px"})),A=(0,r.Ay)("div")(s||(s=(0,t.A)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n   \n"]))),l=()=>{const n="/login"===(0,d.zy)().pathname?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUXSURBVHgBvVZ9bFNVFD/33vexritrZzccCBtLwIEGJ6AOTEAmKjJJWIYYUIwQozGgzmgikoghGEnEAP4hEqIwpqDhQ5DNZBKSISEkGBQc24CoWxxsYx+lW0e7vo97r7cbbde1HW+C+yWv9+u88/ude+85rwhGgFkH977ebWhjh7NxyWrXyoI5X781ebIGFiCBRUz/bvdSn6HtxLex6zE02Fd7JtTdARZwO38REJm7rdrq1Bxj1daygP8LlgUgjrhVW0DYsu2o7MDWqwdsmbtWFMBoCECAmISQL9R37lniHF+xsuzDn75vkgh5IpG95SwYDgTjgA2TUxyh84+OzfpW43VGS8ULG/yG9o5H63aaVBgpcOmuCSAIGSohv8iYVKVJ0uVVhU+e3l+3ZVqzt2VRdQv9ImiYczWTYcqiVyHfnXut7U4FpErKJbdq25bnkqquB2vGd5reRV7TXP/JmSP5QUqzKOVgiGgpDxFHyRUsmRsWF12pgU2JBTxddWAmBpHnRAxoPHGKrHTZNHJ47LiLx/642VBWr/MLAaplmQzAFGRUkKFbtijSRxER4l60zEfzzeKqQwsooQQzhBijwerFy0+i2YcqnvHowWpIAgmjy7mOjIXcdbTErwc/MijvP1NTRBttxWOKvthyQ7ThnQivqUipKc5b9eq5zta/Y73zEsmrBbMj8ocCQdOMcROK+mwHP74RDK6ObuqQNOcibjR0NTpOVVLONno9j8T5Z5CeNA2FJpZrT1vkT9n/ts/oXR23GjNMdgQDsBOl2g9sZHVAlsie/Lx6d5Br74MV8HATK04hEp2Wnv87cPYsjESAStCOa/q1NcOxiTT0qETt7Y/2Fi9CsTYpRPnRlHKyNUofSiiAJajbEsKtL83oaWRgLIWEQJChOk+OkR3NGtUcMXeC84hNCG7VWdFr0GJIAow5Q/GT6Gyt76/7KaNxdYIA8TsVx6d+s88hqtzDUeJwE3U3RrFdqF+xs7Ij0LcWkglINCkqWL1wNSGOHOFOp5pedlMPFIvIZ8YsRo4gnPscHnRNerfg4O4yDiwPRiQAuGlw7d4YciDXp9gnLvTpvW+aQB9I5jC8EzaibGz25DQaDNbBMMApCjHiZlkoEiKFPcpY6clJue+pq4H2LQY3p4eJ+MDPQD/cithdsn3rsulrtis2tcpkNDMZuSq4pSWTMo9UNno/0JiRFgkCoVMM+NSBEYIsJWPd9WDHspusryjydv/FR/01oL8RjyLJHemK/b260vJvJh57rpQBO6pgfDRh5ByZBTmun5PVQHitdu3zbXrnARmU8kw8bvuf/qbzogyj2BIcKruIYY6vOKS0XSRd3at65z3eR6n7TMmL5WABSb+GCEi7gmQf1Y2Nrbi1kmDphlB9QgLUgzBp5uJCZtgz/lGo4zdJn93X5O8o9bUZx4Omb5adyOvAIpIK6GHdayQiH77HnunoDvrWvzGn9PhXJ9j4dp+n0ASULc48v93QH1OJVKbzq3MNylIjL4/gf1ZCATW8Lm1H7ebFbjW78Mv8zy6KqYutPxS93BkMlPPQl2cQTFOHO0FCrXvrtpVIQJoFeW14Tnz/bUPJ7wYS7gAjUKiAchr+KzhYFppwBzgzF8hYrYRRQJyAzW2bczWmT0lNcTXAKCBOQIOnIU/Gsv553qamwfOyJHeBVaeYt1m1jbsDbtl9pUvvWo4QMgfPny1ZeXjqvp3zRP4Pe74OLAd+LX3lHILVYAX/Akg3NEppHOpAAAAAAElFTkSuQmCC";return(0,p.jsx)(A,{children:(0,p.jsx)(a.k2,{to:"/",style:{height:"32px",outline:"none"},children:(0,p.jsx)(c,{src:n,alt:"logo"})})})}},7520:(n,e,i)=>{i.d(e,{A:()=>a});var t,r=i(7528),o=(i(7565),i(4385)),s=i(7929);const d=(0,o.Ay)("h5")(t||(t=(0,r.A)(["\n\n    font-size: 10px;\nfont-style: normal;\nfont-weight: 400;\ncolor: rgba(29, 30, 33, 0.40);\n\n\n        @media(min-width: 375px) {\n font-size: 12px;\n}\n\n"]))),a=n=>{let{children:e}=n;return(0,s.jsx)(d,{children:e})}},8734:(n,e,i)=>{i.d(e,{A:()=>a});var t,r=i(7528),o=(i(7565),i(4385)),s=i(7929);const d=(0,o.Ay)("h2")(t||(t=(0,r.A)(["\nfont-size: 20px;\nfont-weight: 600;\nmargin-bottom: 4px;\n@media(min-width: 768px) {\n    font-size: 24px;\n}\n "]))),a=n=>{let{children:e}=n;return(0,s.jsx)(d,{children:e})}}}]);
//# sourceMappingURL=692.6a709c01.chunk.js.map