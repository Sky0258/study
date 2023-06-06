const fs = require('fs');

fs.writeFile('./file/2.txt','ok123','utf-8',function(err) {
    if(err) {
        return console.log('写入失败！' + err.message);
    }

    console.log('写入成功！');
})