//错误级别中间件要放在发请求后面
const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
    throw new Error('')
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})