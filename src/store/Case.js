import { getCaseTypeList,getCaseList} from '@/api'

const actions = {
    // 案例导航栏
    async getCaseTitleList({ commit }) {
        const result = await getCaseTypeList()
        if(result.code === 200){
            commit('CASETYPELIST',result.data)
        }
    },
    // 获取案例列表
    async getAllCaseList({commit},data){
        const result = await getCaseList(data)
        if(result.code === 200){
            commit('GETALLCASELIST',result.data)
        }
    }
}

const mutations = {
    CASETYPELIST(state,data){
        state.CaseTypeList = data
    },
    GETALLCASELIST(state,caselist){
        state.CaseListDetaile = caselist
    }
}

const state = {
    // 案例导航栏
    CaseTypeList:[],
    // 案例列表数据
    CaseListDetaile:{}
}

const getters = {
    rightCaseText() {
        let caseTextList = []
        state.CaseTypeList.forEach((item, index) => {
            if (index > 0) {
                caseTextList.push(item)
            }
        })
        return caseTextList
    }
}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}
