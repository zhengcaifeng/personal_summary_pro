var arr = [1, 2, 3, 4, 4, 3, 3]
// var sum = arr.reduce((pre, cur) => {
//   return pre + cur
// }, 0)

// console.log(sum)

// var sum1 = arr.reduce((pre, cur) => pre + cur, 0)
// console.log(sum1)

// var product = arr.reduce((pre, cur) => pre * cur, 1)
// console.log(product, '==')
//数组对象去重
let arr1 = ['aa', 'bb', 'a', 'b', 'aa', 'bb', 'aa']
let arr2 = [
  {
    age: 10,
  },
  {
    age: 12,
  },
  {
    age: 10,
  },
]

let quality = arr2.reduce((pre, cur) => {
  console.log(pre, cur)
  if (!pre.includes(cur)) {
    return pre.concat(cur)
  }
  console.log(pre, 'prepre')
  return pre
}, [])
console.log(quality, 'quality')
// arr.reduce((pre, cur) => {
//   if (cur in pre) {
//     pre[cur]++
//   } else {
//     pre[cur] = 1
//   }
//   return pre
// }, {})

//解构二维数组
let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6],
]
let conArr = arr3.reduce((pre, cur) => {
  return pre.concat(cur)
}, [])
console.log(conArr, 'conArr')
