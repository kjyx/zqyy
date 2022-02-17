import requests from './request'

// 案例 头部 导航
export const getCaseTypeList = () => requests({
    url: '/case/caseTypeList',
    method: 'get'
})

// 案例列表
export const getCaseList = (data) => requests({
    url: '/case/queryByTypeId',
    method: 'post',
    data
})

// 案例详情
export const getCaseData = (id) => requests({
    url: `/case/selectById/${id}`,
    method: 'get'
})

// 新闻列表
export const getNewsList = (data) => requests({
    url:'/news/getPage',
    method: 'post',
    data
})

// 新闻详情
export const getNewsInfo = (id) => requests({
    url:`/news/selectById/${id}`,
    method:'get'
})

// 新闻分类
export const getNewsType = (data) => requests({
    url: '/news/selectByTypeId',
    method:'post',
    data,
})


// 表单请求
export const reqFrom = (data) => requests({
    url:'/feedBack/insertFeedBack',
    method:'post',
    data
})

