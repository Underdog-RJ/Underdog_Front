import request from '@/utils/request'
export default {

  getBlogList(page,limit,searchObj) {
    return request({
      url: `/eduservice/Blogfront/getFrontBlogList/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  //课程详情的方法
  getBlogInfo(id) {
    return request({
      url: `/eduservice/Blogfront/getFrontBlogInfo/${id}`,
      method: 'get'
    })
  },
  //收藏博客
  enjoyBlog(id){
    return request({
      url: `/eduservice/blogEnjoy/enjoyBlog/${id}`,
      method: 'get'
    })
  },
  //收藏博客
  IsEnjoyBlog(id){
    return request({
      url: `/eduservice/blogEnjoy/IsEnjoyBlog/${id}`,
      method: 'get'
    })
  },
  EnjoyBlogList(page,size){
    return request({
      url: `/eduservice/blogEnjoy/EnjoyBlogList/${page}/${size}`,
      method: 'get'
    })
  },
   //收藏博客
   RemoveEnjoyBlog(id){
    return request({
      url: `/eduservice/blogEnjoy/RemoveEnjoyBlog/${id}`,
      method: 'get'
    })
  },
    //删除博客
    deleteDataById(id) {
      return request({
        url: `/eduservice/blog/${id}`,
        method: 'delete'
      })
    },
    //3添加博客信息
    addBlogInfo(blogInfo) {
      return request({
        url: '/eduservice/blog/addBlogInfo',
        method: 'post',
        data: blogInfo
      })
    },
    //更新blog
  updateblogInfoId(blogInfo) {
    return request({
      url: '/eduservice/blog/updateBlogInfo',
      method: 'post',
      data: blogInfo
    })
  },

  getBlogByUserId(page,size) {
    return request({
      url: `/eduservice/blog/getBlogByUserId/${page}/${size}`,
      method: 'post'
    })
  }

}