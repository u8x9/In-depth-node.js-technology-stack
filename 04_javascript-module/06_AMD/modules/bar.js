define(function () {
    const name = 'u8x';
    const age = 99;
    const sayHello = function (name) {
        console.log('你好，' + name);
    };

    return {
        name: name,
        age: age,
        sayHello: sayHello
    };
});