const mongoose = require('mongoose');

//创建集合规则
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 16,
        max: 100
    },
    password: String,
    email: String,
    courses: [String]
});

// 创建集合
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;