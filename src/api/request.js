// 对 axios 进行二次封装
import axios from "axios";

// 引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//start: 进度条开始  done: 进度条结束

// 1, 利用axios对象的方法 create 去创造一个axios实例
//2,request 就是axios, 只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径.发送请求时 路径当中会出现 api
    baseURL:'/api',
    //代表 请求超时时间
    timeout:5000
});

//请求拦截器
requests.interceptors.request.use( (config)=> {
    //进度条开始
    nprogress.start();
    return config;
});

// 添加响应拦截器
requests.interceptors.response.use((res)=> {
    // 对响应数据做点什么
    //进度条结束
    nprogress.done()
    return res.data;
},  (error)=> {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default requests
