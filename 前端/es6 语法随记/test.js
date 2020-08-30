let a = 10
exports.a = a
exports.g = function(){
	a++
}
exports.c = function(){
	return a
}