import request from '@/utils/request'
export default {

  submitLogin(userInfo) {
    return request({
      url: '/educenter/member/login',
      method: 'post',
      data:userInfo
    })
  },
  getLoginUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  },
  thirdLogin(code) {
    return request({
      url: '/educenter/member/thirdLogin/'+code,
      method: 'get'
    })
  },


}