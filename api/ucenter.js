import request from '@/utils/request'
export default {

  getLoginUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  },
  updateUserInfo(ucenterMember) {
    return request({
      url: '/educenter/member/updateUser',
      method: 'post',
      data:ucenterMember
    })
  },

}