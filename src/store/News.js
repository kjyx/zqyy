import {getNewsType} from "@/api";
const actions = {
    // 获取新闻列表
    async NewsList({commit},data){
        const result = await getNewsType(data)
        if (result.code === 200) {
            commit('NEWSLIST',result.data)
        }
    }
}

const mutations = {
    NEWSLIST(state,data){
        state.newsInfo = data.records
        state.total = data.total
    }
}

const state = {
    // 新闻列表数据
    newsInfo:[],
    total:0
}

const getters = {
    swiperNewsList() {
        let swiperNewsList = []
        state.newsInfo.forEach((item, index) => {
            if (index <= 3) {
                swiperNewsList.push(item)
            }
        })
        return swiperNewsList
    },
    rightNewsList() {
        let rightNewsList = []
        state.newsInfo.forEach((item, index) => {
            if (index > 3) {
                rightNewsList.push(item)
            }
        })
        return rightNewsList
    },
}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}
