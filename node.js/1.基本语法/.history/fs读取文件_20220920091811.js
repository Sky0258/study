const fs = require('fs');

fs.readFile('./file/1.txt','utf-8',function(error,dataStr){
    console.log(error);
    console.log(dataStr);
});