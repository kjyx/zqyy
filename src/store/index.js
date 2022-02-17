import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入Home仓库
import Home from "@/store/Home";
import News from "@/store/News";
import Case from "@/store/Case";
export default new Vuex.Store({
    modules: {
        Home,
        News,
        Case
    }
})
