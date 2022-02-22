# vue新版 状态管理工具 Pinia

[官网](https://pinia.vuejs.org/getting-started.html)

## Pinia优点
1. Vue2/3 版本都支持
2. 放弃了Mutation同步操作，只有state、getters、actions3个，简化步骤
3. 不需要嵌套模块，符合Vue3的Composition api
4. 完整的TypeScript支持
5. 更加简单和使用方便

## 安装使用
1. 第一步
```
yarn add pinia
# or with npm
npm install pinia
```

2. 第二步
在main.ts文件中配置，并挂载App实例上
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

3. 第三部 创建store/index.ts文件目录
```ts
import { defineStore } from 'pinia'

// defineStore第一个参数 唯一id标识
export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: '第一个状态数据 Pinia'
        }
    },
    getters: {},
    actions: {}
})
```

4. 第四步 在vue页面上使用
```html
<template>
    <div class="">
        {{ store.msg }}
    </div>
</template>
 
<script setup lang="ts">
import { mainStore } from "../stroe";
const store = mainStore();
</script>
```

## pinia修改状态4中方式
1. vue文件引入store对象，直接改动；方便快捷 `store.index = 123`
2. 使用store.$patch方法修改，参数提供2种：
    * 对象方式： 适用多个属性改动，但是不能写业代码
    ```javascript
    store.$patch({
        index: store.index + 2
    })
    ```

    * 函数方式: 使用与有单独该文件的业务逻辑单面
    ```javascript
    store.$patch((state) => {
        if (state.index === 2) {
            state.name = '超过2了'
        }
    })
    ```
* 使用pinia actions 封装修改操作的函数和业务代码，多个页面使用
    ```javascript
    // stroe.js 定义
   actions: {
       onUpdateUser() {
           this.store.index = 123
       }
   }
   // vue 页面使用
   import { mainStore } from "../stroe";
   mainStore.onUpdateUser()
    ```

## getters 读取数据
* 功能非常类型 计算属性，具有缓存特性；
* getters定义函数数，可以传入参数state或者直接访问this, ts模式下函数要指定返回string类型
```ts
    getters: {
        getUserPhone():String {
            return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    }
```

# 多stroe仓库是，可以互相调用对方属性和方法
* 可以把pinia stroe的状态，当成是一个封装函数 并且导出的响应式对象的一个js文件；
1. 导入 const user from '/pinia/stroe/user.ts'
2. 直接使用 user().getUserInfo() 或者 user().name

