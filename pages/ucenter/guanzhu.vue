<template>
  <div class="container u_guanzhu">
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
            <span slot="title">添加好友</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">新的朋友</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">我的关注</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-message"></i>
            <span slot="title"
              >您的消息
              <span>{{ unReadMessageCount }}</span>
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="flagdialog === '1'">
          <div class="sousuo">
            <div class="inputSearch">
              <el-input v-model="name" placeholder="请输入姓名"></el-input>
            </div>
            <div style="float:left">
              <el-button type="primary" size="small" round @click="search"
                >全站搜索</el-button
              >
            </div>
          </div>
          <div>
            <div v-for="item in userList" class="item" :key="item.id">
              <div class="avatar">
                <el-avatar :src="item.avatar"></el-avatar>
              </div>
              <div class="show">
                <div>{{ item.nickname }}</div>
                <div>{{ item.signature || "TA很懒，什么都没有留下...." }}</div>
              </div>
              <div class="operation">
                <el-button type="success" size="mini" @click="GoPage(item.id)">进入Ta的主页</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleGuanzhu(item.id)"
                  >关注</el-button
                >
                <el-button
                  type="warning"
                  size="mini"
                  @click="handleLahei(item.id)"
                  >拉黑</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '2'">
          <div v-for="item in newsList" class="item" :key="item.id">
            <div class="avatar">
              <el-avatar :src="item.avatar"></el-avatar>
            </div>
            <div class="show">
              <div>{{ item.nickname }}</div>
              <div>{{ item.signature || "TA很懒，什么都没有留下...." }}</div>
            </div>
            <div class="operation">
              <el-button type="success" size="mini"  @click="GoPage(item.id)">进入Ta的主页</el-button>
              <el-button
                type="primary"
                size="mini"
                @click="handleAgree(item.reqId)"
                >同意</el-button
              >
              <el-button
                type="warning"
                size="mini"
                @click="handleReject(item.reqId)"
                >拒绝</el-button
              >
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '3'">
          <div
            v-for="item in friendList"
            class="item"
            :key="item.id"
            @click="toChat(item.id, item.avatar)"
          >
            <div class="avatar">
              <el-avatar :src="item.avatar"></el-avatar>
            </div>
            <div class="show">
              <div>{{ item.nickname }}</div>
              <div>{{ item.signature || "TA很懒，什么都没有留下...." }}</div>
            </div>
            <div class="operation">
              <el-button type="success" size="mini"  @click="GoPage(item.id)">进入Ta的主页</el-button>
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '4'">
          <div id="msg" class="msgScroll">
            <div
              v-for="(item, index) in messageList"
              :key="index"
              class="oneMsg"
            >
              <div
                v-if="item.type == 1"
                class="textLine textUser"
                style="flex-direction:row-reverse;"
              >
                <el-avatar
                  :src="userAvatar"
                  shape="square"
                  :size="27"
                  style="margin-left:5px"
                ></el-avatar>
                <text style="margin: 0 10upx;">:</text>
                <div class="textTypeOwn">
                  <div class="other_user">{{ item.msg }}</div>
                </div>
              </div>
              <div v-if="item.type == 2" class="textLine textFriend">
                <el-avatar
                  :src="friendAvatar"
                  shape="square"
                  :size="27"
                  style="margin-right:5px"
                ></el-avatar>
                <text style="margin: 0 .5em;">:</text>
                <div class="textType">
                  <div class="self-user">{{ item.msg }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="sousuo">
            <div class="inputSearch">
              <el-input v-model="messageValue" placeholder="消息"></el-input>
            </div>
            <div style="float:left">
              <el-button type="primary" size="small" round @click="sendMsg"
                >发送</el-button
              >
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '5'">
          <div
            v-for="item in UnUseList"
            class="item"
            :key="item.id"
            @click="toChat(item.id, item.avatar)"
          >
            <div class="avatar">
              <el-avatar :src="item.avatar"></el-avatar>
            </div>
            <div class="show">
              <div>{{ item.nickname }}</div>
            </div>
            <div class="operation">
              <span style="color:teal;font-size:15px;margin-right:5px"
                >消息数量：{{ item.count }}</span
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ganzhu from "@/api/ucenterguanzhu";
import cookie from "js-cookie";
export default {
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      messageValue: "",
      userId: "",
      friendId: "",
      type: 0,
      flagdialog: "1",
      name: "",
      userList: [],
      userInfo: {},
      newsList: [],
      friendList: [],
      messageList: [],
      userAvatar: "",
      friendAvatar: "",
      path: "10.1.1.137:11010/ws",
      socket: {},
      message: {
        type: 0,
        tbChatRecord: {
          id: "",
          userId: "",
          friendId: "",
          msg: ""
        },
        ext: ""
      },
      unReadMessageList: [],
      UnUseList: []
    };
  },
  mounted() {
    //this.userInfo = this.$store.state.userInfo;
      //从cookie获取用户信息
      var userStr = cookie.get("underdogedu_ucenter");
      //console.log(userStr)
      //把字符串转换成json对象(js对象)
      if (userStr) {
        this.userInfo = JSON.parse(userStr);
        console.log("mounted")
      }
    this.userId = this.userInfo.id;
    this.userAvatar = this.userInfo.avatar;
    this.init();
    this.findFriendReqByUserid();
    this.getAllFriendByUserId();
    this.getUnReadMessageList();
    this.socket.onmessage = res => {
      console.log("收到服务器内容：" + res.data);
      let messageVo = {
        type: 2,
        msg: JSON.parse(res.data).tbChatRecord.message
      };
      this.messageList.push(messageVo);
      let Temp = "";
      let flag = false;
      Temp = JSON.parse(res.data).tbChatRecord.userId;
      for (let i = 0; i < this.unReadMessageList.length; i++) {
        if (Temp == this.unReadMessageList[i].name) {
          this.unReadMessageList[i].count = this.unReadMessageList[i].count + 1;
          flag = true;
          break;
        }
      }
      if (flag == false) {
        let tempMessage = {};
        tempMessage.name = Temp;
        tempMessage.count = 1;
        this.unReadMessageList.push(tempMessage);
      }
    };
  },
  methods: {
    GoPage(id){
      this.$router.push('/other/'+id)
    },
    //全部的未读消息
    async getUnReadMessageList() {
      
      const res = await ganzhu.getRecordByUserId(this.userId);
      this.unReadMessageList = res.data.data.list;
      console.log("未读消息" + this.unReadMessageList);
    },
    async search() {
      const res = await ganzhu.getUserByName(this.name);
      this.userList = res.data.data.list;
    },
    async handleGuanzhu(id) {
      const res = await ganzhu.addFriend(id);
      this.$message.success(res.data.message);
    },
    handleSelect(index) {
      this.flagdialog = index;
      if (index === "5") {
        this.getUserInfoByIds();
      }
    },
    async findFriendReqByUserid() {
      const res = await ganzhu.findFriendReqByUserid();
      this.newsList = res.data.data.list;
    },
    async handleAgree(id) {
      const res = await ganzhu.acceptFriendReq(id);
      console.log(res);
      if (res.data.code === 20000) {
        this.$message.success(res.data.message);
        this.flagdialog = "3";
      } else {
        this.$message.error();
        res.data.message;
      }
    },
    handleReject() {},
    async getAllFriendByUserId() {
      const res = await ganzhu.getAllFriendByUserId();
      console.log(res);
      this.friendList = res.data.data.list;
      console.log(this.friendList);
    },
    toChat(friendId, friendAvatar) {
      this.friendId = friendId;
      const i = this.unReadMessageList.findIndex(x => x.name == friendId);
      this.unReadMessageList.splice(i);
      this.flagdialog = "4";
      this.friendAvatar = friendAvatar;
      this.getAllMessage(this.userId, friendId);
      // var areaMsgList = document.getElementById("msg");
      // 		// 设置聊天记录自动滚动到最后一条
      // 		areaMsgList.scrollTop = areaMsgList.scrollHeight + areaMsgList.offsetHeight;
    },
    init: function() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        var socket = new WebSocket(this.path);
        console.log("saas"+socket);
        this.socket = socket;
        socket.onopen = res => {
          console.log("连接建立成功");
          this.message.type = 0;
          this.message.tbChatRecord.userId = this.userId;
          socket.send(JSON.stringify(this.message));
        };
      }
    },
    //获取全部聊天记录
    async getAllMessage(userId, friendId) {
      const res = await ganzhu.getAllMessage(userId, friendId);
      this.messageList = res.data.data.list;
      console.log(this.messageList);
    },
    sendMsg() {
      this.message.type = 1;
      this.message.tbChatRecord.userId = this.userId;
      this.message.tbChatRecord.friendId = this.friendId;
      this.message.tbChatRecord.message = this.messageValue;
      let messageVo = { type: 1, msg: this.messageValue };
      this.messageList.push(messageVo);
      console.log(this.messageList);
      this.messageValue = "";
      this.socket.send(JSON.stringify(this.message));
    },
    async getUserInfoByIds() {
      const res = await ganzhu.getUserInfoByIds(this.unReadMessageList);
      this.UnUseList = res.data.data.list;
    }
  },
  computed: {
    unReadMessageCount: function() {
      var temp = 0;
      for (let i = 0; i < this.unReadMessageList.length; i++) {
        temp += this.unReadMessageList[i].count;
      }
      return temp;
    }
  },
  created() {
  

  }
};
</script>

