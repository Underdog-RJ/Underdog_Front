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
            <span slot="title">课程收藏</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">已购课程</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="flagdialog === '1'">
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
          </div> 
        </div>
        <div v-if="flagdialog === '2'">
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
                  undisable: data.current == page,
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import kecheng from "@/api/ucenterkecheng";
export default {
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      flagdialog: "1",
      data: {}, //课程列表
      data1:{},//课程支付列表
      page: "", //当前页
      limit: 8,
      key: "",

    };
  },
  created() {
    this.getkecheng(1);
  },
  methods: {
    getkecheng(page) {
      kecheng.getkecheng(page, this.limit).then((response) => {
        this.data = response.data.data;
        console.log(this.data.total);
      });
    },
    handleSelect(index) {
      this.flagdialog = index;
      if (index==="1") {
        this.getkecheng(1);
      } else if(index==="2"){
        this.getPayKecheng(1);
        console.log("我到第二页了");
      }
    }, 
    getPayKecheng(page) {
      kecheng.getPayKecheng(page, this.limit).then((response) => {
        this.data1 = response.data.data;
        console.log(this.data1.total);
        console.log(this.data1.items);
      });
    },
    gotoPage(page) {
    kecheng.getkecheng(page, this.limit).then((response) => {
      this.data = response.data.data;
      console.log(this.data.total);
    });
  },
  gotoPage1(page) {
    kecheng.getPayKecheng(page, this.limit).then((response) => {
      this.data1 = response.data.data;
      console.log(this.data1.total);
    });
  },
  },
 
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

