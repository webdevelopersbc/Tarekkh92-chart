(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[49],{1482:function(e,a,r){"use strict";r.r(a),r.d(a,"Progress",(function(){return o}));var t=r(4),n=r(5),c=r(7),l=r(6),s=r(8),i=r(0),m=r.n(i),d=r(282),o=function(e){function a(){return Object(t.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Progress"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Progress")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Colored Progressbar"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"variant={color}")," for theme colors"),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10}),m.a.createElement(d.a,{variant:"primary",now:25}),m.a.createElement(d.a,{variant:"info",now:50}),m.a.createElement(d.a,{variant:"warning",now:75}),m.a.createElement(d.a,{variant:"danger",now:100}))))),m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Progressbar Striped"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"striped"),"."),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10,striped:!0}),m.a.createElement(d.a,{variant:"primary",now:25,striped:!0}),m.a.createElement(d.a,{variant:"info",now:50,striped:!0}),m.a.createElement(d.a,{variant:"warning",now:75,striped:!0}),m.a.createElement(d.a,{variant:"danger",now:100,striped:!0}))))),m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Striped Animated"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"animated"),"."),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10,animated:!0}),m.a.createElement(d.a,{variant:"primary",now:25,animated:!0}),m.a.createElement(d.a,{variant:"info",now:50,animated:!0}),m.a.createElement(d.a,{variant:"warning",now:75,animated:!0}),m.a.createElement(d.a,{variant:"danger",now:100,animated:!0}))))),m.a.createElement("div",{className:"col-md-6 grid-margin grid-margin-md-0 stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"With Label"),m.a.createElement("p",{className:"page-description"},"Progress bar with labels"),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"danger",className:"progress-lg",now:60,label:"600%"}),m.a.createElement(d.a,{variant:"success",className:"progress-lg",now:90,label:"90%"}),m.a.createElement(d.a,{variant:"warning",className:"progress-lg",now:60,label:"60% complete"}),m.a.createElement(d.a,{variant:"info",className:"progress-lg",now:88,label:"88% complete"}))))),m.a.createElement("div",{className:"col-md-6 stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Progressbar Sizes"),m.a.createElement("p",{className:"page-description"},"Use className ",m.a.createElement("code",null,".progress-sm"),", ",m.a.createElement("code",null,".progress-lg"),", ",m.a.createElement("code",null,".progress-xl")),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"info",className:"progress-sm",now:25}),m.a.createElement(d.a,{variant:"info",className:"progress",now:50}),m.a.createElement(d.a,{variant:"info",className:"progress-lg",now:75}),m.a.createElement(d.a,{variant:"info",className:"progress-xl",now:100})))))))}}]),a}(i.Component);a.default=o},230:function(e,a,r){"use strict";r.d(a,"b",(function(){return c})),r.d(a,"a",(function(){return l}));var t=r(0),n=r.n(t);function c(e,a){var r=0;return n.a.Children.map(e,(function(e){return n.a.isValidElement(e)?a(e,r++):e}))}function l(e,a){var r=0;n.a.Children.forEach(e,(function(e){n.a.isValidElement(e)&&a(e,r++)}))}},282:function(e,a,r){"use strict";var t=r(16),n=r(19),c=r(18),l=r.n(c),s=r(0),i=r.n(s),m=r(21),d=r(230),o=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],E=["isChild"],p=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"],v=1e3;function u(e,a,r){var t=(e-a)/(r-a)*100;return Math.round(t*v)/v}function b(e,a){var r,c=e.min,s=e.now,m=e.max,d=e.label,E=e.srOnly,p=e.striped,v=e.animated,b=e.className,g=e.style,N=e.variant,f=e.bsPrefix,w=Object(n.a)(e,o);return i.a.createElement("div",Object(t.a)({ref:a},w,{role:"progressbar",className:l()(b,f+"-bar",(r={},r["bg-"+N]=N,r[f+"-bar-animated"]=v,r[f+"-bar-striped"]=v||p,r)),style:Object(t.a)({width:u(s,c,m)+"%"},g),"aria-valuenow":s,"aria-valuemin":c,"aria-valuemax":m}),E?i.a.createElement("span",{className:"sr-only"},d):d)}var g=i.a.forwardRef((function(e,a){var r=e.isChild,c=Object(n.a)(e,E);if(c.bsPrefix=Object(m.a)(c.bsPrefix,"progress"),r)return b(c,a);var o=c.min,v=c.now,u=c.max,g=c.label,N=c.srOnly,f=c.striped,w=c.animated,h=c.bsPrefix,y=c.variant,O=c.className,x=c.children,P=Object(n.a)(c,p);return i.a.createElement("div",Object(t.a)({ref:a},P,{className:l()(O,h)}),x?Object(d.b)(x,(function(e){return Object(s.cloneElement)(e,{isChild:!0})})):b({min:o,now:v,max:u,label:g,srOnly:N,striped:f,animated:w,bsPrefix:h,variant:y},a))}));g.displayName="ProgressBar",g.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=g}}]);
//# sourceMappingURL=49.e1982435.chunk.js.map