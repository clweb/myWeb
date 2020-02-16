//Promise
//1 Promise的方法会立即执行
/* let p1 = new Promise(() => {
    console.log('promise');

});
console.log('hello world'); */

const fs = require('fs');
// 2.Promise 对象创建是否有一个初始状态 等待态 pedding
let promise = new Promise((resolve, reject) => {
    //同步任务
    console.log('111');
    //异步任务
    fs.readFile('./a.txt', 'utf-8', function (err, data) {
        if (err) return reject(err);
        resolve(data);
    })
});

// then() 实例方法 指定 Promise 对象状态改变时确定的操作
/* promise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}); */
// 一个 promise实例可以多次调用then() 当成功后一次调用
/* promise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}); */

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
console.log('444');