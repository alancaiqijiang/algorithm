// output image row i =1 , 10 spaces before 1
// output image row i =2 , 8 spaces before 2 1
// output image row i =3 , 6 spaces before 3 2 1
// output image row i =4 , 4 spaces before 2 1
// space = 12-2*i
// write this by for statement
for (var i = 1; i <= 6; i++) {
    // row
    var str = '';
    // ad space
    str += ' '.repeat(12 - 2 * i);
    
    //left side
    for (var j = i; j >= 1; j--) {
        str += j + ' ';
    };
    //   right side
    for (var k = 2; k <= i; k++) {
        str += k + ' ';
    };
    console.log(str);
}