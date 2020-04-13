var arr = [1, 2, 3, 4, 5];
// 如果里面什么都不填，则会用逗号隔开，成为字符串
console.log(arr.join())
// 如果是空字符串，则没有分隔
console.log(arr.join(''))
// 如果填入，则被填入得字间隔并合成一个字符串
console.log(arr.join('哈哈哈'))