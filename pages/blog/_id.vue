<template>
  <div id="aBlogsList" class="aBlogsList bg-fa of">
    <div class="blogBg">
      <div class="navBody">
        <div class="navTitle">目录</div>
        <ol class="js-toc navStyle"></ol>
      </div>

      <!-- /博客详情 开始 -->
      <section class="container_blog">
        <div class="mt20 c-infor-box">
          <article class>
            <section class="mr30">
              <div class="i-box">
                <div>
                  <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                    <a name="c-i" class="current" title="博客详情">博客详情</a>
                  </section>
                </div>

                <div class="comm-title">
                  <div>
                    <img src alt />
                  </div>
                  <div>
                    <i class="el-icon-s-custom"></i>
                    {{ blogInfo.authorNickname }}
                  </div>
                  <div>
                    <i class="el-icon-view"></i>
                    {{ blogInfo.viewCount }}
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
                        <img :src="blogInfo.firstPicture" alt />
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
                      <div id="contentId" class="course-txt-body js-toc-content">
                        <p class="markdown-body" highlight v-html="blogInfo.content"></p>
                      </div>
                    </div>
                  </div>

                  <div class="ml10 mr10 pt20 zsTitle">
                    <div>
                      版权声明：本文为博主原创文章，遵循CC 4.0
                      BY-SA版权协议,转载请附上原文出处链接和本声明，UnderdogEdu！
                    </div>
                    <div>
                      <span>本文链接：</span>
                      <a href="#">www.underdogedu.com</a>
                    </div>
                  </div>

                  <div style="text-align: center" v-if="blogInfo.appreciation === true">
                    <el-popover placement="bottom" title="打赏" width="200" trigger="click">
                      <img :src="blogInfo.zsPicture" alt style="height: 75px" />
                      <el-button type="primary" slot="reference">赞赏</el-button>
                    </el-popover>

                    <el-button v-show="flagEnjoy == false" type="warning" @click="handleEnjoy">收藏</el-button>

                    <el-button
                      v-show="flagEnjoy == true"
                      type="warning"
                      @click="handleRemoveEnjoy"
                    >取消收藏</el-button>
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
                              <!-- <section class="n-reply-wrap">
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
                              </section>-->
                              <emijo-com
                                :clearBtn="flagInfo"
                                :parentId="''"
                                @getDataFromSon="handleCommentFromSon"
                              ></emijo-com>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class>
                        <section class="question-list lh-bj-list pr">
                          <ul class="pr10">
                            <li v-for="(comment, index) in data.items" v-bind:key="index">
                              <aside class="noter-pic">
                                <img width="50" height="50" class="picImg" :src="comment.avatar" />
                              </aside>
                              <div class="of">
                                <span class="fl">
                                  <font class="fsize12 c-blue">{{ comment.nickname }}</font>
                                  <font class="fsize12 c-999 ml5">评论：</font>
                                </span>
                              </div>
                              <div class="noter-txt mt5">
                                <p>{{ comment.content }}</p>
                              </div>
                              <div class="of mt5">
                                <div @click="handleCommentReplay(comment)">
                                  <i class="el-icon-chat-dot-round"></i>
                                  <span>回复</span>
                                </div>
                                <span class="fr">
                                  <font class="fsize12 c-999 ml5">
                                    {{
                                    comment.gmtCreate
                                    }}
                                  </font>
                                </span>
                              </div>
                              <div>
                                <div
                                  :class="
                                    currentCommentIndex == comment.id
                                      ? ''
                                      : 'yincang'
                                  "
                                >
                                  <emijo-com
                                    :clearBtn="flagInfo"
                                    :parentId="comment.id"
                                    :nickname="comment.nickname"
                                    @getDataFromSon="handleCommentFromSon"
                                  ></emijo-com>
                                </div>
                              </div>
                              <div class="sonComment" v-show="comment.childList.length > 0">
                                <div v-for="commentson in comment.childList" :key="commentson.id">
                                  <el-row>
                                    <el-col :span="2">
                                      <el-avatar :size="50" :src="commentson.avatar"></el-avatar>
                                    </el-col>
                                    <el-col :span="20">
                                      <div class="of">
                                        <span class="fl">
                                          <font class="fsize12 c-blue">{{ commentson.nickname }}</font>
                                          <font
                                            class="fsize12 c-999 ml5"
                                          >@{{ commentson.replayName }}</font>
                                        </span>
                                      </div>
                                      <div class="noter-txt mt5">
                                        <p>{{ commentson.content }}</p>
                                      </div>
                                      <div class="of mt5">
                                        <div
                                          @click="
                                            handleCommentReplay(commentson)
                                          "
                                        >
                                          <i class="el-icon-chat-dot-round"></i>
                                          <span>回复</span>
                                        </div>
                                        <span class="fr">
                                          <font class="fsize12 c-999 ml5">
                                            {{
                                            commentson.gmtCreate
                                            }}
                                          </font>
                                        </span>
                                      </div>
                                      <div>
                                        <div
                                          :class="
                                            currentCommentIndex == commentson.id
                                              ? ''
                                              : 'yincang'
                                          "
                                        >
                                          <emijo-com
                                            :clearBtn="flagInfo"
                                            :parentId="comment.id"
                                            :nickname="commentson.nickname"
                                            @getDataFromSon="
                                              handleCommentFromSon
                                            "
                                          ></emijo-com>
                                        </div>
                                      </div>
                                    </el-col>
                                  </el-row>
                                </div>

                                <!-- 当前有多少条评论 -->
                                <div v-show="comment.sonTotal > 2">
                                  <div v-if="!comment.flagShow">
                                    共{{ comment.sonTotal }}条回复,
                                    <span
                                      class="fontBlue"
                                      @click="
                                        handleLookCommentInfo(comment, index)
                                      "
                                    >点击查看</span>
                                  </div>
                                  <div v-if="comment.flagShow">
                                    <el-pagination
                                      background
                                      layout="prev, pager, next"
                                      :page-size="5"
                                      :total="comment.sonTotal"
                                      @current-change="
                                        handleChangeChildComment(
                                          $event,
                                          index,
                                          comment
                                        )
                                      "
                                    ></el-pagination>
                                  </div>
                                </div>
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
                        >首</a>
                        <a
                          :class="{ undisable: !data.hasPrevious }"
                          href="#"
                          title="前一页"
                          @click.prevent="gotoPage(data.current - 1)"
                        >&lt;</a>
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
                        >{{ page }}</a>
                        <a
                          :class="{ undisable: !data.hasNext }"
                          href="#"
                          title="后一页"
                          @click.prevent="gotoPage(data.current + 1)"
                        >&gt;</a>
                        <a
                          :class="{ undisable: !data.hasNext }"
                          href="#"
                          title="末页"
                          @click.prevent="gotoPage(data.pages)"
                        >末</a>
                        <div class="clear" />
                      </div>
                      <!-- 公共分页 结束 -->
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </article>
          <!-- <li
            class="emojiList"
            v-for="(item, index) in emojis"
            :key="index"
            @click="handleEmoji(item)"
          >
            {{ item.text }}
          </li>-->
          <div class="clear"></div>
        </div>
      </section>

      <!-- 右侧按钮 -->
      <div class="navRight">
        <div class="navItem">
          <el-badge :value="12" class="item">
            <a href="#i-art-comment">
              <div class="circleBtn">
                <i class="el-icon-chat-dot-round"></i>
              </div>
            </a>
          </el-badge>
        </div>
        <div class="navItem">
          <a href="#c-i-tabTitle">
            <div class="circleBtn">
              <i class="el-icon-s-promotion"></i>
            </div>
          </a>
        </div>
      </div>
      <!-- <VueEmoji ref="emoji" @input="onInput"  /> -->
      <!-- /博客详情 结束 -->
      <!-- <div class="m-fixed m-right-bottom m-padding">
        <el-backtop></el-backtop>
      </div>-->
    </div>
  </div>
