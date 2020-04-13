//求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17, 3]的交集。
// 经过第一遍的梳理，我发现不需要把数组合并进行遍历直接arr1和arr2比较就可以了
// 看过视频后的联系
var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17, 3];
var res_arr = [];


for (let i = 0; i < arr1.length; i++) {
    if( arr2.includes(arr1[i])){
        res_arr.push(arr1[i]);
    }
    
}

console.log(res_arr)