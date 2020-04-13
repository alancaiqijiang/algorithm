//引入内置模块，并且存为rl变量。require表示引入

var readline = require('readline');

//引用api
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入一个数字', function (a) {
  var result = 1;

  for (i = 1; i <= a; i++) {
    result *= i;
    console.log(result);
  }


});

