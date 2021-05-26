import request from '@/utils/request'
export default {

  addShuoshuo(ucenterShuoshuo) {
    return request({
      url: '/educenter/ucenter-shuoshuo/addshuoshuo',
      method: 'post',
      data:ucenterShuoshuo
    })
  },
  getPageList(current,limit,userId) {
    return request({
      url: `/educenter/ucenter-shuoshuo/page/${current}/${limit}`,
      method: 'get',
      params:{
      userId:userId,
      }

    })
  },
  removeShuoshuo(id) {
    return request({
      url: `/educenter/ucenter-shuoshuo/${id}`,
      method: 'delete'

    })
  },
  setHide(id,isHide) {
    return request({
      url: '/educenter/ucenter-shuoshuo/hide',
      method: 'post',
      data:{id:id,isHide:isHide}
    })
  },

}