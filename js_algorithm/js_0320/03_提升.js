// 课堂练习

//function fun() {
   // console.log('B');
//};
// var fun

fun(); // 这里先执行提升的函数，所以是B

var fun = function () {
    console.log('A');
}

fun();// 根据var fun = function(){}的操作，这里输出A

function fun() {
    console.log('B');
};
// 执行的时候，此语句第一执行，函数变量提升



fun();// 由于上一条语句提升了，故此次还输输出A