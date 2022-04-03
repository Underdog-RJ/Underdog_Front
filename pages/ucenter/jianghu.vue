<template>
  <div class="container u_blog">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#fff"
          text-color="black"
          active-text-color="#00baf2"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">收藏文章</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="flagdialog === '1'">
          <div class="item">
            <article class="">
              <ul class="show" id="">
                <li v-for="item in blogList" :key="item.id" class="show_item">
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
              <div class="clear"></div>
            </article>
          </div>
          <el-pagination background layout="prev, pager, next" :page-size="size" :total="total1" @current-change="handleChangeBlog">
          </el-pagination>
        </div>
        <div v-if="flagdialog === '2'">
          <div class="item">
            <el-form label-width="100px">
              <el-form-item label="博客标题">
                <el-input
                  v-model="blogInfo.title"
                  placeholder=" 示例：机器学习项目课：从基础到搭建项目视频博客。专业名称注意大小写"
                />
              </el-form-item>
              <!-- 所属分类 TODO -->
              <el-form-item label="博客分类">
                <el-select
                  @change="subjectLevelOneChanged"
                  v-model="blogInfo.subjectParentId"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="subject in subjectOneList"
                    :key="subject.id"
                    :label="subject.title"
                    :value="subject.id"
                  />
                </el-select>

                <!-- 二级分类 -->
                <el-select v-model="blogInfo.subjectId" placeholder="请选择">
                  <el-option
                    v-for="subject in subjectTwoList"
                    :key="subject.id"
                    :label="subject.title"
                    :value="subject.id"
                  />
                </el-select>
              </el-form-item>
              <!-- 博客内容-->
              <el-form-item label="博客内容">
                <tinymce :height="300" v-model="blogInfo.content" />
              </el-form-item>
              <el-form-item label="博客简介">
                <el-input
                  v-model="blogInfo.descption"
                  :rows="10"
                  type="textarea"
                  placeholder="用于展示在页面上的内容"
                />
              </el-form-item>

              <!-- 博客封面-->
              <el-form-item label="博客封面">
                <el-upload
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :action="BASE_API + '/eduvod/eduoss/fileoss'"
                  class="avatar-uploader"
                >
                  <img :src="blogInfo.firstPicture" />
                </el-upload>
              </el-form-item>
              <!-- 赞赏-->
              <el-form-item label="博客赞赏">
                <el-upload
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessForZS"
                  :before-upload="beforeAvatarUploadForZS"
                  :action="BASE_API + '/eduvod/eduoss/fileoss'"
                  class="avatar-uploader"
                >
                  <img :src="blogInfo.zsPicture" />
                </el-upload>
              </el-form-item>
              <el-form-item style="text-align: center">
                <el-button type="warning" @click="saveOrUpdate">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div v-if="flagdialog === '3'">
          <div class="item">
            <article class="">
              <ul class="show" id="">
                <li v-for="item in enjoyList" :key="item.id" class="show_item">
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
              <div class="clear"></div>
            </article>
          </div>
          <el-pagination background layout="prev, pager, next" :page-size="size" :total="total2" @current-change="handleChangeEnjoy">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import subject from "@/api/subject";
