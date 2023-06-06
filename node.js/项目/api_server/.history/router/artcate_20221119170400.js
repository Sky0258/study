const express = require('express')

const router = express.Router()

const artcate_handler = require('../router_handler/artcate')

router.get('/cates',artcate_handler.getArticleCates)
router.post('/addCate',artcate_handler.addArticleCate)

module.exports = router