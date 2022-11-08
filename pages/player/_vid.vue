<template>
  <div style="overflow-y: hidden">
    <!-- 阿里云视频播放器样式 -->
    <div class="fl col-8">
      <div>
        <div id="vdplay" >
          <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions"></video-player>
        </div>
      </div>
    </div>
    <div class="fl col-2 outline">
      <!-- /课程介绍 -->
      <div class>
        <h2 style="text-align: center; color: #fff; font-weight: bold">{{ courseWebVo.title }}</h2>
        <section class="mt20">
          <div class="lh-menu-wrap">
            <menu id="lh-menu" class="lh-menu mt10 mr10">
              <ul>
                <!-- 文件目录 -->
                <li v-for="(chapter,pIndex) in chapterVideoList" :key="chapter.id">
                  <a
                    href="javascript: void(0)"
                    :title="chapter.title"
                    style="color: #fff; font-size: 15px"
                  >
                    <em class="lh-menu-i-1 icon18 mr10"></em>
                    {{ chapter.title }}
                  </a>
                  <ol class="lh-menu-ol" style="display: block">
                    <li
                      :class="flagIndex == video.id ? 'itemsbg' : 'items'"
                      v-for="(video, index) in chapter.children"
                      :key="video.id"
                    >
                      <a href="javascript: void(0)" @click="ToLook(video, index,pIndex)">
                        <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>
                        <span class="item">{{ video.title }}</span>
                      </a>
                    </li>
                  </ol>
                </li>
              </ul>
            </menu>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import vod from "@/api/vod";
import courseApi from "@/api/course";
export default {
  layout: "video", //应用video布局
  asyncData({ params, error }) {
    /* return vod.getPlayAuth(params.vid).then(response => {
      return {
        vid: params.vid,
        playAuth: response.data.data.playAuth
      };
    }); */
    return { courseId: params.vid };
  },
  data() {
    return {
      chapterVideoList: [],
      URL_PRE: "http://10.1.1.160:8888/video/",
      vid: "b6556044e3104c1ca22340b05b1ffb66",
      playAuth: "",
      player: {},
      courseWebVo: {},
      flagIndex: -1,
      playerOptions: {
        poster:"https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg",
        //播放参数
        autoplay: false,
        controls: true,
        playbackRates: [0.5, 1, 1.5, 2, 3],
        sources: [
          {
            type: "application/x-mpegURL",
            // src: "http://localhost:8888/video/d/9/d98bee915684246dae734f1769baa41e/hls/d98bee915684246dae734f1769baa41e.m3u8"
          }
        ]
      }
    };
  },
  created() {
    this.initCourseInfo();
    console.log(this.vid);
  },
  methods: {
    async ToLook(video, index,PIndex) {
      this.flagIndex = video.id;
      
      const res = await courseApi.getVideoUrlById(video.id);
      if (res.data.code == 20000) {
        this.playerOptions.sources = [
          {
            type: "application/x-mpegURL",
            src: this.URL_PRE + res.data.data.eduVideo.videoUrl
          }
        ];
      }
      // vod.getPlayAuth(id).then((response) => {
      //   this.playAuth = response.data.data.playAuth;
      //   this.player.replayByVidAndPlayAuth(id, this.playAuth);
      // });
    },
    //查询课程详情信息
    async initCourseInfo() {
      const res = await courseApi.getCourseInfo(this.courseId);
      this.courseWebVo = res.data.data.courseWebVo;
      this.chapterVideoList = res.data.data.chapterVideoList;
    }
  },
  mounted() {
    //页面渲染之后
    console.log(this.vid);
    // this.player = new Aliplayer(
    //   {
    //     id: "J_prismPlayer",
    //     vid: this.vid, // 视频id
    //     playauth: this.playAuth, // 播放凭证
    //     encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
    //     width: "100%",
    //     height: "775px",
    //     videoWidth: "100%",
    //     videoHeight:"100%",
    //     // 以下可选设置
    //     cover:
    //       "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg", // 封面
    //     qualitySort: "asc", // 清晰度排序
    //     mediaType: "video", // 返回音频还是视频
    //     autoplay: false, // 自动播放
    //     isLive: false, // 直播
    //     rePlay: false, // 循环播放
    //     preload: true,
    //     controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
    //     useH5Prism: true, // 播放器类型：html5
    //   },
    //   function (player) {
    //     player.play();
    //   }
    // );
  }
};
</script>
<style scoped>


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
</style>
