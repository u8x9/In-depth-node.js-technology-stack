// node 中实现commonjs的本质就是对象人引用赋值

const bar = require('./bar');

// console.log(bar);
// console.log(bar.name);
// console.log(bar.age);
// bar.sayHello('张三');


// 对象的解构
// const { name, age, sayHello } = require('./bar');
console.log(bar.name);
console.log(bar.age);
bar.sayHello('李四');
// setTimeout(() => {
//     console.log("name:", bar.name);
// }, 2000);
setTimeout(() => {
    bar.name = '王武';
}, 1000);