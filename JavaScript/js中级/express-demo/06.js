const express = require('express');
const fs = require('fs');
// 创建网站服务器
const app = express();


app.get('/index', (req, res, next) => {
    // throw new Error('something is wrong');
    // console.log(111);
    // next();
    fs.readFile('./02.js', 'utf8', (err, data) => {
        if (err != null) {
            next(err);
        } else {
            res.send(data);
        }
    });
});

// 处理错误的中间件
app.use((err, req, res, nex) => {
    console.log(222);
    res.status(500).send('服务器内部发生未知错误');
});

app.listen(7788, () => {
    console.log('7788 is running');

});