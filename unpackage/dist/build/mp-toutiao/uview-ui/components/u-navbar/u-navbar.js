(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-navbar/u-navbar"],{"1a8a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"6f1a"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.navbarStyle])),a=t.__get_style([t.navbarInnerStyle]),i=t.isBack&&t.backText?t.__get_style([t.backTextStyle]):null,u=t.title?t.__get_style([t.titleStyle]):null,r=t.isFixed&&!t.immersive?Number(t.navbarHeight):null;t.$mp.data=Object.assign({},{$root:{s0:n,s1:a,s2:i,s3:u,m0:r}})},u=[]},"329d":function(t,e,n){"use strict";var a=n("a4bb"),i=n.n(a);i.a},4240:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t.getSystemInfoSync(),a={};a=t.getMenuButtonBoundingClientRect();var i={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};t.height=this.navbarHeight+"px";var e=n.windowWidth-a.left;return t.marginRight=e+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var e={},i=n.windowWidth-a.left;return e.left=(n.windowWidth-t.upx2px(this.titleWidth))/2+"px",e.right=i-(n.windowWidth-t.upx2px(this.titleWidth))/2+i+"px",e.width=t.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){var t="ios"==n.platform?44:48;return this.height?this.height:t}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():t.navigateBack()}}};e.default=i}).call(this,n("f266")["default"])},"9cbc":function(t,e,n){"use strict";n.r(e);var a=n("4240"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},a4bb:function(t,e,n){},f8b8:function(t,e,n){"use strict";n.r(e);var a=n("1a8a"),i=n("9cbc");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("329d");var r,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"756f7d0a",null,!1,a["a"],r);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-navbar/u-navbar-create-component',
    {
        'uview-ui/components/u-navbar/u-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("f8b8"))
        })
    },
    [['uview-ui/components/u-navbar/u-navbar-create-component']]
]);