(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[47],{1071:function(e,a,t){e.exports=function(){"use strict";var e={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},a=function(a){var t="",l=a.parentNode.querySelector(e.CUSTOMFILELABEL);return l&&(t=l.textContent),t},t=function(e){if(e.childNodes.length>0)for(var a=[].slice.call(e.childNodes),t=0;t<a.length;t++){var l=a[t];if(3!==l.nodeType)return l}return e},l=function(a){var l=a.bsCustomFileInput.defaultText,c=a.parentNode.querySelector(e.CUSTOMFILELABEL);c&&(t(c).textContent=l)},c=!!window.File,r=function(e){if(e.hasAttribute("multiple")&&c)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var a=e.value.split("\\");return a[a.length-1]}return e.value};function m(){var a=this.parentNode.querySelector(e.CUSTOMFILELABEL);if(a){var c=t(a),m=r(this);m.length?c.textContent=m:l(this)}}function n(){for(var a=[].slice.call(this.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),t=0,c=a.length;t<c;t++)l(a[t])}var s="reset",o="change";return{init:function(t,l){void 0===t&&(t=e.CUSTOMFILE),void 0===l&&(l=e.FORM);for(var c=[].slice.call(document.querySelectorAll(t)),r=[].slice.call(document.querySelectorAll(l)),i=0,d=c.length;i<d;i++){var p=c[i];Object.defineProperty(p,"bsCustomFileInput",{value:{defaultText:a(p)},writable:!0}),m.call(p),p.addEventListener(o,m)}for(var u=0,E=r.length;u<E;u++)r[u].addEventListener(s,n),Object.defineProperty(r[u],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var a=[].slice.call(document.querySelectorAll(e.FORM)).filter((function(e){return!!e.bsCustomFileInput})),t=[].slice.call(document.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),c=0,r=t.length;c<r;c++){var i=t[c];l(i),i.bsCustomFileInput=void 0,i.removeEventListener(o,m)}for(var d=0,p=a.length;d<p;d++)a[d].removeEventListener(s,n),a[d].bsCustomFileInput=void 0}}}()},1493:function(e,a,t){"use strict";t.r(a),t.d(a,"BasicElements",(function(){return f}));var l=t(4),c=t(5),r=t(7),m=t(6),n=t(8),s=t(0),o=t.n(s),i=t(296),d=t(579),p=t.n(d),u=t(1071),E=t.n(u),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={startDate:new Date},t.handleChange=function(e){t.setState({startDate:e})},t}return Object(n.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){E.a.init()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"}," Form elements "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Form elements")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Default form"),o.a.createElement("p",{className:"card-description"}," Basic form layout "),o.a.createElement("form",{className:"forms-sample"},o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Username"),o.a.createElement(i.a.Control,{type:"text",id:"exampleInputUsername1",placeholder:"Username"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement(i.a.Control,{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement(i.a.Control,{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputConfirmPassword1"},"Confirm Password"),o.a.createElement(i.a.Control,{type:"password",className:"form-control",id:"exampleInputConfirmPassword1",placeholder:"Password"})),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Remember me")),o.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit"),o.a.createElement("button",{className:"btn btn-dark"},"Cancel"))))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Horizontal Form"),o.a.createElement("p",{className:"card-description"}," Horizontal form layout "),o.a.createElement("form",{className:"forms-sample"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{htmlFor:"exampleInputUsername2",className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text",className:"form-control",id:"exampleInputUsername2",placeholder:"Username"}))),o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{htmlFor:"exampleInputEmail2",className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"email",className:"form-control",id:"exampleInputEmail2",placeholder:"Email"}))),o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{htmlFor:"exampleInputMobile",className:"col-sm-3 col-form-label"},"Mobile"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text",className:"form-control",id:"exampleInputMobile",placeholder:"Mobile number"}))),o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{htmlFor:"exampleInputPassword2",className:"col-sm-3 col-form-label"},"Password"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"password",className:"form-control",id:"exampleInputPassword2",placeholder:"Password"}))),o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{htmlFor:"exampleInputConfirmPassword2",className:"col-sm-3 col-form-label"},"Re Password"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"password",className:"form-control",id:"exampleInputConfirmPassword2",placeholder:"Password"}))),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Remember me")),o.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit"),o.a.createElement("button",{className:"btn btn-dark"},"Cancel"))))),o.a.createElement("div",{className:"col-12 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Basic form elements"),o.a.createElement("p",{className:"card-description"}," Basic form elements "),o.a.createElement("form",{className:"forms-sample"},o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputName1"},"Name"),o.a.createElement(i.a.Control,{type:"text",className:"form-control",id:"exampleInputName1",placeholder:"Name"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Email address"),o.a.createElement(i.a.Control,{type:"email",className:"form-control",id:"exampleInputEmail3",placeholder:"Email"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputPassword4"},"Password"),o.a.createElement(i.a.Control,{type:"password",className:"form-control",id:"exampleInputPassword4",placeholder:"Password"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleSelectGender"},"Gender"),o.a.createElement("select",{className:"form-control",id:"exampleSelectGender"},o.a.createElement("option",null,"Male"),o.a.createElement("option",null,"Female"))),o.a.createElement(i.a.Group,null,o.a.createElement("label",null,"File upload"),o.a.createElement("div",{className:"custom-file"},o.a.createElement(i.a.Control,{type:"file",className:"form-control visibility-hidden",id:"customFileLang",lang:"es"}),o.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},"Upload image"))),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleInputCity1"},"City"),o.a.createElement(i.a.Control,{type:"text",className:"form-control",id:"exampleInputCity1",placeholder:"Location"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleTextarea1"},"Textarea"),o.a.createElement("textarea",{className:"form-control",id:"exampleTextarea1",rows:"4"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit"),o.a.createElement("button",{className:"btn btn-dark"},"Cancel"))))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Input size"),o.a.createElement("p",{className:"card-description"}," Add classNames like ",o.a.createElement("code",null,".form-control-lg")," and ",o.a.createElement("code",null,".form-control-sm"),". "),o.a.createElement(i.a.Group,null,o.a.createElement("label",null,"Large input"),o.a.createElement(i.a.Control,{type:"text",className:"form-control-lg",placeholder:"Username","aria-label":"Username"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",null,"Default input"),o.a.createElement(i.a.Control,{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username"})),o.a.createElement(i.a.Group,null,o.a.createElement("label",null,"Small input"),o.a.createElement(i.a.Control,{type:"text",className:"form-control-sm",placeholder:"Username","aria-label":"Username"}))))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Select size"),o.a.createElement("p",{className:"card-description"}," Add classNamees like ",o.a.createElement("code",null,".form-control-lg")," and ",o.a.createElement("code",null,".form-control-sm"),". "),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleFormControlSelect1"},"Large select"),o.a.createElement("select",{className:"form-control form-control-lg",id:"exampleFormControlSelect1"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleFormControlSelect2"},"Default select"),o.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect2"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(i.a.Group,null,o.a.createElement("label",{htmlFor:"exampleFormControlSelect3"},"Small select"),o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5")))))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Basic input groups"),o.a.createElement("p",{className:"card-description"}," Basic bootstrap input groups "),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"@")),o.a.createElement(i.a.Control,{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"}))),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text bg-primary text-white"},"$")),o.a.createElement(i.a.Control,{type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("span",{className:"input-group-text"},".00")))),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"$")),o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"0.00")),o.a.createElement(i.a.Control,{type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)"}))),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement(i.a.Control,{type:"text",className:"form-control",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-sm btn-primary",type:"button"},"Search")))),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("button",{className:"btn btn-sm btn-outline-primary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),o.a.createElement("div",{className:"dropdown-menu"},o.a.createElement("a",{className:"dropdown-item",href:"!#",onClick:function(e){return e.preventDefault()}},"Action"),o.a.createElement("a",{className:"dropdown-item",href:"!#",onClick:function(e){return e.preventDefault()}},"Another action"),o.a.createElement("a",{className:"dropdown-item",href:"!#",onClick:function(e){return e.preventDefault()}},"Something else here"),o.a.createElement("div",{role:"separator",className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"!#",onClick:function(e){return e.preventDefault()}},"Separated link"))),o.a.createElement(i.a.Control,{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}))),o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"input-group"},o.a.createElement(i.a.Control,{type:"text",className:"form-control",placeholder:"Find in facebook","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-sm btn-facebook",type:"button"},o.a.createElement("i",{className:"mdi mdi-facebook"})))))))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Checkbox Controls"),o.a.createElement("p",{className:"card-description"},"Checkbox and radio controls (default appearance is in primary color)"),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Default")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",defaultChecked:!0,className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Checked")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",disabled:!0,className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Disabled")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",disabled:!0,defaultChecked:!0,className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Disabled checked")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios1",value:""}),o.a.createElement("i",{className:"input-helper"}),"Default")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios2",value:"option2",defaultChecked:!0}),o.a.createElement("i",{className:"input-helper"}),"Selected")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios2",id:"optionsRadios3",value:"option3",disabled:!0}),o.a.createElement("i",{className:"input-helper"}),"Disabled")),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"optionsRadios2",id:"optionsRadios4",value:"option4",disabled:!0,defaultChecked:!0}),o.a.createElement("i",{className:"input-helper"}),"Selected and disabled"))))))),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-description"},"Add className ",o.a.createElement("code",null,".form-check-{color{")," for checkbox and radio controls in theme colors"),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"form-check form-check-primary"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Primary",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-success"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Success",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-info"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Info",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-danger"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Danger",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-warning"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Warning",o.a.createElement("i",{className:"input-helper"}))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,null,o.a.createElement("div",{className:"form-check form-check-primary"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio1",id:"ExampleRadio1",defaultChecked:!0})," Primary",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-success"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio2",id:"ExampleRadio2",defaultChecked:!0})," Success",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-info"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio3",id:"ExampleRadio3",defaultChecked:!0})," Info",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-danger"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"ExampleRadio4",defaultChecked:!0})," Danger",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("div",{className:"form-check form-check-warning"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio5",id:"ExampleRadio5",defaultChecked:!0})," Warning",o.a.createElement("i",{className:"input-helper"})))))))))),o.a.createElement("div",{className:"col-12 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Inline forms"),o.a.createElement("p",{className:"card-description"}," Use the ",o.a.createElement("code",null,".form-inline")," className to display a series of labels, form controls, and buttons on a single horizontal row "),o.a.createElement("form",{className:"form-inline"},o.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputName2"},"Name"),o.a.createElement(i.a.Control,{type:"text",className:"form-control mb-2 mr-sm-2",id:"inlineFormInputName2",placeholder:"Jane Doe"}),o.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroupUsername2"},"Username"),o.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"@")),o.a.createElement(i.a.Control,{type:"text",className:"form-control",id:"inlineFormInputGroupUsername2",placeholder:"Username"})),o.a.createElement("div",{className:"form-check mx-sm-2"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0})," Remember me",o.a.createElement("i",{className:"input-helper"}))),o.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Submit"))))),o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Horizontal Two column"),o.a.createElement("form",{className:"form-sample"},o.a.createElement("p",{className:"card-description"}," Personal info "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"First Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"})))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Last Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Gender"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control"},o.a.createElement("option",null,"Male"),o.a.createElement("option",null,"Female"))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Date of Birth"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a,{className:"form-control w-100",selected:this.state.startDate,onChange:this.handleChange}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Category"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control"},o.a.createElement("option",null,"Category1"),o.a.createElement("option",null,"Category2"),o.a.createElement("option",null,"Category3"),o.a.createElement("option",null,"Category4"))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Membership"),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios1",defaultChecked:!0})," Free",o.a.createElement("i",{className:"input-helper"})))),o.a.createElement("div",{className:"col-sm-5"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios2"})," Proffessional",o.a.createElement("i",{className:"input-helper"}))))))),o.a.createElement("p",{className:"card-description"}," Address "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Address 1"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"})))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"State 1"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Address 2"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"})))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Postcode"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Cirt"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(i.a.Control,{type:"text"})))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Country"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control"},o.a.createElement("option",null,"America"),o.a.createElement("option",null,"Italy"),o.a.createElement("option",null,"Russia"),o.a.createElement("option",null,"Britain"))))))))))))}}]),a}(s.Component);a.default=f},239:function(e,a,t){"use strict";var l=t(16),c=t(19),r=t(18),m=t.n(r),n=t(0),s=t.n(n),o=t(21),i=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],p=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,p=void 0===n?"div":n,u=Object(c.a)(e,i),E=Object(o.a)(t,"col"),f=[],b=[];return d.forEach((function(e){var a,t,l,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var r=c.span;a=void 0===r||r,t=c.offset,l=c.order}else a=c;var m="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+E+m:""+E+m+"-"+a),null!=l&&b.push("order"+m+"-"+l),null!=t&&b.push("offset"+m+"-"+t)})),f.length||f.push(E),s.a.createElement(p,Object(l.a)({},u,{ref:a,className:m.a.apply(void 0,[r].concat(f,b))}))}));p.displayName="Col",a.a=p},296:function(e,a,t){"use strict";var l=t(16),c=t(19),r=t(18),m=t.n(r),n=t(0),s=t.n(n),o=(t(220),t(221)),i=t(216),d=t(21),p=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],u=s.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,E=e.type,f=void 0===E?"checkbox":E,b=e.isValid,N=void 0!==b&&b,h=e.isInvalid,v=void 0!==h&&h,x=e.isStatic,y=e.as,k=void 0===y?"input":y,C=Object(c.a)(e,p),w=Object(n.useContext)(i.a),g=w.controlId,F=w.custom?[o,"custom-control-input"]:[r,"form-check-input"],I=F[0],P=F[1];return r=Object(d.a)(I,P),s.a.createElement(k,Object(l.a)({},C,{ref:a,type:f,id:t||g,className:m()(u,r,N&&"is-valid",v&&"is-invalid",x&&"position-static")}))}));u.displayName="FormCheckInput";var E=u,f=["bsPrefix","bsCustomPrefix","className","htmlFor"],b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,p=e.htmlFor,u=Object(c.a)(e,f),E=Object(n.useContext)(i.a),b=E.controlId,N=E.custom?[r,"custom-control-label"]:[t,"form-check-label"],h=N[0],v=N[1];return t=Object(d.a)(h,v),s.a.createElement("label",Object(l.a)({},u,{ref:a,htmlFor:p||b,className:m()(o,t)}))}));b.displayName="FormCheckLabel";var N=b,h=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],v=s.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,p=e.bsCustomPrefix,u=e.inline,f=void 0!==u&&u,b=e.disabled,v=void 0!==b&&b,x=e.isValid,y=void 0!==x&&x,k=e.isInvalid,C=void 0!==k&&k,w=e.feedbackTooltip,g=void 0!==w&&w,F=e.feedback,I=e.className,P=e.style,O=e.title,j=void 0===O?"":O,G=e.type,R=void 0===G?"checkbox":G,S=e.label,L=e.children,U=e.custom,A=e.as,D=void 0===A?"input":A,T=Object(c.a)(e,h),M="switch"===R||U,B=M?[p,"custom-control"]:[r,"form-check"],V=B[0],q=B[1];r=Object(d.a)(V,q);var z=Object(n.useContext)(i.a).controlId,H=Object(n.useMemo)((function(){return{controlId:t||z,custom:M}}),[z,M,t]),J=M||null!=S&&!1!==S&&!L,W=s.a.createElement(E,Object(l.a)({},T,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:C,isStatic:!J,disabled:v,as:D}));return s.a.createElement(i.a.Provider,{value:H},s.a.createElement("div",{style:P,className:m()(I,r,M&&"custom-"+R,f&&r+"-inline")},L||s.a.createElement(s.a.Fragment,null,W,J&&s.a.createElement(N,{title:j},S),(y||C)&&s.a.createElement(o.a,{type:y?"valid":"invalid",tooltip:g},F))))}));v.displayName="FormCheck",v.Input=E,v.Label=N;var x=v,y=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=s.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,p=e.className,u=e.isValid,E=e.isInvalid,f=e.lang,b=e.as,N=void 0===b?"input":b,h=Object(c.a)(e,y),v=Object(n.useContext)(i.a),x=v.controlId,k=v.custom?[o,"custom-file-input"]:[r,"form-control-file"],C=k[0],w=k[1];return r=Object(d.a)(C,w),s.a.createElement(N,Object(l.a)({},h,{ref:a,id:t||x,type:"file",lang:f,className:m()(p,r,u&&"is-valid",E&&"is-invalid")}))}));k.displayName="FormFileInput";var C=k,w=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,p=e.htmlFor,u=Object(c.a)(e,w),E=Object(n.useContext)(i.a),f=E.controlId,b=E.custom?[r,"custom-file-label"]:[t,"form-file-label"],N=b[0],h=b[1];return t=Object(d.a)(N,h),s.a.createElement("label",Object(l.a)({},u,{ref:a,htmlFor:p||f,className:m()(o,t),"data-browse":u["data-browse"]}))}));g.displayName="FormFileLabel";var F=g,I=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],P=s.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,p=e.bsCustomPrefix,u=e.disabled,E=void 0!==u&&u,f=e.isValid,b=void 0!==f&&f,N=e.isInvalid,h=void 0!==N&&N,v=e.feedbackTooltip,x=void 0!==v&&v,y=e.feedback,k=e.className,w=e.style,g=e.label,P=e.children,O=e.custom,j=e.lang,G=e["data-browse"],R=e.as,S=void 0===R?"div":R,L=e.inputAs,U=void 0===L?"input":L,A=Object(c.a)(e,I),D=O?[p,"custom"]:[r,"form-file"],T=D[0],M=D[1];r=Object(d.a)(T,M);var B=Object(n.useContext)(i.a).controlId,V=Object(n.useMemo)((function(){return{controlId:t||B,custom:O}}),[B,O,t]),q=null!=g&&!1!==g&&!P,z=s.a.createElement(C,Object(l.a)({},A,{ref:a,isValid:b,isInvalid:h,disabled:E,as:U,lang:j}));return s.a.createElement(i.a.Provider,{value:V},s.a.createElement(S,{style:w,className:m()(k,r,O&&"custom-file")},P||s.a.createElement(s.a.Fragment,null,O?s.a.createElement(s.a.Fragment,null,z,q&&s.a.createElement(F,{"data-browse":G},g)):s.a.createElement(s.a.Fragment,null,q&&s.a.createElement(F,null,g),z),(b||h)&&s.a.createElement(o.a,{type:b?"valid":"invalid",tooltip:x},y))))}));P.displayName="FormFile",P.Input=C,P.Label=F;var O=P,j=t(240),G=["bsPrefix","className","children","controlId","as"],R=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,p=e.controlId,u=e.as,E=void 0===u?"div":u,f=Object(c.a)(e,G);t=Object(d.a)(t,"form-group");var b=Object(n.useMemo)((function(){return{controlId:p}}),[p]);return s.a.createElement(i.a.Provider,{value:b},s.a.createElement(E,Object(l.a)({},f,{ref:a,className:m()(r,t)}),o))}));R.displayName="FormGroup";var S=R,L=(t(66),t(239)),U=["as","bsPrefix","column","srOnly","className","htmlFor"],A=s.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,p=e.column,u=e.srOnly,E=e.className,f=e.htmlFor,b=Object(c.a)(e,U),N=Object(n.useContext)(i.a).controlId;o=Object(d.a)(o,"form-label");var h="col-form-label";"string"===typeof p&&(h=h+" "+h+"-"+p);var v=m()(E,o,u&&"sr-only",p&&h);return f=f||N,p?s.a.createElement(L.a,Object(l.a)({ref:a,as:"label",className:v,htmlFor:f},b)):s.a.createElement(r,Object(l.a)({ref:a,className:v,htmlFor:f},b))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var D=A,T=["bsPrefix","className","as","muted"],M=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,o=void 0===n?"small":n,i=e.muted,p=Object(c.a)(e,T);return t=Object(d.a)(t,"form-text"),s.a.createElement(o,Object(l.a)({},p,{ref:a,className:m()(r,t,i&&"text-muted")}))}));M.displayName="FormText";var B=M,V=s.a.forwardRef((function(e,a){return s.a.createElement(x,Object(l.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=x.Input,V.Label=x.Label;var q=V,z=t(39),H=["bsPrefix","inline","className","validated","as"],J=Object(z.a)("form-row"),W=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,n=e.className,o=e.validated,i=e.as,p=void 0===i?"form":i,u=Object(c.a)(e,H);return t=Object(d.a)(t,"form"),s.a.createElement(p,Object(l.a)({},u,{ref:a,className:m()(n,o&&"was-validated",r&&t+"-inline")}))}));W.displayName="Form",W.defaultProps={inline:!1},W.Row=J,W.Group=S,W.Control=j.a,W.Check=x,W.File=O,W.Switch=q,W.Label=D,W.Text=B;a.a=W}}]);
//# sourceMappingURL=47.9530630b.chunk.js.map