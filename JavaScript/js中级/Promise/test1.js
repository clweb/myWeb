//Promise 导入
let Promise = require('./Promise');

let p1 = new Promise((resolve, reject) => {
    // resolve('ok');
    reject('error');
    // throw new Error("我是错误");

});
//Promise then()方法实现
/* then() 链式调用 */
let p2 = p1.then((data) => {
    console.log('sucess1' + data);
    // return new Promise((resolve, reject) => {
    //     resolve(data);
    // });
}, (err) => {
    console.log('error1', err);
});
let p3 = p2.then((data) => {
    console.log('sucess2' + data);
    // console.log(p1 === p2);
}, (err) => {
    console.log('error2', err);
});
p3.then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('s');
}, () => {
    console.log('n');
});
console.log(2);