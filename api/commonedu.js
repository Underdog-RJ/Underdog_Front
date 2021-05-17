import request from '@/utils/request'

export default {

  getPageList(courseId, page, limit) {
    return request({
      url: `/eduservice/comment/${courseId}/${page}/${limit}`,
      method: 'get'
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/comment/auth/save`,
      method: 'post',
      data: comment
    })
  }
}