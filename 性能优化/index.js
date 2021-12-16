


window.addEventListener("scroll", () => {
    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top
        // 图片距离顶部高度 小于 可视区域高度
        if (imgTop < window.innerHeight) {
            img.setAttribute('src', img.getAttribute('data-src'))
        }
    });
})


const images = document.querySelectorAll("img")

// 创建一个观察者 观察元素每次 出现可视区域交叉时候(看到了和划走了交叉)
const observer = new IntersectionObserver((entries = []) => {
    // 回调函数会触发2次，1：目标元素出现时触发， 2：元素看不见了触发
    entries.forEach(item => {
        // 观察到元素出现在可视区域
        if (item.isIntersecting) {
            const img = item.target
            img.setAttribute('src', img.getAttribute('data-src'))
            // 任务完成 关闭观察
            observer.unobserve(img)
        }
    })
})

images.forEach(image => {
    // 遍历每个img元素，并放入观察者
    observer.observe(image);
})