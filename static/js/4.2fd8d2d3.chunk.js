(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[4],{271:function(e,s,a){var t=a(33),n=a(272);"string"===typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(n,r);e.exports=n.locals||{}},272:function(e,s,a){"use strict";a.r(s);var t=a(20),n=a.n(t)()(!0);n.push([e.i,".kif_kr75OgK2ektCyNa-X{display:flex;flex-direction:column;padding:10px;text-align:left}._2fDP1g-SdxKwa4KtJcc8W5{width:50%}._2fDP1g-SdxKwa4KtJcc8W5 ._3lPedj-kaI4k6mSKoL17mp._3PmVPNbls469lzLwY-VXU8{color:darkred}._8dCUvdpqq4FvAAmGqZvYR{width:50%}._8dCUvdpqq4FvAAmGqZvYR ._1ulqCvoaBtTsxrWAhAhK26{border:1px solid red;text-align:center}\n","",{version:3,sources:["webpack://src/my_components/Dialogs/Dialogs.module.scss"],names:[],mappings:"AAAA,uBACE,YAAa,CACb,qBAAsB,CACtB,YAAa,CACb,eAAgB,CACjB,yBAGC,SAAU,CADZ,0EAKM,aAAc,CACf,wBAKH,SAAU,CADZ,iDAII,oBAAqB,CACrB,iBAAkB",sourcesContent:[".dialogs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n\r\n.dialogs_items {\r\n  width: 50%;\r\n\r\n  .dialogs_item {\r\n    &.active {\r\n      color: darkred;\r\n    }\r\n  }\r\n}\r\n\r\n.messages {\r\n  width: 50%;\r\n\r\n  .message {\r\n    border: 1px solid red;\r\n    text-align: center;\r\n  }\r\n}"],sourceRoot:""}]),n.locals={dialogs:"kif_kr75OgK2ektCyNa-X",dialogs_items:"_2fDP1g-SdxKwa4KtJcc8W5",dialogs_item:"_3lPedj-kaI4k6mSKoL17mp",active:"_3PmVPNbls469lzLwY-VXU8",messages:"_8dCUvdpqq4FvAAmGqZvYR",message:"_1ulqCvoaBtTsxrWAhAhK26"},s.default=n},278:function(e,s,a){"use strict";a.r(s);var t=a(95),n=(a(0),a(271)),r=a.n(n),i=a(12),c=a(1),d=function(e){var s="/dialogs/".concat(e.id);return Object(c.jsx)("div",{className:e.className,children:Object(c.jsxs)(i.b,{to:s,children:[e.name," ",e.age]})})},o=function(e){return Object(c.jsx)("div",{className:e.className,children:e.text})},l=a(269),m=a(268),g=Object(m.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(l.a,{component:"textarea",name:"newMessageElement",placeholder:"Enter your message"}),Object(c.jsx)("button",{children:"Add message"})]})})),A=function(e){var s=e.dialogsData.map((function(e){return Object(c.jsx)(d,{name:e.name,id:e.id,age:e.age,className:r.a.dialogs_item})})),a=e.messagesData.map((function(e){return Object(c.jsx)(o,{className:r.a.message,text:e.text})}));return Object(c.jsxs)("div",{className:r.a.dialogs,children:[Object(c.jsx)("div",{className:r.a.dialogs_items,children:s}),Object(c.jsx)("div",{className:r.a.messages,children:a}),Object(c.jsx)(g,{onSubmit:function(s){e.addMessage(s.newMessageElement)}})]})},u=a(11),x=a(8),b=Object(x.d)(Object(u.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(s){s.length>0&&e(Object(t.a)(s))}}})))(A);s.default=b}}]);
//# sourceMappingURL=4.2fd8d2d3.chunk.js.map