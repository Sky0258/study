const express = require('express')
const app = express()

app.use((req,res,next) => {
    req.on('data',(chuk))
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})