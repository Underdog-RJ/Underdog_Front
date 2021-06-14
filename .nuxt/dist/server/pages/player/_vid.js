exports.ids = [12];
exports.modules = {

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  getCourseList(page, limit, searchObj) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    });
  },

  //查询所有分类的方法
  getAllSubject() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    });
  },

  //课程详情的方法
  getCourseInfo(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    });
  },

  setCollect(courseId, flag) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/ucenter-kecheng/set_collect',
      method: 'get',
      params: {
        courseId: courseId,
        flag: flag
      }
    });
  },

  isCollect(courseId) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/ucenter-kecheng/is_collect',
      method: 'get',
      params: {
        courseId: courseId
      }
    });
  },

  //课程详情的方法
  getCourseInfo(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    });
  }

});

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1587acfc", content, true, context)
};

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_vid_vue_vue_type_style_index_0_id_373f4a0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_vid_vue_vue_type_style_index_0_id_373f4a0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_vid_vue_vue_type_style_index_0_id_373f4a0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_vid_vue_vue_type_style_index_0_id_373f4a0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_vid_vue_vue_type_style_index_0_id_373f4a0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".itemsbg[data-v-373f4a0d]{background-color:#40e0d0;color:#fff!important;border-radius:10px}.items[data-v-373f4a0d],.itemsbg[data-v-373f4a0d]{margin-left:10px}.items[data-v-373f4a0d]{margin-top:5px}.item[data-v-373f4a0d]{color:#eee}.outline[data-v-373f4a0d]{height:775px}.bg[data-v-373f4a0d],.outline[data-v-373f4a0d]{background-color:#35383e}.bg[data-v-373f4a0d]{z-index:9999999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/player/_vid.vue?vue&type=template&id=373f4a0d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"overflow-y":"hidden"}},[_vm._ssrNode("<div class=\"fl col-8\" data-v-373f4a0d><link rel=\"stylesheet\" href=\"https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css\" data-v-373f4a0d> <script charset=\"utf-8\" type=\"text/javascript\" src=\"https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js\" data-v-373f4a0d></script> <div id=\"J_prismPlayer\" class=\"prism-player\" data-v-373f4a0d></div></div> <div class=\"fl col-2 outline\" data-v-373f4a0d><div data-v-373f4a0d><h2 style=\"text-align: center; color:#fff;font-weight:bold\" data-v-373f4a0d>"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.title))+"</h2> <section class=\"mt20\" data-v-373f4a0d><div class=\"lh-menu-wrap\" data-v-373f4a0d><menu id=\"lh-menu\" class=\"lh-menu mt10 mr10\" data-v-373f4a0d><ul data-v-373f4a0d>"+(_vm._ssrList((_vm.chapterVideoList),function(chapter){return ("<li data-v-373f4a0d><a href=\"javascript: void(0)\""+(_vm._ssrAttr("title",chapter.title))+" style=\"color:#fff;font-size:15px\" data-v-373f4a0d><em class=\"lh-menu-i-1 icon18 mr10\" data-v-373f4a0d></em>"+_vm._ssrEscape(_vm._s(chapter.title)+"\n                ")+"</a> <ol class=\"lh-menu-ol\" style=\"display: block\" data-v-373f4a0d>"+(_vm._ssrList((chapter.children),function(video,index){return ("<li"+(_vm._ssrClass(null,_vm.flagIndex==index? 'itemsbg' : 'items'))+" data-v-373f4a0d><a href=\"javascript: void(0)\" data-v-373f4a0d><em class=\"lh-menu-i-2 icon16 mr5\" data-v-373f4a0d> </em> <span class=\"item\" data-v-373f4a0d>"+_vm._ssrEscape("\n                          "+_vm._s(video.title)+"\n                       ")+"</span></a></li>")}))+"</ol></li>")}))+"</ul></menu></div></section></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/player/_vid.vue?vue&type=template&id=373f4a0d&scoped=true&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(10);

// CONCATENATED MODULE: ./api/vod.js

