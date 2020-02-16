## npm

1. 概述
   全称： node package manager
   包： 多个文件的集合
2. 包的分类
   全局包-> 在命令行使用
   1 安装：npm install \*\*\* -g
   2 自己创建全局包
   本地包-> 在项目中使用
   npm install jquery 默认安装的是生产依赖

   生产依赖放在 "dependencies":{} 以后删除依赖 可以通过 npm install 安装所有依赖

   npm install @babel/core --sava-dev(-D)
   开发依赖放在 "DevDependencies":{}

   npm install --production 安装生产依赖

   其他: 'peerDependencies':{}
   'bundledDependencies':{}
   'optionalDependencies':{}

3. package.json
   npm init 初始化一个文件
   npm init -y

nodemon
1 功能 每次源代码修改后 自动执行
2 安装 npm i nodemon -g
3 使用 nodemon \*\*.js

npm、nrm、nvm
nvm -> node version manager
nrm -> npm registry manager npm 下载地址切换工具
-> npm i nrm -g

package-lock.json 锁定包的版本
