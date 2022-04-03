<template>
  <div id="aBlogsList" class="aBlogsList bg-fa of">
    <div class="blogBg">
      <!-- /博客详情 开始 -->
      <section class="container">
        <div class="mt20 c-infor-box">
          <article class="">
            <section class="mr30">
              <div class="i-box">
                <div>
                  <section
                    id="c-i-tabTitle"
                    class="c-infor-tabTitle c-tab-title"
                  >
                    <a name="c-i" class="current" title="博客详情">博客详情</a>
                  </section>
                </div>
                <div class="comm-title">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <i class="el-icon-s-custom"></i
                    >{{ blogInfo.authorNickname }}
                  </div>
                  <div>
                    <i class="el-icon-view"></i>{{ blogInfo.viewCount }}
                  </div>
                  <div>评论数: {{ blogInfo.viewCount }}</div>
                  <div>最后修改于：{{ blogInfo.gmtModified }}</div>
                </div>
                <h1 style="text-align: center">{{ blogInfo.title }}</h1>
                <article class="ml10 mr10 pt20 typo typo-selection">
                  <div>
                    <h6 class="c-i-content c-infor-title">
                      <span>博客首图</span>
                    </h6>
                    <div class="course-txt-body-wrap">
                      <div class="blog_img">
                        <img :src="blogInfo.firstPicture" alt="" />
                      </div>
                    </div>
                  </div>
                </article>
                <article class="ml10 mr10 pt20 typo typo-selection">
                  <div>
                    <h6 class="c-i-content c-infor-title">
                      <span>博客内容</span>
                    </h6>
                    <div class="course-txt-body-wrap">
                      <section class="course-txt-body">
                        <p v-html="blogInfo.content">
                          {{ blogInfo.content }}
                        </p>
                      </section>
                    </div>
                  </div>

                  <div class="ml10 mr10 pt20 zsTitle">
                    <div>
                      版权声明：本文为博主原创文章，遵循CC 4.0
                      BY-SA版权协议,转载请附上原文出处链接和本声明，UnderdogEdu！
                    </div>
                    <div>
                      <span>本文链接：</span>
                      <a href="#"> www.underdogedu.com</a>
                    </div>
                  </div>

                  <div
                    style="text-align: center"
                    v-if="blogInfo.appreciation === true"
                  >
                    <el-popover
                      placement="bottom"
                      title="打赏"
                      width="200"
                      trigger="click"
                    >
                      <img
                        :src="blogInfo.zsPicture"
                        alt=""
                        style="height: 75px"
                      />
                      <el-button type="primary" slot="reference"
                        >赞赏</el-button
                      >
                    </el-popover>

                    <el-button
                      v-if="flagEnjoy == false"
                      type="warning"
                      @click="handleEnjoy"
                      >收藏</el-button
                    >

                    <el-button v-else type="warning" @click="handleRemoveEnjoy"
                      >取消收藏</el-button
                    >
                  </div>

                  <!-- /博客大纲 -->
                  <div class="mt50 commentHtml">
                    <div>
                      <h6 class="c-c-content c-infor-title" id="i-art-comment">
                        <span class="commentTitle">博客评论</span>
                      </h6>
                      <section class="lh-bj-list pr mt20 replyhtml">
                        <ul>
                          <li class="unBr">
                            <aside class="noter-pic">
                              <img
                                width="50"
                                height="50"
                                class="picImg"
                                src="~/assets/img/avatar-boy.gif"
                              />
                            </aside>
                            <div class="of">
                              <section class="n-reply-wrap">
                                <fieldset>
                                  <textarea
                                    name=""
                                    v-model="comment.content"
                                    placeholder="输入您要评论的文字"
                                    id="commentContent"
                                  ></textarea>
                                </fieldset>
                                <p class="of mt5 tar pl10 pr10">
                                  <span class="fl"
                                    ><tt
                                      class="c-red commentContentmeg"
                                      style="display: none"
                                    ></tt
                                  ></span>
                                  <input
                                    type="button"
                                    @click="addComment()"
                                    value="回复"
                                    class="lh-reply-btn"
                                  />
                                </p>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="">
                        <section class="question-list lh-bj-list pr">
                          <ul class="pr10">
                            <li
                              v-for="(comment, index) in data.items"
                              v-bind:key="index"
                            >
                              <aside class="noter-pic">
                                <img
                                  width="50"
                                  height="50"
                                  class="picImg"
                                  :src="comment.avatar"
                                />
                              </aside>
                              <div class="of">
                                <span class="fl">
                                  <font class="fsize12 c-blue">
                                    {{ comment.nickname }}</font
                                  >
                                  <font class="fsize12 c-999 ml5"
                                    >评论：</font
                                  ></span
                                >
                              </div>
                              <div class="noter-txt mt5">
                                <p>{{ comment.content }}</p>
                              </div>
                              <div class="of mt5">
                                <span class="fr"
                                  ><font class="fsize12 c-999 ml5">{{
                                    comment.gmtCreate
                                  }}</font></span
                                >
                              </div>
                            </li>
                          </ul>
                        </section>
                      </section>

                      <!-- 公共分页 开始 -->
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
                            undisable: data.current == page,
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
                      <!-- 公共分页 结束 -->
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </article>
          <div class="clear"></div>
        </div>
      </section>
      <!-- /博客详情 结束 -->
      <div class="m-fixed m-right-bottom m-padding">
        <el-backtop></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import blogApi from "@/api/blog";
