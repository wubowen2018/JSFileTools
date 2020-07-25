const chalk = require('chalk')
var { adjustPath,logWarning,logErr } = require('../lib/util')
const {mkdir,rmdir,touch,remove,copy,cut} = require("../index")
var fs = require('fs')

// touch("./test/temp/aa/bb.txt")
// touch("./test/temp/aa/bb")
// mkdir("./test/temp/cc")
// remove("./bb.txt")

// rmdir("./cc")

// copy("./test/temp/", ".")
// remove("./test/temp/aa/bb.txt")
// rmdir("./test/temp")
// cut('./test/temp','.')





console.log('===============================');

function Person() {
    this.eat = function (){
        this.height ++
    }
}

var str = "aaaabbbbbcc"
var reg = /(\w)\1*/g
var temp = str.replace(reg,"$1")
console.log(temp);  




console.log('===============================');










