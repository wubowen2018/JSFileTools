var { adjustPath, logWarning, logTime, log} = require('../util')

console.log('===============================');
// logTime(new Date().toString().match(/(\d\d:){2}\d{2}/g))
logTime(new Date().toString())


let arr = [1,25,6,98,42,30]
let newArr = arr.sort((x,y)=>{return x-y})
log(arr)
log(newArr)




console.log('===============================');










