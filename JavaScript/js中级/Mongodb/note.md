mysql、Mongodb、redis

1. 数据库
   持久化数据、数据库有效管理

2. 安装必要的软件
   数据库软件 mongodb 下载地址https://www.mongodb.com/download-center/community
   数据库可视化操作软件 Robo3T/compass

3. 基本概念
   database --> mongodb 软件可以创建多个数据库
   collection --> 集合 一组数据
   document --> 文档 一条数据 json
   field --> 字段 文档的属性

数据导入数据库(终端中导入)
mongoimport -d 数据库 -c 集合名 --file 导入的数据
