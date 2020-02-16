//对象简写
let name = 'cl';
let age = 33;
/* let work = function () {
    console.log('working hard');
} */
let person = {
    name, //=>name:name,
    age, //=>age:age
    work: () => { //work(){}
        console.log('working hard');
    }
}
console.log(person.name, person.age);
person.work();
//is() 比较两个值是否相等
console.log(Object.is(1, 1)); //true
console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true

// Object.assign() 多个对象的属性复制到一个对象中
let nameObj = {
    name: 'cl'
};
let ageObj = {
    age: 26
};
let newObj = {};
Object.assign(newObj, nameObj, ageObj);
console.log(newObj);

// Object.setPrototypeOf()
let nameObj1 = {
    name: 'cl'
};
let nameObj2 = {
    name: 'cl2'
};
let obj3 = {};
Object.setPrototypeOf(obj3, nameObj1);
console.log(obj3.name, obj3.constructor);
console.log(Object.getPrototypeOf(obj3));

// __proto__ 设置原型
obj3 = {
    __proto__: nameObj2
}
console.log(obj3.__proto__);

//super 
let obj = {
    name: 'cl'
};
let obj2 = {
    __proto__: obj,
    name: 'it',
    getName() {
        //super 可以调用prototype上的属性或方法
        return super.name;
    }
}
console.log(obj2.getName());