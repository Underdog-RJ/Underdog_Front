<template>
  <div id="aBlogsList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部博客</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">博客类别</span>
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

        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理中...</span
            >
          </section>
          <!-- /无数据提示 结束-->

          <article class="" v-if="data.total > 0">
            <ul class="show" id="">
              <li v-for="item in data.list" :key="item.id" class="show_item">
                <section class="blog-img">
                  <div class="img-float">
                    <img :src="item.firstPicture" class="" :alt="item.title" />
                  </div>
                  <div class="show_left">

                    <div class="title_bolg">
                      <a :href="'/blog/' + item.id" :title="item.title">{{
                        item.title
                      }}</a>
                    </div>
                    <div class="item_center">
                      <span>{{item.descption}}</span>
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
        <!-- 公共分页 开始 -->
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
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
    <div class="m-fixed m-right-bottom m-padding">
      <el-backtop></el-backtop>
    </div>
  </div>
</template>
<script>
import blogApi from "@/api/blog";

export default {
  data() {
    return {
      page: 1, //当前页
      data: {}, //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      searchObj: {}, // 查询表单对象
      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: "",
      gmtCreateSort: "",
      priceSort: ""
    };
  },
  created() {
    //博客第一次查询
    this.initBlogFirst();
    //一级分类额显示
    this.initSubject();
  },
  methods: {
    //1.查询第一页数据
    initBlogFirst() {
      blogApi.getBlogList(1, 8, this.searchObj).then(response => {
        this.data = response.data.data;
        console.log(this.data);
      });
    },
    //2查询所有的分类
    initSubject() {
      blogApi.getAllSubject().then(response => {
        this.subjectNestedList = response.data.data.list;
      });
    },
    //分页切换的方法
    gotoPage(page) {
      blogApi.getBlogList(page, 8, this.searchObj).then(response => {
        this.data = response.data.data;
      });
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
      //点击某个一级分类进行条件查询
      this.gotoPage(1);

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
      //点击某个二级分类进行调价查询
      this.gotoPage(1);
    }
  }
};
</script>
<style scoped>
.title_bolg{
  font-size: 20px;
  font-weight: bold;

}
.show_left{
  margin:10px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
}
.item_bottom{
  height: 50px;
  display: flex;
  justify-content: start;
}
.item_bottom span {
  /* flex: 1; */
  margin-right: 10px;
  
}

.item_center{
  flex:50%;
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
.img-float img{
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
</style>
