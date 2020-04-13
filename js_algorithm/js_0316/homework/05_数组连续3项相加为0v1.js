//数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？
//如果有，请输出这3项。

// 看完视频练的

var arr = [1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];

// 用for循环一个一个遍历过去呗，把所有得选项都遍历一遍
// 用两层for循环去套

for (var i = 0; i < arr.length - 2; i++) {
    var sum = 0;
    for (let j = 0; j < 3; j++) {
        sum += arr[i + j]
    
    };
    if(sum == 0) {
        var str = ' ';
        for (let j = 0; j < 3; j++) {
            str += arr[i+j] + ' ';
        };
        console.log(str);
    }
      
    
    
};

