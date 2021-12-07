# vite bug

## 打包问题
> 使用：dependencies file形式，隔离vue也会报错 ice no property。

`使用npm publish后，build隔离开，问题消失。定位问题：应该会向上找module包的vue导致使用了两个vue，但是删除modules包后，会报没找到vue（dev 没有问题，build有问题）rollup报错。`
