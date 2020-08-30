// script 标签type 设置为 module时候也可以使用
/**
 * import {} / * as [name]   from [mudule]
 * export { as [name]}/let
 * export [name as [name]] from "module"
 * import ()
 * require()
 */

 // import 和 require 作用
 /**
  *  1. import  
  * 	编译时候引入模块、会发生作用域提升
  *  2. require() 、import()
  * 	运行时引入，可以任意位置
  * 	
  */
// 重要 commonJs 是对 和 es6  
let a = require("./test.js")
a.g()
console.log(a)
exports = {}