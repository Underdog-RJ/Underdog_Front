import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    chapterVideoList:[],
    courseTitle:"",
    userInfo:{},
  },
  mutations: {
    initChapterVideoList (state,chapterVideoList) {
      state.chapterVideoList=chapterVideoList
    },
    initCourseTitle (state,courseTitle) {
      state.courseTitle=courseTitle
    },
    initUserInfo(state,userInfo){
      state.userInfo=userInfo
    }
   
  },
})

export default store