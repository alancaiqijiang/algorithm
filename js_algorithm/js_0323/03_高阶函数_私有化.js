var a = 111;
function fun(){
    var a = 10; 
    return{
        getA: function(){
            console.log(a);
        },
    };
};

var obj = fun();
obj.getA();
obj.getA();
obj.getA();