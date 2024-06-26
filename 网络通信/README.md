# 网络通信

* [TCP/IP协议](#TCP/IP协议)
* [HTTPS/HTTP](#HTTPS/HTTP)
* [常见http请求状态码](#常见http请求状态码)
* [对称与非对称加密](#对称与非对称加密)
* [非对称加密](#非对称加密)
* [VPN技术原理](#VPN技术原理)
* [Mbps和MB/s区别](#Mbps和MB/s区别)
* [决定网速快慢因素有哪些](#决定网速快慢因素有哪些)


## TCP/IP协议

## HTTPS/HTTP
* http是什么？
  * 一个客户端与服务器协商规划通信，互相看得懂对方信息的一种协议，已明文展示，有网络知识都看得什么内容

* https又是什么
  * 在http基础之上，加了密钥出来，为了保证信息的安全，顾名思义多了`S`, 这里S表示: `SSL/TLS`
  * SSL/TLS 都是加密协议。不过是两种版本，类似是王老吉/加多宝。一个是过去老版本，一个是未来主流版本

## 常见http请求状态码
* 1开头
    * `总体：`请求还在处理中，刚刚开始
* 2开头
    * `总体：`成功处理相关
    * 200： 请求成功
    * 201： 创建成功
    * 204： 成功无内容
* 3开头
    * `总体：`资源相关问题，迁移，重定向等
    * 301：URL永久更改了地址
    * 302：临时移动
    * 304：资源为更新，直接用缓存
* 4开头
    * `总体：`客服端相关错误
    * 400：请求参数后端无法解析
    * 401：身份校验有问题，无法确认身份
    * 403：身份已确认，但没有权限
    * 404：地址写错，或者资源以及不在了
    * 409：编辑冲突，新老版本为对齐
* 5开头
    * `总体： `服务器相关错误
    * 500：后端代码出错，或数据库错误
    * 502：网关错误，拿不到东西返回
    * 503：服务器宕机，负荷超载或者维修中

## VPN技术原理 
* 本质：两端或者多端通信，发生时，加密 -> LPS -> 网络供应商 -> LPS 解密 -> 接受
* 

## 对称与非对称加密
* 对称加密
    * 大白话讲就是：我们通信的真正信息，我是通过倒叙发送给你的。你接受之后，也要用倒叙转化，才能看到真正信息；
    * 其原理：发送方/接受方。都用同一种规则进行加密解密
    * 缺点：如果被外人知道加密规则，那么就不管用了

* 非对称加密
    * 大白话：
    * 其原理：利用对外公钥，和私有密钥，组合成相同信息


## Mbps和MB/s区别
* `Mbps`: 表示每秒传输的兆比特数（bit 信息量最小单位），5G卡可提升之500Mbps，千兆可达1000Mbps
* `MB/s`: MB是一个数量单位（兆字节数 Byte） 而`MB/s`则表示每秒传输兆字节数, 指文件传输、设备存储读写速度和效率参数
* `恶补知识`：500Mbps网速并不代表文件下载速度就是500MB每秒。其直接换算比为8:1，（1Byte = 8bits） 正确下载速度为约等于：62.5MB/s. 其中可能还有其他应用占用网络，下载速度也会有影响
    * 计算公式：(nMbps * 1000000) / 8 / 1048576 = 最总/MS 
    * 补充1：(nMbps * 1000000) `1M（兆）等于1,000,000`
    * 补充2：1048576 即`(1MB = 1048576 Bytes)`

## 决定网速快慢因素有哪些
* 网速下行速率Mbps很高，但是网络还是偶尔卡顿不稳定因素：
    * `延迟/ms` 网络数据包请求来回时间 0-10ms区间则正常
    * `抖动/ms` 之信息发送到接收延迟时间，指最高延迟和最低延迟时间差，标志网络稳定性
    * `丢包率` 之一个或N个请求数据包无法通过网络抵达服务器，比率越大网络越差
    * `宽度设备数量` 家庭带宽固定一条及固定速度 分配到光猫、手机、电脑等设备上则资源越小
    * `路由器硬件设备` 路由器配置不同网络性能也不同，建议千兆路由器

* 下行速率Mbps
    * 在于下载文件、视频播放、接受信息
* 上行速率Mbps
    * 在于上传文件、开直播、发送消息
