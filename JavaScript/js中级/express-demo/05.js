const express = require('express');
// 创建网站服务器
const app = express();

// app.use((req, res, next) => {
//     res.send('公司网站正在维护,请于明日早八点后访问');
// });

app.use('/index', (req, res, next) => {
    let isLogin = true;
    if (isLogin) {
        next();
    } else {
        res.send('请登录后访问主页');
    }
});

app.get('/index', (req, res) => {
    // send()会检测响应内容的类型会自动设置状态码
    res.send('Hello World!');
});

app.use((req, res, next) => {
    res.status(404).send('你访问的资源不存在');
});


app.listen(7788, () => {
    console.log('7788 is running');

});