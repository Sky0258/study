// 读取文件
const fs = require('fs');
// 路径拼接
const path = require('path');

// web 服务器
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    // res.setHeader('Content-Type','text/html; charset=utf-8');
    let fpath = path.join(__dirname,'./file/分隔文件案例',req.url);

    // 路径优化 设置默认路径
    if(req.url == '/') {
        fpath = path.join(__dirname,'./file/分隔文件案例/aaa.html');
    }

    console.log(fpath);
    fs.readFile(fpath,'utf-8',function(error,dataStr) {
        if(error) {
            return res.end('<h1>404 Not found!</h1>');
        }

        res.end(dataStr);
    })
})

server.listen(80,() =>{
    console.log('server running at http://127.0.0.1');
})

