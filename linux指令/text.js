// cd .. 切换到上一层目录
// cd. 切换到当前目录

//curl www.baidu.com  访问网站，返回数据

let a = 12,
  b = 13
function fn() {
  // console.log(a, b)
  let a = (b = 14)
  console.log(a, b)
}
fn()
console.log(a, b)

let i = 1
let fn = (i) => (n) => console.log(n + ++i)
let f = fn(i)
f(2)
fn(3)(4)
f(5)
console.log(i)
