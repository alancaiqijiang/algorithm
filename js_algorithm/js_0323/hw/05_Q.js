function outer(){
   var m = 100;
   function inner(){
       m += 10;
       console.log(m);
   }
   return inner;
}
var i = outer();// i就是一个inner的函数的输出
var j = outer();// i就是一另个inner的函数的输出
i();// 110
i();// 120
j();// 110
