浏览器事件环
js 单线程(主线程)

宏任务: js 渲染 ui 渲染 定时器(settiemout/setInterval/setImmdiate) I/O
微任务: Promise()/process.nextTick/Object.ovserve/ MutationObserver

Vue.nextTick(function(){})

执行过程：
script 宏任务先执行——>清空微任务队列——>执行宏任务队列->检查微任务队列,有就清空——>清空宏任务队列->...
