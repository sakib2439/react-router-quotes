"use strict";(self.webpackChunkreact_https_tasks=self.webpackChunkreact_https_tasks||[]).push([[884],{884:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var n=s(791),r=s(931),u=s(995),a=s(853),o=s(152),c="Card_card__pDnPq",i=s(184),l=function(e){return(0,i.jsx)("div",{className:c,children:e.children})},d=s(556),h="QuoteForm_form__wT+bC",f="QuoteForm_loading__dsCGA",x="QuoteForm_control__mwEvR",m="QuoteForm_actions__dUBOQ",_=function(e){var t=(0,n.useState)(!1),s=(0,o.Z)(t,2),u=s[0],a=s[1],c=(0,n.useRef)(),_=(0,n.useRef)();return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(r.NL,{when:u,message:function(e){return"Are you sure to leave this page ? You may loose all the data !"}}),(0,i.jsx)(l,{children:(0,i.jsxs)("form",{onFocus:function(){a(!0)},className:h,onSubmit:function(t){t.preventDefault();var s=c.current.value,n=_.current.value;e.onAddQuote({author:s,text:n})},children:[e.isLoading&&(0,i.jsx)("div",{className:f,children:(0,i.jsx)(d.Z,{})}),(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)("label",{htmlFor:"author",children:"Author"}),(0,i.jsx)("input",{type:"text",id:"author",ref:c})]}),(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)("label",{htmlFor:"text",children:"Text"}),(0,i.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,i.jsx)("div",{className:m,children:(0,i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},j=function(){var e=(0,u.Z)(a.KP),t=e.sendRequest,s=e.status,o=(0,r.k6)();return(0,n.useEffect)((function(){"completed"===s&&o.push("/quotes")}),[s,o]),(0,i.jsx)(_,{isLoading:"pending"===s,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=884.eeb322f3.chunk.js.map