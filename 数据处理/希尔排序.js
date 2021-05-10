	var randomNumArr = new Array(10000000)
	randomNumArr.fill(0)
	randomNumArr.forEach((v,i)=>{
		randomNumArr[i] = Math.random()*10000
	})
// 插 O(n^2)
function intoSort(arr){
	var sectionLength = 1
	var sortArr = []
	var tem = 0
	while(arr[tem+sectionLength]){
			// console.log(arr[tem],arr[tem+sectionLength]);
			var nextTem = tem+sectionLength 
			// var perTem = tem 
			// var valueTem = arr[nextTem]
			// while(perTem >= -sectionLength){
			// 	if(Math.max(arr[perTem],valueTem) == arr[perTem]){
			// 		// [arr[perTem],arr[nextTem]] = [arr[nextTem],arr[perTem]]
			// 		arr[perTem+sectionLength] = arr[perTem]
			// 		perTem = perTem - sectionLength
			// 	}else{
			// 		arr[perTem+sectionLength] = valueTem
			// 		break
			// 	}
			// }
			var valueTem = tem
			while(arr[valueTem]-arr[valueTem+sectionLength]>0){
				[arr[valueTem],arr[valueTem+sectionLength]] = [arr[valueTem+sectionLength],arr[valueTem]]
				valueTem -= sectionLength
			}
			tem = nextTem
	}
	return arr
}
// O(logN*(N)*（N） = N^2)
function shellSort(arr) {
  let len = arr.length;
  // gap 即为增量
  for (let sectionLength = Math.floor(len / 2); sectionLength > 0; sectionLength = Math.floor(sectionLength / 2)) {
    for (let i = sectionLength; i < arr.length; i++) {
      let valueTem = i;
      let current = arr[i];
      while(valueTem - sectionLength >= 0 && current < arr[valueTem - sectionLength]) {
        arr[valueTem] = arr[valueTem - sectionLength];
        valueTem = valueTem - sectionLength;
      }
      arr[valueTem] = current;
    }
  }
	return arr
}
function sort(arr){
	// console.log(arr);
	var sectionLength = Math.floor(arr.length/2)
	while (sectionLength >= 1){
/*
		for(var i = 0;i<sectionLength;i++){
				var tem = i
				while(arr[tem+sectionLength] ){
					var nextTem = tem+sectionLength
					var perTem = tem 
					var valueTem = arr[nextTem]
					while(perTem >= -sectionLength){
						if(Math.max(arr[perTem],valueTem) == arr[perTem]){
							arr[perTem+sectionLength] = arr[perTem]
							perTem = perTem - sectionLength
						}else{
							arr[perTem+sectionLength] = valueTem
							break
						}
					}
					tem = nextTem
		}}
*/
			for(var i = 0;i<arr.length-sectionLength;i++){
				var valueTem = i
				let current = arr[valueTem+sectionLength];
				while( valueTem>=0 && arr[valueTem]-current>0){
					  arr[valueTem+sectionLength] = arr[valueTem] 
						valueTem=valueTem-sectionLength
				}
				arr[valueTem+sectionLength] = current;
			}
		 sectionLength = Math.floor(sectionLength/2)
	}
	return arr
}

function quickSort(arr,baseIndex,len) {
	baseIndex = baseIndex || 0
	len = len || arr.length - 1 
	const baseValue = arr[baseIndex]
	let	currentIndex = baseIndex
	let leftPointer = baseIndex
	let rightPointer = len
	while(leftPointer < rightPointer){
		if(currentIndex == leftPointer){
			for(;rightPointer-leftPointer>0;rightPointer--){
				if(arr[rightPointer]< baseValue){
					arr[currentIndex] = arr[rightPointer]
					currentIndex = rightPointer
					break;
				}
			}
		}else{
			for(;rightPointer>leftPointer;leftPointer++){
				if(arr[leftPointer] - baseValue > 0){
					arr[currentIndex] = arr[leftPointer]
					currentIndex = leftPointer
					break;
				}
			}
		}
	}
	arr[currentIndex] = baseValue
	// console.log(len,baseIndex,currentIndex);
	if(currentIndex - baseIndex > 1){
		quickSort(arr,baseIndex,currentIndex - 1) 
	}
	if(len - currentIndex > 1){
		quickSort(arr,currentIndex + 1,len) 
	}
	return arr
}

function quickSort1(arr){
            //如果数组<=1,则直接返回
            if(arr.length<=1){return arr;}
            var pivotIndex=Math.floor(arr.length/2);
            //找基准，并把基准从原数组删除
            var pivot=arr.splice(pivotIndex,1)[0];
            //定义左右数组
            var left=[];
            var right=[];

            //比基准小的放在left，比基准大的放在right
            for(var i=0;i<arr.length;i++){
                if(arr[i]<=pivot){
                    left.push(arr[i]);
                }
                else{
                    right.push(arr[i]);
                }
            }
            //递归
            return quickSort(left).concat([pivot],quickSort(right));
}


for(var i = 0;i<1;i++){
	console.time("插")
	// intoSort(randomNumArr.slice())
	console.timeEnd("插")
	
	console.time("冒泡")
	randomNumArr.slice().sort((a,b)=>a-b)
	console.timeEnd("冒泡")
	
	console.time("普通希尔")
	console.log(shellSort(randomNumArr.slice()).slice(0,10));
	console.timeEnd("普通希尔")
	
	console.time("希尔")
	console.log(sort(randomNumArr.slice()).slice(0,10));
	console.timeEnd("希尔")
	
	console.time("快速排序")
	console.log(quickSort(randomNumArr.slice()).slice(0,10));
	console.timeEnd("快速排序")
	
	console.time("快速排序1")
	console.log(quickSort1(randomNumArr.slice()).slice(0,10));
	console.timeEnd("快速排序1")
}



