(this.webpackJsonpguessgame=this.webpackJsonpguessgame||[]).push([[0],{11:function(t,e,r){},13:function(t,e,r){"use strict";r.r(e);var n=r(1),s=r.n(n),i=r(6),d=r.n(i),c=(r(11),r(3)),u=r(2),a=r(4),h=function t(e,r){Object(u.a)(this,t),this.suit=void 0,this.number=void 0,this.suit=e,this.number=r},o=function(){function t(){Object(u.a)(this,t),this.deck=new Array,this.initDeckOfCards()}return Object(a.a)(t,[{key:"initDeckOfCards",value:function(){for(var t=1;t<=13;t++)this.deck.push(new h("Clubs",t));for(t=1;t<=13;t++)this.deck.push(new h("Diamonds",t));for(t=1;t<=13;t++)this.deck.push(new h("Hearts",t));for(t=1;t<=13;t++)this.deck.push(new h("Spades",t));this.deck=this.deck.sort((function(){return Math.random()-.5}))}},{key:"pop",value:function(){return this.deck.pop()}},{key:"isDeckEmpty",value:function(){return!(this.deck.length>0)}}]),t}(),C=function(){function t(){Object(u.a)(this,t),this.currentCard=void 0,this.nextCard=void 0,this.usedCards=new Array,this.deckOfCards=new o,this.currentCard=this.deckOfCards.pop(),this.nextCard=this.deckOfCards.pop(),void 0!==this.currentCard&&this.usedCards.push(this.currentCard)}return Object(a.a)(t,[{key:"guess",value:function(t){if(void 0!==this.nextCard&&void 0!==this.currentCard){var e,r;if("higher"===t){if((null===(e=this.currentCard)||void 0===e?void 0:e.number)<(null===(r=this.nextCard)||void 0===r?void 0:r.number))return this.currentCard=this.nextCard,void 0!==this.currentCard&&this.usedCards.push(this.currentCard),this.nextCard=this.deckOfCards.pop(),!0}else if("lower"===t){var n,s;if((null===(n=this.currentCard)||void 0===n?void 0:n.number)>(null===(s=this.nextCard)||void 0===s?void 0:s.number))return this.currentCard=this.nextCard,void 0!==this.currentCard&&this.usedCards.push(this.currentCard),this.nextCard=this.deckOfCards.pop(),!0}else if("equal"===t){var i,d;if((null===(i=this.currentCard)||void 0===i?void 0:i.number)===(null===(d=this.nextCard)||void 0===d?void 0:d.number))return this.currentCard=this.nextCard,void 0!==this.currentCard&&this.usedCards.push(this.currentCard),this.nextCard=this.deckOfCards.pop(),!0}return this.currentCard=this.nextCard,void 0!==this.currentCard&&this.usedCards.push(this.currentCard),this.nextCard=this.deckOfCards.pop(),!1}}},{key:"isDeckEmpty",value:function(){return this.deckOfCards.isDeckEmpty()}}]),t}(),l=r(0);function b(){var t=Object(n.useState)(new C),e=Object(c.a)(t,2),r=e[0],s=e[1],i=Object(n.useState)(!1),d=Object(c.a)(i,2),u=d[0],a=d[1],h=Object(n.useState)(0),o=Object(c.a)(h,2),b=o[0],f=o[1],p=Object(n.useState)(r.currentCard),v=Object(c.a)(p,2),j=v[0],k=v[1];return Object(l.jsxs)("div",{children:[!u&&Object(l.jsx)("button",{onClick:function(){a(!0)},children:"Start"}),u&&Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:function(){switch(null===j||void 0===j?void 0:j.suit){case"Clubs":return"/Card_club.svg.png";case"Diamonds":return"/Card_diamond.svg.png";case"Hearts":return"/Card_heart.svg.png";case"Spades":return"/Card_spade.svg.png";default:return""}}(),height:"200",width:"200"}),Object(l.jsx)("span",{children:function(t){switch(t){case 1:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return t.toString()}}(void 0!==j?j.number:0)}),console.log(r.currentCard),console.log(r.isDeckEmpty()),Object(l.jsx)("button",{onClick:function(){r.guess("higher")&&f(b+1);k(r.currentCard)},disabled:r.isDeckEmpty(),children:"Higher"}),Object(l.jsx)("button",{onClick:function(){r.guess("lower")&&f(b+1);k(r.currentCard)},disabled:r.isDeckEmpty(),children:"Lower"}),Object(l.jsx)("button",{onClick:function(){r.guess("equal")&&f(b+1);k(r.currentCard)},disabled:r.isDeckEmpty(),children:"Equal"}),Object(l.jsx)("button",{onClick:function(){var t=new C;s(t),a(!1),f(0),k(t.currentCard)},children:"Reset"}),Object(l.jsxs)("span",{children:["Score: ",b]})]})]})}var f=function(){return new C,Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{})})},p=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(e){var r=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,d=e.getTTFB;r(t),n(t),s(t),i(t),d(t)}))};d.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.01dc004e.chunk.js.map