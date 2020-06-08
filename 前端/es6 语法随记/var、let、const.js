// 总结 let 和 var
 // 1.var 会进行作用域提升
 // 2.var 没有块级作用域 
 // 3.let 一个作用域类不能重复声明
 // 4.const 声明后就不能更改 
 // 块级name:{}
 
;(function(){
	let b = 0
	setTimeout(function(){
		console.log(b,a)
	},3000)
	var a = 3
	for(var i = 0;i<10;i++){
		;(function(){
			i++
			console.log(i)
			// 访问的是当前函数的作用域
			setTimeout(function(){
				// console.log(i)
			},3000)
		}())
	}
	for(let i = 0;i<10;i++){
		let b = 5
		i++
		setTimeout(function(){
			console.log(i)
		},3000)
		
	}
	// console.log(a,b)
})()
let a = 1
{
	console.log(a)
	let a = 2
}