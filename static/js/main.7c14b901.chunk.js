(this["webpackJsonptexting-ff-helper"]=this["webpackJsonptexting-ff-helper"]||[]).push([[0],{234:function(e,t,n){},235:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},253:function(e,t){},255:function(e,t){},265:function(e,t){},267:function(e,t){},294:function(e,t){},296:function(e,t){},297:function(e,t){},302:function(e,t){},304:function(e,t){},310:function(e,t){},312:function(e,t){},331:function(e,t){},343:function(e,t){},346:function(e,t){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){},358:function(e,t,n){},359:function(e,t,n){},360:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(42),c=n.n(s),i=(n(234),n(12)),o=(n(235),n(48)),u=n(33),l=n.n(u),d=n(60),j=n(83),b="userData",h={refetchOnMount:!1,refetchOnReconnect:!1,reftchOnWindowFocus:!0},f=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,t&&(n={userName:"someUserName"}),e.abrupt("return",{userData:n,isAuthenticated:void 0!==n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(237),n(17)),p=n(413),m=n(420),x=n(421),g=n(409),v=n(426),N=n(427),C=(n(238),n(1)),S=function(e){var t=e.setTotalUsers,n=e.totalUsers,r=Object(a.useState)(!1),s=Object(i.a)(r,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],j=l[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return o(!0)},children:"Add User"}),Object(C.jsxs)(p.a,{onClose:function(){return o(!1)},open:c,className:"addUserDialog",children:[Object(C.jsx)(m.a,{children:"Add a new name to update the list of total users in the story!"}),Object(C.jsx)(x.a,{children:Object(C.jsx)(g.a,{onChange:function(e){j(e.target.value)},value:d,placeholder:"Add New Name Here",autoFocus:!0,margin:"dense",id:"user",label:"User Name",fullWidth:!0,variant:"standard"})}),Object(C.jsx)(v.a,{children:Object(C.jsx)(N.a,{onClick:function(){if(d){var e={name:d};t([].concat(Object(O.a)(n),[e]))}j(""),o(!1)},children:"Submit"})})]})]})},U=n(3),w=(n(245),n(429)),y=(n(246),n(46)),k=n(424),F=n(410),P=n(405),T=n(415),A=n(428),W=n(416),D=n(411),H={PaperProps:{style:{maxHeight:224,width:250}}};function M(e,t,n){return{fontWeight:-1===t.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}var V=function(e){var t=e.totalUsers,n=e.groupUsers,a=e.setGroupUsers,r=Object(y.a)();return Object(C.jsxs)(k.a,{sx:{m:1,width:300},children:[Object(C.jsx)(F.a,{id:"user-select-label",children:"Users"}),Object(C.jsx)(P.a,{labelId:"user-select-label",id:"user-select",multiple:!0,value:n,onChange:function(e){var t=e.target.value;a("string"===typeof t?t.split(","):t)},input:Object(C.jsx)(T.a,{id:"select-multiple-chip",label:"Chip"}),renderValue:function(e){return Object(C.jsx)(A.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(C.jsx)(W.a,{label:e},e)}))})},MenuProps:H,children:t.map((function(e){return Object(C.jsx)(D.a,{value:e.name,style:M(e.name,n,r),children:e.name},e.name)}))})]})},B=(n(247),function(e){var t=e.groupCreator,n=e.setGroupCreator,a=e.groupUsers;return Object(C.jsxs)(k.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(C.jsx)(F.a,{id:"group-creator-label",children:"Group Creator"}),Object(C.jsx)(P.a,{labelId:"group-creator-label",id:"group-creator",value:t,onChange:function(e){n(e.target.value)},label:"Group Creator",children:a.map((function(e){return Object(C.jsx)(D.a,{value:e,children:e},e)}))})]})}),I=function(e){var t=e.chats,n=e.setChats,r=e.totalUsers,s=Object(a.useState)(!1),c=Object(i.a)(s,2),u=c[0],l=c[1],d=Object(a.useState)([]),j=Object(i.a)(d,2),b=j[0],h=j[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),S=m[0],y=m[1],k=Object(a.useState)(""),F=Object(i.a)(k,2),P=F[0],T=F[1],A=r.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(U.a)({},t.name,t))}),{}),W=""!==P&&""!==S&&b.length>0;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return l(!0)},disabled:r.length<1,children:"New Chat"}),Object(C.jsxs)(p.a,{onClose:function(){return l(!1)},open:u,className:"addChatDialog",children:[Object(C.jsxs)(x.a,{className:"dialogContent",children:[Object(C.jsx)(w.a,{children:"Add users, give it a name, and begin a new chat!"}),Object(C.jsx)(g.a,{onChange:function(e){T(e.target.value)},value:P,placeholder:"Set Group Name Here",autoFocus:!0,margin:"dense",id:"group",label:"Group Name",fullWidth:!0,variant:"standard"}),Object(C.jsx)(V,{totalUsers:r,groupUsers:b,setGroupUsers:h}),b.length>0&&Object(C.jsx)(B,{groupCreator:S,setGroupCreator:y,groupUsers:b})]}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(N.a,{onClick:function(){if(b.length>0&&P&&S){var e={groupName:P,users:b.map((function(e){return A[e]})),creator:A[S],messages:[{text:"".concat(P," created by ").concat(S)}]};n([].concat(Object(O.a)(t),[e])),y(""),T(""),h([])}l(!1)},disabled:!W,children:"Submit"}),Object(C.jsx)(N.a,{onClick:function(){y(""),T(""),h([]),l(!1)},children:"Cancel"})]})]})]})},L=(n(248),n(425)),G=n(408),E=n(404),J=function(e){var t=e.totalUsers,n=e.chats,r=Object(a.useState)(!1),s=Object(i.a)(r,2),c=s[0],o=s[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return o(!0)},disabled:t.length<1,children:"See Total Users"}),Object(C.jsxs)(p.a,{onClose:function(){return o(!1)},open:c,className:"userListModal",children:[Object(C.jsx)(m.a,{children:"All Users"}),Object(C.jsx)(x.a,{className:"dialogContent",children:Object(C.jsx)(L.a,{children:t.map((function(e){var t=n.filter((function(t){return t.users.map((function(e){return e.name})).includes(e.name)})).length;return Object(C.jsx)(G.a,{children:Object(C.jsx)(E.a,{primary:e.name,secondary:"Active user in ".concat(t," chats")})},e.name)}))})}),Object(C.jsx)(v.a,{children:Object(C.jsx)(N.a,{onClick:function(){return o(!1)},children:"Close"})})]})]})},R=n(205),q="https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/text-ff-backend-forai/service/data-retrieval/incoming_webhook",Q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,fetch("".concat(q,"/get-chapter"),{method:"POST",body:JSON.stringify({chapterId:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a.chapters||[]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(l.a.mark((function e(t,n,a,r){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&n&&a.length)){e.next=7;break}return e.next=3,fetch("".concat(q,"/post-chapter"),{method:"POST",body:JSON.stringify({chapterId:t,author:n,users:a,chats:r})});case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,fetch("".concat(q,"/get-user"),{method:"POST",body:JSON.stringify({userName:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e,t){return Object(R.pbkdf2Sync)(t,"".concat(e,"ff"),100,32,"sha512").toString("hex")},K=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n){e.next=8;break}return a=$(t,n),e.next=4,fetch("".concat(q,"/post-user"),{method:"POST",body:JSON.stringify({userName:t,passwordHash:a})});case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=(n(349),function(e){var t=e.setTotalUsers,n=e.setChats,r=Object(a.useState)(!1),s=Object(i.a)(r,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],j=l[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return o(!0)},children:"Load Data"}),Object(C.jsxs)(p.a,{onClose:function(){return o(!1)},open:c,className:"loadDataDialog",children:[Object(C.jsx)(m.a,{children:"Type in Chapter Name to Load Data"}),Object(C.jsx)(x.a,{children:Object(C.jsx)(g.a,{onChange:function(e){j(e.target.value)},value:d,placeholder:"Chapter Name Here",autoFocus:!0,margin:"dense",id:"chapter",label:"Chapter Name",fullWidth:!0,variant:"standard"})}),Object(C.jsxs)(v.a,{children:[d&&Object(C.jsx)(N.a,{onClick:function(){Q(d).then((function(e){e.length>0&&(t(e[e.length-1].users),n(e[e.length-1].chats))})).then((function(){j(""),o(!1)}))},children:"Load Data"}),Object(C.jsx)(N.a,{onClick:function(){return o(!1)},children:"Cancel"})]})]})]})}),_=(n(350),function(e){var t=e.totalUsers,n=e.chats,r=Object(a.useState)(!1),s=Object(i.a)(r,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],j=l[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),f=h[0],O=h[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{className:"addButton",onClick:function(){return o(!0)},children:"Save Data"}),Object(C.jsxs)(p.a,{onClose:function(){return o(!1)},open:c,className:"loadDataDialog",children:[Object(C.jsx)(m.a,{children:"Fill in Chapter Name and Author to Save"}),Object(C.jsxs)(x.a,{children:[Object(C.jsx)(g.a,{onChange:function(e){j(e.target.value)},value:d,placeholder:"Chapter Name Here",autoFocus:!0,margin:"dense",id:"chapter",label:"Chapter Name",fullWidth:!0,variant:"standard"}),Object(C.jsx)(g.a,{onChange:function(e){O(e.target.value)},value:f,placeholder:"Author Name Here",autoFocus:!0,margin:"dense",id:"author",label:"Author Name",fullWidth:!0,variant:"standard"})]}),Object(C.jsxs)(v.a,{children:[d&&f&&Object(C.jsx)(N.a,{onClick:function(){z(d,f,t,n).then((function(e){console.log(e)})).then((function(){j(""),O(""),o(!1)}))},children:"Load Data"}),Object(C.jsx)(N.a,{onClick:function(){return o(!1)},children:"Cancel"})]})]})]})}),X=function(e){var t=e.title,n=e.chats,a=e.setChats,r=e.totalUsers,s=e.setTotalUsers;return Object(C.jsxs)("div",{className:"header",children:[t||"Header Here",Object(C.jsx)(I,{chats:n,setChats:a,totalUsers:r}),Object(C.jsx)(S,{totalUsers:r,setTotalUsers:s}),Object(C.jsx)(J,{totalUsers:r,chats:n}),Object(C.jsx)(Y,{setChats:a,setTotalUsers:s}),Object(C.jsx)(_,{totalUsers:r,chats:n})]})},ee=(n(351),n(352),function(){return Object(C.jsx)("div",{className:"displaySection",children:"Display Section Here"})}),te=(n(353),n(354),n(355),function(e){var t=e.currentUser,n=e.setCurrentUser,a=e.chatUsers,r=a.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(U.a)({},t.name,t))}),{});return Object(C.jsx)("div",{children:Object(C.jsxs)(k.a,{fullWidth:!0,children:[Object(C.jsx)(F.a,{id:"select-user-label",children:"User"}),Object(C.jsx)(P.a,{labelId:"select-user-label",id:"select-user",value:t.name,label:"User",onChange:function(e){n(r[e.target.value])},children:a.map((function(e){return Object(C.jsx)(D.a,{value:e.name,children:e.name},e.name)}))})]})})}),ne=(n(356),n(206)),ae=n.n(ne),re=function(e){var t,n,a=e.message,r=e.index,s=e.chatUsers,c=e.groupName,i=s.findIndex((function(e){var t;return e.name===(null===(t=a.sender)||void 0===t?void 0:t.name)}))%2===0,o=(null===(t=a.sender)||void 0===t?void 0:t.name)?"".concat(a.sender.name,": "):"";return n=a.sender?i?"leftMessage":"rightMessage":"centerMessage",Object(C.jsx)("div",{className:ae()("chatMessage",n),children:Object(C.jsxs)("p",{className:"centerMessage"===n?"special":"",children:[o&&Object(C.jsx)("span",{className:"senderName",children:"".concat(o)}),a.text]})},"".concat(c,"-").concat(r))},se=function(e){var t=e.chat,n=(e.totalUsers,Object(a.useState)(t.users[0])),r=Object(i.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t.messages.length]),Object(C.jsxs)("div",{className:"singleChat",children:[Object(C.jsx)("div",{className:"groupName",children:t.groupName}),Object(C.jsxs)("div",{className:"chatMessages",children:[t.messages.map((function(e,n){return Object(C.jsx)(re,{message:e,index:n,chatUsers:t.users,groupName:t.groupName})})),Object(C.jsx)("div",{ref:j})]}),Object(C.jsxs)("div",{className:"chatInputWrapper",children:[Object(C.jsx)(T.a,{placeholder:"Message Here",value:l,onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(t.messages=[].concat(Object(O.a)(t.messages),[{text:l,sender:s}]),d(""),e.preventDefault())}}),Object(C.jsx)(te,{chatUsers:t.users,currentUser:s,setCurrentUser:c})]})]})},ce=function(e){var t=e.chats,n=e.totalUsers;return Object(C.jsx)("div",{className:"chatPages",children:t.length>0?t.map((function(e){return Object(C.jsx)(se,{chat:e,totalUsers:n},e.groupName)})):"No Chats Available"})},ie=function(e){var t=e.chats,n=e.totalUsers;return Object(C.jsxs)("div",{className:"basePage",children:[Object(C.jsx)(ee,{}),Object(C.jsx)(ce,{chats:t,totalUsers:n})]})},oe=(n(357),function(e){var t=e.title;return Object(C.jsx)("div",{className:"footer",children:t||"Footer Here"})}),ue=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),c=Object(i.a)(s,2),o=c[0],u=c[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(X,{title:"Texing FF Helper",setChats:r,chats:n,totalUsers:o,setTotalUsers:u}),Object(C.jsx)(ie,{chats:n,totalUsers:o}),Object(C.jsx)(oe,{title:"Created by Yours Truly"})]})},le=(n(358),n(5)),de=n(417),je=n(430),be=(n(359),Object(le.a)(N.a)((function(){return{backgroundColor:"#8B0000","&:hover":{backgroundColor:"#8B0000"}}}))),he=function(e){var t=e.formState,n=e.setFormState,a=e.submitEnabled,r=e.handleSubmit;return Object(C.jsxs)("div",{className:"buttonWrapper",children:[Object(C.jsxs)(de.a,{value:t,exclusive:!0,onChange:function(e,t){n(t)},"aria-label":"text alignment",children:[Object(C.jsx)(je.a,{value:"login","aria-label":"left aligned",children:"Login"}),Object(C.jsx)(je.a,{value:"signup","aria-label":"centered",children:"Sign Up"})]}),Object(C.jsx)(be,{variant:"contained",onClick:r,disabled:!a,children:"Submit"})]})},fe=(n(360),function(){return Object(C.jsxs)("div",{className:"titleWrapper",children:[Object(C.jsx)("div",{className:"welcomeTitle",children:"Welcome to Text FF Helper"}),Object(C.jsx)("div",{className:"secondaryText",children:"Login or Sign Up to Continue"})]})}),Oe=n(418),pe=(n(361),function(e){var t=e.setUserName,n=e.userName,a=e.userNameValid,r=e.setPassword,s=e.password,c=e.passwordValid,i=e.setVerifyPassword,o=e.verifyPassword,u=e.verifyValid,l=e.formState;return Object(C.jsx)("div",{className:"gridWrapper",children:Object(C.jsxs)(Oe.a,{container:!0,direction:"column",spacing:2,children:[Object(C.jsx)(Oe.a,{item:!0,children:Object(C.jsx)(g.a,{className:"loginSignupFormField",required:!0,id:"outlined-required",value:n,label:"Required",error:!a,helperText:a?"":"Username must be alphanumeric, 5-25 characters",placeholder:"Enter Username",onChange:function(e){t(e.target.value)}})}),Object(C.jsx)(Oe.a,{item:!0,children:Object(C.jsx)(g.a,{className:"loginSignupFormField",type:"password",id:"password",label:"Password",value:s,error:!c,helperText:c?"":"Password must be alphanumeric, 5-25 characters",placeholder:"Enter Password",onChange:function(e){r(e.target.value)}})}),"signup"===l&&Object(C.jsx)(Oe.a,{item:!0,children:Object(C.jsx)(g.a,{className:"loginSignupFormField",type:"password",id:"verify-password",label:"Verify Password",value:o,error:!u,helperText:u?"":"Password do not match",placeholder:"Verify Password",onChange:function(e){i(e.target.value)}})})]})})}),me=function(e){var t=e.setAppUser,n=Object(a.useState)("login"),r=Object(i.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),h=b[0],f=b[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),m=p[0],x=p[1],g=function(){d(""),f(""),x("")},v=null!==(null===l||void 0===l?void 0:l.match(/^[A-Za-z]\w{5,25}$/)),N=null!==(null===h||void 0===h?void 0:h.match(/^[A-Za-z]\w{5,25}$/)),S=h===m,U=v&&N;return Object(C.jsx)("div",{className:"pageBackground",children:Object(C.jsxs)("div",{className:"loginSignupForm",children:[Object(C.jsx)(fe,{}),Object(C.jsx)(pe,{userName:l,password:h,verifyPassword:m,userNameValid:v,passwordValid:N,verifyValid:S,setUserName:d,setPassword:f,setVerifyPassword:x,formState:s}),Object(C.jsx)(he,{submitEnabled:"login"===s?U:U&&S,formState:s,setFormState:c,handleSubmit:function(){return"login"===s?void Z(l).then((function(e){return[e.users.length>0,e.users]})).then((function(e){var n=Object(i.a)(e,2),a=n[0],r=n[1];a&&$(l,h)===r[0].passwordHash?t({userName:l}):g()})):(l&&h&&Z(l).then((function(e){return e.users.length>0})).then((function(e){e?g():(K(l,h).then((function(e){console.log(e)})),t({userName:l}))})),!0)}})]})})};var xe=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(e){return Object(j.useQuery)([b,e],(function(){return f(e)}),Object(o.a)(Object(o.a)({},h),{},{enabled:!!e}))}(n),c=s.data;return Object(C.jsx)("div",{className:"App",children:(null===c||void 0===c?void 0:c.isAuthenticated)?Object(C.jsx)(ue,{}):Object(C.jsx)(me,{setAppUser:r})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,431)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},ve=new j.QueryClient;c.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(j.QueryClientProvider,{client:ve,children:Object(C.jsx)(xe,{})})}),document.getElementById("root")),ge()}},[[362,1,2]]]);
//# sourceMappingURL=main.7c14b901.chunk.js.map