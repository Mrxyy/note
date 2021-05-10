---
title: http中的缓存
---
## 强缓存
+ 设置响应头为 cache-control：max-age=10（单位是秒）
+ 设置expire=绝对时间

## 协商缓存
+ 设置Etag = 唯一的字符串，比对请求头中的字段`if-none-match`是否一致 
+ 设置`Last-modified`，比对`if-modified-since`是否一致

## 总结
+ 请求阶段会判断请求是否命中，强缓存命中不会请求服务器，协商缓存命中还是会发生请求，需比对`last-mofified`和`if-modified-since`改状态码为304，客户会去locale找
+ disk cache 或 remory cache 一般是强缓存 分别是在磁盘或者内存中


[参考](https://blog.csdn.net/yehuozhili/article/details/103268433)