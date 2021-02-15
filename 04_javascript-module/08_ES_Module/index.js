// 导入方式1
// import { name, age, sayHello } from './modules/foo.js'; // 扩展名不能省 WEBPACKAGE才能省 但这里并没有使用WP
// console.log(name, age);
// sayHello('张三丰');

// 导入方式2
// import {
//     name as wName,
//     age as wAge,
//     sayHello as wSayHello
// } from './modules/foo.js';
// console.log(wName, wAge);
// wSayHello('张无忌');

// 导入方式3
import * as foo from './modules/foo.js';
console.log(foo.name, foo.age);
foo.sayHello('赵敏');