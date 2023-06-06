// 抽离出具体的路由处理函数

// 导入 SQL 模块
const db = require('../db/index')

// 导入密码加密模块
const bcrypt = require('bcryptjs')

// 注册新用户的处理函数
exports.regUser = (req,res) => {
    const userInfo = req.body

    // 判空
    if(!userInfo.username || !userInfo.password) {
        return res.send({ status: 1, message: '用户名或密码不合法！'})
    }

    // 定义 SQL 语句
    const sql = 'select * from ev_users where username=?'

    db.query(sql,[userInfo.username],(err,results)=>{
        console.log(results.length);
        // 执行 SQL 语句失败
        if(err) {
            return res.send({ status:1, message:err.message })
        }

        // 用户名被占用
        if(results.length > 0) {
            return res.send({ stats:1, message:'用户名被占用，请更换其他用户名！'})
        }

        // 用户名可用，后续流程...
        // 密码加密
        console.log(userInfo.password);
        userInfo.password = bcrypt.hashSync(userInfo.password, 10)
        console.log(userInfo.password);
    })

}

// 登录的处理函数
exports.login = (req,res) => {
    res.send('login OK')
}