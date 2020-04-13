// i 为开根号的次数
var now = 2
for (var i = 1; i <= 5; i++) {
    now = Math.sqrt(now)/2
};
console.log(now * 2);