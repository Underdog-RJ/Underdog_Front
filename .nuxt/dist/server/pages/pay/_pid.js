exports.ids = [11];
exports.modules = {

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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/pay/_pid.vue?vue&type=template&id=a5c23002&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cart py-container"},[_vm._ssrNode("<div class=\"checkout py-container  pay\">","</div>",[_vm._ssrNode("<div class=\"checkout-tit\"><h4 class=\"fl tit-txt\"><span class=\"success-icon\"></span><span class=\"success-info\">"+_vm._ssrEscape("订单提交成功，请您及时付款！订单号："+_vm._s(_vm.payObj.out_trade_no))+"</span></h4> <span class=\"fr\"><em class=\"sui-lead\">应付金额：</em><em class=\"orange money\">"+_vm._ssrEscape("￥"+_vm._s(_vm.payObj.total_fee))+"</em></span> <div class=\"clearfix\"></div></div> "),_vm._ssrNode("<div class=\"checkout-steps\">","</div>",[_vm._ssrNode("<div class=\"fl weixin\">微信支付</div> "),_vm._ssrNode("<div class=\"fl sao\">","</div>",[_vm._ssrNode("<p class=\"red\">请使用微信扫一扫。</p> "),_vm._ssrNode("<div class=\"fl code\">","</div>",[_c('qriously',{attrs:{"value":_vm.payObj.code_url,"size":338}}),_vm._ssrNode(" <div class=\"saosao\"><p>请使用微信扫一扫</p> <p>扫描二维码支付</p></div>")],2)],2),_vm._ssrNode(" <div class=\"clearfix\"></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pay/_pid.vue?vue&type=template&id=a5c23002&

// EXTERNAL MODULE: ./api/orders.js
var orders = __webpack_require__(144);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/pay/_pid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _pidvue_type_script_lang_js_ = ({
  asyncData({
    params
  }) {
    return orders["a" /* default */].createNaice(params.pid).then(response => {
      return {
        payObj: response.data.data
      };
    });
  },

  data() {
    return {
      timer1: ""
    };
  },

  //每隔三秒调用一次查询订单状态的方法
  mounted() {
    //页面渲染之后进行
    this.timer1 = setInterval(() => {
      this.queryOrderStatus(this.payObj.out_trade_no);
    }, 3000);
  },

  methods: {
    queryOrderStatus(orderNo) {
      orders["a" /* default */].queryPayStatus(orderNo).then(response => {
        if (response.data.success) {
          //支付成功，清楚定时器
          //如果支付成功，清除定时器
          clearInterval(this.timer1); //提示

          this.$message({
            type: "success",
            message: "支付成功！"
          }); //跳转回到课程详情页面

          this.$router.push({
            path: "/course/" + this.payObj.course_id
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/pay/_pid.vue?vue&type=script&lang=js&
 /* harmony default export */ var pay_pidvue_type_script_lang_js_ = (_pidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/pay/_pid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pay_pidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b874eff"
  
)

/* harmony default export */ var _pid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_pid.js.map