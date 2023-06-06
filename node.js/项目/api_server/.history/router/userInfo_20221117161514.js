const express = require('express')

const router = express.Router()

const userInfo_handler = require('../router_handler/userInfo')
const expressJoi = require('@escook/express-joi')

const { upDateUserInfo_schema } = require('../schema/')

router.get('/userInfo',userInfo_handler.getUserInfo)
router.post('/upDateUserInfo',userInfo_handler.upDateUserInfo)

module.exports = router