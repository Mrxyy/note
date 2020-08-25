+ 服务设置，无论路由为什么全部返回单页面
+ hash模式
	- 利用hash解析路由组件，使用过程中使用hash页面不刷新原理
+ 历史模式
	- 使用histroy.pushstatus()添加历史状态不刷新，按照path之后的路径解析
+ 二者添加的信息都为，项目路由
	- 动态路由按照:param方式可以取得
	- params可以取得参数值
	- hash为hash值
+ $router 路由器,$route 当前路由