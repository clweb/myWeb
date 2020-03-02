// 第三放模块 操作数据库
const mongoose = require('mongoose');
// 链接数据库
mongoose.connect('mongodb://localhost/school', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功');
    }).catch(err => console.log(err));

// 1.创建集合规则
const teacherSchema = mongoose.Schema({
    name: String,
    tel: String,
    age: Number
});

// 2.创建符合规则的集合实例
const Teacher = mongoose.model('Teacher', teacherSchema); // teachers

// 3.创建文档
const teacher = new Teacher({
    name: 'along',
    tel: '1388888888',
    age: 33
});

// 4.文档插入到数据库中
teacher.save();