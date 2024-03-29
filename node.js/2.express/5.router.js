// 路由模块
// 1.导入express
const express = require('express');

// 2.创建路由对象
const router = express.Router();

// 3.挂载具体的路由
router.get('/user/list',(req,res) => {
    res.send('Get request');
})

router.post('/user/add',(req,res) => {
    res.send('Post request');
})

// 4.向外导出路由对象
module.exports = router;