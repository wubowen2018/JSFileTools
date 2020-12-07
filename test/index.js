const chalk = require('chalk')
var { adjustPath, logWarning, logErr, log} = require('../util')
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
// var str = "aaaabbbbbcc"
// var reg = /(\w)\1*/g
// var temp = str.replace(reg,"$1")
// console.log(temp);  

// let mSet = new Set(["jimmy","Jeremy","jim"])
// mSet.add("wubowen");
// console.log(mSet);

// mSet.delete("jim");
// console.log(mSet);
// console.log(mSet.size);

//利用set放入不重复给数组去重
// let str = "hello wobowen"
// for (let index = 0; index < str.length; index++) {
//     !(str[index] == " ") && mSet.add(str[index])  
// }
// console.log(mSet);

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

logWarning(numberFormatter(12356450.12000302,2))







console.log('===============================');










