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

## html视频元素
* [video元素精髓](./video/README.md)

## web缓存工具
* [web缓存工具](./Web缓存.md)

## CSS继承性
当某天元素下，有大量子元素，且样式相同，那么则利用继承性，节约代码量
* 子元素可继承父类元素样式有：
  * text-*
  * font-*
  * line-*
  * color颜色

* 特殊：line-height: 1.5，没有带单位的则是继承父亲或者自己字体大小的1.5b倍行高
* 除了继承用户自己写的css，还会继承浏览器默认样式

## css优先级 - 权重
* `行内样式 > 内部样式 > 外链样式`
* `!important > style  > id > class > 元素 > *通配  > 默认 > 继承`
* 复合选择器会触发权重叠加