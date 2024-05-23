(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-verification-code/u-verification-code"],{

/***/ 420:
/*!************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-verification-code.vue?vue&type=template&id=9a6ffd60&scoped=true& */ 421);
/* harmony import */ var _u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-verification-code.vue?vue&type=script&lang=js& */ 423);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-verification-code.vue?vue&type=style&index=0&id=9a6ffd60&lang=scss&scoped=true& */ 425);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a6ffd60",
  null,
  false,
  _u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-verification-code/u-verification-code.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 421:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=template&id=9a6ffd60&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-verification-code.vue?vue&type=template&id=9a6ffd60&scoped=true& */ 422);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_template_id_9a6ffd60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 422:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=template&id=9a6ffd60&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 423:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-verification-code.vue?vue&type=script&lang=js& */ 424);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 424:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//

/**
 * verificationCode 验证码输入框
 * @description 考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语各有不同，所以本组件 不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景
 * @tutorial https://www.uviewui.com/components/verificationCode.html
 * @property {Number String} seconds 倒计时所需的秒数（默认60）
 * @property {String} start-text 开始前的提示语，见官网说明（默认获取验证码）
 * @property {String} change-text 倒计时期间的提示语，必须带有字母"x"，见官网说明（默认X秒重新获取）
 * @property {String} end-text 倒计结束的提示语，见官网说明（默认重新获取）
 * @property {Boolean} keep-running 是否在H5刷新或各端返回再进入时继续倒计时（默认false）
 * @event {Function} change 倒计时期间，每秒触发一次
 * @event {Function} start 开始倒计时触发
 * @event {Function} end 结束倒计时触发
 * @example <u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
 */var _default =
{
  name: "u-verification-code",
  props: {
    // 倒计时总秒数
    seconds: {
      type: [String, Number],
      default: 60 },

    // 尚未开始时提示
    startText: {
      type: String,
      default: '获取验证码' },

    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: 'X秒重新获取' },

    // 倒计时结束时的提示
    endText: {
      type: String,
      default: '重新获取' },

    // 是否在H5刷新或各端返回再进入时继续倒计时
    keepRunning: {
      type: Boolean,
      default: false },

    // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
    uniqueKey: {
      type: String,
      default: '' } },


  data: function data() {
    return {
      secNum: this.seconds,
      timer: null,
      canGetCode: true // 是否可以执行验证码操作
    };
  },
  mounted: function mounted() {
    this.checkKeepRunning();
  },
  watch: {
    seconds: {
      immediate: true,
      handler: function handler(n) {
        this.secNum = n;
      } } },


  methods: {
    checkKeepRunning: function checkKeepRunning() {
      // 获取上一次退出页面(H5还包括刷新)时的时间戳，如果没有上次的保存，此值可能为空
      var lastTimestamp = Number(uni.getStorageSync(this.uniqueKey + '_$uCountDownTimestamp'));
      if (!lastTimestamp) return this.changeEvent(this.startText);
      // 当前秒的时间戳
      var nowTimestamp = Math.floor(+new Date() / 1000);
      // 判断当前的时间戳，是否小于上一次的本该按设定结束，却提前结束的时间戳
      if (this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
        // 剩余尚未执行完的倒计秒数
        this.secNum = lastTimestamp - nowTimestamp;
        // 清除本地保存的变量
        uni.removeStorageSync(this.uniqueKey + '_$uCountDownTimestamp');
        // 开始倒计时
        this.start();
      } else {
        // 如果不存在需要继续上一次的倒计时，执行正常的逻辑
        this.changeEvent(this.startText);
      }
    },
    // 开始倒计时
    start: function start() {var _this = this;
      // 防止快速点击获取验证码的按钮而导致内部产生多个定时器导致混乱
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.$emit('start');
      this.canGetCode = false;
      // 这里放这句，是为了一开始时就提示，否则要等setInterval的1秒后才会有提示
      this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
      this.setTimeToStorage();
      this.timer = setInterval(function () {
        if (--_this.secNum) {
          // 用当前倒计时的秒数替换提示字符串中的"x"字母
          _this.changeEvent(_this.changeText.replace(/x|X/, _this.secNum));
        } else {
          clearInterval(_this.timer);
          _this.timer = null;
          _this.changeEvent(_this.endText);
          _this.secNum = _this.seconds;
          _this.$emit('end');
          _this.canGetCode = true;
        }
      }, 1000);
    },
    // 重置，可以让用户再次获取验证码
    reset: function reset() {
      this.canGetCode = true;
      clearInterval(this.timer);
      this.secNum = this.seconds;
      this.changeEvent(this.endText);
    },
    changeEvent: function changeEvent(text) {
      this.$emit('change', text);
    },
    // 保存时间戳，为了防止倒计时尚未结束，H5刷新或者各端的右上角返回上一页再进来
    setTimeToStorage: function setTimeToStorage() {
      if (!this.keepRunning || !this.timer) return;
      // 记录当前的时间戳，为了下次进入页面，如果还在倒计时内的话，继续倒计时
      // 倒计时尚未结束，结果大于0；倒计时已经开始，就会小于初始值，如果等于初始值，说明没有开始倒计时，无需处理
      if (this.secNum > 0 && this.secNum <= this.seconds) {
        // 获取当前时间戳(+ new Date()为特殊写法)，除以1000变成秒，再去除小数部分
        var nowTimestamp = Math.floor(+new Date() / 1000);
        // 将本该结束时候的时间戳保存起来 => 当前时间戳 + 剩余的秒数
        uni.setStorage({
          key: this.uniqueKey + '_$uCountDownTimestamp',
          data: nowTimestamp + Number(this.secNum) });

      }
    } },

  // 组件销毁的时候，清除定时器，否则定时器会继续存在，系统不会自动清除
  beforeDestroy: function beforeDestroy() {
    this.setTimeToStorage();
    clearTimeout(this.timer);
    this.timer = null;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 425:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=style&index=0&id=9a6ffd60&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-verification-code.vue?vue&type=style&index=0&id=9a6ffd60&lang=scss&scoped=true& */ 426);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_verification_code_vue_vue_type_style_index_0_id_9a6ffd60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 426:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-verification-code/u-verification-code.vue?vue&type=style&index=0&id=9a6ffd60&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS12ZXJpZmljYXRpb24tY29kZS91LXZlcmlmaWNhdGlvbi1jb2RlLnZ1ZT9iYWFlIiwid2VicGFjazovLy9DOi9Vc2Vycy9uYy9EZXNrdG9wL0Nha2UvdXZpZXctdWkvY29tcG9uZW50cy91LXZlcmlmaWNhdGlvbi1jb2RlL3UtdmVyaWZpY2F0aW9uLWNvZGUudnVlPzUxMjEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL25jL0Rlc2t0b3AvQ2FrZS91dmlldy11aS9jb21wb25lbnRzL3UtdmVyaWZpY2F0aW9uLWNvZGUvdS12ZXJpZmljYXRpb24tY29kZS52dWU/NWYyZCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS12ZXJpZmljYXRpb24tY29kZS91LXZlcmlmaWNhdGlvbi1jb2RlLnZ1ZT85MzlmIiwidW5pLWFwcDovLy91dmlldy11aS9jb21wb25lbnRzL3UtdmVyaWZpY2F0aW9uLWNvZGUvdS12ZXJpZmljYXRpb24tY29kZS52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL25jL0Rlc2t0b3AvQ2FrZS91dmlldy11aS9jb21wb25lbnRzL3UtdmVyaWZpY2F0aW9uLWNvZGUvdS12ZXJpZmljYXRpb24tY29kZS52dWU/MjQ2YyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS12ZXJpZmljYXRpb24tY29kZS91LXZlcmlmaWNhdGlvbi1jb2RlLnZ1ZT9iMjczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNzQzs7O0FBR3hHO0FBQzRLO0FBQzVLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBNnBCLENBQWdCLDZuQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPanJCOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQSxFQVpBOztBQWdCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQWpCQTs7QUFxQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBM0JBLEVBRkE7OztBQWtDQSxNQWxDQSxrQkFrQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsaUJBRkE7QUFHQSxzQkFIQSxDQUdBO0FBSEE7QUFLQSxHQXhDQTtBQXlDQSxTQXpDQSxxQkF5Q0E7QUFDQTtBQUNBLEdBM0NBO0FBNENBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGFBRkEsbUJBRUEsQ0FGQSxFQUVBO0FBQ0E7QUFDQSxPQUpBLEVBREEsRUE1Q0E7OztBQW9EQTtBQUNBLG9CQURBLDhCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5CQTtBQW9CQTtBQUNBLFNBckJBLG1CQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWkEsRUFZQSxJQVpBO0FBYUEsS0E3Q0E7QUE4Q0E7QUFDQSxTQS9DQSxtQkErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcERBO0FBcURBLGVBckRBLHVCQXFEQSxJQXJEQSxFQXFEQTtBQUNBO0FBQ0EsS0F2REE7QUF3REE7QUFDQSxvQkF6REEsOEJBeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQURBO0FBRUEsa0RBRkE7O0FBSUE7QUFDQSxLQXRFQSxFQXBEQTs7QUE0SEE7QUFDQSxlQTdIQSwyQkE2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWpJQSxFOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQTh0QyxDQUFnQiwrbENBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FsdkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJ1dmlldy11aS9jb21wb25lbnRzL3UtdmVyaWZpY2F0aW9uLWNvZGUvdS12ZXJpZmljYXRpb24tY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWE2ZmZkNjAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LXZlcmlmaWNhdGlvbi1jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YTZmZmQ2MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5YTZmZmQ2MFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtdmVyaWZpY2F0aW9uLWNvZGUvdS12ZXJpZmljYXRpb24tY29kZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtdmVyaWZpY2F0aW9uLWNvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhNmZmZDYwJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidS1jb2RlLXdyYXBcIj5cblx0XHQ8IS0tIOatpOe7hOS7tuWKn+iDveeUsWpz5a6M5oiQ77yM5peg6ZyA5YaZaHRtbOmAu+i+kSAtLT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0LyoqXG5cdCAqIHZlcmlmaWNhdGlvbkNvZGUg6aqM6K+B56CB6L6T5YWl5qGGXG5cdCAqIEBkZXNjcmlwdGlvbiDogIPomZHliLDnlKjmiLflrp7pmYXlj5HpgIHpqozor4HnoIHnmoTlnLrmma/vvIzlj6/og73mmK/kuIDkuKrmjInpkq7vvIzkuZ/lj6/og73mmK/kuIDmrrXmloflrZfvvIzmj5DnpLror63lkITmnInkuI3lkIzvvIzmiYDku6XmnKznu4Tku7Yg5LiN5o+Q5L6b55WM6Z2i5pi+56S677yM5Y+q5o+Q5L6b5o+Q56S66K+t77yM55Sx55So5oi35bCG5o+Q56S66K+t5bWM5YWl5Yiw5YW35L2T55qE5Zy65pmvXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL3d3dy51dmlld3VpLmNvbS9jb21wb25lbnRzL3ZlcmlmaWNhdGlvbkNvZGUuaHRtbFxuXHQgKiBAcHJvcGVydHkge051bWJlciBTdHJpbmd9IHNlY29uZHMg5YCS6K6h5pe25omA6ZyA55qE56eS5pWw77yI6buY6K6kNjDvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXJ0LXRleHQg5byA5aeL5YmN55qE5o+Q56S66K+t77yM6KeB5a6Y572R6K+05piO77yI6buY6K6k6I635Y+W6aqM6K+B56CB77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBjaGFuZ2UtdGV4dCDlgJLorqHml7bmnJ/pl7TnmoTmj5DnpLror63vvIzlv4XpobvluKbmnInlrZfmr41cInhcIu+8jOingeWumOe9keivtOaYju+8iOm7mOiupFjnp5Lph43mlrDojrflj5bvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGVuZC10ZXh0IOWAkuiuoee7k+adn+eahOaPkOekuuivre+8jOingeWumOe9keivtOaYju+8iOm7mOiupOmHjeaWsOiOt+WPlu+8iVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGtlZXAtcnVubmluZyDmmK/lkKblnKhINeWIt+aWsOaIluWQhOerr+i/lOWbnuWGjei/m+WFpeaXtue7p+e7reWAkuiuoeaXtu+8iOm7mOiupGZhbHNl77yJXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDlgJLorqHml7bmnJ/pl7TvvIzmr4/np5Lop6blj5HkuIDmrKFcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gc3RhcnQg5byA5aeL5YCS6K6h5pe26Kem5Y+RXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGVuZCDnu5PmnZ/lgJLorqHml7bop6blj5Fcblx0ICogQGV4YW1wbGUgPHUtdmVyaWZpY2F0aW9uLWNvZGUgOnNlY29uZHM9XCJzZWNvbmRzXCIgQGVuZD1cImVuZFwiIEBzdGFydD1cInN0YXJ0XCIgcmVmPVwidUNvZGVcIiBcblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiBcInUtdmVyaWZpY2F0aW9uLWNvZGVcIixcblx0XHRwcm9wczoge1xuXHRcdFx0Ly8g5YCS6K6h5pe25oC756eS5pWwXG5cdFx0XHRzZWNvbmRzOiB7XG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG5cdFx0XHRcdGRlZmF1bHQ6IDYwXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5bCa5pyq5byA5aeL5pe25o+Q56S6XG5cdFx0XHRzdGFydFRleHQ6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAn6I635Y+W6aqM6K+B56CBJ1xuXHRcdFx0fSxcblx0XHRcdC8vIOato+WcqOWAkuiuoeaXtuS4reeahOaPkOekulxuXHRcdFx0Y2hhbmdlVGV4dDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdY56eS6YeN5paw6I635Y+WJ1xuXHRcdFx0fSxcblx0XHRcdC8vIOWAkuiuoeaXtue7k+adn+aXtueahOaPkOekulxuXHRcdFx0ZW5kVGV4dDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICfph43mlrDojrflj5YnXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5piv5ZCm5ZyoSDXliLfmlrDmiJblkITnq6/ov5Tlm57lho3ov5vlhaXml7bnu6fnu63lgJLorqHml7Zcblx0XHRcdGtlZXBSdW5uaW5nOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5Li65LqG5Yy65YiG5aSa5Liq6aG16Z2i77yM5oiW6ICF5LiA5Liq6aG16Z2i5aSa5Liq5YCS6K6h5pe257uE5Lu25pys5Zyw5a2Y5YKo55qE57un57ut5YCS6K6h5pe25Y+Y5LqGXG5cdFx0XHR1bmlxdWVLZXk6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNlY051bTogdGhpcy5zZWNvbmRzLFxuXHRcdFx0XHR0aW1lcjogbnVsbCxcblx0XHRcdFx0Y2FuR2V0Q29kZTogdHJ1ZSwgLy8g5piv5ZCm5Y+v5Lul5omn6KGM6aqM6K+B56CB5pON5L2cXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0dGhpcy5jaGVja0tlZXBSdW5uaW5nKCk7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0c2Vjb25kczoge1xuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXG5cdFx0XHRcdGhhbmRsZXIobikge1xuXHRcdFx0XHRcdHRoaXMuc2VjTnVtID0gbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y2hlY2tLZWVwUnVubmluZygpIHtcblx0XHRcdFx0Ly8g6I635Y+W5LiK5LiA5qyh6YCA5Ye66aG16Z2iKEg16L+Y5YyF5ous5Yi35pawKeaXtueahOaXtumXtOaIs++8jOWmguaenOayoeacieS4iuasoeeahOS/neWtmO+8jOatpOWAvOWPr+iDveS4uuepulxuXHRcdFx0XHRsZXQgbGFzdFRpbWVzdGFtcCA9IE51bWJlcih1bmkuZ2V0U3RvcmFnZVN5bmModGhpcy51bmlxdWVLZXkgKyAnXyR1Q291bnREb3duVGltZXN0YW1wJykpO1xuXHRcdFx0XHRpZighbGFzdFRpbWVzdGFtcCkgcmV0dXJuIHRoaXMuY2hhbmdlRXZlbnQodGhpcy5zdGFydFRleHQpO1xuXHRcdFx0XHQvLyDlvZPliY3np5LnmoTml7bpl7TmiLNcblx0XHRcdFx0bGV0IG5vd1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoKCsgbmV3IERhdGUoKSkgLyAxMDAwKTtcblx0XHRcdFx0Ly8g5Yik5pat5b2T5YmN55qE5pe26Ze05oiz77yM5piv5ZCm5bCP5LqO5LiK5LiA5qyh55qE5pys6K+l5oyJ6K6+5a6a57uT5p2f77yM5Y205o+Q5YmN57uT5p2f55qE5pe26Ze05oizXG5cdFx0XHRcdGlmKHRoaXMua2VlcFJ1bm5pbmcgJiYgbGFzdFRpbWVzdGFtcCAmJiBsYXN0VGltZXN0YW1wID4gbm93VGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0Ly8g5Ymp5L2Z5bCa5pyq5omn6KGM5a6M55qE5YCS6K6h56eS5pWwXG5cdFx0XHRcdFx0dGhpcy5zZWNOdW0gPSBsYXN0VGltZXN0YW1wIC0gbm93VGltZXN0YW1wO1xuXHRcdFx0XHRcdC8vIOa4hemZpOacrOWcsOS/neWtmOeahOWPmOmHj1xuXHRcdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYyh0aGlzLnVuaXF1ZUtleSArICdfJHVDb3VudERvd25UaW1lc3RhbXAnKTtcblx0XHRcdFx0XHQvLyDlvIDlp4vlgJLorqHml7Zcblx0XHRcdFx0XHR0aGlzLnN0YXJ0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g5aaC5p6c5LiN5a2Y5Zyo6ZyA6KaB57un57ut5LiK5LiA5qyh55qE5YCS6K6h5pe277yM5omn6KGM5q2j5bi455qE6YC76L6RXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VFdmVudCh0aGlzLnN0YXJ0VGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyDlvIDlp4vlgJLorqHml7Zcblx0XHRcdHN0YXJ0KCkge1xuXHRcdFx0XHQvLyDpmLLmraLlv6vpgJ/ngrnlh7vojrflj5bpqozor4HnoIHnmoTmjInpkq7ogIzlr7zoh7TlhoXpg6jkuqfnlJ/lpJrkuKrlrprml7blmajlr7zoh7Tmt7fkubFcblx0XHRcdFx0aWYodGhpcy50aW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kZW1pdCgnc3RhcnQnKTtcblx0XHRcdFx0dGhpcy5jYW5HZXRDb2RlID0gZmFsc2U7XG5cdFx0XHRcdC8vIOi/memHjOaUvui/meWPpe+8jOaYr+S4uuS6huS4gOW8gOWni+aXtuWwseaPkOekuu+8jOWQpuWImeimgeetiXNldEludGVydmFs55qEMeenkuWQjuaJjeS8muacieaPkOekulxuXHRcdFx0XHR0aGlzLmNoYW5nZUV2ZW50KHRoaXMuY2hhbmdlVGV4dC5yZXBsYWNlKC94fFgvLCB0aGlzLnNlY051bSkpO1xuXHRcdFx0XHR0aGlzLnNldFRpbWVUb1N0b3JhZ2UoKTtcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoLS10aGlzLnNlY051bSkge1xuXHRcdFx0XHRcdFx0Ly8g55So5b2T5YmN5YCS6K6h5pe255qE56eS5pWw5pu/5o2i5o+Q56S65a2X56ym5Liy5Lit55qEXCJ4XCLlrZfmr41cblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlRXZlbnQodGhpcy5jaGFuZ2VUZXh0LnJlcGxhY2UoL3h8WC8sIHRoaXMuc2VjTnVtKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlRXZlbnQodGhpcy5lbmRUZXh0KTtcblx0XHRcdFx0XHRcdHRoaXMuc2VjTnVtID0gdGhpcy5zZWNvbmRzO1xuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnZW5kJyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNhbkdldENvZGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6YeN572u77yM5Y+v5Lul6K6p55So5oi35YaN5qyh6I635Y+W6aqM6K+B56CBXG5cdFx0XHRyZXNldCgpIHtcblx0XHRcdFx0dGhpcy5jYW5HZXRDb2RlID0gdHJ1ZTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRcdFx0dGhpcy5zZWNOdW0gPSB0aGlzLnNlY29uZHM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRXZlbnQodGhpcy5lbmRUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VFdmVudCh0ZXh0KSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRleHQpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOS/neWtmOaXtumXtOaIs++8jOS4uuS6humYsuatouWAkuiuoeaXtuWwmuacque7k+adn++8jEg15Yi35paw5oiW6ICF5ZCE56uv55qE5Y+z5LiK6KeS6L+U5Zue5LiK5LiA6aG15YaN6L+b5p2lXG5cdFx0XHRzZXRUaW1lVG9TdG9yYWdlKCkge1xuXHRcdFx0XHRpZighdGhpcy5rZWVwUnVubmluZyB8fCAhdGhpcy50aW1lcikgcmV0dXJuO1xuXHRcdFx0XHQvLyDorrDlvZXlvZPliY3nmoTml7bpl7TmiLPvvIzkuLrkuobkuIvmrKHov5vlhaXpobXpnaLvvIzlpoLmnpzov5jlnKjlgJLorqHml7blhoXnmoTor53vvIznu6fnu63lgJLorqHml7Zcblx0XHRcdFx0Ly8g5YCS6K6h5pe25bCa5pyq57uT5p2f77yM57uT5p6c5aSn5LqOMO+8m+WAkuiuoeaXtuW3sue7j+W8gOWni++8jOWwseS8muWwj+S6juWIneWni+WAvO+8jOWmguaenOetieS6juWIneWni+WAvO+8jOivtOaYjuayoeacieW8gOWni+WAkuiuoeaXtu+8jOaXoOmcgOWkhOeQhlxuXHRcdFx0XHRpZih0aGlzLnNlY051bSA+IDAgJiYgdGhpcy5zZWNOdW0gPD0gdGhpcy5zZWNvbmRzKSB7XG5cdFx0XHRcdFx0Ly8g6I635Y+W5b2T5YmN5pe26Ze05oizKCsgbmV3IERhdGUoKeS4uueJueauiuWGmeazlSnvvIzpmaTku6UxMDAw5Y+Y5oiQ56eS77yM5YaN5Y676Zmk5bCP5pWw6YOo5YiGXG5cdFx0XHRcdFx0bGV0IG5vd1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoKCsgbmV3IERhdGUoKSkgLyAxMDAwKTtcblx0XHRcdFx0XHQvLyDlsIbmnKzor6Xnu5PmnZ/ml7blgJnnmoTml7bpl7TmiLPkv53lrZjotbfmnaUgPT4g5b2T5YmN5pe26Ze05oizICsg5Ymp5L2Z55qE56eS5pWwXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0a2V5OiB0aGlzLnVuaXF1ZUtleSArICdfJHVDb3VudERvd25UaW1lc3RhbXAnLFxuXHRcdFx0XHRcdFx0ZGF0YTogbm93VGltZXN0YW1wICsgTnVtYmVyKHRoaXMuc2VjTnVtKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOe7hOS7tumUgOavgeeahOaXtuWAme+8jOa4hemZpOWumuaXtuWZqO+8jOWQpuWImeWumuaXtuWZqOS8mue7p+e7reWtmOWcqO+8jOezu+e7n+S4jeS8muiHquWKqOa4hemZpFxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0XHR0aGlzLnNldFRpbWVUb1N0b3JhZ2UoKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0QGltcG9ydCBcIi4uLy4uL2xpYnMvY3NzL3N0eWxlLmNvbXBvbmVudHMuc2Nzc1wiO1xuXHRcblx0LnUtY29kZS13cmFwIHtcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS12ZXJpZmljYXRpb24tY29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YTZmZmQ2MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtdmVyaWZpY2F0aW9uLWNvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWE2ZmZkNjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzOTAxNjI5NDMzMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-verification-code/u-verification-code-create-component',
    {
        'uview-ui/components/u-verification-code/u-verification-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(420))
        })
    },
    [['uview-ui/components/u-verification-code/u-verification-code-create-component']]
]);
