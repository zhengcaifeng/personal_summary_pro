//proxy
//  基于proxy来做数据劫持代理  兼容到ie11

// proxy与reflect都是es6为了操作对象引入的api

var taget = {
  name: 'zhansna',
  age: 16,
}
const proxy = new Proxy(target, {
  get: function (target, key) {
    console.log(`访问了${key}`)
  },
  set: (taget, key, value) => {
    console.log(`设置了${key}--${value}`)
    target[key] = value
  },
})

proxy.name
proxy.name = '开心'
