const express = require("express")
const app = express()

//中间件函数
app.use(function(req,res,next){
    console.log('调用第一个中间件函数');
    next();
})

app.use((req,res,next)=>{
    console.log('调用了第二个中间件函数');
    const date = new Date();
    req.startTime = date;
    next();
})

app.get('/user',(req,res) => {
    res.send('uer page ' + req.startTime);
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})