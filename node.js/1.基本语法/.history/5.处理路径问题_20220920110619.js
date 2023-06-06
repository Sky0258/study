// __dirname  代表的是这个js文件的当前目录  以后都得这么用
// 1. 用 ./或../ 会有路径拼接问题  不在当前窗口下打开cmd 拼接出来的路径就不一样了
// 2. 用绝对路径  移植性低，可行性低   万一当前文件夹换地址了，就无法运行了

const fs = require('fs');

console.log(__dirname);

fs.readFile(__dirname + '/file/1.txt','utf-8',function(error,dataStr) {
    if(error) {
        return console.log('读取失败！' + error.message);
    }
    console.log('读取成功！' + dataStr);
})
