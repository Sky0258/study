const express = require('express');

const app = express();

// 用 express.static 对外提供静态资源，把参数文件夹下的所有文件暴露，访问路径不包含参数文件夹
// 多个
app.use(express.static('./clock'));
app.use(express.static('./file'));

app.listen(80,() => {
    console.log('express server running at http://127/0.0.1');
})