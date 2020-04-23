// 看看就行，一般用不到
var month = 3;
var year = 2020;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        var day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        var day = 30;
        break;
    case 2:
        if (year % 4 == 0) {
            var day = 29;
        } else {
            var day = 28;
        }
}

console.log(day);
