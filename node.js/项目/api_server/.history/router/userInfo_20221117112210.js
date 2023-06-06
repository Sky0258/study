const express = require('express')

const router = express.Router()

const userInfo_handler = require('../router_handler/userinfo')


router.get('/userInfo',userInfo_handler.getUserInfo)

module.exports = router