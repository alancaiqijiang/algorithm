// 请用户输入n
n = 9;
// 引入累加器
var sum = 0
var fenmu = 1;
var fenzi = 1;

for (var i = 1; i <= n; i++) {
    fenzi *= i;
    fenmu *= 2 * i + 1;
    var now = fenzi / fenmu;
    sum += now;

};
sum = sum + 1;
console.log(sum);