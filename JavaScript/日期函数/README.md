# 原生JS日期函数

## utc时间格式转本地 date() 类型
```javascript
/**
 * utc时间格式转本地 date() 类型
 * @param {string} url
 * @returns {Object}
 */
export function UTCDateToLocalDate(dateStr) {
  var date1 = new Date();
  var offsetMinute = date1.getTimezoneOffset();
  var offsetHours = offsetMinute / 60;
  var date2 = new Date(dateStr);
  date2.setHours(date2.getHours() - offsetHours);
  return date2;
}
```

## 计算2个日期相差天数
```javascript
/**
 * 计算2个日期相差天数
 * @param {date} dateString1 对比日期
 * @param {date} dateString2 对比日期
 * @returns {Object}
 */
export function getDaysBetween(dateString1, dateString2) {
  var startDate = Date.parse(dateString1);
  var endDate = Date.parse(dateString2);
  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  return days;
}
```

## 格式化日期
```javascript
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}
```

## 获取中午提示时间发生点
```javascript
/**
 * 获取中午提示时间发生点
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
```

## 毫秒 转 时分秒
```js
/**
 * 毫秒数 转【时分秒】
 * @param number time毫秒
 */
function formatDuring(time) {
    if (!time) {
        return ''
    }
    let hours = parseInt(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
    let seconds = time % (1000 * 60) / 1000;
    // 格式 00:00:00
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    
    return   hours + ":" + minutes + ":" + seconds;
}

```