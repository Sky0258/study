// 建立服务器，将html静态资源上传上去，才能使用ajax
const express = require('express')

const app = express()

// 配置跨域
const cors = require('cors')
const { json } = require('express')
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
    var ans = {ans: ['111','222','333']}
    res.send(ans)
})

app.get('/province',(req,res) => {
    var ans = {
        ans: [
            {id: '001',name: '黑龙江省'},
            {id: '002',name: '四川省'},
            {id: '003',name: '河北省'},
            {id: '004',name: '江苏省'},
        ]
    }

    res.send(ans)
})

app.get('/city',(req,res)=> {
    var ans = {
        ans: [
            {id: '300',name: '哈尔滨市'},
            {id: '301',name: '齐齐哈尔市'},
            {id: '302',name: '牡丹江市'},
        ]
    }
    res.send(ans)
})

app.listen(3000,()=>{
    console.log('express server running at http://127.0.0.1:3000');
})
