(this.webpackJsonpBitcoinDiagrams=this.webpackJsonpBitcoinDiagrams||[]).push([[0],{268:function(e,t,a){},269:function(e,t,a){},272:function(e,t,a){},424:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=(a(268),a(23)),o=a(166),l=a(69),d=a(6),j=a(101),b=a(26),p=(a(269),a(2));var u=function(e){return Object(p.jsx)("div",{className:"top",children:"\\hi from the Top"})},x=a(46),h=a.n(x),f=a(107);a(272);var m=function(e){return Object(p.jsxs)("div",{className:"bitcoin",children:[Object(p.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",height:"200px",viewBox:"100 100 400 400",xmlSpace:"preserve",children:[Object(p.jsxs)("filter",{id:"dropshadow",height:"130%",children:[Object(p.jsx)("feGaussianBlur",{in:"SourceAlpha",stdDeviation:5}),Object(p.jsx)("feOffset",{dx:0,dy:0,result:"offsetblur"}),Object(p.jsx)("feFlood",{floodColor:"red"}),Object(p.jsx)("feComposite",{in2:"offsetblur",operator:"in"}),Object(p.jsxs)("feMerge",{children:[Object(p.jsx)("feMergeNode",{}),Object(p.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),Object(p.jsx)("path",{className:"path",style:{},fill:"#000000",d:"M446.089,261.45c6.135-41.001-25.084-63.033-67.769-77.735l13.844-55.532l-33.801-8.424l-13.48,54.068 c-8.896-2.217-18.015-4.304-27.091-6.371l13.568-54.429l-33.776-8.424l-13.861,55.521c-7.354-1.676-14.575-3.328-21.587-5.073 l0.034-0.171l-46.617-11.64l-8.993,36.102c0,0,25.08,5.746,24.549,6.105c13.689,3.42,16.159,12.478,15.75,19.658L208.93,357.23 c-1.675,4.158-5.925,10.401-15.494,8.031c0.338,0.485-24.579-6.134-24.579-6.134l-9.631,40.468l36.843,9.188 c8.178,2.051,16.209,4.19,24.098,6.217l-13.978,56.17l33.764,8.424l13.852-55.571c9.235,2.499,18.186,4.813,26.948,6.995 l-13.802,55.309l33.801,8.424l13.994-56.061c57.648,10.902,100.998,6.502,119.237-45.627c14.705-41.979-0.731-66.193-31.06-81.984 C425.008,305.984,441.655,291.455,446.089,261.45z M368.859,369.754c-10.455,41.983-81.128,19.285-104.052,13.589l18.562-74.404 C306.28,314.65,379.774,325.975,368.859,369.754z M379.302,260.846c-9.527,38.187-68.358,18.781-87.442,14.023l16.828-67.489 C327.767,212.14,389.234,221.02,379.302,260.846z"})]}),Object(p.jsx)("h6",{children:"Loading..."})]})},O=a(465),g=a(493),v=a(431),y=a(466),w=a(467),C=a(468),k=a(469),S=a(470),N=a(471),T=a(487),_=[{id:"market_cap_rank",label:"#",align:"right"},{id:"image",label:"Coins",align:"right",format:function(e){return Object(p.jsx)(g.a,{style:{backgroundColor:"#fff",scale:"0.7"},alt:e,src:e})}},{id:"name",label:"",align:"left"},{id:"current_price",label:"Price \ud83d\udcb5",align:"left",format:function(e){return"$ ".concat(e.toLocaleString("en-US"))}},{id:"circulating_supply",label:"Circulating Supply",align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"total_supply",label:"Total Supply",align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"market_cap",label:"Market Cap",align:"left",format:function(e){return"$ ".concat(e.toLocaleString("en-US"))}}],L=Object(O.a)({root:{width:"100%",backgroundColor:"#202c40",margin:"0 auto",borderRadius:"2%"},tableHead:{color:"#fff",backgroundColor:" #272a39",fontSize:"1rem",height:"40px"},container:{maxHeight:640},tableCell:{color:"#b6cbff"}});function B(e){var t=e.markets,a=L(),n=r.a.useState(0),c=Object(s.a)(n,2),i=c[0],o=c[1],l=r.a.useState(10),d=Object(s.a)(l,2),j=d[0],b=d[1];return Object(p.jsxs)("div",{style:{padding:"1rem 0"},children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:" Top 100 Coins \ud83d\udccc "}),Object(p.jsxs)(v.a,{className:a.root,children:[t?Object(p.jsx)(y.a,{className:a.container,children:t&&Object(p.jsxs)(w.a,{stickyHeader:!0,size:"small","aria-label":"a dense table",children:[Object(p.jsx)(C.a,{children:Object(p.jsx)(k.a,{children:_.map((function(e){return Object(p.jsx)(S.a,{className:a.tableHead,children:e.label},e.id)}))})}),Object(p.jsx)(N.a,{loading:!0,children:t.slice(i*j,i*j+j).map((function(e){return Object(p.jsx)(k.a,{hover:!0,children:_.map((function(t){var n=e[t.id];return Object(p.jsx)(S.a,{className:a.tableCell,children:t.format&&null!==n?t.format(n):n},t.id)}))},e.id)}))})]})}):Object(p.jsx)(m,{}),Object(p.jsx)(T.a,{rowsPerPageOptions:[10,25,100],className:a.tableCell,component:"div",count:t.length,rowsPerPage:j,page:i,onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){b(+e.target.value),o(0)}})]})]})}var M=a(224),D=a.n(M).a.create({baseURL:"https://api.coingecko.com/api/v3",timeout:3e3}),P=a(490),R=a(492),A=a(248);function U(e){var t=e.coinId,a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(),l=Object(s.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(!0),u=Object(s.a)(b,2),x=u[0],m=u[1],O=function(){var e=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/coins/".concat(t,"/market_chart?vs_currency=usd&days=7&interval=daily")).catch((function(e){return console.log(e)}));case 2:(a=e.sent)&&a.data&&(i(a.data),m(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){void 0===d&&!1===x?function(){var e=[];[].concat.apply([],c.prices).filter((function(e,t){return t%2})).forEach((function(t){return e.push({uv:t})})),j(e)}():O()}),[d,x]),Object(p.jsx)(P.a,{width:"100%",height:"60%",children:Object(p.jsx)(R.a,{data:d,margin:{top:30,right:0,left:10,bottom:0},children:Object(p.jsx)(A.a,{type:"monotone",dataKey:"uv",stroke:" #e1e1e1",fillOpacity:.3,fill:"transparent",dot:{stroke:"#fff",strokeWidth:3}})})})}var z=a(480),H=a(481),I=a(482),F=a(144),W=Object(O.a)((function(e){return{root:{marginBottom:"3rem",display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)","@media (max-width: 900px)":{height:"400px"}},paper:{backgroundColor:"#202c40",display:"flex",margin:"1rem",color:"#fff",borderRadius:"5%","@media (max-width: 900px)":{display:"flex",flexDirection:"column"}},visuals:{width:"160px",textAlign:"center",marginTop:"1rem","@media (max-width: 900px)":{height:"290px",width:"100%"}},logoArea:{display:"flex",textAlign:"left",marginTop:" 10%","@media (max-width: 500px)":{display:"flex",flexDirection:"column",textAlign:"center"}}}}));function E(e){var t=e.markets,a=W();return Object(p.jsxs)("div",{className:a.root,children:[Object(p.jsxs)("h1",{style:{textAlign:"center",maxWidth:"100%"},children:[" ","Top 10 Coins \ud83d\udccc"," "]}),Object(p.jsx)(z.a,{className:a.gridList,cols:2.5,children:t.slice(0,10).map((function(e){return Object(p.jsxs)(v.a,{className:a.paper,children:[Object(p.jsxs)("div",{className:a.visuals,children:[Object(p.jsxs)("div",{className:a.logoArea,children:[Object(p.jsx)(H.a,{children:Object(p.jsx)(g.a,{src:e.image,style:{backgroundColor:"#272a39",marginLeft:"13px"}})}),Object(p.jsx)(I.a,{style:{color:"#fff"},primary:"".concat(e.symbol.toUpperCase(),"/USDT")})]}),Object(p.jsx)("div",{children:Object(p.jsx)(I.a,{primary:Object(p.jsxs)(F.a,{style:{fontSize:"1.5rem",color:"#b6cbff"},children:["$ ",e.current_price.toLocaleString("en-US")]}),secondary:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{style:{color:"#e1e1e1",fontWeight:"lighter"},children:"24h"}),Object(p.jsxs)("span",{style:{color:e.price_change_percentage_24h>0?"#61bf8a":"#ff8e8e"},children:[" "," ".concat(Math.round(100*e.price_change_percentage_24h)/100,"%")]})]})})})]}),Object(p.jsxs)("div",{className:a.visuals,children:[Object(p.jsx)("span",{children:"7 day change"}),Object(p.jsx)(U,{coinId:e.id}),Object(p.jsx)(I.a,{primary:Object(p.jsxs)(F.a,{style:{color:"#e1e1e1",fontSize:".9rem",fontWeight:"lighter"},children:["Vol: $",e.total_volume.toLocaleString("en-US")]})})]})]},e.id)}))})]})}var J=Object(O.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"transparent"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)",width:"100%",margin:"0",height:"180px"},paper:{margin:e.spacing(1),textAlign:"center",borderRadius:"5%",backgroundColor:"#202c40",minWidth:"200px",maxHeight:"30%"},primary:{color:"#fff"},secondary:{color:"#b6cbff"}}}));function G(e){var t=e.global,a=J();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:" Global Crypto Market \ud83d\udccc "}),Object(p.jsx)("div",{className:a.root,children:t.data?Object(p.jsxs)(z.a,{className:a.gridList,cols:2.5,children:[Object(p.jsxs)(v.a,{className:a.paper,children:[Object(p.jsx)(F.a,{className:a.primary,children:"Active Cryptocurrencies:"}),Object(p.jsx)(F.a,{className:a.secondary,children:t.data.active_cryptocurrencies.toLocaleString("en-US")})]}),Object(p.jsxs)(v.a,{className:a.paper,children:[Object(p.jsx)(F.a,{className:a.primary,children:"Total Market Cap:"}),Object(p.jsxs)(F.a,{className:a.secondary,children:["$ ",t.data.total_market_cap.usd.toLocaleString("en-US")]})]}),Object(p.jsxs)(v.a,{className:a.paper,children:[Object(p.jsx)(F.a,{className:a.primary,children:"Total Volume:"}),Object(p.jsxs)(F.a,{className:a.secondary,children:["$ ",t.data.total_volume.usd.toLocaleString("en-US")]})]}),Object(p.jsxs)(v.a,{className:a.paper,children:[Object(p.jsx)(F.a,{className:a.primary,children:" Markets:"}),Object(p.jsx)(F.a,{className:a.secondary,children:t.data.markets.toLocaleString("en-US")})]})]}):Object(p.jsx)("h3",{style:{textAlign:"center"},children:"Loading data.."})})]})}var $=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1],d=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").catch((function(e){return console.log(e)}));case 2:(t=e.sent)&&t.data&&r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/global").catch((function(e){return console.log(e)}));case 2:(t=e.sent)&&t.data&&l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(),j()}),[]),Object(p.jsx)(p.Fragment,{children:a||o?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G,{global:o}),Object(p.jsx)(E,{markets:a}),Object(p.jsx)(B,{markets:a})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(m,{})})})};var q=function(e){return Object(p.jsx)("div",{children:"hi from Real estate"})};var Q=function(e){return Object(p.jsx)("div",{children:"hi from Countries"})};var V=function(e){return Object(p.jsx)("div",{children:"hi from stocks"})};var X=function(e){return Object(p.jsx)("div",{children:"no matatch"})},Y=a(238),Z=a.n(Y),K=[a.p+"static/media/Post Malone - rockstar ft. 21 Savage-UceaB4D0jpo.e8a96c70.webm",a.p+"static/media/'Relax' - Smooth Trap Soul Hip Hop Beat Chill Instrumental (Prod. Tower B. x L.E.M.)-fbv5tDdxiD0.2bdb80e7.webm",a.p+"static/media/Anton Ishutin - Gone (Original Mix) [Video Edit]-pZDMzqJf1qE.711439ae.webm",a.p+"static/media/B L A C K   R O S E - Emotional Dark Trap Beat (Prod.Tower x Juanko x Marzen)-H0SNgX-7HkQ.2913bbde.webm",a.p+"static/media/Chill Smooth Guitar Rap Beat _ Higher (Prod. Syndrome) [NEW 2018]-08AicqtTPyU.c9f00c19.webm",a.p+"static/media/cruising.e288205d.webm",a.p+"static/media/Drake Type Beat - 'Drop It' _ Free Type Beat _ Rap_Trap Instrumental 2021-DTJSSL7Dvlw.1266f800.webm",a.p+"static/media/Duke Dumont - I Got U ft. Jax Jones (Official Music Video)-FHCYHldJi_g.b61b71a4.webm",a.p+"static/media/Hard Aggressive Choir Rap Beat (Joker)-LW7oQXzYq5Y.abd920c1.webm",a.p+"static/media/J Balvin, Willy William - Mi Gente (Official Video)-wnJ6LuUFpMo.fd72fce1.webm",a.p+"static/media/Mozart Hip Hop Remix-E9Qhb2Q8AYc.26a9da96.webm",a.p+"static/media/Pascal Junior - Holdin' On [Ultra Music]-CaqO-xvwtFQ.b780e03f.webm",a.p+"static/media/Regard - Ride It (Lyrics)-GPRK1ZRGaDc.946b3262.webm"],ee=K[Math.floor(Math.random()*K.length)],te=function(){return Object(p.jsx)(Z.a,{src:ee,controls:!0,loop:!0,style:{width:"300px",height:"30px"}})};a(424);var ae=function(e){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)(te,{})," "]})},ne=a(483),re=a(484),ce=a(491),ie=a(476),se=a(473),oe=a(494),le=a(485),de=a(472),je=a(245),be=a.n(je),pe=a(244),ue=a.n(pe),xe=a(240),he=a.n(xe),fe=a(242),me=a.n(fe),Oe=a(243),ge=a.n(Oe),ve=a(241),ye=a.n(ve),we=Object(O.a)((function(e){var t;return{root:{display:"flex"},hide:{display:"none"},drawer:{width:220,flexShrink:0,whiteSpace:"nowrap",backgroundColor:" #1a1c29"},drawerOpen:{width:220,display:"flex",justifyContent:"space-between",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),backgroundColor:" #1a1c29"},drawerClose:(t={display:"flex",textAlign:"center",justifyContent:"space-between",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},Object(l.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)+1}),Object(l.a)(t,"backgroundColor"," #1a1c29"),t),toolbar:Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-start",padding:e.spacing(0,1)},e.mixins.toolbar),{},{backgroundColor:" #1a1c29"}),content:{flexGrow:1,padding:e.spacing(3),width:"80vw",maxWidth:"1050px",backgroundColor:" #1a1c29","@media (max-width: 500px)":{width:"100vw"}},listItem:{display:"flex",width:"200px",color:" #fff"},navText:{marginLeft:"20%",textDecoration:"none",color:"#fff"}}}));function Ce(){var e,t=we(),a=r.a.useState(!1),n=Object(s.a)(a,2),c=n[0],i=n[1],o=r.a.useState(0),x=Object(s.a)(o,2),h=x[0],f=x[1],m=function(e,t){f(t)};return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsx)(ne.a,{}),Object(p.jsx)(re.a,{position:"fixed",className:Object(d.a)(t.appBar,Object(l.a)({},t.appBarShift,c))}),Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(ce.a,{variant:"permanent",classes:{paper:Object(d.a)((e={},Object(l.a)(e,t.drawerOpen,c),Object(l.a)(e,t.drawerClose,!c),e))},children:[Object(p.jsxs)(ie.a,{component:"nav","aria-label":"main navigation icons",children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsxs)(se.a,{className:t.listItem,selected:0===h,onClick:function(e){return m(0,0)},button:!0,children:[Object(p.jsx)(oe.a,{title:"BTC/Crypto",TransitionComponent:le.a,TransitionProps:{timeout:600},placement:"right",arrow:!0,children:Object(p.jsx)(he.a,{fontSize:"large"})}),Object(p.jsx)(I.a,{primary:Object(p.jsx)(F.a,{className:t.navText,children:"BTC/Crypto"})})]})}),Object(p.jsx)(j.b,{to:"/real-estate",children:Object(p.jsxs)(se.a,{className:t.listItem,selected:1===h,onClick:function(e){return m(0,1)},button:!0,children:[Object(p.jsx)(oe.a,{title:"BTC/Real Estate",TransitionComponent:le.a,TransitionProps:{timeout:600},placement:"right",arrow:!0,children:Object(p.jsx)(ye.a,{fontSize:"large"})}),Object(p.jsx)(I.a,{primary:Object(p.jsx)(F.a,{className:t.navText,children:"BTC/Real Estate"})})]})}),Object(p.jsx)(j.b,{to:"/stocks",children:Object(p.jsxs)(se.a,{className:t.listItem,selected:2===h,onClick:function(e){return m(0,2)},button:!0,children:[Object(p.jsx)(oe.a,{title:"BTC/Stocks",TransitionComponent:le.a,TransitionProps:{timeout:600},placement:"right",arrow:!0,children:Object(p.jsx)(me.a,{fontSize:"large"})}),Object(p.jsx)(I.a,{primary:Object(p.jsx)(F.a,{className:t.navText,children:"BTC/Stocks"})})]})}),Object(p.jsx)(j.b,{to:"/countries",children:Object(p.jsxs)(se.a,{className:t.listItem,selected:3===h,onClick:function(e){return m(0,3)},button:!0,children:[Object(p.jsx)(oe.a,{title:"BTC/Countries",TransitionComponent:le.a,TransitionProps:{timeout:600},placement:"right",arrow:!0,children:Object(p.jsx)(ge.a,{fontSize:"large"})}),Object(p.jsx)(I.a,{primary:Object(p.jsx)(F.a,{className:t.navText,children:"BTC/Countries"})})]})})]}),Object(p.jsx)("div",{className:t.toolbar,children:Object(p.jsx)(de.a,{onClick:function(){return i(!c)},children:c?Object(p.jsx)(ue.a,{style:{color:" #fff"},fontSize:"large"}):Object(p.jsx)(be.a,{style:{color:" #fff"},fontSize:"large"})})})]}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(p.jsx)("div",{style:{backgroundColor:"#1a1c29"},children:Object(p.jsx)(u,{})}),Object(p.jsx)("div",{className:t.content,children:Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/",children:Object(p.jsx)($,{})}),Object(p.jsx)(b.a,{path:"/real-estate",children:Object(p.jsx)(q,{})}),Object(p.jsx)(b.a,{path:"/stocks",children:Object(p.jsx)(V,{})}),Object(p.jsx)(b.a,{path:"/countries",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(b.a,{path:"*",children:Object(p.jsx)(X,{})})]})}),Object(p.jsx)("div",{style:{backgroundColor:"#1a1c29"},children:Object(p.jsx)(ae,{})})]})]})]})}var ke=a(246),Se=a(486),Ne=Object(ke.a)({root:{width:"100%"},typography:{fontFamily:["Roboto","sans-serif"].join(",")}});var Te=function(){return Object(p.jsx)(Se.a,{theme:Ne,children:Object(p.jsx)(Ce,{})})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,495)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Te,{})}),document.getElementById("root")),_e()}},[[429,1,2]]]);
//# sourceMappingURL=main.a449e675.chunk.js.map