<style scoped>
.msgScroll::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #b5b1b1;
}
.item {
  margin: 10px;
  background-color: #eee;
  margin-bottom: 10px;
  display: flex;
  border-radius: 10px;
  align-items: center;
}
.show {
  margin-left: 10px;
  display: flex;
  flex: 70%;
  flex-direction: column;
  justify-content: space-around;
}
.operation {
  width: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.inputSearch {
  margin: 0px 30px;
  flex: 70%;
}
.sousuo {
  background-color: #eee;
  margin: 10px;
  display: flex;
  align-items: center;
  height: 70px;
}
.u_guanzhu {
  margin-bottom: 30px !important;
  padding: 10px;
  min-height: 500px;
  background-color: #fff;
}
.msgs {
  height: 87.5vh;
  padding: 10upx;
  background-color: #eee;
  /* border: 1px solid #18B566; */
  width: 97%;
}
.oneMsg {
  line-height: 2em;
}
.other_user {
  color: black;
}
.self-user {
  color: black;
}
.field {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10upx;
}
.field > .label {
  width: 4em;
  text-align: right;
}
.textLine {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10upx;
  margin-top: 5px;
}
.textTypeOwn {
  max-width: 400upx;
  background-color: #4cd964;
  color: black;
  border-radius: 10upx;
  box-shadow: 3upx 3upx 3upx #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10upx;
  flex-wrap: wrap;
}
.textType {
  max-width: 400upx;
  background-color: #eee;
  border-radius: 10upx;
  box-shadow: 3upx 3upx 3upx #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10upx;
  flex-wrap: wrap;
}
.textType > view {
  width: 100%;
  font-size: 28upx;
  color: black;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}
.toLine {
  color: #606266;
}
.toLine > text {
  background-color: #c0c4cc;
  margin: 10upx;
}
.scrollView {
  width: 750rpx;
}
.inputStyle {
  flex: 80%;
}
</style>
