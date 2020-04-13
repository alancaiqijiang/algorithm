var i = 3;
var j = 6;

for (; i < j; i++) {
    i += 2;
    j++;
    
};
console.log(i);



//结果， 输出console(i) 
// 第一次循环 i = 3, i< j = 6, 满足条件，i += 2;j++ =7;故输出执行console.log(i) = 3+2 =5
// 第二次循环 i = 5+1, i< j = 7, 满足条件，i += 2;j++ =8;故输出执行console.log(i) = 6+2 =8
// 第三次循环 i = 8+1, i< j = 8, 不满足条件，接下来不执行语句
