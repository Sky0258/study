// 1.导入express
const express = require('express')

// 2.创建web服务器
const app = express()

const router = require('./5.router')
app.use(router)


// 3.开启web服务器
app.listen(80,() => {
    console.log('express running at http://127.0.0.1');
})