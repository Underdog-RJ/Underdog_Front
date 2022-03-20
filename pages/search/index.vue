<template>
  <div class="mianContent">
    <div class="listContent">
      <el-row :gutter="20">
        <el-col :offset="4" :span="12">
          <!-- 搜索框 -->
          <el-row>
            <el-col :offset="2" :span="18">
              <el-input v-model="inputValue"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="searchButton" @click="hanleSearchBtn">搜索</div>
            </el-col>
          </el-row>
          <!-- 导航栏 -->
          <div class="navList">
            <div
              :class="currentFlag == 1 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(1)"
            >
              综合
            </div>
            <div
              :class="currentFlag == 2 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(2)"
            >
              课程(2)
            </div>
            <div
              :class="currentFlag == 3 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(3)"
            >
              文章(5)
            </div>
            <div
              :class="currentFlag == 4 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(4)"
            >
              讲师(1)
            </div>
            <div
              :class="currentFlag == 5 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(5)"
            >
              直播(1)
            </div>
            <div
              :class="currentFlag == 6 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(6)"
            >
              资源(1)
            </div>
            <div
              :class="currentFlag == 7 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(7)"
            >
              用户(20)
            </div>
          </div>
          <!-- 综合 -->
          <div v-show="currentFlag == 1">
            <div class="cardStyle">
              <el-card>
                <div slot="header">
                  <span class="fB">
                    相关课程
                  </span>
                </div>
                <div v-for="o in 10" :key="o" class="listItem">
                  {{ "列表内容 " + o }}
                </div>
              </el-card>
            </div>
            <div class="cardStyle">
              <el-card>
                <div slot="header">
                  <span class="fB">
                    相关课程
                  </span>
                </div>
                <div v-for="o in 10" :key="o" class="listItem">
                  {{ "列表内容 " + o }}
                </div>
              </el-card>
            </div>
            <div class="cardStyle">
              <el-card>
                <div slot="header">
                  <span class="fB">
                    相关课程
                  </span>
                </div>
                <div v-for="o in 10" :key="o" class="listItem">
                  {{ "列表内容 " + o }}
                </div>
              </el-card>
            </div>
            <div class="cardStyle">
              <el-card>
                <div slot="header">
                  <span class="fB">
                    相关课程
                  </span>
                </div>
                <div v-for="o in 10" :key="o" class="listItem">
                  {{ "列表内容 " + o }}
                </div>
              </el-card>
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <el-card class="box-card">
            <div slot="header">
              <span class="originR"></span>
              <span class="fB">
                <i class="el-icon-s-opportunity"></i>
                Underdog热搜</span
              >
            </div>
            <div v-for="(item,o) in topList" :key="o" class="listItem">
              {{ item }}
              <i v-show="o == 1 || o == 2 || o == 0">🔥</i>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import searchApi from "@/api/search";
export default {
  created() {
    var query = this.$route.query;
    this.inputValue = query.keyword;
    this.getTopSearch()
  },
  data() {
    return {
      inputValue: "",
      currentFlag: 1,
      topList:[]
    };
  },
  methods: {
    async hanleSearchBtn(){
     const res = await searchApi.updateKeyWord(this.inputValue)
     if(res.data.code==20000){
       this.inputValue=""
     }
    },
    hanleNav(type) {
      this.currentFlag = type;
    },
    async getTopSearch() {
      const res = await searchApi.searchTop();
      this.topList = res.data.data.top
      console.log(this.topList)
    }
  }
};
</script>
<style scoped>
.cardStyle {
  margin-top: 20px;
}
.navList {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-bottom: 3px solid #25bb9b;
  display: flex;
  background: #fff;
  justify-content: space-around;
  cursor: pointer;
}
.navItem {
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
}
.navItem:hover {
  background: #25bb9b !important;
  color: #fff !important;
}
.navIndex {
  background: #25bb9b !important;
  color: #fff !important;
}
.searchButton {
  text-align: center;
  background: #25bb9b;
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.el-card__body div:last-child {
  border: none;
}
.listItem {
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
}
.listItem:hover {
  color: aqua !important;
  cursor: pointer;
}
.mianContent {
  min-height: 900px;
  background: #f7f8f9;
}
.listContent {
  padding-top: 20px;
  width: 100%;
}
.leftContent {
  flex: 50%;
  margin-left: 250px;
  background: blue;
}
.rightContent {
  flex: 30%;
  margin-left: 20px;
}
.fB {
  font-weight: bold;
  font-size: 16px;
}
</style>
