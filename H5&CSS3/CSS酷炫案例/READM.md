# 实战酷炫案例

## 经典盒子水波纹
* 参考地址：https://codepen.io/goodkatz/pen/LYPGxQz
* 效果图：
* ![](https://s4.ax1x.com/2022/03/02/bGPWEn.gif)
```html
<div class="mod-header">
        <div>
            <svg
                class="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g class="parallax">
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="0"
                        fill="rgba(255,255,255,0.3"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.2)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.1)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="7"
                        fill="rgba(255,255,255,0.5)"
                    />
                </g>
            </svg>
        </div>
    </div>
```
```css
 .mod-header {
        text-align: center;
        background: #ff3b30;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px; /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
    }
    /* Animation */
    .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
        .waves {
            height: 80px;
            min-height: 80px;
        }
    }
```