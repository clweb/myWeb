const express = require('express');
// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
    // send()会检测响应内容的类型会自动设置状态码
    res.send('Hello World!');
});

app.get('/news', (req, res) => {
    res.send('今天发生了什么');

});

app.listen(7788, () => {
    console.log('7788 is running');

});