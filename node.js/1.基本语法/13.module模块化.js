// module.exports === exports  但是require指向的永远都是 module.exports 的对象，所以一个模块中最好只用一个，不要混用

// 1. { username: 'Jack', age: 18, nikeName: 'Alice' }
// module.exports = {
//     username: 'Jack',
//     age: 18
// }
// module.exports.nikeName = 'Alice'


// 2. { username: 'Jack', age: 18, sayHi: [Function: sayHi] }
// module.exports.nikeName = 'Alice'
// module.exports = {
//     username: 'Jack',
//     age: 18,
//     sayHi() {
//         console.log('Hi');
//     }
// }


// 3. { username: 'Jack', nikeName: 'Alice', sayHi: [Function (anonymous)] }
module.exports.username = 'Jack'
module.exports.nikeName = 'Alice'
module.exports.sayHi = function() {
    console.log('Hi');
}