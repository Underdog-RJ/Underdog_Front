exports.ids = [19];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("be7977fe", content, true, context)
};

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_guanzhu_vue_vue_type_style_index_0_id_d6c7eb56_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_guanzhu_vue_vue_type_style_index_0_id_d6c7eb56_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_guanzhu_vue_vue_type_style_index_0_id_d6c7eb56_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_guanzhu_vue_vue_type_style_index_0_id_d6c7eb56_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_guanzhu_vue_vue_type_style_index_0_id_d6c7eb56_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".msgScroll[data-v-d6c7eb56]::-webkit-scrollbar{width:5px;height:10px;background-color:#b5b1b1}.item[data-v-d6c7eb56]{background-color:#eee;margin:10px;border-radius:10px;align-items:center}.item[data-v-d6c7eb56],.show[data-v-d6c7eb56]{display:flex}.show[data-v-d6c7eb56]{margin-left:10px;flex:70%;flex-direction:column;justify-content:space-around}.operation[data-v-d6c7eb56]{width:100px;display:flex;justify-content:flex-end;align-items:center}.inputSearch[data-v-d6c7eb56]{margin:0 30px;flex:70%}.sousuo[data-v-d6c7eb56]{background-color:#eee;margin:10px;display:flex;align-items:center;height:70px}.u_guanzhu[data-v-d6c7eb56]{margin-bottom:30px!important;padding:10px;min-height:500px;background-color:#fff}.msgs[data-v-d6c7eb56]{height:87.5vh;padding:10upx;background-color:#eee;width:97%}.oneMsg[data-v-d6c7eb56]{line-height:2em}.other_user[data-v-d6c7eb56],.self-user[data-v-d6c7eb56]{color:#000}.field[data-v-d6c7eb56]{display:flex;flex-direction:row;align-items:center;margin:10upx}.field>.label[data-v-d6c7eb56]{width:4em;text-align:right}.textLine[data-v-d6c7eb56]{width:100%;display:flex;align-items:center;margin-bottom:10upx;margin-top:5px}.textTypeOwn[data-v-d6c7eb56]{background-color:#4cd964;color:#000}.textType[data-v-d6c7eb56],.textTypeOwn[data-v-d6c7eb56]{max-width:400upx;border-radius:10upx;box-shadow:3upx 3upx 3upx #e3e3e3;display:flex;align-items:center;justify-content:center;padding:10upx;flex-wrap:wrap}.textType[data-v-d6c7eb56]{background-color:#eee}.textType>view[data-v-d6c7eb56]{width:100%;font-size:28upx;color:#000;word-wrap:break-word;word-break:break-all;white-space:pre-line}.toLine[data-v-d6c7eb56]{color:#606266}.toLine>text[data-v-d6c7eb56]{background-color:#c0c4cc;margin:10upx}.scrollView[data-v-d6c7eb56]{width:750rpx}.inputStyle[data-v-d6c7eb56]{flex:80%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/ucenter/guanzhu.vue?vue&type=template&id=d6c7eb56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container u_guanzhu"},[_c('el-row',[_c('el-col',{attrs:{"span":4}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#fff","text-color":"black","active-text-color":"#00baf2"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("添加好友")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2"}},[_c('i',{staticClass:"el-icon-document"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("新的朋友")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"3"}},[_c('i',{staticClass:"el-icon-setting"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("我的关注")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"5"}},[_c('i',{staticClass:"el-icon-message"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("您的消息\n            "),_c('span',[_vm._v(_vm._s(_vm.unReadMessageCount))])])])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[(_vm.flagdialog === '1')?_c('div',[_c('div',{staticClass:"sousuo"},[_c('div',{staticClass:"inputSearch"},[_c('el-input',{attrs:{"placeholder":"请输入姓名"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_vm._v(" "),_c('div',{staticStyle:{"float":"left"}},[_c('el-button',{attrs:{"type":"primary","size":"small","round":""},on:{"click":_vm.search}},[_vm._v("全站搜索")])],1)]),_vm._v(" "),_c('div',_vm._l((_vm.userList),function(item){return _c('div',{key:item.id,staticClass:"item"},[_c('div',{staticClass:"avatar"},[_c('el-avatar',{attrs:{"src":item.avatar}})],1),_vm._v(" "),_c('div',{staticClass:"show"},[_c('div',[_vm._v(_vm._s(item.nickname))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.signature || "TA很懒，什么都没有留下...."))])]),_vm._v(" "),_c('div',{staticClass:"operation"},[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){return _vm.GoPage(item.id)}}},[_vm._v("进入Ta的主页")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.handleGuanzhu(item.id)}}},[_vm._v("关注")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){return _vm.handleLahei(item.id)}}},[_vm._v("拉黑")])],1)])}),0)]):_vm._e(),_vm._v(" "),(_vm.flagdialog === '2')?_c('div',_vm._l((_vm.newsList),function(item){return _c('div',{key:item.id,staticClass:"item"},[_c('div',{staticClass:"avatar"},[_c('el-avatar',{attrs:{"src":item.avatar}})],1),_vm._v(" "),_c('div',{staticClass:"show"},[_c('div',[_vm._v(_vm._s(item.nickname))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.signature || "TA很懒，什么都没有留下...."))])]),_vm._v(" "),_c('div',{staticClass:"operation"},[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){return _vm.GoPage(item.id)}}},[_vm._v("进入Ta的主页")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.handleAgree(item.reqId)}}},[_vm._v("同意")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){return _vm.handleReject(item.reqId)}}},[_vm._v("拒绝")])],1)])}),0):_vm._e(),_vm._v(" "),(_vm.flagdialog === '3')?_c('div',_vm._l((_vm.friendList),function(item){return _c('div',{key:item.id,staticClass:"item",on:{"click":function($event){return _vm.toChat(item.id, item.avatar)}}},[_c('div',{staticClass:"avatar"},[_c('el-avatar',{attrs:{"src":item.avatar}})],1),_vm._v(" "),_c('div',{staticClass:"show"},[_c('div',[_vm._v(_vm._s(item.nickname))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.signature || "TA很懒，什么都没有留下...."))])]),_vm._v(" "),_c('div',{staticClass:"operation"},[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){return _vm.GoPage(item.id)}}},[_vm._v("进入Ta的主页")])],1)])}),0):_vm._e(),_vm._v(" "),(_vm.flagdialog === '4')?_c('div',[_c('div',{staticClass:"msgScroll",attrs:{"id":"msg"}},_vm._l((_vm.messageList),function(item,index){return _c('div',{key:index,staticClass:"oneMsg"},[(item.type == 1)?_c('div',{staticClass:"textLine textUser",staticStyle:{"flex-direction":"row-reverse"}},[_c('el-avatar',{staticStyle:{"margin-left":"5px"},attrs:{"src":_vm.userAvatar,"shape":"square","size":27}}),_vm._v(" "),_c('text',{staticStyle:{"margin":"0 10upx"}},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"textTypeOwn"},[_c('div',{staticClass:"other_user"},[_vm._v(_vm._s(item.msg))])])],1):_vm._e(),_vm._v(" "),(item.type == 2)?_c('div',{staticClass:"textLine textFriend"},[_c('el-avatar',{staticStyle:{"margin-right":"5px"},attrs:{"src":_vm.friendAvatar,"shape":"square","size":27}}),_vm._v(" "),_c('text',{staticStyle:{"margin":"0 .5em"}},[_vm._v(":")]),_vm._v(" "),_c('div',{staticClass:"textType"},[_c('div',{staticClass:"self-user"},[_vm._v(_vm._s(item.msg))])])],1):_vm._e()])}),0),_vm._v(" "),_c('div',{staticClass:"sousuo"},[_c('div',{staticClass:"inputSearch"},[_c('el-input',{attrs:{"placeholder":"消息"},model:{value:(_vm.messageValue),callback:function ($$v) {_vm.messageValue=$$v},expression:"messageValue"}})],1),_vm._v(" "),_c('div',{staticStyle:{"float":"left"}},[_c('el-button',{attrs:{"type":"primary","size":"small","round":""},on:{"click":_vm.sendMsg}},[_vm._v("发送")])],1)])]):_vm._e(),_vm._v(" "),(_vm.flagdialog === '5')?_c('div',_vm._l((_vm.UnUseList),function(item){return _c('div',{key:item.id,staticClass:"item",on:{"click":function($event){return _vm.toChat(item.id, item.avatar)}}},[_c('div',{staticClass:"avatar"},[_c('el-avatar',{attrs:{"src":item.avatar}})],1),_vm._v(" "),_c('div',{staticClass:"show"},[_c('div',[_vm._v(_vm._s(item.nickname))])]),_vm._v(" "),_c('div',{staticClass:"operation"},[_c('span',{staticStyle:{"color":"teal","font-size":"15px","margin-right":"5px"}},[_vm._v("消息数量："+_vm._s(item.count))])])])}),0):_vm._e()])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ucenter/guanzhu.vue?vue&type=template&id=d6c7eb56&scoped=true&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(10);

// CONCATENATED MODULE: ./api/ucenterguanzhu.js

/* harmony default export */ var ucenterguanzhu = ({
  //通过用户名搜索
  getUserByName(name) {
    return Object(request["a" /* default */])({
      url: `/educenter/member/getUserByName/${name}`,
      method: 'get'
    });
  },

  //根据用户名添加用户
  addFriend(id) {
    return Object(request["a" /* default */])({
      url: `/educenter/member/addFriend/${id}`,
      method: 'get'
    });
  },

  //获取新添加的用户
  findFriendReqByUserid() {
    return Object(request["a" /* default */])({
      url: `/educenter/member/findFriendReqByUserid`,
      method: 'get'
    });
  },

  //同意添加好友请求
  acceptFriendReq(id) {
    return Object(request["a" /* default */])({
      url: `/educenter/member/acceptFriendReq/${id}`,
      method: 'get'
    });
  },

  //获取全部用户
  getAllFriendByUserId() {
    return Object(request["a" /* default */])({
      url: `/educenter/member/getAllFriendByUserId`,
      method: 'get'
    });
  },

  //获取全部聊天记录
  getAllMessage(userId, friendId) {
    return Object(request["a" /* default */])({
      url: `/chat/chatRecord/findByUserIdAndFriendId/${userId}/${friendId}`,
      method: 'get'
    });
  },

  //获取全部用户的未读消息
  getRecordByUserId(userId) {
    return Object(request["a" /* default */])({
      url: `/chat/chatRecord/getRecordByUserId/${userId}`,
      method: 'get'
    });
  },

  //根据根据ids获取用户信息
  getUserInfoByIds(ids) {
    return Object(request["a" /* default */])({
      url: `/educenter/member/getUserInfoByIds`,
      method: 'post',
      data: ids
    });
  }

});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/ucenter/guanzhu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var guanzhuvue_type_script_lang_js_ = ({
  layout: "ucenterLayout",
  name: "",

  data() {
    return {
      messageValue: "",
      userId: "",
      friendId: "",
      type: 0,
      flagdialog: "1",
      name: "",
      userList: [],
      userInfo: {},
      newsList: [],
      friendList: [],
      messageList: [],
      userAvatar: "",
      friendAvatar: "",
      path: "ws://127.0.0.1:110001/ws",
      socket: {},
      message: {
        type: 0,
        tbChatRecord: {
          id: "",
          userId: "",
          friendId: "",
          msg: ""
        },
        ext: ""
      },
      unReadMessageList: [],
      UnUseList: []
    };
  },

  mounted() {
    this.init();
    this.getUnReadMessageList();

    this.socket.onmessage = res => {
      console.log("收到服务器内容：" + res.data);
      let messageVo = {
        type: 2,
        msg: JSON.parse(res.data).tbChatRecord.message
      };
      this.messageList.push(messageVo);
      let Temp = "";
      let flag = false;
      Temp = JSON.parse(res.data).tbChatRecord.userId;

      for (let i = 0; i < this.unReadMessageList.length; i++) {
        if (Temp == this.unReadMessageList[i].name) {
          this.unReadMessageList[i].count = this.unReadMessageList[i].count + 1;
          flag = true;
          break;
        }
      }

      if (flag == false) {
        let tempMessage = {};
        tempMessage.name = Temp;
        tempMessage.count = 1;
        this.unReadMessageList.push(tempMessage);
      }
    };
  },

  methods: {
    GoPage(id) {
      this.$router.push('/other/' + id);
    },

    //全部的未读消息
    async getUnReadMessageList() {
      console.log("safsafasas" + this.userId);
      const res = await ucenterguanzhu.getRecordByUserId(this.userId);
      this.unReadMessageList = res.data.data.list;
      console.log("未读消息" + this.unReadMessageList);
    },

    async search() {
      const res = await ucenterguanzhu.getUserByName(this.name);
      this.userList = res.data.data.list;
    },

    async handleGuanzhu(id) {
      const res = await ucenterguanzhu.addFriend(id);
      this.$message.success(res.data.message);
    },

    handleSelect(index) {
      this.flagdialog = index;

      if (index === "5") {
        this.getUserInfoByIds();
      }
    },

    async findFriendReqByUserid() {
      const res = await ucenterguanzhu.findFriendReqByUserid();
      this.newsList = res.data.data.list;
    },

    async handleAgree(id) {
      const res = await ucenterguanzhu.acceptFriendReq(id);
      console.log(res);

      if (res.data.code === 20000) {
        this.$message.success(res.data.message);
        this.flagdialog = "3";
      } else {
        this.$message.error();
        res.data.message;
      }
    },

    handleReject() {},

    async getAllFriendByUserId() {
      const res = await ucenterguanzhu.getAllFriendByUserId();
      console.log(res);
      this.friendList = res.data.data.list;
      console.log(this.friendList);
    },

    toChat(friendId, friendAvatar) {
      this.friendId = friendId;
      const i = this.unReadMessageList.findIndex(x => x.name == friendId);
      this.unReadMessageList.splice(i);
      this.flagdialog = "4";
      this.friendAvatar = friendAvatar;
      this.getAllMessage(this.userId, friendId); // var areaMsgList = document.getElementById("msg");
      // 		// 设置聊天记录自动滚动到最后一条
      // 		areaMsgList.scrollTop = areaMsgList.scrollHeight + areaMsgList.offsetHeight;
    },

    init: function () {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        var socket = new WebSocket(this.path);
        console.log("saas" + socket);
        this.socket = socket;

        socket.onopen = res => {
          console.log("连接建立成功");
          this.message.type = 0;
          this.message.tbChatRecord.userId = this.userId;
          socket.send(JSON.stringify(this.message));
        };
      }
    },

    //获取全部聊天记录
    async getAllMessage(userId, friendId) {
      const res = await ucenterguanzhu.getAllMessage(userId, friendId);
      this.messageList = res.data.data.list;
      console.log(this.messageList);
    },

    sendMsg() {
      this.message.type = 1;
      this.message.tbChatRecord.userId = this.userId;
      this.message.tbChatRecord.friendId = this.friendId;
      this.message.tbChatRecord.message = this.messageValue;
      let messageVo = {
        type: 1,
        msg: this.messageValue
      };
      this.messageList.push(messageVo);
      console.log(this.messageList);
      this.messageValue = "";
      this.socket.send(JSON.stringify(this.message));
    },

    async getUserInfoByIds() {
      const res = await ucenterguanzhu.getUserInfoByIds(this.unReadMessageList);
      this.UnUseList = res.data.data.list;
    }

  },
  computed: {
    unReadMessageCount: function () {
      var temp = 0;

      for (let i = 0; i < this.unReadMessageList.length; i++) {
        temp += this.unReadMessageList[i].count;
      }

      return temp;
    }
  },

  created() {
    this.findFriendReqByUserid();
    this.getAllFriendByUserId();
    this.userInfo = this.$store.state.userInfo;
    this.userId = this.userInfo.id;
    this.userAvatar = this.userInfo.avatar;
  }

});
// CONCATENATED MODULE: ./pages/ucenter/guanzhu.vue?vue&type=script&lang=js&
 /* harmony default export */ var ucenter_guanzhuvue_type_script_lang_js_ = (guanzhuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/ucenter/guanzhu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ucenter_guanzhuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d6c7eb56",
  "7176a18b"
  
)

/* harmony default export */ var guanzhu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=guanzhu.js.map