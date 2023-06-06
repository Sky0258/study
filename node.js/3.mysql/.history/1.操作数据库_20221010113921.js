// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs'
})

// 3.测试 mysql 模块能否正常工作 (这个 select 语句没有任何实质性作用就是用来测试的)
// db.query('select 1',(err,results) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     console.log(results);
// })


// 查询 users 表中的所有数据
const mysqlStr = 'select * from users'
db.query(mysqlStr,(err,res) => {
    if(err) {
        return console.log(err.message);
    }

    console.log(res.message);
})