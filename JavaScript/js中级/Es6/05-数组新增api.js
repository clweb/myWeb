let newArr = Array.from([1, 2, 3]);
console.log(newArr);

function fn() {
    let res = Array.from(arguments).pop();
    console.log(res instanceof Array);
    console.log(res);

}
fn(1, 2, 3);

console.log(Array(3)); //3是长度
console.log(Array.of(3)); //3是元素
//覆盖目标的下标
console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 5)); //[3,4,3,4,5]

let arr = [1, 2, 3, 4, 5];
arr.fill('a', 1, 2);
console.log(arr);
//找到返回元素 找不到放回undfined
let resf = arr.find((item, index) => {
    return item === 3;
});
console.log(resf);