// 导入数据库
const db = require('../db/index')


// 获取用户信息处理函数
exports.getUserInfo = (req,res) => {
    const sql = 'select id, username, nickname, email, user_pic'
}