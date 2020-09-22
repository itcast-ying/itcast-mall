//封装axios函数
import axios from 'axios'
export function request(config) {
    //1.创建axios实例
    const intance=axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2.发送真正的网络请求
    return intance(config)
}

// //2.axios拦截器
// intance.interceptors.request.use(config => {
// // Do something before request is sent
// return config;
// },error => {
// // Do something with request error
// return Promise.reject(error);
// });

// intance.interceptors.response.use(response => {
// // Do something before response is sent
// return response;
// },error => {
// // Do something with response error
// return Promise.reject(error);
// });

