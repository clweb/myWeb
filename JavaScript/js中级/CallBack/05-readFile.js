let fs = require('fs');
let res = [];

function after(times, callback) {
    return function (data) {
        res.push(data)
        if (--times === 0) {
            callback(res);
        }
    }
}
let newFn = after(2, function (result) {
    console.log(result);

})
//异步
//并行 同时读取文件

fs.readFile('./a.txt', 'utf-8', function (err, data) {
    newFn(data);
});
fs.readFile('./b.txt', 'utf-8', function (err, data) {
    newFn(data);
});
/* 串行 */
/* fs.readFile('./a.txt', 'utf-8', function (err, data) {
    res = data;
    console.log(res);
    fs.readFile('./b.txt', 'utf-8', function (err, data) {
            console.log(data);
    });
}); */