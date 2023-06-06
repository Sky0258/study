const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'./file/分隔文件案例/24.缓动动画.html'),'utf-8',function(error,dataStr) {
    if(error) {
        return console.log('读取文件失败！' + error.message);
    }

    const 
})