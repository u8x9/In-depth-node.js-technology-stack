// 导出方式1
// export const name = 'u8x';
// export const age = 99;
// export const sayHello = function (name) {
//     console.log('你好，' + name);
// };


const name = 'u8x';
const age = 99;
const sayHello = function (name) {
    console.log('你好，' + name);
};

// 导出方式2
// {}，但不是一个对象
// 放置要导出的对象的引用列表
export {
    name,
    age,
    sayHello,
};

// 导出方式3：取别名
// export {
//     name as fname,
//     age as fage,
//     sayHello as fsayhello,
// };