import request from '@/utils/request'
export default {

  addShuoshuo(ucenterShuoshuo) {
    return request({
      url: '/educenter/ucenter-shuoshuo/addshuoshuo',
      method: 'post',
      data:ucenterShuoshuo
    })
  },
  getPageList(current,limit) {
    return request({
      url: `/educenter/ucenter-shuoshuo/page/${current}/${limit}`,
      method: 'get',

    })
  },

}