(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/invoice/company"],{"2d78":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{info:{invoice_type:0,invoice_head:"",invoice_code:"",invoice_addr:"",invoice_phone:"",invoice_bankName:"",invoice_bankNo:""},id:""}},onLoad:function(n){var i=this;this.id=n.id,void 0!=this.id&&this.$u.post("/Ucenter/getInvoiceDetail",{id:this.id}).then((function(n){0==n.error?(n.data.invoice_type=0,i.info=n.data):t.showToast({title:n.msg,icon:"none"})}))},methods:{saveBtn:function(){this.$u.throttle(this.toInvoice,1e3)},toInvoice:function(){1==this.$u.test.isEmpty(this.info.invoice_head)?t.showToast({title:"发票抬头不能为空",icon:"none"}):0==this.$u.test.rangeLength(this.info.invoice_head,[4,20])?t.showToast({title:"请输入正确的发票抬头",icon:"none"}):1==this.$u.test.isEmpty(this.info.invoice_code)?t.showToast({title:"发票税号不能为空",icon:"none"}):0==this.$u.test.rangeLength(this.info.invoice_code,[15,20])?t.showToast({title:"请输入正确的税号",icon:"none"}):void 0!=this.id?this.$u.post("/ucenter/editInvoice",this.info).then((function(n){0==n.error&&(t.showToast({title:"修改成功",duration:2e3,icon:"success"}),setTimeout((function(){t.navigateBack({})}),1500))})):this.$u.post("/Ucenter/addInvoice",this.info).then((function(n){0===n.error?(t.showToast({title:"添加成功",duration:2e3,icon:"success"}),setTimeout((function(){t.navigateBack({})}),1500)):t.showToast({title:"发票信息有误",duration:2e3,icon:"none"})}))}}};n.default=i}).call(this,i("f266")["default"])},"37b7":function(t,n,i){"use strict";var e=i("c493"),o=i.n(e);o.a},4619:function(t,n,i){"use strict";(function(t,n){i("c264");o(i("66fd"));var e=o(i("e8c1"));function o(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=i,n(e.default)}).call(this,i("f266")["default"],i("f266")["createPage"])},"63c9":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var e={uToast:function(){return i.e("uview-ui/components/u-toast/u-toast").then(i.bind(null,"f667"))}},o=function(){var t=this,n=t.$createElement;t._self._c},c=[]},c493:function(t,n,i){},e8c1:function(t,n,i){"use strict";i.r(n);var e=i("63c9"),o=i("f380");for(var c in o)"default"!==c&&function(t){i.d(n,t,(function(){return o[t]}))}(c);i("37b7");var s,u=i("f0c5"),a=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"7fdd61dc",null,!1,e["a"],s);n["default"]=a.exports},f380:function(t,n,i){"use strict";i.r(n);var e=i("2d78"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a}},[["4619","common/runtime","common/vendor"]]]);