# mysql命令
	DBA 数据库员
# DQL data query language
# DML data manager language
# DDL data defintion language（definetion）
# TCl transaction control language
# DCL data control language

# 外键的用法，外键可以为空，外键reference具有唯一性 unique

``` sql
drop table if exists b;
drop table if exists a;
create table a(id int primary key auto_increment,name varchar(255) unique);
create table b(
	name varchar(255),
	age int,
	foreign key (name) references a(name)
);

insert into a (name) values("yang");
insert into b (name,age) values("yang",15);
```

# 事务 tcl commit; rollback
	+ 原子性 A
	+ 一致性 C
	+ 隔离性 I 
	+ 持久性 D
 
# 事务隔离 read uncommitted  read committed repeatable read serializable

# 索引 create index 【indexName】 on table 

b+tree 分区

# 视图 create view 【viewName】 from 【table、select ...】

# 设计三范式
  1.主键具有原子性，最小单元
  2.主键必须与其他field有依赖
  3.不能有依赖传递
