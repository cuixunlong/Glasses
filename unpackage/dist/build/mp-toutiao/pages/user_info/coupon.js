(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_info/coupon"],{"44ca":function(t,e,n){},5633:function(t,e,n){"use strict";var o=n("44ca"),u=n.n(o);u.a},"886d":function(t,e,n){"use strict";n.r(e);var o=n("9ef3"),u=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=u.a},"9ef3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{couponType:[],itemindex:0,current:0,couponList:[],image:!1,state:0}},onLoad:function(){var t=this;this.$u.post("/ucenter/getMemberCouponList").then((function(e){if(0==e.error){var n=e.data.items.filter((function(e){return e.status==t.state}));t.couponList=n,t.couponType.push("未使用("+n.length+")"),t.couponType.push("已使用"),t.couponType.push("已失效")}}))},methods:{getList:function(){var t=this;this.$u.post("/ucenter/getMemberCouponList").then((function(e){if(0==e.error){var n=e.data.items.filter((function(e){return e.status==t.state}));t.couponList=n,console.log(t.couponList)}}))},choose:function(t){console.log(t),this.itemindex=t,this.state=t,this.getList()},toIndex:function(e){if(console.log(e.s_id),0==e.coupon_type)t.switchTab({url:"../sort/sort"});else if(1==e.coupon_type){t.switchTab({url:"../sort/sort"});var n=e.s_id;getApp().globalData.sid=n}else 2==e.coupon_type&&t.navigateTo({url:"../index/detail?goods_id="+e.goods_id})}},computed:{}};e.default=n}).call(this,n("f266")["default"])},a375:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"d48d"))}},u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},d907:function(t,e,n){"use strict";(function(t,e){n("c264");u(n("66fd"));var o=u(n("e6ae"));function u(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("f266")["default"],n("f266")["createPage"])},e6ae:function(t,e,n){"use strict";n.r(e);var o=n("a375"),u=n("886d");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("5633");var r,c=n("f0c5"),a=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=a.exports}},[["d907","common/runtime","common/vendor"]]]);