import request from '@/utils/request'
export default {

  //通过用户名搜索
  getUserByName(name) {
    return request({
      url: `/educenter/member/getUserByName/${name}`,
      method: 'get'
    })
  },

  //根据用户名添加用户
  addFriend(id) {
    return request({
      url: `/educenter/member/addFriend/${id}`,
      method: 'get'
    })
  },


  //获取新添加的用户
  findFriendReqByUserid() {
    return request({
      url: `/educenter/member/findFriendReqByUserid`,
      method: 'get'
    })
  },

  //同意添加好友请求
  acceptFriendReq(id) {
    return request({
      url: `/educenter/member/acceptFriendReq/${id}`,
      method: 'get'
    })
  },

  //获取全部用户
  getAllFriendByUserId() {
    return request({
      url: `/educenter/member/getAllFriendByUserId`,
      method: 'get'
    })
  },


  //获取全部聊天记录
  getAllMessage(userId,friendId) {
    return request({
      url:`/chat/chatRecord/findByUserIdAndFriendId/${userId}/${friendId}`,
      method: 'get'
    })
  },
}
