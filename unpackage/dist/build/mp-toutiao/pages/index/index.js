(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2329:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return u})),e.d(i,"a",(function(){return n}));var n={uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"adc5"))},uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"d48d"))}},o=function(){var t=this,i=t.$createElement;t._self._c},u=[]},"39c5":function(t,i,e){},"4e4d":function(t,i,e){"use strict";(function(t,i){e("c264");o(e("66fd"));var n=o(e("5288"));function o(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("f266")["default"],e("f266")["createPage"])},5288:function(t,i,e){"use strict";e.r(i);var n=e("2329"),o=e("67ae");for(var u in o)"default"!==u&&function(t){e.d(i,t,(function(){return o[t]}))}(u);e("70c2");var r,a=e("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);i["default"]=c.exports},"67ae":function(t,i,e){"use strict";e.r(i);var n=e("9516"),o=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(i,t,(function(){return n[t]}))}(u);i["default"]=o.a},"70c2":function(t,i,e){"use strict";var n=e("39c5"),o=e.n(n);o.a},9516:function(t,i,e){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{Height:0,swiperList:[],activity:[],isLogin:"",show:!1}},onLoad:function(i){var e=this;0==t.getStorageSync("is_bind")&&t.clearStorageSync(),console.log(i),void 0!=i.uid&&t.setStorageSync("uid_key",i.uid),void 0!=i.qrcode&&t.setStorageSync("uid_key",i.qrcode),this.$u.post("/index/getArticlesList").then((function(i){0==i.error?e.activity=i.data.items:t.showToast({title:i.msg,icon:"none"})})),this.$u.post("/index/getAd",{position_code:"HomeBanner"}).then((function(i){0==i.error?e.swiperList=i.data.items:t.showToast({title:i.msg,icon:"none"})}))},onShow:function(){""==t.getStorageSync("token")?this.isLogin=!0:this.isLogin=!1},methods:{sameDay:function(){t.navigateTo({url:"sameDay"})},book:function(){e.switchTab({url:"../sort/sort"})},activity_detail:function(i){t.navigateTo({url:"activity?article_id="+i.article_id})},mention:function(){t.switchTab({url:"../sort/sort"})},toPage:function(i){console.log(this.swiperList[i]),"product"==this.swiperList[i].link_type&&t.navigateTo({url:"../index/detail?goods_id="+this.swiperList[i].ad_url}),"article"==this.swiperList[i].link_type&&t.navigateTo({url:"activity?article_id="+this.swiperList[i].ad_url})}}};i.default=n}).call(this,e("f266")["default"],e("f266")["default"])}},[["4e4d","common/runtime","common/vendor"]]]);