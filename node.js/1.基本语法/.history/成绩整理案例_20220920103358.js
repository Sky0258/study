const fs = require('fs');

fs.readFile('./file/成绩.txt','utf-8',function(error,dataStr) {
    if(error) {
        return console.log('文件读取失败！' + error.message);
    }

    const str1 = dataStr.split(' ');

    const str2 = [];
    str1.forEach(item => {
        str2.push(item.replace('=',"："));
    })

    console.log(str2);
});