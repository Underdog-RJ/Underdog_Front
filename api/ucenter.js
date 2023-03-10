import request from '@/utils/request'
export default {

  getUserSignInfo(year,month){
    return request({
      url: `/educenter/member/getUserSignInfo/${year}/${month}`,
      method: 'get'
    })
  },

  userSignCountInfo(){
    return request({
      url: `/educenter/member/userSignCountInfo`,
      method: 'get'
    })
  },


  userSign(){
    return request({
      url: `/educenter/member/userSign`,
      method: 'get'
    })
  },

  checkSign(){
    return request({
      url: `/educenter/member/checkSign`,
      method: 'get'
    })
  },

  setOwnMobile(mobile,code){
    return request({
      url: `/educenter/member/setMobile/${mobile}/${code}`,
      method: 'get'
    })
  },
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

  validateMail(mail,code){
    return request({
      url: `/educenter/member/valideOwnMail/${mail}/${code}`,
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
  },
  updateUserPassword(password){
    return request({
      url: '/educenter/member/updateUserPassword/'+password,
      method: 'get'
    })
  },
  resetPassword(RetPasswordVo){
    return request({
      url: '/educenter/member/resetPassword/',
      method: 'post',
      data:RetPasswordVo
    })
  }

}