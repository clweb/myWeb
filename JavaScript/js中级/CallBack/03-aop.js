//AOP
function say(...who) {
    console.log(who + 'saying');
}

Function.prototype.before = function (fn) {
    let _this = this;
    return function (who) {
        fn();
        //es6展开运算符 把arguments参数展开依次传入
        _this(...arguments);
    }
}

let newFun = say.before(function () {
    console.log('drink');
});

newFun('我', '你');