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

Person.prototype.name='sunny'
Person.prototype.height = 100
var person = new Person()

person.eat()

console.log(person.__proto__); 



console.log('===============================');










