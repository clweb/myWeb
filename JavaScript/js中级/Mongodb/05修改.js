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
const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    hobbies: [String],
    qq: String
});

// 2.创建符合规则的集合实例
const Student = mongoose.model('Student', studentSchema);

// ** 修改**的年龄为18
// Student.updateOne({
//     name: 'ws'
// }, {
//     age: 18,
//     email: 'ws1@163.com'
// }).then(err => console.log(err)).catch(e => console.log(e));

// ** 修改所有的年龄
Student.updateMany({}, {
    age: 18,
}).then(err => console.log(err)).catch(e => console.log(e));