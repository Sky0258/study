// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs',
})

// 3.测试 mysql 模块能否正常工作 (这个 select 语句没有任何实质性作用就是用来测试的)
// db.query('select 1',(err,results) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     console.log(results);
// })


//  1.查询 users 表中的所有数据
// const mysqlStr = 'select * from users'
// db.query(mysqlStr,(err,results) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     console.log(results);
// })

//  2.users 表中插入数据
// const user = {
//     username: 'Spider-Man',
//     password: 'pc123'
// }

// const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)'
// db.query(sqlStr,[user.username,user.password],(err,results) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     if(results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })


//  3.插入数据简化版
// const user = {
//     username: 'Spider-Man2',
//     password: 'asdfg'
// }

// const sqlStr = 'INSERT INTO users SET ?'

// db.query(sqlStr,user,(err,res) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     if(res.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// })

//  4.更新数据
const user =  {
    id: 
}