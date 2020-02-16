 // http  创建服务器模块
 const http = require('http');
 const url = require('url');
 const fs = require('fs');
 const path = require('path');
 // 创建一个服务器
 const app = http.createServer();
 // 监听客户请求
 app.on('request', (req, res) => {
     res.writeHead(200, {
         'content-type': 'text/html;charset=utf8'
     });
     // http://localhost:8888/index.html
     let {
         pathname
     } = url.parse(req.url);
     fs.readFile(path.join(__dirname, '/public', pathname), 'utf8', (err, data) => {
         //  if (err) throw new Error(err);
         res.end(data);
     });



 });
 //监听窗口
 app.listen(7799);
 console.log('服务器已经启动,请访问localhost:7799');