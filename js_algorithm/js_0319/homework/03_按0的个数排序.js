//给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。
//请将这个数组按各个数字含有零的数量进行排序，由少到多。

// 把第二题用起来，抄一下刚才函数
function calcZero(n) {
    var str = n.toString();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            count++;
        };
    };
    return count;
};

var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
// 这里是趟数
for(var i = 0; i < arr.length - 1; i++){
    // 这里是每趟比较得次数
    for (var j = 0; j < arr.length- i - 1; j++) {
        // 如果前面的比后面得大
        if (calcZero(arr[j]) > calcZero(arr[j + 1])) {
            // 检查下
            console.log(calcZero(arr[j]), calcZero(arr[j + 1]))
            // 用个变量装一下
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+ 1] = temp
        };
    };
};
console.log(arr);