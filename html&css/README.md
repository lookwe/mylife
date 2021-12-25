# HTML和CSS 笔记篇

> 网页三剑客之2兄弟

## 目录
- flex弹性
- html-css常用属性记忆表
- Web缓存策略
- `CSS中的BFC`是什么
  - BFC大白话就是例如西游记孙悟空给唐三藏防御妖精画的保护圈，CSS中也是同理，BFC可以有效保护我们样式布局结构，防止浮动坍塌，清除浮动，外边距坍塌
  - 开启BFC方式
    - position： ablsolute | fied
    - flat: 非none
    - overflow: 不是visble
    - display: inline-block | fiex

## html元素
* [video元素精髓](./video/README.md)

## CSS继承性
当某天元素下，有大量子元素，且样式相同，那么则利用继承性，节约代码量
* 子元素可继承父类元素样式有：
  * text-*
  * font-*
  * line-*
  * color颜色

* 除了继承用户自己写的css，还会继承浏览器默认样式