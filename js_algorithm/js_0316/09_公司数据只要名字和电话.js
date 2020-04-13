var fs = require('fs');
var content = fs.readFileSync('./公司数据.txt').toString();

var arr = content.split('\r\n\r\n');

for (i = 0; i < arr.length; i++) {
   var _arr = arr[i].split('\r\n')

   console.log(_arr[0], _arr[3]);

   fs.appendFileSync('./老板你要得结果.txt', _arr[0] + ' ' + _arr[3]+'\r\n\r\n');
};


