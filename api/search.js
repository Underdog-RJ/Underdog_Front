import request from '@/utils/request'
export default {
  searchTop() {
    return request({
      url: '/eduservice/coursefront/searchTop',
      method: 'get'
    })
  },

  updateKeyWord(key) {
    return request({
      url: '/eduservice/coursefront/updateKeyWord?keyword=' + key,
      method: 'put'
    })
  },

  allSearch(key) {
    return request({
      url: '/eduservice/coursefront/allSearch?keyword=' + key,
      method: 'get'
    })
  },
}
