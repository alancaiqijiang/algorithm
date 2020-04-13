

for (var i = 10; i % 5 < 3; i++) {
    console.log(i);
};


//结果， 输出console(i) 
// i = 10 时， i % 5 = 0 < 3 ，满足条件，执行console.log(i) = 10
// i = 11 时， i % 5 = 1 < 3 ，满足条件，执行console.log(i) = 11
// i = 12 时， i % 5 = 2 < 3 ，满足条件，执行console.log(i) = 12
// i = 13 时， i % 5 = 3 < 3 ，不满足条件，不执行console.log(i)，终止循环
// 接下来不执行语句