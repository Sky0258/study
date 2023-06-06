// 抽离出具体的路由处理函数

// 导入 SQL 模块
const db = require('../db/index')

// 导入密码加密模块
const bcrypt = require('bcryptjs')

// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')

// 导入全局配置文件
const config = require('../config')

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
        // 验证密码是否正确
        const compareResult = bcrypt.compareSync(userInfo.password,results[0].password)

        if(!compareResult) {
            return res.cc('密码错误！')
        }

        // 服务器端生成 Token 的字符串
        const user = {...results[0],password:'',user_pic:''}
        // 对用户信息进行加密，生成 Token 字符串
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn: '10h'})
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr
        })

    })
}