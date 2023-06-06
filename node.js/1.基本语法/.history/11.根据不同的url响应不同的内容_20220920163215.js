const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    let content = '<h1>404 Not found!</h1>'
    const url = req.url;

    if(url == '/' || url == '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url == '/about.html') {
        content = '<h1>关于主页</h1>'
    }

    // 解决中文乱码
    res.setHeader('Content-Type','')
})

server.listen(80,() =>{
    console.log('server running at 127.0.0.1');
})