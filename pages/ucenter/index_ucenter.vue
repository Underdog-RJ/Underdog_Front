<template>
  <div class="container u_index">
    <!-- 左边 -->
    <div class="show_left">
     <div v-html="ucenterMemberZhuye.content">
       {{ucenterMemberZhuye.content}}
     </div>
    </div>
    <!-- 右边 -->
    <div class="show_right">
      <div class="show_column1">
        <div  class="button1">
         <el-button type="warning" size="medium">开通VIP 享更多特权</el-button>
        </div>
      </div>

      <div class="show_column2">

        <div class="show_column2_item">
          <span>0</span>
          <span>文章数</span>
        </div>

        <div class="show_column2_item">
          <span>0</span>
          <span>评论数</span>
        </div>

        <div class="show_column2_item">
          <span>0</span>
          <span>学习数</span>
        </div>
      </div>
      <div class="show_column3">
          <div class="show_column3_item1">
              账号信息
          </div>
          <div class="show_column3_item2">
              <div>
                <span>用户ID: </span>
                <span>2332532</span>
              </div>
              <div>
                <span>昵称: </span>
                <span>RJ</span>
              </div>
              <div>
                <span>等级: </span>
                <span>Lv1</span>
              </div>
              <div>
                <span>U币: </span>
                <span>52</span>
              </div>
              <div>
                <span>注册时间: </span>
                <span>2021-02-03</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ucenter from "@/api/ucenter";
export default {
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      userInfo:{},
      ucenterMemberZhuye:{}

    };
  },
  created(){
    this.userInfo=this.$store.state.userInfo;
    this.getOwnPage()
  },
  methods:{
     async getOwnPage(){
        const res= await ucenter.getOwnPage()
       this.ucenterMemberZhuye=res.data.data.ucenterMemberZhuye;
      }
  }
};
</script>

<style scoped>
.in-wrap{
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
  min-height: 500px;
}
.show_right {
  flex: 25%;
  display: flex;
  flex-direction: column;
}
.button1 {
    line-height: 70px;
  text-align: center;
}
.show_column1 {
  height: 70px;
  margin-bottom: 20px;
  background-color: #fff;
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
}
.show_column3_item1{
  font-size: 30px;
  margin: 10px;
}
.show_column3_item2{
  margin: 10px;
}
.show_column3_item2 div{
  margin-bottom: 10px;
}
</style>
