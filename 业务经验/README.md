# 工作中重要业务经验笔记


## 业务
1. [微信支付](#微信支付)
1. 支付宝支付
1. 分享微信，朋友圈，微博
1. 直播webRtc
1. 直播带货
1. 小程序性能优化
1. 小程序日志分析
1. [多端设备自适应和响应式](多端设备自适应和响应式)
1. [消息订阅&累计订阅信息](消息订阅&累计订阅信息)
1. [移动端横屏适配](移动端横屏适配)
1. [产品隐私安全合规](产品隐私安全合规)
1. [input搜索框输入中文问题解决](#input搜索框输入中文问题解决)
1. [部分老款手机微信浏览器样式兼容](#部分老款手机微信浏览器样式兼容)
1. [微信浏览器公众号软盘高度收起问题](#微信浏览器公众号软盘高度收起问题)
1. [ios版本过高导致APP版本识别不到](#ios版本过高导致APP版本识别不到)

## 微信支付
* 概述：
* 实现步骤：

## 多端设备自适应和响应式
* 自适应：
    * 多套代码，对应专门的设备
    * 根据多个域名，对应的页面
    * 功能多，布局复杂，交互多，适合自适应，通过浏览器查看设备是手机，平板，或者PC
* 响应式：
    * 一套代码，多端适配。
    * 定位一个域名，适应任何宽度
    * 功能减低，内容少，交互少，使用响应式，根据宽度的变化，页面自己适应。媒体布局
    
    
  
## 消息订阅&累计订阅信息
* 小程序：一次性订阅消息，可多次接受消息
* 长期订阅，只部门大公司和政府可用
* 实现实例：
   1. 获取消息模板id，申请消息模板
   2. 调用接口


## 移动端横屏适配
* 在移动端通常是vh或者vw，视频，但是在横屏中，会出现头部偏大，部分区域小清空
* 解决方案：vh或vw 改用 vmin 单位适配


## 产品隐私安全合规
* 在项目使用过审隐私，比如爱加密等...需要过审
* 一方面公司法务对接，另一份就是我们开发的要求如下：
1. 获取用户信息
2. 获取用户地理数据
3. 如相册、摄像头等信息
4. 录音功能/步数
5. 读写用户磁盘
等等。涉及以上操作，需想用户申请授权，经用户同意才可执行操作

* 实现方案：
* 微信小程序：[https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html](授权)
* uniapp： [uniapp授权](https://uniapp.dcloud.net.cn/api/other/authorize.html)


## input搜索框输入中文问题解决
* 在做搜索查询需求中，input输入是，如果带拼音中文，则会出现无用频发搜索接口请求，例如：深圳，shenzhen，用oninput事件，则会s,h,e,n....触发事件请求接口
* 如果想让正常支持英文，有支持拼音汉字。那么可以使用input事件:
* `compositionstart`: 检查到输入框中有拼音汉字在拼
* `compositionend`： 检查拼音汉字拼写完毕
* 可在设置一个变量，在拼音开始时，设置 `false` 标识不触发接口请求，拼写完毕设置`true` 可执行接口请求
* 相关补充：在Vue框架，源码里对 `v-mode`也是做过同理的优化操作，所以vue项目中不需要手动处理了


## 部分老款手机微信浏览器样式兼容
* 在低版本手机中。如：iphone xs、在设置删除线样式，`del标签`、`s标签`、`text-decoration: line-through` 均无效
* `解决`：在改变中设置`v-if`等后端值出来，在现实，则解决改问题了
---
* 在低版本华为手机中，设图片设置固定rem像素，旁边元素不设置宽，父元素flex，发现图片会变形
* `解决`：图片兄弟元素这是， `flex: 1` 解决

## ios版本过高导致APP版本识别不到
* 背景：需求开发中遇到同ios同账号，不同版本系统下，通过浏览器API`window.navigator.userAgent`识别APP版本环境
* 问题：按钮通过校验版本号判断显示隐藏，A用户ios15能正常展示，B用户ios17则识别不到
* 解决：
```javascript
function iosJudgeVersion(targetV, appName) {
    const compareVersion = (version1, version2) => {
        let v1 = version1.split('.')
        let v2 = version2.split('.')
        let len = Math.max(v1.length, v2.length)
        for (let i = 0; i < len; i++) {
            let num1 = parseInt(v1[i]) || 0
            let num2 = parseInt(v2[i]) || 0
            if (num1 > num2) {
            return 1
            } else if (num1 < num2) {
            return -1
            }
        }
        return 0;
    }

    const u = window.navigator.userAgent.toLowerCase()
    // 判断目标环境 及 目标应用
    if (u.indexOf(`user_agent/${ appName }`) != -1 && u.indexOf(`user_agent/${ appName }(ios`) > -1) {
        const UA_FLAG = `user_agent/${ appName }(ios`.length
        const VERSION = targetV
        const firstIndex = u.lastIndexOf(`user_agent/${ appName }(ios`)
        const versionIos = u.substring(firstIndex + UA_FLAG, u.length - 1)
        const compareResult = compareVersion(versionIos, VERSION)
        console.log('ios 目标版本:', versionIos)
        console.log('ios 当前版本:', compareResult)
        // 如果低于5.0.60版本则特殊处理
        if (compareResult === -1) {
            // 版本过低
            return false
        } else {
           // 符合最低版本
           return true
        }
    }
}

// 是否满足版本
const isSatisfy =  iosJudgeVersion('5.0.60', 'boyu')
```
* 总计：不同手机系统版本，对应浏览器内核有有所区别，版本越高功能也越多及少部分API会改动，需要做对应兼容处理及备用方法

## 微信浏览器公众号软盘高度收起问题
* 解决部分手机软盘收起后高度无法恢复问题
* [解决方案](https://blog.csdn.net/qq_41387882/article/details/129061157?spm=1001.2014.3001.5502)