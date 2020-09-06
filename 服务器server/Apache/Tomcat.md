## [Tomcat9.0的配置](https://www.cnblogs.com/gaohw33/p/11498712.html)
## [Tomcat9.0的配置](https://blog.csdn.net/qq_35661171/article/details/79165535)
![虚拟路径配置](虚拟路径配置.png)
|目录	|作用	|
|--	|--	|
|	bin|	命令文件|
|	conf|	配置文件|
|	logs|	日志文件|
|	temp|	临时文件|
|	webapps|	项目目录|
|	work|	运行内存|
+ 启动
	1. windows startup.bat
	2. 会依赖 JAVA_HOME这个环境变量
	3. netstat -ano
+ 定义路由(虚拟目录)
	- 1.重启服务器，bin\server.bat\host下Context docpath="指向目录" path="路由名称" 
	 ```<Context docBase="C:\work\jstore\web" path="/jstore" reloadable="true"/>```
	
	- 2.不重启，conf\catalina 配置
	 ```第二种：在本地tomcat的conf目录中，新建Catalina/localhost目录（这里要注意文件名的大小写），然后在该目录下新建一个xml文件，名字不可以随意取，要和path后 的名字一致，我这里就应该是jstore.xml文件,<Context docBase="C:\work\jstore"  reloadable="true"/>```

+ 虚拟主机
	- conf/server.xml 添加主机 域名 可以配置默认主机
	- System中映射ip
	- catalina中会生成 域名文件
	

 