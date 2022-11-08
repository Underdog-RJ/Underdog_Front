<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="/" title="UnderDog学院">
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
            <router-link to="/application" tag="li" active-class="current">
              <a>应用</a>
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
            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user liPop">
              <!-- <a href="/ucenter" title>
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
              >-->
              <div class="userPopcover">
                <el-popover class="popLogin" placement="bottom" width="300" trigger="hover">
                  <div slot="reference">
                    <div class="loginPop">
                      <div>
                        <el-avatar :size="30" :src="loginInfo.avatar"></el-avatar>
                      </div>
                      <span id="userName" style="margin-left: 5px">
                        {{
                        loginInfo.nickname
                        }}
                      </span>
                      <i class="el-icon-caret-bottom" style="margin-left: 5px"></i>
                    </div>
                  </div>
                  <div class="popShow">
                    <div class="popHeader">
                      <div class="headerHover" @click="goUserCenter">
                        <i class="el-icon-s-home" :size="50"></i>
                        <div
                          style="
                            font-size: 12px;
                            margin-left: 5px;
                            cursor: pointer;
                          "
                        >进入主页</div>
                      </div>

                      <div class="popUser">
                        <div>
                          <el-avatar :size="30" :src="loginInfo.avatar"></el-avatar>
                        </div>
                        <span id="userName" style="margin-left: 5px">
                          {{
                          loginInfo.nickname
                          }}
                        </span>
                        <i class="el-icon-caret-bottom" style="margin-left: 5px"></i>
                      </div>
                    </div>
                    <div class="popContent">
                      <div class="popContentItem">
                        <div>{{ countInfo.blog }}</div>
                        <div>文章</div>
                      </div>
                      <div class="popContentItem">
                        <div>{{ countInfo.kecheng }}</div>
                        <div>课程</div>
                      </div>
                      <div class="popContentItem">
                        <div>{{ countInfo.shuoshuo }}</div>
                        <div>说说</div>
                      </div>
                    </div>
                    <div style="text-align: center">
                      <el-button
                        v-if="userSignFlag == false"
                        icon="el-icon-s-promotion"
                        size="small"
                        class="qdStyle"
                        @click="goSign"
                      >签到</el-button>
                      <el-button
                        v-else
                        icon="el-icon-s-promotion"
                        size="small"
                        style="border-radius: 10px"
                        type="primary"
                      >已签到</el-button>
                    </div>
                    <!-- <hr style="margin-top: 20px" /> -->
                    <div class="popUserInfo">
                      <div class="popUserInfoItem" @click="goUserCenter">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-s-home popIcon"></i>个人中心
                        </div>
                        <div class="popUserInfoItemText">普通用户</div>
                      </div>
                      <div class="popUserInfoItem">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-user-solid popIcon"></i>账号
                        </div>
                        <div class="popUserInfoItemText">{{ loginInfo.id }}</div>
                      </div>
                      <div class="popUserInfoItem">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-s-flag popIcon"></i>等级
                        </div>
                        <div class="popUserInfoItemText">Lv1</div>
                      </div>
                      <div class="popUserInfoItem">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-coin popIcon"></i>U币
                        </div>
                        <div class="popUserInfoItemText">{{ loginInfo.ucoin }}币</div>
                      </div>
                      <div class="popUserInfoItem" @click="goSetting">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-s-tools popIcon"></i>个人设置
                        </div>
                      </div>
                    </div>
                    <!-- <hr style="margin-top: 20px" /> -->
                    <div class="popUserInfo">
                      <div class="popUserInfoItem" @click="logout()">
                        <div class="popUserInfoItemPro">
                          <i class="el-icon-apple" style="font-size: 25px; margin-right: 5px"></i>退出登录
                        </div>
                      </div>
                    </div>
                  </div>
                </el-popover>
              </div>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <label class="h-r-s-box">
              <el-input v-model="searchValue"></el-input>
              <button type="submit" class="s-btn" @click="toSearch">
                <em class="icon18">&nbsp;</em>
              </button>
            </label>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt class="commonBg" />

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class="b-foot">
          <div class="footer-bottom">
            <a style="color: #eee" href="http://www.feifu.top/blog/1401547655095545857">关于我们</a>
            <a style="color: #eee" href="http://www.feifu.top/blog/1401549152113946625">加入我们</a>
            <a style="color: #eee" href="http://www.feifu.top/blog/1401549759927316481">联系我们</a>
            <a style="color: #eee" href="http://www.feifu.top/blog/1401549152113946625">帮助中心</a>
          </div>
          <div class="footer-show2">Copyright © 上海Underdog网络科技有限公司 豫ICP备2021015032号</div>
          <aside class="footer-show3">
            <section class="gf-tx">
              <!-- <span>
                <el-popover placement="top-start" width="200" trigger="click">
                  <img
                    src="
