module.exports = {
    //修改文件路径
    //publicPath:process.env.NODE_ENV === 'production'?'./':'/',
    publicPath: './',
    //声明配置webpack
    configureWebpack: {
        resolve: {
            //配置路径别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}