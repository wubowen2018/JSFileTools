var mkdir = require('./lib/mkdir')
var rmdir = require('./lib/rmdir')
var touch = require('./lib/touch')
var remove = require('./lib/remove')
var copy = require('./lib/copy')
var cut = require('./lib/cut')
//require('./module/*.js')

module.exports = {
    mkdir,
    rmdir,
    touch,
    remove,
    copy,
    cut
}