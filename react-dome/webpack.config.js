const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, "build"), // 必须时绝对路径
        filename: "[name].js",
        publicPath:"/" //dunk的公共路径，默认“”，cli是“/”
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, "index.html"),
            filename:"index.html",
            templateParameters: {
                'foo': 'bar'
              },
        })
    ],
    devServer: {
        contentBase: "/",
        publicPath: "/",//将打包文件放在域名下的那个路径 /开头，html 也会生成
        historyApiFallback: {
            rewrites: [
              { from: /^\/$/, to: '/index.html' },
              { from: /^\/.*\/app\.js$/, to: '/app.js' }
            ]
          },// 将所有路径都映射到index文件上
        hot: true,
        // public: "/"
        // host: "0.0.0.0" // 外部设置host
    }
}