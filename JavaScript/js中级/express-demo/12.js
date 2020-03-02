const express = require('express');
const path = require('path');
const app = express();

// 配置模版引擎
app.engine('art', require('express-art-template'));

// 设置模版存放目录
app.set('views', path.join(__dirname, 'views'));

// 设置默认的模版扩展名
app.set('view engine', 'art');

// const dataObj = {
//     msg: 'hello'
// }
app.locals.msg = "helloworld"
app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/news', (req, res) => {
    res.render('index');
});

app.listen(7788, () => {
    console.log('7788 is running');
});