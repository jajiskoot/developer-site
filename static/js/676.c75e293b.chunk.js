"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[676],{1676:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var i=t(1319),s=t(4647),a=t(9281),r=t(4019),l=t(5043),d=t(6545),m=t(854),o=t.n(m);const h=e=>{const[n,t]=(0,l.useState)({}),[i,s]=(0,l.useState)({}),[a,r]=(0,l.useState)(!1);(0,l.useEffect)((()=>{0===Object.keys(i).length&&a&&(t(""),d.A.success({message:"Success",description:"Your message has been sent!"}))}),[i,a]);return{handleChange:e=>{e.persist(),t((n=>({...n,[e.target.name]:e.target.value}))),s((n=>({...n,[e.target.name]:""})))},handleSubmit:t=>{t.preventDefault(),s(e(n));3===Object.keys(n).length&&o().post("mailto:jajiskoot@gmail.com").then((()=>{r(!0)}))},values:n,errors:i}};function c(e){let n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p=t(5639),x=t(9);const g=(0,x.Ay)("p")`
  margin-top: 1.5rem;
`,u=(0,x.Ay)("div")`
  position: relative;
  max-width: 700px;
`,j=(0,x.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var y=t(579);const v=(0,a.C)()((e=>{let{title:n,content:t,t:i}=e;return(0,y.jsxs)(u,{children:[(0,y.jsx)("h6",{children:i(n)}),(0,y.jsx)(j,{children:(0,y.jsx)(g,{children:i(t)})})]})})),b=(0,x.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,A=(0,x.Ay)("input")`
  font-size: 0.875rem;
`,f=(0,x.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,C=(0,x.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,w=(0,x.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,k=(0,a.C)()((e=>{let{name:n,placeholder:t,onChange:i,t:s}=e;return(0,y.jsxs)(b,{children:[(0,y.jsx)(w,{htmlFor:n,children:s(n)}),(0,y.jsx)(A,{placeholder:s(t),name:n,id:n,onChange:i})]})})),S=(0,a.C)()((e=>{let{name:n,placeholder:t,onChange:i,t:s}=e;return(0,y.jsxs)(f,{children:[(0,y.jsx)(w,{htmlFor:n,children:s(n)}),(0,y.jsx)(C,{placeholder:s(t),id:n,name:n,onChange:i})]})})),q=(0,x.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,z=(0,x.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,E=(0,x.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,Y=(0,x.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,F=(0,a.C)()((e=>{let{title:n,content:t,id:a,t:l}=e;const{values:d,errors:m,handleChange:o,handleSubmit:x}=h(c),g=e=>{let{type:n}=e;const t=m[n];return(0,y.jsx)(r.GP,{direction:"left",children:(0,y.jsx)(E,{erros:m[n],children:t})})};return(0,y.jsx)(q,{id:a,children:(0,y.jsxs)(i.A,{justify:"space-between",align:"middle",children:[(0,y.jsx)(s.A,{lg:12,md:11,sm:24,xs:24,children:(0,y.jsx)(r.q7,{direction:"left",children:(0,y.jsx)(v,{title:n,content:t})})}),(0,y.jsx)(s.A,{lg:12,md:12,sm:24,xs:24,children:(0,y.jsx)(r.q7,{direction:"right",children:(0,y.jsxs)(z,{autoComplete:"off",onSubmit:x,children:[(0,y.jsxs)(s.A,{span:24,children:[(0,y.jsx)(k,{type:"text",name:"name",placeholder:"Your Name",value:d.name||"",onChange:o}),(0,y.jsx)(g,{type:"name"})]}),(0,y.jsxs)(s.A,{span:24,children:[(0,y.jsx)(k,{type:"text",name:"email",placeholder:"Your Email",value:d.email||"",onChange:o}),(0,y.jsx)(g,{type:"email"})]}),(0,y.jsxs)(s.A,{span:24,children:[(0,y.jsx)(S,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:o}),(0,y.jsx)(g,{type:"message"})]}),(0,y.jsx)(Y,{children:(0,y.jsx)(p.$,{name:"submit",children:l("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.c75e293b.chunk.js.map