//build a 9 by 9 multiply table 

for (var i = 1; i <= 9; i++) {
    //to make it look like table, we need confine one i with 9 j, hence we hence str += 
    // and we don't want entire the i*j in one row ,hence, we need clear the result every 9j
    var str = '';
    for (var j = 1; j <= 9; j++) {
        // we add every j into str
        // str += i + '乘' + j + '得' + (i * j);
        str += `${i}乘${j}得${i*j} \t`
    };
    // we place this console here, for 9 row output. if we place inside j-loop. we ouput 81 row because everytime, str is add up by new i*j, . 
    console.log(str);
}
