const mkdir = require('./mkdir')
var { adjustPath,log,logWarning,logErr } = require('../util')
var fs = require('fs')

function copy(src, dist) {
    var existsSrc = fs.existsSync(src)
    var existsDist = fs.existsSync(dist)
    var fileName,distPath,srcPath,readAble,writeAble

    if (!existsSrc) {
        logErr(`The srcPath ${src} not exists.`);
        return
    }

    if (!existsDist) {
        mkdir(dist)
    }

    //文件 -> 复制
    if (fs.statSync(src).isFile()) {
        //利用正则获取路径中的文件名
        fileName = src.toString().match(/\/([^\/]+)$/g)[0]  //以/ + 至少一个非/结尾的字符串
        distPath = dist + fileName
        readAble = fs.createReadStream(src)
        writeAble = fs.createWriteStream(distPath)
        readAble.pipe(writeAble)
    } else {
        var paths = fs.readdirSync(src)
        for (let i = 0; i < paths.length; i++) {
            srcPath = src + '/' + paths[i]            
            distPath = dist + '/' + paths[i]            

            if (fs.statSync(srcPath).isFile()) {
                readAble = fs.createReadStream(srcPath)
                writeAble = fs.createWriteStream(distPath)
                readAble.pipe(writeAble)
            }else {
                copy(srcPath, distPath)
            }
        }
    }
}

module.exports = copy