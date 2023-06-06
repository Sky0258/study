const express = require('express')
const app = express()

//通过 express.josn() 这个中间件，解析表单中的 JSON 格式数据
app.use(express.json())

//通过 express.urlencoded() 这个中间件，来解析表单中 url-encoded 格式的数据
app.use(express.urlencoded({ extended:false }))

app.post('/user',(req,res)=>{
    res.send('ok')
    console.log(req.body);
})

app.post('/home',(req,res)=>{
    res.send('ok')
    console.log(req.body);
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})