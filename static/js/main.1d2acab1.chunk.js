(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var i=t(1),n=t.n(i),s=t(3),j=t.n(s),r=t(6),d=t(0);var l=function(e){return Object(d.jsxs)("div",{id:"variables",children:[Object(d.jsx)("table",{children:e.vars.map((function(e){return Object(d.jsx)("tr",{children:Object(d.jsx)("th",{children:e})})}))}),Object(d.jsx)("div",{id:"addVariableButtonContainer",children:Object(d.jsx)("button",{id:"addVariableButton",onClick:e.addNewVariable,children:"+"})})]})},a=t(4),b=t(5),h=t(8),x=t(7),O=function(e){Object(h.a)(t,e);var c=Object(x.a)(t);function t(){return Object(a.a)(this,t),c.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"rightBlock",children:[Object(d.jsxs)("div",{id:"input",children:[Object(d.jsx)("form",{name:"expressionField",children:Object(d.jsx)("input",{})}),Object(d.jsx)("div",{id:"calculateButton",children:Object(d.jsx)("button",{children:"="})})]}),Object(d.jsx)("div",{id:"resultBlock",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]})]})})]})}}]),t}(i.Component),o=n.a.createContext();var u=function(e){var c=Object(i.useContext)(o).deleteVariable;return console.log(e),Object(d.jsxs)("div",{class:"variable",id:e.id,children:[Object(d.jsxs)("div",{class:"nameBlock",children:[Object(d.jsx)("span",{class:"name",children:"X"}),Object(d.jsxs)("sub",{class:"size",children:[Object(d.jsx)("span",{class:"height",children:"3"}),"|",Object(d.jsx)("span",{class:"width",children:"3"})]})]}),Object(d.jsx)("div",{class:"equalSign",children:"="}),Object(d.jsx)("div",{class:"matrixBlock",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"42/5"})}),Object(d.jsx)("th",{children:Object(d.jsx)("div",{class:"fraction",children:"1/5"})})]})]})}),Object(d.jsx)("div",{class:"augmentedZone",children:Object(d.jsx)("div",{class:"augmentedButton",children:Object(d.jsx)("button",{children:"x"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{class:"deleteVariableButton",onClick:function(){return c(e.id)},children:"x"})})]})};t(14);var v=function(){var e=n.a.useState([]),c=Object(r.a)(e,2),t=c[0],i=c[1];function s(e){i(t.filter((function(c){return c.props.id!==e})))}return Object(d.jsx)(o.Provider,{value:{deleteVariable:s},children:Object(d.jsxs)("body",{children:[Object(d.jsx)("header",{children:Object(d.jsx)("p",{children:"header"})}),Object(d.jsxs)("div",{id:"main",children:[Object(d.jsx)(l,{vars:t,addNewVariable:function(){i(t.concat([Object(d.jsx)(u,{deleteVariable:s,id:Date.now()},Date.now())])),console.log(t.length)}}),Object(d.jsx)(O,{})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"footer"})})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,i=c.getFID,n=c.getFCP,s=c.getLCP,j=c.getTTFB;t(e),i(e),n(e),s(e),j(e)}))};j.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.1d2acab1.chunk.js.map