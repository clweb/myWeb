## 正则表达式
    匹配字符串中字符组合的模式
    ^\w+([-+.]\w+)*@\w+([-+])
    正则测试工具
    https://tool.oschina.net/regex 
## 正则表达式的特殊字符
  边界符
   ^ 匹配行首的文本 以谁开头
   $ 匹配行尾的文本 以谁结束
  字符类 [] 表示有一系列字符可以选择 只需要匹配一个就可以 
  量词类 
    *
    +
    ？
    {n}
    {n,}
    {n,m}
  括号

  预定义类
    \d === [0-9] 
    \D === [^0-9] 
    \w === [a-zA-Z0-9_]
    \W === [^a-zA-Z0-9_]
    \s === [\t\r\n\v\f]  匹配空格
    \S === [^\t\r\n\v\f]              匹配非空格字符
   案例 验证座机号码 010-12345678 0551-64587451
   
   \d{3}-\d{8}|\d{4}-\d{8}
  https://c.runoob.com/front-end/854
