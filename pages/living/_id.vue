<template>
  <div style="contentLiving">
    <!-- 阿里云视频播放器样式 -->
    <div class="fl col-8">
      <link
        rel="stylesheet"
        href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"
      />
      <!-- 阿里云视频播放器脚本 -->
      <script
        charset="utf-8"
        type="text/javascript"
        src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"
      />
      <!-- 定义播放器dom -->
      <div class="living">
        <el-avatar :src="teacherInfo.avatar" shape="square" :size="120"></el-avatar>
        <div class="livingInfo">
          <div style="font-size:20px;font-weight:bold">
            {{ livingInfo.livingName }}
          </div>
          <div>{{ livingInfo.descption }}</div>
          <div>讲师名:{{ livingInfo.teacherName }}</div>
        </div>
        <div>当前在线人数:{{livingCount}}</div>
      </div>
      <div id="J_prismPlayer" class="prism-player" />
    </div>
    <div class="fl col-2 rightBox">
      <div id="msg" class="chat">
        <div v-for="(item, index) in messageList" :key="index" class="oneMsg">
          <div
            v-if="item.type == 1"
            class="textLine textUser"
            style="flex-direction:row-reverse;"
          >
            <el-avatar
              :src="item.avatar"
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
              :src="item.avatar"
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
      <div class="sendBox">
        <div class="sendLine">
          <el-input style="width:230px" v-model="messageValue"></el-input>
          <el-button type="primary" @click="sendDanmu">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import living from "@/api/living";
import teacherAPi from "@/api/teacher";
import cookie from "js-cookie";
export default {
  layout: "video", //应用video布局
  asyncData({ params, error }) {
    return living.getLivingById(params.id).then(response => {
      return {
        livingInfo: response.data.data.livingInfo,
        teacherId: params.id
      };
    });
  },
  data() {
    return {
      player: {},
      flagIndex: -1,
      path: "http://living.feifu.top/living",
      teacherInfo: {},
      message: {},
      userInfo: {},
      messageValue: "",
      messageList: [],
      livingCount:0
    };
  },
  created() {
    console.log(this.livingInfo);
  },
  methods: {
    //初始化websocket
    init: function() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        var socket = new WebSocket(this.path);
        this.socket = socket;
        socket.onopen = res => {
          console.log("连接建立成功");
          this.message.type = 0;
          this.message.userId = this.userInfo.id;
          this.message.livingId = this.livingInfo.id;
          socket.send(JSON.stringify(this.message));
        };
      }
    },
    //获取讲师信息
    async getTeacherInfo() {
      const res = await teacherAPi.getTeacherInfo(this.teacherId);
   
      if (res.data.code === 20000) {
        console.log( res.data.data.teacher)
        this.teacherInfo = res.data.data.teacher;
        console.log(this.teacherInfo)
      }
    },
    sendDanmu() {
      //从cookie获取用户信息
      var userStr = cookie.get("underdogedu_ucenter");
      if (userStr == null || userStr == undefined || userStr == "") {
        this.$router.push("/login");
      } else {
        this.userInfo = JSON.parse(userStr);
        this.message.type = 1;
        this.message.userId = this.userInfo.id;
        this.message.livingId = this.livingInfo.id;
        this.message.message = this.messageValue;
        this.message.userAvatar = this.userInfo.avatar;
        this.socket.send(JSON.stringify(this.message));
        let messageVo = {
          type: 1,
          msg: this.messageValue,
          avatar: this.userInfo.avatar
        };
        this.messageList.push(messageVo);
        this.messageValue=""
      }
    }
  },
  mounted() {
    this.getTeacherInfo();
    this.init();
    //页面渲染之后
    this.player = new Aliplayer(
      {
        id: "J_prismPlayer",
        width: "100%",
        height: "630px",
        videoWidth: "100%",
        videoHeight: "100%",
        // 以下可选设置
        cover:
          "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg", // 封面
        qualitySort: "asc", // 清晰度排序
        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: true, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: false, // 播放器类型：html5
        useFlashPrism: true, //指定使用Flash播放器
        rtmpBufferTime: 0,
        showBuffer: 0,
        stashInitialSizeForFlv: 30, //H5播放flv时，初始缓存大小，只在直播下起作用。
        source: this.livingInfo.pullUrl //rtmp格式的地址
      },
      function(player) {
        player.play();
      }
    );
    this.socket.onmessage = res => {
      console.log("收到服务器内容：" + res.data);
       //从cookie获取用户信息
      var userStr = cookie.get("underdogedu_ucenter");
      if (JSON.parse(res.data).userId != this.userInfo.id && userStr != null && userStr != undefined && userStr != "") {
        let messageVo = {
          type: 2,
          msg: JSON.parse(res.data).message,
          avatar: JSON.parse(res.data).userAvatar
        };
        this.messageList.push(messageVo);
        this.livingCount=JSON.parse(res.data).count
      }else{
        this.livingCount=JSON.parse(res.data).count
      }
    };
  }
};
</script>
<style scoped>
.chat {
  overflow-y: scroll;
  background-color: #eee;
  height: 680px;
  max-height: 680px;
}
.sendLine {
  display: flex;
  width: 100%;
}
.sendBox {
  position: absolute;
  bottom: 0;
}
.rightBox {
  max-height: 700px;
  background-color: #fff;
}
.contentLiving {
  max-height: 700px;
}
.living {
  display: flex;
}
.livingInfo {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.itemsbg {
  background-color: turquoise;
  color: #fff !important;
  margin-left: 10px;
  border-radius: 10px;
}
.items {
  margin-top: 5px;
  margin-left: 10px;
}
.item {
  color: #eee;
}
.outline {
  background-color: #35383e;
  height: 775px;
}
.bg {
  background-color: #35383e;
  z-index: 9999999;
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
