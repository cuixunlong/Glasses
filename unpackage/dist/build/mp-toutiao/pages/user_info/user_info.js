(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_info/user_info"],{"0c41":function(n,t,e){},"1e22":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uModal:function(){return e.e("uview-ui/components/u-modal/u-modal").then(e.bind(null,"e656"))},uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"d48d"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"6f1a"))}},o=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.show=!n.show},n.e1=function(t){n.show=!1})},i=[]},"31a2":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{show:!1,userInfo:{},couponNum:0,walletNum:0,dayNum:0,sureShow:!1,custNum:""}},onLoad:function(){},onShow:function(){var t=this;""===n.getStorageSync("token")?(this.sureShow=!0,this.userInfo={},this.userInfo.face="/static/user_info/head.png",this.userInfo.mobile="手机号",this.userInfo.nickname="登录/注册",console.log("123")):0==n.getStorageSync("is_bind")||(this.sureShow=!1,this.$u.post("/ucenter/getUserInfo").then((function(e){0==e.error?(t.userInfo=e.data,t.walletNum=e.data.money):(n.showToast({title:"登录过期，请重新登陆",icon:"none"}),setTimeout((function(){n.navigateTo({url:"../login/login"})}),500))})),this.$u.post("/ucenter/getMemberMemorialList").then((function(n){0==n.error&&(t.dayNum=n.data.items.length)})),this.$u.post("/ucenter/getMemberCouponList").then((function(n){var e=n.data.items.filter((function(n){return 0==n.status}));t.couponNum=e.length})),this.$u.post("/ucenter/getServiceConfig").then((function(n){0==n.error&&(t.custNum=n.data.servicePhone)})))},methods:{confirm:function(){n.reLaunch({url:"../login/login"}),this.sureShow=!1},cancel:function(){n.switchTab({url:"../index/index"})},toUserData:function(){n.navigateTo({url:"user_data"})},toAddress:function(){n.navigateTo({url:"address/address"})},callNum:function(){console.log(this.custNum),n.makePhoneCall({phoneNumber:this.custNum})}}};t.default=e}).call(this,e("f266")["default"])},"52a2":function(n,t,e){"use strict";e.r(t);var u=e("1e22"),o=e("8dd6");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("a11a");var r,a=e("f0c5"),c=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=c.exports},"8dd6":function(n,t,e){"use strict";e.r(t);var u=e("31a2"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},a11a:function(n,t,e){"use strict";var u=e("0c41"),o=e.n(u);o.a},bdd7:function(n,t,e){"use strict";(function(n,t){e("c264");o(e("66fd"));var u=o(e("52a2"));function o(n){return n&&n.__esModule?n:{default:n}}n.__webpack_require_UNI_MP_PLUGIN__=e,t(u.default)}).call(this,e("f266")["default"],e("f266")["createPage"])}},[["bdd7","common/runtime","common/vendor"]]]);