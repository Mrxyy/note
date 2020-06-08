var arr = [{
	"key": "020000",
	"value": "上海",
	"children": [{
		"key": "021100",
		"value": "闵行区",
		"evalue": "Minhang",
		"children": []
	}]
}, {
	"key": "080000",
	"value": "浙江省",
	"children": [{
		"key": "080300",
		"value": "宁波",
		"evalue": "Ningbo",
		"children": []
	}]
}, {
	"key": "180000",
	"value": "湖北省",
	"children": [{
		"key": "180200",
		"value": "武汉",
		"children": [{
			"key": "180210",
			"value": "蔡甸区",
			"evalue": "Caidian"
		}]
	}]
}, {
	"key": "230000",
	"value": "辽宁省",
	"children": [{
		"key": "230300",
		"value": "大连",
		"children": [{
			"key": "230306",
			"value": "金州区",
			"evalue": "Jinzhou"
		}]
	}]
}]

var arr1 = []

function fx(obj, str) {
	for (i in obj) {
		//children
		var obj1 = obj[i][str]
		arr1.push(obj[i])
		// console.log(obj1)
		if (obj1) {
			// 数组不为0
			if (obj1.length) {
				 fx(obj1, str)
			}else{
				serializefx("key") 
				console.log(arr1)
				arr1 = []
			}
		}else{
				serializefx("key") 
				console.log(arr1)
				arr1 = []
				
		}
	
		// for(t in arr)
		// obj.key += obj1.key
		// serializefx()
		// console.log(arr1)
		// arr1 = []
	}
}

 // fxArr = [fx,fx1,fx2,fx3,fx4]
 
 // function a(par,i){
	//   if(i ==  fxArr.length-1){
	// 	   fxArr[i]( fxArr[i+1])
	//   }
 // }

function define(fx){
	fx.pusp{
		function(){
			fx[i] <= agru.length{
				
			}
		}
	}
}




function serializefx(key) {
	for (var i in arr1) {
		// console.log(typeof i,~i)
		for (var t = (i-0) + 1; t < arr1.length; t++) {
			// console.log(i,t,arr1[0],456)
			arr1[i][key] +=","+arr1[t][key]
		}
	}
}
fx(arr, "children")
// console.log(arr1)
