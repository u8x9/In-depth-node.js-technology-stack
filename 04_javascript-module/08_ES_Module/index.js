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

// 默认导出
import fmt from './modules/foo.js';
fmt();

// es 标准没有  require
// 但有 import 函数，注意区分关键字和函数
// import函数返回的是一个 promise 对象
let flag = true;
if (flag) {
    import('./modules/foo.js').then(reslove => {
        console.log(reslove.name);
        console.log(reslove.age);
        reslove.sayHello('灭绝师太');
    }).catch(e => {
        console.log(e);
    })
}