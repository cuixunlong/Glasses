(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderDetails"],{2291:function(e,t,r){"use strict";r.r(t);var n=r("696d"),a=r("d7a1");for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("a0f1");var i=r("828b"),d=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=d.exports},"31f1":function(e,t,r){},"50aa5":function(e,t,r){"use strict";(function(e,t){var n=r("47a9");r("d3e5");n(r("3240"));var a=n(r("2291"));e.__webpack_require_UNI_MP_PLUGIN__=r,t(a.default)}).call(this,r("3223")["default"],r("df3c")["createPage"])},"696d":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var n={uModal:function(){return r.e("uview-ui/components/u-modal/u-modal").then(r.bind(null,"eabe"))},uImage:function(){return r.e("uview-ui/components/u-image/u-image").then(r.bind(null,"bf84"))}},a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.sureShow=!e.sureShow})},o=[]},a0f1:function(e,t,r){"use strict";var n=r("31f1"),a=r.n(n);a.a},b6e4:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{show:!1,sureShow:!1,orderDetail:[],serve_number:"30.00",remark:"无备注",order_id:""}},onLoad:function(e){var t=this;console.log(e),this.order_id=e.order_id,this.$u.post("/order/getorder",{order_id:e.order_id}).then((function(e){0==e.error&&(console.log(e.data.wish_remark),""==e.data.need_time?(e.data.need_time="立即配送",e.data.create_time=e.data.create_time.slice(0,10)):(e.data.time="预约配送",e.data.need_time=e.data.need_time.substring(0,10)+" "+e.data.need_time.substring(12)),e.data.address=e.data.address.replace(/_/g," "),t.orderDetail=e.data,console.log(t.orderDetail),""!=e.data.remark&&(t.remark=e.data.remark))}))},methods:{deleteOrder:function(e){console.log(e),this.show=!this.show},confirm:function(){var t=this;this.$u.post("/order/confirmOrder",{order_id:this.order_id}).then((function(r){0==r.error&&(e.showToast({title:"收货成功"}),t.sureShow=!1)})),setTimeout((function(){e.navigateBack({})}),1e3)},toBuy:function(){e.switchTab({url:"../index/index"})},toPay:function(t){e.navigateTo({url:"payment?order_id="+t})}}};t.default=r}).call(this,r("df3c")["default"])},d7a1:function(e,t,r){"use strict";r.r(t);var n=r("b6e4"),a=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a}},[["50aa5","common/runtime","common/vendor"]]]);