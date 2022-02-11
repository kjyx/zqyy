import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "@/router";
// 引入仓库
import store from '@/store'
// 引用fullpage 插件
import 'fullPage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);

//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入动画
import  wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
Vue.prototype.$wow = wow
// 动态数字
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

// 字体图标
import  '../public/icon/icon.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
