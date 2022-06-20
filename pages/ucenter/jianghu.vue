<template>
  <div>
    <ucenterNav />
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
                          <dir style="margin-left: auto">
                            <el-button
                              type="danger"
                              @click="handleDelete(item.id)"
                              >删除</el-button
                            >
                            <el-button
                              type="primary"
                              @click="handleBtnUpdate(item)"
                              >修改</el-button
                            >
                          </dir>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
                <div class="clear"></div>
              </article>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="size"
              :total="total1"
              @current-change="handleChangeBlog"
            >
            </el-pagination>
          </div>
          <div v-if="flagdialog === '2'">
            <div class="item">
              <el-form
                label-width="100px"
                :model="blogInfo"
                ref="blogInfoRef"
                :rules="blogInfoRules"
              >
                <el-form-item label="博客标题" prop="title">
                  <el-input
                    v-model="blogInfo.title"
                    placeholder=" 示例：机器学习项目课：从基础到搭建项目视频博客。专业名称注意大小写"
                  />
                </el-form-item>
                <!-- 所属分类 TODO -->
                <el-form-item label="博客分类" prop="subjectId">
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
                <!-- <el-form-item label="博客内容">
                  <tinymce :height="300" v-model="blogInfo.content" />
                </el-form-item> -->
                <el-form-item label="博客内容" prop="mdContent">
                  <!-- <tinymce :height="300" v-model="blogInfo.content" /> -->
                  <mavon-editor
                    ref="md"
                    v-model="blogInfo.mdContent"
                    @change="handleMarkDown"
                    @imgAdd="imgAdd"
                    class="mavonSytle"
                  />
                </el-form-item>
                <el-form-item label="简介/封面">
                  <el-row :gutter="30">
                    <el-col :span="11">
                      <el-upload
                        class="coverStyle"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :action="BASE_API + '/eduvod/eduoss/fileoss'"
                      >
                        <img
                          v-if="
                            blogInfo.firstPicture != undefined &&
                            blogInfo.firstPicture != ''
                          "
                          :src="blogInfo.firstPicture"
                          class="fileUplpadStyle"
                        />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </el-col>
                    <!-- <el-col :span="1" v-show="firstPictureFlag">
                      <i class="el-icon-delete"></i>
                    </el-col> -->
                    <el-col :span="12">
                      <el-input
                        v-model="blogInfo.descption"
                        :rows="10"
                        :autosize="{ minRows: 6, maxRows: 6 }"
                        type="textarea"
                        placeholder="用于展示在页面上的内容,如果为空默认使用标题作为简介。"
                      />
                    </el-col>
                  </el-row>
                </el-form-item>

                <!-- 博客封面-->
                <!--  <el-form-item label="博客封面">
                    <el-upload
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                      :action="BASE_API + '/eduvod/eduoss/fileoss'"
                      class="avatar-uploader"
                    >
                      <img :src="blogInfo.firstPicture" />
                    </el-upload>
                  </el-form-item> -->
                <!-- 赞赏-->
                <!-- <el-form-item label="博客设置">
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">开启赞赏</el-radio>
                    <el-radio :label="6">关闭赞赏</el-radio>
                  </el-radio-group>
                </el-form-item> -->
                <el-form-item style="text-align: center">
                  <el-button type="warning" @click="saveOrUpdate"
                    >保存</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div v-if="flagdialog === '3'">
            <div class="item">
              <article class="">
                <ul class="show" id="">
                  <li
                    v-for="item in enjoyList"
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
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="size"
              :total="total2"
              @current-change="handleChangeEnjoy"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import subject from "@/api/subject";
