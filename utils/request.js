import axios from 'axios'
import cookie from 'js-cookie'
//创建axios实例
const service = axios.create({
    // baseURL:'http://101.35.143.19:9000/',
    baseURL:'http://127.0.0.1:11001/',
    timeout:30000
})


// http request 拦截器
service.interceptors.request.use(
    config => {
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
    return response;
    //debugger
    // if (response.data.code == 28004) {
    //     window.location.href="/login"
    //     return
    // }else{
  
    //   if (response.data.code !== 20000) {
    //     //25000：订单支付中，不做任何提示
    //     if(response.data.code != 25000) {
    //     }
    //   } else {
    //     return response;
    //   }
    // }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service