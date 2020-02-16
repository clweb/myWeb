//fs file system
let fs = require('fs');
let path = require('path');
fs.readFile(path.resolve(__dirname, './a.txt'), 'utf-8', (err, data) => {
    console.log(data);
});

// let r = fs.readFileSync('./a.txt');
// console.log(r.toString());

// let flag = fs.existsSync('b.txt');
// console.log(flag);

//path 处理路径模块

//把路径解析成绝对路径
console.log(path.resolve('b'));
console.log(path.resolve('a.js'));
console.log(__dirname, process.cwd());
console.log(path.resolve(__dirname, 'a.js'));
console.log(path.resolve(__dirname, 'a.js', '/'));
console.log(path.join(__dirname, 'a', '/'));
console.log(path.basename('a.txt', '.txt'));
console.log(path.extname('a.txt'));
console.log(path.dirname(__dirname));

//vm
let vm = require('vm');
let a = 101;
// vm.runInThisContext('console.log(a)');
// eval('console.log(a)');
var fn = new Function('console.log(a)');
fn();