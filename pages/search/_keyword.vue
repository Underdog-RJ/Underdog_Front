<template>
  <div class="mianContent">
    <div class="listContent">
      <el-row :gutter="20">
        <el-col :offset="4" :span="12">
          <!-- 搜索框 -->
          <el-row>
            <el-col :offset="2" :span="18">
              <el-input v-model="inputValue"  
              @keyup.enter.native="hanleSearchBtn" 
              ></el-input>
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
              课程({{ courseList.length }})
            </div>
            <div
              :class="currentFlag == 3 ? 'navItem navIndex' : 'navItem'"
              @click="hanleNav(3)"
            >
              文章({{ blogList.length }})
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
                <article class="comm-course-list">
                  <ul class="of" id="bna">
                    <li v-for="item in courseList" :key="item.id">
                      <div class="cc-l-wrap">
                        <section class="course-img">
                          <img
                            :src="item.cover"
                            class="img-responsive"
                            :alt="item.title"
                          />
                          <div class="cc-mask">
                            <a
                              :href="'/course/' + item.id"
                              title="开始学习"
                              class="comm-btn c-btn-1"
                              >开始学习</a
                            >
                          </div>
                        </section>
                        <h3 class="hLh30 txtOf mt10">
                          <a
                            v-html="item.title"
                            :href="'/course/' + item.id"
                            class="course-title fsize18 c-333"
                            >{{ item.title }}</a
                          >
                        </h3>
                        <section class="mt10 hLh20 of">
                          <span
                            v-if="Number(item.price) === 0"
                            class="fr jgTag bg-green"
                          >
                            <i class="c-fff fsize12 f-fA">免费</i>
                          </span>
                          <span class="fl jgAttr c-ccc f-fA">
                            <i class="c-999 f-fA">{{ item.viewCount }}人学习</i>
                            |
                            <i class="c-999 f-fA">9634评论</i>
                          </span>
                        </section>
                      </div>
                    </li>
                  </ul>
                  <div class="clear"></div>
                </article>
              </el-card>
            </div>

            <div class="cardStyle">
              <el-card>
                <div slot="header">
                  <span class="fB">
                    相关文章
                  </span>
                </div>
                <article class="">
                  <ul class="show" id="">
                    <li
                      v-for="item in blogList"
                      :key="item.id"
                      class="show_item"
                    >
                      <section class="blog-img">
                        <div class="img-float">
                          <img
                            :src="item.firstPicture"
                            class=""
                            :alt="item.title"
                          />
                        </div>
                        <div class="show_left">
                          <div class="title_bolg">
                            <a :href="'/blog/' + item.id"  v-html="item.title">{{
                              item.title
                            }}</a>
                          </div>
                          <div class="item_center">
                            <span>{{ item.descption }}</span>
                          </div>

                          <div class="item_bottom">
                            <a href="">
                              <span> 作者: {{ item.authorNickname }} </span>
                            </a>
                            <span> 浏览: {{ item.viewCount }} </span>
                            <span>时间: {{ item.gmtCreate }}</span>
                          </div>
                        </div>
                      </section>
                    </li>
                  </ul>
                  <div class="clear"></div>
                </article>
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
            <div v-for="(item, o) in topList" :key="o" class="listItem">
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
  async asyncData({ params, error }) {
    var { keyword } = params;
    await searchApi.updateKeyWord(keyword);
    const res = await searchApi.allSearch(keyword);
    return {
      blogList: res.data.data.allSearch.blog,
      courseList: res.data.data.allSearch.course,
      inputValue:keyword
    };
  },
  created() {
  
    this.getTopSearch();
  },
  data() {
    return {
      inputValue: "",
      currentFlag: 1,
      topList: [],
      blogList: [],
      courseList: []
    };
  },
  methods: {
    // 更换到新页面
    async hanleSearchBtn() {
      this.$router.push("/search/" + this.inputValue);
    },
    hanleNav(type) {
      this.currentFlag = type;
    },
    async getTopSearch() {
      const res = await searchApi.searchTop();
      this.topList = res.data.data.top;
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
