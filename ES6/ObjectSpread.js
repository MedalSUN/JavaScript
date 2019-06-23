// 对象扩展运算符

// 对象扩展运算符后面跟上表达式
// const flag = false;
// const obj = {
//     ...(flag ? {a: 1} : {a: 2}), b: 2
// };
// console.log(obj)


// 使用Object.assign()简单对象类型的复制
//  obj1 = {a: 1};
//  obj2 = {};
//  Object.assign(obj2, obj1);
//  console.log(obj2); // 输出{ a: 1 }
//  obj2.a = 2;
//  console.log(obj2)  // 输出 { a: 2 }
//  console.log(obj1)  // 输出 { a: 1 }

// 使用Object.assign()对引用类型进行复制
// const obj1 = {a: [1,2,3]};
// const obj2 = {};
//  Object.assign(obj2, obj1);
//  console.log(obj2);  // 输出 { a: [ 1, 2, 3 ] }
//  obj2.a[0] = 2;
//  console.log(obj2); // 输出 { a: [ 2, 2, 3 ] }
//  console.log(obj1); // 输出 { a: [ 2, 2, 3 ] }



// 使用 扩展运算符进行引用数据类型的复制
const obj1 = {a: [1,2,3]};
const obj2 = {...obj1};
console.log(obj2);  // 输出 { a: [ 1, 2, 3 ] }
obj2.a[0] = 2;
console.log(obj2); // 输出 { a: [ 2, 2, 3 ] }
console.log(obj1); // 输出 { a: [ 2, 2, 3 ] }

