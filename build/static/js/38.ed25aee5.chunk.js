(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[38],{1518:function(e,a,t){"use strict";t.r(a),t.d(a,"Login",(function(){return u}));var l=t(4),r=t(5),s=t(7),i=t(6),n=t(8),c=t(0),o=t.n(c),m=t(37),d=t(296),u=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center auth px-0"},o.a.createElement("div",{className:"row w-100 mx-0"},o.a.createElement("div",{className:"col-lg-4 mx-auto"},o.a.createElement("div",{className:"card text-left py-5 px-4 px-sm-5"},o.a.createElement("div",{className:"brand-logo"},o.a.createElement("img",{src:t(252),alt:"logo"})),o.a.createElement("h4",null,"Hello! let's get started"),o.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),o.a.createElement(d.a,{className:"pt-3"},o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"email",placeholder:"Username",size:"lg",className:"h-auto"})),o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto"})),o.a.createElement("div",{className:"mt-3"},o.a.createElement(m.b,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",to:"/dashboard"},"SIGN IN")),o.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-muted"},"Forgot password?")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},o.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),o.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",o.a.createElement(m.b,{to:"/user-pages/register",className:"text-primary"},"Create"))))))))}}]),a}(c.Component);a.default=u},216:function(e,a,t){"use strict";var l=t(0),r=t.n(l).a.createContext({controlId:void 0});a.a=r},220:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.default)((function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}))};var l,r=t(227),s=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},221:function(e,a,t){"use strict";var l=t(16),r=t(19),s=t(18),i=t.n(s),n=t(0),c=t.n(n),o=t(9),m=t.n(o),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,o=e.type,m=void 0===o?"valid":o,u=e.tooltip,f=void 0!==u&&u,b=Object(r.a)(e,d);return c.a.createElement(s,Object(l.a)({},b,{ref:a,className:i()(n,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u,a.a=f},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,s,i){var n=r||"<<anonymous>>",c=i||l;if(null==t[l])return a?new Error("Required "+s+" `"+c+"` was not specified in `"+n+"`."):null;for(var o=arguments.length,m=Array(o>6?o-6:0),d=6;d<o;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,l,n,s,c].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},239:function(e,a,t){"use strict";var l=t(16),r=t(19),s=t(18),i=t.n(s),n=t(0),c=t.n(n),o=t(21),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,u=void 0===n?"div":n,f=Object(r.a)(e,m),b=Object(o.a)(t,"col"),v=[],p=[];return d.forEach((function(e){var a,t,l,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&v.push(!0===a?""+b+i:""+b+i+"-"+a),null!=l&&p.push("order"+i+"-"+l),null!=t&&p.push("offset"+i+"-"+t)})),v.length||v.push(b),c.a.createElement(u,Object(l.a)({},f,{ref:a,className:i.a.apply(void 0,[s].concat(v,p))}))}));u.displayName="Col",a.a=u},240:function(e,a,t){"use strict";var l=t(16),r=t(19),s=t(18),i=t.n(s),n=(t(220),t(0)),c=t.n(n),o=(t(66),t(221)),m=t(216),d=t(21),u=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],f=c.a.forwardRef((function(e,a){var t,s,o=e.bsPrefix,f=e.bsCustomPrefix,b=e.type,v=e.size,p=e.htmlSize,N=e.id,x=e.className,h=e.isValid,y=void 0!==h&&h,O=e.isInvalid,j=void 0!==O&&O,E=e.plaintext,P=e.readOnly,g=e.custom,w=e.as,C=void 0===w?"input":w,k=Object(r.a)(e,u),I=Object(n.useContext)(m.a).controlId,F=g?[f,"custom"]:[o,"form-control"],R=F[0],V=F[1];if(o=Object(d.a)(R,V),E)(s={})[o+"-plaintext"]=!0,t=s;else if("file"===b){var L;(L={})[o+"-file"]=!0,t=L}else if("range"===b){var S;(S={})[o+"-range"]=!0,t=S}else if("select"===C&&g){var T;(T={})[o+"-select"]=!0,T[o+"-select-"+v]=v,t=T}else{var z;(z={})[o]=!0,z[o+"-"+v]=v,t=z}return c.a.createElement(C,Object(l.a)({},k,{type:b,size:p,ref:a,readOnly:P,id:N||I,className:i()(x,t,y&&"is-valid",j&&"is-invalid")}))}));f.displayName="FormControl",a.a=Object.assign(f,{Feedback:o.a})},252:function(e,a,t){e.exports=t.p+"static/media/logo.9c20a847.svg"},296:function(e,a,t){"use strict";var l=t(16),r=t(19),s=t(18),i=t.n(s),n=t(0),c=t.n(n),o=(t(220),t(221)),m=t(216),d=t(21),u=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],f=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,f=e.className,b=e.type,v=void 0===b?"checkbox":b,p=e.isValid,N=void 0!==p&&p,x=e.isInvalid,h=void 0!==x&&x,y=e.isStatic,O=e.as,j=void 0===O?"input":O,E=Object(r.a)(e,u),P=Object(n.useContext)(m.a),g=P.controlId,w=P.custom?[o,"custom-control-input"]:[s,"form-check-input"],C=w[0],k=w[1];return s=Object(d.a)(C,k),c.a.createElement(j,Object(l.a)({},E,{ref:a,type:v,id:t||g,className:i()(f,s,N&&"is-valid",h&&"is-invalid",y&&"position-static")}))}));f.displayName="FormCheckInput";var b=f,v=["bsPrefix","bsCustomPrefix","className","htmlFor"],p=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,u=e.htmlFor,f=Object(r.a)(e,v),b=Object(n.useContext)(m.a),p=b.controlId,N=b.custom?[s,"custom-control-label"]:[t,"form-check-label"],x=N[0],h=N[1];return t=Object(d.a)(x,h),c.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:u||p,className:i()(o,t)}))}));p.displayName="FormCheckLabel";var N=p,x=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],h=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,u=e.bsCustomPrefix,f=e.inline,v=void 0!==f&&f,p=e.disabled,h=void 0!==p&&p,y=e.isValid,O=void 0!==y&&y,j=e.isInvalid,E=void 0!==j&&j,P=e.feedbackTooltip,g=void 0!==P&&P,w=e.feedback,C=e.className,k=e.style,I=e.title,F=void 0===I?"":I,R=e.type,V=void 0===R?"checkbox":R,L=e.label,S=e.children,T=e.custom,z=e.as,M=void 0===z?"input":z,_=Object(r.a)(e,x),A="switch"===V||T,G=A?[u,"custom-control"]:[s,"form-check"],q=G[0],D=G[1];s=Object(d.a)(q,D);var J=Object(n.useContext)(m.a).controlId,H=Object(n.useMemo)((function(){return{controlId:t||J,custom:A}}),[J,A,t]),K=A||null!=L&&!1!==L&&!S,U=c.a.createElement(b,Object(l.a)({},_,{type:"switch"===V?"checkbox":V,ref:a,isValid:O,isInvalid:E,isStatic:!K,disabled:h,as:M}));return c.a.createElement(m.a.Provider,{value:H},c.a.createElement("div",{style:k,className:i()(C,s,A&&"custom-"+V,v&&s+"-inline")},S||c.a.createElement(c.a.Fragment,null,U,K&&c.a.createElement(N,{title:F},L),(O||E)&&c.a.createElement(o.a,{type:O?"valid":"invalid",tooltip:g},w))))}));h.displayName="FormCheck",h.Input=b,h.Label=N;var y=h,O=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],j=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,f=e.isValid,b=e.isInvalid,v=e.lang,p=e.as,N=void 0===p?"input":p,x=Object(r.a)(e,O),h=Object(n.useContext)(m.a),y=h.controlId,j=h.custom?[o,"custom-file-input"]:[s,"form-control-file"],E=j[0],P=j[1];return s=Object(d.a)(E,P),c.a.createElement(N,Object(l.a)({},x,{ref:a,id:t||y,type:"file",lang:v,className:i()(u,s,f&&"is-valid",b&&"is-invalid")}))}));j.displayName="FormFileInput";var E=j,P=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,u=e.htmlFor,f=Object(r.a)(e,P),b=Object(n.useContext)(m.a),v=b.controlId,p=b.custom?[s,"custom-file-label"]:[t,"form-file-label"],N=p[0],x=p[1];return t=Object(d.a)(N,x),c.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:u||v,className:i()(o,t),"data-browse":f["data-browse"]}))}));g.displayName="FormFileLabel";var w=g,C=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],k=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,u=e.bsCustomPrefix,f=e.disabled,b=void 0!==f&&f,v=e.isValid,p=void 0!==v&&v,N=e.isInvalid,x=void 0!==N&&N,h=e.feedbackTooltip,y=void 0!==h&&h,O=e.feedback,j=e.className,P=e.style,g=e.label,k=e.children,I=e.custom,F=e.lang,R=e["data-browse"],V=e.as,L=void 0===V?"div":V,S=e.inputAs,T=void 0===S?"input":S,z=Object(r.a)(e,C),M=I?[u,"custom"]:[s,"form-file"],_=M[0],A=M[1];s=Object(d.a)(_,A);var G=Object(n.useContext)(m.a).controlId,q=Object(n.useMemo)((function(){return{controlId:t||G,custom:I}}),[G,I,t]),D=null!=g&&!1!==g&&!k,J=c.a.createElement(E,Object(l.a)({},z,{ref:a,isValid:p,isInvalid:x,disabled:b,as:T,lang:F}));return c.a.createElement(m.a.Provider,{value:q},c.a.createElement(L,{style:P,className:i()(j,s,I&&"custom-file")},k||c.a.createElement(c.a.Fragment,null,I?c.a.createElement(c.a.Fragment,null,J,D&&c.a.createElement(w,{"data-browse":R},g)):c.a.createElement(c.a.Fragment,null,D&&c.a.createElement(w,null,g),J),(p||x)&&c.a.createElement(o.a,{type:p?"valid":"invalid",tooltip:y},O))))}));k.displayName="FormFile",k.Input=E,k.Label=w;var I=k,F=t(240),R=["bsPrefix","className","children","controlId","as"],V=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.children,u=e.controlId,f=e.as,b=void 0===f?"div":f,v=Object(r.a)(e,R);t=Object(d.a)(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(m.a.Provider,{value:p},c.a.createElement(b,Object(l.a)({},v,{ref:a,className:i()(s,t)}),o))}));V.displayName="FormGroup";var L=V,S=(t(66),t(239)),T=["as","bsPrefix","column","srOnly","className","htmlFor"],z=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,o=e.bsPrefix,u=e.column,f=e.srOnly,b=e.className,v=e.htmlFor,p=Object(r.a)(e,T),N=Object(n.useContext)(m.a).controlId;o=Object(d.a)(o,"form-label");var x="col-form-label";"string"===typeof u&&(x=x+" "+x+"-"+u);var h=i()(b,o,f&&"sr-only",u&&x);return v=v||N,u?c.a.createElement(S.a,Object(l.a)({ref:a,as:"label",className:h,htmlFor:v},p)):c.a.createElement(s,Object(l.a)({ref:a,className:h,htmlFor:v},p))}));z.displayName="FormLabel",z.defaultProps={column:!1,srOnly:!1};var M=z,_=["bsPrefix","className","as","muted"],A=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,o=void 0===n?"small":n,m=e.muted,u=Object(r.a)(e,_);return t=Object(d.a)(t,"form-text"),c.a.createElement(o,Object(l.a)({},u,{ref:a,className:i()(s,t,m&&"text-muted")}))}));A.displayName="FormText";var G=A,q=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(l.a)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=y.Input,q.Label=y.Label;var D=q,J=t(39),H=["bsPrefix","inline","className","validated","as"],K=Object(J.a)("form-row"),U=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,n=e.className,o=e.validated,m=e.as,u=void 0===m?"form":m,f=Object(r.a)(e,H);return t=Object(d.a)(t,"form"),c.a.createElement(u,Object(l.a)({},f,{ref:a,className:i()(n,o&&"was-validated",s&&t+"-inline")}))}));U.displayName="Form",U.defaultProps={inline:!1},U.Row=K,U.Group=L,U.Control=F.a,U.Check=y,U.File=I,U.Switch=D,U.Label=M,U.Text=G;a.a=U}}]);
//# sourceMappingURL=38.ed25aee5.chunk.js.map