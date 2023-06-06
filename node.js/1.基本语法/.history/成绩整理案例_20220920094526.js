const fs = require('fs');

fs.readFile('./file/成绩.txt','utf-8',function(error,dataStr) {
    if(error) {
        return console.log(error.message);
    }

    console.log(dataStr);
});