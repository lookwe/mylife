# AI环境Python搭建

- 下载python 安装包(2026)
  - 地址: `https://www.python.org/downloads/windows/`
  - 选择: 选择 Stable Releases 菜单区域内,版本选择`3.13.12` 64版本
  - 安装包: `https://www.python.org/ftp/python/3.13.12/python-3.13.12-amd64.exe`
  - 安装后双击运行, 提示勾选处全选

- 安装开发依赖
  1. 验证是否成功: `python --version` 和 `pip --version` (pip 包管理器)
  2. 设置清华大学镜像: `pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple` (保证下载速度)
  3. 更新包管理: `python -m pip install --upgrade pip` 确保最新

- 安装AI工具包
  1. 必备包: `pip install httpx aiohttp requests rich click pydantic python-dotenv`
     1. `httpx` / `aiohttp`: 高速网络请求，调用大模型 API 必备。
     2. `rich`: 让命令行输出漂亮的彩色表格和进度条（很多现代 CLI 工具如 OpenCode 都在用）。
     3. `click`: 快速构建命令行工具。
     4. `pydantic`: 数据验证，AI 输出结构化数据（JSON）的核心库。
     5. `python-dotenv`: 管理 API Key 等敏感信息，避免硬编码在代码里。

- 极简步骤（推荐）：
  1. 直接安装UV包管理，然后在安装指定版本python

  ```PowerShell
    # 1. 安装 uv 工具
    powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

    # 2. 安装你想要的 Python 版本 (例如 3.13.12)
    uv python install 3.13.12

    # 3. 初始化项目 (自动创建虚拟环境)
    mkdir my-project && cd my-project
    uv init
    uv add fastapi  # 随便装个包试试
  ```

## 本地大模型环境

- 安装 Ollama
  1. 下载: https://ollama.com/download
  2. 安装模式: `ollama run qwen2.5-coder:7b` (阿里通义千问的代码专用版)

- windows 安装 UV 包管理器 (python下一代包管理器,更快更好用)
  1. 打开PowerShell: `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"`

## VS Code拓展python 推荐

- `Python` (微软官方出品)。
- `Pylance` (提供智能代码补全)。
- `Jupyter` (如果你想在编辑器里像写笔记一样运行 AI 代码)。
- 搜索 `Cline` 或 `Continue`：这是 VS Code 里的 AI 助手插件，可以连接你刚才安装的 Ollama，让你在编辑器里直接和本地模型对话写代码。

## python 入门语法（对比JavaScript）

