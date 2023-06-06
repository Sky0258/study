// 1.导入express
const express = require('express')

// 2.创建web服务器
const app = express()


// 4.导入路由模块
const router = require('./5.router')
// 注册路由模块
// app.use(router)

// 添加统一的路由前缀
app.use('/api',router)


// 3.开启web服务器
app.listen(80,() => {
    console.log('express running at http://127.0.0.1');
})