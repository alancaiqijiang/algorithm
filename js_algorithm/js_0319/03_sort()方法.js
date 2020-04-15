var arr = [66, 33, 55, 44, 22, 11];
// arr.sort();
// console.log(arr);
// 可以调用函数
// arr.sort(function(a,b){
//     // 这边反一反即可决定顺序
//     if(a > b){
//         return 322156;// 这个值无所谓，只要是正的
//     }else{
//         return -456;// 这个值无所谓，只要是正的
//     }
// });
//****************************************** */
// 上面的方式可以改为
arr.sort(function(a,b){
         return a - b;
     });

console.log(arr);