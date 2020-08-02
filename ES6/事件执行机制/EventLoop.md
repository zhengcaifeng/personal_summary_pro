macro-task(宏任务)：

script 环境 setTimeout、setInterval、I/O、事件、
postMessage、 MessageChannel、setImmediate (Node.js)

micro-task(微任务)：Promise.then()，process.nextTick，MutaionObserver

带 async 关键字的函数会返回一个 promise 对象，如果里面没有 await，执行起来等同于普通函数

await 是一个让出线程的标志

await 后面的函数会先执行一遍，然后就会跳出整个 async 函数来执行后面 js 栈的代码
,
等本来时间循环执行结束后，又会跳回到 async 函数中
