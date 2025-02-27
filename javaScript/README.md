# JavaScript 前端人的内功

* [基础-原始类型&引用类型](#基础-原始类型引用类型)
* [typeof 判断返回哪些字符串](#typeof-判断返回哪些字符串)
* [常见属性、API、函数、技术等一些对比](#常见属性、API、函数、技术等一些对比)
* [对象拷贝克隆](#对象拷贝克隆)
* [Blob对象 上传图片预览&下载](#blob对象-上传图片预览下载)
* [FileReader对象 异步读取文件信息](#filereader对象-异步读取文件信息)
* [防抖&节流&定时阻塞](#防抖节流定时阻塞)
* [上下文this指向](#上下文this指向)
* [forin-forof区别](#forin-forof区别)
* [in和hasOwnProperty区别](#in和hasOwnProperty区别)
* [立即执行函数IIFE](#立即执行函数IIFE)

## 基础-原始类型&引用类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/a37518e4db99405bac6fc6b4bab478f7.png#pic_center)
* 基本数据类型
  * string（字符串）
  * Number（数值）
  * Boolean（布尔）
  * Null（空）
  * Undefined（未定义）
  * Sybmol（sybmol唯一标识）
  * BigInt（任意大整数）

* 引用类型
   * Object（对象）
        * Array
        * RegExp
        * Date
        * Math
        * Function

## typeof 判断返回哪些字符串
* 返回8种：string、number、boolean、undefined、object、funcaion、bigint、sybmol

## 常见属性、API、函数、技术等一些对比
* [常见属性、API、函数、技术等一些对比](./%E5%B8%B8%E8%A7%81%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94.md)


## 对象拷贝克隆
* 浅拷贝
  * 大白话：只拷贝第一层属性，如果是引用类型，直接复制引用而不是新的；原生类型修改，浅拷贝对象引用类型同时也会跟着改动；
  * 实现方式：
    * 直接复制 `const a = obj`
    * 展开运算符：`const a = {...obj}`
    * 数组合并：`const a = Array.concat(arr1, arr2)`
    * 对象合并： `const a = Object.conat(obj1, obj2)`
    * ...
* 深拷贝
  * 大白话：克隆一个全新对象，不管对象属性有多么深，包括属性是引用类型的
  * 实现方式:
    * JSON字符串转换
    * 函数递归
    * 属性深度循环


## 类型转换

## 作用域

## 闭包与模块化
* 闭包的本质：函数内部返回函数调用，
* 闭包的市场常场景：需要缓存，不被浏览器垃圾回收，计时器，数据隔离区
* 

## 面向对象
* 封装，继承，多态

## 原型对象

## 异步编程

## Blob对象 上传图片预览&下载
* Blob对象本质：二进制大对象，原来存储二进制数据；
* 描述：表示一个不可变，原始数据的类文件对象，可以按文本或者二进制进件读写，Flie文件对象。也是继承与它。并扩展了支持用户系统磁盘的文件
* 实现代码：
  ```javascript
  const obj = {name: '你好'}
  const blobOjb = new Blob(
      [JSON.stringify(obj, null, 2)], // 二进制数组或文本数组 
      { type:'application/json' }, // 定义blob类型 必须是 MIME
    )

  //  文件读取
  var text = await (new Response(blobOjb)).text();
  // 【同步】 blol转URL 用于图片类型可以生产链接预览 或者 下载
  URL.createObjectURL(blobOjb);
  ```

## FileReader对象 异步读取文件信息
* 对象描述：用于支持操作，读取用户系统文件或二进制数据。`File` 或者 `Blob` 对象
* 代码实现
  ```javascript
  // 根据上面例子，实现异步生产 原始数据或者file 的URL
  const fileReader = new FileReader()
  fileReader.onload = function() { console.log(fileReader) }
  fileReader.readAsDataURL(blobOjb)
  ```

## 防抖&节流&定时阻塞
* [防抖&节流详细代码实现](/javaScript/%E8%8A%82%E6%B5%81%E4%B8%8E%E9%98%B2%E6%8A%96/README.md)

## 上下文this指向
* 函数this指向，不是在函数编译时候绑定的，而是在函数运行被调用时，根据函数调用方式和多种状态进行判断指向谁；
* 与函数声明无关，而是与函数调用方式有关；
* 改变this指向方式：
    * 剪头函数特殊调用方式
    * `apply()` 参数1：this指向对象，参数2：数组
    * `call()`  参数1：this指向对象，参数2：无限延长,隔开
    * `bind()`  参数1：this指向对象, 参数2：无限延长,隔开

## forin-forof区别
* 公共点： 都支持对象，数组循环、break、continue
* 区别点:
  * 数组：
    * `for in` 遍历出下标
    * `for of` 遍历出每一项内容
  * 对象：
    * `for in` 遍历出对象所有key值包括原型
    * `for of` 遍历普通对象报错，缺失迭代器，只能循环带有迭代器接口的对象，例如：`map、set、classList`
* 特殊场景
  * 可以使用 `Object.xxx` 提供的方式返回迭代器接口结构，可使用forin遍历


## in和hasOwnProperty区别
* 公共点：两者都是检测对象里面是否包含某个属性存在，返回 ture、false
* 区别点：
    * `in`: 会依次往上查询，自身不存在，则查对象原型链，追溯到最顶原型Object
    * `hasOwnProperty`: 只查本身是否包含，不会追溯原型链。
* 特殊场景：
    * 在框架源码中，框架内部使用`for in`循环时。会第一条`if(对象.hasOwnProperty(属性)) `判断

## 立即执行函数IIFE
* 声明方式：
    * 函数声明：`function(){...}`
    * 函数表达式：`(function(){...})`
    * 箭头函数：`(()=>{...})`
* 执行方式：
    * 函数声明：`function(){...}`
    * 函数表达式：`(function(){...})`
* 特点：
    * 立即执行
    * 不污染全局变量
    * 执行一次
    * 模块化
    * 闭包
    * 效率提升（减少全局，局部变量查找）
* 使用场景：
    * 数据隔离
    * 函数自执行
    * 模块化
    * 闭包

