# Vue 实战开发中常用硬核功能

开发经验也算是衡量一和程序员的标准，甚至找工作也被定为门槛。如何获得经验，这就是需要大量的实战开发中所得。包括功能需求，遇坑解决，技术栈扩展，思维提升等等...

> 适合经验缺乏，遇到需求不知道咋办小白学习和参考。【可恶啊，头发还有那么多】

## 目录

* [功能需求]
* [遇坑解决]
* [技术栈扩展]
* [思维提升]
* [封装组件]
* [Vue性能优化]
* [vue3]

## 功能需求

1. [封装组件技巧经验](#封装组件技巧经验)
1. [配置全局路径别名](#配置全局路径别名)
1. [高级封装组件](#高级封装组件)
1. [动态权限路由](#动态权限路由)
1. [按钮权限控制](#按钮权限控制)
1. [Vue单元测试](#Vue单元测试)
1. [动态导航菜单](#动态导航菜单)
1. [请求服务器封装](#请求服务器封装)
1. [webpack配置全局svg组件](#配置全局svg组件)
1. [开发中环境配置策略](#开发中环境配置策略)
1. [模拟数据Mock](#模拟数据Mock)
1. [请求代理跨域](#请求代理跨域)
1. [keep-alive及原理](#keep-alive及原理)
1. [Vue哪些优化点](#Vue哪些优化点)
1. [Vue模板装饰器方案](#Vue模板装饰器方案)
1. [vue3Table组件优化](#vue3Table组件优化)
1. [项目开发大数据优化](#项目开发大数据优化)
1. [Vue项目之启动秒数开启](#Vue项目之启动秒数开启)

### 封装组件技巧经验
1. `$attrs` 简化多层组件之间props传值；
2. `$listeners` 简化多层组件之间事件传递；
3. `$Slots` 更多拓展自定义组件传值，包括自定义html元素，及对象；
4. `props validator` 增强组件传值稳健性，可自定义业务代码效验参数；
5. `$refs` 对外提供API 增强组件灵活度和可控性；

### 配置全局路径别名

* **对应的需求**： 当我们文件慢慢变大。特么是在模块化下。需要定义很多文件夹，按逻辑划分模块。每个模块下又出现很多文件。我们使用的时候需要  `import` 功能路径导出使用，可是文件路径很深怎么办，感觉很浪费代码量和心思。

* **解决方案**： 使用 **webpack** 定义别名完成公共常用的路径收取处理， 存在一个变量里。例如：vue-cli提供的@别名，=》 './src'路径。代码实现：在vue-config.js文件配置

  ```javascript
  const path = reqire("path");
  module.exports = {
  	// 配置最终和webpack合并
  	configureWebpack(config) {      
  		// 定义别名 comp 指定为 src/components 目录
          config.resolve.alias.comp = path.join(__dirname, 'src/components');
      }
  }
  ```


### 高级封装组件

* 这里模仿ElementUI源码。实现封装自定义组件主要用于进阶vue 更深层巩固Vue通信基站。封装ElementUI组件之一表单组件
1. **`el-input`** 简单的原生input数据双绑定组件 使用$arrt  $lister 高级属性
2. **`el-form-item`** 使用开发常用表达表单验证
3. **`el-form`** 表单组件提交及总总时间路线

### 动态权限路由

* **对应的需求**：权限类型相关，隐私保密页面的控制和保护、让无相关人员无法访问

* **实现思路**：前端路由分2个模块。一个公共模块任何人都可以访问，如：登录注册也，另一个是权限保护路由模糊

  1. 划分受保护路由，并给路由指定原数据 `mate` 角色

     ```javascript
     {
         path: "/about",
         component: () =>
             import(/* webpackChunkName: "home" */ "@/views/compose/About.vue"),
         name: "about",
         meta: {
             title: "About",
             icon: "denglong",
             roles: ['ordinary','admin'] // 规定那些角色可看
         },
     }
     ```

  2. 定义全局路由守卫。判断当前用户信息，token 和 角色。已经他是否去往报名单。

  3. 如何token没有则 去往登录页，| 有则取出用户角色 和 保护路中的 **`meta`** 对指定的角色判断。有则取出存放新的路由数组。

  4. 通过循环遍历后得到新的路由数组 并动态添加到 router对象上。使用 `router.addRoute([...])` 即可，next({...to})

* **后端存储动态路由方案**

  如果后端存路由的话，那我们请求登录。即可后端提供可访问路由器数组。原理一样。只不过前端不需要用户角色去判断过滤了，这部有后端直接数据库匹配查询返回我们当前角色的路由。

  * **有坑**：不过这种情况下需要注意的，后端返回是JSON对象。那我们路由中：component: import()=>{} 就会变成 `component: “import()=>{} ”` 这种显然前端无法识别路由配置，所以我们需要定义一个 组件映射后端数据的表

    ```javascript
    // 前端组件名和组件映射表
    const map = {
    //xx: require('@/views/xx.vue').default // 同步的⽅式
        xx: () => import('@/views/xx.vue') // 异步的⽅式
    }
    // 服务端返回的asyncRoutes
    const asyncRoutes = [
        { path: '/xx', component: 'xx',... }
    ]
    // 遍历asyncRoutes，将component替换为map[component]
    function mapComponent(asyncRoutes) {
        asyncRoutes.forEach(route => {
            route.component = map[route.component];
            if(route.children) {
                route.children.map(child => mapComponent(child))
            }
        })
    }
    // 动态添加新路由
    $router.addRoutes(mapComponent(asyncRoutes))
    ```

  * 然后循环遍历把字符串，换成正在可以执行的路由配置对象。并动态添加到路由器中。
  
### 按钮权限控制

* **对应需求**：权限颗粒化 某个页面肯能涉及很多操作，比如点击某个按钮执行相关操作。功能复杂时候一个页面会出现N多个按钮，并且对应用户角色能看到的按钮还要做处理，比如：批量删除按钮，一般用于权限大的用户设定
* **实现思路**：最常见的，可能小白多少都会使用 ``v-if`` 控制解决吧。可是这样的缺点: 不够灵感，不方便维护。如果后端角色字段发生变更，你可能想有打死后端那个人的冲动。
* **解决方案**：注册全局指令
  ```javascript
    Vue.directive("permission", {
        // 元素插入时候出发 binding 用户使用指令传来的相关参数
        inserted(el, binding) {
            // 获取指令的值：按钮要求的角色数组  取出结构赋值 定义别名pRoles接收
            const { value:pRoles } = binding;
    
            // 获取用户角色
            const roles = store.getters && store.getters.roles;
    
            if (pRoles && pRoles instanceof Array && pRoles.length > 0) {
                // 判断用户角色中是否有按钮要求的角色
                const hasPermission = roles.some(role => {
                    return pRoles.includes(role);
                });
    
                // 如果没有权限则删除当前dom
                if (!hasPermission) {
                    el.parentNode && el.parentNode.removeChild(el);
                }
            } else {
                throw new Error(`需要指定按钮要求角色数组，如v-permission="['admin','editor']"`);
            }
        }
    });
  ````
  页面中使用：`<button v-permission="['admin']">批量删除</button>`

### Vue单元测试

 * **对应需求**：程序员除了编码能力，测试能力也是要必须的。如果不想被项管骂得惨，那么调试不能少
 * **实现思路**：

### 动态导航菜单
* 以routes这个数组的数据，进行元数据处理；
* 对html结构进行数据循环，循环中通过v-if,v-else分别处理有子集和无子集的两种情况
  * 无子集：就直接显示数据；
  * 有子集：则通过一个函数式组件进行递归


### 请求服务器封装


                               
### 配置全局svg组件

* **对应的需求**：当我们SVG越来越多。且还方便管理，使用也非常繁琐，比如,去阿里云图库找，还需要打包出来。还要做对应处理，显得非常吃力。

* **解决方案**： 利用vuecli嵌入的webpack。给他加一个svg文件处理的 `loader`。然后动态加载他们，并定义个vue组件。组件控制他的样式，大小，布局等。提前你需要svg存放在 `icon/svg` 文件目录下
  安装处理svg插件
  ```
  npm i svg-sprite-loader -D
  ```
  vue.config.js中配置。
  icon目录下创建index.js 。并在main.js引入；
* 高级配置 chain Webpack
* 案例1：开发中SVG处理
    * 往常开发出来svg会网上下载下来，为了处理兼容性每次都需要打包，生成好几个不同的字体文件，不同浏览器输出不同字体文件
    * 问题： 如何svg需要改变，又要需要重新下载打包 在放到项目里。变得繁琐不方便

    * 解决方案1： svg-sprite-loader 组件 安装:npm i svg-sprite-loader -D
    * vue-cli-service 主要作用就是帮你把svg打包打一个矢量图库里，每一个svg就是会里面多加一个id为他名称的资源，并且会放在网页顶部
    * 在配置规则时候 可以使用 vue inspect --rule [svg] 规则名

* 方案2:  用线上 的http资源直接饮用
```javascript
chainWebpack(config) {
    // 配置svg规则
    // 1. 默认svg的规则不会碰他，得排除 让其他svg规则排除的自己定义目录下svg处理
    config.module.rule('svg')
        .exclude.add(ICONS_FOLDER) //ICONS_FOLDER =》 icon目录

    // 2 新增追加 icon规则 只包含我自己的icons目录4
    config.module.rule('icons')
        .test(/\.svg$/) // 自定义规则
        .include.add(ICONS_FOLDER).end() // 指定目录 如果没有加end()会报错.这当前事例已经进入add数组去，取消退回来
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({ symbolId: 'icon-[name]'})
}
```

  ```javascript
  import Vue from 'vue'
  import SvgIcon from 'comp/SvgIcon.vue'
  
  // 让vue 动态自动加载  获取一个 /svg目录 为上下文 获取所有 .svg 文件
  const req = require.context('./svg', false, /\.svg$/);
  
  //获取当前目录中所有文件名 并让req函数加载他们
  req.keys().map(req);
  
  // vue 注册组件
  Vue.component('svg-icon', SvgIcon);
  ```

### 开发中环境配置策略
* 创建3种场景环境配置文件
    1. env.dev 开发环境
    2. env.pro 生产环境
    3. env.test 测试环境
* 使用配置判断： `process.env.xxx`    
  
### 模拟数据Mock  
* 创建一个mock文件夹，并在vue.config.js中添加配置 proxy中的else部分
* 配置mock与真实环境api的切换 （注意，接口名与后端保持一致） 
* 安装插件cross-env,使之在windows环境下生效； 
* 修改pack.json的配置

### 请求代理跨域
```

```

### keep-alive及原理
* [keep-alive组件](./组件/keep-alive/README.md)

### Vue哪些优化点
* 路由懒、图片懒加载
* keep-alive对组件缓存处理
* mini-css-extract-plugin插件抽离css
* 配置optimization处理公共js代码抽离
* 使用cdn方式引入减少项目体积
* 小图使用base64，多张固定图片合雪碧图；
* 前后端开启Gizp支持，减少js包体积
* 合理应用生命中周期，做事件，监听，定时销毁任务
* for循环合理用于Key，提高diff算法快速定位
  * 在列表有增删操作中，主要key不能设置index

### Vue模板装饰器方案
* 本质：装饰器其实就是一个函数；
* 作用：在不修改原始[类、方法、属性]等源代码之上。做额外扩展功能
* 方案：``vue-property-decorator``
* 主要API：
    * Component: 类装饰器
    * Emit：方法装饰器
    * Prop: 属性装饰器
* 访问权限:
    * 公共：`public`
    * 受保护: `protected` 当前类或子孙类可访问
    * 私有：`private`
    * 只读：`oradonly`



### vue3Table组件优化
* v-memo 仅供性能敏感场景的针对性优化，会用到的场景应该很少。渲染 v-for 长列表 (长度大于 1000) 可能是它最有用的场景

### 项目开发大数据优化
* 说明：在页面渲染元素超过一定数量时，浏览器交互会出现卡顿显示，原因：渲染元素过多，并且是通过v-for，以为着它原型还挂着一个响应对象， 导致内存压力大
* 解决方案：
  * 避免获取大数据：采用分页获取
  * 无法避免大数据：则使用浏览器虚拟滚顶方案，只渲染视觉窗口区域元素，
  * 避免无谓的更新：使用`v-once`让改元素只渲染显示一次，并且不需要监听响应变化，减少性能消耗
  * 按需加载懒加载：通过用户交互行为，在决定下一步是否需要加载数据，比如图片懒加载，tree级联，树菜单等等
  * 优化更新逻辑，使用`v-memo`缓存子树，设置条件的更新，提高复用，避免不必要的更新

### Vue项目之启动秒数开启
* 在项目开发时，启动项目是必须的，但项目庞大后，启动往往时间越长，亲自见过最长。1.30秒才完成
* `解决方案`：使用webpack插件，使用DLL缓存机制，将构建资源映像在电脑磁盘中，即使电脑关机开启，不影响缓存。
* `原理过程`：第一次打包还是需要正常时间，打包后会将内容存储在映射表中、第二次启动则优先寻找缓存，有则取，无则构建打包（显著提速90%）
* `实操代码`：
  * 安装依赖：`npm install --save-dev hard-source-webpack-plugin `
  * 配置文件中代码：
  ```javascript
    const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

    module.exports = {
      // ......
      plugins: [
        new HardSourceWebpackPlugin() // <- 直接加入这行代码就行
      ]
    }
   ```

