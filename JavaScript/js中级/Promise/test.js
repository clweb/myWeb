//Promise 导入
let Promise = require('./Promise');

let p1 = new Promise((resolve, reject) => {
  // console.log(1);
  setTimeout(() => {
    resolve('ok');
    /* 直接使用抛错处理会调用 reject()
      如果使用定时器抛错还是不会做处理
    */
    // throw new Error("我是错误");
  }, 500);
  // reject('error');
});
//Promise then()方法实现
/* then() 方法的多实现 */
p1.then((data) => {
  console.log("sucuess1" + data);
}, (err) => {
  console.log("error1" + err);
});
p1.then((data) => {
  console.log("sucuess2" + data);
}, (err) => {
  console.log("error2" + err);
});

console.log(2);