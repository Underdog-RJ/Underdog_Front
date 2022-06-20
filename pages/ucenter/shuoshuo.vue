<template>
  <div>
    <ucenterNav/>
    <div class="container u_index">
    <div class="sayContent">
      <div>
        <textarea
          class="textarea_1"
          v-model="ucenterShuoshuo.shuoshuo"
          placeholder="请输入此时此刻的心情"
        >
        </textarea>
        <el-row style="right: -85%">
          <el-button @click="addUcenterShuoshuo" type="primary" plain
            >发布说说</el-button
          >
        </el-row>
      </div>
      <section class="flex">
        <section class="lh-bj-list flex">
          <ul class="pr10 flex">
            <li v-for="(comment, index) in data.items" v-bind:key="index">
              <div class="noter-txt mt5">
                <p>{{ comment.shuoshuo }}</p>
              </div>
              <span class="fleft">
                <font class="fsize12 c-999 ml5">{{ comment.gmtCreate }}</font>
              </span>
              <span class="fright">
                <a
                  v-if="comment.isHide"
                  @click="setShuoshuohide(comment.id, 0)"
                  style="cursor:pointer"
                  >设为隐私</a
                >
                <a
                  v-else
                  @click="setShuoshuohide(comment.id, 1)"
                  style="cursor:pointer"
                  >取消隐私</a
                >
                <el-divider direction="vertical"></el-divider>
                <a
                  @click="removeUcenterShuoshuo(comment.id)"
                  style="cursor:pointer"
                  >删除</a
                >
              </span>
            </li>
          </ul>
        </section>
      </section>
    </div>
    <div class="bottom1">
      <el-pagination
        @current-change="gotoPage"
        background
        layout="prev, pager, next"
        :total="data.pages * 10"
      >
      </el-pagination>
    </div>
  </div>
  </div>
</template>

<script>
import shuoshuo from "@/api/ucentershuoshuo";
import cookie from "js-cookie";
export default {
  layout: "default",
  name: "",
  data() {
    return {
      input: "",
      page: "", //当前页
      limit: 10,
      data: {},
      ucenterShuoshuo: {},
      id: "1",
      loginInfo:{}
    };
  },
  created() {},
  mounted() {
    //从cookie获取用户信息
    var userStr = cookie.get("underdogedu_ucenter");
    //console.log(userStr)
    //把字符串转换成json对象(js对象)
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
    }
    this.id =" this.userInfo.id";
    this.initshuoshuo();
  },
  methods: {
    //初始化说说
    initshuoshuo() {
      shuoshuo.getPageList(1, this.limit, this.id).then(response => {
        console.log("id是" + this.id);
        this.data = response.data.data;
        console.log("pages" + this.data.pages);
      });
    },
    gotoPage(page) {
      shuoshuo.getPageList(page, this.limit, this.id).then(response => {
        this.data = response.data.data;
      });
    },
    addUcenterShuoshuo() {
      shuoshuo.addShuoshuo(this.ucenterShuoshuo).then(response => {
        this.initshuoshuo();
          this.loginInfo=response.data.data.userInfo;
            cookie.set("underdogedu_ucenter", JSON.stringify(this.loginInfo), {
          domain: "www.feifu.top"
        });
        this.ucenterShuoshuo = {};
      });
    },
    removeUcenterShuoshuo(id) {
      shuoshuo.removeShuoshuo(id).then(() => {
        this.initshuoshuo();
      });
    },
    setShuoshuohide(id, isHide) {
      shuoshuo.setHide(id, isHide).then(() => {
        this.initshuoshuo();
      });
    }
  }
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
  position: relative;
  flex: 100%;
  background-color: #fff;
  min-height: 500px;
}
.fleft {
  position: relative;
  left: -0.5%;
}
.fright {
  position: relative;
  right: -75%;
}
.u_index {
  min-height: 500px;
  margin-bottom: 10px;
  margin: 1;
}

.textarea_1 {
  position: relative;
  width: 90%;
  /* margin: auto; */
  margin-top: 30px;
  height: 10%;
  left: 5%;
  border: solid 1px rgb(20, 20, 20);
  /* outline-color: rgb(1, 1, 235); */
}
.flex {
  position: relative;
}
textarea:hover {
  border: solid 1px rgb(13, 147, 180);
}
font:hover {
  color: rgb(57, 45, 219);
}

.submit-say {
  line-height: 70px;
  position: absolute;
  left: 80%;
  text-align: center;
}
.hidex {
  display: inline;
}
.fshuoshuo {
  position: flex;
  margin: 5%;
}
.hidey {
  display: none;
}
.el-input {
  margin-right: 300px;
  position: relative;
  height: 30%;
  text-align: center;
}
.bottom1 {
  /* position: absolute; */
  margin: auto;
  text-align: center;
  /* top:20%; */
  /* left: 50%;
     bottom: 0;   */
}
</style>
