const express = require('express');
// 中间件 body-parser
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/req1', (req, res) => {
    res.send(req.query.a + "-" + req.query.b);
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(7788, () => {
    console.log('7788 is running');
});