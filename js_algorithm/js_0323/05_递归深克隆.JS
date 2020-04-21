var o = [1, 2, 3, 4, { 'm': 6, 'v':function getA(){var a = 10;console.log(a)} }];

function deepclone(o) {
    // 先判断类型
    // 如果是数组
    if (Array.isArray(o)) {
        var resutlt = [];
        // 遍历数组
        for (let i = 0; i < o.length; i++) {
            resutlt.push(deepclone(o[i]));
        };

        // 如果是对象
    } else if (typeof o == 'object') {
        var resutlt = [];
        for (var k in o) {
            resutlt[k] = deepclone(o[k]);
        }
        // 如果是普通值
    }else{
        var resutlt = o;
    };
    return resutlt;
};

var fun = deepclone(o)[4].v;

fun();