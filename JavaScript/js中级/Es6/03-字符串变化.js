let name = 'cl';
let age = 26;
let str = 'My name is ${name},I am ${age}';
//正则表达式 /\$\{([^}]*)\}/g
str = str.replace(/\$\{([^}]*)\}/g, function () {
    return eval(arguments[1]); //eval('name')
});
console.log(str);

//模板字符串换行
let name = 'cl';
let age = 26;
let userInfo = [name, age];
let lis = userInfo.map(function (item) {
    return `<li>${item}</li>`
})
let ul = `
    <ul>
        ${lis.join('\n')}
    </ul>
`;
console.log(ul);

//模板标签
let name = 'cl';
let age = 26;
let str = tag `My name is ${name},I am ${age}`;
console.log(str);

function tag(strs) {
    console.log(strs);
    console.log(arguments);
    let values = Array.prototype.slice.call(arguments, 1)
    console.log(values);
    let res = '';
    for (const key in values) {
        res += strs[key] + values[key].toString().toUpperCase();
    }
    res += strs[strs.length - 1];
    return res;
}

//新增常用api
console.log('http://www.baidu.com'.startsWith('http')); //true
console.log('1.jpg'.endsWith('png')); //false
console.log('welcome to bei jing'.includes('to')); //true
console.log('hi'.repeat(3)); //hihihi
console.log('0'.padStart(8, 7)); //77777770
console.log('0'.padEnd(8, 1)); //01111111