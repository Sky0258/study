const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

fs.readFile(path.join(__dirname,'./file/分隔文件案例/24.缓动动画.html'),'utf-8',function(error,dataStr) {
    if(error) {
        return console.log('读取文件失败！' + error.message);
    }

    // console.log(dataStr);
    const reqStyle = /<style>[\s\S]*<\/style>/;
    const reqScript = /<script>[\s\S]*<\/script>/;

    resolveCSS(dataStr);
    resolveScript(dataStr);
    resolveHTML(dataStr);

    function resolveCSS(dataStr) {
        // 提取匹配正则表达式
        const r1 = reqStyle.exec(dataStr);
        // r1[0]是结果
        const r2 = r1[0].replace('<style>','').replace('</style>','');
        // 将结果写入css文件
        fs.writeFile(path.join(__dirname,'./file/分隔案例.css'),r2,function(err) {
            if(err) {
                return console.log('写入CSS文件失败！' + err.message);
            }
            console.log('写入CSS文件成功！');
        })
    }

    function resolveScript(dataStr) {
        // 提取匹配正则表达式
        const r1 = reqScript.exec(dataStr);
        // r1[0]是结果
        const r2 = r1[0].replace('<script>','').replace('</script>','');
        // 将结果写入js文件
        fs.writeFile(path.join(__dirname,'./file/分隔案例.js'),r2,function(err) {
            if(err) {
                return console.log('写入JS文件失败！' + err.message);
            }
            console.log('写入JS文件成功！');
        })
    }

    function resolveHTML(dataStr) {
        // 通过正则将内嵌的css和js替换为引入标签
        const r1 = dataStr.replace(reqStyle,'<link rel="stylesheet" href="./分隔案例.css"/>').replace(reqScript,'<script src="./分隔案例.js"></script>');

        fs.writeFile(path.join(__dirname,'./file/分隔案例.html'),r1,function(err) {
            if(err) {
                return console.log(err.message);
            }

            console.log('写入HTML文件成功！');
        })
    }
})