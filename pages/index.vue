<template>
  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption" style="height:348px">
      <div class="swiper-wrapper">
        <div
          v-for="banner in bannerList"
          :key="banner.id"
          class="swiper-slide"
          style="background: #040B1B;"
        >
          <a  :href="banner.linkUrl">
            <img :src="banner.imageUrl" :alt="banner.title" />
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </div>
    <!-- 幻灯片 结束 -->
  
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in eduList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                       
                        class="img-responsive"
                        :alt="course.title"
                      />
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1"
                          >开始学习</a
                        >
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a
                        :href="'/course/'+course.id"
                        :title="course.title"
                        class="course-title fsize18 c-333"
                        >{{ course.title }}</a
                      >
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span
                        class="fr jgTag bg-green"
                        v-if="Number(course.price) === 0"
                      >
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/course" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                        <img
                          :alt="teacher.name"
                          :src="teacher.avatar"
                        />
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666"
                        >{{teacher.name}}</a
                      >
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999"
                        >{{teacher.career}}</span
                      >
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">
                        {{teacher.intro}}
                      </p>
                    </div>
                  </section>
                </li>
              
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/teacher" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->

      <!-- 博客开始 -->
      <div class="container blogStyle">
        <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门博客</span>
            </h2>
          </header>
           <ul class="show" id="">
              <li v-for="item in blogList" :key="item.id" class="show_item">
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
              <section class="tac pt20">
              <a href="/blog" title="全部博客" class="comm-btn c-btn-2">全部博客</a>
            </section>
      </div>
      <!-- 博客结束 -->
    </div>
     <div class="m-fixed m-right-bottom m-padding">
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<script>
import banner from "@/api/banner";
import index from "@/api/index";
export default {
  data() {
    return {
      swiperOption: {
        //配置分页
        pagination: {
          el: ".swiper-pagination" //分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev" //前一页dom节点
        }
      },
      //banner数组
      bannerList: [],
      eduList: [],
      teacherList: [],
       blogList:[]
    };
  },
  created() {
    this.getbannerList();
    this.getHotCourseTeacher();
  },
  methods: {
    //调用热门课程和名师和博客
    getHotCourseTeacher() {
      index.getIndexData().then(response => {
        this.eduList = response.data.data.eduList;
        this.teacherList = response.data.data.teacherList;
        this.blogList = response.data.data.blogList;

      });
    },

    //查询banner数据
    getbannerList() {
      banner.getListBanner().then(response => {
        this.bannerList = response.data.data.bannerList;
        //console.log(this.bannerList)
      });
    }
  }
};
</script>
<style scoped>
.blogStyle{
  margin-top: 20px;
}
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
  /* background-color: #eee; */
}
.show_item {
  background-color: #eee;
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
  margin: 20px;
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
