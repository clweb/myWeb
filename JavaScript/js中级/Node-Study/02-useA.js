//导入模块
// let str = require('./a');
//require('./a')
//1 把相对路径解析成绝对路径 a.js a.json a.node
//2 读取该文件
//3 让函数执行


/* 
(function (exports,require, module, __dirname, __filename) {
    module内容
}) 
*/

let path = require('path');
let fs = require('fs');
let vm = require('vm');

function Module(id) {
    this.id = id;
    this.exports = {};
}

Module.wrapper = [
    '(function (exports,require, module, __dirname, __filename) {',
    '\n})'

];

Module._extensions = {
    '.js'(module) {
        // 异步读取文件
        let script = fs.readFileSync(module.id, 'utf-8');
        // 拼接函数
        let fnStr = Module.wrapper[0] + script + Module.wrapper[1];
        // 得到函数
        let fn = vm.runInThisContext(fnStr);
        let exports = module.exports;
        // console.log(fn.toString());
        // 执行函数
        fn.call(exports, exports, myReq, module, path.dirname(module.id), module.id);
    },
    '.json'(module) {
        let json = fs.readFileSync(module.id, 'utf-8');
        module.exports = JSON.parse(json);
    }
}
Module._cache = {

}

function resolveFilename(modulePath) {
    //1 路径解析成绝对路径
    let res = path.resolve(__dirname, modulePath);
    //2 看下文件路径是否存在 不存在尝试加 .js .json
    let isExists = fs.existsSync(res);
    if (isExists) {
        return res;
    } else {
        let keys = Object.keys(Module._extensions);
        for (let i = 0; i < keys.length; i++) {
            let tryFilename = res + keys[i];
            if (fs.existsSync(tryFilename)) {
                return tryFilename;
            }
        }
        throw new Error('module not found');
    }
}

function tryModuleLoad(module) {
    // 1 获取文件的扩展名
    let extname = path.extname(module.id);
    Module._extensions[extname](module);
}

function myReq(modulePath) {
    let absPath = resolveFilename(modulePath);
    let cacheModule = Module._cache[absPath];
    if (cacheModule) {
        return cacheModule.exports;
    }
    let module = new Module(absPath);
    Module._cache[absPath] = module;
    tryModuleLoad(module);
    // console.log(absPath);
    return module.exports;

}

// let str = myReq('./a.json');
// console.log(str);

let str = myReq('./a.js');
console.log(str);