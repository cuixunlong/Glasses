(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-swiper/u-swiper"],{

/***/ 339:
/*!**************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-swiper.vue?vue&type=template&id=a5b2d580&scoped=true& */ 340);
/* harmony import */ var _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-swiper.vue?vue&type=script&lang=js& */ 342);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-swiper.vue?vue&type=style&index=0&id=a5b2d580&lang=scss&scoped=true& */ 344);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a5b2d580",
  null,
  false,
  _u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-swiper/u-swiper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 340:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=template&id=a5b2d580&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-swiper.vue?vue&type=template&id=a5b2d580&scoped=true& */ 341);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_template_id_a5b2d580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 341:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=template&id=a5b2d580&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.list, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var s0 =
      _vm.title && item.title
        ? _vm.__get_style([
            {
              "padding-bottom": _vm.titlePaddingBottom
            },
            _vm.titleStyle
          ])
        : null
    return {
      $orig: $orig,
      s0: s0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 342:
/*!***************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-swiper.vue?vue&type=script&lang=js& */ 343);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 343:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * swiper 轮播图
 * @description 该组件一般用于导航轮播，广告展示等场景,可开箱即用
 * @tutorial https://www.uviewui.com/components/swiper.html
 * @property {Array} list 轮播图数据，见官网"基本使用"说明
 * @property {Boolean} title 是否显示标题文字，需要配合list参数，见官网说明（默认false）
 * @property {String} mode 指示器模式，见官网说明（默认round）
 * @property {String Number} height 轮播图组件高度，单位rpx（默认250）
 * @property {String} indicator-pos 指示器的位置（默认bottomCenter）
 * @property {Boolean} effect3d 是否开启3D效果（默认false）
 * @property {Boolean} autoplay 是否自动播放（默认true）
 * @property {String Number} interval 自动轮播时间间隔，单位ms（默认2500）
 * @property {Boolean} circular 是否衔接播放，见官网说明（默认true）
 * @property {String} bg-color 背景颜色（默认#f3f4f6）
 * @property {String Number} border-radius 轮播图圆角值，单位rpx（默认8）
 * @property {Object} title-style 自定义标题样式
 * @property {String Number} effect3d-previous-margin mode = true模式的情况下，激活项与前后项之间的距离，单位rpx（默认50）
 * @property {String} img-mode 图片的裁剪模式，详见image组件裁剪模式（默认aspectFill）
 * @event {Function} click 点击轮播图时触发
 * @example <u-swiper :list="list" mode="dot" indicator-pos="bottomRight"></u-swiper>
 */var _default2 =
{
  name: "u-swiper",
  props: {
    // 轮播图的数据,格式如：[{image: 'xxxx', title: 'xxxx'}，{image: 'yyyy', title: 'yyyy'}]，其中title字段可选
    list: {
      type: Array,
      default: function _default() {
        return [];
      } },

    // 是否显示title标题
    title: {
      type: Boolean,
      default: false },

    // 用户自定义的指示器的样式
    indicator: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 圆角值
    borderRadius: {
      type: [Number, String],
      default: 8 },

    // 隔多久自动切换
    interval: {
      type: [String, Number],
      default: 3000 },

    // 指示器的模式，rect|dot|number|round
    mode: {
      type: String,
      default: 'round' },

    // list的高度，单位rpx
    height: {
      type: [Number, String],
      default: 250 },

    // 指示器的位置，topLeft|topCenter|topRight|bottomLeft|bottomCenter|bottomRight
    indicatorPos: {
      type: String,
      default: 'bottomCenter' },

    // 是否开启缩放效果
    effect3d: {
      type: Boolean,
      default: false },

    // 3D模式的情况下，激活item与前后item之间的距离，单位rpx
    effect3dPreviousMargin: {
      type: [Number, String],
      default: 50 },

    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true },

    // 自动轮播时间间隔，单位ms
    duration: {
      type: [Number, String],
      default: 500 },

    // 是否衔接滑动，即到最后一张时接着滑动，是否自动切换到第一张
    circular: {
      type: Boolean,
      default: true },

    // 图片的裁剪模式 
    imgMode: {
      type: String,
      default: 'aspectFill' },

    // 从list数组中读取的图片的属性名
    name: {
      type: String,
      default: 'image' },

    // 背景颜色
    bgColor: {
      type: String,
      default: '#f3f4f6' },

    // 初始化时，默认显示第几项
    current: {
      type: [Number, String],
      default: 0 },

    // 标题的样式，对象形式
    titleStyle: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  watch: {
    // 如果外部的list发生变化，判断长度是否被修改，如果前后长度不一致，重置uCurrent值，避免溢出
    list: function list(nVal, oVal) {
      if (nVal.length !== oVal.length) this.uCurrent = 0;
    },
    // 监听外部current的变化，实时修改内部依赖于此测uCurrent值，如果更新了current，而不是更新uCurrent，
    // 就会错乱，因为指示器是依赖于uCurrent的
    current: function current(n) {
      this.uCurrent = n;
    } },

  data: function data() {
    return {
      uCurrent: this.current // 当前活跃的swiper-item的index
    };
  },
  computed: {
    justifyContent: function justifyContent() {
      if (this.indicatorPos == 'topLeft' || this.indicatorPos == 'bottomLeft') return 'flex-start';
      if (this.indicatorPos == 'topCenter' || this.indicatorPos == 'bottomCenter') return 'center';
      if (this.indicatorPos == 'topRight' || this.indicatorPos == 'bottomRight') return 'flex-end';
    },
    titlePaddingBottom: function titlePaddingBottom() {
      var tmp = 0;
      if (this.mode == 'none') return '12rpx';
      if (['bottomLeft', 'bottomCenter', 'bottomRight'].indexOf(this.indicatorPos) >= 0 && this.mode == 'number') {
        tmp = '60rpx';
      } else if (['bottomLeft', 'bottomCenter', 'bottomRight'].indexOf(this.indicatorPos) >= 0 && this.mode != 'number') {
        tmp = '40rpx';
      } else {
        tmp = '12rpx';
      }
      return tmp;
    },
    // 因为uni的swiper组件的current参数只接受Number类型，这里做一个转换
    elCurrent: function elCurrent() {
      return Number(this.current);
    } },

  methods: {
    listClick: function listClick(index) {
      this.$emit('click', index);
    },
    change: function change(e) {
      var current = e.detail.current;
      this.uCurrent = current;
      // 发出change事件，表示当前自动切换的index，从0开始
      this.$emit('change', current);
    },
    // 头条小程序不支持animationfinish事件，改由change事件
    // 暂不监听此事件，因为不再给swiper绑定uCurrent属性
    animationfinish: function animationfinish(e) {



    } } };exports.default = _default2;

