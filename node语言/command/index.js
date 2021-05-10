console.log(process.argv); // node 命令路径 ，被执行文件路径
process.argv.forEach((k,v) => {
    console.log(k+"=>"+v);
});// 参数是数组的形式传入