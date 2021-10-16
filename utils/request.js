import axios from 'axios'
import cookie from 'js-cookie'
//创建axios实例
const service = axios.create({
    // baseURL:'http://39.101.196.37:8222/',
    baseURL:'http://127.0.0.1:8222/',
    timeout:30000
})


// http request 拦截器
service.interceptors.request.use(
    config => {
    debugger
    if (cookie.get('underdogedu_token')) {
      config.headers['token'] = cookie.get('underdogedu_token');
    }
      return config
    },
    err => {
    return Promise.reject(err);
  });
  
// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
        console.log("response.data.resultCode是28004")
        // 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //debugger
        window.location.href="/login"
        return
    }else{
      console.log(response)
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示
        if(response.data.code != 25000) {
          // Message({
          //   message: response.data.message || 'error',
          //   type: 'error',
          //   duration: 5 * 1000
          // })
        }
      } else {
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service