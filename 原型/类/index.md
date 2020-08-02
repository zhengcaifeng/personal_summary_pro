1、判断一个属性是实例上的属性，还是自身的属性 hasOwnProperty

2、构造函数只能被继承，不能实例化，

```
function Animal(){
  if(new.target===Animal){
    throw '不能实例化'
  }

}
```

3、类只能被 new 构建实例 ，在构造函数中是如何判断

```
function Animal(){
  if(!(this instanceof Animal)){
     throw  '不能new'
  }
}
Animal()
new Animal()
```
