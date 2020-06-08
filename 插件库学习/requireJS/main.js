// 先进行配置
requirejs.config({
	baseUrl:"./js",
	paths:{
		jquery:"../jq",
		mk1:"module1",
		mk2:"module2",
		bootstrap:"https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap"
	},
	shim:{
		// bootstrap:["jquery",]
	}
})

// require(["mk1","jquery"],function(a,b){
// 	console.log("主模块")
// })
require(["bootstrap"],function(a){
	console.log(a)
})
