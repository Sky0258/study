// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs'
})

// 3.测试 mysql 模块能否正常工作
db.query('select 1',(err,results) => {
    if(err) {
        return console.log(err.message);
    }

    console.log(results);
})