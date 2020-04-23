var a = true; 
function fn(){
   if(!a){
       var a = 10;
   }
   console.log(a);
}
fn();
// 首先a为局部变量，外部变量被遮蔽了
// 其次 var a 会被提升变量，即var a = undefinie. 
// 故！a = true, 执行var a =10；