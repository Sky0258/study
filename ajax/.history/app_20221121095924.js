// 建立服务器，将html静态资源上传上去，才能使用ajax
const express = require('express')

const app = express()

// 用 express.static 对外提供静态资源，把参数文件夹下的所有文件暴露
// 要是对外托管多个静态资源，都没有设置前缀的话，谁在前面调用谁
app.use('/public',express.static('./public'))   // 挂载路径前缀


// 测试接口 /first
app.get('/first',(req,res) => {
    res.send('first OOK')
})
app.get('/data',(req,res) => {
    res.send({
        name: 'zs'
    })
})
app.get('/get',(req,res) => {
    res.send(req.params)
})

app.listen(3000,()=>{
    console.log('express server running at http://127.0.0.1:3000');
})
