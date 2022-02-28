# JavaScript 前端人的内功


## 基础
* 基本数据类型
  * string（字符串）
  * Number（数值）
  * Boolean（布尔）
  * Null（空）
  * Undefined（未定义）
  * Sybmol（sybmol唯一标识）

* 引用类型
   * Object（对象）
   * Array （数组）
   * Function（函数）

## 防抖&节流&定时阻塞
* [防抖&节流](./节流与防抖/README.md)

## 上下文this指向
* 函数this指向，不是在函数编译时候绑定的，而是在函数运行被调用时，根据函数调用方式和多种状态进行判断指向谁；
* 与函数声明无关，而是与函数调用方式有关；

* 改变this指向方式：
    * 剪头函数特殊调用方式
    * `apply()` 参数1：this指向对象，参数2：数组
    * `call()`  参数1：this指向对象，参数2：无限延长,隔开
    * `bind()`  参数1：this指向对象, 参数2：无限延长,隔开