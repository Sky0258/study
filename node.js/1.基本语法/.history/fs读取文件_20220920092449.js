const fs = require('fs');

fs.readFile('./file/11.txt','utf-8',function(error,dataStr){
    if(error) {
        return console.log('读取文件失败！'+ error.message);
    }

    console.log('读取文件成功！' + dataStr);
});