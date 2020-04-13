var fs = require('fs');

var content = fs.readFileSync('./捐款记录.txt').toString();


var arr = content.split('\r\n');

var sum = 0;
for (i = 0; i < arr.length; i++) {
   var _arr = arr[i].split(' ');
   sum += Number(_arr[1]);
};

console.log(sum);
