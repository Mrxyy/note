module.exports = {
    module: { // 所有第三方模块的匹配规则， webpack默认只能处理.js后缀名的文件，需要安装第三方loader
            rules: [
                {
                    test: /\.m?js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    exclude: /(node_modules|bower_components)/, // 千万别忘记添加exclude选项,不然运行可能会报错
                }, 
            ]
        }
}