enum test1{
	red = 1,
	yello = 5
}
enum test2{
	red = "red",
	yello = 5
}

interface  inf{
	age:Number
}

let obj:inf = {age:4}
// export = 2
// let 会保证一个作用域里的变量为同一个变量
// let o:inf = obj
export let obj1 = obj