const fs = require('fs');

fs.readFile('./file/11.txt','utf-8',function(err,dataStr){
    console.log(err.path);
    console.log(dataStr);
});