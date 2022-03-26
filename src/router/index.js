import Vue from "vue";
//引入VueRouter
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)

// 重写 push 与 replace 解决重复点击报错
// 先把原型上的push方法 和 replace方法 保  存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })
    }
}

let router = new VueRouter({
    routes: [
        //重定向
        {
            path: '*',
            redirect: '/home'
        },
        // 主页
        {
            path: '/home',
            nema: 'Home',
            component: () => import('@/pages/Home/home'),
            meta: {
                isShow: false
            }
        },
        // 产品
        {
            path: '/product',
            nema: 'Product',
            redirect: 'product/trailer',
            component: () => import('@/pages/Product/product'),
            meta: {
                isShow: true
            },
            children: [
                // 宣传片
                {
                    path: 'trailer',
                    name: 'Trailer',
                    component: () => import('@/pages/Product/trailer/trailer'),
                    meta: {
                        isShow: true
                    },
                },
                // 星形象片
                {
                    path: 'image-slices',
                    name: 'ImageSlices',
                    component: () => import('@/pages/Product/ImageSlices/ImageSlices'),
                    meta: {
                        isShow: true
                    },
                },
                // 广告片
                {
                    path: 'commercials',
                    name: 'Commercials',
                    component: () => import('@/pages/Product/Commercials/Commercials'),
                    meta: {
                        isShow: true
                    },
                },
                // 产品篇
                {
                    path: 'product-piece',
                    name: 'ProductPiece',
                    component: () => import('@/pages/Product/ProductPiece/ProductPiece'),
                    meta: {
                        isShow: true
                    },
                },
                // 微电影
                {
                    path: 'micro-film',
                    name: 'MicroFilm',
                    component: () => import('@/pages/Product/MicroFilm/MicroFilm'),
                    meta: {
                        isShow: true
                    },
                },
                {
                    path: 'animation',
                    name: 'animation',
                    component: () => import('@/pages/Product/2-animation/animation'),
                    meta: {
                        isShow: true
                    },
                }
            ]
        },
        // 案例
        {
            path: '/case/:id?',
            nema: 'Case',
            component: () => import('@/pages/Case/case'),
            meta: {
                isShow: true
            }
        },
        // 新闻
        {
            path: '/news',
            nema: 'News',
            component: () => import('@/pages/News/news'),
            meta: {
                isShow: true
            },
        },
        // 新闻内页
        {
            path: '/newsinfo/:newsid?',
            name: 'NewsInfo',
            component: () => import('@/pages/News/NewsInfo/newsinfo')
        },
        // 联系
        {
            path: '/relation',
            nema: 'Relation',
            component: () => import('@/pages/Relation/relation'),
            meta: {
                isShow: true
            }
        },
        // 关于
        {
            path: '/about',
            name: 'About',
            component: () => import('@/pages/About/about'),
            meta: {
                isShow: true
            }
        },
        // 案例详情
        {
            path: '/casedetails/:id?',
            name: 'CaseDetails',
            component: () => import('@/pages/CaseDetails/CaseDetails'),
            meta: {
                isShow: true
            }
        }
    ],
    // 跳转页面到顶部
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
router.beforeEach((to, from, next) => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.location.href = './mobile/dist/index.html'
        } else {
            next()
        }
    }
})
export default router
