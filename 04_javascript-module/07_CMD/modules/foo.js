define(function (require, exports, module) {
    const name = '韩梅梅';
    const age = 99;
    const sayHello = function (name) {
        console.log("你好，" + name);
    };
    module.exports = {
        name,
        age,
        sayHello
    };
});