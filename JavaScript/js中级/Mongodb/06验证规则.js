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
    name: {
        type: String,
        required: [true, '请输入姓名'], //必传
        minlength: [2, '姓名长度不能小于2'],
        maxlength: [8, '姓名长度不能大于8'],
        trim: true // 去除字符串首尾空格
    },
    age: {
        type: Number,
        min: 1,
        max: 126
    },
    email: {
        type: String,
        enum: {
            values: ['user@qq.com', 'user@163.com'],
            message: '邮箱地址必须在指定中选择'
        }
    },
    hobbies: [String],
    qq: {
        type: String,
        validate: {
            validator: v => {
                v.charAt(0) === '1' && v.length === 6;
            },
            message: 'qq必须以1开头长度不得小于6'
        }
    },
    birthday: {
        type: Date,
        default: Date.now
    }
});

// 2.创建符合规则的集合实例
const Student = mongoose.model('Student', studentSchema);

Student.create({
    name: 'dsa ',
    age: 26,
    email: 'use@qq.com',
    qq: '25243'
}).then(res => console.log(res)).catch(err => {
    // console.log(err.errors)
    for (const k in err.errors) {
        console.log(err.errors[k].message);

    }
});