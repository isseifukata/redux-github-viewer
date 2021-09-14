(this["webpackJsonpredux-github-viewer"]=this["webpackJsonpredux-github-viewer"]||[]).push([[0],{32:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(13),a=c.n(n),i=c(10),l=(c(32),c(9)),o=c(15),d=c(1),b=function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{className:"block px-6 py-4 transition-colors hover:bg-gray-200",exact:e.exact,to:e.to,children:e.title})})};b.defaultProps={exact:!1};var j=b,u=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("button",{onClick:function(){r(!c)},children:c?Object(d.jsx)(o.b,{className:"w-8 h-8 text-white"}):Object(d.jsx)(o.a,{className:"w-8 h-8 text-white"})}),c&&Object(d.jsx)("div",{className:"absolute right-0 overflow-hidden bg-white rounded-lg shadow",children:Object(d.jsxs)("ul",{className:"min-w-max",children:[Object(d.jsx)(j,{exact:"true",to:"/",title:"Home"}),Object(d.jsx)(j,{to:"/profile",title:"Profile"}),Object(d.jsx)(j,{to:"/issue",title:"Issue"}),Object(d.jsx)(j,{to:"/pull-request",title:"Pull Request"})]})})]})},x=function(){return Object(d.jsxs)("header",{className:"flex items-center justify-between px-6 py-4 bg-gray-700",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(i.b,{className:"mr-8 text-4xl font-bold text-white",to:"/",children:"GitHub Viewer"}),Object(d.jsxs)("div",{className:"space-x-4",children:[Object(d.jsx)(i.b,{className:"text-white",to:"/issue",children:"Issue"}),Object(d.jsx)(i.b,{className:"text-white",to:"/pull-request",children:"Pull Request"})]})]}),Object(d.jsx)(u,{})]})},O=c(4),h=function(e){var t=e.details,c=Object(O.b)();return Object(d.jsxs)("tr",{id:t.id,className:"group",onClick:function(){c({type:"OPEN_MODAL_EXISTING_ISSUE",payload:{issueId:t.id}})},children:[Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200",children:Object(d.jsx)("input",{className:"rounded-sm",type:"checkbox"})}),Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200",children:t.title}),Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200",children:t.status?"Open":"Close"}),Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200",children:t.createdBy}),Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"}),Object(d.jsx)("td",{className:"p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"})]})},m=function(e){var t=e.onClick;return Object(d.jsx)("button",{onClick:t,className:"inline-flex justify-center items-center px-6 py-2 text-center transition-colors rounded-md ".concat(e.className),children:e.children})},p=function(e){var t=Object(O.b)(),c=Object(s.useState)(0),r=Object(l.a)(c,2),n=r[0],a=r[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),b=o[0],j=o[1],u=Object(O.c)((function(e){return e.issueReducer.data})),x=Object(s.useMemo)((function(){var e=Object.values(u);return 0===b.length?e:e.filter((function(e){return e.title.includes(b)}))}),[u,b]),p="p-6 text-center text-lg rounded-t-lg",g="".concat(p," border-t border-l border-r border-gray-300 cursor-default"),v="".concat(p," border-b border-gray-300 transition-colors hover:bg-gray-100"),f="".concat("p-6"),N="".concat("p-6"," hidden");return Object(d.jsx)("div",{className:e.classNames,children:Object(d.jsxs)("div",{className:"max-w-4xl px-6 mx-auto",children:[Object(d.jsxs)("div",{className:"grid grid-cols-2 tabs",children:[Object(d.jsx)("button",{onClick:function(){return a(0)},className:0===n?g:v,children:"Issue"}),Object(d.jsx)("button",{onClick:function(){return a(1)},className:1===n?g:v,children:"Pull Request"})]}),Object(d.jsxs)("div",{className:"tab-panels",children:[Object(d.jsxs)("div",{className:0===n?f:N,children:[Object(d.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(d.jsx)("p",{className:"text-2xl font-bold",children:"Issue"}),Object(d.jsx)("input",{type:"text",value:b,className:"w-full rounded-md",placeholder:"Issue\u540d\u3067\u691c\u7d22",onChange:function(e){return j(e.target.value)}}),Object(d.jsx)(m,{onClick:function(){return t({type:"OPEN_MODAL_NEW_ISSUE"})},className:"text-white bg-green-600 hover:bg-green-700",children:"New"}),Object(d.jsx)(m,{className:"text-white bg-red-600 hover:bg-red-700",children:"Delete"})]}),Object(d.jsxs)("table",{className:"w-full table-auto",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300",children:Object(d.jsx)("input",{className:"rounded-sm",type:"checkbox"})}),Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300"}),Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300",children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300",children:"\u4f5c\u6210\u8005"}),Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300",children:"\u4f5c\u6210\u65e5\u4ed8"}),Object(d.jsx)("th",{className:"p-3 text-left border-b border-gray-300",children:"\u66f4\u65b0\u65e5\u4ed8"})]})}),Object(d.jsx)("tbody",{children:0!==x.length?Object.keys(x).map((function(e){return Object(d.jsx)(h,{details:x[e]},e)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:"6",className:"p-3 text-center",children:"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093"})})})]})]}),Object(d.jsx)("div",{className:1===n?f:N,children:Object(d.jsx)("p",{className:"text-3xl text-center",children:"Pull Request"})})]})]})})};p.defaultProps={classNames:""};var g=p,v=c(22),f=c.n(v);f.a.setAppElement("#root");var N={content:{inset:"100px"}},y=function(e){var t=e.isOpen,c=e.component,s=Object(O.b)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f.a,{isOpen:t,style:N,children:[Object(d.jsx)("div",{className:"text-right",children:Object(d.jsx)("button",{onClick:function(){s({type:"CLOSE_MODAL"})},children:Object(d.jsx)(o.b,{className:"w-8 h-8 text-gray-500"})})}),c]})})},w=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(""),a=Object(l.a)(n,2),i=a[0],o=a[1],b=Object(O.b)(),j=function(){b({type:"CLOSE_MODAL"})};return Object(d.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(d.jsx)("h2",{className:"mb-8 text-3xl",children:"Issue\u3092\u8ffd\u52a0"}),Object(d.jsxs)("div",{className:"space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"block mb-2",htmlFor:"title",children:"\u30bf\u30a4\u30c8\u30eb"}),Object(d.jsx)("input",{type:"text",name:"title",className:"w-full rounded-md",id:"title",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"block mb-2",htmlFor:"description",children:"\u8aac\u660e"}),Object(d.jsx)("textarea",{name:"description",className:"w-full rounded-md",id:"description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"grid grid-cols-2 gap-x-6",children:[Object(d.jsx)(m,{onClick:function(){return function(e,t){b({type:"ADD_ISSUE",payload:{title:e,description:t}}),j()}(c,i)},className:"text-white bg-green-600 hover:bg-green-700",children:"\u8ffd\u52a0"}),Object(d.jsx)(m,{onClick:function(){return j()},className:"text-gray-500 hover:bg-gray-100",children:"\u9589\u3058\u308b"})]})]})]})},I=function(){var e=Object(O.b)(),t=function(){e({type:"CLOSE_MODAL"})},c=Object(O.c)((function(e){return e.modalReducer.issueId})),r=Object(O.c)((function(e){return e.issueReducer.data}))[c],n=Object(s.useState)(r.title),a=Object(l.a)(n,2),i=a[0],o=a[1],b=Object(s.useState)(r.description),j=Object(l.a)(b,2),u=j[0],x=j[1],h=Object(s.useState)(r.status),p=Object(l.a)(h,2),g=p[0],v=p[1];return Object(d.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(d.jsx)("h2",{className:"mb-8 text-3xl",children:"Issue\u3092\u7de8\u96c6"}),Object(d.jsxs)("div",{className:"space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"block mb-2",htmlFor:"title",children:"\u30bf\u30a4\u30c8\u30eb"}),Object(d.jsx)("input",{type:"text",name:"title",className:"w-full rounded-md",id:"title",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"block mb-2",htmlFor:"description",children:"\u8aac\u660e"}),Object(d.jsx)("textarea",{name:"description",className:"w-full rounded-md",id:"description",value:u,onChange:function(e){return x(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"block mb-2",htmlFor:"status",children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),Object(d.jsxs)("select",{className:"rounded-md",name:"status",id:"status",value:g,onChange:function(e){return v(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"Open"}),Object(d.jsx)("option",{value:"0",children:"Close"})]})]}),Object(d.jsxs)("div",{className:"grid grid-cols-2 gap-x-6",children:[Object(d.jsx)(m,{onClick:function(){!function(t,c,s,r){e({type:"UPDATE_ISSUE",payload:{id:t,title:c,description:s,status:r}})}(c,i,u,g),t()},className:"text-white bg-green-600 hover:bg-green-700",children:"\u66f4\u65b0"}),Object(d.jsx)(m,{onClick:t,className:"text-gray-500 hover:bg-gray-100",children:"\u9589\u3058\u308b"})]})]})]})},S=function(){var e=Object(O.c)((function(e){return e.modalReducer.isModalOpen})),t=Object(O.c)((function(e){return e.modalReducer.issueId})),c=Object(O.c)((function(e){return e.modalReducer.newIssue}))?Object(d.jsx)(w,{}):Object(d.jsx)(I,{});return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(g,{classNames:"pt-10"}),Object(d.jsx)(y,{isOpen:e,component:c,issueId:t})]})},C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(S,{})})},k=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(S,{})})},E=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(S,{})})},_=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(S,{})})},L=c(3);var P=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(L.a,{exact:!0,path:"/",component:C}),Object(d.jsx)(L.a,{path:"/profile",component:k}),Object(d.jsx)(L.a,{path:"/issue",component:E}),Object(d.jsx)(L.a,{path:"/pull-request",component:_})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))},D=c(11),M=c(16),R=c(23),F={1:{id:1,title:"A bug in Top Page",status:0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",createdBy:""},2:{id:2,title:"A problem of performance in Top Page",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",status:0,createdBy:""},3:{id:3,title:"fix layout",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",status:1,createdBy:""}},U={index:Object.keys(F).length,data:F},T={isModalOpen:!1,newIssue:!1,issueId:null},q=Object(R.a)({issueReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,c=arguments.length>1?arguments[1]:void 0,s=t.index,r=s+1;switch(c.type){case"UPDATE_ISSUE":return{index:s,data:Object(M.a)(Object(M.a)({},t.data),{},Object(D.a)({},c.payload.id,{title:c.payload.title,description:c.payload.description,status:c.payload.status}))};case"ADD_ISSUE":return Object(M.a)(Object(M.a)({},t),{},{index:r,data:(e={},Object(D.a)(e,r,r),Object(D.a)(e,"title",c.payload.title),Object(D.a)(e,"description",c.payload.description),Object(D.a)(e,"status",1),Object(D.a)(e,"createdBy",""),e)})}return t},modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL_NEW_ISSUE":return{isModalOpen:!0,newIssue:!0};case"OPEN_MODAL_EXISTING_ISSUE":return{isModalOpen:!0,newIssue:!1,issueId:t.payload.issueId};case"CLOSE_MODAL":return{isModalOpen:!1,newIssue:!0};default:return e}}}),B=Object(R.b)(q);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O.a,{store:B,children:Object(d.jsx)(i.a,{children:Object(d.jsx)(P,{})})})}),document.getElementById("root")),A()}},[[48,1,2]]]);
//# sourceMappingURL=main.fc32c3a3.chunk.js.map