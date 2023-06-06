const fs = require('fs');

fs.readFile('./file/成绩.txt','utf-8',function(error,dataStr) {
    if(error) {
        return console.log('文件读取失败！' + error.message);
    }

    const str1 = dataStr.split(' ');

    console.log(str1);
});