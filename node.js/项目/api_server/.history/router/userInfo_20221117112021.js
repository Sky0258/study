const express = require('express')

const router = express.Router()

const 

router.get('/userInfo',(req,res) => {
    res.send('userInfo OK')
})

module.exports = router