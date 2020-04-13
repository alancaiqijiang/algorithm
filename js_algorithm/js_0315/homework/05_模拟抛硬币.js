//模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比。
// 这个题两个问题， 一个模拟抛硬币， 肯定是随机数咯
// 显示用正反面，记录下正面得值， 1百万-去count不就是负面嘛()，占比嘛，算一下

var n = 0
var count = 0
for(i= 1;i<= 1000000;i++){
    n = Math.random()
    if(n > 0.5){
        count++
    }
} 
var zhengmian = count/1000000
var fanmian = 1- zhengmian
// 增加点东西看看能不能上载
console.log(zhengmian,fanmian);