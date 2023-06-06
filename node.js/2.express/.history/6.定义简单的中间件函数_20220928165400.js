const express = require('express')
const app = express()

// 定义一个简单的中间件函数
const mw = function(req,res,next) {
    console.log('这是最简单的中间件函数');
    // 把流转关系，转交给下一个中间件或者路由
    next()
}
app.use(mw)

app.get('/',(req,res) => {
    console.log('调用了 / 这个路由');
    res.send('get request')
})

app.post('/user',(req,res) => {
    console.log('调用了 /user 这个路由');
    res.send('post request')
})

app.listen(80,() => {
    console.log('express running at http://127.0.0.1');
})