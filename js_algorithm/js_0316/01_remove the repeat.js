arr = [50, 10, 11, 12, 13, 15, 10, 11, 12, 14, 13, 13, 13, 13];
result_arr = [];
for (i = 0; i < arr.length; i++) {
    if (!result_arr.includes(arr[i])) {
        
        result_arr.push(arr[i]);
    };
};
console.log(result_arr);