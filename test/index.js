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



// var str = "aaaabbbbbcc"
// var reg = /(\w)\1*/g
// var temp = str.replace(reg,"$1")
// console.log(temp);  

let mSet = new Set(["jimmy","Jeremy","jim"])
mSet.add("wubowen");
console.log(mSet);

mSet.delete("jim");
console.log(mSet);
console.log(mSet.size);

let str = "hello wobowen"
for (let index = 0; index < str.length; index++) {
    !(str[index] == " ") && mSet.add(str[index])  
}
console.log(mSet);




console.log('===============================');










