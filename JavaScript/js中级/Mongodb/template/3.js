// 支持if判断 循环
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'view', '2.art');

const htmlStr = template(views, {
    age: 20,
    students: [{
            name: 'lily',
            age: 18,
            sex: '女'
        },
        {
            name: 'lucy',
            age: 19,
            sex: '女'
        }, {
            name: 'jack',
            age: 18,
            sex: '男'
        }
    ]
});
console.log(htmlStr);