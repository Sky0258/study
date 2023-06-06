const db = require('../db/index')

// 文章分类数据
exports.getArticleCates = (req,res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'

    db.query(sql,(err,results)=> {
        if(err) return res.cc(err)

        res.send({
            status: 0,
            message: '获取文章分类成功',
            date: results
        })
    })
}

exports.addArticleCate = (req,res) => {
    const sqlStr = `select * from ev_article_cate where name ?`
    const sql = `insert into ev_article_cate set ?`
    console.log(req.body);
    db.query(sqlStr,[req.body.name],(err,results) => {
        if(err) return res.cc(err)
        if(results.length != 0) return res.cc('该分类已存在！')
        

        return res.cc('添加文章分类成功！',0)
    })
}