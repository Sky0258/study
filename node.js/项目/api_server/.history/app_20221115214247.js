// 导入 express
const express = require('express')

// 创建服务器的实例对象
const app = express()

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

// 启动服务器
app.listen(3007,()=> {
    console.log('api_server running at http://127.0.0.1:3007');
})