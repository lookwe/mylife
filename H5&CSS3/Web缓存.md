## 浏览器缓存
> 数据存储在浏览器内存中，不会被页面刷新消失，存储量有大小限制，不过实在开发中，合理的应用已经可以满足绝大缓存需求
* sessionStorage 会话级别   关闭窗口则自动清除
* localStorage   永久级别   需手动删除

### 添加
* localStorage.setItem('key','value')   保存一个值
* localStorage.key = value    //等同上面


### 按key查询
* localStorage.getItem('key')  //读取
* localStorage.key        //等同上

### 查询所有
* localStorage.valueof()  //读取储存的所有数据
* localStorage.key[0]    //读取第一条数据

### 清除
* localStorage.removeItem('key')  //删除
* localStorage.clear()  情况所有数据


### 检查是否存在
* localStorage.hasOwnProperty('key')  //查看是否存在   在：true

<br/>

---
### 封装缓存类
```javascript
class LocalStorage {
    /**
     * 设置localStorage 内容
     * @author huangzhongfei
     * @date 2021-11-3
     * @param {String} {key} 主键
     * @param {any} {value} 内容
     * @returns {any}
     */
    static set(key, value) {
        if (typeof key !== 'string') {
            throw 'localstorage -- key必须为字符串'
        }
        value = value || ''
        value = typeof value === 'object' ? JSON.stringify(value) : value
        window.localStorage.setItem(key, value);
    }

    /**
     * 根据Key 查询缓存
     * @author huangzhongfei
     * @date 2021-11-3
     * @param {String} {key} 主键
     * @returns {any}
     */
    static get(key) {
        let value = window.localStorage.getItem(key);
        try {
            return JSON.parse(value)
        } catch (err) {
            return value
        }
    }

    /**
     * 根据Key 清除缓存, 可传多个key值
     * @author huangzhongfei
     * @date 2021-11-3
     * @param {any} {key} 主键
     * @returns {Object}
     */
    static remove() {
        const keys = Array.from(arguments);
        for (let i in keys) {
            window.localStorage.removeItem(keys[i]);
        }
    }

    /**
     * 清除所有缓存
     * @author huangzhongfei
     * @date 2021-11-3
     * @returns {undefined}
     */
    static removeAll() {
        window.localStorage.clear();
    }

}
```

 