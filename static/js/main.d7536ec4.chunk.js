(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){},50:function(e,t,a){e.exports=a(87)},55:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(55),a(9)),o=a(10),u=a(12),s=a(11),m=a(13),h=(a(25),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.cardName;return r.a.createElement("div",null,r.a.createElement("img",{alt:e,style:{width:100,margin:15},src:"./cards/".concat(e,".svg")}))}}]),t}(n.Component)),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.hand;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},e&&e.cards.map(function(e,t){return r.a.createElement(h,{cardName:"".concat(e.value).concat(e.suit),key:t})}))}}]),t}(n.Component),p=a(43),f=a.n(p),b=a(19),k=a.n(b),E=a(44),v=a.n(E),y=a(45),j=a.n(y),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={matchData:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loadHands",value:function(){var e=this;fetch("https://desafio-asc-php.000webhostapp.com/").then(function(e){return e.json()}).then(function(t){return e.setState({matchData:t})})}},{key:"componentDidMount",value:function(){this.loadHands()}},{key:"getSuitName",value:function(e){var t="";switch(e){case"O":t="Ouros";break;case"C":t="Copas";break;case"E":t="Espadas";break;case"P":t="Paus";break;default:t=e}return t}},{key:"getCardName",value:function(e){var t;switch(e){case"J":t="Valete";break;case"Q":t="Rainha";break;case"K":t="Rei";break;case"A":t="\xc1s";break;default:t=e}return t}},{key:"render",value:function(){var e=this,t=this.state.matchData.players;return r.a.createElement(f.a,null,t&&t.map(function(t){return r.a.createElement("div",{style:{margin:50},key:t.name},r.a.createElement(k.a,{style:{justifyContent:"center"}},r.a.createElement("h1",null,t.name,!0===t.winner?" \ud83d\udc51":null)),r.a.createElement(k.a,{style:{justifyContent:"center"}},t.evaluate.hand_name?r.a.createElement("h1",null," ",t.evaluate.hand_name," "):r.a.createElement("h1",null,"Carta mais alta:"," ","".concat(e.getCardName(t.evaluate.high_card.value)," de\n                        ").concat(e.getSuitName(t.evaluate.high_card.suit)))),r.a.createElement(k.a,null,r.a.createElement(v.a,{md:12},t.hand&&r.a.createElement(d,{hand:t.hand}))))}),r.a.createElement(k.a,{style:{justifyContent:"center"}},r.a.createElement(j.a,{variant:"dark",style:{margin:25},onClick:function(){return e.loadHands()}},"Jogar novamente \u2b6f")))}}]),t}(n.Component),O=a(47),w=a.n(O),C=a(46),N=a.n(C),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={ranking:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loadRanking",value:function(){var e=this;fetch("https://desafio-asc-php.000webhostapp.com/api/ranking.php").then(function(e){return e.json()}).then(function(t){return e.setState({ranking:t})})}},{key:"componentDidMount",value:function(){this.loadRanking()}},{key:"render",value:function(){var e=this.state.ranking.ranking;return r.a.createElement("div",{style:{margin:50}},r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"M\xe3o"),r.a.createElement("th",null,"Data"))),r.a.createElement("tbody",null,e&&e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.playerName),r.a.createElement("td",null,e.handName),r.a.createElement("td",null,r.a.createElement(N.a,{format:"DD/MM/YYYY",date:e.matchDate})))}))))}}]),t}(n.Component),x=a(30),J=a.n(x),M=a(23),R=a.n(M),S=a(20),Y=a(16),_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(J.a,{bg:"dark",variant:"dark"},r.a.createElement(J.a.Brand,{as:S.b,to:"/"},r.a.createElement("img",{alt:"",src:"/poker-hand.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ASC Poker"),r.a.createElement(R.a,{className:"mr-auto"},r.a.createElement(R.a.Link,{as:S.b,to:"/"},"Jogar"),r.a.createElement(R.a.Link,{as:S.b,to:"/ranking"},"Ranking"))),r.a.createElement(Y.a,{path:"/",exact:!0,component:g}),r.a.createElement(Y.a,{path:"/ranking",exact:!0,component:D}))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.d7536ec4.chunk.js.map