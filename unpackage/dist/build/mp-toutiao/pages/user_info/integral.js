(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_info/integral"],{"01f9":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={uLoadmore:function(){return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null,"0a31"))}},u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"488c":function(t,n,e){"use strict";e.r(n);var o=e("4b39"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},"4b39":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{status:"loadmore",integralList:[],iconType:"circle",loadText:{loadmore:"轻轻上拉",loading:"加载中",nomore:"只有这么多了"}}},onLoad:function(){var t=this;this.$u.post("/ucenter/getLogMemberIntegralList").then((function(n){0==n.error&&(t.integralList=n.data.items,0==t.integralList.length&&(t.status=t.loadText.nomore,console.log(t.status)))}))}};n.default=o},5972:function(t,n,e){"use strict";e.r(n);var o=e("01f9"),u=e("488c");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("8e45");var r,i=e("f0c5"),c=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},"8e45":function(t,n,e){"use strict";var o=e("a998"),u=e.n(o);u.a},a84a:function(t,n,e){"use strict";(function(t,n){e("c264");u(e("66fd"));var o=u(e("5972"));function u(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("f266")["default"],e("f266")["createPage"])},a998:function(t,n,e){}},[["a84a","common/runtime","common/vendor"]]]);