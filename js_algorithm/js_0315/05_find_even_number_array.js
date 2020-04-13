//find all the even number in the array
// 比如说数组arr1
// if num can be divide by 2, it is an even number
var arr1 = [66, 99, 22, 18, 32]
// 遍历数组
// provide the even number 
for (var i = 0; i < arr1.length; i++) {
    
    if (arr1[i] % 2 == 0) {
        console.log(arr1[i]);
    };
};
