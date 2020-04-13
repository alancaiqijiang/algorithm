//小兔子跳台阶，第一次跳1阶，第二次跳2阶，依次类推，什么时候超过100

var count = 0;
var sum = 0;

while (true) {
    count++;
    sum += count;
    if (sum >= 100) {
        break;
    };
};
console.log(count);