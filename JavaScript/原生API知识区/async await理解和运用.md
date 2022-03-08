# async await 知识：

作用：让异步操作变成同步。非阻塞

## 实际案例：
1. 如我们登录中，需要获取用户角色信息。然后又要根据获取到角色信息查询其他内容；
    往常中，我们是根据回调函数里实现的。缺点: 代码繁琐，代码量多，不好阅读维护。

2. anync await 就可以让它异步等一下，分先后顺序执行，都执行完毕我才返回：

```js
async User () {
   const reluId = await apiGetUser(); // 先执行。执行完才执行下一步
   const userInof = awit apiUserByreId(reluId); // 上面执行完，到我
   returm 	userInof; 	
}
```

