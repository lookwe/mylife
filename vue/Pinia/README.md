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