<template>
  <div>
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
    <div id="J_prismPlayer" class="prism-player" />
  </div>
  <div class="fl col-2" >
     <!-- /课程介绍 -->
                <div class="">
                  <h1 style="text-align:center">{{$store.state.courseTitle}}</h1>
                  <h4 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h4>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in $store.state.chapterVideoList"
                            :key="chapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              :title="chapter.title"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10" ></em
                              >{{ chapter.title }}
                            </a>
                            <ol class="lh-menu-ol" style="display: block;">
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in chapter.children"
                                :key="video.id"
                              >
                                     <span class="fr">
                                    <el-button type="primary" size="mini" @click="ToLook(video.videoSourceId)">立即观看</el-button>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{ video.title }}
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
export default {
  layout: "video", //应用video布局
  asyncData({ params, error }) {
    return vod.getPlayAuth(params.vid).then(response => {
      return {
        vid: params.vid,
        playAuth: response.data.data.playAuth
      };
    });
  },
  data(){
    return{
      chapterVideoList:[],
      vid:"",
      playAuth:"",
      player:{},
    }
  },
  created(){
    
    this.chapterVideoList=this.$store.state.chapterVideoList

  },
  methods:{
    ToLook(id){
     vod.getPlayAuth(id).then(response=>{
       this.playAuth= response.data.data.playAuth
       this.player.replayByVidAndPlayAuth(id,this.playAuth)
       
     })
    }
  },
  mounted() {
    //页面渲染之后
    this.player= new Aliplayer(
      {
        id: "J_prismPlayer",
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: "100%",
        height: "700px",
        videoWidth:"100%",
        // 以下可选设置
        cover: "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg", // 封面
        qualitySort: "asc", // 清晰度排序
        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: true // 播放器类型：html5
      },
      function(player) {
        player.play();
      }
    );
  }
};
</script>
<style scoped>
.bg{
  background-color: #35383e;
  z-index: 9999999
}
</style>
