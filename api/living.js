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
  },
  getLivingByIdAgo(id){
    return request({
      url: '/live/aliyunLive/getLiveByIdAgo/'+id,
      method: 'get'
    })
  },
  getAgoLivingList(){
    return request({
      url: '/live/aliyunLive/getAllLivingAge/',
      method: 'get'
    })
  },
  getAllLivingRecord(id){
    return request({
      url: '/live/aliyunLive/getAllRecordById/'+id,
      method: 'get'
    })
  }
}