(this["webpackJsonpvb-demo"]=this["webpackJsonpvb-demo"]||[]).push([[25],{1043:function(e,t,s){"use strict";var a=s(1),c=(s(0),s(1699)),r=s(1044),i=[{dataIndex:"avatar",key:"avatar",className:"bg-transparent text-gray-6 width-50",render:function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"vb__utils__avatar",children:Object(a.jsx)("img",{src:e,alt:"User avatar"})})})}},{title:"USER NAME",dataIndex:"userName",key:"userName",className:"bg-transparent text-gray-6",render:function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:e.name}),Object(a.jsx)("div",{className:"text-gray-4",children:e.position})]})}},{title:"LOCATION",dataIndex:"location",key:"location",className:"bg-transparent text-gray-6",render:function(e){return Object(a.jsx)("a",{className:"text-blue",children:e})}},{dataIndex:"action",key:"action",className:"bg-transparent text-right",render:function(){return Object(a.jsx)("div",{className:"text-nowrap",children:Object(a.jsx)("button",{type:"button",className:"btn btn-light",children:Object(a.jsx)("span",{className:"text-blue",children:"Add"})})})}}];t.a=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"text-nowrap text-dark font-size-50 font-weight-bold",children:["$29,931 ",Object(a.jsx)("sup",{className:"text-uppercase text-gray-6 font-size-30",children:"paid"})]}),Object(a.jsx)("div",{className:"table-responsive text-nowrap",children:Object(a.jsx)(c.a,{columns:i,dataSource:r,pagination:!1})})]})}},1044:function(e){e.exports=JSON.parse('[{"key":"1","avatar":"resources/images/avatars/5.jpg","userName":{"name":"Mary Stanform","position":"Administrator"},"location":"New York"},{"key":"2","avatar":"resources/images/avatars/1.jpg","userName":{"name":"Garry Morge","position":"Support"},"location":"Palo Alto"},{"key":"3","avatar":"resources/images/avatars/2.jpg","userName":{"name":"Silinda Veyron","position":"Developer"},"location":"Las Vegas"}]')},1045:function(e,t,s){"use strict";var a=s(1),c=(s(0),s(693)),r=s.n(c),i=s(694),n=s.n(i),l=s(1046),d=s(1047),j=s.n(d),o={fullWidth:!0,chartPadding:{right:0,left:0,top:5,bottom:0},low:0,axisY:{showGrid:!1,showLabel:!1,offset:0},axisX:{showGrid:!1},seriesBarDistance:15,plugins:[n()({anchorToPoint:!1,appendToBody:!0,seriesName:!1})]},b={draw:function(e){"bar"===e.type&&e.group.elem("line",{x1:e.x1,x2:e.x2,y1:e.y2,y2:0,stroke:"#e4e9f0","stroke-width":"10"})}};t.a=function(){return Object(a.jsxs)("div",{className:"pt-4",children:[Object(a.jsx)(r.a,{className:"height-200",data:l,options:o,type:"Bar",listener:b}),Object(a.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(a.jsxs)("div",{className:"mr-5",children:[Object(a.jsxs)("div",{className:"text-nowrap text-uppercase text-gray-4",children:[Object(a.jsx)("div",{className:"".concat(j.a.donut," ").concat(j.a.success)}),"Gross revenue"]}),Object(a.jsx)("div",{className:"font-weight-bold font-size-18 text-dark",children:"+$125,367.36"})]}),Object(a.jsxs)("div",{className:"mr-5",children:[Object(a.jsxs)("div",{className:"text-nowrap text-uppercase text-gray-4",children:[Object(a.jsx)("div",{className:"".concat(j.a.donut," ").concat(j.a.primary)}),"Gross Earnings"]}),Object(a.jsx)("div",{className:"font-weight-bold font-size-18 text-dark",children:"+$125,367.36"})]})]})]})}},1046:function(e){e.exports=JSON.parse('{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[{"className":"ct-series-a","data":[5,4,3,7,5,10,3,4,8,10,6,8]},{"className":"ct-series-b","data":[3,2,9,5,4,6,4,6,7,8,7,4]}]}')},1047:function(e,t,s){e.exports={donut:"style_donut__Mjsxx",md:"style_md__1SaBG",default:"style_default__1vTLA",primary:"style_primary__3BEZn",secondary:"style_secondary__PaUS3",success:"style_success__31byf",warning:"style_warning__16D3j",danger:"style_danger__JmR2E",info:"style_info__3tRVM",yellow:"style_yellow__2rxJk",orange:"style_orange__3F2uw",gray2:"style_gray2__3a6pd"}},1048:function(e,t,s){"use strict";var a=s(1);s(0);t.a=function(){return Object(a.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(a.jsxs)("div",{className:"mr-auto",children:[Object(a.jsx)("p",{className:"text-uppercase font-weight-bold mb-1",children:"Refunds"}),Object(a.jsx)("p",{className:"mb-0",children:"All Time Orders"})]}),Object(a.jsx)("p",{className:"font-weight-bold font-size-24 mb-0",children:"+$8,412"})]})}},1628:function(e,t,s){"use strict";s.r(t);var a=s(1),c=(s(0),s(275)),r=s(703),i=s(1043),n=s(748),l=s(1045),d=s(1048),j=s(814),o=s(815),b=s(813),x=s(755);t.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(c.a,{title:"Dashboard"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsx)("div",{className:"card-placeholder",children:Object(a.jsx)("div",{className:"card-header",children:Object(a.jsx)(r.a,{data:{title:"Ecommerce Dashboard"}})})})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-8 col-md-12",children:[Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)(i.a,{})})}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header py-0",children:Object(a.jsx)(n.a,{})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)(l.a,{})})]})]}),Object(a.jsxs)("div",{className:"col-lg-4 col-md-12",children:[Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body text-white bg-success rounded",children:Object(a.jsx)(d.a,{})})}),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)(j.a,{})})}),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)(o.a,{})})}),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)(b.a,{})})})]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(x.a,{})})}),Object(a.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(x.a,{})})}),Object(a.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(x.a,{})})})]})]})}},703:function(e,t,s){"use strict";var a=s(1),c=(s(0),function(e){var t=e.data;return Object(a.jsx)("div",{className:"vb__utils__heading",children:Object(a.jsx)("strong",{children:t.title})})});c.defaultProps={data:{title:"Basic page header"}},t.a=c},748:function(e,t,s){"use strict";var a=s(1),c=(s(0),s(403));t.a=function(){return Object(a.jsx)("div",{className:"card-header-flex",children:Object(a.jsxs)(c.a,{defaultActiveKey:"1",className:"vb-tabs-bold",children:[Object(a.jsx)(c.a.TabPane,{tab:"History"},"1"),Object(a.jsx)(c.a.TabPane,{tab:"Information"},"2"),Object(a.jsx)(c.a.TabPane,{tab:"Actions"},"3")]})})}},755:function(e,t,s){"use strict";var a=s(1),c=s(33),r=s(0),i=s(756),n=s.n(i);t.a=function(){var e={isNew:Math.random()<.5,isFavourite:Math.random()<.5,image:"resources/images/products/00".concat(Math.floor(4*Math.random())+1,".jpg"),name:"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home",price:"99.99",oldPrice:"199.99"},t=Object(r.useState)(e.isFavourite),s=Object(c.a)(t,2),i=s[0],l=s[1],d=function(e){e.preventDefault(),l(!i)};return Object(a.jsxs)("div",{className:"overflow-hidden position-relative rounded",children:[Object(a.jsx)("div",{hidden:!e.isNew,className:n.a.new,children:"New"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("a",{role:"menuitem",className:"".concat(n.a.favourite," ").concat(i?"text-dark":"text-gray-3"),onClick:d,onKeyPress:d,tabIndex:"0",children:Object(a.jsx)("i",{className:"fe fe-heart font-size-21"})}),Object(a.jsx)("div",{className:"".concat(n.a.image," border-bottom height-250 mb-3"),children:Object(a.jsx)("img",{className:"img-fluid",src:e.image,alt:e.name})}),Object(a.jsxs)("div",{className:"font-size-24 font-weight-bold text-dark mb-2",children:[e.price," ",Object(a.jsx)("del",{hidden:!e.oldPrice,className:"align-text-top font-size-14",children:e.oldPrice})]}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{className:"text-blue font-size-18",children:e.name})})]})]})}},756:function(e,t,s){e.exports={new:"style_new__S5eie",favourite:"style_favourite__Ia7sZ",thumb:"style_thumb__i4hCA",image:"style_image__22A35"}},813:function(e,t,s){"use strict";var a=s(1);s(0);t.a=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("div",{className:"bg-light text-gray-6 text-uppercase px-3 py-1 mb-2",children:"Today - 7 may 2019"}),Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsx)("table",{className:"table table-borderless text-gray-6 mb-0",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"California"}),Object(a.jsx)("td",{className:"text-right",children:Object(a.jsx)("strong",{children:"+78,366,263.00$"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Texas"}),Object(a.jsx)("td",{className:"text-right",children:Object(a.jsx)("strong",{children:"+58,165,000.00$"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Wyoming"}),Object(a.jsx)("td",{className:"text-right",children:Object(a.jsx)("strong",{children:"+26,156,267.00$"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Florida"}),Object(a.jsx)("td",{className:"text-right",children:Object(a.jsx)("strong",{children:"+18,823,026.00$"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"New York"}),Object(a.jsx)("td",{className:"text-right",children:Object(a.jsx)("strong",{children:"+8,125,642.00$"})})]})]})})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"bg-light text-gray-6 text-uppercase px-3 py-1 mb-2",children:"6 may 2019"}),Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsx)("table",{className:"table table-borderless text-muted mb-0",children:Object(a.jsx)("tbody",{children:Object(a.jsx)("tr",{children:Object(a.jsx)("td",{children:"No Items"})})})})})]})]})}},814:function(e,t,s){"use strict";var a=s(1);s(0);t.a=function(){return Object(a.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(a.jsxs)("div",{className:"mr-auto",children:[Object(a.jsx)("p",{className:"text-uppercase text-dark font-weight-bold mb-1",children:"Your profit"}),Object(a.jsx)("p",{className:"text-gray-5 mb-0",children:"Average Weekly Profit"})]}),Object(a.jsx)("p",{className:"text-success font-weight-bold font-size-24 mb-0",children:"+29,931"})]})}},815:function(e,t,s){"use strict";var a=s(1);s(0);t.a=function(){return Object(a.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(a.jsxs)("div",{className:"mr-auto",children:[Object(a.jsx)("p",{className:"text-uppercase text-dark font-weight-bold mb-1",children:"Orders"}),Object(a.jsx)("p",{className:"text-gray-5 mb-0",children:"All Time Orders"})]}),Object(a.jsx)("p",{className:"text-primary font-weight-bold font-size-24 mb-0",children:"1,800"})]})}}}]);