https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/qrcode_for_gh_6ecad3479e5f_258.jpg"
                    alt=""
                    style="height:200px"
                  />
                  <el-button slot="reference">微信</el-button>
                </el-popover>
              </span>-->
            </section>
            <section class="gf-tx">
              <!-- <span>
                <el-popover placement="top-start" width="200" trigger="hover">
                  <img
                    src="

https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/2c6cb9ba7cc69cfb242b973b742e1ca.jpg"
                    alt=""
                    style="height:200px"
                  />
                  <el-button slot="reference">B站</el-button>
                </el-popover>
              </span>-->
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
import LwFirewords from "lw_firewords";
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
import ucenterApi from "@/api/ucenter";

export default {
  data() {
    return {
      searchValue: "",
      token: "",
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: ""
      },
      code: "",
      userSignFlag: false,
      countInfo: {}
    };
  },
  methods: {
    // start fire
    startFire() {
      const lw_f = new LwFirewords(); //创建实例
      lw_f.init(); //启动事件
    },
    toSearch() {
      this.$router.push("/search/" + this.searchValue);
    },
    async getUserCountInfo() {
      const res = await ucenterApi.getUserCountInfo();
      this.countInfo = res.data.data.countInfo;
    },
    goSetting() {
      this.$router.push("/ucenter/shezhi");
    },
    async goSign() {
      const res = await ucenterApi.userSign();
      this.userSignFlag = res.data.data.flag;
      this.loginInfo = res.data.data.userInfo;
      cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
        domain: "www.feifu.top"
      });
      console.log(this.userSignFlag);
    },
    goUserCenter() {
      this.$router.push("/ucenter");
    },
    //创建方法,从cookie获取用户信息
    showInfo() {
      setTimeout(async () => {
        //从cookie获取用户信息
        var userStr = cookie.get("underdogedu_ucenter");

        //console.log(userStr)
        //把字符串转换成json对象(js对象)
        if (userStr) {
          this.getUserCountInfo();
          this.loginInfo = JSON.parse(userStr);
          const res = await ucenterApi.checkSign();
          if (res.data.code == 20000) {
            this.userSignFlag = res.data.data.flag;
          }
        }
      }, 1000);
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
        cookie.set("underdogedu_token", this.token, {
          domain: "www.feifu.top"
        });
        cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
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
    if (!this.$isEmpty(this.code)) {
      console.log(this.code);
      this.thirdLogin(this.code);
    }
  },
  mounted() {
    this.showInfo();
    // this.startFire();
  }
};
</script>
<style>
.commonBg {
  /* height: 100%;
  z-index: -999;
  background: url(https://npm.elemecdn.com/lql_static@latest/bg/00189.webp)
    no-repeat;
  margin: 0px;
  background-size: 100% 100%;
  background-attachment: fixed; */
  background-color: #eee;
  min-height: 1000px;
}
.popUserInfoItem:hover {
  background-color: #eee;
  color: black;
}
#is-login-two {
  cursor: pointer;
}
.popUserInfoItemPro {
}
.popIcon {
  font-size: 20px;
  margin-right: 5px;
}
.popUserInfoItemText {
  margin-left: auto;
}
.popUserInfoItem {
  display: flex;
  padding: 10px 10px;
  align-items: center;
  cursor: pointer;
}
.popUserInfo {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.qdStyle {
  border-radius: 15px;
}
.popContent {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 10px;
}
.popContentItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
}
.popContentItem:hover {
  background-color: #eee;
}
.headerHover {
  display: flex;
  align-items: center;
}
.headerHover:hover {
  color: #34495e !important;
}
.popHeader {
  display: flex;
  align-items: center;
}
.popUser {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
}
.userPopcover .el-popper .popper__arrow {
  display: none !important;
}
.userPopcover .el-popover {
  margin-top: 0px !important;
  position: fixed !important;
  top: 45px !important;
  left: 1110px !important;
  width: 300px !important;
  border-radius: 10px !important;
}

.userPopcover .loginPop {
  margin-top: 10px;
  display: flex;
  align-items: center;
  z-index: 9999;
}
.footer-bottom {
  display: flex;
  justify-content: center;
  margin-left: 80px;
}
.footer-bottom a {
  margin-right: 100px;
}
.footer-show2 {
  margin: 10px 360px;
}
.footer-show3 {
  margin: 10px 480px;
}
</style>
