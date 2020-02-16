// require('./a'); //a.js

/**
 * 模块有路径没有扩展名
 * 1 首先找同名js 找到则执行
 * 2 找不到则找同名js文件夹
 * 3 假如找到同名的js文件夹，会找package.json文件main选项指定的入口文件
 * 4 假如package.json为了将main选项指定的入口文件不存在或者没配置，则会找到有没有index.js
 * 5 没有index.js会报错
 */


require('a');
/** 
 *  没有路径也没有后缀 
 * 1 首先会假设这是系统模块
 * 2 node会去node_modules文件夹
 * 3 首先看有没有该名字的js文件
 * 4 再看有没有该名字的文件夹
 */