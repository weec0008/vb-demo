(this["webpackJsonpvb-demo"]=this["webpackJsonpvb-demo"]||[]).push([[41],{1049:function(e,t,a){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(r=a(1050))&&r.__esModule?r:{default:r};t.default=s,e.exports=s},1050:function(e,t,a){"use strict";var r=a(56),s=a(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),i=r(a(1051)),o=r(a(64)),c=function(e,t){return n.createElement(o.default,Object.assign({},e,{ref:t,icon:i.default}))};c.displayName="UpOutlined";var l=n.forwardRef(c);t.default=l},1051:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},1601:function(e,t,a){"use strict";var r=a(5),s=a.n(r),n=a(6),i=a.n(n),o=a(0),c=a.n(o),l=a(4),u=a.n(l),d=a(7),p=a(22),h=a(3),m=a(16),b=a(17),f=a(19),v=a(27),j=a(14);function x(){}function O(e){e.preventDefault()}var g=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,N=function(e){return void 0!==e&&null!==e},y=function(e,t){return t===e||"number"===typeof t&&"number"===typeof e&&isNaN(t)&&isNaN(e)},C=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;Object(m.a)(this,a),(r=t.call(this,e)).onKeyDown=function(e){var t=r.props,a=t.onKeyDown,s=t.onPressEnter;if(e.keyCode===j.a.UP){var n=r.getRatio(e);r.up(e,n,null),r.stop()}else if(e.keyCode===j.a.DOWN){var i=r.getRatio(e);r.down(e,i,null),r.stop()}else e.keyCode===j.a.ENTER&&s&&s(e);if(r.recordCursorPosition(),r.lastKeyCode=e.keyCode,a){for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];a.apply(void 0,[e].concat(c))}},r.onKeyUp=function(e){var t=r.props.onKeyUp;if(r.stop(),r.recordCursorPosition(),t){for(var a=arguments.length,s=new Array(a>1?a-1:0),n=1;n<a;n++)s[n-1]=arguments[n];t.apply(void 0,[e].concat(s))}},r.onChange=function(e){var t=r.props.onChange;r.state.focused&&(r.inputting=!0),r.rawInput=r.props.parser(r.getValueFromEvent(e)),r.setState({inputValue:r.rawInput}),t(r.toNumber(r.rawInput))},r.onMouseUp=function(){var e=r.props.onMouseUp;r.recordCursorPosition(),e&&e.apply(void 0,arguments)},r.onFocus=function(){var e;r.setState({focused:!0}),(e=r.props).onFocus.apply(e,arguments)},r.onBlur=function(){var e=r.props.onBlur;r.inputting=!1,r.setState({focused:!1});var t=r.getCurrentValidValue(r.state.inputValue),a=r.setValue(t,x);if(e){var s=r.input.value,n=r.getInputDisplayValue({focus:!1,value:a});r.input.value=n,e.apply(void 0,arguments),r.input.value=s}},r.getRatio=function(e){var t=1;return e.metaKey||e.ctrlKey?t=.1:e.shiftKey&&(t=10),t},r.getFullNum=function(e){return isNaN(e)?e:/e/i.test(String(e))?Number(e).toFixed(18).replace(/\.?0+$/,""):e},r.getPrecision=function(e){if(N(r.props.precision))return r.props.precision;var t=String(e);if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var a=0;return t.indexOf(".")>=0&&(a=t.length-t.indexOf(".")-1),a},r.getInputDisplayValue=function(e){var t,a=e||r.state,s=a.focused,n=a.inputValue,i=a.value;void 0!==(t=s?n:r.toPrecisionAsStep(i))&&null!==t||(t="");var o=r.formatWrapper(t);return N(r.props.decimalSeparator)&&(o=o.toString().replace(".",r.props.decimalSeparator)),o},r.recordCursorPosition=function(){try{r.cursorStart=r.input.selectionStart,r.cursorEnd=r.input.selectionEnd,r.currentValue=r.input.value,r.cursorBefore=r.input.value.substring(0,r.cursorStart),r.cursorAfter=r.input.value.substring(r.cursorEnd)}catch(e){}},r.restoreByAfter=function(e){if(void 0===e)return!1;var t=r.input.value,a=t.lastIndexOf(e);if(-1===a)return!1;var s=r.cursorBefore.length;return r.lastKeyCode===j.a.DELETE&&r.cursorBefore.charAt(s-1)===e[0]?(r.fixCaret(s,s),!0):a+e.length===t.length&&(r.fixCaret(a,a),!0)},r.partRestoreByAfter=function(e){return void 0!==e&&Array.prototype.some.call(e,(function(t,a){var s=e.substring(a);return r.restoreByAfter(s)}))},r.isNotCompleteNumber=function(e){return isNaN(e)||""===e||null===e||e&&e.toString().indexOf(".")===e.toString().length-1},r.stop=function(){r.autoStepTimer&&clearTimeout(r.autoStepTimer)},r.down=function(e,t,a){r.pressingUpOrDown=!0,r.step("down",e,t,a)},r.up=function(e,t,a){r.pressingUpOrDown=!0,r.step("up",e,t,a)},r.saveInput=function(e){r.input=e};var s=e.value;void 0===s&&(s=e.defaultValue),r.state={focused:e.autoFocus};var n=r.getValidValue(r.toNumber(s));return r.state=Object(h.a)(Object(h.a)({},r.state),{},{inputValue:r.toPrecisionAsStep(n),value:n}),r}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.componentDidUpdate(null)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.value,r=t.onChange,s=t.max,n=t.min,i=this.state.focused;if(e){if(!y(e.value,a)||!y(e.max,s)||!y(e.min,n)){var o,c=i?a:this.getValidValue(a);o=this.pressingUpOrDown?c:this.inputting?this.rawInput:this.toPrecisionAsStep(c),this.setState({value:c,inputValue:o})}var l="value"in this.props?a:this.state.value;"max"in this.props&&e.max!==s&&"number"===typeof l&&l>s&&r&&r(s),"min"in this.props&&e.min!==n&&"number"===typeof l&&l<n&&r&&r(n)}try{if(void 0!==this.cursorStart&&this.state.focused)if(this.partRestoreByAfter(this.cursorAfter)||this.state.value===this.props.value){if(this.currentValue===this.input.value)switch(this.lastKeyCode){case j.a.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case j.a.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1)}}else{var u=this.getInputDisplayValue(this.state).length;this.cursorAfter?this.lastKeyCode===j.a.BACKSPACE?u=this.cursorStart-1:this.lastKeyCode===j.a.DELETE&&(u=this.cursorStart):u=this.input.value.length,this.fixCaret(u,u)}}catch(d){}this.lastKeyCode=null,this.pressingUpOrDown&&this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.input&&this.focus()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"getCurrentValidValue",value:function(e){var t=e;return t=""===t?"":this.isNotCompleteNumber(parseFloat(t))?this.state.value:this.getValidValue(t),this.toNumber(t)}},{key:"getValueFromEvent",value:function(e){var t=e.target.value.trim().replace(/\u3002/g,".");return N(this.props.decimalSeparator)&&(t=t.replace(this.props.decimalSeparator,".")),t}},{key:"getValidValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.min,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.max,r=parseFloat(e);return isNaN(r)?e:(r<t&&(r=t),r>a&&(r=a),r)}},{key:"setValue",value:function(e,t){var a=this.props.precision,r=this.isNotCompleteNumber(parseFloat(e))?null:parseFloat(e),s=this.state.value,n=void 0===s?null:s,i=this.state.inputValue,o=void 0===i?null:i,c="number"===typeof r?r.toFixed(a):"".concat(r),l=r!==n||c!=="".concat(o);return"value"in this.props?(o=this.toPrecisionAsStep(this.state.value),this.setState({inputValue:o},t)):this.setState({value:r,inputValue:this.toPrecisionAsStep(e)},t),l&&this.props.onChange(r),r}},{key:"getMaxPrecision",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.props,r=a.precision,s=a.step;if(N(r))return r;var n=this.getPrecision(t),i=this.getPrecision(s),o=this.getPrecision(e);return e?Math.max(o,n+i):n+i}},{key:"getPrecisionFactor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.getMaxPrecision(e,t);return Math.pow(10,a)}},{key:"focus",value:function(){this.input.focus(),this.recordCursorPosition()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"formatWrapper",value:function(e){return this.props.formatter?this.props.formatter(e):e}},{key:"toPrecisionAsStep",value:function(e){if(this.isNotCompleteNumber(e)||""===e)return e;var t=Math.abs(this.getMaxPrecision(e));return isNaN(t)?e.toString():Number(e).toFixed(t)}},{key:"toNumber",value:function(e){var t=this.props.precision,a=this.state.focused,r=e&&e.length>16&&a;return this.isNotCompleteNumber(e)||r?e:N(t)?Math.round(e*Math.pow(10,t))/Math.pow(10,t):Number(e)}},{key:"upStep",value:function(e,t){var a=this.props.step,r=this.getPrecisionFactor(e,t),s=Math.abs(this.getMaxPrecision(e,t)),n=((r*e+r*a*t)/r).toFixed(s);return this.toNumber(n)}},{key:"downStep",value:function(e,t){var a=this.props.step,r=this.getPrecisionFactor(e,t),s=Math.abs(this.getMaxPrecision(e,t)),n=((r*e-r*a*t)/r).toFixed(s);return this.toNumber(n)}},{key:"step",value:function(e,t){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3?arguments[3]:void 0;this.stop(),t&&(t.persist(),t.preventDefault());var n=this.props;if(!n.disabled){var i=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(i)){var o=this["".concat(e,"Step")](i,r),c=o>n.max||o<n.min;o>n.max?o=n.max:o<n.min&&(o=n.min),this.setValue(o,null),n.onStep&&n.onStep(o,{offset:r,type:e}),this.setState({focused:!0},(function(){a.pressingUpOrDown=!1})),c||(this.autoStepTimer=setTimeout((function(){a[e](t,r,!0)}),s?200:600))}}}},{key:"fixCaret",value:function(e,t){if(void 0!==e&&void 0!==t&&this.input&&this.input.value)try{var a=this.input.selectionStart,r=this.input.selectionEnd;e===a&&t===r||this.input.setSelectionRange(e,t)}catch(s){}}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,r=t.disabled,s=t.readOnly,n=t.useTouch,i=t.autoComplete,o=t.upHandler,l=t.downHandler,h=t.className,m=t.max,b=t.min,f=t.style,v=t.title,j=t.onMouseEnter,g=t.onMouseLeave,N=t.onMouseOver,y=t.onMouseOut,C=t.required,w=t.onClick,S=t.tabIndex,P=t.type,k=t.placeholder,E=t.id,M=t.inputMode,V=t.pattern,I=t.step,D=t.maxLength,A=t.autoFocus,F=t.name,U=t.onPaste,q=t.onInput,T=Object(p.a)(t,["prefixCls","disabled","readOnly","useTouch","autoComplete","upHandler","downHandler","className","max","min","style","title","onMouseEnter","onMouseLeave","onMouseOver","onMouseOut","required","onClick","tabIndex","type","placeholder","id","inputMode","pattern","step","maxLength","autoFocus","name","onPaste","onInput"]),K=this.state,B=K.value,L=K.focused,_=u()(a,(e={},Object(d.a)(e,h,!!h),Object(d.a)(e,"".concat(a,"-disabled"),r),Object(d.a)(e,"".concat(a,"-focused"),L),e)),z={};Object.keys(T).forEach((function(e){"data-"!==e.substr(0,5)&&"aria-"!==e.substr(0,5)&&"role"!==e||(z[e]=T[e])}));var H=!s&&!r,R=this.getInputDisplayValue(null),$=(B||0===B)&&(isNaN(B)||Number(B)>=m)||r||s,W=(B||0===B)&&(isNaN(B)||Number(B)<=b)||r||s,G=u()("".concat(a,"-handler"),"".concat(a,"-handler-up"),Object(d.a)({},"".concat(a,"-handler-up-disabled"),$)),J=u()("".concat(a,"-handler"),"".concat(a,"-handler-down"),Object(d.a)({},"".concat(a,"-handler-down-disabled"),W)),Y=n?{onTouchStart:$?x:this.up,onTouchEnd:this.stop}:{onMouseDown:$?x:this.up,onMouseUp:this.stop,onMouseLeave:this.stop},Q=n?{onTouchStart:W?x:this.down,onTouchEnd:this.stop}:{onMouseDown:W?x:this.down,onMouseUp:this.stop,onMouseLeave:this.stop};return c.a.createElement("div",{className:_,style:f,title:v,onMouseEnter:j,onMouseLeave:g,onMouseOver:N,onMouseOut:y,onFocus:function(){return null},onBlur:function(){return null}},c.a.createElement("div",{className:"".concat(a,"-handler-wrap")},c.a.createElement("span",Object.assign({unselectable:"on"},Y,{role:"button","aria-label":"Increase Value","aria-disabled":$,className:G}),o||c.a.createElement("span",{unselectable:"on",className:"".concat(a,"-handler-up-inner"),onClick:O})),c.a.createElement("span",Object.assign({unselectable:"on"},Q,{role:"button","aria-label":"Decrease Value","aria-disabled":W,className:J}),l||c.a.createElement("span",{unselectable:"on",className:"".concat(a,"-handler-down-inner"),onClick:O}))),c.a.createElement("div",{className:"".concat(a,"-input-wrap")},c.a.createElement("input",Object.assign({role:"spinbutton","aria-valuemin":b,"aria-valuemax":m,"aria-valuenow":B,required:C,type:P,placeholder:k,onPaste:U,onClick:w,onMouseUp:this.onMouseUp,className:"".concat(a,"-input"),tabIndex:S,autoComplete:i,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:H?this.onKeyDown:x,onKeyUp:H?this.onKeyUp:x,autoFocus:A,maxLength:D,readOnly:s,disabled:r,max:m,min:b,step:I,name:F,title:v,id:E,onChange:this.onChange,ref:this.saveInput,value:this.getFullNum(R),pattern:V,inputMode:M,onInput:q},z))))}}]),a}(c.a.Component);C.defaultProps={focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",max:g,min:-g,step:1,style:{},onChange:x,onKeyDown:x,onPressEnter:x,onFocus:x,onBlur:x,parser:function(e){return e.replace(/[^\w.-]+/g,"")},required:!1,autoComplete:"off"};var w=C,S=a(1049),P=a.n(S),k=a(278),E=a.n(k),M=a(75),V=a(76),I=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a},D=o.forwardRef((function(e,t){var a,r=o.useContext(M.b),n=r.getPrefixCls,c=r.direction,l=o.useContext(V.b),d=e.className,p=e.size,h=e.prefixCls,m=e.readOnly,b=I(e,["className","size","prefixCls","readOnly"]),f=n("input-number",h),v=o.createElement(P.a,{className:"".concat(f,"-handler-up-inner")}),j=o.createElement(E.a,{className:"".concat(f,"-handler-down-inner")}),x=p||l,O=u()((a={},i()(a,"".concat(f,"-lg"),"large"===x),i()(a,"".concat(f,"-sm"),"small"===x),i()(a,"".concat(f,"-rtl"),"rtl"===c),i()(a,"".concat(f,"-readonly"),m),a),d);return o.createElement(w,s()({ref:t,className:O,upHandler:v,downHandler:j,prefixCls:f,readOnly:m},b))}));D.defaultProps={step:1};t.a=D},1718:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(0),n=a(275),i=a(703),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"}}]},name:"credit-card",theme:"outlined"},c=a(181),l=function(e,t){return s.createElement(c.a,Object.assign({},e,{ref:t,icon:o}))};l.displayName="CreditCardOutlined";var u=s.forwardRef(l),d=a(1601),p=a(1699),h=a(1703),m=a(667),b=[{title:"#",dataIndex:"number",width:50},{title:"Description",dataIndex:"description",render:function(e){return Object(r.jsx)("a",{className:"btn btn-sm btn-light",href:"#",onClick:function(e){return e.preventDefault()},children:e})}},{title:"Quantity",dataIndex:"quantity",render:function(e){return Object(r.jsx)(d.a,{defaultValue:e,size:"small"})},className:"text-right"},{title:"Unit Cost",dataIndex:"unitcost",className:"text-right"},{title:"Total",dataIndex:"total",className:"text-right"},{title:"",dataIndex:"",render:function(){return Object(r.jsxs)("a",{href:"#",onClick:function(e){return e.preventDefault()},className:"btn btn-sm btn-light",children:[Object(r.jsx)("i",{className:"fe fe-trash mr-1"})," Remove"]})},className:"text-right"}],f=[{key:"1",number:"1",description:"Server hardware purchase",quantity:"35",unitcost:"$75.00",total:"$2,152.00"},{key:"2",number:"2",description:"Office furniture purchase",quantity:"21",unitcost:"$169.00",total:"$4,169.00"},{key:"3",number:"3",description:"Company Anual Dinner Catering",quantity:"58",unitcost:"$49.00",total:"$1,260.00"},{key:"4",number:"4",description:"Payment for Jan 2016",quantity:"231",unitcost:"$12.00",total:"$866.00"}],v=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"mb-4 text-uppercase",children:Object(r.jsx)("strong",{children:"Order items"})}),Object(r.jsx)("div",{className:"text-nowrap mb-4",children:Object(r.jsx)(p.a,{columns:b,dataSource:f,pagination:!1})}),Object(r.jsx)("h6",{className:"mb-4 text-uppercase",children:Object(r.jsx)("strong",{children:"Shipment details"})}),Object(r.jsxs)("div",{className:"row mb-4",children:[Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsxs)(h.a,{layout:"vertical",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(r.jsx)(m.a,{id:"checkout-email",placeholder:"Email"})})})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Phone Number",name:"phoneNumber",rules:[{required:!0,message:"Please input your Phone Number!"}],children:Object(r.jsx)(m.a,{id:"checkout-phnum",placeholder:"Phone Number"})})})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Name!"}],children:Object(r.jsx)(m.a,{id:"checkout-name",placeholder:"Name"})})})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Surname",name:"surname",rules:[{required:!0,message:"Please input your Surname!"}],children:Object(r.jsx)(m.a,{id:"checkout-surname",placeholder:"Surname"})})})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"City",name:"city",rules:[{required:!0,message:"Please input your City!"}],children:Object(r.jsx)(m.a,{id:"checkout-city",placeholder:"City"})})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please input your Address!"}],children:Object(r.jsx)(m.a,{id:"checkout-adress",placeholder:"Adress",className:"mb-3"})})}),Object(r.jsx)("h6",{className:"mb-4 text-uppercase",children:Object(r.jsx)("strong",{children:"Shipment details"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Card Number",name:"cardnum",rules:[{required:!0,message:"Please input Card Number!"}],children:Object(r.jsx)(m.a,{addonBefore:Object(r.jsx)(u,{}),placeholder:"Card Number"})})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-7",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Expiration Date",name:"expirationdate",rules:[{required:!0,message:"Please input Card Expiration Date!"}],children:Object(r.jsx)(m.a,{id:"checkout-cardexpdate",placeholder:"MM / YY"})})})}),Object(r.jsx)("div",{className:"col-md-5 pull-right",children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Card CVC",name:"cardcvc",rules:[{required:!0,message:"Please input Card CVC!"}],children:Object(r.jsx)(m.a,{id:"checkout-cardholder",placeholder:"CVC"})})})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(h.a.Item,{label:"Card Holder Name",name:"cardholdername",rules:[{required:!0,message:"Please input Card Holder Name!"}],children:Object(r.jsx)(m.a,{id:"checkout-cardholder",placeholder:"Name and Surname"})})})]})}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("h4",{className:"text-black mb-3",children:Object(r.jsx)("strong",{children:"General Info"})}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("i",{className:"fa fa-cc-visa text-primary mr-1"}),Object(r.jsx)("i",{className:"fa fa-cc-mastercard text-default mr-1"}),Object(r.jsx)("i",{className:"fa fa-cc-amex text-default"})]}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),Object(r.jsxs)("div",{className:"border-top text-dark font-size-18 pt-4 text-right",children:[Object(r.jsxs)("p",{className:"mb-1",children:["Sub - Total amount: ",Object(r.jsx)("strong",{className:"font-size-24",children:"$5,700.00"})]}),Object(r.jsxs)("p",{className:"mb-1",children:["VAT: ",Object(r.jsx)("strong",{className:"font-size-24",children:"$57.00"})]}),Object(r.jsxs)("p",{className:"mb-4",children:["Grand Total: ",Object(r.jsx)("strong",{className:"font-size-36",children:"$5,757.00"})]}),Object(r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},className:"btn btn-lg btn-success width-200 mb-2",children:"Order Now"})]})]})};t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(n.a,{title:"Cart"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-lg-12",children:Object(r.jsx)("div",{className:"card-placeholder",children:Object(r.jsx)("div",{className:"card-header",children:Object(r.jsx)(i.a,{data:{title:"Ecommerce Cart"}})})})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-lg-12",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(v,{})})})})})]})}},703:function(e,t,a){"use strict";var r=a(1),s=(a(0),function(e){var t=e.data;return Object(r.jsx)("div",{className:"vb__utils__heading",children:Object(r.jsx)("strong",{children:t.title})})});s.defaultProps={data:{title:"Basic page header"}},t.a=s}}]);