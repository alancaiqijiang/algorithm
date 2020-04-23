var a = true; 
var b = false;
function fn(){
   if(a){var a = 10;}
   if(b){var b = 20;}
   console.log(a + b);
}
fn();
// 首先外部变量a,b 都被遮蔽，其次var a var b 提升后都成为undefine,不执行if语句
// undefine + undefine = NaN