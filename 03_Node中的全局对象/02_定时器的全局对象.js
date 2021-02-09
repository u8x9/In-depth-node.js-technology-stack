setTimeout(() => {
    console.log('set timeout');
}, 1000);

setInterval(() => {
    console.log('set interval');
}, 1000);

setImmediate(() => {
    console.log('set immediate');
});

process.nextTick(() => {
    console.log('process.nextTick');
})