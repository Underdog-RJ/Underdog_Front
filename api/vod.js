import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: '/eduvod/video/getPlayAuth/'+vid,
      method: 'get'
    })
  },
  ossFile(file){
    return request({
      url: '/eduvod/eduoss/fileoss',
      method: 'post',
      data:file,
      headers: {
        'Content-Type': "multipart/form-data",
      },
    })
  }
}