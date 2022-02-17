import { getCaseTypeList} from '@/api'

const actions = {
    // 案例导航栏
    async getCaseTitleList({ commit }) {
        const result = await getCaseTypeList()
        if(result.code === 200){
            commit('CASETYPELIST',result.data)
        }
    },
}

const mutations = {
    CASETYPELIST(state,data){
        state.CaseTypeList = data
    },
}

const state = {
    // 案例导航栏
    CaseTypeList:[],
}

const getters = {
}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}
