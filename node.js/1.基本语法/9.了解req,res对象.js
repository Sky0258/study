const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    // req 请求对象，客户端向我们发送请求的内容
    const url = req.url;
    const method = req.method;

    const str = `Your request url is ${url}, and request method is ${method}`;

    console.log(str);

    // res 响应对象 我们向客户端发送响应
    res.end(str);
})

server.listen(80,() => {
    console.log('server running at http://127.0.0.1');
})