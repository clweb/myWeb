## BOM
- BOM简介
  Browser Object Model 核心是window
  DOM vs BOM
— window对象(定时器)
  浏览器的顶级对象 1  js访问浏览器窗口的一个接口
   2 全局对象 定义在全局作用域中的变量或函数自动变成window对象属性和方法
— 页面加载事件
  window.onload = function() {}
  窗口加载事件 指的是文档内容完全加载(图片、脚本、css等)完成触发事件
  DOMContentLoaded DOM加载完毕 不包含样式 图片 flash等

  窗口大小事件 window.onresize = function() {

  } 

- 定时器
  window.setTimeout(函数,延时时间)
  clearTimeout(timeoutID)
  window.setInterval(...)/clearInterval()
  
— location对象/navigator对象/history对象
  