import request from '@/utils/request'
export default {
  //1、创建订单
  createOrders(cid) {
    return request({
      url: '/eduorder/order/createOrder/' + cid,
      method: 'post'
    })
  },
  //2、根据id获取订单
  getById(cid) {
    return request({
      url: '/eduorder/order/getOrderInfo/' + cid,
      method: 'get'
    })
  },

  //生成二维码的方法
  createNaice(orderNo) {
    return request({
      url: '/eduorder/paylog/createNative/' + orderNo,
      method: 'get'
    })
  },
  //生成订单状态的方法
  queryPayStatus(orderNo) {
    return request({
      url: '/eduorder/paylog/queryPayStatus/' + orderNo,
      method: 'get'
    })
  },
}
