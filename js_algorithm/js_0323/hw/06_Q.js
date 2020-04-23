function fo(){
    var i = 0;
    return function(n){
        return n + i++;
    }
}

var f = fo(); // f = fucntion(n){}
var a = f(15); // a = function (15){15 + 0} = 15
var b = fo()(15);// b= function (15){15 + 0} = 15
var c = fo()(20);// c = function (20){20 + 0} = 20，每次都要执行fo故每次都经过var i =0
var d = f(20);// d = function (20){20 + 1} = 20，由于f已经执行过一次了，i要++了


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
