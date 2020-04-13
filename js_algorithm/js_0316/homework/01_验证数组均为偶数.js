//数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
// 这题就很简单了，里面所有的数字都%2==0， 

var arr = [6, 10, 12, 14, 88, 81, 100, 56];
// 4月13日通过视频重新修改
// for (i = 0; i < arr.length; i++) {
//     if(arr[i]% 2 != 0){
//         console.log(arr[i],'此数组不是每项都是偶数');
//         break;
//     }else{
         
//     }
// };
// 打一个标记
var isAllEven = true;

for (i = 0; i < arr.length; i++) {
    if(arr[i]% 2 != 0){
        isAllEven = false;
        break;
    };
};

if(isAllEven){
    console.log(arr[i],'此数组均为偶数');
}else{
    console.log(arr[i],'此数组不均为偶数');
}