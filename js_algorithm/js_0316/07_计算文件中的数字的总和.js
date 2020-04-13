// 为了读取文件，需要使用fs模块
var fs = require('fs');

// fs模块就可以读取文件，注意是readFileSync叫做“同步”读取文件
// 什么是同步，什么是异步，以后说
// 读取txt文件的路径，必须加./
var content = fs.readFileSync('./数据.txt');

// 必须加toString，这样才能变为字符串。否则就是二进制数据。
var str = content.toString();

// 所有数据被读取到了一个字符串中，现在要按换行符拆为数组。
var arr = str.split('\r\n');

// console.log(arr);

// 求和
var sum = 0;
for(var i = 0 ; i < arr.length ; i++){
    // 把你遍历到的这项转为数字，相加
    sum += Number(arr[i]);
}

console.log(sum);
