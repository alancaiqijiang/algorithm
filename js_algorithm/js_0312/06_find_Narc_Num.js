// we want to find all Narcissistic number
// how to do it? we conut every number start from 100 to 999 , for every number, we get unit's digital, ten's digital, hundreds's digtial

for (i = 100; i <= 999; i++) {

    var gewei = i % 10;
    var shiwei = Math.floor(i / 10) % 10;
    var baiwei = Math.floor(i / 100);

    var raNum = Math.pow(gewei, 3) + Math.pow(shiwei, 3) + Math.pow(baiwei, 3)

    if (i == raNum) {
        //check if i is equal to Narcissistic Number
        console.log(i + ' ' + 'is Narcissistic Number');
    };
};
