 // http  创建服务器模块
 const http = require('http');

 // 创建一个服务器
 const app = http.createServer();
 // 监听客户请求
 app.on('request', (req, res) => {
     res.writeHead(200, {
         'content-type': 'text/html;charset=utf8'
     });
     //响应
     res.end('<h1>Hi,大叔！</h1>');
 });
 //监听窗口
 app.listen(8888);
 console.log('服务器已经启动,请访问localhost:8888');

 /* 
const app = http.createServer((req, res) => {
     console.log(1111);
     res.writeHead(200, {
         'content-type': 'text/html;charset=utf8'
     });
     res.end('<h1>Hi,大叔！</h1>');
 });
 app.listen(8866);
  */