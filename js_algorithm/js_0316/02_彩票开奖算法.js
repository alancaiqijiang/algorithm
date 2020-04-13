var arr = [12, 5, 8, 12, 17, 29];
var res_arr = []

while(res_arr.length < 6){
    // 需要1~33 随机出个数字
    n= Math.floor(Math.random()* 33 +1)

    // 确认n是否在res_arr里，如果没有，则加入
    if(!res_arr.includes(n)){
        res_arr.push(n);
    };
}; 
console.log(res_arr);