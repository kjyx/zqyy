import Vue from "vue";
//引入VueRouter
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)

// 重写 push 与 replace 解决重复点击报错
// 先把原型上的push方法 和 replace方法 保  存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{ },()=>{ })
    }
}
VueRouter.prototype.replace = function (location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes:[
        //重定向
        {
            path:'*',
            redirect: '/home'
        },
        // 主页
        {
            path:'/home',
            nema:'Home',
            component: () => import('@/pages/Home/home'),
        },
        // 产品
        {
            path:'/product',
            nema:'Product',
            component: () => import('@/pages/Product/product')
        },
        // 案例
        {
            path:'/case',
            nema:'Case',
            component: () => import('@/pages/Case/case')
        },
        // 新闻
        {
            path:'/news',
            nema:'News',
            component: () => import('@/pages/News/news')
        },
        // 联系
        {
            path:'/relation',
            nema:'Relation',
            component: () => import('@/pages/Relation/relation')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router