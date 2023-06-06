// 抽离出具体的路由处理函数

// 注册新用户的处理函数

const db = require('../db/index')

exports.regUser = (req,res) => {
    const userInfo = req.body

    // 判空
    if(!userInfo.username || !userInfo.password) {
        return res.send({ status: 1, message: '用户名或密码不合法！'})
    }

    // 定义 SQL 语句
    const sql = 'select * from ev_users where username=?'

    db.query(sql,[userInfo.username],function(err,results) {
        // 执行 SQL 语句失败
        if(err) {
            return res.send({ status:1, message:err.message })
        }

        // 用户名被占用
        if(results.length > 0) {
            return res.send({ stauts:1, message:'用户名被占用，请更换其他用户名！'})
        }

        // TODO:用户名可用，后续流程...
    })

    res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req,res) => {
    res.send('login OK')
}