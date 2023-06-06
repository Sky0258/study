const express = require('express')

const router = express.Router()

const userInfo_handler = require('../router_handler/userInfo')
const expressJoi = require('@escook/express-joi')

const { updateUserInfo_schema } = require('../schema/user')

router.get('/userInfo',userInfo_handler.getUserInfo)
router.post('/upDateUserInfo',expressJoi(updateUserInfo_schema),userInfo_handler.upDateUserInfo)

module.exports = router