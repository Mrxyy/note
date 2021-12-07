# vue 

## 响应式
+ api:
1. reative 递归转化对象为proxy

> 之前this.[prop]会响应，现在不会。
```javascript
	//setup
	const a = ref(1);
 // option 
 {
		methods:{
			handler(){
				this.a = 2; // vue2.23不会响应啦
			}
		}
 }
```

 
## this 和 getCurrentApp区别
1.this和getCurrentApp 一样 this和 getCurrentApp().ctx 类型。
2.通过defindExpose暴露出来的两者中间都要看找到。
3.compontion APi 都不会在this身上暴露，但是可以在getCurrentApp()获取（没有意义）。

## dinfindExpose 和 option.expose 区别
1.dinfindExpose 会将一些变量挂在 实例上（this不会，$parent、ref 可以获取到）。
2.expose:[prop],会将[]中prop 暴露出去，其他的this.prop只能私有使用。

## vue2.0 set 在 vue3 怎么样使用


