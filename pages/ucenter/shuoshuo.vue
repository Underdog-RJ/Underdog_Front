<template>
  <div class="container u_index">
    <div class="sayContent">
      <textarea
        class="textarea_1"
        v-model="ucenterShuoshuo.shuoshuo"
        placeholder="请输入此时此刻的心情"
      >
      </textarea>
      <el-row style="right: -90%">
        <el-button @click="addUcenterShuoshuo" type="primary" plain>发布说说</el-button>
      </el-row>                   
                    <section class="">
                      <section class="lh-bj-list">
                        <ul class="pr10">
                          <li
                            v-for="(comment, index) in data.items"
                            v-bind:key="index"
                          >
                            <div class="noter-txt mt5">
                              <p>{{ comment.shuoshuo}}</p>
                            </div>
                            <div class="of mt5">
                              
                              <span class="fr"
                                >
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                                <font class="fsize12 c-999 ml5">{{
                                  comment.gmtCreate
                                }}</font></span
                              >
                            </div>
                          </li>
                        </ul>
                      </section>
                    </section>
    <!-- 公共分页 开始 -->
    <div> 
    <div class="paging bottom1">
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
              @click.prevent="gotoPage(data.ipage.current - 1)"
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
  </div>
  </div>
</template>

<script>
import shuoshuo from "@/api/ucentershuoshuo";
export default {
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      input: "",
      page: 1, //当前页
      limit: 6,
      data:{},
      ucenterShuoshuo: {
      },
    };
  },
  created() {
    this.initshuoshuo();
  },
  methods: {
    //初始化说说
    initshuoshuo() {
      shuoshuo
        .getPageList(this.page, this.limit)
        .then(response => {
          this.data = response.data.data;
        });
    },
    addUcenterShuoshuo(){
        shuoshuo.addShuoshuo(this.ucenterShuoshuo);
    }
  },
};
</script>

<style scoped>
#sayContent-textarea {
  width: 100%;
  height: 30%;
  background-color: #fff;
  margin-right: 30px;
}
.sayContent {
  flex: 100%;
  background-color: #fff;
  min-height: 500px;
}
.u_index {
  display: flex;
  margin-bottom: 10px;
}
.textarea_1 {
  display: flex;
  width: 98%;
  margin: 1%;
  height: 20%;
  border: solid 1px rgb(20, 20, 20);
  /* outline-color: rgb(1, 1, 235); */
}
textarea:hover {
  border: solid 1px rgb(13, 147, 180);
}
.submit-say {
  line-height: 70px;
  position: absolute;
  left: 80%;
  text-align: center;
}
.el-input {
  margin-right: 300px;
  position: relative;
  height: 30%;
  text-align: center;
}
.bottom1 {
  position:flex;
  bottom:0;
}
</style>