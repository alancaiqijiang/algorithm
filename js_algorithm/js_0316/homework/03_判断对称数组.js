//第3题 【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？
// 判断某个是不是对称，其实就是检查首项末尾项是否相等呗
// 即 1和n-1，2 和n-2 和 n-3，规律不就来了吗,这不就是n-i
// 这里有个问题哈，即数组是偶数个还是奇数长度的问题。偶数个是可以全部对称的，奇数个最中间的数字不需要对称

var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
//做到这里，我突然发现是不是只用检查一半的数字
var n = arr.length
var count = 0;
if (arr.length % 2 == 0) {
    console.log('这是一个偶数组');
    count = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        if (arr[i] == arr[n - i -1]) {
            count++;
        } else {
            console.log('这不是一个对称数组');
            break;
        }
        if (count == (n / 2)) {
            console.log('这是一个对称数组');
        };
    };
} else {
    count = 0;
    console.log('这是一个奇数组');
    for (var i = 0; i < arr.length / 2 - 1; i++) {
        if (arr[i] == arr[n - i - 1]) {
            count++;
        } else {
            console.log('这不是一个对称数组');
            break;
        }
    };
    if (count == (n - 1) / 2) {
        console.log('这是一个对称数组');
    }
}

