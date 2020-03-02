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

/* 查询所有 */
// Student.find().then(res => console.log(res));

/* 查询某个字段 */
// Student.find({
//     id: '1'
// }).then(res => console.log(res));

// Student.find({
//     name: 'zs'
// }).then(res => console.log(res));

/* 默认返回满足条件的第一个条件 */
// Student.findOne({
//     name: 'zs'
// }).then(res => console.log(res));

/* 满足年龄大于18小于30的条件 $gte:18,$lte:30 */
// Student.find({
//     age: {
//         $gte: 18,
//         $lte: 25
//     }
// }).then(res => console.log(res));

/* $in:[''] 查找爱好中包含篮球的学生*/
// Student.find({
//     hobbies: {
//         $in: ['上网']
//     }
// }).then(res => console.log(res));

// ***查找所有学生的年龄和姓名
// Student.find().select('name age -_id').then(res => console.log(res));

// *** 按年龄升序
// Student.find().sort('age').then(res => console.log(res));

// *** 按年龄降序
// Student.find().sort('-age').then(res => console.log(res));

// *** 跳过某些数据
Student.find().skip(2).limit(2).then(res => console.log(res));