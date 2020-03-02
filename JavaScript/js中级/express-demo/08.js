const express = require('express');
const app = express();

// 创建路由对象
const home = express.Router();
home.get('/', (req, res) => {
    res.send('home');
});

home.get('/index', (req, res) => {
    res.send('welcome');
});

// 访问请使用 /home/index
app.use('/home', home);

app.listen(7788, () => {
    console.log('7788 is running');

})