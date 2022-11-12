import axios from 'axios'
import cookie from 'js-cookie'
//创建axios实例
const service = axios.create({
    // baseURL:'http://192.168.172.110:8222/',
    baseURL:'http://127.0.0.1:8222/',
    // baseURL:'http://10.1.1.160:8222/',
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
    if(response.data.code==20001){
      window.location.href="/error"
      return
    }
    //debugger
    if (response.data.code == 28004) {
        window.location.href="/login"
        return
    }else{
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示
        if(response.data.code != 25000) {
        }
      } else {
        return response;
      }
    }
  },
  error => {
    window.location.href="/error"
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service