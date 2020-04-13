var arr = ['A','A','A','帅哥', '美女', 'A', '帅哥', '考拉', 'A', '么么哒', '萌萌哒'];
for(i= 0;i< arr.length;i++){

    if(arr[i]=='A'){
        arr.splice(i,1)
        i--
    };
};
console.log(arr);