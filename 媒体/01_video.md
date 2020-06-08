```javascript
fullscreen API 接口
属性1：fullscreenElement 该属性返回当前处于全屏模式的DOM元素。

属性2：fullscreenEnabled 该属性返回当前 document 是否进入了可以请求全屏模式的状态。

方法1：requestFullscreen() 请求进入全屏模式。

方法2：exitFullscreen() 退出全屏模式。

事件1：fullscreenchange 进入/退出全屏模式切换时会触发。

事件2：fullscreenerror 进入/退出全屏模式失败时会触发。

由于fullscreen API 存在浏览器兼容性问题，所以我们在使用的时候需要进行跨浏览器处理，参考代码：

跨浏览器返回正处于全屏的元素

function fullscreenElement(){

var fullscreenEle = document.fullscreenElement ||

document.mozFullScreenElement ||

document.webkitFullscreenElement;

//注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null

console.log("全屏元素："+fullscreenEle);

return fullscreenEle;

}

跨浏览器返回当前 document 是否进入了可以请求全屏模式的状态

function fullscreenEnable(){

var isFullscreen = document.fullscreenEnabled ||

window.fullScreen ||

document.webkitIsFullScreen ||

document.msFullscreenEnabled;

//注意：要在用户授权全屏后才能准确获取当前的状态

if(isFullscreen){

console.log('全屏模式');

}else{

console.log('非全屏模式');

}

}

跨浏览器发动全屏

function lanchFullscreen(element){

if(element.requestFullscreen){

element.requestFullscreen();

}

else if(element.mozRequestFullScreen){

element.mozRequestFullScreen();

}

else if(element.msRequestFullscreen){

element.msRequestFullscreen();

}

else if(element.webkitRequestFullscreen){

element.webkitRequestFullScreen();

}

}

跨浏览器退出全屏

function exitFullscreen(){

if(document.exitFullscreen){

document.exitFullscreen();

}

else if(document.mozCancelFullScreen){

document.mozCancelFullScreen();

}

else if(document.msExitFullscreen){

document.msExiFullscreen();

}

else if(document.webkitCancelFullScreen){

document.webkitCancelFullScreen();

}

}

各浏览器fullscreenchange 事件处理

document.addEventListener('fullscreenchange', function(){ /*code*/ });

document.addEventListener('webkitfullscreenchange', function(){ /*code*/});

document.addEventListener('mozfullscreenchange', function(){ /*code*/});

document.addEventListener('MSFullscreenChange', function(){ /*code*/});

 

各浏览器fullscreenerror 事件处理

document.addEventListener('fullscreenerror', function(){ /*code*/ });

document.addEventListener('webkitfullscreenerror', function(){ /*code*/});

document.addEventListener('mozfullscreenerror', function(){ /*code*/);

document.addEventListener('MSFullscreenError', function(){ /*code*/ });

 

跨浏览器全屏模式下样式代码

:-webkit-full-screen { }

:-moz-full-screen { }

:-ms-fullscreen { }

:fullscreen { }
http://www.jq22.com/jquery-info404 video.js
https://www.cnblogs.com/nightstarsky/p/6518668.html video.js
https://www.haorooms.com/post/weixin_hidevideo_control 主要video 兼容 介绍
```
```html
	<video src="video.mp4" id="video" control style="width: 4.74rem;height: 2.95rem; margin: auto;display: block;object-fit: fill;opacity: 0;"  preload  webkit-playsinline="" playsinline="" x5-playsinline="">
							<!-- <source src="https://url.cn/5Ej92VL?sf=uri" type="video/mp4" > -->
	</video>
	实现刷系统内联播放
```