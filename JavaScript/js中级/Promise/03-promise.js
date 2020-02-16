//实例方法then()
// 类方法 race()/all()/resolve()/reject()

//all()
let fs = require('fs');

function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) return reject(err);
            resolve(data);
        })
    });
}

// read('./a.txt').then((data) => {
//     console.log(data);
// });

/* all() 同时读取a.txt b.txt */
/* Promise.all([read('./a.txt'), read('./b.txt')]).then((res) => {
    console.log(res);
}); */

/* race() 参数中谁的状态先改变决定最后race() 返回的Promise */
Promise.race([read('./a.txt'), read('./b.txt')]).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

//resolve() 返回一个成功态的promise实例
Promise.resolve().then(() => {
    console.log('111');
});

//reject() 返回一个失败态的promise实例
Promise.reject().then(() => {
    console.log('111');
}, () => {
    console.log('error');

});