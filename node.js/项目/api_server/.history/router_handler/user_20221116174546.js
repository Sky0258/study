// 抽离出具体的路由处理函数

// 导入 SQL 模块
const db = require('../db/index')

// 导入密码加密模块
const bcrypt = require('bcryptjs')

// 注册新用户的处理函数
exports.regUser = (req,res) => {
    const userInfo = req.body

    // 判空
    // if(!userInfo.username) {
    //     return res.cc('用户名不能为空！')
    // }else if(!userInfo.password) {
    //     return res.cc('密码不能为空！')
    // }

    // 定义 SQL 语句
    const sql = 'select * from ev_users where username=?'

    db.query(sql,[userInfo.username],(err,results)=>{
        // 执行 SQL 语句失败
        if(err) {
            return res.cc(err)
        }

        // 用户名被占用
        if(results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！')
        }

        // 用户名可用，后续流程...
        // 密码加密
        userInfo.password = bcrypt.hashSync(userInfo.password, 10)
        const sqlStr = 'insert into ev_users set ?'

        db.query(sqlStr,{ username:userInfo.username, password:userInfo.password },(err,results)=> {
            if(err) return res.cc(err)
            if(results.affectedRows != 1) {
                return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册成功
            // res.send({ status: 0, message: '注册成功！'})
            res.cc('注册成功！', 0)
        })

    })

}

// 登录的处理函数
exports.login = (req,res) => {
    const userInfo = req.body

    const sqlStr = `select * from ev_users where username=?`
    db.query(sqlStr,[userInfo.username],(err,results) => {
        if(err) return res.cc(err)
        if(results.length != 1) return res.cc('该用户不存在，请先注册账号！')

    })
    res.send('login OK')
}