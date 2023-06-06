const express = require('express')
const router = express.Router()

// 定义 GET 接口
router.get('/get',(req,res) =>{
    const query = req.query

    res.send({
        status: 0,
        msg: "GET 请求成功！",
        data: query
    })
})

// 定义 POST 接口
router.post('/post',(req,res) => {
    const body = req.body

    res.send({
        status: 0,
        msg: "POST 请求成功！",
        data: body
    })
})

// 定义 DELETE 接口
router.delete('/delete',(req,res) => {
    res.send({
        status: 0,
        msg: "DELETE 请求成功! "
    })
})
module.exports = router