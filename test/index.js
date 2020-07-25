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

<<<<<<< HEAD
var str = "aaaabbbbbcc"
var reg = /(\w)\1*/g
var temp = str.replace(reg,"$1")
console.log(temp);  

=======
Person.prototype.name='sunny'
Person.prototype.height = 100
var person = new Person()

person.eat()

console.log(person.__proto__); 
>>>>>>> 132df7d9f9e132bbe22bc9491b9300a5c72c9759



console.log('===============================');










