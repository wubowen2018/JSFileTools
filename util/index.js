const chalk = require('chalk')

function adjustPath(pathStr) {
    if (pathStr != '.') {
        console.log(chalk.red(`ERR-- param ${pathStr} must be a relative path string. eg:'./hello/world'`));
    }
}
const log = content => console.log(chalk.green(`LOG-- ${content}`))
const logWarning = content => console.log(chalk.yellowBright(`WARN-- ${content}`))
const logErr = content => console.log(chalk.red(`ERR-- ${content}`))

module.exports = {
    adjustPath,
    log,
    logWarning,
    logErr
}
