// 1.导入express
const express = require('express');

// 2.创建web服务器
const app = express();

// 4.监听客户端的 post 和 get 请求，并向客户端响应具体内容
app.post('/user',(req,res) => {
    res.send({ name:'Jackie',age:18,gender:'男'});
})
app.get('/user',(req,res) => {
    res.send('调用成功！');
})

// 5.获取 url 携带的参数
app.get('/',(req,res) => {
    console.log(req.query);
})

// 3.启动web服务器
app.listen(80,() =>{
    console.log('express server running at http://127.0.0.1');
})