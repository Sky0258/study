// module.exports === exports  但是require指向的永远都是 module.exports 的对象，所以一个模块中最好只用一个，不要混用

module.exports = {
    username: 'Jack',
    age: 18
}
module.exports.nikeName = 'Alice'


