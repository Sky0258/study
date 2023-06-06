const express = require('express');

const app = express();

// 用 express.static 对外提供静态资源，把参数文件夹下的所有文件暴露，访问路径不包含参数文件夹
// 对外托管多个静态资源，谁在前面调用谁
app.use(express.static('/clock','./clock'));  //挂载路径前缀
app.use(express.static('./file'));

app.listen(80,() => {
    console.log('express server running at http://127/0.0.1');
})