const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myschool', {
        useNewUrlParser: true,
        useFindAndModify: true
    }).then(() => console.log('数据库已连接'))
    .catch(() => console.log('数据库连接失败'));