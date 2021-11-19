### JS常用正则

* 获取文件目录的文件名

  ```javascript
  let a = 'name.js';
  // 获取文件后缀 /.+\./
  a.replace(/.+\./, "") // js
  
  // 获取文件名 /\.\w+$/  或者 /(.*\/)*([^.]+).*/ig
  a.replace(/\.\w+$/, "") // name
  a.replace(/(.*\/)*([^.]+).*/ig, "$2") // name
  ```

  

