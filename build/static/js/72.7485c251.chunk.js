(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[72],{522:function(e,t,a){"use strict";a.r(t),a.d(t,"TodoListRtl",(function(){return h})),a.d(t,"TodoListRtlComponent",(function(){return f}));var n=a(57),r=a(17),c=a(13),o=a(4),l=a(5),s=a(7),i=a(6),d=a(8),m=a(0),u=a.n(m),p=a(212);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"page-header"},u.a.createElement("h3",{className:"page-title"},"Todo List"),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Apps")),u.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Todo List")))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"card px-3"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Todo List"),u.a.createElement(f,null))))))}}]),t}(m.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={todos:[{id:1,task:"\u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",isCompleted:!1},{id:2,task:"\u0627\u0644\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643",isCompleted:!0},{id:3,task:"\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",isCompleted:!1},{id:4,task:"\u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631",isCompleted:!1},{id:5,task:"\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u062c\u0648\u0646",isCompleted:!0},{id:6,task:"\u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0639 \u0627\u0644\u064a\u0633\u0627",isCompleted:!1}],inputValue:""},a.statusChangedHandler=a.statusChangedHandler.bind(Object(c.a)(a)),a.addTodo=a.addTodo.bind(Object(c.a)(a)),a.removeTodo=a.removeTodo.bind(Object(c.a)(a)),a.inputChangeHandler=a.inputChangeHandler.bind(Object(c.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"statusChangedHandler",value:function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state.todos[t]);a.isCompleted=e.target.checked;var c=Object(n.a)(this.state.todos);c[t]=a,this.setState({todos:c})}},{key:"addTodo",value:function(e){e.preventDefault();var t=Object(n.a)(this.state.todos);t.unshift({id:t.length?t[t.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:t,inputValue:""})}},{key:"removeTodo",value:function(e){var t=Object(n.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},u.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"\u0645\u0627\u0630\u0627 \u062a\u062d\u062a\u0627\u062c \u0623\u0646 \u062a\u0641\u0639\u0644 \u0627\u0644\u064a\u0648\u0645\u061f",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),u.a.createElement("button",{type:"submit",className:"btn btn-primary"},u.a.createElement(p.a,null,"Add"))),u.a.createElement("div",{className:"list-wrapper"},u.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(t,a){return u.a.createElement(v,{isCompleted:t.isCompleted,changed:function(t){return e.statusChangedHandler(t,a)},key:t.id,remove:function(){return e.removeTodo(a)}},t.task)})))))}}]),t}(m.Component),v=function(e){return u.a.createElement("li",{className:e.isCompleted?"completed":null},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{htmlFor:"",className:"form-check-label"},u.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",u.a.createElement("i",{className:"input-helper"}))),u.a.createElement("i",{className:"remove mdi mdi-close-box",onClick:e.remove}))};t.default=h}}]);
//# sourceMappingURL=72.7485c251.chunk.js.map