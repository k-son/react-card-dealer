(this["webpackJsonpcard-dealer"]=this["webpackJsonpcard-dealer"]||[]).push([[0],{28:function(t,e,a){},29:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(2),r=a.n(c),i=a(17),s=a.n(i),o=(a(28),a(29),a(20)),d=a(8),u=a(3),l=a.n(u),h=a(7),f=a(18),p=a(19),j=a(4),k=a(22),m=a(21),b=(a(31),function(t){return Object(n.jsx)("div",{className:"Card",children:Object(n.jsx)("img",{src:t.image,alt:t.alt,style:{left:t.left+"%",top:t.top+"px",transform:"translateX(-50%) rotate(".concat(t.rotate,"deg)")}})})}),g=(a(32),a(5)),O=a.n(g),v=function(t){Object(k.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(f.a)(this,a),(n=e.call(this,t)).state={deck_id:"",card_stack:[],remaining:null},n.dealCard=n.dealCard.bind(Object(j.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",t.next=3,O.a.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");case 3:e=t.sent,this.setState({deck_id:e.data.deck_id});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=this;0===this.state.remaining&&O.a.get("https://deckofcardsapi.com/api/deck/".concat(this.state.deck_id,"/shuffle/")).then((function(e){t.setState({card_stack:[],remaining:null})}))}},{key:"dealCard",value:function(){var t=Object(h.a)(l.a.mark((function t(){var e,a,n,c,r,i,s,u,h;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://deckofcardsapi.com/api/deck/".concat(this.state.deck_id,"/draw/?count=1"),t.next=3,O.a.get(e);case 3:a=t.sent,n=[47,47.5,48,48.5,49,49.5,50,50.5,51,51.5,52,52.5,53],c=[0,1,2,3,4,5,6,7,8,9,10],r=[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],i=Math.floor(Math.random()*n.length),s=Math.floor(Math.random()*c.length),u=Math.floor(Math.random()*r.length),h=Object(d.a)(Object(d.a)({},a.data.cards[0]),{},{left:n[i],top:c[s],rotate:r[u]}),this.setState({card_stack:[].concat(Object(o.a)(this.state.card_stack),[h]),remaining:a.data.remaining});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Table",children:[Object(n.jsx)("h1",{children:"Card Dealer"}),Object(n.jsx)("button",{onClick:this.dealCard,children:"Deal me a card"}),Object(n.jsxs)("p",{children:["Cards left in the deck: ",this.state.remaining]}),this.state.card_stack.map((function(t){return Object(n.jsx)(b,{image:t.images.png,alt:"".concat(t.value," ").concat(t.suit),left:t.left,top:t.top,rotate:t.rotate},t.code)}))]})}}]),a}(c.Component);var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),r(t),i(t)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.102b8026.chunk.js.map