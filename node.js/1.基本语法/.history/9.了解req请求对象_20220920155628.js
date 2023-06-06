const http = require('http');
const server = http.createServer();

server.on('request',(req) => {
    const url = req.url;
    const method = req.method;

    const str = `Your request url is ${url}, and request method`
})