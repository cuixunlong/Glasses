(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-verification-code/u-verification-code"],{"45f8":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var s=function(){var e=this,t=e.$createElement;e._self._c},u=[]},7588:function(e,t,n){"use strict";n.r(t);var i=n("8fbd"),s=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=s.a},8900:function(e,t,n){"use strict";var i=n("b7f0"),s=n.n(i);s.a},"8fbd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var t=Number(e.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var n=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>n?(this.secNum=t-n,e.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);e.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=n}).call(this,n("f266")["default"])},9330:function(e,t,n){"use strict";n.r(t);var i=n("45f8"),s=n("7588");for(var u in s)"default"!==u&&function(e){n.d(t,e,(function(){return s[e]}))}(u);n("8900");var a,c=n("f0c5"),r=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"a608dcec",null,!1,i["a"],a);t["default"]=r.exports},b7f0:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-verification-code/u-verification-code-create-component',
    {
        'uview-ui/components/u-verification-code/u-verification-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("9330"))
        })
    },
    [['uview-ui/components/u-verification-code/u-verification-code-create-component']]
]);
