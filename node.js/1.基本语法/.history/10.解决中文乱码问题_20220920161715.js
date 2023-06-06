const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    const str = `您请求的 URL 地址是 ${req.url}，请求的`
})