const express = require('express');
const app = express();

// 挂载路由  将 '/' 路径挂载到 app 上，这种方法后面基本不使用了
app.get('/',(req,res) => {
    res.send('hello world!');
})

app.post('/',(req,res) => {
    res.send('post request');
})

app.listen(80,()=> {
    console.log('express running at http://127/0.0.1');
})