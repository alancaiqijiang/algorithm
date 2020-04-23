var fun = function(){
    console.log("A");
}
// 定义 fun = 输出A的函数


function fun(){
    console.log("B");
}
// 也是定义函数B，看看哪个提升快呗？
// 那应该是A


fun();
