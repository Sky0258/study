const fs = require('fs');

fs.readFile('./file/11.txt','utf-8',function(error,dataStr){
    console.log(error.code);
    console.log(dataStr);
});