//阶乘
function jiecheng(n) {
    if (n == 1) return 1;
    return n * jiecheng(n - 1)
}
// 递归就是调用了自己
console.log(jiecheng(6));