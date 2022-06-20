import Vue from 'vue'

// 定义全局方法
let isEmpty = (str) => {
    if(str!=undefined&&str!=""&&str!=''){
        return false
    }else{
        return true;
    }
}
// 挂载到 vue 原型中
// 注意：服务端内部钩子不能使用
Vue.prototype.$isEmpty = isEmpty ;