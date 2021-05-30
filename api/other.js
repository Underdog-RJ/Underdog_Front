import request from '@/utils/request'
export default {

  //根据用户id获取用户信息
  getUserInfoById(id) {
    return request({
      url: '/educenter/member/getUserInfoById/' + id,
      method: 'get'
    })
  },
  getOwnPageById(id) {
    return request({
      url: '/educenter/member/getOwnPageById/' + id,
      method: 'get'
    })
  },

  getUserCountInfoById(id) {
    return request({
      url: '/educenter/member/getUserCountInfoById/' + id,
      method: 'get'
    })
  },

  //根据用户id获取用户信息
  getShuoshuoById(id) {
    return request({
      url: '/educenter/ucenter-shuoshuo/getShuoshuoById/' + id,
      method: 'get'
    })
  },
  //根据用户id获取用户信息
  findBlogByUserId(id) {
    return request({
      url: '/eduservice/blog/findBlogByUserId/' + id,
      method: 'post'
    })
  },
  //根据用户id获取用户信息
  EnjoyBlogListByUserId(id) {
    return request({
      url: '/eduservice/blogEnjoy/EnjoyBlogListByUserId/' + id,
      method: 'get'
    })
  },

  //根据用户id获取用户搜藏的课程
  findCollectById(userId, current, limit) {
    return request({
      url: `/educenter/ucenter-kecheng/findCollectById/${userId}/${current}/${limit}`,
      method: 'get'
    })
  },
  //根据用户id获取用户购买的课程
  findPayById(userId, current, limit) {
    return request({
      url: `/educenter/ucenter-kecheng/findPayById/${userId}/${current}/${limit}`,
      method: 'get'
    })
  },


}
