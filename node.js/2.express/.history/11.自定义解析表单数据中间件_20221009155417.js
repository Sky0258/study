const express = require('express')
const app = express()

app.use((req,res,next) => {
    let str;
    req.on('data',(chunk)=> {
        str += chunk;
    })
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})