// 局部中间件函数  不使用app.use()
const express = require('express')
const app = express()

const m1 = (req,res,next)=>{
    console.log('这是第一个局部中间件函数');
    next();
}

const m2 = (req,res,next)=>{
    console.log('这是第二个局部中间件函数');
    next();
}

app.get('/user',m1,m2,(req,res)=>{
    res.send('user page')
})

app.get('/home',[m1,m2],(req,res)=>{
    res.send('home page')
})

app.post('/',(req,res)=>{
    res.send('index page')
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})