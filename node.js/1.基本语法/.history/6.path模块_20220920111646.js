const path = require('path');

// 1.path.join();      ../ 可以消除一级目录
const p1 = path.join('/a','/b/c','../','index.js');
console.log(p1);

// 2. path.