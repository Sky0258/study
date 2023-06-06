// 导入数据库
const db = require('../db/index')


// 获取用户信息处理函数
exports.getUserInfo = (req,res) => {
    const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'
    db.query(sql,req.user.id,(err,results)=> {
        if(err) return res.cc(err.message)
        if(results.length != 1) return res.cc('获取用户信息错误！')
        
    })
}