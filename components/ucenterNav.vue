<template>
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
            <span>{{ loginInfo.nickname }}</span>
            <span v-if="loginInfo.sex === 1">男</span>
            <span v-else>女</span>
          </div>
          <div style="color: #fff; font-size: 15px; font-weight: bold">
            {{ loginInfo.signature || "Ta很懒，什么也没留下" }}
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
        <router-link to="/ucenter/pierce" tag="li" active-class="current">
          <a>穿透</a>
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
</template>
<script>
import cookie from "js-cookie";
export default {
  created(){
    this.initUserInfo()
  },
  data() {
    return {
      loginInfo: {
        avatar: "12",
        nickname: "12",
        sex: "12",
        signature: "12",
      },
    };
  },
  methods: {
    initUserInfo() {
      var userStr = cookie.get("underdogedu_ucenter");
      //console.log(userStr)
      //把字符串转换成json对象(js对象)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      }
    },
  },
};
</script>
<style scoped>
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
.footer_i {
  margin-top: 30px;
}
.content_right {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.content_right span {
  color: #fff;
  font-size: 20px;
  font-style: bold;
}
.avatar {
  margin-right: 10px;
}
.bg_content {
  display: flex;
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