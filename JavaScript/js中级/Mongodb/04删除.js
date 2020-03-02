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

// ** 删除zs
// Student.findOneAndDelete({
//     id: '1'
// }).then(res => console.log(res)).catch(e => console.log(e));

// ** 删除满足条件的全部数据
// Student.deleteMany({
//     name: 'ls'
// }).then(res => console.log(res)).catch(e => console.log(e));

// ** 删除某个字段
Student.update({}, {
    $unset: {
        'id': ''
    }
}).then(res => console.log(res)).catch(e => console.log(e));