const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'./file/分隔文件案例/24.缓动动画.html'),'utf-8',function(error,dataStr) {
    if(error) {
        return console.log('读取文件失败！' + error.message);
    }

    // console.log(dataStr);
    const reqStyle = /<style>[\s\S]*<\/style>/;
    const reqScript = /<script>[\s\S]*<\/script>/;

    resolveCSS(dataStr);

    function resolveCSS(dataStr) {
        // 提取匹配正则表达式
        const r1 = reqStyle.exec(dataStr);
        console.log(r1[0]);  // r1[0]是结果
        const r2 = r1[0].replace('<style>','').replace('</style>','');
        console.log(r2);
    }
})