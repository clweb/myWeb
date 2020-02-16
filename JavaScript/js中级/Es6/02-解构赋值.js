let [a, b, c] = [10, 20, 30];
console.log(a, b, c);
let {
    name: userName,
    age
} = {
    name: 'cl',
    age: 33
}
console.log(userName, age);

let [{
    name
}, {
    hobby
}] = [{
    id: 1,
    name: 'zs',
    age: 23
}, {
    id: 2,
    name: 'lisi',
    hobby: ['sleeping', 'smoking']
}];
console.log(name, hobby);

//省略解构
let [, , c] = [10, 20, 30];
console.log(c);

//默认解构
let {
    name,
    age = 8
} = {
    name: 'zs',
    age: 12
}
console.log(name, age);

//
function ajax(options) {
    var method = options.method || 'get';
}

function ajax({
    method = 'get',
    data
}) {
    var method = options.method || 'get';
}
ajax({
    method: 'post',
    data: {
        'a': 10,
        'b': 20
    }
})