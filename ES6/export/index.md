在 es6 中也通过规范的形式，规定了 es6 中如何导入和导出模块
es6 中导入模块，使用 import 模块名称 from '模块标识符'
导入样式 import '标识路径'

在 es6 中使用 export default 和 export 向外暴露成员

export default {
name:'张三',
age:20
}
另一种写法
var info={
name:'张三',
age:20
}

import m1 from './文件路径'

m1 变量名可以随便命名

注意：export default 向外暴露的成员，可以使用任意的变量来接受
在一个模块中，export default 只允许向外暴露一次
在一个模块中，可同时使用 export default 和 export 向外暴露成员
使用 export 向外暴露的成员，只能使用{}的形式接收，这种叫按需导入，可以向外暴露多个成员
如果某些导出的成员不需要，可以在 import 中不接收
使用 export 导出的成员，必须按导出的名称接收 可以转换 import {title as title123} from '路径'

export default {
name:'zhangsan'
}
export var title='小星星'

导入 import m1,{title} from '路径'

在 node 中使用 var 名称 =require('模块标识符') 导入成员
module.exports={} 和 exports 暴露成员
