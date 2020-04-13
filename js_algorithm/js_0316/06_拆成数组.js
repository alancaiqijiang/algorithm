// 引入fs模块， fs模块就是file system模块
var fs = require('fs');
// 采用此模块以后，你就可以读取系统内得文件
var content = fs.readFileSync('./数据.txt').toString();
//数据被读取到一个字符串里，如果不加toString(),则会出现2进制得数字
//所有数据都被读取到一个带有分隔符得字符串里

var arr = content.split('\r\n');



// 求和，请注意，现在数组里得内容都是字符串，运算时需要转为数字
sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
};
console.log(sum);