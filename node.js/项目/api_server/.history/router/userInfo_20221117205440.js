const express = require('express')

const router = express.Router()

const userInfo_handler = require('../router_handler/userInfo')
const expressJoi = require('@escook/express-joi')

const { updateUserInfo_schema, updatePwd_schema } = require('../schema/user')

router.get('/userInfo',userInfo_handler.getUserInfo)
router.post('/updateUserInfo',expressJoi(updateUserInfo_schema),userInfo_handler.updateUserInfo)
router.post('/updatePwd',expressJoi(updatePwd_schema),userInfo_handler.updatePwd)
router.post('/updateAvatar',userInfo_handler.updateAvatar)

module.exports = router