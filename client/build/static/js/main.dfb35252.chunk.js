(this.webpackJsonpcfknockout=this.webpackJsonpcfknockout||[]).push([[0],{111:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(72),a=n.n(r),o=n(15),i=n.n(o),l=n(20),d=n(3),u=n(5),j=n(6),b=n(34),m=(n(47),n(73));n.n(m).a.config();var h=b.a.initializeApp({apiKey:"AIzaSyA8pIPwLzEO_Kfwgx14FD2JnfbtP1lS4EQ",authDomain:"cfknockout.firebaseapp.com",databaseURL:"https://cfknockout-default-rtdb.firebaseio.com",projectId:"cfknockout",storageBucket:"cfknockout.appspot.com",messagingSenderId:"995027400627",appId:"1:995027400627:web:39e34c517686fa012dfdc6"}),x=h.auth(),p=n(0),O=s.a.createContext(),f=new b.a.auth.GoogleAuthProvider;function g(){return Object(c.useContext)(O)}function v(e){var t=e.children,n=Object(c.useState)(),s=Object(d.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(!0),i=Object(d.a)(o,2),l=i[0],u=i[1];Object(c.useEffect)((function(){return x.onAuthStateChanged((function(e){a(e),u(!1)}))}),[]);var j={user:r,signUp:function(e,t){return x.createUserWithEmailAndPassword(e,t)},logIn:function(e,t){return x.signInWithEmailAndPassword(e,t)},logOut:function(){return x.signOut()},signInWithGoogle:function(){return x.signInWithPopup(f)},loading:l};return Object(p.jsx)(O.Provider,{value:j,children:t})}n(85);var N=n.p+"static/media/HeaderLogo.cd52f6c0.png";var y,w=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],r=g(),a=r.user,o=r.logOut,b=Object(u.g)(),m=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to logout ?")){e.next=10;break}return e.prev=1,e.next=4,o();case 4:b.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"navbar d-flex fw-bold customBg1",children:[Object(p.jsx)(j.b,{to:"/dashboard",className:"headerLogo",children:Object(p.jsxs)("div",{className:"d-flex align-items-center m-0 p-0",children:[Object(p.jsx)("img",{src:N,alt:"",className:"img-fluid",style:{maxWidth:"6vw",height:"3vh"}}),Object(p.jsxs)("div",{className:"mx-2 d-inline",children:[Object(p.jsx)("span",{className:"timer-responsive",children:"CF"}),Object(p.jsx)("span",{className:"timer-responsive",children:"Knockout"})]})]})}),n?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:n}):"",Object(p.jsx)("div",{className:"ms-auto",children:a?Object(p.jsx)("button",{className:"btn btn-danger mx-3 text-responsive",onClick:function(){return m()},children:"LogOut"}):null})]})},k=(n(93),function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("footer",{className:"d-flex container-fluid pos text-light bg-dark copyright px-sm-3 px-2",children:[Object(p.jsxs)("span",{className:"me-auto",children:["Copyright \xa9 ",(new Date).getFullYear()]}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("div",{className:"copyright-menu",children:Object(p.jsxs)("ul",{className:"p-0",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/SaketThota/CF-Knockout#readme",target:"_blank",rel:"noreferrer",children:"How to use"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/SaketThota/CF-Knockout#readme",target:"_blank",rel:"noreferrer",children:"Contact us"})})]})})})]})})}),S=(n(38),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(d.a)(r,2),o=a[0],b=a[1],m=Object(c.useState)(""),h=Object(d.a)(m,2),x=h[0],O=h[1],f=Object(c.useState)(!1),v=Object(d.a)(f,2),N=v[0],y=v[1],w=Object(u.g)(),k=g(),S=k.logIn,I=k.signInWithGoogle,C=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,O(""),y(!0),e.next=6,S(n,o);case 6:w.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O(e.t0.message);case 12:y(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,O(""),y(!0),e.next=6,I();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"px-4 p-sm-0 customBg",children:Object(p.jsx)("div",{className:"container-fluid d-grid",children:Object(p.jsx)("div",{className:"row justify-content-center align-items-center p-0",children:Object(p.jsxs)("div",{className:"col-12 col-sm-6 col-md-5 form-container",id:"login-box",children:[Object(p.jsx)("div",{className:"m-0 p-1 border-bottom fs-4 text-light bg-dark",id:"text",children:"Login to CFKnockout"}),Object(p.jsxs)("form",{id:"forms",children:[x?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:x}):"",Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form-control",required:!0,value:n,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",required:!0,value:o,onChange:function(e){return b(e.target.value)}})]}),Object(p.jsx)("button",{disabled:N,onClick:function(e){return C(e)},className:"btn btn-primary",children:"LogIn"}),Object(p.jsx)(j.b,{className:"mx-2 btn btn-outline-primary",to:"/signup",children:"SignUp"}),Object(p.jsxs)("div",{id:"lineor",className:"my-2",children:[Object(p.jsx)("div",{className:"lines"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:"OR"})}),Object(p.jsx)("div",{className:"lines"})]}),Object(p.jsx)("button",{className:"btn btn-outline-danger btn-block w-100 text-responsive",onClick:function(e){return R(e)},children:"Google"})]})]})})})})}),I=n(4),C=n.n(I),R=function(){var e=Object(u.g)(),t=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useState)(""),a=Object(d.a)(r,2),o=a[0],b=a[1],m=Object(c.useState)(!1),h=Object(d.a)(m,2),x=h[0],O=h[1],f=g().signUp,v=function(){var c=Object(l.a)(i.a.mark((function c(r){return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),n.current.value===s.current.value){c.next=3;break}return c.abrupt("return",b("Passwords do not match"));case 3:return c.prev=3,b(""),O(!0),c.next=8,f(t.current.value,n.current.value);case 8:C.a.post("/api/updateUser",{email:t.current.value}).then((function(t){e.push("/dashboard")})).catch((function(e){return console.log(e)})),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),b(c.t0.message);case 14:O(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})));return function(e){return c.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"px-4 p-sm-0 customBg",children:Object(p.jsx)("div",{className:"container-fluid d-grid",children:Object(p.jsx)("section",{className:"row justify-content-center align-items-center p-0",children:Object(p.jsxs)("section",{className:"col-12 col-sm-6 col-md-5 form-container ",id:"login-box",children:[Object(p.jsx)("div",{className:"m-0 p-1 border-bottom bg-dark align-items-center text-light fs-4",id:"text",children:"Signup to CFKnockout"}),Object(p.jsxs)("form",{id:"forms",children:[o?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:o}):"",Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form-control",ref:t})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",ref:n})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Confirm Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",ref:s})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){return v(e)},disabled:x,children:"SignUp"}),Object(p.jsx)(j.b,{className:"mx-2 btn btn-outline-primary",to:"/login",children:"LogIn"})]})]})})})})},E=function(){return Object(p.jsx)(p.Fragment,{children:"I am Forget"})},M=n(29),F=n(7),P=(n(111),n(75)),A=n(71),D=Object(P.io)("http://localhost:4000/"),L=function(){var e,t=Object(u.g)(),s=(sessionStorage.getItem("userid"),Object(c.useState)({id:"",size:""})),r=Object(d.a)(s,2),a=r[0],o=r[1],i=Object(c.useState)(!1),l=Object(d.a)(i,2),j=l[0],b=l[1],m=Object(c.useState)(""),h=Object(d.a)(m,2),x=h[0],O=h[1],f=Object(c.useState)(""),v=Object(d.a)(f,2),N=v[0],y=v[1],w=Object(c.useState)(""),k=Object(d.a)(w,2),S=k[0],I=k[1],R=Object(c.useState)(""),E=Object(d.a)(R,2),P=E[0],L=E[1],z=Object(c.useRef)(),U=g().user,B=Object(c.useRef)(),T=n(71);Object(c.useEffect)((function(){y(T(20,"aA0"))}),[]),x||(e=setInterval((function(){U&&!x&&(C.a.post("/api/findHandle",{username:U.email}).then((function(e){sessionStorage.setItem("userid",e.data),O(e.data)})).catch((function(e){console.log(e)})),clearInterval(e))}),1e3));var H=function(){C.a.post("/api/checkRoomCode",{roomCode:B.current.value}).then((function(e){I(e.data.message),!0===e.data.flag&&(function(e,t,n){sessionStorage.setItem("userid",e),sessionStorage.setItem("roomid",t),sessionStorage.setItem("refresh",0)}(x,a.id),b(!0),I(""))})).catch((function(e){return console.log(e)}))};return D.on("roomCreated",(function(e){t.push("/room/".concat(a.id))})),j&&t.push("/room/".concat(a.id),{params:a.id}),Object(p.jsxs)("div",{className:"p-0 m-0 customBgDash",children:[Object(p.jsxs)("div",{className:"p-sm-4 px-1 bg-dark text-light w-100 d-grid",children:[Object(p.jsxs)("div",{className:"row mx-2",children:[Object(p.jsx)("div",{className:"col-md-2 col-sm-1 col-0"}),Object(p.jsxs)("div",{className:"col-md-8 col-sm-10 col-12",children:[x?null:Object(p.jsxs)("div",{className:"alert alert-info p-1 my-1",role:"alert",children:["Paste this string in firstname field  - ",Object(p.jsx)("strong",{children:N})]}),P?Object(p.jsx)("div",{className:"alert alert-danger p-1 my-1",role:"alert",children:P}):null]})]}),Object(p.jsxs)("div",{className:"row m-2",children:[Object(p.jsx)("div",{className:"col-md-2 col-sm-1 col-0"}),Object(p.jsx)("div",{className:"col-md-6 col-sm-8 col-12 text-info",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("span",{className:"input-group-text",children:"Handle"}),Object(p.jsx)("input",{type:"text",className:"form-control",ref:z,placeholder:x||"Enter your CF Handle"})]})}),x?Object(p.jsx)("button",{className:"col-md-2 col-sm-2 col-6 my-sm-0 my-2 mx-auto btn btn-success btn-block p-1",onClick:function(e){window.confirm("Are you sure you want to update Handle ?")&&C.a.post("/api/deleteHandle",{username:U.email}).then((function(e){sessionStorage.setItem("userid",""),O("")})).catch((function(e){return console.log(e)}))},children:"Update"}):Object(p.jsx)("button",{className:"col-md-2 col-sm-2 col-6 my-sm-0 my-2 mx-auto btn btn-success btn-block p-1",onClick:function(e){return function(e){var t="https://codeforces.com/api/user.info?handles="+z.current.value;C.a.get(t).then((function(e){e.data.result[0].firstName===N?C.a.post("/api/updateUserHandle",{handle:z.current.value,username:U.email}).then((function(e){sessionStorage.setItem("userid",z.current.value),O(z.current.value),L("")})).catch((function(e){return console.log(e)})):L("Either you copied a wrong string or you entered a wrong handle")})).catch((function(e){return console.log(e)}))}()},children:"Validate"}),Object(p.jsx)("div",{className:"col-md-2 col-sm-1 col-0"})]})]}),Object(p.jsxs)("div",{className:"p-sm-5 p-4 container-fluid border w-50 justify-content-center my-md-5 my-3 shadow mb-5 rounded bg-light",children:[Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("div",{className:"col-md-7 col-sm-12 px-0",children:Object(p.jsx)("div",{className:"dropdown h-100",children:Object(p.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){o((function(t){return Object(F.a)(Object(F.a)({},t),{},Object(M.a)({},"size",e.target.value))}))},children:[Object(p.jsx)("option",{defaultValue:!0,value:"2",children:"Room Size"}),Object(p.jsx)("option",{value:"2",children:"Two"}),Object(p.jsx)("option",{value:"3",children:"Three"}),Object(p.jsx)("option",{value:"3",children:"Four"}),Object(p.jsx)("option",{value:"3",children:"Five"}),Object(p.jsx)("option",{value:"6",children:"Six"})]})})}),Object(p.jsx)("div",{className:"col-md-1 col-sm-0"}),Object(p.jsx)("div",{className:"col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2",children:Object(p.jsx)("button",{className:"w-100 btn btn-primary",onClick:function(){(function(e,t,n){var c=A(12,"aA0");sessionStorage.setItem("userid",e),sessionStorage.setItem("roomid",c),sessionStorage.setItem("roomsize",t),sessionStorage.setItem("refresh",0);var s={userid:e,roomid:c,refresh:0,roomsize:t,create:!0};n.emit("join",s)})(x,a.size,D),a.id=sessionStorage.getItem("roomid")},disabled:""===x,children:"Create A Room"})})]}),Object(p.jsxs)("div",{id:"lineor",children:[Object(p.jsx)("div",{className:"lines"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:"OR"})}),Object(p.jsx)("div",{className:"lines"})]}),Object(p.jsxs)("div",{className:"row px-0 py-2",children:[Object(p.jsx)("div",{className:"col-md-7 col-sm-12 px-0",children:Object(p.jsx)("input",{type:"text",className:"form-control",onChange:function(e){o((function(t){return Object(F.a)(Object(F.a)({},t),{},Object(M.a)({},"id",e.target.value))}))},ref:B})}),Object(p.jsx)("div",{className:"col-md-1 col-sm-0"}),Object(p.jsx)("div",{className:"col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2",children:Object(p.jsx)("button",{className:"w-100 btn btn-danger",onClick:function(){H()},disabled:""===x,children:"Join A Room"})})]}),S?Object(p.jsxs)("div",{className:"alert alert-danger row p-1 px-2 my-0 mt-1",role:"alert",children:[" ",S," "]}):null]})]})},z=(n(44),n(4)),U=function(e){var t=e.user.userId,n=e.admin,s=e.user.isReady,r=sessionStorage.getItem("userid"),a=Object(c.useState)(),o=Object(d.a)(a,2),i=o[0],l=o[1];Object(c.useEffect)((function(){return z.get("https://codeforces.com/api/user.info?handles="+t).then((function(e){l(e.data.result[0].titlePhoto)})).catch((function(e){console.log(e)})),function(){}}),[]);var u=null;return n===r?u=r===t?Object(p.jsx)("button",{className:"btn btn-danger text-responsive",onClick:function(){return e.remove(e.user)},children:"Leave"}):Object(p.jsx)("button",{className:"btn btn-danger text-responsive",onClick:function(){return e.remove(e.user)},children:"Remove"}):r===t&&(u=Object(p.jsx)("button",{className:"btn btn-success text-responsive",onClick:function(t){t.target.disabled=!0,e.ready(e.user)},children:"Ready"})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"card my-sm-2 my-1 p-sm-2 p-1 mx-3",children:[Object(p.jsx)("img",{src:i,className:"img-thumbnail mx-auto my-2",alt:"Loading Profile Image",style:{height:"9vw",width:"9vw"}}),Object(p.jsxs)("div",{className:"mx-auto text-center",children:[Object(p.jsx)("h5",{className:"text-responsive card-title "+(s?"text-success":"text-danger"),children:t}),u]})]})})},B=function(){var e=Object(u.g)(),t=Object(u.h)().pathname.split("/").pop(),n=["success","warning","info","danger","primary","dark"],s=Object(c.useState)({users:[]}),r=Object(d.a)(s,2),a=r[0],o=r[1],i=Object(c.useState)({problems:0,lrating:0,urating:0}),l=Object(d.a)(i,2),j=l[0],b=l[1],m=Object(c.useState)(0),h=Object(d.a)(m,2),x=h[0],O=h[1];Object(c.useEffect)((function(){C.a.post("/api/checkRoomCode",{roomCode:t}).then((function(n){if(1==n.data.flag){var c=sessionStorage.getItem("userid"),s=sessionStorage.getItem("refresh"),r=sessionStorage.getItem("roomsize"),a={userid:c,roomid:t,refresh:s,roomsize:r};D.emit("join",a),0===s&&sessionStorage.setItem("refresh",1)}else e.replace("/invalid")})).catch((function(e){return console.log(e)}))}),[]),D.on("updateRoomData",(function(e){sessionStorage.setItem("roomData",JSON.stringify(e)),y=e.users[0].userId,o(e)})),D.on("leaveRoom",(function(){e.replace("/dashboard")})),D.on("startContest",(function(t){e.push({pathname:"/round/".concat(t)})}));var f=function(e){var n={user:e,roomid:t};D.emit("remove",n)},g=Object(c.useState)(!0),v=Object(d.a)(g,2),N=v[0],w=v[1],k=[],S={},I=function(e){var n={user:e,roomid:t};D.emit("ready",n)};return Object(p.jsxs)("div",{className:"customBgRoom",children:[y===sessionStorage.getItem("userid")?Object(p.jsxs)("div",{className:"container d-grid",children:[Object(p.jsxs)("div",{className:"row px-0",children:[Object(p.jsx)("div",{className:"col-7 px-0",children:Object(p.jsxs)("div",{className:"input-group mb-3 my-3",children:[Object(p.jsx)("span",{className:"input-group-text px-2 text-responsive fw-bold",children:"Number of Problems"}),Object(p.jsx)("input",{required:!0,type:"number",min:"1",className:"form-control text-responsive",placeholder:"Enter Number of problems",id:"numberOfProblems",onChange:function(e){return b((function(t){return Object(F.a)(Object(F.a)({},t),{},{problems:e.target.value})}))}})]})}),Object(p.jsx)("div",{className:"mx-0 col-5 px-0 mt-3 justify-content-center text-end",children:Object(p.jsxs)("button",{className:"btn btn-info btn-block text-responsive px-1",onClick:function(){return navigator.clipboard.writeText(t)},children:["Room Code ",Object(p.jsx)("i",{className:"fas fa-copy"})]})})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-7 px-0",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("span",{className:"input-group-text px-2 text-responsive fw-bold",children:"Rating Range"}),Object(p.jsx)("input",{required:!0,type:"number",min:"800",max:"3500",step:"100",placeholder:"Starting from",className:"form-control text-responsive",id:"startRating",onChange:function(e){return b((function(t){return Object(F.a)(Object(F.a)({},t),{},{lrating:e.target.value})}))}}),Object(p.jsx)("input",{required:!0,type:"number",min:"800",max:"3500",step:"100",placeholder:"Ending at",className:"form-control text-responsive",id:"endRating",onChange:function(e){return b((function(t){return Object(F.a)(Object(F.a)({},t),{},{urating:e.target.value})}))}})]})}),Object(p.jsx)("div",{className:"col-5 text-end",style:{paddingRight:0},children:Object(p.jsxs)("div",{className:"input-group mb-3",children:[Object(p.jsx)("span",{className:"input-group-text px-2 text-responsive fw-bold",children:"Duration"}),Object(p.jsx)("input",{required:!0,type:"number",min:"1",className:"form-control text-responsive",placeholder:"Duration in minutes",id:"duration",onChange:function(e){return O(Math.floor(parseInt(e.target.value)))}})]})})]}),Object(p.jsx)("div",{className:"row my-3",children:Object(p.jsx)("div",{className:"col px-0",children:Object(p.jsx)("button",{className:"btn btn-primary btn-block text-responsive fw-bold m-auto text-responsive",onClick:function(){w(!0);var e=parseInt(j.problems),c=parseInt(j.lrating),s=parseInt(j.urating);e=Math.min(e,30),e=Math.max(e,1),c=Math.max(c,800),c=Math.min(c,3500),s=Math.max(s,800),s=Math.max(s,c),s=Math.min(s,3500);for(var r=800;r<=3500;r+=100)if(c<=r){c=r;break}for(var o=800;o<=3500;o+=100)if(s<=o){s=o;break}var i=[];C.a.get("https://codeforces.com/api/problemset.problems?").then((function(r){for(var o=r.data.result.problems.length,l=new Map,d=0;d<e;){var u=Math.floor(Math.random()*o),j=r.data.result.problems[u];j.rating&&j.rating>=c&&j.rating<=s&&!l[u]&&(j.userSolved="",i.push(j),l[u]=!0,d++)}console.log(i),a.users.forEach((function(e,t){S[e.userId]=n[t]})),k=i,C.a.post("/api/round/problems",{roomid:t,problemsArray:k,colorMap:S}).then((function(e){})).catch((function(e){return console.log(e)})),w(!1)})).catch((function(e){return console.log(e)}))},children:"Generate Problems"})})}),Object(p.jsx)("div",{className:"row text-center my-3",children:Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("button",{className:"btn w-25 btn-success btn-block text-responsive fw-bold",disabled:N,onClick:function(){var e=(new Date).getTime()+60*x*1e3;C.a.post("/api/round/duration",{roomid:t,duration:e}).then((function(e){console.log(e.data),D.emit("startContest",t)})).catch((function(e){return console.log(e)}))},children:[" ","Start Contest"]})})})]}):null,Object(p.jsx)("div",{className:"fluid-container d-flex justify-content-around align-content-around py-3 flex-wrap",children:a.users?a.users.map((function(e,t){return Object(p.jsx)(U,{user:e,admin:y,remove:f,ready:I},t)})):null})]})},T=(n(27),function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("span",{className:"p-2 flex-fill text-responsive bg-"+e.col+e.col==="dark"?" text-light":" text-dark",children:e.user})})}),H=function(e){var t=e.colorMap;return Object(p.jsx)("div",{className:"p-0 m-0 pt-3",children:Object(p.jsx)("div",{className:"container w-50 p-2 mb-3 d-flex py-3 flex-wrap text-center border border-black rounded align-items-center text-light",children:Object.keys(t).map((function(e,n){return Object(p.jsx)(T,{user:e,col:t[e]},n)}))})})};function K(e){var t=e.problem,n=e.index,s=e.colorMap,r=t.name,a=t.rating,o="https://codeforces.com/problemset/problem/".concat(t.contestId,"/").concat(t.index),i=sessionStorage.getItem("roomid"),l=Object(c.useState)("light"),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){C.a.post("/api/checkUserSolved",{roomid:i,problem:t}).then((function(e){b(s[e.data.userSolved])})).catch((function(e){return console.log(e)}))})),D.on("userSolved",(function(e){var t=e.problemIndex,c=e.user;t===n&&b(s[c])})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{className:"text-responsive table-"+j,children:[Object(p.jsx)("th",{scope:"row",children:n+1}),Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:r})}),Object(p.jsx)("td",{children:a})]})})}var W,q,G,J=function(e){var t=e.duration,n=e.roomid,s=Object(u.g)(),r=Object(c.useState)(m()),a=Object(d.a)(r,2),o=Object(d.a)(a[0],3),i=o[0],l=o[1],j=o[2],b=a[1];function m(){var e=(new Date).getTime(),n=0,c=0,s=0;if(t-e>=0){var r=Math.floor(Math.abs(t-e)/1e3);r-=3600*(n=Math.floor(r/3600)%24),s=(r-=60*(c=Math.floor(r/60)%60))%60}return[n,c,s]}return Object(c.useEffect)((function(){var e;return i>0||l>0||j>0?e=setInterval((function(){b(m)}),1e3):0===i&&0===l&&0===j&&C.a.post("/api/round/finished",{roomid:n}).then((function(e){s.replace("/standings/".concat(n),{params:n})})).catch((function(e){return console.log(e)})),function(){return clearInterval(e)}})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container bg-warning text-center border border-black border-2 rounded px-0",children:[Object(p.jsx)("div",{className:"text-responsive fw-bold border-bottom border-dark bg-info py-1",children:"Round Ends In"}),Object(p.jsx)("div",{className:"timer-responsive",children:"".concat(i," :\n                        ").concat(l," :\n                        ").concat(j)})]})})},_=(n(142),function(e){var t=e.problemsArray,n=e.duration,s=e.colorMap,r=e.roomid,a=function(){for(var e=function(){var e=Object(d.a)(c[n],2),s=e[0],a=(e[1],"https://codeforces.com/api/user.status?handle="+s+"&from=1&count=1");C.a.get(a).then((function(e){var n=e.data.result[0];"OK"===n.verdict&&function(e){return t.some((function(t){return t.contestId===e.contestId&&t.index===e.index}))}(n.problem)&&C.a.post("/api/checkAndMark",{currentProblem:n,handle:s,roomid:r}).then().catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},n=0,c=Object.entries(s);n<c.length;n++)e()};return Object(c.useEffect)((function(){var e=setInterval((function(){return a()}),1e4);return function(){return clearInterval(e)}}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container d-grid",children:Object(p.jsx)("div",{className:"row p-0 m-0 pb-5",children:Object(p.jsx)("div",{className:"col-12 border border-black rounded p-2 mb-5",children:Object(p.jsxs)("table",{className:"table table-bordered my-2",children:[Object(p.jsx)("thead",{className:"text-responsive table-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Problems"}),Object(p.jsx)("th",{scope:"col",children:"Rating"})]})}),Object(p.jsx)("tbody",{children:t?t.map((function(e,t){return Object(p.jsx)(K,{problem:e,index:t,colorMap:s},t)})):null})]})})})}),Object(p.jsx)("div",{style:{width:"25vw",maxWidth:"10rem",position:"fixed",top:"79vh",right:"1rem",zIndex:"50"},className:"shadow-lg rounded",children:Object(p.jsx)(J,{duration:n,roomid:r})})]})}),V=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],s=t[1],r=sessionStorage.getItem("roomid");Object(u.g)();return Object(c.useEffect)((function(){C.a.post("/api/checkRoomCode",{roomCode:r}).then((function(e){})).catch((function(e){return console.log(e)})),C.a.get("/api/round",{params:{roomid:r}}).then((function(e){W=e.data.problemsArray,q=e.data.colorMap,G=e.data.duration,s(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(p.jsxs)("div",{className:"p-0 m-0 customBgRound",children:[n?null:Object(p.jsx)(H,{colorMap:q}),n?null:Object(p.jsx)(_,{problemsArray:W,duration:G,colorMap:q,roomid:r})]})},Q=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"page-wrap d-flex flex-row align-items-center",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"col-md-12 text-center",children:[Object(p.jsx)("span",{className:"display-1 d-block",children:"404"}),Object(p.jsx)("div",{className:"mb-4 lead",children:"The page you are looking for was not found."}),Object(p.jsx)(j.b,{className:"mx-2 btn btn-outline-primary",to:"/dashboard",children:"Back to Dashboard"})]})})})})})},Y=n(35),X=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container text-center",style:{marginTop:"1vh"},children:[Object(p.jsx)("img",{src:N,className:"rounded img-thumbnail",alt:"..."}),Object(p.jsx)("h1",{children:"Loading..."}),Object(p.jsx)("div",{className:"spinner-grow spinner-border-sm text-secondary mx-2",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(p.jsx)("div",{className:"spinner-grow spinner-border-sm text-dark mx-2",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(p.jsx)("div",{className:"spinner-grow spinner-border-sm text-secondary mx-2",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})})},Z=["component"],$=function(e){var t=e.component,n=Object(Y.a)(e,Z),c=g(),s=c.user,r=c.loading;return Object(p.jsx)(u.b,Object(F.a)(Object(F.a)({},n),{},{render:function(e){return function(e){return r?Object(p.jsx)(X,{}):s?Object(p.jsx)(t,Object(F.a)({},e)):Object(p.jsx)(u.a,{to:"/"})}(e)}}))},ee=["component"],te=function(e){var t=e.component,n=Object(Y.a)(e,ee),c=g().user;return Object(p.jsx)(u.b,Object(F.a)(Object(F.a)({},n),{},{render:function(e){return c&&""!==c.email?Object(p.jsx)(u.a,{to:"/dashboard"}):Object(p.jsx)(t,Object(F.a)({},e))}}))},ne=function(){var e=Object(u.i)().roomid,t=Object(c.useState)([]),n=Object(d.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(!0),o=Object(d.a)(a,2),i=o[0],l=o[1];return Object(c.useEffect)((function(){C.a.get("/api/standings",{params:{roomid:e}}).then((function(e){var t=e.data[0],n=[];t.users.forEach((function(e){n.push([e.userId,0])})),t.problemData.forEach((function(e){n.forEach((function(t,c){t[0]===e.userSolved&&(n[c][1]+=e.rating)}))})),n.sort((function(e,t){var n=Object(d.a)(e,2)[1];return Object(d.a)(t,2)[1]-n})),r(n),l(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container d-grid my-3",children:i?Object(p.jsx)(X,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"fs-3 mx-1",children:"Standings"}),Object(p.jsx)("div",{className:"row mx-1",children:Object(p.jsx)("div",{className:"col-12 rounded p-0",children:Object(p.jsx)("div",{className:"container p-0",children:Object(p.jsxs)("table",{className:"table table-stripped table-hover tableStyle",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Who"}),Object(p.jsx)("th",{scope:"col",children:"Score"})]})}),Object(p.jsx)("tbody",{children:s.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:t+1}),Object(p.jsx)("td",{children:e[0]}),Object(p.jsx)("td",{children:e[1]})]})}))})]})})})}),Object(p.jsx)("div",{className:"row my-3",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(j.b,{className:"mx-2 btn btn-outline-primary",to:"/dashboard",children:"Go to Dashboard"})})})]})})})};var ce=function(){return Object(c.useEffect)((function(){var e=sessionStorage.getItem("roomid"),t=sessionStorage.getItem("userid");if(e&&t){var n={userid:t,roomid:e,refresh:!0};D.emit("joinRoom",n)}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(w,{}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(te,{exact:!0,path:["/","/login"],component:S}),Object(p.jsx)(u.b,{exact:!0,path:"/signup",component:R}),Object(p.jsx)(u.b,{exact:!0,path:"/forgot",children:Object(p.jsx)(E,{})}),Object(p.jsx)($,{exact:!0,path:"/dashboard",component:L}),Object(p.jsx)($,{exact:!0,path:"/room/:roomid",component:B}),Object(p.jsx)($,{exact:!0,path:"/round/:roomid",component:V}),Object(p.jsx)($,{exact:!0,path:"/standings/:roomid",component:ne}),Object(p.jsx)(u.b,{path:"*",component:Q})]}),Object(p.jsx)(k,{})]})})})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(ce,{})}),document.getElementById("root"))},27:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},85:function(e,t,n){},93:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.dfb35252.chunk.js.map