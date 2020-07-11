var { adjustPath } = require('./util')
var fs = require('fs')

function touch(path, callback) {
    var pathArr = path.toString().split('/')
    
    //相对路径校验
    adjustPath(pathArr[0])

    for (let i = 1; i < pathArr.length; i++) {
        var newPath = pathArr.slice(0, i + 1).join('/')

        //判断当前文件夹是否存在
        var exists = fs.existsSync(newPath)
        if (exists) {
            continue
        }
        
        //如多是数组最后一项 创建文件 否则创建文件夹
        if (i === pathArr.length - 1) {
            var fd = fs.openSync(newPath,'w')
            fs.closeSync(fd)
        }else{
            fs.mkdirSync(newPath)
        }
    }


    callback && callback()
}

module.exports = touch
