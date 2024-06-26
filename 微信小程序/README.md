# 原生小程序


## 功能篇
* 代码依赖分析
* 热重载
* 局部编译
* 自动化录制回访
* 小程序外联：URL、Scheme、URL Link、Short Link
* 真机性能分析、漏洞扫描插件

## 性能优化篇
* [小程序原理](#小程序原理)
* [小程序基本配置](#小程序基本配置)
* [微信小程生命周期](#微信小程生命周期)
* [小程序跳转页面方式](#小程序跳转页面方式)
* [生成骨架屏](#生成骨架屏)
* [小程序经验](#小程序经验)
* [小程序优化](#小程序优化)
* [虚拟DOM长列表优化](#虚拟DOM长列表优化)
* [优化视图动画效果](#优化视图动画效果)

<br/>

## 小程序原理
* 目前APP三种主流：
    * native原生
        * 成本高、迭代发版慢、
        * 体验最好，最顺畅、安全有审核
    * WebView
        * 体验差，安全低，
        * 开发快，简单好上手
    * 混合开发
        * 体验较好，可使用部门原生插件，有专门部门审核及后台管理功能
* 小程序就是采用混合开发；且为了内容安装，有专业部门审核小程序
* `渲染:`逻辑双线程，和浏览器webkit不同不是一个线程，因为可能阻塞
为了安全和防止逻辑和视图阻塞用两个线程，但是互相通信不了，也无法动态修改样式
* `通信方式：`用微信原生宿主搭建桥梁，去两边通信，在两个线程注入微信特有通信函数

## 小笔记
* 小程序架构分为三大层：逻辑层、渲染层、系统层
* 小程序使用混合开发，支持跨平台，同比Web更接近原生；
* `双线程模型分离渲染`和逻辑，高渲染性能
* 小程序基于基础库之上运行，有与JsBridge负责两个线程，通过微信原生通信

* 渲染层：
    * 通过Virutal DOM减少渲染开销，提供局部数据更新和重渲染的效率，提升流程度
    * 不支持操作DOM BOM, 无法使用浏览器暴露接口(跳转、动态执行脚本)，提高可控和安全；


## 小程序基本配置
* 页面路由配置
    * 默认路由第一个位首页
* 窗口表现配置
    * 导航栏背景、颜色、内容、样式
    * 全局下拉刷新
    * 屏幕反向旋转设置
* 底部标签配置
    * 底部菜单，最少2个，最多6
    * 文字颜色仅支持16进制

## 微信小程生命周期
* 应用级：初始化(只执行一次)、显示、隐藏、监听错误，
* 页面级：显示、隐藏、onLoad、onReady、onUnload、onPullDownRefresh、onReachBottom....
* 隐藏在后台一段时间，系统资源不足则自动销毁
* 小程序页面是以栈结构维护的。当路由发生变化，栈就变化，生命周期也是；

## 小程序跳转页面方式
* navigateTo、redirectTo、只能打开非tabBar页面
* switchTab 能打开tabBar，但是不能传参；
* reLaunch 打开任意页面、关闭其他WebView线程页面
* 路由跳转参数，在onLoad里获取

## 生成骨架屏
* [官网文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html)
* 本质：静态骨架页面结构的模板，不用等到接口直接渲染，较少用户等待焦虑情绪，用户体验
* 过多使用反而负优化，增加无用代码和渲染成本，只首屏或重要页面，一般1-3个
* 实现方式：
    1. 在开发者工具，页面最下面功能栏`...`点击选择生成骨架屏
    2. 配置个性化不能修改生成的代码，而是通过全局或者局部配置参数调整，保持统一，及后期拓展和维护

## 虚拟DOM长列表优化

## 优化视图动画效果


## 小程序经验
* 提供了3种 RESTful API接口。用于生成带参数的小程序或二维码
* 图片采用外链接CDN、小图片使用Base64地址替代；
* 小程序对准许下载的域名有白名单限制，可以图片域名在小程序后台设置
* 如果小程序性能及用户品侧都优秀，则可以享受发版快速审核
* 小程序对内容审核有要求，如果用户恶意在自己稀上传不良信息，小程序会停封风险

## 小程序优化
* 复杂及量大页面才分，减少渲染量，简化流程
* data相应变量大小及层度控制




