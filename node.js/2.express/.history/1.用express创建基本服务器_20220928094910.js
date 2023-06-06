// 1.导入express
const express = require('express');

// 2.创建web服务器
const app = express();

// 4.监听客户端的 post 和 get 请求

// 3.启动web服务器
app.listen(80,() =>{
    console.log('express server running at http://127.0.0.1');
})