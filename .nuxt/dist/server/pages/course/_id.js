exports.ids = [3];
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = ({
  //1、创建订单
  createOrders(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/eduorder/order/createOrder/' + cid,
      method: 'post'
    });
  },

  //2、根据id获取订单
  getById(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/eduorder/order/getOrderInfo/' + cid,
      method: 'get'
    });
  },

  //生成二维码的方法
  createNaice(orderNo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/eduorder/paylog/createNative/' + orderNo,
      method: 'get'
    });
  },

  //生成订单状态的方法
  queryPayStatus(orderNo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: '/eduorder/paylog/queryPayStatus/' + orderNo,
      method: 'get'
    });
  }

});

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar-boy.b88b103.gif";

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/course/_id.vue?vue&type=template&id=08aff240&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-fa of",attrs:{"id":"aCoursesList"}},[_vm._ssrNode("<section class=\"container\">","</section>",[_vm._ssrNode("<section class=\"path-wrap txtOf hLh30\"><a href=\"#\" title class=\"c-999 fsize14\">首页</a>\n      \\\n      <a href=\"#\" title class=\"c-999 fsize14\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.subjectLevelOne))+"</a>\n      \\\n      <span class=\"c-333 fsize14\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.subjectLevelTwo))+"</span></section> <div><article class=\"c-v-pic-wrap\" style=\"height: 357px;\"><section id=\"videoPlay\" class=\"p-h-video-box\"><img height=\"357px\" width=\"640px\""+(_vm._ssrAttr("src",_vm.courseWebVo.cover))+(_vm._ssrAttr("alt",_vm.courseWebVo.title))+" class=\"dis c-v-pic\"></section></article> <aside class=\"c-attr-wrap\"><section class=\"ml20 mr15\"><h2 class=\"hLh30 txtOf mt15\"><span class=\"c-fff fsize24\" style=\"text-align: center;\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.title))+"</span></h2> <section class=\"c-attr-jg\"><span class=\"c-fff\">价格：</span> <b class=\"c-yellow\" style=\"font-size:24px;\">"+_vm._ssrEscape("￥"+_vm._s(_vm.courseWebVo.price))+"</b></section> <section class=\"c-attr-mt c-attr-undis\"><span class=\"c-fff fsize14\">"+_vm._ssrEscape("主讲： "+_vm._s(_vm.courseWebVo.teacherName)+"   ")+"</span></section> <section class=\"c-attr-mt of\"><span class=\"ml10 vam\"><span>"+((this.flag==0)?("<em class=\"icon18 scIcon\"></em>"):("<em class=\"icon18 sc-end\"></em>"))+"</span> <a title=\"收藏\" href=\"#\" class=\"c-fff vam\">收藏</a></span></section> "+((_vm.isBuy || Number(_vm.courseWebVo.price) === 0)?("<section class=\"c-attr-mt\"><a"+(_vm._ssrAttr("href",'/player/'+_vm.courseId))+" title=\"立即观看\" class=\"comm-btn c-btn-3\">立即观看</a></section>"):("<section class=\"c-attr-mt\"><a href=\"#\" title=\"立即购买\" class=\"comm-btn c-btn-3\">立即购买</a></section>"))+"</section></aside> <aside class=\"thr-attr-box\"><ol class=\"thr-attr-ol\"><li><p> </p> <aside><span class=\"c-fff f-fM\">购买数</span> <br> <h6 class=\"c-fff f-fM mt10\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.buyCount))+"</h6></aside></li> <li><p> </p> <aside><span class=\"c-fff f-fM\">课时数</span> <br> <h6 class=\"c-fff f-fM mt10\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.lessonNum))+"</h6></aside></li> <li><p> </p> <aside><span class=\"c-fff f-fM\">浏览数</span> <br> <h6 class=\"c-fff f-fM mt10\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.viewCount))+"</h6></aside></li></ol></aside> <div class=\"clear\"></div></div> "),_vm._ssrNode("<div class=\"mt20 c-infor-box\">","</div>",[_vm._ssrNode("<article class=\"fl col-7\">","</article>",[_vm._ssrNode("<section class=\"mr30\">","</section>",[_vm._ssrNode("<div class=\"i-box\">","</div>",[_vm._ssrNode("<div><section id=\"c-i-tabTitle\" class=\"c-infor-tabTitle c-tab-title\"><a name=\"c-i\" title=\"课程详情\" class=\"current\">课程详情</a></section></div> "),_vm._ssrNode("<article class=\"ml10 mr10 pt20\">","</article>",[_vm._ssrNode("<div><h6 class=\"c-i-content c-infor-title\"><span>课程介绍</span></h6> <div class=\"course-txt-body-wrap\"><section class=\"course-txt-body\"><p>"+(_vm._s(_vm.courseWebVo.description))+"</p></section></div></div> <div class=\"mt50\"><h6 class=\"c-g-content c-infor-title\"><span>课程大纲</span></h6> <section class=\"mt20\"><div class=\"lh-menu-wrap\"><menu id=\"lh-menu\" class=\"lh-menu mt10 mr10\"><ul>"+(_vm._ssrList((_vm.chapterVideoList),function(chapter){return ("<li class=\"lh-menu-stair\"><a href=\"javascript: void(0)\""+(_vm._ssrAttr("title",chapter.title))+" class=\"current-1\"><em class=\"lh-menu-i-1 icon18 mr10\"></em>"+_vm._ssrEscape(_vm._s(chapter.title)+"\n                          ")+"</a> <ol class=\"lh-menu-ol\" style=\"display: block;\">"+(_vm._ssrList((chapter.children),function(video){return ("<li class=\"lh-menu-second ml30\"><em class=\"lh-menu-i-2 icon16 mr5\"> </em>"+_vm._ssrEscape(_vm._s(video.title)+"\n                              \n                            ")+"</li>")}))+"</ol></li>")}))+"</ul></menu></div></section></div> "),_vm._ssrNode("<div class=\"mt50 commentHtml\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h6 id=\"i-art-comment\" class=\"c-c-content c-infor-title\"><span class=\"commentTitle\">课程评论</span></h6> "),_vm._ssrNode("<section class=\"lh-bj-list pr mt20 replyhtml\">","</section>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"unBr\">","</li>",[_vm._ssrNode("<aside class=\"noter-pic\"><img width=\"50\" height=\"50\""+(_vm._ssrAttr("src",__webpack_require__(151)))+" class=\"picImg\"></aside> "),_vm._ssrNode("<div class=\"of\">","</div>",[_vm._ssrNode("<section class=\"n-reply-wrap\">","</section>",[_vm._ssrNode("<fieldset><textarea name placeholder=\"输入您要评论的文字\" id=\"commentContent\">"+_vm._ssrEscape(_vm._s(_vm.comment.content))+"</textarea></fieldset> "),_vm._ssrNode("<p class=\"of mt5 tar pl10 pr10\">","</p>",[_vm._ssrNode("<span class=\"fl \">","</span>",[_c('tt',{staticClass:"c-red commentContentmeg",staticStyle:{"display":"none"}})],1),_vm._ssrNode(" <input type=\"button\" value=\"回复\" class=\"lh-reply-btn\">")],2)],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<section class=\"question-list lh-bj-list pr\">","</section>",[_vm._ssrNode("<ul class=\"pr10\">","</ul>",_vm._l((_vm.data.items),function(comment,index){return _vm._ssrNode("<li>","</li>",[_vm._ssrNode("<aside class=\"noter-pic\"><img width=\"50\" height=\"50\""+(_vm._ssrAttr("src",comment.avatar))+" class=\"picImg\"></aside> "),_vm._ssrNode("<div class=\"of\">","</div>",[_vm._ssrNode("<span class=\"fl\">","</span>",[_c('font',{staticClass:"fsize12 c-blue"},[_vm._v("\n                                "+_vm._s(comment.nickname))]),_vm._ssrNode(" "),_c('font',{staticClass:"fsize12 c-999 ml5"},[_vm._v("评论：")])],2)]),_vm._ssrNode(" <div class=\"noter-txt mt5\"><p>"+_vm._ssrEscape(_vm._s(comment.content))+"</p></div> "),_vm._ssrNode("<div class=\"of mt5\">","</div>",[_vm._ssrNode("<span class=\"fr\">","</span>",[_c('font',{staticClass:"fsize12 c-999 ml5"},[_vm._v(_vm._s(comment.gmtCreate))])],1)])],2)}),0)])]),_vm._ssrNode(" <div class=\"paging\"><a href=\"#\" title=\"首页\""+(_vm._ssrClass(null,{ undisable: !_vm.data.hasPrevious }))+">首</a> <a href=\"#\" title=\"前一页\""+(_vm._ssrClass(null,{ undisable: !_vm.data.hasPrevious }))+">&lt;</a> "+(_vm._ssrList((_vm.data.pages),function(page){return ("<a"+(_vm._ssrAttr("title",'第' + page + '页'))+" href=\"#\""+(_vm._ssrClass(null,{
                        current: _vm.data.current == page,
                        undisable: _vm.data.current == page
                      }))+">"+_vm._ssrEscape(_vm._s(page))+"</a>")}))+" <a href=\"#\" title=\"后一页\""+(_vm._ssrClass(null,{ undisable: !_vm.data.hasNext }))+">&gt;</a> <a href=\"#\" title=\"末页\""+(_vm._ssrClass(null,{ undisable: !_vm.data.hasNext }))+">末</a> <div class=\"clear\"></div></div>")],2)])],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<aside class=\"fl col-3\">","</aside>",[_vm._ssrNode("<div class=\"i-box\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<section class=\"c-infor-tabTitle c-tab-title\">","</section>",[_c('nuxt-link',{attrs:{"to":'/teacher/'+_vm.courseWebVo.teacherId}},[_c('span',[_vm._v("主讲讲师")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"stud-act-list\">","</section>",[_vm._ssrNode("<ul style=\"height: auto;\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<div class=\"u-face\"><a href=\"#\"><img"+(_vm._ssrAttr("src",_vm.courseWebVo.avatar))+" width=\"50\" height=\"50\" alt></a></div> "),_vm._ssrNode("<section class=\"hLh30 txtOf\">","</section>",[_c('nuxt-link',{attrs:{"to":'/teacher/'+_vm.courseWebVo.teacherId}},[_c('span',[_vm._v("主讲讲师")])])],1),_vm._ssrNode(" <section class=\"hLh20 txtOf\"><span class=\"c-999\">"+_vm._ssrEscape(_vm._s(_vm.courseWebVo.intro))+"</span></section>")],2)])])],2)])]),_vm._ssrNode(" <div class=\"clear\"></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/course/_id.vue?vue&type=template&id=08aff240&

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(131);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(10);

// CONCATENATED MODULE: ./api/commonedu.js

/* harmony default export */ var commonedu = ({
  getPageList(courseId, page, limit) {
    return Object(request["a" /* default */])({
      url: `/eduservice/comment/${courseId}/${page}/${limit}`,
      method: 'get'
    });
  },

  addComment(comment) {
    return Object(request["a" /* default */])({
      url: `/eduservice/comment/auth/save`,
      method: 'post',
      data: comment
    });
  }

});
// EXTERNAL MODULE: ./api/orders.js
var orders = __webpack_require__(144);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/course/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  //和页面异步开始的
  asyncData({
    params,
    error
  }) {
    return {
      courseId: params.id
    };
  },

  data() {
    return {
      data: {},
      page: 1,
      limit: 4,
      total: 10,
      comment: {
        content: "",
        courseId: ""
      },
      userId: "1",
      flag: 0,
      courseInfo: {},
      chapterVideoList: [],
      isBuy: false,
      courseWebVo: {},
      courseId: ""
    };
  },

  created() {
    this.userId = this.$store.state.userInfo.id;
    this.initComment();
    this.initCourseInfo();
    this.isCollect();
  },

  methods: {
    //查询课程详情信息
    initCourseInfo() {
      course["a" /* default */].getCourseInfo(this.courseId).then(response => {
        this.courseWebVo = response.data.data.courseWebVo;
        this.chapterVideoList = response.data.data.chapterVideoList;
        this.isBuy = response.data.data.isBuy;
      });
    },

    //初始化评论
    initComment() {
      commonedu.getPageList(this.$route.params.id, this.page, this.limit).then(response => {
        this.data = response.data.data;
      });
    },

    addComment() {
      this.comment.courseId = this.$route.params.id;
      this.comment.teacherId = this.courseWebVo.teacherId;
      commonedu.addComment(this.comment).then(response => {
        if (response.data.success) {
          this.comment.content = "";
          this.initComment();
        }
      });
    },

    gotoPage(page) {
      commonedu.getPageList(this.$route.params.id, page, this.limit).then(response => {
        this.data = response.data.data;
      });
    },

    setCollect() {
      course["a" /* default */].setCollect(this.$route.params.id, this.flag).then(response => {
        this.isCollect();
      });
    },

    isCollect() {
      course["a" /* default */].isCollect(this.$route.params.id).then(response => {
        this.flag = response.data.data.flag;
      });
    },

    //生成订单
    createOrders() {
      orders["a" /* default */].createOrders(this.courseId).then(response => {
        //返回的订单号
        //生成订单之后。添砖订单显示页面
        this.$router.push({
          path: "/orders/" + response.data.data.orderId
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/course/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var course_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/course/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  course_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52255fb8"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map