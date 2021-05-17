import request from '@/utils/request'

export default {

  getPageList(blogId, page, limit) {
    return request({
      url: `/eduservice/blogcomment/${blogId}/${page}/${limit}`,
      method: 'get'
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/blogcomment/auth/save`,
      method: 'post',
      data: comment
    })
  }
}