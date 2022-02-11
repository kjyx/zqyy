import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入Home仓库
import Home from "@/store/Home";

export default new Vuex.Store({
    modules: {
        Home
    }
})
