var { adjustPath,log,logWarning,logErr } = require('../util')
var fs = require('fs')

function rmdir(path, callback) {
    //路径不存在，直接return
    var exists = fs.existsSync(path)
    if (!exists) {
        logErr(`The path '${path}' is not exists.`);
        return
    }

    log("del ing  --",path);
    

    //读取路径下的文件和文件价
    var files = fs.readdirSync(path)
    log(path + "--contains--" + files );

    //遍历 删除所有的文件
    for (let i = 0; i < files.length; i++) {
        var curPath = path + '/' + files[i]
        if (fs.statSync(curPath).isDirectory()) {
            //如果是文件夹 递归调用rmdir
            rmdir(curPath)
        }else{
            //是文件删除文件
            fs.unlinkSync(curPath)
            log('del file' + curPath);
            
        }
    }

    //删除路径
    fs.rmdirSync(path)
    log("del :" ,path);

    callback && callback()
}

module.exports = rmdir