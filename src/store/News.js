import {getNewsList} from "@/api";
const actions = {
    // 获取新闻列表
    async NewsList({commit},data){
      const result = await getNewsList(data)
        if(result.code === 200){
            commit('NEWSLIST',result.data)
            return 'ok'
        }
    }
}

const mutations = {
    NEWSLIST(state,data){
        state.allNewsList = data
    }
}

const state = {
    // 新闻列表数据
    allNewsList:{}
}

const getters = {}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}
