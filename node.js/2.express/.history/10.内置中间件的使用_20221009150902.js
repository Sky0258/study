const express = require('express')
const app = express()

//通过 express。josn() 这个中间件，解析表单中的 JSON 格式数据
app.use(express.json())

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})