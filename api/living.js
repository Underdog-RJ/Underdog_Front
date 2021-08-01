import request from '@/utils/request'
export default {

  getAllLiving(){
    return request({
      url: '/eduservice/live/aliyunLive/getAllLiving',
      method: 'get'
    })
  },
  getLivingById(id){
    return request({
      url: '/eduservice/live/aliyunLive/getLiveById/'+id,
      method: 'get'
    })
  },
  getLivingByIdAgo(id){
    return request({
      url: '/eduservice/live/aliyunLive/getLiveByIdAgo/'+id,
      method: 'get'
    })
  },
  getAgoLivingList(){
    return request({
      url: '/eduservice/live/aliyunLive/getAllLivingAge/',
      method: 'get'
    })
  },
  getAllLivingRecord(id){
    return request({
      url: '/eduservice/live/aliyunLive/getAllRecordById/'+id,
      method: 'get'
    })
  }
}