import comment from "@/api/blogcomment";
import Prism from "prismjs";
import cookie from "js-cookie";
export default {
  //和页面异步开始的
  asyncData({ params, error }) {
    return { blogId: params.id };
  },
  data() {
    return {
      data: {},
      page: 1,
      flagEnjoy: true,
      limit: 4,
      total: 10,
      blogInfo: {
        type: 1,
      },
      blogId: "",
      comment: {
        content: "",
        blogId: "",
      },
      loginInfo: {},
    };
  },
  created() {},
  beforeMount() {
    console.log(Prism);
  },

  mounted() {
    this.initCourseInfo();
    this.initComment();
    this.initEnjoy();
  },
  updated() {
    process.browser &&
      document
        .querySelectorAll("pre code")
        .forEach((block) => Prism.highlightElement(block));
  },
  methods: {
    //初始化收藏
    async initEnjoy() {
      const res = await blogApi.IsEnjoyBlog(this.blogId);
      this.flagEnjoy = res.data.data.flag;
    },
    async handleRemoveEnjoy() {
      const res = await blogApi.RemoveEnjoyBlog(this.blogId);
      this.flagEnjoy = false;
    },
    //初始化评论
    initComment() {
      comment
        .getPageList(this.$route.params.id, this.page, this.limit)
        .then((response) => {
          this.data = response.data.data;
        });
    },
    addComment() {
      this.comment.blogId = this.$route.params.id;
      comment.addComment(this.comment).then((response) => {
        if (response.data.success) {
          this.comment.content = "";
          this.initComment();
          this.loginInfo = response.data.data.userInfo;
          cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
            domain: "www.feifu.top",
          });
          location.reload();
        }
      });
    },
    gotoPage(page) {
      comment
        .getPageList(this.$route.params.id, page, this.limit)
        .then((response) => {
          this.data = response.data.data;
        });
    },
    //查询博客详情信息
    initCourseInfo() {
      console.log(this.blogId);
      blogApi.getBlogInfo(this.blogId).then((response) => {
        this.blogInfo = response.data.data.eduBlog;
        process.browser &&
          document
            .querySelectorAll("pre code")
            .forEach((block) => Prism.highlightElement(block));

        console.log(this.blogInfo);
      });
    },
    async handleEnjoy() {
      const res = await blogApi.enjoyBlog(this.blogId);
      this.flagEnjoy = true;
    },
  },
};
</script>
<style scoped>
.aBlogsList {
  height: 100%;
  z-index: -999;
  background: url(https://npm.elemecdn.com/lql_static@latest/bg/00189.webp)
    no-repeat;
  margin: 0px;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.blog_img {
  text-align: center;
}
.zsTitle {
  background-color: #cce5ff;
  border-radius: 10px;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.zsTitle div {
  margin-left: 10px;
}
a {
  text-decoration: none;
}
.comm-title {
  display: flex;
}
.comm-title div {
  margin: 5px;
}
.comm-title div:last-child {
  /* 最后一个元素靠右浮动 */
  margin-left: auto;
}
.comm-title div i {
  margin: 5px;
}
.item_bottom {
  height: 100px;
  margin: 0 auto !important;
}
.btn-group button {
  background-color: #4caf50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  width: 150px; /* Set a width if needed */
  display: block; /* Make the buttons appear below each other */
}

.btn-group button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>
