const express = require('express')
const app = express()
const router = require('./15.apiRouters')

app.use('/api',router)

app.listen('80',()=>{
    console.log('express running at http://127.0.0.1');
})