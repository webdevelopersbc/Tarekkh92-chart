(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[111],{1498:function(e,a,t){"use strict";t.r(a),t.d(a,"ReactTablePage",(function(){return h}));var r=t(57),n=t(4),s=t(5),c=t(7),d=t(6),l=t(13),o=t(8),i=t(0),m=t.n(i),u=t(1458),h=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).state={data:[{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av",country:"Brazil  "},{name:"Herman Rosa",age:49,address:"718-7162 Molestie Av.",country:"Russia  "},{name:"Jonah Johns",age:28,address:"P.O. Box 939, 9310 A Ave",country:"Brazzil  "},{name:"Otto Clay",age:61,address:"Ap #897-1459 Quam Avenue",country:"China "},{name:"Connor Johnston",age:71,address:"Ap #370-4647 Dis Av.",country:"Russia "},{name:"Lacey Hess",age:29,address:"Ap #365-8835 Integer St.",country:"Russia "},{name:"Timothy Henson",age:78,address:"911-5143 Luctus Ave",country:"US "},{name:"Ramona Benton",age:44,address:"Ap #614-689 Vehicula Street",country:"Brazil "},{name:"Ezra Tillman",age:51,address:"P.O. Box 738, 7583 Quisque St.",country:"Us "},{name:"Dante Carter",age:59,address:"P.O. Box 976, 6316 Lorem, St.",country:"US "},{name:"Christopher Mcclure",age:58,address:"847-4303 Dictum Av.",country:"China "},{name:"Ruby Rocha",age:62,address:"5212 Sagittis Ave",country:"Canada "},{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av.",country:"Brazil"},{name:"Jonah Johns",age:26,address:"P.O. Box 939, 9310 A Ave",country:"Brazil "},{name:"Herman Rosa",age:49,address:"718-7162 Molestie Av.",country:"Russia  "},{name:"Jonah Johns",age:28,address:"P.O. Box 939, 9310 A Ave",country:"Brazzil  "},{name:"Otto Clay",age:61,address:"Ap #897-1459 Quam Avenue",country:"China "},{name:"Connor Johnston",age:71,address:"Ap #370-4647 Dis Av.",country:"Russia "},{name:"Lacey Hess",age:29,address:"Ap #365-8835 Integer St.",country:"Russia "},{name:"Timothy Henson",age:78,address:"911-5143 Luctus Ave",country:"US "},{name:"Ramona Benton",age:44,address:"Ap #614-689 Vehicula Street",country:"Brazil "},{name:"Ezra Tillman",age:51,address:"P.O. Box 738, 7583 Quisque St.",country:"Us "},{name:"Dante Carter",age:59,address:"P.O. Box 976, 6316 Lorem, St.",country:"US "},{name:"Christopher Mcclure",age:58,address:"847-4303 Dictum Av.",country:"China "},{name:"Ruby Rocha",age:62,address:"5212 Sagittis Ave",country:"Canada "},{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av.",country:"Brazil"},{name:"Jonah Johns",age:26,address:"P.O. Box 939, 9310 A Ave",country:"Brazil "}]},e.renderEditable=e.renderEditable.bind(Object(l.a)(e)),e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"renderEditable",value:function(e){var a=this;return m.a.createElement("div",{style:{backgroundColor:"rgba(rgba(0, 0, 0, 0.03))"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(t){var n=Object(r.a)(a.state.data);n[e.index][e.column.id]=t.target.innerHTML,a.setState({data:n})},dangerouslySetInnerHTML:{__html:this.state.data[e.index][e.column.id]}})}},{key:"render",value:function(){var e=this.state.data;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"}," React Tables "),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"React tables")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"React Table"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",null,m.a.createElement(u.a,{data:e,filterable:!0,defaultPageSize:10,columns:[{Header:"Name",accessor:"name",Cell:this.renderEditable},{Header:"Age",accessor:"age",Cell:this.renderEditable},{Header:"Address",accessor:"address",Cell:this.renderEditable},{Header:"Is Married",accessor:"married",Cell:function(e){return m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{className:"form-check-label text-muted"},m.a.createElement("input",{type:"checkbox",className:"form-check-input"}),m.a.createElement("i",{className:"input-helper"})))}},{Header:"Country",accessor:"country",Cell:this.renderEditable}]})))))))))}}]),a}(i.Component);a.default=h}}]);
//# sourceMappingURL=111.5a4e9ac2.chunk.js.map