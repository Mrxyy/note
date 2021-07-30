# grid总结：

> cell(格子)数量*n*和线的关系*n+1* 

> [阮一峰教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## display：*grid*
 + 声明grid格式

## grid-template-columns，grid-template-rows
 + 声明一个*grid*的模版
 + 参数为大小，<Number>...num 
 + repeat() 参数1:count-/`auto-fill`，参数2:<Number>...num/`fr`fraction/minmax(100px, 1fr)/auto
	- auto-fill:自动根据一行的宽度/cell的宽度决定数量
	- fr 就是剩下的比例占比，例如：1fr 2fr就是1:2
	- minmax产生一个随机数
	- auto 基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。
	- `grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];`给线命名。网格布局允许同一根线有多个名字，比如[fifth-line row-5]。

## grid-rows-gap、grid-colnumn-gap、grid-gap
 > 根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。
 + 参数为数字
 + grid-gap指定一个数字就是 column和rows 一样
 
## grid-template-areas

```css
	grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
	grid-template-areas: 'a b c'
	                     'd e f'
	                     'g h i';
```
 + 给`cell`命名
 + 可以通过名字进行*单元格合并*，`.`就是不命名
 + 单元格线将自动命名，L：\*-start，R：\*-end
 
## grid-auto-flow
 + 类似*flex*中的`flex-direction`
 + 参考值：column、row、column dense、row dense
 + `dense` 会从后面的cell中挑选合适的填充之前的不全的row
 
## grid-auto-rows、grid-auto-columns
 + 模版之外的 columns、rows的大小
 
## 综合写法
 + grid-templte：grid-template-rows、grid-template-columns、grid-template-aress
 + grid：grid-tempalte-rows、grid-template-columns、grid-template-areas、grid-auto-rows、grid-auto-columns、grid-auto-flow
 
## justify-items、align-items、place-items
## justif-content、align-content、place-content
 + 类比*flex* content是整体，item 是在单元格里面
 + *place*是合并写法
 
## 以下 `cell` 内部属性

### grid-column-start、grid-column-end、grid-rows-start、grid-row-end
 + 这些指定cell的L线和R线位置
 + *value*可以是*线*的index或者`span <num>` 其中`span`为常量代表一个*cell*，num为几个cell。**默认start是有index的，不指定start的index下，end和start一样**

### 简写模式 grid-column、grid-row
 + *value*为 `<start>/<end>`,例如：
 + 1/span 2，1/2
 + `z-index`属性指定项目的重叠顺序
	
### grid-areas
 + `grid-areas`是和*flex*的order差不多，都是指定cell的位置，参数为容器中`grid-template-areas`声明的命名

### justify-self、align-self、palce-self
 + 和容器中**-item*属性一样，只是容器中定义的是所有的cell，这个是给自己定义*对齐方式*