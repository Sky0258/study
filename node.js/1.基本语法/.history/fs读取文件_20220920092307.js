const fs = require('fs');

fs.readFile('./file/1.txt','utf-8',function(error,dataStr){
    if(error) {
        console.log(error.message);
    }
});