//第3题 【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？
// 看完视频后练习

var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
var flag = true;

for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] != arr[arr.length - i -1]){
        flag = false;
    }
}

if(flag){
    console.log('对称');
}else{
    console.log('不对称');
}
