var { adjustPath,log,logWarning,logErr } = require('../util')
var fs = require('fs')

function remove(path, callback) {
    var exists = fs.existsSync(path)
    if (!exists) {
        logErr(`${path} is not exists.`);
        return
    }

    if (fs.statSync(path).isFile()) {
        fs.unlinkSync(path)
        callback && callback()
    }
}

module.exports = remove
