# 计算机网络

## 网络、互联网（internet）、英特网（Internet）
+ 网络：通过交换机将计算机连接起来。
+ 网联网：通过路由器将交换机连接形成以太网
+ 英特网：最大的网联网

## ISP（Internet server provider）
+ 全球 -> 国家 -> 地区
> 不同节点通信需要连接共同的父节点（交换中心），通信。

## 因特网的组成

### 边缘部分 （主机间的通信）
+ c/s 1对多
+ p2p 端到端 server <- A <- B(直接从A处下载，不是从server处，减少服务器压力)

### 核心部分
主机A->a-b->主机B
+ 电路交换 （实时通信，不会堵塞）
+ 报文交换  报文头记录目标位置
+ 分组交换  将报文分三段，并发第二段和第三段

## 网络性能
+ 速率：b/s，一条信道上每秒能跑多少bit（量）
+ 带宽：最高速率
+ 吞吐量： 所有信道上的速率的总和
+ 延时:
  1. 发送时延：发送一个chunk需要多少时间，量/速率
  2. 传播时延：距离/速度
  3. 排队时延：路由处理信号的排队的时长
  4. 处理时延：处理报文的时长
  5. 信道利用率：和速率成反比
  6. RTT（round trip time）
  7. 带宽延时积：过程中最大通过多少数据量

## WAN（witd）和LAN（local Area Internet）

## OSI 七层协议
+ 应用层 应用程序
+ 表示层 信息加密、压缩
+ 会话层 通过协议建立c/s会话
+ 传输层 分段 
+ 网络层 加上ip，选择路径
+ 数据链路层 加上网卡的mac地址
+ 物理层 电压、物理接口协议

### tpc/ip 协议族
+ 应用层 (http)
+ 传输层 (tcp/udp)
+ 网络层 (ip)
+ 物理层


