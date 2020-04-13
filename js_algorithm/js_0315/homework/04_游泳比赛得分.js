//游泳比赛六个评委打分分别为39、45、42、44、51和48，最终得分计算方法是：去掉一个最高分、去掉一个最低分，剩下4个数字取平均。
//请问这个选手最终得分是多少？
// 明显是一道数组题
// 让 arr = [39, 45, 42, 44, 51, 48]
// 找出最高分，最低分， 这个没什么问题，用max 和min
// 接下来得思路是总分(需要个累加器)减去maxh和min，除以 剩下得count-2

var arr = [39, 45, 42, 44, 51, 48];
var max = 0;
var min = 100;
var count = 0;
var sum = 0;
for (i = 0; i < arr.length; i++) {
    count++;
    sum += Number(arr[i]);
    if (max < arr[i]) {
        max = arr[i];
    };
    if (min > arr[i]) {
        min = arr[i];
    };
};

var avg = (sum - max - min) / (count - 2);
console.log(avg, max, min, sum);