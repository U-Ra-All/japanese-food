(this["webpackJsonpjapanese-food"]=this["webpackJsonpjapanese-food"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"SubmitOrder_form__ahgfk",control:"SubmitOrder_control__1RO7u",actions:"SubmitOrder_actions__MszR7",submit:"SubmitOrder_submit__10bs_",invalid:"SubmitOrder_invalid__1WNdc"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={meals:"MealList_meals__2UmhC","meals-appear":"MealList_meals-appear__2f8-f",loading:"MealList_loading__ZMJLQ",error:"MealList_error__Yg3UR"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__1ujlQ"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(12),d=n(3),j=n(6),l=n.n(j),u=n(13),m=n.n(u),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onHideCart})},x=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},p=document.getElementById("overlays"),f=function(e){return Object(b.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(b.jsx)(O,{onHideCart:e.onHideCart}),p),a.a.createPortal(Object(b.jsx)(x,{children:e.children}),p)]})},h=n(5),_=n.n(h),v=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=n(7),N=n.n(C),g=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:N.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:N.a.summary,children:[Object(b.jsx)("span",{className:N.a.price,children:t}),Object(b.jsxs)("span",{className:N.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:N.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},y=n(4),M=n.n(y),I=function(e){return""!==e.trim()},S=function(e){var t=Object(i.useState)({name:!0,city:!0,address:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(M.a.control," ").concat(c.name?"":M.a.invalid),l="".concat(M.a.control," ").concat(c.city?"":M.a.invalid),u="".concat(M.a.control," ").concat(c.address?"":M.a.invalid);return Object(b.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=d.current.value,i=I(n),j=I(c),l=I(r);a({name:i,city:j,address:l}),i&&j&&l&&e.onSubmit({name:n,city:c,address:r})},children:[Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"name",children:"\u0418\u043c\u044f"}),Object(b.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(b.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})]}),Object(b.jsxs)("div",{className:l,children:[Object(b.jsx)("label",{htmlFor:"city",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(b.jsx)("input",{type:"text",id:"city",ref:o}),!c.city&&Object(b.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"})]}),Object(b.jsxs)("div",{className:u,children:[Object(b.jsx)("label",{htmlFor:"address",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(b.jsx)("input",{type:"text",id:"address",ref:d}),!c.address&&Object(b.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"})]}),Object(b.jsxs)("div",{className:M.a.actions,children:[Object(b.jsx)("button",{className:M.a.submit,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0417\u0430\u043a\u0430\u0437"}),Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})},w=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],j=Object(i.useState)(!1),u=Object(r.a)(j,2),m=u[0],O=u[1],x=Object(i.useState)(!1),p=Object(r.a)(x,2),h=p[0],C=p[1],N=Object(i.useContext)(v),y="$".concat(Math.abs(N.totalAmount).toFixed(2)),M=N.items.length>0,I=function(e){N.removeItem(e)},w=function(e){N.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},k=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://react-course-http-8220d-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedMeals:N.items})});case 3:O(!1),C(!0),N.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=Object(b.jsx)("ul",{className:_.a["cart-items"],children:N.items.map((function(e){return Object(b.jsx)(g,{name:e.name,amount:e.amount,price:e.price,onAdd:w.bind(null,e),onRemove:I.bind(null,e.id)},e.id)}))}),A=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),M&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){a(!0)},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]}),E=Object(b.jsxs)(s.a.Fragment,{children:[H,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e"}),Object(b.jsx)("span",{children:y})]}),c&&Object(b.jsx)(S,{onSubmit:k,onCancel:e.onHideCart}),!c&&A]}),F=Object(b.jsx)("p",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u0430..."}),R=Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("p",{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]});return Object(b.jsxs)(f,{onHideCart:e.onHideCart,children:[!m&&!h&&E,m&&F,h&&R]})},k=n.p+"static/media/sushi.a2b4b921.jpg",H=n(17),A=n.n(H),E=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},F=n(10),R=n.n(F),T=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(v),o=s.items.reduce((function(e,t){return e+t.amount}),0),d="".concat(R.a.button," ").concat(c?R.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.items.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]),Object(b.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(b.jsx)("span",{className:R.a.icon,children:Object(b.jsx)(E,{})}),Object(b.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(b.jsx)("span",{className:R.a.badge,children:o})]})},D=function(e){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("header",{className:A.a.header,children:[Object(b.jsx)("h1",{children:"\u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(b.jsx)(T,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:A.a["main-image"],children:Object(b.jsx)("img",{src:k,alt:"\u0411\u043b\u044e\u0434\u0430 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438"})})]})},B=n(19),L=n.n(B),P=function(){return Object(b.jsxs)("section",{className:L.a["promo-text"],children:[Object(b.jsx)("h2",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0421\u0443\u0448\u0438 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(b.jsx)("p",{children:"\u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f - \u044d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0438-\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0441\u0443\u0448\u0438 \u0438 \u0441\u0430\u0448\u0438\u043c\u0438, \u0440\u043e\u043b\u043b\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0430\u0440\u043e\u0432."}),Object(b.jsx)("p",{children:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0440\u0438\u0434\u0430\u044e\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u043a\u0443\u0441 \u0431\u043b\u044e\u0434\u0430\u043c, \u0434\u0430\u0440\u044f\u0442 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0442\u0440\u0430\u043f\u0435\u0437\u044b."})]})},J=n(14),Q=n.n(J),U=n(20),z=n.n(U),V=function(e){return Object(b.jsx)("div",{className:z.a.card,children:e.children})},W=n(15),Y=n.n(W),Z=n(21),$=n.n(Z),q=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:$.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(d.a)({ref:t},e.input))]})})),K=n(22),X=n.n(K),G=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(b.jsxs)("form",{className:X.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value;0===n.trim().length||+n<1||+n>10?a(!1):e.onAddToCart(+n)},children:[Object(b.jsx)(q,{ref:s,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",input:{id:e.id,type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),!c&&Object(b.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442 1 \u0434\u043e 10"})]})},ee=function(e){var t=Object(i.useContext)(v),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:Y.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:Y.a.description,children:e.description}),Object(b.jsx)("div",{className:Y.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},te=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),d=s[0],j=s[1],u=Object(i.useState)(),m=Object(r.a)(u,2),O=m[0],x=m[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://react-course-http-8220d-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),j(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){j(!1),x(e.message)}))}),[]),d)return Object(b.jsx)("section",{className:Q.a.loading,children:Object(b.jsx)("p",{children:"\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430..."})});if(O)return Object(b.jsx)("section",{className:Q.a.error,children:Object(b.jsx)("p",{children:O})});var p=n.map((function(e){return Object(b.jsx)(ee,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:Q.a.meals,children:Object(b.jsx)(V,{children:Object(b.jsx)("ul",{children:p})})})},ne=function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsx)(te,{})]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD_ITEM"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[r];return i?(n=Object(d.a)(Object(d.a)({},i),{},{amount:i.amount+t.item.amount}),(c=Object(ce.a)(e.items))[r]=n):(n=Object(d.a)({},t.item),c=e.items.concat(n)),{items:c,totalAmount:a}}if("REMOVE_ITEM"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),j=e.items[o],l=e.totalAmount-j.price;if(1===j.amount)s=e.items.filter((function(e){return e.id!=t.id}));else{var u=Object(d.a)(Object(d.a)({},j),{},{amount:j.amount-1});(s=Object(ce.a)(e.items))[o]=u}return{items:s,totalAmount:l}}return t.type,ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})},clearCart:function(){a({type:"CLEAR_CART"})}};return Object(b.jsx)(v.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(ie,{children:[n&&Object(b.jsx)(w,{onHideCart:function(){c(!1)}}),Object(b.jsx)(D,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ne,{})})]})};a.a.render(Object(b.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.4a757aa2.chunk.js.map