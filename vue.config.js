module.exports = {
    // 打包时 删除map文件
    // productionMode:false,
    // pages:{
    //     index:{
    //         // 入口
    //         enter: 'src/main.js',
    //     }
    // },
    // 关闭语法检查
    lintOnSave:false,

    // 配置代理服务器
    devServer:{
        proxy:{
            '/erupt-api':{
                target:'http://110.42.240.198:8012',
                // pathRewrite:{'^/api':''}
            }
        }
    }
}
