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

// exports 是 commonjs 的规范
// node 通过 module.export 实现这个规范
// 本质上是 module.exports 在导出
// module.exports = exports = 目标文件的require的对象
// 一旦 module.exports 赋予了和 exports 不同的对象，两者之间的关联关系也中断了，但最终 require 还是以 module.exports 为主。因为，node中，本质是通过 module.exports 导出