import ossApi from "@/api/vod";
import blog from "@/api/blog";
import Tinymce from "@/components/Tinymce/index";
import cookie from "js-cookie";
require("mavon-editor/dist/css/index.css");
export default {
  components: { Tinymce }, //声明组件
  layout: "default",
  name: "",
  data() {
    return {
      blogInfoRules: {
        title: [{ required: true, message: "请输入博客名称", trigger: "blur" }],
        subjectId: [
          { required: true, message: "请选择博客类别", trigger: "blur" },
        ],
        mdContent: [
          { required: true, message: "请输入博客内容", trigger: "blur" },
        ],
      },
      markDown: "",
      flagdialog: "1",
      btnFlag: false,
      blogInfo: {
        title: "",
        subjectId: "", //二级分类id
        subjectParentId: "", //一级分类id
        content: "",
        firstPicture: "",
      },
      subjectOneList: [], //一级分类
      subjectTwoList: [], //二级分类
      blogList: [],
      enjoyList: [],
      BASE_API: "http://127.0.0.1:8222", // 接口API地址
      uCoin: 0,
      loginInfo: {},
      pageNo1: 1,
      pageNo2: 1,
      size: 5,
      total1: 10,
      total2: 10,
      firstPictureFlag: false,
    };
  },
  methods: {
    handleSelect(index) {
      this.flagdialog = index;
      if (index == "2") {
        this.blogInfo = { subjectId: "", subjectParentId: "" };
      }
    },
    //点击某个一级分类，出发change显示对应二级分类  value默认为id值
    subjectLevelOneChanged(value, flag) {
      //遍历所有的分类，包含一级和二级
      for (var i = 0; i < this.subjectOneList.length; i++) {
        //每一个一级分类
        var oneSubject = this.subjectOneList[i];
        //判断 所有一级分类id和所点击一级分类id是否一样
        if (value === oneSubject.id) {
          //从一级分类中获取所有的二级分类
          this.subjectTwoList = oneSubject.children;
          if (flag == undefined) {
            this.blogInfo.subjectId = "";
          }
        }
      }
    },
    // 自定义图片上传功能
    async imgAdd(pos, file) {
      let imgData = new FormData();
      imgData.append("file", file);
      const res = await ossApi.ossFile(imgData);
      this.$refs.md.$img2Url(pos, res.data.data.url);
    },
    // md5文档更新触发
    handleMarkDown(value, render) {
      // this.blogInfo.content = this.$refs.md.d_render;
    },
    // 上传封面成功调用的方法
    handleAvatarSuccess(res, file) {
      // this.firstPictureFlag = true;
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
    //
    handleChangeEnjoy(e) {
      this.pageNo2 = e;
      this.EnjoyBlogList();
    },
    handleChangeBlog(e) {
      this.pageNo1 = e;
      this.getBlogByUserId();
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
      // 获取html的字段
      this.blogInfo.content = this.$refs.md.d_render;
      // 字段检验逻辑
      this.$refs.blogInfoRef.validate((valid) => {
        if (valid) {
          //判断添加还是修改
          // 如果首图为空，给默认值
          if (this.$isEmpty(this.blogInfo.firstPicture)) {
            this.blogInfo.firstPicture =
              "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg";
          }
          // 如果简介为空，则给一个标题
          if (this.$isEmpty(this.blogInfo.descption)) {
            this.blogInfo.descption = this.blogInfo.title;
          }
          if (!this.blogInfo.id) {
            //添加
            this.addblog();
          } else {
            this.updateblog();
          }
          window.location.reload();
        } else {
          this.$message("字段检验失败");
        }
      });
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
      });
    },
    // 删除文章
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
          this.getBlogByUserId();
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
      });
    },
    // 根据用户id获取用户的博客列表
    async getBlogByUserId() {
      const res = await blog.getBlogByUserId(this.pageNo1, this.size);
      this.total1 = res.data.data.list.total;
      this.blogList = res.data.data.list.results;
    },
    handleEdit(id) {
      this.blogInfo.id = id;
      blog.getBlogInfo(id).then((response) => {
        this.blogInfo = response.data.data.eduBlog;
      });
      this.flagdialog = "2";
    },
    async EnjoyBlogList() {
      const res = await blog.EnjoyBlogList(this.pageNo2,5);
      this.enjoyList = res.data.data.list.results;
      this.total2 = res.data.data.list.total;
    },
    handleBtnUpdate(item) {
      this.flagdialog = "2";
      var str = JSON.stringify(item);
      this.blogInfo = JSON.parse(str);
      this.subjectLevelOneChanged(this.blogInfo.subjectParentId, false);
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
.fileUplpadStyle {
  display: block;
  width: 100%;
  height: 100%;
}
.coverStyle {
  width: 100%;
  height: 132px;
  box-sizing: border-box;
  border: 2px dashed #ebebeb;
  text-align: center;
  line-height: 132px;
}
.coverStyle img {
  width: 100%;
  height: 132px;
}
.mavonSytle {
  height: 500px;
  overflow: scroll;
}
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
