<template>

  <div id="aBlogsList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部直播</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">直播类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#">全部</a>
                </li>
                <li
                  v-for="(item, index) in subjectNestedList"
                  :key="index"
                  :class="{ active: oneIndex == index }"
                >
                  <a
                    :title="item.title"
                    href="#"
                    @click="searchOne(item.id, index)"
                    >{{ item.title }}</a
                  >
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
                    @click="searchTwo(item.id, index)"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
      </section>
      <div class="mt40">
        <!-- /无数据提示 开始-->
        <section class="no-data-wrap" v-if="livingList.length == 0">
          <em class="icon30 no-data-ico">&nbsp;</em>
          <span class="c-666 fsize14 ml10 vam"
            >没有相关数据，小编正在努力整理中...</span
          >
        </section>
        <!-- /无数据提示 结束-->

        <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="livingList.length > 0">
            <ul class="of" id="bna">
              <li v-for="item in livingList" :key="item.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :src="item.livingCover"
                      class="img-responsive"
                      :alt="item.livingName"
                    />
                    <div class="cc-mask">
                      <a
                        :href="'/living/' + item.teacherId"
                        title="开始学习"
                        class="comm-btn c-btn-1"
                        >立即观看</a
                      >
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :href="'/living/' + item.teacherId"
                      :title="item.livingName"
                      class="course-title fsize18 c-333"
                      >{{ item.livingName }}</a
                    >
                  </h3>
                  <section class="mt10 hLh20 of">
                  
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">讲师:{{ item.teacherName }}</i>
                      |
                      <i class="c-999 f-fA">{{item.gmtCreate}}</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
      </div>
    </section>
    <!-- /课程列表 结束 -->
    <div class="m-fixed m-right-bottom m-padding">
      <el-backtop></el-backtop>
    </div>
  </div>
</template>
<script>
import living from "@/api/living";
import blogApi from "@/api/blog";
export default {
  data() {
    return {
      livingList: [],
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      page: 1, //当前页
      oneIndex: -1,
      twoIndex: -1,
      searchObj: {} // 查询表单对象
    };
  },
  methods: {
    //2查询所有的分类
    initSubject() {
      blogApi.getAllSubject().then(response => {
        this.subjectNestedList = response.data.data.list;
      });
    },
    async getAllLivingList() {
      const res = await living.getAllLiving();
      console.log(res);
      if (res.data.code === 20000) {
        this.livingList = res.data.data.list;
        console.log(this.livingList.length);
      }
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
      this.searchObj.subjectId = subjectId;
    }
  },
  created() {
    this.getAllLivingList();
    this.initSubject();
  }
};
</script>
<style scoped>
.active {
  background: greenyellow;
}
</style>

