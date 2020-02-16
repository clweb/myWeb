//默认参数
function fn(a, b, c) {
    c = c || 10;
    console.log(c);
}

fn(1, 2);

//展开运算符 ...
let print = function (a, b, c) {
    console.log(a, b, c);
}
print([1, 2, 3]);
print(...[1, 2, 3]); //展开数组
let max1 = Math.max(...[1, 4, 3]);
let max2 = Math.max.apply(null, [1, 4, 3]);
console.log(max2);
console.log(max1);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
let newArr = [...arr1, ...arr2];
console.log(newArr);

function max() {
    return Math.max(...arguments);
}
console.log(max(10, 24, 65, 32, 15, 2, 4, 54));

//剩余运算符 ...
function rest(a, ...b) {
    console.log(a);
    console.log(b);
}
rest(1, 2, 3, 4);

//函数多了一个属性name
let fn = function () {

}
console.log(fn.name);

//箭头函数 简化函数的书写 inputs=>output
[2, 4, 6].forEach(item => console.log(item));

//箭头函数根本没有this ->导致箭头函数this是外层代码块this
let p1 = {
    name: 'cl',
    getName: function () {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
}
p1.getName();