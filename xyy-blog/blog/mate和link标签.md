# mete标签 key/value
 + content：value值
 + http-equiv：key值 发送请求时候 请求头内容
 + name：key值，通常会定义一些关键key，让设备读取，例如：
 ```html
	<meta http-equiv="Content-type" content="text/html; charset=utf-8"> <!--请求头  -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><!--关键key，视口  -->
	<meta name="apple-mobile-web-app-capable" content="yes" /><!-- 允许webapp -->
	<meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 显示手机信号、时间、电池的顶部导航栏的颜色。默认值为default（白色），可以定为black（黑色）和black-translucent（灰色半透明） -->
 ```
 
# link标签 rel（relateion 关系）/hrel（链接
+ rel ：定义关系
+ href：定义位置
```html
	<link rel="apple-touch-startup-image" href="images/start.jpg"/>
	<!-- 表示在点击主屏幕中生成的快捷图标后，网站在加载过程中，显示的图片。这个功能用户体验很好。避免加载时的白屏，减少用户等待网站加载过程的烦闷。缺陷是目前只支持竖屏浏览模式，横屏浏览时不支持。 -->
	<link rel="apple-touch-icon" href="images/iphone.png" />
	 
	<link rel="apple-touch-icon" sizes="72x72" href="images/ipad.png" />
	 
	<link rel="apple-touch-icon" sizes="114x114" href="images/iphone4.png" />
	 <!--这三项是针对不同版本自定义的不同的主屏幕图标。当然不定义也可以，点击主屏幕时，会以当前屏幕截图作为图标的。而其中apple-touch-icon表示的该图标是自动加高光的图标按钮。与之相对应的是apple-touch-icon-precomposed按原设计不加高光效果的图标。可根据实际项目情况，选择使用 分享图标也是他
 -->
 <link href="http://image.feeliu.com/web/favicon.ico" rel="Bookmark" /> 
 <!-- 书签 -->
	<link rel="stylesheet" type="text/css" href="print.css"  media="only handheld and (max-width: 480px)"/><!-- media 手持设备（小屏幕、有限带宽）最大为max-width: 480px 样式分离 -->
```

# 总结
__*link*__和__*meta*__标签都是为设备提供信息都是*key/value*方式

> 参考
+ [标签基础](https://www.w3school.com.cn/tags/tag_link.asp)
+ [标签用法](https://blog.csdn.net/wuyou1336/article/details/71512204)