</template>

<script>
import blogApi from "@/api/blog";
import comment from "@/api/blogcomment";
import Prism from "prismjs";
import cookie from "js-cookie";
import "mavon-editor/dist/css/index.css";
import $ from "jquery";
import emijoCom from "@/components/emijoCom";
// import VueEmoji from 'emoji-vue'
export default {
  components: {
    emijoCom
  },
  //和页面异步开始的
  asyncData({ params, error }) {
    return { blogId: params.id };
  },
  data() {
    return {
      data: {},
      page: 1,
      flagEnjoy: false,
      limit: 4,
      total: 10,
      blogInfo: {
        type: 1
      },
      blogId: "",
      comment: {
        content: "",
        blogId: ""
      },
      loginInfo: {},
      test: "sadasd",
      currentCommentIndex: "",
      flagInfo: false
    };
  },
  created() {},

  mounted() {
    this.initBlogInfo();
    this.initComment();
    var userStr = cookie.get("underdogedu_ucenter");
    if (!this.$isEmpty(userStr)) {
      this.initEnjoy();
    }

    this.initDir();
  },
  updated() {
    // process.browser &&
    //   document
    //     .querySelectorAll("code")
    //     .forEach((block) => Prism.highlightElement(block));
  },
  watch: {},
  methods: {
    async handleCommentFromSon(value) {
      this.comment.blogId = this.$route.params.id;
      this.comment.parentId = value.parentId;
      this.comment.content = value.inputData;
      if (this.$isEmpty(this.comment.content)) {
        this.$message("内容不能为空");
        return;
      }
      this.comment.replayName = value.nickname;
      const res = await comment.addComment(this.comment);
      if (res.data.code == 20000) {
        this.$message("发布评论成功,您的评论在最后一页呦！！！");

        // 如果一级评论则直接更新
        if (this.$isEmpty(this.comment.parentId)) {
          this.initComment();
        }
        // 如果说是二级评论，则找到对应的索引值
        else {
          let i = this.data.items.findIndex(item => item.id == value.parentId);
          if (i != -1) {
            let currentComment = this.data.items[i];
            currentComment.sonTotal++;
            if (currentComment.sonTotal > 5) {
              currentComment.flagShow = true;
            }
            if (this.$isEmpty(currentComment.page)) {
              currentComment.page = 1;
            }
            this.handleChangeChildComment(
              currentComment.page,
              i,
              currentComment
            );
          } else {
            this.$message("发布评论失败！！！");
          }
        }
        // 清空内容
        this.flagInfo = !this.flagInfo;
      } else {
        this.$message("发布评论失败！！！");
      }
    },
    handleCommentReplay(comment) {
      this.currentCommentIndex = comment.id;
    },
    updateBot() {
      this.test1();
      this.initDir();
    },
    // 初始化目录插件
    initDir() {
      tocbot.init({
        // Where to render the table of contents.
        tocSelector: ".js-toc",
        // Where to grab the headings to build the table of contents.
        contentSelector: ".js-toc-content",
        // Which headings to grab inside of the contentSelector element.
        headingSelector: "h1, h2, h3,h4,h5",
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,
        // 是否需要折叠
        collapseDepth: 100,
        // 禁止实时滚动
        disableTocScrollSync: true
      });
    },
    test1() {
      let target = document.getElementById("contentId");
      this.setTargetId(target, "h1");
      this.setTargetId(target, "h2");
      this.setTargetId(target, "h3");
      this.setTargetId(target, "h4");
      this.setTargetId(target, "h5");
    },
    setTargetId(target, val) {
      let h1s = target.getElementsByTagName(val);
      for (let i = 0; i < h1s.length; i++) {
        let a_id = h1s[i].children[0].getAttribute("id");
        h1s[i].setAttribute("id", a_id);
      }
    },
    //初始化收藏
    async initEnjoy() {
      const res = await blogApi.IsEnjoyBlog(this.blogId);
      this.flagEnjoy = res.data.data.flag;
      console.log(this.flagEnjoy);
    },
    async handleRemoveEnjoy() {
      const res = await blogApi.RemoveEnjoyBlog(this.blogId);
      this.flagEnjoy = false;
    },
    //初始化评论
    initComment() {
      comment
        .getPageList(this.$route.params.id, this.page, this.limit)
        .then(response => {
          this.data = response.data.data;
          this.data.items.forEach(item => (item.flagShow = false));
        });
    },
    // 展开详情
    async handleLookCommentInfo(comment, index) {
      if (this.$isEmpty(comment.page)) {
        comment.page = 1;
      }
      const res = await blogApi.commentChild(comment.id, comment.page, 5);
      if (res.data.code == 20000) {
        comment.childList = res.data.data.list;
      }
      comment.flagShow = true;

      this.$set(this.data.items, index, comment);
    },
    // 翻页问题
    async handleChangeChildComment(e, index, comment) {
      comment.page = e;
      const res = await blogApi.commentChild(comment.id, e, 5);
      if (res.data.code == 20000) {
        comment.childList = res.data.data.list;
      }
      this.$set(this.data.items, index, comment);
    },
    // 添加评论
    addComment() {
      this.comment.blogId = this.$route.params.id;
      comment.addComment(this.comment).then(response => {
        if (response.data.success) {
          this.comment.content = "";
          this.initComment();
          this.loginInfo = response.data.data.userInfo;
          cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
            domain: "www.feifu.top"
          });
          location.reload();
        }
      });
    },
    gotoPage(page) {
      comment
        .getPageList(this.$route.params.id, page, this.limit)
        .then(response => {
          this.data = response.data.data;
        });
    },
    //查询博客详情信息
    initBlogInfo() {
      console.log(this.blogId);
      blogApi.getBlogInfo(this.blogId).then(response => {
        this.blogInfo = response.data.data.eduBlog;
        // process.browser &&
        //   document
        //     .querySelectorAll("pre code")
        //     .forEach((block) => Prism.highlightElement(block));

        // console.log(this.blogInfo);
      });
      setTimeout(() => {
        this.updateBot();
      }, 200);
    },
    async handleEnjoy() {
      var userStr = cookie.get("underdogedu_ucenter");
      if (this.$isEmpty(userStr)) {
        this.$message.success("请先登录后收藏");
      } else {
        const res = await blogApi.enjoyBlog(this.blogId);
        this.flagEnjoy = true;
      }
    }
  }
};
</script>
<style scoped>
.circleBtn {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
}
.navRight {
  position: fixed;
  height: 200px;
  width: 100px;
  background: transparent;
  right: 40px;
  top: 200px;
}
.navItem {
  margin-bottom: 20px;
}

.navBody {
  width: 350px;
  height: 500px;
  background: #fff;
  padding: 20px 5px 50px 20px;
  position: fixed;
  left: 50px;
  top: 100px;
  overflow: hidden;
  border-radius: 20px;
}
.navTitle {
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid #e4e6eb;
}

.navStyle {
  height: inherit;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
}

.toc-list-item {
  padding: 10px;
}
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
