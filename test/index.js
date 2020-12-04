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
let getCar = 0

let misCar = 0

function setPrize(){
    let prizeArr = ["山羊","山羊","汽车"];
    prizeArr.sort( () => Math.random() - 0.5 )
    return prizeArr;
}


for (let i = 0; i < 1000; i++) {
    const arr = setPrize()
    const index = parseInt(Math.random() * 3)
    arr.splice(index, 1);

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "山羊" ) {
            arr.splice(j, 1); 
        }
    }

    if(arr[0] === "汽车"){
        getCar++
    } else{
        misCar++ 
    }  
}
    
console.log(getCar, misCar );










console.log('===============================');










