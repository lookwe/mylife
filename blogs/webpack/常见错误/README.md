#### Error Cannot find module ‘webpacklibnodeNodeTemplatePlugin

> 在webpack工程中，运行打包项目时候，如果提示保存信息：``Error Cannot find module ‘webpacklibnodeNodeTemplatePlugin`` 说明你安装的webpack有点问题了，下面我们解决这个问题

* **原因**：项目中有个别依赖 ``webpack`` 的不能是全局,需要在项目中单独安装



<hr>

* **解决**： 如下几种
* 1、进行局部安装解决：
```
npm install webpack --save-dev
```

* 2、用link方式，使npm模块链接到项目中
```
npm link webpack
```
