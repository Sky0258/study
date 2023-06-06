// 建立服务器，将html静态资源上传上去，才能使用ajax
const express = require('express')

const app = express()

// 配置跨域
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

// 用 express.static 对外提供静态资源，把参数文件夹下的所有文件暴露
// 要是对外托管多个静态资源，都没有设置前缀的话，谁在前面调用谁
app.use('/public',express.static('./public'))   // 挂载路径前缀


// 测试接口 /first
app.get('/first',(req,res) => {
    res.send(req.query)
    res.send('first OOK')
})

app.post('/first',(req,res) => {
    // res.send(req.body)
    // res.send(400).send('not OK')
    res.send({
        name: 'zs',
        age: 18
    })
})

app.get('/data',(req,res) => {
    res.send({
        name: 'zs'
    })
})
app.get('/get',(req,res) => {
    // console.log(req);
    res.send(req.params)
})

app.post('/post',(req,res)=> {
    console.log(req.body);
    res.send(req.body)
})

app.post('/json',(req,res)=> {
    res.send(req.body)
})

app.post('/readyState',(req,res)=> {
    res.send('hello')
})

app.post('/error',(req,res) => {
    res.status(400).send('not ok')
})

app.get('/email',(req,res) => {
    if(req.query.email == '111@qq.com') {
        res.send(400,'该邮箱已被占用，请修改')
    }else {
        res.send('验证成功！')
    }
})

app.get('/search',(req,res) => {
    res.send([111,2222,3333,444])
})


app.listen(3000,()=>{
    console.log('express server running at http://127.0.0.1:3000');
})
