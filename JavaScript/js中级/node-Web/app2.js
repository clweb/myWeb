// http  创建服务器模块
const http = require('http');

// 创建一个服务器
const app = http.createServer();
// 监听客户请求
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    // 请求报文
    console.log(req.headers);
    // 请求地址
    console.log(req.url);
    // 请求方式
    console.log(req.method); //GET
    //响应
    res.end('<h1>中国加油！！！武汉加油</h1>');
});
//监听窗口
app.listen(8889);
console.log('服务器已经启动,请访问localhost:8889');