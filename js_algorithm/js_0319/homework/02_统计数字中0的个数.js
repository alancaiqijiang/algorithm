//请封装一个函数calcZero()，它接受1个参数：数字n。
//函数的功能是统计这个数字中0的个数。比如calcZero(1030)结果应该是2，因为它有2个零；
//再比如calcZero(0)结果应该是1，因为它有1个零；再比如calcZero(6)结果应该是0，因为它有0个零。

// 思路转字符串，for循环挨个检查

function calcZero(n) {
    var str = n.toString();
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            count++;
        };
    };
    return count;
};
var a = calcZero(1060);
console.log(a)