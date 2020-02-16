let fs = require('fs');
//发布订阅 发布和订阅没关系 中间通过数组进行关联
function Events() {
    this.callbacks = [];
    this.results = [];
}

//订阅
Events.prototype.on = function (callback) {
    this.callbacks.push(callback);
}

//发布
Events.prototype.emit = function (data) {
    this.results.push(data);
    this.callbacks.forEach(cb => cb(this.results))
}

let e = new Events();
e.on(function (res) {
    if (res.length === 2) {
        console.log(res);
    }
});
// e.on(function (res) {

// });
//文件读取
fs.readFile('./a.txt', 'utf-8', function (err, data) {
    e.emit(data);
});
fs.readFile('./b.txt', 'utf-8', function (err, data) {
    e.emit(data);
});