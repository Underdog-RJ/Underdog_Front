import Vue from 'vue';

// const VueVideoPlayer= require('vue-video-player/dist/ssr');
// const hls = require('videojs-contrib-hls');
// import 'vue-video-player/src/custom-theme.css';

// import Video from 'video.js';
// import 'video.js/dist/video-js.css';

// import zhCN from './video-zh-CN.json';

// // import 'videojs-flash';

// // const SWF_URL=require('videojs-swf/dist/video-js.swf');

// // Video.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
// Video.addLanguage('zh-CN', zhCN);// 添加中文支持
// Vue.use(hls);
// Vue.use(VueVideoPlayer);

import VueVideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-contrib-hls';

Vue.use(VueVideoPlayer)