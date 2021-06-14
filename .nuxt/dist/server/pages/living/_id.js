exports.ids = [6];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  getTeacherList(page, limit) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    });
  },

  getTeacherInfo(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
      method: 'get'
    });
  }

});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAllLiving() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/live/aliyunLive/getAllLiving',
      method: 'get'
    });
  },

  getLivingById(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/live/aliyunLive/getLiveById/' + id,
      method: 'get'
    });
  }

});

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("33635750", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ed835c84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ed835c84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ed835c84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ed835c84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ed835c84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".chat[data-v-ed835c84]{overflow-y:scroll;background-color:#eee;height:680px;max-height:680px}.sendLine[data-v-ed835c84]{display:flex;width:100%}.sendBox[data-v-ed835c84]{position:absolute;bottom:0}.rightBox[data-v-ed835c84]{background-color:#fff}.contentLiving[data-v-ed835c84],.rightBox[data-v-ed835c84]{max-height:700px}.living[data-v-ed835c84],.livingInfo[data-v-ed835c84]{display:flex}.livingInfo[data-v-ed835c84]{margin-left:10px;flex-direction:column;justify-content:space-around}.itemsbg[data-v-ed835c84]{background-color:#40e0d0;color:#fff!important;border-radius:10px}.items[data-v-ed835c84],.itemsbg[data-v-ed835c84]{margin-left:10px}.items[data-v-ed835c84]{margin-top:5px}.item[data-v-ed835c84]{color:#eee}.outline[data-v-ed835c84]{height:775px}.bg[data-v-ed835c84],.outline[data-v-ed835c84]{background-color:#35383e}.bg[data-v-ed835c84]{z-index:9999999}.msgs[data-v-ed835c84]{height:87.5vh;padding:10upx;background-color:#eee;width:97%}.oneMsg[data-v-ed835c84]{line-height:2em}.other_user[data-v-ed835c84],.self-user[data-v-ed835c84]{color:#000}.field[data-v-ed835c84]{display:flex;flex-direction:row;align-items:center;margin:10upx}.field>.label[data-v-ed835c84]{width:4em;text-align:right}.textLine[data-v-ed835c84]{width:100%;display:flex;align-items:center;margin-bottom:10upx;margin-top:5px}.textTypeOwn[data-v-ed835c84]{background-color:#4cd964;color:#000}.textType[data-v-ed835c84],.textTypeOwn[data-v-ed835c84]{max-width:400upx;border-radius:10upx;box-shadow:3upx 3upx 3upx #e3e3e3;display:flex;align-items:center;justify-content:center;padding:10upx;flex-wrap:wrap}.textType[data-v-ed835c84]{background-color:#eee}.textType>view[data-v-ed835c84]{width:100%;font-size:28upx;color:#000;word-wrap:break-word;word-break:break-all;white-space:pre-line}.toLine[data-v-ed835c84]{color:#606266}.toLine>text[data-v-ed835c84]{background-color:#c0c4cc;margin:10upx}.scrollView[data-v-ed835c84]{width:750rpx}.inputStyle[data-v-ed835c84]{flex:80%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/living/_id.vue?vue&type=template&id=ed835c84&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{}},[_vm._ssrNode("<div class=\"fl col-8\" data-v-ed835c84>","</div>",[_vm._ssrNode("<link rel=\"stylesheet\" href=\"https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css\" data-v-ed835c84> <script charset=\"utf-8\" type=\"text/javascript\" src=\"https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js\" data-v-ed835c84></script> "),_vm._ssrNode("<div class=\"living\" data-v-ed835c84>","</div>",[_c('el-avatar',{attrs:{"src":_vm.teacherInfo.avatar,"shape":"square","size":120}}),_vm._ssrNode(" <div class=\"livingInfo\" data-v-ed835c84><div style=\"font-size:20px;font-weight:bold\" data-v-ed835c84>"+_vm._ssrEscape("\n          "+_vm._s(_vm.livingInfo.livingName)+"\n        ")+"</div> <div data-v-ed835c84>"+_vm._ssrEscape(_vm._s(_vm.livingInfo.descption))+"</div> <div data-v-ed835c84>"+_vm._ssrEscape("讲师名:"+_vm._s(_vm.livingInfo.teacherName))+"</div></div> <div data-v-ed835c84>"+_vm._ssrEscape("当前在线人数:"+_vm._s(_vm.livingCount))+"</div>")],2),_vm._ssrNode(" <div id=\"J_prismPlayer\" class=\"prism-player\" data-v-ed835c84></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"fl col-2 rightBox\" data-v-ed835c84>","</div>",[_vm._ssrNode("<div id=\"msg\" class=\"chat\" data-v-ed835c84>","</div>",_vm._l((_vm.messageList),function(item,index){return _vm._ssrNode("<div class=\"oneMsg\" data-v-ed835c84>","</div>",[(item.type == 1)?_vm._ssrNode("<div class=\"textLine textUser\" style=\"flex-direction:row-reverse;\" data-v-ed835c84>","</div>",[_c('el-avatar',{staticStyle:{"margin-left":"5px"},attrs:{"src":item.avatar,"shape":"square","size":27}}),_vm._ssrNode(" <text style=\"margin: 0 10upx;\" data-v-ed835c84>:</text> <div class=\"textTypeOwn\" data-v-ed835c84><div class=\"other_user\" data-v-ed835c84>"+_vm._ssrEscape(_vm._s(item.msg))+"</div></div>")],2):_vm._e(),_vm._ssrNode(" "),(item.type == 2)?_vm._ssrNode("<div class=\"textLine textFriend\" data-v-ed835c84>","</div>",[_c('el-avatar',{staticStyle:{"margin-right":"5px"},attrs:{"src":item.avatar,"shape":"square","size":27}}),_vm._ssrNode(" <text style=\"margin: 0 .5em;\" data-v-ed835c84>:</text> <div class=\"textType\" data-v-ed835c84><div class=\"self-user\" data-v-ed835c84>"+_vm._ssrEscape(_vm._s(item.msg))+"</div></div>")],2):_vm._e()],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sendBox\" data-v-ed835c84>","</div>",[_vm._ssrNode("<div class=\"sendLine\" data-v-ed835c84>","</div>",[_c('el-input',{staticStyle:{"width":"230px"},model:{value:(_vm.messageValue),callback:function ($$v) {_vm.messageValue=$$v},expression:"messageValue"}}),_vm._ssrNode(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.sendDanmu}},[_vm._v("发送")])],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/living/_id.vue?vue&type=template&id=ed835c84&scoped=true&

// EXTERNAL MODULE: ./api/living.js
var living = __webpack_require__(145);

// EXTERNAL MODULE: ./api/teacher.js
var teacher = __webpack_require__(141);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(1);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/living/_id.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "video",

  //应用video布局
  asyncData({
    params,
    error
  }) {
    return living["a" /* default */].getLivingById(params.id).then(response => {
      return {
        livingInfo: response.data.data.livingInfo,
        teacherId: params.id
      };
    });
  },

  data() {
    return {
      player: {},
      flagIndex: -1,
      path: "ws://127.0.0.1:11000/living",
      teacherInfo: {},
      message: {},
      userInfo: {},
      messageValue: "",
      messageList: [],
      livingCount: 0
    };
  },

  created() {
    console.log(this.livingInfo);
  },

  methods: {
    //初始化websocket
    init: function () {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        var socket = new WebSocket(this.path);
        this.socket = socket;

        socket.onopen = res => {
          console.log("连接建立成功");
          this.message.type = 0;
          this.message.userId = this.userInfo.id;
          this.message.livingId = this.livingInfo.id;
          socket.send(JSON.stringify(this.message));
        };
      }
    },

    //获取讲师信息
    async getTeacherInfo() {
      const res = await teacher["a" /* default */].getTeacherInfo(this.teacherId);

      if (res.data.code === 20000) {
        console.log(res.data.data.teacher);
        this.teacherInfo = res.data.data.teacher;
        console.log(this.teacherInfo);
      }
    },

    sendDanmu() {
      //从cookie获取用户信息
      var userStr = external_js_cookie_default.a.get("underdogedu_ucenter");

      if (userStr == null || userStr == undefined || userStr == "") {
        this.$router.push("/login");
      } else {
        this.userInfo = JSON.parse(userStr);
        this.message.type = 1;
        this.message.userId = this.userInfo.id;
        this.message.livingId = this.livingInfo.id;
        this.message.message = this.messageValue;
        this.message.userAvatar = this.userInfo.avatar;
        this.socket.send(JSON.stringify(this.message));
        let messageVo = {
          type: 1,
          msg: this.messageValue,
          avatar: this.userInfo.avatar
        };
        this.messageList.push(messageVo);
        this.messageValue = "";
      }
    }

  },

  mounted() {
    this.getTeacherInfo();
    this.init(); //页面渲染之后

    this.player = new Aliplayer({
      id: "J_prismPlayer",
      width: "100%",
      height: "630px",
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
      isLive: true,
      // 直播
      rePlay: false,
      // 循环播放
      preload: true,
      controlBarVisibility: "hover",
      // 控制条的显示方式：鼠标悬停
      useH5Prism: false,
      // 播放器类型：html5
      useFlashPrism: true,
      //指定使用Flash播放器
      rtmpBufferTime: 0,
      showBuffer: 0,
      stashInitialSizeForFlv: 30,
      //H5播放flv时，初始缓存大小，只在直播下起作用。
      source: this.livingInfo.pullUrl //rtmp格式的地址

    }, function (player) {
      player.play();
    });

    this.socket.onmessage = res => {
      console.log("收到服务器内容：" + res.data); //从cookie获取用户信息

      var userStr = external_js_cookie_default.a.get("underdogedu_ucenter");

      if (JSON.parse(res.data).userId != this.userInfo.id && userStr != null && userStr != undefined && userStr != "") {
        let messageVo = {
          type: 2,
          msg: JSON.parse(res.data).message,
          avatar: JSON.parse(res.data).userAvatar
        };
        this.messageList.push(messageVo);
        this.livingCount = JSON.parse(res.data).count;
      } else {
        this.livingCount = JSON.parse(res.data).count;
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/living/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var living_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/living/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  living_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ed835c84",
  "4abf5774"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map