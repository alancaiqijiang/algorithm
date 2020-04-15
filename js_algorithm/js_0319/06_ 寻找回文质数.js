// 题目：寻找这样的数字，它自己是对称的数字，正着读、反着读都是一样的，并且它自己也是质数。
//显示前100个，每行显示10个。
//2、3、5、7、11、101、131、151、181、191、313、353、373、383、727、757、787、797、919、929……
// 用函数写，2个逻辑，1. 检查是否是质数 2 检查，是否是会问


// 先检查是不是质数checkPrime

function checkPrime(a) {
   for (var i = 2; i <= a - 1; i++) {
      if (a % i == 0) {
         return false;
      };
   };
   return true
};

// 先检查是不是回文
// 检查时先把他转换乘字符串

function checkHw(a) {
   var str = a.toString();
   // 字符串也可以像数组一样进行[]枚举下标。比如'573'，它[0]就是5，[1]就是7。
   for (i = 0; i < str.length; i++) {
      // 如果a不是回文，返回false
      // 自己打得错误之处，字符串长度写成了a.str
      if (str[i] != str[str.length - i - 1]) {
         return false
      };
   };
   return true;
};

// 因为要找到前100个 数字
// 看到个数，先count,不知道循环多少次，直接while
// a需要自己增加 a++
var count = 0;
var a = 2;
var str = '';

while (count < 100) {
   if (checkPrime(a) && checkHw(a)) {
      str += a + '\t';
      count++;
      // 错误第二处， if语句没有放在这层嵌套里，导致除了很多空行
      if (count % 10 == 0) {
         console.log(str);
         // 清空字符串，方便下行累加
         str = '';
      }
   };
   
   a++;
}

      

