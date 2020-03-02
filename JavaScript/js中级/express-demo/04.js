const express = require('express');

let app = express();

// 中间件 app.use() 匹配所有的请求方式
app.use('/index', (req, res, next) => {
    console.log(1111);
    next();
});

app.get('/req', (req, res) => {
    res.send('red');
});

app.listen(7788, () => {
    console.log('7788 is running');
})