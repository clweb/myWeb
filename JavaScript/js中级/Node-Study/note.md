##node
——> js 运行时环境
浏览器 js => ES+DOM+BOM
node js => ES+核心模块

#node 可以做什么事情？
1 创建高性能的服务器
2 工具
3 中间件

进程和线程 进程>线程
进程表示一个程序,一个进程可以有多个线程
node 适合 I/O 密集,不适合 CPU 密集(压缩、合并、加密、解密)

--node 模块化--
CommonJS 规范 es6 module
1 模块 一个文件就是一个模块 模块之间相互独立
2 导入模块 require(模块路径)
3 导出模块 module.exports

node => es+核心模块
node 模块分类：
1 核心模块(内置模块) fs http... 2 自定义模块 3 第三方模块
