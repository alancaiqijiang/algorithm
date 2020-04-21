function fun(obj, n) {
    obj.m++;
    n++;
    console.log(obj, n);
}
console.log(obj, n);
// 为什么这个不是全局变量？这个得意思是，var 引用类型无法成为全局变量，因为一运行函数，就直接覆盖地址了。
var obj = { 'm': 10 };

// n 是全局变量
var n = 10;
// 运行这个参数得时候，直接覆盖了obj地址，导致m得值发生了
fun(obj, n);


console.log(obj.m, n)
