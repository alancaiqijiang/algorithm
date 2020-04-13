//求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17, 3]的交集。
// 经过第一遍的梳理，我发现不需要把数组合并进行遍历直接arr1和arr2比较就可以了
var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17, 3];
var res_arr = [];

for(var i =0;i<arr1.length;i++){
    for(var j =0;j<arr2.length;j++){
        if(arr1[i] == arr2[j]){
            res_arr.push(arr1[i]);
            console.log(i,j,res_arr);
            break;
        };
    };
};

console.log(res_arr);