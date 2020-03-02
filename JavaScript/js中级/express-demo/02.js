const express = require('express');
// 创建网站服务器
const app = express();

let i = 0;
app.get('*', (req, res, next) => {
    console.log(++i);
    // res.send('ok101');
    next();
});

app.get('/req1', (req, res) => {
    console.log(2222);
    res.send('ok202');
});

app.listen(7788, () => {
    console.log('7788 is running');

});