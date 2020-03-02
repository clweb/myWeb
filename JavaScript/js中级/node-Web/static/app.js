// 引入服务器模块 http/path/url/fs/mime
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();

//监听请求
app.on('request', (request, require) => {
    // 获取用户请求路径
    let {
        pathname
    } = url.parse(request.url);
    if (pathname === '/') {
        pathname = '/index.html';
    }
    // 请求路径转化为实际服务器的绝对路径
    let absPath = path.join(__dirname, 'public', pathname);
    let type = mime.getType(absPath);
    //读文件
    fs.readFile(absPath, 'utf8', (err, data) => {
        if (err !== null) {
            require.writeHead(404, {
                'content-type': 'text/html,charset=utf8'
            });
            require.end('你访问的路径不存在');
        }
        require.writeHead(200, {
            'content-type': type
        });
        require.end(data);
    });

});
// 监听窗口
app.listen(8899, () => {
    console.log('server is running, please open http://localhost:8899');
});