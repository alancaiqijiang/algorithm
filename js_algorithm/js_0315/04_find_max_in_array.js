//数组的演示
// 比如说数组arr1
var arr1 = [66, 99, 22, 18, 32]
// 遍历数组
// 提一个比较器
var max = 0
for (var i = 0; i < arr1.length; i++) {
    
    if (max < arr1[i]) {
        max = arr1[i];
    };
};
console.log(max);