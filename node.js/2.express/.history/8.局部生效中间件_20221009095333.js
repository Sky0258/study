const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
    res.send('j')
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})