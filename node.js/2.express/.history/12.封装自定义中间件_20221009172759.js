const express = require('express')
const app = express()



app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})