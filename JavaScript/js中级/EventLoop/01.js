// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 0);
// setTimeout(() => {
//     console.log(3333);
// }, 1);
// setTimeout(() => {
//     console.log(2222);
// }, 3);
// setTimeout(() => {
//     console.log(1111);
// }, 2);
// console.log(2);

/* 
    执行上下文
    任务队列(先微任务——>再宏任务)
*/

// 宏任务 
/* setTimeout(() => {
    console.log('timeout1');
});
// 微任务
Promise.resolve().then(() => {
    console.log('success');
});
Promise.resolve().then(() => {
    console.log('success2');
}); */
//success success2 timeout1
/* 复杂模型 */
setTimeout(() => {
    console.log('timeout1');
    Promise.resolve().then(() => {
        console.log('success1');
    });
});
Promise.resolve().then(() => {
    console.log('success2');
    setTimeout(() => {
        console.log('timeout2');
    });
});
Promise.resolve().then(() => {
    console.log('success3');
});
// success2 success3 timeout1 success1 timeout2