const http = require('http');
//url模块 处理url地址
const url = require('url');
const app = http.createServer();

app.on('request', (req, res) => {
    // console.log(req.url); ///?username=1234&ueerpwd=1111
    // 第二个参数true可以把参数解析成对象形式
    let {
        query
    } = url.parse(req.url, true);

    res.end(`${query.username}-${query.userpwd}`);
});

app.listen(7788);