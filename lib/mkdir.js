var fs = require('fs')
var { adjustPath,log,logWarning,logErr } = require('./util')

//创建多层文件夹
function mkdir(path,callback){
    var pathArr = path.toString().split('/')
    //如果不是相对路径 return
    adjustPath(pathArr[0])
    
    // ./hello/test 循环依次创建 ./hello   ./hello/tset
    for (let i = 1; i < pathArr.length; i++) {
        var newPath = pathArr.slice(0, i + 1).join('/')

        //判断当前文件夹是否存在
        var exists = fs.existsSync(newPath)
        if (exists) {
            continue
        }

        //路径不存在时创建
        fs.mkdirSync(newPath)
    }

    callback && callback()
}

module.exports = mkdir