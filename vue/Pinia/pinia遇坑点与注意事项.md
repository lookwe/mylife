## 埋坑点和注意事项


## 简化pinia读取数据
* 每次使用都需要 staor.xxx很繁琐 使用es6结构取出会失去响应式。
* 解决方式：使用Pinia官方推荐,`storeToRefs`

```javascript
import { mainStore } from "../stroe";
import { storeToRefs } from "pinia";
const store = mainStore();

const { index, msg } = storeToRefs(store);
```

## actions定义函数时this指向的坑
* 在配置中，actions定义操作状态逻辑，如果是剪头函数
访问this.store, this指针我在外层
* 建议使用普通函数

## Pinia安装与调用
* 在开发中 pinia遇到最低的错误就是忘记他们返回的事函数，而非对象
* 安装和调用也是同理，pinia大部分返回的都是函数，所以要小调用()，才能正在使用