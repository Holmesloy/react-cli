const path = require('path');

module.exports = {
    
    /*入口*/
    entry: path.join(__dirname, '../src/index.js'),
    mode:'development',
    
    /*输出到dist目录，输出文件名字为bundle.js*/
    output:{
        path: path.join(__dirname, '../dist'),
	    filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname,'../src')
        }]
    },

    devtool: 'inline-source-map',

    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true, // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000, // 端口
        proxy: {  
            '/api':{
                target: 'http://loacalhost:8000',
                pathRewrite: {'^/api': ''},
                changeOrigin:true
            }

        }
    },

    resolve:{
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/componnets'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers')
        }
    }

    
};
