
    var btn = document.querySelectorAll('button');
    var div = document.querySelector('div');

    btn[0].addEventListener('click',function() {
        animate(div,500,function() {
            alert('11111111');
        });
    })

    btn[1].addEventListener('click',function() {
       animate(div,800,function() {
        alert('2222222222');
       })
    })

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
        },15);
    }

    // ‘查看详情’案例
    var one = document.querySelector('.one');

    one.children[0].addEventListener('mouseenter',function() {
        animate(one.children[1],40,function() {
            one.children[0].innerHTML = '<-';
        });
    });

    one.children[0].addEventListener('mouseout',function() {
        animate(one.children[1],-150,function() {
            one.children[0].innerHTML = '->';
        })
    })
