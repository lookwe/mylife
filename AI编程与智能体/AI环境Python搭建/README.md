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

## 本地大模型环境

- 安装 Ollama
  1. 下载: https://ollama.com/download
  2. 安装模式: `ollama run qwen2.5-coder:7b` (阿里通义千问的代码专用版)

## VS Code拓展pythons 推荐

- `Python` (微软官方出品)。
- `Pylance` (提供智能代码补全)。
- `Jupyter` (如果你想在编辑器里像写笔记一样运行 AI 代码)。
- 搜索 `Cline` 或 `Continue`：这是 VS Code 里的 AI 助手插件，可以连接你刚才安装的 Ollama，让你在编辑器里直接和本地模型对话写代码。
