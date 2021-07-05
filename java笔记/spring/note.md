# Spring笔记

  + 配置文件，主要是配置bean形成一个IOC容器
  + 引入配置文件
  + getBean()：得到一个bean也就是一个类实例

## IOC（Inversion of Control）

  +  解耦合，将控制权交给spring，IOC也叫依赖注入(DI)，*`{a:A}`* 若是本来是需要自己new，变成ioc容器注入

## AOP

  + 代理模式
    - 怎样实现一个动态代理
    - 通过 Proxy.getProxyInstance()
    - 实现实现invokehandle接口，invoke返回结果
      
  + 配置切面和advise点
    
    ```xml
         <!--配置切面-->
            <aop:config>
                <aop:aspect ref="advice">
                    <aop:pointcut id="targets" expression="execution(* cn.khue.pojo.Target.target())"/>
                    <aop:before method="before" pointcut-ref="targets"/>
                    <aop:after method="after" pointcut-ref="targets"/>
                    <aop:after-returning method="afterReturning" pointcut-ref="targets"/>
                    <aop:after-throwing method="afterThrowing" pointcut-ref="targets" throwing="e"/>
                    <aop:around method="around" pointcut-ref="targets"/>
                </aop:aspect>
            </aop:config>
         
         <!--配置通知点-->
            <aop:config>
                <aop:pointcut id="targets" expression="execution(* cn.khue.pojo.Target.target())"/>
                <aop:advisor advice-ref="before" pointcut-ref="targets"/>
                <aop:advisor advice-ref="return" pointcut-ref="targets"/>
                <aop:advisor advice-ref="throw" pointcut-ref="targets"/>
                <aop:advisor advice-ref="around" pointcut-ref="targets"/>
            </aop:config>
    ```
    

## 注解

  + https://blog.csdn.net/weixin_39805338/article/details/80770472
    
    ```xml
         <!--声明注解扫描-->
        <context:component-scan base-package="cn.khue.pojo,cn.khue.advice"/>
        <!--开启aop注解支持-->
        <aop:aspectj-autoproxy expose-proxy="true"/>
        <!-- 注册事务管理驱动 -->
        <tx:annotation-driven transaction-manager="txManager"/>
    ```
## 事务

 + 使用通过注入`TransationManager`手动开启事务
 + mybatis中使用的是`Transation(Connection)`开启
 + DataSource会保证每个线程中取得是同一个connect

  ```xml
        <!--配置事务切点 -->
        <aop:pointcut id="services" expression="execution(public* com.pb.service.*.*(..))" />
        <aop:advisor pointcut-ref="services" advice-ref="TestAdvice" />

        <!-- 配置事务的属性 -->
        <tx:advice id="TestAdvice" transaction-manager="transactionManager">
            <!--配置事务传播性，隔离级别以及超时回滚等问题 -->
            <tx:attributes>
                <tx:method name="search*" propagation="REQUIRED" read-only="true" isolation="DEFAUT" TIMEOUT="-1" />
                <tx:method name="del*" propagation="REQUIRED" />
                <tx:method name="update*" propagation="REQUIRED" />
                <tx:method name="add*" propagation="REQUIRED" />
            </tx:attributes>
        </tx:advice>
   ```