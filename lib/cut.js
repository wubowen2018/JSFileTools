var fs = require('fs')
const mkdir = require('./mkdir')

function cut(src, dist) {
    var existsSrc = fs.existsSync(src)
    var existsDist = fs.existsSync(dist)
    var fileName,distPath,srcPath,readAble,writeAble

    if (!existsSrc) {
        console.log("The srcPath not exists.");
        return
    }

    if (!existsDist) {
        mkdir(dist)
    }

    if (fs.statSync(src).isFile()) {
        //利用正则获取路径中的文件名
        fileName = src.toString().match(/\/([^\/]+)$/g)[0]
        distPath = dist + fileName
        fs.renameSync(src, distPath)
    } else {
        var paths = fs.readdirSync(src)
        for (let i = 0; i < paths.length; i++) {
            srcPath = src + '/' + paths[i]            
            distPath = dist + '/' + paths[i]            
            fs.renameSync(srcPath, distPath)
        }
    }
}

module.exports = cut