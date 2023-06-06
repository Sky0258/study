const express = require("express")
const app = express()

//中间件函数
app.use(function(req,res,next){
    
})

app.get('/user',(req,res) => {
    res.send('uer page')
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1')
})