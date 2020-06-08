/// <reference path="url.d.ts">

function str(str:String){
	console.log(str)
}

//接口的让广泛的的接口变明确
interface Ren{
	name:String,
	age:Number
}

function RenInfo(ren:Ren){
	return ren.name + ren.age.toString()
}

str("123")

var info = RenInfo({name:"yang",age:6})
console.log(info)

//数据类型
//基本类型 
//数组 和java一样 应该明确
let arr:Number[] = [1,2]
// 元祖
let tuple:[String,Number] = ["123",2]

// 枚举
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// console.log(enum)
enum Color {red, yellow}
let enum1:Color = Color.red
console.log( enum1)
  
function test(cor:Color){
	console.log(cor)
}

// enum类型可以限制变量是哪几个值
test(0)

//类
interface f{
	D:Function
}
class A implements f{
	constructor(arg:Ren) {
		this.c  =  arg.name
	}
	public a:String = "123"
	private c:String
	public D = function(){
		console.log(1)
	}
}

let a = new A({name:"yang",age:1})
console.log(a) 
//函数
function fun(arg:String):String{
	return arg
}
fun("1")

let fun1:(a:String) => String = (a:String):String=> a

console.log(fun1("我是一个箭头函数的")) 

//泛型

function fx<T>(arg:any):T{
	let t:T = null
	console.log(typeof t + "类型")
	return t
}

  let num:Number= fx<Number>("2")
  console.log(num)
  
  //




//
// let arr:Number[] = [1] 
// type
 enum type1 {
	 num = "123",num1 = 12
 }
 

 //Enum1 不会编译到js中，直接使用里面的值
 const enum Enum1{
	 red = "123"
 }
 
 let str1:String = Enum1.red
 str1 = "456"

enum type2{
	red,
	yellow
} 
 
 // 对外部的enum的描述
declare enum test1 {
  red = 5
}

// console.log(test1.red)

type StrColor = "red" | "yello"
type Rensex = String | 0
let f1:Rensex = 0

class BasicCalculator {
    public constructor(public value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

new BasicCalculator(2)

class L{
	protected a:string = "yang"
	name:any
	age:Number
	constructor(){
		this.name = L
		this.age = 5
	}
}

class k1 extends L{
	
}

let u = new L()

let k = new k1()

console.log(k)

declare let test2;

// console.log(test2.red)

// import {k as kl} from  "./enum"
// let obj = require("./enum")
// console.log(kl)
import {obj1} from "./enum"
console.log(obj1)

// declare function require(moduleName: string): any;

declare function require(moduleName:String):any
	// : typeof Zip 
let OKB:String = require("./enum")
 // let validator = new ZipCodeValidator();
    // if (validator.isAcceptable("...")) { /* ... */ }
// 命名空间
namespace sp{
	let A = 1
	export var c = A
}


import url = require("./url")
import {a as a1} from "./sp"
console.log(a1.a)
