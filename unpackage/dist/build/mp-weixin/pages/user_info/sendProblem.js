(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_info/sendProblem"],{"1edd":function(n,e,t){"use strict";t.r(e);var u=t("4376"),o=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=o.a},3672:function(n,e,t){"use strict";var u=t("52d8"),o=t.n(u);o.a},4376:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{itemList:[]}},onLoad:function(n){var e=this;console.log(n),this.$u.post("/common/getQuestion").then((function(t){0==t.error&&(t.data[n.index].open=!1,t.data[n.index].data.forEach((function(n){n.question="Q:"+n.question,console.log(n.question)})),e.itemList=t.data[n.index])}))}};e.default=u},"52d8":function(n,e,t){},"8b06":function(n,e,t){"use strict";t.r(e);var u=t("ed38"),o=t("1edd");for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("3672");var a=t("828b"),c=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=c.exports},c74b:function(n,e,t){"use strict";(function(n,e){var u=t("47a9");t("d3e5");u(t("3240"));var o=u(t("8b06"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},ed38:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var u={uCollapse:function(){return t.e("uview-ui/components/u-collapse/u-collapse").then(t.bind(null,"c2bc"))},uCollapseItem:function(){return t.e("uview-ui/components/u-collapse-item/u-collapse-item").then(t.bind(null,"93d7"))}},o=function(){var n=this.$createElement;this._self._c},i=[]}},[["c74b","common/runtime","common/vendor"]]]);