const path = require('path');

// 1.path.join();      ../ 可以消除一级目录
const p1 = path.join('/a','/b/c','../','index.js');
console.log(p1);

// 2. path.basename()  提取文件名
const p2 = path.basename(p1);
console.log(p2);