// 导入 express
const express = require('express')

// 创建服务器的实例对象
const app = express()

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended:false }))

// 导入表单验证包
const joi = require('joi')


// 封装 res.cc 函数，响应函数,用中间件使用
// 每次路由跳转前都要先到这个中间件找到这个封装函数
app.use(function(req,res,next) {
    // 默认 status = 1 ，默认为失败状态，后续处理失败情况只需要将 err错误信息 传入即可
    // err 可能是 Error 错误对象，也有可能是一个字符串
    res.cc = function(err,status = 1) {
        // 向客户端响应
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }

    next()
})


// 解析 Token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}))


// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)

// 导入用户信息模块
const 


// 错误中间件(一定要放在路由之后)
app.use(function (err, req, res, next) {
    // 表单数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)

    // token 验证错误
    if(err.name == 'UnauthorizedError') return res.cc('身份认证失败，请先登录！')

    // 未知错误
    res.cc(err)
})

// 启动服务器
app.listen(3007,()=> {
    console.log('api_server running at http://127.0.0.1:3007');
})