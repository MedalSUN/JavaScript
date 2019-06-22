// 数组扩展运算符
console.log(0, ...[1,2,3], 4)


// 函数调用使用扩展运算符
function add(x, y){
    console.log(x + y);
}
var arr = [1, 2];
add(...arr)

// 扩展运算符使用表达式
const flag = true;
const arr1 = [
    ...(flag ? [1,2,3,4] : []), 5
];

console.log(arr1)


var arr2 = ['a', 'b'];
var arr3 = [0, 1, 2];
arr2.push.apply(arr2, arr3);
console.log(arr2);

var arr4 = [1,2];
var arr5 = [3,4];
var arr6 = [5,6];
var arr7 = [...arr4, ...arr5, ...arr6]
console.log(arr7)

var str1 = 'Love';
function getLength(str1){
    console.log([...str1].length)
}
getLength(str1)

