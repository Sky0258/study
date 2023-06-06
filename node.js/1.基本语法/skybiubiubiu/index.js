const date = require('../src/date');

const escape = require('../src/escape')

module.exports = {
    //将对象展开暴露出来
    ...date,
    ...escape
}