//错误级别中间件要放在发请求后面
const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
    // 人为制造错误
    throw new Error('服务器出现错误！')
    res.send('user page')
})

app.use((error,req,res,next)=>{
    console.log('Error' + error.message);
    res.send('Error' + error.message);
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})