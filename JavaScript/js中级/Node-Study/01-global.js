// console.log(Object.keys(global));
console.log(global);
console.log(this);
let a = 10;
console.log(global.a);

// setImmediate
setImmediate(() => {
    console.log('Immediate');
});
setTimeout(() => {
    console.log('timeout');

}, 0);

//node eventLoop node<10 node10以后基本与浏览器的表现一样
//timers(setTimeout)
//poll =>I/O操作
//check

let fs = require('fs');
fs.readFile('a.txt', () => {

    setTimeout(() => {
        console.log('timeout');

    }, 0);
    setImmediate(() => {
        console.log('Immediate');
    });
});

console.dir(global, {
    showHidden: true
});
//global常见的属性
//Buffer 二进制数据
//process 进程 process.nextTick()
//clearInterval()/clearTimeout()/setInterval()/setTimeout()
//clearImmediate()/setImmediate()
//process常见的属性 platform env argv 方法cwd()
console.log(process);
console.log(process.platform);
console.log(process.env);
console.log(process.argv.slice(1));
process.argv.slice(2).reduce((obj, current, index, arr) => {
    if (current.startsWith('--')) {
        obj[current.slice(2)] = arr[index + 1]
    }
    return obj;
}, {});
/* [
  'E:\\nodejs\\node.exe',
  'f:\\myWeb\\JavaScript\\js中级\\Node-Study\\tempCodeRunnerFile.js'   
] */
console.log(process.cwd());