const fs = require('fs');

fs.readFile('./file/11.txt','utf-8',function(error,dataStr){
    console.log(error.path);
    console.log(dataStr);
});