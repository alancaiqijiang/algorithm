// we want to find all the perfect number within 999
// 有两层循环，第一层循环要找这个数得所有约数
// 第二次要判断 所有得约数加起来是不是等于它本身

// 设i为完美数，我们需要线遍历一遍所有得i

for (var i = 2; i <= 6666; i++) {
    // 用for循环找出i得约数
    // 每次i的累加器需要写一下
    var sum = 0;
    for (var j = 1; j <= i - 1; j++) {
        // 先找i得约数
        if (i % j == 0) {
            sum += j;
        };
    };
    if (sum == i) {
        console.log(i);
    };
    //add to test git-bash time 2
};

