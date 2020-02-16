const http = require('http');
const url = require('url');
const app = http.createServer();

app.on('request', (req, res) => {
    // http://localhost:8899/about?a=1&b=2
    // / /index -------> 首页
    // /about -----> 关于我们
    // /news ------> 新闻页面
    // 其他的 ------> 不存在
    let {
        pathname
    } = url.parse(req.url);
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    if (pathname === '/' || pathname === '/index') {
        res.end(`欢迎访问首页`);
    } else if (pathname === '/abouts') {
        res.end(`欢迎访问关于我们`);
    } else if (pathname === '/news') {
        res.end(`欢迎访问新闻`)
    } else {
        ren.end(`访问的页面不见了`);
    }
    res.end('ok');

});
app.listen(8899);