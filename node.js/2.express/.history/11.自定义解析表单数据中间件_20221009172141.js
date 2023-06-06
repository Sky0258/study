const express = require('express')
const app = express()

const qs = require('Qs')

app.use((req,res,next) => {
    let str = '';
    req.on('data',(chunk)=> {
        str += chunk;
    })

    req.on('end',()=> {
        const body = qs.parse(str)
        req.body = body;
    })
    console.log(req.body);
    next();
})

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})