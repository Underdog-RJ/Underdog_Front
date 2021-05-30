<template>
  <div>
    <!-- /公共头引入 -->
    <div class="container">
      <div class="bg">
        <div class="bg_content">
          <div class="avatar">
            <el-avatar
              class="avatar"
              shape="circle"
              :size="80"
              :src="userInfo.avatar"
            >
            </el-avatar>
          </div>
          <div class="content_right">
            <div>
              <span>{{ userInfo.nickname }}</span>
              <span v-if="userInfo.sex === 1">男</span>
              <span v-else>女</span>
            </div>
            <div style="color:#fff;font-size:15px;font-weight:bold">
              {{ userInfo.signature || "Ta很懒，什么也没留下" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">Ta的主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Ta的江湖</template>
          <el-menu-item index="2-1">Ta的博客</el-menu-item>
          <el-menu-item index="2-2">Ta的收藏</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">Ta的说说</el-menu-item>
        <el-submenu index="4">
          <template slot="title">Ta的课程</template>
          <el-menu-item index="4-1">Ta的收藏</el-menu-item>
          <el-menu-item index="4-2">Ta的购买</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="container o_content">
      <div v-if="flagdialog === '1'" class="u_index">
        <!-- 左边 -->
        <div class="show_left">
          <div v-html="zhuye.content" class="contentHtml">
            {{ zhuye.content }}
          </div>
        </div>
        <!-- 右边 -->
        <div class="show_right">
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
            <div class="show_column3_item1">
              账号信息
            </div>
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
                <span>52</span>
              </div>
              <div>
                <span>注册时间: </span>
                <span>{{ userInfo.gmtCreate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="flagdialog === '3'">
        <section class="flex">
          <section class="lh-bj-list flex">
            <ul class="pr10 flex">
              <li v-for="(comment, index) in shuoshuoList" v-bind:key="index">
                <div class="noter-txt mt5">
                  <p>{{ comment.shuoshuo }}</p>
                </div>
                <span class="fleft">
                  <font class="fsize12 c-999 ml5">{{ comment.gmtCreate }}</font>
                </span>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div v-if="flagdialog === '2-1'">
        <div class="item">
          <article class="">
            <ul class="show" id="">
              <li v-for="item in blogList" :key="item.id" class="show_item">
                <section class="blog-img">
                  <div class="img-float">
                    <img :src="item.firstPicture" class="" :alt="item.title" />
                  </div>
                  <div class="show_left_blog">
                    <div class="title_bolg">
                      <a :href="'/blog/' + item.id" :title="item.title">{{
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
          </article>
        </div>
      </div>
      <div v-if="flagdialog === '2-2'">
        <div class="item">
          <article class="">
            <ul class="show" id="">
              <li
                v-for="item in enjoyBlogList"
                :key="item.id"
                class="show_item"
              >
                <section class="blog-img">
                  <div class="img-float">
                    <img :src="item.firstPicture" class="" :alt="item.title" />
                  </div>
                  <div class="show_left_blog">
                    <div class="title_bolg">
                      <a :href="'/blog/' + item.id" :title="item.title">{{
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
          </article>
        </div>
      </div>
      <div v-if="flagdialog === '4-1'">
        <div class="item">
          <article class="comm-course-list" v-if="data.total > 0">
            <ul class="of" id="bna">
              <li v-for="item in data.items" :key="item.id">
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
                      :href="'/course/' + item.id"
                      :title="item.title"
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
                      <i class="c-999 f-fA">9634评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
              >首</a
            >
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current - 1)"
              >&lt;</a
            >
            <a
              v-for="page in data.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
              >{{ page }}</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current + 1)"
              >&gt;</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
              >末</a
            >
            <div class="clear" />
          </div>
        </div>
      </div>
      <div v-if="flagdialog === '4-2'">
        <div class="item">
          <article class="comm-course-list" v-if="data1.total > 0">
            <ul class="of" id="bna">
              <li v-for="item in data1.items" :key="item.id">
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
                      :href="'/course/' + item.id"
                      :title="item.title"
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
                      <i class="c-999 f-fA">9634评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{ undisable: !data1.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage1(1)"
              >首</a
            >
            <a
              :class="{ undisable: !data1.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage1(data1.current - 1)"
              >&lt;</a
            >
            <a
              v-for="page in data1.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage1(page)"
              >{{ page }}</a
            >
            <a
              :class="{ undisable: !data1.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage1(data1.current + 1)"
              >&gt;</a
            >
            <a
              :class="{ undisable: !data1.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage1(data1.pages)"
              >末</a
            >
            <div class="clear" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import other from "@/api/other";

export default {
  layout: "otherLayout",
  //和页面异步开始的
  asyncData({ params, error }) {
    return { otherId: params.id };
  },

  mounted() {
    this.getUserInfoById();
    this.getUserCountInfo();
    this.getShuoshuoById();
    this.getOwnPage();
  },
  methods: {
    async gotoPage(page) {
      const res = await other.findCollectById(this.otherId, page, this.limit);
      this.data = res.data.data;
    },
    async gotoPage1(page) {
      const res = await other.findPayById(this.otherId, page, this.limit);
      this.data1 = res.data.data;
    },
    handleSelect(key) {
      this.flagdialog = key;
      if (key === "2-1") {
        this.getBlogList();
      }
      if (key === "2-2") {
        this.getEnjoyList();
      }
      if (key === "4-1") {
        this.findCollectById();
      }
      if (key === "4-2") {
        this.findPayById();
      }
    },
    //根据用户id获取用户信息
    async getUserInfoById() {
      const res = await other.getUserInfoById(this.otherId);
      this.userInfo = res.data.data.member;
    },
    async getUserCountInfo() {
      const res = await other.getUserCountInfoById(this.otherId);
      this.countInfo = res.data.data.countInfo;
    },
    async getOwnPage() {
      const res = await other.getOwnPageById(this.otherId);
      if (
        res.data.data.ucenterMemberZhuye != null &&
        res.data.data.ucenterMemberZhuye != ""
      ) {
        this.zhuye = res.data.data.ucenterMemberZhuye;
      }
    },
    //获取用户说说
    async getShuoshuoById() {
      const res = await other.getShuoshuoById(this.otherId);
      this.shuoshuoList = res.data.data.list;
    },
    async getBlogList() {
      const res = await other.findBlogByUserId(this.otherId);
      this.blogList = res.data.data.list;
    },
    async getEnjoyList() {
      const res = await other.EnjoyBlogListByUserId(this.otherId);
      this.enjoyBlogList = res.data.data.list;
    },
    async findCollectById() {
      const res = await other.findCollectById(
        this.otherId,
        this.current,
        this.limit
      );
      this.data = res.data.data;
    },
    async findPayById() {
      const res = await other.findPayById(
        this.otherId,
        this.current,
        this.limit
      );
      this.data1 = res.data.data;
    }
  },
  data() {
    return {
      activeIndex2: "1",
      userInfo: {},
      flagdialog: "1",
      zhuye: {
        content: "这家伙很懒，什么也没留下"
      },
      countInfo: {},
      shuoshuoList: [],
      blogList: [],
      enjoyBlogList: [],
      current: 1,
      limit: 8,
      data: [], //课程列表
      data1: [] //课程支付列表
    };
  }
};
</script>

<style scoped>
.title_bolg {
  font-size: 20px;
  font-weight: bold;
}
.show_left_blog {
  margin: 10px;
  display: flex;
  width: 100%;
  max-height: 150px;
  overflow: hidden;
  justify-content: space-around;
  flex-direction: column;
}
.item_bottom {
  height: 50px;
  display: flex;
  justify-content: start;
}
.item_bottom span {
  /* flex: 1; */
  margin-right: 10px;
}

.item_center {
  flex: 50%;
}
.show {
  display: flex;
}
.show_item {
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.hide {
  display: none;
}
.show {
  display: block;
}
.img-float {
  margin-right: 10px;
  height: 150px;
  width: 250px;
}
.img-float img {
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  width: 100%;
}
.fleft {
  position: relative;
  left: -0.5%;
}
.fright {
  position: relative;
  right: -75%;
}
.u_index {
  min-height: 500px;
  margin-bottom: 10px;
  margin: 1;
}

.flex {
  position: relative;
  background-color: #fff;
  min-height: 300px;
}
textarea:hover {
  border: solid 1px rgb(13, 147, 180);
}
font:hover {
  color: rgb(57, 45, 219);
}

.submit-say {
  line-height: 70px;
  position: absolute;
  left: 80%;
  text-align: center;
}
.hidex {
  display: inline;
}
.fshuoshuo {
  position: flex;
  margin: 5%;
}
.hidey {
  display: none;
}
.el-input {
  margin-right: 300px;
  position: relative;
  height: 30%;
  text-align: center;
}
.bottom1 {
  /* position: absolute; */
  margin: auto;
  text-align: center;
  /* top:20%; */
  /* left: 50%;
     bottom: 0;   */
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
  min-height: 500px;
  max-width: 70%;
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
.o_content {
  margin-top: 20px;
  min-height: 300px;
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
