// 导入数据库
const db = require('../db/index')


// 获取用户信息处理函数
exports.getUserInfo = (req,res) => {
    const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'
    // Token 解析成功后，express-jwt 中间件会帮我们挂载 user 属性到 req 中，user 里面的数据就是生成 Token 时封装的数据
    db.query(sql, req.user.id, (err,results)=> {
        if(err) return res.cc(err.message)

        if(results.length != 1) return res.cc('获取用户信息错误！')

        res.send({
            status: 0,
            message: '获取用户信息成功！',
            data: results[0]
        })
    })
}

// 修改用户信息处理函数
exports.upDateUserInfo = (req,res) => {
    const sqlStr = `update ev_users set ? where id=?`

    db.query(sql,[req.body, req.body.id],(err,results) => {
        if(err) return res.cc(err)

        if(results.affectedRows != 1) return res.cc('修改用户基本信息失败！')

        return res.cc('修改用户基本信息成功！', 0)
    })
}