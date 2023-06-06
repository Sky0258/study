const express = require('express')

const app = express()

const router = require('./5.router')
app.use(router)

app.listen(80,() => {
    console.log('express running at http://127.0.0.1');
})