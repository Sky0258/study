const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    let content = '<h1>404 Not found!</h1>'
})

server.listen(80,() =>{
    console.log('server running at 127.0.0.1');
})