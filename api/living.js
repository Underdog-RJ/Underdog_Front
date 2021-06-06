import request from '@/utils/request'
export default {

  getAllLiving(){
    return request({
      url: '/live/aliyunLive/getAllLiving',
      method: 'get'
    })
  },
  getLivingById(id){
    return request({
      url: '/live/aliyunLive/getLiveById/'+id,
      method: 'get'
    })
  }
}