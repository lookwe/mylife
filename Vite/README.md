# Vite 构建工具

> 产出背景：随着现代互联网，超大项目，包含几千模块已成为普遍，新能遇到瓶颈。需要花费大量时间用在启动，打包，及时使用了HMR改善了ui下，但是还是极大影响开发效率和幸福感。
第二个：浏览器开始支持原生ES模块

* 依赖： vite使用 `esbuild 预构建依赖` 比javaScript编写打包器预构建依赖快10-100倍

* 源码：处理并非JS文件（JSX，Vue，CSS）需要转换编辑，同时按需加载。
* vite以原生ESM 方式提供源码，依赖浏览器，部分打包程序工作交给浏览器：Vite只需要在浏览器请求源码时，进行转换并按需提供源码。动态导入代码，只有屏幕操作才被处理

* [优点](#优点)
* [兼容性](#兼容性)
* [搭建安装vite项目](#搭建安装vite项目)
* [设置跨越](#设置跨越)

## 优点
* 基于原生ES模块 提供丰富内建功能，极速热更新(HMR)

* 使用Rollup打包代码 高度优化静态资源
* 开箱即用 丰富插件API 和JavaScriptAPI 高度扩展性 完整类型支持

## 兼容性
* 需：node版本 大于12.00版

## 搭建安装vite项目
* npm
```
 npm create vite@latest
```
* Yarn
```
yarn create vite
```
* PNPM
```
pnpm create vite
```
* 执行完安装命令执行下一步下一步，输入姓名名称， 选择框架，react或vue，选择模块即可

## 设置跨越
* 设置跨越请求 非生产环境可配置在文件中
* 注意：需后端服务先持CORS，并正确配置CORS策略
```java
server: {  
    proxy: {  
      '/api': {  
        target: 'http://localhost:3000', // 后端API地址  
        changeOrigin: true,                 // 开启跨域  
        rewrite: (path) => path.replace(/^\/api/, '') // 移除/api前缀  
      }  
    }  
  }
```