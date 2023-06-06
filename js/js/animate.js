// 动画函数封装
function animate(obj,target,callback) {
    // 先清除定时器避免叠代
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        // 步长公式：（目标 - 已走距离）/ 10；
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数
            if(callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },10);
}