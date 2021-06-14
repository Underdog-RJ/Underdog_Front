exports.ids = [24];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  setOwnMobile(mobile, code) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/educenter/member/setMobile/${mobile}/${code}`,
      method: 'get'
    });
  },

  getLoginUserInfo() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    });
  },

  updateUserInfo(ucenterMember) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/updateUser',
      method: 'post',
      data: ucenterMember
    });
  },

  addOwnPage(ucenterMember) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/addOwnPage',
      method: 'post',
      data: ucenterMember
    });
  },

  setMail(mail) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/setOwnMail/' + mail,
      method: 'get'
    });
  },

  validateMail(mail, code) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/educenter/member/valideOwnMail/${mail}/${code}`,
      method: 'get'
    });
  },

  getOwnPage() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/getOwnPage/',
      method: 'get'
    });
  },

  getUserCountInfo() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/getUserCountInfo/',
      method: 'get'
    });
  },

  updateUserPassword(password) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/updateUserPassword/' + password,
      method: 'get'
    });
  },

  resetPassword(RetPasswordVo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/resetPassword/',
      method: 'post',
      data: RetPasswordVo
    });
  }

});

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1449b5de", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("83e68a9e", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  sendCode(phone) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/edumsm/msm/send/' + phone,
      method: 'get'
    });
  },

  registerMember(formItem) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/educenter/member/register/',
      method: 'post',
      data: formItem
    });
  }

});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_editorImage_vue_vue_type_style_index_0_id_7f96a77f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_editorImage_vue_vue_type_style_index_0_id_7f96a77f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_editorImage_vue_vue_type_style_index_0_id_7f96a77f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_editorImage_vue_vue_type_style_index_0_id_7f96a77f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_editorImage_vue_vue_type_style_index_0_id_7f96a77f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor-slide-upload[data-v-7f96a77f]{margin-bottom:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_848fde3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_848fde3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_848fde3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_848fde3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_848fde3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tinymce-container[data-v-848fde3e]{position:relative}.tinymce-container[data-v-848fde3e] .mce-fullscreen{z-index:10000}.tinymce-textarea[data-v-848fde3e]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-848fde3e]{position:absolute;right:4px;top:4px}.fullscreen .editor-custom-btn-container[data-v-848fde3e]{z-index:10000;position:fixed}.editor-upload-btn[data-v-848fde3e]{display:inline-block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Tinymce/index.vue?vue&type=template&id=848fde3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tinymce-container editor-container",class:{fullscreen:_vm.fullscreen}},[_vm._ssrNode("<textarea"+(_vm._ssrAttr("id",_vm.tinymceId))+" class=\"tinymce-textarea\" data-v-848fde3e></textarea> "),_vm._ssrNode("<div class=\"editor-custom-btn-container\" data-v-848fde3e>","</div>",[_c('editorImage',{staticClass:"editor-upload-btn",attrs:{"color":"#1890ff"},on:{"successCBK":_vm.imageSuccessCBK}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tinymce/index.vue?vue&type=template&id=848fde3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Tinymce/components/editorImage.vue?vue&type=template&id=7f96a77f&scoped=true&
var editorImagevue_type_template_id_7f96a77f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-container"},[_c('el-button',{style:({background:_vm.color,borderColor:_vm.color}),attrs:{"icon":"el-icon-upload","size":"mini","type":"primary"},on:{"click":function($event){_vm.dialogVisible=true}}},[_vm._v("上传图片\n  ")]),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-upload',{staticClass:"editor-slide-upload",attrs:{"multiple":true,"file-list":_vm.fileList,"show-file-list":true,"on-remove":_vm.handleRemove,"on-success":_vm.handleSuccess,"before-upload":_vm.beforeUpload,"action":"https://httpbin.org/post","list-type":"picture-card"}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSubmit}},[_vm._v("确 定")])],1)],2)}
var editorImagevue_type_template_id_7f96a77f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Tinymce/components/editorImage.vue?vue&type=template&id=7f96a77f&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Tinymce/components/editorImage.vue?vue&type=script&lang=js&
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
// import { getToken } from 'api/qiniu'
/* harmony default export */ var editorImagevue_type_script_lang_js_ = ({
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff'
    }
  },

  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    };
  },

  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess);
    },

    handleSubmit() {
      const arr = Object.keys(this.listObj).map(v => this.listObj[v]);

      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！');
        return;
      }

      this.$emit('successCBK', arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },

    handleSuccess(response, file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);

      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },

    handleRemove(file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);

      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },

    beforeUpload(file) {
      const _self = this;

      const _URL = window.URL || window.webkitURL;

      const fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = _URL.createObjectURL(file);

        img.onload = function () {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height
          };
        };

        resolve(true);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Tinymce/components/editorImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_editorImagevue_type_script_lang_js_ = (editorImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Tinymce/components/editorImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_editorImagevue_type_script_lang_js_,
  editorImagevue_type_template_id_7f96a77f_scoped_true_render,
  editorImagevue_type_template_id_7f96a77f_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "7f96a77f",
  "61aa6cb8"
  
)

