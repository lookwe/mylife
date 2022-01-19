# 防抖与节流
> 工作需求中，想要系统更好的稳定性，容错性，在性能方面就离不开防抖节流，可能你忽略的一个小细节，就可能导致服务器的宕机，系统的崩溃，所以必须要知道他们说怎么样的原来，和使用他，解决我们的痛点


## 节流
* 用我自己大白话讲：就是一大群赶快上班快迟到的人，在等一个电梯，电梯上下来回需要5分钟，即：`每各5分钟，我就送一波人上来`。而不是走步梯那样，一直都有人往上走。搞不好导致楼梯坍塌或者踩踏事件。所以需要节流。

生活常见节流：
* 排队等电梯
* 排队进地铁

### 代码实现
```javascript
let timer; let flag
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数 1
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
    if (immediate) {
        if (!flag) {
            flag = true
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof func === 'function' && func()
            timer = setTimeout(() => {
                flag = false
            }, wait)
        }
    } else if (!flag) {
        flag = true
        // 如果是非立即执行，则在wait毫秒内的结束处执行
        timer = setTimeout(() => {
            flag = false
            typeof func === 'function' && func()
        }, wait)
    }
}
```

<br/>

---

## 防抖
* 大白话：就像定时发票，只要在整时整点，间隔说一小时，我才发一张票，例如：1000个人，在 12:00 之前所有的点击，我都不会处理，过了之后下次发票就是13:00， 12:01 - 13:59 这段时间里，任何的点击都是无效的；

* 在某个时间里，我只处理时间最后一个刻最后一个事件。处理完成继续进入冷却时间；

* 生活中常见的防抖：
* 定时抽奖
* 连续按游戏技能然后进入冷却也是一种。

### 代码实现
```javascript
let timeout = null
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
    // 清除定时器
    if (timeout !== null) clearTimeout(timeout)
    // 立即执行，此类情况一般用不到
    if (immediate) {
        const callNow = !timeout
        timeout = setTimeout(() => {
            timeout = null
        }, wait)
        if (callNow) typeof func === 'function' && func()
    } else {
        // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
        timeout = setTimeout(() => {
            typeof func === 'function' && func()
        }, wait)
    }
}
```

## 除了防抖节流。还可以设置休眠阻塞
* 休眠阻塞，即设置一个时间，开始倒计时，时间到了才执行。定时炸弹一样

```javascript

 /**
 * @description 定时函数，时间没结束一直处于阻塞状态，不会执行，时间到了才会执行
 * @param {number} value 堵塞时间 单位ms 毫秒
 * @returns {Promise} 返回promise
 */
function sleep(value = 30) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, value)
    })
}
```

