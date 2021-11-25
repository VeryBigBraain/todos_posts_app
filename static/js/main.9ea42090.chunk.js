(this.webpackJsonptodo2=this.webpackJsonptodo2||[]).push([[0],{106:function(e,t,n){},109:function(e,t,n){e.exports={myInput:"MyInput_myInput__3QEiE"}},110:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__2HKCp"}},111:function(e,t,n){e.exports={mySelect:"MySelect_mySelect__3QeZt"}},116:function(e,t,n){e.exports={filter__post:"FilterPosts_filter__post__r9zNj"}},167:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(43),c=n.n(r),s=(n(96),n(8)),i=n(106),l=n.n(i),d=n(39),u=n.n(d),_=n(36),j=n(1);var m=function(){return Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("div",{className:u.a.appLogo,children:"Todos"}),Object(j.jsx)("nav",{className:u.a.nav,children:Object(j.jsxs)("ul",{className:u.a.nav__list,children:[Object(j.jsx)("li",{className:u.a.nav__item,children:Object(j.jsx)(_.b,{className:u.a.nav__link,to:"/",children:"Home"})}),Object(j.jsx)("li",{className:u.a.nav__item,children:Object(j.jsx)(_.b,{className:u.a.nav__link,to:"/posts",children:"Posts"})})]})})]})},b=n(18),p=n(15),f=n.n(p),O=n(16),h=n(20),v=function(e,t){return Object(a.useMemo)((function(){switch(t){case"completed":return e.filter((function(e){return e.completed}));case"uncompleted":return e.filter((function(e){return!e.completed}));default:return e}}),[e,t])},x=n(4),g=n(54),y=n(55),T=n(108),N=n.n(T).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),P=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,null,[{key:"getAllItems",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,o,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:10,a=r.length>2&&void 0!==r[2]?r[2]:1,e.next=4,N.get("".concat(t),{params:{_limit:n,_page:a}});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,null,[{key:"getPostById",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("posts/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getComments",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),V=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,null,[{key:"createTodo",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("todos/",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTodo",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.delete("todos/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTodo",value:function(){var e=Object(h.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.delete("todos/"+t.id,Object(x.a)({},n,t[n]));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),C=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],d=i[1],u=function(){var t=Object(h.a)(f.a.mark((function t(){var n=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e.apply(void 0,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),d(t.t0.message);case 9:return t.prev=9,r(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[u,o,l]},w=o.a.createContext(),k=o.a.createContext(),I=n(14),L="SET_TODOS",M="SET_SEARCH_VAL",B="SET_SORT_VAL",E=function(e,t){switch(t.type){case L:return Object(I.a)(Object(I.a)({},e),{},{todos:t.todos});case M:return Object(I.a)(Object(I.a)({},e),{},{searchVal:t.searchVal});case B:return Object(I.a)(Object(I.a)({},e),{},{sortVal:t.sortVal});default:return e}},A=n(74),R=n.n(A),F=n(42),z=n(109),D=n.n(z),H=n(228),J=["value","setValue","label","errorText","required"],q=function(e){var t=e.value,n=e.setValue,a=e.label,o=e.errorText,r=void 0!==o&&o,c=e.required,s=void 0!==c&&c,i=Object(F.a)(e,J);return Object(j.jsx)(H.a,Object(I.a)({className:D.a.myInput,type:"text",onChange:function(e){return n(e.target.value)},value:t,label:a,variant:"standard",error:!!r.length,helperText:r,required:s},i))},G=n(110),Q=n.n(G),U=n(236),K=["children","callback","customStyle","color","fontSize","size","variant","args"],X=function(e){var t=e.children,n=e.callback,a=e.customStyle,o=void 0===a?{}:a,r=e.color,c=void 0===r?"primary":r,s=(e.fontSize,e.size),i=void 0===s?"small":s,l=e.variant,d=void 0===l?"outlined":l,u=e.args,_=void 0===u?[]:u,m=Object(F.a)(e,K);return Object(j.jsx)(U.a,Object(I.a)(Object(I.a)({type:"submit",onClick:function(e){return function(e,t){e.preventDefault(),n.apply(void 0,Object(O.a)(t))}(e,_)}},m),{},{className:Q.a.myBtn,variant:d,color:c,size:i,fullWidth:!0,sx:o,children:t}))},Z=function(e){var t=e.create,n=e.userId,o=e.isCreateLoading,r=Object(a.useState)(""),c=Object(s.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),_=u[0],m=u[1];return Object(j.jsx)("div",{className:R.a.addTodo,children:Object(j.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:R.a.form,children:[Object(j.jsx)(q,{placeholder:"Let's do it!",name:"add-input",value:i,setValue:function(e){l(e),m("")},label:"Add todo",errorText:_}),Object(j.jsx)("div",{className:R.a.btnContainer,children:Object(j.jsx)(X,{name:"btn",callback:function(){if(""!==i.trim()){var e={id:Date.now(),title:i,completed:!1,userId:n};t(e),l("")}else m("Please, write your todo here!")},disabled:o,children:"Add"})})]})})},W=n(92),Y=n.n(W),$=n(111),ee=n.n($),te=n(227),ne=n(230),ae=["options","defaultValue","callback"],oe=function(e){var t=e.options,n=e.defaultValue,a=e.callback,o=Object(F.a)(e,ae);return Object(j.jsxs)(te.a,Object(I.a)(Object(I.a)({onChange:function(e){return a(e.target.value)}},o),{},{className:ee.a.mySelect,size:"small",children:[Object(j.jsx)(ne.a,{disabled:!0,value:"",children:n}),t.map((function(e){return Object(j.jsx)(ne.a,{value:e.value,children:e.name},e.value)}))]}))},re=function(e){var t=e.setSortVal,n=e.sortVal,a=e.searchVal,o=e.setSearchVal;return Object(j.jsxs)("div",{className:Y.a.filterTodo,children:[Object(j.jsx)(H.a,{label:"Search",variant:"outlined",value:a,onChange:function(e){return o(e.target.value)},name:"search-input",placeholder:"Todo...",size:"small",className:Y.a.textfield}),Object(j.jsx)(oe,{defaultValue:"Status of todo:",options:[{value:"all",name:"all"},{value:"completed",name:"completed"},{value:"uncompleted",name:"uncompleted"}],callback:t,name:"select",value:n})]})},ce=n(57),se=n.n(ce),ie=n(93),le=n.n(ie),de=n(234),ue=n(232),_e=["items","Component","itemsName","isListLoading"],je=function(e){var t=e.items,n=e.Component,a=e.itemsName,o=e.isListLoading,r=void 0!==o&&o,c=Object(F.a)(e,_e);return t.length||r?Object(j.jsx)("div",{className:le.a.items,children:Object(j.jsx)(de.a,{children:t.map((function(e,a){return Object(j.jsx)(ue.a,{in:!!t.length,classNames:"item",timeout:350,children:Object(j.jsx)(n,Object(I.a)({item:e,index:a},c),e.id)},e.id)}))})}):Object(j.jsxs)("div",{className:le.a.noItems,children:[" There is no ",a,"! "]})},me=n(34),be=n.n(me),pe=n(113),fe=n.n(pe),Oe=n(115),he=n.n(Oe),ve=n(114),xe=n.n(ve),ge=n(65),ye=n.n(ge),Te=n(48),Ne=n.n(Te),Pe=function(e){var t=e.active,n=e.setActive,a=e.children;return Object(j.jsx)("div",{className:t?"".concat(Ne.a.modal," ").concat(Ne.a.modal_active):Ne.a.modal,onClick:function(){return n(!1)},children:Object(j.jsx)("div",{className:t?"".concat(Ne.a.modalContent," ").concat(Ne.a.modalContent_active):Ne.a.modalContent,onClick:function(e){return e.stopPropagation()},children:a})})},Se=o.a.forwardRef((function(e,t){var n=e.activeModal,a=e.setActiveModal,o=e.modalValue,r=e.setModalValue,c=e.saveEditTodo,s=e.todo,i=e.isLoading;return Object(j.jsx)("div",{children:Object(j.jsx)(Pe,{active:n,setActive:a,children:Object(j.jsxs)("div",{className:ye.a.modal,children:[Object(j.jsx)("div",{className:ye.a.modalInputContainer,children:Object(j.jsx)(H.a,{inputRef:t,value:o,type:"text",label:"Edit",variant:"standard",onChange:function(e){return r(e.target.value)},className:ye.a.modalInput})}),Object(j.jsxs)("div",{className:ye.a.modalBtns,children:[Object(j.jsx)("div",{children:Object(j.jsx)(X,{callback:c,args:[Object(I.a)(Object(I.a)({},s),{},{title:o}),"title"],disabled:i,children:"Save"})}),Object(j.jsx)("div",{children:Object(j.jsx)(X,{callback:a,args:[!1],children:"Exit"})})]})]})})})})),Ve=(n(167),n(112)),Ce=n.n(Ve),we=function(e){var t=e.width,n=void 0===t?100:t,a=e.height,o=void 0===a?100:a;return Object(j.jsx)(Ce.a,{type:"ThreeDots",color:"#fe6323",height:o,width:n,timeout:-1})},ke=function(e){var t=e.item,n=(e.index,e.deleteTodo),o=e.updateTodo,r=Object(I.a)({},t),c=Object(a.useRef)(),i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],u=l[1],_=Object(a.useState)(r.title),m=Object(s.a)(_,2),b=m[0],p=m[1],f=C(o),O=Object(s.a)(f,2),h=O[0],v=O[1],x=C(n),g=Object(s.a)(x,2),y=g[0],T=g[1];return Object(a.useEffect)((function(){return function(){return c.current=null}}),[]),Object(j.jsxs)("div",{className:be.a.todo,children:[Object(j.jsx)(Se,{activeModal:d,setActiveModal:u,modalValue:b,setModalValue:p,saveEditTodo:h,isLoading:v,todo:r,ref:c}),Object(j.jsxs)("div",{className:be.a.todo__body,children:[Object(j.jsx)("div",{className:"".concat(r.completed&&be.a.completed," ").concat(be.a.todo__content),children:r.title}),Object(j.jsxs)("div",{className:be.a.buttons,children:[Object(j.jsx)("span",{className:be.a.todo__loading,children:(v||T)&&Object(j.jsx)(we,{height:"20",width:"40"})}),Object(j.jsx)(X,{disabled:v,className:be.a.completeBtn,args:[Object(I.a)(Object(I.a)({},r),{},{completed:!r.completed}),"completed"],callback:h,variant:"contained",customStyle:{color:"#fff"},children:Object(j.jsx)(fe.a,{})}),Object(j.jsx)(X,{className:be.a.editBtn,callback:function(){u(!0),c.current.focus()},variant:"contained",disabled:v,customStyle:{color:"#fff"},children:Object(j.jsx)(xe.a,{})}),Object(j.jsx)(X,{disabled:T,className:be.a.deleteBtn,args:[r.id],callback:y,variant:"contained",color:"warning",children:Object(j.jsx)(he.a,{})})]})]})]},r.id)},Ie=function(e){var t=e.fetchCreate,n=e.isTodoCreateLoading,a=e.searchedSortedTodos,o=(e.setTodos,e.setSortVal),r=e.sortVal,c=e.setSearchVal,s=e.searchVal,i=(e.createTodo,e.updateTodo),l=e.deleteTodo,d=e.userId;return Object(j.jsx)("div",{className:se.a.todos__page,children:Object(j.jsxs)("div",{className:se.a.todos__content,children:[Object(j.jsx)("h2",{className:se.a.form__header,children:"Add new todo"}),Object(j.jsx)(Z,{create:t,userId:d,isCreateLoading:n}),Object(j.jsx)(re,{setSortVal:o,searchVal:s,setSearchVal:c,sortVal:r}),Object(j.jsx)("span",{className:se.a.todos__loader,children:n&&Object(j.jsx)(we,{width:"50",height:"30"})}),Object(j.jsx)("div",{className:se.a.todos__list,children:Object(j.jsx)(je,{items:a,updateTodo:i,deleteTodo:l,Component:ke,itemsName:"todos",isListLoading:n})})]})})},Le=function(){var e=Object(a.useContext)(w),t=Object(s.a)(e,2),n=t[0],o=t[1],r=function(e){return e.todos}(n),c=function(e){return e.searchVal}(n),i=function(e){return e.sortVal}(n),l=function(e){return e.userId}(n),d=C(x),u=Object(s.a)(d,2),_=u[0],m=u[1],b=function(e,t,n,o){var r=o(e,t);return Object(a.useMemo)((function(){return r.filter((function(e){return e.title.toLowerCase().includes(n)}))}),[r,n])}(r,i,c,v),p=function(e){return o(function(e){return{type:L,todos:e}}(e))};function x(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.createTodo(t);case 2:p([].concat(Object(O.a)(r),[t]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(h.a)(f.a.mark((function e(t,n){var a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.updateTodo(t,n);case 2:a=Object(O.a)(r),o=a.findIndex((function(e){return e.id===t.id})),a.splice(o,1,t),p(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.deleteTodo(t);case 2:p(r.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)(Ie,{fetchCreate:_,isTodoCreateLoading:m,searchedSortedTodos:b,setTodos:p,setSortVal:function(e){return o(function(e){return{type:B,sortVal:e}}(e))},sortVal:i,setSearchVal:function(e){return o(function(e){return{type:M,searchVal:e}}(e))},searchVal:c,createTodo:x,updateTodo:function(e,t){return y.apply(this,arguments)},deleteTodo:function(e){return T.apply(this,arguments)},userId:l})},Me=n(44),Be=n.n(Me),Ee=n(66),Ae=n.n(Ee),Re=function(e){var t=e.comments,n=e.isComLoading;return Object(j.jsx)("div",{className:Ae.a.comments__container,children:n?Object(j.jsx)(we,{width:"50"}):Object(j.jsx)("div",{className:Ae.a.comments,children:t.map((function(e,t){return Object(j.jsxs)("div",{className:Ae.a.comment,children:[Object(j.jsx)("h5",{children:e.email}),Object(j.jsx)("div",{className:Ae.a.comment__body,children:e.body})]},t)}))})})},Fe=function(){var e=Object(b.g)(),t=Object(b.h)(),n=Object(a.useState)({}),o=Object(s.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)([]),l=Object(s.a)(i,2),d=l[0],u=l[1],_=C(function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getPostById(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(s.a)(_,3),p=m[0],O=m[1],v=(m[2],C(function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getComments(t);case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),x=Object(s.a)(v,3),g=x[0],y=x[1];x[2];return Object(a.useEffect)((function(){p(t.id),g(t.id)}),[]),Object(j.jsx)("div",{className:Be.a.post__page,children:Object(j.jsxs)("div",{className:Be.a.post,children:[Object(j.jsxs)("h1",{className:Be.a.post__header,children:["Post ",t.id]}),O?Object(j.jsx)(we,{width:"50"}):Object(j.jsxs)("div",{className:Be.a.post__content,children:[Object(j.jsx)("div",{className:Be.a.post__title,children:r.title}),Object(j.jsx)("div",{className:Be.a.post__body,children:r.body})]}),Object(j.jsx)("h2",{className:Be.a.comments__header,children:"Comments"}),Object(j.jsx)(Re,{comments:d,isComLoading:y}),Object(j.jsx)(X,{onClick:function(){return e.goBack()},variant:"contained",customStyle:{color:"#fff"},children:"Back"})]})})},ze=function(e,t){return Math.ceil(e/t)},De="ADD_POSTS",He="SET_TOTAL_PAGES",Je="SET_PAGE",qe="SET_SORT_VAL",Ge=function(e,t){switch(t.type){case De:return Object(I.a)(Object(I.a)({},e),{},{posts:[].concat(Object(O.a)(e.posts),Object(O.a)(t.newPosts))});case He:return Object(I.a)(Object(I.a)({},e),{},{totalPages:t.totalPages});case Je:return Object(I.a)(Object(I.a)({},e),{},{page:t.page});case qe:return Object(I.a)(Object(I.a)({},e),{},{sortVal:t.sortVal});default:return e}},Qe=n(49),Ue=n.n(Qe),Ke=n(50),Xe=n.n(Ke),Ze=function(e){var t=e.item,n=(e.index,Object(I.a)({},t)),a=Object(b.g)();return Object(j.jsxs)("div",{className:Xe.a.post,children:[Object(j.jsxs)("div",{className:Xe.a.post__header,children:[Object(j.jsxs)("span",{className:Xe.a.post__number,children:[" ",n.id," "]}),Object(j.jsxs)("div",{className:Xe.a.post__title,children:[" ",n.title," "]})]})," ",Object(j.jsxs)("div",{className:Xe.a.post__body,children:[" ",n.body," "]}),Object(j.jsx)("div",{className:Xe.a.btn__container,children:Object(j.jsx)(X,{onClick:function(){return a.push("/posts/".concat(n.id))},customStyle:{color:"#fff"},variant:"contained",children:"Open"})})]},n.id)},We=n(116),Ye=n.n(We),$e=function(e){var t=e.sortVal,n=e.setSortVal;e.limit;return Object(j.jsx)("div",{className:Ye.a.filter__post,children:Object(j.jsx)(oe,{defaultValue:"Sort by:",options:[{value:"id",name:"number"},{value:"title",name:"title"},{value:"body",name:"content"}],value:t,callback:n})})},et=function(e){var t=e.sortVal,n=e.setSortVal,a=e.limit,o=e.postsError,r=e.isPostsLoading,c=e.sortedPosts,s=e.lastElement,i=e.posts;return Object(j.jsxs)("div",{className:Ue.a.posts__page,children:[Object(j.jsxs)("div",{className:Ue.a.form__header,children:[Object(j.jsx)("h2",{className:Ue.a.form__title,children:"Posts"}),Object(j.jsx)("div",{className:Ue.a.filter__container,children:Object(j.jsx)($e,{sortVal:t,setSortVal:n,limit:a})})]}),o&&Object(j.jsx)("h1",{children:"Some error"}),r&&Object(j.jsx)(we,{width:"50"}),Object(j.jsx)("div",{className:Ue.a.posts__container,children:Object(j.jsx)(je,{items:c,isListLoading:r,Component:Ze,itemsName:"posts"})}),Object(j.jsx)("div",{className:Ue.a.observer,ref:s}),!!i.length&&r&&Object(j.jsx)(we,{width:50})]})},tt=function(){var e=Object(a.useContext)(k),t=Object(s.a)(e,2),n=t[0],o=t[1],r=function(e){return e.posts}(n),c=function(e){return e.sortVal}(n),i=function(e){return e.totalPages}(n),l=function(e){return e.limit}(n),d=function(e){return e.page}(n),u=function(e){return o({type:De,newPosts:e})},_=function(e){return o(function(e){return{type:He,totalPages:e}}(e))},m=function(e){return o(function(e){return{type:Je,page:e}}(e))},b=function(e,t){return Object(a.useMemo)((function(){var n=Object(O.a)(e);return n.sort((function(e,n){return"number"===typeof e[t]?e[t]>n[t]:e[t].toString().localeCompare(n[t].toString())})),n}),[e,t])}(r,c),p=Object(a.useRef)(),v=C(function(){var e=Object(h.a)(f.a.mark((function e(t,n){var a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getAllItems("posts",t,n);case 2:a=e.sent,u(a.data),o=a.headers["x-total-count"],_(ze(o,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(s.a)(v,3),g=x[0],y=x[1],T=x[2];return function(e,t,n,o){var r=Object(a.useRef)();Object(a.useEffect)((function(){n||(r.current&&r.current.disconnect(),r.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&o()})),r.current.observe(e.current))}),[n])}(p,d<i,y,(function(){return m(d+1)})),Object(a.useEffect)((function(){g(l,d)}),[d]),Object(j.jsx)(et,{sortVal:c,setSortVal:function(e){return o(function(e){return{type:qe,sortVal:e}}(e))},postsError:T,isPostsLoading:y,sortedPosts:b,lastElement:p,posts:r,limit:l})};var nt=[{path:"/",component:Le,exact:!0},{path:"/posts/:id",component:Fe,exact:!1},{path:"/posts",component:tt,exact:!1},{path:"/nopage",component:function(){return Object(j.jsx)("h2",{children:"There is no page"})},exact:!1}];var at=function(e){return e.state,Object(j.jsxs)(b.d,{children:[nt.map((function(e){return Object(j.jsx)(b.b,{render:function(){var t=e.component;return Object(j.jsx)(t,{})},path:e.path,exact:e.exact},e.path)})),Object(j.jsx)(b.a,{to:"/"})]})},ot=n(117),rt=n(233),ct={todos:[],searchVal:"",sortVal:"all",userId:1},st={posts:[],sortVal:"id",totalPages:0,limit:10,page:1},it=Object(ot.a)({palette:{primary:{main:"#fe6323"},warning:{main:"#dc3545"}}});var lt=function(){var e=Object(a.useReducer)(E,ct),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useReducer)(Ge,st),c=Object(s.a)(r,2),i=c[0],d=c[1];return Object(j.jsx)(k.Provider,{value:[i,d],children:Object(j.jsx)(w.Provider,{value:[n,o],children:Object(j.jsx)("div",{className:l.a.app,children:Object(j.jsx)(rt.a,{theme:it,children:Object(j.jsxs)(_.a,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(at,{})]})})})})})},dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(lt,{}),document.getElementById("root")),dt()},34:function(e,t,n){e.exports={todo:"TodoItem_todo__2u0X2",todo__header:"TodoItem_todo__header__3FygK",todo__body:"TodoItem_todo__body__JhJCq",todo__content:"TodoItem_todo__content__7yqoC",completed:"TodoItem_completed__gMQ2m",buttons:"TodoItem_buttons__zJ0Ug",todo__loading:"TodoItem_todo__loading__1fF1_"}},39:function(e,t,n){e.exports={header:"Navbar_header__2HUd3",appLogo:"Navbar_appLogo__ByAXn",nav__list:"Navbar_nav__list__2ZFBX",nav__item:"Navbar_nav__item__qhGnA",nav__link:"Navbar_nav__link__39DRm"}},44:function(e,t,n){e.exports={post__page:"PostPage_post__page__jneUP",post:"PostPage_post__3bhLM",post__header:"PostPage_post__header__3aCF8",post__content:"PostPage_post__content__1BDHO",post__title:"PostPage_post__title__2imgV",post__body:"PostPage_post__body__2TDg-",comments__header:"PostPage_comments__header__1eV0g"}},48:function(e,t,n){e.exports={modal:"MyModal_modal__3AnT8",modal_active:"MyModal_modal_active__ce3eM",modalContent:"MyModal_modalContent__10JT7",modalContent_active:"MyModal_modalContent_active__-OcRb"}},49:function(e,t,n){e.exports={posts__page:"PostsPage_posts__page__1Y4pI",form__header:"PostsPage_form__header__XsZqc",form__title:"PostsPage_form__title__U3BBL",filter__container:"PostsPage_filter__container__2a3ag",observer:"PostsPage_observer__a8Ngi",posts__container:"PostsPage_posts__container__3bTzV"}},50:function(e,t,n){e.exports={post:"PostItem_post__nwQac",post__header:"PostItem_post__header__3_4BH",post__number:"PostItem_post__number__peNKn",post__body:"PostItem_post__body__-7S7G",btn__container:"PostItem_btn__container__2rPG1"}},57:function(e,t,n){e.exports={todos__page:"TodosPage_todos__page__2BHdw",form__header:"TodosPage_form__header__3MW4S",todos__content:"TodosPage_todos__content__2RPPT",todos__loader:"TodosPage_todos__loader__19BQK",todos__list:"TodosPage_todos__list__3SjDH"}},65:function(e,t,n){e.exports={modalInputContainer:"TodoModal_modalInputContainer__2nzu1",modalInput:"TodoModal_modalInput__1OHkI",modalBtns:"TodoModal_modalBtns__2Jlgs"}},66:function(e,t,n){e.exports={comments__container:"CommentsList_comments__container__1cYSl",comment:"CommentsList_comment__ddmJW",comment__body:"CommentsList_comment__body__pmkHl"}},74:function(e,t,n){e.exports={addTodo:"AddTodoForm_addTodo__1Lymk",form:"AddTodoForm_form__33zw1",btnContainer:"AddTodoForm_btnContainer__1InpM"}},92:function(e,t,n){e.exports={filterTodo:"FilterTodo_filterTodo__1ZR-d",textfield:"FilterTodo_textfield__3x-Ie"}},93:function(e,t,n){e.exports={noItems:"ItemsList_noItems__2sM_v"}},96:function(e,t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.9ea42090.chunk.js.map