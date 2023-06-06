// 读取文件
const fs = require('fs');
// 路径拼接
const path = require('path');

// web 服务器
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    const fpath = path.join(__dirname,'./分隔文件案例',req.url);

    console.log(fpath);
    // fs.readFile(fpath,'utf-8',function(error,dataStr) {
    //     if(error) {
    //         return res.end('404 Not found!');
    //     }

    //     res.end(dataStr);
    // })
})

server.listen(80,() =>{
    console.log('server running at http://127.0.0.1');
})

