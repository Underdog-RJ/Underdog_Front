import request from '@/utils/request'
export default {
  // 删除评论
  deleteComment(commentId){
    return request({
      url: `/eduservice/comment/deleteComment/${commentId}`,
      method: 'delete'
    })
  },
  // 获取评论的展开页面
  commentChild(courseId, page, size) {
    return request({
      url: `/eduservice/comment/commentChild/${courseId}/${page}/${size}`,
      method: 'post'
    })
  },
  getCourseList(page, limit, searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    })
  },

  setCollect(courseId, flag) {
    return request({
      url: '/educenter/ucenter-kecheng/set_collect',
      method: 'get',
      params: {
        courseId: courseId,
        flag: flag
      }
    })
  },
  isCollect(courseId) {
    return request({
      url: '/educenter/ucenter-kecheng/is_collect',
      method: 'get',
      params: {
        courseId: courseId
      }
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    })
  },
  // 视频
  getVideoUrlById(id){
    return request({
      url: `/eduservice/video/${id}`,
      method: 'get'
    })
  }
}