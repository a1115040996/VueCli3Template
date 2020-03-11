const chalk = require('chalk')
module.exports = {
    publicPath: './',
    assetsDir: 'assets', // 打包输出静态资源目录
    productionSourceMap: false, // 取消生成mapjs 缩小打包后的体积 也可以判断生产环境或是开发环境进行取消
    outputDir: (process.env.NODE_ENV === 'production') ? './dist/buildProd' : './dist/buildTest', // 打包输出
    devServer: { // 代理跨域
        proxy: {
            '/api': {
                target: 'http://192.168.1.2:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: (config) => { // config
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            // 不显示console.log
            // eslint 配置 关闭no-console 校验
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
        } else {
            // 为开发环境修改配置...
            // console.log('development');
        }

        // 允许全局不定义就可以使用的 关键字
        // 但是需要 script引入
        /*config.externals = {
            'jQuery' : 'jQuery',
        }*/
        // 如果是打包指令
        if (process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.indexOf('build') !== -1) {
            console.log(`
                正在生成:           ${chalk.cyan((process.env.NODE_ENV === 'production') ? '生产' : '测试')}环境代码
                全局接口请求路径:   ${chalk.cyan(process.env.VUE_APP_URL)}
                打包生成文件路径:   ${chalk.cyan((process.env.NODE_ENV === 'production') ? './dist/buildProd' : './dist/buildTest')}
            `);
        }

    },
}