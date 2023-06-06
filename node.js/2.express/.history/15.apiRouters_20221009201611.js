const express = require('express')
const router = express.Router()

router.get('/get',(req,res) =>{
    const query = req.query

    res.send({
        status: 0,
        
    })
})

module.exports = router