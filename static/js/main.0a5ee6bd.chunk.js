(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){e.exports=n(285)},127:function(e,t,n){},128:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},129:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=(n(127),n(128),n(129),n(24)),l=n(30),s=n(31),u=n(33),p=n(32),m=n(34),d=n(2),h=n.n(d),b=n(23),g=n(112),f=n.n(g),v=n(51),E=n.n(v),w=n(113),k=n.n(w),y=n(114),x=n.n(y),j=n(115),C=n.n(j),O=n(41),A=n.n(O),N=n(35),B=n.n(N),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/"+e)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(B.a,{container:!0,spacing:8},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(A.a,{className:this.props.classes.paper},r.a.createElement(f.a,{showLabels:!0,className:this.props.classes.root},r.a.createElement(E.a,{label:"Personal",icon:r.a.createElement(k.a,null)}),r.a.createElement(E.a,{label:"Banks",icon:r.a.createElement(x.a,null),onClick:this.handleClick.bind(this,"bank")}),r.a.createElement(E.a,{label:"Government",icon:r.a.createElement(C.a,null)}))))))}}]),t}(a.Component);S.props={classes:h.a.object.isRequired};var T=Object(b.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:"${theme.spacing.unit * 3}px",textAlign:"center",color:e.palette.text.secondary,position:"absolute",bottom:0,width:"100%"}}})(S),$=n(50),L=n.n($),R=n(69),W=n.n(R),_=n(70),P=n.n(_),q=n(71),F=n.n(q),U=n(40),G=n.n(U),I=n(116),J=n.n(I),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={action:1,bank:[{id:1,name:"BDO",type:"Savings",accountNumber:"09876543"},{id:2,name:"BPI",type:"Current",accountNumber:"12345678"}]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"performClickAdd",value:function(e,t){this.bank.push(e,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(B.a,{container:!0,spacing:8},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(A.a,{className:this.props.classes.paper},r.a.createElement(G.a,{variant:"h6",className:this.props.classes.alignLeft,gutterBottom:!0},"Banks"),r.a.createElement(L.a,{className:this.props.classes.root},this.state.bank.map(function(e){return r.a.createElement(W.a,{key:e,dense:!0,button:!0},r.a.createElement(P.a,null,r.a.createElement("input",{type:"radio",name:"banks",value:e.id})),r.a.createElement(F.a,{primary:e.name}))}),r.a.createElement(J.a,{to:"/add",variant:"contained",className:this.props.classes.button},"Add"))))))}}]),t}(a.Component);D.props={classes:h.a.object.isRequired};var z=Object(b.withStyles)(function(e){return{button:{margin:"${theme.spacing.unit * 2}px"},input:{display:"none"},paper:{padding:"${theme.spacing.unit * 3}px",textAlign:"center",color:e.palette.text.secondary},alignLeft:{marginLeft:"10px",textAlign:"left"}}})(D),H=n(117),K=n(73),M=n.n(K),Q=n(75),V=n.n(Q),X=n(77),Y=n.n(X),Z=n(118),ee=n.n(Z),te=n(76),ne=n.n(te),ae=n(72),re=n.n(ae),ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={_name:"",_type:"0",_accountNumber:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClickAdd",value:function(e){this.props.performClickAdd(this.state,"banks")}},{key:"handleChangeText",value:function(e,t){this.setState(Object(H.a)({},e,t.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),"Add Banks",r.a.createElement("div",null,r.a.createElement(V.a,{id:"standard-name",label:"Bank Name",className:this.props.classes.textField,margin:"normal",onChange:this.handleChangeText.bind(this,"_name")}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(re.a,{component:"legend"},"Account Type"),r.a.createElement(ee.a,{"aria-label":"Account Type",name:"type",className:this.props.classes.group,onChange:this.handleChangeText.bind(this,"_type")},r.a.createElement(ne.a,{value:"0",control:r.a.createElement(Y.a,null),label:"Savings"}),r.a.createElement(ne.a,{value:"1",control:r.a.createElement(Y.a,null),label:"Current"}))),r.a.createElement(V.a,{id:"standard-name",label:"Account Number",className:this.props.classes.textField,margin:"normal",onChange:this.handleChangeText.bind(this,"_accountNumber")})),r.a.createElement("div",null,r.a.createElement(M.a,{variant:"contained",className:this.props.classes.button,onClick:this.handleClickAdd.bind(this)},"Add")))}}]),t}(a.Component);ce.props={classes:h.a.object.isRequired};var ie=Object(b.withStyles)(function(e){return{textField:{marginLeft:"${theme.spacing.unit * 1}px",marginRight:"${theme.spacing.unit * 1}px",width:200},button:{margin:"${theme.spacing.unit * 2}px"},input:{display:"none"},group:{margin:"${theme.spacing.unit * 1}px"}}})(ce);var oe=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:T}),r.a.createElement(o.a,{path:"/bank",exact:!0,component:z}),r.a.createElement(o.a,{path:"/bank/add",exact:!0,component:ie}),r.a.createElement(o.a,{path:"*",component:z}))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(284);var ue=n(74);i.a.render(r.a.createElement(ue.a,null,r.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/datawallet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/datawallet","/service-worker.js");le?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):se(t,e)})}}()}},[[122,1,2]]]);
//# sourceMappingURL=main.0a5ee6bd.chunk.js.map