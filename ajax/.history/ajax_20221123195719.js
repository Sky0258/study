function ajax (options) {
    // 设置默认值
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function() {
        },
        error: function() {
        }
    }

    // 对象覆盖用 options 对象中的属性覆盖 defaults 对象中的属性
    Object.assign(defaults,options)

    var xhr = new XMLHttpRequest()

    var params = ''

    for(var i in defaults.data) {
        params += i + '=' + defaults.data[i] + '&'
    }

    params = params.substr(0,params.length - 1)

    if(defaults.type == 'get') {
        defaults.url += '?' + params
    }

    xhr.open(defaults.type,defaults.url)

    if(defaults.type == 'post') {
        var contentType = defaults.header['Content-Type'] 
        xhr.setRequestHeader('Content-Type',contentType)
        if(contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        }else {
            xhr.send(params)
        }
        
    }else {
        xhr.send()
    }

    xhr.onload = function() {
        var contentType = xhr.getResponseHeader('Content-Type')

        var responseText = xhr.responseText

        if(contentType.includes('application/json')) {
            responseText = JSON.parse(responseText)
        }

        // http 状态码
        if(xhr.status == 200){
            defaults.success(xhr)
        }else {
            defaults.error(xhr)
        }
       
    }
}