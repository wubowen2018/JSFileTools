const chalk = require('chalk')



const log = content => console.log(chalk.whiteBright(`-- ${content}`))
const logWarning = content => console.log(chalk.yellowBright(`WARN---- ${content}`))
const logTime = content => console.log(chalk.red(`TIME-- ${content}`))

function adjustPath(pathStr) {
    if (pathStr != '.') {
        console.log(chalk.red(`ERR-- param ${pathStr} must be a relative path string. eg:'./hello/world'`));
    }
}

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
    if (time === 1) {
      return time + label
    }
    return time + label + 's'
}
  
  /**
   * @param {number} time
   */
function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else {
      return pluralize(~~(between / 86400), ' day')
    }
}

/*
    123456.15 -> 123,456.15
    let reg = /\B(?=([\d(^\.)]{3})+$)/g
    let reg1 = /(?=(?!\b)(\d{3})+$)/g
    let reg2 = /(?=\B(\d{3})+$)/g
*/
function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=\B(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
function uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 将对象数组按照某个属性的值升序排列
 * @param {Array} arr 
 * @param {String} key 
 * @return {Array} 
 */
let sortby = function (arr, key) {
    return arr.sort(function (a, b) {
        var a1 = a[key];
        var b1 = b[key];
        return (a1 - b1);
    });
};

/**
 * 格式化数字，比如 1000 -> 1k
 * 返回字符串
 * @param {Number} num 
 * @param {String} digits 
 */
function numberFormatter(num, digits) {
    const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9, symbol: 'G' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'k' }
    ]
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
        }
    }
    return num.toString()
}


module.exports = {
    adjustPath,
    numberFormatter,
    timeAgo,
    uppercaseFirst,
    toThousandFilter,
    log,
    sortby,
    logWarning,
    logTime
}
