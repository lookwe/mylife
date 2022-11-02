# vue3学习笔记
记录学习Vue3点点滴滴，方便后期复习回顾

1. [Vue3安装](#Vue3安装)
1. [defineComponent函数](#defineComponent函数)
1. [ref响应式](#ref响应式)
1. [reactive和toRefs](#reactive和toRefs)
1. [vue3组件局部和全局注册](#vue3组件局部和全局注册)

## Vue3安装
[官网安装](https://v3.cn.vuejs.org/guide/installation.html#%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)
1. 安装node.js   检查是否安装成功 `node -v`
2. 淘宝npm镜像  `npm install -g cnpm --registry=https://registry.npm.taobao.org`
3. 除了cnpm淘宝，还可以安装Yarn `npm install -g yarn` 或者 `pnpm`
4. 安装vue和脚手架： `npm install -g vue@next @vue/cli` 或者 `yarn global add vue@next @vue/cli`


## defineComponent函数
* [官网介绍](https://v3.cn.vuejs.org/api/global-api.html#definecomponent)
* 之前vue文件js部分会导出一个{name:'',data(),methods:{},xxxx}的配置选项对象，
* 而defineComponent 就是把这个抛出的配置对象在做了变vue3处理，返回合成对象函数，用于手动渲染函数、TSX 和 IDE 工具支持
* 写法
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

## 新增setUp()函数 入口函数
* [setUp](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#setup-%E7%BB%84%E4%BB%B6%E9%80%89%E9%A1%B9)
* 未来解决以往vue2 单文件代码量过大，不要维护，需要来回调，vue3新增了 组合式API，那么就要用到 setUp函数，他是 `vue文件入口函数`
* setUp介绍：
    1. 入口函数，会在 data, methods,computed,包括生命钩子之前解析；
    2. 由于setUp解析是最早的，因此this指向并不是组件实例
    3. 接受2个参数，props，context
    4. 该函数返回的内容，将暴露给计算属性、方法、生命周期钩子，等组件

## ref响应式
* ref函数主要功能就是将接受的任意参数，全部转为vue响应式，并且返回
* 只接受第一个参数，其他参数无效
* 返回一个`RefImpl对象`在使用他 `.value` 则就可以拿到proxy响应后的值
* ref 只适合单个

## reactive和toRefs
* reactive可以定义对象类型响应对象，
* 如果不想加前缀，则可以利用`toRefs`转ref
```js
import {  reactive, toRefs } from "vue";
const user = reactive({xxx})
return {
    ...toRefs(user)
}
```
* reactive 区别与ref 他返回的响应式使对象每有被`refImpl`包裹，所以不需要ref一样`.value`才能获取到值

## vue3组件局部和全局注册
* 