/* harmony default export */ var vod = ({
  getPlayAuth(vid) {
    return Object(request["a" /* default */])({
      url: '/eduvod/video/getPlayAuth/' + vid,
      method: 'get'
    });
  }

});
// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/player/_vid.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _vidvue_type_script_lang_js_ = ({
  layout: "video",

  //应用video布局
  asyncData({
    params,
    error
  }) {
    /* return vod.getPlayAuth(params.vid).then(response => {
      return {
        vid: params.vid,
        playAuth: response.data.data.playAuth
      };
    }); */
    return {
      courseId: params.vid
    };
  },

  data() {
    return {
      chapterVideoList: [],
      vid: "b6556044e3104c1ca22340b05b1ffb66",
      playAuth: "eyJTZWN1cml0eVRva2VuIjoiQ0FJU2h3TjFxNkZ0NUIyeWZTaklyNWYwTGY3MjFPaHA4YlNHVVdMRXNqTUVkYjFKdmJYNWhEejJJSGhKZVhOdkJPMGV0ZjQrbVdCWTdQY1lsck1xRk1BYkdoeWNONUVxdHNVUHExdjVKcExGc3QySjZyOEpqc1UybTZoRCtWbXBzdlhKYXNEVkVmbDJFNVhFTWlJUi8wMGU2TC8rY2lyWXBUWEhWYlNDbFo5Z2FQa09Rd0M4ZGtBb0xkeEtKd3hrMnQxNFVtWFdPYVNDUHdMU2htUEJMVXhtdldnR2wyUnp1NHV5M3ZPZDVoZlpwMXI4eE80YXhlTDBQb1AyVjgxbExacGxlc3FwM0k0U2M3YmFnaFpVNGdscjhxbHg3c3BCNVN5Vmt0eVdHVWhKL3phTElvaXQ3TnBqZmlCMGVvUUFQb3BGcC9YNmp2QWF3UExVbTliWXhncGhCOFIrWGo3RFpZYXV4N0d6ZW9XVE84MCthS3p3TmxuVXo5bUxMZU9WaVE0L1ptOEJQdzQ0RUxoSWFGMElVRUJ6RUc2Q2QvWDRvZ21hT2xmeUZaTG9pdjltamNCSHFIeno1c2VQS2xTMVJMR1U3RDBWSUpkVWJUbHpiME5MaHpPOEwvZGRLVjBSSXdNOVZ1eVBNYXgzYlFGRHI1M3ZzVGJiWHpaYjBtcHR1UG56ZHp0ZlB4elo3Q09WR29BQmFxQzBsRlpWMVNUeGVFakJIdHIxRkI0OFI1dUlGZXJnM3AzRndJRHJJMFFqTFU2MHVsbTNzRHROZ1g2SUFwaHYyVkNaOHVub3lSOHQxSzVTK21RNHN5ZGMwMG8wYmZDeHNtOEpoV1NTVFJ4Z3dKaVQ2Qy9UNVFlSHk2S0FrTFFZV0pKOTNqeGNOOTFlU0h3MTdFZ0ZRaEJYcjIwaDNxTjhlKzhWeGNNV0Zlaz0iLCJBdXRoSW5mbyI6IntcIkNJXCI6XCJiRG9yQWIzcU80cUQ2Nkt6QlVyUnZBMGdXdGU0SjlLOWxrMURLYnFuK25QTUNjNjJvdk50UTY5eFp5dEFOR2t6MjhUenFsd3FHQlhvS0NJS3liUnN2MVVCUWQxaEwzWlVYYVZjZVdQRXBUaz1cIixcIkNhbGxlclwiOlwiNEhCb1V5anZVdWdwY0hROWdlcXpTS0FSNFk4WjZkUDRDcDBlUWlxNGEvWT1cIixcIkV4cGlyZVRpbWVcIjpcIjIwMjEtMDUtMjZUMDQ6MDY6NTZaXCIsXCJNZWRpYUlkXCI6XCJiNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2NlwiLFwiU2lnbmF0dXJlXCI6XCJJR3dXT3FYdWV3dWNyK2N5TFRrQ1N1a1pVWWc9XCJ9IiwiVmlkZW9NZXRhIjp7IlN0YXR1cyI6Ik5vcm1hbCIsIlZpZGVvSWQiOiJiNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2NiIsIlRpdGxlIjoiZ28xIiwiQ292ZXJVUkwiOiJodHRwOi8vb3V0aW4tNjM1ZjYwMzg1ZTBlMTFlYjkxNmUwMDE2M2UwNjEyM2Mub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9iNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2Ni9zbmFwc2hvdHMvZmM1MzM4NmU4NzhlNDgyMDgwZTQ4YzdjYzI4MmVjMWQtMDAwMDEuanBnP0V4cGlyZXM9MTYyMjAwNTUxNiZPU1NBY2Nlc3NLZXlJZD1MVEFJeFNhT2ZFekNuQk9qJlNpZ25hdHVyZT1JdXlMOUFuT3Y1T294V3p2c29RY00zM3VENGslM0QiLCJEdXJhdGlvbiI6Ni40MzR9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVEFmREI5N0hGdm1TRHVWM1F5MmVScFJmIiwiQWNjZXNzS2V5U2VjcmV0IjoiOTd2RVZYc1BmOG01YVlCd1VlMW94ejJOOXdoWEplYXNiOWRNd3NpTWhmUTkiLCJSZWdpb24iOiJjbi1zaGFuZ2hhaSIsIkN1c3RvbWVySWQiOjE3NzY3ODAyMjIwOTAyMDB9",
      player: {},
      courseWebVo: {},
      flagIndex: -1
    };
  },

  created() {
    this.initCourseInfo();
    console.log(this.vid);
  },

  methods: {
    ToLook(id, index) {
      this.flagIndex = index;
      vod.getPlayAuth(id).then(response => {
        this.playAuth = response.data.data.playAuth;
        this.player.replayByVidAndPlayAuth(id, this.playAuth);
      });
    },

    //查询课程详情信息
    async initCourseInfo() {
      const res = await course["a" /* default */].getCourseInfo(this.courseId);
      this.courseWebVo = res.data.data.courseWebVo;
      this.chapterVideoList = res.data.data.chapterVideoList;
    }

  },

  mounted() {
    //页面渲染之后
    console.log(this.vid);
    this.player = new Aliplayer({
      id: "J_prismPlayer",
      vid: this.vid,
      // 视频id
      playauth: this.playAuth,
      // 播放凭证
      encryptType: "1",
      // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
      width: "100%",
      height: "775px",
      videoWidth: "100%",
      videoHeight: "100%",
      // 以下可选设置
      cover: "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg",
      // 封面
      qualitySort: "asc",
      // 清晰度排序
      mediaType: "video",
      // 返回音频还是视频
      autoplay: false,
      // 自动播放
      isLive: false,
      // 直播
      rePlay: false,
      // 循环播放
      preload: true,
      controlBarVisibility: "hover",
      // 控制条的显示方式：鼠标悬停
      useH5Prism: true // 播放器类型：html5

    }, function (player) {
      player.play();
    });
  }

});
// CONCATENATED MODULE: ./pages/player/_vid.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_vidvue_type_script_lang_js_ = (_vidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/player/_vid.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_vidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "373f4a0d",
  "6efb193e"
  
)

/* harmony default export */ var _vid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_vid.js.map