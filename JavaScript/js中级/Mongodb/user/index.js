// 搭建网站服务器
// 展示所有学生列表 /list
// 修改学生信息
// 增加学生信息
// 删除学生信息

const http = require('http');
const url = require('url');
const qs = require('querystring');
const app = http.createServer();

require('./model/index.js');
const Student = require('./model/student.js');
// 监听请求事件
app.on('request', async (request, require) => {
    // 获取请求地址
    let {
        pathname,
        query
    } = url.parse(request.url, true);


    //获取请求方式
    let method = request.method;
    if (method === 'GET') {
        if (pathname === '/list') {
            // 呈现学生列表页面
            // 1 查询数据库所有的学生信息
            let students = await Student.find();
            // let students = [{
            //         name: 'zs',
            //         age: 18,
            //         email: 'zs@qq.com',
            //         courses: ['vue', 'js']
            //     },
            //     {
            //         name: 'zs',
            //         age: 18,
            //         email: 'zs@qq.com',
            //         courses: ['vue', 'js']
            //     }
            // ];
            let listStr = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <title>学生列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加学生</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>学生姓名</td>
                            <td>年龄</td>
                            <td>邮箱</td>
                            <td>所选课程</td>
                            <td>操作</td>
                        </tr>`;
            students.forEach(item => {
                listStr += `<tr>
                                <td>${item.name}</td>
                                <td>${item.age}</td>
                                <td>${item.email}</td>
                                <td>`;
                item.courses.forEach(item => {
                    listStr += ` <span>${item}</span> `;
                });
                // 操作              
                listStr += ` </td>
                <td>                
                    <a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                    <a href="/update?id=${item._id}" class="btn btn-success btn-xs">修改</a>
                </td>
                </tr>
                `;

            });
            listStr += `</table>
                </div>
            </body>           
            </html>`;
            require.end(listStr);
        } else if (pathname === '/add') {
            // 呈现添加用户表单页面
            let addStr = `<!DOCTYPE html>
            <html lang="en">
           
            <head>
                <meta charset="UTF-8">
                <title>添加学生</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            
            <body>
                <div class="container">
                    <h3>添加学生</h3>
                    <form method="post" action="./add">
                        <div class="form-group">
                            <label>学生姓名</label>
                            <input name="name" type="text" class="form-control" placeholder="请填写学生姓名">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input name="age" type="text" class="form-control" placeholder="请输入年龄">
                        </div>
                        <div class="form-group">
                            <label>邮箱</label>
                            <input name="email" type="text" class="form-control" placeholder="请填写邮箱">
                        </div>
                        <div class="form-group">
                            <label>请选择课程</label>
                            <div>
                                <label class="checkbox-inline">
                              <input name="courses" type="checkbox" value="html"> Html
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="css"> css
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="js"> js
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="vue"> vue
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="node"> node
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="ts"> ts
                            </label>
                                <label class="checkbox-inline">
                              <input  name="courses" type="checkbox" value="react"> react
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            
            </html>           
            `;
            require.end(addStr);

        } else if (pathname === '/update') {
            let student = await Student.findOne({
                _id: query.id
            });
            const courses = ['html', 'css', 'js', 'vue', 'node', 'ts', 'react'];
            //呈现修改学生页面
            let updateStr = `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <title>修改学生</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>

            <body>
                <div class="container">
                    <h3>修改学生</h3> 
                    <form method="post" action="/update?id=${student._id}">
                        <div class="form-group">
                            <label>学生姓名</label>
                            <input name="name" type="text" class="form-control" placeholder="请填写学生姓名" value="${student.name}">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input name="age" type="text" class="form-control" placeholder="请输入年龄" value="${student.age}">
                        </div>
                        <div class="form-group">
                            <label>邮箱</label>
                            <input name="email" type="text" class="form-control" placeholder="请填写邮箱" value="${student.email}">
                        </div>
                        <div class="form-group">
                            <label>请选择课程</label>
                            <div>
                            `;
            courses.forEach(item => {
                let isExit = student.courses.includes(item);
                if (isExit) {
                    updateStr += `<label class="checkbox-inline">
                            <input name="courses" type="checkbox" value="${item}" checked> ${item}
                        </label>
                        `;
                } else {
                    updateStr += `<label class="checkbox-inline">
                            <input name="courses" type="checkbox" value="${item}"> ${item}
                        </label>
                        `;
                }
            });
            updateStr += ` </div>                       
                        </div>
                    <button type = "submit" class = "btn btn-primary"> 确认修改 </button> 
                    </form> 
                    </div> 
                </body>
            </html>
            `;

            require.end(updateStr);
        } else if (pathname === '/remove') {
            await Student.findByIdAndDelete({
                _id: query.id
            });
            require.writeHead(301, {
                location: '/list'
            });
            require.end();
        }
    } else if (method === 'POST') {
        if (pathname === '/add') {
            let formData = '';
            request.on('data', param => {
                formData += param;
            });;

            request.on('end', async () => {
                let student = qs.parse(formData);
                // 将添加的学生信息存入数据库
                await Student.create(student);
                // 页面跳转/list
                require.writeHead(301, {
                    location: '/list'
                });
                require.end();
            });
        } else if (pathname === '/update') {
            let formData = '';
            request.on('data', param => {
                formData += param;
            });;

            request.on('end', async () => {
                let student = qs.parse(formData);
                console.log(student);
                // 将用户提交的修改后的学生信息更新数据库
                await Student.updateOne({
                    _id: query.id
                }, student);
                // 页面跳转/list
                require.writeHead(301, {
                    location: '/list'
                });
                require.end();
            });
        }

    }

});
// 监听窗口
app.listen(7788, () => {
    console.log('server is running,please 7788');
});