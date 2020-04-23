console.log(NaN == NaN);  // false  
console.log(NaN == undefined);   // false
console.log(undefined == undefined);  // true
console.log(null == undefined);  // false(答案是true)
console.log("NaN" == NaN);      // false
console.log(false == 0);  // true
console.log(true == 1);  // true
console.log(false == -1);   // true（答案是false）
console.log(undefined == 0);  // false
console.log(null == 0);    // true（答案是false）
console.log("5" == 5);  //true
console.log("5天" == 5);   // true（答案是false）
console.log([] == true);   // true（答案是false）
console.log([] == false);   // false（答案是true）
console.log({} == true);  // false
console.log({} == false);  // true （答案是false）
