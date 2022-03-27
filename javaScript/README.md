# JavaScript 前端人的内功


## 基础-原始类型&引用类型
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

## 面向对象

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
* [防抖&节流详细代码实现](./节流与防抖/README.md)

## 上下文this指向
* 函数this指向，不是在函数编译时候绑定的，而是在函数运行被调用时，根据函数调用方式和多种状态进行判断指向谁；
* 与函数声明无关，而是与函数调用方式有关；
* 改变this指向方式：
    * 剪头函数特殊调用方式
    * `apply()` 参数1：this指向对象，参数2：数组
    * `call()`  参数1：this指向对象，参数2：无限延长,隔开
    * `bind()`  参数1：this指向对象, 参数2：无限延长,隔开