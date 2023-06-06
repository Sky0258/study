// 导入 express
const express = require('express')

// 创建服务器的实例对象
const app = express()

// 启动服务器
app.listen(3007,()=> {
    console.log('api_server running at ');
})