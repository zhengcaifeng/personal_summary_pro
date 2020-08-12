css3 的新特性

#### 1.border-radius

border-image

#### 2.box-shadow

box-size:border-box 含 border 和 padding
cotent-box 标准盒模型 不含 boder 和 padding

#### 3. transition 过渡

{
width:100px;
transition: width 2s linear delay（延迟多久执行）;
}

#### 4.动画   animation name,duration time delay

animation :mymove 3s linear 3s infinite

animation：动画名称，一个周期花费时间，运动曲线（默认 ease），动画延迟（默认 0），播放次数（默认 1），是否反向播放动画（默认 normal），是否暂停动画（默认 running）

#### 5.形状转换    transform:适用于 2D 或 3D 转换的元素

rotate(30deg);   translate(30px,30px);   scale(.8);        skew(10deg,10deg);     
  rotateX(180deg);     rotateY(180deg);        rotate3d(10,10,10,90deg);

#### 6.flex 布局

justify-content:center flex-start flex-end space-between space-around
align-items:center flex-start flex-end baseline stretch
aling-content: 多跟轴线的
flex-direction:row ,column row-reverse column-reverse
flex-wrap:nowrap ,wrap,wrap-reverse
子元素的有
flex:
flex-basis:默认值为 auto，项目本来的大小
flex-grow: 默认 0,有剩余空间也不放大
flex-shrink 默认为 1，空间不足是会缩小， 如果为 0，不缩小
flex:auto(1 1 auto )
flex:none (0 0 auto)
flex:initial(0 1 auto) 默认值:根据自身宽高设置尺寸,不放大，可缩小

https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
一个值无单位就是 grow,有单位有 basis,
两个值一个有单位一个无 grow basis
两个值无单位 gorw shrink
三个值 grow shrink basis

align-self：如果父亲设置 align-item ，子容器的优先
order:顺序

#### 7.伪类

p:first-of-type 父元素中类型的一个
p:nth-child(2) :nth-child(n) 必须是父中的一个，且类型也相同

#### 8.媒体查询

@media screen and (max-width:300)and (min-height:400px){

}
all
min-height
max-height
max-width
min-width
