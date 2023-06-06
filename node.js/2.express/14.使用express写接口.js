const express = require('express')
const app = express()
// 引入路由模块
const router = require('./15.apiRouters')

// 解决跨域问题
const cors = require('cors')
app.use(cors())

// 解决post请求body内容识别问题
app.use(express.urlencoded({ extended: false }))


// 将路由注册到 app 上
app.use('/api',router)

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})