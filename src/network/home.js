import {request} from './request'
//导出对应路径的函数
export function getHomeMultidata() {
    //返回路径
    return request({
        url:'/home/multidata'
    })
}