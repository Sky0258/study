const express = require('express')

const router = express.Router()

const articleCates = require('../router_handler/artcate')

router.get('/cates')

module.exports = router