//this对象是在运行时基于函数的执行环境绑定的
/*

  1.默认绑定
  2.隐式绑定
  3.显示绑定
  4.new绑定

  分别对应函数的四种调用

  独立调用
  方法调用
  间接调用 call() apply bind
  构造函数调用 

*/

/* 
  总结：
  1.定时器，绑定window ,多次绑定，按最初为准
  2‘构造函数没有return,(return;,return this 都相当于没有return) ,构造函数里的this就指向实例，
  有return就不是
  3.严格模式下 undefined
  4.闭包、自执行函数，函数里面函数，都指向window
  5.用变量或参数传递了函数,调用的话看变量或函数是属于谁的
  6.document.onClick=fn指向 documnet
  7.document.addEventListener('click',function(){this指向document})


  箭头函数中this，取决于定义时所处环境,一旦确定不会改变，
  1.对象的方法中的this，对象不够成单独的作用域 
  对象的方法中，包含有箭头函数，this就指向该对象
*/

// 箭头函数的优点：有利于封装回调函数
