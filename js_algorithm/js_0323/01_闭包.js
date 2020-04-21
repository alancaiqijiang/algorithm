function fun(b){
    var a = 10;
    return function(b){
        console.log(a+b);
    }
}

var inn = fun();


inn(13);