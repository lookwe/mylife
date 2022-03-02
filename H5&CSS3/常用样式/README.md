# CSS开发中常用样式

## 滚动条样式
```CSS
::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    //background-color: #8c8c8c;
    background-color: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-track {
    background-color: #f6f6f6;
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
    border: 0;
}
```

## less/scss遍历fons-size 12-24字体
```css
// less
.loopFont(@i) when (@i<=24) {
    .fz-@{i} {
        font-size: ~'@{i}px';
    }
    .loopFont(@i+1);
}
.loopFont(10);

//scss
@for $fz from 12 through 26 {
    .fz-#{$fz} {
        font-size: ($fz) * 2rpx;
    }
}
```

## 常用flex布局
```css
.flex {
    display: flex;
}

.ac {
    align-items: center;
}
.jc {
    justify-content: center;
}

.aj-center {
    align-items: center;
    justify-content: center;
}

// 两端最靠边分开
.jsb {
    justify-content: space-between;
}
// 两端留空隙分开
.jsb {
    justify-content: space-around;
}
```

## 原生input框美化
```css
input {
    outline-style: none;
    border: 1px solid #c0c4cc;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 0;
    padding: 10px 15px;
    box-sizing: border-box;
    font-family: "Microsoft soft";
    &:focus {
        border-color: #f07b00;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px
                rgba(0, 0, 0, 0.075),
            #f07b00;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            #f07b00;
    }
}
```

## 好看盒子阴影
```css
box-shadow: 0 16px 16px 0 rgba(50.1, 50.1, 71.27, 0.08),
            0 24px 32px 0 rgba(50.1, 50.1, 71.27, 0.08);
```