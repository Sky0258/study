const express = require('express')

const router = express.Router()

const artcate_handler = require('../router_handler/artcate')

const expressJoi = require('@escook/express-joi')
const { addcate_schema } = require('../schema/artcate')

router.get('/cates',artcate_handler.getArticleCates)
router.post('/addCate',expressJoi(addcate_schema),artcate_handler.addArticleCate)
// :id 表示带一个可变的值 id 
router.get('/deleteCate/:id',artcate_handler.deleteArticleCate)

module.exports = router