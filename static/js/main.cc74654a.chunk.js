(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{107:function(e,t,n){var r=n(33),a=n(227);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},124:function(e,t,n){var r=n(33),a=n(225);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},15:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(119),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ace3cadb-a0de-40a5-831b-91417c9feabb"}}),o={getUsers:function(e,t){var n="users/?page=".concat(e,"&count=").concat(t);return a.get(n).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),i.getProfile(e)},getAuthMe:function(){return a.get("auth/me").then((function(e){return e.data}))},unfollow:function(e){var t="follow/".concat(e);return a.delete(t).then((function(e){return e.data}))},follow:function(e){var t="follow/".concat(e);return a.post(t).then((function(e){return e.data}))}},i={getProfile:function(e){var t="profile/".concat(e);return a.get(t).then((function(e){return e.data}))},getStatus:function(e){var t="profile/status/".concat(e);return a.get(t).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))}},c={me:function(){return a.get("auth/me").then((function(e){return e}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},210:function(e,t,n){},211:function(e,t,n){var r=n(33),a=n(212);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},212:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,"html{background-color:lightslategrey}.app_wrapper{max-width:80%;margin:0 auto}.app_wrapper_content{background:grey;margin-left:29%}\n","",{version:3,sources:["webpack://src/App.scss"],names:[],mappings:"AAAA,KACE,+BAAgC,CACjC,aAGC,aAAc,CACd,aAAc,CACf,qBAGC,eAAgB,CAChB,eAAgB",sourcesContent:["html {\r\n  background-color: lightslategrey;\r\n}\r\n\r\n.app_wrapper {\r\n  max-width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app_wrapper_content {\r\n  background: grey;\r\n  margin-left: 29%;\r\n}"],sourceRoot:""}]),t.default=a},213:function(e,t,n){var r=n(33),a=n(214);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},214:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,".nav{float:left;background:grey;width:28%;padding:10px 0}.item a{display:inline-block;font-size:16px;color:#cdd8e4;text-decoration:none;padding:1em 1.5em;outline:none;border-right:1px solid rgba(13,20,27,0.5);border-top:1px solid rgba(255,255,255,0.01);background-color:#404952;background-image:radial-gradient(1px 60% at 0% 50%, rgba(255,255,255,0.3), transparent),radial-gradient(1px 60% at 100% 50%, rgba(255,255,255,0.3), transparent),linear-gradient(#404952, #48515a);margin-bottom:10px}.item a:hover{background-image:radial-gradient(1px 60% at 0% 50%, rgba(255,255,255,0.3), transparent),radial-gradient(1px 60% at 100% 50%, rgba(255,255,255,0.3), transparent),linear-gradient(#333c43, #3a4148)}.item a.active{color:#f5f7fa;border-top:1px solid #436f88;background-image:linear-gradient(#2e5f7a, #24445c)}.item a.active:hover{border-top:1px solid #31576b;background-image:linear-gradient(#214d62, #1d394d)}\n","",{version:3,sources:["webpack://src/my_components/Nav/Nav.scss"],names:[],mappings:"AAAA,KACE,UAAW,CACX,eAAgB,CAChB,SAAU,CACV,cAAe,CAChB,QAGC,oBAAqB,CACrB,cAAe,CACf,aAAc,CACd,oBAAqB,CACrB,iBAAkB,CAClB,YAAa,CACb,yCAA6C,CAC7C,2CAA+C,CAC/C,wBAAyB,CACzB,kMAA2M,CAC3M,kBAAmB,CACpB,cAGC,kMAEiD,CAClD,eAGC,aAAyB,CACzB,4BAAuC,CACvC,kDAAoE,CACrE,qBAGC,4BAAsC,CACtC,kDAAmE",sourcesContent:[".nav {\r\n  float: left;\r\n  background: grey;\r\n  width: 28%;\r\n  padding: 10px 0;\r\n}\r\n\r\n.item a {\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  color: #cdd8e4;\r\n  text-decoration: none;\r\n  padding: 1em 1.5em;\r\n  outline: none;\r\n  border-right: 1px solid rgba(13, 20, 27, 0.5);\r\n  border-top: 1px solid rgba(255, 255, 255, 0.01);\r\n  background-color: #404952;\r\n  background-image: radial-gradient(1px 60% at 0% 50%, rgba(255, 255, 255, 0.3), transparent), radial-gradient(1px 60% at 100% 50%, rgba(255, 255, 255, 0.3), transparent), linear-gradient(#404952, #48515a);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.item a:hover {\r\n  background-image: radial-gradient(1px 60% at 0% 50%, rgba(255, 255, 255, .3), transparent),\r\n  radial-gradient(1px 60% at 100% 50%, rgba(255, 255, 255, .3), transparent),\r\n  linear-gradient(rgb(51, 60, 67), rgb(58, 65, 72));\r\n}\r\n\r\n.item a.active {\r\n  color: rgb(245, 247, 250);\r\n  border-top: 1px solid rgb(67, 111, 136);\r\n  background-image: linear-gradient(rgb(46, 95, 122), rgb(36, 68, 92));\r\n}\r\n\r\n.item a.active:hover {\r\n  border-top: 1px solid rgb(49, 87, 107);\r\n  background-image: linear-gradient(rgb(33, 77, 98), rgb(29, 57, 77));\r\n}"],sourceRoot:""}]),t.default=a},224:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,"._2OSYBoXmSDU7y6RnuTO7MZ{display:inline-block;background-color:#cdd8e4;opacity:.5;padding:5px;cursor:default;font-size:20px;font-weight:bold;transition:all .2s;margin:5px;width:40px}._2OSYBoXmSDU7y6RnuTO7MZ:hover{color:green;opacity:1}._2OSYBoXmSDU7y6RnuTO7MZ._1QXQ4CDfDlGke-3mubN0M-{color:green}\n","",{version:3,sources:["webpack://src/my_components/common/Paginator/Paginator.module.scss"],names:[],mappings:"AAAA,yBACI,oBAAqB,CACrB,wBAAyB,CACzB,UAAW,CACX,WAAY,CACZ,cAAe,CACf,cAAe,CACf,gBAAiB,CACjB,kBAAmB,CACnB,UAAW,CACX,UAAW,CAVf,+BAaK,WAAY,CACZ,SAAU,CAdf,iDAkBK,WAAY",sourcesContent:[".paginationItem {\r\n    display: inline-block;\r\n    background-color: #cdd8e4;\r\n    opacity: .5;\r\n    padding: 5px;\r\n    cursor: default;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    transition: all .2s;\r\n    margin: 5px;\r\n    width: 40px;\r\n\r\n&:hover {\r\n     color: green;\r\n     opacity: 1;\r\n }\r\n\r\n&.selected {\r\n     color: green;\r\n }\r\n}"],sourceRoot:""}]),a.locals={paginationItem:"_2OSYBoXmSDU7y6RnuTO7MZ",selected:"_1QXQ4CDfDlGke-3mubN0M-"},t.default=a},225:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,"._2UTXy1Zb58iSo2TcomqQNC{width:100px}\n","",{version:3,sources:["webpack://src/my_components/Users/Users.module.scss"],names:[],mappings:"AAAA,yBACE,WAAY",sourcesContent:[".usersLogo {\r\n  width: 100px;\r\n}"],sourceRoot:""}]),a.locals={usersLogo:"_2UTXy1Zb58iSo2TcomqQNC"},t.default=a},226:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,"._3OoVAfeJx8BE0SHXp-8dbT{width:100%;height:100%;background-color:black;opacity:.8;position:fixed;z-index:9999;top:0;left:0;bottom:0;right:0;display:flex;justify-content:center;align-items:center}._3M6t6_6iDcjNj0kEA26EHu{width:500px}\n","",{version:3,sources:["webpack://src/my_components/common/preloader/Preloader.module.scss"],names:[],mappings:"AAAA,yBACE,UAAW,CACX,WAAY,CACZ,sBAAuB,CACvB,UAAW,CACX,cAAe,CACf,YAAa,CACb,KAAM,CACN,MAAO,CACP,QAAS,CACT,OAAQ,CACR,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACpB,yBAGC,WAAY",sourcesContent:[".preloader_box {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: .8;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.preloader_img {\r\n  width: 500px;\r\n}"],sourceRoot:""}]),a.locals={preloader_box:"_3OoVAfeJx8BE0SHXp-8dbT",preloader_img:"_3M6t6_6iDcjNj0kEA26EHu"},t.default=a},227:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r)()(!0);a.push([e.i,".header{background:grey;display:flex;justify-content:space-between;padding:5px 10px 5px;margin-bottom:10px}.header__logo{width:150px}.loginBlock{float:right}\n","",{version:3,sources:["webpack://src/my_components/Header/Header.scss"],names:[],mappings:"AAAA,QACI,eAAgB,CAChB,YAAa,CACb,6BAA8B,CAC9B,oBAAqB,CACrB,kBAAmB,CAEvB,cACK,WAAY,CACf,YAIA,WAAY",sourcesContent:[".header {\r\n    background: grey;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 5px 10px 5px;\r\n    margin-bottom: 10px;\r\n\r\n&__logo {\r\n     width: 150px;\r\n }\r\n}\r\n\r\n.loginBlock {\r\n  float: right;\r\n}"],sourceRoot:""}]),t.default=a},267:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,276)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))},i=n(8),c=n(86),s=n(95),u={},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return e},d=n(9),p=n.n(d),f=n(17),b=n(37),g=n(4),j=n(15),h=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(g.a)(Object(g.a)({},e),r):e}))},A="FOLLOW",O="UNFOLLOW",m="SET_USERS",x="SET_CURRENT_PAGE",C="SET_TOTAL_USERS_COUNT",v="TOGGLE_IS_FETCHING",w="TOGGLE_IS_FOLLOWING_PROGRESS",y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},_=function(e){return{type:A,userID:e}},B=function(e){return{type:O,userID:e}},k=function(e){return{type:x,currentPage:e}},S=function(e){return{type:v,isFetching:e}},P=function(e,t){return{type:w,isFetching:e,userId:t}},I=function(){var e=Object(f.a)(p.a.mark((function e(t,n,r,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(P(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(g.a)(Object(g.a)({},e),{},{users:h(e.users,"id",t.userID,{followed:!0})});case O:return Object(g.a)(Object(g.a)({},e),{},{users:h(e.users,"id",t.userID,{followed:!1})});case m:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case x:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case C:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case v:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case w:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(b.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},E="samurai-network/auth/SET_USER_DATA",M={userId:null,login:null,email:null,isAuth:!1},D=function(e,t,n,r){return{type:E,payload:{userId:e,email:t,login:n,isAuth:r}}},T=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,a,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b.getAuthMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.login,o=r.id,i=r.email,t(D(o,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},z=n(120),L=n(270),R="INITIALIZED",F={initialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},W=Object(i.c)({profilePage:c.b,messagesPage:s.b,sidebar:l,usersPage:U,auth:N,form:L.a,app:Y}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,X=Object(i.e)(W,G(Object(i.a)(z.a)));window.__store__=X;var H=X,Q=n(53),q=n.n(Q),V=(n(210),n(26)),Z=n(27),J=n(29),K=n(28),$=(n(211),n(213),n(12)),ee=n(1);function te(){return Object(ee.jsxs)("nav",{className:"nav",children:[Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/profile",children:"Profile"})}),Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/dialogs",children:"Dialogs"})}),Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/users",children:"Users"})}),Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/news",children:"News"})}),Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/settings",children:"Settings"})}),Object(ee.jsx)("div",{className:"item",children:Object(ee.jsx)($.b,{to:"/music",children:"Music"})})]})}var ne=function(){return Object(ee.jsx)("div",{className:"footer",children:"Footer"})},re=function(e){return Object(ee.jsx)("div",{children:"News"})},ae=function(e){return Object(ee.jsx)("div",{children:"Music"})},oe=function(e){return Object(ee.jsx)("div",{children:"Settings"})},ie=n(11),ce=n(118),se=n(81),ue=n.n(se),le=function(e){for(var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,o=e.pageSize,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(a/o),u=[],l=1;l<=s;l++)u.push(l);var d=Math.ceil(s/c),p=Object(r.useState)(1),f=Object(ce.a)(p,2),b=f[0],g=f[1],j=(b-1)*c+1,h=b*c;return Object(ee.jsxs)("div",{children:[b>1&&Object(ee.jsx)("button",{onClick:function(){g(b-1)},children:"Left"}),u.filter((function(e){return e>=j&&e<=h})).map((function(e){return Object(ee.jsx)("span",{className:"".concat(ue.a.paginationItem," ").concat(t===e?ue.a.selected:""),onClick:function(t){n(e)},children:e})})),d>b&&Object(ee.jsx)("button",{onClick:function(){g(b+1)},children:"Right"})]})},de=n(124),pe=n.n(de),fe=n.p+"static/media/16.ad9823a1.jpg",be=function(e){var t=e.user,n=e.follow,r=e.unfollow,a=e.followingInProgress;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{to:"/profile/"+t.id,children:Object(ee.jsx)("img",{src:null!=t.photos.small?t.photos.large:fe,alt:"",className:pe.a.usersLogo})})}),Object(ee.jsx)("div",{children:t.followed?Object(ee.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(ee.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("div",{children:[Object(ee.jsx)("div",{children:t.name}),Object(ee.jsxs)("div",{children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",t.status]}),Object(ee.jsxs)("div",{children:["\u0410\u0439\u0434\u0438\u0448\u043d\u0438\u043a: ",t.id]})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)("div",{children:"user.location.country"}),Object(ee.jsx)("div",{children:"user.location.city"})]})]})]},t.id)},ge=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,o=e.users,i=e.follow,c=e.unfollow,s=e.followingInProgress,u=Math.ceil(r/a),l=[],d=1;d<=u;d++)l.push(d);return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(le,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:a}),o.map((function(e){return Object(ee.jsx)(be,{user:e,follow:i,unfollow:c,followingInProgress:s})}))]})},je=n(54),he=n(10),Ae=function(e){return{isAuth:e.auth.isAuth}},Oe=n(125),me=Object(Oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),xe=function(e){return e.usersPage.pageSize},Ce=function(e){return e.usersPage.totalUsersCount},ve=function(e){return e.usersPage.currentPage},we=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingInProgress},_e=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){var e=this.props,t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.users,o=e.follow,i=e.unfollow,c=e.followingInProgress,s=e.isFetching;return Object(ee.jsxs)(ee.Fragment,{children:[s?Object(ee.jsx)(je.a,{}):null,Object(ee.jsx)(ge,{totalUsersCount:t,pageSize:n,currentPage:r,onPageChanged:this.onPageChanged,users:a,follow:o,unfollow:i,followingInProgress:c})]})}}]),n}(r.Component),Be=Object(i.d)(Object(ie.b)((function(e){return{users:me(e),pageSize:xe(e),totalUsersCount:Ce(e),currentPage:ve(e),isFetching:we(e),followingInProgress:ye(e)}}),{follow:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,j.b.follow.bind(j.b),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,j.b.unfollow.bind(j.b),B);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,getUsers:function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S(!0)),r(k(e)),n.next=4,j.b.getUsers(e,t);case 4:a=n.sent,r(S(!1)),r((i=a.items,{type:m,users:i})),r((o=a.totalCount,{type:C,count:o}));case 8:case"end":return n.stop()}var o,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}),(function(e){var t=function(t){Object(J.a)(r,t);var n=Object(K.a)(r);function r(){return Object(V.a)(this,r),n.apply(this,arguments)}return Object(Z.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(ee.jsx)(e,Object(g.a)({},this.props)):Object(ee.jsx)(he.a,{to:"/login"})}}]),r}(a.a.Component);return Object(ie.b)(Ae)(t)}))(_e);n(107);function ke(e){return Object(ee.jsxs)("header",{className:"header",children:[Object(ee.jsx)("div",{className:"header__logo",children:Object(ee.jsx)("img",{src:"https://yandex.ru/images/_crpd/A99w3PM36/ec5cb5MuT52/TfIzU-Ss9riVC7xWARn5YwwHQWLU_Ckf19YeYGOQoPGwrxU5A15Xq_67RxHVBXbbVLL7snPb0uxhaSPBW3w_ok21p9bne6T8gInrQc_XdzjHCc-9nOIhFUbCSbS0w_I1YTXM_V1ESy-iMxlM3hX6w9_u5PaiwI9rPzjuBtMjtvaUZTcfKL9wNUqA8FPEk3F1g4BNfdLoIJjJSwZzNIbrcy17Q60eiM-sZj7ciVhRvMJepO3_pUjNbjy7IsSSKbH_3-cznO37dHGFiDidRdUxOwdIQfca4yuVAosDtrzA6r-l9wujVU3DIq78VkaSGrEMn2Pt9qNOxmB4PW4JXGO9PdstfVvifL4xgMywkwFQNngHAsE93ugpUIqKR7e-zW-1ofMIZRMFRWLqt5dO3dU1zNCnajPoyIAlsfJohx1gePRVqDyWKn60vEfIuRAInbx7ScwMNNfvrdOABED29MTtO2T0DWPaSULh4L_XwtjYOo0Z4Oo_4o8O4P285YgcbvYxFWOyE6D0-3BMBHZYjd0xdIoABXXcIqnUwYmLuTaI5fqo8o_jVYRHIS80XwWYl_IIWGuiuu-EyeC4tesMU-Kxt9pndR_uM_L5D0E-WUhTvPDMDol8HyZtFArOgXlwxG33rzCILdBAwCTl-5-CUJJ5y1Qip39qyw7p97MgBByu8L4b7bSaYHvztYMEfFcMHP5-BcZBOxZnadxFgUt8MUUpNeAzgq2dyMmoafGSjp1X-cVRryRwYo_BIzf6YsufrvV2GaT7GiY0sHUPR3UUQRy5NoUCxXvdJWgbygBGPPmBJ7Ws80clEoJIZig_k8-d2TaGligs8StEhWtw8m0LnCf2tJ1jP90ktz81Qg_2WYudOTHJjoWzUyEtVoFHyXl5wep_rnlH6FfIjisieJgKFhF-Q9WjLvaqxQku8LwqT91iejQV6T-Ypfa5dwSGcNFCmbo4zksAfNVi7psIxIG2dE",alt:""})}),Object(ee.jsxs)("div",{className:"loginBlock",children:[e.isAuth?Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{onClick:e.logout,children:"Log out"})}):Object(ee.jsx)($.b,{to:"/login",children:"Login"}),Object(ee.jsxs)("div",{children:["\u041f\u043e\u0447\u0442\u0430: ",e.email]}),Object(ee.jsxs)("div",{children:["ID: ",e.userId]})]})]})}var Se=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(ee.jsx)(ke,Object(g.a)({},this.props))}}]),n}(r.Component),Pe=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email,userId:e.auth.userId}}),{logout:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.logout();case 2:0===e.sent.resultCode&&t(D(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),Ie=n(269),Ue=n(268),Ee=Object(Ue.a)({form:"login"})((function(e){var t=e.handleSubmit;return Object(ee.jsxs)("form",{onSubmit:t,children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(Ie.a,{name:"email",placeholder:"login",component:"input"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(Ie.a,{name:"password",placeholder:"password",component:"input",type:"password"})}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(Ie.a,{name:"rememberMe",type:"checkbox",component:"input"})," Remember me"]}),Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{children:"Login"})})]})})),Me=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(f.a)(p.a.mark((function r(a){return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.login(e,t,n);case 2:0===r.sent.resultCode&&a(T());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ee.jsx)(he.a,{to:"/profile"}):Object(ee.jsxs)("div",{className:"form",children:[Object(ee.jsx)("h1",{children:"Login"}),Object(ee.jsx)(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),De=function(e){return function(t){return Object(ee.jsx)(r.Suspense,{fallback:Object(ee.jsx)("div",{children:"Loading..."}),children:Object(ee.jsx)(e,Object(g.a)({},t))})}},Te=a.a.lazy((function(){return n.e(4).then(n.bind(null,278))})),Ne=a.a.lazy((function(){return n.e(3).then(n.bind(null,277))})),ze=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ee.jsxs)("div",{className:"app_wrapper",children:[Object(ee.jsx)(Pe,{}),Object(ee.jsx)(te,{}),Object(ee.jsxs)("div",{className:"app_wrapper_content",children:[Object(ee.jsx)(he.b,{path:"/profile/:userId?",render:De(Ne)}),Object(ee.jsx)(he.b,{exact:!0,path:"/dialogs",render:De(Te)}),Object(ee.jsx)(he.b,{exact:!0,path:"/users",render:function(){return Object(ee.jsx)(Be,{})}}),Object(ee.jsx)(he.b,{exact:!0,path:"/news",component:re}),Object(ee.jsx)(he.b,{exact:!0,path:"/music",component:ae}),Object(ee.jsx)(he.b,{exact:!0,path:"/settings",component:oe}),Object(ee.jsx)(he.b,{exact:!0,path:"/login",component:Me})]}),Object(ee.jsx)(ne,{})]}):Object(ee.jsx)(je.a,{})}}]),n}(a.a.Component),Le=Object(ie.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:"INITIALIZED"})}))}}})(ze),Re=function(e){return Object(ee.jsx)(ie.a,{store:H,children:Object(ee.jsx)($.a,{children:Object(ee.jsx)(Le,{})})})};q.a.render(Object(ee.jsx)(Re,{}),document.getElementById("root")),o()},54:function(e,t,n){"use strict";var r=n.p+"static/media/loader.1baf7e2b.gif",a=n(82),o=n.n(a),i=(n(0),n(1));t.a=function(e){return Object(i.jsx)("div",{className:o.a.preloader_box,children:Object(i.jsx)("img",{src:r,className:o.a.preloader_img,alt:"preloader"})})}},81:function(e,t,n){var r=n(33),a=n(224);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},82:function(e,t,n){var r=n(33),a=n(226);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return A}));var r=n(9),a=n.n(r),o=n(17),i=n(37),c=n(4),s=n(15),u="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_STATUS",p="DELETE_POST",f={postsData:[{id:1,message:"Hello",likesCount:12},{id:2,message:"how are you",likesCount:25},{id:3,message:"bitch",likesCount:3}],userProfile:null,userStatus:""},b=function(e){return{type:u,newPostText:e}},g=function(e){return{type:d,userStatus:e}},j=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getStatus(e);case 2:r=t.sent,n(g(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[n])});case l:return Object(c.a)(Object(c.a)({},e),{},{userProfile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{userStatus:t.userStatus});case p:return Object(c.a)(Object(c.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(37),a=n(4),o="ADD_MESSAGE",i={messagesData:[{id:1,text:"Hello bitches"},{id:2,text:"Hello"},{id:3,text:"bitches"}],dialogsData:[{id:1,name:"Slava",age:30},{id:2,name:"Andrey",age:25},{id:3,name:"Igor",age:18}]},c=function(e){return{type:"ADD_MESSAGE",newText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:4,text:t.newText}])});default:return e}}}},[[267,1,2]]]);
//# sourceMappingURL=main.cc74654a.chunk.js.map