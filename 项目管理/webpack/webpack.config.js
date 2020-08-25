// 使用node path模块
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
console.log(CleanWebpackPlugin);
// 导出我们配置模块
module.exports = {
	plugins:[
		// 插件是给webpack添加功能
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title:"yang"
		})
	],
	entry:{
		app:"./src/index.js"
	},
	output:{
		//输出文件名称
		filename:"[name].bundle.js",
		//输出路径 __dirname 当前模块的路径 __filename 当前模块文件的路径加上他的文件名
		path:path.resolve(__dirname,'dist')
	},
	// webpack 原本不支持的模块
	module:{
		rules:[{
			test:/\.css$/,
			//处理 css，会以style 标签的形式加在head中
			use:[
				'style-loader',
				'css-loader'
			]
		},
		{
			test:/\.(png|svg|jpg|gif)$/,
			use:[
				'file-loader'
			]
		}]
	}
}