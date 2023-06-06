const express = require('express')

const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

// 注册新用户
router.post('/reguser',(req,res) => {
    res.send('reguser OK')
})

// 登录
router.post('/login',(req,res) => {
    res.send('login OK')
})


module.exports = router