import request from '@/utils/request'
export default {
  getListBanner() {
    return request({
      url: '/eduservice/educms/bannerfront/getAllBanner',
      method: 'get'
    })
  }
}