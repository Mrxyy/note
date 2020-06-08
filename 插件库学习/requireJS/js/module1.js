
// define("mk1",[],function(){
// 	return {
// 		a:"模块1"
// 	}
// })

// define("mk1",["mk2"],function(){
// console.log("模块1")
// })
console.log(define)
define("module1",["module2"],function(){
console.log("模块1")
})

// var sc = document.createElement("script")
// sc.src = 'js/module2.js'
// sc.async = true
// document.body.appendChild(sc)
// sc.onload = function(){
// 	console.log("模块2加载好啦")
// }
// <s1>
// 	mls.mk1 = fx()
// <s1>

// 执行过程
// var modulesfactory = {}

// // 这里使用真的url
// function define(p1,p2,p3){
// 	for(i in p2){
// 		require([p[i]]) //添加标签	
// 	}
// 	// 等待加载
// 	// fx() 挂载
// }

// var sc = document.createElement("script")
// sc.src = 'js/module2.js'
// document.body.appendChild(sc)
// sc.onload = function(){
// 	console.log(1)
// }