// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs'
})