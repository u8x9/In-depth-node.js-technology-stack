// 就是一个模块

let name = 'u8x';
const age = 99;

let message = 'my name is u8x';

function sayHello(name) {
    console.log("Hello " + name);
}

// setTimeout(() => {
//     exports.name = '张三';
// }, 1000);
setTimeout(() => {
    console.log(exports.name);
}, 2000);
exports.name = name;
exports.age = age;
exports.sayHello = sayHello;

