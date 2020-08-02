一、输出什么

```
;+true

;+false

```

解析：一元加号会尝试将 boolean 类型转换为数字类型。 true 被转换为 1，false 被转换为 0

二、哪一个是错误的

```
const bird = { size: 'small' }
const mouse = { name: 'Mickey', small: true }
```

A: mouse.bird.size

B: mouse[bird.size]

C: mouse[bird["size"]]

答案: 错误的是 A 解析
我们使用方括号表示法时，它会看到第一个左括号[，然后继续，直到找到右括号]。只有在那个时候，它才会对这个语句求值。



四、输出什么

class Chameleon {
static colorChange(newColor) {
this.newColor = newColor;
}

constructor({ newColor = "green" } = {}) {
this.newColor = newColor;
}
}

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");
// 复制代码
// A: orange
// B: purple
// C: green
// D: TypeError

// 答案

// 答案: D
//colorChange 方法是静态的。 静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级。 由于 freddie 是一个子级对象
//，函数不会传递，所以在 freddie 实例上不存在 freddie 方法：抛出 TypeError

五、输出什么

```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName());


```

答案：TypeError
Person.prototype.getFullName = function () {
return `${this.firstName} ${this.lastName}`;
}

不能用箭头函数

方法写在原型上，

还需要 return 返回

六、输出什么

```
function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

解析
如果不添加 new 它指的是全局对象！

lobal.firstName ='Sarah'和 global.lastName ='Smith

答案：Person {firstName: "Lydia", lastName: "Hallie"} and undefined

七、事件传播的三个阶段是什么

捕获 > 目标 > 冒泡
在捕获阶段，事件通过父元素向下传递到目标元素。 然后它到达目标元素，冒泡开始。

八、所有对象都有原型. 对还是错

解析：
null 没有原型对象

基础对象指原型链终点的对象。基础对象的原型是 null

九、 输出什么

function sum(a, b) {
return a + b;
}

sum(1, "2");

答案:
数字和字符串相加，隐式转换成字符串
"12"

十、输出什么

```
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

答案：
后缀一元运算符++：

返回值（返回 0）
增加值（数字现在是 1）
前缀一元运算符++：

增加值（数字现在是 2）
返回值（返回 2）
所以返回 0 2 2。

十一、输出什么

```
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

解析：
如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。 其余参数获取传递到模板字符串中的表达式的值！

输出
["", "is", "years old"] Lydia 21

十二、 输出什么

```
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

```

解析：
在比较相等性，原始类型通过它们的值进行比较，
而对象通过它们的引用进行比较。
JavaScript 检查对象是否具有对内存中相同位置的引用。
返回：Hmm.. You don't have an age I guess

十三、输出什么

```
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

解析：
扩展运算符（... args）返回一个带参数的数组。 数组是一个对象，因此 typeof args 返回 object。

十四、输出什么

```
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

```

A: { a: "one", b: "two" }

B: { b: "two", a: "three" }

C: { a: "three", b: "two" }

解析：如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值。
答案: C

十五、输出什么

```
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

解析：
相同之处：三个都会将此时进行的语句停止。

不同之处：

1、break：是立即结束语句，并跳出语句，进行下个语句执行。

2、continue：是停止当前语句，并从头执行该语句。

3、return：停止函数。

4、使用的语句环境不一样，break 和 continue 是用在循环或 switch 语句中，return 是用在函数语句中。

答案：
1 2 4

十六、输出什么

```
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

解析
对象键自动转换为字符串。我们试图将一个对象设置为对象 a 的键，其值为 123。

但是，当对象自动转换为字符串化时，它变成了[Object object]。 所以我们在这里说的是 a["Object object"] = 123。 然后，我们可以尝试再次做同样的事情。 c 对象同样会发生隐式类型转换。那么，a["Object object"] = 456。

然后，我们打印 a[b]，它实际上是 a["Object object"]。 我们将其设置为 456，因此返回 456。
