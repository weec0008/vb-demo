(this["webpackJsonpvb-demo"]=this["webpackJsonpvb-demo"]||[]).push([[49],{1621:function(e,s,t){"use strict";t.r(s);var n=t(1),c=(t(0),t(275)),r=t(907);s.default=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(c.a,{title:"Calendar"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-lg-12",children:Object(n.jsx)("div",{className:"card card-top card-top-primary",children:Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)(r.a,{})})})})})]})}},907:function(e,s,t){"use strict";var n=t(1),c=(t(0),t(680)),r=t(665),a=t(1599),i=t(908),l=t.n(i);s.a=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"d-flex flex-wrap mb-3",children:[Object(n.jsxs)("div",{className:"mr-5 flex-grow-1",children:[Object(n.jsx)("div",{className:"text-uppercase text-dark font-weight-bold mb-3",children:"Calendars"}),Object(n.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(n.jsx)(r.a,{className:l.a.event,checked:!0,children:"Gmail"}),Object(n.jsx)(r.a,{className:l.a.event,children:"Birthdays"})]})]}),Object(n.jsxs)("div",{className:"flex-grow-1",children:[Object(n.jsx)("div",{className:"text-uppercase text-dark font-weight-bold mb-3",children:"Events"}),Object(n.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(n.jsxs)("div",{className:l.a.event,children:[Object(n.jsx)("div",{className:"vb__utils__donut vb__utils__donut--danger"}),"Meeting"]}),Object(n.jsxs)("div",{className:l.a.event,children:[Object(n.jsx)("div",{className:"vb__utils__donut vb__utils__donut--primary"}),"Holidays"]}),Object(n.jsxs)("div",{className:l.a.event,children:[Object(n.jsx)("div",{className:"vb__utils__donut vb__utils__donut--orange"}),"Milestones"]}),Object(n.jsxs)("div",{className:l.a.event,children:[Object(n.jsx)("div",{className:"vb__utils__donut vb__utils__donut--success"}),"Conference"]})]})]})]}),Object(n.jsx)(a.a,{dateCellRender:function(e){var s=function(e){var s;switch(e.date()){case 8:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:s=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event\u3002\u3002...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return s||[]}(e);return Object(n.jsx)("ul",{className:"events",children:s.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{status:e.type,text:e.content})},e.content)}))})},monthCellRender:function(e){var s=function(e){var s;return 8===e.month()&&(s=1394),s}(e);return s?Object(n.jsxs)("div",{className:"notes-month",children:[Object(n.jsx)("section",{children:s}),Object(n.jsx)("span",{children:"Backlog number"})]}):null}})]})}},908:function(e,s,t){e.exports={event:"style_event__3ibOZ"}}}]);