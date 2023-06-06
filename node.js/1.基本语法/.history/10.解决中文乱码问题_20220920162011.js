const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`;

    // 解决中文乱码问题
    // 调用 res.setHeader() 方法，设置 Content-Type 响应头格式
    res.setHeader('Content-Type','text/html; charset=utf-8');

    res.end(str);
})

// 开启服务器
server.listen