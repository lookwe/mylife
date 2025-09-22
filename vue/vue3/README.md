# vue3 学习笔记

记录学习 Vue3 点点滴滴，方便后期复习回顾

1. [Vue3 安装](#Vue3安装)
1. [defineComponent 函数](#defineComponent函数)
1. [ref 响应式](#ref响应式)
1. [reactive 和 toRefs](#reactive和toRefs)
1. [vue3 组件局部和全局注册](#vue3组件局部和全局注册)
1. [Vue 3 移除了哪些 Vue 2 的功能](#vue3移除了哪些vue2的功能)

## Vue3 安装

[官网安装](https://v3.cn.vuejs.org/guide/installation.html#%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

1. 安装 node.js 检查是否安装成功 `node -v`
2. 淘宝 npm 镜像 `npm install -g cnpm --registry=https://registry.npm.taobao.org`
3. 除了 cnpm 淘宝，还可以安装 Yarn `npm install -g yarn` 或者 `pnpm`
4. 安装 vue 和脚手架： `npm install -g vue@next @vue/cli` 或者 `yarn global add vue@next @vue/cli`

## defineComponent 函数

- [官网介绍](https://v3.cn.vuejs.org/api/global-api.html#definecomponent)
- 之前 vue 文件 js 部分会导出一个{name:'',data(),methods:{},xxxx}的配置选项对象，
- 而 defineComponent 就是把这个抛出的配置对象在做了变 vue3 处理，返回合成对象函数，用于手动渲染函数、TSX 和 IDE 工具支持
- 写法

```js
import { defineComponent } from "vue";
export default defineComponent({
    name: "App",
    setup() {
        console.log("setup-----");
    },
});
</script>
```

## 新增 setUp()函数 入口函数

- [setUp](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#setup-%E7%BB%84%E4%BB%B6%E9%80%89%E9%A1%B9)
- 未来解决以往 vue2 单文件代码量过大，不要维护，需要来回调，vue3 新增了 组合式 API，那么就要用到 setUp 函数，他是 `vue文件入口函数`
- setUp 介绍：
  1. 入口函数，会在 data, methods,computed,包括生命钩子之前解析；
  2. 由于 setUp 解析是最早的，因此 this 指向并不是组件实例
  3. 接受 2 个参数，props，context
  4. 该函数返回的内容，将暴露给计算属性、方法、生命周期钩子，等组件

## ref 响应式

- ref 函数主要功能就是将接受的任意参数，全部转为 vue 响应式，并且返回
- 只接受第一个参数，其他参数无效
- 返回一个`RefImpl对象`在使用他 `.value` 则就可以拿到 proxy 响应后的值
- ref 只适合单个

## reactive 和 toRefs

- reactive 可以定义对象类型响应对象，
- 如果不想加前缀，则可以利用`toRefs`转 ref

```js
import { reactive, toRefs } from "vue";
const user = reactive({ xxx });
return {
  ...toRefs(user),
};
```

- reactive 区别与 ref 他返回的响应式使对象每有被`refImpl`包裹，所以不需要 ref 一样`.value`才能获取到值

## vue3 组件局部和全局注册

- 在 3 中执行在`setup script标签`中引入即可在`template`中使用、无需再 components 注册
- 但是在普通正常 `script标签`中这需要 components 注册
- 区别点：
  - 局部对组件关系链更加友好，方便`tree-shaking`
  - 全局一次引入次次方便，但追踪效果差，不能`tree-shaking`
  - 在大批量页面使用同一组件，则推荐全局，如少出几个页面推荐组成

## Vue 3 移除了哪些 Vue 2 的功能

- 移除全局挂载 API 等需要全局挂载的，需要在 main.js 中手动挂载
  - `component、directive、filter、mixin`
  - 所有全局 API 都变成了 app 实例的方法，不再污染全局 Vue 对象
- 移除 `filters` 过滤器
  - 原因：增加了模板复杂性，且不利于类型推断
- $on、$off、$once 实例方法被移除
  - 例如：`this.$on('event', handler)`
  - 原因：与事件总线的使用场景不符，且容易导致内存泄漏。官方推荐 Pinia 通信
  - 替代：Composition API + mitt
- 移除 `Vue.prototype`
  - 例如：`Vue.prototype.$http = axios`
  - 原因：与 Vue 2 中的全局变量污染问题相关，增加了代码的维护成本和风险
  - 推荐：直接导入实现、或者封装在 composables `useRequest` Hook。
- 移除 `this.$children`
  - 例如：`this.$children.forEach(child => child.$destroy())`
  - 原因：与组件树的结构相关，容易导致代码的维护成本增加
  - 替代：`ref` 配合 子组件导出 `defineExpose` 方法
- 移除 `inline-template` 指令
  - 原因：不利于静态分析和工具支持
- 移除：$destroy() 方法
  - 例如：`this.$destroy()`
  - 原因： 手动销毁容易引发状态不一致
  - 替代：`unmounted` 生命周期钩子 手动销毁相关定时
- 移除 `.sync` 修饰符
  - 例如：`<Child :title.sync="xxx" />`
  - 原因：与双向绑定的使用场景不符，且容易导致状态不一致
  - 替代：使用 多个 `v-model` 指令或 `defineModel` 宏
