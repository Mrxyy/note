// 装饰器
function logClass() {}
var HtttpClient = /** @class */ (function() {
	function HtttpClient() {}
	HtttpClient.prototype.getData = function() {};
	return HtttpClient;
}());

// 装饰器
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
	var c = arguments.length,
	// r 1.原型 , undefined ,desc
		r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
		d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators,
		target, key, desc);
	else
		for (var i = decorators.length - 1; i >= 0; i--)
			if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
