"use strict";(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[561],{1561:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(5043),i=n(2646);const r=(0,n(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;function s(e){return null!==e&&void 0!==e&&e===e.window}var d=n(579);const l=()=>{const[e,t]=(0,o.useState)(!1),n=n=>{const o=((e,t)=>{if("undefined"===typeof window)return 0;const n=t?"scrollTop":"scrollLeft";let o=0;var i;return s(e)?o=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?o=e.documentElement[n]:e&&(o=e[n]),e&&!s(e)&&"number"!==typeof o&&(o=null===(i=(e.ownerDocument||e).documentElement)||void 0===i?void 0:i[n]),o})(n.target,!0);!e&&o>350?t(!0):o<=350&&t(!1)};(0,o.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]);return(0,d.jsx)(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,d.jsx)(i.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=561.91f75a7a.chunk.js.map