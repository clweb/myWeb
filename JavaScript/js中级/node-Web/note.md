## 客户端

## 服务器端 -> 处理数据和业务逻辑

客户端 --------请求----------> 服务器端
<-------响应---------

Ip 地址/域名 http://www.baidu.com
端口
URL http://www.baidu.com
https://www.baidu.com.index.html

本地 Ip 127.0.0.1

报文 -> 请求和响应的过程中传递的数据块

响应报文

1. HTTP 状态码
   200 --> ok 请求成功
   404 --> 请求支援不存在
   500 --> 服务器错误
   400 --> 请求参数错误
2. 内容类型
   text/html
   text/css
   text/javascript
   image/jepg
   application/json

HTTP 请求处理与响应处理

1. 请求参数
   get 请求参数
   http://localhost:7788/?username=1234&ueerpwd=1111
   参数会放置再浏览器地址栏中,可以借用 url 模块 parse 处理
   get 请求
   1 浏览器直接输入网址
   2 link
   3 script
   4 img
   5 Form 表单

   post 请求
   1 参数是被放在请求体中进行传输
   2 node 处理 post 请求需要使用 data 和 end 事件
   3 使用 querystring 模块

路由 客户端请求地址与服务器端程序代码的对应关系

静态资源：服务器不需要处理 可以直接响应给客户端

动态资源: 相同的请求地址不同的响应资源
.../blog/article?id=1
.../blog/article?id=2
