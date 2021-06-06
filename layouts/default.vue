<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="UnderDog学院">
            <img src="~/assets/img/logo.png" width="100%" alt="UnderDog学院" />
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>名师</a>
            </router-link>
            <router-link to="/blog" tag="li" active-class="current">
              <a>文章</a>
            </router-link>
            <router-link to="/living" tag="li" active-class="current">
              <a>直播</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="loginInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                />
                <span id="userName" class="vam disIb">{{
                  loginInfo.nickname
                }}</span>
              </a>
              <a
                href="javascript:void(0);"
                title="退出"
                @click="logout()"
                class="ml5"
                >退出</a
              >
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input
                  type="text"
                  placeholder="输入你想学的课程"
                  name="queryCourse.courseName"
                  value
                />
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt />

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class="b-foot">
          <div class="footer-bottom">
            <a
              style="color:#eee"
              href="http://www.feifu.top/blog/1401547655095545857"
              >关于我们</a
            >
            <a
              style="color:#eee"
              href="http://www.feifu.top/blog/1401549152113946625"
              >加入我们</a
            >
            <a
              style="color:#eee"
              href="http://www.feifu.top/blog/1401549759927316481"
              >联系我们</a
            >
            <a
              style="color:#eee"
              href="http://www.feifu.top/blog/1401549152113946625"
              >帮助中心</a
            >
          </div>
          <div class="footer-show2">
            Copyright © 上海Underdog网络科技有限公司 豫ICP备2021015032号
          </div>
          <aside class="footer-show3">
            <section class="gf-tx">
              <span>
                  <el-popover
    placement="top-start"
    width="200"
    trigger="hover"
  >
     <img src="
https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/qrcode_for_gh_6ecad3479e5f_258.jpg" alt="" style="height:200px">
    <el-button slot="reference">微信</el-button>
  </el-popover>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                 <el-popover
    placement="top-start"
    width="200"

    trigger="hover"
   >
   <img src="

https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/2c6cb9ba7cc69cfb242b973b742e1ca.jpg" alt="" style="height:200px">
    <el-button slot="reference">B站</el-button>
  </el-popover>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/typo.css";
import "~/assets/css/web.css";
import "~/assets/css/base.css";
import "~/assets/css/activity_tab.css";
import "~/assets/css/bottom_rec.css";
import "~/assets/css/nice_select.css";
import "~/assets/css/order.css";
import "~/assets/css/swiper-3.3.1.min.css";
import "~/assets/css/pages-weixinpay.css";
import "~/assets/lib/prism/prism.css";

import cookie from "js-cookie";
import loginApi from "@/api/login";

export default {
  data() {
    return {
      token: "",
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: ""
      },
      code: ""
    };
  },
  methods: {
    //创建方法,从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      var userStr = cookie.get("underdogedu_ucenter");
      //console.log(userStr)
      //把字符串转换成json对象(js对象)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      }
    },
    async thirdLogin(code) {
      //把token值放到cookie里面
      //debugger
      cookie.set("underdogedu_token", this.token, { domain: "www.feifu.top" });
      cookie.set("underdogedu_ucenter", "", { domain: "www.feifu.top" });
      const res = await loginApi.thirdLogin(code);
      if (res.data.code === 20000) {
        this.loginInfo = res.data.data.member;
        this.token = res.data.data.token;
        console.log(this.loginInfo);
        cookie.set("underdogedu_token", this.token, {
          domain: "www.feifu.top"
        });
        cookie.set("underdogedu_ucenter", this.loginInfo, {
          domain: "www.feifu.top"
        });
      }
    },
    logout() {
      cookie.set("underdogedu_token", "", { domain: "www.feifu.top" });
      cookie.set("underdogedu_ucenter", "", { domain: "www.feifu.top" });
      window.location.href = "/";
    },
    //微信登录显示的方法
    async wxLogin() {
      //把token值放到cookie里面
      //debugger
      cookie.set("underdogedu_token", this.token, { domain: "localhost" });
      cookie.set("underdogedu_ucenter", "", { domain: "localhost" });
      //调用接口，根据token值获取用户信息
      // loginApi.getLoginUserInfo().then(response=>{
      //   this.loginInfo=response.data.data.userInfo
      //    cookie.set('underdogedu_ucenter',this.loginInfo,{domain:'localhost'})
      // })
      const res = await loginApi.getLoginUserInfo();
      if (res.data.code === 20000) {
        this.loginInfo = res.data.data.userInfo;
        console.log(this.loginInfo);
        cookie.set("underdogedu_ucenter", this.loginInfo, {
          domain: "localhost"
        });
      }
    }
  },
  created() {
    this.code = this.$route.query.code;

    if (this.code != null && this.code != "" && this.code != undefined) {
      this.thirdLogin(this.code);
    }

    // this.token=this.$route.query.token

    // if(this.token){//判断路径中是否有token值
    //   this.wxLogin()
    // }
    this.showInfo();
  }
};
</script>
<style scoped>
.footer-bottom {
  display: flex;
  justify-content: space-around;
}
.footer-show2 {
  margin: 10px 360px;
}
.footer-show3 {
  margin: 10px 480px;
}
</style>
