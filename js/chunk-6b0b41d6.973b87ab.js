(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b0b41d6"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?o(t):n(a(t))}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"5cbd":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-light"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top",attrs:{src:r("9d64"),width:"100",height:"75",alt:"",loading:"lazy"}})]),a("ul",{staticClass:"nav justify-content-end"},[a("li",{staticClass:"nav-item text-center"},[a("router-link",{staticClass:"nav-link",staticStyle:{color:"#4caf50"},attrs:{to:"/discount"}},[a("i",{staticClass:"fas fa-money-bill fa-2x"}),a("div",{staticClass:"icon-text"},[t._v("優惠活動")])])],1),a("li",{staticClass:"nav-item dropdown text-center"},[a("a",{staticClass:"nav-link dropdown-toggle",staticStyle:{color:"#4caf50"},attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("li",{staticClass:"nav-item"},[a("i",{staticClass:"fas fa-cart-plus fa-2x"}),t.cart.carts.length?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]):t._e(),a("div",{staticClass:"icon-text"},[t._v("購 物 車")])])]),a("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[a("h6",[t._v("已選擇商品")]),a("table",{staticClass:"table table-sm"},[t.cart.carts.length?a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle text-center"},[a("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.removeCart(e.id)}}},[a("i",{staticClass:"fas fa-trash-alt",attrs:{"aria-hidden":"true"}})])]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+t._s(e.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.total))])])})),0):t._e()]),a("button",{staticClass:"btn btn-success btn-block"},[a("router-link",{staticClass:"nav-link text-white",attrs:{to:"/checkout"}},[a("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 結帳去 ")])],1)])]),a("li",{staticClass:"nav-item dropdown text-center"},[t._m(0),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("router-link",{staticClass:"nav-link",staticStyle:{color:"#4caf50"},attrs:{to:"/admin/products"}},[a("i",{staticClass:"far fa-edit"},[t._v(" 商品管理")])]),a("router-link",{staticClass:"nav-link",staticStyle:{color:"#4caf50"},attrs:{to:"/login"}},[a("i",{staticClass:"far fa-user"},[t._v(" 登 入")])])],1)])])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"nav-link dropdown-toggle",staticStyle:{color:"#4caf50"},attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("li",{staticClass:"nav-item"},[r("i",{staticClass:"fas fa-clipboard-list fa-2x"}),r("div",{staticClass:"icon-text"},[t._v("後台管理")])])])}],s=r("5530"),i=r("2f62"),o={methods:Object(s["a"])({},Object(i["b"])("cartModules",["getCart","removeCart"])),computed:Object(s["a"])({},Object(i["c"])("cartModules",["cart"]))},c=o,l=r("2877"),u=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=u.exports},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),s=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},"9d64":function(t,e,r){t.exports=r.p+"img/logo.b0bbe3ef.png"},a159:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Meter"),r("div",{staticClass:"my-5 row justify-content-center",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("form",{staticClass:"col-md-6"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1!==t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[r("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("繼續購物")])],1)]):t._e(),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],s=(r("99af"),r("5cbd")),i={components:{Meter:s["a"]},data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("wei0824","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(e){t.order=e.data.order,console.log(e),t.$store.dispatch("updateLoading",!1)}))},payOrder:function(){var t=this,e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("wei0824","/pay/").concat(e.orderId);e.$store.dispatch("updateLoading",!0),this.$http.post(r).then((function(r){console.log(r),r.data.success&&t.getOrder(),e.$store.dispatch("updateLoading",!1)}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},o=i,c=r("2877"),l=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=l.exports},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("d066"),i=r("c430"),o=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),h=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),_=r("df75"),w=r("241c"),C=r("057f"),O=r("7418"),j=r("06cf"),x=r("9bf2"),k=r("d1e7"),S=r("9112"),P=r("6eeb"),D=r("5692"),E=r("f772"),$=r("d012"),L=r("90e3"),M=r("b622"),I=r("e538"),N=r("746f"),J=r("d44e"),q=r("69f3"),F=r("b727").forEach,T=E("hidden"),z="Symbol",Q="prototype",W=M("toPrimitive"),A=q.set,B=q.getterFor(z),G=Object[Q],H=n.Symbol,K=s("JSON","stringify"),R=j.f,U=x.f,V=C.f,X=k.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),rt=D("wks"),at=n.QObject,nt=!at||!at[Q]||!at[Q].findChild,st=o&&u((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=R(G,e);a&&delete G[e],U(t,e,r),a&&t!==G&&U(G,e,a)}:U,it=function(t,e){var r=Y[t]=m(H[Q]);return A(r,{type:z,tag:t,description:e}),o||(r.description=e),r},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,r){t===G&&ct(Z,e,r),p(t);var a=g(e,!0);return p(r),d(Y,a)?(r.enumerable?(d(t,T)&&t[T][a]&&(t[T][a]=!1),r=m(r,{enumerable:y(0,!1)})):(d(t,T)||U(t,T,y(1,{})),t[T][a]=!0),st(t,a,r)):U(t,a,r)},lt=function(t,e){p(t);var r=h(e),a=_(r).concat(pt(r));return F(a,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?m(t):lt(m(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===G&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,T)&&this[T][e])||r)},ft=function(t,e){var r=h(t),a=g(e,!0);if(r!==G||!d(Y,a)||d(Z,a)){var n=R(r,a);return!n||!d(Y,a)||d(r,T)&&r[T][a]||(n.enumerable=!0),n}},bt=function(t){var e=V(h(t)),r=[];return F(e,(function(t){d(Y,t)||d($,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=V(e?Z:h(t)),a=[];return F(r,(function(t){!d(Y,t)||e&&!d(G,t)||a.push(Y[t])})),a};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===G&&r.call(Z,t),d(this,T)&&d(this[T],e)&&(this[T][e]=!1),st(this,e,y(1,t))};return o&&nt&&st(G,e,{configurable:!0,set:r}),it(e,t)},P(H[Q],"toString",(function(){return B(this).tag})),P(H,"withoutSetter",(function(t){return it(L(t),t)})),k.f=dt,x.f=ct,j.f=ft,w.f=C.f=bt,O.f=pt,I.f=function(t){return it(M(t),t)},o&&(U(H[Q],"description",{configurable:!0,get:function(){return B(this).description}}),i||P(G,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),F(_(rt),(function(t){N(t)})),a({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),a({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),K){var vt=!c||u((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var a,n=[t],s=1;while(arguments.length>s)n.push(arguments[s++]);if(a=e,(b(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ot(e))return e}),n[1]=e,K.apply(null,n)}})}H[Q][W]||S(H[Q],W,H[Q].valueOf),J(H,z),$[T]=!0},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),s=r("df75"),i=r("d039"),o=i((function(){s(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return s(n(t))}})},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,l=s(a),u={},d=0;while(l.length>d)r=n(a,e=l[d++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=n((function(){i(1)})),l=!o||c;a({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-6b0b41d6.973b87ab.js.map