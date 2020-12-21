## 安装的必要工作

+ mysqld 会判别是否已经安装(bin目录或者path里面配置)、mysqld --install [命名]
+ net start/stop MySQL(Mysql软件对应的服务名称)

+ 安装mysql时候遇到的问题：
    1.解压版出现路径找不到问题：[解决方法](https://www.oschina.net/question/727667_121198)
    2.打开服务时出现错误：[解决方法](https://www.cnblogs.com/jianz/p/6756771.html)
    3.本地连接MySQL时候出现不能连接:[解决方法](https://www.cnblogs.com/cx-code/p/9287274.html)

## 以下是关于mysql数据库管理系统的的一些命令

+ mysql 进入Mysql
+ show mysql 展示系统中的数据库
+ creat database 【库名】 创建一个库
+ use 【库名】 连接一个库
+ show tables 展示库中的表
+ create table 【表名】建立一个表
+ drop 【表/库】 删除表或者库
+ describe 【表名】表字段描述
+ show wranings 显示警告
+ show errors 显示错误
+ select database() 查看当前所使用的的数据库
+ select version() 查看当前的版本


## sql语句
### (DQL）Data	query Language
 - select field (as newField) from table where ；
 - 运算符 都是带比较field
   + <,>,=,<>/!=
   + filed between [val] and [val] 先小后大 filed in (val,val)  
   +  and or not is null
   + like 模糊查询 (%  * ,_ ｛1｝) 
   + if(null，0) 判断val是否为空，计算时以什么代替
 - 多行处理，只能对有子元素的位置进行
	+ sum()  和
	+ count() 计数
	+ avg() 平均数
	+ max()
	+ min()
 - distinst 区别不能重复
 - 多变查询
 - 子查询
	+ select select返回必须是一个固定的值，因为,只能表示一个变量
	+ from select返回的是一个表
	+ where 返回应该是是一个唯一固定的值，比较是一个唯一值
 - union row 相加几位 LOW 必须相等

### (DML）Data Managers Language
 - 增加 
  +	insert into 【table】(field) values (val)
  +	insert into 【table】【all field】
  +	insert into 【table】(子表)
-   删
  + delete [field] from [table]
-  改
  + updata 【table】 set 【filed】 =【val】
### (DDL) Data DElivery language 
