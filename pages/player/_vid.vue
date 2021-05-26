<template>
  <div style="overflow-y:hidden">
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
    <div class="fl col-2 outline">
      <!-- /课程介绍 -->
      <div class="">
        <h2 style="text-align: center; color:#fff;font-weight:bold">{{ courseWebVo.title }}</h2>
        <section class="mt20">
          <div class="lh-menu-wrap">
            <menu id="lh-menu" class="lh-menu mt10 mr10">
              <ul>
                <!-- 文件目录 -->
                <li
                  v-for="chapter in chapterVideoList"
                  :key="chapter.id"
                >
                  <a
                    href="javascript: void(0)"
                    :title="chapter.title"
                    style="color:#fff;font-size:15px"
                  >
                    <em class="lh-menu-i-1 icon18 mr10"></em>{{ chapter.title }}
                  </a>
                  <ol class="lh-menu-ol" style="display: block">
                    <li
                      :class="flagIndex==index? 'itemsbg' : 'items' "
                      v-for="(video,index) in chapter.children"
                      :key="video.id"
                    >
                      <a href="javascript: void(0)"
                       @click="ToLook(video.videoSourceId,index)"
                      >
                         <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>
                         <span class="item">
                            {{ video.title }}
                         </span>
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
      vid: "b6556044e3104c1ca22340b05b1ffb66",
      playAuth: "eyJTZWN1cml0eVRva2VuIjoiQ0FJU2h3TjFxNkZ0NUIyeWZTaklyNWYwTGY3MjFPaHA4YlNHVVdMRXNqTUVkYjFKdmJYNWhEejJJSGhKZVhOdkJPMGV0ZjQrbVdCWTdQY1lsck1xRk1BYkdoeWNONUVxdHNVUHExdjVKcExGc3QySjZyOEpqc1UybTZoRCtWbXBzdlhKYXNEVkVmbDJFNVhFTWlJUi8wMGU2TC8rY2lyWXBUWEhWYlNDbFo5Z2FQa09Rd0M4ZGtBb0xkeEtKd3hrMnQxNFVtWFdPYVNDUHdMU2htUEJMVXhtdldnR2wyUnp1NHV5M3ZPZDVoZlpwMXI4eE80YXhlTDBQb1AyVjgxbExacGxlc3FwM0k0U2M3YmFnaFpVNGdscjhxbHg3c3BCNVN5Vmt0eVdHVWhKL3phTElvaXQ3TnBqZmlCMGVvUUFQb3BGcC9YNmp2QWF3UExVbTliWXhncGhCOFIrWGo3RFpZYXV4N0d6ZW9XVE84MCthS3p3TmxuVXo5bUxMZU9WaVE0L1ptOEJQdzQ0RUxoSWFGMElVRUJ6RUc2Q2QvWDRvZ21hT2xmeUZaTG9pdjltamNCSHFIeno1c2VQS2xTMVJMR1U3RDBWSUpkVWJUbHpiME5MaHpPOEwvZGRLVjBSSXdNOVZ1eVBNYXgzYlFGRHI1M3ZzVGJiWHpaYjBtcHR1UG56ZHp0ZlB4elo3Q09WR29BQmFxQzBsRlpWMVNUeGVFakJIdHIxRkI0OFI1dUlGZXJnM3AzRndJRHJJMFFqTFU2MHVsbTNzRHROZ1g2SUFwaHYyVkNaOHVub3lSOHQxSzVTK21RNHN5ZGMwMG8wYmZDeHNtOEpoV1NTVFJ4Z3dKaVQ2Qy9UNVFlSHk2S0FrTFFZV0pKOTNqeGNOOTFlU0h3MTdFZ0ZRaEJYcjIwaDNxTjhlKzhWeGNNV0Zlaz0iLCJBdXRoSW5mbyI6IntcIkNJXCI6XCJiRG9yQWIzcU80cUQ2Nkt6QlVyUnZBMGdXdGU0SjlLOWxrMURLYnFuK25QTUNjNjJvdk50UTY5eFp5dEFOR2t6MjhUenFsd3FHQlhvS0NJS3liUnN2MVVCUWQxaEwzWlVYYVZjZVdQRXBUaz1cIixcIkNhbGxlclwiOlwiNEhCb1V5anZVdWdwY0hROWdlcXpTS0FSNFk4WjZkUDRDcDBlUWlxNGEvWT1cIixcIkV4cGlyZVRpbWVcIjpcIjIwMjEtMDUtMjZUMDQ6MDY6NTZaXCIsXCJNZWRpYUlkXCI6XCJiNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2NlwiLFwiU2lnbmF0dXJlXCI6XCJJR3dXT3FYdWV3dWNyK2N5TFRrQ1N1a1pVWWc9XCJ9IiwiVmlkZW9NZXRhIjp7IlN0YXR1cyI6Ik5vcm1hbCIsIlZpZGVvSWQiOiJiNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2NiIsIlRpdGxlIjoiZ28xIiwiQ292ZXJVUkwiOiJodHRwOi8vb3V0aW4tNjM1ZjYwMzg1ZTBlMTFlYjkxNmUwMDE2M2UwNjEyM2Mub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9iNjU1NjA0NGUzMTA0YzFjYTIyMzQwYjA1YjFmZmI2Ni9zbmFwc2hvdHMvZmM1MzM4NmU4NzhlNDgyMDgwZTQ4YzdjYzI4MmVjMWQtMDAwMDEuanBnP0V4cGlyZXM9MTYyMjAwNTUxNiZPU1NBY2Nlc3NLZXlJZD1MVEFJeFNhT2ZFekNuQk9qJlNpZ25hdHVyZT1JdXlMOUFuT3Y1T294V3p2c29RY00zM3VENGslM0QiLCJEdXJhdGlvbiI6Ni40MzR9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVEFmREI5N0hGdm1TRHVWM1F5MmVScFJmIiwiQWNjZXNzS2V5U2VjcmV0IjoiOTd2RVZYc1BmOG01YVlCd1VlMW94ejJOOXdoWEplYXNiOWRNd3NpTWhmUTkiLCJSZWdpb24iOiJjbi1zaGFuZ2hhaSIsIkN1c3RvbWVySWQiOjE3NzY3ODAyMjIwOTAyMDB9",
      player: {},
      courseWebVo: {},
      flagIndex:-1,
    };
  },
  created() {
    this.initCourseInfo();
    console.log(this.vid)
  },
  methods: {
    ToLook(id,index) {
      this.flagIndex=index
      vod.getPlayAuth(id).then((response) => {
        this.playAuth = response.data.data.playAuth;
        this.player.replayByVidAndPlayAuth(id,this.playAuth);
      });
    },
    //查询课程详情信息
   async initCourseInfo() {
      const res=await courseApi.getCourseInfo(this.courseId)
      this.courseWebVo = res.data.data.courseWebVo;
      this.chapterVideoList = res.data.data.chapterVideoList;
    },
  },
  mounted() {
    //页面渲染之后
    console.log(this.vid)
    this.player = new Aliplayer(
      {
        id: "J_prismPlayer",
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: "100%",
        height: "775px",
        videoWidth: "100%",
        videoHeight:"100%",
        // 以下可选设置
        cover:
          "https://underdogedu.oss-cn-beijing.aliyuncs.com/%E7%B4%A0%E6%9D%90/1525939573202.jpg", // 封面
        qualitySort: "asc", // 清晰度排序
        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: true, // 播放器类型：html5
      },
      function (player) {
        player.play();
      }
    );
  },
};
</script>
<style scoped>
.itemsbg{
  background-color: turquoise;
  color: #fff !important;
  margin-left: 10px;
  border-radius: 10px;
}
.items{
  margin-top: 5px;
  margin-left: 10px;
}
.item{
  color: #eee;
}
.outline{
  background-color: #35383e;
  height:775px
}
.bg {
  background-color: #35383e;
  z-index: 9999999;
}
</style>
