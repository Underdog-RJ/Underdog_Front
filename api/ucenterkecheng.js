import request from '@/utils/request'
export default {

  //通过用户id
  getkecheng(page,limit) {
    return request({
      url: `/educenter/ucenter-kecheng/get_collect/${page}/${limit}`,
      method: 'get'
    })
  },
}
