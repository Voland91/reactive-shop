(this["webpackJsonp01-example"]=this["webpackJsonp01-example"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":"5c5e94edfa87475c9c7433f0","name":"iMac 27 Retina","image":"https://i.imgur.com/s7zey8T.jpg","manufacture":"Apple","amount":2099.99,"category":"desktop","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94eddb3b43421561cd1a","name":"Surface Studio","image":"https://i.imgur.com/CCanSEL.jpg","manufacture":"Microsoft","amount":3749.99,"category":"desktop","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94edd28c711337302817","name":"Dell Inspion 23","image":"https://i.imgur.com/qQx2zmv.jpg","manufacture":"Dell","amount":1899.99,"category":"desktop","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94ed2b2975200c75d16d","name":"Lenovo IdeaCenter","image":"https://i.imgur.com/7Zp9oiW.jpg","manufacture":"Lenovo","amount":2499.99,"category":"desktop","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94ed2a5b84772cafa6a6","name":"Mi Pad 2","image":"https://i.imgur.com/uROXKvy.jpg","manufacture":"Xiaomi","amount":899.99,"category":"tablet","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94edd128902db221ebcd","name":"Apple iPad Air","image":"https://i.imgur.com/9bliZbf.jpg","manufacture":"Apple","amount":1299.99,"category":"tablet","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94edaca115996d9bcf1f","name":"Asus Transformer","image":"https://i.imgur.com/f6vLn7N.jpg","manufacture":"Asus","amount":1149.99,"category":"tablet","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94eda99dbca4e20d37e7","name":"iPad Mini","image":"https://i.imgur.com/NUsqPRC.jpg","manufacture":"Apple","amount":699.99,"category":"tablet","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94ed1810a470928a294b","name":"Dell Vostro 3455","image":"https://i.imgur.com/4aplzsb.jpg","manufacture":"Dell","amount":2499.99,"category":"desktop","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94edb9ca8ca175eea230","name":"Lenovo AIO 520","image":"https://i.imgur.com/rfyjMEY.jpg","manufacture":"Lenovo","amount":2599.99,"category":"desktop","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94edc60727170b4fd86a","name":"Mac mini","image":"https://i.imgur.com/6kvyk4J.jpg","manufacture":"Apple","amount":2199.99,"category":"desktop","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94eda6a3d1cb9a0d5f58","name":"Asus VivoMini","image":"https://i.imgur.com/lVjRNUx.jpg","manufacture":"Asus","amount":1499.99,"category":"desktop","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94ed6c057f83f991a1e0","name":"Intel NUC","image":"https://i.imgur.com/6kg58c9.jpg","manufacture":"Intel","amount":899.99,"category":"desktop","featured":false,"inCart":false,"numbers":0},{"id":"5c5e94eda3068277e72e1eba","name":"Galaxy Tab S4","image":"https://i.imgur.com/iciYcmv.jpg","manufacture":"Samsung","amount":1299.99,"category":"tablet","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94ed65021259bed07a6a","name":"Asus Transformers 2","image":"https://i.imgur.com/9stIz7E.jpg","manufacture":"Asus","amount":1499.99,"category":"tablet","featured":true,"inCart":false,"numbers":0},{"id":"5c5e94ed939720ae8f3a7af5","name":"Apple new iMac","image":"https://i.imgur.com/RtjlreF.jpg","manufacture":"Apple","amount":3999.99,"category":"desktop","featured":false,"inCart":false,"numbers":0}]')},42:function(e,t,a){e.exports=a(64)},47:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),u=(a(47),a(11)),o=a(12),l=a(20),s=a(19),m=a(18),d=a(9),p=a(13),f=a(34),b=a(35),g=a(17),h=a(7),E=a(24),v=a(21),y={};v.forEach((function(e){y[e.name]=e}));var j=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,null,[{key:"getProducts",value:function(){return v}},{key:"getManufactures",value:function(){return Object(E.a)(new Set(v.map((function(e){return e.manufacture}))))}},{key:"getFeatured",value:function(e){return"desktop"===e?v.filter((function(e){return"desktop"===e.category&&e.featured})):"tablet"===e?v.filter((function(e){return"tablet"===e.category&&e.featured})):void 0}},{key:"getCartObjects",value:function(){return y}}]),e}(),k={basketNumbers:0,cartCost:0,products:j.getCartObjects()},x=Object(p.combineReducers)({basketState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a="";switch(t.type){case"ADD_PRODUCT_BASKET":return(a=Object(h.a)({},e.products[t.payload])).numbers+=1,a.inCart=!0,console.log(a),Object(h.a)({},e,{basketNumbers:e.basketNumbers+1,cartCost:e.cartCost+e.products[t.payload].amount,products:Object(h.a)({},e.products,Object(g.a)({},t.payload,a))});case"GET_NUMBERS_BASKET":return Object(h.a)({},e);case"INCREASE_QUANTITY":return(a=Object(h.a)({},e.products[t.payload])).numbers+=1,Object(h.a)({},e,{cartCost:e.cartCost+e.products[t.payload].amount,products:Object(h.a)({},e.products,Object(g.a)({},t.payload,a))});case"DECREASE_QUANTITY":return 1===(a=Object(h.a)({},e.products[t.payload])).numbers?Object(h.a)({},e,{cartCost:e.cartCost,products:Object(h.a)({},e.products,Object(g.a)({},t.payload,a))}):(a.numbers-=1,Object(h.a)({},e,{cartCost:e.cartCost-e.products[t.payload].amount,products:Object(h.a)({},e.products,Object(g.a)({},t.payload,a))}));default:return e}}}),C=[b.a],N=Object(p.createStore)(x,{},Object(f.composeWithDevTools)(p.applyMiddleware.apply(void 0,C))),O=(a(52),[{name:"Home",path:"/",exact:!0},{name:"Catalog",path:"/catalog"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"},{name:"Admin panel",path:"/admin"}]),A=Object(d.b)((function(e){return{basketProps:e.basketState}}),{getNumbers:function(){return function(e){console.log("getting all basket numbers"),e({type:"GET_NUMBERS_BASKET"})}}})((function(e){var t=O.map((function(e){return r.a.createElement("li",{key:e.name,className:e.class},r.a.createElement(m.c,{to:e.path,exact:e.exact?e.exact:null},e.name))}));return r.a.createElement("div",{className:"Navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,t),r.a.createElement("div",{className:"cart_btn"},r.a.createElement(m.b,{to:"/cart"},"Cart (".concat(e.basketProps.basketNumbers,")")))))})),w=a(15),S=a(5),_=(a(54),Object(d.b)(null,{addBasket:function(e){return function(t){console.log("adding to basket"),t({type:"ADD_PRODUCT_BASKET",payload:e.name})}}})((function(e){var t=e.product;return r.a.createElement("button",{className:"addButton",onClick:function(){return e.addBasket(t)}},"Add to cart")}))),T=function(e){var t=e.image,a=e.name,n=e.amount;return r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",{className:"price"},"$",n),r.a.createElement("h3",null,a),r.a.createElement(_,{product:{image:t,name:a,amount:n}}))},P=a(6);function R(){var e=Object(S.a)(["\n  font-size: 2rem;\n  color: gray;\n  font-style: italic;\n"]);return R=function(){return e},e}function q(){var e=Object(S.a)(["\n  text-align: center;\n  font-size: 2rem;\n"]);return q=function(){return e},e}function z(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]);return z=function(){return e},e}var D=j.getFeatured("desktop"),M=j.getFeatured("tablet"),I=P.a.div(z()),L=P.a.h2(q()),U=P.a.span(R()),F=D.map((function(e){return r.a.createElement(T,{key:e.id,image:e.image,name:e.name,amount:e.amount,id:e.id})})),B=M.map((function(e){return r.a.createElement(T,{key:e.id,image:e.image,name:e.name,amount:e.amount,id:e.id})})),Q=function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header-big"},"Welcome to our ",r.a.createElement(U,null,"(reactive)")," store",r.a.createElement(U,null," ...with redux state management")),r.a.createElement(L,null,"Desktops"),r.a.createElement(I,null,F),r.a.createElement(L,null,"Tablets"),r.a.createElement(I,null,B)))},V=(a(55),a(56),a(57),["All"].concat(Object(E.a)(j.getManufactures())).sort()),Y=function(e){return r.a.createElement("div",{className:"Filter"},r.a.createElement("h3",null,"Filter"),r.a.createElement("div",{className:"search-bar"},r.a.createElement("h4",null,"Search:"),r.a.createElement("button",{className:"clear",onClick:e.click},"Clear"),r.a.createElement("input",{className:"search-input",type:"text",placeholder:"search...",value:e.value,onChange:e.change}),r.a.createElement("h4",null,"Manufacturer:"),r.a.createElement("div",{className:"Radio"},V.map((function(t){return r.a.createElement("div",{key:t},r.a.createElement("label",{htmlFor:t,className:"container"},r.a.createElement("input",{type:"radio",name:"manufacturere",id:t,value:t,onChange:e.radio,checked:t===e.radioVal}),t,r.a.createElement("span",{className:"checkmark"})))})))))},K=j.getProducts().map((function(e){return r.a.createElement(T,{key:e.id,image:e.image,name:e.name,amount:e.amount,manufacture:e.manufacture,id:e.id,numbers:e.numbers})})),W=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",manufacture:"All"},e.handleChange=function(t){e.setState({search:t.target.value})},e.handleClear=function(){e.setState({search:"",manufacture:"All"})},e.filteredList=function(){var t=e.state,a=t.search,n=t.manufacture,r=K;if("All"===n)r=K.filter((function(e){return e.props.name.toLowerCase().includes(a.toLowerCase())}));else{var c=r.filter((function(e){return e.props.manufacture===n}));r=c.filter((function(e){return e.props.name.toLowerCase().includes(a.toLowerCase())}))}return r},e.handleRadioChange=function(t){e.setState({manufacture:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"header-big"},"Catalog"),r.a.createElement("div",{className:"Catalog"},r.a.createElement("div",{className:"column-left"},r.a.createElement(Y,{change:this.handleChange,click:this.handleClear,value:this.state.search,radio:this.handleRadioChange,radioVal:this.state.manufacture})),r.a.createElement("div",{className:"column-right"},r.a.createElement("div",{className:"products"},this.filteredList()))))}}]),a}(n.Component),$=(a(58),function(){return r.a.createElement("div",{className:"AboutPage container"},r.a.createElement("h1",{className:"header-big"},"About"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque odio pharetra, rhoncus velit eget, feugiat magna. Integer ac augue aliquam, tempor diam nec, pulvinar velit. Pellentesque et sem a diam fringilla egestas nec vel metus. Etiam ac convallis leo. Vivamus vitae volutpat nisl, mollis hendrerit libero. Vivamus sed lobortis ligula. Suspendisse a nisi erat. Donec mi ante, condimentum nec efficitur non, egestas et lorem. Duis at urna ut mauris fringilla dignissim at in odio. Ut consectetur purus et maximus aliquam. Sed consectetur diam quis accumsan condimentum. Proin porta condimentum velit quis convallis."),r.a.createElement("p",null,"Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam rutrum nibh consectetur purus tincidunt scelerisque. Etiam faucibus volutpat lectus, quis blandit diam consectetur ac. In hac habitasse platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi volutpat enim tincidunt fringilla. Etiam porttitor dolor eleifend felis consectetur facilisis. Ut pulvinar sollicitudin erat, nec malesuada nunc scelerisque nec. Aliquam vel dolor diam. Cras efficitur dignissim justo, ac tristique tellus pellentesque pharetra. Quisque pharetra lectus molestie, posuere lectus eget, tempor justo."))}),J=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ContactPage container"},r.a.createElement("h3",{className:"header-small"},"contact with us"),r.a.createElement("form",null))}}]),a}(n.Component);function G(){var e=Object(S.a)(["\n  position: relative;\n  border: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.4);\n  font-size: 1.3rem;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n\n  &.btn_decrease {\n    position: absolute;\n    left: 57%;\n    &:hover {\n      background-color: #fa6472;\n    }\n  }\n  &.btn_increase {\n    position: absolute;\n    left: 62%;\n    &:hover {\n      background-color: #7aea7a;\n    }\n  }\n  &:hover {\n    box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.8);\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(S.a)(["\n  flex-basis: 30%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return H=function(){return e},e}function X(){var e=Object(S.a)(["\n  flex-basis: 70%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n\n  span {\n    font-size: 1.2rem;\n  }\n\n  .total {\n    font-weight: bold;\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(S.a)(["\n  height: 150px;\n  background-color: white;\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);\n  overflow: hidden;\n\n  .item_img {\n    height: 140px;\n    width: 60%;\n    overflow: hidden;\n    position: relative;\n  }\n\n  img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    max-height: 100%;\n    max-width: 90%;\n  }\n"]);return Z=function(){return e},e}var ee=P.a.div(Z()),te=P.a.div(X()),ae=P.a.div(H()),ne=P.a.button(G()),re=Object(d.b)((function(e){return{basketProps:e.basketState}}),{productQuantity:function(e,t){return function(a){console.log("inside prod quantity"),console.log("the action is ",e),console.log("the name is ",t),a({type:"increase"===e?"INCREASE_QUANTITY":"DECREASE_QUANTITY",payload:t})}}})((function(e){var t=e.image,a=e.name,n=e.amount,c=e.numbers,i=e.productQuantity,u=(c*n).toFixed(2);return r.a.createElement(ee,null,r.a.createElement(ae,null,r.a.createElement("div",{className:"item_img"},r.a.createElement("img",{src:t,alt:a})),r.a.createElement("h3",null,a)),r.a.createElement(te,null,r.a.createElement("span",{className:"amount"},n,"$"),r.a.createElement(ne,{className:"btn_decrease",onClick:function(){return i("decrease",a)}},"-"),r.a.createElement("span",{className:"quantity"},c),r.a.createElement(ne,{className:"btn_increase",onClick:function(){return i("increase",a)}},"+"),r.a.createElement("span",{className:"total"},u,"$")))}));function ce(){var e=Object(S.a)(["\n  width: 35%;\n  background-color: white;\n  margin-left: 65%;\n  margin-bottom: 10px;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-align: center;\n\n  span {\n    font-size: 2rem;\n    color: green;\n    margin-left: 10px;\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(S.a)(["\n  border-bottom: 3px solid rgba(50, 50, 50, 0.05);\n\n  h4 {\n    display: inline-block;\n    text-align: center;\n    font-size: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin: 0;\n    width: 23%;\n  }\n  .cart_header_product {\n    width: 30%;\n  }\n"]);return ie=function(){return e},e}function ue(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 50px auto;\n  width: 70%;\n"]);return ue=function(){return e},e}var oe=P.a.div(ue()),le=P.a.div(ie()),se=P.a.div(ce()),me=a(40),de=a(41),pe=(a(61),function(){return r.a.createElement("div",{className:"empty_cart_container container"},r.a.createElement("h3",null,"Your cart is empty :("),r.a.createElement("div",{className:"cart_icon"},r.a.createElement(me.a,{icon:de.a})))}),fe=Object(d.b)((function(e){return{basketProps:e.basketState}}))((function(e){var t=e.basketProps,a=[],n=t.cartCost.toFixed(2);Object.keys(t.products).forEach((function(e){t.products[e].inCart&&a.push(t.products[e])})),a=a.map((function(e,t){return r.a.createElement(re,{key:t,image:e.image,name:e.name,amount:e.amount,numbers:e.numbers})}));var c=function(){return r.a.createElement(oe,null,r.a.createElement(le,null,r.a.createElement("h4",{className:"cart_header_product"},"Product"),r.a.createElement("h4",{className:"cart_header_price"},"Price"),r.a.createElement("h4",{className:"cart_header_quantity"},"Quantity"),r.a.createElement("h4",{className:"cart_header_total"},"Total")),r.a.createElement("div",null,a),r.a.createElement(se,null,r.a.createElement("p",null,"Total cost: ",r.a.createElement("span",null,n,"$"))))};return r.a.createElement(r.a.Fragment,null,n>0?r.a.createElement(c,null):r.a.createElement(pe,null))})),be=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:Q}),r.a.createElement(w.a,{path:"/catalog",component:W}),r.a.createElement(w.a,{path:"/about",component:$}),r.a.createElement(w.a,{path:"/contact",component:J}),r.a.createElement(w.a,{path:"/cart",component:fe})))},ge=(a(62),function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Reactive Shop \xa9 2020 created by Rafa\u0142 Szczuka"),r.a.createElement("p",null,"email: rafal.szczuka05@gmail.com"),r.a.createElement("p",null,"github: https://github.com/RafalSzczuka"))}),he=(a(63),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{store:N},r.a.createElement(m.a,{basename:"/reactive-shop"},r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(A,null)),r.a.createElement("main",null,r.a.createElement(be,null)),r.a.createElement("footer",null,r.a.createElement(ge,null)))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.2378313b.chunk.js.map