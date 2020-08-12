[toc]

#### 1.v-show 和 v-if 的区别

v-if 按照条件是否渲染，v-show 是 display 的 block 或 none,实现显示和隐藏；

v-show 是通过 css 的 diplay 属性来实现显示和隐藏

v-if 是组件真正的渲染和销毁，而不是显示和隐藏

如果频繁切换显示状态的话，就用 v-show，否则用 v-if

#### 2.父子通讯方式

props 子父 \$on \$emit eventbus

vuex

#### 3.父子组件生命周期执行顺序

创建和挂载间断
index beforeCreate
index created
index beforemounted
list beforeCreated
list created
list beforemounted
list mounted
index mounted

更新间断 父 index 子 list
index beforeUpdate
list beforeUpdate
list updated
index updated

销毁间断
index beforeDestroy
list beforeDestroy
list destroyed
index destroyed

#### 4.第一次页面加载会触发哪几个钩子？

答：会触发 下面这几个 beforeCreate, created, beforeMount, mounted 。

#### 5.双向绑定的原理(响应式原理)

方式一：
通过 Object.defineProperty（）来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调

vue 实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式。

方式二：
发布订阅模式和观察者模式

重点：1，Object.defineProperty 2.依赖收集
默认的 Vue 在初始化数据时，会给 data 中的属性使用 Object.defineProperty 重新定义所以属性，当页面取到对应属性时，会进行依赖收集，（收集当前组件的 watcher）如果属性发生变化会通知相关依赖进行更新操作

数据的获取 或设置，都可以可以添加一个拦截，可以增加一些逻辑，依赖收集

方式三：

当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时。

Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。

用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

vue 的数据双向绑定 将 MVVM 作为数据绑定的入口，整合 Observer，Compile 和 Watcher 三者。

通过 Observer 来监听自己的 model 的数据变化，通过 Compile 来解析编译模板指令（vue 中是用来解析 {{}}）。

最终利用 watcher 搭起 observer 和 Compile 之间的通信桥梁，达到数据变化 —>视图更新；

视图交互变化（input）—>数据 model 变更双向绑定效果。

#### 6.vue2.0 中响应式的缺点（Object.definedProperty 的缺点）

监听的对象需要深度监听，而且是监听到底
无法监听新增和删除属性 需要使用 Vue.set Vue.delete
无法原生监听数组，需要特殊处理

#### 7.keep-alive

缓存组件
keep-alive 新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于 include，可以是字符串或正则表达式)

当组件切换时，不会对向前组件进行卸载，
频繁切换,不需要重复渲染
常用的两个属性 include/exclude
2 个生命周期 active ,deactivated
max 最大限度 超过对大存储值，最近最久未使用
LRu 算法



exclude 优先级高

vue 性能优化的一种方法

```
<keep-alive include='include_components' exclude='exclude_components'>
  <component>
    <!-- 该组件是否缓存取决于include和exclude属性 -->
  </component>
</keep-alive>
```

#### 8.\$nextTick(vue 为什么是异步渲染)

就是在 dom 渲染完以后的回调函数，目的是为了获取最新的 dom 因为 vue 是异步渲染的框架，所以在 data 更新之后不会立刻渲染 dom,如果想要操作 dom，就要用\$nextTick
应用：数据更改之后无法获取 dom 元操作 dom,

1.vue 是异步渲染的框架
2.data 改变之后，dom 不会立刻渲染，在页面渲染时，会将 data 的修改做整合，多次 data 修改只会渲染一次
例子：ul 中循环 li,给 li 的数据添加，获取 li 的个数

Vue 是组件级更新
提高性能，防止一改数据就更新视图 核心方法 nextTick
如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能考虑，Vue 会在本轮数据更新后，再去异步更新视图

当数据更新时，会通知 watcher,他不会马上执行，而是放在一个队列里，如果相同的更改就只保留一个，这个组件都更新完了，统一渲染到视图上

#### 9.动态组件

```
<component :is='组件名'> 选项卡
```

#### 10.异步组件

什么时候用，什么时候加载
import
按需加载
fomrdemo:()=>import('../compotent/load.vue')

#### 11. mixin

多个组件有相同逻辑的时候，抽离出来
mixin 不是完美的解决方法
{
变量来源不明确，不利于阅读
命名冲突，多个 mixin 引入，可能会出现命名冲突
组件和 mixin 会出现多对多的关系，复杂度高
}
vue3 的 composition api 旨在解决这些问题

#### 12.全局过滤器

// 过滤器 数字的千分制
Vue.filter('number_format', numberFormat)
<span>{{v.num | number_format}}</span>

#### 13.Vue 组件中的 data 为什么必须是一个函数

.vue 文件 实际是复用的类(组件是可复用的实例)，当我们使用的时候，就是对这个类的实例化，
如果写成对象形式，就使得所有组件实例共用了一份 data,就会造成一个变了全都会变的结果

如果 data 是一个函数的话，这样每复用一次组件，就会返回一份新的 data
