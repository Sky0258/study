const a = require('./skybiubiubiu');

const k = a.dateFormat(new Date());

console.log(k);

const m = a.htmlEscape('<h1>11111111</h1>');
// console.log(m);

const n = a.htmlUnEscape(m);
console.log(n);