(this["webpackJsonptexting-ff-helper"]=this["webpackJsonptexting-ff-helper"]||[]).push([[0],{208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},227:function(e,t){},229:function(e,t){},239:function(e,t){},241:function(e,t){},268:function(e,t){},270:function(e,t){},271:function(e,t){},276:function(e,t){},278:function(e,t){},284:function(e,t){},286:function(e,t){},305:function(e,t){},317:function(e,t){},320:function(e,t){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),s=n.n(c),i=(n(208),n(6)),u=(n(209),n(210),n(16)),o=n(385),l=n(392),j=n(393),d=n(381),b=n(398),f=n(399),h=(n(211),n(18)),O="chatsState",p="numberOfChats",m="updateIndividualChatSelector",x="usersState",g="numberOfUsers",v="appUserState",N=Object(h.c)({key:x,default:[]}),C=(Object(h.d)({key:g,get:function(e){return(0,e.get)(N).length}}),n(1)),S=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),O=s[0],p=s[1],m=Object(h.e)(N),x=Object(i.a)(m,2),g=x[0],v=x[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return r(!0)},children:"Add User"}),Object(C.jsxs)(o.a,{onClose:function(){return r(!1)},open:n,className:"addUserDialog",children:[Object(C.jsx)(l.a,{children:"Add a new name to update the list of total users in the story!"}),Object(C.jsx)(j.a,{children:Object(C.jsx)(d.a,{onChange:function(e){p(e.target.value)},value:O,placeholder:"Add New Name Here",autoFocus:!0,margin:"dense",id:"user",label:"User Name",fullWidth:!0,variant:"standard"})}),Object(C.jsx)(b.a,{children:Object(C.jsx)(f.a,{onClick:function(){if(O){var e={name:O};v([].concat(Object(u.a)(g),[e]))}p(""),r(!1)},children:"Submit"})})]})]})},y=n(3),w=n(15),k=(n(219),n(401)),U=(n(220),n(44)),F=n(396),P=n(382),T=n(377),W=n(387),D=n(400),H=n(388),I=n(383),V={PaperProps:{style:{maxHeight:224,width:250}}};function A(e,t,n){return{fontWeight:-1===t.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}var M=function(e){var t=e.totalUsers,n=e.groupUsers,a=e.setGroupUsers,r=Object(U.a)();return Object(C.jsxs)(F.a,{sx:{m:1,width:300},children:[Object(C.jsx)(P.a,{id:"user-select-label",children:"Users"}),Object(C.jsx)(T.a,{labelId:"user-select-label",id:"user-select",multiple:!0,value:n,onChange:function(e){var t=e.target.value;a("string"===typeof t?t.split(","):t)},input:Object(C.jsx)(W.a,{id:"select-multiple-chip",label:"Chip"}),renderValue:function(e){return Object(C.jsx)(D.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(C.jsx)(H.a,{label:e},e)}))})},MenuProps:V,children:t.map((function(e){return Object(C.jsx)(I.a,{value:e.name,style:A(e.name,n,r),children:e.name},e.name)}))})]})},B=(n(221),function(e){var t=e.groupCreator,n=e.setGroupCreator,a=e.groupUsers;return Object(C.jsxs)(F.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(C.jsx)(P.a,{id:"group-creator-label",children:"Group Creator"}),Object(C.jsx)(T.a,{labelId:"group-creator-label",id:"group-creator",value:t,onChange:function(e){n(e.target.value)},label:"Group Creator",children:a.map((function(e){return Object(C.jsx)(I.a,{value:e,children:e},e)}))})]})}),L=Object(h.c)({key:O,default:[]}),G=(Object(h.d)({key:p,get:function(e){return(0,e.get)(L).length}}),Object(h.d)({key:m,get:function(e){return(0,e.get)(L)},set:function(e,t){var n=e.set,a=e.get;if(t instanceof h.a)n(L,t);else{var r=a(L),c=t[0],s=r.findIndex((function(e){return e.groupName===c.groupName}));n(L,[].concat(Object(u.a)(r.slice(0,s)),[c],Object(u.a)(r.slice(s+1))))}}})),E=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),l=s[0],O=s[1],p=Object(a.useState)(""),m=Object(i.a)(p,2),x=m[0],g=m[1],v=Object(a.useState)(""),S=Object(i.a)(v,2),U=S[0],F=S[1],P=Object(h.f)(N),T=Object(h.e)(L),W=Object(i.a)(T,2),D=W[0],H=W[1],I=P.reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(y.a)({},t.name,t))}),{}),V=""!==U&&""!==x&&l.length>0;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return r(!0)},disabled:P.length<1,children:"New Chat"}),Object(C.jsxs)(o.a,{onClose:function(){return r(!1)},open:n,className:"addChatDialog",children:[Object(C.jsxs)(j.a,{className:"dialogContent",children:[Object(C.jsx)(k.a,{children:"Add users, give it a name, and begin a new chat!"}),Object(C.jsx)(d.a,{onChange:function(e){F(e.target.value)},value:U,placeholder:"Set Group Name Here",autoFocus:!0,margin:"dense",id:"group",label:"Group Name",fullWidth:!0,variant:"standard"}),Object(C.jsx)(M,{totalUsers:P,groupUsers:l,setGroupUsers:O}),l.length>0&&Object(C.jsx)(B,{groupCreator:x,setGroupCreator:g,groupUsers:l})]}),Object(C.jsxs)(b.a,{children:[Object(C.jsx)(f.a,{onClick:function(){if(l.length>0&&U&&x){var e={groupName:U,users:l.map((function(e){return I[e]})),creator:I[x],messages:[{text:"".concat(U," created by ").concat(x)}]};H([].concat(Object(u.a)(D),[e])),g(""),F(""),O([])}r(!1)},disabled:!V,children:"Submit"}),Object(C.jsx)(f.a,{onClick:function(){g(""),F(""),O([]),r(!1)},children:"Cancel"})]})]})]})},J=(n(222),n(397)),$=n(380),q=n(376),R=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(h.f)(N),s=Object(h.f)(L);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return r(!0)},disabled:c.length<1,children:"See Total Users"}),Object(C.jsxs)(o.a,{onClose:function(){return r(!1)},open:n,className:"userListModal",children:[Object(C.jsx)(l.a,{children:"All Users"}),Object(C.jsx)(j.a,{className:"dialogContent",children:Object(C.jsx)(J.a,{children:c.map((function(e){var t=s.filter((function(t){return t.users.map((function(e){return e.name})).includes(e.name)})).length;return Object(C.jsx)($.a,{children:Object(C.jsx)(q.a,{primary:e.name,secondary:"Active user in ".concat(t," chats")},e.name)},e.name)}))})}),Object(C.jsx)(b.a,{children:Object(C.jsx)(f.a,{onClick:function(){return r(!1)},children:"Close"})})]})]})},_=n(20),z=n.n(_),Z=n(34),K=n(187),Y="https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/text-ff-backend-forai/service/data-retrieval/incoming_webhook",Q=function(){var e=Object(Z.a)(z.a.mark((function e(t,n){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n){e.next=8;break}return e.next=3,fetch("".concat(Y,"/get-chapter"),{method:"POST",body:JSON.stringify({chapterId:t,userId:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r.chapters||[]);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(Z.a)(z.a.mark((function e(t,n,a,r){var c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!a.length){e.next=7;break}return e.next=3,fetch("".concat(Y,"/post-chapter"),{method:"POST",body:JSON.stringify({chapterId:t,userId:n._id.$oid,users:a,chats:r})});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ee=function(){var e=Object(Z.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,fetch("".concat(Y,"/get-user"),{method:"POST",body:JSON.stringify({userName:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){return Object(K.pbkdf2Sync)(t,"".concat(e,"ff"),100,32,"sha512").toString("hex")},ne=function(){var e=Object(Z.a)(z.a.mark((function e(t,n){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n){e.next=8;break}return a=te(t,n),e.next=4,fetch("".concat(Y,"/post-user"),{method:"POST",body:JSON.stringify({userName:t,passwordHash:a})});case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=(n(323),Object(h.c)({key:v,default:void 0})),re=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],O=s[1],p=Object(h.g)(N),m=Object(h.g)(L),x=Object(h.f)(ae);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return r(!0)},children:"Load Data"}),Object(C.jsxs)(o.a,{onClose:function(){return r(!1)},open:n,className:"loadDataDialog",children:[Object(C.jsx)(l.a,{children:"Type in Chapter Name to Load Data"}),Object(C.jsx)(j.a,{children:Object(C.jsx)(d.a,{onChange:function(e){O(e.target.value)},value:u,placeholder:"Chapter Name Here",autoFocus:!0,margin:"dense",id:"chapter",label:"Chapter Name",fullWidth:!0,variant:"standard"})}),Object(C.jsxs)(b.a,{children:[u&&Object(C.jsx)(f.a,{onClick:function(){x&&Q(u,x._id.$oid).then((function(e){e.length>0&&(p(e[e.length-1].users),m(e[e.length-1].chats))})).then((function(){O(""),r(!1)}))},children:"Load Data"}),Object(C.jsx)(f.a,{onClick:function(){return r(!1)},children:"Cancel"})]})]})]})},ce=(n(324),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],O=s[1],p=Object(h.f)(N),m=Object(h.f)(L),x=Object(h.f)(ae);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return r(!0)},children:"Save Data"}),Object(C.jsxs)(o.a,{onClose:function(){return r(!1)},open:n,className:"loadDataDialog",children:[Object(C.jsx)(l.a,{children:"Fill in Chapter Name and Author to Save"}),Object(C.jsx)(j.a,{children:Object(C.jsx)(d.a,{onChange:function(e){O(e.target.value)},value:u,placeholder:"Chapter Name Here",autoFocus:!0,margin:"dense",id:"chapter",label:"Chapter Name",fullWidth:!0,variant:"standard"})}),Object(C.jsxs)(b.a,{children:[u&&Object(C.jsx)(f.a,{onClick:function(){x&&X(u,x,p,m).then((function(e){console.log(e)})).then((function(){r(!1)}))},children:"Load Data"}),Object(C.jsx)(f.a,{onClick:function(){return r(!1)},children:"Cancel"})]})]})]})}),se=function(e){var t=e.title;return Object(C.jsxs)("div",{className:"header",children:[t||"Header Here",Object(C.jsx)(E,{}),Object(C.jsx)(S,{}),Object(C.jsx)(R,{}),Object(C.jsx)(re,{}),Object(C.jsx)(ce,{})]})},ie=(n(325),n(326),function(){return Object(C.jsx)("div",{className:"displaySection",children:"Display Section Here"})}),ue=(n(327),n(328),n(329),function(e){var t=e.currentUser,n=e.setCurrentUser,a=e.chatUsers,r=a.reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(y.a)({},t.name,t))}),{});return Object(C.jsx)("div",{children:Object(C.jsxs)(F.a,{fullWidth:!0,children:[Object(C.jsx)(P.a,{id:"select-user-label",children:"User"}),Object(C.jsx)(T.a,{labelId:"select-user-label",id:"select-user",value:t.name,label:"User",onChange:function(e){n(r[e.target.value])},children:a.map((function(e){return Object(C.jsx)(I.a,{value:e.name,children:e.name},e.name)}))})]})})}),oe=(n(330),n(188)),le=n.n(oe),je=function(e){var t,n,a=e.message,r=e.index,c=e.chatUsers,s=e.groupName,i=c.findIndex((function(e){var t;return e.name===(null===(t=a.sender)||void 0===t?void 0:t.name)}))%2===0,u=(null===(t=a.sender)||void 0===t?void 0:t.name)?"".concat(a.sender.name,": "):"";return n=a.sender?i?"leftMessage":"rightMessage":"centerMessage",Object(C.jsx)("div",{className:le()("chatMessage",n),children:Object(C.jsxs)("p",{className:"centerMessage"===n?"special":"",children:[u&&Object(C.jsx)("span",{className:"senderName",children:"".concat(u)}),a.text]})},"".concat(s,"-").concat(r))},de=function(e){var t=e.chat,n=Object(a.useState)(t.users[0]),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],b=Object(h.g)(G),f=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;null===(e=f.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t.messages.length]),Object(C.jsxs)("div",{className:"singleChat",children:[Object(C.jsx)("div",{className:"groupName",children:t.groupName}),Object(C.jsxs)("div",{className:"chatMessages",children:[t.messages.map((function(e,n){return Object(C.jsx)(je,{message:e,index:n,chatUsers:t.users,groupName:t.groupName},n)})),Object(C.jsx)("div",{ref:f})]}),Object(C.jsxs)("div",{className:"chatInputWrapper",children:[Object(C.jsx)(W.a,{placeholder:"Message Here",value:j,onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j&&(b([Object(w.a)(Object(w.a)({},t),{},{messages:[].concat(Object(u.a)(t.messages),[{text:j,sender:c}])})]),d(""),e.preventDefault())}}),Object(C.jsx)(ue,{chatUsers:t.users,currentUser:c,setCurrentUser:s})]})]})},be=function(){var e=Object(h.f)(L);return Object(C.jsx)("div",{className:"chatPages",children:e.length>0?e.map((function(e){return Object(C.jsx)(de,{chat:e},e.groupName)})):"No Chats Available"})},fe=function(){return Object(C.jsxs)("div",{className:"basePage",children:[Object(C.jsx)(ie,{}),Object(C.jsx)(be,{})]})},he=(n(331),function(e){var t=e.title;return Object(C.jsx)("div",{className:"footer",children:t||"Footer Here"})}),Oe=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(se,{title:"Texing FF Helper"}),Object(C.jsx)(fe,{}),Object(C.jsx)(he,{title:"Created by Yours Truly"})]})},pe=(n(332),n(5)),me=n(389),xe=n(402),ge=(n(333),Object(pe.a)(f.a)((function(){return{backgroundColor:"#8B0000","&:hover":{backgroundColor:"#8B0000"}}}))),ve=function(e){var t=e.formState,n=e.setFormState,a=e.submitEnabled,r=e.handleSubmit;return Object(C.jsxs)("div",{className:"buttonWrapper",children:[Object(C.jsxs)(me.a,{value:t,exclusive:!0,onChange:function(e,t){n(t)},"aria-label":"text alignment",children:[Object(C.jsx)(xe.a,{value:"login","aria-label":"left aligned",children:"Login"}),Object(C.jsx)(xe.a,{value:"signup","aria-label":"centered",children:"Sign Up"})]}),Object(C.jsx)(ge,{variant:"contained",onClick:r,disabled:!a,children:"Submit"})]})},Ne=(n(334),function(){return Object(C.jsxs)("div",{className:"titleWrapper",children:[Object(C.jsx)("div",{className:"welcomeTitle",children:"Welcome to Text FF Helper"}),Object(C.jsx)("div",{className:"secondaryText",children:"Login or Sign Up to Continue"})]})}),Ce=n(390),Se=(n(335),function(e){var t=e.setUserName,n=e.userName,a=e.userNameValid,r=e.setPassword,c=e.password,s=e.passwordValid,i=e.setVerifyPassword,u=e.verifyPassword,o=e.verifyValid,l=e.formState;return Object(C.jsx)("div",{className:"gridWrapper",children:Object(C.jsxs)(Ce.a,{container:!0,direction:"column",spacing:2,children:[Object(C.jsx)(Ce.a,{item:!0,children:Object(C.jsx)(d.a,{className:"loginSignupFormField",required:!0,id:"outlined-required",value:n,label:"Required",error:!a,helperText:a?"":"Username must be alphanumeric, 5-25 characters",placeholder:"Enter Username",onChange:function(e){t(e.target.value)}})}),Object(C.jsx)(Ce.a,{item:!0,children:Object(C.jsx)(d.a,{className:"loginSignupFormField",type:"password",id:"password",label:"Password",value:c,error:!s,helperText:s?"":"Password must be alphanumeric, 5-25 characters",placeholder:"Enter Password",onChange:function(e){r(e.target.value)}})}),"signup"===l&&Object(C.jsx)(Ce.a,{item:!0,children:Object(C.jsx)(d.a,{className:"loginSignupFormField",type:"password",id:"verify-password",label:"Verify Password",value:u,error:!o,helperText:o?"":"Password do not match",placeholder:"Verify Password",onChange:function(e){i(e.target.value)}})})]})})}),ye=function(){var e=Object(h.g)(ae),t=Object(a.useState)("login"),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),o=u[0],l=u[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),b=d[0],f=d[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),m=p[0],x=p[1],g=function(){l(""),f(""),x("")},v=function(){var t=Object(Z.a)(z.a.mark((function t(){var n,a,r,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o||!b){t.next=14;break}return t.next=3,ee(o);case 3:if(n=t.sent,0!==n.users.length){t.next=14;break}return t.next=8,ne(o,b);case 8:return t.next=10,ee(o);case 10:a=t.sent,r=a.json(),c=r.users[0],e(c);case 14:g();case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(Z.a)(z.a.mark((function t(){var n,a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(o);case 2:n=t.sent,(a=n.users).length>0&&(r=a[0],te(o,b)===r.passwordHash&&e(r)),g();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var e=Object(Z.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("login"!==r){e.next=6;break}return e.next=3,N();case 3:case 8:return e.abrupt("return",e.sent);case 6:return e.next=8,v();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=null!==(null===o||void 0===o?void 0:o.match(/^[A-Za-z]\w{5,25}$/)),w=null!==(null===b||void 0===b?void 0:b.match(/^[A-Za-z]\w{5,25}$/)),k=b===m,U=y&&w;return Object(C.jsx)("div",{className:"pageBackground",children:Object(C.jsxs)("div",{className:"loginSignupForm",children:[Object(C.jsx)(Ne,{}),Object(C.jsx)(Se,{userName:o,password:b,verifyPassword:m,userNameValid:y,passwordValid:w,verifyValid:k,setUserName:l,setPassword:f,setVerifyPassword:x,formState:r}),Object(C.jsx)(ve,{submitEnabled:"login"===r?U:U&&k,formState:r,setFormState:c,handleSubmit:S})]})})};var we=function(){var e=Object(h.e)(ae),t=Object(i.a)(e,1)[0];return Object(C.jsx)("div",{className:"App",children:t?Object(C.jsx)(Oe,{}):Object(C.jsx)(ye,{})})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,403)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(h.b,{children:Object(C.jsx)(we,{})})}),document.getElementById("root")),ke()}},[[336,1,2]]]);
//# sourceMappingURL=main.f615127c.chunk.js.map