"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[676],{1676:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var s=n(1319),i=n(4647),a=n(9281),r=n(4019),l=n(5043),d=n(6545);const o={subject:"",message:""},c=e=>{const[t,n]=(0,l.useState)(o),[s,i]=(0,l.useState)({}),[a,r]=(0,l.useState)(!1);(0,l.useEffect)((()=>{0===Object.keys(s).length&&a&&(n(o),d.A.success({message:"Email created",description:"Please continue to send the email."}))}),[s,a]);return{handleChange:e=>{e.persist(),n((t=>({...t,[e.target.name]:e.target.value}))),i((t=>({...t,[e.target.name]:""})))},handleSubmit:n=>{n.preventDefault();let s=e(t);i(s),0===Object.keys(s).length&&(window.location.href=`mailto:jacob.jiskoot@gmail.com?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.message)}`,r(!0))},values:t,errors:s}};function h(e){let t={};return e.subject||(t.subject="Subject is required"),e.message||(t.message="Message is required"),t}var m=n(5639),p=n(9);const x=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,u=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,g=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var j=n(579);const b=(0,a.C)()((e=>{let{title:t,content:n,t:s}=e;return(0,j.jsxs)(u,{children:[(0,j.jsx)("h6",{children:s(t)}),(0,j.jsx)(g,{children:(0,j.jsx)(x,{children:s(n)})})]})})),y=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,p.Ay)("input")`
  font-size: 0.875rem;
`,f=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,p.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,C=(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,a.C)()((e=>{let{name:t,value:n,placeholder:s,onChange:i,t:a}=e;return(0,j.jsxs)(y,{children:[(0,j.jsx)(C,{htmlFor:t,children:a(t)}),(0,j.jsx)(v,{placeholder:a(s),name:t,value:n,id:t,onChange:i})]})})),k=(0,a.C)()((e=>{let{name:t,value:n,placeholder:s,onChange:i,t:a}=e;return(0,j.jsxs)(f,{children:[(0,j.jsx)(C,{htmlFor:t,children:a(t)}),(0,j.jsx)(A,{placeholder:a(s),id:t,name:t,value:n,onChange:i})]})})),S=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,q=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,z=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,$=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,a.C)()((e=>{let{title:t,content:n,id:a,t:l}=e;const{values:d,errors:o,handleChange:p,handleSubmit:x}=c(h),u=e=>{let{type:t}=e;const n=o[t];return(0,j.jsx)(r.GP,{direction:"left",children:(0,j.jsx)(z,{erros:o[t],children:n})})};return(0,j.jsx)(S,{id:a,children:(0,j.jsxs)(s.A,{justify:"space-between",align:"middle",children:[(0,j.jsx)(i.A,{lg:12,md:11,sm:24,xs:24,children:(0,j.jsx)(r.q7,{direction:"left",children:(0,j.jsx)(b,{title:t,content:l(n)})})}),(0,j.jsx)(i.A,{lg:12,md:12,sm:24,xs:24,children:(0,j.jsx)(r.q7,{direction:"right",children:(0,j.jsxs)(q,{autoComplete:"off",onSubmit:x,children:[(0,j.jsxs)(i.A,{span:24,children:[(0,j.jsx)(w,{type:"text",name:"subject",placeholder:"Subject",value:d.subject,onChange:p}),(0,j.jsx)(u,{type:"subject"})]}),(0,j.jsxs)(i.A,{span:24,children:[(0,j.jsx)(k,{placeholder:"Message",value:d.message,name:"message",onChange:p}),(0,j.jsx)(u,{type:"message"})]}),(0,j.jsx)($,{children:(0,j.jsx)(m.$,{name:"submit",children:l("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.60a5dbe5.chunk.js.map