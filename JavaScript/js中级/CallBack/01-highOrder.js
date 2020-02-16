//判断类型
let str = 'hello';
let arr = [];

// console.log(Object.prototype.toString.call(str));
// console.log(Object.prototype.toString.call(arr));

//高阶函数
function isType(type) {
    return function (obj) {
        return Object.prototype.toString.call(obj).includes(type);
    }
}
// console.log(isType(arr, 'Array'));
// console.log(isType(arr, 'Boolean'));

//
let types = ['String', 'Object', 'Array', 'Null', 'Undefined', 'Boolean'];
let fns = {}; //{isString: isArray:}
types.forEach(type => {
    //批量生成函数
    fns['is' + type] = isType(type);
});
let b = false;
console.log(fns.isString(b));
console.log(fns.isBoolean(b));