// 装饰方法

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class C {
    @f()
    @g()
    method() {}
		greet() {
		        return "Hello, " + this.greeting;
		}
}

//编译
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
		C = __decorate([
		        sealed
		  ], C);
    return C;
}());

/*
* decorators: 装饰器方法集合
* target 原型对象
* key 声明的key的字符串
* desc 属性描述对象
**/

var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
	var c = arguments.length;
	var flag = c < 3;
		// r = 原型
		// 参数长度 > 3 的时候，r为属性描述对象
	var	r =  flag ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
	var	d;
	for (var i = decorators.length - 1; i >= 0; i--){
			//d 为decorate函数传递
			if (d = decorators[i]) {
				let temp
				if(c < 3){
					temp = d(r)
				}
				if(c= 3){
					temp = d(target, key)
				}
				if(c > 3){
					temp = d(target, key, r)
				}
				r = temp || r //无返回值时候为r
			};
		}
	// 参数小于3直接返回，r原型
	// 参数大于3,给key赋值属性描述对象
	return !flag && r && Object.defineProperty(target, key, r), r; 
\};
