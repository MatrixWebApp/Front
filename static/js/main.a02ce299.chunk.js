(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(4),s=c.n(r),j=c(2),a=c(0);var l=function(e){return Object(a.jsxs)("div",{id:"variables",children:[Object(a.jsx)("table",{children:e.vars.map((function(e){return Object(a.jsx)("tr",{children:Object(a.jsx)("th",{children:e})})}))}),Object(a.jsx)("div",{id:"addVariableButtonContainer",children:Object(a.jsx)("button",{id:"addVariableButton",onClick:e.addNewVariable,children:"+"})})]})},d=c(5),b=c(6),o=c(8),h=c(7),u=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"rightBlock",children:[Object(a.jsxs)("div",{id:"input",children:[Object(a.jsx)("form",{name:"expressionField",children:Object(a.jsx)("input",{})}),Object(a.jsx)("div",{id:"calculateButton",children:Object(a.jsx)("button",{children:"="})})]}),Object(a.jsx)("div",{id:"resultBlock",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"42/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"42/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"42/5"})}),Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})]})]})})]})}}]),c}(n.Component),x=i.a.createContext();var O=function(e){var t=e.num,c=void 0===t?1:t,n=e.denom,r=void 0===n?1:n,s=i.a.useState(c),l=Object(j.a)(s,2),d=l[0],b=l[1],o=i.a.useState(r),h=Object(j.a)(o,2),u=h[0],x=h[1];function O(e){x(e.target.value)}return Object(a.jsxs)("div",{class:"fraction",children:[Object(a.jsx)("div",{class:"numerator",children:Object(a.jsx)("input",{type:"text",value:d,onChange:function(e){b(e.target.value)}})}),function(){if(1!==Math.abs(u))return Object(a.jsx)("div",{class:"denominator",children:Object(a.jsx)("input",{type:"text",value:u,onChange:O})})}()]})};function v(e,t){for(var c=[],n=0;n<t;n++)c.push(e);return c}var f=0;function p(){var e="A".charCodeAt(0),t="",c=f;do{t+=String.fromCharCode(e+c%26),console.log(t),c=parseInt(c/26)}while(0!==c);return f++,t}var m=function(e){var t=Object(n.useContext)(x).deleteVariable,c=i.a.useState(e.name),r=i.a.useState(!1),s=Object(j.a)(r,2),l=s[0],d=s[1],b=i.a.useState(2),o=Object(j.a)(b,2),h=o[0],u=o[1],f=i.a.useState(2),p=Object(j.a)(f,2),m=p[0],g=p[1],C=i.a.useState([[Object(a.jsx)(O,{}),Object(a.jsx)(O,{})],[Object(a.jsx)(O,{}),Object(a.jsx)(O,{})]]),B=Object(j.a)(C,2),k=B[0],S=B[1];return Object(a.jsxs)("div",{class:"variable",id:e.id,children:[Object(a.jsxs)("div",{class:"nameBlock",children:[Object(a.jsx)("span",{class:"name",children:c}),Object(a.jsxs)("sub",{class:"size",children:[Object(a.jsx)("span",{class:"height",children:Object(a.jsx)("input",{type:"text",value:m,onChange:function(e){var t=m,c=e.target.value;""!==c&&(console.log(t,c),S((function(e){if(c>t){for(var n=[],i=0;i<c-t;i++)n.push(v(Object(a.jsx)(O,{}),h));return e.concat(n)}return e.slice(0,c)})),g(c))}})}),"|",Object(a.jsx)("span",{class:"width",children:Object(a.jsx)("input",{type:"text",value:h,onChange:function(e){var t=h,c=e.target.value;""!==c&&(S((function(e){return c>t?e.map((function(e){return e.concat(v(Object(a.jsx)(O,{}),c-t))})):e.map((function(e){return e.slice(0,c)}))})),u(c))}})})]})]}),Object(a.jsx)("div",{class:"equalSign",children:"="}),Object(a.jsx)("div",{class:"matrixBlock",children:Object(a.jsx)("table",{children:k.map((function(e){return Object(a.jsx)("tr",{children:e.map((function(e){return Object(a.jsx)("th",{children:e})}))})}))})}),Object(a.jsx)("div",{class:"augmentedZone",children:l?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{class:"augmentedMatrixBlock",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("tr",{children:Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})}),Object(a.jsx)("tr",{children:Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})}),Object(a.jsx)("tr",{children:Object(a.jsx)("th",{children:Object(a.jsx)("div",{class:"fraction",children:"1/5"})})})]})}),Object(a.jsx)("div",{class:"reduceMatrixButtonContainer",children:Object(a.jsx)("button",{class:"reduceMatrixButton",onClick:function(){d(!1)},children:"x"})})]}):Object(a.jsx)("div",{class:"augmentedButtonContainer",children:Object(a.jsx)("button",{class:"augmentedButton",onClick:function(){d(!0)},children:"x"})})}),Object(a.jsx)("div",{class:"deleteVariableButtonContainer",children:Object(a.jsx)("button",{class:"deleteVariableButton",onClick:function(){return t(e.id)},children:"x"})})]})};c(14);var g=function(){var e=i.a.useState([]),t=Object(j.a)(e,2),c=t[0],n=t[1];function r(e){n(c.map((function(t){return(null===t||void 0===t?void 0:t.props.id)===e?null:t})))}return Object(a.jsx)(x.Provider,{value:{deleteVariable:r},children:Object(a.jsxs)("body",{children:[Object(a.jsx)("header",{children:Object(a.jsx)("p",{children:"header"})}),Object(a.jsxs)("div",{id:"main",children:[Object(a.jsx)(l,{vars:c,addNewVariable:function(){n(c.concat([Object(a.jsx)(m,{deleteVariable:r,id:Date.now(),name:p()},Date.now())]))}}),Object(a.jsx)(u,{})]}),Object(a.jsx)("footer",{children:Object(a.jsx)("p",{children:"footer"})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.a02ce299.chunk.js.map