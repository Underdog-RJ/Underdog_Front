<template>
  <div id="aBlogsList" class="bg-fa of">
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部模型</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">模型类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li
                  v-for="(item, index) in subjectNestedList"
                  :key="index"
                  :class="{ active: oneIndex == index }"
                >
                  <a
                    :title="item.title"
                    href="#"
                    @click="searchOne(item.id, index)"
                  >{{ item.title }}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li
                  v-for="(item, index) in subSubjectList"
                  :key="index"
                  :class="{ active: twoIndex == index }"
                >
                  <a
                    :title="item.title"
                    href="#"
                    @click="searchTwo(item.title, index)"
                  >{{ item.title }}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-alert title="输入图片的大小必须大于512x512" type="success" :closable="false" show-icon></el-alert>
            <el-upload
              class="coverStyle"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :action="BASE_API + '/eduservice/deeplearn/getAllImage'"
              :data="searchObj"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="10">
            <el-alert title="模型输出图片Resize大小为512x512" type="info" :closable="false" show-icon></el-alert>
            <div>
              <ul class="of" id="bna">
                <li v-for="item in img_list" :key="item.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img :src="item.image_path" class="img-responsive-dl" :alt="item.title" />
                    </section>
                    <div class="itemBottom">
                      <!-- <h3 class="hLh20 txtOf">{{ item.name }}</h3> -->
                      <section class="hLh20 of fontColor">TSP:{{item.tsp}}</section>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      BASE_API: "http://127.0.0.1:8222", // 接口API地址
      img_list: [],
      subjectNestedList: [
        {
          id: 0,
          title: "癌症识别",
          children: [
            {
              id: 1,
              title: "FCN"
            },
            {
              id: 2,
              title: "Unet"
            },
            {
              id: 3,
              title: "AttenionUnet"
            },
            {
              id: 4,
              title: "DAF"
            },
            {
              id: 5,
              title: "MAS"
            },
            {
              id: 6,
              title: "TransUnet"
            },
            {
              id: 7,
              title: "SwinUnet"
            }
          ]
        }
      ], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      oneIndex: 0,
      twoIndex: 2,
      searchObj: {}
    };
  },
  mounted() {
    this.searchOne(0, 0);
    this.searchTwo("AttentionUnet", 2);
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = res.data.originalFileImage;
      this.img_list = res.data.list;
    },
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
    //点击某个一级分类，查询对应的二级分类
    searchOne(subjectParentId, index) {
      //把传递index值赋值给oneIndex为了active样式生效
      this.oneIndex = index;

      this.twoIndex = -1;
      this.searchObj.subjectId = "";
      this.subSubjectList = [];

      //把一级分类点击id值，赋值给searchObj
      this.searchObj.subjectParentId = subjectParentId;

      //拿着点击一级分类Id和所有一级分类id进行比较
      //如果id相同，从一级分类里面获取对应的二级分类
      for (let i = 0; i < this.subjectNestedList.length; i++) {
        //获取每个一级分类
        var oneSubject = this.subjectNestedList[i];
        console.log(oneSubject);
        //比较id是否相同
        if (subjectParentId == oneSubject.id) {
          //从一级分类里面获取对应的二级分类
          this.subSubjectList = oneSubject.children;
        }
      }
    },
    //点击某个二级分类实现查询
    searchTwo(subjectId, index) {
      //把index赋值，为了样式生效
      this.twoIndex = index;
      //把二级分类点击id值，赋值给seachObj
      this.searchObj.modelName = subjectId;
    }
  }
};
</script>
<style scoped>
.fontColor{
  margin-top: 20px;
  font-size: 20px;
  color: red;
  font-weight: bold;
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
  height: 512px;
}
</style>