<template>
  <div>
    <ucenterNav />
    <div class="container u_index">
      <!-- 左边 -->
      <div class="show_left">
        <div v-html="zhuye.content" class="contentHtml">
          {{ zhuye.content }}
        </div>
      </div>
      <!-- 右边 -->
      <div class="show_right">
        <div class="show_column1">
          <!-- <div class="signStyle">
          <div>本月签到次数:{{userSignCountInfo.countMonth}}</div>
          <div>本月连续签到次数:{{userSignCountInfo.countCountinuous}}</div>
        </div> -->

          <el-calendar v-model="currentDay">
            <template slot="dateCell" slot-scope="{ date, data }">
              <div class="calendar-day">
                <span v-if="handleSignInfo(data, date) == 0">
                  {{ data.day.split("-").slice(2).join("-") }}
                  <div class="relateRed" v-if="handleDay(data, date)"></div>
                </span>
                <span v-if="handleSignInfo(data, date) == 1">
                  <div style="color: green; font-size: 30px">
                    <i class="el-icon-circle-check"></i>
                  </div>
                </span>
              </div>
            </template>
          </el-calendar>
        </div>

        <div class="show_column2">
          <div class="show_column2_item">
            <span>{{ countInfo.blog }}</span>
            <span>文章数</span>
          </div>

          <div class="show_column2_item">
            <span>{{ countInfo.kecheng }}</span>
            <span>课程数</span>
          </div>

          <div class="show_column2_item">
            <span>{{ countInfo.shuoshuo }}</span>
            <span>说说数</span>
          </div>
        </div>
        <div class="show_column3">
          <div class="show_column3_item1">账号信息</div>
          <div class="show_column3_item2">
            <div>
              <span>用户ID: </span>
              <span>{{ userInfo.id }}</span>
            </div>
            <div>
              <span>昵称: </span>
              <span>{{ userInfo.nickname }}</span>
            </div>
            <div>
              <span>等级: </span>
              <span>Lv1</span>
            </div>
            <div>
              <span>U币: </span>
              <span>{{ userInfo.ucoin }}币</span>
            </div>
            <div>
              <span>注册时间: </span>
              <span>{{ userInfo.gmtCreate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ucenter from "@/api/ucenter";
import cookie from "js-cookie";

export default {
  layout: "default",
  name: "",
 
  data() {
    return {
      targetStr: [],
      currentDay: new Date(),
      userInfo: {},
      zhuye: {
        content: "这家伙很懒，什么也没留下",
      },
      countInfo: {},
      userSignCountInfo: {},
      calendaer: "",
      day: new Date().getDay(),
    };
  },
  watch: {
    currentDay(newVal) {
      this.handleGetSignInfo(newVal.getFullYear(), newVal.getMonth() + 1);
    },
  },
  mounted() {
    //this.userInfo = this.$store.state.userInfo;
    //从cookie获取用户信息
    var userStr = cookie.get("underdogedu_ucenter");
    //console.log(userStr)
    //把字符串转换成json对象(js对象)
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
    }
    console.log(this.userInfo);
    this.getUserCountInfo();
    this.getOwnPage();
    this.userSignCountInfoMethod();
  },
  created() {
    let date = new Date();
    this.handleGetSignInfo(date.getFullYear(), date.getMonth() + 1);
  },
  methods: {
    async handleGetSignInfo(year, month) {
      const res = await ucenter.getUserSignInfo(year, month);
      this.targetStr = res.data.data.signInfo;
      // console.log(this.targetStr);
    },
    hanelPreDay(data, date) {
      return new Date().getMonth() == data.getMonth();
    },
    handleSignInfo(data, date) {
      let index = Number(data.day.split("-").slice(2));
      if (this.targetStr[index - 1] == "1") {
        return 1;
      } else {
        return 0;
      }
    },
    handleDay(data, date) {
      // console.log(date)
      let target = date.getTime();
      let now = new Date().getTime();
      return target < now;
    },
    async userSignCountInfoMethod() {
      const res = await ucenter.userSignCountInfo();
      this.userSignCountInfo.countMonth = res.data.data.countMonth;
      this.userSignCountInfo.countCountinuous = res.data.data.countCountinuous;
      console.log(this.userSignCountInfo);
    },
    async getUserCountInfo() {
      const res = await ucenter.getUserCountInfo();
      this.countInfo = res.data.data.countInfo;
    },
    async getOwnPage() {
      const res = await ucenter.getOwnPage();
      if (
        res.data.data.ucenterMemberZhuye != null &&
        res.data.data.ucenterMemberZhuye != ""
      ) {
        this.zhuye = res.data.data.ucenterMemberZhuye;
      }
    },
  },
};
</script>

<style scoped>
.relateRed {
  position: relative;
  left: 15px;
  top: -7px;
  width: 5px;
  height: 5px;
  background-color: red;
}
.contentHtml >>> img {
  width: 100%;
}
.in-wrap {
  background-color: #fff !important;
}
.show_column2 div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show_column2 div span:first-child {
  font-size: 30px;
  font-weight: bold;
}
.u_index {
  display: flex;
  margin-bottom: 50px;
}
.show_left {
  flex: 70%;
  background-color: #fff;
  margin-right: 30px;
  min-height: 700px;
  max-width: 70%;
}
.show_right {
  flex: 25%;
  display: flex;
  flex-direction: column;
}
.signStyle {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px 40px;
}
.show_column1 {
  height: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  /* border-radius: 20px; */
}
.show_column2 {
  height: 130px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.show_column3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-height: 300px;
}
.show_column3_item1 {
  font-size: 30px;
  margin: 10px;
}
.show_column3_item2 {
  margin: 10px;
}
.show_column3_item2 div {
  margin-bottom: 10px;
}
</style>