/* harmony default export */ var editorImage = (component.exports);
// CONCATENATED MODULE: ./components/Tinymce/plugins.js
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/
const plugins = ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'];
/* harmony default export */ var Tinymce_plugins = (plugins);
// CONCATENATED MODULE: ./components/Tinymce/toolbar.js
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols
const toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'];
/* harmony default export */ var Tinymce_toolbar = (toolbar);
// EXTERNAL MODULE: ./static/tinymce4.7.5/skins/lightgray/skin.min.css
var skin_min = __webpack_require__(9);

// EXTERNAL MODULE: ./static/tinymce4.7.5/skins/lightgray/content.min.css
var content_min = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Tinymce/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Tinymcevue_type_script_lang_js_ = ({
  name: 'Tinymce',
  components: {
    editorImage: editorImage
  },
  props: {
    id: {
      type: String,
      default: function () {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
      }
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,

      default() {
        return [];
      }

    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
    height: {
      type: Number,
      required: false,
      default: 360
    }
  },

  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN'
      }
    };
  },

  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language];
    }

  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val || ''));
      }
    },

    language() {
      this.destroyTinymce();
      this.$nextTick(() => this.initTinymce());
    }

  },

  mounted() {
    this.initTinymce();
    console.log(11);
  },

  activated() {
    this.initTinymce();
  },

  deactivated() {
    this.destroyTinymce();
  },

  destroyed() {
    this.destroyTinymce();
  },

  methods: {
    initTinymce() {
      const _this = this;

      window.tinymce.init({
        language: this.language,
        selector: `#${this.tinymceId}`,
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : Tinymce_toolbar,
        menubar: this.menubar,
        plugins: Tinymce_plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true,
        // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value);
          }

          _this.hasInit = true;
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true;
            this.$emit('input', editor.getContent());
          });
        },

        setup(editor) {
          editor.on('FullscreenStateChanged', e => {
            _this.fullscreen = e.state;
          });
        } // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        // images_upload_handler(blobInfo, success, failure, progress) {
        //   progress(0);
        //   const token = _this.$store.getters.token;
        //   getToken(token).then(response => {
        //     const url = response.data.qiniu_url;
        //     const formData = new FormData();
        //     formData.append('token', response.data.qiniu_token);
        //     formData.append('key', response.data.qiniu_key);
        //     formData.append('file', blobInfo.blob(), url);
        //     upload(formData).then(() => {
        //       success(url);
        //       progress(100);
        //     })
        //   }).catch(err => {
        //     failure('出现未知问题，刷新页面，或者联系程序员')
        //     console.log(err);
        //   });
        // },


      });
    },

    destroyTinymce() {
      if (window.tinymce.get(this.tinymceId)) {
        window.tinymce.get(this.tinymceId).destroy();
      }
    },

    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },

    getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },

    imageSuccessCBK(arr) {
      const _this = this;

      arr.forEach(v => {
        window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Tinymce/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tinymcevue_type_script_lang_js_ = (Tinymcevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Tinymce/index.vue



function Tinymce_injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Tinymce_component = Object(componentNormalizer["a" /* default */])(
  components_Tinymcevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Tinymce_injectStyles,
  "848fde3e",
  "fdf511f4"
  
)

/* harmony default export */ var Tinymce = __webpack_exports__["a"] = (Tinymce_component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0ef28982", content, true, context)
};

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_shezhi_vue_vue_type_style_index_0_id_562d4642_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_shezhi_vue_vue_type_style_index_0_id_562d4642_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_shezhi_vue_vue_type_style_index_0_id_562d4642_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_shezhi_vue_vue_type_style_index_0_id_562d4642_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_shezhi_vue_vue_type_style_index_0_id_562d4642_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".show_1[data-v-562d4642]{display:flex}.show_1 label[data-v-562d4642]{width:100px}.show_1 div[data-v-562d4642]{flex:1}.item_zh[data-v-562d4642]{display:flex;border-bottom:1px #eee;margin-bottom:30px;justify-content:space-around}.item_1[data-v-562d4642]{width:100px}.item_c[data-v-562d4642]{flex:1}.operation[data-v-562d4642]{margin-left:auto}.title_bolg[data-v-562d4642]{font-size:20px;font-weight:700}.show_left[data-v-562d4642]{margin:10px;display:flex;width:100%;justify-content:space-around;flex-direction:column}.item_bottom[data-v-562d4642]{height:50px;display:flex;justify-content:start}.item_bottom span[data-v-562d4642]{margin-right:10px}.item_center[data-v-562d4642]{flex:50%}.show[data-v-562d4642]{display:flex}.show_item[data-v-562d4642]{background-color:#fff;margin-bottom:10px;border-radius:10px;box-shadow:1px 1px rgba(0,0,0,.2)}.active[data-v-562d4642]{background:#adff2f}.hide[data-v-562d4642]{display:none}.show[data-v-562d4642]{display:block}.img-float[data-v-562d4642]{margin-right:10px;height:150px;width:250px}.img-float img[data-v-562d4642]{border-radius:10px;margin:10px;text-align:center;width:100%}.avatar[data-v-562d4642]{float:left;margin-top:300px!important;z-index:9999}.avatar-uploader img[data-v-562d4642]{width:30%}.item[data-v-562d4642]{margin:30px}.u_blog[data-v-562d4642]{margin-bottom:30px!important;min-height:500px;background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/ucenter/shezhi.vue?vue&type=template&id=562d4642&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container u_blog"},[_c('el-row',[_c('el-col',{attrs:{"span":4}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#fff","text-color":"black","active-text-color":"#00baf2"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("账号安全")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2"}},[_c('i',{staticClass:"el-icon-document"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("修改资料")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"3"}},[_c('i',{staticClass:"el-icon-setting"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("编辑主页")])])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[(_vm.flagdialog === '1')?_c('div',[_c('div',{staticClass:"item"},[_c('ul',{staticClass:"item_zh"},[_c('li',{staticClass:"item_1"},[(_vm.userInfo.mail != ''&&_vm.userInfo.mail!=null)?_c('span',[_c('i',{staticClass:"el-icon-check"})]):_c('span',[_c('i',{staticClass:"el-icon-close"})])]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_vm._v("绑定邮箱")]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_vm._v(_vm._s(_vm.userInfo.mail))]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_c('el-button',{attrs:{"type":"success","size":"mini","round":""},on:{"click":function($event){_vm.EmaildialogVisible = true}}},[_vm._v("更换邮箱")])],1)]),_vm._v(" "),_c('ul',{staticClass:"item_zh"},[_c('li',{staticClass:"item_1"},[(_vm.userInfo.password !== ''&&_vm.userInfo.password!=null)?_c('span',[_c('i',{staticClass:"el-icon-check"})]):_c('span',[_c('i',{staticClass:"el-icon-close"})])]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_vm._v("登录密码")]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userInfo.password),expression:"userInfo.password"}],staticStyle:{"border":"0","outline":"none","background-color":"rgba(0, 0, 0, 0)"},attrs:{"type":"password","disabled":""},domProps:{"value":(_vm.userInfo.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.userInfo, "password", $event.target.value)}}})]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_c('el-button',{attrs:{"type":"success","size":"mini","round":""},on:{"click":function($event){_vm.PassworddialogVisible = true}}},[_vm._v("修改密码")])],1)]),_vm._v(" "),_c('ul',{staticClass:"item_zh"},[_c('li',{staticClass:"item_1"},[(_vm.userInfo.mobile !== '')?_c('span',[_c('i',{staticClass:"el-icon-check"})]):_c('span',[_c('i',{staticClass:"el-icon-close"})])]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_vm._v("绑定手机")]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_vm._v(_vm._s(_vm.userInfo.mobile))]),_vm._v(" "),_c('li',{staticClass:"item_c"},[_c('el-button',{attrs:{"type":"success","size":"mini","round":""},on:{"click":function($event){_vm.mobiledialogVisible = true}}},[_vm._v("修改电话")])],1)])])]):_vm._e(),_vm._v(" "),(_vm.flagdialog === '2')?_c('div',[_c('div',{staticClass:"item"},[_c('div',{staticClass:"show_1"},[_c('label',{attrs:{"for":""}},[_vm._v("用户等级")]),_vm._v(" "),_c('div',[_c('el-progress',{attrs:{"text-inside":true,"stroke-width":26,"percentage":50}})],1)]),_vm._v(" "),_c('div',[_c('el-form',[_c('el-form-item',{attrs:{"label":"用户头像"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload,"action":_vm.BASE_API + '/eduoss/fileoss'}},[_c('img',{attrs:{"src":_vm.userInfo.avatar}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户昵称"}},[_c('el-input',{model:{value:(_vm.userInfo.nickname),callback:function ($$v) {_vm.$set(_vm.userInfo, "nickname", $$v)},expression:"userInfo.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.userInfo.sex),callback:function ($$v) {_vm.$set(_vm.userInfo, "sex", $$v)},expression:"userInfo.sex"}},_vm._l((_vm.userSex),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户地址"}},[_c('el-input',{model:{value:(_vm.userInfo.address),callback:function ($$v) {_vm.$set(_vm.userInfo, "address", $$v)},expression:"userInfo.address"}})],1),_c('el-form-item',{attrs:{"label":"个性签名"}},[_c('el-input',{model:{value:(_vm.userInfo.signature),callback:function ($$v) {_vm.$set(_vm.userInfo, "signature", $$v)},expression:"userInfo.signature"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"年龄"}},[_c('el-input',{model:{value:(_vm.userInfo.age),callback:function ($$v) {_vm.$set(_vm.userInfo, "age", $$v)},expression:"userInfo.age"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.save}},[_vm._v("保存")])],1)],1)],1)])]):_vm._e(),_vm._v(" "),(_vm.flagdialog === '3')?_c('div',[_c('div',{staticClass:"item"},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.zhuye.content),callback:function ($$v) {_vm.$set(_vm.zhuye, "content", $$v)},expression:"zhuye.content"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":_vm.handleSubmitZhuye}},[_vm._v("提交")])],1)]):_vm._e()])],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.EmaildialogVisible,"width":"30%"},on:{"close":_vm.editDialogClosed,"update:visible":function($event){_vm.EmaildialogVisible=$event}}},[_c('el-form',{ref:"editFormRef",attrs:{"model":_vm.editForm,"rules":_vm.editFormRules,"label-width":"70px"}},[_c('el-form-item',{attrs:{"label":"邮箱","prop":"email"}},[_c('el-input',{model:{value:(_vm.editForm.email),callback:function ($$v) {_vm.$set(_vm.editForm, "email", $$v)},expression:"editForm.email"}})],1)],1),_vm._v(" "),_c('div',{staticStyle:{"display":"flex"}},[_c('div',{staticStyle:{"margin-left":"70px","width":"200px"}},[_c('el-input',{attrs:{"type":"text","placeholder":"验证码"},model:{value:(_vm.codeMail),callback:function ($$v) {_vm.codeMail=$$v},expression:"codeMail"}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto"}},[_c('el-button',{attrs:{"type":"primary","size":"medium","value":_vm.codeTest1},on:{"click":function($event){return _vm.getCodeFun1()}}},[_vm._v(_vm._s(_vm.codeTest1))])],1)]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.setMail}},[_vm._v("立即验证")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.mobiledialogVisible,"width":"30%"},on:{"close":_vm.editDialogClosed,"update:visible":function($event){_vm.mobiledialogVisible=$event}}},[_c('el-form',{ref:"editFormRef",attrs:{"model":_vm.mobileForm,"rules":_vm.editFormRules,"label-width":"70px"}},[_c('el-form-item',{attrs:{"label":"手机","prop":"mobile"}},[_c('el-input',{model:{value:(_vm.mobileForm.mobile),callback:function ($$v) {_vm.$set(_vm.mobileForm, "mobile", $$v)},expression:"mobileForm.mobile"}})],1)],1),_vm._v(" "),_c('div',{staticStyle:{"display":"flex"}},[_c('div',{staticStyle:{"margin-left":"70px","width":"200px"}},[_c('el-input',{attrs:{"type":"text","placeholder":"验证码"},model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"auto"}},[_c('el-button',{attrs:{"type":"primary","size":"medium","value":_vm.codeTest},on:{"click":function($event){return _vm.getCodeFun()}}},[_vm._v(_vm._s(_vm.codeTest))])],1)]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.setMobile}},[_vm._v("立即验证")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.PassworddialogVisible,"width":"30%"},on:{"update:visible":function($event){_vm.PassworddialogVisible=$event},"close":_vm.PasswordformRefClosed}},[_c('el-form',{ref:"PasswordformRef",attrs:{"model":_vm.passwordForm,"rules":_vm.passwordFormRules,"label-width":"0px"}},[_c('el-form-item',{attrs:{"prop":"password"}},[_c('el-input',{attrs:{"prefix-icon":"iconfont icon-3702mima","type":"password","placeholder":"请输入您的密码"},model:{value:(_vm.passwordForm.password),callback:function ($$v) {_vm.$set(_vm.passwordForm, "password", $$v)},expression:"passwordForm.password"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.PassworddialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.updatePassword}},[_vm._v("确 定")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ucenter/shezhi.vue?vue&type=template&id=562d4642&scoped=true&

// EXTERNAL MODULE: ./api/ucenter.js
var ucenter = __webpack_require__(130);

// EXTERNAL MODULE: ./components/Tinymce/index.vue + 11 modules
var Tinymce = __webpack_require__(152);

// EXTERNAL MODULE: ./api/register.js
var register = __webpack_require__(146);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/ucenter/shezhi.vue?vue&type=script&lang=js&
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



/* harmony default export */ var shezhivue_type_script_lang_js_ = ({
  watch: {
    flagdialog: function (newVal) {
      if (newVal == "2") {
        this.getUserInfo();
      }
    }
  },
  components: {
    Tinymce: Tinymce["a" /* default */]
  },
  layout: "ucenterLayout",
  name: "",

  data() {
    // 验证邮箱的规则
    var checkmgEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regmgEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

      if (regmgEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }

      cb(new Error("请输入合法的邮箱"));
    }; // 验证手机号的规则


    var checkmgMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      const regmgMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

      if (regmgMobile.test(value)) {
        return cb();
      }

      cb(new Error("请输入合法的手机号"));
    };

    return {
      flagdialog: "1",
      EmaildialogVisible: false,
      editForm: {
        email: ""
      },
      passwordForm: {
        password: ""
      },
      mobiledialogVisible: false,
      PassworddialogVisible: false,
      password: "",
      userInfo: {},
      zhuye: {
        content: "这家伙很懒，什么也没留下"
      },
      tempContent: "这家伙很懒，什么也没留下",
      // 修改表单的验证规则
      editFormRules: {
        //验证的名字需要和表单的名字相同
        email: [{
          required: true,
          message: "请输入邮箱",
          trigger: "blur"
        }, {
          validator: checkmgEmail,
          trigger: "blur"
        }],
        mobile: [{
          required: true,
          message: "请输入你的手机号",
          trigger: "blur"
        }, {
          validator: checkmgMobile,
          trigger: "blur"
        }]
      },
      passwordFormRules: {
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          min: 6,
          max: 15,
          message: '长度在 6 到 15 个字符',
          trigger: 'blur'
        }]
      },
      userSex: [{
        value: 1,
        label: "男"
      }, {
        value: 2,
        label: "女"
      }],
      BASE_API: "http://localhost:8222",
      // 接口API地址
      mobileForm: {
        mobile: ""
      },
      code: "",
      sending: true,
      //是否发送验证码
      second: 60,
      //倒计时间
      codeTest: "获取验证码",
      sending1: true,
      //是否发送验证码
      second1: 60,
      //倒计时间
      codeTest1: "获取验证码",
      codeMail: ""
    };
  },

  methods: {
    //更改用户密码
    updatePassword() {
      this.$refs.PasswordformRef.validate(async valid => {
        if (!valid) return;
        const res = await ucenter["a" /* default */].updateUserPassword(this.passwordForm.password);

        if (res.data.code == 20000) {
          this.userInfo = res.data.data.ucenterMember;
          this.$message.success("更新成功");
          this.PassworddialogVisible = false;
        } else {
          this.$message.error("更新失败");
          this.PassworddialogVisible = false;
        }
      });
    },

    PasswordformRefClosed() {
      this.$refs.PasswordformRef.resetFields();
    },

    //通过输入手机号发送验证码
    getCodeFun() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return;

        if (this.userInfo.mobile == this.mobileForm.mobile) {
          this.$message.error("手机号未修改");
          this.mobiledialogVisible = false;
          return;
        }

        register["a" /* default */].sendCode(this.mobileForm.mobile).then(response => {
          this.sending = false; //调用倒计时的方法

          this.timeDown();
        });
      });
    },

    timeDown() {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second;

        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          this.second = 60;
          this.codeTest = "获取验证码";
        }
      }, 1000);
    },

    timeDown1() {
      let result = setInterval(() => {
        --this.second1;
        this.codeTest1 = this.second1;

        if (this.second1 < 1) {
          clearInterval(result);
          this.sending1 = true;
          this.second1 = 60;
          this.codeTest1 = "获取验证码";
        }
      }, 1000);
    },

    //设置手机号
    async setMobile() {
      const res = await ucenter["a" /* default */].setOwnMobile(this.mobileForm.mobile, this.code);

      if (res.data.code == 20000) {
        this.$message.success(res.data.message);
        this.userInfo.mobile = this.mobileForm.mobile;
        this.code = "";
      } else {
        this.$message.error(res.data.message);
      }

      this.mobiledialogVisible = false;
    },

    // 监听修改用户对话框的关闭事件
    editDialogClosed() {
      console.log(this.$refs.editFormRef);
      this.$refs.editFormRef.resetFields();
    },

    async getOwnPage() {
      const res = await ucenter["a" /* default */].getOwnPage();

      if (res.data.data.ucenterMemberZhuye != null && res.data.data.ucenterMemberZhuye != "") {
        this.zhuye = res.data.data.ucenterMemberZhuye;
      }
    },

    async getCodeFun1() {
      if (this.userInfo.mail == this.editForm.email) {
        this.$message.error("邮箱没有更改");
        this.EmaildialogVisible = false;
        return;
      }

      const res = await ucenter["a" /* default */].setMail(this.editForm.email);

      if (res.data.code === 20000) {
        this.$message.success(res.data.message);
        this.sending1 = false; //调用倒计时的方法

        this.timeDown();
      } else {
        this.$message.error(res.data.message);
      }
    },

    async setMail() {
      const res = await ucenter["a" /* default */].validateMail(this.editForm.email, this.codeMail);

      if (res.data.code == 20000) {
        this.$message.success(res.data.message);
        this.userInfo.mail = this.editForm.email;
        this.codeMail = "";
      } else {
        this.$message.error(res.data.message);
      }

      this.EmaildialogVisible = false;
    },

    async handleSubmitZhuye() {
      //this.ucenterMemberZhuye.content=this.tempContent
      const res = await ucenter["a" /* default */].addOwnPage(this.zhuye);

      if (res.data.code === 20000) {
        this.$router.push("/ucenter/index_ucenter");
        this.zhuye.content = "";
      }
    },

    getUserInfo() {
      this.userInfo = this.$store.state.userInfo;
      console.log(this.userInfo);
    },

    handleSelect(index) {
      this.flagdialog = index;
    },

    // 上传封面成功调用的方法
    handleAvatarSuccess(res, file) {
      this.userInfo.avatar = res.data.url;
    },

    // 上传之前调用的方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      return isJPG && isLt2M;
    },

    async save() {
      const res = await ucenter["a" /* default */].updateUserInfo(this.userInfo);

      if (res.data.code === 20000) {
        console.log(this.userInfo);
        this.$store.commit("initUserInfo", this.userInfo);
        this.flagdialog = "1";
        this.userInfo = {};
      }
    }

  },

  mounted() {
    this.getOwnPage();
  },

  created() {
    this.userInfo = this.$store.state.userInfo;
  }

});
// CONCATENATED MODULE: ./pages/ucenter/shezhi.vue?vue&type=script&lang=js&
 /* harmony default export */ var ucenter_shezhivue_type_script_lang_js_ = (shezhivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/ucenter/shezhi.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(187)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ucenter_shezhivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "562d4642",
  "3dbc6b1c"
  
)

/* harmony default export */ var shezhi = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shezhi.js.map