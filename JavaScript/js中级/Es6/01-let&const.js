let num = 10;
//1 不允许重复定义变量
/* let num = 20; */
console.log(num);
//2 不允许变量提升
/* console.log(a);
let a = 123; */
//3 块级作用域
{
    let i = 10;
}
// console.log(i);
for (let i = 0; i < 3; i++) {


}
// console.log(i);

const PI = 3.141592653;
// PI=3.14;
console.log(PI);
const obj = {
    a: 10,
    b: 20
};
obj.a = 12;
console.log(obj);

for (var i = 0; i < 3; i++) {
    //闭包
    (function (i) {
        setTimeout(function () {
            console.log('i=' + i);
        });
    })(i)
}
for (let j = 0; j < 2; j++) {
    setTimeout(() => {
        console.log('j=' + j);
    });
}

//面试题
var arr = [];
for (var i = 0; i < 2; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
arr[0](); //2
arr[1](); //2
/* 上述var定义为全局的 */
var arr1 = [];
for (let i = 0; i < 2; i++) {
    arr1[i] = function () {
        console.log(i);
    }
}
arr1[0](); //0
arr1[1](); //1
/* 上述let定义了块级作用域 */