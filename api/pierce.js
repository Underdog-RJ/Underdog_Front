import request from '@/utils/request'
export default {

  getUserChannel(page, size) {
    return request({
      url: `/pierceservice/getUserChannel/${page}/${size}`,
      method: 'post'
    })
  },


  hasPort() {
    return request({
      url: `/pierceservice/hasPort/`,
      method: 'get'
    })
  },

  createTunnel(client) {
    return request({
      url: `/pierceservice/createTunnel/`,
      method: 'post',
      data: client
    })
  },
  changeClientKey(client) {
    return request({
      url: `/pierceservice/changeClientKey/`,
      method: 'put',
      data: client
    })
  },
  getUserMetrics(page, size) {
    return request({
      url: `/pierceservice/getUserMetrics/${page}/${size}`,
      method: 'post'
    })
  },
  updateClient(client) {
    return request({
      url: `/pierceservice/updateClient/`,
      method: 'put',
      data: client
    })
  },



}