let fs = require('fs');
let res = [];
//异步
//并行 同时读取文件
let i = 0;

function fn(data, index) {
    // res.push(data);
    res[index] = data;
    if (++i === 2) {
        console.log(res);
    }
}

fs.readFile('./a.txt', 'utf-8', function (err, data) {

    if (err) return console.log(err);
    fn(data, 0);
});
fs.readFile('./b.txt', 'utf-8', function (err, data) {
    fn(data, 1);
});
/* 串行 */
/* fs.readFile('./a.txt', 'utf-8', function (err, data) {
    res = data;
    console.log(res);
    fs.readFile('./b.txt', 'utf-8', function (err, data) {
            console.log(data);
    });
}); */