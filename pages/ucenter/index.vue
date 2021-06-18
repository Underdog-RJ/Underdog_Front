<template>
  <div>
    
  </div>
</template>
<script>
import ucenterApi from "@/api/ucenter";
export default {
  layout: "ucenterLayout", //应用video布局
  data() {
    return {
      userInfo: {},
      activeIndex2: "1",
      SystemButton: false,
      IndexButton: true
    };
  },
  mounted(){
  this.getUserInfo();
  },
  created() {
   
    this.$router.push({
      path:'/ucenter/index_ucenter'
    })
  },
  methods: {
    getUserInfo() {
      ucenterApi.getLoginUserInfo().then(response => {
        this.userInfo = response.data.data.userInfo;
      });
    },
    handleSelect(index) {
      if (index === "1") {
        this.IndexButton = true;
        this.SystemButton = false;
      }
      if (index === "5") {
        this.IndexButton = false;
        this.SystemButton = true;
      }
    }
  }
};
</script>
<style scoped>
.nav_right{
  margin-left: auto;
}
.navStyle{
  display: flex;
}
.navStyle a{
  font-size: 15px;
}
.nav_ucenter{
  display: flex;
  padding: 0px;
}
.bg {
  background-image: url(https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/download.jpg);
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
}
</style>
