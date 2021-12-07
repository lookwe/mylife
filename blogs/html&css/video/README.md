# H5 视频Video 元素及常用事件 播放 暂停 初始化 设置播放时间

## 常用属性
* 自动播放： `autoplay`
* 显示常用工具栏： `controls`
* 是否重复播放： `loop`
* 视频总长度： `duration`
* 判断是否播放完： `ended`
* 设置获取视频静音： `muted`
* 不显示下载按钮： controlslist="nodownload"
* 设置返回视频播放速度： `playbackRate` [具体设置参数](https://www.runoob.com/jsref/prop-video-playbackrate.html)
* [更多属性](https://www.runoob.com/jsref/dom-obj-video.html)

## 常用事件
* `暂停`：Video.pause()
* `播放`：Video.play()

## 设置播放时间 & 获取当前播放时间 `currentTime`
* `获取`： Video.currentTime
* `设置`： Video.currentTime = 60 // 单位为秒；60秒=1分钟
* `获取总长`：Video.duration

## 常用监听判断视频生命周期
* `开始获取到视频元数据`：`addEventListener('loadedmetadata')` 这里获取到了视频名称，宽高等信息，`且只触发一次`

* `可以获取视频总时长了`：`addEventListener('durationchange')` 视频时间加载完成

* `快进时候视频加载完毕`：`addEventListener('canplay')` 当快进或者跳到某段时间点，视频加载完成时
* `监听开始播放`：`addEventListener('play')` 每次视频加载完成，开始播放，快进和拖拽都会触发
* `监听开始暂停`：`addEventListener('pause')` 每次视频暂停触发

* [更多介绍](https://www.w3school.com.cn/tags/av_event_canplaythrough.asp)