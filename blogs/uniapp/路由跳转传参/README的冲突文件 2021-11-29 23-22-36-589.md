## uniapp 页面跳转的几种方式
> 他的页面跳转和小程序和vue很相似。只是方法和标签有所不同。主要分为2种跳转模式，页面标签跳转和方法跳转

### 第一种 标签跳转
> 类似Vue的 ``<router-link>`` 标签 [详细官网介绍](https://uniapp.dcloud.io/component/navigator)

```html
<!-- 携带 简单字符串参数 -->
<navigator url="../user/user?name=lookwe">我要跳转新页面 【页面链接】</navigator>

<!-- 携带 复杂类型参数 -->
<navigator
    :url=`../user/user?userinfo=${encodeURIComponent(JSON.stringify(userinfo))}`>
    我要跳转新页面 【页面链接】
</navigator>
```

### 第二种 事件方法跳转	
> 类似Vue ``router.push({ path: 'xxx' })`` 方法，且unipp提供了6钟不同业务的跳转方式，以``uni.xxx`` 方式调用。详细介绍[详细官方介绍](https://uniapp.dcloud.net.cn/api/router?id=navigateto)

* ``uni.navigateTo``： 【保留】当前页面，跳转到应用内的某个页面；
* ``uni.redirectTo``： 【关闭】当前页面，跳转到应用内的某个页面；
* ``uni.reLaunch``： 【关闭所有】页面，打开到应用内的某个页面。
* ``uni.switchTab``： 跳转到tabBar页面，并关闭其他所有非tabBar页面。
* ``uni.navigateBack``： 返回上一个页面，酷似vue``router.to(-1)``,
* ``uni.preloadPage``： 预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。

```html
<view>
    <text @click="toUserPage">我要跳转新页面 【点击事件】</text>
</view>
methods: {
        toUserPage() {
                // 跳转新页面 同时不销毁当前页面
                uni.navigateTo({url: "../user/user?name=lookwe")
                
                const userinfo = { name: 'lookwe'}
                // 关闭当前页面，去往指定页面
                uni.redirectTo({
                        url: `../user/user?userinfo=${encodeURIComponent(JSON.stringify(userinfo))}` 
                })
                
                // 其他方式
                ...
        },
}

```