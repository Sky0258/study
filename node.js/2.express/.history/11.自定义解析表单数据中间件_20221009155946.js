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
        console.log(body);
    })
})

app.post('/user',(req,res)=>{
    res.send('ok')
})

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})