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