import blog from "@/api/blog";
import Tinymce from "@/components/Tinymce/index";
import cookie from "js-cookie";
export default {
  components: { Tinymce }, //声明组件
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      flagdialog: "1",
      blogInfo: {
        title: "",
        subjectId: "", //二级分类id
        subjectParentId: "", //一级分类id
        content: "",
        firstPicture:
          "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg",
        zsPicture:
          "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/88abf95a1dc9325bcb6c3de8001e2e2.jpg",
      },
      subjectOneList: [], //一级分类
      subjectTwoList: [], //二级分类
      blogList: [],
      enjoyList: [],
      BASE_API: "10.1.1.137", // 接口API地址
      uCoin: 0,
      loginInfo: {},
      pageNo1: 1,
      pageNo2: 1,
      size: 5,
      total1: 10,
      total2: 10,
    };
  },
  methods: {
    handleSelect(index) {
      this.flagdialog = index;
    },
    //点击某个一级分类，出发change显示对应二级分类  value默认为id值
    subjectLevelOneChanged(value) {
      //遍历所有的分类，包含一级和二级
      for (var i = 0; i < this.subjectOneList.length; i++) {
        //每一个一级分类
        var oneSubject = this.subjectOneList[i];
        //判断 所有一级分类id和所点击一级分类id是否一样
        if (value === oneSubject.id) {
          //从一级分类中获取所有的二级分类
          this.subjectTwoList = oneSubject.children;
          this.blogInfo.subjectId = "";
        }
      }
    },

    // 上传封面成功调用的方法
    handleAvatarSuccess(res, file) {
      this.blogInfo.firstPicture = res.data.url;
    },
    // 上传封面成功调用的方法
    handleAvatarSuccessForZS(res, file) {
      this.blogInfo.zsPicture = res.data.url;
    },
    // 上传之前调用的方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChangeEnjoy(e){
        this.pageNo2 =e;
        this.EnjoyBlogList()
    },
    handleChangeBlog(e){
      this.pageNo1 = e;
      this.getBlogByUserId()
    },
    // 上传之前调用的方法
    beforeAvatarUploadForZS(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //查询所有的一级分类
    getOneSubject() {
      subject.getSubjectList().then((response) => {
        this.subjectOneList = response.data.data.list;
      });
    },
    saveOrUpdate() {
      //判断添加还是修该
      if (!this.blogInfo.id) {
        //添加
        this.addblog();
      } else {
        this.updateblog();
      }
    },
    //添加博客
    addblog() {
      blog.addBlogInfo(this.blogInfo).then((response) => {
        this.$message({
          type: "success",
          message: "添加博客信息成功!",
        });
        this.loginInfo = response.data.data.userInfo;
        cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
          domain: "www.feifu.top",
        });
        location.reload();
      });
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return blog.deleteDataById(id);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          location.reload();
        })
        .catch((response) => {
          // 失败
          if (response === "cancel") {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          } else {
            this.$message({
              type: "error",
              message: "删除失败",
            });
          }
        });
    },
    //修该博客
    updateblog() {
      blog.updateblogInfoId(this.blogInfo).then((response) => {
        this.$message({
          type: "success",
          message: "修该博客信息成功!",
        });
        location.reload();
      });
    },
    async getBlogByUserId() {
      const res = await blog.getBlogByUserId(this.pageNo1, this.size);
      this.total1 = res.data.data.list.total;
      console.log(this.total1)
      this.blogList = res.data.data.list.results;
    },
    handleEdit(id) {
      this.blogInfo.id = id;
      blog.getBlogInfo(id).then((response) => {
        this.blogInfo = response.data.data.eduBlog;
        console.log(this.blogInfo);
      });
      this.flagdialog = "2";
    },
    async EnjoyBlogList() {
      const res = await blog.EnjoyBlogList(this.pageNo2,this.size);
      this.enjoyList = res.data.data.list.results;
      this.total2 = res.data.data.list.total;
    },
  },
  mounted() {
    this.getOneSubject();
    this.getBlogByUserId();
    this.EnjoyBlogList();
  },
  created() {},
};
</script>

<style scoped>
.operation {
  margin-left: auto;
}
.title_bolg {
  font-size: 20px;
  font-weight: bold;
}
.show_left {
  margin: 10px;
  display: flex;
  width: 100%;
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
.active {
  background: greenyellow;
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
.avatar {
  float: left;
  margin-top: 300px !important;
  z-index: 9999;
}
.avatar-uploader img {
  width: 30%;
}
.item {
  margin: 20px;
}
.u_blog {
  margin-bottom: 30px !important;
  min-height: 500px;
  background-color: #fff;
}
</style>
