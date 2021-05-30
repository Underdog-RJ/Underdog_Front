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

  addOwnPage(ucenterMember){
    return request({
      url: '/educenter/member/addOwnPage',
      method: 'post',
      data:ucenterMember
    })
  },

  
  setMail(mail){
    return request({
      url: '/educenter/member/setOwnMail/'+mail,
      method: 'get'
    })
  },

  getOwnPage(){
    return request({
      url: '/educenter/member/getOwnPage/',
      method: 'get'
    })
  },

  getUserCountInfo(){
    return request({
      url: '/educenter/member/getUserCountInfo/',
      method: 'get'
    })
  }

}