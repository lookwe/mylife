# 主流CSS预处理器

* less
* scss
* stylus


## 混合
* 作用：简化公共CSS样式代码部分，并支持自定义具体参数
* 使用方式: 类似js函数, 定义函数接受参数，并设置
* 区别：
    * `混合`：是对样式进行复制替换；
    * `函数`：是堆栈调用且有返回值；
* 代码实现：
```css
// 定义
Reize(mW, h, pLR, fs) {
    min-width: mW;
    height: h;
    padding: 0 pLR;
    font-size: fs;
}

.user-box {
    Reize(50px, 20px, 0.5rem, 18px)
    ...
}
```