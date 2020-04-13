var a = 0;
// while 语句故意采用死循环true， 其作用为了凸显if语句的结束条件。
while (true) {
    console.log(a);
    a++;
    if (a == 5) {
        break;
    };
};