"use strict";(self.webpackChunkreact_https_tasks=self.webpackChunkreact_https_tasks||[]).push([[857],{857:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var s=n(683),c=n(791),r=n(931),o=n(523),a=n(556),m=n(995),d=n(853),i=n(152),l="Comments_comments__LP1KL",u="NewCommentForm_form__vpG5I",h="NewCommentForm_control__nN070",x="NewCommentForm_actions__DFNYD",j=n(184),f=function(e){var t=(0,c.useRef)(),n=e.quoteId,s=(0,m.Z)(d.Ir),r=s.sendRequest,o=s.status,i=s.error,l=function(e){e.preventDefault(),console.log("quoteId",n),r({commentData:{text:t.current.value},quoteId:n})},f=e.onAddedComment;return(0,c.useEffect)((function(){"completed"!==o||i||f()}),[o,i,f]),(0,j.jsxs)("form",{className:u,onSubmit:l,children:["pending"===o&&(0,j.jsx)("div",{className:"centered",children:(0,j.jsx)(a.Z,{})}),(0,j.jsxs)("div",{className:h,onSubmit:l,children:[(0,j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,j.jsx)("div",{className:x,children:(0,j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},_="CommentItem_item__j5Kgh",p=function(e){return(0,j.jsx)("li",{className:_,children:(0,j.jsx)("p",{children:e.text})})},N="CommentsList_comments__gEib9",C=function(e){return(0,j.jsx)("ul",{className:N,children:e.comments.map((function(e){return(0,j.jsx)(p,{text:e.text},e.id)}))})},v=function(){var e=(0,r.UO)().quoteId,t=(0,c.useState)(!1),n=(0,i.Z)(t,2),s=n[0],o=n[1],u=(0,m.Z)(d.h_,!0),h=u.sendRequest,x=u.status,_=u.data;(0,c.useEffect)((function(){h(e)}),[h,e]);var p,N=(0,c.useCallback)((function(){h(e)}),[h,e]);return"pending"===x&&(p=(0,j.jsx)("div",{className:"centered",children:(0,j.jsx)(a.Z,{})})),"completed"===x&&_&&_.length&&(p=(0,j.jsx)(C,{comments:_})),"completed"!==x||_&&_.length||(p=(0,j.jsx)("p",{className:"centered",children:"No comments were added yet!"})),(0,j.jsxs)("section",{className:l,children:[(0,j.jsx)("h2",{children:"User Comments"}),!s&&(0,j.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),s&&(0,j.jsx)(f,{quoteId:e,onAddedComment:N}),p]})},g="HighlightedQuote_quote__GLxHZ",b=function(e){return(0,j.jsxs)("figure",{className:g,children:[(0,j.jsx)("p",{children:e.text}),(0,j.jsx)("figcaption",{children:e.author})]})},q=function(){var e=(0,r.UO)(),t=(0,r.$B)(),n=e.quoteId,i=(0,m.Z)(d.jR,!0),l=i.sendRequest,u=i.status,h=i.data,x=i.error;return(0,c.useEffect)((function(){l(n)}),[l,n]),"pending"===u?(0,j.jsx)("div",{className:"centered",children:(0,j.jsx)(a.Z,{})}):x?(0,j.jsx)("p",{className:"centered",children:x}):h.text?(0,j.jsxs)(c.Fragment,{children:[(0,j.jsx)(b,(0,s.Z)({},h)),(0,j.jsx)(r.AW,{path:t.path,exact:!0,children:(0,j.jsx)("div",{className:"centered",children:(0,j.jsx)(o.rU,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),(0,j.jsx)(r.AW,{path:"".concat(t.path,"/comments"),children:(0,j.jsx)(v,{})})]}):(0,j.jsx)("p",{className:"centered",children:"Quote not found !"})}}}]);
//# sourceMappingURL=857.4e14b0e6.chunk.js.map