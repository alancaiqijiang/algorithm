//寻找所有水仙花数、寻找10000以内的完美数
// 逻辑一，水仙花数的函数
//水仙花数是指一个 3 位数，它的每个位上的数字的 3次幂之和等于它本身（例如：1^3 + 5^3+ 3^3 = 153）。
var n = 100;

function NarNum() {
    var a = n.toString()
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += Math.pow(Number(a[i]), 3);
    }
    if (sum == n) {
        return true;
    } else {
        return false;
    };
}

//如果一个数恰好等于它的因子之和，则称该数为“完全数”。
//第一个完全数是6，第二个完全数是28，第三个完全数是496，后面的完全数还有8128、33550336等等。

// while(n<10000){
//     if(NarNum()){
//         console.log(n);
//     };
//     n++
// }

function PerfectNum() {
    var sum = 0;
    for (i = 1; i < n; i++){
        if (n % i == 0){
            sum += i;
        };
    };
    if( sum == n){
        return true;
    }else{
        return false;
    };
};


// 用while语句判断一下


// while(n<10000){
//     if(NarNum() && PerfectNum()){
//         console.log(n)
//     };
//     n++
// }