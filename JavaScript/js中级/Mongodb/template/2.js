// art-template基本使用
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'view', '1.art');

const htmlStr = template(views, {
    sname: 'zhangsan',
    content: '<span>123</span>'
});
console.log(htmlStr);