//webpack dev环境配置

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry:{
        vendor: [
            'react', 
            'react-router-dom', 
            'redux', 
            'react-dom', 
            'react-redux',
            'redux-thunk'
        ],
         app: [ 
            "babel-polyfill",
            'react-hot-loader/patch',
            path.join(__dirname,'src/index.js')
        ]
    }, 
    output: {
        path: path.join(__dirname, './dist'),
        // 输出到dist文件夹
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    devServer:{   //webpack-dev-server配置
        contentBase: path.join(__dirname, './dist'), //服务器URL的根目录
        port: '7088',
        host: '0.0.0.0',  //支持ip来访问页面，否则只能通过localhost:8088来访问
        historyApiFallback: true,  //所有404页面能跳转到index.html
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                pathRewrite: {'/api' : ''},  //重写HTTP请求，其主要作用就是移除URL前面的/api部分               
            }
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],  //cacheDirectory缓存编译结果加速
                include: path.join(__dirname, './src')
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },{
                test: /\.(jpg|gif|png|jpeg|bmp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            },{ 
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, 
                use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
            } // 限制大小
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({   //引用资源单独打包
            name: 'vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.tpl.html'),
            chunks: ['manifest', 'app', 'vendor'],
            // chunks: ['manifest', 'app'],
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
       
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            constants: path.join(__dirname, 'src/constants'),
            router: path.join(__dirname, 'src/router'),
            static: path.join(__dirname, 'src/static'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            httpService: path.join(__dirname, 'src/httpService')
        }
    }
}
