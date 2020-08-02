一、 输出什么

```
   function Test(a,b,c){
          var d=1;
          this.a=a;
          this.b=b;
          this.c=c;
          function f(){
            d++
            console.log()
          }
          this.g=f;
        }
        var test1=new Test()
        test1.g()
        test1.g()
        var test2=new Test()
        test2.g()

```

答案：//输出 2,3,2 和闭包的累加器一样

二、 输出什么

```
var x=1;
y=z=0;
function add(n){
  return n=n+1
}
y=add(x)
function add(n){
  return n=n+3
}
z=add(x)
console.log(x,y,z)
```

三、哪一个能输出 1,2,3,4,5

```
function foo1(x){
  console.log(arguments)
  return x
}
foo1(1,2,3,4,5)

function foo2(x){
  console.log(arguments)
  return x
}(1,2,3,4,5)

(function foo3(x){
  console.log(arguments)
  return x
})(1,2,3,4,5)

```

解析：函数申明后面不能跟表达式，自执行
