//i 用来遍历一遍100以内的数
for (var i = 2; i <= 100; i++) {
    // 用累加器来判断是否是质数,每遍历一次数字，需要sum清零
    var sum = 0
    // 用j来找寻i的因数
    for (var j = 1; j <= 100; j++) {
        if (i % j == 0) {
            // 用累加器把i的所有因数全部累加起来
            sum += j;
        };
    };
    // 判断 因数的值是否 sum == (1+i), 如果是，则为质数
    if (sum == (1 + i)) {
        console.log(i + '是质数', );
    } else {j
        console.log(i + '不是质数');
    };

};

