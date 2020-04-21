function fun(a) {
    return function (b) {
        if (b > a) {
            console.log('体温异常！请隔离');
        } else {
            console.log('体温正常！请放行');
        };
    };
};

// 其中37.2 定义了变量a的值
var bz1= fun(37.2)

bz1(36.9);
bz1(37.3);