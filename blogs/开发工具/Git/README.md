## git 分支提交 然后合并到master

### 第一步： 提交分支(例如：dev/test)分支
```
git add .
git commit -m '这次提交内容是什么'
git push
```

### 第二步： 切换到master主分支，拉取当前最新状态(多个人合作必须走这步)
```
git checkout master
git pull
```

### 第三步： 开始合并分支(那个分支提交了，就合并那个。例如：test分支提交了，如下)
```
git merge test
```

### 其他
* 有时候合并输入合并命令。git base命令会出现编辑文本，让你写注释内容。
* 写好之后。 按 ``tab`` 输入冒号 ``:quit! `` 退出即可;