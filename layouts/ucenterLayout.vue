<template>
  <div class="in-wrap bg-fa of">
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
    <div class="container">
      <div class="bg">
          <div class="bg_content">
             <div class="avatar">
            <el-avatar
              class="avatar"
              shape="circle"
              :size="80"
              :src="loginInfo.avatar"
            >
            </el-avatar>
        </div>
        <div class="content_right">
          <div>
             <span >{{ loginInfo.nickname }}</span>
        <span v-if="loginInfo.sex===1">男</span>
        <span v-else>女</span>
          </div>
          <div style="color:#fff;font-size:15px;font-weight:bold">
            {{loginInfo.signature||'Ta很懒，什么也没留下'}}
          </div>
        </div>
          </div>
      </div>

      <div class="navStyle">
        <ul class="nav nav_ucenter">
          <router-link
            to="/ucenter/index_ucenter"
            tag="li"
            active-class="current"
            exact
          >
            <a>主页</a>
          </router-link>
          <router-link to="/ucenter/jianghu" tag="li" active-class="current">
            <a>江湖</a>
          </router-link>
          <router-link to="/ucenter/kecheng" tag="li" active-class="current">
            <a>课程</a>
          </router-link>
          <router-link to="/ucenter/shuoshuo" tag="li" active-class="current">
            <a>说说</a>
          </router-link>
          <router-link to="/ucenter/banwo" tag="li" active-class="current">
            <a>伴我</a>
          </router-link>
          <router-link to="/ucenter/shezhi" tag="li" active-class="current">
            <a>设置</a>
          </router-link>
        </ul>
        <ul class="nav nav_right">
          <router-link to="/ucenter/guanzhu" tag="li" active-class="current">
            <a>我的关注</a>
          </router-link>
          <router-link to="/ucenter/fenxi" tag="li" active-class="current">
            <a>我的粉丝</a>
          </router-link>
        </ul>
      </div>
    </div>

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
import "~/static/tinymce4.7.5/skins/lightgray/skin.min.css";
import "~/static/tinymce4.7.5/skins/lightgray/content.min.css";
import "~/static/tinymce4.7.5/skins/lightgray/skin.min.css";

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
      }
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
     async thirdLogin(code){
       //把token值放到cookie里面
      //debugger
      cookie.set('underdogedu_token',this.token,{domain:'www.feifu.top'})
      cookie.set('underdogedu_ucenter','',{domain:'www.feifu.top'})
      const res = await loginApi.thirdLogin(code)
      if(res.data.code===20000){
       this.loginInfo=res.data.data.member
        this.$store.commit('initUserInfo',this.loginInfo)
       this.token=res.data.data.token
       console.log(this.loginInfo)
       cookie.set("underdogedu_token", JSON.stringify(this.token), {
          domain: "www.feifu.top"
        });

        cookie.set("underdogedu_ucenter",  JSON.stringify(this.loginInfo), {
          domain: "www.feifu.top"
        });
    
     }
    },
    logout(){
      cookie.set('underdogedu_token','',{domain:'www.feifu.top'})
      cookie.set('underdogedu_ucenter','',{domain:'www.feifu.top'})
      window.location.href="/"
    },
    //微信登录显示的方法
    wxLogin() {
      //把token值放到cookie里面
      cookie.set("underdogedu_token", this.token, { domain: "localhost" });
      cookie.set("underdogedu_ucenter", "", { domain: "localhost" });
      //调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo().then(response => {
        this.loginInfo = response.data.data.userInfo;
        cookie.set("underdogedu_ucenter", this.loginInfo, {
          domain: "localhost"
        });
      });
    }
  },
  created() {
    this.code=this.$route.query.code
    
    if(this.code!=null&&this.code!=''&&this.code!=undefined)
    {
      this.thirdLogin(this.code)
    }
  },
  mounted(){
    this.showInfo()
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
.footer_i{
  margin-top: 30px;
}
.content_right{
  margin-top:10px;
  display: flex;
  flex-direction: column;
}
.content_right span{
  color:#fff;
  font-size:20px;
  font-style: bold;
}
.avatar{
  margin-right:10px;
}
.bg_content{
  display:  flex;
  height: 100%;
}
.nav_right {
  margin-left: auto;
}
.navStyle {
  background-color: #fff;
  display: flex;
  margin-bottom: 20px;
  
}
.navStyle a {
  font-size: 15px;
}
.nav_ucenter {
  display: flex;
  padding: 0px;
}
.bg {
  background-image: url(https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/download.jpg);
  background-repeat: no-repeat;
  background-position: center;
  
  padding: 60px 30px;
}
</style>
