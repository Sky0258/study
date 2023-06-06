// 抽离出具体的路由处理函数

// 注册新用户的处理函数
exports.regUser = (req,res) => {
    const userInfo = req.body

    if(!userInfo.username || !userInfo.password) {
        return res.send({ status: 1, message: '用户名或密码不合法！'})
    }

    res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req,res) => {
    res.send('login OK')
}