/***/ }),

/***/ 344:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=style&index=0&id=a5b2d580&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-swiper.vue?vue&type=style&index=0&id=a5b2d580&lang=scss&scoped=true& */ 345);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_swiper_vue_vue_type_style_index_0_id_a5b2d580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/nc/Desktop/Cake/uview-ui/components/u-swiper/u-swiper.vue?vue&type=style&index=0&id=a5b2d580&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2lwZXIvdS1zd2lwZXIudnVlP2M5MzQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL25jL0Rlc2t0b3AvQ2FrZS91dmlldy11aS9jb21wb25lbnRzL3Utc3dpcGVyL3Utc3dpcGVyLnZ1ZT85OWZmIiwid2VicGFjazovLy9DOi9Vc2Vycy9uYy9EZXNrdG9wL0Nha2UvdXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci91LXN3aXBlci52dWU/MzZiNCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2lwZXIvdS1zd2lwZXIudnVlP2JkYzUiLCJ1bmktYXBwOi8vL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2lwZXIvdS1zd2lwZXIudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9uYy9EZXNrdG9wL0Nha2UvdXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci91LXN3aXBlci52dWU/MTVlMSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvbmMvRGVza3RvcC9DYWtlL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2lwZXIvdS1zd2lwZXIudnVlPzQ0ODQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpSTtBQUNqSTtBQUM0RDtBQUNMO0FBQ3NDOzs7QUFHN0Y7QUFDNEs7QUFDNUssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFrcEIsQ0FBZ0Isa25CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUR0cUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBRkE7O0FBUUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFUQTs7QUFhQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBZEE7O0FBb0JBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGdCQUZBLEVBckJBOztBQXlCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxtQkFGQSxFQTFCQTs7QUE4QkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUEvQkE7O0FBbUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBLEVBcENBOztBQXdDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSw2QkFGQSxFQXpDQTs7QUE2Q0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUE5Q0E7O0FBa0RBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBbkRBOztBQXVEQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQXhEQTs7QUE0REE7QUFDQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUE3REE7O0FBaUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBbEVBOztBQXNFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSwyQkFGQSxFQXZFQTs7QUEyRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUE1RUE7O0FBZ0ZBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBakZBOztBQXFGQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxnQkFGQSxFQXRGQTs7QUEwRkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQTNGQSxFQUZBOzs7QUFvR0E7QUFDQTtBQUNBLFFBRkEsZ0JBRUEsSUFGQSxFQUVBLElBRkEsRUFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0E7QUFDQSxXQVBBLG1CQU9BLENBUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQSxFQXBHQTs7QUErR0EsTUEvR0Esa0JBK0dBO0FBQ0E7QUFDQSw0QkFEQSxDQUNBO0FBREE7QUFHQSxHQW5IQTtBQW9IQTtBQUNBLGtCQURBLDRCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLHNCQU5BLGdDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakJBO0FBa0JBO0FBQ0EsYUFuQkEsdUJBbUJBO0FBQ0E7QUFDQSxLQXJCQSxFQXBIQTs7QUEySUE7QUFDQSxhQURBLHFCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsa0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFDQTtBQUNBLG1CQVpBLDJCQVlBLENBWkEsRUFZQTs7OztBQUlBLEtBaEJBLEVBM0lBLEU7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFtdEMsQ0FBZ0Isb2xDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdnVDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoidXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci91LXN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1YjJkNTgwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTViMmQ1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTViMmQ1ODBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci91LXN3aXBlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Utc3dpcGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNWIyZDU4MCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICB2YXIgczAgPVxuICAgICAgX3ZtLnRpdGxlICYmIGl0ZW0udGl0bGVcbiAgICAgICAgPyBfdm0uX19nZXRfc3R5bGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBhZGRpbmctYm90dG9tXCI6IF92bS50aXRsZVBhZGRpbmdCb3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0udGl0bGVTdHlsZVxuICAgICAgICAgIF0pXG4gICAgICAgIDogbnVsbFxuICAgIHJldHVybiB7XG4gICAgICAkb3JpZzogJG9yaWcsXG4gICAgICBzMDogczBcbiAgICB9XG4gIH0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Utc3dpcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidS1zd2lwZXItd3JhcFwiIDpzdHlsZT1cIntcblx0XHRib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c31ycHhgXG5cdH1cIj5cblx0XHQ8c3dpcGVyIDpjdXJyZW50PVwiZWxDdXJyZW50XCIgQGNoYW5nZT1cImNoYW5nZVwiIEBhbmltYXRpb25maW5pc2g9XCJhbmltYXRpb25maW5pc2hcIiA6aW50ZXJ2YWw9XCJpbnRlcnZhbFwiIDpjaXJjdWxhcj1cImNpcmN1bGFyXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiA6YXV0b3BsYXk9XCJhdXRvcGxheVwiXG5cdFx0IDpwcmV2aW91cy1tYXJnaW49XCJlZmZlY3QzZCA/IGVmZmVjdDNkUHJldmlvdXNNYXJnaW4gKyAncnB4JyA6ICcwJ1wiIDpuZXh0LW1hcmdpbj1cImVmZmVjdDNkID8gZWZmZWN0M2RQcmV2aW91c01hcmdpbiArICdycHgnIDogJzAnXCJcblx0XHQgOnN0eWxlPVwie1xuXHRcdFx0XHRoZWlnaHQ6IGhlaWdodCArICdycHgnLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3Jcblx0XHRcdH1cIj5cblx0XHRcdDxzd2lwZXItaXRlbSBjbGFzcz1cInUtc3dpcGVyLWl0ZW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtbGlzdC1pbWFnZS13cmFwXCIgQHRhcC5zdG9wLnByZXZlbnQ9XCJsaXN0Q2xpY2soaW5kZXgpXCIgOmNsYXNzPVwiW3VDdXJyZW50ICE9IGluZGV4ID8gJ3UtbGlzdC1zY2FsZScgOiAnJ11cIiA6c3R5bGU9XCJ7XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c31ycHhgLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBlZmZlY3QzZCAmJiB1Q3VycmVudCAhPSBpbmRleCA/ICdzY2FsZVkoMC45KScgOiAnc2NhbGVZKDEpJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogZWZmZWN0M2QgJiYgdUN1cnJlbnQgIT0gaW5kZXggPyAnMCAyMHJweCcgOiAwLFxuXHRcdFx0XHRcdH1cIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1LXN3aXBlci1pbWFnZVwiIDpzcmM9XCJpdGVtW25hbWVdIHx8IGl0ZW1cIiA6bW9kZT1cImltZ01vZGVcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJ0aXRsZSAmJiBpdGVtLnRpdGxlXCIgY2xhc3M9XCJ1LXN3aXBlci10aXRsZSB1LWxpbmUtMVwiIDpzdHlsZT1cIlt7XG5cdFx0XHRcdFx0XHRcdCdwYWRkaW5nLWJvdHRvbSc6IHRpdGxlUGFkZGluZ0JvdHRvbVxuXHRcdFx0XHRcdFx0fSwgdGl0bGVTdHlsZV1cIj5cblx0XHRcdFx0XHRcdHt7IGl0ZW0udGl0bGUgfX1cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0PC9zd2lwZXI+XG5cdFx0PHZpZXcgY2xhc3M9XCJ1LXN3aXBlci1pbmRpY2F0b3JcIiA6c3R5bGU9XCJ7XG5cdFx0XHRcdHRvcDogaW5kaWNhdG9yUG9zID09ICd0b3BMZWZ0JyB8fCBpbmRpY2F0b3JQb3MgPT0gJ3RvcENlbnRlcicgfHwgaW5kaWNhdG9yUG9zID09ICd0b3BSaWdodCcgPyAnMTJycHgnIDogJ2F1dG8nLFxuXHRcdFx0XHRib3R0b206IGluZGljYXRvclBvcyA9PSAnYm90dG9tTGVmdCcgfHwgaW5kaWNhdG9yUG9zID09ICdib3R0b21DZW50ZXInIHx8IGluZGljYXRvclBvcyA9PSAnYm90dG9tUmlnaHQnID8gJzEycnB4JyA6ICdhdXRvJyxcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IGp1c3RpZnlDb250ZW50LFxuXHRcdFx0XHRwYWRkaW5nOiBgMCAke2VmZmVjdDNkID8gJzc0cnB4JyA6ICcyNHJweCd9YFxuXHRcdFx0fVwiPlxuXHRcdFx0PGJsb2NrIHYtaWY9XCJtb2RlID09ICdyZWN0J1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtaW5kaWNhdG9yLWl0ZW0tcmVjdFwiIDpjbGFzcz1cInsgJ3UtaW5kaWNhdG9yLWl0ZW0tcmVjdC1hY3RpdmUnOiBpbmRleCA9PSB1Q3VycmVudCB9XCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGxpc3RcIlxuXHRcdFx0XHQgOmtleT1cImluZGV4XCI+PC92aWV3PlxuXHRcdFx0PC9ibG9jaz5cblx0XHRcdDxibG9jayB2LWlmPVwibW9kZSA9PSAnZG90J1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtaW5kaWNhdG9yLWl0ZW0tZG90XCIgOmNsYXNzPVwieyAndS1pbmRpY2F0b3ItaXRlbS1kb3QtYWN0aXZlJzogaW5kZXggPT0gdUN1cnJlbnQgfVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsaXN0XCJcblx0XHRcdFx0IDprZXk9XCJpbmRleFwiPjwvdmlldz5cblx0XHRcdDwvYmxvY2s+XG5cdFx0XHQ8YmxvY2sgdi1pZj1cIm1vZGUgPT0gJ3JvdW5kJ1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtaW5kaWNhdG9yLWl0ZW0tcm91bmRcIiA6Y2xhc3M9XCJ7ICd1LWluZGljYXRvci1pdGVtLXJvdW5kLWFjdGl2ZSc6IGluZGV4ID09IHVDdXJyZW50IH1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiXG5cdFx0XHRcdCA6a2V5PVwiaW5kZXhcIj48L3ZpZXc+XG5cdFx0XHQ8L2Jsb2NrPlxuXHRcdFx0PGJsb2NrIHYtaWY9XCJtb2RlID09ICdudW1iZXInXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1pbmRpY2F0b3ItaXRlbS1udW1iZXJcIj57eyB1Q3VycmVudCArIDEgfX0ve3sgbGlzdC5sZW5ndGggfX08L3ZpZXc+XG5cdFx0XHQ8L2Jsb2NrPlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0LyoqXG5cdCAqIHN3aXBlciDova7mkq3lm75cblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tuS4gOiIrOeUqOS6juWvvOiIqui9ruaSre+8jOW5v+WRiuWxleekuuetieWcuuaZryzlj6/lvIDnrrHljbPnlKhcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvc3dpcGVyLmh0bWxcblx0ICogQHByb3BlcnR5IHtBcnJheX0gbGlzdCDova7mkq3lm77mlbDmja7vvIzop4HlrpjnvZFcIuWfuuacrOS9v+eUqFwi6K+05piOXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdGl0bGUg5piv5ZCm5pi+56S65qCH6aKY5paH5a2X77yM6ZyA6KaB6YWN5ZCIbGlzdOWPguaVsO+8jOingeWumOe9keivtOaYju+8iOm7mOiupGZhbHNl77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RlIOaMh+ekuuWZqOaooeW8j++8jOingeWumOe9keivtOaYju+8iOm7mOiupHJvdW5k77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gaGVpZ2h0IOi9ruaSreWbvue7hOS7tumrmOW6pu+8jOWNleS9jXJweO+8iOm7mOiupDI1MO+8iVxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gaW5kaWNhdG9yLXBvcyDmjIfnpLrlmajnmoTkvY3nva7vvIjpu5jorqRib3R0b21DZW50ZXLvvIlcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBlZmZlY3QzZCDmmK/lkKblvIDlkK8zROaViOaenO+8iOm7mOiupGZhbHNl77yJXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXV0b3BsYXkg5piv5ZCm6Ieq5Yqo5pKt5pS+77yI6buY6K6kdHJ1Ze+8iVxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGludGVydmFsIOiHquWKqOi9ruaSreaXtumXtOmXtOmalO+8jOWNleS9jW1z77yI6buY6K6kMjUwMO+8iVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNpcmN1bGFyIOaYr+WQpuihlOaOpeaSreaUvu+8jOingeWumOe9keivtOaYju+8iOm7mOiupHRydWXvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGJnLWNvbG9yIOiDjOaZr+minOiJsu+8iOm7mOiupCNmM2Y0ZjbvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBib3JkZXItcmFkaXVzIOi9ruaSreWbvuWchuinkuWAvO+8jOWNleS9jXJweO+8iOm7mOiupDjvvIlcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IHRpdGxlLXN0eWxlIOiHquWumuS5ieagh+mimOagt+W8j1xuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGVmZmVjdDNkLXByZXZpb3VzLW1hcmdpbiBtb2RlID0gdHJ1ZeaooeW8j+eahOaDheWGteS4i++8jOa/gOa0u+mhueS4juWJjeWQjumhueS5i+mXtOeahOi3neemu++8jOWNleS9jXJweO+8iOm7mOiupDUw77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpbWctbW9kZSDlm77niYfnmoToo4HliarmqKHlvI/vvIzor6bop4FpbWFnZee7hOS7tuijgeWJquaooeW8j++8iOm7mOiupGFzcGVjdEZpbGzvvIlcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2sg54K55Ye76L2u5pKt5Zu+5pe26Kem5Y+RXG5cdCAqIEBleGFtcGxlIDx1LXN3aXBlciA6bGlzdD1cImxpc3RcIiBtb2RlPVwiZG90XCIgaW5kaWNhdG9yLXBvcz1cImJvdHRvbVJpZ2h0XCI+PC91LXN3aXBlcj5cblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiBcInUtc3dpcGVyXCIsXG5cdFx0cHJvcHM6IHtcblx0XHRcdC8vIOi9ruaSreWbvueahOaVsOaNrizmoLzlvI/lpoLvvJpbe2ltYWdlOiAneHh4eCcsIHRpdGxlOiAneHh4eCd977yMe2ltYWdlOiAneXl5eScsIHRpdGxlOiAneXl5eSd9Xe+8jOWFtuS4rXRpdGxl5a2X5q615Y+v6YCJXG5cdFx0XHRsaXN0OiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyDmmK/lkKbmmL7npLp0aXRsZeagh+mimFxuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHQvLyDnlKjmiLfoh6rlrprkuYnnmoTmjIfnpLrlmajnmoTmoLflvI9cblx0XHRcdGluZGljYXRvcjoge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xuXHRcdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIOWchuinkuWAvFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IDhcblx0XHRcdH0sXG5cdFx0XHQvLyDpmpTlpJrkuYXoh6rliqjliIfmjaJcblx0XHRcdGludGVydmFsOiB7XG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG5cdFx0XHRcdGRlZmF1bHQ6IDMwMDBcblx0XHRcdH0sXG5cdFx0XHQvLyDmjIfnpLrlmajnmoTmqKHlvI/vvIxyZWN0fGRvdHxudW1iZXJ8cm91bmRcblx0XHRcdG1vZGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAncm91bmQnXG5cdFx0XHR9LFxuXHRcdFx0Ly8gbGlzdOeahOmrmOW6pu+8jOWNleS9jXJweFxuXHRcdFx0aGVpZ2h0OiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IDI1MFxuXHRcdFx0fSxcblx0XHRcdC8vIOaMh+ekuuWZqOeahOS9jee9ru+8jHRvcExlZnR8dG9wQ2VudGVyfHRvcFJpZ2h0fGJvdHRvbUxlZnR8Ym90dG9tQ2VudGVyfGJvdHRvbVJpZ2h0XG5cdFx0XHRpbmRpY2F0b3JQb3M6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnYm90dG9tQ2VudGVyJ1xuXHRcdFx0fSxcblx0XHRcdC8vIOaYr+WQpuW8gOWQr+e8qeaUvuaViOaenFxuXHRcdFx0ZWZmZWN0M2Q6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHQvLyAzROaooeW8j+eahOaDheWGteS4i++8jOa/gOa0u2l0ZW3kuI7liY3lkI5pdGVt5LmL6Ze055qE6Led56a777yM5Y2V5L2NcnB4XG5cdFx0XHRlZmZlY3QzZFByZXZpb3VzTWFyZ2luOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IDUwXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5piv5ZCm6Ieq5Yqo5pKt5pS+XG5cdFx0XHRhdXRvcGxheToge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6Ieq5Yqo6L2u5pKt5pe26Ze06Ze06ZqU77yM5Y2V5L2NbXNcblx0XHRcdGR1cmF0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IDUwMFxuXHRcdFx0fSxcblx0XHRcdC8vIOaYr+WQpuihlOaOpea7keWKqO+8jOWNs+WIsOacgOWQjuS4gOW8oOaXtuaOpeedgOa7keWKqO+8jOaYr+WQpuiHquWKqOWIh+aNouWIsOesrOS4gOW8oFxuXHRcdFx0Y2lyY3VsYXI6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8vIOWbvueJh+eahOijgeWJquaooeW8jyBcblx0XHRcdGltZ01vZGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnYXNwZWN0RmlsbCdcblx0XHRcdH0sXG5cdFx0XHQvLyDku45saXN05pWw57uE5Lit6K+75Y+W55qE5Zu+54mH55qE5bGe5oCn5ZCNXG5cdFx0XHRuYW1lOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ2ltYWdlJ1xuXHRcdFx0fSxcblx0XHRcdC8vIOiDjOaZr+minOiJslxuXHRcdFx0YmdDb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcjZjNmNGY2J1xuXHRcdFx0fSxcblx0XHRcdC8vIOWIneWni+WMluaXtu+8jOm7mOiupOaYvuekuuesrOWHoOmhuVxuXHRcdFx0Y3VycmVudDoge1xuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5qCH6aKY55qE5qC35byP77yM5a+56LGh5b2i5byPXG5cdFx0XHR0aXRsZVN0eWxlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0XHRyZXR1cm4ge31cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdC8vIOWmguaenOWklumDqOeahGxpc3Tlj5HnlJ/lj5jljJbvvIzliKTmlq3plb/luqbmmK/lkKbooqvkv67mlLnvvIzlpoLmnpzliY3lkI7plb/luqbkuI3kuIDoh7TvvIzph43nva51Q3VycmVudOWAvO+8jOmBv+WFjea6ouWHulxuXHRcdFx0bGlzdChuVmFsLCBvVmFsKSB7XG5cdFx0XHRcdGlmKG5WYWwubGVuZ3RoICE9PSBvVmFsLmxlbmd0aCkgdGhpcy51Q3VycmVudCA9IDA7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g55uR5ZCs5aSW6YOoY3VycmVudOeahOWPmOWMlu+8jOWunuaXtuS/ruaUueWGhemDqOS+nei1luS6juatpOa1i3VDdXJyZW505YC877yM5aaC5p6c5pu05paw5LqGY3VycmVudO+8jOiAjOS4jeaYr+abtOaWsHVDdXJyZW5077yMXG5cdFx0XHQvLyDlsLHkvJrplJnkubHvvIzlm6DkuLrmjIfnpLrlmajmmK/kvp3otZbkuo51Q3VycmVudOeahFxuXHRcdFx0Y3VycmVudChuKSB7XG5cdFx0XHRcdHRoaXMudUN1cnJlbnQgPSBuO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHVDdXJyZW50OiB0aGlzLmN1cnJlbnQgLy8g5b2T5YmN5rS76LeD55qEc3dpcGVyLWl0ZW3nmoRpbmRleFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRqdXN0aWZ5Q29udGVudCgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5kaWNhdG9yUG9zID09ICd0b3BMZWZ0JyB8fCB0aGlzLmluZGljYXRvclBvcyA9PSAnYm90dG9tTGVmdCcpIHJldHVybiAnZmxleC1zdGFydCc7XG5cdFx0XHRcdGlmICh0aGlzLmluZGljYXRvclBvcyA9PSAndG9wQ2VudGVyJyB8fCB0aGlzLmluZGljYXRvclBvcyA9PSAnYm90dG9tQ2VudGVyJykgcmV0dXJuICdjZW50ZXInO1xuXHRcdFx0XHRpZiAodGhpcy5pbmRpY2F0b3JQb3MgPT0gJ3RvcFJpZ2h0JyB8fCB0aGlzLmluZGljYXRvclBvcyA9PSAnYm90dG9tUmlnaHQnKSByZXR1cm4gJ2ZsZXgtZW5kJztcblx0XHRcdH0sXG5cdFx0XHR0aXRsZVBhZGRpbmdCb3R0b20oKSB7XG5cdFx0XHRcdGxldCB0bXAgPSAwO1xuXHRcdFx0XHRpZiAodGhpcy5tb2RlID09ICdub25lJykgcmV0dXJuICcxMnJweCc7XG5cdFx0XHRcdGlmIChbJ2JvdHRvbUxlZnQnLCAnYm90dG9tQ2VudGVyJywgJ2JvdHRvbVJpZ2h0J10uaW5kZXhPZih0aGlzLmluZGljYXRvclBvcykgPj0gMCAmJiB0aGlzLm1vZGUgPT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR0bXAgPSAnNjBycHgnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFsnYm90dG9tTGVmdCcsICdib3R0b21DZW50ZXInLCAnYm90dG9tUmlnaHQnXS5pbmRleE9mKHRoaXMuaW5kaWNhdG9yUG9zKSA+PSAwICYmIHRoaXMubW9kZSAhPSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHRtcCA9ICc0MHJweCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG1wID0gJzEycnB4Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdG1wO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWboOS4unVuaeeahHN3aXBlcue7hOS7tueahGN1cnJlbnTlj4LmlbDlj6rmjqXlj5dOdW1iZXLnsbvlnovvvIzov5nph4zlgZrkuIDkuKrovazmjaJcblx0XHRcdGVsQ3VycmVudCgpIHtcblx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLmN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0bGlzdENsaWNrKGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywgaW5kZXgpO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZShlKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50ID0gZS5kZXRhaWwuY3VycmVudDtcblx0XHRcdFx0dGhpcy51Q3VycmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdC8vIOWPkeWHumNoYW5nZeS6i+S7tu+8jOihqOekuuW9k+WJjeiHquWKqOWIh+aNoueahGluZGV477yM5LuOMOW8gOWni1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjdXJyZW50KTtcblx0XHRcdH0sXG5cdFx0XHQvLyDlpLTmnaHlsI/nqIvluo/kuI3mlK/mjIFhbmltYXRpb25maW5pc2jkuovku7bvvIzmlLnnlLFjaGFuZ2Xkuovku7Zcblx0XHRcdC8vIOaaguS4jeebkeWQrOatpOS6i+S7tu+8jOWboOS4uuS4jeWGjee7mXN3aXBlcue7keWumnVDdXJyZW505bGe5oCnXG5cdFx0XHRhbmltYXRpb25maW5pc2goZSkge1xuXHRcdFx0XHQvLyAjaWZuZGVmIE1QLVRPVVRJQU9cblx0XHRcdFx0Ly8gdGhpcy51Q3VycmVudCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9zdHlsZS5jb21wb25lbnRzLnNjc3NcIjtcblx0XG5cdC51LXN3aXBlci13cmFwIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblxuXHQudS1zd2lwZXItaW1hZ2Uge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXG5cdC51LXN3aXBlci1pbmRpY2F0b3Ige1xuXHRcdHBhZGRpbmc6IDAgMjRycHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdEBpbmNsdWRlIHZ1ZS1mbGV4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHotaW5kZXg6IDE7XG5cdH1cblxuXHQudS1pbmRpY2F0b3ItaXRlbS1yZWN0IHtcblx0XHR3aWR0aDogMjZycHg7XG5cdFx0aGVpZ2h0OiA4cnB4O1xuXHRcdG1hcmdpbjogMCA2cnB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0fVxuXG5cdC51LWluZGljYXRvci1pdGVtLXJlY3QtYWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdH1cblxuXHQudS1pbmRpY2F0b3ItaXRlbS1kb3Qge1xuXHRcdHdpZHRoOiAxNHJweDtcblx0XHRoZWlnaHQ6IDE0cnB4O1xuXHRcdG1hcmdpbjogMCA2cnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0fVxuXG5cdC51LWluZGljYXRvci1pdGVtLWRvdC1hY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0fVxuXG5cdC51LWluZGljYXRvci1pdGVtLXJvdW5kIHtcblx0XHR3aWR0aDogMTRycHg7XG5cdFx0aGVpZ2h0OiAxNHJweDtcblx0XHRtYXJnaW46IDAgNnJweDtcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdH1cblxuXHQudS1pbmRpY2F0b3ItaXRlbS1yb3VuZC1hY3RpdmUge1xuXHRcdHdpZHRoOiAzNHJweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdH1cblxuXHQudS1pbmRpY2F0b3ItaXRlbS1udW1iZXIge1xuXHRcdHBhZGRpbmc6IDZycHggMTZycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdH1cblxuXHQudS1saXN0LXNjYWxlIHtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuXHR9XG5cblx0LnUtbGlzdC1pbWFnZS13cmFwIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZmxleDogMTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXG5cdC51LXN3aXBlci10aXRsZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdHBhZGRpbmc6IDEycnB4IDI0cnB4O1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG5cdH1cblxuXHQudS1zd2lwZXItaXRlbSB7XG5cdFx0QGluY2x1ZGUgdnVlLWZsZXg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTViMmQ1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LXN3aXBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNWIyZDU4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM5MDE2Mjk0MjY1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(339))
        })
    },
    [['uview-ui/components/u-swiper/u-swiper-create-component']]
]);
