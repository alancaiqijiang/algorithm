// 课堂练习

var a = 10;

function fun(){
    a++;        // 在函数中，因为var a 先提升变量执行，所以a的值是undifined，所以undifine +1 = NaN
    var a = 3;  // 所以这里是var a =3 取代了NaN 
    console.log(a);// 输出3
}
fun();
console.log(a);// 输出10 ，因为局部变量a =3 提升了，所以遮蔽了全局变量，故全局变量不变。
