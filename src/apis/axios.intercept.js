// 配置axios拦截器
import axios from 'axios';
import store from '../store'; // 追加token
import {Bus} from "../service/bus";
// import router from '../router' // 路由跳转
const clearTimeoutByUrl = (url, requestList) => {
    for (let item in requestList) {
        if (url === requestList[item]['url']) {
            clearTimeout(requestList[item]['timeId']);
        }
    }
}
// 创建axios实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_URL, // 接口可能会分模块调用 所以不做全局配置
});
service.defaults.timeout = 30000;// 设置请求超时时间
// request拦截器,在请求之前做一些处理
service._requestCount = 0; // 累加请求次数
service._requestTimeIdList = [];
service._exportTimeout = 0; // 设置导出 接口 请求 最大时长
service.interceptors.request.use(
    config => {
        service._requestCount++;
        // 如果接口请求小于200ms的话 那么就不显示loading
        const timeId = setTimeout(() => {
            store.commit('handleLoading', true);
        }, 200);
        service._requestTimeIdList.push({
            timeId: timeId,
            url: config.url
        });
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
    response => {
        service._requestCount--;
        // clear 200ms 后准备展示的loading
        clearTimeoutByUrl(response.config.url, service._requestTimeIdList);
        if (service._requestCount <= 0) {
            store.commit('handleLoading', false);
        }
        const res = response.data;
        console.log('success=============>', res);
        return res;
    },
    (error) => {
        console.log('error=============>', error);
        service._requestCount--;
        clearTimeoutByUrl(error.config.url, service._requestTimeIdList);
        if (service._requestCount <= 0) { // 当全部的接口请求完毕后 关闭loading
            store.commit('handleLoading', false);
        }
        Bus.showDefaultToast({
            showClose: true,
            message: '网络请求失败!',
            type: 'error',
            duration: 0
        })
        Promise.reject('Error', error);
    }
)
export default service