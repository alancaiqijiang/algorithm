// we want to find all the divisor for number 148
// how to do it? we conut every number start from 1 to 148 , to let 148 divide by it.

for (i = 1; i <= 148; i++) {

    if ((148 % i) == 0) {
        // (148 % i) == 0 to check if is integer or not

        console.log(i + ' '+'is one of divisor of 148');
    };
};