| 概念                | JavaScript                                      | Python                                                  | 备注                                                              |
| :------------------ | :---------------------------------------------- | :------------------------------------------------------ | :---------------------------------------------------------------- |
| 变量声明            | `let x = 10;`                                   | `x = 10`                                                | Python 是动态类型，无需声明关键字                                 |
| 常量                | `const PI = 3.14;`                              | `PI = 3.14`                                             | 约定俗成大写表示常量，无强制保护                                  |
| 代码块              | `{ ... }`                                       | 缩进 (4空格)                                            | 最重要！ 缩进错误会直接报错                                       |
| 空值                | `null` / `undefined`                            | `None`                                                  | 只有一个空值对象                                                  |
| 布尔值              | `true` / `false`                                | `True` / `False`                                        | 首字母大写                                                        |
| 逻辑运算            | `&&`, `\|\|`, `!`                               | `and`, `or`, `not`                                      | 单词更可读                                                        |
| 列表 (Array)        | `[1, 2, 3]`                                     | `[1, 2, 3]`                                             | 语法几乎一样                                                      |
| 字典 (Object)       | `{ key: "val" }`                                | `{"key": "val"}`                                        | Key 必须加引号                                                    |
| 访问属性            | `obj.key` 或 `obj["key"]`                       | `dict["key"]` 或 `dict.get("key")`                      | 字典通常用 `[]` 访问                                              |
| 字符串插值          | `` `Hello  $ {name}` ``                         | `f"Hello {name}"`                                       | 需要加 `f` 前缀                                                   |
| 函数定义            | `function foo() {}`                             | `def foo():`                                            | 注意冒号和缩进                                                    |
| 空函数体            | `// 无操作`                                     | `pass`                                                  | 如果函数/类为空，必须写 `pass` 占位                               |
| 包管理              | `npm install xxx`                               | `pip install xxx` (或 `uv add xxx`)                     | 你之前已经配好了                                                  |
| 条件判断            | `if (x > 0) { ... }`                            | `if x > 0:`<br>`    ...`                                | 无括号，结尾必须有冒号 `:`                                        |
| 三元运算符          | `cond ? true : false`                           | `true_val if cond else false_val`                       | 语序不同：`A if C else B`                                         |
| For 循环 (范围)     | `for (let i=0; i<5; i++)`                       | `for i in range(5):`                                    | `range(5)` 生成 0-4，类似 `Array(5).keys()`                       |
| For 循环 (数组)     | `arr.forEach(x => ...)`<br>`for (let x of arr)` | `for x in arr:`                                         | 直接遍历元素，无需 `of` 或回调函数                                |
| While 循环          | `while (x < 10) { ... }`                        | `while x < 10:`<br>`    ...`                            | 同样无括号，有冒号                                                |
| Switch/Case         | `switch(x) { case 1: ... }`                     | `match x:`<br>`    case 1: ...`                         | Python 3.10+ 引入 `match-case` (结构模式匹配)，以前常用 `if-elif` |
| 多分支条件          | `if... else if... else`                         | `if... elif... else`                                    | 注意是 `elif` 不是 `else if`                                      |
| 列表推导式          | `arr.map(x => x*2)`                             | `[x*2 for x in arr]`                                    | Python 灵魂语法，比 map 更直观，支持过滤 `if`                     |
| 字典推导式          | `Object.fromEntries(...)`                       | `{k: v*2 for k, v in d.items()}`                        | 快速构建新字典                                                    |
| 函数默认参数        | `function f(a=1) {}`                            | `def f(a=1):`                                           | 语法几乎一致                                                      |
| 可变参数            | `function f(...args)`                           | `def f(*args):`                                         | `*args` 接收元组 (Tuple)                                          |
| 命名参数 (\_kwargs) | `function f({a, b})` (解构)                     | `def f(kwargs):`                                        | `kwargs` 接收字典，类似 JS 对象解构传参                           |
| Lambda 匿名函数     | `(x) => x + 1`                                  | `lambda x: x + 1`                                       | Python 的 lambda 只能写一行表达式                                 |
| 类定义              | `class Foo { constructor(){} }`                 | `class Foo:`<br>`    def __init__(self):`               | 构造函数叫 `__init__`，第一个参数必须是 `self`                    |
| 类属性/方法         | `this.name`                                     | `self.name`                                             | 实例方法必须显式声明 `self` 参数                                  |
| 继承                | `class Child extends Parent`                    | `class Child(Parent):`                                  | 括号内写父类                                                      |
| 导入模块            | `import mod from 'mod'`<br>`const { a } = mod`  | `import mod`<br>`from mod import a`                     | Python 没有默认导出/命名导出的区别，语法更灵活                    |
| 异常捕获            | `try { ... } catch (e) {}`                      | `try:`<br>`    ...`<br>`except Exception as e:`         | 用 `except` 而不是 `catch`，同样需要冒号                          |
| 抛出异常            | `throw new Error("msg")`                        | `raise Exception("msg")`                                | 关键字是 `raise`                                                  |
| 注释                | `// 单行`<br>`/* 多行 */`                       | `# 单行`<br>`"""多行"""` (文档字符串)                   | `"""` 常用于函数说明文档 (Docstring)                              |
| 真值判断 (Falsy)    | `0, "", null, undefined, NaN`                   | `0, "", None, [], {}`                                   | 空列表/字典也是 False；没有 `undefined` 和 `NaN`                  |
| 相等判断            | `==` (弱), `===` (强)                           | `==` (值), `is` (引用/身份)                             | Python 中 `is` 类似 JS 的 `Object.is` 或判断 `null`               |
| 文件读取            | `fs.readFileSync(...)`                          | `with open('f.txt') as f:`<br>`    data = f.read()`     | `with` 语句自动管理资源关闭 (类似 `using`)                        |
| JSON 解析           | `JSON.parse(str)`                               | `json.loads(str)`                                       | 注意是 `loads` (load string), 写入是 `dump`                       |
| 异步/等待           | `async/await` (原生)                            | `async/await` (需 `asyncio` 库)                         | 语法一样，但运行环境不同 (事件循环 vs Node 运行时)                |
| 定时器              | `setTimeout(() => {}, 1000)`                    | `time.sleep(1)` (同步阻塞)<br>`asyncio.sleep(1)` (异步) | Python 普通 `sleep` 会卡住整个程序，异步需用 `await`              |

##
