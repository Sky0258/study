// 建立服务器，将html静态资源上传上去，才能使用ajax
const express = require('express')

const app = express()

app.listen(3000,()=>{
    console.log('express server running at http://127.0.0.1:3000');
})
