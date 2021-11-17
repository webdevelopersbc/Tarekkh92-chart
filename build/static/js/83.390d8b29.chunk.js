(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[83],{1510:function(a,e,t){"use strict";t.r(e),t.d(e,"ChartJs",(function(){return m}));var r=t(4),c=t(5),s=t(7),l=t(6),i=t(8),n=t(0),o=t.n(n),d=t(383),m=function(a){function e(){var a,t;Object(r.a)(this,e);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(t=Object(s.a)(this,(a=Object(l.a)(e)).call.apply(a,[this].concat(i)))).data={labels:["2013","2014","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[10,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!1}]},t.options={scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(204, 204, 204,0.1)"}}],xAxes:[{gridLines:{color:"rgba(204, 204, 204,0.1)"}}]},legend:{display:!1},elements:{point:{radius:0}}},t.areaData={labels:["2013","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!0}]},t.areaOptions={plugins:{filler:{propagate:!0}},scales:{yAxes:[{gridLines:{color:"rgba(204, 204, 204,0.1)"}}],xAxes:[{gridLines:{color:"rgba(204, 204, 204,0.1)"}}]}},t.doughnutPieData={datasets:[{data:[30,40,30],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}],labels:["Pink","Blue","Yellow"]},t.doughnutPieOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0}},t.scatterChartData={datasets:[{label:"First Dataset",data:[{x:-10,y:0},{x:0,y:3},{x:-25,y:5},{x:40,y:5}],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255,99,132,1)"],borderWidth:1},{label:"Second Dataset",data:[{x:10,y:5},{x:20,y:-30},{x:-25,y:15},{x:-10,y:5}],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},t.scatterChartOptions={scales:{xAxes:[{type:"linear",position:"bottom",gridLines:{color:"rgba(204, 204, 204,0.1)"}}],yAxes:[{gridLines:{color:"rgba(204, 204, 204,0.1)"}}]}},t}return Object(i.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Chart-js"),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(a){return a.preventDefault()}},"Charts")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Chart-js")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Line Chart"),o.a.createElement(d.Line,{data:this.data,options:this.options})))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Bar Chart"),o.a.createElement(d.Bar,{data:this.data,options:this.options}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Area Chart"),o.a.createElement(d.Line,{data:this.areaData,options:this.areaOptions})))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Doughnut Chart"),o.a.createElement(d.Doughnut,{data:this.doughnutPieData,options:this.doughnutPieOptions}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Pie Chart"),o.a.createElement(d.Pie,{data:this.doughnutPieData,options:this.doughnutPieOptions})))),o.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Scatter Chart"),o.a.createElement(d.Scatter,{data:this.scatterChartData,options:this.scatterChartOptions}))))))}}]),e}(n.Component);e.default=m}}]);
//# sourceMappingURL=83.390d8b29.chunk.js.map