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

## CSS+CSS3 选择器
* `类选择器：` .name{}
* `ID选择器：` #id{}
* `元素选择器：` div{}
* `通配符选择器：` *{}
* `后代选择器：` div p{}
* `子选择器：` div,p  和后代不一样的是，只筛选div下所有第一层p标签
* `兄弟选择器：` div + p 筛选div后面一个p元素

* **属性选择器**
    * `属性选择器：` a[target=_blank] 筛选所有a标签中属性target是_blank的
    * `属性包含选择器：` div[title~=name] 筛选div属性title中包裹带有name的
    * `属性开头选择器：` img[src^='https'] 筛选img属性src以htttps开头的所有img标签
    * `属性结尾选择器：` img[src$='.png'] 筛选img属性src以 .png 结尾的img标签

* **伪类选择器**
    * `焦点伪类：`:focus
    * `悬浮伪类：`:hover
    * `前置伪类：p`::after 往p元素前面追加内容
    * `后置伪类：p`::before 往p元素后面追加内容
    * `光棍伪类：p`:empty 选择没有子元素的p标签
    * `取反伪类：div`:not(p) 选择div下所有不是p标签的元素
    * `首个选择器：` div p:first-of-type 或:first-child 选择div下面第一个p标签
    * `末尾选择器：` ul li:last-child 或 last-of-type 选择ul下最后一个li
    * `正序筛选伪类：`:nth-child(2)  正序第一个开始自由筛选第几个元素
    * `倒序筛选伪类：`:nth-last-child(2)  倒序最末尾开始自由筛选第几个元素
    * `注意点` nth-child(2) 和 nth-of-type(2) 区别：
        * p:nth-child(2) 找位置是2的p元素，如果位置2不是p元素不生效
        * p:nth-of-type(2) 找下面p元素中排在第二的，及时前面有很多其他元素，类似兄弟选择

