// 读取文件
const fs = require('fs');
// 路径拼接
const path = require('path');

// web 服务器
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    const fpath = path.join(__dirname)
})

server.listen(80,() =>{
    console.log('server running at http://127.0.0.1');
})

