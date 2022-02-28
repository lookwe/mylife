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

## CSS3兼容性
由于每次新出的语法特性，各各浏览器厂商实现的日期不同，他们都给自家浏览器加了特定语法，突出自己浏览器,都给新语法加了自己前缀;

* 但追着各家浏览器对新语法都实现了，部门前缀兼容页取消了，但是还有个少数新特性，不是每个浏览器厂商都能实现，例如：
* `-webkit-text-fill-color` 目前该特性只有谷歌浏览器实现

* **为什么出现兼容**：每个浏览器厂商对新特性语法实现完成不一样，部分实现，但有少部分浏览器实现不了；

* 权威语法兼容性查询网站： https://caniuse.com/ , VSCode 中 `Autoprefixer
`插件后处理，就是根据这个网站来提供语法兼容前缀功能，扫描你CSS帮你自动补齐

* `-webkit-`：chrom 和 safari
* `-ms-`: IE
* `-moz-`: firefox
* `-o-`: opera
