class A{
	constructor(arg) {
	   this.a = "yang"
	}
	b = "xiong"
}

let a =  new A()
let ppycof = Object.getOwnPropertyDescriptor(a,"a")
ppycof.value = "yy"
Object.defineProperty(a,"a",ppycof)
console.log(a,ppycof)