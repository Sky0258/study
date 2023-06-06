const express = require('express')

const router = express.Router()

const userInfo_handler = require('../router_handler/userInfo')


router.get('/userInfo',userInfo_handler.getUserInfo)
router.post('/upDateUserInfo',userInfo_handler.upDateUserInfo)

module.exports = router