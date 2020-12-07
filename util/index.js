const chalk = require('chalk')

function adjustPath(pathStr) {
    if (pathStr != '.') {
        console.log(chalk.red(`ERR-- param ${pathStr} must be a relative path string. eg:'./hello/world'`));
    }
}
const log = content => console.log(chalk.green(`LOG-- ${content}`))
const logWarning = content => console.log(chalk.yellowBright(`WARN-- ${content}`))
const logErr = content => console.log(chalk.red(`ERR-- ${content}`))

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
    uppercaseFirst,
    toThousandFilter,
    log,
    logWarning,
    logErr
}
