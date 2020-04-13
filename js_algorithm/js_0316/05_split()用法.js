var str = '我爱周杰伦爱着我我却着不爱她但是不爱我她去了爱前端'
// 如果里面什么都不填,将会将整个语句加入数组
console.log(str.split());
// 如果是空字符串，则每个字符串之间被间隔，并填入数组
console.log(str.split(''));
// 如果填入，则被填入得字间隔并合成一个字符串
console.log(str.split('爱'));