import request from '@/utils/request'
export default {

  sendCode(phone) {
    return request({
      url: '/educenter/edumsm/msm/send/'+phone,
      method: 'get'
    })
  },
  registerMember(formItem) {
    return request({
      url: '/educenter/member/register/',
      method: 'post',
      data:formItem
    })
  },
  getUserChannel(page,size) {
    return request({
      url: `/pierceservice/getUserChannel/${page}/${size}`,
      method: 'post'
    })
  },

}