// 满足n2>12000的n的最小值是多少？请使用合适的循环语句寻找答案。
// the aim of this question from shao is 
// practise while loop
// hence , while
var n = 1;
while (true) {
    
    if (Math.pow(n, 2) > 12000) {
        console.log(n);
        break;
        
    }else{
        n = n +1;
        
    }

};