[toc]

#### 2. 为何 v-for 中用 key

不许用 key,且不能用 index 或 random

因为在 diff 算法中通过 tag 和 key 来判断，是否是同一节点 sameNode
减少渲染次数，提高渲染性能

#### 4. 描述组件渲染和更新的过程

vue 的三大模块
响应式 监听属性变化

模板渲染
虚拟 dom

执行 render 函数的时候，通过函数 touch 会触发 getter 然后收集依赖到 watcher 里面，如果对数据更改的时候，会触发 setter,会通知 notify watcher,看看之前是否已经收集过了，收集过了，就会触发 re-render,

然后进行模板渲染，之后虚拟 dom 更新

#### 5. v-model 的实现原理

实际是 input +value 的语法糖
绑定 v-model 后实际是给 input 添加一个事件，每次更新的时候，
把 value 值赋值给 model 绑定的值
data 更新后触发 re-render 这样就实现了双向数据绑定

#### 7.自定义 v-modle

应用利用颜色选手器

#### 11.slot

基本使用 作用域插槽
1>基本属性：往子组件中插入一段内容
子组件的 slot 标签 里显示的是父组件的里面的内容
具名插槽 多个插槽，添加 name 属性，确定他们渲染的位置

#### 21.自定义指令 全局和局部指令

#### 响应式

proxy 兼容性 比较低，ie11 不支持无法 polyfill
