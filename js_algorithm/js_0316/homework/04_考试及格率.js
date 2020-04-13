//请先从百度网盘下载一个txt文件。
//这个文件中是2000个学生的考试成绩。请分别统计语文、数学和英语的及格率，及格线均为60分。

var fs = require('fs');

var content = fs.readFileSync('./考试成绩.txt').toString();

var arr = content.split('\r\n\r\n');

for (i = 0; i < arr.length; i++) {
    var _arr = arr[i].split('\r\n')

};

var sum = 0;
var n = _arr.length;
var yuwenCount = 0, shuxueCount = 0, yinyuCount = 0;

for (i = 0; i < _arr.length; i++) {
    var res_arr = _arr[i].split(' ');
    // console.log(res_arr);
    if (res_arr[3] >= 60) {
        yuwenCount++;
    };
    if (res_arr[5] >= 60) {
        shuxueCount++;
    };
    if (res_arr[7] >= 60) {
        yinyuCount++;
    };
};

var rateYuwen = yuwenCount / n;
var rateShuxue = shuxueCount / n;
var rateYinyu = yinyuCount / n;

console.log(rateYuwen,rateShuxue,rateYinyu);
